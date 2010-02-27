/*
Tooltip code originally from
http://sandbox.leigeber.com/tooltip/

Changed in order to use CSS 3 to render rounded corners.
*/

var tooltip = function() {
    var id = 'tt';
    var top = 3;
    var left = 3;
    var maxw = 300;
    var speed = 10;
    var timer = 20;
    var endalpha = 95;
    var alpha = 0;
    var tt,
    h;
    return {
        show: function(v, w) {
            if (tt == null) {
                tt = document.createElement('div');
                tt.setAttribute('id', id);
                document.body.appendChild(tt);
                tt.style.opacity = 0;
                tt.style.filter = 'alpha(opacity=0)';
                document.onmousemove = this.pos;
            }
            tt.style.display = 'block';
            tt.innerHTML = v;
            tt.style.width = w ? w + 'px': 'auto'
            if (tt.offsetWidth > maxw) {
                tt.style.width = maxw + 'px'
            }
            h = parseInt(tt.offsetHeight) + top;
            clearInterval(tt.timer);
            tt.timer = setInterval(function() {
                tooltip.fade(1)
            },
            timer);
        },
        pos: function(e) {
            var u = e.pageY;
            var l = e.pageX;
            tt.style.top = (u - h) + 'px';
            tt.style.left = (l + left) + 'px';
        },
        fade: function(d) {
            var a = alpha;
            if ((a != endalpha && d == 1) || (a != 0 && d == -1)) {
                var i = speed;
                if (endalpha - a < speed && d == 1) {
                    i = endalpha - a;
                } else if (alpha < speed && d == -1) {
                    i = a;
                }
                alpha = a + (i * d);
                tt.style.opacity = alpha * .01;
                tt.style.filter = 'alpha(opacity=' + alpha + ')';
            } else {
                clearInterval(tt.timer);
                if (d == -1) {
                    tt.style.display = 'none'
                }
            }
        },
        hide: function() {
            clearInterval(tt.timer);
            tt.timer = setInterval(function() {
                tooltip.fade( - 1)
            },
            timer);
        }
    };
} ();