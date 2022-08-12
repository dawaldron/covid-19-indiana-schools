/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function($){


    $(function() {

        var config = $('html').data('config') || {};

        // Social buttons
        $('article[data-permalink]').socialButtons(config);

        // fit footer
        (function(main, meta, fn){

            if (!main.length) return;

            fn = function() {

                main.css('min-height','');

                meta = document.body.getBoundingClientRect();

                if (meta.height <= window.innerHeight) {
                    main.css('min-height', (main.outerHeight() + (window.innerHeight - meta.height))+'px');
                }

                return fn;
            };

            UIkit.$win.on('load resize', fn());

        })($('#tm-main'));

        // navbar fullpage overlay
        (function(){

            var overlay = $('<div class="tm-navbar-overlay" hidden></div>').appendTo('#tm-page');

            $('[data-uk-dropdown-overlay]').on({

                'beforeshow.uk.dropdown': function(params) {
                   overlay.removeAttr('hidden');
                },

                'hide.uk.dropdown': function(params) {
                    overlay.attr('hidden', "true");
                }
            });

        })();

        $(function(){
            $('[data-tm-particles]').each(function() { Bubbleize(this); });
        });

        // Typewrite
        $('[data-tw]', '#tm-page').each(function() {
            UIkit.scrollspy(this).on('inview.uk.scrollspy', function() {
                Typewrite(this);
            });
        });

        // Typewrite in special bottom position
        if ($('#tm-bottom-hero').length) {

            UIkit.$doc.on("scrolling.uk.document", (function() {

                var fn = function(){
                    if (UIkit.$win.scrollTop() >= $('#tm-page').innerHeight() - (window.innerHeight/3)) {
                        $('[data-tw]', '.tm-bottom-hero').each(function() {
                            Typewrite(this);
                            UIkit.$doc.off("scrolling.uk.document", fn);
                        });
                    }
                };

                return fn;
            })());

        }

    });

})(jQuery);
