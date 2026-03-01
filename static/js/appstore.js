var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dexie/dist/dexie.js
var require_dexie = __commonJS({
  "node_modules/dexie/dist/dexie.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Dexie = factory());
    })(exports, function() {
      "use strict";
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      }
      typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      var keys = Object.keys;
      var isArray = Array.isArray;
      if (typeof Promise !== "undefined" && !_global.Promise) {
        _global.Promise = Promise;
      }
      function extend(obj, extension) {
        if (typeof extension !== "object")
          return obj;
        keys(extension).forEach(function(key) {
          obj[key] = extension[key];
        });
        return obj;
      }
      var getProto = Object.getPrototypeOf;
      var _hasOwn = {}.hasOwnProperty;
      function hasOwn(obj, prop) {
        return _hasOwn.call(obj, prop);
      }
      function props(proto, extension) {
        if (typeof extension === "function")
          extension = extension(getProto(proto));
        (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
          setProp(proto, key, extension[key]);
        });
      }
      var defineProperty = Object.defineProperty;
      function setProp(obj, prop, functionOrGetSet, options) {
        defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
      }
      function derive(Child) {
        return {
          from: function(Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
              extend: props.bind(null, Child.prototype)
            };
          }
        };
      }
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      function getPropertyDescriptor(obj, prop) {
        var pd = getOwnPropertyDescriptor(obj, prop);
        var proto;
        return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
      }
      var _slice = [].slice;
      function slice(args, start, end) {
        return _slice.call(args, start, end);
      }
      function override(origFunc, overridedFactory) {
        return overridedFactory(origFunc);
      }
      function assert(b) {
        if (!b)
          throw new Error("Assertion Failed");
      }
      function asap$1(fn) {
        if (_global.setImmediate)
          setImmediate(fn);
        else
          setTimeout(fn, 0);
      }
      function arrayToObject(array, extractor) {
        return array.reduce(function(result, item, i) {
          var nameAndValue = extractor(item, i);
          if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
          return result;
        }, {});
      }
      function getByKeyPath(obj, keyPath) {
        if (typeof keyPath === "string" && hasOwn(obj, keyPath))
          return obj[keyPath];
        if (!keyPath)
          return obj;
        if (typeof keyPath !== "string") {
          var rv = [];
          for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
          }
          return rv;
        }
        var period = keyPath.indexOf(".");
        if (period !== -1) {
          var innerObj = obj[keyPath.substr(0, period)];
          return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
        }
        return void 0;
      }
      function setByKeyPath(obj, keyPath, value) {
        if (!obj || keyPath === void 0)
          return;
        if ("isFrozen" in Object && Object.isFrozen(obj))
          return;
        if (typeof keyPath !== "string" && "length" in keyPath) {
          assert(typeof value !== "string" && "length" in value);
          for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
          }
        } else {
          var period = keyPath.indexOf(".");
          if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
              if (value === void 0) {
                if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                  obj.splice(currentKeyPath, 1);
                else
                  delete obj[currentKeyPath];
              } else
                obj[currentKeyPath] = value;
            else {
              var innerObj = obj[currentKeyPath];
              if (!innerObj || !hasOwn(obj, currentKeyPath))
                innerObj = obj[currentKeyPath] = {};
              setByKeyPath(innerObj, remainingKeyPath, value);
            }
          } else {
            if (value === void 0) {
              if (isArray(obj) && !isNaN(parseInt(keyPath)))
                obj.splice(keyPath, 1);
              else
                delete obj[keyPath];
            } else
              obj[keyPath] = value;
          }
        }
      }
      function delByKeyPath(obj, keyPath) {
        if (typeof keyPath === "string")
          setByKeyPath(obj, keyPath, void 0);
        else if ("length" in keyPath)
          [].map.call(keyPath, function(kp) {
            setByKeyPath(obj, kp, void 0);
          });
      }
      function shallowClone(obj) {
        var rv = {};
        for (var m in obj) {
          if (hasOwn(obj, m))
            rv[m] = obj[m];
        }
        return rv;
      }
      var concat = [].concat;
      function flatten(a) {
        return concat.apply([], a);
      }
      var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + num + "Array";
        });
      }))).filter(function(t) {
        return _global[t];
      });
      var intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
        return _global[t];
      }));
      function cloneSimpleObjectTree(o) {
        var rv = {};
        for (var k in o)
          if (hasOwn(o, k)) {
            var v = o[k];
            rv[k] = !v || typeof v !== "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
          }
        return rv;
      }
      function objectIsEmpty(o) {
        for (var k in o)
          if (hasOwn(o, k))
            return false;
        return true;
      }
      var circularRefs = null;
      function deepClone(any) {
        circularRefs = /* @__PURE__ */ new WeakMap();
        var rv = innerDeepClone(any);
        circularRefs = null;
        return rv;
      }
      function innerDeepClone(x) {
        if (!x || typeof x !== "object")
          return x;
        var rv = circularRefs.get(x);
        if (rv)
          return rv;
        if (isArray(x)) {
          rv = [];
          circularRefs.set(x, rv);
          for (var i = 0, l = x.length; i < l; ++i) {
            rv.push(innerDeepClone(x[i]));
          }
        } else if (intrinsicTypes.has(x.constructor)) {
          rv = x;
        } else {
          var proto = getProto(x);
          rv = proto === Object.prototype ? {} : Object.create(proto);
          circularRefs.set(x, rv);
          for (var prop in x) {
            if (hasOwn(x, prop)) {
              rv[prop] = innerDeepClone(x[prop]);
            }
          }
        }
        return rv;
      }
      var toString = {}.toString;
      function toStringTag(o) {
        return toString.call(o).slice(8, -1);
      }
      var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
      var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
        var i;
        return x != null && (i = x[iteratorSymbol]) && i.apply(x);
      } : function() {
        return null;
      };
      function delArrayItem(a, x) {
        var i = a.indexOf(x);
        if (i >= 0)
          a.splice(i, 1);
        return i >= 0;
      }
      var NO_CHAR_ARRAY = {};
      function getArrayOf(arrayLike) {
        var i, a, x, it;
        if (arguments.length === 1) {
          if (isArray(arrayLike))
            return arrayLike.slice();
          if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
            return [arrayLike];
          if (it = getIteratorOf(arrayLike)) {
            a = [];
            while (x = it.next(), !x.done)
              a.push(x.value);
            return a;
          }
          if (arrayLike == null)
            return [arrayLike];
          i = arrayLike.length;
          if (typeof i === "number") {
            a = new Array(i);
            while (i--)
              a[i] = arrayLike[i];
            return a;
          }
          return [arrayLike];
        }
        i = arguments.length;
        a = new Array(i);
        while (i--)
          a[i] = arguments[i];
        return a;
      }
      var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn) {
        return fn[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      };
      var dexieErrorNames = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait"
      ];
      var idbDomErrorNames = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone"
      ];
      var errorList = dexieErrorNames.concat(idbDomErrorNames);
      var defaultTexts = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function DexieError(name, msg) {
        this.name = name;
        this.message = msg;
      }
      derive(DexieError).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function getMultiErrorMessage(msg, failures) {
        return msg + ". Errors: " + Object.keys(failures).map(function(key) {
          return failures[key].toString();
        }).filter(function(v, i, s) {
          return s.indexOf(v) === i;
        }).join("\n");
      }
      function ModifyError(msg, failures, successCount, failedKeys) {
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        this.message = getMultiErrorMessage(msg, failures);
      }
      derive(ModifyError).from(DexieError);
      function BulkError(msg, failures) {
        this.name = "BulkError";
        this.failures = Object.keys(failures).map(function(pos) {
          return failures[pos];
        });
        this.failuresByPos = failures;
        this.message = getMultiErrorMessage(msg, this.failures);
      }
      derive(BulkError).from(DexieError);
      var errnames = errorList.reduce(function(obj, name) {
        return obj[name] = name + "Error", obj;
      }, {});
      var BaseException = DexieError;
      var exceptions = errorList.reduce(function(obj, name) {
        var fullName = name + "Error";
        function DexieError2(msgOrInner, inner) {
          this.name = fullName;
          if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
          } else if (typeof msgOrInner === "string") {
            this.message = "".concat(msgOrInner).concat(!inner ? "" : "\n " + inner);
            this.inner = inner || null;
          } else if (typeof msgOrInner === "object") {
            this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message);
            this.inner = msgOrInner;
          }
        }
        derive(DexieError2).from(BaseException);
        obj[name] = DexieError2;
        return obj;
      }, {});
      exceptions.Syntax = SyntaxError;
      exceptions.Type = TypeError;
      exceptions.Range = RangeError;
      var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
        obj[name + "Error"] = exceptions[name];
        return obj;
      }, {});
      function mapError(domError, message) {
        if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
          return domError;
        var rv = new exceptionMap[domError.name](message || domError.message, domError);
        if ("stack" in domError) {
          setProp(rv, "stack", { get: function() {
            return this.inner.stack;
          } });
        }
        return rv;
      }
      var fullNameExceptions = errorList.reduce(function(obj, name) {
        if (["Syntax", "Type", "Range"].indexOf(name) === -1)
          obj[name + "Error"] = exceptions[name];
        return obj;
      }, {});
      fullNameExceptions.ModifyError = ModifyError;
      fullNameExceptions.DexieError = DexieError;
      fullNameExceptions.BulkError = BulkError;
      function nop() {
      }
      function mirror(val) {
        return val;
      }
      function pureFunctionChain(f1, f2) {
        if (f1 == null || f1 === mirror)
          return f2;
        return function(val) {
          return f2(f1(val));
        };
      }
      function callBoth(on1, on2) {
        return function() {
          on1.apply(this, arguments);
          on2.apply(this, arguments);
        };
      }
      function hookCreatingChain(f1, f2) {
        if (f1 === nop)
          return f2;
        return function() {
          var res = f1.apply(this, arguments);
          if (res !== void 0)
            arguments[0] = res;
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = null;
          this.onerror = null;
          var res2 = f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          return res2 !== void 0 ? res2 : res;
        };
      }
      function hookDeletingChain(f1, f2) {
        if (f1 === nop)
          return f2;
        return function() {
          f1.apply(this, arguments);
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = this.onerror = null;
          f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        };
      }
      function hookUpdatingChain(f1, f2) {
        if (f1 === nop)
          return f2;
        return function(modifications) {
          var res = f1.apply(this, arguments);
          extend(modifications, res);
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = null;
          this.onerror = null;
          var res2 = f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
        };
      }
      function reverseStoppableEventChain(f1, f2) {
        if (f1 === nop)
          return f2;
        return function() {
          if (f2.apply(this, arguments) === false)
            return false;
          return f1.apply(this, arguments);
        };
      }
      function promisableChain(f1, f2) {
        if (f1 === nop)
          return f2;
        return function() {
          var res = f1.apply(this, arguments);
          if (res && typeof res.then === "function") {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
              args[i] = arguments[i];
            return res.then(function() {
              return f2.apply(thiz, args);
            });
          }
          return f2.apply(this, arguments);
        };
      }
      var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function setDebug(value, filter) {
        debug = value;
      }
      var INTERNAL = {};
      var ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function() {
        var globalP = Promise.resolve();
        if (typeof crypto === "undefined" || !crypto.subtle)
          return [globalP, getProto(globalP), globalP];
        var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
          nativeP,
          getProto(nativeP),
          globalP
        ];
      }(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
      var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
      var patchGlobalPromise = !!resolvedGlobalPromise;
      function schedulePhysicalTick() {
        queueMicrotask(physicalTick);
      }
      var asap = function(callback, args) {
        microtickQueue.push([callback, args]);
        if (needsNewPhysicalTick) {
          schedulePhysicalTick();
          needsNewPhysicalTick = false;
        }
      };
      var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror;
      var globalPSD = {
        id: "global",
        global: true,
        ref: 0,
        unhandleds: [],
        onunhandled: nop,
        pgp: false,
        env: {},
        finalize: nop
      };
      var PSD = globalPSD;
      var microtickQueue = [];
      var numScheduledCalls = 0;
      var tickFinalizers = [];
      function DexiePromise(fn) {
        if (typeof this !== "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [];
        this._lib = false;
        var psd = this._PSD = PSD;
        if (typeof fn !== "function") {
          if (fn !== INTERNAL)
            throw new TypeError("Not a function");
          this._state = arguments[1];
          this._value = arguments[2];
          if (this._state === false)
            handleRejection(this, this._value);
          return;
        }
        this._state = null;
        this._value = null;
        ++psd.ref;
        executePromiseTask(this, fn);
      }
      var thenProp = {
        get: function() {
          var psd = PSD, microTaskId = totalEchoes;
          function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function(resolve, reject) {
              propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            if (this._consoleTask)
              rv._consoleTask = this._consoleTask;
            return rv;
          }
          then.prototype = INTERNAL;
          return then;
        },
        set: function(value) {
          setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
            get: function() {
              return value;
            },
            set: thenProp.set
          });
        }
      };
      props(DexiePromise.prototype, {
        then: thenProp,
        _then: function(onFulfilled, onRejected) {
          propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
        },
        catch: function(onRejected) {
          if (arguments.length === 1)
            return this.then(null, onRejected);
          var type2 = arguments[0], handler = arguments[1];
          return typeof type2 === "function" ? this.then(null, function(err) {
            return err instanceof type2 ? handler(err) : PromiseReject(err);
          }) : this.then(null, function(err) {
            return err && err.name === type2 ? handler(err) : PromiseReject(err);
          });
        },
        finally: function(onFinally) {
          return this.then(function(value) {
            return DexiePromise.resolve(onFinally()).then(function() {
              return value;
            });
          }, function(err) {
            return DexiePromise.resolve(onFinally()).then(function() {
              return PromiseReject(err);
            });
          });
        },
        timeout: function(ms, msg) {
          var _this = this;
          return ms < Infinity ? new DexiePromise(function(resolve, reject) {
            var handle = setTimeout(function() {
              return reject(new exceptions.Timeout(msg));
            }, ms);
            _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
          }) : this;
        }
      });
      if (typeof Symbol !== "undefined" && Symbol.toStringTag)
        setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
      globalPSD.env = snapShot();
      function Listener(onFulfilled, onRejected, resolve, reject, zone) {
        this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
        this.onRejected = typeof onRejected === "function" ? onRejected : null;
        this.resolve = resolve;
        this.reject = reject;
        this.psd = zone;
      }
      props(DexiePromise, {
        all: function() {
          var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            if (values.length === 0)
              resolve([]);
            var remaining = values.length;
            values.forEach(function(a, i) {
              return DexiePromise.resolve(a).then(function(x) {
                values[i] = x;
                if (!--remaining)
                  resolve(values);
              }, reject);
            });
          });
        },
        resolve: function(value) {
          if (value instanceof DexiePromise)
            return value;
          if (value && typeof value.then === "function")
            return new DexiePromise(function(resolve, reject) {
              value.then(resolve, reject);
            });
          var rv = new DexiePromise(INTERNAL, true, value);
          return rv;
        },
        reject: PromiseReject,
        race: function() {
          var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            values.map(function(value) {
              return DexiePromise.resolve(value).then(resolve, reject);
            });
          });
        },
        PSD: {
          get: function() {
            return PSD;
          },
          set: function(value) {
            return PSD = value;
          }
        },
        totalEchoes: { get: function() {
          return totalEchoes;
        } },
        newPSD: newScope,
        usePSD,
        scheduler: {
          get: function() {
            return asap;
          },
          set: function(value) {
            asap = value;
          }
        },
        rejectionMapper: {
          get: function() {
            return rejectionMapper;
          },
          set: function(value) {
            rejectionMapper = value;
          }
        },
        follow: function(fn, zoneProps) {
          return new DexiePromise(function(resolve, reject) {
            return newScope(function(resolve2, reject2) {
              var psd = PSD;
              psd.unhandleds = [];
              psd.onunhandled = reject2;
              psd.finalize = callBoth(function() {
                var _this = this;
                run_at_end_of_this_or_next_physical_tick(function() {
                  _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
                });
              }, psd.finalize);
              fn();
            }, zoneProps, resolve, reject);
          });
        }
      });
      if (NativePromise) {
        if (NativePromise.allSettled)
          setProp(DexiePromise, "allSettled", function() {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve) {
              if (possiblePromises.length === 0)
                resolve([]);
              var remaining = possiblePromises.length;
              var results = new Array(remaining);
              possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                  return results[i] = { status: "fulfilled", value };
                }, function(reason) {
                  return results[i] = { status: "rejected", reason };
                }).then(function() {
                  return --remaining || resolve(results);
                });
              });
            });
          });
        if (NativePromise.any && typeof AggregateError !== "undefined")
          setProp(DexiePromise, "any", function() {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              if (possiblePromises.length === 0)
                reject(new AggregateError([]));
              var remaining = possiblePromises.length;
              var failures = new Array(remaining);
              possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                  return resolve(value);
                }, function(failure) {
                  failures[i] = failure;
                  if (!--remaining)
                    reject(new AggregateError(failures));
                });
              });
            });
          });
        if (NativePromise.withResolvers)
          DexiePromise.withResolvers = NativePromise.withResolvers;
      }
      function executePromiseTask(promise, fn) {
        try {
          fn(function(value) {
            if (promise._state !== null)
              return;
            if (value === promise)
              throw new TypeError("A promise cannot be resolved with itself.");
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === "function") {
              executePromiseTask(promise, function(resolve, reject) {
                value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
              });
            } else {
              promise._state = true;
              promise._value = value;
              propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
              endMicroTickScope();
          }, handleRejection.bind(null, promise));
        } catch (ex) {
          handleRejection(promise, ex);
        }
      }
      function handleRejection(promise, reason) {
        rejectingErrors.push(reason);
        if (promise._state !== null)
          return;
        var shouldExecuteTick = promise._lib && beginMicroTickScope();
        reason = rejectionMapper(reason);
        promise._state = false;
        promise._value = reason;
        addPossiblyUnhandledError(promise);
        propagateAllListeners(promise);
        if (shouldExecuteTick)
          endMicroTickScope();
      }
      function propagateAllListeners(promise) {
        var listeners = promise._listeners;
        promise._listeners = [];
        for (var i = 0, len = listeners.length; i < len; ++i) {
          propagateToListener(promise, listeners[i]);
        }
        var psd = promise._PSD;
        --psd.ref || psd.finalize();
        if (numScheduledCalls === 0) {
          ++numScheduledCalls;
          asap(function() {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
          }, []);
        }
      }
      function propagateToListener(promise, listener) {
        if (promise._state === null) {
          promise._listeners.push(listener);
          return;
        }
        var cb = promise._state ? listener.onFulfilled : listener.onRejected;
        if (cb === null) {
          return (promise._state ? listener.resolve : listener.reject)(promise._value);
        }
        ++listener.psd.ref;
        ++numScheduledCalls;
        asap(callListener, [cb, promise, listener]);
      }
      function callListener(cb, promise, listener) {
        try {
          var ret, value = promise._value;
          if (!promise._state && rejectingErrors.length)
            rejectingErrors = [];
          ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
            return cb(value);
          }) : cb(value);
          if (!promise._state && rejectingErrors.indexOf(value) === -1) {
            markErrorAsHandled(promise);
          }
          listener.resolve(ret);
        } catch (e) {
          listener.reject(e);
        } finally {
          if (--numScheduledCalls === 0)
            finalizePhysicalTick();
          --listener.psd.ref || listener.psd.finalize();
        }
      }
      function physicalTick() {
        usePSD(globalPSD, function() {
          beginMicroTickScope() && endMicroTickScope();
        });
      }
      function beginMicroTickScope() {
        var wasRootExec = isOutsideMicroTick;
        isOutsideMicroTick = false;
        needsNewPhysicalTick = false;
        return wasRootExec;
      }
      function endMicroTickScope() {
        var callbacks, i, l;
        do {
          while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
              var item = callbacks[i];
              item[0].apply(null, item[1]);
            }
          }
        } while (microtickQueue.length > 0);
        isOutsideMicroTick = true;
        needsNewPhysicalTick = true;
      }
      function finalizePhysicalTick() {
        var unhandledErrs = unhandledErrors;
        unhandledErrors = [];
        unhandledErrs.forEach(function(p) {
          p._PSD.onunhandled.call(null, p._value, p);
        });
        var finalizers = tickFinalizers.slice(0);
        var i = finalizers.length;
        while (i)
          finalizers[--i]();
      }
      function run_at_end_of_this_or_next_physical_tick(fn) {
        function finalizer() {
          fn();
          tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
        }
        tickFinalizers.push(finalizer);
        ++numScheduledCalls;
        asap(function() {
          if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        }, []);
      }
      function addPossiblyUnhandledError(promise) {
        if (!unhandledErrors.some(function(p) {
          return p._value === promise._value;
        }))
          unhandledErrors.push(promise);
      }
      function markErrorAsHandled(promise) {
        var i = unhandledErrors.length;
        while (i)
          if (unhandledErrors[--i]._value === promise._value) {
            unhandledErrors.splice(i, 1);
            return;
          }
      }
      function PromiseReject(reason) {
        return new DexiePromise(INTERNAL, false, reason);
      }
      function wrap(fn, errorCatcher) {
        var psd = PSD;
        return function() {
          var wasRootExec = beginMicroTickScope(), outerScope = PSD;
          try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
          } catch (e) {
            errorCatcher && errorCatcher(e);
          } finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
              endMicroTickScope();
          }
        };
      }
      var task = { awaits: 0, echoes: 0, id: 0 };
      var taskCounter = 0;
      var zoneStack = [];
      var zoneEchoes = 0;
      var totalEchoes = 0;
      var zone_id_counter = 0;
      function newScope(fn, props2, a1, a2) {
        var parent = PSD, psd = Object.create(parent);
        psd.parent = parent;
        psd.ref = 0;
        psd.global = false;
        psd.id = ++zone_id_counter;
        globalPSD.env;
        psd.env = patchGlobalPromise ? {
          Promise: DexiePromise,
          PromiseProp: { value: DexiePromise, configurable: true, writable: true },
          all: DexiePromise.all,
          race: DexiePromise.race,
          allSettled: DexiePromise.allSettled,
          any: DexiePromise.any,
          resolve: DexiePromise.resolve,
          reject: DexiePromise.reject
        } : {};
        if (props2)
          extend(psd, props2);
        ++parent.ref;
        psd.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var rv = usePSD(psd, fn, a1, a2);
        if (psd.ref === 0)
          psd.finalize();
        return rv;
      }
      function incrementExpectedAwaits() {
        if (!task.id)
          task.id = ++taskCounter;
        ++task.awaits;
        task.echoes += ZONE_ECHO_LIMIT;
        return task.id;
      }
      function decrementExpectedAwaits() {
        if (!task.awaits)
          return false;
        if (--task.awaits === 0)
          task.id = 0;
        task.echoes = task.awaits * ZONE_ECHO_LIMIT;
        return true;
      }
      if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
        incrementExpectedAwaits = decrementExpectedAwaits = nop;
      }
      function onPossibleParallellAsync(possiblePromise) {
        if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
          incrementExpectedAwaits();
          return possiblePromise.then(function(x) {
            decrementExpectedAwaits();
            return x;
          }, function(e) {
            decrementExpectedAwaits();
            return rejection(e);
          });
        }
        return possiblePromise;
      }
      function zoneEnterEcho(targetZone) {
        ++totalEchoes;
        if (!task.echoes || --task.echoes === 0) {
          task.echoes = task.awaits = task.id = 0;
        }
        zoneStack.push(PSD);
        switchToZone(targetZone, true);
      }
      function zoneLeaveEcho() {
        var zone = zoneStack[zoneStack.length - 1];
        zoneStack.pop();
        switchToZone(zone, false);
      }
      function switchToZone(targetZone, bEnteringZone) {
        var currentZone = PSD;
        if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
          queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
        }
        if (targetZone === PSD)
          return;
        PSD = targetZone;
        if (currentZone === globalPSD)
          globalPSD.env = snapShot();
        if (patchGlobalPromise) {
          var GlobalPromise = globalPSD.env.Promise;
          var targetEnv = targetZone.env;
          if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
            GlobalPromise.all = targetEnv.all;
            GlobalPromise.race = targetEnv.race;
            GlobalPromise.resolve = targetEnv.resolve;
            GlobalPromise.reject = targetEnv.reject;
            if (targetEnv.allSettled)
              GlobalPromise.allSettled = targetEnv.allSettled;
            if (targetEnv.any)
              GlobalPromise.any = targetEnv.any;
          }
        }
      }
      function snapShot() {
        var GlobalPromise = _global.Promise;
        return patchGlobalPromise ? {
          Promise: GlobalPromise,
          PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
          all: GlobalPromise.all,
          race: GlobalPromise.race,
          allSettled: GlobalPromise.allSettled,
          any: GlobalPromise.any,
          resolve: GlobalPromise.resolve,
          reject: GlobalPromise.reject
        } : {};
      }
      function usePSD(psd, fn, a1, a2, a3) {
        var outerScope = PSD;
        try {
          switchToZone(psd, true);
          return fn(a1, a2, a3);
        } finally {
          switchToZone(outerScope, false);
        }
      }
      function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
        return typeof fn !== "function" ? fn : function() {
          var outerZone = PSD;
          if (possibleAwait)
            incrementExpectedAwaits();
          switchToZone(zone, true);
          try {
            return fn.apply(this, arguments);
          } finally {
            switchToZone(outerZone, false);
            if (cleanup)
              queueMicrotask(decrementExpectedAwaits);
          }
        };
      }
      function execInGlobalContext(cb) {
        if (Promise === NativePromise && task.echoes === 0) {
          if (zoneEchoes === 0) {
            cb();
          } else {
            enqueueNativeMicroTask(cb);
          }
        } else {
          setTimeout(cb, 0);
        }
      }
      var rejection = DexiePromise.reject;
      function tempTransaction(db2, mode, storeNames, fn) {
        if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
          if (db2._state.openComplete) {
            return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
          }
          if (!db2._state.isBeingOpened) {
            if (!db2._state.autoOpen)
              return rejection(new exceptions.DatabaseClosed());
            db2.open().catch(nop);
          }
          return db2._state.dbReadyPromise.then(function() {
            return tempTransaction(db2, mode, storeNames, fn);
          });
        } else {
          var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
          try {
            trans.create();
            db2._state.PR1398_maxLoop = 3;
          } catch (ex) {
            if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
              console.warn("Dexie: Need to reopen db");
              db2.close({ disableAutoOpen: false });
              return db2.open().then(function() {
                return tempTransaction(db2, mode, storeNames, fn);
              });
            }
            return rejection(ex);
          }
          return trans._promise(mode, function(resolve, reject) {
            return newScope(function() {
              PSD.trans = trans;
              return fn(resolve, reject, trans);
            });
          }).then(function(result) {
            if (mode === "readwrite")
              try {
                trans.idbtrans.commit();
              } catch (_a2) {
              }
            return mode === "readonly" ? result : trans._completion.then(function() {
              return result;
            });
          });
        }
      }
      var DEXIE_VERSION = "4.3.0";
      var maxString = String.fromCharCode(65535);
      var minKey = -Infinity;
      var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
      var STRING_EXPECTED = "String expected.";
      var connections = [];
      var DBNAMES_DB = "__dbnames";
      var READONLY = "readonly";
      var READWRITE = "readwrite";
      function combine(filter1, filter2) {
        return filter1 ? filter2 ? function() {
          return filter1.apply(this, arguments) && filter2.apply(this, arguments);
        } : filter1 : filter2;
      }
      var AnyRange = {
        type: 3,
        lower: -Infinity,
        lowerOpen: false,
        upper: [[]],
        upperOpen: false
      };
      function workaroundForUndefinedPrimKey(keyPath) {
        return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
          if (obj[keyPath] === void 0 && keyPath in obj) {
            obj = deepClone(obj);
            delete obj[keyPath];
          }
          return obj;
        } : function(obj) {
          return obj;
        };
      }
      function Entity2() {
        throw exceptions.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function cmp2(a, b) {
        try {
          var ta = type(a);
          var tb = type(b);
          if (ta !== tb) {
            if (ta === "Array")
              return 1;
            if (tb === "Array")
              return -1;
            if (ta === "binary")
              return 1;
            if (tb === "binary")
              return -1;
            if (ta === "string")
              return 1;
            if (tb === "string")
              return -1;
            if (ta === "Date")
              return 1;
            if (tb !== "Date")
              return NaN;
            return -1;
          }
          switch (ta) {
            case "number":
            case "Date":
            case "string":
              return a > b ? 1 : a < b ? -1 : 0;
            case "binary": {
              return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
            }
            case "Array":
              return compareArrays(a, b);
          }
        } catch (_a2) {
        }
        return NaN;
      }
      function compareArrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
          var res = cmp2(a[i], b[i]);
          if (res !== 0)
            return res;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
      }
      function compareUint8Arrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
          if (a[i] !== b[i])
            return a[i] < b[i] ? -1 : 1;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
      }
      function type(x) {
        var t = typeof x;
        if (t !== "object")
          return t;
        if (ArrayBuffer.isView(x))
          return "binary";
        var tsTag = toStringTag(x);
        return tsTag === "ArrayBuffer" ? "binary" : tsTag;
      }
      function getUint8Array(a) {
        if (a instanceof Uint8Array)
          return a;
        if (ArrayBuffer.isView(a))
          return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        return new Uint8Array(a);
      }
      function builtInDeletionTrigger(table, keys2, res) {
        var yProps = table.schema.yProps;
        if (!yProps)
          return res;
        if (keys2 && res.numFailures > 0)
          keys2 = keys2.filter(function(_, i) {
            return !res.failures[i];
          });
        return Promise.all(yProps.map(function(_a2) {
          var updatesTable = _a2.updatesTable;
          return keys2 ? table.db.table(updatesTable).where("k").anyOf(keys2).delete() : table.db.table(updatesTable).clear();
        })).then(function() {
          return res;
        });
      }
      var PropModification2 = function() {
        function PropModification3(spec) {
          this["@@propmod"] = spec;
        }
        PropModification3.prototype.execute = function(value) {
          var _a2;
          var spec = this["@@propmod"];
          if (spec.add !== void 0) {
            var term = spec.add;
            if (isArray(term)) {
              return __spreadArray(__spreadArray([], isArray(value) ? value : [], true), term, true).sort();
            }
            if (typeof term === "number")
              return (Number(value) || 0) + term;
            if (typeof term === "bigint") {
              try {
                return BigInt(value) + term;
              } catch (_b) {
                return BigInt(0) + term;
              }
            }
            throw new TypeError("Invalid term ".concat(term));
          }
          if (spec.remove !== void 0) {
            var subtrahend_1 = spec.remove;
            if (isArray(subtrahend_1)) {
              return isArray(value) ? value.filter(function(item) {
                return !subtrahend_1.includes(item);
              }).sort() : [];
            }
            if (typeof subtrahend_1 === "number")
              return Number(value) - subtrahend_1;
            if (typeof subtrahend_1 === "bigint") {
              try {
                return BigInt(value) - subtrahend_1;
              } catch (_c) {
                return BigInt(0) - subtrahend_1;
              }
            }
            throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
          }
          var prefixToReplace = (_a2 = spec.replacePrefix) === null || _a2 === void 0 ? void 0 : _a2[0];
          if (prefixToReplace && typeof value === "string" && value.startsWith(prefixToReplace)) {
            return spec.replacePrefix[1] + value.substring(prefixToReplace.length);
          }
          return value;
        };
        return PropModification3;
      }();
      function applyUpdateSpec(obj, changes) {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        var anythingModified = false;
        for (var i = 0; i < numKeys; ++i) {
          var keyPath = keyPaths[i];
          var value = changes[keyPath];
          var origValue = getByKeyPath(obj, keyPath);
          if (value instanceof PropModification2) {
            setByKeyPath(obj, keyPath, value.execute(origValue));
            anythingModified = true;
          } else if (origValue !== value) {
            setByKeyPath(obj, keyPath, value);
            anythingModified = true;
          }
        }
        return anythingModified;
      }
      var Table2 = function() {
        function Table3() {
        }
        Table3.prototype._trans = function(mode, fn, writeLocked) {
          var trans = this._tx || PSD.trans;
          var tableName = this.name;
          var task2 = debug && typeof console !== "undefined" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
          function checkTableInTransaction(resolve, reject, trans2) {
            if (!trans2.schema[tableName])
              throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans2.idbtrans, trans2);
          }
          var wasRootExec = beginMicroTickScope();
          try {
            var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
              return trans._promise(mode, checkTableInTransaction, writeLocked);
            }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
            if (task2) {
              p._consoleTask = task2;
              p = p.catch(function(err) {
                console.trace(err);
                return rejection(err);
              });
            }
            return p;
          } finally {
            if (wasRootExec)
              endMicroTickScope();
          }
        };
        Table3.prototype.get = function(keyOrCrit, cb) {
          var _this = this;
          if (keyOrCrit && keyOrCrit.constructor === Object)
            return this.where(keyOrCrit).first(cb);
          if (keyOrCrit == null)
            return rejection(new exceptions.Type("Invalid argument to Table.get()"));
          return this._trans("readonly", function(trans) {
            return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
              return _this.hook.reading.fire(res);
            });
          }).then(cb);
        };
        Table3.prototype.where = function(indexOrCrit) {
          if (typeof indexOrCrit === "string")
            return new this.db.WhereClause(this, indexOrCrit);
          if (isArray(indexOrCrit))
            return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
          var keyPaths = keys(indexOrCrit);
          if (keyPaths.length === 1)
            return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
          var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
            if (ix.compound && keyPaths.every(function(keyPath) {
              return ix.keyPath.indexOf(keyPath) >= 0;
            })) {
              for (var i = 0; i < keyPaths.length; ++i) {
                if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                  return false;
              }
              return true;
            }
            return false;
          }).sort(function(a, b) {
            return a.keyPath.length - b.keyPath.length;
          })[0];
          if (compoundIndex && this.db._maxKey !== maxString) {
            var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
            return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
              return indexOrCrit[kp];
            }));
          }
          if (!compoundIndex && debug)
            console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
          var idxByName = this.schema.idxByName;
          function equals(a, b) {
            return cmp2(a, b) === 0;
          }
          var _a2 = keyPaths.reduce(function(_a3, keyPath) {
            var prevIndex = _a3[0], prevFilterFn = _a3[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
              prevIndex || index,
              prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                var prop = getByKeyPath(x, keyPath);
                return isArray(prop) && prop.some(function(item) {
                  return equals(value, item);
                });
              } : function(x) {
                return equals(value, getByKeyPath(x, keyPath));
              }) : prevFilterFn
            ];
          }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
          return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
        };
        Table3.prototype.filter = function(filterFunction) {
          return this.toCollection().and(filterFunction);
        };
        Table3.prototype.count = function(thenShortcut) {
          return this.toCollection().count(thenShortcut);
        };
        Table3.prototype.offset = function(offset) {
          return this.toCollection().offset(offset);
        };
        Table3.prototype.limit = function(numRows) {
          return this.toCollection().limit(numRows);
        };
        Table3.prototype.each = function(callback) {
          return this.toCollection().each(callback);
        };
        Table3.prototype.toArray = function(thenShortcut) {
          return this.toCollection().toArray(thenShortcut);
        };
        Table3.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        };
        Table3.prototype.orderBy = function(index) {
          return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[".concat(index.join("+"), "]") : index));
        };
        Table3.prototype.reverse = function() {
          return this.toCollection().reverse();
        };
        Table3.prototype.mapToClass = function(constructor) {
          var _a2 = this, db2 = _a2.db, tableName = _a2.name;
          this.schema.mappedClass = constructor;
          if (constructor.prototype instanceof Entity2) {
            constructor = function(_super) {
              __extends(class_1, _super);
              function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
              }
              Object.defineProperty(class_1.prototype, "db", {
                get: function() {
                  return db2;
                },
                enumerable: false,
                configurable: true
              });
              class_1.prototype.table = function() {
                return tableName;
              };
              return class_1;
            }(constructor);
          }
          var inheritedProps = /* @__PURE__ */ new Set();
          for (var proto = constructor.prototype; proto; proto = getProto(proto)) {
            Object.getOwnPropertyNames(proto).forEach(function(propName) {
              return inheritedProps.add(propName);
            });
          }
          var readHook = function(obj) {
            if (!obj)
              return obj;
            var res = Object.create(constructor.prototype);
            for (var m in obj)
              if (!inheritedProps.has(m))
                try {
                  res[m] = obj[m];
                } catch (_) {
                }
            return res;
          };
          if (this.schema.readHook) {
            this.hook.reading.unsubscribe(this.schema.readHook);
          }
          this.schema.readHook = readHook;
          this.hook("reading", readHook);
          return constructor;
        };
        Table3.prototype.defineClass = function() {
          function Class(content) {
            extend(this, content);
          }
          return this.mapToClass(Class);
        };
        Table3.prototype.add = function(obj, key) {
          var _this = this;
          var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          var objToAdd = obj;
          if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
          }
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
          }).then(function(lastResult) {
            if (keyPath) {
              try {
                setByKeyPath(obj, keyPath, lastResult);
              } catch (_) {
              }
            }
            return lastResult;
          });
        };
        Table3.prototype.upsert = function(key, modifications) {
          var _this = this;
          var keyPath = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(trans) {
            return _this.core.get({ trans, key }).then(function(existing) {
              var obj = existing !== null && existing !== void 0 ? existing : {};
              applyUpdateSpec(obj, modifications);
              if (keyPath)
                setByKeyPath(obj, keyPath, key);
              return _this.core.mutate({
                trans,
                type: "put",
                values: [obj],
                keys: [key],
                upsert: true,
                updates: { keys: [key], changeSpecs: [modifications] }
              }).then(function(res) {
                return res.numFailures ? DexiePromise.reject(res.failures[0]) : !!existing;
              });
            });
          });
        };
        Table3.prototype.update = function(keyOrObject, modifications) {
          if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
            var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
            if (key === void 0)
              return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            return this.where(":id").equals(key).modify(modifications);
          } else {
            return this.where(":id").equals(keyOrObject).modify(modifications);
          }
        };
        Table3.prototype.put = function(obj, key) {
          var _this = this;
          var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          var objToAdd = obj;
          if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
          }
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
          }).then(function(lastResult) {
            if (keyPath) {
              try {
                setByKeyPath(obj, keyPath, lastResult);
              } catch (_) {
              }
            }
            return lastResult;
          });
        };
        Table3.prototype.delete = function(key) {
          var _this = this;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "delete", keys: [key] }).then(function(res) {
              return builtInDeletionTrigger(_this, [key], res);
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
            });
          });
        };
        Table3.prototype.clear = function() {
          var _this = this;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange }).then(function(res) {
              return builtInDeletionTrigger(_this, null, res);
            });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
          });
        };
        Table3.prototype.bulkGet = function(keys2) {
          var _this = this;
          return this._trans("readonly", function(trans) {
            return _this.core.getMany({
              keys: keys2,
              trans
            }).then(function(result) {
              return result.map(function(res) {
                return _this.hook.reading.fire(res);
              });
            });
          });
        };
        Table3.prototype.bulkAdd = function(objects, keysOrOptions, options) {
          var _this = this;
          var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
          options = options || (keys2 ? void 0 : keysOrOptions);
          var wantResults = options ? options.allKeys : void 0;
          return this._trans("readwrite", function(trans) {
            var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            if (keyPath && keys2)
              throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys2 && keys2.length !== objects.length)
              throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(function(_a3) {
              var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
              var result = wantResults ? results : lastResult;
              if (numFailures === 0)
                return result;
              throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
            });
          });
        };
        Table3.prototype.bulkPut = function(objects, keysOrOptions, options) {
          var _this = this;
          var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
          options = options || (keys2 ? void 0 : keysOrOptions);
          var wantResults = options ? options.allKeys : void 0;
          return this._trans("readwrite", function(trans) {
            var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            if (keyPath && keys2)
              throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys2 && keys2.length !== objects.length)
              throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(function(_a3) {
              var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
              var result = wantResults ? results : lastResult;
              if (numFailures === 0)
                return result;
              throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
            });
          });
        };
        Table3.prototype.bulkUpdate = function(keysAndChanges) {
          var _this = this;
          var coreTable = this.core;
          var keys2 = keysAndChanges.map(function(entry) {
            return entry.key;
          });
          var changeSpecs = keysAndChanges.map(function(entry) {
            return entry.changes;
          });
          var offsetMap = [];
          return this._trans("readwrite", function(trans) {
            return coreTable.getMany({ trans, keys: keys2, cache: "clone" }).then(function(objs) {
              var resultKeys = [];
              var resultObjs = [];
              keysAndChanges.forEach(function(_a2, idx) {
                var key = _a2.key, changes = _a2.changes;
                var obj = objs[idx];
                if (obj) {
                  for (var _i = 0, _b = Object.keys(changes); _i < _b.length; _i++) {
                    var keyPath = _b[_i];
                    var value = changes[keyPath];
                    if (keyPath === _this.schema.primKey.keyPath) {
                      if (cmp2(value, key) !== 0) {
                        throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                      }
                    } else {
                      setByKeyPath(obj, keyPath, value);
                    }
                  }
                  offsetMap.push(idx);
                  resultKeys.push(key);
                  resultObjs.push(obj);
                }
              });
              var numEntries = resultKeys.length;
              return coreTable.mutate({
                trans,
                type: "put",
                keys: resultKeys,
                values: resultObjs,
                updates: {
                  keys: keys2,
                  changeSpecs
                }
              }).then(function(_a2) {
                var numFailures = _a2.numFailures, failures = _a2.failures;
                if (numFailures === 0)
                  return numEntries;
                for (var _i = 0, _b = Object.keys(failures); _i < _b.length; _i++) {
                  var offset = _b[_i];
                  var mappedOffset = offsetMap[Number(offset)];
                  if (mappedOffset != null) {
                    var failure = failures[offset];
                    delete failures[offset];
                    failures[mappedOffset] = failure;
                  }
                }
                throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
              });
            });
          });
        };
        Table3.prototype.bulkDelete = function(keys2) {
          var _this = this;
          var numKeys = keys2.length;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "delete", keys: keys2 }).then(function(res) {
              return builtInDeletionTrigger(_this, keys2, res);
            });
          }).then(function(_a2) {
            var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
            if (numFailures === 0)
              return lastResult;
            throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
          });
        };
        return Table3;
      }();
      function Events(ctx) {
        var evs = {};
        var rv = function(eventName, subscriber) {
          if (subscriber) {
            var i2 = arguments.length, args = new Array(i2 - 1);
            while (--i2)
              args[i2 - 1] = arguments[i2];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
          } else if (typeof eventName === "string") {
            return evs[eventName];
          }
        };
        rv.addEventType = add3;
        for (var i = 1, l = arguments.length; i < l; ++i) {
          add3(arguments[i]);
        }
        return rv;
        function add3(eventName, chainFunction, defaultFunction) {
          if (typeof eventName === "object")
            return addConfiguredEvents(eventName);
          if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
          if (!defaultFunction)
            defaultFunction = nop;
          var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function(cb) {
              if (context.subscribers.indexOf(cb) === -1) {
                context.subscribers.push(cb);
                context.fire = chainFunction(context.fire, cb);
              }
            },
            unsubscribe: function(cb) {
              context.subscribers = context.subscribers.filter(function(fn) {
                return fn !== cb;
              });
              context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
          };
          evs[eventName] = rv[eventName] = context;
          return context;
        }
        function addConfiguredEvents(cfg) {
          keys(cfg).forEach(function(eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
              add3(eventName, cfg[eventName][0], cfg[eventName][1]);
            } else if (args === "asap") {
              var context = add3(eventName, mirror, function fire() {
                var i2 = arguments.length, args2 = new Array(i2);
                while (i2--)
                  args2[i2] = arguments[i2];
                context.subscribers.forEach(function(fn) {
                  asap$1(function fireEvent() {
                    fn.apply(null, args2);
                  });
                });
              });
            } else
              throw new exceptions.InvalidArgument("Invalid event config");
          });
        }
      }
      function makeClassConstructor(prototype, constructor) {
        derive(constructor).from({ prototype });
        return constructor;
      }
      function createTableConstructor(db2) {
        return makeClassConstructor(Table2.prototype, function Table3(name, tableSchema, trans) {
          this.db = db2;
          this._tx = trans;
          this.name = name;
          this.schema = tableSchema;
          this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
          });
        });
      }
      function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
      }
      function addFilter(ctx, fn) {
        ctx.filter = combine(ctx.filter, fn);
      }
      function addReplayFilter(ctx, factory, isLimitFilter) {
        var curr = ctx.replayFilter;
        ctx.replayFilter = curr ? function() {
          return combine(curr(), factory());
        } : factory;
        ctx.justLimit = isLimitFilter && !curr;
      }
      function addMatchFilter(ctx, fn) {
        ctx.isMatch = combine(ctx.isMatch, fn);
      }
      function getIndexOrStore(ctx, coreSchema) {
        if (ctx.isPrimKey)
          return coreSchema.primaryKey;
        var index = coreSchema.getIndexByKeyPath(ctx.index);
        if (!index)
          throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
        return index;
      }
      function openCursor(ctx, coreTable, trans) {
        var index = getIndexOrStore(ctx, coreTable.schema);
        return coreTable.openCursor({
          trans,
          values: !ctx.keysOnly,
          reverse: ctx.dir === "prev",
          unique: !!ctx.unique,
          query: {
            index,
            range: ctx.range
          }
        });
      }
      function iter(ctx, fn, coreTrans, coreTable) {
        var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
        if (!ctx.or) {
          return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
        } else {
          var set_1 = {};
          var union = function(item, cursor, advance) {
            if (!filter || filter(cursor, advance, function(result) {
              return cursor.stop(result);
            }, function(err) {
              return cursor.fail(err);
            })) {
              var primaryKey = cursor.primaryKey;
              var key = "" + primaryKey;
              if (key === "[object ArrayBuffer]")
                key = "" + new Uint8Array(primaryKey);
              if (!hasOwn(set_1, key)) {
                set_1[key] = true;
                fn(item, cursor, advance);
              }
            }
          };
          return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
          ]);
        }
      }
      function iterate(cursorPromise, filter, fn, valueMapper) {
        var mappedFn = valueMapper ? function(x, c, a) {
          return fn(valueMapper(x), c, a);
        } : fn;
        var wrappedFn = wrap(mappedFn);
        return cursorPromise.then(function(cursor) {
          if (cursor) {
            return cursor.start(function() {
              var c = function() {
                return cursor.continue();
              };
              if (!filter || filter(cursor, function(advancer) {
                return c = advancer;
              }, function(val) {
                cursor.stop(val);
                c = nop;
              }, function(e) {
                cursor.fail(e);
                c = nop;
              }))
                wrappedFn(cursor.value, cursor, function(advancer) {
                  return c = advancer;
                });
              c();
            });
          }
        });
      }
      var Collection = function() {
        function Collection2() {
        }
        Collection2.prototype._read = function(fn, cb) {
          var ctx = this._ctx;
          return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
        };
        Collection2.prototype._write = function(fn) {
          var ctx = this._ctx;
          return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
        };
        Collection2.prototype._addAlgorithm = function(fn) {
          var ctx = this._ctx;
          ctx.algorithm = combine(ctx.algorithm, fn);
        };
        Collection2.prototype._iterate = function(fn, coreTrans) {
          return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
        };
        Collection2.prototype.clone = function(props2) {
          var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
          if (props2)
            extend(ctx, props2);
          rv._ctx = ctx;
          return rv;
        };
        Collection2.prototype.raw = function() {
          this._ctx.valueMapper = null;
          return this;
        };
        Collection2.prototype.each = function(fn) {
          var ctx = this._ctx;
          return this._read(function(trans) {
            return iter(ctx, fn, trans, ctx.table.core);
          });
        };
        Collection2.prototype.count = function(cb) {
          var _this = this;
          return this._read(function(trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) {
              return coreTable.count({
                trans,
                query: {
                  index: getIndexOrStore(ctx, coreTable.schema),
                  range: ctx.range
                }
              }).then(function(count2) {
                return Math.min(count2, ctx.limit);
              });
            } else {
              var count = 0;
              return iter(ctx, function() {
                ++count;
                return false;
              }, trans, coreTable).then(function() {
                return count;
              });
            }
          }).then(cb);
        };
        Collection2.prototype.sortBy = function(keyPath, cb) {
          var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
          function getval(obj, i) {
            if (i)
              return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
          }
          var order = this._ctx.dir === "next" ? 1 : -1;
          function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return cmp2(aVal, bVal) * order;
          }
          return this.toArray(function(a) {
            return a.sort(sorter);
          }).then(cb);
        };
        Collection2.prototype.toArray = function(cb) {
          var _this = this;
          return this._read(function(trans) {
            var ctx = _this._ctx;
            if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
              var valueMapper_1 = ctx.valueMapper;
              var index = getIndexOrStore(ctx, ctx.table.core.schema);
              return ctx.table.core.query({
                trans,
                limit: ctx.limit,
                values: true,
                query: {
                  index,
                  range: ctx.range
                }
              }).then(function(_a2) {
                var result = _a2.result;
                return valueMapper_1 ? result.map(valueMapper_1) : result;
              });
            } else {
              var a_1 = [];
              return iter(ctx, function(item) {
                return a_1.push(item);
              }, trans, ctx.table.core).then(function() {
                return a_1;
              });
            }
          }, cb);
        };
        Collection2.prototype.offset = function(offset) {
          var ctx = this._ctx;
          if (offset <= 0)
            return this;
          ctx.offset += offset;
          if (isPlainKeyRange(ctx)) {
            addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function(cursor, advance) {
                if (offsetLeft === 0)
                  return true;
                if (offsetLeft === 1) {
                  --offsetLeft;
                  return false;
                }
                advance(function() {
                  cursor.advance(offsetLeft);
                  offsetLeft = 0;
                });
                return false;
              };
            });
          } else {
            addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function() {
                return --offsetLeft < 0;
              };
            });
          }
          return this;
        };
        Collection2.prototype.limit = function(numRows) {
          this._ctx.limit = Math.min(this._ctx.limit, numRows);
          addReplayFilter(this._ctx, function() {
            var rowsLeft = numRows;
            return function(cursor, advance, resolve) {
              if (--rowsLeft <= 0)
                advance(resolve);
              return rowsLeft >= 0;
            };
          }, true);
          return this;
        };
        Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
          addFilter(this._ctx, function(cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
              advance(resolve);
              return bIncludeStopEntry;
            } else {
              return true;
            }
          });
          return this;
        };
        Collection2.prototype.first = function(cb) {
          return this.limit(1).toArray(function(a) {
            return a[0];
          }).then(cb);
        };
        Collection2.prototype.last = function(cb) {
          return this.reverse().first(cb);
        };
        Collection2.prototype.filter = function(filterFunction) {
          addFilter(this._ctx, function(cursor) {
            return filterFunction(cursor.value);
          });
          addMatchFilter(this._ctx, filterFunction);
          return this;
        };
        Collection2.prototype.and = function(filter) {
          return this.filter(filter);
        };
        Collection2.prototype.or = function(indexName) {
          return new this.db.WhereClause(this._ctx.table, indexName, this);
        };
        Collection2.prototype.reverse = function() {
          this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
          if (this._ondirectionchange)
            this._ondirectionchange(this._ctx.dir);
          return this;
        };
        Collection2.prototype.desc = function() {
          return this.reverse();
        };
        Collection2.prototype.eachKey = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          return this.each(function(val, cursor) {
            cb(cursor.key, cursor);
          });
        };
        Collection2.prototype.eachUniqueKey = function(cb) {
          this._ctx.unique = "unique";
          return this.eachKey(cb);
        };
        Collection2.prototype.eachPrimaryKey = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          return this.each(function(val, cursor) {
            cb(cursor.primaryKey, cursor);
          });
        };
        Collection2.prototype.keys = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          var a = [];
          return this.each(function(item, cursor) {
            a.push(cursor.key);
          }).then(function() {
            return a;
          }).then(cb);
        };
        Collection2.prototype.primaryKeys = function(cb) {
          var ctx = this._ctx;
          if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            return this._read(function(trans) {
              var index = getIndexOrStore(ctx, ctx.table.core.schema);
              return ctx.table.core.query({
                trans,
                values: false,
                limit: ctx.limit,
                query: {
                  index,
                  range: ctx.range
                }
              });
            }).then(function(_a2) {
              var result = _a2.result;
              return result;
            }).then(cb);
          }
          ctx.keysOnly = !ctx.isMatch;
          var a = [];
          return this.each(function(item, cursor) {
            a.push(cursor.primaryKey);
          }).then(function() {
            return a;
          }).then(cb);
        };
        Collection2.prototype.uniqueKeys = function(cb) {
          this._ctx.unique = "unique";
          return this.keys(cb);
        };
        Collection2.prototype.firstKey = function(cb) {
          return this.limit(1).keys(function(a) {
            return a[0];
          }).then(cb);
        };
        Collection2.prototype.lastKey = function(cb) {
          return this.reverse().firstKey(cb);
        };
        Collection2.prototype.distinct = function() {
          var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
          if (!idx || !idx.multi)
            return this;
          var set = {};
          addFilter(this._ctx, function(cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
          });
          return this;
        };
        Collection2.prototype.modify = function(changes) {
          var _this = this;
          var ctx = this._ctx;
          return this._write(function(trans) {
            var modifyer;
            if (typeof changes === "function") {
              modifyer = changes;
            } else {
              modifyer = function(item) {
                return applyUpdateSpec(item, changes);
              };
            }
            var coreTable = ctx.table.core;
            var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
            var limit = 200;
            var modifyChunkSize = _this.db._options.modifyChunkSize;
            if (modifyChunkSize) {
              if (typeof modifyChunkSize == "object") {
                limit = modifyChunkSize[coreTable.name] || modifyChunkSize["*"] || 200;
              } else {
                limit = modifyChunkSize;
              }
            }
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function(expectedCount, res) {
              var failures = res.failures, numFailures = res.numFailures;
              successCount += expectedCount - numFailures;
              for (var _i = 0, _a3 = keys(failures); _i < _a3.length; _i++) {
                var pos = _a3[_i];
                totalFailures.push(failures[pos]);
              }
            };
            var isUnconditionalDelete = changes === deleteCallback;
            return _this.clone().primaryKeys().then(function(keys2) {
              var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || isUnconditionalDelete) && {
                index: ctx.index,
                range: ctx.range
              };
              var nextChunk = function(offset) {
                var count = Math.min(limit, keys2.length - offset);
                var keysInChunk = keys2.slice(offset, offset + count);
                return (isUnconditionalDelete ? Promise.resolve([]) : coreTable.getMany({
                  trans,
                  keys: keysInChunk,
                  cache: "immutable"
                })).then(function(values) {
                  var addValues = [];
                  var putValues = [];
                  var putKeys = outbound ? [] : null;
                  var deleteKeys = isUnconditionalDelete ? keysInChunk : [];
                  if (!isUnconditionalDelete)
                    for (var i = 0; i < count; ++i) {
                      var origValue = values[i];
                      var ctx_1 = {
                        value: deepClone(origValue),
                        primKey: keys2[offset + i]
                      };
                      if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                        if (ctx_1.value == null) {
                          deleteKeys.push(keys2[offset + i]);
                        } else if (!outbound && cmp2(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                          deleteKeys.push(keys2[offset + i]);
                          addValues.push(ctx_1.value);
                        } else {
                          putValues.push(ctx_1.value);
                          if (outbound)
                            putKeys.push(keys2[offset + i]);
                        }
                      }
                    }
                  return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                    for (var pos in res.failures) {
                      deleteKeys.splice(parseInt(pos), 1);
                    }
                    applyMutateResult(addValues.length, res);
                  })).then(function() {
                    return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                      trans,
                      type: "put",
                      keys: putKeys,
                      values: putValues,
                      criteria,
                      changeSpec: typeof changes !== "function" && changes,
                      isAdditionalChunk: offset > 0
                    }).then(function(res) {
                      return applyMutateResult(putValues.length, res);
                    });
                  }).then(function() {
                    return (deleteKeys.length > 0 || criteria && isUnconditionalDelete) && coreTable.mutate({
                      trans,
                      type: "delete",
                      keys: deleteKeys,
                      criteria,
                      isAdditionalChunk: offset > 0
                    }).then(function(res) {
                      return builtInDeletionTrigger(ctx.table, deleteKeys, res);
                    }).then(function(res) {
                      return applyMutateResult(deleteKeys.length, res);
                    });
                  }).then(function() {
                    return keys2.length > offset + count && nextChunk(offset + limit);
                  });
                });
              };
              return nextChunk(0).then(function() {
                if (totalFailures.length > 0)
                  throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                return keys2.length;
              });
            });
          });
        };
        Collection2.prototype.delete = function() {
          var ctx = this._ctx, range = ctx.range;
          if (isPlainKeyRange(ctx) && !ctx.table.schema.yProps && (ctx.isPrimKey || range.type === 3)) {
            return this._write(function(trans) {
              var primaryKey = ctx.table.core.schema.primaryKey;
              var coreRange = range;
              return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
                return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
                  var failures = _a2.failures, numFailures = _a2.numFailures;
                  if (numFailures)
                    throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                      return failures[pos];
                    }), count - numFailures);
                  return count - numFailures;
                });
              });
            });
          }
          return this.modify(deleteCallback);
        };
        return Collection2;
      }();
      var deleteCallback = function(value, ctx) {
        return ctx.value = null;
      };
      function createCollectionConstructor(db2) {
        return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
          this.db = db2;
          var keyRange = AnyRange, error = null;
          if (keyRangeGenerator)
            try {
              keyRange = keyRangeGenerator();
            } catch (ex) {
              error = ex;
            }
          var whereCtx = whereClause._ctx;
          var table = whereCtx.table;
          var readingHook = table.hook.reading.fire;
          this._ctx = {
            table,
            index: whereCtx.index,
            isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
          };
        });
      }
      function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
      }
      function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
      }
      function fail(collectionOrWhereClause, err, T) {
        var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
        collection._ctx.error = T ? new T(err) : new TypeError(err);
        return collection;
      }
      function emptyCollection(whereClause) {
        return new whereClause.Collection(whereClause, function() {
          return rangeEqual("");
        }).limit(0);
      }
      function upperFactory(dir) {
        return dir === "next" ? function(s) {
          return s.toUpperCase();
        } : function(s) {
          return s.toLowerCase();
        };
      }
      function lowerFactory(dir) {
        return dir === "next" ? function(s) {
          return s.toLowerCase();
        } : function(s) {
          return s.toUpperCase();
        };
      }
      function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp3, dir) {
        var length = Math.min(key.length, lowerNeedle.length);
        var llp = -1;
        for (var i = 0; i < length; ++i) {
          var lwrKeyChar = lowerKey[i];
          if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp3(key[i], upperNeedle[i]) < 0)
              return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp3(key[i], lowerNeedle[i]) < 0)
              return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0)
              return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
          }
          if (cmp3(key[i], lwrKeyChar) < 0)
            llp = i;
        }
        if (length < lowerNeedle.length && dir === "next")
          return key + upperNeedle.substr(key.length);
        if (length < key.length && dir === "prev")
          return key.substr(0, upperNeedle.length);
        return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
      }
      function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
        var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
        if (!needles.every(function(s) {
          return typeof s === "string";
        })) {
          return fail(whereClause, STRING_EXPECTED);
        }
        function initDirection(dir) {
          upper = upperFactory(dir);
          lower = lowerFactory(dir);
          compare = dir === "next" ? simpleCompare : simpleCompareReverse;
          var needleBounds = needles.map(function(needle) {
            return { lower: lower(needle), upper: upper(needle) };
          }).sort(function(a, b) {
            return compare(a.lower, b.lower);
          });
          upperNeedles = needleBounds.map(function(nb) {
            return nb.upper;
          });
          lowerNeedles = needleBounds.map(function(nb) {
            return nb.lower;
          });
          direction = dir;
          nextKeySuffix = dir === "next" ? "" : suffix;
        }
        initDirection("next");
        var c = new whereClause.Collection(whereClause, function() {
          return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
        });
        c._ondirectionchange = function(direction2) {
          initDirection(direction2);
        };
        var firstPossibleNeedle = 0;
        c._addAlgorithm(function(cursor, advance, resolve) {
          var key = cursor.key;
          if (typeof key !== "string")
            return false;
          var lowerKey = lower(key);
          if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
            return true;
          } else {
            var lowestPossibleCasing = null;
            for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
              var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
              if (casing === null && lowestPossibleCasing === null)
                firstPossibleNeedle = i + 1;
              else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                lowestPossibleCasing = casing;
              }
            }
            if (lowestPossibleCasing !== null) {
              advance(function() {
                cursor.continue(lowestPossibleCasing + nextKeySuffix);
              });
            } else {
              advance(resolve);
            }
            return false;
          }
        });
        return c;
      }
      function createRange(lower, upper, lowerOpen, upperOpen) {
        return {
          type: 2,
          lower,
          upper,
          lowerOpen,
          upperOpen
        };
      }
      function rangeEqual(value) {
        return {
          type: 1,
          lower: value,
          upper: value
        };
      }
      var WhereClause = function() {
        function WhereClause2() {
        }
        Object.defineProperty(WhereClause2.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: false,
          configurable: true
        });
        WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
          includeLower = includeLower !== false;
          includeUpper = includeUpper === true;
          try {
            if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
              return emptyCollection(this);
            return new this.Collection(this, function() {
              return createRange(lower, upper, !includeLower, !includeUpper);
            });
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
        };
        WhereClause2.prototype.equals = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return rangeEqual(value);
          });
        };
        WhereClause2.prototype.above = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(value, void 0, true);
          });
        };
        WhereClause2.prototype.aboveOrEqual = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(value, void 0, false);
          });
        };
        WhereClause2.prototype.below = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(void 0, value, false, true);
          });
        };
        WhereClause2.prototype.belowOrEqual = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(void 0, value);
          });
        };
        WhereClause2.prototype.startsWith = function(str) {
          if (typeof str !== "string")
            return fail(this, STRING_EXPECTED);
          return this.between(str, str + maxString, true, true);
        };
        WhereClause2.prototype.startsWithIgnoreCase = function(str) {
          if (str === "")
            return this.startsWith(str);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x.indexOf(a[0]) === 0;
          }, [str], maxString);
        };
        WhereClause2.prototype.equalsIgnoreCase = function(str) {
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x === a[0];
          }, [str], "");
        };
        WhereClause2.prototype.anyOfIgnoreCase = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return emptyCollection(this);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.indexOf(x) !== -1;
          }, set, "");
        };
        WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return emptyCollection(this);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.some(function(n) {
              return x.indexOf(n) === 0;
            });
          }, set, maxString);
        };
        WhereClause2.prototype.anyOf = function() {
          var _this = this;
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          var compare = this._cmp;
          try {
            set.sort(compare);
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          if (set.length === 0)
            return emptyCollection(this);
          var c = new this.Collection(this, function() {
            return createRange(set[0], set[set.length - 1]);
          });
          c._ondirectionchange = function(direction) {
            compare = direction === "next" ? _this._ascending : _this._descending;
            set.sort(compare);
          };
          var i = 0;
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while (compare(key, set[i]) > 0) {
              ++i;
              if (i === set.length) {
                advance(resolve);
                return false;
              }
            }
            if (compare(key, set[i]) === 0) {
              return true;
            } else {
              advance(function() {
                cursor.continue(set[i]);
              });
              return false;
            }
          });
          return c;
        };
        WhereClause2.prototype.notEqual = function(value) {
          return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
        };
        WhereClause2.prototype.noneOf = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return new this.Collection(this);
          try {
            set.sort(this._ascending);
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          var ranges = set.reduce(function(res, val) {
            return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
          }, null);
          ranges.push([set[set.length - 1], this.db._maxKey]);
          return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
        };
        WhereClause2.prototype.inAnyRange = function(ranges, options) {
          var _this = this;
          var cmp3 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
          if (ranges.length === 0)
            return emptyCollection(this);
          if (!ranges.every(function(range) {
            return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
          })) {
            return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
          }
          var includeLowers = !options || options.includeLowers !== false;
          var includeUppers = options && options.includeUppers === true;
          function addRange2(ranges2, newRange) {
            var i = 0, l = ranges2.length;
            for (; i < l; ++i) {
              var range = ranges2[i];
              if (cmp3(newRange[0], range[1]) < 0 && cmp3(newRange[1], range[0]) > 0) {
                range[0] = min(range[0], newRange[0]);
                range[1] = max(range[1], newRange[1]);
                break;
              }
            }
            if (i === l)
              ranges2.push(newRange);
            return ranges2;
          }
          var sortDirection = ascending;
          function rangeSorter(a, b) {
            return sortDirection(a[0], b[0]);
          }
          var set;
          try {
            set = ranges.reduce(addRange2, []);
            set.sort(rangeSorter);
          } catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          var rangePos = 0;
          var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
            return ascending(key, set[rangePos][1]) > 0;
          } : function(key) {
            return ascending(key, set[rangePos][1]) >= 0;
          };
          var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
            return descending(key, set[rangePos][0]) > 0;
          } : function(key) {
            return descending(key, set[rangePos][0]) >= 0;
          };
          function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
          }
          var checkKey = keyIsBeyondCurrentEntry;
          var c = new this.Collection(this, function() {
            return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
          });
          c._ondirectionchange = function(direction) {
            if (direction === "next") {
              checkKey = keyIsBeyondCurrentEntry;
              sortDirection = ascending;
            } else {
              checkKey = keyIsBeforeCurrentEntry;
              sortDirection = descending;
            }
            set.sort(rangeSorter);
          };
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while (checkKey(key)) {
              ++rangePos;
              if (rangePos === set.length) {
                advance(resolve);
                return false;
              }
            }
            if (keyWithinCurrentRange(key)) {
              return true;
            } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
              return false;
            } else {
              advance(function() {
                if (sortDirection === ascending)
                  cursor.continue(set[rangePos][0]);
                else
                  cursor.continue(set[rangePos][1]);
              });
              return false;
            }
          });
          return c;
        };
        WhereClause2.prototype.startsWithAnyOf = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (!set.every(function(s) {
            return typeof s === "string";
          })) {
            return fail(this, "startsWithAnyOf() only works with strings");
          }
          if (set.length === 0)
            return emptyCollection(this);
          return this.inAnyRange(set.map(function(str) {
            return [str, str + maxString];
          }));
        };
        return WhereClause2;
      }();
      function createWhereClauseConstructor(db2) {
        return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
          this.db = db2;
          this._ctx = {
            table,
            index: index === ":id" ? null : index,
            or: orCollection
          };
          this._cmp = this._ascending = cmp2;
          this._descending = function(a, b) {
            return cmp2(b, a);
          };
          this._max = function(a, b) {
            return cmp2(a, b) > 0 ? a : b;
          };
          this._min = function(a, b) {
            return cmp2(a, b) < 0 ? a : b;
          };
          this._IDBKeyRange = db2._deps.IDBKeyRange;
          if (!this._IDBKeyRange)
            throw new exceptions.MissingAPI();
        });
      }
      function eventRejectHandler(reject) {
        return wrap(function(event) {
          preventDefault(event);
          reject(event.target.error);
          return false;
        });
      }
      function preventDefault(event) {
        if (event.stopPropagation)
          event.stopPropagation();
        if (event.preventDefault)
          event.preventDefault();
      }
      var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
      var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
      var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
      var Transaction = function() {
        function Transaction2() {
        }
        Transaction2.prototype._lock = function() {
          assert(!PSD.global);
          ++this._reculock;
          if (this._reculock === 1 && !PSD.global)
            PSD.lockOwnerFor = this;
          return this;
        };
        Transaction2.prototype._unlock = function() {
          assert(!PSD.global);
          if (--this._reculock === 0) {
            if (!PSD.global)
              PSD.lockOwnerFor = null;
            while (this._blockedFuncs.length > 0 && !this._locked()) {
              var fnAndPSD = this._blockedFuncs.shift();
              try {
                usePSD(fnAndPSD[1], fnAndPSD[0]);
              } catch (e) {
              }
            }
          }
          return this;
        };
        Transaction2.prototype._locked = function() {
          return this._reculock && PSD.lockOwnerFor !== this;
        };
        Transaction2.prototype.create = function(idbtrans) {
          var _this = this;
          if (!this.mode)
            return this;
          var idbdb = this.db.idbdb;
          var dbOpenError = this.db._state.dbOpenError;
          assert(!this.idbtrans);
          if (!idbtrans && !idbdb) {
            switch (dbOpenError && dbOpenError.name) {
              case "DatabaseClosedError":
                throw new exceptions.DatabaseClosed(dbOpenError);
              case "MissingAPIError":
                throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
              default:
                throw new exceptions.OpenFailed(dbOpenError);
            }
          }
          if (!this.active)
            throw new exceptions.TransactionInactive();
          assert(this._completion._state === null);
          idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
          idbtrans.onerror = wrap(function(ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
          });
          idbtrans.onabort = wrap(function(ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
          });
          idbtrans.oncomplete = wrap(function() {
            _this.active = false;
            _this._resolve();
            if ("mutatedParts" in idbtrans) {
              globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
            }
          });
          return this;
        };
        Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
          var _this = this;
          if (mode === "readwrite" && this.mode !== "readwrite")
            return rejection(new exceptions.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return rejection(new exceptions.TransactionInactive());
          if (this._locked()) {
            return new DexiePromise(function(resolve, reject) {
              _this._blockedFuncs.push([function() {
                _this._promise(mode, fn, bWriteLock).then(resolve, reject);
              }, PSD]);
            });
          } else if (bWriteLock) {
            return newScope(function() {
              var p2 = new DexiePromise(function(resolve, reject) {
                _this._lock();
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                  rv.then(resolve, reject);
              });
              p2.finally(function() {
                return _this._unlock();
              });
              p2._lib = true;
              return p2;
            });
          } else {
            var p = new DexiePromise(function(resolve, reject) {
              var rv = fn(resolve, reject, _this);
              if (rv && rv.then)
                rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
          }
        };
        Transaction2.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        };
        Transaction2.prototype.waitFor = function(promiseLike) {
          var root = this._root();
          var promise = DexiePromise.resolve(promiseLike);
          if (root._waitingFor) {
            root._waitingFor = root._waitingFor.then(function() {
              return promise;
            });
          } else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
              ++root._spinCount;
              while (root._waitingQueue.length)
                root._waitingQueue.shift()();
              if (root._waitingFor)
                store.get(-Infinity).onsuccess = spin;
            })();
          }
          var currentWaitPromise = root._waitingFor;
          return new DexiePromise(function(resolve, reject) {
            promise.then(function(res) {
              return root._waitingQueue.push(wrap(resolve.bind(null, res)));
            }, function(err) {
              return root._waitingQueue.push(wrap(reject.bind(null, err)));
            }).finally(function() {
              if (root._waitingFor === currentWaitPromise) {
                root._waitingFor = null;
              }
            });
          });
        };
        Transaction2.prototype.abort = function() {
          if (this.active) {
            this.active = false;
            if (this.idbtrans)
              this.idbtrans.abort();
            this._reject(new exceptions.Abort());
          }
        };
        Transaction2.prototype.table = function(tableName) {
          var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
          if (hasOwn(memoizedTables, tableName))
            return memoizedTables[tableName];
          var tableSchema = this.schema[tableName];
          if (!tableSchema) {
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
          }
          var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
          transactionBoundTable.core = this.db.core.table(tableName);
          memoizedTables[tableName] = transactionBoundTable;
          return transactionBoundTable;
        };
        return Transaction2;
      }();
      function createTransactionConstructor(db2) {
        return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
          var _this = this;
          if (mode !== "readonly")
            storeNames.forEach(function(storeName) {
              var _a2;
              var yProps = (_a2 = dbschema[storeName]) === null || _a2 === void 0 ? void 0 : _a2.yProps;
              if (yProps)
                storeNames = storeNames.concat(yProps.map(function(p) {
                  return p.updatesTable;
                }));
            });
          this.db = db2;
          this.mode = mode;
          this.storeNames = storeNames;
          this.schema = dbschema;
          this.chromeTransactionDurability = chromeTransactionDurability;
          this.idbtrans = null;
          this.on = Events(this, "complete", "error", "abort");
          this.parent = parent || null;
          this.active = true;
          this._reculock = 0;
          this._blockedFuncs = [];
          this._resolve = null;
          this._reject = null;
          this._waitingFor = null;
          this._waitingQueue = null;
          this._spinCount = 0;
          this._completion = new DexiePromise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
          });
          this._completion.then(function() {
            _this.active = false;
            _this.on.complete.fire();
          }, function(e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
          });
        });
      }
      function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey, type2) {
        return {
          name,
          keyPath,
          unique,
          multi,
          auto,
          compound,
          src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath),
          type: type2
        };
      }
      function nameFromKeyPath(keyPath) {
        return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
      }
      function createTableSchema(name, primKey, indexes) {
        return {
          name,
          primKey,
          indexes,
          mappedClass: null,
          idxByName: arrayToObject(indexes, function(index) {
            return [index.name, index];
          })
        };
      }
      function safariMultiStoreFix(storeNames) {
        return storeNames.length === 1 ? storeNames[0] : storeNames;
      }
      var getMaxKey = function(IdbKeyRange) {
        try {
          IdbKeyRange.only([[]]);
          getMaxKey = function() {
            return [[]];
          };
          return [[]];
        } catch (e) {
          getMaxKey = function() {
            return maxString;
          };
          return maxString;
        }
      };
      function getKeyExtractor(keyPath) {
        if (keyPath == null) {
          return function() {
            return void 0;
          };
        } else if (typeof keyPath === "string") {
          return getSinglePathKeyExtractor(keyPath);
        } else {
          return function(obj) {
            return getByKeyPath(obj, keyPath);
          };
        }
      }
      function getSinglePathKeyExtractor(keyPath) {
        var split = keyPath.split(".");
        if (split.length === 1) {
          return function(obj) {
            return obj[keyPath];
          };
        } else {
          return function(obj) {
            return getByKeyPath(obj, keyPath);
          };
        }
      }
      function arrayify(arrayLike) {
        return [].slice.call(arrayLike);
      }
      var _id_counter = 0;
      function getKeyPathAlias(keyPath) {
        return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
      }
      function createDBCore(db2, IdbKeyRange, tmpTrans) {
        function extractSchema(db3, trans) {
          var tables2 = arrayify(db3.objectStoreNames);
          return {
            schema: {
              name: db3.name,
              tables: tables2.map(function(table) {
                return trans.objectStore(table);
              }).map(function(store) {
                var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                var compound = isArray(keyPath);
                var outbound = keyPath == null;
                var indexByKeyPath = {};
                var result = {
                  name: store.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: true,
                    outbound,
                    compound,
                    keyPath,
                    autoIncrement,
                    unique: true,
                    extractKey: getKeyExtractor(keyPath)
                  },
                  indexes: arrayify(store.indexNames).map(function(indexName) {
                    return store.index(indexName);
                  }).map(function(index) {
                    var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
                    var compound2 = isArray(keyPath2);
                    var result2 = {
                      name,
                      compound: compound2,
                      keyPath: keyPath2,
                      unique,
                      multiEntry,
                      extractKey: getKeyExtractor(keyPath2)
                    };
                    indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
                    return result2;
                  }),
                  getIndexByKeyPath: function(keyPath2) {
                    return indexByKeyPath[getKeyPathAlias(keyPath2)];
                  }
                };
                indexByKeyPath[":id"] = result.primaryKey;
                if (keyPath != null) {
                  indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                }
                return result;
              })
            },
            hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
          };
        }
        function makeIDBKeyRange(range) {
          if (range.type === 3)
            return null;
          if (range.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
          var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
          var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
          return idbRange;
        }
        function createDbCoreTable(tableSchema) {
          var tableName = tableSchema.name;
          function mutate(_a3) {
            var trans = _a3.trans, type2 = _a3.type, keys2 = _a3.keys, values = _a3.values, range = _a3.range;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var outbound = store.keyPath == null;
              var isAddOrPut = type2 === "put" || type2 === "add";
              if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
                throw new Error("Invalid operation type: " + type2);
              var length = (keys2 || values || { length: 1 }).length;
              if (keys2 && values && keys2.length !== values.length) {
                throw new Error("Given keys array must have same length as given values array.");
              }
              if (length === 0)
                return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              var req;
              var reqs = [];
              var failures = [];
              var numFailures = 0;
              var errorHandler = function(event) {
                ++numFailures;
                preventDefault(event);
              };
              if (type2 === "deleteRange") {
                if (range.type === 4)
                  return resolve({ numFailures, failures, results: [], lastResult: void 0 });
                if (range.type === 3)
                  reqs.push(req = store.clear());
                else
                  reqs.push(req = store.delete(makeIDBKeyRange(range)));
              } else {
                var _a4 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a4[0], args2 = _a4[1];
                if (isAddOrPut) {
                  for (var i = 0; i < length; ++i) {
                    reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
                    req.onerror = errorHandler;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    reqs.push(req = store[type2](args1[i]));
                    req.onerror = errorHandler;
                  }
                }
              }
              var done = function(event) {
                var lastResult = event.target.result;
                reqs.forEach(function(req2, i2) {
                  return req2.error != null && (failures[i2] = req2.error);
                });
                resolve({
                  numFailures,
                  failures,
                  results: type2 === "delete" ? keys2 : reqs.map(function(req2) {
                    return req2.result;
                  }),
                  lastResult
                });
              };
              req.onerror = function(event) {
                errorHandler(event);
                done(event);
              };
              req.onsuccess = done;
            });
          }
          function openCursor2(_a3) {
            var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var index = query2.index, range = query2.range;
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
              var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
              req.onerror = eventRejectHandler(reject);
              req.onsuccess = wrap(function(ev) {
                var cursor = req.result;
                if (!cursor) {
                  resolve(null);
                  return;
                }
                cursor.___id = ++_id_counter;
                cursor.done = false;
                var _cursorContinue = cursor.continue.bind(cursor);
                var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                if (_cursorContinuePrimaryKey)
                  _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                var _cursorAdvance = cursor.advance.bind(cursor);
                var doThrowCursorIsNotStarted = function() {
                  throw new Error("Cursor not started");
                };
                var doThrowCursorIsStopped = function() {
                  throw new Error("Cursor not stopped");
                };
                cursor.trans = trans;
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                cursor.fail = wrap(reject);
                cursor.next = function() {
                  var _this = this;
                  var gotOne = 1;
                  return this.start(function() {
                    return gotOne-- ? _this.continue() : _this.stop();
                  }).then(function() {
                    return _this;
                  });
                };
                cursor.start = function(callback) {
                  var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                    resolveIteration = wrap(resolveIteration);
                    req.onerror = eventRejectHandler(rejectIteration);
                    cursor.fail = rejectIteration;
                    cursor.stop = function(value) {
                      cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                      resolveIteration(value);
                    };
                  });
                  var guardedCallback = function() {
                    if (req.result) {
                      try {
                        callback();
                      } catch (err) {
                        cursor.fail(err);
                      }
                    } else {
                      cursor.done = true;
                      cursor.start = function() {
                        throw new Error("Cursor behind last entry");
                      };
                      cursor.stop();
                    }
                  };
                  req.onsuccess = wrap(function(ev2) {
                    req.onsuccess = guardedCallback;
                    guardedCallback();
                  });
                  cursor.continue = _cursorContinue;
                  cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                  cursor.advance = _cursorAdvance;
                  guardedCallback();
                  return iterationPromise;
                };
                resolve(cursor);
              }, reject);
            });
          }
          function query(hasGetAll2) {
            return function(request) {
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
                var nonInfinitLimit = limit === Infinity ? void 0 : limit;
                var index = query2.index, range = query2.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var idbKeyRange = makeIDBKeyRange(range);
                if (limit === 0)
                  return resolve({ result: [] });
                if (hasGetAll2) {
                  var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                  req.onsuccess = function(event) {
                    return resolve({ result: event.target.result });
                  };
                  req.onerror = eventRejectHandler(reject);
                } else {
                  var count_1 = 0;
                  var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                  var result_1 = [];
                  req_1.onsuccess = function(event) {
                    var cursor = req_1.result;
                    if (!cursor)
                      return resolve({ result: result_1 });
                    result_1.push(values ? cursor.value : cursor.primaryKey);
                    if (++count_1 === limit)
                      return resolve({ result: result_1 });
                    cursor.continue();
                  };
                  req_1.onerror = eventRejectHandler(reject);
                }
              });
            };
          }
          return {
            name: tableName,
            schema: tableSchema,
            mutate,
            getMany: function(_a3) {
              var trans = _a3.trans, keys2 = _a3.keys;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var length = keys2.length;
                var result = new Array(length);
                var keyCount = 0;
                var callbackCount = 0;
                var req;
                var successHandler = function(event) {
                  var req2 = event.target;
                  if ((result[req2._pos] = req2.result) != null)
                    ;
                  if (++callbackCount === keyCount)
                    resolve(result);
                };
                var errorHandler = eventRejectHandler(reject);
                for (var i = 0; i < length; ++i) {
                  var key = keys2[i];
                  if (key != null) {
                    req = store.get(keys2[i]);
                    req._pos = i;
                    req.onsuccess = successHandler;
                    req.onerror = errorHandler;
                    ++keyCount;
                  }
                }
                if (keyCount === 0)
                  resolve(result);
              });
            },
            get: function(_a3) {
              var trans = _a3.trans, key = _a3.key;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var req = store.get(key);
                req.onsuccess = function(event) {
                  return resolve(event.target.result);
                };
                req.onerror = eventRejectHandler(reject);
              });
            },
            query: query(hasGetAll),
            openCursor: openCursor2,
            count: function(_a3) {
              var query2 = _a3.query, trans = _a3.trans;
              var index = query2.index, range = query2.range;
              return new Promise(function(resolve, reject) {
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var idbKeyRange = makeIDBKeyRange(range);
                var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                req.onsuccess = wrap(function(ev) {
                  return resolve(ev.target.result);
                });
                req.onerror = eventRejectHandler(reject);
              });
            }
          };
        }
        var _a2 = extractSchema(db2, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
        var tables = schema.tables.map(function(tableSchema) {
          return createDbCoreTable(tableSchema);
        });
        var tableMap = {};
        tables.forEach(function(table) {
          return tableMap[table.name] = table;
        });
        return {
          stack: "dbcore",
          transaction: db2.transaction.bind(db2),
          table: function(name) {
            var result = tableMap[name];
            if (!result)
              throw new Error("Table '".concat(name, "' not found"));
            return tableMap[name];
          },
          MIN_KEY: -Infinity,
          MAX_KEY: getMaxKey(IdbKeyRange),
          schema
        };
      }
      function createMiddlewareStack(stackImpl, middlewares) {
        return middlewares.reduce(function(down, _a2) {
          var create = _a2.create;
          return __assign(__assign({}, down), create(down));
        }, stackImpl);
      }
      function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
        var IDBKeyRange = _a2.IDBKeyRange;
        _a2.indexedDB;
        var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
        return {
          dbcore
        };
      }
      function generateMiddlewareStacks(db2, tmpTrans) {
        var idbdb = tmpTrans.db;
        var stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
        db2.core = stacks.dbcore;
        db2.tables.forEach(function(table) {
          var tableName = table.name;
          if (db2.core.schema.tables.some(function(tbl) {
            return tbl.name === tableName;
          })) {
            table.core = db2.core.table(tableName);
            if (db2[tableName] instanceof db2.Table) {
              db2[tableName].core = table.core;
            }
          }
        });
      }
      function setApiOnPlace(db2, objs, tableNames, dbschema) {
        tableNames.forEach(function(tableName) {
          var schema = dbschema[tableName];
          objs.forEach(function(obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
              if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
                setProp(obj, tableName, {
                  get: function() {
                    return this.table(tableName);
                  },
                  set: function(value) {
                    defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
                  }
                });
              } else {
                obj[tableName] = new db2.Table(tableName, schema);
              }
            }
          });
        });
      }
      function removeTablesApi(db2, objs) {
        objs.forEach(function(obj) {
          for (var key in obj) {
            if (obj[key] instanceof db2.Table)
              delete obj[key];
          }
        });
      }
      function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
      }
      function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
        var globalSchema = db2._dbSchema;
        if (idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta) {
          globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []);
          db2._storeNames.push("$meta");
        }
        var trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
        trans.create(idbUpgradeTrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        var transless = PSD.transless || PSD;
        newScope(function() {
          PSD.trans = trans;
          PSD.transless = transless;
          if (oldVersion === 0) {
            keys(globalSchema).forEach(function(tableName) {
              createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db2, idbUpgradeTrans);
            DexiePromise.follow(function() {
              return db2.on.populate.fire(trans);
            }).catch(rejectTransaction);
          } else {
            generateMiddlewareStacks(db2, idbUpgradeTrans);
            return getExistingVersion(db2, trans, oldVersion).then(function(oldVersion2) {
              return updateTablesAndIndexes(db2, oldVersion2, trans, idbUpgradeTrans);
            }).catch(rejectTransaction);
          }
        });
      }
      function patchCurrentVersion(db2, idbUpgradeTrans) {
        createMissingTables(db2._dbSchema, idbUpgradeTrans);
        if (idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta")) {
          idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
        }
        var globalSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
        adjustToExistingIndexNames(db2, db2._dbSchema, idbUpgradeTrans);
        var diff = getSchemaDiff(globalSchema, db2._dbSchema);
        var _loop_1 = function(tableChange2) {
          if (tableChange2.change.length || tableChange2.recreate) {
            console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key."));
            return { value: void 0 };
          }
          var store = idbUpgradeTrans.objectStore(tableChange2.name);
          tableChange2.add.forEach(function(idx) {
            if (debug)
              console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src));
            addIndex(store, idx);
          });
        };
        for (var _i = 0, _a2 = diff.change; _i < _a2.length; _i++) {
          var tableChange = _a2[_i];
          var state_1 = _loop_1(tableChange);
          if (typeof state_1 === "object")
            return state_1.value;
        }
      }
      function getExistingVersion(db2, trans, oldVersion) {
        if (trans.storeNames.includes("$meta")) {
          return trans.table("$meta").get("version").then(function(metaVersion) {
            return metaVersion != null ? metaVersion : oldVersion;
          });
        } else {
          return DexiePromise.resolve(oldVersion);
        }
      }
      function updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans) {
        var queue = [];
        var versions = db2._versions;
        var globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
        var versToRun = versions.filter(function(v) {
          return v._cfg.version >= oldVersion;
        });
        if (versToRun.length === 0) {
          return DexiePromise.resolve();
        }
        versToRun.forEach(function(version) {
          queue.push(function() {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
            globalSchema = db2._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function(tuple) {
              createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function(change) {
              if (change.recreate) {
                throw new exceptions.Upgrade("Not yet support for changing primary key");
              } else {
                var store_1 = idbUpgradeTrans.objectStore(change.name);
                change.add.forEach(function(idx) {
                  return addIndex(store_1, idx);
                });
                change.change.forEach(function(idx) {
                  store_1.deleteIndex(idx.name);
                  addIndex(store_1, idx);
                });
                change.del.forEach(function(idxName) {
                  return store_1.deleteIndex(idxName);
                });
              }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
              generateMiddlewareStacks(db2, idbUpgradeTrans);
              trans._memoizedTables = {};
              var upgradeSchema_1 = shallowClone(newSchema);
              diff.del.forEach(function(table) {
                upgradeSchema_1[table] = oldSchema[table];
              });
              removeTablesApi(db2, [db2.Transaction.prototype]);
              setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
              trans.schema = upgradeSchema_1;
              var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
              if (contentUpgradeIsAsync_1) {
                incrementExpectedAwaits();
              }
              var returnValue_1;
              var promiseFollowed = DexiePromise.follow(function() {
                returnValue_1 = contentUpgrade(trans);
                if (returnValue_1) {
                  if (contentUpgradeIsAsync_1) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue_1.then(decrementor, decrementor);
                  }
                }
              });
              return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                return returnValue_1;
              });
            }
          });
          queue.push(function(idbtrans) {
            var newSchema = version._cfg.dbschema;
            deleteRemovedTables(newSchema, idbtrans);
            removeTablesApi(db2, [db2.Transaction.prototype]);
            setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
            trans.schema = db2._dbSchema;
          });
          queue.push(function(idbtrans) {
            if (db2.idbdb.objectStoreNames.contains("$meta")) {
              if (Math.ceil(db2.idbdb.version / 10) === version._cfg.version) {
                db2.idbdb.deleteObjectStore("$meta");
                delete db2._dbSchema.$meta;
                db2._storeNames = db2._storeNames.filter(function(name) {
                  return name !== "$meta";
                });
              } else {
                idbtrans.objectStore("$meta").put(version._cfg.version, "version");
              }
            }
          });
        });
        function runQueue() {
          return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
        }
        return runQueue().then(function() {
          createMissingTables(globalSchema, idbUpgradeTrans);
        });
      }
      function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
          del: [],
          add: [],
          change: []
        };
        var table;
        for (table in oldSchema) {
          if (!newSchema[table])
            diff.del.push(table);
        }
        for (table in newSchema) {
          var oldDef = oldSchema[table], newDef = newSchema[table];
          if (!oldDef) {
            diff.add.push([table, newDef]);
          } else {
            var change = {
              name: table,
              def: newDef,
              recreate: false,
              del: [],
              add: [],
              change: []
            };
            if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto) {
              change.recreate = true;
              diff.change.push(change);
            } else {
              var oldIndexes = oldDef.idxByName;
              var newIndexes = newDef.idxByName;
              var idxName = void 0;
              for (idxName in oldIndexes) {
                if (!newIndexes[idxName])
                  change.del.push(idxName);
              }
              for (idxName in newIndexes) {
                var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                if (!oldIdx)
                  change.add.push(newIdx);
                else if (oldIdx.src !== newIdx.src)
                  change.change.push(newIdx);
              }
              if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                diff.change.push(change);
              }
            }
          }
        }
        return diff;
      }
      function createTable(idbtrans, tableName, primKey, indexes) {
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function(idx) {
          return addIndex(store, idx);
        });
        return store;
      }
      function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function(tableName) {
          if (!idbtrans.db.objectStoreNames.contains(tableName)) {
            if (debug)
              console.debug("Dexie: Creating missing table", tableName);
            createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
          }
        });
      }
      function deleteRemovedTables(newSchema, idbtrans) {
        [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
          return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
        });
      }
      function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
      }
      function buildGlobalSchema(db2, idbdb, tmpTrans) {
        var globalSchema = {};
        var dbStoreNames = slice(idbdb.objectStoreNames, 0);
        dbStoreNames.forEach(function(storeName) {
          var store = tmpTrans.objectStore(storeName);
          var keyPath = store.keyPath;
          var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", true, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
          var indexes = [];
          for (var j = 0; j < store.indexNames.length; ++j) {
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
          }
          globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
        });
        return globalSchema;
      }
      function readGlobalSchema(db2, idbdb, tmpTrans) {
        db2.verno = idbdb.version / 10;
        var globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
        db2._storeNames = slice(idbdb.objectStoreNames, 0);
        setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
      }
      function verifyInstalledSchema(db2, tmpTrans) {
        var installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
        var diff = getSchemaDiff(installedSchema, db2._dbSchema);
        return !(diff.add.length || diff.change.some(function(ch) {
          return ch.add.length || ch.change.length;
        }));
      }
      function adjustToExistingIndexNames(db2, schema, idbtrans) {
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
          var storeName = storeNames[i];
          var store = idbtrans.objectStore(storeName);
          db2._hasGetAll = "getAll" in store;
          for (var j = 0; j < store.indexNames.length; ++j) {
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
            if (schema[storeName]) {
              var indexSpec = schema[storeName].idxByName[dexieName];
              if (indexSpec) {
                indexSpec.name = indexName;
                delete schema[storeName].idxByName[dexieName];
                schema[storeName].idxByName[indexName] = indexSpec;
              }
            }
          }
        }
        if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
          db2._hasGetAll = false;
        }
      }
      function parseIndexSyntax(primKeyAndIndexes) {
        return primKeyAndIndexes.split(",").map(function(index, indexNum) {
          var _a2;
          var typeSplit = index.split(":");
          var type2 = (_a2 = typeSplit[1]) === null || _a2 === void 0 ? void 0 : _a2.trim();
          index = typeSplit[0].trim();
          var name = index.replace(/([&*]|\+\+)/g, "");
          var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
          return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0, type2);
        });
      }
      var Version = function() {
        function Version2() {
        }
        Version2.prototype._createTableSchema = function(name, primKey, indexes) {
          return createTableSchema(name, primKey, indexes);
        };
        Version2.prototype._parseIndexSyntax = function(primKeyAndIndexes) {
          return parseIndexSyntax(primKeyAndIndexes);
        };
        Version2.prototype._parseStoresSpec = function(stores, outSchema) {
          var _this = this;
          keys(stores).forEach(function(tableName) {
            if (stores[tableName] !== null) {
              var indexes = _this._parseIndexSyntax(stores[tableName]);
              var primKey = indexes.shift();
              if (!primKey) {
                throw new exceptions.Schema("Invalid schema for table " + tableName + ": " + stores[tableName]);
              }
              primKey.unique = true;
              if (primKey.multi)
                throw new exceptions.Schema("Primary key cannot be multiEntry*");
              indexes.forEach(function(idx) {
                if (idx.auto)
                  throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!idx.keyPath)
                  throw new exceptions.Schema("Index must have a name and cannot be an empty string");
              });
              var tblSchema = _this._createTableSchema(tableName, primKey, indexes);
              outSchema[tableName] = tblSchema;
            }
          });
        };
        Version2.prototype.stores = function(stores) {
          var db2 = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
          var versions = db2._versions;
          var storesSpec = {};
          var dbschema = {};
          versions.forEach(function(version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = version._cfg.dbschema = {};
            version._parseStoresSpec(storesSpec, dbschema);
          });
          db2._dbSchema = dbschema;
          removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
          setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
          db2._storeNames = keys(dbschema);
          return this;
        };
        Version2.prototype.upgrade = function(upgradeFunction) {
          this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
          return this;
        };
        return Version2;
      }();
      function createVersionConstructor(db2) {
        return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
          this.db = db2;
          this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      function getDbNamesTable(indexedDB2, IDBKeyRange) {
        var dbNamesDB = indexedDB2["_dbNamesDB"];
        if (!dbNamesDB) {
          dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
            addons: [],
            indexedDB: indexedDB2,
            IDBKeyRange
          });
          dbNamesDB.version(1).stores({ dbnames: "name" });
        }
        return dbNamesDB.table("dbnames");
      }
      function hasDatabasesNative(indexedDB2) {
        return indexedDB2 && typeof indexedDB2.databases === "function";
      }
      function getDatabaseNames(_a2) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
          return infos.map(function(info) {
            return info.name;
          }).filter(function(name) {
            return name !== DBNAMES_DB;
          });
        }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
      }
      function _onDatabaseCreated(_a2, name) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
      }
      function _onDatabaseDeleted(_a2, name) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
      }
      function vip(fn) {
        return newScope(function() {
          PSD.letThrough = true;
          return fn();
        });
      }
      function idbReady() {
        var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!isSafari || !indexedDB.databases)
          return Promise.resolve();
        var intervalId;
        return new Promise(function(resolve) {
          var tryIdb = function() {
            return indexedDB.databases().finally(resolve);
          };
          intervalId = setInterval(tryIdb, 100);
          tryIdb();
        }).finally(function() {
          return clearInterval(intervalId);
        });
      }
      var _a;
      function isEmptyRange(node) {
        return !("from" in node);
      }
      var RangeSet2 = function(fromOrTree, to) {
        if (this) {
          extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
        } else {
          var rv = new RangeSet2();
          if (fromOrTree && "d" in fromOrTree) {
            extend(rv, fromOrTree);
          }
          return rv;
        }
      };
      props(RangeSet2.prototype, (_a = {
        add: function(rangeSet) {
          mergeRanges2(this, rangeSet);
          return this;
        },
        addKey: function(key) {
          addRange(this, key, key);
          return this;
        },
        addKeys: function(keys2) {
          var _this = this;
          keys2.forEach(function(key) {
            return addRange(_this, key, key);
          });
          return this;
        },
        hasKey: function(key) {
          var node = getRangeSetIterator(this).next(key).value;
          return node && cmp2(node.from, key) <= 0 && cmp2(node.to, key) >= 0;
        }
      }, _a[iteratorSymbol] = function() {
        return getRangeSetIterator(this);
      }, _a));
      function addRange(target, from, to) {
        var diff = cmp2(from, to);
        if (isNaN(diff))
          return;
        if (diff > 0)
          throw RangeError();
        if (isEmptyRange(target))
          return extend(target, { from, to, d: 1 });
        var left = target.l;
        var right = target.r;
        if (cmp2(to, target.from) < 0) {
          left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
          return rebalance(target);
        }
        if (cmp2(from, target.to) > 0) {
          right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
          return rebalance(target);
        }
        if (cmp2(from, target.from) < 0) {
          target.from = from;
          target.l = null;
          target.d = right ? right.d + 1 : 1;
        }
        if (cmp2(to, target.to) > 0) {
          target.to = to;
          target.r = null;
          target.d = target.l ? target.l.d + 1 : 1;
        }
        var rightWasCutOff = !target.r;
        if (left && !target.l) {
          mergeRanges2(target, left);
        }
        if (right && rightWasCutOff) {
          mergeRanges2(target, right);
        }
      }
      function mergeRanges2(target, newSet) {
        function _addRangeSet(target2, _a2) {
          var from = _a2.from, to = _a2.to, l = _a2.l, r = _a2.r;
          addRange(target2, from, to);
          if (l)
            _addRangeSet(target2, l);
          if (r)
            _addRangeSet(target2, r);
        }
        if (!isEmptyRange(newSet))
          _addRangeSet(target, newSet);
      }
      function rangesOverlap2(rangeSet1, rangeSet2) {
        var i1 = getRangeSetIterator(rangeSet2);
        var nextResult1 = i1.next();
        if (nextResult1.done)
          return false;
        var a = nextResult1.value;
        var i2 = getRangeSetIterator(rangeSet1);
        var nextResult2 = i2.next(a.from);
        var b = nextResult2.value;
        while (!nextResult1.done && !nextResult2.done) {
          if (cmp2(b.from, a.to) <= 0 && cmp2(b.to, a.from) >= 0)
            return true;
          cmp2(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
        }
        return false;
      }
      function getRangeSetIterator(node) {
        var state = isEmptyRange(node) ? null : { s: 0, n: node };
        return {
          next: function(key) {
            var keyProvided = arguments.length > 0;
            while (state) {
              switch (state.s) {
                case 0:
                  state.s = 1;
                  if (keyProvided) {
                    while (state.n.l && cmp2(key, state.n.from) < 0)
                      state = { up: state, n: state.n.l, s: 1 };
                  } else {
                    while (state.n.l)
                      state = { up: state, n: state.n.l, s: 1 };
                  }
                case 1:
                  state.s = 2;
                  if (!keyProvided || cmp2(key, state.n.to) <= 0)
                    return { value: state.n, done: false };
                case 2:
                  if (state.n.r) {
                    state.s = 3;
                    state = { up: state, n: state.n.r, s: 0 };
                    continue;
                  }
                case 3:
                  state = state.up;
              }
            }
            return { done: true };
          }
        };
      }
      function rebalance(target) {
        var _a2, _b;
        var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
        var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
        if (r) {
          var l = r === "r" ? "l" : "r";
          var rootClone = __assign({}, target);
          var oldRootRight = target[r];
          target.from = oldRootRight.from;
          target.to = oldRootRight.to;
          target[r] = oldRootRight[r];
          rootClone[r] = oldRootRight[l];
          target[l] = rootClone;
          rootClone.d = computeDepth(rootClone);
        }
        target.d = computeDepth(target);
      }
      function computeDepth(_a2) {
        var r = _a2.r, l = _a2.l;
        return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
      }
      function extendObservabilitySet(target, newSet) {
        keys(newSet).forEach(function(part) {
          if (target[part])
            mergeRanges2(target[part], newSet[part]);
          else
            target[part] = cloneSimpleObjectTree(newSet[part]);
        });
        return target;
      }
      function obsSetsOverlap(os1, os2) {
        return os1.all || os2.all || Object.keys(os1).some(function(key) {
          return os2[key] && rangesOverlap2(os2[key], os1[key]);
        });
      }
      var cache = {};
      var unsignaledParts = {};
      var isTaskEnqueued = false;
      function signalSubscribersLazily(part, optimistic) {
        extendObservabilitySet(unsignaledParts, part);
        if (!isTaskEnqueued) {
          isTaskEnqueued = true;
          setTimeout(function() {
            isTaskEnqueued = false;
            var parts = unsignaledParts;
            unsignaledParts = {};
            signalSubscribersNow(parts, false);
          }, 0);
        }
      }
      function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
        if (deleteAffectedCacheEntries === void 0) {
          deleteAffectedCacheEntries = false;
        }
        var queriesToSignal = /* @__PURE__ */ new Set();
        if (updatedParts.all) {
          for (var _i = 0, _a2 = Object.values(cache); _i < _a2.length; _i++) {
            var tblCache = _a2[_i];
            collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
          }
        } else {
          for (var key in updatedParts) {
            var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
            if (parts) {
              var dbName = parts[1], tableName = parts[2];
              var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
              if (tblCache)
                collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
            }
          }
        }
        queriesToSignal.forEach(function(requery) {
          return requery();
        });
      }
      function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
        var updatedEntryLists = [];
        for (var _i = 0, _a2 = Object.entries(tblCache.queries.query); _i < _a2.length; _i++) {
          var _b = _a2[_i], indexName = _b[0], entries = _b[1];
          var filteredEntries = [];
          for (var _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
            var entry = entries_1[_c];
            if (obsSetsOverlap(updatedParts, entry.obsSet)) {
              entry.subscribers.forEach(function(requery) {
                return outQueriesToSignal.add(requery);
              });
            } else if (deleteAffectedCacheEntries) {
              filteredEntries.push(entry);
            }
          }
          if (deleteAffectedCacheEntries)
            updatedEntryLists.push([indexName, filteredEntries]);
        }
        if (deleteAffectedCacheEntries) {
          for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
            var _e = updatedEntryLists_1[_d], indexName = _e[0], filteredEntries = _e[1];
            tblCache.queries.query[indexName] = filteredEntries;
          }
        }
      }
      function dexieOpen(db2) {
        var state = db2._state;
        var indexedDB2 = db2._deps.indexedDB;
        if (state.isBeingOpened || db2.idbdb)
          return state.dbReadyPromise.then(function() {
            return state.dbOpenError ? rejection(state.dbOpenError) : db2;
          });
        state.isBeingOpened = true;
        state.dbOpenError = null;
        state.openComplete = false;
        var openCanceller = state.openCanceller;
        var nativeVerToOpen = Math.round(db2.verno * 10);
        var schemaPatchMode = false;
        function throwIfCancelled() {
          if (state.openCanceller !== openCanceller)
            throw new exceptions.DatabaseClosed("db.open() was cancelled");
        }
        var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
        var tryOpenDB = function() {
          return new DexiePromise(function(resolve, reject) {
            throwIfCancelled();
            if (!indexedDB2)
              throw new exceptions.MissingAPI();
            var dbName = db2.name;
            var req = state.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
            if (!req)
              throw new exceptions.MissingAPI();
            req.onerror = eventRejectHandler(reject);
            req.onblocked = wrap(db2._fireOnBlocked);
            req.onupgradeneeded = wrap(function(e) {
              upgradeTransaction = req.transaction;
              if (state.autoSchema && !db2._options.allowEmptyDB) {
                req.onerror = preventDefault;
                upgradeTransaction.abort();
                req.result.close();
                var delreq = indexedDB2.deleteDatabase(dbName);
                delreq.onsuccess = delreq.onerror = wrap(function() {
                  reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
                });
              } else {
                upgradeTransaction.onerror = eventRejectHandler(reject);
                var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                wasCreated = oldVer < 1;
                db2.idbdb = req.result;
                if (schemaPatchMode) {
                  patchCurrentVersion(db2, upgradeTransaction);
                }
                runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
              }
            }, reject);
            req.onsuccess = wrap(function() {
              upgradeTransaction = null;
              var idbdb = db2.idbdb = req.result;
              var objectStoreNames = slice(idbdb.objectStoreNames);
              if (objectStoreNames.length > 0)
                try {
                  var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                  if (state.autoSchema)
                    readGlobalSchema(db2, idbdb, tmpTrans);
                  else {
                    adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
                    if (!verifyInstalledSchema(db2, tmpTrans) && !schemaPatchMode) {
                      console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.");
                      idbdb.close();
                      nativeVerToOpen = idbdb.version + 1;
                      schemaPatchMode = true;
                      return resolve(tryOpenDB());
                    }
                  }
                  generateMiddlewareStacks(db2, tmpTrans);
                } catch (e) {
                }
              connections.push(db2);
              idbdb.onversionchange = wrap(function(ev) {
                state.vcFired = true;
                db2.on("versionchange").fire(ev);
              });
              idbdb.onclose = wrap(function() {
                db2.close({ disableAutoOpen: false });
              });
              if (wasCreated)
                _onDatabaseCreated(db2._deps, dbName);
              resolve();
            }, reject);
          }).catch(function(err) {
            switch (err === null || err === void 0 ? void 0 : err.name) {
              case "UnknownError":
                if (state.PR1398_maxLoop > 0) {
                  state.PR1398_maxLoop--;
                  console.warn("Dexie: Workaround for Chrome UnknownError on open()");
                  return tryOpenDB();
                }
                break;
              case "VersionError":
                if (nativeVerToOpen > 0) {
                  nativeVerToOpen = 0;
                  return tryOpenDB();
                }
                break;
            }
            return DexiePromise.reject(err);
          });
        };
        return DexiePromise.race([
          openCanceller,
          (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
        ]).then(function() {
          throwIfCancelled();
          state.onReadyBeingFired = [];
          return DexiePromise.resolve(vip(function() {
            return db2.on.ready.fire(db2.vip);
          })).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
              var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
              state.onReadyBeingFired = [];
              return DexiePromise.resolve(vip(function() {
                return remainders_1(db2.vip);
              })).then(fireRemainders);
            }
          });
        }).finally(function() {
          if (state.openCanceller === openCanceller) {
            state.onReadyBeingFired = null;
            state.isBeingOpened = false;
          }
        }).catch(function(err) {
          state.dbOpenError = err;
          try {
            upgradeTransaction && upgradeTransaction.abort();
          } catch (_a2) {
          }
          if (openCanceller === state.openCanceller) {
            db2._close();
          }
          return rejection(err);
        }).finally(function() {
          state.openComplete = true;
          resolveDbReady();
        }).then(function() {
          if (wasCreated) {
            var everything_1 = {};
            db2.tables.forEach(function(table) {
              table.schema.indexes.forEach(function(idx) {
                if (idx.name)
                  everything_1["idb://".concat(db2.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet2(-Infinity, [[[]]]);
              });
              everything_1["idb://".concat(db2.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db2.name, "/").concat(table.name, "/:dels")] = new RangeSet2(-Infinity, [[[]]]);
            });
            globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1);
            signalSubscribersNow(everything_1, true);
          }
          return db2;
        });
      }
      function awaitIterator(iterator) {
        var callNext = function(result) {
          return iterator.next(result);
        }, doThrow = function(error) {
          return iterator.throw(error);
        }, onSuccess = step(callNext), onError = step(doThrow);
        function step(getNext) {
          return function(val) {
            var next = getNext(val), value = next.value;
            return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
          };
        }
        return step(callNext)();
      }
      function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
        var i = arguments.length;
        if (i < 2)
          throw new exceptions.InvalidArgument("Too few arguments");
        var args = new Array(i - 1);
        while (--i)
          args[i - 1] = arguments[i];
        scopeFunc = args.pop();
        var tables = flatten(args);
        return [mode, tables, scopeFunc];
      }
      function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
        return DexiePromise.resolve().then(function() {
          var transless = PSD.transless || PSD;
          var trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
          trans.explicit = true;
          var zoneProps = {
            trans,
            transless
          };
          if (parentTransaction) {
            trans.idbtrans = parentTransaction.idbtrans;
          } else {
            try {
              trans.create();
              trans.idbtrans._explicit = true;
              db2._state.PR1398_maxLoop = 3;
            } catch (ex) {
              if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db2.close({ disableAutoOpen: false });
                return db2.open().then(function() {
                  return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
                });
              }
              return rejection(ex);
            }
          }
          var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
          if (scopeFuncIsAsync) {
            incrementExpectedAwaits();
          }
          var returnValue;
          var promiseFollowed = DexiePromise.follow(function() {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
              if (scopeFuncIsAsync) {
                var decrementor = decrementExpectedAwaits.bind(null, null);
                returnValue.then(decrementor, decrementor);
              } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
                returnValue = awaitIterator(returnValue);
              }
            }
          }, zoneProps);
          return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
            return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : promiseFollowed.then(function() {
            return returnValue;
          })).then(function(x) {
            if (parentTransaction)
              trans._resolve();
            return trans._completion.then(function() {
              return x;
            });
          }).catch(function(e) {
            trans._reject(e);
            return rejection(e);
          });
        });
      }
      function pad(a, value, count) {
        var result = isArray(a) ? a.slice() : [a];
        for (var i = 0; i < count; ++i)
          result.push(value);
        return result;
      }
      function createVirtualIndexMiddleware(down) {
        return __assign(__assign({}, down), { table: function(tableName) {
          var table = down.table(tableName);
          var schema = table.schema;
          var indexLookup = {};
          var allVirtualIndexes = [];
          function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
            var keyPathAlias = getKeyPathAlias(keyPath);
            var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
            var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
            var isVirtual = keyTail > 0;
            var virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
            indexList.push(virtualIndex);
            if (!virtualIndex.isPrimaryKey) {
              allVirtualIndexes.push(virtualIndex);
            }
            if (keyLength > 1) {
              var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
              addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
            }
            indexList.sort(function(a, b) {
              return a.keyTail - b.keyTail;
            });
            return virtualIndex;
          }
          var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
          indexLookup[":id"] = [primaryKey];
          for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
            var index = _a2[_i];
            addVirtualIndexes(index.keyPath, 0, index);
          }
          function findBestIndex(keyPath) {
            var result2 = indexLookup[getKeyPathAlias(keyPath)];
            return result2 && result2[0];
          }
          function translateRange(range, keyTail) {
            return {
              type: range.type === 1 ? 2 : range.type,
              lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
              lowerOpen: true,
              upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
              upperOpen: true
            };
          }
          function translateRequest(req) {
            var index2 = req.query.index;
            return index2.isVirtual ? __assign(__assign({}, req), { query: {
              index: index2.lowLevelIndex,
              range: translateRange(req.query.range, index2.keyTail)
            } }) : req;
          }
          var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
            return table.count(translateRequest(req));
          }, query: function(req) {
            return table.query(translateRequest(req));
          }, openCursor: function(req) {
            var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
            if (!isVirtual)
              return table.openCursor(req);
            function createVirtualCursor(cursor) {
              function _continue(key) {
                key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
              }
              var virtualCursor = Object.create(cursor, {
                continue: { value: _continue },
                continuePrimaryKey: {
                  value: function(key, primaryKey2) {
                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                  }
                },
                primaryKey: {
                  get: function() {
                    return cursor.primaryKey;
                  }
                },
                key: {
                  get: function() {
                    var key = cursor.key;
                    return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                  }
                },
                value: {
                  get: function() {
                    return cursor.value;
                  }
                }
              });
              return virtualCursor;
            }
            return table.openCursor(translateRequest(req)).then(function(cursor) {
              return cursor && createVirtualCursor(cursor);
            });
          } });
          return result;
        } });
      }
      var virtualIndexMiddleware = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: createVirtualIndexMiddleware
      };
      function getObjectDiff(a, b, rv, prfx) {
        rv = rv || {};
        prfx = prfx || "";
        keys(a).forEach(function(prop) {
          if (!hasOwn(b, prop)) {
            rv[prfx + prop] = void 0;
          } else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
              var apTypeName = toStringTag(ap);
              var bpTypeName = toStringTag(bp);
              if (apTypeName !== bpTypeName) {
                rv[prfx + prop] = b[prop];
              } else if (apTypeName === "Object") {
                getObjectDiff(ap, bp, rv, prfx + prop + ".");
              } else if (ap !== bp) {
                rv[prfx + prop] = b[prop];
              }
            } else if (ap !== bp)
              rv[prfx + prop] = b[prop];
          }
        });
        keys(b).forEach(function(prop) {
          if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop];
          }
        });
        return rv;
      }
      function getEffectiveKeys(primaryKey, req) {
        if (req.type === "delete")
          return req.keys;
        return req.keys || req.values.map(primaryKey.extractKey);
      }
      var hooksMiddleware = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(downCore) {
          return __assign(__assign({}, downCore), { table: function(tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;
            var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
              var dxTrans = PSD.trans;
              var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
              switch (req.type) {
                case "add":
                  if (creating.fire === nop)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "put":
                  if (creating.fire === nop && updating.fire === nop)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "delete":
                  if (deleting.fire === nop)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "deleteRange":
                  if (deleting.fire === nop)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return deleteRange(req);
                  }, true);
              }
              return downTable.mutate(req);
              function addPutOrDelete(req2) {
                var dxTrans2 = PSD.trans;
                var keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
                if (!keys2)
                  throw new Error("Keys missing");
                req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2);
                if (req2.type !== "delete")
                  req2.values = __spreadArray([], req2.values, true);
                if (req2.keys)
                  req2.keys = __spreadArray([], req2.keys, true);
                return getExistingValues(downTable, req2, keys2).then(function(existingValues) {
                  var contexts = keys2.map(function(key, i) {
                    var existingValue = existingValues[i];
                    var ctx = { onerror: null, onsuccess: null };
                    if (req2.type === "delete") {
                      deleting.fire.call(ctx, key, existingValue, dxTrans2);
                    } else if (req2.type === "add" || existingValue === void 0) {
                      var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                      if (key == null && generatedPrimaryKey != null) {
                        key = generatedPrimaryKey;
                        req2.keys[i] = key;
                        if (!primaryKey.outbound) {
                          setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                        }
                      }
                    } else {
                      var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                      var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                      if (additionalChanges_1) {
                        var requestedValue_1 = req2.values[i];
                        Object.keys(additionalChanges_1).forEach(function(keyPath) {
                          if (hasOwn(requestedValue_1, keyPath)) {
                            requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                          } else {
                            setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                          }
                        });
                      }
                    }
                    return ctx;
                  });
                  return downTable.mutate(req2).then(function(_a3) {
                    var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
                    for (var i = 0; i < keys2.length; ++i) {
                      var primKey = results ? results[i] : keys2[i];
                      var ctx = contexts[i];
                      if (primKey == null) {
                        ctx.onerror && ctx.onerror(failures[i]);
                      } else {
                        ctx.onsuccess && ctx.onsuccess(
                          req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                        );
                      }
                    }
                    return { failures, results, numFailures, lastResult };
                  }).catch(function(error) {
                    contexts.forEach(function(ctx) {
                      return ctx.onerror && ctx.onerror(error);
                    });
                    return Promise.reject(error);
                  });
                });
              }
              function deleteRange(req2) {
                return deleteNextChunk(req2.trans, req2.range, 1e4);
              }
              function deleteNextChunk(trans, range, limit) {
                return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a3) {
                  var result = _a3.result;
                  return addPutOrDelete({ type: "delete", keys: result, trans }).then(function(res) {
                    if (res.numFailures > 0)
                      return Promise.reject(res.failures[0]);
                    if (result.length < limit) {
                      return { failures: [], numFailures: 0, lastResult: void 0 };
                    } else {
                      return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                    }
                  });
                });
              }
            } });
            return tableMiddleware;
          } });
        }
      };
      function getExistingValues(table, req, effectiveKeys) {
        return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
      }
      function getFromTransactionCache(keys2, cache2, clone) {
        try {
          if (!cache2)
            return null;
          if (cache2.keys.length < keys2.length)
            return null;
          var result = [];
          for (var i = 0, j = 0; i < cache2.keys.length && j < keys2.length; ++i) {
            if (cmp2(cache2.keys[i], keys2[j]) !== 0)
              continue;
            result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
            ++j;
          }
          return result.length === keys2.length ? result : null;
        } catch (_a2) {
          return null;
        }
      }
      var cacheExistingValuesMiddleware = {
        stack: "dbcore",
        level: -1,
        create: function(core) {
          return {
            table: function(tableName) {
              var table = core.table(tableName);
              return __assign(__assign({}, table), { getMany: function(req) {
                if (!req.cache) {
                  return table.getMany(req);
                }
                var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                if (cachedResult) {
                  return DexiePromise.resolve(cachedResult);
                }
                return table.getMany(req).then(function(res) {
                  req.trans["_cache"] = {
                    keys: req.keys,
                    values: req.cache === "clone" ? deepClone(res) : res
                  };
                  return res;
                });
              }, mutate: function(req) {
                if (req.type !== "add")
                  req.trans["_cache"] = null;
                return table.mutate(req);
              } });
            }
          };
        }
      };
      function isCachableContext(ctx, table) {
        return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
      }
      function isCachableRequest(type2, req) {
        switch (type2) {
          case "query":
            return req.values && !req.unique;
          case "get":
            return false;
          case "getMany":
            return false;
          case "count":
            return false;
          case "openCursor":
            return false;
        }
      }
      var observabilityMiddleware = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(core) {
          var dbName = core.schema.name;
          var FULL_RANGE = new RangeSet2(core.MIN_KEY, core.MAX_KEY);
          return __assign(__assign({}, core), { transaction: function(stores, mode, options) {
            if (PSD.subscr && mode !== "readonly") {
              throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
            }
            return core.transaction(stores, mode, options);
          }, table: function(tableName) {
            var table = core.table(tableName);
            var schema = table.schema;
            var primaryKey = schema.primaryKey, indexes = schema.indexes;
            var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
            var indexesWithAutoIncPK = primaryKey.autoIncrement && indexes.filter(function(index) {
              return index.compound && index.keyPath.includes(primaryKey.keyPath);
            });
            var tableClone = __assign(__assign({}, table), { mutate: function(req) {
              var _a2, _b;
              var trans = req.trans;
              var mutatedParts = req.mutatedParts || (req.mutatedParts = {});
              var getRangeSet = function(indexName) {
                var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                return mutatedParts[part] || (mutatedParts[part] = new RangeSet2());
              };
              var pkRangeSet = getRangeSet("");
              var delsRangeSet = getRangeSet(":dels");
              var type2 = req.type;
              var _c = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [getEffectiveKeys(primaryKey, req).filter(function(id) {
                return id;
              }), req.values] : [], keys2 = _c[0], newObjs = _c[1];
              var oldCache = req.trans["_cache"];
              if (isArray(keys2)) {
                pkRangeSet.addKeys(keys2);
                var oldObjs = type2 === "delete" || keys2.length === newObjs.length ? getFromTransactionCache(keys2, oldCache) : null;
                if (!oldObjs) {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                var range = {
                  from: (_a2 = keys2.lower) !== null && _a2 !== void 0 ? _a2 : core.MIN_KEY,
                  to: (_b = keys2.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(function(idx) {
                  return getRangeSet(idx.name).add(FULL_RANGE);
                });
              }
              return table.mutate(req).then(function(res) {
                if (keys2 && (req.type === "add" || req.type === "put")) {
                  pkRangeSet.addKeys(res.results);
                  if (indexesWithAutoIncPK) {
                    indexesWithAutoIncPK.forEach(function(idx) {
                      var idxVals = req.values.map(function(v) {
                        return idx.extractKey(v);
                      });
                      var pkPos = idx.keyPath.findIndex(function(prop) {
                        return prop === primaryKey.keyPath;
                      });
                      for (var i = 0, len = res.results.length; i < len; ++i) {
                        idxVals[i][pkPos] = res.results[i];
                      }
                      getRangeSet(idx.name).addKeys(idxVals);
                    });
                  }
                }
                trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts);
                return res;
              });
            } });
            var getRange = function(_a2) {
              var _b, _c;
              var _d = _a2.query, index = _d.index, range = _d.range;
              return [
                index,
                new RangeSet2((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
              ];
            };
            var readSubscribers = {
              get: function(req) {
                return [primaryKey, new RangeSet2(req.key)];
              },
              getMany: function(req) {
                return [primaryKey, new RangeSet2().addKeys(req.keys)];
              },
              count: getRange,
              query: getRange,
              openCursor: getRange
            };
            keys(readSubscribers).forEach(function(method) {
              tableClone[method] = function(req) {
                var subscr = PSD.subscr;
                var isLiveQuery = !!subscr;
                var cachable = isCachableContext(PSD, table) && isCachableRequest(method, req);
                var obsSet = cachable ? req.obsSet = {} : subscr;
                if (isLiveQuery) {
                  var getRangeSet = function(indexName) {
                    var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                    return obsSet[part] || (obsSet[part] = new RangeSet2());
                  };
                  var pkRangeSet_1 = getRangeSet("");
                  var delsRangeSet_1 = getRangeSet(":dels");
                  var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
                  if (method === "query" && queriedIndex.isPrimaryKey && !req.values) {
                    delsRangeSet_1.add(queriedRanges);
                  } else {
                    getRangeSet(queriedIndex.name || "").add(queriedRanges);
                  }
                  if (!queriedIndex.isPrimaryKey) {
                    if (method === "count") {
                      delsRangeSet_1.add(FULL_RANGE);
                    } else {
                      var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                      return table[method].apply(this, arguments).then(function(res) {
                        if (method === "query") {
                          if (outbound && req.values) {
                            return keysPromise_1.then(function(_a3) {
                              var resultingKeys = _a3.result;
                              pkRangeSet_1.addKeys(resultingKeys);
                              return res;
                            });
                          }
                          var pKeys = req.values ? res.result.map(extractKey) : res.result;
                          if (req.values) {
                            pkRangeSet_1.addKeys(pKeys);
                          } else {
                            delsRangeSet_1.addKeys(pKeys);
                          }
                        } else if (method === "openCursor") {
                          var cursor_1 = res;
                          var wantValues_1 = req.values;
                          return cursor_1 && Object.create(cursor_1, {
                            key: {
                              get: function() {
                                delsRangeSet_1.addKey(cursor_1.primaryKey);
                                return cursor_1.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var pkey = cursor_1.primaryKey;
                                delsRangeSet_1.addKey(pkey);
                                return pkey;
                              }
                            },
                            value: {
                              get: function() {
                                wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                return cursor_1.value;
                              }
                            }
                          });
                        }
                        return res;
                      });
                    }
                  }
                }
                return table[method].apply(this, arguments);
              };
            });
            return tableClone;
          } });
        }
      };
      function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
        function addAffectedIndex(ix) {
          var rangeSet = getRangeSet(ix.name || "");
          function extractKey(obj) {
            return obj != null ? ix.extractKey(obj) : null;
          }
          var addKeyOrKeys = function(key) {
            return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
              return rangeSet.addKey(key2);
            }) : rangeSet.addKey(key);
          };
          (oldObjs || newObjs).forEach(function(_, i) {
            var oldKey = oldObjs && extractKey(oldObjs[i]);
            var newKey = newObjs && extractKey(newObjs[i]);
            if (cmp2(oldKey, newKey) !== 0) {
              if (oldKey != null)
                addKeyOrKeys(oldKey);
              if (newKey != null)
                addKeyOrKeys(newKey);
            }
          });
        }
        schema.indexes.forEach(addAffectedIndex);
      }
      function adjustOptimisticFromFailures(tblCache, req, res) {
        if (res.numFailures === 0)
          return req;
        if (req.type === "deleteRange") {
          return null;
        }
        var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
        if (res.numFailures === numBulkOps) {
          return null;
        }
        var clone = __assign({}, req);
        if (isArray(clone.keys)) {
          clone.keys = clone.keys.filter(function(_, i) {
            return !(i in res.failures);
          });
        }
        if ("values" in clone && isArray(clone.values)) {
          clone.values = clone.values.filter(function(_, i) {
            return !(i in res.failures);
          });
        }
        return clone;
      }
      function isAboveLower(key, range) {
        return range.lower === void 0 ? true : range.lowerOpen ? cmp2(key, range.lower) > 0 : cmp2(key, range.lower) >= 0;
      }
      function isBelowUpper(key, range) {
        return range.upper === void 0 ? true : range.upperOpen ? cmp2(key, range.upper) < 0 : cmp2(key, range.upper) <= 0;
      }
      function isWithinRange(key, range) {
        return isAboveLower(key, range) && isBelowUpper(key, range);
      }
      function applyOptimisticOps(result, req, ops, table, cacheEntry, immutable) {
        if (!ops || ops.length === 0)
          return result;
        var index = req.query.index;
        var multiEntry = index.multiEntry;
        var queryRange = req.query.range;
        var primaryKey = table.schema.primaryKey;
        var extractPrimKey = primaryKey.extractKey;
        var extractIndex = index.extractKey;
        var extractLowLevelIndex = (index.lowLevelIndex || index).extractKey;
        var finalResult = ops.reduce(function(result2, op) {
          var modifedResult = result2;
          var includedValues = [];
          if (op.type === "add" || op.type === "put") {
            var includedPKs = new RangeSet2();
            for (var i = op.values.length - 1; i >= 0; --i) {
              var value = op.values[i];
              var pk = extractPrimKey(value);
              if (includedPKs.hasKey(pk))
                continue;
              var key = extractIndex(value);
              if (multiEntry && isArray(key) ? key.some(function(k) {
                return isWithinRange(k, queryRange);
              }) : isWithinRange(key, queryRange)) {
                includedPKs.addKey(pk);
                includedValues.push(value);
              }
            }
          }
          switch (op.type) {
            case "add": {
              var existingKeys_1 = new RangeSet2().addKeys(req.values ? result2.map(function(v) {
                return extractPrimKey(v);
              }) : result2);
              modifedResult = result2.concat(req.values ? includedValues.filter(function(v) {
                var key2 = extractPrimKey(v);
                if (existingKeys_1.hasKey(key2))
                  return false;
                existingKeys_1.addKey(key2);
                return true;
              }) : includedValues.map(function(v) {
                return extractPrimKey(v);
              }).filter(function(k) {
                if (existingKeys_1.hasKey(k))
                  return false;
                existingKeys_1.addKey(k);
                return true;
              }));
              break;
            }
            case "put": {
              var keySet_1 = new RangeSet2().addKeys(op.values.map(function(v) {
                return extractPrimKey(v);
              }));
              modifedResult = result2.filter(
                function(item) {
                  return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
                }
              ).concat(
                req.values ? includedValues : includedValues.map(function(v) {
                  return extractPrimKey(v);
                })
              );
              break;
            }
            case "delete":
              var keysToDelete_1 = new RangeSet2().addKeys(op.keys);
              modifedResult = result2.filter(function(item) {
                return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
              });
              break;
            case "deleteRange":
              var range_1 = op.range;
              modifedResult = result2.filter(function(item) {
                return !isWithinRange(extractPrimKey(item), range_1);
              });
              break;
          }
          return modifedResult;
        }, result);
        if (finalResult === result)
          return result;
        finalResult.sort(function(a, b) {
          return cmp2(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp2(extractPrimKey(a), extractPrimKey(b));
        });
        if (req.limit && req.limit < Infinity) {
          if (finalResult.length > req.limit) {
            finalResult.length = req.limit;
          } else if (result.length === req.limit && finalResult.length < req.limit) {
            cacheEntry.dirty = true;
          }
        }
        return immutable ? Object.freeze(finalResult) : finalResult;
      }
      function areRangesEqual(r1, r2) {
        return cmp2(r1.lower, r2.lower) === 0 && cmp2(r1.upper, r2.upper) === 0 && !!r1.lowerOpen === !!r2.lowerOpen && !!r1.upperOpen === !!r2.upperOpen;
      }
      function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
        if (lower1 === void 0)
          return lower2 !== void 0 ? -1 : 0;
        if (lower2 === void 0)
          return 1;
        var c = cmp2(lower1, lower2);
        if (c === 0) {
          if (lowerOpen1 && lowerOpen2)
            return 0;
          if (lowerOpen1)
            return 1;
          if (lowerOpen2)
            return -1;
        }
        return c;
      }
      function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
        if (upper1 === void 0)
          return upper2 !== void 0 ? 1 : 0;
        if (upper2 === void 0)
          return -1;
        var c = cmp2(upper1, upper2);
        if (c === 0) {
          if (upperOpen1 && upperOpen2)
            return 0;
          if (upperOpen1)
            return -1;
          if (upperOpen2)
            return 1;
        }
        return c;
      }
      function isSuperRange(r1, r2) {
        return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
      }
      function findCompatibleQuery(dbName, tableName, type2, req) {
        var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
        if (!tblCache)
          return [];
        var queries = tblCache.queries[type2];
        if (!queries)
          return [null, false, tblCache, null];
        var indexName = req.query ? req.query.index.name : null;
        var entries = queries[indexName || ""];
        if (!entries)
          return [null, false, tblCache, null];
        switch (type2) {
          case "query":
            var equalEntry = entries.find(function(entry) {
              return entry.req.limit === req.limit && entry.req.values === req.values && areRangesEqual(entry.req.query.range, req.query.range);
            });
            if (equalEntry)
              return [
                equalEntry,
                true,
                tblCache,
                entries
              ];
            var superEntry = entries.find(function(entry) {
              var limit = "limit" in entry.req ? entry.req.limit : Infinity;
              return limit >= req.limit && (req.values ? entry.req.values : true) && isSuperRange(entry.req.query.range, req.query.range);
            });
            return [superEntry, false, tblCache, entries];
          case "count":
            var countQuery = entries.find(function(entry) {
              return areRangesEqual(entry.req.query.range, req.query.range);
            });
            return [countQuery, !!countQuery, tblCache, entries];
        }
      }
      function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
        cacheEntry.subscribers.add(requery);
        signal.addEventListener("abort", function() {
          cacheEntry.subscribers.delete(requery);
          if (cacheEntry.subscribers.size === 0) {
            enqueForDeletion(cacheEntry, container);
          }
        });
      }
      function enqueForDeletion(cacheEntry, container) {
        setTimeout(function() {
          if (cacheEntry.subscribers.size === 0) {
            delArrayItem(container, cacheEntry);
          }
        }, 3e3);
      }
      var cacheMiddleware = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(core) {
          var dbName = core.schema.name;
          var coreMW = __assign(__assign({}, core), { transaction: function(stores, mode, options) {
            var idbtrans = core.transaction(stores, mode, options);
            if (mode === "readwrite") {
              var ac_1 = new AbortController();
              var signal = ac_1.signal;
              var endTransaction = function(wasCommitted) {
                return function() {
                  ac_1.abort();
                  if (mode === "readwrite") {
                    var affectedSubscribers_1 = /* @__PURE__ */ new Set();
                    for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                      var storeName = stores_1[_i];
                      var tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                      if (tblCache) {
                        var table = core.table(storeName);
                        var ops = tblCache.optimisticOps.filter(function(op) {
                          return op.trans === idbtrans;
                        });
                        if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts) {
                          for (var _a2 = 0, _b = Object.values(tblCache.queries.query); _a2 < _b.length; _a2++) {
                            var entries = _b[_a2];
                            for (var _c = 0, _d = entries.slice(); _c < _d.length; _c++) {
                              var entry = _d[_c];
                              if (obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts)) {
                                delArrayItem(entries, entry);
                                entry.subscribers.forEach(function(requery) {
                                  return affectedSubscribers_1.add(requery);
                                });
                              }
                            }
                          }
                        } else if (ops.length > 0) {
                          tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                            return op.trans !== idbtrans;
                          });
                          for (var _e = 0, _f = Object.values(tblCache.queries.query); _e < _f.length; _e++) {
                            var entries = _f[_e];
                            for (var _g = 0, _h = entries.slice(); _g < _h.length; _g++) {
                              var entry = _h[_g];
                              if (entry.res != null && idbtrans.mutatedParts) {
                                if (wasCommitted && !entry.dirty) {
                                  var freezeResults = Object.isFrozen(entry.res);
                                  var modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                  if (entry.dirty) {
                                    delArrayItem(entries, entry);
                                    entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    });
                                  } else if (modRes !== entry.res) {
                                    entry.res = modRes;
                                    entry.promise = DexiePromise.resolve({ result: modRes });
                                  }
                                } else {
                                  if (entry.dirty) {
                                    delArrayItem(entries, entry);
                                  }
                                  entry.subscribers.forEach(function(requery) {
                                    return affectedSubscribers_1.add(requery);
                                  });
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    affectedSubscribers_1.forEach(function(requery) {
                      return requery();
                    });
                  }
                };
              };
              idbtrans.addEventListener("abort", endTransaction(false), {
                signal
              });
              idbtrans.addEventListener("error", endTransaction(false), {
                signal
              });
              idbtrans.addEventListener("complete", endTransaction(true), {
                signal
              });
            }
            return idbtrans;
          }, table: function(tableName) {
            var downTable = core.table(tableName);
            var primKey = downTable.schema.primaryKey;
            var tableMW = __assign(__assign({}, downTable), { mutate: function(req) {
              var trans = PSD.trans;
              if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit || trans.idbtrans.mode !== "readwrite") {
                return downTable.mutate(req);
              }
              var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
              if (!tblCache)
                return downTable.mutate(req);
              var promise = downTable.mutate(req);
              if ((req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
                return key == null;
              }))) {
                promise.then(function(res) {
                  var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                    var _a2;
                    if (res.failures[i])
                      return value;
                    var valueWithKey = ((_a2 = primKey.keyPath) === null || _a2 === void 0 ? void 0 : _a2.includes(".")) ? deepClone(value) : __assign({}, value);
                    setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]);
                    return valueWithKey;
                  }) });
                  var adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                  tblCache.optimisticOps.push(adjustedReq);
                  queueMicrotask(function() {
                    return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  });
                });
              } else {
                tblCache.optimisticOps.push(req);
                req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                promise.then(function(res) {
                  if (res.numFailures > 0) {
                    delArrayItem(tblCache.optimisticOps, req);
                    var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                    if (adjustedReq) {
                      tblCache.optimisticOps.push(adjustedReq);
                    }
                    req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  }
                });
                promise.catch(function() {
                  delArrayItem(tblCache.optimisticOps, req);
                  req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                });
              }
              return promise;
            }, query: function(req) {
              var _a2;
              if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
                return downTable.query(req);
              var freezeResults = ((_a2 = PSD.trans) === null || _a2 === void 0 ? void 0 : _a2.db._options.cache) === "immutable";
              var _b = PSD, requery = _b.requery, signal = _b.signal;
              var _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
              if (cacheEntry && exactMatch) {
                cacheEntry.obsSet = req.obsSet;
              } else {
                var promise = downTable.query(req).then(function(res) {
                  var result = res.result;
                  if (cacheEntry)
                    cacheEntry.res = result;
                  if (freezeResults) {
                    for (var i = 0, l = result.length; i < l; ++i) {
                      Object.freeze(result[i]);
                    }
                    Object.freeze(result);
                  } else {
                    res.result = deepClone(result);
                  }
                  return res;
                }).catch(function(error) {
                  if (container && cacheEntry)
                    delArrayItem(container, cacheEntry);
                  return Promise.reject(error);
                });
                cacheEntry = {
                  obsSet: req.obsSet,
                  promise,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req,
                  dirty: false
                };
                if (container) {
                  container.push(cacheEntry);
                } else {
                  container = [cacheEntry];
                  if (!tblCache) {
                    tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                      queries: {
                        query: {},
                        count: {}
                      },
                      objs: /* @__PURE__ */ new Map(),
                      optimisticOps: [],
                      unsignaledParts: {}
                    };
                  }
                  tblCache.queries.query[req.query.index.name || ""] = container;
                }
              }
              subscribeToCacheEntry(cacheEntry, container, requery, signal);
              return cacheEntry.promise.then(function(res) {
                return {
                  result: applyOptimisticOps(res.result, req, tblCache === null || tblCache === void 0 ? void 0 : tblCache.optimisticOps, downTable, cacheEntry, freezeResults)
                };
              });
            } });
            return tableMW;
          } });
          return coreMW;
        }
      };
      function vipify(target, vipDb) {
        return new Proxy(target, {
          get: function(target2, prop, receiver) {
            if (prop === "db")
              return vipDb;
            return Reflect.get(target2, prop, receiver);
          }
        });
      }
      var Dexie$1 = function() {
        function Dexie3(name, options) {
          var _this = this;
          this._middlewares = {};
          this.verno = 0;
          var deps = Dexie3.dependencies;
          this._options = options = __assign({
            addons: Dexie3.addons,
            autoOpen: true,
            indexedDB: deps.indexedDB,
            IDBKeyRange: deps.IDBKeyRange,
            cache: "cloned"
          }, options);
          this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
          };
          var addons = options.addons;
          this._dbSchema = {};
          this._versions = [];
          this._storeNames = [];
          this._allTables = {};
          this.idbdb = null;
          this._novip = this;
          var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: true,
            PR1398_maxLoop: 3,
            autoOpen: options.autoOpen
          };
          state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
          });
          state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
          });
          this._state = state;
          this.name = name;
          this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
          this.once = function(event, callback) {
            var fn = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              _this.on(event).unsubscribe(fn);
              callback.apply(_this, args);
            };
            return _this.on(event, fn);
          };
          this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
            return function(subscriber, bSticky) {
              Dexie3.vip(function() {
                var state2 = _this._state;
                if (state2.openComplete) {
                  if (!state2.dbOpenError)
                    DexiePromise.resolve().then(subscriber);
                  if (bSticky)
                    subscribe(subscriber);
                } else if (state2.onReadyBeingFired) {
                  state2.onReadyBeingFired.push(subscriber);
                  if (bSticky)
                    subscribe(subscriber);
                } else {
                  subscribe(subscriber);
                  var db_1 = _this;
                  if (!bSticky)
                    subscribe(function unsubscribe() {
                      db_1.on.ready.unsubscribe(subscriber);
                      db_1.on.ready.unsubscribe(unsubscribe);
                    });
                }
              });
            };
          });
          this.Collection = createCollectionConstructor(this);
          this.Table = createTableConstructor(this);
          this.Transaction = createTransactionConstructor(this);
          this.Version = createVersionConstructor(this);
          this.WhereClause = createWhereClauseConstructor(this);
          this.on("versionchange", function(ev) {
            if (ev.newVersion > 0)
              console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade."));
            else
              console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request."));
            _this.close({ disableAutoOpen: false });
          });
          this.on("blocked", function(ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
              console.warn("Dexie.delete('".concat(_this.name, "') was blocked"));
            else
              console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
          });
          this._maxKey = getMaxKey(options.IDBKeyRange);
          this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
            return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
          };
          this._fireOnBlocked = function(ev) {
            _this.on("blocked").fire(ev);
            connections.filter(function(c) {
              return c.name === _this.name && c !== _this && !c._state.vcFired;
            }).map(function(c) {
              return c.on("versionchange").fire(ev);
            });
          };
          this.use(cacheExistingValuesMiddleware);
          this.use(cacheMiddleware);
          this.use(observabilityMiddleware);
          this.use(virtualIndexMiddleware);
          this.use(hooksMiddleware);
          var vipDB = new Proxy(this, {
            get: function(_, prop, receiver) {
              if (prop === "_vip")
                return true;
              if (prop === "table")
                return function(tableName) {
                  return vipify(_this.table(tableName), vipDB);
                };
              var rv = Reflect.get(_, prop, receiver);
              if (rv instanceof Table2)
                return vipify(rv, vipDB);
              if (prop === "tables")
                return rv.map(function(t) {
                  return vipify(t, vipDB);
                });
              if (prop === "_createTransaction")
                return function() {
                  var tx = rv.apply(this, arguments);
                  return vipify(tx, vipDB);
                };
              return rv;
            }
          });
          this.vip = vipDB;
          addons.forEach(function(addon) {
            return addon(_this);
          });
        }
        Dexie3.prototype.version = function(versionNumber) {
          if (isNaN(versionNumber) || versionNumber < 0.1)
            throw new exceptions.Type("Given version is not a positive number");
          versionNumber = Math.round(versionNumber * 10) / 10;
          if (this.idbdb || this._state.isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, versionNumber);
          var versions = this._versions;
          var versionInstance = versions.filter(function(v) {
            return v._cfg.version === versionNumber;
          })[0];
          if (versionInstance)
            return versionInstance;
          versionInstance = new this.Version(versionNumber);
          versions.push(versionInstance);
          versions.sort(lowerVersionFirst);
          versionInstance.stores({});
          this._state.autoSchema = false;
          return versionInstance;
        };
        Dexie3.prototype._whenReady = function(fn) {
          var _this = this;
          return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
            if (_this._state.openComplete) {
              return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
            }
            if (!_this._state.isBeingOpened) {
              if (!_this._state.autoOpen) {
                reject(new exceptions.DatabaseClosed());
                return;
              }
              _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
          }).then(fn);
        };
        Dexie3.prototype.use = function(_a2) {
          var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
          if (name)
            this.unuse({ stack, name });
          var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
          middlewares.push({ stack, create, level: level == null ? 10 : level, name });
          middlewares.sort(function(a, b) {
            return a.level - b.level;
          });
          return this;
        };
        Dexie3.prototype.unuse = function(_a2) {
          var stack = _a2.stack, name = _a2.name, create = _a2.create;
          if (stack && this._middlewares[stack]) {
            this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
              return create ? mw.create !== create : name ? mw.name !== name : false;
            });
          }
          return this;
        };
        Dexie3.prototype.open = function() {
          var _this = this;
          return usePSD(
            globalPSD,
            function() {
              return dexieOpen(_this);
            }
          );
        };
        Dexie3.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var state = this._state;
          var idx = connections.indexOf(this);
          if (idx >= 0)
            connections.splice(idx, 1);
          if (this.idbdb) {
            try {
              this.idbdb.close();
            } catch (e) {
            }
            this.idbdb = null;
          }
          if (!state.isBeingOpened) {
            state.dbReadyPromise = new DexiePromise(function(resolve) {
              state.dbReadyResolve = resolve;
            });
            state.openCanceller = new DexiePromise(function(_, reject) {
              state.cancelOpen = reject;
            });
          }
        };
        Dexie3.prototype.close = function(_a2) {
          var _b = _a2 === void 0 ? { disableAutoOpen: true } : _a2, disableAutoOpen = _b.disableAutoOpen;
          var state = this._state;
          if (disableAutoOpen) {
            if (state.isBeingOpened) {
              state.cancelOpen(new exceptions.DatabaseClosed());
            }
            this._close();
            state.autoOpen = false;
            state.dbOpenError = new exceptions.DatabaseClosed();
          } else {
            this._close();
            state.autoOpen = this._options.autoOpen || state.isBeingOpened;
            state.openComplete = false;
            state.dbOpenError = null;
          }
        };
        Dexie3.prototype.delete = function(closeOptions) {
          var _this = this;
          if (closeOptions === void 0) {
            closeOptions = { disableAutoOpen: true };
          }
          var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] !== "object";
          var state = this._state;
          return new DexiePromise(function(resolve, reject) {
            var doDelete = function() {
              _this.close(closeOptions);
              var req = _this._deps.indexedDB.deleteDatabase(_this.name);
              req.onsuccess = wrap(function() {
                _onDatabaseDeleted(_this._deps, _this.name);
                resolve();
              });
              req.onerror = eventRejectHandler(reject);
              req.onblocked = _this._fireOnBlocked;
            };
            if (hasInvalidArguments)
              throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
            if (state.isBeingOpened) {
              state.dbReadyPromise.then(doDelete);
            } else {
              doDelete();
            }
          });
        };
        Dexie3.prototype.backendDB = function() {
          return this.idbdb;
        };
        Dexie3.prototype.isOpen = function() {
          return this.idbdb !== null;
        };
        Dexie3.prototype.hasBeenClosed = function() {
          var dbOpenError = this._state.dbOpenError;
          return dbOpenError && dbOpenError.name === "DatabaseClosed";
        };
        Dexie3.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        };
        Dexie3.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        };
        Object.defineProperty(Dexie3.prototype, "tables", {
          get: function() {
            var _this = this;
            return keys(this._allTables).map(function(name) {
              return _this._allTables[name];
            });
          },
          enumerable: false,
          configurable: true
        });
        Dexie3.prototype.transaction = function() {
          var args = extractTransactionArgs.apply(this, arguments);
          return this._transaction.apply(this, args);
        };
        Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
          var _this = this;
          var parentTransaction = PSD.trans;
          if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
            parentTransaction = null;
          var onlyIfCompatible = mode.indexOf("?") !== -1;
          mode = mode.replace("!", "").replace("?", "");
          var idbMode, storeNames;
          try {
            storeNames = tables.map(function(table) {
              var storeName = table instanceof _this.Table ? table.name : table;
              if (typeof storeName !== "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return storeName;
            });
            if (mode == "r" || mode === READONLY)
              idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
              idbMode = READWRITE;
            else
              throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
              if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                if (onlyIfCompatible) {
                  parentTransaction = null;
                } else
                  throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              }
              if (parentTransaction) {
                storeNames.forEach(function(storeName) {
                  if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                    if (onlyIfCompatible) {
                      parentTransaction = null;
                    } else
                      throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                  }
                });
              }
              if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                parentTransaction = null;
              }
            }
          } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
              reject(e);
            }) : rejection(e);
          }
          var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
          return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
            return _this._whenReady(enterTransaction);
          }) : this._whenReady(enterTransaction);
        };
        Dexie3.prototype.table = function(tableName) {
          if (!hasOwn(this._allTables, tableName)) {
            throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
          }
          return this._allTables[tableName];
        };
        return Dexie3;
      }();
      var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
      var Observable = function() {
        function Observable2(subscribe) {
          this._subscribe = subscribe;
        }
        Observable2.prototype.subscribe = function(x, error, complete) {
          return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
        };
        Observable2.prototype[symbolObservable] = function() {
          return this;
        };
        return Observable2;
      }();
      var domDeps;
      try {
        domDeps = {
          indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
          IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
        };
      } catch (e) {
        domDeps = { indexedDB: null, IDBKeyRange: null };
      }
      function liveQuery2(querier) {
        var hasValue = false;
        var currentValue;
        var observable = new Observable(function(observer) {
          var scopeFuncIsAsync = isAsyncFunction(querier);
          function execute(ctx) {
            var wasRootExec = beginMicroTickScope();
            try {
              if (scopeFuncIsAsync) {
                incrementExpectedAwaits();
              }
              var rv = newScope(querier, ctx);
              if (scopeFuncIsAsync) {
                rv = rv.finally(decrementExpectedAwaits);
              }
              return rv;
            } finally {
              wasRootExec && endMicroTickScope();
            }
          }
          var closed = false;
          var abortController;
          var accumMuts = {};
          var currentObs = {};
          var subscription = {
            get closed() {
              return closed;
            },
            unsubscribe: function() {
              if (closed)
                return;
              closed = true;
              if (abortController)
                abortController.abort();
              if (startedListening)
                globalEvents.storagemutated.unsubscribe(mutationListener);
            }
          };
          observer.start && observer.start(subscription);
          var startedListening = false;
          var doQuery = function() {
            return execInGlobalContext(_doQuery);
          };
          function shouldNotify() {
            return obsSetsOverlap(currentObs, accumMuts);
          }
          var mutationListener = function(parts) {
            extendObservabilitySet(accumMuts, parts);
            if (shouldNotify()) {
              doQuery();
            }
          };
          var _doQuery = function() {
            if (closed || !domDeps.indexedDB) {
              return;
            }
            accumMuts = {};
            var subscr = {};
            if (abortController)
              abortController.abort();
            abortController = new AbortController();
            var ctx = {
              subscr,
              signal: abortController.signal,
              requery: doQuery,
              querier,
              trans: null
            };
            var ret = execute(ctx);
            Promise.resolve(ret).then(function(result) {
              hasValue = true;
              currentValue = result;
              if (closed || ctx.signal.aborted) {
                return;
              }
              accumMuts = {};
              currentObs = subscr;
              if (!objectIsEmpty(currentObs) && !startedListening) {
                globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                startedListening = true;
              }
              execInGlobalContext(function() {
                return !closed && observer.next && observer.next(result);
              });
            }, function(err) {
              hasValue = false;
              if (!["DatabaseClosedError", "AbortError"].includes(err === null || err === void 0 ? void 0 : err.name)) {
                if (!closed)
                  execInGlobalContext(function() {
                    if (closed)
                      return;
                    observer.error && observer.error(err);
                  });
              }
            });
          };
          setTimeout(doQuery, 0);
          return subscription;
        });
        observable.hasValue = function() {
          return hasValue;
        };
        observable.getValue = function() {
          return currentValue;
        };
        return observable;
      }
      var Dexie2 = Dexie$1;
      props(Dexie2, __assign(__assign({}, fullNameExceptions), {
        delete: function(databaseName) {
          var db2 = new Dexie2(databaseName, { addons: [] });
          return db2.delete();
        },
        exists: function(name) {
          return new Dexie2(name, { addons: [] }).open().then(function(db2) {
            db2.close();
            return true;
          }).catch("NoSuchDatabaseError", function() {
            return false;
          });
        },
        getDatabaseNames: function(cb) {
          try {
            return getDatabaseNames(Dexie2.dependencies).then(cb);
          } catch (_a2) {
            return rejection(new exceptions.MissingAPI());
          }
        },
        defineClass: function() {
          function Class(content) {
            extend(this, content);
          }
          return Class;
        },
        ignoreTransaction: function(scopeFunc) {
          return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
        },
        vip,
        async: function(generatorFn) {
          return function() {
            try {
              var rv = awaitIterator(generatorFn.apply(this, arguments));
              if (!rv || typeof rv.then !== "function")
                return DexiePromise.resolve(rv);
              return rv;
            } catch (e) {
              return rejection(e);
            }
          };
        },
        spawn: function(generatorFn, args, thiz) {
          try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== "function")
              return DexiePromise.resolve(rv);
            return rv;
          } catch (e) {
            return rejection(e);
          }
        },
        currentTransaction: {
          get: function() {
            return PSD.trans || null;
          }
        },
        waitFor: function(promiseOrFunction, optionalTimeout) {
          var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
          return PSD.trans ? PSD.trans.waitFor(promise) : promise;
        },
        Promise: DexiePromise,
        debug: {
          get: function() {
            return debug;
          },
          set: function(value) {
            setDebug(value);
          }
        },
        derive,
        extend,
        props,
        override,
        Events,
        on: globalEvents,
        liveQuery: liveQuery2,
        extendObservabilitySet,
        getByKeyPath,
        setByKeyPath,
        delByKeyPath,
        shallowClone,
        deepClone,
        getObjectDiff,
        cmp: cmp2,
        asap: asap$1,
        minKey,
        addons: [],
        connections,
        errnames,
        dependencies: domDeps,
        cache,
        semVer: DEXIE_VERSION,
        version: DEXIE_VERSION.split(".").map(function(n) {
          return parseInt(n);
        }).reduce(function(p, c, i) {
          return p + c / Math.pow(10, i * 2);
        })
      }));
      Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange);
      if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
          if (!propagatingLocally) {
            var event_1;
            event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
              detail: updatedParts
            });
            propagatingLocally = true;
            dispatchEvent(event_1);
            propagatingLocally = false;
          }
        });
        addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
          var detail = _a2.detail;
          if (!propagatingLocally) {
            propagateLocally(detail);
          }
        });
      }
      function propagateLocally(updateParts) {
        var wasMe = propagatingLocally;
        try {
          propagatingLocally = true;
          globalEvents.storagemutated.fire(updateParts);
          signalSubscribersNow(updateParts, true);
        } finally {
          propagatingLocally = wasMe;
        }
      }
      var propagatingLocally = false;
      var bc;
      var createBC = function() {
      };
      if (typeof BroadcastChannel !== "undefined") {
        createBC = function() {
          bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
          bc.onmessage = function(ev) {
            return ev.data && propagateLocally(ev.data);
          };
        };
        createBC();
        if (typeof bc.unref === "function") {
          bc.unref();
        }
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
          if (!propagatingLocally) {
            bc.postMessage(changedParts);
          }
        });
      }
      if (typeof addEventListener !== "undefined") {
        addEventListener("pagehide", function(event) {
          if (!Dexie$1.disableBfCache && event.persisted) {
            if (debug)
              console.debug("Dexie: handling persisted pagehide");
            bc === null || bc === void 0 ? void 0 : bc.close();
            for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
              var db2 = connections_1[_i];
              db2.close({ disableAutoOpen: false });
            }
          }
        });
        addEventListener("pageshow", function(event) {
          if (!Dexie$1.disableBfCache && event.persisted) {
            if (debug)
              console.debug("Dexie: handling persisted pageshow");
            createBC();
            propagateLocally({ all: new RangeSet2(-Infinity, [[]]) });
          }
        });
      }
      function add2(value) {
        return new PropModification2({ add: value });
      }
      function remove2(value) {
        return new PropModification2({ remove: value });
      }
      function replacePrefix2(a, b) {
        return new PropModification2({ replacePrefix: [a, b] });
      }
      DexiePromise.rejectionMapper = mapError;
      setDebug(debug);
      var namedExports = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Dexie: Dexie$1,
        Entity: Entity2,
        PropModification: PropModification2,
        RangeSet: RangeSet2,
        add: add2,
        cmp: cmp2,
        default: Dexie$1,
        liveQuery: liveQuery2,
        mergeRanges: mergeRanges2,
        rangesOverlap: rangesOverlap2,
        remove: remove2,
        replacePrefix: replacePrefix2
      });
      __assign(Dexie$1, namedExports, { default: Dexie$1 });
      return Dexie$1;
    });
  }
});

