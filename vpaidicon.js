/**
 * Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.
 */
! function() {
    try {
        var e = function() {
                return e = function() {
                    this._iframe, this._adCompanions, this._lastAdVolume, this._adParameters
                }, e.prototype.init = function(e, t, n, a) {
                    var r = Math.random() + "";
                    window["moatstartvpaid" + r] = this.startVPAID.bind(this), window["moatstartvpaiderr" + r] = this.handleError.bind(this);
                    var s = document.createElement("iframe");
                    s.style.display = "none", document.body.appendChild(s);
                    var o = '<html><head><body><script>function startVPAID() {window.parent["moatstartvpaid' + r + '"]();};function errVPAID() {window.parent["moatstartvpaiderr' + r + '"]();};</script><script onerror="errVPAID();" onload="startVPAID();" src="' + e.fileURL + '"></script></body></head></html>';
                    s.contentWindow.moatsrc = o, s.src = "javascript:window.moatsrc", this._iframe = s, this._adCompanions = a, this._adParameters = t, i.Queue.publish("moat-tag", {
                        videoElement: i.ad._domElToTrack,
                        duration: n
                    })
                }, e.prototype.handleError = function() {
                    i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdError,
                        args: ["no VPAID response"]
                    })
                }, e.prototype.wrapGetAdCompanions = function() {
                    var e = this,
                        t = this._vpaid.getAdCompanions;
                    this._vpaid.getAdCompanions = function() {
                        return e._adCompanions.length > 0 ? i.Util.createXMLcompanionNode(e._adCompanions) : t ? t() : ""
                    }
                }, e.prototype.createCallbacks = function() {
                    var e = {};
                    for (var t in i.VPAIDevents) {
                        var n = function(e) {
                            var t = e;
                            return function() {
                                i.Queue.publish("vpaid-events", {
                                    type: t,
                                    args: arguments
                                })
                            }
                        }(t);
                        e[t] = n
                    }
                    return e
                }, e.prototype.startVPAID = function() {
                    var e = this._iframe.contentWindow,
                        t = this,
                        n = !1,
                        a = 20,
                        r = 0,
                        s = function() {
                            if (r++, r > a || n) return t.handleError(), !1;
                            var s = e.getVPAIDAd && "function" == typeof e.getVPAIDAd && e.getVPAIDAd();
                            if (s) {
                                t._vpaid = s, n = !0;
                                var o = (s.handshakeVersion(i.version), t.createCallbacks());
                                for (var d in o) s.subscribe(o[d], d);
                                t.wrapGetAdCompanions(), i.underlyingAsset = s;
                                var l = {
                                    AdParameters: t._adParameters
                                } || i.ad._creativeData || {};
                                s.initAd(i.ad._width, i.ad._height, i.ad._viewMode, i.ad._desiredBitrate, l, i.ad._environmentVars);
                                var u;
                                try {
                                    u = s.getAdVolume()
                                } catch (e) {
                                    u = -1
                                }
                                return i.Queue.publish("internal-events", {
                                    volume: u
                                }), !1
                            }
                        };
                    i.Util.setSafeLoop(s, [], 100)
                }, e
            },
            t = function() {
                var e = {};
                return e.safeCallbacks = {}, e.findMoatScript = function() {
                    for (var e = /moatwrapper/, t = document.getElementsByTagName("script"), i = t.length - 1; i >= 0; i--) {
                        var n = t[i];
                        if (e.test(n.src)) return n
                    }
                }, e.parseQS = function() {
                    var t = {},
                        i = e.findMoatScript();
                    if (!i) return !1;
                    for (var n = i.src, a = n.split("#")[1], r = a.split("&"), s = r.length - 1; s >= 0; s--) {
                        var o = r[s].split("=");
                        t[o[0]] = decodeURIComponent(o.slice(1).join("="))
                    }
                    return t.vast && (t.vast = e.expandCachebuster(t.vast)), t
                }, e.expandCachebuster = function(e) {
                    return e.replace("[MOAT_CB]", "" + (new Date).getTime())
                }, e.createXMLcompanionNode = function(e) {
                    if (!e || 0 === e.length) return "";
                    for (var t, i, n, a, r, s, o, d, l, u = "", p = document.implementation.createDocument(null, "CompanionAds", null), c = e.length - 1; c >= 0; c--) {
                        if (t = e[c], i = p.createElementNS(u, "Companion"), i.setAttributeNS(u, "width", t.width), i.setAttributeNS(u, "height", t.height), n = p.createElementNS(u, "StaticResource"), n.setAttributeNS(u, "type", t.type), n.appendChild(p.createCDATASection(t.staticResource)), i.appendChild(n), t.companionClickThroughURLTemplate && (a = p.createElementNS(u, "CompanionClickThrough"), a.appendChild(p.createCDATASection(t.companionClickThroughURLTemplate)), i.appendChild(a)), t.trackingEvents && t.trackingEvents.creativeView) {
                            r = p.createElementNS(u, "TrackingEvents"), s = t.trackingEvents.creativeView;
                            for (var h = s.length - 1; h >= 0; h--) o = s[h], d = p.createElementNS(u, "Tracking"), d.setAttributeNS(u, "event", "creativeView"), d.appendChild(p.createCDATASection(o)), r.appendChild(d);
                            i.appendChild(r)
                        }
                        p.documentElement.appendChild(i)
                    }
                    return l = new XMLSerializer, l.serializeToString(p)
                }, e.emptyObj = {}, e.isArray = function(t) {
                    try {
                        return "[object Array]" === e.emptyObj.toString.call(t)
                    } catch (e) {
                        return !1
                    }
                }, e.isFunction = function(t) {
                    try {
                        return "[object Function]" === e.emptyObj.toString.call(t)
                    } catch (e) {
                        return !1
                    }
                }, e.isNumber = function(t) {
                    try {
                        return "[object Number]" === e.emptyObj.toString.call(t)
                    } catch (e) {
                        return !1
                    }
                }, e.timeouts = [], e.loops = {}, e.makeSafe = function(e, t, n) {
                    var a = !1;
                    return function() {
                        try {
                            return t ? n ? e.apply(n, arguments) : e.apply(this, arguments) : e.apply(null, arguments)
                        } catch (e) {
                            if (!a) {
                                a = !0;
                                var r = (e.name + " in closure (cb): " + e.message + ", stack=" + e.stack, "//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + encodeURIComponent("GENERICTAG_VPAID2JS1") + "&ac=1&k=" + encodeURIComponent(e) + "&ar=" + encodeURIComponent("5da836b-clean") + "&j=" + encodeURIComponent(document.referrer) + "&cs=" + (new Date).getTime());
                                (new Image).src = r, i.Queue.publish("vpaid-events", {
                                    type: i.VPAIDevents.AdError,
                                    args: ["AdError"]
                                })
                            }
                        }
                    }
                }, e.setSafeTimeout = function(t, i) {
                    var n = setTimeout(t, i);
                    return e.timeouts.push(n), n
                }, e.setSafeLoop = function(t, i, n) {
                    if (e.isFunction(t) && e.isArray(i) && e.isNumber(n)) {
                        var a = (new Date).getTime() + "";
                        e.loops[a] && window.clearTimeout(e.loops[a].tid), e.loops[a] = {}, e.loops[a].callback = e.makeSafe(t, i), e.loops[a].interval = n, e.loops[a].tid = e.setSafeTimeout(e.runLoop(a), n), t = null, i = null, n = null, a = null
                    }
                }, e.runLoop = function(t) {
                    return function() {
                        if (!e.loops || !e.loops[t]) return !1;
                        var i = e.loops[t].callback,
                            n = i.call(null);
                        return "boolean" == typeof n && n === !1 ? (window.clearTimeout(e.loops[t].tid), e.loops[t] = !1, !1) : (e.loops[t].tid = e.setSafeTimeout(e.runLoop(t), e.loops[t].interval), n = null, void(t = null))
                    }
                }, e.objectToQueryString = function(e, t) {
                    var i = "";
                    for (var n in e) e.hasOwnProperty(n) && (i += "&" + n + "=" + e[n]);
                    if (t) var i = encodeURI(i);
                    return i.slice(1)
                }, e.addListener = function(t, i, n, a) {
                    var r, s = this.makeSafe(n);
                    if (r = t.addEventListener ? {
                            name: "addEventListener",
                            evtPrefix: ""
                        } : {
                            name: "attachEvent",
                            evtPrefix: "on"
                        }, t && r.name && t[r.name]) try {
                        t[r.name](r.evtPrefix + i, s, !1)
                    } catch (e) {}
                    a !== !1 && (e.safeCallbacks[i + a] = s)
                }, e.removeListener = function(t, i, n, a) {
                    var r, s = i + a;
                    if (!t) return delete e.safeCallbacks[s], !1;
                    try {
                        var o = t.removeEventListener;
                        o = t.detachEvent
                    } catch (t) {
                        return delete e.safeCallbacks[s], !1
                    }
                    n = a !== !1 ? e.safeCallbacks[s] : n, r = t.removeEventListener ? {
                        name: "removeEventListener",
                        evtPrefix: ""
                    } : {
                        name: "detachEvent",
                        evtPrefix: "on"
                    };
                    try {
                        t[r.name](r.evtPrefix + i, n, !1)
                    } catch (e) {}
                    delete e.safeCallbacks[s]
                }, e
            },
            i = {
                ad: null,
                version: "2.0",
                startTime: (new Date).getTime(),
                playerProvidedEventCallbacks: {},
                VPAIDevents: {
                    AdLoaded: "AdLoaded",
                    AdStarted: "AdStarted",
                    AdStopped: "AdStopped",
                    AdSkipped: "AdSkipped",
                    AdSkippableStateChange: "AdSkippableStateChange",
                    AdSizeChange: "AdSizeChange",
                    AdLinearChange: "AdLinearChange",
                    AdDurationChange: "AdDurationChange",
                    AdExpandedChange: "AdExpandedChange",
                    AdRemainingTimeChange: "AdRemainingTimeChange",
                    AdVolumeChange: "AdVolumeChange",
                    AdImpression: "AdImpression",
                    AdVideoStart: "AdVideoStart",
                    AdVideoFirstQuartile: "AdVideoFirstQuartile",
                    AdVideoMidpoint: "AdVideoMidpoint",
                    AdVideoThirdQuartile: "AdVideoThirdQuartile",
                    AdVideoComplete: "AdVideoComplete",
                    AdClickThru: "AdClickThru",
                    AdInteraction: "AdInteraction",
                    AdUserAcceptInvitation: "AdUserAcceptInvitation",
                    AdUserMinimize: "AdUserMinimize",
                    AdUserClose: "AdUserClose",
                    AdPaused: "AdPaused",
                    AdPlaying: "AdPlaying",
                    AdLog: "AdLog",
                    AdError: "AdError"
                },
                VPAIDmethods: {
                    resizeAd: "resizeAd",
                    startAd: "startAd",
                    stopAd: "stopAd",
                    pauseAd: "pauseAd",
                    resumeAd: "resumeAd",
                    expandAd: "expandAd",
                    collapseAd: "collapseAd",
                    skipAd: "skipAd"
                }
            },
            n = function() {
                var e = function(e, t) {
                    this.pcode = e, this.ids = t, this.moatapi, this.eventBuffer = [], this.init()
                };
                return e.prototype.init = function() {
                    var e = this;
                    i.Queue.subscribe("moat-tag", function(t) {
                        e.initMoatTracking(t.videoElement, t.duration)
                    }), i.Queue.subscribe("vpaid-events", function(t) {
                        var n = {
                            type: t.type,
                            adVolume: i.ad.getAdVolume()
                        };
                        if (e.moatapi) {
                            if (e.eventBuffer && e.eventBuffer.length > 0)
                                for (var a = e.eventBuffer.length - 1; a >= 0; a--) {
                                    var r = e.eventBuffer[a];
                                    e.moatapi.dispatchEvent(r)
                                }
                            e.eventBuffer = !1, e.moatapi.dispatchEvent(n)
                        } else e.eventBuffer && e.eventBuffer.push(n)
                    })
                }, e.prototype.initMoatTracking = function(e, t) {
                    var i, n, a = document.createElement("script"),
                        r = [],
                        s = {
                            adData: {
                                ids: this.ids,
                                duration: t
                            },
                            dispatchEvent: function(e) {
                                this.sendEvent ? (r && (r.push(e), e = r, r = !1), this.sendEvent(e)) : r.push(e)
                            }
                        },
                        o = "_moatApi" + Math.floor(1e8 * Math.random());
                    try {
                        i = e.ownerDocument, n = i && (i.defaultView || i.parentWindow)
                    } catch (e) {}
                    return n ? (this.moatapi = n[o] = s, a.type = "text/javascript", e && e.insertBefore(a, e.childNodes[0] || null), void(a.src = "https://z.moatads.com/" + this.pcode + "/moatvideo.js#" + o)) : !1
                }, e
            },
            a = function() {
                var t = function() {};
                return t.prototype.request = function(e) {
                    var t = this;
                    DMVAST.client.get(e, {
                        withCredentials: !1
                    }, function(e) {
                        e ? t.extractStuff(e) : i.Queue.publish("vpaid-events", {
                            type: i.VPAIDevents.AdError,
                            args: ["no VAST tag response"]
                        })
                    })
                }, t.prototype.extractStuff = function(t) {
                    var n = ["progressive"];
                    if (t && t.ads && 0 !== t.ads.length) {
                        for (var a = {
                                linearCreatives: [],
                                companions: []
                            }, s = t.ads[0], d = s.creatives, l = d.length - 1; l >= 0; l--) {
                            var u = d[l];
                            switch (u.type) {
                                case "linear":
                                    for (var p = {
                                            duration: u.duration,
                                            adParameters: u.adParameters,
                                            trackingEvents: u.trackingEvents,
                                            clickthroughURL: u.videoClickThroughURLTemplate,
                                            clicktrackingURLs: u.videoClickTrackingURLTemplates,
                                            vpaid: [],
                                            videos: [],
                                            skipoffset: u.skipDelay
                                        }, c = u.mediaFiles, h = c.length - 1; h >= 0; h--) {
                                        var v = c[h],
                                            m = v.mimeType.toLowerCase(),
                                            A = v.deliveryType.toLowerCase();
                                        "VPAID" === v.apiFramework && ("application/javascript" === m || "application/x-javascript" === m) && n.indexOf(A) > -1 && p.vpaid.push(v), n.indexOf(A) > -1 && p.videos.push(v)
                                    }
                                    a.linearCreatives.push(p);
                                    break;
                                case "companion":
                                    for (var f = u.variations.length - 1; f >= 0; f--) a.companions.push(u.variations[f])
                            }
                        }
                        var g = a.linearCreatives[0];
                        if (i.TrackerManager = r(), new i.TrackerManager(g.trackingEvents, s.impressionURLTemplates, s.errorURLTemplates, g.clicktrackingURLs), g.vpaid.length > 0) {
                            i.VpaidPlayer = e();
                            var y = new i.VpaidPlayer;
                            return void y.init(g.vpaid[0], g.adParameters, g.duration, a.companions)
                        }
                        if (g.videos.length > 0) {
                            i.VideoPlayer = o();
                            var y = new i.VideoPlayer;
                            return i.underlyingAsset = y, void y.init(g.videos, g.duration, g.clickthroughURL, a.companions, g.skipoffset)
                        }
                        i.Queue.publish("vpaid-events", {
                            type: i.VPAIDevents.AdError,
                            args: ["No suitable assets found"]
                        })
                    }
                }, t
            },
            r = function() {
                var e = {
                    AdSkipped: "skip",
                    AdStarted: "creativeView",
                    AdVideoStart: "start",
                    AdVideoFirstQuartile: "firstQuartile",
                    AdVideoMidpoint: "midpoint",
                    AdVideoThirdQuartile: "thirdQuartile",
                    AdVideoComplete: "complete",
                    AdUserAcceptInvitation: "acceptInvitation",
                    AdUserMinimize: "collapse",
                    AdUserClose: "close",
                    AdPaused: "pause",
                    AdPlaying: "resume",
                    AdError: "error"
                };
                return r = function(e, t, i, n) {
                    this.trackingEvents = e, this.impressionURLs = t, this.errorURLs = i, this.clicktrackingURLs = n, this.lastVolume = !1, this.init()
                }, r.prototype.init = function() {
                    var t = this;
                    i.Queue.subscribe("internal-events", function(e) {
                        t.lastVolume = e.volume
                    }), i.Queue.subscribe("vpaid-events", function(n) {
                        var a;
                        switch (n.type) {
                            case i.VPAIDevents.AdImpression:
                                a = t.impressionURLs;
                                break;
                            case i.VPAIDevents.AdVolumeChange:
                                var r, s = i.underlyingAsset && i.underlyingAsset.getAdVolume();
                                "number" == typeof t.lastVolume && "number" == typeof s && (0 === s && t.lastVolume > 0 ? r = "mute" : s > 0 && 0 === t.lastVolume && (r = "unmute")), t.lastVolume = s, r && (a = t.trackingEvents[r]);
                                break;
                            case i.VPAIDevents.AdClickThru:
                                a = t.clicktrackingURLs;
                                break;
                            case i.VPAIDevents.AdError:
                                a = t.errorURLs;
                                break;
                            default:
                                var o = e[n.type];
                                a = o && t.trackingEvents[o]
                        }
                        if (a)
                            for (var d = a.length - 1; d >= 0; d--)(new Image).src = a[d]
                    })
                }, r
            },
            s = function() {
                i.Queue.subscribe("vpaid-events", function(e) {
                    var t = e.type,
                        n = e.args;
                    if (i.playerProvidedEventCallbacks[t])
                        for (var a = i.playerProvidedEventCallbacks[t], r = a.length - 1; r >= 0; r--) {
                            var s = a[r],
                                o = s.fn,
                                d = s.listenerScope;
                            d || (d = null), o.apply(d, n)
                        }
                })
            },
            o = function() {
                var e = function() {
                    this._videoEl, this._adIsStarted, this._firstQuartileTime, this._firstQuartileReached, this._midpointTime, this._midpointReached, this._thirdQuartileTime, this._thirdQuartileReached, this._videoIsCompleted, this._adIsPlaying = !1, this._lastViewMode, this._originalSlotCursorStyle, this._originalVideoSlotCursorStyle, this._pauseAdOnClickThru = !0, this._clickthroughURL, this._lastClickThruTime, this._skipoffset, this._adLinear = !0, this._adWidth = i.ad._width, this._adHeight = i.ad._height, this._adExpanded = !1, this._adSkippableState = !1, this._adRemainingTime = -2, this._adDuration = -2, this._adVolume = 1, this._adCompanions = "", this._adIcons = 1
                };
                return e.prototype.init = function(e, t, n, a, r) {
                    this._videoEl = i.ad._videoSlot, this._adDuration = this._adRemainingTime = t, this._mediaFile = this.pickMediaFile(e), this._skipoffset = r, i.ad._slot.style && (this._originalSlotCursorStyle = i.ad._slot.style.cursor, i.ad._slot.style.cursor = "pointer"), i.ad._videoSlot.style && (this._originalVideoSlotCursorStyle = i.ad._videoSlot.style.cursor, i.ad._videoSlot.style.cursor = "pointer"), void 0 !== this._videoEl.volume && "number" == typeof this._videoEl.volume && (this._adVolume = this._videoEl.volume), i.Queue.publish("internal-events", {
                        volume: this._adVolume
                    }), this._clickthroughURL = n, this._lastViewMode = i.ad._viewMode, this._adCompanions = i.Util.createXMLcompanionNode(a), this.onAdClickHandler = this.onAdClick(), this.onErrorHandler = this.videoErrorHandlerFn(), this.createListeners(), "1" === i.qs.noctp && (this._pauseAdOnClickThru = !1), this._adDuration && (this.determineQuartiles(), i.Queue.publish("moat-tag", {
                        videoElement: i.ad._domElToTrack,
                        duration: this._adDuration
                    })), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdLoaded
                    })
                }, e.prototype.resizeAd = function(e, t, n) {
                    "fullscreen" !== n.toLowerCase() && (this._adHeight = t, this._adWidth = e, this._videoEl.setAttribute("width", e), this._videoEl.setAttribute("height", t)), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdSizeChange
                    })
                }, e.prototype.startAd = function() {
                    this._adIsStarted || (this.setVideoElSrc(this._mediaFile), i.ad._environmentVars.videoSlotCanAutoPlay !== !1 && (this._videoEl.load(), this._videoEl.play(), this._adIsStarted = !0, this._adIsPlaying = !0, this.timer(), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdStarted
                    }), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdImpression
                    }), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVideoStart
                    })))
                }, e.prototype.stopAd = function() {
                    this.cleanUp(), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdStopped
                    })
                }, e.prototype.pauseAd = function() {
                    1 == this._adIsPlaying && (this._videoEl.pause(), this._adIsPlaying = !1, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdPaused
                    }))
                }, e.prototype.resumeAd = function() {
                    0 == this._adIsPlaying && (this._videoEl.play(), this._adIsPlaying = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdPlaying
                    }))
                }, e.prototype.skipAd = function() {
                    this.cleanUp(), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdSkipped
                    })
                }, e.prototype.getAdLinear = function() {
                    return this._adLinear
                }, e.prototype.getAdCompanions = function() {
                    return this._adCompanions
                }, e.prototype.getAdExpanded = function() {
                    return this._adExpanded
                }, e.prototype.getAdHeight = function() {
                    return this._adHeight
                }, e.prototype.getAdWidth = function() {
                    return this._adWidth
                }, e.prototype.getAdVolume = function() {
                    return this._videoEl.volume || this._adVolume
                }, e.prototype.setAdVolume = function(e) {
                    this._adVolume = e, "number" == typeof this._videoEl.volume && (this._videoEl.volume = e), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVolumeChange
                    })
                }, e.prototype.getAdRemainingTime = function() {
                    return this._adDuration - this._videoEl.currentTime
                }, e.prototype.getAdDuration = function() {
                    return this._adDuration
                }, e.prototype.getAdIcons = function() {
                    return this._adIcons
                }, e.prototype.getAdSkippableState = function() {
                    return this._adSkippableState
                }, e.prototype.setVideoElSrc = function(e) {
                    this._videoEl.setAttribute("src", e.fileURL)
                }, e.prototype.pickMediaFile = function(e) {
                    for (var t = this._adWidth * this._adHeight, n = [], a = e.length - 1; a >= 0; a--) {
                        var r = e[a];
                        "" !== this._videoEl.canPlayType(r.mimeType) && n.push({
                            sizeDiff: Math.abs(t - r.width * r.height),
                            bitrate: r.bitrate,
                            mediaFile: r
                        })
                    }
                    0 === n.length && i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdError,
                        args: ["AdError"]
                    }), n.sort(function(e, t) {
                        var i = e.sizeDiff - t.sizeDiff;
                        return 0 !== i ? i : t.bitrate - e.bitrate
                    });
                    for (var a = n.length - 1; a >= 0; a--) {
                        var s = n[a];
                        if ("probably" === this._videoEl.canPlayType(s.mediaFile.mimeType)) return s.mediaFile
                    }
                    for (var a = n.length - 1; a >= 0; a--) {
                        var s = n[a];
                        if ("maybe" === this._videoEl.canPlayType(s.mediaFile.mimeType)) return s.mediaFile
                    }
                }, e.prototype.onAdClick = function() {
                    var e = function(e) {
                        var t = (new Date).getTime(),
                            n = 100;
                        (void 0 === this._lastClickThruTime || t - this._lastClickThruTime > n) && (this._lastClickThruTime = t, this._pauseAdOnClickThru === !0 && this.pauseAd(), i.Queue.publish("vpaid-events", {
                            type: i.VPAIDevents.AdClickThru,
                            args: [this._clickthroughURL, null, !0]
                        }))
                    };
                    return e.bind(this)
                }, e.prototype.videoErrorHandlerFn = function(e) {
                    return function(e) {
                        i.Queue.publish("vpaid-events", {
                            type: i.VPAIDevents.AdError,
                            args: ["AdError"]
                        })
                    }
                }, e.prototype.createListeners = function() {
                    i.Util.addListener(i.ad._slot, "click", this.onAdClickHandler, "slotClickHandlerFn"), i.Util.addListener(i.ad._videoSlot, "click", this.onAdClickHandler, "videoSlotClickHandlerFn"), i.Util.addListener(this._videoEl, "error", this.onErrorHandler, "videoErrorHandlerFn")
                }, e.prototype.determineQuartiles = function() {
                    var e = this._adDuration / 4;
                    this._firstQuartileTime = 0 + e, this._midpointTime = this._firstQuartileTime + e, this._thirdQuartileTime = this._midpointTime + e
                }, e.prototype.timer = function() {
                    var e = function(e) {
                        return function() {
                            e._adDuration ? e.progressWatcher() : e._videoEl.duration && (e._adDuration = e._videoEl.duration, i.ad._domElToTrack && i.Queue.publish("moat-tag", {
                                videoElement: i.ad._domElToTrack,
                                duration: e._adDuration
                            }), e.determineQuartiles(), e.progressWatcher())
                        }
                    }(this);
                    i.Util.setSafeLoop(e, [], 500)
                }, e.prototype.progressWatcher = function() {
                    this._skipoffset && this._adSkippableState === !1 && this._videoEl.currentTime > this._skipoffset && (this._adSkippableState = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdSkippableStateChange
                    })), this._adIsStarted && !this._firstQuartileReached && this._videoEl.currentTime > this._firstQuartileTime ? (this._firstQuartileReached = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVideoFirstQuartile
                    })) : this._adIsStarted && this._firstQuartileReached && !this._midpointReached && this._videoEl.currentTime > this._midpointTime ? (this._midpointReached = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVideoMidpoint
                    })) : this._adIsStarted && this._firstQuartileReached && this._midpointReached && !this._thirdQuartileReached && this._videoEl.currentTime > this._thirdQuartileTime ? (this._thirdQuartileReached = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVideoThirdQuartile
                    })) : this._adIsStarted && this._firstQuartileReached && this._midpointReached && this._thirdQuartileReached && !this._videoIsCompleted && (this._videoEl.currentTime >= this._adDuration || this._videoEl.ended) && (this.cleanUp(), this._videoIsCompleted = !0, i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdVideoComplete
                    }), i.Queue.publish("vpaid-events", {
                        type: i.VPAIDevents.AdStopped
                    }))
                }, e.prototype.cleanUp = function() {
                    i.Util.removeListener(i.ad._slot, "click", this.onAdClickHandler, "slotClickHandlerFn"), i.Util.removeListener(i.ad._videoSlot, "click", this.onAdClickHandler, "videoSlotClickHandlerFn"), i.Util.removeListener(this._videoEl, "error", this.onErrorHandler, "videoErrorHandlerFn"), i.ad._slot.style && (i.ad._slot.style.cursor = this._originalSlotCursorStyle), i.ad._videoSlot.style && (i.ad._videoSlot.style.cursor = this._originalVideoSlotCursorStyle)
                }, e
            },
            d = function() {
                var e = function(e) {
                        return i.version
                    },
                    t = function(e, t, n, r, s, d) {
                        if (this._width = e, this._height = t, this._viewMode = n || "normal", this._desiredBitrate = r, this._creativeData = s, this._environmentVars = d, this._slot = d.slot, this._videoSlot = d.videoSlot, "string" == typeof this._videoSlot.nodeName && "number" == typeof this._videoSlot.nodeType ? this._domElToTrack = this._videoSlot : this._domElToTrack = this._slot, i.qs.vast) {
                            i.VastLoader = a();
                            var l = new i.VastLoader;
                            l.request(i.qs.vast)
                        } else if (i.qs.asset) {
                            i.VideoPlayer = o();
                            var u = new i.VideoPlayer;
                            i.underlyingAsset = u;
                            var p = [{
                                fileURL: i.qs.asset,
                                mimeType: "video/mp4",
                                height: this._height,
                                width: this._width,
                                bitrate: this._desiredBitrate
                            }];
                            u.init(p, !1, i.qs.clickTag, !1)
                        } else i.Queue.publish("vpaid-events", {
                            type: i.VPAIDevents.AdError,
                            args: ["AdError"]
                        })
                    },
                    n = function(e, t, n) {
                        var a = i.playerProvidedEventCallbacks;
                        a[t] ? a[t].push({
                            fn: e,
                            listenerScope: n
                        }) : a[t] = [{
                            fn: e,
                            listenerScope: n
                        }]
                    },
                    r = function(e, t) {
                        for (var n = i.playerProvidedEventCallbacks[t], a = n.length - 1; a >= 0; a--) {
                            var r = n[a];
                            e === r && n.splice(a, 1)
                        }
                    },
                    s = function(e, t, n) {
                        i.underlyingAsset && i.underlyingAsset.resizeAd(e, t, n)
                    },
                    d = function() {
                        i.underlyingAsset && i.underlyingAsset.startAd()
                    },
                    l = function() {
                        i.underlyingAsset && i.underlyingAsset.stopAd()
                    },
                    u = function() {
                        i.underlyingAsset && i.underlyingAsset.pauseAd()
                    },
                    p = function() {
                        i.underlyingAsset && i.underlyingAsset.resumeAd()
                    },
                    c = function() {
                        i.underlyingAsset && i.underlyingAsset.expandAd()
                    },
                    h = function() {
                        i.underlyingAsset && i.underlyingAsset.collapseAd()
                    },
                    v = function() {
                        i.underlyingAsset && i.underlyingAsset.skipAd()
                    },
                    m = function(e) {
                        isNaN(e) === !1 & e >= 0 && 1 >= e && i.underlyingAsset && i.underlyingAsset.setAdVolume(e)
                    },
                    A = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdRemainingTime() : -2
                    },
                    f = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdWidth() : void 0
                    },
                    g = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdIcons() : void 0
                    },
                    y = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdSkippableState() : void 0
                    },
                    _ = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdLinear() : void 0
                    },
                    k = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdCompanions() : void 0
                    },
                    S = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdExpanded() : void 0
                    },
                    b = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdHeight() : void 0
                    },
                    C = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdVolume() : 1
                    },
                    V = function() {
                        return i.underlyingAsset ? i.underlyingAsset.getAdDuration() : -2
                    },
                    T = function() {
                        this._width, this._height, this._viewMode, this._desiredBitrate, this._creativeData, this._environmentVars, this._slot, this._videoSlot, this._domElToTrack
                    };
                return T.prototype = {
                    initAd: i.Util.makeSafe(t, !0),
                    collapseAd: i.Util.makeSafe(h, !0),
                    constructor: i.Util.makeSafe(constructor, !0),
                    expandAd: i.Util.makeSafe(c, !0),
                    getAdCompanions: i.Util.makeSafe(k, !0),
                    getAdDuration: i.Util.makeSafe(V, !0),
                    getAdExpanded: i.Util.makeSafe(S, !0),
                    getAdHeight: i.Util.makeSafe(b, !0),
                    getAdIcons: i.Util.makeSafe(g, !0),
                    getAdLinear: i.Util.makeSafe(_, !0),
                    getAdRemainingTime: i.Util.makeSafe(A, !0),
                    getAdSkippableState: i.Util.makeSafe(y, !0),
                    getAdVolume: i.Util.makeSafe(C, !0),
                    getAdWidth: i.Util.makeSafe(f, !0),
                    handshakeVersion: i.Util.makeSafe(e, !0),
                    pauseAd: i.Util.makeSafe(u, !0),
                    resizeAd: i.Util.makeSafe(s, !0),
                    resumeAd: i.Util.makeSafe(p, !0),
                    setAdVolume: i.Util.makeSafe(m, !0),
                    skipAd: i.Util.makeSafe(v, !0),
                    startAd: i.Util.makeSafe(d, !0),
                    stopAd: i.Util.makeSafe(l, !0),
                    subscribe: i.Util.makeSafe(n, !0),
                    unsubscribe: i.Util.makeSafe(r, !0)
                }, T
            },
            l = function() {
                var e = {
                    "vpaid-events": [],
                    "moat-tag": [],
                    "internal-events": []
                };
                return {
                    subscribe: function(t, i) {
                        if (e[t]) {
                            var n = e[t].push(i) - 1;
                            return {
                                remove: function() {
                                    delete e[t][n]
                                }
                            }
                        }
                    },
                    publish: function(t, i) {
                        if (e[t])
                            for (var n = e[t], a = n.length - 1; a >= 0; a--) {
                                var r = n[a];
                                "function" == typeof r && r.call(null, i)
                            }
                    }
                }
            },
            u = function() {
                var e = 0,
                    t = Math.floor(Math.random() * Math.pow(10, 8));
                i.Queue.subscribe("vpaid-events", function(n) {
                    var a = {};
                    a.e = 32, a.q = e++, a.g = e, a.d = encodeURIComponent(i.qs.pcode + ":" + n.type + ":unknown:unknown"), a.i = "VPAID2JSWRAPPER1", a.t = i.startTime, a.m = (new Date).getTime() - i.startTime, a.ar = encodeURIComponent("5da836b-clean"), a.de = t;
                    var r = i.Util.objectToQueryString(a, !1),
                        s = "//pixel.moatads.com/pixel.gif?" + r + "&bq=8&o=3&ac=1&cs=0";
                    (new Image).src = s
                })
            };
        ! function() {
            var e = function() {
                i.Util = t(), i.Queue = l(), i.VpaidAd = d(), i.MoatTag = n(), s(), u();
                var e = i.Util.parseQS();
                if (e) {
                    i.qs = e;
                    var a = {};
                    for (var r in e) a[r] = e[r];
                    return new i.MoatTag(i.qs.pcode, a), new i.VpaidAd
                }
            };
            window.getVPAIDAd = function() {
                if (i.ad) return i.ad;
                var t = e();
                return i.ad = t
            }
        }()
    } catch (e) {
        try {
            var p = "//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + encodeURIComponent("GENERICTAG_VPAID2JS1") + "&ac=1&k=" + encodeURIComponent(e) + "&ar=" + encodeURIComponent("5da836b-clean") + "&j=" + encodeURIComponent(document.referrer) + "&cs=" + (new Date).getTime();
            (new Image).src = p
        } catch (e) {}
    }
}();


