var c, e = Object.defineProperty,
    h = Object.create;

function l() {
    this.Nc = window.console || {
        log: function() {}
    }
}
l.prototype.trace = function() {
    this.Nc.log("SZMK", this.className, Array.prototype.slice.call(arguments).join(" "))
};

function m(a, b) {
    this.type = a;
    this.data = b || {}
}
m.a = {
    Eb: "AdLoaded",
    Ib: "AdStarted",
    V: "AdStopped",
    la: "AdSkipped",
    Hb: "AdSkippableStateChange",
    Gb: "AdSizeChange",
    bd: "AdLinearChange",
    Ka: "AdDurationChange",
    $c: "AdExpandedChange",
    cd: "AdRemainingTimeChange",
    Pa: "AdVolumeChange",
    P: "AdImpression",
    Mb: "AdVideoStart",
    Kb: "AdVideoFirstQuartile",
    Lb: "AdVideoMidpoint",
    Nb: "AdVideoThirdQuartile",
    Oa: "AdVideoComplete",
    Ja: "AdClickThru",
    La: "AdInteraction",
    dd: "AdUserAcceptInvitation",
    ed: "AdUserMinimize",
    Jb: "AdUserClose",
    Ma: "AdPaused",
    Na: "AdPlaying",
    Fb: "AdLog",
    C: "AdError"
};
m.f = {
    H: "CreativeLoaded",
    pa: "CreativeSkipped",
    ra: "CreativeUserClose",
    ma: "CreativeClickThru",
    na: "CreativeInteraction",
    Ra: "CreativePause",
    Sa: "CreativePlay",
    oa: "CreativeMute",
    Ta: "CreativeUnmute",
    sa: "UserEngaged",
    jd: "VideoData",
    Sb: "StopAd",
    O: "AdFinished",
    qa: "CreativeStopped",
    la: "AdSkipped",
    Rb: "GetData",
    Db: "AdData",
    Qa: "CreativeError",
    Qb: "DoNotPlay"
};
m.F = {
    Pb: "clientNotification",
    W: "loadComplete",
    hd: "vpaidEvent",
    gd: "videoEvent",
    Vc: "adEvent",
    kd: "winMessage",
    Xc: "AdLoaded",
    Wc: "AdFinished",
    fd: "UserEngaged",
    Ub: "AdSizeChange AdLinearChange AdDurationChange AdExpandedChange AdRemainingTimeChange AdVolumeChange AdUserMinimize AdPaused AdPlaying".split(" "),
    Vb: "AdLoaded AdStarted AdStopped AdSkipped AdSkippableStateChange AdImpression AdVideoStart AdVideoFirstQuartile AdVideoMidpoint AdVideoThirdQuartile AdVideoComplete AdUserAcceptInvitation AdUserClose".split(" "),
    Tb: ["AdClickThru", "AdInteraction", "AdLog", "AdError"]
};
window.MMEvent = m;

function p(a, b, d, f) {
    this.type = a;
    this.capture = d;
    b.handleEvent ? (this.callback = b.handleEvent, this.context = b) : (this.callback = b, this.context = f)
}
p.prototype.dispatchEvent = function(a) {
    var b = this.callback,
        d = this.context;
    "function" == typeof b && b.apply(d || this, [a])
};

function q() {
    this.g = {}
}
c = q.prototype;
c.xa = function(a, b, d, f) {
    this.g[a] || (this.g[a] = []);
    this.cc(a, b, d, f) && this.g[a].push(new p(a, b, d, f))
};
c.Da = function(a, b, d, f) {
    if (a = this.g[a])
        for (var k, g = 0; g < a.length; g++)
            if (k = a[g], k.callback == b && k.capture == d && k.context == f) {
                a.splice(g, 1);
                break
            }
};
c.cc = function(a, b, d, f) {
    for (var k = this.g[a].slice(), g, n = !0; k.length;)
        if (g = k.pop(), g.type == a && g.callback == b && g.capture == d && g.context == f) {
            n = !1;
            break
        }
    return n
};
c.dispatchEvent = function(a) {
    var b = this.g[a.type];
    if (b)
        for (var b = b.slice(), d; b.length;) d = b.pop(), d.dispatchEvent(a)
};

function r() {
    l.call(this);
    this.g = new q
}
r.prototype = h(l.prototype);
r.prototype.constructor = r;
c = r.prototype;
c.addEventListener = function(a, b, d, f) {
    this.g || (this.g = new q);
    this.g.xa(a, b, d, f)
};
c.removeEventListener = function(a, b, d, f) {
    this.g.Da(a, b, d, f)
};
c.dispatchEvent = function(a) {
    this.g.dispatchEvent(a)
};

function t() {
    this.message = {
        type: null,
        data: null
    };
    this.jc = '{"type": "JSON_ERROR"}'
}

function u(a, b, d) {
    a.message = new m(b, d);
    try {
        return JSON.stringify(a.message)
    } catch (f) {
        return a.jc
    }
};

