;(function(window, document, $, undefined) {
    if (window.Campussuite === undefined) return;
    if (window.Campussuite.Widgets === undefined) return;
    function Plugin(element, data) {
        var self = this;
        self.element = element;
        var $element = self.$element = $(element);
        self.data = data;

        // grab the owl carousel element
        var $owl = $element.find('.cs-alert-banner__content');

        // handle owl events
        $owl
            .on('translated.owl.carousel refreshed.owl.carousel', function (e) {
                var $item = $owl.find('.owl-item.active'),
                    $items = $owl.find('.owl-item:not(.active)'),
                    $wrap = $item.closest('.cs-alert-banner__wrap');
                $item.find('a').attr('tabindex', '0');
                $items.find('a').attr('tabindex', '-1');
                $wrap
                    .removeClass(function (index, className) {
                        return (className.match(/(^|\s)cs-alert-banner__wrap--\S+/g) || [])
                            .join(' ')
                            .trim();
                    })
                    .addClass(function (index, className) {
                        return ($item.find('> .cs-alert-banner__item').attr('class').match(/(^|\s)cs-alert-banner__item--\S+/g) || [])
                            .map(function (value) {
                                return value.replace('cs-alert-banner__item--', 'cs-alert-banner__wrap--');
                            })
                            .join(' ')
                            .trim();
                    });
            })
            .on('focus', 'a,button:not(.owl-playback-button)', function (e) {
                var $triggers = $owl.find('a,button:not(.owl-playback-button)');
                if (data.autoplay && $triggers.filter($(e.target)).length) {
                    $owl.trigger('stop.owl.autoplay');
                }
            })
            .on('blur', 'a,button:not(.owl-playback-button)', function (e) {
                var $triggers = $owl.find('a,button:not(.owl-playback-button)');
                if (data.autoplay && ! $triggers.filter($(e.relatedTarget)).length) {
                    $owl.trigger('play.owl.autoplay');
                }
            })
            .on('click', '.cs-alert-banner__item a em[data-popup]', function (e) {
                var $link = $(e.currentTarget);
                $('#'+$link.attr('data-popup')).modal();
                e.preventDefault();
                e.stopPropagation();
                return false;
            })
            .on('keydown', '.owl-item', function (e) {
                var $item = $(e.currentTarget),
                    $items = $owl.find('.owl-item:not(.cloned)');
                if ([35,36,37,38,39,40].indexOf(e.keyCode) !== -1) {
                    var current = $items.index($item),
                        min = 0,
                        max = ($owl.find('.owl-item:not(.cloned)').length - 1),
                        next = null;
                    switch (e.keyCode) {

                        case 35:// end
                            next = max;
                            break;

                        case 36:// home
                            next = min;
                            break;

                        case 37:// left
                        case 38:// up
                            next = (current - 1);
                            if (data.loop && next < min) {
                                next = max;
                            } else {
                                next = Math.max(min, next);
                            }
                            break;

                        case 39:// right
                        case 40:// down
                            next = (current + 1);
                            if (data.loop && next > max) {
                                next = min;
                            } else {
                                next = Math.min(max, next);
                            }
                            break;

                    }
                    if (next !== current) {
                        $owl.trigger('to.owl.carousel', [next, 0]);
                        $($items[next]).find('a').focus();
                        $owl.trigger('refreshed.owl.carousel');
                    }
                    e.preventDefault();
                }
            });

        // run the carousel
        $owl.owlCarousel({
            autoplay: data.autoplay,
            autoplayTimeout: data.speed,
            loop: data.loop,
            singleItem: true,
            stopOnHover: true,
            nav: true,
            dots: false,
            autoHeight: true,
            navigation: false,
            transitionStyle : 'fade',
            items: 1,
            navText:[
                '<em aria-label="' + 'prev' + '" class="owl-prev-icon"></em><span class="sr-only">Previous</span>',
                '<em aria-label="' + 'next' + '" class="owl-next-icon"></em><span class="sr-only">Next</span>'
            ]
        });

        // handle modals
        $(function () {
            var $modals = $element.find('.cs-alert-banner__modals > .modal');
            $element.find('.cs-alert-banner__modals')
                .on('show.bs.modal', function (e) {
                    var $modal = $(e.target),
                        $next = $modal.next('.modal-nack');
                    $modal.find('.modal-body button[data-dismiss]')
                        .text($next.length ? 'View next message' : 'Close message');
                    $modal.find('[data-dismiss="modal"]')
                        .attr('data-toggle', $next.length ? 'modal' : null)
                        .attr('data-backdrop', $next.length ? 'static' : null)
                        .attr('data-remote', $next.length ? 'false' : null)
                        .attr('data-target', $next.length ? '#' + $next.attr('id') : null);
                    $modal.find('.modal-body')
                        .on('click', 'a[data-dismiss="modal"]', function (e) {
                            var $link = $(e.currentTarget),
                                href = $link.attr('href');
                            $link
                                .attr('data-toggle', null)
                                .attr('data-target', null);
                            if (href !== undefined && href !== null && href !== '' && href !== '#') {
                                window.location.assign(href);
                            }
                        });
                })
                .on('hide.bs.modal', function (e) {
                    var $modal = $(e.target);
                    window.localStorage.setItem('popups-' + $modal.attr('data-popup'), JSON.stringify(true));
                });
            if ($modals.length > 0) {
                for (var i = 0; i < $modals.length; i++) {
                    var $modal = $($modals[i]),
                        ack = JSON.parse(window.localStorage.getItem('popups-' + $modal.attr('data-popup'))) ? true : false;
                    $modal
                        .toggleClass('modal-ack', ack)
                        .toggleClass('modal-nack', !ack);
                }
                $nacks = $modals.filter('.modal-nack');
                if ($nacks.length > 0) {
                    $($nacks[0]).modal({
                        backdrop: 'static',
                        remote: false
                    });
                }
            }
        });
    }
    // register the widget plugin inside of jquery
    window.Campussuite.Widgets.registration('AlertBanner', Plugin);
})(window, document, jQuery);