// node_modules/handlebars/dist/cjs/handlebars/utils.js
var require_utils = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/utils.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.extend = extend;
    exports.indexOf = indexOf;
    exports.escapeExpression = escapeExpression;
    exports.isEmpty = isEmpty;
    exports.createFrame = createFrame;
    exports.blockParams = blockParams;
    exports.appendContextPath = appendContextPath;
    var escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    var badChars = /[&<>"'`=]/g;
    var possible = /[&<>"'`=]/;
    function escapeChar(chr) {
      return escape[chr];
    }
    function extend(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    }
    var toString = Object.prototype.toString;
    exports.toString = toString;
    var isFunction = function isFunction2(value) {
      return typeof value === "function";
    };
    if (isFunction(/x/)) {
      exports.isFunction = isFunction = function(value) {
        return typeof value === "function" && toString.call(value) === "[object Function]";
      };
    }
    exports.isFunction = isFunction;
    var isArray = Array.isArray || function(value) {
      return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
    };
    exports.isArray = isArray;
    function indexOf(array, value) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    }
    function escapeExpression(string) {
      if (typeof string !== "string") {
        if (string && string.toHTML) {
          return string.toHTML();
        } else if (string == null) {
          return "";
        } else if (!string) {
          return string + "";
        }
        string = "" + string;
      }
      if (!possible.test(string)) {
        return string;
      }
      return string.replace(badChars, escapeChar);
    }
    function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function createFrame(object) {
      var frame = extend({}, object);
      frame._parent = object;
      return frame;
    }
    function blockParams(params, ids) {
      params.path = ids;
      return params;
    }
    function appendContextPath(contextPath, id) {
      return (contextPath ? contextPath + "." : "") + id;
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/exception.js
var require_exception = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/exception.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var errorProps = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function Exception(message, node) {
      var loc = node && node.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
      if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
      }
      var tmp = Error.prototype.constructor.call(this, message);
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Exception);
      }
      try {
        if (loc) {
          this.lineNumber = line;
          this.endLineNumber = endLineNumber;
          if (Object.defineProperty) {
            Object.defineProperty(this, "column", {
              value: column,
              enumerable: true
            });
            Object.defineProperty(this, "endColumn", {
              value: endColumn,
              enumerable: true
            });
          } else {
            this.column = column;
            this.endColumn = endColumn;
          }
        }
      } catch (nop) {
      }
    }
    Exception.prototype = new Error();
    exports["default"] = Exception;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js
