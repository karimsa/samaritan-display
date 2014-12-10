/*jslint browser:true*/
/*globals msg, cont, stat, message*/
(function () {
    "use strict";

    var noop = function () {
            return false;
        },
        exports = {
            msg: window.msg || document.getElementById('msg'),
            cont: window.cont || document.getElementById('cont'),

            stat: function (text, callback) {
                callback = callback || noop;
                text = String(text);

                msg.style.opacity = 0;
                setTimeout(function () {
                    msg.innerHTML = text;
                    setTimeout(function () {
                        msg.style.opacity = 1;
                        setTimeout(callback, 401);
                    }, 200);
                }, 401);
            },

            message: function (text, stay) {
                stay = stay === undefined ? true : !!stay;
                text = String(text).split(' ').concat(stay ? ['&nbsp;&nbsp;&nbsp;&nbsp;'] : []);

                var i = -1,
                    next = function () {
                        i += 1;
                        cont.style.opacity = 1;

                        if (i < text.length) {
                            stat(text[i], next);
                        } else if (!stay) {
                            cont.style.opacity = 0;
                        }
                    };

                next();
            }
        },
        i;

    for (i in exports) {
        if (exports.hasOwnProperty(i)) {
            window[i] = exports[i];
        }
    }
}());
