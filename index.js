window.stat = function (txt, cb) {
    txt = txt || '';
    cb = cb || function () {};

    msg.style.opacity = 0;
    setTimeout(function () {
        msg.innerHTML = txt;
        setTimeout(function () {
            msg.style.opacity = 1;
            setTimeout(cb, 401);
        }, 200);
    }, 401);
};

window.message = function (txt, stay) {
    stay = stay === undefined ? true : !!stay;
    txt = String(txt).split(' ').concat(stay?['&nbsp;&nbsp;&nbsp;&nbsp;']:[]);
    var i = -1;
    var next = function () {
        i += 1;
        cont.style.opacity = 1;
        if (i < txt.length) {
            stat(txt[i], next);
        } else if (!stay) {
            cont.style.opacity = 0;
        }
    };

    next();
};