var require_block_helper_missing = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    exports["default"] = function(instance) {
      instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) {
          return fn(this);
        } else if (context === false || context == null) {
          return inverse(this);
        } else if (_utils.isArray(context)) {
          if (context.length > 0) {
            if (options.ids) {
              options.ids = [options.name];
            }
            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          if (options.data && options.ids) {
            var data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
            options = { data };
          }
          return fn(context, options);
        }
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/each.js
var require_each = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/each.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _utils = require_utils();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("each", function(context, options) {
        if (!options) {
          throw new _exception2["default"]("Must pass iterator to #each");
        }
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
        if (options.data && options.ids) {
          contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        if (options.data) {
          data = _utils.createFrame(options.data);
        }
        function execIteration(field, index, last) {
          if (data) {
            data.key = field;
            data.index = index;
            data.first = index === 0;
            data.last = !!last;
            if (contextPath) {
              data.contextPath = contextPath + field;
            }
          }
          ret = ret + fn(context[field], {
            data,
            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
          });
        }
        if (context && typeof context === "object") {
          if (_utils.isArray(context)) {
            for (var j = context.length; i < j; i++) {
              if (i in context) {
                execIteration(i, i, i === context.length - 1);
              }
            }
          } else if (typeof Symbol === "function" && context[Symbol.iterator]) {
            var newContext = [];
            var iterator = context[Symbol.iterator]();
            for (var it = iterator.next(); !it.done; it = iterator.next()) {
              newContext.push(it.value);
            }
            context = newContext;
            for (var j = context.length; i < j; i++) {
              execIteration(i, i, i === context.length - 1);
            }
          } else {
            (function() {
              var priorKey = void 0;
              Object.keys(context).forEach(function(key) {
                if (priorKey !== void 0) {
                  execIteration(priorKey, i - 1);
                }
                priorKey = key;
                i++;
              });
              if (priorKey !== void 0) {
                execIteration(priorKey, i - 1, true);
              }
            })();
          }
        }
        if (i === 0) {
          ret = inverse(this);
        }
        return ret;
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js
var require_helper_missing = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("helperMissing", function() {
        if (arguments.length === 1) {
          return void 0;
        } else {
          throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        }
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/if.js
var require_if = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/if.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _utils = require_utils();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#if requires exactly one argument");
        }
        if (_utils.isFunction(conditional)) {
          conditional = conditional.call(this);
        }
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
      instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#unless requires exactly one argument");
        }
        return instance.helpers["if"].call(this, conditional, {
          fn: options.inverse,
          inverse: options.fn,
          hash: options.hash
        });
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/log.js
var require_log = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/log.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(instance) {
      instance.registerHelper("log", function() {
        var args = [void 0], options = arguments[arguments.length - 1];
        for (var i = 0; i < arguments.length - 1; i++) {
          args.push(arguments[i]);
        }
        var level = 1;
        if (options.hash.level != null) {
          level = options.hash.level;
        } else if (options.data && options.data.level != null) {
          level = options.data.level;
        }
        args[0] = level;
        instance.log.apply(instance, args);
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js
var require_lookup = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(instance) {
      instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) {
          return obj;
        }
        return options.lookupProperty(obj, field);
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers/with.js
var require_with = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers/with.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _utils = require_utils();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    exports["default"] = function(instance) {
      instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) {
          throw new _exception2["default"]("#with requires exactly one argument");
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
          var data = options.data;
          if (options.data && options.ids) {
            data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
          }
          return fn(context, {
            data,
            blockParams: _utils.blockParams([context], [data && data.contextPath])
          });
        } else {
          return options.inverse(this);
        }
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/helpers.js
var require_helpers = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/helpers.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.registerDefaultHelpers = registerDefaultHelpers;
    exports.moveHelperToHooks = moveHelperToHooks;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _helpersBlockHelperMissing = require_block_helper_missing();
    var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
    var _helpersEach = require_each();
    var _helpersEach2 = _interopRequireDefault(_helpersEach);
    var _helpersHelperMissing = require_helper_missing();
    var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
    var _helpersIf = require_if();
    var _helpersIf2 = _interopRequireDefault(_helpersIf);
    var _helpersLog = require_log();
    var _helpersLog2 = _interopRequireDefault(_helpersLog);
    var _helpersLookup = require_lookup();
    var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
    var _helpersWith = require_with();
    var _helpersWith2 = _interopRequireDefault(_helpersWith);
    function registerDefaultHelpers(instance) {
      _helpersBlockHelperMissing2["default"](instance);
      _helpersEach2["default"](instance);
      _helpersHelperMissing2["default"](instance);
      _helpersIf2["default"](instance);
      _helpersLog2["default"](instance);
      _helpersLookup2["default"](instance);
      _helpersWith2["default"](instance);
    }
    function moveHelperToHooks(instance, helperName, keepHelper) {
      if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) {
          delete instance.helpers[helperName];
        }
      }
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js
var require_inline = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    exports["default"] = function(instance) {
      instance.registerDecorator("inline", function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
          props.partials = {};
          ret = function(context, options2) {
            var original = container.partials;
            container.partials = _utils.extend({}, original, props.partials);
            var ret2 = fn(context, options2);
            container.partials = original;
            return ret2;
          };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
      });
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/decorators.js
var require_decorators = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/decorators.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.registerDefaultDecorators = registerDefaultDecorators;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _decoratorsInline = require_inline();
    var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
    function registerDefaultDecorators(instance) {
      _decoratorsInline2["default"](instance);
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/logger.js
var require_logger = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/logger.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    var logger = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
          var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
          if (levelMap >= 0) {
            level = levelMap;
          } else {
            level = parseInt(level, 10);
          }
        }
        return level;
      },
      // Can be overridden in the host environment
      log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
          var method = logger.methodMap[level];
          if (!console[method]) {
            method = "log";
          }
          for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            message[_key - 1] = arguments[_key];
          }
          console[method].apply(console, message);
        }
      }
    };
    exports["default"] = logger;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js
var require_create_new_lookup_object = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.createNewLookupObject = createNewLookupObject;
    var _utils = require_utils();
    function createNewLookupObject() {
      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      return _utils.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(sources));
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js
var require_proto_access = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.createProtoAccessControl = createProtoAccessControl;
    exports.resultIsAllowed = resultIsAllowed;
    exports.resetLoggedProperties = resetLoggedProperties;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _createNewLookupObject = require_create_new_lookup_object();
    var _logger = require_logger();
    var _logger2 = _interopRequireDefault(_logger);
    var loggedProperties = /* @__PURE__ */ Object.create(null);
    function createProtoAccessControl(runtimeOptions) {
      var defaultMethodWhiteList = /* @__PURE__ */ Object.create(null);
      defaultMethodWhiteList["constructor"] = false;
      defaultMethodWhiteList["__defineGetter__"] = false;
      defaultMethodWhiteList["__defineSetter__"] = false;
      defaultMethodWhiteList["__lookupGetter__"] = false;
      var defaultPropertyWhiteList = /* @__PURE__ */ Object.create(null);
      defaultPropertyWhiteList["__proto__"] = false;
      return {
        properties: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
          defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
          defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
      };
    }
    function resultIsAllowed(result, protoAccessControl, propertyName) {
      if (typeof result === "function") {
        return checkWhiteList(protoAccessControl.methods, propertyName);
      } else {
        return checkWhiteList(protoAccessControl.properties, propertyName);
      }
    }
    function checkWhiteList(protoAccessControlForType, propertyName) {
      if (protoAccessControlForType.whitelist[propertyName] !== void 0) {
        return protoAccessControlForType.whitelist[propertyName] === true;
      }
      if (protoAccessControlForType.defaultValue !== void 0) {
        return protoAccessControlForType.defaultValue;
      }
      logUnexpecedPropertyAccessOnce(propertyName);
      return false;
    }
    function logUnexpecedPropertyAccessOnce(propertyName) {
      if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        _logger2["default"].log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
      }
    }
    function resetLoggedProperties() {
      Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
      });
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/base.js
var require_base = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/base.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.HandlebarsEnvironment = HandlebarsEnvironment;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _utils = require_utils();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _helpers = require_helpers();
    var _decorators = require_decorators();
    var _logger = require_logger();
    var _logger2 = _interopRequireDefault(_logger);
    var _internalProtoAccess = require_proto_access();
    var VERSION = "4.7.8";
    exports.VERSION = VERSION;
    var COMPILER_REVISION = 8;
    exports.COMPILER_REVISION = COMPILER_REVISION;
    var LAST_COMPATIBLE_COMPILER_REVISION = 7;
    exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: "<= 1.0.rc.2",
      // 1.0.rc.2 is actually rev2 but doesn't report it
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0 <4.3.0",
      8: ">= 4.3.0"
    };
    exports.REVISION_CHANGES = REVISION_CHANGES;
    var objectType = "[object Object]";
    function HandlebarsEnvironment(helpers, partials, decorators) {
      this.helpers = helpers || {};
      this.partials = partials || {};
      this.decorators = decorators || {};
      _helpers.registerDefaultHelpers(this);
      _decorators.registerDefaultDecorators(this);
    }
    HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,
      logger: _logger2["default"],
      log: _logger2["default"].log,
      registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2["default"]("Arg not supported with multiple helpers");
          }
          _utils.extend(this.helpers, name);
        } else {
          this.helpers[name] = fn;
        }
      },
      unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
      },
      registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) {
          _utils.extend(this.partials, name);
        } else {
          if (typeof partial === "undefined") {
            throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
          }
          this.partials[name] = partial;
        }
      },
      unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
      },
      registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2["default"]("Arg not supported with multiple decorators");
          }
          _utils.extend(this.decorators, name);
        } else {
          this.decorators[name] = fn;
        }
      },
      unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
      },
      /**
       * Reset the memory of illegal property accesses that have already been logged.
       * @deprecated should only be used in handlebars test-cases
       */
      resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
      }
    };
    var log = _logger2["default"].log;
    exports.log = log;
    exports.createFrame = _utils.createFrame;
    exports.logger = _logger2["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/safe-string.js
var require_safe_string = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/safe-string.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function SafeString(string) {
      this.string = string;
    }
    SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
      return "" + this.string;
    };
    exports["default"] = SafeString;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js
