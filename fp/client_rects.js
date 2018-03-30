// Details: http://jcarlosnorte.com/security/2016/03/06/advanced-tor-browser-fingerprinting.html
// https://browserleaks.com/js/rects.js
function getRects() {
    function ucFirst(a) {
        return a.charAt(0).toUpperCase() + a.substr(1, a.length - 1)
    }
    var e = ["", "", ""], d = [], f = "";
    for (var iframe = document.getElementById("rects-iframe").contentWindow.document, h = 0; h < 3; h++) {
        var rect = iframe.getElementById("rect" + h);
        d[h] = rect.getClientRects()[0],
        rect.style.border = "1px #eee solid";
        var box = iframe.getElementById("box" + h);
        box.style.display = "block";
        box.top = d[h].top;
        box.left = d[h].left;
        box.width = d[h].width;
        box.height = d[h].height;
        box.borderColor = ["red", "green", "blue"][h];
    }
    iframe.getElementById("self").classList.add("on");

    for (var i in d[0])
        if ("function" != typeof d[0][i]) {
            for (var h = 0; h < 3; h++)
                e[h] += d[h][i];
            f += "<tr><td>" + ucFirst(i) + '</td><td class="br2">' + d[0][i] + '</td><td class="br">' + ucFirst(i) + '</td><td class="br2">' + d[1][i] + '</td><td class="br">' + ucFirst(i) + "</td><td>" + d[2][i] + "</td></tr>"
        }

    for (var h = 1; h <= 3; h++) {
        set_fingerprint_data("clientRectsFp" + h, e[h-1].toString());
        incProgress();
    }
}