function v() {
    r.call(this);
    this.className = "WindowMessanger";
    this.sender;
    this.fa;
    this.message = new t
}
v.prototype = h(r.prototype);
v.prototype.constructor = v;
c = v.prototype;
c.Ic = function(a) {
    this.sender = a
};
c.Hc = function(a) {
    this.fa = a;
    this.fa.addEventListener("message", this.rb.bind(this), !1)
};
c.rb = function(a) {
    try {
        var b = JSON.parse(a.data);
        if (b.data) {
            var d = b.data.intName;
            if (d) switch (b.type) {
                case "ebclickthrough":
                    this.dispatchEvent(new m(m.f.ma));
                    break;
                case "ebCIUserActionCounter":
                case "ebCIAutomaticEventCounter":
                    this.dispatchEvent(new m(m.f.na, {
                        name: d
                    }))
            } else this.dispatchEvent(new m(b.type, b.data))
        } else this.dispatchEvent(new m(b.type))
    } catch (f) {}
};
c.postMessage = function(a, b) {
    this.sender && this.sender.postMessage(u(this.message, a, b), "*")
};
c.D = function() {
    this.fa && this.fa.removeEventListener("message", this.rb.bind(this), !1)
};

function w(a) {
    r.call(this);
    this.className = "DataProvider";
    this.S = {};
    this.G = a;
    this.J = !1;
    this.$a = !0;
    this.dataReady = !1;
    this.script_host = this.oc();
    this.nd;
    this.Sc;
    this.R;
    this.U;
    this.o;
    this.X;
    this.volume = 1;
    this.$a = !0;
    this.w = this.A = 0;
    this.ja = "normal";
    this.gb = -1;
    this.Fa = this.kc = !1;
    this.va = this.Z = -2;
    this.dc = null;
    this.yb = !1;
    this.l = document.createElement("iframe");
    this.gc()
}
w.prototype = h(r.prototype);
w.prototype.constructor = w;
c = w.prototype;
c.oc = function() {
    var a = document.getElementsByTagName("script");
    return a[a.length - 1].src.split("?")[0].split("/").slice(0, -1).join("/") + "/"
};
c.gc = function() {
    this.eb = !0;
    this.trace("canAutoplay", this.eb)
};
c.qc = function(a, b, d, f, k, g) {
    this.A = a;
    this.w = b;
    this.ja = d || this.ja;
    this.gb = f || this.gb;
    this.ec(k);
    this.tb(g)
};
c.Gc = function(a) {
    a.src && (a.videoType || (a.videoType = "video/mp4"), this.R = a)
};
c.ec = function(a) {
    var b;
    if (a) try {
        this.S = "string" == typeof a ? JSON.parse(a) : JSON.parse(a.AdParameters), this.S.tag ? "" == this.S.tag ? b = "Property 'tag' contains no data" : (this.tb(this.S), this.dataReady = "string" == typeof this.S.tag) : b = "Property 'tag' is not defined on creative data"
    } catch (d) {
        this.trace("ERROR", d), b = d.message
    } else b = "Creative Data is not defined";
    this.J = b || this.J
};
c.tb = function(a) {
    var b = "",
        d;
    for (d in a) this.trace("set params ", d, a[d]), "videoSlot" == d ? this.o = a[d] : "slot" == d ? a[d] ? this.U = a[d] : b = "HTML slot is not defined" : this[d] = a[d], this.J = b ? b : this.J
};
e(c, "skipoffset", {
    get: function() {
        return this.X
    },
    set: function(a) {
        a && (isNaN(a) ? /\d+:\d+:\d+/.test(a) && (a = a.match(/\d+/g), 4 > a.length && a.push(0), this.X = (1E3 * (60 * (60 * parseInt(a[0]) + parseInt(a[1])) + parseInt(a[2])) + parseInt(a[3])) / 1E3) : this.X = a)
    }
});

function x(a, b) {
    r.call(this);
    this.className = "AdLoader";
    this.dp = a;
    this.l = this.dp.l;
    this.Ba = !1;
    this.b = b;
    this.b.addEventListener(m.f.H, this.ob, !1, this);
    this.Ab = !0;
    this.b.addEventListener(m.f.Qb, this.wc, !1, this)
}
x.prototype = h(r.prototype);
x.prototype.constructor = x;
c = x.prototype;
c.s = function() {
    this.l.id = "adContent";
    this.l.scrolling = "no";
    this.l.setAttribute("allowtransparency", !0);
    this.trace("init", this.l);
    var a = this.l.style;
    a["float"] = "left";
    a.top = "0";
    a.left = "0";
    a.width = "1px";
    a.height = "1px";
    a.backgroundColor = "transparent";
    a.position = "absolute";
    a.pointerEvents = "auto";
    a.border = "0px solid red";
    a = this.dp.U;
    a.style.pointerEvents = "auto";
    a.appendChild(this.l);
    a.style.zIndex = 8888888;
    setTimeout(this.Ha.bind(this), 1)
};
c.Ha = function() {
    this.Wb = 0;
    this.trace("writeScript");
    var a = "<script type='text/javascript' src='" + this.dp.tag + "'>\x3c/script>",
        b = this.l;
    b.contentWindow.document.open();
    this.b.Hc(b.contentWindow);
    b.contentWindow.addEventListener("load", this.pb.bind(this), !1);
    b.contentWindow.document.write(a);
    b.contentWindow.document.close()
};
c.pb = function() {
    40 === ++this.Wb ? this.dispatchEvent(new m(m.a.C, {
        message: "Test Message"
    })) : (this.Y = this.l.contentWindow.document.getElementsByTagName("iframe")[0]) ? (this.mb(), this.Y.style.width = "100%", this.Y.style.height = "100%", this.l.contentWindow.document.body.style.margin = "0", this.b.Ic(this.Y.contentWindow)) : setTimeout(this.pb.bind(this), 100)
};
c.ob = function() {
    this.trace("onCreativeLoad");
    this.b.removeEventListener(m.f.H, this.ob, !1, this);
    this.Ba = !0;
    this.mb()
};
c.mb = function() {
    this.Ba && this.dispatchEvent(new m(m.f.H))
};
c.resize = function() {
    this.trace("resize");
    var a = this.l,
        b = this.dp;
    a && (a.style.overflow = "hidden", a.style.width = b.A ? [b.A, "px"].join("") : "100%", a.style.height = b.w ? [b.w, "px"].join("") : "100%", this.trace("SZMK-VPAID resize dimensions", a.style.width, a.offsetWidth, a.scrollWidth))
};
c.D = function() {
    this.trace("destroy");
    this.b.addEventListener(m.f.qa, this.aa, !1, this);
    this.b.postMessage(m.f.Sb)
};
c.aa = function() {
    this.l && this.dp.U.removeChild(this.l);
    this.l = null;
    this.dispatchEvent(new m(m.f.qa))
};
c.wc = function() {
    this.Ab = !1
};

