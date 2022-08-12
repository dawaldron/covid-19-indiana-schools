;(function($, window, document, undefined) {
    'use strict';

    var Playback = function(carousel) {
        this._core = carousel;

        this._initialized = false;

        this._controls = {};

        this._enabled = true;
        this._paused = false;

        this.$element = this._core.$element;

        this._handlers = {
            'play.owl.autoplay': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('play', null, 'playback');
                    this._paused = false;
                    this.draw();
                    this._core.trigger('play', null, 'playback');
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('stop', null, 'playback');
                    this._paused = true;
                    this.draw();
                    this._core.trigger('stop', null, 'playback');
                }
            }, this),
            'initialized.owl.navigation': $.proxy(function(e) {
                this.dots();
            }, this),
            'refreshed.owl.navigation': $.proxy(function(e) {
                this.dots();
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'playback');
                    this.initialize();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'playback');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'playback');
                    this.draw();
                    this._core.trigger('refreshed', null, 'playback');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Playback.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    Playback.Defaults = {
        playback: false,
        playbackText: [
            '<em class="owl-playback-button-icon owl-icon-play"><span class="sr-only">Play</span></em>',
            '<em class="owl-playback-button-icon owl-icon-pause"><span class="sr-only">Pause</span></em>'
        ],
        playbackElement: 'button type="button" role="presentation"',
        playbackContainer: false,
        playbackContainerClass: 'cs-owl-slider-playback owl-playback',
        playbackContainerParent: false,
        playbackAria: [
            'aria-label="play"',
            'aria-label="pause"'
        ],
        playbackClass: [
            'owl-playback-button owl-play',
            'owl-playback-button owl-pause'
        ],
    };

    Playback.prototype.dots = function () {
        this._core._plugins.navigation._controls.$absolute.children().each(function (index, elem) {
            $(elem).append('<span class="sr-only">Slide ' + (index + 1) + '</span>');
            $(elem).attr( 'aria-label', 'Slide ' + (index + 1));
        });
    };

    Playback.prototype.initialize = function() {
        var settings = this._core.settings;

        this._enabled = (settings.playback && settings.autoplay && this._core._items.length && this._core._items.length > 1);

        this._paused = ( ! settings.autoplay);

        // create DOM structure for relative playback
        if (this._enabled) {
            this._controls.$relative = (settings.playbackContainer ? $(settings.playbackContainer)
                : $('<div>').addClass(settings.playbackContainerClass).appendTo((settings.playbackContainerParent) ? this.$element.find(settings.playbackContainerParent) : this.$element)).addClass('enabled');
            this._controls.$play = $('<' + settings.playbackElement + ' ' + settings.playbackAria[0] + '>')
                .addClass(settings.playbackClass[0])
                .html(settings.playbackText[0])
                .prependTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.play();
                }, this));
            this._controls.$pause = $('<' + settings.playbackElement + ' ' + settings.playbackAria[1] + '>')
                .addClass(settings.playbackClass[1])
                .html(settings.playbackText[1])
                .appendTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.pause();
                }, this));
        }
    };

    Playback.prototype.destroy = function() {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === '$relative' && settings.playbackContainer) {
                this._controls[control].html('');
            } else {
                this._controls[control].remove();
            }
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    Playback.prototype.draw = function() {
        var settings = this._core.settings,
            disabled = this._core.items().length <= 0,
            autoplay = settings.autoplay;
        if (this._enabled) {
            this._controls.$relative.toggleClass('enabled', !settings.playback || disabled || !autoplay);
            this._controls.$play.toggleClass('enabled', !this._paused);
            this._controls.$pause.toggleClass('enabled', this._paused);
        }
    };

    Playback.prototype.play = function() {
        this.$element.trigger('play.owl.autoplay');
    };

    Playback.prototype.pause = function() {
        this.$element.trigger('stop.owl.autoplay');
    };


    $.fn.owlCarousel.Constructor.Plugins.Playback = Playback;

})(window.Zepto || window.jQuery, window, document);