var require_wrapHelper = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.wrapHelper = wrapHelper;
    function wrapHelper(helper, transformOptionsFn) {
      if (typeof helper !== "function") {
        return helper;
      }
      var wrapper = function wrapper2() {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
      };
      return wrapper;
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/runtime.js
var require_runtime = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/runtime.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.checkRevision = checkRevision;
    exports.template = template;
    exports.wrapProgram = wrapProgram;
    exports.resolvePartial = resolvePartial;
    exports.invokePartial = invokePartial;
    exports.noop = noop;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var _utils = require_utils();
    var Utils = _interopRequireWildcard(_utils);
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _base = require_base();
    var _helpers = require_helpers();
    var _internalWrapHelper = require_wrapHelper();
    var _internalProtoAccess = require_proto_access();
    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
      if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
        return;
      }
      if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
      } else {
        throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
      }
    }
    function template(templateSpec, env) {
      if (!env) {
        throw new _exception2["default"]("No environment passed to template");
      }
      if (!templateSpec || !templateSpec.main) {
        throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
      }
      templateSpec.main.decorator = templateSpec.main_d;
      env.VM.checkRevision(templateSpec.compiler);
      var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
      function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
          context = Utils.extend({}, context, options.hash);
          if (options.ids) {
            options.ids[0] = true;
          }
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
          hooks: this.hooks,
          protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
          options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
          result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
          if (options.indent) {
            var lines = result.split("\n");
            for (var i = 0, l = lines.length; i < l; i++) {
              if (!lines[i] && i + 1 === l) {
                break;
              }
              lines[i] = options.indent + lines[i];
            }
            result = lines.join("\n");
          }
          return result;
        } else {
          throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
        }
      }
      var container = {
        strict: function strict(obj, name, loc) {
          if (!obj || !(name in obj)) {
            throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
              loc
            });
          }
          return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
          var result = parent[propertyName];
          if (result == null) {
            return result;
          }
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return result;
          }
          if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
            return result;
          }
          return void 0;
        },
        lookup: function lookup(depths, name) {
          var len = depths.length;
          for (var i = 0; i < len; i++) {
            var result = depths[i] && container.lookupProperty(depths[i], name);
            if (result != null) {
              return depths[i][name];
            }
          }
        },
        lambda: function lambda(current, context) {
          return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
          var ret2 = templateSpec[i];
          ret2.decorator = templateSpec[i + "_d"];
          return ret2;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
          var programWrapper = this.programs[i], fn = this.fn(i);
          if (data || depths || blockParams || declaredBlockParams) {
            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
          }
          return programWrapper;
        },
        data: function data(value, depth) {
          while (value && depth--) {
            value = value._parent;
          }
          return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
          var obj = param || common;
          if (param && common && param !== common) {
            obj = Utils.extend({}, common, param);
          }
          return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
      };
      function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
          data = initData(context, data);
        }
        var depths = void 0, blockParams = templateSpec.useBlockParams ? [] : void 0;
        if (templateSpec.useDepths) {
          if (options.depths) {
            depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
          } else {
            depths = [context];
          }
        }
        function main(context2) {
          return "" + templateSpec.main(container, context2, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
      }
      ret.isTop = true;
      ret._setup = function(options) {
        if (!options.partial) {
          var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
          wrapHelpersToPassLookupProperty(mergedHelpers, container);
          container.helpers = mergedHelpers;
          if (templateSpec.usePartial) {
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
          }
          if (templateSpec.usePartial || templateSpec.useDecorators) {
            container.decorators = Utils.extend({}, env.decorators, options.decorators);
          }
          container.hooks = {};
          container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
          var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
          _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
          _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
          container.protoAccessControl = options.protoAccessControl;
          container.helpers = options.helpers;
          container.partials = options.partials;
          container.decorators = options.decorators;
          container.hooks = options.hooks;
        }
      };
      ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) {
          throw new _exception2["default"]("must pass block params");
        }
        if (templateSpec.useDepths && !depths) {
          throw new _exception2["default"]("must pass parent depths");
        }
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
      };
      return ret;
    }
    function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
      function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
          currentDepths = [context].concat(depths);
        }
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
      }
      prog = executeDecorators(fn, prog, container, depths, data, blockParams);
      prog.program = i;
      prog.depth = depths ? depths.length : 0;
      prog.blockParams = declaredBlockParams || 0;
      return prog;
    }
    function resolvePartial(partial, context, options) {
      if (!partial) {
        if (options.name === "@partial-block") {
          partial = options.data["partial-block"];
        } else {
          partial = options.partials[options.name];
        }
      } else if (!partial.call && !options.name) {
        options.name = partial;
        partial = options.partials[partial];
      }
      return partial;
    }
    function invokePartial(partial, context, options) {
      var currentPartialBlock = options.data && options.data["partial-block"];
      options.partial = true;
      if (options.ids) {
        options.data.contextPath = options.ids[0] || options.data.contextPath;
      }
      var partialBlock = void 0;
      if (options.fn && options.fn !== noop) {
        (function() {
          options.data = _base.createFrame(options.data);
          var fn = options.fn;
          partialBlock = options.data["partial-block"] = function partialBlockWrapper(context2) {
            var options2 = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
            options2.data = _base.createFrame(options2.data);
            options2.data["partial-block"] = currentPartialBlock;
            return fn(context2, options2);
          };
          if (fn.partials) {
            options.partials = Utils.extend({}, options.partials, fn.partials);
          }
        })();
      }
      if (partial === void 0 && partialBlock) {
        partial = partialBlock;
      }
      if (partial === void 0) {
        throw new _exception2["default"]("The partial " + options.name + " could not be found");
      } else if (partial instanceof Function) {
        return partial(context, options);
      }
    }
    function noop() {
      return "";
    }
    function initData(context, data) {
      if (!data || !("root" in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
      }
      return data;
    }
    function executeDecorators(fn, prog, container, depths, data, blockParams) {
      if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
      }
      return prog;
    }
    function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
      Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
      });
    }
    function passLookupPropertyOption(helper, container) {
      var lookupProperty = container.lookupProperty;
      return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({ lookupProperty }, options);
      });
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/no-conflict.js
var require_no_conflict = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/no-conflict.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = function(Handlebars2) {
      (function() {
        if (typeof globalThis === "object") return;
        Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        });
        __magic__.globalThis = __magic__;
        delete Object.prototype.__magic__;
      })();
      var $Handlebars = globalThis.Handlebars;
      Handlebars2.noConflict = function() {
        if (globalThis.Handlebars === Handlebars2) {
          globalThis.Handlebars = $Handlebars;
        }
        return Handlebars2;
      };
    };
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars.runtime.js
var require_handlebars_runtime = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars.runtime.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var _handlebarsBase = require_base();
    var base = _interopRequireWildcard(_handlebarsBase);
    var _handlebarsSafeString = require_safe_string();
    var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
    var _handlebarsException = require_exception();
    var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
    var _handlebarsUtils = require_utils();
    var Utils = _interopRequireWildcard(_handlebarsUtils);
    var _handlebarsRuntime = require_runtime();
    var runtime = _interopRequireWildcard(_handlebarsRuntime);
    var _handlebarsNoConflict = require_no_conflict();
    var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
    function create() {
      var hb = new base.HandlebarsEnvironment();
      Utils.extend(hb, base);
      hb.SafeString = _handlebarsSafeString2["default"];
      hb.Exception = _handlebarsException2["default"];
      hb.Utils = Utils;
      hb.escapeExpression = Utils.escapeExpression;
      hb.VM = runtime;
      hb.template = function(spec) {
        return runtime.template(spec, hb);
      };
      return hb;
    }
    var inst = create();
    inst.create = create;
    _handlebarsNoConflict2["default"](inst);
    inst["default"] = inst;
    exports["default"] = inst;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js