function y(a, b) {
    r.call(this);
    this.className = "VideoWrapper";
    this.dp = a;
    this.b = b;
    this.b.addEventListener(m.f.oa, this.ca, !1, this);
    this.b.addEventListener(m.f.Ta, this.ca, !1, this);
    this.ua = 1;
    this.c;
    this.Ga;
    this.ea = ["AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete"];
    this.ia = "abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked stalled suspend timeupdate volumechange waiting".split(" ")
}
y.prototype = h(r.prototype);
y.prototype.constructor = y;
c = y.prototype;
c.ca = function(a) {
    this.trace("onMuteMessage", a.type);
    this.c && (a.type === m.f.oa ? this.c.muted = !0 : (0 === this.c.volume && (this.c.volume = .5), this.c.muted = !1))
};
e(c, "video", {
    get: function() {
        return this.c
    },
    set: function(a) {
        this.trace("set video", a);
        this.c = a;
        this.ac()
    }
});
e(c, "volume", {
    get: function() {
        return this.ua
    },
    set: function(a) {
        this.ua = a;
        this.c && (this.c.volume = a, this.c.muted = !1);
        this.dispatchEvent(new m("AdVolumeChange"))
    }
});
c.ac = function() {
    var a = this.c;
    try {
        this.trace("bindVideo()", a);
        a.style.pointerEvents = "auto";
        this.Ga = this.Rc.bind(this);
        for (var b in this.ia) a.addEventListener(this.ia[b], this.Ga, !1)
    } catch (d) {
        this.trace("VIDEO ACCESS ERROR", d)
    }
};
c.Rc = function(a) {
    "timeupdate" == a.type && "progress" == a.type || this.trace("videoEventsHandler()", a.type);
    var b = this.dp,
        d = this.c;
    if (d) {
        this.b.postMessage(a.type, {
            duration: d.duration,
            currentTime: d.currentTime,
            volume: d.volume,
            muted: d.muted
        });
        var f = m.a;
        switch (a.type) {
            case "loadedmetadata":
                try {
                    b.Z = d.duration, b.va = d.duration, this.dispatchEvent(new m(f.Ka))
                } catch (k) {
                    this.trace("videoEventsHandler, VIDEO ACCESS ERROR", k)
                }
                break;
            case "timeupdate":
                b.Z = d.duration - d.currentTime;
                d.currentTime > b.X && !b.Fa && (this.trace("timeupdate",
                    b.Z, d.currentTime, b.md), b.Fa = !0, this.b.postMessage(m.a.Hb));
                this.Oc();
                break;
            case "pause":
                this.dispatchEvent(new m(a.type));
                break;
            case "playing":
                this.dispatchEvent(new m(a.type));
                break;
            case "ended":
                this.hb(4);
                this.dispatchEvent(new m(a.type));
                break;
            case "volumechange":
                this.trace("VideoWrapper", "volumechange", d.volume, d.muted, b.Sc), this.dp.volume = this.ua = d.volume * !d.muted, this.dispatchEvent(new m(f.Pa))
        }
    }
};
c.muted = function(a) {
    this.trace("muted", a);
    this.c && (this.c.muted = a)
};
c.hb = function(a) {
    this.ea[a] && (this.trace(" dispatchQuartile dispatch ", this.ea[a]), this.dispatchEvent(new m(this.ea[a])), this.ea[a] = null)
};
c.Oc = function() {
    this.hb(this.c.currentTime / (.25 * this.c.duration) >> 0)
};
c.start = function() {
    this.trace("start()");
    this.pc();
    this.resize();
    this.c.style.width = this.videoWidth;
    this.dp.G.v.i.Ab && this.c.play()
};
c.a = function() {
    var a = this.dp.o;
    this.videoWidth = a.style.width;
    a.style.width = 0
};
c.pc = function() {
    this.dp.o.style = this.dp.o.style || {};
    this.dp.o.getAttribute = this.dp.o.getAttribute || function() {};
    this.dp.o.setAttribute = this.dp.o.setAttribute || function() {};
    this.dp.o.removeAttribute = this.dp.o.removeAttribute || function() {};
    this.defaults = {
        cssText: this.dp.o.style.cssText,
        src: this.dp.o.getAttribute("src"),
        poster: this.dp.o.getAttribute("poster"),
        type: this.dp.o.getAttribute("type")
    };
    this.trace("playVideo");
    this.video = this.dp.o;
    var a = this.c;
    a.src = this.dp.R.src;
    a.poster = this.dp.R.poster;
    a.type =
        this.dp.R.videoType
};
c.resize = function() {
    this.trace("resize()");
    var a = this.c,
        b = this.dp;
    if (a) {
        this.trace("resizeVideo()");
        try {
            var d = a.style;
            d.width = b.A ? [b.A, "px"].join("") : "100%";
            d.height = b.w ? [b.w, "px"].join("") : "100%";
            d.position = "absolute"
        } catch (f) {
            this.trace("VIDEO ACCESS ERROR", f)
        }
    }
};
c.pause = function() {
    this.trace("pause()");
    var a = this.c;
    a && a.pause()
};
c.Cc = function() {
    var a = this.c;
    a && a.play()
};
c.D = function() {
    this.c && (this.trace("destroy()"), this.c.pause(), this.c.style.cssText = this.defaults.cssText, this.setAttribute(this.c, "src", this.defaults.src), this.setAttribute(this.c, "poster", this.defaults.poster), this.setAttribute(this.c, "type", this.defaults.type), this.Bc(), this.b = this.c = null, this.trace("destroy() end"))
};
c.setAttribute = function(a, b, d) {
    "string" === typeof d ? a.setAttribute(b, d) : a.removeAttribute(b)
};
c.Bc = function() {
    this.trace("removeVideoListeners()", this);
    for (var a in this.ia) this.c.removeEventListener(this.ia[a], this.Ga, !1);
    this.b.removeEventListener(m.f.oa, this.ca, !1, this);
    this.b.removeEventListener(m.f.Ta, this.ca, !1, this)
};

