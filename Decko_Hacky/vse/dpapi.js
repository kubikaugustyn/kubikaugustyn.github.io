!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("dpapi", [], t) : "object" == typeof exports ? exports.dpapi = t() : e.dpapi = t()
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 23)
    }([function (e, t, n) {
        "use strict";
        var r = n(10),
            o = Object.prototype.toString;

        function i(e) {
            return "[object Array]" === o.call(e)
        }

        function u(e) {
            return void 0 === e
        }

        function a(e) {
            return null !== e && "object" == typeof e
        }

        function c(e) {
            return "[object Function]" === o.call(e)
        }

        function s(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), i(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }

        e.exports = {
            isArray: i,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function (e) {
                return null !== e && !u(e) && null !== e.constructor && !u(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function (e) {
                return "string" == typeof e
            },
            isNumber: function (e) {
                return "number" == typeof e
            },
            isObject: a,
            isUndefined: u,
            isDate: function (e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function (e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function (e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function (e) {
                return a(e) && c(e.pipe)
            },
            isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: s,
            merge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
                }

                for (var r = 0, o = arguments.length; r < o; r++) s(arguments[r], n);
                return t
            },
            deepMerge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
                }

                for (var r = 0, o = arguments.length; r < o; r++) s(arguments[r], n);
                return t
            },
            extend: function (e, t, n) {
                return s(t, (function (t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                })), e
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return b
        })), n.d(t, "p", (function () {
            return y
        })), n.d(t, "g", (function () {
            return _
        })), n.d(t, "i", (function () {
            return w
        })), n.d(t, "h", (function () {
            return S
        })), n.d(t, "c", (function () {
            return k
        })), n.d(t, "f", (function () {
            return x
        })), n.d(t, "o", (function () {
            return E
        })), n.d(t, "j", (function () {
            return A
        })), n.d(t, "d", (function () {
            return C
        })), n.d(t, "k", (function () {
            return T
        })), n.d(t, "l", (function () {
            return R
        })), n.d(t, "n", (function () {
            return P
        })), n.d(t, "b", (function () {
            return j
        })), n.d(t, "e", (function () {
            return O
        })), n.d(t, "m", (function () {
            return N
        }));
        var r = n(22),
            o = n.n(r),
            i = n(7),
            u = n.n(i),
            a = n(6),
            c = n.n(a),
            s = n(21),
            f = n(3),
            l = n.n(f),
            d = n(5),
            p = n.n(d),
            h = n(4),
            g = p()("lapi");
        g.level = p.a.DEBUG;
        var v = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = e.data.bodies[0].targetURI;
                g.log(n + " REQUEST", e);
                var r = t || l.a;
                return r(e).catch((function (e) {
                    var t;
                    return t = e.response ? e.response.status : e.request ? e.request.status : 1, Promise.reject(new h.a(e.message, t))
                })).then((function (e) {
                    var t = c()(null, ["data", "bodies", 0, "data", 0], e),
                        r = e.status,
                        o = e.statusText,
                        i = t.code,
                        a = t.message,
                        s = u()("status", t);
                    return g.log(n, "SUCCESS complete result ", {
                        RESPONSE_HTTP_STATUS: r,
                        RESPONSE_HTTP_STATUS_TEXT: o,
                        RESPONSE_DATA: t,
                        RESPONSE_DATA_CODE: i,
                        RESPONSE_DATA_MESSAGE: a,
                        RESPONSE_DATA_STATUS: s
                    }), 400 === i ? Promise.reject(new h.a(a, i)) : !s || "ERROR" !== s && "FAIL" !== s ? t : Promise.reject(new h.a("request status ".concat(s), 2))
                }))
            },
            m = function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "post",
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "3";
                return {
                    method: o,
                    // url: "".concat(r, "/rest/").concat(e, "/amfJson"),
                    url: "https://cors-anywhere.herokuapp.com/https://decko.ceskatelevize.cz".concat(r, "/rest/").concat(e, "/amfJson"),
                    headers: {
                        "content-type": "application/json; charset=utf-8"
                    },
                    data: {
                        version: i,
                        headers: [],
                        bodies: [{
                            targetURI: t,
                            responseURI: "/1",
                            data: [n]
                        }]
                    }
                }
            },
            b = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("Token", "createToken", {
                        appUuid: e
                    }, t);
                return v(r, n)
            },
            y = function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    i = m("Token", "login", {
                        login: e,
                        password: t,
                        token: n
                    }, r);
                return v(i, o)
            },
            _ = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("Token", "getStatus", {
                        token: e
                    }, t);
                return v(r, n)
            },
            w = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("Token", "killToken", {
                        token: e
                    }, t);
                return v(r, n)
            },
            S = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return _(e, t, n).then((function (e) {
                    return "alive" === u()("tokenStatus", e)
                }))
            },
            k = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("AppConfig", "getAppConfig", {
                        token: e
                    }, t);
                return v(r, n)
            },
            x = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("ServerStatus", "getServerStatus", {
                        token: e
                    }, t);
                return v(r, n)
            },
            E = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = m("Contest", "submitContestCode", {
                        token: t,
                        contestCode: e
                    }, n);
                return v(o, r)
            },
            A = function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    u = m("AppState", "loadAppState", {
                        token: n,
                        slotNumber: e,
                        resourceName: t
                    }, r);
                return v(u, i).then((function (e) {
                    var t = o()(null, "state", e);
                    return t ? JSON.parse(s.Base64.decode(t)) : null
                }))
            },
            C = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("AppState", "getAppStates", {
                        token: e
                    }, t);
                return v(r, n)
            },
            T = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = m("AppState", "removeAppState", {
                        token: t,
                        slotNumber: e
                    }, n);
                return v(o, r)
            },
            R = function (e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    u = m("AppState", "saveAppState", {
                        token: r,
                        slotNumber: e,
                        metaData: t,
                        data: n
                    }, o);
                return v(u, i)
            },
            P = function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    i = m("Message", "sendMessage", {
                        token: n,
                        messageTypeUiud: e,
                        params: t
                    }, r);
                return v(i, o)
            },
            j = function (e, t, n, r, o) {
                var i = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                    u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                    a = arguments.length > 7 ? arguments[7] : void 0,
                    c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "",
                    s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                    f = m("Profile", "createUserProfile", {
                        token: a,
                        login: e,
                        password: t,
                        email: n,
                        gender: r,
                        schoolClass: o,
                        newsletterSubscribe: !!i,
                        personalInfoAgreement: !!u
                    }, c);
                return v(f, s)
            },
            O = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = m("Ranking", "getRanking", {
                        token: e
                    }, t);
                return v(r, n)
            },
            N = function (e, t, n, r, o, i, u) {
                var a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "",
                    c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                    s = m("Ranking", "saveRank", {
                        token: u,
                        slotNumber: e,
                        score: t,
                        time: n,
                        finished: !!r,
                        answer: o,
                        level: i
                    }, a);
                return v(s, c)
            }
    }, function (e, t, n) {
        var r = n(19),
            o = n(9);
        e.exports = function (e) {
            return function t(n, i) {
                switch (arguments.length) {
                    case 0:
                        return t;
                    case 1:
                        return o(n) ? t : r((function (t) {
                            return e(n, t)
                        }));
                    default:
                        return o(n) && o(i) ? t : o(n) ? r((function (t) {
                            return e(t, i)
                        })) : o(i) ? r((function (t) {
                            return e(n, t)
                        })) : e(n, i)
                }
            }
        }
    }, function (e, t, n) {
        e.exports = n(25)
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }

        function a(e) {
            return function () {
                var t, n = h(e);
                if (d()) {
                    var r = h(this).constructor;
                    t = Reflect.construct(n, arguments, r)
                } else t = n.apply(this, arguments);
                return c(this, t)
            }
        }

        function c(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? s(e) : t
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function f(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (f = function (e) {
                if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                var n;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return l(e, arguments, h(this).constructor)
                }

                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), p(r, e)
            })(e)
        }

        function l(e, t, n) {
            return (l = d() ? Reflect.construct : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r));
                return n && p(o, n.prototype), o
            }).apply(null, arguments)
        }

        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        n.d(t, "a", (function () {
            return g
        }));
        var g = function (e) {
            u(c, e);
            var t, n, o = a(c);

            function c(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return i(this, c), (t = o.call(this, e)).code = n, t
            }

            return t = c, (n = [{
                key: "toString",
                value: function () {
                    return this.getPrettyMessage()
                }
            }, {
                key: "getPrettyMessage",
                value: function () {
                    return "".concat(this.name, " ").concat(this.message, " Code: ").concat(this.code, ".")
                }
            }]) && r(t.prototype, n), c
        }(function (e) {
            u(n, e);
            var t = a(n);

            function n(e) {
                var r;
                return i(this, n), (r = t.call(this, e)).name = r.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(s(r), r.constructor) : r.stack = new Error(e).stack, r
            }

            return n
        }(f(Error)))
    }, function (e, t, n) {
        var r, o, i, u, a = n(24),
            c = location.search.substring(1),
            s = c && c.split("&");
        try {
            r = localStorage.getItem("log"), o = localStorage.getItem("debug")
        } catch (e) {
        }
        for (i = 0; u = s && s[i] && s[i].split("="); i++) "log" == u[0] && (r = u[1]), "debug" == u[0] && (o = u[1]);
        a.con = function () {
            return window.console
        }, o && a.enable(o), a(), a.level = r || a.WARN, e.exports = a
    }, function (e, t, n) {
        var r = n(18),
            o = n(43),
            i = n(20),
            u = r((function (e, t, n) {
                return o(e, i(t, n))
            }));
        e.exports = u
    }, function (e, t, n) {
        var r = n(2),
            o = n(20),
            i = r((function (e, t) {
                return o([e], t)
            }));
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return v
        }));
        var r = n(7),
            o = n.n(r),
            i = n(6),
            u = n.n(i),
            a = n(5),
            c = n.n(a),
            s = n(4);
        n.d(t, "a", (function () {
            return s.a
        }));
        var f = n(3),
            l = n.n(f),
            d = n(1);

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var h = c()("hapi");
        h.level = c.a.DEBUG;
        var g = "//".concat(window.location.host),
            v = function () {
                function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h.log("Creating api instance baseUrl: ".concat(t, ", appUuid: ").concat(n)), this._baseUrl = t, this._appUuid = n, this._refreshPromise = null, t || h.warn("Using fallback baseUrl :".concat(g)), this._axios = l.a.create({
                        baseURL: t || g
                    })
                }

                var t, n;
                return t = e, (n = [{
                    key: "_expireToken",
                    value: function () {
                        h.log("H EXPIRE token"), this._refreshPromise = null
                    }
                }, {
                    key: "_withToken",
                    value: function (e) {
                        var t = this;
                        return function () {
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            if (h.log("_withToken", e), h.log(t.debugMessage, r), t._refreshPromise) return t._refreshPromise.then((function (n) {
                                return h.warn("tokenLogin trying to use saved token ".concat(n)), e.apply(void 0, r.concat([n, "", t._axios]))
                            }));
                            throw h.log("_withToken throwing error..."), new Error("_withToken - token needs to be provided")
                        }
                    }
                }, {
                    key: "createTokenCall",
                    value: function () {
                        return d.a(this._appUuid, "", this._axios)
                    }
                }, {
                    key: "getNewToken",
                    value: function () {
                        return this.createTokenCall().then((function (e) {
                            var t = u()(null, ["flashvars", "token"], e);
                            return h.log("getNewToken - Retrieved access token: ".concat(t)), t
                        }))
                    }
                }, {
                    key: "getToken",
                    value: function () {
                        var e = this;
                        return this._refreshPromise ? (h.log("getToken - returning saved token"), this._refreshPromise) : (h.log("getToken - creating refresh promise"), this._refreshPromise = this.getNewToken().then((function (e) {
                            return h.log("getToken - Retrieved new access token: ".concat(e)), e
                        })).catch((function (t) {
                            h.error("getToken - Could not retrieve new token with error.", t), e._expireToken(), Promise.reject(t)
                        })), this._refreshPromise)
                    }
                }, {
                    key: "tokenLogin",
                    value: function (e, t) {
                        var n = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (r) {
                            return h.warn("tokenLogin trying to use saved token ".concat(r)), d.p(e, t, r, "", n._axios)
                        }));
                        throw new Error("tokenLogin - token must be provided")
                    }
                }, {
                    key: "getStatus",
                    value: function () {
                        var e = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (t) {
                            return h.warn("getStatus trying to use saved token ".concat(t)), d.g(t, "", e._axios)
                        }));
                        throw new Error("getStatus - token must be provided")
                    }
                }, {
                    key: "killToken",
                    value: function () {
                        var e = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (t) {
                            return h.warn("killToken trying to use saved token ".concat(t)), d.i(t, "", e._axios)
                        }));
                        throw new Error("killToken - token musto be provided")
                    }
                }, {
                    key: "isTokenAlive",
                    value: function () {
                        return this.getStatus().then((function (e) {
                            return "alive" === o()("tokenStatus", e)
                        }))
                    }
                }, {
                    key: "getAppConfig",
                    value: function () {
                        var e = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (t) {
                            return h.warn("getStatus trying to use saved token ".concat(t)), d.c(t, "", e._axios)
                        }));
                        throw new Error("getStatus - token must be provided")
                    }
                }, {
                    key: "getServerStatus",
                    value: function () {
                        var e = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (t) {
                            return h.warn("getStatus trying to use saved token ".concat(t)), d.f(t, "", e._axios)
                        }));
                        throw new Error("getStatus - token must be provided")
                    }
                }, {
                    key: "sendMessage",
                    value: function (e, t) {
                        var n = this;
                        if (this._refreshPromise) return this._refreshPromise.then((function (r) {
                            return h.warn("sendMessage trying to use saved token ".concat(r)), d.n(e, t, r, "", n._axios)
                        }));
                        throw new Error("getStatus - token must be provided")
                    }
                }]) && p(t.prototype, n), e
            }()
    }, function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        e.exports = function (e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (r.isURLSearchParams(t)) i = t.toString();
            else {
                var u = [];
                r.forEach(t, (function (e, t) {
                    null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), u.push(o(t) + "=" + o(e))
                    })))
                })), i = u.join("&")
            }
            if (i) {
                var a = e.indexOf("#");
                -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, n) {
        "use strict";
        (function (t) {
            var r = n(0),
                o = n(31),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function u(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }

            var a, c = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (a = n(14)), a),
                transformRequest: [function (e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (u(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function (e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], (function (e) {
                c.headers[e] = {}
            })), r.forEach(["post", "put", "patch"], (function (e) {
                c.headers[e] = r.merge(i)
            })), e.exports = c
        }).call(this, n(30))
    }, function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(32),
            i = n(11),
            u = n(34),
            a = n(37),
            c = n(38),
            s = n(15);
        e.exports = function (e) {
            return new Promise((function (t, f) {
                var l = e.data,
                    d = e.headers;
                r.isFormData(l) && delete d["Content-Type"];
                var p = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        g = e.auth.password || "";
                    d.Authorization = "Basic " + btoa(h + ":" + g)
                }
                var v = u(e.baseURL, e.url);
                if (p.open(e.method.toUpperCase(), i(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: n,
                                config: e,
                                request: p
                            };
                        o(t, f, r), p = null
                    }
                }, p.onabort = function () {
                    p && (f(s("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function () {
                    f(s("Network Error", e, null, p)), p = null
                }, p.ontimeout = function () {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(s(t, e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                    var m = n(39),
                        b = (e.withCredentials || c(v)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                    b && (d[e.xsrfHeaderName] = b)
                }
                if ("setRequestHeader" in p && r.forEach(d, (function (e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                    p.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) {
                    p && (p.abort(), f(e), p = null)
                })), void 0 === l && (l = null), p.send(l)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(33);
        e.exports = function (e, t, n, o, i) {
            var u = new Error(e);
            return r(u, t, n, o, i)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t) {
            t = t || {};
            var n = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                u = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            r.forEach(o, (function (e) {
                void 0 !== t[e] && (n[e] = t[e])
            })), r.forEach(i, (function (o) {
                r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : void 0 !== t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : void 0 !== e[o] && (n[o] = e[o])
            })), r.forEach(u, (function (r) {
                void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
            }));
            var a = o.concat(i).concat(u),
                c = Object.keys(t).filter((function (e) {
                    return -1 === a.indexOf(e)
                }));
            return r.forEach(c, (function (r) {
                void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
            })), n
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }

        r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function (e, t, n) {
        var r = n(19),
            o = n(2),
            i = n(9);
        e.exports = function (e) {
            return function t(n, u, a) {
                switch (arguments.length) {
                    case 0:
                        return t;
                    case 1:
                        return i(n) ? t : o((function (t, r) {
                            return e(n, t, r)
                        }));
                    case 2:
                        return i(n) && i(u) ? t : i(n) ? o((function (t, n) {
                            return e(t, u, n)
                        })) : i(u) ? o((function (t, r) {
                            return e(n, t, r)
                        })) : r((function (t) {
                            return e(n, u, t)
                        }));
                    default:
                        return i(n) && i(u) && i(a) ? t : i(n) && i(u) ? o((function (t, n) {
                            return e(t, n, a)
                        })) : i(n) && i(a) ? o((function (t, n) {
                            return e(t, u, n)
                        })) : i(u) && i(a) ? o((function (t, r) {
                            return e(n, t, r)
                        })) : i(n) ? r((function (t) {
                            return e(t, u, a)
                        })) : i(u) ? r((function (t) {
                            return e(n, t, a)
                        })) : i(a) ? r((function (t) {
                            return e(n, u, t)
                        })) : e(n, u, a)
                }
            }
        }
    }, function (e, t, n) {
        var r = n(9);
        e.exports = function (e) {
            return function t(n) {
                return 0 === arguments.length || r(n) ? t : e.apply(this, arguments)
            }
        }
    }, function (e, t, n) {
        var r = n(2),
            o = n(44),
            i = r((function (e, t) {
                return o([e], t)[0]
            }));
        e.exports = i
    }, function (module, exports, __webpack_require__) {
        (function (global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !function (e, t) {
                module.exports = t(e)
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : this, (function (global) {
                "use strict";
                global = global || {};
                var _Base64 = global.Base64,
                    version = "2.5.2",
                    buffer;
                if (module.exports) try {
                    buffer = eval("require('buffer').Buffer")
                } catch (e) {
                    buffer = void 0
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    b64tab = function (e) {
                        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
                        return t
                    }(b64chars),
                    fromCharCode = String.fromCharCode,
                    cb_utob = function (e) {
                        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                        return fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t)
                    },
                    re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                    utob = function (e) {
                        return e.replace(re_utob, cb_utob)
                    },
                    cb_encode = function (e) {
                        var t = [0, 2, 1][e.length % 3],
                            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                        return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(63 & n)].join("")
                    },
                    btoa = global.btoa ? function (e) {
                        return global.btoa(e)
                    } : function (e) {
                        return e.replace(/[\s\S]{1,3}/g, cb_encode)
                    },
                    _encode = function (e) {
                        return "[object Uint8Array]" === Object.prototype.toString.call(e) ? e.toString("base64") : btoa(utob(String(e)))
                    },
                    encode = function (e, t) {
                        return t ? _encode(String(e)).replace(/[+\/]/g, (function (e) {
                            return "+" == e ? "-" : "_"
                        })).replace(/=/g, "") : _encode(e)
                    },
                    encodeURI = function (e) {
                        return encode(e, !0)
                    },
                    re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                    cb_btou = function (e) {
                        switch (e.length) {
                            case 4:
                                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                return fromCharCode(55296 + (t >>> 10)) + fromCharCode(56320 + (1023 & t));
                            case 3:
                                return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                            default:
                                return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                        }
                    },
                    btou = function (e) {
                        return e.replace(re_btou, cb_btou)
                    },
                    cb_decode = function (e) {
                        var t = e.length,
                            n = t % 4,
                            r = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0),
                            o = [fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r)];
                        return o.length -= [0, 0, 2, 1][n], o.join("")
                    },
                    _atob = global.atob ? function (e) {
                        return global.atob(e)
                    } : function (e) {
                        return e.replace(/\S{1,4}/g, cb_decode)
                    },
                    atob = function (e) {
                        return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    },
                    _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (e) {
                        return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString()
                    } : function (e) {
                        return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString()
                    } : function (e) {
                        return btou(_atob(e))
                    },
                    decode = function (e) {
                        return _decode(String(e).replace(/[-_]/g, (function (e) {
                            return "-" == e ? "+" : "/"
                        })).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    },
                    noConflict = function () {
                        var e = global.Base64;
                        return global.Base64 = _Base64, e
                    };
                if (global.Base64 = {
                    VERSION: version,
                    atob: atob,
                    btoa: btoa,
                    fromBase64: decode,
                    toBase64: encode,
                    utob: utob,
                    encode: encode,
                    encodeURI: encodeURI,
                    btou: btou,
                    decode: decode,
                    noConflict: noConflict,
                    __buffer__: buffer
                }, "function" == typeof Object.defineProperty) {
                    var noEnum = function (e) {
                        return {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    };
                    global.Base64.extendString = function () {
                        Object.defineProperty(String.prototype, "fromBase64", noEnum((function () {
                            return decode(this)
                        }))), Object.defineProperty(String.prototype, "toBase64", noEnum((function (e) {
                            return encode(this, e)
                        }))), Object.defineProperty(String.prototype, "toBase64URI", noEnum((function () {
                            return encode(this, !0)
                        })))
                    }
                }
                return global.Meteor && (Base64 = global.Base64), module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return global.Base64
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), {
                    Base64: global.Base64
                }
            }))
        }).call(this, __webpack_require__(42))
    }, function (e, t, n) {
        var r = n(18),
            o = n(6),
            i = r((function (e, t, n) {
                return o(e, [t], n)
            }));
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(8);
        n.d(t, "Hapi", (function () {
            return r.b
        })), n.d(t, "ApiError", (function () {
            return r.a
        }));
        var o = n(1);
        n.d(t, "createToken", (function () {
            return o.a
        })), n.d(t, "tokenLogin", (function () {
            return o.p
        })), n.d(t, "getStatus", (function () {
            return o.g
        })), n.d(t, "killToken", (function () {
            return o.i
        })), n.d(t, "isTokenAlive", (function () {
            return o.h
        })), n.d(t, "getAppConfig", (function () {
            return o.c
        })), n.d(t, "getServerStatus", (function () {
            return o.f
        })), n.d(t, "submitContestCode", (function () {
            return o.o
        })), n.d(t, "loadAppState", (function () {
            return o.j
        })), n.d(t, "getAppStates", (function () {
            return o.d
        })), n.d(t, "removeAppstate", (function () {
            return o.k
        })), n.d(t, "saveAppState", (function () {
            return o.l
        })), n.d(t, "sendMessage", (function () {
            return o.n
        })), n.d(t, "createUserProfile", (function () {
            return o.b
        })), n.d(t, "getRanking", (function () {
            return o.e
        })), n.d(t, "saveRank", (function () {
            return o.m
        }));
        var i = n(3);
        for (var u in i) ["Hapi", "ApiError", "createToken", "tokenLogin", "getStatus", "killToken", "isTokenAlive", "getAppConfig", "getServerStatus", "submitContestCode", "loadAppState", "getAppStates", "removeAppstate", "saveAppState", "sendMessage", "createUserProfile", "getRanking", "saveRank", "default"].indexOf(u) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(u)
    }, function (e, t) {
        function n(e) {
            return e ? i[e] || (i[e] = c(function (e, t) {
                t = new Function("n", "log", "return {'" + e + "':function(){log.invoke(n,[].slice.call(arguments))}}[n]")(e, n);
                try {
                    Object.defineProperty(t, "name", {
                        get: function () {
                            return e
                        }
                    })
                } catch (e) {
                }
                return t
            }(e), n)) : c(n)
        }

        n.formats = [], n.extends = [], n.enable = function (e) {
            var t, n = (e || "").split(/[\s,]+/);
            for (t = 0; t < n.length; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? a.push(new RegExp("^" + e.substr(1) + "$")) : u.push(new RegExp("^" + e + "$")));
            for (t in i) s(i[t])
        }, n.enabled = function (e) {
            var t;
            for (t = 0; t < a.length; t++)
                if (a[t].test(e)) return;
            for (t = 0; t < u.length; t++)
                if (u[t].test(e)) return !0
        }, n.invoke = function (e, t) {
            for (var r = t.length > 1 && o[t[0]] ? t.shift() : "debug", u = 0; u < n.formats.length; u++) n.formats[u](i[e], r, t);
            i[e][r].apply(i[e], t)
        }, n.disable = n.enable.bind(n, "");
        var r = {
                ERROR: 1,
                WARN: 2,
                INFO: 3,
                LOG: 4,
                DEBUG: 5,
                TRACE: 6
            },
            o = {
                error: 1,
                warn: 2,
                info: 3,
                log: 4,
                verbose: 4,
                debug: 5,
                trace: 6,
                silly: 6,
                dir: 0,
                table: 0,
                time: 0,
                timeEnd: 0,
                assert: 0
            },
            i = {},
            u = [],
            a = [];

        function c(e, t, o) {
            if (!e.log) {
                for (var u in e.NONE = 0, e.ulog = {
                    version: "2.0.0-beta.7"
                }, r) e[u] = r[u];
                Object.defineProperty(e, "level", {
                    get: function () {
                        return void 0 !== o ? o : t && t.level
                    },
                    set: function (n) {
                        if (void 0 === n && t) o = void 0;
                        else {
                            var r = n && (Number(n) != Number(n) ? e[n.toUpperCase()] : Number(n));
                            r >= 0 && r <= 6 && (o = r)
                        }
                        if (s(e), !t)
                            for (var u in i) s(i[u])
                    }
                }), s(e);
                for (var a = 0; a < n.extends.length; a++) n.extends[a](e, t);
                return e
            }
        }

        function s(e) {
            var t = Math.max(e.name && n.enabled(e.name) && e.DEBUG || e.level, e.level);
            for (var r in o) e[r] = t < o[r] ? l : f(r) || "function" == typeof print && print || l
        }

        function f(e, t) {
            return (t = n.con()) && (t[e] || t.log).bind(t)
        }

        function l() {
        }

        e.exports = n
    }, function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(10),
            i = n(26),
            u = n(16);

        function a(e) {
            var t = new i(e),
                n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n
        }

        var c = a(n(13));
        c.Axios = i, c.create = function (e) {
            return a(u(c.defaults, e))
        }, c.Cancel = n(17), c.CancelToken = n(40), c.isCancel = n(12), c.all = function (e) {
            return Promise.all(e)
        }, c.spread = n(41), e.exports = c, e.exports.default = c
    }, function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(11),
            i = n(27),
            u = n(28),
            a = n(16);

        function c(e) {
            this.defaults = e, this.interceptors = {
                request: new i,
                response: new i
            }
        }

        c.prototype.request = function (e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [u, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach((function (e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function (e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, c.prototype.getUri = function (e) {
            return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, r.forEach(["delete", "get", "head", "options"], (function (e) {
            c.prototype[e] = function (t, n) {
                return this.request(r.merge(n || {}, {
                    method: e,
                    url: t
                }))
            }
        })), r.forEach(["post", "put", "patch"], (function (e) {
            c.prototype[e] = function (t, n, o) {
                return this.request(r.merge(o || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        })), e.exports = c
    }, function (e, t, n) {
        "use strict";
        var r = n(0);

        function o() {
            this.handlers = []
        }

        o.prototype.use = function (e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, o.prototype.forEach = function (e) {
            r.forEach(this.handlers, (function (t) {
                null !== t && e(t)
            }))
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(29),
            i = n(12),
            u = n(13);

        function a(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }

        e.exports = function (e) {
            return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
                delete e.headers[t]
            })), (e.adapter || u.adapter)(e).then((function (t) {
                return a(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }), (function (t) {
                return i(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t, n) {
            return r.forEach(n, (function (n) {
                e = n(e, t)
            })), e
        }
    }, function (e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (e) {
                r = u
            }
        }();
        var c, s = [],
            f = !1,
            l = -1;

        function d() {
            f && c && (f = !1, c.length ? s = c.concat(s) : l = -1, s.length && p())
        }

        function p() {
            if (!f) {
                var e = a(d);
                f = !0;
                for (var t = s.length; t;) {
                    for (c = s, s = []; ++l < t;) c && c[l].run();
                    l = -1, t = s.length
                }
                c = null, f = !1,
                    function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function g() {
        }

        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            s.push(new h(e, t)), 1 !== s.length || f || a(p)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
            return []
        }, o.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t) {
            r.forEach(e, (function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(35),
            o = n(36);
        e.exports = function (e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function (e) {
            var t, n, i, u = {};
            return e ? (r.forEach(e.split("\n"), (function (e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                    if (u[t] && o.indexOf(t) >= 0) return;
                    u[t] = "set-cookie" === t ? (u[t] ? u[t] : []).concat([n]) : u[t] ? u[t] + ", " + n : n
                }
            })), u) : u
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function () {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }

            return e = o(window.location.href),
                function (t) {
                    var n = r.isString(t) ? o(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
        }() : function () {
            return !0
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function (e, t, n, o, i, u) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === u && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function (e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function (e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function () {
            },
            read: function () {
                return null
            },
            remove: function () {
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(17);

        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function (e) {
                t = e
            }));
            var n = this;
            e((function (e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            }))
        }

        o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, o.source = function () {
            var e;
            return {
                token: new o((function (t) {
                    e = t
                })),
                cancel: e
            }
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(2)((function (e, t) {
            return null == t || t != t ? e : t
        }));
        e.exports = r
    }, function (e, t, n) {
        var r = n(2),
            o = n(45),
            i = n(46),
            u = r((function (e, t) {
                return e.map((function (e) {
                    for (var n, r = t, u = 0; u < e.length;) {
                        if (null == r) return;
                        n = e[u], r = o(n) ? i(n, r) : r[n], u += 1
                    }
                    return r
                }))
            }));
        e.exports = u
    }, function (e, t) {
        e.exports = Number.isInteger || function (e) {
            return e << 0 === e
        }
    }, function (e, t, n) {
        var r = n(2),
            o = n(47),
            i = r((function (e, t) {
                var n = e < 0 ? t.length + e : e;
                return o(t) ? t.charAt(n) : t[n]
            }));
        e.exports = i
    }, function (e, t) {
        e.exports = function (e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }
    }])
}));
