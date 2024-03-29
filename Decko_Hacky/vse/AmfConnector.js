/**
 * AmfConnector.js
 * Library of methods for data transfers between server and client via AMF3 protocol.
 * Library is using modified amfjs.js (https://github.com/emilkm/amfjs).
 * All rights reserved, decko.ceskatelevize.cz, 2014
 * @author Tomas Kozak, tomas.kozak@kan-pai.net
 */
var AmfConnector = {
    VERSION: "1.0.0",
    gatewayUrl: "",
    token: "",
    init: function (a, b) {
        this.gatewayUrl = a, this.token = b
    },
    getAppConfig: function (a) {
        function b(b) {
            a(AmfConnector.GetAppConfigResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "AppConfig/amf",
            e = "getAppConfig",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    getTokenStatus: function (a) {
        function b(b) {
            a(AmfConnector.GetTokenStatusResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "Token/amf",
            e = "getStatus",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    killToken: function (a) {
        function b(b) {
            a(AmfConnector.KillTokenResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "Token/amf",
            e = "killToken",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    getDate: function (a) {
        function b(b) {
            a(AmfConnector.GetDateResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "ServerStatus/amf",
            e = "getServerStatus",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    getAppStates: function (a) {
        function b(b) {
            a(AmfConnector.GetAppStatesResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "AppState/amf",
            e = "getAppStates",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    saveAppState: function (a, b, c, d) {
        function e(b) {
            a(AmfConnector.SaveAppStateResult(b))
        }

        function f(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var g = "AppState/amf",
            h = "saveAppState",
            i = {
                token: String(this.token),
                slotNumber: Number(b),
                metaData: String(c),
                data: Object(d)
            };
        amf.call(this.gatewayUrl + g, h, i, e, f)
    },
    loadAppState: function (a, b, c, d) {
        function e(b) {
            a(AmfConnector.LoadAppStateResult(b, d))
        }

        function f(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var g = "AppState/amf",
            h = "loadAppState",
            i = {
                token: String(this.token),
                slotNumber: Number(b),
                resourceName: String(c)
            };
        amf.call(this.gatewayUrl + g, h, i, e, f)
    },
    removeAppState: function (a, b) {
        function c(b) {
            a(AmfConnector.RemoveAppStateResult(b))
        }

        function d(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var e = "AppState/amf",
            f = "removeAppState",
            g = {
                token: String(this.token),
                slotNumber: Number(b)
            };
        amf.call(this.gatewayUrl + e, f, g, c, d)
    },
    saveRank: function (a, b, c, d, e, f, g) {
        function h(b) {
            a(AmfConnector.SaveRankResult(b))
        }

        function i(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var j = "Ranking/amf",
            k = "saveRank",
            l = {
                token: String(this.token),
                score: Number(b),
                slotNumber: Number(c || 0),
                time: Number(d || 0),
                level: Number(e || 0),
                finished: Boolean(f || !1),
                answer: String(g || "")
            };
        amf.call(this.gatewayUrl + j, k, l, h, i)
    },
    getRanking: function (a) {
        function b(b) {
            a(AmfConnector.GetRankingResult(b))
        }

        function c(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var d = "Ranking/amf",
            e = "getRanking",
            f = {
                token: String(this.token)
            };
        amf.call(this.gatewayUrl + d, e, f, b, c)
    },
    sendMessage: function (a, b, c, d, e, f, g, h) {
        function i(b) {
            a(AmfConnector.SendMessageResult(b))
        }

        function j(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var k = "Message/amf",
            l = "sendMessage",
            m = {
                token: String(this.token),
                messageTypeUiud: String(b),
                params: Object(c),
                receiver: String(d),
                subject: String(e),
                text: String(f),
                html: String(g),
                replyTo: String(h)
            };
        amf.call(this.gatewayUrl + k, l, m, i, j)
    },
    updateProfile: function (a, b, c, d) {
        function e(b) {
            a(AmfConnector.UpdateProfileResult(b))
        }

        function f(b) {
            a(AmfConnector.ErrorResult(b))
        }

        var g = "Profile/amf",
            h = "updateProfile",
            i = {
                token: String(this.token),
                slotNumber: Number(b),
                resourceName: String(c),
                gender: String(d)
            };
        amf.call(this.gatewayUrl + g, h, i, e, f)
    }
};
AmfConnector.ErrorResult = function (a) {
    var b = {};
    return b.status = "ERROR", b.error = "amf status error", b.errorObject = a, b
}, AmfConnector.GetAppConfigResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "invalid token") : (b.status = "OK", b.config = Object(a[0])), b
}, AmfConnector.GetAppStatesResult = function (a) {
    var b = {};
    if ("ERROR" == a[0].status) b.status = "ERROR", b.error = "invalid token";
    else {
        b.status = "OK", b.slots = [];
        for (var c = 0; c < a[0].slots.length; c++) {
            var d = {
                slotNumber: Number(a[0].slots[c].slotNumber),
                metadata: String(a[0].slots[c].metadata)
            };
            b.slots.push(d)
        }
    }
    return b
}, AmfConnector.GetDateResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "invalid token") : (b.status = "OK", b.date = new Date(a[0].now)), b
}, AmfConnector.GetRankingResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "invalid token") : (b.status = "OK", b.playerBest = a[0].myBestScore, b.topList = a[0].top), b
}, AmfConnector.GetTokenStatusResult = function (a) {
    var b = {};
    return "dead" == a[0].tokenStatus ? (b.status = "ERROR", b.error = "invalid token") : b.status = "OK", b
}, AmfConnector.KillTokenResult = function (a) {
    var b = {};
    return "noaction" == a[0].tokenStatus ? (b.status = "ERROR", b.error = "invalid token") : b.status = "OK", b
}, AmfConnector.LoadAppStateResult = function (a, b) {
    function c(a) {
        return decodeURIComponent(escape(e(a)))
    }

    function d(a) {
        var b = e(a),
            c = btoa(b);
        return "data:image/png;base64," + c
    }

    function e(a) {
        for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
        return b
    }

    var f = {};
    if ("ERROR" == a[0].status) f.status = "ERROR", f.error = "wrong resource name, or invalid token";
    else switch (f.status = "OK", f.resourceType = b, b) {
        case "text":
            f.state = c(a[0].state);
            break;
        case "image":
            f.image = d(a[0].state)
    }
    return f
}, AmfConnector.RemoveAppStateResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "slot does not exist, or invalid token") : (b.status = "OK", b.date = new Date(a[0].now)), b
}, AmfConnector.SaveAppStateResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "invalid token") : b.status = "OK", b
}, AmfConnector.SaveRankResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "slot does not exist, or invalid token") : (b.status = "OK", b.credits = Number(a[0].credit)), b
}, AmfConnector.SendMessageResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "wrong message UUID, format, parameters, or invalid token") : (b.status = "OK", b.code = String(a[0].code), b.subcode = String(a[0].subcode), b.message = String(a[0].message), b.detail = String(a[0].detail)), b
}, AmfConnector.UpdateProfileResult = function (a) {
    var b = {};
    return "ERROR" == a[0].status ? (b.status = "ERROR", b.error = "invalid token") : b.status = "OK", b
};