function z() {
    r.call(this);
    this.className = "State";
    this.dp;
    this.m = null;
    this.B = -1;
    this.locked = !1;
    this.message = null
}
z.a = {
    C: "AdError",
    Va: "UserStop",
    Ua: "UserSkip",
    Cb: "APIStop",
    Ia: "APISkip",
    Zc: "APIStart",
    Ob: "AutoStop",
    Yc: "APIInit",
    Wa: "VideoPause",
    Xa: "VideoPlaying"
};
z.prototype = h(r.prototype);
z.prototype.constructor = z;
c = z.prototype;
c.s = function(a) {
    this.m = a
};
c.jb = function() {
    this.trace("initAd State")
};
c.vb = function(a) {
    this.m = a
};
c.T = function(a, b, d, f) {
    this.m = f
};
c.da = function(a) {
    this.m = a
};
c.ga = function(a) {
    this.m = a
};
c.xb = function(a) {
    this.m = a
};
c.ub = function(a) {
    this.m = a
};
c.za = function(a) {
    this.m = a
};
c.ya = function(a) {
    this.m = a
};
c.f = function(a) {
    this.m = a
};
c.a = function(a, b) {
    this.m = a;
    this.message = b
};
c.ha = function() {};

function A() {
    z.call(this);
    this.className = "StateInitial";
    this.B = 0
}
A.prototype = h(z.prototype);
A.prototype.constructor = A;
c = A.prototype;

function B(a, b, d) {
    z.call(this);
    this.className = "StateInitiated";
    this.B = 1;
    this.dp = a;
    this.i = d;
    this.b = b
}
B.prototype = h(z.prototype);
B.prototype.constructor = B;
c = B.prototype;
c.s = function(a) {
    this.i.addEventListener(m.a.C, this.ib.bind(this));
    this.trace("initAd");
    this.dp.qc(a.width, a.height, a.viewMode, a.desiredBitrate, a.creativeData, a.environmentVars);
    this.dp.G.$b.s();
    this.dp.J ? this.dispatchEvent(new m(m.f.Qa, {
        message: this.dp.J
    })) : this.rc()
};
c.rc = function() {
    this.trace("load");
    this.i.addEventListener(m.f.H, this.qb, !1, this);
    this.i.s()
};
c.qb = function() {
    this.trace("onLoad");
    this.i.removeEventListener(m.f.H, this.qb, !1, this);
    this.b.addEventListener(m.f.Db, this.uc, !1, this);
    this.b.postMessage(m.f.Rb)
};
c.uc = function(a) {
    this.trace("onAdData");
    this.dp.Gc(a.data);
    this.dp.R ? this.dispatchEvent(new m(m.f.H)) : this.ib(message)
};
c.ib = function(a) {
    this.dispatchEvent(new m(m.a.C, a.data))
};

