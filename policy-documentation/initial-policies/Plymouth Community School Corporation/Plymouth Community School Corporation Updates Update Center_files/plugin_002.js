;(function(window, document, $, undefined) {

    // ensure required namespaces/tools are loaded
    if (window.Campussuite === undefined) return;
    if (window.Campussuite.Widgets === undefined) return;

    // plugin definition
    function Plugin(element, data) {

        // link to self
        var self = this;

        // need to save off some stuff
        self.element = element;
        var $element = self.$element = $(element);
        self.data = data;

        // register mobile toggler
        $('.cs-menu-toggle').on('click', function() {
            $('.cs-menu-toggle').attr('aria-expanded', 'true');
            //$('.cs-mmenu-dd-container').hide();
            $('.cs-mmenu-li').removeClass('active');
            $('div.wrapper').addClass('cs-menu-open');
        });

        // register mobile overlay click to close
        $('.content-overlay,.cs-menu-close').on('click', function() {
            $('.cs-menu-toggle').attr('aria-expanded', 'false');
            $('div.wrapper').removeClass('cs-menu-open');
            //$('.cs-mmenu-dd-container').hide();
            $('.cs-mmenu-li').removeClass('active');
        });

        // register click handler for dealing with the arrow clicks
        $element.on('click', '.cs-mmenu-li-caret', function(e) {
            var $delegate = $(e.delegateTarget),
                $target = $(e.currentTarget),
                $link = $target.prev('a'),
                $item = $link.closest('li'),
                $next = $item.find('> .cs-mmenu-dd-container'),
                active = ($item.hasClass('active'));
            //$delegate.find('.cs-mmenu-dd-container').hide();
            $delegate.find('.cs-mmenu-li').removeClass('active');
            if ( ! active) {
                //$next.show();
                $item.addClass('active');
            }
            e.stopPropagation();
            e.preventDefault();
        });

        // register click handler for dealing with the arrow clicks
        $element.on('click', '.cs-mmenu-li-item-link', function(e) {
            var $delegate = $(e.delegateTarget),
                $link = $(e.currentTarget),
                $item = $link.closest('li'),
                $next = $link.find(' > .cs-mmenu-dd-container'),
                active = ($item.hasClass('active')),
                href = $link.attr('href');
            if (href === undefined || href === null || href === '' || href === '#') {
                //$delegate.find('.cs-mmenu-dd-container').hide();
                $delegate.find('.cs-mmenu-li').removeClass('active');
                if ( ! active) {
                    //$next.show();
                    $item.addClass('active');
                }
                e.preventDefault();
            }
        });

        // trigger doubletap
        //$element.doubleTapToGo();

        // handle showing/hiding of menus for keyboard navigation
        // it appears that when tabbing keyboard navigation is used, a keyup event is done on the link itself
        $element.on('focus', '.cs-mmenu-li .cs-mmenu-li-item-link,.cs-mmenu-li .cs-mmenu-li-caret', function (e) {
            var $link = $(e.currentTarget),
                $item = $link.closest('.cs-mmenu-li'),
                $items = $element.find('.cs-mmenu-li');
            if (e.currentTarget !== e.target) {
                return;
            }
            $items.removeClass('show-menu');
            $items.find('.cs-mmenu-dd-container a').attr('tabindex', '-1');
            $items.find('[aria-expanded]').attr('aria-expanded', 'false');
            $items.find('[aria-hidden]').attr('aria-hidden', 'true');
        });
        // need to handle the blurs of the items, edge cases for when the dropdowns don't contain links
        $element.on('blur', '.cs-mmenu-li .cs-mmenu-li-item-link,.cs-mmenu-li .cs-mmenu-li-caret', function (e) {
            var $link = $(e.currentTarget),
                $related = $(e.relatedTarget),
                $items = $element.find('.cs-mmenu-li');
            if (e.currentTarget !== e.target) {
                return;
            }
            if ($element.has($related).length === 0) {
                $items.removeClass('show-menu');
                $items.find('.cs-mmenu-dd-container a').attr('tabindex', '-1');
                $element.find('[aria-expanded]').attr('aria-expanded', 'false');
                $element.find('[aria-hidden]').attr('aria-hidden', 'true');
            }
        });
        $element.on('blur', '.cs-mmenu-dd-container a', function (e) {
            var $link = $(e.currentTarget),
                $related = $(e.relatedTarget),
                $menu = $link.closest('.cs-mmenu-dd-container'),
                $item = $menu.closest('.cs-mmenu-li'),
                $items = $element.find('.cs-mmenu-li');
            if ($menu.has($related).length === 0) {
                $items.removeClass('show-menu');
                $items.find('.cs-mmenu-dd-container a').attr('tabindex', '-1');
                $item.find('[aria-expanded]').attr('aria-expanded', 'false');
                $item.find('[aria-hidden]').attr('aria-hidden', 'true');
            }
        });
        $element.closest('.drawer').on('blur', 'a', function (e) {
            var $target = $(e.currentTarget),
                $related = $(e.relatedTarget),
                $drawer = $(e.delegateTarget);
            if ($drawer.has($related).length === 0) {
                $drawer.closest('.cs-menu-open').removeClass('cs-menu-open');
                $drawer.find('[aria-expanded]').attr('aria-expanded', 'false');
                $drawer.find('[aria-hidden]').attr('aria-hidden', 'true');
            }
        });
        $element.on('click', '.cs-mmenu-li .cs-mmenu-li-caret', function (e) {
            var $toggle = $(e.currentTarget),
                $link = $toggle.closest('.cs-mmenu-li-item-link'),
                $item = $toggle.closest('.cs-mmenu-li'),
                $menu = $item.find('.cs-mmenu-dd-container'),
                $items = $element.find('.cs-mmenu-li').not($item);
            $items.removeClass('show-menu');
            $items.removeClass('active');
            $items.find('.cs-mmenu-dd-container a').attr('tabindex', '-1');
            $element.find('[aria-expanded]').attr('aria-expanded', 'false');
            $element.find('[aria-hidden]').attr('aria-hidden', 'true');
            $item.toggleClass('show-menu');
            $item.toggleClass('active', $item.is('.show-menu'));
            $menu.find('a').attr('tabindex', ($item.is('.show-menu')) ? '0' : '-1');
            $item.find('[aria-expanded]').attr('aria-expanded', 'true');
            $item.find('[aria-hidden]').attr('aria-hidden', 'false');
            e.preventDefault();
        });
        $element.on('keydown', '.cs-mmenu-li .cs-mmenu-li-caret', function(e) {
            var $toggle = $(e.currentTarget),
                $link = $toggle.closest('.cs-mmenu-li-item-link'),
                $item = $toggle.closest('.cs-mmenu-li'),
                $menu = $item.find('.cs-mmenu-dd-container'),
                $items = $element.find('.cs-mmenu-li');
            if ([13,14,32].indexOf(e.keyCode) !== -1) {
                if (e.currentTarget !== e.target) {
                    return;
                }
                switch (e.keyCode) {

                    // trigger opening/closing the appropriate dropdown
                    case 13:// return
                    case 14:// enter
                    case 32:// space
                        $item.toggleClass('show-menu');
                        $menu.find('a').attr('tabindex', ($item.is('.show-menu')) ? '0' : '-1');
                        if ($item.is('.show-menu')) {
                            $item.find('.cs-mmenu-dd-container a').first().focus();
                        }
                        $item.find('[aria-expanded]').attr('aria-expanded', 'true');
                        $item.find('[aria-hidden]').attr('aria-hidden', 'false');
                        break;
                }
                e.preventDefault();
            }
        });

        // register up/down handlers
        $element.on('keydown', '.cs-mmenu-li .cs-mmenu-li-item-link, .cs-mmenu-li .cs-mmenu-li-caret', function (e) {
            var $target = $(e.currentTarget);
            if ([35,36,37,38,39,40].indexOf(e.keyCode) !== -1) {
                var $parent = $target.closest('.cs-mmenu-li'),
                    $items = $parent.closest('.cs-main-menu').find('.cs-mmenu-li .cs-mmenu-li-item-link[tabindex!="-1"], .cs-mmenu-li .cs-mmenu-li-caret'),
                    first = $target.is($items.first()),
                    last = $target.is($items.last()),
                    $next = null;
                if (e.currentTarget !== e.target) {
                    return;
                }
                switch (e.keyCode) {

                    // go to the last main menu list item/dropdown button
                    case 35:// end
                        $next = $items.eq($items.length - 1);
                        break;

                    // go to the first main menu list item/dropdown button
                    case 36:// home
                        $next = $items.eq(0);
                        break;

                    // go to the previous main menu list item/dropdown button
                    case 37:// left
                    case 38:// up
                        $next = $items.eq((first) ? ($items.length - 1) : ($items.index($target) - 1));
                        break;

                    // go to the next main menu list item/dropdown button
                    case 39:// right
                    case 40:// down
                        $next = $items.eq((last) ? 0 : ($items.index($target) + 1));
                        break;
                }
                $next.focus();
                e.preventDefault();
            }
        });
        $element.on('keydown', '.cs-mmenu-dd-container a', function (e) {
            var $target = $(e.currentTarget);
            if ([27,35,36,37,38,39,40].indexOf(e.keyCode) !== -1) {
                var $parent = $target.closest('.cs-mmenu-dd-container'),
                    $items = $parent.find('a'),
                    first = $target.is($items.first()),
                    last = $target.is($items.last()),
                    $next = null;
                switch (e.keyCode) {

                    // back out of the current dropdown menu
                    case 27:// escape
                        $next = $target.closest('.cs-mmenu-li').find('> a');
                        break;

                    // go to the last link in the menu
                    case 35:// end
                        $next = $items.eq($items.length - 1);
                        break;

                    // go to the first link in the menu
                    case 36:// home
                        $next = $items.eq(0);
                        break;

                    // go to the previous link
                    case 37:// left
                    case 38:// up
                        $next = $items.eq((first) ? ($items.length - 1) : ($items.index($target) - 1));
                        break;

                    // go to the next link
                    case 39:// right
                    case 40:// down
                        $next = $items.eq((last) ? 0 : ($items.index($target) + 1));
                        break;
                }
                $next.focus();
                e.preventDefault();
            }
        });

    }

    // register the widget plugin inside of jquery
    window.Campussuite.Widgets.registration('MegaMenu', Plugin);

})(window, document, jQuery);
