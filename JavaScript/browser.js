var isNS = (navigator.appName == "Netscape") ? 1 : 0;
document.oncontextmenu = function () {
    return false;
};
document.onkeydown = doKeyDown;
keys = new Array();
keys.f112 = "f1";
keys.f113 = "f2";
keys.f114 = "f3";
keys.f115 = "f4";
keys.f116 = "f5";
keys.f117 = "f6";
keys.f118 = "f7";
keys.f119 = "f8";
keys.f120 = "f9";
keys.f121 = "f10";
keys.f122 = "f11";
keys.f123 = "f12";
saveCode = "";

function myFunc(b) {
    if (window.event.keyCode < 16 && window.event.keyCode > 18) {
        // window.open("alert.html", "winalert", "top=300,left=300,width=150,height=100");
        return false;
    }
}
function disableFKeys(b) {
    if (window.event && keys["f" + window.event.keyCode]) {
        saveCode = window.event.keyCode;
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 505) {
        myFunc(saveCode);
        Stop(b);
    }
}
fKeyMap = [{
    keyCode: 112,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F1"
}, {
    keyCode: 113,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F2"
}, {
    keyCode: 18,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "Alt Key"
}, {
    keyCode: 114,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F3"
}, {
    keyCode: 115,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F4"
}, {
    keyCode: 116,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F5"
}, {
    keyCode: 117,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F6"
}, {
    keyCode: 118,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F7"
}, {
    keyCode: 119,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F8"
}, {
    keyCode: 120,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F9"
}, {
    keyCode: 121,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F10"
}, {
    keyCode: 122,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F11"
}, {
    keyCode: 123,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "F12"
}, {
    keyCode: 93,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "Right Click"
}, {
    keyCode: 93,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Right Click + ctrl"
}, {
    keyCode: 121,
    isMapped: true,
    shift: true,
    ctrl: false,
    alt: false,
    vKey: "Right Click"
}, {
    keyCode: 116,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Refresh"
}, {
    keyCode: 82,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Refresh"
}, {
    keyCode: 80,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Print"
}, {
    keyCode: 78,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "New Window"
}, {
    keyCode: 87,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Close Window"
}, {
    keyCode: 83,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Save Window"
}, {
    keyCode: 69,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Search Explorer"
}, {
    keyCode: 72,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "History"
}, {
    keyCode: 73,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Favorites"
}, {
    keyCode: 88,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Cut"
}, {
    keyCode: 67,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Copy"
}, {
    keyCode: 86,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Paste"
}, {
    keyCode: 65,
    isMapped: true,
    shift: false,
    ctrl: true,
    alt: false,
    vKey: "Select All"
}, {
    keyCode: 8,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: false,
    vKey: "Back"
}, {
    keyCode: 8,
    isMapped: true,
    shift: true,
    ctrl: false,
    alt: false,
    vKey: "forwad"
}, {
    keyCode: 36,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "forwad"
}, {
    keyCode: 37,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "Left"
}, {
    keyCode: 38,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "Top"
}, {
    keyCode: 39,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "Right"
}, {
    keyCode: 40,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "Bottom"
}, {
    keyCode: 116,
    isMapped: true,
    shift: false,
    ctrl: false,
    alt: true,
    vKey: "alt refresh"
}, {
    keyCode: 0,
    isMapped: false
}];

function doKeyDown(l) {
    l = (isNS) ? l : window.event;
    var m = l.keyCode ? l.keyCode : l.which ? l.which : l.charCode;
    var e = (isNS) ? l.target : l.srcElement;
    var i = l.shiftKey;
    var j = l.ctrlKey;
    var k = l.altKey;
    /*if (m == 9) {
     Stop(l)
     }*/
    if (m >= 13 && m <= 15) {
        Stop(l)
    }
    if (m == 27) {
        Stop(l)
    }
    if (m == 192) {
        Stop(l)
    }
    if (m == 91) {
        Stop(l)
    }
    if (m >= 16 && m <= 18) {
        Stop(l)
    }
    if (m == 116) {
        Stop(l)
    }
    for (var n = 0; n < fKeyMap.length; n++) {
        if (fKeyMap[n].keyCode == m && fKeyMap[n].shift == i && fKeyMap[n].ctrl == j && fKeyMap[n].alt == k) {
            if (fKeyMap[n].isMapped) {
                if (m == 8) {
                    if (e.type != undefined && e.type.match("text") && e.readOnly == false)
                        return true;
                    if (e.type != undefined && e.type.match("password") && e.readOnly == false)
                        return true;

                }
                Stop(l)
            } else {
                return true
            }
        }
    }
    disableFKeys(l)
}
function Stop(b) {
    b = (isNS) ? b : window.event;
    if (isNS) {
        if (b.stopPropagation) {
            b.stopPropagation();
            b.preventDefault()
        }
    } else {
        b.cancelBubble = true;
        b.returnValue = false
    }
    return false
}
function trim(c, d) {
    return ltrim(rtrim(c, d), d)
}
function ltrim(c, d) {
    d = d || "\\s";
    return c.replace(new RegExp("^[" + d + "]+", "g"), "")
}
function rtrim(c, d) {
    d = d || "\\s";
    return c.replace(new RegExp("[" + d + "]+$", "g"), "")
};

function captureTab(h) {
    var g = (navigator.appName == "Netscape") ? 1 : 0;
    h = (g) ? h : window.event;
    if (h.keyCode == 9) {
        return true;
    } else
        return false;
}