function C(a, b, d, f) {
    z.call(this);
    this.className = "StateActive";
    this.B = 3;
    this.dp = a;
    this.i = d;
    this.b = b;
    this.u = f;
    this.j = this.Kc = new D(a, d, f);
    this.N = new E(f);
    this.I = new F(f);
    this.M = new H;
    this.Xb()
}
C.prototype = h(z.prototype);
C.prototype.constructor = C;
c = C.prototype;
c.Xb = function() {
    var a = m.a,
        b = this.yc;
    this.N.addEventListener(a.Na, b, !1, this);
    this.I.addEventListener(a.Ma, b, !1, this);
    var d = this.u;
    d.addEventListener(a.Pa, b, !1, this);
    d.addEventListener(a.Mb, b, !1, this);
    d.addEventListener(a.Kb, b, !1, this);
    d.addEventListener(a.Lb, b, !1, this);
    d.addEventListener(a.Nb, b, !1, this);
    d.addEventListener(a.Oa, b, !1, this);
    b = this.zc;
    d.addEventListener("pause", b, !1, this);
    d.addEventListener("playing", b, !1, this);
    a = m.f;
    b = this.nb;
    d = this.b;
    d.addEventListener(a.Sa, b, !1, this);
    d.addEventListener(a.Ra,
        b, !1, this);
    d.addEventListener(a.sa, b, !1, this);
    d.addEventListener(a.pa, b, !1, this);
    d.addEventListener(a.ra, b, !1, this);
    d.addEventListener(a.ma, b, !1, this);
    d.addEventListener(a.na, b, !1, this);
    this.M.addEventListener(a.O, b, !1, this)
};
c.yc = function(a) {
    this.dispatchEvent(a);
    switch (a.type) {
        case m.a.Oa:
            this.h(this.M)
    }
};
c.zc = function(a) {
    switch (a.type) {
        case "playing":
            this.h(this.N, z.a.Xa);
            break;
        case "pause":
            this.h(this.I, z.a.Wa)
    }
};
c.nb = function(a) {
    this.trace("onCreativeEvent", a.type);
    var b = m.f,
        d = m.a;
    switch (a.type) {
        case b.Sa:
            this.h(this.N, z.a.Xa);
            break;
        case b.Ra:
            this.h(this.I, z.a.Wa);
            break;
        case b.O:
            this.dispatchEvent(a);
            break;
        case b.sa:
            this.dp.yb = !0;
            this.dp.va = -2;
            this.dispatchEvent(new m(d.Ka));
            this.b.removeEventListener(b.sa, this.nb, !1, this);
            break;
        case b.pa:
            this.dispatchEvent(a);
            break;
        case b.ra:
            this.dispatchEvent(a);
            break;
        case b.ma:
            this.dispatchEvent(new m(d.Ja, {
                url: "http://www.sizmek.com",
                id: "ebclickthrough",
                playerHandles: !1
            }));
            break;
        case b.na:
            this.dispatchEvent(new m(d.La, {
                id: a.data.name
            }))
    }
};
c.s = function() {
    this.j.s();
    this.dispatchEvent(new m(m.a.Ib));
    this.dispatchEvent(new m(m.a.P));
    this.b.postMessage(m.a.P)
};
c.h = function(a, b) {
    var d = !1;
    switch (this.j) {
        case this.Kc:
            if (a == this.I || a == this.M) d = !0;
            break;
        case this.N:
            if (a == this.I || a == this.M) d = !0;
            break;
        case this.I:
            a == this.N && (d = !0);
            break;
        case this.M:
            d = !0
    }
    d && (this.j = a, this.j.s(b))
};
c.T = function(a, b, d) {
    this.trace("resizeAd", a, b, d);
    var f = this.dp;
    f.A = a;
    f.w = b;
    f.ja = d;
    this.i.resize();
    this.u.resize();
    this.dispatchEvent(new m(m.a.Gb))
};
c.ha = function(a) {
    this.trace("setAdVolume", a);
    this.u.volume = a
};
c.da = function(a) {
    this.trace("pauseAd");
    this.h(this.I, a)
};
c.ga = function(a) {
    this.trace("resumeAd");
    this.h(this.N, a)
};
c.a = function(a) {
    this.trace("playingEnd");
    this.h(this.M, a)
};

function D(a, b, d) {
    z.call(this);
    this.className = "StateActiveInit";
    this.B = 3;
    this.dp = a;
    this.i = b;
    this.u = d
}
D.prototype = h(z.prototype);
D.prototype.constructor = D;
c = D.prototype;
c.s = function() {
    this.trace("startAd");
    this.hc();
    this.dp.eb ? this.wb() : this.ic()
};
c.hc = function() {
    this.trace("resize");
    var a = this.i.l,
        b = this.dp;
    a && (a.style.overflow = "hidden", a.style.width = b.A ? [b.A, "px"].join("") : "100%", a.style.height = b.w ? [b.w, "px"].join("") : "100%", this.trace("resize dimensions", a.style.width, a.offsetWidth, a.scrollWidth))
};
c.ic = function() {
    var a = 2 * Math.PI,
        b = 70,
        d = b,
        f = this.dp.U,
        k = this.sb = document.createElement("canvas");
    f.appendChild(k);
    k.addEventListener("click", this.vc.bind(this), !1);
    k.style.position = "absolute";
    k.style.zIndex = 9999999;
    k.style.pointerEvents = "auto";
    k.style.visibility = "hidden";
    k.style.cursor = "pointer";
    var g = k.getContext("2d");
    g.lineJoin = "miter";
    g.miterLimit = 5;
    g.beginPath();
    this.trace("drawPlayButton dimensions", k.width, k.height);
    g.arc(b + 3, b + 3, b, 0, a);
    g.fillStyle = "rgba(128,128,128,0.7)";
    g.fill();
    g.lineWidth =
        5;
    g.strokeStyle = "rgba(250,250,250,0.8)";
    g.stroke();
    g.closePath();
    var n = b - 40,
        b = 40,
        a = a / 3,
        n = d + 3;
    g.beginPath();
    g.fillStyle = "rgba(250,250,250,0.8)";
    g.moveTo(n + b * Math.cos(-a), n + b * Math.sin(-a));
    g.lineTo(n + b * Math.cos(0), n + b * Math.sin(0));
    g.lineTo(n + b * Math.cos(a), n + b * Math.sin(a));
    g.lineTo(n + b * Math.cos(-a), n + b * Math.sin(-a));
    g.fill();
    g.closePath();
    var K = this;
    window.setTimeout(function() {
            K.trace("on timeout", f.offsetWidth);
            k.style.top = K.dp.w / 2 - d - 6 + "px";
            k.style.left = K.dp.A / 2 - d - 6 + "px";
            k.style.visibility = "visible"
        },
        100)
};
c.vc = function() {
    this.trace("onButtonClick");
    this.wb();
    this.sb.style.visibility = "hidden"
};
c.wb = function() {
    this.u.start()
};

