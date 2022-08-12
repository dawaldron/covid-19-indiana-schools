;(function(window, document, $, undefined) {
    function Campussuite() {
        this.Widgets = (function() {
            var Widgets = function() {
                var self = this;
                self._loaders = {};
            };
            $.extend(Widgets.prototype, {
                registration: function(name, Plugin) {
                    var self = this;
                    if ($.fn['campussuite_widget_' + name] === undefined) {
                        $.fn['campussuite_widget_' + name] = (function(Plugin) {
                            return function(data) {
                                this.each(function() {
                                    $.data(this, name, new Plugin(
                                        this,
                                        (data !== undefined) ? data : {}
                                    ));
                                });
                                return this;
                            };
                        })(Plugin);
                    }
                    return self;
                },
                run: function(payload) {
                    var self = this;
                    if (window.head !== undefined) {
                        for (var i = 0; i < payload.styles.length; i++) {
                            var style = payload.styles[i];
                            if (style.match(/^\/[^\/]+/)) {
                                style = window.top.location.protocol.replace(':', '') + '://' + window.top.location.host + style;
                            }
                            window.head.load(style);
                        }
                        for (var j = 0; j < payload.scripts.length; j++) {
                            var script = payload.scripts[j];
                            if (script.match(/^\/[^\/]+/)) {
                                script = window.top.location.protocol.replace(':', '') + '://' + window.top.location.host + script;
                            }
                            window.head.load(script);
                        }
                        if (payload.plugin !== undefined && payload.plugin !== null && payload.plugin !== '') {
                            if ( ! self._loaders.hasOwnProperty(payload.plugin)) {
                                self._loaders[payload.plugin] = $.Deferred();
                            }
                            window.head.load('https://' + CAMPUSSUITE.dashboard + '/widgets/' + payload.plugin + '/plugin.js', function() {
                                self._loaders[payload.plugin].resolve();
                            });
                            self._loaders[payload.plugin].done(function() {
                                $(function() {
                                    try {
                                        $('#' + payload.pluginId)['campussuite_widget_' + payload.plugin](payload.pluginOptions);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                });
                            });
                        }
                    }
                }
            });
            return new Widgets();
        })();
        this.Tools = (function() {
            var Tools = function() {};
            $.extend(Tools.prototype, {
                jslink: function(link, newWindow) {
                    if (newWindow === undefined || newWindow === null) {
                        newWindow = false;
                    }
                    newWindow = (newWindow === true);
                    if (newWindow) {
                        window.open(link, '_blank');
                    } else {
                        window.location.href = link;
                    }
                }
            });
            return new Tools();
        })();
    }
    window.Campussuite = new Campussuite();
})(window, document, jQuery);
