// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var h, l = this,
        q = function(a) {
            return void 0 !== a
        },
        r = function(a, b, c) {
            a = a.split(".");
            c = c || l;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && q(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
        },
        aa = function(a, b) {
            for (var c = a.split("."), d = b || l, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        },
        ba = function() {},
        ca = function(a) {
            a.getInstance = function() {
                return a.bd ? a.bd : a.bd = new a
            }
        },
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ea = function(a) {
            return "array" == da(a)
        },
        fa = function(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            return "string" == typeof a
        },
        v = function(a) {
            return "number" == typeof a
        },
        w = function(a) {
            return "function" == da(a)
        },
        ga = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ha = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c =
                        Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        x = function(a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return x.apply(null, arguments)
        },
        ka = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        la = Date.now || function() {
            return +new Date
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.R = b.prototype;
            a.prototype = new c;
            a.Og = function(a, c, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[c].apply(a, g)
            }
        };
    var A = function(a, b) {
        this.width = a;
        this.height = b
    };
    h = A.prototype;
    h.clone = function() {
        return new A(this.width, this.height)
    };
    h.isEmpty = function() {
        return !(this.width * this.height)
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    h.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var ma = function(a) {
        ma[" "](a);
        return a
    };
    ma[" "] = ba;
    var na = function(a, b) {
        try {
            return ma(a[b]), !0
        } catch (c) {}
        return !1
    };
    var oa = function(a) {
            try {
                return !!a && null != a.location.href && na(a, "foo")
            } catch (b) {
                return !1
            }
        },
        pa = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        qa = /https?:\/\/[^\/]+/,
        sa = function() {
            var a = ra;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
    var ta = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        ua = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var xa = function(a, b, c, d, e) {
            try {
                if (Math.random() < (d || a.g)) {
                    var f = a.b + b + ("&" + va(c, 1)),
                        f = f.substring(0, 2E3);
                    "undefined" === typeof e ? wa(l, f) : wa(l, f, e)
                }
            } catch (g) {}
        },
        va = function(a, b) {
            var c = [];
            pa(a, function(a, e) {
                var f = null;
                if (ga(a) && 2 > b) f = va(a, b + 1);
                else if (0 === a || a) f = String(a);
                f && c.push(e + "=" + encodeURIComponent(f))
            });
            return c.join("&")
        },
        wa = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    ua(d, "load", e);
                    ua(d, "error", e)
                };
                ta(d, "load", e);
                ta(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        };
    var ya = function(a, b, c) {
            this.o = a;
            this.l = b;
            this.g = c;
            this.h = this.b
        },
        za = function(a, b, c) {
            this.message = a;
            this.fileName = b || "";
            this.lineNumber = c || -1
        },
        Ba = function(a, b, c, d, e) {
            var f;
            try {
                f = c()
            } catch (m) {
                var g = a.g;
                try {
                    var k = Aa(m),
                        g = (e || a.h).call(a, b, k, void 0, d)
                } catch (p) {
                    a.b("pAR", p)
                }
                if (!g) throw m;
            } finally {}
            return f
        },
        Da = function(a, b, c, d) {
            var e = Ca;
            return function() {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return Ba(e, a, function() {
                    return b.apply(c, f)
                }, d)
            }
        };
    ya.prototype.b = function(a, b, c, d, e) {
        var f = {};
        f.context = a;
        b instanceof za || (b = Aa(b));
        f.msg = b.message.substring(0, 512);
        b.fileName && (f.file = b.fileName);
        0 < b.lineNumber && (f.line = b.lineNumber.toString());
        a = l.document;
        f.url = a.URL.substring(0, 512);
        f.ref = (a.referrer || "").substring(0, 512);
        if (d) try {
            d(f)
        } catch (g) {}
        xa(this.o, e || this.l, f, c);
        return this.g
    };
    var Aa = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            var c = a.stack,
                d = b;
            try {
                -1 == c.indexOf(d) && (c = d + "\n" + c);
                for (var e; c != e;) e = c, c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = c.replace(/\n */g, "\n")
            } catch (f) {
                b = d
            }
        }
        return new za(b, a.fileName, a.lineNumber)
    };
    var Ea;
    var Fa = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Ga = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Oa = function(a) {
            if (!Ha.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ia, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ja, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ka, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(La, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ma, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Na, "&#0;"));
            return a
        },
        Ia = /&/g,
        Ja = /</g,
        Ka = />/g,
        La = /"/g,
        Ma = /'/g,
        Na = /\x00/g,
        Ha = /[\x00&<>"']/,
        Pa = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        B = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        Qa = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Ra = function(a) {
            return null == a ? "" : String(a)
        },
        Ta = function(a, b) {
            for (var c = 0, d = Ga(String(a)).split("."), e = Ga(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var k = d[g] || "",
                    m = e[g] || "",
                    p = RegExp("(\\d*)(\\D*)",
                        "g"),
                    t = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var C = p.exec(k) || ["", "", ""],
                        I = t.exec(m) || ["", "", ""];
                    if (0 == C[0].length && 0 == I[0].length) break;
                    c = Sa(0 == C[1].length ? 0 : parseInt(C[1], 10), 0 == I[1].length ? 0 : parseInt(I[1], 10)) || Sa(0 == C[2].length, 0 == I[2].length) || Sa(C[2], I[2])
                } while (0 == c)
            }
            return c
        },
        Sa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ua = 2147483648 * Math.random() | 0,
        Va = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        Wa = function(a) {
            var b = u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
                "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Xa = function(a, b) {
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        D = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ya = function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = u(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var m = g[k];
                    b.call(c, m, k, a) && (e[f++] = m)
                }
            return e
        },
        Za = function(a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        $a = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        bb = function(a, b, c) {
            b = ab(a, b, c);
            return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
        },
        ab = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        cb = function(a, b) {
            return 0 <= Xa(a, b)
        },
        eb = function() {
            var a = db;
            if (!ea(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        },
        fb = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        gb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        ib = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (fa(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++) a[e + g] = d[g]
                } else a.push(d)
            }
        },
        jb = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        kb = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = 0;
            return b
        },
        lb = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (ea(d))
                    for (var e = 0; e < d.length; e += 8192)
                        for (var f = lb.apply(null, jb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
                else b.push(d)
            }
            return b
        };
    var nb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        pb = function(a) {
            var b = ob,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return !0;
            return !1
        },
        qb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        rb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        sb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        tb = function(a, b) {
            for (var c = fa(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], q(a)); c++);
            return a
        },
        ub = function(a, b) {
            return null !== a && b in a
        },
        wb = function(a) {
            var b = vb,
                c;
            for (c in b)
                if (a.call(void 0,
                        b[c], c, b)) return c
        },
        xb = function(a, b, c) {
            return null !== a && b in a ? a[b] : c
        },
        yb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ab = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < zb.length; f++) c = zb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Bb = function(a) {
            var b = arguments.length;
            if (1 == b && ea(arguments[0])) return Bb.apply(null,
                arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var E;
    a: {
        var Cb = l.navigator;
        if (Cb) {
            var Db = Cb.userAgent;
            if (Db) {
                E = Db;
                break a
            }
        }
        E = ""
    }
    var F = function(a) {
        return -1 != E.indexOf(a)
    };
    var Eb = function() {
            return F("Opera") || F("OPR")
        },
        Fb = function() {
            return (F("Chrome") || F("CriOS")) && !Eb() && !F("Edge")
        };
    var G = function(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    };
    G.prototype.clone = function() {
        return new G(this.x, this.y)
    };
    G.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    G.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    G.prototype.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    var Gb = function() {
            this.g = "";
            this.b = null
        },
        Hb = function(a) {
            var b = new Gb;
            b.g = a;
            b.b = 0
        };
    Hb("<!DOCTYPE html>");
    Hb("");
    Hb("<br>");
    var Ib = function() {
        return F("iPhone") && !F("iPod") && !F("iPad")
    };
    var Jb = Eb(),
        H = F("Trident") || F("MSIE"),
        Kb = F("Edge"),
        Lb = F("Gecko") && !(B(E, "WebKit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
        Mb = B(E, "WebKit") && !F("Edge"),
        Nb = F("Macintosh"),
        Ob = F("Android"),
        Pb = Ib(),
        Qb = F("iPad"),
        Rb = function() {
            var a = l.document;
            return a ? a.documentMode : void 0
        },
        Sb;
    a: {
        var Tb = "",
            Ub = function() {
                var a = E;
                if (Lb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Kb) return /Edge\/([\d\.]+)/.exec(a);
                if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Mb) return /WebKit\/(\S+)/.exec(a);
                if (Jb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ub && (Tb = Ub ? Ub[1] : "");
        if (H) {
            var Vb = Rb();
            if (null != Vb && Vb > parseFloat(Tb)) {
                Sb = String(Vb);
                break a
            }
        }
        Sb = Tb
    }
    var Wb = Sb,
        Xb = {},
        Yb = function(a) {
            return Xb[a] || (Xb[a] = 0 <= Ta(Wb, a))
        },
        Zb = l.document,
        $b = Zb && H ? Rb() || ("CSS1Compat" == Zb.compatMode ? parseInt(Wb, 10) : 5) : void 0;
    var ac = !H || 9 <= Number($b);
    !Lb && !H || H && 9 <= Number($b) || Lb && Yb("1.9.1");
    var bc = H && !Yb("9");
    var ec = function(a) {
            return a ? new cc(dc(a)) : Ea || (Ea = new cc)
        },
        fc = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        },
        hc = function(a, b) {
            nb(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : gc.hasOwnProperty(d) ? a.setAttribute(gc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        gc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ic = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new A(a.clientWidth, a.clientHeight)
        },
        jc = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Mb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return H && Yb("10") && a.pageYOffset != b.scrollTop ?
                new G(b.scrollLeft, b.scrollTop) : new G(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        J = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        lc = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[0],
                g = d[1];
            if (!ac && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', Oa(g.name), '"');
                if (g.type) {
                    f.push(' type="', Oa(g.type), '"');
                    var k = {};
                    Ab(k, g);
                    delete k.type;
                    g = k
                }
                f.push(">");
                f = f.join("")
            }
            f = e.createElement(f);
            g && (u(g) ? f.className = g : ea(g) ? f.className = g.join(" ") : hc(f, g));
            2 < d.length && kc(e, f,
                d);
            return f
        },
        kc = function(a, b, c) {
            function d(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !fa(f) || ga(f) && 0 < f.nodeType ? d(f) : D(mc(f) ? gb(f) : f, d)
            }
        },
        nc = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        oc = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        dc = function(a) {
            return 9 ==
                a.nodeType ? a : a.ownerDocument || a.document
        },
        pc = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? J(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        qc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        rc = {
            IMG: " ",
            BR: "\n"
        },
        sc = function(a, b, c) {
            if (!(a.nodeName in qc))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in rc) b.push(rc[a.nodeName]);
            else
                for (a = a.firstChild; a;) sc(a, b, c), a = a.nextSibling
        },
        mc = function(a) {
            if (a && "number" == typeof a.length) {
                if (ga(a)) return "function" ==
                    typeof a.item || "string" == typeof a.item;
                if (w(a)) return "function" == typeof a.item
            }
            return !1
        },
        cc = function(a) {
            this.b = a || l.document || document
        };
    cc.prototype.createElement = function(a) {
        return this.b.createElement(a)
    };
    cc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    cc.prototype.contains = oc;
    var tc = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    h = tc.prototype;
    h.clone = function() {
        return new tc(this.top, this.right, this.bottom, this.left)
    };
    h.contains = function(a) {
        return this && a ? a instanceof tc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    h.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var uc = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    uc.prototype.clone = function() {
        return new uc(this.left, this.top, this.width, this.height)
    };
    var vc = function(a) {
        return new tc(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    uc.prototype.contains = function(a) {
        return a instanceof uc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    uc.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    uc.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    uc.prototype.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var xc = function(a, b, c) {
            if (u(b))(b = wc(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = wc(c, d);
                    f && (c.style[f] = e)
                }
        },
        yc = {},
        wc = function(a, b) {
            var c = yc[b];
            if (!c) {
                var d = Va(b),
                    c = d;
                void 0 === a.style[d] && (d = (Mb ? "Webkit" : Lb ? "Moz" : H ? "ms" : Jb ? "O" : null) + Wa(d), void 0 !== a.style[d] && (c = d));
                yc[b] = c
            }
            return c
        },
        zc = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -=
                a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Ac = function(a) {
            var b = dc(a),
                c = new G(0, 0),
                d;
            d = b ? dc(b) : document;
            d = !H || 9 <= Number($b) || "CSS1Compat" == ec(d).b.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = zc(a);
            b = jc(ec(b).b);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Bc = function(a, b) {
            var c = new G(0, 0),
                d = J(dc(a));
            if (!na(d, "parent")) return c;
            var e = a;
            do {
                var f;
                d == b ? f = Ac(e) : (f = zc(e), f = new G(f.left, f.top));
                c.x += f.x;
                c.y += f.y
            } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));
            return c
        },
        Cc =
        function(a) {
            "number" == typeof a && (a = a + "px");
            return a
        },
        Ec = function(a) {
            var b = Dc,
                c;
            a: {
                c = dc(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break a
                }
                c = ""
            }
            if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility =
                e;
            return a
        },
        Dc = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Mb && !b && !c;
            return q(b) && !d || !a.getBoundingClientRect ? new A(b, c) : (a = zc(a), new A(a.right - a.left, a.bottom - a.top))
        };
    var Fc = document,
        K = window;
    var Gc = Object.prototype.hasOwnProperty,
        Hc = function(a, b) {
            for (var c in a) Gc.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Kc = function(a) {
            var b = Ic;
            return a && a && ("object" === typeof a || "function" === typeof a) ? !Jc(a, b.prototype) : !0
        },
        Jc = function(a, b) {
            if (!a) return !1;
            var c = !0;
            Hc(b, function(b, e) {
                c && e in a && typeof b === typeof a[e] || (c = !1)
            });
            return c
        },
        Lc = !!window.google_async_iframe_id,
        Mc = Lc && window.parent || window,
        Nc = function() {
            if (Lc && !oa(Mc)) {
                var a = "." + Fc.domain;
                try {
                    for (; 2 < a.split(".").length && !oa(Mc);) Fc.domain = a = a.substr(a.indexOf(".") +
                        1), Mc = window.parent
                } catch (b) {}
                oa(Mc) || (Mc = window)
            }
            return Mc
        };
    var Oc, Ca;
    Oc = new function() {
        this.b = "http" + ("http:" === K.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com/pagead/gen_204?id=";
        this.g = .01
    };
    Ca = new ya(Oc, "jserror", !0);
    var Pc = Ca.b,
        Qc = function(a) {
            xa(Oc, "jserror", a, void 0, void 0)
        },
        Rc = function(a, b, c, d) {
            return Da(a, b, c, d)
        },
        Sc = function(a, b) {
            return Da(a, b, void 0, void 0)
        };
    var Tc = function(a) {
        a = (a || l).context;
        try {
            if (a && "pageViewId" in a && "canonicalUrl" in a) return a
        } catch (b) {}
        return null
    };
    var Ic = function(a) {
            this.g = {};
            this.b = {};
            for (var b = 0, c = arguments.length; b < c; ++b) this.b[arguments[b]] = ""
        },
        Vc = function() {
            var a = Uc(),
                b = new Ic;
            pa(a.g, function(a, d) {
                b.g[d] = a
            });
            pa(a.b, Ic.prototype.h, b);
            return b
        };
    Ic.prototype.h = function(a, b) {
        this.b[b] = a
    };
    var Wc = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, oa(a) && (c = a, b = d);
        return {
            ib: c,
            level: b
        }
    };
    var Yc = function(a) {
            this.S = a;
            Xc(this, 3, null);
            Xc(this, 4, 0);
            Xc(this, 5, 0);
            Xc(this, 6, 0);
            Xc(this, 15, 0);
            a = Nc();
            var b = Tc(a);
            b ? ((a = b || Tc()) ? (b = a.pageViewId, u(a.clientId) && (b += a.clientId.replace(/\D/g, "").substr(0, 6)), a = b) : a = null, a = +a) : (a = Wc(a).ib, (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43))), a = b);
            Xc(this, 7, a);
            Xc(this, 8, {});
            Xc(this, 9, {});
            Xc(this, 10, {});
            Xc(this, 11, []);
            Xc(this, 12, 0);
            Xc(this, 14, {});
            Xc(this, 17, !1);
            Xc(this, 18, !1)
        },
        Zc = {},
        $c = function() {
            var a =
                Tc(window);
            if (a && ga(a.master)) var a = a.master,
                b = "google_persistent_state_async",
                c = {};
            else {
                a = Nc();
                b = Lc ? "google_persistent_state_async" : "google_persistent_state";
                if (Zc[b]) return Zc[b];
                "google_persistent_state_async" == b ? c = {} : c = a
            }
            var d = a[b];
            return null != d && "object" == typeof d && null != d.S && "object" == typeof d.S ? Zc[b] = d : a[b] = Zc[b] = new Yc(c)
        },
        ad = {
            3: "google_exp_persistent",
            4: "google_num_sdo_slots",
            5: "google_num_0ad_slots",
            6: "google_num_ad_slots",
            7: "google_correlator",
            8: "google_prev_ad_formats_by_region",
            9: "google_prev_ad_slotnames_by_region",
            10: "google_num_slots_by_channel",
            11: "google_viewed_host_channels",
            12: "google_num_slot_to_show",
            14: "gaGlobal",
            15: "google_num_reactive_ad_slots",
            17: "google_ose_setup_performed",
            18: "google_predictive_sra_request_sent"
        },
        bd = function(a) {
            if (a in ad) return ad[a];
            throw Error("unexpected state");
        },
        cd = {
            14: "gaGlobal"
        },
        dd = function(a) {
            return cd[a] || "google_ps_" + a
        },
        ed = function(a, b) {
            if (a[bd(b)] !== a[dd(b)]) {
                var c = {
                    context: "ps_ckncc",
                    url: Nc().location.href,
                    key: b
                };
                Qc(c)
            }
        },
        Xc = function(a, b, c) {
            a = a.S;
            var d = bd(b),
                e = dd(b);
            ed(a, b);
            d !== e && void 0 === a[e] && (a[e] = c);
            void 0 === a[d] && (a[d] = c)
        };
    var fd = null,
        gd = function() {
            if (fd && fd) return !0;
            var a;
            a: {
                var b = $c();a = bd(3);
                var b = b.S,
                    c = b[a];
                if (void 0 === c) {
                    var d = dd(3),
                        c = b[d];
                    if (void 0 === c) {
                        b[a] = null;
                        a = b[d] = null;
                        break a
                    }
                }
                ed(b, 3);a = c
            }
            a && Kc(a) && (b = null, a && a.b && a.b === a.layers && a.g && a.g === a.defaultBucket && (b = new Ic, b.b = a.b, b.g = a.g), a = b, a || (a = new Ic, b = {
                context: "ps::gpes::cf",
                url: Nc().location.href
            }, Qc(b)));
            return !Kc(a) && a ? (fd = a, !0) : !1
        },
        Uc = function() {
            if (gd()) return fd;
            var a = $c(),
                b = new Ic(2, 1, 3, 4, 5, 7, 12, 13, 14, 17, 19, 20, 29, 31, 35, 36, 41, 42, 44, 45, 46, 47, 48, 49,
                    51, 53, 54, 55, 56, 58, 59, 60, 61),
                a = a.S;
            a[dd(3)] = b;
            return fd = a[bd(3)] = b
        },
        hd = null;
    var id = "StopIteration" in l ? l.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        jd = function() {};
    jd.prototype.next = function() {
        throw id;
    };
    jd.prototype.Aa = function() {
        return this
    };
    var kd = function(a) {
            if (a instanceof jd) return a;
            if ("function" == typeof a.Aa) return a.Aa(!1);
            if (fa(a)) {
                var b = 0,
                    c = new jd;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw id;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        ld = function(a, b, c) {
            if (fa(a)) try {
                D(a, b, c)
            } catch (d) {
                if (d !== id) throw d;
            } else {
                a = kd(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (d) {
                    if (d !== id) throw d;
                }
            }
        };
    var md = function(a, b) {
        this.g = {};
        this.b = [];
        this.l = this.h = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof md ? (c = a.ia(), d = a.X()) : (c = sb(a), d = rb(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    h = md.prototype;
    h.qa = function() {
        return this.h
    };
    h.X = function() {
        nd(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.g[this.b[b]]);
        return a
    };
    h.ia = function() {
        nd(this);
        return this.b.concat()
    };
    h.isEmpty = function() {
        return 0 == this.h
    };
    h.clear = function() {
        this.g = {};
        this.l = this.h = this.b.length = 0
    };
    var pd = function(a, b) {
            od(a.g, b) && (delete a.g[b], a.h--, a.l++, a.b.length > 2 * a.h && nd(a))
        },
        nd = function(a) {
            if (a.h != a.b.length) {
                for (var b = 0, c = 0; b < a.b.length;) {
                    var d = a.b[b];
                    od(a.g, d) && (a.b[c++] = d);
                    b++
                }
                a.b.length = c
            }
            if (a.h != a.b.length) {
                for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], od(e, d) || (a.b[c++] = d, e[d] = 1), b++;
                a.b.length = c
            }
        };
    h = md.prototype;
    h.get = function(a, b) {
        return od(this.g, a) ? this.g[a] : b
    };
    h.set = function(a, b) {
        od(this.g, a) || (this.h++, this.b.push(a), this.l++);
        this.g[a] = b
    };
    h.forEach = function(a, b) {
        for (var c = this.ia(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() {
        return new md(this)
    };
    h.Aa = function(a) {
        nd(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new jd;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.b.length) throw id;
            var e = d.b[b++];
            return a ? e : d.g[e]
        };
        return e
    };
    var od = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var qd = function(a) {
            if (a.X && "function" == typeof a.X) return a.X();
            if (u(a)) return a.split("");
            if (fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return rb(a)
        },
        rd = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (fa(a) || u(a)) D(a, b, c);
            else {
                var d;
                if (a.ia && "function" == typeof a.ia) d = a.ia();
                else if (a.X && "function" == typeof a.X) d = void 0;
                else if (fa(a) || u(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = sb(a);
                for (var e = qd(a), f = e.length, g = 0; g < f; g++) b.call(c,
                    e[g], d && d[g], a)
            }
        };
    var sd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        td = function(a) {
            return a ? decodeURI(a) : a
        },
        ud = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f = null,
                        g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
                }
        },
        vd = function(a, b, c) {
            if (ea(b))
                for (var d = 0; d < b.length; d++) vd(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        },
        wd = function(a, b, c) {
            for (c = c || 0; c < b.length; c += 2) vd(b[c], b[c + 1], a);
            return a
        },
        xd = function(a, b) {
            var c = 2 == arguments.length ? wd([a], arguments[1], 0) : wd([a], arguments, 1);
            if (c[1]) {
                var d = c[0],
                    e = d.indexOf("#");
                0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
                e = d.indexOf("?");
                0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
            }
            return c.join("")
        },
        yd = /#|$/,
        Ad = function(a, b) {
            var c = a.search(yd),
                d;
            a: {
                d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 ==
                            f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
        };
    var Bd = function(a, b) {
        this.g = this.w = this.h = "";
        this.B = null;
        this.o = this.m = "";
        this.l = !1;
        var c;
        a instanceof Bd ? (this.l = q(b) ? b : a.l, Cd(this, a.h), this.w = a.w, this.g = a.g, Dd(this, a.B), this.m = a.m, Ed(this, a.b.clone()), this.o = a.o) : a && (c = String(a).match(sd)) ? (this.l = !!b, Cd(this, c[1] || "", !0), this.w = Fd(c[2] || ""), this.g = Fd(c[3] || "", !0), Dd(this, c[4]), this.m = Fd(c[5] || "", !0), Ed(this, c[6] || "", !0), this.o = Fd(c[7] || "")) : (this.l = !!b, this.b = new Gd(null, 0, this.l))
    };
    Bd.prototype.toString = function() {
        var a = [],
            b = this.h;
        b && a.push(Hd(b, Id, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.w) && a.push(Hd(b, Id, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
        if (c = this.m) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Hd(c, "/" == c.charAt(0) ? Jd : Kd, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.o) && a.push("#", Hd(c, Ld));
        return a.join("")
    };
    Bd.prototype.clone = function() {
        return new Bd(this)
    };
    var Cd = function(a, b, c) {
            a.h = c ? Fd(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        },
        Dd = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.B = b
            } else a.B = null
        },
        Ed = function(a, b, c) {
            b instanceof Gd ? (a.b = b, Md(a.b, a.l)) : (c || (b = Hd(b, Nd)), a.b = new Gd(b, 0, a.l))
        },
        Fd = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Hd = function(a, b, c) {
            return u(a) ? (a = encodeURI(a).replace(b, Od), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Od = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Id = /[#\/\?@]/g,
        Kd = /[\#\?:]/g,
        Jd = /[\#\?]/g,
        Nd = /[\#\?@]/g,
        Ld = /#/g,
        Gd = function(a, b, c) {
            this.g = this.b = null;
            this.h = a || null;
            this.l = !!c
        },
        Qd = function(a) {
            a.b || (a.b = new md, a.g = 0, a.h && ud(a.h, function(b, c) {
                Pd(a, decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    Gd.prototype.qa = function() {
        Qd(this);
        return this.g
    };
    var Pd = function(a, b, c) {
            Qd(a);
            a.h = null;
            b = Rd(a, b);
            var d = a.b.get(b);
            d || a.b.set(b, d = []);
            d.push(c);
            a.g = a.g + 1
        },
        Sd = function(a, b) {
            Qd(a);
            b = Rd(a, b);
            od(a.b.g, b) && (a.h = null, a.g = a.g - a.b.get(b).length, pd(a.b, b))
        };
    Gd.prototype.clear = function() {
        this.b = this.h = null;
        this.g = 0
    };
    Gd.prototype.isEmpty = function() {
        Qd(this);
        return 0 == this.g
    };
    var Td = function(a, b) {
        Qd(a);
        b = Rd(a, b);
        return od(a.b.g, b)
    };
    h = Gd.prototype;
    h.ia = function() {
        Qd(this);
        for (var a = this.b.X(), b = this.b.ia(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.X = function(a) {
        Qd(this);
        var b = [];
        if (u(a)) Td(this, a) && (b = fb(b, this.b.get(Rd(this, a))));
        else {
            a = this.b.X();
            for (var c = 0; c < a.length; c++) b = fb(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        Qd(this);
        this.h = null;
        a = Rd(this, a);
        Td(this, a) && (this.g = this.g - this.b.get(a).length);
        this.b.set(a, [b]);
        this.g = this.g + 1;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.X(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    h.toString = function() {
        if (this.h) return this.h;
        if (!this.b) return "";
        for (var a = [], b = this.b.ia(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.h = a.join("&")
    };
    h.clone = function() {
        var a = new Gd;
        a.h = this.h;
        this.b && (a.b = this.b.clone(), a.g = this.g);
        return a
    };
    var Rd = function(a, b) {
            var c = String(b);
            a.l && (c = c.toLowerCase());
            return c
        },
        Md = function(a, b) {
            b && !a.l && (Qd(a), a.h = null, a.b.forEach(function(a, b) {
                var e = b.toLowerCase();
                b != e && (Sd(this, b), Sd(this, e), 0 < a.length && (this.h = null, this.b.set(Rd(this, e), gb(a)), this.g = this.g + a.length))
            }, a));
            a.l = b
        };
    Gd.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) rd(arguments[b], function(a, b) {
            Pd(this, b, a)
        }, this)
    };
    var Ud = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var Vd = function(a, b, c) {
        this.l = b;
        this.b = c;
        this.h = a
    };
    h = Vd.prototype;
    h.Ab = function() {
        return this.g
    };
    h.Qa = function() {
        return this.l
    };
    h.Jc = function() {
        return this.b
    };
    h.Ud = function() {
        return 1E3 > this.b ? this.b : 900
    };
    h.ue = function() {
        return this.h
    };
    h.toString = function() {
        return "AdError " + this.Jc() + ": " + this.Qa() + (null != this.Ab() ? " Caused by: " + this.Ab() : "")
    };
    var Wd = function() {
        this.H = this.H;
        this.B = this.B
    };
    Wd.prototype.H = !1;
    Wd.prototype.N = function() {
        this.H || (this.H = !0, this.J())
    };
    var Xd = function(a, b) {
        a.H ? b.call(void 0) : (a.B || (a.B = []), a.B.push(q(void 0) ? x(b, void 0) : b))
    };
    Wd.prototype.J = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };
    var Yd = function(a) {
        a && "function" == typeof a.N && a.N()
    };
    var L = function(a, b) {
        this.type = a;
        this.b = this.target = b;
        this.qd = !0
    };
    L.prototype.preventDefault = function() {
        this.qd = !1
    };
    var Zd = function(a, b) {
        L.call(this, "adError");
        this.h = a;
        this.l = b ? b : null
    };
    z(Zd, L);
    Zd.prototype.g = function() {
        return this.h
    };
    Zd.prototype.o = function() {
        return this.l
    };
    var M = function(a, b, c) {
        L.call(this, a);
        this.l = b;
        this.h = null != c ? c : null
    };
    z(M, L);
    M.prototype.m = function() {
        return this.l
    };
    M.prototype.B = function() {
        return this.h
    };
    var $d = function(a) {
            this.b = a
        },
        ce = function() {
            var a = ae(N);
            return be(a, "disableExperiments")
        },
        be = function(a, b) {
            if (ub(a.b, b)) {
                var c = a.b[b];
                if ("boolean" == typeof c) return c
            }
            return !1
        },
        de = function(a) {
            if (ub(a.b, "forceExperimentIds")) {
                a = a.b.forceExperimentIds;
                var b = [],
                    c = 0;
                ea(a) && D(a, function(a) {
                    v(a) && (b[c++] = a)
                });
                return b
            }
            return null
        };
    var ee = function(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        ge = function(a) {
            return (new fe(void 0)).g(a)
        },
        fe = function(a) {
            this.b = a
        };
    fe.prototype.g = function(a) {
        var b = [];
        he(this, a, b);
        return b.join("")
    };
    var he = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (ea(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], he(a, a.b ? a.b.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), ie(d, c), c.push(":"), he(a, a.b ? a.b.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        ie(b,
                            c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        je = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        ke = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        ie = function(a, b) {
            b.push('"', a.replace(ke, function(a) {
                var b = je[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
                    je[a] = b);
                return b
            }), '"')
        };
    var O = function() {
            this.o = "always";
            this.A = 4;
            this.h = 1;
            this.l = !0;
            this.H = !1;
            this.w = "en";
            this.B = !1;
            this.C = this.m = "";
            this.g = null
        },
        le = "af am ar bg bn ca cs da de el en en_gb es es_419 et eu fa fi fil fr fr_ca gl gu he hi hr hu id in is it iw ja kn ko lt lv ml mr ms nb nl no pl pt_br pt_pt ro ru sk sl sr sv sw ta te th tr uk ur vi zh_cn zh_hk zh_tw zu".split(" "),
        me = function(a) {
            a = Ra(a);
            Fa(a) || (a = a.substring(0, 20));
            return a
        };
    h = O.prototype;
    h.af = function(a) {
        this.o = a
    };
    h.Oc = function() {
        return this.o
    };
    h.cf = function(a) {
        this.A = a
    };
    h.Pc = function() {
        return this.A
    };
    h.ef = function(a) {
        this.D = a
    };
    h.Sc = function() {
        return this.D
    };
    h.gf = function(a) {
        "boolean" == typeof a && (this.h = a ? 1 : 0)
    };
    h.hf = function(a) {
        this.h = a
    };
    h.$e = function(a) {
        this.l = a
    };
    h.Tc = function() {
        return this.l
    };
    h.ff = function(a) {
        this.H = a
    };
    h.va = function() {
        return this.H
    };
    h.ra = function() {
        return !1
    };
    h.rf = function() {
        return !1
    };
    h.bf = function(a) {
        this.B = a
    };
    h.Hb = function() {
        return this.B
    };
    h.sa = function() {
        return !1
    };
    h.Fb = function() {
        return !1
    };
    h.sd = function(a) {
        if (null != a) {
            a = a.toLowerCase().replace("-", "_");
            if (!cb(le, a) && (a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "", !cb(le, a))) return;
            this.w = a
        }
    };
    h.xb = function() {
        return this.w
    };
    h.Uc = function(a) {
        this.m = me(a)
    };
    h.Qc = function() {
        return this.m
    };
    h.df = function(a) {
        this.C = me(a)
    };
    h.Rc = function() {
        return this.C
    };
    var ae = function(a) {
            if (null == a.g) {
                var b = {},
                    c = (new Bd(J().location.href)).b;
                if (Td(c, "tcnfp")) try {
                    b = ee(c.get("tcnfp"))
                } catch (d) {}
                a.g = new $d(b)
            }
            return a.g
        },
        N = new O;
    window.console && "function" === typeof window.console.log && x(window.console.log, window.console);
    var ne = function(a) {
            return window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing[a] ? (a = la() - window.performance.timing[a], Math.round(a / 1E3)) : null
        },
        oe = function() {
            this.domLoading = ne("domLoading");
            this.domComplete = ne("domComplete");
            this.unloadEventStart = ne("unloadEventStart")
        };
    oe.prototype.toString = function() {
        function a(a) {
            a = xb(c, a);
            null != a ? b.push("" + a) : b.push("u")
        }
        var b = [],
            c = this;
        a("domLoading");
        a("domComplete");
        a("unloadEventStart");
        return b.join(".")
    };
    var pe = function(a) {
        var b = {},
            c = new oe,
            d = null;
        null != c.domLoading && (d = c.domLoading);
        0 > d && window.performance && window.performance.timing && (b.di = "now." + la() + ".loadstart." + window.performance.timing.domLoading + ".tagload." + a);
        null == d && null != a && (d = a);
        b.pt = c;
        b.td = d;
        return b
    };
    var qe = function(a) {
        for (var b = [], c = a = J(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var re = null,
        se = function() {
            this.b = {};
            this.h = 0
        },
        te = function(a, b) {
            this.m = a;
            this.l = !0;
            this.b = b
        };
    te.prototype.g = function() {
        return this.l ? this.h() : ""
    };
    te.prototype.h = function() {
        return String(this.b)
    };
    var ue = function(a, b) {
        te.call(this, String(a), b);
        this.o = a;
        this.b = !!b
    };
    z(ue, te);
    ue.prototype.h = function() {
        return this.b ? "1" : "0"
    };
    var ve = function(a, b) {
        te.call(this, a, b)
    };
    z(ve, te);
    ve.prototype.h = function() {
        return this.b ? Math.round(this.b.top) + "." + Math.round(this.b.left) + "." + (Math.round(this.b.top) + Math.round(this.b.height)) + "." + (Math.round(this.b.left) + Math.round(this.b.width)) : ""
    };
    var we = function(a) {
            if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                a = a.split(".");
                var b = Number(a[0]),
                    c = Number(a[1]);
                return new ve("", new uc(c, b, Number(a[3]) - c, Number(a[2]) - b))
            }
            return new ve("", new uc(0, 0, 0, 0))
        },
        xe = function() {
            re || (re = new se);
            return re
        };
    se.prototype.setItem = function(a) {
        this.b[a.m] = a
    };
    se.prototype.getItem = function(a) {
        return xb(this.b, a, null)
    };
    se.prototype.g = function(a) {
        var b = [];
        a || (a = 0);
        for (var c in this.b) {
            var d = this.b[c];
            d instanceof ue ? d.b && (a |= d.o) : (d = this.b[c].g()) && b.push(c + d)
        }
        b.push("eb" + String(a));
        return b.join("_")
    };
    var ye = function(a) {
            var b = new uc(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new uc(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                var e;
                a: {
                    e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        k = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= k) {
                        var m = Math.max(e.top, f.top),
                            f = Math.min(e.top + e.height, f.top + f.height);
                        if (m <= f) {
                            e.left = g;
                            e.top = m;
                            e.width = k - g;
                            e.height = f - m;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        ze = function(a, b) {
            var c = a.getBoundingClientRect(),
                d = Bc(a,
                    b);
            return new uc(Math.round(d.x), Math.round(d.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        Ae = function(a, b, c) {
            if (b && c) {
                var d;
                a: {
                    d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new uc(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;
                f = d ? b.height * b.width : 0;
                d = d && f ? Math.round(e / f * 100) : 0;
                a.setItem(new te("vp", d));
                d && 0 < d ? (e = vc(b), f = vc(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
                a.setItem(new ue(512, e));
                d && 0 < d ? (e = vc(b), f = vc(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
                a.setItem(new ue(1024, e));
                d && 0 < d ? (e = vc(b), f = vc(c), e = e.left >= f.left && e.left < f.right) : e = !1;
                a.setItem(new ue(2048, e));
                d && 0 < d ? (b = vc(b), c = vc(c), c = b.right <= c.right && b.right > c.left) : c = !1;
                a.setItem(new ue(4096, c))
            }
        };
    var Be = !H || 9 <= Number($b),
        Ce = H && !Yb("9");
    !Mb || Yb("528");
    Lb && Yb("1.9b") || H && Yb("8") || Jb && Yb("9.5") || Mb && Yb("528");
    Lb && !Yb("8") || H && Yb("9");
    var De = function(a, b) {
        L.call(this, a ? a.type : "");
        this.b = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.g = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            var d = a.relatedTarget;
            d && Lb && na(d, "nodeName");
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY =
                a.screenY || 0) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY, this.screenX = c.screenX || 0, this.screenY = c.screenY || 0);
            this.button = a.button;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.g = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    z(De, L);
    De.prototype.preventDefault = function() {
        De.R.preventDefault.call(this);
        var a = this.g;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ce) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Ee = "closure_listenable_" + (1E6 * Math.random() | 0),
        Fe = function(a) {
            return !(!a || !a[Ee])
        },
        Ge = 0;
    var He = function(a, b, c, d, e) {
            this.listener = a;
            this.b = null;
            this.src = b;
            this.type = c;
            this.Ia = !!d;
            this.Oa = e;
            this.yb = ++Ge;
            this.xa = this.Ha = !1
        },
        Ie = function(a) {
            a.xa = !0;
            a.listener = null;
            a.b = null;
            a.src = null;
            a.Oa = null
        };
    var Je = function(a) {
            this.src = a;
            this.b = {};
            this.g = 0
        },
        Le = function(a, b, c, d, e, f) {
            var g = b.toString();
            b = a.b[g];
            b || (b = a.b[g] = [], a.g++);
            var k = Ke(b, c, e, f); - 1 < k ? (a = b[k], d || (a.Ha = !1)) : (a = new He(c, a.src, g, !!e, f), a.Ha = d, b.push(a));
            return a
        },
        Me = function(a, b) {
            var c = b.type;
            if (c in a.b) {
                var d = a.b[c],
                    e = Xa(d, b),
                    f;
                (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
                f && (Ie(b), 0 == a.b[c].length && (delete a.b[c], a.g--))
            }
        },
        Ne = function(a, b, c, d, e) {
            a = a.b[b.toString()];
            b = -1;
            a && (b = Ke(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Ke = function(a, b, c, d) {
            for (var e =
                    0; e < a.length; ++e) {
                var f = a[e];
                if (!f.xa && f.listener == b && f.Ia == !!c && f.Oa == d) return e
            }
            return -1
        };
    var Oe = "closure_lm_" + (1E6 * Math.random() | 0),
        Pe = {},
        Qe = 0,
        Re = function(a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) Re(a, b[f], c, d, e);
                return null
            }
            c = Se(c);
            return Fe(a) ? a.G(b, c, d, e) : Te(a, b, c, !1, d, e)
        },
        Te = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = !!e,
                k = Ue(a);
            k || (a[Oe] = k = new Je(a));
            c = Le(k, b, c, d, e, f);
            if (c.b) return c;
            d = Ve();
            c.b = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, g);
            else if (a.attachEvent) a.attachEvent(We(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Qe++;
            return c
        },
        Ve = function() {
            var a = Xe,
                b = Be ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Ye = function(a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) Ye(a, b[f], c, d, e);
                return null
            }
            c = Se(c);
            return Fe(a) ? Le(a.o, String(b), c, !0, d, e) : Te(a, b, c, !0, d, e)
        },
        Ze = function(a, b, c, d, e) {
            if (ea(b))
                for (var f = 0; f < b.length; f++) Ze(a, b[f], c, d, e);
            else c = Se(c), Fe(a) ? a.za(b, c, d, e) : a && (a = Ue(a)) && (b = Ne(a, b, c, !!d, e)) && $e(b)
        },
        $e = function(a) {
            if (!v(a) && a && !a.xa) {
                var b =
                    a.src;
                if (Fe(b)) Me(b.o, a);
                else {
                    var c = a.type,
                        d = a.b;
                    b.removeEventListener ? b.removeEventListener(c, d, a.Ia) : b.detachEvent && b.detachEvent(We(c), d);
                    Qe--;
                    (c = Ue(b)) ? (Me(c, a), 0 == c.g && (c.src = null, b[Oe] = null)) : Ie(a)
                }
            }
        },
        We = function(a) {
            return a in Pe ? Pe[a] : Pe[a] = "on" + a
        },
        bf = function(a, b, c, d) {
            var e = !0;
            if (a = Ue(a))
                if (b = a.b[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.Ia == c && !f.xa && (f = af(f, d), e = e && !1 !== f)
                    }
                return e
        },
        af = function(a, b) {
            var c = a.listener,
                d = a.Oa || a.src;
            a.Ha && $e(a);
            return c.call(d, b)
        },
        Xe = function(a, b) {
            if (a.xa) return !0;
            if (!Be) {
                var c = b || aa("window.event"),
                    d = new De(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (m) {
                            f = !0
                        }
                        if (f || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.b; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, g = c.length - 1; 0 <= g; g--) {
                        d.b = c[g];
                        var k = bf(c[g], f, !0, d),
                            e = e && k
                    }
                    for (g = 0; g < c.length; g++) d.b = c[g],
                    k = bf(c[g], f, !1, d),
                    e = e && k
                }
                return e
            }
            return af(a, new De(b, this))
        },
        Ue = function(a) {
            a = a[Oe];
            return a instanceof
            Je ? a : null
        },
        cf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Se = function(a) {
            if (w(a)) return a;
            a[cf] || (a[cf] = function(b) {
                return a.handleEvent(b)
            });
            return a[cf]
        };
    var P = function() {
        Wd.call(this);
        this.o = new Je(this);
        this.oa = this;
        this.ha = null
    };
    z(P, Wd);
    P.prototype[Ee] = !0;
    h = P.prototype;
    h.addEventListener = function(a, b, c, d) {
        Re(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        Ze(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        var b, c = this.ha;
        if (c)
            for (b = []; c; c = c.ha) b.push(c);
        var c = this.oa,
            d = a.type || a;
        if (u(a)) a = new L(a, c);
        else if (a instanceof L) a.target = a.target || c;
        else {
            var e = a;
            a = new L(d, c);
            Ab(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; 0 <= g; g--) f = a.b = b[g], e = df(f, d, !0, a) && e;
        f = a.b = c;
        e = df(f, d, !0, a) && e;
        e = df(f, d, !1, a) && e;
        if (b)
            for (g = 0; g < b.length; g++) f = a.b = b[g], e = df(f, d, !1, a) && e;
        return e
    };
    h.J = function() {
        P.R.J.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.b) {
                for (var d = a.b[c], e = 0; e < d.length; e++) ++b, Ie(d[e]);
                delete a.b[c];
                a.g--
            }
        }
        this.ha = null
    };
    h.G = function(a, b, c, d) {
        return Le(this.o, String(a), b, !1, c, d)
    };
    h.za = function(a, b, c, d) {
        var e;
        e = this.o;
        a = String(a).toString();
        if (a in e.b) {
            var f = e.b[a];
            b = Ke(f, b, c, d); - 1 < b ? (Ie(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.b[a], e.g--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var df = function(a, b, c, d) {
        b = a.o.b[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.xa && g.Ia == c) {
                var k = g.listener,
                    m = g.Oa || g.src;
                g.Ha && Me(a.o, g);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && 0 != d.qd
    };
    var ef = function(a, b) {
        P.call(this);
        this.h = a || 1;
        this.g = b || l;
        this.m = x(this.A, this);
        this.w = la()
    };
    z(ef, P);
    ef.prototype.l = !1;
    ef.prototype.b = null;
    ef.prototype.A = function() {
        if (this.l) {
            var a = la() - this.w;
            0 < a && a < .8 * this.h ? this.b = this.g.setTimeout(this.m, this.h - a) : (this.b && (this.g.clearTimeout(this.b), this.b = null), this.dispatchEvent("tick"), this.l && (this.b = this.g.setTimeout(this.m, this.h), this.w = la()))
        }
    };
    ef.prototype.start = function() {
        this.l = !0;
        this.b || (this.b = this.g.setTimeout(this.m, this.h), this.w = la())
    };
    var ff = function(a) {
        a.l = !1;
        a.b && (a.g.clearTimeout(a.b), a.b = null)
    };
    ef.prototype.J = function() {
        ef.R.J.call(this);
        ff(this);
        delete this.g
    };
    var gf = function(a, b, c) {
        if (w(a)) c && (a = x(a, c));
        else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    };
    var hf = function(a) {
        this.b = Bb.apply(null, arguments);
        return this
    };
    hf.prototype.set = function(a, b) {
        this.b[a] = b
    };
    var jf = function(a, b) {
        a.b.eb = xb(a.b, "eb", 0) | b
    };
    hf.prototype.get = function(a) {
        return xb(this.b, a, null)
    };
    hf.prototype.extend = function(a) {
        Ab(this.b, a)
    };
    hf.prototype.g = function() {
        var a = [],
            b;
        for (b in this.b) a.push(b + this.b[b]);
        return a.join("_")
    };
    var kf = F("Firefox"),
        lf = Ib() || F("iPod"),
        mf = F("iPad"),
        nf = F("Android") && !(Fb() || F("Firefox") || Eb() || F("Silk")),
        of = Fb(),
        pf = F("Safari") && !(Fb() || F("Coast") || Eb() || F("Edge") || F("Silk") || F("Android")) && !(Ib() || F("iPad") || F("iPod"));
    var qf = function(a) {
        return Za(a, function(a) {
            a = a.toString(16);
            return 1 < a.length ? a : "0" + a
        }).join("")
    };
    var rf = null,
        sf = null;
    var tf = function() {
        this.g = -1
    };
    var uf = function(a, b) {
        var c = 0;
        tb(J(), "ima", "video", "client", "tagged") && (c = 1);
        var d;
        d = null;
        a && (d = a());
        if (d) {
            var e = d;
            d = xe();
            d.b = {};
            var f = new ue(32, !0);
            f.l = !1;
            d.setItem(f);
            f = J().document;
            f = f.webkitVisibilityState || f.mozVisibilityState || f.visibilityState || f.msVisibilityState || "";
            d.setItem(new ue(64, "hidden" != f.toLowerCase().substring(f.length - 6) ? !0 : !1));
            var g;
            try {
                var k;
                var m = J().top;
                try {
                    k = !!m.location.href || "" === m.location.href
                } catch (C) {
                    k = !1
                }
                if (k) {
                    var p = qe(e);
                    g = p && 0 != p.length ? "1" : "0"
                } else g = "2"
            } catch (C) {
                g =
                    "2"
            }
            d.setItem(new ue(256, "2" == g));
            d.setItem(new ue(128, "1" == g));
            p = k = J().top;
            "2" == g && (p = J());
            m = ze(e, p);
            d.setItem(new ve("er", m));
            var t;
            try {
                t = p.document && !p.document.body ? null : ic(p || window)
            } catch (C) {
                t = null
            }
            t ? (p = jc(ec(p.document).b), d.setItem(new ue(16384, !!p)), t = p ? new uc(p.x, p.y, t.width, t.height) : null) : t = null;
            d.setItem(new ve("vi", t));
            if (t && "1" == g) {
                g = qe(e);
                e = [];
                for (p = 0; p < g.length; p++)(f = ze(g[p], k)) && e.push(f);
                e.push(t);
                t = ye(e)
            }
            Ae(d, m, t);
            d.h && (g = Math.round(la() / 1E3) - d.h, d.setItem(new te("ts", g)));
            d.h =
                Math.round(la() / 1E3)
        } else d = xe(), d.b = {}, d.h = Math.round(la() / 1E3), d.setItem(new ue(32, !1));
        this.l = d;
        this.b = new hf("ve", 4);
        c && jf(this.b, 1);
        tb(J(), "ima", "video", "client", "crossdomainTag") && jf(this.b, 4);
        tb(J(), "ima", "video", "client", "sdkTag") && jf(this.b, 8);
        tb(J(), "ima", "video", "client", "jsTag") && jf(this.b, 2);
        b && xb(b, "fullscreen", !1) && jf(this.b, 16);
        this.h = d = null;
        if (c && (c = tb(J(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = tb(J(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (g = c()) this.h.extendWithDataFromTopIframe(g.buckets,
                    g.tt, g.pd, g.lt), c = this.l, d = g.er, g = g.vi, d && g && (d = we(d).b, g = we(g).b, e = null, c.getItem("er") && (e = c.getItem("er").b, e.top += d.top, e.left += d.left, c.setItem(new ve("er", e))), c.getItem("vi") && (t = c.getItem("vi").b, t.top += d.top, t.left += d.left, k = [], k.push(t), k.push(d), k.push(g), d = ye(k), Ae(c, e, d), c.setItem(new ve("vi", g))));
            d = this.h.getTimeSinceTagLoadSeconds()
        }
        this.b.extend(pe(d))
    };
    uf.prototype.g = function() {
        var a = [],
            b = Number(this.b.get("eb")),
            c = this.b.b;
        "eb" in c && delete c.eb;
        (c = this.b.g()) && a.push(c);
        this.h && (c = this.h.serialize()) && a.push(c);
        (c = this.l.g(b)) && a.push(c);
        this.b.set("eb", b);
        return a.join("_")
    };
    var vf = new ef(200),
        wf = function(a, b) {
            try {
                return (new uf(a, b)).g()
            } catch (c) {
                return "tle;" + Pa(c.name, 12) + ";" + Pa(c.message, 40)
            }
        },
        xf = function(a) {
            Re(vf, "tick", function() {
                var b = wf(a),
                    c = aa("ima.common.updateEngagementDetectionValue");
                c && w(c) && c(b)
            });
            vf.start();
            vf.dispatchEvent("tick")
        };
    var yf = function(a) {
            return function(b) {
                return !q(b[a]) && q(0) ? 0 : b[a]
            }
        },
        zf = function() {
            return function(a) {
                if (!q(a.tth)) return "1"
            }
        },
        Bf = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (ea(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return q(a) ? Af(c, a) : c
                }
            }
        },
        Cf = function(a, b) {
            return function(c) {
                c = c[a];
                if (ea(c)) return Af(c, b)
            }
        },
        Af = function(a, b) {
            return Ya(a, function(a, d) {
                return cb(b, d)
            })
        };
    var Df = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        vb = {
            ec: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            Gd: "metric",
            ac: "pause",
            Id: "resume",
            SKIPPED: "skip",
            Kd: "viewable_impression",
            Hd: "mute",
            Jd: "unmute",
            FULLSCREEN: "fullscreen",
            Bd: "exitfullscreen",
            Dd: "fully_viewable_audible_half_duration_impression",
            Fd: "measurable_impression",
            vd: "abandon",
            zd: "engagedview",
            IMPRESSION: "impression",
            yd: "creativeview",
            LOADED: "loaded"
        },
        Ef = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Ff = ["abandon"],
        Gf = {
            Kg: -1,
            ec: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            Gd: 5,
            ac: 6,
            Id: 7,
            SKIPPED: 8,
            Kd: 9,
            Hd: 10,
            Jd: 11,
            FULLSCREEN: 12,
            Bd: 13,
            Dd: 14,
            Fd: 15,
            vd: 16,
            zd: 17,
            IMPRESSION: 18,
            yd: 19,
            LOADED: 20
        },
        Hf = {
            v: "v",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            tos: "tos",
            mtos: "mtos",
            ps: "ps",
            pt: "pt",
            vht: "vht",
            mut: "mut",
            a: "a",
            ns: "ns",
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            uac: "uac",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            px: "px",
            fm: "sfm",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            mmct: "mmct",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            vmtos: "vmtos",
            vmmtos: "vmmtos",
            dtos: "dtos",
            vmdtos: "vmdtos",
            dtoss: "dtoss",
            dom: "dom",
            fmf: "fmf",
            ven: "ven",
            veh: "veh",
            vds: "vds",
            is: "is",
            ic: "ic",
            c: "c",
            mc: "mc",
            lte: "lte",
            tth: "tth"
        },
        If = {
            gmm: "gmm",
            j: "dom"
        },
        Jf = {
            c: yf("c"),
            at: "at",
            atos: Cf("atos", [0, 2, 4]),
            ta: zf(),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Bf(),
            j: "dom",
            mtos: Cf("mtos", [0, 2, 4]),
            gmm: "gmm",
            ss: yf("ss"),
            vsv: function() {
                return "w1"
            },
            t: "t"
        },
        Kf = {
            vmtime: "vmtime",
            vmtos: "vmtos",
            vmmtos: "vmmtos",
            vmdtos: "vmdtos",
            tcm: "tcm",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            bt: "bt",
            pst: "pst",
            nmt: "nmt",
            mmct: "mmct",
            c: yf("c"),
            at: "at",
            atos: Cf("atos", [0, 2, 4]),
            avt: Cf("atos", [2]),
            dav: "dav",
            ta: zf(),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Bf(),
            j: "dom",
            mtos: Cf("mtos", [0, 2, 4]),
            gmm: "gmm",
            ss: yf("ss"),
            vsv: function() {
                return "w1"
            },
            t: "t"
        },
        Lf = {
            Lg: 1,
            Yf: 2,
            Wf: 4,
            FULLSCREEN: 8,
            $f: 16,
            Zf: 32,
            Xf: 64,
            cg: 128,
            sg: 256
        };
    var Mf = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4
            }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
        },
        Nf = function() {
            var a;
            Fc.mozVisibilityState ? a = "mozvisibilitychange" : Fc.webkitVisibilityState ? a = "webkitvisibilitychange" : Fc.visibilityState && (a = "visibilitychange");
            return a
        };
    var Of = !1,
        Pf = "",
        Qf = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Of = !0, a.description)) {
                Pf = Qf(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Of = !0;
                Pf = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Of = !!a && a.enabledPlugin)) {
            Pf = Qf(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Of = !0;
            Pf = Qf(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Of = !0;
            Pf = "6.0.21";
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Of = !0, Pf = Qf(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var Rf = Of,
        Sf = Pf;
    var Tf = function(a) {
            return (a = a.exec(E)) ? a[1] : ""
        },
        Uf = function() {
            if (kf) return Tf(/Firefox\/([0-9.]+)/);
            if (H || Kb || Jb) return Wb;
            if (of) return Tf(/Chrome\/([0-9.]+)/);
            if (pf && !(Ib() || F("iPad") || F("iPod"))) return Tf(/Version\/([0-9.]+)/);
            if (lf || mf) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(E);
                if (a) return a[1] + "." + a[2]
            } else if (nf) return (a = Tf(/Android\s+([0-9.]+)/)) ? a : Tf(/Version\/([0-9.]+)/);
            return ""
        }();
    if (Fc && Fc.URL) {
        var ra = Fc.URL,
            Vf = !(ra && 0 < sa().length);
        Ca.g = Vf
    }
    var Wf = function(a, b, c, d) {
        c = Da(d || "osd_or_lidar::" + b, c, void 0, void 0);
        ta(a, b, c, void 0);
        return c
    };
    var Xf = function(a, b) {
            this.b = a;
            this.g = b
        },
        Yf = function(a, b) {
            this.url = a;
            this.ib = b;
            this.cd = !1;
            this.depth = v(void 0) ? void 0 : null
        },
        $f = function(a) {
            a = a ? a : Zf();
            for (var b = a.length - 1, c = null, d = b; 0 <= d; --d) {
                var e = a[d];
                if (e.url && !e.cd) {
                    c = e;
                    break
                }
            }
            d = null;
            e = a.length && a[b].url;
            c && 0 == c.depth || !e || (d = a[b]);
            return new Xf(c, d)
        },
        Zf = function() {
            var a = l,
                b = [],
                c = null,
                d = null;
            do {
                var e = a;
                oa(e) ? (c = e.location.href, d = e.document.referrer || null) : (c = d, d = null);
                b.push(new Yf(c, e));
                try {
                    a = e.parent
                } catch (f) {
                    a = null
                }
            } while (a && e != a);
            a = 0;
            for (e =
                b.length - 1; a <= e; ++a) b[a].depth = e - a;
            e = l;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) c = b[a], c.url || (c.url = e.location.ancestorOrigins[a - 1], c.cd = !0);
            return b
        };
    var ag = {},
        bg = null;
    ag.le = 0;
    ag.nt = 2;
    ag.Fr = 3;
    var cg = function(a, b) {
            var c = a || K;
            c.top != c && (c = c.top);
            try {
                return c.document && !c.document.body ? new A(-1, -1) : b ? (new A(c.innerWidth, c.innerHeight)).round() : ic(c || window).round()
            } catch (d) {
                return new A(-12245933, -12245933)
            }
        },
        dg = 0,
        ig = function() {
            var a = Q.getInstance().o,
                b = 0 <= eg ? R() - eg : -1,
                c = fg ? R() - gg : -1,
                d = 0 <= hg ? R() - hg : -1,
                e;
            if (79463068 == a) return 500;
            if (947190538 == a) a = [4E3], e = [250, 1E3];
            else if (947190541 == a) a = [4E3], e = [100, 1E3];
            else {
                if (947190542 == a) return 100;
                if (79463069 == a) return 200;
                a = [2E3, 4E3];
                e = [250, 500, 1E3]
            }
            var f =
                b; - 1 != c && c < b && (f = c);
            for (var g, b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    g = e[b];
                    break
                }
            void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        },
        jg = (new Date).getTime(),
        eg = -1,
        fg = !1,
        gg = -1,
        hg = -1,
        R = function() {
            return (new Date).getTime() - jg
        },
        kg = function(a) {
            var b = [];
            nb(a, function(a, d) {
                d in Object.prototype || "undefined" == typeof a || (ea(a) && (a = a.join(",")), b.push([d, "=", a].join("")))
            });
            return b.join("&")
        },
        lg = function() {
            var a = lc("div");
            a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
            return a
        },
        mg = function(a) {
            for (var b; a && a != a.parentElement;) {
                if (b = a.style) {
                    b = a;
                    var c = b.style[Va("display")];
                    b = "none" == ("undefined" !== typeof c ? c : b.style[wc(b, "display")] || "")
                }
                if (b) return !0;
                b = a;
                a = a.parentElement
            }
            if (b && (a = dc(b))) {
                var d, e;
                try {
                    if (d = J(a)) e = d.frameElement
                } catch (f) {
                    return !1
                }
                if (d && e && d != d.parent) return mg(e)
            }
            return !1
        };
    ag.Po = 5;
    ag.me = 1;
    ag.om = 4;
    var ng = function(a) {
            ag.e = -1;
            ag.i = 6;
            ag.n = 7;
            ag.t = 8;
            if (!bg) {
                var b = [];
                D(sb(ag), function(a) {
                    b[ag[a] + 1] = a
                });
                var c = b.join("");
                bg = (c = a && a[c]) && x(c, a)
            }
            return bg
        },
        og = function() {
            var a;
            if (a = Nb && pf) a = 0 <= Ta(Uf, "6.0.1");
            return a && 0 <= Ta(Sf, "10.1") ? !0 : !1
        };
    var pg = function(a, b) {
            this.l = null;
            this.m = a;
            this.A = b || 1;
            this.b = "u"
        },
        qg = function(a, b) {
            var c = b.right - b.left,
                d = b.bottom - b.top,
                e = Math.floor(c / 2),
                f = Math.floor(d / 2);
            switch (a.A) {
                case 4:
                    return a.m ? (e = Math.floor(.3 * c), f = Math.floor(.3 * d), [new G(e, f), new G(c - e, f), new G(e, d - f), new G(c - e, d - f)]) : [new G(e, 0), new G(0, f), new G(e, d - 1), new G(c - 1, f)];
                case 3:
                    return [new G(c - 1, 0), new G(e, f), new G(0, d - 1)];
                default:
                    return [new G(e, f)]
            }
        },
        rg = function(a, b) {
            var c;
            try {
                c = b || a.l.getBoundingClientRect()
            } catch (e) {
                c = new tc(0, 0, 0, 0)
            }
            var d =
                qg(a, c);
            D(d, function(a) {
                a.x += c.left;
                a.y += c.top
            });
            return d
        },
        sg = function(a, b, c, d) {
            pg.call(this, a, d);
            this.C = b || 3E3;
            this.H = c || 3E3;
            this.g = [];
            this.w = !1;
            this.h = -1;
            this.o = this.B = 0
        };
    z(sg, pg);
    var tg = function(a, b, c) {
            this.b = a;
            this.h = b;
            this.g = c
        },
        wg = function(a, b, c) {
            if (!(b && b.getBoundingClientRect && 0 <= Ta(Sf, "11") && c) || H && 9 > Wb || 0 < a.g.length) return !1;
            try {
                var d = b.getBoundingClientRect()
            } catch (p) {
                return !1
            }
            var e = "DIV" == b.tagName || "INS" == b.tagName,
                f = dc(b),
                g = [];
            if (e) {
                var k = lg(),
                    d = qg(a, d);
                D(d, function(a, b) {
                    var d = new ug("e", f, c, String(b));
                    this.g.push(d);
                    g.push(x(d.A, d, k, a))
                }, a);
                b.insertBefore(k, b.childNodes[0] || null)
            } else d = rg(a, d), D(d, function(a, d) {
                var e = new ug("e", f, c, String(d));
                this.g.push(e);
                g.push(x(e.w,
                    e, b, a))
            }, a);
            var m = !0;
            D(g, function(a) {
                m = m && a()
            });
            m ? (a.b = "l", a.l = b, a.w = !e) : (D(a.g, function(a) {
                vg(a)
            }), a.g = []);
            return m
        },
        yg = function(a) {
            if (a.l && a.w) {
                var b = rg(a);
                D(b, function(a, b) {
                    this.g[b] && xg(this.g[b], a)
                }, a)
            }
        },
        zg = function(a) {
            D(a.g, function(a) {
                vg(a)
            });
            a.g = [];
            a.b = "d"
        },
        Fg = function(a) {
            var b = la(),
                c = a.B ? b - a.B : 0,
                d = -1,
                e = Za(a.g, function(a) {
                    return Ag(a, b)
                });
            4 == a.g.length ? d = a.m ? Bg(e) : Cg(e) : 3 == a.g.length ? d = Dg(e) : 1 == a.g.length && (d = [-1, 0, 1, 2, 3, 5][Ag(a.g[0], b) + 1]);
            a.o = d == a.h ? a.o + c : 0;
            c = new tg(d, a.h, c);
            a.h = d;
            a.B = b;
            Eg(a, d);
            yg(a);
            return c
        },
        Hg = function(a) {
            var b = kb(qb(Gg));
            D(a, function(a) {
                0 <= a && ++b[a]
            });
            return b
        },
        Cg = function(a) {
            a = Hg(a);
            return 4 == a[4] ? 6 : 3 <= a[4] ? 5 : 0 < a[4] ? 4 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        Dg = function(a) {
            var b = Hg(a);
            return 4 == a[0] && 4 == a[2] ? 6 : 4 == a[1] ? 5 : 0 < b[4] ? 4 : 3 == b[2] ? 2 : 3 == b[1] ? 1 : 3 == b[0] ? 0 : 3
        },
        Bg = function(a) {
            a = Hg(a);
            return 3 <= a[4] ? 5 : 2 == a[4] ? 8 : 0 < a[4] ? 7 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        Eg = function(a, b) {
            if (0 == b && Ig(a)) a.b = "n";
            else switch (b) {
                case -1:
                    a.b = "d";
                    break;
                case 0:
                    a.b = "l";
                    break;
                case 1:
                    a.b = "f";
                    break;
                case 2:
                    a.b = "c";
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    a.b = "r"
            }
        },
        Ig = function(a) {
            return "n" == a.b ? !0 : "l" == a.b && a.o >= a.H
        },
        ug = function(a, b, c, d) {
            this.b = null;
            this.l = a;
            this.B = "e" == a ? String(c) + "~" + String(d) : "";
            this.g = [];
            this.h = -1;
            this.m = 0;
            this.o = kb(qb(Jg));
            this.H = kb(qb(Gg));
            "e" == this.l && (Kg[this.B] = x(this.C, this));
            H ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' +
                Lg(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>', a = a.firstChild, a.id = String(Math.random())) : a = Mg(this, b);
            a.width = 1;
            a.height = 1;
            a.style.zIndex = -999999;
            this.b = a
        },
        Gg = {
            Jg: -1,
            LOADING: 0,
            Cd: 1,
            xd: 2,
            Ed: 3,
            VISIBLE: 4
        },
        Jg = {
            LOADING: 0,
            Cd: 1,
            xd: 2,
            Fg: 3,
            pg: 4,
            Hg: 5,
            Ig: 6,
            Gg: 7,
            rg: 8,
            Eg: 9
        },
        Kg = {},
        Mg = function(a, b) {
            var c = function(a, c, d) {
                    var e = b.createElement("param");
                    e.name = c;
                    e.value = d;
                    a.appendChild(e)
                },
                d = Lg(a),
                e = b.createElement("object");
            e.type = "application/x-shockwave-flash";
            e.data = d;
            c(e, "movie", d);
            c(e, "allowscriptaccess", "always");
            c(e, "wmode", "opaque");
            e.style.visibility = "s" == a.l ? "" : "hidden";
            e.style.opacity = 0;
            return e
        },
        Lg = function(a, b) {
            var c = xd("//pagead2.googlesyndication.com/osd/hbe.swf", "id", a.B);
            "s" == a.l && (c = "//pagead2.googlesyndication.com/osd/hbts.swf");
            b && (c = xd(c, "delay", "1"));
            return c
        };
    ug.prototype.A = function(a, b) {
        if (!this.b) return !1;
        this.b.style.position = "absolute";
        xg(this, b);
        var c = !0;
        try {
            a.appendChild(this.b)
        } catch (d) {
            c = !1
        }
        return c
    };
    ug.prototype.w = function(a, b) {
        if (!this.b || !a.parentNode) return !1;
        this.b.style.position = "fixed";
        xg(this, b);
        var c = !0;
        try {
            a.parentNode && a.parentNode.insertBefore(this.b, a.nextSibling)
        } catch (d) {
            c = !1
        }
        return c
    };
    var xg = function(a, b) {
            var c;
            if (c = a.b) c = a.b, c = new G(c.offsetLeft, c.offsetTop), c = !(b == c || b && c && b.x == c.x && b.y == c.y);
            if (c) {
                c = a.b;
                var d, e;
                b instanceof G ? (d = b.x, e = b.y) : (d = b, e = void 0);
                c.style.left = Cc(d);
                c.style.top = Cc(e)
            }
        },
        vg = function(a) {
            if (a.b) try {
                nc(a.b)
            } catch (b) {}
            a.b = null
        };
    ug.prototype.C = function(a) {
        this.h = a ? 3 : 4
    };
    var Ag = function(a, b) {
            if ("e" == a.l) {
                var c = null;
                try {
                    c = a.b.it()
                } catch (f) {}
                null === c ? (c = 0, 0 < a.h && (c = 2)) : c = c ? 3 : 4;
                ++a.H[c + 1];
                a.h = c
            } else {
                var d = Number(b),
                    e = Ng(a);
                Og(a, e, d);
                c = a.g[a.g.length - 1];
                if (null === e) {
                    if (e = d = 0, 0 < a.h || v(c.gb)) e = d = 2
                } else null === c.gb || c.Ob >= d ? (d = 10 <= e ? 4 : 0, e = 0) : e > c.gb ? (c = (e - c.gb) / (d - c.Ob) * 1E3, d = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.m && 6 == c && (c = 7), e = c) : e = d = 1;
                6 == a.m && (--a.o[6], 4 == e || 8 == e ? ++a.o[5] : ++a.o[7]);
                ++a.o[e];
                a.h = d;
                a.m = e
            }
            return a.h
        },
        Ng = function(a) {
            var b = null;
            try {
                b = a.b.fc()
            } catch (c) {}
            return b
        },
        Og = function(a, b, c) {
            var d = c - 1E3,
                e = a.g.length;
            D(a.g, function(a, b) {
                a.Ob <= d && (e = Math.min(e, b + 1))
            });
            var f = a.g.length - e;
            0 < f && a.g.splice(e, f);
            a.g.unshift({
                gb: b,
                Ob: c
            })
        };
    r("gteh", Rc("osd_or_lidar::gteh_ex", function(a, b) {
        var c = Kg[a];
        w(c) && c(b)
    }), void 0);
    var Pg = function() {
            this.m = !0;
            this.b = new ug("s", Fc);
            this.o = !1;
            this.g = this.h = this.B = this.H = this.D = this.F = this.l = this.C = null;
            this.K = 0;
            this.A = this.w = this.I = null
        },
        Qg = {
            Ed: 0,
            VISIBLE: 1
        },
        Rg = new G(-99999, 0),
        Sg = function(a, b) {
            b !== a.g && (a.g = b, a.F(b), a.K++)
        },
        Tg = function(a) {
            var b = Ng(a.b);
            null === a.I && null !== b && null !== a.w && (a.I = la() - a.w);
            return b
        },
        Ug = function(a) {
            var b = a.C.getBoundingClientRect(),
                c;
            c = null != a.H ? a.H.clone() : new G(Math.floor((b.right - b.left) / 2), Math.floor((b.bottom - b.top) / 2));
            a.o && (c.x += b.left, c.y += b.top);
            return c
        },
        Vg = function(a) {
            a.o && (a.D = Ug(a));
            xg(a.b, a.D);
            a.B = K.setTimeout(Sc("osd_or_lidar::sfm_tpto", x(a.M, a)), 125)
        };
    Pg.prototype.M = function() {
        var a = Tg(this);
        if (null === a) Vg(this);
        else if (null === this.h) this.h = a, Vg(this);
        else {
            var b = a - this.h;
            this.h = a;
            0 == (4 <= b ? 1 : 0) ? (Vg(this), Sg(this, 0)) : (xg(this.b, Rg), this.B = K.setTimeout(Sc("osd_or_lidar::sfm_cpto", x(this.L, this)), 125))
        }
    };
    Pg.prototype.L = function() {
        var a = Tg(this),
            b = a - this.h;
        this.h = a;
        a = 4 <= b ? 1 : 0;
        Vg(this);
        Sg(this, 0 == a ? 1 : 0)
    };
    var Wg = function(a) {
            if (a.m) {
                var b = x(function() {
                        1 === Mf(Fc) ? (this.h = null, Vg(this)) : (K.clearTimeout(this.B), Sg(this, 0))
                    }, a),
                    c = Nf();
                if (c) {
                    var d = Wf(Fc, c, b, "osd_or_lidar::sfm_pv");
                    a.A = function() {
                        ua(Fc, c, d);
                        this.A = null
                    }
                }
                a.m = !1;
                a.g = null;
                b()
            }
        },
        Xg = function(a) {
            a.m || (K.clearTimeout(a.B), null === a.A || a.A(), a.m = !0)
        },
        Yg = function(a, b) {
            pg.call(this, a, b);
            this.h = [];
            this.B = this.w = null;
            this.o = !0
        };
    z(Yg, pg);
    var $g = function(a, b, c) {
            if (null !== a.B) return !1;
            a.l = b;
            a.w = c;
            c = b.getBoundingClientRect();
            c = "DIV" == b.tagName || "INS" == b.tagName ? qg(a, c) : rg(a, c);
            for (var d = 0; d < c.length; ++d) {
                var e = c[d],
                    f = new Pg,
                    g;
                g = f;
                var k = b,
                    m = x(a.C, a),
                    p = e;
                if (null === g.w) {
                    var t = "DIV" == k.tagName || "INS" == k.tagName;
                    g.o = !t;
                    g.C = k;
                    e = Ug(g);
                    if (null != p) {
                        e = p;
                        p = new G(0, 0);
                        if (g.o) {
                            var C = g.C.getBoundingClientRect();
                            p.x += C.left;
                            p.y += C.top
                        }
                        g.H = new G(e.x - p.x, e.y - p.y)
                    }
                    g.F = m;
                    m = !1;
                    t ? (m = lg(), g.l = m, k.insertBefore(m, k.childNodes[0] || null), m = g.b.A(m, e)) : m = g.b.w(k,
                        e);
                    m ? (g.w = la(), g.D = e, g = !0) : (vg(g.b), g.l && nc(g.l), g = !1)
                } else g = !1;
                if (!g) return Zg(a), a.b = "c", !1;
                a.h.push(f)
            }
            a.B = la();
            a.b = "l";
            return !0
        },
        bh = function(a) {
            var b = kb(qb(Qg));
            D(a.h, function(a) {
                null != a.g && 0 <= a.g && ++b[a.g]
            });
            switch (a.A) {
                case 4:
                    return ah(a, b);
                case 3:
                    return 1 == a.h[0].g && 1 == a.h[2].g ? 3 : 1 == a.h[1].g ? 2 : 0 < b[1] ? 1 : 0;
                default:
                    return 1 == b[1] ? 2 : 0
            }
        },
        ah = function(a, b) {
            var c = b[1];
            if (a.m) {
                if (3 <= c) return 2;
                if (2 == c) return 5;
                if (0 < c) return 4
            } else {
                if (4 == c) return 3;
                if (3 == c) return 2;
                if (0 < c) return 1
            }
            return 0
        };
    Yg.prototype.C = function() {
        var a = bh(this);
        this.g != a && (this.g = a, this.w(a))
    };
    var ch = function(a) {
            a.o && null !== a.B && "d" != a.b && (D(a.h, function(a) {
                Wg(a)
            }), a.b = "r", a.o = !1)
        },
        dh = function(a) {
            a.o || (D(a.h, function(a) {
                Xg(a)
            }), a.o = !0)
        },
        Zg = function(a) {
            dh(a);
            D(a.h, function(a) {
                Xg(a);
                a.b && (vg(a.b), a.b = null);
                a.l && (nc(a.l), a.l = null)
            });
            a.h = [];
            a.b = "d"
        };
    var Q = function() {
        this.o = void 0;
        this.g = !oa(K.top);
        var a = Zf();
        this.B = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? td(a[a.length - 1].url.match(sd)[3] || null) || "" : "";
        this.h = this.m = this.b = null;
        this.w = 0;
        this.l = !1
    };
    ca(Q);
    var gh = function(a, b, c, d) {
            this.position = eh.clone();
            this.h = this.F = 0;
            this.jb = -1;
            this.Xb = -2;
            this.vf = (new Date).getTime();
            this.pc = this.oc = -1;
            this.qb = [0, 0, 0, 0, 0];
            this.Xa = [0, 0, 0, 0, 0];
            this.O = [0, 0, 0, 0, 0];
            this.Zb = [0, 0, 0, 0, 0];
            this.w = c;
            this.aa = this.U = -1;
            this.vb = this.wb = null;
            this.la = -1;
            this.tf = d;
            this.lb = ba;
            this.qc = function() {};
            this.T = this.element = b;
            this.g = null;
            this.M = 1;
            this.Na = !1;
            this.o = null;
            this.rb = this.fa = this.uf = !1;
            this.Ub = 1;
            this.nc = !0;
            b = Q.getInstance();
            this.sf = b.w++;
            fh(this, a, b.g)
        },
        eh = new tc(0, 0, 0, 0),
        hh = function(a,
            b, c, d, e) {
            if (!(0 > a.w)) {
                var f = K.innerWidth,
                    g = K.innerHeight,
                    k = new tc(Math.round(K.mozInnerScreenY), Math.round(K.mozInnerScreenX + f), Math.round(K.mozInnerScreenY + g), Math.round(K.mozInnerScreenX));
                c = new tc(K.screenY + d, K.screenX + c.width, K.screenY + c.height, K.screenX);
                e || (d = new tc(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.position.top ? a.position = d : (a.position.right = a.position.left + f, a.position.bottom = a.position.top + g), a.F = f * g);
                a.D(k, c, b, e, !0, !0)
            }
        },
        jh = function(a, b, c) {
            var d = ng(K && K.document);
            if (d) {
                c || fh(a, K, !0);
                if (a.rb) var e = ih(a, d),
                    d = !0;
                else var e = Math.floor((a.position.left + a.position.right) / 2),
                    f = Math.floor((a.position.top + a.position.bottom) / 2),
                    g = jc(document),
                    e = d(e - g.x, f - g.y) ? .5 : 0,
                    d = !1;
                a.D(a.position, e, b, c, !0, d)
            }
        },
        kh = function(a, b, c) {
            var d;
            if (c(b)) return b;
            for (;;) {
                d = Math.floor((a + b) / 2);
                if (d == a || d == b) return a;
                c(d) ? a = d : b = d
            }
        },
        ih = function(a, b) {
            var c = jc(document),
                d = a.Ub,
                e = Math.floor(a.position.left - c.x) + 1,
                f = Math.floor(a.position.top - c.y) + 1,
                g = Math.floor(a.position.right - c.x) - d,
                k = Math.floor(a.position.bottom -
                    c.y) - d,
                c = (k - f) * (g - e);
            if (f > k || e > g) return 0;
            var d = !!b(e, f),
                m = !!b(g, k);
            if (d && m) return 1;
            var p = !!b(g, f),
                t = !!b(e, k);
            if (d) k = kh(f, k, function(a) {
                return !!b(e, a)
            }), g = kh(e, g, function(a) {
                return !!b(a, f)
            });
            else if (p) k = kh(f, k, function(a) {
                return !!b(g, a)
            }), e = kh(g, e, function(a) {
                return !!b(a, f)
            });
            else if (t) f = kh(k, f, function(a) {
                return !!b(e, a)
            }), g = kh(e, g, function(a) {
                return !!b(a, k)
            });
            else if (m) f = kh(k, f, function(a) {
                return !!b(g, a)
            }), e = kh(g, e, function(a) {
                return !!b(a, k)
            });
            else {
                var C = Math.floor((e + g) / 2),
                    I = Math.floor((f + k) / 2);
                if (!b(C, I)) return 0;
                f = kh(I, f, function(a) {
                    return !!b(C, a)
                });
                k = kh(I, k, function(a) {
                    return !!b(C, a)
                });
                e = kh(C, e, function(a) {
                    return !!b(a, I)
                });
                g = kh(C, g, function(a) {
                    return !!b(a, I)
                })
            }
            return (k - f) * (g - e) / c
        },
        lh = function(a, b, c, d, e) {
            0 > a.w || (d || fh(a, K, e), a.D(a.position, c, b, d, !1, !0))
        };
    gh.prototype.hc = ba;
    gh.prototype.dc = ba;
    gh.prototype.uc = ba;
    var mh = function(a, b, c) {
        0 > a.w || a.D(a.position, a.h, b, c, !0, !0)
    };
    gh.prototype.D = function(a, b, c, d, e, f, g) {
        g = this.bc(c, g || {});
        var k = null;
        v(b) ? this.h = this.Ca(b) : (k = b, this.h = this.Ca(a, k));
        f && (this.jb = Math.max(this.jb, this.h));
        f = Mf(Fc);
        this.aa = 0 == f ? -1 : 1 == f ? 0 : 1;
        f = nh(this.h);
        v(b) || (this.wb = k.right - k.left, this.vb = k.bottom - k.top);
        this.Rb(f, g, this.U, e, d, k);
        this.U = d ? -1 : f;
        this.w = c; - 1 != f && 0 > this.oc && (this.oc = c); - 1 == this.pc && this.na() && (this.pc = c); - 2 == this.Xb && (this.Xb = a != eh && 0 != this.F && this.vb && this.wb ? this.Ca(a, new tc(0, this.wb, this.vb, 0)) : -1);
        this.lb(this);
        return this.h
    };
    gh.prototype.bc = function(a) {
        a = a - this.w || 1;
        return 1E4 < a ? 1 : a
    };
    gh.prototype.Ca = function(a, b) {
        if (!v(a) && q(b)) {
            var c;
            c = null === a || null === b ? eh.clone() : new tc(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left));
            return 0 >= this.F || 0 >= c.right - c.left || 0 >= c.bottom - c.top ? 0 : (c.bottom - c.top) * (c.right - c.left) / this.F
        }
        return v(a) ? a : 0
    };
    var nh = function(a) {
        var b = -1;
        1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .3 <= a ? b = 3 : 0 < a && (b = 4);
        return b
    };
    gh.prototype.Sb = function(a, b) {
        this.qb[a] += b
    };
    gh.prototype.Qb = function(a, b) {
        this.O[a] += b;
        this.O[a] > this.Xa[a] && (this.Xa[a] = this.O[a])
    };
    gh.prototype.Lb = function(a) {
        this.O[a] = 0
    };
    gh.prototype.Rb = function(a, b, c, d, e, f) {
        var g = -1 == c || -1 == a ? -1 : Math.max(c, a);
        c = d && -1 != c && 2 >= c ? g : c; - 1 != c && this.Sb(c, b);
        f = f || null;
        d = -1 != c && 2 >= c;
        f ? (d && -1 != this.la && (this.Zb[this.la] += b), f = 100 * this.F / ((f.bottom - f.top) * (f.right - f.left)), this.la = 20 <= f ? 0 : 10 <= f ? 1 : 5 <= f ? 2 : 2.5 <= f ? 3 : 4) : this.la = -1;
        for (f = c; 0 <= f && 4 >= f; f++) this.Qb(f, b);
        for (f = 0; 4 >= f; ++f)(f < a || e || -1 == a) && this.Lb(f)
    };
    var oh = function(a, b, c) {
            a.M = c;
            if (!a.T || og() || og()) return a.Na = !0, !1;
            c = new sg(!1, void 0, void 0, a.M);
            var d = wg(c, a.T, String(a.sf));
            d ? (a.qc = b, a.g = c) : a.Na = !0;
            return d
        },
        qh = function(a, b, c) {
            if (!a.element || !og()) return !1;
            a.M = c || 1;
            c = new Yg(!1, a.M);
            var d = $g(c, a.element, x(function(a) {
                ph(this, R(), !1, b, [0, .01, .5, 1, .01, .3][a])
            }, a));
            d ? (a.o = c, ch(c)) : a.uf = !0;
            return d
        },
        ph = function(a, b, c, d, e) {
            0 > a.w || !rh(a) || (c ? a.o && dh(a.o) : (fh(a, d, !0), a.o && ch(a.o)), d = e || 0, v(e) || -1 == a.U || (d = [1, .75, .5, .3, .01][a.U] || 0), a.D(a.position, d,
                b, c, !1, !1), !a.na() || a.Gb() || a.o && Zg(a.o))
        },
        rh = function(a) {
            return null !== a.o && "d" != a.o.b
        },
        fh = function(a, b, c) {
            b = c ? b : b.top;
            try {
                var d = eh.clone(),
                    e = new G(0, 0);
                if (a.T) {
                    if (c || 1 != a.tf || !mg(a.T)) d = a.T.getBoundingClientRect();
                    e = Bc(a.T, b)
                }
                var f = e.x,
                    g = e.y;
                a.position = new tc(Math.round(g), Math.round(f + (d.right - d.left)), Math.round(g + (d.bottom - d.top)), Math.round(f))
            } catch (k) {
                a.position = eh.clone()
            }
            a.F = (a.position.bottom - a.position.top) * (a.position.right - a.position.left)
        };
    gh.prototype.Gb = function() {
        return !1
    };
    gh.prototype.na = function() {
        return !1
    };
    var sh = function(a, b) {
            var c = Math.pow(10, b);
            return Math.floor(a * c) / c
        },
        th = function(a) {
            a.g && zg(a.g);
            a.o && Zg(a.o)
        };
    var uh = function() {
            this.b = {};
            for (var a in Lf) this.b[Lf[a]] = 0
        },
        vh = function(a, b) {
            0 == a.b[b] && (a.b[b] = 1)
        },
        wh = function(a) {
            var b = 0,
                c;
            for (c in a.b) {
                var d = parseInt(c, 10);
                1 == a.b[d] && (b += d, a.b[d] = 2)
            }
            return b
        };
    var xh = function(a, b, c, d) {
        this.Ma = 0;
        this.ob = [0, 0, 0, 0, 0];
        this.nb = [0, 0, 0, 0, 0];
        this.ka = [0, 0, 0, 0, 0];
        this.Tb = this.V = 0;
        this.A = {};
        this.B = new uh;
        this.Ic = {};
        this.ya = this.l = "";
        this.$b = !1;
        this.bb = [];
        this.$ = void 0;
        this.cc = this.zc = this.Bc = this.ub = !1;
        this.C = void 0;
        this.sb = 0;
        this.oa = -1;
        this.kb = this.ca = 0;
        this.I = -1;
        this.ba = this.H = this.K = this.Wb = void 0;
        this.Wa = this.Y = 0;
        this.Ya = .99 > Math.random() ? 1 : 0;
        this.ab = 0;
        this.$a = -1;
        this.tb = !1;
        this.Pa = this.Vb = 0;
        this.da = !1;
        this.La = this.Ka = this.Pb = 0;
        this.Mb = !1;
        this.Ja = [0, 0, 0, 0, 0];
        this.L = this.Yb = 0;
        this.gc = -1;
        this.ha = this.pb = this.Za = this.pa = this.b = 0;
        this.ma = -1;
        this.kc = this.jc = 0;
        this.vc = this.fd = this.m = !1;
        this.lc = 0;
        this.Kb = ba;
        gh.call(this, a, b, c, d)
    };
    z(xh, gh);
    xh.prototype.hc = function(a) {
        500 < a - this.gc && (a = aa("ima.admob.getViewability"), w(a) && a(this.l))
    };
    xh.prototype.dc = function(a) {
        this.gc = R();
        this.uc(a)
    };
    xh.prototype.uc = function(a) {
        var b = a.opt_nativeViewBounds || {},
            c = a.opt_nativeViewVisibleBounds || {},
            d = a.opt_nativeTime || -1,
            e = a.opt_nativeVolume,
            b = new tc(b.top || 0, b.left + b.width || 0, b.top + b.height || 0, b.left || 0);
        a = a.opt_nativeViewHidden ? eh.clone() : new tc(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0);
        c = {};
        c.volume = e;
        this.F = (b.bottom - b.top) * (b.right - b.left);
        this.position = b;
        this.D(b, a, d, !1, !0, !0, c)
    };
    xh.prototype.D = function(a, b, c, d, e, f, g) {
        g = g || this.Kb(this) || {};
        this.I = g.duration || this.I;
        this.Wb = g.isVpaid || this.Wb;
        this.ba = f;
        this.K = g.volume;
        yh(this.K) || (this.Yb++, yh(this.H) && (this.K = this.H));
        xh.R.D.call(this, a, b, c, d, e, f, g); - 1 == this.$a && this.tb && (this.$a = this.ab);
        (a = this.na()) && vh(this.B, 1);
        yh(this.H) && vh(this.B, 2);
        this.da && vh(this.B, 4);
        this.m && vh(this.B, 8); - 1 != this.aa && (vh(this.B, 16), 1 == this.aa && vh(this.B, 32));
        this.da && a && vh(this.B, 64);
        this.ba && vh(this.B, 128);
        this.ba && 0 < this.h && vh(this.B, 256);
        return this.h
    };
    var yh = function(a) {
        return q(a) && 0 <= a && 1 >= a
    };
    xh.prototype.bc = function(a, b) {
        var c = q(b.currentTime) ? b.currentTime : this.Wa,
            d = zh(this, a),
            e = c - this.Wa,
            f = b.isYouTube,
            g = q(b.isPlaying) ? b.isPlaying : !0;
        2 != this.Ya ? (0 <= e ? (this.ha += Math.max(d - e, 0), this.Y = Math.min(e, d)) : (this.pb += Math.abs(e), this.Y = 0), -1 == this.ma && 0 < e && (this.ma = 0 <= hg ? R() - hg : -1)) : (g || this.$ || (this.ha += d), -1 == this.ma && g && (this.ma = 0 <= hg ? R() - hg : -1));
        this.Wa = c;
        if (f) {
            if (1 == this.Ya) return this.Y;
            if (2 == this.Ya) return g ? d : 0
        }
        return zh(this, a)
    };
    var zh = function(a, b) {
            var c = b - a.w || 1,
                d = 1E4;
            q(a.I) && -1 != a.I && (d = Math.max(d, a.I / 3));
            return c > d ? 1 : c
        },
        Ah = function(a) {
            var b = 0;
            .5 <= a.h && (b += 1);
            yh(a.H) && (b += 2);
            a.da && (b += 4);
            a.m && (b += 8); - 1 != a.aa && (b += 16, 1 == a.aa && (b += 32));
            a.ba && (b += 128);
            a.ba && 0 < a.h && (b += 256);
            return b
        };
    h = xh.prototype;
    h.Ca = function(a, b) {
        return this.m ? 1 : xh.R.Ca.call(this, a, b)
    };
    h.Sb = function(a, b) {
        xh.R.Sb.call(this, a, b);
        this.ob[a] += this.Y;
        2 >= a && (this.Ma += b, this.V += this.Y)
    };
    h.Qb = function(a, b) {
        xh.R.Qb.call(this, a, b);
        this.ka[a] += this.Y;
        this.ka[a] > this.nb[a] && (this.nb[a] = this.ka[a])
    };
    h.Lb = function(a) {
        xh.R.Lb.call(this, a);
        this.ka[a] = 0
    };
    h.Rb = function(a, b, c, d, e, f) {
        if (!this.$) {
            xh.R.Rb.call(this, a, b, c, d, e, f);
            a = -1 == c || -1 == a ? -1 : Math.max(c, a);
            this.ab += b;
            this.fd && (this.Vb += b, this.Pa += b);
            this.fd = this.m;
            d = d && -1 != c && 2 >= c ? a : c;
            c = -1 != d && 2 >= d;
            if (this.da = yh(this.K) && .1 <= this.K && yh(this.H) && .1 <= this.H) {
                this.Pb += b;
                for (this.Ka += b; 0 <= d && 4 >= d; d++) this.Ja[d] += b;
                c ? this.La += b : this.ca += b
            } else this.Mb = !1;
            this.ca > this.kb && (this.kb = this.ca);
            if (c || !q(this.K) || .1 > this.K) this.ca = 0;
            b = this.K;
            this.H = q(b) ? Number(b) ? sh(b, 3) : 0 : b
        }
    };
    h.Gb = function() {
        return !0
    };
    h.na = function() {
        return 2E3 <= Math.max(this.O[2], this.Xa[2])
    };
    var Bh = function(a, b) {
            var c = a.sb;
            fg || a.$ || -1 == a.oa || (c += b - a.oa);
            return c
        },
        Ch = function(a) {
            a.rb = !0;
            a.Ub = 2
        },
        Dh = function(a, b) {
            ib(a.bb, kb(b - a.bb.length + 1));
            a.bb[b] = sh(a.h, 2)
        },
        S = function(a, b) {
            var c = a.Ic[b];
            if (null != c) return c;
            if (a.fa) return {
                "if": 0
            };
            c = a.position.clone();
            c.round();
            var d = Za(a.bb, function(a) {
                    return 100 * a | 0
                }),
                e = Q.getInstance(),
                f = {};
            f["if"] = e.g ? 1 : void 0;
            f.sdk = a.C ? a.C : void 0;
            f.t = a.vf;
            f.p = [c.top, c.left, c.bottom, c.right];
            f.tos = a.qb;
            f.mtos = a.Xa;
            f.ps = void 0;
            f.pt = d;
            f.vht = Bh(a, R());
            f.mut = a.kb;
            f.a = a.H;
            f.ns = a.lc;
            f.ft = a.Vb;
            f.at = a.Pb;
            f.as = a.Mb ? 1 : 0;
            f.atos = a.Ja;
            f.uac = a.Yb;
            f.vpt = a.ab;
            f.is = Ah(a);
            f.ic = wh(a.B);
            if ("h" == a.C || "as" == a.C) f.gmm = "2";
            "fully_viewable_audible_half_duration_impression" == b && (f.std = "csm");
            a.rb && (f.efpf = a.Ub);
            a.g && (f.swf = a.g.b, f.px = a.M);
            a.o && (f.sfm = a.o.b, f.px = a.M);
            0 < a.kc && (f.nnut = a.kc);
            f.tcm = a.Ya;
            f.nmt = a.pb;
            f.bt = a.ha;
            f.pst = a.ma;
            f.mmct = a.jc;
            f.vpaid = a.Wb;
            f.dur = a.I;
            f.vmtime = a.Wa;
            f.vmtos = a.ob;
            f.vmmtos = a.nb;
            Eh(a, b) && (a.na() && (f.dtos = a.Ma, a.Ma = 0, f.vmdtos = a.V, a.V = 0, f.dav = a.La, a.La = 0, a.Tb++,
                f.dtoss = a.Tb), f.dat = a.Ka, a.Ka = 0, f.dft = a.Pa, a.Pa = 0);
            !a.na() && 2E3 <= a.V && (f.vmdtos = a.V);
            e.h && (f.ps = [e.h.width, e.h.height]);
            f.dom = e.B;
            a.Na && (f.fmf = "1", f.px = a.M);
            a.ub && (f.ven = "1");
            a.Bc && (f.veh = "1");
            a.L && (f.vds = a.L);
            a.b && (f.vmer = a.b);
            a.pa && (f.vmmk = a.pa);
            a.Za && (f.vmiec = a.Za);
            Fh() ? (f.c = sh(a.h, 2), f.ss = sh(Gh(a), 2)) : f.tth = R() - dg;
            f.mc = sh(a.jb, 2);
            f.lte = sh(a.Xb, 2);
            return f
        },
        Gh = function(a) {
            if (a.m) return 1;
            var b = K.screen.width * K.screen.height;
            return 0 >= b ? -1 : a.F * a.h / b
        },
        Eh = function(a, b) {
            if (cb(Ff, b)) return !0;
            var c =
                a.A[b];
            return q(c) && (a.A[b] = !0, !c) ? !0 : !1
        };
    var Hh = function(a, b, c) {
        Wd.call(this);
        this.l = null != c ? x(a, c) : a;
        this.h = b;
        this.g = x(this.Jf, this);
        this.b = []
    };
    z(Hh, Wd);
    h = Hh.prototype;
    h.cb = !1;
    h.ua = null;
    h.Ac = function(a) {
        this.b = arguments;
        this.ua ? this.cb = !0 : Ih(this)
    };
    h.J = function() {
        Hh.R.J.call(this);
        this.ua && (l.clearTimeout(this.ua), this.ua = null, this.cb = !1, this.b = [])
    };
    h.Jf = function() {
        this.ua = null;
        this.cb && (this.cb = !1, Ih(this))
    };
    var Ih = function(a) {
        a.ua = gf(a.g, a.h);
        a.l.apply(null, a.b)
    };
    var Kh = function() {
            return !Jh() && (F("iPod") || F("iPhone") || F("Android") || F("IEMobile"))
        },
        Jh = function() {
            return F("iPad") || F("Android") && !F("Mobile") || F("Silk")
        };
    var Lh = null,
        Mh = null,
        Nh = null,
        Oh = null,
        Ph = null,
        Qh = !1,
        Rh = !1,
        Wh = function() {
            if (!Qh) {
                Qh = !0;
                var a = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || l.msRequestAnimationFrame;
                if (!Lh) {
                    var b;
                    if (a) {
                        var c = Da("osd_or_lidar::throttled_scroll_raf_callback", Sh, void 0, void 0);
                        b = function() {
                            a(function() {
                                K.setTimeout(c, 0)
                            })
                        }
                    } else b = Sh;
                    Mh = new Hh(Da("osd_or_lidar::throttled_scroll_timeout", b, void 0, void 0), 100);
                    b = x(Mh.Ac, Mh);
                    Lh = Wf(K, "scroll", b, "osd_or_lidar::throttled_scroll")
                }
                if (!Nh) {
                    if (a) {
                        var d =
                            Da("osd_or_lidar::throttled_resize_raf_callback", Th, void 0, void 0);
                        b = function() {
                            a(function() {
                                K.setTimeout(d, 0)
                            })
                        }
                    } else b = Th;
                    Oh = new Hh(Da("osd_or_lidar::throttled_resize_timeout", b, void 0, void 0), 100);
                    b = x(Oh.Ac, Oh);
                    Nh = Wf(K, "resize", b, "osd_or_lidar::throttled_resize")
                }
                Uh();
                Vh()
            }
        },
        Th = function() {
            Xh(!1);
            Sh()
        },
        Sh = function() {
            Yh(Zh(), !1)
        },
        ii = function() {
            var a, b = Q.getInstance();
            $h && (b.b = cg(K, $h));
            if (Rh) return a = new ai, a.o = !0, a;
            if (bi) return a = new ai, a.C = !0, a;
            if (ci) return a = new ai, a.m = !0, a;
            if (di) {
                a = ei;
                Xh(!1);
                var c = Q.getInstance(),
                    d = c.m,
                    b = d.height - a;
                0 >= b && (b = d.height, a = 0);
                c.b = new A(d.width, b);
                b = new ai;
                b.w = !0;
                b.h = c.b;
                b.g = d;
                b.l = a;
                return b
            }
            if (fi) return a = new ai, a.B = !0, a;
            if (gi) return a = new ai, a.A = !0, a;
            if (hi) return a = new ai, a.H = !0, a;
            a: {
                var b = b.b,
                    e = new ai;e.h = b;e.b = !1;
                if (null != b && -1 != b.width && -1 != b.height && -12245933 != b.width && -12245933 != b.height) {
                    try {
                        var f = $h,
                            g = K || K,
                            g = g.top,
                            c = b || cg(g, f),
                            d = jc(ec(g.document).b);
                        a = -1 == c.width || -12245933 == c.width ? new tc(c.width, c.width, c.width, c.width) : new tc(d.y, d.x + c.width, d.y +
                            c.height, d.x)
                    } catch (k) {
                        a = e;
                        break a
                    }
                    e.D = a;
                    e.b = !0
                }
                a = e
            }
            return a
        },
        Yh = function(a, b, c) {
            var d;
            if (!ji)
                if (window.clearTimeout(ki), ki = null, 0 == a.length) b || li();
                else {
                    var e = ii();
                    try {
                        var f = R();
                        if (e.o)
                            for (d = 0; d < a.length; d++) q(c) ? a[d].dc(c) : a[d].hc(f);
                        else if (e.m)
                            for (d = 0; d < a.length; d++) mh(a[d], f, b);
                        else if (e.C)
                            for (d = 0; d < a.length; d++) mh(a[d], f, b);
                        else if (e.w)
                            for (d = 0; d < a.length; d++) hh(a[d], f, e.g, e.l, b);
                        else if (e.B)
                            for (d = 0; d < a.length; d++) jh(a[d], f, b);
                        else if (e.A) D(a, function(a) {
                            if (b) {
                                if (a.g) {
                                    var c = a.g;
                                    3 <= c.h && (c.h =
                                        3);
                                    a.U = -1
                                }
                            } else if (a.g && "d" != a.g.b) {
                                var c = Fg(a.g),
                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                    e = d[c.b + 1];
                                a.U = nh(d[c.h + 1]);
                                a.D(a.position, e, a.w + c.g, !1, !0, !1);
                                !a.na() || a.Gb() || a.nc || a.g && zg(a.g);
                                (c = 2 == c.b || Ig(a.g)) || (c = a.g, c = "f" == c.b && c.o >= c.C);
                                c && (a.qc(a), a.nc = !1, a.g && zg(a.g))
                            }
                        });
                        else if (e.H)
                            for (d = 0; d < a.length; d++) ph(a[d], f, b, K);
                        else if (e.b) {
                            var g = Q.getInstance();
                            for (d = 0; d < a.length; d++) lh(a[d], f, e.D, b, g.g)
                        }++mi
                    } finally {
                        b ? D(a, function(a) {
                            a.h = 0
                        }) : li()
                    }
                }
        },
        Uh = function() {
            var a = Vh,
                b = Nf();
            b && (Ph = Ph || Wf(Fc, b, a, "osd_or_lidar::visibility"))
        },
        Vh = function() {
            var a = Fh();
            if (a) {
                if (!fg) {
                    var b = R();
                    gg = b;
                    D(T, function(a) {
                        a.sb = Bh(a, b)
                    })
                }
                fg = !0;
                Xh(!0)
            } else b = R(), fg = !1, dg = b, D(T, function(a) {
                0 <= a.w && (a.oa = b)
            });
            Yh(Zh(), !a)
        },
        Fh = function() {
            if (oi()) return !0;
            var a = Mf(K.document);
            return 1 == a || 0 == a
        },
        li = function() {
            K && (ki = K.setTimeout(Sc("osd_or_lidar::psamp_to", function() {
                Yh(Zh(), !1)
            }), ig()))
        },
        pi = function(a) {
            return $a(T, function(b) {
                return b.element == a
            })
        },
        qi = function(a) {
            return bb(T, function(b) {
                return b.l == a
            })
        },
        T = [],
        ri = [],
        Zh = function() {
            return 0 == T.length ? ri : 0 ==
                ri.length ? T : fb(ri, T)
        },
        ji = !1,
        ki = null,
        ei = 0,
        di = !1,
        fi = !1,
        ci = !1,
        bi = !1,
        gi = !1,
        hi = !1,
        $h = Jh() || Kh(),
        mi = 0,
        si = function() {
            var a = K.document;
            return a.body && a.body.getBoundingClientRect ? !0 : !1
        },
        Xh = function(a) {
            var b = Q.getInstance();
            b.b = cg(K, $h);
            if (!a) {
                b.m = K && K.outerWidth ? new A(K.outerWidth, K.outerHeight) : new A(-12245933, -12245933);
                var c;
                a = K;
                a.top != a && (a = a.top);
                var d = 0,
                    e = 0,
                    f = Q.getInstance().b;
                try {
                    var g = a.document,
                        k = g.body,
                        m = g.documentElement;
                    if ("CSS1Compat" == g.compatMode && m.scrollHeight) d = m.scrollHeight != f.height ?
                        m.scrollHeight : m.offsetHeight, e = m.scrollWidth != f.width ? m.scrollWidth : m.offsetWidth;
                    else {
                        var p = m.scrollHeight,
                            t = m.scrollWidth,
                            C = m.offsetHeight,
                            I = m.offsetWidth;
                        m.clientHeight != C && (p = k.scrollHeight, t = k.scrollWidth, C = k.offsetHeight, I = k.offsetWidth);
                        p > f.height ? p > C ? (d = p, e = t) : (d = C, e = I) : p < C ? (d = p, e = t) : (d = C, e = I)
                    }
                    c = new A(e, d)
                } catch (n) {
                    c = new A(-12245933, -12245933)
                }
                b.h = c
            }
        },
        ti = function(a, b) {
            if (1 <= Math.random()) return !1;
            var c = !1;
            D(T, function(b) {
                b = qh(b, a, 3);
                c = c || b
            });
            (hi = c) && D(T, function(a) {
                rh(a) || b(a)
            });
            return c
        },
        ui = function(a) {
            var b = !1;
            D(T, function(c) {
                c = oh(c, a, q(1) && 1 > Math.random() ? 3 : 1);
                b = b || c
            });
            (gi = b) && D(T, function(b) {
                b.g || a(b)
            });
            return b
        },
        vi = function(a) {
            D(a, function(a) {
                pi(a.element) || T.push(a)
            })
        },
        wi = function(a) {
            D(a, function(a) {
                null == bb(T, function(c) {
                    return c.element == a.element && c.ya == a.ya
                }) && T.push(a)
            })
        },
        oi = function() {
            return $a(T, function(a) {
                return a.m
            })
        },
        ai = function() {
            this.g = this.h = null;
            this.l = 0;
            this.D = null;
            this.b = this.H = this.A = this.B = this.w = this.m = this.C = this.o = !1
        };
    var xi = function() {
        this.g = -1;
        this.g = 64;
        this.b = Array(4);
        this.o = Array(this.g);
        this.l = this.h = 0;
        this.reset()
    };
    z(xi, tf);
    xi.prototype.reset = function() {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.l = this.h = 0
    };
    var yi = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if (u(b))
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.b[0];
            c = a.b[1];
            var e = a.b[2],
                f = a.b[3],
                g = 0,
                g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e &
                (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g =
                e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g << 5 & 4294967295 |
                g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c = e + (g << 20 & 4294967295 |
                g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 |
                g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^
                b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
            b = c +
                (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.b[0] = a.b[0] + b & 4294967295;
            a.b[1] = a.b[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.b[2] = a.b[2] + e & 4294967295;
            a.b[3] = a.b[3] + f & 4294967295
        },
        zi = function(a, b) {
            var c;
            q(c) || (c = b.length);
            for (var d = c - a.g, e = a.o, f = a.h, g = 0; g < c;) {
                if (0 ==
                    f)
                    for (; g <= d;) yi(a, b, g), g += a.g;
                if (u(b))
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.g) {
                            yi(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.g) {
                                yi(a, e);
                                f = 0;
                                break
                            }
            }
            a.h = f;
            a.l += c
        };
    var Ai = function(a, b, c) {
        b = b || ",$";
        "string" == typeof b && (b = b.split(""));
        c = c || 0;
        if (!(a instanceof Array) || c >= b.length) return encodeURIComponent("" + a);
        for (var d = [], e = 0; e < a.length; e++) d.push(Ai(a[e], b, c + 1));
        return d.join(b[c])
    };
    var Ci = function() {
            var a = Zf(),
                b = a.length - 1,
                c = $f(a),
                a = c.b,
                d = c.g,
                c = [];
            d ? (a && c.push(Bi(b, [d.url, 2], 0, [a.url, 0], a.depth)), c.push(Bi(b, [d.url, 2], 0))) : a && a.url && (c.push(Bi(b, void 0, void 0, [a.url, 0], a.depth)), (d = (d = qa.exec(a.url)) && d[0] || "") && c.push(Bi(b, [d, 1], a.depth)));
            c.push(Bi(b));
            return c
        },
        Bi = function(a, b, c, d, e) {
            a = [a];
            if (q(b) && q(c)) {
                for (var f = 0; f < c; f++) a.push("");
                a.push(b)
            }
            if (q(d) && q(e)) {
                b = e - a.length + 1;
                for (f = 0; f < b; f++) a.push("");
                a.push(d)
            }
            return a
        },
        Di = function() {
            var a = Ci();
            return Za(a, function(a) {
                return Ai(a)
            })
        };
    var Ei = null,
        Fi = "",
        Gi = !1,
        Hi = function(a) {
            if (!a) return "";
            var b = a.document,
                c = [];
            c.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            b && b.referrer && c.push("referrer=" + encodeURIComponent(b.referrer.substring(0, 512)));
            return c.join("&")
        };
    var Ii = function() {
        this.B = this.l = this.h = this.w = this.m = !1;
        this.b = {};
        this.b.start = this.qe;
        this.b.firstquartile = this.ee;
        this.b.midpoint = this.je;
        this.b.thirdquartile = this.re;
        this.b.complete = this.ae;
        this.b.pause = this.ne;
        this.b.resume = this.oe;
        this.b.skip = this.pe;
        this.b.viewable_impression = this.te;
        this.b.mute = this.ke;
        this.b.unmute = this.se;
        this.b.fullscreen = this.fe;
        this.b.exitfullscreen = this.de;
        this.b.fully_viewable_audible_half_duration_impression = this.ge;
        this.b.measurable_impression = this.ie;
        this.b.abandon =
            this.$d;
        this.b.engagedview = this.ce;
        this.b.impression = this.he;
        this.b.creativeview = this.be
    };
    h = Ii.prototype;
    h.Dc = function() {};
    h.Hc = ba;
    h.nd = ba;
    h.wc = ba;
    h.rc = ba;
    var Ji = function(a, b, c) {
            c || (b = -1);
            return new xh(K, a, b, 7)
        },
        Li = function(a) {
            if (!a.m) {
                a.m = !0;
                try {
                    eg = R(), 1 > Math.random() && (a.B = !0), Ei = Wc(K).ib, Xh(!1), si() ? (window.setTimeout(function() {}, 1), Q.getInstance().g ? Ki(a) : Wh()) : Gi = !0
                } catch (b) {
                    throw T = [], ri = [], b;
                }
            }
        },
        Ki = function(a) {
            var b;
            if (Lb && v(K.screenX) && v(K.mozInnerScreenX) && v(K.outerWidth)) {
                var c = K.navigator.userAgent,
                    d = c.indexOf("Firefox/");
                b = -1;
                if (0 <= d) {
                    b = Math.floor(c.substr(d + 8)) || -1;
                    var e = c.indexOf("Mac OS X 10."),
                        d = -1;
                    0 <= e && (d = Number(c.substr(e + 12, 1)) ||
                        -1);
                    var f = 0 < d ? -1 : c.indexOf("Windows NT "),
                        e = -1;
                    0 <= f && (e = {
                        "6.0": 0,
                        "6.1": 1,
                        "6.2": 2
                    }[c.substr(f + 11, 3)] || -1);
                    c = 148;
                    5 <= d ? c = 4 <= b ? 108 : 3 <= b ? 127 : 108 : 0 <= e && (16 == b || 17 == b || 18 == b) && (c = [
                        [146, 146, 146],
                        [148, 147, 148],
                        [131, 130, 136]
                    ][e][b - 16]);
                    b = c
                } else b = null;
                null !== b && (ei = b, di = !0);
                b = !0
            } else b = !1;
            if (b) Wh();
            else if (b = K && K.document, b = H && Yb(8) && w(ng(b)) ? fi = !0 : !1, b) a.w = 1 > Math.random(), Wh();
            else {
                if (og()) {
                    if (ti(K, x(a.zb, a))) {
                        Wh();
                        a.l = !0;
                        return
                    }
                } else if (ui(x(a.zb, a))) {
                    Wh();
                    a.h = !0;
                    return
                }
                window.clearTimeout(ki);
                ki = null;
                Fi =
                    "i";
                ji = !0
            }
        };
    h = Ii.prototype;
    h.zb = function(a) {
        if (a) {
            if (!a.$b) {
                var b = S(a, "start"),
                    b = Mi(b, Hf),
                    c = Ei || K,
                    d = [];
                d.push("v=427v");
                d.push("r=fp");
                d.push("efm=" + (this.h ? 1 : 0));
                d.push("esfm=" + (this.l ? 1 : 0));
                d.push(b);
                d.push(Hi(c));
                wa(K, ("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&" + d.join("&")).substring(0, 2E3), void 0);
                a.$b = !0
            }
            a.fa = !0;
            this.o(a)
        }
    };
    h.qe = function(a) {
        a.lc++;
        Dh(a, 0);
        .1 <= a.H && (a.Mb = !0);
        return S(a, "start")
    };
    h.ee = function(a, b) {
        Dh(a, 1);
        Yh([a], !Fh(), b);
        return S(a, "firstquartile")
    };
    h.je = function(a, b) {
        Dh(a, 2);
        a.tb = !0;
        Yh([a], !Fh(), b);
        return S(a, "midpoint")
    };
    h.re = function(a, b) {
        Dh(a, 3);
        Yh([a], !Fh(), b);
        return S(a, "thirdquartile")
    };
    h.ae = function(a, b) {
        Dh(a, 4);
        Yh([a], !Fh(), b);
        var c = S(a, "complete");
        a.m = !1;
        Ni(a.l);
        return c
    };
    h.ne = function(a, b) {
        return Oi(a, "pause", b)
    };
    h.$d = function(a, b) {
        return Oi(a, "abandon", b)
    };
    h.oe = function(a, b) {
        var c = Fh();
        a.$ && !c && (a.oa = R());
        Yh([a], !c, b);
        a.$ = !1;
        return S(a, "resume")
    };
    h.te = function(a) {
        var b = S(a, "viewable_impression");
        a.Bc = !0;
        return b
    };
    h.pe = function(a, b) {
        var c = !Fh();
        Yh([a], c, b);
        c = S(a, "skip");
        a.m = !1;
        Ni(a.l);
        return c
    };
    h.ke = function(a, b) {
        Yh([a], !Fh(), b);
        return S(a, "mute")
    };
    h.se = function(a, b) {
        Yh([a], !Fh(), b);
        return S(a, "unmute")
    };
    h.fe = function(a, b) {
        a.m = !0;
        Yh([a], !Fh(), b);
        return S(a, "fullscreen")
    };
    h.de = function(a, b) {
        a.m = !1;
        Yh([a], !Fh(), b);
        return S(a, "exitfullscreen")
    };
    h.ge = function(a) {
        return S(a, "fully_viewable_audible_half_duration_impression")
    };
    h.ie = function(a) {
        return S(a, "measurable_impression")
    };
    h.ce = function(a) {
        return S(a, "engagedview")
    };
    h.he = function(a) {
        return S(a, "impression")
    };
    h.be = function(a) {
        return S(a, "creativeview")
    };
    var Oi = function(a, b, c) {
            a.sb = Bh(a, R());
            var d = !Fh();
            Yh([a], d, c);
            a.$ = !0;
            return S(a, b)
        },
        Pi = function(a, b, c) {
            if (!b.vc) {
                b.vc = !0;
                "i" != Fi && (ji = !1);
                if (a.h && !b.g && !b.Na) {
                    var d = 1 > Math.random() ? 3 : 1;
                    oh(b, x(a.zb, a), d)
                }
                if (a.l && !rh(b)) {
                    a: {
                        a = [3, 1];
                        if (!(1E-4 > Math.random()) && (d = Math.random(), 1 > d)) {
                            var e = window;
                            try {
                                var f = new Uint32Array(1);
                                e.crypto.getRandomValues(f);
                                d = f[0] / 65536 / 65536
                            } catch (g) {
                                d = Math.random()
                            }
                            d = a[Math.floor(d * a.length)];
                            break a
                        }
                        d = null
                    }
                    qh(b, K, d)
                }
                b.A = {};
                b.A.firstquartile = !1;
                b.A.midpoint = !1;
                b.A.thirdquartile = !1;
                b.A.complete = !1;
                b.A.pause = !1;
                b.A.skip = !1;
                b.A.viewable_impression = !1;
                b.Tb = 0;
                f = q(c) ? c.opt_nativeTime : void 0;
                hg = f = v(f) ? f : R();
                b.w = f;
                a = !1;
                Fh() || (a = !0, b.oa = f);
                Yh([b], a, c)
            }
        },
        Ni = function(a) {
            if (u(a)) {
                var b = ab(T, function(b) {
                    return b.l == a
                });
                0 <= b && (th(T[b]), Array.prototype.splice.call(T, b, 1))
            }
        },
        Ri = function(a, b, c) {
            var d = bb(T, function(a) {
                return a.element == c
            });
            null !== d && d.l != b && (Ni(d.l), d = null);
            d || (d = Qi(a, c), d.l = b, d.C = "h");
            return d
        },
        Qi = function(a, b) {
            var c = Ji(b, R(), !1);
            c.lb = x(a.g, a);
            Q.getInstance().o = 79463069;
            wi([c]);
            Wh();
            return c
        };
    Ii.prototype.g = function(a) {
        a.na() && !a.ub && this.nd(a);
        this.wc(a)
    };
    var Si = function(a, b) {
            var c = wb(function(b) {
                    return b == a
                }),
                c = {
                    v: "427v",
                    e: Gf[c]
                },
                d = S(b, a);
            Ab(c, d);
            b.Ic[a] = d;
            return Mi(c, Hf)
        },
        Mi = function(a, b, c, d, e) {
            var f = {};
            if (q(a))
                for (var g in b) {
                    var k = b[g];
                    g in Object.prototype || null != k && (w(k) ? f[g] = k(a) : f[g] = a[k])
                }
            q(c) && Ab(f, c);
            a = kg(f);
            q(d) && q(e) && (e = e(a), a += "&" + d + "=" + e);
            return a
        },
        Ti = function(a, b, c, d) {
            var e = b.toLowerCase();
            if (b = wb(function(a) {
                    return a == e
                })) {
                b = {
                    v: "427v",
                    e: Gf[b]
                };
                if (Gi) return b.msg = "ue", b;
                c = a.Dc(c, d);
                b.nas = T.length;
                if (!c) return b.msg = "nf", b;
                Li(a);
                "i" ==
                Fi && (c.fa = !0, a.o(c));
                a.w && Ch(c);
                var f = d.opt_fullscreen;
                q(f) && (c.m = !!f);
                cb(Ef, e) && (Pi(a, c, d), a.B && a.Hc(c));
                if (f = a.b[e])
                    if (a = f.call(a, c, d), q(a)) return Ab(b, a), b
            }
        };
    Ii.prototype.o = ba;
    var Ui = function(a, b) {
        var c = a[b];
        q(c) && (a[b] = Math.floor(1E3 * c))
    };
    var Vi = (new Date).getTime(),
        Wi = !1,
        Xi = !1,
        Yi = !1,
        U = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        Zi = function(a) {
            return !!(1 << a & Vi)
        },
        $i = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return Zi(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return Zi(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return Zi(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return Zi(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return Zi(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return Xi
            },
            function() {
                return Yi
            },
            function() {
                return Zi(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = (new AudioContext).createBufferSource();
                a.detune.value = 100;
                return 100 == a.detune.value
            },
            function() {
                return Zi(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0,
                    0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || U(a.navigator.vibrate)
            },
            function(a) {
                a = a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return U(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type",
                    "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering", "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return Zi(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return U(a.CSS.supports)
            },
            function() {
                return U(Intl.Collator)
            },
            function(a) {
                return U(a.document.createElement("dialog").show)
            },
            function() {
                return Zi(8)
            },
            function(a) {
                return U(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    Pd: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    Pd: "ease-in"
                }], {
                    duration: 1300,
                    Pg: 1
                }).reverse)
            },
            function(a) {
                return U(a.document.createElement("div").animate)
            },
            function(a) {
                return U(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return U(a.navigator.getBattery)
            },
            function(a) {
                return U(a.navigator.permissions.query)
            },
            function() {
                return U((new AudioContext).createBuffer)
            },
            function() {
                return Zi(9)
            },
            function() {
                return U(webkitRequestAnimationFrame)
            },
            function(a) {
                return U(a.BroadcastChannel.call)
            },
            function(a) {
                return U(a.FontFace)
            },
            function(a) {
                return U(a.Gamepad)
            },
            function() {
                return Zi(10)
            },
            function(a) {
                return U(a.MutationEvent)
            },
            function(a) {
                return U(a.MutationObserver)
            },
            function(a) {
                return U(a.crypto.getRandomValues)
            },
            function(a) {
                return U(a.document.body.createShadowRoot)
            },
            function(a) {
                return U(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return U(a.fetch)
            },
            function() {
                return Zi(11)
            },
            function(a) {
                return U(a.navigator.serviceWorker.register)
            },
            function(a) {
                return U(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return U(a.speechSynthesis.speak)
            },
            function(a) {
                return U(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return Zi(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return Zi(13)
            },
            function(a) {
                return a.CSS.supports("position",
                    "sticky")
            },
            function(a) {
                return void 0 === a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return Zi(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.Qg
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 == a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        aj = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        bj = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        dj = function() {
            try {
                cj()
            } catch (d) {}
            var a = "a=1&b=" + Vi + "&",
                b = [],
                c = 99;
            D($i, function(a, c) {
                var f = !1;
                try {
                    f = a(K)
                } catch (g) {}
                b[c / 32 >>> 0] |= f << c % 32
            });
            D(b, function(b, e) {
                a += String.fromCharCode(c + e) + "=" + (b >>> 0).toString(16) + "&"
            });
            c = 105;
            D(aj, function(b) {
                var e = "false";
                try {
                    e = b(K)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            D(bj, function(b) {
                var e = "";
                try {
                    var f = b(K);
                    b = [];
                    for (var g = 0, k = 0; k < f.length; k++) {
                        for (var m = f.charCodeAt(k); 255 < m;) b[g++] = m & 255, m >>= 8;
                        b[g++] = m
                    }
                    if (!rf)
                        for (rf = {}, sf = {}, f = 0; 65 > f; f++) rf[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f), sf[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(f);
                    f = sf;
                    m = [];
                    for (g = 0; g < b.length; g += 3) {
                        var p = b[g],
                            t = g + 1 < b.length,
                            C = t ? b[g + 1] : 0,
                            I = g + 2 < b.length,
                            n = I ? b[g + 2] : 0,
                            k = p >> 2,
                            y = (p & 3) << 4 | C >> 4,
                            zd = (C & 15) << 2 | n >> 6,
                            ni = n & 63;
                        I || (ni = 64, t || (zd = 64));
                        m.push(f[k], f[y], f[zd], f[ni])
                    }
                    e =
                        m.join("")
                } catch (Wm) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        cj = function() {
            if (!Wi) {
                var a = function() {
                    Xi = !0;
                    K.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                K.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    Yi = !0;
                    K.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                K.document.addEventListener("webdriver-evaluate-response", b, !0);
                Wi = !0
            }
        };
    var ej = function() {
        Ii.call(this)
    };
    z(ej, Ii);
    ca(ej);
    ej.prototype.Dc = function(a, b) {
        Q.getInstance();
        var c;
        Rh ? (c = qi(a), c || (c = Ji(null, b.opt_nativeTime || -1, !0), c.C = "a", c.lb = x(this.g, this), vi([c]), c.l = a)) : b.opt_adElement ? c = Ri(this, a, b.opt_adElement) : (c = fj(this, a, b.opt_sdkID || "")) || (c = qi(a) || void 0);
        c && c.Kb == ba && (c.Kb = x(this.rc, this));
        return c
    };
    ej.prototype.rc = function(a) {
        Q.getInstance();
        a.b = 0;
        a.Za = 0;
        var b;
        if ("as" == a.C) {
            var c = "getVideoMetadata" + a.ya;
            if (w(a.element[c])) try {
                b = a.element[c]()
            } catch (f) {
                a.b |= 4
            } else a.b |= 2
        } else if ("h" == a.C)
            if (c = aa("ima.common.getVideoMetadata"), w(c)) try {
                b = c(a.l)
            } catch (f) {
                a.b |= 4
            } else a.b |= 2;
            else a.b |= 1;
        if (!a.b)
            if (q(b))
                if (null === b) a.b |= 16;
                else {
                    var d;
                    a: {
                        c = b;
                        for (d in c) {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d ? a.b |= 32 : null != b.errorCode && (a.Za = b.errorCode, a.b |= 64)
                }
        else a.b |= 8;
        null != b || (b = {});
        d = b;
        a.pa = 0;
        for (var e in Df) null == d[e] && (a.pa |=
            Df[e]);
        null != d.currentTime || a.jc++;
        Ui(d, "currentTime");
        Ui(d, "duration");
        return b
    };
    var fj = function(a, b, c) {
            var d = bb(T, x(function(a) {
                return a.element ? gj(a.element, c) == b && a.ya == c : !1
            }, a));
            null !== d && d.l != b && (Ni(d.l), d = void 0);
            if (d) return d;
            d = hj(c);
            if (d = bb(d, x(function(a) {
                    return gj(a, c) == b
                }, a))) return d = Qi(a, d), d.C = "as", d.l = b, d.ya = c, d
        },
        hj = function(a) {
            var b = K.document,
                c = lb(Za(["embed", "object"], function(a) {
                    return gb(b.getElementsByTagName(a))
                })),
                d = "metricID" + a;
            return c = Ya(c, function(a) {
                if (!a || !ga(a) || 1 != a.nodeType || !w(a.getBoundingClientRect)) return !1;
                var b = a.getBoundingClientRect();
                return 0 !=
                    b.width && 0 != b.height && a[d] && w(a[d]) ? !0 : !1
            })
        },
        gj = function(a, b) {
            var c = "metricID" + b;
            if (!a || !a[c] || !w(a[c])) return null;
            var d;
            try {
                d = a[c]()
            } catch (e) {
                return null
            }
            return d.queryID
        },
        ij = function(a, b) {
            Q.getInstance();
            var c;
            switch (a.C) {
                case "h":
                    c = aa("ima.common.triggerExternalActivityEvent");
                    break;
                case "a":
                    c = aa("ima.common.triggerExternalActivityEvent");
                    break;
                case "n":
                    c = aa("ima.bridge.triggerExternalActivityEvent");
                    break;
                case "as":
                    var d = "triggerExternalActivityEvent" + a.ya;
                    a.element && w(a.element[d]) && (c = function(b,
                        c, e) {
                        a.element[d](e)
                    });
                    break;
                default:
                    return a.L |= 4, !1
            }
            if (w(c)) {
                var e = Si(b, a);
                try {
                    return c(a.l, e, b), !0
                } catch (f) {
                    a.L |= 2
                }
            } else a.L |= 1;
            return !1
        };
    ej.prototype.nd = function(a) {
        ij(a, "viewable_impression") && (a.ub = !0)
    };
    ej.prototype.wc = function(a) {
        var b = a.Ja[0];
        (15E3 <= b || a.tb && (-1 != a.I ? b >= a.I / 2 : -1 != a.$a && b >= a.$a)) && !a.cc && ij(a, "fully_viewable_audible_half_duration_impression") && (a.cc = !0)
    };
    ej.prototype.Hc = function(a) {
        var b = Q.getInstance();
        a.zc || a.fa || b.l || !ij(a, "measurable_impression") || (a.zc = !0)
    };
    var jj = function(a) {
            var b = new xi;
            zi(b, a + "kArwaWEsTs");
            var c = Array((56 > b.h ? b.g : 2 * b.g) - b.h);
            c[0] = 128;
            for (a = 1; a < c.length - 8; ++a) c[a] = 0;
            var d = 8 * b.l;
            for (a = c.length - 8; a < c.length; ++a) c[a] = d & 255, d /= 256;
            zi(b, c);
            c = Array(16);
            for (a = d = 0; 4 > a; ++a)
                for (var e = 0; 32 > e; e += 8) c[d++] = b.b[a] >>> e & 255;
            return qf(c).slice(-8)
        },
        kj = function(a, b, c) {
            var d = {},
                e = ej.getInstance(),
                f = {};
            Ab(f, {
                opt_adElement: void 0,
                opt_fullscreen: void 0
            }, c || {});
            a = f.opt_bounds ? {
                v: "427v",
                e: a,
                msg: "ol"
            } : Ti(e, a, b, f);
            d.viewability = Mi(a, Hf);
            b = null != a && 1 == a.tcm;
            c = Vi = (new Date).getTime();
            e = Zi(5);
            c = (Xi ? !e : e) ? c | 2 : c & -3;
            e = Zi(2);
            c = (Yi ? !e : e) ? c | 8 : c & -9;
            c = {
                s1: (c >>> 0).toString(16)
            };
            d.moatViewability = b ? Mi(a, Jf, c, "h", jj) : Mi(a, If, c);
            d.googleViewability = Mi(a, Kf, c);
            return d
        };
    ej.prototype.g = function(a) {
        Q.getInstance().l ? lj(a) : ej.R.g.call(this, a)
    };
    ej.prototype.o = function(a) {
        Q.getInstance().l && lj(a)
    };
    var lj = function(a) {
        var b = aa("ima.common.triggerViewabilityMeasurementUpdate");
        if (w(b)) {
            var c = a.l,
                d = {};
            d.insideIframe = Q.getInstance().g;
            d.unmeasurable = a.fa;
            d.position = a.position;
            d.coverage = a.h;
            b(c, d)
        }
    };
    r("Goog_AdSense_Lidar_sendVastEvent", Rc("lidar::handlevastevent_ex", kj, void 0, function() {
        return {
            v: "427",
            "if": Q.getInstance().g ? "1" : "0",
            nas: String(T.length)
        }
    }), void 0);
    r("Goog_AdSense_Lidar_getInitSignals", Rc("lidar::getinitsignals_ex", function() {
        var a = {};
        a.moatInit = dj();
        return a
    }), void 0);
    r("Goog_AdSense_Lidar_getUrlSignalsArray", Rc("lidar::geturlsignalsarray_ex", function() {
        return Di()
    }), void 0);
    r("Goog_AdSense_Lidar_getUrlSignalsList", Rc("lidar::geturlsignalslist_ex", function() {
        return ge(Di())
    }), void 0);
    var V = function(a) {
        Wd.call(this);
        this.l = a;
        this.g = {}
    };
    z(V, Wd);
    var mj = [];
    V.prototype.G = function(a, b, c, d) {
        return nj(this, a, b, c, d)
    };
    var nj = function(a, b, c, d, e, f) {
            ea(c) || (c && (mj[0] = c.toString()), c = mj);
            for (var g = 0; g < c.length; g++) {
                var k = Re(b, c[g], d || a.handleEvent, e || !1, f || a.l || a);
                if (!k) break;
                a.g[k.yb] = k
            }
            return a
        },
        oj = function(a, b, c, d, e, f) {
            if (ea(c))
                for (var g = 0; g < c.length; g++) oj(a, b, c[g], d, e, f);
            else(b = Ye(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.g[b.yb] = b)
        };
    V.prototype.za = function(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++) this.za(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.l || this, c = Se(c), d = !!d, b = Fe(a) ? Ne(a.o, String(b), c, d, e) : a ? (a = Ue(a)) ? Ne(a, b, c, d, e) : null : null, b && ($e(b), delete this.g[b.yb]);
        return this
    };
    var pj = function(a) {
        nb(a.g, function(a, c) {
            this.g.hasOwnProperty(c) && $e(a)
        }, a);
        a.g = {}
    };
    V.prototype.J = function() {
        V.R.J.call(this);
        pj(this)
    };
    V.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var qj = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var rj = {},
        sj = "",
        tj = /OS (\S+) like/,
        uj = /Android ([\d\.]+)/,
        wj = function() {
            return !vj() && (Kh() || Jh())
        },
        xj = function() {
            return Pb && !Qb || B(E, "iPod")
        },
        yj = function() {
            return xj() || Qb
        },
        zj = function(a, b) {
            if (null == rj[b]) {
                var c;
                Fa(sj) && (c = a.exec(E)) && (sj = c[1]);
                (c = sj) ? (c = c.replace(/_/g, "."), rj[b] = 0 <= Ta(c, b)) : rj[b] = !1
            }
            return rj[b]
        },
        vj = function() {
            return N.ra() || !1
        },
        Aj = function() {
            var a = E;
            return a ? B(a, "Nintendo WiiU") : !1
        },
        Bj = function() {
            var a;
            (a = B(E, "CrKey") || B(E, "PlayStation") || B(E, "Roku")) || (a = (a = E) ? B(a, "AppleTV") ||
                B(a, "GoogleTV") || B(a, "HbbTV") || B(a, "NetCast.TV") || B(a, "Opera TV") || B(a, "POV_TV") || B(a, "SMART-TV") || B(a, "SmartTV") : !1);
            return a || B(E, "Xbox")
        },
        Cj = function() {
            return nf || vj() && Ob && !(Ob && zj(uj, 4.4))
        },
        Dj = function() {
            return vj() || N.Hb() && wj() || yj() || Ob && (!Ob || !zj(uj, 4)) || Bj() ? !0 : !1
        };
    var Ej = function(a, b, c) {
        this.b = a;
        this.g = Math.min(Math.max(b || 0, 0), 1);
        this.h = null != c ? c : !0
    };
    var Fj = function(a) {
            this.h = a;
            this.g = new md;
            this.b = null
        },
        Gj = function(a) {
            var b = Math.random(),
                c = 0,
                d = a.g.X();
            D(d, function(a) {
                c += a.g
            }, a);
            var e = 1 < c ? c : 1;
            a.b = null;
            for (var f = 0, g = 0; g < d.length; ++g)
                if (f += d[g].g, f / e >= b) {
                    a.b = d[g];
                    break
                }
        };
    var Jj = function() {
            this.g = null != l.G_testRunner;
            this.b = new md;
            W(this, 31061770, .05);
            W(this, 31061771, .05);
            W(this, 31061772, .05);
            W(this, 31061773, .05);
            W(this, 31061774, .01);
            W(this, 31061775, .01);
            W(this, 41351082, .01);
            W(this, 41351083, .01);
            W(this, 41351016, .05);
            W(this, 41351017, .05);
            W(this, 41351020, 0);
            W(this, 41351021, 0);
            W(this, 41351088, .01);
            W(this, 41351089, .01);
            W(this, 136961001, .01);
            W(this, 136961002, .01);
            W(this, 41351032, .05);
            W(this, 41351033, .05);
            W(this, 265944520, .05);
            W(this, 265944521, .05);
            W(this, 265944522, .05);
            W(this, 265944523, .05);
            Hj(this);
            var a;
            a = ae(N);
            a = de(a);
            null != a && (this.g = !1, Ij(this, a.map(String)))
        },
        Kj = null,
        Lj = function() {
            Kj || (Kj = new Jj);
            return Kj
        },
        W = function(a, b, c) {
            Fa(Ra("GvnExternalLayer")) || isNaN(b) || 0 >= b || (b = new Ej(b, c), Mj(a, "GvnExternalLayer").g.set(b.b, b))
        },
        Hj = function(a) {
            ce() || N.Fb() || D(a.b.X(), function(a) {
                Gj(a)
            }, a)
        },
        Ij = function(a, b) {
            D(b, function(a) {
                var b = Number(a);
                a = "FORCED_PUB_EXP_LAYER_" + a;
                isNaN(b) || 0 >= b || Fa(Ra(a)) || (Mj(this, a).b = new Ej(b, 0, !0))
            }, a)
        },
        Nj = function() {
            var a = Lj(),
                b = {};
            D(a.b.X(),
                function(a) {
                    var d = a.b;
                    if (d) {
                        var e = {};
                        e.experimentId = d.b;
                        e.shouldReport = d.h;
                        b[a.h] = e
                    } else b[a.h] = {}
                });
            return b
        },
        Oj = function(a) {
            var b = Lj();
            return b.g ? !1 : $a(b.b.X(), function(b) {
                return !!b.b && b.b.b == a
            })
        },
        Pj = function() {
            var a = Lj();
            if (a.g) return "";
            var b = [];
            D(a.b.X(), function(a) {
                (a = a.b) && a.h && b.push(a.b)
            });
            return b.sort().join(",")
        },
        Mj = function(a, b) {
            var c = a.b.get(b);
            null == c && (c = new Fj(b), a.b.set(b, c));
            return c
        };
    var Qj = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com www.google.com/pagead/sul www.youtube.com/pagead/sul".split(" "),
        Rj = /\bocr\b/,
        Sj = 0,
        Tj = {},
        Uj = function(a) {
            return Fa(Ra(a)) ? !1 : 0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&") || (new Bd(a)).o.match(Rj) ? !0 : null != bb(Qj, function(b) {
                return null != a.match(b)
            })
        },
        Xj = function(a, b) {
            if (a) {
                var c = 'javascript:"data:text/html,<body><img src=\\"' +
                    a + '\\"></body>"';
                b ? Vj(function(b) {
                    Wj(b ? c : 'javascript:"data:text/html,<body><object data=\\"' + a + '\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                }) : Wj(c)
            }
        },
        Wj = function(a) {
            var b = lc("iframe", {
                src: a,
                style: "display:none"
            });
            a = dc(b).body;
            var c, d = gf(function() {
                $e(c);
                nc(b)
            }, 15E3);
            c = Ye(b, ["load", "error"], function() {
                gf(function() {
                    l.clearTimeout(d);
                    nc(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        Vj = function(a) {
            var b = Tj.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                Yj(function(b, e) {
                    delete Tj[e];
                    c || (c = !0, null !=
                        Tj.imageLoadingEnabled || (Tj.imageLoadingEnabled = b), a(b))
                })
            }
        },
        Yj = function(a) {
            var b = new Image,
                c, d = "" + Sj++;
            Tj[d] = b;
            b.onload = function() {
                clearTimeout(c);
                a(!0, d)
            };
            c = setTimeout(function() {
                a(!1, d)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        Zj = function(a) {
            if (a) {
                var b = document.createElement("OBJECT");
                b.data = a;
                b.width = 1;
                b.height = 1;
                b.style.visibility = "hidden";
                var c = "" + Sj++;
                Tj[c] = b;
                b.onload = b.onerror = function() {
                    delete Tj[c]
                };
                document.body.appendChild(b)
            }
        },
        ak = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + Sj++;
                Tj[c] = b;
                b.onload = b.onerror = function() {
                    delete Tj[c]
                };
                b.src = a
            }
        },
        bk = function(a, b) {
            a && (b ? Vj(function(b) {
                b ? ak(a) : Zj(a)
            }) : ak(a))
        };
    var ck = function(a, b) {
        return a.replace(/(\[|%5B)([a-zA-Z0-9_]+)(\]|%5D)/g, function(a, d, e) {
            try {
                var f = xb(b, e),
                    f = f.toString();
                if (!Fa(Ra(f))) return encodeURIComponent(f).replace(/%2C/g, ",")
            } catch (g) {}
            return a
        })
    };
    var dk = {
        mg: "video/mp4",
        og: "video/mpeg",
        jg: "application/x-mpegURL",
        qg: "video/ogg",
        Bg: "video/3gpp",
        Ng: "video/webm",
        lg: "audio/mpeg",
        ng: "audio/mp4"
    };
    var ek = ["*.googlesyndication.com", "gcdn.2mdn.net"],
        fk = ["*.youtu.be", "*.youtube.com"],
        gk = "ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        hk = ["c.googlesyndication.com"],
        jk = function(a, b) {
            try {
                var c = (new Bd(b)).g,
                    c = c.replace(/^www./i, "");
                return $a(a, function(a) {
                    return ik(a, c)
                })
            } catch (d) {
                return !1
            }
        },
        ik = function(a, b) {
            if (Fa(Ra(b))) return !1;
            a = a.toLowerCase();
            b = b.toLowerCase();
            return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
        },
        lk = function(a) {
            var b = !1;
            kk(a, hk) ? b = !1 : Oj(265944523) && null != a && jk(fk, a) ? b = !0 : "https:" == window.location.protocol && (kk(a, gk) || N.sa()) && (b = !0);
            if (b) {
                b = new Bd(a);
                if ("https" == b.h) return a;
                Cd(b, "https");
                return b.toString()
            }
            return a
        },
        kk = function(a, b) {
            return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
        };
    var mk = function(a) {
        try {
            a: {
                var b = a,
                    c = void 0,
                    d = b.length - 11 - 2;
                if (!(-1 == b.indexOf("URL_SIGNALS") || 2048 <= d || !c && !window.Goog_AdSense_Lidar_getUrlSignalsArray))
                    for (var c = c || window.Goog_AdSense_Lidar_getUrlSignalsArray(), d = {}, e = 0; e < c.length; ++e) {
                        d.URL_SIGNALS = c[e];
                        var f = ck(b, d);
                        if (2048 > f.length) {
                            a = f;
                            break a
                        }
                    }
                a = b
            }
        }
        catch (k) {}
        try {
            a = lk(a);
            var g = !N.sa() || Oj(41351089);
            a && (Uj(a) ? Xj(a, g) : bk(a, g))
        } catch (k) {}
    };
    var nk = function() {
        this.g = .01 > Math.random();
        this.b = Math.floor(4503599627370496 * Math.random())
    };
    ca(nk);
    var qk = function(a, b, c, d) {
            if (a.g || d) {
                c = c || {};
                c.lid = b;
                b = Pj();
                Fa(Ra(b)) || (c.e = b);
                c = ok(a, c);
                var e = new Bd("http://pagead2.googlesyndication.com/pagead/gen_204");
                nb(c, function(a, b) {
                    e.b.set(b, null != a ? "boolean" == typeof a ? a ? "t" : "f" : "" + a : "")
                }, a);
                a = pk();
                Cd(e, a.h);
                N.Fb() || mk(e.toString())
            }
        },
        ok = function(a, b) {
            b.id = "ima_html5";
            var c = pk();
            b.c = a.b;
            b.domain = c.g;
            return b
        },
        pk = function() {
            var a = J(),
                b = document;
            return new Bd(a.parent == a ? a.location.href : b.referrer)
        };
    var rk = function() {
        P.call(this);
        this.b = null;
        this.w = new V(this);
        Xd(this, ka(Yd, this.w));
        this.A = null;
        this.l = new md;
        this.g = new md;
        this.h = !1;
        this.m = (w(null), null);
        N.ra() && (Rh = !0, Q.getInstance().o = 79463068)
    };
    z(rk, P);
    var sk = null,
        tk = function() {
            null != sk || (sk = new rk);
            return sk
        },
        vk = function(a) {
            if (null == a) return !1;
            if (xj() && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            var b = window.screen.availWidth || window.screen.width,
                c = window.screen.availHeight || window.screen.height;
            a = uk(a);
            return 0 >= b - a.width && 42 >= c - a.height
        },
        uk = function(a) {
            return w(a.getBoundingClientRect) && oc(dc(a), a) ? a.getBoundingClientRect() : {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        wk = function(a,
            b, c, d, e) {
            if (a.h) {
                if (a.m) return a.m(b, c, e);
                e = e || {};
                if (a = d ? a.g.get(d) : N.b) null != e.opt_fullscreen || (e.opt_fullscreen = vk(a)), null != e.opt_adElement || (e.opt_adElement = a);
                return Ba(Ca, "lidar::handlevast_html5", ka(kj, b, c, e), void 0, Pc) || {}
            }
            return {}
        },
        xk = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.g.set(c, b);
            if (Oj(31061775)) try {
                xf(function() {
                    return b
                })
            } catch (d) {}
            return c
        },
        yk = function(a, b, c) {
            c ? null === b ? pd(a.l, c) : a.l.set(c, b) : a.A = b
        },
        Ak = function(a) {
            if (w(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                zk(a.b, "activityMonitor", "pageSignals", b)
            }
        };
    rk.prototype.C = function(a) {
        var b = a.P,
            c = b.queryId,
            d = {};
        d.eventId = b.eventId;
        switch (a.W) {
            case "getPageSignals":
                Ak(this);
                break;
            case "reportVastEvent":
                var e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                var g = null;
                d.viewabilityData = wk(this, e, c, a, f);
                zk(this.b, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, g = null, ub(b, "isFullscreen") && (g = b.isFullscreen), ub(b, "loggingId") && (b = b.loggingId, c.loggingId =
                    b, qk(nk.getInstance(), 43, {
                        step: "beforeLookup",
                        logid: b,
                        time: la()
                    }, !0)), c.engagementString = Bk(this, a, g), zk(this.b, "activityMonitor", "engagement", c)
        }
    };
    var Bk = function(a, b, c) {
        var d = b ? a.g.get(b) : N.b;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = wf(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Pa(e.name, 12) + ";" + Pa(e.message, 40)
        }
        return c
    };
    r("ima.common.getVideoMetadata", function(a) {
        var b = tk();
        a = b.l.get(a) || b.A;
        return w(a) ? a() : {}
    }, void 0);
    r("ima.common.triggerViewEvent", function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        var d = tk().b;
        d ? zk(d, "activityMonitor", "viewableImpression", c) : tk().dispatchEvent(new M("viewable_impression", null, c))
    }, void 0);
    r("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        var c = tk().b,
            d = {};
        d.queryId = a;
        d.viewabilityData = b;
        c && zk(c, "activityMonitor", "viewabilityMeasurement", d)
    }, void 0);
    r("ima.common.triggerMeasurableEvent", function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        var d = tk().b;
        d ? zk(d, "activityMonitor", "measurableImpression", c) : tk().dispatchEvent(new M("measurable_impression", null, c))
    }, void 0);
    r("ima.common.triggerExternalActivityEvent", function(a, b, c) {
        var d = {};
        d.queryId = a;
        d.viewabilityString = b;
        d.eventName = c;
        (a = tk().b) ? zk(a, "activityMonitor", "externalActivityEvent", d): tk().dispatchEvent(new M("externalActivityEvent", null, d))
    }, void 0);
    r("ima.common.updateEngagementDetectionValue", function(a) {
        var b = tk().b;
        if (b) {
            var c = {};
            c.engagementString = a;
            zk(b, "activityMonitor", "engagementData", c)
        }
    }, void 0);
    var Ck = function(a, b, c) {
        this.g = c;
        0 == b.length && (b = [
            []
        ]);
        this.b = Za(b, function(b) {
            b = a.concat(b);
            for (var c = [], f = 0, g = 0; f < b.length;) {
                var k = b[f++];
                if (128 > k) c[g++] = String.fromCharCode(k);
                else if (191 < k && 224 > k) {
                    var m = b[f++];
                    c[g++] = String.fromCharCode((k & 31) << 6 | m & 63)
                } else if (239 < k && 365 > k) {
                    var m = b[f++],
                        p = b[f++],
                        t = b[f++],
                        k = ((k & 7) << 18 | (m & 63) << 12 | (p & 63) << 6 | t & 63) - 65536;
                    c[g++] = String.fromCharCode(55296 + (k >> 10));
                    c[g++] = String.fromCharCode(56320 + (k & 1023))
                } else m = b[f++], p = b[f++], c[g++] = String.fromCharCode((k & 15) << 12 |
                    (m & 63) << 6 | p & 63)
            }
            return new RegExp(c.join(""))
        })
    };
    Ck.prototype.match = function(a) {
        return $a(this.b, function(b) {
            b = a.match(b);
            return null == b ? !1 : !this.g || 1 <= b.length && "3.126.0" == b[1] || 2 <= b.length && "3.126.0" == b[2] ? !0 : !1
        }, this)
    };
    var Dk = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Ek = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Fk = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 40, 115, 100,
            107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47
        ],
        Gk = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 99, 111, 114, 101, 47, 97, 100, 109, 111, 98, 47],
        Hk = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47],
        Ik = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97,
                51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115
            ],
            [105, 109, 97, 51, 95, 116, 101, 115, 116, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Jk = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103,
                40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 116, 101, 115, 116, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        Kk = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109,
                95, 100, 101, 98, 117, 103, 92, 46, 106, 115
            ]
        ],
        Lk = new Ck(Dk, Ik, !1),
        Mk = new Ck(Dk, Jk, !0),
        Nk = new Ck(Ek, Ik, !1),
        Ok = new Ck(Ek, Jk, !0),
        Pk = new Ck(Fk, [], !1),
        Qk = new Ck(Fk, Jk, !0),
        Rk = new Ck(Gk, Jk, !1),
        Sk = new Ck(Gk, [
            [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
            [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45,
                57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115
            ],
            [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
            [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115]
        ], !1),
        Tk = new Ck([104, 116, 116, 112, 115, 63, 58, 47, 47, 103, 111, 111, 103, 108, 101, 97, 100, 115, 92, 46, 103, 92,
            46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 92, 46, 110, 101, 116, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47
        ], [], !1),
        Uk = new Ck([104, 116, 116, 112, 115, 63, 58, 47, 47, 119, 119, 119, 92, 46, 103, 115, 116, 97, 116, 105, 99, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 106, 115, 47], [], !1),
        Vk = new Ck([104, 116, 116, 112, 115, 63, 58, 47, 47, 109, 105, 110, 116, 45, 109, 97, 100, 92, 46, 115, 97, 110, 100, 98, 111, 120, 92, 46, 103, 111, 111, 103, 108, 101, 92, 46, 99, 111, 109, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47, 102, 111, 114, 109, 97, 116, 115, 47], [], !1),
        Wk =
        new Ck([104, 116, 116, 112, 115, 63, 58, 47, 47, 118, 105, 100, 101, 111, 45, 97, 100, 45, 116, 101, 115, 116, 92, 46, 97, 112, 112, 115, 112, 111, 116, 92, 46, 99, 111, 109, 47], [], !1),
        Xk = new Ck(Hk, Ik, !1),
        Yk = new Ck([104, 116, 116, 112, 115, 63, 58, 47, 47, 112, 97, 103, 101, 97, 100, 50, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47], [], !1),
        Zk = new Ck(Dk, Kk, !1),
        $k = new Ck(Hk, Kk, !1),
        ob = {
            C: Lk,
            A: Mk,
            F: Nk,
            D: Ok,
            m: Pk,
            h: Qk,
            g: Rk,
            l: Sk,
            B: Tk,
            o: Uk,
            b: Vk,
            w: Wk,
            H: Xk,
            L: Yk,
            I: Zk,
            K: $k
        };
    var al = function() {
            this.b = -1
        },
        bl = new al;
    al.prototype.clear = function() {};
    var cl = function(a) {
        this.g = a
    };
    cl.prototype.b = function() {
        return this.g
    };
    var dl = function() {
        P.call(this);
        this.currentTime = 0
    };
    z(dl, P);
    var el = function(a, b) {
            this.message = a;
            this.b = b
        },
        fl = new el("Invalid usage of the API. Cause: {0}", 900),
        gl = new el("Failed to initialize ad playback element before starting ad playback.", 400),
        hl = new el("The provided {0} information: {1} is invalid.", 1101),
        il = function(a, b, c) {
            var d;
            d = b || null;
            if (!(d instanceof Vd)) {
                var e = a.b,
                    f = a.message,
                    g = jb(arguments, 2);
                if (0 < g.length)
                    for (var k = 0; k < g.length; k++) f = f.replace(new RegExp("\\{" + k + "\\}", "ig"), g[k]);
                e = new Vd("adPlayError", f, e);
                e.g = d;
                d = e
            }
            return d
        };
    var jl = function(a) {
        dl.call(this);
        this.currentTime = a.currentTime;
        if (!("currentTime" in a) || isNaN(a.currentTime)) throw il(hl, null, "content", "currentTime");
        this.g = a;
        this.b = new ef(250);
        this.h = new V(this);
        nj(this.h, this.b, "tick", this.l, !1, this)
    };
    z(jl, dl);
    jl.prototype.start = function() {
        this.b.start()
    };
    jl.prototype.J = function() {
        jl.R.J.call(this);
        this.h.N();
        this.b.N()
    };
    jl.prototype.l = function() {
        if ("currentTime" in this.g && !isNaN(this.g.currentTime)) {
            var a = this.currentTime;
            this.currentTime = this.g.currentTime;
            a != this.currentTime && this.dispatchEvent(new L("currentTimeUpdate"))
        } else this.dispatchEvent(new L("contentWrapperError")), ff(this.b)
    };
    var kl = function(a, b) {
        M.call(this, "adMetadata", a);
        this.g = b || null
    };
    z(kl, M);
    kl.prototype.o = function() {
        return this.g
    };
    var ll = function() {
        P.call(this);
        this.w = this.C = this.I = this.D = !1;
        this.g = 0;
        this.l = [];
        this.A = !1;
        this.L = this.K = Infinity;
        this.h = 0;
        this.m = new V(this);
        this.F = {}
    };
    z(ll, P);
    var nl = function(a, b) {
            null == b || a.D || (a.b = b, ml(a), a.D = !0)
        },
        pl = function(a) {
            null != a.b && a.D && (ol(a), a.D = !1, a.C = !1, a.w = !1, a.g = 0, a.l = [], a.A = !1)
        },
        ml = function(a) {
            ol(a);
            !(a.b instanceof P) && "ontouchstart" in document.documentElement && yj() ? (a.F = {
                touchstart: x(a.V, a),
                touchmove: x(a.U, a),
                touchend: x(a.T, a)
            }, nb(a.F, function(a, c) {
                this.b.addEventListener(c, a, !1)
            }, a)) : a.m.G(a.b, "click", a.O)
        },
        ol = function(a) {
            a.m.za(a.b, "click", a.O);
            nb(a.F, function(a, c) {
                this.b.removeEventListener(c, a, !1)
            }, a);
            a.F = {}
        };
    ll.prototype.V = function(a) {
        this.C = !0;
        this.g = a.touches.length;
        this.h && (window.clearTimeout(this.h), this.h = 0, this.I = !0);
        (this.A = ql(this, a.touches) || 1 != a.touches.length) ? this.L = this.K = Infinity: (this.K = a.touches[0].clientX, this.L = a.touches[0].clientY);
        rl(this, a.touches)
    };
    ll.prototype.U = function(a) {
        this.g = a.touches.length;
        if (!yj() || !zj(tj, 8) || Math.pow(a.changedTouches[0].clientX - this.K, 2) + Math.pow(a.changedTouches[0].clientY - this.L, 2) > Math.pow(5, 2)) this.w = !0
    };
    ll.prototype.T = function(a) {
        !this.C || 1 != this.g || this.w || this.I || this.A || !ql(this, a.changedTouches) || (this.h = window.setTimeout(x(this.M, this), 300));
        this.g = a.touches.length;
        0 == this.g && (this.w = this.C = !1, this.l = []);
        this.I = !1
    };
    ll.prototype.O = function() {
        this.M()
    };
    var rl = function(a, b) {
            a.l = [];
            D(b, function(a) {
                var b = this.l;
                a = a.identifier;
                cb(b, a) || b.push(a)
            }, a)
        },
        ql = function(a, b) {
            return $a(b, function(a) {
                return cb(this.l, a.identifier)
            }, a)
        };
    ll.prototype.M = function() {
        this.h = 0;
        this.dispatchEvent(new L("click"))
    };
    ll.prototype.J = function() {
        pl(this);
        this.m.N();
        this.m = null;
        ll.R.J.call(this)
    };
    var sl = function() {
        this.b = [];
        this.g = []
    };
    h = sl.prototype;
    h.qa = function() {
        return this.b.length + this.g.length
    };
    h.isEmpty = function() {
        return 0 == this.b.length && 0 == this.g.length
    };
    h.clear = function() {
        this.b = [];
        this.g = []
    };
    h.contains = function(a) {
        return cb(this.b, a) || cb(this.g, a)
    };
    h.X = function() {
        for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
        for (var c = this.g.length, b = 0; b < c; ++b) a.push(this.g[b]);
        return a
    };
    var tl = function() {},
        ul = {
            IMAGE: "Image",
            gg: "Flash",
            wd: "All"
        },
        vl = {
            hg: "Html",
            IFRAME: "IFrame",
            Ag: "Static",
            wd: "All"
        },
        wl = {
            ig: "IgnoreSize",
            vg: "SelectExactMatch",
            wg: "SelectNearMatch"
        },
        xl = {
            dg: "DisallowResize",
            ug: "ResizeSmaller"
        };
    var zl = function(a, b) {
            if (null == a || 0 >= a.width || 0 >= a.height) throw il(hl, null, "ad slot size", a.toString());
            this.g = a;
            this.b = null != b ? b : new tl;
            this.o = yl(vl, this.b.l) ? this.b.l : "All";
            this.l = yl(ul, this.b.h) ? this.b.h : "All";
            this.B = yl(wl, this.b.o) ? this.b.o : "SelectExactMatch";
            this.w = yl(xl, this.b.m) ? this.b.m : "DisallowResize";
            this.h = null != this.b.g ? this.b.g : [];
            this.m = v(this.b.b) && 0 < this.b.b && 100 >= this.b.b ? this.b.b : 90
        },
        Cl = function(a, b) {
            var c = [];
            D(b, function(a) {
                !Fa(a.b) && (isNaN(a.m) || isNaN(a.o) || a.o == a.m) && Al(this,
                    a) ? c.push(a) : (a = Bl(this, a), null != a && !Fa(a.b) && c.push(a))
            }, a);
            return c
        },
        Al = function(a, b) {
            var c;
            if (c = "Flash" != b.g() || Rf) {
                if (c = "All" == a.o || a.o == b.C) c = b.g(), c = null != c ? "All" == a.l || a.l == c : !0;
                c && (c = b.H, c = 0 == a.h.length ? !0 : null != c ? 0 <= Xa(a.h, c) : !1)
            }
            if (c) {
                c = b.h;
                var d;
                (d = "IgnoreSize" == a.B) || (d = a.g, d = d == c ? !0 : d && c ? d.width == c.width && d.height == c.height : !1);
                if (d) c = !0;
                else {
                    if (d = "SelectNearMatch" == a.B) "ResizeSmaller" != a.w || c.width <= a.g.width && c.height <= a.g.height || (d = a.g, d = Math.min(d.width / c.width, d.height / c.height),
                        c = new A(d * c.width, d * c.height)), d = c.width, c = c.height, d = d > a.g.width || c > a.g.height || d < a.m / 100 * a.g.width || c < a.m / 100 * a.g.height ? !1 : !0;
                    c = d
                }
            } else c = !1;
            return c
        },
        Bl = function(a, b) {
            var c = b.l;
            return null != c ? bb(c, function(a) {
                return Al(this, a)
            }, a) : null
        },
        yl = function(a, b) {
            var c;
            if (c = null != b) a: {
                for (var d in a)
                    if (a[d] == b) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        };
    var Dl = function(a) {
        var b = {};
        D(a.split(","), function(a) {
            var d = a.split("=");
            2 == d.length && (a = Ga(d[0]), d = Ga(d[1]), 0 < a.length && (b[a] = d))
        });
        return b
    };
    var El = function() {
        this.m = 1;
        this.h = -1;
        this.b = 1;
        this.o = this.l = 0;
        this.g = !1
    };
    h = El.prototype;
    h.Ae = function() {
        return this.m
    };
    h.xe = function() {
        return this.h
    };
    h.ve = function() {
        return this.b
    };
    h.ye = function() {
        return this.l
    };
    h.ze = function() {
        return this.o
    };
    h.we = function() {
        return this.g
    };
    var Fl = function(a) {
        this.b = a.content;
        this.B = a.contentType;
        this.h = a.size;
        this.o = a.masterSequenceNumber;
        this.C = a.resourceType;
        this.m = a.sequenceNumber;
        this.H = a.adSlotId;
        this.l = [];
        a = a.backupCompanions;
        null != a && (this.l = Za(a, function(a) {
            return new Fl(a)
        }))
    };
    Fl.prototype.getContent = function() {
        return this.b
    };
    Fl.prototype.g = function() {
        return this.B
    };
    Fl.prototype.A = function() {
        return this.h.width
    };
    Fl.prototype.w = function() {
        return this.h.height
    };
    var X = function(a) {
        this.b = a
    };
    X.prototype.g = function() {
        return this.b.adId
    };
    var Gl = function(a) {
        return a.b.adQueryId
    };
    h = X.prototype;
    h.Ce = function() {
        return this.b.adSystem
    };
    h.Le = function() {
        return this.b.adWrapperIds
    };
    h.Me = function() {
        return this.b.adWrapperSystems
    };
    h.Ne = function() {
        return this.b.linear
    };
    h.Oe = function() {
        return this.b.skippable
    };
    h.Ee = function() {
        return this.b.contentType
    };
    h.Sd = function() {
        return this.b.description
    };
    h.Td = function() {
        return this.b.title
    };
    h.Bb = function() {
        return this.b.duration
    };
    h.Ke = function() {
        return this.b.width
    };
    h.Fe = function() {
        return this.b.height
    };
    h.Je = function() {
        return this.b.uiElements
    };
    h.Ge = function() {
        return this.b.minSuggestedDuration
    };
    h.Be = function() {
        var a = this.b.adPodInfo,
            b = new El;
        b.l = a.podIndex;
        b.o = a.timeOffset;
        b.m = a.totalAds;
        b.b = a.adPosition;
        b.g = a.isBumper;
        b.h = a.maxDuration;
        return b
    };
    h.De = function(a, b, c) {
        var d = Za(this.b.companions, function(a) {
            return new Fl(a)
        });
        return Cl(new zl(new A(a, b), c), d)
    };
    h.He = function() {
        return Dl(Ra(this.b.traffickingParameters))
    };
    h.Ie = function() {
        return this.b.traffickingParameters
    };
    var Hl = function() {};
    h = Hl.prototype;
    h.disableClickThrough = !1;
    h.mimeTypes = null;
    h.restoreCustomPlaybackStateOnAdBreakComplete = !1;
    h.useStyledLinearAds = !1;
    h.useVideoAdUi = !0;
    var Il = function(a) {
        if (Fa(Ra(a))) return null;
        var b = a.match(/^https?:\/\/[^\/]*youtu\.be\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        b = a.match(/^https?:\/\/[^\/]*youtube.com\/video\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        b = a.match(/^https?:\/\/[^\/]*youtube.com\/watch\/([a-zA-Z0-9_-]+)$/);
        if (null != b && 2 == b.length) return b[1];
        a = (new Bd(a)).b;
        return Td(a, "v") ? a.get("v").toString() : Td(a, "video_id") ? a.get("video_id").toString() : null
    };
    var Jl = function(a) {
        this.g = 0;
        this.h = a || 100;
        this.b = []
    };
    h = Jl.prototype;
    h.get = function(a) {
        a = Kl(this, a);
        return this.b[a]
    };
    h.set = function(a, b) {
        a = Kl(this, a);
        this.b[a] = b
    };
    h.qa = function() {
        return this.b.length
    };
    h.isEmpty = function() {
        return 0 == this.b.length
    };
    h.clear = function() {
        this.g = this.b.length = 0
    };
    h.X = function() {
        for (var a = this.qa(), b = this.qa(), c = [], a = this.qa() - a; a < b; a++) c.push(this.get(a));
        return c
    };
    h.ia = function() {
        for (var a = [], b = this.qa(), c = 0; c < b; c++) a[c] = c;
        return a
    };
    var Kl = function(a, b) {
        if (b >= a.b.length) throw Error("Out of bounds exception");
        return a.b.length < a.h ? b : (a.g + Number(b)) % a.h
    };
    var Ll = function() {
        P.call(this)
    };
    z(Ll, P);
    var Ml = {
        ag: "beginFullscreen",
        CLICK: "click",
        eg: "end",
        fg: "endFullscreen",
        ERROR: "error",
        LOADED: "loaded",
        kg: "mediaLoadTimeout",
        ac: "pause",
        tg: "play",
        yg: "skip",
        zg: "skipShown",
        xg: "shareClicked",
        ec: "start",
        Dg: "timeUpdate",
        bg: "cardsStateChange",
        Cg: "timedMetadata",
        Mg: "volumeChange"
    };
    Ll.prototype.dd = function() {
        return !0
    };
    Ll.prototype.fa = ba;
    var Nl = function(a) {
        P.call(this);
        this.b = a;
        this.T = "";
        this.A = -1;
        this.U = new Jl(4);
        this.h = 0;
        this.O = this.l = this.M = this.D = !1;
        this.K = this.Da();
        this.I = this.Fa();
        this.V = 15E3;
        this.L = !1
    };
    z(Nl, Ll);
    h = Nl.prototype;
    h.Cc = function() {
        return Ya(rb(dk), function(a) {
            return !Fa(this.b.canPlayType(a))
        }, this)
    };
    h.ud = function(a) {
        this.V = 0 < a.b ? a.b : 15E3
    };
    h.gd = function(a) {
        this.b.seekable.length ? this.b.seekable.end(0) > this.A && (this.b.currentTime = this.A, a()) : setTimeout(x(this.gd, this, a), 100)
    };
    h.rd = function() {
        this.T = this.b.currentSrc;
        this.b.ended ? this.A = -1 : this.A = this.b.currentTime
    };
    h.od = function(a) {
        if (0 <= this.A) {
            var b = this;
            this.b.addEventListener("loadedmetadata", function d() {
                b.gd(a);
                b.b.removeEventListener("loadedmetadata", d, !1)
            }, !1);
            this.b.src = this.T;
            this.b.load()
        }
    };
    h.Xc = function(a, b) {
        Ol(this);
        b && N.ra() && w(this.b.b) && this.b.b(b);
        this.b.src = a;
        this.b.load()
    };
    h.Ua = function(a) {
        this.b.volume = a
    };
    h.Vc = function() {
        return this.b.volume
    };
    h.Ta = function() {
        this.L = !1;
        gf(this.b.play, 0, this.b);
        this.F || (this.F = gf(this.Md, this.V, this))
    };
    h.Yc = function() {
        this.L = !0;
        this.b.pause()
    };
    h.Wc = function() {
        return this.b.paused ? yj() || of ? this.b.currentTime < this.b.duration : !0 : !1
    };
    h.yc = function() {
        xj() && this.b.webkitDisplayingFullscreen && this.b.webkitExitFullscreen()
    };
    h.Fa = function() {
        return vk(this.b)
    };
    h.Ga = function(a) {
        this.b.currentTime = a
    };
    h.ga = function() {
        return this.b.currentTime
    };
    h.Sa = function() {
        return isNaN(this.b.duration) ? -1 : this.b.duration
    };
    h.Va = function() {
        return this.b.ended
    };
    h.Da = function() {
        return new A(this.b.offsetWidth, this.b.offsetHeight)
    };
    h.J = function() {
        this.Ea();
        this.b = null;
        Nl.R.J.call(this)
    };
    h.Zc = function() {
        this.Ea();
        this.g = new V(this);
        this.g.G(this.b, qj, this.Y);
        this.g.G(this.b, "canplay", this.zf);
        this.g.G(this.b, "ended", this.Bf);
        this.g.G(this.b, "webkitbeginfullscreen", this.Eb);
        this.g.G(this.b, "webkitendfullscreen", this.$c);
        this.g.G(this.b, "pause", this.Ef);
        this.g.G(this.b, "playing", this.Gf);
        this.g.G(this.b, "timeupdate", this.If);
        this.g.G(this.b, "volumechange", this.Mf);
        this.g.G(this.b, "error", this.jd);
        this.g.G(this.b, Cj() || yj() && (!yj() || !zj(tj, 8)) ? "loadeddata" : "canplay", this.Cf);
        this.w =
            new ll;
        this.g.G(this.w, "click", this.jf);
        nl(this.w, this.b);
        this.C = new ef(1E3);
        this.g.G(this.C, "tick", this.kf);
        this.C.start()
    };
    h.Ea = function() {
        null != this.w && (pl(this.w), this.w = null);
        null != this.C && this.C.N();
        null != this.g && (this.g.N(), this.g = null);
        Ol(this)
    };
    var Ol = function(a) {
        a.M = !1;
        a.l = !1;
        a.D = !1;
        a.h = 0;
        a.O = !1;
        a.U.clear();
        Pl(a);
        Yd(a.m)
    };
    Nl.prototype.Y = function(a) {
        this.dispatchEvent(a.type)
    };
    var Ql = function(a) {
        a.l || (a.l = !0, Pl(a), a.dispatchEvent("start"), !(xj() && !vj() || Ob && (!Ob || !zj(uj, 4)) || !N.sa() && Bj()) || !Ob || Ob && zj(uj, 3) || xj() && (!yj() || !zj(tj, 4)) || a.Eb())
    };
    h = Nl.prototype;
    h.zf = function() {
        var a;
        if (a = pf) a = E, a = !(a && (B(a, "SMART-TV") || B(a, "SmartTV")));
        a && !this.O && (this.Ga(.001), this.O = !0)
    };
    h.Cf = function() {
        this.M || (this.M = !0, this.dispatchEvent("loaded"))
    };
    h.Gf = function() {
        this.dispatchEvent("play");
        yj() || Cj() || Ql(this)
    };
    h.If = function() {
        if (!this.l && (yj() || Cj())) {
            if (0 >= this.ga()) return;
            if (Cj() && this.Va() && 1 == this.Sa()) {
                this.jd();
                return
            }
            Ql(this)
        }
        if (yj() || Aj()) {
            if (1.5 < this.ga() - this.h) {
                this.D = !0;
                this.Ga(this.h);
                return
            }
            this.D = !1;
            this.ga() > this.h && (this.h = this.ga())
        }
        var a = this.U;
        a.b[a.g] = this.b.currentTime;
        a.g = (a.g + 1) % a.h;
        this.dispatchEvent("timeUpdate")
    };
    h.Mf = function() {
        this.dispatchEvent("volumeChange")
    };
    h.Ef = function() {
        var a;
        this.l && yj() && !this.L && 2 > Rl(this) ? (this.m = new ef(250), this.g.G(this.m, "tick", this.yf), this.m.start(), a = !0) : a = !1;
        a || this.dispatchEvent("pause")
    };
    h.Bf = function() {
        var a = Oj(136961002),
            b = !0;
        if (yj() || Aj() || a && Ob) b = this.h >= this.b.duration - 1.5;
        !this.D && b && this.dispatchEvent("end")
    };
    h.Eb = function() {
        this.dispatchEvent("beginFullscreen")
    };
    h.$c = function() {
        this.dispatchEvent("endFullscreen")
    };
    h.jd = function() {
        Pl(this);
        this.dispatchEvent("error")
    };
    h.jf = function() {
        this.dispatchEvent("click")
    };
    h.kf = function() {
        var a = this.Da(),
            b = this.Fa();
        if (a.width != this.K.width || a.height != this.K.height) !this.I && b ? this.Eb() : this.I && !b && this.$c(), this.K = a, this.I = b
    };
    h.Md = function() {
        if (!this.l) {
            try {
                qk(nk.getInstance(), 16)
            } catch (a) {}
            Ol(this);
            this.dispatchEvent("mediaLoadTimeout")
        }
    };
    h.yf = function() {
        if (this.Va() || !this.Wc()) Yd(this.m);
        else {
            var a = this.b.duration - this.b.currentTime,
                b = Rl(this);
            0 < b && (2 <= b || 2 > a) && (Yd(this.m), this.Ta())
        }
    };
    var Rl = function(a) {
            var b;
            a: {
                for (b = a.b.buffered.length - 1; 0 <= b;) {
                    if (a.b.buffered.start(b) <= a.b.currentTime) {
                        b = a.b.buffered.end(b);
                        break a
                    }
                    b--
                }
                b = 0
            }
            return b - a.b.currentTime
        },
        Pl = function(a) {
            a.F && (l.clearTimeout(a.F), a.F = null)
        };
    var Sl = function() {
        P.call(this);
        this.b = new V(this);
        var a = ae(N);
        if (a) {
            a: {
                if (ub(a.b, "videoElementMockDuration") && (a = a.b.videoElementMockDuration, v(a))) break a;a = NaN
            }
            this.duration = a
        }
    };
    z(Sl, P);
    var Tl = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new Sl;
        c.canPlayType = function(c) {
            return cb(a, c) ? "probably" : cb(b, c) ? "maybe" : ""
        };
        c.width = 0;
        c.height = 0;
        c.offsetWidth = 0;
        c.offsetHeight = 0;
        return c
    };
    h = Sl.prototype;
    h.currentTime = 0;
    h.duration = NaN;
    h.volume = 1;
    h.src = "";
    h.Ba = null;
    h.fb = null;
    h.J = function() {
        this.b.N()
    };
    h.Lf = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.fb && (this.fb.innerText = b);
        c && this.Ba && (this.Ba.style.backgroundColor = c)
    };
    H && Yb(8);
    var Ul = function() {
        throw Error("Do not instantiate directly");
    };
    Ul.prototype.b = null;
    Ul.prototype.getContent = function() {
        return this.content
    };
    Ul.prototype.toString = function() {
        return this.content
    };
    var Vl = function() {
        Ul.call(this)
    };
    z(Vl, Ul);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.b = d);
            return e
        }
    })(Vl);
    var Wl = {},
        Xl = function(a, b) {
            var c = "key_" + a + ":" + b,
                d = Wl[c];
            if (void 0 === d || 0 > d) Wl[c] = 0;
            else if (0 == d) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
        };
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e) return "";
            e = new b(e);
            void 0 !== d && (e.b = d);
            return e
        }
    })(Vl);
    Xl("a", "");
    Xl("a", "redesign2014q4");
    Xl("b", "");
    Xl("b", "redesign2014q4");
    var Yl = function(a, b, c) {
        if (null == a || !oc(dc(a), a)) throw il(hl, null, "containerElement", "element");
        this.o = a;
        this.g = this.b = null;
        this.l = b;
        this.m = c || !1;
        this.h = null;
        this.b = lc("div", {
            style: "display:none;"
        });
        var d;
        a = ae(N);
        if (be(a, "useVideoElementMock")) {
            a = Tl();
            b = lc("div", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (d in a) b[d] = a[d];
            a.Ba = lc("div", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.fb = lc("p", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.Ba.appendChild(a.fb);
            b.appendChild(a.Ba);
            a.b.G(a, ["loadeddata", "playing", "pause", "ended"], a.Lf);
            d = b
        } else d = lc("video", {
            style: "background-color:#000;position:absolute;width:100%;height:100%;",
            title: "Advertisement"
        });
        d.setAttribute("webkit-playsinline", !0);
        this.g = d;
        this.o.appendChild(this.b);
        this.b.appendChild(this.g);
        this.l && (d = lc("div", {
            id: this.l,
            style: "display:none;background-color:#000;position:absolute;width:100%;height:100%;"
        }), this.b.appendChild(d));
        this.m && (this.h = lc("div", {
                style: "position:absolute;width:100%;height:100%;"
            }),
            this.b.appendChild(this.h))
    };
    z(Yl, Wd);
    Yl.prototype.J = function() {
        nc(this.b);
        Yl.R.J.call(this)
    };
    Yl.prototype.show = function() {
        Zl(this.b, !0)
    };
    var Zl = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var am = function(a) {
        P.call(this);
        this.L = "ima-chromeless-video";
        var b = null;
        null != a && (u(a) ? this.L = a : b = a);
        this.M = new V(this);
        this.m = null;
        this.l = !1;
        this.aa = this.Da();
        this.$ = this.Fa();
        this.F = -1;
        this.U = !1;
        this.w = -1;
        this.g = this.T = this.I = null;
        this.da = "";
        this.h = !1;
        this.Y = null != b;
        this.ca = this.K = this.V = this.b = null;
        this.A = void 0;
        this.C = this.ba = null;
        this.D = 0;
        this.Y ? (this.h = !0, this.b = b, this.A = 2) : (a = x(this.Nd, this), $l ? a() : (db.push(a), a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api", b =
            document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)))
    };
    z(am, Ll);
    var bm = {
            el: "adunit",
            controls: 0,
            html5: 1,
            playsinline: 1,
            ps: "gvn",
            showinfo: 0
        },
        db = [],
        $l = !1;
    h = am.prototype;
    h.ud = function(a) {
        this.g = a
    };
    h.Xc = function(a, b) {
        null !== a && (this.da = a, this.h ? cm(this, a, b) : (this.I = a, this.T = b))
    };
    h.Ua = function(a) {
        this.Y ? this.dispatchEvent("volumeChange") : this.h ? (a = Math.min(Math.max(100 * a, 0), 100), this.b.setVolume(a), this.w = -1, this.dispatchEvent("volumeChange")) : this.w = a
    };
    h.Vc = function() {
        return this.h ? this.b.getVolume() / 100 : this.w
    };
    h.Ta = function() {
        if (!Fa(Ra(this.da))) {
            if (!this.l) {
                dm(this);
                var a = 15E3;
                null != this.g && 0 < this.g.b && (a = this.g.b);
                this.ka = gf(this.pa, a, this)
            }
            this.h ? (this.U = !1, !this.l && this.g && this.g.g ? this.b.loadVideoByPlayerVars(this.ba) : this.b.playVideo()) : this.U = !0
        }
    };
    h.Yc = function() {
        this.h && this.l && this.b.pauseVideo()
    };
    h.Wc = function() {
        return this.h ? 2 == this.b.getPlayerState(this.A) : !1
    };
    h.yc = function() {};
    h.Fa = function() {
        var a = document.getElementById(this.L);
        return a ? vk(a) : !1
    };
    h.Ga = function(a) {
        this.h ? this.b.seekTo(a, !1) : this.F = a
    };
    h.ga = function() {
        return this.h ? this.b.getCurrentTime(this.A) : -1
    };
    h.Sa = function() {
        return this.h && this.l ? this.b.getDuration(this.A) : -1
    };
    h.Cc = function() {
        return rb(dk)
    };
    h.Va = function() {
        return this.h ? 0 == this.b.getPlayerState(this.A) : !1
    };
    h.Da = function() {
        var a = document.getElementById(this.L);
        return a ? new A(a.offsetWidth, a.offsetHeight) : new A(0, 0)
    };
    h.dd = function() {
        return this.h ? 1 == this.b.getPlayerState(this.A) : !1
    };
    h.lf = function() {
        var a = this.Da(),
            b = this.Fa();
        if (a.width != this.aa.width || a.height != this.aa.height) !this.$ && b ? this.dispatchEvent("beginFullscreen") : this.$ && !b && this.dispatchEvent("endFullscreen"), this.aa = a, this.$ = b
    };
    h.Zc = function() {
        this.V = x(this.kd, this);
        this.K = x(this.Ib, this);
        this.ca = x(this.ld, this);
        this.ma = x(this.Hf, this);
        this.Y && (this.b.addEventListener("onAdStateChange", this.K), this.b.addEventListener("onReady", this.V), this.b.addEventListener("onStateChange", this.K), this.b.addEventListener("onVolumeChange", this.ca), this.b.addEventListener("onSharePanelOpened", this.ma));
        this.O = new ef(1E3);
        this.M.G(this.O, "tick", this.lf);
        this.O.start()
    };
    h.Ea = function() {
        this.Y && (this.b.removeEventListener("onAdStateChange", this.K), this.b.removeEventListener("onReady", this.V), this.b.removeEventListener("onStateChange", this.K), this.b.removeEventListener("onVolumeChange", this.ca), this.b.removeEventListener("onSharePanelOpened", this.ma));
        null != this.O && this.O.N()
    };
    h.Nd = function() {
        var a = this.L,
            b = {
                playerVars: yb(bm),
                events: {
                    cardstatechange: x(this.Af, this),
                    onError: x(this.Ff, this),
                    onReady: x(this.kd, this),
                    onAdStateChange: x(this.Ib, this),
                    onStateChange: x(this.Ib, this),
                    onVolumeChange: x(this.ld, this)
                }
            },
            c = aa("YT");
        this.b = null != c && null != c.Player ? new c.Player(a, b) : null
    };
    var cm = function(a, b, c) {
        var d = {
            autoplay: "1"
        };
        if (null != a.g) {
            var e = a.g.o;
            null != e && (d.agcid = e);
            e = a.g.h;
            null != e && (d.adformat = e);
            e = a.g.l;
            null != e && (d.ad_query_id = e);
            (e = a.g.m) && (d.cta_conversion_urls = e);
            a.g.w && (d.is_pharma = 1);
            d.iv_load_policy = a.g.A ? 1 : 3;
            a.g.B && (d.noiba = 1);
            a.g.H && (d.utpsa = 1);
            a.g.C && (d.autoplay = "1")
        }
        null != b ? jk(ek, b) ? (e = b.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), e = null != e && 1 < e.length ? e[1] : null) : e = null != b && jk(fk, b) ? Il(b) : null : e = null;
        null === e ? d.url_encoded_third_party_media = "url=" + encodeURIComponent(b) +
            "&type=" + encodeURIComponent(null === c ? "" : c) : d.videoId = e;
        !N.sa() && Oj(41351017) && (d.enabled_engage_types = "3,4,5");
        a.l = !1;
        a.g && a.g.g ? (a.ba = d, a.b.preloadVideoByPlayerVars(a.ba)) : a.b.cueVideoByPlayerVars(d);
        a.dispatchEvent("loaded")
    };
    h = am.prototype;
    h.Ff = function() {
        this.dispatchEvent("error")
    };
    h.kd = function() {
        this.h = !0;
        this.C && this.fa(this.C.Vf, this.C.Ld, this.C.Uf, this.C.Qd); - 1 != this.w && (this.Ua(this.w), this.w = -1);
        null != this.I && (cm(this, this.I, this.T), this.T = this.I = null); - 1 != this.F && (this.Ga(this.F), this.F = -1);
        this.U && this.Ta()
    };
    h.Af = function() {
        this.dispatchEvent("cardsStateChange")
    };
    h.Ib = function(a) {
        switch (a.data) {
            case 0:
                this.l ? this.dispatchEvent("end") : this.dispatchEvent("error");
                break;
            case 1:
                this.l || (dm(this), this.l = !0, this.D = 0, this.dispatchEvent("start"));
                this.dispatchEvent("play");
                em(this);
                this.m = new ef(100);
                this.M.G(this.m, "tick", this.la);
                this.m.start();
                break;
            case 2:
                this.dispatchEvent("pause"), em(this)
        }
    };
    h.ld = function() {
        this.dispatchEvent("volumeChange")
    };
    h.Hf = function() {
        this.dispatchEvent("shareClicked")
    };
    var em = function(a) {
            a.M.za(a.m, "tick", a.la);
            null != a.m && (ff(a.m), a.m = null)
        },
        dm = function(a) {
            null != a.ka && l.clearTimeout(a.ka)
        };
    am.prototype.la = function() {
        if (lf || Aj()) {
            if (1.5 < this.ga() - this.D) {
                this.h && this.b.seekTo(this.D, !0);
                return
            }
            this.ga() > this.D && (this.D = this.ga())
        }
        this.dispatchEvent("timeUpdate")
    };
    am.prototype.pa = function() {
        this.dispatchEvent("mediaLoadTimeout")
    };
    am.prototype.fa = function(a, b, c, d) {
        if (b || c) this.h ? this.b.addInfoCardXml(a, b, c, d) : this.C = {
            Vf: a,
            Ld: b,
            Uf: c,
            Qd: d
        }
    };
    am.prototype.J = function() {
        em(this);
        dm(this);
        this.Ea();
        this.h = !1;
        this.M.N();
        this.F = -1;
        this.T = null;
        this.U = !1;
        this.I = null;
        this.w = -1;
        this.V = this.b = this.g = null;
        this.l = !1;
        this.da = "";
        am.R.J.call(this)
    };
    r("onYouTubeIframeAPIReady", function() {
        $l = !0;
        D(db, function(a) {
            a()
        });
        eb()
    }, window);
    var fm = function(a) {
        P.call(this);
        this.b = a || "goog_" + Ua++;
        this.h = []
    };
    z(fm, P);
    fm.prototype.g = !1;
    fm.prototype.connect = function() {
        for (this.g = !0; 0 != this.h.length;) {
            var a = this.h.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    var zk = function(a, b, c, d) {
            a.g ? a.sendMessage(b, c, d) : a.h.push({
                name: b,
                type: c,
                data: d
            })
        },
        gm = function(a, b, c, d, e) {
            L.call(this, a);
            this.W = b;
            this.P = c;
            this.Ra = d;
            this.md = e
        };
    z(gm, L);
    gm.prototype.toString = function() {
        return ""
    };
    var hm = function(a, b) {
        fm.call(this, b);
        this.l = a;
        this.ea = null;
        this.m = new V(this);
        this.m.G(J(), "message", this.w)
    };
    z(hm, fm);
    var im = function(a) {
        if (null == a || !u(a) || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return ee(a)
        } catch (b) {
            return null
        }
    };
    hm.prototype.sendMessage = function(a, b, c) {
        null != this.ea && null != this.ea.postMessage && this.ea.postMessage(jm(this, a, b, c), "*");
        null != this.ea && null == this.ea.postMessage && qk(nk.getInstance(), 11)
    };
    hm.prototype.J = function() {
        this.m.N();
        hm.R.J.call(this)
    };
    hm.prototype.w = function(a) {
        a = a.g;
        var b = im(a.data);
        if (km(this, b)) {
            if (null == this.ea) this.ea = a.source, this.g || this.connect();
            else if (this.ea != a.source) return;
            km(this, b) && this.dispatchEvent(new gm(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var jm = function(a, b, c, d) {
            var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.b;
            e.channel = a.l;
            return "ima://" + ge(e)
        },
        km = function(a, b) {
            if (null == b) return !1;
            var c = b.channel;
            if (null == c || c != a.l) return !1;
            c = b.sid;
            return null == c || "*" != a.b && c != a.b ? !1 : !0
        };
    var lm = function(a, b) {
        P.call(this);
        this.l = a;
        this.h = b;
        this.b = {};
        this.g = new V(this);
        this.g.G(J(), "message", this.m)
    };
    z(lm, P);
    var mm = function(a, b) {
            var c = b.g;
            a.b.hasOwnProperty(c) && zk(a.b[c], b.type, b.W, b.P)
        },
        om = function(a, b, c, d) {
            a.b.hasOwnProperty(b) || (c = new hm(b, c), a.g.G(c, a.l, function(a) {
                this.dispatchEvent(new nm(a.type, a.W, a.P, a.Ra, a.md, b))
            }), c.ea = d, c.connect(), a.b[b] = c)
        };
    lm.prototype.J = function() {
        this.g.N();
        for (var a in this.b) Yd(this.b[a]);
        lm.R.J.call(this)
    };
    lm.prototype.m = function(a) {
        a = a.g;
        var b = im(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.h && !this.b.hasOwnProperty(c)) {
                var d = b.sid;
                om(this, c, d, a.source);
                this.dispatchEvent(new nm(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };
    var nm = function(a, b, c, d, e, f) {
        gm.call(this, a, b, c, d, e);
        this.g = f
    };
    z(nm, gm);
    var qm = function() {
        var a = aa("google.ima.gptProxyInstance", J());
        if (null != a) return a;
        V.call(this);
        this.h = new lm("gpt", !0);
        Xd(this, ka(Yd, this.h));
        this.G(this.h, "gpt", this.m);
        this.b = null;
        pm() || J().top === J() || (this.b = new lm("gpt", !1), Xd(this, ka(Yd, this.b)), this.G(this.b, "gpt", this.o))
    };
    z(qm, V);
    var pm = function() {
            return !!aa("googletag.cmd", J())
        },
        rm = function() {
            var a = aa("googletag.console", J());
            return null != a ? a : null
        };
    qm.prototype.m = function(a) {
        var b = a.md,
            c = "//imasdk.googleapis.com".match(sd),
            b = b.match(sd);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.b) om(this.b, a.g, a.Ra, J().parent), null != this.b && mm(this.b, a);
            else if (c = a.P, null != c && q(c.scope)) {
            var b = c.scope,
                c = c.args,
                d;
            if ("proxy" == b) c = a.W, "isGptPresent" == c ? d = pm() : "isConsolePresent" == c && (d = null != rm());
            else if (pm())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.W;
                    var e, f = J().googletag;
                    if (null != f && null != f[b] && (f = f[b](), null != f && (d = f[d], null != d))) try {
                        e = d.apply(f, c)
                    } catch (g) {}
                    d =
                        e
                } else if ("console" == b) {
                if (f = a.W, e = rm(), null != e && (f = e[f], null != f)) try {
                    f.apply(e, c)
                } catch (g) {}
            } else if (null === b) {
                e = a.W;
                d = J();
                if (cb(["googleGetCompanionAdSlots", "googleSetCompanionAdContents"], e) && (e = d[e], null != e)) try {
                    f = e.apply(d, c)
                } catch (g) {}
                d = f
            }
            q(d) && (a.P.returnValue = d, mm(this.h, a))
        }
    };
    qm.prototype.o = function(a) {
        mm(this.h, a)
    };
    var sm = function(a, b, c, d, e, f, g, k, m, p, t) {
        this.h = a;
        this.l = m;
        this.o = b;
        this.m = c;
        this.B = g;
        this.w = p;
        this.A = d;
        this.H = e;
        this.C = t;
        this.b = f;
        this.g = k
    };
    var um = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, p, t, C) {
                if ("%" == p) return "%";
                var I = c.shift();
                if ("undefined" == typeof I) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = I;
                return tm[p].apply(null, arguments)
            })
        },
        tm = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Qa(" ", Number(c) - a.length) : Qa(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f;
                f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Qa(" ", a) : f + Qa(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, k) {
                return tm.f(parseInt(a,
                    10), b, c, d, 0, f, g, k)
            }
        };
    tm.i = tm.d;
    tm.u = tm.d;
    var xm = function(a, b) {
        P.call(this);
        this.l = new V(this);
        this.C = !1;
        this.D = "goog_" + Ua++;
        this.w = new md;
        var c = this.D,
            d = N.ra() ? vm() + um("//imasdk.googleapis.com/js/core/admob/bridge_%s.html", N.xb()) : vm() + um("//imasdk.googleapis.com/js/core/bridge3.126.0_%s.html", N.xb()),
            e;
        a: {
            var f = window;
            try {
                do {
                    try {
                        if (0 == f.location.href.indexOf(d) || 0 == f.document.referrer.indexOf(d)) {
                            e = !0;
                            break a
                        }
                    } catch (g) {}
                    f = f.parent
                } while (f != f.top)
            } catch (g) {}
            e = !1
        }
        e && (d += "?f=" + c);
        c = lc("iframe", {
            src: d + "#" + c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        oj(this.l, c, "load", this.Rd, void 0);
        a.appendChild(c);
        this.g = c;
        this.m = wm(this);
        this.A = b;
        this.b = this.A.g;
        this.h = null;
        this.l.G(this.m, "mouse", this.F);
        this.l.G(this.m, "touch", this.Zd);
        null != this.b && (this.l.G(this.m, "displayContainer", this.Xd), this.l.G(this.m, "videoDisplay", this.Yd), this.l.G(this.b, rb(Ml), this.Jb));
        c = J();
        d = aa("google.ima.gptProxyInstance", c);
        null == d && (d = new qm, r("google.ima.gptProxyInstance", d, c))
    };
    z(xm, P);
    var wm = function(a, b) {
        var c = b || "*",
            d = a.w.get(c);
        null == d && (d = new hm(a.D, c), a.C && (d.ea = pc(a.g), d.connect()), a.w.set(c, d));
        return d
    };
    xm.prototype.J = function() {
        this.l.N();
        null !== this.h && (this.h.N(), this.h = null);
        ld(this.w.Aa(!1), function(a) {
            a.N()
        });
        this.w.clear();
        nc(this.g);
        xm.R.J.call(this)
    };
    var vm = function() {
        return "https:" == document.location.protocol ? "https:" : "http:"
    };
    xm.prototype.F = function(a) {
        var b = a.P,
            c = Ac(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.W, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        if (!pf || yj() || 0 == document.webkitIsFullScreen) this.g.blur(), window.focus();
        this.g.dispatchEvent(d)
    };
    var ym = function(a, b) {
        var c = Ac(a.g),
            d = Za(b, function(a) {
                return document.createTouch(window, this.g, a.identifier, a.pageX + c.x, a.pageY + c.y, a.screenX, a.screenY)
            }, a);
        return document.createTouchList.apply(document, d)
    };
    h = xm.prototype;
    h.Zd = function(a) {
        var b = a.P,
            c = Ac(this.g),
            d = document.createEvent("TouchEvent");
        d.initTouchEvent(a.W, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, ym(this, b.touches), ym(this, b.targetTouches), ym(this, b.changedTouches), b.scale, b.rotation);
        this.g.dispatchEvent(d)
    };
    h.Yd = function(a) {
        if (null != this.b) {
            var b = a.P;
            switch (a.W) {
                case "startTracking":
                    this.b.Zc();
                    break;
                case "stopTracking":
                    this.b.Ea();
                    break;
                case "exitFullscreen":
                    this.b.yc();
                    break;
                case "play":
                    this.b.Ta();
                    break;
                case "pause":
                    this.b.Yc();
                    break;
                case "load":
                    this.b.Xc(b.videoUrl, b.mimeType);
                    break;
                case "setCurrentTime":
                    this.b.Ga(b.currentTime);
                    break;
                case "setPlaybackOptions":
                    a = b.playbackOptions;
                    this.b.ud(new sm(a.adFormat, a.adSenseAgcid, a.ctaAnnotationTrackingEvents, a.showAnnotations, a.viewCountsDisabled, a.loadVideoTimeout,
                        a.ibaDisabled, a.enablePreloading, a.adQemId, a.isPharma, a.useAutoplayFlag));
                    break;
                case "setVolume":
                    this.b.Ua(b.volume)
            }
        }
    };
    h.Jb = function(a) {
        var b = {};
        switch (a.type) {
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.b.Va();
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.b.ga();
                b.duration = this.b.Sa();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.b.Vc();
                break;
            default:
                return
        }
        zk(this.m, "videoDisplay", a, b)
    };
    h.Xd = function(a) {
        switch (a.W) {
            case "showVideo":
                null != this.h ? pl(this.h) : (this.h = new ll, this.l.G(this.h, "click", this.Kf));
                nl(this.h, zm(this.A));
                a = this.A;
                null != a.b && a.b.show();
                break;
            case "hide":
                null !== this.h && (this.h.N(), this.h = null), a = this.A, null != a.b && Zl(a.b.b, !1)
        }
    };
    h.Kf = function() {
        zk(this.m, "displayContainer", "videoClick")
    };
    h.Rd = function() {
        ld(this.w.Aa(!1), function(a) {
            a.ea = pc(this.g);
            a.connect()
        }, this);
        this.C = !0
    };
    var Am = function(a, b, c, d, e) {
        if (!(e || null != a && oc(dc(a), a))) throw il(hl, null, "containerElement", "element");
        this.C = !1;
        this.B = a;
        e = null != b || null != d;
        if (!e && N.va()) throw il(fl, null, "Custom video element was not provided even though the setting restrictToCustomPlayback is set to true.");
        var f = e,
            g = !1;
        N.va() || Dj() && e || (!vj() && wj() || vj() && Ob && (!Ob || !zj(uj, 4.2)) || Bj() || (g = !0), f = !1);
        this.w = f;
        this.O = (this.M = g) || f && null != d;
        e = lc("div", {
            style: "position:absolute"
        });
        a.insertBefore(e, a.firstChild);
        this.h = e;
        this.b = !this.w &&
            this.h && wj() ? new Yl(this.h, null, !0) : null;
        a = null;
        this.w ? b ? a = new Nl(b) : d && (a = new am(d)) : this.b && (a = new Nl(this.b.g));
        this.l = (this.g = a) ? c || null : null;
        this.D = null != this.l;
        qk(nk.getInstance(), 8, {
            enabled: this.w,
            yt: null != d,
            customClick: null != this.l
        });
        null === this.h ? (b = this.B, N.b = b) : this.w && b ? w(b.getBoundingClientRect) || (b = this.B, N.b = b) : b = this.h;
        this.A = b;
        this.m = null != this.h ? new xm(this.h, this) : null;
        this.H = new A(0, 0)
    };
    Am.prototype.F = function() {
        this.C = !0;
        if (null != this.b) {
            var a = this.b.g;
            wj() && a.load()
        }
    };
    Am.prototype.K = function() {
        Yd(this.b);
        Yd(this.m);
        Yd(this.g);
        nc(this.h)
    };
    var zm = function(a) {
        return a.D && a.l ? a.l : null != a.b ? a.b.h : null
    };
    Am.prototype.o = function() {
        return this.w
    };
    Am.prototype.L = function() {
        return this.M
    };
    Am.prototype.I = function() {
        return this.O
    };
    var Bm = Mb && "srcdoc" in document.createElement("iframe"),
        Cm = Lb || Mb || H && Yb(11),
        Hm = function(a, b) {
            H && Yb(7) && !Yb(10) && 6 > Dm() && Em(b) && (b = Fm(b));
            var c = function() {
                    a.contentWindow.goog_content = b;
                    a.contentWindow.location.replace("javascript:window.goog_content")
                },
                d;
            if (d = H) {
                var e;
                try {
                    e = oa(a.contentWindow)
                } catch (f) {
                    e = !1
                }
                d = !e
            }
            d ? Gm(a, c) : c()
        },
        Dm = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Im = 0,
        Gm = function(a, b) {
            var c = "goog_rendering_callback" + Im++;
            window[c] =
                b;
            a.src = "javascript:'<script>(function() {document.domain = \"" + document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        Em = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        Fm = function(a) {
            a = unescape(encodeURIComponent(a));
            for (var b = Math.floor(a.length / 2), c = [], d = 0; d < b; ++d) c[d] = String.fromCharCode(256 * a.charCodeAt(2 * d + 1) + a.charCodeAt(2 * d));
            1 == a.length % 2 && (c[b] = a.charAt(a.length - 1));
            return c.join("")
        };
    var Jm = function(a, b) {
        this.b = a;
        this.h = null;
        this.A = "";
        this.C = 0;
        this.l = this.g = null;
        this.I = b;
        this.w = null;
        this.m = ""
    };
    z(Jm, P);
    Jm.prototype.F = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = ee(b)
            } catch (C) {
                return
            }
            var d = c.session;
            if (null != d && this.m == d) {
                if ("friendlyReady" == c.type) {
                    var e = Km(this);
                    if ((Kh() || Jh()) && null != e) {
                        this.h = e;
                        this.A = e.currentSrc;
                        this.C = e.currentTime;
                        var f = this.b;
                        null != f.b && f.b.show()
                    } else {
                        var g = this.b.B,
                            k, m = this.b.H;
                        k = "border: 0; margin: 0; padding: 0; position: absolute; " + ("width:" + m.width + "px; ");
                        k += "height:" + m.height + "px;";
                        this.h = lc("VIDEO", {
                            style: k
                        });
                        g.appendChild(this.h)
                    }
                    var p = this.b.B;
                    a = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var t = Ec(this.h);
                    a += "width:" + t.width + "px; ";
                    a += "height:" + t.height + "px;";
                    this.l = lc("DIV", {
                        style: a
                    });
                    p.appendChild(this.l);
                    try {
                        this.g.contentWindow.loader.initFriendly(this.h, this.l)
                    } catch (C) {
                        Lm(this)
                    }
                }
                zk(this.I, "vpaid", "", b)
            }
        } catch (C) {
            Lm(this)
        }
    };
    var Lm = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.m;
            a = ge(b);
            window.postMessage(a, "*")
        },
        Km = function(a) {
            a = a.b.g;
            return a instanceof Nl && a.b instanceof HTMLVideoElement ? a.b : null
        };
    Jm.prototype.J = function() {
        P.R.J.call(this);
        Yd(this.D);
        this.D = null;
        nc(this.l);
        this.l = null;
        nc(this.g);
        this.g = null;
        var a = Km(this);
        (Kh() || Jh()) && null != a ? (a.src = this.A, a.currentTime = this.C, a = this.b, null != a.b && Zl(a.b.b, !1)) : (nc(this.h), this.h = null)
    };
    var Y = function(a, b, c, d, e, f) {
        P.call(this);
        this.b = a;
        this.D = b;
        this.fa = d;
        this.m = null;
        this.M = f;
        this.F = !1;
        this.Y = 1;
        this.da = c;
        this.V = this.O = this.L = -1;
        this.h = this.g = null;
        this.A = new sl;
        this.aa = !1;
        this.I = new md;
        this.K = this.$ = !1;
        this.l = null;
        this.U = e && null != this.b.l;
        this.T = new V(this);
        this.T.G(this.M, "adsManager", this.ca)
    };
    z(Y, P);
    Y.prototype.ca = function(a) {
        switch (a.W) {
            case "error":
                Mm(this, a.P);
                break;
            case "contentPauseRequested":
                var b = this.b.g;
                this.b.o() && null != this.m && this.m.restoreCustomPlaybackStateOnAdBreakComplete && null != b.rd && b.rd();
                this.w(a.W, a.P);
                break;
            case "contentResumeRequested":
                a = x(Y.prototype.w, this, a.W, a.P);
                b = this.b.g;
                this.b.o() && null != this.m && this.m.restoreCustomPlaybackStateOnAdBreakComplete && null != b.od ? b.od(a) : a();
                break;
            case "remainingTime":
                b = a.P;
                this.L = b.currentTime;
                this.O = b.duration;
                this.V = b.remainingTime;
                break;
            case "skip":
                this.w(a.W, a.P);
                break;
            case "log":
                var b = a.P,
                    c = b.adData;
                this.w(a.W, c, b.logData);
                break;
            case "companionBackfill":
                a = aa("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipshown":
                this.F = !0;
                this.w(a.W, a.P);
                break;
            case "vpaidEvent":
                try {
                    var d = a.P;
                    switch (d.vpaidEventType) {
                        case "createFriendlyIframe":
                            b = this.l = new Jm(this.b, this.M);
                            b.m = d.session;
                            a = "about:self";
                            H && (a = "");
                            b.g = lc("IFRAME", {
                                src: a,
                                allowtransparency: !0,
                                background: "transparent"
                            });
                            xc(b.g, {
                                display: "none",
                                width: "0",
                                height: "0"
                            });
                            b.b.B.appendChild(b.g);
                            var e;
                            e = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>';
                            e += 'loader = new VPAIDLoader(false, "' + b.m + '");';
                            e += "\x3c/script>";
                            c = e + "</body>";
                            null == b.w && (b.w = new V(b));
                            b.w.G(window, "message", b.F);
                            var f = b.g;
                            if (Bm) f.srcdoc = c;
                            else if (Cm) {
                                var g = f.contentWindow.document;
                                g.open("text/html", "replace");
                                g.write(c);
                                g.close()
                            } else Hm(f, c);
                            break;
                        case "destroyFriendlyIframe":
                            null != this.l && (this.l.N(), this.l = null)
                    }
                } catch (k) {
                    Mm(this, k.P)
                }
                break;
            case "skippableStateChanged":
                b =
                    a.P;
                c = b.adData;
                null != c.skippable && (this.F = c.skippable);
                this.w(a.W, a.P);
                break;
            default:
                this.w(a.W, a.P)
        }
    };
    Y.prototype.w = function(a, b, c) {
        if (null == b.companions) {
            var d = this.I.get(b.adId);
            b.companions = null != d ? d : []
        }
        this.g = d = null != b.adData ? new X(b.adData) : null;
        switch (a) {
            case "adBreakReady":
            case "trackingUrlPinged":
                a = new M(a, null, b);
                break;
            case "adMetadata":
                a = null;
                null != b.adCuePoints && (a = new cl(b.adCuePoints));
                a = new kl(d, a);
                break;
            case "allAdsCompleted":
                this.g = null;
                this.$ = !0;
                a = new M(a, d);
                break;
            case "contentPauseRequested":
                this.K = !1;
                a = new M(a, d);
                break;
            case "contentResumeRequested":
                this.g = null;
                this.K = !0;
                a = new M(a,
                    d);
                break;
            case "loaded":
                this.L = 0;
                this.O = d.Bb();
                this.V = d.Bb();
                yk(tk(), x(this.Vd, this), Gl(d));
                Oj(41351021) && (Q.getInstance().l = !0, wk(tk(), "loaded", Gl(d), this.fa));
                a = new M(a, d, b.adData);
                break;
            case "start":
                this.I.set(b.adId, b.companions);
                null != zm(this.b) && (null != this.h ? pl(this.h) : (this.h = new ll, this.T.G(this.h, "click", this.Df)), nl(this.h, zm(this.b)));
                a = new M(a, d);
                break;
            case "complete":
                null != this.h && pl(this.h);
                yk(tk(), null, Gl(d));
                this.g = null;
                pd(this.I, b.adId);
                a = new M(a, d);
                break;
            case "log":
                b = {
                    adError: Nm(c)
                };
                a = new M(a, d, b);
                break;
            case "urlNavigationRequested":
                a = new M(a, d, b.urlNavigationData);
                break;
            default:
                a = new M(a, d)
        }
        this.dispatchEvent(a);
        this.$ && this.K && this.Cb()
    };
    var Mm = function(a, b) {
            var c = new Zd(Nm(b));
            a.aa ? (a.dispatchEvent(c), a.g && yk(tk(), null, Gl(a.g)), a.g = null) : a.A.g.push(c);
            qk(nk.getInstance(), 7, {
                error: b.errorCode
            }, !0)
        },
        Nm = function(a) {
            var b = new Vd(a.type, a.errorMessage, a.errorCode);
            null != a.innerError && (b.g = Error(a.innerError));
            return b
        },
        Om = function(a, b, c) {
            zk(a.M, "adsManager", b, c)
        };
    h = Y.prototype;
    h.hd = function() {
        Om(this, "contentTimeUpdate", {
            currentTime: this.ba.currentTime
        })
    };
    h.We = function() {
        Om(this, "sendImpressionUrls")
    };
    h.Kc = function(a, b, c, d) {
        if (this.A.isEmpty()) {
            var e = this.b;
            null != d && (N.va() || Dj() ? (e.w = !0, Yd(e.b), e.b = null, Yd(e.g), e.g = new Nl(d), null !== e.h && (w(d.getBoundingClientRect) ? e.A = d : (e.A = e.B, N.b = e.A)), null != e.m && (d = e.m, e = e.g, null != d.b && d.l.za(d.b, rb(Ml), d.Jb), d.b = e, d.l.G(d.b, rb(Ml), d.Jb))) : e.w = !1);
            this.aa = !0;
            this.Db(a, b, c);
            Om(this, "init", {
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.A.isEmpty();) b = a = this.A, 0 == b.b.length && (b.b = b.g, b.b.reverse(), b.g = []), a = a.b.pop(), this.dispatchEvent(a);
            this.N()
        }
    };
    h.qf = function() {
        return this.b.o()
    };
    h.pf = function() {
        return this.U
    };
    h.Ue = function() {
        return this.V
    };
    h.Re = function() {
        return this.F
    };
    h.Od = function() {
        Om(this, "discardAdBreak")
    };
    h.Vd = function() {
        var a = null != this.g ? this.g.b.vpaid : !1,
            b = this.b.g,
            c = null != b ? b.ga() : this.L,
            d = null != b ? b.Sa() : this.O;
        return {
            currentTime: c,
            duration: d,
            isPlaying: null != b ? b.dd() : !1,
            isVpaid: a,
            isYouTube: N.sa(),
            volume: this.Y
        }
    };
    h.Ye = function() {
        Om(this, "skip")
    };
    h.start = function() {
        if (this.D && !N.ra()) {
            wj() && !this.b.C && qk(nk.getInstance(), 26, {
                adtagurl: this.D,
                customPlayback: this.b.o()
            });
            mg(this.b.h) && qk(nk.getInstance(), 30, {
                adtagurl: this.D,
                customPlayback: this.b.o()
            });
            var a = this.b.l,
                b = this.b.h,
                c;
            if (c = a && b && !mg(a)) a = uk(a), b = uk(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && qk(nk.getInstance(), 31, {
                adtagurl: this.D,
                customPlayback: this.b.o()
            })
        }
        if (wj() && !this.b.C && !this.b.o()) throw il(gl);
        b = this.b;
        b.D = this.U && null != b.l;
        this.b.m.g.style.opacity = 1;
        Om(this, "start")
    };
    h.Df = function() {
        if ((null == this.m || !this.m.disableClickThrough) && null != this.g) {
            var a = this.g.b.clickThroughUrl;
            null != a && window.open(lk(a), "_blank")
        }
    };
    h.Db = function(a, b, c) {
        var d = this.b,
            e = d.h;
        null != e && (-1 == a ? (e.style.right = 0, e.style.left = 0) : e.style.width = a + "px", -1 == b ? (e.style.bottom = 0, e.style.top = 0) : e.style.height = b + "px");
        null != d.m && (e = d.m, e.g.width = -1 == a ? "100%" : a, e.g.height = -1 == b ? "100%" : b);
        d.H = new A(a, b);
        Om(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    h.Ze = function() {
        Om(this, "stop")
    };
    h.Qe = function() {
        Om(this, "expand")
    };
    h.Pe = function() {
        Om(this, "collapse")
    };
    h.Ve = function() {
        return this.Y
    };
    h.Nc = function(a) {
        this.Y = a;
        if (!N.ra()) {
            var b = this.b.g;
            null != b && b.Ua(a)
        }
        Om(this, "volume", {
            volume: a
        })
    };
    h.Xe = function(a) {
        Om(this, "mediaUrl", {
            mediaUrl: a
        })
    };
    h.Lc = function() {
        Om(this, "pause")
    };
    h.Mc = function() {
        Om(this, "resume")
    };
    h.Cb = function() {
        null != this.l && (this.l.N(), this.l = null);
        this.N()
    };
    h.Se = function() {
        return this.da
    };
    h.Te = function() {
        return this.g
    };
    h.J = function() {
        Om(this, "destroy");
        null != this.h && this.h.N();
        this.T.N();
        this.A.clear();
        this.C && (ff(this.C.b), this.C.N());
        Y.R.J.call(this)
    };
    var Pm = function(a, b, c) {
        L.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b;
        this.B = c || ""
    };
    z(Pm, L);
    Pm.prototype.h = function(a, b) {
        var c = this.g;
        c.ba = a;
        null != b && (c.m = b);
        null != a.currentTime && (c.C = new jl(a), c.C.G("currentTimeUpdate", c.hd, !1, c), c.C.start(), c.hd());
        var d = {};
        null != b && Ab(d, b);
        c.U && (N.sa() ? d.useVideoAdUi = !1 : d.useClickElement = !1, d.disableClickThrough = !0);
        Om(c, "configure", {
            adsRenderingSettings: d
        });
        return this.g
    };
    Pm.prototype.m = function() {
        return this.l
    };
    Pm.prototype.o = function() {
        return this.B
    };
    /*(function() {
        if (!pb(function(a) {
                return a.match(J().location.href)
            })) {
            var a = fc();
            if (null == bb(a, function(a) {
                    return pb(function(c) {
                        return c.match(a.src)
                    })
                })) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    })();*/
    var Qm = function(a) {
        P.call(this);
        this.b = a;
        this.l = new md;
        this.g = this.b.m;
        this.m = new V(this);
        if (this.g) {
            a = tk();
            var b = wm(this.g);
            if (!a.h) {
                a.b = b || null;
                a.b && (a.w.G(a.b, "activityMonitor", a.C), Ak(a));
                if (!(l.ima && l.ima.video && l.ima.video.client && l.ima.video.client.tagged)) {
                    r("ima.video.client.sdkTag", !0, void 0);
                    var c = l.document,
                        b = c.createElement("script"),
                        d = c.location.protocol;
                    "http:" != d && "https:" != d && (d = "");
                    b.src = d + "//s0.2mdn.net/instream/video/client.js";
                    b.async = !0;
                    b.type = "text/javascript";
                    c = c.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                a.h = !0
            }
            this.h = xk(a, this.b.A)
        }
        var e;
        a: {
            try {
                e = window.top.location.href
            } catch (f) {
                e = 2;
                break a
            }
            e = null != e ? e == window.document.location.href ? 0 : 1 : 2
        }
        bl.b = e
    };
    z(Qm, P);
    h = Qm.prototype;
    h.J = function() {
        this.m.N();
        var a = tk();
        pd(a.g, this.h);
        Qm.R.J.call(this)
    };
    h.nf = function() {
        this.N()
    };
    h.ad = function(a, b) {
        a.adTagUrl && qk(nk.getInstance(), 8, {
            adtagurl: a.adTagUrl,
            customPlayback: this.b.o(),
            customClick: null != this.b.l,
            restrict: N.va()
        });
        var c = "",
            d = $f(),
            e = d.g,
            d = d.b;
        e && e.url ? c = e.url : d && d.url && (c = d.url);
        a.location = c;
        a.referrer = window.document.referrer;
        a.supportsYouTubeHosted = this.b.I();
        var e = a.adTagUrl,
            d = this.b.B,
            c = [],
            f = "",
            g = "";
        if (null != d) {
            for (var f = d, g = [], k = 0; f && 25 > k; ++k) {
                var m;
                a: {
                    if (f && f.nodeName && f.parentElement) {
                        m = f.nodeName.toString().toLowerCase();
                        for (var p = f.parentElement.childNodes,
                                t = 0, C = 0; C < p.length; ++C) {
                            var I = p[C];
                            if (I.nodeName && I.nodeName.toString().toLowerCase() === m) {
                                if (f === I) {
                                    m = "." + t;
                                    break a
                                }++t
                            }
                        }
                    }
                    m = ""
                }
                g.push((f.nodeName && f.nodeName.toString().toLowerCase()) + "" + m);
                f = f.parentElement
            }
            f = g.join();
            if (d) {
                d = (d = d.ownerDocument) && (d.defaultView || d.parentWindow) || null;
                g = [];
                if (d) try {
                    for (var n = d.parent, k = 0; n && n !== d && 25 > k; ++k) {
                        var y = n.frames;
                        for (m = 0; m < y.length; ++m)
                            if (d === y[m]) {
                                g.push(m);
                                break
                            }
                        d = n;
                        n = d.parent
                    }
                } catch (zd) {}
                g = g.join()
            } else g = ""
        }
        c.push(f, g);
        if (null != e) {
            for (n = 0; n < Ud.length -
                1; ++n) c.push(Ad(e, Ud[n]) || "");
            n = Ad(e, "videoad_start_delay");
            y = "";
            n && (n = parseInt(n, 10), y = 0 > n ? "postroll" : 0 == n ? "preroll" : "midroll");
            c.push(y)
        } else
            for (n = 0; n < Ud.length; ++n) c.push("");
        c = c.join(":");
        n = c.length;
        if (0 == n) c = 0;
        else {
            y = 305419896;
            for (e = 0; e < n; e++) y ^= (y << 5) + (y >> 2) + c.charCodeAt(e) & 4294967295;
            c = 0 < y ? y : 4294967296 + y
        }
        a.videoAdKey = c.toString();
        c = a.adTagUrl;
        null != c && "ca-pub-6219811747049371" != Ad(c, "client") ? c = null : (c = aa("window.yt.util.activity.getTimeSinceActive"), c = null != c ? c().toString() : null);
        null != c &&
            (a.lastActivity = c);
        c = a.adTagUrl;
        null == c ? c = !1 : (n = new Bd(c), c = n.m, n = n.g, y = n.length - 27, c = 0 <= y && n.indexOf("googleads.g.doubleclick.net", y) == y && (Fa(Ra(c)) ? !1 : /\/pagead\/(live\/)?ads/.test(c)));
        if (c) {
            y = window;
            n = Nc().document;
            c = {};
            e = Wc(window).ib;
            d = e.location.href;
            e == e.top ? d = {
                url: d,
                ed: !0
            } : (f = !1, (g = e.document) && g.referrer && (d = g.referrer, e.parent == e.top && (f = !0)), (g = e.location.ancestorOrigins) && (g = g[g.length - 1]) && -1 == d.indexOf(g) && (f = !1, d = g), d = {
                url: d,
                ed: f
            });
            a: if (f = Nc(), g = y.h || f.h, k = y.g || f.g, f && f.top == f) f = !1;
                else {
                    m = n.documentElement;
                    if (g && k && (t = p = 1, f.innerHeight ? (p = f.innerWidth, t = f.innerHeight) : m && m.clientHeight ? (p = m.clientWidth, t = m.clientHeight) : n.body && (p = n.body.clientWidth, t = n.body.clientHeight), t > 2 * k || p > 2 * g)) {
                        f = !1;
                        break a
                    }
                    f = !0
                }
            d = d.ed;
            g = Nc();
            g = g.top == g ? 0 : oa(g.top) ? 1 : 2;
            k = 4;
            f || 1 != g ? f || 2 != g ? f && 1 == g ? k = 7 : f && 2 == g && (k = 8) : k = 6 : k = 5;
            d && (k |= 16);
            c.iframing = "" + k;
            if (!y.b && "ad.yieldmanager.com" == n.domain) {
                for (d = n.URL.substring(n.URL.lastIndexOf("http")); - 1 < d.indexOf("%");) try {
                    d = decodeURIComponent(d)
                } catch (zd) {
                    break
                }
                y.b =
                    d
            }
            y.b ? (c.page_url = y.b, c.page_location = (f ? n.referrer : n.URL) || "EMPTY") : (c.page_url = f ? n.referrer : n.URL, c.page_location = null);
            c.last_modified_time = n.URL == c.page_url ? Date.parse(n.lastModified) / 1E3 : null;
            c.referrer_url = e == e.top ? e.document.referrer : "";
            if (c.referrer_url) {
                if (y = (y = td(c.referrer_url.match(sd)[3] || null)) && 0 <= y.indexOf("google.com") && -1 == c.referrer_url.indexOf("q=")) hd || (hd = Vc()), y = hd, y = "4087311" == (y.b.hasOwnProperty(35) ? y.b[35] : "");
                y && (n = n.getElementsByTagName("title"), 0 < n.length && (n = n[0], bc &&
                    null !== n && "innerText" in n ? n = n.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (y = [], sc(n, y, !0), n = y.join("")), n = n.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), n = n.replace(/\u200B/g, ""), bc || (n = n.replace(/ +/g, " ")), " " != n && (n = n.replace(/^\s*/, "")), c.referrer_url = "https://www.google.com/?q=" + n))
            }
            a.adSenseParams = c
        }
        n = "goog_" + Ua++;
        this.l.set(n, b || null);
        c = {};
        Ab(c, a);
        c.settings = {
            autoPlayAdBreaks: this.Z().Tc(),
            chromelessPlayer: !0,
            companionBackfill: this.Z().Oc(),
            engagementDetection: !0,
            isAdMob: this.Z().ra(),
            isInChina: this.Z().rf() ||
                !1,
            isFunctionalTest: this.Z().Fb(),
            isVpaidAdapter: this.Z().Hb(),
            isYouTube: this.Z().sa(),
            numRedirects: this.Z().Pc(),
            onScreenDetection: !0,
            playerType: this.Z().Qc(),
            playerVersion: this.Z().Rc(),
            ppid: this.Z().Sc(),
            preSkipFx: "",
            skipUnsupportedCodecs: !1,
            activeViewPushUpdates: !1,
            restrictToCustomPlayback: this.Z().va(),
            useCompanionsAsEndSlate: !1,
            vpaidMode: this.Z().h,
            testingConfig: ae(this.Z()).b
        };
        y = this.b.g;
        c.videoEnvironment = {
            customClickTrackingProvided: null != this.b.l,
            iframeState: bl.b,
            osdId: this.h,
            supportedMimeTypes: null !=
                y ? y.Cc() : null,
            usesChromelessPlayer: this.b.L(),
            usesCustomVideoPlayback: this.b.o(),
            usesYouTubePlayer: this.b.I()
        };
        c.experimentState = Nj();
        n = wm(this.g, n);
        this.m.G(n, "adsLoader", this.Wd);
        zk(n, "adsLoader", "requestAds", c)
    };
    h.Z = function() {
        return N
    };
    h.mf = function() {
        zk(wm(this.g), "adsLoader", "contentComplete")
    };
    h.Wd = function(a) {
        var b = a.W;
        switch (b) {
            case "adsLoaded":
                b = a.P;
                a = a.Ra;
                var c = new Y(this.b, b.adTagUrl || "", b.adCuePoints, this.h, b.isCustomClickTrackingAllowed, wm(this.g, a));
                this.dispatchEvent(new Pm(c, this.l.get(a), b.response));
                break;
            case "error":
                b = a.P;
                a = a.Ra;
                c = new Vd(b.type, b.errorMessage, b.errorCode);
                null != b.innerError && (c.g = Error(b.innerError));
                this.dispatchEvent(new Zd(c, this.l.get(a)));
                qk(nk.getInstance(), 7, {
                    error: b.errorCode
                }, !0);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new M(b, null, a.P))
        }
    };
    var Z = function() {};
    h = Z.prototype;
    h.clone = function() {
        var a = new Z;
        "auto" == this.videoPlayActivation ? a.Nb(!0) : "click" == this.videoPlayActivation && a.Nb(!1);
        a.adTagUrl = this.adTagUrl;
        a.adSenseParams = yb(this.adSenseParams);
        a.adsResponse = this.adsResponse;
        a.h = this.h;
        a.customMacros = yb(this.customMacros);
        a.g = this.g;
        a.location = this.location;
        a.referrer = this.referrer;
        a.lastActivity = this.lastActivity;
        a.language = this.language;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
        a.videoAdKey = this.videoAdKey;
        a.tagForChildDirectedContent = this.tagForChildDirectedContent;
        a.usePostAdRequests = this.usePostAdRequests;
        a.supportsYouTubeHosted = this.supportsYouTubeHosted;
        a.youTubeAdType = this.youTubeAdType;
        a.youTubeExperimentIds = this.youTubeExperimentIds;
        a.youTubeVideoAdStartTime = this.youTubeVideoAdStartTime;
        a.xc = this.xc;
        a.sc = this.sc;
        a.o = this.o;
        a.l = this.l;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        this.b && (a.b = gb(this.b));
        a.Ec =
            this.Ec;
        a.Fc = this.Fc;
        a.Gc = this.Gc;
        a.tc = this.tc;
        a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
        return a
    };
    h.adSenseParams = null;
    h.customMacros = null;
    h.videoPlayActivation = "unknown";
    h.liveStreamPrefetchSeconds = 0;
    h.linearAdSlotWidth = 0;
    h.linearAdSlotHeight = 0;
    h.nonLinearAdSlotWidth = 0;
    h.nonLinearAdSlotHeight = 0;
    h.forceNonLinearFullSlot = !1;
    h.videoAdKey = null;
    h.tagForChildDirectedContent = !1;
    h.usePostAdRequests = !1;
    h.supportsYouTubeHosted = !0;
    h.Ec = function() {
        return !1
    };
    h.Fc = function() {
        return NaN
    };
    h.Gc = function() {
        return ""
    };
    h.youTubeVideoAdStartTime = 0;
    h.xc = null;
    h.sc = !1;
    h.Nb = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    h.tc = !1;
    X.prototype.getCompanionAds = X.prototype.De;
    X.prototype.isLinear = X.prototype.Ne;
    X.prototype.isSkippable = X.prototype.Oe;
    X.prototype.getAdId = X.prototype.g;
    X.prototype.getAdSystem = X.prototype.Ce;
    X.prototype.getContentType = X.prototype.Ee;
    X.prototype.getDescription = X.prototype.Sd;
    X.prototype.getTitle = X.prototype.Td;
    X.prototype.getDuration = X.prototype.Bb;
    X.prototype.getHeight = X.prototype.Fe;
    X.prototype.getWidth = X.prototype.Ke;
    X.prototype.getWrapperAdIds = X.prototype.Le;
    X.prototype.getWrapperAdSystems = X.prototype.Me;
    X.prototype.getTraffickingParameters = X.prototype.He;
    X.prototype.getTraffickingParametersString = X.prototype.Ie;
    X.prototype.getAdPodInfo = X.prototype.Be;
    X.prototype.getUiElements = X.prototype.Je;
    X.prototype.getMinSuggestedDuration = X.prototype.Ge;
    cl.prototype.getCuePoints = cl.prototype.b;
    r("google.ima.AdCuePoints.PREROLL", 0, window);
    r("google.ima.AdCuePoints.POSTROLL", -1, window);
    r("google.ima.AdDisplayContainer", Am, window);
    Am.prototype.initialize = Am.prototype.F;
    Am.prototype.destroy = Am.prototype.K;
    El.prototype.getPodIndex = El.prototype.ye;
    El.prototype.getTimeOffset = El.prototype.ze;
    El.prototype.getTotalAds = El.prototype.Ae;
    El.prototype.getMaxDuration = El.prototype.xe;
    El.prototype.getAdPosition = El.prototype.ve;
    El.prototype.getIsBumper = El.prototype.we;
    r("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
    r("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
    r("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
    r("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
    r("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
    r("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
    r("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
    r("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
    r("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
    r("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
    r("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
    r("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
    r("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
    r("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
    r("google.ima.AdError.ErrorCode.INVALID_ADX_EXTENSION", 1105, window);
    r("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    r("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    r("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
    r("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
    Vd.prototype.getErrorCode = Vd.prototype.Jc;
    Vd.prototype.getVastErrorCode = Vd.prototype.Ud;
    Vd.prototype.getInnerError = Vd.prototype.Ab;
    Vd.prototype.getMessage = Vd.prototype.Qa;
    Vd.prototype.getType = Vd.prototype.ue;
    r("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
    Zd.prototype.getError = Zd.prototype.g;
    Zd.prototype.getUserRequestContext = Zd.prototype.o;
    r("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
    r("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
    r("google.ima.AdEvent.Type.CLICK", "click", window);
    r("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
    r("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
    r("google.ima.AdEvent.Type.STARTED", "started", window);
    r("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
    r("google.ima.AdEvent.Type.PAUSED", "pause", window);
    r("google.ima.AdEvent.Type.RESUMED", "resume", window);
    r("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstquartile", window);
    r("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
    r("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdquartile", window);
    r("google.ima.AdEvent.Type.COMPLETE", "complete", window);
    r("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
    r("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
    r("google.ima.AdEvent.Type.LOADED", "loaded", window);
    r("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
    r("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
    r("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
    r("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
    r("google.ima.AdEvent.Type.SKIPPED", "skip", window);
    r("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
    r("google.ima.AdEvent.Type.LOG", "log", window);
    r("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
    r("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
    M.prototype.type = M.prototype.type;
    M.prototype.getAd = M.prototype.m;
    M.prototype.getAdData = M.prototype.B;
    kl.prototype.getAdCuePoints = kl.prototype.o;
    r("google.ima.AdsLoader", Qm, window);
    Qm.prototype.getSettings = Qm.prototype.Z;
    Qm.prototype.requestAds = Qm.prototype.ad;
    Qm.prototype.contentComplete = Qm.prototype.mf;
    Qm.prototype.destroy = Qm.prototype.nf;
    r("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
    Pm.prototype.getAdsManager = Pm.prototype.h;
    Pm.prototype.getUserRequestContext = Pm.prototype.m;
    Pm.prototype.getResponse = Pm.prototype.o;
    r("google.ima.CompanionAdSelectionSettings", tl, window);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
    r("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    r("ima.ImaSdkSettings", O, window);
    r("google.ima.settings", N, window);
    O.prototype.setCompanionBackfill = O.prototype.af;
    O.prototype.getCompanionBackfill = O.prototype.Oc;
    O.prototype.setAutoPlayAdBreaks = O.prototype.$e;
    O.prototype.isAutoPlayAdBreak = O.prototype.Tc;
    O.prototype.setPpid = O.prototype.ef;
    O.prototype.getPpid = O.prototype.Sc;
    O.prototype.setVpaidAllowed = O.prototype.gf;
    O.prototype.setVpaidMode = O.prototype.hf;
    O.prototype.setIsVpaidAdapter = O.prototype.bf;
    O.prototype.isVpaidAdapter = O.prototype.Hb;
    O.prototype.setRestrictToCustomPlayback = O.prototype.ff;
    O.prototype.isRestrictToCustomPlayback = O.prototype.va;
    O.prototype.setNumRedirects = O.prototype.cf;
    O.prototype.getNumRedirects = O.prototype.Pc;
    O.prototype.getLocale = O.prototype.xb;
    O.prototype.setLocale = O.prototype.sd;
    O.prototype.getPlayerType = O.prototype.Qc;
    O.prototype.setPlayerType = O.prototype.Uc;
    O.prototype.getPlayerVersion = O.prototype.Rc;
    O.prototype.setPlayerVersion = O.prototype.df;
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
    r("google.ima.AdsRenderingSettings", Hl, window);
    r("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    r("google.ima.AdsRequest", Z, window);
    Z.prototype.adTagUrl = Z.prototype.adTagUrl;
    Z.prototype.adsResponse = Z.prototype.adsResponse;
    Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
    Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
    Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
    Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
    Z.prototype.setAdWillAutoPlay = Z.prototype.Nb;
    r("google.ima.VERSION", "3.126.0", void 0);
    r("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
    r("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
    r("google.ima.ViewMode.NORMAL", "normal", void 0);
    r("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
    Y.prototype.isCustomPlaybackUsed = Y.prototype.qf;
    Y.prototype.isCustomClickTrackingUsed = Y.prototype.pf;
    Y.prototype.destroy = Y.prototype.Cb;
    Y.prototype.init = Y.prototype.Kc;
    Y.prototype.start = Y.prototype.start;
    Y.prototype.stop = Y.prototype.Ze;
    Y.prototype.pause = Y.prototype.Lc;
    Y.prototype.resume = Y.prototype.Mc;
    Y.prototype.getCuePoints = Y.prototype.Se;
    Y.prototype.getCurrentAd = Y.prototype.Te;
    Y.prototype.getRemainingTime = Y.prototype.Ue;
    Y.prototype.expand = Y.prototype.Qe;
    Y.prototype.collapse = Y.prototype.Pe;
    Y.prototype.getAdSkippableState = Y.prototype.Re;
    Y.prototype.resize = Y.prototype.Db;
    Y.prototype.skip = Y.prototype.Ye;
    Y.prototype.getVolume = Y.prototype.Ve;
    Y.prototype.setVolume = Y.prototype.Nc;
    Y.prototype.setMediaUrl = Y.prototype.Xe;
    Y.prototype.sendImpressionUrls = Y.prototype.We;
    Y.prototype.discardAdBreak = Y.prototype.Od;
    Fl.prototype.getContent = Fl.prototype.getContent;
    Fl.prototype.getContentType = Fl.prototype.g;
    Fl.prototype.getHeight = Fl.prototype.w;
    Fl.prototype.getWidth = Fl.prototype.A;
    var Rm = function(a, b) {
        L.call(this, a);
        this.g = b
    };
    z(Rm, L);
    Rm.prototype.h = function() {
        return this.g
    };
    var Sm = function(a, b, c, d) {
        P.call(this);
        this.C = c;
        this.A = b;
        this.h = a;
        this.g = null;
        this.w = !1;
        this.l = this.b = this.m = null;
        this.D = d || "en";
        this.g = document.createElement("DIV");
        this.g.id = "adContainer";
        xc(this.g, {
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "none"
        });
        N.sd(this.D);
        this.h.appendChild(this.g);
        this.m = new Am(this.g);
        this.l = new Qm(this.m);
        this.l.Z().Uc("outstream");
        Re(this.l, "adsManagerLoaded", this.xf, !1, this);
        Re(this.l, "adError", this.wa, !1, this)
    };
    z(Sm, P);
    h = Sm.prototype;
    h.xf = function(a) {
        var b = new Hl;
        b.useVideoAdUi = !0;
        b.useStyledLinearAds = !0;
        try {
            this.b = a.h({}, b)
        } catch (c) {
            this.wa(c);
            return
        }
        Re(this.b, "adError", this.wa, !1, this);
        Re(this.b, ["allAdsCompleted", "complete", "skip", "userClose"], this.wf, !1, this);
        try {
            this.b.Kc(Ec(this.h).width, Ec(this.h).height, "normal")
        } catch (c) {
            this.wa(c)
        }
        try {
            this.A()
        } catch (c) {
            Tm(this, "Error invoking onAdLoaded callback")
        }
    };
    h.wf = function(a) {
        switch (a.type) {
            case "allAdsCompleted":
            case "complete":
            case "userClose":
            case "skip":
                Um(this)
        }
    };
    h.Nf = function() {
        this.m.F();
        this.w = !0
    };
    h.Tf = function(a) {
        null != this.b && this.b.Nc(a)
    };
    h.Rf = function() {
        null != this.b && this.b.Lc()
    };
    h.Sf = function() {
        null != this.b && this.b.Mc()
    };
    h.Of = function(a) {
        if (this.w)
            if (Fa(a)) Tm(this, "Empty ad tag url"), Um(this);
            else {
                var b = a; - 1 != b.indexOf("pubads.g.doubleclick.net") || -1 != b.indexOf("googleads.g.doubleclick.net") ? (b = new Bd(b), a = Ra(b.b.get("channel")), Sd(b.b, "channel"), a = Fa(a) ? "interstitial" : a + "+interstitial", b.b.set("channel", a), a = b.toString()) : a = b;
                b = new Z;
                b.adTagUrl = a;
                b.forceNonLinearFullSlot = !0;
                a = Ec(this.h).width;
                var c = Ec(this.h).height;
                b.linearAdSlotWidth = a;
                b.linearAdSlotHeight = c;
                b.nonLinearAdSlotWidth = a;
                b.nonLinearAdSlotHeight = c;
                this.l.ad(b)
            }
        else Tm(this,
            "Cannot request ad before initializing"), Um(this)
    };
    h.Qf = function() {
        if (null != this.b) try {
            xc(this.g, "display", "block"), this.b.start()
        } catch (a) {
            this.wa(a)
        }
    };
    h.Pf = function(a, b) {
        this.h.style.height = b + "px";
        this.h.style.width = a + "px";
        if (null != this.b) try {
            this.b.Db(a, b, "normal")
        } catch (c) {
            this.wa(c)
        }
    };
    h.wa = function(a) {
        Vm(this);
        var b;
        a instanceof Zd ? b = a.g().Qa() : a instanceof Vd ? b = a.Qa() : b = "Error loading or playing the ad";
        Tm(this, b);
        Um(this)
    };
    var Tm = function(a, b) {
            a.dispatchEvent(new Rm("adError", b))
        },
        Um = function(a) {
            Vm(a);
            try {
                a.C()
            } catch (b) {
                Tm(a, "Error invoking done callback")
            }
        },
        Vm = function(a) {
            a.b && a.b.Cb();
            a.b = null;
            xc(a.g, "display", "none")
        };
    r("google.outstream.AdsController", Sm, window);
    Sm.prototype.initialize = Sm.prototype.Nf;
    Sm.prototype.requestAds = Sm.prototype.Of;
    Sm.prototype.resize = Sm.prototype.Pf;
    Sm.prototype.showAd = Sm.prototype.Qf;
    Sm.prototype.setVolumeInternal = Sm.prototype.Tf;
    Sm.prototype.pauseInternal = Sm.prototype.Rf;
    Sm.prototype.resumeInternal = Sm.prototype.Sf;
    r("google.outstream.ErrorEvent.Type.AD_ERROR", "adError", window);
    Rm.prototype.getErrorMessage = Rm.prototype.h;
})();