function E(a) {
    z.call(this);
    this.className = "StateActivePlaying";
    this.u = a
}
E.prototype = h(z.prototype);
E.prototype.constructor = E;
c = E.prototype;
c.s = function(a) {
    this.trace("init");
    this.m = a;
    this.u.Cc();
    this.dispatchEvent(new m(m.a.Na))
};

function F(a) {
    z.call(this);
    this.className = "StateActivePaused";
    this.u = a
}
F.prototype = h(z.prototype);
F.prototype.constructor = F;
c = F.prototype;
c.s = function(a) {
    this.trace("init");
    this.m = a;
    this.u.pause();
    this.dispatchEvent(new m(m.a.Ma))
};

function H() {
    z.call(this);
    this.className = "StateActiveEnd"
}
H.prototype = h(z.prototype);
H.prototype.constructor = H;
c = H.prototype;
c.s = function() {
    this.trace("init");
    this.dispatchEvent(new m(m.f.O))
};

function I(a) {
    z.call(this);
    this.className = "StateLoaded";
    this.B = 2;
    this.dp = a
}
I.prototype = h(z.prototype);
I.prototype.constructor = I;
c = I.prototype;
c.s = function() {
    this.dispatchEvent(new m(m.a.Eb))
};
c.T = function(a, b, d) {
    this.trace("resizeAd", a, b, d);
    var f = this.dp;
    f.A = a;
    f.w = b;
    f.ja = d
};

function J(a, b, d, f) {
    z.call(this);
    this.className = "StateDestructed";
    this.B = -1;
    this.dp = a;
    this.b = b;
    this.i = d;
    this.u = f
}
J.prototype = h(z.prototype);
J.prototype.constructor = J;
c = J.prototype;
c.s = function(a) {
    this.trace("init");
    this.m = a.trigger;
    this.message = a.message;
    this.i.Ba ? (this.i.addEventListener(m.f.qa, this.aa, !1, this), this.i.D(), this.u.D()) : this.aa()
};
c.aa = function() {
    this.trace("onAdEnd", this.m);
    var a = z.a;
    switch (this.m) {
        case a.C:
            this.trace("onAdEnd", a.C);
            this.dispatchEvent(new m(m.a.C, {
                message: this.message
            }));
            break;
        case a.Ia:
            this.dispatchEvent(new m(m.a.la));
            this.dispatchEvent(new m(m.a.V));
            break;
        case a.Ua:
            this.dispatchEvent(new m(m.a.la));
            this.dispatchEvent(new m(m.a.V));
            break;
        case a.Va:
            this.dispatchEvent(new m(m.a.Jb));
            this.dispatchEvent(new m(m.a.V));
            break;
        default:
            this.dispatchEvent(new m(m.a.V))
    }
};

function L(a, b) {
    z.call(this);
    this.className = "StatesManager";
    this.dp = b;
    this.b = a;
    this.i = new x(b, this.b);
    this.u = new y(b, this.b);
    this.Lc = new B(b, this.b, this.i);
    this.Mc = new I(b);
    this.Jc = new C(b, this.b, this.i, this.u);
    this.L = new J(b, this.b, this.i, this.u);
    this.j = new A
}
L.prototype = h(z.prototype);
L.prototype.constructor = L;
c = L.prototype;
c.Yb = function(a) {
    var b, d = m.a,
        f = this.Bb;
    for (b in d) a.addEventListener(d[b], f, !1, this);
    d = m.f;
    f = this.Za;
    for (b in d) a.addEventListener(d[b], f, !1, this)
};
c.Ac = function(a) {
    var b, d = m.a,
        f = this.Bb;
    for (b in d) a.removeEventListener(d[b], f, !1, this);
    d = m.f;
    f = this.Za;
    for (b in d) a.removeEventListener(d[b], f, !1, this)
};
c.Bb = function(a) {
    this.trace("vpaidEventHandler", a.type);
    this.dispatchEvent(a)
};
c.Za = function(a) {
    this.trace("adEventHandler", a.type);
    var b = m.f;
    switch (a.type) {
        case b.H:
            this.h(this.Mc);
            break;
        case b.Qa:
            this.xc(a);
            break;
        case b.O:
            this.dp.yb ? this.b.postMessage(b.O) : this.h(this.L, {
                trigger: z.a.Ob
            });
            break;
        case b.pa:
            this.h(this.L, {
                trigger: z.a.Ua
            });
            break;
        case b.ra:
            this.h(this.L, {
                trigger: z.a.Va
            })
    }
};
c.h = function(a, b) {
    this.trace("stateTransition", a.className, a.B, this.j.B);
    if (-1 == a.B || this.j.B + 1 == a.B) this.trace("stateTransition approved"), this.Ac(this.j), this.Yb(a), this.j = a, this.j.s(b)
};
c.jb = function(a, b, d, f, k, g) {
    this.trace("initAd");
    this.h(this.Lc, {
        width: a,
        height: b,
        viewMode: d,
        desiredBitrate: f,
        creativeData: k,
        environmentVars: g
    })
};
c.xc = function(a) {
    this.trace("onError");
    this.h(this.L, {
        trigger: z.a.C,
        message: a.data.message
    })
};
c.vb = function() {
    this.trace("startAd");
    this.h(this.Jc)
};
c.xb = function(a) {
    this.trace("stopAd", a);
    this.h(this.L, {
        trigger: a
    })
};
c.ub = function(a) {
    this.trace("skipAd", a);
    this.h(this.L, {
        trigger: a
    })
};
c.a = function(a, b) {
    this.trace("adError", a, b);
    this.ld(a, b)
};
c.T = function(a, b, d, f) {
    this.trace("resizeAd", a, b, d, f);
    this.j.T(a, b, d, f)
};
c.da = function(a) {
    this.trace("pauseAd", a);
    this.j.da()
};
c.ga = function(a) {
    this.trace("resumeAd", a);
    this.j.ga()
};
c.ha = function(a) {
    this.trace("setAdVolume", a);
    this.j.ha(a)
};
c.za = function() {
    this.j.za()
};
c.ya = function() {
    this.j.ya()
};

