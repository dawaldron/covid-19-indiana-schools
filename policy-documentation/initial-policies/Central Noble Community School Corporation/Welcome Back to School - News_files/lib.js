/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function($) {

    /**
     * Bubbleize js
     * based on http://codepen.io/rickzanutta/pen/eJKpZq
     */

    var _canvas = [];

    window.Bubbleize = function(ele) {

        var $this  = $(ele),
            canvas = $('<canvas>').css({'position': 'absolute', 'top': 0, 'left': 0})[0],
            ctx = canvas.getContext('2d'),
            particles = [],
            particleCount = 100,
            options = $.extend({
                color : '255,255,255'
            }, UIkit.Utils.options($this.attr('data-tm-particles')));


        options.color = parseColor(options.color);

        if (['absolute', 'fixed', 'relative'].indexOf($this.css('position')) == -1) {
            $this.addClass('uk-position-relative');
        }

        $this.prepend(canvas);

        canvas.width  = ele.offsetWidth;
        canvas.height = ele.offsetHeight;

        _canvas.push(canvas);

        for (var i = 0; i < particleCount; i++) {
            particles.push(new particle());
        }

        function particle() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 300;
            this.speed = 1 + Math.random();
            this.radius = Math.random() * 3;
            this.opacity = (Math.random() * 100) / 1000;
        }

        function loop() {
            draw();

            // firefox hang fix
            setTimeout(function(){
                requestAnimationFrame(loop);
            }, 15);
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                ctx.beginPath();
                ctx.fillStyle = 'rgba('+ options.color +',' + (p.opacity+0.5) + ')';
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
                ctx.fill();
                p.y -= p.speed;
                if (p.y <= -10)
                particles[i] = new particle();
            }
        }

        loop();
    };

    // Adjust canvas elements
    UIkit.$win.on('resize', UIkit.Utils.debounce(function(){

        _canvas.forEach(function(canvas){
            canvas.width  = canvas.parentNode.offsetWidth;
            canvas.height = canvas.parentNode.offsetHeight;
        });

    }, 100));

    window.Typewrite = function(element, options) {

        element = $(element);
        options = UIkit.Utils.options(element.attr('data-tw'));

        var speed = options.speed || 150,
            cls   = options.cls || '',
            text  = (element.text() || options.txt).trim().split(''),
            cs    = getComputedStyle(element[0]),
            write = function(pos, char, span) {

                pos = pos || 0;

                if (pos < text.length) {

                    char = text[pos++];

                    if (!char.trim()) char = '&nbsp;';

                    span = $('<span class="uk-display-inline-block">'+char+'</span>');

                    if (cls) {
                        span.addClass(cls);
                    }

                    element.append(span);
                    setTimeout(function() {
                        write(pos);
                    }, speed);

                } else {
                    element.css('min-height', '');
                }
            };

        element.css('min-height', cs.height).html('');
        write();
        element.addClass('type-writing');
    }

    // Parse an CSS-syntax color. Outputs an array [r, g, b]
    function parseColor(color) {

        var match, quadruplet;

        // Match #aabbcc
        if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
            quadruplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];

        // Match #abc
        } else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
            quadruplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17];

        // Match rgb(n, n, n)
        } else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];

        // Match rgba(n, n, n, n)
        } else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];

        // No browser returns rgb(n%, n%, n%), so little reason to support this format.
        } else {
            quadruplet = [255,255,255];
        }
        return quadruplet;
    }

})(jQuery);
