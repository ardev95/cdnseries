!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/",
    i(i.s = 32)
}([function(e, t, i) {
    (function(t) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
        e.exports = i
    }
    ).call(this, i(5))
}
, function(e, t, i) {
    (function(t) {
        var n, r = void 0 !== t ? t : "undefined" != typeof window ? window : {}, a = i(34);
        "undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = a),
        e.exports = n
    }
    ).call(this, i(5))
}
, function(e, t) {
    function i(e) {
        if (e && "object" == typeof e) {
            var t = e.which || e.keyCode || e.charCode;
            t && (e = t)
        }
        if ("number" == typeof e)
            return s[e];
        var i, a = String(e);
        return (i = n[a.toLowerCase()]) ? i : (i = r[a.toLowerCase()]) || (1 === a.length ? a.charCodeAt(0) : void 0)
    }
    i.isEventKey = function(e, t) {
        if (e && "object" == typeof e) {
            var i = e.which || e.keyCode || e.charCode;
            if (null == i)
                return !1;
            if ("string" == typeof t) {
                var a;
                if (a = n[t.toLowerCase()])
                    return a === i;
                if (a = r[t.toLowerCase()])
                    return a === i
            } else if ("number" == typeof t)
                return t === i;
            return !1
        }
    }
    ;
    var n = (t = e.exports = i).code = t.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
    }
      , r = t.aliases = {
        windows: 91,
        "â‡§": 16,
        "âŒ¥": 18,
        "âŒƒ": 17,
        "âŒ˜": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
    };
    for (a = 97; a < 123; a++)
        n[String.fromCharCode(a)] = a - 32;
    for (var a = 48; a < 58; a++)
        n[a - 48] = a;
    for (a = 1; a < 13; a++)
        n["f" + a] = a + 111;
    for (a = 0; a < 10; a++)
        n["numpad " + a] = a + 96;
    var s = t.names = t.title = {};
    for (a in n)
        s[n[a]] = a;
    for (var o in r)
        n[o] = r[o]
}
, function(e, t, i) {
    "use strict";
    var n = function() {
        this.init = function() {
            var e = {};
            this.on = function(t, i) {
                e[t] || (e[t] = []),
                e[t] = e[t].concat(i)
            }
            ,
            this.off = function(t, i) {
                var n;
                return !!e[t] && (n = e[t].indexOf(i),
                e[t] = e[t].slice(),
                e[t].splice(n, 1),
                n > -1)
            }
            ,
            this.trigger = function(t) {
                var i, n, r, a;
                if (i = e[t])
                    if (2 === arguments.length)
                        for (r = i.length,
                        n = 0; n < r; ++n)
                            i[n].call(this, arguments[1]);
                    else {
                        for (a = [],
                        n = arguments.length,
                        n = 1; n < arguments.length; ++n)
                            a.push(arguments[n]);
                        for (r = i.length,
                        n = 0; n < r; ++n)
                            i[n].apply(this, a)
                    }
            }
            ,
            this.dispose = function() {
                e = {}
            }
        }
    };
    n.prototype.pipe = function(e) {
        return this.on("data", function(t) {
            e.push(t)
        }),
        this.on("done", function(t) {
            e.flush(t)
        }),
        e
    }
    ,
    n.prototype.push = function(e) {
        this.trigger("data", e)
    }
    ,
    n.prototype.flush = function(e) {
        this.trigger("done", e)
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n, r, a, s, o, u = i(55).toUnsigned;
    n = function(e, t) {
        var i, a, s, o, l, c = [];
        if (!t.length)
            return null;
        for (i = 0; i < e.byteLength; )
            a = u(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]),
            s = r(e.subarray(i + 4, i + 8)),
            o = a > 1 ? i + a : e.byteLength,
            s === t[0] && (1 === t.length ? c.push(e.subarray(i + 8, o)) : (l = n(e.subarray(i + 8, o), t.slice(1))).length && (c = c.concat(l))),
            i = o;
        return c
    }
    ,
    r = function(e) {
        var t = "";
        return t += String.fromCharCode(e[0]),
        t += String.fromCharCode(e[1]),
        t += String.fromCharCode(e[2]),
        t += String.fromCharCode(e[3])
    }
    ,
    a = function(e) {
        return n(e, ["moov", "trak"]).reduce(function(e, t) {
            var i, r, a, s, o;
            return (i = n(t, ["tkhd"])[0]) ? (r = i[0],
            s = u(i[a = 0 === r ? 12 : 20] << 24 | i[a + 1] << 16 | i[a + 2] << 8 | i[a + 3]),
            (o = n(t, ["mdia", "mdhd"])[0]) ? (a = 0 === (r = o[0]) ? 12 : 20,
            e[s] = u(o[a] << 24 | o[a + 1] << 16 | o[a + 2] << 8 | o[a + 3]),
            e) : null) : null
        }, {})
    }
    ,
    s = function(e, t) {
        var i, r, a;
        return i = n(t, ["moof", "traf"]),
        r = [].concat.apply([], i.map(function(t) {
            return n(t, ["tfhd"]).map(function(i) {
                var r, a;
                return r = u(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]),
                a = e[r] || 9e4,
                (n(t, ["tfdt"]).map(function(e) {
                    var t, i;
                    return t = e[0],
                    i = u(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]),
                    1 === t && (i *= Math.pow(2, 32),
                    i += u(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
                    i
                })[0] || 1 / 0) / a
            })
        })),
        a = Math.min.apply(null, r),
        isFinite(a) ? a : 0
    }
    ,
    o = function(e) {
        var t = n(e, ["moov", "trak"])
          , i = [];
        return t.forEach(function(e) {
            var t = n(e, ["mdia", "hdlr"])
              , a = n(e, ["tkhd"]);
            t.forEach(function(e, t) {
                var n, s, o = r(e.subarray(8, 12)), u = a[t];
                "vide" === o && (s = 0 === (n = new DataView(u.buffer,u.byteOffset,u.byteLength)).getUint8(0) ? n.getUint32(12) : n.getUint32(20),
                i.push(s))
            })
        }),
        i
    }
    ,
    e.exports = {
        findBox: n,
        parseType: r,
        timescale: a,
        startTime: s,
        videoTrackIds: o
    }
}
, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        H264_STREAM_TYPE: 27,
        ADTS_STREAM_TYPE: 15,
        METADATA_STREAM_TYPE: 21
    }
}
, function(e, t) {
    function i(e) {
        return e.replace(/\n\r?\s*/g, "")
    }
    e.exports = function(e) {
        for (var t = "", n = 0; n < arguments.length; n++)
            t += i(e[n]) + (arguments[n + 1] || "");
        return t
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(38);
    e.exports = Function.prototype.bind || n
}
, function(e, t, i) {
    "use strict";
    var n = Function.prototype.toString
      , r = /^\s*class\b/
      , a = function(e) {
        try {
            var t = n.call(e);
            return r.test(t)
        } catch (e) {
            return !1
        }
    }
      , s = Object.prototype.toString
      , o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        if (!e)
            return !1;
        if ("function" != typeof e && "object" != typeof e)
            return !1;
        if ("function" == typeof e && !e.prototype)
            return !0;
        if (o)
            return function(e) {
                try {
                    return !a(e) && (n.call(e),
                    !0)
                } catch (e) {
                    return !1
                }
            }(e);
        if (a(e))
            return !1;
        var t = s.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }
}
, function(e, t, i) {
    "use strict";
    var n, r, a, s, o = i(3), u = i(23), l = i(56), c = i(57), d = i(60), h = i(61), p = i(63), f = i(64).H264Stream, m = i(66), g = i(11).isLikelyAacData, y = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], v = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"], _ = function(e, t) {
        var i;
        if (e.length !== t.length)
            return !1;
        for (i = 0; i < e.length; i++)
            if (e[i] !== t[i])
                return !1;
        return !0
    }, b = function(e, t, i, n, r, a) {
        return {
            start: {
                dts: e,
                pts: e + (i - t)
            },
            end: {
                dts: e + (n - t),
                pts: e + (r - i)
            },
            prependedContentDuration: a,
            baseMediaDecodeTime: e
        }
    };
    (r = function(e, t) {
        var i = []
          , n = 0
          , a = 0
          , s = 0
          , o = 1 / 0;
        t = t || {},
        r.prototype.init.call(this),
        this.push = function(t) {
            d.collectDtsInfo(e, t),
            e && y.forEach(function(i) {
                e[i] = t[i]
            }),
            i.push(t)
        }
        ,
        this.setEarliestDts = function(t) {
            a = t - e.timelineStartInfo.baseMediaDecodeTime
        }
        ,
        this.setVideoBaseMediaDecodeTime = function(e) {
            o = e
        }
        ,
        this.setAudioAppendStart = function(e) {
            s = e
        }
        ,
        this.flush = function() {
            var r, l, h, p;
            0 !== i.length ? (r = c.trimAdtsFramesByEarliestDts(i, e, a),
            e.baseMediaDecodeTime = d.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps),
            c.prefixWithSilence(e, r, s, o),
            e.samples = c.generateSampleTable(r),
            h = u.mdat(c.concatenateFrameData(r)),
            i = [],
            l = u.moof(n, [e]),
            p = new Uint8Array(l.byteLength + h.byteLength),
            n++,
            p.set(l),
            p.set(h, l.byteLength),
            d.clearDtsInfo(e),
            this.trigger("data", {
                track: e,
                boxes: p
            }),
            this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream")
        }
    }
    ).prototype = new o,
    (n = function(e, t) {
        var i, r, a = 0, s = [], o = [];
        t = t || {},
        n.prototype.init.call(this),
        delete e.minPTS,
        this.gopCache_ = [],
        this.push = function(t) {
            d.collectDtsInfo(e, t),
            "seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config,
            e.sps = [t.data],
            v.forEach(function(t) {
                e[t] = i[t]
            }, this)),
            "pic_parameter_set_rbsp" !== t.nalUnitType || r || (r = t.data,
            e.pps = [t.data]),
            s.push(t)
        }
        ,
        this.flush = function() {
            for (var i, n, r, c, h, p, f, m, g = 0; s.length && "access_unit_delimiter_rbsp" !== s[0].nalUnitType; )
                s.shift();
            if (0 === s.length)
                return this.resetStream_(),
                void this.trigger("done", "VideoSegmentStream");
            if (i = l.groupNalsIntoFrames(s),
            (r = l.groupFramesIntoGops(i))[0][0].keyFrame || ((n = this.getGopForFusion_(s[0], e)) ? (g = n.duration,
            r.unshift(n),
            r.byteLength += n.byteLength,
            r.nalCount += n.nalCount,
            r.pts = n.pts,
            r.dts = n.dts,
            r.duration += n.duration) : r = l.extendFirstKeyFrame(r)),
            o.length) {
                var y;
                if (!(y = t.alignGopsAtEnd ? this.alignGopsAtEnd_(r) : this.alignGopsAtStart_(r)))
                    return this.gopCache_.unshift({
                        gop: r.pop(),
                        pps: e.pps,
                        sps: e.sps
                    }),
                    this.gopCache_.length = Math.min(6, this.gopCache_.length),
                    s = [],
                    this.resetStream_(),
                    void this.trigger("done", "VideoSegmentStream");
                d.clearDtsInfo(e),
                r = y
            }
            d.collectDtsInfo(e, r),
            e.samples = l.generateSampleTable(r),
            h = u.mdat(l.concatenateNalData(r)),
            e.baseMediaDecodeTime = d.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps),
            this.trigger("processedGopsInfo", r.map(function(e) {
                return {
                    pts: e.pts,
                    dts: e.dts,
                    byteLength: e.byteLength
                }
            })),
            f = r[0],
            m = r[r.length - 1],
            this.trigger("segmentTimingInfo", b(e.baseMediaDecodeTime, f.dts, f.pts, m.dts + m.duration, m.pts + m.duration, g)),
            this.gopCache_.unshift({
                gop: r.pop(),
                pps: e.pps,
                sps: e.sps
            }),
            this.gopCache_.length = Math.min(6, this.gopCache_.length),
            s = [],
            this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime),
            this.trigger("timelineStartInfo", e.timelineStartInfo),
            c = u.moof(a, [e]),
            p = new Uint8Array(c.byteLength + h.byteLength),
            a++,
            p.set(c),
            p.set(h, c.byteLength),
            this.trigger("data", {
                track: e,
                boxes: p
            }),
            this.resetStream_(),
            this.trigger("done", "VideoSegmentStream")
        }
        ,
        this.resetStream_ = function() {
            d.clearDtsInfo(e),
            i = void 0,
            r = void 0
        }
        ,
        this.getGopForFusion_ = function(t) {
            var i, n, r, a, s, o = 1 / 0;
            for (s = 0; s < this.gopCache_.length; s++)
                r = (a = this.gopCache_[s]).gop,
                e.pps && _(e.pps[0], a.pps[0]) && e.sps && _(e.sps[0], a.sps[0]) && (r.dts < e.timelineStartInfo.dts || (i = t.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || o > i) && (n = a,
                o = i));
            return n ? n.gop : null
        }
        ,
        this.alignGopsAtStart_ = function(e) {
            var t, i, n, r, a, s, u, l;
            for (a = e.byteLength,
            s = e.nalCount,
            u = e.duration,
            t = i = 0; t < o.length && i < e.length && (n = o[t],
            r = e[i],
            n.pts !== r.pts); )
                r.pts > n.pts ? t++ : (i++,
                a -= r.byteLength,
                s -= r.nalCount,
                u -= r.duration);
            return 0 === i ? e : i === e.length ? null : ((l = e.slice(i)).byteLength = a,
            l.duration = u,
            l.nalCount = s,
            l.pts = l[0].pts,
            l.dts = l[0].dts,
            l)
        }
        ,
        this.alignGopsAtEnd_ = function(e) {
            var t, i, n, r, a, s, u;
            for (t = o.length - 1,
            i = e.length - 1,
            a = null,
            s = !1; t >= 0 && i >= 0; ) {
                if (n = o[t],
                r = e[i],
                n.pts === r.pts) {
                    s = !0;
                    break
                }
                n.pts > r.pts ? t-- : (t === o.length - 1 && (a = i),
                i--)
            }
            if (!s && null === a)
                return null;
            if (0 === (u = s ? i : a))
                return e;
            var l = e.slice(u)
              , c = l.reduce(function(e, t) {
                return e.byteLength += t.byteLength,
                e.duration += t.duration,
                e.nalCount += t.nalCount,
                e
            }, {
                byteLength: 0,
                duration: 0,
                nalCount: 0
            });
            return l.byteLength = c.byteLength,
            l.duration = c.duration,
            l.nalCount = c.nalCount,
            l.pts = l[0].pts,
            l.dts = l[0].dts,
            l
        }
        ,
        this.alignGopsWith = function(e) {
            o = e
        }
    }
    ).prototype = new o,
    (s = function(e, t) {
        this.numberOfTracks = 0,
        this.metadataStream = t,
        void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0,
        "boolean" == typeof e.keepOriginalTimestamps && (this.keepOriginalTimestamps = e.keepOriginalTimestamps),
        this.pendingTracks = [],
        this.videoTrack = null,
        this.pendingBoxes = [],
        this.pendingCaptions = [],
        this.pendingMetadata = [],
        this.pendingBytes = 0,
        this.emittedTracks = 0,
        s.prototype.init.call(this),
        this.push = function(e) {
            return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track),
            this.pendingBoxes.push(e.boxes),
            this.pendingBytes += e.boxes.byteLength,
            "video" === e.track.type && (this.videoTrack = e.track),
            void ("audio" === e.track.type && (this.audioTrack = e.track)))
        }
    }
    ).prototype = new o,
    s.prototype.flush = function(e) {
        var t, i, n, r, a = 0, s = {
            captions: [],
            captionStreams: {},
            metadata: [],
            info: {}
        }, o = 0;
        if (this.pendingTracks.length < this.numberOfTracks) {
            if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e)
                return;
            if (this.remuxTracks)
                return;
            if (0 === this.pendingTracks.length)
                return this.emittedTracks++,
                void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
                this.emittedTracks = 0))
        }
        for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts,
        v.forEach(function(e) {
            s.info[e] = this.videoTrack[e]
        }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts,
        y.forEach(function(e) {
            s.info[e] = this.audioTrack[e]
        }, this)),
        1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined",
        this.emittedTracks += this.pendingTracks.length,
        n = u.initSegment(this.pendingTracks),
        s.initSegment = new Uint8Array(n.byteLength),
        s.initSegment.set(n),
        s.data = new Uint8Array(this.pendingBytes),
        r = 0; r < this.pendingBoxes.length; r++)
            s.data.set(this.pendingBoxes[r], a),
            a += this.pendingBoxes[r].byteLength;
        for (r = 0; r < this.pendingCaptions.length; r++)
            (t = this.pendingCaptions[r]).startTime = t.startPts,
            this.keepOriginalTimestamps || (t.startTime -= o),
            t.startTime /= 9e4,
            t.endTime = t.endPts,
            this.keepOriginalTimestamps || (t.endTime -= o),
            t.endTime /= 9e4,
            s.captionStreams[t.stream] = !0,
            s.captions.push(t);
        for (r = 0; r < this.pendingMetadata.length; r++)
            (i = this.pendingMetadata[r]).cueTime = i.pts,
            this.keepOriginalTimestamps || (i.cueTime -= o),
            i.cueTime /= 9e4,
            s.metadata.push(i);
        s.metadata.dispatchType = this.metadataStream.dispatchType,
        this.pendingTracks.length = 0,
        this.videoTrack = null,
        this.pendingBoxes.length = 0,
        this.pendingCaptions.length = 0,
        this.pendingBytes = 0,
        this.pendingMetadata.length = 0,
        this.trigger("data", s),
        this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
        this.emittedTracks = 0)
    }
    ,
    (a = function(e) {
        var t, i, o = this, u = !0;
        a.prototype.init.call(this),
        e = e || {},
        this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0,
        this.transmuxPipeline_ = {},
        this.setupAacPipeline = function() {
            var t = {};
            this.transmuxPipeline_ = t,
            t.type = "aac",
            t.metadataStream = new h.MetadataStream,
            t.aacStream = new m,
            t.audioTimestampRolloverStream = new h.TimestampRolloverStream("audio"),
            t.timedMetadataTimestampRolloverStream = new h.TimestampRolloverStream("timed-metadata"),
            t.adtsStream = new p,
            t.coalesceStream = new s(e,t.metadataStream),
            t.headOfPipeline = t.aacStream,
            t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),
            t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
            t.metadataStream.on("timestamp", function(e) {
                t.aacStream.setTimestamp(e.timeStamp)
            }),
            t.aacStream.on("data", function(n) {
                "timed-metadata" !== n.type || t.audioSegmentStream || (i = i || {
                    timelineStartInfo: {
                        baseMediaDecodeTime: o.baseMediaDecodeTime
                    },
                    codec: "adts",
                    type: "audio"
                },
                t.coalesceStream.numberOfTracks++,
                t.audioSegmentStream = new r(i,e),
                t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
            }),
            t.coalesceStream.on("data", this.trigger.bind(this, "data")),
            t.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }
        ,
        this.setupTsPipeline = function() {
            var a = {};
            this.transmuxPipeline_ = a,
            a.type = "ts",
            a.metadataStream = new h.MetadataStream,
            a.packetStream = new h.TransportPacketStream,
            a.parseStream = new h.TransportParseStream,
            a.elementaryStream = new h.ElementaryStream,
            a.videoTimestampRolloverStream = new h.TimestampRolloverStream("video"),
            a.audioTimestampRolloverStream = new h.TimestampRolloverStream("audio"),
            a.timedMetadataTimestampRolloverStream = new h.TimestampRolloverStream("timed-metadata"),
            a.adtsStream = new p,
            a.h264Stream = new f,
            a.captionStream = new h.CaptionStream,
            a.coalesceStream = new s(e,a.metadataStream),
            a.headOfPipeline = a.packetStream,
            a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream),
            a.elementaryStream.pipe(a.videoTimestampRolloverStream).pipe(a.h264Stream),
            a.elementaryStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream),
            a.elementaryStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream),
            a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream),
            a.elementaryStream.on("data", function(s) {
                var u;
                if ("metadata" === s.type) {
                    for (u = s.tracks.length; u--; )
                        t || "video" !== s.tracks[u].type ? i || "audio" !== s.tracks[u].type || ((i = s.tracks[u]).timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime) : (t = s.tracks[u]).timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime;
                    t && !a.videoSegmentStream && (a.coalesceStream.numberOfTracks++,
                    a.videoSegmentStream = new n(t,e),
                    a.videoSegmentStream.on("timelineStartInfo", function(e) {
                        i && (i.timelineStartInfo = e,
                        a.audioSegmentStream.setEarliestDts(e.dts))
                    }),
                    a.videoSegmentStream.on("processedGopsInfo", o.trigger.bind(o, "gopInfo")),
                    a.videoSegmentStream.on("segmentTimingInfo", o.trigger.bind(o, "videoSegmentTimingInfo")),
                    a.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
                        i && a.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                    }),
                    a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)),
                    i && !a.audioSegmentStream && (a.coalesceStream.numberOfTracks++,
                    a.audioSegmentStream = new r(i,e),
                    a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream))
                }
            }),
            a.coalesceStream.on("data", this.trigger.bind(this, "data")),
            a.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }
        ,
        this.setBaseMediaDecodeTime = function(n) {
            var r = this.transmuxPipeline_;
            e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n),
            i && (i.timelineStartInfo.dts = void 0,
            i.timelineStartInfo.pts = void 0,
            d.clearDtsInfo(i),
            e.keepOriginalTimestamps || (i.timelineStartInfo.baseMediaDecodeTime = n),
            r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()),
            t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = [],
            r.videoTimestampRolloverStream.discontinuity()),
            t.timelineStartInfo.dts = void 0,
            t.timelineStartInfo.pts = void 0,
            d.clearDtsInfo(t),
            r.captionStream.reset(),
            e.keepOriginalTimestamps || (t.timelineStartInfo.baseMediaDecodeTime = n)),
            r.timedMetadataTimestampRolloverStream && r.timedMetadataTimestampRolloverStream.discontinuity()
        }
        ,
        this.setAudioAppendStart = function(e) {
            i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
        }
        ,
        this.alignGopsWith = function(e) {
            t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
        }
        ,
        this.push = function(e) {
            if (u) {
                var t = g(e);
                t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(),
                u = !1
            }
            this.transmuxPipeline_.headOfPipeline.push(e)
        }
        ,
        this.flush = function() {
            u = !0,
            this.transmuxPipeline_.headOfPipeline.flush()
        }
        ,
        this.resetCaptions = function() {
            this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
        }
    }
    ).prototype = new o,
    e.exports = {
        Transmuxer: a,
        VideoSegmentStream: n,
        AudioSegmentStream: r,
        AUDIO_PROPERTIES: y,
        VIDEO_PROPERTIES: v,
        generateVideoSegmentTimingInfo: b
    }
}
, function(e, t, i) {
    "use strict";
    var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
      , r = function(e) {
        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
    };
    e.exports = {
        isLikelyAacData: function(e) {
            return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
        },
        parseId3TagSize: function(e, t) {
            var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
            return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
        },
        parseAdtsSize: function(e, t) {
            var i = (224 & e[t + 5]) >> 5
              , n = e[t + 4] << 3;
            return 6144 & e[t + 3] | n | i
        },
        parseType: function(e, t) {
            return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null
        },
        parseSampleRate: function(e) {
            for (var t = 0; t + 5 < e.length; ) {
                if (255 === e[t] && 240 == (246 & e[t + 1]))
                    return n[(60 & e[t + 2]) >>> 2];
                t++
            }
            return null
        },
        parseAacTimestamp: function(e) {
            var t, i, n;
            t = 10,
            64 & e[5] && (t += 4,
            t += r(e.subarray(10, 14)));
            do {
                if ((i = r(e.subarray(t + 4, t + 8))) < 1)
                    return null;
                if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                    n = e.subarray(t + 10, t + i + 10);
                    for (var a = 0; a < n.byteLength; a++)
                        if (0 === n[a]) {
                            if ("com.apple.streaming.transportStreamTimestamp" === unescape(function(e, t, i) {
                                var n, r = "";
                                for (n = t; n < i; n++)
                                    r += "%" + ("00" + e[n].toString(16)).slice(-2);
                                return r
                            }(n, 0, a))) {
                                var s = n.subarray(a + 1)
                                  , o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                                return o *= 4,
                                o += 3 & s[7]
                            }
                            break
                        }
                }
                t += 10,
                t += i
            } while (t < e.byteLength);
            return null
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0)
      , r = i.n(n)
      , a = i(1)
      , s = i.n(a)
      , o = i(7)
      , u = i.n(o)
      , l = i(29)
      , c = i.n(l)
      , d = i(2)
      , h = i.n(d)
      , p = i(13)
      , f = i.n(p)
      , m = i(14)
      , g = i.n(m)
      , y = i(15)
      , v = i.n(y);
    function _() {
        return (_ = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function b(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    function T(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var S = function() {
        function e() {
            this.listeners = {}
        }
        var t = e.prototype;
        return t.on = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t)
        }
        ,
        t.off = function(e, t) {
            if (!this.listeners[e])
                return !1;
            var i = this.listeners[e].indexOf(t);
            return this.listeners[e].splice(i, 1),
            i > -1
        }
        ,
        t.trigger = function(e) {
            var t, i, n, r = this.listeners[e];
            if (r)
                if (2 === arguments.length)
                    for (i = r.length,
                    t = 0; t < i; ++t)
                        r[t].call(this, arguments[1]);
                else
                    for (n = Array.prototype.slice.call(arguments, 1),
                    i = r.length,
                    t = 0; t < i; ++t)
                        r[t].apply(this, n)
        }
        ,
        t.dispose = function() {
            this.listeners = {}
        }
        ,
        t.pipe = function(e) {
            this.on("data", function(t) {
                e.push(t)
            })
        }
        ,
        e
    }()
      , k = function(e) {
        function t() {
            var t;
            return (t = e.call(this) || this).buffer = "",
            t
        }
        return b(t, e),
        t.prototype.push = function(e) {
            var t;
            for (this.buffer += e,
            t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))
                this.trigger("data", this.buffer.substring(0, t)),
                this.buffer = this.buffer.substring(t + 1)
        }
        ,
        t
    }(S)
      , w = function(e) {
        for (var t, i = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {}, r = i.length; r--; )
            "" !== i[r] && ((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""),
            t[1] = t[1].replace(/^\s+|\s+$/g, ""),
            t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"),
            n[t[0]] = t[1]);
        return n
    }
      , C = function(e) {
        function t() {
            var t;
            return (t = e.call(this) || this).customParsers = [],
            t.tagMappers = [],
            t
        }
        b(t, e);
        var i = t.prototype;
        return i.push = function(e) {
            var t, i, n = this;
            0 !== (e = e.trim()).length && ("#" === e[0] ? this.tagMappers.reduce(function(t, i) {
                var n = i(e);
                return n === e ? t : t.concat([n])
            }, [e]).forEach(function(e) {
                for (var r = 0; r < n.customParsers.length; r++)
                    if (n.customParsers[r].call(n, e))
                        return;
                if (0 === e.indexOf("#EXT"))
                    if (e = e.replace("\r", ""),
                    t = /^#EXTM3U/.exec(e))
                        n.trigger("data", {
                            type: "tag",
                            tagType: "m3u"
                        });
                    else {
                        if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "inf"
                            },
                            t[1] && (i.duration = parseFloat(t[1])),
                            t[2] && (i.title = t[2]),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "targetduration"
                            },
                            t[1] && (i.duration = parseInt(t[1], 10)),
                            void n.trigger("data", i);
                        if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "totalduration"
                            },
                            t[1] && (i.duration = parseInt(t[1], 10)),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "version"
                            },
                            t[1] && (i.version = parseInt(t[1], 10)),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "media-sequence"
                            },
                            t[1] && (i.number = parseInt(t[1], 10)),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "discontinuity-sequence"
                            },
                            t[1] && (i.number = parseInt(t[1], 10)),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "playlist-type"
                            },
                            t[1] && (i.playlistType = t[1]),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "byterange"
                            },
                            t[1] && (i.length = parseInt(t[1], 10)),
                            t[2] && (i.offset = parseInt(t[2], 10)),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e))
                            return i = {
                                type: "tag",
                                tagType: "allow-cache"
                            },
                            t[1] && (i.allowed = !/NO/.test(t[1])),
                            void n.trigger("data", i);
                        if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
                            if (i = {
                                type: "tag",
                                tagType: "map"
                            },
                            t[1]) {
                                var a = w(t[1]);
                                if (a.URI && (i.uri = a.URI),
                                a.BYTERANGE) {
                                    var s = a.BYTERANGE.split("@")
                                      , o = s[0]
                                      , u = s[1];
                                    i.byterange = {},
                                    o && (i.byterange.length = parseInt(o, 10)),
                                    u && (i.byterange.offset = parseInt(u, 10))
                                }
                            }
                            n.trigger("data", i)
                        } else if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
                            if (i = {
                                type: "tag",
                                tagType: "stream-inf"
                            },
                            t[1]) {
                                if (i.attributes = w(t[1]),
                                i.attributes.RESOLUTION) {
                                    var l = i.attributes.RESOLUTION.split("x")
                                      , c = {};
                                    l[0] && (c.width = parseInt(l[0], 10)),
                                    l[1] && (c.height = parseInt(l[1], 10)),
                                    i.attributes.RESOLUTION = c
                                }
                                i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
                                i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                            }
                            n.trigger("data", i)
                        } else {
                            if (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e))
                                return i = {
                                    type: "tag",
                                    tagType: "media"
                                },
                                t[1] && (i.attributes = w(t[1])),
                                void n.trigger("data", i);
                            if (t = /^#EXT-X-ENDLIST/.exec(e))
                                n.trigger("data", {
                                    type: "tag",
                                    tagType: "endlist"
                                });
                            else if (t = /^#EXT-X-DISCONTINUITY/.exec(e))
                                n.trigger("data", {
                                    type: "tag",
                                    tagType: "discontinuity"
                                });
                            else {
                                if (t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "program-date-time"
                                    },
                                    t[1] && (i.dateTimeString = t[1],
                                    i.dateTimeObject = new Date(t[1])),
                                    void n.trigger("data", i);
                                if (t = /^#EXT-X-KEY:?(.*)$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "key"
                                    },
                                    t[1] && (i.attributes = w(t[1]),
                                    i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)),
                                    i.attributes.IV = i.attributes.IV.match(/.{8}/g),
                                    i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16),
                                    i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16),
                                    i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16),
                                    i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16),
                                    i.attributes.IV = new Uint32Array(i.attributes.IV))),
                                    void n.trigger("data", i);
                                if (t = /^#EXT-X-START:?(.*)$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "start"
                                    },
                                    t[1] && (i.attributes = w(t[1]),
                                    i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]),
                                    i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)),
                                    void n.trigger("data", i);
                                if (t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "cue-out-cont"
                                    },
                                    t[1] ? i.data = t[1] : i.data = "",
                                    void n.trigger("data", i);
                                if (t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "cue-out"
                                    },
                                    t[1] ? i.data = t[1] : i.data = "",
                                    void n.trigger("data", i);
                                if (t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e))
                                    return i = {
                                        type: "tag",
                                        tagType: "cue-in"
                                    },
                                    t[1] ? i.data = t[1] : i.data = "",
                                    void n.trigger("data", i);
                                n.trigger("data", {
                                    type: "tag",
                                    data: e.slice(4)
                                })
                            }
                        }
                    }
                else
                    n.trigger("data", {
                        type: "comment",
                        text: e.slice(1)
                    })
            }) : this.trigger("data", {
                type: "uri",
                uri: e
            }))
        }
        ,
        i.addParser = function(e) {
            var t = this
              , i = e.expression
              , n = e.customType
              , r = e.dataParser
              , a = e.segment;
            "function" != typeof r && (r = function(e) {
                return e
            }
            ),
            this.customParsers.push(function(e) {
                if (i.exec(e))
                    return t.trigger("data", {
                        type: "custom",
                        data: r(e),
                        customType: n,
                        segment: a
                    }),
                    !0
            })
        }
        ,
        i.addTagMapper = function(e) {
            var t = e.expression
              , i = e.map;
            this.tagMappers.push(function(e) {
                return t.test(e) ? i(e) : e
            })
        }
        ,
        t
    }(S)
      , E = function(e) {
        function t() {
            var t;
            (t = e.call(this) || this).lineStream = new k,
            t.parseStream = new C,
            t.lineStream.pipe(t.parseStream);
            var i, n, r = T(T(t)), a = [], s = {}, o = {
                AUDIO: {},
                VIDEO: {},
                "CLOSED-CAPTIONS": {},
                SUBTITLES: {}
            }, u = 0;
            return t.manifest = {
                allowCache: !0,
                discontinuityStarts: [],
                segments: []
            },
            t.parseStream.on("data", function(e) {
                var t, l;
                ({
                    tag: function() {
                        ({
                            "allow-cache": function() {
                                this.manifest.allowCache = e.allowed,
                                "allowed"in e || (this.trigger("info", {
                                    message: "defaulting allowCache to YES"
                                }),
                                this.manifest.allowCache = !0)
                            },
                            byterange: function() {
                                var t = {};
                                "length"in e && (s.byterange = t,
                                t.length = e.length,
                                "offset"in e || (this.trigger("info", {
                                    message: "defaulting offset to zero"
                                }),
                                e.offset = 0)),
                                "offset"in e && (s.byterange = t,
                                t.offset = e.offset)
                            },
                            endlist: function() {
                                this.manifest.endList = !0
                            },
                            inf: function() {
                                "mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
                                this.trigger("info", {
                                    message: "defaulting media sequence to zero"
                                })),
                                "discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
                                this.trigger("info", {
                                    message: "defaulting discontinuity sequence to zero"
                                })),
                                e.duration > 0 && (s.duration = e.duration),
                                0 === e.duration && (s.duration = .01,
                                this.trigger("info", {
                                    message: "updating zero segment duration to a small value"
                                })),
                                this.manifest.segments = a
                            },
                            key: function() {
                                e.attributes ? "NONE" !== e.attributes.METHOD ? e.attributes.URI ? (e.attributes.METHOD || this.trigger("warn", {
                                    message: "defaulting key method to AES-128"
                                }),
                                n = {
                                    method: e.attributes.METHOD || "AES-128",
                                    uri: e.attributes.URI
                                },
                                void 0 !== e.attributes.IV && (n.iv = e.attributes.IV)) : this.trigger("warn", {
                                    message: "ignoring key declaration without URI"
                                }) : n = null : this.trigger("warn", {
                                    message: "ignoring key declaration without attribute list"
                                })
                            },
                            "media-sequence": function() {
                                isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger("warn", {
                                    message: "ignoring invalid media sequence: " + e.number
                                })
                            },
                            "discontinuity-sequence": function() {
                                isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number,
                                u = e.number) : this.trigger("warn", {
                                    message: "ignoring invalid discontinuity sequence: " + e.number
                                })
                            },
                            "playlist-type": function() {
                                /VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger("warn", {
                                    message: "ignoring unknown playlist type: " + e.playlist
                                })
                            },
                            map: function() {
                                i = {},
                                e.uri && (i.uri = e.uri),
                                e.byterange && (i.byterange = e.byterange)
                            },
                            "stream-inf": function() {
                                this.manifest.playlists = a,
                                this.manifest.mediaGroups = this.manifest.mediaGroups || o,
                                e.attributes ? (s.attributes || (s.attributes = {}),
                                _(s.attributes, e.attributes)) : this.trigger("warn", {
                                    message: "ignoring empty stream-inf attributes"
                                })
                            },
                            media: function() {
                                if (this.manifest.mediaGroups = this.manifest.mediaGroups || o,
                                e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME) {
                                    var i = this.manifest.mediaGroups[e.attributes.TYPE];
                                    i[e.attributes["GROUP-ID"]] = i[e.attributes["GROUP-ID"]] || {},
                                    t = i[e.attributes["GROUP-ID"]],
                                    (l = {
                                        default: /yes/i.test(e.attributes.DEFAULT)
                                    }).default ? l.autoselect = !0 : l.autoselect = /yes/i.test(e.attributes.AUTOSELECT),
                                    e.attributes.LANGUAGE && (l.language = e.attributes.LANGUAGE),
                                    e.attributes.URI && (l.uri = e.attributes.URI),
                                    e.attributes["INSTREAM-ID"] && (l.instreamId = e.attributes["INSTREAM-ID"]),
                                    e.attributes.CHARACTERISTICS && (l.characteristics = e.attributes.CHARACTERISTICS),
                                    e.attributes.FORCED && (l.forced = /yes/i.test(e.attributes.FORCED)),
                                    t[e.attributes.NAME] = l
                                } else
                                    this.trigger("warn", {
                                        message: "ignoring incomplete or missing media group"
                                    })
                            },
                            discontinuity: function() {
                                u += 1,
                                s.discontinuity = !0,
                                this.manifest.discontinuityStarts.push(a.length)
                            },
                            "program-date-time": function() {
                                void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = e.dateTimeString,
                                this.manifest.dateTimeObject = e.dateTimeObject),
                                s.dateTimeString = e.dateTimeString,
                                s.dateTimeObject = e.dateTimeObject
                            },
                            targetduration: function() {
                                !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid target duration: " + e.duration
                                }) : this.manifest.targetDuration = e.duration
                            },
                            totalduration: function() {
                                !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid total duration: " + e.duration
                                }) : this.manifest.totalDuration = e.duration
                            },
                            start: function() {
                                e.attributes && !isNaN(e.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                    timeOffset: e.attributes["TIME-OFFSET"],
                                    precise: e.attributes.PRECISE
                                } : this.trigger("warn", {
                                    message: "ignoring start declaration without appropriate attribute list"
                                })
                            },
                            "cue-out": function() {
                                s.cueOut = e.data
                            },
                            "cue-out-cont": function() {
                                s.cueOutCont = e.data
                            },
                            "cue-in": function() {
                                s.cueIn = e.data
                            }
                        }[e.tagType] || function() {}
                        ).call(r)
                    },
                    uri: function() {
                        s.uri = e.uri,
                        a.push(s),
                        !this.manifest.targetDuration || "duration"in s || (this.trigger("warn", {
                            message: "defaulting segment duration to the target duration"
                        }),
                        s.duration = this.manifest.targetDuration),
                        n && (s.key = n),
                        s.timeline = u,
                        i && (s.map = i),
                        s = {}
                    },
                    comment: function() {},
                    custom: function() {
                        e.segment ? (s.custom = s.custom || {},
                        s.custom[e.customType] = e.data) : (this.manifest.custom = this.manifest.custom || {},
                        this.manifest.custom[e.customType] = e.data)
                    }
                })[e.type].call(r)
            }),
            t
        }
        b(t, e);
        var i = t.prototype;
        return i.push = function(e) {
            this.lineStream.push(e)
        }
        ,
        i.end = function() {
            this.lineStream.push("\n")
        }
        ,
        i.addParser = function(e) {
            this.parseStream.addParser(e)
        }
        ,
        i.addTagMapper = function(e) {
            this.parseStream.addTagMapper(e)
        }
        ,
        t
    }(S)
      , A = i(16)
      , P = i(4)
      , L = i.n(P)
      , O = i(30)
      , I = i(31)
      , x = i.n(I);
    var D = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , U = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , R = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
      , M = function() {
        var e = [[[], [], [], [], []], [[], [], [], [], []]]
          , t = e[0]
          , i = e[1]
          , n = t[4]
          , r = i[4]
          , a = void 0
          , s = void 0
          , o = void 0
          , u = []
          , l = []
          , c = void 0
          , d = void 0
          , h = void 0
          , p = void 0
          , f = void 0;
        for (a = 0; a < 256; a++)
            l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
        for (s = o = 0; !n[s]; s ^= c || 1,
        o = l[o] || 1)
            for (h = (h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & h ^ 99,
            n[s] = h,
            r[h] = s,
            f = 16843009 * u[d = u[c = u[s]]] ^ 65537 * d ^ 257 * c ^ 16843008 * s,
            p = 257 * u[h] ^ 16843008 * h,
            a = 0; a < 4; a++)
                t[a][s] = p = p << 24 ^ p >>> 8,
                i[a][h] = f = f << 24 ^ f >>> 8;
        for (a = 0; a < 5; a++)
            t[a] = t[a].slice(0),
            i[a] = i[a].slice(0);
        return e
    }
      , B = null
      , N = function() {
        function e(t) {
            D(this, e),
            B || (B = M()),
            this._tables = [[B[0][0].slice(), B[0][1].slice(), B[0][2].slice(), B[0][3].slice(), B[0][4].slice()], [B[1][0].slice(), B[1][1].slice(), B[1][2].slice(), B[1][3].slice(), B[1][4].slice()]];
            var i = void 0
              , n = void 0
              , r = void 0
              , a = void 0
              , s = void 0
              , o = this._tables[0][4]
              , u = this._tables[1]
              , l = t.length
              , c = 1;
            if (4 !== l && 6 !== l && 8 !== l)
                throw new Error("Invalid aes key size");
            for (a = t.slice(0),
            s = [],
            this._key = [a, s],
            i = l; i < 4 * l + 28; i++)
                r = a[i - 1],
                (i % l == 0 || 8 === l && i % l == 4) && (r = o[r >>> 24] << 24 ^ o[r >> 16 & 255] << 16 ^ o[r >> 8 & 255] << 8 ^ o[255 & r],
                i % l == 0 && (r = r << 8 ^ r >>> 24 ^ c << 24,
                c = c << 1 ^ 283 * (c >> 7))),
                a[i] = a[i - l] ^ r;
            for (n = 0; i; n++,
            i--)
                r = a[3 & n ? i : i - 4],
                s[n] = i <= 4 || n < 4 ? r : u[0][o[r >>> 24]] ^ u[1][o[r >> 16 & 255]] ^ u[2][o[r >> 8 & 255]] ^ u[3][o[255 & r]]
        }
        return e.prototype.decrypt = function(e, t, i, n, r, a) {
            var s = this._key[1]
              , o = e ^ s[0]
              , u = n ^ s[1]
              , l = i ^ s[2]
              , c = t ^ s[3]
              , d = void 0
              , h = void 0
              , p = void 0
              , f = s.length / 4 - 2
              , m = void 0
              , g = 4
              , y = this._tables[1]
              , v = y[0]
              , _ = y[1]
              , b = y[2]
              , T = y[3]
              , S = y[4];
            for (m = 0; m < f; m++)
                d = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g],
                h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1],
                p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2],
                c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3],
                g += 4,
                o = d,
                u = h,
                l = p;
            for (m = 0; m < 4; m++)
                r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++],
                d = o,
                o = u,
                u = l,
                l = c,
                c = d
        }
        ,
        e
    }()
      , j = function() {
        function e() {
            D(this, e),
            this.listeners = {}
        }
        return e.prototype.on = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t)
        }
        ,
        e.prototype.off = function(e, t) {
            if (!this.listeners[e])
                return !1;
            var i = this.listeners[e].indexOf(t);
            return this.listeners[e].splice(i, 1),
            i > -1
        }
        ,
        e.prototype.trigger = function(e) {
            var t = this.listeners[e];
            if (t)
                if (2 === arguments.length)
                    for (var i = t.length, n = 0; n < i; ++n)
                        t[n].call(this, arguments[1]);
                else
                    for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s)
                        t[s].apply(this, r)
        }
        ,
        e.prototype.dispose = function() {
            this.listeners = {}
        }
        ,
        e.prototype.pipe = function(e) {
            this.on("data", function(t) {
                e.push(t)
            })
        }
        ,
        e
    }()
      , F = function(e) {
        function t() {
            D(this, t);
            var i = R(this, e.call(this, j));
            return i.jobs = [],
            i.delay = 1,
            i.timeout_ = null,
            i
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e),
        t.prototype.processJob_ = function() {
            this.jobs.shift()(),
            this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
        }
        ,
        t.prototype.push = function(e) {
            this.jobs.push(e),
            this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
        }
        ,
        t
    }(j)
      , V = function(e) {
        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
    }
      , H = function(e, t, i) {
        var n = new Int32Array(e.buffer,e.byteOffset,e.byteLength >> 2)
          , r = new N(Array.prototype.slice.call(t))
          , a = new Uint8Array(e.byteLength)
          , s = new Int32Array(a.buffer)
          , o = void 0
          , u = void 0
          , l = void 0
          , c = void 0
          , d = void 0
          , h = void 0
          , p = void 0
          , f = void 0
          , m = void 0;
        for (o = i[0],
        u = i[1],
        l = i[2],
        c = i[3],
        m = 0; m < n.length; m += 4)
            d = V(n[m]),
            h = V(n[m + 1]),
            p = V(n[m + 2]),
            f = V(n[m + 3]),
            r.decrypt(d, h, p, f, s, m),
            s[m] = V(s[m] ^ o),
            s[m + 1] = V(s[m + 1] ^ u),
            s[m + 2] = V(s[m + 2] ^ l),
            s[m + 3] = V(s[m + 3] ^ c),
            o = d,
            u = h,
            l = p,
            c = f;
        return a
    }
      , q = function() {
        function e(t, i, n, r) {
            D(this, e);
            var a = e.STEP
              , s = new Int32Array(t.buffer)
              , o = new Uint8Array(t.byteLength)
              , u = 0;
            for (this.asyncStream_ = new F,
            this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, n, o)),
            u = a; u < s.length; u += a)
                n = new Uint32Array([V(s[u - 4]), V(s[u - 3]), V(s[u - 2]), V(s[u - 1])]),
                this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, n, o));
            this.asyncStream_.push(function() {
                var e;
                r(null, (e = o).subarray(0, e.byteLength - e[e.byteLength - 1]))
            })
        }
        return e.prototype.decryptChunk_ = function(e, t, i, n) {
            return function() {
                var r = H(e, t, i);
                n.set(r, e.byteOffset)
            }
        }
        ,
        U(e, null, [{
            key: "STEP",
            get: function() {
                return 32e3
            }
        }]),
        e
    }()
      , z = "7.5.5";
    function W(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    function G(e, t) {
        return (G = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function $(e, t, i) {
        return ($ = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, i) {
            var n = [null];
            n.push.apply(n, t);
            var r = new (Function.bind.apply(e, n));
            return i && G(r, i.prototype),
            r
        }
        ).apply(null, arguments)
    }
    function X(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Y(e, t) {
        return t || (t = e.slice(0)),
        e.raw = t,
        e
    }
    var K = []
      , Q = function(e, t) {
        return function(i, n, a) {
            var s = t.levels[n]
              , o = new RegExp("^(" + s + ")$");
            if ("log" !== i && a.unshift(i.toUpperCase() + ":"),
            a.unshift(e + ":"),
            K && K.push([].concat(a)),
            r.a.console) {
                var u = r.a.console[i];
                u || "debug" !== i || (u = r.a.console.info || r.a.console.log),
                u && s && o.test(i) && u[Array.isArray(a) ? "apply" : "call"](r.a.console, a)
            }
        }
    };
    var J = function e(t) {
        var i, n = "info", r = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            i("log", n, t)
        };
        return i = Q(t, r),
        r.createLogger = function(i) {
            return e(t + ": " + i)
        }
        ,
        r.levels = {
            all: "debug|log|warn|error",
            off: "",
            debug: "debug|log|warn|error",
            info: "log|warn|error",
            warn: "warn|error",
            error: "error",
            DEFAULT: n
        },
        r.level = function(e) {
            if ("string" == typeof e) {
                if (!r.levels.hasOwnProperty(e))
                    throw new Error('"' + e + '" in not a valid log level');
                n = e
            }
            return n
        }
        ,
        (r.history = function() {
            return K ? [].concat(K) : []
        }
        ).filter = function(e) {
            return (K || []).filter(function(t) {
                return new RegExp(".*" + e + ".*").test(t[0])
            })
        }
        ,
        r.history.clear = function() {
            K && (K.length = 0)
        }
        ,
        r.history.disable = function() {
            null !== K && (K.length = 0,
            K = null)
        }
        ,
        r.history.enable = function() {
            null === K && (K = [])
        }
        ,
        r.error = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return i("error", n, t)
        }
        ,
        r.warn = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return i("warn", n, t)
        }
        ,
        r.debug = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return i("debug", n, t)
        }
        ,
        r
    }("VIDEOJS")
      , Z = J.createLogger
      , ee = Object.prototype.toString
      , te = function(e) {
        return re(e) ? Object.keys(e) : []
    };
    function ie(e, t) {
        te(e).forEach(function(i) {
            return t(e[i], i)
        })
    }
    function ne(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            i[n - 1] = arguments[n];
        return Object.assign ? Object.assign.apply(Object, [e].concat(i)) : (i.forEach(function(t) {
            t && ie(t, function(t, i) {
                e[i] = t
            })
        }),
        e)
    }
    function re(e) {
        return !!e && "object" == typeof e
    }
    function ae(e) {
        return re(e) && "[object Object]" === ee.call(e) && e.constructor === Object
    }
    function se(e, t) {
        if (!e || !t)
            return "";
        if ("function" == typeof r.a.getComputedStyle) {
            var i = r.a.getComputedStyle(e);
            return i ? i[t] : ""
        }
        return ""
    }
    function oe() {
        var e = Y(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
        return oe = function() {
            return e
        }
        ,
        e
    }
    function ue(e) {
        return "string" == typeof e && /\S/.test(e)
    }
    function le(e) {
        if (/\s/.test(e))
            throw new Error("class has illegal whitespace characters")
    }
    function ce() {
        return s.a === r.a.document
    }
    function de(e) {
        return re(e) && 1 === e.nodeType
    }
    function he() {
        try {
            return r.a.parent !== r.a.self
        } catch (e) {
            return !0
        }
    }
    function pe(e) {
        return function(t, i) {
            if (!ue(t))
                return s.a[e](null);
            ue(i) && (i = s.a.querySelector(i));
            var n = de(i) ? i : s.a;
            return n[e] && n[e](t)
        }
    }
    function fe(e, t, i, n) {
        void 0 === e && (e = "div"),
        void 0 === t && (t = {}),
        void 0 === i && (i = {});
        var r = s.a.createElement(e);
        return Object.getOwnPropertyNames(t).forEach(function(e) {
            var i = t[e];
            -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (J.warn(u()(oe(), e, i)),
            r.setAttribute(e, i)) : "textContent" === e ? me(r, i) : r[e] = i
        }),
        Object.getOwnPropertyNames(i).forEach(function(e) {
            r.setAttribute(e, i[e])
        }),
        n && Ue(r, n),
        r
    }
    function me(e, t) {
        return void 0 === e.textContent ? e.innerText = t : e.textContent = t,
        e
    }
    function ge(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }
    function ye(e, t) {
        return le(t),
        e.classList ? e.classList.contains(t) : (i = t,
        new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
        var i
    }
    function ve(e, t) {
        return e.classList ? e.classList.add(t) : ye(e, t) || (e.className = (e.className + " " + t).trim()),
        e
    }
    function _e(e, t) {
        return e.classList ? e.classList.remove(t) : (le(t),
        e.className = e.className.split(/\s+/).filter(function(e) {
            return e !== t
        }).join(" ")),
        e
    }
    function be(e, t, i) {
        var n = ye(e, t);
        if ("function" == typeof i && (i = i(e, t)),
        "boolean" != typeof i && (i = !n),
        i !== n)
            return i ? ve(e, t) : _e(e, t),
            e
    }
    function Te(e, t) {
        Object.getOwnPropertyNames(t).forEach(function(i) {
            var n = t[i];
            null == n || !1 === n ? e.removeAttribute(i) : e.setAttribute(i, !0 === n ? "" : n)
        })
    }
    function Se(e) {
        var t = {}
          , i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (e && e.attributes && e.attributes.length > 0)
            for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
                var a = n[r].name
                  , s = n[r].value;
                "boolean" != typeof e[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s),
                t[a] = s
            }
        return t
    }
    function ke(e, t) {
        return e.getAttribute(t)
    }
    function we(e, t, i) {
        e.setAttribute(t, i)
    }
    function Ce(e, t) {
        e.removeAttribute(t)
    }
    function Ee() {
        s.a.body.focus(),
        s.a.onselectstart = function() {
            return !1
        }
    }
    function Ae() {
        s.a.onselectstart = function() {
            return !0
        }
    }
    function Pe(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
            var t = e.getBoundingClientRect()
              , i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function(e) {
                void 0 !== t[e] && (i[e] = t[e])
            }),
            i.height || (i.height = parseFloat(se(e, "height"))),
            i.width || (i.width = parseFloat(se(e, "width"))),
            i
        }
    }
    function Le(e) {
        var t;
        if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()),
        !t)
            return {
                left: 0,
                top: 0
            };
        var i = s.a.documentElement
          , n = s.a.body
          , a = i.clientLeft || n.clientLeft || 0
          , o = r.a.pageXOffset || n.scrollLeft
          , u = t.left + o - a
          , l = i.clientTop || n.clientTop || 0
          , c = r.a.pageYOffset || n.scrollTop
          , d = t.top + c - l;
        return {
            left: Math.round(u),
            top: Math.round(d)
        }
    }
    function Oe(e, t) {
        var i = {}
          , n = Le(e)
          , r = e.offsetWidth
          , a = e.offsetHeight
          , s = n.top
          , o = n.left
          , u = t.pageY
          , l = t.pageX;
        return t.changedTouches && (l = t.changedTouches[0].pageX,
        u = t.changedTouches[0].pageY),
        i.y = Math.max(0, Math.min(1, (s - u + a) / a)),
        i.x = Math.max(0, Math.min(1, (l - o) / r)),
        i
    }
    function Ie(e) {
        return re(e) && 3 === e.nodeType
    }
    function xe(e) {
        for (; e.firstChild; )
            e.removeChild(e.firstChild);
        return e
    }
    function De(e) {
        return "function" == typeof e && (e = e()),
        (Array.isArray(e) ? e : [e]).map(function(e) {
            return "function" == typeof e && (e = e()),
            de(e) || Ie(e) ? e : "string" == typeof e && /\S/.test(e) ? s.a.createTextNode(e) : void 0
        }).filter(function(e) {
            return e
        })
    }
    function Ue(e, t) {
        return De(t).forEach(function(t) {
            return e.appendChild(t)
        }),
        e
    }
    function Re(e, t) {
        return Ue(xe(e), t)
    }
    function Me(e) {
        return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || 0 === e.button && 1 === e.buttons)
    }
    var Be = pe("querySelector")
      , Ne = pe("querySelectorAll")
      , je = Object.freeze({
        isReal: ce,
        isEl: de,
        isInFrame: he,
        createEl: fe,
        textContent: me,
        prependTo: ge,
        hasClass: ye,
        addClass: ve,
        removeClass: _e,
        toggleClass: be,
        setAttributes: Te,
        getAttributes: Se,
        getAttribute: ke,
        setAttribute: we,
        removeAttribute: Ce,
        blockTextSelection: Ee,
        unblockTextSelection: Ae,
        getBoundingClientRect: Pe,
        findPosition: Le,
        getPointerPosition: Oe,
        isTextNode: Ie,
        emptyEl: xe,
        normalizeContent: De,
        appendContent: Ue,
        insertContent: Re,
        isSingleLeftClick: Me,
        $: Be,
        $$: Ne
    })
      , Fe = 1;
    function Ve() {
        return Fe++
    }
    var He = {}
      , qe = "vdata" + (new Date).getTime();
    function ze(e) {
        var t = e[qe];
        return t || (t = e[qe] = Ve()),
        He[t] || (He[t] = {}),
        He[t]
    }
    function We(e) {
        var t = e[qe];
        return !!t && !!Object.getOwnPropertyNames(He[t]).length
    }
    function Ge(e) {
        var t = e[qe];
        if (t) {
            delete He[t];
            try {
                delete e[qe]
            } catch (t) {
                e.removeAttribute ? e.removeAttribute(qe) : e[qe] = null
            }
        }
    }
    function $e(e, t) {
        var i = ze(e);
        0 === i.handlers[t].length && (delete i.handlers[t],
        e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)),
        Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers,
        delete i.dispatcher,
        delete i.disabled),
        0 === Object.getOwnPropertyNames(i).length && Ge(e)
    }
    function Xe(e, t, i, n) {
        i.forEach(function(i) {
            e(t, i, n)
        })
    }
    function Ye(e) {
        function t() {
            return !0
        }
        function i() {
            return !1
        }
        if (!e || !e.isPropagationStopped) {
            var n = e || r.a.event;
            for (var a in e = {},
            n)
                "layerX" !== a && "layerY" !== a && "keyLocation" !== a && "webkitMovementX" !== a && "webkitMovementY" !== a && ("returnValue" === a && n.preventDefault || (e[a] = n[a]));
            if (e.target || (e.target = e.srcElement || s.a),
            e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement),
            e.preventDefault = function() {
                n.preventDefault && n.preventDefault(),
                e.returnValue = !1,
                n.returnValue = !1,
                e.defaultPrevented = !0
            }
            ,
            e.defaultPrevented = !1,
            e.stopPropagation = function() {
                n.stopPropagation && n.stopPropagation(),
                e.cancelBubble = !0,
                n.cancelBubble = !0,
                e.isPropagationStopped = t
            }
            ,
            e.isPropagationStopped = i,
            e.stopImmediatePropagation = function() {
                n.stopImmediatePropagation && n.stopImmediatePropagation(),
                e.isImmediatePropagationStopped = t,
                e.stopPropagation()
            }
            ,
            e.isImmediatePropagationStopped = i,
            null !== e.clientX && void 0 !== e.clientX) {
                var o = s.a.documentElement
                  , u = s.a.body;
                e.pageX = e.clientX + (o && o.scrollLeft || u && u.scrollLeft || 0) - (o && o.clientLeft || u && u.clientLeft || 0),
                e.pageY = e.clientY + (o && o.scrollTop || u && u.scrollTop || 0) - (o && o.clientTop || u && u.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode,
            null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e
    }
    var Ke = !1;
    !function() {
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    Ke = !0
                }
            });
            r.a.addEventListener("test", null, e),
            r.a.removeEventListener("test", null, e)
        } catch (e) {}
    }();
    var Qe = ["touchstart", "touchmove"];
    function Je(e, t, i) {
        if (Array.isArray(t))
            return Xe(Je, e, t, i);
        var n = ze(e);
        if (n.handlers || (n.handlers = {}),
        n.handlers[t] || (n.handlers[t] = []),
        i.guid || (i.guid = Ve()),
        n.handlers[t].push(i),
        n.dispatcher || (n.disabled = !1,
        n.dispatcher = function(t, i) {
            if (!n.disabled) {
                t = Ye(t);
                var r = n.handlers[t.type];
                if (r)
                    for (var a = r.slice(0), s = 0, o = a.length; s < o && !t.isImmediatePropagationStopped(); s++)
                        try {
                            a[s].call(e, t, i)
                        } catch (e) {
                            J.error(e)
                        }
            }
        }
        ),
        1 === n.handlers[t].length)
            if (e.addEventListener) {
                var r = !1;
                Ke && Qe.indexOf(t) > -1 && (r = {
                    passive: !0
                }),
                e.addEventListener(t, n.dispatcher, r)
            } else
                e.attachEvent && e.attachEvent("on" + t, n.dispatcher)
    }
    function Ze(e, t, i) {
        if (We(e)) {
            var n = ze(e);
            if (n.handlers) {
                if (Array.isArray(t))
                    return Xe(Ze, e, t, i);
                var r = function(e, t) {
                    n.handlers[t] = [],
                    $e(e, t)
                };
                if (void 0 !== t) {
                    var a = n.handlers[t];
                    if (a)
                        if (i) {
                            if (i.guid)
                                for (var s = 0; s < a.length; s++)
                                    a[s].guid === i.guid && a.splice(s--, 1);
                            $e(e, t)
                        } else
                            r(e, t)
                } else
                    for (var o in n.handlers)
                        Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
            }
        }
    }
    function et(e, t, i) {
        var n = We(e) ? ze(e) : {}
          , r = e.parentNode || e.ownerDocument;
        if ("string" == typeof t ? t = {
            type: t,
            target: e
        } : t.target || (t.target = e),
        t = Ye(t),
        n.dispatcher && n.dispatcher.call(e, t, i),
        r && !t.isPropagationStopped() && !0 === t.bubbles)
            et.call(null, r, t, i);
        else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
            var a = ze(t.target);
            t.target[t.type] && (a.disabled = !0,
            "function" == typeof t.target[t.type] && t.target[t.type](),
            a.disabled = !1)
        }
        return !t.defaultPrevented
    }
    function tt(e, t, i) {
        if (Array.isArray(t))
            return Xe(tt, e, t, i);
        var n = function n() {
            Ze(e, t, n),
            i.apply(this, arguments)
        };
        n.guid = i.guid = i.guid || Ve(),
        Je(e, t, n)
    }
    var it, nt = Object.freeze({
        fixEvent: Ye,
        on: Je,
        off: Ze,
        trigger: et,
        one: tt
    }), rt = !1, at = function() {
        if (ce() && !1 !== it.options.autoSetup) {
            var e = Array.prototype.slice.call(s.a.getElementsByTagName("video"))
              , t = Array.prototype.slice.call(s.a.getElementsByTagName("audio"))
              , i = Array.prototype.slice.call(s.a.getElementsByTagName("video-js"))
              , n = e.concat(t, i);
            if (n && n.length > 0)
                for (var r = 0, a = n.length; r < a; r++) {
                    var o = n[r];
                    if (!o || !o.getAttribute) {
                        st(1);
                        break
                    }
                    void 0 === o.player && null !== o.getAttribute("data-setup") && it(o)
                }
            else
                rt || st(1)
        }
    };
    function st(e, t) {
        t && (it = t),
        r.a.setTimeout(at, e)
    }
    ce() && "complete" === s.a.readyState ? rt = !0 : tt(r.a, "load", function() {
        rt = !0
    });
    var ot, ut = function(e) {
        var t = s.a.createElement("style");
        return t.className = e,
        t
    }, lt = function(e, t) {
        e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
    }, ct = function(e, t, i) {
        t.guid || (t.guid = Ve());
        var n = function() {
            return t.apply(e, arguments)
        };
        return n.guid = i ? i + "_" + t.guid : t.guid,
        n
    }, dt = function(e, t) {
        var i = Date.now();
        return function() {
            var n = Date.now();
            n - i >= t && (e.apply(void 0, arguments),
            i = n)
        }
    }, ht = function(e, t, i, n) {
        var a;
        void 0 === n && (n = r.a);
        var s = function() {
            var r = this
              , s = arguments
              , o = function() {
                a = null,
                o = null,
                i || e.apply(r, s)
            };
            !a && i && e.apply(r, s),
            n.clearTimeout(a),
            a = n.setTimeout(o, t)
        };
        return s.cancel = function() {
            n.clearTimeout(a),
            a = null
        }
        ,
        s
    }, pt = function() {};
    pt.prototype.allowedEvents_ = {},
    pt.prototype.on = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {}
        ,
        Je(this, e, t),
        this.addEventListener = i
    }
    ,
    pt.prototype.addEventListener = pt.prototype.on,
    pt.prototype.off = function(e, t) {
        Ze(this, e, t)
    }
    ,
    pt.prototype.removeEventListener = pt.prototype.off,
    pt.prototype.one = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {}
        ,
        tt(this, e, t),
        this.addEventListener = i
    }
    ,
    pt.prototype.trigger = function(e) {
        var t = e.type || e;
        "string" == typeof e && (e = {
            type: t
        }),
        e = Ye(e),
        this.allowedEvents_[t] && this["on" + t] && this["on" + t](e),
        et(this, e)
    }
    ,
    pt.prototype.dispatchEvent = pt.prototype.trigger,
    pt.prototype.queueTrigger = function(e) {
        var t = this;
        ot || (ot = new Map);
        var i = e.type || e
          , n = ot.get(this);
        n || (n = new Map,
        ot.set(this, n));
        var a = n.get(i);
        n.delete(i),
        r.a.clearTimeout(a);
        var s = r.a.setTimeout(function() {
            0 === n.size && (n = null,
            ot.delete(t)),
            t.trigger(e)
        }, 0);
        n.set(i, s)
    }
    ;
    var ft = function(e) {
        return e instanceof pt || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(t) {
            return "function" == typeof e[t]
        })
    }
      , mt = function(e) {
        return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
    }
      , gt = function(e) {
        if (!e.nodeName && !ft(e))
            throw new Error("Invalid target; must be a DOM node or evented object.")
    }
      , yt = function(e) {
        if (!mt(e))
            throw new Error("Invalid event type; must be a non-empty string or array.")
    }
      , vt = function(e) {
        if ("function" != typeof e)
            throw new Error("Invalid listener; must be a function.")
    }
      , _t = function(e, t) {
        var i, n, r, a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
        return a ? (i = e.eventBusEl_,
        t.length >= 3 && t.shift(),
        n = t[0],
        r = t[1]) : (i = t[0],
        n = t[1],
        r = t[2]),
        gt(i),
        yt(n),
        vt(r),
        {
            isTargetingSelf: a,
            target: i,
            type: n,
            listener: r = ct(e, r)
        }
    }
      , bt = function(e, t, i, n) {
        gt(e),
        e.nodeName ? nt[t](e, i, n) : e[t](i, n)
    }
      , Tt = {
        on: function() {
            for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            var r = _t(this, i)
              , a = r.isTargetingSelf
              , s = r.target
              , o = r.type
              , u = r.listener;
            if (bt(s, "on", o, u),
            !a) {
                var l = function() {
                    return e.off(s, o, u)
                };
                l.guid = u.guid;
                var c = function() {
                    return e.off("dispose", l)
                };
                c.guid = u.guid,
                bt(this, "on", "dispose", l),
                bt(s, "on", "dispose", c)
            }
        },
        one: function() {
            for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            var r = _t(this, i)
              , a = r.isTargetingSelf
              , s = r.target
              , o = r.type
              , u = r.listener;
            if (a)
                bt(s, "one", o, u);
            else {
                var l = function t() {
                    e.off(s, o, t);
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                        n[r] = arguments[r];
                    u.apply(null, n)
                };
                l.guid = u.guid,
                bt(s, "one", o, l)
            }
        },
        off: function(e, t, i) {
            if (!e || mt(e))
                Ze(this.eventBusEl_, e, t);
            else {
                var n = e
                  , r = t;
                gt(n),
                yt(r),
                vt(i),
                i = ct(this, i),
                this.off("dispose", i),
                n.nodeName ? (Ze(n, r, i),
                Ze(n, "dispose", i)) : ft(n) && (n.off(r, i),
                n.off("dispose", i))
            }
        },
        trigger: function(e, t) {
            return et(this.eventBusEl_, e, t)
        }
    };
    function St(e, t) {
        void 0 === t && (t = {});
        var i = t.eventBusKey;
        if (i) {
            if (!e[i].nodeName)
                throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
            e.eventBusEl_ = e[i]
        } else
            e.eventBusEl_ = fe("span", {
                className: "vjs-event-bus"
            });
        return ne(e, Tt),
        e.eventedCallbacks && e.eventedCallbacks.forEach(function(e) {
            e()
        }),
        e.on("dispose", function() {
            e.off(),
            r.a.setTimeout(function() {
                e.eventBusEl_ = null
            }, 0)
        }),
        e
    }
    var kt = {
        state: {},
        setState: function(e) {
            var t, i = this;
            return "function" == typeof e && (e = e()),
            ie(e, function(e, n) {
                i.state[n] !== e && ((t = t || {})[n] = {
                    from: i.state[n],
                    to: e
                }),
                i.state[n] = e
            }),
            t && ft(this) && this.trigger({
                changes: t,
                type: "statechanged"
            }),
            t
        }
    };
    function wt(e, t) {
        return ne(e, kt),
        e.state = ne({}, e.state, t),
        "function" == typeof e.handleStateChanged && ft(e) && e.on("statechanged", e.handleStateChanged),
        e
    }
    function Ct(e) {
        return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
    }
    function Et() {
        for (var e = {}, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
            i[n] = arguments[n];
        return i.forEach(function(t) {
            t && ie(t, function(t, i) {
                ae(t) ? (ae(e[i]) || (e[i] = {}),
                e[i] = Et(e[i], t)) : e[i] = t
            })
        }),
        e
    }
    var At = function() {
        function e(e, t, i) {
            if (!e && this.play ? this.player_ = e = this : this.player_ = e,
            this.parentComponent_ = null,
            this.options_ = Et({}, this.options_),
            t = this.options_ = Et(this.options_, t),
            this.id_ = t.id || t.el && t.el.id,
            !this.id_) {
                var n = e && e.id && e.id() || "no_player";
                this.id_ = n + "_component_" + Ve()
            }
            this.name_ = t.name || null,
            t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()),
            !1 !== t.evented && St(this, {
                eventBusKey: this.el_ ? "el_" : null
            }),
            wt(this, this.constructor.defaultState),
            this.children_ = [],
            this.childIndex_ = {},
            this.childNameIndex_ = {},
            !1 !== t.initChildren && this.initChildren(),
            this.ready(i),
            !1 !== t.reportTouchActivity && this.enableTouchActivity()
        }
        var t = e.prototype;
        return t.dispose = function() {
            if (this.trigger({
                type: "dispose",
                bubbles: !1
            }),
            this.children_)
                for (var e = this.children_.length - 1; e >= 0; e--)
                    this.children_[e].dispose && this.children_[e].dispose();
            this.children_ = null,
            this.childIndex_ = null,
            this.childNameIndex_ = null,
            this.parentComponent_ = null,
            this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
            Ge(this.el_),
            this.el_ = null),
            this.player_ = null
        }
        ,
        t.player = function() {
            return this.player_
        }
        ,
        t.options = function(e) {
            return J.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),
            e ? (this.options_ = Et(this.options_, e),
            this.options_) : this.options_
        }
        ,
        t.el = function() {
            return this.el_
        }
        ,
        t.createEl = function(e, t, i) {
            return fe(e, t, i)
        }
        ,
        t.localize = function(e, t, i) {
            void 0 === i && (i = e);
            var n = this.player_.language && this.player_.language()
              , r = this.player_.languages && this.player_.languages()
              , a = r && r[n]
              , s = n && n.split("-")[0]
              , o = r && r[s]
              , u = i;
            return a && a[e] ? u = a[e] : o && o[e] && (u = o[e]),
            t && (u = u.replace(/\{(\d+)\}/g, function(e, i) {
                var n = t[i - 1]
                  , r = n;
                return void 0 === n && (r = e),
                r
            })),
            u
        }
        ,
        t.contentEl = function() {
            return this.contentEl_ || this.el_
        }
        ,
        t.id = function() {
            return this.id_
        }
        ,
        t.name = function() {
            return this.name_
        }
        ,
        t.children = function() {
            return this.children_
        }
        ,
        t.getChildById = function(e) {
            return this.childIndex_[e]
        }
        ,
        t.getChild = function(e) {
            if (e)
                return e = Ct(e),
                this.childNameIndex_[e]
        }
        ,
        t.addChild = function(t, i, n) {
            var r, a;
            if (void 0 === i && (i = {}),
            void 0 === n && (n = this.children_.length),
            "string" == typeof t) {
                a = Ct(t);
                var s = i.componentClass || a;
                i.name = a;
                var o = e.getComponent(s);
                if (!o)
                    throw new Error("Component " + s + " does not exist");
                if ("function" != typeof o)
                    return null;
                r = new o(this.player_ || this,i)
            } else
                r = t;
            if (r.parentComponent_ && r.parentComponent_.removeChild(r),
            this.children_.splice(n, 0, r),
            r.parentComponent_ = this,
            "function" == typeof r.id && (this.childIndex_[r.id()] = r),
            (a = a || r.name && Ct(r.name())) && (this.childNameIndex_[a] = r),
            "function" == typeof r.el && r.el()) {
                var u = this.contentEl().children[n] || null;
                this.contentEl().insertBefore(r.el(), u)
            }
            return r
        }
        ,
        t.removeChild = function(e) {
            if ("string" == typeof e && (e = this.getChild(e)),
            e && this.children_) {
                for (var t = !1, i = this.children_.length - 1; i >= 0; i--)
                    if (this.children_[i] === e) {
                        t = !0,
                        this.children_.splice(i, 1);
                        break
                    }
                if (t) {
                    e.parentComponent_ = null,
                    this.childIndex_[e.id()] = null,
                    this.childNameIndex_[e.name()] = null;
                    var n = e.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
            }
        }
        ,
        t.initChildren = function() {
            var t = this
              , i = this.options_.children;
            if (i) {
                var n, r = this.options_, a = e.getComponent("Tech");
                (n = Array.isArray(i) ? i : Object.keys(i)).concat(Object.keys(this.options_).filter(function(e) {
                    return !n.some(function(t) {
                        return "string" == typeof t ? e === t : e === t.name
                    })
                })).map(function(e) {
                    var n, r;
                    return "string" == typeof e ? r = i[n = e] || t.options_[n] || {} : (n = e.name,
                    r = e),
                    {
                        name: n,
                        opts: r
                    }
                }).filter(function(t) {
                    var i = e.getComponent(t.opts.componentClass || Ct(t.name));
                    return i && !a.isTech(i)
                }).forEach(function(e) {
                    var i = e.name
                      , n = e.opts;
                    if (void 0 !== r[i] && (n = r[i]),
                    !1 !== n) {
                        !0 === n && (n = {}),
                        n.playerOptions = t.options_.playerOptions;
                        var a = t.addChild(i, n);
                        a && (t[i] = a)
                    }
                })
            }
        }
        ,
        t.buildCSSClass = function() {
            return ""
        }
        ,
        t.ready = function(e, t) {
            if (void 0 === t && (t = !1),
            e)
                return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [],
                void this.readyQueue_.push(e))
        }
        ,
        t.triggerReady = function() {
            this.isReady_ = !0,
            this.setTimeout(function() {
                var e = this.readyQueue_;
                this.readyQueue_ = [],
                e && e.length > 0 && e.forEach(function(e) {
                    e.call(this)
                }, this),
                this.trigger("ready")
            }, 1)
        }
        ,
        t.$ = function(e, t) {
            return Be(e, t || this.contentEl())
        }
        ,
        t.$$ = function(e, t) {
            return Ne(e, t || this.contentEl())
        }
        ,
        t.hasClass = function(e) {
            return ye(this.el_, e)
        }
        ,
        t.addClass = function(e) {
            ve(this.el_, e)
        }
        ,
        t.removeClass = function(e) {
            _e(this.el_, e)
        }
        ,
        t.toggleClass = function(e, t) {
            be(this.el_, e, t)
        }
        ,
        t.show = function() {
            this.removeClass("vjs-hidden")
        }
        ,
        t.hide = function() {
            this.addClass("vjs-hidden")
        }
        ,
        t.lockShowing = function() {
            this.addClass("vjs-lock-showing")
        }
        ,
        t.unlockShowing = function() {
            this.removeClass("vjs-lock-showing")
        }
        ,
        t.getAttribute = function(e) {
            return ke(this.el_, e)
        }
        ,
        t.setAttribute = function(e, t) {
            we(this.el_, e, t)
        }
        ,
        t.removeAttribute = function(e) {
            Ce(this.el_, e)
        }
        ,
        t.width = function(e, t) {
            return this.dimension("width", e, t)
        }
        ,
        t.height = function(e, t) {
            return this.dimension("height", e, t)
        }
        ,
        t.dimensions = function(e, t) {
            this.width(e, !0),
            this.height(t)
        }
        ,
        t.dimension = function(e, t, i) {
            if (void 0 !== t)
                return null !== t && t == t || (t = 0),
                -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px",
                void (i || this.trigger("componentresize"));
            if (!this.el_)
                return 0;
            var n = this.el_.style[e]
              , r = n.indexOf("px");
            return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + Ct(e)], 10)
        }
        ,
        t.currentDimension = function(e) {
            var t = 0;
            if ("width" !== e && "height" !== e)
                throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof r.a.getComputedStyle) {
                var i = r.a.getComputedStyle(this.el_);
                t = i.getPropertyValue(e) || i[e]
            }
            if (0 === (t = parseFloat(t))) {
                var n = "offset" + Ct(e);
                t = this.el_[n]
            }
            return t
        }
        ,
        t.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        }
        ,
        t.currentWidth = function() {
            return this.currentDimension("width")
        }
        ,
        t.currentHeight = function() {
            return this.currentDimension("height")
        }
        ,
        t.focus = function() {
            this.el_.focus()
        }
        ,
        t.blur = function() {
            this.el_.blur()
        }
        ,
        t.handleKeyDown = function(e) {
            this.player_ && (e.stopPropagation(),
            this.player_.handleKeyDown(e))
        }
        ,
        t.handleKeyPress = function(e) {
            this.handleKeyDown(e)
        }
        ,
        t.emitTapEvents = function() {
            var e, t = 0, i = null;
            this.on("touchstart", function(n) {
                1 === n.touches.length && (i = {
                    pageX: n.touches[0].pageX,
                    pageY: n.touches[0].pageY
                },
                t = (new Date).getTime(),
                e = !0)
            }),
            this.on("touchmove", function(t) {
                if (t.touches.length > 1)
                    e = !1;
                else if (i) {
                    var n = t.touches[0].pageX - i.pageX
                      , r = t.touches[0].pageY - i.pageY;
                    Math.sqrt(n * n + r * r) > 10 && (e = !1)
                }
            });
            var n = function() {
                e = !1
            };
            this.on("touchleave", n),
            this.on("touchcancel", n),
            this.on("touchend", function(n) {
                (i = null,
                !0 === e) && ((new Date).getTime() - t < 200 && (n.preventDefault(),
                this.trigger("tap")))
            })
        }
        ,
        t.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var e, t = ct(this.player(), this.player().reportUserActivity);
                this.on("touchstart", function() {
                    t(),
                    this.clearInterval(e),
                    e = this.setInterval(t, 250)
                });
                var i = function(i) {
                    t(),
                    this.clearInterval(e)
                };
                this.on("touchmove", t),
                this.on("touchend", i),
                this.on("touchcancel", i)
            }
        }
        ,
        t.setTimeout = function(e, t) {
            var i, n, a = this;
            return e = ct(this, e),
            i = r.a.setTimeout(function() {
                a.off("dispose", n),
                e()
            }, t),
            (n = function() {
                return a.clearTimeout(i)
            }
            ).guid = "vjs-timeout-" + i,
            this.on("dispose", n),
            i
        }
        ,
        t.clearTimeout = function(e) {
            r.a.clearTimeout(e);
            var t = function() {};
            return t.guid = "vjs-timeout-" + e,
            this.off("dispose", t),
            e
        }
        ,
        t.setInterval = function(e, t) {
            var i = this;
            e = ct(this, e);
            var n = r.a.setInterval(e, t)
              , a = function() {
                return i.clearInterval(n)
            };
            return a.guid = "vjs-interval-" + n,
            this.on("dispose", a),
            n
        }
        ,
        t.clearInterval = function(e) {
            r.a.clearInterval(e);
            var t = function() {};
            return t.guid = "vjs-interval-" + e,
            this.off("dispose", t),
            e
        }
        ,
        t.requestAnimationFrame = function(e) {
            var t, i, n = this;
            return this.supportsRaf_ ? (e = ct(this, e),
            t = r.a.requestAnimationFrame(function() {
                n.off("dispose", i),
                e()
            }),
            (i = function() {
                return n.cancelAnimationFrame(t)
            }
            ).guid = "vjs-raf-" + t,
            this.on("dispose", i),
            t) : this.setTimeout(e, 1e3 / 60)
        }
        ,
        t.cancelAnimationFrame = function(e) {
            if (this.supportsRaf_) {
                r.a.cancelAnimationFrame(e);
                var t = function() {};
                return t.guid = "vjs-raf-" + e,
                this.off("dispose", t),
                e
            }
            return this.clearTimeout(e)
        }
        ,
        e.registerComponent = function(t, i) {
            if ("string" != typeof t || !t)
                throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
            var n, r = e.getComponent("Tech"), a = r && r.isTech(i), s = e === i || e.prototype.isPrototypeOf(i.prototype);
            if (a || !s)
                throw n = a ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass",
                new Error('Illegal component, "' + t + '"; ' + n + ".");
            t = Ct(t),
            e.components_ || (e.components_ = {});
            var o = e.getComponent("Player");
            if ("Player" === t && o && o.players) {
                var u = o.players
                  , l = Object.keys(u);
                if (u && l.length > 0 && l.map(function(e) {
                    return u[e]
                }).every(Boolean))
                    throw new Error("Can not register Player component after player has been created.")
            }
            return e.components_[t] = i,
            i
        }
        ,
        e.getComponent = function(t) {
            if (t)
                return t = Ct(t),
                e.components_ && e.components_[t] ? e.components_[t] : void 0
        }
        ,
        e
    }();
    At.prototype.supportsRaf_ = "function" == typeof r.a.requestAnimationFrame && "function" == typeof r.a.cancelAnimationFrame,
    At.registerComponent("Component", At);
    var Pt, Lt = r.a.navigator && r.a.navigator.userAgent || "", Ot = /AppleWebKit\/([\d.]+)/i.exec(Lt), It = Ot ? parseFloat(Ot.pop()) : null, xt = /iPad/i.test(Lt), Dt = /iPhone/i.test(Lt) && !xt, Ut = /iPod/i.test(Lt), Rt = Dt || xt || Ut, Mt = (Pt = Lt.match(/OS (\d+)_/i)) && Pt[1] ? Pt[1] : null, Bt = /Android/i.test(Lt), Nt = function() {
        var e = Lt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e)
            return null;
        var t = e[1] && parseFloat(e[1])
          , i = e[2] && parseFloat(e[2]);
        return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
    }(), jt = Bt && Nt < 5 && It < 537, Ft = /Firefox/i.test(Lt), Vt = /Edge/i.test(Lt), Ht = !Vt && (/Chrome/i.test(Lt) || /CriOS/i.test(Lt)), qt = function() {
        var e = Lt.match(/(Chrome|CriOS)\/(\d+)/);
        return e && e[2] ? parseFloat(e[2]) : null
    }(), zt = function() {
        var e = /MSIE\s(\d+)\.\d/.exec(Lt)
          , t = e && parseFloat(e[1]);
        return !t && /Trident\/7.0/i.test(Lt) && /rv:11.0/.test(Lt) && (t = 11),
        t
    }(), Wt = /Safari/i.test(Lt) && !Ht && !Bt && !Vt, Gt = (Wt || Rt) && !Ht, $t = ce() && ("ontouchstart"in r.a || r.a.navigator.maxTouchPoints || r.a.DocumentTouch && r.a.document instanceof r.a.DocumentTouch), Xt = Object.freeze({
        IS_IPAD: xt,
        IS_IPHONE: Dt,
        IS_IPOD: Ut,
        IS_IOS: Rt,
        IOS_VERSION: Mt,
        IS_ANDROID: Bt,
        ANDROID_VERSION: Nt,
        IS_NATIVE_ANDROID: jt,
        IS_FIREFOX: Ft,
        IS_EDGE: Vt,
        IS_CHROME: Ht,
        CHROME_VERSION: qt,
        IE_VERSION: zt,
        IS_SAFARI: Wt,
        IS_ANY_SAFARI: Gt,
        TOUCH_ENABLED: $t
    });
    function Yt(e, t, i, n) {
        return function(e, t, i) {
            if ("number" != typeof t || t < 0 || t > i)
                throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
        }(e, n, i.length - 1),
        i[n][t]
    }
    function Kt(e) {
        return void 0 === e || 0 === e.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: e.length,
            start: Yt.bind(null, "start", 0, e),
            end: Yt.bind(null, "end", 1, e)
        }
    }
    function Qt(e, t) {
        return Array.isArray(e) ? Kt(e) : void 0 === e || void 0 === t ? Kt() : Kt([[e, t]])
    }
    function Jt(e, t) {
        var i, n, r = 0;
        if (!t)
            return 0;
        e && e.length || (e = Qt(0, 0));
        for (var a = 0; a < e.length; a++)
            i = e.start(a),
            (n = e.end(a)) > t && (n = t),
            r += n - i;
        return r / t
    }
    for (var Zt, ei = {}, ti = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], ii = ti[0], ni = !1, ri = 0; ri < ti.length; ri++)
        if (ti[ri][1]in s.a) {
            Zt = ti[ri];
            break
        }
    if (Zt) {
        for (var ai = 0; ai < Zt.length; ai++)
            ei[ii[ai]] = Zt[ai];
        ni = Zt[0] === ii[0]
    }
    function si(e) {
        if (e instanceof si)
            return e;
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : re(e) && ("number" == typeof e.code && (this.code = e.code),
        ne(this, e)),
        this.message || (this.message = si.defaultMessages[this.code] || "")
    }
    si.prototype.code = 0,
    si.prototype.message = "",
    si.prototype.status = null,
    si.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"],
    si.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var oi = 0; oi < si.errorTypes.length; oi++)
        si[si.errorTypes[oi]] = oi,
        si.prototype[si.errorTypes[oi]] = oi;
    function ui(e) {
        return null != e && "function" == typeof e.then
    }
    function li(e) {
        ui(e) && e.then(null, function(e) {})
    }
    var ci = function(e) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(t, i, n) {
            return e[i] && (t[i] = e[i]),
            t
        }, {
            cues: e.cues && Array.prototype.map.call(e.cues, function(e) {
                return {
                    startTime: e.startTime,
                    endTime: e.endTime,
                    text: e.text,
                    id: e.id
                }
            })
        })
    }
      , di = function(e) {
        var t = e.$$("track")
          , i = Array.prototype.map.call(t, function(e) {
            return e.track
        });
        return Array.prototype.map.call(t, function(e) {
            var t = ci(e.track);
            return e.src && (t.src = e.src),
            t
        }).concat(Array.prototype.filter.call(e.textTracks(), function(e) {
            return -1 === i.indexOf(e)
        }).map(ci))
    }
      , hi = function(e, t) {
        return e.forEach(function(e) {
            var i = t.addRemoteTextTrack(e).track;
            !e.src && e.cues && e.cues.forEach(function(e) {
                return i.addCue(e)
            })
        }),
        t.textTracks()
    }
      , pi = "vjs-modal-dialog"
      , fi = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1,
            n.closeable(!n.options_.uncloseable),
            n.content(n.options_.content),
            n.contentEl_ = fe("div", {
                className: pi + "-content"
            }, {
                role: "document"
            }),
            n.descEl_ = fe("p", {
                className: pi + "-description vjs-control-text",
                id: n.el().getAttribute("aria-describedby")
            }),
            me(n.descEl_, n.description()),
            n.el_.appendChild(n.descEl_),
            n.el_.appendChild(n.contentEl_),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        }
        ,
        i.dispose = function() {
            this.contentEl_ = null,
            this.descEl_ = null,
            this.previouslyActiveEl_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.buildCSSClass = function() {
            return pi + " vjs-hidden " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.label = function() {
            return this.localize(this.options_.label || "Modal Window")
        }
        ,
        i.description = function() {
            var e = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
            e
        }
        ,
        i.open = function() {
            if (!this.opened_) {
                var e = this.player();
                this.trigger("beforemodalopen"),
                this.opened_ = !0,
                (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
                this.wasPlaying_ = !e.paused(),
                this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
                this.on("keydown", this.handleKeyDown),
                this.hadControls_ = e.controls(),
                e.controls(!1),
                this.show(),
                this.conditionalFocus_(),
                this.el().setAttribute("aria-hidden", "false"),
                this.trigger("modalopen"),
                this.hasBeenOpened_ = !0
            }
        }
        ,
        i.opened = function(e) {
            return "boolean" == typeof e && this[e ? "open" : "close"](),
            this.opened_
        }
        ,
        i.close = function() {
            if (this.opened_) {
                var e = this.player();
                this.trigger("beforemodalclose"),
                this.opened_ = !1,
                this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
                this.off("keydown", this.handleKeyDown),
                this.hadControls_ && e.controls(!0),
                this.hide(),
                this.el().setAttribute("aria-hidden", "true"),
                this.trigger("modalclose"),
                this.conditionalBlur_(),
                this.options_.temporary && this.dispose()
            }
        }
        ,
        i.closeable = function(e) {
            if ("boolean" == typeof e) {
                var t = this.closeable_ = !!e
                  , i = this.getChild("closeButton");
                if (t && !i) {
                    var n = this.contentEl_;
                    this.contentEl_ = this.el_,
                    i = this.addChild("closeButton", {
                        controlText: "Close Modal Dialog"
                    }),
                    this.contentEl_ = n,
                    this.on(i, "close", this.close)
                }
                !t && i && (this.off(i, "close", this.close),
                this.removeChild(i),
                i.dispose())
            }
            return this.closeable_
        }
        ,
        i.fill = function() {
            this.fillWith(this.content())
        }
        ,
        i.fillWith = function(e) {
            var t = this.contentEl()
              , i = t.parentNode
              , n = t.nextSibling;
            this.trigger("beforemodalfill"),
            this.hasBeenFilled_ = !0,
            i.removeChild(t),
            this.empty(),
            Re(t, e),
            this.trigger("modalfill"),
            n ? i.insertBefore(t, n) : i.appendChild(t);
            var r = this.getChild("closeButton");
            r && i.appendChild(r.el_)
        }
        ,
        i.empty = function() {
            this.trigger("beforemodalempty"),
            xe(this.contentEl()),
            this.trigger("modalempty")
        }
        ,
        i.content = function(e) {
            return void 0 !== e && (this.content_ = e),
            this.content_
        }
        ,
        i.conditionalFocus_ = function() {
            var e = s.a.activeElement
              , t = this.player_.el_;
            this.previouslyActiveEl_ = null,
            (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e,
            this.focus())
        }
        ,
        i.conditionalBlur_ = function() {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(),
            this.previouslyActiveEl_ = null)
        }
        ,
        i.handleKeyDown = function(e) {
            if (e.stopPropagation(),
            h.a.isEventKey(e, "Escape") && this.closeable())
                return e.preventDefault(),
                void this.close();
            if (h.a.isEventKey(e, "Tab")) {
                for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)
                    if (n === i[r]) {
                        t = r;
                        break
                    }
                s.a.activeElement === this.el_ && (t = 0),
                e.shiftKey && 0 === t ? (i[i.length - 1].focus(),
                e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(),
                e.preventDefault())
            }
        }
        ,
        i.focusableEls_ = function() {
            var e = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(e, function(e) {
                return (e instanceof r.a.HTMLAnchorElement || e instanceof r.a.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof r.a.HTMLInputElement || e instanceof r.a.HTMLSelectElement || e instanceof r.a.HTMLTextAreaElement || e instanceof r.a.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof r.a.HTMLIFrameElement || e instanceof r.a.HTMLObjectElement || e instanceof r.a.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
            })
        }
        ,
        t
    }(At);
    fi.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    },
    At.registerComponent("ModalDialog", fi);
    var mi = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = []),
            (i = e.call(this) || this).tracks_ = [],
            Object.defineProperty(X(X(i)), "length", {
                get: function() {
                    return this.tracks_.length
                }
            });
            for (var n = 0; n < t.length; n++)
                i.addTrack(t[n]);
            return i
        }
        W(t, e);
        var i = t.prototype;
        return i.addTrack = function(e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.tracks_[t]
                }
            }),
            -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e),
            this.trigger({
                track: e,
                type: "addtrack",
                target: this
            }))
        }
        ,
        i.removeTrack = function(e) {
            for (var t, i = 0, n = this.length; i < n; i++)
                if (this[i] === e) {
                    (t = this[i]).off && t.off(),
                    this.tracks_.splice(i, 1);
                    break
                }
            t && this.trigger({
                track: t,
                type: "removetrack",
                target: this
            })
        }
        ,
        i.getTrackById = function(e) {
            for (var t = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        }
        ,
        t
    }(pt);
    for (var gi in mi.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    },
    mi.prototype.allowedEvents_)
        mi.prototype["on" + gi] = null;
    var yi = function(e, t) {
        for (var i = 0; i < e.length; i++)
            Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
    }
      , vi = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = []);
            for (var n = t.length - 1; n >= 0; n--)
                if (t[n].enabled) {
                    yi(t, t[n]);
                    break
                }
            return (i = e.call(this, t) || this).changing_ = !1,
            i
        }
        W(t, e);
        var i = t.prototype;
        return i.addTrack = function(t) {
            var i = this;
            t.enabled && yi(this, t),
            e.prototype.addTrack.call(this, t),
            t.addEventListener && (t.enabledChange_ = function() {
                i.changing_ || (i.changing_ = !0,
                yi(i, t),
                i.changing_ = !1,
                i.trigger("change"))
            }
            ,
            t.addEventListener("enabledchange", t.enabledChange_))
        }
        ,
        i.removeTrack = function(t) {
            e.prototype.removeTrack.call(this, t),
            t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_),
            t.enabledChange_ = null)
        }
        ,
        t
    }(mi)
      , _i = function(e, t) {
        for (var i = 0; i < e.length; i++)
            Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
    }
      , bi = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = []);
            for (var n = t.length - 1; n >= 0; n--)
                if (t[n].selected) {
                    _i(t, t[n]);
                    break
                }
            return (i = e.call(this, t) || this).changing_ = !1,
            Object.defineProperty(X(X(i)), "selectedIndex", {
                get: function() {
                    for (var e = 0; e < this.length; e++)
                        if (this[e].selected)
                            return e;
                    return -1
                },
                set: function() {}
            }),
            i
        }
        W(t, e);
        var i = t.prototype;
        return i.addTrack = function(t) {
            var i = this;
            t.selected && _i(this, t),
            e.prototype.addTrack.call(this, t),
            t.addEventListener && (t.selectedChange_ = function() {
                i.changing_ || (i.changing_ = !0,
                _i(i, t),
                i.changing_ = !1,
                i.trigger("change"))
            }
            ,
            t.addEventListener("selectedchange", t.selectedChange_))
        }
        ,
        i.removeTrack = function(t) {
            e.prototype.removeTrack.call(this, t),
            t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_),
            t.selectedChange_ = null)
        }
        ,
        t
    }(mi)
      , Ti = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.addTrack = function(t) {
            var i = this;
            e.prototype.addTrack.call(this, t),
            this.queueChange_ || (this.queueChange_ = function() {
                return i.queueTrigger("change")
            }
            ),
            this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
                return i.trigger("selectedlanguagechange")
            }
            ),
            t.addEventListener("modechange", this.queueChange_);
            -1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
        }
        ,
        i.removeTrack = function(t) {
            e.prototype.removeTrack.call(this, t),
            t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_),
            this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
        }
        ,
        t
    }(mi)
      , Si = function() {
        function e(e) {
            void 0 === e && (e = []),
            this.trackElements_ = [],
            Object.defineProperty(this, "length", {
                get: function() {
                    return this.trackElements_.length
                }
            });
            for (var t = 0, i = e.length; t < i; t++)
                this.addTrackElement_(e[t])
        }
        var t = e.prototype;
        return t.addTrackElement_ = function(e) {
            var t = this.trackElements_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.trackElements_[t]
                }
            }),
            -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
        }
        ,
        t.getTrackElementByTrack_ = function(e) {
            for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
                if (e === this.trackElements_[i].track) {
                    t = this.trackElements_[i];
                    break
                }
            return t
        }
        ,
        t.removeTrackElement_ = function(e) {
            for (var t = 0, i = this.trackElements_.length; t < i; t++)
                if (e === this.trackElements_[t]) {
                    this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(),
                    "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(),
                    this.trackElements_.splice(t, 1);
                    break
                }
        }
        ,
        e
    }()
      , ki = function() {
        function e(t) {
            e.prototype.setCues_.call(this, t),
            Object.defineProperty(this, "length", {
                get: function() {
                    return this.length_
                }
            })
        }
        var t = e.prototype;
        return t.setCues_ = function(e) {
            var t = this.length || 0
              , i = 0
              , n = e.length;
            this.cues_ = e,
            this.length_ = e.length;
            var r = function(e) {
                "" + e in this || Object.defineProperty(this, "" + e, {
                    get: function() {
                        return this.cues_[e]
                    }
                })
            };
            if (t < n)
                for (i = t; i < n; i++)
                    r.call(this, i)
        }
        ,
        t.getCueById = function(e) {
            for (var t = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        }
        ,
        e
    }()
      , wi = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    }
      , Ci = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    }
      , Ei = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }
      , Ai = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    }
      , Pi = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = {}),
            i = e.call(this) || this;
            var n = {
                id: t.id || "vjs_track_" + Ve(),
                kind: t.kind || "",
                label: t.label || "",
                language: t.language || ""
            }
              , r = function(e) {
                Object.defineProperty(X(X(i)), e, {
                    get: function() {
                        return n[e]
                    },
                    set: function() {}
                })
            };
            for (var a in n)
                r(a);
            return i
        }
        return W(t, e),
        t
    }(pt)
      , Li = function(e) {
        var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"]
          , i = s.a.createElement("a");
        i.href = e;
        var n, a = "" === i.host && "file:" !== i.protocol;
        a && ((n = s.a.createElement("div")).innerHTML = '<a href="' + e + '"></a>',
        i = n.firstChild,
        n.setAttribute("style", "display:none; position:absolute;"),
        s.a.body.appendChild(n));
        for (var o = {}, u = 0; u < t.length; u++)
            o[t[u]] = i[t[u]];
        return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")),
        "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")),
        o.protocol || (o.protocol = r.a.location.protocol),
        a && s.a.body.removeChild(n),
        o
    }
      , Oi = function(e) {
        if (!e.match(/^https?:\/\//)) {
            var t = s.a.createElement("div");
            t.innerHTML = '<a href="' + e + '">x</a>',
            e = t.firstChild.href
        }
        return e
    }
      , Ii = function(e) {
        if ("string" == typeof e) {
            var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
            if (t)
                return t.pop().toLowerCase()
        }
        return ""
    }
      , xi = function(e) {
        var t = r.a.location
          , i = Li(e);
        return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
    }
      , Di = Object.freeze({
        parseUrl: Li,
        getAbsoluteURL: Oi,
        getFileExtension: Ii,
        isCrossOrigin: xi
    })
      , Ui = function(e, t) {
        var i = new r.a.WebVTT.Parser(r.a,r.a.vttjs,r.a.WebVTT.StringDecoder())
          , n = [];
        i.oncue = function(e) {
            t.addCue(e)
        }
        ,
        i.onparsingerror = function(e) {
            n.push(e)
        }
        ,
        i.onflush = function() {
            t.trigger({
                type: "loadeddata",
                target: t
            })
        }
        ,
        i.parse(e),
        n.length > 0 && (r.a.console && r.a.console.groupCollapsed && r.a.console.groupCollapsed("Text Track parsing errors for " + t.src),
        n.forEach(function(e) {
            return J.error(e)
        }),
        r.a.console && r.a.console.groupEnd && r.a.console.groupEnd()),
        i.flush()
    }
      , Ri = function(e, t) {
        var i = {
            uri: e
        }
          , n = xi(e);
        n && (i.cors = n),
        f()(i, ct(this, function(e, i, n) {
            if (e)
                return J.error(e, i);
            if (t.loaded_ = !0,
            "function" != typeof r.a.WebVTT) {
                if (t.tech_) {
                    var a, s = function() {
                        J.error("vttjs failed to load, stopping trying to process " + t.src),
                        t.tech_.off("vttjsloaded", a)
                    };
                    a = function() {
                        return t.tech_.off("vttjserror", s),
                        Ui(n, t)
                    }
                    ,
                    t.tech_.one("vttjsloaded", a),
                    t.tech_.one("vttjserror", s)
                }
            } else
                Ui(n, t)
        }))
    }
      , Mi = function(e) {
        function t(t) {
            var i;
            if (void 0 === t && (t = {}),
            !t.tech)
                throw new Error("A tech was not provided.");
            var n = Et(t, {
                kind: Ei[t.kind] || "subtitles",
                language: t.language || t.srclang || ""
            })
              , r = Ai[n.mode] || "disabled"
              , a = n.default;
            "metadata" !== n.kind && "chapters" !== n.kind || (r = "hidden"),
            (i = e.call(this, n) || this).tech_ = n.tech,
            i.cues_ = [],
            i.activeCues_ = [];
            var s = new ki(i.cues_)
              , o = new ki(i.activeCues_)
              , u = !1
              , l = ct(X(X(i)), function() {
                this.activeCues = this.activeCues,
                u && (this.trigger("cuechange"),
                u = !1)
            });
            return "disabled" !== r && i.tech_.ready(function() {
                i.tech_.on("timeupdate", l)
            }, !0),
            Object.defineProperties(X(X(i)), {
                default: {
                    get: function() {
                        return a
                    },
                    set: function() {}
                },
                mode: {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        var t = this;
                        Ai[e] && ("disabled" !== (r = e) ? this.tech_.ready(function() {
                            t.tech_.on("timeupdate", l)
                        }, !0) : this.tech_.off("timeupdate", l),
                        this.trigger("modechange"))
                    }
                },
                cues: {
                    get: function() {
                        return this.loaded_ ? s : null
                    },
                    set: function() {}
                },
                activeCues: {
                    get: function() {
                        if (!this.loaded_)
                            return null;
                        if (0 === this.cues.length)
                            return o;
                        for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                            var r = this.cues[i];
                            r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e && t.push(r)
                        }
                        if (u = !1,
                        t.length !== this.activeCues_.length)
                            u = !0;
                        else
                            for (var a = 0; a < t.length; a++)
                                -1 === this.activeCues_.indexOf(t[a]) && (u = !0);
                        return this.activeCues_ = t,
                        o.setCues_(this.activeCues_),
                        o
                    },
                    set: function() {}
                }
            }),
            n.src ? (i.src = n.src,
            Ri(n.src, X(X(i)))) : i.loaded_ = !0,
            i
        }
        W(t, e);
        var i = t.prototype;
        return i.addCue = function(e) {
            var t = e;
            if (r.a.vttjs && !(e instanceof r.a.vttjs.VTTCue)) {
                for (var i in t = new r.a.vttjs.VTTCue(e.startTime,e.endTime,e.text),
                e)
                    i in t || (t[i] = e[i]);
                t.id = e.id,
                t.originalCue_ = e
            }
            for (var n = this.tech_.textTracks(), a = 0; a < n.length; a++)
                n[a] !== this && n[a].removeCue(t);
            this.cues_.push(t),
            this.cues.setCues_(this.cues_)
        }
        ,
        i.removeCue = function(e) {
            for (var t = this.cues_.length; t--; ) {
                var i = this.cues_[t];
                if (i === e || i.originalCue_ && i.originalCue_ === e) {
                    this.cues_.splice(t, 1),
                    this.cues.setCues_(this.cues_);
                    break
                }
            }
        }
        ,
        t
    }(Pi);
    Mi.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var Bi = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = {});
            var n = Et(t, {
                kind: Ci[t.kind] || ""
            });
            i = e.call(this, n) || this;
            var r = !1;
            return Object.defineProperty(X(X(i)), "enabled", {
                get: function() {
                    return r
                },
                set: function(e) {
                    "boolean" == typeof e && e !== r && (r = e,
                    this.trigger("enabledchange"))
                }
            }),
            n.enabled && (i.enabled = n.enabled),
            i.loaded_ = !0,
            i
        }
        return W(t, e),
        t
    }(Pi)
      , Ni = function(e) {
        function t(t) {
            var i;
            void 0 === t && (t = {});
            var n = Et(t, {
                kind: wi[t.kind] || ""
            });
            i = e.call(this, n) || this;
            var r = !1;
            return Object.defineProperty(X(X(i)), "selected", {
                get: function() {
                    return r
                },
                set: function(e) {
                    "boolean" == typeof e && e !== r && (r = e,
                    this.trigger("selectedchange"))
                }
            }),
            n.selected && (i.selected = n.selected),
            i
        }
        return W(t, e),
        t
    }(Pi)
      , ji = 0
      , Fi = 2
      , Vi = function(e) {
        function t(t) {
            var i, n;
            void 0 === t && (t = {}),
            i = e.call(this) || this;
            var r = new Mi(t);
            return i.kind = r.kind,
            i.src = r.src,
            i.srclang = r.language,
            i.label = r.label,
            i.default = r.default,
            Object.defineProperties(X(X(i)), {
                readyState: {
                    get: function() {
                        return n
                    }
                },
                track: {
                    get: function() {
                        return r
                    }
                }
            }),
            n = ji,
            r.addEventListener("loadeddata", function() {
                n = Fi,
                i.trigger({
                    type: "load",
                    target: X(X(i))
                })
            }),
            i
        }
        return W(t, e),
        t
    }(pt);
    Vi.prototype.allowedEvents_ = {
        load: "load"
    },
    Vi.NONE = ji,
    Vi.LOADING = 1,
    Vi.LOADED = Fi,
    Vi.ERROR = 3;
    var Hi = {
        audio: {
            ListClass: vi,
            TrackClass: Bi,
            capitalName: "Audio"
        },
        video: {
            ListClass: bi,
            TrackClass: Ni,
            capitalName: "Video"
        },
        text: {
            ListClass: Ti,
            TrackClass: Mi,
            capitalName: "Text"
        }
    };
    Object.keys(Hi).forEach(function(e) {
        Hi[e].getterName = e + "Tracks",
        Hi[e].privateName = e + "Tracks_"
    });
    var qi = {
        remoteText: {
            ListClass: Ti,
            TrackClass: Mi,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: Si,
            TrackClass: Vi,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }
      , zi = Et(Hi, qi);
    qi.names = Object.keys(qi),
    Hi.names = Object.keys(Hi),
    zi.names = [].concat(qi.names).concat(Hi.names);
    var Wi = function(e) {
        function t(t, i) {
            var n;
            return void 0 === t && (t = {}),
            void 0 === i && (i = function() {}
            ),
            t.reportTouchActivity = !1,
            (n = e.call(this, null, t, i) || this).hasStarted_ = !1,
            n.on("playing", function() {
                this.hasStarted_ = !0
            }),
            n.on("loadstart", function() {
                this.hasStarted_ = !1
            }),
            zi.names.forEach(function(e) {
                var i = zi[e];
                t && t[i.getterName] && (n[i.privateName] = t[i.getterName])
            }),
            n.featuresProgressEvents || n.manualProgressOn(),
            n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
            ["Text", "Audio", "Video"].forEach(function(e) {
                !1 === t["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1)
            }),
            !1 === t.nativeCaptions || !1 === t.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== t.nativeCaptions && !0 !== t.nativeTextTracks || (n.featuresNativeTextTracks = !0),
            n.featuresNativeTextTracks || n.emulateTextTracks(),
            n.autoRemoteTextTracks_ = new zi.text.ListClass,
            n.initTrackListeners(),
            t.nativeControlsForTouch || n.emitTapEvents(),
            n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.triggerSourceset = function(e) {
            var t = this;
            this.isReady_ || this.one("ready", function() {
                return t.setTimeout(function() {
                    return t.triggerSourceset(e)
                }, 1)
            }),
            this.trigger({
                src: e,
                type: "sourceset"
            })
        }
        ,
        i.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange),
            this.manualProgress = !0,
            this.one("ready", this.trackProgress)
        }
        ,
        i.manualProgressOff = function() {
            this.manualProgress = !1,
            this.stopTrackingProgress(),
            this.off("durationchange", this.onDurationChange)
        }
        ,
        i.trackProgress = function(e) {
            this.stopTrackingProgress(),
            this.progressInterval = this.setInterval(ct(this, function() {
                var e = this.bufferedPercent();
                this.bufferedPercent_ !== e && this.trigger("progress"),
                this.bufferedPercent_ = e,
                1 === e && this.stopTrackingProgress()
            }), 500)
        }
        ,
        i.onDurationChange = function(e) {
            this.duration_ = this.duration()
        }
        ,
        i.buffered = function() {
            return Qt(0, 0)
        }
        ,
        i.bufferedPercent = function() {
            return Jt(this.buffered(), this.duration_)
        }
        ,
        i.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        }
        ,
        i.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0,
            this.on("play", this.trackCurrentTime),
            this.on("pause", this.stopTrackingCurrentTime)
        }
        ,
        i.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1,
            this.stopTrackingCurrentTime(),
            this.off("play", this.trackCurrentTime),
            this.off("pause", this.stopTrackingCurrentTime)
        }
        ,
        i.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(),
            this.currentTimeInterval = this.setInterval(function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, 250)
        }
        ,
        i.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval),
            this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }
        ,
        i.dispose = function() {
            this.clearTracks(Hi.names),
            this.manualProgress && this.manualProgressOff(),
            this.manualTimeUpdates && this.manualTimeUpdatesOff(),
            e.prototype.dispose.call(this)
        }
        ,
        i.clearTracks = function(e) {
            var t = this;
            (e = [].concat(e)).forEach(function(e) {
                for (var i = t[e + "Tracks"]() || [], n = i.length; n--; ) {
                    var r = i[n];
                    "text" === e && t.removeRemoteTextTrack(r),
                    i.removeTrack(r)
                }
            })
        }
        ,
        i.cleanupAutoTextTracks = function() {
            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
                var i = e[t];
                this.removeRemoteTextTrack(i)
            }
        }
        ,
        i.reset = function() {}
        ,
        i.error = function(e) {
            return void 0 !== e && (this.error_ = new si(e),
            this.trigger("error")),
            this.error_
        }
        ,
        i.played = function() {
            return this.hasStarted_ ? Qt(0, 0) : Qt()
        }
        ,
        i.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }
        ,
        i.initTrackListeners = function() {
            var e = this;
            Hi.names.forEach(function(t) {
                var i = Hi[t]
                  , n = function() {
                    e.trigger(t + "trackchange")
                }
                  , r = e[i.getterName]();
                r.addEventListener("removetrack", n),
                r.addEventListener("addtrack", n),
                e.on("dispose", function() {
                    r.removeEventListener("removetrack", n),
                    r.removeEventListener("addtrack", n)
                })
            })
        }
        ,
        i.addWebVttScript_ = function() {
            var e = this;
            if (!r.a.WebVTT)
                if (s.a.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && ae(g.a) && Object.keys(g.a).length > 0)
                        return void this.trigger("vttjsloaded");
                    var t = s.a.createElement("script");
                    t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",
                    t.onload = function() {
                        e.trigger("vttjsloaded")
                    }
                    ,
                    t.onerror = function() {
                        e.trigger("vttjserror")
                    }
                    ,
                    this.on("dispose", function() {
                        t.onload = null,
                        t.onerror = null
                    }),
                    r.a.WebVTT = !0,
                    this.el().parentNode.appendChild(t)
                } else
                    this.ready(this.addWebVttScript_)
        }
        ,
        i.emulateTextTracks = function() {
            var e = this
              , t = this.textTracks()
              , i = this.remoteTextTracks()
              , n = function(e) {
                return t.addTrack(e.track)
            }
              , r = function(e) {
                return t.removeTrack(e.track)
            };
            i.on("addtrack", n),
            i.on("removetrack", r),
            this.addWebVttScript_();
            var a = function() {
                return e.trigger("texttrackchange")
            }
              , s = function() {
                a();
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.removeEventListener("cuechange", a),
                    "showing" === i.mode && i.addEventListener("cuechange", a)
                }
            };
            s(),
            t.addEventListener("change", s),
            t.addEventListener("addtrack", s),
            t.addEventListener("removetrack", s),
            this.on("dispose", function() {
                i.off("addtrack", n),
                i.off("removetrack", r),
                t.removeEventListener("change", s),
                t.removeEventListener("addtrack", s),
                t.removeEventListener("removetrack", s);
                for (var e = 0; e < t.length; e++) {
                    t[e].removeEventListener("cuechange", a)
                }
            })
        }
        ,
        i.addTextTrack = function(e, t, i) {
            if (!e)
                throw new Error("TextTrack kind is required but was not provided");
            return function(e, t, i, n, r) {
                void 0 === r && (r = {});
                var a = e.textTracks();
                r.kind = t,
                i && (r.label = i),
                n && (r.language = n),
                r.tech = e;
                var s = new zi.text.TrackClass(r);
                return a.addTrack(s),
                s
            }(this, e, t, i)
        }
        ,
        i.createRemoteTextTrack = function(e) {
            var t = Et(e, {
                tech: this
            });
            return new qi.remoteTextEl.TrackClass(t)
        }
        ,
        i.addRemoteTextTrack = function(e, t) {
            var i = this;
            void 0 === e && (e = {});
            var n = this.createRemoteTextTrack(e);
            return !0 !== t && !1 !== t && (J.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
            t = !0),
            this.remoteTextTrackEls().addTrackElement_(n),
            this.remoteTextTracks().addTrack(n.track),
            !0 !== t && this.ready(function() {
                return i.autoRemoteTextTracks_.addTrack(n.track)
            }),
            n
        }
        ,
        i.removeRemoteTextTrack = function(e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
            this.remoteTextTrackEls().removeTrackElement_(t),
            this.remoteTextTracks().removeTrack(e),
            this.autoRemoteTextTracks_.removeTrack(e)
        }
        ,
        i.getVideoPlaybackQuality = function() {
            return {}
        }
        ,
        i.setPoster = function() {}
        ,
        i.playsinline = function() {}
        ,
        i.setPlaysinline = function() {}
        ,
        i.overrideNativeAudioTracks = function() {}
        ,
        i.overrideNativeVideoTracks = function() {}
        ,
        i.canPlayType = function() {
            return ""
        }
        ,
        t.canPlayType = function() {
            return ""
        }
        ,
        t.canPlaySource = function(e, i) {
            return t.canPlayType(e.type)
        }
        ,
        t.isTech = function(e) {
            return e.prototype instanceof t || e instanceof t || e === t
        }
        ,
        t.registerTech = function(e, i) {
            if (t.techs_ || (t.techs_ = {}),
            !t.isTech(i))
                throw new Error("Tech " + e + " must be a Tech");
            if (!t.canPlayType)
                throw new Error("Techs must have a static canPlayType method on them");
            if (!t.canPlaySource)
                throw new Error("Techs must have a static canPlaySource method on them");
            return e = Ct(e),
            t.techs_[e] = i,
            "Tech" !== e && t.defaultTechOrder_.push(e),
            i
        }
        ,
        t.getTech = function(e) {
            if (e)
                return e = Ct(e),
                t.techs_ && t.techs_[e] ? t.techs_[e] : r.a && r.a.videojs && r.a.videojs[e] ? (J.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
                r.a.videojs[e]) : void 0
        }
        ,
        t
    }(At);
    zi.names.forEach(function(e) {
        var t = zi[e];
        Wi.prototype[t.getterName] = function() {
            return this[t.privateName] = this[t.privateName] || new t.ListClass,
            this[t.privateName]
        }
    }),
    Wi.prototype.featuresVolumeControl = !0,
    Wi.prototype.featuresMuteControl = !0,
    Wi.prototype.featuresFullscreenResize = !1,
    Wi.prototype.featuresPlaybackRate = !1,
    Wi.prototype.featuresProgressEvents = !1,
    Wi.prototype.featuresSourceset = !1,
    Wi.prototype.featuresTimeupdateEvents = !1,
    Wi.prototype.featuresNativeTextTracks = !1,
    Wi.withSourceHandlers = function(e) {
        e.registerSourceHandler = function(t, i) {
            var n = e.sourceHandlers;
            n || (n = e.sourceHandlers = []),
            void 0 === i && (i = n.length),
            n.splice(i, 0, t)
        }
        ,
        e.canPlayType = function(t) {
            for (var i, n = e.sourceHandlers || [], r = 0; r < n.length; r++)
                if (i = n[r].canPlayType(t))
                    return i;
            return ""
        }
        ,
        e.selectSourceHandler = function(t, i) {
            for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++)
                if (n[r].canHandleSource(t, i))
                    return n[r];
            return null
        }
        ,
        e.canPlaySource = function(t, i) {
            var n = e.selectSourceHandler(t, i);
            return n ? n.canHandleSource(t, i) : ""
        }
        ;
        ["seekable", "seeking", "duration"].forEach(function(e) {
            var t = this[e];
            "function" == typeof t && (this[e] = function() {
                return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
            }
            )
        }, e.prototype),
        e.prototype.setSource = function(t) {
            var i = e.selectSourceHandler(t, this.options_);
            i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : J.error("No source handler found for the current source.")),
            this.disposeSourceHandler(),
            this.off("dispose", this.disposeSourceHandler),
            i !== e.nativeSourceHandler && (this.currentSource_ = t),
            this.sourceHandler_ = i.handleSource(t, this, this.options_),
            this.one("dispose", this.disposeSourceHandler)
        }
        ,
        e.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks(["audio", "video"]),
            this.currentSource_ = null),
            this.cleanupAutoTextTracks(),
            this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
            this.sourceHandler_ = null)
        }
    }
    ,
    At.registerComponent("Tech", Wi),
    Wi.registerTech("Tech", Wi),
    Wi.defaultTechOrder_ = [];
    var Gi = {}
      , $i = {}
      , Xi = {};
    function Yi(e, t, i) {
        e.setTimeout(function() {
            return function e(t, i, n, r, a, s) {
                void 0 === t && (t = {});
                void 0 === i && (i = []);
                void 0 === a && (a = []);
                void 0 === s && (s = !1);
                var o = i
                  , u = o[0]
                  , l = o.slice(1);
                if ("string" == typeof u)
                    e(t, Gi[u], n, r, a, s);
                else if (u) {
                    var c = function(e, t) {
                        var i = $i[e.id()]
                          , n = null;
                        if (null == i)
                            return n = t(e),
                            $i[e.id()] = [[t, n]],
                            n;
                        for (var r = 0; r < i.length; r++) {
                            var a = i[r]
                              , s = a[0]
                              , o = a[1];
                            s === t && (n = o)
                        }
                        null === n && (n = t(e),
                        i.push([t, n]));
                        return n
                    }(r, u);
                    if (!c.setSource)
                        return a.push(c),
                        e(t, l, n, r, a, s);
                    c.setSource(ne({}, t), function(i, o) {
                        if (i)
                            return e(t, l, n, r, a, s);
                        a.push(c),
                        e(o, t.type === o.type ? l : Gi[o.type], n, r, a, s)
                    })
                } else
                    l.length ? e(t, l, n, r, a, s) : s ? n(t, a) : e(t, Gi["*"], n, r, a, !0)
            }(t, Gi[t.type], i, e)
        }, 1)
    }
    function Ki(e, t, i, n) {
        void 0 === n && (n = null);
        var r = "call" + Ct(i)
          , a = e.reduce(en(r), n)
          , s = a === Xi
          , o = s ? null : t[i](a);
        return function(e, t, i, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var a = e[r];
                a[t] && a[t](n, i)
            }
        }(e, i, o, s),
        o
    }
    var Qi = {
        buffered: 1,
        currentTime: 1,
        duration: 1,
        seekable: 1,
        played: 1,
        paused: 1
    }
      , Ji = {
        setCurrentTime: 1
    }
      , Zi = {
        play: 1,
        pause: 1
    };
    function en(e) {
        return function(t, i) {
            return t === Xi ? Xi : i[e] ? i[e](t) : t
        }
    }
    var tn = {
        opus: "video/ogg",
        ogv: "video/ogg",
        mp4: "video/mp4",
        mov: "video/mp4",
        m4v: "video/mp4",
        mkv: "video/x-matroska",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        oga: "audio/ogg",
        m3u8: "application/x-mpegURL",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        png: "image/png",
        svg: "image/svg+xml",
        webp: "image/webp"
    }
      , nn = function(e) {
        void 0 === e && (e = "");
        var t = Ii(e);
        return tn[t.toLowerCase()] || ""
    };
    function rn(e) {
        var t = nn(e.src);
        return !e.type && t && (e.type = t),
        e
    }
    var an = function(e) {
        function t(t, i, n) {
            var r, a = Et({
                createEl: !1
            }, i);
            if (r = e.call(this, t, a, n) || this,
            i.playerOptions.sources && 0 !== i.playerOptions.sources.length)
                t.src(i.playerOptions.sources);
            else
                for (var s = 0, o = i.playerOptions.techOrder; s < o.length; s++) {
                    var u = Ct(o[s])
                      , l = Wi.getTech(u);
                    if (u || (l = At.getComponent(u)),
                    l && l.isSupported()) {
                        t.loadTech_(u);
                        break
                    }
                }
            return r
        }
        return W(t, e),
        t
    }(At);
    At.registerComponent("MediaLoader", an);
    var sn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).emitTapEvents(),
            n.enable(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function(t, i, n) {
            void 0 === t && (t = "div"),
            void 0 === i && (i = {}),
            void 0 === n && (n = {}),
            i = ne({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, i),
            "button" === t && J.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."),
            n = ne({
                role: "button"
            }, n),
            this.tabIndex_ = i.tabIndex;
            var r = e.prototype.createEl.call(this, t, i, n);
            return this.createControlTextEl(r),
            r
        }
        ,
        i.dispose = function() {
            this.controlTextEl_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.createControlTextEl = function(e) {
            return this.controlTextEl_ = fe("span", {
                className: "vjs-control-text"
            }, {
                "aria-live": "polite"
            }),
            e && e.appendChild(this.controlTextEl_),
            this.controlText(this.controlText_, e),
            this.controlTextEl_
        }
        ,
        i.controlText = function(e, t) {
            if (void 0 === t && (t = this.el()),
            void 0 === e)
                return this.controlText_ || "Need Text";
            var i = this.localize(e);
            this.controlText_ = e,
            me(this.controlTextEl_, i),
            this.nonIconControl || t.setAttribute("title", i)
        }
        ,
        i.buildCSSClass = function() {
            return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.enable = function() {
            this.enabled_ || (this.enabled_ = !0,
            this.removeClass("vjs-disabled"),
            this.el_.setAttribute("aria-disabled", "false"),
            void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_),
            this.on(["tap", "click"], this.handleClick),
            this.on("keydown", this.handleKeyDown))
        }
        ,
        i.disable = function() {
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.el_.setAttribute("aria-disabled", "true"),
            void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"),
            this.off(["tap", "click"], this.handleClick),
            this.off("keydown", this.handleKeyDown)
        }
        ,
        i.handleClick = function(e) {}
        ,
        i.handleKeyDown = function(t) {
            h.a.isEventKey(t, "Space") || h.a.isEventKey(t, "Enter") ? (t.preventDefault(),
            t.stopPropagation(),
            this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
        }
        ,
        t
    }(At);
    At.registerComponent("ClickableComponent", sn);
    var on = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).update(),
            t.on("posterchange", ct(X(X(n)), n.update)),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.dispose = function() {
            this.player().off("posterchange", this.update),
            e.prototype.dispose.call(this)
        }
        ,
        i.createEl = function() {
            return fe("div", {
                className: "vjs-poster",
                tabIndex: -1
            })
        }
        ,
        i.update = function(e) {
            var t = this.player().poster();
            this.setSrc(t),
            t ? this.show() : this.hide()
        }
        ,
        i.setSrc = function(e) {
            var t = "";
            e && (t = 'url("' + e + '")'),
            this.el_.style.backgroundImage = t
        }
        ,
        i.handleClick = function(e) {
            this.player_.controls() && (this.player_.tech(!0).focus(),
            this.player_.paused() ? li(this.player_.play()) : this.player_.pause())
        }
        ,
        t
    }(sn);
    At.registerComponent("PosterImage", on);
    var un = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    function ln(e, t) {
        var i;
        if (4 === e.length)
            i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
        else {
            if (7 !== e.length)
                throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
            i = e.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
    }
    function cn(e, t, i) {
        try {
            e.style[t] = i
        } catch (e) {
            return
        }
    }
    var dn = function(e) {
        function t(t, i, n) {
            var a;
            a = e.call(this, t, i, n) || this;
            var s = ct(X(X(a)), a.updateDisplay);
            return t.on("loadstart", ct(X(X(a)), a.toggleDisplay)),
            t.on("texttrackchange", s),
            t.on("loadedmetadata", ct(X(X(a)), a.preselectTrack)),
            t.ready(ct(X(X(a)), function() {
                if (t.tech_ && t.tech_.featuresNativeTextTracks)
                    this.hide();
                else {
                    t.on("fullscreenchange", s),
                    t.on("playerresize", s),
                    r.a.addEventListener("orientationchange", s),
                    t.on("dispose", function() {
                        return r.a.removeEventListener("orientationchange", s)
                    });
                    for (var e = this.options_.playerOptions.tracks || [], i = 0; i < e.length; i++)
                        this.player_.addRemoteTextTrack(e[i], !0);
                    this.preselectTrack()
                }
            })),
            a
        }
        W(t, e);
        var i = t.prototype;
        return i.preselectTrack = function() {
            for (var e, t, i, n = {
                captions: 1,
                subtitles: 1
            }, r = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, s = 0; s < r.length; s++) {
                var o = r[s];
                a && a.enabled && a.language && a.language === o.language && o.kind in n ? o.kind === a.kind ? i = o : i || (i = o) : a && !a.enabled ? (i = null,
                e = null,
                t = null) : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
            }
            i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
        }
        ,
        i.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }
        ,
        i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }
        ,
        i.clearDisplay = function() {
            "function" == typeof r.a.WebVTT && r.a.WebVTT.processCues(r.a, [], this.el_)
        }
        ,
        i.updateDisplay = function() {
            var e = this.player_.textTracks();
            this.clearDisplay();
            for (var t = null, i = null, n = e.length; n--; ) {
                var r = e[n];
                "showing" === r.mode && ("descriptions" === r.kind ? t = r : i = r)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"),
            this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"),
            this.updateForTrack(t))
        }
        ,
        i.updateForTrack = function(e) {
            if ("function" == typeof r.a.WebVTT && e.activeCues) {
                for (var t = [], i = 0; i < e.activeCues.length; i++)
                    t.push(e.activeCues[i]);
                if (r.a.WebVTT.processCues(r.a, t, this.el_),
                this.player_.textTrackSettings)
                    for (var n = this.player_.textTrackSettings.getValues(), a = t.length; a--; ) {
                        var s = t[a];
                        if (s) {
                            var o = s.displayState;
                            if (n.color && (o.firstChild.style.color = n.color),
                            n.textOpacity && cn(o.firstChild, "color", ln(n.color || "#fff", n.textOpacity)),
                            n.backgroundColor && (o.firstChild.style.backgroundColor = n.backgroundColor),
                            n.backgroundOpacity && cn(o.firstChild, "backgroundColor", ln(n.backgroundColor || "#000", n.backgroundOpacity)),
                            n.windowColor && (n.windowOpacity ? cn(o, "backgroundColor", ln(n.windowColor, n.windowOpacity)) : o.style.backgroundColor = n.windowColor),
                            n.edgeStyle && ("dropshadow" === n.edgeStyle ? o.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === n.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === n.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === n.edgeStyle && (o.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
                            n.fontPercent && 1 !== n.fontPercent) {
                                var u = r.a.parseFloat(o.style.fontSize);
                                o.style.fontSize = u * n.fontPercent + "px",
                                o.style.height = "auto",
                                o.style.top = "auto",
                                o.style.bottom = "2px"
                            }
                            n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? o.firstChild.style.fontVariant = "small-caps" : o.firstChild.style.fontFamily = un[n.fontFamily])
                        }
                    }
            }
        }
        ,
        t
    }(At);
    At.registerComponent("TextTrackDisplay", dn);
    var hn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return W(t, e),
        t.prototype.createEl = function() {
            var t = this.player_.isAudio()
              , i = this.localize(t ? "Audio Player" : "Video Player")
              , n = fe("span", {
                className: "vjs-control-text",
                innerHTML: this.localize("{1} is loading.", [i])
            })
              , r = e.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner",
                dir: "ltr"
            });
            return r.appendChild(n),
            r
        }
        ,
        t
    }(At);
    At.registerComponent("LoadingSpinner", hn);
    var pn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function(e, t, i) {
            void 0 === t && (t = {}),
            void 0 === i && (i = {}),
            t = ne({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, t),
            i = ne({
                type: "button"
            }, i);
            var n = At.prototype.createEl.call(this, "button", t, i);
            return this.createControlTextEl(n),
            n
        }
        ,
        i.addChild = function(e, t) {
            void 0 === t && (t = {});
            var i = this.constructor.name;
            return J.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."),
            At.prototype.addChild.call(this, e, t)
        }
        ,
        i.enable = function() {
            e.prototype.enable.call(this),
            this.el_.removeAttribute("disabled")
        }
        ,
        i.disable = function() {
            e.prototype.disable.call(this),
            this.el_.setAttribute("disabled", "disabled")
        }
        ,
        i.handleKeyDown = function(t) {
            h.a.isEventKey(t, "Space") || h.a.isEventKey(t, "Enter") ? t.stopPropagation() : e.prototype.handleKeyDown.call(this, t)
        }
        ,
        t
    }(sn);
    At.registerComponent("Button", pn);
    var fn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).mouseused_ = !1,
            n.on("mousedown", n.handleMouseDown),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-big-play-button"
        }
        ,
        i.handleClick = function(e) {
            var t = this.player_.play();
            if (this.mouseused_ && e.clientX && e.clientY)
                return li(t),
                void this.player_.tech(!0).focus();
            var i = this.player_.getChild("controlBar")
              , n = i && i.getChild("playToggle");
            if (n) {
                var r = function() {
                    return n.focus()
                };
                ui(t) ? t.then(r, function() {}) : this.setTimeout(r, 1)
            } else
                this.player_.tech(!0).focus()
        }
        ,
        i.handleKeyDown = function(t) {
            this.mouseused_ = !1,
            e.prototype.handleKeyDown.call(this, t)
        }
        ,
        i.handleMouseDown = function(e) {
            this.mouseused_ = !0
        }
        ,
        t
    }(pn);
    fn.prototype.controlText_ = "Play Video",
    At.registerComponent("BigPlayButton", fn);
    var mn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).controlText(i && i.controlText || n.localize("Close")),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.handleClick = function(e) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        }
        ,
        t
    }(pn);
    At.registerComponent("CloseButton", mn);
    var gn = function(e) {
        function t(t, i) {
            var n;
            return void 0 === i && (i = {}),
            n = e.call(this, t, i) || this,
            i.replay = void 0 === i.replay || i.replay,
            n.on(t, "play", n.handlePlay),
            n.on(t, "pause", n.handlePause),
            i.replay && n.on(t, "ended", n.handleEnded),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.handleClick = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }
        ,
        i.handleSeeked = function(e) {
            this.removeClass("vjs-ended"),
            this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
        }
        ,
        i.handlePlay = function(e) {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.controlText("Pause")
        }
        ,
        i.handlePause = function(e) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.controlText("Play")
        }
        ,
        i.handleEnded = function(e) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-ended"),
            this.controlText("Replay"),
            this.one(this.player_, "seeked", this.handleSeeked)
        }
        ,
        t
    }(pn);
    gn.prototype.controlText_ = "Play",
    At.registerComponent("PlayToggle", gn);
    var yn = function(e, t) {
        e = e < 0 ? 0 : e;
        var i = Math.floor(e % 60)
          , n = Math.floor(e / 60 % 60)
          , r = Math.floor(e / 3600)
          , a = Math.floor(t / 60 % 60)
          , s = Math.floor(t / 3600);
        return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"),
        (r = r > 0 || s > 0 ? r + ":" : "") + (n = ((r || a >= 10) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
    }
      , vn = yn;
    function _n(e, t) {
        return void 0 === t && (t = e),
        vn(e, t)
    }
    var bn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).throttledUpdateContent = dt(ct(X(X(n)), n.updateContent), 25),
            n.on(t, "timeupdate", n.throttledUpdateContent),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            var t = this.buildCSSClass()
              , i = e.prototype.createEl.call(this, "div", {
                className: t + " vjs-time-control vjs-control",
                innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + "Â </span>"
            });
            return this.contentEl_ = fe("span", {
                className: t + "-display"
            }, {
                "aria-live": "off",
                role: "presentation"
            }),
            this.updateTextNode_(),
            i.appendChild(this.contentEl_),
            i
        }
        ,
        i.dispose = function() {
            this.contentEl_ = null,
            this.textNode_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.updateTextNode_ = function() {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild; )
                    this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = s.a.createTextNode(this.formattedTime_ || this.formatTime_(0)),
                this.contentEl_.appendChild(this.textNode_)
            }
        }
        ,
        i.formatTime_ = function(e) {
            return _n(e)
        }
        ,
        i.updateFormattedTime_ = function(e) {
            var t = this.formatTime_(e);
            t !== this.formattedTime_ && (this.formattedTime_ = t,
            this.requestAnimationFrame(this.updateTextNode_))
        }
        ,
        i.updateContent = function(e) {}
        ,
        t
    }(At);
    bn.prototype.labelText_ = "Time",
    bn.prototype.controlText_ = "Time",
    At.registerComponent("TimeDisplay", bn);
    var Tn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on(t, "ended", n.handleEnded),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-current-time"
        }
        ,
        i.updateContent = function(e) {
            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(t)
        }
        ,
        i.handleEnded = function(e) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }
        ,
        t
    }(bn);
    Tn.prototype.labelText_ = "Current Time",
    Tn.prototype.controlText_ = "Current Time",
    At.registerComponent("CurrentTimeDisplay", Tn);
    var Sn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on(t, "durationchange", n.updateContent),
            n.on(t, "loadstart", n.updateContent),
            n.on(t, "loadedmetadata", n.throttledUpdateContent),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-duration"
        }
        ,
        i.updateContent = function(e) {
            var t = this.player_.duration();
            this.duration_ !== t && (this.duration_ = t,
            this.updateFormattedTime_(t))
        }
        ,
        t
    }(bn);
    Sn.prototype.labelText_ = "Duration",
    Sn.prototype.controlText_ = "Duration",
    At.registerComponent("DurationDisplay", Sn);
    var kn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return W(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            }, {
                "aria-hidden": !0
            })
        }
        ,
        t
    }(At);
    At.registerComponent("TimeDivider", kn);
    var wn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on(t, "durationchange", n.throttledUpdateContent),
            n.on(t, "ended", n.handleEnded),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-remaining-time"
        }
        ,
        i.createEl = function() {
            var t = e.prototype.createEl.call(this);
            return t.insertBefore(fe("span", {}, {
                "aria-hidden": !0
            }, "-"), this.contentEl_),
            t
        }
        ,
        i.updateContent = function(e) {
            "number" == typeof this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }
        ,
        i.handleEnded = function(e) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }
        ,
        t
    }(bn);
    wn.prototype.labelText_ = "Remaining Time",
    wn.prototype.controlText_ = "Remaining Time",
    At.registerComponent("RemainingTimeDisplay", wn);
    var Cn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).updateShowing(),
            n.on(n.player(), "durationchange", n.updateShowing),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            var t = e.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = fe("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "Â </span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }),
            t.appendChild(this.contentEl_),
            t
        }
        ,
        i.dispose = function() {
            this.contentEl_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.updateShowing = function(e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }
        ,
        t
    }(At);
    At.registerComponent("LiveDisplay", Cn);
    var En = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).updateLiveEdgeStatus(),
            n.player_.liveTracker && n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatus),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            var t = e.prototype.createEl.call(this, "button", {
                className: "vjs-seek-to-live-control vjs-control"
            });
            return this.textEl_ = fe("span", {
                className: "vjs-seek-to-live-text",
                innerHTML: this.localize("LIVE")
            }, {
                "aria-hidden": "true"
            }),
            t.appendChild(this.textEl_),
            t
        }
        ,
        i.updateLiveEdgeStatus = function(e) {
            !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0),
            this.addClass("vjs-at-live-edge"),
            this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1),
            this.removeClass("vjs-at-live-edge"),
            this.controlText("Seek to live, currently behind live"))
        }
        ,
        i.handleClick = function() {
            this.player_.liveTracker.seekToLiveEdge()
        }
        ,
        i.dispose = function() {
            this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus),
            this.textEl_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        t
    }(pn);
    En.prototype.controlText_ = "Seek to live, currently playing live",
    At.registerComponent("SeekToLive", En);
    var An = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).bar = n.getChild(n.options_.barName),
            n.vertical(!!n.options_.vertical),
            n.enable(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.enabled = function() {
            return this.enabled_
        }
        ,
        i.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown),
            this.on("touchstart", this.handleMouseDown),
            this.on("keydown", this.handleKeyDown),
            this.on("click", this.handleClick),
            this.on(this.player_, "controlsvisible", this.update),
            this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
            this.removeClass("disabled"),
            this.setAttribute("tabindex", 0),
            this.enabled_ = !0)
        }
        ,
        i.disable = function() {
            if (this.enabled()) {
                var e = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown),
                this.off("touchstart", this.handleMouseDown),
                this.off("keydown", this.handleKeyDown),
                this.off("click", this.handleClick),
                this.off(this.player_, "controlsvisible", this.update),
                this.off(e, "mousemove", this.handleMouseMove),
                this.off(e, "mouseup", this.handleMouseUp),
                this.off(e, "touchmove", this.handleMouseMove),
                this.off(e, "touchend", this.handleMouseUp),
                this.removeAttribute("tabindex"),
                this.addClass("disabled"),
                this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                this.enabled_ = !1
            }
        }
        ,
        i.createEl = function(t, i, n) {
            return void 0 === i && (i = {}),
            void 0 === n && (n = {}),
            i.className = i.className + " vjs-slider",
            i = ne({
                tabIndex: 0
            }, i),
            n = ne({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, n),
            e.prototype.createEl.call(this, t, i, n)
        }
        ,
        i.handleMouseDown = function(e) {
            var t = this.bar.el_.ownerDocument;
            "mousedown" === e.type && e.preventDefault(),
            "touchstart" !== e.type || Ht || e.preventDefault(),
            Ee(),
            this.addClass("vjs-sliding"),
            this.trigger("slideractive"),
            this.on(t, "mousemove", this.handleMouseMove),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchmove", this.handleMouseMove),
            this.on(t, "touchend", this.handleMouseUp),
            this.handleMouseMove(e)
        }
        ,
        i.handleMouseMove = function(e) {}
        ,
        i.handleMouseUp = function() {
            var e = this.bar.el_.ownerDocument;
            Ae(),
            this.removeClass("vjs-sliding"),
            this.trigger("sliderinactive"),
            this.off(e, "mousemove", this.handleMouseMove),
            this.off(e, "mouseup", this.handleMouseUp),
            this.off(e, "touchmove", this.handleMouseMove),
            this.off(e, "touchend", this.handleMouseUp),
            this.update()
        }
        ,
        i.update = function() {
            if (this.el_) {
                var e = this.getPercent()
                  , t = this.bar;
                if (t) {
                    ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
                    var i = (100 * e).toFixed(2) + "%"
                      , n = t.el().style;
                    return this.vertical() ? n.height = i : n.width = i,
                    e
                }
            }
        }
        ,
        i.calculateDistance = function(e) {
            var t = Oe(this.el_, e);
            return this.vertical() ? t.y : t.x
        }
        ,
        i.handleKeyDown = function(t) {
            h.a.isEventKey(t, "Left") || h.a.isEventKey(t, "Down") ? (t.preventDefault(),
            t.stopPropagation(),
            this.stepBack()) : h.a.isEventKey(t, "Right") || h.a.isEventKey(t, "Up") ? (t.preventDefault(),
            t.stopPropagation(),
            this.stepForward()) : e.prototype.handleKeyDown.call(this, t)
        }
        ,
        i.handleClick = function(e) {
            e.stopPropagation(),
            e.preventDefault()
        }
        ,
        i.vertical = function(e) {
            if (void 0 === e)
                return this.vertical_ || !1;
            this.vertical_ = !!e,
            this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }
        ,
        t
    }(At);
    At.registerComponent("Slider", An);
    var Pn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).partEls_ = [],
            n.on(t, "progress", n.update),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + '</span>: <span class="vjs-control-text-loaded-percentage">0%</span></span>'
            })
        }
        ,
        i.dispose = function() {
            this.partEls_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.update = function(e) {
            var t = this.player_.liveTracker
              , i = this.player_.buffered()
              , n = t && t.isLive() ? t.seekableEnd() : this.player_.duration()
              , r = this.player_.bufferedEnd()
              , a = this.partEls_
              , s = this.$(".vjs-control-text-loaded-percentage")
              , o = function(e, t, i) {
                var n = e / t || 0;
                return n = 100 * (n >= 1 ? 1 : n),
                i && (n = n.toFixed(2)),
                n + "%"
            };
            this.el_.style.width = o(r, n),
            me(s, o(r, n, !0));
            for (var u = 0; u < i.length; u++) {
                var l = i.start(u)
                  , c = i.end(u)
                  , d = a[u];
                d || (d = this.el_.appendChild(fe()),
                a[u] = d),
                d.style.left = o(l, r),
                d.style.width = o(c - l, r)
            }
            for (var h = a.length; h > i.length; h--)
                this.el_.removeChild(a[h - 1]);
            a.length = i.length
        }
        ,
        t
    }(At);
    At.registerComponent("LoadProgressBar", Pn);
    var Ln = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            }, {
                "aria-hidden": "true"
            })
        }
        ,
        i.update = function(e, t, i) {
            var n = Pe(this.el_)
              , r = Pe(this.player_.el())
              , a = e.width * t;
            if (r && n) {
                var s = e.left - r.left + a
                  , o = e.width - a + (r.right - e.right)
                  , u = n.width / 2;
                s < u ? u += u - s : o < u && (u = o),
                u < 0 ? u = 0 : u > n.width && (u = n.width),
                this.el_.style.right = "-" + u + "px",
                me(this.el_, i)
            }
        }
        ,
        i.updateTime = function(e, t, i, n) {
            var r = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_),
            this.rafId_ = this.requestAnimationFrame(function() {
                var a, s = r.player_.duration();
                if (r.player_.liveTracker && r.player_.liveTracker.isLive()) {
                    var o = r.player_.liveTracker.liveWindow()
                      , u = o - t * o;
                    a = (u < 1 ? "" : "-") + _n(u, o)
                } else
                    a = _n(i, s);
                r.update(e, t, a),
                n && n()
            })
        }
        ,
        t
    }(At);
    At.registerComponent("TimeTooltip", Ln);
    var On = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar"
            }, {
                "aria-hidden": "true"
            })
        }
        ,
        i.update = function(e, t) {
            var i = this.getChild("timeTooltip");
            if (i) {
                var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                i.updateTime(e, t, n)
            }
        }
        ,
        t
    }(At);
    On.prototype.options_ = {
        children: []
    },
    Rt || Bt || On.prototype.options_.children.push("timeTooltip"),
    At.registerComponent("PlayProgressBar", On);
    var In = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).update = dt(ct(X(X(n)), n.update), 25),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        }
        ,
        i.update = function(e, t) {
            var i = this
              , n = t * this.player_.duration();
            this.getChild("timeTooltip").updateTime(e, t, n, function() {
                i.el_.style.left = e.width * t + "px"
            })
        }
        ,
        t
    }(At);
    In.prototype.options_ = {
        children: ["timeTooltip"]
    },
    At.registerComponent("MouseTimeDisplay", In);
    var xn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).setEventHandlers_(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.setEventHandlers_ = function() {
            this.update = dt(ct(this, this.update), 30),
            this.on(this.player_, "timeupdate", this.update),
            this.on(this.player_, "ended", this.handleEnded),
            this.on(this.player_, "durationchange", this.update),
            this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
            this.updateInterval = null,
            this.on(this.player_, ["playing"], this.enableInterval_),
            this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
            "hidden"in s.a && "visibilityState"in s.a && this.on(s.a, "visibilitychange", this.toggleVisibility_)
        }
        ,
        i.toggleVisibility_ = function(e) {
            s.a.hidden ? this.disableInterval_(e) : (this.enableInterval_(),
            this.requestAnimationFrame(this.update))
        }
        ,
        i.enableInterval_ = function() {
            var e = this;
            this.clearInterval(this.updateInterval),
            this.updateInterval = this.setInterval(function() {
                e.requestAnimationFrame(e.update)
            }, 30)
        }
        ,
        i.disableInterval_ = function(e) {
            this.player_.liveTracker && this.player_.liveTracker.isLive() && "ended" !== e.type || this.clearInterval(this.updateInterval)
        }
        ,
        i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            })
        }
        ,
        i.update_ = function(e, t) {
            var i = this.player_.liveTracker
              , n = this.player_.duration();
            i && i.isLive() && (n = this.player_.liveTracker.liveCurrentTime()),
            this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)),
            this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [_n(e, n), _n(n, n)], "{1} of {2}")),
            this.bar && this.bar.update(Pe(this.el_), t)
        }
        ,
        i.update = function(t) {
            if (null !== this.el().offsetParent) {
                var i = e.prototype.update.call(this);
                return this.update_(this.getCurrentTime_(), i),
                i
            }
        }
        ,
        i.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }
        ,
        i.handleEnded = function(e) {
            this.update_(this.player_.duration(), 1)
        }
        ,
        i.getPercent = function() {
            var e, t = this.getCurrentTime_(), i = this.player_.liveTracker;
            return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(),
            i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(),
            e >= 1 ? 1 : e || 0
        }
        ,
        i.handleMouseDown = function(t) {
            Me(t) && (t.stopPropagation(),
            this.player_.scrubbing(!0),
            this.videoWasPlaying = !this.player_.paused(),
            this.player_.pause(),
            e.prototype.handleMouseDown.call(this, t))
        }
        ,
        i.handleMouseMove = function(e) {
            if (Me(e)) {
                var t, i = this.calculateDistance(e), n = this.player_.liveTracker;
                if (n && n.isLive()) {
                    var r = n.seekableStart()
                      , a = n.liveCurrentTime();
                    if ((t = r + i * n.liveWindow()) >= a && (t = a),
                    t <= r && (t = r + .1),
                    t === 1 / 0)
                        return
                } else
                    (t = i * this.player_.duration()) === this.player_.duration() && (t -= .1);
                this.player_.currentTime(t)
            }
        }
        ,
        i.enable = function() {
            e.prototype.enable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.show()
        }
        ,
        i.disable = function() {
            e.prototype.disable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.hide()
        }
        ,
        i.handleMouseUp = function(t) {
            e.prototype.handleMouseUp.call(this, t),
            t && t.stopPropagation(),
            this.player_.scrubbing(!1),
            this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }),
            this.videoWasPlaying && li(this.player_.play())
        }
        ,
        i.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }
        ,
        i.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }
        ,
        i.handleAction = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }
        ,
        i.handleKeyDown = function(t) {
            if (h.a.isEventKey(t, "Space") || h.a.isEventKey(t, "Enter"))
                t.preventDefault(),
                t.stopPropagation(),
                this.handleAction(t);
            else if (h.a.isEventKey(t, "Home"))
                t.preventDefault(),
                t.stopPropagation(),
                this.player_.currentTime(0);
            else if (h.a.isEventKey(t, "End"))
                t.preventDefault(),
                t.stopPropagation(),
                this.player_.currentTime(this.player_.duration());
            else if (/^[0-9]$/.test(h()(t))) {
                t.preventDefault(),
                t.stopPropagation();
                var i = 10 * (h.a.codes[h()(t)] - h.a.codes[0]) / 100;
                this.player_.currentTime(this.player_.duration() * i)
            } else
                h.a.isEventKey(t, "PgDn") ? (t.preventDefault(),
                t.stopPropagation(),
                this.player_.currentTime(this.player_.currentTime() - 60)) : h.a.isEventKey(t, "PgUp") ? (t.preventDefault(),
                t.stopPropagation(),
                this.player_.currentTime(this.player_.currentTime() + 60)) : e.prototype.handleKeyDown.call(this, t)
        }
        ,
        t
    }(An);
    xn.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    },
    Rt || Bt || xn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
    At.registerComponent("SeekBar", xn);
    var Dn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).handleMouseMove = dt(ct(X(X(n)), n.handleMouseMove), 25),
            n.throttledHandleMouseSeek = dt(ct(X(X(n)), n.handleMouseSeek), 25),
            n.enable(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }
        ,
        i.handleMouseMove = function(e) {
            var t = this.getChild("seekBar");
            if (t) {
                var i = t.getChild("mouseTimeDisplay")
                  , n = t.el()
                  , r = Pe(n)
                  , a = Oe(n, e).x;
                a > 1 ? a = 1 : a < 0 && (a = 0),
                i && i.update(r, a)
            }
        }
        ,
        i.handleMouseSeek = function(e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseMove(e)
        }
        ,
        i.enabled = function() {
            return this.enabled_
        }
        ,
        i.disable = function() {
            this.children().forEach(function(e) {
                return e.disable && e.disable()
            }),
            this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown),
            this.off(this.el_, "mousemove", this.handleMouseMove),
            this.handleMouseUp(),
            this.addClass("disabled"),
            this.enabled_ = !1)
        }
        ,
        i.enable = function() {
            this.children().forEach(function(e) {
                return e.enable && e.enable()
            }),
            this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown),
            this.on(this.el_, "mousemove", this.handleMouseMove),
            this.removeClass("disabled"),
            this.enabled_ = !0)
        }
        ,
        i.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument
              , i = this.getChild("seekBar");
            i && i.handleMouseDown(e),
            this.on(t, "mousemove", this.throttledHandleMouseSeek),
            this.on(t, "touchmove", this.throttledHandleMouseSeek),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchend", this.handleMouseUp)
        }
        ,
        i.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument
              , i = this.getChild("seekBar");
            i && i.handleMouseUp(e),
            this.off(t, "mousemove", this.throttledHandleMouseSeek),
            this.off(t, "touchmove", this.throttledHandleMouseSeek),
            this.off(t, "mouseup", this.handleMouseUp),
            this.off(t, "touchend", this.handleMouseUp)
        }
        ,
        t
    }(At);
    Dn.prototype.options_ = {
        children: ["seekBar"]
    },
    At.registerComponent("ProgressControl", Dn);
    var Un = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on(t, "fullscreenchange", n.handleFullscreenChange),
            !1 === s.a[ei.fullscreenEnabled] && n.disable(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.handleFullscreenChange = function(e) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }
        ,
        i.handleClick = function(e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }
        ,
        t
    }(pn);
    Un.prototype.controlText_ = "Fullscreen",
    At.registerComponent("FullscreenToggle", Un);
    var Rn = function(e, t) {
        t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"),
        e.on(t, "loadstart", function() {
            t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
        })
    }
      , Mn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return W(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }
        ,
        t
    }(At);
    At.registerComponent("VolumeLevel", Mn);
    var Bn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on("slideractive", n.updateLastVolume_),
            n.on(t, "volumechange", n.updateARIAAttributes),
            t.ready(function() {
                return n.updateARIAAttributes()
            }),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }
        ,
        i.handleMouseDown = function(t) {
            Me(t) && e.prototype.handleMouseDown.call(this, t)
        }
        ,
        i.handleMouseMove = function(e) {
            Me(e) && (this.checkMuted(),
            this.player_.volume(this.calculateDistance(e)))
        }
        ,
        i.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1)
        }
        ,
        i.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }
        ,
        i.stepForward = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() + .1)
        }
        ,
        i.stepBack = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() - .1)
        }
        ,
        i.updateARIAAttributes = function(e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", t),
            this.el_.setAttribute("aria-valuetext", t + "%")
        }
        ,
        i.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume())
        }
        ,
        i.updateLastVolume_ = function() {
            var e = this
              , t = this.player_.volume();
            this.one("sliderinactive", function() {
                0 === e.player_.volume() && e.player_.lastVolume_(t)
            })
        }
        ,
        t
    }(An);
    Bn.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    },
    Bn.prototype.playerEvent = "volumechange",
    At.registerComponent("VolumeBar", Bn);
    var Nn = function(e) {
        function t(t, i) {
            var n;
            return void 0 === i && (i = {}),
            i.vertical = i.vertical || !1,
            (void 0 === i.volumeBar || ae(i.volumeBar)) && (i.volumeBar = i.volumeBar || {},
            i.volumeBar.vertical = i.vertical),
            n = e.call(this, t, i) || this,
            Rn(X(X(n)), t),
            n.throttledHandleMouseMove = dt(ct(X(X(n)), n.handleMouseMove), 25),
            n.on("mousedown", n.handleMouseDown),
            n.on("touchstart", n.handleMouseDown),
            n.on(n.volumeBar, ["focus", "slideractive"], function() {
                n.volumeBar.addClass("vjs-slider-active"),
                n.addClass("vjs-slider-active"),
                n.trigger("slideractive")
            }),
            n.on(n.volumeBar, ["blur", "sliderinactive"], function() {
                n.volumeBar.removeClass("vjs-slider-active"),
                n.removeClass("vjs-slider-active"),
                n.trigger("sliderinactive")
            }),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            var t = "vjs-volume-horizontal";
            return this.options_.vertical && (t = "vjs-volume-vertical"),
            e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + t
            })
        }
        ,
        i.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument;
            this.on(t, "mousemove", this.throttledHandleMouseMove),
            this.on(t, "touchmove", this.throttledHandleMouseMove),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchend", this.handleMouseUp)
        }
        ,
        i.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument;
            this.off(t, "mousemove", this.throttledHandleMouseMove),
            this.off(t, "touchmove", this.throttledHandleMouseMove),
            this.off(t, "mouseup", this.handleMouseUp),
            this.off(t, "touchend", this.handleMouseUp)
        }
        ,
        i.handleMouseMove = function(e) {
            this.volumeBar.handleMouseMove(e)
        }
        ,
        t
    }(At);
    Nn.prototype.options_ = {
        children: ["volumeBar"]
    },
    At.registerComponent("VolumeControl", Nn);
    var jn = function(e, t) {
        t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"),
        e.on(t, "loadstart", function() {
            t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
        })
    }
      , Fn = function(e) {
        function t(t, i) {
            var n;
            return n = e.call(this, t, i) || this,
            jn(X(X(n)), t),
            n.on(t, ["loadstart", "volumechange"], n.update),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.handleClick = function(e) {
            var t = this.player_.volume()
              , i = this.player_.lastVolume_();
            if (0 === t) {
                var n = i < .1 ? .1 : i;
                this.player_.volume(n),
                this.player_.muted(!1)
            } else
                this.player_.muted(!this.player_.muted())
        }
        ,
        i.update = function(e) {
            this.updateIcon_(),
            this.updateControlText_()
        }
        ,
        i.updateIcon_ = function() {
            var e = this.player_.volume()
              , t = 3;
            Rt && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted),
            0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
            for (var i = 0; i < 4; i++)
                _e(this.el_, "vjs-vol-" + i);
            ve(this.el_, "vjs-vol-" + t)
        }
        ,
        i.updateControlText_ = function() {
            var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }
        ,
        t
    }(pn);
    Fn.prototype.controlText_ = "Mute",
    At.registerComponent("MuteToggle", Fn);
    var Vn = function(e) {
        function t(t, i) {
            var n;
            return void 0 === i && (i = {}),
            void 0 !== i.inline ? i.inline = i.inline : i.inline = !0,
            (void 0 === i.volumeControl || ae(i.volumeControl)) && (i.volumeControl = i.volumeControl || {},
            i.volumeControl.vertical = !i.inline),
            (n = e.call(this, t, i) || this).on(t, ["loadstart"], n.volumePanelState_),
            n.on(n.volumeControl, ["slideractive"], n.sliderActive_),
            n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.sliderActive_ = function() {
            this.addClass("vjs-slider-active")
        }
        ,
        i.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active")
        }
        ,
        i.volumePanelState_ = function() {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"),
            this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }
        ,
        i.createEl = function() {
            var t = "vjs-volume-panel-horizontal";
            return this.options_.inline || (t = "vjs-volume-panel-vertical"),
            e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + t
            })
        }
        ,
        t
    }(At);
    Vn.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    },
    At.registerComponent("VolumePanel", Vn);
    var Hn = function(e) {
        function t(t, i) {
            var n;
            return n = e.call(this, t, i) || this,
            i && (n.menuButton_ = i.menuButton),
            n.focusedChild_ = -1,
            n.on("keydown", n.handleKeyDown),
            n.boundHandleBlur_ = ct(X(X(n)), n.handleBlur),
            n.boundHandleTapClick_ = ct(X(X(n)), n.handleTapClick),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.addEventListenerForItem = function(e) {
            e instanceof At && (this.on(e, "blur", this.boundHandleBlur_),
            this.on(e, ["tap", "click"], this.boundHandleTapClick_))
        }
        ,
        i.removeEventListenerForItem = function(e) {
            e instanceof At && (this.off(e, "blur", this.boundHandleBlur_),
            this.off(e, ["tap", "click"], this.boundHandleTapClick_))
        }
        ,
        i.removeChild = function(t) {
            "string" == typeof t && (t = this.getChild(t)),
            this.removeEventListenerForItem(t),
            e.prototype.removeChild.call(this, t)
        }
        ,
        i.addItem = function(e) {
            var t = this.addChild(e);
            t && this.addEventListenerForItem(t)
        }
        ,
        i.createEl = function() {
            var t = this.options_.contentElType || "ul";
            this.contentEl_ = fe(t, {
                className: "vjs-menu-content"
            }),
            this.contentEl_.setAttribute("role", "menu");
            var i = e.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return i.appendChild(this.contentEl_),
            Je(i, "click", function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation()
            }),
            i
        }
        ,
        i.dispose = function() {
            this.contentEl_ = null,
            this.boundHandleBlur_ = null,
            this.boundHandleTapClick_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.handleBlur = function(e) {
            var t = e.relatedTarget || s.a.activeElement;
            if (!this.children().some(function(e) {
                return e.el() === t
            })) {
                var i = this.menuButton_;
                i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
            }
        }
        ,
        i.handleTapClick = function(e) {
            if (this.menuButton_) {
                this.menuButton_.unpressButton();
                var t = this.children();
                if (!Array.isArray(t))
                    return;
                var i = t.filter(function(t) {
                    return t.el() === e.target
                })[0];
                if (!i)
                    return;
                "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
            }
        }
        ,
        i.handleKeyDown = function(e) {
            h.a.isEventKey(e, "Left") || h.a.isEventKey(e, "Down") ? (e.preventDefault(),
            e.stopPropagation(),
            this.stepForward()) : (h.a.isEventKey(e, "Right") || h.a.isEventKey(e, "Up")) && (e.preventDefault(),
            e.stopPropagation(),
            this.stepBack())
        }
        ,
        i.stepForward = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1),
            this.focus(e)
        }
        ,
        i.stepBack = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1),
            this.focus(e)
        }
        ,
        i.focus = function(e) {
            void 0 === e && (e = 0);
            var t = this.children().slice();
            t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(),
            t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1),
            this.focusedChild_ = e,
            t[e].el_.focus())
        }
        ,
        t
    }(At);
    At.registerComponent("Menu", Hn);
    var qn = function(e) {
        function t(t, i) {
            var n;
            void 0 === i && (i = {}),
            (n = e.call(this, t, i) || this).menuButton_ = new pn(t,i),
            n.menuButton_.controlText(n.controlText_),
            n.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var r = pn.prototype.buildCSSClass();
            return n.menuButton_.el_.className = n.buildCSSClass() + " " + r,
            n.menuButton_.removeClass("vjs-control"),
            n.addChild(n.menuButton_),
            n.update(),
            n.enabled_ = !0,
            n.on(n.menuButton_, "tap", n.handleClick),
            n.on(n.menuButton_, "click", n.handleClick),
            n.on(n.menuButton_, "keydown", n.handleKeyDown),
            n.on(n.menuButton_, "mouseenter", function() {
                n.menu.show()
            }),
            n.on("keydown", n.handleSubmenuKeyDown),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.update = function() {
            var e = this.createMenu();
            this.menu && (this.menu.dispose(),
            this.removeChild(this.menu)),
            this.menu = e,
            this.addChild(e),
            this.buttonPressed_ = !1,
            this.menuButton_.el_.setAttribute("aria-expanded", "false"),
            this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }
        ,
        i.createMenu = function() {
            var e = new Hn(this.player_,{
                menuButton: this
            });
            if (this.hideThreshold_ = 0,
            this.options_.title) {
                var t = fe("li", {
                    className: "vjs-menu-title",
                    innerHTML: Ct(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1;
                var i = new At(this.player_,{
                    el: t
                });
                e.addItem(i)
            }
            if (this.items = this.createItems(),
            this.items)
                for (var n = 0; n < this.items.length; n++)
                    e.addItem(this.items[n]);
            return e
        }
        ,
        i.createItems = function() {}
        ,
        i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {})
        }
        ,
        i.buildWrapperCSSClass = function() {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup",
            "vjs-menu-button " + t + " " + pn.prototype.buildCSSClass() + " " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildCSSClass = function() {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup",
            "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.controlText = function(e, t) {
            return void 0 === t && (t = this.menuButton_.el()),
            this.menuButton_.controlText(e, t)
        }
        ,
        i.handleClick = function(e) {
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }
        ,
        i.focus = function() {
            this.menuButton_.focus()
        }
        ,
        i.blur = function() {
            this.menuButton_.blur()
        }
        ,
        i.handleKeyDown = function(e) {
            h.a.isEventKey(e, "Esc") || h.a.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(),
            h.a.isEventKey(e, "Tab") || (e.preventDefault(),
            this.menuButton_.focus())) : (h.a.isEventKey(e, "Up") || h.a.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(),
            this.pressButton()))
        }
        ,
        i.handleSubmenuKeyPress = function(e) {
            this.handleSubmenuKeyDown(e)
        }
        ,
        i.handleSubmenuKeyDown = function(e) {
            (h.a.isEventKey(e, "Esc") || h.a.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(),
            h.a.isEventKey(e, "Tab") || (e.preventDefault(),
            this.menuButton_.focus()))
        }
        ,
        i.pressButton = function() {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0,
                this.menu.show(),
                this.menu.lockShowing(),
                this.menuButton_.el_.setAttribute("aria-expanded", "true"),
                Rt && he())
                    return;
                this.menu.focus()
            }
        }
        ,
        i.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1,
            this.menu.unlockShowing(),
            this.menu.hide(),
            this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }
        ,
        i.disable = function() {
            this.unpressButton(),
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.menuButton_.disable()
        }
        ,
        i.enable = function() {
            this.enabled_ = !0,
            this.removeClass("vjs-disabled"),
            this.menuButton_.enable()
        }
        ,
        t
    }(At);
    At.registerComponent("MenuButton", qn);
    var zn = function(e) {
        function t(t, i) {
            var n, r = i.tracks;
            if ((n = e.call(this, t, i) || this).items.length <= 1 && n.hide(),
            !r)
                return X(n);
            var a = ct(X(X(n)), n.update);
            return r.addEventListener("removetrack", a),
            r.addEventListener("addtrack", a),
            n.player_.on("ready", a),
            n.player_.on("dispose", function() {
                r.removeEventListener("removetrack", a),
                r.removeEventListener("addtrack", a)
            }),
            n
        }
        return W(t, e),
        t
    }(qn);
    At.registerComponent("TrackButton", zn);
    var Wn = ["Tab", "Esc", "Up", "Down", "Right", "Left"]
      , Gn = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).selectable = i.selectable,
            n.isSelected_ = i.selected || !1,
            n.multiSelectable = i.multiSelectable,
            n.selected(n.isSelected_),
            n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") : n.el_.setAttribute("role", "menuitemradio") : n.el_.setAttribute("role", "menuitem"),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function(t, i, n) {
            return this.nonIconControl = !0,
            e.prototype.createEl.call(this, "li", ne({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, i), n)
        }
        ,
        i.handleKeyDown = function(t) {
            Wn.some(function(e) {
                return h.a.isEventKey(t, e)
            }) || e.prototype.handleKeyDown.call(this, t)
        }
        ,
        i.handleClick = function(e) {
            this.selected(!0)
        }
        ,
        i.selected = function(e) {
            this.selectable && (e ? (this.addClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "true"),
            this.controlText(", selected"),
            this.isSelected_ = !0) : (this.removeClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "false"),
            this.controlText(""),
            this.isSelected_ = !1))
        }
        ,
        t
    }(sn);
    At.registerComponent("MenuItem", Gn);
    var $n = function(e) {
        function t(t, i) {
            var n, a = i.track, o = t.textTracks();
            i.label = a.label || a.language || "Unknown",
            i.selected = "showing" === a.mode,
            (n = e.call(this, t, i) || this).track = a,
            n.kinds = (i.kinds || [i.kind || n.track.kind]).filter(Boolean);
            var u, l = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                n.handleTracksChange.apply(X(X(n)), t)
            }, c = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                n.handleSelectedLanguageChange.apply(X(X(n)), t)
            };
            (t.on(["loadstart", "texttrackchange"], l),
            o.addEventListener("change", l),
            o.addEventListener("selectedlanguagechange", c),
            n.on("dispose", function() {
                t.off(["loadstart", "texttrackchange"], l),
                o.removeEventListener("change", l),
                o.removeEventListener("selectedlanguagechange", c)
            }),
            void 0 === o.onchange) && n.on(["tap", "click"], function() {
                if ("object" != typeof r.a.Event)
                    try {
                        u = new r.a.Event("change")
                    } catch (e) {}
                u || (u = s.a.createEvent("Event")).initEvent("change", !0, !0),
                o.dispatchEvent(u)
            });
            return n.handleTracksChange(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.handleClick = function(t) {
            var i = this.track
              , n = this.player_.textTracks();
            if (e.prototype.handleClick.call(this, t),
            n)
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    -1 !== this.kinds.indexOf(a.kind) && (a === i ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled"))
                }
        }
        ,
        i.handleTracksChange = function(e) {
            var t = "showing" === this.track.mode;
            t !== this.isSelected_ && this.selected(t)
        }
        ,
        i.handleSelectedLanguageChange = function(e) {
            if ("showing" === this.track.mode) {
                var t = this.player_.cache_.selectedLanguage;
                if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind)
                    return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }
        ,
        i.dispose = function() {
            this.track = null,
            e.prototype.dispose.call(this)
        }
        ,
        t
    }(Gn);
    At.registerComponent("TextTrackMenuItem", $n);
    var Xn = function(e) {
        function t(t, i) {
            return i.track = {
                player: t,
                kind: i.kind,
                kinds: i.kinds,
                default: !1,
                mode: "disabled"
            },
            i.kinds || (i.kinds = [i.kind]),
            i.label ? i.track.label = i.label : i.track.label = i.kinds.join(" and ") + " off",
            i.selectable = !0,
            i.multiSelectable = !1,
            e.call(this, t, i) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        }
        ,
        i.handleSelectedLanguageChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        }
        ,
        t
    }($n);
    At.registerComponent("OffTextTrackMenuItem", Xn);
    var Yn = function(e) {
        function t(t, i) {
            return void 0 === i && (i = {}),
            i.tracks = t.textTracks(),
            e.call(this, t, i) || this
        }
        return W(t, e),
        t.prototype.createItems = function(e, t) {
            var i;
            void 0 === e && (e = []),
            void 0 === t && (t = $n),
            this.label_ && (i = this.label_ + " off"),
            e.push(new Xn(this.player_,{
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })),
            this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                if (this.kinds_.indexOf(a.kind) > -1) {
                    var s = new t(this.player_,{
                        track: a,
                        kinds: this.kinds_,
                        kind: this.kind_,
                        selectable: !0,
                        multiSelectable: !1
                    });
                    s.addClass("vjs-" + a.kind + "-menu-item"),
                    e.push(s)
                }
            }
            return e
        }
        ,
        t
    }(zn);
    At.registerComponent("TextTrackButton", Yn);
    var Kn = function(e) {
        function t(t, i) {
            var n, r = i.track, a = i.cue, s = t.currentTime();
            return i.selectable = !0,
            i.multiSelectable = !1,
            i.label = a.text,
            i.selected = a.startTime <= s && s < a.endTime,
            (n = e.call(this, t, i) || this).track = r,
            n.cue = a,
            r.addEventListener("cuechange", ct(X(X(n)), n.update)),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.handleClick = function(t) {
            e.prototype.handleClick.call(this),
            this.player_.currentTime(this.cue.startTime),
            this.update(this.cue.startTime)
        }
        ,
        i.update = function(e) {
            var t = this.cue
              , i = this.player_.currentTime();
            this.selected(t.startTime <= i && i < t.endTime)
        }
        ,
        t
    }(Gn);
    At.registerComponent("ChaptersTrackMenuItem", Kn);
    var Qn = function(e) {
        function t(t, i, n) {
            return e.call(this, t, i, n) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        i.update = function(t) {
            this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()),
            e.prototype.update.call(this)
        }
        ,
        i.setTrack = function(e) {
            if (this.track_ !== e) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
                this.track_) {
                    var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    t && t.removeEventListener("load", this.updateHandler_),
                    this.track_ = null
                }
                if (this.track_ = e,
                this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }
        ,
        i.findChaptersTrack = function() {
            for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
                var i = e[t];
                if (i.kind === this.kind_)
                    return i
            }
        }
        ,
        i.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Ct(this.kind_))
        }
        ,
        i.createMenu = function() {
            return this.options_.title = this.getMenuCaption(),
            e.prototype.createMenu.call(this)
        }
        ,
        i.createItems = function() {
            var e = [];
            if (!this.track_)
                return e;
            var t = this.track_.cues;
            if (!t)
                return e;
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i]
                  , a = new Kn(this.player_,{
                    track: this.track_,
                    cue: r
                });
                e.push(a)
            }
            return e
        }
        ,
        t
    }(Yn);
    Qn.prototype.kind_ = "chapters",
    Qn.prototype.controlText_ = "Chapters",
    At.registerComponent("ChaptersButton", Qn);
    var Jn = function(e) {
        function t(t, i, n) {
            var r;
            r = e.call(this, t, i, n) || this;
            var a = t.textTracks()
              , s = ct(X(X(r)), r.handleTracksChange);
            return a.addEventListener("change", s),
            r.on("dispose", function() {
                a.removeEventListener("change", s)
            }),
            r
        }
        W(t, e);
        var i = t.prototype;
        return i.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if (a.kind !== this.kind_ && "showing" === a.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }
        ,
        i.buildCSSClass = function() {
            return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        t
    }(Yn);
    Jn.prototype.kind_ = "descriptions",
    Jn.prototype.controlText_ = "Descriptions",
    At.registerComponent("DescriptionsButton", Jn);
    var Zn = function(e) {
        function t(t, i, n) {
            return e.call(this, t, i, n) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        t
    }(Yn);
    Zn.prototype.kind_ = "subtitles",
    Zn.prototype.controlText_ = "Subtitles",
    At.registerComponent("SubtitlesButton", Zn);
    var er = function(e) {
        function t(t, i) {
            var n;
            return i.track = {
                player: t,
                kind: i.kind,
                label: i.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            },
            i.selectable = !1,
            i.name = "CaptionSettingsMenuItem",
            (n = e.call(this, t, i) || this).addClass("vjs-texttrack-settings"),
            n.controlText(", opens " + i.kind + " settings dialog"),
            n
        }
        return W(t, e),
        t.prototype.handleClick = function(e) {
            this.player().getChild("textTrackSettings").open()
        }
        ,
        t
    }($n);
    At.registerComponent("CaptionSettingsMenuItem", er);
    var tr = function(e) {
        function t(t, i, n) {
            return e.call(this, t, i, n) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        i.createItems = function() {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new er(this.player_,{
                kind: this.kind_
            })),
            this.hideThreshold_ += 1),
            e.prototype.createItems.call(this, t)
        }
        ,
        t
    }(Yn);
    tr.prototype.kind_ = "captions",
    tr.prototype.controlText_ = "Captions",
    At.registerComponent("CaptionsButton", tr);
    var ir = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return W(t, e),
        t.prototype.createEl = function(t, i, n) {
            var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
            r += "</span>",
            e.prototype.createEl.call(this, t, ne({
                innerHTML: r
            }, i), n)
        }
        ,
        t
    }($n);
    At.registerComponent("SubsCapsMenuItem", ir);
    var nr = function(e) {
        function t(t, i) {
            var n;
            return void 0 === i && (i = {}),
            (n = e.call(this, t, i) || this).label_ = "subtitles",
            ["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"),
            n.menuButton_.controlText(Ct(n.label_)),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        i.createItems = function() {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new er(this.player_,{
                kind: this.label_
            })),
            this.hideThreshold_ += 1),
            t = e.prototype.createItems.call(this, t, ir)
        }
        ,
        t
    }(Yn);
    nr.prototype.kinds_ = ["captions", "subtitles"],
    nr.prototype.controlText_ = "Subtitles",
    At.registerComponent("SubsCapsButton", nr);
    var rr = function(e) {
        function t(t, i) {
            var n, r = i.track, a = t.audioTracks();
            i.label = r.label || r.language || "Unknown",
            i.selected = r.enabled,
            (n = e.call(this, t, i) || this).track = r,
            n.addClass("vjs-" + r.kind + "-menu-item");
            var s = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                n.handleTracksChange.apply(X(X(n)), t)
            };
            return a.addEventListener("change", s),
            n.on("dispose", function() {
                a.removeEventListener("change", s)
            }),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function(t, i, n) {
            var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "),
            r += "</span>",
            e.prototype.createEl.call(this, t, ne({
                innerHTML: r
            }, i), n)
        }
        ,
        i.handleClick = function(t) {
            var i = this.player_.audioTracks();
            e.prototype.handleClick.call(this, t);
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r.enabled = r === this.track
            }
        }
        ,
        i.handleTracksChange = function(e) {
            this.selected(this.track.enabled)
        }
        ,
        t
    }(Gn);
    At.registerComponent("AudioTrackMenuItem", rr);
    var ar = function(e) {
        function t(t, i) {
            return void 0 === i && (i = {}),
            i.tracks = t.audioTracks(),
            e.call(this, t, i) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        i.createItems = function(e) {
            void 0 === e && (e = []),
            this.hideThreshold_ = 1;
            for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(new rr(this.player_,{
                    track: n,
                    selectable: !0,
                    multiSelectable: !1
                }))
            }
            return e
        }
        ,
        t
    }(zn);
    ar.prototype.controlText_ = "Audio Track",
    At.registerComponent("AudioTrackButton", ar);
    var sr = function(e) {
        function t(t, i) {
            var n, r = i.rate, a = parseFloat(r, 10);
            return i.label = r,
            i.selected = 1 === a,
            i.selectable = !0,
            i.multiSelectable = !1,
            (n = e.call(this, t, i) || this).label = r,
            n.rate = a,
            n.on(t, "ratechange", n.update),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.handleClick = function(t) {
            e.prototype.handleClick.call(this),
            this.player().playbackRate(this.rate)
        }
        ,
        i.update = function(e) {
            this.selected(this.player().playbackRate() === this.rate)
        }
        ,
        t
    }(Gn);
    sr.prototype.contentElType = "button",
    At.registerComponent("PlaybackRateMenuItem", sr);
    var or = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).updateVisibility(),
            n.updateLabel(),
            n.on(t, "loadstart", n.updateVisibility),
            n.on(t, "ratechange", n.updateLabel),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            var t = e.prototype.createEl.call(this);
            return this.labelEl_ = fe("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }),
            t.appendChild(this.labelEl_),
            t
        }
        ,
        i.dispose = function() {
            this.labelEl_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.buildCSSClass = function() {
            return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this)
        }
        ,
        i.createMenu = function() {
            var e = new Hn(this.player())
              , t = this.playbackRates();
            if (t)
                for (var i = t.length - 1; i >= 0; i--)
                    e.addChild(new sr(this.player(),{
                        rate: t[i] + "x"
                    }));
            return e
        }
        ,
        i.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }
        ,
        i.handleClick = function(e) {
            for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                if (i[r] > t) {
                    n = i[r];
                    break
                }
            this.player().playbackRate(n)
        }
        ,
        i.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }
        ,
        i.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
        }
        ,
        i.updateVisibility = function(e) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }
        ,
        i.updateLabel = function(e) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }
        ,
        t
    }(qn);
    or.prototype.controlText_ = "Playback Rate",
    At.registerComponent("PlaybackRateMenuButton", or);
    var ur = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        }
        ,
        t
    }(At);
    At.registerComponent("Spacer", ur);
    var lr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.createEl = function() {
            var t = e.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return t.innerHTML = "Â ",
            t
        }
        ,
        t
    }(ur);
    At.registerComponent("CustomControlSpacer", lr);
    var cr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return W(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            })
        }
        ,
        t
    }(At);
    cr.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    },
    At.registerComponent("ControlBar", cr);
    var dr = function(e) {
        function t(t, i) {
            var n;
            return (n = e.call(this, t, i) || this).on(t, "error", n.open),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
        }
        ,
        i.content = function() {
            var e = this.player().error();
            return e ? this.localize(e.message) : ""
        }
        ,
        t
    }(fi);
    dr.prototype.options_ = Et(fi.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }),
    At.registerComponent("ErrorDisplay", dr);
    var hr = ["#000", "Black"]
      , pr = ["#00F", "Blue"]
      , fr = ["#0FF", "Cyan"]
      , mr = ["#0F0", "Green"]
      , gr = ["#F0F", "Magenta"]
      , yr = ["#F00", "Red"]
      , vr = ["#FFF", "White"]
      , _r = ["#FF0", "Yellow"]
      , br = ["1", "Opaque"]
      , Tr = ["0.5", "Semi-Transparent"]
      , Sr = ["0", "Transparent"]
      , kr = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [hr, vr, yr, mr, pr, _r, gr, fr]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Transparency",
            options: [br, Tr, Sr]
        },
        color: {
            selector: ".vjs-fg-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [vr, hr, yr, mr, pr, _r, gr, fr]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
            default: 2,
            parser: function(e) {
                return "1.00" === e ? null : Number(e)
            }
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Transparency",
            options: [br, Tr]
        },
        windowColor: {
            selector: ".vjs-window-color > select",
            id: "captions-window-color-%s",
            label: "Color"
        },
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Transparency",
            options: [Sr, Tr, br]
        }
    };
    function wr(e, t) {
        if (t && (e = t(e)),
        e && "none" !== e)
            return e
    }
    kr.windowColor.options = kr.backgroundColor.options;
    var Cr = function(e) {
        function t(t, i) {
            var n;
            return i.temporary = !1,
            (n = e.call(this, t, i) || this).updateDisplay = ct(X(X(n)), n.updateDisplay),
            n.fill(),
            n.hasBeenOpened_ = n.hasBeenFilled_ = !0,
            n.endDialog = fe("p", {
                className: "vjs-control-text",
                textContent: n.localize("End of dialog window.")
            }),
            n.el().appendChild(n.endDialog),
            n.setDefaults(),
            void 0 === i.persistTextTrackSettings && (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings),
            n.on(n.$(".vjs-done-button"), "click", function() {
                n.saveSettings(),
                n.close()
            }),
            n.on(n.$(".vjs-default-button"), "click", function() {
                n.setDefaults(),
                n.updateDisplay()
            }),
            ie(kr, function(e) {
                n.on(n.$(e.selector), "change", n.updateDisplay)
            }),
            n.options_.persistTextTrackSettings && n.restoreSettings(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.dispose = function() {
            this.endDialog = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.createElSelect_ = function(e, t, i) {
            var n = this;
            void 0 === t && (t = ""),
            void 0 === i && (i = "label");
            var r = kr[e]
              , a = r.id.replace("%s", this.id_)
              , s = [t, a].join(" ").trim();
            return ["<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + s + '">'].concat(r.options.map(function(e) {
                var t = a + "-" + e[1].replace(/\W+/g, "");
                return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', n.localize(e[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }
        ,
        i.createElFgColor_ = function() {
            var e = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
        }
        ,
        i.createElBgColor_ = function() {
            var e = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
        }
        ,
        i.createElWinColor_ = function() {
            var e = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
        }
        ,
        i.createElColors_ = function() {
            return fe("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }
        ,
        i.createElFont_ = function() {
            return fe("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }
        ,
        i.createElControls_ = function() {
            var e = this.localize("restore all settings to the default values");
            return fe("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }
        ,
        i.content = function() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }
        ,
        i.label = function() {
            return this.localize("Caption Settings Dialog")
        }
        ,
        i.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }
        ,
        i.buildCSSClass = function() {
            return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }
        ,
        i.getValues = function() {
            var e, t, i, n = this;
            return t = function(e, t, i) {
                var r, a, s = (r = n.$(t.selector),
                a = t.parser,
                wr(r.options[r.options.selectedIndex].value, a));
                return void 0 !== s && (e[i] = s),
                e
            }
            ,
            void 0 === (i = {}) && (i = 0),
            te(e = kr).reduce(function(i, n) {
                return t(i, e[n], n)
            }, i)
        }
        ,
        i.setValues = function(e) {
            var t = this;
            ie(kr, function(i, n) {
                !function(e, t, i) {
                    if (t)
                        for (var n = 0; n < e.options.length; n++)
                            if (wr(e.options[n].value, i) === t) {
                                e.selectedIndex = n;
                                break
                            }
                }(t.$(i.selector), e[n], i.parser)
            })
        }
        ,
        i.setDefaults = function() {
            var e = this;
            ie(kr, function(t) {
                var i = t.hasOwnProperty("default") ? t.default : 0;
                e.$(t.selector).selectedIndex = i
            })
        }
        ,
        i.restoreSettings = function() {
            var e;
            try {
                e = JSON.parse(r.a.localStorage.getItem("vjs-text-track-settings"))
            } catch (e) {
                J.warn(e)
            }
            e && this.setValues(e)
        }
        ,
        i.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var e = this.getValues();
                try {
                    Object.keys(e).length ? r.a.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e)) : r.a.localStorage.removeItem("vjs-text-track-settings")
                } catch (e) {
                    J.warn(e)
                }
            }
        }
        ,
        i.updateDisplay = function() {
            var e = this.player_.getChild("textTrackDisplay");
            e && e.updateDisplay()
        }
        ,
        i.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null;
            var e = this.player_.controlBar
              , t = e && e.subsCapsButton
              , i = e && e.captionsButton;
            t ? t.focus() : i && i.focus()
        }
        ,
        t
    }(fi);
    At.registerComponent("TextTrackSettings", Cr);
    var Er = function(e) {
        function t(t, i) {
            var n, a = i.ResizeObserver || r.a.ResizeObserver;
            null === i.ResizeObserver && (a = !1);
            var s = Et({
                createEl: !a,
                reportTouchActivity: !1
            }, i);
            return (n = e.call(this, t, s) || this).ResizeObserver = i.ResizeObserver || r.a.ResizeObserver,
            n.loadListener_ = null,
            n.resizeObserver_ = null,
            n.debouncedHandler_ = ht(function() {
                n.resizeHandler()
            }, 100, !1, X(X(n))),
            a ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_),
            n.resizeObserver_.observe(t.el())) : (n.loadListener_ = function() {
                if (n.el_ && n.el_.contentWindow) {
                    var e = n.debouncedHandler_
                      , t = n.unloadListener_ = function() {
                        Ze(this, "resize", e),
                        Ze(this, "unload", t),
                        t = null
                    }
                    ;
                    Je(n.el_.contentWindow, "unload", t),
                    Je(n.el_.contentWindow, "resize", e)
                }
            }
            ,
            n.one("load", n.loadListener_)),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.createEl = function() {
            return e.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager",
                tabIndex: -1
            }, {
                "aria-hidden": "true"
            })
        }
        ,
        i.resizeHandler = function() {
            this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
        }
        ,
        i.dispose = function() {
            this.debouncedHandler_ && this.debouncedHandler_.cancel(),
            this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()),
            this.resizeObserver_.disconnect()),
            this.loadListener_ && this.off("load", this.loadListener_),
            this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
            this.ResizeObserver = null,
            this.resizeObserver = null,
            this.debouncedHandler_ = null,
            this.loadListener_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        t
    }(At);
    At.registerComponent("ResizeManager", Er);
    var Ar = function(e) {
        function t(t, i) {
            var n, r = Et({
                createEl: !1
            }, i);
            return (n = e.call(this, t, r) || this).reset_(),
            n.on(n.player_, "durationchange", n.handleDurationchange),
            zt && "hidden"in s.a && "visibilityState"in s.a && n.on(s.a, "visibilitychange", n.handleVisibilityChange),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.handleVisibilityChange = function() {
            this.player_.duration() === 1 / 0 && (s.a.hidden ? this.stopTracking() : this.startTracking())
        }
        ,
        i.isBehind_ = function() {
            if (!this.timeupdateSeen_)
                return !1;
            var e = this.liveCurrentTime()
              , t = this.player_.currentTime()
              , i = this.seekableIncrement_;
            return e !== 1 / 0 && e - (2 * i + .07) >= t
        }
        ,
        i.trackLive_ = function() {
            this.pastSeekEnd_ = this.pastSeekEnd_;
            var e = this.player_.seekable();
            if (e && e.length) {
                var t = this.seekableEnd();
                t !== this.lastSeekEnd_ && (this.lastSeekEnd_ && (this.seekableIncrement_ = Math.abs(t - this.lastSeekEnd_)),
                this.pastSeekEnd_ = 0,
                this.lastSeekEnd_ = t,
                this.trigger("seekableendchange")),
                this.pastSeekEnd_ = this.pastSeekEnd() + .03,
                this.isBehind_() !== this.behindLiveEdge() && (this.behindLiveEdge_ = this.isBehind_(),
                this.trigger("liveedgechange"))
            }
        }
        ,
        i.handleDurationchange = function() {
            this.player_.duration() === 1 / 0 ? this.startTracking() : this.stopTracking()
        }
        ,
        i.startTracking = function() {
            var e = this;
            this.isTracking() || (this.trackingInterval_ = this.setInterval(this.trackLive_, 30),
            this.trackLive_(),
            this.on(this.player_, "play", this.trackLive_),
            this.on(this.player_, "pause", this.trackLive_),
            this.one(this.player_, "play", this.handlePlay),
            this.timeupdateSeen_ || (this.handleTimeupdate = function() {
                e.timeupdateSeen_ = !0,
                e.handleTimeupdate = null
            }
            ,
            this.one(this.player_, "timeupdate", this.handleTimeupdate)))
        }
        ,
        i.handlePlay = function() {
            this.one(this.player_, "timeupdate", this.seekToLiveEdge)
        }
        ,
        i.reset_ = function() {
            this.pastSeekEnd_ = 0,
            this.lastSeekEnd_ = null,
            this.behindLiveEdge_ = null,
            this.timeupdateSeen_ = !1,
            this.clearInterval(this.trackingInterval_),
            this.trackingInterval_ = null,
            this.seekableIncrement_ = 12,
            this.off(this.player_, "play", this.trackLive_),
            this.off(this.player_, "pause", this.trackLive_),
            this.off(this.player_, "play", this.handlePlay),
            this.off(this.player_, "timeupdate", this.seekToLiveEdge),
            this.handleTimeupdate && (this.off(this.player_, "timeupdate", this.handleTimeupdate),
            this.handleTimeupdate = null)
        }
        ,
        i.stopTracking = function() {
            this.isTracking() && this.reset_()
        }
        ,
        i.seekableEnd = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; )
                t.push(e.end(i));
            return t.length ? t.sort()[t.length - 1] : 1 / 0
        }
        ,
        i.seekableStart = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; )
                t.push(e.start(i));
            return t.length ? t.sort()[0] : 0
        }
        ,
        i.liveWindow = function() {
            var e = this.liveCurrentTime();
            return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
        }
        ,
        i.isLive = function() {
            return this.isTracking()
        }
        ,
        i.atLiveEdge = function() {
            return !this.behindLiveEdge()
        }
        ,
        i.liveCurrentTime = function() {
            return this.pastSeekEnd() + this.seekableEnd()
        }
        ,
        i.pastSeekEnd = function() {
            return this.pastSeekEnd_
        }
        ,
        i.behindLiveEdge = function() {
            return this.behindLiveEdge_
        }
        ,
        i.isTracking = function() {
            return "number" == typeof this.trackingInterval_
        }
        ,
        i.seekToLiveEdge = function() {
            this.atLiveEdge() || (this.player_.currentTime(this.liveCurrentTime()),
            this.player_.paused() && this.player_.play())
        }
        ,
        i.dispose = function() {
            this.stopTracking(),
            e.prototype.dispose.call(this)
        }
        ,
        t
    }(At);
    At.registerComponent("LiveTracker", Ar);
    var Pr = function(e) {
        var t = e.el();
        if (t.hasAttribute("src"))
            return e.triggerSourceset(t.src),
            !0;
        var i = e.$$("source")
          , n = []
          , r = "";
        if (!i.length)
            return !1;
        for (var a = 0; a < i.length; a++) {
            var s = i[a].src;
            s && -1 === n.indexOf(s) && n.push(s)
        }
        return !!n.length && (1 === n.length && (r = n[0]),
        e.triggerSourceset(r),
        !0)
    }
      , Lr = Object.defineProperty({}, "innerHTML", {
        get: function() {
            return this.cloneNode(!0).innerHTML
        },
        set: function(e) {
            var t = s.a.createElement(this.nodeName.toLowerCase());
            t.innerHTML = e;
            for (var i = s.a.createDocumentFragment(); t.childNodes.length; )
                i.appendChild(t.childNodes[0]);
            return this.innerText = "",
            r.a.Element.prototype.appendChild.call(this, i),
            this.innerHTML
        }
    })
      , Or = function(e, t) {
        for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++)
            ;
        return i.enumerable = !0,
        i.configurable = !0,
        i
    }
      , Ir = function(e) {
        var t = e.el();
        if (!t.resetSourceWatch_) {
            var i = {}
              , n = function(e) {
                return Or([e.el(), r.a.HTMLMediaElement.prototype, r.a.Element.prototype, Lr], "innerHTML")
            }(e)
              , a = function(i) {
                return function() {
                    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    var s = i.apply(t, r);
                    return Pr(e),
                    s
                }
            };
            ["append", "appendChild", "insertAdjacentHTML"].forEach(function(e) {
                t[e] && (i[e] = t[e],
                t[e] = a(i[e]))
            }),
            Object.defineProperty(t, "innerHTML", Et(n, {
                set: a(n.set)
            })),
            t.resetSourceWatch_ = function() {
                t.resetSourceWatch_ = null,
                Object.keys(i).forEach(function(e) {
                    t[e] = i[e]
                }),
                Object.defineProperty(t, "innerHTML", n)
            }
            ,
            e.one("sourceset", t.resetSourceWatch_)
        }
    }
      , xr = Object.defineProperty({}, "src", {
        get: function() {
            return this.hasAttribute("src") ? Oi(r.a.Element.prototype.getAttribute.call(this, "src")) : ""
        },
        set: function(e) {
            return r.a.Element.prototype.setAttribute.call(this, "src", e),
            e
        }
    })
      , Dr = function(e) {
        if (e.featuresSourceset) {
            var t = e.el();
            if (!t.resetSourceset_) {
                var i = function(e) {
                    return Or([e.el(), r.a.HTMLMediaElement.prototype, xr], "src")
                }(e)
                  , n = t.setAttribute
                  , a = t.load;
                Object.defineProperty(t, "src", Et(i, {
                    set: function(n) {
                        var r = i.set.call(t, n);
                        return e.triggerSourceset(t.src),
                        r
                    }
                })),
                t.setAttribute = function(i, r) {
                    var a = n.call(t, i, r);
                    return /src/i.test(i) && e.triggerSourceset(t.src),
                    a
                }
                ,
                t.load = function() {
                    var i = a.call(t);
                    return Pr(e) || (e.triggerSourceset(""),
                    Ir(e)),
                    i
                }
                ,
                t.currentSrc ? e.triggerSourceset(t.currentSrc) : Pr(e) || Ir(e),
                t.resetSourceset_ = function() {
                    t.resetSourceset_ = null,
                    t.load = a,
                    t.setAttribute = n,
                    Object.defineProperty(t, "src", i),
                    t.resetSourceWatch_ && t.resetSourceWatch_()
                }
            }
        }
    };
    function Ur() {
        var e = Y(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]);
        return Ur = function() {
            return e
        }
        ,
        e
    }
    var Rr = function(e) {
        function t(t, i) {
            var n;
            n = e.call(this, t, i) || this;
            var r = t.source
              , a = !1;
            if (r && (n.el_.currentSrc !== r.src || t.tag && 3 === t.tag.initNetworkState_) ? n.setSource(r) : n.handleLateInit_(n.el_),
            t.enableSourceset && n.setupSourcesetHandling_(),
            n.el_.hasChildNodes()) {
                for (var s = n.el_.childNodes, o = s.length, l = []; o--; ) {
                    var c = s[o];
                    "track" === c.nodeName.toLowerCase() && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(c),
                    n.remoteTextTracks().addTrack(c.track),
                    n.textTracks().addTrack(c.track),
                    a || n.el_.hasAttribute("crossorigin") || !xi(c.src) || (a = !0)) : l.push(c))
                }
                for (var d = 0; d < l.length; d++)
                    n.el_.removeChild(l[d])
            }
            return n.proxyNativeTracks_(),
            n.featuresNativeTextTracks && a && J.warn(u()(Ur())),
            n.restoreMetadataTracksInIOSNativePlayer_(),
            ($t || Dt || jt) && !0 === t.nativeControlsForTouch && n.setControls(!0),
            n.proxyWebkitFullscreen_(),
            n.triggerReady(),
            n
        }
        W(t, e);
        var i = t.prototype;
        return i.dispose = function() {
            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
            t.disposeMediaElement(this.el_),
            this.options_ = null,
            e.prototype.dispose.call(this)
        }
        ,
        i.setupSourcesetHandling_ = function() {
            Dr(this)
        }
        ,
        i.restoreMetadataTracksInIOSNativePlayer_ = function() {
            var e, t = this.textTracks(), i = function() {
                e = [];
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    "metadata" === n.kind && e.push({
                        track: n,
                        storedMode: n.mode
                    })
                }
            };
            i(),
            t.addEventListener("change", i),
            this.on("dispose", function() {
                return t.removeEventListener("change", i)
            });
            var n = function i() {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    "disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                }
                t.removeEventListener("change", i)
            };
            this.on("webkitbeginfullscreen", function() {
                t.removeEventListener("change", i),
                t.removeEventListener("change", n),
                t.addEventListener("change", n)
            }),
            this.on("webkitendfullscreen", function() {
                t.removeEventListener("change", i),
                t.addEventListener("change", i),
                t.removeEventListener("change", n)
            })
        }
        ,
        i.overrideNative_ = function(e, t) {
            var i = this;
            if (t === this["featuresNative" + e + "Tracks"]) {
                var n = e.toLowerCase();
                this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function(e) {
                    i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e])
                }),
                this["featuresNative" + e + "Tracks"] = !t,
                this[n + "TracksListeners_"] = null,
                this.proxyNativeTracksForType_(n)
            }
        }
        ,
        i.overrideNativeAudioTracks = function(e) {
            this.overrideNative_("Audio", e)
        }
        ,
        i.overrideNativeVideoTracks = function(e) {
            this.overrideNative_("Video", e)
        }
        ,
        i.proxyNativeTracksForType_ = function(e) {
            var t = this
              , i = Hi[e]
              , n = this.el()[i.getterName]
              , r = this[i.getterName]();
            if (this["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
                var a = {
                    change: function(e) {
                        r.trigger({
                            type: "change",
                            target: r,
                            currentTarget: r,
                            srcElement: r
                        })
                    },
                    addtrack: function(e) {
                        r.addTrack(e.track)
                    },
                    removetrack: function(e) {
                        r.removeTrack(e.track)
                    }
                }
                  , s = function() {
                    for (var e = [], t = 0; t < r.length; t++) {
                        for (var i = !1, a = 0; a < n.length; a++)
                            if (n[a] === r[t]) {
                                i = !0;
                                break
                            }
                        i || e.push(r[t])
                    }
                    for (; e.length; )
                        r.removeTrack(e.shift())
                };
                this[i.getterName + "Listeners_"] = a,
                Object.keys(a).forEach(function(e) {
                    var i = a[e];
                    n.addEventListener(e, i),
                    t.on("dispose", function(t) {
                        return n.removeEventListener(e, i)
                    })
                }),
                this.on("loadstart", s),
                this.on("dispose", function(e) {
                    return t.off("loadstart", s)
                })
            }
        }
        ,
        i.proxyNativeTracks_ = function() {
            var e = this;
            Hi.names.forEach(function(t) {
                e.proxyNativeTracksForType_(t)
            })
        }
        ,
        i.createEl = function() {
            var e = this.options_.tag;
            if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (e) {
                    var i = e.cloneNode(!0);
                    e.parentNode && e.parentNode.insertBefore(i, e),
                    t.disposeMediaElement(e),
                    e = i
                } else {
                    e = s.a.createElement("video");
                    var n = Et({}, this.options_.tag && Se(this.options_.tag));
                    $t && !0 === this.options_.nativeControlsForTouch || delete n.controls,
                    Te(e, ne(n, {
                        id: this.options_.techId,
                        class: "vjs-tech"
                    }))
                }
                e.playerId = this.options_.playerId
            }
            void 0 !== this.options_.preload && we(e, "preload", this.options_.preload);
            for (var r = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < r.length; a++) {
                var o = r[a]
                  , u = this.options_[o];
                void 0 !== u && (u ? we(e, o, o) : Ce(e, o),
                e[o] = u)
            }
            return e
        }
        ,
        i.handleLateInit_ = function(e) {
            if (0 !== e.networkState && 3 !== e.networkState) {
                if (0 === e.readyState) {
                    var t = !1
                      , i = function() {
                        t = !0
                    };
                    this.on("loadstart", i);
                    var n = function() {
                        t || this.trigger("loadstart")
                    };
                    return this.on("loadedmetadata", n),
                    void this.ready(function() {
                        this.off("loadstart", i),
                        this.off("loadedmetadata", n),
                        t || this.trigger("loadstart")
                    })
                }
                var r = ["loadstart"];
                r.push("loadedmetadata"),
                e.readyState >= 2 && r.push("loadeddata"),
                e.readyState >= 3 && r.push("canplay"),
                e.readyState >= 4 && r.push("canplaythrough"),
                this.ready(function() {
                    r.forEach(function(e) {
                        this.trigger(e)
                    }, this)
                })
            }
        }
        ,
        i.setCurrentTime = function(e) {
            try {
                this.el_.currentTime = e
            } catch (e) {
                J(e, "Video is not ready. (Video.js)")
            }
        }
        ,
        i.duration = function() {
            var e = this;
            if (this.el_.duration === 1 / 0 && Bt && Ht && 0 === this.el_.currentTime) {
                return this.on("timeupdate", function t() {
                    e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"),
                    e.off("timeupdate", t))
                }),
                NaN
            }
            return this.el_.duration || NaN
        }
        ,
        i.width = function() {
            return this.el_.offsetWidth
        }
        ,
        i.height = function() {
            return this.el_.offsetHeight
        }
        ,
        i.proxyWebkitFullscreen_ = function() {
            var e = this;
            if ("webkitDisplayingFullscreen"in this.el_) {
                var t = function() {
                    this.trigger("fullscreenchange", {
                        isFullscreen: !1
                    })
                }
                  , i = function() {
                    "webkitPresentationMode"in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t),
                    this.trigger("fullscreenchange", {
                        isFullscreen: !0
                    }))
                };
                this.on("webkitbeginfullscreen", i),
                this.on("dispose", function() {
                    e.off("webkitbeginfullscreen", i),
                    e.off("webkitendfullscreen", t)
                })
            }
        }
        ,
        i.supportsFullScreen = function() {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var e = r.a.navigator && r.a.navigator.userAgent || "";
                if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e))
                    return !0
            }
            return !1
        }
        ,
        i.enterFullScreen = function() {
            var e = this.el_;
            e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(),
            this.setTimeout(function() {
                e.pause(),
                e.webkitEnterFullScreen()
            }, 0)) : e.webkitEnterFullScreen()
        }
        ,
        i.exitFullScreen = function() {
            this.el_.webkitExitFullScreen()
        }
        ,
        i.src = function(e) {
            if (void 0 === e)
                return this.el_.src;
            this.setSrc(e)
        }
        ,
        i.reset = function() {
            t.resetMediaElement(this.el_)
        }
        ,
        i.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
        }
        ,
        i.setControls = function(e) {
            this.el_.controls = !!e
        }
        ,
        i.addTextTrack = function(t, i, n) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, i, n) : e.prototype.addTextTrack.call(this, t, i, n)
        }
        ,
        i.createRemoteTextTrack = function(t) {
            if (!this.featuresNativeTextTracks)
                return e.prototype.createRemoteTextTrack.call(this, t);
            var i = s.a.createElement("track");
            return t.kind && (i.kind = t.kind),
            t.label && (i.label = t.label),
            (t.language || t.srclang) && (i.srclang = t.language || t.srclang),
            t.default && (i.default = t.default),
            t.id && (i.id = t.id),
            t.src && (i.src = t.src),
            i
        }
        ,
        i.addRemoteTextTrack = function(t, i) {
            var n = e.prototype.addRemoteTextTrack.call(this, t, i);
            return this.featuresNativeTextTracks && this.el().appendChild(n),
            n
        }
        ,
        i.removeRemoteTextTrack = function(t) {
            if (e.prototype.removeRemoteTextTrack.call(this, t),
            this.featuresNativeTextTracks)
                for (var i = this.$$("track"), n = i.length; n--; )
                    t !== i[n] && t !== i[n].track || this.el().removeChild(i[n])
        }
        ,
        i.getVideoPlaybackQuality = function() {
            if ("function" == typeof this.el().getVideoPlaybackQuality)
                return this.el().getVideoPlaybackQuality();
            var e = {};
            return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount,
            e.totalVideoFrames = this.el().webkitDecodedFrameCount),
            r.a.performance && "function" == typeof r.a.performance.now ? e.creationTime = r.a.performance.now() : r.a.performance && r.a.performance.timing && "number" == typeof r.a.performance.timing.navigationStart && (e.creationTime = r.a.Date.now() - r.a.performance.timing.navigationStart),
            e
        }
        ,
        t
    }(Wi);
    if (ce()) {
        Rr.TEST_VID = s.a.createElement("video");
        var Mr = s.a.createElement("track");
        Mr.kind = "captions",
        Mr.srclang = "en",
        Mr.label = "English",
        Rr.TEST_VID.appendChild(Mr)
    }
    Rr.isSupported = function() {
        try {
            Rr.TEST_VID.volume = .5
        } catch (e) {
            return !1
        }
        return !(!Rr.TEST_VID || !Rr.TEST_VID.canPlayType)
    }
    ,
    Rr.canPlayType = function(e) {
        return Rr.TEST_VID.canPlayType(e)
    }
    ,
    Rr.canPlaySource = function(e, t) {
        return Rr.canPlayType(e.type)
    }
    ,
    Rr.canControlVolume = function() {
        try {
            var e = Rr.TEST_VID.volume;
            return Rr.TEST_VID.volume = e / 2 + .1,
            e !== Rr.TEST_VID.volume
        } catch (e) {
            return !1
        }
    }
    ,
    Rr.canMuteVolume = function() {
        try {
            var e = Rr.TEST_VID.muted;
            return Rr.TEST_VID.muted = !e,
            Rr.TEST_VID.muted ? we(Rr.TEST_VID, "muted", "muted") : Ce(Rr.TEST_VID, "muted"),
            e !== Rr.TEST_VID.muted
        } catch (e) {
            return !1
        }
    }
    ,
    Rr.canControlPlaybackRate = function() {
        if (Bt && Ht && qt < 58)
            return !1;
        try {
            var e = Rr.TEST_VID.playbackRate;
            return Rr.TEST_VID.playbackRate = e / 2 + .1,
            e !== Rr.TEST_VID.playbackRate
        } catch (e) {
            return !1
        }
    }
    ,
    Rr.canOverrideAttributes = function() {
        try {
            var e = function() {};
            Object.defineProperty(s.a.createElement("video"), "src", {
                get: e,
                set: e
            }),
            Object.defineProperty(s.a.createElement("audio"), "src", {
                get: e,
                set: e
            }),
            Object.defineProperty(s.a.createElement("video"), "innerHTML", {
                get: e,
                set: e
            }),
            Object.defineProperty(s.a.createElement("audio"), "innerHTML", {
                get: e,
                set: e
            })
        } catch (e) {
            return !1
        }
        return !0
    }
    ,
    Rr.supportsNativeTextTracks = function() {
        return Gt || Rt && Ht
    }
    ,
    Rr.supportsNativeVideoTracks = function() {
        return !(!Rr.TEST_VID || !Rr.TEST_VID.videoTracks)
    }
    ,
    Rr.supportsNativeAudioTracks = function() {
        return !(!Rr.TEST_VID || !Rr.TEST_VID.audioTracks)
    }
    ,
    Rr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"],
    Rr.prototype.featuresVolumeControl = Rr.canControlVolume(),
    Rr.prototype.featuresMuteControl = Rr.canMuteVolume(),
    Rr.prototype.featuresPlaybackRate = Rr.canControlPlaybackRate(),
    Rr.prototype.featuresSourceset = Rr.canOverrideAttributes(),
    Rr.prototype.movingMediaElementInDOM = !Rt,
    Rr.prototype.featuresFullscreenResize = !0,
    Rr.prototype.featuresProgressEvents = !0,
    Rr.prototype.featuresTimeupdateEvents = !0,
    Rr.prototype.featuresNativeTextTracks = Rr.supportsNativeTextTracks(),
    Rr.prototype.featuresNativeVideoTracks = Rr.supportsNativeVideoTracks(),
    Rr.prototype.featuresNativeAudioTracks = Rr.supportsNativeAudioTracks();
    var Br = Rr.TEST_VID && Rr.TEST_VID.constructor.prototype.canPlayType
      , Nr = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
    function jr() {
        var e = Y(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]);
        return jr = function() {
            return e
        }
        ,
        e
    }
    Rr.patchCanPlayType = function() {
        Nt >= 4 && !Ft && !Ht && (Rr.TEST_VID.constructor.prototype.canPlayType = function(e) {
            return e && Nr.test(e) ? "maybe" : Br.call(this, e)
        }
        )
    }
    ,
    Rr.unpatchCanPlayType = function() {
        var e = Rr.TEST_VID.constructor.prototype.canPlayType;
        return Rr.TEST_VID.constructor.prototype.canPlayType = Br,
        e
    }
    ,
    Rr.patchCanPlayType(),
    Rr.disposeMediaElement = function(e) {
        if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); )
                e.removeChild(e.firstChild);
            e.removeAttribute("src"),
            "function" == typeof e.load && function() {
                try {
                    e.load()
                } catch (e) {}
            }()
        }
    }
    ,
    Rr.resetMediaElement = function(e) {
        if (e) {
            for (var t = e.querySelectorAll("source"), i = t.length; i--; )
                e.removeChild(t[i]);
            e.removeAttribute("src"),
            "function" == typeof e.load && function() {
                try {
                    e.load()
                } catch (e) {}
            }()
        }
    }
    ,
    ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) {
        Rr.prototype[e] = function() {
            return this.el_[e] || this.el_.hasAttribute(e)
        }
    }),
    ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(e) {
        Rr.prototype["set" + Ct(e)] = function(t) {
            this.el_[e] = t,
            t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
        }
    }),
    ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(e) {
        Rr.prototype[e] = function() {
            return this.el_[e]
        }
    }),
    ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(e) {
        Rr.prototype["set" + Ct(e)] = function(t) {
            this.el_[e] = t
        }
    }),
    ["pause", "load", "play"].forEach(function(e) {
        Rr.prototype[e] = function() {
            return this.el_[e]()
        }
    }),
    Wi.withSourceHandlers(Rr),
    Rr.nativeSourceHandler = {},
    Rr.nativeSourceHandler.canPlayType = function(e) {
        try {
            return Rr.TEST_VID.canPlayType(e)
        } catch (e) {
            return ""
        }
    }
    ,
    Rr.nativeSourceHandler.canHandleSource = function(e, t) {
        if (e.type)
            return Rr.nativeSourceHandler.canPlayType(e.type);
        if (e.src) {
            var i = Ii(e.src);
            return Rr.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }
    ,
    Rr.nativeSourceHandler.handleSource = function(e, t, i) {
        t.setSrc(e.src)
    }
    ,
    Rr.nativeSourceHandler.dispose = function() {}
    ,
    Rr.registerSourceHandler(Rr.nativeSourceHandler),
    Wi.registerTech("Html5", Rr);
    var Fr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"]
      , Vr = {
        canplay: "CanPlay",
        canplaythrough: "CanPlayThrough",
        playing: "Playing",
        seeked: "Seeked"
    }
      , Hr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"]
      , qr = {};
    Hr.forEach(function(e) {
        var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
        qr[e] = "vjs-layout-" + t
    });
    var zr = {
        tiny: 210,
        xsmall: 320,
        small: 425,
        medium: 768,
        large: 1440,
        xlarge: 2560,
        huge: 1 / 0
    }
      , Wr = function(e) {
        function t(i, n, r) {
            var a;
            if (i.id = i.id || n.id || "vjs_video_" + Ve(),
            (n = ne(t.getTagSettings(i), n)).initChildren = !1,
            n.createEl = !1,
            n.evented = !1,
            n.reportTouchActivity = !1,
            !n.language)
                if ("function" == typeof i.closest) {
                    var s = i.closest("[lang]");
                    s && s.getAttribute && (n.language = s.getAttribute("lang"))
                } else
                    for (var o = i; o && 1 === o.nodeType; ) {
                        if (Se(o).hasOwnProperty("lang")) {
                            n.language = o.getAttribute("lang");
                            break
                        }
                        o = o.parentNode
                    }
            if ((a = e.call(this, null, n, r) || this).boundDocumentFullscreenChange_ = ct(X(X(a)), a.documentFullscreenChange_),
            a.boundFullWindowOnEscKey_ = ct(X(X(a)), a.fullWindowOnEscKey),
            a.log = Z(a.id_),
            a.isPosterFromTech_ = !1,
            a.queuedCallbacks_ = [],
            a.isReady_ = !1,
            a.hasStarted_ = !1,
            a.userActive_ = !1,
            !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length)
                throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
            if (a.tag = i,
            a.tagAttributes = i && Se(i),
            a.language(a.options_.language),
            n.languages) {
                var u = {};
                Object.getOwnPropertyNames(n.languages).forEach(function(e) {
                    u[e.toLowerCase()] = n.languages[e]
                }),
                a.languages_ = u
            } else
                a.languages_ = t.prototype.options_.languages;
            a.resetCache_(),
            a.poster_ = n.poster || "",
            a.controls_ = !!n.controls,
            i.controls = !1,
            i.removeAttribute("controls"),
            a.changingSrc_ = !1,
            a.playCallbacks_ = [],
            a.playTerminatedQueue_ = [],
            i.hasAttribute("autoplay") ? a.autoplay(!0) : a.autoplay(a.options_.autoplay),
            n.plugins && Object.keys(n.plugins).forEach(function(e) {
                if ("function" != typeof a[e])
                    throw new Error('plugin "' + e + '" does not exist')
            }),
            a.scrubbing_ = !1,
            a.el_ = a.createEl(),
            St(X(X(a)), {
                eventBusKey: "el_"
            }),
            a.fluid_ && a.on("playerreset", a.updateStyleEl_);
            var l = Et(a.options_);
            n.plugins && Object.keys(n.plugins).forEach(function(e) {
                a[e](n.plugins[e])
            }),
            a.options_.playerOptions = l,
            a.middleware_ = [],
            a.initChildren(),
            a.isAudio("audio" === i.nodeName.toLowerCase()),
            a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"),
            a.el_.setAttribute("role", "region"),
            a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")),
            a.isAudio() && a.addClass("vjs-audio"),
            a.flexNotSupported_() && a.addClass("vjs-no-flex"),
            $t && a.addClass("vjs-touch-enabled"),
            Rt || a.addClass("vjs-workinghover"),
            t.players[a.id_] = X(X(a));
            var c = z.split(".")[0];
            return a.addClass("vjs-v" + c),
            a.userActive(!0),
            a.reportUserActivity(),
            a.one("play", a.listenForUserActivity_),
            a.on("stageclick", a.handleStageClick_),
            a.on("keydown", a.handleKeyDown),
            a.breakpoints(a.options_.breakpoints),
            a.responsive(a.options_.responsive),
            a
        }
        W(t, e);
        var i = t.prototype;
        return i.dispose = function() {
            var i = this;
            this.trigger("dispose"),
            this.off("dispose"),
            Ze(s.a, ei.fullscreenchange, this.boundDocumentFullscreenChange_),
            Ze(s.a, "keydown", this.boundFullWindowOnEscKey_),
            this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_),
            this.styleEl_ = null),
            t.players[this.id_] = null,
            this.tag && this.tag.player && (this.tag.player = null),
            this.el_ && this.el_.player && (this.el_.player = null),
            this.tech_ && (this.tech_.dispose(),
            this.isPosterFromTech_ = !1,
            this.poster_ = ""),
            this.playerElIngest_ && (this.playerElIngest_ = null),
            this.tag && (this.tag = null),
            $i[this.id()] = null,
            zi.names.forEach(function(e) {
                var t = zi[e]
                  , n = i[t.getterName]();
                n && n.off && n.off()
            }),
            e.prototype.dispose.call(this)
        }
        ,
        i.createEl = function() {
            var t, i = this.tag, n = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"), a = "video-js" === this.tag.tagName.toLowerCase();
            n ? t = this.el_ = i.parentNode : a || (t = this.el_ = e.prototype.createEl.call(this, "div"));
            var o = Se(i);
            if (a) {
                for (t = this.el_ = i,
                i = this.tag = s.a.createElement("video"); t.children.length; )
                    i.appendChild(t.firstChild);
                ye(t, "video-js") || ve(t, "video-js"),
                t.appendChild(i),
                n = this.playerElIngest_ = t,
                Object.keys(t).forEach(function(e) {
                    i[e] = t[e]
                })
            }
            if (i.setAttribute("tabindex", "-1"),
            o.tabindex = "-1",
            zt && (i.setAttribute("role", "application"),
            o.role = "application"),
            i.removeAttribute("width"),
            i.removeAttribute("height"),
            "width"in o && delete o.width,
            "height"in o && delete o.height,
            Object.getOwnPropertyNames(o).forEach(function(e) {
                a && "class" === e || t.setAttribute(e, o[e]),
                a && i.setAttribute(e, o[e])
            }),
            i.playerId = i.id,
            i.id += "_html5_api",
            i.className = "vjs-tech",
            i.player = t.player = this,
            this.addClass("vjs-paused"),
            !0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE) {
                this.styleEl_ = ut("vjs-styles-dimensions");
                var u = Be(".vjs-styles-defaults")
                  , l = Be("head");
                l.insertBefore(this.styleEl_, u ? u.nextSibling : l.firstChild)
            }
            this.fill_ = !1,
            this.fluid_ = !1,
            this.width(this.options_.width),
            this.height(this.options_.height),
            this.fill(this.options_.fill),
            this.fluid(this.options_.fluid),
            this.aspectRatio(this.options_.aspectRatio);
            for (var c = i.getElementsByTagName("a"), d = 0; d < c.length; d++) {
                var h = c.item(d);
                ve(h, "vjs-hidden"),
                h.setAttribute("hidden", "hidden")
            }
            return i.initNetworkState_ = i.networkState,
            i.parentNode && !n && i.parentNode.insertBefore(t, i),
            ge(i, t),
            this.children_.unshift(i),
            this.el_.setAttribute("lang", this.language_),
            this.el_ = t,
            t
        }
        ,
        i.width = function(e) {
            return this.dimension("width", e)
        }
        ,
        i.height = function(e) {
            return this.dimension("height", e)
        }
        ,
        i.dimension = function(e, t) {
            var i = e + "_";
            if (void 0 === t)
                return this[i] || 0;
            if ("" === t)
                return this[i] = void 0,
                void this.updateStyleEl_();
            var n = parseFloat(t);
            isNaN(n) ? J.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n,
            this.updateStyleEl_())
        }
        ,
        i.fluid = function(e) {
            if (void 0 === e)
                return !!this.fluid_;
            var t, i;
            this.fluid_ = !!e,
            ft(this) && this.off("playerreset", this.updateStyleEl_),
            e ? (this.addClass("vjs-fluid"),
            this.fill(!1),
            ft(t = function() {
                this.on("playerreset", this.updateStyleEl_)
            }
            ) ? i() : (t.eventedCallbacks || (t.eventedCallbacks = []),
            t.eventedCallbacks.push(i))) : this.removeClass("vjs-fluid"),
            this.updateStyleEl_()
        }
        ,
        i.fill = function(e) {
            if (void 0 === e)
                return !!this.fill_;
            this.fill_ = !!e,
            e ? (this.addClass("vjs-fill"),
            this.fluid(!1)) : this.removeClass("vjs-fill")
        }
        ,
        i.aspectRatio = function(e) {
            if (void 0 === e)
                return this.aspectRatio_;
            if (!/^\d+\:\d+$/.test(e))
                throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
            this.aspectRatio_ = e,
            this.fluid(!0),
            this.updateStyleEl_()
        }
        ,
        i.updateStyleEl_ = function() {
            if (!0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE) {
                var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"), a = n[1] / n[0];
                e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / a : this.videoWidth() || 300,
                t = void 0 !== this.height_ ? this.height_ : e * a,
                i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions",
                this.addClass(i),
                lt(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * a + "%;\n      }\n    ")
            } else {
                var s = "number" == typeof this.width_ ? this.width_ : this.options_.width
                  , o = "number" == typeof this.height_ ? this.height_ : this.options_.height
                  , u = this.tech_ && this.tech_.el();
                u && (s >= 0 && (u.width = s),
                o >= 0 && (u.height = o))
            }
        }
        ,
        i.loadTech_ = function(e, t) {
            var i = this;
            this.tech_ && this.unloadTech_();
            var n = Ct(e)
              , r = e.charAt(0).toLowerCase() + e.slice(1);
            "Html5" !== n && this.tag && (Wi.getTech("Html5").disposeMediaElement(this.tag),
            this.tag.player = null,
            this.tag = null),
            this.techName_ = n,
            this.isReady_ = !1;
            var a = {
                source: t,
                autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + "_" + r + "_api",
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                "vtt.js": this.options_["vtt.js"],
                canOverridePoster: !!this.options_.techCanOverridePoster,
                enableSourceset: this.options_.enableSourceset
            };
            zi.names.forEach(function(e) {
                var t = zi[e];
                a[t.getterName] = i[t.privateName]
            }),
            ne(a, this.options_[n]),
            ne(a, this.options_[r]),
            ne(a, this.options_[e.toLowerCase()]),
            this.tag && (a.tag = this.tag),
            t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
            var s = Wi.getTech(e);
            if (!s)
                throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
            this.tech_ = new s(a),
            this.tech_.ready(ct(this, this.handleTechReady_), !0),
            hi(this.textTracksJson_ || [], this.tech_),
            Fr.forEach(function(e) {
                i.on(i.tech_, e, i["handleTech" + Ct(e) + "_"])
            }),
            Object.keys(Vr).forEach(function(e) {
                i.on(i.tech_, e, function(t) {
                    0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                        callback: i["handleTech" + Vr[e] + "_"].bind(i),
                        event: t
                    }) : i["handleTech" + Vr[e] + "_"](t)
                })
            }),
            this.on(this.tech_, "loadstart", this.handleTechLoadStart_),
            this.on(this.tech_, "sourceset", this.handleTechSourceset_),
            this.on(this.tech_, "waiting", this.handleTechWaiting_),
            this.on(this.tech_, "ended", this.handleTechEnded_),
            this.on(this.tech_, "seeking", this.handleTechSeeking_),
            this.on(this.tech_, "play", this.handleTechPlay_),
            this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
            this.on(this.tech_, "pause", this.handleTechPause_),
            this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
            this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_),
            this.on(this.tech_, "error", this.handleTechError_),
            this.on(this.tech_, "loadedmetadata", this.updateStyleEl_),
            this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
            this.on(this.tech_, "textdata", this.handleTechTextData_),
            this.on(this.tech_, "ratechange", this.handleTechRateChange_),
            this.usingNativeControls(this.techGet_("controls")),
            this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
            this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || ge(this.tech_.el(), this.el()),
            this.tag && (this.tag.player = null,
            this.tag = null)
        }
        ,
        i.unloadTech_ = function() {
            var e = this;
            zi.names.forEach(function(t) {
                var i = zi[t];
                e[i.privateName] = e[i.getterName]()
            }),
            this.textTracksJson_ = di(this.tech_),
            this.isReady_ = !1,
            this.tech_.dispose(),
            this.tech_ = !1,
            this.isPosterFromTech_ && (this.poster_ = "",
            this.trigger("posterchange")),
            this.isPosterFromTech_ = !1
        }
        ,
        i.tech = function(e) {
            return void 0 === e && J.warn(u()(jr())),
            this.tech_
        }
        ,
        i.addTechControlsListeners_ = function() {
            this.removeTechControlsListeners_(),
            this.on(this.tech_, "mousedown", this.handleTechClick_),
            this.on(this.tech_, "dblclick", this.handleTechDoubleClick_),
            this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.on(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.on(this.tech_, "tap", this.handleTechTap_)
        }
        ,
        i.removeTechControlsListeners_ = function() {
            this.off(this.tech_, "tap", this.handleTechTap_),
            this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.off(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.off(this.tech_, "mousedown", this.handleTechClick_),
            this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
        }
        ,
        i.handleTechReady_ = function() {
            this.triggerReady(),
            this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
            this.handleTechPosterChange_(),
            this.handleTechDurationChange_()
        }
        ,
        i.handleTechLoadStart_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-seeking"),
            this.error(null),
            this.handleTechDurationChange_(),
            this.paused() ? (this.hasStarted(!1),
            this.trigger("loadstart")) : (this.trigger("loadstart"),
            this.trigger("firstplay")),
            this.manualAutoplay_(this.autoplay())
        }
        ,
        i.manualAutoplay_ = function(e) {
            var t = this;
            if (this.tech_ && "string" == typeof e) {
                var i, n = function() {
                    var e = t.muted();
                    t.muted(!0);
                    var i = function() {
                        t.muted(e)
                    };
                    t.playTerminatedQueue_.push(i);
                    var n = t.play();
                    if (ui(n))
                        return n.catch(i)
                };
                if ("any" === e && !0 !== this.muted() ? ui(i = this.play()) && (i = i.catch(n)) : i = "muted" === e && !0 !== this.muted() ? n() : this.play(),
                ui(i))
                    return i.then(function() {
                        t.trigger({
                            type: "autoplay-success",
                            autoplay: e
                        })
                    }).catch(function(i) {
                        t.trigger({
                            type: "autoplay-failure",
                            autoplay: e
                        })
                    })
            }
        }
        ,
        i.updateSourceCaches_ = function(e) {
            void 0 === e && (e = "");
            var t = e
              , i = "";
            "string" != typeof t && (t = e.src,
            i = e.type),
            this.cache_.source = this.cache_.source || {},
            this.cache_.sources = this.cache_.sources || [],
            t && !i && (i = function(e, t) {
                if (!t)
                    return "";
                if (e.cache_.source.src === t && e.cache_.source.type)
                    return e.cache_.source.type;
                var i = e.cache_.sources.filter(function(e) {
                    return e.src === t
                });
                if (i.length)
                    return i[0].type;
                for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (a.type && a.src && a.src === t)
                        return a.type
                }
                return nn(t)
            }(this, t)),
            this.cache_.source = Et({}, e, {
                src: t,
                type: i
            });
            for (var n = this.cache_.sources.filter(function(e) {
                return e.src && e.src === t
            }), r = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
                var u = Se(a[o]);
                r.push(u),
                u.src && u.src === t && s.push(u.src)
            }
            s.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]),
            this.cache_.src = t
        }
        ,
        i.handleTechSourceset_ = function(e) {
            var t = this;
            if (!this.changingSrc_) {
                var i = function(e) {
                    return t.updateSourceCaches_(e)
                }
                  , n = this.currentSource().src
                  , r = e.src;
                if (n && !/^blob:/.test(n) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== n) && (i = function() {}
                ),
                i(r),
                !e.src) {
                    this.tech_.one(["sourceset", "loadstart"], function e(i) {
                        if ("sourceset" !== i.type) {
                            var n = t.techGet("currentSrc");
                            t.lastSource_.tech = n,
                            t.updateSourceCaches_(n)
                        }
                        t.tech_.off(["sourceset", "loadstart"], e)
                    })
                }
            }
            this.lastSource_ = {
                player: this.currentSource().src,
                tech: e.src
            },
            this.trigger({
                src: e.src,
                type: "sourceset"
            })
        }
        ,
        i.hasStarted = function(e) {
            if (void 0 === e)
                return this.hasStarted_;
            e !== this.hasStarted_ && (this.hasStarted_ = e,
            this.hasStarted_ ? (this.addClass("vjs-has-started"),
            this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
        }
        ,
        i.handleTechPlay_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.hasStarted(!0),
            this.trigger("play")
        }
        ,
        i.handleTechRateChange_ = function() {
            this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) {
                return e.callback(e.event)
            }),
            this.queuedCallbacks_ = []),
            this.cache_.lastPlaybackRate = this.tech_.playbackRate(),
            this.trigger("ratechange")
        }
        ,
        i.handleTechWaiting_ = function() {
            var e = this;
            this.addClass("vjs-waiting"),
            this.trigger("waiting");
            var t = this.currentTime();
            this.on("timeupdate", function i() {
                t !== e.currentTime() && (e.removeClass("vjs-waiting"),
                e.off("timeupdate", i))
            })
        }
        ,
        i.handleTechCanPlay_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplay")
        }
        ,
        i.handleTechCanPlayThrough_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplaythrough")
        }
        ,
        i.handleTechPlaying_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("playing")
        }
        ,
        i.handleTechSeeking_ = function() {
            this.addClass("vjs-seeking"),
            this.trigger("seeking")
        }
        ,
        i.handleTechSeeked_ = function() {
            this.removeClass("vjs-seeking"),
            this.removeClass("vjs-ended"),
            this.trigger("seeked")
        }
        ,
        i.handleTechFirstPlay_ = function() {
            this.options_.starttime && (J.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),
            this.currentTime(this.options_.starttime)),
            this.addClass("vjs-has-started"),
            this.trigger("firstplay")
        }
        ,
        i.handleTechPause_ = function() {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.trigger("pause")
        }
        ,
        i.handleTechEnded_ = function() {
            this.addClass("vjs-ended"),
            this.options_.loop ? (this.currentTime(0),
            this.play()) : this.paused() || this.pause(),
            this.trigger("ended")
        }
        ,
        i.handleTechDurationChange_ = function() {
            this.duration(this.techGet_("duration"))
        }
        ,
        i.handleTechClick_ = function(e) {
            Me(e) && this.controls_ && (this.paused() ? li(this.play()) : this.pause())
        }
        ,
        i.handleTechDoubleClick_ = function(e) {
            this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(t) {
                return t.contains(e.target)
            }) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
        }
        ,
        i.handleTechTap_ = function() {
            this.userActive(!this.userActive())
        }
        ,
        i.handleTechTouchStart_ = function() {
            this.userWasActive = this.userActive()
        }
        ,
        i.handleTechTouchMove_ = function() {
            this.userWasActive && this.reportUserActivity()
        }
        ,
        i.handleTechTouchEnd_ = function(e) {
            e.preventDefault()
        }
        ,
        i.handleStageClick_ = function() {
            this.reportUserActivity()
        }
        ,
        i.toggleFullscreenClass_ = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        }
        ,
        i.documentFullscreenChange_ = function(e) {
            var t = ei
              , i = this.el()
              , n = s.a[t.fullscreenElement] === i;
            !n && i.matches ? n = i.matches(":" + t.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + t.fullscreen)),
            this.isFullscreen(n),
            !1 === this.isFullscreen() && Ze(s.a, t.fullscreenchange, this.boundDocumentFullscreenChange_),
            ni || this.trigger("fullscreenchange")
        }
        ,
        i.handleTechFullscreenChange_ = function(e, t) {
            t && this.isFullscreen(t.isFullscreen),
            this.trigger("fullscreenchange")
        }
        ,
        i.handleTechError_ = function() {
            var e = this.tech_.error();
            this.error(e)
        }
        ,
        i.handleTechTextData_ = function() {
            var e = null;
            arguments.length > 1 && (e = arguments[1]),
            this.trigger("textdata", e)
        }
        ,
        i.getCache = function() {
            return this.cache_
        }
        ,
        i.resetCache_ = function() {
            this.cache_ = {
                currentTime: 0,
                inactivityTimeout: this.options_.inactivityTimeout,
                duration: NaN,
                lastVolume: 1,
                lastPlaybackRate: this.defaultPlaybackRate(),
                media: null,
                src: "",
                source: {},
                sources: [],
                volume: 1
            }
        }
        ,
        i.techCall_ = function(e, t) {
            this.ready(function() {
                if (e in Ji)
                    return function(e, t, i, n) {
                        return t[i](e.reduce(en(i), n))
                    }(this.middleware_, this.tech_, e, t);
                if (e in Zi)
                    return Ki(this.middleware_, this.tech_, e, t);
                try {
                    this.tech_ && this.tech_[e](t)
                } catch (e) {
                    throw J(e),
                    e
                }
            }, !0)
        }
        ,
        i.techGet_ = function(e) {
            if (this.tech_ && this.tech_.isReady_) {
                if (e in Qi)
                    return function(e, t, i) {
                        return e.reduceRight(en(i), t[i]())
                    }(this.middleware_, this.tech_, e);
                if (e in Zi)
                    return Ki(this.middleware_, this.tech_, e);
                try {
                    return this.tech_[e]()
                } catch (t) {
                    if (void 0 === this.tech_[e])
                        throw J("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t),
                        t;
                    if ("TypeError" === t.name)
                        throw J("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t),
                        this.tech_.isReady_ = !1,
                        t;
                    throw J(t),
                    t
                }
            }
        }
        ,
        i.play = function() {
            var e = this
              , t = this.options_.Promise || r.a.Promise;
            return t ? new t(function(t) {
                e.play_(t)
            }
            ) : this.play_()
        }
        ,
        i.play_ = function(e) {
            var t = this;
            void 0 === e && (e = li),
            this.playCallbacks_.push(e);
            var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
            if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_),
            this.waitToPlay_ = null),
            !this.isReady_ || !i)
                return this.waitToPlay_ = function(e) {
                    t.play_()
                }
                ,
                this.one(["ready", "loadstart"], this.waitToPlay_),
                void (i || !Gt && !Rt || this.load());
            var n = this.techGet_("play");
            null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
        }
        ,
        i.runPlayTerminatedQueue_ = function() {
            var e = this.playTerminatedQueue_.slice(0);
            this.playTerminatedQueue_ = [],
            e.forEach(function(e) {
                e()
            })
        }
        ,
        i.runPlayCallbacks_ = function(e) {
            var t = this.playCallbacks_.slice(0);
            this.playCallbacks_ = [],
            this.playTerminatedQueue_ = [],
            t.forEach(function(t) {
                t(e)
            })
        }
        ,
        i.pause = function() {
            this.techCall_("pause")
        }
        ,
        i.paused = function() {
            return !1 !== this.techGet_("paused")
        }
        ,
        i.played = function() {
            return this.techGet_("played") || Qt(0, 0)
        }
        ,
        i.scrubbing = function(e) {
            if (void 0 === e)
                return this.scrubbing_;
            this.scrubbing_ = !!e,
            e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
        }
        ,
        i.currentTime = function(e) {
            return void 0 !== e ? (e < 0 && (e = 0),
            void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0,
            this.cache_.currentTime)
        }
        ,
        i.duration = function(e) {
            if (void 0 === e)
                return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
            (e = parseFloat(e)) < 0 && (e = 1 / 0),
            e !== this.cache_.duration && (this.cache_.duration = e,
            e === 1 / 0 ? (this.addClass("vjs-live"),
            this.options_.liveui && this.player_.liveTracker && this.addClass("vjs-liveui")) : (this.removeClass("vjs-live"),
            this.removeClass("vjs-liveui")),
            isNaN(e) || this.trigger("durationchange"))
        }
        ,
        i.remainingTime = function() {
            return this.duration() - this.currentTime()
        }
        ,
        i.remainingTimeDisplay = function() {
            return Math.floor(this.duration()) - Math.floor(this.currentTime())
        }
        ,
        i.buffered = function() {
            var e = this.techGet_("buffered");
            return e && e.length || (e = Qt(0, 0)),
            e
        }
        ,
        i.bufferedPercent = function() {
            return Jt(this.buffered(), this.duration())
        }
        ,
        i.bufferedEnd = function() {
            var e = this.buffered()
              , t = this.duration()
              , i = e.end(e.length - 1);
            return i > t && (i = t),
            i
        }
        ,
        i.volume = function(e) {
            var t;
            return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))),
            this.cache_.volume = t,
            this.techCall_("setVolume", t),
            void (t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")),
            isNaN(t) ? 1 : t)
        }
        ,
        i.muted = function(e) {
            if (void 0 === e)
                return this.techGet_("muted") || !1;
            this.techCall_("setMuted", e)
        }
        ,
        i.defaultMuted = function(e) {
            return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
        }
        ,
        i.lastVolume_ = function(e) {
            if (void 0 === e || 0 === e)
                return this.cache_.lastVolume;
            this.cache_.lastVolume = e
        }
        ,
        i.supportsFullScreen = function() {
            return this.techGet_("supportsFullScreen") || !1
        }
        ,
        i.isFullscreen = function(e) {
            if (void 0 !== e)
                return this.isFullscreen_ = !!e,
                void this.toggleFullscreenClass_();
            if (ni) {
                var t = ei
                  , i = this.el()
                  , n = s.a[t.fullscreenElement] === i;
                return !n && i.matches ? n = i.matches(":" + t.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + t.fullscreen)),
                n
            }
            return !!this.isFullscreen_
        }
        ,
        i.requestFullscreen = function() {
            var e = ei;
            this.isFullscreen(!0),
            e.requestFullscreen ? (Je(s.a, e.fullscreenchange, this.boundDocumentFullscreenChange_),
            this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(),
            this.trigger("fullscreenchange"))
        }
        ,
        i.exitFullscreen = function() {
            var e = ei;
            this.isFullscreen(!1),
            e.requestFullscreen ? s.a[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(),
            this.trigger("fullscreenchange"))
        }
        ,
        i.enterFullWindow = function() {
            this.isFullWindow = !0,
            this.docOrigOverflow = s.a.documentElement.style.overflow,
            Je(s.a, "keydown", this.boundFullWindowOnEscKey_),
            s.a.documentElement.style.overflow = "hidden",
            ve(s.a.body, "vjs-full-window"),
            this.trigger("enterFullWindow")
        }
        ,
        i.fullWindowOnEscKey = function(e) {
            h.a.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
        }
        ,
        i.exitFullWindow = function() {
            this.isFullWindow = !1,
            Ze(s.a, "keydown", this.boundFullWindowOnEscKey_),
            s.a.documentElement.style.overflow = this.docOrigOverflow,
            _e(s.a.body, "vjs-full-window"),
            this.trigger("exitFullWindow")
        }
        ,
        i.handleKeyDown = function(e) {
            var t = this.options_.userActions;
            if (t && t.hotkeys) {
                var i, n;
                if (i = this.el_.ownerDocument.activeElement,
                "input" === (n = i.tagName.toLowerCase()) ? -1 !== ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(i.type) : -1 === ["textarea"].indexOf(n))
                    "function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e)
            }
        }
        ,
        i.handleHotkeys = function(e) {
            var t = this.options_.userActions ? this.options_.userActions.hotkeys : {}
              , i = t.fullscreenKey
              , n = void 0 === i ? function(e) {
                return h.a.isEventKey(e, "f")
            }
            : i
              , r = t.muteKey
              , a = void 0 === r ? function(e) {
                return h.a.isEventKey(e, "m")
            }
            : r
              , o = t.playPauseKey
              , u = void 0 === o ? function(e) {
                return h.a.isEventKey(e, "k") || h.a.isEventKey(e, "Space")
            }
            : o;
            if (n.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation();
                var l = At.getComponent("FullscreenToggle");
                !1 !== s.a[ei.fullscreenEnabled] && l.prototype.handleClick.call(this)
            } else if (a.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation(),
                At.getComponent("MuteToggle").prototype.handleClick.call(this)
            } else if (u.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation(),
                At.getComponent("PlayToggle").prototype.handleClick.call(this)
            }
        }
        ,
        i.canPlayType = function(e) {
            for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                var r = n[i]
                  , a = Wi.getTech(r);
                if (a || (a = At.getComponent(r)),
                a) {
                    if (a.isSupported() && (t = a.canPlayType(e)))
                        return t
                } else
                    J.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return ""
        }
        ,
        i.selectSource = function(e) {
            var t, i = this, n = this.options_.techOrder.map(function(e) {
                return [e, Wi.getTech(e)]
            }).filter(function(e) {
                var t = e[0]
                  , i = e[1];
                return i ? i.isSupported() : (J.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'),
                !1)
            }), r = function(e, t, i) {
                var n;
                return e.some(function(e) {
                    return t.some(function(t) {
                        if (n = i(e, t))
                            return !0
                    })
                }),
                n
            }, a = function(e, t) {
                var n = e[0];
                if (e[1].canPlaySource(t, i.options_[n.toLowerCase()]))
                    return {
                        source: t,
                        tech: n
                    }
            };
            return (this.options_.sourceOrder ? r(e, n, (t = a,
            function(e, i) {
                return t(i, e)
            }
            )) : r(n, e, a)) || !1
        }
        ,
        i.src = function(e) {
            var t = this;
            if (void 0 === e)
                return this.cache_.src || "";
            var i = function e(t) {
                if (Array.isArray(t)) {
                    var i = [];
                    t.forEach(function(t) {
                        t = e(t),
                        Array.isArray(t) ? i = i.concat(t) : re(t) && i.push(t)
                    }),
                    t = i
                } else
                    t = "string" == typeof t && t.trim() ? [rn({
                        src: t
                    })] : re(t) && "string" == typeof t.src && t.src && t.src.trim() ? [rn(t)] : [];
                return t
            }(e);
            i.length ? (this.changingSrc_ = !0,
            this.cache_.sources = i,
            this.updateSourceCaches_(i[0]),
            Yi(this, i[0], function(e, n) {
                var r, a;
                if (t.middleware_ = n,
                t.cache_.sources = i,
                t.updateSourceCaches_(e),
                t.src_(e))
                    return i.length > 1 ? t.src(i.slice(1)) : (t.changingSrc_ = !1,
                    t.setTimeout(function() {
                        this.error({
                            code: 4,
                            message: this.localize(this.options_.notSupportedMessage)
                        })
                    }, 0),
                    void t.triggerReady());
                r = n,
                a = t.tech_,
                r.forEach(function(e) {
                    return e.setTech && e.setTech(a)
                })
            })) : this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage)
                })
            }, 0)
        }
        ,
        i.src_ = function(e) {
            var t, i, n = this, r = this.selectSource([e]);
            return !r || (t = r.tech,
            i = this.techName_,
            Ct(t) !== Ct(i) ? (this.changingSrc_ = !0,
            this.loadTech_(r.tech, r.source),
            this.tech_.ready(function() {
                n.changingSrc_ = !1
            }),
            !1) : (this.ready(function() {
                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src),
                this.changingSrc_ = !1
            }, !0),
            !1))
        }
        ,
        i.load = function() {
            this.techCall_("load")
        }
        ,
        i.reset = function() {
            var e = this
              , t = this.options_.Promise || r.a.Promise;
            this.paused() || !t ? this.doReset_() : li(this.play().then(function() {
                return e.doReset_()
            }))
        }
        ,
        i.doReset_ = function() {
            this.tech_ && this.tech_.clearTracks("text"),
            this.resetCache_(),
            this.poster(""),
            this.loadTech_(this.options_.techOrder[0], null),
            this.techCall_("reset"),
            this.resetControlBarUI_(),
            ft(this) && this.trigger("playerreset")
        }
        ,
        i.resetControlBarUI_ = function() {
            this.resetProgressBar_(),
            this.resetPlaybackRate_(),
            this.resetVolumeBar_()
        }
        ,
        i.resetProgressBar_ = function() {
            this.currentTime(0);
            var e = this.controlBar
              , t = e.durationDisplay
              , i = e.remainingTimeDisplay;
            t && t.updateContent(),
            i && i.updateContent()
        }
        ,
        i.resetPlaybackRate_ = function() {
            this.playbackRate(this.defaultPlaybackRate()),
            this.handleTechRateChange_()
        }
        ,
        i.resetVolumeBar_ = function() {
            this.volume(1),
            this.trigger("volumechange")
        }
        ,
        i.currentSources = function() {
            var e = this.currentSource()
              , t = [];
            return 0 !== Object.keys(e).length && t.push(e),
            this.cache_.sources || t
        }
        ,
        i.currentSource = function() {
            return this.cache_.source || {}
        }
        ,
        i.currentSrc = function() {
            return this.currentSource() && this.currentSource().src || ""
        }
        ,
        i.currentType = function() {
            return this.currentSource() && this.currentSource().type || ""
        }
        ,
        i.preload = function(e) {
            return void 0 !== e ? (this.techCall_("setPreload", e),
            void (this.options_.preload = e)) : this.techGet_("preload")
        }
        ,
        i.autoplay = function(e) {
            if (void 0 === e)
                return this.options_.autoplay || !1;
            var t;
            "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e,
            this.manualAutoplay_(e),
            t = !1) : this.options_.autoplay = !!e,
            t = void 0 === t ? this.options_.autoplay : t,
            this.tech_ && this.techCall_("setAutoplay", t)
        }
        ,
        i.playsinline = function(e) {
            return void 0 !== e ? (this.techCall_("setPlaysinline", e),
            this.options_.playsinline = e,
            this) : this.techGet_("playsinline")
        }
        ,
        i.loop = function(e) {
            return void 0 !== e ? (this.techCall_("setLoop", e),
            void (this.options_.loop = e)) : this.techGet_("loop")
        }
        ,
        i.poster = function(e) {
            if (void 0 === e)
                return this.poster_;
            e || (e = ""),
            e !== this.poster_ && (this.poster_ = e,
            this.techCall_("setPoster", e),
            this.isPosterFromTech_ = !1,
            this.trigger("posterchange"))
        }
        ,
        i.handleTechPosterChange_ = function() {
            if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                var e = this.tech_.poster() || "";
                e !== this.poster_ && (this.poster_ = e,
                this.isPosterFromTech_ = !0,
                this.trigger("posterchange"))
            }
        }
        ,
        i.controls = function(e) {
            if (void 0 === e)
                return !!this.controls_;
            e = !!e,
            this.controls_ !== e && (this.controls_ = e,
            this.usingNativeControls() && this.techCall_("setControls", e),
            this.controls_ ? (this.removeClass("vjs-controls-disabled"),
            this.addClass("vjs-controls-enabled"),
            this.trigger("controlsenabled"),
            this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"),
            this.addClass("vjs-controls-disabled"),
            this.trigger("controlsdisabled"),
            this.usingNativeControls() || this.removeTechControlsListeners_()))
        }
        ,
        i.usingNativeControls = function(e) {
            if (void 0 === e)
                return !!this.usingNativeControls_;
            e = !!e,
            this.usingNativeControls_ !== e && (this.usingNativeControls_ = e,
            this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"),
            this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"),
            this.trigger("usingcustomcontrols")))
        }
        ,
        i.error = function(e) {
            return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e,
            this.removeClass("vjs-error"),
            void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new si(e),
            this.addClass("vjs-error"),
            J.error("(CODE:" + this.error_.code + " " + si.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
            void this.trigger("error"))
        }
        ,
        i.reportUserActivity = function(e) {
            this.userActivity_ = !0
        }
        ,
        i.userActive = function(e) {
            if (void 0 === e)
                return this.userActive_;
            if ((e = !!e) !== this.userActive_) {
                if (this.userActive_ = e,
                this.userActive_)
                    return this.userActivity_ = !0,
                    this.removeClass("vjs-user-inactive"),
                    this.addClass("vjs-user-active"),
                    void this.trigger("useractive");
                this.tech_ && this.tech_.one("mousemove", function(e) {
                    e.stopPropagation(),
                    e.preventDefault()
                }),
                this.userActivity_ = !1,
                this.removeClass("vjs-user-active"),
                this.addClass("vjs-user-inactive"),
                this.trigger("userinactive")
            }
        }
        ,
        i.listenForUserActivity_ = function() {
            var e, t, i, n = ct(this, this.reportUserActivity);
            this.on("mousedown", function() {
                n(),
                this.clearInterval(e),
                e = this.setInterval(n, 250)
            }),
            this.on("mousemove", function(e) {
                e.screenX === t && e.screenY === i || (t = e.screenX,
                i = e.screenY,
                n())
            }),
            this.on("mouseup", function(t) {
                n(),
                this.clearInterval(e)
            });
            var r, a = this.getChild("controlBar");
            !a || Rt || Bt || (a.on("mouseenter", function(e) {
                this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout,
                this.player().options_.inactivityTimeout = 0
            }),
            a.on("mouseleave", function(e) {
                this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
            })),
            this.on("keydown", n),
            this.on("keyup", n),
            this.setInterval(function() {
                if (this.userActivity_) {
                    this.userActivity_ = !1,
                    this.userActive(!0),
                    this.clearTimeout(r);
                    var e = this.options_.inactivityTimeout;
                    e <= 0 || (r = this.setTimeout(function() {
                        this.userActivity_ || this.userActive(!1)
                    }, e))
                }
            }, 250)
        }
        ,
        i.playbackRate = function(e) {
            if (void 0 === e)
                return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
            this.techCall_("setPlaybackRate", e)
        }
        ,
        i.defaultPlaybackRate = function(e) {
            return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
        }
        ,
        i.isAudio = function(e) {
            if (void 0 === e)
                return !!this.isAudio_;
            this.isAudio_ = !!e
        }
        ,
        i.addTextTrack = function(e, t, i) {
            if (this.tech_)
                return this.tech_.addTextTrack(e, t, i)
        }
        ,
        i.addRemoteTextTrack = function(e, t) {
            if (this.tech_)
                return this.tech_.addRemoteTextTrack(e, t)
        }
        ,
        i.removeRemoteTextTrack = function(e) {
            void 0 === e && (e = {});
            var t = e.track;
            if (t || (t = e),
            this.tech_)
                return this.tech_.removeRemoteTextTrack(t)
        }
        ,
        i.getVideoPlaybackQuality = function() {
            return this.techGet_("getVideoPlaybackQuality")
        }
        ,
        i.videoWidth = function() {
            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
        }
        ,
        i.videoHeight = function() {
            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
        }
        ,
        i.language = function(e) {
            if (void 0 === e)
                return this.language_;
            this.language_ = String(e).toLowerCase()
        }
        ,
        i.languages = function() {
            return Et(t.prototype.options_.languages, this.languages_)
        }
        ,
        i.toJSON = function() {
            var e = Et(this.options_)
              , t = e.tracks;
            e.tracks = [];
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n = Et(n)).player = void 0,
                e.tracks[i] = n
            }
            return e
        }
        ,
        i.createModal = function(e, t) {
            var i = this;
            (t = t || {}).content = e || "";
            var n = new fi(this,t);
            return this.addChild(n),
            n.on("dispose", function() {
                i.removeChild(n)
            }),
            n.open(),
            n
        }
        ,
        i.updateCurrentBreakpoint_ = function() {
            if (this.responsive())
                for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Hr.length; i++) {
                    var n = Hr[i];
                    if (t <= this.breakpoints_[n]) {
                        if (e === n)
                            return;
                        e && this.removeClass(qr[e]),
                        this.addClass(qr[n]),
                        this.breakpoint_ = n;
                        break
                    }
                }
        }
        ,
        i.removeCurrentBreakpoint_ = function() {
            var e = this.currentBreakpointClass();
            this.breakpoint_ = "",
            e && this.removeClass(e)
        }
        ,
        i.breakpoints = function(e) {
            return void 0 === e ? ne(this.breakpoints_) : (this.breakpoint_ = "",
            this.breakpoints_ = ne({}, zr, e),
            this.updateCurrentBreakpoint_(),
            ne(this.breakpoints_))
        }
        ,
        i.responsive = function(e) {
            return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? (this.responsive_ = e,
            e ? (this.on("playerresize", this.updateCurrentBreakpoint_),
            this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_),
            this.removeCurrentBreakpoint_()),
            e) : void 0
        }
        ,
        i.currentBreakpoint = function() {
            return this.breakpoint_
        }
        ,
        i.currentBreakpointClass = function() {
            return qr[this.breakpoint_] || ""
        }
        ,
        i.loadMedia = function(e, t) {
            var i = this;
            if (e && "object" == typeof e) {
                this.reset(),
                this.cache_.media = Et(e);
                var n = this.cache_.media
                  , r = n.artwork
                  , a = n.poster
                  , s = n.src
                  , o = n.textTracks;
                !r && a && (this.cache_.media.artwork = [{
                    src: a,
                    type: nn(a)
                }]),
                s && this.src(s),
                a && this.poster(a),
                Array.isArray(o) && o.forEach(function(e) {
                    return i.addRemoteTextTrack(e, !1)
                }),
                this.ready(t)
            }
        }
        ,
        i.getMedia = function() {
            if (!this.cache_.media) {
                var e = this.poster()
                  , t = {
                    src: this.currentSources(),
                    textTracks: Array.prototype.map.call(this.remoteTextTracks(), function(e) {
                        return {
                            kind: e.kind,
                            label: e.label,
                            language: e.language,
                            src: e.src
                        }
                    })
                };
                return e && (t.poster = e,
                t.artwork = [{
                    src: t.poster,
                    type: nn(t.poster)
                }]),
                t
            }
            return Et(this.cache_.media)
        }
        ,
        t.getTagSettings = function(e) {
            var t = {
                sources: [],
                tracks: []
            }
              , i = Se(e)
              , n = i["data-setup"];
            if (ye(e, "vjs-fill") && (i.fill = !0),
            ye(e, "vjs-fluid") && (i.fluid = !0),
            null !== n) {
                var r = c()(n || "{}")
                  , a = r[0]
                  , s = r[1];
                a && J.error(a),
                ne(i, s)
            }
            if (ne(t, i),
            e.hasChildNodes())
                for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) {
                    var d = o[u]
                      , h = d.nodeName.toLowerCase();
                    "source" === h ? t.sources.push(Se(d)) : "track" === h && t.tracks.push(Se(d))
                }
            return t
        }
        ,
        i.flexNotSupported_ = function() {
            var e = s.a.createElement("i");
            return !("flexBasis"in e.style || "webkitFlexBasis"in e.style || "mozFlexBasis"in e.style || "msFlexBasis"in e.style || "msFlexOrder"in e.style)
        }
        ,
        t
    }(At);
    zi.names.forEach(function(e) {
        var t = zi[e];
        Wr.prototype[t.getterName] = function() {
            return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass,
            this[t.privateName])
        }
    }),
    Wr.players = {};
    var Gr = r.a.navigator;
    Wr.prototype.options_ = {
        techOrder: Wi.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        liveui: !1,
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: Gr && (Gr.languages && Gr.languages[0] || Gr.userLanguage || Gr.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media.",
        breakpoints: {},
        responsive: !1
    },
    ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) {
        Wr.prototype[e] = function() {
            return this.techGet_(e)
        }
    }),
    Fr.forEach(function(e) {
        Wr.prototype["handleTech" + Ct(e) + "_"] = function() {
            return this.trigger(e)
        }
    }),
    At.registerComponent("Player", Wr);
    var $r = {}
      , Xr = function(e) {
        return $r.hasOwnProperty(e)
    }
      , Yr = function(e) {
        return Xr(e) ? $r[e] : void 0
    }
      , Kr = function(e, t) {
        e.activePlugins_ = e.activePlugins_ || {},
        e.activePlugins_[t] = !0
    }
      , Qr = function(e, t, i) {
        var n = (i ? "before" : "") + "pluginsetup";
        e.trigger(n, t),
        e.trigger(n + ":" + t.name, t)
    }
      , Jr = function(e, t) {
        return t.prototype.name = e,
        function() {
            Qr(this, {
                name: e,
                plugin: t,
                instance: null
            }, !0);
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                n[r] = arguments[r];
            var a = $(t, [this].concat(n));
            return this[e] = function() {
                return a
            }
            ,
            Qr(this, a.getEventHash()),
            a
        }
    }
      , Zr = function() {
        function e(t) {
            if (this.constructor === e)
                throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = t,
            St(this),
            delete this.trigger,
            wt(this, this.constructor.defaultState),
            Kr(t, this.name),
            this.dispose = ct(this, this.dispose),
            t.on("dispose", this.dispose)
        }
        var t = e.prototype;
        return t.version = function() {
            return this.constructor.VERSION
        }
        ,
        t.getEventHash = function(e) {
            return void 0 === e && (e = {}),
            e.name = this.name,
            e.plugin = this.constructor,
            e.instance = this,
            e
        }
        ,
        t.trigger = function(e, t) {
            return void 0 === t && (t = {}),
            et(this.eventBusEl_, e, this.getEventHash(t))
        }
        ,
        t.handleStateChanged = function(e) {}
        ,
        t.dispose = function() {
            var e = this.name
              , t = this.player;
            this.trigger("dispose"),
            this.off(),
            t.off("dispose", this.dispose),
            t.activePlugins_[e] = !1,
            this.player = this.state = null,
            t[e] = Jr(e, $r[e])
        }
        ,
        e.isBasic = function(t) {
            var i = "string" == typeof t ? Yr(t) : t;
            return "function" == typeof i && !e.prototype.isPrototypeOf(i.prototype)
        }
        ,
        e.registerPlugin = function(t, i) {
            if ("string" != typeof t)
                throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + ".");
            if (Xr(t))
                J.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
            else if (Wr.prototype.hasOwnProperty(t))
                throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
            if ("function" != typeof i)
                throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof i + ".");
            return $r[t] = i,
            "plugin" !== t && (e.isBasic(i) ? Wr.prototype[t] = function(e, t) {
                var i = function() {
                    Qr(this, {
                        name: e,
                        plugin: t,
                        instance: null
                    }, !0);
                    var i = t.apply(this, arguments);
                    return Kr(this, e),
                    Qr(this, {
                        name: e,
                        plugin: t,
                        instance: i
                    }),
                    i
                };
                return Object.keys(t).forEach(function(e) {
                    i[e] = t[e]
                }),
                i
            }(t, i) : Wr.prototype[t] = Jr(t, i)),
            i
        }
        ,
        e.deregisterPlugin = function(e) {
            if ("plugin" === e)
                throw new Error("Cannot de-register base plugin.");
            Xr(e) && (delete $r[e],
            delete Wr.prototype[e])
        }
        ,
        e.getPlugins = function(e) {
            var t;
            return void 0 === e && (e = Object.keys($r)),
            e.forEach(function(e) {
                var i = Yr(e);
                i && ((t = t || {})[e] = i)
            }),
            t
        }
        ,
        e.getPluginVersion = function(e) {
            var t = Yr(e);
            return t && t.VERSION || ""
        }
        ,
        e
    }();
    Zr.getPlugin = Yr,
    Zr.BASE_PLUGIN_NAME = "plugin",
    Zr.registerPlugin("plugin", Zr),
    Wr.prototype.usingPlugin = function(e) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[e]
    }
    ,
    Wr.prototype.hasPlugin = function(e) {
        return !!Xr(e)
    }
    ;
    var ea = function(e) {
        return 0 === e.indexOf("#") ? e.slice(1) : e
    };
    function ta(e, t, i) {
        var n = ta.getPlayer(e);
        if (n)
            return t && J.warn('Player "' + e + '" is already initialised. Options will not be applied.'),
            i && n.ready(i),
            n;
        var r = "string" == typeof e ? Be("#" + ea(e)) : e;
        if (!de(r))
            throw new TypeError("The element or ID supplied is not valid. (videojs)");
        r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || J.warn("The element supplied is not included in the DOM"),
        t = t || {},
        ta.hooks("beforesetup").forEach(function(e) {
            var i = e(r, Et(t));
            re(i) && !Array.isArray(i) ? t = Et(t, i) : J.error("please return an object in beforesetup hooks")
        });
        var a = At.getComponent("Player");
        return n = new a(r,t,i),
        ta.hooks("setup").forEach(function(e) {
            return e(n)
        }),
        n
    }
    if (ta.hooks_ = {},
    ta.hooks = function(e, t) {
        return ta.hooks_[e] = ta.hooks_[e] || [],
        t && (ta.hooks_[e] = ta.hooks_[e].concat(t)),
        ta.hooks_[e]
    }
    ,
    ta.hook = function(e, t) {
        ta.hooks(e, t)
    }
    ,
    ta.hookOnce = function(e, t) {
        ta.hooks(e, [].concat(t).map(function(t) {
            return function i() {
                return ta.removeHook(e, i),
                t.apply(void 0, arguments)
            }
        }))
    }
    ,
    ta.removeHook = function(e, t) {
        var i = ta.hooks(e).indexOf(t);
        return !(i <= -1) && (ta.hooks_[e] = ta.hooks_[e].slice(),
        ta.hooks_[e].splice(i, 1),
        !0)
    }
    ,
    !0 !== r.a.VIDEOJS_NO_DYNAMIC_STYLE && ce()) {
        var ia = Be(".vjs-styles-defaults");
        if (!ia) {
            ia = ut("vjs-styles-defaults");
            var na = Be("head");
            na && na.insertBefore(ia, na.firstChild),
            lt(ia, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    st(1, ta),
    ta.VERSION = z,
    ta.options = Wr.prototype.options_,
    ta.getPlayers = function() {
        return Wr.players
    }
    ,
    ta.getPlayer = function(e) {
        var t, i = Wr.players;
        if ("string" == typeof e) {
            var n = ea(e)
              , r = i[n];
            if (r)
                return r;
            t = Be("#" + n)
        } else
            t = e;
        if (de(t)) {
            var a = t
              , s = a.player
              , o = a.playerId;
            if (s || i[o])
                return s || i[o]
        }
    }
    ,
    ta.getAllPlayers = function() {
        return Object.keys(Wr.players).map(function(e) {
            return Wr.players[e]
        }).filter(Boolean)
    }
    ,
    ta.players = Wr.players,
    ta.getComponent = At.getComponent,
    ta.registerComponent = function(e, t) {
        Wi.isTech(t) && J.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
        At.registerComponent.call(At, e, t)
    }
    ,
    ta.getTech = Wi.getTech,
    ta.registerTech = Wi.registerTech,
    ta.use = function(e, t) {
        Gi[e] = Gi[e] || [],
        Gi[e].push(t)
    }
    ,
    Object.defineProperty(ta, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }),
    Object.defineProperty(ta.middleware, "TERMINATOR", {
        value: Xi,
        writeable: !1,
        enumerable: !0
    }),
    ta.browser = Xt,
    ta.TOUCH_ENABLED = $t,
    ta.extend = function(e, t) {
        void 0 === t && (t = {});
        var i = function() {
            e.apply(this, arguments)
        }
          , n = {};
        for (var r in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor),
        n = t) : "function" == typeof t && (i = t),
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (e.super_ = t)
        }(i, e),
        n)
            n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    }
    ,
    ta.mergeOptions = Et,
    ta.bind = ct,
    ta.registerPlugin = Zr.registerPlugin,
    ta.deregisterPlugin = Zr.deregisterPlugin,
    ta.plugin = function(e, t) {
        return J.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
        Zr.registerPlugin(e, t)
    }
    ,
    ta.getPlugins = Zr.getPlugins,
    ta.getPlugin = Zr.getPlugin,
    ta.getPluginVersion = Zr.getPluginVersion,
    ta.addLanguage = function(e, t) {
        var i;
        return e = ("" + e).toLowerCase(),
        ta.options.languages = Et(ta.options.languages, ((i = {})[e] = t,
        i)),
        ta.options.languages[e]
    }
    ,
    ta.log = J,
    ta.createLogger = Z,
    ta.createTimeRange = ta.createTimeRanges = Qt,
    ta.formatTime = _n,
    ta.setFormatTime = function(e) {
        vn = e
    }
    ,
    ta.resetFormatTime = function() {
        vn = yn
    }
    ,
    ta.parseUrl = Li,
    ta.isCrossOrigin = xi,
    ta.EventTarget = pt,
    ta.on = Je,
    ta.one = tt,
    ta.off = Ze,
    ta.trigger = et,
    ta.xhr = f.a,
    ta.TextTrack = Mi,
    ta.AudioTrack = Bi,
    ta.VideoTrack = Ni,
    ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(e) {
        ta[e] = function() {
            return J.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"),
            je[e].apply(null, arguments)
        }
    }),
    ta.computedStyle = se,
    ta.dom = je,
    ta.url = Di;
    var ra = function(e, t) {
        return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = v.a.buildAbsoluteURL(r.a.location.href, e)),
        v.a.buildAbsoluteURL(e, t))
    }
      , aa = function(e, t, i) {
        return e && i.responseURL && t !== i.responseURL ? i.responseURL : t
    }
      , sa = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , oa = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , ua = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
      , la = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
      , ca = function() {
        return function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var i = []
                      , n = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value),
                        !t || i.length !== t); n = !0)
                            ;
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return i
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , da = ta.mergeOptions
      , ha = ta.EventTarget
      , pa = ta.log
      , fa = function(e, t) {
        ["AUDIO", "SUBTITLES"].forEach(function(i) {
            for (var n in e.mediaGroups[i])
                for (var r in e.mediaGroups[i][n]) {
                    var a = e.mediaGroups[i][n][r];
                    t(a, i, n, r)
                }
        })
    }
      , ma = function(e, t) {
        var i = da(e, {})
          , n = i.playlists[t.uri];
        if (!n)
            return null;
        if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence)
            return null;
        var r = da(n, t);
        n.segments && (r.segments = function(e, t, i) {
            var n = t.slice();
            i = i || 0;
            for (var r = Math.min(e.length, t.length + i), a = i; a < r; a++)
                n[a - i] = da(e[a], n[a - i]);
            return n
        }(n.segments, t.segments, t.mediaSequence - n.mediaSequence)),
        r.segments.forEach(function(e) {
            !function(e, t) {
                e.resolvedUri || (e.resolvedUri = ra(t, e.uri)),
                e.key && !e.key.resolvedUri && (e.key.resolvedUri = ra(t, e.key.uri)),
                e.map && !e.map.resolvedUri && (e.map.resolvedUri = ra(t, e.map.uri))
            }(e, r.resolvedUri)
        });
        for (var a = 0; a < i.playlists.length; a++)
            i.playlists[a].uri === t.uri && (i.playlists[a] = r);
        return i.playlists[t.uri] = r,
        i
    }
      , ga = function(e) {
        for (var t = e.playlists.length; t--; ) {
            var i = e.playlists[t];
            e.playlists[i.uri] = i,
            i.resolvedUri = ra(e.uri, i.uri),
            i.id = t,
            i.attributes || (i.attributes = {},
            pa.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
        }
    }
      , ya = function(e) {
        fa(e, function(t) {
            t.uri && (t.resolvedUri = ra(e.uri, t.uri))
        })
    }
      , va = function(e, t) {
        var i = e.segments[e.segments.length - 1];
        return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
    }
      , _a = function(e) {
        function t(e, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            sa(this, t);
            var r = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
              , a = n.withCredentials
              , s = void 0 !== a && a
              , o = n.handleManifestRedirects
              , u = void 0 !== o && o;
            r.srcUrl = e,
            r.hls_ = i,
            r.withCredentials = s,
            r.handleManifestRedirects = u;
            var l = i.options_;
            if (r.customTagParsers = l && l.customTagParsers || [],
            r.customTagMappers = l && l.customTagMappers || [],
            !r.srcUrl)
                throw new Error("A non-empty playlist URL is required");
            return r.state = "HAVE_NOTHING",
            r.on("mediaupdatetimeout", function() {
                "HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA",
                r.request = r.hls_.xhr({
                    uri: ra(r.master.uri, r.media().uri),
                    withCredentials: r.withCredentials
                }, function(e, t) {
                    if (r.request)
                        return e ? r.playlistRequestError(r.request, r.media().uri, "HAVE_METADATA") : void r.haveMetadata(r.request, r.media().uri)
                }))
            }),
            r
        }
        return ua(t, ha),
        oa(t, [{
            key: "playlistRequestError",
            value: function(e, t, i) {
                this.request = null,
                i && (this.state = i),
                this.error = {
                    playlist: this.master.playlists[t],
                    status: e.status,
                    message: "HLS playlist request error at URL: " + t,
                    responseText: e.responseText,
                    code: e.status >= 500 ? 4 : 2
                },
                this.trigger("error")
            }
        }, {
            key: "haveMetadata",
            value: function(e, t) {
                var i = this;
                this.request = null,
                this.state = "HAVE_METADATA";
                var n = new E;
                this.customTagParsers.forEach(function(e) {
                    return n.addParser(e)
                }),
                this.customTagMappers.forEach(function(e) {
                    return n.addTagMapper(e)
                }),
                n.push(e.responseText),
                n.end(),
                n.manifest.uri = t,
                n.manifest.attributes = n.manifest.attributes || {};
                var a = ma(this.master, n.manifest);
                this.targetDuration = n.manifest.targetDuration,
                a ? (this.master = a,
                this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"),
                this.media().endList || (r.a.clearTimeout(this.mediaUpdateTimeout),
                this.mediaUpdateTimeout = r.a.setTimeout(function() {
                    i.trigger("mediaupdatetimeout")
                }, va(this.media(), !!a))),
                this.trigger("loadedplaylist")
            }
        }, {
            key: "dispose",
            value: function() {
                this.stopRequest(),
                r.a.clearTimeout(this.mediaUpdateTimeout)
            }
        }, {
            key: "stopRequest",
            value: function() {
                if (this.request) {
                    var e = this.request;
                    this.request = null,
                    e.onreadystatechange = null,
                    e.abort()
                }
            }
        }, {
            key: "media",
            value: function(e) {
                var t = this;
                if (!e)
                    return this.media_;
                if ("HAVE_NOTHING" === this.state)
                    throw new Error("Cannot switch media playlist from " + this.state);
                var i = this.state;
                if ("string" == typeof e) {
                    if (!this.master.playlists[e])
                        throw new Error("Unknown playlist URI: " + e);
                    e = this.master.playlists[e]
                }
                var n = !this.media_ || e.uri !== this.media_.uri;
                if (this.master.playlists[e.uri].endList)
                    return this.request && (this.request.onreadystatechange = null,
                    this.request.abort(),
                    this.request = null),
                    this.state = "HAVE_METADATA",
                    this.media_ = e,
                    void (n && (this.trigger("mediachanging"),
                    this.trigger("mediachange")));
                if (n) {
                    if (this.state = "SWITCHING_MEDIA",
                    this.request) {
                        if (e.resolvedUri === this.request.url)
                            return;
                        this.request.onreadystatechange = null,
                        this.request.abort(),
                        this.request = null
                    }
                    this.media_ && this.trigger("mediachanging"),
                    this.request = this.hls_.xhr({
                        uri: e.resolvedUri,
                        withCredentials: this.withCredentials
                    }, function(n, r) {
                        if (t.request) {
                            if (e.resolvedUri = aa(t.handleManifestRedirects, e.resolvedUri, r),
                            n)
                                return t.playlistRequestError(t.request, e.uri, i);
                            t.haveMetadata(r, e.uri),
                            "HAVE_MASTER" === i ? t.trigger("loadedmetadata") : t.trigger("mediachange")
                        }
                    })
                }
            }
        }, {
            key: "pause",
            value: function() {
                this.stopRequest(),
                r.a.clearTimeout(this.mediaUpdateTimeout),
                "HAVE_NOTHING" === this.state && (this.started = !1),
                "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                r.a.clearTimeout(this.mediaUpdateTimeout);
                var i = this.media();
                if (e) {
                    var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                    this.mediaUpdateTimeout = r.a.setTimeout(function() {
                        return t.load()
                    }, n)
                } else
                    this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                this.started = !0,
                this.request = this.hls_.xhr({
                    uri: this.srcUrl,
                    withCredentials: this.withCredentials
                }, function(t, i) {
                    if (e.request) {
                        if (e.request = null,
                        t)
                            return e.error = {
                                status: i.status,
                                message: "HLS playlist request error at URL: " + e.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            },
                            "HAVE_NOTHING" === e.state && (e.started = !1),
                            e.trigger("error");
                        var n = new E;
                        return e.customTagParsers.forEach(function(e) {
                            return n.addParser(e)
                        }),
                        e.customTagMappers.forEach(function(e) {
                            return n.addTagMapper(e)
                        }),
                        n.push(i.responseText),
                        n.end(),
                        e.state = "HAVE_MASTER",
                        e.srcUrl = aa(e.handleManifestRedirects, e.srcUrl, i),
                        n.manifest.uri = e.srcUrl,
                        n.manifest.playlists ? (e.master = n.manifest,
                        ga(e.master),
                        ya(e.master),
                        e.trigger("loadedplaylist"),
                        void (e.request || e.media(n.manifest.playlists[0]))) : (e.master = {
                            mediaGroups: {
                                AUDIO: {},
                                VIDEO: {},
                                "CLOSED-CAPTIONS": {},
                                SUBTITLES: {}
                            },
                            uri: r.a.location.href,
                            playlists: [{
                                uri: e.srcUrl,
                                id: 0,
                                resolvedUri: e.srcUrl,
                                attributes: {}
                            }]
                        },
                        e.master.playlists[e.srcUrl] = e.master.playlists[0],
                        e.haveMetadata(i, e.srcUrl),
                        e.trigger("loadedmetadata"))
                    }
                })
            }
        }]),
        t
    }()
      , ba = ta.createTimeRange
      , Ta = function(e, t, i) {
        var n, r;
        return void 0 === t && (t = e.mediaSequence + e.segments.length),
        t < e.mediaSequence ? 0 : (n = function(e, t) {
            var i = 0
              , n = t - e.mediaSequence
              , r = e.segments[n];
            if (r) {
                if (void 0 !== r.start)
                    return {
                        result: r.start,
                        precise: !0
                    };
                if (void 0 !== r.end)
                    return {
                        result: r.end - r.duration,
                        precise: !0
                    }
            }
            for (; n--; ) {
                if (void 0 !== (r = e.segments[n]).end)
                    return {
                        result: i + r.end,
                        precise: !0
                    };
                if (i += r.duration,
                void 0 !== r.start)
                    return {
                        result: i + r.start,
                        precise: !0
                    }
            }
            return {
                result: i,
                precise: !1
            }
        }(e, t)).precise ? n.result : (r = function(e, t) {
            for (var i = 0, n = void 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
                if (void 0 !== (n = e.segments[r]).start)
                    return {
                        result: n.start - i,
                        precise: !0
                    };
                if (i += n.duration,
                void 0 !== n.end)
                    return {
                        result: n.end - i,
                        precise: !0
                    }
            }
            return {
                result: -1,
                precise: !1
            }
        }(e, t)).precise ? r.result : n.result + i
    }
      , Sa = function(e, t, i) {
        if (!e)
            return 0;
        if ("number" != typeof i && (i = 0),
        void 0 === t) {
            if (e.totalDuration)
                return e.totalDuration;
            if (!e.endList)
                return r.a.Infinity
        }
        return Ta(e, t, i)
    }
      , ka = function(e, t, i) {
        var n = 0;
        if (t > i) {
            var r = [i, t];
            t = r[0],
            i = r[1]
        }
        if (t < 0) {
            for (var a = t; a < Math.min(0, i); a++)
                n += e.targetDuration;
            t = 0
        }
        for (var s = t; s < i; s++)
            n += e.segments[s].duration;
        return n
    }
      , wa = function(e) {
        if (!e.segments.length)
            return 0;
        for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, n = i + 2 * e.targetDuration; t-- && !((i += e.segments[t].duration) >= n); )
            ;
        return Math.max(0, t)
    }
      , Ca = function(e, t, i) {
        if (!e || !e.segments)
            return null;
        if (e.endList)
            return Sa(e);
        if (null === t)
            return null;
        t = t || 0;
        var n = i ? wa(e) : e.segments.length;
        return Ta(e, e.mediaSequence + n, t)
    }
      , Ea = function(e) {
        return e - Math.floor(e) == 0
    }
      , Aa = function(e, t) {
        if (Ea(t))
            return t + .1 * e;
        for (var i = t.toString().split(".")[1].length, n = 1; n <= i; n++) {
            var r = Math.pow(10, n)
              , a = t * r;
            if (Ea(a) || n === i)
                return (a + e) / r
        }
    }
      , Pa = Aa.bind(null, 1)
      , La = Aa.bind(null, -1)
      , Oa = function(e) {
        return e.excludeUntil && e.excludeUntil > Date.now()
    }
      , Ia = function(e) {
        return e.excludeUntil && e.excludeUntil === 1 / 0
    }
      , xa = function(e) {
        var t = Oa(e);
        return !e.disabled && !t
    }
      , Da = function(e, t) {
        return t.attributes && t.attributes[e]
    }
      , Ua = function(e, t) {
        if (1 === e.playlists.length)
            return !0;
        var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
        return 0 === e.playlists.filter(function(e) {
            return !!xa(e) && (e.attributes.BANDWIDTH || 0) < i
        }).length
    }
      , Ra = {
        duration: Sa,
        seekable: function(e, t) {
            var i = t || 0
              , n = Ca(e, t, !0);
            return null === n ? ba() : ba(i, n)
        },
        safeLiveIndex: wa,
        getMediaInfoForTime: function(e, t, i, n) {
            var r = void 0
              , a = void 0
              , s = e.segments.length
              , o = t - n;
            if (o < 0) {
                if (i > 0)
                    for (r = i - 1; r >= 0; r--)
                        if (a = e.segments[r],
                        (o += La(a.duration)) > 0)
                            return {
                                mediaIndex: r,
                                startTime: n - ka(e, i, r)
                            };
                return {
                    mediaIndex: 0,
                    startTime: t
                }
            }
            if (i < 0) {
                for (r = i; r < 0; r++)
                    if ((o -= e.targetDuration) < 0)
                        return {
                            mediaIndex: 0,
                            startTime: t
                        };
                i = 0
            }
            for (r = i; r < s; r++)
                if (a = e.segments[r],
                (o -= Pa(a.duration)) < 0)
                    return {
                        mediaIndex: r,
                        startTime: n + ka(e, i, r)
                    };
            return {
                mediaIndex: s - 1,
                startTime: t
            }
        },
        isEnabled: xa,
        isDisabled: function(e) {
            return e.disabled
        },
        isBlacklisted: Oa,
        isIncompatible: Ia,
        playlistEnd: Ca,
        isAes: function(e) {
            for (var t = 0; t < e.segments.length; t++)
                if (e.segments[t].key)
                    return !0;
            return !1
        },
        isFmp4: function(e) {
            for (var t = 0; t < e.segments.length; t++)
                if (e.segments[t].map)
                    return !0;
            return !1
        },
        hasAttribute: Da,
        estimateSegmentRequestTime: function(e, t, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (!Da("BANDWIDTH", i))
                return NaN;
            var r = e * i.attributes.BANDWIDTH;
            return (r - 8 * n) / t
        },
        isLowestEnabledRendition: Ua
    }
      , Ma = ta.xhr
      , Ba = ta.mergeOptions
      , Na = function() {
        return function e(t, i) {
            t = Ba({
                timeout: 45e3
            }, t);
            var n = e.beforeRequest || ta.Hls.xhr.beforeRequest;
            if (n && "function" == typeof n) {
                var r = n(t);
                r && (t = r)
            }
            var a = Ma(t, function(e, t) {
                var n = a.response;
                !e && n && (a.responseTime = Date.now(),
                a.roundTripTime = a.responseTime - a.requestTime,
                a.bytesReceived = n.byteLength || n.length,
                a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))),
                t.headers && (a.responseHeaders = t.headers),
                e && "ETIMEDOUT" === e.code && (a.timedout = !0),
                e || a.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (a && (n || a.responseText)))),
                i(e, a)
            })
              , s = a.abort;
            return a.abort = function() {
                return a.aborted = !0,
                s.apply(a, arguments)
            }
            ,
            a.uri = t.uri,
            a.requestTime = Date.now(),
            a
        }
    }
      , ja = function(e, t) {
        return e.start(t) + "-" + e.end(t)
    }
      , Fa = function(e, t) {
        var i = e.toString(16);
        return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
    }
      , Va = function(e) {
        return e >= 32 && e < 126 ? String.fromCharCode(e) : "."
    }
      , Ha = function(e) {
        var t = {};
        return Object.keys(e).forEach(function(i) {
            var n = e[i];
            ArrayBuffer.isView(n) ? t[i] = {
                bytes: n.buffer,
                byteOffset: n.byteOffset,
                byteLength: n.byteLength
            } : t[i] = n
        }),
        t
    }
      , qa = function(e) {
        var t = e.byterange || {
            length: 1 / 0,
            offset: 0
        };
        return [t.length, t.offset, e.resolvedUri].join(",")
    }
      , za = function(e) {
        for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++)
            i += t.slice(16 * n, 16 * n + 16).map(Fa).join("") + " " + t.slice(16 * n, 16 * n + 16).map(Va).join("") + "\n";
        return i
    }
      , Wa = Object.freeze({
        createTransferableMessage: Ha,
        initSegmentId: qa,
        hexDump: za,
        tagDump: function(e) {
            var t = e.bytes;
            return za(t)
        },
        textRanges: function(e) {
            var t = ""
              , i = void 0;
            for (i = 0; i < e.length; i++)
                t += ja(e, i) + " ";
            return t
        }
    })
      , Ga = function(e) {
        var t = e.playlist
          , i = e.time
          , n = void 0 === i ? void 0 : i
          , r = e.callback;
        if (!r)
            throw new Error("getProgramTime: callback must be provided");
        if (!t || void 0 === n)
            return r({
                message: "getProgramTime: playlist and time must be provided"
            });
        var a = function(e, t) {
            if (!t || !t.segments || 0 === t.segments.length)
                return null;
            for (var i = 0, n = void 0, r = 0; r < t.segments.length && !(e <= (i = (n = t.segments[r]).videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationEnd : i + n.duration)); r++)
                ;
            var a = t.segments[t.segments.length - 1];
            if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e)
                return null;
            if (e > i) {
                if (e > i + .25 * a.duration)
                    return null;
                n = a
            }
            return {
                segment: n,
                estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : i - n.duration,
                type: n.videoTimingInfo ? "accurate" : "estimate"
            }
        }(n, t);
        if (!a)
            return r({
                message: "valid programTime was not found"
            });
        if ("estimate" === a.type)
            return r({
                message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                seekTime: a.estimatedStart
            });
        var s = {
            mediaSeconds: n
        }
          , o = function(e, t) {
            if (!t.dateTimeObject)
                return null;
            var i = t.videoTimingInfo.transmuxerPrependedSeconds
              , n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
            return new Date(t.dateTimeObject.getTime() + 1e3 * n)
        }(n, a.segment);
        return o && (s.programDateTime = o.toISOString()),
        r(null, s)
    }
      , $a = function e(t) {
        var i = t.programTime
          , n = t.playlist
          , r = t.retryCount
          , a = void 0 === r ? 2 : r
          , s = t.seekTo
          , o = t.pauseAfterSeek
          , u = void 0 === o || o
          , l = t.tech
          , c = t.callback;
        if (!c)
            throw new Error("seekToProgramTime: callback must be provided");
        if (void 0 === i || !n || !s)
            return c({
                message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
            });
        if (!n.endList && !l.hasStarted_)
            return c({
                message: "player must be playing a live stream to start buffering"
            });
        if (!function(e) {
            if (!e.segments || 0 === e.segments.length)
                return !1;
            for (var t = 0; t < e.segments.length; t++)
                if (!e.segments[t].dateTimeObject)
                    return !1;
            return !0
        }(n))
            return c({
                message: "programDateTime tags must be provided in the manifest " + n.resolvedUri
            });
        var d = function(e, t) {
            var i = void 0;
            try {
                i = new Date(e)
            } catch (e) {
                return null
            }
            if (!t || !t.segments || 0 === t.segments.length)
                return null;
            var n = t.segments[0];
            if (i < n.dateTimeObject)
                return null;
            for (var r = 0; r < t.segments.length - 1 && (n = t.segments[r],
            !(i < t.segments[r + 1].dateTimeObject)); r++)
                ;
            var a, s = t.segments[t.segments.length - 1], o = s.dateTimeObject, u = s.videoTimingInfo ? (a = s.videoTimingInfo).transmuxedPresentationEnd - a.transmuxedPresentationStart - a.transmuxerPrependedSeconds : s.duration + .25 * s.duration;
            return i > new Date(o.getTime() + 1e3 * u) ? null : (i > o && (n = s),
            {
                segment: n,
                estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : Ra.duration(t, t.mediaSequence + t.segments.indexOf(n)),
                type: n.videoTimingInfo ? "accurate" : "estimate"
            })
        }(i, n);
        if (!d)
            return c({
                message: i + " was not found in the stream"
            });
        var h = d.segment
          , p = function(e, t) {
            var i = void 0
              , n = void 0;
            try {
                i = new Date(e),
                n = new Date(t)
            } catch (e) {}
            var r = i.getTime();
            return (n.getTime() - r) / 1e3
        }(h.dateTimeObject, i);
        if ("estimate" === d.type)
            return 0 === a ? c({
                message: i + " is not buffered yet. Try again"
            }) : (s(d.estimatedStart + p),
            void l.one("seeked", function() {
                e({
                    programTime: i,
                    playlist: n,
                    retryCount: a - 1,
                    seekTo: s,
                    pauseAfterSeek: u,
                    tech: l,
                    callback: c
                })
            }));
        var f = h.start + p;
        l.one("seeked", function() {
            return c(null, l.currentTime())
        }),
        u && l.pause(),
        s(f)
    }
      , Xa = function(e, t) {
        var i = []
          , n = void 0;
        if (e && e.length)
            for (n = 0; n < e.length; n++)
                t(e.start(n), e.end(n)) && i.push([e.start(n), e.end(n)]);
        return ta.createTimeRanges(i)
    }
      , Ya = function(e, t) {
        return Xa(e, function(e, i) {
            return e - 1 / 30 <= t && i + 1 / 30 >= t
        })
    }
      , Ka = function(e, t) {
        return Xa(e, function(e) {
            return e - 1 / 30 >= t
        })
    }
      , Qa = function(e) {
        var t = [];
        if (!e || !e.length)
            return "";
        for (var i = 0; i < e.length; i++)
            t.push(e.start(i) + " => " + e.end(i));
        return t.join(", ")
    }
      , Ja = function(e) {
        for (var t = [], i = 0; i < e.length; i++)
            t.push({
                start: e.start(i),
                end: e.end(i)
            });
        return t
    }
      , Za = function(e, t, i) {
        var n = void 0
          , r = void 0;
        if (i && i.cues)
            for (n = i.cues.length; n--; )
                (r = i.cues[n]).startTime <= t && r.endTime >= e && i.removeCue(r)
    }
      , es = function(e) {
        return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
    }
      , ts = function(e, t, i) {
        var n = r.a.WebKitDataCue || r.a.VTTCue;
        if (t && t.forEach(function(e) {
            var t = e.stream;
            this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset,e.endTime + this.timestampOffset,e.text))
        }, e),
        i) {
            var a = es(e.mediaSource_.duration);
            if (i.forEach(function(e) {
                var t = e.cueTime + this.timestampOffset;
                !("number" != typeof t || r.a.isNaN(t) || t < 0) && t < 1 / 0 && e.frames.forEach(function(e) {
                    var i = new n(t,t,e.value || e.url || e.data || "");
                    i.frame = e,
                    i.value = e,
                    function(e) {
                        Object.defineProperties(e.frame, {
                            id: {
                                get: function() {
                                    return ta.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),
                                    e.value.key
                                }
                            },
                            value: {
                                get: function() {
                                    return ta.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),
                                    e.value.data
                                }
                            },
                            privateData: {
                                get: function() {
                                    return ta.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),
                                    e.value.data
                                }
                            }
                        })
                    }(i),
                    this.metadataTrack_.addCue(i)
                }, this)
            }, e),
            e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length) {
                for (var s = e.metadataTrack_.cues, o = [], u = 0; u < s.length; u++)
                    s[u] && o.push(s[u]);
                var l = o.reduce(function(e, t) {
                    var i = e[t.startTime] || [];
                    return i.push(t),
                    e[t.startTime] = i,
                    e
                }, {})
                  , c = Object.keys(l).sort(function(e, t) {
                    return Number(e) - Number(t)
                });
                c.forEach(function(e, t) {
                    var i = l[e]
                      , n = Number(c[t + 1]) || a;
                    i.forEach(function(e) {
                        e.endTime = n
                    })
                })
            }
        }
    }
      , is = "undefined" != typeof window ? window : {}
      , ns = "undefined" == typeof Symbol ? "__target" : Symbol()
      , rs = "application/javascript"
      , as = is.BlobBuilder || is.WebKitBlobBuilder || is.MozBlobBuilder || is.MSBlobBuilder
      , ss = is.URL || is.webkitURL || ss && ss.msURL
      , os = is.Worker;
    function us(e, t) {
        return function(i) {
            var n = this;
            if (!t)
                return new os(e);
            if (os && !i) {
                var r = hs(t.toString().replace(/^function.+?{/, "").slice(0, -1));
                return this[ns] = new os(r),
                function(e, t) {
                    if (!e || !t)
                        return;
                    var i = e.terminate;
                    e.objURL = t,
                    e.terminate = function() {
                        e.objURL && ss.revokeObjectURL(e.objURL),
                        i.call(e)
                    }
                }(this[ns], r),
                this[ns]
            }
            var a = {
                postMessage: function(e) {
                    n.onmessage && setTimeout(function() {
                        n.onmessage({
                            data: e,
                            target: a
                        })
                    })
                }
            };
            t.call(a),
            this.postMessage = function(e) {
                setTimeout(function() {
                    a.onmessage({
                        data: e,
                        target: n
                    })
                })
            }
            ,
            this.isThisThread = !0
        }
    }
    if (os) {
        var ls, cs = hs("self.onmessage = function () {}"), ds = new Uint8Array(1);
        try {
            (ls = new os(cs)).postMessage(ds, [ds.buffer])
        } catch (e) {
            os = null
        } finally {
            ss.revokeObjectURL(cs),
            ls && ls.terminate()
        }
    }
    function hs(e) {
        try {
            return ss.createObjectURL(new Blob([e],{
                type: rs
            }))
        } catch (i) {
            var t = new as;
            return t.append(e),
            ss.createObjectURL(t.getBlob(type))
        }
    }
    var ps = new us("./transmuxer-worker.worker.js",function(e, t) {
        var i = this;
        !function() {
            var e, t, n, r, a, s, o, u, l, c, d, h, p, f, m, g, y, v, _, b, T, S, k, w, C, E, A, P, L, O, I, x, D, U, R, M, B, N, j, F, V = Math.pow(2, 32) - 1;
            !function() {
                var e;
                if (S = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    mvex: [],
                    mvhd: [],
                    sdtp: [],
                    smhd: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    styp: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: []
                },
                "undefined" != typeof Uint8Array) {
                    for (e in S)
                        S.hasOwnProperty(e) && (S[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    k = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]),
                    C = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]),
                    w = new Uint8Array([0, 0, 0, 1]),
                    E = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                    A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
                    P = {
                        video: E,
                        audio: A
                    },
                    I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                    O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    D = x,
                    U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    R = x,
                    L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                }
            }(),
            e = function(e) {
                var t, i, n = [], r = 0;
                for (t = 1; t < arguments.length; t++)
                    n.push(arguments[t]);
                for (t = n.length; t--; )
                    r += n[t].byteLength;
                for (i = new Uint8Array(r + 8),
                new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0, i.byteLength),
                i.set(e, 4),
                t = 0,
                r = 8; t < n.length; t++)
                    i.set(n[t], r),
                    r += n[t].byteLength;
                return i
            }
            ,
            t = function() {
                return e(S.dinf, e(S.dref, I))
            }
            ,
            n = function(t) {
                return e(S.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
            }
            ,
            m = function(t) {
                return e(S.hdlr, P[t])
            }
            ,
            f = function(t) {
                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
                return t.samplerate && (i[12] = t.samplerate >>> 24 & 255,
                i[13] = t.samplerate >>> 16 & 255,
                i[14] = t.samplerate >>> 8 & 255,
                i[15] = 255 & t.samplerate),
                e(S.mdhd, i)
            }
            ,
            p = function(t) {
                return e(S.mdia, f(t), m(t.type), s(t))
            }
            ,
            a = function(t) {
                return e(S.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
            }
            ,
            s = function(i) {
                return e(S.minf, "video" === i.type ? e(S.vmhd, L) : e(S.smhd, O), t(), y(i))
            }
            ,
            o = function(t, i) {
                for (var n = [], r = i.length; r--; )
                    n[r] = _(i[r]);
                return e.apply(null, [S.moof, a(t)].concat(n))
            }
            ,
            u = function(t) {
                for (var i = t.length, n = []; i--; )
                    n[i] = d(t[i]);
                return e.apply(null, [S.moov, c(4294967295)].concat(n).concat(l(t)))
            }
            ,
            l = function(t) {
                for (var i = t.length, n = []; i--; )
                    n[i] = b(t[i]);
                return e.apply(null, [S.mvex].concat(n))
            }
            ,
            c = function(t) {
                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return e(S.mvhd, i)
            }
            ,
            g = function(t) {
                var i, n, r = t.samples || [], a = new Uint8Array(4 + r.length);
                for (n = 0; n < r.length; n++)
                    i = r[n].flags,
                    a[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                return e(S.sdtp, a)
            }
            ,
            y = function(t) {
                return e(S.stbl, v(t), e(S.stts, R), e(S.stsc, D), e(S.stsz, U), e(S.stco, x))
            }
            ,
            v = function(t) {
                return e(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === t.type ? M(t) : B(t))
            }
            ,
            M = function(t) {
                var i, n = t.sps || [], r = t.pps || [], a = [], s = [];
                for (i = 0; i < n.length; i++)
                    a.push((65280 & n[i].byteLength) >>> 8),
                    a.push(255 & n[i].byteLength),
                    a = a.concat(Array.prototype.slice.call(n[i]));
                for (i = 0; i < r.length; i++)
                    s.push((65280 & r[i].byteLength) >>> 8),
                    s.push(255 & r[i].byteLength),
                    s = s.concat(Array.prototype.slice.call(r[i]));
                return e(S.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), e(S.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([n.length]).concat(a).concat([r.length]).concat(s))), e(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
            }
            ,
            B = function(t) {
                return e(S.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), n(t))
            }
            ,
            h = function(t) {
                var i = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
                return e(S.tkhd, i)
            }
            ,
            _ = function(t) {
                var i, n, r, a, s, o;
                return i = e(S.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                s = Math.floor(t.baseMediaDecodeTime / (V + 1)),
                o = Math.floor(t.baseMediaDecodeTime % (V + 1)),
                n = e(S.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])),
                92,
                "audio" === t.type ? (r = T(t, 92),
                e(S.traf, i, n, r)) : (a = g(t),
                r = T(t, a.length + 92),
                e(S.traf, i, n, r, a))
            }
            ,
            d = function(t) {
                return t.duration = t.duration || 4294967295,
                e(S.trak, h(t), p(t))
            }
            ,
            b = function(t) {
                var i = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                return "video" !== t.type && (i[i.length - 1] = 0),
                e(S.trex, i)
            }
            ,
            F = function(e, t) {
                var i = 0
                  , n = 0
                  , r = 0
                  , a = 0;
                return e.length && (void 0 !== e[0].duration && (i = 1),
                void 0 !== e[0].size && (n = 2),
                void 0 !== e[0].flags && (r = 4),
                void 0 !== e[0].compositionTimeOffset && (a = 8)),
                [0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
            }
            ,
            j = function(t, i) {
                var n, r, a, s;
                for (i += 20 + 16 * (r = t.samples || []).length,
                n = F(r, i),
                s = 0; s < r.length; s++)
                    a = r[s],
                    n = n.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size, a.flags.isLeading << 2 | a.flags.dependsOn, a.flags.isDependedOn << 6 | a.flags.hasRedundancy << 4 | a.flags.paddingValue << 1 | a.flags.isNonSyncSample, 61440 & a.flags.degradationPriority, 15 & a.flags.degradationPriority, (4278190080 & a.compositionTimeOffset) >>> 24, (16711680 & a.compositionTimeOffset) >>> 16, (65280 & a.compositionTimeOffset) >>> 8, 255 & a.compositionTimeOffset]);
                return e(S.trun, new Uint8Array(n))
            }
            ,
            N = function(t, i) {
                var n, r, a, s;
                for (i += 20 + 8 * (r = t.samples || []).length,
                n = F(r, i),
                s = 0; s < r.length; s++)
                    a = r[s],
                    n = n.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size]);
                return e(S.trun, new Uint8Array(n))
            }
            ,
            T = function(e, t) {
                return "audio" === e.type ? N(e, t) : j(e, t)
            }
            ;
            var H, q, z, W, G, $ = {
                ftyp: r = function() {
                    return e(S.ftyp, k, w, k, C)
                }
                ,
                mdat: function(t) {
                    return e(S.mdat, t)
                },
                moof: o,
                moov: u,
                initSegment: function(e) {
                    var t, i = r(), n = u(e);
                    return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i),
                    t.set(n, i.byteLength),
                    t
                }
            }, X = function(e) {
                return e >>> 0
            };
            z = function(e) {
                return H(e, ["moov", "trak"]).reduce(function(e, t) {
                    var i, n, r, a, s;
                    return (i = H(t, ["tkhd"])[0]) ? (n = i[0],
                    a = X(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]),
                    (s = H(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20,
                    e[a] = X(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]),
                    e) : null) : null
                }, {})
            }
            ,
            W = function(e, t) {
                var i, n, r;
                return i = H(t, ["moof", "traf"]),
                n = [].concat.apply([], i.map(function(t) {
                    return H(t, ["tfhd"]).map(function(i) {
                        var n, r;
                        return n = X(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]),
                        r = e[n] || 9e4,
                        (H(t, ["tfdt"]).map(function(e) {
                            var t, i;
                            return t = e[0],
                            i = X(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]),
                            1 === t && (i *= Math.pow(2, 32),
                            i += X(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
                            i
                        })[0] || 1 / 0) / r
                    })
                })),
                r = Math.min.apply(null, n),
                isFinite(r) ? r : 0
            }
            ,
            G = function(e) {
                var t = H(e, ["moov", "trak"])
                  , i = [];
                return t.forEach(function(e) {
                    var t = H(e, ["mdia", "hdlr"])
                      , n = H(e, ["tkhd"]);
                    t.forEach(function(e, t) {
                        var r, a, s = q(e.subarray(8, 12)), o = n[t];
                        "vide" === s && (a = 0 === (r = new DataView(o.buffer,o.byteOffset,o.byteLength)).getUint8(0) ? r.getUint32(12) : r.getUint32(20),
                        i.push(a))
                    })
                }),
                i
            }
            ;
            var Y = {
                findBox: H = function(e, t) {
                    var i, n, r, a, s, o = [];
                    if (!t.length)
                        return null;
                    for (i = 0; i < e.byteLength; )
                        n = X(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]),
                        r = q(e.subarray(i + 4, i + 8)),
                        a = n > 1 ? i + n : e.byteLength,
                        r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) : (s = H(e.subarray(i + 8, a), t.slice(1))).length && (o = o.concat(s))),
                        i = a;
                    return o
                }
                ,
                parseType: q = function(e) {
                    var t = "";
                    return t += String.fromCharCode(e[0]),
                    t += String.fromCharCode(e[1]),
                    t += String.fromCharCode(e[2]),
                    t += String.fromCharCode(e[3])
                }
                ,
                timescale: z,
                startTime: W,
                videoTrackIds: G
            }
              , K = function() {
                this.init = function() {
                    var e = {};
                    this.on = function(t, i) {
                        e[t] || (e[t] = []),
                        e[t] = e[t].concat(i)
                    }
                    ,
                    this.off = function(t, i) {
                        var n;
                        return !!e[t] && (n = e[t].indexOf(i),
                        e[t] = e[t].slice(),
                        e[t].splice(n, 1),
                        n > -1)
                    }
                    ,
                    this.trigger = function(t) {
                        var i, n, r, a;
                        if (i = e[t])
                            if (2 === arguments.length)
                                for (r = i.length,
                                n = 0; n < r; ++n)
                                    i[n].call(this, arguments[1]);
                            else {
                                for (a = [],
                                n = arguments.length,
                                n = 1; n < arguments.length; ++n)
                                    a.push(arguments[n]);
                                for (r = i.length,
                                n = 0; n < r; ++n)
                                    i[n].apply(this, a)
                            }
                    }
                    ,
                    this.dispose = function() {
                        e = {}
                    }
                }
            };
            K.prototype.pipe = function(e) {
                return this.on("data", function(t) {
                    e.push(t)
                }),
                this.on("done", function(t) {
                    e.flush(t)
                }),
                e
            }
            ,
            K.prototype.push = function(e) {
                this.trigger("data", e)
            }
            ,
            K.prototype.flush = function(e) {
                this.trigger("done", e)
            }
            ;
            var Q, J, Z, ee, te, ie, ne, re = K, ae = function(e, t) {
                var i = {
                    size: 0,
                    flags: {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradationPriority: 0,
                        isNonSyncSample: 1
                    }
                };
                return i.dataOffset = t,
                i.compositionTimeOffset = e.pts - e.dts,
                i.duration = e.duration,
                i.size = 4 * e.length,
                i.size += e.byteLength,
                e.keyFrame && (i.flags.dependsOn = 2,
                i.flags.isNonSyncSample = 0),
                i
            }, se = function(e) {
                var t, i, n = [], r = [];
                for (n.byteLength = 0,
                t = 0; t < e.length; t++)
                    "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts,
                    r.push(n)),
                    (n = [i]).byteLength = i.data.byteLength,
                    n.pts = i.pts,
                    n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0),
                    n.duration = i.dts - n.dts,
                    n.byteLength += i.data.byteLength,
                    n.push(i));
                return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
                r.push(n),
                r
            }, oe = function(e) {
                var t, i, n = [], r = [];
                for (n.byteLength = 0,
                n.nalCount = 0,
                n.duration = 0,
                n.pts = e[0].pts,
                n.dts = e[0].dts,
                r.byteLength = 0,
                r.nalCount = 0,
                r.duration = 0,
                r.pts = e[0].pts,
                r.dts = e[0].dts,
                t = 0; t < e.length; t++)
                    (i = e[t]).keyFrame ? (n.length && (r.push(n),
                    r.byteLength += n.byteLength,
                    r.nalCount += n.nalCount,
                    r.duration += n.duration),
                    (n = [i]).nalCount = i.length,
                    n.byteLength = i.byteLength,
                    n.pts = i.pts,
                    n.dts = i.dts,
                    n.duration = i.duration) : (n.duration += i.duration,
                    n.nalCount += i.length,
                    n.byteLength += i.byteLength,
                    n.push(i));
                return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
                r.byteLength += n.byteLength,
                r.nalCount += n.nalCount,
                r.duration += n.duration,
                r.push(n),
                r
            }, ue = function(e) {
                var t;
                return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(),
                e.byteLength -= t.byteLength,
                e.nalCount -= t.nalCount,
                e[0][0].dts = t.dts,
                e[0][0].pts = t.pts,
                e[0][0].duration += t.duration),
                e
            }, le = function(e, t) {
                var i, n, r, a, s, o = t || 0, u = [];
                for (i = 0; i < e.length; i++)
                    for (a = e[i],
                    n = 0; n < a.length; n++)
                        s = a[n],
                        o += (r = ae(s, o)).size,
                        u.push(r);
                return u
            }, ce = function(e) {
                var t, i, n, r, a, s, o = 0, u = e.byteLength, l = e.nalCount, c = new Uint8Array(u + 4 * l), d = new DataView(c.buffer);
                for (t = 0; t < e.length; t++)
                    for (r = e[t],
                    i = 0; i < r.length; i++)
                        for (a = r[i],
                        n = 0; n < a.length; n++)
                            s = a[n],
                            d.setUint32(o, s.data.byteLength),
                            o += 4,
                            c.set(s.data, o),
                            o += s.data.byteLength;
                return c
            }, de = [33, 16, 5, 32, 164, 27], he = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], pe = function(e) {
                for (var t = []; e--; )
                    t.push(0);
                return t
            }, fe = {
                96000: [de, [227, 64], pe(154), [56]],
                88200: [de, [231], pe(170), [56]],
                64000: [de, [248, 192], pe(240), [56]],
                48000: [de, [255, 192], pe(268), [55, 148, 128], pe(54), [112]],
                44100: [de, [255, 192], pe(268), [55, 163, 128], pe(84), [112]],
                32000: [de, [255, 192], pe(268), [55, 234], pe(226), [112]],
                24000: [de, [255, 192], pe(268), [55, 255, 128], pe(268), [111, 112], pe(126), [224]],
                16000: [de, [255, 192], pe(268), [55, 255, 128], pe(268), [111, 255], pe(269), [223, 108], pe(195), [1, 192]],
                12000: [he, pe(268), [3, 127, 248], pe(268), [6, 255, 240], pe(268), [13, 255, 224], pe(268), [27, 253, 128], pe(259), [56]],
                11025: [he, pe(268), [3, 127, 248], pe(268), [6, 255, 240], pe(268), [13, 255, 224], pe(268), [27, 255, 192], pe(268), [55, 175, 128], pe(108), [112]],
                8000: [he, pe(268), [3, 121, 16], pe(47), [7]]
            }, me = (Q = fe,
            Object.keys(Q).reduce(function(e, t) {
                return e[t] = new Uint8Array(Q[t].reduce(function(e, t) {
                    return e.concat(t)
                }, [])),
                e
            }, {}));
            ie = function(e, t) {
                return J(te(e, t))
            }
            ,
            ne = function(e, t) {
                return Z(ee(e), t)
            }
            ;
            J = function(e) {
                return 9e4 * e
            }
            ,
            Z = function(e, t) {
                return e * t
            }
            ,
            ee = function(e) {
                return e / 9e4
            }
            ,
            te = function(e, t) {
                return e / t
            }
            ;
            var ge = ie
              , ye = ne
              , ve = function(e, t, i, n) {
                var r, a, s, o, u = 0, l = 0, c = 0;
                if (t.length && (r = ge(e.baseMediaDecodeTime, e.samplerate),
                a = Math.ceil(9e4 / (e.samplerate / 1024)),
                i && n && (u = r - Math.max(i, n),
                c = (l = Math.floor(u / a)) * a),
                !(l < 1 || c > 45e3))) {
                    for ((s = me[e.samplerate]) || (s = t[0].data),
                    o = 0; o < l; o++)
                        t.splice(o, 0, {
                            data: s
                        });
                    e.baseMediaDecodeTime -= Math.floor(ye(c, e.samplerate))
                }
            }
              , _e = function(e, t, i) {
                return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0,
                e.filter(function(e) {
                    return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts),
                    t.minSegmentPts = t.minSegmentDts,
                    !0)
                }))
            }
              , be = function(e) {
                var t, i, n = [];
                for (t = 0; t < e.length; t++)
                    i = e[t],
                    n.push({
                        size: i.data.byteLength,
                        duration: 1024
                    });
                return n
            }
              , Te = function(e) {
                var t, i, n = 0, r = new Uint8Array(function(e) {
                    var t, i = 0;
                    for (t = 0; t < e.length; t++)
                        i += e[t].data.byteLength;
                    return i
                }(e));
                for (t = 0; t < e.length; t++)
                    i = e[t],
                    r.set(i.data, n),
                    n += i.data.byteLength;
                return r
            }
              , Se = function(e) {
                delete e.minSegmentDts,
                delete e.maxSegmentDts,
                delete e.minSegmentPts,
                delete e.maxSegmentPts
            }
              , ke = function(e, t) {
                var i, n = e.minSegmentDts;
                return t || (n -= e.timelineStartInfo.dts),
                i = e.timelineStartInfo.baseMediaDecodeTime,
                i += n,
                i = Math.max(0, i),
                "audio" === e.type && (i *= e.samplerate / 9e4,
                i = Math.floor(i)),
                i
            }
              , we = function(e, t) {
                "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts),
                void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts),
                void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)),
                "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts),
                void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts),
                void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
            }
              , Ce = function(e) {
                for (var t = 0, i = {
                    payloadType: -1,
                    payloadSize: 0
                }, n = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
                    for (; 255 === e[t]; )
                        n += 255,
                        t++;
                    for (n += e[t++]; 255 === e[t]; )
                        r += 255,
                        t++;
                    if (r += e[t++],
                    !i.payload && 4 === n) {
                        i.payloadType = n,
                        i.payloadSize = r,
                        i.payload = e.subarray(t, t + r);
                        break
                    }
                    t += r,
                    n = 0,
                    r = 0
                }
                return i
            }
              , Ee = function(e) {
                return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
            }
              , Ae = function(e, t) {
                var i, n, r, a, s = [];
                if (!(64 & t[0]))
                    return s;
                for (n = 31 & t[0],
                i = 0; i < n; i++)
                    a = {
                        type: 3 & t[2 + (r = 3 * i)],
                        pts: e
                    },
                    4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4],
                    s.push(a));
                return s
            }
              , Pe = function(e) {
                for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                    0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
                    a += 2) : a++;
                if (0 === r.length)
                    return e;
                t = n - r.length,
                i = new Uint8Array(t);
                var s = 0;
                for (a = 0; a < t; s++,
                a++)
                    s === r[0] && (s++,
                    r.shift()),
                    i[a] = e[s];
                return i
            }
              , Le = 4
              , Oe = function e() {
                e.prototype.init.call(this),
                this.captionPackets_ = [],
                this.ccStreams_ = [new Re(0,0), new Re(0,1), new Re(1,0), new Re(1,1)],
                this.reset(),
                this.ccStreams_.forEach(function(e) {
                    e.on("data", this.trigger.bind(this, "data")),
                    e.on("done", this.trigger.bind(this, "done"))
                }, this)
            };
            (Oe.prototype = new re).push = function(e) {
                var t, i, n;
                if ("sei_rbsp" === e.nalUnitType && (t = Ce(e.escapedRBSP)).payloadType === Le && (i = Ee(t)))
                    if (e.dts < this.latestDts_)
                        this.ignoreNextEqualDts_ = !0;
                    else {
                        if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_)
                            return this.numSameDts_--,
                            void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                        n = Ae(e.pts, i),
                        this.captionPackets_ = this.captionPackets_.concat(n),
                        this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
                        this.numSameDts_++,
                        this.latestDts_ = e.dts
                    }
            }
            ,
            Oe.prototype.flush = function() {
                this.captionPackets_.length ? (this.captionPackets_.forEach(function(e, t) {
                    e.presortIndex = t
                }),
                this.captionPackets_.sort(function(e, t) {
                    return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                }),
                this.captionPackets_.forEach(function(e) {
                    e.type < 2 && this.dispatchCea608Packet(e)
                }, this),
                this.captionPackets_.length = 0,
                this.ccStreams_.forEach(function(e) {
                    e.flush()
                }, this)) : this.ccStreams_.forEach(function(e) {
                    e.flush()
                }, this)
            }
            ,
            Oe.prototype.reset = function() {
                this.latestDts_ = null,
                this.ignoreNextEqualDts_ = !1,
                this.numSameDts_ = 0,
                this.activeCea608Channel_ = [null, null],
                this.ccStreams_.forEach(function(e) {
                    e.reset()
                })
            }
            ,
            Oe.prototype.dispatchCea608Packet = function(e) {
                this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
                null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
            }
            ,
            Oe.prototype.setsChannel1Active = function(e) {
                return 4096 == (30720 & e.ccData)
            }
            ,
            Oe.prototype.setsChannel2Active = function(e) {
                return 6144 == (30720 & e.ccData)
            }
            ;
            var Ie = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                304: 174,
                305: 176,
                306: 189,
                307: 191,
                308: 8482,
                309: 162,
                310: 163,
                311: 9834,
                312: 224,
                313: 160,
                314: 232,
                315: 226,
                316: 234,
                317: 238,
                318: 244,
                319: 251,
                544: 193,
                545: 201,
                546: 211,
                547: 218,
                548: 220,
                549: 252,
                550: 8216,
                551: 161,
                552: 42,
                553: 39,
                554: 8212,
                555: 169,
                556: 8480,
                557: 8226,
                558: 8220,
                559: 8221,
                560: 192,
                561: 194,
                562: 199,
                563: 200,
                564: 202,
                565: 203,
                566: 235,
                567: 206,
                568: 207,
                569: 239,
                570: 212,
                571: 217,
                572: 249,
                573: 219,
                574: 171,
                575: 187,
                800: 195,
                801: 227,
                802: 205,
                803: 204,
                804: 236,
                805: 210,
                806: 242,
                807: 213,
                808: 245,
                809: 123,
                810: 125,
                811: 92,
                812: 94,
                813: 95,
                814: 124,
                815: 126,
                816: 196,
                817: 228,
                818: 214,
                819: 246,
                820: 223,
                821: 165,
                822: 164,
                823: 9474,
                824: 197,
                825: 229,
                826: 216,
                827: 248,
                828: 9484,
                829: 9488,
                830: 9492,
                831: 9496
            }
              , xe = function(e) {
                return null === e ? "" : (e = Ie[e] || e,
                String.fromCharCode(e))
            }
              , De = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
              , Ue = function() {
                for (var e = [], t = 15; t--; )
                    e.push("");
                return e
            }
              , Re = function e(t, i) {
                e.prototype.init.call(this),
                this.field_ = t || 0,
                this.dataChannel_ = i || 0,
                this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
                this.setConstants(),
                this.reset(),
                this.push = function(e) {
                    var t, i, n, r, a;
                    if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                        if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null),
                        n = t >>> 8,
                        r = 255 & t,
                        t !== this.PADDING_)
                            if (t === this.RESUME_CAPTION_LOADING_)
                                this.mode_ = "popOn";
                            else if (t === this.END_OF_CAPTION_)
                                this.mode_ = "popOn",
                                this.clearFormatting(e.pts),
                                this.flushDisplayed(e.pts),
                                i = this.displayed_,
                                this.displayed_ = this.nonDisplayed_,
                                this.nonDisplayed_ = i,
                                this.startPts_ = e.pts;
                            else if (t === this.ROLL_UP_2_ROWS_)
                                this.rollUpRows_ = 2,
                                this.setRollUp(e.pts);
                            else if (t === this.ROLL_UP_3_ROWS_)
                                this.rollUpRows_ = 3,
                                this.setRollUp(e.pts);
                            else if (t === this.ROLL_UP_4_ROWS_)
                                this.rollUpRows_ = 4,
                                this.setRollUp(e.pts);
                            else if (t === this.CARRIAGE_RETURN_)
                                this.clearFormatting(e.pts),
                                this.flushDisplayed(e.pts),
                                this.shiftRowsUp_(),
                                this.startPts_ = e.pts;
                            else if (t === this.BACKSPACE_)
                                "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                            else if (t === this.ERASE_DISPLAYED_MEMORY_)
                                this.flushDisplayed(e.pts),
                                this.displayed_ = Ue();
                            else if (t === this.ERASE_NON_DISPLAYED_MEMORY_)
                                this.nonDisplayed_ = Ue();
                            else if (t === this.RESUME_DIRECT_CAPTIONING_)
                                "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts),
                                this.displayed_ = Ue()),
                                this.mode_ = "paintOn",
                                this.startPts_ = e.pts;
                            else if (this.isSpecialCharacter(n, r))
                                a = xe((n = (3 & n) << 8) | r),
                                this[this.mode_](e.pts, a),
                                this.column_++;
                            else if (this.isExtCharacter(n, r))
                                "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
                                a = xe((n = (3 & n) << 8) | r),
                                this[this.mode_](e.pts, a),
                                this.column_++;
                            else if (this.isMidRowCode(n, r))
                                this.clearFormatting(e.pts),
                                this[this.mode_](e.pts, " "),
                                this.column_++,
                                14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
                                1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                            else if (this.isOffsetControlCode(n, r))
                                this.column_ += 3 & r;
                            else if (this.isPAC(n, r)) {
                                var s = De.indexOf(7968 & t);
                                "rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1),
                                this.setRollUp(e.pts, s)),
                                s !== this.row_ && (this.clearFormatting(e.pts),
                                this.row_ = s),
                                1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
                                16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                                this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                            } else
                                this.isNormalChar(n) && (0 === r && (r = null),
                                a = xe(n),
                                a += xe(r),
                                this[this.mode_](e.pts, a),
                                this.column_ += a.length)
                    } else
                        this.lastControlCode_ = null
                }
            };
            Re.prototype = new re,
            Re.prototype.flushDisplayed = function(e) {
                var t = this.displayed_.map(function(e) {
                    try {
                        return e.trim()
                    } catch (e) {
                        return console.error("Skipping malformed caption."),
                        ""
                    }
                }).join("\n").replace(/^\n+|\n+$/g, "");
                t.length && this.trigger("data", {
                    startPts: this.startPts_,
                    endPts: e,
                    text: t,
                    stream: this.name_
                })
            }
            ,
            Re.prototype.reset = function() {
                this.mode_ = "popOn",
                this.topRow_ = 0,
                this.startPts_ = 0,
                this.displayed_ = Ue(),
                this.nonDisplayed_ = Ue(),
                this.lastControlCode_ = null,
                this.column_ = 0,
                this.row_ = 14,
                this.rollUpRows_ = 2,
                this.formatting_ = []
            }
            ,
            Re.prototype.setConstants = function() {
                0 === this.dataChannel_ ? (this.BASE_ = 16,
                this.EXT_ = 17,
                this.CONTROL_ = (20 | this.field_) << 8,
                this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24,
                this.EXT_ = 25,
                this.CONTROL_ = (28 | this.field_) << 8,
                this.OFFSET_ = 31),
                this.PADDING_ = 0,
                this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
                this.END_OF_CAPTION_ = 47 | this.CONTROL_,
                this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
                this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
                this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
                this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
                this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
                this.BACKSPACE_ = 33 | this.CONTROL_,
                this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
                this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
            }
            ,
            Re.prototype.isSpecialCharacter = function(e, t) {
                return e === this.EXT_ && t >= 48 && t <= 63
            }
            ,
            Re.prototype.isExtCharacter = function(e, t) {
                return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
            }
            ,
            Re.prototype.isMidRowCode = function(e, t) {
                return e === this.EXT_ && t >= 32 && t <= 47
            }
            ,
            Re.prototype.isOffsetControlCode = function(e, t) {
                return e === this.OFFSET_ && t >= 33 && t <= 35
            }
            ,
            Re.prototype.isPAC = function(e, t) {
                return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
            }
            ,
            Re.prototype.isColorPAC = function(e) {
                return e >= 64 && e <= 79 || e >= 96 && e <= 127
            }
            ,
            Re.prototype.isNormalChar = function(e) {
                return e >= 32 && e <= 127
            }
            ,
            Re.prototype.setRollUp = function(e, t) {
                if ("rollUp" !== this.mode_ && (this.row_ = 14,
                this.mode_ = "rollUp",
                this.flushDisplayed(e),
                this.nonDisplayed_ = Ue(),
                this.displayed_ = Ue()),
                void 0 !== t && t !== this.row_)
                    for (var i = 0; i < this.rollUpRows_; i++)
                        this.displayed_[t - i] = this.displayed_[this.row_ - i],
                        this.displayed_[this.row_ - i] = "";
                void 0 === t && (t = this.row_),
                this.topRow_ = t - this.rollUpRows_ + 1
            }
            ,
            Re.prototype.addFormatting = function(e, t) {
                this.formatting_ = this.formatting_.concat(t);
                var i = t.reduce(function(e, t) {
                    return e + "<" + t + ">"
                }, "");
                this[this.mode_](e, i)
            }
            ,
            Re.prototype.clearFormatting = function(e) {
                if (this.formatting_.length) {
                    var t = this.formatting_.reverse().reduce(function(e, t) {
                        return e + "</" + t + ">"
                    }, "");
                    this.formatting_ = [],
                    this[this.mode_](e, t)
                }
            }
            ,
            Re.prototype.popOn = function(e, t) {
                var i = this.nonDisplayed_[this.row_];
                i += t,
                this.nonDisplayed_[this.row_] = i
            }
            ,
            Re.prototype.rollUp = function(e, t) {
                var i = this.displayed_[this.row_];
                i += t,
                this.displayed_[this.row_] = i
            }
            ,
            Re.prototype.shiftRowsUp_ = function() {
                var e;
                for (e = 0; e < this.topRow_; e++)
                    this.displayed_[e] = "";
                for (e = this.row_ + 1; e < 15; e++)
                    this.displayed_[e] = "";
                for (e = this.topRow_; e < this.row_; e++)
                    this.displayed_[e] = this.displayed_[e + 1];
                this.displayed_[this.row_] = ""
            }
            ,
            Re.prototype.paintOn = function(e, t) {
                var i = this.displayed_[this.row_];
                i += t,
                this.displayed_[this.row_] = i
            }
            ;
            var Me = {
                CaptionStream: Oe,
                Cea608Stream: Re
            }
              , Be = {
                H264_STREAM_TYPE: 27,
                ADTS_STREAM_TYPE: 15,
                METADATA_STREAM_TYPE: 21
            }
              , Ne = function(e, t) {
                var i = 1;
                for (e > t && (i = -1); Math.abs(t - e) > 4294967296; )
                    e += 8589934592 * i;
                return e
            }
              , je = function e(t) {
                var i, n;
                e.prototype.init.call(this),
                this.type_ = t,
                this.push = function(e) {
                    e.type === this.type_ && (void 0 === n && (n = e.dts),
                    e.dts = Ne(e.dts, n),
                    e.pts = Ne(e.pts, n),
                    i = e.dts,
                    this.trigger("data", e))
                }
                ,
                this.flush = function() {
                    n = i,
                    this.trigger("done")
                }
                ,
                this.discontinuity = function() {
                    n = void 0,
                    i = void 0
                }
            };
            je.prototype = new re;
            var Fe, Ve = je, He = function(e, t, i) {
                var n, r = "";
                for (n = t; n < i; n++)
                    r += "%" + ("00" + e[n].toString(16)).slice(-2);
                return r
            }, qe = function(e, t, i) {
                return decodeURIComponent(He(e, t, i))
            }, ze = function(e) {
                return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
            }, We = {
                TXXX: function(e) {
                    var t;
                    if (3 === e.data[0]) {
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = qe(e.data, 1, t),
                                e.value = qe(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                                break
                            }
                        e.data = e.value
                    }
                },
                WXXX: function(e) {
                    var t;
                    if (3 === e.data[0])
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = qe(e.data, 1, t),
                                e.url = qe(e.data, t + 1, e.data.length);
                                break
                            }
                },
                PRIV: function(e) {
                    var t, i;
                    for (t = 0; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                            e.owner = (i = e.data,
                            unescape(He(i, 0, t)));
                            break
                        }
                    e.privateData = e.data.subarray(t + 1),
                    e.data = e.privateData
                }
            };
            (Fe = function(e) {
                var t, i = {
                    debug: !(!e || !e.debug),
                    descriptor: e && e.descriptor
                }, n = 0, r = [], a = 0;
                if (Fe.prototype.init.call(this),
                this.dispatchType = Be.METADATA_STREAM_TYPE.toString(16),
                i.descriptor)
                    for (t = 0; t < i.descriptor.length; t++)
                        this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
                this.push = function(e) {
                    var t, s, o, u, l;
                    if ("timed-metadata" === e.type)
                        if (e.dataAlignmentIndicator && (a = 0,
                        r.length = 0),
                        0 === r.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0)))
                            i.debug && console.log("Skipping unrecognized metadata packet");
                        else if (r.push(e),
                        a += e.data.byteLength,
                        1 === r.length && (n = ze(e.data.subarray(6, 10)),
                        n += 10),
                        !(a < n)) {
                            for (t = {
                                data: new Uint8Array(n),
                                frames: [],
                                pts: r[0].pts,
                                dts: r[0].dts
                            },
                            l = 0; l < n; )
                                t.data.set(r[0].data.subarray(0, n - l), l),
                                l += r[0].data.byteLength,
                                a -= r[0].data.byteLength,
                                r.shift();
                            s = 10,
                            64 & t.data[5] && (s += 4,
                            s += ze(t.data.subarray(10, 14)),
                            n -= ze(t.data.subarray(16, 20)));
                            do {
                                if ((o = ze(t.data.subarray(s + 4, s + 8))) < 1)
                                    return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                                if ((u = {
                                    id: String.fromCharCode(t.data[s], t.data[s + 1], t.data[s + 2], t.data[s + 3]),
                                    data: t.data.subarray(s + 10, s + o + 10)
                                }).key = u.id,
                                We[u.id] && (We[u.id](u),
                                "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
                                    var c = u.data
                                      , d = (1 & c[3]) << 30 | c[4] << 22 | c[5] << 14 | c[6] << 6 | c[7] >>> 2;
                                    d *= 4,
                                    d += 3 & c[7],
                                    u.timeStamp = d,
                                    void 0 === t.pts && void 0 === t.dts && (t.pts = u.timeStamp,
                                    t.dts = u.timeStamp),
                                    this.trigger("timestamp", u)
                                }
                                t.frames.push(u),
                                s += 10,
                                s += o
                            } while (s < n);
                            this.trigger("data", t)
                        }
                }
            }
            ).prototype = new re;
            var Ge, $e, Xe, Ye = Fe, Ke = Ve;
            (Ge = function() {
                var e = new Uint8Array(188)
                  , t = 0;
                Ge.prototype.init.call(this),
                this.push = function(i) {
                    var n, r = 0, a = 188;
                    for (t ? ((n = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)),
                    n.set(i, t),
                    t = 0) : n = i; a < n.byteLength; )
                        71 !== n[r] || 71 !== n[a] ? (r++,
                        a++) : (this.trigger("data", n.subarray(r, a)),
                        r += 188,
                        a += 188);
                    r < n.byteLength && (e.set(n.subarray(r), 0),
                    t = n.byteLength - r)
                }
                ,
                this.flush = function() {
                    188 === t && 71 === e[0] && (this.trigger("data", e),
                    t = 0),
                    this.trigger("done")
                }
            }
            ).prototype = new re,
            ($e = function() {
                var e, t, i, n;
                $e.prototype.init.call(this),
                n = this,
                this.packetsWaitingForPmt = [],
                this.programMapTable = void 0,
                e = function(e, n) {
                    var r = 0;
                    n.payloadUnitStartIndicator && (r += e[r] + 1),
                    "pat" === n.type ? t(e.subarray(r), n) : i(e.subarray(r), n)
                }
                ,
                t = function(e, t) {
                    t.section_number = e[7],
                    t.last_section_number = e[8],
                    n.pmtPid = (31 & e[10]) << 8 | e[11],
                    t.pmtPid = n.pmtPid
                }
                ,
                i = function(e, t) {
                    var i, r;
                    if (1 & e[5]) {
                        for (n.programMapTable = {
                            video: null,
                            audio: null,
                            "timed-metadata": {}
                        },
                        i = 3 + ((15 & e[1]) << 8 | e[2]) - 4,
                        r = 12 + ((15 & e[10]) << 8 | e[11]); r < i; ) {
                            var a = e[r]
                              , s = (31 & e[r + 1]) << 8 | e[r + 2];
                            a === Be.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = s : a === Be.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = s : a === Be.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][s] = a),
                            r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
                        }
                        t.programMapTable = n.programMapTable
                    }
                }
                ,
                this.push = function(t) {
                    var i = {}
                      , n = 4;
                    if (i.payloadUnitStartIndicator = !!(64 & t[1]),
                    i.pid = 31 & t[1],
                    i.pid <<= 8,
                    i.pid |= t[2],
                    (48 & t[3]) >>> 4 > 1 && (n += t[n] + 1),
                    0 === i.pid)
                        i.type = "pat",
                        e(t.subarray(n), i),
                        this.trigger("data", i);
                    else if (i.pid === this.pmtPid)
                        for (i.type = "pmt",
                        e(t.subarray(n), i),
                        this.trigger("data", i); this.packetsWaitingForPmt.length; )
                            this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                    else
                        void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, n, i]) : this.processPes_(t, n, i)
                }
                ,
                this.processPes_ = function(e, t, i) {
                    i.pid === this.programMapTable.video ? i.streamType = Be.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Be.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid],
                    i.type = "pes",
                    i.data = e.subarray(t),
                    this.trigger("data", i)
                }
            }
            ).prototype = new re,
            $e.STREAM_TYPES = {
                h264: 27,
                adts: 15
            },
            (Xe = function() {
                var e = this
                  , t = {
                    data: [],
                    size: 0
                }
                  , i = {
                    data: [],
                    size: 0
                }
                  , n = {
                    data: [],
                    size: 0
                }
                  , r = function(t, i, n) {
                    var r, a, s = new Uint8Array(t.size), o = {
                        type: i
                    }, u = 0, l = 0;
                    if (t.data.length && !(t.size < 9)) {
                        for (o.trackId = t.data[0].pid,
                        u = 0; u < t.data.length; u++)
                            a = t.data[u],
                            s.set(a.data, l),
                            l += a.data.byteLength;
                        var c, d, h;
                        c = s,
                        (d = o).packetLength = 6 + (c[4] << 8 | c[5]),
                        d.dataAlignmentIndicator = 0 != (4 & c[6]),
                        192 & (h = c[7]) && (d.pts = (14 & c[9]) << 27 | (255 & c[10]) << 20 | (254 & c[11]) << 12 | (255 & c[12]) << 5 | (254 & c[13]) >>> 3,
                        d.pts *= 4,
                        d.pts += (6 & c[13]) >>> 1,
                        d.dts = d.pts,
                        64 & h && (d.dts = (14 & c[14]) << 27 | (255 & c[15]) << 20 | (254 & c[16]) << 12 | (255 & c[17]) << 5 | (254 & c[18]) >>> 3,
                        d.dts *= 4,
                        d.dts += (6 & c[18]) >>> 1)),
                        d.data = c.subarray(9 + c[8]),
                        r = "video" === i || o.packetLength <= t.size,
                        (n || r) && (t.size = 0,
                        t.data.length = 0),
                        r && e.trigger("data", o)
                    }
                };
                Xe.prototype.init.call(this),
                this.push = function(a) {
                    ({
                        pat: function() {},
                        pes: function() {
                            var e, s;
                            switch (a.streamType) {
                            case Be.H264_STREAM_TYPE:
                            case Be.H264_STREAM_TYPE:
                                e = t,
                                s = "video";
                                break;
                            case Be.ADTS_STREAM_TYPE:
                                e = i,
                                s = "audio";
                                break;
                            case Be.METADATA_STREAM_TYPE:
                                e = n,
                                s = "timed-metadata";
                                break;
                            default:
                                return
                            }
                            a.payloadUnitStartIndicator && r(e, s, !0),
                            e.data.push(a),
                            e.size += a.data.byteLength
                        },
                        pmt: function() {
                            var t = {
                                type: "metadata",
                                tracks: []
                            }
                              , i = a.programMapTable;
                            null !== i.video && t.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +i.video,
                                codec: "avc",
                                type: "video"
                            }),
                            null !== i.audio && t.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +i.audio,
                                codec: "adts",
                                type: "audio"
                            }),
                            e.trigger("data", t)
                        }
                    })[a.type]()
                }
                ,
                this.flush = function() {
                    r(t, "video"),
                    r(i, "audio"),
                    r(n, "timed-metadata"),
                    this.trigger("done")
                }
            }
            ).prototype = new re;
            var Qe = {
                PAT_PID: 0,
                MP2T_PACKET_LENGTH: 188,
                TransportPacketStream: Ge,
                TransportParseStream: $e,
                ElementaryStream: Xe,
                TimestampRolloverStream: Ke,
                CaptionStream: Me.CaptionStream,
                Cea608Stream: Me.Cea608Stream,
                MetadataStream: Ye
            };
            for (var Je in Be)
                Be.hasOwnProperty(Je) && (Qe[Je] = Be[Je]);
            var Ze, et = Qe, tt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            (Ze = function() {
                var e;
                Ze.prototype.init.call(this),
                this.push = function(t) {
                    var i, n, r, a, s, o, u = 0, l = 0;
                    if ("audio" === t.type)
                        for (e ? (a = e,
                        (e = new Uint8Array(a.byteLength + t.data.byteLength)).set(a),
                        e.set(t.data, a.byteLength)) : e = t.data; u + 5 < e.length; )
                            if (255 === e[u] && 240 == (246 & e[u + 1])) {
                                if (n = 2 * (1 & ~e[u + 1]),
                                i = (3 & e[u + 3]) << 11 | e[u + 4] << 3 | (224 & e[u + 5]) >> 5,
                                o = 9e4 * (s = 1024 * (1 + (3 & e[u + 6]))) / tt[(60 & e[u + 2]) >>> 2],
                                r = u + i,
                                e.byteLength < r)
                                    return;
                                if (this.trigger("data", {
                                    pts: t.pts + l * o,
                                    dts: t.dts + l * o,
                                    sampleCount: s,
                                    audioobjecttype: 1 + (e[u + 2] >>> 6 & 3),
                                    channelcount: (1 & e[u + 2]) << 2 | (192 & e[u + 3]) >>> 6,
                                    samplerate: tt[(60 & e[u + 2]) >>> 2],
                                    samplingfrequencyindex: (60 & e[u + 2]) >>> 2,
                                    samplesize: 16,
                                    data: e.subarray(u + 7 + n, r)
                                }),
                                e.byteLength === r)
                                    return void (e = void 0);
                                l++,
                                e = e.subarray(r)
                            } else
                                u++
                }
                ,
                this.flush = function() {
                    this.trigger("done")
                }
            }
            ).prototype = new re;
            var it, nt, rt, at = Ze, st = function(e) {
                var t = e.byteLength
                  , i = 0
                  , n = 0;
                this.length = function() {
                    return 8 * t
                }
                ,
                this.bitsAvailable = function() {
                    return 8 * t + n
                }
                ,
                this.loadWord = function() {
                    var r = e.byteLength - t
                      , a = new Uint8Array(4)
                      , s = Math.min(4, t);
                    if (0 === s)
                        throw new Error("no bytes available");
                    a.set(e.subarray(r, r + s)),
                    i = new DataView(a.buffer).getUint32(0),
                    n = 8 * s,
                    t -= s
                }
                ,
                this.skipBits = function(e) {
                    var r;
                    n > e ? (i <<= e,
                    n -= e) : (e -= n,
                    e -= 8 * (r = Math.floor(e / 8)),
                    t -= r,
                    this.loadWord(),
                    i <<= e,
                    n -= e)
                }
                ,
                this.readBits = function(e) {
                    var r = Math.min(n, e)
                      , a = i >>> 32 - r;
                    return (n -= r) > 0 ? i <<= r : t > 0 && this.loadWord(),
                    (r = e - r) > 0 ? a << r | this.readBits(r) : a
                }
                ,
                this.skipLeadingZeros = function() {
                    var e;
                    for (e = 0; e < n; ++e)
                        if (0 != (i & 2147483648 >>> e))
                            return i <<= e,
                            n -= e,
                            e;
                    return this.loadWord(),
                    e + this.skipLeadingZeros()
                }
                ,
                this.skipUnsignedExpGolomb = function() {
                    this.skipBits(1 + this.skipLeadingZeros())
                }
                ,
                this.skipExpGolomb = function() {
                    this.skipBits(1 + this.skipLeadingZeros())
                }
                ,
                this.readUnsignedExpGolomb = function() {
                    var e = this.skipLeadingZeros();
                    return this.readBits(e + 1) - 1
                }
                ,
                this.readExpGolomb = function() {
                    var e = this.readUnsignedExpGolomb();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }
                ,
                this.readBoolean = function() {
                    return 1 === this.readBits(1)
                }
                ,
                this.readUnsignedByte = function() {
                    return this.readBits(8)
                }
                ,
                this.loadWord()
            };
            (nt = function() {
                var e, t, i = 0;
                nt.prototype.init.call(this),
                this.push = function(n) {
                    var r;
                    for (t ? ((r = new Uint8Array(t.byteLength + n.data.byteLength)).set(t),
                    r.set(n.data, t.byteLength),
                    t = r) : t = n.data; i < t.byteLength - 3; i++)
                        if (1 === t[i + 2]) {
                            e = i + 5;
                            break
                        }
                    for (; e < t.byteLength; )
                        switch (t[e]) {
                        case 0:
                            if (0 !== t[e - 1]) {
                                e += 2;
                                break
                            }
                            if (0 !== t[e - 2]) {
                                e++;
                                break
                            }
                            i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
                            do {
                                e++
                            } while (1 !== t[e] && e < t.length);
                            i = e - 2,
                            e += 3;
                            break;
                        case 1:
                            if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                                e += 3;
                                break
                            }
                            this.trigger("data", t.subarray(i + 3, e - 2)),
                            i = e - 2,
                            e += 3;
                            break;
                        default:
                            e += 3
                        }
                    t = t.subarray(i),
                    e -= i,
                    i = 0
                }
                ,
                this.flush = function() {
                    t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)),
                    t = null,
                    i = 0,
                    this.trigger("done")
                }
            }
            ).prototype = new re,
            rt = {
                100: !0,
                110: !0,
                122: !0,
                244: !0,
                44: !0,
                83: !0,
                86: !0,
                118: !0,
                128: !0,
                138: !0,
                139: !0,
                134: !0
            },
            (it = function() {
                var e, t, i, n, r, a, s, o = new nt;
                it.prototype.init.call(this),
                e = this,
                this.push = function(e) {
                    "video" === e.type && (t = e.trackId,
                    i = e.pts,
                    n = e.dts,
                    o.push(e))
                }
                ,
                o.on("data", function(s) {
                    var o = {
                        trackId: t,
                        pts: i,
                        dts: n,
                        data: s
                    };
                    switch (31 & s[0]) {
                    case 5:
                        o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                        break;
                    case 6:
                        o.nalUnitType = "sei_rbsp",
                        o.escapedRBSP = r(s.subarray(1));
                        break;
                    case 7:
                        o.nalUnitType = "seq_parameter_set_rbsp",
                        o.escapedRBSP = r(s.subarray(1)),
                        o.config = a(o.escapedRBSP);
                        break;
                    case 8:
                        o.nalUnitType = "pic_parameter_set_rbsp";
                        break;
                    case 9:
                        o.nalUnitType = "access_unit_delimiter_rbsp"
                    }
                    e.trigger("data", o)
                }),
                o.on("done", function() {
                    e.trigger("done")
                }),
                this.flush = function() {
                    o.flush()
                }
                ,
                s = function(e, t) {
                    var i, n = 8, r = 8;
                    for (i = 0; i < e; i++)
                        0 !== r && (r = (n + t.readExpGolomb() + 256) % 256),
                        n = 0 === r ? n : r
                }
                ,
                r = function(e) {
                    for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                        0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
                        a += 2) : a++;
                    if (0 === r.length)
                        return e;
                    t = n - r.length,
                    i = new Uint8Array(t);
                    var s = 0;
                    for (a = 0; a < t; s++,
                    a++)
                        s === r[0] && (s++,
                        r.shift()),
                        i[a] = e[s];
                    return i
                }
                ,
                a = function(e) {
                    var t, i, n, r, a, o, u, l, c, d, h, p, f, m = 0, g = 0, y = 0, v = 0, _ = 1;
                    if (i = (t = new st(e)).readUnsignedByte(),
                    r = t.readUnsignedByte(),
                    n = t.readUnsignedByte(),
                    t.skipUnsignedExpGolomb(),
                    rt[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1),
                    t.skipUnsignedExpGolomb(),
                    t.skipUnsignedExpGolomb(),
                    t.skipBits(1),
                    t.readBoolean()))
                        for (h = 3 !== a ? 8 : 12,
                        f = 0; f < h; f++)
                            t.readBoolean() && s(f < 6 ? 16 : 64, t);
                    if (t.skipUnsignedExpGolomb(),
                    0 === (o = t.readUnsignedExpGolomb()))
                        t.readUnsignedExpGolomb();
                    else if (1 === o)
                        for (t.skipBits(1),
                        t.skipExpGolomb(),
                        t.skipExpGolomb(),
                        u = t.readUnsignedExpGolomb(),
                        f = 0; f < u; f++)
                            t.skipExpGolomb();
                    if (t.skipUnsignedExpGolomb(),
                    t.skipBits(1),
                    l = t.readUnsignedExpGolomb(),
                    c = t.readUnsignedExpGolomb(),
                    0 === (d = t.readBits(1)) && t.skipBits(1),
                    t.skipBits(1),
                    t.readBoolean() && (m = t.readUnsignedExpGolomb(),
                    g = t.readUnsignedExpGolomb(),
                    y = t.readUnsignedExpGolomb(),
                    v = t.readUnsignedExpGolomb()),
                    t.readBoolean() && t.readBoolean()) {
                        switch (t.readUnsignedByte()) {
                        case 1:
                            p = [1, 1];
                            break;
                        case 2:
                            p = [12, 11];
                            break;
                        case 3:
                            p = [10, 11];
                            break;
                        case 4:
                            p = [16, 11];
                            break;
                        case 5:
                            p = [40, 33];
                            break;
                        case 6:
                            p = [24, 11];
                            break;
                        case 7:
                            p = [20, 11];
                            break;
                        case 8:
                            p = [32, 11];
                            break;
                        case 9:
                            p = [80, 33];
                            break;
                        case 10:
                            p = [18, 11];
                            break;
                        case 11:
                            p = [15, 11];
                            break;
                        case 12:
                            p = [64, 33];
                            break;
                        case 13:
                            p = [160, 99];
                            break;
                        case 14:
                            p = [4, 3];
                            break;
                        case 15:
                            p = [3, 2];
                            break;
                        case 16:
                            p = [2, 1];
                            break;
                        case 255:
                            p = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                        }
                        p && (_ = p[0] / p[1])
                    }
                    return {
                        profileIdc: i,
                        levelIdc: n,
                        profileCompatibility: r,
                        width: Math.ceil((16 * (l + 1) - 2 * m - 2 * g) * _),
                        height: (2 - d) * (c + 1) * 16 - 2 * y - 2 * v
                    }
                }
            }
            ).prototype = new re;
            var ot, ut = {
                H264Stream: it,
                NalByteStream: nt
            }, lt = function(e) {
                return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
            }, ct = function(e, t) {
                var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
            }, dt = function(e, t) {
                var i = (224 & e[t + 5]) >> 5
                  , n = e[t + 4] << 3;
                return 6144 & e[t + 3] | n | i
            };
            (ot = function() {
                var e = new Uint8Array
                  , t = 0;
                ot.prototype.init.call(this),
                this.setTimestamp = function(e) {
                    t = e
                }
                ,
                this.push = function(i) {
                    var n, r, a, s, o = 0, u = 0;
                    for (e.length ? (s = e.length,
                    (e = new Uint8Array(i.byteLength + s)).set(e.subarray(0, s)),
                    e.set(i, s)) : e = i; e.length - u >= 3; )
                        if (e[u] !== "I".charCodeAt(0) || e[u + 1] !== "D".charCodeAt(0) || e[u + 2] !== "3".charCodeAt(0))
                            if (255 != (255 & e[u]) || 240 != (240 & e[u + 1]))
                                u++;
                            else {
                                if (e.length - u < 7)
                                    break;
                                if (u + (o = dt(e, u)) > e.length)
                                    break;
                                a = {
                                    type: "audio",
                                    data: e.subarray(u, u + o),
                                    pts: t,
                                    dts: t
                                },
                                this.trigger("data", a),
                                u += o
                            }
                        else {
                            if (e.length - u < 10)
                                break;
                            if (u + (o = ct(e, u)) > e.length)
                                break;
                            r = {
                                type: "timed-metadata",
                                data: e.subarray(u, u + o)
                            },
                            this.trigger("data", r),
                            u += o
                        }
                    n = e.length - u,
                    e = n > 0 ? e.subarray(u) : new Uint8Array
                }
            }
            ).prototype = new re;
            var ht, pt, ft, mt, gt = ot, yt = ut.H264Stream, vt = lt, _t = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], bt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"], Tt = function(e, t) {
                var i;
                if (e.length !== t.length)
                    return !1;
                for (i = 0; i < e.length; i++)
                    if (e[i] !== t[i])
                        return !1;
                return !0
            }, St = function(e, t, i, n, r, a) {
                return {
                    start: {
                        dts: e,
                        pts: e + (i - t)
                    },
                    end: {
                        dts: e + (n - t),
                        pts: e + (r - i)
                    },
                    prependedContentDuration: a,
                    baseMediaDecodeTime: e
                }
            };
            (pt = function(e, t) {
                var i = []
                  , n = 0
                  , r = 0
                  , a = 0
                  , s = 1 / 0;
                t = t || {},
                pt.prototype.init.call(this),
                this.push = function(t) {
                    we(e, t),
                    e && _t.forEach(function(i) {
                        e[i] = t[i]
                    }),
                    i.push(t)
                }
                ,
                this.setEarliestDts = function(t) {
                    r = t - e.timelineStartInfo.baseMediaDecodeTime
                }
                ,
                this.setVideoBaseMediaDecodeTime = function(e) {
                    s = e
                }
                ,
                this.setAudioAppendStart = function(e) {
                    a = e
                }
                ,
                this.flush = function() {
                    var o, u, l, c;
                    0 !== i.length ? (o = _e(i, e, r),
                    e.baseMediaDecodeTime = ke(e, t.keepOriginalTimestamps),
                    ve(e, o, a, s),
                    e.samples = be(o),
                    l = $.mdat(Te(o)),
                    i = [],
                    u = $.moof(n, [e]),
                    c = new Uint8Array(u.byteLength + l.byteLength),
                    n++,
                    c.set(u),
                    c.set(l, u.byteLength),
                    Se(e),
                    this.trigger("data", {
                        track: e,
                        boxes: c
                    }),
                    this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream")
                }
            }
            ).prototype = new re,
            (ht = function(e, t) {
                var i, n, r = 0, a = [], s = [];
                t = t || {},
                ht.prototype.init.call(this),
                delete e.minPTS,
                this.gopCache_ = [],
                this.push = function(t) {
                    we(e, t),
                    "seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config,
                    e.sps = [t.data],
                    bt.forEach(function(t) {
                        e[t] = i[t]
                    }, this)),
                    "pic_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.data,
                    e.pps = [t.data]),
                    a.push(t)
                }
                ,
                this.flush = function() {
                    for (var i, n, o, u, l, c, d, h, p = 0; a.length && "access_unit_delimiter_rbsp" !== a[0].nalUnitType; )
                        a.shift();
                    if (0 === a.length)
                        return this.resetStream_(),
                        void this.trigger("done", "VideoSegmentStream");
                    if (i = se(a),
                    (o = oe(i))[0][0].keyFrame || ((n = this.getGopForFusion_(a[0], e)) ? (p = n.duration,
                    o.unshift(n),
                    o.byteLength += n.byteLength,
                    o.nalCount += n.nalCount,
                    o.pts = n.pts,
                    o.dts = n.dts,
                    o.duration += n.duration) : o = ue(o)),
                    s.length) {
                        var f;
                        if (!(f = t.alignGopsAtEnd ? this.alignGopsAtEnd_(o) : this.alignGopsAtStart_(o)))
                            return this.gopCache_.unshift({
                                gop: o.pop(),
                                pps: e.pps,
                                sps: e.sps
                            }),
                            this.gopCache_.length = Math.min(6, this.gopCache_.length),
                            a = [],
                            this.resetStream_(),
                            void this.trigger("done", "VideoSegmentStream");
                        Se(e),
                        o = f
                    }
                    we(e, o),
                    e.samples = le(o),
                    l = $.mdat(ce(o)),
                    e.baseMediaDecodeTime = ke(e, t.keepOriginalTimestamps),
                    this.trigger("processedGopsInfo", o.map(function(e) {
                        return {
                            pts: e.pts,
                            dts: e.dts,
                            byteLength: e.byteLength
                        }
                    })),
                    d = o[0],
                    h = o[o.length - 1],
                    this.trigger("segmentTimingInfo", St(e.baseMediaDecodeTime, d.dts, d.pts, h.dts + h.duration, h.pts + h.duration, p)),
                    this.gopCache_.unshift({
                        gop: o.pop(),
                        pps: e.pps,
                        sps: e.sps
                    }),
                    this.gopCache_.length = Math.min(6, this.gopCache_.length),
                    a = [],
                    this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime),
                    this.trigger("timelineStartInfo", e.timelineStartInfo),
                    u = $.moof(r, [e]),
                    c = new Uint8Array(u.byteLength + l.byteLength),
                    r++,
                    c.set(u),
                    c.set(l, u.byteLength),
                    this.trigger("data", {
                        track: e,
                        boxes: c
                    }),
                    this.resetStream_(),
                    this.trigger("done", "VideoSegmentStream")
                }
                ,
                this.resetStream_ = function() {
                    Se(e),
                    i = void 0,
                    n = void 0
                }
                ,
                this.getGopForFusion_ = function(t) {
                    var i, n, r, a, s, o = 1 / 0;
                    for (s = 0; s < this.gopCache_.length; s++)
                        r = (a = this.gopCache_[s]).gop,
                        e.pps && Tt(e.pps[0], a.pps[0]) && e.sps && Tt(e.sps[0], a.sps[0]) && (r.dts < e.timelineStartInfo.dts || (i = t.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || o > i) && (n = a,
                        o = i));
                    return n ? n.gop : null
                }
                ,
                this.alignGopsAtStart_ = function(e) {
                    var t, i, n, r, a, o, u, l;
                    for (a = e.byteLength,
                    o = e.nalCount,
                    u = e.duration,
                    t = i = 0; t < s.length && i < e.length && (n = s[t],
                    r = e[i],
                    n.pts !== r.pts); )
                        r.pts > n.pts ? t++ : (i++,
                        a -= r.byteLength,
                        o -= r.nalCount,
                        u -= r.duration);
                    return 0 === i ? e : i === e.length ? null : ((l = e.slice(i)).byteLength = a,
                    l.duration = u,
                    l.nalCount = o,
                    l.pts = l[0].pts,
                    l.dts = l[0].dts,
                    l)
                }
                ,
                this.alignGopsAtEnd_ = function(e) {
                    var t, i, n, r, a, o, u;
                    for (t = s.length - 1,
                    i = e.length - 1,
                    a = null,
                    o = !1; t >= 0 && i >= 0; ) {
                        if (n = s[t],
                        r = e[i],
                        n.pts === r.pts) {
                            o = !0;
                            break
                        }
                        n.pts > r.pts ? t-- : (t === s.length - 1 && (a = i),
                        i--)
                    }
                    if (!o && null === a)
                        return null;
                    if (0 === (u = o ? i : a))
                        return e;
                    var l = e.slice(u)
                      , c = l.reduce(function(e, t) {
                        return e.byteLength += t.byteLength,
                        e.duration += t.duration,
                        e.nalCount += t.nalCount,
                        e
                    }, {
                        byteLength: 0,
                        duration: 0,
                        nalCount: 0
                    });
                    return l.byteLength = c.byteLength,
                    l.duration = c.duration,
                    l.nalCount = c.nalCount,
                    l.pts = l[0].pts,
                    l.dts = l[0].dts,
                    l
                }
                ,
                this.alignGopsWith = function(e) {
                    s = e
                }
            }
            ).prototype = new re,
            (mt = function(e, t) {
                this.numberOfTracks = 0,
                this.metadataStream = t,
                void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0,
                "boolean" == typeof e.keepOriginalTimestamps && (this.keepOriginalTimestamps = e.keepOriginalTimestamps),
                this.pendingTracks = [],
                this.videoTrack = null,
                this.pendingBoxes = [],
                this.pendingCaptions = [],
                this.pendingMetadata = [],
                this.pendingBytes = 0,
                this.emittedTracks = 0,
                mt.prototype.init.call(this),
                this.push = function(e) {
                    return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track),
                    this.pendingBoxes.push(e.boxes),
                    this.pendingBytes += e.boxes.byteLength,
                    "video" === e.track.type && (this.videoTrack = e.track),
                    void ("audio" === e.track.type && (this.audioTrack = e.track)))
                }
            }
            ).prototype = new re,
            mt.prototype.flush = function(e) {
                var t, i, n, r, a = 0, s = {
                    captions: [],
                    captionStreams: {},
                    metadata: [],
                    info: {}
                }, o = 0;
                if (this.pendingTracks.length < this.numberOfTracks) {
                    if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e)
                        return;
                    if (this.remuxTracks)
                        return;
                    if (0 === this.pendingTracks.length)
                        return this.emittedTracks++,
                        void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
                        this.emittedTracks = 0))
                }
                for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts,
                bt.forEach(function(e) {
                    s.info[e] = this.videoTrack[e]
                }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts,
                _t.forEach(function(e) {
                    s.info[e] = this.audioTrack[e]
                }, this)),
                1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined",
                this.emittedTracks += this.pendingTracks.length,
                n = $.initSegment(this.pendingTracks),
                s.initSegment = new Uint8Array(n.byteLength),
                s.initSegment.set(n),
                s.data = new Uint8Array(this.pendingBytes),
                r = 0; r < this.pendingBoxes.length; r++)
                    s.data.set(this.pendingBoxes[r], a),
                    a += this.pendingBoxes[r].byteLength;
                for (r = 0; r < this.pendingCaptions.length; r++)
                    (t = this.pendingCaptions[r]).startTime = t.startPts,
                    this.keepOriginalTimestamps || (t.startTime -= o),
                    t.startTime /= 9e4,
                    t.endTime = t.endPts,
                    this.keepOriginalTimestamps || (t.endTime -= o),
                    t.endTime /= 9e4,
                    s.captionStreams[t.stream] = !0,
                    s.captions.push(t);
                for (r = 0; r < this.pendingMetadata.length; r++)
                    (i = this.pendingMetadata[r]).cueTime = i.pts,
                    this.keepOriginalTimestamps || (i.cueTime -= o),
                    i.cueTime /= 9e4,
                    s.metadata.push(i);
                s.metadata.dispatchType = this.metadataStream.dispatchType,
                this.pendingTracks.length = 0,
                this.videoTrack = null,
                this.pendingBoxes.length = 0,
                this.pendingCaptions.length = 0,
                this.pendingBytes = 0,
                this.pendingMetadata.length = 0,
                this.trigger("data", s),
                this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
                this.emittedTracks = 0)
            }
            ,
            (ft = function(e) {
                var t, i, n = this, r = !0;
                ft.prototype.init.call(this),
                e = e || {},
                this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0,
                this.transmuxPipeline_ = {},
                this.setupAacPipeline = function() {
                    var t = {};
                    this.transmuxPipeline_ = t,
                    t.type = "aac",
                    t.metadataStream = new et.MetadataStream,
                    t.aacStream = new gt,
                    t.audioTimestampRolloverStream = new et.TimestampRolloverStream("audio"),
                    t.timedMetadataTimestampRolloverStream = new et.TimestampRolloverStream("timed-metadata"),
                    t.adtsStream = new at,
                    t.coalesceStream = new mt(e,t.metadataStream),
                    t.headOfPipeline = t.aacStream,
                    t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),
                    t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
                    t.metadataStream.on("timestamp", function(e) {
                        t.aacStream.setTimestamp(e.timeStamp)
                    }),
                    t.aacStream.on("data", function(r) {
                        "timed-metadata" !== r.type || t.audioSegmentStream || (i = i || {
                            timelineStartInfo: {
                                baseMediaDecodeTime: n.baseMediaDecodeTime
                            },
                            codec: "adts",
                            type: "audio"
                        },
                        t.coalesceStream.numberOfTracks++,
                        t.audioSegmentStream = new pt(i,e),
                        t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
                    }),
                    t.coalesceStream.on("data", this.trigger.bind(this, "data")),
                    t.coalesceStream.on("done", this.trigger.bind(this, "done"))
                }
                ,
                this.setupTsPipeline = function() {
                    var r = {};
                    this.transmuxPipeline_ = r,
                    r.type = "ts",
                    r.metadataStream = new et.MetadataStream,
                    r.packetStream = new et.TransportPacketStream,
                    r.parseStream = new et.TransportParseStream,
                    r.elementaryStream = new et.ElementaryStream,
                    r.videoTimestampRolloverStream = new et.TimestampRolloverStream("video"),
                    r.audioTimestampRolloverStream = new et.TimestampRolloverStream("audio"),
                    r.timedMetadataTimestampRolloverStream = new et.TimestampRolloverStream("timed-metadata"),
                    r.adtsStream = new at,
                    r.h264Stream = new yt,
                    r.captionStream = new et.CaptionStream,
                    r.coalesceStream = new mt(e,r.metadataStream),
                    r.headOfPipeline = r.packetStream,
                    r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream),
                    r.elementaryStream.pipe(r.videoTimestampRolloverStream).pipe(r.h264Stream),
                    r.elementaryStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream),
                    r.elementaryStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream),
                    r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream),
                    r.elementaryStream.on("data", function(a) {
                        var s;
                        if ("metadata" === a.type) {
                            for (s = a.tracks.length; s--; )
                                t || "video" !== a.tracks[s].type ? i || "audio" !== a.tracks[s].type || ((i = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime) : (t = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime;
                            t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++,
                            r.videoSegmentStream = new ht(t,e),
                            r.videoSegmentStream.on("timelineStartInfo", function(e) {
                                i && (i.timelineStartInfo = e,
                                r.audioSegmentStream.setEarliestDts(e.dts))
                            }),
                            r.videoSegmentStream.on("processedGopsInfo", n.trigger.bind(n, "gopInfo")),
                            r.videoSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "videoSegmentTimingInfo")),
                            r.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
                                i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                            }),
                            r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)),
                            i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++,
                            r.audioSegmentStream = new pt(i,e),
                            r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream))
                        }
                    }),
                    r.coalesceStream.on("data", this.trigger.bind(this, "data")),
                    r.coalesceStream.on("done", this.trigger.bind(this, "done"))
                }
                ,
                this.setBaseMediaDecodeTime = function(n) {
                    var r = this.transmuxPipeline_;
                    e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n),
                    i && (i.timelineStartInfo.dts = void 0,
                    i.timelineStartInfo.pts = void 0,
                    Se(i),
                    e.keepOriginalTimestamps || (i.timelineStartInfo.baseMediaDecodeTime = n),
                    r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()),
                    t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = [],
                    r.videoTimestampRolloverStream.discontinuity()),
                    t.timelineStartInfo.dts = void 0,
                    t.timelineStartInfo.pts = void 0,
                    Se(t),
                    r.captionStream.reset(),
                    e.keepOriginalTimestamps || (t.timelineStartInfo.baseMediaDecodeTime = n)),
                    r.timedMetadataTimestampRolloverStream && r.timedMetadataTimestampRolloverStream.discontinuity()
                }
                ,
                this.setAudioAppendStart = function(e) {
                    i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                }
                ,
                this.alignGopsWith = function(e) {
                    t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                }
                ,
                this.push = function(e) {
                    if (r) {
                        var t = vt(e);
                        t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(),
                        r = !1
                    }
                    this.transmuxPipeline_.headOfPipeline.push(e)
                }
                ,
                this.flush = function() {
                    r = !0,
                    this.transmuxPipeline_.headOfPipeline.flush()
                }
                ,
                this.resetCaptions = function() {
                    this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                }
            }
            ).prototype = new re;
            var kt, wt, Ct = {
                Transmuxer: ft,
                VideoSegmentStream: ht,
                AudioSegmentStream: pt,
                AUDIO_PROPERTIES: _t,
                VIDEO_PROPERTIES: bt,
                generateVideoSegmentTimingInfo: St
            }, Et = Y.parseType, At = function(e) {
                return new Date(1e3 * e - 20828448e5)
            }, Pt = function(e) {
                return {
                    isLeading: (12 & e[0]) >>> 2,
                    dependsOn: 3 & e[0],
                    isDependedOn: (192 & e[1]) >>> 6,
                    hasRedundancy: (48 & e[1]) >>> 4,
                    paddingValue: (14 & e[1]) >>> 1,
                    isNonSyncSample: 1 & e[1],
                    degradationPriority: e[2] << 8 | e[3]
                }
            }, Lt = function(e) {
                var t, i, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = [];
                for (t = 0; t + 4 < e.length; t += i)
                    if (i = n.getUint32(t),
                    t += 4,
                    i <= 0)
                        r.push("<span style='color:red;'>MALFORMED DATA</span>");
                    else
                        switch (31 & e[t]) {
                        case 1:
                            r.push("slice_layer_without_partitioning_rbsp");
                            break;
                        case 5:
                            r.push("slice_layer_without_partitioning_rbsp_idr");
                            break;
                        case 6:
                            r.push("sei_rbsp");
                            break;
                        case 7:
                            r.push("seq_parameter_set_rbsp");
                            break;
                        case 8:
                            r.push("pic_parameter_set_rbsp");
                            break;
                        case 9:
                            r.push("access_unit_delimiter_rbsp");
                            break;
                        default:
                            r.push("UNKNOWN NAL - " + e[t] & 31)
                        }
                return r
            }, Ot = {
                avc1: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                    return {
                        dataReferenceIndex: t.getUint16(6),
                        width: t.getUint16(24),
                        height: t.getUint16(26),
                        horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                        vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                        frameCount: t.getUint16(40),
                        depth: t.getUint16(74),
                        config: kt(e.subarray(78, e.byteLength))
                    }
                },
                avcC: function(e) {
                    var t, i, n, r, a = new DataView(e.buffer,e.byteOffset,e.byteLength), s = {
                        configurationVersion: e[0],
                        avcProfileIndication: e[1],
                        profileCompatibility: e[2],
                        avcLevelIndication: e[3],
                        lengthSizeMinusOne: 3 & e[4],
                        sps: [],
                        pps: []
                    }, o = 31 & e[5];
                    for (n = 6,
                    r = 0; r < o; r++)
                        i = a.getUint16(n),
                        n += 2,
                        s.sps.push(new Uint8Array(e.subarray(n, n + i))),
                        n += i;
                    for (t = e[n],
                    n++,
                    r = 0; r < t; r++)
                        i = a.getUint16(n),
                        n += 2,
                        s.pps.push(new Uint8Array(e.subarray(n, n + i))),
                        n += i;
                    return s
                },
                btrt: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                    return {
                        bufferSizeDB: t.getUint32(0),
                        maxBitrate: t.getUint32(4),
                        avgBitrate: t.getUint32(8)
                    }
                },
                esds: function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        esId: e[6] << 8 | e[7],
                        streamPriority: 31 & e[8],
                        decoderConfig: {
                            objectProfileIndication: e[11],
                            streamType: e[12] >>> 2 & 63,
                            bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                            maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                            avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                            decoderConfigDescriptor: {
                                tag: e[24],
                                length: e[25],
                                audioObjectType: e[26] >>> 3 & 31,
                                samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                                channelConfiguration: e[27] >>> 3 & 15
                            }
                        }
                    }
                },
                ftyp: function(e) {
                    for (var t = new DataView(e.buffer,e.byteOffset,e.byteLength), i = {
                        majorBrand: Et(e.subarray(0, 4)),
                        minorVersion: t.getUint32(4),
                        compatibleBrands: []
                    }, n = 8; n < e.byteLength; )
                        i.compatibleBrands.push(Et(e.subarray(n, n + 4))),
                        n += 4;
                    return i
                },
                dinf: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                dref: function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        dataReferences: kt(e.subarray(8))
                    }
                },
                hdlr: function(e) {
                    var t = {
                        version: new DataView(e.buffer,e.byteOffset,e.byteLength).getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        handlerType: Et(e.subarray(8, 12)),
                        name: ""
                    }
                      , i = 8;
                    for (i = 24; i < e.byteLength; i++) {
                        if (0 === e[i]) {
                            i++;
                            break
                        }
                        t.name += String.fromCharCode(e[i])
                    }
                    return t.name = decodeURIComponent(escape(t.name)),
                    t
                },
                mdat: function(e) {
                    return {
                        byteLength: e.byteLength,
                        nals: Lt(e)
                    }
                },
                mdhd: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = 4, r = {
                        version: i.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        language: ""
                    };
                    return 1 === r.version ? (n += 4,
                    r.creationTime = At(i.getUint32(n)),
                    n += 8,
                    r.modificationTime = At(i.getUint32(n)),
                    n += 4,
                    r.timescale = i.getUint32(n),
                    n += 8,
                    r.duration = i.getUint32(n)) : (r.creationTime = At(i.getUint32(n)),
                    n += 4,
                    r.modificationTime = At(i.getUint32(n)),
                    n += 4,
                    r.timescale = i.getUint32(n),
                    n += 4,
                    r.duration = i.getUint32(n)),
                    n += 4,
                    t = i.getUint16(n),
                    r.language += String.fromCharCode(96 + (t >> 10)),
                    r.language += String.fromCharCode(96 + ((992 & t) >> 5)),
                    r.language += String.fromCharCode(96 + (31 & t)),
                    r
                },
                mdia: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                mfhd: function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                    }
                },
                minf: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                mp4a: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
                      , i = {
                        dataReferenceIndex: t.getUint16(6),
                        channelcount: t.getUint16(16),
                        samplesize: t.getUint16(18),
                        samplerate: t.getUint16(24) + t.getUint16(26) / 65536
                    };
                    return e.byteLength > 28 && (i.streamDescriptor = kt(e.subarray(28))[0]),
                    i
                },
                moof: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                moov: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                mvex: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                mvhd: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
                      , i = 4
                      , n = {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4))
                    };
                    return 1 === n.version ? (i += 4,
                    n.creationTime = At(t.getUint32(i)),
                    i += 8,
                    n.modificationTime = At(t.getUint32(i)),
                    i += 4,
                    n.timescale = t.getUint32(i),
                    i += 8,
                    n.duration = t.getUint32(i)) : (n.creationTime = At(t.getUint32(i)),
                    i += 4,
                    n.modificationTime = At(t.getUint32(i)),
                    i += 4,
                    n.timescale = t.getUint32(i),
                    i += 4,
                    n.duration = t.getUint32(i)),
                    i += 4,
                    n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16,
                    i += 4,
                    n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
                    i += 2,
                    i += 2,
                    i += 8,
                    n.matrix = new Uint32Array(e.subarray(i, i + 36)),
                    i += 36,
                    i += 24,
                    n.nextTrackId = t.getUint32(i),
                    n
                },
                pdin: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                    return {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        rate: t.getUint32(4),
                        initialDelay: t.getUint32(8)
                    }
                },
                sdtp: function(e) {
                    var t, i = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        samples: []
                    };
                    for (t = 4; t < e.byteLength; t++)
                        i.samples.push({
                            dependsOn: (48 & e[t]) >> 4,
                            isDependedOn: (12 & e[t]) >> 2,
                            hasRedundancy: 3 & e[t]
                        });
                    return i
                },
                sidx: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        references: [],
                        referenceId: i.getUint32(4),
                        timescale: i.getUint32(8),
                        earliestPresentationTime: i.getUint32(12),
                        firstOffset: i.getUint32(16)
                    }, r = i.getUint16(22);
                    for (t = 24; r; t += 12,
                    r--)
                        n.references.push({
                            referenceType: (128 & e[t]) >>> 7,
                            referencedSize: 2147483647 & i.getUint32(t),
                            subsegmentDuration: i.getUint32(t + 4),
                            startsWithSap: !!(128 & e[t + 8]),
                            sapType: (112 & e[t + 8]) >>> 4,
                            sapDeltaTime: 268435455 & i.getUint32(t + 8)
                        });
                    return n
                },
                smhd: function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        balance: e[4] + e[5] / 256
                    }
                },
                stbl: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                stco: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        chunkOffsets: []
                    }, r = i.getUint32(4);
                    for (t = 8; r; t += 4,
                    r--)
                        n.chunkOffsets.push(i.getUint32(t));
                    return n
                },
                stsc: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = i.getUint32(4), r = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleToChunks: []
                    };
                    for (t = 8; n; t += 12,
                    n--)
                        r.sampleToChunks.push({
                            firstChunk: i.getUint32(t),
                            samplesPerChunk: i.getUint32(t + 4),
                            sampleDescriptionIndex: i.getUint32(t + 8)
                        });
                    return r
                },
                stsd: function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleDescriptions: kt(e.subarray(8))
                    }
                },
                stsz: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleSize: i.getUint32(4),
                        entries: []
                    };
                    for (t = 12; t < e.byteLength; t += 4)
                        n.entries.push(i.getUint32(t));
                    return n
                },
                stts: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        timeToSamples: []
                    }, r = i.getUint32(4);
                    for (t = 8; r; t += 8,
                    r--)
                        n.timeToSamples.push({
                            sampleCount: i.getUint32(t),
                            sampleDelta: i.getUint32(t + 4)
                        });
                    return n
                },
                styp: function(e) {
                    return Ot.ftyp(e)
                },
                tfdt: function(e) {
                    var t = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        baseMediaDecodeTime: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                    };
                    return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32),
                    t.baseMediaDecodeTime += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]),
                    t
                },
                tfhd: function(e) {
                    var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        trackId: i.getUint32(4)
                    }, r = 1 & n.flags[2], a = 2 & n.flags[2], s = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0];
                    return t = 8,
                    r && (t += 4,
                    n.baseDataOffset = i.getUint32(12),
                    t += 4),
                    a && (n.sampleDescriptionIndex = i.getUint32(t),
                    t += 4),
                    s && (n.defaultSampleDuration = i.getUint32(t),
                    t += 4),
                    o && (n.defaultSampleSize = i.getUint32(t),
                    t += 4),
                    u && (n.defaultSampleFlags = i.getUint32(t)),
                    l && (n.durationIsEmpty = !0),
                    !r && c && (n.baseDataOffsetIsMoof = !0),
                    n
                },
                tkhd: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
                      , i = 4
                      , n = {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4))
                    };
                    return 1 === n.version ? (i += 4,
                    n.creationTime = At(t.getUint32(i)),
                    i += 8,
                    n.modificationTime = At(t.getUint32(i)),
                    i += 4,
                    n.trackId = t.getUint32(i),
                    i += 4,
                    i += 8,
                    n.duration = t.getUint32(i)) : (n.creationTime = At(t.getUint32(i)),
                    i += 4,
                    n.modificationTime = At(t.getUint32(i)),
                    i += 4,
                    n.trackId = t.getUint32(i),
                    i += 4,
                    i += 4,
                    n.duration = t.getUint32(i)),
                    i += 4,
                    i += 8,
                    n.layer = t.getUint16(i),
                    i += 2,
                    n.alternateGroup = t.getUint16(i),
                    i += 2,
                    n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
                    i += 2,
                    i += 2,
                    n.matrix = new Uint32Array(e.subarray(i, i + 36)),
                    i += 36,
                    n.width = t.getUint16(i) + t.getUint16(i + 2) / 16,
                    i += 4,
                    n.height = t.getUint16(i) + t.getUint16(i + 2) / 16,
                    n
                },
                traf: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                trak: function(e) {
                    return {
                        boxes: kt(e)
                    }
                },
                trex: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        trackId: t.getUint32(4),
                        defaultSampleDescriptionIndex: t.getUint32(8),
                        defaultSampleDuration: t.getUint32(12),
                        defaultSampleSize: t.getUint32(16),
                        sampleDependsOn: 3 & e[20],
                        sampleIsDependedOn: (192 & e[21]) >> 6,
                        sampleHasRedundancy: (48 & e[21]) >> 4,
                        samplePaddingValue: (14 & e[21]) >> 1,
                        sampleIsDifferenceSample: !!(1 & e[21]),
                        sampleDegradationPriority: t.getUint16(22)
                    }
                },
                trun: function(e) {
                    var t, i = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        samples: []
                    }, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = 1 & i.flags[2], a = 4 & i.flags[2], s = 1 & i.flags[1], o = 2 & i.flags[1], u = 4 & i.flags[1], l = 8 & i.flags[1], c = n.getUint32(4), d = 8;
                    for (r && (i.dataOffset = n.getInt32(d),
                    d += 4),
                    a && c && (t = {
                        flags: Pt(e.subarray(d, d + 4))
                    },
                    d += 4,
                    s && (t.duration = n.getUint32(d),
                    d += 4),
                    o && (t.size = n.getUint32(d),
                    d += 4),
                    l && (t.compositionTimeOffset = n.getUint32(d),
                    d += 4),
                    i.samples.push(t),
                    c--); c--; )
                        t = {},
                        s && (t.duration = n.getUint32(d),
                        d += 4),
                        o && (t.size = n.getUint32(d),
                        d += 4),
                        u && (t.flags = Pt(e.subarray(d, d + 4)),
                        d += 4),
                        l && (t.compositionTimeOffset = n.getUint32(d),
                        d += 4),
                        i.samples.push(t);
                    return i
                },
                "url ": function(e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4))
                    }
                },
                vmhd: function(e) {
                    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        graphicsmode: t.getUint16(4),
                        opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
                    }
                }
            }, It = {
                inspect: kt = function(e) {
                    for (var t, i, n, r, a, s = 0, o = [], u = new ArrayBuffer(e.length), l = new Uint8Array(u), c = 0; c < e.length; ++c)
                        l[c] = e[c];
                    for (t = new DataView(u); s < e.byteLength; )
                        i = t.getUint32(s),
                        n = Et(e.subarray(s + 4, s + 8)),
                        r = i > 1 ? s + i : e.byteLength,
                        (a = (Ot[n] || function(e) {
                            return {
                                data: e
                            }
                        }
                        )(e.subarray(s + 8, r))).size = i,
                        a.type = n,
                        o.push(a),
                        s = r;
                    return o
                }
                ,
                textify: wt = function(e, t) {
                    var i;
                    return t = t || 0,
                    i = new Array(2 * t + 1).join(" "),
                    e.map(function(e, n) {
                        return i + e.type + "\n" + Object.keys(e).filter(function(e) {
                            return "type" !== e && "boxes" !== e
                        }).map(function(t) {
                            var n = i + "  " + t + ": "
                              , r = e[t];
                            if (r instanceof Uint8Array || r instanceof Uint32Array) {
                                var a = Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map(function(e) {
                                    return " " + ("00" + e.toString(16)).slice(-2)
                                }).join("").match(/.{1,24}/g);
                                return a ? 1 === a.length ? n + "<" + a.join("").slice(1) + ">" : n + "<\n" + a.map(function(e) {
                                    return i + "  " + e
                                }).join("\n") + "\n" + i + "  >" : n + "<>"
                            }
                            return n + JSON.stringify(r, null, 2).split("\n").map(function(e, t) {
                                return 0 === t ? e : i + "  " + e
                            }).join("\n")
                        }).join("\n") + (e.boxes ? "\n" + wt(e.boxes, t + 1) : "")
                    }).join("\n")
                }
                ,
                parseTfdt: Ot.tfdt,
                parseHdlr: Ot.hdlr,
                parseTfhd: Ot.tfhd,
                parseTrun: Ot.trun,
                parseSidx: Ot.sidx
            }, xt = Pe, Dt = Me.CaptionStream, Ut = function(e, t) {
                for (var i = e, n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (i < r.size)
                        return r;
                    i -= r.size
                }
                return null
            }, Rt = function(e, t) {
                var i = Y.findBox(e, ["moof", "traf"])
                  , n = Y.findBox(e, ["mdat"])
                  , r = {}
                  , a = [];
                return n.forEach(function(e, t) {
                    var n = i[t];
                    a.push({
                        mdat: e,
                        traf: n
                    })
                }),
                a.forEach(function(e) {
                    var i, n = e.mdat, a = e.traf, s = Y.findBox(a, ["tfhd"]), o = It.parseTfhd(s[0]), u = o.trackId, l = Y.findBox(a, ["tfdt"]), c = l.length > 0 ? It.parseTfdt(l[0]).baseMediaDecodeTime : 0, d = Y.findBox(a, ["trun"]);
                    t === u && d.length > 0 && (i = function(e, t, i) {
                        var n, r, a, s, o = new DataView(e.buffer,e.byteOffset,e.byteLength), u = [];
                        for (r = 0; r + 4 < e.length; r += a)
                            if (a = o.getUint32(r),
                            r += 4,
                            !(a <= 0))
                                switch (31 & e[r]) {
                                case 6:
                                    var l = e.subarray(r + 1, r + 1 + a)
                                      , c = Ut(r, t);
                                    n = {
                                        nalUnitType: "sei_rbsp",
                                        size: a,
                                        data: l,
                                        escapedRBSP: xt(l),
                                        trackId: i
                                    },
                                    c ? (n.pts = c.pts,
                                    n.dts = c.dts,
                                    s = c) : (n.pts = s.pts,
                                    n.dts = s.dts),
                                    u.push(n)
                                }
                        return u
                    }(n, function(e, t, i) {
                        var n = t
                          , r = i.defaultSampleDuration || 0
                          , a = i.defaultSampleSize || 0
                          , s = i.trackId
                          , o = [];
                        return e.forEach(function(e) {
                            var t = It.parseTrun(e).samples;
                            t.forEach(function(e) {
                                void 0 === e.duration && (e.duration = r),
                                void 0 === e.size && (e.size = a),
                                e.trackId = s,
                                e.dts = n,
                                void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
                                e.pts = n + e.compositionTimeOffset,
                                n += e.duration
                            }),
                            o = o.concat(t)
                        }),
                        o
                    }(d, c, o), u),
                    r[u] || (r[u] = []),
                    r[u] = r[u].concat(i))
                }),
                r
            }, Mt = {
                generator: $,
                probe: Y,
                Transmuxer: Ct.Transmuxer,
                AudioSegmentStream: Ct.AudioSegmentStream,
                VideoSegmentStream: Ct.VideoSegmentStream,
                CaptionParser: function() {
                    var e, t, i, n, r, a = !1;
                    this.isInitialized = function() {
                        return a
                    }
                    ,
                    this.init = function() {
                        e = new Dt,
                        a = !0,
                        e.on("data", function(e) {
                            e.startTime = e.startPts / n,
                            e.endTime = e.endPts / n,
                            r.captions.push(e),
                            r.captionStreams[e.stream] = !0
                        })
                    }
                    ,
                    this.isNewInit = function(e, t) {
                        return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || i === e[0] && n === t[i])
                    }
                    ,
                    this.parse = function(e, a, s) {
                        var o;
                        if (!this.isInitialized())
                            return null;
                        if (!a || !s)
                            return null;
                        if (this.isNewInit(a, s))
                            i = a[0],
                            n = s[i];
                        else if (!i || !n)
                            return t.push(e),
                            null;
                        for (; t.length > 0; ) {
                            var u = t.shift();
                            this.parse(u, a, s)
                        }
                        return null !== (o = function(e, t, i) {
                            return t ? {
                                seiNals: Rt(e, t)[t],
                                timescale: i
                            } : null
                        }(e, i, n)) && o.seiNals ? (this.pushNals(o.seiNals),
                        this.flushStream(),
                        r) : null
                    }
                    ,
                    this.pushNals = function(t) {
                        if (!this.isInitialized() || !t || 0 === t.length)
                            return null;
                        t.forEach(function(t) {
                            e.push(t)
                        })
                    }
                    ,
                    this.flushStream = function() {
                        if (!this.isInitialized())
                            return null;
                        e.flush()
                    }
                    ,
                    this.clearParsedCaptions = function() {
                        r.captions = [],
                        r.captionStreams = {}
                    }
                    ,
                    this.resetCaptionStream = function() {
                        if (!this.isInitialized())
                            return null;
                        e.reset()
                    }
                    ,
                    this.clearAllCaptions = function() {
                        this.clearParsedCaptions(),
                        this.resetCaptionStream()
                    }
                    ,
                    this.reset = function() {
                        t = [],
                        i = null,
                        n = null,
                        r ? this.clearParsedCaptions() : r = {
                            captions: [],
                            captionStreams: {}
                        },
                        this.resetCaptionStream()
                    }
                    ,
                    this.reset()
                }
            }, Bt = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }, Nt = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }(), jt = function() {
                function e(t, i) {
                    Bt(this, e),
                    this.options = i || {},
                    this.self = t,
                    this.init()
                }
                return Nt(e, [{
                    key: "init",
                    value: function() {
                        this.transmuxer && this.transmuxer.dispose(),
                        this.transmuxer = new Mt.Transmuxer(this.options),
                        function(e, t) {
                            t.on("data", function(t) {
                                var i = t.initSegment;
                                t.initSegment = {
                                    data: i.buffer,
                                    byteOffset: i.byteOffset,
                                    byteLength: i.byteLength
                                };
                                var n = t.data;
                                t.data = n.buffer,
                                e.postMessage({
                                    action: "data",
                                    segment: t,
                                    byteOffset: n.byteOffset,
                                    byteLength: n.byteLength
                                }, [t.data])
                            }),
                            t.captionStream && t.captionStream.on("data", function(t) {
                                e.postMessage({
                                    action: "caption",
                                    data: t
                                })
                            }),
                            t.on("done", function(t) {
                                e.postMessage({
                                    action: "done"
                                })
                            }),
                            t.on("gopInfo", function(t) {
                                e.postMessage({
                                    action: "gopInfo",
                                    gopInfo: t
                                })
                            }),
                            t.on("videoSegmentTimingInfo", function(t) {
                                e.postMessage({
                                    action: "videoSegmentTimingInfo",
                                    videoSegmentTimingInfo: t
                                })
                            })
                        }(this.self, this.transmuxer)
                    }
                }, {
                    key: "push",
                    value: function(e) {
                        var t = new Uint8Array(e.data,e.byteOffset,e.byteLength);
                        this.transmuxer.push(t)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.init()
                    }
                }, {
                    key: "setTimestampOffset",
                    value: function(e) {
                        var t = e.timestampOffset || 0;
                        this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
                    }
                }, {
                    key: "setAudioAppendStart",
                    value: function(e) {
                        this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
                    }
                }, {
                    key: "flush",
                    value: function(e) {
                        this.transmuxer.flush()
                    }
                }, {
                    key: "resetCaptions",
                    value: function() {
                        this.transmuxer.resetCaptions()
                    }
                }, {
                    key: "alignGopsWith",
                    value: function(e) {
                        this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                    }
                }]),
                e
            }();
            new function(e) {
                e.onmessage = function(t) {
                    "init" === t.data.action && t.data.options ? this.messageHandlers = new jt(e,t.data.options) : (this.messageHandlers || (this.messageHandlers = new jt(e)),
                    t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data))
                }
            }
            (i)
        }()
    }
    )
      , fs = {
        videoCodec: "avc1",
        videoObjectTypeIndicator: ".4d400d",
        audioProfile: "2"
    }
      , ms = function(e) {
        return e.map(function(e) {
            return e.replace(/avc1\.(\d+)\.(\d+)/i, function(e, t, i) {
                return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
            })
        })
    }
      , gs = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = {
            codecCount: 0
        }
          , i = void 0;
        return t.codecCount = e.split(",").length,
        t.codecCount = t.codecCount || 2,
        (i = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e)) && (t.videoCodec = i[2],
        t.videoObjectTypeIndicator = i[3]),
        t.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),
        t.audioProfile = t.audioProfile && t.audioProfile[2],
        t
    }
      , ys = function(e, t, i) {
        return e + "/" + t + '; codecs="' + i.filter(function(e) {
            return !!e
        }).join(", ") + '"'
    }
      , vs = function(e, t) {
        var i = function(e) {
            return e.segments && e.segments.length && e.segments[0].map ? "mp4" : "mp2t"
        }(t)
          , n = function(e) {
            var t = e.attributes || {};
            return t.CODECS ? gs(t.CODECS) : fs
        }(t)
          , r = t.attributes || {}
          , a = !0
          , s = !1;
        if (!t)
            return [];
        if (e.mediaGroups.AUDIO && r.AUDIO) {
            var o = e.mediaGroups.AUDIO[r.AUDIO];
            if (o)
                for (var u in s = !0,
                a = !1,
                o)
                    if (!o[u].uri && !o[u].playlists) {
                        a = !0;
                        break
                    }
        }
        s && !n.audioProfile && (a || (n.audioProfile = function(e, t) {
            if (!e.mediaGroups.AUDIO || !t)
                return null;
            var i = e.mediaGroups.AUDIO[t];
            if (!i)
                return null;
            for (var n in i) {
                var r = i[n];
                if (r.default && r.playlists)
                    return gs(r.playlists[0].attributes.CODECS).audioProfile
            }
            return null
        }(e, r.AUDIO)),
        n.audioProfile || (ta.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),
        n.audioProfile = fs.audioProfile));
        var l = {};
        n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator),
        n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile);
        var c = ys("audio", i, [l.audio])
          , d = ys("video", i, [l.video])
          , h = ys("video", i, [l.video, l.audio]);
        return s ? !a && l.video ? [d, c] : a || l.video ? [h, c] : [c, c] : l.video ? [h] : [c]
    }
      , _s = function(e) {
        return /mp4a\.\d+.\d+/i.test(e)
    }
      , bs = function(e) {
        return /avc1\.[\da-f]+/i.test(e)
    }
      , Ts = function(e, t, i) {
        if (null == t || !e.length)
            return [];
        var n = Math.ceil(9e4 * (t - i + 3))
          , r = void 0;
        for (r = 0; r < e.length && !(e[r].pts > n); r++)
            ;
        return e.slice(r)
    }
      , Ss = function(e, t, i) {
        var n = null
          , r = null
          , a = 0
          , s = []
          , o = [];
        if (!e && !t)
            return ta.createTimeRange();
        if (!e)
            return t.buffered;
        if (!t)
            return e.buffered;
        if (i)
            return e.buffered;
        if (0 === e.buffered.length && 0 === t.buffered.length)
            return ta.createTimeRange();
        for (var u = e.buffered, l = t.buffered, c = u.length; c--; )
            s.push({
                time: u.start(c),
                type: "start"
            }),
            s.push({
                time: u.end(c),
                type: "end"
            });
        for (c = l.length; c--; )
            s.push({
                time: l.start(c),
                type: "start"
            }),
            s.push({
                time: l.end(c),
                type: "end"
            });
        for (s.sort(function(e, t) {
            return e.time - t.time
        }),
        c = 0; c < s.length; c++)
            "start" === s[c].type ? 2 === ++a && (n = s[c].time) : "end" === s[c].type && 1 === --a && (r = s[c].time),
            null !== n && null !== r && (o.push([n, r]),
            n = null,
            r = null);
        return ta.createTimeRanges(o)
    }
      , ks = function(e) {
        function t(e, i) {
            sa(this, t);
            var n = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, ta.EventTarget));
            n.timestampOffset_ = 0,
            n.pendingBuffers_ = [],
            n.bufferUpdating_ = !1,
            n.mediaSource_ = e,
            n.codecs_ = i,
            n.audioCodec_ = null,
            n.videoCodec_ = null,
            n.audioDisabled_ = !1,
            n.appendAudioInitSegment_ = !0,
            n.gopBuffer_ = [],
            n.timeMapping_ = 0,
            n.safeAppend_ = ta.browser.IE_VERSION >= 11;
            var r = {
                remux: !1,
                alignGopsAtEnd: n.safeAppend_
            };
            return n.codecs_.forEach(function(e) {
                _s(e) ? n.audioCodec_ = e : bs(e) && (n.videoCodec_ = e)
            }),
            n.transmuxer_ = new ps,
            n.transmuxer_.postMessage({
                action: "init",
                options: r
            }),
            n.transmuxer_.onmessage = function(e) {
                return "data" === e.data.action ? n.data_(e) : "done" === e.data.action ? n.done_(e) : "gopInfo" === e.data.action ? n.appendGopInfo_(e) : "videoSegmentTimingInfo" === e.data.action ? n.videoSegmentTimingInfo_(e.data.videoSegmentTimingInfo) : void 0
            }
            ,
            Object.defineProperty(n, "timestampOffset", {
                get: function() {
                    return this.timestampOffset_
                },
                set: function(e) {
                    "number" == typeof e && e >= 0 && (this.timestampOffset_ = e,
                    this.appendAudioInitSegment_ = !0,
                    this.gopBuffer_.length = 0,
                    this.timeMapping_ = 0,
                    this.transmuxer_.postMessage({
                        action: "setTimestampOffset",
                        timestampOffset: e
                    }))
                }
            }),
            Object.defineProperty(n, "appendWindowStart", {
                get: function() {
                    return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                },
                set: function(e) {
                    this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e),
                    this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
                }
            }),
            Object.defineProperty(n, "updating", {
                get: function() {
                    return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                }
            }),
            Object.defineProperty(n, "buffered", {
                get: function() {
                    return Ss(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_)
                }
            }),
            n
        }
        return ua(t, e),
        oa(t, [{
            key: "data_",
            value: function(e) {
                var t = e.data.segment;
                t.data = new Uint8Array(t.data,e.data.byteOffset,e.data.byteLength),
                t.initSegment = new Uint8Array(t.initSegment.data,t.initSegment.byteOffset,t.initSegment.byteLength),
                function(e, t, i) {
                    var n = t.player_;
                    if (i.captions && i.captions.length)
                        for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}),
                        i.captionStreams)
                            if (!e.inbandTextTracks_[r]) {
                                n.tech_.trigger({
                                    type: "usage",
                                    name: "hls-608"
                                });
                                var a = n.textTracks().getTrackById(r);
                                e.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
                                    kind: "captions",
                                    id: r,
                                    label: r
                                }, !1).track
                            }
                    i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = n.addRemoteTextTrack({
                        kind: "metadata",
                        label: "Timed Metadata"
                    }, !1).track,
                    e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
                }(this, this.mediaSource_, t),
                this.pendingBuffers_.push(t)
            }
        }, {
            key: "done_",
            value: function(e) {
                "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
            }
        }, {
            key: "videoSegmentTimingInfo_",
            value: function(e) {
                var t = {
                    start: {
                        decode: e.start.dts / 9e4,
                        presentation: e.start.pts / 9e4
                    },
                    end: {
                        decode: e.end.dts / 9e4,
                        presentation: e.end.pts / 9e4
                    },
                    baseMediaDecodeTime: e.baseMediaDecodeTime / 9e4
                };
                e.prependedContentDuration && (t.prependedContentDuration = e.prependedContentDuration / 9e4),
                this.trigger({
                    type: "videoSegmentTimingInfo",
                    videoSegmentTimingInfo: t
                })
            }
        }, {
            key: "createRealSourceBuffers_",
            value: function() {
                var e = this
                  , t = ["audio", "video"];
                t.forEach(function(i) {
                    if (e[i + "Codec_"] && !e[i + "Buffer_"]) {
                        var n = null;
                        if (e.mediaSource_[i + "Buffer_"])
                            (n = e.mediaSource_[i + "Buffer_"]).updating = !1;
                        else {
                            var r = i + '/mp4;codecs="' + e[i + "Codec_"] + '"';
                            n = function(e, t) {
                                var i = e.addSourceBuffer(t)
                                  , n = Object.create(null);
                                n.updating = !1,
                                n.realBuffer_ = i;
                                var r = function(e) {
                                    "function" == typeof i[e] ? n[e] = function() {
                                        return i[e].apply(i, arguments)
                                    }
                                    : void 0 === n[e] && Object.defineProperty(n, e, {
                                        get: function() {
                                            return i[e]
                                        },
                                        set: function(t) {
                                            return i[e] = t
                                        }
                                    })
                                };
                                for (var a in i)
                                    r(a);
                                return n
                            }(e.mediaSource_.nativeMediaSource_, r),
                            e.mediaSource_[i + "Buffer_"] = n
                        }
                        e[i + "Buffer_"] = n,
                        ["update", "updatestart", "updateend"].forEach(function(r) {
                            n.addEventListener(r, function() {
                                if ("audio" !== i || !e.audioDisabled_)
                                    return "updateend" === r && (e[i + "Buffer_"].updating = !1),
                                    t.every(function(t) {
                                        return !("audio" !== t || !e.audioDisabled_) || (i === t || !e[t + "Buffer_"] || !e[t + "Buffer_"].updating)
                                    }) ? e.trigger(r) : void 0
                            })
                        })
                    }
                })
            }
        }, {
            key: "appendBuffer",
            value: function(e) {
                if (this.bufferUpdating_ = !0,
                this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                    var t = this.audioBuffer_.buffered;
                    this.transmuxer_.postMessage({
                        action: "setAudioAppendStart",
                        appendStart: t.end(t.length - 1)
                    })
                }
                this.videoBuffer_ && this.transmuxer_.postMessage({
                    action: "alignGopsWith",
                    gopsToAlignWith: Ts(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
                }),
                this.transmuxer_.postMessage({
                    action: "push",
                    data: e.buffer,
                    byteOffset: e.byteOffset,
                    byteLength: e.byteLength
                }, [e.buffer]),
                this.transmuxer_.postMessage({
                    action: "flush"
                })
            }
        }, {
            key: "appendGopInfo_",
            value: function(e) {
                this.gopBuffer_ = function(e, t, i) {
                    if (!t.length)
                        return e;
                    if (i)
                        return t.slice();
                    for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++)
                        ;
                    return e.slice(0, r).concat(t)
                }(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
            }
        }, {
            key: "remove",
            value: function(e, t) {
                if (this.videoBuffer_ && (this.videoBuffer_.updating = !0,
                this.videoBuffer_.remove(e, t),
                this.gopBuffer_ = function(e, t, i, n) {
                    for (var r = Math.ceil(9e4 * (t - n)), a = Math.ceil(9e4 * (i - n)), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a); )
                        ;
                    if (-1 === o)
                        return s;
                    for (var u = o + 1; u-- && !(e[u].pts <= r); )
                        ;
                    return u = Math.max(u, 0),
                    s.splice(u, o - u + 1),
                    s
                }(this.gopBuffer_, e, t, this.timeMapping_)),
                !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0,
                this.audioBuffer_.remove(e, t)),
                Za(e, t, this.metadataTrack_),
                this.inbandTextTracks_)
                    for (var i in this.inbandTextTracks_)
                        Za(e, t, this.inbandTextTracks_[i])
            }
        }, {
            key: "processPendingSegments_",
            value: function() {
                var e = {
                    video: {
                        segments: [],
                        bytes: 0
                    },
                    audio: {
                        segments: [],
                        bytes: 0
                    },
                    captions: [],
                    metadata: []
                };
                e = this.pendingBuffers_.reduce(function(e, t) {
                    var i = t.type
                      , n = t.data
                      , r = t.initSegment;
                    return e[i].segments.push(n),
                    e[i].bytes += n.byteLength,
                    e[i].initSegment = r,
                    t.captions && (e.captions = e.captions.concat(t.captions)),
                    t.info && (e[i].info = t.info),
                    t.metadata && (e.metadata = e.metadata.concat(t.metadata)),
                    e
                }, e),
                this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null),
                0 === e.audio.bytes && (this.audioCodec_ = null),
                this.createRealSourceBuffers_()),
                e.audio.info && this.mediaSource_.trigger({
                    type: "audioinfo",
                    info: e.audio.info
                }),
                e.video.info && this.mediaSource_.trigger({
                    type: "videoinfo",
                    info: e.video.info
                }),
                this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment),
                e.audio.bytes += e.audio.initSegment.byteLength),
                this.appendAudioInitSegment_ = !1);
                var t = !1;
                this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment),
                e.video.bytes += e.video.initSegment.byteLength,
                this.concatAndAppendSegments_(e.video, this.videoBuffer_)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0),
                ts(this, e.captions, e.metadata),
                !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_),
                this.pendingBuffers_.length = 0,
                t && this.trigger("updateend"),
                this.bufferUpdating_ = !1
            }
        }, {
            key: "concatAndAppendSegments_",
            value: function(e, t) {
                var i = 0
                  , n = void 0;
                if (e.bytes) {
                    n = new Uint8Array(e.bytes),
                    e.segments.forEach(function(e) {
                        n.set(e, i),
                        i += e.byteLength
                    });
                    try {
                        t.updating = !0,
                        t.appendBuffer(n)
                    } catch (e) {
                        this.mediaSource_.player_ && this.mediaSource_.player_.error({
                            code: -3,
                            type: "APPEND_BUFFER_ERR",
                            message: e.message,
                            originalError: e
                        })
                    }
                }
            }
        }, {
            key: "abort",
            value: function() {
                this.videoBuffer_ && this.videoBuffer_.abort(),
                !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(),
                this.transmuxer_ && this.transmuxer_.postMessage({
                    action: "reset"
                }),
                this.pendingBuffers_.length = 0,
                this.bufferUpdating_ = !1
            }
        }]),
        t
    }(ta.EventTarget)
      , ws = function(e) {
        function t() {
            sa(this, t);
            var e = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
              , i = void 0;
            for (i in e.nativeMediaSource_ = new r.a.MediaSource,
            e.nativeMediaSource_)
                i in t.prototype || "function" != typeof e.nativeMediaSource_[i] || (e[i] = e.nativeMediaSource_[i].bind(e.nativeMediaSource_));
            return e.duration_ = NaN,
            Object.defineProperty(e, "duration", {
                get: function() {
                    return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                },
                set: function(e) {
                    this.duration_ = e,
                    e === 1 / 0 || (this.nativeMediaSource_.duration = e)
                }
            }),
            Object.defineProperty(e, "seekable", {
                get: function() {
                    return this.duration_ === 1 / 0 ? ta.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
                }
            }),
            Object.defineProperty(e, "readyState", {
                get: function() {
                    return this.nativeMediaSource_.readyState
                }
            }),
            Object.defineProperty(e, "activeSourceBuffers", {
                get: function() {
                    return this.activeSourceBuffers_
                }
            }),
            e.sourceBuffers = [],
            e.activeSourceBuffers_ = [],
            e.updateActiveSourceBuffers_ = function() {
                if (e.activeSourceBuffers_.length = 0,
                1 === e.sourceBuffers.length) {
                    var t = e.sourceBuffers[0];
                    return t.appendAudioInitSegment_ = !0,
                    t.audioDisabled_ = !t.audioCodec_,
                    void e.activeSourceBuffers_.push(t)
                }
                for (var i = !1, n = !0, r = 0; r < e.player_.audioTracks().length; r++) {
                    var a = e.player_.audioTracks()[r];
                    if (a.enabled && "main" !== a.kind) {
                        i = !0,
                        n = !1;
                        break
                    }
                }
                e.sourceBuffers.forEach(function(t, r) {
                    if (t.appendAudioInitSegment_ = !0,
                    t.videoCodec_ && t.audioCodec_)
                        t.audioDisabled_ = i;
                    else if (t.videoCodec_ && !t.audioCodec_)
                        t.audioDisabled_ = !0,
                        n = !1;
                    else if (!t.videoCodec_ && t.audioCodec_ && (t.audioDisabled_ = r ? n : !n,
                    t.audioDisabled_))
                        return;
                    e.activeSourceBuffers_.push(t)
                })
            }
            ,
            e.onPlayerMediachange_ = function() {
                e.sourceBuffers.forEach(function(e) {
                    e.appendAudioInitSegment_ = !0
                })
            }
            ,
            e.onHlsReset_ = function() {
                e.sourceBuffers.forEach(function(e) {
                    e.transmuxer_ && e.transmuxer_.postMessage({
                        action: "resetCaptions"
                    })
                })
            }
            ,
            e.onHlsSegmentTimeMapping_ = function(t) {
                e.sourceBuffers.forEach(function(e) {
                    return e.timeMapping_ = t.mapping
                })
            }
            ,
            ["sourceopen", "sourceclose", "sourceended"].forEach(function(e) {
                this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
            }, e),
            e.on("sourceopen", function(t) {
                var i = s.a.querySelector('[src="' + e.url_ + '"]');
                i && (e.player_ = ta(i.parentNode),
                e.player_ && (e.player_.tech_.on("hls-reset", e.onHlsReset_),
                e.player_.tech_.on("hls-segment-time-mapping", e.onHlsSegmentTimeMapping_),
                e.player_.audioTracks && e.player_.audioTracks() && (e.player_.audioTracks().on("change", e.updateActiveSourceBuffers_),
                e.player_.audioTracks().on("addtrack", e.updateActiveSourceBuffers_),
                e.player_.audioTracks().on("removetrack", e.updateActiveSourceBuffers_)),
                e.player_.on("mediachange", e.onPlayerMediachange_)))
            }),
            e.on("sourceended", function(t) {
                for (var i = es(e.duration), n = 0; n < e.sourceBuffers.length; n++) {
                    var r = e.sourceBuffers[n]
                      , a = r.metadataTrack_ && r.metadataTrack_.cues;
                    a && a.length && (a[a.length - 1].endTime = i)
                }
            }),
            e.on("sourceclose", function(e) {
                this.sourceBuffers.forEach(function(e) {
                    e.transmuxer_ && e.transmuxer_.terminate()
                }),
                this.sourceBuffers.length = 0,
                this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_),
                this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_),
                this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)),
                this.player_.el_ && this.player_.off("mediachange", this.onPlayerMediachange_),
                this.player_.tech_ && this.player_.tech_.el_ && (this.player_.tech_.off("hls-reset", this.onHlsReset_),
                this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
            }),
            e
        }
        return ua(t, e),
        oa(t, [{
            key: "addSeekableRange_",
            value: function(e, t) {
                var i = void 0;
                if (this.duration !== 1 / 0)
                    throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError",
                    i.code = 11,
                    i;
                (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
            }
        }, {
            key: "addSourceBuffer",
            value: function(e) {
                var t = void 0
                  , i = function(e) {
                    var t = {
                        type: "",
                        parameters: {}
                    }
                      , i = e.trim().split(";");
                    return t.type = i.shift().trim(),
                    i.forEach(function(e) {
                        var i = e.trim().split("=");
                        if (i.length > 1) {
                            var n = i[0].replace(/"/g, "").trim()
                              , r = i[1].replace(/"/g, "").trim();
                            t.parameters[n] = r
                        }
                    }),
                    t
                }(e);
                if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                    var n = [];
                    i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","),
                    n = (n = ms(n)).filter(function(e) {
                        return _s(e) || bs(e)
                    })),
                    0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]),
                    t = new ks(this,n),
                    0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(),
                    t.createRealSourceBuffers_(),
                    this.sourceBuffers[0].audioDisabled_ = !0)
                } else
                    t = this.nativeMediaSource_.addSourceBuffer(e);
                return this.sourceBuffers.push(t),
                t
            }
        }]),
        t
    }(ta.EventTarget)
      , Cs = 0;
    ta.mediaSources = {};
    var Es = function(e, t) {
        var i = ta.mediaSources[e];
        if (!i)
            throw new Error("Media Source not found (Video.js)");
        i.trigger({
            type: "sourceopen",
            swfId: t
        })
    }
      , As = function() {
        return !!r.a.MediaSource && !!r.a.MediaSource.isTypeSupported && r.a.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
    }
      , Ps = function() {
        if (this.MediaSource = {
            open: Es,
            supportsNativeMediaSources: As
        },
        As())
            return new ws;
        throw new Error("Cannot use create a virtual MediaSource for this video")
    };
    Ps.open = Es,
    Ps.supportsNativeMediaSources = As;
    var Ls = {
        createObjectURL: function(e) {
            var t = void 0;
            return e instanceof ws ? (t = r.a.URL.createObjectURL(e.nativeMediaSource_),
            e.url_ = t,
            t) : e instanceof ws ? (t = "blob:vjs-media-source/" + Cs,
            Cs++,
            ta.mediaSources[t] = e,
            t) : (t = r.a.URL.createObjectURL(e),
            e.url_ = t,
            t)
        }
    };
    ta.MediaSource = Ps,
    ta.URL = Ls;
    var Os = ta.EventTarget
      , Is = ta.mergeOptions
      , xs = function(e, t) {
        for (var i = void 0, n = Is(e, {
            duration: t.duration,
            minimumUpdatePeriod: t.minimumUpdatePeriod
        }), r = 0; r < t.playlists.length; r++) {
            var a = ma(n, t.playlists[r]);
            a ? n = a : i = !0
        }
        return fa(t, function(e, t, r, a) {
            if (e.playlists && e.playlists.length) {
                var s = e.playlists[0].uri
                  , o = ma(n, e.playlists[0]);
                o && ((n = o).mediaGroups[t][r][a].playlists[0] = n.playlists[s],
                i = !1)
            }
        }),
        i ? null : n
    }
      , Ds = function(e) {
        function t(e, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = arguments[3];
            sa(this, t);
            var a = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
              , s = n.withCredentials
              , o = void 0 !== s && s
              , u = n.handleManifestRedirects
              , l = void 0 !== u && u;
            if (a.hls_ = i,
            a.withCredentials = o,
            a.handleManifestRedirects = l,
            !e)
                throw new Error("A non-empty playlist URL or playlist is required");
            return a.on("minimumUpdatePeriod", function() {
                a.refreshXml_()
            }),
            a.on("mediaupdatetimeout", function() {
                a.refreshMedia_()
            }),
            a.state = "HAVE_NOTHING",
            a.loadedPlaylists_ = {},
            "string" == typeof e ? (a.srcUrl = e,
            la(a)) : (a.setupChildLoader(r, e),
            a)
        }
        return ua(t, Os),
        oa(t, [{
            key: "setupChildLoader",
            value: function(e, t) {
                this.masterPlaylistLoader_ = e,
                this.childPlaylist_ = t
            }
        }, {
            key: "dispose",
            value: function() {
                this.stopRequest(),
                this.loadedPlaylists_ = {},
                r.a.clearTimeout(this.mediaUpdateTimeout)
            }
        }, {
            key: "hasPendingRequest",
            value: function() {
                return this.request || this.mediaRequest_
            }
        }, {
            key: "stopRequest",
            value: function() {
                if (this.request) {
                    var e = this.request;
                    this.request = null,
                    e.onreadystatechange = null,
                    e.abort()
                }
            }
        }, {
            key: "media",
            value: function(e) {
                if (!e)
                    return this.media_;
                if ("HAVE_NOTHING" === this.state)
                    throw new Error("Cannot switch media playlist from " + this.state);
                var t = this.state;
                if ("string" == typeof e) {
                    if (!this.master.playlists[e])
                        throw new Error("Unknown playlist URI: " + e);
                    e = this.master.playlists[e]
                }
                var i = !this.media_ || e.uri !== this.media_.uri;
                if (i && this.loadedPlaylists_[e.uri] && this.loadedPlaylists_[e.uri].endList)
                    return this.state = "HAVE_METADATA",
                    this.media_ = e,
                    void (i && (this.trigger("mediachanging"),
                    this.trigger("mediachange")));
                i && (this.media_ && this.trigger("mediachanging"),
                this.mediaRequest_ = r.a.setTimeout(this.haveMetadata.bind(this, {
                    startingState: t,
                    playlist: e
                }), 0))
            }
        }, {
            key: "haveMetadata",
            value: function(e) {
                var t = e.startingState
                  , i = e.playlist;
                this.state = "HAVE_METADATA",
                this.media_ = i,
                this.loadedPlaylists_[i.uri] = i,
                this.mediaRequest_ = null,
                this.refreshMedia_(),
                "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange")
            }
        }, {
            key: "pause",
            value: function() {
                this.stopRequest(),
                r.a.clearTimeout(this.mediaUpdateTimeout),
                "HAVE_NOTHING" === this.state && (this.started = !1)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                r.a.clearTimeout(this.mediaUpdateTimeout);
                var i = this.media();
                if (e) {
                    var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                    this.mediaUpdateTimeout = r.a.setTimeout(function() {
                        return t.load()
                    }, n)
                } else
                    this.started ? this.trigger("loadedplaylist") : this.start()
            }
        }, {
            key: "parseMasterXml",
            value: function() {
                var e = Object(A.a)(this.masterXml_, {
                    manifestUri: this.srcUrl,
                    clientOffset: this.clientOffset_
                });
                e.uri = this.srcUrl;
                for (var t = 0; t < e.playlists.length; t++) {
                    var i = "placeholder-uri-" + t;
                    e.playlists[t].uri = i,
                    e.playlists[i] = e.playlists[t]
                }
                return fa(e, function(t, i, n, r) {
                    if (t.playlists && t.playlists.length) {
                        var a = "placeholder-uri-" + i + "-" + n + "-" + r;
                        t.playlists[0].uri = a,
                        e.playlists[a] = t.playlists[0]
                    }
                }),
                ga(e),
                ya(e),
                e
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                this.started = !0,
                this.masterPlaylistLoader_ ? this.mediaRequest_ = r.a.setTimeout(this.haveMaster_.bind(this), 0) : this.request = this.hls_.xhr({
                    uri: this.srcUrl,
                    withCredentials: this.withCredentials
                }, function(t, i) {
                    if (e.request) {
                        if (e.request = null,
                        t)
                            return e.error = {
                                status: i.status,
                                message: "DASH playlist request error at URL: " + e.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            },
                            "HAVE_NOTHING" === e.state && (e.started = !1),
                            e.trigger("error");
                        e.masterXml_ = i.responseText,
                        i.responseHeaders && i.responseHeaders.date ? e.masterLoaded_ = Date.parse(i.responseHeaders.date) : e.masterLoaded_ = Date.now(),
                        e.srcUrl = aa(e.handleManifestRedirects, e.srcUrl, i),
                        e.syncClientServerClock_(e.onClientServerClockSync_.bind(e))
                    }
                })
            }
        }, {
            key: "syncClientServerClock_",
            value: function(e) {
                var t = this
                  , i = Object(A.b)(this.masterXml_);
                return null === i ? (this.clientOffset_ = this.masterLoaded_ - Date.now(),
                e()) : "DIRECT" === i.method ? (this.clientOffset_ = i.value - Date.now(),
                e()) : void (this.request = this.hls_.xhr({
                    uri: ra(this.srcUrl, i.value),
                    method: i.method,
                    withCredentials: this.withCredentials
                }, function(n, r) {
                    if (t.request) {
                        if (n)
                            return t.clientOffset_ = t.masterLoaded_ - Date.now(),
                            e();
                        var a = void 0;
                        a = "HEAD" === i.method ? r.responseHeaders && r.responseHeaders.date ? Date.parse(r.responseHeaders.date) : t.masterLoaded_ : Date.parse(r.responseText),
                        t.clientOffset_ = a - Date.now(),
                        e()
                    }
                }))
            }
        }, {
            key: "haveMaster_",
            value: function() {
                this.state = "HAVE_MASTER",
                this.mediaRequest_ = null,
                this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.master = this.parseMasterXml(),
                this.trigger("loadedplaylist"))
            }
        }, {
            key: "onClientServerClockSync_",
            value: function() {
                var e = this;
                this.haveMaster_(),
                this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]),
                this.master && this.master.minimumUpdatePeriod && r.a.setTimeout(function() {
                    e.trigger("minimumUpdatePeriod")
                }, this.master.minimumUpdatePeriod)
            }
        }, {
            key: "refreshXml_",
            value: function() {
                var e = this;
                this.request = this.hls_.xhr({
                    uri: this.srcUrl,
                    withCredentials: this.withCredentials
                }, function(t, i) {
                    if (e.request) {
                        if (e.request = null,
                        t)
                            return e.error = {
                                status: i.status,
                                message: "DASH playlist request error at URL: " + e.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            },
                            "HAVE_NOTHING" === e.state && (e.started = !1),
                            e.trigger("error");
                        e.masterXml_ = i.responseText;
                        var n = e.parseMasterXml()
                          , a = xs(e.master, n);
                        a && (e.master = a),
                        r.a.setTimeout(function() {
                            e.trigger("minimumUpdatePeriod")
                        }, e.master.minimumUpdatePeriod)
                    }
                })
            }
        }, {
            key: "refreshMedia_",
            value: function() {
                var e = this
                  , t = void 0
                  , i = void 0;
                this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master,
                i = this.masterPlaylistLoader_.parseMasterXml()) : (t = this.master,
                i = this.parseMasterXml());
                var n = xs(t, i);
                n ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = n : this.master = n,
                this.media_ = n.playlists[this.media_.uri]) : this.trigger("playlistunchanged"),
                this.media().endList || (this.mediaUpdateTimeout = r.a.setTimeout(function() {
                    e.trigger("mediaupdatetimeout")
                }, va(this.media(), !!n))),
                this.trigger("loadedplaylist")
            }
        }]),
        t
    }()
      , Us = function(e) {
        return ta.log.debug ? ta.log.debug.bind(ta, "VHS:", e + " >") : function() {}
    };
    function Rs() {}
    var Ms = function() {
        function e(t, i, n, r) {
            sa(this, e),
            this.callbacks_ = [],
            this.pendingCallback_ = null,
            this.timestampOffset_ = 0,
            this.mediaSource = t,
            this.processedAppend_ = !1,
            this.type_ = n,
            this.mimeType_ = i,
            this.logger_ = Us("SourceUpdater[" + n + "][" + i + "]"),
            "closed" === t.readyState ? t.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, i, r)) : this.createSourceBuffer_(i, r)
        }
        return oa(e, [{
            key: "createSourceBuffer_",
            value: function(e, t) {
                var i = this;
                this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e),
                this.logger_("created SourceBuffer"),
                t && (t.trigger("sourcebufferadded"),
                this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded", function() {
                    i.start_()
                }) : this.start_()
            }
        }, {
            key: "start_",
            value: function() {
                var e = this;
                this.started_ = !0,
                this.onUpdateendCallback_ = function() {
                    var t = e.pendingCallback_;
                    e.pendingCallback_ = null,
                    e.logger_("buffered [" + Qa(e.buffered()) + "]"),
                    t && t(),
                    e.runCallback_()
                }
                ,
                this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_),
                this.runCallback_()
            }
        }, {
            key: "abort",
            value: function(e) {
                var t = this;
                this.processedAppend_ && this.queueCallback_(function() {
                    t.sourceBuffer_.abort()
                }, e)
            }
        }, {
            key: "appendBuffer",
            value: function(e, t) {
                var i = this;
                this.processedAppend_ = !0,
                this.queueCallback_(function() {
                    e.videoSegmentTimingInfoCallback && i.sourceBuffer_.addEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
                    i.sourceBuffer_.appendBuffer(e.bytes)
                }, function() {
                    e.videoSegmentTimingInfoCallback && i.sourceBuffer_.removeEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
                    t()
                })
            }
        }, {
            key: "buffered",
            value: function() {
                return this.sourceBuffer_ ? this.sourceBuffer_.buffered : ta.createTimeRanges()
            }
        }, {
            key: "remove",
            value: function(e, t) {
                var i = this
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rs;
                this.processedAppend_ && this.queueCallback_(function() {
                    i.logger_("remove [" + e + " => " + t + "]"),
                    i.sourceBuffer_.remove(e, t)
                }, n)
            }
        }, {
            key: "updating",
            value: function() {
                return !this.sourceBuffer_ || this.sourceBuffer_.updating || !!this.pendingCallback_ && this.pendingCallback_ !== Rs
            }
        }, {
            key: "timestampOffset",
            value: function(e) {
                var t = this;
                return void 0 !== e && (this.queueCallback_(function() {
                    t.sourceBuffer_.timestampOffset = e
                }),
                this.timestampOffset_ = e),
                this.timestampOffset_
            }
        }, {
            key: "queueCallback_",
            value: function(e, t) {
                this.callbacks_.push([e.bind(this), t]),
                this.runCallback_()
            }
        }, {
            key: "runCallback_",
            value: function() {
                var e = void 0;
                !this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(),
                this.pendingCallback_ = e[1],
                e[0]())
            }
        }, {
            key: "dispose",
            value: function() {
                this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_),
                this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
            }
        }]),
        e
    }()
      , Bs = {
        GOAL_BUFFER_LENGTH: 30,
        MAX_GOAL_BUFFER_LENGTH: 60,
        GOAL_BUFFER_LENGTH_RATE: 1,
        INITIAL_BANDWIDTH: 4194304,
        BANDWIDTH_VARIANCE: 1.2,
        BUFFER_LOW_WATER_LINE: 0,
        MAX_BUFFER_LOW_WATER_LINE: 30,
        BUFFER_LOW_WATER_LINE_RATE: 1
    }
      , Ns = 2
      , js = -101
      , Fs = -102
      , Vs = function(e) {
        var t, i, n = {};
        return e.byterange && (n.Range = (t = e.byterange,
        i = t.offset + t.length - 1,
        "bytes=" + t.offset + "-" + i)),
        n
    }
      , Hs = function(e) {
        e.forEach(function(e) {
            e.abort()
        })
    }
      , qs = function(e, t) {
        return t.timedout ? {
            status: t.status,
            message: "HLS request timed-out at URL: " + t.uri,
            code: js,
            xhr: t
        } : t.aborted ? {
            status: t.status,
            message: "HLS request aborted at URL: " + t.uri,
            code: Fs,
            xhr: t
        } : e ? {
            status: t.status,
            message: "HLS request errored at URL: " + t.uri,
            code: Ns,
            xhr: t
        } : null
    }
      , zs = function(e, t, i) {
        var n = 0
          , r = !1;
        return function(a, s) {
            if (!r)
                return a ? (r = !0,
                Hs(e),
                i(a, s)) : (n += 1) === e.length ? (s.endOfAllRequests = Date.now(),
                s.encryptedBytes ? function(e, t, i) {
                    e.addEventListener("message", function n(r) {
                        if (r.data.source === t.requestId) {
                            e.removeEventListener("message", n);
                            var a = r.data.decrypted;
                            return t.bytes = new Uint8Array(a.bytes,a.byteOffset,a.byteLength),
                            i(null, t)
                        }
                    }),
                    e.postMessage(Ha({
                        source: t.requestId,
                        encrypted: t.encryptedBytes,
                        key: t.key.bytes,
                        iv: t.key.iv
                    }), [t.encryptedBytes.buffer, t.key.bytes.buffer])
                }(t, s, i) : i(null, s)) : void 0
        }
    }
      , Ws = function(e, t) {
        return function(i) {
            var n, r, a;
            return e.stats = ta.mergeOptions(e.stats, (r = (n = i).target,
            (a = {
                bandwidth: 1 / 0,
                bytesReceived: 0,
                roundTripTime: Date.now() - r.requestTime || 0
            }).bytesReceived = n.loaded,
            a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3),
            a)),
            !e.stats.firstBytesReceivedAt && e.stats.bytesReceived && (e.stats.firstBytesReceivedAt = Date.now()),
            t(i, e)
        }
    }
      , Gs = function(e, t, i, n, r, a, s) {
        var o = []
          , u = zs(o, i, s);
        if (r.key) {
            var l = e(ta.mergeOptions(t, {
                uri: r.key.resolvedUri,
                responseType: "arraybuffer"
            }), function(e, t) {
                return function(i, n) {
                    var r = n.response
                      , a = qs(i, n);
                    if (a)
                        return t(a, e);
                    if (16 !== r.byteLength)
                        return t({
                            status: n.status,
                            message: "Invalid HLS key at URL: " + n.uri,
                            code: Ns,
                            xhr: n
                        }, e);
                    var s = new DataView(r);
                    return e.key.bytes = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]),
                    t(null, e)
                }
            }(r, u));
            o.push(l)
        }
        if (r.map && !r.map.bytes) {
            var c = e(ta.mergeOptions(t, {
                uri: r.map.resolvedUri,
                responseType: "arraybuffer",
                headers: Vs(r.map)
            }), function(e, t, i) {
                return function(n, r) {
                    var a = r.response
                      , s = qs(n, r);
                    return s ? i(s, e) : 0 === a.byteLength ? i({
                        status: r.status,
                        message: "Empty HLS segment content at URL: " + r.uri,
                        code: Ns,
                        xhr: r
                    }, e) : (e.map.bytes = new Uint8Array(r.response),
                    t.isInitialized() || t.init(),
                    e.map.timescales = L.a.timescale(e.map.bytes),
                    e.map.videoTrackIds = L.a.videoTrackIds(e.map.bytes),
                    i(null, e))
                }
            }(r, n, u));
            o.push(c)
        }
        var d = e(ta.mergeOptions(t, {
            uri: r.resolvedUri,
            responseType: "arraybuffer",
            headers: Vs(r)
        }), function(e, t, i) {
            return function(n, r) {
                var a = r.response
                  , s = qs(n, r)
                  , o = void 0;
                return s ? i(s, e) : 0 === a.byteLength ? i({
                    status: r.status,
                    message: "Empty HLS segment content at URL: " + r.uri,
                    code: Ns,
                    xhr: r
                }, e) : (e.stats = function(e) {
                    return {
                        bandwidth: e.bandwidth,
                        bytesReceived: e.bytesReceived || 0,
                        roundTripTime: e.roundTripTime || 0
                    }
                }(r),
                e.key ? e.encryptedBytes = new Uint8Array(r.response) : e.bytes = new Uint8Array(r.response),
                e.map && e.map.bytes && (t.isInitialized() || t.init(),
                (o = t.parse(e.bytes, e.map.videoTrackIds, e.map.timescales)) && o.captions && (e.captionStreams = o.captionStreams,
                e.fmp4Captions = o.captions)),
                i(null, e))
            }
        }(r, n, u));
        return d.addEventListener("progress", Ws(r, a)),
        o.push(d),
        function() {
            return Hs(o)
        }
    }
      , $s = function(e, t) {
        var i;
        return e && (i = r.a.getComputedStyle(e)) ? i[t] : ""
    }
      , Xs = function(e, t) {
        var i = e.slice();
        e.sort(function(e, n) {
            var r = t(e, n);
            return 0 === r ? i.indexOf(e) - i.indexOf(n) : r
        })
    }
      , Ys = function(e, t) {
        var i = void 0
          , n = void 0;
        return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH),
        i = i || r.a.Number.MAX_VALUE,
        t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH),
        i - (n = n || r.a.Number.MAX_VALUE)
    }
      , Ks = function(e, t, i) {
        if (!e || !t)
            return !1;
        var n = i === e.segments.length;
        return e.endList && "open" === t.readyState && n
    }
      , Qs = function(e) {
        return "number" == typeof e && isFinite(e)
    }
      , Js = function(e) {
        function t(e) {
            sa(this, t);
            var i = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if (!e)
                throw new TypeError("Initialization settings are required");
            if ("function" != typeof e.currentTime)
                throw new TypeError("No currentTime getter specified");
            if (!e.mediaSource)
                throw new TypeError("No MediaSource specified");
            return i.bandwidth = e.bandwidth,
            i.throughput = {
                rate: 0,
                count: 0
            },
            i.roundTrip = NaN,
            i.resetStats_(),
            i.mediaIndex = null,
            i.hasPlayed_ = e.hasPlayed,
            i.currentTime_ = e.currentTime,
            i.seekable_ = e.seekable,
            i.seeking_ = e.seeking,
            i.duration_ = e.duration,
            i.mediaSource_ = e.mediaSource,
            i.hls_ = e.hls,
            i.loaderType_ = e.loaderType,
            i.startingMedia_ = void 0,
            i.segmentMetadataTrack_ = e.segmentMetadataTrack,
            i.goalBufferLength_ = e.goalBufferLength,
            i.sourceType_ = e.sourceType,
            i.inbandTextTracks_ = e.inbandTextTracks,
            i.state_ = "INIT",
            i.checkBufferTimeout_ = null,
            i.error_ = void 0,
            i.currentTimeline_ = -1,
            i.pendingSegment_ = null,
            i.mimeType_ = null,
            i.sourceUpdater_ = null,
            i.xhrOptions_ = null,
            i.activeInitSegmentId_ = null,
            i.initSegments_ = {},
            i.captionParser_ = new O.CaptionParser,
            i.decrypter_ = e.decrypter,
            i.syncController_ = e.syncController,
            i.syncPoint_ = {
                segmentIndex: 0,
                time: 0
            },
            i.syncController_.on("syncinfoupdate", function() {
                return i.trigger("syncinfoupdate")
            }),
            i.mediaSource_.addEventListener("sourceopen", function() {
                return i.ended_ = !1
            }),
            i.fetchAtBuffer_ = !1,
            i.logger_ = Us("SegmentLoader[" + i.loaderType_ + "]"),
            Object.defineProperty(i, "state", {
                get: function() {
                    return this.state_
                },
                set: function(e) {
                    e !== this.state_ && (this.logger_(this.state_ + " -> " + e),
                    this.state_ = e)
                }
            }),
            i
        }
        return ua(t, e),
        oa(t, [{
            key: "resetStats_",
            value: function() {
                this.mediaBytesTransferred = 0,
                this.mediaRequests = 0,
                this.mediaRequestsAborted = 0,
                this.mediaRequestsTimedout = 0,
                this.mediaRequestsErrored = 0,
                this.mediaTransferDuration = 0,
                this.mediaSecondsLoaded = 0
            }
        }, {
            key: "dispose",
            value: function() {
                this.state = "DISPOSED",
                this.pause(),
                this.abort_(),
                this.sourceUpdater_ && this.sourceUpdater_.dispose(),
                this.resetStats_(),
                this.captionParser_.reset()
            }
        }, {
            key: "abort",
            value: function() {
                "WAITING" === this.state ? (this.abort_(),
                this.state = "READY",
                this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
            }
        }, {
            key: "abort_",
            value: function() {
                this.pendingSegment_ && this.pendingSegment_.abortRequests(),
                this.pendingSegment_ = null
            }
        }, {
            key: "error",
            value: function(e) {
                return void 0 !== e && (this.error_ = e),
                this.pendingSegment_ = null,
                this.error_
            }
        }, {
            key: "endOfStream",
            value: function() {
                this.ended_ = !0,
                this.pause(),
                this.trigger("ended")
            }
        }, {
            key: "buffered_",
            value: function() {
                return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : ta.createTimeRanges()
            }
        }, {
            key: "initSegment",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e)
                    return null;
                var i = qa(e)
                  , n = this.initSegments_[i];
                return t && !n && e.bytes && (this.initSegments_[i] = n = {
                    resolvedUri: e.resolvedUri,
                    byterange: e.byterange,
                    bytes: e.bytes,
                    timescales: e.timescales,
                    videoTrackIds: e.videoTrackIds
                }),
                n || e
            }
        }, {
            key: "couldBeginLoading_",
            value: function() {
                return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
            }
        }, {
            key: "load",
            value: function() {
                if (this.monitorBuffer_(),
                this.playlist_) {
                    if (this.syncController_.setDateTimeMapping(this.playlist_),
                    "INIT" === this.state && this.couldBeginLoading_())
                        return this.init_();
                    !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                }
            }
        }, {
            key: "init_",
            value: function() {
                return this.state = "READY",
                this.sourceUpdater_ = new Ms(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),
                this.resetEverything(),
                this.monitorBuffer_()
            }
        }, {
            key: "playlist",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e) {
                    var i = this.playlist_
                      , n = this.pendingSegment_;
                    this.playlist_ = e,
                    this.xhrOptions_ = t,
                    this.hasPlayed_() || (e.syncInfo = {
                        mediaSequence: e.mediaSequence,
                        time: 0
                    });
                    var r = null;
                    if (i && (i.id ? r = i.id : i.uri && (r = i.uri)),
                    this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"),
                    this.trigger("syncinfoupdate"),
                    "INIT" === this.state && this.couldBeginLoading_())
                        return this.init_();
                    if (i && i.uri === e.uri) {
                        var a = e.mediaSequence - i.mediaSequence;
                        this.logger_("live window shift [" + a + "]"),
                        null !== this.mediaIndex && (this.mediaIndex -= a),
                        n && (n.mediaIndex -= a,
                        n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex])),
                        this.syncController_.saveExpiredSegmentInfo(i, e)
                    } else
                        null !== this.mediaIndex && this.resyncLoader()
                }
            }
        }, {
            key: "pause",
            value: function() {
                this.checkBufferTimeout_ && (r.a.clearTimeout(this.checkBufferTimeout_),
                this.checkBufferTimeout_ = null)
            }
        }, {
            key: "paused",
            value: function() {
                return null === this.checkBufferTimeout_
            }
        }, {
            key: "mimeType",
            value: function(e, t) {
                this.mimeType_ || (this.mimeType_ = e,
                this.sourceBufferEmitter_ = t,
                "INIT" === this.state && this.couldBeginLoading_() && this.init_())
            }
        }, {
            key: "resetEverything",
            value: function(e) {
                this.ended_ = !1,
                this.resetLoader(),
                this.remove(0, this.duration_(), e),
                this.captionParser_.clearAllCaptions(),
                this.trigger("reseteverything")
            }
        }, {
            key: "resetLoader",
            value: function() {
                this.fetchAtBuffer_ = !1,
                this.resyncLoader()
            }
        }, {
            key: "resyncLoader",
            value: function() {
                this.mediaIndex = null,
                this.syncPoint_ = null,
                this.abort()
            }
        }, {
            key: "remove",
            value: function(e, t, i) {
                if (this.sourceUpdater_ && this.sourceUpdater_.remove(e, t, i),
                Za(e, t, this.segmentMetadataTrack_),
                this.inbandTextTracks_)
                    for (var n in this.inbandTextTracks_)
                        Za(e, t, this.inbandTextTracks_[n])
            }
        }, {
            key: "monitorBuffer_",
            value: function() {
                this.checkBufferTimeout_ && r.a.clearTimeout(this.checkBufferTimeout_),
                this.checkBufferTimeout_ = r.a.setTimeout(this.monitorBufferTick_.bind(this), 1)
            }
        }, {
            key: "monitorBufferTick_",
            value: function() {
                "READY" === this.state && this.fillBuffer_(),
                this.checkBufferTimeout_ && r.a.clearTimeout(this.checkBufferTimeout_),
                this.checkBufferTimeout_ = r.a.setTimeout(this.monitorBufferTick_.bind(this), 500)
            }
        }, {
            key: "fillBuffer_",
            value: function() {
                if (!this.sourceUpdater_.updating()) {
                    this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                    var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                    e && (this.isEndOfStream_(e.mediaIndex) ? this.endOfStream() : (e.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((e.timeline !== this.currentTimeline_ || null !== e.startOfSegment && e.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(),
                    e.timestampOffset = e.startOfSegment,
                    this.captionParser_.clearAllCaptions()),
                    this.loadSegment_(e)))
                }
            }
        }, {
            key: "isEndOfStream_",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.playlist_;
                return Ks(t, this.mediaSource_, e) && !this.sourceUpdater_.updating()
            }
        }, {
            key: "checkBuffer_",
            value: function(e, t, i, n, r, a) {
                var s = 0
                  , o = void 0;
                e.length && (s = e.end(e.length - 1));
                var u = Math.max(0, s - r);
                if (!t.segments.length)
                    return null;
                if (u >= this.goalBufferLength_())
                    return null;
                if (!n && u >= 1)
                    return null;
                if (null === a)
                    return i = this.getSyncSegmentCandidate_(t),
                    this.generateSegmentInfo_(t, i, null, !0);
                if (null !== i) {
                    var l = t.segments[i];
                    return o = l && l.end ? l.end : s,
                    this.generateSegmentInfo_(t, i + 1, o, !1)
                }
                if (this.fetchAtBuffer_) {
                    var c = Ra.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
                    i = c.mediaIndex,
                    o = c.startTime
                } else {
                    var d = Ra.getMediaInfoForTime(t, r, a.segmentIndex, a.time);
                    i = d.mediaIndex,
                    o = d.startTime
                }
                return this.generateSegmentInfo_(t, i, o, !1)
            }
        }, {
            key: "getSyncSegmentCandidate_",
            value: function(e) {
                var t = this;
                if (-1 === this.currentTimeline_)
                    return 0;
                var i = e.segments.map(function(e, t) {
                    return {
                        timeline: e.timeline,
                        segmentIndex: t
                    }
                }).filter(function(e) {
                    return e.timeline === t.currentTimeline_
                });
                return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
            }
        }, {
            key: "generateSegmentInfo_",
            value: function(e, t, i, n) {
                if (t < 0 || t >= e.segments.length)
                    return null;
                var r = e.segments[t];
                return {
                    requestId: "segment-loader-" + Math.random(),
                    uri: r.resolvedUri,
                    mediaIndex: t,
                    isSyncRequest: n,
                    startOfSegment: i,
                    playlist: e,
                    bytes: null,
                    encryptedBytes: null,
                    timestampOffset: null,
                    timeline: r.timeline,
                    duration: r.duration,
                    segment: r
                }
            }
        }, {
            key: "abortRequestEarly_",
            value: function(e) {
                if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH)
                    return !1;
                if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)
                    return !1;
                var t = this.currentTime_()
                  , i = e.bandwidth
                  , n = this.pendingSegment_.duration
                  , r = Ra.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived)
                  , a = function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , n = e.length ? e.end(e.length - 1) : 0;
                    return (n - t) / i
                }(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
                if (r <= a)
                    return !1;
                var s = function(e) {
                    var t = e.master
                      , i = e.currentTime
                      , n = e.bandwidth
                      , r = e.duration
                      , a = e.segmentDuration
                      , s = e.timeUntilRebuffer
                      , o = e.currentTimeline
                      , u = e.syncController
                      , l = t.playlists.filter(function(e) {
                        return !Ra.isIncompatible(e)
                    })
                      , c = l.filter(Ra.isEnabled);
                    c.length || (c = l.filter(function(e) {
                        return !Ra.isDisabled(e)
                    }));
                    var d = c.filter(Ra.hasAttribute.bind(null, "BANDWIDTH")).map(function(e) {
                        var t = u.getSyncPoint(e, r, o, i) ? 1 : 2;
                        return {
                            playlist: e,
                            rebufferingImpact: Ra.estimateSegmentRequestTime(a, n, e) * t - s
                        }
                    })
                      , h = d.filter(function(e) {
                        return e.rebufferingImpact <= 0
                    });
                    return Xs(h, function(e, t) {
                        return Ys(t.playlist, e.playlist)
                    }),
                    h.length ? h[0] : (Xs(d, function(e, t) {
                        return e.rebufferingImpact - t.rebufferingImpact
                    }),
                    d[0] || null)
                }({
                    master: this.hls_.playlists.master,
                    currentTime: t,
                    bandwidth: i,
                    duration: this.duration_(),
                    segmentDuration: n,
                    timeUntilRebuffer: a,
                    currentTimeline: this.currentTimeline_,
                    syncController: this.syncController_
                });
                if (s) {
                    var o = r - a - s.rebufferingImpact
                      , u = .5;
                    return a <= 1 / 30 && (u = 1),
                    !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * Bs.BANDWIDTH_VARIANCE + 1,
                    this.abort(),
                    this.trigger("earlyabort"),
                    !0)
                }
            }
        }, {
            key: "handleProgress_",
            value: function(e, t) {
                this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
            }
        }, {
            key: "loadSegment_",
            value: function(e) {
                this.state = "WAITING",
                this.pendingSegment_ = e,
                this.trimBackBuffer_(e),
                e.abortRequests = Gs(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
            }
        }, {
            key: "trimBackBuffer_",
            value: function(e) {
                var t = function(e, t, i) {
                    var n = void 0;
                    return n = e.length && e.start(0) > 0 && e.start(0) < t ? e.start(0) : t - 30,
                    Math.min(n, t - i)
                }(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                t > 0 && this.remove(0, t)
            }
        }, {
            key: "createSimplifiedSegmentObj_",
            value: function(e) {
                var t = e.segment
                  , i = {
                    resolvedUri: t.resolvedUri,
                    byterange: t.byterange,
                    requestId: e.requestId
                };
                if (t.key) {
                    var n = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                    i.key = {
                        resolvedUri: t.key.resolvedUri,
                        iv: n
                    }
                }
                return t.map && (i.map = this.initSegment(t.map)),
                i
            }
        }, {
            key: "segmentRequestFinished_",
            value: function(e, t) {
                if (this.mediaRequests += 1,
                t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived,
                this.mediaTransferDuration += t.stats.roundTripTime),
                this.pendingSegment_) {
                    if (t.requestId === this.pendingSegment_.requestId) {
                        if (e)
                            return this.pendingSegment_ = null,
                            this.state = "READY",
                            e.code === Fs ? void (this.mediaRequestsAborted += 1) : (this.pause(),
                            e.code === js ? (this.mediaRequestsTimedout += 1,
                            this.bandwidth = 1,
                            this.roundTrip = NaN,
                            void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1,
                            this.error(e),
                            void this.trigger("error")));
                        this.bandwidth = t.stats.bandwidth,
                        this.roundTrip = t.stats.roundTripTime,
                        t.map && (t.map = this.initSegment(t.map, !0)),
                        this.processSegmentResponse_(t)
                    }
                } else
                    this.mediaRequestsAborted += 1
            }
        }, {
            key: "processSegmentResponse_",
            value: function(e) {
                var t = this.pendingSegment_;
                t.bytes = e.bytes,
                e.map && (t.segment.map.bytes = e.map.bytes),
                t.endOfAllRequests = e.endOfAllRequests,
                e.fmp4Captions && (!function(e, t, i) {
                    for (var n in i)
                        if (!e[n]) {
                            t.trigger({
                                type: "usage",
                                name: "hls-608"
                            });
                            var r = t.textTracks().getTrackById(n);
                            e[n] = r || t.addRemoteTextTrack({
                                kind: "captions",
                                id: n,
                                label: n
                            }, !1).track
                        }
                }(this.inbandTextTracks_, this.hls_.tech_, e.captionStreams),
                function(e) {
                    var t = e.inbandTextTracks
                      , i = e.captionArray
                      , n = e.timestampOffset;
                    if (i) {
                        var r = window.WebKitDataCue || window.VTTCue;
                        i.forEach(function(e) {
                            var i = e.stream
                              , a = e.startTime
                              , s = e.endTime;
                            t[i] && (a += n,
                            s += n,
                            t[i].addCue(new r(a,s,e.text)))
                        })
                    }
                }({
                    inbandTextTracks: this.inbandTextTracks_,
                    captionArray: e.fmp4Captions,
                    timestampOffset: 0
                }),
                this.captionParser_.clearParsedCaptions()),
                this.handleSegment_()
            }
        }, {
            key: "handleSegment_",
            value: function() {
                var e = this;
                if (this.pendingSegment_) {
                    var t = this.pendingSegment_
                      , i = t.segment
                      , n = this.syncController_.probeSegmentInfo(t);
                    void 0 === this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
                        containsAudio: n.containsAudio,
                        containsVideo: n.containsVideo
                    });
                    var r, a, s, o = (r = this.loaderType_,
                    a = this.startingMedia_,
                    s = n,
                    "main" === r && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
                    if (o)
                        return this.error({
                            message: o,
                            blacklistDuration: 1 / 0
                        }),
                        void this.trigger("error");
                    if (t.isSyncRequest)
                        return this.trigger("syncinfoupdate"),
                        this.pendingSegment_ = null,
                        void (this.state = "READY");
                    null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(t.timestampOffset),
                    this.trigger("timestampoffset"));
                    var u = this.syncController_.mappingForTimeline(t.timeline);
                    if (null !== u && this.trigger({
                        type: "segmenttimemapping",
                        mapping: u
                    }),
                    this.state = "APPENDING",
                    i.map) {
                        var l = qa(i.map);
                        if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== l) {
                            var c = this.initSegment(i.map);
                            this.sourceUpdater_.appendBuffer({
                                bytes: c.bytes
                            }, function() {
                                e.activeInitSegmentId_ = l
                            })
                        }
                    }
                    t.byteLength = t.bytes.byteLength,
                    "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration,
                    this.logger_(function(e) {
                        var t = e.segment
                          , i = t.start
                          , n = t.end
                          , r = e.playlist
                          , a = r.mediaSequence
                          , s = r.id
                          , o = r.segments
                          , u = void 0 === o ? [] : o
                          , l = e.mediaIndex
                          , c = e.timeline;
                        return ["appending [" + l + "] of [" + a + ", " + (a + u.length) + "] from playlist [" + s + "]", "[" + i + " => " + n + "] in timeline [" + c + "]"].join(" ")
                    }(t)),
                    this.sourceUpdater_.appendBuffer({
                        bytes: t.bytes,
                        videoSegmentTimingInfoCallback: this.handleVideoSegmentTimingInfo_.bind(this, t.requestId)
                    }, this.handleUpdateEnd_.bind(this))
                } else
                    this.state = "READY"
            }
        }, {
            key: "handleVideoSegmentTimingInfo_",
            value: function(e, t) {
                if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                    var i = this.pendingSegment_.segment;
                    i.videoTimingInfo || (i.videoTimingInfo = {}),
                    i.videoTimingInfo.transmuxerPrependedSeconds = t.videoSegmentTimingInfo.prependedContentDuration || 0,
                    i.videoTimingInfo.transmuxedPresentationStart = t.videoSegmentTimingInfo.start.presentation,
                    i.videoTimingInfo.transmuxedPresentationEnd = t.videoSegmentTimingInfo.end.presentation,
                    i.videoTimingInfo.baseMediaDecodeTime = t.videoSegmentTimingInfo.baseMediaDecodeTime
                }
            }
        }, {
            key: "handleUpdateEnd_",
            value: function() {
                if (!this.pendingSegment_)
                    return this.state = "READY",
                    void (this.paused() || this.monitorBuffer_());
                var e = this.pendingSegment_
                  , t = e.segment
                  , i = null !== this.mediaIndex;
                this.pendingSegment_ = null,
                this.recordThroughput_(e),
                this.addSegmentMetadataCue_(e),
                this.state = "READY",
                this.mediaIndex = e.mediaIndex,
                this.fetchAtBuffer_ = !0,
                this.currentTimeline_ = e.timeline,
                this.trigger("syncinfoupdate"),
                t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration ? this.resetEverything() : (i && this.trigger("bandwidthupdate"),
                this.trigger("progress"),
                this.isEndOfStream_(e.mediaIndex + 1, e.playlist) && this.endOfStream(),
                this.paused() || this.monitorBuffer_())
            }
        }, {
            key: "recordThroughput_",
            value: function(e) {
                var t = this.throughput.rate
                  , i = Date.now() - e.endOfAllRequests + 1
                  , n = Math.floor(e.byteLength / i * 8 * 1e3);
                this.throughput.rate += (n - t) / ++this.throughput.count
            }
        }, {
            key: "addSegmentMetadataCue_",
            value: function(e) {
                if (this.segmentMetadataTrack_) {
                    var t = e.segment
                      , i = t.start
                      , n = t.end;
                    if (Qs(i) && Qs(n)) {
                        Za(i, n, this.segmentMetadataTrack_);
                        var a = r.a.WebKitDataCue || r.a.VTTCue
                          , s = {
                            custom: t.custom,
                            dateTimeObject: t.dateTimeObject,
                            dateTimeString: t.dateTimeString,
                            bandwidth: e.playlist.attributes.BANDWIDTH,
                            resolution: e.playlist.attributes.RESOLUTION,
                            codecs: e.playlist.attributes.CODECS,
                            byteLength: e.byteLength,
                            uri: e.uri,
                            timeline: e.timeline,
                            playlist: e.playlist.uri,
                            start: i,
                            end: n
                        }
                          , o = new a(i,n,JSON.stringify(s));
                        o.value = s,
                        this.segmentMetadataTrack_.addCue(o)
                    }
                }
            }
        }]),
        t
    }(ta.EventTarget)
      , Zs = function(e) {
        return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
    }
      , eo = new Uint8Array("\n\n".split("").map(function(e) {
        return e.charCodeAt(0)
    }))
      , to = function(e) {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            sa(this, t);
            var n = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
            return n.mediaSource_ = null,
            n.subtitlesTrack_ = null,
            n
        }
        return ua(t, Js),
        oa(t, [{
            key: "buffered_",
            value: function() {
                if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length)
                    return ta.createTimeRanges();
                var e = this.subtitlesTrack_.cues
                  , t = e[0].startTime
                  , i = e[e.length - 1].startTime;
                return ta.createTimeRanges([[t, i]])
            }
        }, {
            key: "initSegment",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e)
                    return null;
                var i = qa(e)
                  , n = this.initSegments_[i];
                if (t && !n && e.bytes) {
                    var r = eo.byteLength + e.bytes.byteLength
                      , a = new Uint8Array(r);
                    a.set(e.bytes),
                    a.set(eo, e.bytes.byteLength),
                    this.initSegments_[i] = n = {
                        resolvedUri: e.resolvedUri,
                        byterange: e.byterange,
                        bytes: a
                    }
                }
                return n || e
            }
        }, {
            key: "couldBeginLoading_",
            value: function() {
                return this.playlist_ && this.subtitlesTrack_ && !this.paused()
            }
        }, {
            key: "init_",
            value: function() {
                return this.state = "READY",
                this.resetEverything(),
                this.monitorBuffer_()
            }
        }, {
            key: "track",
            value: function(e) {
                return void 0 === e ? this.subtitlesTrack_ : (this.subtitlesTrack_ = e,
                "INIT" === this.state && this.couldBeginLoading_() && this.init_(),
                this.subtitlesTrack_)
            }
        }, {
            key: "remove",
            value: function(e, t) {
                Za(e, t, this.subtitlesTrack_)
            }
        }, {
            key: "fillBuffer_",
            value: function() {
                var e = this;
                this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                if (t = this.skipEmptySegments_(t)) {
                    if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                        return this.syncController_.one("timestampoffset", function() {
                            e.state = "READY",
                            e.paused() || e.monitorBuffer_()
                        }),
                        void (this.state = "WAITING_ON_TIMELINE")
                    }
                    this.loadSegment_(t)
                }
            }
        }, {
            key: "skipEmptySegments_",
            value: function(e) {
                for (; e && e.segment.empty; )
                    e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
                return e
            }
        }, {
            key: "handleSegment_",
            value: function() {
                var e = this;
                if (this.pendingSegment_ && this.subtitlesTrack_) {
                    this.state = "APPENDING";
                    var t = this.pendingSegment_
                      , i = t.segment;
                    if ("function" != typeof r.a.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                        var n = function() {
                            e.handleSegment_()
                        };
                        return this.state = "WAITING_ON_VTTJS",
                        this.subtitlesTrack_.tech_.one("vttjsloaded", n),
                        void this.subtitlesTrack_.tech_.one("vttjserror", function() {
                            e.subtitlesTrack_.tech_.off("vttjsloaded", n),
                            e.error({
                                message: "Error loading vtt.js"
                            }),
                            e.state = "READY",
                            e.pause(),
                            e.trigger("error")
                        })
                    }
                    i.requested = !0;
                    try {
                        this.parseVTTCues_(t)
                    } catch (e) {
                        return this.error({
                            message: e.message
                        }),
                        this.state = "READY",
                        this.pause(),
                        this.trigger("error")
                    }
                    if (this.updateTimeMapping_(t, this.syncController_.timelines[t.timeline], this.playlist_),
                    t.isSyncRequest)
                        return this.trigger("syncinfoupdate"),
                        this.pendingSegment_ = null,
                        void (this.state = "READY");
                    t.byteLength = t.bytes.byteLength,
                    this.mediaSecondsLoaded += i.duration,
                    t.cues.length && this.remove(t.cues[0].endTime, t.cues[t.cues.length - 1].endTime),
                    t.cues.forEach(function(t) {
                        e.subtitlesTrack_.addCue(t)
                    }),
                    this.handleUpdateEnd_()
                } else
                    this.state = "READY"
            }
        }, {
            key: "parseVTTCues_",
            value: function(e) {
                var t = void 0
                  , i = !1;
                "function" == typeof r.a.TextDecoder ? t = new r.a.TextDecoder("utf8") : (t = r.a.WebVTT.StringDecoder(),
                i = !0);
                var n = new r.a.WebVTT.Parser(r.a,r.a.vttjs,t);
                if (e.cues = [],
                e.timestampmap = {
                    MPEGTS: 0,
                    LOCAL: 0
                },
                n.oncue = e.cues.push.bind(e.cues),
                n.ontimestampmap = function(t) {
                    return e.timestampmap = t
                }
                ,
                n.onparsingerror = function(e) {
                    ta.log.warn("Error encountered when parsing cues: " + e.message)
                }
                ,
                e.segment.map) {
                    var a = e.segment.map.bytes;
                    i && (a = Zs(a)),
                    n.parse(a)
                }
                var s = e.bytes;
                i && (s = Zs(s)),
                n.parse(s),
                n.flush()
            }
        }, {
            key: "updateTimeMapping_",
            value: function(e, t, i) {
                var n = e.segment;
                if (t)
                    if (e.cues.length) {
                        var r = e.timestampmap
                          , a = r.MPEGTS / 9e4 - r.LOCAL + t.mapping;
                        if (e.cues.forEach(function(e) {
                            e.startTime += a,
                            e.endTime += a
                        }),
                        !i.syncInfo) {
                            var s = e.cues[0].startTime
                              , o = e.cues[e.cues.length - 1].startTime;
                            i.syncInfo = {
                                mediaSequence: i.mediaSequence + e.mediaIndex,
                                time: Math.min(s, o - n.duration)
                            }
                        }
                    } else
                        n.empty = !0
            }
        }]),
        t
    }()
      , io = function(e, t) {
        for (var i = e.cues, n = 0; n < i.length; n++) {
            var r = i[n];
            if (t >= r.adStartTime && t <= r.adEndTime)
                return r
        }
        return null
    }
      , no = x.a.inspect
      , ro = [{
        name: "VOD",
        run: function(e, t, i, n, r) {
            if (i !== 1 / 0) {
                return {
                    time: 0,
                    segmentIndex: 0
                }
            }
            return null
        }
    }, {
        name: "ProgramDateTime",
        run: function(e, t, i, n, r) {
            if (!e.datetimeToDisplayTime)
                return null;
            var a = t.segments || []
              , s = null
              , o = null;
            r = r || 0;
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l.dateTimeObject) {
                    var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime
                      , d = Math.abs(r - c);
                    if (null !== o && o < d)
                        break;
                    o = d,
                    s = {
                        time: c,
                        segmentIndex: u
                    }
                }
            }
            return s
        }
    }, {
        name: "Segment",
        run: function(e, t, i, n, r) {
            var a = t.segments || []
              , s = null
              , o = null;
            r = r || 0;
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l.timeline === n && void 0 !== l.start) {
                    var c = Math.abs(r - l.start);
                    if (null !== o && o < c)
                        break;
                    (!s || null === o || o >= c) && (o = c,
                    s = {
                        time: l.start,
                        segmentIndex: u
                    })
                }
            }
            return s
        }
    }, {
        name: "Discontinuity",
        run: function(e, t, i, n, r) {
            var a = null;
            if (r = r || 0,
            t.discontinuityStarts && t.discontinuityStarts.length)
                for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
                    var u = t.discontinuityStarts[o]
                      , l = t.discontinuitySequence + o + 1
                      , c = e.discontinuities[l];
                    if (c) {
                        var d = Math.abs(r - c.time);
                        if (null !== s && s < d)
                            break;
                        (!a || null === s || s >= d) && (s = d,
                        a = {
                            time: c.time,
                            segmentIndex: u
                        })
                    }
                }
            return a
        }
    }, {
        name: "Playlist",
        run: function(e, t, i, n, r) {
            return t.syncInfo ? {
                time: t.syncInfo.time,
                segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
            } : null
        }
    }]
      , ao = function(e) {
        function t() {
            sa(this, t);
            var e = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.inspectCache_ = void 0,
            e.timelines = [],
            e.discontinuities = [],
            e.datetimeToDisplayTime = null,
            e.logger_ = Us("SyncController"),
            e
        }
        return ua(t, e),
        oa(t, [{
            key: "getSyncPoint",
            value: function(e, t, i, n) {
                var r = this.runStrategies_(e, t, i, n);
                return r.length ? this.selectSyncPoint_(r, {
                    key: "time",
                    value: n
                }) : null
            }
        }, {
            key: "getExpiredTime",
            value: function(e, t) {
                if (!e || !e.segments)
                    return null;
                var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                if (!i.length)
                    return null;
                var n = this.selectSyncPoint_(i, {
                    key: "segmentIndex",
                    value: 0
                });
                return n.segmentIndex > 0 && (n.time *= -1),
                Math.abs(n.time + ka(e, n.segmentIndex, 0))
            }
        }, {
            key: "runStrategies_",
            value: function(e, t, i, n) {
                for (var r = [], a = 0; a < ro.length; a++) {
                    var s = ro[a]
                      , o = s.run(this, e, t, i, n);
                    o && (o.strategy = s.name,
                    r.push({
                        strategy: s.name,
                        syncPoint: o
                    }))
                }
                return r
            }
        }, {
            key: "selectSyncPoint_",
            value: function(e, t) {
                for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1; a < e.length; a++) {
                    var s = Math.abs(e[a].syncPoint[t.key] - t.value);
                    s < n && (n = s,
                    i = e[a].syncPoint,
                    r = e[a].strategy)
                }
                return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"),
                i
            }
        }, {
            key: "saveExpiredSegmentInfo",
            value: function(e, t) {
                for (var i = t.mediaSequence - e.mediaSequence - 1; i >= 0; i--) {
                    var n = e.segments[i];
                    if (n && void 0 !== n.start) {
                        t.syncInfo = {
                            mediaSequence: e.mediaSequence + i,
                            time: n.start
                        },
                        this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"),
                        this.trigger("syncinfoupdate");
                        break
                    }
                }
            }
        }, {
            key: "setDateTimeMapping",
            value: function(e) {
                if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                    var t = e.segments[0].dateTimeObject.getTime() / 1e3;
                    this.datetimeToDisplayTime = -t
                }
            }
        }, {
            key: "reset",
            value: function() {
                this.inspectCache_ = void 0
            }
        }, {
            key: "probeSegmentInfo",
            value: function(e) {
                var t = e.segment
                  , i = e.playlist
                  , n = void 0;
                return (n = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, n) && (this.saveDiscontinuitySyncInfo_(e),
                i.syncInfo || (i.syncInfo = {
                    mediaSequence: i.mediaSequence + e.mediaIndex,
                    time: t.start
                })),
                n
            }
        }, {
            key: "probeMp4Segment_",
            value: function(e) {
                var t = e.segment
                  , i = L.a.timescale(t.map.bytes)
                  , n = L.a.startTime(i, e.bytes);
                return null !== e.timestampOffset && (e.timestampOffset -= n),
                {
                    start: n,
                    end: n + t.duration
                }
            }
        }, {
            key: "probeTsSegment_",
            value: function(e) {
                var t = no(e.bytes, this.inspectCache_)
                  , i = void 0
                  , n = void 0;
                return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts,
                i = t.video[0].dtsTime,
                n = t.video[1].dtsTime) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts,
                i = t.audio[0].dtsTime,
                n = t.audio[1].dtsTime),
                {
                    start: i,
                    end: n,
                    containsVideo: t.video && 2 === t.video.length,
                    containsAudio: t.audio && 2 === t.audio.length
                }) : null
            }
        }, {
            key: "timestampOffsetForTimeline",
            value: function(e) {
                return void 0 === this.timelines[e] ? null : this.timelines[e].time
            }
        }, {
            key: "mappingForTimeline",
            value: function(e) {
                return void 0 === this.timelines[e] ? null : this.timelines[e].mapping
            }
        }, {
            key: "calculateSegmentTimeMapping_",
            value: function(e, t) {
                var i = e.segment
                  , n = this.timelines[e.timeline];
                if (null !== e.timestampOffset)
                    n = {
                        time: e.startOfSegment,
                        mapping: e.startOfSegment - t.start
                    },
                    this.timelines[e.timeline] = n,
                    this.trigger("timestampoffset"),
                    this.logger_("time mapping for timeline " + e.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"),
                    i.start = e.startOfSegment,
                    i.end = t.end + n.mapping;
                else {
                    if (!n)
                        return !1;
                    i.start = t.start + n.mapping,
                    i.end = t.end + n.mapping
                }
                return !0
            }
        }, {
            key: "saveDiscontinuitySyncInfo_",
            value: function(e) {
                var t = e.playlist
                  , i = e.segment;
                if (i.discontinuity)
                    this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    };
                else if (t.discontinuityStarts && t.discontinuityStarts.length)
                    for (var n = 0; n < t.discontinuityStarts.length; n++) {
                        var r = t.discontinuityStarts[n]
                          , a = t.discontinuitySequence + n + 1
                          , s = r - e.mediaIndex
                          , o = Math.abs(s);
                        if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                            var u = void 0;
                            u = s < 0 ? i.start - ka(t, e.mediaIndex, r) : i.end + ka(t, e.mediaIndex + 1, r),
                            this.discontinuities[a] = {
                                time: u,
                                accuracy: o
                            }
                        }
                    }
            }
        }]),
        t
    }(ta.EventTarget)
      , so = new us("./decrypter-worker.worker.js",function(e, t) {
        var i = this;
        !function() {
            var e = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
              , t = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , n = function(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
              , r = function() {
                var e = [[[], [], [], [], []], [[], [], [], [], []]]
                  , t = e[0]
                  , i = e[1]
                  , n = t[4]
                  , r = i[4]
                  , a = void 0
                  , s = void 0
                  , o = void 0
                  , u = []
                  , l = []
                  , c = void 0
                  , d = void 0
                  , h = void 0
                  , p = void 0
                  , f = void 0;
                for (a = 0; a < 256; a++)
                    l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                for (s = o = 0; !n[s]; s ^= c || 1,
                o = l[o] || 1)
                    for (h = (h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & h ^ 99,
                    n[s] = h,
                    r[h] = s,
                    f = 16843009 * u[d = u[c = u[s]]] ^ 65537 * d ^ 257 * c ^ 16843008 * s,
                    p = 257 * u[h] ^ 16843008 * h,
                    a = 0; a < 4; a++)
                        t[a][s] = p = p << 24 ^ p >>> 8,
                        i[a][h] = f = f << 24 ^ f >>> 8;
                for (a = 0; a < 5; a++)
                    t[a] = t[a].slice(0),
                    i[a] = i[a].slice(0);
                return e
            }
              , a = null
              , s = function() {
                function t(i) {
                    e(this, t),
                    a || (a = r()),
                    this._tables = [[a[0][0].slice(), a[0][1].slice(), a[0][2].slice(), a[0][3].slice(), a[0][4].slice()], [a[1][0].slice(), a[1][1].slice(), a[1][2].slice(), a[1][3].slice(), a[1][4].slice()]];
                    var n = void 0
                      , s = void 0
                      , o = void 0
                      , u = void 0
                      , l = void 0
                      , c = this._tables[0][4]
                      , d = this._tables[1]
                      , h = i.length
                      , p = 1;
                    if (4 !== h && 6 !== h && 8 !== h)
                        throw new Error("Invalid aes key size");
                    for (u = i.slice(0),
                    l = [],
                    this._key = [u, l],
                    n = h; n < 4 * h + 28; n++)
                        o = u[n - 1],
                        (n % h == 0 || 8 === h && n % h == 4) && (o = c[o >>> 24] << 24 ^ c[o >> 16 & 255] << 16 ^ c[o >> 8 & 255] << 8 ^ c[255 & o],
                        n % h == 0 && (o = o << 8 ^ o >>> 24 ^ p << 24,
                        p = p << 1 ^ 283 * (p >> 7))),
                        u[n] = u[n - h] ^ o;
                    for (s = 0; n; s++,
                    n--)
                        o = u[3 & s ? n : n - 4],
                        l[s] = n <= 4 || s < 4 ? o : d[0][c[o >>> 24]] ^ d[1][c[o >> 16 & 255]] ^ d[2][c[o >> 8 & 255]] ^ d[3][c[255 & o]]
                }
                return t.prototype.decrypt = function(e, t, i, n, r, a) {
                    var s = this._key[1]
                      , o = e ^ s[0]
                      , u = n ^ s[1]
                      , l = i ^ s[2]
                      , c = t ^ s[3]
                      , d = void 0
                      , h = void 0
                      , p = void 0
                      , f = s.length / 4 - 2
                      , m = void 0
                      , g = 4
                      , y = this._tables[1]
                      , v = y[0]
                      , _ = y[1]
                      , b = y[2]
                      , T = y[3]
                      , S = y[4];
                    for (m = 0; m < f; m++)
                        d = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g],
                        h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1],
                        p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2],
                        c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3],
                        g += 4,
                        o = d,
                        u = h,
                        l = p;
                    for (m = 0; m < 4; m++)
                        r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++],
                        d = o,
                        o = u,
                        u = l,
                        l = c,
                        c = d
                }
                ,
                t
            }()
              , o = function() {
                function t() {
                    e(this, t),
                    this.listeners = {}
                }
                return t.prototype.on = function(e, t) {
                    this.listeners[e] || (this.listeners[e] = []),
                    this.listeners[e].push(t)
                }
                ,
                t.prototype.off = function(e, t) {
                    if (!this.listeners[e])
                        return !1;
                    var i = this.listeners[e].indexOf(t);
                    return this.listeners[e].splice(i, 1),
                    i > -1
                }
                ,
                t.prototype.trigger = function(e) {
                    var t = this.listeners[e];
                    if (t)
                        if (2 === arguments.length)
                            for (var i = t.length, n = 0; n < i; ++n)
                                t[n].call(this, arguments[1]);
                        else
                            for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s)
                                t[s].apply(this, r)
                }
                ,
                t.prototype.dispose = function() {
                    this.listeners = {}
                }
                ,
                t.prototype.pipe = function(e) {
                    this.on("data", function(t) {
                        e.push(t)
                    })
                }
                ,
                t
            }()
              , u = function(t) {
                function i() {
                    e(this, i);
                    var r = n(this, t.call(this, o));
                    return r.jobs = [],
                    r.delay = 1,
                    r.timeout_ = null,
                    r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(i, t),
                i.prototype.processJob_ = function() {
                    this.jobs.shift()(),
                    this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                }
                ,
                i.prototype.push = function(e) {
                    this.jobs.push(e),
                    this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                }
                ,
                i
            }(o)
              , l = function(e) {
                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
            }
              , c = function() {
                function i(t, n, r, a) {
                    e(this, i);
                    var s = i.STEP
                      , o = new Int32Array(t.buffer)
                      , c = new Uint8Array(t.byteLength)
                      , d = 0;
                    for (this.asyncStream_ = new u,
                    this.asyncStream_.push(this.decryptChunk_(o.subarray(d, d + s), n, r, c)),
                    d = s; d < o.length; d += s)
                        r = new Uint32Array([l(o[d - 4]), l(o[d - 3]), l(o[d - 2]), l(o[d - 1])]),
                        this.asyncStream_.push(this.decryptChunk_(o.subarray(d, d + s), n, r, c));
                    this.asyncStream_.push(function() {
                        var e;
                        a(null, (e = c).subarray(0, e.byteLength - e[e.byteLength - 1]))
                    })
                }
                return i.prototype.decryptChunk_ = function(e, t, i, n) {
                    return function() {
                        var r = function(e, t, i) {
                            var n = new Int32Array(e.buffer,e.byteOffset,e.byteLength >> 2)
                              , r = new s(Array.prototype.slice.call(t))
                              , a = new Uint8Array(e.byteLength)
                              , o = new Int32Array(a.buffer)
                              , u = void 0
                              , c = void 0
                              , d = void 0
                              , h = void 0
                              , p = void 0
                              , f = void 0
                              , m = void 0
                              , g = void 0
                              , y = void 0;
                            for (u = i[0],
                            c = i[1],
                            d = i[2],
                            h = i[3],
                            y = 0; y < n.length; y += 4)
                                p = l(n[y]),
                                f = l(n[y + 1]),
                                m = l(n[y + 2]),
                                g = l(n[y + 3]),
                                r.decrypt(p, f, m, g, o, y),
                                o[y] = l(o[y] ^ u),
                                o[y + 1] = l(o[y + 1] ^ c),
                                o[y + 2] = l(o[y + 2] ^ d),
                                o[y + 3] = l(o[y + 3] ^ h),
                                u = p,
                                c = f,
                                d = m,
                                h = g;
                            return a
                        }(e, t, i);
                        n.set(r, e.byteOffset)
                    }
                }
                ,
                t(i, null, [{
                    key: "STEP",
                    get: function() {
                        return 32e3
                    }
                }]),
                i
            }();
            new function(e) {
                e.onmessage = function(t) {
                    var i = t.data
                      , n = new Uint8Array(i.encrypted.bytes,i.encrypted.byteOffset,i.encrypted.byteLength)
                      , r = new Uint32Array(i.key.bytes,i.key.byteOffset,i.key.byteLength / 4)
                      , a = new Uint32Array(i.iv.bytes,i.iv.byteOffset,i.iv.byteLength / 4);
                    new c(n,r,a,function(t, n) {
                        var r, a;
                        e.postMessage((r = {
                            source: i.source,
                            decrypted: n
                        },
                        a = {},
                        Object.keys(r).forEach(function(e) {
                            var t = r[e];
                            ArrayBuffer.isView(t) ? a[e] = {
                                bytes: t.buffer,
                                byteOffset: t.byteOffset,
                                byteLength: t.byteLength
                            } : a[e] = t
                        }),
                        a), [n.buffer])
                    }
                    )
                }
            }
            (i)
        }()
    }
    )
      , oo = function(e) {
        var t = e.default ? "main" : "alternative";
        return e.characteristics && e.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"),
        t
    }
      , uo = function(e, t) {
        e.abort(),
        e.pause(),
        t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(),
        t.activePlaylistLoader = null)
    }
      , lo = function(e, t) {
        t.activePlaylistLoader = e,
        e.load()
    }
      , co = {
        AUDIO: function(e, t) {
            return function() {
                var i = t.segmentLoaders[e]
                  , n = t.mediaTypes[e]
                  , r = t.blacklistCurrentPlaylist;
                uo(i, n);
                var a = n.activeTrack()
                  , s = n.activeGroup()
                  , o = (s.filter(function(e) {
                    return e.default
                })[0] || s[0]).id
                  , u = n.tracks[o];
                if (a !== u) {
                    for (var l in ta.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),
                    n.tracks)
                        n.tracks[l].enabled = n.tracks[l] === u;
                    n.onTrackChanged()
                } else
                    r({
                        message: "Problem encountered loading the default audio track."
                    })
            }
        },
        SUBTITLES: function(e, t) {
            return function() {
                var i = t.segmentLoaders[e]
                  , n = t.mediaTypes[e];
                ta.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
                uo(i, n);
                var r = n.activeTrack();
                r && (r.mode = "disabled"),
                n.onTrackChanged()
            }
        }
    }
      , ho = {
        AUDIO: function(e, t, i) {
            if (t) {
                var n = i.tech
                  , r = i.requestOptions
                  , a = i.segmentLoaders[e];
                t.on("loadedmetadata", function() {
                    var e = t.media();
                    a.playlist(e, r),
                    (!n.paused() || e.endList && "none" !== n.preload()) && a.load()
                }),
                t.on("loadedplaylist", function() {
                    a.playlist(t.media(), r),
                    n.paused() || a.load()
                }),
                t.on("error", co[e](e, i))
            }
        },
        SUBTITLES: function(e, t, i) {
            var n = i.tech
              , r = i.requestOptions
              , a = i.segmentLoaders[e]
              , s = i.mediaTypes[e];
            t.on("loadedmetadata", function() {
                var e = t.media();
                a.playlist(e, r),
                a.track(s.activeTrack()),
                (!n.paused() || e.endList && "none" !== n.preload()) && a.load()
            }),
            t.on("loadedplaylist", function() {
                a.playlist(t.media(), r),
                n.paused() || a.load()
            }),
            t.on("error", co[e](e, i))
        }
    }
      , po = function(e, t) {
        return function(i) {
            return i.attributes[e] === t
        }
    }
      , fo = function(e) {
        return function(t) {
            return t.resolvedUri === e
        }
    }
      , mo = {
        AUDIO: function(e, t) {
            var i = t.hls
              , n = t.sourceType
              , r = t.segmentLoaders[e]
              , a = t.requestOptions
              , s = t.master
              , o = s.mediaGroups
              , u = s.playlists
              , l = t.mediaTypes[e]
              , c = l.groups
              , d = l.tracks
              , h = t.masterPlaylistLoader;
            for (var p in o[e] && 0 !== Object.keys(o[e]).length || (o[e] = {
                main: {
                    default: {
                        default: !0
                    }
                }
            }),
            o[e]) {
                c[p] || (c[p] = []);
                var f = u.filter(po(e, p));
                for (var m in o[e][p]) {
                    var g = o[e][p][m];
                    f.filter(fo(g.resolvedUri)).length && delete g.resolvedUri;
                    var y = void 0;
                    if (y = g.resolvedUri ? new _a(g.resolvedUri,i,a) : g.playlists && "dash" === n ? new Ds(g.playlists[0],i,a,h) : null,
                    g = ta.mergeOptions({
                        id: m,
                        playlistLoader: y
                    }, g),
                    ho[e](e, g.playlistLoader, t),
                    c[p].push(g),
                    void 0 === d[m]) {
                        var v = new ta.AudioTrack({
                            id: m,
                            kind: oo(g),
                            enabled: !1,
                            language: g.language,
                            default: g.default,
                            label: m
                        });
                        d[m] = v
                    }
                }
            }
            r.on("error", co[e](e, t))
        },
        SUBTITLES: function(e, t) {
            var i = t.tech
              , n = t.hls
              , r = t.sourceType
              , a = t.segmentLoaders[e]
              , s = t.requestOptions
              , o = t.master.mediaGroups
              , u = t.mediaTypes[e]
              , l = u.groups
              , c = u.tracks
              , d = t.masterPlaylistLoader;
            for (var h in o[e])
                for (var p in l[h] || (l[h] = []),
                o[e][h])
                    if (!o[e][h][p].forced) {
                        var f = o[e][h][p]
                          , m = void 0;
                        if ("hls" === r ? m = new _a(f.resolvedUri,n,s) : "dash" === r && (m = new Ds(f.playlists[0],n,s,d)),
                        f = ta.mergeOptions({
                            id: p,
                            playlistLoader: m
                        }, f),
                        ho[e](e, f.playlistLoader, t),
                        l[h].push(f),
                        void 0 === c[p]) {
                            var g = i.addRemoteTextTrack({
                                id: p,
                                kind: "subtitles",
                                default: f.default && f.autoselect,
                                language: f.language,
                                label: p
                            }, !1).track;
                            c[p] = g
                        }
                    }
            a.on("error", co[e](e, t))
        },
        "CLOSED-CAPTIONS": function(e, t) {
            var i = t.tech
              , n = t.master.mediaGroups
              , r = t.mediaTypes[e]
              , a = r.groups
              , s = r.tracks;
            for (var o in n[e])
                for (var u in a[o] || (a[o] = []),
                n[e][o]) {
                    var l = n[e][o][u];
                    if (l.instreamId.match(/CC\d/) && (a[o].push(ta.mergeOptions({
                        id: u
                    }, l)),
                    void 0 === s[u])) {
                        var c = i.addRemoteTextTrack({
                            id: l.instreamId,
                            kind: "captions",
                            default: l.default && l.autoselect,
                            language: l.language,
                            label: u
                        }, !1).track;
                        s[u] = c
                    }
                }
        }
    }
      , go = {
        AUDIO: function(e, t) {
            return function() {
                var i = t.mediaTypes[e].tracks;
                for (var n in i)
                    if (i[n].enabled)
                        return i[n];
                return null
            }
        },
        SUBTITLES: function(e, t) {
            return function() {
                var i = t.mediaTypes[e].tracks;
                for (var n in i)
                    if ("showing" === i[n].mode)
                        return i[n];
                return null
            }
        }
    }
      , yo = function(e) {
        ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(t) {
            mo[t](t, e)
        });
        var t = e.mediaTypes
          , i = e.masterPlaylistLoader
          , n = e.tech
          , r = e.hls;
        ["AUDIO", "SUBTITLES"].forEach(function(i) {
            t[i].activeGroup = function(e, t) {
                return function(i) {
                    var n = t.masterPlaylistLoader
                      , r = t.mediaTypes[e].groups
                      , a = n.media();
                    if (!a)
                        return null;
                    var s = null;
                    return a.attributes[e] && (s = r[a.attributes[e]]),
                    s = s || r.main,
                    void 0 === i ? s : null === i ? null : s.filter(function(e) {
                        return e.id === i.id
                    })[0] || null
                }
            }(i, e),
            t[i].activeTrack = go[i](i, e),
            t[i].onGroupChanged = function(e, t) {
                return function() {
                    var i = t.segmentLoaders
                      , n = i[e]
                      , r = i.main
                      , a = t.mediaTypes[e]
                      , s = a.activeTrack()
                      , o = a.activeGroup(s)
                      , u = a.activePlaylistLoader;
                    uo(n, a),
                    o && (o.playlistLoader ? (n.resyncLoader(),
                    lo(o.playlistLoader, a)) : u && r.resetEverything())
                }
            }(i, e),
            t[i].onTrackChanged = function(e, t) {
                return function() {
                    var i = t.segmentLoaders
                      , n = i[e]
                      , r = i.main
                      , a = t.mediaTypes[e]
                      , s = a.activeTrack()
                      , o = a.activeGroup(s)
                      , u = a.activePlaylistLoader;
                    uo(n, a),
                    o && (o.playlistLoader ? u !== o.playlistLoader ? (n.track && n.track(s),
                    n.resetEverything(),
                    lo(o.playlistLoader, a)) : lo(o.playlistLoader, a) : r.resetEverything())
                }
            }(i, e)
        });
        var a = t.AUDIO.activeGroup()
          , s = (a.filter(function(e) {
            return e.default
        })[0] || a[0]).id;
        t.AUDIO.tracks[s].enabled = !0,
        t.AUDIO.onTrackChanged(),
        i.on("mediachange", function() {
            ["AUDIO", "SUBTITLES"].forEach(function(e) {
                return t[e].onGroupChanged()
            })
        });
        var o = function() {
            t.AUDIO.onTrackChanged(),
            n.trigger({
                type: "usage",
                name: "hls-audio-change"
            })
        };
        for (var u in n.audioTracks().addEventListener("change", o),
        n.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged),
        r.on("dispose", function() {
            n.audioTracks().removeEventListener("change", o),
            n.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged)
        }),
        n.clearTracks("audio"),
        t.AUDIO.tracks)
            n.audioTracks().addTrack(t.AUDIO.tracks[u])
    }
      , vo = function() {
        var e = {};
        return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(t) {
            e[t] = {
                groups: {},
                tracks: {},
                activePlaylistLoader: null,
                activeGroup: Rs,
                activeTrack: Rs,
                onGroupChanged: Rs,
                onTrackChanged: Rs
            }
        }),
        e
    }
      , _o = void 0
      , bo = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"]
      , To = function(e) {
        return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
    }
      , So = function(e) {
        function t(e) {
            sa(this, t);
            var i = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
              , n = e.url
              , r = e.handleManifestRedirects
              , a = e.withCredentials
              , s = e.tech
              , o = e.bandwidth
              , u = e.externHls
              , l = e.useCueTags
              , c = e.blacklistDuration
              , d = e.enableLowInitialPlaylist
              , h = e.sourceType
              , p = e.seekTo;
            if (!n)
                throw new Error("A non-empty playlist URL is required");
            _o = u,
            i.withCredentials = a,
            i.tech_ = s,
            i.hls_ = s.hls,
            i.seekTo_ = p,
            i.sourceType_ = h,
            i.useCueTags_ = l,
            i.blacklistDuration = c,
            i.enableLowInitialPlaylist = d,
            i.useCueTags_ && (i.cueTagsTrack_ = i.tech_.addTextTrack("metadata", "ad-cues"),
            i.cueTagsTrack_.inBandMetadataTrackDispatchType = ""),
            i.requestOptions_ = {
                withCredentials: a,
                handleManifestRedirects: r,
                timeout: null
            },
            i.mediaTypes_ = vo(),
            i.mediaSource = new ta.MediaSource,
            i.mediaSource.addEventListener("sourceopen", i.handleSourceOpen_.bind(i)),
            i.seekable_ = ta.createTimeRanges(),
            i.hasPlayed_ = function() {
                return !1
            }
            ,
            i.syncController_ = new ao(e),
            i.segmentMetadataTrack_ = s.addRemoteTextTrack({
                kind: "metadata",
                label: "segment-metadata"
            }, !1).track,
            i.decrypter_ = new so,
            i.inbandTextTracks_ = {};
            var f = {
                hls: i.hls_,
                mediaSource: i.mediaSource,
                currentTime: i.tech_.currentTime.bind(i.tech_),
                seekable: function() {
                    return i.seekable()
                },
                seeking: function() {
                    return i.tech_.seeking()
                },
                duration: function() {
                    return i.mediaSource.duration
                },
                hasPlayed: function() {
                    return i.hasPlayed_()
                },
                goalBufferLength: function() {
                    return i.goalBufferLength()
                },
                bandwidth: o,
                syncController: i.syncController_,
                decrypter: i.decrypter_,
                sourceType: i.sourceType_,
                inbandTextTracks: i.inbandTextTracks_
            };
            return i.masterPlaylistLoader_ = "dash" === i.sourceType_ ? new Ds(n,i.hls_,i.requestOptions_) : new _a(n,i.hls_,i.requestOptions_),
            i.setupMasterPlaylistLoaderListeners_(),
            i.mainSegmentLoader_ = new Js(ta.mergeOptions(f, {
                segmentMetadataTrack: i.segmentMetadataTrack_,
                loaderType: "main"
            }),e),
            i.audioSegmentLoader_ = new Js(ta.mergeOptions(f, {
                loaderType: "audio"
            }),e),
            i.subtitleSegmentLoader_ = new to(ta.mergeOptions(f, {
                loaderType: "vtt"
            }),e),
            i.setupSegmentLoaderListeners_(),
            bo.forEach(function(e) {
                i[e + "_"] = To.bind(i, e)
            }),
            i.logger_ = Us("MPC"),
            i.masterPlaylistLoader_.load(),
            i
        }
        return ua(t, e),
        oa(t, [{
            key: "setupMasterPlaylistLoaderListeners_",
            value: function() {
                var e = this;
                this.masterPlaylistLoader_.on("loadedmetadata", function() {
                    var t = e.masterPlaylistLoader_.media()
                      , i = 1.5 * t.targetDuration * 1e3;
                    Ua(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i,
                    t.endList && "none" !== e.tech_.preload() && (e.mainSegmentLoader_.playlist(t, e.requestOptions_),
                    e.mainSegmentLoader_.load()),
                    yo({
                        sourceType: e.sourceType_,
                        segmentLoaders: {
                            AUDIO: e.audioSegmentLoader_,
                            SUBTITLES: e.subtitleSegmentLoader_,
                            main: e.mainSegmentLoader_
                        },
                        tech: e.tech_,
                        requestOptions: e.requestOptions_,
                        masterPlaylistLoader: e.masterPlaylistLoader_,
                        hls: e.hls_,
                        master: e.master(),
                        mediaTypes: e.mediaTypes_,
                        blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e)
                    }),
                    e.triggerPresenceUsage_(e.master(), t);
                    try {
                        e.setupSourceBuffers_()
                    } catch (t) {
                        return ta.log.warn("Failed to create SourceBuffers", t),
                        e.mediaSource.endOfStream("decode")
                    }
                    e.setupFirstPlay(),
                    !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") : e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function() {
                        e.trigger("selectedinitialmedia")
                    })
                }),
                this.masterPlaylistLoader_.on("loadedplaylist", function() {
                    var t = e.masterPlaylistLoader_.media();
                    if (!t) {
                        e.excludeUnsupportedVariants_();
                        var i = void 0;
                        return e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()),
                        i || (i = e.selectPlaylist()),
                        e.initialMedia_ = i,
                        void e.masterPlaylistLoader_.media(e.initialMedia_)
                    }
                    if (e.useCueTags_ && e.updateAdCues_(t),
                    e.mainSegmentLoader_.playlist(t, e.requestOptions_),
                    e.updateDuration(),
                    e.tech_.paused() || (e.mainSegmentLoader_.load(),
                    e.audioSegmentLoader_ && e.audioSegmentLoader_.load()),
                    !t.endList) {
                        var n = function() {
                            var t = e.seekable();
                            0 !== t.length && e.mediaSource.addSeekableRange_(t.start(0), t.end(0))
                        };
                        if (e.duration() !== 1 / 0) {
                            e.tech_.one("durationchange", function t() {
                                e.duration() === 1 / 0 ? n() : e.tech_.one("durationchange", t)
                            })
                        } else
                            n()
                    }
                }),
                this.masterPlaylistLoader_.on("error", function() {
                    e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
                }),
                this.masterPlaylistLoader_.on("mediachanging", function() {
                    e.mainSegmentLoader_.abort(),
                    e.mainSegmentLoader_.pause()
                }),
                this.masterPlaylistLoader_.on("mediachange", function() {
                    var t = e.masterPlaylistLoader_.media()
                      , i = 1.5 * t.targetDuration * 1e3;
                    Ua(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i,
                    e.mainSegmentLoader_.playlist(t, e.requestOptions_),
                    e.mainSegmentLoader_.load(),
                    e.tech_.trigger({
                        type: "mediachange",
                        bubbles: !0
                    })
                }),
                this.masterPlaylistLoader_.on("playlistunchanged", function() {
                    var t = e.masterPlaylistLoader_.media();
                    e.stuckAtPlaylistEnd_(t) && (e.blacklistCurrentPlaylist({
                        message: "Playlist no longer updating."
                    }),
                    e.tech_.trigger("playliststuck"))
                }),
                this.masterPlaylistLoader_.on("renditiondisabled", function() {
                    e.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-disabled"
                    })
                }),
                this.masterPlaylistLoader_.on("renditionenabled", function() {
                    e.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-enabled"
                    })
                })
            }
        }, {
            key: "triggerPresenceUsage_",
            value: function(e, t) {
                var i = e.mediaGroups || {}
                  , n = !0
                  , r = Object.keys(i.AUDIO);
                for (var a in i.AUDIO)
                    for (var s in i.AUDIO[a]) {
                        i.AUDIO[a][s].uri || (n = !1)
                    }
                n && this.tech_.trigger({
                    type: "usage",
                    name: "hls-demuxed"
                }),
                Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                    type: "usage",
                    name: "hls-webvtt"
                }),
                _o.Playlist.isAes(t) && this.tech_.trigger({
                    type: "usage",
                    name: "hls-aes"
                }),
                _o.Playlist.isFmp4(t) && this.tech_.trigger({
                    type: "usage",
                    name: "hls-fmp4"
                }),
                r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
                    type: "usage",
                    name: "hls-alternate-audio"
                }),
                this.useCueTags_ && this.tech_.trigger({
                    type: "usage",
                    name: "hls-playlist-cue-tags"
                })
            }
        }, {
            key: "setupSegmentLoaderListeners_",
            value: function() {
                var e = this;
                this.mainSegmentLoader_.on("bandwidthupdate", function() {
                    var t = e.selectPlaylist()
                      , i = e.masterPlaylistLoader_.media()
                      , n = e.tech_.buffered()
                      , r = n.length ? n.end(n.length - 1) - e.tech_.currentTime() : 0
                      , a = e.bufferLowWaterLine();
                    (!i.endList || e.duration() < Bs.MAX_BUFFER_LOW_WATER_LINE || t.attributes.BANDWIDTH < i.attributes.BANDWIDTH || r >= a) && e.masterPlaylistLoader_.media(t),
                    e.tech_.trigger("bandwidthupdate")
                }),
                this.mainSegmentLoader_.on("progress", function() {
                    e.trigger("progress")
                }),
                this.mainSegmentLoader_.on("error", function() {
                    e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
                }),
                this.mainSegmentLoader_.on("syncinfoupdate", function() {
                    e.onSyncInfoUpdate_()
                }),
                this.mainSegmentLoader_.on("timestampoffset", function() {
                    e.tech_.trigger({
                        type: "usage",
                        name: "hls-timestamp-offset"
                    })
                }),
                this.audioSegmentLoader_.on("syncinfoupdate", function() {
                    e.onSyncInfoUpdate_()
                }),
                this.mainSegmentLoader_.on("ended", function() {
                    e.onEndOfStream()
                }),
                this.mainSegmentLoader_.on("earlyabort", function() {
                    e.blacklistCurrentPlaylist({
                        message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                    }, 120)
                }),
                this.mainSegmentLoader_.on("reseteverything", function() {
                    e.tech_.trigger("hls-reset")
                }),
                this.mainSegmentLoader_.on("segmenttimemapping", function(t) {
                    e.tech_.trigger({
                        type: "hls-segment-time-mapping",
                        mapping: t.mapping
                    })
                }),
                this.audioSegmentLoader_.on("ended", function() {
                    e.onEndOfStream()
                })
            }
        }, {
            key: "mediaSecondsLoaded_",
            value: function() {
                return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
            }
        }, {
            key: "load",
            value: function() {
                this.mainSegmentLoader_.load(),
                this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
                this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
            }
        }, {
            key: "smoothQualityChange_",
            value: function() {
                var e = this.selectPlaylist();
                e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e),
                this.mainSegmentLoader_.resetLoader())
            }
        }, {
            key: "fastQualityChange_",
            value: function() {
                var e = this
                  , t = this.selectPlaylist();
                t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t),
                this.mainSegmentLoader_.resetEverything(function() {
                    ta.browser.IE_VERSION || ta.browser.IS_EDGE ? e.tech_.setCurrentTime(e.tech_.currentTime() + .04) : e.tech_.setCurrentTime(e.tech_.currentTime())
                }))
            }
        }, {
            key: "play",
            value: function() {
                if (!this.setupFirstPlay()) {
                    this.tech_.ended() && this.seekTo_(0),
                    this.hasPlayed_() && this.load();
                    var e = this.tech_.seekable();
                    return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.seekTo_(e.end(e.length - 1)) : void 0
                }
            }
        }, {
            key: "setupFirstPlay",
            value: function() {
                var e = this
                  , t = this.masterPlaylistLoader_.media();
                if (!t || this.tech_.paused() || this.hasPlayed_())
                    return !1;
                if (!t.endList) {
                    var i = this.seekable();
                    if (!i.length)
                        return !1;
                    if (ta.browser.IE_VERSION && 0 === this.tech_.readyState())
                        return this.tech_.one("loadedmetadata", function() {
                            e.trigger("firstplay"),
                            e.seekTo_(i.end(0)),
                            e.hasPlayed_ = function() {
                                return !0
                            }
                        }),
                        !1;
                    this.trigger("firstplay"),
                    this.seekTo_(i.end(0))
                }
                return this.hasPlayed_ = function() {
                    return !0
                }
                ,
                this.load(),
                !0
            }
        }, {
            key: "handleSourceOpen_",
            value: function() {
                try {
                    this.setupSourceBuffers_()
                } catch (e) {
                    return ta.log.warn("Failed to create Source Buffers", e),
                    this.mediaSource.endOfStream("decode")
                }
                if (this.tech_.autoplay()) {
                    var e = this.tech_.play();
                    void 0 !== e && "function" == typeof e.then && e.then(null, function(e) {})
                }
                this.trigger("sourceopen")
            }
        }, {
            key: "onEndOfStream",
            value: function() {
                var e = this.mainSegmentLoader_.ended_;
                if (this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_),
                e) {
                    this.logger_("calling mediaSource.endOfStream()");
                    try {
                        this.mediaSource.endOfStream()
                    } catch (e) {
                        ta.log.warn("Failed to call media source endOfStream", e)
                    }
                }
            }
        }, {
            key: "stuckAtPlaylistEnd_",
            value: function(e) {
                if (!this.seekable().length)
                    return !1;
                var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
                if (null === t)
                    return !1;
                var i = _o.Playlist.playlistEnd(e, t)
                  , n = this.tech_.currentTime()
                  , r = this.tech_.buffered();
                if (!r.length)
                    return i - n <= .1;
                var a = r.end(r.length - 1);
                return a - n <= .1 && i - a <= .1
            }
        }, {
            key: "blacklistCurrentPlaylist",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments[1]
                  , i = void 0
                  , n = void 0;
                if (i = e.playlist || this.masterPlaylistLoader_.media(),
                t = t || e.blacklistDuration || this.blacklistDuration,
                !i) {
                    this.error = e;
                    try {
                        return this.mediaSource.endOfStream("network")
                    } catch (e) {
                        return this.trigger("error")
                    }
                }
                var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(xa).length;
                return r ? (ta.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),
                this.tech_.trigger("retryplaylist"),
                this.masterPlaylistLoader_.load(r)) : (i.excludeUntil = Date.now() + 1e3 * t,
                this.tech_.trigger("blacklistplaylist"),
                this.tech_.trigger({
                    type: "usage",
                    name: "hls-rendition-blacklisted"
                }),
                n = this.selectPlaylist(),
                ta.log.warn("Problem encountered with the current HLS playlist." + (e.message ? " " + e.message : "") + " Switching to another playlist."),
                this.masterPlaylistLoader_.media(n))
            }
        }, {
            key: "pauseLoading",
            value: function() {
                this.mainSegmentLoader_.pause(),
                this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(),
                this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                var t = Ya(this.tech_.buffered(), e);
                return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(),
                this.mainSegmentLoader_.abort(),
                this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(),
                this.audioSegmentLoader_.abort()),
                this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(),
                this.subtitleSegmentLoader_.abort()),
                void this.load()) : 0
            }
        }, {
            key: "duration",
            value: function() {
                return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : _o.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
            }
        }, {
            key: "seekable",
            value: function() {
                return this.seekable_
            }
        }, {
            key: "onSyncInfoUpdate_",
            value: function() {
                var e = void 0
                  , t = void 0;
                if (this.masterPlaylistLoader_) {
                    var i = this.masterPlaylistLoader_.media();
                    if (i) {
                        var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                        if (null !== n && 0 !== (e = _o.Playlist.seekable(i, n)).length) {
                            if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(),
                                null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration)))
                                    return;
                                if (0 === (t = _o.Playlist.seekable(i, n)).length)
                                    return
                            }
                            var r = void 0
                              , a = void 0;
                            this.seekable_ && this.seekable_.length && (r = this.seekable_.end(0),
                            a = this.seekable_.start(0)),
                            t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = ta.createTimeRanges([[t.start(0) > e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]]) : this.seekable_ = e,
                            this.seekable_ && this.seekable_.length && this.seekable_.end(0) === r && this.seekable_.start(0) === a || (this.logger_("seekable updated [" + Qa(this.seekable_) + "]"),
                            this.tech_.trigger("seekablechanged"))
                        }
                    }
                }
            }
        }, {
            key: "updateDuration",
            value: function() {
                var e = this
                  , t = this.mediaSource.duration
                  , i = _o.Playlist.duration(this.masterPlaylistLoader_.media())
                  , n = this.tech_.buffered()
                  , r = function t() {
                    e.logger_("Setting duration from " + e.mediaSource.duration + " => " + i);
                    try {
                        e.mediaSource.duration = i
                    } catch (e) {
                        ta.log.warn("Failed to set media source duration", e)
                    }
                    e.tech_.trigger("durationchange"),
                    e.mediaSource.removeEventListener("sourceopen", t)
                };
                n.length > 0 && (i = Math.max(i, n.end(n.length - 1))),
                t !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
            }
        }, {
            key: "dispose",
            value: function() {
                var e = this;
                this.decrypter_.terminate(),
                this.masterPlaylistLoader_.dispose(),
                this.mainSegmentLoader_.dispose(),
                ["AUDIO", "SUBTITLES"].forEach(function(t) {
                    var i = e.mediaTypes_[t].groups;
                    for (var n in i)
                        i[n].forEach(function(e) {
                            e.playlistLoader && e.playlistLoader.dispose()
                        })
                }),
                this.audioSegmentLoader_.dispose(),
                this.subtitleSegmentLoader_.dispose()
            }
        }, {
            key: "master",
            value: function() {
                return this.masterPlaylistLoader_.master
            }
        }, {
            key: "media",
            value: function() {
                return this.masterPlaylistLoader_.media() || this.initialMedia_
            }
        }, {
            key: "setupSourceBuffers_",
            value: function() {
                var e, t = this.masterPlaylistLoader_.media();
                if (t && "open" === this.mediaSource.readyState) {
                    if ((e = vs(this.masterPlaylistLoader_.master, t)).length < 1)
                        return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri,
                        this.mediaSource.endOfStream("decode");
                    this.configureLoaderMimeTypes_(e),
                    this.excludeIncompatibleVariants_(t)
                }
            }
        }, {
            key: "configureLoaderMimeTypes_",
            value: function(e) {
                var t = e.length > 1 && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new ta.EventTarget : null;
                this.mainSegmentLoader_.mimeType(e[0], t),
                e[1] && this.audioSegmentLoader_.mimeType(e[1], t)
            }
        }, {
            key: "excludeUnsupportedVariants_",
            value: function() {
                this.master().playlists.forEach(function(e) {
                    var t;
                    e.attributes.CODECS && r.a.MediaSource && r.a.MediaSource.isTypeSupported && !r.a.MediaSource.isTypeSupported('video/mp4; codecs="' + (t = e.attributes.CODECS,
                    t.replace(/avc1\.(\d+)\.(\d+)/i, function(e) {
                        return ms([e])[0]
                    })) + '"') && (e.excludeUntil = 1 / 0)
                })
            }
        }, {
            key: "excludeIncompatibleVariants_",
            value: function(e) {
                var t = 2
                  , i = null
                  , n = void 0;
                e.attributes.CODECS && (n = gs(e.attributes.CODECS),
                i = n.videoCodec,
                t = n.codecCount),
                this.master().playlists.forEach(function(e) {
                    var n = {
                        codecCount: 2,
                        videoCodec: null
                    };
                    e.attributes.CODECS && (n = gs(e.attributes.CODECS)),
                    n.codecCount !== t && (e.excludeUntil = 1 / 0),
                    n.videoCodec !== i && (e.excludeUntil = 1 / 0)
                })
            }
        }, {
            key: "updateAdCues_",
            value: function(e) {
                var t = 0
                  , i = this.seekable();
                i.length && (t = i.start(0)),
                function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (e.segments)
                        for (var n = i, a = void 0, s = 0; s < e.segments.length; s++) {
                            var o = e.segments[s];
                            if (a || (a = io(t, n + o.duration / 2)),
                            a) {
                                if ("cueIn"in o) {
                                    a.endTime = n,
                                    a.adEndTime = n,
                                    n += o.duration,
                                    a = null;
                                    continue
                                }
                                if (n < a.endTime) {
                                    n += o.duration;
                                    continue
                                }
                                a.endTime += o.duration
                            } else if ("cueOut"in o && ((a = new r.a.VTTCue(n,n + o.duration,o.cueOut)).adStartTime = n,
                            a.adEndTime = n + parseFloat(o.cueOut),
                            t.addCue(a)),
                            "cueOutCont"in o) {
                                var u = void 0
                                  , l = void 0
                                  , c = o.cueOutCont.split("/").map(parseFloat)
                                  , d = ca(c, 2);
                                u = d[0],
                                l = d[1],
                                (a = new r.a.VTTCue(n,n + o.duration,"")).adStartTime = n - u,
                                a.adEndTime = a.adStartTime + l,
                                t.addCue(a)
                            }
                            n += o.duration
                        }
                }(e, this.cueTagsTrack_, t)
            }
        }, {
            key: "goalBufferLength",
            value: function() {
                var e = this.tech_.currentTime()
                  , t = Bs.GOAL_BUFFER_LENGTH
                  , i = Bs.GOAL_BUFFER_LENGTH_RATE
                  , n = Math.max(t, Bs.MAX_GOAL_BUFFER_LENGTH);
                return Math.min(t + e * i, n)
            }
        }, {
            key: "bufferLowWaterLine",
            value: function() {
                var e = this.tech_.currentTime()
                  , t = Bs.BUFFER_LOW_WATER_LINE
                  , i = Bs.BUFFER_LOW_WATER_LINE_RATE
                  , n = Math.max(t, Bs.MAX_BUFFER_LOW_WATER_LINE);
                return Math.min(t + e * i, n)
            }
        }]),
        t
    }(ta.EventTarget)
      , ko = function e(t, i, n) {
        sa(this, e);
        var r, a, s, o = t.masterPlaylistController_, u = o[(t.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(o);
        if (i.attributes.RESOLUTION) {
            var l = i.attributes.RESOLUTION;
            this.width = l.width,
            this.height = l.height
        }
        this.bandwidth = i.attributes.BANDWIDTH,
        this.id = n,
        this.enabled = (r = t.playlists,
        a = i.uri,
        s = u,
        function(e) {
            var t = r.master.playlists[a]
              , i = Ia(t)
              , n = xa(t);
            return void 0 === e ? n : (e ? delete t.disabled : t.disabled = !0,
            e === n || i || (s(),
            e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")),
            e)
        }
        )
    }
      , wo = ["seeking", "seeked", "pause", "playing", "error"]
      , Co = function() {
        function e(t) {
            var i = this;
            sa(this, e),
            this.tech_ = t.tech,
            this.seekable = t.seekable,
            this.seekTo = t.seekTo,
            this.allowSeeksWithinUnsafeLiveWindow = t.allowSeeksWithinUnsafeLiveWindow,
            this.media = t.media,
            this.consecutiveUpdates = 0,
            this.lastRecordedTime = null,
            this.timer_ = null,
            this.checkCurrentTimeTimeout_ = null,
            this.logger_ = Us("PlaybackWatcher"),
            this.logger_("initialize");
            var n = function() {
                return i.monitorCurrentTime_()
            }
              , a = function() {
                return i.techWaiting_()
            }
              , s = function() {
                return i.cancelTimer_()
            }
              , o = function() {
                return i.fixesBadSeeks_()
            };
            this.tech_.on("seekablechanged", o),
            this.tech_.on("waiting", a),
            this.tech_.on(wo, s),
            this.tech_.on("canplay", n),
            this.dispose = function() {
                i.logger_("dispose"),
                i.tech_.off("seekablechanged", o),
                i.tech_.off("waiting", a),
                i.tech_.off(wo, s),
                i.tech_.off("canplay", n),
                i.checkCurrentTimeTimeout_ && r.a.clearTimeout(i.checkCurrentTimeTimeout_),
                i.cancelTimer_()
            }
        }
        return oa(e, [{
            key: "monitorCurrentTime_",
            value: function() {
                this.checkCurrentTime_(),
                this.checkCurrentTimeTimeout_ && r.a.clearTimeout(this.checkCurrentTimeTimeout_),
                this.checkCurrentTimeTimeout_ = r.a.setTimeout(this.monitorCurrentTime_.bind(this), 250)
            }
        }, {
            key: "checkCurrentTime_",
            value: function() {
                if (this.tech_.seeking() && this.fixesBadSeeks_())
                    return this.consecutiveUpdates = 0,
                    void (this.lastRecordedTime = this.tech_.currentTime());
                if (!this.tech_.paused() && !this.tech_.seeking()) {
                    var e = this.tech_.currentTime()
                      , t = this.tech_.buffered();
                    if (this.lastRecordedTime === e && (!t.length || e + .1 >= t.end(t.length - 1)))
                        return this.techWaiting_();
                    this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++,
                    this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0,
                    this.lastRecordedTime = e)
                }
            }
        }, {
            key: "cancelTimer_",
            value: function() {
                this.consecutiveUpdates = 0,
                this.timer_ && (this.logger_("cancelTimer_"),
                clearTimeout(this.timer_)),
                this.timer_ = null
            }
        }, {
            key: "fixesBadSeeks_",
            value: function() {
                if (!this.tech_.seeking())
                    return !1;
                var e = this.seekable()
                  , t = this.tech_.currentTime()
                  , i = void 0;
                this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (i = e.end(e.length - 1));
                this.beforeSeekableWindow_(e, t) && (i = e.start(0) + .1);
                return void 0 !== i && (this.logger_("Trying to seek outside of seekable at time " + t + " with seekable range " + Qa(e) + ". Seeking to " + i + "."),
                this.seekTo(i),
                !0)
            }
        }, {
            key: "waiting_",
            value: function() {
                if (!this.techWaiting_()) {
                    var e = this.tech_.currentTime()
                      , t = this.tech_.buffered()
                      , i = Ya(t, e);
                    return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(),
                    this.seekTo(e),
                    this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."),
                    void this.tech_.trigger({
                        type: "usage",
                        name: "hls-unknown-waiting"
                    })) : void 0
                }
            }
        }, {
            key: "techWaiting_",
            value: function() {
                var e = this.seekable()
                  , t = this.tech_.currentTime();
                if (this.tech_.seeking() && this.fixesBadSeeks_())
                    return !0;
                if (this.tech_.seeking() || null !== this.timer_)
                    return !0;
                if (this.beforeSeekableWindow_(e, t)) {
                    var i = e.end(e.length - 1);
                    return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i),
                    this.cancelTimer_(),
                    this.seekTo(i),
                    this.tech_.trigger({
                        type: "usage",
                        name: "hls-live-resync"
                    }),
                    !0
                }
                var n = this.tech_.buffered()
                  , r = Ka(n, t);
                if (this.videoUnderflow_(r, n, t))
                    return this.cancelTimer_(),
                    this.seekTo(t),
                    this.tech_.trigger({
                        type: "usage",
                        name: "hls-video-underflow"
                    }),
                    !0;
                if (r.length > 0) {
                    var a = r.start(0) - t;
                    return this.logger_("Stopped at " + t + ", setting timer for " + a + ", seeking to " + r.start(0)),
                    this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, t),
                    !0
                }
                return !1
            }
        }, {
            key: "afterSeekableWindow_",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!e.length)
                    return !1;
                var r = e.end(e.length - 1) + .1
                  , a = !i.endList;
                return a && n && (r = e.end(e.length - 1) + 3 * i.targetDuration),
                t > r
            }
        }, {
            key: "beforeSeekableWindow_",
            value: function(e, t) {
                return !!(e.length && e.start(0) > 0 && t < e.start(0) - .1)
            }
        }, {
            key: "videoUnderflow_",
            value: function(e, t, i) {
                if (0 === e.length) {
                    var n = this.gapFromVideoUnderflow_(t, i);
                    if (n)
                        return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i),
                        !0
                }
                return !1
            }
        }, {
            key: "skipTheGap_",
            value: function(e) {
                var t = this.tech_.buffered()
                  , i = this.tech_.currentTime()
                  , n = Ka(t, i);
                this.cancelTimer_(),
                0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)),
                this.seekTo(n.start(0) + 1 / 30),
                this.tech_.trigger({
                    type: "usage",
                    name: "hls-gap-skip"
                }))
            }
        }, {
            key: "gapFromVideoUnderflow_",
            value: function(e, t) {
                for (var i = function(e) {
                    if (e.length < 2)
                        return ta.createTimeRanges();
                    for (var t = [], i = 1; i < e.length; i++) {
                        var n = e.end(i - 1)
                          , r = e.start(i);
                        t.push([n, r])
                    }
                    return ta.createTimeRanges(t)
                }(e), n = 0; n < i.length; n++) {
                    var r = i.start(n)
                      , a = i.end(n);
                    if (t - r < 4 && t - r > 2)
                        return {
                            start: r,
                            end: a
                        }
                }
                return null
            }
        }]),
        e
    }()
      , Eo = {
        errorInterval: 30,
        getSource: function(e) {
            return e(this.tech({
                IWillNotUseThisInPlugins: !0
            }).currentSource_)
        }
    }
      , Ao = function(e) {
        !function e(t, i) {
            var n = 0
              , r = 0
              , a = ta.mergeOptions(Eo, i);
            t.ready(function() {
                t.trigger({
                    type: "usage",
                    name: "hls-error-reload-initialized"
                })
            });
            var s = function() {
                r && t.currentTime(r)
            }
              , o = function(e) {
                null != e && (r = t.duration() !== 1 / 0 && t.currentTime() || 0,
                t.one("loadedmetadata", s),
                t.src(e),
                t.trigger({
                    type: "usage",
                    name: "hls-error-reload"
                }),
                t.play())
            }
              , u = function() {
                if (Date.now() - n < 1e3 * a.errorInterval)
                    t.trigger({
                        type: "usage",
                        name: "hls-error-reload-canceled"
                    });
                else {
                    if (a.getSource && "function" == typeof a.getSource)
                        return n = Date.now(),
                        a.getSource.call(t, o);
                    ta.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                }
            }
              , l = function e() {
                t.off("loadedmetadata", s),
                t.off("error", u),
                t.off("dispose", e)
            };
            t.on("error", u),
            t.on("dispose", l),
            t.reloadSourceOnError = function(i) {
                l(),
                e(t, i)
            }
        }(this, e)
    };
    ta.use("*", function(e) {
        return {
            setSource: function(e, t) {
                t(null, e)
            },
            setCurrentTime: function(t) {
                return e.vhs && e.currentSource().src === e.vhs.source_.src && e.vhs.setCurrentTime(t),
                t
            },
            play: function() {
                e.vhs && e.currentSource().src === e.vhs.source_.src && e.vhs.setCurrentTime(e.tech_.currentTime())
            }
        }
    });
    var Po = {
        PlaylistLoader: _a,
        Playlist: Ra,
        Decrypter: q,
        AsyncStream: F,
        decrypt: H,
        utils: Wa,
        STANDARD_PLAYLIST_SELECTOR: function() {
            return function(e, t, i, n, a) {
                var s = e.playlists.map(function(e) {
                    var t, i;
                    return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                    i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
                    {
                        bandwidth: e.attributes.BANDWIDTH || r.a.Number.MAX_VALUE,
                        width: t,
                        height: i,
                        playlist: e
                    }
                });
                Xs(s, function(e, t) {
                    return e.bandwidth - t.bandwidth
                });
                var o = (s = s.filter(function(e) {
                    return !Ra.isIncompatible(e.playlist)
                })).filter(function(e) {
                    return Ra.isEnabled(e.playlist)
                });
                o.length || (o = s.filter(function(e) {
                    return !Ra.isDisabled(e.playlist)
                }));
                var u = o.filter(function(e) {
                    return e.bandwidth * Bs.BANDWIDTH_VARIANCE < t
                })
                  , l = u[u.length - 1]
                  , c = u.filter(function(e) {
                    return e.bandwidth === l.bandwidth
                })[0];
                if (!1 === a) {
                    var d = c || o[0] || s[0];
                    return d ? d.playlist : null
                }
                var h = u.filter(function(e) {
                    return e.width && e.height
                });
                Xs(h, function(e, t) {
                    return e.width - t.width
                });
                var p = h.filter(function(e) {
                    return e.width === i && e.height === n
                });
                l = p[p.length - 1];
                var f = p.filter(function(e) {
                    return e.bandwidth === l.bandwidth
                })[0]
                  , m = void 0
                  , g = void 0
                  , y = void 0;
                f || (g = (m = h.filter(function(e) {
                    return e.width > i || e.height > n
                })).filter(function(e) {
                    return e.width === m[0].width && e.height === m[0].height
                }),
                l = g[g.length - 1],
                y = g.filter(function(e) {
                    return e.bandwidth === l.bandwidth
                })[0]);
                var v = y || f || c || o[0] || s[0];
                return v ? v.playlist : null
            }(this.playlists.master, this.systemBandwidth, parseInt($s(this.tech_.el(), "width"), 10), parseInt($s(this.tech_.el(), "height"), 10), this.limitRenditionByPlayerDimensions)
        },
        INITIAL_PLAYLIST_SELECTOR: function() {
            var e = this.playlists.master.playlists.filter(Ra.isEnabled);
            return Xs(e, function(e, t) {
                return Ys(e, t)
            }),
            e.filter(function(e) {
                return gs(e.attributes.CODECS).videoCodec
            })[0] || null
        },
        comparePlaylistBandwidth: Ys,
        comparePlaylistResolution: function(e, t) {
            var i = void 0
              , n = void 0;
            return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width),
            i = i || r.a.Number.MAX_VALUE,
            t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width),
            i === (n = n || r.a.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
        },
        xhr: Na()
    };
    ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(e) {
        Object.defineProperty(Po, e, {
            get: function() {
                return ta.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"),
                Bs[e]
            },
            set: function(t) {
                ta.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"),
                "number" != typeof t || t < 0 ? ta.log.warn("value of Hls." + e + " must be greater than or equal to 0") : Bs[e] = t
            }
        })
    });
    var Lo = function(e) {
        if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e))
            return "hls";
        return /^application\/dash\+xml/i.test(e) ? "dash" : null
    }
      , Oo = function(e, t) {
        for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
            if (e[r].id === i.uri) {
                n = r;
                break
            }
        e.selectedIndex_ = n,
        e.trigger({
            selectedIndex: n,
            type: "change"
        })
    };
    Po.canPlaySource = function() {
        return ta.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    }
    ;
    var Io = function(e) {
        if ("dash" === e.options_.sourceType) {
            var t = ta.players[e.tech_.options_.playerId];
            if (t.eme) {
                var i = function(e, t, i) {
                    if (!e)
                        return e;
                    var n = {};
                    for (var r in e)
                        n[r] = {
                            audioContentType: 'audio/mp4; codecs="' + i.attributes.CODECS + '"',
                            videoContentType: 'video/mp4; codecs="' + t.attributes.CODECS + '"'
                        },
                        t.contentProtection && t.contentProtection[r] && t.contentProtection[r].pssh && (n[r].pssh = t.contentProtection[r].pssh),
                        "string" == typeof e[r] && (n[r].url = e[r]);
                    return ta.mergeOptions(e, n)
                }(e.source_.keySystems, e.playlists.media(), e.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
                i && (t.currentSource().keySystems = i,
                t.eme.initializeMediaKeys && t.eme.initializeMediaKeys())
            }
        }
    }
      , xo = function() {
        if (!window.localStorage)
            return null;
        var e = window.localStorage.getItem("videojs-vhs");
        if (!e)
            return null;
        try {
            return JSON.parse(e)
        } catch (e) {
            return null
        }
    };
    Po.supportsNativeHls = function() {
        var e = s.a.createElement("video");
        if (!ta.getTech("Html5").isSupported())
            return !1;
        return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(t) {
            return /maybe|probably/i.test(e.canPlayType(t))
        })
    }(),
    Po.supportsNativeDash = !!ta.getTech("Html5").isSupported() && /maybe|probably/i.test(s.a.createElement("video").canPlayType("application/dash+xml")),
    Po.supportsTypeNatively = function(e) {
        return "hls" === e ? Po.supportsNativeHls : "dash" === e && Po.supportsNativeDash
    }
    ,
    Po.isSupported = function() {
        return ta.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    }
    ;
    var Do = ta.getComponent("Component")
      , Uo = function(e) {
        function t(e, i, n) {
            sa(this, t);
            var r = la(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n.hls));
            if (i.options_ && i.options_.playerId) {
                var a = ta(i.options_.playerId);
                a.hasOwnProperty("hls") || Object.defineProperty(a, "hls", {
                    get: function() {
                        return ta.log.warn("player.hls is deprecated. Use player.tech().hls instead."),
                        i.trigger({
                            type: "usage",
                            name: "hls-player-access"
                        }),
                        r
                    },
                    configurable: !0
                }),
                a.vhs = r,
                a.dash = r,
                r.player_ = a
            }
            if (r.tech_ = i,
            r.source_ = e,
            r.stats = {},
            r.setOptions_(),
            r.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks)
                i.overrideNativeAudioTracks(!0),
                i.overrideNativeVideoTracks(!0);
            else if (r.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks))
                throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
            return r.on(s.a, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(e) {
                var t = s.a.fullscreenElement || s.a.webkitFullscreenElement || s.a.mozFullScreenElement || s.a.msFullscreenElement;
                t && t.contains(r.tech_.el()) && r.masterPlaylistController_.smoothQualityChange_()
            }),
            r.on(r.tech_, "seeking", function() {
                0 === this.tech_.currentTime() && this.tech_.player_.loop() && this.setCurrentTime(0)
            }),
            r.on(r.tech_, "error", function() {
                this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
            }),
            r.on(r.tech_, "play", r.play),
            r
        }
        return ua(t, Do),
        oa(t, [{
            key: "setOptions_",
            value: function() {
                var e = this;
                if (this.options_.withCredentials = this.options_.withCredentials || !1,
                this.options_.handleManifestRedirects = this.options_.handleManifestRedirects || !1,
                this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions,
                this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1,
                this.options_.useBandwidthFromLocalStorage = void 0 !== this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1,
                this.options_.customTagParsers = this.options_.customTagParsers || [],
                this.options_.customTagMappers = this.options_.customTagMappers || [],
                "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
                "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
                    var t = xo();
                    t && t.bandwidth && (this.options_.bandwidth = t.bandwidth,
                    this.tech_.trigger({
                        type: "usage",
                        name: "hls-bandwidth-from-local-storage"
                    })),
                    t && t.throughput && (this.options_.throughput = t.throughput,
                    this.tech_.trigger({
                        type: "usage",
                        name: "hls-throughput-from-local-storage"
                    }))
                }
                "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = Bs.INITIAL_BANDWIDTH),
                this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Bs.INITIAL_BANDWIDTH,
                ["withCredentials", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects"].forEach(function(t) {
                    void 0 !== e.source_[t] && (e.options_[t] = e.source_[t])
                }),
                this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions
            }
        }, {
            key: "src",
            value: function(e, t) {
                var i = this;
                e && (this.setOptions_(),
                this.options_.url = this.source_.src,
                this.options_.tech = this.tech_,
                this.options_.externHls = Po,
                this.options_.sourceType = Lo(t),
                this.options_.seekTo = function(e) {
                    i.tech_.setCurrentTime(e),
                    i.setCurrentTime(e)
                }
                ,
                this.masterPlaylistController_ = new So(this.options_),
                this.playbackWatcher_ = new Co(ta.mergeOptions(this.options_, {
                    seekable: function() {
                        return i.seekable()
                    },
                    media: function() {
                        return i.masterPlaylistController_.media()
                    }
                })),
                this.masterPlaylistController_.on("error", function() {
                    ta.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error)
                }),
                this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Po.STANDARD_PLAYLIST_SELECTOR.bind(this),
                this.masterPlaylistController_.selectInitialPlaylist = Po.INITIAL_PLAYLIST_SELECTOR.bind(this),
                this.playlists = this.masterPlaylistController_.masterPlaylistLoader_,
                this.mediaSource = this.masterPlaylistController_.mediaSource,
                Object.defineProperties(this, {
                    selectPlaylist: {
                        get: function() {
                            return this.masterPlaylistController_.selectPlaylist
                        },
                        set: function(e) {
                            this.masterPlaylistController_.selectPlaylist = e.bind(this)
                        }
                    },
                    throughput: {
                        get: function() {
                            return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                        },
                        set: function(e) {
                            this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e,
                            this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                        }
                    },
                    bandwidth: {
                        get: function() {
                            return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                        },
                        set: function(e) {
                            this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e,
                            this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                rate: 0,
                                count: 0
                            }
                        }
                    },
                    systemBandwidth: {
                        get: function() {
                            var e = 1 / (this.bandwidth || 1)
                              , t = void 0;
                            return t = this.throughput > 0 ? 1 / this.throughput : 0,
                            Math.floor(1 / (e + t))
                        },
                        set: function() {
                            ta.log.error('The "systemBandwidth" property is read-only')
                        }
                    }
                }),
                this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
                this.options_.throughput && (this.throughput = this.options_.throughput),
                Object.defineProperties(this.stats, {
                    bandwidth: {
                        get: function() {
                            return i.bandwidth || 0
                        },
                        enumerable: !0
                    },
                    mediaRequests: {
                        get: function() {
                            return i.masterPlaylistController_.mediaRequests_() || 0
                        },
                        enumerable: !0
                    },
                    mediaRequestsAborted: {
                        get: function() {
                            return i.masterPlaylistController_.mediaRequestsAborted_() || 0
                        },
                        enumerable: !0
                    },
                    mediaRequestsTimedout: {
                        get: function() {
                            return i.masterPlaylistController_.mediaRequestsTimedout_() || 0
                        },
                        enumerable: !0
                    },
                    mediaRequestsErrored: {
                        get: function() {
                            return i.masterPlaylistController_.mediaRequestsErrored_() || 0
                        },
                        enumerable: !0
                    },
                    mediaTransferDuration: {
                        get: function() {
                            return i.masterPlaylistController_.mediaTransferDuration_() || 0
                        },
                        enumerable: !0
                    },
                    mediaBytesTransferred: {
                        get: function() {
                            return i.masterPlaylistController_.mediaBytesTransferred_() || 0
                        },
                        enumerable: !0
                    },
                    mediaSecondsLoaded: {
                        get: function() {
                            return i.masterPlaylistController_.mediaSecondsLoaded_() || 0
                        },
                        enumerable: !0
                    },
                    buffered: {
                        get: function() {
                            return Ja(i.tech_.buffered())
                        },
                        enumerable: !0
                    },
                    currentTime: {
                        get: function() {
                            return i.tech_.currentTime()
                        },
                        enumerable: !0
                    },
                    currentSource: {
                        get: function() {
                            return i.tech_.currentSource_
                        },
                        enumerable: !0
                    },
                    currentTech: {
                        get: function() {
                            return i.tech_.name_
                        },
                        enumerable: !0
                    },
                    duration: {
                        get: function() {
                            return i.tech_.duration()
                        },
                        enumerable: !0
                    },
                    master: {
                        get: function() {
                            return i.playlists.master
                        },
                        enumerable: !0
                    },
                    playerDimensions: {
                        get: function() {
                            return i.tech_.currentDimensions()
                        },
                        enumerable: !0
                    },
                    seekable: {
                        get: function() {
                            return Ja(i.tech_.seekable())
                        },
                        enumerable: !0
                    },
                    timestamp: {
                        get: function() {
                            return Date.now()
                        },
                        enumerable: !0
                    },
                    videoPlaybackQuality: {
                        get: function() {
                            return i.tech_.getVideoPlaybackQuality()
                        },
                        enumerable: !0
                    }
                }),
                this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
                this.tech_.on("bandwidthupdate", function() {
                    i.options_.useBandwidthFromLocalStorage && function(e) {
                        if (!window.localStorage)
                            return !1;
                        var t = xo();
                        t = t ? ta.mergeOptions(t, e) : e;
                        try {
                            window.localStorage.setItem("videojs-vhs", JSON.stringify(t))
                        } catch (e) {
                            return !1
                        }
                    }({
                        bandwidth: i.bandwidth,
                        throughput: Math.round(i.throughput)
                    })
                }),
                this.masterPlaylistController_.on("selectedinitialmedia", function() {
                    var e, t;
                    t = (e = i).playlists,
                    e.representations = function() {
                        return t.master.playlists.filter(function(e) {
                            return !Ia(e)
                        }).map(function(t, i) {
                            return new ko(e,t,t.uri)
                        })
                    }
                    ,
                    Io(i)
                }),
                this.on(this.masterPlaylistController_, "progress", function() {
                    this.tech_.trigger("progress")
                }),
                this.tech_.ready(function() {
                    return i.setupQualityLevels_()
                }),
                this.tech_.el() && this.tech_.src(ta.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
            }
        }, {
            key: "setupQualityLevels_",
            value: function() {
                var e = this
                  , t = ta.players[this.tech_.options_.playerId];
                t && t.qualityLevels && (this.qualityLevels_ = t.qualityLevels(),
                this.masterPlaylistController_.on("selectedinitialmedia", function() {
                    var t, i;
                    t = e.qualityLevels_,
                    (i = e).representations().forEach(function(e) {
                        t.addQualityLevel(e)
                    }),
                    Oo(t, i.playlists)
                }),
                this.playlists.on("mediachange", function() {
                    Oo(e.qualityLevels_, e.playlists)
                }))
            }
        }, {
            key: "play",
            value: function() {
                this.masterPlaylistController_.play()
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                this.masterPlaylistController_.setCurrentTime(e)
            }
        }, {
            key: "duration",
            value: function() {
                return this.masterPlaylistController_.duration()
            }
        }, {
            key: "seekable",
            value: function() {
                return this.masterPlaylistController_.seekable()
            }
        }, {
            key: "dispose",
            value: function() {
                this.playbackWatcher_ && this.playbackWatcher_.dispose(),
                this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
                this.qualityLevels_ && this.qualityLevels_.dispose(),
                this.player_ && (delete this.player_.vhs,
                delete this.player_.dash,
                delete this.player_.hls),
                this.tech_ && this.tech_.hls && delete this.tech_.hls,
                function e(t, i, n) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, i);
                    if (void 0 === r) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : e(a, i, n)
                    }
                    if ("value"in r)
                        return r.value;
                    var s = r.get;
                    return void 0 !== s ? s.call(n) : void 0
                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dispose", this).call(this)
            }
        }, {
            key: "convertToProgramTime",
            value: function(e, t) {
                return Ga({
                    playlist: this.masterPlaylistController_.media(),
                    time: e,
                    callback: t
                })
            }
        }, {
            key: "seekToProgramTime",
            value: function(e, t) {
                var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return $a({
                    programTime: e,
                    playlist: this.masterPlaylistController_.media(),
                    retryCount: n,
                    pauseAfterSeek: i,
                    seekTo: this.options_.seekTo,
                    tech: this.options_.tech,
                    callback: t
                })
            }
        }]),
        t
    }()
      , Ro = {
        name: "videojs-http-streaming",
        VERSION: "1.9.3",
        canHandleSource: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = ta.mergeOptions(ta.options, t);
            return Ro.canPlayType(e.type, i)
        },
        handleSource: function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = ta.mergeOptions(ta.options, i);
            return t.hls = new Uo(e,t,n),
            t.hls.xhr = Na(),
            t.hls.src(e.src, e.type),
            t.hls
        },
        canPlayType: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = ta.mergeOptions(ta.options, t)
              , n = i.hls.overrideNative
              , r = Lo(e)
              , a = r && (!Po.supportsTypeNatively(r) || n);
            return a ? "maybe" : ""
        }
    };
    void 0 !== ta.MediaSource && void 0 !== ta.URL || (ta.MediaSource = Ps,
    ta.URL = Ls),
    Ps.supportsNativeMediaSources() && ta.getTech("Html5").registerSourceHandler(Ro, 0),
    ta.HlsHandler = Uo,
    ta.HlsSourceHandler = Ro,
    ta.Hls = Po,
    ta.use || ta.registerComponent("Hls", Po),
    ta.options.hls = ta.options.hls || {},
    ta.registerPlugin ? ta.registerPlugin("reloadSourceOnError", Ao) : ta.plugin("reloadSourceOnError", Ao);
    t.default = ta
}
, function(e, t, i) {
    "use strict";
    var n = i(0)
      , r = i(35)
      , a = i(36)
      , s = i(51);
    function o(e, t, i) {
        var n = e;
        return r(t) ? (i = t,
        "string" == typeof e && (n = {
            uri: e
        })) : n = s(t, {
            uri: e
        }),
        n.callback = i,
        n
    }
    function u(e, t, i) {
        return l(t = o(e, t, i))
    }
    function l(e) {
        if (void 0 === e.callback)
            throw new Error("callback argument missing");
        var t = !1
          , i = function(i, n, r) {
            t || (t = !0,
            e.callback(i, n, r))
        };
        function n() {
            var e = void 0;
            if (e = c.response ? c.response : c.responseText || function(e) {
                if ("document" === e.responseType)
                    return e.responseXML;
                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                if ("" === e.responseType && !t)
                    return e.responseXML;
                return null
            }(c),
            y)
                try {
                    e = JSON.parse(e)
                } catch (e) {}
            return e
        }
        function r(e) {
            return clearTimeout(d),
            e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
            e.statusCode = 0,
            i(e, v)
        }
        function s() {
            if (!l) {
                var t;
                clearTimeout(d),
                t = e.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
                var r = v
                  , s = null;
                return 0 !== t ? (r = {
                    body: n(),
                    statusCode: t,
                    method: p,
                    headers: {},
                    url: h,
                    rawRequest: c
                },
                c.getAllResponseHeaders && (r.headers = a(c.getAllResponseHeaders()))) : s = new Error("Internal XMLHttpRequest Error"),
                i(s, r, r.body)
            }
        }
        var o, l, c = e.xhr || null;
        c || (c = e.cors || e.useXDR ? new u.XDomainRequest : new u.XMLHttpRequest);
        var d, h = c.url = e.uri || e.url, p = c.method = e.method || "GET", f = e.body || e.data, m = c.headers = e.headers || {}, g = !!e.sync, y = !1, v = {
            body: void 0,
            headers: {},
            statusCode: 0,
            method: p,
            url: h,
            rawRequest: c
        };
        if ("json"in e && !1 !== e.json && (y = !0,
        m.accept || m.Accept || (m.Accept = "application/json"),
        "GET" !== p && "HEAD" !== p && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"),
        f = JSON.stringify(!0 === e.json ? f : e.json))),
        c.onreadystatechange = function() {
            4 === c.readyState && setTimeout(s, 0)
        }
        ,
        c.onload = s,
        c.onerror = r,
        c.onprogress = function() {}
        ,
        c.onabort = function() {
            l = !0
        }
        ,
        c.ontimeout = r,
        c.open(p, h, !g, e.username, e.password),
        g || (c.withCredentials = !!e.withCredentials),
        !g && e.timeout > 0 && (d = setTimeout(function() {
            if (!l) {
                l = !0,
                c.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT",
                r(e)
            }
        }, e.timeout)),
        c.setRequestHeader)
            for (o in m)
                m.hasOwnProperty(o) && c.setRequestHeader(o, m[o]);
        else if (e.headers && !function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }(e.headers))
            throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType"in e && (c.responseType = e.responseType),
        "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(c),
        c.send(f || null),
        c
    }
    e.exports = u,
    u.XMLHttpRequest = n.XMLHttpRequest || function() {}
    ,
    u.XDomainRequest = "withCredentials"in new u.XMLHttpRequest ? u.XMLHttpRequest : n.XDomainRequest,
    function(e, t) {
        for (var i = 0; i < e.length; i++)
            t(e[i])
    }(["get", "put", "post", "patch", "head", "delete"], function(e) {
        u["delete" === e ? "del" : e] = function(t, i, n) {
            return (i = o(t, i, n)).method = e.toUpperCase(),
            l(i)
        }
    })
}
, function(e, t, i) {
    var n = i(0)
      , r = e.exports = {
        WebVTT: i(52),
        VTTCue: i(53),
        VTTRegion: i(54)
    };
    n.vttjs = r,
    n.WebVTT = r.WebVTT;
    var a = r.VTTCue
      , s = r.VTTRegion
      , o = n.VTTCue
      , u = n.VTTRegion;
    r.shim = function() {
        n.VTTCue = a,
        n.VTTRegion = s
    }
    ,
    r.restore = function() {
        n.VTTCue = o,
        n.VTTRegion = u
    }
    ,
    n.VTTCue || r.shim()
}
, function(e, t, i) {
    var n, r, a, s, o;
    n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
    r = /^([^\/?#]*)(.*)$/,
    a = /(?:\/|^)\.(?=\/)/g,
    s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
    o = {
        buildAbsoluteURL: function(e, t, i) {
            if (i = i || {},
            e = e.trim(),
            !(t = t.trim())) {
                if (!i.alwaysNormalize)
                    return e;
                var n = o.parseURL(e);
                if (!n)
                    throw new Error("Error trying to parse base URL.");
                return n.path = o.normalizePath(n.path),
                o.buildURLFromParts(n)
            }
            var a = o.parseURL(t);
            if (!a)
                throw new Error("Error trying to parse relative URL.");
            if (a.scheme)
                return i.alwaysNormalize ? (a.path = o.normalizePath(a.path),
                o.buildURLFromParts(a)) : t;
            var s = o.parseURL(e);
            if (!s)
                throw new Error("Error trying to parse base URL.");
            if (!s.netLoc && s.path && "/" !== s.path[0]) {
                var u = r.exec(s.path);
                s.netLoc = u[1],
                s.path = u[2]
            }
            s.netLoc && !s.path && (s.path = "/");
            var l = {
                scheme: s.scheme,
                netLoc: a.netLoc,
                path: null,
                params: a.params,
                query: a.query,
                fragment: a.fragment
            };
            if (!a.netLoc && (l.netLoc = s.netLoc,
            "/" !== a.path[0]))
                if (a.path) {
                    var c = s.path
                      , d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                    l.path = o.normalizePath(d)
                } else
                    l.path = s.path,
                    a.params || (l.params = s.params,
                    a.query || (l.query = s.query));
            return null === l.path && (l.path = i.alwaysNormalize ? o.normalizePath(a.path) : a.path),
            o.buildURLFromParts(l)
        },
        parseURL: function(e) {
            var t = n.exec(e);
            return t ? {
                scheme: t[1] || "",
                netLoc: t[2] || "",
                path: t[3] || "",
                params: t[4] || "",
                query: t[5] || "",
                fragment: t[6] || ""
            } : null
        },
        normalizePath: function(e) {
            for (e = e.split("").reverse().join("").replace(a, ""); e.length !== (e = e.replace(s, "")).length; )
                ;
            return e.split("").reverse().join("")
        },
        buildURLFromParts: function(e) {
            return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
        }
    },
    e.exports = o
}
, function(e, t, i) {
    "use strict";
    (function(e) {
        i.d(t, "a", function() {
            return z
        }),
        i.d(t, "b", function() {
            return W
        });
        var n = i(0)
          , r = i.n(n)
          , a = function(e) {
            return !!e && "object" == typeof e
        }
          , s = function e() {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            return i.reduce(function(t, i) {
                return Object.keys(i).forEach(function(n) {
                    Array.isArray(t[n]) && Array.isArray(i[n]) ? t[n] = t[n].concat(i[n]) : a(t[n]) && a(i[n]) ? t[n] = e(t[n], i[n]) : t[n] = i[n]
                }),
                t
            }, {})
        }
          , o = function(e) {
            return e.reduce(function(e, t) {
                return e.concat(t)
            }, [])
        }
          , u = function(e) {
            if (!e.length)
                return [];
            for (var t = [], i = 0; i < e.length; i++)
                t.push(e[i]);
            return t
        }
          , l = function(e) {
            var t;
            return (t = e.reduce(function(e, t) {
                var i, n = t.attributes.id + (t.attributes.lang || "");
                e[n] ? (t.segments[0].discontinuity = !0,
                (i = e[n].segments).push.apply(i, t.segments),
                t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection)) : e[n] = t;
                return e
            }, {}),
            Object.keys(t).map(function(e) {
                return t[e]
            })).map(function(e) {
                var t, i;
                return e.discontinuityStarts = (t = e.segments,
                i = "discontinuity",
                t.reduce(function(e, t, n) {
                    return t[i] && e.push(n),
                    e
                }, [])),
                e
            })
        }
          , c = function(e) {
            var t, i = e.attributes, n = e.segments, r = {
                attributes: (t = {
                    NAME: i.id,
                    BANDWIDTH: i.bandwidth,
                    CODECS: i.codecs
                },
                t["PROGRAM-ID"] = 1,
                t),
                uri: "",
                endList: "static" === (i.type || "static"),
                timeline: i.periodIndex,
                resolvedUri: "",
                targetDuration: i.duration,
                segments: n,
                mediaSequence: n.length ? n[0].number : 1
            };
            return i.contentProtection && (r.contentProtection = i.contentProtection),
            r
        }
          , d = function(e) {
            var t, i = e.attributes, n = e.segments, r = {
                attributes: (t = {
                    NAME: i.id,
                    AUDIO: "audio",
                    SUBTITLES: "subs",
                    RESOLUTION: {
                        width: i.width,
                        height: i.height
                    },
                    CODECS: i.codecs,
                    BANDWIDTH: i.bandwidth
                },
                t["PROGRAM-ID"] = 1,
                t),
                uri: "",
                endList: "static" === (i.type || "static"),
                timeline: i.periodIndex,
                resolvedUri: "",
                targetDuration: i.duration,
                segments: n,
                mediaSequence: n.length ? n[0].number : 1
            };
            return i.contentProtection && (r.contentProtection = i.contentProtection),
            r
        }
          , h = function(e) {
            var t;
            if (!e.length)
                return {};
            var i = e[0].attributes
              , n = i.sourceDuration
              , r = i.minimumUpdatePeriod
              , a = void 0 === r ? 0 : r
              , s = l(e.filter(function(e) {
                var t = e.attributes;
                return "video/mp4" === t.mimeType || "video" === t.contentType
            })).map(d)
              , o = l(e.filter(function(e) {
                var t = e.attributes;
                return "audio/mp4" === t.mimeType || "audio" === t.contentType
            }))
              , u = e.filter(function(e) {
                var t = e.attributes;
                return "text/vtt" === t.mimeType || "text" === t.contentType
            })
              , h = {
                allowCache: !0,
                discontinuityStarts: [],
                segments: [],
                endList: !0,
                mediaGroups: (t = {
                    AUDIO: {},
                    VIDEO: {}
                },
                t["CLOSED-CAPTIONS"] = {},
                t.SUBTITLES = {},
                t),
                uri: "",
                duration: n,
                playlists: s,
                minimumUpdatePeriod: 1e3 * a
            };
            return o.length && (h.mediaGroups.AUDIO.audio = o.reduce(function(e, t) {
                var i = t.attributes.role && t.attributes.role.value || "main"
                  , n = t.attributes.lang || ""
                  , r = "main";
                return n && (r = t.attributes.lang + " (" + i + ")"),
                e[r] && e[r].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth ? e : (e[r] = {
                    language: n,
                    autoselect: !0,
                    default: "main" === i,
                    playlists: [c(t)],
                    uri: ""
                },
                e)
            }, {})),
            u.length && (h.mediaGroups.SUBTITLES.subs = function(e) {
                return e.reduce(function(e, t) {
                    var i, n, r, a, s = t.attributes.lang || "text";
                    return e[s] ? e : (e[s] = {
                        language: s,
                        default: !1,
                        autoselect: !1,
                        playlists: [(i = t,
                        r = i.attributes,
                        a = i.segments,
                        void 0 === a && (a = [{
                            uri: r.baseUrl,
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            duration: r.sourceDuration,
                            number: 0
                        }],
                        r.duration = r.sourceDuration),
                        {
                            attributes: (n = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth
                            },
                            n["PROGRAM-ID"] = 1,
                            n),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            targetDuration: r.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        })],
                        uri: ""
                    },
                    e)
                }, {})
            }(u)),
            h
        };
        "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
        var p = function(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }(function(e, t) {
            var i, n, r, a, s;
            i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
            n = /^([^\/?#]*)(.*)$/,
            r = /(?:\/|^)\.(?=\/)/g,
            a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
            s = {
                buildAbsoluteURL: function(e, t, i) {
                    if (i = i || {},
                    e = e.trim(),
                    !(t = t.trim())) {
                        if (!i.alwaysNormalize)
                            return e;
                        var r = s.parseURL(e);
                        if (!r)
                            throw new Error("Error trying to parse base URL.");
                        return r.path = s.normalizePath(r.path),
                        s.buildURLFromParts(r)
                    }
                    var a = s.parseURL(t);
                    if (!a)
                        throw new Error("Error trying to parse relative URL.");
                    if (a.scheme)
                        return i.alwaysNormalize ? (a.path = s.normalizePath(a.path),
                        s.buildURLFromParts(a)) : t;
                    var o = s.parseURL(e);
                    if (!o)
                        throw new Error("Error trying to parse base URL.");
                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                        var u = n.exec(o.path);
                        o.netLoc = u[1],
                        o.path = u[2]
                    }
                    o.netLoc && !o.path && (o.path = "/");
                    var l = {
                        scheme: o.scheme,
                        netLoc: a.netLoc,
                        path: null,
                        params: a.params,
                        query: a.query,
                        fragment: a.fragment
                    };
                    if (!a.netLoc && (l.netLoc = o.netLoc,
                    "/" !== a.path[0]))
                        if (a.path) {
                            var c = o.path
                              , d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                            l.path = s.normalizePath(d)
                        } else
                            l.path = o.path,
                            a.params || (l.params = o.params,
                            a.query || (l.query = o.query));
                    return null === l.path && (l.path = i.alwaysNormalize ? s.normalizePath(a.path) : a.path),
                    s.buildURLFromParts(l)
                },
                parseURL: function(e) {
                    var t = i.exec(e);
                    return t ? {
                        scheme: t[1] || "",
                        netLoc: t[2] || "",
                        path: t[3] || "",
                        params: t[4] || "",
                        query: t[5] || "",
                        fragment: t[6] || ""
                    } : null
                },
                normalizePath: function(e) {
                    for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(a, "")).length; )
                        ;
                    return e.split("").reverse().join("")
                },
                buildURLFromParts: function(e) {
                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                }
            },
            e.exports = s
        })
          , f = function(e, t) {
            return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = p.buildAbsoluteURL(r.a.location.href, e)),
            p.buildAbsoluteURL(e, t))
        }
          , m = function(e) {
            var t = e.baseUrl
              , i = void 0 === t ? "" : t
              , n = e.source
              , r = void 0 === n ? "" : n
              , a = e.range
              , s = void 0 === a ? "" : a
              , o = {
                uri: r,
                resolvedUri: f(i || "", r)
            };
            if (s) {
                var u = s.split("-")
                  , l = parseInt(u[0], 10)
                  , c = parseInt(u[1], 10);
                o.byterange = {
                    length: c - l,
                    offset: l
                }
            }
            return o
        }
          , g = function(e, t, i) {
            var n = e.NOW
              , r = e.clientOffset
              , a = e.availabilityStartTime
              , s = e.timescale
              , o = void 0 === s ? 1 : s
              , u = e.start
              , l = void 0 === u ? 0 : u
              , c = e.minimumUpdatePeriod
              , d = (n + r) / 1e3 + (void 0 === c ? 0 : c) - (a + l);
            return Math.ceil((d * o - t) / i)
        }
          , y = function(e, t) {
            for (var i = e.type, n = void 0 === i ? "static" : i, r = e.minimumUpdatePeriod, a = void 0 === r ? 0 : r, s = e.media, o = void 0 === s ? "" : s, u = e.sourceDuration, l = e.timescale, c = void 0 === l ? 1 : l, d = e.startNumber, h = void 0 === d ? 1 : d, p = e.periodIndex, f = [], m = -1, y = 0; y < t.length; y++) {
                var v = t[y]
                  , _ = v.d
                  , b = v.r || 0
                  , T = v.t || 0;
                m < 0 && (m = T),
                T && T > m && (m = T);
                var S = void 0;
                if (b < 0) {
                    var k = y + 1;
                    S = k === t.length ? "dynamic" === n && a > 0 && o.indexOf("$Number$") > 0 ? g(e, m, _) : (u * c - m) / _ : (t[k].t - m) / _
                } else
                    S = b + 1;
                for (var w = h + f.length + S, C = h + f.length; C < w; )
                    f.push({
                        number: C,
                        duration: _ / c,
                        time: m,
                        timeline: p
                    }),
                    m += _,
                    C++
            }
            return f
        }
          , v = {
            static: function(e) {
                var t = e.duration
                  , i = e.timescale
                  , n = void 0 === i ? 1 : i
                  , r = e.sourceDuration;
                return {
                    start: 0,
                    end: Math.ceil(r / (t / n))
                }
            },
            dynamic: function(e) {
                var t = e.NOW
                  , i = e.clientOffset
                  , n = e.availabilityStartTime
                  , r = e.timescale
                  , a = void 0 === r ? 1 : r
                  , s = e.duration
                  , o = e.start
                  , u = void 0 === o ? 0 : o
                  , l = e.minimumUpdatePeriod
                  , c = void 0 === l ? 0 : l
                  , d = e.timeShiftBufferDepth
                  , h = void 0 === d ? 1 / 0 : d
                  , p = (t + i) / 1e3
                  , f = n + u
                  , m = p + c - f
                  , g = Math.ceil(m * a / s)
                  , y = Math.floor((p - f - h) * a / s)
                  , v = Math.floor((p - f) * a / s);
                return {
                    start: Math.max(0, y),
                    end: Math.min(g, v)
                }
            }
        }
          , _ = function(e) {
            var t = e.type
              , i = void 0 === t ? "static" : t
              , n = e.duration
              , r = e.timescale
              , a = void 0 === r ? 1 : r
              , s = e.sourceDuration
              , o = v[i](e)
              , u = function(e, t) {
                for (var i = [], n = e; n < t; n++)
                    i.push(n);
                return i
            }(o.start, o.end).map(function(e) {
                return function(t, i) {
                    var n = e.duration
                      , r = e.timescale
                      , a = void 0 === r ? 1 : r
                      , s = e.periodIndex
                      , o = e.startNumber;
                    return {
                        number: (void 0 === o ? 1 : o) + t,
                        duration: n / a,
                        timeline: s,
                        time: i * n
                    }
                }
            }(e));
            if ("static" === i) {
                var l = u.length - 1;
                u[l].duration = s - n / a * l
            }
            return u
        }
          , b = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g
          , T = function(e, t) {
            return e.replace(b, function(e) {
                return function(t, i, n, r) {
                    if ("$$" === t)
                        return "$";
                    if (void 0 === e[i])
                        return t;
                    var a = "" + e[i];
                    return "RepresentationID" === i ? a : (r = n ? parseInt(r, 10) : 1,
                    a.length >= r ? a : "" + new Array(r - a.length + 1).join("0") + a)
                }
            }(t))
        }
          , S = function(e, t) {
            var i = {
                RepresentationID: e.id,
                Bandwidth: e.bandwidth || 0
            }
              , n = e.initialization
              , r = void 0 === n ? {
                sourceURL: "",
                range: ""
            } : n
              , a = m({
                baseUrl: e.baseUrl,
                source: T(r.sourceURL, i),
                range: r.range
            });
            return function(e, t) {
                return e.duration || t ? e.duration ? _(e) : y(e, t) : [{
                    number: e.startNumber || 1,
                    duration: e.sourceDuration,
                    time: 0,
                    timeline: e.periodIndex
                }]
            }(e, t).map(function(t) {
                i.Number = t.number,
                i.Time = t.time;
                var n = T(e.media || "", i);
                return {
                    uri: n,
                    timeline: t.timeline,
                    duration: t.duration,
                    resolvedUri: f(e.baseUrl || "", n),
                    map: a,
                    number: t.number
                }
            })
        }
          , k = "INVALID_NUMBER_OF_PERIOD"
          , w = "DASH_EMPTY_MANIFEST"
          , C = "DASH_INVALID_XML"
          , E = "NO_BASE_URL"
          , A = "SEGMENT_TIME_UNSPECIFIED"
          , P = "UNSUPPORTED_UTC_TIMING_SCHEME"
          , L = function(e, t) {
            var i = e.duration
              , n = e.segmentUrls
              , r = void 0 === n ? [] : n;
            if (!i && !t || i && t)
                throw new Error(A);
            var a, s = r.map(function(t) {
                return function(e, t) {
                    var i = e.baseUrl
                      , n = e.initialization
                      , r = void 0 === n ? {} : n
                      , a = m({
                        baseUrl: i,
                        source: r.sourceURL,
                        range: r.range
                    })
                      , s = m({
                        baseUrl: i,
                        source: t.media,
                        range: t.mediaRange
                    });
                    return s.map = a,
                    s
                }(e, t)
            });
            return i && (a = _(e)),
            t && (a = y(e, t)),
            a.map(function(e, t) {
                if (s[t]) {
                    var i = s[t];
                    return i.timeline = e.timeline,
                    i.duration = e.duration,
                    i.number = e.number,
                    i
                }
            }).filter(function(e) {
                return e
            })
        }
          , O = function(e) {
            var t = e.baseUrl
              , i = e.initialization
              , n = void 0 === i ? {} : i
              , r = e.sourceDuration
              , a = e.timescale
              , s = void 0 === a ? 1 : a
              , o = e.indexRange
              , u = void 0 === o ? "" : o
              , l = e.duration;
            if (!t)
                throw new Error(E);
            var c = m({
                baseUrl: t,
                source: n.sourceURL,
                range: n.range
            })
              , d = m({
                baseUrl: t,
                source: t,
                range: u
            });
            if (d.map = c,
            l) {
                var h = _(e);
                h.length && (d.duration = h[0].duration,
                d.timeline = h[0].timeline)
            } else
                r && (d.duration = r / s,
                d.timeline = 0);
            return d.number = 0,
            [d]
        }
          , I = function(e) {
            var t, i, n = e.attributes, r = e.segmentInfo;
            if (r.template ? (i = S,
            t = s(n, r.template)) : r.base ? (i = O,
            t = s(n, r.base)) : r.list && (i = L,
            t = s(n, r.list)),
            !i)
                return {
                    attributes: n
                };
            var a = i(t, r.timeline);
            if (t.duration) {
                var o = t
                  , u = o.duration
                  , l = o.timescale
                  , c = void 0 === l ? 1 : l;
                t.duration = u / c
            } else
                a.length ? t.duration = a.reduce(function(e, t) {
                    return Math.max(e, Math.ceil(t.duration))
                }, 0) : t.duration = 0;
            return {
                attributes: t,
                segments: a
            }
        }
          , x = function(e, t) {
            return u(e.childNodes).filter(function(e) {
                return e.tagName === t
            })
        }
          , D = function(e) {
            return e.textContent.trim()
        }
          , U = function(e) {
            var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
            if (!t)
                return 0;
            var i = t.slice(1)
              , n = i[0]
              , r = i[1]
              , a = i[2]
              , s = i[3]
              , o = i[4]
              , u = i[5];
            return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
        }
          , R = {
            mediaPresentationDuration: function(e) {
                return U(e)
            },
            availabilityStartTime: function(e) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t = e) && (t += "Z"),
                Date.parse(t) / 1e3;
                var t
            },
            minimumUpdatePeriod: function(e) {
                return U(e)
            },
            timeShiftBufferDepth: function(e) {
                return U(e)
            },
            start: function(e) {
                return U(e)
            },
            width: function(e) {
                return parseInt(e, 10)
            },
            height: function(e) {
                return parseInt(e, 10)
            },
            bandwidth: function(e) {
                return parseInt(e, 10)
            },
            startNumber: function(e) {
                return parseInt(e, 10)
            },
            timescale: function(e) {
                return parseInt(e, 10)
            },
            duration: function(e) {
                var t = parseInt(e, 10);
                return isNaN(t) ? U(e) : t
            },
            d: function(e) {
                return parseInt(e, 10)
            },
            t: function(e) {
                return parseInt(e, 10)
            },
            r: function(e) {
                return parseInt(e, 10)
            },
            DEFAULT: function(e) {
                return e
            }
        }
          , M = function(e) {
            return e && e.attributes ? u(e.attributes).reduce(function(e, t) {
                var i = R[t.name] || R.DEFAULT;
                return e[t.name] = i(t.value),
                e
            }, {}) : {}
        };
        var B = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        }
          , N = function(e, t) {
            return t.length ? o(e.map(function(e) {
                return t.map(function(t) {
                    return f(e, D(t))
                })
            })) : e
        }
          , j = function(e) {
            var t = x(e, "SegmentTemplate")[0]
              , i = x(e, "SegmentList")[0]
              , n = i && x(i, "SegmentURL").map(function(e) {
                return s({
                    tag: "SegmentURL"
                }, M(e))
            })
              , r = x(e, "SegmentBase")[0]
              , a = i || t
              , o = a && x(a, "SegmentTimeline")[0]
              , u = i || r || t
              , l = u && x(u, "Initialization")[0]
              , c = t && M(t);
            c && l ? c.initialization = l && M(l) : c && c.initialization && (c.initialization = {
                sourceURL: c.initialization
            });
            var d = {
                template: c,
                timeline: o && x(o, "S").map(function(e) {
                    return M(e)
                }),
                list: i && s(M(i), {
                    segmentUrls: n,
                    initialization: M(l)
                }),
                base: r && s(M(r), {
                    initialization: M(l)
                })
            };
            return Object.keys(d).forEach(function(e) {
                d[e] || delete d[e]
            }),
            d
        }
          , F = function(e) {
            return e.reduce(function(e, t) {
                var i = M(t)
                  , n = B[i.schemeIdUri];
                if (n) {
                    e[n] = {
                        attributes: i
                    };
                    var a = x(t, "cenc:pssh")[0];
                    if (a) {
                        var s = D(a)
                          , o = s && function(e) {
                            for (var t = r.a.atob(e), i = new Uint8Array(t.length), n = 0; n < t.length; n++)
                                i[n] = t.charCodeAt(n);
                            return i
                        }(s);
                        e[n].pssh = o
                    }
                }
                return e
            }, {})
        }
          , V = function(e, t, i) {
            return function(n) {
                var r = M(n)
                  , a = N(t, x(n, "BaseURL"))
                  , u = x(n, "Role")[0]
                  , l = {
                    role: M(u)
                }
                  , c = s(e, r, l)
                  , d = F(x(n, "ContentProtection"));
                Object.keys(d).length && (c = s(c, {
                    contentProtection: d
                }));
                var h = j(n)
                  , p = x(n, "Representation")
                  , f = s(i, h);
                return o(p.map(function(e, t, i) {
                    return function(n) {
                        var r = x(n, "BaseURL")
                          , a = N(t, r)
                          , o = s(e, M(n))
                          , u = j(n);
                        return a.map(function(e) {
                            return {
                                segmentInfo: s(i, u),
                                attributes: s(o, {
                                    baseUrl: e
                                })
                            }
                        })
                    }
                }(c, a, f)))
            }
        }
          , H = function(e, t) {
            void 0 === t && (t = {});
            var i = t
              , n = i.manifestUri
              , a = void 0 === n ? "" : n
              , u = i.NOW
              , l = void 0 === u ? Date.now() : u
              , c = i.clientOffset
              , d = void 0 === c ? 0 : c
              , h = x(e, "Period");
            if (!h.length)
                throw new Error(k);
            var p = M(e)
              , f = N([a], x(e, "BaseURL"));
            return p.sourceDuration = p.mediaPresentationDuration || 0,
            p.NOW = l,
            p.clientOffset = d,
            o(h.map(function(e, t) {
                return function(i, n) {
                    var a = N(t, x(i, "BaseURL"))
                      , u = M(i)
                      , l = parseInt(u.id, 10)
                      , c = r.a.isNaN(l) ? n : l
                      , d = s(e, {
                        periodIndex: c
                    })
                      , h = x(i, "AdaptationSet")
                      , p = j(i);
                    return o(h.map(V(d, a, p)))
                }
            }(p, f)))
        }
          , q = function(e) {
            if ("" === e)
                throw new Error(w);
            var t = (new r.a.DOMParser).parseFromString(e, "application/xml")
              , i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null;
            if (!i || i && i.getElementsByTagName("parsererror").length > 0)
                throw new Error(C);
            return i
        }
          , z = function(e, t) {
            return h(H(q(e), t).map(I))
        }
          , W = function(e) {
            return function(e) {
                var t = x(e, "UTCTiming")[0];
                if (!t)
                    return null;
                var i = M(t);
                switch (i.schemeIdUri) {
                case "urn:mpeg:dash:utc:http-head:2014":
                case "urn:mpeg:dash:utc:http-head:2012":
                    i.method = "HEAD";
                    break;
                case "urn:mpeg:dash:utc:http-xsdate:2014":
                case "urn:mpeg:dash:utc:http-iso:2014":
                case "urn:mpeg:dash:utc:http-xsdate:2012":
                case "urn:mpeg:dash:utc:http-iso:2012":
                    i.method = "GET";
                    break;
                case "urn:mpeg:dash:utc:direct:2014":
                case "urn:mpeg:dash:utc:direct:2012":
                    i.method = "DIRECT",
                    i.value = Date.parse(i.value);
                    break;
                case "urn:mpeg:dash:utc:http-ntp:2014":
                case "urn:mpeg:dash:utc:ntp:2014":
                case "urn:mpeg:dash:utc:sntp:2014":
                default:
                    throw new Error(P)
                }
                return i
            }(q(e))
        }
    }
    ).call(this, i(5))
}
, function(e, t, i) {
    "use strict";
    var n = i(39)
      , r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
      , a = Object.prototype.toString
      , s = Array.prototype.concat
      , o = Object.defineProperty
      , u = o && function() {
        var e = {};
        try {
            for (var t in o(e, "x", {
                enumerable: !1,
                value: e
            }),
            e)
                return !1;
            return e.x === e
        } catch (e) {
            return !1
        }
    }()
      , l = function(e, t, i, n) {
        var r;
        t in e && ("function" != typeof (r = n) || "[object Function]" !== a.call(r) || !n()) || (u ? o(e, t, {
            configurable: !0,
            enumerable: !1,
            value: i,
            writable: !0
        }) : e[t] = i)
    }
      , c = function(e, t) {
        var i = arguments.length > 2 ? arguments[2] : {}
          , a = n(t);
        r && (a = s.call(a, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < a.length; o += 1)
            l(e, a[o], t[a[o]], i[a[o]])
    };
    c.supportsDescriptors = !!u,
    e.exports = c
}
, function(e, t, i) {
    "use strict";
    var n = Object.prototype.toString;
    e.exports = function(e) {
        var t = n.call(e)
          , i = "[object Arguments]" === t;
        return i || (i = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)),
        i
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(8)
      , r = i(41)
      , a = n.call(Function.call, String.prototype.replace)
      , s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
      , o = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    e.exports = function() {
        var e = r.ToString(r.CheckObjectCoercible(this));
        return a(a(e, s, ""), o, "")
    }
}
, function(e, t, i) {
    "use strict";
    var n = Object.getOwnPropertyDescriptor ? function() {
        return Object.getOwnPropertyDescriptor(arguments, "callee").get
    }() : function() {
        throw new TypeError
    }
      , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      , a = Object.getPrototypeOf || function(e) {
        return e.__proto__
    }
      , s = void 0
      , o = "undefined" == typeof Uint8Array ? void 0 : a(Uint8Array)
      , u = {
        "$ %Array%": Array,
        "$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
        "$ %ArrayIteratorPrototype%": r ? a([][Symbol.iterator]()) : void 0,
        "$ %ArrayPrototype%": Array.prototype,
        "$ %ArrayProto_entries%": Array.prototype.entries,
        "$ %ArrayProto_forEach%": Array.prototype.forEach,
        "$ %ArrayProto_keys%": Array.prototype.keys,
        "$ %ArrayProto_values%": Array.prototype.values,
        "$ %AsyncFromSyncIteratorPrototype%": void 0,
        "$ %AsyncFunction%": void 0,
        "$ %AsyncFunctionPrototype%": void 0,
        "$ %AsyncGenerator%": void 0,
        "$ %AsyncGeneratorFunction%": void 0,
        "$ %AsyncGeneratorPrototype%": void 0,
        "$ %AsyncIteratorPrototype%": s && r && Symbol.asyncIterator ? s[Symbol.asyncIterator]() : void 0,
        "$ %Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "$ %Boolean%": Boolean,
        "$ %BooleanPrototype%": Boolean.prototype,
        "$ %DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "$ %DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
        "$ %Date%": Date,
        "$ %DatePrototype%": Date.prototype,
        "$ %decodeURI%": decodeURI,
        "$ %decodeURIComponent%": decodeURIComponent,
        "$ %encodeURI%": encodeURI,
        "$ %encodeURIComponent%": encodeURIComponent,
        "$ %Error%": Error,
        "$ %ErrorPrototype%": Error.prototype,
        "$ %eval%": eval,
        "$ %EvalError%": EvalError,
        "$ %EvalErrorPrototype%": EvalError.prototype,
        "$ %Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
        "$ %Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
        "$ %Function%": Function,
        "$ %FunctionPrototype%": Function.prototype,
        "$ %Generator%": void 0,
        "$ %GeneratorFunction%": void 0,
        "$ %GeneratorPrototype%": void 0,
        "$ %Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
        "$ %Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
        "$ %Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
        "$ %isFinite%": isFinite,
        "$ %isNaN%": isNaN,
        "$ %IteratorPrototype%": r ? a(a([][Symbol.iterator]())) : void 0,
        "$ %JSON%": JSON,
        "$ %JSONParse%": JSON.parse,
        "$ %Map%": "undefined" == typeof Map ? void 0 : Map,
        "$ %MapIteratorPrototype%": "undefined" != typeof Map && r ? a((new Map)[Symbol.iterator]()) : void 0,
        "$ %MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
        "$ %Math%": Math,
        "$ %Number%": Number,
        "$ %NumberPrototype%": Number.prototype,
        "$ %Object%": Object,
        "$ %ObjectPrototype%": Object.prototype,
        "$ %ObjProto_toString%": Object.prototype.toString,
        "$ %ObjProto_valueOf%": Object.prototype.valueOf,
        "$ %parseFloat%": parseFloat,
        "$ %parseInt%": parseInt,
        "$ %Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "$ %PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
        "$ %PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
        "$ %Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
        "$ %Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
        "$ %Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
        "$ %Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "$ %RangeError%": RangeError,
        "$ %RangeErrorPrototype%": RangeError.prototype,
        "$ %ReferenceError%": ReferenceError,
        "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
        "$ %Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "$ %RegExp%": RegExp,
        "$ %RegExpPrototype%": RegExp.prototype,
        "$ %Set%": "undefined" == typeof Set ? void 0 : Set,
        "$ %SetIteratorPrototype%": "undefined" != typeof Set && r ? a((new Set)[Symbol.iterator]()) : void 0,
        "$ %SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
        "$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
        "$ %String%": String,
        "$ %StringIteratorPrototype%": r ? a(""[Symbol.iterator]()) : void 0,
        "$ %StringPrototype%": String.prototype,
        "$ %Symbol%": r ? Symbol : void 0,
        "$ %SymbolPrototype%": r ? Symbol.prototype : void 0,
        "$ %SyntaxError%": SyntaxError,
        "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
        "$ %ThrowTypeError%": n,
        "$ %TypedArray%": o,
        "$ %TypedArrayPrototype%": o ? o.prototype : void 0,
        "$ %TypeError%": TypeError,
        "$ %TypeErrorPrototype%": TypeError.prototype,
        "$ %Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
        "$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
        "$ %Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
        "$ %Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
        "$ %URIError%": URIError,
        "$ %URIErrorPrototype%": URIError.prototype,
        "$ %WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
        "$ %WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
        "$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
    };
    e.exports = function(e, t) {
        if (arguments.length > 1 && "boolean" != typeof t)
            throw new TypeError('"allowMissing" argument must be a boolean');
        var i = "$ " + e;
        if (!(i in u))
            throw new SyntaxError("intrinsic " + e + " does not exist!");
        if (void 0 === u[i] && !t)
            throw new TypeError("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return u[i]
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(8);
    e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
}
, function(e, t, i) {
    "use strict";
    var n = i(19);
    e.exports = function() {
        return String.prototype.trim && "â€‹" === "â€‹".trim() ? String.prototype.trim : n
    }
}
, function(e, t, i) {
    "use strict";
    var n, r, a, s, o, u, l, c, d, h, p, f, m, g, y, v, _, b, T, S, k, w, C, E, A, P, L, O, I, x, D, U, R, M, B, N, j, F, V, H, q, z = Math.pow(2, 32) - 1;
    !function() {
        var e;
        if (C = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            sdtp: [],
            smhd: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            styp: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: []
        },
        "undefined" != typeof Uint8Array) {
            for (e in C)
                C.hasOwnProperty(e) && (C[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
            E = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]),
            P = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]),
            A = new Uint8Array([0, 0, 0, 1]),
            L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
            O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
            I = {
                video: L,
                audio: O
            },
            U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
            D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            M = R,
            B = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            N = R,
            x = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }(),
    n = function(e) {
        var t, i, n = [], r = 0;
        for (t = 1; t < arguments.length; t++)
            n.push(arguments[t]);
        for (t = n.length; t--; )
            r += n[t].byteLength;
        for (i = new Uint8Array(r + 8),
        new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0, i.byteLength),
        i.set(e, 4),
        t = 0,
        r = 8; t < n.length; t++)
            i.set(n[t], r),
            r += n[t].byteLength;
        return i
    }
    ,
    r = function() {
        return n(C.dinf, n(C.dref, U))
    }
    ,
    a = function(e) {
        return n(C.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
    }
    ,
    s = function() {
        return n(C.ftyp, E, A, E, P)
    }
    ,
    v = function(e) {
        return n(C.hdlr, I[e])
    }
    ,
    o = function(e) {
        return n(C.mdat, e)
    }
    ,
    y = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
        return e.samplerate && (t[12] = e.samplerate >>> 24 & 255,
        t[13] = e.samplerate >>> 16 & 255,
        t[14] = e.samplerate >>> 8 & 255,
        t[15] = 255 & e.samplerate),
        n(C.mdhd, t)
    }
    ,
    g = function(e) {
        return n(C.mdia, y(e), v(e.type), l(e))
    }
    ,
    u = function(e) {
        return n(C.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
    }
    ,
    l = function(e) {
        return n(C.minf, "video" === e.type ? n(C.vmhd, x) : n(C.smhd, D), r(), b(e))
    }
    ,
    c = function(e, t) {
        for (var i = [], r = t.length; r--; )
            i[r] = S(t[r]);
        return n.apply(null, [C.moof, u(e)].concat(i))
    }
    ,
    d = function(e) {
        for (var t = e.length, i = []; t--; )
            i[t] = f(e[t]);
        return n.apply(null, [C.moov, p(4294967295)].concat(i).concat(h(e)))
    }
    ,
    h = function(e) {
        for (var t = e.length, i = []; t--; )
            i[t] = k(e[t]);
        return n.apply(null, [C.mvex].concat(i))
    }
    ,
    p = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
        return n(C.mvhd, t)
    }
    ,
    _ = function(e) {
        var t, i, r = e.samples || [], a = new Uint8Array(4 + r.length);
        for (i = 0; i < r.length; i++)
            t = r[i].flags,
            a[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
        return n(C.sdtp, a)
    }
    ,
    b = function(e) {
        return n(C.stbl, T(e), n(C.stts, N), n(C.stsc, M), n(C.stsz, B), n(C.stco, R))
    }
    ,
    T = function(e) {
        return n(C.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? j(e) : F(e))
    }
    ,
    j = function(e) {
        var t, i = e.sps || [], r = e.pps || [], a = [], s = [];
        for (t = 0; t < i.length; t++)
            a.push((65280 & i[t].byteLength) >>> 8),
            a.push(255 & i[t].byteLength),
            a = a.concat(Array.prototype.slice.call(i[t]));
        for (t = 0; t < r.length; t++)
            s.push((65280 & r[t].byteLength) >>> 8),
            s.push(255 & r[t].byteLength),
            s = s.concat(Array.prototype.slice.call(r[t]));
        return n(C.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n(C.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([i.length]).concat(a).concat([r.length]).concat(s))), n(C.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
    }
    ,
    F = function(e) {
        return n(C.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), a(e))
    }
    ,
    m = function(e) {
        var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
        return n(C.tkhd, t)
    }
    ,
    S = function(e) {
        var t, i, r, a, s, o;
        return t = n(C.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
        s = Math.floor(e.baseMediaDecodeTime / (z + 1)),
        o = Math.floor(e.baseMediaDecodeTime % (z + 1)),
        i = n(C.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])),
        92,
        "audio" === e.type ? (r = w(e, 92),
        n(C.traf, t, i, r)) : (a = _(e),
        r = w(e, a.length + 92),
        n(C.traf, t, i, r, a))
    }
    ,
    f = function(e) {
        return e.duration = e.duration || 4294967295,
        n(C.trak, m(e), g(e))
    }
    ,
    k = function(e) {
        var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        return "video" !== e.type && (t[t.length - 1] = 0),
        n(C.trex, t)
    }
    ,
    q = function(e, t) {
        var i = 0
          , n = 0
          , r = 0
          , a = 0;
        return e.length && (void 0 !== e[0].duration && (i = 1),
        void 0 !== e[0].size && (n = 2),
        void 0 !== e[0].flags && (r = 4),
        void 0 !== e[0].compositionTimeOffset && (a = 8)),
        [0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
    }
    ,
    H = function(e, t) {
        var i, r, a, s;
        for (t += 20 + 16 * (r = e.samples || []).length,
        i = q(r, t),
        s = 0; s < r.length; s++)
            a = r[s],
            i = i.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size, a.flags.isLeading << 2 | a.flags.dependsOn, a.flags.isDependedOn << 6 | a.flags.hasRedundancy << 4 | a.flags.paddingValue << 1 | a.flags.isNonSyncSample, 61440 & a.flags.degradationPriority, 15 & a.flags.degradationPriority, (4278190080 & a.compositionTimeOffset) >>> 24, (16711680 & a.compositionTimeOffset) >>> 16, (65280 & a.compositionTimeOffset) >>> 8, 255 & a.compositionTimeOffset]);
        return n(C.trun, new Uint8Array(i))
    }
    ,
    V = function(e, t) {
        var i, r, a, s;
        for (t += 20 + 8 * (r = e.samples || []).length,
        i = q(r, t),
        s = 0; s < r.length; s++)
            a = r[s],
            i = i.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size]);
        return n(C.trun, new Uint8Array(i))
    }
    ,
    w = function(e, t) {
        return "audio" === e.type ? V(e, t) : H(e, t)
    }
    ,
    e.exports = {
        ftyp: s,
        mdat: o,
        moof: c,
        moov: d,
        initSegment: function(e) {
            var t, i = s(), n = d(e);
            return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i),
            t.set(n, i.byteLength),
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(3)
      , r = i(25)
      , a = function() {
        a.prototype.init.call(this),
        this.captionPackets_ = [],
        this.ccStreams_ = [new c(0,0), new c(0,1), new c(1,0), new c(1,1)],
        this.reset(),
        this.ccStreams_.forEach(function(e) {
            e.on("data", this.trigger.bind(this, "data")),
            e.on("done", this.trigger.bind(this, "done"))
        }, this)
    };
    a.prototype = new n,
    a.prototype.push = function(e) {
        var t, i, n;
        if ("sei_rbsp" === e.nalUnitType && (t = r.parseSei(e.escapedRBSP)).payloadType === r.USER_DATA_REGISTERED_ITU_T_T35 && (i = r.parseUserData(t)))
            if (e.dts < this.latestDts_)
                this.ignoreNextEqualDts_ = !0;
            else {
                if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_)
                    return this.numSameDts_--,
                    void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                n = r.parseCaptionPackets(e.pts, i),
                this.captionPackets_ = this.captionPackets_.concat(n),
                this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
                this.numSameDts_++,
                this.latestDts_ = e.dts
            }
    }
    ,
    a.prototype.flush = function() {
        this.captionPackets_.length ? (this.captionPackets_.forEach(function(e, t) {
            e.presortIndex = t
        }),
        this.captionPackets_.sort(function(e, t) {
            return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
        }),
        this.captionPackets_.forEach(function(e) {
            e.type < 2 && this.dispatchCea608Packet(e)
        }, this),
        this.captionPackets_.length = 0,
        this.ccStreams_.forEach(function(e) {
            e.flush()
        }, this)) : this.ccStreams_.forEach(function(e) {
            e.flush()
        }, this)
    }
    ,
    a.prototype.reset = function() {
        this.latestDts_ = null,
        this.ignoreNextEqualDts_ = !1,
        this.numSameDts_ = 0,
        this.activeCea608Channel_ = [null, null],
        this.ccStreams_.forEach(function(e) {
            e.reset()
        })
    }
    ,
    a.prototype.dispatchCea608Packet = function(e) {
        this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
        null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
    }
    ,
    a.prototype.setsChannel1Active = function(e) {
        return 4096 == (30720 & e.ccData)
    }
    ,
    a.prototype.setsChannel2Active = function(e) {
        return 6144 == (30720 & e.ccData)
    }
    ;
    var s = {
        42: 225,
        92: 233,
        94: 237,
        95: 243,
        96: 250,
        123: 231,
        124: 247,
        125: 209,
        126: 241,
        127: 9608,
        304: 174,
        305: 176,
        306: 189,
        307: 191,
        308: 8482,
        309: 162,
        310: 163,
        311: 9834,
        312: 224,
        313: 160,
        314: 232,
        315: 226,
        316: 234,
        317: 238,
        318: 244,
        319: 251,
        544: 193,
        545: 201,
        546: 211,
        547: 218,
        548: 220,
        549: 252,
        550: 8216,
        551: 161,
        552: 42,
        553: 39,
        554: 8212,
        555: 169,
        556: 8480,
        557: 8226,
        558: 8220,
        559: 8221,
        560: 192,
        561: 194,
        562: 199,
        563: 200,
        564: 202,
        565: 203,
        566: 235,
        567: 206,
        568: 207,
        569: 239,
        570: 212,
        571: 217,
        572: 249,
        573: 219,
        574: 171,
        575: 187,
        800: 195,
        801: 227,
        802: 205,
        803: 204,
        804: 236,
        805: 210,
        806: 242,
        807: 213,
        808: 245,
        809: 123,
        810: 125,
        811: 92,
        812: 94,
        813: 95,
        814: 124,
        815: 126,
        816: 196,
        817: 228,
        818: 214,
        819: 246,
        820: 223,
        821: 165,
        822: 164,
        823: 9474,
        824: 197,
        825: 229,
        826: 216,
        827: 248,
        828: 9484,
        829: 9488,
        830: 9492,
        831: 9496
    }
      , o = function(e) {
        return null === e ? "" : (e = s[e] || e,
        String.fromCharCode(e))
    }
      , u = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
      , l = function() {
        for (var e = [], t = 15; t--; )
            e.push("");
        return e
    }
      , c = function(e, t) {
        c.prototype.init.call(this),
        this.field_ = e || 0,
        this.dataChannel_ = t || 0,
        this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
        this.setConstants(),
        this.reset(),
        this.push = function(e) {
            var t, i, n, r, a;
            if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null),
                n = t >>> 8,
                r = 255 & t,
                t !== this.PADDING_)
                    if (t === this.RESUME_CAPTION_LOADING_)
                        this.mode_ = "popOn";
                    else if (t === this.END_OF_CAPTION_)
                        this.mode_ = "popOn",
                        this.clearFormatting(e.pts),
                        this.flushDisplayed(e.pts),
                        i = this.displayed_,
                        this.displayed_ = this.nonDisplayed_,
                        this.nonDisplayed_ = i,
                        this.startPts_ = e.pts;
                    else if (t === this.ROLL_UP_2_ROWS_)
                        this.rollUpRows_ = 2,
                        this.setRollUp(e.pts);
                    else if (t === this.ROLL_UP_3_ROWS_)
                        this.rollUpRows_ = 3,
                        this.setRollUp(e.pts);
                    else if (t === this.ROLL_UP_4_ROWS_)
                        this.rollUpRows_ = 4,
                        this.setRollUp(e.pts);
                    else if (t === this.CARRIAGE_RETURN_)
                        this.clearFormatting(e.pts),
                        this.flushDisplayed(e.pts),
                        this.shiftRowsUp_(),
                        this.startPts_ = e.pts;
                    else if (t === this.BACKSPACE_)
                        "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                    else if (t === this.ERASE_DISPLAYED_MEMORY_)
                        this.flushDisplayed(e.pts),
                        this.displayed_ = l();
                    else if (t === this.ERASE_NON_DISPLAYED_MEMORY_)
                        this.nonDisplayed_ = l();
                    else if (t === this.RESUME_DIRECT_CAPTIONING_)
                        "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts),
                        this.displayed_ = l()),
                        this.mode_ = "paintOn",
                        this.startPts_ = e.pts;
                    else if (this.isSpecialCharacter(n, r))
                        a = o((n = (3 & n) << 8) | r),
                        this[this.mode_](e.pts, a),
                        this.column_++;
                    else if (this.isExtCharacter(n, r))
                        "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
                        a = o((n = (3 & n) << 8) | r),
                        this[this.mode_](e.pts, a),
                        this.column_++;
                    else if (this.isMidRowCode(n, r))
                        this.clearFormatting(e.pts),
                        this[this.mode_](e.pts, " "),
                        this.column_++,
                        14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
                        1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                    else if (this.isOffsetControlCode(n, r))
                        this.column_ += 3 & r;
                    else if (this.isPAC(n, r)) {
                        var s = u.indexOf(7968 & t);
                        "rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1),
                        this.setRollUp(e.pts, s)),
                        s !== this.row_ && (this.clearFormatting(e.pts),
                        this.row_ = s),
                        1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
                        16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                        this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                    } else
                        this.isNormalChar(n) && (0 === r && (r = null),
                        a = o(n),
                        a += o(r),
                        this[this.mode_](e.pts, a),
                        this.column_ += a.length)
            } else
                this.lastControlCode_ = null
        }
    };
    c.prototype = new n,
    c.prototype.flushDisplayed = function(e) {
        var t = this.displayed_.map(function(e) {
            try {
                return e.trim()
            } catch (e) {
                return console.error("Skipping malformed caption."),
                ""
            }
        }).join("\n").replace(/^\n+|\n+$/g, "");
        t.length && this.trigger("data", {
            startPts: this.startPts_,
            endPts: e,
            text: t,
            stream: this.name_
        })
    }
    ,
    c.prototype.reset = function() {
        this.mode_ = "popOn",
        this.topRow_ = 0,
        this.startPts_ = 0,
        this.displayed_ = l(),
        this.nonDisplayed_ = l(),
        this.lastControlCode_ = null,
        this.column_ = 0,
        this.row_ = 14,
        this.rollUpRows_ = 2,
        this.formatting_ = []
    }
    ,
    c.prototype.setConstants = function() {
        0 === this.dataChannel_ ? (this.BASE_ = 16,
        this.EXT_ = 17,
        this.CONTROL_ = (20 | this.field_) << 8,
        this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24,
        this.EXT_ = 25,
        this.CONTROL_ = (28 | this.field_) << 8,
        this.OFFSET_ = 31),
        this.PADDING_ = 0,
        this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
        this.END_OF_CAPTION_ = 47 | this.CONTROL_,
        this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
        this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
        this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
        this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
        this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
        this.BACKSPACE_ = 33 | this.CONTROL_,
        this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
        this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
    }
    ,
    c.prototype.isSpecialCharacter = function(e, t) {
        return e === this.EXT_ && t >= 48 && t <= 63
    }
    ,
    c.prototype.isExtCharacter = function(e, t) {
        return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
    }
    ,
    c.prototype.isMidRowCode = function(e, t) {
        return e === this.EXT_ && t >= 32 && t <= 47
    }
    ,
    c.prototype.isOffsetControlCode = function(e, t) {
        return e === this.OFFSET_ && t >= 33 && t <= 35
    }
    ,
    c.prototype.isPAC = function(e, t) {
        return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
    }
    ,
    c.prototype.isColorPAC = function(e) {
        return e >= 64 && e <= 79 || e >= 96 && e <= 127
    }
    ,
    c.prototype.isNormalChar = function(e) {
        return e >= 32 && e <= 127
    }
    ,
    c.prototype.setRollUp = function(e, t) {
        if ("rollUp" !== this.mode_ && (this.row_ = 14,
        this.mode_ = "rollUp",
        this.flushDisplayed(e),
        this.nonDisplayed_ = l(),
        this.displayed_ = l()),
        void 0 !== t && t !== this.row_)
            for (var i = 0; i < this.rollUpRows_; i++)
                this.displayed_[t - i] = this.displayed_[this.row_ - i],
                this.displayed_[this.row_ - i] = "";
        void 0 === t && (t = this.row_),
        this.topRow_ = t - this.rollUpRows_ + 1
    }
    ,
    c.prototype.addFormatting = function(e, t) {
        this.formatting_ = this.formatting_.concat(t);
        var i = t.reduce(function(e, t) {
            return e + "<" + t + ">"
        }, "");
        this[this.mode_](e, i)
    }
    ,
    c.prototype.clearFormatting = function(e) {
        if (this.formatting_.length) {
            var t = this.formatting_.reverse().reduce(function(e, t) {
                return e + "</" + t + ">"
            }, "");
            this.formatting_ = [],
            this[this.mode_](e, t)
        }
    }
    ,
    c.prototype.popOn = function(e, t) {
        var i = this.nonDisplayed_[this.row_];
        i += t,
        this.nonDisplayed_[this.row_] = i
    }
    ,
    c.prototype.rollUp = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t,
        this.displayed_[this.row_] = i
    }
    ,
    c.prototype.shiftRowsUp_ = function() {
        var e;
        for (e = 0; e < this.topRow_; e++)
            this.displayed_[e] = "";
        for (e = this.row_ + 1; e < 15; e++)
            this.displayed_[e] = "";
        for (e = this.topRow_; e < this.row_; e++)
            this.displayed_[e] = this.displayed_[e + 1];
        this.displayed_[this.row_] = ""
    }
    ,
    c.prototype.paintOn = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t,
        this.displayed_[this.row_] = i
    }
    ,
    e.exports = {
        CaptionStream: a,
        Cea608Stream: c
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        parseSei: function(e) {
            for (var t = 0, i = {
                payloadType: -1,
                payloadSize: 0
            }, n = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
                for (; 255 === e[t]; )
                    n += 255,
                    t++;
                for (n += e[t++]; 255 === e[t]; )
                    r += 255,
                    t++;
                if (r += e[t++],
                !i.payload && 4 === n) {
                    i.payloadType = n,
                    i.payloadSize = r,
                    i.payload = e.subarray(t, t + r);
                    break
                }
                t += r,
                n = 0,
                r = 0
            }
            return i
        },
        parseUserData: function(e) {
            return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
        },
        parseCaptionPackets: function(e, t) {
            var i, n, r, a, s = [];
            if (!(64 & t[0]))
                return s;
            for (n = 31 & t[0],
            i = 0; i < n; i++)
                a = {
                    type: 3 & t[2 + (r = 3 * i)],
                    pts: e
                },
                4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4],
                s.push(a));
            return s
        },
        discardEmulationPreventionBytes: function(e) {
            for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
                a += 2) : a++;
            if (0 === r.length)
                return e;
            t = n - r.length,
            i = new Uint8Array(t);
            var s = 0;
            for (a = 0; a < t; s++,
            a++)
                s === r[0] && (s++,
                r.shift()),
                i[a] = e[s];
            return i
        },
        USER_DATA_REGISTERED_ITU_T_T35: 4
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(3)
      , r = function(e, t) {
        var i = 1;
        for (e > t && (i = -1); Math.abs(t - e) > 4294967296; )
            e += 8589934592 * i;
        return e
    }
      , a = function(e) {
        var t, i;
        a.prototype.init.call(this),
        this.type_ = e,
        this.push = function(e) {
            e.type === this.type_ && (void 0 === i && (i = e.dts),
            e.dts = r(e.dts, i),
            e.pts = r(e.pts, i),
            t = e.dts,
            this.trigger("data", e))
        }
        ,
        this.flush = function() {
            i = t,
            this.trigger("done")
        }
        ,
        this.discontinuity = function() {
            i = void 0,
            t = void 0
        }
    };
    a.prototype = new n,
    e.exports = {
        TimestampRolloverStream: a,
        handleRollover: r
    }
}
, , , function(e, t) {
    e.exports = function(e, t) {
        var i, n = null;
        try {
            i = JSON.parse(e, t)
        } catch (e) {
            n = e
        }
        return [n, i]
    }
}
, function(e, t, i) {
    e.exports = {
        generator: i(23),
        probe: i(4),
        Transmuxer: i(10).Transmuxer,
        AudioSegmentStream: i(10).AudioSegmentStream,
        VideoSegmentStream: i(10).VideoSegmentStream,
        CaptionParser: i(67)
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(6)
      , r = i(26).handleRollover
      , a = {};
    a.ts = i(69),
    a.aac = i(11);
    var s = function(e, t, i) {
        for (var n, r, s, o, u = 0, l = 188, c = !1; l <= e.byteLength; )
            if (71 !== e[u] || 71 !== e[l] && l !== e.byteLength)
                u++,
                l++;
            else {
                switch (n = e.subarray(u, l),
                a.ts.parseType(n, t.pid)) {
                case "pes":
                    r = a.ts.parsePesType(n, t.table),
                    s = a.ts.parsePayloadUnitStartIndicator(n),
                    "audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio",
                    i.audio.push(o),
                    c = !0)
                }
                if (c)
                    break;
                u += 188,
                l += 188
            }
        for (u = (l = e.byteLength) - 188,
        c = !1; u >= 0; )
            if (71 !== e[u] || 71 !== e[l] && l !== e.byteLength)
                u--,
                l--;
            else {
                switch (n = e.subarray(u, l),
                a.ts.parseType(n, t.pid)) {
                case "pes":
                    r = a.ts.parsePesType(n, t.table),
                    s = a.ts.parsePayloadUnitStartIndicator(n),
                    "audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio",
                    i.audio.push(o),
                    c = !0)
                }
                if (c)
                    break;
                u -= 188,
                l -= 188
            }
    }
      , o = function(e, t, i) {
        for (var n, r, s, o, u, l, c, d = 0, h = 188, p = !1, f = {
            data: [],
            size: 0
        }; h < e.byteLength; )
            if (71 !== e[d] || 71 !== e[h])
                d++,
                h++;
            else {
                switch (n = e.subarray(d, h),
                a.ts.parseType(n, t.pid)) {
                case "pes":
                    if (r = a.ts.parsePesType(n, t.table),
                    s = a.ts.parsePayloadUnitStartIndicator(n),
                    "video" === r && (s && !p && (o = a.ts.parsePesTime(n)) && (o.type = "video",
                    i.video.push(o),
                    p = !0),
                    !i.firstKeyFrame)) {
                        if (s && 0 !== f.size) {
                            for (u = new Uint8Array(f.size),
                            l = 0; f.data.length; )
                                c = f.data.shift(),
                                u.set(c, l),
                                l += c.byteLength;
                            a.ts.videoPacketContainsKeyFrame(u) && (i.firstKeyFrame = a.ts.parsePesTime(u),
                            i.firstKeyFrame.type = "video"),
                            f.size = 0
                        }
                        f.data.push(n),
                        f.size += n.byteLength
                    }
                }
                if (p && i.firstKeyFrame)
                    break;
                d += 188,
                h += 188
            }
        for (d = (h = e.byteLength) - 188,
        p = !1; d >= 0; )
            if (71 !== e[d] || 71 !== e[h])
                d--,
                h--;
            else {
                switch (n = e.subarray(d, h),
                a.ts.parseType(n, t.pid)) {
                case "pes":
                    r = a.ts.parsePesType(n, t.table),
                    s = a.ts.parsePayloadUnitStartIndicator(n),
                    "video" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "video",
                    i.video.push(o),
                    p = !0)
                }
                if (p)
                    break;
                d -= 188,
                h -= 188
            }
    }
      , u = function(e) {
        var t = {
            pid: null,
            table: null
        }
          , i = {};
        for (var r in function(e, t) {
            for (var i, n = 0, r = 188; r < e.byteLength; )
                if (71 !== e[n] || 71 !== e[r])
                    n++,
                    r++;
                else {
                    switch (i = e.subarray(n, r),
                    a.ts.parseType(i, t.pid)) {
                    case "pat":
                        t.pid || (t.pid = a.ts.parsePat(i));
                        break;
                    case "pmt":
                        t.table || (t.table = a.ts.parsePmt(i))
                    }
                    if (t.pid && t.table)
                        return;
                    n += 188,
                    r += 188
                }
        }(e, t),
        t.table) {
            if (t.table.hasOwnProperty(r))
                switch (t.table[r]) {
                case n.H264_STREAM_TYPE:
                    i.video = [],
                    o(e, t, i),
                    0 === i.video.length && delete i.video;
                    break;
                case n.ADTS_STREAM_TYPE:
                    i.audio = [],
                    s(e, t, i),
                    0 === i.audio.length && delete i.audio
                }
        }
        return i
    };
    e.exports = {
        inspect: function(e, t) {
            var i;
            return (i = a.aac.isLikelyAacData(e) ? function(e) {
                for (var t, i = !1, n = 0, r = null, s = null, o = 0, u = 0; e.length - u >= 3; ) {
                    switch (a.aac.parseType(e, u)) {
                    case "timed-metadata":
                        if (e.length - u < 10) {
                            i = !0;
                            break
                        }
                        if ((o = a.aac.parseId3TagSize(e, u)) > e.length) {
                            i = !0;
                            break
                        }
                        null === s && (t = e.subarray(u, u + o),
                        s = a.aac.parseAacTimestamp(t)),
                        u += o;
                        break;
                    case "audio":
                        if (e.length - u < 7) {
                            i = !0;
                            break
                        }
                        if ((o = a.aac.parseAdtsSize(e, u)) > e.length) {
                            i = !0;
                            break
                        }
                        null === r && (t = e.subarray(u, u + o),
                        r = a.aac.parseSampleRate(t)),
                        n++,
                        u += o;
                        break;
                    default:
                        u++
                    }
                    if (i)
                        return null
                }
                if (null === r || null === s)
                    return null;
                var l = 9e4 / r;
                return {
                    audio: [{
                        type: "audio",
                        dts: s,
                        pts: s
                    }, {
                        type: "audio",
                        dts: s + 1024 * n * l,
                        pts: s + 1024 * n * l
                    }]
                }
            }(e) : u(e)) && (i.audio || i.video) ? (function(e, t) {
                if (e.audio && e.audio.length) {
                    var i = t;
                    void 0 === i && (i = e.audio[0].dts),
                    e.audio.forEach(function(e) {
                        e.dts = r(e.dts, i),
                        e.pts = r(e.pts, i),
                        e.dtsTime = e.dts / 9e4,
                        e.ptsTime = e.pts / 9e4
                    })
                }
                if (e.video && e.video.length) {
                    var n = t;
                    if (void 0 === n && (n = e.video[0].dts),
                    e.video.forEach(function(e) {
                        e.dts = r(e.dts, n),
                        e.pts = r(e.pts, n),
                        e.dtsTime = e.dts / 9e4,
                        e.ptsTime = e.pts / 9e4
                    }),
                    e.firstKeyFrame) {
                        var a = e.firstKeyFrame;
                        a.dts = r(a.dts, n),
                        a.pts = r(a.pts, n),
                        a.dtsTime = a.dts / 9e4,
                        a.ptsTime = a.dts / 9e4
                    }
                }
            }(i, t),
            i) : null
        },
        parseAudioPes_: s
    }
}
, function(e, t, i) {
    i(33),
    e.exports = i(77)
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(12)
      , r = (i(70),
    Object(n.default)("play-video"))
      , a = !0;
    r.duration = function() {
        return playDuration
    }
    ,
    r.on("timeupdate", function() {
      a && r.currentTime() >= 15 && (a = !1,
       $("#modal-watch").modal({
           show: !0,
            keyboard: !1,
            backdrop: "static"
       }),
        r.exitFullscreen(),
       r.exitFullWindow())
    }),
    r.DisableProgressBar().disable()
}
, function(e, t) {}
, function(e, t) {
    e.exports = function(e) {
        var t = i.call(e);
        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    }
    ;
    var i = Object.prototype.toString
}
, function(e, t, i) {
    var n = i(37)
      , r = i(50);
    e.exports = function(e) {
        if (!e)
            return {};
        var t = {};
        return r(n(e).split("\n"), function(e) {
            var i, r = e.indexOf(":"), a = n(e.slice(0, r)).toLowerCase(), s = n(e.slice(r + 1));
            void 0 === t[a] ? t[a] = s : (i = t[a],
            "[object Array]" === Object.prototype.toString.call(i) ? t[a].push(s) : t[a] = [t[a], s])
        }),
        t
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(8)
      , r = i(17)
      , a = i(19)
      , s = i(22)
      , o = i(49)
      , u = n.call(Function.call, s());
    r(u, {
        getPolyfill: s,
        implementation: a,
        shim: o
    }),
    e.exports = u
}
, function(e, t, i) {
    "use strict";
    var n = "Function.prototype.bind called on incompatible "
      , r = Array.prototype.slice
      , a = Object.prototype.toString;
    e.exports = function(e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== a.call(t))
            throw new TypeError(n + t);
        for (var i, s = r.call(arguments, 1), o = function() {
            if (this instanceof i) {
                var n = t.apply(this, s.concat(r.call(arguments)));
                return Object(n) === n ? n : this
            }
            return t.apply(e, s.concat(r.call(arguments)))
        }, u = Math.max(0, t.length - s.length), l = [], c = 0; c < u; c++)
            l.push("$" + c);
        if (i = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(o),
        t.prototype) {
            var d = function() {};
            d.prototype = t.prototype,
            i.prototype = new d,
            d.prototype = null
        }
        return i
    }
}
, function(e, t, i) {
    "use strict";
    var n = Array.prototype.slice
      , r = i(18)
      , a = Object.keys
      , s = a ? function(e) {
        return a(e)
    }
    : i(40)
      , o = Object.keys;
    s.shim = function() {
        Object.keys ? function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
        }(1, 2) || (Object.keys = function(e) {
            return r(e) ? o(n.call(e)) : o(e)
        }
        ) : Object.keys = s;
        return Object.keys || s
    }
    ,
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    var n;
    if (!Object.keys) {
        var r = Object.prototype.hasOwnProperty
          , a = Object.prototype.toString
          , s = i(18)
          , o = Object.prototype.propertyIsEnumerable
          , u = !o.call({
            toString: null
        }, "toString")
          , l = o.call(function() {}, "prototype")
          , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , d = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        }
          , h = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }
          , p = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var e in window)
                try {
                    if (!h["$" + e] && r.call(window, e) && null !== window[e] && "object" == typeof window[e])
                        try {
                            d(window[e])
                        } catch (e) {
                            return !0
                        }
                } catch (e) {
                    return !0
                }
            return !1
        }();
        n = function(e) {
            var t = null !== e && "object" == typeof e
              , i = "[object Function]" === a.call(e)
              , n = s(e)
              , o = t && "[object String]" === a.call(e)
              , h = [];
            if (!t && !i && !n)
                throw new TypeError("Object.keys called on a non-object");
            var f = l && i;
            if (o && e.length > 0 && !r.call(e, 0))
                for (var m = 0; m < e.length; ++m)
                    h.push(String(m));
            if (n && e.length > 0)
                for (var g = 0; g < e.length; ++g)
                    h.push(String(g));
            else
                for (var y in e)
                    f && "prototype" === y || !r.call(e, y) || h.push(String(y));
            if (u)
                for (var v = function(e) {
                    if ("undefined" == typeof window || !p)
                        return d(e);
                    try {
                        return d(e)
                    } catch (e) {
                        return !1
                    }
                }(e), _ = 0; _ < c.length; ++_)
                    v && "constructor" === c[_] || !r.call(e, c[_]) || h.push(c[_]);
            return h
        }
    }
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n = i(20)
      , r = n("%Object%")
      , a = n("%TypeError%")
      , s = n("%String%")
      , o = i(42)
      , u = i(43)
      , l = i(44)
      , c = i(45)
      , d = i(46)
      , h = i(9)
      , p = i(47)
      , f = i(21)
      , m = {
        ToPrimitive: p,
        ToBoolean: function(e) {
            return !!e
        },
        ToNumber: function(e) {
            return +e
        },
        ToInteger: function(e) {
            var t = this.ToNumber(e);
            return u(t) ? 0 : 0 !== t && l(t) ? c(t) * Math.floor(Math.abs(t)) : t
        },
        ToInt32: function(e) {
            return this.ToNumber(e) >> 0
        },
        ToUint32: function(e) {
            return this.ToNumber(e) >>> 0
        },
        ToUint16: function(e) {
            var t = this.ToNumber(e);
            if (u(t) || 0 === t || !l(t))
                return 0;
            var i = c(t) * Math.floor(Math.abs(t));
            return d(i, 65536)
        },
        ToString: function(e) {
            return s(e)
        },
        ToObject: function(e) {
            return this.CheckObjectCoercible(e),
            r(e)
        },
        CheckObjectCoercible: function(e, t) {
            if (null == e)
                throw new a(t || "Cannot call method on " + e);
            return e
        },
        IsCallable: h,
        SameValue: function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : u(e) && u(t)
        },
        Type: function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
        },
        IsPropertyDescriptor: function(e) {
            if ("Object" !== this.Type(e))
                return !1;
            var t = {
                "[[Configurable]]": !0,
                "[[Enumerable]]": !0,
                "[[Get]]": !0,
                "[[Set]]": !0,
                "[[Value]]": !0,
                "[[Writable]]": !0
            };
            for (var i in e)
                if (f(e, i) && !t[i])
                    return !1;
            var n = f(e, "[[Value]]")
              , r = f(e, "[[Get]]") || f(e, "[[Set]]");
            if (n && r)
                throw new a("Property Descriptors may not be both accessor and data descriptors");
            return !0
        },
        IsAccessorDescriptor: function(e) {
            return void 0 !== e && (o(this, "Property Descriptor", "Desc", e),
            !(!f(e, "[[Get]]") && !f(e, "[[Set]]")))
        },
        IsDataDescriptor: function(e) {
            return void 0 !== e && (o(this, "Property Descriptor", "Desc", e),
            !(!f(e, "[[Value]]") && !f(e, "[[Writable]]")))
        },
        IsGenericDescriptor: function(e) {
            return void 0 !== e && (o(this, "Property Descriptor", "Desc", e),
            !this.IsAccessorDescriptor(e) && !this.IsDataDescriptor(e))
        },
        FromPropertyDescriptor: function(e) {
            if (void 0 === e)
                return e;
            if (o(this, "Property Descriptor", "Desc", e),
            this.IsDataDescriptor(e))
                return {
                    value: e["[[Value]]"],
                    writable: !!e["[[Writable]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
            if (this.IsAccessorDescriptor(e))
                return {
                    get: e["[[Get]]"],
                    set: e["[[Set]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
            throw new a("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
        },
        ToPropertyDescriptor: function(e) {
            if ("Object" !== this.Type(e))
                throw new a("ToPropertyDescriptor requires an object");
            var t = {};
            if (f(e, "enumerable") && (t["[[Enumerable]]"] = this.ToBoolean(e.enumerable)),
            f(e, "configurable") && (t["[[Configurable]]"] = this.ToBoolean(e.configurable)),
            f(e, "value") && (t["[[Value]]"] = e.value),
            f(e, "writable") && (t["[[Writable]]"] = this.ToBoolean(e.writable)),
            f(e, "get")) {
                var i = e.get;
                if (void 0 !== i && !this.IsCallable(i))
                    throw new TypeError("getter must be a function");
                t["[[Get]]"] = i
            }
            if (f(e, "set")) {
                var n = e.set;
                if (void 0 !== n && !this.IsCallable(n))
                    throw new a("setter must be a function");
                t["[[Set]]"] = n
            }
            if ((f(t, "[[Get]]") || f(t, "[[Set]]")) && (f(t, "[[Value]]") || f(t, "[[Writable]]")))
                throw new a("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
            return t
        }
    };
    e.exports = m
}
, function(e, t, i) {
    "use strict";
    var n = i(20)
      , r = n("%TypeError%")
      , a = n("%SyntaxError%")
      , s = i(21)
      , o = {
        "Property Descriptor": function(e, t) {
            if ("Object" !== e.Type(t))
                return !1;
            var i = {
                "[[Configurable]]": !0,
                "[[Enumerable]]": !0,
                "[[Get]]": !0,
                "[[Set]]": !0,
                "[[Value]]": !0,
                "[[Writable]]": !0
            };
            for (var n in t)
                if (s(t, n) && !i[n])
                    return !1;
            var a = s(t, "[[Value]]")
              , o = s(t, "[[Get]]") || s(t, "[[Set]]");
            if (a && o)
                throw new r("Property Descriptors may not be both accessor and data descriptors");
            return !0
        }
    };
    e.exports = function(e, t, i, n) {
        var s = o[t];
        if ("function" != typeof s)
            throw new a("unknown record type: " + t);
        if (!s(e, n))
            throw new r(i + " must be a " + t);
        console.log(s(e, n), n)
    }
}
, function(e, t) {
    e.exports = Number.isNaN || function(e) {
        return e != e
    }
}
, function(e, t) {
    var i = Number.isNaN || function(e) {
        return e != e
    }
    ;
    e.exports = Number.isFinite || function(e) {
        return "number" == typeof e && !i(e) && e !== 1 / 0 && e !== -1 / 0
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e >= 0 ? 1 : -1
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        var i = e % t;
        return Math.floor(i >= 0 ? i : i + t)
    }
}
, function(e, t, i) {
    "use strict";
    var n = Object.prototype.toString
      , r = i(48)
      , a = i(9)
      , s = function(e) {
        var t;
        if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(e) ? String : Number) === String || t === Number) {
            var i, s, o = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (s = 0; s < o.length; ++s)
                if (a(e[o[s]]) && (i = e[o[s]](),
                r(i)))
                    return i;
            throw new TypeError("No default value")
        }
        throw new TypeError("invalid [[DefaultValue]] hint supplied")
    };
    e.exports = function(e) {
        return r(e) ? e : arguments.length > 1 ? s(e, arguments[1]) : s(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null === e || "function" != typeof e && "object" != typeof e
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(17)
      , r = i(22);
    e.exports = function() {
        var e = r();
        return n(String.prototype, {
            trim: e
        }, {
            trim: function() {
                return String.prototype.trim !== e
            }
        }),
        e
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(9)
      , r = Object.prototype.toString
      , a = Object.prototype.hasOwnProperty
      , s = function(e, t, i) {
        for (var n = 0, r = e.length; n < r; n++)
            a.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
    }
      , o = function(e, t, i) {
        for (var n = 0, r = e.length; n < r; n++)
            null == i ? t(e.charAt(n), n, e) : t.call(i, e.charAt(n), n, e)
    }
      , u = function(e, t, i) {
        for (var n in e)
            a.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
    };
    e.exports = function(e, t, i) {
        if (!n(t))
            throw new TypeError("iterator must be a function");
        var a;
        arguments.length >= 3 && (a = i),
        "[object Array]" === r.call(e) ? s(e, t, a) : "string" == typeof e ? o(e, t, a) : u(e, t, a)
    }
}
, function(e, t) {
    e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                i.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ;
    var i = Object.prototype.hasOwnProperty
}
, function(e, t) {
    var i = Object.create || function() {
        function e() {}
        return function(t) {
            if (1 !== arguments.length)
                throw new Error("Object.create shim only accepts one parameter.");
            return e.prototype = t,
            new e
        }
    }();
    function n(e, t) {
        this.name = "ParsingError",
        this.code = e.code,
        this.message = t || e.message
    }
    function r(e) {
        function t(e, t, i, n) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3
        }
        var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
    }
    function a() {
        this.values = i(null)
    }
    function s(e, t, i, n) {
        var r = n ? e.split(n) : [e];
        for (var a in r)
            if ("string" == typeof r[a]) {
                var s = r[a].split(i);
                if (2 === s.length)
                    t(s[0], s[1])
            }
    }
    function o(e, t, i) {
        var o = e;
        function u() {
            var t = r(e);
            if (null === t)
                throw new n(n.Errors.BadTimeStamp,"Malformed timestamp: " + o);
            return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
            t
        }
        function l() {
            e = e.replace(/^\s+/, "")
        }
        if (l(),
        t.startTime = u(),
        l(),
        "--\x3e" !== e.substr(0, 3))
            throw new n(n.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): " + o);
        e = e.substr(3),
        l(),
        t.endTime = u(),
        l(),
        function(e, t) {
            var n = new a;
            s(e, function(e, t) {
                switch (e) {
                case "region":
                    for (var r = i.length - 1; r >= 0; r--)
                        if (i[r].id === t) {
                            n.set(e, i[r].region);
                            break
                        }
                    break;
                case "vertical":
                    n.alt(e, t, ["rl", "lr"]);
                    break;
                case "line":
                    var a = t.split(",")
                      , s = a[0];
                    n.integer(e, s),
                    n.percent(e, s) && n.set("snapToLines", !1),
                    n.alt(e, s, ["auto"]),
                    2 === a.length && n.alt("lineAlign", a[1], ["start", "middle", "end"]);
                    break;
                case "position":
                    a = t.split(","),
                    n.percent(e, a[0]),
                    2 === a.length && n.alt("positionAlign", a[1], ["start", "middle", "end"]);
                    break;
                case "size":
                    n.percent(e, t);
                    break;
                case "align":
                    n.alt(e, t, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/),
            t.region = n.get("region", null),
            t.vertical = n.get("vertical", ""),
            t.line = n.get("line", "auto"),
            t.lineAlign = n.get("lineAlign", "start"),
            t.snapToLines = n.get("snapToLines", !0),
            t.size = n.get("size", 100),
            t.align = n.get("align", "middle"),
            t.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, t.align),
            t.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, t.align)
        }(e, t)
    }
    n.prototype = i(Error.prototype),
    n.prototype.constructor = n,
    n.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    },
    a.prototype = {
        set: function(e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        },
        get: function(e, t, i) {
            return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
        },
        has: function(e) {
            return e in this.values
        },
        alt: function(e, t, i) {
            for (var n = 0; n < i.length; ++n)
                if (t === i[n]) {
                    this.set(e, t);
                    break
                }
        },
        integer: function(e, t) {
            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
        },
        percent: function(e, t) {
            return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
            !0)
        }
    };
    var u = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "â€Ž",
        "&rlm;": "â€",
        "&nbsp;": "Â "
    }
      , l = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }
      , c = {
        v: "title",
        lang: "lang"
    }
      , d = {
        rt: "ruby"
    };
    function h(e, t) {
        function i() {
            if (!t)
                return null;
            var e, i = t.match(/^([^<]*)(<[^>]*>?)?/);
            return e = i[1] ? i[1] : i[2],
            t = t.substr(e.length),
            e
        }
        function n(e) {
            return u[e]
        }
        function a(e) {
            for (; v = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); )
                e = e.replace(v[0], n);
            return e
        }
        function s(e, t) {
            return !d[t.localName] || d[t.localName] === e.localName
        }
        function o(t, i) {
            var n = l[t];
            if (!n)
                return null;
            var r = e.document.createElement(n);
            r.localName = n;
            var a = c[t];
            return a && i && (r[a] = i.trim()),
            r
        }
        for (var h, p = e.document.createElement("div"), f = p, m = []; null !== (h = i()); )
            if ("<" !== h[0])
                f.appendChild(e.document.createTextNode(a(h)));
            else {
                if ("/" === h[1]) {
                    m.length && m[m.length - 1] === h.substr(2).replace(">", "") && (m.pop(),
                    f = f.parentNode);
                    continue
                }
                var g, y = r(h.substr(1, h.length - 2));
                if (y) {
                    g = e.document.createProcessingInstruction("timestamp", y),
                    f.appendChild(g);
                    continue
                }
                var v = h.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!v)
                    continue;
                if (!(g = o(v[1], v[3])))
                    continue;
                if (!s(f, g))
                    continue;
                v[2] && (g.className = v[2].substr(1).replace(".", " ")),
                m.push(v[1]),
                f.appendChild(g),
                f = g
            }
        return p
    }
    var p = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
    function f(e) {
        for (var t = 0; t < p.length; t++) {
            var i = p[t];
            if (e >= i[0] && e <= i[1])
                return !0
        }
        return !1
    }
    function m(e) {
        var t = []
          , i = "";
        if (!e || !e.childNodes)
            return "ltr";
        function n(e, t) {
            for (var i = t.childNodes.length - 1; i >= 0; i--)
                e.push(t.childNodes[i])
        }
        function r(e) {
            if (!e || !e.length)
                return null;
            var t = e.pop()
              , i = t.textContent || t.innerText;
            if (i) {
                var a = i.match(/^.*(\n|\r)/);
                return a ? (e.length = 0,
                a[0]) : i
            }
            return "ruby" === t.tagName ? r(e) : t.childNodes ? (n(e, t),
            r(e)) : void 0
        }
        for (n(t, e); i = r(t); )
            for (var a = 0; a < i.length; a++)
                if (f(i.charCodeAt(a)))
                    return "rtl";
        return "ltr"
    }
    function g() {}
    function y(e, t, i) {
        g.call(this),
        this.cue = t,
        this.cueDiv = h(e, t.text);
        var n = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext"
        };
        this.applyStyles(n, this.cueDiv),
        this.div = e.document.createElement("div"),
        n = {
            direction: m(this.cueDiv),
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === t.align ? "center" : t.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        },
        this.applyStyles(n),
        this.div.appendChild(this.cueDiv);
        var r = 0;
        switch (t.positionAlign) {
        case "start":
            r = t.position;
            break;
        case "middle":
            r = t.position - t.size / 2;
            break;
        case "end":
            r = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(r, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(r, "%"),
            height: this.formatStyle(t.size, "%")
        }),
        this.move = function(e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }
    function v(e) {
        var t, i, n, r;
        if (e.div) {
            i = e.div.offsetHeight,
            n = e.div.offsetWidth,
            r = e.div.offsetTop;
            var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            e = e.div.getBoundingClientRect(),
            t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
        }
        this.left = e.left,
        this.right = e.right,
        this.top = e.top || r,
        this.height = e.height || i,
        this.bottom = e.bottom || r + (e.height || i),
        this.width = e.width || n,
        this.lineHeight = void 0 !== t ? t : e.lineHeight
    }
    function _(e, t, i, n) {
        var r = new v(t)
          , a = t.cue
          , s = function(e) {
            if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100))
                return e.line;
            if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement)
                return -1;
            for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++)
                "showing" === i[r].mode && n++;
            return -1 * ++n
        }(a)
          , o = [];
        if (a.snapToLines) {
            var u;
            switch (a.vertical) {
            case "":
                o = ["+y", "-y"],
                u = "height";
                break;
            case "rl":
                o = ["+x", "-x"],
                u = "width";
                break;
            case "lr":
                o = ["-x", "+x"],
                u = "width"
            }
            var l = r.lineHeight
              , c = l * Math.round(s)
              , d = i[u] + l
              , h = o[0];
            Math.abs(c) > d && (c = c < 0 ? -1 : 1,
            c *= Math.ceil(d / l) * l),
            s < 0 && (c += "" === a.vertical ? i.height : i.width,
            o = o.reverse()),
            r.move(h, c)
        } else {
            var p = r.lineHeight / i.height * 100;
            switch (a.lineAlign) {
            case "middle":
                s -= p / 2;
                break;
            case "end":
                s -= p
            }
            switch (a.vertical) {
            case "":
                t.applyStyles({
                    top: t.formatStyle(s, "%")
                });
                break;
            case "rl":
                t.applyStyles({
                    left: t.formatStyle(s, "%")
                });
                break;
            case "lr":
                t.applyStyles({
                    right: t.formatStyle(s, "%")
                })
            }
            o = ["+y", "-x", "+x", "-y"],
            r = new v(t)
        }
        var f = function(e, t) {
            for (var r, a = new v(e), s = 1, o = 0; o < t.length; o++) {
                for (; e.overlapsOppositeAxis(i, t[o]) || e.within(i) && e.overlapsAny(n); )
                    e.move(t[o]);
                if (e.within(i))
                    return e;
                var u = e.intersectPercentage(i);
                s > u && (r = new v(e),
                s = u),
                e = new v(a)
            }
            return r || a
        }(r, o);
        t.move(f.toCSSCompatValues(i))
    }
    function b() {}
    g.prototype.applyStyles = function(e, t) {
        for (var i in t = t || this.div,
        e)
            e.hasOwnProperty(i) && (t.style[i] = e[i])
    }
    ,
    g.prototype.formatStyle = function(e, t) {
        return 0 === e ? 0 : e + t
    }
    ,
    y.prototype = i(g.prototype),
    y.prototype.constructor = y,
    v.prototype.move = function(e, t) {
        switch (t = void 0 !== t ? t : this.lineHeight,
        e) {
        case "+x":
            this.left += t,
            this.right += t;
            break;
        case "-x":
            this.left -= t,
            this.right -= t;
            break;
        case "+y":
            this.top += t,
            this.bottom += t;
            break;
        case "-y":
            this.top -= t,
            this.bottom -= t
        }
    }
    ,
    v.prototype.overlaps = function(e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    }
    ,
    v.prototype.overlapsAny = function(e) {
        for (var t = 0; t < e.length; t++)
            if (this.overlaps(e[t]))
                return !0;
        return !1
    }
    ,
    v.prototype.within = function(e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    }
    ,
    v.prototype.overlapsOppositeAxis = function(e, t) {
        switch (t) {
        case "+x":
            return this.left < e.left;
        case "-x":
            return this.right > e.right;
        case "+y":
            return this.top < e.top;
        case "-y":
            return this.bottom > e.bottom
        }
    }
    ,
    v.prototype.intersectPercentage = function(e) {
        return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
    }
    ,
    v.prototype.toCSSCompatValues = function(e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    }
    ,
    v.getSimpleBoxPosition = function(e) {
        var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0
          , i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0
          , n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
        return {
            left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
            right: e.right,
            top: e.top || n,
            height: e.height || t,
            bottom: e.bottom || n + (e.height || t),
            width: e.width || i
        }
    }
    ,
    b.StringDecoder = function() {
        return {
            decode: function(e) {
                if (!e)
                    return "";
                if ("string" != typeof e)
                    throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    }
    ,
    b.convertCueToDOMTree = function(e, t) {
        return e && t ? h(e, t) : null
    }
    ;
    b.processCues = function(e, t, i) {
        if (!e || !t || !i)
            return null;
        for (; i.firstChild; )
            i.removeChild(i.firstChild);
        var n = e.document.createElement("div");
        if (n.style.position = "absolute",
        n.style.left = "0",
        n.style.right = "0",
        n.style.top = "0",
        n.style.bottom = "0",
        n.style.margin = "1.5%",
        i.appendChild(n),
        function(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t].hasBeenReset || !e[t].displayState)
                    return !0;
            return !1
        }(t)) {
            var r = []
              , a = v.getSimpleBoxPosition(n)
              , s = {
                font: Math.round(.05 * a.height * 100) / 100 + "px sans-serif"
            };
            !function() {
                for (var i, o, u = 0; u < t.length; u++)
                    o = t[u],
                    i = new y(e,o,s),
                    n.appendChild(i.div),
                    _(0, i, a, r),
                    o.displayState = i.div,
                    r.push(v.getSimpleBoxPosition(i))
            }()
        } else
            for (var o = 0; o < t.length; o++)
                n.appendChild(t[o].displayState)
    }
    ,
    b.Parser = function(e, t, i) {
        i || (i = t,
        t = {}),
        t || (t = {}),
        this.window = e,
        this.vttjs = t,
        this.state = "INITIAL",
        this.buffer = "",
        this.decoder = i || new TextDecoder("utf8"),
        this.regionList = []
    }
    ,
    b.Parser.prototype = {
        reportOrThrowError: function(e) {
            if (!(e instanceof n))
                throw e;
            this.onparsingerror && this.onparsingerror(e)
        },
        parse: function(e) {
            var t = this;
            function i() {
                for (var e = t.buffer, i = 0; i < e.length && "\r" !== e[i] && "\n" !== e[i]; )
                    ++i;
                var n = e.substr(0, i);
                return "\r" === e[i] && ++i,
                "\n" === e[i] && ++i,
                t.buffer = e.substr(i),
                n
            }
            function u(e) {
                e.match(/X-TIMESTAMP-MAP/) ? s(e, function(e, i) {
                    switch (e) {
                    case "X-TIMESTAMP-MAP":
                        !function(e) {
                            var i = new a;
                            s(e, function(e, t) {
                                switch (e) {
                                case "MPEGT":
                                    i.integer(e + "S", t);
                                    break;
                                case "LOCA":
                                    i.set(e + "L", r(t))
                                }
                            }, /[^\d]:/, /,/),
                            t.ontimestampmap && t.ontimestampmap({
                                MPEGTS: i.get("MPEGTS"),
                                LOCAL: i.get("LOCAL")
                            })
                        }(i)
                    }
                }, /=/) : s(e, function(e, i) {
                    switch (e) {
                    case "Region":
                        !function(e) {
                            var i = new a;
                            if (s(e, function(e, t) {
                                switch (e) {
                                case "id":
                                    i.set(e, t);
                                    break;
                                case "width":
                                    i.percent(e, t);
                                    break;
                                case "lines":
                                    i.integer(e, t);
                                    break;
                                case "regionanchor":
                                case "viewportanchor":
                                    var n = t.split(",");
                                    if (2 !== n.length)
                                        break;
                                    var r = new a;
                                    if (r.percent("x", n[0]),
                                    r.percent("y", n[1]),
                                    !r.has("x") || !r.has("y"))
                                        break;
                                    i.set(e + "X", r.get("x")),
                                    i.set(e + "Y", r.get("y"));
                                    break;
                                case "scroll":
                                    i.alt(e, t, ["up"])
                                }
                            }, /=/, /\s/),
                            i.has("id")) {
                                var n = new (t.vttjs.VTTRegion || t.window.VTTRegion);
                                n.width = i.get("width", 100),
                                n.lines = i.get("lines", 3),
                                n.regionAnchorX = i.get("regionanchorX", 0),
                                n.regionAnchorY = i.get("regionanchorY", 100),
                                n.viewportAnchorX = i.get("viewportanchorX", 0),
                                n.viewportAnchorY = i.get("viewportanchorY", 100),
                                n.scroll = i.get("scroll", ""),
                                t.onregion && t.onregion(n),
                                t.regionList.push({
                                    id: i.get("id"),
                                    region: n
                                })
                            }
                        }(i)
                    }
                }, /:/)
            }
            e && (t.buffer += t.decoder.decode(e, {
                stream: !0
            }));
            try {
                var l;
                if ("INITIAL" === t.state) {
                    if (!/\r\n|\n/.test(t.buffer))
                        return this;
                    var c = (l = i()).match(/^WEBVTT([ \t].*)?$/);
                    if (!c || !c[0])
                        throw new n(n.Errors.BadSignature);
                    t.state = "HEADER"
                }
                for (var d = !1; t.buffer; ) {
                    if (!/\r\n|\n/.test(t.buffer))
                        return this;
                    switch (d ? d = !1 : l = i(),
                    t.state) {
                    case "HEADER":
                        /:/.test(l) ? u(l) : l || (t.state = "ID");
                        continue;
                    case "NOTE":
                        l || (t.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(l)) {
                            t.state = "NOTE";
                            break
                        }
                        if (!l)
                            continue;
                        if (t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0,0,""),
                        t.state = "CUE",
                        -1 === l.indexOf("--\x3e")) {
                            t.cue.id = l;
                            continue
                        }
                    case "CUE":
                        try {
                            o(l, t.cue, t.regionList)
                        } catch (e) {
                            t.reportOrThrowError(e),
                            t.cue = null,
                            t.state = "BADCUE";
                            continue
                        }
                        t.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        var h = -1 !== l.indexOf("--\x3e");
                        if (!l || h && (d = !0)) {
                            t.oncue && t.oncue(t.cue),
                            t.cue = null,
                            t.state = "ID";
                            continue
                        }
                        t.cue.text && (t.cue.text += "\n"),
                        t.cue.text += l;
                        continue;
                    case "BADCUE":
                        l || (t.state = "ID");
                        continue
                    }
                }
            } catch (e) {
                t.reportOrThrowError(e),
                "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
                t.cue = null,
                t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            try {
                if (this.buffer += this.decoder.decode(),
                (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n",
                this.parse()),
                "INITIAL" === this.state)
                    throw new n(n.Errors.BadSignature)
            } catch (e) {
                this.reportOrThrowError(e)
            }
            return this.onflush && this.onflush(),
            this
        }
    },
    e.exports = b
}
, function(e, t) {
    var i = "auto"
      , n = {
        "": 1,
        lr: 1,
        rl: 1
    }
      , r = {
        start: 1,
        middle: 1,
        end: 1,
        left: 1,
        right: 1
    };
    function a(e) {
        return "string" == typeof e && (!!r[e.toLowerCase()] && e.toLowerCase())
    }
    function s(e, t, r) {
        this.hasBeenReset = !1;
        var s = ""
          , o = !1
          , u = e
          , l = t
          , c = r
          , d = null
          , h = ""
          , p = !0
          , f = "auto"
          , m = "start"
          , g = 50
          , y = "middle"
          , v = 50
          , _ = "middle";
        Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    s = "" + e
                }
            },
            pauseOnExit: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    o = !!e
                }
            },
            startTime: {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(e) {
                    if ("number" != typeof e)
                        throw new TypeError("Start time must be set to a number.");
                    u = e,
                    this.hasBeenReset = !0
                }
            },
            endTime: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(e) {
                    if ("number" != typeof e)
                        throw new TypeError("End time must be set to a number.");
                    l = e,
                    this.hasBeenReset = !0
                }
            },
            text: {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(e) {
                    c = "" + e,
                    this.hasBeenReset = !0
                }
            },
            region: {
                enumerable: !0,
                get: function() {
                    return d
                },
                set: function(e) {
                    d = e,
                    this.hasBeenReset = !0
                }
            },
            vertical: {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(e) {
                    var t = function(e) {
                        return "string" == typeof e && !!n[e.toLowerCase()] && e.toLowerCase()
                    }(e);
                    if (!1 === t)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    h = t,
                    this.hasBeenReset = !0
                }
            },
            snapToLines: {
                enumerable: !0,
                get: function() {
                    return p
                },
                set: function(e) {
                    p = !!e,
                    this.hasBeenReset = !0
                }
            },
            line: {
                enumerable: !0,
                get: function() {
                    return f
                },
                set: function(e) {
                    if ("number" != typeof e && e !== i)
                        throw new SyntaxError("An invalid number or illegal string was specified.");
                    f = e,
                    this.hasBeenReset = !0
                }
            },
            lineAlign: {
                enumerable: !0,
                get: function() {
                    return m
                },
                set: function(e) {
                    var t = a(e);
                    if (!t)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    m = t,
                    this.hasBeenReset = !0
                }
            },
            position: {
                enumerable: !0,
                get: function() {
                    return g
                },
                set: function(e) {
                    if (e < 0 || e > 100)
                        throw new Error("Position must be between 0 and 100.");
                    g = e,
                    this.hasBeenReset = !0
                }
            },
            positionAlign: {
                enumerable: !0,
                get: function() {
                    return y
                },
                set: function(e) {
                    var t = a(e);
                    if (!t)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    y = t,
                    this.hasBeenReset = !0
                }
            },
            size: {
                enumerable: !0,
                get: function() {
                    return v
                },
                set: function(e) {
                    if (e < 0 || e > 100)
                        throw new Error("Size must be between 0 and 100.");
                    v = e,
                    this.hasBeenReset = !0
                }
            },
            align: {
                enumerable: !0,
                get: function() {
                    return _
                },
                set: function(e) {
                    var t = a(e);
                    if (!t)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    _ = t,
                    this.hasBeenReset = !0
                }
            }
        }),
        this.displayState = void 0
    }
    s.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }
    ,
    e.exports = s
}
, function(e, t) {
    var i = {
        "": !0,
        up: !0
    };
    function n(e) {
        return "number" == typeof e && e >= 0 && e <= 100
    }
    e.exports = function() {
        var e = 100
          , t = 3
          , r = 0
          , a = 100
          , s = 0
          , o = 100
          , u = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if (!n(t))
                        throw new Error("Width must be between 0 and 100.");
                    e = t
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if ("number" != typeof e)
                        throw new TypeError("Lines must be set to a number.");
                    t = e
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if (!n(e))
                        throw new Error("RegionAnchorX must be between 0 and 100.");
                    a = e
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    if (!n(e))
                        throw new Error("RegionAnchorY must be between 0 and 100.");
                    r = e
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    if (!n(e))
                        throw new Error("ViewportAnchorY must be between 0 and 100.");
                    o = e
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if (!n(e))
                        throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = e
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(e) {
                    var t = function(e) {
                        return "string" == typeof e && !!i[e.toLowerCase()] && e.toLowerCase()
                    }(e);
                    if (!1 === t)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    u = t
                }
            }
        })
    }
}
, function(e, t) {
    e.exports = {
        toUnsigned: function(e) {
            return e >>> 0
        }
    }
}
, function(e, t) {
    var i = function(e, t) {
        var i = {
            size: 0,
            flags: {
                isLeading: 0,
                dependsOn: 1,
                isDependedOn: 0,
                hasRedundancy: 0,
                degradationPriority: 0,
                isNonSyncSample: 1
            }
        };
        return i.dataOffset = t,
        i.compositionTimeOffset = e.pts - e.dts,
        i.duration = e.duration,
        i.size = 4 * e.length,
        i.size += e.byteLength,
        e.keyFrame && (i.flags.dependsOn = 2,
        i.flags.isNonSyncSample = 0),
        i
    };
    e.exports = {
        groupNalsIntoFrames: function(e) {
            var t, i, n = [], r = [];
            for (n.byteLength = 0,
            t = 0; t < e.length; t++)
                "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts,
                r.push(n)),
                (n = [i]).byteLength = i.data.byteLength,
                n.pts = i.pts,
                n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0),
                n.duration = i.dts - n.dts,
                n.byteLength += i.data.byteLength,
                n.push(i));
            return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
            r.push(n),
            r
        },
        groupFramesIntoGops: function(e) {
            var t, i, n = [], r = [];
            for (n.byteLength = 0,
            n.nalCount = 0,
            n.duration = 0,
            n.pts = e[0].pts,
            n.dts = e[0].dts,
            r.byteLength = 0,
            r.nalCount = 0,
            r.duration = 0,
            r.pts = e[0].pts,
            r.dts = e[0].dts,
            t = 0; t < e.length; t++)
                (i = e[t]).keyFrame ? (n.length && (r.push(n),
                r.byteLength += n.byteLength,
                r.nalCount += n.nalCount,
                r.duration += n.duration),
                (n = [i]).nalCount = i.length,
                n.byteLength = i.byteLength,
                n.pts = i.pts,
                n.dts = i.dts,
                n.duration = i.duration) : (n.duration += i.duration,
                n.nalCount += i.length,
                n.byteLength += i.byteLength,
                n.push(i));
            return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
            r.byteLength += n.byteLength,
            r.nalCount += n.nalCount,
            r.duration += n.duration,
            r.push(n),
            r
        },
        extendFirstKeyFrame: function(e) {
            var t;
            return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(),
            e.byteLength -= t.byteLength,
            e.nalCount -= t.nalCount,
            e[0][0].dts = t.dts,
            e[0][0].pts = t.pts,
            e[0][0].duration += t.duration),
            e
        },
        generateSampleTable: function(e, t) {
            var n, r, a, s, o, u = t || 0, l = [];
            for (n = 0; n < e.length; n++)
                for (s = e[n],
                r = 0; r < s.length; r++)
                    o = s[r],
                    u += (a = i(o, u)).size,
                    l.push(a);
            return l
        },
        concatenateNalData: function(e) {
            var t, i, n, r, a, s, o = 0, u = e.byteLength, l = e.nalCount, c = new Uint8Array(u + 4 * l), d = new DataView(c.buffer);
            for (t = 0; t < e.length; t++)
                for (r = e[t],
                i = 0; i < r.length; i++)
                    for (a = r[i],
                    n = 0; n < a.length; n++)
                        s = a[n],
                        d.setUint32(o, s.data.byteLength),
                        o += 4,
                        c.set(s.data, o),
                        o += s.data.byteLength;
            return c
        }
    }
}
, function(e, t, i) {
    var n = i(58)
      , r = i(59);
    e.exports = {
        prefixWithSilence: function(e, t, i, a) {
            var s, o, u, l, c = 0, d = 0, h = 0;
            if (t.length && (s = r.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate),
            o = Math.ceil(9e4 / (e.samplerate / 1024)),
            i && a && (c = s - Math.max(i, a),
            h = (d = Math.floor(c / o)) * o),
            !(d < 1 || h > 45e3))) {
                for ((u = n[e.samplerate]) || (u = t[0].data),
                l = 0; l < d; l++)
                    t.splice(l, 0, {
                        data: u
                    });
                e.baseMediaDecodeTime -= Math.floor(r.videoTsToAudioTs(h, e.samplerate))
            }
        },
        trimAdtsFramesByEarliestDts: function(e, t, i) {
            return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0,
            e.filter(function(e) {
                return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts),
                t.minSegmentPts = t.minSegmentDts,
                !0)
            }))
        },
        generateSampleTable: function(e) {
            var t, i, n = [];
            for (t = 0; t < e.length; t++)
                i = e[t],
                n.push({
                    size: i.data.byteLength,
                    duration: 1024
                });
            return n
        },
        concatenateFrameData: function(e) {
            var t, i, n = 0, r = new Uint8Array(function(e) {
                var t, i = 0;
                for (t = 0; t < e.length; t++)
                    i += e[t].data.byteLength;
                return i
            }(e));
            for (t = 0; t < e.length; t++)
                i = e[t],
                r.set(i.data, n),
                n += i.data.byteLength;
            return r
        }
    }
}
, function(e, t) {
    var i, n = [33, 16, 5, 32, 164, 27], r = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], a = function(e) {
        for (var t = []; e--; )
            t.push(0);
        return t
    }, s = {
        96000: [n, [227, 64], a(154), [56]],
        88200: [n, [231], a(170), [56]],
        64000: [n, [248, 192], a(240), [56]],
        48000: [n, [255, 192], a(268), [55, 148, 128], a(54), [112]],
        44100: [n, [255, 192], a(268), [55, 163, 128], a(84), [112]],
        32000: [n, [255, 192], a(268), [55, 234], a(226), [112]],
        24000: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 112], a(126), [224]],
        16000: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 255], a(269), [223, 108], a(195), [1, 192]],
        12000: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 253, 128], a(259), [56]],
        11025: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 255, 192], a(268), [55, 175, 128], a(108), [112]],
        8000: [r, a(268), [3, 121, 16], a(47), [7]]
    };
    e.exports = (i = s,
    Object.keys(i).reduce(function(e, t) {
        return e[t] = new Uint8Array(i[t].reduce(function(e, t) {
            return e.concat(t)
        }, [])),
        e
    }, {}))
}
, function(e, t) {
    var i, n, r, a, s, o;
    i = function(e) {
        return 9e4 * e
    }
    ,
    n = function(e, t) {
        return e * t
    }
    ,
    r = function(e) {
        return e / 9e4
    }
    ,
    a = function(e, t) {
        return e / t
    }
    ,
    s = function(e, t) {
        return i(a(e, t))
    }
    ,
    o = function(e, t) {
        return n(r(e), t)
    }
    ,
    e.exports = {
        secondsToVideoTs: i,
        secondsToAudioTs: n,
        videoTsToSeconds: r,
        audioTsToSeconds: a,
        audioTsToVideoTs: s,
        videoTsToAudioTs: o
    }
}
, function(e, t) {
    e.exports = {
        clearDtsInfo: function(e) {
            delete e.minSegmentDts,
            delete e.maxSegmentDts,
            delete e.minSegmentPts,
            delete e.maxSegmentPts
        },
        calculateTrackBaseMediaDecodeTime: function(e, t) {
            var i, n = e.minSegmentDts;
            return t || (n -= e.timelineStartInfo.dts),
            i = e.timelineStartInfo.baseMediaDecodeTime,
            i += n,
            i = Math.max(0, i),
            "audio" === e.type && (i *= e.samplerate / 9e4,
            i = Math.floor(i)),
            i
        },
        collectDtsInfo: function(e, t) {
            "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts),
            void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts),
            void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)),
            "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts),
            void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts),
            void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n, r, a, s = i(3), o = i(24), u = i(6), l = i(26).TimestampRolloverStream, c = i(6);
    (n = function() {
        var e = new Uint8Array(188)
          , t = 0;
        n.prototype.init.call(this),
        this.push = function(i) {
            var n, r = 0, a = 188;
            for (t ? ((n = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)),
            n.set(i, t),
            t = 0) : n = i; a < n.byteLength; )
                71 !== n[r] || 71 !== n[a] ? (r++,
                a++) : (this.trigger("data", n.subarray(r, a)),
                r += 188,
                a += 188);
            r < n.byteLength && (e.set(n.subarray(r), 0),
            t = n.byteLength - r)
        }
        ,
        this.flush = function() {
            188 === t && 71 === e[0] && (this.trigger("data", e),
            t = 0),
            this.trigger("done")
        }
    }
    ).prototype = new s,
    (r = function() {
        var e, t, i, n;
        r.prototype.init.call(this),
        n = this,
        this.packetsWaitingForPmt = [],
        this.programMapTable = void 0,
        e = function(e, n) {
            var r = 0;
            n.payloadUnitStartIndicator && (r += e[r] + 1),
            "pat" === n.type ? t(e.subarray(r), n) : i(e.subarray(r), n)
        }
        ,
        t = function(e, t) {
            t.section_number = e[7],
            t.last_section_number = e[8],
            n.pmtPid = (31 & e[10]) << 8 | e[11],
            t.pmtPid = n.pmtPid
        }
        ,
        i = function(e, t) {
            var i, r;
            if (1 & e[5]) {
                for (n.programMapTable = {
                    video: null,
                    audio: null,
                    "timed-metadata": {}
                },
                i = 3 + ((15 & e[1]) << 8 | e[2]) - 4,
                r = 12 + ((15 & e[10]) << 8 | e[11]); r < i; ) {
                    var a = e[r]
                      , s = (31 & e[r + 1]) << 8 | e[r + 2];
                    a === u.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = s : a === u.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = s : a === u.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][s] = a),
                    r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
                }
                t.programMapTable = n.programMapTable
            }
        }
        ,
        this.push = function(t) {
            var i = {}
              , n = 4;
            if (i.payloadUnitStartIndicator = !!(64 & t[1]),
            i.pid = 31 & t[1],
            i.pid <<= 8,
            i.pid |= t[2],
            (48 & t[3]) >>> 4 > 1 && (n += t[n] + 1),
            0 === i.pid)
                i.type = "pat",
                e(t.subarray(n), i),
                this.trigger("data", i);
            else if (i.pid === this.pmtPid)
                for (i.type = "pmt",
                e(t.subarray(n), i),
                this.trigger("data", i); this.packetsWaitingForPmt.length; )
                    this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
            else
                void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, n, i]) : this.processPes_(t, n, i)
        }
        ,
        this.processPes_ = function(e, t, i) {
            i.pid === this.programMapTable.video ? i.streamType = u.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = u.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid],
            i.type = "pes",
            i.data = e.subarray(t),
            this.trigger("data", i)
        }
    }
    ).prototype = new s,
    r.STREAM_TYPES = {
        h264: 27,
        adts: 15
    },
    (a = function() {
        var e = this
          , t = {
            data: [],
            size: 0
        }
          , i = {
            data: [],
            size: 0
        }
          , n = {
            data: [],
            size: 0
        }
          , r = function(t, i, n) {
            var r, a, s = new Uint8Array(t.size), o = {
                type: i
            }, u = 0, l = 0;
            if (t.data.length && !(t.size < 9)) {
                for (o.trackId = t.data[0].pid,
                u = 0; u < t.data.length; u++)
                    a = t.data[u],
                    s.set(a.data, l),
                    l += a.data.byteLength;
                var c, d, h;
                c = s,
                (d = o).packetLength = 6 + (c[4] << 8 | c[5]),
                d.dataAlignmentIndicator = 0 != (4 & c[6]),
                192 & (h = c[7]) && (d.pts = (14 & c[9]) << 27 | (255 & c[10]) << 20 | (254 & c[11]) << 12 | (255 & c[12]) << 5 | (254 & c[13]) >>> 3,
                d.pts *= 4,
                d.pts += (6 & c[13]) >>> 1,
                d.dts = d.pts,
                64 & h && (d.dts = (14 & c[14]) << 27 | (255 & c[15]) << 20 | (254 & c[16]) << 12 | (255 & c[17]) << 5 | (254 & c[18]) >>> 3,
                d.dts *= 4,
                d.dts += (6 & c[18]) >>> 1)),
                d.data = c.subarray(9 + c[8]),
                r = "video" === i || o.packetLength <= t.size,
                (n || r) && (t.size = 0,
                t.data.length = 0),
                r && e.trigger("data", o)
            }
        };
        a.prototype.init.call(this),
        this.push = function(a) {
            ({
                pat: function() {},
                pes: function() {
                    var e, s;
                    switch (a.streamType) {
                    case u.H264_STREAM_TYPE:
                    case c.H264_STREAM_TYPE:
                        e = t,
                        s = "video";
                        break;
                    case u.ADTS_STREAM_TYPE:
                        e = i,
                        s = "audio";
                        break;
                    case u.METADATA_STREAM_TYPE:
                        e = n,
                        s = "timed-metadata";
                        break;
                    default:
                        return
                    }
                    a.payloadUnitStartIndicator && r(e, s, !0),
                    e.data.push(a),
                    e.size += a.data.byteLength
                },
                pmt: function() {
                    var t = {
                        type: "metadata",
                        tracks: []
                    }
                      , i = a.programMapTable;
                    null !== i.video && t.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +i.video,
                        codec: "avc",
                        type: "video"
                    }),
                    null !== i.audio && t.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +i.audio,
                        codec: "adts",
                        type: "audio"
                    }),
                    e.trigger("data", t)
                }
            })[a.type]()
        }
        ,
        this.flush = function() {
            r(t, "video"),
            r(i, "audio"),
            r(n, "timed-metadata"),
            this.trigger("done")
        }
    }
    ).prototype = new s;
    var d = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: 188,
        TransportPacketStream: n,
        TransportParseStream: r,
        ElementaryStream: a,
        TimestampRolloverStream: l,
        CaptionStream: o.CaptionStream,
        Cea608Stream: o.Cea608Stream,
        MetadataStream: i(62)
    };
    for (var h in u)
        u.hasOwnProperty(h) && (d[h] = u[h]);
    e.exports = d
}
, function(e, t, i) {
    "use strict";
    var n, r = i(3), a = i(6), s = function(e, t, i) {
        var n, r = "";
        for (n = t; n < i; n++)
            r += "%" + ("00" + e[n].toString(16)).slice(-2);
        return r
    }, o = function(e, t, i) {
        return decodeURIComponent(s(e, t, i))
    }, u = function(e) {
        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
    }, l = {
        TXXX: function(e) {
            var t;
            if (3 === e.data[0]) {
                for (t = 1; t < e.data.length; t++)
                    if (0 === e.data[t]) {
                        e.description = o(e.data, 1, t),
                        e.value = o(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                        break
                    }
                e.data = e.value
            }
        },
        WXXX: function(e) {
            var t;
            if (3 === e.data[0])
                for (t = 1; t < e.data.length; t++)
                    if (0 === e.data[t]) {
                        e.description = o(e.data, 1, t),
                        e.url = o(e.data, t + 1, e.data.length);
                        break
                    }
        },
        PRIV: function(e) {
            var t, i;
            for (t = 0; t < e.data.length; t++)
                if (0 === e.data[t]) {
                    e.owner = (i = e.data,
                    unescape(s(i, 0, t)));
                    break
                }
            e.privateData = e.data.subarray(t + 1),
            e.data = e.privateData
        }
    };
    (n = function(e) {
        var t, i = {
            debug: !(!e || !e.debug),
            descriptor: e && e.descriptor
        }, r = 0, s = [], o = 0;
        if (n.prototype.init.call(this),
        this.dispatchType = a.METADATA_STREAM_TYPE.toString(16),
        i.descriptor)
            for (t = 0; t < i.descriptor.length; t++)
                this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
        this.push = function(e) {
            var t, n, a, c, d;
            if ("timed-metadata" === e.type)
                if (e.dataAlignmentIndicator && (o = 0,
                s.length = 0),
                0 === s.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0)))
                    i.debug && console.log("Skipping unrecognized metadata packet");
                else if (s.push(e),
                o += e.data.byteLength,
                1 === s.length && (r = u(e.data.subarray(6, 10)),
                r += 10),
                !(o < r)) {
                    for (t = {
                        data: new Uint8Array(r),
                        frames: [],
                        pts: s[0].pts,
                        dts: s[0].dts
                    },
                    d = 0; d < r; )
                        t.data.set(s[0].data.subarray(0, r - d), d),
                        d += s[0].data.byteLength,
                        o -= s[0].data.byteLength,
                        s.shift();
                    n = 10,
                    64 & t.data[5] && (n += 4,
                    n += u(t.data.subarray(10, 14)),
                    r -= u(t.data.subarray(16, 20)));
                    do {
                        if ((a = u(t.data.subarray(n + 4, n + 8))) < 1)
                            return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                        if ((c = {
                            id: String.fromCharCode(t.data[n], t.data[n + 1], t.data[n + 2], t.data[n + 3]),
                            data: t.data.subarray(n + 10, n + a + 10)
                        }).key = c.id,
                        l[c.id] && (l[c.id](c),
                        "com.apple.streaming.transportStreamTimestamp" === c.owner)) {
                            var h = c.data
                              , p = (1 & h[3]) << 30 | h[4] << 22 | h[5] << 14 | h[6] << 6 | h[7] >>> 2;
                            p *= 4,
                            p += 3 & h[7],
                            c.timeStamp = p,
                            void 0 === t.pts && void 0 === t.dts && (t.pts = c.timeStamp,
                            t.dts = c.timeStamp),
                            this.trigger("timestamp", c)
                        }
                        t.frames.push(c),
                        n += 10,
                        n += a
                    } while (n < r);
                    this.trigger("data", t)
                }
        }
    }
    ).prototype = new r,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n, r = i(3), a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    (n = function() {
        var e;
        n.prototype.init.call(this),
        this.push = function(t) {
            var i, n, r, s, o, u, l = 0, c = 0;
            if ("audio" === t.type)
                for (e ? (s = e,
                (e = new Uint8Array(s.byteLength + t.data.byteLength)).set(s),
                e.set(t.data, s.byteLength)) : e = t.data; l + 5 < e.length; )
                    if (255 === e[l] && 240 == (246 & e[l + 1])) {
                        if (n = 2 * (1 & ~e[l + 1]),
                        i = (3 & e[l + 3]) << 11 | e[l + 4] << 3 | (224 & e[l + 5]) >> 5,
                        u = 9e4 * (o = 1024 * (1 + (3 & e[l + 6]))) / a[(60 & e[l + 2]) >>> 2],
                        r = l + i,
                        e.byteLength < r)
                            return;
                        if (this.trigger("data", {
                            pts: t.pts + c * u,
                            dts: t.dts + c * u,
                            sampleCount: o,
                            audioobjecttype: 1 + (e[l + 2] >>> 6 & 3),
                            channelcount: (1 & e[l + 2]) << 2 | (192 & e[l + 3]) >>> 6,
                            samplerate: a[(60 & e[l + 2]) >>> 2],
                            samplingfrequencyindex: (60 & e[l + 2]) >>> 2,
                            samplesize: 16,
                            data: e.subarray(l + 7 + n, r)
                        }),
                        e.byteLength === r)
                            return void (e = void 0);
                        c++,
                        e = e.subarray(r)
                    } else
                        l++
        }
        ,
        this.flush = function() {
            this.trigger("done")
        }
    }
    ).prototype = new r,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n, r, a, s = i(3), o = i(65);
    (r = function() {
        var e, t, i = 0;
        r.prototype.init.call(this),
        this.push = function(n) {
            var r;
            for (t ? ((r = new Uint8Array(t.byteLength + n.data.byteLength)).set(t),
            r.set(n.data, t.byteLength),
            t = r) : t = n.data; i < t.byteLength - 3; i++)
                if (1 === t[i + 2]) {
                    e = i + 5;
                    break
                }
            for (; e < t.byteLength; )
                switch (t[e]) {
                case 0:
                    if (0 !== t[e - 1]) {
                        e += 2;
                        break
                    }
                    if (0 !== t[e - 2]) {
                        e++;
                        break
                    }
                    i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
                    do {
                        e++
                    } while (1 !== t[e] && e < t.length);
                    i = e - 2,
                    e += 3;
                    break;
                case 1:
                    if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                        e += 3;
                        break
                    }
                    this.trigger("data", t.subarray(i + 3, e - 2)),
                    i = e - 2,
                    e += 3;
                    break;
                default:
                    e += 3
                }
            t = t.subarray(i),
            e -= i,
            i = 0
        }
        ,
        this.flush = function() {
            t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)),
            t = null,
            i = 0,
            this.trigger("done")
        }
    }
    ).prototype = new s,
    a = {
        100: !0,
        110: !0,
        122: !0,
        244: !0,
        44: !0,
        83: !0,
        86: !0,
        118: !0,
        128: !0,
        138: !0,
        139: !0,
        134: !0
    },
    (n = function() {
        var e, t, i, s, u, l, c, d = new r;
        n.prototype.init.call(this),
        e = this,
        this.push = function(e) {
            "video" === e.type && (t = e.trackId,
            i = e.pts,
            s = e.dts,
            d.push(e))
        }
        ,
        d.on("data", function(n) {
            var r = {
                trackId: t,
                pts: i,
                dts: s,
                data: n
            };
            switch (31 & n[0]) {
            case 5:
                r.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                break;
            case 6:
                r.nalUnitType = "sei_rbsp",
                r.escapedRBSP = u(n.subarray(1));
                break;
            case 7:
                r.nalUnitType = "seq_parameter_set_rbsp",
                r.escapedRBSP = u(n.subarray(1)),
                r.config = l(r.escapedRBSP);
                break;
            case 8:
                r.nalUnitType = "pic_parameter_set_rbsp";
                break;
            case 9:
                r.nalUnitType = "access_unit_delimiter_rbsp"
            }
            e.trigger("data", r)
        }),
        d.on("done", function() {
            e.trigger("done")
        }),
        this.flush = function() {
            d.flush()
        }
        ,
        c = function(e, t) {
            var i, n = 8, r = 8;
            for (i = 0; i < e; i++)
                0 !== r && (r = (n + t.readExpGolomb() + 256) % 256),
                n = 0 === r ? n : r
        }
        ,
        u = function(e) {
            for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2),
                a += 2) : a++;
            if (0 === r.length)
                return e;
            t = n - r.length,
            i = new Uint8Array(t);
            var s = 0;
            for (a = 0; a < t; s++,
            a++)
                s === r[0] && (s++,
                r.shift()),
                i[a] = e[s];
            return i
        }
        ,
        l = function(e) {
            var t, i, n, r, s, u, l, d, h, p, f, m, g, y = 0, v = 0, _ = 0, b = 0, T = 1;
            if (i = (t = new o(e)).readUnsignedByte(),
            r = t.readUnsignedByte(),
            n = t.readUnsignedByte(),
            t.skipUnsignedExpGolomb(),
            a[i] && (3 === (s = t.readUnsignedExpGolomb()) && t.skipBits(1),
            t.skipUnsignedExpGolomb(),
            t.skipUnsignedExpGolomb(),
            t.skipBits(1),
            t.readBoolean()))
                for (f = 3 !== s ? 8 : 12,
                g = 0; g < f; g++)
                    t.readBoolean() && c(g < 6 ? 16 : 64, t);
            if (t.skipUnsignedExpGolomb(),
            0 === (u = t.readUnsignedExpGolomb()))
                t.readUnsignedExpGolomb();
            else if (1 === u)
                for (t.skipBits(1),
                t.skipExpGolomb(),
                t.skipExpGolomb(),
                l = t.readUnsignedExpGolomb(),
                g = 0; g < l; g++)
                    t.skipExpGolomb();
            if (t.skipUnsignedExpGolomb(),
            t.skipBits(1),
            d = t.readUnsignedExpGolomb(),
            h = t.readUnsignedExpGolomb(),
            0 === (p = t.readBits(1)) && t.skipBits(1),
            t.skipBits(1),
            t.readBoolean() && (y = t.readUnsignedExpGolomb(),
            v = t.readUnsignedExpGolomb(),
            _ = t.readUnsignedExpGolomb(),
            b = t.readUnsignedExpGolomb()),
            t.readBoolean() && t.readBoolean()) {
                switch (t.readUnsignedByte()) {
                case 1:
                    m = [1, 1];
                    break;
                case 2:
                    m = [12, 11];
                    break;
                case 3:
                    m = [10, 11];
                    break;
                case 4:
                    m = [16, 11];
                    break;
                case 5:
                    m = [40, 33];
                    break;
                case 6:
                    m = [24, 11];
                    break;
                case 7:
                    m = [20, 11];
                    break;
                case 8:
                    m = [32, 11];
                    break;
                case 9:
                    m = [80, 33];
                    break;
                case 10:
                    m = [18, 11];
                    break;
                case 11:
                    m = [15, 11];
                    break;
                case 12:
                    m = [64, 33];
                    break;
                case 13:
                    m = [160, 99];
                    break;
                case 14:
                    m = [4, 3];
                    break;
                case 15:
                    m = [3, 2];
                    break;
                case 16:
                    m = [2, 1];
                    break;
                case 255:
                    m = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                }
                m && (T = m[0] / m[1])
            }
            return {
                profileIdc: i,
                levelIdc: n,
                profileCompatibility: r,
                width: Math.ceil((16 * (d + 1) - 2 * y - 2 * v) * T),
                height: (2 - p) * (h + 1) * 16 - 2 * _ - 2 * b
            }
        }
    }
    ).prototype = new s,
    e.exports = {
        H264Stream: n,
        NalByteStream: r
    }
}
, function(e, t, i) {
    "use strict";
    var n;
    n = function(e) {
        var t = e.byteLength
          , i = 0
          , n = 0;
        this.length = function() {
            return 8 * t
        }
        ,
        this.bitsAvailable = function() {
            return 8 * t + n
        }
        ,
        this.loadWord = function() {
            var r = e.byteLength - t
              , a = new Uint8Array(4)
              , s = Math.min(4, t);
            if (0 === s)
                throw new Error("no bytes available");
            a.set(e.subarray(r, r + s)),
            i = new DataView(a.buffer).getUint32(0),
            n = 8 * s,
            t -= s
        }
        ,
        this.skipBits = function(e) {
            var r;
            n > e ? (i <<= e,
            n -= e) : (e -= n,
            e -= 8 * (r = Math.floor(e / 8)),
            t -= r,
            this.loadWord(),
            i <<= e,
            n -= e)
        }
        ,
        this.readBits = function(e) {
            var r = Math.min(n, e)
              , a = i >>> 32 - r;
            return (n -= r) > 0 ? i <<= r : t > 0 && this.loadWord(),
            (r = e - r) > 0 ? a << r | this.readBits(r) : a
        }
        ,
        this.skipLeadingZeros = function() {
            var e;
            for (e = 0; e < n; ++e)
                if (0 != (i & 2147483648 >>> e))
                    return i <<= e,
                    n -= e,
                    e;
            return this.loadWord(),
            e + this.skipLeadingZeros()
        }
        ,
        this.skipUnsignedExpGolomb = function() {
            this.skipBits(1 + this.skipLeadingZeros())
        }
        ,
        this.skipExpGolomb = function() {
            this.skipBits(1 + this.skipLeadingZeros())
        }
        ,
        this.readUnsignedExpGolomb = function() {
            var e = this.skipLeadingZeros();
            return this.readBits(e + 1) - 1
        }
        ,
        this.readExpGolomb = function() {
            var e = this.readUnsignedExpGolomb();
            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
        }
        ,
        this.readBoolean = function() {
            return 1 === this.readBits(1)
        }
        ,
        this.readUnsignedByte = function() {
            return this.readBits(8)
        }
        ,
        this.loadWord()
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n, r = i(3), a = i(11);
    (n = function() {
        var e = new Uint8Array
          , t = 0;
        n.prototype.init.call(this),
        this.setTimestamp = function(e) {
            t = e
        }
        ,
        this.push = function(i) {
            var n, r, s, o, u = 0, l = 0;
            for (e.length ? (o = e.length,
            (e = new Uint8Array(i.byteLength + o)).set(e.subarray(0, o)),
            e.set(i, o)) : e = i; e.length - l >= 3; )
                if (e[l] !== "I".charCodeAt(0) || e[l + 1] !== "D".charCodeAt(0) || e[l + 2] !== "3".charCodeAt(0))
                    if (255 != (255 & e[l]) || 240 != (240 & e[l + 1]))
                        l++;
                    else {
                        if (e.length - l < 7)
                            break;
                        if (l + (u = a.parseAdtsSize(e, l)) > e.length)
                            break;
                        s = {
                            type: "audio",
                            data: e.subarray(l, l + u),
                            pts: t,
                            dts: t
                        },
                        this.trigger("data", s),
                        l += u
                    }
                else {
                    if (e.length - l < 10)
                        break;
                    if (l + (u = a.parseId3TagSize(e, l)) > e.length)
                        break;
                    r = {
                        type: "timed-metadata",
                        data: e.subarray(l, l + u)
                    },
                    this.trigger("data", r),
                    l += u
                }
            n = e.length - l,
            e = n > 0 ? e.subarray(l) : new Uint8Array
        }
    }
    ).prototype = new r,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var n = i(25).discardEmulationPreventionBytes
      , r = i(24).CaptionStream
      , a = i(4)
      , s = i(68)
      , o = function(e, t) {
        for (var i = e, n = 0; n < t.length; n++) {
            var r = t[n];
            if (i < r.size)
                return r;
            i -= r.size
        }
        return null
    }
      , u = function(e, t) {
        var i = a.findBox(e, ["moof", "traf"])
          , r = a.findBox(e, ["mdat"])
          , u = {}
          , l = [];
        return r.forEach(function(e, t) {
            var n = i[t];
            l.push({
                mdat: e,
                traf: n
            })
        }),
        l.forEach(function(e) {
            var i, r = e.mdat, l = e.traf, c = a.findBox(l, ["tfhd"]), d = s.parseTfhd(c[0]), h = d.trackId, p = a.findBox(l, ["tfdt"]), f = p.length > 0 ? s.parseTfdt(p[0]).baseMediaDecodeTime : 0, m = a.findBox(l, ["trun"]);
            t === h && m.length > 0 && (i = function(e, t, i) {
                var r, a, s, u, l = new DataView(e.buffer,e.byteOffset,e.byteLength), c = [];
                for (a = 0; a + 4 < e.length; a += s)
                    if (s = l.getUint32(a),
                    a += 4,
                    !(s <= 0))
                        switch (31 & e[a]) {
                        case 6:
                            var d = e.subarray(a + 1, a + 1 + s)
                              , h = o(a, t);
                            r = {
                                nalUnitType: "sei_rbsp",
                                size: s,
                                data: d,
                                escapedRBSP: n(d),
                                trackId: i
                            },
                            h ? (r.pts = h.pts,
                            r.dts = h.dts,
                            u = h) : (r.pts = u.pts,
                            r.dts = u.dts),
                            c.push(r)
                        }
                return c
            }(r, function(e, t, i) {
                var n = t
                  , r = i.defaultSampleDuration || 0
                  , a = i.defaultSampleSize || 0
                  , o = i.trackId
                  , u = [];
                return e.forEach(function(e) {
                    var t = s.parseTrun(e).samples;
                    t.forEach(function(e) {
                        void 0 === e.duration && (e.duration = r),
                        void 0 === e.size && (e.size = a),
                        e.trackId = o,
                        e.dts = n,
                        void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
                        e.pts = n + e.compositionTimeOffset,
                        n += e.duration
                    }),
                    u = u.concat(t)
                }),
                u
            }(m, f, d), h),
            u[h] || (u[h] = []),
            u[h] = u[h].concat(i))
        }),
        u
    };
    e.exports = function() {
        var e, t, i, n, a, s = !1;
        this.isInitialized = function() {
            return s
        }
        ,
        this.init = function() {
            e = new r,
            s = !0,
            e.on("data", function(e) {
                e.startTime = e.startPts / n,
                e.endTime = e.endPts / n,
                a.captions.push(e),
                a.captionStreams[e.stream] = !0
            })
        }
        ,
        this.isNewInit = function(e, t) {
            return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || i === e[0] && n === t[i])
        }
        ,
        this.parse = function(e, r, s) {
            var o;
            if (!this.isInitialized())
                return null;
            if (!r || !s)
                return null;
            if (this.isNewInit(r, s))
                i = r[0],
                n = s[i];
            else if (!i || !n)
                return t.push(e),
                null;
            for (; t.length > 0; ) {
                var l = t.shift();
                this.parse(l, r, s)
            }
            return null !== (o = function(e, t, i) {
                return t ? {
                    seiNals: u(e, t)[t],
                    timescale: i
                } : null
            }(e, i, n)) && o.seiNals ? (this.pushNals(o.seiNals),
            this.flushStream(),
            a) : null
        }
        ,
        this.pushNals = function(t) {
            if (!this.isInitialized() || !t || 0 === t.length)
                return null;
            t.forEach(function(t) {
                e.push(t)
            })
        }
        ,
        this.flushStream = function() {
            if (!this.isInitialized())
                return null;
            e.flush()
        }
        ,
        this.clearParsedCaptions = function() {
            a.captions = [],
            a.captionStreams = {}
        }
        ,
        this.resetCaptionStream = function() {
            if (!this.isInitialized())
                return null;
            e.reset()
        }
        ,
        this.clearAllCaptions = function() {
            this.clearParsedCaptions(),
            this.resetCaptionStream()
        }
        ,
        this.reset = function() {
            t = [],
            i = null,
            n = null,
            a ? this.clearParsedCaptions() : a = {
                captions: [],
                captionStreams: {}
            },
            this.resetCaptionStream()
        }
        ,
        this.reset()
    }
}
, function(e, t, i) {
    "use strict";
    var n, r, a = i(4).parseType, s = function(e) {
        return new Date(1e3 * e - 20828448e5)
    }, o = function(e) {
        return {
            isLeading: (12 & e[0]) >>> 2,
            dependsOn: 3 & e[0],
            isDependedOn: (192 & e[1]) >>> 6,
            hasRedundancy: (48 & e[1]) >>> 4,
            paddingValue: (14 & e[1]) >>> 1,
            isNonSyncSample: 1 & e[1],
            degradationPriority: e[2] << 8 | e[3]
        }
    }, u = function(e) {
        var t, i, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = [];
        for (t = 0; t + 4 < e.length; t += i)
            if (i = n.getUint32(t),
            t += 4,
            i <= 0)
                r.push("<span style='color:red;'>MALFORMED DATA</span>");
            else
                switch (31 & e[t]) {
                case 1:
                    r.push("slice_layer_without_partitioning_rbsp");
                    break;
                case 5:
                    r.push("slice_layer_without_partitioning_rbsp_idr");
                    break;
                case 6:
                    r.push("sei_rbsp");
                    break;
                case 7:
                    r.push("seq_parameter_set_rbsp");
                    break;
                case 8:
                    r.push("pic_parameter_set_rbsp");
                    break;
                case 9:
                    r.push("access_unit_delimiter_rbsp");
                    break;
                default:
                    r.push("UNKNOWN NAL - " + e[t] & 31)
                }
        return r
    }, l = {
        avc1: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            return {
                dataReferenceIndex: t.getUint16(6),
                width: t.getUint16(24),
                height: t.getUint16(26),
                horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                frameCount: t.getUint16(40),
                depth: t.getUint16(74),
                config: n(e.subarray(78, e.byteLength))
            }
        },
        avcC: function(e) {
            var t, i, n, r, a = new DataView(e.buffer,e.byteOffset,e.byteLength), s = {
                configurationVersion: e[0],
                avcProfileIndication: e[1],
                profileCompatibility: e[2],
                avcLevelIndication: e[3],
                lengthSizeMinusOne: 3 & e[4],
                sps: [],
                pps: []
            }, o = 31 & e[5];
            for (n = 6,
            r = 0; r < o; r++)
                i = a.getUint16(n),
                n += 2,
                s.sps.push(new Uint8Array(e.subarray(n, n + i))),
                n += i;
            for (t = e[n],
            n++,
            r = 0; r < t; r++)
                i = a.getUint16(n),
                n += 2,
                s.pps.push(new Uint8Array(e.subarray(n, n + i))),
                n += i;
            return s
        },
        btrt: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            return {
                bufferSizeDB: t.getUint32(0),
                maxBitrate: t.getUint32(4),
                avgBitrate: t.getUint32(8)
            }
        },
        esds: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                esId: e[6] << 8 | e[7],
                streamPriority: 31 & e[8],
                decoderConfig: {
                    objectProfileIndication: e[11],
                    streamType: e[12] >>> 2 & 63,
                    bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                    maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                    avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                    decoderConfigDescriptor: {
                        tag: e[24],
                        length: e[25],
                        audioObjectType: e[26] >>> 3 & 31,
                        samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                        channelConfiguration: e[27] >>> 3 & 15
                    }
                }
            }
        },
        ftyp: function(e) {
            for (var t = new DataView(e.buffer,e.byteOffset,e.byteLength), i = {
                majorBrand: a(e.subarray(0, 4)),
                minorVersion: t.getUint32(4),
                compatibleBrands: []
            }, n = 8; n < e.byteLength; )
                i.compatibleBrands.push(a(e.subarray(n, n + 4))),
                n += 4;
            return i
        },
        dinf: function(e) {
            return {
                boxes: n(e)
            }
        },
        dref: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                dataReferences: n(e.subarray(8))
            }
        },
        hdlr: function(e) {
            var t = {
                version: new DataView(e.buffer,e.byteOffset,e.byteLength).getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                handlerType: a(e.subarray(8, 12)),
                name: ""
            }
              , i = 8;
            for (i = 24; i < e.byteLength; i++) {
                if (0 === e[i]) {
                    i++;
                    break
                }
                t.name += String.fromCharCode(e[i])
            }
            return t.name = decodeURIComponent(escape(t.name)),
            t
        },
        mdat: function(e) {
            return {
                byteLength: e.byteLength,
                nals: u(e)
            }
        },
        mdhd: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = 4, r = {
                version: i.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                language: ""
            };
            return 1 === r.version ? (n += 4,
            r.creationTime = s(i.getUint32(n)),
            n += 8,
            r.modificationTime = s(i.getUint32(n)),
            n += 4,
            r.timescale = i.getUint32(n),
            n += 8,
            r.duration = i.getUint32(n)) : (r.creationTime = s(i.getUint32(n)),
            n += 4,
            r.modificationTime = s(i.getUint32(n)),
            n += 4,
            r.timescale = i.getUint32(n),
            n += 4,
            r.duration = i.getUint32(n)),
            n += 4,
            t = i.getUint16(n),
            r.language += String.fromCharCode(96 + (t >> 10)),
            r.language += String.fromCharCode(96 + ((992 & t) >> 5)),
            r.language += String.fromCharCode(96 + (31 & t)),
            r
        },
        mdia: function(e) {
            return {
                boxes: n(e)
            }
        },
        mfhd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
            }
        },
        minf: function(e) {
            return {
                boxes: n(e)
            }
        },
        mp4a: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
              , i = {
                dataReferenceIndex: t.getUint16(6),
                channelcount: t.getUint16(16),
                samplesize: t.getUint16(18),
                samplerate: t.getUint16(24) + t.getUint16(26) / 65536
            };
            return e.byteLength > 28 && (i.streamDescriptor = n(e.subarray(28))[0]),
            i
        },
        moof: function(e) {
            return {
                boxes: n(e)
            }
        },
        moov: function(e) {
            return {
                boxes: n(e)
            }
        },
        mvex: function(e) {
            return {
                boxes: n(e)
            }
        },
        mvhd: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
              , i = 4
              , n = {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4))
            };
            return 1 === n.version ? (i += 4,
            n.creationTime = s(t.getUint32(i)),
            i += 8,
            n.modificationTime = s(t.getUint32(i)),
            i += 4,
            n.timescale = t.getUint32(i),
            i += 8,
            n.duration = t.getUint32(i)) : (n.creationTime = s(t.getUint32(i)),
            i += 4,
            n.modificationTime = s(t.getUint32(i)),
            i += 4,
            n.timescale = t.getUint32(i),
            i += 4,
            n.duration = t.getUint32(i)),
            i += 4,
            n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16,
            i += 4,
            n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
            i += 2,
            i += 2,
            i += 8,
            n.matrix = new Uint32Array(e.subarray(i, i + 36)),
            i += 36,
            i += 24,
            n.nextTrackId = t.getUint32(i),
            n
        },
        pdin: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            return {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                rate: t.getUint32(4),
                initialDelay: t.getUint32(8)
            }
        },
        sdtp: function(e) {
            var t, i = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                samples: []
            };
            for (t = 4; t < e.byteLength; t++)
                i.samples.push({
                    dependsOn: (48 & e[t]) >> 4,
                    isDependedOn: (12 & e[t]) >> 2,
                    hasRedundancy: 3 & e[t]
                });
            return i
        },
        sidx: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                references: [],
                referenceId: i.getUint32(4),
                timescale: i.getUint32(8),
                earliestPresentationTime: i.getUint32(12),
                firstOffset: i.getUint32(16)
            }, r = i.getUint16(22);
            for (t = 24; r; t += 12,
            r--)
                n.references.push({
                    referenceType: (128 & e[t]) >>> 7,
                    referencedSize: 2147483647 & i.getUint32(t),
                    subsegmentDuration: i.getUint32(t + 4),
                    startsWithSap: !!(128 & e[t + 8]),
                    sapType: (112 & e[t + 8]) >>> 4,
                    sapDeltaTime: 268435455 & i.getUint32(t + 8)
                });
            return n
        },
        smhd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                balance: e[4] + e[5] / 256
            }
        },
        stbl: function(e) {
            return {
                boxes: n(e)
            }
        },
        stco: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                chunkOffsets: []
            }, r = i.getUint32(4);
            for (t = 8; r; t += 4,
            r--)
                n.chunkOffsets.push(i.getUint32(t));
            return n
        },
        stsc: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = i.getUint32(4), r = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleToChunks: []
            };
            for (t = 8; n; t += 12,
            n--)
                r.sampleToChunks.push({
                    firstChunk: i.getUint32(t),
                    samplesPerChunk: i.getUint32(t + 4),
                    sampleDescriptionIndex: i.getUint32(t + 8)
                });
            return r
        },
        stsd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleDescriptions: n(e.subarray(8))
            }
        },
        stsz: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleSize: i.getUint32(4),
                entries: []
            };
            for (t = 12; t < e.byteLength; t += 4)
                n.entries.push(i.getUint32(t));
            return n
        },
        stts: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                timeToSamples: []
            }, r = i.getUint32(4);
            for (t = 8; r; t += 8,
            r--)
                n.timeToSamples.push({
                    sampleCount: i.getUint32(t),
                    sampleDelta: i.getUint32(t + 4)
                });
            return n
        },
        styp: function(e) {
            return l.ftyp(e)
        },
        tfdt: function(e) {
            var t = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                baseMediaDecodeTime: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
            };
            return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32),
            t.baseMediaDecodeTime += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]),
            t
        },
        tfhd: function(e) {
            var t, i = new DataView(e.buffer,e.byteOffset,e.byteLength), n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                trackId: i.getUint32(4)
            }, r = 1 & n.flags[2], a = 2 & n.flags[2], s = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0];
            return t = 8,
            r && (t += 4,
            n.baseDataOffset = i.getUint32(12),
            t += 4),
            a && (n.sampleDescriptionIndex = i.getUint32(t),
            t += 4),
            s && (n.defaultSampleDuration = i.getUint32(t),
            t += 4),
            o && (n.defaultSampleSize = i.getUint32(t),
            t += 4),
            u && (n.defaultSampleFlags = i.getUint32(t)),
            l && (n.durationIsEmpty = !0),
            !r && c && (n.baseDataOffsetIsMoof = !0),
            n
        },
        tkhd: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
              , i = 4
              , n = {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4))
            };
            return 1 === n.version ? (i += 4,
            n.creationTime = s(t.getUint32(i)),
            i += 8,
            n.modificationTime = s(t.getUint32(i)),
            i += 4,
            n.trackId = t.getUint32(i),
            i += 4,
            i += 8,
            n.duration = t.getUint32(i)) : (n.creationTime = s(t.getUint32(i)),
            i += 4,
            n.modificationTime = s(t.getUint32(i)),
            i += 4,
            n.trackId = t.getUint32(i),
            i += 4,
            i += 4,
            n.duration = t.getUint32(i)),
            i += 4,
            i += 8,
            n.layer = t.getUint16(i),
            i += 2,
            n.alternateGroup = t.getUint16(i),
            i += 2,
            n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
            i += 2,
            i += 2,
            n.matrix = new Uint32Array(e.subarray(i, i + 36)),
            i += 36,
            n.width = t.getUint16(i) + t.getUint16(i + 2) / 16,
            i += 4,
            n.height = t.getUint16(i) + t.getUint16(i + 2) / 16,
            n
        },
        traf: function(e) {
            return {
                boxes: n(e)
            }
        },
        trak: function(e) {
            return {
                boxes: n(e)
            }
        },
        trex: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                trackId: t.getUint32(4),
                defaultSampleDescriptionIndex: t.getUint32(8),
                defaultSampleDuration: t.getUint32(12),
                defaultSampleSize: t.getUint32(16),
                sampleDependsOn: 3 & e[20],
                sampleIsDependedOn: (192 & e[21]) >> 6,
                sampleHasRedundancy: (48 & e[21]) >> 4,
                samplePaddingValue: (14 & e[21]) >> 1,
                sampleIsDifferenceSample: !!(1 & e[21]),
                sampleDegradationPriority: t.getUint16(22)
            }
        },
        trun: function(e) {
            var t, i = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                samples: []
            }, n = new DataView(e.buffer,e.byteOffset,e.byteLength), r = 1 & i.flags[2], a = 4 & i.flags[2], s = 1 & i.flags[1], u = 2 & i.flags[1], l = 4 & i.flags[1], c = 8 & i.flags[1], d = n.getUint32(4), h = 8;
            for (r && (i.dataOffset = n.getInt32(h),
            h += 4),
            a && d && (t = {
                flags: o(e.subarray(h, h + 4))
            },
            h += 4,
            s && (t.duration = n.getUint32(h),
            h += 4),
            u && (t.size = n.getUint32(h),
            h += 4),
            c && (t.compositionTimeOffset = n.getUint32(h),
            h += 4),
            i.samples.push(t),
            d--); d--; )
                t = {},
                s && (t.duration = n.getUint32(h),
                h += 4),
                u && (t.size = n.getUint32(h),
                h += 4),
                l && (t.flags = o(e.subarray(h, h + 4)),
                h += 4),
                c && (t.compositionTimeOffset = n.getUint32(h),
                h += 4),
                i.samples.push(t);
            return i
        },
        "url ": function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4))
            }
        },
        vmhd: function(e) {
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                graphicsmode: t.getUint16(4),
                opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
            }
        }
    };
    n = function(e) {
        for (var t, i, n, r, s, o = 0, u = [], c = new ArrayBuffer(e.length), d = new Uint8Array(c), h = 0; h < e.length; ++h)
            d[h] = e[h];
        for (t = new DataView(c); o < e.byteLength; )
            i = t.getUint32(o),
            n = a(e.subarray(o + 4, o + 8)),
            r = i > 1 ? o + i : e.byteLength,
            (s = (l[n] || function(e) {
                return {
                    data: e
                }
            }
            )(e.subarray(o + 8, r))).size = i,
            s.type = n,
            u.push(s),
            o = r;
        return u
    }
    ,
    r = function(e, t) {
        var i;
        return t = t || 0,
        i = new Array(2 * t + 1).join(" "),
        e.map(function(e, n) {
            return i + e.type + "\n" + Object.keys(e).filter(function(e) {
                return "type" !== e && "boxes" !== e
            }).map(function(t) {
                var n = i + "  " + t + ": "
                  , r = e[t];
                if (r instanceof Uint8Array || r instanceof Uint32Array) {
                    var a = Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map(function(e) {
                        return " " + ("00" + e.toString(16)).slice(-2)
                    }).join("").match(/.{1,24}/g);
                    return a ? 1 === a.length ? n + "<" + a.join("").slice(1) + ">" : n + "<\n" + a.map(function(e) {
                        return i + "  " + e
                    }).join("\n") + "\n" + i + "  >" : n + "<>"
                }
                return n + JSON.stringify(r, null, 2).split("\n").map(function(e, t) {
                    return 0 === t ? e : i + "  " + e
                }).join("\n")
            }).join("\n") + (e.boxes ? "\n" + r(e.boxes, t + 1) : "")
        }).join("\n")
    }
    ,
    e.exports = {
        inspect: n,
        textify: r,
        parseTfdt: l.tfdt,
        parseHdlr: l.hdlr,
        parseTfhd: l.tfhd,
        parseTrun: l.trun,
        parseSidx: l.sidx
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(6)
      , r = function(e) {
        var t = 31 & e[1];
        return t <<= 8,
        t |= e[2]
    }
      , a = function(e) {
        return !!(64 & e[1])
    }
      , s = function(e) {
        var t = 0;
        return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1),
        t
    }
      , o = function(e) {
        switch (e) {
        case 5:
            return "slice_layer_without_partitioning_rbsp_idr";
        case 6:
            return "sei_rbsp";
        case 7:
            return "seq_parameter_set_rbsp";
        case 8:
            return "pic_parameter_set_rbsp";
        case 9:
            return "access_unit_delimiter_rbsp";
        default:
            return null
        }
    };
    e.exports = {
        parseType: function(e, t) {
            var i = r(e);
            return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null
        },
        parsePat: function(e) {
            var t = a(e)
              , i = 4 + s(e);
            return t && (i += e[i] + 1),
            (31 & e[i + 10]) << 8 | e[i + 11]
        },
        parsePmt: function(e) {
            var t = {}
              , i = a(e)
              , n = 4 + s(e);
            if (i && (n += e[n] + 1),
            1 & e[n + 5]) {
                var r;
                r = 3 + ((15 & e[n + 1]) << 8 | e[n + 2]) - 4;
                for (var o = 12 + ((15 & e[n + 10]) << 8 | e[n + 11]); o < r; ) {
                    var u = n + o;
                    t[(31 & e[u + 1]) << 8 | e[u + 2]] = e[u],
                    o += 5 + ((15 & e[u + 3]) << 8 | e[u + 4])
                }
                return t
            }
        },
        parsePayloadUnitStartIndicator: a,
        parsePesType: function(e, t) {
            switch (t[r(e)]) {
            case n.H264_STREAM_TYPE:
                return "video";
            case n.ADTS_STREAM_TYPE:
                return "audio";
            case n.METADATA_STREAM_TYPE:
                return "timed-metadata";
            default:
                return null
            }
        },
        parsePesTime: function(e) {
            if (!a(e))
                return null;
            var t = 4 + s(e);
            if (t >= e.byteLength)
                return null;
            var i, n = null;
            return 192 & (i = e[t + 7]) && ((n = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3,
            n.pts *= 4,
            n.pts += (6 & e[t + 13]) >>> 1,
            n.dts = n.pts,
            64 & i && (n.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3,
            n.dts *= 4,
            n.dts += (6 & e[t + 18]) >>> 1)),
            n
        },
        videoPacketContainsKeyFrame: function(e) {
            for (var t = 4 + s(e), i = e.subarray(t), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
                if (1 === i[r + 2]) {
                    n = r + 5;
                    break
                }
            for (; n < i.byteLength; )
                switch (i[n]) {
                case 0:
                    if (0 !== i[n - 1]) {
                        n += 2;
                        break
                    }
                    if (0 !== i[n - 2]) {
                        n++;
                        break
                    }
                    r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0);
                    do {
                        n++
                    } while (1 !== i[n] && n < i.length);
                    r = n - 2,
                    n += 3;
                    break;
                case 1:
                    if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                        n += 3;
                        break
                    }
                    "slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0),
                    r = n - 2,
                    n += 3;
                    break;
                default:
                    n += 3
                }
            return i = i.subarray(r),
            n -= r,
            r = 0,
            i && i.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === o(31 & i[r + 3]) && (a = !0),
            a
        }
    }
}
, function(e, t, i) {
    e.exports = function(e) {
        var t = {};
        function i(n) {
            if (t[n])
                return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
        }
        return i.m = e,
        i.c = t,
        i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        i.t = function(e, t) {
            if (1 & t && (e = i(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    i.d(n, r, function(t) {
                        return e[t]
                    }
                    .bind(null, r));
            return n
        }
        ,
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return i.d(t, "a", t),
            t
        }
        ,
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        i.p = "",
        i(i.s = "./src/DisableProgressBar.js")
    }({
        "./src/DisableProgressBar.js": function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("video.js")
              , r = i.n(n);
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function s(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function o(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function u(e, t, i) {
                return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                    var n = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)); )
                            ;
                        return e
                    }(e, t);
                    if (n) {
                        var r = Object.getOwnPropertyDescriptor(n, t);
                        return r.get ? r.get.call(i) : r.value
                    }
                }
                )(e, t, i || e)
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            var d = r.a.getPlugin("plugin")
              , h = function(e) {
                function t(e) {
                    var i;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    (i = o(this, l(t).call(this, e))).state = !1,
                    i
                }
                var i, n, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && c(e, t)
                }(t, d),
                i = t,
                (n = [{
                    key: "disable",
                    value: function() {
                        this.state = !0,
                        this.player.controlBar.progressControl.disable(),
                        this.player.controlBar.progressControl.seekBar.off("mousedown"),
                        this.player.controlBar.progressControl.seekBar.off("mouseup"),
                        this.player.controlBar.progressControl.seekBar.off("touchstart"),
                        this.player.controlBar.progressControl.seekBar.off("touchend"),
                        this.player.controlBar.progressControl.seekBar.off("click")
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.state = !1,
                        this.player.controlBar.progressControl.enable(),
                        this.player.controlBar.progressControl.seekBar.on("mousedown", this.player.controlBar.progressControl.seekBar.handleMouseDown),
                        this.player.controlBar.progressControl.seekBar.on("mouseup", this.player.controlBar.progressControl.seekBar.handleMouseUp),
                        this.player.controlBar.progressControl.seekBar.on("touchstart", this.player.controlBar.progressControl.seekBar.handleMouseDown),
                        this.player.controlBar.progressControl.seekBar.on("touchend", this.player.controlBar.progressControl.seekBar.handleMouseUp),
                        this.player.controlBar.progressControl.seekBar.on("click", this.player.controlBar.progressControl.seekBar.handleClick)
                    }
                }, {
                    key: "getState",
                    value: function() {
                        return this.state
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        u(l(t.prototype), "dispose", this).call(this),
                        r.a.log("the DisableProgressBar plugin is being disposed")
                    }
                }]) && s(i.prototype, n),
                a && s(i, a),
                t
            }();
            r.a.registerPlugin("DisableProgressBar", h)
        },
        "video.js": function(e, t) {
            e.exports = i(12)
        }
    })
}
, , , , , , , function(e, t) {}
]);