function M(a, b) {
    this.ta = a;
    this.Ya = b
}
c = M.prototype;
c.Ca = function(a) {
    this.ta && this.ta.apply(this.Ya, a)
};
c.D = function() {
    this.Ya = this.ta = null
};

function N() {
    this.g = {}
}
c = N.prototype;
c.xa = function(a, b, d) {
    this.g[a] = new M(b, d)
};
c.Da = function(a) {
    this.g[a] && (this.g[a].D(), this.g[a] = null, delete this.g[a])
};
c.Ca = function(a, b) {
    var d = this.g[a];
    d && d.Ca(b)
};
c.D = function() {
    for (var a in this.g) this.g[a].D(), this.g[a] = null, delete this.g[a]
};

function O(a) {
    this.G = a;
    this.tc = a.b;
    this.$ = new P(this.G.dp);
    this.ab = this.kb = !1;
    this.$.addEventListener(m.F.W, this.ba.bind(this));
    this.G.addEventListener(m.a.P, this.ba.bind(this))
}
c = O.prototype;
c.s = function() {
    this.$.load()
};
c.ba = function(a) {
    switch (a.type) {
        case m.F.W:
            this.kb = !0;
            if (!this.ab) return;
            break;
        case m.a.P:
            if (this.ab = !0, !this.kb) return
    }
    this.$.removeEventListener(m.F.W, this.ba.bind(this));
    this.G.removeEventListener(m.a.P, this.ba.bind(this));
    this.Ec()
};
c.Ec = function() {
    var a = this.$.lb.Utils.getEnvironment();
    this.Fc(this.mc(a), this.nc(a))
};
c.a = function(a) {
    var b = a.adRect;
    return {
        name: "adParams",
        value: {
            idx: 1,
            cb: 2,
            loc: b && -1 !== b ? b.left + "x" + b.top : -1,
            size: b && -1 !== b ? b.width + "x" + b.height : -1,
            ifr: this.Aa(a, !0)
        }
    }
};
c.mc = function(a) {
    var b = this.Aa(a);
    return {
        name: "verURL",
        value: {
            url: a.hostUrl,
            method: 0 === b || 1 === b ? 2 : 3
        }
    }
};
c.nc = function(a) {
    var b = a.adRect,
        d = b && -1 !== b ? b.left + "x" + b.top : -1,
        f = this.Aa(a),
        k = a.viewport;
    return {
        name: "plparams",
        value: {
            res: "undefined" === screen.width ? -1 : screen.width + "x" + screen.height,
            psz: "-1#-1#" + (b && -1 !== b ? b.width + "x" + b.height : -1),
            oset: d,
            bsc: Number(a.zoom).toFixed(2),
            ifr: f,
            ssc: -1,
            smode: -1,
            fs: Number(a.isFullScreen),
            vport: 0 === f || 1 === f ? k.size.width + "x" + k.size.height : -1,
            poset: d
        }
    }
};
c.Aa = function(a, b) {
    var d = 1;
    if (-1 === a.frameType) return -1;
    a.isTop ? d = 0 : "crossDomain" === a.frameType && (d = b && a.isTopFriendly ? 4 : 2);
    return d
};
c.Fc = function() {
    for (var a = 0; a < arguments.length; a++) this.tc.postMessage(m.F.Pb, arguments[a])
};

function P(a) {
    r.call(this);
    this.ready = !1;
    this.lb = null;
    this.dp = a;
    this.frame = document.createElement("iframe");
    this.sc = !1;
    this.Pc = "SZMKVER";
    this.fc = "SZMKMODUID" + Math.floor(1E6 * Math.random());
    this.bb = "SZMKMODS" + Math.floor(1E6 * Math.random());
    this.frameId = "SZMKMODSFRA" + Math.floor(1E6 * Math.random());
    this.Dc = "SZMKMODSSCR" + Math.floor(1E6 * Math.random());
    this.Ea = this.dp.script_host;
    this.fb = this.Ea + "SZMKFLVPAIDBR.js";
    this.Qc = this.Ea + "SZMKVER.js";
    this.data = {
        ad: {},
        uid: this.fc,
        loadBeacons: this.sc,
        ds_host: this.Ea,
        callback: this.bb,
        frameId: this.frameId,
        url: this.fb,
        scriptInstance: this.Dc,
        modules: {
            SZMKVER: {
                moduleName: this.Pc,
                loadEvent: "moduleLoaded",
                readyEvent: "moduleReady",
                isReady: !1,
                url: this.Qc,
                isLoaded: !1
            }
        },
        events: {
            scriptLoaded: "scriptLoaded"
        }
    }
}
P.prototype = h(r.prototype);
P.prototype.constructor = P;
c = P.prototype;
c.load = function() {
    this.data.ad = this.lc([this.dp.o, this.dp.U]);
    this.data.ad[this.bb] = this.bc.bind(this);
    this.frame.id = this.frameId;
    this.frame.scrolling = "no";
    this.frame.style.cssText = "float:left;top:0; left:0;width:1px;height:1px;background-color:transparent;position:absolute;pointer-events:auto;border:0px solid red;";
    this.frame.setAttribute("allowtransparency", !0);
    document.body.appendChild(this.frame);
    setTimeout(this.Ha.bind(this), 1)
};
c.Ha = function() {
    var a = "<script type='text/javascript' src='" + this.fb + "'>\x3c/script>";
    this.frame.contentWindow.document.open();
    this.frame.contentWindow.shellData = this.data;
    this.frame.contentWindow.document.write(a);
    this.frame.contentWindow.document.close()
};
c.bc = function(a) {
    switch (a.type) {
        case "scriptLoaded":
            this.lb = this.frame.contentWindow.modules, this.ready = !0, this.dispatchEvent(new m(m.F.W))
    }
};
c.a = function() {
    return "float:left;top:0; left:0;width:1px;height:1px;background-color:transparent;position:absolute;pointer-events:auto;border:0px solid red;"
};
c.lc = function(a) {
    for (var b = 0; b < a.length; b++) {
        var d = a[b];
        if (d && d.ownerDocument && (d.ownerDocument.defaultView || d.ownerDocument.parentWindow)) return d
    }
    return {}
};