/**
 * Copyright (c) 2013 Olivier Poitrey <rs@dailymotion.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

! function() {
    try {
        ! function(e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
            else if ("function" == typeof define && define.amd) define([], e);
            else {
                var t;
                "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.DMVAST = e()
            }
        }(function() {
            return function e(t, n, r) {
                function i(o, a) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var l = "function" == typeof require && require;
                            if (!a && l) return l(o, !0);
                            if (s) return s(o, !0);
                            throw new Error("Cannot find module '" + o + "'")
                        }
                        var u = n[o] = {
                            exports: {}
                        };
                        t[o][0].call(u.exports, function(e) {
                            var n = t[o][1][e];
                            return i(n ? n : e)
                        }, u, u.exports, e, t, n, r)
                    }
                    return n[o].exports
                }
                for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
                return i
            }({
                1: [function(e, t, n) {
                    function r() {
                        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                    }

                    function i(e) {
                        return "function" == typeof e
                    }

                    function s(e) {
                        return "number" == typeof e
                    }

                    function o(e) {
                        return "object" == typeof e && null !== e
                    }

                    function a(e) {
                        return void 0 === e
                    }
                    t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
                        if (!s(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
                        return this._maxListeners = e, this
                    }, r.prototype.emit = function(e) {
                        var t, n, r, s, l, u;
                        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                            if (t = arguments[1], t instanceof Error) throw t;
                            throw TypeError('Uncaught, unspecified "error" event.')
                        }
                        if (n = this._events[e], a(n)) return !1;
                        if (i(n)) switch (arguments.length) {
                            case 1:
                                n.call(this);
                                break;
                            case 2:
                                n.call(this, arguments[1]);
                                break;
                            case 3:
                                n.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (r = arguments.length, s = new Array(r - 1), l = 1; r > l; l++) s[l - 1] = arguments[l];
                                n.apply(this, s)
                        } else if (o(n)) {
                            for (r = arguments.length, s = new Array(r - 1), l = 1; r > l; l++) s[l - 1] = arguments[l];
                            for (u = n.slice(), r = u.length, l = 0; r > l; l++) u[l].apply(this, s)
                        }
                        return !0
                    }, r.prototype.addListener = function(e, t) {
                        var n;
                        if (!i(t)) throw TypeError("listener must be a function");
                        if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned) {
                            var n;
                            n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())
                        }
                        return this
                    }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
                        function n() {
                            this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
                        }
                        if (!i(t)) throw TypeError("listener must be a function");
                        var r = !1;
                        return n.listener = t, this.on(e, n), this
                    }, r.prototype.removeListener = function(e, t) {
                        var n, r, s, a;
                        if (!i(t)) throw TypeError("listener must be a function");
                        if (!this._events || !this._events[e]) return this;
                        if (n = this._events[e], s = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                        else if (o(n)) {
                            for (a = s; a-- > 0;)
                                if (n[a] === t || n[a].listener && n[a].listener === t) {
                                    r = a;
                                    break
                                }
                            if (0 > r) return this;
                            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
                        }
                        return this
                    }, r.prototype.removeAllListeners = function(e) {
                        var t, n;
                        if (!this._events) return this;
                        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                        if (0 === arguments.length) {
                            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                            return this.removeAllListeners("removeListener"), this._events = {}, this
                        }
                        if (n = this._events[e], i(n)) this.removeListener(e, n);
                        else
                            for (; n.length;) this.removeListener(e, n[n.length - 1]);
                        return delete this._events[e], this
                    }, r.prototype.listeners = function(e) {
                        var t;
                        return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                    }, r.listenerCount = function(e, t) {
                        var n;
                        return n = e._events && e._events[t] ? i(e._events[t]) ? 1 : e._events[t].length : 0
                    }
                }, {}],
                2: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {
                            this.id = null, this.errorURLTemplates = [], this.impressionURLTemplates = [], this.creatives = []
                        }
                        return e
                    }(), t.exports = r
                }, {}],
                3: [function(e, t, n) {
                    var r, i, s;
                    i = e("./parser"), s = e("./util"), r = function() {
                        function e() {}
                        return e.cappingFreeLunch = 0, e.cappingMinimumTimeInterval = 0, e.options = {
                                withCredentials: !1,
                                timeout: 0
                            }, e.get = function(e, t, r) {
                                var s, o, a;
                                return o = +new Date, s = n.extend = function(e, t) {
                                    var n, r;
                                    for (n in t) r = t[n], e[n] = r;
                                    return e
                                }, r || ("function" == typeof t && (r = t), a = {}), a = s(this.options, t), this.totalCallsTimeout < o ? (this.totalCalls = 1, this.totalCallsTimeout = o + 36e5) : this.totalCalls++, this.cappingFreeLunch >= this.totalCalls ? void r(null) : o - this.lastSuccessfullAd < this.cappingMinimumTimeInterval ? void r(null) : i.parse(e, a, function(e) {
                                    return function(e) {
                                        return r(e)
                                    }
                                }(this))
                            },
                            function() {
                                var t, n;
                                n = s.storage, t = Object.defineProperty, ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function(r) {
                                    t(e, r, {
                                        get: function() {
                                            return n.getItem(r)
                                        },
                                        set: function(e) {
                                            return n.setItem(r, e)
                                        },
                                        configurable: !1,
                                        enumerable: !0
                                    })
                                }), null == e.totalCalls && (e.totalCalls = 0), null == e.totalCallsTimeout && (e.totalCallsTimeout = 0)
                            }(), e
                    }(), t.exports = r
                }, {
                    "./parser": 8,
                    "./util": 14
                }],
                4: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {
                            this.id = null, this.width = 0, this.height = 0, this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.companionClickThroughURLTemplate = null, this.trackingEvents = {}
                        }
                        return e
                    }(), t.exports = r
                }, {}],
                5: [function(e, t, n) {
                    var r, i, s, o, a = {}.hasOwnProperty,
                        l = function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            for (var r in t) a.call(t, r) && (e[r] = t[r]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        };
                    r = function() {
                        function e() {
                            this.trackingEvents = {}
                        }
                        return e
                    }(), s = function(e) {
                        function t() {
                            t.__super__.constructor.apply(this, arguments), this.type = "linear", this.duration = 0, this.skipDelay = null, this.mediaFiles = [], this.videoClickThroughURLTemplate = null, this.videoClickTrackingURLTemplates = [], this.videoCustomClickURLTemplates = [], this.adParameters = null
                        }
                        return l(t, e), t
                    }(r), o = function(e) {
                        function t() {
                            return t.__super__.constructor.apply(this, arguments)
                        }
                        return l(t, e), t
                    }(r), i = function(e) {
                        function t() {
                            this.type = "companion", this.variations = [], this.videoClickTrackingURLTemplates = []
                        }
                        return l(t, e), t
                    }(r), t.exports = {
                        VASTCreativeLinear: s,
                        VASTCreativeNonLinear: o,
                        VASTCreativeCompanion: i
                    }
                }, {}],
                6: [function(e, t, n) {
                    t.exports = {
                        client: e("./client"),
                        tracker: e("./tracker"),
                        parser: e("./parser"),
                        util: e("./util")
                    }
                }, {
                    "./client": 3,
                    "./parser": 8,
                    "./tracker": 10,
                    "./util": 14
                }],
                7: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {
                            this.id = null, this.fileURL = null, this.deliveryType = "progressive", this.mimeType = null, this.codec = null, this.bitrate = 0, this.minBitrate = 0, this.maxBitrate = 0, this.width = 0, this.height = 0, this.apiFramework = null, this.scalable = null, this.maintainAspectRatio = null
                        }
                        return e
                    }(), t.exports = r
                }, {}],
                8: [function(e, t, n) {
                    var r, i, s, o, a, l, u, h, c, p, f = [].indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    };
                    i = e("./urlhandler"), c = e("./response"), s = e("./ad"), p = e("./util"), l = e("./creative").VASTCreativeLinear, a = e("./creative").VASTCreativeCompanion, u = e("./mediafile"), o = e("./companionad"), r = e("events").EventEmitter, h = function() {
                        function e() {}
                        var t;
                        return t = [], e.addURLTemplateFilter = function(e) {
                            "function" == typeof e && t.push(e)
                        }, e.removeURLTemplateFilter = function() {
                            return t.pop()
                        }, e.countURLTemplateFilters = function() {
                            return t.length
                        }, e.clearUrlTemplateFilters = function() {
                            return t = []
                        }, e.parse = function(e, t, n) {
                            return n || ("function" == typeof t && (n = t), t = {}), this._parse(e, null, t, function(e, t) {
                                return n(t)
                            })
                        }, e.vent = new r, e.track = function(e, t) {
                            return this.vent.emit("VAST-error", t), p.track(e, t)
                        }, e.on = function(e, t) {
                            return this.vent.on(e, t)
                        }, e.once = function(e, t) {
                            return this.vent.once(e, t)
                        }, e._parse = function(e, n, r, s) {
                            var o, a, l;
                            for (s || ("function" == typeof r && (s = r), r = {}), a = 0, l = t.length; l > a; a++) o = t[a], e = o(e);
                            return null == n && (n = []), n.push(e), i.get(e, r, function(t) {
                                return function(i, o) {
                                    var a, l, u, h, p, d, m, v, g, T, y;
                                    if (null != i) return s(i);
                                    if (p = new c, null == (null != o ? o.documentElement : void 0) || "VAST" !== o.documentElement.nodeName) return s();
                                    for (T = o.documentElement.childNodes, d = 0, v = T.length; v > d; d++) h = T[d], "Error" === h.nodeName && p.errorURLTemplates.push(t.parseNodeText(h));
                                    for (y = o.documentElement.childNodes, m = 0, g = y.length; g > m; m++) h = y[m], "Ad" === h.nodeName && (a = t.parseAdElement(h), null != a ? p.ads.push(a) : t.track(p.errorURLTemplates, {
                                        ERRORCODE: 101
                                    }));
                                    for (l = function(e) {
                                            var n, r, i;
                                            if (null == e && (e = !1), p) {
                                                for (i = p.ads, n = 0, r = i.length; r > n; n++)
                                                    if (a = i[n], null != a.nextWrapperURL) return;
                                                return 0 === p.ads.length && (e || t.track(p.errorURLTemplates, {
                                                    ERRORCODE: 303
                                                }), p = null), s(null, p)
                                            }
                                        }, u = p.ads.length; u--;) a = p.ads[u], null != a.nextWrapperURL && ! function(i) {
                                        var s, o, a;
                                        return n.length >= 10 || (a = i.nextWrapperURL, f.call(n, a) >= 0) ? (t.track(i.errorURLTemplates, {
                                            ERRORCODE: 302
                                        }), p.ads.splice(p.ads.indexOf(i), 1), void l()) : (0 === i.nextWrapperURL.indexOf("//") ? (o = location.protocol, i.nextWrapperURL = "" + o + i.nextWrapperURL) : -1 === i.nextWrapperURL.indexOf("://") && (s = e.slice(0, e.lastIndexOf("/")), i.nextWrapperURL = "" + s + "/" + i.nextWrapperURL), t._parse(i.nextWrapperURL, n, r, function(e, n) {
                                            var r, s, o, a, u, h, c, f, d, m, v, g, T, y, k, L, R, w;
                                            if (s = !1, null != e) t.track(i.errorURLTemplates, {
                                                ERRORCODE: 301
                                            }), p.ads.splice(p.ads.indexOf(i), 1), s = !0;
                                            else if (null == n) t.track(i.errorURLTemplates, {
                                                ERRORCODE: 303
                                            }), p.ads.splice(p.ads.indexOf(i), 1), s = !0;
                                            else
                                                for (p.errorURLTemplates = p.errorURLTemplates.concat(n.errorURLTemplates), a = p.ads.indexOf(i), p.ads.splice(a, 1), k = n.ads, c = 0, f = k.length; f > c; c++) {
                                                    if (u = k[c], u.errorURLTemplates = i.errorURLTemplates.concat(u.errorURLTemplates), u.impressionURLTemplates = i.impressionURLTemplates.concat(u.impressionURLTemplates), null != i.trackingEvents)
                                                        for (L = u.creatives, g = 0, d = L.length; d > g; g++)
                                                            if (r = L[g], "linear" === r.type)
                                                                for (R = Object.keys(i.trackingEvents), T = 0, m = R.length; m > T; T++) o = R[T], (h = r.trackingEvents)[o] || (h[o] = []), r.trackingEvents[o] = r.trackingEvents[o].concat(i.trackingEvents[o]);
                                                    if (null != i.videoClickTrackingURLTemplates)
                                                        for (w = u.creatives, y = 0, v = w.length; v > y; y++) r = w[y], "linear" === r.type && (r.videoClickTrackingURLTemplates = r.videoClickTrackingURLTemplates.concat(i.videoClickTrackingURLTemplates));
                                                    p.ads.splice(a, 0, u)
                                                }
                                            return delete i.nextWrapperURL, l(s)
                                        }))
                                    }(a);
                                    return l()
                                }
                            }(this))
                        }, e.childByName = function(e, t) {
                            var n, r, i, s;
                            for (s = e.childNodes, r = 0, i = s.length; i > r; r++)
                                if (n = s[r], n.nodeName === t) return n
                        }, e.childsByName = function(e, t) {
                            var n, r, i, s, o;
                            for (r = [], o = e.childNodes, i = 0, s = o.length; s > i; i++) n = o[i], n.nodeName === t && r.push(n);
                            return r
                        }, e.parseAdElement = function(e) {
                            var t, n, r, i;
                            for (i = e.childNodes, n = 0, r = i.length; r > n; n++) {
                                if (t = i[n], t.id = e.getAttribute("id"), "Wrapper" === t.nodeName) return this.parseWrapperElement(t);
                                if ("InLine" === t.nodeName) return this.parseInLineElement(t)
                            }
                        }, e.parseWrapperElement = function(e) {
                            var t, n, r, i, s, o, a;
                            for (t = this.parseInLineElement(e), i = this.childByName(e, "VASTAdTagURI"), null != i ? t.nextWrapperURL = this.parseNodeText(i) : (i = this.childByName(e, "VASTAdTagURL"), null != i && (t.nextWrapperURL = this.parseNodeText(this.childByName(i, "URL")))), r = null, a = t.creatives, s = 0, o = a.length; o > s; s++)
                                if (n = a[s], "linear" === n.type) {
                                    r = n;
                                    break
                                }
                            return null != r && (null != r.trackingEvents && (t.trackingEvents = r.trackingEvents), null != r.videoClickTrackingURLTemplates && (t.videoClickTrackingURLTemplates = r.videoClickTrackingURLTemplates)), null != t.nextWrapperURL ? t : void 0
                        }, e.parseInLineElement = function(e) {
                            var t, n, r, i, o, a, l, u, h, c, p, f, d, m;
                            for (t = new s, t.id = e.id, f = e.childNodes, a = 0, h = f.length; h > a; a++) switch (o = f[a], o.nodeName) {
                                case "Error":
                                    t.errorURLTemplates.push(this.parseNodeText(o));
                                    break;
                                case "Impression":
                                    t.impressionURLTemplates.push(this.parseNodeText(o));
                                    break;
                                case "Creatives":
                                    for (d = this.childsByName(o, "Creative"), l = 0, c = d.length; c > l; l++)
                                        for (r = d[l], m = r.childNodes, u = 0, p = m.length; p > u; u++) switch (i = m[u], i.nodeName) {
                                            case "Linear":
                                                n = this.parseCreativeLinearElement(i), n && t.creatives.push(n);
                                                break;
                                            case "CompanionAds":
                                                n = this.parseCompanionAd(i), n && t.creatives.push(n)
                                        }
                            }
                            return t
                        }, e.parseCreativeLinearElement = function(e) {
                            var t, n, r, i, s, o, a, h, c, p, f, d, m, v, g, T, y, k, L, R, w, x, U, C, E, N, _, A, b, D, I, B, O, M, S, F;
                            if (r = new l, r.duration = this.parseDuration(this.parseNodeText(this.childByName(e, "Duration"))), -1 === r.duration && "Wrapper" !== e.parentNode.parentNode.parentNode.nodeName) return null;
                            if (m = e.getAttribute("skipoffset"), null == m ? r.skipDelay = null : "%" === m.charAt(m.length - 1) ? (f = parseInt(m, 10), r.skipDelay = r.duration * (f / 100)) : r.skipDelay = this.parseDuration(m), y = this.childByName(e, "VideoClicks"), null != y) {
                                for (r.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(y, "ClickThrough")), I = this.childsByName(y, "ClickTracking"), L = 0, U = I.length; U > L; L++) n = I[L], r.videoClickTrackingURLTemplates.push(this.parseNodeText(n));
                                for (B = this.childsByName(y, "CustomClick"), R = 0, C = B.length; C > R; R++) i = B[R], r.videoCustomClickURLTemplates.push(this.parseNodeText(i))
                            }
                            for (t = this.childByName(e, "AdParameters"), null != t && (r.adParameters = this.parseNodeText(t)), O = this.childsByName(e, "TrackingEvents"), w = 0, E = O.length; E > w; w++)
                                for (g = O[w], M = this.childsByName(g, "Tracking"), x = 0, N = M.length; N > x; x++)
                                    if (v = M[x], s = v.getAttribute("event"), T = this.parseNodeText(v), null != s && null != T) {
                                        if ("progress" === s) {
                                            if (p = v.getAttribute("offset"), !p) continue;
                                            s = "%" === p.charAt(p.length - 1) ? "progress-" + p : "progress-" + Math.round(this.parseDuration(p))
                                        }
                                        null == (k = r.trackingEvents)[s] && (k[s] = []), r.trackingEvents[s].push(T)
                                    }
                            for (S = this.childsByName(e, "MediaFiles"), b = 0, _ = S.length; _ > b; b++)
                                for (c = S[b], F = this.childsByName(c, "MediaFile"), D = 0, A = F.length; A > D; D++) h = F[D], a = new u, a.id = h.getAttribute("id"), a.fileURL = this.parseNodeText(h), a.deliveryType = h.getAttribute("delivery"), a.codec = h.getAttribute("codec"), a.mimeType = h.getAttribute("type"), a.apiFramework = h.getAttribute("apiFramework"), a.bitrate = parseInt(h.getAttribute("bitrate") || 0), a.minBitrate = parseInt(h.getAttribute("minBitrate") || 0), a.maxBitrate = parseInt(h.getAttribute("maxBitrate") || 0), a.width = parseInt(h.getAttribute("width") || 0), a.height = parseInt(h.getAttribute("height") || 0), d = h.getAttribute("scalable"), d && "string" == typeof d && (d = d.toLowerCase(), "true" === d ? a.scalable = !0 : "false" === d && (a.scalable = !1)), o = h.getAttribute("maintainAspectRatio"), o && "string" == typeof o && (o = o.toLowerCase(), "true" === o ? a.maintainAspectRatio = !0 : "false" === o && (a.maintainAspectRatio = !1)), r.mediaFiles.push(a);
                            return r
                        }, e.parseCompanionAd = function(e) {
                            var t, n, r, i, s, l, u, h, c, p, f, d, m, v, g, T, y, k, L, R, w, x, U, C, E, N, _, A, b;
                            for (r = new a, C = this.childsByName(e, "Companion"), d = 0, T = C.length; T > d; d++) {
                                for (n = C[d], t = new o, t.id = n.getAttribute("id") || null, t.width = n.getAttribute("width"), t.height = n.getAttribute("height"), E = this.childsByName(n, "HTMLResource"), m = 0, y = E.length; y > m; m++) s = E[m], t.type = s.getAttribute("creativeType") || "text/html", t.htmlResource = this.parseNodeText(s);
                                for (N = this.childsByName(n, "IFrameResource"), v = 0, k = N.length; k > v; v++) l = N[v], t.type = l.getAttribute("creativeType") || 0, t.iframeResource = this.parseNodeText(l);
                                for (_ = this.childsByName(n, "StaticResource"), g = 0, L = _.length; L > g; g++) u = _[g], t.type = u.getAttribute("creativeType") || 0, t.staticResource = this.parseNodeText(u);
                                for (A = this.childsByName(n, "TrackingEvents"), x = 0, R = A.length; R > x; x++)
                                    for (c = A[x], b = this.childsByName(c, "Tracking"), U = 0, w = b.length; w > U; U++) h = b[U], i = h.getAttribute("event"), p = this.parseNodeText(h), null != i && null != p && (null == (f = t.trackingEvents)[i] && (f[i] = []), t.trackingEvents[i].push(p));
                                t.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(n, "CompanionClickThrough")), r.variations.push(t)
                            }
                            return r
                        }, e.parseDuration = function(e) {
                            var t, n, r, i, s;
                            return null == e ? -1 : (t = e.split(":"), 3 !== t.length ? -1 : (s = t[2].split("."), i = parseInt(s[0]), 2 === s.length && (i += parseFloat("0." + s[1])), r = parseInt(60 * t[1]), n = parseInt(60 * t[0] * 60), isNaN(n || isNaN(r || isNaN(i || r > 3600 || i > 60))) ? -1 : n + r + i))
                        }, e.parseNodeText = function(e) {
                            return e && (e.textContent || e.text || "").trim()
                        }, e
                    }(), t.exports = h
                }, {
                    "./ad": 2,
                    "./companionad": 4,
                    "./creative": 5,
                    "./mediafile": 7,
                    "./response": 9,
                    "./urlhandler": 11,
                    "./util": 14,
                    events: 1
                }],
                9: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {
                            this.ads = [], this.errorURLTemplates = []
                        }
                        return e
                    }(), t.exports = r
                }, {}],
                10: [function(e, t, n) {
                    var r, i, s, o, a, l = {}.hasOwnProperty,
                        u = function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            for (var r in t) l.call(t, r) && (e[r] = t[r]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        };
                    i = e("./client"), a = e("./util"), s = e("./creative").VASTCreativeLinear, r = e("events").EventEmitter, o = function(e) {
                        function t(e, t) {
                            var n, r, o;
                            this.ad = e, this.creative = t, this.muted = !1, this.impressed = !1, this.skipable = !1, this.skipDelayDefault = -1, this.trackingEvents = {}, this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], o = this.creative.trackingEvents;
                            for (n in o) r = o[n], this.trackingEvents[n] = r.slice(0);
                            this.creative instanceof s ? (this.setDuration(this.creative.duration), this.skipDelay = this.creative.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates) : (this.skipDelay = -1, this.linear = !1), this.on("start", function() {
                                i.lastSuccessfullAd = +new Date
                            })
                        }
                        return u(t, e), t.prototype.setDuration = function(e) {
                            return this.assetDuration = e, this.quartiles = {
                                firstQuartile: Math.round(25 * this.assetDuration) / 100,
                                midpoint: Math.round(50 * this.assetDuration) / 100,
                                thirdQuartile: Math.round(75 * this.assetDuration) / 100
                            }
                        }, t.prototype.setProgress = function(e) {
                            var t, n, r, i, s, o, a, l, u;
                            if (s = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay, -1 === s || this.skipable || (s > e ? this.emit("skip-countdown", s - e) : (this.skipable = !0, this.emit("skip-countdown", 0))), this.linear && this.assetDuration > 0) {
                                if (n = [], e > 0) {
                                    n.push("start"), r = Math.round(e / this.assetDuration * 100), n.push("progress-" + r + "%"), n.push("progress-" + Math.round(e)), u = this.quartiles;
                                    for (i in u) o = u[i], e >= o && o + 1 >= e && n.push(i)
                                }
                                for (a = 0, l = n.length; l > a; a++) t = n[a], this.track(t, !0);
                                e < this.progress && this.track("rewind")
                            }
                            return this.progress = e
                        }, t.prototype.setMuted = function(e) {
                            return this.muted !== e && this.track(e ? "mute" : "unmute"), this.muted = e
                        }, t.prototype.setPaused = function(e) {
                            return this.paused !== e && this.track(e ? "pause" : "resume"), this.paused = e
                        }, t.prototype.setFullscreen = function(e) {
                            return this.fullscreen !== e && this.track(e ? "fullscreen" : "exitFullscreen"), this.fullscreen = e
                        }, t.prototype.setSkipDelay = function(e) {
                            return "number" == typeof e ? this.skipDelay = e : void 0
                        }, t.prototype.load = function() {
                            return this.impressed ? void 0 : (this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates), this.track("creativeView"))
                        }, t.prototype.errorWithCode = function(e) {
                            return this.trackURLs(this.ad.errorURLTemplates, {
                                ERRORCODE: e
                            })
                        }, t.prototype.complete = function() {
                            return this.track("complete")
                        }, t.prototype.close = function() {
                            return this.track(this.linear ? "closeLinear" : "close")
                        }, t.prototype.stop = function() {}, t.prototype.skip = function() {
                            return this.track("skip"), this.trackingEvents = []
                        }, t.prototype.click = function() {
                            var e, t, n;
                            return (null != (n = this.clickTrackingURLTemplates) ? n.length : void 0) && this.trackURLs(this.clickTrackingURLTemplates), null != this.clickThroughURLTemplate ? (this.linear && (t = {
                                CONTENTPLAYHEAD: this.progressFormated()
                            }), e = a.resolveURLTemplates([this.clickThroughURLTemplate], t)[0], this.emit("clickthrough", e)) : void 0
                        }, t.prototype.track = function(e, t) {
                            var n, r;
                            null == t && (t = !1), "closeLinear" === e && null == this.trackingEvents[e] && null != this.trackingEvents.close && (e = "close"), r = this.trackingEvents[e], n = this.emitAlwaysEvents.indexOf(e), null != r ? (this.emit(e, ""), this.trackURLs(r)) : -1 !== n && this.emit(e, ""), t === !0 && (delete this.trackingEvents[e], n > -1 && this.emitAlwaysEvents.splice(n, 1))
                        }, t.prototype.trackURLs = function(e, t) {
                            return null == t && (t = {}), this.linear && (t.CONTENTPLAYHEAD = this.progressFormated()), a.track(e, t)
                        }, t.prototype.progressFormated = function() {
                            var e, t, n, r, i;
                            return i = parseInt(this.progress), e = i / 3600, e.length < 2 && (e = "0" + e), t = i / 60 % 60, t.length < 2 && (t = "0" + t), r = i % 60, r.length < 2 && (r = "0" + t), n = parseInt(100 * (this.progress - i)), "" + e + ":" + t + ":" + r + "." + n
                        }, t
                    }(r), t.exports = o
                }, {
                    "./client": 3,
                    "./creative": 5,
                    "./util": 14,
                    events: 1
                }],
                11: [function(e, t, n) {
                    var r, i, s;
                    s = e("./urlhandlers/xmlhttprequest"), i = e("./urlhandlers/flash"), r = function() {
                        function t() {}
                        return t.get = function(t, n, r) {
                            return r || ("function" == typeof n && (r = n), n = {}), n.urlhandler && n.urlhandler.supported() ? n.urlhandler.get(t, n, r) : "undefined" == typeof window || null === window ? e("./urlhandlers/node").get(t, n, r) : s.supported() ? s.get(t, n, r) : i.supported() ? i.get(t, n, r) : r()
                        }, t
                    }(), t.exports = r
                }, {
                    "./urlhandlers/flash": 12,
                    "./urlhandlers/xmlhttprequest": 13
                }],
                12: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {}
                        return e.xdr = function() {
                            var e;
                            return window.XDomainRequest && (e = new XDomainRequest), e
                        }, e.supported = function() {
                            return !!this.xdr()
                        }, e.get = function(e, t, n) {
                            var r, i;
                            return (i = "function" == typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) ? (i.async = !1, r = this.xdr(), r.open("GET", e), r.timeout = t.timeout || 0, r.withCredentials = t.withCredentials || !1, r.send(), r.onprogress = function() {}, r.onload = function() {
                                return i.loadXML(r.responseText), n(null, i)
                            }) : n()
                        }, e
                    }(), t.exports = r
                }, {}],
                13: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {}
                        return e.xhr = function() {
                            var e;
                            return e = new window.XMLHttpRequest, "withCredentials" in e ? e : void 0
                        }, e.supported = function() {
                            return !!this.xhr()
                        }, e.get = function(e, t, n) {
                            var r;
                            try {
                                return r = this.xhr(), r.open("GET", e), r.timeout = t.timeout || 0, r.withCredentials = t.withCredentials || !1, r.send(), r.onreadystatechange = function() {
                                    return 4 === r.readyState ? n(null, r.responseXML) : void 0
                                }
                            } catch (e) {
                                return n()
                            }
                        }, e
                    }(), t.exports = r
                }, {}],
                14: [function(e, t, n) {
                    var r;
                    r = function() {
                        function e() {}
                        return e.track = function(e, t) {
                            var n, r, i, s, o, a;
                            for (r = this.resolveURLTemplates(e, t), a = [], s = 0, o = r.length; o > s; s++) n = r[s], "undefined" != typeof window && null !== window && (i = new Image, a.push(i.src = n));
                            return a
                        }, e.resolveURLTemplates = function(e, t) {
                            var n, r, i, s, o, a, l, u, h;
                            r = [], null == t && (t = {}), "CACHEBUSTING" in t || (t.CACHEBUSTING = Math.round(1e10 * Math.random())), t.random = t.CACHEBUSTING;
                            for (u = 0, h = e.length; h > u; u++)
                                if (n = e[u], a = n) {
                                    for (i in t) l = t[i], s = "[" + i + "]", o = "%%" + i + "%%", a = a.replace(s, l), a = a.replace(o, l);
                                    r.push(a)
                                }
                            return r
                        }, e.storage = function() {
                            var e, t, n, r;
                            try {
                                n = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                            } catch (e) {
                                r = e, n = null
                            }
                            return t = function(e) {
                                var t, n;
                                try {
                                    if (n = "__VASTUtil__", e.setItem(n, n), e.getItem(n) !== n) return !0
                                } catch (e) {
                                    return t = e, !0
                                }
                                return !1
                            }, (null == n || t(n)) && (e = {}, n = {
                                length: 0,
                                getItem: function(t) {
                                    return e[t]
                                },
                                setItem: function(t, n) {
                                    e[t] = n, this.length = Object.keys(e).length
                                },
                                removeItem: function(t) {
                                    delete e[t], this.length = Object.keys(e).length
                                },
                                clear: function() {
                                    e = {}, this.length = 0
                                }
                            }), n
                        }(), e
                    }(), t.exports = r
                }, {}]
            }, {}, [6])(6)
        })
    } catch (t) {
        try {
            var e = "//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + encodeURIComponent("GENERICTAG_VPAID2JS1") + "&ac=1&k=" + encodeURIComponent(t) + "&ar=" + encodeURIComponent("5da836b-clean") + "&j=" + encodeURIComponent(document.referrer) + "&cs=" + (new Date).getTime();
            (new Image).src = e
        } catch (e) {}
    }
}();