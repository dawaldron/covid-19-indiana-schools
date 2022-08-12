// jQuery widget for section layers

$.widget("sw.sectionlayer", {

    options: {
        size: 'medium',
        position: 'right',
        elements: []
    },

    _settings: {
        current: null,
        isOpen: false,
        width: null,
        closeBtn: null,
        closeBtnAfter: null,
        nextLayerLevel: 1,
        overlay: null,
        layerOpeners: [],
        panelHtmlEnvelope: [],
        panelHtmlContainer: []
    },

    _create: function () {
        var panel = this;

        // get size
        switch (panel.options.size) {
            case "large":
                panel._settings.width = 760;
                break;
            case "xlarge":
                panel._settings.width = 1800;
                break;
            case "small":
                panel._settings.width = 320;
                break;
            default:
                panel._settings.width = 640;
                break;
        }

        var pos = panel.options.position;
        var width = panel._settings.width;
        var size = panel.options.size;
        var classesToAdd = [
            'section-layer ',
            pos,
            size
        ];

        var cssToAdd = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 'auto',
            left: 'auto',
            overflow: 'hidden',
            border: 0,
            height: '100%',
            zIndex: 9999,
            backgroundColor: 'transparent',
            width: '90%',
            maxWidth: width + 'px'
        };

        cssToAdd[pos] = -(width) + 'px';

        var cssToAddInner = {
            display: 'block',
            position: 'absolute',
            height: '100%',
            backgroundColor: '#ffffff',
            overflow: 'auto',
            left: '31px',
            right: 0,
            top: 0,
            bottom: 0
        };

        this._settings.panelHtmlEnvelope[1] = panel.element;

        this._settings.panelHtmlEnvelope[1].css(cssToAdd).addClass(classesToAdd.join(' ').toString()).appendTo('body');

        this._settings.panelHtmlContainer[1] = $("<div class='section-layer-container'></div>");
        this._settings.panelHtmlEnvelope[1].append(this._settings.panelHtmlContainer[1]);
        this._settings.panelHtmlContainer[1].css(cssToAddInner);

        var topPanelId = this._settings.panelHtmlEnvelope[1].attr('id');

        // block interaction
        //BlockUserInteraction(panel.element.attr('id') + " div.section-layer-container", "<div class='ui-loading large'></div>", 2, 0, 1);

        // add second layer

        cssToAdd.width = '85%';
        cssToAdd.maxWidth = (width - 50) + 'px';

        this._settings.panelHtmlEnvelope[2] = $("<div id='" + topPanelId + "2'></div>");
        this._settings.panelHtmlEnvelope[1].after(this._settings.panelHtmlEnvelope[2]);
        this._settings.panelHtmlEnvelope[2].css(cssToAdd).addClass(classesToAdd.join(' ').toString()).addClass("layer2").addClass(topPanelId + "-subpanel");

        this._settings.panelHtmlContainer[2] = $("<div class='section-layer-container'></div>");
        this._settings.panelHtmlEnvelope[2].append(this._settings.panelHtmlContainer[2]);
        this._settings.panelHtmlContainer[2].css(cssToAddInner);

        // add third layer

        cssToAdd.maxWidth = (width - 100) + 'px';

        this._settings.panelHtmlEnvelope[3] = $("<div id='" + topPanelId + "3'></div>");
        this._settings.panelHtmlEnvelope[2].after(this._settings.panelHtmlEnvelope[3]);
        this._settings.panelHtmlEnvelope[3].css(cssToAdd).addClass(classesToAdd.join(' ').toString()).addClass("layer3").addClass(topPanelId + "-subpanel");

        this._settings.panelHtmlContainer[3] = $("<div class='section-layer-container'></div>");
        this._settings.panelHtmlEnvelope[3].append(this._settings.panelHtmlContainer[3]);
        this._settings.panelHtmlContainer[3].css(cssToAddInner);

        // block interaction
        //BlockUserInteraction(panel.element.attr('id') + "2" + " div.section-layer-container", "<div class='ui-loading large'></div>", 2, 0, 1);

        var cssCloseButton = {
            width: '32px',
            height: '40px',
            position: 'absolute',
            margin: 0,
            zIndex: '99999',
            left: '15px',
            right: 'auto',
            top: '15px',
            cursor: 'pointer',
            backgroundColor: '#c575d5',
            fontFamily: 'OpenSans-Light',
            lineHeight: '1.4',
            boxSizing: 'border-box',
            padding: '0px 0 0 8px', //0 0 0 7
            fontSize: '28px', //30
            color: 'white',
            '-webkit-transition': '-webkit-transform 300ms, background-color 250ms, color 250ms',
            transition: 'transform 300ms, background-color 250ms, color 250ms'
        };

        var cssCloseButtonAfter = {
            width: '0',
            height: '0',
            zIndex: '99999',
            position: 'absolute',
            content: "",
            top: '55px',
            left: '15px',
            right: 'auto',
            border: '8px solid transparent',
            borderTopColor: '#8c4f98',
            borderRightColor: '#8c4f98'
        };

        if (panel.options.position == 'left') {
            cssCloseButton.right = '15px';
            cssCloseButton.left = 'auto';
            cssCloseButtonAfter.right = '15px';
            cssCloseButtonAfter.left = 'auto';
            cssCloseButtonAfter.borderLeftColor = '#8c4f98';
            cssCloseButtonAfter.borderRightColor = 'transparent';
        }

        panel._settings.closeBtn = $("<div class='section-layer-close' title=\"I'm done. Close this.\" role='button' aria-label=\"I'm done. Close this.\" tabindex='0'>&times;</div>");
        panel._settings.closeBtnAfter = $("<div class='section-layer-close-after'></div>");

        panel._settings.closeBtn.css(cssCloseButton);
        panel._settings.closeBtnAfter.css(cssCloseButtonAfter);

        panel._settings.closeBtn.click(function () {
            var button = $(this);
            button.css('transform', 'translateY(2px)');

            setTimeout( function () {
                button.css('transform', 'translateY(0px)');
                panel.close();
            }, 150);

        });

        panel._settings.closeBtn.hover(function () {
            $(this).css('background-color', '#bb5cca');
        }, function () {
            $(this).css('background-color', '#c575d5');
        });

        panel.getEnvelopeBoxForLayer(1).on("keydown", function (e) {
            if (e.keyCode == 27) {
                var appNameEdit = $(".app-edit-title-change:visible").length;
                if (appNameEdit > 0) {
                    $('.app-edit-title-change').blur().parent().focus();
                    return;
                } else {
                    panel.close();
                }
            }
        });

        panel.getEnvelopeBoxForLayer(2).on("keydown", function (e) {
            if (e.keyCode == 27) {
                panel.close()
            }
        });

        panel.getEnvelopeBoxForLayer(3).on("keydown", function (e) {
            if (e.keyCode == 27) {
                panel.close()
            }
        });

        panel._settings.closeBtn.on("keydown", function (e) {
            switch (e.keyCode) {
                case 13://enter
                case 27://esc
                    e.preventDefault();
                    e.stopPropagation();
                    $(this).click();
                    break;
                case 9://tab
                    e.preventDefault();
                    if (e.shiftKey) {
                        //last item with tab but not itself - close button
                        $(this).parent().find("[tabindex]:not([tabindex='-1'])").not(this).last().focus();
                    } else {
                        //first item with tabindex
                        $(this).parent().find("[tabindex]:not([tabindex='-1']):first").focus();
                    }
                    break;
            }
        });

        this._settings.panelHtmlEnvelope[1].append(panel._settings.closeBtn);
        this._settings.panelHtmlEnvelope[1].append(panel._settings.closeBtnAfter);

        var cssOverlay = {
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: '9999',
            backgroundColor: '#000000',
            opacity: .5
        };

        panel._settings.overlay = $("<div></div>");

        panel._settings.overlay.css(cssOverlay);

        var elementArray = this.options.elements;
        for (var i = 0; i < elementArray.length; i++) {

            var item = elementArray[i];


            $('#' + item.elementId).data({
                loadUrl: item.url
            });

            $('#' + item.elementId).click(function () {

                var thisId = $(this).attr('id');
                var thisData = $(this).data();
                panel._settings.layerOpeners[1] = $(this);

                // is this the previous loaded?
                if (panel._settings.current == thisId) {
                    // last loaded. reload and open if closed
                    panel.load(thisData);

                } else {
                    // not last loaded. is panel open?
                    if (panel._settings.isOpen) {
                        // panel opened. block and reload.
                        panel.load(thisData);
                    } else {
                        // panel closed. clear, load, and open
                        panel.load(thisData);
                    }
                }

                // remove selected from current
                if (panel._settings.current) {
                    $('#' + panel._settings.current).removeClass('selected');
                }

                // set current
                panel._settings.current = thisId;
                $(this).addClass('selected');
            });
        }
    },

    _setOption: function (key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function () {

    },

    getContentBoxForLayer: function (layer) {
        return this._settings.panelHtmlContainer[layer];
    },

    getEnvelopeBoxForLayer: function (layer) {
        return this._settings.panelHtmlEnvelope[layer];
    },

    load: function (thisData, layer) {
        var panel = this;
        // close all layers when 1st layer is opened and delete content of layer
        if (!layer || layer == 1) {
            layer = 1;
            this.close(true); // this delete content of layers
        } else {
            panel.getContentBoxForLayer(layer).html('');
        }

        // block interaction
        BlockUserInteraction(this.getEnvelopeBoxForLayer(layer).attr("id") + " div.section-layer-container", "<div class='ui-loading large'></div>", 2, 0, 1);

        // load content
        (thisData.requestType && thisData.requestType.toLowerCase() == 'post' ? $.post: $.get) (thisData.loadUrl, thisData.ajaxData ? thisData.ajaxData : "", function (data) {
            panel.getContentBoxForLayer(layer).html(data);
        });

        this.open(layer);
    },

    open: function (layer) {
        var pos = this.options.position;
        var cssToAdd = {};
        var cssToAddInner = {};
        cssToAdd[pos] = '0px';
        cssToAdd.transition = '.5s ease all';

        if (pos == 'left') {
            cssToAddInner.right = '31px';
            cssToAddInner.left = 0;
        }

        if (!layer || layer === 1) {
            this._settings.nextLayerLevel = 1;
            this.getEnvelopeBoxForLayer(1).css(cssToAdd).addClass('opened');
            this.getContentBoxForLayer(1).css(cssToAddInner);

            this.getEnvelopeBoxForLayer(1).before(this._settings.overlay);

            $('html').css('overflow', 'hidden');
            $('body').css('position', 'fixed');
            $('body').css('width', '100%');
        } else {
            this.getEnvelopeBoxForLayer(layer).css(cssToAdd).addClass('opened');
            this.getContentBoxForLayer(layer).css(cssToAddInner);

            this._settings.closeBtn.appendTo(this.getEnvelopeBoxForLayer(layer));
            this._settings.closeBtnAfter.appendTo(this.getEnvelopeBoxForLayer(layer));
            this.getEnvelopeBoxForLayer(layer).before(this._settings.overlay);
        }

        var panel = this.getContentBoxForLayer(this._settings.nextLayerLevel);
        setTimeout(function () {
            var firstFocusableParentDiv = panel.find("h1:first");
            firstFocusableParentDiv.attr("tabindex", "-1");
            firstFocusableParentDiv.focus();
        }, 500);

        this._settings.nextLayerLevel++;
        this._settings.isOpen = true;
    },

    openLayer: function (data) {
        var layerToOpen = this._settings.nextLayerLevel;
        if (layerToOpen > 1 && this._settings.isOpen) {
            this.getEnvelopeBoxForLayer(layerToOpen).css('display', 'block');
            this._settings.layerOpeners[layerToOpen] = data.opener;
            this.load({
                loadUrl: data.url,
                ajaxData: data.ajaxData || {},
                requestType: data.requestType || 'get'
            }, layerToOpen);
        }
    },

    close: function (closeAll, callBack) {
        var panel = this;
        var pos = panel.options.position;
        var width = panel._settings.width;

        var cssToAdd = {};
        cssToAdd[pos] = -(width) + 'px';

        function closeTopLayer() {
            panel.getEnvelopeBoxForLayer(1).css(cssToAdd).removeClass('opened');
            panel._settings.isOpen = false;

            if (panel.options.onClose) {
                panel.options.onClose.call();
            }

            panel._settings.overlay.remove();

            $('#' + panel._settings.current).removeClass('selected');
            panel.getContentBoxForLayer(1).html('');
            //$('body').css('overflow', 'initial');
            $('html').css('overflow', 'auto');
            $('body').css('position', 'relative');
            $('body').css('width', 'initial');

            if (panel._settings.layerOpeners[1] != null) {
                panel._settings.layerOpeners[1].focus();
                panel._settings.layerOpeners[1] = null;
            } else {
                // When closing the last panel, set focus to the original button
                $('#' + panel._settings.current).focus();
            }
            panel._settings.isOpen = false;
            panel._settings.nextLayerLevel = 1;
        }

        function closeSubLayer(layer) {
            if (layer >= panel._settings.nextLayerLevel) {
                return; //panel not opened
            }
            panel.getEnvelopeBoxForLayer(layer).css(cssToAdd).removeClass('opened');
            panel.getContentBoxForLayer(layer).html('');

            panel._settings.closeBtn.appendTo(panel.getEnvelopeBoxForLayer(layer-1));
            panel._settings.closeBtnAfter.appendTo(panel.getEnvelopeBoxForLayer(layer-1));
            panel.getEnvelopeBoxForLayer(layer - 1).before(panel._settings.overlay);
            panel._settings.nextLayerLevel--;

            if (panel._settings.layerOpeners[layer] != null) {
                panel._settings.layerOpeners[layer].focus();
                panel._settings.layerOpeners[layer] = null;
            }
        }

        if (closeAll) {
            closeSubLayer(3);
            closeSubLayer(2);
            closeTopLayer();
        } else if (panel._settings.nextLayerLevel > 2) {
            closeSubLayer(panel._settings.nextLayerLevel - 1);
        } else {
            closeTopLayer();
        }

        if (typeof callBack == "function") {
            callBack();
        }
    },

    _destroy: function () {

    }

});

// END jQuery widget for section layers