function Q() {
    r.call(this);
    this.trace("constructor v 2.2");
    this.b = new v;
    this.b.className = "VPAIDMessanger";
    this.className = "VPAIDAPI";
    this.dp = new w(this);
    this.v = new L(this.b, this.dp);
    this.ka = new N;
    this.$b = new O(this);
    this.Zb()
}
Q.prototype = h(r.prototype);
Q.prototype.constructor = Q;
c = Q.prototype;
c.Zb = function() {
    this.wa(m.F.Ub.slice(), this.Uc);
    this.wa(m.F.Vb.slice(), this.zb);
    this.wa(m.F.Tb.slice(), this.Tc)
};
c.wa = function(a, b) {
    for (var d = this.v; a.length;) d.addEventListener(a.pop(), b, !1, this)
};
c.Uc = function(a) {
    this.trace("vpaidMultiEventsHandler()", a.type);
    this.dispatchEvent(a);
    this.K(a.type)
};
c.zb = function(a) {
    var b = a.type;
    this.trace("vapidSingleEventHandler()", b);
    this.dispatchEvent(a);
    this.K(b);
    this.unsubscribe(b);
    this.v.removeEventListener(b, this.zb, !1, this)
};
c.Tc = function(a) {
    this.trace("vpaidDataEventHandler()", a.type);
    var b = a.data,
        d = m.a;
    if (b) switch (a.type) {
        case d.Ja:
            this.K(a.type, [b.url, b.id, b.playerHandles]);
            break;
        case d.La:
            this.K(a.type, [b.id]);
            break;
        case d.Fb:
            this.K(a.type, [b.id]);
            break;
        case d.C:
            this.K(a.type, [b.message]), this.ka.D()
    }
};
c.K = function(a, b) {
    this.ka.Ca(a, b);
    this.b.dispatchEvent(a, b)
};
c.getAdLinear = function() {
    this.trace("getAdLinear()");
    return this.dp.$a
};
c.getAdWidth = function() {
    this.trace("getAdWidth()");
    return this.dp.A
};
c.getAdHeight = function() {
    this.trace("getAdHeight()");
    return this.dp.w
};
c.getAdExpanded = function() {
    this.trace("getAdExpanded()");
    return this.dp.kc
};
c.getAdSkippableState = function() {
    this.trace("getAdSkippableState()");
    return this.dp.Fa
};
c.getAdRemainingTime = function() {
    this.trace("getAdRemainingTime()");
    return this.dp.Z
};
c.getAdDuration = function() {
    this.trace("getAdDuration()");
    return this.dp.va
};
c.getAdCompanions = function() {
    this.trace("getAdCompanions()");
    return this.dp.dc
};
c.getAdIcons = function() {
    this.trace("getAdIcons()");
    return !1
};
c.setAdVolume = function(a) {
    this.trace("setAdVolume() value =", a);
    this.v.ha(a)
};
c.getAdVolume = function() {
    this.trace("getAdVolume()");
    return this.dp.volume
};
c.handshakeVersion = function(a) {
    this.trace("handshakeVersion()", a);
    return "2.0"
};
c.initAd = function(a, b, d, f, k, g) {
    this.trace("initAd()", a, b, d, f, k, g);
    this.v.jb(a, b, d, f, k, g)
};
c.startAd = function() {
    this.trace("startAd()");
    this.v.vb()
};
c.stopAd = function() {
    this.trace("stopAd()");
    this.v.xb(z.a.Cb)
};
c.skipAd = function() {
    this.trace("skipAd()");
    this.v.ub(z.a.Ia)
};
c.resizeAd = function(a, b, d) {
    this.trace("resizeAd()", a, b, d);
    this.v.T(a, b, d)
};
c.pauseAd = function() {
    this.trace("pauseAd()");
    this.v.da()
};
c.resumeAd = function() {
    this.trace("resumeAd()");
    this.v.ga()
};
c.expandAd = function() {
    this.trace("expandAd()");
    this.v.za()
};
c.collapseAd = function() {
    this.trace("collapseAd()");
    this.v.ya()
};
c.subscribe = function(a, b, d) {
    this.ka.xa(b, a, d)
};
c.unsubscribe = function(a) {
    this.ka.Da(a)
};
window.getVPAIDAd = function() {
    return window.G
};
window.G = new Q;