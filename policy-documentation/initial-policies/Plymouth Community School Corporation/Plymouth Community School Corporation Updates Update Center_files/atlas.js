$(function() {
    "use strict";
    var Engine = {
        ui: {
            menuSelectedState: function() {
                $(".cs-main-menu .cs-mmenu-li > a").each(function() {
                    var $this = $(this);
                    if ($this.attr('href') === window.location.pathname + window.location.search || $this.attr('href') === window.location.href) {
                        $this.parents('li').addClass('selected');
                    }
                });
            }
			// end navSelectedState
		},
		// end ui
        modules: {
        },
		// end modules
        widgets: {
        },
		// end widgets
        utils: {
            matchHeight: function() {
                $('.mh').matchHeight();
            }
			// end matchHeight
        },
		// end utils
        forms: {
        },
		// end forms
        tweaks: {
        }
		// end tweaks
    };
    Engine.ui.menuSelectedState();
    Engine.utils.matchHeight();
});