var require_ast = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var AST = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
          return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
          return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
          return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
      }
    };
    exports["default"] = AST;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js
var require_parser = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var handlebars = function() {
      var parser = {
        trace: function trace() {
        },
        yy: {},
        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
          var $0 = $$.length - 1;
          switch (yystate) {
            case 1:
              return $$[$0 - 1];
              break;
            case 2:
              this.$ = yy.prepareProgram($$[$0]);
              break;
            case 3:
              this.$ = $$[$0];
              break;
            case 4:
              this.$ = $$[$0];
              break;
            case 5:
              this.$ = $$[$0];
              break;
            case 6:
              this.$ = $$[$0];
              break;
            case 7:
              this.$ = $$[$0];
              break;
            case 8:
              this.$ = $$[$0];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: yy.stripComment($$[$0]),
                strip: yy.stripFlags($$[$0], $$[$0]),
                loc: yy.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: $$[$0],
                value: $$[$0],
                loc: yy.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
              break;
            case 12:
              this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
              break;
            case 13:
              this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
              break;
            case 14:
              this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
              break;
            case 15:
              this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
              break;
            case 16:
              this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
              break;
            case 17:
              this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
              break;
            case 18:
              this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
              break;
            case 19:
              var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
              program.chained = true;
              this.$ = { strip: $$[$0 - 2].strip, program, chain: true };
              break;
            case 20:
              this.$ = $$[$0];
              break;
            case 21:
              this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
              break;
            case 22:
              this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
              break;
            case 23:
              this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: $$[$0 - 3],
                params: $$[$0 - 2],
                hash: $$[$0 - 1],
                indent: "",
                strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                loc: yy.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
              break;
            case 26:
              this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
              break;
            case 27:
              this.$ = $$[$0];
              break;
            case 28:
              this.$ = $$[$0];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: $$[$0 - 3],
                params: $$[$0 - 2],
                hash: $$[$0 - 1],
                loc: yy.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: $$[$0], loc: yy.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
              break;
            case 32:
              this.$ = yy.id($$[$0 - 1]);
              break;
            case 33:
              this.$ = $$[$0];
              break;
            case 34:
              this.$ = $$[$0];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: $$[$0] === "true", original: $$[$0] === "true", loc: yy.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: yy.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: yy.locInfo(this._$) };
              break;
            case 40:
              this.$ = $$[$0];
              break;
            case 41:
              this.$ = $$[$0];
              break;
            case 42:
              this.$ = yy.preparePath(true, $$[$0], this._$);
              break;
            case 43:
              this.$ = yy.preparePath(false, $$[$0], this._$);
              break;
            case 44:
              $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });
              this.$ = $$[$0 - 2];
              break;
            case 45:
              this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              $$[$0 - 1].push($$[$0]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              $$[$0 - 1].push($$[$0]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              $$[$0 - 1].push($$[$0]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              $$[$0 - 1].push($$[$0]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              $$[$0 - 1].push($$[$0]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              $$[$0 - 1].push($$[$0]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              $$[$0 - 1].push($$[$0]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              $$[$0 - 1].push($$[$0]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              $$[$0 - 1].push($$[$0]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              $$[$0 - 1].push($$[$0]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              $$[$0 - 1].push($$[$0]);
              break;
            case 98:
              this.$ = [$$[$0]];
              break;
            case 99:
              $$[$0 - 1].push($$[$0]);
              break;
            case 100:
              this.$ = [$$[$0]];
              break;
            case 101:
              $$[$0 - 1].push($$[$0]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function parseError(str, hash) {
          throw new Error(str);
        },
        parse: function parse(input) {
          var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
          this.lexer.setInput(input);
          this.lexer.yy = this.yy;
          this.yy.lexer = this.lexer;
          this.yy.parser = this;
          if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
          var yyloc = this.lexer.yylloc;
          lstack.push(yyloc);
          var ranges = this.lexer.options && this.lexer.options.ranges;
          if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
          function popStack(n) {
            stack.length = stack.length - 2 * n;
            vstack.length = vstack.length - n;
            lstack.length = lstack.length - n;
          }
          function lex() {
            var token;
            token = self2.lexer.lex() || 1;
            if (typeof token !== "number") {
              token = self2.symbols_[token] || token;
            }
            return token;
          }
          var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
          while (true) {
            state = stack[stack.length - 1];
            if (this.defaultActions[state]) {
              action = this.defaultActions[state];
            } else {
              if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
              }
              action = table[state] && table[state][symbol];
            }
            if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
                if (this.lexer.showPosition) {
                  errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                  errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected });
              }
            }
            if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
            }
            switch (action[0]) {
              case 1:
                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]);
                symbol = null;
                if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0) recovering--;
                } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
                }
                break;
              case 2:
                len = this.productions_[action[1]][1];
                yyval.$ = vstack[vstack.length - len];
                yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                if (typeof r !== "undefined") {
                  return r;
                }
                if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
                }
                stack.push(this.productions_[action[1]][0]);
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                stack.push(newState);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }
      };
      var lexer = function() {
        var lexer2 = {
          EOF: 1,
          parseError: function parseError(str, hash) {
            if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
            } else {
              throw new Error(str);
            }
          },
          setInput: function setInput(input) {
            this._input = input;
            this._more = this._less = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = "";
            this.conditionStack = ["INITIAL"];
            this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
            if (this.options.ranges) this.yylloc.range = [0, 0];
            this.offset = 0;
            return this;
          },
          input: function input() {
            var ch = this._input[0];
            this.yytext += ch;
            this.yyleng++;
            this.offset++;
            this.match += ch;
            this.matched += ch;
            var lines = ch.match(/(?:\r\n?|\n).*/g);
            if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
            if (this.options.ranges) this.yylloc.range[1]++;
            this._input = this._input.slice(1);
            return ch;
          },
          unput: function unput(ch) {
            var len = ch.length;
            var lines = ch.split(/(?:\r\n?|\n)/g);
            this._input = ch + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
            this.offset -= len;
            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1);
            this.matched = this.matched.substr(0, this.matched.length - 1);
            if (lines.length - 1) this.yylineno -= lines.length - 1;
            var r = this.yylloc.range;
            this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
            };
            if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
            }
            return this;
          },
          more: function more() {
            this._more = true;
            return this;
          },
          less: function less(n) {
            this.unput(this.match.slice(n));
          },
          pastInput: function pastInput() {
            var past = this.matched.substr(0, this.matched.length - this.match.length);
            return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function upcomingInput() {
            var next = this.match;
            if (next.length < 20) {
              next += this._input.substr(0, 20 - next.length);
            }
            return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function showPosition() {
            var pre = this.pastInput();
            var c = new Array(pre.length + 1).join("-");
            return pre + this.upcomingInput() + "\n" + c + "^";
          },
          next: function next() {
            if (this.done) {
              return this.EOF;
            }
            if (!this._input) this.done = true;
            var token, match, tempMatch, index, col, lines;
            if (!this._more) {
              this.yytext = "";
              this.match = "";
            }
            var rules = this._currentRules();
            for (var i = 0; i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
              }
            }
            if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
              };
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
            }
            if (this._input === "") {
              return this.EOF;
            } else {
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
            }
          },
          lex: function lex() {
            var r = this.next();
            if (typeof r !== "undefined") {
              return r;
            } else {
              return this.lex();
            }
          },
          begin: function begin(condition) {
            this.conditionStack.push(condition);
          },
          popState: function popState() {
            return this.conditionStack.pop();
          },
          _currentRules: function _currentRules() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function topState() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function begin(condition) {
            this.begin(condition);
          }
        };
        lexer2.options = {};
        lexer2.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          function strip(start, end) {
            return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
          }
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              if (yy_.yytext.slice(-2) === "\\\\") {
                strip(0, 1);
                this.begin("mu");
              } else if (yy_.yytext.slice(-1) === "\\") {
                strip(0, 1);
                this.begin("emu");
              } else {
                this.begin("mu");
              }
              if (yy_.yytext) return 15;
              break;
            case 1:
              return 15;
              break;
            case 2:
              this.popState();
              return 15;
              break;
            case 3:
              this.begin("raw");
              return 15;
              break;
            case 4:
              this.popState();
              if (this.conditionStack[this.conditionStack.length - 1] === "raw") {
                return 15;
              } else {
                strip(5, 9);
                return "END_RAW_BLOCK";
              }
              break;
            case 5:
              return 15;
              break;
            case 6:
              this.popState();
              return 14;
              break;
            case 7:
              return 65;
              break;
            case 8:
              return 68;
              break;
            case 9:
              return 19;
              break;
            case 10:
              this.popState();
              this.begin("raw");
              return 23;
              break;
            case 11:
              return 55;
              break;
            case 12:
              return 60;
              break;
            case 13:
              return 29;
              break;
            case 14:
              return 47;
              break;
            case 15:
              this.popState();
              return 44;
              break;
            case 16:
              this.popState();
              return 44;
              break;
            case 17:
              return 34;
              break;
            case 18:
              return 39;
              break;
            case 19:
              return 51;
              break;
            case 20:
              return 48;
              break;
            case 21:
              this.unput(yy_.yytext);
              this.popState();
              this.begin("com");
              break;
            case 22:
              this.popState();
              return 14;
              break;
            case 23:
              return 48;
              break;
            case 24:
              return 73;
              break;
            case 25:
              return 72;
              break;
            case 26:
              return 72;
              break;
            case 27:
              return 87;
              break;
            case 28:
              break;
            case 29:
              this.popState();
              return 54;
              break;
            case 30:
              this.popState();
              return 33;
              break;
            case 31:
              yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
              return 80;
              break;
            case 32:
              yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
              return 80;
              break;
            case 33:
              return 85;
              break;
            case 34:
              return 82;
              break;
            case 35:
              return 82;
              break;
            case 36:
              return 83;
              break;
            case 37:
              return 84;
              break;
            case 38:
              return 81;
              break;
            case 39:
              return 75;
              break;
            case 40:
              return 77;
              break;
            case 41:
              return 72;
              break;
            case 42:
              yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
              return 72;
              break;
            case 43:
              return "INVALID";
              break;
            case 44:
              return 5;
              break;
          }
        };
        lexer2.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
        lexer2.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
        return lexer2;
      }();
      parser.lexer = lexer;
      function Parser() {
        this.yy = {};
      }
      Parser.prototype = parser;
      parser.Parser = Parser;
      return new Parser();
    }();
    exports["default"] = handlebars;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js
