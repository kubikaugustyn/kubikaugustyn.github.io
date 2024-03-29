/**
 * Modified version of library amfjs.js
 * @author Update by Igor Hrazdil
 * -------------------------------------------------------------------------------
 * AMF 3 JavaScript library by Emil Malinov https://github.com/emilkm/amfjs
 * based on Surrey's R-AMF (AMF 99) implementation https://code.google.com/p/r-amf
 * For more information on R-AMF (AMF 99), including Java (Spring) R-AMF server
 * see http://www.reignite.com.au/binary-communication-using-ajax-and-amf
 */
var amf = {
    CONST: {
        EMPTY_STRING: "",
        NULL_STRING: "null",
        UNDEFINED_TYPE: 0,
        NULL_TYPE: 1,
        FALSE_TYPE: 2,
        TRUE_TYPE: 3,
        INTEGER_TYPE: 4,
        DOUBLE_TYPE: 5,
        STRING_TYPE: 6,
        XML_TYPE: 7,
        DATE_TYPE: 8,
        ARRAY_TYPE: 9,
        OBJECT_TYPE: 10,
        XMLSTRING_TYPE: 11,
        BYTEARRAY_TYPE: 12,
        AMF0_AMF3: 17,
        UINT29_MASK: 536870911,
        INT28_MAX_VALUE: 268435455,
        INT28_MIN_VALUE: -268435456,
        CLASS_ALIAS: "_explicitType"
    },
    requestTimeout: 3e4,
    requestPoolSize: 6,
    requestPool: [],
    messageQueue: [],
    sendMessageId: !1,
    clientId: null,
    sequence: 1,
    destination: "",
    endpoint: "",
    headers: null,
    doNothing: new Function,
    init: function (a, b, c) {
        this.clientId = null, this.sequence = 1, this.destination = a, this.endpoint = b, this.requestTimeout = c ? c : 3e4, this.headers = []
    },
    call: function (a, b, c, d, e) {
        this.init("amfphp", a), this.invoke2(b, c, d, e)
    },
    addHeader: function (a, b) {
        var c = {};
        c[a] = b, this.headers.push(c)
    },
    ActionMessage: function () {
        return {
            _explicitType: "flex.messaging.io.amf.ActionMessage",
            version: 3,
            headers: [{
                name: "mobile",
                mustUnderstand: !1,
                data: !0
            }],
            bodies: []
        }
    },
    ActionMessage2: function () {
        return {
            version: 3,
            headers: [],
            bodies: []
        }
    },
    MessageBody: function () {
        return {
            targetURI: "null",
            responseURI: "/1",
            data: []
        }
    },
    MessageHeader: function () {
        return {
            name: "",
            mustUnderstand: !1,
            data: null
        }
    },
    CommandMessage: function () {
        return {
            _explicitType: "flex.messaging.messages.CommandMessage",
            destination: "",
            operation: 5,
            clientId: null
        }
    },
    RemotingMessage: function () {
        return {
            _explicitType: "flex.messaging.messages.RemotingMessage",
            destination: "",
            source: "",
            operation: "",
            body: [],
            clientId: null
        }
    },
    AcknowledgeMessage: function () {
        return {
            _explicitType: "flex.messaging.messages.AcknowledgeMessage",
            body: null,
            headers: [],
            messageId: null,
            clientId: null
        }
    },
    createMessage: function (a, b, c) {
        var d, e = new amf.ActionMessage,
            f = new amf.MessageBody;
        if ("ping" == a) this.sequence = 1, f.responseURI = "/" + this.sequence++, d = new amf.CommandMessage, d.destination = this.destination;
        else {
            f.responseURI = "/" + this.sequence++, d = new amf.RemotingMessage, d.destination = this.destination, d.source = a, d.operation = b, d.body = c, this.sendMessageId && (d.messageId = amf.uuid(0, 0)), d.clientId = this.clientId;
            for (var g = 0; g < this.headers.length; g++) {
                var h = this.headers[g];
                for (var i in h) d.headers[i] = h[i]
            }
        }
        return f.data.push(d), e.bodies.push(f), e
    },
    createMessage2: function (a, b) {
        var c, d = new amf.ActionMessage2;
        return c = new amf.MessageBody, c.responseURI = "/1", c.targetURI = a, c.data.push(b), d.bodies.push(c), d
    },
    invoke: function (a, b, c, d, e) {
        null == this.clientId && 0 == this.messageQueue.length && (this.messageQueue.push([this.createMessage("ping"), d, e]), this._processQueue()), this.messageQueue.push([this.createMessage(a, b, c), d, e]), null != this.clientId && this._processQueue()
    },
    invoke2: function (a, b, c, d) {
        this.messageQueue.push([this.createMessage2(a, b), c, d]), this._processQueue2()
    },
    _processQueue: function () {
        var a, b;
        for (a = 0; a < this.requestPoolSize && this.messageQueue.length > 0; a++)
            if (this.requestPool.length == a ? (b = new XMLHttpRequest, b.parent = this, b.busy = !1, this.requestPool.push(b)) : b = this.requestPool[a], !b.busy) {
                var c = this.messageQueue.shift();
                if (this._send(b, c[0], c[1], c[2]), "flex.messaging.messages.CommandMessage" == c[0].bodies[0].data[0]._explicitType) return
            }
    },
    _processQueue2: function () {
        var a, b;
        for (a = 0; a < this.requestPoolSize && this.messageQueue.length > 0; a++)
            if (this.requestPool.length == a ? (b = new XMLHttpRequest, b.parent = this, b.busy = !1, this.requestPool.push(b)) : b = this.requestPool[a], !b.busy) {
                var c = this.messageQueue.shift();
                this._send2(b, c[0], c[1], c[2])
            }
    },
    _send: function (a, b, c, d) {
        var e = new amf.Serializer;
        a.message = e.writeMessage(b), a.onreadystatechange = function () {
            if (1 === this.readyState) this.busy || (this.busy = !0, this.setRequestHeader("Content-Type", "application/x-amf; charset=UTF-8"), this.responseType = "arraybuffer", this.send(new Uint8Array(a.message)));
            else if (4 === this.readyState) {
                this.onreadystatechange = amf.doNothing;
                try {
                    if (this.status >= 200 && this.status <= 300)
                        if (this.getResponseHeader("Content-type").indexOf("application/x-amf") > -1) {
                            var b = new amf.Deserializer(new Uint8Array(this.response)),
                                e = b.readMessage();
                            for (var f in e.bodies) {
                                var g = e.bodies[f];
                                if (g.targetURI && g.targetURI.indexOf("/onResult") > -1)
                                    if ("/1/onResult" == g.targetURI) {
                                        this.parent.clientId = g.data.clientId;
                                        for (var h = 0; h < this.parent.messageQueue.length; h++) this.parent.messageQueue[h][0].bodies[0].data[0].clientId = this.parent.clientId
                                    } else c(g.data.body);
                                else "flex.messaging.messages.ErrorMessage" == g.data._explicitType && d({
                                    faultCode: g.data.faultCode,
                                    faultDetail: g.data.faultDetail,
                                    faultString: g.data.faultString
                                })
                            }
                            this.busy = !1, this.message = null, this.parent._processQueue()
                        } else d({
                            faultCode: 1,
                            faultDetail: this.responseText,
                            faultString: ""
                        });
                    else d({
                        faultCode: 1,
                        faultDetail: this.responseText,
                        faultString: ""
                    })
                } catch (i) {
                    d({
                        faultCode: 2,
                        faultDetail: "",
                        faultString: ""
                    })
                }
            }
        }, a.open("POST", this.endpoint, !0)
    },
    _send2: function (a, b, c, d) {
        var e = new amf.Serializer;
        a.message = e.writeMessage(b), a.onreadystatechange = function () {
            if (1 === this.readyState) this.busy || (this.busy = !0, this.setRequestHeader("Content-Type", "application/x-amf; charset=UTF-8"), this.responseType = "arraybuffer", this.send(new Uint8Array(a.message)));
            else if (4 === this.readyState) {
                this.onreadystatechange = amf.doNothing;
                try {
                    if (this.status >= 200 && this.status <= 300)
                        if (this.getResponseHeader("Content-type").indexOf("application/x-amf") > -1) {
                            var b = new amf.Deserializer(new Uint8Array(this.response)),
                                e = b.readMessage();
                            for (var f in e.bodies) {
                                var g = e.bodies[f];
                                g.targetURI && g.targetURI.indexOf("/onResult") > -1 ? c(g.data) : d({
                                    faultCode: g.data.faultCode,
                                    faultDetail: g.data.faultDetail,
                                    faultString: g.data.faultString
                                })
                            }
                            this.busy = !1, this.message = null, this.parent._processQueue()
                        } else d({
                            faultCode: 1,
                            faultDetail: this.responseText,
                            faultString: ""
                        });
                    else d({
                        faultCode: 1,
                        faultDetail: this.responseText,
                        faultString: ""
                    })
                } catch (h) {
                    d({
                        faultCode: 2,
                        faultDetail: "",
                        faultString: ""
                    })
                }
            }
        }, a.open("POST", this.endpoint, !0)
    }
};
amf.Writer = function () {
    this.data = [], this.objects = [], this.traits = {}, this.strings = {}, this.stringCount = 0, this.traitCount = 0, this.objectCount = 0
}, amf.Writer.prototype.write = function (a) {
    this.data.push(a)
}, amf.Writer.prototype.writeShort = function (a) {
    this.write(a >>> 8 & 255), this.write(a >>> 0 & 255)
}, amf.Writer.prototype.writeUTF = function (a, b) {
    var c, d, e, f, g;
    for (f = a.length, g = 0, e = 0; f > e; e++) d = a.charCodeAt(e), d > 0 && 128 > d ? g++ : g += d > 2047 ? 3 : 2;
    for (c = [], b ? this.writeUInt29(g << 1 | 1) : (c.push(g >>> 8 & 255), c.push(255 & g)), e = 0; f > e; e++) d = a.charCodeAt(e), d > 0 && 128 > d ? c.push(d) : d > 2047 ? (c.push(224 | d >> 12), c.push(128 | d >> 6 & 63), c.push(b ? 128 | d >> 0 & 63 : 128 | 63 & d)) : (c.push(192 | d >> 6), c.push(b ? 128 | d >> 0 & 63 : 128 | 63 & d));
    return this.writeAll(c), b ? g : g + 2
}, amf.Writer.prototype.writeUInt29 = function (a) {
    if (128 > a) this.write(a);
    else if (16384 > a) this.write(a >> 7 & 127 | 128), this.write(127 & a);
    else if (2097152 > a) this.write(a >> 14 & 127 | 128), this.write(a >> 7 & 127 | 128), this.write(127 & a);
    else {
        if (!(1073741824 > a)) throw "Integer out of range: " + a;
        this.write(a >> 22 & 127 | 128), this.write(a >> 15 & 127 | 128), this.write(a >> 8 & 127 | 128), this.write(255 & a)
    }
}, amf.Writer.prototype.writeAll = function (a) {
    for (var b = 0; b < a.length; b++) this.write(a[b])
}, amf.Writer.prototype.writeBoolean = function (a) {
    this.write(a ? 1 : 0)
}, amf.Writer.prototype.writeInt = function (a) {
    this.write(a >>> 24 & 255), this.write(a >>> 16 & 255), this.write(a >>> 8 & 255), this.write(a >>> 0 & 255)
}, amf.Writer.prototype.writeByte = function (a) {
    this.write(255 & a)
}, amf.Writer.prototype.writeUnsignedInt = function (a) {
    0 > a && (a = -(4294967295 ^ a) - 1), a &= 4294967295, this.write(a >> 24 & 255), this.write(a >> 16 & 255), this.write(a >> 8 & 255), this.write(255 & a)
}, amf.Writer.prototype._getDouble = function (a) {
    var b = [0, 0];
    if (a != a) return b[0] = -524288, b;
    var c = 0 > a || 0 === a && 0 > 1 / a ? -2147483648 : 0,
        a = Math.abs(a);
    if (a === Number.POSITIVE_INFINITY) return b[0] = 2146435072 | c, b;
    for (var d = 0; a >= 2 && 1023 >= d;) d++, a /= 2;
    for (; 1 > a && d >= -1022;) d--, a *= 2;
    if (d += 1023, 2047 == d) return b[0] = 2146435072 | c, b;
    var e;
    return 0 == d ? (e = a * Math.pow(2, 23) / 2, a = Math.round(a * Math.pow(2, 52) / 2)) : (e = a * Math.pow(2, 20) - Math.pow(2, 20), a = Math.round(a * Math.pow(2, 52) - Math.pow(2, 52))), b[0] = c | d << 20 & 2147418112 | 1048575 & e, b[1] = a, b
}, amf.Writer.prototype.writeDouble = function (a) {
    a = this._getDouble(a), this.writeUnsignedInt(a[0]), this.writeUnsignedInt(a[1])
}, amf.Writer.prototype.getResult = function () {
    return this.data.join("")
}, amf.Writer.prototype.reset = function () {
    this.objects = [], this.objectCount = 0, this.traits = {}, this.traitCount = 0, this.strings = {}, this.stringCount = 0
}, amf.Writer.prototype.writeStringWithoutType = function (a) {
    0 == a.length ? this.writeUInt29(1) : this.stringByReference(a) || this.writeUTF(a, !0)
}, amf.Writer.prototype.stringByReference = function (a) {
    var b = this.strings[a];
    return b ? this.writeUInt29(b << 1) : this.strings[a] = this.stringCount++, b
}, amf.Writer.prototype.objectByReference = function (a) {
    for (var b = 0, c = !1; b < this.objects.length; b++)
        if (this.objects[b] === a) {
            c = !0;
            break
        }
    return c ? this.writeUInt29(b << 1) : (this.objects.push(a), this.objectCount++), c ? b : null
}, amf.Writer.prototype.traitsByReference = function (a, b) {
    for (var c = b + "|", d = 0; d < a.length; d++) c += a[d] + "|";
    var e = this.traits[c];
    return e ? this.writeUInt29(e << 2 | 1) : this.traits[c] = this.traitCount++, e
}, amf.Writer.prototype.writeAmfInt = function (a) {
    a >= amf.CONST.INT28_MIN_VALUE && a <= amf.CONST.INT28_MAX_VALUE ? (a &= amf.CONST.UINT29_MASK, this.write(amf.CONST.INTEGER_TYPE), this.writeUInt29(a)) : (this.write(amf.CONST.DOUBLE_TYPE), this.writeDouble(a))
}, amf.Writer.prototype.writeDate = function (a) {
    this.write(amf.CONST.DATE_TYPE), this.objectByReference(a) || (this.writeUInt29(1), this.writeDouble(a.getTime()))
}, amf.Writer.prototype.writeObject = function (a) {
    return null == a ? void this.write(amf.CONST.NULL_TYPE) : void (a.constructor === String ? (this.write(amf.CONST.STRING_TYPE), this.writeStringWithoutType(a)) : a.constructor === Number ? a === +a && a === (0 | a) ? this.writeAmfInt(a) : (this.write(amf.CONST.DOUBLE_TYPE), this.writeDouble(a)) : a.constructor === Boolean ? this.write(a ? amf.CONST.TRUE_TYPE : amf.CONST.FALSE_TYPE) : a.constructor === Date ? this.writeDate(a) : a.constructor === Array ? this.writeArray(a) : a.constructor === Uint8Array ? this.writeByteArray(a) : amf.CONST.CLASS_ALIAS in a ? this.writeCustomObject(a) : this.writeMap(a))
}, amf.Writer.prototype.writeCustomObject = function (a) {
    if (this.write(amf.CONST.OBJECT_TYPE), !this.objectByReference(a))
        for (var b = this.writeTraits(a), c = 0; c < b.length; c++) {
            var d = b[c];
            this.writeObject(a[d])
        }
}, amf.Writer.prototype.writeTraits = function (a) {
    var b = [],
        c = 0,
        d = !1,
        e = !1;
    for (var f in a) f != amf.CONST.CLASS_ALIAS && (b.push(f), c++);
    if (!this.traitsByReference(b, a[amf.CONST.CLASS_ALIAS]) && (this.writeUInt29(3 | (d ? 4 : 0) | (e ? 8 : 0) | c << 4), this.writeStringWithoutType(a[amf.CONST.CLASS_ALIAS]), c > 0))
        for (var g in b) this.writeStringWithoutType(b[g]);
    return b
}, amf.Writer.prototype.writeMap = function (a) {
    if (this.write(amf.CONST.OBJECT_TYPE), !this.objectByReference(a)) {
        this.writeUInt29(11), this.traitCount++, this.writeStringWithoutType(amf.CONST.EMPTY_STRING);
        for (var b in a) this.writeStringWithoutType(b ? b : amf.CONST.EMPTY_STRING), this.writeObject(a[b]);
        this.writeStringWithoutType(amf.CONST.EMPTY_STRING)
    }
}, amf.Writer.prototype.writeByteArray = function (a) {
    if (this.write(amf.CONST.BYTEARRAY_TYPE), !this.objectByReference(a) && (this.writeUInt29(a.length << 1 | 1), a.length > 0))
        for (var b = 0; b < a.length; b++) this.writeByte(a[b])
}, amf.Writer.prototype.writeArray = function (a) {
    if (this.write(amf.CONST.ARRAY_TYPE), !this.objectByReference(a) && (this.writeUInt29(a.length << 1 | 1), this.writeUInt29(1), a.length > 0))
        for (var b = 0; b < a.length; b++) this.writeObject(a[b])
}, amf.Reader = function (a) {
    this.objects = [], this.traits = [], this.strings = [], this.data = a, this.pos = 0
}, amf.Reader.prototype.read = function () {
    return this.data[this.pos++]
}, amf.Reader.prototype.readUnsignedShort = function () {
    var a = this.read(),
        b = this.read();
    return (a << 8) + (b << 0)
}, amf.Reader.prototype.readUInt29 = function () {
    var a = 255 & this.read();
    if (128 > a) return a;
    var b = (127 & a) << 7;
    return a = 255 & this.read(), 128 > a ? b | a : (b = (b | 127 & a) << 7, a = 255 & this.read(), 128 > a ? b | a : (b = (b | 127 & a) << 8, a = 255 & this.read(), b | a))
}, amf.Reader.prototype.readFully = function (a, b, c) {
    for (var d = b; c > d; d++) a[d] = this.read()
}, amf.Reader.prototype.readUTF = function (a) {
    for (var b, c, d, e = a ? a : this.readUnsignedShort(), f = [], g = this.pos; this.pos < g + e;) b = this.read(), 128 > b ? f.push(String.fromCharCode(b)) : b > 2047 ? (c = this.read(), d = this.read(), f.push(String.fromCharCode((15 & b) << 12 | (63 & c) << 6 | 63 & d))) : (c = this.read(), f.push(String.fromCharCode((31 & b) << 6 | 63 & c)));
    return f.join("")
}, amf.Reader.prototype.reset = function () {
    this.objects = [], this.traits = [], this.strings = []
}, amf.Reader.prototype.readObject = function () {
    var a = this.read();
    return this.readObjectValue(a)
}, amf.Reader.prototype.readString = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getString(a >> 1);
    var b = a >> 1;
    if (0 == b) return amf.CONST.EMPTY_STRING;
    var c = this.readUTF(b);
    return this.rememberString(c), c
}, amf.Reader.prototype.rememberString = function (a) {
    this.strings.push(a)
}, amf.Reader.prototype.getString = function (a) {
    return this.strings[a]
}, amf.Reader.prototype.getObject = function (a) {
    return this.objects[a]
}, amf.Reader.prototype.getTraits = function (a) {
    return this.traits[a]
}, amf.Reader.prototype.rememberTraits = function (a) {
    this.traits.push(a)
}, amf.Reader.prototype.rememberObject = function (a) {
    this.objects.push(a)
}, amf.Reader.prototype.readTraits = function (a) {
    if (1 == (3 & a)) return this.getTraits(a >> 2);
    var b = a >> 4,
        c = this.readString(),
        d = {};
    null != c && "" != c && (d[amf.CONST.CLASS_ALIAS] = c), d.props = [];
    for (var e = 0; b > e; e++) d.props.push(this.readString());
    return this.rememberTraits(d), d
}, amf.Reader.prototype.readScriptObject = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getObject(a >> 1);
    var b = this.readTraits(a),
        c = {};
    if (amf.CONST.CLASS_ALIAS in b && (c[amf.CONST.CLASS_ALIAS] = b[amf.CONST.CLASS_ALIAS]), this.rememberObject(c), 4 == (4 & a) && "flex.messaging.io.ArrayCollection" == c[amf.CONST.CLASS_ALIAS]) return this.readObject();
    for (var d in b.props) c[b.props[d]] = this.readObject();
    return c
}, amf.Reader.prototype.readArray = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getObject(a >> 1);
    for (var b = a >> 1, c = null, d = 0; ;) {
        var e = this.readString();
        if (!e) break;
        c || (c = {}, this.rememberObject(c)), c[e] = this.readObject()
    }
    if (c) {
        for (d = 0; b > d; d++) c[d] = this.readObject();
        return c
    }
    var f = new Array(b);
    for (this.rememberObject(f), d = 0; b > d; d++) f[d] = this.readObject();
    return f
}, amf.Reader.prototype.readDouble = function () {
    var a = 255 & this.read(),
        b = 255 & this.read();
    if (255 === a) {
        if (248 === b) return Number.NaN;
        if (240 === b) return Number.NEGATIVE_INFINITY
    } else if (127 === a && 240 === b) return Number.POSITIVE_INFINITY;
    var c = 255 & this.read(),
        d = 255 & this.read(),
        e = 255 & this.read(),
        f = 255 & this.read(),
        g = 255 & this.read(),
        h = 255 & this.read();
    if (!(a || b || c || d)) return 0;
    for (var i = (a << 4 & 2047 | b >> 4) - 1023, b = ((15 & b) << 16 | c << 8 | d).toString(2), c = b.length; 20 > c; c++) b = "0" + b;
    for (f = ((127 & e) << 24 | f << 16 | g << 8 | h).toString(2), c = f.length; 31 > c; c++) f = "0" + f;
    return e = parseInt(b + (e >> 7 ? "1" : "0") + f, 2), 0 == e && -1023 == i ? 0 : (1 - (a >> 7 << 1)) * (1 + Math.pow(2, -52) * e) * Math.pow(2, i)
}, amf.Reader.prototype.readDate = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getObject(a >> 1);
    var b = this.readDouble(),
        c = new Date(b);
    return this.rememberObject(c), c
}, amf.Reader.prototype.readMap = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getObject(a >> 1);
    var b = a >> 1,
        c = null;
    if (b > 0) {
        c = {}, this.rememberObject(c);
        for (var d = this.readObject(); null != d;) c[d] = this.readObject(), d = this.readObject()
    }
    return c
}, amf.Reader.prototype.readByteArray = function () {
    var a = this.readUInt29();
    if (0 == (1 & a)) return this.getObject(a >> 1);
    var b = a >> 1,
        c = [];
    return this.readFully(c, 0, b), this.rememberObject(c), c
}, amf.Reader.prototype.readObjectValue = function (a) {
    var b = null;
    switch (a) {
        case amf.CONST.STRING_TYPE:
            b = this.readString();
            break;
        case amf.CONST.OBJECT_TYPE:
            try {
                b = this.readScriptObject()
            } catch (c) {
                throw "Failed to deserialize:" + c
            }
            break;
        case amf.CONST.ARRAY_TYPE:
            b = this.readArray();
            break;
        case amf.CONST.FALSE_TYPE:
            b = !1;
            break;
        case amf.CONST.TRUE_TYPE:
            b = !0;
            break;
        case amf.CONST.INTEGER_TYPE:
            b = this.readUInt29(), b = b << 3 >> 3;
            break;
        case amf.CONST.DOUBLE_TYPE:
            b = this.readDouble();
            break;
        case amf.CONST.UNDEFINED_TYPE:
        case amf.CONST.NULL_TYPE:
            break;
        case amf.CONST.DATE_TYPE:
            b = this.readDate();
            break;
        case amf.CONST.BYTEARRAY_TYPE:
            b = this.readByteArray();
            break;
        case amf.CONST.AMF0_AMF3:
            b = this.readObject();
            break;
        default:
            throw "Unknown AMF type: " + a
    }
    return b
}, amf.Reader.prototype.readBoolean = function () {
    return 1 === this.read()
}, amf.Serializer = function () {
    this.writer = new amf.Writer
}, amf.Serializer.prototype.writeMessage = function (a) {
    try {
        this.writer.writeShort(a.version), this.writer.writeShort(a.headers.length);
        for (var b in a.headers) this.writeHeader(a.headers[b]);
        this.writer.writeShort(a.bodies.length);
        for (var c in a.bodies) this.writeBody(a.bodies[c])
    } catch (d) {
        console.log(d)
    }
    return this.writer.data
}, amf.Serializer.prototype.writeObject = function (a) {
    this.writer.writeObject(a)
}, amf.Serializer.prototype.writeHeader = function (a) {
    this.writer.writeUTF(a.name), this.writer.writeBoolean(a.mustUnderstand), this.writer.writeInt(1), this.writer.reset(), this.writer.write(1), this.writer.writeBoolean(!0)
}, amf.Serializer.prototype.writeBody = function (a) {
    this.writer.writeUTF(null == a.targetURI ? amf.CONST.NULL_STRING : a.targetURI), this.writer.writeUTF(null == a.responseURI ? amf.CONST.NULL_STRING : a.responseURI), this.writer.writeInt(1), this.writer.reset(), this.writer.write(amf.CONST.AMF0_AMF3), this.writeObject(a.data)
}, amf.Deserializer = function (a) {
    this.reader = new amf.Reader(a)
}, amf.Deserializer.prototype.readMessage = function () {
    var a = new amf.ActionMessage;
    a.version = this.reader.readUnsignedShort();
    for (var b = this.reader.readUnsignedShort(), c = 0; b > c; c++) a.headers.push(this.readHeader());
    var d = this.reader.readUnsignedShort();
    for (c = 0; d > c; c++) a.bodies.push(this.readBody());
    return a
}, amf.Deserializer.prototype.readHeader = function () {
    var a = new amf.MessageHeader;
    return a.name = this.reader.readUTF(), a.mustUnderstand = this.reader.readBoolean(), this.reader.pos += 4, this.reader.reset(), a.data = this.readObject(), a
}, amf.Deserializer.prototype.readBody = function () {
    var a = new amf.MessageBody;
    return a.targetURI = this.reader.readUTF(), a.responseURI = this.reader.readUTF(), this.reader.pos += 4, this.reader.reset(), a.data = this.readObject(), a
}, amf.Deserializer.prototype.readObject = function () {
    return this.reader.readObject()
}, amf.uuid = function a(b, c) {
    return b ? (c | 16 * Math.random() >> c / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/1|0|(8)/g, a)
};