var require_visitor = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    function Visitor() {
      this.parents = [];
    }
    Visitor.prototype = {
      constructor: Visitor,
      mutating: false,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
          if (value && !Visitor.prototype[value.type]) {
            throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
          }
          node[name] = value;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) {
          throw new _exception2["default"](node.type + " requires " + name);
        }
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function acceptArray(array) {
        for (var i = 0, l = array.length; i < l; i++) {
          this.acceptKey(array, i);
          if (!array[i]) {
            array.splice(i, 1);
            i--;
            l--;
          }
        }
      },
      accept: function accept(object) {
        if (!object) {
          return;
        }
        if (!this[object.type]) {
          throw new _exception2["default"]("Unknown type: " + object.type, object);
        }
        if (this.current) {
          this.parents.unshift(this.current);
        }
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) {
          return ret;
        } else if (ret !== false) {
          return object;
        }
      },
      Program: function Program(program) {
        this.acceptArray(program.body);
      },
      MustacheStatement: visitSubExpression,
      Decorator: visitSubExpression,
      BlockStatement: visitBlock,
      DecoratorBlock: visitBlock,
      PartialStatement: visitPartial,
      PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, "program");
      },
      ContentStatement: function ContentStatement() {
      },
      CommentStatement: function CommentStatement() {
      },
      SubExpression: visitSubExpression,
      PathExpression: function PathExpression() {
      },
      StringLiteral: function StringLiteral() {
      },
      NumberLiteral: function NumberLiteral() {
      },
      BooleanLiteral: function BooleanLiteral() {
      },
      UndefinedLiteral: function UndefinedLiteral() {
      },
      NullLiteral: function NullLiteral() {
      },
      Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
      },
      HashPair: function HashPair(pair) {
        this.acceptRequired(pair, "value");
      }
    };
    function visitSubExpression(mustache) {
      this.acceptRequired(mustache, "path");
      this.acceptArray(mustache.params);
      this.acceptKey(mustache, "hash");
    }
    function visitBlock(block) {
      visitSubExpression.call(this, block);
      this.acceptKey(block, "program");
      this.acceptKey(block, "inverse");
    }
    function visitPartial(partial) {
      this.acceptRequired(partial, "name");
      this.acceptArray(partial.params);
      this.acceptKey(partial, "hash");
    }
    exports["default"] = Visitor;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js
var require_whitespace_control = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _visitor = require_visitor();
    var _visitor2 = _interopRequireDefault(_visitor);
    function WhitespaceControl() {
      var options = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = options;
    }
    WhitespaceControl.prototype = new _visitor2["default"]();
    WhitespaceControl.prototype.Program = function(program) {
      var doStandalone = !this.options.ignoreStandalone;
      var isRoot = !this.isRootSeen;
      this.isRootSeen = true;
      var body = program.body;
      for (var i = 0, l = body.length; i < l; i++) {
        var current = body[i], strip = this.accept(current);
        if (!strip) {
          continue;
        }
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) {
          omitRight(body, i, true);
        }
        if (strip.open) {
          omitLeft(body, i, true);
        }
        if (doStandalone && inlineStandalone) {
          omitRight(body, i);
          if (omitLeft(body, i)) {
            if (current.type === "PartialStatement") {
              current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
          }
        }
        if (doStandalone && openStandalone) {
          omitRight((current.program || current.inverse).body);
          omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
          omitRight(body, i);
          omitLeft((current.inverse || current.program).body);
        }
      }
      return program;
    };
    WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
      this.accept(block.program);
      this.accept(block.inverse);
      var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
      if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        while (lastInverse.chained) {
          lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
        }
      }
      var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
      };
      if (block.openStrip.close) {
        omitRight(program.body, null, true);
      }
      if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) {
          omitLeft(program.body, null, true);
        }
        if (inverseStrip.close) {
          omitRight(firstInverse.body, null, true);
        }
        if (block.closeStrip.open) {
          omitLeft(lastInverse.body, null, true);
        }
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
          omitLeft(program.body);
          omitRight(firstInverse.body);
        }
      } else if (block.closeStrip.open) {
        omitLeft(program.body, null, true);
      }
      return strip;
    };
    WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
      return mustache.strip;
    };
    WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
      var strip = node.strip || {};
      return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
      };
    };
    function isPrevWhitespace(body, i, isRoot) {
      if (i === void 0) {
        i = body.length;
      }
      var prev = body[i - 1], sibling = body[i - 2];
      if (!prev) {
        return isRoot;
      }
      if (prev.type === "ContentStatement") {
        return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
      }
    }
    function isNextWhitespace(body, i, isRoot) {
      if (i === void 0) {
        i = -1;
      }
      var next = body[i + 1], sibling = body[i + 2];
      if (!next) {
        return isRoot;
      }
      if (next.type === "ContentStatement") {
        return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
      }
    }
    function omitRight(body, i, multiple) {
      var current = body[i == null ? 0 : i + 1];
      if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) {
        return;
      }
      var original = current.value;
      current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
      current.rightStripped = current.value !== original;
    }
    function omitLeft(body, i, multiple) {
      var current = body[i == null ? body.length - 1 : i - 1];
      if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) {
        return;
      }
      var original = current.value;
      current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
      current.leftStripped = current.value !== original;
      return current.leftStripped;
    }
    exports["default"] = WhitespaceControl;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.SourceLocation = SourceLocation;
    exports.id = id;
    exports.stripFlags = stripFlags;
    exports.stripComment = stripComment;
    exports.preparePath = preparePath;
    exports.prepareMustache = prepareMustache;
    exports.prepareRawBlock = prepareRawBlock;
    exports.prepareBlock = prepareBlock;
    exports.prepareProgram = prepareProgram;
    exports.preparePartialBlock = preparePartialBlock;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    function validateClose(open, close) {
      close = close.path ? close.path.original : close;
      if (open.path.original !== close) {
        var errorNode = { loc: open.path.loc };
        throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode);
      }
    }
    function SourceLocation(source, locInfo) {
      this.source = source;
      this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
      };
      this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
      };
    }
    function id(token) {
      if (/^\[.*\]$/.test(token)) {
        return token.substring(1, token.length - 1);
      } else {
        return token;
      }
    }
    function stripFlags(open, close) {
      return {
        open: open.charAt(2) === "~",
        close: close.charAt(close.length - 3) === "~"
      };
    }
    function stripComment(comment) {
      return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
    }
    function preparePath(data, parts, loc) {
      loc = this.locInfo(loc);
      var original = data ? "@" : "", dig = [], depth = 0;
      for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i].part, isLiteral = parts[i].original !== part;
        original += (parts[i].separator || "") + part;
        if (!isLiteral && (part === ".." || part === "." || part === "this")) {
          if (dig.length > 0) {
            throw new _exception2["default"]("Invalid path: " + original, { loc });
          } else if (part === "..") {
            depth++;
          }
        } else {
          dig.push(part);
        }
      }
      return {
        type: "PathExpression",
        data,
        depth,
        parts: dig,
        original,
        loc
      };
    }
    function prepareMustache(path, params, hash, open, strip, locInfo) {
      var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
      var decorator = /\*/.test(open);
      return {
        type: decorator ? "Decorator" : "MustacheStatement",
        path,
        params,
        hash,
        escaped,
        strip,
        loc: this.locInfo(locInfo)
      };
    }
    function prepareRawBlock(openRawBlock, contents, close, locInfo) {
      validateClose(openRawBlock, close);
      locInfo = this.locInfo(locInfo);
      var program = {
        type: "Program",
        body: contents,
        strip: {},
        loc: locInfo
      };
      return {
        type: "BlockStatement",
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
      };
    }
    function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
      if (close && close.path) {
        validateClose(openBlock, close);
      }
      var decorator = /\*/.test(openBlock.open);
      program.blockParams = openBlock.blockParams;
      var inverse = void 0, inverseStrip = void 0;
      if (inverseAndProgram) {
        if (decorator) {
          throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
        }
        if (inverseAndProgram.chain) {
          inverseAndProgram.program.body[0].closeStrip = close.strip;
        }
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
      }
      if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
      }
      return {
        type: decorator ? "DecoratorBlock" : "BlockStatement",
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program,
        inverse,
        openStrip: openBlock.strip,
        inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
      };
    }
    function prepareProgram(statements, loc) {
      if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        if (firstLoc && lastLoc) {
          loc = {
            source: firstLoc.source,
            start: {
              line: firstLoc.start.line,
              column: firstLoc.start.column
            },
            end: {
              line: lastLoc.end.line,
              column: lastLoc.end.column
            }
          };
        }
      }
      return {
        type: "Program",
        body: statements,
        strip: {},
        loc
      };
    }
    function preparePartialBlock(open, program, close, locInfo) {
      validateClose(open, close);
      return {
        type: "PartialBlockStatement",
        name: open.path,
        params: open.params,
        hash: open.hash,
        program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
      };
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/base.js
var require_base2 = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/base.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.parseWithoutProcessing = parseWithoutProcessing;
    exports.parse = parse;
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _parser = require_parser();
    var _parser2 = _interopRequireDefault(_parser);
    var _whitespaceControl = require_whitespace_control();
    var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
    var _helpers = require_helpers2();
    var Helpers = _interopRequireWildcard(_helpers);
    var _utils = require_utils();
    exports.parser = _parser2["default"];
    var yy = {};
    _utils.extend(yy, Helpers);
    function parseWithoutProcessing(input, options) {
      if (input.type === "Program") {
        return input;
      }
      _parser2["default"].yy = yy;
      yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
      };
      var ast = _parser2["default"].parse(input);
      return ast;
    }
    function parse(input, options) {
      var ast = parseWithoutProcessing(input, options);
      var strip = new _whitespaceControl2["default"](options);
      return strip.accept(ast);
    }
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js
var require_compiler = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.Compiler = Compiler;
    exports.precompile = precompile;
    exports.compile = compile;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _utils = require_utils();
    var _ast = require_ast();
    var _ast2 = _interopRequireDefault(_ast);
    var slice = [].slice;
    function Compiler() {
    }
    Compiler.prototype = {
      compiler: Compiler,
      equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
          if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
            return false;
          }
        }
        len = this.children.length;
        for (var i = 0; i < len; i++) {
          if (!this.children[i].equals(other.children[i])) {
            return false;
          }
        }
        return true;
      },
      guid: 0,
      compile: function compile2(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(/* @__PURE__ */ Object.create(null), {
          helperMissing: true,
          blockHelperMissing: true,
          each: true,
          "if": true,
          unless: true,
          "with": true,
          log: true,
          lookup: true
        }, options.knownHelpers);
        return this.accept(program);
      },
      compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
      },
      accept: function accept(node) {
        if (!this[node.type]) {
          throw new _exception2["default"]("Unknown type: " + node.type, node);
        }
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
      },
      Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for (var i = 0; i < bodyLength; i++) {
          this.accept(body[i]);
        }
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
      },
      BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === "helper") {
          this.helperSexpr(block, program, inverse);
        } else if (type === "simple") {
          this.simpleSexpr(block);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          this.opcode("emptyHash");
          this.opcode("blockValue", block.path.original);
        } else {
          this.ambiguousSexpr(block, program, inverse);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          this.opcode("emptyHash");
          this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
      },
      DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, void 0), path = decorator.path;
        this.useDecorators = true;
        this.opcode("registerDecorator", params.length, path.original);
      },
      PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) {
          program = this.compileProgram(partial.program);
        }
        var params = partial.params;
        if (params.length > 1) {
          throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
        } else if (!params.length) {
          if (this.options.explicitPartialContext) {
            this.opcode("pushLiteral", "undefined");
          } else {
            params.push({ type: "PathExpression", parts: [], depth: 0 });
          }
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
        if (isDynamic) {
          this.accept(partial.name);
        }
        this.setupFullMustacheParams(partial, program, void 0, true);
        var indent = partial.indent || "";
        if (this.options.preventIndent && indent) {
          this.opcode("appendContent", indent);
          indent = "";
        }
        this.opcode("invokePartial", isDynamic, partialName, indent);
        this.opcode("append");
      },
      PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
      },
      MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) {
          this.opcode("appendEscaped");
        } else {
          this.opcode("append");
        }
      },
      Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
      },
      ContentStatement: function ContentStatement(content) {
        if (content.value) {
          this.opcode("appendContent", content.value);
        }
      },
      CommentStatement: function CommentStatement() {
      },
      SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === "simple") {
          this.simpleSexpr(sexpr);
        } else if (type === "helper") {
          this.helperSexpr(sexpr);
        } else {
          this.ambiguousSexpr(sexpr);
        }
      },
      ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode("getContext", path.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        path.strict = true;
        this.accept(path);
        this.opcode("invokeAmbiguous", name, isBlock);
      },
      simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode("resolvePossibleLambda");
      },
      helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) {
          this.opcode("invokeKnownHelper", params.length, name);
        } else if (this.options.knownHelpersOnly) {
          throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        } else {
          path.strict = true;
          path.falsy = true;
          this.accept(path);
          this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
        }
      },
      PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode("getContext", path.depth);
        var name = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) {
          this.opcode("lookupBlockParam", blockParamId, path.parts);
        } else if (!name) {
          this.opcode("pushContext");
        } else if (path.data) {
          this.options.data = true;
          this.opcode("lookupData", path.depth, path.parts, path.strict);
        } else {
          this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
        }
      },
      StringLiteral: function StringLiteral(string) {
        this.opcode("pushString", string.value);
      },
      NumberLiteral: function NumberLiteral(number) {
        this.opcode("pushLiteral", number.value);
      },
      BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode("pushLiteral", bool.value);
      },
      UndefinedLiteral: function UndefinedLiteral() {
        this.opcode("pushLiteral", "undefined");
      },
      NullLiteral: function NullLiteral() {
        this.opcode("pushLiteral", "null");
      },
      Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode("pushHash");
        for (; i < l; i++) {
          this.pushParam(pairs[i].value);
        }
        while (i--) {
          this.opcode("assignToHash", pairs[i].key);
        }
        this.opcode("popHash");
      },
      // HELPERS
      opcode: function opcode(name) {
        this.opcodes.push({
          opcode: name,
          args: slice.call(arguments, 1),
          loc: this.sourceNode[0].loc
        });
      },
      addDepth: function addDepth(depth) {
        if (!depth) {
          return;
        }
        this.useDepths = true;
      },
      classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
        var isEligible = !isBlockParam && (isHelper || isSimple);
        if (isEligible && !isHelper) {
          var _name = sexpr.path.parts[0], options = this.options;
          if (options.knownHelpers[_name]) {
            isHelper = true;
          } else if (options.knownHelpersOnly) {
            isEligible = false;
          }
        }
        if (isHelper) {
          return "helper";
        } else if (isEligible) {
          return "ambiguous";
        } else {
          return "simple";
        }
      },
      pushParams: function pushParams(params) {
        for (var i = 0, l = params.length; i < l; i++) {
          this.pushParam(params[i]);
        }
      },
      pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || "";
        if (this.stringParams) {
          if (value.replace) {
            value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
          }
          if (val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode("getContext", val.depth || 0);
          this.opcode("pushStringParam", value, val.type);
          if (val.type === "SubExpression") {
            this.accept(val);
          }
        } else {
          if (this.trackIds) {
            var blockParamIndex = void 0;
            if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) {
              blockParamIndex = this.blockParamIndex(val.parts[0]);
            }
            if (blockParamIndex) {
              var blockParamChild = val.parts.slice(1).join(".");
              this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
            } else {
              value = val.original || value;
              if (value.replace) {
                value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
              }
              this.opcode("pushId", val.type, value);
            }
          }
          this.accept(val);
        }
      },
      setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (sexpr.hash) {
          this.accept(sexpr.hash);
        } else {
          this.opcode("emptyHash", omitEmpty);
        }
        return params;
      },
      blockParamIndex: function blockParamIndex(name) {
        for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
          var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
          if (blockParams && param >= 0) {
            return [depth, param];
          }
        }
      }
    };
    function precompile(input, options, env) {
      if (input == null || typeof input !== "string" && input.type !== "Program") {
        throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
      }
      options = options || {};
      if (!("data" in options)) {
        options.data = true;
      }
      if (options.compat) {
        options.useDepths = true;
      }
      var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
      return new env.JavaScriptCompiler().compile(environment, options);
    }
    function compile(input, options, env) {
      if (options === void 0) options = {};
      if (input == null || typeof input !== "string" && input.type !== "Program") {
        throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
      }
      options = _utils.extend({}, options);
      if (!("data" in options)) {
        options.data = true;
      }
      if (options.compat) {
        options.useDepths = true;
      }
      var compiled = void 0;
      function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, void 0, true);
        return env.template(templateSpec);
      }
      function ret(context, execOptions) {
        if (!compiled) {
          compiled = compileInput();
        }
        return compiled.call(this, context, execOptions);
      }
      ret._setup = function(setupOptions) {
        if (!compiled) {
          compiled = compileInput();
        }
        return compiled._setup(setupOptions);
      };
      ret._child = function(i, data, blockParams, depths) {
        if (!compiled) {
          compiled = compileInput();
        }
        return compiled._child(i, data, blockParams, depths);
      };
      return ret;
    }
    function argEquals(a, b) {
      if (a === b) {
        return true;
      }
      if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for (var i = 0; i < a.length; i++) {
          if (!argEquals(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
    }
    function transformLiteralToPath(sexpr) {
      if (!sexpr.path.parts) {
        var literal = sexpr.path;
        sexpr.path = {
          type: "PathExpression",
          data: false,
          depth: 0,
          parts: [literal.original + ""],
          original: literal.original + "",
          loc: literal.loc
        };
      }
    }
  }
});

// node_modules/source-map/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/source-map/lib/base64.js"(exports) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "node_modules/source-map/lib/base64-vlq.js"(exports) {
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// node_modules/source-map/lib/util.js
var require_util = __commonJS({
  "node_modules/source-map/lib/util.js"(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports.isAbsolute(path);
      var parts = path.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp2 = strcmp(mappingA.source, mappingB.source);
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalLine - mappingB.originalLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp2 !== 0 || onlyCompareOriginal) {
        return cmp2;
      }
      cmp2 = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp2 = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp2 !== 0 || onlyCompareGenerated) {
        return cmp2;
      }
      cmp2 = strcmp(mappingA.source, mappingB.source);
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalLine - mappingB.originalLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp2 !== 0) {
        return cmp2;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp2 = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = strcmp(mappingA.source, mappingB.source);
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalLine - mappingB.originalLine;
      if (cmp2 !== 0) {
        return cmp2;
      }
      cmp2 = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp2 !== 0) {
        return cmp2;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  }
});

// node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS({
  "node_modules/source-map/lib/array-set.js"(exports) {
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  }
});

// node_modules/source-map/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "node_modules/source-map/lib/mapping-list.js"(exports) {
    var util = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  }
});

// node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "node_modules/source-map/lib/source-map-generator.js"(exports) {
    var base64VLQ = require_base64_vlq();
    var util = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  }
});

// node_modules/source-map/lib/binary-search.js
var require_binary_search = __commonJS({
  "node_modules/source-map/lib/binary-search.js"(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp2 = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp2 === 0) {
        return mid;
      } else if (cmp2 > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// node_modules/source-map/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "node_modules/source-map/lib/quick-sort.js"(exports) {
    function swap(ary, x, y) {
      var temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
    function randomIntInRange(low, high) {
      return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
      if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for (var j = p; j < r; j++) {
          if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
          }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
      }
    }
    exports.quickSort = function(ary, comparator) {
      doQuickSort(ary, comparator, 0, ary.length - 1);
    };
  }
});

// node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "node_modules/source-map/lib/source-map-consumer.js"(exports) {
    var util = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        binarySearch.LEAST_UPPER_BOUND
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(
        smc._sources.toArray(),
        smc.sourceRoot
      );
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            cachedSegments[str] = segment;
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            originalMappings.push(mapping);
          }
        }
      }
      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;
      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index = this._findSourceIndex(aSource);
      if (index >= 0) {
        return this.sourcesContent[index];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            // The offset fields are 0-based, but we use 1-based indices when
            // encoding/decoding from VLQ.
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(
        needle,
        this._sections,
        function(needle2, section2) {
          var cmp2 = needle2.generatedLine - section2.generatedOffset.generatedLine;
          if (cmp2) {
            return cmp2;
          }
          return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
        }
      );
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// node_modules/source-map/lib/source-node.js
var require_source_node = __commonJS({
  "node_modules/source-map/lib/source-node.js"(exports) {
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null) this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(
            mapping.originalLine,
            mapping.originalColumn,
            source,
            code,
            mapping.name
          ));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports.SourceNode = SourceNode;
  }
});

// node_modules/source-map/source-map.js
var require_source_map = __commonJS({
  "node_modules/source-map/source-map.js"(exports) {
    exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports.SourceNode = require_source_node().SourceNode;
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js
var require_code_gen = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    var SourceNode = void 0;
    try {
      if (typeof define !== "function" || !define.amd) {
        SourceMap = require_source_map();
        SourceNode = SourceMap.SourceNode;
      }
    } catch (err) {
    }
    var SourceMap;
    if (!SourceNode) {
      SourceNode = function(line, column, srcFile, chunks) {
        this.src = "";
        if (chunks) {
          this.add(chunks);
        }
      };
      SourceNode.prototype = {
        add: function add2(chunks) {
          if (_utils.isArray(chunks)) {
            chunks = chunks.join("");
          }
          this.src += chunks;
        },
        prepend: function prepend(chunks) {
          if (_utils.isArray(chunks)) {
            chunks = chunks.join("");
          }
          this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
          return { code: this.toString() };
        },
        toString: function toString() {
          return this.src;
        }
      };
    }
    function castChunk(chunk, codeGen, loc) {
      if (_utils.isArray(chunk)) {
        var ret = [];
        for (var i = 0, len = chunk.length; i < len; i++) {
          ret.push(codeGen.wrap(chunk[i], loc));
        }
        return ret;
      } else if (typeof chunk === "boolean" || typeof chunk === "number") {
        return chunk + "";
      }
      return chunk;
    }
    function CodeGen(srcFile) {
      this.srcFile = srcFile;
      this.source = [];
    }
    CodeGen.prototype = {
      isEmpty: function isEmpty() {
        return !this.source.length;
      },
      prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
      },
      push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
      },
      merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
          source.add(["  ", line, "\n"]);
        });
        return source;
      },
      each: function each(iter) {
        for (var i = 0, len = this.source.length; i < len; i++) {
          iter(this.source[i]);
        }
      },
      empty: function empty() {
        var loc = this.currentLocation || { start: {} };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
      },
      wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        if (chunk instanceof SourceNode) {
          return chunk;
        }
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
      },
      functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"]);
      },
      quotedString: function quotedString(str) {
        return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function objectLiteral(obj) {
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
          var value = castChunk(obj[key], _this);
          if (value !== "undefined") {
            pairs.push([_this.quotedString(key), ":", value]);
          }
        });
        var ret = this.generateList(pairs);
        ret.prepend("{");
        ret.add("}");
        return ret;
      },
      generateList: function generateList(entries) {
        var ret = this.empty();
        for (var i = 0, len = entries.length; i < len; i++) {
          if (i) {
            ret.add(",");
          }
          ret.add(castChunk(entries[i], this));
        }
        return ret;
      },
      generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend("[");
        ret.add("]");
        return ret;
      }
    };
    exports["default"] = CodeGen;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js
var require_javascript_compiler = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _base = require_base();
    var _exception = require_exception();
    var _exception2 = _interopRequireDefault(_exception);
    var _utils = require_utils();
    var _codeGen = require_code_gen();
    var _codeGen2 = _interopRequireDefault(_codeGen);
    function Literal(value) {
      this.value = value;
    }
    function JavaScriptCompiler() {
    }
    JavaScriptCompiler.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function nameLookup(parent, name) {
        return this.internalNameLookup(parent, name);
      },
      depthedLookup: function depthedLookup(name) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(name), ")"];
      },
      compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [revision, versions];
      },
      appendToBuffer: function appendToBuffer(source, location2, explicit) {
        if (!_utils.isArray(source)) {
          source = [source];
        }
        source = this.source.wrap(source, location2);
        if (this.environment.isSimple) {
          return ["return ", source, ";"];
        } else if (explicit) {
          return ["buffer += ", source, ";"];
        } else {
          source.appendToBuffer = true;
          return source;
        }
      },
      initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return ["lookupProperty(", parent, ",", JSON.stringify(name), ")"];
      },
      lookupPropertyFunctionIsUsed: false,
      compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
          decorators: [],
          programs: [],
          environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = { list: [] };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = void 0, firstLoc = void 0, i = void 0, l = void 0;
        for (i = 0, l = opcodes.length; i < l; i++) {
          opcode = opcodes[i];
          this.source.currentLocation = opcode.loc;
          firstLoc = firstLoc || opcode.loc;
          this[opcode.opcode].apply(this, opcode.args);
        }
        this.source.currentLocation = firstLoc;
        this.pushSource("");
        if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
          throw new _exception2["default"]("Compile completed with content left on stack");
        }
        if (!this.decorators.isEmpty()) {
          this.useDecorators = true;
          this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]);
          this.decorators.push("return fn;");
          if (asObject) {
            this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]);
          } else {
            this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
            this.decorators.push("}\n");
            this.decorators = this.decorators.merge();
          }
        } else {
          this.decorators = void 0;
        }
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
          var ret = {
            compiler: this.compilerInfo(),
            main: fn
          };
          if (this.decorators) {
            ret.main_d = this.decorators;
            ret.useDecorators = true;
          }
          var _context = this.context;
          var programs = _context.programs;
          var decorators = _context.decorators;
          for (i = 0, l = programs.length; i < l; i++) {
            if (programs[i]) {
              ret[i] = programs[i];
              if (decorators[i]) {
                ret[i + "_d"] = decorators[i];
                ret.useDecorators = true;
              }
            }
          }
          if (this.environment.usePartial) {
            ret.usePartial = true;
          }
          if (this.options.data) {
            ret.useData = true;
          }
          if (this.useDepths) {
            ret.useDepths = true;
          }
          if (this.useBlockParams) {
            ret.useBlockParams = true;
          }
          if (this.options.compat) {
            ret.compat = true;
          }
          if (!asObject) {
            ret.compiler = JSON.stringify(ret.compiler);
            this.source.currentLocation = { start: { line: 1, column: 0 } };
            ret = this.objectLiteral(ret);
            if (options.srcName) {
              ret = ret.toStringWithSourceMap({ file: options.destName });
              ret.map = ret.map && ret.map.toString();
            } else {
              ret = ret.toString();
            }
          } else {
            ret.compilerOptions = this.options;
          }
          return ret;
        } else {
          return fn;
        }
      },
      preamble: function preamble() {
        this.lastContext = 0;
        this.source = new _codeGen2["default"](this.options.srcName);
        this.decorators = new _codeGen2["default"](this.options.srcName);
      },
      createFunctionContext: function createFunctionContext(asObject) {
        var _this = this;
        var varDeclarations = "";
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) {
          varDeclarations += ", " + locals.join(", ");
        }
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
          var node = _this.aliases[alias];
          if (node.children && node.referenceCount > 1) {
            varDeclarations += ", alias" + ++aliasCount + "=" + alias;
            node.children[0] = "alias" + aliasCount;
          }
        });
        if (this.lookupPropertyFunctionIsUsed) {
          varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
        }
        var params = ["container", "depth0", "helpers", "partials", "data"];
        if (this.useBlockParams || this.useDepths) {
          params.push("blockParams");
        }
        if (this.useDepths) {
          params.push("depths");
        }
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
          params.push(source);
          return Function.apply(this, params);
        } else {
          return this.source.wrap(["function(", params.join(","), ") {\n  ", source, "}"]);
        }
      },
      mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = void 0, sourceSeen = void 0, bufferStart = void 0, bufferEnd = void 0;
        this.source.each(function(line) {
          if (line.appendToBuffer) {
            if (bufferStart) {
              line.prepend("  + ");
            } else {
              bufferStart = line;
            }
            bufferEnd = line;
          } else {
            if (bufferStart) {
              if (!sourceSeen) {
                appendFirst = true;
              } else {
                bufferStart.prepend("buffer += ");
              }
              bufferEnd.add(";");
              bufferStart = bufferEnd = void 0;
            }
            sourceSeen = true;
            if (!isSimple) {
              appendOnly = false;
            }
          }
        });
        if (appendOnly) {
          if (bufferStart) {
            bufferStart.prepend("return ");
            bufferEnd.add(";");
          } else if (!sourceSeen) {
            this.source.push('return "";');
          }
        } else {
          varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
          if (bufferStart) {
            bufferStart.prepend("return buffer + ");
            bufferEnd.add(";");
          } else {
            this.source.push("return buffer;");
          }
        }
        if (varDeclarations) {
          this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
        }
        return this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, "call", params));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function ambiguousBlockValue() {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
        this.setupHelperArgs("", 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource(["if (!", this.lastHelper, ") { ", current, " = ", this.source.functionCall(blockHelperMissing, "call", params), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function appendContent(content) {
        if (this.pendingContent) {
          content = this.pendingContent + content;
        } else {
          this.pendingLocation = this.source.currentLocation;
        }
        this.pendingContent = content;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function append() {
        if (this.isInline()) {
          this.replaceStack(function(current) {
            return [" != null ? ", current, ' : ""'];
          });
          this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
          var local = this.popStack();
          this.pushSource(["if (", local, " != null) { ", this.appendToBuffer(local, void 0, true), " }"]);
          if (this.environment.isSimple) {
            this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
          }
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function getContext(depth) {
        this.lastContext = depth;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) {
          this.push(this.depthedLookup(parts[i++]));
        } else {
          this.pushContext();
        }
        this.resolvePath("context", parts, i, falsy, strict);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push(["blockParams[", blockParamId[0], "][", blockParamId[1], "]"]);
        this.resolvePath("context", parts, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function lookupData(depth, parts, strict) {
        if (!depth) {
          this.pushStackLiteral("data");
        } else {
          this.pushStackLiteral("container.data(data, " + depth + ")");
        }
        this.resolvePath("data", parts, 0, true, strict);
      },
      resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(strictLookup(this.options.strict && strict, this, parts, i, type));
          return;
        }
        var len = parts.length;
        for (; i < len; i++) {
          this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            if (!falsy) {
              return [" != null ? ", lookup, " : ", current];
            } else {
              return [" && ", lookup];
            }
          });
        }
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        if (type !== "SubExpression") {
          if (typeof string === "string") {
            this.pushString(string);
          } else {
            this.pushStackLiteral(string);
          }
        }
      },
      emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) {
          this.push("{}");
        }
        if (this.stringParams) {
          this.push("{}");
          this.push("{}");
        }
        this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
      },
      pushHash: function pushHash() {
        if (this.hash) {
          this.hashes.push(this.hash);
        }
        this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) {
          this.push(this.objectLiteral(hash.ids));
        }
        if (this.stringParams) {
          this.push(this.objectLiteral(hash.contexts));
          this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function pushProgram(guid) {
        if (guid != null) {
          this.pushStackLiteral(this.programExpression(guid));
        } else {
          this.pushStackLiteral(null);
        }
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push(["fn = ", this.decorators.functionCall(foundDecorator, "", ["fn", "props", "container", options]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) {
          possibleFunctionCalls.push(helper.name);
        }
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) {
          possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
        }
        var functionLookupCode = ["(", this.itemsSeparatedBy(possibleFunctionCalls, "||"), ")"];
        var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
        this.push(functionCall);
      },
      itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for (var i = 1; i < items.length; i++) {
          result.push(separator, items[i]);
        }
        return result;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, "call", helper.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister("helper");
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        var lookup = ["(", "(helper = ", helperName, " || ", nonHelper, ")"];
        if (!this.options.strict) {
          lookup[0] = "(helper = ";
          lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
        }
        this.push(["(", lookup, helper.paramsInit ? ["),(", helper.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", helper.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
          name = this.popStack();
          delete options.name;
        }
        if (indent) {
          options.indent = JSON.stringify(indent);
        }
        options.helpers = "helpers";
        options.partials = "partials";
        options.decorators = "container.decorators";
        if (!isDynamic) {
          params.unshift(this.nameLookup("partials", name, "partial"));
        } else {
          params.unshift(name);
        }
        if (this.options.compat) {
          options.depths = "depths";
        }
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall("container.invokePartial", "", params));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = void 0, type = void 0, id = void 0;
        if (this.trackIds) {
          id = this.popStack();
        }
        if (this.stringParams) {
          type = this.popStack();
          context = this.popStack();
        }
        var hash = this.hash;
        if (context) {
          hash.contexts[key] = context;
        }
        if (type) {
          hash.types[key] = type;
        }
        if (id) {
          hash.ids[key] = id;
        }
        hash.values[key] = value;
      },
      pushId: function pushId(type, name, child) {
        if (type === "BlockParam") {
          this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
        } else if (type === "PathExpression") {
          this.pushString(name);
        } else if (type === "SubExpression") {
          this.pushStackLiteral("true");
        } else {
          this.pushStackLiteral("null");
        }
      },
      // HELPERS
      compiler: JavaScriptCompiler,
      compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = void 0, compiler = void 0;
        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];
          compiler = new this.compiler();
          var existing = this.matchExistingProgram(child);
          if (existing == null) {
            this.context.programs.push("");
            var index = this.context.programs.length;
            child.index = index;
            child.name = "program" + index;
            this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
            this.context.decorators[index] = compiler.decorators;
            this.context.environments[index] = child;
            this.useDepths = this.useDepths || compiler.useDepths;
            this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
            child.useDepths = this.useDepths;
            child.useBlockParams = this.useBlockParams;
          } else {
            child.index = existing.index;
            child.name = "program" + existing.index;
            this.useDepths = this.useDepths || existing.useDepths;
            this.useBlockParams = this.useBlockParams || existing.useBlockParams;
          }
        }
      },
      matchExistingProgram: function matchExistingProgram(child) {
        for (var i = 0, len = this.context.environments.length; i < len; i++) {
          var environment = this.context.environments[i];
          if (environment && environment.equals(child)) {
            return environment;
          }
        }
      },
      programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [child.index, "data", child.blockParams];
        if (this.useBlockParams || this.useDepths) {
          programParams.push("blockParams");
        }
        if (this.useDepths) {
          programParams.push("depths");
        }
        return "container.program(" + programParams.join(", ") + ")";
      },
      useRegister: function useRegister(name) {
        if (!this.registers[name]) {
          this.registers[name] = true;
          this.registers.list.push(name);
        }
      },
      push: function push(expr) {
        if (!(expr instanceof Literal)) {
          expr = this.source.wrap(expr);
        }
        this.inlineStack.push(expr);
        return expr;
      },
      pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
      },
      pushSource: function pushSource(source) {
        if (this.pendingContent) {
          this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
          this.pendingContent = void 0;
        }
        if (source) {
          this.source.push(source);
        }
      },
      replaceStack: function replaceStack(callback) {
        var prefix = ["("], stack = void 0, createdStack = void 0, usedLiteral = void 0;
        if (!this.isInline()) {
          throw new _exception2["default"]("replaceStack on non-inline");
        }
        var top = this.popStack(true);
        if (top instanceof Literal) {
          stack = [top.value];
          prefix = ["(", stack];
          usedLiteral = true;
        } else {
          createdStack = true;
          var _name = this.incrStack();
          prefix = ["((", this.push(_name), " = ", top, ")"];
          stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push(prefix.concat(item, ")"));
      },
      incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) {
          this.stackVars.push("stack" + this.stackSlot);
        }
        return this.topStackName();
      },
      topStackName: function topStackName() {
        return "stack" + this.stackSlot;
      },
      flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            var stack = this.incrStack();
            this.pushSource([stack, " = ", entry, ";"]);
            this.compileStack.push(stack);
          }
        }
      },
      isInline: function isInline() {
        return this.inlineStack.length;
      },
      popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) {
          return item.value;
        } else {
          if (!inline) {
            if (!this.stackSlot) {
              throw new _exception2["default"]("Invalid stack pop");
            }
            this.stackSlot--;
          }
          return item;
        }
      },
      topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        if (item instanceof Literal) {
          return item.value;
        } else {
          return item;
        }
      },
      contextName: function contextName(context) {
        if (this.useDepths && context) {
          return "depths[" + context + "]";
        } else {
          return "depth" + context;
        }
      },
      quotedString: function quotedString(str) {
        return this.source.quotedString(str);
      },
      objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
      },
      aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
          ret.referenceCount++;
          return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
      },
      setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params,
          paramsInit,
          name: foundHelper,
          callParams: [callContext].concat(params)
        };
      },
      setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = void 0;
        if (objectArgs) {
          params = [];
        }
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) {
          options.hashIds = this.popStack();
        }
        if (this.stringParams) {
          options.hashTypes = this.popStack();
          options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        if (program || inverse) {
          options.fn = program || "container.noop";
          options.inverse = inverse || "container.noop";
        }
        var i = paramSize;
        while (i--) {
          param = this.popStack();
          params[i] = param;
          if (this.trackIds) {
            ids[i] = this.popStack();
          }
          if (this.stringParams) {
            types[i] = this.popStack();
            contexts[i] = this.popStack();
          }
        }
        if (objectArgs) {
          options.args = this.source.generateArray(params);
        }
        if (this.trackIds) {
          options.ids = this.source.generateArray(ids);
        }
        if (this.stringParams) {
          options.types = this.source.generateArray(types);
          options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) {
          options.data = "data";
        }
        if (this.useBlockParams) {
          options.blockParams = "blockParams";
        }
        return options;
      },
      setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
          this.useRegister("options");
          params.push("options");
          return ["options=", options];
        } else if (params) {
          params.push(options);
          return "";
        } else {
          return options;
        }
      }
    };
    (function() {
      var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
      var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
      for (var i = 0, l = reservedWords.length; i < l; i++) {
        compilerWords[reservedWords[i]] = true;
      }
    })();
    JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
      return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
    };
    function strictLookup(requireTerminal, compiler, parts, i, type) {
      var stack = compiler.popStack(), len = parts.length;
      if (requireTerminal) {
        len--;
      }
      for (; i < len; i++) {
        stack = compiler.nameLookup(stack, parts[i], type);
      }
      if (requireTerminal) {
        return [compiler.aliasable("container.strict"), "(", stack, ", ", compiler.quotedString(parts[i]), ", ", JSON.stringify(compiler.source.currentLocation), " )"];
      } else {
        return stack;
      }
    }
    exports["default"] = JavaScriptCompiler;
    module.exports = exports["default"];
  }
});

// node_modules/handlebars/dist/cjs/handlebars.js
var require_handlebars = __commonJS({
  "node_modules/handlebars/dist/cjs/handlebars.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _handlebarsRuntime = require_handlebars_runtime();
    var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
    var _handlebarsCompilerAst = require_ast();
    var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
    var _handlebarsCompilerBase = require_base2();
    var _handlebarsCompilerCompiler = require_compiler();
    var _handlebarsCompilerJavascriptCompiler = require_javascript_compiler();
    var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
    var _handlebarsCompilerVisitor = require_visitor();
    var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
    var _handlebarsNoConflict = require_no_conflict();
    var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
    var _create = _handlebarsRuntime2["default"].create;
    function create() {
      var hb = _create();
      hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
      };
      hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
      };
      hb.AST = _handlebarsCompilerAst2["default"];
      hb.Compiler = _handlebarsCompilerCompiler.Compiler;
      hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
      hb.Parser = _handlebarsCompilerBase.parser;
      hb.parse = _handlebarsCompilerBase.parse;
      hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
      return hb;
    }
    var inst = create();
    inst.create = create;
    _handlebarsNoConflict2["default"](inst);
    inst.Visitor = _handlebarsCompilerVisitor2["default"];
    inst["default"] = inst;
    exports["default"] = inst;
    module.exports = exports["default"];
  }
});

// node_modules/dexie/import-wrapper.mjs
var import_dexie = __toESM(require_dexie(), 1);
var DexieSymbol = Symbol.for("Dexie");
var Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = import_dexie.default);
if (import_dexie.default.semVer !== Dexie.semVer) {
  throw new Error(`Two different versions of Dexie loaded in the same app: ${import_dexie.default.semVer} and ${Dexie.semVer}`);
}
var {
  liveQuery,
  mergeRanges,
  rangesOverlap,
  RangeSet,
  cmp,
  Entity,
  PropModification,
  replacePrefix,
  add,
  remove,
  DexieYProvider
} = Dexie;
var import_wrapper_default = Dexie;

// src/config_generator/appstore.ts
var import_handlebars = __toESM(require_handlebars(), 1);

// src/config_generator/manifest.ts
var manifest = {
  "apps": [
    "templates/apps/calibre.nix.hbs"
  ],
  "services": [
    "templates/services/tailscale"
  ],
  "volumes": [
    "templates/volumes/config"
  ]
};

// src/config_generator/appstore.ts
var App = class {
  constructor(name, handlebars_config, installed, services, volumes, fields, id) {
    this.name = name;
    this.handlebars_config = handlebars_config;
    this.installed = installed;
    this.services = services;
    this.volumes = volumes;
    this.fields = fields;
    if (id) this.id = id;
  }
};
var Service = class {
  constructor(name, core_config, template_config, fields, id) {
    this.name = name;
    this.core_config = core_config;
    this.template_config = template_config;
    this.fields = fields;
    if (id) this.id = id;
  }
};
var Volume = class {
  constructor(name, core_config, template_config, fields, id) {
    this.name = name;
    this.core_config = core_config;
    this.template_config = template_config;
    this.fields = fields;
    if (id) this.id = id;
  }
};
var HomelabDb = class extends import_wrapper_default {
  constructor() {
    super("HomelabDb_v2");
    this.version(1).stores({
      apps: "++id, &name, installed",
      services: "++id, &name",
      volumes: "++id, &name"
    });
    this.apps.mapToClass(App);
    this.services.mapToClass(Service);
    this.volumes.mapToClass(Volume);
  }
};
var db = new HomelabDb();
var AppStore = class _AppStore {
  constructor() {
    this.isInitializing = false;
  }
  static getInstance() {
    if (!_AppStore.instance) {
      _AppStore.instance = new _AppStore();
    }
    return _AppStore.instance;
  }
  async init() {
    await db.delete();
    await db.open();
    if (this.isInitializing) {
      console.log("Initialization already in progress.");
      return;
    }
    this.isInitializing = true;
    try {
      const appCount = await db.apps.count();
      if (appCount === 0) {
        console.log("Database apps is empty. Populating...");
        for (const appPath of manifest.apps) {
          const appName = appPath.split("/").pop()?.replace(".nix.hbs", "") || "unknown";
          const config = await (await fetch(`/${appPath}`)).text();
          await this.addApp(appName, config);
        }
      }
      const serviceCount = await db.services.count();
      if (serviceCount === 0) {
        console.log("Database services is empty. Populating...");
        for (const serviceDirPath of manifest.services) {
          const serviceName = serviceDirPath.split("/").pop() || "unknown";
          const coreConfig = await (await fetch(`/${serviceDirPath}/core.nix.hbs`)).text();
          const templateConfig = await (await fetch(`/${serviceDirPath}/template.nix.hbs`)).text();
          await this.addService(serviceName, coreConfig, templateConfig);
        }
      }
      const volumeCount = await db.volumes.count();
      if (volumeCount === 0) {
        console.log("Database volumes is empty. Populating...");
        for (const volumeDirPath of manifest.volumes) {
          const volumeName = volumeDirPath.split("/").pop() || "unknown";
          const coreConfig = await (await fetch(`/${volumeDirPath}/core.nix.hbs`)).text();
          const templateConfig = await (await fetch(`/${volumeDirPath}/template.nix.hbs`)).text();
          await this.addVolume(volumeName, coreConfig, templateConfig);
        }
      }
    } finally {
      this.isInitializing = false;
    }
  }
  async addApp(name, handlebars_config) {
    const app = new App(
      name,
      handlebars_config,
      0,
      [],
      [],
      {}
    );
    await db.apps.add(app);
  }
  async addService(name, core_config, template_config) {
    const service = new Service(
      name,
      core_config,
      template_config,
      {}
    );
    await db.services.add(service);
  }
  async addVolume(name, core_config, template_config) {
    const volume = new Volume(
      name,
      core_config,
      template_config,
      {}
    );
    await db.volumes.add(volume);
  }
  async removeApp(name) {
    const app = await db.apps.get({ name });
    if (app && app.id) {
      await db.apps.delete(app.id);
    }
  }
  async removeService(name) {
    const service = await db.services.get({ name });
    if (service && service.id) {
      await db.services.delete(service.id);
    }
  }
  async removeVolume(name) {
    const volume = await db.volumes.get({ name });
    if (volume && volume.id) {
      await db.volumes.delete(volume.id);
    }
  }
  // Set installed status for an app
  async setAppInstalled(appName, installed) {
    const app = await db.apps.get({ name: appName });
    if (app) {
      app.installed = installed ? 1 : 0;
      await db.apps.put(app);
    }
  }
  // Add a service to an app
  async addServiceToApp(appName, serviceName) {
    const app = await db.apps.get({ name: appName });
    const service = await db.services.get({ name: serviceName });
    if (app && service) {
      app.services.push(service);
      await db.apps.put(app);
    }
  }
  // Remove a service from an app
  async removeServiceFromApp(appName, serviceName) {
    const app = await db.apps.get({ name: appName });
    if (app) {
      app.services = app.services.filter((s) => s.name !== serviceName);
      await db.apps.put(app);
    }
  }
  // Add a volume to an app
  async addVolumeToApp(appName, volumeName) {
    const app = await db.apps.get({ name: appName });
    const volume = await db.volumes.get({ name: volumeName });
    if (app && volume) {
      app.volumes.push(volume);
      await db.apps.put(app);
    }
  }
  // Remove a volume from an app
  async removeVolumeFromApp(appName, volumeName) {
    const app = await db.apps.get({ name: appName });
    if (app) {
      app.volumes = app.volumes.filter((v) => v.name !== volumeName);
      await db.apps.put(app);
    }
  }
  // Set fields for a service
  async setServiceFields(serviceName, fields) {
    const service = await db.services.get({ name: serviceName });
    if (service) {
      service.fields = { ...service.fields, ...fields };
      await db.services.put(service);
    }
  }
  // Set fields for a volume
  async setVolumeFields(volumeName, fields) {
    const volume = await db.volumes.get({ name: volumeName });
    if (volume) {
      volume.fields = { ...volume.fields, ...fields };
      await db.volumes.put(volume);
    }
  }
  async getApp(name) {
    return await db.apps.get({ name });
  }
  async getService(name) {
    return await db.services.get({ name });
  }
  async getVolume(name) {
    return await db.volumes.get({ name });
  }
  async generateConfig() {
    const installedApps = await db.apps.where("installed").equals(1).toArray();
    const coreTemplate = await (await fetch("/templates/core/config.nix.hbs")).text();
    let appsConfig = "";
    let globalServicesConfig = "";
    for (const app of installedApps) {
      let servicesConfig = "";
      if (app.services) {
        for (const service of app.services) {
          const serviceTemplate = import_handlebars.default.compile(service.template_config);
          servicesConfig += serviceTemplate({ app: { name: app.name, port: 8080 }, fields: service.fields });
        }
      }
      let volumesConfig = "";
      if (app.volumes) {
        for (const volume of app.volumes) {
          const volumeTemplate = import_handlebars.default.compile(volume.template_config);
          volumesConfig += volumeTemplate({ app: { name: app.name }, fields: volume.fields });
        }
      }
      const appTemplate = import_handlebars.default.compile(app.handlebars_config);
      appsConfig += appTemplate({ app, services: servicesConfig, volumes: volumesConfig });
    }
    const allServices = await db.services.toArray();
    for (const service of allServices) {
      if (service.core_config && service.core_config.trim() !== "") {
        const serviceTemplate = import_handlebars.default.compile(service.core_config);
        globalServicesConfig += serviceTemplate({ fields: service.fields });
      }
    }
    const finalTemplate = import_handlebars.default.compile(coreTemplate);
    return finalTemplate({ apps: appsConfig, globalservices: globalServicesConfig });
  }
};
export {
  App,
  AppStore,
  HomelabDb,
  Service,
  Volume,
  db
};
//# sourceMappingURL=appstore.js.map
