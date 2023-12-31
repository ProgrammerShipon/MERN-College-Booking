function vv(t, e) {
	for (var n = 0; n < e.length; n++) {
		const r = e[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in t)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							t,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function wv(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
		? t.default
		: t;
}
var dp = { exports: {} },
	Ia = {},
	fp = { exports: {} },
	se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lo = Symbol.for("react.element"),
	Ev = Symbol.for("react.portal"),
	Sv = Symbol.for("react.fragment"),
	xv = Symbol.for("react.strict_mode"),
	_v = Symbol.for("react.profiler"),
	bv = Symbol.for("react.provider"),
	Cv = Symbol.for("react.context"),
	kv = Symbol.for("react.forward_ref"),
	Rv = Symbol.for("react.suspense"),
	Pv = Symbol.for("react.memo"),
	Tv = Symbol.for("react.lazy"),
	zd = Symbol.iterator;
function Ov(t) {
	return t === null || typeof t != "object"
		? null
		: ((t = (zd && t[zd]) || t["@@iterator"]),
		  typeof t == "function" ? t : null);
}
var hp = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	pp = Object.assign,
	mp = {};
function Ei(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = mp),
		(this.updater = n || hp);
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function (t, e) {
	if (typeof t != "object" && typeof t != "function" && t != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, t, e, "setState");
};
Ei.prototype.forceUpdate = function (t) {
	this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function yp() {}
yp.prototype = Ei.prototype;
function vc(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = mp),
		(this.updater = n || hp);
}
var wc = (vc.prototype = new yp());
wc.constructor = vc;
pp(wc, Ei.prototype);
wc.isPureReactComponent = !0;
var Bd = Array.isArray,
	gp = Object.prototype.hasOwnProperty,
	Ec = { current: null },
	vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wp(t, e, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (e != null)
		for (r in (e.ref !== void 0 && (s = e.ref),
		e.key !== void 0 && (o = "" + e.key),
		e))
			gp.call(e, r) && !vp.hasOwnProperty(r) && (i[r] = e[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		i.children = l;
	}
	if (t && t.defaultProps)
		for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: Lo,
		type: t,
		key: o,
		ref: s,
		props: i,
		_owner: Ec.current,
	};
}
function Iv(t, e) {
	return {
		$$typeof: Lo,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner,
	};
}
function Sc(t) {
	return typeof t == "object" && t !== null && t.$$typeof === Lo;
}
function Nv(t) {
	var e = { "=": "=0", ":": "=2" };
	return (
		"$" +
		t.replace(/[=:]/g, function (n) {
			return e[n];
		})
	);
}
var $d = /\/+/g;
function pl(t, e) {
	return typeof t == "object" && t !== null && t.key != null
		? Nv("" + t.key)
		: e.toString(36);
}
function _s(t, e, n, r, i) {
	var o = typeof t;
	(o === "undefined" || o === "boolean") && (t = null);
	var s = !1;
	if (t === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (t.$$typeof) {
					case Lo:
					case Ev:
						s = !0;
				}
		}
	if (s)
		return (
			(s = t),
			(i = i(s)),
			(t = r === "" ? "." + pl(s, 0) : r),
			Bd(i)
				? ((n = ""),
				  t != null && (n = t.replace($d, "$&/") + "/"),
				  _s(i, e, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (Sc(i) &&
						(i = Iv(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace($d, "$&/") + "/") +
								t
						)),
				  e.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), Bd(t)))
		for (var a = 0; a < t.length; a++) {
			o = t[a];
			var l = r + pl(o, a);
			s += _s(o, e, n, l, i);
		}
	else if (((l = Ov(t)), typeof l == "function"))
		for (t = l.call(t), a = 0; !(o = t.next()).done; )
			(o = o.value), (l = r + pl(o, a++)), (s += _s(o, e, n, l, i));
	else if (o === "object")
		throw (
			((e = String(t)),
			Error(
				"Objects are not valid as a React child (found: " +
					(e === "[object Object]"
						? "object with keys {" + Object.keys(t).join(", ") + "}"
						: e) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return s;
}
function rs(t, e, n) {
	if (t == null) return t;
	var r = [],
		i = 0;
	return (
		_s(t, r, "", "", function (o) {
			return e.call(n, o, i++);
		}),
		r
	);
}
function Dv(t) {
	if (t._status === -1) {
		var e = t._result;
		(e = e()),
			e.then(
				function (n) {
					(t._status === 0 || t._status === -1) &&
						((t._status = 1), (t._result = n));
				},
				function (n) {
					(t._status === 0 || t._status === -1) &&
						((t._status = 2), (t._result = n));
				}
			),
			t._status === -1 && ((t._status = 0), (t._result = e));
	}
	if (t._status === 1) return t._result.default;
	throw t._result;
}
var rt = { current: null },
	bs = { transition: null },
	jv = {
		ReactCurrentDispatcher: rt,
		ReactCurrentBatchConfig: bs,
		ReactCurrentOwner: Ec,
	};
se.Children = {
	map: rs,
	forEach: function (t, e, n) {
		rs(
			t,
			function () {
				e.apply(this, arguments);
			},
			n
		);
	},
	count: function (t) {
		var e = 0;
		return (
			rs(t, function () {
				e++;
			}),
			e
		);
	},
	toArray: function (t) {
		return (
			rs(t, function (e) {
				return e;
			}) || []
		);
	},
	only: function (t) {
		if (!Sc(t))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return t;
	},
};
se.Component = Ei;
se.Fragment = Sv;
se.Profiler = _v;
se.PureComponent = vc;
se.StrictMode = xv;
se.Suspense = Rv;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv;
se.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				t +
				"."
		);
	var r = pp({}, t.props),
		i = t.key,
		o = t.ref,
		s = t._owner;
	if (e != null) {
		if (
			(e.ref !== void 0 && ((o = e.ref), (s = Ec.current)),
			e.key !== void 0 && (i = "" + e.key),
			t.type && t.type.defaultProps)
		)
			var a = t.type.defaultProps;
		for (l in e)
			gp.call(e, l) &&
				!vp.hasOwnProperty(l) &&
				(r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: Lo, type: t.type, key: i, ref: o, props: r, _owner: s };
};
se.createContext = function (t) {
	return (
		(t = {
			$$typeof: Cv,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(t.Provider = { $$typeof: bv, _context: t }),
		(t.Consumer = t)
	);
};
se.createElement = wp;
se.createFactory = function (t) {
	var e = wp.bind(null, t);
	return (e.type = t), e;
};
se.createRef = function () {
	return { current: null };
};
se.forwardRef = function (t) {
	return { $$typeof: kv, render: t };
};
se.isValidElement = Sc;
se.lazy = function (t) {
	return { $$typeof: Tv, _payload: { _status: -1, _result: t }, _init: Dv };
};
se.memo = function (t, e) {
	return { $$typeof: Pv, type: t, compare: e === void 0 ? null : e };
};
se.startTransition = function (t) {
	var e = bs.transition;
	bs.transition = {};
	try {
		t();
	} finally {
		bs.transition = e;
	}
};
se.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
se.useCallback = function (t, e) {
	return rt.current.useCallback(t, e);
};
se.useContext = function (t) {
	return rt.current.useContext(t);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (t) {
	return rt.current.useDeferredValue(t);
};
se.useEffect = function (t, e) {
	return rt.current.useEffect(t, e);
};
se.useId = function () {
	return rt.current.useId();
};
se.useImperativeHandle = function (t, e, n) {
	return rt.current.useImperativeHandle(t, e, n);
};
se.useInsertionEffect = function (t, e) {
	return rt.current.useInsertionEffect(t, e);
};
se.useLayoutEffect = function (t, e) {
	return rt.current.useLayoutEffect(t, e);
};
se.useMemo = function (t, e) {
	return rt.current.useMemo(t, e);
};
se.useReducer = function (t, e, n) {
	return rt.current.useReducer(t, e, n);
};
se.useRef = function (t) {
	return rt.current.useRef(t);
};
se.useState = function (t) {
	return rt.current.useState(t);
};
se.useSyncExternalStore = function (t, e, n) {
	return rt.current.useSyncExternalStore(t, e, n);
};
se.useTransition = function () {
	return rt.current.useTransition();
};
se.version = "18.2.0";
fp.exports = se;
var O = fp.exports;
const un = wv(O),
	Lv = vv({ __proto__: null, default: un }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Av = O,
	Mv = Symbol.for("react.element"),
	Fv = Symbol.for("react.fragment"),
	Uv = Object.prototype.hasOwnProperty,
	zv = Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Bv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(t, e, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		e.key !== void 0 && (o = "" + e.key),
		e.ref !== void 0 && (s = e.ref);
	for (r in e) Uv.call(e, r) && !Bv.hasOwnProperty(r) && (i[r] = e[r]);
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
	return {
		$$typeof: Mv,
		type: t,
		key: o,
		ref: s,
		props: i,
		_owner: zv.current,
	};
}
Ia.Fragment = Fv;
Ia.jsx = Ep;
Ia.jsxs = Ep;
dp.exports = Ia;
var h = dp.exports,
	tu = {},
	Sp = { exports: {} },
	yt = {},
	xp = { exports: {} },
	_p = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
	function e(F, Q) {
		var q = F.length;
		F.push(Q);
		e: for (; 0 < q; ) {
			var ne = (q - 1) >>> 1,
				re = F[ne];
			if (0 < i(re, Q)) (F[ne] = Q), (F[q] = re), (q = ne);
			else break e;
		}
	}
	function n(F) {
		return F.length === 0 ? null : F[0];
	}
	function r(F) {
		if (F.length === 0) return null;
		var Q = F[0],
			q = F.pop();
		if (q !== Q) {
			F[0] = q;
			e: for (var ne = 0, re = F.length, Ee = re >>> 1; ne < Ee; ) {
				var J = 2 * (ne + 1) - 1,
					ye = F[J],
					Qe = J + 1,
					Ot = F[Qe];
				if (0 > i(ye, q))
					Qe < re && 0 > i(Ot, ye)
						? ((F[ne] = Ot), (F[Qe] = q), (ne = Qe))
						: ((F[ne] = ye), (F[J] = q), (ne = J));
				else if (Qe < re && 0 > i(Ot, q)) (F[ne] = Ot), (F[Qe] = q), (ne = Qe);
				else break e;
			}
		}
		return Q;
	}
	function i(F, Q) {
		var q = F.sortIndex - Q.sortIndex;
		return q !== 0 ? q : F.id - Q.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		t.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			a = s.now();
		t.unstable_now = function () {
			return s.now() - a;
		};
	}
	var l = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		S = !1,
		E = !1,
		x = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		y = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function w(F) {
		for (var Q = n(u); Q !== null; ) {
			if (Q.callback === null) r(u);
			else if (Q.startTime <= F)
				r(u), (Q.sortIndex = Q.expirationTime), e(l, Q);
			else break;
			Q = n(u);
		}
	}
	function g(F) {
		if (((x = !1), w(F), !E))
			if (n(l) !== null) (E = !0), de(k);
			else {
				var Q = n(u);
				Q !== null && Ce(g, Q.startTime - F);
			}
	}
	function k(F, Q) {
		(E = !1), x && ((x = !1), y(R), (R = -1)), (S = !0);
		var q = f;
		try {
			for (
				w(Q), d = n(l);
				d !== null && (!(d.expirationTime > Q) || (F && !Z()));

			) {
				var ne = d.callback;
				if (typeof ne == "function") {
					(d.callback = null), (f = d.priorityLevel);
					var re = ne(d.expirationTime <= Q);
					(Q = t.unstable_now()),
						typeof re == "function" ? (d.callback = re) : d === n(l) && r(l),
						w(Q);
				} else r(l);
				d = n(l);
			}
			if (d !== null) var Ee = !0;
			else {
				var J = n(u);
				J !== null && Ce(g, J.startTime - Q), (Ee = !1);
			}
			return Ee;
		} finally {
			(d = null), (f = q), (S = !1);
		}
	}
	var P = !1,
		T = null,
		R = -1,
		B = 5,
		H = -1;
	function Z() {
		return !(t.unstable_now() - H < B);
	}
	function K() {
		if (T !== null) {
			var F = t.unstable_now();
			H = F;
			var Q = !0;
			try {
				Q = T(!0, F);
			} finally {
				Q ? pe() : ((P = !1), (T = null));
			}
		} else P = !1;
	}
	var pe;
	if (typeof p == "function")
		pe = function () {
			p(K);
		};
	else if (typeof MessageChannel < "u") {
		var we = new MessageChannel(),
			Te = we.port2;
		(we.port1.onmessage = K),
			(pe = function () {
				Te.postMessage(null);
			});
	} else
		pe = function () {
			C(K, 0);
		};
	function de(F) {
		(T = F), P || ((P = !0), pe());
	}
	function Ce(F, Q) {
		R = C(function () {
			F(t.unstable_now());
		}, Q);
	}
	(t.unstable_IdlePriority = 5),
		(t.unstable_ImmediatePriority = 1),
		(t.unstable_LowPriority = 4),
		(t.unstable_NormalPriority = 3),
		(t.unstable_Profiling = null),
		(t.unstable_UserBlockingPriority = 2),
		(t.unstable_cancelCallback = function (F) {
			F.callback = null;
		}),
		(t.unstable_continueExecution = function () {
			E || S || ((E = !0), de(k));
		}),
		(t.unstable_forceFrameRate = function (F) {
			0 > F || 125 < F
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (B = 0 < F ? Math.floor(1e3 / F) : 5);
		}),
		(t.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(t.unstable_getFirstCallbackNode = function () {
			return n(l);
		}),
		(t.unstable_next = function (F) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var Q = 3;
					break;
				default:
					Q = f;
			}
			var q = f;
			f = Q;
			try {
				return F();
			} finally {
				f = q;
			}
		}),
		(t.unstable_pauseExecution = function () {}),
		(t.unstable_requestPaint = function () {}),
		(t.unstable_runWithPriority = function (F, Q) {
			switch (F) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					F = 3;
			}
			var q = f;
			f = F;
			try {
				return Q();
			} finally {
				f = q;
			}
		}),
		(t.unstable_scheduleCallback = function (F, Q, q) {
			var ne = t.unstable_now();
			switch (
				(typeof q == "object" && q !== null
					? ((q = q.delay), (q = typeof q == "number" && 0 < q ? ne + q : ne))
					: (q = ne),
				F)
			) {
				case 1:
					var re = -1;
					break;
				case 2:
					re = 250;
					break;
				case 5:
					re = 1073741823;
					break;
				case 4:
					re = 1e4;
					break;
				default:
					re = 5e3;
			}
			return (
				(re = q + re),
				(F = {
					id: c++,
					callback: Q,
					priorityLevel: F,
					startTime: q,
					expirationTime: re,
					sortIndex: -1,
				}),
				q > ne
					? ((F.sortIndex = q),
					  e(u, F),
					  n(l) === null &&
							F === n(u) &&
							(x ? (y(R), (R = -1)) : (x = !0), Ce(g, q - ne)))
					: ((F.sortIndex = re), e(l, F), E || S || ((E = !0), de(k))),
				F
			);
		}),
		(t.unstable_shouldYield = Z),
		(t.unstable_wrapCallback = function (F) {
			var Q = f;
			return function () {
				var q = f;
				f = Q;
				try {
					return F.apply(this, arguments);
				} finally {
					f = q;
				}
			};
		});
})(_p);
xp.exports = _p;
var $v = xp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp = O,
	mt = $v;
function A(t) {
	for (
		var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
		n < arguments.length;
		n++
	)
		e += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		t +
		"; visit " +
		e +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Cp = new Set(),
	uo = {};
function br(t, e) {
	si(t, e), si(t + "Capture", e);
}
function si(t, e) {
	for (uo[t] = e, t = 0; t < e.length; t++) Cp.add(e[t]);
}
var hn = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	nu = Object.prototype.hasOwnProperty,
	Hv =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Hd = {},
	Vd = {};
function Vv(t) {
	return nu.call(Vd, t)
		? !0
		: nu.call(Hd, t)
		? !1
		: Hv.test(t)
		? (Vd[t] = !0)
		: ((Hd[t] = !0), !1);
}
function Wv(t, e, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof e) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
		default:
			return !1;
	}
}
function qv(t, e, n, r) {
	if (e === null || typeof e > "u" || Wv(t, e, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !e;
			case 4:
				return e === !1;
			case 5:
				return isNaN(e);
			case 6:
				return isNaN(e) || 1 > e;
		}
	return !1;
}
function it(t, e, n, r, i, o, s) {
	(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = t),
		(this.type = e),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (t) {
		qe[t] = new it(t, 0, !1, t, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (t) {
	var e = t[0];
	qe[e] = new it(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
	qe[t] = new it(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (t) {
	qe[t] = new it(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (t) {
		qe[t] = new it(t, 3, !1, t.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (t) {
	qe[t] = new it(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
	qe[t] = new it(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
	qe[t] = new it(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
	qe[t] = new it(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var xc = /[\-:]([a-z])/g;
function _c(t) {
	return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (t) {
		var e = t.replace(xc, _c);
		qe[e] = new it(e, 1, !1, t, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (t) {
		var e = t.replace(xc, _c);
		qe[e] = new it(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
	var e = t.replace(xc, _c);
	qe[e] = new it(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
	qe[t] = new it(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new it(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (t) {
	qe[t] = new it(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function bc(t, e, n, r) {
	var i = qe.hasOwnProperty(e) ? qe[e] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < e.length) ||
		  (e[0] !== "o" && e[0] !== "O") ||
		  (e[1] !== "n" && e[1] !== "N")) &&
		(qv(e, n, i, r) && (n = null),
		r || i === null
			? Vv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
			: i.mustUseProperty
			? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((e = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? t.removeAttribute(e)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var wn = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	is = Symbol.for("react.element"),
	Ar = Symbol.for("react.portal"),
	Mr = Symbol.for("react.fragment"),
	Cc = Symbol.for("react.strict_mode"),
	ru = Symbol.for("react.profiler"),
	kp = Symbol.for("react.provider"),
	Rp = Symbol.for("react.context"),
	kc = Symbol.for("react.forward_ref"),
	iu = Symbol.for("react.suspense"),
	ou = Symbol.for("react.suspense_list"),
	Rc = Symbol.for("react.memo"),
	Pn = Symbol.for("react.lazy"),
	Pp = Symbol.for("react.offscreen"),
	Wd = Symbol.iterator;
function Ni(t) {
	return t === null || typeof t != "object"
		? null
		: ((t = (Wd && t[Wd]) || t["@@iterator"]),
		  typeof t == "function" ? t : null);
}
var Pe = Object.assign,
	ml;
function Wi(t) {
	if (ml === void 0)
		try {
			throw Error();
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/);
			ml = (e && e[1]) || "";
		}
	return (
		`
` +
		ml +
		t
	);
}
var yl = !1;
function gl(t, e) {
	if (!t || yl) return "";
	yl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (e)
			if (
				((e = function () {
					throw Error();
				}),
				Object.defineProperty(e.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(e, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(t, [], e);
			} else {
				try {
					e.call();
				} catch (u) {
					r = u;
				}
				t.call(e.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			t();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					a = o.length - 1;
				1 <= s && 0 <= a && i[s] !== o[a];

			)
				a--;
			for (; 1 <= s && 0 <= a; s--, a--)
				if (i[s] !== o[a]) {
					if (s !== 1 || a !== 1)
						do
							if ((s--, a--, 0 > a || i[s] !== o[a])) {
								var l =
									`
` + i[s].replace(" at new ", " at ");
								return (
									t.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace("<anonymous>", t.displayName)),
									l
								);
							}
						while (1 <= s && 0 <= a);
					break;
				}
		}
	} finally {
		(yl = !1), (Error.prepareStackTrace = n);
	}
	return (t = t ? t.displayName || t.name : "") ? Wi(t) : "";
}
function Qv(t) {
	switch (t.tag) {
		case 5:
			return Wi(t.type);
		case 16:
			return Wi("Lazy");
		case 13:
			return Wi("Suspense");
		case 19:
			return Wi("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (t = gl(t.type, !1)), t;
		case 11:
			return (t = gl(t.type.render, !1)), t;
		case 1:
			return (t = gl(t.type, !0)), t;
		default:
			return "";
	}
}
function su(t) {
	if (t == null) return null;
	if (typeof t == "function") return t.displayName || t.name || null;
	if (typeof t == "string") return t;
	switch (t) {
		case Mr:
			return "Fragment";
		case Ar:
			return "Portal";
		case ru:
			return "Profiler";
		case Cc:
			return "StrictMode";
		case iu:
			return "Suspense";
		case ou:
			return "SuspenseList";
	}
	if (typeof t == "object")
		switch (t.$$typeof) {
			case Rp:
				return (t.displayName || "Context") + ".Consumer";
			case kp:
				return (t._context.displayName || "Context") + ".Provider";
			case kc:
				var e = t.render;
				return (
					(t = t.displayName),
					t ||
						((t = e.displayName || e.name || ""),
						(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
					t
				);
			case Rc:
				return (
					(e = t.displayName || null), e !== null ? e : su(t.type) || "Memo"
				);
			case Pn:
				(e = t._payload), (t = t._init);
				try {
					return su(t(e));
				} catch {}
		}
	return null;
}
function Kv(t) {
	var e = t.type;
	switch (t.tag) {
		case 24:
			return "Cache";
		case 9:
			return (e.displayName || "Context") + ".Consumer";
		case 10:
			return (e._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(t = e.render),
				(t = t.displayName || t.name || ""),
				e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return e;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return su(e);
		case 8:
			return e === Cc ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
	}
	return null;
}
function Gn(t) {
	switch (typeof t) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return t;
		case "object":
			return t;
		default:
			return "";
	}
}
function Tp(t) {
	var e = t.type;
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === "input" &&
		(e === "checkbox" || e === "radio")
	);
}
function Gv(t) {
	var e = Tp(t) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
		r = "" + t[e];
	if (
		!t.hasOwnProperty(e) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(t, e, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(t, e, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(t._valueTracker = null), delete t[e];
				},
			}
		);
	}
}
function os(t) {
	t._valueTracker || (t._valueTracker = Gv(t));
}
function Op(t) {
	if (!t) return !1;
	var e = t._valueTracker;
	if (!e) return !0;
	var n = e.getValue(),
		r = "";
	return (
		t && (r = Tp(t) ? (t.checked ? "true" : "false") : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	);
}
function Qs(t) {
	if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
		return null;
	try {
		return t.activeElement || t.body;
	} catch {
		return t.body;
	}
}
function au(t, e) {
	var n = e.checked;
	return Pe({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? t._wrapperState.initialChecked,
	});
}
function qd(t, e) {
	var n = e.defaultValue == null ? "" : e.defaultValue,
		r = e.checked != null ? e.checked : e.defaultChecked;
	(n = Gn(e.value != null ? e.value : n)),
		(t._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				e.type === "checkbox" || e.type === "radio"
					? e.checked != null
					: e.value != null,
		});
}
function Ip(t, e) {
	(e = e.checked), e != null && bc(t, "checked", e, !1);
}
function lu(t, e) {
	Ip(t, e);
	var n = Gn(e.value),
		r = e.type;
	if (n != null)
		r === "number"
			? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
			: t.value !== "" + n && (t.value = "" + n);
	else if (r === "submit" || r === "reset") {
		t.removeAttribute("value");
		return;
	}
	e.hasOwnProperty("value")
		? uu(t, e.type, n)
		: e.hasOwnProperty("defaultValue") && uu(t, e.type, Gn(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked);
}
function Qd(t, e, n) {
	if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
		var r = e.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(e.value !== void 0 && e.value !== null)
			)
		)
			return;
		(e = "" + t._wrapperState.initialValue),
			n || e === t.value || (t.value = e),
			(t.defaultValue = e);
	}
	(n = t.name),
		n !== "" && (t.name = ""),
		(t.defaultChecked = !!t._wrapperState.initialChecked),
		n !== "" && (t.name = n);
}
function uu(t, e, n) {
	(e !== "number" || Qs(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = "" + t._wrapperState.initialValue)
			: t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var qi = Array.isArray;
function Jr(t, e, n, r) {
	if (((t = t.options), e)) {
		e = {};
		for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
		for (n = 0; n < t.length; n++)
			(i = e.hasOwnProperty("$" + t[n].value)),
				t[n].selected !== i && (t[n].selected = i),
				i && r && (t[n].defaultSelected = !0);
	} else {
		for (n = "" + Gn(n), e = null, i = 0; i < t.length; i++) {
			if (t[i].value === n) {
				(t[i].selected = !0), r && (t[i].defaultSelected = !0);
				return;
			}
			e !== null || t[i].disabled || (e = t[i]);
		}
		e !== null && (e.selected = !0);
	}
}
function cu(t, e) {
	if (e.dangerouslySetInnerHTML != null) throw Error(A(91));
	return Pe({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: "" + t._wrapperState.initialValue,
	});
}
function Kd(t, e) {
	var n = e.value;
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(A(92));
			if (qi(n)) {
				if (1 < n.length) throw Error(A(93));
				n = n[0];
			}
			e = n;
		}
		e == null && (e = ""), (n = e);
	}
	t._wrapperState = { initialValue: Gn(n) };
}
function Np(t, e) {
	var n = Gn(e.value),
		r = Gn(e.defaultValue);
	n != null &&
		((n = "" + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = "" + r);
}
function Gd(t) {
	var e = t.textContent;
	e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Dp(t) {
	switch (t) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function du(t, e) {
	return t == null || t === "http://www.w3.org/1999/xhtml"
		? Dp(e)
		: t === "http://www.w3.org/2000/svg" && e === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: t;
}
var ss,
	jp = (function (t) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (e, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return t(e, n, r, i);
					});
			  }
			: t;
	})(function (t, e) {
		if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
			t.innerHTML = e;
		else {
			for (
				ss = ss || document.createElement("div"),
					ss.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
					e = ss.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild);
			for (; e.firstChild; ) t.appendChild(e.firstChild);
		}
	});
function co(t, e) {
	if (e) {
		var n = t.firstChild;
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e;
			return;
		}
	}
	t.textContent = e;
}
var Xi = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Jv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xi).forEach(function (t) {
	Jv.forEach(function (e) {
		(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Xi[e] = Xi[t]);
	});
});
function Lp(t, e, n) {
	return e == null || typeof e == "boolean" || e === ""
		? ""
		: n || typeof e != "number" || e === 0 || (Xi.hasOwnProperty(t) && Xi[t])
		? ("" + e).trim()
		: e + "px";
}
function Ap(t, e) {
	t = t.style;
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Lp(n, e[n], r);
			n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
		}
}
var Yv = Pe(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function fu(t, e) {
	if (e) {
		if (Yv[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(A(137, t));
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(A(60));
			if (
				typeof e.dangerouslySetInnerHTML != "object" ||
				!("__html" in e.dangerouslySetInnerHTML)
			)
				throw Error(A(61));
		}
		if (e.style != null && typeof e.style != "object") throw Error(A(62));
	}
}
function hu(t, e) {
	if (t.indexOf("-") === -1) return typeof e.is == "string";
	switch (t) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var pu = null;
function Pc(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	);
}
var mu = null,
	Yr = null,
	Xr = null;
function Jd(t) {
	if ((t = Fo(t))) {
		if (typeof mu != "function") throw Error(A(280));
		var e = t.stateNode;
		e && ((e = Aa(e)), mu(t.stateNode, t.type, e));
	}
}
function Mp(t) {
	Yr ? (Xr ? Xr.push(t) : (Xr = [t])) : (Yr = t);
}
function Fp() {
	if (Yr) {
		var t = Yr,
			e = Xr;
		if (((Xr = Yr = null), Jd(t), e)) for (t = 0; t < e.length; t++) Jd(e[t]);
	}
}
function Up(t, e) {
	return t(e);
}
function zp() {}
var vl = !1;
function Bp(t, e, n) {
	if (vl) return t(e, n);
	vl = !0;
	try {
		return Up(t, e, n);
	} finally {
		(vl = !1), (Yr !== null || Xr !== null) && (zp(), Fp());
	}
}
function fo(t, e) {
	var n = t.stateNode;
	if (n === null) return null;
	var r = Aa(n);
	if (r === null) return null;
	n = r[e];
	e: switch (e) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((t = t.type),
				(r = !(
					t === "button" ||
					t === "input" ||
					t === "select" ||
					t === "textarea"
				))),
				(t = !r);
			break e;
		default:
			t = !1;
	}
	if (t) return null;
	if (n && typeof n != "function") throw Error(A(231, e, typeof n));
	return n;
}
var yu = !1;
if (hn)
	try {
		var Di = {};
		Object.defineProperty(Di, "passive", {
			get: function () {
				yu = !0;
			},
		}),
			window.addEventListener("test", Di, Di),
			window.removeEventListener("test", Di, Di);
	} catch {
		yu = !1;
	}
function Xv(t, e, n, r, i, o, s, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		e.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var Zi = !1,
	Ks = null,
	Gs = !1,
	gu = null,
	Zv = {
		onError: function (t) {
			(Zi = !0), (Ks = t);
		},
	};
function e0(t, e, n, r, i, o, s, a, l) {
	(Zi = !1), (Ks = null), Xv.apply(Zv, arguments);
}
function t0(t, e, n, r, i, o, s, a, l) {
	if ((e0.apply(this, arguments), Zi)) {
		if (Zi) {
			var u = Ks;
			(Zi = !1), (Ks = null);
		} else throw Error(A(198));
		Gs || ((Gs = !0), (gu = u));
	}
}
function Cr(t) {
	var e = t,
		n = t;
	if (t.alternate) for (; e.return; ) e = e.return;
	else {
		t = e;
		do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
		while (t);
	}
	return e.tag === 3 ? n : null;
}
function $p(t) {
	if (t.tag === 13) {
		var e = t.memoizedState;
		if (
			(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
			e !== null)
		)
			return e.dehydrated;
	}
	return null;
}
function Yd(t) {
	if (Cr(t) !== t) throw Error(A(188));
}
function n0(t) {
	var e = t.alternate;
	if (!e) {
		if (((e = Cr(t)), e === null)) throw Error(A(188));
		return e !== t ? null : t;
	}
	for (var n = t, r = e; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Yd(i), t;
				if (o === r) return Yd(i), e;
				o = o.sibling;
			}
			throw Error(A(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, a = i.child; a; ) {
				if (a === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (a === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!s) {
				for (a = o.child; a; ) {
					if (a === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (a === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!s) throw Error(A(189));
			}
		}
		if (n.alternate !== r) throw Error(A(190));
	}
	if (n.tag !== 3) throw Error(A(188));
	return n.stateNode.current === n ? t : e;
}
function Hp(t) {
	return (t = n0(t)), t !== null ? Vp(t) : null;
}
function Vp(t) {
	if (t.tag === 5 || t.tag === 6) return t;
	for (t = t.child; t !== null; ) {
		var e = Vp(t);
		if (e !== null) return e;
		t = t.sibling;
	}
	return null;
}
var Wp = mt.unstable_scheduleCallback,
	Xd = mt.unstable_cancelCallback,
	r0 = mt.unstable_shouldYield,
	i0 = mt.unstable_requestPaint,
	Ie = mt.unstable_now,
	o0 = mt.unstable_getCurrentPriorityLevel,
	Tc = mt.unstable_ImmediatePriority,
	qp = mt.unstable_UserBlockingPriority,
	Js = mt.unstable_NormalPriority,
	s0 = mt.unstable_LowPriority,
	Qp = mt.unstable_IdlePriority,
	Na = null,
	Wt = null;
function a0(t) {
	if (Wt && typeof Wt.onCommitFiberRoot == "function")
		try {
			Wt.onCommitFiberRoot(Na, t, void 0, (t.current.flags & 128) === 128);
		} catch {}
}
var Mt = Math.clz32 ? Math.clz32 : c0,
	l0 = Math.log,
	u0 = Math.LN2;
function c0(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((l0(t) / u0) | 0)) | 0;
}
var as = 64,
	ls = 4194304;
function Qi(t) {
	switch (t & -t) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return t & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return t;
	}
}
function Ys(t, e) {
	var n = t.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = t.suspendedLanes,
		o = t.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var a = s & ~i;
		a !== 0 ? (r = Qi(a)) : ((o &= s), o !== 0 && (r = Qi(o)));
	} else (s = n & ~i), s !== 0 ? (r = Qi(s)) : o !== 0 && (r = Qi(o));
	if (r === 0) return 0;
	if (
		e !== 0 &&
		e !== r &&
		!(e & i) &&
		((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return e;
	if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
		for (t = t.entanglements, e &= r; 0 < e; )
			(n = 31 - Mt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
	return r;
}
function d0(t, e) {
	switch (t) {
		case 1:
		case 2:
		case 4:
			return e + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function f0(t, e) {
	for (
		var n = t.suspendedLanes,
			r = t.pingedLanes,
			i = t.expirationTimes,
			o = t.pendingLanes;
		0 < o;

	) {
		var s = 31 - Mt(o),
			a = 1 << s,
			l = i[s];
		l === -1
			? (!(a & n) || a & r) && (i[s] = d0(a, e))
			: l <= e && (t.expiredLanes |= a),
			(o &= ~a);
	}
}
function vu(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	);
}
function Kp() {
	var t = as;
	return (as <<= 1), !(as & 4194240) && (as = 64), t;
}
function wl(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t);
	return e;
}
function Ao(t, e, n) {
	(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - Mt(e)),
		(t[e] = n);
}
function h0(t, e) {
	var n = t.pendingLanes & ~e;
	(t.pendingLanes = e),
		(t.suspendedLanes = 0),
		(t.pingedLanes = 0),
		(t.expiredLanes &= e),
		(t.mutableReadLanes &= e),
		(t.entangledLanes &= e),
		(e = t.entanglements);
	var r = t.eventTimes;
	for (t = t.expirationTimes; 0 < n; ) {
		var i = 31 - Mt(n),
			o = 1 << i;
		(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
	}
}
function Oc(t, e) {
	var n = (t.entangledLanes |= e);
	for (t = t.entanglements; n; ) {
		var r = 31 - Mt(n),
			i = 1 << r;
		(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
	}
}
var ce = 0;
function Gp(t) {
	return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jp,
	Ic,
	Yp,
	Xp,
	Zp,
	wu = !1,
	us = [],
	Fn = null,
	Un = null,
	zn = null,
	ho = new Map(),
	po = new Map(),
	In = [],
	p0 =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Zd(t, e) {
	switch (t) {
		case "focusin":
		case "focusout":
			Fn = null;
			break;
		case "dragenter":
		case "dragleave":
			Un = null;
			break;
		case "mouseover":
		case "mouseout":
			zn = null;
			break;
		case "pointerover":
		case "pointerout":
			ho.delete(e.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			po.delete(e.pointerId);
	}
}
function ji(t, e, n, r, i, o) {
	return t === null || t.nativeEvent !== o
		? ((t = {
				blockedOn: e,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  e !== null && ((e = Fo(e)), e !== null && Ic(e)),
		  t)
		: ((t.eventSystemFlags |= r),
		  (e = t.targetContainers),
		  i !== null && e.indexOf(i) === -1 && e.push(i),
		  t);
}
function m0(t, e, n, r, i) {
	switch (e) {
		case "focusin":
			return (Fn = ji(Fn, t, e, n, r, i)), !0;
		case "dragenter":
			return (Un = ji(Un, t, e, n, r, i)), !0;
		case "mouseover":
			return (zn = ji(zn, t, e, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return ho.set(o, ji(ho.get(o) || null, t, e, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId), po.set(o, ji(po.get(o) || null, t, e, n, r, i)), !0
			);
	}
	return !1;
}
function em(t) {
	var e = sr(t.target);
	if (e !== null) {
		var n = Cr(e);
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = $p(n)), e !== null)) {
					(t.blockedOn = e),
						Zp(t.priority, function () {
							Yp(n);
						});
					return;
				}
			} else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	t.blockedOn = null;
}
function Cs(t) {
	if (t.blockedOn !== null) return !1;
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = Eu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
		if (n === null) {
			n = t.nativeEvent;
			var r = new n.constructor(n.type, n);
			(pu = r), n.target.dispatchEvent(r), (pu = null);
		} else return (e = Fo(n)), e !== null && Ic(e), (t.blockedOn = n), !1;
		e.shift();
	}
	return !0;
}
function ef(t, e, n) {
	Cs(t) && n.delete(e);
}
function y0() {
	(wu = !1),
		Fn !== null && Cs(Fn) && (Fn = null),
		Un !== null && Cs(Un) && (Un = null),
		zn !== null && Cs(zn) && (zn = null),
		ho.forEach(ef),
		po.forEach(ef);
}
function Li(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		wu ||
			((wu = !0),
			mt.unstable_scheduleCallback(mt.unstable_NormalPriority, y0)));
}
function mo(t) {
	function e(i) {
		return Li(i, t);
	}
	if (0 < us.length) {
		Li(us[0], t);
		for (var n = 1; n < us.length; n++) {
			var r = us[n];
			r.blockedOn === t && (r.blockedOn = null);
		}
	}
	for (
		Fn !== null && Li(Fn, t),
			Un !== null && Li(Un, t),
			zn !== null && Li(zn, t),
			ho.forEach(e),
			po.forEach(e),
			n = 0;
		n < In.length;
		n++
	)
		(r = In[n]), r.blockedOn === t && (r.blockedOn = null);
	for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
		em(n), n.blockedOn === null && In.shift();
}
var Zr = wn.ReactCurrentBatchConfig,
	Xs = !0;
function g0(t, e, n, r) {
	var i = ce,
		o = Zr.transition;
	Zr.transition = null;
	try {
		(ce = 1), Nc(t, e, n, r);
	} finally {
		(ce = i), (Zr.transition = o);
	}
}
function v0(t, e, n, r) {
	var i = ce,
		o = Zr.transition;
	Zr.transition = null;
	try {
		(ce = 4), Nc(t, e, n, r);
	} finally {
		(ce = i), (Zr.transition = o);
	}
}
function Nc(t, e, n, r) {
	if (Xs) {
		var i = Eu(t, e, n, r);
		if (i === null) Tl(t, e, r, Zs, n), Zd(t, r);
		else if (m0(i, t, e, n, r)) r.stopPropagation();
		else if ((Zd(t, r), e & 4 && -1 < p0.indexOf(t))) {
			for (; i !== null; ) {
				var o = Fo(i);
				if (
					(o !== null && Jp(o),
					(o = Eu(t, e, n, r)),
					o === null && Tl(t, e, r, Zs, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Tl(t, e, r, null, n);
	}
}
var Zs = null;
function Eu(t, e, n, r) {
	if (((Zs = null), (t = Pc(r)), (t = sr(t)), t !== null))
		if (((e = Cr(t)), e === null)) t = null;
		else if (((n = e.tag), n === 13)) {
			if (((t = $p(e)), t !== null)) return t;
			t = null;
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null;
			t = null;
		} else e !== t && (t = null);
	return (Zs = t), null;
}
function tm(t) {
	switch (t) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (o0()) {
				case Tc:
					return 1;
				case qp:
					return 4;
				case Js:
				case s0:
					return 16;
				case Qp:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var An = null,
	Dc = null,
	ks = null;
function nm() {
	if (ks) return ks;
	var t,
		e = Dc,
		n = e.length,
		r,
		i = "value" in An ? An.value : An.textContent,
		o = i.length;
	for (t = 0; t < n && e[t] === i[t]; t++);
	var s = n - t;
	for (r = 1; r <= s && e[n - r] === i[o - r]; r++);
	return (ks = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Rs(t) {
	var e = t.keyCode;
	return (
		"charCode" in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	);
}
function cs() {
	return !0;
}
function tf() {
	return !1;
}
function gt(t) {
	function e(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var a in t)
			t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? cs
				: tf),
			(this.isPropagationStopped = tf),
			this
		);
	}
	return (
		Pe(e.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = cs));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = cs));
			},
			persist: function () {},
			isPersistent: cs,
		}),
		e
	);
}
var Si = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (t) {
			return t.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	jc = gt(Si),
	Mo = Pe({}, Si, { view: 0, detail: 0 }),
	w0 = gt(Mo),
	El,
	Sl,
	Ai,
	Da = Pe({}, Mo, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Lc,
		button: 0,
		buttons: 0,
		relatedTarget: function (t) {
			return t.relatedTarget === void 0
				? t.fromElement === t.srcElement
					? t.toElement
					: t.fromElement
				: t.relatedTarget;
		},
		movementX: function (t) {
			return "movementX" in t
				? t.movementX
				: (t !== Ai &&
						(Ai && t.type === "mousemove"
							? ((El = t.screenX - Ai.screenX), (Sl = t.screenY - Ai.screenY))
							: (Sl = El = 0),
						(Ai = t)),
				  El);
		},
		movementY: function (t) {
			return "movementY" in t ? t.movementY : Sl;
		},
	}),
	nf = gt(Da),
	E0 = Pe({}, Da, { dataTransfer: 0 }),
	S0 = gt(E0),
	x0 = Pe({}, Mo, { relatedTarget: 0 }),
	xl = gt(x0),
	_0 = Pe({}, Si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	b0 = gt(_0),
	C0 = Pe({}, Si, {
		clipboardData: function (t) {
			return "clipboardData" in t ? t.clipboardData : window.clipboardData;
		},
	}),
	k0 = gt(C0),
	R0 = Pe({}, Si, { data: 0 }),
	rf = gt(R0),
	P0 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	T0 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	O0 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function I0(t) {
	var e = this.nativeEvent;
	return e.getModifierState ? e.getModifierState(t) : (t = O0[t]) ? !!e[t] : !1;
}
function Lc() {
	return I0;
}
var N0 = Pe({}, Mo, {
		key: function (t) {
			if (t.key) {
				var e = P0[t.key] || t.key;
				if (e !== "Unidentified") return e;
			}
			return t.type === "keypress"
				? ((t = Rs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
				: t.type === "keydown" || t.type === "keyup"
				? T0[t.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Lc,
		charCode: function (t) {
			return t.type === "keypress" ? Rs(t) : 0;
		},
		keyCode: function (t) {
			return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
		},
		which: function (t) {
			return t.type === "keypress"
				? Rs(t)
				: t.type === "keydown" || t.type === "keyup"
				? t.keyCode
				: 0;
		},
	}),
	D0 = gt(N0),
	j0 = Pe({}, Da, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	of = gt(j0),
	L0 = Pe({}, Mo, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Lc,
	}),
	A0 = gt(L0),
	M0 = Pe({}, Si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	F0 = gt(M0),
	U0 = Pe({}, Da, {
		deltaX: function (t) {
			return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
		},
		deltaY: function (t) {
			return "deltaY" in t
				? t.deltaY
				: "wheelDeltaY" in t
				? -t.wheelDeltaY
				: "wheelDelta" in t
				? -t.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	z0 = gt(U0),
	B0 = [9, 13, 27, 32],
	Ac = hn && "CompositionEvent" in window,
	eo = null;
hn && "documentMode" in document && (eo = document.documentMode);
var $0 = hn && "TextEvent" in window && !eo,
	rm = hn && (!Ac || (eo && 8 < eo && 11 >= eo)),
	sf = String.fromCharCode(32),
	af = !1;
function im(t, e) {
	switch (t) {
		case "keyup":
			return B0.indexOf(e.keyCode) !== -1;
		case "keydown":
			return e.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function om(t) {
	return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Fr = !1;
function H0(t, e) {
	switch (t) {
		case "compositionend":
			return om(e);
		case "keypress":
			return e.which !== 32 ? null : ((af = !0), sf);
		case "textInput":
			return (t = e.data), t === sf && af ? null : t;
		default:
			return null;
	}
}
function V0(t, e) {
	if (Fr)
		return t === "compositionend" || (!Ac && im(t, e))
			? ((t = nm()), (ks = Dc = An = null), (Fr = !1), t)
			: null;
	switch (t) {
		case "paste":
			return null;
		case "keypress":
			if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
				if (e.char && 1 < e.char.length) return e.char;
				if (e.which) return String.fromCharCode(e.which);
			}
			return null;
		case "compositionend":
			return rm && e.locale !== "ko" ? null : e.data;
		default:
			return null;
	}
}
var W0 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function lf(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return e === "input" ? !!W0[t.type] : e === "textarea";
}
function sm(t, e, n, r) {
	Mp(r),
		(e = ea(e, "onChange")),
		0 < e.length &&
			((n = new jc("onChange", "change", null, n, r)),
			t.push({ event: n, listeners: e }));
}
var to = null,
	yo = null;
function q0(t) {
	gm(t, 0);
}
function ja(t) {
	var e = Br(t);
	if (Op(e)) return t;
}
function Q0(t, e) {
	if (t === "change") return e;
}
var am = !1;
if (hn) {
	var _l;
	if (hn) {
		var bl = "oninput" in document;
		if (!bl) {
			var uf = document.createElement("div");
			uf.setAttribute("oninput", "return;"),
				(bl = typeof uf.oninput == "function");
		}
		_l = bl;
	} else _l = !1;
	am = _l && (!document.documentMode || 9 < document.documentMode);
}
function cf() {
	to && (to.detachEvent("onpropertychange", lm), (yo = to = null));
}
function lm(t) {
	if (t.propertyName === "value" && ja(yo)) {
		var e = [];
		sm(e, yo, t, Pc(t)), Bp(q0, e);
	}
}
function K0(t, e, n) {
	t === "focusin"
		? (cf(), (to = e), (yo = n), to.attachEvent("onpropertychange", lm))
		: t === "focusout" && cf();
}
function G0(t) {
	if (t === "selectionchange" || t === "keyup" || t === "keydown")
		return ja(yo);
}
function J0(t, e) {
	if (t === "click") return ja(e);
}
function Y0(t, e) {
	if (t === "input" || t === "change") return ja(e);
}
function X0(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ut = typeof Object.is == "function" ? Object.is : X0;
function go(t, e) {
	if (Ut(t, e)) return !0;
	if (typeof t != "object" || t === null || typeof e != "object" || e === null)
		return !1;
	var n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!nu.call(e, i) || !Ut(t[i], e[i])) return !1;
	}
	return !0;
}
function df(t) {
	for (; t && t.firstChild; ) t = t.firstChild;
	return t;
}
function ff(t, e) {
	var n = df(t);
	t = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = t + n.textContent.length), t <= e && r >= e))
				return { node: n, offset: e - t };
			t = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = df(n);
	}
}
function um(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
			? !1
			: e && e.nodeType === 3
			? um(t, e.parentNode)
			: "contains" in t
			? t.contains(e)
			: t.compareDocumentPosition
			? !!(t.compareDocumentPosition(e) & 16)
			: !1
		: !1;
}
function cm() {
	for (var t = window, e = Qs(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) t = e.contentWindow;
		else break;
		e = Qs(t.document);
	}
	return e;
}
function Mc(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return (
		e &&
		((e === "input" &&
			(t.type === "text" ||
				t.type === "search" ||
				t.type === "tel" ||
				t.type === "url" ||
				t.type === "password")) ||
			e === "textarea" ||
			t.contentEditable === "true")
	);
}
function Z0(t) {
	var e = cm(),
		n = t.focusedElem,
		r = t.selectionRange;
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		um(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Mc(n)) {
			if (
				((e = r.start),
				(t = r.end),
				t === void 0 && (t = e),
				"selectionStart" in n)
			)
				(n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
			else if (
				((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
				t.getSelection)
			) {
				t = t.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!t.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = ff(n, o));
				var s = ff(n, r);
				i &&
					s &&
					(t.rangeCount !== 1 ||
						t.anchorNode !== i.node ||
						t.anchorOffset !== i.offset ||
						t.focusNode !== s.node ||
						t.focusOffset !== s.offset) &&
					((e = e.createRange()),
					e.setStart(i.node, i.offset),
					t.removeAllRanges(),
					o > r
						? (t.addRange(e), t.extend(s.node, s.offset))
						: (e.setEnd(s.node, s.offset), t.addRange(e)));
			}
		}
		for (e = [], t = n; (t = t.parentNode); )
			t.nodeType === 1 &&
				e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
			(t = e[n]),
				(t.element.scrollLeft = t.left),
				(t.element.scrollTop = t.top);
	}
}
var ew = hn && "documentMode" in document && 11 >= document.documentMode,
	Ur = null,
	Su = null,
	no = null,
	xu = !1;
function hf(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	xu ||
		Ur == null ||
		Ur !== Qs(r) ||
		((r = Ur),
		"selectionStart" in r && Mc(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(no && go(no, r)) ||
			((no = r),
			(r = ea(Su, "onSelect")),
			0 < r.length &&
				((e = new jc("onSelect", "select", null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = Ur))));
}
function ds(t, e) {
	var n = {};
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n["Webkit" + t] = "webkit" + e),
		(n["Moz" + t] = "moz" + e),
		n
	);
}
var zr = {
		animationend: ds("Animation", "AnimationEnd"),
		animationiteration: ds("Animation", "AnimationIteration"),
		animationstart: ds("Animation", "AnimationStart"),
		transitionend: ds("Transition", "TransitionEnd"),
	},
	Cl = {},
	dm = {};
hn &&
	((dm = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete zr.animationend.animation,
		delete zr.animationiteration.animation,
		delete zr.animationstart.animation),
	"TransitionEvent" in window || delete zr.transitionend.transition);
function La(t) {
	if (Cl[t]) return Cl[t];
	if (!zr[t]) return t;
	var e = zr[t],
		n;
	for (n in e) if (e.hasOwnProperty(n) && n in dm) return (Cl[t] = e[n]);
	return t;
}
var fm = La("animationend"),
	hm = La("animationiteration"),
	pm = La("animationstart"),
	mm = La("transitionend"),
	ym = new Map(),
	pf =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Yn(t, e) {
	ym.set(t, e), br(e, [t]);
}
for (var kl = 0; kl < pf.length; kl++) {
	var Rl = pf[kl],
		tw = Rl.toLowerCase(),
		nw = Rl[0].toUpperCase() + Rl.slice(1);
	Yn(tw, "on" + nw);
}
Yn(fm, "onAnimationEnd");
Yn(hm, "onAnimationIteration");
Yn(pm, "onAnimationStart");
Yn("dblclick", "onDoubleClick");
Yn("focusin", "onFocus");
Yn("focusout", "onBlur");
Yn(mm, "onTransitionEnd");
si("onMouseEnter", ["mouseout", "mouseover"]);
si("onMouseLeave", ["mouseout", "mouseover"]);
si("onPointerEnter", ["pointerout", "pointerover"]);
si("onPointerLeave", ["pointerout", "pointerover"]);
br(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
br(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
br(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
br(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
br(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ki =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	rw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));
function mf(t, e, n) {
	var r = t.type || "unknown-event";
	(t.currentTarget = n), t0(r, e, void 0, t), (t.currentTarget = null);
}
function gm(t, e) {
	e = (e & 4) !== 0;
	for (var n = 0; n < t.length; n++) {
		var r = t[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (e)
				for (var s = r.length - 1; 0 <= s; s--) {
					var a = r[s],
						l = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
					mf(i, a, u), (o = l);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((a = r[s]),
						(l = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						l !== o && i.isPropagationStopped())
					)
						break e;
					mf(i, a, u), (o = l);
				}
		}
	}
	if (Gs) throw ((t = gu), (Gs = !1), (gu = null), t);
}
function Se(t, e) {
	var n = e[Ru];
	n === void 0 && (n = e[Ru] = new Set());
	var r = t + "__bubble";
	n.has(r) || (vm(e, t, 2, !1), n.add(r));
}
function Pl(t, e, n) {
	var r = 0;
	e && (r |= 4), vm(n, t, r, e);
}
var fs = "_reactListening" + Math.random().toString(36).slice(2);
function vo(t) {
	if (!t[fs]) {
		(t[fs] = !0),
			Cp.forEach(function (n) {
				n !== "selectionchange" && (rw.has(n) || Pl(n, !1, t), Pl(n, !0, t));
			});
		var e = t.nodeType === 9 ? t : t.ownerDocument;
		e === null || e[fs] || ((e[fs] = !0), Pl("selectionchange", !1, e));
	}
}
function vm(t, e, n, r) {
	switch (tm(e)) {
		case 1:
			var i = g0;
			break;
		case 4:
			i = v0;
			break;
		default:
			i = Nc;
	}
	(n = i.bind(null, e, n, t)),
		(i = void 0),
		!yu ||
			(e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? t.addEventListener(e, n, { capture: !0, passive: i })
				: t.addEventListener(e, n, !0)
			: i !== void 0
			? t.addEventListener(e, n, { passive: i })
			: t.addEventListener(e, n, !1);
}
function Tl(t, e, n, r, i) {
	var o = r;
	if (!(e & 1) && !(e & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var l = s.tag;
						if (
							(l === 3 || l === 4) &&
							((l = s.stateNode.containerInfo),
							l === i || (l.nodeType === 8 && l.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; a !== null; ) {
					if (((s = sr(a)), s === null)) return;
					if (((l = s.tag), l === 5 || l === 6)) {
						r = o = s;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Bp(function () {
		var u = o,
			c = Pc(n),
			d = [];
		e: {
			var f = ym.get(t);
			if (f !== void 0) {
				var S = jc,
					E = t;
				switch (t) {
					case "keypress":
						if (Rs(n) === 0) break e;
					case "keydown":
					case "keyup":
						S = D0;
						break;
					case "focusin":
						(E = "focus"), (S = xl);
						break;
					case "focusout":
						(E = "blur"), (S = xl);
						break;
					case "beforeblur":
					case "afterblur":
						S = xl;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						S = nf;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						S = S0;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						S = A0;
						break;
					case fm:
					case hm:
					case pm:
						S = b0;
						break;
					case mm:
						S = F0;
						break;
					case "scroll":
						S = w0;
						break;
					case "wheel":
						S = z0;
						break;
					case "copy":
					case "cut":
					case "paste":
						S = k0;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						S = of;
				}
				var x = (e & 4) !== 0,
					C = !x && t === "scroll",
					y = x ? (f !== null ? f + "Capture" : null) : f;
				x = [];
				for (var p = u, w; p !== null; ) {
					w = p;
					var g = w.stateNode;
					if (
						(w.tag === 5 &&
							g !== null &&
							((w = g),
							y !== null && ((g = fo(p, y)), g != null && x.push(wo(p, g, w)))),
						C)
					)
						break;
					p = p.return;
				}
				0 < x.length &&
					((f = new S(f, E, null, n, c)), d.push({ event: f, listeners: x }));
			}
		}
		if (!(e & 7)) {
			e: {
				if (
					((f = t === "mouseover" || t === "pointerover"),
					(S = t === "mouseout" || t === "pointerout"),
					f &&
						n !== pu &&
						(E = n.relatedTarget || n.fromElement) &&
						(sr(E) || E[pn]))
				)
					break e;
				if (
					(S || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
							? f.defaultView || f.parentWindow
							: window),
					S
						? ((E = n.relatedTarget || n.toElement),
						  (S = u),
						  (E = E ? sr(E) : null),
						  E !== null &&
								((C = Cr(E)), E !== C || (E.tag !== 5 && E.tag !== 6)) &&
								(E = null))
						: ((S = null), (E = u)),
					S !== E)
				) {
					if (
						((x = nf),
						(g = "onMouseLeave"),
						(y = "onMouseEnter"),
						(p = "mouse"),
						(t === "pointerout" || t === "pointerover") &&
							((x = of),
							(g = "onPointerLeave"),
							(y = "onPointerEnter"),
							(p = "pointer")),
						(C = S == null ? f : Br(S)),
						(w = E == null ? f : Br(E)),
						(f = new x(g, p + "leave", S, n, c)),
						(f.target = C),
						(f.relatedTarget = w),
						(g = null),
						sr(c) === u &&
							((x = new x(y, p + "enter", E, n, c)),
							(x.target = w),
							(x.relatedTarget = C),
							(g = x)),
						(C = g),
						S && E)
					)
						t: {
							for (x = S, y = E, p = 0, w = x; w; w = jr(w)) p++;
							for (w = 0, g = y; g; g = jr(g)) w++;
							for (; 0 < p - w; ) (x = jr(x)), p--;
							for (; 0 < w - p; ) (y = jr(y)), w--;
							for (; p--; ) {
								if (x === y || (y !== null && x === y.alternate)) break t;
								(x = jr(x)), (y = jr(y));
							}
							x = null;
						}
					else x = null;
					S !== null && yf(d, f, S, x, !1),
						E !== null && C !== null && yf(d, C, E, x, !0);
				}
			}
			e: {
				if (
					((f = u ? Br(u) : window),
					(S = f.nodeName && f.nodeName.toLowerCase()),
					S === "select" || (S === "input" && f.type === "file"))
				)
					var k = Q0;
				else if (lf(f))
					if (am) k = Y0;
					else {
						k = G0;
						var P = K0;
					}
				else
					(S = f.nodeName) &&
						S.toLowerCase() === "input" &&
						(f.type === "checkbox" || f.type === "radio") &&
						(k = J0);
				if (k && (k = k(t, u))) {
					sm(d, k, n, c);
					break e;
				}
				P && P(t, f, u),
					t === "focusout" &&
						(P = f._wrapperState) &&
						P.controlled &&
						f.type === "number" &&
						uu(f, "number", f.value);
			}
			switch (((P = u ? Br(u) : window), t)) {
				case "focusin":
					(lf(P) || P.contentEditable === "true") &&
						((Ur = P), (Su = u), (no = null));
					break;
				case "focusout":
					no = Su = Ur = null;
					break;
				case "mousedown":
					xu = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(xu = !1), hf(d, n, c);
					break;
				case "selectionchange":
					if (ew) break;
				case "keydown":
				case "keyup":
					hf(d, n, c);
			}
			var T;
			if (Ac)
				e: {
					switch (t) {
						case "compositionstart":
							var R = "onCompositionStart";
							break e;
						case "compositionend":
							R = "onCompositionEnd";
							break e;
						case "compositionupdate":
							R = "onCompositionUpdate";
							break e;
					}
					R = void 0;
				}
			else
				Fr
					? im(t, n) && (R = "onCompositionEnd")
					: t === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
			R &&
				(rm &&
					n.locale !== "ko" &&
					(Fr || R !== "onCompositionStart"
						? R === "onCompositionEnd" && Fr && (T = nm())
						: ((An = c),
						  (Dc = "value" in An ? An.value : An.textContent),
						  (Fr = !0))),
				(P = ea(u, R)),
				0 < P.length &&
					((R = new rf(R, t, null, n, c)),
					d.push({ event: R, listeners: P }),
					T ? (R.data = T) : ((T = om(n)), T !== null && (R.data = T)))),
				(T = $0 ? H0(t, n) : V0(t, n)) &&
					((u = ea(u, "onBeforeInput")),
					0 < u.length &&
						((c = new rf("onBeforeInput", "beforeinput", null, n, c)),
						d.push({ event: c, listeners: u }),
						(c.data = T)));
		}
		gm(d, e);
	});
}
function wo(t, e, n) {
	return { instance: t, listener: e, currentTarget: n };
}
function ea(t, e) {
	for (var n = e + "Capture", r = []; t !== null; ) {
		var i = t,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = fo(t, n)),
			o != null && r.unshift(wo(t, o, i)),
			(o = fo(t, e)),
			o != null && r.push(wo(t, o, i))),
			(t = t.return);
	}
	return r;
}
function jr(t) {
	if (t === null) return null;
	do t = t.return;
	while (t && t.tag !== 5);
	return t || null;
}
function yf(t, e, n, r, i) {
	for (var o = e._reactName, s = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((l = fo(n, o)), l != null && s.unshift(wo(n, l, a)))
				: i || ((l = fo(n, o)), l != null && s.push(wo(n, l, a)))),
			(n = n.return);
	}
	s.length !== 0 && t.push({ event: e, listeners: s });
}
var iw = /\r\n?/g,
	ow = /\u0000|\uFFFD/g;
function gf(t) {
	return (typeof t == "string" ? t : "" + t)
		.replace(
			iw,
			`
`
		)
		.replace(ow, "");
}
function hs(t, e, n) {
	if (((e = gf(e)), gf(t) !== e && n)) throw Error(A(425));
}
function ta() {}
var _u = null,
	bu = null;
function Cu(t, e) {
	return (
		t === "textarea" ||
		t === "noscript" ||
		typeof e.children == "string" ||
		typeof e.children == "number" ||
		(typeof e.dangerouslySetInnerHTML == "object" &&
			e.dangerouslySetInnerHTML !== null &&
			e.dangerouslySetInnerHTML.__html != null)
	);
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
	sw = typeof clearTimeout == "function" ? clearTimeout : void 0,
	vf = typeof Promise == "function" ? Promise : void 0,
	aw =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof vf < "u"
			? function (t) {
					return vf.resolve(null).then(t).catch(lw);
			  }
			: ku;
function lw(t) {
	setTimeout(function () {
		throw t;
	});
}
function Ol(t, e) {
	var n = e,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					t.removeChild(i), mo(e);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	mo(e);
}
function Bn(t) {
	for (; t != null; t = t.nextSibling) {
		var e = t.nodeType;
		if (e === 1 || e === 3) break;
		if (e === 8) {
			if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
			if (e === "/$") return null;
		}
	}
	return t;
}
function wf(t) {
	t = t.previousSibling;
	for (var e = 0; t; ) {
		if (t.nodeType === 8) {
			var n = t.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (e === 0) return t;
				e--;
			} else n === "/$" && e++;
		}
		t = t.previousSibling;
	}
	return null;
}
var xi = Math.random().toString(36).slice(2),
	Ht = "__reactFiber$" + xi,
	Eo = "__reactProps$" + xi,
	pn = "__reactContainer$" + xi,
	Ru = "__reactEvents$" + xi,
	uw = "__reactListeners$" + xi,
	cw = "__reactHandles$" + xi;
function sr(t) {
	var e = t[Ht];
	if (e) return e;
	for (var n = t.parentNode; n; ) {
		if ((e = n[pn] || n[Ht])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = wf(t); t !== null; ) {
					if ((n = t[Ht])) return n;
					t = wf(t);
				}
			return e;
		}
		(t = n), (n = t.parentNode);
	}
	return null;
}
function Fo(t) {
	return (
		(t = t[Ht] || t[pn]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	);
}
function Br(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode;
	throw Error(A(33));
}
function Aa(t) {
	return t[Eo] || null;
}
var Pu = [],
	$r = -1;
function Xn(t) {
	return { current: t };
}
function xe(t) {
	0 > $r || ((t.current = Pu[$r]), (Pu[$r] = null), $r--);
}
function ve(t, e) {
	$r++, (Pu[$r] = t.current), (t.current = e);
}
var Jn = {},
	Xe = Xn(Jn),
	at = Xn(!1),
	mr = Jn;
function ai(t, e) {
	var n = t.type.contextTypes;
	if (!n) return Jn;
	var r = t.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = e[o];
	return (
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = e),
			(t.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function lt(t) {
	return (t = t.childContextTypes), t != null;
}
function na() {
	xe(at), xe(Xe);
}
function Ef(t, e, n) {
	if (Xe.current !== Jn) throw Error(A(168));
	ve(Xe, e), ve(at, n);
}
function wm(t, e, n) {
	var r = t.stateNode;
	if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in e)) throw Error(A(108, Kv(t) || "Unknown", i));
	return Pe({}, n, r);
}
function ra(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Jn),
		(mr = Xe.current),
		ve(Xe, t),
		ve(at, at.current),
		!0
	);
}
function Sf(t, e, n) {
	var r = t.stateNode;
	if (!r) throw Error(A(169));
	n
		? ((t = wm(t, e, mr)),
		  (r.__reactInternalMemoizedMergedChildContext = t),
		  xe(at),
		  xe(Xe),
		  ve(Xe, t))
		: xe(at),
		ve(at, n);
}
var tn = null,
	Ma = !1,
	Il = !1;
function Em(t) {
	tn === null ? (tn = [t]) : tn.push(t);
}
function dw(t) {
	(Ma = !0), Em(t);
}
function Zn() {
	if (!Il && tn !== null) {
		Il = !0;
		var t = 0,
			e = ce;
		try {
			var n = tn;
			for (ce = 1; t < n.length; t++) {
				var r = n[t];
				do r = r(!0);
				while (r !== null);
			}
			(tn = null), (Ma = !1);
		} catch (i) {
			throw (tn !== null && (tn = tn.slice(t + 1)), Wp(Tc, Zn), i);
		} finally {
			(ce = e), (Il = !1);
		}
	}
	return null;
}
var Hr = [],
	Vr = 0,
	ia = null,
	oa = 0,
	xt = [],
	_t = 0,
	yr = null,
	on = 1,
	sn = "";
function rr(t, e) {
	(Hr[Vr++] = oa), (Hr[Vr++] = ia), (ia = t), (oa = e);
}
function Sm(t, e, n) {
	(xt[_t++] = on), (xt[_t++] = sn), (xt[_t++] = yr), (yr = t);
	var r = on;
	t = sn;
	var i = 32 - Mt(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Mt(e) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(on = (1 << (32 - Mt(e) + i)) | (n << i) | r),
			(sn = o + t);
	} else (on = (1 << o) | (n << i) | r), (sn = t);
}
function Fc(t) {
	t.return !== null && (rr(t, 1), Sm(t, 1, 0));
}
function Uc(t) {
	for (; t === ia; )
		(ia = Hr[--Vr]), (Hr[Vr] = null), (oa = Hr[--Vr]), (Hr[Vr] = null);
	for (; t === yr; )
		(yr = xt[--_t]),
			(xt[_t] = null),
			(sn = xt[--_t]),
			(xt[_t] = null),
			(on = xt[--_t]),
			(xt[_t] = null);
}
var pt = null,
	ht = null,
	be = !1,
	At = null;
function xm(t, e) {
	var n = bt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function xf(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type;
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (pt = t), (ht = Bn(e.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
				e !== null ? ((t.stateNode = e), (pt = t), (ht = null), !0) : !1
			);
		case 13:
			return (
				(e = e.nodeType !== 8 ? null : e),
				e !== null
					? ((n = yr !== null ? { id: on, overflow: sn } : null),
					  (t.memoizedState = {
							dehydrated: e,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = bt(18, null, null, 0)),
					  (n.stateNode = e),
					  (n.return = t),
					  (t.child = n),
					  (pt = t),
					  (ht = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Tu(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Ou(t) {
	if (be) {
		var e = ht;
		if (e) {
			var n = e;
			if (!xf(t, e)) {
				if (Tu(t)) throw Error(A(418));
				e = Bn(n.nextSibling);
				var r = pt;
				e && xf(t, e)
					? xm(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (be = !1), (pt = t));
			}
		} else {
			if (Tu(t)) throw Error(A(418));
			(t.flags = (t.flags & -4097) | 2), (be = !1), (pt = t);
		}
	}
}
function _f(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return;
	pt = t;
}
function ps(t) {
	if (t !== pt) return !1;
	if (!be) return _f(t), (be = !0), !1;
	var e;
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== "head" && e !== "body" && !Cu(t.type, t.memoizedProps))),
		e && (e = ht))
	) {
		if (Tu(t)) throw (_m(), Error(A(418)));
		for (; e; ) xm(t, e), (e = Bn(e.nextSibling));
	}
	if ((_f(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(A(317));
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data;
					if (n === "/$") {
						if (e === 0) {
							ht = Bn(t.nextSibling);
							break e;
						}
						e--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || e++;
				}
				t = t.nextSibling;
			}
			ht = null;
		}
	} else ht = pt ? Bn(t.stateNode.nextSibling) : null;
	return !0;
}
function _m() {
	for (var t = ht; t; ) t = Bn(t.nextSibling);
}
function li() {
	(ht = pt = null), (be = !1);
}
function zc(t) {
	At === null ? (At = [t]) : At.push(t);
}
var fw = wn.ReactCurrentBatchConfig;
function Dt(t, e) {
	if (t && t.defaultProps) {
		(e = Pe({}, e)), (t = t.defaultProps);
		for (var n in t) e[n] === void 0 && (e[n] = t[n]);
		return e;
	}
	return e;
}
var sa = Xn(null),
	aa = null,
	Wr = null,
	Bc = null;
function $c() {
	Bc = Wr = aa = null;
}
function Hc(t) {
	var e = sa.current;
	xe(sa), (t._currentValue = e);
}
function Iu(t, e, n) {
	for (; t !== null; ) {
		var r = t.alternate;
		if (
			((t.childLanes & e) !== e
				? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
				: r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
			t === n)
		)
			break;
		t = t.return;
	}
}
function ei(t, e) {
	(aa = t),
		(Bc = Wr = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			(t.lanes & e && (st = !0), (t.firstContext = null));
}
function Rt(t) {
	var e = t._currentValue;
	if (Bc !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), Wr === null)) {
			if (aa === null) throw Error(A(308));
			(Wr = t), (aa.dependencies = { lanes: 0, firstContext: t });
		} else Wr = Wr.next = t;
	return e;
}
var ar = null;
function Vc(t) {
	ar === null ? (ar = [t]) : ar.push(t);
}
function bm(t, e, n, r) {
	var i = e.interleaved;
	return (
		i === null ? ((n.next = n), Vc(e)) : ((n.next = i.next), (i.next = n)),
		(e.interleaved = n),
		mn(t, r)
	);
}
function mn(t, e) {
	t.lanes |= e;
	var n = t.alternate;
	for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
		(t.childLanes |= e),
			(n = t.alternate),
			n !== null && (n.childLanes |= e),
			(n = t),
			(t = t.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function Wc(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Cm(t, e) {
	(t = t.updateQueue),
		e.updateQueue === t &&
			(e.updateQueue = {
				baseState: t.baseState,
				firstBaseUpdate: t.firstBaseUpdate,
				lastBaseUpdate: t.lastBaseUpdate,
				shared: t.shared,
				effects: t.effects,
			});
}
function cn(t, e) {
	return {
		eventTime: t,
		lane: e,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function $n(t, e, n) {
	var r = t.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), le & 2)) {
		var i = r.pending;
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			mn(t, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), Vc(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		mn(t, n)
	);
}
function Ps(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Oc(t, n);
	}
}
function bf(t, e) {
	var n = t.updateQueue,
		r = t.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = e) : (o = o.next = e);
		} else i = o = e;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(t.updateQueue = n);
		return;
	}
	(t = n.lastBaseUpdate),
		t === null ? (n.firstBaseUpdate = e) : (t.next = e),
		(n.lastBaseUpdate = e);
}
function la(t, e, n, r) {
	var i = t.updateQueue;
	Tn = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var l = a,
			u = l.next;
		(l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
		var c = t.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== s &&
				(a === null ? (c.firstBaseUpdate = u) : (a.next = u),
				(c.lastBaseUpdate = l)));
	}
	if (o !== null) {
		var d = i.baseState;
		(s = 0), (c = u = l = null), (a = o);
		do {
			var f = a.lane,
				S = a.eventTime;
			if ((r & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: S,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var E = t,
						x = a;
					switch (((f = e), (S = n), x.tag)) {
						case 1:
							if (((E = x.payload), typeof E == "function")) {
								d = E.call(S, d, f);
								break e;
							}
							d = E;
							break e;
						case 3:
							E.flags = (E.flags & -65537) | 128;
						case 0:
							if (
								((E = x.payload),
								(f = typeof E == "function" ? E.call(S, d, f) : E),
								f == null)
							)
								break e;
							d = Pe({}, d, f);
							break e;
						case 2:
							Tn = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((t.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [a]) : f.push(a));
			} else
				(S = {
					eventTime: S,
					lane: f,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((u = c = S), (l = d)) : (c = c.next = S),
					(s |= f);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(f = a),
					(a = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (l = d),
			(i.baseState = l),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(e = i.shared.interleaved),
			e !== null)
		) {
			i = e;
			do (s |= i.lane), (i = i.next);
			while (i !== e);
		} else o === null && (i.shared.lanes = 0);
		(vr |= s), (t.lanes = s), (t.memoizedState = d);
	}
}
function Cf(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(A(191, i));
				i.call(r);
			}
		}
}
var km = new bp.Component().refs;
function Nu(t, e, n, r) {
	(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : Pe({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Fa = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? Cr(t) === t : !1;
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals;
		var r = nt(),
			i = Vn(t),
			o = cn(r, i);
		(o.payload = e),
			n != null && (o.callback = n),
			(e = $n(t, o, i)),
			e !== null && (Ft(e, t, i, r), Ps(e, t, i));
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals;
		var r = nt(),
			i = Vn(t),
			o = cn(r, i);
		(o.tag = 1),
			(o.payload = e),
			n != null && (o.callback = n),
			(e = $n(t, o, i)),
			e !== null && (Ft(e, t, i, r), Ps(e, t, i));
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals;
		var n = nt(),
			r = Vn(t),
			i = cn(n, r);
		(i.tag = 2),
			e != null && (i.callback = e),
			(e = $n(t, i, r)),
			e !== null && (Ft(e, t, r, n), Ps(e, t, r));
	},
};
function kf(t, e, n, r, i, o, s) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == "function"
			? t.shouldComponentUpdate(r, o, s)
			: e.prototype && e.prototype.isPureReactComponent
			? !go(n, r) || !go(i, o)
			: !0
	);
}
function Rm(t, e, n) {
	var r = !1,
		i = Jn,
		o = e.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = Rt(o))
			: ((i = lt(e) ? mr : Xe.current),
			  (r = e.contextTypes),
			  (o = (r = r != null) ? ai(t, i) : Jn)),
		(e = new e(n, o)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = Fa),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = o)),
		e
	);
}
function Rf(t, e, n, r) {
	(t = e.state),
		typeof e.componentWillReceiveProps == "function" &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == "function" &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && Fa.enqueueReplaceState(e, e.state, null);
}
function Du(t, e, n, r) {
	var i = t.stateNode;
	(i.props = n), (i.state = t.memoizedState), (i.refs = km), Wc(t);
	var o = e.contextType;
	typeof o == "object" && o !== null
		? (i.context = Rt(o))
		: ((o = lt(e) ? mr : Xe.current), (i.context = ai(t, o))),
		(i.state = t.memoizedState),
		(o = e.getDerivedStateFromProps),
		typeof o == "function" && (Nu(t, e, o, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((e = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && Fa.enqueueReplaceState(i, i.state, null),
			la(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Mi(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(A(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(A(147, t));
			var i = r,
				o = "" + t;
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == "function" &&
				e.ref._stringRef === o
				? e.ref
				: ((e = function (s) {
						var a = i.refs;
						a === km && (a = i.refs = {}),
							s === null ? delete a[o] : (a[o] = s);
				  }),
				  (e._stringRef = o),
				  e);
		}
		if (typeof t != "string") throw Error(A(284));
		if (!n._owner) throw Error(A(290, t));
	}
	return t;
}
function ms(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			A(
				31,
				t === "[object Object]"
					? "object with keys {" + Object.keys(e).join(", ") + "}"
					: t
			)
		))
	);
}
function Pf(t) {
	var e = t._init;
	return e(t._payload);
}
function Pm(t) {
	function e(y, p) {
		if (t) {
			var w = y.deletions;
			w === null ? ((y.deletions = [p]), (y.flags |= 16)) : w.push(p);
		}
	}
	function n(y, p) {
		if (!t) return null;
		for (; p !== null; ) e(y, p), (p = p.sibling);
		return null;
	}
	function r(y, p) {
		for (y = new Map(); p !== null; )
			p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
		return y;
	}
	function i(y, p) {
		return (y = Wn(y, p)), (y.index = 0), (y.sibling = null), y;
	}
	function o(y, p, w) {
		return (
			(y.index = w),
			t
				? ((w = y.alternate),
				  w !== null
						? ((w = w.index), w < p ? ((y.flags |= 2), p) : w)
						: ((y.flags |= 2), p))
				: ((y.flags |= 1048576), p)
		);
	}
	function s(y) {
		return t && y.alternate === null && (y.flags |= 2), y;
	}
	function a(y, p, w, g) {
		return p === null || p.tag !== 6
			? ((p = Fl(w, y.mode, g)), (p.return = y), p)
			: ((p = i(p, w)), (p.return = y), p);
	}
	function l(y, p, w, g) {
		var k = w.type;
		return k === Mr
			? c(y, p, w.props.children, g, w.key)
			: p !== null &&
			  (p.elementType === k ||
					(typeof k == "object" &&
						k !== null &&
						k.$$typeof === Pn &&
						Pf(k) === p.type))
			? ((g = i(p, w.props)), (g.ref = Mi(y, p, w)), (g.return = y), g)
			: ((g = js(w.type, w.key, w.props, null, y.mode, g)),
			  (g.ref = Mi(y, p, w)),
			  (g.return = y),
			  g);
	}
	function u(y, p, w, g) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== w.containerInfo ||
			p.stateNode.implementation !== w.implementation
			? ((p = Ul(w, y.mode, g)), (p.return = y), p)
			: ((p = i(p, w.children || [])), (p.return = y), p);
	}
	function c(y, p, w, g, k) {
		return p === null || p.tag !== 7
			? ((p = hr(w, y.mode, g, k)), (p.return = y), p)
			: ((p = i(p, w)), (p.return = y), p);
	}
	function d(y, p, w) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = Fl("" + p, y.mode, w)), (p.return = y), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case is:
					return (
						(w = js(p.type, p.key, p.props, null, y.mode, w)),
						(w.ref = Mi(y, null, p)),
						(w.return = y),
						w
					);
				case Ar:
					return (p = Ul(p, y.mode, w)), (p.return = y), p;
				case Pn:
					var g = p._init;
					return d(y, g(p._payload), w);
			}
			if (qi(p) || Ni(p))
				return (p = hr(p, y.mode, w, null)), (p.return = y), p;
			ms(y, p);
		}
		return null;
	}
	function f(y, p, w, g) {
		var k = p !== null ? p.key : null;
		if ((typeof w == "string" && w !== "") || typeof w == "number")
			return k !== null ? null : a(y, p, "" + w, g);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case is:
					return w.key === k ? l(y, p, w, g) : null;
				case Ar:
					return w.key === k ? u(y, p, w, g) : null;
				case Pn:
					return (k = w._init), f(y, p, k(w._payload), g);
			}
			if (qi(w) || Ni(w)) return k !== null ? null : c(y, p, w, g, null);
			ms(y, w);
		}
		return null;
	}
	function S(y, p, w, g, k) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (y = y.get(w) || null), a(p, y, "" + g, k);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case is:
					return (y = y.get(g.key === null ? w : g.key) || null), l(p, y, g, k);
				case Ar:
					return (y = y.get(g.key === null ? w : g.key) || null), u(p, y, g, k);
				case Pn:
					var P = g._init;
					return S(y, p, w, P(g._payload), k);
			}
			if (qi(g) || Ni(g)) return (y = y.get(w) || null), c(p, y, g, k, null);
			ms(p, g);
		}
		return null;
	}
	function E(y, p, w, g) {
		for (
			var k = null, P = null, T = p, R = (p = 0), B = null;
			T !== null && R < w.length;
			R++
		) {
			T.index > R ? ((B = T), (T = null)) : (B = T.sibling);
			var H = f(y, T, w[R], g);
			if (H === null) {
				T === null && (T = B);
				break;
			}
			t && T && H.alternate === null && e(y, T),
				(p = o(H, p, R)),
				P === null ? (k = H) : (P.sibling = H),
				(P = H),
				(T = B);
		}
		if (R === w.length) return n(y, T), be && rr(y, R), k;
		if (T === null) {
			for (; R < w.length; R++)
				(T = d(y, w[R], g)),
					T !== null &&
						((p = o(T, p, R)), P === null ? (k = T) : (P.sibling = T), (P = T));
			return be && rr(y, R), k;
		}
		for (T = r(y, T); R < w.length; R++)
			(B = S(T, y, R, w[R], g)),
				B !== null &&
					(t && B.alternate !== null && T.delete(B.key === null ? R : B.key),
					(p = o(B, p, R)),
					P === null ? (k = B) : (P.sibling = B),
					(P = B));
		return (
			t &&
				T.forEach(function (Z) {
					return e(y, Z);
				}),
			be && rr(y, R),
			k
		);
	}
	function x(y, p, w, g) {
		var k = Ni(w);
		if (typeof k != "function") throw Error(A(150));
		if (((w = k.call(w)), w == null)) throw Error(A(151));
		for (
			var P = (k = null), T = p, R = (p = 0), B = null, H = w.next();
			T !== null && !H.done;
			R++, H = w.next()
		) {
			T.index > R ? ((B = T), (T = null)) : (B = T.sibling);
			var Z = f(y, T, H.value, g);
			if (Z === null) {
				T === null && (T = B);
				break;
			}
			t && T && Z.alternate === null && e(y, T),
				(p = o(Z, p, R)),
				P === null ? (k = Z) : (P.sibling = Z),
				(P = Z),
				(T = B);
		}
		if (H.done) return n(y, T), be && rr(y, R), k;
		if (T === null) {
			for (; !H.done; R++, H = w.next())
				(H = d(y, H.value, g)),
					H !== null &&
						((p = o(H, p, R)), P === null ? (k = H) : (P.sibling = H), (P = H));
			return be && rr(y, R), k;
		}
		for (T = r(y, T); !H.done; R++, H = w.next())
			(H = S(T, y, R, H.value, g)),
				H !== null &&
					(t && H.alternate !== null && T.delete(H.key === null ? R : H.key),
					(p = o(H, p, R)),
					P === null ? (k = H) : (P.sibling = H),
					(P = H));
		return (
			t &&
				T.forEach(function (K) {
					return e(y, K);
				}),
			be && rr(y, R),
			k
		);
	}
	function C(y, p, w, g) {
		if (
			(typeof w == "object" &&
				w !== null &&
				w.type === Mr &&
				w.key === null &&
				(w = w.props.children),
			typeof w == "object" && w !== null)
		) {
			switch (w.$$typeof) {
				case is:
					e: {
						for (var k = w.key, P = p; P !== null; ) {
							if (P.key === k) {
								if (((k = w.type), k === Mr)) {
									if (P.tag === 7) {
										n(y, P.sibling),
											(p = i(P, w.props.children)),
											(p.return = y),
											(y = p);
										break e;
									}
								} else if (
									P.elementType === k ||
									(typeof k == "object" &&
										k !== null &&
										k.$$typeof === Pn &&
										Pf(k) === P.type)
								) {
									n(y, P.sibling),
										(p = i(P, w.props)),
										(p.ref = Mi(y, P, w)),
										(p.return = y),
										(y = p);
									break e;
								}
								n(y, P);
								break;
							} else e(y, P);
							P = P.sibling;
						}
						w.type === Mr
							? ((p = hr(w.props.children, y.mode, g, w.key)),
							  (p.return = y),
							  (y = p))
							: ((g = js(w.type, w.key, w.props, null, y.mode, g)),
							  (g.ref = Mi(y, p, w)),
							  (g.return = y),
							  (y = g));
					}
					return s(y);
				case Ar:
					e: {
						for (P = w.key; p !== null; ) {
							if (p.key === P)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === w.containerInfo &&
									p.stateNode.implementation === w.implementation
								) {
									n(y, p.sibling),
										(p = i(p, w.children || [])),
										(p.return = y),
										(y = p);
									break e;
								} else {
									n(y, p);
									break;
								}
							else e(y, p);
							p = p.sibling;
						}
						(p = Ul(w, y.mode, g)), (p.return = y), (y = p);
					}
					return s(y);
				case Pn:
					return (P = w._init), C(y, p, P(w._payload), g);
			}
			if (qi(w)) return E(y, p, w, g);
			if (Ni(w)) return x(y, p, w, g);
			ms(y, w);
		}
		return (typeof w == "string" && w !== "") || typeof w == "number"
			? ((w = "" + w),
			  p !== null && p.tag === 6
					? (n(y, p.sibling), (p = i(p, w)), (p.return = y), (y = p))
					: (n(y, p), (p = Fl(w, y.mode, g)), (p.return = y), (y = p)),
			  s(y))
			: n(y, p);
	}
	return C;
}
var ui = Pm(!0),
	Tm = Pm(!1),
	Uo = {},
	qt = Xn(Uo),
	So = Xn(Uo),
	xo = Xn(Uo);
function lr(t) {
	if (t === Uo) throw Error(A(174));
	return t;
}
function qc(t, e) {
	switch ((ve(xo, e), ve(So, t), ve(qt, Uo), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : du(null, "");
			break;
		default:
			(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = du(e, t));
	}
	xe(qt), ve(qt, e);
}
function ci() {
	xe(qt), xe(So), xe(xo);
}
function Om(t) {
	lr(xo.current);
	var e = lr(qt.current),
		n = du(e, t.type);
	e !== n && (ve(So, t), ve(qt, n));
}
function Qc(t) {
	So.current === t && (xe(qt), xe(So));
}
var ke = Xn(0);
function ua(t) {
	for (var e = t; e !== null; ) {
		if (e.tag === 13) {
			var n = e.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return e;
		} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
			if (e.flags & 128) return e;
		} else if (e.child !== null) {
			(e.child.return = e), (e = e.child);
			continue;
		}
		if (e === t) break;
		for (; e.sibling === null; ) {
			if (e.return === null || e.return === t) return null;
			e = e.return;
		}
		(e.sibling.return = e.return), (e = e.sibling);
	}
	return null;
}
var Nl = [];
function Kc() {
	for (var t = 0; t < Nl.length; t++)
		Nl[t]._workInProgressVersionPrimary = null;
	Nl.length = 0;
}
var Ts = wn.ReactCurrentDispatcher,
	Dl = wn.ReactCurrentBatchConfig,
	gr = 0,
	Re = null,
	Ue = null,
	$e = null,
	ca = !1,
	ro = !1,
	_o = 0,
	hw = 0;
function Ge() {
	throw Error(A(321));
}
function Gc(t, e) {
	if (e === null) return !1;
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!Ut(t[n], e[n])) return !1;
	return !0;
}
function Jc(t, e, n, r, i, o) {
	if (
		((gr = o),
		(Re = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(Ts.current = t === null || t.memoizedState === null ? gw : vw),
		(t = n(r, i)),
		ro)
	) {
		o = 0;
		do {
			if (((ro = !1), (_o = 0), 25 <= o)) throw Error(A(301));
			(o += 1),
				($e = Ue = null),
				(e.updateQueue = null),
				(Ts.current = ww),
				(t = n(r, i));
		} while (ro);
	}
	if (
		((Ts.current = da),
		(e = Ue !== null && Ue.next !== null),
		(gr = 0),
		($e = Ue = Re = null),
		(ca = !1),
		e)
	)
		throw Error(A(300));
	return t;
}
function Yc() {
	var t = _o !== 0;
	return (_o = 0), t;
}
function $t() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return $e === null ? (Re.memoizedState = $e = t) : ($e = $e.next = t), $e;
}
function Pt() {
	if (Ue === null) {
		var t = Re.alternate;
		t = t !== null ? t.memoizedState : null;
	} else t = Ue.next;
	var e = $e === null ? Re.memoizedState : $e.next;
	if (e !== null) ($e = e), (Ue = t);
	else {
		if (t === null) throw Error(A(310));
		(Ue = t),
			(t = {
				memoizedState: Ue.memoizedState,
				baseState: Ue.baseState,
				baseQueue: Ue.baseQueue,
				queue: Ue.queue,
				next: null,
			}),
			$e === null ? (Re.memoizedState = $e = t) : ($e = $e.next = t);
	}
	return $e;
}
function bo(t, e) {
	return typeof e == "function" ? e(t) : e;
}
function jl(t) {
	var e = Pt(),
		n = e.queue;
	if (n === null) throw Error(A(311));
	n.lastRenderedReducer = t;
	var r = Ue,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var a = (s = null),
			l = null,
			u = o;
		do {
			var c = u.lane;
			if ((gr & c) === c)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : t(r, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
					(Re.lanes |= c),
					(vr |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		l === null ? (s = r) : (l.next = a),
			Ut(r, e.memoizedState) || (st = !0),
			(e.memoizedState = r),
			(e.baseState = s),
			(e.baseQueue = l),
			(n.lastRenderedState = r);
	}
	if (((t = n.interleaved), t !== null)) {
		i = t;
		do (o = i.lane), (Re.lanes |= o), (vr |= o), (i = i.next);
		while (i !== t);
	} else i === null && (n.lanes = 0);
	return [e.memoizedState, n.dispatch];
}
function Ll(t) {
	var e = Pt(),
		n = e.queue;
	if (n === null) throw Error(A(311));
	n.lastRenderedReducer = t;
	var r = n.dispatch,
		i = n.pending,
		o = e.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = t(o, s.action)), (s = s.next);
		while (s !== i);
		Ut(o, e.memoizedState) || (st = !0),
			(e.memoizedState = o),
			e.baseQueue === null && (e.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Im() {}
function Nm(t, e) {
	var n = Re,
		r = Pt(),
		i = e(),
		o = !Ut(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (st = !0)),
		(r = r.queue),
		Xc(Lm.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || o || ($e !== null && $e.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Co(9, jm.bind(null, n, r, i, e), void 0, null),
			He === null)
		)
			throw Error(A(349));
		gr & 30 || Dm(n, e, i);
	}
	return i;
}
function Dm(t, e, n) {
	(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = Re.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (Re.updateQueue = e),
			  (e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function jm(t, e, n, r) {
	(e.value = n), (e.getSnapshot = r), Am(e) && Mm(t);
}
function Lm(t, e, n) {
	return n(function () {
		Am(e) && Mm(t);
	});
}
function Am(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !Ut(t, n);
	} catch {
		return !0;
	}
}
function Mm(t) {
	var e = mn(t, 1);
	e !== null && Ft(e, t, 1, -1);
}
function Tf(t) {
	var e = $t();
	return (
		typeof t == "function" && (t = t()),
		(e.memoizedState = e.baseState = t),
		(t = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: bo,
			lastRenderedState: t,
		}),
		(e.queue = t),
		(t = t.dispatch = yw.bind(null, Re, t)),
		[e.memoizedState, t]
	);
}
function Co(t, e, n, r) {
	return (
		(t = { tag: t, create: e, destroy: n, deps: r, next: null }),
		(e = Re.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (Re.updateQueue = e),
			  (e.lastEffect = t.next = t))
			: ((n = e.lastEffect),
			  n === null
					? (e.lastEffect = t.next = t)
					: ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
		t
	);
}
function Fm() {
	return Pt().memoizedState;
}
function Os(t, e, n, r) {
	var i = $t();
	(Re.flags |= t),
		(i.memoizedState = Co(1 | e, n, void 0, r === void 0 ? null : r));
}
function Ua(t, e, n, r) {
	var i = Pt();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (Ue !== null) {
		var s = Ue.memoizedState;
		if (((o = s.destroy), r !== null && Gc(r, s.deps))) {
			i.memoizedState = Co(e, n, o, r);
			return;
		}
	}
	(Re.flags |= t), (i.memoizedState = Co(1 | e, n, o, r));
}
function Of(t, e) {
	return Os(8390656, 8, t, e);
}
function Xc(t, e) {
	return Ua(2048, 8, t, e);
}
function Um(t, e) {
	return Ua(4, 2, t, e);
}
function zm(t, e) {
	return Ua(4, 4, t, e);
}
function Bm(t, e) {
	if (typeof e == "function")
		return (
			(t = t()),
			e(t),
			function () {
				e(null);
			}
		);
	if (e != null)
		return (
			(t = t()),
			(e.current = t),
			function () {
				e.current = null;
			}
		);
}
function $m(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), Ua(4, 4, Bm.bind(null, e, t), n)
	);
}
function Zc() {}
function Hm(t, e) {
	var n = Pt();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && Gc(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t);
}
function Vm(t, e) {
	var n = Pt();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && Gc(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t);
}
function Wm(t, e, n) {
	return gr & 21
		? (Ut(n, e) || ((n = Kp()), (Re.lanes |= n), (vr |= n), (t.baseState = !0)),
		  e)
		: (t.baseState && ((t.baseState = !1), (st = !0)), (t.memoizedState = n));
}
function pw(t, e) {
	var n = ce;
	(ce = n !== 0 && 4 > n ? n : 4), t(!0);
	var r = Dl.transition;
	Dl.transition = {};
	try {
		t(!1), e();
	} finally {
		(ce = n), (Dl.transition = r);
	}
}
function qm() {
	return Pt().memoizedState;
}
function mw(t, e, n) {
	var r = Vn(t);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Qm(t))
	)
		Km(e, n);
	else if (((n = bm(t, e, n, r)), n !== null)) {
		var i = nt();
		Ft(n, t, r, i), Gm(n, e, r);
	}
}
function yw(t, e, n) {
	var r = Vn(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Qm(t)) Km(e, i);
	else {
		var o = t.alternate;
		if (
			t.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = e.lastRenderedReducer), o !== null)
		)
			try {
				var s = e.lastRenderedState,
					a = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), Ut(a, s))) {
					var l = e.interleaved;
					l === null
						? ((i.next = i), Vc(e))
						: ((i.next = l.next), (l.next = i)),
						(e.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = bm(t, e, i, r)),
			n !== null && ((i = nt()), Ft(n, t, r, i), Gm(n, e, r));
	}
}
function Qm(t) {
	var e = t.alternate;
	return t === Re || (e !== null && e === Re);
}
function Km(t, e) {
	ro = ca = !0;
	var n = t.pending;
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
		(t.pending = e);
}
function Gm(t, e, n) {
	if (n & 4194240) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Oc(t, n);
	}
}
var da = {
		readContext: Rt,
		useCallback: Ge,
		useContext: Ge,
		useEffect: Ge,
		useImperativeHandle: Ge,
		useInsertionEffect: Ge,
		useLayoutEffect: Ge,
		useMemo: Ge,
		useReducer: Ge,
		useRef: Ge,
		useState: Ge,
		useDebugValue: Ge,
		useDeferredValue: Ge,
		useTransition: Ge,
		useMutableSource: Ge,
		useSyncExternalStore: Ge,
		useId: Ge,
		unstable_isNewReconciler: !1,
	},
	gw = {
		readContext: Rt,
		useCallback: function (t, e) {
			return ($t().memoizedState = [t, e === void 0 ? null : e]), t;
		},
		useContext: Rt,
		useEffect: Of,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				Os(4194308, 4, Bm.bind(null, e, t), n)
			);
		},
		useLayoutEffect: function (t, e) {
			return Os(4194308, 4, t, e);
		},
		useInsertionEffect: function (t, e) {
			return Os(4, 2, t, e);
		},
		useMemo: function (t, e) {
			var n = $t();
			return (
				(e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
			);
		},
		useReducer: function (t, e, n) {
			var r = $t();
			return (
				(e = n !== void 0 ? n(e) : e),
				(r.memoizedState = r.baseState = e),
				(t = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: e,
				}),
				(r.queue = t),
				(t = t.dispatch = mw.bind(null, Re, t)),
				[r.memoizedState, t]
			);
		},
		useRef: function (t) {
			var e = $t();
			return (t = { current: t }), (e.memoizedState = t);
		},
		useState: Tf,
		useDebugValue: Zc,
		useDeferredValue: function (t) {
			return ($t().memoizedState = t);
		},
		useTransition: function () {
			var t = Tf(!1),
				e = t[0];
			return (t = pw.bind(null, t[1])), ($t().memoizedState = t), [e, t];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = Re,
				i = $t();
			if (be) {
				if (n === void 0) throw Error(A(407));
				n = n();
			} else {
				if (((n = e()), He === null)) throw Error(A(349));
				gr & 30 || Dm(r, e, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: e };
			return (
				(i.queue = o),
				Of(Lm.bind(null, r, o, t), [t]),
				(r.flags |= 2048),
				Co(9, jm.bind(null, r, o, n, e), void 0, null),
				n
			);
		},
		useId: function () {
			var t = $t(),
				e = He.identifierPrefix;
			if (be) {
				var n = sn,
					r = on;
				(n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
					(e = ":" + e + "R" + n),
					(n = _o++),
					0 < n && (e += "H" + n.toString(32)),
					(e += ":");
			} else (n = hw++), (e = ":" + e + "r" + n.toString(32) + ":");
			return (t.memoizedState = e);
		},
		unstable_isNewReconciler: !1,
	},
	vw = {
		readContext: Rt,
		useCallback: Hm,
		useContext: Rt,
		useEffect: Xc,
		useImperativeHandle: $m,
		useInsertionEffect: Um,
		useLayoutEffect: zm,
		useMemo: Vm,
		useReducer: jl,
		useRef: Fm,
		useState: function () {
			return jl(bo);
		},
		useDebugValue: Zc,
		useDeferredValue: function (t) {
			var e = Pt();
			return Wm(e, Ue.memoizedState, t);
		},
		useTransition: function () {
			var t = jl(bo)[0],
				e = Pt().memoizedState;
			return [t, e];
		},
		useMutableSource: Im,
		useSyncExternalStore: Nm,
		useId: qm,
		unstable_isNewReconciler: !1,
	},
	ww = {
		readContext: Rt,
		useCallback: Hm,
		useContext: Rt,
		useEffect: Xc,
		useImperativeHandle: $m,
		useInsertionEffect: Um,
		useLayoutEffect: zm,
		useMemo: Vm,
		useReducer: Ll,
		useRef: Fm,
		useState: function () {
			return Ll(bo);
		},
		useDebugValue: Zc,
		useDeferredValue: function (t) {
			var e = Pt();
			return Ue === null ? (e.memoizedState = t) : Wm(e, Ue.memoizedState, t);
		},
		useTransition: function () {
			var t = Ll(bo)[0],
				e = Pt().memoizedState;
			return [t, e];
		},
		useMutableSource: Im,
		useSyncExternalStore: Nm,
		useId: qm,
		unstable_isNewReconciler: !1,
	};
function di(t, e) {
	try {
		var n = "",
			r = e;
		do (n += Qv(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: t, source: e, stack: i, digest: null };
}
function Al(t, e, n) {
	return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function ju(t, e) {
	try {
		console.error(e.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;
function Jm(t, e, n) {
	(n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = e.value;
	return (
		(n.callback = function () {
			ha || ((ha = !0), (Vu = r)), ju(t, e);
		}),
		n
	);
}
function Ym(t, e, n) {
	(n = cn(-1, n)), (n.tag = 3);
	var r = t.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = e.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				ju(t, e);
			});
	}
	var o = t.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				ju(t, e),
					typeof r != "function" &&
						(Hn === null ? (Hn = new Set([this])) : Hn.add(this));
				var s = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function If(t, e, n) {
	var r = t.pingCache;
	if (r === null) {
		r = t.pingCache = new Ew();
		var i = new Set();
		r.set(e, i);
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
	i.has(n) || (i.add(n), (t = jw.bind(null, t, e, n)), e.then(t, t));
}
function Nf(t) {
	do {
		var e;
		if (
			((e = t.tag === 13) &&
				((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
			e)
		)
			return t;
		t = t.return;
	} while (t !== null);
	return null;
}
function Df(t, e, n, r, i) {
	return t.mode & 1
		? ((t.flags |= 65536), (t.lanes = i), t)
		: (t === e
				? (t.flags |= 65536)
				: ((t.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((e = cn(-1, 1)), (e.tag = 2), $n(n, e, 1))),
				  (n.lanes |= 1)),
		  t);
}
var Sw = wn.ReactCurrentOwner,
	st = !1;
function et(t, e, n, r) {
	e.child = t === null ? Tm(e, null, n, r) : ui(e, t.child, n, r);
}
function jf(t, e, n, r, i) {
	n = n.render;
	var o = e.ref;
	return (
		ei(e, i),
		(r = Jc(t, e, n, r, o, i)),
		(n = Yc()),
		t !== null && !st
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  yn(t, e, i))
			: (be && n && Fc(e), (e.flags |= 1), et(t, e, r, i), e.child)
	);
}
function Lf(t, e, n, r, i) {
	if (t === null) {
		var o = n.type;
		return typeof o == "function" &&
			!ad(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = o), Xm(t, e, o, r, i))
			: ((t = js(n.type, null, r, e, e.mode, i)),
			  (t.ref = e.ref),
			  (t.return = e),
			  (e.child = t));
	}
	if (((o = t.child), !(t.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : go), n(s, r) && t.ref === e.ref)
		)
			return yn(t, e, i);
	}
	return (
		(e.flags |= 1),
		(t = Wn(o, r)),
		(t.ref = e.ref),
		(t.return = e),
		(e.child = t)
	);
}
function Xm(t, e, n, r, i) {
	if (t !== null) {
		var o = t.memoizedProps;
		if (go(o, r) && t.ref === e.ref)
			if (((st = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
				t.flags & 131072 && (st = !0);
			else return (e.lanes = t.lanes), yn(t, e, i);
	}
	return Lu(t, e, n, r, i);
}
function Zm(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		o = t !== null ? t.memoizedState : null;
	if (r.mode === "hidden")
		if (!(e.mode & 1))
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				ve(Qr, ft),
				(ft |= n);
		else {
			if (!(n & 1073741824))
				return (
					(t = o !== null ? o.baseLanes | n : n),
					(e.lanes = e.childLanes = 1073741824),
					(e.memoizedState = {
						baseLanes: t,
						cachePool: null,
						transitions: null,
					}),
					(e.updateQueue = null),
					ve(Qr, ft),
					(ft |= t),
					null
				);
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				ve(Qr, ft),
				(ft |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
			ve(Qr, ft),
			(ft |= r);
	return et(t, e, i, n), e.child;
}
function ey(t, e) {
	var n = e.ref;
	((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152));
}
function Lu(t, e, n, r, i) {
	var o = lt(n) ? mr : Xe.current;
	return (
		(o = ai(e, o)),
		ei(e, i),
		(n = Jc(t, e, n, r, o, i)),
		(r = Yc()),
		t !== null && !st
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  yn(t, e, i))
			: (be && r && Fc(e), (e.flags |= 1), et(t, e, n, i), e.child)
	);
}
function Af(t, e, n, r, i) {
	if (lt(n)) {
		var o = !0;
		ra(e);
	} else o = !1;
	if ((ei(e, i), e.stateNode === null))
		Is(t, e), Rm(e, n, r), Du(e, n, r, i), (r = !0);
	else if (t === null) {
		var s = e.stateNode,
			a = e.memoizedProps;
		s.props = a;
		var l = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = Rt(u))
			: ((u = lt(n) ? mr : Xe.current), (u = ai(e, u)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== r || l !== u) && Rf(e, s, r, u)),
			(Tn = !1);
		var f = e.memoizedState;
		(s.state = f),
			la(e, r, s, i),
			(l = e.memoizedState),
			a !== r || f !== l || at.current || Tn
				? (typeof c == "function" && (Nu(e, n, c, r), (l = e.memoizedState)),
				  (a = Tn || kf(e, n, a, r, f, l, u))
						? (d ||
								(typeof s.UNSAFE_componentWillMount != "function" &&
									typeof s.componentWillMount != "function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == "function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" && (e.flags |= 4194308))
						: (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
						  (e.memoizedProps = r),
						  (e.memoizedState = l)),
				  (s.props = r),
				  (s.state = l),
				  (s.context = u),
				  (r = a))
				: (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
				  (r = !1));
	} else {
		(s = e.stateNode),
			Cm(t, e),
			(a = e.memoizedProps),
			(u = e.type === e.elementType ? a : Dt(e.type, a)),
			(s.props = u),
			(d = e.pendingProps),
			(f = s.context),
			(l = n.contextType),
			typeof l == "object" && l !== null
				? (l = Rt(l))
				: ((l = lt(n) ? mr : Xe.current), (l = ai(e, l)));
		var S = n.getDerivedStateFromProps;
		(c =
			typeof S == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== d || f !== l) && Rf(e, s, r, l)),
			(Tn = !1),
			(f = e.memoizedState),
			(s.state = f),
			la(e, r, s, i);
		var E = e.memoizedState;
		a !== d || f !== E || at.current || Tn
			? (typeof S == "function" && (Nu(e, n, S, r), (E = e.memoizedState)),
			  (u = Tn || kf(e, n, u, r, f, E, l) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != "function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, E, l),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, E, l)),
					  typeof s.componentDidUpdate == "function" && (e.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(a === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(a === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 1024),
					  (e.memoizedProps = r),
					  (e.memoizedState = E)),
			  (s.props = r),
			  (s.state = E),
			  (s.context = l),
			  (r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(a === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(a === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 1024),
			  (r = !1));
	}
	return Au(t, e, n, r, o, i);
}
function Au(t, e, n, r, i, o) {
	ey(t, e);
	var s = (e.flags & 128) !== 0;
	if (!r && !s) return i && Sf(e, n, !1), yn(t, e, o);
	(r = e.stateNode), (Sw.current = e);
	var a =
		s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(e.flags |= 1),
		t !== null && s
			? ((e.child = ui(e, t.child, null, o)), (e.child = ui(e, null, a, o)))
			: et(t, e, a, o),
		(e.memoizedState = r.state),
		i && Sf(e, n, !0),
		e.child
	);
}
function ty(t) {
	var e = t.stateNode;
	e.pendingContext
		? Ef(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Ef(t, e.context, !1),
		qc(t, e.containerInfo);
}
function Mf(t, e, n, r, i) {
	return li(), zc(i), (e.flags |= 256), et(t, e, n, r), e.child;
}
var Mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fu(t) {
	return { baseLanes: t, cachePool: null, transitions: null };
}
function ny(t, e, n) {
	var r = e.pendingProps,
		i = ke.current,
		o = !1,
		s = (e.flags & 128) !== 0,
		a;
	if (
		((a = s) ||
			(a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((o = !0), (e.flags &= -129))
			: (t === null || t.memoizedState !== null) && (i |= 1),
		ve(ke, i & 1),
		t === null)
	)
		return (
			Ou(e),
			(t = e.memoizedState),
			t !== null && ((t = t.dehydrated), t !== null)
				? (e.mode & 1
						? t.data === "$!"
							? (e.lanes = 8)
							: (e.lanes = 1073741824)
						: (e.lanes = 1),
				  null)
				: ((s = r.children),
				  (t = r.fallback),
				  o
						? ((r = e.mode),
						  (o = e.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = $a(s, r, 0, null)),
						  (t = hr(t, r, n, null)),
						  (o.return = e),
						  (t.return = e),
						  (o.sibling = t),
						  (e.child = o),
						  (e.child.memoizedState = Fu(n)),
						  (e.memoizedState = Mu),
						  t)
						: ed(e, s))
		);
	if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return xw(t, e, s, r, a, i, n);
	if (o) {
		(o = r.fallback), (s = e.mode), (i = t.child), (a = i.sibling);
		var l = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && e.child !== i
				? ((r = e.child),
				  (r.childLanes = 0),
				  (r.pendingProps = l),
				  (e.deletions = null))
				: ((r = Wn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (o = Wn(a, o)) : ((o = hr(o, s, n, null)), (o.flags |= 2)),
			(o.return = e),
			(r.return = e),
			(r.sibling = o),
			(e.child = r),
			(r = o),
			(o = e.child),
			(s = t.child.memoizedState),
			(s =
				s === null
					? Fu(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = t.childLanes & ~n),
			(e.memoizedState = Mu),
			r
		);
	}
	return (
		(o = t.child),
		(t = o.sibling),
		(r = Wn(o, { mode: "visible", children: r.children })),
		!(e.mode & 1) && (r.lanes = n),
		(r.return = e),
		(r.sibling = null),
		t !== null &&
			((n = e.deletions),
			n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
		(e.child = r),
		(e.memoizedState = null),
		r
	);
}
function ed(t, e) {
	return (
		(e = $a({ mode: "visible", children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	);
}
function ys(t, e, n, r) {
	return (
		r !== null && zc(r),
		ui(e, t.child, null, n),
		(t = ed(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	);
}
function xw(t, e, n, r, i, o, s) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = Al(Error(A(422)))), ys(t, e, s, r))
			: e.memoizedState !== null
			? ((e.child = t.child), (e.flags |= 128), null)
			: ((o = r.fallback),
			  (i = e.mode),
			  (r = $a({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = hr(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = e),
			  (o.return = e),
			  (r.sibling = o),
			  (e.child = r),
			  e.mode & 1 && ui(e, t.child, null, s),
			  (e.child.memoizedState = Fu(s)),
			  (e.memoizedState = Mu),
			  o);
	if (!(e.mode & 1)) return ys(t, e, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(A(419))), (r = Al(o, r, void 0)), ys(t, e, s, r);
	}
	if (((a = (s & t.childLanes) !== 0), st || a)) {
		if (((r = He), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), mn(t, i), Ft(r, t, i, -1));
		}
		return sd(), (r = Al(Error(A(421)))), ys(t, e, s, r);
	}
	return i.data === "$?"
		? ((e.flags |= 128),
		  (e.child = t.child),
		  (e = Lw.bind(null, t)),
		  (i._reactRetry = e),
		  null)
		: ((t = o.treeContext),
		  (ht = Bn(i.nextSibling)),
		  (pt = e),
		  (be = !0),
		  (At = null),
		  t !== null &&
				((xt[_t++] = on),
				(xt[_t++] = sn),
				(xt[_t++] = yr),
				(on = t.id),
				(sn = t.overflow),
				(yr = e)),
		  (e = ed(e, r.children)),
		  (e.flags |= 4096),
		  e);
}
function Ff(t, e, n) {
	t.lanes |= e;
	var r = t.alternate;
	r !== null && (r.lanes |= e), Iu(t.return, e, n);
}
function Ml(t, e, n, r, i) {
	var o = t.memoizedState;
	o === null
		? (t.memoizedState = {
				isBackwards: e,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = e),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function ry(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((et(t, e, r.children, n), (r = ke.current), r & 2))
		(r = (r & 1) | 2), (e.flags |= 128);
	else {
		if (t !== null && t.flags & 128)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Ff(t, n, e);
				else if (t.tag === 19) Ff(t, n, e);
				else if (t.child !== null) {
					(t.child.return = t), (t = t.child);
					continue;
				}
				if (t === e) break e;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) break e;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		r &= 1;
	}
	if ((ve(ke, r), !(e.mode & 1))) e.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && ua(t) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Ml(e, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && ua(t) === null)) {
						e.child = i;
						break;
					}
					(t = i.sibling), (i.sibling = n), (n = i), (i = t);
				}
				Ml(e, !0, n, null, o);
				break;
			case "together":
				Ml(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
	return e.child;
}
function Is(t, e) {
	!(e.mode & 1) &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function yn(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(vr |= e.lanes),
		!(n & e.childLanes))
	)
		return null;
	if (t !== null && e.child !== t.child) throw Error(A(153));
	if (e.child !== null) {
		for (
			t = e.child, n = Wn(t, t.pendingProps), e.child = n, n.return = e;
			t.sibling !== null;

		)
			(t = t.sibling), (n = n.sibling = Wn(t, t.pendingProps)), (n.return = e);
		n.sibling = null;
	}
	return e.child;
}
function _w(t, e, n) {
	switch (e.tag) {
		case 3:
			ty(e), li();
			break;
		case 5:
			Om(e);
			break;
		case 1:
			lt(e.type) && ra(e);
			break;
		case 4:
			qc(e, e.stateNode.containerInfo);
			break;
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value;
			ve(sa, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? (ve(ke, ke.current & 1), (e.flags |= 128), null)
					: n & e.child.childLanes
					? ny(t, e, n)
					: (ve(ke, ke.current & 1),
					  (t = yn(t, e, n)),
					  t !== null ? t.sibling : null);
			ve(ke, ke.current & 1);
			break;
		case 19:
			if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
				if (r) return ry(t, e, n);
				e.flags |= 128;
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				ve(ke, ke.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (e.lanes = 0), Zm(t, e, n);
	}
	return yn(t, e, n);
}
var iy, Uu, oy, sy;
iy = function (t, e) {
	for (var n = e.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === e) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === e) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Uu = function () {};
oy = function (t, e, n, r) {
	var i = t.memoizedProps;
	if (i !== r) {
		(t = e.stateNode), lr(qt.current);
		var o = null;
		switch (n) {
			case "input":
				(i = au(t, i)), (r = au(t, r)), (o = []);
				break;
			case "select":
				(i = Pe({}, i, { value: void 0 })),
					(r = Pe({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = cu(t, i)), (r = cu(t, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(t.onclick = ta);
		}
		fu(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(uo.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && l !== a && (l != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (s in a)
							!a.hasOwnProperty(s) ||
								(l && l.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in l)
							l.hasOwnProperty(s) &&
								a[s] !== l[s] &&
								(n || (n = {}), (n[s] = l[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (a = a ? a.__html : void 0),
						  l != null && a !== l && (o = o || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (o = o || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (uo.hasOwnProperty(u)
								? (l != null && u === "onScroll" && Se("scroll", t),
								  o || a === l || (o = []))
								: (o = o || []).push(u, l));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(e.updateQueue = u) && (e.flags |= 4);
	}
};
sy = function (t, e, n, r) {
	n !== r && (e.flags |= 4);
};
function Fi(t, e) {
	if (!be)
		switch (t.tailMode) {
			case "hidden":
				e = t.tail;
				for (var n = null; e !== null; )
					e.alternate !== null && (n = e), (e = e.sibling);
				n === null ? (t.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = t.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? e || t.tail === null
						? (t.tail = null)
						: (t.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Je(t) {
	var e = t.alternate !== null && t.alternate.child === t.child,
		n = 0,
		r = 0;
	if (e)
		for (var i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = t),
				(i = i.sibling);
	else
		for (i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = t),
				(i = i.sibling);
	return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function bw(t, e, n) {
	var r = e.pendingProps;
	switch ((Uc(e), e.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Je(e), null;
		case 1:
			return lt(e.type) && na(), Je(e), null;
		case 3:
			return (
				(r = e.stateNode),
				ci(),
				xe(at),
				xe(Xe),
				Kc(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(ps(e)
						? (e.flags |= 4)
						: t === null ||
						  (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
						  ((e.flags |= 1024), At !== null && (Qu(At), (At = null)))),
				Uu(t, e),
				Je(e),
				null
			);
		case 5:
			Qc(e);
			var i = lr(xo.current);
			if (((n = e.type), t !== null && e.stateNode != null))
				oy(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(A(166));
					return Je(e), null;
				}
				if (((t = lr(qt.current)), ps(e))) {
					(r = e.stateNode), (n = e.type);
					var o = e.memoizedProps;
					switch (((r[Ht] = e), (r[Eo] = o), (t = (e.mode & 1) !== 0), n)) {
						case "dialog":
							Se("cancel", r), Se("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							Se("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Ki.length; i++) Se(Ki[i], r);
							break;
						case "source":
							Se("error", r);
							break;
						case "img":
						case "image":
						case "link":
							Se("error", r), Se("load", r);
							break;
						case "details":
							Se("toggle", r);
							break;
						case "input":
							qd(r, o), Se("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								Se("invalid", r);
							break;
						case "textarea":
							Kd(r, o), Se("invalid", r);
					}
					fu(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var a = o[s];
							s === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											hs(r.textContent, a, t),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (o.suppressHydrationWarning !== !0 &&
											hs(r.textContent, a, t),
									  (i = ["children", "" + a]))
								: uo.hasOwnProperty(s) &&
								  a != null &&
								  s === "onScroll" &&
								  Se("scroll", r);
						}
					switch (n) {
						case "input":
							os(r), Qd(r, o, !0);
							break;
						case "textarea":
							os(r), Gd(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = ta);
					}
					(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						t === "http://www.w3.org/1999/xhtml" && (t = Dp(n)),
						t === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((t = s.createElement("div")),
								  (t.innerHTML = "<script></script>"),
								  (t = t.removeChild(t.firstChild)))
								: typeof r.is == "string"
								? (t = s.createElement(n, { is: r.is }))
								: ((t = s.createElement(n)),
								  n === "select" &&
										((s = t),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (t = s.createElementNS(t, n)),
						(t[Ht] = e),
						(t[Eo] = r),
						iy(t, e, !1, !1),
						(e.stateNode = t);
					e: {
						switch (((s = hu(n, r)), n)) {
							case "dialog":
								Se("cancel", t), Se("close", t), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								Se("load", t), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < Ki.length; i++) Se(Ki[i], t);
								i = r;
								break;
							case "source":
								Se("error", t), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								Se("error", t), Se("load", t), (i = r);
								break;
							case "details":
								Se("toggle", t), (i = r);
								break;
							case "input":
								qd(t, r), (i = au(t, r)), Se("invalid", t);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(t._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Pe({}, r, { value: void 0 })),
									Se("invalid", t);
								break;
							case "textarea":
								Kd(t, r), (i = cu(t, r)), Se("invalid", t);
								break;
							default:
								i = r;
						}
						fu(n, i), (a = i);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var l = a[o];
								o === "style"
									? Ap(t, l)
									: o === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0), l != null && jp(t, l))
									: o === "children"
									? typeof l == "string"
										? (n !== "textarea" || l !== "") && co(t, l)
										: typeof l == "number" && co(t, "" + l)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (uo.hasOwnProperty(o)
											? l != null && o === "onScroll" && Se("scroll", t)
											: l != null && bc(t, o, l, s));
							}
						switch (n) {
							case "input":
								os(t), Qd(t, r, !1);
								break;
							case "textarea":
								os(t), Gd(t);
								break;
							case "option":
								r.value != null && t.setAttribute("value", "" + Gn(r.value));
								break;
							case "select":
								(t.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Jr(t, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Jr(t, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (t.onclick = ta);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (e.flags |= 4);
				}
				e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
			}
			return Je(e), null;
		case 6:
			if (t && e.stateNode != null) sy(t, e, t.memoizedProps, r);
			else {
				if (typeof r != "string" && e.stateNode === null) throw Error(A(166));
				if (((n = lr(xo.current)), lr(qt.current), ps(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[Ht] = e),
						(o = r.nodeValue !== n) && ((t = pt), t !== null))
					)
						switch (t.tag) {
							case 3:
								hs(r.nodeValue, n, (t.mode & 1) !== 0);
								break;
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									hs(r.nodeValue, n, (t.mode & 1) !== 0);
						}
					o && (e.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Ht] = e),
						(e.stateNode = r);
			}
			return Je(e), null;
		case 13:
			if (
				(xe(ke),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (be && ht !== null && e.mode & 1 && !(e.flags & 128))
					_m(), li(), (e.flags |= 98560), (o = !1);
				else if (((o = ps(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!o) throw Error(A(318));
						if (
							((o = e.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(A(317));
						o[Ht] = e;
					} else
						li(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
					Je(e), (o = !1);
				} else At !== null && (Qu(At), (At = null)), (o = !0);
				if (!o) return e.flags & 65536 ? e : null;
			}
			return e.flags & 128
				? ((e.lanes = n), e)
				: ((r = r !== null),
				  r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						e.mode & 1 &&
							(t === null || ke.current & 1 ? ze === 0 && (ze = 3) : sd())),
				  e.updateQueue !== null && (e.flags |= 4),
				  Je(e),
				  null);
		case 4:
			return (
				ci(), Uu(t, e), t === null && vo(e.stateNode.containerInfo), Je(e), null
			);
		case 10:
			return Hc(e.type._context), Je(e), null;
		case 17:
			return lt(e.type) && na(), Je(e), null;
		case 19:
			if ((xe(ke), (o = e.memoizedState), o === null)) return Je(e), null;
			if (((r = (e.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) Fi(o, !1);
				else {
					if (ze !== 0 || (t !== null && t.flags & 128))
						for (t = e.child; t !== null; ) {
							if (((s = ua(t)), s !== null)) {
								for (
									e.flags |= 128,
										Fi(o, !1),
										r = s.updateQueue,
										r !== null && ((e.updateQueue = r), (e.flags |= 4)),
										e.subtreeFlags = 0,
										r = n,
										n = e.child;
									n !== null;

								)
									(o = n),
										(t = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = t),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (t = s.dependencies),
											  (o.dependencies =
													t === null
														? null
														: {
																lanes: t.lanes,
																firstContext: t.firstContext,
														  })),
										(n = n.sibling);
								return ve(ke, (ke.current & 1) | 2), e.child;
							}
							t = t.sibling;
						}
					o.tail !== null &&
						Ie() > fi &&
						((e.flags |= 128), (r = !0), Fi(o, !1), (e.lanes = 4194304));
				}
			else {
				if (!r)
					if (((t = ua(s)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							Fi(o, !0),
							o.tail === null && o.tailMode === "hidden" && !s.alternate && !be)
						)
							return Je(e), null;
					} else
						2 * Ie() - o.renderingStartTime > fi &&
							n !== 1073741824 &&
							((e.flags |= 128), (r = !0), Fi(o, !1), (e.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = e.child), (e.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (e.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((e = o.tail),
				  (o.rendering = e),
				  (o.tail = e.sibling),
				  (o.renderingStartTime = Ie()),
				  (e.sibling = null),
				  (n = ke.current),
				  ve(ke, r ? (n & 1) | 2 : n & 1),
				  e)
				: (Je(e), null);
		case 22:
		case 23:
			return (
				od(),
				(r = e.memoizedState !== null),
				t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
				r && e.mode & 1
					? ft & 1073741824 && (Je(e), e.subtreeFlags & 6 && (e.flags |= 8192))
					: Je(e),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(A(156, e.tag));
}
function Cw(t, e) {
	switch ((Uc(e), e.tag)) {
		case 1:
			return (
				lt(e.type) && na(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 3:
			return (
				ci(),
				xe(at),
				xe(Xe),
				Kc(),
				(t = e.flags),
				t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 5:
			return Qc(e), null;
		case 13:
			if (
				(xe(ke), (t = e.memoizedState), t !== null && t.dehydrated !== null)
			) {
				if (e.alternate === null) throw Error(A(340));
				li();
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 19:
			return xe(ke), null;
		case 4:
			return ci(), null;
		case 10:
			return Hc(e.type._context), null;
		case 22:
		case 23:
			return od(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var gs = !1,
	Ye = !1,
	kw = typeof WeakSet == "function" ? WeakSet : Set,
	W = null;
function qr(t, e) {
	var n = t.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Oe(t, e, r);
			}
		else n.current = null;
}
function zu(t, e, n) {
	try {
		n();
	} catch (r) {
		Oe(t, e, r);
	}
}
var Uf = !1;
function Rw(t, e) {
	if (((_u = Xs), (t = cm()), Mc(t))) {
		if ("selectionStart" in t)
			var n = { start: t.selectionStart, end: t.selectionEnd };
		else
			e: {
				n = ((n = t.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						a = -1,
						l = -1,
						u = 0,
						c = 0,
						d = t,
						f = null;
					t: for (;;) {
						for (
							var S;
							d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
								d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
								d.nodeType === 3 && (s += d.nodeValue.length),
								(S = d.firstChild) !== null;

						)
							(f = d), (d = S);
						for (;;) {
							if (d === t) break t;
							if (
								(f === n && ++u === i && (a = s),
								f === o && ++c === r && (l = s),
								(S = d.nextSibling) !== null)
							)
								break;
							(d = f), (f = d.parentNode);
						}
						d = S;
					}
					n = a === -1 || l === -1 ? null : { start: a, end: l };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (bu = { focusedElem: t, selectionRange: n }, Xs = !1, W = e; W !== null; )
		if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
			(t.return = e), (W = t);
		else
			for (; W !== null; ) {
				e = W;
				try {
					var E = e.alternate;
					if (e.flags & 1024)
						switch (e.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (E !== null) {
									var x = E.memoizedProps,
										C = E.memoizedState,
										y = e.stateNode,
										p = y.getSnapshotBeforeUpdate(
											e.elementType === e.type ? x : Dt(e.type, x),
											C
										);
									y.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var w = e.stateNode.containerInfo;
								w.nodeType === 1
									? (w.textContent = "")
									: w.nodeType === 9 &&
									  w.documentElement &&
									  w.removeChild(w.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(A(163));
						}
				} catch (g) {
					Oe(e, e.return, g);
				}
				if (((t = e.sibling), t !== null)) {
					(t.return = e.return), (W = t);
					break;
				}
				W = e.return;
			}
	return (E = Uf), (Uf = !1), E;
}
function io(t, e, n) {
	var r = e.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & t) === t) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && zu(e, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function za(t, e) {
	if (
		((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
	) {
		var n = (e = e.next);
		do {
			if ((n.tag & t) === t) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== e);
	}
}
function Bu(t) {
	var e = t.ref;
	if (e !== null) {
		var n = t.stateNode;
		switch (t.tag) {
			case 5:
				t = n;
				break;
			default:
				t = n;
		}
		typeof e == "function" ? e(t) : (e.current = t);
	}
}
function ay(t) {
	var e = t.alternate;
	e !== null && ((t.alternate = null), ay(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[Ht], delete e[Eo], delete e[Ru], delete e[uw], delete e[cw])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null);
}
function ly(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function zf(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || ly(t.return)) return null;
			t = t.return;
		}
		for (
			t.sibling.return = t.return, t = t.sibling;
			t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

		) {
			if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
			(t.child.return = t), (t = t.child);
		}
		if (!(t.flags & 2)) return t.stateNode;
	}
}
function $u(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode),
			e
				? n.nodeType === 8
					? n.parentNode.insertBefore(t, e)
					: n.insertBefore(t, e)
				: (n.nodeType === 8
						? ((e = n.parentNode), e.insertBefore(t, n))
						: ((e = n), e.appendChild(t)),
				  (n = n._reactRootContainer),
				  n != null || e.onclick !== null || (e.onclick = ta));
	else if (r !== 4 && ((t = t.child), t !== null))
		for ($u(t, e, n), t = t.sibling; t !== null; ) $u(t, e, n), (t = t.sibling);
}
function Hu(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Hu(t, e, n), t = t.sibling; t !== null; ) Hu(t, e, n), (t = t.sibling);
}
var Ve = null,
	jt = !1;
function Cn(t, e, n) {
	for (n = n.child; n !== null; ) uy(t, e, n), (n = n.sibling);
}
function uy(t, e, n) {
	if (Wt && typeof Wt.onCommitFiberUnmount == "function")
		try {
			Wt.onCommitFiberUnmount(Na, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ye || qr(n, e);
		case 6:
			var r = Ve,
				i = jt;
			(Ve = null),
				Cn(t, e, n),
				(Ve = r),
				(jt = i),
				Ve !== null &&
					(jt
						? ((t = Ve),
						  (n = n.stateNode),
						  t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
						: Ve.removeChild(n.stateNode));
			break;
		case 18:
			Ve !== null &&
				(jt
					? ((t = Ve),
					  (n = n.stateNode),
					  t.nodeType === 8
							? Ol(t.parentNode, n)
							: t.nodeType === 1 && Ol(t, n),
					  mo(t))
					: Ol(Ve, n.stateNode));
			break;
		case 4:
			(r = Ve),
				(i = jt),
				(Ve = n.stateNode.containerInfo),
				(jt = !0),
				Cn(t, e, n),
				(Ve = r),
				(jt = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ye &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && zu(n, e, s),
						(i = i.next);
				} while (i !== r);
			}
			Cn(t, e, n);
			break;
		case 1:
			if (
				!Ye &&
				(qr(n, e),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Oe(n, e, a);
				}
			Cn(t, e, n);
			break;
		case 21:
			Cn(t, e, n);
			break;
		case 22:
			n.mode & 1
				? ((Ye = (r = Ye) || n.memoizedState !== null), Cn(t, e, n), (Ye = r))
				: Cn(t, e, n);
			break;
		default:
			Cn(t, e, n);
	}
}
function Bf(t) {
	var e = t.updateQueue;
	if (e !== null) {
		t.updateQueue = null;
		var n = t.stateNode;
		n === null && (n = t.stateNode = new kw()),
			e.forEach(function (r) {
				var i = Aw.bind(null, t, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Nt(t, e) {
	var n = e.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = t,
					s = e,
					a = s;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Ve = a.stateNode), (jt = !1);
							break e;
						case 3:
							(Ve = a.stateNode.containerInfo), (jt = !0);
							break e;
						case 4:
							(Ve = a.stateNode.containerInfo), (jt = !0);
							break e;
					}
					a = a.return;
				}
				if (Ve === null) throw Error(A(160));
				uy(o, s, i), (Ve = null), (jt = !1);
				var l = i.alternate;
				l !== null && (l.return = null), (i.return = null);
			} catch (u) {
				Oe(i, e, u);
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) cy(e, t), (e = e.sibling);
}
function cy(t, e) {
	var n = t.alternate,
		r = t.flags;
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Nt(e, t), Bt(t), r & 4)) {
				try {
					io(3, t, t.return), za(3, t);
				} catch (x) {
					Oe(t, t.return, x);
				}
				try {
					io(5, t, t.return);
				} catch (x) {
					Oe(t, t.return, x);
				}
			}
			break;
		case 1:
			Nt(e, t), Bt(t), r & 512 && n !== null && qr(n, n.return);
			break;
		case 5:
			if (
				(Nt(e, t),
				Bt(t),
				r & 512 && n !== null && qr(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode;
				try {
					co(i, "");
				} catch (x) {
					Oe(t, t.return, x);
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var o = t.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					a = t.type,
					l = t.updateQueue;
				if (((t.updateQueue = null), l !== null))
					try {
						a === "input" && o.type === "radio" && o.name != null && Ip(i, o),
							hu(a, s);
						var u = hu(a, o);
						for (s = 0; s < l.length; s += 2) {
							var c = l[s],
								d = l[s + 1];
							c === "style"
								? Ap(i, d)
								: c === "dangerouslySetInnerHTML"
								? jp(i, d)
								: c === "children"
								? co(i, d)
								: bc(i, c, d, u);
						}
						switch (a) {
							case "input":
								lu(i, o);
								break;
							case "textarea":
								Np(i, o);
								break;
							case "select":
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var S = o.value;
								S != null
									? Jr(i, !!o.multiple, S, !1)
									: f !== !!o.multiple &&
									  (o.defaultValue != null
											? Jr(i, !!o.multiple, o.defaultValue, !0)
											: Jr(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[Eo] = o;
					} catch (x) {
						Oe(t, t.return, x);
					}
			}
			break;
		case 6:
			if ((Nt(e, t), Bt(t), r & 4)) {
				if (t.stateNode === null) throw Error(A(162));
				(i = t.stateNode), (o = t.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (x) {
					Oe(t, t.return, x);
				}
			}
			break;
		case 3:
			if (
				(Nt(e, t), Bt(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					mo(e.containerInfo);
				} catch (x) {
					Oe(t, t.return, x);
				}
			break;
		case 4:
			Nt(e, t), Bt(t);
			break;
		case 13:
			Nt(e, t),
				Bt(t),
				(i = t.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(rd = Ie())),
				r & 4 && Bf(t);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				t.mode & 1 ? ((Ye = (u = Ye) || c), Nt(e, t), (Ye = u)) : Nt(e, t),
				Bt(t),
				r & 8192)
			) {
				if (
					((u = t.memoizedState !== null),
					(t.stateNode.isHidden = u) && !c && t.mode & 1)
				)
					for (W = t, c = t.child; c !== null; ) {
						for (d = W = c; W !== null; ) {
							switch (((f = W), (S = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									io(4, f, f.return);
									break;
								case 1:
									qr(f, f.return);
									var E = f.stateNode;
									if (typeof E.componentWillUnmount == "function") {
										(r = f), (n = f.return);
										try {
											(e = r),
												(E.props = e.memoizedProps),
												(E.state = e.memoizedState),
												E.componentWillUnmount();
										} catch (x) {
											Oe(r, n, x);
										}
									}
									break;
								case 5:
									qr(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Hf(d);
										continue;
									}
							}
							S !== null ? ((S.return = f), (W = S)) : Hf(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = t; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((a = d.stateNode),
										  (l = d.memoizedProps.style),
										  (s =
												l != null && l.hasOwnProperty("display")
													? l.display
													: null),
										  (a.style.display = Lp("display", s)));
							} catch (x) {
								Oe(t, t.return, x);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? "" : d.memoizedProps;
							} catch (x) {
								Oe(t, t.return, x);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === t) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === t) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === t) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			Nt(e, t), Bt(t), r & 4 && Bf(t);
			break;
		case 21:
			break;
		default:
			Nt(e, t), Bt(t);
	}
}
function Bt(t) {
	var e = t.flags;
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (ly(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(A(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (co(i, ""), (r.flags &= -33));
					var o = zf(t);
					Hu(t, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						a = zf(t);
					$u(t, a, s);
					break;
				default:
					throw Error(A(161));
			}
		} catch (l) {
			Oe(t, t.return, l);
		}
		t.flags &= -3;
	}
	e & 4096 && (t.flags &= -4097);
}
function Pw(t, e, n) {
	(W = t), dy(t);
}
function dy(t, e, n) {
	for (var r = (t.mode & 1) !== 0; W !== null; ) {
		var i = W,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || gs;
			if (!s) {
				var a = i.alternate,
					l = (a !== null && a.memoizedState !== null) || Ye;
				a = gs;
				var u = Ye;
				if (((gs = s), (Ye = l) && !u))
					for (W = i; W !== null; )
						(s = W),
							(l = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Vf(i)
								: l !== null
								? ((l.return = s), (W = l))
								: Vf(i);
				for (; o !== null; ) (W = o), dy(o), (o = o.sibling);
				(W = i), (gs = a), (Ye = u);
			}
			$f(t);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : $f(t);
	}
}
function $f(t) {
	for (; W !== null; ) {
		var e = W;
		if (e.flags & 8772) {
			var n = e.alternate;
			try {
				if (e.flags & 8772)
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							Ye || za(5, e);
							break;
						case 1:
							var r = e.stateNode;
							if (e.flags & 4 && !Ye)
								if (n === null) r.componentDidMount();
								else {
									var i =
										e.elementType === e.type
											? n.memoizedProps
											: Dt(e.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = e.updateQueue;
							o !== null && Cf(e, o, r);
							break;
						case 3:
							var s = e.updateQueue;
							if (s !== null) {
								if (((n = null), e.child !== null))
									switch (e.child.tag) {
										case 5:
											n = e.child.stateNode;
											break;
										case 1:
											n = e.child.stateNode;
									}
								Cf(e, s, n);
							}
							break;
						case 5:
							var a = e.stateNode;
							if (n === null && e.flags & 4) {
								n = a;
								var l = e.memoizedProps;
								switch (e.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img":
										l.src && (n.src = l.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (e.memoizedState === null) {
								var u = e.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && mo(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(A(163));
					}
				Ye || (e.flags & 512 && Bu(e));
			} catch (f) {
				Oe(e, e.return, f);
			}
		}
		if (e === t) {
			W = null;
			break;
		}
		if (((n = e.sibling), n !== null)) {
			(n.return = e.return), (W = n);
			break;
		}
		W = e.return;
	}
}
function Hf(t) {
	for (; W !== null; ) {
		var e = W;
		if (e === t) {
			W = null;
			break;
		}
		var n = e.sibling;
		if (n !== null) {
			(n.return = e.return), (W = n);
			break;
		}
		W = e.return;
	}
}
function Vf(t) {
	for (; W !== null; ) {
		var e = W;
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return;
					try {
						za(4, e);
					} catch (l) {
						Oe(e, n, l);
					}
					break;
				case 1:
					var r = e.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = e.return;
						try {
							r.componentDidMount();
						} catch (l) {
							Oe(e, i, l);
						}
					}
					var o = e.return;
					try {
						Bu(e);
					} catch (l) {
						Oe(e, o, l);
					}
					break;
				case 5:
					var s = e.return;
					try {
						Bu(e);
					} catch (l) {
						Oe(e, s, l);
					}
			}
		} catch (l) {
			Oe(e, e.return, l);
		}
		if (e === t) {
			W = null;
			break;
		}
		var a = e.sibling;
		if (a !== null) {
			(a.return = e.return), (W = a);
			break;
		}
		W = e.return;
	}
}
var Tw = Math.ceil,
	fa = wn.ReactCurrentDispatcher,
	td = wn.ReactCurrentOwner,
	Ct = wn.ReactCurrentBatchConfig,
	le = 0,
	He = null,
	Le = null,
	We = 0,
	ft = 0,
	Qr = Xn(0),
	ze = 0,
	ko = null,
	vr = 0,
	Ba = 0,
	nd = 0,
	oo = null,
	ot = null,
	rd = 0,
	fi = 1 / 0,
	en = null,
	ha = !1,
	Vu = null,
	Hn = null,
	vs = !1,
	Mn = null,
	pa = 0,
	so = 0,
	Wu = null,
	Ns = -1,
	Ds = 0;
function nt() {
	return le & 6 ? Ie() : Ns !== -1 ? Ns : (Ns = Ie());
}
function Vn(t) {
	return t.mode & 1
		? le & 2 && We !== 0
			? We & -We
			: fw.transition !== null
			? (Ds === 0 && (Ds = Kp()), Ds)
			: ((t = ce),
			  t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : tm(t.type))),
			  t)
		: 1;
}
function Ft(t, e, n, r) {
	if (50 < so) throw ((so = 0), (Wu = null), Error(A(185)));
	Ao(t, n, r),
		(!(le & 2) || t !== He) &&
			(t === He && (!(le & 2) && (Ba |= n), ze === 4 && Nn(t, We)),
			ut(t, r),
			n === 1 && le === 0 && !(e.mode & 1) && ((fi = Ie() + 500), Ma && Zn()));
}
function ut(t, e) {
	var n = t.callbackNode;
	f0(t, e);
	var r = Ys(t, t === He ? We : 0);
	if (r === 0)
		n !== null && Xd(n), (t.callbackNode = null), (t.callbackPriority = 0);
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && Xd(n), e === 1))
			t.tag === 0 ? dw(Wf.bind(null, t)) : Em(Wf.bind(null, t)),
				aw(function () {
					!(le & 6) && Zn();
				}),
				(n = null);
		else {
			switch (Gp(r)) {
				case 1:
					n = Tc;
					break;
				case 4:
					n = qp;
					break;
				case 16:
					n = Js;
					break;
				case 536870912:
					n = Qp;
					break;
				default:
					n = Js;
			}
			n = wy(n, fy.bind(null, t));
		}
		(t.callbackPriority = e), (t.callbackNode = n);
	}
}
function fy(t, e) {
	if (((Ns = -1), (Ds = 0), le & 6)) throw Error(A(327));
	var n = t.callbackNode;
	if (ti() && t.callbackNode !== n) return null;
	var r = Ys(t, t === He ? We : 0);
	if (r === 0) return null;
	if (r & 30 || r & t.expiredLanes || e) e = ma(t, r);
	else {
		e = r;
		var i = le;
		le |= 2;
		var o = py();
		(He !== t || We !== e) && ((en = null), (fi = Ie() + 500), fr(t, e));
		do
			try {
				Nw();
				break;
			} catch (a) {
				hy(t, a);
			}
		while (1);
		$c(),
			(fa.current = o),
			(le = i),
			Le !== null ? (e = 0) : ((He = null), (We = 0), (e = ze));
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = vu(t)), i !== 0 && ((r = i), (e = qu(t, i)))), e === 1)
		)
			throw ((n = ko), fr(t, 0), Nn(t, r), ut(t, Ie()), n);
		if (e === 6) Nn(t, r);
		else {
			if (
				((i = t.current.alternate),
				!(r & 30) &&
					!Ow(i) &&
					((e = ma(t, r)),
					e === 2 && ((o = vu(t)), o !== 0 && ((r = o), (e = qu(t, o)))),
					e === 1))
			)
				throw ((n = ko), fr(t, 0), Nn(t, r), ut(t, Ie()), n);
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(A(345));
				case 2:
					ir(t, ot, en);
					break;
				case 3:
					if (
						(Nn(t, r), (r & 130023424) === r && ((e = rd + 500 - Ie()), 10 < e))
					) {
						if (Ys(t, 0) !== 0) break;
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							nt(), (t.pingedLanes |= t.suspendedLanes & i);
							break;
						}
						t.timeoutHandle = ku(ir.bind(null, t, ot, en), e);
						break;
					}
					ir(t, ot, en);
					break;
				case 4:
					if ((Nn(t, r), (r & 4194240) === r)) break;
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Mt(r);
						(o = 1 << s), (s = e[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = Ie() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Tw(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = ku(ir.bind(null, t, ot, en), r);
						break;
					}
					ir(t, ot, en);
					break;
				case 5:
					ir(t, ot, en);
					break;
				default:
					throw Error(A(329));
			}
		}
	}
	return ut(t, Ie()), t.callbackNode === n ? fy.bind(null, t) : null;
}
function qu(t, e) {
	var n = oo;
	return (
		t.current.memoizedState.isDehydrated && (fr(t, e).flags |= 256),
		(t = ma(t, e)),
		t !== 2 && ((e = ot), (ot = n), e !== null && Qu(e)),
		t
	);
}
function Qu(t) {
	ot === null ? (ot = t) : ot.push.apply(ot, t);
}
function Ow(t) {
	for (var e = t; ; ) {
		if (e.flags & 16384) {
			var n = e.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Ut(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
			(n.return = e), (e = n);
		else {
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return !0;
				e = e.return;
			}
			(e.sibling.return = e.return), (e = e.sibling);
		}
	}
	return !0;
}
function Nn(t, e) {
	for (
		e &= ~nd,
			e &= ~Ba,
			t.suspendedLanes |= e,
			t.pingedLanes &= ~e,
			t = t.expirationTimes;
		0 < e;

	) {
		var n = 31 - Mt(e),
			r = 1 << n;
		(t[n] = -1), (e &= ~r);
	}
}
function Wf(t) {
	if (le & 6) throw Error(A(327));
	ti();
	var e = Ys(t, 0);
	if (!(e & 1)) return ut(t, Ie()), null;
	var n = ma(t, e);
	if (t.tag !== 0 && n === 2) {
		var r = vu(t);
		r !== 0 && ((e = r), (n = qu(t, r)));
	}
	if (n === 1) throw ((n = ko), fr(t, 0), Nn(t, e), ut(t, Ie()), n);
	if (n === 6) throw Error(A(345));
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		ir(t, ot, en),
		ut(t, Ie()),
		null
	);
}
function id(t, e) {
	var n = le;
	le |= 1;
	try {
		return t(e);
	} finally {
		(le = n), le === 0 && ((fi = Ie() + 500), Ma && Zn());
	}
}
function wr(t) {
	Mn !== null && Mn.tag === 0 && !(le & 6) && ti();
	var e = le;
	le |= 1;
	var n = Ct.transition,
		r = ce;
	try {
		if (((Ct.transition = null), (ce = 1), t)) return t();
	} finally {
		(ce = r), (Ct.transition = n), (le = e), !(le & 6) && Zn();
	}
}
function od() {
	(ft = Qr.current), xe(Qr);
}
function fr(t, e) {
	(t.finishedWork = null), (t.finishedLanes = 0);
	var n = t.timeoutHandle;
	if ((n !== -1 && ((t.timeoutHandle = -1), sw(n)), Le !== null))
		for (n = Le.return; n !== null; ) {
			var r = n;
			switch ((Uc(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && na();
					break;
				case 3:
					ci(), xe(at), xe(Xe), Kc();
					break;
				case 5:
					Qc(r);
					break;
				case 4:
					ci();
					break;
				case 13:
					xe(ke);
					break;
				case 19:
					xe(ke);
					break;
				case 10:
					Hc(r.type._context);
					break;
				case 22:
				case 23:
					od();
			}
			n = n.return;
		}
	if (
		((He = t),
		(Le = t = Wn(t.current, null)),
		(We = ft = e),
		(ze = 0),
		(ko = null),
		(nd = Ba = vr = 0),
		(ot = oo = null),
		ar !== null)
	) {
		for (e = 0; e < ar.length; e++)
			if (((n = ar[e]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		ar = null;
	}
	return t;
}
function hy(t, e) {
	do {
		var n = Le;
		try {
			if (($c(), (Ts.current = da), ca)) {
				for (var r = Re.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				ca = !1;
			}
			if (
				((gr = 0),
				($e = Ue = Re = null),
				(ro = !1),
				(_o = 0),
				(td.current = null),
				n === null || n.return === null)
			) {
				(ze = 1), (ko = e), (Le = null);
				break;
			}
			e: {
				var o = t,
					s = n.return,
					a = n,
					l = e;
				if (
					((e = We),
					(a.flags |= 32768),
					l !== null && typeof l == "object" && typeof l.then == "function")
				) {
					var u = l,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f
							? ((c.updateQueue = f.updateQueue),
							  (c.memoizedState = f.memoizedState),
							  (c.lanes = f.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var S = Nf(s);
					if (S !== null) {
						(S.flags &= -257),
							Df(S, s, a, o, e),
							S.mode & 1 && If(o, u, e),
							(e = S),
							(l = u);
						var E = e.updateQueue;
						if (E === null) {
							var x = new Set();
							x.add(l), (e.updateQueue = x);
						} else E.add(l);
						break e;
					} else {
						if (!(e & 1)) {
							If(o, u, e), sd();
							break e;
						}
						l = Error(A(426));
					}
				} else if (be && a.mode & 1) {
					var C = Nf(s);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256),
							Df(C, s, a, o, e),
							zc(di(l, a));
						break e;
					}
				}
				(o = l = di(l, a)),
					ze !== 4 && (ze = 2),
					oo === null ? (oo = [o]) : oo.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (e &= -e), (o.lanes |= e);
							var y = Jm(o, l, e);
							bf(o, y);
							break e;
						case 1:
							a = l;
							var p = o.type,
								w = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(w !== null &&
										typeof w.componentDidCatch == "function" &&
										(Hn === null || !Hn.has(w))))
							) {
								(o.flags |= 65536), (e &= -e), (o.lanes |= e);
								var g = Ym(o, a, e);
								bf(o, g);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			yy(n);
		} catch (k) {
			(e = k), Le === n && n !== null && (Le = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function py() {
	var t = fa.current;
	return (fa.current = da), t === null ? da : t;
}
function sd() {
	(ze === 0 || ze === 3 || ze === 2) && (ze = 4),
		He === null || (!(vr & 268435455) && !(Ba & 268435455)) || Nn(He, We);
}
function ma(t, e) {
	var n = le;
	le |= 2;
	var r = py();
	(He !== t || We !== e) && ((en = null), fr(t, e));
	do
		try {
			Iw();
			break;
		} catch (i) {
			hy(t, i);
		}
	while (1);
	if (($c(), (le = n), (fa.current = r), Le !== null)) throw Error(A(261));
	return (He = null), (We = 0), ze;
}
function Iw() {
	for (; Le !== null; ) my(Le);
}
function Nw() {
	for (; Le !== null && !r0(); ) my(Le);
}
function my(t) {
	var e = vy(t.alternate, t, ft);
	(t.memoizedProps = t.pendingProps),
		e === null ? yy(t) : (Le = e),
		(td.current = null);
}
function yy(t) {
	var e = t;
	do {
		var n = e.alternate;
		if (((t = e.return), e.flags & 32768)) {
			if (((n = Cw(n, e)), n !== null)) {
				(n.flags &= 32767), (Le = n);
				return;
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
			else {
				(ze = 6), (Le = null);
				return;
			}
		} else if (((n = bw(n, e, ft)), n !== null)) {
			Le = n;
			return;
		}
		if (((e = e.sibling), e !== null)) {
			Le = e;
			return;
		}
		Le = e = t;
	} while (e !== null);
	ze === 0 && (ze = 5);
}
function ir(t, e, n) {
	var r = ce,
		i = Ct.transition;
	try {
		(Ct.transition = null), (ce = 1), Dw(t, e, n, r);
	} finally {
		(Ct.transition = i), (ce = r);
	}
	return null;
}
function Dw(t, e, n, r) {
	do ti();
	while (Mn !== null);
	if (le & 6) throw Error(A(327));
	n = t.finishedWork;
	var i = t.finishedLanes;
	if (n === null) return null;
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(A(177));
	(t.callbackNode = null), (t.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(h0(t, o),
		t === He && ((Le = He = null), (We = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			vs ||
			((vs = !0),
			wy(Js, function () {
				return ti(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Ct.transition), (Ct.transition = null);
		var s = ce;
		ce = 1;
		var a = le;
		(le |= 4),
			(td.current = null),
			Rw(t, n),
			cy(n, t),
			Z0(bu),
			(Xs = !!_u),
			(bu = _u = null),
			(t.current = n),
			Pw(n),
			i0(),
			(le = a),
			(ce = s),
			(Ct.transition = o);
	} else t.current = n;
	if (
		(vs && ((vs = !1), (Mn = t), (pa = i)),
		(o = t.pendingLanes),
		o === 0 && (Hn = null),
		a0(n.stateNode),
		ut(t, Ie()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (ha) throw ((ha = !1), (t = Vu), (Vu = null), t);
	return (
		pa & 1 && t.tag !== 0 && ti(),
		(o = t.pendingLanes),
		o & 1 ? (t === Wu ? so++ : ((so = 0), (Wu = t))) : (so = 0),
		Zn(),
		null
	);
}
function ti() {
	if (Mn !== null) {
		var t = Gp(pa),
			e = Ct.transition,
			n = ce;
		try {
			if (((Ct.transition = null), (ce = 16 > t ? 16 : t), Mn === null))
				var r = !1;
			else {
				if (((t = Mn), (Mn = null), (pa = 0), le & 6)) throw Error(A(331));
				var i = le;
				for (le |= 4, W = t.current; W !== null; ) {
					var o = W,
						s = o.child;
					if (W.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (W = u; W !== null; ) {
									var c = W;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											io(8, c, o);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (W = d);
									else
										for (; W !== null; ) {
											c = W;
											var f = c.sibling,
												S = c.return;
											if ((ay(c), c === u)) {
												W = null;
												break;
											}
											if (f !== null) {
												(f.return = S), (W = f);
												break;
											}
											W = S;
										}
								}
							}
							var E = o.alternate;
							if (E !== null) {
								var x = E.child;
								if (x !== null) {
									E.child = null;
									do {
										var C = x.sibling;
										(x.sibling = null), (x = C);
									} while (x !== null);
								}
							}
							W = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (W = s);
					else
						e: for (; W !== null; ) {
							if (((o = W), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										io(9, o, o.return);
								}
							var y = o.sibling;
							if (y !== null) {
								(y.return = o.return), (W = y);
								break e;
							}
							W = o.return;
						}
				}
				var p = t.current;
				for (W = p; W !== null; ) {
					s = W;
					var w = s.child;
					if (s.subtreeFlags & 2064 && w !== null) (w.return = s), (W = w);
					else
						e: for (s = p; W !== null; ) {
							if (((a = W), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											za(9, a);
									}
								} catch (k) {
									Oe(a, a.return, k);
								}
							if (a === s) {
								W = null;
								break e;
							}
							var g = a.sibling;
							if (g !== null) {
								(g.return = a.return), (W = g);
								break e;
							}
							W = a.return;
						}
				}
				if (
					((le = i), Zn(), Wt && typeof Wt.onPostCommitFiberRoot == "function")
				)
					try {
						Wt.onPostCommitFiberRoot(Na, t);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(ce = n), (Ct.transition = e);
		}
	}
	return !1;
}
function qf(t, e, n) {
	(e = di(n, e)),
		(e = Jm(t, e, 1)),
		(t = $n(t, e, 1)),
		(e = nt()),
		t !== null && (Ao(t, 1, e), ut(t, e));
}
function Oe(t, e, n) {
	if (t.tag === 3) qf(t, t, n);
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				qf(e, t, n);
				break;
			} else if (e.tag === 1) {
				var r = e.stateNode;
				if (
					typeof e.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Hn === null || !Hn.has(r)))
				) {
					(t = di(n, t)),
						(t = Ym(e, t, 1)),
						(e = $n(e, t, 1)),
						(t = nt()),
						e !== null && (Ao(e, 1, t), ut(e, t));
					break;
				}
			}
			e = e.return;
		}
}
function jw(t, e, n) {
	var r = t.pingCache;
	r !== null && r.delete(e),
		(e = nt()),
		(t.pingedLanes |= t.suspendedLanes & n),
		He === t &&
			(We & n) === n &&
			(ze === 4 || (ze === 3 && (We & 130023424) === We && 500 > Ie() - rd)
				? fr(t, 0)
				: (nd |= n)),
		ut(t, e);
}
function gy(t, e) {
	e === 0 &&
		(t.mode & 1
			? ((e = ls), (ls <<= 1), !(ls & 130023424) && (ls = 4194304))
			: (e = 1));
	var n = nt();
	(t = mn(t, e)), t !== null && (Ao(t, e, n), ut(t, n));
}
function Lw(t) {
	var e = t.memoizedState,
		n = 0;
	e !== null && (n = e.retryLane), gy(t, n);
}
function Aw(t, e) {
	var n = 0;
	switch (t.tag) {
		case 13:
			var r = t.stateNode,
				i = t.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = t.stateNode;
			break;
		default:
			throw Error(A(314));
	}
	r !== null && r.delete(e), gy(t, n);
}
var vy;
vy = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || at.current) st = !0;
		else {
			if (!(t.lanes & n) && !(e.flags & 128)) return (st = !1), _w(t, e, n);
			st = !!(t.flags & 131072);
		}
	else (st = !1), be && e.flags & 1048576 && Sm(e, oa, e.index);
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type;
			Is(t, e), (t = e.pendingProps);
			var i = ai(e, Xe.current);
			ei(e, n), (i = Jc(null, e, r, t, i, n));
			var o = Yc();
			return (
				(e.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((e.tag = 1),
					  (e.memoizedState = null),
					  (e.updateQueue = null),
					  lt(r) ? ((o = !0), ra(e)) : (o = !1),
					  (e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  Wc(e),
					  (i.updater = Fa),
					  (e.stateNode = i),
					  (i._reactInternals = e),
					  Du(e, r, t, n),
					  (e = Au(null, e, r, !0, o, n)))
					: ((e.tag = 0), be && o && Fc(e), et(null, e, i, n), (e = e.child)),
				e
			);
		case 16:
			r = e.elementType;
			e: {
				switch (
					(Is(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = Fw(r)),
					(t = Dt(r, t)),
					i)
				) {
					case 0:
						e = Lu(null, e, r, t, n);
						break e;
					case 1:
						e = Af(null, e, r, t, n);
						break e;
					case 11:
						e = jf(null, e, r, t, n);
						break e;
					case 14:
						e = Lf(null, e, r, Dt(r.type, t), n);
						break e;
				}
				throw Error(A(306, r, ""));
			}
			return e;
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Dt(r, i)),
				Lu(t, e, r, i, n)
			);
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Dt(r, i)),
				Af(t, e, r, i, n)
			);
		case 3:
			e: {
				if ((ty(e), t === null)) throw Error(A(387));
				(r = e.pendingProps),
					(o = e.memoizedState),
					(i = o.element),
					Cm(t, e),
					la(e, r, null, n);
				var s = e.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(e.updateQueue.baseState = o),
						(e.memoizedState = o),
						e.flags & 256)
					) {
						(i = di(Error(A(423)), e)), (e = Mf(t, e, r, n, i));
						break e;
					} else if (r !== i) {
						(i = di(Error(A(424)), e)), (e = Mf(t, e, r, n, i));
						break e;
					} else
						for (
							ht = Bn(e.stateNode.containerInfo.firstChild),
								pt = e,
								be = !0,
								At = null,
								n = Tm(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((li(), r === i)) {
						e = yn(t, e, n);
						break e;
					}
					et(t, e, r, n);
				}
				e = e.child;
			}
			return e;
		case 5:
			return (
				Om(e),
				t === null && Ou(e),
				(r = e.type),
				(i = e.pendingProps),
				(o = t !== null ? t.memoizedProps : null),
				(s = i.children),
				Cu(r, i) ? (s = null) : o !== null && Cu(r, o) && (e.flags |= 32),
				ey(t, e),
				et(t, e, s, n),
				e.child
			);
		case 6:
			return t === null && Ou(e), null;
		case 13:
			return ny(t, e, n);
		case 4:
			return (
				qc(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = ui(e, null, r, n)) : et(t, e, r, n),
				e.child
			);
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Dt(r, i)),
				jf(t, e, r, i, n)
			);
		case 7:
			return et(t, e, e.pendingProps, n), e.child;
		case 8:
			return et(t, e, e.pendingProps.children, n), e.child;
		case 12:
			return et(t, e, e.pendingProps.children, n), e.child;
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(o = e.memoizedProps),
					(s = i.value),
					ve(sa, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Ut(o.value, s)) {
						if (o.children === i.children && !at.current) {
							e = yn(t, e, n);
							break e;
						}
					} else
						for (o = e.child, o !== null && (o.return = e); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								s = o.child;
								for (var l = a.firstContext; l !== null; ) {
									if (l.context === r) {
										if (o.tag === 1) {
											(l = cn(-1, n & -n)), (l.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (l.next = l)
													: ((l.next = c.next), (c.next = l)),
													(u.pending = l);
											}
										}
										(o.lanes |= n),
											(l = o.alternate),
											l !== null && (l.lanes |= n),
											Iu(o.return, n, e),
											(a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (o.tag === 10) s = o.type === e.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(A(341));
								(s.lanes |= n),
									(a = s.alternate),
									a !== null && (a.lanes |= n),
									Iu(s, n, e),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === e) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				et(t, e, i.children, n), (e = e.child);
			}
			return e;
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				ei(e, n),
				(i = Rt(i)),
				(r = r(i)),
				(e.flags |= 1),
				et(t, e, r, n),
				e.child
			);
		case 14:
			return (
				(r = e.type),
				(i = Dt(r, e.pendingProps)),
				(i = Dt(r.type, i)),
				Lf(t, e, r, i, n)
			);
		case 15:
			return Xm(t, e, e.type, e.pendingProps, n);
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Dt(r, i)),
				Is(t, e),
				(e.tag = 1),
				lt(r) ? ((t = !0), ra(e)) : (t = !1),
				ei(e, n),
				Rm(e, r, i),
				Du(e, r, i, n),
				Au(null, e, r, !0, t, n)
			);
		case 19:
			return ry(t, e, n);
		case 22:
			return Zm(t, e, n);
	}
	throw Error(A(156, e.tag));
};
function wy(t, e) {
	return Wp(t, e);
}
function Mw(t, e, n, r) {
	(this.tag = t),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = e),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function bt(t, e, n, r) {
	return new Mw(t, e, n, r);
}
function ad(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Fw(t) {
	if (typeof t == "function") return ad(t) ? 1 : 0;
	if (t != null) {
		if (((t = t.$$typeof), t === kc)) return 11;
		if (t === Rc) return 14;
	}
	return 2;
}
function Wn(t, e) {
	var n = t.alternate;
	return (
		n === null
			? ((n = bt(t.tag, e, t.key, t.mode)),
			  (n.elementType = t.elementType),
			  (n.type = t.type),
			  (n.stateNode = t.stateNode),
			  (n.alternate = t),
			  (t.alternate = n))
			: ((n.pendingProps = e),
			  (n.type = t.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = t.flags & 14680064),
		(n.childLanes = t.childLanes),
		(n.lanes = t.lanes),
		(n.child = t.child),
		(n.memoizedProps = t.memoizedProps),
		(n.memoizedState = t.memoizedState),
		(n.updateQueue = t.updateQueue),
		(e = t.dependencies),
		(n.dependencies =
			e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
		(n.sibling = t.sibling),
		(n.index = t.index),
		(n.ref = t.ref),
		n
	);
}
function js(t, e, n, r, i, o) {
	var s = 2;
	if (((r = t), typeof t == "function")) ad(t) && (s = 1);
	else if (typeof t == "string") s = 5;
	else
		e: switch (t) {
			case Mr:
				return hr(n.children, i, o, e);
			case Cc:
				(s = 8), (i |= 8);
				break;
			case ru:
				return (
					(t = bt(12, n, e, i | 2)), (t.elementType = ru), (t.lanes = o), t
				);
			case iu:
				return (t = bt(13, n, e, i)), (t.elementType = iu), (t.lanes = o), t;
			case ou:
				return (t = bt(19, n, e, i)), (t.elementType = ou), (t.lanes = o), t;
			case Pp:
				return $a(n, i, o, e);
			default:
				if (typeof t == "object" && t !== null)
					switch (t.$$typeof) {
						case kp:
							s = 10;
							break e;
						case Rp:
							s = 9;
							break e;
						case kc:
							s = 11;
							break e;
						case Rc:
							s = 14;
							break e;
						case Pn:
							(s = 16), (r = null);
							break e;
					}
				throw Error(A(130, t == null ? t : typeof t, ""));
		}
	return (
		(e = bt(s, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
	);
}
function hr(t, e, n, r) {
	return (t = bt(7, t, r, e)), (t.lanes = n), t;
}
function $a(t, e, n, r) {
	return (
		(t = bt(22, t, r, e)),
		(t.elementType = Pp),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	);
}
function Fl(t, e, n) {
	return (t = bt(6, t, null, e)), (t.lanes = n), t;
}
function Ul(t, e, n) {
	return (
		(e = bt(4, t.children !== null ? t.children : [], t.key, e)),
		(e.lanes = n),
		(e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation,
		}),
		e
	);
}
function Uw(t, e, n, r, i) {
	(this.tag = e),
		(this.containerInfo = t),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = wl(0)),
		(this.expirationTimes = wl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = wl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function ld(t, e, n, r, i, o, s, a, l) {
	return (
		(t = new Uw(t, e, n, a, l)),
		e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
		(o = bt(3, null, null, e)),
		(t.current = o),
		(o.stateNode = t),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Wc(o),
		t
	);
}
function zw(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Ar,
		key: r == null ? null : "" + r,
		children: t,
		containerInfo: e,
		implementation: n,
	};
}
function Ey(t) {
	if (!t) return Jn;
	t = t._reactInternals;
	e: {
		if (Cr(t) !== t || t.tag !== 1) throw Error(A(170));
		var e = t;
		do {
			switch (e.tag) {
				case 3:
					e = e.stateNode.context;
					break e;
				case 1:
					if (lt(e.type)) {
						e = e.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			e = e.return;
		} while (e !== null);
		throw Error(A(171));
	}
	if (t.tag === 1) {
		var n = t.type;
		if (lt(n)) return wm(t, n, e);
	}
	return e;
}
function Sy(t, e, n, r, i, o, s, a, l) {
	return (
		(t = ld(n, r, !0, t, i, o, s, a, l)),
		(t.context = Ey(null)),
		(n = t.current),
		(r = nt()),
		(i = Vn(n)),
		(o = cn(r, i)),
		(o.callback = e ?? null),
		$n(n, o, i),
		(t.current.lanes = i),
		Ao(t, i, r),
		ut(t, r),
		t
	);
}
function Ha(t, e, n, r) {
	var i = e.current,
		o = nt(),
		s = Vn(i);
	return (
		(n = Ey(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = cn(o, s)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = $n(i, e, s)),
		t !== null && (Ft(t, i, s, o), Ps(t, i, s)),
		s
	);
}
function ya(t) {
	if (((t = t.current), !t.child)) return null;
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode;
		default:
			return t.child.stateNode;
	}
}
function Qf(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane;
		t.retryLane = n !== 0 && n < e ? n : e;
	}
}
function ud(t, e) {
	Qf(t, e), (t = t.alternate) && Qf(t, e);
}
function Bw() {
	return null;
}
var xy =
	typeof reportError == "function"
		? reportError
		: function (t) {
				console.error(t);
		  };
function cd(t) {
	this._internalRoot = t;
}
Va.prototype.render = cd.prototype.render = function (t) {
	var e = this._internalRoot;
	if (e === null) throw Error(A(409));
	Ha(t, e, null, null);
};
Va.prototype.unmount = cd.prototype.unmount = function () {
	var t = this._internalRoot;
	if (t !== null) {
		this._internalRoot = null;
		var e = t.containerInfo;
		wr(function () {
			Ha(null, t, null, null);
		}),
			(e[pn] = null);
	}
};
function Va(t) {
	this._internalRoot = t;
}
Va.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = Xp();
		t = { blockedOn: null, target: t, priority: e };
		for (var n = 0; n < In.length && e !== 0 && e < In[n].priority; n++);
		In.splice(n, 0, t), n === 0 && em(t);
	}
};
function dd(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Wa(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
	);
}
function Kf() {}
function $w(t, e, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = ya(s);
				o.call(u);
			};
		}
		var s = Sy(e, r, t, 0, null, !1, !1, "", Kf);
		return (
			(t._reactRootContainer = s),
			(t[pn] = s.current),
			vo(t.nodeType === 8 ? t.parentNode : t),
			wr(),
			s
		);
	}
	for (; (i = t.lastChild); ) t.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = ya(l);
			a.call(u);
		};
	}
	var l = ld(t, 0, !1, null, null, !1, !1, "", Kf);
	return (
		(t._reactRootContainer = l),
		(t[pn] = l.current),
		vo(t.nodeType === 8 ? t.parentNode : t),
		wr(function () {
			Ha(e, l, n, r);
		}),
		l
	);
}
function qa(t, e, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var l = ya(s);
				a.call(l);
			};
		}
		Ha(e, s, t, i);
	} else s = $w(n, e, t, i, r);
	return ya(s);
}
Jp = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode;
			if (e.current.memoizedState.isDehydrated) {
				var n = Qi(e.pendingLanes);
				n !== 0 &&
					(Oc(e, n | 1), ut(e, Ie()), !(le & 6) && ((fi = Ie() + 500), Zn()));
			}
			break;
		case 13:
			wr(function () {
				var r = mn(t, 1);
				if (r !== null) {
					var i = nt();
					Ft(r, t, 1, i);
				}
			}),
				ud(t, 1);
	}
};
Ic = function (t) {
	if (t.tag === 13) {
		var e = mn(t, 134217728);
		if (e !== null) {
			var n = nt();
			Ft(e, t, 134217728, n);
		}
		ud(t, 134217728);
	}
};
Yp = function (t) {
	if (t.tag === 13) {
		var e = Vn(t),
			n = mn(t, e);
		if (n !== null) {
			var r = nt();
			Ft(n, t, e, r);
		}
		ud(t, e);
	}
};
Xp = function () {
	return ce;
};
Zp = function (t, e) {
	var n = ce;
	try {
		return (ce = t), e();
	} finally {
		ce = n;
	}
};
mu = function (t, e, n) {
	switch (e) {
		case "input":
			if ((lu(t, n), (e = n.name), n.type === "radio" && e != null)) {
				for (n = t; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + e) + '][type="radio"]'
					),
						e = 0;
					e < n.length;
					e++
				) {
					var r = n[e];
					if (r !== t && r.form === t.form) {
						var i = Aa(r);
						if (!i) throw Error(A(90));
						Op(r), lu(r, i);
					}
				}
			}
			break;
		case "textarea":
			Np(t, n);
			break;
		case "select":
			(e = n.value), e != null && Jr(t, !!n.multiple, e, !1);
	}
};
Up = id;
zp = wr;
var Hw = { usingClientEntryPoint: !1, Events: [Fo, Br, Aa, Mp, Fp, id] },
	Ui = {
		findFiberByHostInstance: sr,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	Vw = {
		bundleType: Ui.bundleType,
		version: Ui.version,
		rendererPackageName: Ui.rendererPackageName,
		rendererConfig: Ui.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: wn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (t) {
			return (t = Hp(t)), t === null ? null : t.stateNode;
		},
		findFiberByHostInstance: Ui.findFiberByHostInstance || Bw,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ws.isDisabled && ws.supportsFiber)
		try {
			(Na = ws.inject(Vw)), (Wt = ws);
		} catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hw;
yt.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!dd(e)) throw Error(A(200));
	return zw(t, e, null, n);
};
yt.createRoot = function (t, e) {
	if (!dd(t)) throw Error(A(299));
	var n = !1,
		r = "",
		i = xy;
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = ld(t, 1, !1, null, null, n, !1, r, i)),
		(t[pn] = e.current),
		vo(t.nodeType === 8 ? t.parentNode : t),
		new cd(e)
	);
};
yt.findDOMNode = function (t) {
	if (t == null) return null;
	if (t.nodeType === 1) return t;
	var e = t._reactInternals;
	if (e === void 0)
		throw typeof t.render == "function"
			? Error(A(188))
			: ((t = Object.keys(t).join(",")), Error(A(268, t)));
	return (t = Hp(e)), (t = t === null ? null : t.stateNode), t;
};
yt.flushSync = function (t) {
	return wr(t);
};
yt.hydrate = function (t, e, n) {
	if (!Wa(e)) throw Error(A(200));
	return qa(null, t, e, !0, n);
};
yt.hydrateRoot = function (t, e, n) {
	if (!dd(t)) throw Error(A(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = xy;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(e = Sy(e, null, t, 1, n ?? null, i, !1, o, s)),
		(t[pn] = e.current),
		vo(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i);
	return new Va(e);
};
yt.render = function (t, e, n) {
	if (!Wa(e)) throw Error(A(200));
	return qa(null, t, e, !1, n);
};
yt.unmountComponentAtNode = function (t) {
	if (!Wa(t)) throw Error(A(40));
	return t._reactRootContainer
		? (wr(function () {
				qa(null, null, t, !1, function () {
					(t._reactRootContainer = null), (t[pn] = null);
				});
		  }),
		  !0)
		: !1;
};
yt.unstable_batchedUpdates = id;
yt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!Wa(n)) throw Error(A(200));
	if (t == null || t._reactInternals === void 0) throw Error(A(38));
	return qa(t, e, n, !1, r);
};
yt.version = "18.2.0-next-9e3b772b8-20220608";
function _y() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y);
		} catch (t) {
			console.error(t);
		}
}
_y(), (Sp.exports = yt);
var by = Sp.exports,
	Gf = by;
(tu.createRoot = Gf.createRoot), (tu.hydrateRoot = Gf.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _e() {
	return (
		(_e = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
			  }),
		_e.apply(this, arguments)
	);
}
var De;
(function (t) {
	(t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(De || (De = {}));
const Jf = "popstate";
function Ww(t) {
	t === void 0 && (t = {});
	function e(r, i) {
		let { pathname: o, search: s, hash: a } = r.location;
		return Ro(
			"",
			{ pathname: o, search: s, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : Er(i);
	}
	return Qw(e, n, null, t);
}
function oe(t, e) {
	if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function hi(t, e) {
	if (!t) {
		typeof console < "u" && console.warn(e);
		try {
			throw new Error(e);
		} catch {}
	}
}
function qw() {
	return Math.random().toString(36).substr(2, 8);
}
function Yf(t, e) {
	return { usr: t.state, key: t.key, idx: e };
}
function Ro(t, e, n, r) {
	return (
		n === void 0 && (n = null),
		_e(
			{ pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
			typeof e == "string" ? En(e) : e,
			{ state: n, key: (e && e.key) || r || qw() }
		)
	);
}
function Er(t) {
	let { pathname: e = "/", search: n = "", hash: r = "" } = t;
	return (
		n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
		e
	);
}
function En(t) {
	let e = {};
	if (t) {
		let n = t.indexOf("#");
		n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
		let r = t.indexOf("?");
		r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
			t && (e.pathname = t);
	}
	return e;
}
function Qw(t, e, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		a = De.Pop,
		l = null,
		u = c();
	u == null && ((u = 0), s.replaceState(_e({}, s.state, { idx: u }), ""));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function d() {
		a = De.Pop;
		let C = c(),
			y = C == null ? null : C - u;
		(u = C), l && l({ action: a, location: x.location, delta: y });
	}
	function f(C, y) {
		a = De.Push;
		let p = Ro(x.location, C, y);
		n && n(p, C), (u = c() + 1);
		let w = Yf(p, u),
			g = x.createHref(p);
		try {
			s.pushState(w, "", g);
		} catch (k) {
			if (k instanceof DOMException && k.name === "DataCloneError") throw k;
			i.location.assign(g);
		}
		o && l && l({ action: a, location: x.location, delta: 1 });
	}
	function S(C, y) {
		a = De.Replace;
		let p = Ro(x.location, C, y);
		n && n(p, C), (u = c());
		let w = Yf(p, u),
			g = x.createHref(p);
		s.replaceState(w, "", g),
			o && l && l({ action: a, location: x.location, delta: 0 });
	}
	function E(C) {
		let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
			p = typeof C == "string" ? C : Er(C);
		return (
			oe(
				y,
				"No window.location.(origin|href) available to create URL for href: " +
					p
			),
			new URL(p, y)
		);
	}
	let x = {
		get action() {
			return a;
		},
		get location() {
			return t(i, s);
		},
		listen(C) {
			if (l) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Jf, d),
				(l = C),
				() => {
					i.removeEventListener(Jf, d), (l = null);
				}
			);
		},
		createHref(C) {
			return e(i, C);
		},
		createURL: E,
		encodeLocation(C) {
			let y = E(C);
			return { pathname: y.pathname, search: y.search, hash: y.hash };
		},
		push: f,
		replace: S,
		go(C) {
			return s.go(C);
		},
	};
	return x;
}
var Fe;
(function (t) {
	(t.data = "data"),
		(t.deferred = "deferred"),
		(t.redirect = "redirect"),
		(t.error = "error");
})(Fe || (Fe = {}));
const Kw = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function Gw(t) {
	return t.index === !0;
}
function Ku(t, e, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		t.map((i, o) => {
			let s = [...n, o],
				a = typeof i.id == "string" ? i.id : s.join("-");
			if (
				(oe(
					i.index !== !0 || !i.children,
					"Cannot specify children on an index route"
				),
				oe(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				Gw(i))
			) {
				let l = _e({}, i, e(i), { id: a });
				return (r[a] = l), l;
			} else {
				let l = _e({}, i, e(i), { id: a, children: void 0 });
				return (
					(r[a] = l), i.children && (l.children = Ku(i.children, e, s, r)), l
				);
			}
		})
	);
}
function Kr(t, e, n) {
	n === void 0 && (n = "/");
	let r = typeof e == "string" ? En(e) : e,
		i = _i(r.pathname || "/", n);
	if (i == null) return null;
	let o = Cy(t);
	Jw(o);
	let s = null;
	for (let a = 0; s == null && a < o.length; ++a) s = o1(o[a], l1(i));
	return s;
}
function Cy(t, e, n, r) {
	e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, s, a) => {
		let l = {
			relativePath: a === void 0 ? o.path || "" : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		l.relativePath.startsWith("/") &&
			(oe(
				l.relativePath.startsWith(r),
				'Absolute route path "' +
					l.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(l.relativePath = l.relativePath.slice(r.length)));
		let u = dn([r, l.relativePath]),
			c = n.concat(l);
		o.children &&
			o.children.length > 0 &&
			(oe(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			Cy(o.children, e, c, u)),
			!(o.path == null && !o.index) &&
				e.push({ path: u, score: r1(u, o.index), routesMeta: c });
	};
	return (
		t.forEach((o, s) => {
			var a;
			if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
			else for (let l of ky(o.path)) i(o, s, l);
		}),
		e
	);
}
function ky(t) {
	let e = t.split("/");
	if (e.length === 0) return [];
	let [n, ...r] = e,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let s = ky(r.join("/")),
		a = [];
	return (
		a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
		i && a.push(...s),
		a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
	);
}
function Jw(t) {
	t.sort((e, n) =>
		e.score !== n.score
			? n.score - e.score
			: i1(
					e.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Yw = /^:\w+$/,
	Xw = 3,
	Zw = 2,
	e1 = 1,
	t1 = 10,
	n1 = -2,
	Xf = (t) => t === "*";
function r1(t, e) {
	let n = t.split("/"),
		r = n.length;
	return (
		n.some(Xf) && (r += n1),
		e && (r += Zw),
		n
			.filter((i) => !Xf(i))
			.reduce((i, o) => i + (Yw.test(o) ? Xw : o === "" ? e1 : t1), r)
	);
}
function i1(t, e) {
	return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
		? t[t.length - 1] - e[e.length - 1]
		: 0;
}
function o1(t, e) {
	let { routesMeta: n } = t,
		r = {},
		i = "/",
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let a = n[s],
			l = s === n.length - 1,
			u = i === "/" ? e : e.slice(i.length) || "/",
			c = s1(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
				u
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = a.route;
		o.push({
			params: r,
			pathname: dn([i, c.pathname]),
			pathnameBase: f1(dn([i, c.pathnameBase])),
			route: d,
		}),
			c.pathnameBase !== "/" && (i = dn([i, c.pathnameBase]));
	}
	return o;
}
function s1(t, e) {
	typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
	let [n, r] = a1(t.path, t.caseSensitive, t.end),
		i = e.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((u, c, d) => {
			if (c === "*") {
				let f = a[d] || "";
				s = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
			}
			return (u[c] = u1(a[d] || "", c)), u;
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: t,
	};
}
function a1(t, e, n) {
	e === void 0 && (e = !1),
		n === void 0 && (n = !0),
		hi(
			t === "*" || !t.endsWith("*") || t.endsWith("/*"),
			'Route path "' +
				t +
				'" will be treated as if it were ' +
				('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			t
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
	return (
		t.endsWith("*")
			? (r.push("*"),
			  (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, e ? void 0 : "i"), r]
	);
}
function l1(t) {
	try {
		return decodeURI(t);
	} catch (e) {
		return (
			hi(
				!1,
				'The URL path "' +
					t +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + e + ").")
			),
			t
		);
	}
}
function u1(t, e) {
	try {
		return decodeURIComponent(t);
	} catch (n) {
		return (
			hi(
				!1,
				'The value for the URL param "' +
					e +
					'" will not be decoded because' +
					(' the string "' +
						t +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			t
		);
	}
}
function _i(t, e) {
	if (e === "/") return t;
	if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
	let n = e.endsWith("/") ? e.length - 1 : e.length,
		r = t.charAt(n);
	return r && r !== "/" ? null : t.slice(n) || "/";
}
function c1(t, e) {
	e === void 0 && (e = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof t == "string" ? En(t) : t;
	return {
		pathname: n ? (n.startsWith("/") ? n : d1(n, e)) : e,
		search: h1(r),
		hash: p1(i),
	};
}
function d1(t, e) {
	let n = e.replace(/\/+$/, "").split("/");
	return (
		t.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function zl(t, e, n, r) {
	return (
		"Cannot include a '" +
		t +
		"' character in a manually specified " +
		("`to." +
			e +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Qa(t) {
	return t.filter(
		(e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
	);
}
function fd(t, e, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof t == "string"
		? (i = En(t))
		: ((i = _e({}, t)),
		  oe(
				!i.pathname || !i.pathname.includes("?"),
				zl("?", "pathname", "search", i)
		  ),
		  oe(
				!i.pathname || !i.pathname.includes("#"),
				zl("#", "pathname", "hash", i)
		  ),
		  oe(!i.search || !i.search.includes("#"), zl("#", "search", "hash", i)));
	let o = t === "" || i.pathname === "",
		s = o ? "/" : i.pathname,
		a;
	if (r || s == null) a = n;
	else {
		let d = e.length - 1;
		if (s.startsWith("..")) {
			let f = s.split("/");
			for (; f[0] === ".."; ) f.shift(), (d -= 1);
			i.pathname = f.join("/");
		}
		a = d >= 0 ? e[d] : "/";
	}
	let l = c1(i, a),
		u = s && s !== "/" && s.endsWith("/"),
		c = (o || s === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const dn = (t) => t.join("/").replace(/\/\/+/g, "/"),
	f1 = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
	h1 = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
	p1 = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class hd {
	constructor(e, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = e),
			(this.statusText = n || ""),
			(this.internal = i),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function Ry(t) {
	return (
		t != null &&
		typeof t.status == "number" &&
		typeof t.statusText == "string" &&
		typeof t.internal == "boolean" &&
		"data" in t
	);
}
const Py = ["post", "put", "patch", "delete"],
	m1 = new Set(Py),
	y1 = ["get", ...Py],
	g1 = new Set(y1),
	v1 = new Set([301, 302, 303, 307, 308]),
	w1 = new Set([307, 308]),
	Bl = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	E1 = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	zi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	Ty = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	S1 = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary });
function x1(t) {
	const e = t.window ? t.window : typeof window < "u" ? window : void 0,
		n =
			typeof e < "u" &&
			typeof e.document < "u" &&
			typeof e.document.createElement < "u",
		r = !n;
	oe(
		t.routes.length > 0,
		"You must provide a non-empty routes array to createRouter"
	);
	let i;
	if (t.mapRouteProperties) i = t.mapRouteProperties;
	else if (t.detectErrorBoundary) {
		let m = t.detectErrorBoundary;
		i = (v) => ({ hasErrorBoundary: m(v) });
	} else i = S1;
	let o = {},
		s = Ku(t.routes, i, void 0, o),
		a,
		l = t.basename || "/",
		u = _e({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, t.future),
		c = null,
		d = new Set(),
		f = null,
		S = null,
		E = null,
		x = t.hydrationData != null,
		C = Kr(s, t.history.location, l),
		y = null;
	if (C == null) {
		let m = Et(404, { pathname: t.history.location.pathname }),
			{ matches: v, route: _ } = sh(s);
		(C = v), (y = { [_.id]: m });
	}
	let p =
			!C.some((m) => m.route.lazy) &&
			(!C.some((m) => m.route.loader) || t.hydrationData != null),
		w,
		g = {
			historyAction: t.history.action,
			location: t.history.location,
			matches: C,
			initialized: p,
			navigation: Bl,
			restoreScrollPosition: t.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
			actionData: (t.hydrationData && t.hydrationData.actionData) || null,
			errors: (t.hydrationData && t.hydrationData.errors) || y,
			fetchers: new Map(),
			blockers: new Map(),
		},
		k = De.Pop,
		P = !1,
		T,
		R = !1,
		B = !1,
		H = [],
		Z = [],
		K = new Map(),
		pe = 0,
		we = -1,
		Te = new Map(),
		de = new Set(),
		Ce = new Map(),
		F = new Map(),
		Q = new Map(),
		q = !1;
	function ne() {
		return (
			(c = t.history.listen((m) => {
				let { action: v, location: _, delta: I } = m;
				if (q) {
					q = !1;
					return;
				}
				hi(
					Q.size === 0 || I != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
				);
				let D = j({
					currentLocation: g.location,
					nextLocation: _,
					historyAction: v,
				});
				if (D && I != null) {
					(q = !0),
						t.history.go(I * -1),
						Dr(D, {
							state: "blocked",
							location: _,
							proceed() {
								Dr(D, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: _,
								}),
									t.history.go(I);
							},
							reset() {
								let U = new Map(g.blockers);
								U.set(D, zi), J({ blockers: U });
							},
						});
					return;
				}
				return Ne(v, _);
			})),
			g.initialized || Ne(De.Pop, g.location),
			w
		);
	}
	function re() {
		c && c(),
			d.clear(),
			T && T.abort(),
			g.fetchers.forEach((m, v) => Ti(v)),
			g.blockers.forEach((m, v) => Nr(v));
	}
	function Ee(m) {
		return d.add(m), () => d.delete(m);
	}
	function J(m) {
		(g = _e({}, g, m)), d.forEach((v) => v(g));
	}
	function ye(m, v) {
		var _, I;
		let D =
				g.actionData != null &&
				g.navigation.formMethod != null &&
				Lt(g.navigation.formMethod) &&
				g.navigation.state === "loading" &&
				((_ = m.state) == null ? void 0 : _._isRedirect) !== !0,
			U;
		v.actionData
			? Object.keys(v.actionData).length > 0
				? (U = v.actionData)
				: (U = null)
			: D
			? (U = g.actionData)
			: (U = null);
		let V = v.loaderData
				? oh(g.loaderData, v.loaderData, v.matches || [], v.errors)
				: g.loaderData,
			$ = g.blockers;
		$.size > 0 && (($ = new Map($)), $.forEach((X, ie) => $.set(ie, zi)));
		let z =
			P === !0 ||
			(g.navigation.formMethod != null &&
				Lt(g.navigation.formMethod) &&
				((I = m.state) == null ? void 0 : I._isRedirect) !== !0);
		a && ((s = a), (a = void 0)),
			R ||
				k === De.Pop ||
				(k === De.Push
					? t.history.push(m, m.state)
					: k === De.Replace && t.history.replace(m, m.state)),
			J(
				_e({}, v, {
					actionData: U,
					loaderData: V,
					historyAction: k,
					location: m,
					initialized: !0,
					navigation: Bl,
					revalidation: "idle",
					restoreScrollPosition: te(m, v.matches || g.matches),
					preventScrollReset: z,
					blockers: $,
				})
			),
			(k = De.Pop),
			(P = !1),
			(R = !1),
			(B = !1),
			(H = []),
			(Z = []);
	}
	async function Qe(m, v) {
		if (typeof m == "number") {
			t.history.go(m);
			return;
		}
		let _ = Gu(
				g.location,
				g.matches,
				l,
				u.v7_prependBasename,
				m,
				v == null ? void 0 : v.fromRouteId,
				v == null ? void 0 : v.relative
			),
			{
				path: I,
				submission: D,
				error: U,
			} = Zf(u.v7_normalizeFormMethod, !1, _, v),
			V = g.location,
			$ = Ro(g.location, I, v && v.state);
		$ = _e({}, $, t.history.encodeLocation($));
		let z = v && v.replace != null ? v.replace : void 0,
			X = De.Push;
		z === !0
			? (X = De.Replace)
			: z === !1 ||
			  (D != null &&
					Lt(D.formMethod) &&
					D.formAction === g.location.pathname + g.location.search &&
					(X = De.Replace));
		let ie =
				v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0,
			Y = j({ currentLocation: V, nextLocation: $, historyAction: X });
		if (Y) {
			Dr(Y, {
				state: "blocked",
				location: $,
				proceed() {
					Dr(Y, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: $,
					}),
						Qe(m, v);
				},
				reset() {
					let fe = new Map(g.blockers);
					fe.set(Y, zi), J({ blockers: fe });
				},
			});
			return;
		}
		return await Ne(X, $, {
			submission: D,
			pendingError: U,
			preventScrollReset: ie,
			replace: v && v.replace,
		});
	}
	function Ot() {
		if (
			(Tr(),
			J({ revalidation: "loading" }),
			g.navigation.state !== "submitting")
		) {
			if (g.navigation.state === "idle") {
				Ne(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Ne(k || g.historyAction, g.navigation.location, {
				overrideNavigation: g.navigation,
			});
		}
	}
	async function Ne(m, v, _) {
		T && T.abort(),
			(T = null),
			(k = m),
			(R = (_ && _.startUninterruptedRevalidation) === !0),
			ee(g.location, g.matches),
			(P = (_ && _.preventScrollReset) === !0);
		let I = a || s,
			D = _ && _.overrideNavigation,
			U = Kr(I, v, l);
		if (!U) {
			let fe = Et(404, { pathname: v.pathname }),
				{ matches: ge, route: wt } = sh(I);
			b(), ye(v, { matches: ge, loaderData: {}, errors: { [wt.id]: fe } });
			return;
		}
		if (
			g.initialized &&
			!B &&
			R1(g.location, v) &&
			!(_ && _.submission && Lt(_.submission.formMethod))
		) {
			ye(v, { matches: U });
			return;
		}
		T = new AbortController();
		let V = $i(t.history, v, T.signal, _ && _.submission),
			$,
			z;
		if (_ && _.pendingError) z = { [Gr(U).route.id]: _.pendingError };
		else if (_ && _.submission && Lt(_.submission.formMethod)) {
			let fe = await Pr(V, v, _.submission, U, { replace: _.replace });
			if (fe.shortCircuited) return;
			($ = fe.pendingActionData),
				(z = fe.pendingActionError),
				(D = Es(v, _.submission)),
				(V = new Request(V.url, { signal: V.signal }));
		}
		let {
			shortCircuited: X,
			loaderData: ie,
			errors: Y,
		} = await Jt(
			V,
			v,
			U,
			D,
			_ && _.submission,
			_ && _.fetcherSubmission,
			_ && _.replace,
			$,
			z
		);
		X ||
			((T = null),
			ye(
				v,
				_e({ matches: U }, $ ? { actionData: $ } : {}, {
					loaderData: ie,
					errors: Y,
				})
			));
	}
	async function Pr(m, v, _, I, D) {
		D === void 0 && (D = {}), Tr();
		let U = N1(v, _);
		J({ navigation: U });
		let V,
			$ = Yu(I, v);
		if (!$.route.action && !$.route.lazy)
			V = {
				type: Fe.error,
				error: Et(405, {
					method: m.method,
					pathname: v.pathname,
					routeId: $.route.id,
				}),
			};
		else if (((V = await Bi("action", m, $, I, o, i, l)), m.signal.aborted))
			return { shortCircuited: !0 };
		if (ni(V)) {
			let z;
			return (
				D && D.replace != null
					? (z = D.replace)
					: (z = V.location === g.location.pathname + g.location.search),
				await vt(g, V, { submission: _, replace: z }),
				{ shortCircuited: !0 }
			);
		}
		if (ao(V)) {
			let z = Gr(I, $.route.id);
			return (
				(D && D.replace) !== !0 && (k = De.Push),
				{ pendingActionData: {}, pendingActionError: { [z.route.id]: V.error } }
			);
		}
		if (ur(V)) throw Et(400, { type: "defer-action" });
		return { pendingActionData: { [$.route.id]: V.data } };
	}
	async function Jt(m, v, _, I, D, U, V, $, z) {
		let X = I || Es(v, D),
			ie = D || U || uh(X),
			Y = a || s,
			[fe, ge] = eh(t.history, g, _, ie, v, B, H, Z, Ce, de, Y, l, $, z);
		if (
			(b(
				(he) =>
					!(_ && _.some((It) => It.route.id === he)) ||
					(fe && fe.some((It) => It.route.id === he))
			),
			(we = ++pe),
			fe.length === 0 && ge.length === 0)
		) {
			let he = Oi();
			return (
				ye(
					v,
					_e(
						{ matches: _, loaderData: {}, errors: z || null },
						$ ? { actionData: $ } : {},
						he ? { fetchers: new Map(g.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!R) {
			ge.forEach((It) => {
				let bn = g.fetchers.get(It.key),
					hl = Hi(void 0, bn ? bn.data : void 0);
				g.fetchers.set(It.key, hl);
			});
			let he = $ || g.actionData;
			J(
				_e(
					{ navigation: X },
					he
						? Object.keys(he).length === 0
							? { actionData: null }
							: { actionData: he }
						: {},
					ge.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
				)
			);
		}
		ge.forEach((he) => {
			K.has(he.key) && dt(he.key),
				he.controller && K.set(he.key, he.controller);
		});
		let wt = () => ge.forEach((he) => dt(he.key));
		T && T.signal.addEventListener("abort", wt);
		let {
			results: zt,
			loaderResults: _n,
			fetcherResults: ul,
		} = await es(g.matches, _, fe, ge, m);
		if (m.signal.aborted) return { shortCircuited: !0 };
		T && T.signal.removeEventListener("abort", wt),
			ge.forEach((he) => K.delete(he.key));
		let Yt = ah(zt);
		if (Yt) {
			if (Yt.idx >= fe.length) {
				let he = ge[Yt.idx - fe.length].key;
				de.add(he);
			}
			return await vt(g, Yt.result, { replace: V }), { shortCircuited: !0 };
		}
		let { loaderData: Xt, errors: ns } = ih(g, _, fe, _n, z, ge, ul, F);
		F.forEach((he, It) => {
			he.subscribe((bn) => {
				(bn || he.done) && F.delete(It);
			});
		});
		let cl = Oi(),
			dl = Or(we),
			fl = cl || dl || ge.length > 0;
		return _e(
			{ loaderData: Xt, errors: ns },
			fl ? { fetchers: new Map(g.fetchers) } : {}
		);
	}
	function Ae(m) {
		return g.fetchers.get(m) || E1;
	}
	function Ke(m, v, _, I) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		K.has(m) && dt(m);
		let D = a || s,
			U = Gu(
				g.location,
				g.matches,
				l,
				u.v7_prependBasename,
				_,
				v,
				I == null ? void 0 : I.relative
			),
			V = Kr(D, U, l);
		if (!V) {
			nr(m, v, Et(404, { pathname: U }));
			return;
		}
		let {
			path: $,
			submission: z,
			error: X,
		} = Zf(u.v7_normalizeFormMethod, !0, U, I);
		if (X) {
			nr(m, v, X);
			return;
		}
		let ie = Yu(V, $);
		if (((P = (I && I.preventScrollReset) === !0), z && Lt(z.formMethod))) {
			ct(m, v, $, ie, V, z);
			return;
		}
		Ce.set(m, { routeId: v, path: $ }), Zo(m, v, $, ie, V, z);
	}
	async function ct(m, v, _, I, D, U) {
		if ((Tr(), Ce.delete(m), !I.route.action && !I.route.lazy)) {
			let Me = Et(405, { method: U.formMethod, pathname: _, routeId: v });
			nr(m, v, Me);
			return;
		}
		let V = g.fetchers.get(m),
			$ = D1(U, V);
		g.fetchers.set(m, $), J({ fetchers: new Map(g.fetchers) });
		let z = new AbortController(),
			X = $i(t.history, _, z.signal, U);
		K.set(m, z);
		let ie = pe,
			Y = await Bi("action", X, I, D, o, i, l);
		if (X.signal.aborted) {
			K.get(m) === z && K.delete(m);
			return;
		}
		if (ni(Y))
			if ((K.delete(m), we > ie)) {
				let Me = Lr(void 0);
				g.fetchers.set(m, Me), J({ fetchers: new Map(g.fetchers) });
				return;
			} else {
				de.add(m);
				let Me = Hi(U);
				return (
					g.fetchers.set(m, Me),
					J({ fetchers: new Map(g.fetchers) }),
					vt(g, Y, { submission: U, isFetchActionRedirect: !0 })
				);
			}
		if (ao(Y)) {
			nr(m, v, Y.error);
			return;
		}
		if (ur(Y)) throw Et(400, { type: "defer-action" });
		let fe = g.navigation.location || g.location,
			ge = $i(t.history, fe, z.signal),
			wt = a || s,
			zt =
				g.navigation.state !== "idle"
					? Kr(wt, g.navigation.location, l)
					: g.matches;
		oe(zt, "Didn't find any matches after fetcher action");
		let _n = ++pe;
		Te.set(m, _n);
		let ul = Hi(U, Y.data);
		g.fetchers.set(m, ul);
		let [Yt, Xt] = eh(
			t.history,
			g,
			zt,
			U,
			fe,
			B,
			H,
			Z,
			Ce,
			de,
			wt,
			l,
			{ [I.route.id]: Y.data },
			void 0
		);
		Xt.filter((Me) => Me.key !== m).forEach((Me) => {
			let Ii = Me.key,
				Ud = g.fetchers.get(Ii),
				gv = Hi(void 0, Ud ? Ud.data : void 0);
			g.fetchers.set(Ii, gv),
				K.has(Ii) && dt(Ii),
				Me.controller && K.set(Ii, Me.controller);
		}),
			J({ fetchers: new Map(g.fetchers) });
		let ns = () => Xt.forEach((Me) => dt(Me.key));
		z.signal.addEventListener("abort", ns);
		let {
			results: cl,
			loaderResults: dl,
			fetcherResults: fl,
		} = await es(g.matches, zt, Yt, Xt, ge);
		if (z.signal.aborted) return;
		z.signal.removeEventListener("abort", ns),
			Te.delete(m),
			K.delete(m),
			Xt.forEach((Me) => K.delete(Me.key));
		let he = ah(cl);
		if (he) {
			if (he.idx >= Yt.length) {
				let Me = Xt[he.idx - Yt.length].key;
				de.add(Me);
			}
			return vt(g, he.result);
		}
		let { loaderData: It, errors: bn } = ih(
			g,
			g.matches,
			Yt,
			dl,
			void 0,
			Xt,
			fl,
			F
		);
		if (g.fetchers.has(m)) {
			let Me = Lr(Y.data);
			g.fetchers.set(m, Me);
		}
		let hl = Or(_n);
		g.navigation.state === "loading" && _n > we
			? (oe(k, "Expected pending action"),
			  T && T.abort(),
			  ye(g.navigation.location, {
					matches: zt,
					loaderData: It,
					errors: bn,
					fetchers: new Map(g.fetchers),
			  }))
			: (J(
					_e(
						{ errors: bn, loaderData: oh(g.loaderData, It, zt, bn) },
						hl || Xt.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
					)
			  ),
			  (B = !1));
	}
	async function Zo(m, v, _, I, D, U) {
		let V = g.fetchers.get(m),
			$ = Hi(U, V ? V.data : void 0);
		g.fetchers.set(m, $), J({ fetchers: new Map(g.fetchers) });
		let z = new AbortController(),
			X = $i(t.history, _, z.signal);
		K.set(m, z);
		let ie = pe,
			Y = await Bi("loader", X, I, D, o, i, l);
		if (
			(ur(Y) && (Y = (await Ny(Y, X.signal, !0)) || Y),
			K.get(m) === z && K.delete(m),
			X.signal.aborted)
		)
			return;
		if (ni(Y))
			if (we > ie) {
				let ge = Lr(void 0);
				g.fetchers.set(m, ge), J({ fetchers: new Map(g.fetchers) });
				return;
			} else {
				de.add(m), await vt(g, Y);
				return;
			}
		if (ao(Y)) {
			let ge = Gr(g.matches, v);
			g.fetchers.delete(m),
				J({
					fetchers: new Map(g.fetchers),
					errors: { [ge.route.id]: Y.error },
				});
			return;
		}
		oe(!ur(Y), "Unhandled fetcher deferred data");
		let fe = Lr(Y.data);
		g.fetchers.set(m, fe), J({ fetchers: new Map(g.fetchers) });
	}
	async function vt(m, v, _) {
		let {
			submission: I,
			replace: D,
			isFetchActionRedirect: U,
		} = _ === void 0 ? {} : _;
		v.revalidate && (B = !0);
		let V = Ro(
			m.location,
			v.location,
			_e({ _isRedirect: !0 }, U ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(oe(V, "Expected a location on the redirect navigation"),
			Ty.test(v.location) && n)
		) {
			let X = t.history.createURL(v.location),
				ie = _i(X.pathname, l) == null;
			if (e.location.origin !== X.origin || ie) {
				D ? e.location.replace(v.location) : e.location.assign(v.location);
				return;
			}
		}
		T = null;
		let $ = D === !0 ? De.Replace : De.Push,
			z = I || uh(m.navigation);
		if (w1.has(v.status) && z && Lt(z.formMethod))
			await Ne($, V, {
				submission: _e({}, z, { formAction: v.location }),
				preventScrollReset: P,
			});
		else if (U)
			await Ne($, V, {
				overrideNavigation: Es(V),
				fetcherSubmission: z,
				preventScrollReset: P,
			});
		else {
			let X = Es(V, z);
			await Ne($, V, { overrideNavigation: X, preventScrollReset: P });
		}
	}
	async function es(m, v, _, I, D) {
		let U = await Promise.all([
				..._.map((z) => Bi("loader", D, z, v, o, i, l)),
				...I.map((z) =>
					z.matches && z.match && z.controller
						? Bi(
								"loader",
								$i(t.history, z.path, z.controller.signal),
								z.match,
								z.matches,
								o,
								i,
								l
						  )
						: { type: Fe.error, error: Et(404, { pathname: z.path }) }
				),
			]),
			V = U.slice(0, _.length),
			$ = U.slice(_.length);
		return (
			await Promise.all([
				lh(
					m,
					_,
					V,
					V.map(() => D.signal),
					!1,
					g.loaderData
				),
				lh(
					m,
					I.map((z) => z.match),
					$,
					I.map((z) => (z.controller ? z.controller.signal : null)),
					!0
				),
			]),
			{ results: U, loaderResults: V, fetcherResults: $ }
		);
	}
	function Tr() {
		(B = !0),
			H.push(...b()),
			Ce.forEach((m, v) => {
				K.has(v) && (Z.push(v), dt(v));
			});
	}
	function nr(m, v, _) {
		let I = Gr(g.matches, v);
		Ti(m), J({ errors: { [I.route.id]: _ }, fetchers: new Map(g.fetchers) });
	}
	function Ti(m) {
		let v = g.fetchers.get(m);
		K.has(m) && !(v && v.state === "loading" && Te.has(m)) && dt(m),
			Ce.delete(m),
			Te.delete(m),
			de.delete(m),
			g.fetchers.delete(m);
	}
	function dt(m) {
		let v = K.get(m);
		oe(v, "Expected fetch controller: " + m), v.abort(), K.delete(m);
	}
	function ts(m) {
		for (let v of m) {
			let _ = Ae(v),
				I = Lr(_.data);
			g.fetchers.set(v, I);
		}
	}
	function Oi() {
		let m = [],
			v = !1;
		for (let _ of de) {
			let I = g.fetchers.get(_);
			oe(I, "Expected fetcher: " + _),
				I.state === "loading" && (de.delete(_), m.push(_), (v = !0));
		}
		return ts(m), v;
	}
	function Or(m) {
		let v = [];
		for (let [_, I] of Te)
			if (I < m) {
				let D = g.fetchers.get(_);
				oe(D, "Expected fetcher: " + _),
					D.state === "loading" && (dt(_), Te.delete(_), v.push(_));
			}
		return ts(v), v.length > 0;
	}
	function Ir(m, v) {
		let _ = g.blockers.get(m) || zi;
		return Q.get(m) !== v && Q.set(m, v), _;
	}
	function Nr(m) {
		g.blockers.delete(m), Q.delete(m);
	}
	function Dr(m, v) {
		let _ = g.blockers.get(m) || zi;
		oe(
			(_.state === "unblocked" && v.state === "blocked") ||
				(_.state === "blocked" && v.state === "blocked") ||
				(_.state === "blocked" && v.state === "proceeding") ||
				(_.state === "blocked" && v.state === "unblocked") ||
				(_.state === "proceeding" && v.state === "unblocked"),
			"Invalid blocker state transition: " + _.state + " -> " + v.state
		);
		let I = new Map(g.blockers);
		I.set(m, v), J({ blockers: I });
	}
	function j(m) {
		let { currentLocation: v, nextLocation: _, historyAction: I } = m;
		if (Q.size === 0) return;
		Q.size > 1 && hi(!1, "A router only supports one blocker at a time");
		let D = Array.from(Q.entries()),
			[U, V] = D[D.length - 1],
			$ = g.blockers.get(U);
		if (
			!($ && $.state === "proceeding") &&
			V({ currentLocation: v, nextLocation: _, historyAction: I })
		)
			return U;
	}
	function b(m) {
		let v = [];
		return (
			F.forEach((_, I) => {
				(!m || m(I)) && (_.cancel(), v.push(I), F.delete(I));
			}),
			v
		);
	}
	function L(m, v, _) {
		if (((f = m), (E = v), (S = _ || null), !x && g.navigation === Bl)) {
			x = !0;
			let I = te(g.location, g.matches);
			I != null && J({ restoreScrollPosition: I });
		}
		return () => {
			(f = null), (E = null), (S = null);
		};
	}
	function M(m, v) {
		return (
			(S &&
				S(
					m,
					v.map((I) => I1(I, g.loaderData))
				)) ||
			m.key
		);
	}
	function ee(m, v) {
		if (f && E) {
			let _ = M(m, v);
			f[_] = E();
		}
	}
	function te(m, v) {
		if (f) {
			let _ = M(m, v),
				I = f[_];
			if (typeof I == "number") return I;
		}
		return null;
	}
	function ue(m) {
		(o = {}), (a = Ku(m, i, void 0, o));
	}
	return (
		(w = {
			get basename() {
				return l;
			},
			get state() {
				return g;
			},
			get routes() {
				return s;
			},
			initialize: ne,
			subscribe: Ee,
			enableScrollRestoration: L,
			navigate: Qe,
			fetch: Ke,
			revalidate: Ot,
			createHref: (m) => t.history.createHref(m),
			encodeLocation: (m) => t.history.encodeLocation(m),
			getFetcher: Ae,
			deleteFetcher: Ti,
			dispose: re,
			getBlocker: Ir,
			deleteBlocker: Nr,
			_internalFetchControllers: K,
			_internalActiveDeferreds: F,
			_internalSetRoutes: ue,
		}),
		w
	);
}
function _1(t) {
	return (
		t != null &&
		(("formData" in t && t.formData != null) ||
			("body" in t && t.body !== void 0))
	);
}
function Gu(t, e, n, r, i, o, s) {
	let a, l;
	if (o != null && s !== "path") {
		a = [];
		for (let c of e)
			if ((a.push(c), c.route.id === o)) {
				l = c;
				break;
			}
	} else (a = e), (l = e[e.length - 1]);
	let u = fd(
		i || ".",
		Qa(a).map((c) => c.pathnameBase),
		_i(t.pathname, n) || t.pathname,
		s === "path"
	);
	return (
		i == null && ((u.search = t.search), (u.hash = t.hash)),
		(i == null || i === "" || i === ".") &&
			l &&
			l.route.index &&
			!pd(u.search) &&
			(u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
		r &&
			n !== "/" &&
			(u.pathname = u.pathname === "/" ? n : dn([n, u.pathname])),
		Er(u)
	);
}
function Zf(t, e, n, r) {
	if (!r || !_1(r)) return { path: n };
	if (r.formMethod && !O1(r.formMethod))
		return { path: n, error: Et(405, { method: r.formMethod }) };
	let i = () => ({ path: n, error: Et(400, { type: "invalid-body" }) }),
		o = r.formMethod || "get",
		s = t ? o.toUpperCase() : o.toLowerCase(),
		a = Iy(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!Lt(s)) return i();
			let f =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((S, E) => {
							let [x, C] = E;
							return (
								"" +
								S +
								x +
								"=" +
								C +
								`
`
							);
					  }, "")
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: s,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: f,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!Lt(s)) return i();
			try {
				let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: s,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: f,
						text: void 0,
					},
				};
			} catch {
				return i();
			}
		}
	}
	oe(
		typeof FormData == "function",
		"FormData is not available in this environment"
	);
	let l, u;
	if (r.formData) (l = Ju(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (l = Ju(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (l = r.body), (u = rh(l));
	else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
	else
		try {
			(l = new URLSearchParams(r.body)), (u = rh(l));
		} catch {
			return i();
		}
	let c = {
		formMethod: s,
		formAction: a,
		formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (Lt(c.formMethod)) return { path: n, submission: c };
	let d = En(n);
	return (
		e && d.search && pd(d.search) && l.append("index", ""),
		(d.search = "?" + l),
		{ path: Er(d), submission: c }
	);
}
function b1(t, e) {
	let n = t;
	if (e) {
		let r = t.findIndex((i) => i.route.id === e);
		r >= 0 && (n = t.slice(0, r));
	}
	return n;
}
function eh(t, e, n, r, i, o, s, a, l, u, c, d, f, S) {
	let E = S ? Object.values(S)[0] : f ? Object.values(f)[0] : void 0,
		x = t.createURL(e.location),
		C = t.createURL(i),
		y = S ? Object.keys(S)[0] : void 0,
		w = b1(n, y).filter((k, P) => {
			if (k.route.lazy) return !0;
			if (k.route.loader == null) return !1;
			if (C1(e.loaderData, e.matches[P], k) || s.some((B) => B === k.route.id))
				return !0;
			let T = e.matches[P],
				R = k;
			return th(
				k,
				_e(
					{
						currentUrl: x,
						currentParams: T.params,
						nextUrl: C,
						nextParams: R.params,
					},
					r,
					{
						actionResult: E,
						defaultShouldRevalidate:
							o ||
							x.pathname + x.search === C.pathname + C.search ||
							x.search !== C.search ||
							Oy(T, R),
					}
				)
			);
		}),
		g = [];
	return (
		l.forEach((k, P) => {
			if (!n.some((Z) => Z.route.id === k.routeId)) return;
			let T = Kr(c, k.path, d);
			if (!T) {
				g.push({
					key: P,
					routeId: k.routeId,
					path: k.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let R = e.fetchers.get(P),
				B = Yu(T, k.path),
				H = !1;
			u.has(P)
				? (H = !1)
				: a.includes(P)
				? (H = !0)
				: R && R.state !== "idle" && R.data === void 0
				? (H = o)
				: (H = th(
						B,
						_e(
							{
								currentUrl: x,
								currentParams: e.matches[e.matches.length - 1].params,
								nextUrl: C,
								nextParams: n[n.length - 1].params,
							},
							r,
							{ actionResult: E, defaultShouldRevalidate: o }
						)
				  )),
				H &&
					g.push({
						key: P,
						routeId: k.routeId,
						path: k.path,
						matches: T,
						match: B,
						controller: new AbortController(),
					});
		}),
		[w, g]
	);
}
function C1(t, e, n) {
	let r = !e || n.route.id !== e.route.id,
		i = t[n.route.id] === void 0;
	return r || i;
}
function Oy(t, e) {
	let n = t.route.path;
	return (
		t.pathname !== e.pathname ||
		(n != null && n.endsWith("*") && t.params["*"] !== e.params["*"])
	);
}
function th(t, e) {
	if (t.route.shouldRevalidate) {
		let n = t.route.shouldRevalidate(e);
		if (typeof n == "boolean") return n;
	}
	return e.defaultShouldRevalidate;
}
async function nh(t, e, n) {
	if (!t.lazy) return;
	let r = await t.lazy();
	if (!t.lazy) return;
	let i = n[t.id];
	oe(i, "No route found in manifest");
	let o = {};
	for (let s in r) {
		let l = i[s] !== void 0 && s !== "hasErrorBoundary";
		hi(
			!l,
			'Route "' +
				i.id +
				'" has a static property "' +
				s +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + s + '" will be ignored.')
		),
			!l && !Kw.has(s) && (o[s] = r[s]);
	}
	Object.assign(i, o), Object.assign(i, _e({}, e(i), { lazy: void 0 }));
}
async function Bi(t, e, n, r, i, o, s, a) {
	a === void 0 && (a = {});
	let l,
		u,
		c,
		d = (E) => {
			let x,
				C = new Promise((y, p) => (x = p));
			return (
				(c = () => x()),
				e.signal.addEventListener("abort", c),
				Promise.race([
					E({ request: e, params: n.params, context: a.requestContext }),
					C,
				])
			);
		};
	try {
		let E = n.route[t];
		if (n.route.lazy)
			if (E) u = (await Promise.all([d(E), nh(n.route, o, i)]))[0];
			else if ((await nh(n.route, o, i), (E = n.route[t]), E)) u = await d(E);
			else if (t === "action") {
				let x = new URL(e.url),
					C = x.pathname + x.search;
				throw Et(405, { method: e.method, pathname: C, routeId: n.route.id });
			} else return { type: Fe.data, data: void 0 };
		else if (E) u = await d(E);
		else {
			let x = new URL(e.url),
				C = x.pathname + x.search;
			throw Et(404, { pathname: C });
		}
		oe(
			u !== void 0,
			"You defined " +
				(t === "action" ? "an action" : "a loader") +
				" for route " +
				('"' +
					n.route.id +
					"\" but didn't return anything from your `" +
					t +
					"` ") +
				"function. Please return a value or `null`."
		);
	} catch (E) {
		(l = Fe.error), (u = E);
	} finally {
		c && e.signal.removeEventListener("abort", c);
	}
	if (T1(u)) {
		let E = u.status;
		if (v1.has(E)) {
			let y = u.headers.get("Location");
			if (
				(oe(
					y,
					"Redirects returned/thrown from loaders/actions must have a Location header"
				),
				!Ty.test(y))
			)
				y = Gu(new URL(e.url), r.slice(0, r.indexOf(n) + 1), s, !0, y);
			else if (!a.isStaticRequest) {
				let p = new URL(e.url),
					w = y.startsWith("//") ? new URL(p.protocol + y) : new URL(y),
					g = _i(w.pathname, s) != null;
				w.origin === p.origin && g && (y = w.pathname + w.search + w.hash);
			}
			if (a.isStaticRequest) throw (u.headers.set("Location", y), u);
			return {
				type: Fe.redirect,
				status: E,
				location: y,
				revalidate: u.headers.get("X-Remix-Revalidate") !== null,
			};
		}
		if (a.isRouteRequest) throw { type: l || Fe.data, response: u };
		let x,
			C = u.headers.get("Content-Type");
		return (
			C && /\bapplication\/json\b/.test(C)
				? (x = await u.json())
				: (x = await u.text()),
			l === Fe.error
				? { type: l, error: new hd(E, u.statusText, x), headers: u.headers }
				: { type: Fe.data, data: x, statusCode: u.status, headers: u.headers }
		);
	}
	if (l === Fe.error) return { type: l, error: u };
	if (P1(u)) {
		var f, S;
		return {
			type: Fe.deferred,
			deferredData: u,
			statusCode: (f = u.init) == null ? void 0 : f.status,
			headers:
				((S = u.init) == null ? void 0 : S.headers) &&
				new Headers(u.init.headers),
		};
	}
	return { type: Fe.data, data: u };
}
function $i(t, e, n, r) {
	let i = t.createURL(Iy(e)).toString(),
		o = { signal: n };
	if (r && Lt(r.formMethod)) {
		let { formMethod: s, formEncType: a } = r;
		(o.method = s.toUpperCase()),
			a === "application/json"
				? ((o.headers = new Headers({ "Content-Type": a })),
				  (o.body = JSON.stringify(r.json)))
				: a === "text/plain"
				? (o.body = r.text)
				: a === "application/x-www-form-urlencoded" && r.formData
				? (o.body = Ju(r.formData))
				: (o.body = r.formData);
	}
	return new Request(i, o);
}
function Ju(t) {
	let e = new URLSearchParams();
	for (let [n, r] of t.entries())
		e.append(n, typeof r == "string" ? r : r.name);
	return e;
}
function rh(t) {
	let e = new FormData();
	for (let [n, r] of t.entries()) e.append(n, r);
	return e;
}
function k1(t, e, n, r, i) {
	let o = {},
		s = null,
		a,
		l = !1,
		u = {};
	return (
		n.forEach((c, d) => {
			let f = e[d].route.id;
			if (
				(oe(!ni(c), "Cannot handle redirect results in processLoaderData"),
				ao(c))
			) {
				let S = Gr(t, f),
					E = c.error;
				r && ((E = Object.values(r)[0]), (r = void 0)),
					(s = s || {}),
					s[S.route.id] == null && (s[S.route.id] = E),
					(o[f] = void 0),
					l || ((l = !0), (a = Ry(c.error) ? c.error.status : 500)),
					c.headers && (u[f] = c.headers);
			} else
				ur(c)
					? (i.set(f, c.deferredData), (o[f] = c.deferredData.data))
					: (o[f] = c.data),
					c.statusCode != null &&
						c.statusCode !== 200 &&
						!l &&
						(a = c.statusCode),
					c.headers && (u[f] = c.headers);
		}),
		r && ((s = r), (o[Object.keys(r)[0]] = void 0)),
		{ loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: u }
	);
}
function ih(t, e, n, r, i, o, s, a) {
	let { loaderData: l, errors: u } = k1(e, n, r, i, a);
	for (let c = 0; c < o.length; c++) {
		let { key: d, match: f, controller: S } = o[c];
		oe(
			s !== void 0 && s[c] !== void 0,
			"Did not find corresponding fetcher result"
		);
		let E = s[c];
		if (!(S && S.signal.aborted))
			if (ao(E)) {
				let x = Gr(t.matches, f == null ? void 0 : f.route.id);
				(u && u[x.route.id]) || (u = _e({}, u, { [x.route.id]: E.error })),
					t.fetchers.delete(d);
			} else if (ni(E)) oe(!1, "Unhandled fetcher revalidation redirect");
			else if (ur(E)) oe(!1, "Unhandled fetcher deferred data");
			else {
				let x = Lr(E.data);
				t.fetchers.set(d, x);
			}
	}
	return { loaderData: l, errors: u };
}
function oh(t, e, n, r) {
	let i = _e({}, e);
	for (let o of n) {
		let s = o.route.id;
		if (
			(e.hasOwnProperty(s)
				? e[s] !== void 0 && (i[s] = e[s])
				: t[s] !== void 0 && o.route.loader && (i[s] = t[s]),
			r && r.hasOwnProperty(s))
		)
			break;
	}
	return i;
}
function Gr(t, e) {
	return (
		(e ? t.slice(0, t.findIndex((r) => r.route.id === e) + 1) : [...t])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || t[0]
	);
}
function sh(t) {
	let e = t.find((n) => n.index || !n.path || n.path === "/") || {
		id: "__shim-error-route__",
	};
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
		route: e,
	};
}
function Et(t, e) {
	let { pathname: n, routeId: r, method: i, type: o } = e === void 0 ? {} : e,
		s = "Unknown Server Error",
		a = "Unknown @remix-run/router error";
	return (
		t === 400
			? ((s = "Bad Request"),
			  i && n && r
					? (a =
							"You made a " +
							i +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: o === "defer-action"
					? (a = "defer() is not supported in actions")
					: o === "invalid-body" && (a = "Unable to encode submission body"))
			: t === 403
			? ((s = "Forbidden"),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: t === 404
			? ((s = "Not Found"), (a = 'No route matches URL "' + n + '"'))
			: t === 405 &&
			  ((s = "Method Not Allowed"),
			  i && n && r
					? (a =
							"You made a " +
							i.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
		new hd(t || 500, s, new Error(a), !0)
	);
}
function ah(t) {
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e];
		if (ni(n)) return { result: n, idx: e };
	}
}
function Iy(t) {
	let e = typeof t == "string" ? En(t) : t;
	return Er(_e({}, e, { hash: "" }));
}
function R1(t, e) {
	return t.pathname !== e.pathname || t.search !== e.search
		? !1
		: t.hash === ""
		? e.hash !== ""
		: t.hash === e.hash
		? !0
		: e.hash !== "";
}
function ur(t) {
	return t.type === Fe.deferred;
}
function ao(t) {
	return t.type === Fe.error;
}
function ni(t) {
	return (t && t.type) === Fe.redirect;
}
function P1(t) {
	let e = t;
	return (
		e &&
		typeof e == "object" &&
		typeof e.data == "object" &&
		typeof e.subscribe == "function" &&
		typeof e.cancel == "function" &&
		typeof e.resolveData == "function"
	);
}
function T1(t) {
	return (
		t != null &&
		typeof t.status == "number" &&
		typeof t.statusText == "string" &&
		typeof t.headers == "object" &&
		typeof t.body < "u"
	);
}
function O1(t) {
	return g1.has(t.toLowerCase());
}
function Lt(t) {
	return m1.has(t.toLowerCase());
}
async function lh(t, e, n, r, i, o) {
	for (let s = 0; s < n.length; s++) {
		let a = n[s],
			l = e[s];
		if (!l) continue;
		let u = t.find((d) => d.route.id === l.route.id),
			c = u != null && !Oy(u, l) && (o && o[l.route.id]) !== void 0;
		if (ur(a) && (i || c)) {
			let d = r[s];
			oe(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
				await Ny(a, d, i).then((f) => {
					f && (n[s] = f || n[s]);
				});
		}
	}
}
async function Ny(t, e, n) {
	if ((n === void 0 && (n = !1), !(await t.deferredData.resolveData(e)))) {
		if (n)
			try {
				return { type: Fe.data, data: t.deferredData.unwrappedData };
			} catch (i) {
				return { type: Fe.error, error: i };
			}
		return { type: Fe.data, data: t.deferredData.data };
	}
}
function pd(t) {
	return new URLSearchParams(t).getAll("index").some((e) => e === "");
}
function I1(t, e) {
	let { route: n, pathname: r, params: i } = t;
	return { id: n.id, pathname: r, params: i, data: e[n.id], handle: n.handle };
}
function Yu(t, e) {
	let n = typeof e == "string" ? En(e).search : e.search;
	if (t[t.length - 1].route.index && pd(n || "")) return t[t.length - 1];
	let r = Qa(t);
	return r[r.length - 1];
}
function uh(t) {
	let {
		formMethod: e,
		formAction: n,
		formEncType: r,
		text: i,
		formData: o,
		json: s,
	} = t;
	if (!(!e || !n || !r)) {
		if (i != null)
			return {
				formMethod: e,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: i,
			};
		if (o != null)
			return {
				formMethod: e,
				formAction: n,
				formEncType: r,
				formData: o,
				json: void 0,
				text: void 0,
			};
		if (s !== void 0)
			return {
				formMethod: e,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: s,
				text: void 0,
			};
	}
}
function Es(t, e) {
	return e
		? {
				state: "loading",
				location: t,
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
		  }
		: {
				state: "loading",
				location: t,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function N1(t, e) {
	return {
		state: "submitting",
		location: t,
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
	};
}
function Hi(t, e) {
	return t
		? {
				state: "loading",
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
				data: e,
				" _hasFetcherDoneAnything ": !0,
		  }
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: e,
				" _hasFetcherDoneAnything ": !0,
		  };
}
function D1(t, e) {
	return {
		state: "submitting",
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
		data: e ? e.data : void 0,
		" _hasFetcherDoneAnything ": !0,
	};
}
function Lr(t) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t,
		" _hasFetcherDoneAnything ": !0,
	};
}
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ga() {
	return (
		(ga = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
			  }),
		ga.apply(this, arguments)
	);
}
const Ka = O.createContext(null),
	md = O.createContext(null),
	kr = O.createContext(null),
	Ga = O.createContext(null),
	Sn = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Dy = O.createContext(null);
function j1(t, e) {
	let { relative: n } = e === void 0 ? {} : e;
	zo() || oe(!1);
	let { basename: r, navigator: i } = O.useContext(kr),
		{ hash: o, pathname: s, search: a } = yd(t, { relative: n }),
		l = s;
	return (
		r !== "/" && (l = s === "/" ? r : dn([r, s])),
		i.createHref({ pathname: l, search: a, hash: o })
	);
}
function zo() {
	return O.useContext(Ga) != null;
}
function bi() {
	return zo() || oe(!1), O.useContext(Ga).location;
}
function jy(t) {
	O.useContext(kr).static || O.useLayoutEffect(t);
}
function Ly() {
	let { isDataRoute: t } = O.useContext(Sn);
	return t ? G1() : L1();
}
function L1() {
	zo() || oe(!1);
	let t = O.useContext(Ka),
		{ basename: e, navigator: n } = O.useContext(kr),
		{ matches: r } = O.useContext(Sn),
		{ pathname: i } = bi(),
		o = JSON.stringify(Qa(r).map((l) => l.pathnameBase)),
		s = O.useRef(!1);
	return (
		jy(() => {
			s.current = !0;
		}),
		O.useCallback(
			function (l, u) {
				if ((u === void 0 && (u = {}), !s.current)) return;
				if (typeof l == "number") {
					n.go(l);
					return;
				}
				let c = fd(l, JSON.parse(o), i, u.relative === "path");
				t == null &&
					e !== "/" &&
					(c.pathname = c.pathname === "/" ? e : dn([e, c.pathname])),
					(u.replace ? n.replace : n.push)(c, u.state, u);
			},
			[e, n, o, i, t]
		)
	);
}
const A1 = O.createContext(null);
function M1(t) {
	let e = O.useContext(Sn).outlet;
	return e && O.createElement(A1.Provider, { value: t }, e);
}
function F1() {
	let { matches: t } = O.useContext(Sn),
		e = t[t.length - 1];
	return e ? e.params : {};
}
function yd(t, e) {
	let { relative: n } = e === void 0 ? {} : e,
		{ matches: r } = O.useContext(Sn),
		{ pathname: i } = bi(),
		o = JSON.stringify(Qa(r).map((s) => s.pathnameBase));
	return O.useMemo(() => fd(t, JSON.parse(o), i, n === "path"), [t, o, i, n]);
}
function U1(t, e, n) {
	zo() || oe(!1);
	let { navigator: r } = O.useContext(kr),
		{ matches: i } = O.useContext(Sn),
		o = i[i.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let l = bi(),
		u;
	if (e) {
		var c;
		let x = typeof e == "string" ? En(e) : e;
		a === "/" || ((c = x.pathname) != null && c.startsWith(a)) || oe(!1),
			(u = x);
	} else u = l;
	let d = u.pathname || "/",
		f = a === "/" ? d : d.slice(a.length) || "/",
		S = Kr(t, { pathname: f }),
		E = V1(
			S &&
				S.map((x) =>
					Object.assign({}, x, {
						params: Object.assign({}, s, x.params),
						pathname: dn([
							a,
							r.encodeLocation
								? r.encodeLocation(x.pathname).pathname
								: x.pathname,
						]),
						pathnameBase:
							x.pathnameBase === "/"
								? a
								: dn([
										a,
										r.encodeLocation
											? r.encodeLocation(x.pathnameBase).pathname
											: x.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return e && E
		? O.createElement(
				Ga.Provider,
				{
					value: {
						location: ga(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							u
						),
						navigationType: De.Pop,
					},
				},
				E
		  )
		: E;
}
function z1() {
	let t = K1(),
		e = Ry(t)
			? t.status + " " + t.statusText
			: t instanceof Error
			? t.message
			: JSON.stringify(t),
		n = t instanceof Error ? t.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		o = null;
	return O.createElement(
		O.Fragment,
		null,
		O.createElement("h2", null, "Unexpected Application Error!"),
		O.createElement("h3", { style: { fontStyle: "italic" } }, e),
		n ? O.createElement("pre", { style: i }, n) : null,
		o
	);
}
const B1 = O.createElement(z1, null);
class $1 extends O.Component {
	constructor(e) {
		super(e),
			(this.state = {
				location: e.location,
				revalidation: e.revalidation,
				error: e.error,
			});
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, n) {
		return n.location !== e.location ||
			(n.revalidation !== "idle" && e.revalidation === "idle")
			? { error: e.error, location: e.location, revalidation: e.revalidation }
			: {
					error: e.error || n.error,
					location: n.location,
					revalidation: e.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(e, n) {
		console.error(
			"React Router caught the following error during render",
			e,
			n
		);
	}
	render() {
		return this.state.error
			? O.createElement(
					Sn.Provider,
					{ value: this.props.routeContext },
					O.createElement(Dy.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function H1(t) {
	let { routeContext: e, match: n, children: r } = t,
		i = O.useContext(Ka);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		O.createElement(Sn.Provider, { value: e }, r)
	);
}
function V1(t, e, n) {
	var r;
	if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
		var i;
		if ((i = n) != null && i.errors) t = n.matches;
		else return null;
	}
	let o = t,
		s = (r = n) == null ? void 0 : r.errors;
	if (s != null) {
		let a = o.findIndex(
			(l) => l.route.id && (s == null ? void 0 : s[l.route.id])
		);
		a >= 0 || oe(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
	}
	return o.reduceRight((a, l, u) => {
		let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
			d = null;
		n && (d = l.route.errorElement || B1);
		let f = e.concat(o.slice(0, u + 1)),
			S = () => {
				let E;
				return (
					c
						? (E = d)
						: l.route.Component
						? (E = O.createElement(l.route.Component, null))
						: l.route.element
						? (E = l.route.element)
						: (E = a),
					O.createElement(H1, {
						match: l,
						routeContext: { outlet: a, matches: f, isDataRoute: n != null },
						children: E,
					})
				);
			};
		return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
			? O.createElement($1, {
					location: n.location,
					revalidation: n.revalidation,
					component: d,
					error: c,
					children: S(),
					routeContext: { outlet: null, matches: f, isDataRoute: !0 },
			  })
			: S();
	}, null);
}
var Xu;
(function (t) {
	(t.UseBlocker = "useBlocker"),
		(t.UseRevalidator = "useRevalidator"),
		(t.UseNavigateStable = "useNavigate");
})(Xu || (Xu = {}));
var Sr;
(function (t) {
	(t.UseBlocker = "useBlocker"),
		(t.UseLoaderData = "useLoaderData"),
		(t.UseActionData = "useActionData"),
		(t.UseRouteError = "useRouteError"),
		(t.UseNavigation = "useNavigation"),
		(t.UseRouteLoaderData = "useRouteLoaderData"),
		(t.UseMatches = "useMatches"),
		(t.UseRevalidator = "useRevalidator"),
		(t.UseNavigateStable = "useNavigate"),
		(t.UseRouteId = "useRouteId");
})(Sr || (Sr = {}));
function W1(t) {
	let e = O.useContext(Ka);
	return e || oe(!1), e;
}
function Ay(t) {
	let e = O.useContext(md);
	return e || oe(!1), e;
}
function q1(t) {
	let e = O.useContext(Sn);
	return e || oe(!1), e;
}
function gd(t) {
	let e = q1(),
		n = e.matches[e.matches.length - 1];
	return n.route.id || oe(!1), n.route.id;
}
function Q1() {
	let t = Ay(Sr.UseLoaderData),
		e = gd(Sr.UseLoaderData);
	if (t.errors && t.errors[e] != null) {
		console.error(
			"You cannot `useLoaderData` in an errorElement (routeId: " + e + ")"
		);
		return;
	}
	return t.loaderData[e];
}
function K1() {
	var t;
	let e = O.useContext(Dy),
		n = Ay(Sr.UseRouteError),
		r = gd(Sr.UseRouteError);
	return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function G1() {
	let { router: t } = W1(Xu.UseNavigateStable),
		e = gd(Sr.UseNavigateStable),
		n = O.useRef(!1);
	return (
		jy(() => {
			n.current = !0;
		}),
		O.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? t.navigate(i)
							: t.navigate(i, ga({ fromRouteId: e }, o)));
			},
			[t, e]
		)
	);
}
const J1 = "startTransition",
	ch = Lv[J1];
function Y1(t) {
	let { fallbackElement: e, router: n, future: r } = t,
		[i, o] = O.useState(n.state),
		{ v7_startTransition: s } = r || {},
		a = O.useCallback(
			(d) => {
				s && ch ? ch(() => o(d)) : o(d);
			},
			[o, s]
		);
	O.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let l = O.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (d) => n.navigate(d),
				push: (d, f, S) =>
					n.navigate(d, {
						state: f,
						preventScrollReset: S == null ? void 0 : S.preventScrollReset,
					}),
				replace: (d, f, S) =>
					n.navigate(d, {
						replace: !0,
						state: f,
						preventScrollReset: S == null ? void 0 : S.preventScrollReset,
					}),
			}),
			[n]
		),
		u = n.basename || "/",
		c = O.useMemo(
			() => ({ router: n, navigator: l, static: !1, basename: u }),
			[n, l, u]
		);
	return O.createElement(
		O.Fragment,
		null,
		O.createElement(
			Ka.Provider,
			{ value: c },
			O.createElement(
				md.Provider,
				{ value: i },
				O.createElement(
					eE,
					{
						basename: u,
						location: i.location,
						navigationType: i.historyAction,
						navigator: l,
					},
					i.initialized
						? O.createElement(X1, { routes: n.routes, state: i })
						: e
				)
			)
		),
		null
	);
}
function X1(t) {
	let { routes: e, state: n } = t;
	return U1(e, void 0, n);
}
function Z1(t) {
	return M1(t.context);
}
function eE(t) {
	let {
		basename: e = "/",
		children: n = null,
		location: r,
		navigationType: i = De.Pop,
		navigator: o,
		static: s = !1,
	} = t;
	zo() && oe(!1);
	let a = e.replace(/^\/*/, "/"),
		l = O.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
	typeof r == "string" && (r = En(r));
	let {
			pathname: u = "/",
			search: c = "",
			hash: d = "",
			state: f = null,
			key: S = "default",
		} = r,
		E = O.useMemo(() => {
			let x = _i(u, a);
			return x == null
				? null
				: {
						location: { pathname: x, search: c, hash: d, state: f, key: S },
						navigationType: i,
				  };
		}, [a, u, c, d, f, S, i]);
	return E == null
		? null
		: O.createElement(
				kr.Provider,
				{ value: l },
				O.createElement(Ga.Provider, { children: n, value: E })
		  );
}
var dh;
(function (t) {
	(t[(t.pending = 0)] = "pending"),
		(t[(t.success = 1)] = "success"),
		(t[(t.error = 2)] = "error");
})(dh || (dh = {}));
new Promise(() => {});
function tE(t) {
	let e = {
		hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
	};
	return (
		t.Component &&
			Object.assign(e, {
				element: O.createElement(t.Component),
				Component: void 0,
			}),
		t.ErrorBoundary &&
			Object.assign(e, {
				errorElement: O.createElement(t.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		e
	);
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
	return (
		(pi = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
			  }),
		pi.apply(this, arguments)
	);
}
function My(t, e) {
	if (t == null) return {};
	var n = {},
		r = Object.keys(t),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
	return n;
}
function nE(t) {
	return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function rE(t, e) {
	return t.button === 0 && (!e || e === "_self") && !nE(t);
}
const iE = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
	],
	oE = [
		"aria-current",
		"caseSensitive",
		"className",
		"end",
		"style",
		"to",
		"children",
	];
function sE(t, e) {
	return x1({
		basename: e == null ? void 0 : e.basename,
		future: pi({}, e == null ? void 0 : e.future, { v7_prependBasename: !0 }),
		history: Ww({ window: e == null ? void 0 : e.window }),
		hydrationData: (e == null ? void 0 : e.hydrationData) || aE(),
		routes: t,
		mapRouteProperties: tE,
	}).initialize();
}
function aE() {
	var t;
	let e = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
	return e && e.errors && (e = pi({}, e, { errors: lE(e.errors) })), e;
}
function lE(t) {
	if (!t) return null;
	let e = Object.entries(t),
		n = {};
	for (let [r, i] of e)
		if (i && i.__type === "RouteErrorResponse")
			n[r] = new hd(i.status, i.statusText, i.data, i.internal === !0);
		else if (i && i.__type === "Error") {
			if (i.__subType) {
				let o = window[i.__subType];
				if (typeof o == "function")
					try {
						let s = new o(i.message);
						(s.stack = ""), (n[r] = s);
					} catch {}
			}
			if (n[r] == null) {
				let o = new Error(i.message);
				(o.stack = ""), (n[r] = o);
			}
		} else n[r] = i;
	return n;
}
const uE =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	cE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	mi = O.forwardRef(function (e, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: s,
				state: a,
				target: l,
				to: u,
				preventScrollReset: c,
			} = e,
			d = My(e, iE),
			{ basename: f } = O.useContext(kr),
			S,
			E = !1;
		if (typeof u == "string" && cE.test(u) && ((S = u), uE))
			try {
				let p = new URL(window.location.href),
					w = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
					g = _i(w.pathname, f);
				w.origin === p.origin && g != null
					? (u = g + w.search + w.hash)
					: (E = !0);
			} catch {}
		let x = j1(u, { relative: i }),
			C = fE(u, {
				replace: s,
				state: a,
				target: l,
				preventScrollReset: c,
				relative: i,
			});
		function y(p) {
			r && r(p), p.defaultPrevented || C(p);
		}
		return O.createElement(
			"a",
			pi({}, d, { href: S || x, onClick: E || o ? r : y, ref: n, target: l })
		);
	}),
	dE = O.forwardRef(function (e, n) {
		let {
				"aria-current": r = "page",
				caseSensitive: i = !1,
				className: o = "",
				end: s = !1,
				style: a,
				to: l,
				children: u,
			} = e,
			c = My(e, oE),
			d = yd(l, { relative: c.relative }),
			f = bi(),
			S = O.useContext(md),
			{ navigator: E } = O.useContext(kr),
			x = E.encodeLocation ? E.encodeLocation(d).pathname : d.pathname,
			C = f.pathname,
			y =
				S && S.navigation && S.navigation.location
					? S.navigation.location.pathname
					: null;
		i ||
			((C = C.toLowerCase()),
			(y = y ? y.toLowerCase() : null),
			(x = x.toLowerCase()));
		let p = C === x || (!s && C.startsWith(x) && C.charAt(x.length) === "/"),
			w =
				y != null &&
				(y === x || (!s && y.startsWith(x) && y.charAt(x.length) === "/")),
			g = p ? r : void 0,
			k;
		typeof o == "function"
			? (k = o({ isActive: p, isPending: w }))
			: (k = [o, p ? "active" : null, w ? "pending" : null]
					.filter(Boolean)
					.join(" "));
		let P = typeof a == "function" ? a({ isActive: p, isPending: w }) : a;
		return O.createElement(
			mi,
			pi({}, c, { "aria-current": g, className: k, ref: n, style: P, to: l }),
			typeof u == "function" ? u({ isActive: p, isPending: w }) : u
		);
	});
var fh;
(function (t) {
	(t.UseScrollRestoration = "useScrollRestoration"),
		(t.UseSubmit = "useSubmit"),
		(t.UseSubmitFetcher = "useSubmitFetcher"),
		(t.UseFetcher = "useFetcher");
})(fh || (fh = {}));
var hh;
(function (t) {
	(t.UseFetchers = "useFetchers"),
		(t.UseScrollRestoration = "useScrollRestoration");
})(hh || (hh = {}));
function fE(t, e) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: s,
		} = e === void 0 ? {} : e,
		a = Ly(),
		l = bi(),
		u = yd(t, { relative: s });
	return O.useCallback(
		(c) => {
			if (rE(c, n)) {
				c.preventDefault();
				let d = r !== void 0 ? r : Er(l) === Er(u);
				a(t, { replace: d, state: i, preventScrollReset: o, relative: s });
			}
		},
		[l, a, u, r, i, n, t, o, s]
	);
}
const Zu = "/assets/logo-18162d37.png";
var Fy = { exports: {} };
(() => {
	var t = {
			296: (i, o, s) => {
				var a = /^\s+|\s+$/g,
					l = /^[-+]0x[0-9a-f]+$/i,
					u = /^0b[01]+$/i,
					c = /^0o[0-7]+$/i,
					d = parseInt,
					f = typeof s.g == "object" && s.g && s.g.Object === Object && s.g,
					S = typeof self == "object" && self && self.Object === Object && self,
					E = f || S || Function("return this")(),
					x = Object.prototype.toString,
					C = Math.max,
					y = Math.min,
					p = function () {
						return E.Date.now();
					};
				function w(k) {
					var P = typeof k;
					return !!k && (P == "object" || P == "function");
				}
				function g(k) {
					if (typeof k == "number") return k;
					if (
						(function (R) {
							return (
								typeof R == "symbol" ||
								((function (B) {
									return !!B && typeof B == "object";
								})(R) &&
									x.call(R) == "[object Symbol]")
							);
						})(k)
					)
						return NaN;
					if (w(k)) {
						var P = typeof k.valueOf == "function" ? k.valueOf() : k;
						k = w(P) ? P + "" : P;
					}
					if (typeof k != "string") return k === 0 ? k : +k;
					k = k.replace(a, "");
					var T = u.test(k);
					return T || c.test(k)
						? d(k.slice(2), T ? 2 : 8)
						: l.test(k)
						? NaN
						: +k;
				}
				i.exports = function (k, P, T) {
					var R,
						B,
						H,
						Z,
						K,
						pe,
						we = 0,
						Te = !1,
						de = !1,
						Ce = !0;
					if (typeof k != "function")
						throw new TypeError("Expected a function");
					function F(Ee) {
						var J = R,
							ye = B;
						return (R = B = void 0), (we = Ee), (Z = k.apply(ye, J));
					}
					function Q(Ee) {
						var J = Ee - pe;
						return pe === void 0 || J >= P || J < 0 || (de && Ee - we >= H);
					}
					function q() {
						var Ee = p();
						if (Q(Ee)) return ne(Ee);
						K = setTimeout(
							q,
							(function (J) {
								var ye = P - (J - pe);
								return de ? y(ye, H - (J - we)) : ye;
							})(Ee)
						);
					}
					function ne(Ee) {
						return (K = void 0), Ce && R ? F(Ee) : ((R = B = void 0), Z);
					}
					function re() {
						var Ee = p(),
							J = Q(Ee);
						if (((R = arguments), (B = this), (pe = Ee), J)) {
							if (K === void 0)
								return (function (ye) {
									return (we = ye), (K = setTimeout(q, P)), Te ? F(ye) : Z;
								})(pe);
							if (de) return (K = setTimeout(q, P)), F(pe);
						}
						return K === void 0 && (K = setTimeout(q, P)), Z;
					}
					return (
						(P = g(P) || 0),
						w(T) &&
							((Te = !!T.leading),
							(H = (de = "maxWait" in T) ? C(g(T.maxWait) || 0, P) : H),
							(Ce = "trailing" in T ? !!T.trailing : Ce)),
						(re.cancel = function () {
							K !== void 0 && clearTimeout(K),
								(we = 0),
								(R = pe = B = K = void 0);
						}),
						(re.flush = function () {
							return K === void 0 ? Z : ne(p());
						}),
						re
					);
				};
			},
			96: (i, o, s) => {
				var a = "Expected a function",
					l = NaN,
					u = "[object Symbol]",
					c = /^\s+|\s+$/g,
					d = /^[-+]0x[0-9a-f]+$/i,
					f = /^0b[01]+$/i,
					S = /^0o[0-7]+$/i,
					E = parseInt,
					x = typeof s.g == "object" && s.g && s.g.Object === Object && s.g,
					C = typeof self == "object" && self && self.Object === Object && self,
					y = x || C || Function("return this")(),
					p = Object.prototype.toString,
					w = Math.max,
					g = Math.min,
					k = function () {
						return y.Date.now();
					};
				function P(R) {
					var B = typeof R;
					return !!R && (B == "object" || B == "function");
				}
				function T(R) {
					if (typeof R == "number") return R;
					if (
						(function (Z) {
							return (
								typeof Z == "symbol" ||
								((function (K) {
									return !!K && typeof K == "object";
								})(Z) &&
									p.call(Z) == u)
							);
						})(R)
					)
						return l;
					if (P(R)) {
						var B = typeof R.valueOf == "function" ? R.valueOf() : R;
						R = P(B) ? B + "" : B;
					}
					if (typeof R != "string") return R === 0 ? R : +R;
					R = R.replace(c, "");
					var H = f.test(R);
					return H || S.test(R) ? E(R.slice(2), H ? 2 : 8) : d.test(R) ? l : +R;
				}
				i.exports = function (R, B, H) {
					var Z = !0,
						K = !0;
					if (typeof R != "function") throw new TypeError(a);
					return (
						P(H) &&
							((Z = "leading" in H ? !!H.leading : Z),
							(K = "trailing" in H ? !!H.trailing : K)),
						(function (pe, we, Te) {
							var de,
								Ce,
								F,
								Q,
								q,
								ne,
								re = 0,
								Ee = !1,
								J = !1,
								ye = !0;
							if (typeof pe != "function") throw new TypeError(a);
							function Qe(Ae) {
								var Ke = de,
									ct = Ce;
								return (de = Ce = void 0), (re = Ae), (Q = pe.apply(ct, Ke));
							}
							function Ot(Ae) {
								var Ke = Ae - ne;
								return (
									ne === void 0 || Ke >= we || Ke < 0 || (J && Ae - re >= F)
								);
							}
							function Ne() {
								var Ae = k();
								if (Ot(Ae)) return Pr(Ae);
								q = setTimeout(
									Ne,
									(function (Ke) {
										var ct = we - (Ke - ne);
										return J ? g(ct, F - (Ke - re)) : ct;
									})(Ae)
								);
							}
							function Pr(Ae) {
								return (
									(q = void 0), ye && de ? Qe(Ae) : ((de = Ce = void 0), Q)
								);
							}
							function Jt() {
								var Ae = k(),
									Ke = Ot(Ae);
								if (((de = arguments), (Ce = this), (ne = Ae), Ke)) {
									if (q === void 0)
										return (function (ct) {
											return (
												(re = ct), (q = setTimeout(Ne, we)), Ee ? Qe(ct) : Q
											);
										})(ne);
									if (J) return (q = setTimeout(Ne, we)), Qe(ne);
								}
								return q === void 0 && (q = setTimeout(Ne, we)), Q;
							}
							return (
								(we = T(we) || 0),
								P(Te) &&
									((Ee = !!Te.leading),
									(F = (J = "maxWait" in Te) ? w(T(Te.maxWait) || 0, we) : F),
									(ye = "trailing" in Te ? !!Te.trailing : ye)),
								(Jt.cancel = function () {
									q !== void 0 && clearTimeout(q),
										(re = 0),
										(de = ne = Ce = q = void 0);
								}),
								(Jt.flush = function () {
									return q === void 0 ? Q : Pr(k());
								}),
								Jt
							);
						})(R, B, { leading: Z, maxWait: B, trailing: K })
					);
				};
			},
			703: (i, o, s) => {
				var a = s(414);
				function l() {}
				function u() {}
				(u.resetWarningCache = l),
					(i.exports = function () {
						function c(S, E, x, C, y, p) {
							if (p !== a) {
								var w = new Error(
									"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
								);
								throw ((w.name = "Invariant Violation"), w);
							}
						}
						function d() {
							return c;
						}
						c.isRequired = c;
						var f = {
							array: c,
							bigint: c,
							bool: c,
							func: c,
							number: c,
							object: c,
							string: c,
							symbol: c,
							any: c,
							arrayOf: d,
							element: c,
							elementType: c,
							instanceOf: d,
							node: c,
							objectOf: d,
							oneOf: d,
							oneOfType: d,
							shape: d,
							exact: d,
							checkPropTypes: u,
							resetWarningCache: l,
						};
						return (f.PropTypes = f), f;
					});
			},
			697: (i, o, s) => {
				i.exports = s(703)();
			},
			414: (i) => {
				i.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
			},
		},
		e = {};
	function n(i) {
		var o = e[i];
		if (o !== void 0) return o.exports;
		var s = (e[i] = { exports: {} });
		return t[i](s, s.exports, n), s.exports;
	}
	(n.n = (i) => {
		var o = i && i.__esModule ? () => i.default : () => i;
		return n.d(o, { a: o }), o;
	}),
		(n.d = (i, o) => {
			for (var s in o)
				n.o(o, s) &&
					!n.o(i, s) &&
					Object.defineProperty(i, s, { enumerable: !0, get: o[s] });
		}),
		(n.g = (function () {
			if (typeof globalThis == "object") return globalThis;
			try {
				return this || new Function("return this")();
			} catch {
				if (typeof window == "object") return window;
			}
		})()),
		(n.o = (i, o) => Object.prototype.hasOwnProperty.call(i, o)),
		(n.r = (i) => {
			typeof Symbol < "u" &&
				Symbol.toStringTag &&
				Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(i, "__esModule", { value: !0 });
		});
	var r = {};
	(() => {
		n.r(r),
			n.d(r, {
				LazyLoadComponent: () => Zo,
				LazyLoadImage: () => Dr,
				trackWindowScroll: () => ne,
			});
		const i = O;
		var o = n.n(i),
			s = n(697);
		const a = by;
		var l = n.n(a);
		function u() {
			return (
				typeof window < "u" &&
				"IntersectionObserver" in window &&
				"isIntersecting" in window.IntersectionObserverEntry.prototype
			);
		}
		function c(j) {
			return (
				(c =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (b) {
								return typeof b;
						  }
						: function (b) {
								return b &&
									typeof Symbol == "function" &&
									b.constructor === Symbol &&
									b !== Symbol.prototype
									? "symbol"
									: typeof b;
						  }),
				c(j)
			);
		}
		function d(j, b) {
			var L = Object.keys(j);
			if (Object.getOwnPropertySymbols) {
				var M = Object.getOwnPropertySymbols(j);
				b &&
					(M = M.filter(function (ee) {
						return Object.getOwnPropertyDescriptor(j, ee).enumerable;
					})),
					L.push.apply(L, M);
			}
			return L;
		}
		function f(j, b, L) {
			return (
				(b = E(b)) in j
					? Object.defineProperty(j, b, {
							value: L,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (j[b] = L),
				j
			);
		}
		function S(j, b) {
			for (var L = 0; L < b.length; L++) {
				var M = b[L];
				(M.enumerable = M.enumerable || !1),
					(M.configurable = !0),
					"value" in M && (M.writable = !0),
					Object.defineProperty(j, E(M.key), M);
			}
		}
		function E(j) {
			var b = (function (L, M) {
				if (c(L) !== "object" || L === null) return L;
				var ee = L[Symbol.toPrimitive];
				if (ee !== void 0) {
					var te = ee.call(L, "string");
					if (c(te) !== "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}
				return String(L);
			})(j);
			return c(b) === "symbol" ? b : String(b);
		}
		function x(j, b) {
			return (
				(x = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (L, M) {
							return (L.__proto__ = M), L;
					  }),
				x(j, b)
			);
		}
		function C(j) {
			return (
				(C = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (b) {
							return b.__proto__ || Object.getPrototypeOf(b);
					  }),
				C(j)
			);
		}
		var y = function (j) {
				j.forEach(function (b) {
					b.isIntersecting && b.target.onVisible();
				});
			},
			p = {},
			w = (function (j) {
				(function (m, v) {
					if (typeof v != "function" && v !== null)
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					(m.prototype = Object.create(v && v.prototype, {
						constructor: { value: m, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(m, "prototype", { writable: !1 }),
						v && x(m, v);
				})(ue, j);
				var b,
					L,
					M,
					ee,
					te =
						((M = ue),
						(ee = (function () {
							if (
								typeof Reflect > "u" ||
								!Reflect.construct ||
								Reflect.construct.sham
							)
								return !1;
							if (typeof Proxy == "function") return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch {
								return !1;
							}
						})()),
						function () {
							var m,
								v = C(M);
							if (ee) {
								var _ = C(this).constructor;
								m = Reflect.construct(v, arguments, _);
							} else m = v.apply(this, arguments);
							return (function (I, D) {
								if (D && (c(D) === "object" || typeof D == "function"))
									return D;
								if (D !== void 0)
									throw new TypeError(
										"Derived constructors may only return object or undefined"
									);
								return (function (U) {
									if (U === void 0)
										throw new ReferenceError(
											"this hasn't been initialised - super() hasn't been called"
										);
									return U;
								})(I);
							})(this, m);
						});
				function ue(m) {
					var v;
					if (
						((function (I, D) {
							if (!(I instanceof D))
								throw new TypeError("Cannot call a class as a function");
						})(this, ue),
						((v = te.call(this, m)).supportsObserver =
							!m.scrollPosition && m.useIntersectionObserver && u()),
						v.supportsObserver)
					) {
						var _ = m.threshold;
						v.observer = (function (I) {
							return (
								(p[I] =
									p[I] ||
									new IntersectionObserver(y, { rootMargin: I + "px" })),
								p[I]
							);
						})(_);
					}
					return v;
				}
				return (
					(b = ue),
					(L = [
						{
							key: "componentDidMount",
							value: function () {
								this.placeholder &&
									this.observer &&
									((this.placeholder.onVisible = this.props.onVisible),
									this.observer.observe(this.placeholder)),
									this.supportsObserver || this.updateVisibility();
							},
						},
						{
							key: "componentWillUnmount",
							value: function () {
								this.observer &&
									this.placeholder &&
									this.observer.unobserve(this.placeholder);
							},
						},
						{
							key: "componentDidUpdate",
							value: function () {
								this.supportsObserver || this.updateVisibility();
							},
						},
						{
							key: "getPlaceholderBoundingBox",
							value: function () {
								var m =
										arguments.length > 0 && arguments[0] !== void 0
											? arguments[0]
											: this.props.scrollPosition,
									v = this.placeholder.getBoundingClientRect(),
									_ = l().findDOMNode(this.placeholder).style,
									I = parseInt(_.getPropertyValue("margin-left"), 10) || 0,
									D = parseInt(_.getPropertyValue("margin-top"), 10) || 0;
								return {
									bottom: m.y + v.bottom + D,
									left: m.x + v.left + I,
									right: m.x + v.right + I,
									top: m.y + v.top + D,
								};
							},
						},
						{
							key: "isPlaceholderInViewport",
							value: function () {
								if (typeof window > "u" || !this.placeholder) return !1;
								var m = this.props,
									v = m.scrollPosition,
									_ = m.threshold,
									I = this.getPlaceholderBoundingBox(v),
									D = v.y + window.innerHeight,
									U = v.x,
									V = v.x + window.innerWidth,
									$ = v.y;
								return (
									$ - _ <= I.bottom &&
									D + _ >= I.top &&
									U - _ <= I.right &&
									V + _ >= I.left
								);
							},
						},
						{
							key: "updateVisibility",
							value: function () {
								this.isPlaceholderInViewport() && this.props.onVisible();
							},
						},
						{
							key: "render",
							value: function () {
								var m = this,
									v = this.props,
									_ = v.className,
									I = v.height,
									D = v.placeholder,
									U = v.style,
									V = v.width;
								if (D && typeof D.type != "function")
									return o().cloneElement(D, {
										ref: function (z) {
											return (m.placeholder = z);
										},
									});
								var $ = (function (z) {
									for (var X = 1; X < arguments.length; X++) {
										var ie = arguments[X] != null ? arguments[X] : {};
										X % 2
											? d(Object(ie), !0).forEach(function (Y) {
													f(z, Y, ie[Y]);
											  })
											: Object.getOwnPropertyDescriptors
											? Object.defineProperties(
													z,
													Object.getOwnPropertyDescriptors(ie)
											  )
											: d(Object(ie)).forEach(function (Y) {
													Object.defineProperty(
														z,
														Y,
														Object.getOwnPropertyDescriptor(ie, Y)
													);
											  });
									}
									return z;
								})({ display: "inline-block" }, U);
								return (
									V !== void 0 && ($.width = V),
									I !== void 0 && ($.height = I),
									o().createElement(
										"span",
										{
											className: _,
											ref: function (z) {
												return (m.placeholder = z);
											},
											style: $,
										},
										D
									)
								);
							},
						},
					]),
					L && S(b.prototype, L),
					Object.defineProperty(b, "prototype", { writable: !1 }),
					ue
				);
			})(o().Component);
		(w.propTypes = {
			onVisible: s.PropTypes.func.isRequired,
			className: s.PropTypes.string,
			height: s.PropTypes.oneOfType([s.PropTypes.number, s.PropTypes.string]),
			placeholder: s.PropTypes.element,
			threshold: s.PropTypes.number,
			useIntersectionObserver: s.PropTypes.bool,
			scrollPosition: s.PropTypes.shape({
				x: s.PropTypes.number.isRequired,
				y: s.PropTypes.number.isRequired,
			}),
			width: s.PropTypes.oneOfType([s.PropTypes.number, s.PropTypes.string]),
		}),
			(w.defaultProps = {
				className: "",
				placeholder: null,
				threshold: 100,
				useIntersectionObserver: !0,
			});
		const g = w;
		var k = n(296),
			P = n.n(k),
			T = n(96),
			R = n.n(T),
			B = function (j) {
				var b = getComputedStyle(j, null);
				return (
					b.getPropertyValue("overflow") +
					b.getPropertyValue("overflow-y") +
					b.getPropertyValue("overflow-x")
				);
			};
		const H = function (j) {
			if (!(j instanceof HTMLElement)) return window;
			for (var b = j; b && b instanceof HTMLElement; ) {
				if (/(scroll|auto)/.test(B(b))) return b;
				b = b.parentNode;
			}
			return window;
		};
		function Z(j) {
			return (
				(Z =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (b) {
								return typeof b;
						  }
						: function (b) {
								return b &&
									typeof Symbol == "function" &&
									b.constructor === Symbol &&
									b !== Symbol.prototype
									? "symbol"
									: typeof b;
						  }),
				Z(j)
			);
		}
		var K = ["delayMethod", "delayTime"];
		function pe() {
			return (
				(pe = Object.assign
					? Object.assign.bind()
					: function (j) {
							for (var b = 1; b < arguments.length; b++) {
								var L = arguments[b];
								for (var M in L)
									Object.prototype.hasOwnProperty.call(L, M) && (j[M] = L[M]);
							}
							return j;
					  }),
				pe.apply(this, arguments)
			);
		}
		function we(j, b) {
			for (var L = 0; L < b.length; L++) {
				var M = b[L];
				(M.enumerable = M.enumerable || !1),
					(M.configurable = !0),
					"value" in M && (M.writable = !0),
					Object.defineProperty(
						j,
						((ee = (function (te, ue) {
							if (Z(te) !== "object" || te === null) return te;
							var m = te[Symbol.toPrimitive];
							if (m !== void 0) {
								var v = m.call(te, "string");
								if (Z(v) !== "object") return v;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(te);
						})(M.key)),
						Z(ee) === "symbol" ? ee : String(ee)),
						M
					);
			}
			var ee;
		}
		function Te(j, b) {
			return (
				(Te = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (L, M) {
							return (L.__proto__ = M), L;
					  }),
				Te(j, b)
			);
		}
		function de(j, b) {
			if (b && (Z(b) === "object" || typeof b == "function")) return b;
			if (b !== void 0)
				throw new TypeError(
					"Derived constructors may only return object or undefined"
				);
			return Ce(j);
		}
		function Ce(j) {
			if (j === void 0)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return j;
		}
		function F(j) {
			return (
				(F = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (b) {
							return b.__proto__ || Object.getPrototypeOf(b);
					  }),
				F(j)
			);
		}
		var Q = function () {
				return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset;
			},
			q = function () {
				return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset;
			};
		const ne = function (j) {
			var b = (function (L) {
				(function (_, I) {
					if (typeof I != "function" && I !== null)
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					(_.prototype = Object.create(I && I.prototype, {
						constructor: { value: _, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(_, "prototype", { writable: !1 }),
						I && Te(_, I);
				})(v, L);
				var M,
					ee,
					te,
					ue,
					m =
						((te = v),
						(ue = (function () {
							if (
								typeof Reflect > "u" ||
								!Reflect.construct ||
								Reflect.construct.sham
							)
								return !1;
							if (typeof Proxy == "function") return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch {
								return !1;
							}
						})()),
						function () {
							var _,
								I = F(te);
							if (ue) {
								var D = F(this).constructor;
								_ = Reflect.construct(I, arguments, D);
							} else _ = I.apply(this, arguments);
							return de(this, _);
						});
				function v(_) {
					var I;
					if (
						((function (U, V) {
							if (!(U instanceof V))
								throw new TypeError("Cannot call a class as a function");
						})(this, v),
						((I = m.call(this, _)).useIntersectionObserver =
							_.useIntersectionObserver && u()),
						I.useIntersectionObserver)
					)
						return de(I);
					var D = I.onChangeScroll.bind(Ce(I));
					return (
						_.delayMethod === "debounce"
							? (I.delayedScroll = P()(D, _.delayTime))
							: _.delayMethod === "throttle" &&
							  (I.delayedScroll = R()(D, _.delayTime)),
						(I.state = { scrollPosition: { x: Q(), y: q() } }),
						(I.baseComponentRef = o().createRef()),
						I
					);
				}
				return (
					(M = v),
					(ee = [
						{
							key: "componentDidMount",
							value: function () {
								this.addListeners();
							},
						},
						{
							key: "componentWillUnmount",
							value: function () {
								this.removeListeners();
							},
						},
						{
							key: "componentDidUpdate",
							value: function () {
								typeof window > "u" ||
									this.useIntersectionObserver ||
									(H(l().findDOMNode(this.baseComponentRef.current)) !==
										this.scrollElement &&
										(this.removeListeners(), this.addListeners()));
							},
						},
						{
							key: "addListeners",
							value: function () {
								typeof window > "u" ||
									this.useIntersectionObserver ||
									((this.scrollElement = H(
										l().findDOMNode(this.baseComponentRef.current)
									)),
									this.scrollElement.addEventListener(
										"scroll",
										this.delayedScroll,
										{ passive: !0 }
									),
									window.addEventListener("resize", this.delayedScroll, {
										passive: !0,
									}),
									this.scrollElement !== window &&
										window.addEventListener("scroll", this.delayedScroll, {
											passive: !0,
										}));
							},
						},
						{
							key: "removeListeners",
							value: function () {
								typeof window > "u" ||
									this.useIntersectionObserver ||
									(this.scrollElement.removeEventListener(
										"scroll",
										this.delayedScroll
									),
									window.removeEventListener("resize", this.delayedScroll),
									this.scrollElement !== window &&
										window.removeEventListener("scroll", this.delayedScroll));
							},
						},
						{
							key: "onChangeScroll",
							value: function () {
								this.useIntersectionObserver ||
									this.setState({ scrollPosition: { x: Q(), y: q() } });
							},
						},
						{
							key: "render",
							value: function () {
								var _ = this.props,
									I =
										(_.delayMethod,
										_.delayTime,
										(function (U, V) {
											if (U == null) return {};
											var $,
												z,
												X = (function (Y, fe) {
													if (Y == null) return {};
													var ge,
														wt,
														zt = {},
														_n = Object.keys(Y);
													for (wt = 0; wt < _n.length; wt++)
														(ge = _n[wt]),
															fe.indexOf(ge) >= 0 || (zt[ge] = Y[ge]);
													return zt;
												})(U, V);
											if (Object.getOwnPropertySymbols) {
												var ie = Object.getOwnPropertySymbols(U);
												for (z = 0; z < ie.length; z++)
													($ = ie[z]),
														V.indexOf($) >= 0 ||
															(Object.prototype.propertyIsEnumerable.call(
																U,
																$
															) &&
																(X[$] = U[$]));
											}
											return X;
										})(_, K)),
									D = this.useIntersectionObserver
										? null
										: this.state.scrollPosition;
								return o().createElement(
									j,
									pe(
										{ forwardRef: this.baseComponentRef, scrollPosition: D },
										I
									)
								);
							},
						},
					]) && we(M.prototype, ee),
					Object.defineProperty(M, "prototype", { writable: !1 }),
					v
				);
			})(o().Component);
			return (
				(b.propTypes = {
					delayMethod: s.PropTypes.oneOf(["debounce", "throttle"]),
					delayTime: s.PropTypes.number,
					useIntersectionObserver: s.PropTypes.bool,
				}),
				(b.defaultProps = {
					delayMethod: "throttle",
					delayTime: 300,
					useIntersectionObserver: !0,
				}),
				b
			);
		};
		function re(j) {
			return (
				(re =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (b) {
								return typeof b;
						  }
						: function (b) {
								return b &&
									typeof Symbol == "function" &&
									b.constructor === Symbol &&
									b !== Symbol.prototype
									? "symbol"
									: typeof b;
						  }),
				re(j)
			);
		}
		function Ee(j, b) {
			for (var L = 0; L < b.length; L++) {
				var M = b[L];
				(M.enumerable = M.enumerable || !1),
					(M.configurable = !0),
					"value" in M && (M.writable = !0),
					Object.defineProperty(
						j,
						((ee = (function (te, ue) {
							if (re(te) !== "object" || te === null) return te;
							var m = te[Symbol.toPrimitive];
							if (m !== void 0) {
								var v = m.call(te, "string");
								if (re(v) !== "object") return v;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(te);
						})(M.key)),
						re(ee) === "symbol" ? ee : String(ee)),
						M
					);
			}
			var ee;
		}
		function J(j, b) {
			return (
				(J = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (L, M) {
							return (L.__proto__ = M), L;
					  }),
				J(j, b)
			);
		}
		function ye(j) {
			return (
				(ye = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (b) {
							return b.__proto__ || Object.getPrototypeOf(b);
					  }),
				ye(j)
			);
		}
		var Qe = (function (j) {
			(function (m, v) {
				if (typeof v != "function" && v !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(m.prototype = Object.create(v && v.prototype, {
					constructor: { value: m, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(m, "prototype", { writable: !1 }),
					v && J(m, v);
			})(ue, j);
			var b,
				L,
				M,
				ee,
				te =
					((M = ue),
					(ee = (function () {
						if (
							typeof Reflect > "u" ||
							!Reflect.construct ||
							Reflect.construct.sham
						)
							return !1;
						if (typeof Proxy == "function") return !0;
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(Boolean, [], function () {})
								),
								!0
							);
						} catch {
							return !1;
						}
					})()),
					function () {
						var m,
							v = ye(M);
						if (ee) {
							var _ = ye(this).constructor;
							m = Reflect.construct(v, arguments, _);
						} else m = v.apply(this, arguments);
						return (function (I, D) {
							if (D && (re(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return (function (U) {
								if (U === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return U;
							})(I);
						})(this, m);
					});
			function ue(m) {
				return (
					(function (v, _) {
						if (!(v instanceof _))
							throw new TypeError("Cannot call a class as a function");
					})(this, ue),
					te.call(this, m)
				);
			}
			return (
				(b = ue),
				(L = [
					{
						key: "render",
						value: function () {
							return o().createElement(g, this.props);
						},
					},
				]) && Ee(b.prototype, L),
				Object.defineProperty(b, "prototype", { writable: !1 }),
				ue
			);
		})(o().Component);
		const Ot = ne(Qe);
		function Ne(j) {
			return (
				(Ne =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (b) {
								return typeof b;
						  }
						: function (b) {
								return b &&
									typeof Symbol == "function" &&
									b.constructor === Symbol &&
									b !== Symbol.prototype
									? "symbol"
									: typeof b;
						  }),
				Ne(j)
			);
		}
		function Pr(j, b) {
			for (var L = 0; L < b.length; L++) {
				var M = b[L];
				(M.enumerable = M.enumerable || !1),
					(M.configurable = !0),
					"value" in M && (M.writable = !0),
					Object.defineProperty(
						j,
						((ee = (function (te, ue) {
							if (Ne(te) !== "object" || te === null) return te;
							var m = te[Symbol.toPrimitive];
							if (m !== void 0) {
								var v = m.call(te, "string");
								if (Ne(v) !== "object") return v;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(te);
						})(M.key)),
						Ne(ee) === "symbol" ? ee : String(ee)),
						M
					);
			}
			var ee;
		}
		function Jt(j, b) {
			return (
				(Jt = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (L, M) {
							return (L.__proto__ = M), L;
					  }),
				Jt(j, b)
			);
		}
		function Ae(j) {
			if (j === void 0)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return j;
		}
		function Ke(j) {
			return (
				(Ke = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (b) {
							return b.__proto__ || Object.getPrototypeOf(b);
					  }),
				Ke(j)
			);
		}
		var ct = (function (j) {
			(function (m, v) {
				if (typeof v != "function" && v !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(m.prototype = Object.create(v && v.prototype, {
					constructor: { value: m, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(m, "prototype", { writable: !1 }),
					v && Jt(m, v);
			})(ue, j);
			var b,
				L,
				M,
				ee,
				te =
					((M = ue),
					(ee = (function () {
						if (
							typeof Reflect > "u" ||
							!Reflect.construct ||
							Reflect.construct.sham
						)
							return !1;
						if (typeof Proxy == "function") return !0;
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(Boolean, [], function () {})
								),
								!0
							);
						} catch {
							return !1;
						}
					})()),
					function () {
						var m,
							v = Ke(M);
						if (ee) {
							var _ = Ke(this).constructor;
							m = Reflect.construct(v, arguments, _);
						} else m = v.apply(this, arguments);
						return (function (I, D) {
							if (D && (Ne(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return Ae(I);
						})(this, m);
					});
			function ue(m) {
				var v;
				(function (V, $) {
					if (!(V instanceof $))
						throw new TypeError("Cannot call a class as a function");
				})(this, ue),
					(v = te.call(this, m));
				var _ = m.afterLoad,
					I = m.beforeLoad,
					D = m.scrollPosition,
					U = m.visibleByDefault;
				return (
					(v.state = { visible: U }),
					U && (I(), _()),
					(v.onVisible = v.onVisible.bind(Ae(v))),
					(v.isScrollTracked = !!(
						D &&
						Number.isFinite(D.x) &&
						D.x >= 0 &&
						Number.isFinite(D.y) &&
						D.y >= 0
					)),
					v
				);
			}
			return (
				(b = ue),
				(L = [
					{
						key: "componentDidUpdate",
						value: function (m, v) {
							v.visible !== this.state.visible && this.props.afterLoad();
						},
					},
					{
						key: "onVisible",
						value: function () {
							this.props.beforeLoad(), this.setState({ visible: !0 });
						},
					},
					{
						key: "render",
						value: function () {
							if (this.state.visible) return this.props.children;
							var m = this.props,
								v = m.className,
								_ = m.delayMethod,
								I = m.delayTime,
								D = m.height,
								U = m.placeholder,
								V = m.scrollPosition,
								$ = m.style,
								z = m.threshold,
								X = m.useIntersectionObserver,
								ie = m.width;
							return this.isScrollTracked || (X && u())
								? o().createElement(g, {
										className: v,
										height: D,
										onVisible: this.onVisible,
										placeholder: U,
										scrollPosition: V,
										style: $,
										threshold: z,
										useIntersectionObserver: X,
										width: ie,
								  })
								: o().createElement(Ot, {
										className: v,
										delayMethod: _,
										delayTime: I,
										height: D,
										onVisible: this.onVisible,
										placeholder: U,
										style: $,
										threshold: z,
										width: ie,
								  });
						},
					},
				]) && Pr(b.prototype, L),
				Object.defineProperty(b, "prototype", { writable: !1 }),
				ue
			);
		})(o().Component);
		(ct.propTypes = {
			afterLoad: s.PropTypes.func,
			beforeLoad: s.PropTypes.func,
			useIntersectionObserver: s.PropTypes.bool,
			visibleByDefault: s.PropTypes.bool,
		}),
			(ct.defaultProps = {
				afterLoad: function () {
					return {};
				},
				beforeLoad: function () {
					return {};
				},
				useIntersectionObserver: !0,
				visibleByDefault: !1,
			});
		const Zo = ct;
		function vt(j) {
			return (
				(vt =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (b) {
								return typeof b;
						  }
						: function (b) {
								return b &&
									typeof Symbol == "function" &&
									b.constructor === Symbol &&
									b !== Symbol.prototype
									? "symbol"
									: typeof b;
						  }),
				vt(j)
			);
		}
		var es = [
			"afterLoad",
			"beforeLoad",
			"delayMethod",
			"delayTime",
			"effect",
			"placeholder",
			"placeholderSrc",
			"scrollPosition",
			"threshold",
			"useIntersectionObserver",
			"visibleByDefault",
			"wrapperClassName",
			"wrapperProps",
		];
		function Tr(j, b) {
			var L = Object.keys(j);
			if (Object.getOwnPropertySymbols) {
				var M = Object.getOwnPropertySymbols(j);
				b &&
					(M = M.filter(function (ee) {
						return Object.getOwnPropertyDescriptor(j, ee).enumerable;
					})),
					L.push.apply(L, M);
			}
			return L;
		}
		function nr(j) {
			for (var b = 1; b < arguments.length; b++) {
				var L = arguments[b] != null ? arguments[b] : {};
				b % 2
					? Tr(Object(L), !0).forEach(function (M) {
							Ti(j, M, L[M]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(j, Object.getOwnPropertyDescriptors(L))
					: Tr(Object(L)).forEach(function (M) {
							Object.defineProperty(
								j,
								M,
								Object.getOwnPropertyDescriptor(L, M)
							);
					  });
			}
			return j;
		}
		function Ti(j, b, L) {
			return (
				(b = Oi(b)) in j
					? Object.defineProperty(j, b, {
							value: L,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (j[b] = L),
				j
			);
		}
		function dt() {
			return (
				(dt = Object.assign
					? Object.assign.bind()
					: function (j) {
							for (var b = 1; b < arguments.length; b++) {
								var L = arguments[b];
								for (var M in L)
									Object.prototype.hasOwnProperty.call(L, M) && (j[M] = L[M]);
							}
							return j;
					  }),
				dt.apply(this, arguments)
			);
		}
		function ts(j, b) {
			for (var L = 0; L < b.length; L++) {
				var M = b[L];
				(M.enumerable = M.enumerable || !1),
					(M.configurable = !0),
					"value" in M && (M.writable = !0),
					Object.defineProperty(j, Oi(M.key), M);
			}
		}
		function Oi(j) {
			var b = (function (L, M) {
				if (vt(L) !== "object" || L === null) return L;
				var ee = L[Symbol.toPrimitive];
				if (ee !== void 0) {
					var te = ee.call(L, "string");
					if (vt(te) !== "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}
				return String(L);
			})(j);
			return vt(b) === "symbol" ? b : String(b);
		}
		function Or(j, b) {
			return (
				(Or = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (L, M) {
							return (L.__proto__ = M), L;
					  }),
				Or(j, b)
			);
		}
		function Ir(j) {
			return (
				(Ir = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (b) {
							return b.__proto__ || Object.getPrototypeOf(b);
					  }),
				Ir(j)
			);
		}
		var Nr = (function (j) {
			(function (m, v) {
				if (typeof v != "function" && v !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(m.prototype = Object.create(v && v.prototype, {
					constructor: { value: m, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(m, "prototype", { writable: !1 }),
					v && Or(m, v);
			})(ue, j);
			var b,
				L,
				M,
				ee,
				te =
					((M = ue),
					(ee = (function () {
						if (
							typeof Reflect > "u" ||
							!Reflect.construct ||
							Reflect.construct.sham
						)
							return !1;
						if (typeof Proxy == "function") return !0;
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(Boolean, [], function () {})
								),
								!0
							);
						} catch {
							return !1;
						}
					})()),
					function () {
						var m,
							v = Ir(M);
						if (ee) {
							var _ = Ir(this).constructor;
							m = Reflect.construct(v, arguments, _);
						} else m = v.apply(this, arguments);
						return (function (I, D) {
							if (D && (vt(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return (function (U) {
								if (U === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return U;
							})(I);
						})(this, m);
					});
			function ue(m) {
				var v;
				return (
					(function (_, I) {
						if (!(_ instanceof I))
							throw new TypeError("Cannot call a class as a function");
					})(this, ue),
					((v = te.call(this, m)).state = { loaded: !1 }),
					v
				);
			}
			return (
				(b = ue),
				(L = [
					{
						key: "onImageLoad",
						value: function () {
							var m = this;
							return this.state.loaded
								? null
								: function (v) {
										m.props.onLoad(v),
											m.props.afterLoad(),
											m.setState({ loaded: !0 });
								  };
						},
					},
					{
						key: "getImg",
						value: function () {
							var m = this.props,
								v =
									(m.afterLoad,
									m.beforeLoad,
									m.delayMethod,
									m.delayTime,
									m.effect,
									m.placeholder,
									m.placeholderSrc,
									m.scrollPosition,
									m.threshold,
									m.useIntersectionObserver,
									m.visibleByDefault,
									m.wrapperClassName,
									m.wrapperProps,
									(function (_, I) {
										if (_ == null) return {};
										var D,
											U,
											V = (function (z, X) {
												if (z == null) return {};
												var ie,
													Y,
													fe = {},
													ge = Object.keys(z);
												for (Y = 0; Y < ge.length; Y++)
													(ie = ge[Y]), X.indexOf(ie) >= 0 || (fe[ie] = z[ie]);
												return fe;
											})(_, I);
										if (Object.getOwnPropertySymbols) {
											var $ = Object.getOwnPropertySymbols(_);
											for (U = 0; U < $.length; U++)
												(D = $[U]),
													I.indexOf(D) >= 0 ||
														(Object.prototype.propertyIsEnumerable.call(_, D) &&
															(V[D] = _[D]));
										}
										return V;
									})(m, es));
							return o().createElement(
								"img",
								dt({}, v, { onLoad: this.onImageLoad() })
							);
						},
					},
					{
						key: "getLazyLoadImage",
						value: function () {
							var m = this.props,
								v = m.beforeLoad,
								_ = m.className,
								I = m.delayMethod,
								D = m.delayTime,
								U = m.height,
								V = m.placeholder,
								$ = m.scrollPosition,
								z = m.style,
								X = m.threshold,
								ie = m.useIntersectionObserver,
								Y = m.visibleByDefault,
								fe = m.width;
							return o().createElement(
								Zo,
								{
									beforeLoad: v,
									className: _,
									delayMethod: I,
									delayTime: D,
									height: U,
									placeholder: V,
									scrollPosition: $,
									style: z,
									threshold: X,
									useIntersectionObserver: ie,
									visibleByDefault: Y,
									width: fe,
								},
								this.getImg()
							);
						},
					},
					{
						key: "getWrappedLazyLoadImage",
						value: function (m) {
							var v = this.props,
								_ = v.effect,
								I = v.height,
								D = v.placeholderSrc,
								U = v.width,
								V = v.wrapperClassName,
								$ = v.wrapperProps,
								z = this.state.loaded,
								X = z ? " lazy-load-image-loaded" : "",
								ie =
									z || !D
										? {}
										: {
												backgroundImage: "url(".concat(D, ")"),
												backgroundSize: "100% 100%",
										  };
							return o().createElement(
								"span",
								dt(
									{
										className: V + " lazy-load-image-background " + _ + X,
										style: nr(
											nr({}, ie),
											{},
											{
												color: "transparent",
												display: "inline-block",
												height: I,
												width: U,
											}
										),
									},
									$
								),
								m
							);
						},
					},
					{
						key: "render",
						value: function () {
							var m = this.props,
								v = m.effect,
								_ = m.placeholderSrc,
								I = m.visibleByDefault,
								D = m.wrapperClassName,
								U = m.wrapperProps,
								V = this.getLazyLoadImage();
							return ((v || _) && !I) || D || U
								? this.getWrappedLazyLoadImage(V)
								: V;
						},
					},
				]) && ts(b.prototype, L),
				Object.defineProperty(b, "prototype", { writable: !1 }),
				ue
			);
		})(o().Component);
		(Nr.propTypes = {
			onLoad: s.PropTypes.func,
			afterLoad: s.PropTypes.func,
			beforeLoad: s.PropTypes.func,
			delayMethod: s.PropTypes.string,
			delayTime: s.PropTypes.number,
			effect: s.PropTypes.string,
			placeholderSrc: s.PropTypes.string,
			threshold: s.PropTypes.number,
			useIntersectionObserver: s.PropTypes.bool,
			visibleByDefault: s.PropTypes.bool,
			wrapperClassName: s.PropTypes.string,
			wrapperProps: s.PropTypes.object,
		}),
			(Nr.defaultProps = {
				onLoad: function () {},
				afterLoad: function () {
					return {};
				},
				beforeLoad: function () {
					return {};
				},
				delayMethod: "throttle",
				delayTime: 300,
				effect: "",
				placeholderSrc: null,
				threshold: 100,
				useIntersectionObserver: !0,
				visibleByDefault: !1,
				wrapperClassName: "",
			});
		const Dr = Nr;
	})(),
		(Fy.exports = r);
})();
var va = Fy.exports;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uy = function (t) {
		const e = [];
		let n = 0;
		for (let r = 0; r < t.length; r++) {
			let i = t.charCodeAt(r);
			i < 128
				? (e[n++] = i)
				: i < 2048
				? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
				: (i & 64512) === 55296 &&
				  r + 1 < t.length &&
				  (t.charCodeAt(r + 1) & 64512) === 56320
				? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
				  (e[n++] = (i >> 18) | 240),
				  (e[n++] = ((i >> 12) & 63) | 128),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128))
				: ((e[n++] = (i >> 12) | 224),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128));
		}
		return e;
	},
	hE = function (t) {
		const e = [];
		let n = 0,
			r = 0;
		for (; n < t.length; ) {
			const i = t[n++];
			if (i < 128) e[r++] = String.fromCharCode(i);
			else if (i > 191 && i < 224) {
				const o = t[n++];
				e[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63));
			} else if (i > 239 && i < 365) {
				const o = t[n++],
					s = t[n++],
					a = t[n++],
					l =
						(((i & 7) << 18) | ((o & 63) << 12) | ((s & 63) << 6) | (a & 63)) -
						65536;
				(e[r++] = String.fromCharCode(55296 + (l >> 10))),
					(e[r++] = String.fromCharCode(56320 + (l & 1023)));
			} else {
				const o = t[n++],
					s = t[n++];
				e[r++] = String.fromCharCode(
					((i & 15) << 12) | ((o & 63) << 6) | (s & 63)
				);
			}
		}
		return e.join("");
	},
	zy = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE:
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + "+/=";
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + "-_.";
		},
		HAS_NATIVE_SUPPORT: typeof atob == "function",
		encodeByteArray(t, e) {
			if (!Array.isArray(t))
				throw Error("encodeByteArray takes an array as a parameter");
			this.init_();
			const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				r = [];
			for (let i = 0; i < t.length; i += 3) {
				const o = t[i],
					s = i + 1 < t.length,
					a = s ? t[i + 1] : 0,
					l = i + 2 < t.length,
					u = l ? t[i + 2] : 0,
					c = o >> 2,
					d = ((o & 3) << 4) | (a >> 4);
				let f = ((a & 15) << 2) | (u >> 6),
					S = u & 63;
				l || ((S = 64), s || (f = 64)), r.push(n[c], n[d], n[f], n[S]);
			}
			return r.join("");
		},
		encodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? btoa(t)
				: this.encodeByteArray(Uy(t), e);
		},
		decodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? atob(t)
				: hE(this.decodeStringToByteArray(t, e));
		},
		decodeStringToByteArray(t, e) {
			this.init_();
			const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				r = [];
			for (let i = 0; i < t.length; ) {
				const o = n[t.charAt(i++)],
					a = i < t.length ? n[t.charAt(i)] : 0;
				++i;
				const u = i < t.length ? n[t.charAt(i)] : 64;
				++i;
				const d = i < t.length ? n[t.charAt(i)] : 64;
				if ((++i, o == null || a == null || u == null || d == null))
					throw new pE();
				const f = (o << 2) | (a >> 4);
				if ((r.push(f), u !== 64)) {
					const S = ((a << 4) & 240) | (u >> 2);
					if ((r.push(S), d !== 64)) {
						const E = ((u << 6) & 192) | d;
						r.push(E);
					}
				}
			}
			return r;
		},
		init_() {
			if (!this.byteToCharMap_) {
				(this.byteToCharMap_ = {}),
					(this.charToByteMap_ = {}),
					(this.byteToCharMapWebSafe_ = {}),
					(this.charToByteMapWebSafe_ = {});
				for (let t = 0; t < this.ENCODED_VALS.length; t++)
					(this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
						(this.charToByteMap_[this.byteToCharMap_[t]] = t),
						(this.byteToCharMapWebSafe_[t] =
							this.ENCODED_VALS_WEBSAFE.charAt(t)),
						(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
						t >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
							(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
			}
		},
	};
class pE extends Error {
	constructor() {
		super(...arguments), (this.name = "DecodeBase64StringError");
	}
}
const mE = function (t) {
		const e = Uy(t);
		return zy.encodeByteArray(e, !0);
	},
	By = function (t) {
		return mE(t).replace(/\./g, "");
	},
	$y = function (t) {
		try {
			return zy.decodeString(t, !0);
		} catch (e) {
			console.error("base64Decode failed: ", e);
		}
		return null;
	};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yE() {
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
	throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gE = () => yE().__FIREBASE_DEFAULTS__,
	vE = () => {
		if (typeof process > "u" || typeof process.env > "u") return;
		const t = {}.__FIREBASE_DEFAULTS__;
		if (t) return JSON.parse(t);
	},
	wE = () => {
		if (typeof document > "u") return;
		let t;
		try {
			t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		const e = t && $y(t[1]);
		return e && JSON.parse(e);
	},
	vd = () => {
		try {
			return gE() || vE() || wE();
		} catch (t) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
			return;
		}
	},
	EE = (t) => {
		var e, n;
		return (n =
			(e = vd()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
			null || n === void 0
			? void 0
			: n[t];
	},
	Hy = () => {
		var t;
		return (t = vd()) === null || t === void 0 ? void 0 : t.config;
	},
	Vy = (t) => {
		var e;
		return (e = vd()) === null || e === void 0 ? void 0 : e[`_${t}`];
	};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SE {
	constructor() {
		(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((e, n) => {
				(this.resolve = e), (this.reject = n);
			}));
	}
	wrapCallback(e) {
		return (n, r) => {
			n ? this.reject(n) : this.resolve(r),
				typeof e == "function" &&
					(this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
		};
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ze() {
	return typeof navigator < "u" && typeof navigator.userAgent == "string"
		? navigator.userAgent
		: "";
}
function xE() {
	return (
		typeof window < "u" &&
		!!(window.cordova || window.phonegap || window.PhoneGap) &&
		/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())
	);
}
function _E() {
	const t =
		typeof chrome == "object"
			? chrome.runtime
			: typeof browser == "object"
			? browser.runtime
			: void 0;
	return typeof t == "object" && t.id !== void 0;
}
function bE() {
	return typeof navigator == "object" && navigator.product === "ReactNative";
}
function CE() {
	const t = Ze();
	return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function kE() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function RE() {
	return new Promise((t, e) => {
		try {
			let n = !0;
			const r = "validate-browser-context-for-indexeddb-analytics-module",
				i = self.indexedDB.open(r);
			(i.onsuccess = () => {
				i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
			}),
				(i.onupgradeneeded = () => {
					n = !1;
				}),
				(i.onerror = () => {
					var o;
					e(
						((o = i.error) === null || o === void 0 ? void 0 : o.message) || ""
					);
				});
		} catch (n) {
			e(n);
		}
	});
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PE = "FirebaseError";
class er extends Error {
	constructor(e, n, r) {
		super(n),
			(this.code = e),
			(this.customData = r),
			(this.name = PE),
			Object.setPrototypeOf(this, er.prototype),
			Error.captureStackTrace &&
				Error.captureStackTrace(this, Bo.prototype.create);
	}
}
class Bo {
	constructor(e, n, r) {
		(this.service = e), (this.serviceName = n), (this.errors = r);
	}
	create(e, ...n) {
		const r = n[0] || {},
			i = `${this.service}/${e}`,
			o = this.errors[e],
			s = o ? TE(o, r) : "Error",
			a = `${this.serviceName}: ${s} (${i}).`;
		return new er(i, a, r);
	}
}
function TE(t, e) {
	return t.replace(OE, (n, r) => {
		const i = e[r];
		return i != null ? String(i) : `<${r}?>`;
	});
}
const OE = /\{\$([^}]+)}/g;
function IE(t) {
	for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
	return !0;
}
function wa(t, e) {
	if (t === e) return !0;
	const n = Object.keys(t),
		r = Object.keys(e);
	for (const i of n) {
		if (!r.includes(i)) return !1;
		const o = t[i],
			s = e[i];
		if (ph(o) && ph(s)) {
			if (!wa(o, s)) return !1;
		} else if (o !== s) return !1;
	}
	for (const i of r) if (!n.includes(i)) return !1;
	return !0;
}
function ph(t) {
	return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $o(t) {
	const e = [];
	for (const [n, r] of Object.entries(t))
		Array.isArray(r)
			? r.forEach((i) => {
					e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
			  })
			: e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
	return e.length ? "&" + e.join("&") : "";
}
function Gi(t) {
	const e = {};
	return (
		t
			.replace(/^\?/, "")
			.split("&")
			.forEach((r) => {
				if (r) {
					const [i, o] = r.split("=");
					e[decodeURIComponent(i)] = decodeURIComponent(o);
				}
			}),
		e
	);
}
function Ji(t) {
	const e = t.indexOf("?");
	if (!e) return "";
	const n = t.indexOf("#", e);
	return t.substring(e, n > 0 ? n : void 0);
}
function NE(t, e) {
	const n = new DE(t, e);
	return n.subscribe.bind(n);
}
class DE {
	constructor(e, n) {
		(this.observers = []),
			(this.unsubscribes = []),
			(this.observerCount = 0),
			(this.task = Promise.resolve()),
			(this.finalized = !1),
			(this.onNoObservers = n),
			this.task
				.then(() => {
					e(this);
				})
				.catch((r) => {
					this.error(r);
				});
	}
	next(e) {
		this.forEachObserver((n) => {
			n.next(e);
		});
	}
	error(e) {
		this.forEachObserver((n) => {
			n.error(e);
		}),
			this.close(e);
	}
	complete() {
		this.forEachObserver((e) => {
			e.complete();
		}),
			this.close();
	}
	subscribe(e, n, r) {
		let i;
		if (e === void 0 && n === void 0 && r === void 0)
			throw new Error("Missing Observer.");
		jE(e, ["next", "error", "complete"])
			? (i = e)
			: (i = { next: e, error: n, complete: r }),
			i.next === void 0 && (i.next = $l),
			i.error === void 0 && (i.error = $l),
			i.complete === void 0 && (i.complete = $l);
		const o = this.unsubscribeOne.bind(this, this.observers.length);
		return (
			this.finalized &&
				this.task.then(() => {
					try {
						this.finalError ? i.error(this.finalError) : i.complete();
					} catch {}
				}),
			this.observers.push(i),
			o
		);
	}
	unsubscribeOne(e) {
		this.observers === void 0 ||
			this.observers[e] === void 0 ||
			(delete this.observers[e],
			(this.observerCount -= 1),
			this.observerCount === 0 &&
				this.onNoObservers !== void 0 &&
				this.onNoObservers(this));
	}
	forEachObserver(e) {
		if (!this.finalized)
			for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
	}
	sendOne(e, n) {
		this.task.then(() => {
			if (this.observers !== void 0 && this.observers[e] !== void 0)
				try {
					n(this.observers[e]);
				} catch (r) {
					typeof console < "u" && console.error && console.error(r);
				}
		});
	}
	close(e) {
		this.finalized ||
			((this.finalized = !0),
			e !== void 0 && (this.finalError = e),
			this.task.then(() => {
				(this.observers = void 0), (this.onNoObservers = void 0);
			}));
	}
}
function jE(t, e) {
	if (typeof t != "object" || t === null) return !1;
	for (const n of e) if (n in t && typeof t[n] == "function") return !0;
	return !1;
}
function $l() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xn(t) {
	return t && t._delegate ? t._delegate : t;
}
class yi {
	constructor(e, n, r) {
		(this.name = e),
			(this.instanceFactory = n),
			(this.type = r),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = "LAZY"),
			(this.onInstanceCreated = null);
	}
	setInstantiationMode(e) {
		return (this.instantiationMode = e), this;
	}
	setMultipleInstances(e) {
		return (this.multipleInstances = e), this;
	}
	setServiceProps(e) {
		return (this.serviceProps = e), this;
	}
	setInstanceCreatedCallback(e) {
		return (this.onInstanceCreated = e), this;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const or = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LE {
	constructor(e, n) {
		(this.name = e),
			(this.container = n),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map());
	}
	get(e) {
		const n = this.normalizeInstanceIdentifier(e);
		if (!this.instancesDeferred.has(n)) {
			const r = new SE();
			if (
				(this.instancesDeferred.set(n, r),
				this.isInitialized(n) || this.shouldAutoInitialize())
			)
				try {
					const i = this.getOrInitializeService({ instanceIdentifier: n });
					i && r.resolve(i);
				} catch {}
		}
		return this.instancesDeferred.get(n).promise;
	}
	getImmediate(e) {
		var n;
		const r = this.normalizeInstanceIdentifier(
				e == null ? void 0 : e.identifier
			),
			i =
				(n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
		if (this.isInitialized(r) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: r });
			} catch (o) {
				if (i) return null;
				throw o;
			}
		else {
			if (i) return null;
			throw Error(`Service ${this.name} is not available`);
		}
	}
	getComponent() {
		return this.component;
	}
	setComponent(e) {
		if (e.name !== this.name)
			throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
		if (this.component)
			throw Error(`Component for ${this.name} has already been provided`);
		if (((this.component = e), !!this.shouldAutoInitialize())) {
			if (ME(e))
				try {
					this.getOrInitializeService({ instanceIdentifier: or });
				} catch {}
			for (const [n, r] of this.instancesDeferred.entries()) {
				const i = this.normalizeInstanceIdentifier(n);
				try {
					const o = this.getOrInitializeService({ instanceIdentifier: i });
					r.resolve(o);
				} catch {}
			}
		}
	}
	clearInstance(e = or) {
		this.instancesDeferred.delete(e),
			this.instancesOptions.delete(e),
			this.instances.delete(e);
	}
	async delete() {
		const e = Array.from(this.instances.values());
		await Promise.all([
			...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
			...e.filter((n) => "_delete" in n).map((n) => n._delete()),
		]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(e = or) {
		return this.instances.has(e);
	}
	getOptions(e = or) {
		return this.instancesOptions.get(e) || {};
	}
	initialize(e = {}) {
		const { options: n = {} } = e,
			r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
		if (this.isInitialized(r))
			throw Error(`${this.name}(${r}) has already been initialized`);
		if (!this.isComponentSet())
			throw Error(`Component ${this.name} has not been registered yet`);
		const i = this.getOrInitializeService({
			instanceIdentifier: r,
			options: n,
		});
		for (const [o, s] of this.instancesDeferred.entries()) {
			const a = this.normalizeInstanceIdentifier(o);
			r === a && s.resolve(i);
		}
		return i;
	}
	onInit(e, n) {
		var r;
		const i = this.normalizeInstanceIdentifier(n),
			o =
				(r = this.onInitCallbacks.get(i)) !== null && r !== void 0
					? r
					: new Set();
		o.add(e), this.onInitCallbacks.set(i, o);
		const s = this.instances.get(i);
		return (
			s && e(s, i),
			() => {
				o.delete(e);
			}
		);
	}
	invokeOnInitCallbacks(e, n) {
		const r = this.onInitCallbacks.get(n);
		if (r)
			for (const i of r)
				try {
					i(e, n);
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
		let r = this.instances.get(e);
		if (
			!r &&
			this.component &&
			((r = this.component.instanceFactory(this.container, {
				instanceIdentifier: AE(e),
				options: n,
			})),
			this.instances.set(e, r),
			this.instancesOptions.set(e, n),
			this.invokeOnInitCallbacks(r, e),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, e, r);
			} catch {}
		return r || null;
	}
	normalizeInstanceIdentifier(e = or) {
		return this.component ? (this.component.multipleInstances ? e : or) : e;
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== "EXPLICIT";
	}
}
function AE(t) {
	return t === or ? void 0 : t;
}
function ME(t) {
	return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FE {
	constructor(e) {
		(this.name = e), (this.providers = new Map());
	}
	addComponent(e) {
		const n = this.getProvider(e.name);
		if (n.isComponentSet())
			throw new Error(
				`Component ${e.name} has already been registered with ${this.name}`
			);
		n.setComponent(e);
	}
	addOrOverwriteComponent(e) {
		this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
			this.addComponent(e);
	}
	getProvider(e) {
		if (this.providers.has(e)) return this.providers.get(e);
		const n = new LE(e, this);
		return this.providers.set(e, n), n;
	}
	getProviders() {
		return Array.from(this.providers.values());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var me;
(function (t) {
	(t[(t.DEBUG = 0)] = "DEBUG"),
		(t[(t.VERBOSE = 1)] = "VERBOSE"),
		(t[(t.INFO = 2)] = "INFO"),
		(t[(t.WARN = 3)] = "WARN"),
		(t[(t.ERROR = 4)] = "ERROR"),
		(t[(t.SILENT = 5)] = "SILENT");
})(me || (me = {}));
const UE = {
		debug: me.DEBUG,
		verbose: me.VERBOSE,
		info: me.INFO,
		warn: me.WARN,
		error: me.ERROR,
		silent: me.SILENT,
	},
	zE = me.INFO,
	BE = {
		[me.DEBUG]: "log",
		[me.VERBOSE]: "log",
		[me.INFO]: "info",
		[me.WARN]: "warn",
		[me.ERROR]: "error",
	},
	$E = (t, e, ...n) => {
		if (e < t.logLevel) return;
		const r = new Date().toISOString(),
			i = BE[e];
		if (i) console[i](`[${r}]  ${t.name}:`, ...n);
		else
			throw new Error(
				`Attempted to log a message with an invalid logType (value: ${e})`
			);
	};
class Wy {
	constructor(e) {
		(this.name = e),
			(this._logLevel = zE),
			(this._logHandler = $E),
			(this._userLogHandler = null);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(e) {
		if (!(e in me))
			throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
		this._logLevel = e;
	}
	setLogLevel(e) {
		this._logLevel = typeof e == "string" ? UE[e] : e;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(e) {
		if (typeof e != "function")
			throw new TypeError("Value assigned to `logHandler` must be a function");
		this._logHandler = e;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(e) {
		this._userLogHandler = e;
	}
	debug(...e) {
		this._userLogHandler && this._userLogHandler(this, me.DEBUG, ...e),
			this._logHandler(this, me.DEBUG, ...e);
	}
	log(...e) {
		this._userLogHandler && this._userLogHandler(this, me.VERBOSE, ...e),
			this._logHandler(this, me.VERBOSE, ...e);
	}
	info(...e) {
		this._userLogHandler && this._userLogHandler(this, me.INFO, ...e),
			this._logHandler(this, me.INFO, ...e);
	}
	warn(...e) {
		this._userLogHandler && this._userLogHandler(this, me.WARN, ...e),
			this._logHandler(this, me.WARN, ...e);
	}
	error(...e) {
		this._userLogHandler && this._userLogHandler(this, me.ERROR, ...e),
			this._logHandler(this, me.ERROR, ...e);
	}
}
const HE = (t, e) => e.some((n) => t instanceof n);
let mh, yh;
function VE() {
	return (
		mh ||
		(mh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
	);
}
function WE() {
	return (
		yh ||
		(yh = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey,
		])
	);
}
const qy = new WeakMap(),
	ec = new WeakMap(),
	Qy = new WeakMap(),
	Hl = new WeakMap(),
	wd = new WeakMap();
function qE(t) {
	const e = new Promise((n, r) => {
		const i = () => {
				t.removeEventListener("success", o), t.removeEventListener("error", s);
			},
			o = () => {
				n(qn(t.result)), i();
			},
			s = () => {
				r(t.error), i();
			};
		t.addEventListener("success", o), t.addEventListener("error", s);
	});
	return (
		e
			.then((n) => {
				n instanceof IDBCursor && qy.set(n, t);
			})
			.catch(() => {}),
		wd.set(e, t),
		e
	);
}
function QE(t) {
	if (ec.has(t)) return;
	const e = new Promise((n, r) => {
		const i = () => {
				t.removeEventListener("complete", o),
					t.removeEventListener("error", s),
					t.removeEventListener("abort", s);
			},
			o = () => {
				n(), i();
			},
			s = () => {
				r(t.error || new DOMException("AbortError", "AbortError")), i();
			};
		t.addEventListener("complete", o),
			t.addEventListener("error", s),
			t.addEventListener("abort", s);
	});
	ec.set(t, e);
}
let tc = {
	get(t, e, n) {
		if (t instanceof IDBTransaction) {
			if (e === "done") return ec.get(t);
			if (e === "objectStoreNames") return t.objectStoreNames || Qy.get(t);
			if (e === "store")
				return n.objectStoreNames[1]
					? void 0
					: n.objectStore(n.objectStoreNames[0]);
		}
		return qn(t[e]);
	},
	set(t, e, n) {
		return (t[e] = n), !0;
	},
	has(t, e) {
		return t instanceof IDBTransaction && (e === "done" || e === "store")
			? !0
			: e in t;
	},
};
function KE(t) {
	tc = t(tc);
}
function GE(t) {
	return t === IDBDatabase.prototype.transaction &&
		!("objectStoreNames" in IDBTransaction.prototype)
		? function (e, ...n) {
				const r = t.call(Vl(this), e, ...n);
				return Qy.set(r, e.sort ? e.sort() : [e]), qn(r);
		  }
		: WE().includes(t)
		? function (...e) {
				return t.apply(Vl(this), e), qn(qy.get(this));
		  }
		: function (...e) {
				return qn(t.apply(Vl(this), e));
		  };
}
function JE(t) {
	return typeof t == "function"
		? GE(t)
		: (t instanceof IDBTransaction && QE(t),
		  HE(t, VE()) ? new Proxy(t, tc) : t);
}
function qn(t) {
	if (t instanceof IDBRequest) return qE(t);
	if (Hl.has(t)) return Hl.get(t);
	const e = JE(t);
	return e !== t && (Hl.set(t, e), wd.set(e, t)), e;
}
const Vl = (t) => wd.get(t);
function YE(t, e, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
	const s = indexedDB.open(t, e),
		a = qn(s);
	return (
		r &&
			s.addEventListener("upgradeneeded", (l) => {
				r(qn(s.result), l.oldVersion, l.newVersion, qn(s.transaction), l);
			}),
		n && s.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
		a
			.then((l) => {
				o && l.addEventListener("close", () => o()),
					i &&
						l.addEventListener("versionchange", (u) =>
							i(u.oldVersion, u.newVersion, u)
						);
			})
			.catch(() => {}),
		a
	);
}
const XE = ["get", "getKey", "getAll", "getAllKeys", "count"],
	ZE = ["put", "add", "delete", "clear"],
	Wl = new Map();
function gh(t, e) {
	if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
	if (Wl.get(e)) return Wl.get(e);
	const n = e.replace(/FromIndex$/, ""),
		r = e !== n,
		i = ZE.includes(n);
	if (
		!(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
		!(i || XE.includes(n))
	)
		return;
	const o = async function (s, ...a) {
		const l = this.transaction(s, i ? "readwrite" : "readonly");
		let u = l.store;
		return (
			r && (u = u.index(a.shift())),
			(await Promise.all([u[n](...a), i && l.done]))[0]
		);
	};
	return Wl.set(e, o), o;
}
KE((t) => ({
	...t,
	get: (e, n, r) => gh(e, n) || t.get(e, n, r),
	has: (e, n) => !!gh(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eS {
	constructor(e) {
		this.container = e;
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((n) => {
				if (tS(n)) {
					const r = n.getImmediate();
					return `${r.library}/${r.version}`;
				} else return null;
			})
			.filter((n) => n)
			.join(" ");
	}
}
function tS(t) {
	const e = t.getComponent();
	return (e == null ? void 0 : e.type) === "VERSION";
}
const nc = "@firebase/app",
	vh = "0.9.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xr = new Wy("@firebase/app"),
	nS = "@firebase/app-compat",
	rS = "@firebase/analytics-compat",
	iS = "@firebase/analytics",
	oS = "@firebase/app-check-compat",
	sS = "@firebase/app-check",
	aS = "@firebase/auth",
	lS = "@firebase/auth-compat",
	uS = "@firebase/database",
	cS = "@firebase/database-compat",
	dS = "@firebase/functions",
	fS = "@firebase/functions-compat",
	hS = "@firebase/installations",
	pS = "@firebase/installations-compat",
	mS = "@firebase/messaging",
	yS = "@firebase/messaging-compat",
	gS = "@firebase/performance",
	vS = "@firebase/performance-compat",
	wS = "@firebase/remote-config",
	ES = "@firebase/remote-config-compat",
	SS = "@firebase/storage",
	xS = "@firebase/storage-compat",
	_S = "@firebase/firestore",
	bS = "@firebase/firestore-compat",
	CS = "firebase",
	kS = "10.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rc = "[DEFAULT]",
	RS = {
		[nc]: "fire-core",
		[nS]: "fire-core-compat",
		[iS]: "fire-analytics",
		[rS]: "fire-analytics-compat",
		[sS]: "fire-app-check",
		[oS]: "fire-app-check-compat",
		[aS]: "fire-auth",
		[lS]: "fire-auth-compat",
		[uS]: "fire-rtdb",
		[cS]: "fire-rtdb-compat",
		[dS]: "fire-fn",
		[fS]: "fire-fn-compat",
		[hS]: "fire-iid",
		[pS]: "fire-iid-compat",
		[mS]: "fire-fcm",
		[yS]: "fire-fcm-compat",
		[gS]: "fire-perf",
		[vS]: "fire-perf-compat",
		[wS]: "fire-rc",
		[ES]: "fire-rc-compat",
		[SS]: "fire-gcs",
		[xS]: "fire-gcs-compat",
		[_S]: "fire-fst",
		[bS]: "fire-fst-compat",
		"fire-js": "fire-js",
		[CS]: "fire-js-all",
	};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ea = new Map(),
	ic = new Map();
function PS(t, e) {
	try {
		t.container.addComponent(e);
	} catch (n) {
		xr.debug(
			`Component ${e.name} failed to register with FirebaseApp ${t.name}`,
			n
		);
	}
}
function Po(t) {
	const e = t.name;
	if (ic.has(e))
		return (
			xr.debug(`There were multiple attempts to register component ${e}.`), !1
		);
	ic.set(e, t);
	for (const n of Ea.values()) PS(n, t);
	return !0;
}
function Ky(t, e) {
	const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TS = {
		"no-app":
			"No Firebase App '{$appName}' has been created - call initializeApp() first",
		"bad-app-name": "Illegal App name: '{$appName}",
		"duplicate-app":
			"Firebase App named '{$appName}' already exists with different options or config",
		"app-deleted": "Firebase App named '{$appName}' already deleted",
		"no-options":
			"Need to provide options, when not being deployed to hosting via source.",
		"invalid-app-argument":
			"firebase.{$appName}() takes either no argument or a Firebase App instance.",
		"invalid-log-argument":
			"First argument to `onLog` must be null or a function.",
		"idb-open":
			"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-get":
			"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-set":
			"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
		"idb-delete":
			"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
	},
	Qn = new Bo("app", "Firebase", TS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OS {
	constructor(e, n, r) {
		(this._isDeleted = !1),
			(this._options = Object.assign({}, e)),
			(this._config = Object.assign({}, n)),
			(this._name = n.name),
			(this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
			(this._container = r),
			this.container.addComponent(new yi("app", () => this, "PUBLIC"));
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(e) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
	}
	get name() {
		return this.checkDestroyed(), this._name;
	}
	get options() {
		return this.checkDestroyed(), this._options;
	}
	get config() {
		return this.checkDestroyed(), this._config;
	}
	get container() {
		return this._container;
	}
	get isDeleted() {
		return this._isDeleted;
	}
	set isDeleted(e) {
		this._isDeleted = e;
	}
	checkDestroyed() {
		if (this.isDeleted) throw Qn.create("app-deleted", { appName: this._name });
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ho = kS;
function Gy(t, e = {}) {
	let n = t;
	typeof e != "object" && (e = { name: e });
	const r = Object.assign({ name: rc, automaticDataCollectionEnabled: !1 }, e),
		i = r.name;
	if (typeof i != "string" || !i)
		throw Qn.create("bad-app-name", { appName: String(i) });
	if ((n || (n = Hy()), !n)) throw Qn.create("no-options");
	const o = Ea.get(i);
	if (o) {
		if (wa(n, o.options) && wa(r, o.config)) return o;
		throw Qn.create("duplicate-app", { appName: i });
	}
	const s = new FE(i);
	for (const l of ic.values()) s.addComponent(l);
	const a = new OS(n, r, s);
	return Ea.set(i, a), a;
}
function IS(t = rc) {
	const e = Ea.get(t);
	if (!e && t === rc && Hy()) return Gy();
	if (!e) throw Qn.create("no-app", { appName: t });
	return e;
}
function ri(t, e, n) {
	var r;
	let i = (r = RS[t]) !== null && r !== void 0 ? r : t;
	n && (i += `-${n}`);
	const o = i.match(/\s|\//),
		s = e.match(/\s|\//);
	if (o || s) {
		const a = [`Unable to register library "${i}" with version "${e}":`];
		o &&
			a.push(
				`library name "${i}" contains illegal characters (whitespace or "/")`
			),
			o && s && a.push("and"),
			s &&
				a.push(
					`version name "${e}" contains illegal characters (whitespace or "/")`
				),
			xr.warn(a.join(" "));
		return;
	}
	Po(new yi(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const NS = "firebase-heartbeat-database",
	DS = 1,
	To = "firebase-heartbeat-store";
let ql = null;
function Jy() {
	return (
		ql ||
			(ql = YE(NS, DS, {
				upgrade: (t, e) => {
					switch (e) {
						case 0:
							t.createObjectStore(To);
					}
				},
			}).catch((t) => {
				throw Qn.create("idb-open", { originalErrorMessage: t.message });
			})),
		ql
	);
}
async function jS(t) {
	try {
		return await (await Jy()).transaction(To).objectStore(To).get(Yy(t));
	} catch (e) {
		if (e instanceof er) xr.warn(e.message);
		else {
			const n = Qn.create("idb-get", {
				originalErrorMessage: e == null ? void 0 : e.message,
			});
			xr.warn(n.message);
		}
	}
}
async function wh(t, e) {
	try {
		const r = (await Jy()).transaction(To, "readwrite");
		await r.objectStore(To).put(e, Yy(t)), await r.done;
	} catch (n) {
		if (n instanceof er) xr.warn(n.message);
		else {
			const r = Qn.create("idb-set", {
				originalErrorMessage: n == null ? void 0 : n.message,
			});
			xr.warn(r.message);
		}
	}
}
function Yy(t) {
	return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LS = 1024,
	AS = 30 * 24 * 60 * 60 * 1e3;
class MS {
	constructor(e) {
		(this.container = e), (this._heartbeatsCache = null);
		const n = this.container.getProvider("app").getImmediate();
		(this._storage = new US(n)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((r) => ((this._heartbeatsCache = r), r)));
	}
	async triggerHeartbeat() {
		const n = this.container
				.getProvider("platform-logger")
				.getImmediate()
				.getPlatformInfoString(),
			r = Eh();
		if (
			(this._heartbeatsCache === null &&
				(this._heartbeatsCache = await this._heartbeatsCachePromise),
			!(
				this._heartbeatsCache.lastSentHeartbeatDate === r ||
				this._heartbeatsCache.heartbeats.some((i) => i.date === r)
			))
		)
			return (
				this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
				(this._heartbeatsCache.heartbeats =
					this._heartbeatsCache.heartbeats.filter((i) => {
						const o = new Date(i.date).valueOf();
						return Date.now() - o <= AS;
					})),
				this._storage.overwrite(this._heartbeatsCache)
			);
	}
	async getHeartbeatsHeader() {
		if (
			(this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
			this._heartbeatsCache === null ||
				this._heartbeatsCache.heartbeats.length === 0)
		)
			return "";
		const e = Eh(),
			{ heartbeatsToSend: n, unsentEntries: r } = FS(
				this._heartbeatsCache.heartbeats
			),
			i = By(JSON.stringify({ version: 2, heartbeats: n }));
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = e),
			r.length > 0
				? ((this._heartbeatsCache.heartbeats = r),
				  await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []),
				  this._storage.overwrite(this._heartbeatsCache)),
			i
		);
	}
}
function Eh() {
	return new Date().toISOString().substring(0, 10);
}
function FS(t, e = LS) {
	const n = [];
	let r = t.slice();
	for (const i of t) {
		const o = n.find((s) => s.agent === i.agent);
		if (o) {
			if ((o.dates.push(i.date), Sh(n) > e)) {
				o.dates.pop();
				break;
			}
		} else if ((n.push({ agent: i.agent, dates: [i.date] }), Sh(n) > e)) {
			n.pop();
			break;
		}
		r = r.slice(1);
	}
	return { heartbeatsToSend: n, unsentEntries: r };
}
class US {
	constructor(e) {
		(this.app = e),
			(this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
	}
	async runIndexedDBEnvironmentCheck() {
		return kE()
			? RE()
					.then(() => !0)
					.catch(() => !1)
			: !1;
	}
	async read() {
		return (await this._canUseIndexedDBPromise)
			? (await jS(this.app)) || { heartbeats: [] }
			: { heartbeats: [] };
	}
	async overwrite(e) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return wh(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: e.heartbeats,
			});
		} else return;
	}
	async add(e) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return wh(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: [...i.heartbeats, ...e.heartbeats],
			});
		} else return;
	}
}
function Sh(t) {
	return By(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zS(t) {
	Po(new yi("platform-logger", (e) => new eS(e), "PRIVATE")),
		Po(new yi("heartbeat", (e) => new MS(e), "PRIVATE")),
		ri(nc, vh, t),
		ri(nc, vh, "esm2017"),
		ri("fire-js", "");
}
zS("");
function Ed(t, e) {
	var n = {};
	for (var r in t)
		Object.prototype.hasOwnProperty.call(t, r) &&
			e.indexOf(r) < 0 &&
			(n[r] = t[r]);
	if (t != null && typeof Object.getOwnPropertySymbols == "function")
		for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
			e.indexOf(r[i]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
				(n[r[i]] = t[r[i]]);
	return n;
}
function Xy() {
	return {
		"dependent-sdk-initialized-before-auth":
			"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
	};
}
const BS = Xy,
	Zy = new Bo("auth", "Firebase", Xy());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sa = new Wy("@firebase/auth");
function $S(t, ...e) {
	Sa.logLevel <= me.WARN && Sa.warn(`Auth (${Ho}): ${t}`, ...e);
}
function Ls(t, ...e) {
	Sa.logLevel <= me.ERROR && Sa.error(`Auth (${Ho}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tt(t, ...e) {
	throw Sd(t, ...e);
}
function Qt(t, ...e) {
	return Sd(t, ...e);
}
function eg(t, e, n) {
	const r = Object.assign(Object.assign({}, BS()), { [e]: n });
	return new Bo("auth", "Firebase", r).create(e, { appName: t.name });
}
function HS(t, e, n) {
	const r = n;
	if (!(e instanceof r))
		throw (
			(r.name !== e.constructor.name && Tt(t, "argument-error"),
			eg(
				t,
				"argument-error",
				`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
			))
		);
}
function Sd(t, ...e) {
	if (typeof t != "string") {
		const n = e[0],
			r = [...e.slice(1)];
		return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
	}
	return Zy.create(t, ...e);
}
function G(t, e, ...n) {
	if (!t) throw Sd(e, ...n);
}
function an(t) {
	const e = "INTERNAL ASSERTION FAILED: " + t;
	throw (Ls(e), new Error(e));
}
function gn(t, e) {
	t || an(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oc() {
	var t;
	return (
		(typeof self < "u" &&
			((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
		""
	);
}
function VS() {
	return xh() === "http:" || xh() === "https:";
}
function xh() {
	var t;
	return (
		(typeof self < "u" &&
			((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
		null
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function WS() {
	return typeof navigator < "u" &&
		navigator &&
		"onLine" in navigator &&
		typeof navigator.onLine == "boolean" &&
		(VS() || _E() || "connection" in navigator)
		? navigator.onLine
		: !0;
}
function qS() {
	if (typeof navigator > "u") return null;
	const t = navigator;
	return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vo {
	constructor(e, n) {
		(this.shortDelay = e),
			(this.longDelay = n),
			gn(n > e, "Short delay should be less than long delay!"),
			(this.isMobile = xE() || bE());
	}
	get() {
		return WS()
			? this.isMobile
				? this.longDelay
				: this.shortDelay
			: Math.min(5e3, this.shortDelay);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xd(t, e) {
	gn(t.emulator, "Emulator should always be set here");
	const { url: n } = t.emulator;
	return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tg {
	static initialize(e, n, r) {
		(this.fetchImpl = e),
			n && (this.headersImpl = n),
			r && (this.responseImpl = r);
	}
	static fetch() {
		if (this.fetchImpl) return this.fetchImpl;
		if (typeof self < "u" && "fetch" in self) return self.fetch;
		an(
			"Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
		);
	}
	static headers() {
		if (this.headersImpl) return this.headersImpl;
		if (typeof self < "u" && "Headers" in self) return self.Headers;
		an(
			"Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
		);
	}
	static response() {
		if (this.responseImpl) return this.responseImpl;
		if (typeof self < "u" && "Response" in self) return self.Response;
		an(
			"Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QS = {
	CREDENTIAL_MISMATCH: "custom-token-mismatch",
	MISSING_CUSTOM_TOKEN: "internal-error",
	INVALID_IDENTIFIER: "invalid-email",
	MISSING_CONTINUE_URI: "internal-error",
	INVALID_PASSWORD: "wrong-password",
	MISSING_PASSWORD: "missing-password",
	EMAIL_EXISTS: "email-already-in-use",
	PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
	INVALID_IDP_RESPONSE: "invalid-credential",
	INVALID_PENDING_TOKEN: "invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
	MISSING_REQ_TYPE: "internal-error",
	EMAIL_NOT_FOUND: "user-not-found",
	RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
	EXPIRED_OOB_CODE: "expired-action-code",
	INVALID_OOB_CODE: "invalid-action-code",
	MISSING_OOB_CODE: "internal-error",
	CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
	INVALID_ID_TOKEN: "invalid-user-token",
	TOKEN_EXPIRED: "user-token-expired",
	USER_NOT_FOUND: "user-token-expired",
	TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
	INVALID_CODE: "invalid-verification-code",
	INVALID_SESSION_INFO: "invalid-verification-id",
	INVALID_TEMPORARY_PROOF: "invalid-credential",
	MISSING_SESSION_INFO: "missing-verification-id",
	SESSION_EXPIRED: "code-expired",
	MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
	UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
	INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
	ADMIN_ONLY_OPERATION: "admin-restricted-operation",
	INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
	MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
	MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
	MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
	SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
	SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
	BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
	RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
	MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
	INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
	INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
	MISSING_CLIENT_TYPE: "missing-client-type",
	MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
	INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
	INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const KS = new Vo(3e4, 6e4);
function Wo(t, e) {
	return t.tenantId && !e.tenantId
		? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
		: e;
}
async function Ci(t, e, n, r, i = {}) {
	return ng(t, i, async () => {
		let o = {},
			s = {};
		r && (e === "GET" ? (s = r) : (o = { body: JSON.stringify(r) }));
		const a = $o(Object.assign({ key: t.config.apiKey }, s)).slice(1),
			l = await t._getAdditionalHeaders();
		return (
			(l["Content-Type"] = "application/json"),
			t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
			tg.fetch()(
				rg(t, t.config.apiHost, n, a),
				Object.assign(
					{ method: e, headers: l, referrerPolicy: "no-referrer" },
					o
				)
			)
		);
	});
}
async function ng(t, e, n) {
	t._canInitEmulator = !1;
	const r = Object.assign(Object.assign({}, QS), e);
	try {
		const i = new GS(t),
			o = await Promise.race([n(), i.promise]);
		i.clearNetworkTimeout();
		const s = await o.json();
		if ("needConfirmation" in s)
			throw Ss(t, "account-exists-with-different-credential", s);
		if (o.ok && !("errorMessage" in s)) return s;
		{
			const a = o.ok ? s.errorMessage : s.error.message,
				[l, u] = a.split(" : ");
			if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
				throw Ss(t, "credential-already-in-use", s);
			if (l === "EMAIL_EXISTS") throw Ss(t, "email-already-in-use", s);
			if (l === "USER_DISABLED") throw Ss(t, "user-disabled", s);
			const c = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
			if (u) throw eg(t, c, u);
			Tt(t, c);
		}
	} catch (i) {
		if (i instanceof er) throw i;
		Tt(t, "network-request-failed", { message: String(i) });
	}
}
async function Ja(t, e, n, r, i = {}) {
	const o = await Ci(t, e, n, r, i);
	return (
		"mfaPendingCredential" in o &&
			Tt(t, "multi-factor-auth-required", { _serverResponse: o }),
		o
	);
}
function rg(t, e, n, r) {
	const i = `${e}${n}?${r}`;
	return t.config.emulator ? xd(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class GS {
	constructor(e) {
		(this.auth = e),
			(this.timer = null),
			(this.promise = new Promise((n, r) => {
				this.timer = setTimeout(
					() => r(Qt(this.auth, "network-request-failed")),
					KS.get()
				);
			}));
	}
	clearNetworkTimeout() {
		clearTimeout(this.timer);
	}
}
function Ss(t, e, n) {
	const r = { appName: t.name };
	n.email && (r.email = n.email),
		n.phoneNumber && (r.phoneNumber = n.phoneNumber);
	const i = Qt(t, e, r);
	return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function JS(t, e) {
	return Ci(t, "POST", "/v1/accounts:delete", e);
}
async function YS(t, e) {
	return Ci(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lo(t) {
	if (t)
		try {
			const e = new Date(Number(t));
			if (!isNaN(e.getTime())) return e.toUTCString();
		} catch {}
}
async function XS(t, e = !1) {
	const n = xn(t),
		r = await n.getIdToken(e),
		i = _d(r);
	G(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
	const o = typeof i.firebase == "object" ? i.firebase : void 0,
		s = o == null ? void 0 : o.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: lo(Ql(i.auth_time)),
		issuedAtTime: lo(Ql(i.iat)),
		expirationTime: lo(Ql(i.exp)),
		signInProvider: s || null,
		signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
	};
}
function Ql(t) {
	return Number(t) * 1e3;
}
function _d(t) {
	const [e, n, r] = t.split(".");
	if (e === void 0 || n === void 0 || r === void 0)
		return Ls("JWT malformed, contained fewer than 3 sections"), null;
	try {
		const i = $y(n);
		return i
			? JSON.parse(i)
			: (Ls("Failed to decode base64 JWT payload"), null);
	} catch (i) {
		return (
			Ls(
				"Caught error parsing JWT payload as JSON",
				i == null ? void 0 : i.toString()
			),
			null
		);
	}
}
function ZS(t) {
	const e = _d(t);
	return (
		G(e, "internal-error"),
		G(typeof e.exp < "u", "internal-error"),
		G(typeof e.iat < "u", "internal-error"),
		Number(e.exp) - Number(e.iat)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Oo(t, e, n = !1) {
	if (n) return e;
	try {
		return await e;
	} catch (r) {
		throw (
			(r instanceof er &&
				ex(r) &&
				t.auth.currentUser === t &&
				(await t.auth.signOut()),
			r)
		);
	}
}
function ex({ code: t }) {
	return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tx {
	constructor(e) {
		(this.user = e),
			(this.isRunning = !1),
			(this.timerId = null),
			(this.errorBackoff = 3e4);
	}
	_start() {
		this.isRunning || ((this.isRunning = !0), this.schedule());
	}
	_stop() {
		this.isRunning &&
			((this.isRunning = !1),
			this.timerId !== null && clearTimeout(this.timerId));
	}
	getInterval(e) {
		var n;
		if (e) {
			const r = this.errorBackoff;
			return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
		} else {
			this.errorBackoff = 3e4;
			const i =
				((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
					? n
					: 0) -
				Date.now() -
				3e5;
			return Math.max(0, i);
		}
	}
	schedule(e = !1) {
		if (!this.isRunning) return;
		const n = this.getInterval(e);
		this.timerId = setTimeout(async () => {
			await this.iteration();
		}, n);
	}
	async iteration() {
		try {
			await this.user.getIdToken(!0);
		} catch (e) {
			(e == null ? void 0 : e.code) === "auth/network-request-failed" &&
				this.schedule(!0);
			return;
		}
		this.schedule();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ig {
	constructor(e, n) {
		(this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
	}
	_initializeTime() {
		(this.lastSignInTime = lo(this.lastLoginAt)),
			(this.creationTime = lo(this.createdAt));
	}
	_copy(e) {
		(this.createdAt = e.createdAt),
			(this.lastLoginAt = e.lastLoginAt),
			this._initializeTime();
	}
	toJSON() {
		return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xa(t) {
	var e;
	const n = t.auth,
		r = await t.getIdToken(),
		i = await Oo(t, YS(n, { idToken: r }));
	G(i == null ? void 0 : i.users.length, n, "internal-error");
	const o = i.users[0];
	t._notifyReloadListener(o);
	const s =
			!((e = o.providerUserInfo) === null || e === void 0) && e.length
				? ix(o.providerUserInfo)
				: [],
		a = rx(t.providerData, s),
		l = t.isAnonymous,
		u = !(t.email && o.passwordHash) && !(a != null && a.length),
		c = l ? u : !1,
		d = {
			uid: o.localId,
			displayName: o.displayName || null,
			photoURL: o.photoUrl || null,
			email: o.email || null,
			emailVerified: o.emailVerified || !1,
			phoneNumber: o.phoneNumber || null,
			tenantId: o.tenantId || null,
			providerData: a,
			metadata: new ig(o.createdAt, o.lastLoginAt),
			isAnonymous: c,
		};
	Object.assign(t, d);
}
async function nx(t) {
	const e = xn(t);
	await xa(e),
		await e.auth._persistUserIfCurrent(e),
		e.auth._notifyListenersIfCurrent(e);
}
function rx(t, e) {
	return [
		...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
		...e,
	];
}
function ix(t) {
	return t.map((e) => {
		var { providerId: n } = e,
			r = Ed(e, ["providerId"]);
		return {
			providerId: n,
			uid: r.rawId || "",
			displayName: r.displayName || null,
			email: r.email || null,
			phoneNumber: r.phoneNumber || null,
			photoURL: r.photoUrl || null,
		};
	});
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ox(t, e) {
	const n = await ng(t, {}, async () => {
		const r = $o({ grant_type: "refresh_token", refresh_token: e }).slice(1),
			{ tokenApiHost: i, apiKey: o } = t.config,
			s = rg(t, i, "/v1/token", `key=${o}`),
			a = await t._getAdditionalHeaders();
		return (
			(a["Content-Type"] = "application/x-www-form-urlencoded"),
			tg.fetch()(s, { method: "POST", headers: a, body: r })
		);
	});
	return {
		accessToken: n.access_token,
		expiresIn: n.expires_in,
		refreshToken: n.refresh_token,
	};
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Io {
	constructor() {
		(this.refreshToken = null),
			(this.accessToken = null),
			(this.expirationTime = null);
	}
	get isExpired() {
		return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
	}
	updateFromServerResponse(e) {
		G(e.idToken, "internal-error"),
			G(typeof e.idToken < "u", "internal-error"),
			G(typeof e.refreshToken < "u", "internal-error");
		const n =
			"expiresIn" in e && typeof e.expiresIn < "u"
				? Number(e.expiresIn)
				: ZS(e.idToken);
		this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
	}
	async getToken(e, n = !1) {
		return (
			G(!this.accessToken || this.refreshToken, e, "user-token-expired"),
			!n && this.accessToken && !this.isExpired
				? this.accessToken
				: this.refreshToken
				? (await this.refresh(e, this.refreshToken), this.accessToken)
				: null
		);
	}
	clearRefreshToken() {
		this.refreshToken = null;
	}
	async refresh(e, n) {
		const { accessToken: r, refreshToken: i, expiresIn: o } = await ox(e, n);
		this.updateTokensAndExpiration(r, i, Number(o));
	}
	updateTokensAndExpiration(e, n, r) {
		(this.refreshToken = n || null),
			(this.accessToken = e || null),
			(this.expirationTime = Date.now() + r * 1e3);
	}
	static fromJSON(e, n) {
		const { refreshToken: r, accessToken: i, expirationTime: o } = n,
			s = new Io();
		return (
			r &&
				(G(typeof r == "string", "internal-error", { appName: e }),
				(s.refreshToken = r)),
			i &&
				(G(typeof i == "string", "internal-error", { appName: e }),
				(s.accessToken = i)),
			o &&
				(G(typeof o == "number", "internal-error", { appName: e }),
				(s.expirationTime = o)),
			s
		);
	}
	toJSON() {
		return {
			refreshToken: this.refreshToken,
			accessToken: this.accessToken,
			expirationTime: this.expirationTime,
		};
	}
	_assign(e) {
		(this.accessToken = e.accessToken),
			(this.refreshToken = e.refreshToken),
			(this.expirationTime = e.expirationTime);
	}
	_clone() {
		return Object.assign(new Io(), this.toJSON());
	}
	_performRefresh() {
		return an("not implemented");
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kn(t, e) {
	G(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class pr {
	constructor(e) {
		var { uid: n, auth: r, stsTokenManager: i } = e,
			o = Ed(e, ["uid", "auth", "stsTokenManager"]);
		(this.providerId = "firebase"),
			(this.proactiveRefresh = new tx(this)),
			(this.reloadUserInfo = null),
			(this.reloadListener = null),
			(this.uid = n),
			(this.auth = r),
			(this.stsTokenManager = i),
			(this.accessToken = i.accessToken),
			(this.displayName = o.displayName || null),
			(this.email = o.email || null),
			(this.emailVerified = o.emailVerified || !1),
			(this.phoneNumber = o.phoneNumber || null),
			(this.photoURL = o.photoURL || null),
			(this.isAnonymous = o.isAnonymous || !1),
			(this.tenantId = o.tenantId || null),
			(this.providerData = o.providerData ? [...o.providerData] : []),
			(this.metadata = new ig(o.createdAt || void 0, o.lastLoginAt || void 0));
	}
	async getIdToken(e) {
		const n = await Oo(this, this.stsTokenManager.getToken(this.auth, e));
		return (
			G(n, this.auth, "internal-error"),
			this.accessToken !== n &&
				((this.accessToken = n),
				await this.auth._persistUserIfCurrent(this),
				this.auth._notifyListenersIfCurrent(this)),
			n
		);
	}
	getIdTokenResult(e) {
		return XS(this, e);
	}
	reload() {
		return nx(this);
	}
	_assign(e) {
		this !== e &&
			(G(this.uid === e.uid, this.auth, "internal-error"),
			(this.displayName = e.displayName),
			(this.photoURL = e.photoURL),
			(this.email = e.email),
			(this.emailVerified = e.emailVerified),
			(this.phoneNumber = e.phoneNumber),
			(this.isAnonymous = e.isAnonymous),
			(this.tenantId = e.tenantId),
			(this.providerData = e.providerData.map((n) => Object.assign({}, n))),
			this.metadata._copy(e.metadata),
			this.stsTokenManager._assign(e.stsTokenManager));
	}
	_clone(e) {
		const n = new pr(
			Object.assign(Object.assign({}, this), {
				auth: e,
				stsTokenManager: this.stsTokenManager._clone(),
			})
		);
		return n.metadata._copy(this.metadata), n;
	}
	_onReload(e) {
		G(!this.reloadListener, this.auth, "internal-error"),
			(this.reloadListener = e),
			this.reloadUserInfo &&
				(this._notifyReloadListener(this.reloadUserInfo),
				(this.reloadUserInfo = null));
	}
	_notifyReloadListener(e) {
		this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
	}
	_startProactiveRefresh() {
		this.proactiveRefresh._start();
	}
	_stopProactiveRefresh() {
		this.proactiveRefresh._stop();
	}
	async _updateTokensIfNecessary(e, n = !1) {
		let r = !1;
		e.idToken &&
			e.idToken !== this.stsTokenManager.accessToken &&
			(this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
			n && (await xa(this)),
			await this.auth._persistUserIfCurrent(this),
			r && this.auth._notifyListenersIfCurrent(this);
	}
	async delete() {
		const e = await this.getIdToken();
		return (
			await Oo(this, JS(this.auth, { idToken: e })),
			this.stsTokenManager.clearRefreshToken(),
			this.auth.signOut()
		);
	}
	toJSON() {
		return Object.assign(
			Object.assign(
				{
					uid: this.uid,
					email: this.email || void 0,
					emailVerified: this.emailVerified,
					displayName: this.displayName || void 0,
					isAnonymous: this.isAnonymous,
					photoURL: this.photoURL || void 0,
					phoneNumber: this.phoneNumber || void 0,
					tenantId: this.tenantId || void 0,
					providerData: this.providerData.map((e) => Object.assign({}, e)),
					stsTokenManager: this.stsTokenManager.toJSON(),
					_redirectEventId: this._redirectEventId,
				},
				this.metadata.toJSON()
			),
			{ apiKey: this.auth.config.apiKey, appName: this.auth.name }
		);
	}
	get refreshToken() {
		return this.stsTokenManager.refreshToken || "";
	}
	static _fromJSON(e, n) {
		var r, i, o, s, a, l, u, c;
		const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
			f = (i = n.email) !== null && i !== void 0 ? i : void 0,
			S = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0,
			E = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
			x = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
			C = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
			y = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
			p = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0,
			{
				uid: w,
				emailVerified: g,
				isAnonymous: k,
				providerData: P,
				stsTokenManager: T,
			} = n;
		G(w && T, e, "internal-error");
		const R = Io.fromJSON(this.name, T);
		G(typeof w == "string", e, "internal-error"),
			kn(d, e.name),
			kn(f, e.name),
			G(typeof g == "boolean", e, "internal-error"),
			G(typeof k == "boolean", e, "internal-error"),
			kn(S, e.name),
			kn(E, e.name),
			kn(x, e.name),
			kn(C, e.name),
			kn(y, e.name),
			kn(p, e.name);
		const B = new pr({
			uid: w,
			auth: e,
			email: f,
			emailVerified: g,
			displayName: d,
			isAnonymous: k,
			photoURL: E,
			phoneNumber: S,
			tenantId: x,
			stsTokenManager: R,
			createdAt: y,
			lastLoginAt: p,
		});
		return (
			P &&
				Array.isArray(P) &&
				(B.providerData = P.map((H) => Object.assign({}, H))),
			C && (B._redirectEventId = C),
			B
		);
	}
	static async _fromIdTokenResponse(e, n, r = !1) {
		const i = new Io();
		i.updateFromServerResponse(n);
		const o = new pr({
			uid: n.localId,
			auth: e,
			stsTokenManager: i,
			isAnonymous: r,
		});
		return await xa(o), o;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _h = new Map();
function ln(t) {
	gn(t instanceof Function, "Expected a class definition");
	let e = _h.get(t);
	return e
		? (gn(e instanceof t, "Instance stored in cache mismatched with class"), e)
		: ((e = new t()), _h.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class og {
	constructor() {
		(this.type = "NONE"), (this.storage = {});
	}
	async _isAvailable() {
		return !0;
	}
	async _set(e, n) {
		this.storage[e] = n;
	}
	async _get(e) {
		const n = this.storage[e];
		return n === void 0 ? null : n;
	}
	async _remove(e) {
		delete this.storage[e];
	}
	_addListener(e, n) {}
	_removeListener(e, n) {}
}
og.type = "NONE";
const bh = og;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function As(t, e, n) {
	return `firebase:${t}:${e}:${n}`;
}
class ii {
	constructor(e, n, r) {
		(this.persistence = e), (this.auth = n), (this.userKey = r);
		const { config: i, name: o } = this.auth;
		(this.fullUserKey = As(this.userKey, i.apiKey, o)),
			(this.fullPersistenceKey = As("persistence", i.apiKey, o)),
			(this.boundEventHandler = n._onStorageEvent.bind(n)),
			this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
	}
	setCurrentUser(e) {
		return this.persistence._set(this.fullUserKey, e.toJSON());
	}
	async getCurrentUser() {
		const e = await this.persistence._get(this.fullUserKey);
		return e ? pr._fromJSON(this.auth, e) : null;
	}
	removeCurrentUser() {
		return this.persistence._remove(this.fullUserKey);
	}
	savePersistenceForRedirect() {
		return this.persistence._set(
			this.fullPersistenceKey,
			this.persistence.type
		);
	}
	async setPersistence(e) {
		if (this.persistence === e) return;
		const n = await this.getCurrentUser();
		if ((await this.removeCurrentUser(), (this.persistence = e), n))
			return this.setCurrentUser(n);
	}
	delete() {
		this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
	}
	static async create(e, n, r = "authUser") {
		if (!n.length) return new ii(ln(bh), e, r);
		const i = (
			await Promise.all(
				n.map(async (u) => {
					if (await u._isAvailable()) return u;
				})
			)
		).filter((u) => u);
		let o = i[0] || ln(bh);
		const s = As(r, e.config.apiKey, e.name);
		let a = null;
		for (const u of n)
			try {
				const c = await u._get(s);
				if (c) {
					const d = pr._fromJSON(e, c);
					u !== o && (a = d), (o = u);
					break;
				}
			} catch {}
		const l = i.filter((u) => u._shouldAllowMigration);
		return !o._shouldAllowMigration || !l.length
			? new ii(o, e, r)
			: ((o = l[0]),
			  a && (await o._set(s, a.toJSON())),
			  await Promise.all(
					n.map(async (u) => {
						if (u !== o)
							try {
								await u._remove(s);
							} catch {}
					})
			  ),
			  new ii(o, e, r));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ch(t) {
	const e = t.toLowerCase();
	if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
		return "Opera";
	if (lg(e)) return "IEMobile";
	if (e.includes("msie") || e.includes("trident/")) return "IE";
	if (e.includes("edge/")) return "Edge";
	if (sg(e)) return "Firefox";
	if (e.includes("silk/")) return "Silk";
	if (cg(e)) return "Blackberry";
	if (dg(e)) return "Webos";
	if (bd(e)) return "Safari";
	if ((e.includes("chrome/") || ag(e)) && !e.includes("edge/")) return "Chrome";
	if (ug(e)) return "Android";
	{
		const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
			r = t.match(n);
		if ((r == null ? void 0 : r.length) === 2) return r[1];
	}
	return "Other";
}
function sg(t = Ze()) {
	return /firefox\//i.test(t);
}
function bd(t = Ze()) {
	const e = t.toLowerCase();
	return (
		e.includes("safari/") &&
		!e.includes("chrome/") &&
		!e.includes("crios/") &&
		!e.includes("android")
	);
}
function ag(t = Ze()) {
	return /crios\//i.test(t);
}
function lg(t = Ze()) {
	return /iemobile/i.test(t);
}
function ug(t = Ze()) {
	return /android/i.test(t);
}
function cg(t = Ze()) {
	return /blackberry/i.test(t);
}
function dg(t = Ze()) {
	return /webos/i.test(t);
}
function Ya(t = Ze()) {
	return (
		/iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
	);
}
function sx(t = Ze()) {
	var e;
	return (
		Ya(t) &&
		!!(!((e = window.navigator) === null || e === void 0) && e.standalone)
	);
}
function ax() {
	return CE() && document.documentMode === 10;
}
function fg(t = Ze()) {
	return Ya(t) || ug(t) || dg(t) || cg(t) || /windows phone/i.test(t) || lg(t);
}
function lx() {
	try {
		return !!(window && window !== window.top);
	} catch {
		return !1;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hg(t, e = []) {
	let n;
	switch (t) {
		case "Browser":
			n = Ch(Ze());
			break;
		case "Worker":
			n = `${Ch(Ze())}-${t}`;
			break;
		default:
			n = t;
	}
	const r = e.length ? e.join(",") : "FirebaseCore-web";
	return `${n}/JsCore/${Ho}/${r}`;
}
async function pg(t, e) {
	return Ci(t, "GET", "/v2/recaptchaConfig", Wo(t, e));
}
function kh(t) {
	return t !== void 0 && t.enterprise !== void 0;
}
class mg {
	constructor(e) {
		if (
			((this.siteKey = ""),
			(this.emailPasswordEnabled = !1),
			e.recaptchaKey === void 0)
		)
			throw new Error("recaptchaKey undefined");
		(this.siteKey = e.recaptchaKey.split("/")[3]),
			(this.emailPasswordEnabled = e.recaptchaEnforcementState.some(
				(n) =>
					n.provider === "EMAIL_PASSWORD_PROVIDER" &&
					n.enforcementState !== "OFF"
			));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ux() {
	var t, e;
	return (e =
		(t = document.getElementsByTagName("head")) === null || t === void 0
			? void 0
			: t[0]) !== null && e !== void 0
		? e
		: document;
}
function yg(t) {
	return new Promise((e, n) => {
		const r = document.createElement("script");
		r.setAttribute("src", t),
			(r.onload = e),
			(r.onerror = (i) => {
				const o = Qt("internal-error");
				(o.customData = i), n(o);
			}),
			(r.type = "text/javascript"),
			(r.charset = "UTF-8"),
			ux().appendChild(r);
	});
}
function cx(t) {
	return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const dx = "https://www.google.com/recaptcha/enterprise.js?render=",
	fx = "recaptcha-enterprise",
	hx = "NO_RECAPTCHA";
class gg {
	constructor(e) {
		(this.type = fx), (this.auth = ki(e));
	}
	async verify(e = "verify", n = !1) {
		async function r(o) {
			if (!n) {
				if (o.tenantId == null && o._agentRecaptchaConfig != null)
					return o._agentRecaptchaConfig.siteKey;
				if (
					o.tenantId != null &&
					o._tenantRecaptchaConfigs[o.tenantId] !== void 0
				)
					return o._tenantRecaptchaConfigs[o.tenantId].siteKey;
			}
			return new Promise(async (s, a) => {
				pg(o, {
					clientType: "CLIENT_TYPE_WEB",
					version: "RECAPTCHA_ENTERPRISE",
				})
					.then((l) => {
						if (l.recaptchaKey === void 0)
							a(new Error("recaptcha Enterprise site key undefined"));
						else {
							const u = new mg(l);
							return (
								o.tenantId == null
									? (o._agentRecaptchaConfig = u)
									: (o._tenantRecaptchaConfigs[o.tenantId] = u),
								s(u.siteKey)
							);
						}
					})
					.catch((l) => {
						a(l);
					});
			});
		}
		function i(o, s, a) {
			const l = window.grecaptcha;
			kh(l)
				? l.enterprise.ready(() => {
						l.enterprise
							.execute(o, { action: e })
							.then((u) => {
								s(u);
							})
							.catch(() => {
								s(hx);
							});
				  })
				: a(Error("No reCAPTCHA enterprise script loaded."));
		}
		return new Promise((o, s) => {
			r(this.auth)
				.then((a) => {
					if (!n && kh(window.grecaptcha)) i(a, o, s);
					else {
						if (typeof window > "u") {
							s(new Error("RecaptchaVerifier is only supported in browser"));
							return;
						}
						yg(dx + a)
							.then(() => {
								i(a, o, s);
							})
							.catch((l) => {
								s(l);
							});
					}
				})
				.catch((a) => {
					s(a);
				});
		});
	}
}
async function Rh(t, e, n, r = !1) {
	const i = new gg(t);
	let o;
	try {
		o = await i.verify(n);
	} catch {
		o = await i.verify(n, !0);
	}
	const s = Object.assign({}, e);
	return (
		r
			? Object.assign(s, { captchaResp: o })
			: Object.assign(s, { captchaResponse: o }),
		Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
		Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
		s
	);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class px {
	constructor(e) {
		(this.auth = e), (this.queue = []);
	}
	pushCallback(e, n) {
		const r = (o) =>
			new Promise((s, a) => {
				try {
					const l = e(o);
					s(l);
				} catch (l) {
					a(l);
				}
			});
		(r.onAbort = n), this.queue.push(r);
		const i = this.queue.length - 1;
		return () => {
			this.queue[i] = () => Promise.resolve();
		};
	}
	async runMiddleware(e) {
		if (this.auth.currentUser === e) return;
		const n = [];
		try {
			for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
		} catch (r) {
			n.reverse();
			for (const i of n)
				try {
					i();
				} catch {}
			throw this.auth._errorFactory.create("login-blocked", {
				originalMessage: r == null ? void 0 : r.message,
			});
		}
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mx {
	constructor(e, n, r, i) {
		(this.app = e),
			(this.heartbeatServiceProvider = n),
			(this.appCheckServiceProvider = r),
			(this.config = i),
			(this.currentUser = null),
			(this.emulatorConfig = null),
			(this.operations = Promise.resolve()),
			(this.authStateSubscription = new Ph(this)),
			(this.idTokenSubscription = new Ph(this)),
			(this.beforeStateQueue = new px(this)),
			(this.redirectUser = null),
			(this.isProactiveRefreshEnabled = !1),
			(this._canInitEmulator = !0),
			(this._isInitialized = !1),
			(this._deleted = !1),
			(this._initializationPromise = null),
			(this._popupRedirectResolver = null),
			(this._errorFactory = Zy),
			(this._agentRecaptchaConfig = null),
			(this._tenantRecaptchaConfigs = {}),
			(this.lastNotifiedUid = void 0),
			(this.languageCode = null),
			(this.tenantId = null),
			(this.settings = { appVerificationDisabledForTesting: !1 }),
			(this.frameworks = []),
			(this.name = e.name),
			(this.clientVersion = i.sdkClientVersion);
	}
	_initializeWithPersistence(e, n) {
		return (
			n && (this._popupRedirectResolver = ln(n)),
			(this._initializationPromise = this.queue(async () => {
				var r, i;
				if (
					!this._deleted &&
					((this.persistenceManager = await ii.create(this, e)), !this._deleted)
				) {
					if (
						!((r = this._popupRedirectResolver) === null || r === void 0) &&
						r._shouldInitProactively
					)
						try {
							await this._popupRedirectResolver._initialize(this);
						} catch {}
					await this.initializeCurrentUser(n),
						(this.lastNotifiedUid =
							((i = this.currentUser) === null || i === void 0
								? void 0
								: i.uid) || null),
						!this._deleted && (this._isInitialized = !0);
				}
			})),
			this._initializationPromise
		);
	}
	async _onStorageEvent() {
		if (this._deleted) return;
		const e = await this.assertedPersistence.getCurrentUser();
		if (!(!this.currentUser && !e)) {
			if (this.currentUser && e && this.currentUser.uid === e.uid) {
				this._currentUser._assign(e), await this.currentUser.getIdToken();
				return;
			}
			await this._updateCurrentUser(e, !0);
		}
	}
	async initializeCurrentUser(e) {
		var n;
		const r = await this.assertedPersistence.getCurrentUser();
		let i = r,
			o = !1;
		if (e && this.config.authDomain) {
			await this.getOrInitRedirectPersistenceManager();
			const s =
					(n = this.redirectUser) === null || n === void 0
						? void 0
						: n._redirectEventId,
				a = i == null ? void 0 : i._redirectEventId,
				l = await this.tryRedirectSignIn(e);
			(!s || s === a) && l != null && l.user && ((i = l.user), (o = !0));
		}
		if (!i) return this.directlySetCurrentUser(null);
		if (!i._redirectEventId) {
			if (o)
				try {
					await this.beforeStateQueue.runMiddleware(i);
				} catch (s) {
					(i = r),
						this._popupRedirectResolver._overrideRedirectResult(this, () =>
							Promise.reject(s)
						);
				}
			return i
				? this.reloadAndSetCurrentUserOrClear(i)
				: this.directlySetCurrentUser(null);
		}
		return (
			G(this._popupRedirectResolver, this, "argument-error"),
			await this.getOrInitRedirectPersistenceManager(),
			this.redirectUser &&
			this.redirectUser._redirectEventId === i._redirectEventId
				? this.directlySetCurrentUser(i)
				: this.reloadAndSetCurrentUserOrClear(i)
		);
	}
	async tryRedirectSignIn(e) {
		let n = null;
		try {
			n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
		} catch {
			await this._setRedirectUser(null);
		}
		return n;
	}
	async reloadAndSetCurrentUserOrClear(e) {
		try {
			await xa(e);
		} catch (n) {
			if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
				return this.directlySetCurrentUser(null);
		}
		return this.directlySetCurrentUser(e);
	}
	useDeviceLanguage() {
		this.languageCode = qS();
	}
	async _delete() {
		this._deleted = !0;
	}
	async updateCurrentUser(e) {
		const n = e ? xn(e) : null;
		return (
			n &&
				G(
					n.auth.config.apiKey === this.config.apiKey,
					this,
					"invalid-user-token"
				),
			this._updateCurrentUser(n && n._clone(this))
		);
	}
	async _updateCurrentUser(e, n = !1) {
		if (!this._deleted)
			return (
				e && G(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
				n || (await this.beforeStateQueue.runMiddleware(e)),
				this.queue(async () => {
					await this.directlySetCurrentUser(e), this.notifyAuthListeners();
				})
			);
	}
	async signOut() {
		return (
			await this.beforeStateQueue.runMiddleware(null),
			(this.redirectPersistenceManager || this._popupRedirectResolver) &&
				(await this._setRedirectUser(null)),
			this._updateCurrentUser(null, !0)
		);
	}
	setPersistence(e) {
		return this.queue(async () => {
			await this.assertedPersistence.setPersistence(ln(e));
		});
	}
	async initializeRecaptchaConfig() {
		const e = await pg(this, {
				clientType: "CLIENT_TYPE_WEB",
				version: "RECAPTCHA_ENTERPRISE",
			}),
			n = new mg(e);
		this.tenantId == null
			? (this._agentRecaptchaConfig = n)
			: (this._tenantRecaptchaConfigs[this.tenantId] = n),
			n.emailPasswordEnabled && new gg(this).verify();
	}
	_getRecaptchaConfig() {
		return this.tenantId == null
			? this._agentRecaptchaConfig
			: this._tenantRecaptchaConfigs[this.tenantId];
	}
	_getPersistence() {
		return this.assertedPersistence.persistence.type;
	}
	_updateErrorMap(e) {
		this._errorFactory = new Bo("auth", "Firebase", e());
	}
	onAuthStateChanged(e, n, r) {
		return this.registerStateListener(this.authStateSubscription, e, n, r);
	}
	beforeAuthStateChanged(e, n) {
		return this.beforeStateQueue.pushCallback(e, n);
	}
	onIdTokenChanged(e, n, r) {
		return this.registerStateListener(this.idTokenSubscription, e, n, r);
	}
	authStateReady() {
		return new Promise((e, n) => {
			if (this.currentUser) e();
			else {
				const r = this.onAuthStateChanged(() => {
					r(), e();
				}, n);
			}
		});
	}
	toJSON() {
		var e;
		return {
			apiKey: this.config.apiKey,
			authDomain: this.config.authDomain,
			appName: this.name,
			currentUser:
				(e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
		};
	}
	async _setRedirectUser(e, n) {
		const r = await this.getOrInitRedirectPersistenceManager(n);
		return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
	}
	async getOrInitRedirectPersistenceManager(e) {
		if (!this.redirectPersistenceManager) {
			const n = (e && ln(e)) || this._popupRedirectResolver;
			G(n, this, "argument-error"),
				(this.redirectPersistenceManager = await ii.create(
					this,
					[ln(n._redirectPersistence)],
					"redirectUser"
				)),
				(this.redirectUser =
					await this.redirectPersistenceManager.getCurrentUser());
		}
		return this.redirectPersistenceManager;
	}
	async _redirectUserForId(e) {
		var n, r;
		return (
			this._isInitialized && (await this.queue(async () => {})),
			((n = this._currentUser) === null || n === void 0
				? void 0
				: n._redirectEventId) === e
				? this._currentUser
				: ((r = this.redirectUser) === null || r === void 0
						? void 0
						: r._redirectEventId) === e
				? this.redirectUser
				: null
		);
	}
	async _persistUserIfCurrent(e) {
		if (e === this.currentUser)
			return this.queue(async () => this.directlySetCurrentUser(e));
	}
	_notifyListenersIfCurrent(e) {
		e === this.currentUser && this.notifyAuthListeners();
	}
	_key() {
		return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
	}
	_startProactiveRefresh() {
		(this.isProactiveRefreshEnabled = !0),
			this.currentUser && this._currentUser._startProactiveRefresh();
	}
	_stopProactiveRefresh() {
		(this.isProactiveRefreshEnabled = !1),
			this.currentUser && this._currentUser._stopProactiveRefresh();
	}
	get _currentUser() {
		return this.currentUser;
	}
	notifyAuthListeners() {
		var e, n;
		if (!this._isInitialized) return;
		this.idTokenSubscription.next(this.currentUser);
		const r =
			(n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
				null && n !== void 0
				? n
				: null;
		this.lastNotifiedUid !== r &&
			((this.lastNotifiedUid = r),
			this.authStateSubscription.next(this.currentUser));
	}
	registerStateListener(e, n, r, i) {
		if (this._deleted) return () => {};
		const o = typeof n == "function" ? n : n.next.bind(n),
			s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
		return (
			G(s, this, "internal-error"),
			s.then(() => o(this.currentUser)),
			typeof n == "function" ? e.addObserver(n, r, i) : e.addObserver(n)
		);
	}
	async directlySetCurrentUser(e) {
		this.currentUser &&
			this.currentUser !== e &&
			this._currentUser._stopProactiveRefresh(),
			e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
			(this.currentUser = e),
			e
				? await this.assertedPersistence.setCurrentUser(e)
				: await this.assertedPersistence.removeCurrentUser();
	}
	queue(e) {
		return (this.operations = this.operations.then(e, e)), this.operations;
	}
	get assertedPersistence() {
		return (
			G(this.persistenceManager, this, "internal-error"),
			this.persistenceManager
		);
	}
	_logFramework(e) {
		!e ||
			this.frameworks.includes(e) ||
			(this.frameworks.push(e),
			this.frameworks.sort(),
			(this.clientVersion = hg(
				this.config.clientPlatform,
				this._getFrameworks()
			)));
	}
	_getFrameworks() {
		return this.frameworks;
	}
	async _getAdditionalHeaders() {
		var e;
		const n = { "X-Client-Version": this.clientVersion };
		this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
		const r = await ((e = this.heartbeatServiceProvider.getImmediate({
			optional: !0,
		})) === null || e === void 0
			? void 0
			: e.getHeartbeatsHeader());
		r && (n["X-Firebase-Client"] = r);
		const i = await this._getAppCheckToken();
		return i && (n["X-Firebase-AppCheck"] = i), n;
	}
	async _getAppCheckToken() {
		var e;
		const n = await ((e = this.appCheckServiceProvider.getImmediate({
			optional: !0,
		})) === null || e === void 0
			? void 0
			: e.getToken());
		return (
			n != null &&
				n.error &&
				$S(`Error while retrieving App Check token: ${n.error}`),
			n == null ? void 0 : n.token
		);
	}
}
function ki(t) {
	return xn(t);
}
class Ph {
	constructor(e) {
		(this.auth = e),
			(this.observer = null),
			(this.addObserver = NE((n) => (this.observer = n)));
	}
	get next() {
		return (
			G(this.observer, this.auth, "internal-error"),
			this.observer.next.bind(this.observer)
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yx(t, e) {
	const n = Ky(t, "auth");
	if (n.isInitialized()) {
		const i = n.getImmediate(),
			o = n.getOptions();
		if (wa(o, e ?? {})) return i;
		Tt(i, "already-initialized");
	}
	return n.initialize({ options: e });
}
function gx(t, e) {
	const n = (e == null ? void 0 : e.persistence) || [],
		r = (Array.isArray(n) ? n : [n]).map(ln);
	e != null && e.errorMap && t._updateErrorMap(e.errorMap),
		t._initializeWithPersistence(
			r,
			e == null ? void 0 : e.popupRedirectResolver
		);
}
function vx(t, e, n) {
	const r = ki(t);
	G(r._canInitEmulator, r, "emulator-config-failed"),
		G(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
	const i = !!(n != null && n.disableWarnings),
		o = vg(e),
		{ host: s, port: a } = wx(e),
		l = a === null ? "" : `:${a}`;
	(r.config.emulator = { url: `${o}//${s}${l}/` }),
		(r.settings.appVerificationDisabledForTesting = !0),
		(r.emulatorConfig = Object.freeze({
			host: s,
			port: a,
			protocol: o.replace(":", ""),
			options: Object.freeze({ disableWarnings: i }),
		})),
		i || Ex();
}
function vg(t) {
	const e = t.indexOf(":");
	return e < 0 ? "" : t.substr(0, e + 1);
}
function wx(t) {
	const e = vg(t),
		n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
	if (!n) return { host: "", port: null };
	const r = n[2].split("@").pop() || "",
		i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		const o = i[1];
		return { host: o, port: Th(r.substr(o.length + 1)) };
	} else {
		const [o, s] = r.split(":");
		return { host: o, port: Th(s) };
	}
}
function Th(t) {
	if (!t) return null;
	const e = Number(t);
	return isNaN(e) ? null : e;
}
function Ex() {
	function t() {
		const e = document.createElement("p"),
			n = e.style;
		(e.innerText =
			"Running in emulator mode. Do not use with production credentials."),
			(n.position = "fixed"),
			(n.width = "100%"),
			(n.backgroundColor = "#ffffff"),
			(n.border = ".1em solid #000000"),
			(n.color = "#b50000"),
			(n.bottom = "0px"),
			(n.left = "0px"),
			(n.margin = "0px"),
			(n.zIndex = "10000"),
			(n.textAlign = "center"),
			e.classList.add("firebase-emulator-warning"),
			document.body.appendChild(e);
	}
	typeof console < "u" &&
		typeof console.info == "function" &&
		console.info(
			"WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
		),
		typeof window < "u" &&
			typeof document < "u" &&
			(document.readyState === "loading"
				? window.addEventListener("DOMContentLoaded", t)
				: t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cd {
	constructor(e, n) {
		(this.providerId = e), (this.signInMethod = n);
	}
	toJSON() {
		return an("not implemented");
	}
	_getIdTokenResponse(e) {
		return an("not implemented");
	}
	_linkToIdToken(e, n) {
		return an("not implemented");
	}
	_getReauthenticationResolver(e) {
		return an("not implemented");
	}
}
async function Sx(t, e) {
	return Ci(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Kl(t, e) {
	return Ja(t, "POST", "/v1/accounts:signInWithPassword", Wo(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xx(t, e) {
	return Ja(t, "POST", "/v1/accounts:signInWithEmailLink", Wo(t, e));
}
async function _x(t, e) {
	return Ja(t, "POST", "/v1/accounts:signInWithEmailLink", Wo(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class No extends Cd {
	constructor(e, n, r, i = null) {
		super("password", r),
			(this._email = e),
			(this._password = n),
			(this._tenantId = i);
	}
	static _fromEmailAndPassword(e, n) {
		return new No(e, n, "password");
	}
	static _fromEmailAndCode(e, n, r = null) {
		return new No(e, n, "emailLink", r);
	}
	toJSON() {
		return {
			email: this._email,
			password: this._password,
			signInMethod: this.signInMethod,
			tenantId: this._tenantId,
		};
	}
	static fromJSON(e) {
		const n = typeof e == "string" ? JSON.parse(e) : e;
		if (n != null && n.email && n != null && n.password) {
			if (n.signInMethod === "password")
				return this._fromEmailAndPassword(n.email, n.password);
			if (n.signInMethod === "emailLink")
				return this._fromEmailAndCode(n.email, n.password, n.tenantId);
		}
		return null;
	}
	async _getIdTokenResponse(e) {
		var n;
		switch (this.signInMethod) {
			case "password":
				const r = {
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: "CLIENT_TYPE_WEB",
				};
				if (
					!((n = e._getRecaptchaConfig()) === null || n === void 0) &&
					n.emailPasswordEnabled
				) {
					const i = await Rh(e, r, "signInWithPassword");
					return Kl(e, i);
				} else
					return Kl(e, r).catch(async (i) => {
						if (i.code === "auth/missing-recaptcha-token") {
							console.log(
								"Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."
							);
							const o = await Rh(e, r, "signInWithPassword");
							return Kl(e, o);
						} else return Promise.reject(i);
					});
			case "emailLink":
				return xx(e, { email: this._email, oobCode: this._password });
			default:
				Tt(e, "internal-error");
		}
	}
	async _linkToIdToken(e, n) {
		switch (this.signInMethod) {
			case "password":
				return Sx(e, {
					idToken: n,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
				});
			case "emailLink":
				return _x(e, {
					idToken: n,
					email: this._email,
					oobCode: this._password,
				});
			default:
				Tt(e, "internal-error");
		}
	}
	_getReauthenticationResolver(e) {
		return this._getIdTokenResponse(e);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function oi(t, e) {
	return Ja(t, "POST", "/v1/accounts:signInWithIdp", Wo(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bx = "http://localhost";
class _r extends Cd {
	constructor() {
		super(...arguments), (this.pendingToken = null);
	}
	static _fromParams(e) {
		const n = new _r(e.providerId, e.signInMethod);
		return (
			e.idToken || e.accessToken
				? (e.idToken && (n.idToken = e.idToken),
				  e.accessToken && (n.accessToken = e.accessToken),
				  e.nonce && !e.pendingToken && (n.nonce = e.nonce),
				  e.pendingToken && (n.pendingToken = e.pendingToken))
				: e.oauthToken && e.oauthTokenSecret
				? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
				: Tt("argument-error"),
			n
		);
	}
	toJSON() {
		return {
			idToken: this.idToken,
			accessToken: this.accessToken,
			secret: this.secret,
			nonce: this.nonce,
			pendingToken: this.pendingToken,
			providerId: this.providerId,
			signInMethod: this.signInMethod,
		};
	}
	static fromJSON(e) {
		const n = typeof e == "string" ? JSON.parse(e) : e,
			{ providerId: r, signInMethod: i } = n,
			o = Ed(n, ["providerId", "signInMethod"]);
		if (!r || !i) return null;
		const s = new _r(r, i);
		return (
			(s.idToken = o.idToken || void 0),
			(s.accessToken = o.accessToken || void 0),
			(s.secret = o.secret),
			(s.nonce = o.nonce),
			(s.pendingToken = o.pendingToken || null),
			s
		);
	}
	_getIdTokenResponse(e) {
		const n = this.buildRequest();
		return oi(e, n);
	}
	_linkToIdToken(e, n) {
		const r = this.buildRequest();
		return (r.idToken = n), oi(e, r);
	}
	_getReauthenticationResolver(e) {
		const n = this.buildRequest();
		return (n.autoCreate = !1), oi(e, n);
	}
	buildRequest() {
		const e = { requestUri: bx, returnSecureToken: !0 };
		if (this.pendingToken) e.pendingToken = this.pendingToken;
		else {
			const n = {};
			this.idToken && (n.id_token = this.idToken),
				this.accessToken && (n.access_token = this.accessToken),
				this.secret && (n.oauth_token_secret = this.secret),
				(n.providerId = this.providerId),
				this.nonce && !this.pendingToken && (n.nonce = this.nonce),
				(e.postBody = $o(n));
		}
		return e;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cx(t) {
	switch (t) {
		case "recoverEmail":
			return "RECOVER_EMAIL";
		case "resetPassword":
			return "PASSWORD_RESET";
		case "signIn":
			return "EMAIL_SIGNIN";
		case "verifyEmail":
			return "VERIFY_EMAIL";
		case "verifyAndChangeEmail":
			return "VERIFY_AND_CHANGE_EMAIL";
		case "revertSecondFactorAddition":
			return "REVERT_SECOND_FACTOR_ADDITION";
		default:
			return null;
	}
}
function kx(t) {
	const e = Gi(Ji(t)).link,
		n = e ? Gi(Ji(e)).deep_link_id : null,
		r = Gi(Ji(t)).deep_link_id;
	return (r ? Gi(Ji(r)).link : null) || r || n || e || t;
}
class kd {
	constructor(e) {
		var n, r, i, o, s, a;
		const l = Gi(Ji(e)),
			u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
			c = (r = l.oobCode) !== null && r !== void 0 ? r : null,
			d = Cx((i = l.mode) !== null && i !== void 0 ? i : null);
		G(u && c && d, "argument-error"),
			(this.apiKey = u),
			(this.operation = d),
			(this.code = c),
			(this.continueUrl =
				(o = l.continueUrl) !== null && o !== void 0 ? o : null),
			(this.languageCode =
				(s = l.languageCode) !== null && s !== void 0 ? s : null),
			(this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
	}
	static parseLink(e) {
		const n = kx(e);
		try {
			return new kd(n);
		} catch {
			return null;
		}
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ri {
	constructor() {
		this.providerId = Ri.PROVIDER_ID;
	}
	static credential(e, n) {
		return No._fromEmailAndPassword(e, n);
	}
	static credentialWithLink(e, n) {
		const r = kd.parseLink(n);
		return G(r, "argument-error"), No._fromEmailAndCode(e, r.code, r.tenantId);
	}
}
Ri.PROVIDER_ID = "password";
Ri.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Ri.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rd {
	constructor(e) {
		(this.providerId = e),
			(this.defaultLanguageCode = null),
			(this.customParameters = {});
	}
	setDefaultLanguage(e) {
		this.defaultLanguageCode = e;
	}
	setCustomParameters(e) {
		return (this.customParameters = e), this;
	}
	getCustomParameters() {
		return this.customParameters;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qo extends Rd {
	constructor() {
		super(...arguments), (this.scopes = []);
	}
	addScope(e) {
		return this.scopes.includes(e) || this.scopes.push(e), this;
	}
	getScopes() {
		return [...this.scopes];
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dn extends qo {
	constructor() {
		super("facebook.com");
	}
	static credential(e) {
		return _r._fromParams({
			providerId: Dn.PROVIDER_ID,
			signInMethod: Dn.FACEBOOK_SIGN_IN_METHOD,
			accessToken: e,
		});
	}
	static credentialFromResult(e) {
		return Dn.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return Dn.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
		try {
			return Dn.credential(e.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
Dn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Dn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nn extends qo {
	constructor() {
		super("google.com"), this.addScope("profile");
	}
	static credential(e, n) {
		return _r._fromParams({
			providerId: nn.PROVIDER_ID,
			signInMethod: nn.GOOGLE_SIGN_IN_METHOD,
			idToken: e,
			accessToken: n,
		});
	}
	static credentialFromResult(e) {
		return nn.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return nn.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e) return null;
		const { oauthIdToken: n, oauthAccessToken: r } = e;
		if (!n && !r) return null;
		try {
			return nn.credential(n, r);
		} catch {
			return null;
		}
	}
}
nn.GOOGLE_SIGN_IN_METHOD = "google.com";
nn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn extends qo {
	constructor() {
		super("github.com");
	}
	static credential(e) {
		return _r._fromParams({
			providerId: rn.PROVIDER_ID,
			signInMethod: rn.GITHUB_SIGN_IN_METHOD,
			accessToken: e,
		});
	}
	static credentialFromResult(e) {
		return rn.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return rn.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
		try {
			return rn.credential(e.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
rn.GITHUB_SIGN_IN_METHOD = "github.com";
rn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jn extends qo {
	constructor() {
		super("twitter.com");
	}
	static credential(e, n) {
		return _r._fromParams({
			providerId: jn.PROVIDER_ID,
			signInMethod: jn.TWITTER_SIGN_IN_METHOD,
			oauthToken: e,
			oauthTokenSecret: n,
		});
	}
	static credentialFromResult(e) {
		return jn.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return jn.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e) return null;
		const { oauthAccessToken: n, oauthTokenSecret: r } = e;
		if (!n || !r) return null;
		try {
			return jn.credential(n, r);
		} catch {
			return null;
		}
	}
}
jn.TWITTER_SIGN_IN_METHOD = "twitter.com";
jn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gi {
	constructor(e) {
		(this.user = e.user),
			(this.providerId = e.providerId),
			(this._tokenResponse = e._tokenResponse),
			(this.operationType = e.operationType);
	}
	static async _fromIdTokenResponse(e, n, r, i = !1) {
		const o = await pr._fromIdTokenResponse(e, r, i),
			s = Oh(r);
		return new gi({
			user: o,
			providerId: s,
			_tokenResponse: r,
			operationType: n,
		});
	}
	static async _forOperation(e, n, r) {
		await e._updateTokensIfNecessary(r, !0);
		const i = Oh(r);
		return new gi({
			user: e,
			providerId: i,
			_tokenResponse: r,
			operationType: n,
		});
	}
}
function Oh(t) {
	return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _a extends er {
	constructor(e, n, r, i) {
		var o;
		super(n.code, n.message),
			(this.operationType = r),
			(this.user = i),
			Object.setPrototypeOf(this, _a.prototype),
			(this.customData = {
				appName: e.name,
				tenantId: (o = e.tenantId) !== null && o !== void 0 ? o : void 0,
				_serverResponse: n.customData._serverResponse,
				operationType: r,
			});
	}
	static _fromErrorAndOperation(e, n, r, i) {
		return new _a(e, n, r, i);
	}
}
function wg(t, e, n, r) {
	return (
		e === "reauthenticate"
			? n._getReauthenticationResolver(t)
			: n._getIdTokenResponse(t)
	).catch((o) => {
		throw o.code === "auth/multi-factor-auth-required"
			? _a._fromErrorAndOperation(t, o, e, r)
			: o;
	});
}
async function Rx(t, e, n = !1) {
	const r = await Oo(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
	return gi._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Px(t, e, n = !1) {
	const { auth: r } = t,
		i = "reauthenticate";
	try {
		const o = await Oo(t, wg(r, i, e, t), n);
		G(o.idToken, r, "internal-error");
		const s = _d(o.idToken);
		G(s, r, "internal-error");
		const { sub: a } = s;
		return G(t.uid === a, r, "user-mismatch"), gi._forOperation(t, i, o);
	} catch (o) {
		throw (
			((o == null ? void 0 : o.code) === "auth/user-not-found" &&
				Tt(r, "user-mismatch"),
			o)
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Eg(t, e, n = !1) {
	const r = "signIn",
		i = await wg(t, r, e),
		o = await gi._fromIdTokenResponse(t, r, i);
	return n || (await t._updateCurrentUser(o.user)), o;
}
async function Tx(t, e) {
	return Eg(ki(t), e);
}
function Ox(t, e, n) {
	return Tx(xn(t), Ri.credential(e, n));
}
function Ix(t, e, n, r) {
	return xn(t).onIdTokenChanged(e, n, r);
}
function Nx(t, e, n) {
	return xn(t).beforeAuthStateChanged(e, n);
}
function Dx(t, e, n, r) {
	return xn(t).onAuthStateChanged(e, n, r);
}
function jx(t) {
	return xn(t).signOut();
}
const ba = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sg {
	constructor(e, n) {
		(this.storageRetriever = e), (this.type = n);
	}
	_isAvailable() {
		try {
			return this.storage
				? (this.storage.setItem(ba, "1"),
				  this.storage.removeItem(ba),
				  Promise.resolve(!0))
				: Promise.resolve(!1);
		} catch {
			return Promise.resolve(!1);
		}
	}
	_set(e, n) {
		return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
	}
	_get(e) {
		const n = this.storage.getItem(e);
		return Promise.resolve(n ? JSON.parse(n) : null);
	}
	_remove(e) {
		return this.storage.removeItem(e), Promise.resolve();
	}
	get storage() {
		return this.storageRetriever();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lx() {
	const t = Ze();
	return bd(t) || Ya(t);
}
const Ax = 1e3,
	Mx = 10;
class xg extends Sg {
	constructor() {
		super(() => window.localStorage, "LOCAL"),
			(this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
			(this.listeners = {}),
			(this.localCache = {}),
			(this.pollTimer = null),
			(this.safariLocalStorageNotSynced = Lx() && lx()),
			(this.fallbackToPolling = fg()),
			(this._shouldAllowMigration = !0);
	}
	forAllChangedKeys(e) {
		for (const n of Object.keys(this.listeners)) {
			const r = this.storage.getItem(n),
				i = this.localCache[n];
			r !== i && e(n, i, r);
		}
	}
	onStorageEvent(e, n = !1) {
		if (!e.key) {
			this.forAllChangedKeys((s, a, l) => {
				this.notifyListeners(s, l);
			});
			return;
		}
		const r = e.key;
		if (
			(n ? this.detachListener() : this.stopPolling(),
			this.safariLocalStorageNotSynced)
		) {
			const s = this.storage.getItem(r);
			if (e.newValue !== s)
				e.newValue !== null
					? this.storage.setItem(r, e.newValue)
					: this.storage.removeItem(r);
			else if (this.localCache[r] === e.newValue && !n) return;
		}
		const i = () => {
				const s = this.storage.getItem(r);
				(!n && this.localCache[r] === s) || this.notifyListeners(r, s);
			},
			o = this.storage.getItem(r);
		ax() && o !== e.newValue && e.newValue !== e.oldValue
			? setTimeout(i, Mx)
			: i();
	}
	notifyListeners(e, n) {
		this.localCache[e] = n;
		const r = this.listeners[e];
		if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
	}
	startPolling() {
		this.stopPolling(),
			(this.pollTimer = setInterval(() => {
				this.forAllChangedKeys((e, n, r) => {
					this.onStorageEvent(
						new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
						!0
					);
				});
			}, Ax));
	}
	stopPolling() {
		this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
	}
	attachListener() {
		window.addEventListener("storage", this.boundEventHandler);
	}
	detachListener() {
		window.removeEventListener("storage", this.boundEventHandler);
	}
	_addListener(e, n) {
		Object.keys(this.listeners).length === 0 &&
			(this.fallbackToPolling ? this.startPolling() : this.attachListener()),
			this.listeners[e] ||
				((this.listeners[e] = new Set()),
				(this.localCache[e] = this.storage.getItem(e))),
			this.listeners[e].add(n);
	}
	_removeListener(e, n) {
		this.listeners[e] &&
			(this.listeners[e].delete(n),
			this.listeners[e].size === 0 && delete this.listeners[e]),
			Object.keys(this.listeners).length === 0 &&
				(this.detachListener(), this.stopPolling());
	}
	async _set(e, n) {
		await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
	}
	async _get(e) {
		const n = await super._get(e);
		return (this.localCache[e] = JSON.stringify(n)), n;
	}
	async _remove(e) {
		await super._remove(e), delete this.localCache[e];
	}
}
xg.type = "LOCAL";
const Fx = xg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _g extends Sg {
	constructor() {
		super(() => window.sessionStorage, "SESSION");
	}
	_addListener(e, n) {}
	_removeListener(e, n) {}
}
_g.type = "SESSION";
const bg = _g;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ux(t) {
	return Promise.all(
		t.map(async (e) => {
			try {
				return { fulfilled: !0, value: await e };
			} catch (n) {
				return { fulfilled: !1, reason: n };
			}
		})
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xa {
	constructor(e) {
		(this.eventTarget = e),
			(this.handlersMap = {}),
			(this.boundEventHandler = this.handleEvent.bind(this));
	}
	static _getInstance(e) {
		const n = this.receivers.find((i) => i.isListeningto(e));
		if (n) return n;
		const r = new Xa(e);
		return this.receivers.push(r), r;
	}
	isListeningto(e) {
		return this.eventTarget === e;
	}
	async handleEvent(e) {
		const n = e,
			{ eventId: r, eventType: i, data: o } = n.data,
			s = this.handlersMap[i];
		if (!(s != null && s.size)) return;
		n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
		const a = Array.from(s).map(async (u) => u(n.origin, o)),
			l = await Ux(a);
		n.ports[0].postMessage({
			status: "done",
			eventId: r,
			eventType: i,
			response: l,
		});
	}
	_subscribe(e, n) {
		Object.keys(this.handlersMap).length === 0 &&
			this.eventTarget.addEventListener("message", this.boundEventHandler),
			this.handlersMap[e] || (this.handlersMap[e] = new Set()),
			this.handlersMap[e].add(n);
	}
	_unsubscribe(e, n) {
		this.handlersMap[e] && n && this.handlersMap[e].delete(n),
			(!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
			Object.keys(this.handlersMap).length === 0 &&
				this.eventTarget.removeEventListener("message", this.boundEventHandler);
	}
}
Xa.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pd(t = "", e = 10) {
	let n = "";
	for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
	return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zx {
	constructor(e) {
		(this.target = e), (this.handlers = new Set());
	}
	removeMessageHandler(e) {
		e.messageChannel &&
			(e.messageChannel.port1.removeEventListener("message", e.onMessage),
			e.messageChannel.port1.close()),
			this.handlers.delete(e);
	}
	async _send(e, n, r = 50) {
		const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
		if (!i) throw new Error("connection_unavailable");
		let o, s;
		return new Promise((a, l) => {
			const u = Pd("", 20);
			i.port1.start();
			const c = setTimeout(() => {
				l(new Error("unsupported_event"));
			}, r);
			(s = {
				messageChannel: i,
				onMessage(d) {
					const f = d;
					if (f.data.eventId === u)
						switch (f.data.status) {
							case "ack":
								clearTimeout(c),
									(o = setTimeout(() => {
										l(new Error("timeout"));
									}, 3e3));
								break;
							case "done":
								clearTimeout(o), a(f.data.response);
								break;
							default:
								clearTimeout(c),
									clearTimeout(o),
									l(new Error("invalid_response"));
								break;
						}
				},
			}),
				this.handlers.add(s),
				i.port1.addEventListener("message", s.onMessage),
				this.target.postMessage({ eventType: e, eventId: u, data: n }, [
					i.port2,
				]);
		}).finally(() => {
			s && this.removeMessageHandler(s);
		});
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kt() {
	return window;
}
function Bx(t) {
	Kt().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cg() {
	return (
		typeof Kt().WorkerGlobalScope < "u" &&
		typeof Kt().importScripts == "function"
	);
}
async function $x() {
	if (!(navigator != null && navigator.serviceWorker)) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function Hx() {
	var t;
	return (
		((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
		t === void 0
			? void 0
			: t.controller) || null
	);
}
function Vx() {
	return Cg() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kg = "firebaseLocalStorageDb",
	Wx = 1,
	Ca = "firebaseLocalStorage",
	Rg = "fbase_key";
class Qo {
	constructor(e) {
		this.request = e;
	}
	toPromise() {
		return new Promise((e, n) => {
			this.request.addEventListener("success", () => {
				e(this.request.result);
			}),
				this.request.addEventListener("error", () => {
					n(this.request.error);
				});
		});
	}
}
function Za(t, e) {
	return t.transaction([Ca], e ? "readwrite" : "readonly").objectStore(Ca);
}
function qx() {
	const t = indexedDB.deleteDatabase(kg);
	return new Qo(t).toPromise();
}
function sc() {
	const t = indexedDB.open(kg, Wx);
	return new Promise((e, n) => {
		t.addEventListener("error", () => {
			n(t.error);
		}),
			t.addEventListener("upgradeneeded", () => {
				const r = t.result;
				try {
					r.createObjectStore(Ca, { keyPath: Rg });
				} catch (i) {
					n(i);
				}
			}),
			t.addEventListener("success", async () => {
				const r = t.result;
				r.objectStoreNames.contains(Ca)
					? e(r)
					: (r.close(), await qx(), e(await sc()));
			});
	});
}
async function Ih(t, e, n) {
	const r = Za(t, !0).put({ [Rg]: e, value: n });
	return new Qo(r).toPromise();
}
async function Qx(t, e) {
	const n = Za(t, !1).get(e),
		r = await new Qo(n).toPromise();
	return r === void 0 ? null : r.value;
}
function Nh(t, e) {
	const n = Za(t, !0).delete(e);
	return new Qo(n).toPromise();
}
const Kx = 800,
	Gx = 3;
class Pg {
	constructor() {
		(this.type = "LOCAL"),
			(this._shouldAllowMigration = !0),
			(this.listeners = {}),
			(this.localCache = {}),
			(this.pollTimer = null),
			(this.pendingWrites = 0),
			(this.receiver = null),
			(this.sender = null),
			(this.serviceWorkerReceiverAvailable = !1),
			(this.activeServiceWorker = null),
			(this._workerInitializationPromise =
				this.initializeServiceWorkerMessaging().then(
					() => {},
					() => {}
				));
	}
	async _openDb() {
		return this.db ? this.db : ((this.db = await sc()), this.db);
	}
	async _withRetries(e) {
		let n = 0;
		for (;;)
			try {
				const r = await this._openDb();
				return await e(r);
			} catch (r) {
				if (n++ > Gx) throw r;
				this.db && (this.db.close(), (this.db = void 0));
			}
	}
	async initializeServiceWorkerMessaging() {
		return Cg() ? this.initializeReceiver() : this.initializeSender();
	}
	async initializeReceiver() {
		(this.receiver = Xa._getInstance(Vx())),
			this.receiver._subscribe("keyChanged", async (e, n) => ({
				keyProcessed: (await this._poll()).includes(n.key),
			})),
			this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
	}
	async initializeSender() {
		var e, n;
		if (((this.activeServiceWorker = await $x()), !this.activeServiceWorker))
			return;
		this.sender = new zx(this.activeServiceWorker);
		const r = await this.sender._send("ping", {}, 800);
		r &&
			!((e = r[0]) === null || e === void 0) &&
			e.fulfilled &&
			!((n = r[0]) === null || n === void 0) &&
			n.value.includes("keyChanged") &&
			(this.serviceWorkerReceiverAvailable = !0);
	}
	async notifyServiceWorker(e) {
		if (
			!(
				!this.sender ||
				!this.activeServiceWorker ||
				Hx() !== this.activeServiceWorker
			)
		)
			try {
				await this.sender._send(
					"keyChanged",
					{ key: e },
					this.serviceWorkerReceiverAvailable ? 800 : 50
				);
			} catch {}
	}
	async _isAvailable() {
		try {
			if (!indexedDB) return !1;
			const e = await sc();
			return await Ih(e, ba, "1"), await Nh(e, ba), !0;
		} catch {}
		return !1;
	}
	async _withPendingWrite(e) {
		this.pendingWrites++;
		try {
			await e();
		} finally {
			this.pendingWrites--;
		}
	}
	async _set(e, n) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((r) => Ih(r, e, n)),
				(this.localCache[e] = n),
				this.notifyServiceWorker(e)
			)
		);
	}
	async _get(e) {
		const n = await this._withRetries((r) => Qx(r, e));
		return (this.localCache[e] = n), n;
	}
	async _remove(e) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((n) => Nh(n, e)),
				delete this.localCache[e],
				this.notifyServiceWorker(e)
			)
		);
	}
	async _poll() {
		const e = await this._withRetries((i) => {
			const o = Za(i, !1).getAll();
			return new Qo(o).toPromise();
		});
		if (!e) return [];
		if (this.pendingWrites !== 0) return [];
		const n = [],
			r = new Set();
		for (const { fbase_key: i, value: o } of e)
			r.add(i),
				JSON.stringify(this.localCache[i]) !== JSON.stringify(o) &&
					(this.notifyListeners(i, o), n.push(i));
		for (const i of Object.keys(this.localCache))
			this.localCache[i] &&
				!r.has(i) &&
				(this.notifyListeners(i, null), n.push(i));
		return n;
	}
	notifyListeners(e, n) {
		this.localCache[e] = n;
		const r = this.listeners[e];
		if (r) for (const i of Array.from(r)) i(n);
	}
	startPolling() {
		this.stopPolling(),
			(this.pollTimer = setInterval(async () => this._poll(), Kx));
	}
	stopPolling() {
		this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
	}
	_addListener(e, n) {
		Object.keys(this.listeners).length === 0 && this.startPolling(),
			this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
			this.listeners[e].add(n);
	}
	_removeListener(e, n) {
		this.listeners[e] &&
			(this.listeners[e].delete(n),
			this.listeners[e].size === 0 && delete this.listeners[e]),
			Object.keys(this.listeners).length === 0 && this.stopPolling();
	}
}
Pg.type = "LOCAL";
const Jx = Pg;
new Vo(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tg(t, e) {
	return e
		? ln(e)
		: (G(t._popupRedirectResolver, t, "argument-error"),
		  t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Td extends Cd {
	constructor(e) {
		super("custom", "custom"), (this.params = e);
	}
	_getIdTokenResponse(e) {
		return oi(e, this._buildIdpRequest());
	}
	_linkToIdToken(e, n) {
		return oi(e, this._buildIdpRequest(n));
	}
	_getReauthenticationResolver(e) {
		return oi(e, this._buildIdpRequest());
	}
	_buildIdpRequest(e) {
		const n = {
			requestUri: this.params.requestUri,
			sessionId: this.params.sessionId,
			postBody: this.params.postBody,
			tenantId: this.params.tenantId,
			pendingToken: this.params.pendingToken,
			returnSecureToken: !0,
			returnIdpCredential: !0,
		};
		return e && (n.idToken = e), n;
	}
}
function Yx(t) {
	return Eg(t.auth, new Td(t), t.bypassAuthState);
}
function Xx(t) {
	const { auth: e, user: n } = t;
	return G(n, e, "internal-error"), Px(n, new Td(t), t.bypassAuthState);
}
async function Zx(t) {
	const { auth: e, user: n } = t;
	return G(n, e, "internal-error"), Rx(n, new Td(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Og {
	constructor(e, n, r, i, o = !1) {
		(this.auth = e),
			(this.resolver = r),
			(this.user = i),
			(this.bypassAuthState = o),
			(this.pendingPromise = null),
			(this.eventManager = null),
			(this.filter = Array.isArray(n) ? n : [n]);
	}
	execute() {
		return new Promise(async (e, n) => {
			this.pendingPromise = { resolve: e, reject: n };
			try {
				(this.eventManager = await this.resolver._initialize(this.auth)),
					await this.onExecution(),
					this.eventManager.registerConsumer(this);
			} catch (r) {
				this.reject(r);
			}
		});
	}
	async onAuthEvent(e) {
		const {
			urlResponse: n,
			sessionId: r,
			postBody: i,
			tenantId: o,
			error: s,
			type: a,
		} = e;
		if (s) {
			this.reject(s);
			return;
		}
		const l = {
			auth: this.auth,
			requestUri: n,
			sessionId: r,
			tenantId: o || void 0,
			postBody: i || void 0,
			user: this.user,
			bypassAuthState: this.bypassAuthState,
		};
		try {
			this.resolve(await this.getIdpTask(a)(l));
		} catch (u) {
			this.reject(u);
		}
	}
	onError(e) {
		this.reject(e);
	}
	getIdpTask(e) {
		switch (e) {
			case "signInViaPopup":
			case "signInViaRedirect":
				return Yx;
			case "linkViaPopup":
			case "linkViaRedirect":
				return Zx;
			case "reauthViaPopup":
			case "reauthViaRedirect":
				return Xx;
			default:
				Tt(this.auth, "internal-error");
		}
	}
	resolve(e) {
		gn(this.pendingPromise, "Pending promise was never set"),
			this.pendingPromise.resolve(e),
			this.unregisterAndCleanUp();
	}
	reject(e) {
		gn(this.pendingPromise, "Pending promise was never set"),
			this.pendingPromise.reject(e),
			this.unregisterAndCleanUp();
	}
	unregisterAndCleanUp() {
		this.eventManager && this.eventManager.unregisterConsumer(this),
			(this.pendingPromise = null),
			this.cleanUp();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const e_ = new Vo(2e3, 1e4);
async function Dh(t, e, n) {
	const r = ki(t);
	HS(t, e, Rd);
	const i = Tg(r, n);
	return new cr(r, "signInViaPopup", e, i).executeNotNull();
}
class cr extends Og {
	constructor(e, n, r, i, o) {
		super(e, n, i, o),
			(this.provider = r),
			(this.authWindow = null),
			(this.pollId = null),
			cr.currentPopupAction && cr.currentPopupAction.cancel(),
			(cr.currentPopupAction = this);
	}
	async executeNotNull() {
		const e = await this.execute();
		return G(e, this.auth, "internal-error"), e;
	}
	async onExecution() {
		gn(this.filter.length === 1, "Popup operations only handle one event");
		const e = Pd();
		(this.authWindow = await this.resolver._openPopup(
			this.auth,
			this.provider,
			this.filter[0],
			e
		)),
			(this.authWindow.associatedEvent = e),
			this.resolver._originValidation(this.auth).catch((n) => {
				this.reject(n);
			}),
			this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
				n || this.reject(Qt(this.auth, "web-storage-unsupported"));
			}),
			this.pollUserCancellation();
	}
	get eventId() {
		var e;
		return (
			((e = this.authWindow) === null || e === void 0
				? void 0
				: e.associatedEvent) || null
		);
	}
	cancel() {
		this.reject(Qt(this.auth, "cancelled-popup-request"));
	}
	cleanUp() {
		this.authWindow && this.authWindow.close(),
			this.pollId && window.clearTimeout(this.pollId),
			(this.authWindow = null),
			(this.pollId = null),
			(cr.currentPopupAction = null);
	}
	pollUserCancellation() {
		const e = () => {
			var n, r;
			if (
				!(
					(r =
						(n = this.authWindow) === null || n === void 0
							? void 0
							: n.window) === null || r === void 0
				) &&
				r.closed
			) {
				this.pollId = window.setTimeout(() => {
					(this.pollId = null),
						this.reject(Qt(this.auth, "popup-closed-by-user"));
				}, 8e3);
				return;
			}
			this.pollId = window.setTimeout(e, e_.get());
		};
		e();
	}
}
cr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t_ = "pendingRedirect",
	Ms = new Map();
class n_ extends Og {
	constructor(e, n, r = !1) {
		super(
			e,
			["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
			n,
			void 0,
			r
		),
			(this.eventId = null);
	}
	async execute() {
		let e = Ms.get(this.auth._key());
		if (!e) {
			try {
				const r = (await r_(this.resolver, this.auth))
					? await super.execute()
					: null;
				e = () => Promise.resolve(r);
			} catch (n) {
				e = () => Promise.reject(n);
			}
			Ms.set(this.auth._key(), e);
		}
		return (
			this.bypassAuthState ||
				Ms.set(this.auth._key(), () => Promise.resolve(null)),
			e()
		);
	}
	async onAuthEvent(e) {
		if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
		if (e.type === "unknown") {
			this.resolve(null);
			return;
		}
		if (e.eventId) {
			const n = await this.auth._redirectUserForId(e.eventId);
			if (n) return (this.user = n), super.onAuthEvent(e);
			this.resolve(null);
		}
	}
	async onExecution() {}
	cleanUp() {}
}
async function r_(t, e) {
	const n = s_(e),
		r = o_(t);
	if (!(await r._isAvailable())) return !1;
	const i = (await r._get(n)) === "true";
	return await r._remove(n), i;
}
function i_(t, e) {
	Ms.set(t._key(), e);
}
function o_(t) {
	return ln(t._redirectPersistence);
}
function s_(t) {
	return As(t_, t.config.apiKey, t.name);
}
async function a_(t, e, n = !1) {
	const r = ki(t),
		i = Tg(r, e),
		s = await new n_(r, i, n).execute();
	return (
		s &&
			!n &&
			(delete s.user._redirectEventId,
			await r._persistUserIfCurrent(s.user),
			await r._setRedirectUser(null, e)),
		s
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const l_ = 10 * 60 * 1e3;
class u_ {
	constructor(e) {
		(this.auth = e),
			(this.cachedEventUids = new Set()),
			(this.consumers = new Set()),
			(this.queuedRedirectEvent = null),
			(this.hasHandledPotentialRedirect = !1),
			(this.lastProcessedEventTime = Date.now());
	}
	registerConsumer(e) {
		this.consumers.add(e),
			this.queuedRedirectEvent &&
				this.isEventForConsumer(this.queuedRedirectEvent, e) &&
				(this.sendToConsumer(this.queuedRedirectEvent, e),
				this.saveEventToCache(this.queuedRedirectEvent),
				(this.queuedRedirectEvent = null));
	}
	unregisterConsumer(e) {
		this.consumers.delete(e);
	}
	onEvent(e) {
		if (this.hasEventBeenHandled(e)) return !1;
		let n = !1;
		return (
			this.consumers.forEach((r) => {
				this.isEventForConsumer(e, r) &&
					((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
			}),
			this.hasHandledPotentialRedirect ||
				!c_(e) ||
				((this.hasHandledPotentialRedirect = !0),
				n || ((this.queuedRedirectEvent = e), (n = !0))),
			n
		);
	}
	sendToConsumer(e, n) {
		var r;
		if (e.error && !Ig(e)) {
			const i =
				((r = e.error.code) === null || r === void 0
					? void 0
					: r.split("auth/")[1]) || "internal-error";
			n.onError(Qt(this.auth, i));
		} else n.onAuthEvent(e);
	}
	isEventForConsumer(e, n) {
		const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
		return n.filter.includes(e.type) && r;
	}
	hasEventBeenHandled(e) {
		return (
			Date.now() - this.lastProcessedEventTime >= l_ &&
				this.cachedEventUids.clear(),
			this.cachedEventUids.has(jh(e))
		);
	}
	saveEventToCache(e) {
		this.cachedEventUids.add(jh(e)), (this.lastProcessedEventTime = Date.now());
	}
}
function jh(t) {
	return [t.type, t.eventId, t.sessionId, t.tenantId]
		.filter((e) => e)
		.join("-");
}
function Ig({ type: t, error: e }) {
	return (
		t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
	);
}
function c_(t) {
	switch (t.type) {
		case "signInViaRedirect":
		case "linkViaRedirect":
		case "reauthViaRedirect":
			return !0;
		case "unknown":
			return Ig(t);
		default:
			return !1;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function d_(t, e = {}) {
	return Ci(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
	h_ = /^https?/;
async function p_(t) {
	if (t.config.emulator) return;
	const { authorizedDomains: e } = await d_(t);
	for (const n of e)
		try {
			if (m_(n)) return;
		} catch {}
	Tt(t, "unauthorized-domain");
}
function m_(t) {
	const e = oc(),
		{ protocol: n, hostname: r } = new URL(e);
	if (t.startsWith("chrome-extension://")) {
		const s = new URL(t);
		return s.hostname === "" && r === ""
			? n === "chrome-extension:" &&
					t.replace("chrome-extension://", "") ===
						e.replace("chrome-extension://", "")
			: n === "chrome-extension:" && s.hostname === r;
	}
	if (!h_.test(n)) return !1;
	if (f_.test(t)) return r === t;
	const i = t.replace(/\./g, "\\.");
	return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y_ = new Vo(3e4, 6e4);
function Lh() {
	const t = Kt().___jsl;
	if (t != null && t.H) {
		for (const e of Object.keys(t.H))
			if (
				((t.H[e].r = t.H[e].r || []),
				(t.H[e].L = t.H[e].L || []),
				(t.H[e].r = [...t.H[e].L]),
				t.CP)
			)
				for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
	}
}
function g_(t) {
	return new Promise((e, n) => {
		var r, i, o;
		function s() {
			Lh(),
				gapi.load("gapi.iframes", {
					callback: () => {
						e(gapi.iframes.getContext());
					},
					ontimeout: () => {
						Lh(), n(Qt(t, "network-request-failed"));
					},
					timeout: y_.get(),
				});
		}
		if (
			!(
				(i = (r = Kt().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
					null || i === void 0
			) &&
			i.Iframe
		)
			e(gapi.iframes.getContext());
		else if (!((o = Kt().gapi) === null || o === void 0) && o.load) s();
		else {
			const a = cx("iframefcb");
			return (
				(Kt()[a] = () => {
					gapi.load ? s() : n(Qt(t, "network-request-failed"));
				}),
				yg(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
			);
		}
	}).catch((e) => {
		throw ((Fs = null), e);
	});
}
let Fs = null;
function v_(t) {
	return (Fs = Fs || g_(t)), Fs;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w_ = new Vo(5e3, 15e3),
	E_ = "__/auth/iframe",
	S_ = "emulator/auth/iframe",
	x_ = {
		style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
		"aria-hidden": "true",
		tabindex: "-1",
	},
	__ = new Map([
		["identitytoolkit.googleapis.com", "p"],
		["staging-identitytoolkit.sandbox.googleapis.com", "s"],
		["test-identitytoolkit.sandbox.googleapis.com", "t"],
	]);
function b_(t) {
	const e = t.config;
	G(e.authDomain, t, "auth-domain-config-required");
	const n = e.emulator ? xd(e, S_) : `https://${t.config.authDomain}/${E_}`,
		r = { apiKey: e.apiKey, appName: t.name, v: Ho },
		i = __.get(t.config.apiHost);
	i && (r.eid = i);
	const o = t._getFrameworks();
	return o.length && (r.fw = o.join(",")), `${n}?${$o(r).slice(1)}`;
}
async function C_(t) {
	const e = await v_(t),
		n = Kt().gapi;
	return (
		G(n, t, "internal-error"),
		e.open(
			{
				where: document.body,
				url: b_(t),
				messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
				attributes: x_,
				dontclear: !0,
			},
			(r) =>
				new Promise(async (i, o) => {
					await r.restyle({ setHideOnLeave: !1 });
					const s = Qt(t, "network-request-failed"),
						a = Kt().setTimeout(() => {
							o(s);
						}, w_.get());
					function l() {
						Kt().clearTimeout(a), i(r);
					}
					r.ping(l).then(l, () => {
						o(s);
					});
				})
		)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const k_ = {
		location: "yes",
		resizable: "yes",
		statusbar: "yes",
		toolbar: "no",
	},
	R_ = 500,
	P_ = 600,
	T_ = "_blank",
	O_ = "http://localhost";
class Ah {
	constructor(e) {
		(this.window = e), (this.associatedEvent = null);
	}
	close() {
		if (this.window)
			try {
				this.window.close();
			} catch {}
	}
}
function I_(t, e, n, r = R_, i = P_) {
	const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
		s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
	let a = "";
	const l = Object.assign(Object.assign({}, k_), {
			width: r.toString(),
			height: i.toString(),
			top: o,
			left: s,
		}),
		u = Ze().toLowerCase();
	n && (a = ag(u) ? T_ : n), sg(u) && ((e = e || O_), (l.scrollbars = "yes"));
	const c = Object.entries(l).reduce((f, [S, E]) => `${f}${S}=${E},`, "");
	if (sx(u) && a !== "_self") return N_(e || "", a), new Ah(null);
	const d = window.open(e || "", a, c);
	G(d, t, "popup-blocked");
	try {
		d.focus();
	} catch {}
	return new Ah(d);
}
function N_(t, e) {
	const n = document.createElement("a");
	(n.href = t), (n.target = e);
	const r = document.createEvent("MouseEvent");
	r.initMouseEvent(
		"click",
		!0,
		!0,
		window,
		1,
		0,
		0,
		0,
		0,
		!1,
		!1,
		!1,
		!1,
		1,
		null
	),
		n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const D_ = "__/auth/handler",
	j_ = "emulator/auth/handler",
	L_ = encodeURIComponent("fac");
async function Mh(t, e, n, r, i, o) {
	G(t.config.authDomain, t, "auth-domain-config-required"),
		G(t.config.apiKey, t, "invalid-api-key");
	const s = {
		apiKey: t.config.apiKey,
		appName: t.name,
		authType: n,
		redirectUrl: r,
		v: Ho,
		eventId: i,
	};
	if (e instanceof Rd) {
		e.setDefaultLanguage(t.languageCode),
			(s.providerId = e.providerId || ""),
			IE(e.getCustomParameters()) ||
				(s.customParameters = JSON.stringify(e.getCustomParameters()));
		for (const [c, d] of Object.entries(o || {})) s[c] = d;
	}
	if (e instanceof qo) {
		const c = e.getScopes().filter((d) => d !== "");
		c.length > 0 && (s.scopes = c.join(","));
	}
	t.tenantId && (s.tid = t.tenantId);
	const a = s;
	for (const c of Object.keys(a)) a[c] === void 0 && delete a[c];
	const l = await t._getAppCheckToken(),
		u = l ? `#${L_}=${encodeURIComponent(l)}` : "";
	return `${A_(t)}?${$o(a).slice(1)}${u}`;
}
function A_({ config: t }) {
	return t.emulator ? xd(t, j_) : `https://${t.authDomain}/${D_}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gl = "webStorageSupport";
class M_ {
	constructor() {
		(this.eventManagers = {}),
			(this.iframes = {}),
			(this.originValidationPromises = {}),
			(this._redirectPersistence = bg),
			(this._completeRedirectFn = a_),
			(this._overrideRedirectResult = i_);
	}
	async _openPopup(e, n, r, i) {
		var o;
		gn(
			(o = this.eventManagers[e._key()]) === null || o === void 0
				? void 0
				: o.manager,
			"_initialize() not called before _openPopup()"
		);
		const s = await Mh(e, n, r, oc(), i);
		return I_(e, s, Pd());
	}
	async _openRedirect(e, n, r, i) {
		await this._originValidation(e);
		const o = await Mh(e, n, r, oc(), i);
		return Bx(o), new Promise(() => {});
	}
	_initialize(e) {
		const n = e._key();
		if (this.eventManagers[n]) {
			const { manager: i, promise: o } = this.eventManagers[n];
			return i
				? Promise.resolve(i)
				: (gn(o, "If manager is not set, promise should be"), o);
		}
		const r = this.initAndGetManager(e);
		return (
			(this.eventManagers[n] = { promise: r }),
			r.catch(() => {
				delete this.eventManagers[n];
			}),
			r
		);
	}
	async initAndGetManager(e) {
		const n = await C_(e),
			r = new u_(e);
		return (
			n.register(
				"authEvent",
				(i) => (
					G(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
					{ status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
				),
				gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
			),
			(this.eventManagers[e._key()] = { manager: r }),
			(this.iframes[e._key()] = n),
			r
		);
	}
	_isIframeWebStorageSupported(e, n) {
		this.iframes[e._key()].send(
			Gl,
			{ type: Gl },
			(i) => {
				var o;
				const s =
					(o = i == null ? void 0 : i[0]) === null || o === void 0
						? void 0
						: o[Gl];
				s !== void 0 && n(!!s), Tt(e, "internal-error");
			},
			gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
		);
	}
	_originValidation(e) {
		const n = e._key();
		return (
			this.originValidationPromises[n] ||
				(this.originValidationPromises[n] = p_(e)),
			this.originValidationPromises[n]
		);
	}
	get _shouldInitProactively() {
		return fg() || bd() || Ya();
	}
}
const F_ = M_;
var Fh = "@firebase/auth",
	Uh = "1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U_ {
	constructor(e) {
		(this.auth = e), (this.internalListeners = new Map());
	}
	getUid() {
		var e;
		return (
			this.assertAuthConfigured(),
			((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
				null
		);
	}
	async getToken(e) {
		return (
			this.assertAuthConfigured(),
			await this.auth._initializationPromise,
			this.auth.currentUser
				? { accessToken: await this.auth.currentUser.getIdToken(e) }
				: null
		);
	}
	addAuthTokenListener(e) {
		if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
		const n = this.auth.onIdTokenChanged((r) => {
			e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
		});
		this.internalListeners.set(e, n), this.updateProactiveRefresh();
	}
	removeAuthTokenListener(e) {
		this.assertAuthConfigured();
		const n = this.internalListeners.get(e);
		n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
	}
	assertAuthConfigured() {
		G(
			this.auth._initializationPromise,
			"dependent-sdk-initialized-before-auth"
		);
	}
	updateProactiveRefresh() {
		this.internalListeners.size > 0
			? this.auth._startProactiveRefresh()
			: this.auth._stopProactiveRefresh();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z_(t) {
	switch (t) {
		case "Node":
			return "node";
		case "ReactNative":
			return "rn";
		case "Worker":
			return "webworker";
		case "Cordova":
			return "cordova";
		default:
			return;
	}
}
function B_(t) {
	Po(
		new yi(
			"auth",
			(e, { options: n }) => {
				const r = e.getProvider("app").getImmediate(),
					i = e.getProvider("heartbeat"),
					o = e.getProvider("app-check-internal"),
					{ apiKey: s, authDomain: a } = r.options;
				G(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
				const l = {
						apiKey: s,
						authDomain: a,
						clientPlatform: t,
						apiHost: "identitytoolkit.googleapis.com",
						tokenApiHost: "securetoken.googleapis.com",
						apiScheme: "https",
						sdkClientVersion: hg(t),
					},
					u = new mx(r, i, o, l);
				return gx(u, n), u;
			},
			"PUBLIC"
		)
			.setInstantiationMode("EXPLICIT")
			.setInstanceCreatedCallback((e, n, r) => {
				e.getProvider("auth-internal").initialize();
			})
	),
		Po(
			new yi(
				"auth-internal",
				(e) => {
					const n = ki(e.getProvider("auth").getImmediate());
					return ((r) => new U_(r))(n);
				},
				"PRIVATE"
			).setInstantiationMode("EXPLICIT")
		),
		ri(Fh, Uh, z_(t)),
		ri(Fh, Uh, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $_ = 5 * 60,
	H_ = Vy("authIdTokenMaxAge") || $_;
let zh = null;
const V_ = (t) => async (e) => {
	const n = e && (await e.getIdTokenResult()),
		r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
	if (r && r > H_) return;
	const i = n == null ? void 0 : n.token;
	zh !== i &&
		((zh = i),
		await fetch(t, {
			method: i ? "POST" : "DELETE",
			headers: i ? { Authorization: `Bearer ${i}` } : {},
		}));
};
function W_(t = IS()) {
	const e = Ky(t, "auth");
	if (e.isInitialized()) return e.getImmediate();
	const n = yx(t, { popupRedirectResolver: F_, persistence: [Jx, Fx, bg] }),
		r = Vy("authTokenSyncURL");
	if (r) {
		const o = V_(r);
		Nx(n, o, () => o(n.currentUser)), Ix(n, (s) => o(s));
	}
	const i = EE("auth");
	return i && vx(n, `http://${i}`), n;
}
B_("Browser");
var q_ = "firebase",
	Q_ = "10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ri(q_, Q_, "app");
const K_ = {
		apiKey: "AIzaSyC_I1rN0ZK4w-XOnHh2FNv67kVDsjeHWio",
		authDomain: "mern-college-booking.firebaseapp.com",
		projectId: "mern-college-booking",
		storageBucket: "mern-college-booking.appspot.com",
		messagingSenderId: "801217605087",
		appId: "1:801217605087:web:e04e23b27e1dfa364d686a",
	},
	G_ = Gy(K_),
	Ng = O.createContext(null),
	J_ = ({ children: t }) => {
		const [e, n] = O.useState(!0),
			[r, i] = O.useState(null),
			o = W_(G_),
			s = new nn(),
			a = () => Dh(o, s),
			l = new rn(),
			u = () => Dh(o, l),
			c = (S, E) => (n(!0), Ox(o, S, E)),
			d = () => jx(o);
		O.useEffect(() => {
			const S = Dx(o, (E) => {
				console.log("currentUser -> ", E), i(E), n(!1);
			});
			return () => (console.log("unSubscribe"), S());
		}, []),
			console.log("user -> ", r);
		const f = {
			user: r,
			authLoading: e,
			googleLogin: a,
			githubLogin: u,
			logOut: d,
			signIn: c,
		};
		return h.jsx(Ng.Provider, { value: f, children: t });
	},
	Ko = () => ({ ...O.useContext(Ng) }),
	Y_ = () => {
		const [t, e] = O.useState(!1),
			n = O.useRef(null),
			{ authLoading: r, user: i, logOut: o } = Ko(),
			s = [
				{ path: "/", name: "Home" },
				{ path: "/colleges", name: "Colleges" },
				{ path: "/admission", name: "Admission" },
				{ path: "/my-college", name: "My College" },
			],
			a = h.jsx(h.Fragment, {
				children: s.map((f, S) =>
					h.jsx(
						dE,
						{
							to: f == null ? void 0 : f.path,
							className: "hover:text-gray-900",
							children: f == null ? void 0 : f.name,
						},
						S
					)
				),
			}),
			l = () => {
				o().then((f) => console.log("logout Success", f));
			},
			u =
				"text-lg p-1 transition duration-300 hover:bg-slate-50 w-full text-left",
			c = h.jsxs(h.Fragment, {
				children: [
					h.jsxs(mi, {
						className: u,
						to: "/profile",
						children: [" ", "Profile", " "],
					}),
					h.jsx("button", {
						className: u,
						onClick: () => l(),
						children: "Logout",
					}),
				],
			}),
			d = () => {
				e(!t);
			};
		return (
			console.log("User -> ", i),
			O.useEffect(() => {
				const f = (S) => {
					n.current && !n.current.contains(S.target) && e(!1);
				};
				return (
					window.addEventListener("click", f),
					() => {
						window.removeEventListener("click", f);
					}
				);
			}, []),
			h.jsx(h.Fragment, {
				children: h.jsx("header", {
					className: "text-gray-600 bg-slate-50 shadow body-font",
					children: h.jsxs("div", {
						className:
							"mc relative flex flex-wrap py-4 flex-col md:flex-row items-center",
						children: [
							h.jsxs("div", {
								className: "flex gap-1 items-center",
								children: [
									h.jsx("figure", {
										className: "w-10 h-10",
										children: h.jsx(va.LazyLoadImage, {
											className: "w-full h-full object-center",
											src: Zu,
										}),
									}),
									h.jsx("a", {
										className:
											"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
										children: h.jsx("span", {
											className: "ml-3 text-xl",
											children: "PS-Admission",
										}),
									}),
								],
							}),
							h.jsx("nav", {
								className:
									"md:ml-auto flex flex-wrap gap-3 items-center text-lg justify-center",
								children: a,
							}),
							h.jsx("div", {
								children: i
									? h.jsxs("div", {
											children: [
												h.jsx("button", {
													onClick: () => d(),
													className:
														"md:ml-3 w-12 h-12 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-full overflow-hidden hover:shadow-xl flex justify-center items-center",
													children: h.jsx(va.LazyLoadImage, {
														src: i == null ? void 0 : i.photoURL,
														className: "w-full h-full",
													}),
												}),
												h.jsx("div", {
													className: `z-10 absolute right-0 top-[calc(100%)] bg-slate-200 p-1 rounded shadow-lg transition duration-300 transform origin-top ${
														t ? "opacity-1 scale-y-100 " : "opacity-0 scale-y-0"
													}`,
													children: h.jsx("nav", {
														className:
															"flex flex-col items-start text-base justify-start min-w-[150px]",
														children: c,
													}),
												}),
											],
									  })
									: h.jsx(mi, {
											to: "/login",
											children: h.jsx("button", {
												className:
													"md:ml-3 py-3 px-4 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-md  flex justify-center items-center",
												children: "Login",
											}),
									  }),
							}),
						],
					}),
				}),
			})
		);
	},
	X_ = () =>
		h.jsx(h.Fragment, {
			children: h.jsxs("footer", {
				className: "text-gray-600 body-font",
				children: [
					h.jsx("div", {
						className: "mc py-16 mx-auto",
						children: h.jsxs("div", {
							className: "flex flex-wrap md:text-left text-center order-first",
							children: [
								h.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full mx-auto px-4",
									children: [
										h.jsx("figure", {
											className: "w-24 h-24",
											children: h.jsx(va.LazyLoadImage, {
												className: "w-full h-full object-center",
												src: Zu,
											}),
										}),
										h.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase mt-3",
											children: "PS-Admission",
										}),
									],
								}),
								h.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										h.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "CATEGORIES",
										}),
										h.jsxs("nav", {
											className: "list-none mb-10",
											children: [
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "First Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Second Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Third Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Fourth Link",
													}),
												}),
											],
										}),
									],
								}),
								h.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										h.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "CATEGORIES",
										}),
										h.jsxs("nav", {
											className: "list-none mb-10",
											children: [
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "First Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Second Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Third Link",
													}),
												}),
												h.jsx("li", {
													children: h.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Fourth Link",
													}),
												}),
											],
										}),
									],
								}),
								h.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										h.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "SUBSCRIBE",
										}),
										h.jsxs("div", {
											className:
												"flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start",
											children: [
												h.jsxs("div", {
													className:
														"relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2",
													children: [
														h.jsx("label", {
															htmlFor: "footer-field",
															className: "leading-7 text-sm text-gray-600",
															children: "Placeholder",
														}),
														h.jsx("input", {
															type: "text",
															id: "footer-field",
															name: "footer-field",
															className:
																"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
														}),
													],
												}),
												h.jsx("button", {
													className:
														"lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
													children: "Subscribe",
												}),
											],
										}),
									],
								}),
							],
						}),
					}),
					h.jsx("div", {
						className: "bg-gray-100",
						children: h.jsxs("div", {
							className:
								"mc py-6 mx-auto flex items-center sm:flex-row flex-col",
							children: [
								h.jsxs("a", {
									className:
										"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
									children: [
										h.jsx("figure", {
											className: "w-16 h-16",
											children: h.jsx(va.LazyLoadImage, {
												className: "w-full h-full object-center",
												src: Zu,
											}),
										}),
										h.jsx("span", {
											className: "ml-3 text-xl",
											children: "Ps-Admission",
										}),
									],
								}),
								h.jsxs("p", {
									className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
									children: [
										"© 2023 Ps-Admission —",
										h.jsx("a", {
											href: "https://twitter.com/knyttneve",
											rel: "noopener noreferrer",
											className: "text-gray-600 ml-1",
											target: "_blank",
											children: "@ps-admission",
										}),
									],
								}),
								h.jsxs("span", {
									className:
										"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
									children: [
										h.jsx("a", {
											className: "text-gray-500",
											children: h.jsx("svg", {
												fill: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: h.jsx("path", {
													d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
												}),
											}),
										}),
										h.jsx("a", {
											className: "ml-3 text-gray-500",
											children: h.jsx("svg", {
												fill: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: h.jsx("path", {
													d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
												}),
											}),
										}),
										h.jsx("a", {
											className: "ml-3 text-gray-500",
											children: h.jsxs("svg", {
												fill: "none",
												stroke: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: [
													h.jsx("rect", {
														width: 20,
														height: 20,
														x: 2,
														y: 2,
														rx: 5,
														ry: 5,
													}),
													h.jsx("path", {
														d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
													}),
												],
											}),
										}),
										h.jsx("a", {
											className: "ml-3 text-gray-500",
											children: h.jsxs("svg", {
												fill: "currentColor",
												stroke: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 0,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: [
													h.jsx("path", {
														stroke: "none",
														d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
													}),
													h.jsx("circle", {
														cx: 4,
														cy: 4,
														r: 2,
														stroke: "none",
													}),
												],
											}),
										}),
									],
								}),
							],
						}),
					}),
				],
			}),
		}),
	Z_ = () =>
		h.jsxs(h.Fragment, {
			children: [
				h.jsx(Y_, {}),
				h.jsxs("main", { children: [" ", h.jsx(Z1, {}), " "] }),
				h.jsx(X_, {}),
			],
		});
class Go {
	constructor() {
		(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
	}
	subscribe(e) {
		const n = { listener: e };
		return (
			this.listeners.add(n),
			this.onSubscribe(),
			() => {
				this.listeners.delete(n), this.onUnsubscribe();
			}
		);
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}
const Do = typeof window > "u" || "Deno" in window;
function St() {}
function eb(t, e) {
	return typeof t == "function" ? t(e) : t;
}
function ac(t) {
	return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Dg(t, e) {
	return Math.max(t + (e || 0) - Date.now(), 0);
}
function Yi(t, e, n) {
	return el(t)
		? typeof e == "function"
			? { ...n, queryKey: t, queryFn: e }
			: { ...e, queryKey: t }
		: t;
}
function On(t, e, n) {
	return el(t) ? [{ ...e, queryKey: t }, n] : [t || {}, e];
}
function Bh(t, e) {
	const {
		type: n = "all",
		exact: r,
		fetchStatus: i,
		predicate: o,
		queryKey: s,
		stale: a,
	} = t;
	if (el(s)) {
		if (r) {
			if (e.queryHash !== Od(s, e.options)) return !1;
		} else if (!ka(e.queryKey, s)) return !1;
	}
	if (n !== "all") {
		const l = e.isActive();
		if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
	}
	return !(
		(typeof a == "boolean" && e.isStale() !== a) ||
		(typeof i < "u" && i !== e.state.fetchStatus) ||
		(o && !o(e))
	);
}
function $h(t, e) {
	const { exact: n, fetching: r, predicate: i, mutationKey: o } = t;
	if (el(o)) {
		if (!e.options.mutationKey) return !1;
		if (n) {
			if (dr(e.options.mutationKey) !== dr(o)) return !1;
		} else if (!ka(e.options.mutationKey, o)) return !1;
	}
	return !(
		(typeof r == "boolean" && (e.state.status === "loading") !== r) ||
		(i && !i(e))
	);
}
function Od(t, e) {
	return ((e == null ? void 0 : e.queryKeyHashFn) || dr)(t);
}
function dr(t) {
	return JSON.stringify(t, (e, n) =>
		lc(n)
			? Object.keys(n)
					.sort()
					.reduce((r, i) => ((r[i] = n[i]), r), {})
			: n
	);
}
function ka(t, e) {
	return jg(t, e);
}
function jg(t, e) {
	return t === e
		? !0
		: typeof t != typeof e
		? !1
		: t && e && typeof t == "object" && typeof e == "object"
		? !Object.keys(e).some((n) => !jg(t[n], e[n]))
		: !1;
}
function Lg(t, e) {
	if (t === e) return t;
	const n = Vh(t) && Vh(e);
	if (n || (lc(t) && lc(e))) {
		const r = n ? t.length : Object.keys(t).length,
			i = n ? e : Object.keys(e),
			o = i.length,
			s = n ? [] : {};
		let a = 0;
		for (let l = 0; l < o; l++) {
			const u = n ? l : i[l];
			(s[u] = Lg(t[u], e[u])), s[u] === t[u] && a++;
		}
		return r === o && a === r ? t : s;
	}
	return e;
}
function Hh(t, e) {
	if ((t && !e) || (e && !t)) return !1;
	for (const n in t) if (t[n] !== e[n]) return !1;
	return !0;
}
function Vh(t) {
	return Array.isArray(t) && t.length === Object.keys(t).length;
}
function lc(t) {
	if (!Wh(t)) return !1;
	const e = t.constructor;
	if (typeof e > "u") return !0;
	const n = e.prototype;
	return !(!Wh(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Wh(t) {
	return Object.prototype.toString.call(t) === "[object Object]";
}
function el(t) {
	return Array.isArray(t);
}
function Ag(t) {
	return new Promise((e) => {
		setTimeout(e, t);
	});
}
function qh(t) {
	Ag(0).then(t);
}
function tb() {
	if (typeof AbortController == "function") return new AbortController();
}
function uc(t, e, n) {
	return n.isDataEqual != null && n.isDataEqual(t, e)
		? t
		: typeof n.structuralSharing == "function"
		? n.structuralSharing(t, e)
		: n.structuralSharing !== !1
		? Lg(t, e)
		: e;
}
class nb extends Go {
	constructor() {
		super(),
			(this.setup = (e) => {
				if (!Do && window.addEventListener) {
					const n = () => e();
					return (
						window.addEventListener("visibilitychange", n, !1),
						window.addEventListener("focus", n, !1),
						() => {
							window.removeEventListener("visibilitychange", n),
								window.removeEventListener("focus", n);
						}
					);
				}
			});
	}
	onSubscribe() {
		this.cleanup || this.setEventListener(this.setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			var e;
			(e = this.cleanup) == null || e.call(this), (this.cleanup = void 0);
		}
	}
	setEventListener(e) {
		var n;
		(this.setup = e),
			(n = this.cleanup) == null || n.call(this),
			(this.cleanup = e((r) => {
				typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
			}));
	}
	setFocused(e) {
		this.focused !== e && ((this.focused = e), this.onFocus());
	}
	onFocus() {
		this.listeners.forEach(({ listener: e }) => {
			e();
		});
	}
	isFocused() {
		return typeof this.focused == "boolean"
			? this.focused
			: typeof document > "u"
			? !0
			: [void 0, "visible", "prerender"].includes(document.visibilityState);
	}
}
const Ra = new nb(),
	Qh = ["online", "offline"];
class rb extends Go {
	constructor() {
		super(),
			(this.setup = (e) => {
				if (!Do && window.addEventListener) {
					const n = () => e();
					return (
						Qh.forEach((r) => {
							window.addEventListener(r, n, !1);
						}),
						() => {
							Qh.forEach((r) => {
								window.removeEventListener(r, n);
							});
						}
					);
				}
			});
	}
	onSubscribe() {
		this.cleanup || this.setEventListener(this.setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			var e;
			(e = this.cleanup) == null || e.call(this), (this.cleanup = void 0);
		}
	}
	setEventListener(e) {
		var n;
		(this.setup = e),
			(n = this.cleanup) == null || n.call(this),
			(this.cleanup = e((r) => {
				typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
			}));
	}
	setOnline(e) {
		this.online !== e && ((this.online = e), this.onOnline());
	}
	onOnline() {
		this.listeners.forEach(({ listener: e }) => {
			e();
		});
	}
	isOnline() {
		return typeof this.online == "boolean"
			? this.online
			: typeof navigator > "u" || typeof navigator.onLine > "u"
			? !0
			: navigator.onLine;
	}
}
const Pa = new rb();
function ib(t) {
	return Math.min(1e3 * 2 ** t, 3e4);
}
function tl(t) {
	return (t ?? "online") === "online" ? Pa.isOnline() : !0;
}
class Mg {
	constructor(e) {
		(this.revert = e == null ? void 0 : e.revert),
			(this.silent = e == null ? void 0 : e.silent);
	}
}
function Us(t) {
	return t instanceof Mg;
}
function Fg(t) {
	let e = !1,
		n = 0,
		r = !1,
		i,
		o,
		s;
	const a = new Promise((C, y) => {
			(o = C), (s = y);
		}),
		l = (C) => {
			r || (S(new Mg(C)), t.abort == null || t.abort());
		},
		u = () => {
			e = !0;
		},
		c = () => {
			e = !1;
		},
		d = () => !Ra.isFocused() || (t.networkMode !== "always" && !Pa.isOnline()),
		f = (C) => {
			r ||
				((r = !0),
				t.onSuccess == null || t.onSuccess(C),
				i == null || i(),
				o(C));
		},
		S = (C) => {
			r ||
				((r = !0), t.onError == null || t.onError(C), i == null || i(), s(C));
		},
		E = () =>
			new Promise((C) => {
				(i = (y) => {
					const p = r || !d();
					return p && C(y), p;
				}),
					t.onPause == null || t.onPause();
			}).then(() => {
				(i = void 0), r || t.onContinue == null || t.onContinue();
			}),
		x = () => {
			if (r) return;
			let C;
			try {
				C = t.fn();
			} catch (y) {
				C = Promise.reject(y);
			}
			Promise.resolve(C)
				.then(f)
				.catch((y) => {
					var p, w;
					if (r) return;
					const g = (p = t.retry) != null ? p : 3,
						k = (w = t.retryDelay) != null ? w : ib,
						P = typeof k == "function" ? k(n, y) : k,
						T =
							g === !0 ||
							(typeof g == "number" && n < g) ||
							(typeof g == "function" && g(n, y));
					if (e || !T) {
						S(y);
						return;
					}
					n++,
						t.onFail == null || t.onFail(n, y),
						Ag(P)
							.then(() => {
								if (d()) return E();
							})
							.then(() => {
								e ? S(y) : x();
							});
				});
		};
	return (
		tl(t.networkMode) ? x() : E().then(x),
		{
			promise: a,
			cancel: l,
			continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
			cancelRetry: u,
			continueRetry: c,
		}
	);
}
const Id = console;
function ob() {
	let t = [],
		e = 0,
		n = (c) => {
			c();
		},
		r = (c) => {
			c();
		};
	const i = (c) => {
			let d;
			e++;
			try {
				d = c();
			} finally {
				e--, e || a();
			}
			return d;
		},
		o = (c) => {
			e
				? t.push(c)
				: qh(() => {
						n(c);
				  });
		},
		s =
			(c) =>
			(...d) => {
				o(() => {
					c(...d);
				});
			},
		a = () => {
			const c = t;
			(t = []),
				c.length &&
					qh(() => {
						r(() => {
							c.forEach((d) => {
								n(d);
							});
						});
					});
		};
	return {
		batch: i,
		batchCalls: s,
		schedule: o,
		setNotifyFunction: (c) => {
			n = c;
		},
		setBatchNotifyFunction: (c) => {
			r = c;
		},
	};
}
const je = ob();
class Ug {
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(),
			ac(this.cacheTime) &&
				(this.gcTimeout = setTimeout(() => {
					this.optionalRemove();
				}, this.cacheTime));
	}
	updateCacheTime(e) {
		this.cacheTime = Math.max(
			this.cacheTime || 0,
			e ?? (Do ? 1 / 0 : 5 * 60 * 1e3)
		);
	}
	clearGcTimeout() {
		this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
	}
}
class sb extends Ug {
	constructor(e) {
		super(),
			(this.abortSignalConsumed = !1),
			(this.defaultOptions = e.defaultOptions),
			this.setOptions(e.options),
			(this.observers = []),
			(this.cache = e.cache),
			(this.logger = e.logger || Id),
			(this.queryKey = e.queryKey),
			(this.queryHash = e.queryHash),
			(this.initialState = e.state || ab(this.options)),
			(this.state = this.initialState),
			this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	setOptions(e) {
		(this.options = { ...this.defaultOptions, ...e }),
			this.updateCacheTime(this.options.cacheTime);
	}
	optionalRemove() {
		!this.observers.length &&
			this.state.fetchStatus === "idle" &&
			this.cache.remove(this);
	}
	setData(e, n) {
		const r = uc(this.state.data, e, this.options);
		return (
			this.dispatch({
				data: r,
				type: "success",
				dataUpdatedAt: n == null ? void 0 : n.updatedAt,
				manual: n == null ? void 0 : n.manual,
			}),
			r
		);
	}
	setState(e, n) {
		this.dispatch({ type: "setState", state: e, setStateOptions: n });
	}
	cancel(e) {
		var n;
		const r = this.promise;
		return (
			(n = this.retryer) == null || n.cancel(e),
			r ? r.then(St).catch(St) : Promise.resolve()
		);
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	reset() {
		this.destroy(), this.setState(this.initialState);
	}
	isActive() {
		return this.observers.some((e) => e.options.enabled !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 && !this.isActive();
	}
	isStale() {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			this.observers.some((e) => e.getCurrentResult().isStale)
		);
	}
	isStaleByTime(e = 0) {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			!Dg(this.state.dataUpdatedAt, e)
		);
	}
	onFocus() {
		var e;
		const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
		n && n.refetch({ cancelRefetch: !1 }),
			(e = this.retryer) == null || e.continue();
	}
	onOnline() {
		var e;
		const n = this.observers.find((r) => r.shouldFetchOnReconnect());
		n && n.refetch({ cancelRefetch: !1 }),
			(e = this.retryer) == null || e.continue();
	}
	addObserver(e) {
		this.observers.includes(e) ||
			(this.observers.push(e),
			this.clearGcTimeout(),
			this.cache.notify({ type: "observerAdded", query: this, observer: e }));
	}
	removeObserver(e) {
		this.observers.includes(e) &&
			((this.observers = this.observers.filter((n) => n !== e)),
			this.observers.length ||
				(this.retryer &&
					(this.abortSignalConsumed
						? this.retryer.cancel({ revert: !0 })
						: this.retryer.cancelRetry()),
				this.scheduleGc()),
			this.cache.notify({ type: "observerRemoved", query: this, observer: e }));
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		this.state.isInvalidated || this.dispatch({ type: "invalidate" });
	}
	fetch(e, n) {
		var r, i;
		if (this.state.fetchStatus !== "idle") {
			if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
				this.cancel({ silent: !0 });
			else if (this.promise) {
				var o;
				return (o = this.retryer) == null || o.continueRetry(), this.promise;
			}
		}
		if ((e && this.setOptions(e), !this.options.queryFn)) {
			const S = this.observers.find((E) => E.options.queryFn);
			S && this.setOptions(S.options);
		}
		Array.isArray(this.options.queryKey);
		const s = tb(),
			a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
			l = (S) => {
				Object.defineProperty(S, "signal", {
					enumerable: !0,
					get: () => {
						if (s) return (this.abortSignalConsumed = !0), s.signal;
					},
				});
			};
		l(a);
		const u = () =>
				this.options.queryFn
					? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
					: Promise.reject(
							"Missing queryFn for queryKey '" + this.options.queryHash + "'"
					  ),
			c = {
				fetchOptions: n,
				options: this.options,
				queryKey: this.queryKey,
				state: this.state,
				fetchFn: u,
			};
		if (
			(l(c),
			(r = this.options.behavior) == null || r.onFetch(c),
			(this.revertState = this.state),
			this.state.fetchStatus === "idle" ||
				this.state.fetchMeta !==
					((i = c.fetchOptions) == null ? void 0 : i.meta))
		) {
			var d;
			this.dispatch({
				type: "fetch",
				meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
			});
		}
		const f = (S) => {
			if (
				((Us(S) && S.silent) || this.dispatch({ type: "error", error: S }),
				!Us(S))
			) {
				var E, x, C, y;
				(E = (x = this.cache.config).onError) == null || E.call(x, S, this),
					(C = (y = this.cache.config).onSettled) == null ||
						C.call(y, this.state.data, S, this);
			}
			this.isFetchingOptimistic || this.scheduleGc(),
				(this.isFetchingOptimistic = !1);
		};
		return (
			(this.retryer = Fg({
				fn: c.fetchFn,
				abort: s == null ? void 0 : s.abort.bind(s),
				onSuccess: (S) => {
					var E, x, C, y;
					if (typeof S > "u") {
						f(new Error(this.queryHash + " data is undefined"));
						return;
					}
					this.setData(S),
						(E = (x = this.cache.config).onSuccess) == null ||
							E.call(x, S, this),
						(C = (y = this.cache.config).onSettled) == null ||
							C.call(y, S, this.state.error, this),
						this.isFetchingOptimistic || this.scheduleGc(),
						(this.isFetchingOptimistic = !1);
				},
				onError: f,
				onFail: (S, E) => {
					this.dispatch({ type: "failed", failureCount: S, error: E });
				},
				onPause: () => {
					this.dispatch({ type: "pause" });
				},
				onContinue: () => {
					this.dispatch({ type: "continue" });
				},
				retry: c.options.retry,
				retryDelay: c.options.retryDelay,
				networkMode: c.options.networkMode,
			})),
			(this.promise = this.retryer.promise),
			this.promise
		);
	}
	dispatch(e) {
		const n = (r) => {
			var i, o;
			switch (e.type) {
				case "failed":
					return {
						...r,
						fetchFailureCount: e.failureCount,
						fetchFailureReason: e.error,
					};
				case "pause":
					return { ...r, fetchStatus: "paused" };
				case "continue":
					return { ...r, fetchStatus: "fetching" };
				case "fetch":
					return {
						...r,
						fetchFailureCount: 0,
						fetchFailureReason: null,
						fetchMeta: (i = e.meta) != null ? i : null,
						fetchStatus: tl(this.options.networkMode) ? "fetching" : "paused",
						...(!r.dataUpdatedAt && { error: null, status: "loading" }),
					};
				case "success":
					return {
						...r,
						data: e.data,
						dataUpdateCount: r.dataUpdateCount + 1,
						dataUpdatedAt: (o = e.dataUpdatedAt) != null ? o : Date.now(),
						error: null,
						isInvalidated: !1,
						status: "success",
						...(!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null,
						}),
					};
				case "error":
					const s = e.error;
					return Us(s) && s.revert && this.revertState
						? { ...this.revertState }
						: {
								...r,
								error: s,
								errorUpdateCount: r.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: r.fetchFailureCount + 1,
								fetchFailureReason: s,
								fetchStatus: "idle",
								status: "error",
						  };
				case "invalidate":
					return { ...r, isInvalidated: !0 };
				case "setState":
					return { ...r, ...e.state };
			}
		};
		(this.state = n(this.state)),
			je.batch(() => {
				this.observers.forEach((r) => {
					r.onQueryUpdate(e);
				}),
					this.cache.notify({ query: this, type: "updated", action: e });
			});
	}
}
function ab(t) {
	const e =
			typeof t.initialData == "function" ? t.initialData() : t.initialData,
		n = typeof e < "u",
		r = n
			? typeof t.initialDataUpdatedAt == "function"
				? t.initialDataUpdatedAt()
				: t.initialDataUpdatedAt
			: 0;
	return {
		data: e,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "loading",
		fetchStatus: "idle",
	};
}
class lb extends Go {
	constructor(e) {
		super(),
			(this.config = e || {}),
			(this.queries = []),
			(this.queriesMap = {});
	}
	build(e, n, r) {
		var i;
		const o = n.queryKey,
			s = (i = n.queryHash) != null ? i : Od(o, n);
		let a = this.get(s);
		return (
			a ||
				((a = new sb({
					cache: this,
					logger: e.getLogger(),
					queryKey: o,
					queryHash: s,
					options: e.defaultQueryOptions(n),
					state: r,
					defaultOptions: e.getQueryDefaults(o),
				})),
				this.add(a)),
			a
		);
	}
	add(e) {
		this.queriesMap[e.queryHash] ||
			((this.queriesMap[e.queryHash] = e),
			this.queries.push(e),
			this.notify({ type: "added", query: e }));
	}
	remove(e) {
		const n = this.queriesMap[e.queryHash];
		n &&
			(e.destroy(),
			(this.queries = this.queries.filter((r) => r !== e)),
			n === e && delete this.queriesMap[e.queryHash],
			this.notify({ type: "removed", query: e }));
	}
	clear() {
		je.batch(() => {
			this.queries.forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.queriesMap[e];
	}
	getAll() {
		return this.queries;
	}
	find(e, n) {
		const [r] = On(e, n);
		return (
			typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Bh(r, i))
		);
	}
	findAll(e, n) {
		const [r] = On(e, n);
		return Object.keys(r).length > 0
			? this.queries.filter((i) => Bh(r, i))
			: this.queries;
	}
	notify(e) {
		je.batch(() => {
			this.listeners.forEach(({ listener: n }) => {
				n(e);
			});
		});
	}
	onFocus() {
		je.batch(() => {
			this.queries.forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		je.batch(() => {
			this.queries.forEach((e) => {
				e.onOnline();
			});
		});
	}
}
class ub extends Ug {
	constructor(e) {
		super(),
			(this.defaultOptions = e.defaultOptions),
			(this.mutationId = e.mutationId),
			(this.mutationCache = e.mutationCache),
			(this.logger = e.logger || Id),
			(this.observers = []),
			(this.state = e.state || cb()),
			this.setOptions(e.options),
			this.scheduleGc();
	}
	setOptions(e) {
		(this.options = { ...this.defaultOptions, ...e }),
			this.updateCacheTime(this.options.cacheTime);
	}
	get meta() {
		return this.options.meta;
	}
	setState(e) {
		this.dispatch({ type: "setState", state: e });
	}
	addObserver(e) {
		this.observers.includes(e) ||
			(this.observers.push(e),
			this.clearGcTimeout(),
			this.mutationCache.notify({
				type: "observerAdded",
				mutation: this,
				observer: e,
			}));
	}
	removeObserver(e) {
		(this.observers = this.observers.filter((n) => n !== e)),
			this.scheduleGc(),
			this.mutationCache.notify({
				type: "observerRemoved",
				mutation: this,
				observer: e,
			});
	}
	optionalRemove() {
		this.observers.length ||
			(this.state.status === "loading"
				? this.scheduleGc()
				: this.mutationCache.remove(this));
	}
	continue() {
		var e, n;
		return (e = (n = this.retryer) == null ? void 0 : n.continue()) != null
			? e
			: this.execute();
	}
	async execute() {
		const e = () => {
				var T;
				return (
					(this.retryer = Fg({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(this.state.variables)
								: Promise.reject("No mutationFn found"),
						onFail: (R, B) => {
							this.dispatch({ type: "failed", failureCount: R, error: B });
						},
						onPause: () => {
							this.dispatch({ type: "pause" });
						},
						onContinue: () => {
							this.dispatch({ type: "continue" });
						},
						retry: (T = this.options.retry) != null ? T : 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
					})),
					this.retryer.promise
				);
			},
			n = this.state.status === "loading";
		try {
			var r, i, o, s, a, l, u, c;
			if (!n) {
				var d, f, S, E;
				this.dispatch({ type: "loading", variables: this.options.variables }),
					await ((d = (f = this.mutationCache.config).onMutate) == null
						? void 0
						: d.call(f, this.state.variables, this));
				const R = await ((S = (E = this.options).onMutate) == null
					? void 0
					: S.call(E, this.state.variables));
				R !== this.state.context &&
					this.dispatch({
						type: "loading",
						context: R,
						variables: this.state.variables,
					});
			}
			const T = await e();
			return (
				await ((r = (i = this.mutationCache.config).onSuccess) == null
					? void 0
					: r.call(i, T, this.state.variables, this.state.context, this)),
				await ((o = (s = this.options).onSuccess) == null
					? void 0
					: o.call(s, T, this.state.variables, this.state.context)),
				await ((a = (l = this.mutationCache.config).onSettled) == null
					? void 0
					: a.call(l, T, null, this.state.variables, this.state.context, this)),
				await ((u = (c = this.options).onSettled) == null
					? void 0
					: u.call(c, T, null, this.state.variables, this.state.context)),
				this.dispatch({ type: "success", data: T }),
				T
			);
		} catch (T) {
			try {
				var x, C, y, p, w, g, k, P;
				throw (
					(await ((x = (C = this.mutationCache.config).onError) == null
						? void 0
						: x.call(C, T, this.state.variables, this.state.context, this)),
					await ((y = (p = this.options).onError) == null
						? void 0
						: y.call(p, T, this.state.variables, this.state.context)),
					await ((w = (g = this.mutationCache.config).onSettled) == null
						? void 0
						: w.call(
								g,
								void 0,
								T,
								this.state.variables,
								this.state.context,
								this
						  )),
					await ((k = (P = this.options).onSettled) == null
						? void 0
						: k.call(P, void 0, T, this.state.variables, this.state.context)),
					T)
				);
			} finally {
				this.dispatch({ type: "error", error: T });
			}
		}
	}
	dispatch(e) {
		const n = (r) => {
			switch (e.type) {
				case "failed":
					return { ...r, failureCount: e.failureCount, failureReason: e.error };
				case "pause":
					return { ...r, isPaused: !0 };
				case "continue":
					return { ...r, isPaused: !1 };
				case "loading":
					return {
						...r,
						context: e.context,
						data: void 0,
						failureCount: 0,
						failureReason: null,
						error: null,
						isPaused: !tl(this.options.networkMode),
						status: "loading",
						variables: e.variables,
					};
				case "success":
					return {
						...r,
						data: e.data,
						failureCount: 0,
						failureReason: null,
						error: null,
						status: "success",
						isPaused: !1,
					};
				case "error":
					return {
						...r,
						data: void 0,
						error: e.error,
						failureCount: r.failureCount + 1,
						failureReason: e.error,
						isPaused: !1,
						status: "error",
					};
				case "setState":
					return { ...r, ...e.state };
			}
		};
		(this.state = n(this.state)),
			je.batch(() => {
				this.observers.forEach((r) => {
					r.onMutationUpdate(e);
				}),
					this.mutationCache.notify({
						mutation: this,
						type: "updated",
						action: e,
					});
			});
	}
}
function cb() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
	};
}
class db extends Go {
	constructor(e) {
		super(),
			(this.config = e || {}),
			(this.mutations = []),
			(this.mutationId = 0);
	}
	build(e, n, r) {
		const i = new ub({
			mutationCache: this,
			logger: e.getLogger(),
			mutationId: ++this.mutationId,
			options: e.defaultMutationOptions(n),
			state: r,
			defaultOptions: n.mutationKey
				? e.getMutationDefaults(n.mutationKey)
				: void 0,
		});
		return this.add(i), i;
	}
	add(e) {
		this.mutations.push(e), this.notify({ type: "added", mutation: e });
	}
	remove(e) {
		(this.mutations = this.mutations.filter((n) => n !== e)),
			this.notify({ type: "removed", mutation: e });
	}
	clear() {
		je.batch(() => {
			this.mutations.forEach((e) => {
				this.remove(e);
			});
		});
	}
	getAll() {
		return this.mutations;
	}
	find(e) {
		return (
			typeof e.exact > "u" && (e.exact = !0),
			this.mutations.find((n) => $h(e, n))
		);
	}
	findAll(e) {
		return this.mutations.filter((n) => $h(e, n));
	}
	notify(e) {
		je.batch(() => {
			this.listeners.forEach(({ listener: n }) => {
				n(e);
			});
		});
	}
	resumePausedMutations() {
		var e;
		return (
			(this.resuming = ((e = this.resuming) != null ? e : Promise.resolve())
				.then(() => {
					const n = this.mutations.filter((r) => r.state.isPaused);
					return je.batch(() =>
						n.reduce(
							(r, i) => r.then(() => i.continue().catch(St)),
							Promise.resolve()
						)
					);
				})
				.then(() => {
					this.resuming = void 0;
				})),
			this.resuming
		);
	}
}
function fb() {
	return {
		onFetch: (t) => {
			t.fetchFn = () => {
				var e, n, r, i, o, s;
				const a =
						(e = t.fetchOptions) == null || (n = e.meta) == null
							? void 0
							: n.refetchPage,
					l =
						(r = t.fetchOptions) == null || (i = r.meta) == null
							? void 0
							: i.fetchMore,
					u = l == null ? void 0 : l.pageParam,
					c = (l == null ? void 0 : l.direction) === "forward",
					d = (l == null ? void 0 : l.direction) === "backward",
					f = ((o = t.state.data) == null ? void 0 : o.pages) || [],
					S = ((s = t.state.data) == null ? void 0 : s.pageParams) || [];
				let E = S,
					x = !1;
				const C = (P) => {
						Object.defineProperty(P, "signal", {
							enumerable: !0,
							get: () => {
								var T;
								if ((T = t.signal) != null && T.aborted) x = !0;
								else {
									var R;
									(R = t.signal) == null ||
										R.addEventListener("abort", () => {
											x = !0;
										});
								}
								return t.signal;
							},
						});
					},
					y =
						t.options.queryFn ||
						(() =>
							Promise.reject(
								"Missing queryFn for queryKey '" + t.options.queryHash + "'"
							)),
					p = (P, T, R, B) => (
						(E = B ? [T, ...E] : [...E, T]), B ? [R, ...P] : [...P, R]
					),
					w = (P, T, R, B) => {
						if (x) return Promise.reject("Cancelled");
						if (typeof R > "u" && !T && P.length) return Promise.resolve(P);
						const H = {
							queryKey: t.queryKey,
							pageParam: R,
							meta: t.options.meta,
						};
						C(H);
						const Z = y(H);
						return Promise.resolve(Z).then((pe) => p(P, R, pe, B));
					};
				let g;
				if (!f.length) g = w([]);
				else if (c) {
					const P = typeof u < "u",
						T = P ? u : Kh(t.options, f);
					g = w(f, P, T);
				} else if (d) {
					const P = typeof u < "u",
						T = P ? u : hb(t.options, f);
					g = w(f, P, T, !0);
				} else {
					E = [];
					const P = typeof t.options.getNextPageParam > "u";
					g = (a && f[0] ? a(f[0], 0, f) : !0)
						? w([], P, S[0])
						: Promise.resolve(p([], S[0], f[0]));
					for (let R = 1; R < f.length; R++)
						g = g.then((B) => {
							if (a && f[R] ? a(f[R], R, f) : !0) {
								const Z = P ? S[R] : Kh(t.options, B);
								return w(B, P, Z);
							}
							return Promise.resolve(p(B, S[R], f[R]));
						});
				}
				return g.then((P) => ({ pages: P, pageParams: E }));
			};
		},
	};
}
function Kh(t, e) {
	return t.getNextPageParam == null
		? void 0
		: t.getNextPageParam(e[e.length - 1], e);
}
function hb(t, e) {
	return t.getPreviousPageParam == null
		? void 0
		: t.getPreviousPageParam(e[0], e);
}
class pb {
	constructor(e = {}) {
		(this.queryCache = e.queryCache || new lb()),
			(this.mutationCache = e.mutationCache || new db()),
			(this.logger = e.logger || Id),
			(this.defaultOptions = e.defaultOptions || {}),
			(this.queryDefaults = []),
			(this.mutationDefaults = []),
			(this.mountCount = 0);
	}
	mount() {
		this.mountCount++,
			this.mountCount === 1 &&
				((this.unsubscribeFocus = Ra.subscribe(() => {
					Ra.isFocused() &&
						(this.resumePausedMutations(), this.queryCache.onFocus());
				})),
				(this.unsubscribeOnline = Pa.subscribe(() => {
					Pa.isOnline() &&
						(this.resumePausedMutations(), this.queryCache.onOnline());
				})));
	}
	unmount() {
		var e, n;
		this.mountCount--,
			this.mountCount === 0 &&
				((e = this.unsubscribeFocus) == null || e.call(this),
				(this.unsubscribeFocus = void 0),
				(n = this.unsubscribeOnline) == null || n.call(this),
				(this.unsubscribeOnline = void 0));
	}
	isFetching(e, n) {
		const [r] = On(e, n);
		return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
	}
	isMutating(e) {
		return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
	}
	getQueryData(e, n) {
		var r;
		return (r = this.queryCache.find(e, n)) == null ? void 0 : r.state.data;
	}
	ensureQueryData(e, n, r) {
		const i = Yi(e, n, r),
			o = this.getQueryData(i.queryKey);
		return o ? Promise.resolve(o) : this.fetchQuery(i);
	}
	getQueriesData(e) {
		return this.getQueryCache()
			.findAll(e)
			.map(({ queryKey: n, state: r }) => {
				const i = r.data;
				return [n, i];
			});
	}
	setQueryData(e, n, r) {
		const i = this.queryCache.find(e),
			o = i == null ? void 0 : i.state.data,
			s = eb(n, o);
		if (typeof s > "u") return;
		const a = Yi(e),
			l = this.defaultQueryOptions(a);
		return this.queryCache.build(this, l).setData(s, { ...r, manual: !0 });
	}
	setQueriesData(e, n, r) {
		return je.batch(() =>
			this.getQueryCache()
				.findAll(e)
				.map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
		);
	}
	getQueryState(e, n) {
		var r;
		return (r = this.queryCache.find(e, n)) == null ? void 0 : r.state;
	}
	removeQueries(e, n) {
		const [r] = On(e, n),
			i = this.queryCache;
		je.batch(() => {
			i.findAll(r).forEach((o) => {
				i.remove(o);
			});
		});
	}
	resetQueries(e, n, r) {
		const [i, o] = On(e, n, r),
			s = this.queryCache,
			a = { type: "active", ...i };
		return je.batch(
			() => (
				s.findAll(i).forEach((l) => {
					l.reset();
				}),
				this.refetchQueries(a, o)
			)
		);
	}
	cancelQueries(e, n, r) {
		const [i, o = {}] = On(e, n, r);
		typeof o.revert > "u" && (o.revert = !0);
		const s = je.batch(() =>
			this.queryCache.findAll(i).map((a) => a.cancel(o))
		);
		return Promise.all(s).then(St).catch(St);
	}
	invalidateQueries(e, n, r) {
		const [i, o] = On(e, n, r);
		return je.batch(() => {
			var s, a;
			if (
				(this.queryCache.findAll(i).forEach((u) => {
					u.invalidate();
				}),
				i.refetchType === "none")
			)
				return Promise.resolve();
			const l = {
				...i,
				type:
					(s = (a = i.refetchType) != null ? a : i.type) != null ? s : "active",
			};
			return this.refetchQueries(l, o);
		});
	}
	refetchQueries(e, n, r) {
		const [i, o] = On(e, n, r),
			s = je.batch(() =>
				this.queryCache
					.findAll(i)
					.filter((l) => !l.isDisabled())
					.map((l) => {
						var u;
						return l.fetch(void 0, {
							...o,
							cancelRefetch:
								(u = o == null ? void 0 : o.cancelRefetch) != null ? u : !0,
							meta: { refetchPage: i.refetchPage },
						});
					})
			);
		let a = Promise.all(s).then(St);
		return (o != null && o.throwOnError) || (a = a.catch(St)), a;
	}
	fetchQuery(e, n, r) {
		const i = Yi(e, n, r),
			o = this.defaultQueryOptions(i);
		typeof o.retry > "u" && (o.retry = !1);
		const s = this.queryCache.build(this, o);
		return s.isStaleByTime(o.staleTime)
			? s.fetch(o)
			: Promise.resolve(s.state.data);
	}
	prefetchQuery(e, n, r) {
		return this.fetchQuery(e, n, r).then(St).catch(St);
	}
	fetchInfiniteQuery(e, n, r) {
		const i = Yi(e, n, r);
		return (i.behavior = fb()), this.fetchQuery(i);
	}
	prefetchInfiniteQuery(e, n, r) {
		return this.fetchInfiniteQuery(e, n, r).then(St).catch(St);
	}
	resumePausedMutations() {
		return this.mutationCache.resumePausedMutations();
	}
	getQueryCache() {
		return this.queryCache;
	}
	getMutationCache() {
		return this.mutationCache;
	}
	getLogger() {
		return this.logger;
	}
	getDefaultOptions() {
		return this.defaultOptions;
	}
	setDefaultOptions(e) {
		this.defaultOptions = e;
	}
	setQueryDefaults(e, n) {
		const r = this.queryDefaults.find((i) => dr(e) === dr(i.queryKey));
		r
			? (r.defaultOptions = n)
			: this.queryDefaults.push({ queryKey: e, defaultOptions: n });
	}
	getQueryDefaults(e) {
		if (!e) return;
		const n = this.queryDefaults.find((r) => ka(e, r.queryKey));
		return n == null ? void 0 : n.defaultOptions;
	}
	setMutationDefaults(e, n) {
		const r = this.mutationDefaults.find((i) => dr(e) === dr(i.mutationKey));
		r
			? (r.defaultOptions = n)
			: this.mutationDefaults.push({ mutationKey: e, defaultOptions: n });
	}
	getMutationDefaults(e) {
		if (!e) return;
		const n = this.mutationDefaults.find((r) => ka(e, r.mutationKey));
		return n == null ? void 0 : n.defaultOptions;
	}
	defaultQueryOptions(e) {
		if (e != null && e._defaulted) return e;
		const n = {
			...this.defaultOptions.queries,
			...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
			...e,
			_defaulted: !0,
		};
		return (
			!n.queryHash && n.queryKey && (n.queryHash = Od(n.queryKey, n)),
			typeof n.refetchOnReconnect > "u" &&
				(n.refetchOnReconnect = n.networkMode !== "always"),
			typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
			n
		);
	}
	defaultMutationOptions(e) {
		return e != null && e._defaulted
			? e
			: {
					...this.defaultOptions.mutations,
					...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
					...e,
					_defaulted: !0,
			  };
	}
	clear() {
		this.queryCache.clear(), this.mutationCache.clear();
	}
}
class mb extends Go {
	constructor(e, n) {
		super(),
			(this.client = e),
			(this.options = n),
			(this.trackedProps = new Set()),
			(this.selectError = null),
			this.bindMethods(),
			this.setOptions(n);
	}
	bindMethods() {
		(this.remove = this.remove.bind(this)),
			(this.refetch = this.refetch.bind(this));
	}
	onSubscribe() {
		this.listeners.size === 1 &&
			(this.currentQuery.addObserver(this),
			Gh(this.currentQuery, this.options) && this.executeFetch(),
			this.updateTimers());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return cc(this.currentQuery, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return cc(
			this.currentQuery,
			this.options,
			this.options.refetchOnWindowFocus
		);
	}
	destroy() {
		(this.listeners = new Set()),
			this.clearStaleTimeout(),
			this.clearRefetchInterval(),
			this.currentQuery.removeObserver(this);
	}
	setOptions(e, n) {
		const r = this.options,
			i = this.currentQuery;
		if (
			((this.options = this.client.defaultQueryOptions(e)),
			Hh(r, this.options) ||
				this.client.getQueryCache().notify({
					type: "observerOptionsUpdated",
					query: this.currentQuery,
					observer: this,
				}),
			typeof this.options.enabled < "u" &&
				typeof this.options.enabled != "boolean")
		)
			throw new Error("Expected enabled to be a boolean");
		this.options.queryKey || (this.options.queryKey = r.queryKey),
			this.updateQuery();
		const o = this.hasListeners();
		o && Jh(this.currentQuery, i, this.options, r) && this.executeFetch(),
			this.updateResult(n),
			o &&
				(this.currentQuery !== i ||
					this.options.enabled !== r.enabled ||
					this.options.staleTime !== r.staleTime) &&
				this.updateStaleTimeout();
		const s = this.computeRefetchInterval();
		o &&
			(this.currentQuery !== i ||
				this.options.enabled !== r.enabled ||
				s !== this.currentRefetchInterval) &&
			this.updateRefetchInterval(s);
	}
	getOptimisticResult(e) {
		const n = this.client.getQueryCache().build(this.client, e),
			r = this.createResult(n, e);
		return (
			gb(this, r, e) &&
				((this.currentResult = r),
				(this.currentResultOptions = this.options),
				(this.currentResultState = this.currentQuery.state)),
			r
		);
	}
	getCurrentResult() {
		return this.currentResult;
	}
	trackResult(e) {
		const n = {};
		return (
			Object.keys(e).forEach((r) => {
				Object.defineProperty(n, r, {
					configurable: !1,
					enumerable: !0,
					get: () => (this.trackedProps.add(r), e[r]),
				});
			}),
			n
		);
	}
	getCurrentQuery() {
		return this.currentQuery;
	}
	remove() {
		this.client.getQueryCache().remove(this.currentQuery);
	}
	refetch({ refetchPage: e, ...n } = {}) {
		return this.fetch({ ...n, meta: { refetchPage: e } });
	}
	fetchOptimistic(e) {
		const n = this.client.defaultQueryOptions(e),
			r = this.client.getQueryCache().build(this.client, n);
		return (
			(r.isFetchingOptimistic = !0),
			r.fetch().then(() => this.createResult(r, n))
		);
	}
	fetch(e) {
		var n;
		return this.executeFetch({
			...e,
			cancelRefetch: (n = e.cancelRefetch) != null ? n : !0,
		}).then(() => (this.updateResult(), this.currentResult));
	}
	executeFetch(e) {
		this.updateQuery();
		let n = this.currentQuery.fetch(this.options, e);
		return (e != null && e.throwOnError) || (n = n.catch(St)), n;
	}
	updateStaleTimeout() {
		if (
			(this.clearStaleTimeout(),
			Do || this.currentResult.isStale || !ac(this.options.staleTime))
		)
			return;
		const n = Dg(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
		this.staleTimeoutId = setTimeout(() => {
			this.currentResult.isStale || this.updateResult();
		}, n);
	}
	computeRefetchInterval() {
		var e;
		return typeof this.options.refetchInterval == "function"
			? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
			: (e = this.options.refetchInterval) != null
			? e
			: !1;
	}
	updateRefetchInterval(e) {
		this.clearRefetchInterval(),
			(this.currentRefetchInterval = e),
			!(
				Do ||
				this.options.enabled === !1 ||
				!ac(this.currentRefetchInterval) ||
				this.currentRefetchInterval === 0
			) &&
				(this.refetchIntervalId = setInterval(() => {
					(this.options.refetchIntervalInBackground || Ra.isFocused()) &&
						this.executeFetch();
				}, this.currentRefetchInterval));
	}
	updateTimers() {
		this.updateStaleTimeout(),
			this.updateRefetchInterval(this.computeRefetchInterval());
	}
	clearStaleTimeout() {
		this.staleTimeoutId &&
			(clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
	}
	clearRefetchInterval() {
		this.refetchIntervalId &&
			(clearInterval(this.refetchIntervalId),
			(this.refetchIntervalId = void 0));
	}
	createResult(e, n) {
		const r = this.currentQuery,
			i = this.options,
			o = this.currentResult,
			s = this.currentResultState,
			a = this.currentResultOptions,
			l = e !== r,
			u = l ? e.state : this.currentQueryInitialState,
			c = l ? this.currentResult : this.previousQueryResult,
			{ state: d } = e;
		let {
				dataUpdatedAt: f,
				error: S,
				errorUpdatedAt: E,
				fetchStatus: x,
				status: C,
			} = d,
			y = !1,
			p = !1,
			w;
		if (n._optimisticResults) {
			const R = this.hasListeners(),
				B = !R && Gh(e, n),
				H = R && Jh(e, r, n, i);
			(B || H) &&
				((x = tl(e.options.networkMode) ? "fetching" : "paused"),
				f || (C = "loading")),
				n._optimisticResults === "isRestoring" && (x = "idle");
		}
		if (
			n.keepPreviousData &&
			!d.dataUpdatedAt &&
			c != null &&
			c.isSuccess &&
			C !== "error"
		)
			(w = c.data), (f = c.dataUpdatedAt), (C = c.status), (y = !0);
		else if (n.select && typeof d.data < "u")
			if (
				o &&
				d.data === (s == null ? void 0 : s.data) &&
				n.select === this.selectFn
			)
				w = this.selectResult;
			else
				try {
					(this.selectFn = n.select),
						(w = n.select(d.data)),
						(w = uc(o == null ? void 0 : o.data, w, n)),
						(this.selectResult = w),
						(this.selectError = null);
				} catch (R) {
					this.selectError = R;
				}
		else w = d.data;
		if (typeof n.placeholderData < "u" && typeof w > "u" && C === "loading") {
			let R;
			if (
				o != null &&
				o.isPlaceholderData &&
				n.placeholderData === (a == null ? void 0 : a.placeholderData)
			)
				R = o.data;
			else if (
				((R =
					typeof n.placeholderData == "function"
						? n.placeholderData()
						: n.placeholderData),
				n.select && typeof R < "u")
			)
				try {
					(R = n.select(R)), (this.selectError = null);
				} catch (B) {
					this.selectError = B;
				}
			typeof R < "u" &&
				((C = "success"),
				(w = uc(o == null ? void 0 : o.data, R, n)),
				(p = !0));
		}
		this.selectError &&
			((S = this.selectError),
			(w = this.selectResult),
			(E = Date.now()),
			(C = "error"));
		const g = x === "fetching",
			k = C === "loading",
			P = C === "error";
		return {
			status: C,
			fetchStatus: x,
			isLoading: k,
			isSuccess: C === "success",
			isError: P,
			isInitialLoading: k && g,
			data: w,
			dataUpdatedAt: f,
			error: S,
			errorUpdatedAt: E,
			failureCount: d.fetchFailureCount,
			failureReason: d.fetchFailureReason,
			errorUpdateCount: d.errorUpdateCount,
			isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
			isFetchedAfterMount:
				d.dataUpdateCount > u.dataUpdateCount ||
				d.errorUpdateCount > u.errorUpdateCount,
			isFetching: g,
			isRefetching: g && !k,
			isLoadingError: P && d.dataUpdatedAt === 0,
			isPaused: x === "paused",
			isPlaceholderData: p,
			isPreviousData: y,
			isRefetchError: P && d.dataUpdatedAt !== 0,
			isStale: Nd(e, n),
			refetch: this.refetch,
			remove: this.remove,
		};
	}
	updateResult(e) {
		const n = this.currentResult,
			r = this.createResult(this.currentQuery, this.options);
		if (
			((this.currentResultState = this.currentQuery.state),
			(this.currentResultOptions = this.options),
			Hh(r, n))
		)
			return;
		this.currentResult = r;
		const i = { cache: !0 },
			o = () => {
				if (!n) return !0;
				const { notifyOnChangeProps: s } = this.options,
					a = typeof s == "function" ? s() : s;
				if (a === "all" || (!a && !this.trackedProps.size)) return !0;
				const l = new Set(a ?? this.trackedProps);
				return (
					this.options.useErrorBoundary && l.add("error"),
					Object.keys(this.currentResult).some((u) => {
						const c = u;
						return this.currentResult[c] !== n[c] && l.has(c);
					})
				);
			};
		(e == null ? void 0 : e.listeners) !== !1 && o() && (i.listeners = !0),
			this.notify({ ...i, ...e });
	}
	updateQuery() {
		const e = this.client.getQueryCache().build(this.client, this.options);
		if (e === this.currentQuery) return;
		const n = this.currentQuery;
		(this.currentQuery = e),
			(this.currentQueryInitialState = e.state),
			(this.previousQueryResult = this.currentResult),
			this.hasListeners() &&
				(n == null || n.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate(e) {
		const n = {};
		e.type === "success"
			? (n.onSuccess = !e.manual)
			: e.type === "error" && !Us(e.error) && (n.onError = !0),
			this.updateResult(n),
			this.hasListeners() && this.updateTimers();
	}
	notify(e) {
		je.batch(() => {
			if (e.onSuccess) {
				var n, r, i, o;
				(n = (r = this.options).onSuccess) == null ||
					n.call(r, this.currentResult.data),
					(i = (o = this.options).onSettled) == null ||
						i.call(o, this.currentResult.data, null);
			} else if (e.onError) {
				var s, a, l, u;
				(s = (a = this.options).onError) == null ||
					s.call(a, this.currentResult.error),
					(l = (u = this.options).onSettled) == null ||
						l.call(u, void 0, this.currentResult.error);
			}
			e.listeners &&
				this.listeners.forEach(({ listener: c }) => {
					c(this.currentResult);
				}),
				e.cache &&
					this.client.getQueryCache().notify({
						query: this.currentQuery,
						type: "observerResultsUpdated",
					});
		});
	}
}
function yb(t, e) {
	return (
		e.enabled !== !1 &&
		!t.state.dataUpdatedAt &&
		!(t.state.status === "error" && e.retryOnMount === !1)
	);
}
function Gh(t, e) {
	return yb(t, e) || (t.state.dataUpdatedAt > 0 && cc(t, e, e.refetchOnMount));
}
function cc(t, e, n) {
	if (e.enabled !== !1) {
		const r = typeof n == "function" ? n(t) : n;
		return r === "always" || (r !== !1 && Nd(t, e));
	}
	return !1;
}
function Jh(t, e, n, r) {
	return (
		n.enabled !== !1 &&
		(t !== e || r.enabled === !1) &&
		(!n.suspense || t.state.status !== "error") &&
		Nd(t, n)
	);
}
function Nd(t, e) {
	return t.isStaleByTime(e.staleTime);
}
function gb(t, e, n) {
	return n.keepPreviousData
		? !1
		: n.placeholderData !== void 0
		? e.isPlaceholderData
		: t.getCurrentResult() !== e;
}
var zg = { exports: {} },
	Bg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vi = O;
function vb(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var wb = typeof Object.is == "function" ? Object.is : vb,
	Eb = vi.useState,
	Sb = vi.useEffect,
	xb = vi.useLayoutEffect,
	_b = vi.useDebugValue;
function bb(t, e) {
	var n = e(),
		r = Eb({ inst: { value: n, getSnapshot: e } }),
		i = r[0].inst,
		o = r[1];
	return (
		xb(
			function () {
				(i.value = n), (i.getSnapshot = e), Jl(i) && o({ inst: i });
			},
			[t, n, e]
		),
		Sb(
			function () {
				return (
					Jl(i) && o({ inst: i }),
					t(function () {
						Jl(i) && o({ inst: i });
					})
				);
			},
			[t]
		),
		_b(n),
		n
	);
}
function Jl(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !wb(t, n);
	} catch {
		return !0;
	}
}
function Cb(t, e) {
	return e();
}
var kb =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? Cb
		: bb;
Bg.useSyncExternalStore =
	vi.useSyncExternalStore !== void 0 ? vi.useSyncExternalStore : kb;
zg.exports = Bg;
var Rb = zg.exports;
const Pb = Rb.useSyncExternalStore,
	Yh = O.createContext(void 0),
	$g = O.createContext(!1);
function Hg(t, e) {
	return (
		t ||
		(e && typeof window < "u"
			? (window.ReactQueryClientContext ||
					(window.ReactQueryClientContext = Yh),
			  window.ReactQueryClientContext)
			: Yh)
	);
}
const Tb = ({ context: t } = {}) => {
		const e = O.useContext(Hg(t, O.useContext($g)));
		if (!e)
			throw new Error("No QueryClient set, use QueryClientProvider to set one");
		return e;
	},
	Ob = ({ client: t, children: e, context: n, contextSharing: r = !1 }) => {
		O.useEffect(
			() => (
				t.mount(),
				() => {
					t.unmount();
				}
			),
			[t]
		);
		const i = Hg(n, r);
		return O.createElement(
			$g.Provider,
			{ value: !n && r },
			O.createElement(i.Provider, { value: t }, e)
		);
	},
	Vg = O.createContext(!1),
	Ib = () => O.useContext(Vg);
Vg.Provider;
function Nb() {
	let t = !1;
	return {
		clearReset: () => {
			t = !1;
		},
		reset: () => {
			t = !0;
		},
		isReset: () => t,
	};
}
const Db = O.createContext(Nb()),
	jb = () => O.useContext(Db);
function Lb(t, e) {
	return typeof t == "function" ? t(...e) : !!t;
}
const Ab = (t, e) => {
		(t.suspense || t.useErrorBoundary) &&
			(e.isReset() || (t.retryOnMount = !1));
	},
	Mb = (t) => {
		O.useEffect(() => {
			t.clearReset();
		}, [t]);
	},
	Fb = ({ result: t, errorResetBoundary: e, useErrorBoundary: n, query: r }) =>
		t.isError && !e.isReset() && !t.isFetching && Lb(n, [t.error, r]),
	Ub = (t) => {
		t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
	},
	zb = (t, e) => t.isLoading && t.isFetching && !e,
	Bb = (t, e, n) => (t == null ? void 0 : t.suspense) && zb(e, n),
	$b = (t, e, n) =>
		e
			.fetchOptimistic(t)
			.then(({ data: r }) => {
				t.onSuccess == null || t.onSuccess(r),
					t.onSettled == null || t.onSettled(r, null);
			})
			.catch((r) => {
				n.clearReset(),
					t.onError == null || t.onError(r),
					t.onSettled == null || t.onSettled(void 0, r);
			});
function Hb(t, e) {
	const n = Tb({ context: t.context }),
		r = Ib(),
		i = jb(),
		o = n.defaultQueryOptions(t);
	(o._optimisticResults = r ? "isRestoring" : "optimistic"),
		o.onError && (o.onError = je.batchCalls(o.onError)),
		o.onSuccess && (o.onSuccess = je.batchCalls(o.onSuccess)),
		o.onSettled && (o.onSettled = je.batchCalls(o.onSettled)),
		Ub(o),
		Ab(o, i),
		Mb(i);
	const [s] = O.useState(() => new e(n, o)),
		a = s.getOptimisticResult(o);
	if (
		(Pb(
			O.useCallback(
				(l) => {
					const u = r ? () => {} : s.subscribe(je.batchCalls(l));
					return s.updateResult(), u;
				},
				[s, r]
			),
			() => s.getCurrentResult(),
			() => s.getCurrentResult()
		),
		O.useEffect(() => {
			s.setOptions(o, { listeners: !1 });
		}, [o, s]),
		Bb(o, a, r))
	)
		throw $b(o, s, i);
	if (
		Fb({
			result: a,
			errorResetBoundary: i,
			useErrorBoundary: o.useErrorBoundary,
			query: s.getCurrentQuery(),
		})
	)
		throw a.error;
	return o.notifyOnChangeProps ? a : s.trackResult(a);
}
function Wg(t, e, n) {
	const r = Yi(t, e, n);
	return Hb(r, mb);
}
function qg(t, e) {
	return function () {
		return t.apply(e, arguments);
	};
}
const { toString: Vb } = Object.prototype,
	{ getPrototypeOf: Dd } = Object,
	nl = ((t) => (e) => {
		const n = Vb.call(e);
		return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	Gt = (t) => ((t = t.toLowerCase()), (e) => nl(e) === t),
	rl = (t) => (e) => typeof e === t,
	{ isArray: Pi } = Array,
	jo = rl("undefined");
function Wb(t) {
	return (
		t !== null &&
		!jo(t) &&
		t.constructor !== null &&
		!jo(t.constructor) &&
		kt(t.constructor.isBuffer) &&
		t.constructor.isBuffer(t)
	);
}
const Qg = Gt("ArrayBuffer");
function qb(t) {
	let e;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (e = ArrayBuffer.isView(t))
			: (e = t && t.buffer && Qg(t.buffer)),
		e
	);
}
const Qb = rl("string"),
	kt = rl("function"),
	Kg = rl("number"),
	il = (t) => t !== null && typeof t == "object",
	Kb = (t) => t === !0 || t === !1,
	zs = (t) => {
		if (nl(t) !== "object") return !1;
		const e = Dd(t);
		return (
			(e === null ||
				e === Object.prototype ||
				Object.getPrototypeOf(e) === null) &&
			!(Symbol.toStringTag in t) &&
			!(Symbol.iterator in t)
		);
	},
	Gb = Gt("Date"),
	Jb = Gt("File"),
	Yb = Gt("Blob"),
	Xb = Gt("FileList"),
	Zb = (t) => il(t) && kt(t.pipe),
	eC = (t) => {
		let e;
		return (
			t &&
			((typeof FormData == "function" && t instanceof FormData) ||
				(kt(t.append) &&
					((e = nl(t)) === "formdata" ||
						(e === "object" &&
							kt(t.toString) &&
							t.toString() === "[object FormData]"))))
		);
	},
	tC = Gt("URLSearchParams"),
	nC = (t) =>
		t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jo(t, e, { allOwnKeys: n = !1 } = {}) {
	if (t === null || typeof t > "u") return;
	let r, i;
	if ((typeof t != "object" && (t = [t]), Pi(t)))
		for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
	else {
		const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
			s = o.length;
		let a;
		for (r = 0; r < s; r++) (a = o[r]), e.call(null, t[a], a, t);
	}
}
function Gg(t, e) {
	e = e.toLowerCase();
	const n = Object.keys(t);
	let r = n.length,
		i;
	for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
	return null;
}
const Jg = (() =>
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: global)(),
	Yg = (t) => !jo(t) && t !== Jg;
function dc() {
	const { caseless: t } = (Yg(this) && this) || {},
		e = {},
		n = (r, i) => {
			const o = (t && Gg(e, i)) || i;
			zs(e[o]) && zs(r)
				? (e[o] = dc(e[o], r))
				: zs(r)
				? (e[o] = dc({}, r))
				: Pi(r)
				? (e[o] = r.slice())
				: (e[o] = r);
		};
	for (let r = 0, i = arguments.length; r < i; r++)
		arguments[r] && Jo(arguments[r], n);
	return e;
}
const rC = (t, e, n, { allOwnKeys: r } = {}) => (
		Jo(
			e,
			(i, o) => {
				n && kt(i) ? (t[o] = qg(i, n)) : (t[o] = i);
			},
			{ allOwnKeys: r }
		),
		t
	),
	iC = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
	oC = (t, e, n, r) => {
		(t.prototype = Object.create(e.prototype, r)),
			(t.prototype.constructor = t),
			Object.defineProperty(t, "super", { value: e.prototype }),
			n && Object.assign(t.prototype, n);
	},
	sC = (t, e, n, r) => {
		let i, o, s;
		const a = {};
		if (((e = e || {}), t == null)) return e;
		do {
			for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
				(s = i[o]), (!r || r(s, t, e)) && !a[s] && ((e[s] = t[s]), (a[s] = !0));
			t = n !== !1 && Dd(t);
		} while (t && (!n || n(t, e)) && t !== Object.prototype);
		return e;
	},
	aC = (t, e, n) => {
		(t = String(t)),
			(n === void 0 || n > t.length) && (n = t.length),
			(n -= e.length);
		const r = t.indexOf(e, n);
		return r !== -1 && r === n;
	},
	lC = (t) => {
		if (!t) return null;
		if (Pi(t)) return t;
		let e = t.length;
		if (!Kg(e)) return null;
		const n = new Array(e);
		for (; e-- > 0; ) n[e] = t[e];
		return n;
	},
	uC = (
		(t) => (e) =>
			t && e instanceof t
	)(typeof Uint8Array < "u" && Dd(Uint8Array)),
	cC = (t, e) => {
		const r = (t && t[Symbol.iterator]).call(t);
		let i;
		for (; (i = r.next()) && !i.done; ) {
			const o = i.value;
			e.call(t, o[0], o[1]);
		}
	},
	dC = (t, e) => {
		let n;
		const r = [];
		for (; (n = t.exec(e)) !== null; ) r.push(n);
		return r;
	},
	fC = Gt("HTMLFormElement"),
	hC = (t) =>
		t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
			return r.toUpperCase() + i;
		}),
	Xh = (
		({ hasOwnProperty: t }) =>
		(e, n) =>
			t.call(e, n)
	)(Object.prototype),
	pC = Gt("RegExp"),
	Xg = (t, e) => {
		const n = Object.getOwnPropertyDescriptors(t),
			r = {};
		Jo(n, (i, o) => {
			e(i, o, t) !== !1 && (r[o] = i);
		}),
			Object.defineProperties(t, r);
	},
	mC = (t) => {
		Xg(t, (e, n) => {
			if (kt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
				return !1;
			const r = t[n];
			if (kt(r)) {
				if (((e.enumerable = !1), "writable" in e)) {
					e.writable = !1;
					return;
				}
				e.set ||
					(e.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	yC = (t, e) => {
		const n = {},
			r = (i) => {
				i.forEach((o) => {
					n[o] = !0;
				});
			};
		return Pi(t) ? r(t) : r(String(t).split(e)), n;
	},
	gC = () => {},
	vC = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
	Yl = "abcdefghijklmnopqrstuvwxyz",
	Zh = "0123456789",
	Zg = { DIGIT: Zh, ALPHA: Yl, ALPHA_DIGIT: Yl + Yl.toUpperCase() + Zh },
	wC = (t = 16, e = Zg.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = e;
		for (; t--; ) n += e[(Math.random() * r) | 0];
		return n;
	};
function EC(t) {
	return !!(
		t &&
		kt(t.append) &&
		t[Symbol.toStringTag] === "FormData" &&
		t[Symbol.iterator]
	);
}
const SC = (t) => {
		const e = new Array(10),
			n = (r, i) => {
				if (il(r)) {
					if (e.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						e[i] = r;
						const o = Pi(r) ? [] : {};
						return (
							Jo(r, (s, a) => {
								const l = n(s, i + 1);
								!jo(l) && (o[a] = l);
							}),
							(e[i] = void 0),
							o
						);
					}
				}
				return r;
			};
		return n(t, 0);
	},
	xC = Gt("AsyncFunction"),
	_C = (t) => t && (il(t) || kt(t)) && kt(t.then) && kt(t.catch),
	N = {
		isArray: Pi,
		isArrayBuffer: Qg,
		isBuffer: Wb,
		isFormData: eC,
		isArrayBufferView: qb,
		isString: Qb,
		isNumber: Kg,
		isBoolean: Kb,
		isObject: il,
		isPlainObject: zs,
		isUndefined: jo,
		isDate: Gb,
		isFile: Jb,
		isBlob: Yb,
		isRegExp: pC,
		isFunction: kt,
		isStream: Zb,
		isURLSearchParams: tC,
		isTypedArray: uC,
		isFileList: Xb,
		forEach: Jo,
		merge: dc,
		extend: rC,
		trim: nC,
		stripBOM: iC,
		inherits: oC,
		toFlatObject: sC,
		kindOf: nl,
		kindOfTest: Gt,
		endsWith: aC,
		toArray: lC,
		forEachEntry: cC,
		matchAll: dC,
		isHTMLForm: fC,
		hasOwnProperty: Xh,
		hasOwnProp: Xh,
		reduceDescriptors: Xg,
		freezeMethods: mC,
		toObjectSet: yC,
		toCamelCase: hC,
		noop: gC,
		toFiniteNumber: vC,
		findKey: Gg,
		global: Jg,
		isContextDefined: Yg,
		ALPHABET: Zg,
		generateString: wC,
		isSpecCompliantForm: EC,
		toJSONObject: SC,
		isAsyncFn: xC,
		isThenable: _C,
	};
function ae(t, e, n, r, i) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = t),
		(this.name = "AxiosError"),
		e && (this.code = e),
		n && (this.config = n),
		r && (this.request = r),
		i && (this.response = i);
}
N.inherits(ae, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: N.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status ? this.response.status : null,
		};
	},
});
const ev = ae.prototype,
	tv = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach((t) => {
	tv[t] = { value: t };
});
Object.defineProperties(ae, tv);
Object.defineProperty(ev, "isAxiosError", { value: !0 });
ae.from = (t, e, n, r, i, o) => {
	const s = Object.create(ev);
	return (
		N.toFlatObject(
			t,
			s,
			function (l) {
				return l !== Error.prototype;
			},
			(a) => a !== "isAxiosError"
		),
		ae.call(s, t.message, e, n, r, i),
		(s.cause = t),
		(s.name = t.name),
		o && Object.assign(s, o),
		s
	);
};
const bC = null;
function fc(t) {
	return N.isPlainObject(t) || N.isArray(t);
}
function nv(t) {
	return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ep(t, e, n) {
	return t
		? t
				.concat(e)
				.map(function (i, o) {
					return (i = nv(i)), !n && o ? "[" + i + "]" : i;
				})
				.join(n ? "." : "")
		: e;
}
function CC(t) {
	return N.isArray(t) && !t.some(fc);
}
const kC = N.toFlatObject(N, {}, null, function (e) {
	return /^is[A-Z]/.test(e);
});
function ol(t, e, n) {
	if (!N.isObject(t)) throw new TypeError("target must be an object");
	(e = e || new FormData()),
		(n = N.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (x, C) {
				return !N.isUndefined(C[x]);
			}
		));
	const r = n.metaTokens,
		i = n.visitor || c,
		o = n.dots,
		s = n.indexes,
		l = (n.Blob || (typeof Blob < "u" && Blob)) && N.isSpecCompliantForm(e);
	if (!N.isFunction(i)) throw new TypeError("visitor must be a function");
	function u(E) {
		if (E === null) return "";
		if (N.isDate(E)) return E.toISOString();
		if (!l && N.isBlob(E))
			throw new ae("Blob is not supported. Use a Buffer instead.");
		return N.isArrayBuffer(E) || N.isTypedArray(E)
			? l && typeof Blob == "function"
				? new Blob([E])
				: Buffer.from(E)
			: E;
	}
	function c(E, x, C) {
		let y = E;
		if (E && !C && typeof E == "object") {
			if (N.endsWith(x, "{}"))
				(x = r ? x : x.slice(0, -2)), (E = JSON.stringify(E));
			else if (
				(N.isArray(E) && CC(E)) ||
				((N.isFileList(E) || N.endsWith(x, "[]")) && (y = N.toArray(E)))
			)
				return (
					(x = nv(x)),
					y.forEach(function (w, g) {
						!(N.isUndefined(w) || w === null) &&
							e.append(
								s === !0 ? ep([x], g, o) : s === null ? x : x + "[]",
								u(w)
							);
					}),
					!1
				);
		}
		return fc(E) ? !0 : (e.append(ep(C, x, o), u(E)), !1);
	}
	const d = [],
		f = Object.assign(kC, {
			defaultVisitor: c,
			convertValue: u,
			isVisitable: fc,
		});
	function S(E, x) {
		if (!N.isUndefined(E)) {
			if (d.indexOf(E) !== -1)
				throw Error("Circular reference detected in " + x.join("."));
			d.push(E),
				N.forEach(E, function (y, p) {
					(!(N.isUndefined(y) || y === null) &&
						i.call(e, y, N.isString(p) ? p.trim() : p, x, f)) === !0 &&
						S(y, x ? x.concat(p) : [p]);
				}),
				d.pop();
		}
	}
	if (!N.isObject(t)) throw new TypeError("data must be an object");
	return S(t), e;
}
function tp(t) {
	const e = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0",
	};
	return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
		return e[r];
	});
}
function jd(t, e) {
	(this._pairs = []), t && ol(t, this, e);
}
const rv = jd.prototype;
rv.append = function (e, n) {
	this._pairs.push([e, n]);
};
rv.toString = function (e) {
	const n = e
		? function (r) {
				return e.call(this, r, tp);
		  }
		: tp;
	return this._pairs
		.map(function (i) {
			return n(i[0]) + "=" + n(i[1]);
		}, "")
		.join("&");
};
function RC(t) {
	return encodeURIComponent(t)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function iv(t, e, n) {
	if (!e) return t;
	const r = (n && n.encode) || RC,
		i = n && n.serialize;
	let o;
	if (
		(i
			? (o = i(e, n))
			: (o = N.isURLSearchParams(e) ? e.toString() : new jd(e, n).toString(r)),
		o)
	) {
		const s = t.indexOf("#");
		s !== -1 && (t = t.slice(0, s)),
			(t += (t.indexOf("?") === -1 ? "?" : "&") + o);
	}
	return t;
}
class PC {
	constructor() {
		this.handlers = [];
	}
	use(e, n, r) {
		return (
			this.handlers.push({
				fulfilled: e,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(e) {
		N.forEach(this.handlers, function (r) {
			r !== null && e(r);
		});
	}
}
const np = PC,
	ov = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	TC = typeof URLSearchParams < "u" ? URLSearchParams : jd,
	OC = typeof FormData < "u" ? FormData : null,
	IC = typeof Blob < "u" ? Blob : null,
	NC = (() => {
		let t;
		return typeof navigator < "u" &&
			((t = navigator.product) === "ReactNative" ||
				t === "NativeScript" ||
				t === "NS")
			? !1
			: typeof window < "u" && typeof document < "u";
	})(),
	DC = (() =>
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function")(),
	Vt = {
		isBrowser: !0,
		classes: { URLSearchParams: TC, FormData: OC, Blob: IC },
		isStandardBrowserEnv: NC,
		isStandardBrowserWebWorkerEnv: DC,
		protocols: ["http", "https", "file", "blob", "url", "data"],
	};
function jC(t, e) {
	return ol(
		t,
		new Vt.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, i, o) {
					return Vt.isNode && N.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: o.defaultVisitor.apply(this, arguments);
				},
			},
			e
		)
	);
}
function LC(t) {
	return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
		e[0] === "[]" ? "" : e[1] || e[0]
	);
}
function AC(t) {
	const e = {},
		n = Object.keys(t);
	let r;
	const i = n.length;
	let o;
	for (r = 0; r < i; r++) (o = n[r]), (e[o] = t[o]);
	return e;
}
function sv(t) {
	function e(n, r, i, o) {
		let s = n[o++];
		const a = Number.isFinite(+s),
			l = o >= n.length;
		return (
			(s = !s && N.isArray(i) ? i.length : s),
			l
				? (N.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !a)
				: ((!i[s] || !N.isObject(i[s])) && (i[s] = []),
				  e(n, r, i[s], o) && N.isArray(i[s]) && (i[s] = AC(i[s])),
				  !a)
		);
	}
	if (N.isFormData(t) && N.isFunction(t.entries)) {
		const n = {};
		return (
			N.forEachEntry(t, (r, i) => {
				e(LC(r), i, n, 0);
			}),
			n
		);
	}
	return null;
}
const MC = { "Content-Type": void 0 };
function FC(t, e, n) {
	if (N.isString(t))
		try {
			return (e || JSON.parse)(t), N.trim(t);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (n || JSON.stringify)(t);
}
const sl = {
	transitional: ov,
	adapter: ["xhr", "http"],
	transformRequest: [
		function (e, n) {
			const r = n.getContentType() || "",
				i = r.indexOf("application/json") > -1,
				o = N.isObject(e);
			if ((o && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e)))
				return i && i ? JSON.stringify(sv(e)) : e;
			if (
				N.isArrayBuffer(e) ||
				N.isBuffer(e) ||
				N.isStream(e) ||
				N.isFile(e) ||
				N.isBlob(e)
			)
				return e;
			if (N.isArrayBufferView(e)) return e.buffer;
			if (N.isURLSearchParams(e))
				return (
					n.setContentType(
						"application/x-www-form-urlencoded;charset=utf-8",
						!1
					),
					e.toString()
				);
			let a;
			if (o) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1)
					return jC(e, this.formSerializer).toString();
				if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
					const l = this.env && this.env.FormData;
					return ol(
						a ? { "files[]": e } : e,
						l && new l(),
						this.formSerializer
					);
				}
			}
			return o || i ? (n.setContentType("application/json", !1), FC(e)) : e;
		},
	],
	transformResponse: [
		function (e) {
			const n = this.transitional || sl.transitional,
				r = n && n.forcedJSONParsing,
				i = this.responseType === "json";
			if (e && N.isString(e) && ((r && !this.responseType) || i)) {
				const s = !(n && n.silentJSONParsing) && i;
				try {
					return JSON.parse(e);
				} catch (a) {
					if (s)
						throw a.name === "SyntaxError"
							? ae.from(a, ae.ERR_BAD_RESPONSE, this, null, this.response)
							: a;
				}
			}
			return e;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: Vt.classes.FormData, Blob: Vt.classes.Blob },
	validateStatus: function (e) {
		return e >= 200 && e < 300;
	},
	headers: { common: { Accept: "application/json, text/plain, */*" } },
};
N.forEach(["delete", "get", "head"], function (e) {
	sl.headers[e] = {};
});
N.forEach(["post", "put", "patch"], function (e) {
	sl.headers[e] = N.merge(MC);
});
const Ld = sl,
	UC = N.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	zC = (t) => {
		const e = {};
		let n, r, i;
		return (
			t &&
				t
					.split(
						`
`
					)
					.forEach(function (s) {
						(i = s.indexOf(":")),
							(n = s.substring(0, i).trim().toLowerCase()),
							(r = s.substring(i + 1).trim()),
							!(!n || (e[n] && UC[n])) &&
								(n === "set-cookie"
									? e[n]
										? e[n].push(r)
										: (e[n] = [r])
									: (e[n] = e[n] ? e[n] + ", " + r : r));
					}),
			e
		);
	},
	rp = Symbol("internals");
function Vi(t) {
	return t && String(t).trim().toLowerCase();
}
function Bs(t) {
	return t === !1 || t == null ? t : N.isArray(t) ? t.map(Bs) : String(t);
}
function BC(t) {
	const e = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(t)); ) e[r[1]] = r[2];
	return e;
}
const $C = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Xl(t, e, n, r, i) {
	if (N.isFunction(r)) return r.call(this, e, n);
	if ((i && (e = n), !!N.isString(e))) {
		if (N.isString(r)) return e.indexOf(r) !== -1;
		if (N.isRegExp(r)) return r.test(e);
	}
}
function HC(t) {
	return t
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function VC(t, e) {
	const n = N.toCamelCase(" " + e);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(t, r + n, {
			value: function (i, o, s) {
				return this[r].call(this, e, i, o, s);
			},
			configurable: !0,
		});
	});
}
class al {
	constructor(e) {
		e && this.set(e);
	}
	set(e, n, r) {
		const i = this;
		function o(a, l, u) {
			const c = Vi(l);
			if (!c) throw new Error("header name must be a non-empty string");
			const d = N.findKey(i, c);
			(!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
				(i[d || l] = Bs(a));
		}
		const s = (a, l) => N.forEach(a, (u, c) => o(u, c, l));
		return (
			N.isPlainObject(e) || e instanceof this.constructor
				? s(e, n)
				: N.isString(e) && (e = e.trim()) && !$C(e)
				? s(zC(e), n)
				: e != null && o(n, e, r),
			this
		);
	}
	get(e, n) {
		if (((e = Vi(e)), e)) {
			const r = N.findKey(this, e);
			if (r) {
				const i = this[r];
				if (!n) return i;
				if (n === !0) return BC(i);
				if (N.isFunction(n)) return n.call(this, i, r);
				if (N.isRegExp(n)) return n.exec(i);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, n) {
		if (((e = Vi(e)), e)) {
			const r = N.findKey(this, e);
			return !!(r && this[r] !== void 0 && (!n || Xl(this, this[r], r, n)));
		}
		return !1;
	}
	delete(e, n) {
		const r = this;
		let i = !1;
		function o(s) {
			if (((s = Vi(s)), s)) {
				const a = N.findKey(r, s);
				a && (!n || Xl(r, r[a], a, n)) && (delete r[a], (i = !0));
			}
		}
		return N.isArray(e) ? e.forEach(o) : o(e), i;
	}
	clear(e) {
		const n = Object.keys(this);
		let r = n.length,
			i = !1;
		for (; r--; ) {
			const o = n[r];
			(!e || Xl(this, this[o], o, e, !0)) && (delete this[o], (i = !0));
		}
		return i;
	}
	normalize(e) {
		const n = this,
			r = {};
		return (
			N.forEach(this, (i, o) => {
				const s = N.findKey(r, o);
				if (s) {
					(n[s] = Bs(i)), delete n[o];
					return;
				}
				const a = e ? HC(o) : String(o).trim();
				a !== o && delete n[o], (n[a] = Bs(i)), (r[a] = !0);
			}),
			this
		);
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		const n = Object.create(null);
		return (
			N.forEach(this, (r, i) => {
				r != null && r !== !1 && (n[i] = e && N.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static concat(e, ...n) {
		const r = new this(e);
		return n.forEach((i) => r.set(i)), r;
	}
	static accessor(e) {
		const r = (this[rp] = this[rp] = { accessors: {} }).accessors,
			i = this.prototype;
		function o(s) {
			const a = Vi(s);
			r[a] || (VC(i, s), (r[a] = !0));
		}
		return N.isArray(e) ? e.forEach(o) : o(e), this;
	}
}
al.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
N.freezeMethods(al.prototype);
N.freezeMethods(al);
const fn = al;
function Zl(t, e) {
	const n = this || Ld,
		r = e || n,
		i = fn.from(r.headers);
	let o = r.data;
	return (
		N.forEach(t, function (a) {
			o = a.call(n, o, i.normalize(), e ? e.status : void 0);
		}),
		i.normalize(),
		o
	);
}
function av(t) {
	return !!(t && t.__CANCEL__);
}
function Yo(t, e, n) {
	ae.call(this, t ?? "canceled", ae.ERR_CANCELED, e, n),
		(this.name = "CanceledError");
}
N.inherits(Yo, ae, { __CANCEL__: !0 });
function WC(t, e, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? t(n)
		: e(
				new ae(
					"Request failed with status code " + n.status,
					[ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n
				)
		  );
}
const qC = Vt.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, r, i, o, s, a) {
					const l = [];
					l.push(n + "=" + encodeURIComponent(r)),
						N.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()),
						N.isString(o) && l.push("path=" + o),
						N.isString(s) && l.push("domain=" + s),
						a === !0 && l.push("secure"),
						(document.cookie = l.join("; "));
				},
				read: function (n) {
					const r = document.cookie.match(
						new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
					);
					return r ? decodeURIComponent(r[3]) : null;
				},
				remove: function (n) {
					this.write(n, "", Date.now() - 864e5);
				},
			};
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null;
				},
				remove: function () {},
			};
	  })();
function QC(t) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function KC(t, e) {
	return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function lv(t, e) {
	return t && !QC(e) ? KC(t, e) : e;
}
const GC = Vt.isStandardBrowserEnv
	? (function () {
			const e = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			let r;
			function i(o) {
				let s = o;
				return (
					e && (n.setAttribute("href", s), (s = n.href)),
					n.setAttribute("href", s),
					{
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
					}
				);
			}
			return (
				(r = i(window.location.href)),
				function (s) {
					const a = N.isString(s) ? i(s) : s;
					return a.protocol === r.protocol && a.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function JC(t) {
	const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
	return (e && e[1]) || "";
}
function YC(t, e) {
	t = t || 10;
	const n = new Array(t),
		r = new Array(t);
	let i = 0,
		o = 0,
		s;
	return (
		(e = e !== void 0 ? e : 1e3),
		function (l) {
			const u = Date.now(),
				c = r[o];
			s || (s = u), (n[i] = l), (r[i] = u);
			let d = o,
				f = 0;
			for (; d !== i; ) (f += n[d++]), (d = d % t);
			if (((i = (i + 1) % t), i === o && (o = (o + 1) % t), u - s < e)) return;
			const S = c && u - c;
			return S ? Math.round((f * 1e3) / S) : void 0;
		}
	);
}
function ip(t, e) {
	let n = 0;
	const r = YC(50, 250);
	return (i) => {
		const o = i.loaded,
			s = i.lengthComputable ? i.total : void 0,
			a = o - n,
			l = r(a),
			u = o <= s;
		n = o;
		const c = {
			loaded: o,
			total: s,
			progress: s ? o / s : void 0,
			bytes: a,
			rate: l || void 0,
			estimated: l && s && u ? (s - o) / l : void 0,
			event: i,
		};
		(c[e ? "download" : "upload"] = !0), t(c);
	};
}
const XC = typeof XMLHttpRequest < "u",
	ZC =
		XC &&
		function (t) {
			return new Promise(function (n, r) {
				let i = t.data;
				const o = fn.from(t.headers).normalize(),
					s = t.responseType;
				let a;
				function l() {
					t.cancelToken && t.cancelToken.unsubscribe(a),
						t.signal && t.signal.removeEventListener("abort", a);
				}
				N.isFormData(i) &&
					(Vt.isStandardBrowserEnv || Vt.isStandardBrowserWebWorkerEnv
						? o.setContentType(!1)
						: o.setContentType("multipart/form-data;", !1));
				let u = new XMLHttpRequest();
				if (t.auth) {
					const S = t.auth.username || "",
						E = t.auth.password
							? unescape(encodeURIComponent(t.auth.password))
							: "";
					o.set("Authorization", "Basic " + btoa(S + ":" + E));
				}
				const c = lv(t.baseURL, t.url);
				u.open(t.method.toUpperCase(), iv(c, t.params, t.paramsSerializer), !0),
					(u.timeout = t.timeout);
				function d() {
					if (!u) return;
					const S = fn.from(
							"getAllResponseHeaders" in u && u.getAllResponseHeaders()
						),
						x = {
							data:
								!s || s === "text" || s === "json"
									? u.responseText
									: u.response,
							status: u.status,
							statusText: u.statusText,
							headers: S,
							config: t,
							request: u,
						};
					WC(
						function (y) {
							n(y), l();
						},
						function (y) {
							r(y), l();
						},
						x
					),
						(u = null);
				}
				if (
					("onloadend" in u
						? (u.onloadend = d)
						: (u.onreadystatechange = function () {
								!u ||
									u.readyState !== 4 ||
									(u.status === 0 &&
										!(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
									setTimeout(d);
						  }),
					(u.onabort = function () {
						u &&
							(r(new ae("Request aborted", ae.ECONNABORTED, t, u)), (u = null));
					}),
					(u.onerror = function () {
						r(new ae("Network Error", ae.ERR_NETWORK, t, u)), (u = null);
					}),
					(u.ontimeout = function () {
						let E = t.timeout
							? "timeout of " + t.timeout + "ms exceeded"
							: "timeout exceeded";
						const x = t.transitional || ov;
						t.timeoutErrorMessage && (E = t.timeoutErrorMessage),
							r(
								new ae(
									E,
									x.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
									t,
									u
								)
							),
							(u = null);
					}),
					Vt.isStandardBrowserEnv)
				) {
					const S =
						(t.withCredentials || GC(c)) &&
						t.xsrfCookieName &&
						qC.read(t.xsrfCookieName);
					S && o.set(t.xsrfHeaderName, S);
				}
				i === void 0 && o.setContentType(null),
					"setRequestHeader" in u &&
						N.forEach(o.toJSON(), function (E, x) {
							u.setRequestHeader(x, E);
						}),
					N.isUndefined(t.withCredentials) ||
						(u.withCredentials = !!t.withCredentials),
					s && s !== "json" && (u.responseType = t.responseType),
					typeof t.onDownloadProgress == "function" &&
						u.addEventListener("progress", ip(t.onDownloadProgress, !0)),
					typeof t.onUploadProgress == "function" &&
						u.upload &&
						u.upload.addEventListener("progress", ip(t.onUploadProgress)),
					(t.cancelToken || t.signal) &&
						((a = (S) => {
							u &&
								(r(!S || S.type ? new Yo(null, t, u) : S),
								u.abort(),
								(u = null));
						}),
						t.cancelToken && t.cancelToken.subscribe(a),
						t.signal &&
							(t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
				const f = JC(c);
				if (f && Vt.protocols.indexOf(f) === -1) {
					r(new ae("Unsupported protocol " + f + ":", ae.ERR_BAD_REQUEST, t));
					return;
				}
				u.send(i || null);
			});
		},
	$s = { http: bC, xhr: ZC };
N.forEach($s, (t, e) => {
	if (t) {
		try {
			Object.defineProperty(t, "name", { value: e });
		} catch {}
		Object.defineProperty(t, "adapterName", { value: e });
	}
});
const ek = {
	getAdapter: (t) => {
		t = N.isArray(t) ? t : [t];
		const { length: e } = t;
		let n, r;
		for (
			let i = 0;
			i < e && ((n = t[i]), !(r = N.isString(n) ? $s[n.toLowerCase()] : n));
			i++
		);
		if (!r)
			throw r === !1
				? new ae(
						`Adapter ${n} is not supported by the environment`,
						"ERR_NOT_SUPPORT"
				  )
				: new Error(
						N.hasOwnProp($s, n)
							? `Adapter '${n}' is not available in the build`
							: `Unknown adapter '${n}'`
				  );
		if (!N.isFunction(r)) throw new TypeError("adapter is not a function");
		return r;
	},
	adapters: $s,
};
function eu(t) {
	if (
		(t.cancelToken && t.cancelToken.throwIfRequested(),
		t.signal && t.signal.aborted)
	)
		throw new Yo(null, t);
}
function op(t) {
	return (
		eu(t),
		(t.headers = fn.from(t.headers)),
		(t.data = Zl.call(t, t.transformRequest)),
		["post", "put", "patch"].indexOf(t.method) !== -1 &&
			t.headers.setContentType("application/x-www-form-urlencoded", !1),
		ek
			.getAdapter(t.adapter || Ld.adapter)(t)
			.then(
				function (r) {
					return (
						eu(t),
						(r.data = Zl.call(t, t.transformResponse, r)),
						(r.headers = fn.from(r.headers)),
						r
					);
				},
				function (r) {
					return (
						av(r) ||
							(eu(t),
							r &&
								r.response &&
								((r.response.data = Zl.call(
									t,
									t.transformResponse,
									r.response
								)),
								(r.response.headers = fn.from(r.response.headers)))),
						Promise.reject(r)
					);
				}
			)
	);
}
const sp = (t) => (t instanceof fn ? t.toJSON() : t);
function wi(t, e) {
	e = e || {};
	const n = {};
	function r(u, c, d) {
		return N.isPlainObject(u) && N.isPlainObject(c)
			? N.merge.call({ caseless: d }, u, c)
			: N.isPlainObject(c)
			? N.merge({}, c)
			: N.isArray(c)
			? c.slice()
			: c;
	}
	function i(u, c, d) {
		if (N.isUndefined(c)) {
			if (!N.isUndefined(u)) return r(void 0, u, d);
		} else return r(u, c, d);
	}
	function o(u, c) {
		if (!N.isUndefined(c)) return r(void 0, c);
	}
	function s(u, c) {
		if (N.isUndefined(c)) {
			if (!N.isUndefined(u)) return r(void 0, u);
		} else return r(void 0, c);
	}
	function a(u, c, d) {
		if (d in e) return r(u, c);
		if (d in t) return r(void 0, u);
	}
	const l = {
		url: o,
		method: o,
		data: o,
		baseURL: s,
		transformRequest: s,
		transformResponse: s,
		paramsSerializer: s,
		timeout: s,
		timeoutMessage: s,
		withCredentials: s,
		adapter: s,
		responseType: s,
		xsrfCookieName: s,
		xsrfHeaderName: s,
		onUploadProgress: s,
		onDownloadProgress: s,
		decompress: s,
		maxContentLength: s,
		maxBodyLength: s,
		beforeRedirect: s,
		transport: s,
		httpAgent: s,
		httpsAgent: s,
		cancelToken: s,
		socketPath: s,
		responseEncoding: s,
		validateStatus: a,
		headers: (u, c) => i(sp(u), sp(c), !0),
	};
	return (
		N.forEach(Object.keys(Object.assign({}, t, e)), function (c) {
			const d = l[c] || i,
				f = d(t[c], e[c], c);
			(N.isUndefined(f) && d !== a) || (n[c] = f);
		}),
		n
	);
}
const uv = "1.4.0",
	Ad = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
	(t, e) => {
		Ad[t] = function (r) {
			return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
		};
	}
);
const ap = {};
Ad.transitional = function (e, n, r) {
	function i(o, s) {
		return (
			"[Axios v" +
			uv +
			"] Transitional option '" +
			o +
			"'" +
			s +
			(r ? ". " + r : "")
		);
	}
	return (o, s, a) => {
		if (e === !1)
			throw new ae(
				i(s, " has been removed" + (n ? " in " + n : "")),
				ae.ERR_DEPRECATED
			);
		return (
			n &&
				!ap[s] &&
				((ap[s] = !0),
				console.warn(
					i(
						s,
						" has been deprecated since v" +
							n +
							" and will be removed in the near future"
					)
				)),
			e ? e(o, s, a) : !0
		);
	};
};
function tk(t, e, n) {
	if (typeof t != "object")
		throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(t);
	let i = r.length;
	for (; i-- > 0; ) {
		const o = r[i],
			s = e[o];
		if (s) {
			const a = t[o],
				l = a === void 0 || s(a, o, t);
			if (l !== !0)
				throw new ae("option " + o + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new ae("Unknown option " + o, ae.ERR_BAD_OPTION);
	}
}
const hc = { assertOptions: tk, validators: Ad },
	Rn = hc.validators;
class Ta {
	constructor(e) {
		(this.defaults = e),
			(this.interceptors = { request: new np(), response: new np() });
	}
	request(e, n) {
		typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
			(n = wi(this.defaults, n));
		const { transitional: r, paramsSerializer: i, headers: o } = n;
		r !== void 0 &&
			hc.assertOptions(
				r,
				{
					silentJSONParsing: Rn.transitional(Rn.boolean),
					forcedJSONParsing: Rn.transitional(Rn.boolean),
					clarifyTimeoutError: Rn.transitional(Rn.boolean),
				},
				!1
			),
			i != null &&
				(N.isFunction(i)
					? (n.paramsSerializer = { serialize: i })
					: hc.assertOptions(
							i,
							{ encode: Rn.function, serialize: Rn.function },
							!0
					  )),
			(n.method = (n.method || this.defaults.method || "get").toLowerCase());
		let s;
		(s = o && N.merge(o.common, o[n.method])),
			s &&
				N.forEach(
					["delete", "get", "head", "post", "put", "patch", "common"],
					(E) => {
						delete o[E];
					}
				),
			(n.headers = fn.concat(s, o));
		const a = [];
		let l = !0;
		this.interceptors.request.forEach(function (x) {
			(typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
				((l = l && x.synchronous), a.unshift(x.fulfilled, x.rejected));
		});
		const u = [];
		this.interceptors.response.forEach(function (x) {
			u.push(x.fulfilled, x.rejected);
		});
		let c,
			d = 0,
			f;
		if (!l) {
			const E = [op.bind(this), void 0];
			for (
				E.unshift.apply(E, a),
					E.push.apply(E, u),
					f = E.length,
					c = Promise.resolve(n);
				d < f;

			)
				c = c.then(E[d++], E[d++]);
			return c;
		}
		f = a.length;
		let S = n;
		for (d = 0; d < f; ) {
			const E = a[d++],
				x = a[d++];
			try {
				S = E(S);
			} catch (C) {
				x.call(this, C);
				break;
			}
		}
		try {
			c = op.call(this, S);
		} catch (E) {
			return Promise.reject(E);
		}
		for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
		return c;
	}
	getUri(e) {
		e = wi(this.defaults, e);
		const n = lv(e.baseURL, e.url);
		return iv(n, e.params, e.paramsSerializer);
	}
}
N.forEach(["delete", "get", "head", "options"], function (e) {
	Ta.prototype[e] = function (n, r) {
		return this.request(
			wi(r || {}, { method: e, url: n, data: (r || {}).data })
		);
	};
});
N.forEach(["post", "put", "patch"], function (e) {
	function n(r) {
		return function (o, s, a) {
			return this.request(
				wi(a || {}, {
					method: e,
					headers: r ? { "Content-Type": "multipart/form-data" } : {},
					url: o,
					data: s,
				})
			);
		};
	}
	(Ta.prototype[e] = n()), (Ta.prototype[e + "Form"] = n(!0));
});
const Hs = Ta;
class Md {
	constructor(e) {
		if (typeof e != "function")
			throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (o) {
			n = o;
		});
		const r = this;
		this.promise.then((i) => {
			if (!r._listeners) return;
			let o = r._listeners.length;
			for (; o-- > 0; ) r._listeners[o](i);
			r._listeners = null;
		}),
			(this.promise.then = (i) => {
				let o;
				const s = new Promise((a) => {
					r.subscribe(a), (o = a);
				}).then(i);
				return (
					(s.cancel = function () {
						r.unsubscribe(o);
					}),
					s
				);
			}),
			e(function (o, s, a) {
				r.reason || ((r.reason = new Yo(o, s, a)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(e);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let e;
		return {
			token: new Md(function (i) {
				e = i;
			}),
			cancel: e,
		};
	}
}
const nk = Md;
function rk(t) {
	return function (n) {
		return t.apply(null, n);
	};
}
function ik(t) {
	return N.isObject(t) && t.isAxiosError === !0;
}
const pc = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(pc).forEach(([t, e]) => {
	pc[e] = t;
});
const ok = pc;
function cv(t) {
	const e = new Hs(t),
		n = qg(Hs.prototype.request, e);
	return (
		N.extend(n, Hs.prototype, e, { allOwnKeys: !0 }),
		N.extend(n, e, null, { allOwnKeys: !0 }),
		(n.create = function (i) {
			return cv(wi(t, i));
		}),
		n
	);
}
const Be = cv(Ld);
Be.Axios = Hs;
Be.CanceledError = Yo;
Be.CancelToken = nk;
Be.isCancel = av;
Be.VERSION = uv;
Be.toFormData = ol;
Be.AxiosError = ae;
Be.Cancel = Be.CanceledError;
Be.all = function (e) {
	return Promise.all(e);
};
Be.spread = rk;
Be.isAxiosError = ik;
Be.mergeConfig = wi;
Be.AxiosHeaders = fn;
Be.formToJSON = (t) => sv(N.isHTMLForm(t) ? new FormData(t) : t);
Be.HttpStatusCode = ok;
Be.default = Be;
const sk = Be,
	ak = sk.create({
		baseURL: "http://localhost:6060/",
	}),
	dv = () => ({ axiosCall: ak }),
	lk = () => {
		const { axiosCall: t } = dv(),
			{ authLoading: e } = Ko(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Wg({
				queryKey: ["threeClg"],
				enabled: !e,
				queryFn: async () => (await t("/three-college")).data,
			});
		return { threeCLg: n, threeClgLoading: r, threeClgRefetch: i };
	},
	uk = () => {
		const { threeCLg: t, threeClgLoading: e, threeClgRefetch: n } = lk();
		return (
			console.log("threeCLg -> ", t),
			h.jsx(h.Fragment, {
				children: h.jsx("section", {
					className: "text-gray-600 body-font",
					children: h.jsxs("div", {
						className: "container px-5 py-24 mx-auto",
						children: [
							h.jsxs("div", {
								className: "flex flex-col text-center w-full mb-20",
								children: [
									h.jsx("h1", {
										className:
											"text-2xl font-medium title-font mb-4 text-gray-900",
										children: "OUR TEAM",
									}),
									h.jsx("p", {
										className: "lg:w-2/3 mx-auto leading-relaxed text-base",
										children:
											"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.",
									}),
								],
							}),
							h.jsx("div", {
								className: "flex flex-wrap -m-4",
								children:
									t &&
									(t == null
										? void 0
										: t.map((r, i) =>
												h.jsx(
													"div",
													{
														className: "p-4 lg:w-1/3 md:w-1/2 w-full ",
														children: h.jsxs("div", {
															className:
																"h-full flex flex-col items-center bg-slate-100",
															children: [
																h.jsx("img", {
																	alt: "team",
																	className:
																		"flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4",
																	src: "https://dummyimage.com/200x200",
																}),
																h.jsxs("div", {
																	className: "w-full px-4",
																	children: [
																		h.jsx("h2", {
																			className:
																				"title-font font-medium text-lg text-gray-900",
																			children: r == null ? void 0 : r.name,
																		}),
																		h.jsxs("h3", {
																			className: "text-gray-500 mb-3",
																			children: [
																				h.jsx("span", {
																					children: " Admission Date : ",
																				}),
																				" ",
																				r == null ? void 0 : r.admissionDates,
																			],
																		}),
																		h.jsxs("div", {
																			className: "",
																			children: [
																				h.jsx("h2", {
																					className: "font-bold",
																					children: " Events: ",
																				}),
																				(r == null ? void 0 : r.events) &&
																					(r == null
																						? void 0
																						: r.events.map((o) =>
																								h.jsx("div", {
																									className: "py-1 text-sm",
																									children: h.jsxs("h3", {
																										children: [
																											" ",
																											h.jsx("span", {
																												className:
																													"font-medium",
																												children: "Event Name:",
																											}),
																											" ",
																											o == null
																												? void 0
																												: o.name,
																											" ",
																										],
																									}),
																								})
																						  )),
																			],
																		}),
																		h.jsxs("div", {
																			className: "",
																			children: [
																				h.jsx("h2", {
																					className: "font-bold",
																					children: " Research History: ",
																				}),
																				(r == null
																					? void 0
																					: r.researchHistory) &&
																					(r == null
																						? void 0
																						: r.researchHistory.map((o) =>
																								h.jsx("div", {
																									className: "py-1 text-sm",
																									children: h.jsxs("h3", {
																										children: [
																											" ",
																											h.jsx("span", {
																												className:
																													"font-medium",
																												children: "Title:",
																											}),
																											" ",
																											o == null
																												? void 0
																												: o.title,
																											" ",
																										],
																									}),
																								})
																						  )),
																			],
																		}),
																		h.jsxs("div", {
																			className: "",
																			children: [
																				h.jsx("h2", {
																					className: "font-bold",
																					children: " Sports: ",
																				}),
																				(r == null ? void 0 : r.sports) &&
																					(r == null
																						? void 0
																						: r.sports.map((o) =>
																								h.jsx("div", {
																									className: "py-1 text-sm",
																									children: h.jsxs("h3", {
																										children: [
																											h.jsx("span", {
																												className:
																													"font-medium",
																												children: "Name: ",
																											}),
																											o == null
																												? void 0
																												: o.name,
																										],
																									}),
																								})
																						  )),
																			],
																		}),
																	],
																}),
																h.jsxs(mi, {
																	to: `/three-college/${
																		r == null ? void 0 : r._id
																	}`,
																	className:
																		"w-full bg-blue-400 transition duration-300 py-2 text-center text-gray-800 mt-1 hover:bg-blue-600 hover:text-gray-200",
																	children: [" ", "Details", " "],
																}),
															],
														}),
													},
													i
												)
										  )),
							}),
						],
					}),
				}),
			})
		);
	},
	ck = () => h.jsx(h.Fragment, { children: h.jsx(uk, {}) });
var fv = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	lp = un.createContext && un.createContext(fv),
	Kn =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(Kn =
					Object.assign ||
					function (t) {
						for (var e, n = 1, r = arguments.length; n < r; n++) {
							e = arguments[n];
							for (var i in e)
								Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
						}
						return t;
					}),
				Kn.apply(this, arguments)
			);
		},
	dk =
		(globalThis && globalThis.__rest) ||
		function (t, e) {
			var n = {};
			for (var r in t)
				Object.prototype.hasOwnProperty.call(t, r) &&
					e.indexOf(r) < 0 &&
					(n[r] = t[r]);
			if (t != null && typeof Object.getOwnPropertySymbols == "function")
				for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
					e.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
						(n[r[i]] = t[r[i]]);
			return n;
		};
function hv(t) {
	return (
		t &&
		t.map(function (e, n) {
			return un.createElement(e.tag, Kn({ key: n }, e.attr), hv(e.child));
		})
	);
}
function Fd(t) {
	return function (e) {
		return un.createElement(fk, Kn({ attr: Kn({}, t.attr) }, e), hv(t.child));
	};
}
function fk(t) {
	var e = function (n) {
		var r = t.attr,
			i = t.size,
			o = t.title,
			s = dk(t, ["attr", "size", "title"]),
			a = i || n.size || "1em",
			l;
		return (
			n.className && (l = n.className),
			t.className && (l = (l ? l + " " : "") + t.className),
			un.createElement(
				"svg",
				Kn(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					n.attr,
					r,
					s,
					{
						className: l,
						style: Kn(Kn({ color: t.color || n.color }, n.style), t.style),
						height: a,
						width: a,
						xmlns: "http://www.w3.org/2000/svg",
					}
				),
				o && un.createElement("title", null, o),
				t.children
			)
		);
	};
	return lp !== void 0
		? un.createElement(lp.Consumer, null, function (n) {
				return e(n);
		  })
		: e(fv);
}
function hk(t) {
	return Fd({
		tag: "svg",
		attr: { viewBox: "0 0 488 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
				},
			},
		],
	})(t);
}
function pk(t) {
	return Fd({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
				},
			},
		],
	})(t);
}
function mk(t) {
	return Fd({
		tag: "svg",
		attr: { viewBox: "0 0 496 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
				},
			},
		],
	})(t);
}
let yk = { data: "" },
	gk = (t) =>
		typeof window == "object"
			? (
					(t ? t.querySelector("#_goober") : window._goober) ||
					Object.assign(
						(t || document.head).appendChild(document.createElement("style")),
						{ innerHTML: " ", id: "_goober" }
					)
			  ).firstChild
			: t || yk,
	vk = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
	wk = /\/\*[^]*?\*\/|  +/g,
	up = /\n+/g,
	Ln = (t, e) => {
		let n = "",
			r = "",
			i = "";
		for (let o in t) {
			let s = t[o];
			o[0] == "@"
				? o[1] == "i"
					? (n = o + " " + s + ";")
					: (r +=
							o[1] == "f"
								? Ln(s, o)
								: o + "{" + Ln(s, o[1] == "k" ? "" : e) + "}")
				: typeof s == "object"
				? (r += Ln(
						s,
						e
							? e.replace(/([^,])+/g, (a) =>
									o.replace(/(^:.*)|([^,])+/g, (l) =>
										/&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
									)
							  )
							: o
				  ))
				: s != null &&
				  ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
				  (i += Ln.p ? Ln.p(o, s) : o + ":" + s + ";"));
		}
		return n + (e && i ? e + "{" + i + "}" : i) + r;
	},
	Zt = {},
	pv = (t) => {
		if (typeof t == "object") {
			let e = "";
			for (let n in t) e += n + pv(t[n]);
			return e;
		}
		return t;
	},
	Ek = (t, e, n, r, i) => {
		let o = pv(t),
			s =
				Zt[o] ||
				(Zt[o] = ((l) => {
					let u = 0,
						c = 11;
					for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
					return "go" + c;
				})(o));
		if (!Zt[s]) {
			let l =
				o !== t
					? t
					: ((u) => {
							let c,
								d,
								f = [{}];
							for (; (c = vk.exec(u.replace(wk, ""))); )
								c[4]
									? f.shift()
									: c[3]
									? ((d = c[3].replace(up, " ").trim()),
									  f.unshift((f[0][d] = f[0][d] || {})))
									: (f[0][c[1]] = c[2].replace(up, " ").trim());
							return f[0];
					  })(t);
			Zt[s] = Ln(i ? { ["@keyframes " + s]: l } : l, n ? "" : "." + s);
		}
		let a = n && Zt.g ? Zt.g : null;
		return (
			n && (Zt.g = Zt[s]),
			((l, u, c, d) => {
				d
					? (u.data = u.data.replace(d, l))
					: u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
			})(Zt[s], e, r, a),
			s
		);
	},
	Sk = (t, e, n) =>
		t.reduce((r, i, o) => {
			let s = e[o];
			if (s && s.call) {
				let a = s(n),
					l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
				s = l
					? "." + l
					: a && typeof a == "object"
					? a.props
						? ""
						: Ln(a, "")
					: a === !1
					? ""
					: a;
			}
			return r + i + (s ?? "");
		}, "");
function ll(t) {
	let e = this || {},
		n = t.call ? t(e.p) : t;
	return Ek(
		n.unshift
			? n.raw
				? Sk(n, [].slice.call(arguments, 1), e.p)
				: n.reduce((r, i) => Object.assign(r, i && i.call ? i(e.p) : i), {})
			: n,
		gk(e.target),
		e.g,
		e.o,
		e.k
	);
}
let mv, mc, yc;
ll.bind({ g: 1 });
let vn = ll.bind({ k: 1 });
function xk(t, e, n, r) {
	(Ln.p = e), (mv = t), (mc = n), (yc = r);
}
function tr(t, e) {
	let n = this || {};
	return function () {
		let r = arguments;
		function i(o, s) {
			let a = Object.assign({}, o),
				l = a.className || i.className;
			(n.p = Object.assign({ theme: mc && mc() }, a)),
				(n.o = / *go\d+/.test(l)),
				(a.className = ll.apply(n, r) + (l ? " " + l : "")),
				e && (a.ref = s);
			let u = t;
			return (
				t[0] && ((u = a.as || t), delete a.as), yc && u[0] && yc(a), mv(u, a)
			);
		}
		return e ? e(i) : i;
	};
}
var _k = (t) => typeof t == "function",
	Oa = (t, e) => (_k(t) ? t(e) : t),
	bk = (() => {
		let t = 0;
		return () => (++t).toString();
	})(),
	yv = (() => {
		let t;
		return () => {
			if (t === void 0 && typeof window < "u") {
				let e = matchMedia("(prefers-reduced-motion: reduce)");
				t = !e || e.matches;
			}
			return t;
		};
	})(),
	Ck = 20,
	Vs = new Map(),
	kk = 1e3,
	cp = (t) => {
		if (Vs.has(t)) return;
		let e = setTimeout(() => {
			Vs.delete(t), Rr({ type: 4, toastId: t });
		}, kk);
		Vs.set(t, e);
	},
	Rk = (t) => {
		let e = Vs.get(t);
		e && clearTimeout(e);
	},
	gc = (t, e) => {
		switch (e.type) {
			case 0:
				return { ...t, toasts: [e.toast, ...t.toasts].slice(0, Ck) };
			case 1:
				return (
					e.toast.id && Rk(e.toast.id),
					{
						...t,
						toasts: t.toasts.map((o) =>
							o.id === e.toast.id ? { ...o, ...e.toast } : o
						),
					}
				);
			case 2:
				let { toast: n } = e;
				return t.toasts.find((o) => o.id === n.id)
					? gc(t, { type: 1, toast: n })
					: gc(t, { type: 0, toast: n });
			case 3:
				let { toastId: r } = e;
				return (
					r
						? cp(r)
						: t.toasts.forEach((o) => {
								cp(o.id);
						  }),
					{
						...t,
						toasts: t.toasts.map((o) =>
							o.id === r || r === void 0 ? { ...o, visible: !1 } : o
						),
					}
				);
			case 4:
				return e.toastId === void 0
					? { ...t, toasts: [] }
					: { ...t, toasts: t.toasts.filter((o) => o.id !== e.toastId) };
			case 5:
				return { ...t, pausedAt: e.time };
			case 6:
				let i = e.time - (t.pausedAt || 0);
				return {
					...t,
					pausedAt: void 0,
					toasts: t.toasts.map((o) => ({
						...o,
						pauseDuration: o.pauseDuration + i,
					})),
				};
		}
	},
	Ws = [],
	qs = { toasts: [], pausedAt: void 0 },
	Rr = (t) => {
		(qs = gc(qs, t)),
			Ws.forEach((e) => {
				e(qs);
			});
	},
	Pk = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
	Tk = (t = {}) => {
		let [e, n] = O.useState(qs);
		O.useEffect(
			() => (
				Ws.push(n),
				() => {
					let i = Ws.indexOf(n);
					i > -1 && Ws.splice(i, 1);
				}
			),
			[e]
		);
		let r = e.toasts.map((i) => {
			var o, s;
			return {
				...t,
				...t[i.type],
				...i,
				duration:
					i.duration ||
					((o = t[i.type]) == null ? void 0 : o.duration) ||
					(t == null ? void 0 : t.duration) ||
					Pk[i.type],
				style: {
					...t.style,
					...((s = t[i.type]) == null ? void 0 : s.style),
					...i.style,
				},
			};
		});
		return { ...e, toasts: r };
	},
	Ok = (t, e = "blank", n) => ({
		createdAt: Date.now(),
		visible: !0,
		type: e,
		ariaProps: { role: "status", "aria-live": "polite" },
		message: t,
		pauseDuration: 0,
		...n,
		id: (n == null ? void 0 : n.id) || bk(),
	}),
	Xo = (t) => (e, n) => {
		let r = Ok(e, t, n);
		return Rr({ type: 2, toast: r }), r.id;
	},
	tt = (t, e) => Xo("blank")(t, e);
tt.error = Xo("error");
tt.success = Xo("success");
tt.loading = Xo("loading");
tt.custom = Xo("custom");
tt.dismiss = (t) => {
	Rr({ type: 3, toastId: t });
};
tt.remove = (t) => Rr({ type: 4, toastId: t });
tt.promise = (t, e, n) => {
	let r = tt.loading(e.loading, { ...n, ...(n == null ? void 0 : n.loading) });
	return (
		t
			.then(
				(i) => (
					tt.success(Oa(e.success, i), {
						id: r,
						...n,
						...(n == null ? void 0 : n.success),
					}),
					i
				)
			)
			.catch((i) => {
				tt.error(Oa(e.error, i), {
					id: r,
					...n,
					...(n == null ? void 0 : n.error),
				});
			}),
		t
	);
};
var Ik = (t, e) => {
		Rr({ type: 1, toast: { id: t, height: e } });
	},
	Nk = () => {
		Rr({ type: 5, time: Date.now() });
	},
	Dk = (t) => {
		let { toasts: e, pausedAt: n } = Tk(t);
		O.useEffect(() => {
			if (n) return;
			let o = Date.now(),
				s = e.map((a) => {
					if (a.duration === 1 / 0) return;
					let l = (a.duration || 0) + a.pauseDuration - (o - a.createdAt);
					if (l < 0) {
						a.visible && tt.dismiss(a.id);
						return;
					}
					return setTimeout(() => tt.dismiss(a.id), l);
				});
			return () => {
				s.forEach((a) => a && clearTimeout(a));
			};
		}, [e, n]);
		let r = O.useCallback(() => {
				n && Rr({ type: 6, time: Date.now() });
			}, [n]),
			i = O.useCallback(
				(o, s) => {
					let {
							reverseOrder: a = !1,
							gutter: l = 8,
							defaultPosition: u,
						} = s || {},
						c = e.filter(
							(S) => (S.position || u) === (o.position || u) && S.height
						),
						d = c.findIndex((S) => S.id === o.id),
						f = c.filter((S, E) => E < d && S.visible).length;
					return c
						.filter((S) => S.visible)
						.slice(...(a ? [f + 1] : [0, f]))
						.reduce((S, E) => S + (E.height || 0) + l, 0);
				},
				[e]
			);
		return {
			toasts: e,
			handlers: {
				updateHeight: Ik,
				startPause: Nk,
				endPause: r,
				calculateOffset: i,
			},
		};
	},
	jk = vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
	Lk = vn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	Ak = vn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
	Mk = tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Lk} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ak} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
	Fk = vn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
	Uk = tr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${Fk} 1s linear infinite;
`,
	zk = vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
	Bk = vn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
	$k = tr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Bk} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
	Hk = tr("div")`
  position: absolute;
`,
	Vk = tr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
	Wk = vn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	qk = tr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Wk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
	Qk = ({ toast: t }) => {
		let { icon: e, type: n, iconTheme: r } = t;
		return e !== void 0
			? typeof e == "string"
				? O.createElement(qk, null, e)
				: e
			: n === "blank"
			? null
			: O.createElement(
					Vk,
					null,
					O.createElement(Uk, { ...r }),
					n !== "loading" &&
						O.createElement(
							Hk,
							null,
							n === "error"
								? O.createElement(Mk, { ...r })
								: O.createElement($k, { ...r })
						)
			  );
	},
	Kk = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
	Gk = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`,
	Jk = "0%{opacity:0;} 100%{opacity:1;}",
	Yk = "0%{opacity:1;} 100%{opacity:0;}",
	Xk = tr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
	Zk = tr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
	eR = (t, e) => {
		let n = t.includes("top") ? 1 : -1,
			[r, i] = yv() ? [Jk, Yk] : [Kk(n), Gk(n)];
		return {
			animation: e
				? `${vn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
				: `${vn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
		};
	},
	tR = O.memo(({ toast: t, position: e, style: n, children: r }) => {
		let i = t.height
				? eR(t.position || e || "top-center", t.visible)
				: { opacity: 0 },
			o = O.createElement(Qk, { toast: t }),
			s = O.createElement(Zk, { ...t.ariaProps }, Oa(t.message, t));
		return O.createElement(
			Xk,
			{ className: t.className, style: { ...i, ...n, ...t.style } },
			typeof r == "function"
				? r({ icon: o, message: s })
				: O.createElement(O.Fragment, null, o, s)
		);
	});
xk(O.createElement);
var nR = ({
		id: t,
		className: e,
		style: n,
		onHeightUpdate: r,
		children: i,
	}) => {
		let o = O.useCallback(
			(s) => {
				if (s) {
					let a = () => {
						let l = s.getBoundingClientRect().height;
						r(t, l);
					};
					a(),
						new MutationObserver(a).observe(s, {
							subtree: !0,
							childList: !0,
							characterData: !0,
						});
				}
			},
			[t, r]
		);
		return O.createElement("div", { ref: o, className: e, style: n }, i);
	},
	rR = (t, e) => {
		let n = t.includes("top"),
			r = n ? { top: 0 } : { bottom: 0 },
			i = t.includes("center")
				? { justifyContent: "center" }
				: t.includes("right")
				? { justifyContent: "flex-end" }
				: {};
		return {
			left: 0,
			right: 0,
			display: "flex",
			position: "absolute",
			transition: yv() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
			transform: `translateY(${e * (n ? 1 : -1)}px)`,
			...r,
			...i,
		};
	},
	iR = ll`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
	xs = 16,
	oR = ({
		reverseOrder: t,
		position: e = "top-center",
		toastOptions: n,
		gutter: r,
		children: i,
		containerStyle: o,
		containerClassName: s,
	}) => {
		let { toasts: a, handlers: l } = Dk(n);
		return O.createElement(
			"div",
			{
				style: {
					position: "fixed",
					zIndex: 9999,
					top: xs,
					left: xs,
					right: xs,
					bottom: xs,
					pointerEvents: "none",
					...o,
				},
				className: s,
				onMouseEnter: l.startPause,
				onMouseLeave: l.endPause,
			},
			a.map((u) => {
				let c = u.position || e,
					d = l.calculateOffset(u, {
						reverseOrder: t,
						gutter: r,
						defaultPosition: e,
					}),
					f = rR(c, d);
				return O.createElement(
					nR,
					{
						id: u.id,
						key: u.id,
						onHeightUpdate: l.updateHeight,
						className: u.visible ? iR : "",
						style: f,
					},
					u.type === "custom"
						? Oa(u.message, u)
						: i
						? i(u)
						: O.createElement(tR, { toast: u, position: c })
				);
			})
		);
	};
const sR = () => {
	const [t, e] = O.useState(""),
		{ user: n, authLoading: r, googleLogin: i, githubLogin: o } = Ko(),
		s = () => {
			i()
				.then((l) => {
					tt("Google Login Success"), navigate(from, { replace: !0 });
				})
				.catch((l) => {
					e(l.message);
				});
		},
		a = () => {
			o()
				.then((l) => {
					tt("Github Login Success"), navigate(from, { replace: !0 });
				})
				.catch((l) => {
					e(l.message);
				});
		};
	return h.jsx(h.Fragment, {
		children: h.jsx("div", {
			className:
				"bg-white mt-5 py-3 px-4 shadow sm:rounded-lg sm:px-10 max-w-md mx-auto",
			children: h.jsxs("div", {
				className: "",
				children: [
					h.jsx("div", {
						className: "my-5",
						children: h.jsxs("button", {
							onClick: s,
							className:
								"flex justify-center items-center gap-4 w-full border border-green-500 p-5 py-3 text-green-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer",
							children: [
								h.jsx(hk, { className: "w-5 h-5" }),
								h.jsx("span", { children: " Continue With Google " }),
							],
						}),
					}),
					h.jsx("div", {
						className: "my-5",
						children: h.jsxs("button", {
							onClick: a,
							className:
								"w-full  flex justify-center items-center gap-4 border border-gray-500 p-5 py-3 text-gray-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105  transition duration-300 cursor-pointer",
							children: [
								h.jsx(mk, { className: "w-5 h-5" }),
								h.jsx("span", { children: " Continue With Github " }),
							],
						}),
					}),
				],
			}),
		}),
	});
};
function aR() {
	var S, E;
	const t = Ly(),
		e = bi(),
		[n, r] = O.useState(""),
		[i, o] = O.useState(!0),
		[s, a] = O.useState(!0),
		{ authLoading: l, user: u, signIn: c } = Ko();
	let d =
		((E = (S = e.state) == null ? void 0 : S.from) == null
			? void 0
			: E.pathname) || "/";
	!l && u && t(d, { replace: !0 });
	const f = (x) => {
		x.preventDefault();
		const C = x.target,
			y = C.userEmail.value,
			p = C.M_password.value;
		if (p.length < 5) {
			r(`The Password is less than 6 characters ${p.length} `);
			return;
		}
		c(y, p)
			.then((w) => {
				setUser(w.user),
					tt.success("Account Login Success"),
					t(d, { replace: !0 }),
					C.reset();
			})
			.catch();
	};
	return h.jsxs("div", {
		className:
			"bg-gray-300 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
		children: [
			h.jsxs("div", {
				className: "sm:mx-auto sm:w-full sm:max-w-md",
				children: [
					h.jsx("h2", {
						className:
							"text-center text-3xl font-extrabold text-gray-900 uppercase",
						children: "Login your account",
					}),
					h.jsxs("p", {
						className: "mt-2 text-center text-sm text-gray-600",
						children: [
							"Or ",
							h.jsx(mi, {
								to: "/registration",
								className:
									"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
								children: "create a new account",
							}),
						],
					}),
				],
			}),
			h.jsx("div", {
				className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
				children: h.jsx("div", {
					className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
					children: h.jsxs("form", {
						onSubmit: f,
						className: "space-y-6",
						children: [
							h.jsxs("div", {
								children: [
									h.jsx("label", {
										htmlFor: "email",
										className: "block text-sm font-medium text-gray-700",
										children: "Email address",
									}),
									h.jsx("div", {
										className: "mt-1 relative",
										children: h.jsx("input", {
											id: "email",
											name: "userEmail",
											type: "email",
											autoComplete: "email",
											required: !0,
											className:
												"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
										}),
									}),
								],
							}),
							h.jsxs("div", {
								children: [
									h.jsx("label", {
										htmlFor: "password",
										className: "block text-sm font-medium text-gray-700",
										children: "Password",
									}),
									h.jsxs("div", {
										className: "mt-1 relative",
										children: [
											h.jsx("input", {
												id: "password",
												name: "M_password",
												type: i ? "password" : "text",
												autoComplete: "current-password",
												required: !0,
												className:
													"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
											}),
											h.jsx(pk, {
												onClick: () => o(!i),
												className:
													"absolute right-3 cursor-pointer top-1/2 -translate-y-1/2",
											}),
										],
									}),
								],
							}),
							h.jsxs("div", {
								className: "flex items-center justify-between",
								children: [
									h.jsxs("div", {
										className: "flex items-center",
										children: [
											h.jsx("input", {
												id: "remember_me",
												name: "remember_me",
												type: "checkbox",
												onClick: () => a(!s),
												className:
													"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
											}),
											h.jsx("label", {
												htmlFor: "remember_me",
												className: "ml-2 block text-sm text-gray-900",
												children: "Remember me",
											}),
										],
									}),
									h.jsx("div", {
										className: "text-sm",
										children: h.jsx("a", {
											href: "#",
											className:
												"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
											children: "Forgot your password?",
										}),
									}),
								],
							}),
							h.jsx("div", {
								children: h.jsx("button", {
									disabled: !!s,
									type: "submit",
									className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
										s
											? "bg-indigo-400 hover:bg-indigo-400"
											: "bg-indigo-600 hover:bg-indigo-700"
									} `,
									children: "Sign in",
								}),
							}),
							h.jsxs("h3", {
								className: "text-red-500",
								children: [" ", n, " "],
							}),
						],
					}),
				}),
			}),
			h.jsx(sR, {}),
		],
	});
}
const lR = () =>
		h.jsx("div", {
			children: h.jsx("h1", { children: " This is user profile " }),
		}),
	uR = ({ college: t, showCollegeDetails: e }) =>
		h.jsxs("div", {
			className: "max-w-xs rounded overflow-hidden shadow-lg bg-white m-4",
			children: [
				h.jsx("img", {
					src: t.image,
					alt: t.name,
					className: "w-full h-48 object-cover",
				}),
				h.jsxs("div", {
					className: "px-6 py-4",
					children: [
						h.jsx("div", {
							className: "font-bold text-xl mb-2",
							children: t.name,
						}),
						h.jsxs("p", {
							className: "text-gray-700 text-base",
							children: ["Rating: ", t.rating],
						}),
						h.jsxs("p", {
							className: "text-gray-700 text-base",
							children: ["Admission Date: ", t.admissionDate],
						}),
						h.jsxs("p", {
							className: "text-gray-700 text-base",
							children: ["Research Count: ", t.researchNumber],
						}),
						h.jsx("button", {
							onClick: () => e(t),
							className:
								"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
							children: "Details",
						}),
					],
				}),
			],
		}),
	cR = ({ college: t, closeModal: e }) =>
		h.jsx("div", {
			className:
				"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-gray-900",
			onClick: e,
			children: h.jsxs("div", {
				className: "max-w-md p-8 bg-white rounded-lg shadow-lg",
				children: [
					h.jsx("img", {
						src: t.image,
						alt: t.name,
						className: "w-full h-48 object-cover mb-4",
					}),
					h.jsx("div", {
						className: "font-bold text-xl mb-2",
						children: t.name,
					}),
					h.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Rating: ", t.rating],
					}),
					h.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Admission Date: ", t.admissionDate],
					}),
					h.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Research Count: ", t.researchNumber],
					}),
					h.jsx("h3", { className: "font-bold mt-4", children: "Events" }),
					h.jsx("ul", {
						className: "list-disc ml-6",
						children: t.events.map((n, r) => h.jsx("li", { children: n }, r)),
					}),
					h.jsx("h3", {
						className: "font-bold mt-4",
						children: "Sports Facilities",
					}),
					h.jsx("ul", {
						className: "list-disc ml-6",
						children: t.sportsFacilities.map((n, r) =>
							h.jsx("li", { children: n }, r)
						),
					}),
				],
			}),
		}),
	dR = () => {
		const { axiosCall: t } = dv(),
			{ authLoading: e } = Ko(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Wg({
				queryKey: ["College"],
				enabled: !e,
				queryFn: async () => {
					const o = await t("/colleges");
					return console.log("colleges res -> ", o), o.data;
				},
			});
		return { collegesData: n, collegeLoading: r, collegeRefetch: i };
	},
	fR = () => {
		const { collegesData: t, collegeLoading: e, collegeRefetch: n } = dR(),
			[r, i] = O.useState(null),
			o = (a) => {
				i(a);
			},
			s = () => {
				i(null);
			};
		return h.jsxs("div", {
			className: "flex flex-wrap justify-center",
			children: [
				t.map((a, l) => h.jsx(uR, { college: a, showCollegeDetails: o }, l)),
				r && h.jsx(cR, { college: r, closeModal: s }),
			],
		});
	},
	hR = () =>
		h.jsx("div", {
			children: h.jsx("h1", { children: " This is a Admission page " }),
		}),
	pR = () => h.jsx("div", { children: "this is my college" }),
	mR = "/assets/404-laptop-fc3afcbe.png",
	yR = () =>
		h.jsxs("div", {
			className: "flex flex-col items-center justify-center min-h-screen",
			children: [
				h.jsx("img", { src: mR, alt: "404 Error", className: "w-64 mb-4" }),
				h.jsx("div", {
					className: "text-6xl font-bold text-red-600",
					children: "404",
				}),
				h.jsx("div", {
					className: "text-2xl text-gray-800",
					children: "Page not found",
				}),
				h.jsx(mi, {
					to: "/",
					className:
						"mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700",
					children: "Back to Home",
				}),
			],
		}),
	gR = () => {
		const t = F1(),
			e = Q1();
		return (
			console.log("params -> ", t),
			console.log("Loader Date -> ", e),
			h.jsx(h.Fragment, {
				children: h.jsx("section", {
					className: "text-gray-600 body-font",
					children: h.jsxs("div", {
						className: "container px-5 py-24 mx-auto flex flex-wrap",
						children: [
							h.jsx("div", {
								className:
									"lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden",
								children: h.jsx("img", {
									alt: "feature",
									className: "object-cover object-center h-full w-full",
									src: "https://dummyimage.com/460x500",
								}),
							}),
							h.jsxs("div", {
								className:
									"flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center",
								children: [
									h.jsx("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: h.jsxs("div", {
											children: [
												h.jsxs("h1", {
													className: "text-2xl font-bold",
													children: [
														" ",
														h.jsx("span", {
															className: "font-semibold",
															children: " College Name: ",
														}),
														e == null ? void 0 : e.name,
														" ",
													],
												}),
												h.jsxs("p", {
													children: [
														" ",
														h.jsxs("span", {
															className: "font-semibold",
															children: [" ", "Admission Dates :", " "],
														}),
														" ",
														e == null ? void 0 : e.admissionDates,
														" ",
													],
												}),
											],
										}),
									}),
									h.jsx("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: h.jsxs("div", {
											children: [
												h.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														h.jsx("h2", {
															className: "font-bold mb-2",
															children: " Events: ",
														}),
														(e == null ? void 0 : e.events) &&
															(e == null
																? void 0
																: e.events.map((n) =>
																		h.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					h.jsxs("h3", {
																						children: [
																							" ",
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Event Name:",
																							}),
																							" ",
																							n == null ? void 0 : n.name,
																							" ",
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							" ",
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Location:",
																							}),
																							" ",
																							n == null ? void 0 : n.location,
																							" ",
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							" ",
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Date:",
																							}),
																							" ",
																							n == null ? void 0 : n.date,
																							" ",
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							" ",
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Description:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.description,
																							" ",
																						],
																					}),
																				],
																			},
																			n == null ? void 0 : n.id
																		)
																  )),
													],
												}),
												h.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														h.jsx("h2", {
															className: "font-bold mb-2",
															children: " Research History : ",
														}),
														(e == null ? void 0 : e.researchHistory) &&
															(e == null
																? void 0
																: e.researchHistory.map((n) =>
																		h.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					h.jsxs("h3", {
																						children: [
																							" ",
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Title:",
																							}),
																							" ",
																							n == null ? void 0 : n.title,
																							" ",
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Publication Data:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.publicationData,
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Description:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.description,
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Authors :",
																							}),
																							n == null
																								? void 0
																								: n.authors.map((r) =>
																										h.jsxs(
																											"span",
																											{
																												children: [
																													" ",
																													r,
																													" , ",
																												],
																											},
																											r
																										)
																								  ),
																						],
																					}),
																				],
																			},
																			n == null ? void 0 : n.id
																		)
																  )),
													],
												}),
												h.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														h.jsx("h2", {
															className: "font-bold mb-2",
															children: " Sports: ",
														}),
														(e == null ? void 0 : e.sports) &&
															(e == null
																? void 0
																: e.sports.map((n) =>
																		h.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					h.jsxs("h3", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Name: ",
																							}),
																							n == null ? void 0 : n.name,
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Coach:",
																							}),
																							" ",
																							n == null ? void 0 : n.coach,
																						],
																					}),
																					h.jsxs("p", {
																						children: [
																							h.jsx("span", {
																								className: "font-medium",
																								children: "Description:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.description,
																						],
																					}),
																				],
																			},
																			n == null ? void 0 : n.id
																		)
																  )),
													],
												}),
											],
										}),
									}),
									h.jsxs("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: [
											h.jsx("div", {
												className:
													"w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5",
												children: h.jsxs("svg", {
													fill: "none",
													stroke: "currentColor",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 2,
													className: "w-6 h-6",
													viewBox: "0 0 24 24",
													children: [
														h.jsx("path", {
															d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
														}),
														h.jsx("circle", { cx: 12, cy: 7, r: 4 }),
													],
												}),
											}),
											h.jsxs("div", {
												className: "flex-grow",
												children: [
													h.jsx("h2", {
														className:
															"text-gray-900 text-lg title-font font-medium mb-3",
														children: "Neptune",
													}),
													h.jsx("p", {
														className: "leading-relaxed text-base",
														children:
															"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
													}),
													h.jsxs("a", {
														className:
															"mt-3 text-indigo-500 inline-flex items-center",
														children: [
															"Learn More",
															h.jsx("svg", {
																fill: "none",
																stroke: "currentColor",
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																className: "w-4 h-4 ml-2",
																viewBox: "0 0 24 24",
																children: h.jsx("path", {
																	d: "M5 12h14M12 5l7 7-7 7",
																}),
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				}),
			})
		);
	},
	vR = sE([
		{
			path: "/",
			element: h.jsx(Z_, {}),
			errorElement: h.jsx(yR, {}),
			children: [
				{ path: "/", element: h.jsx(ck, {}) },
				{ path: "/colleges", element: h.jsx(fR, {}) },
				{ path: "/admission", element: h.jsx(hR, {}) },
				{ path: "/my-college", element: h.jsx(pR, {}) },
				{ path: "/login", element: h.jsx(aR, {}) },
				{ path: "/profile", element: h.jsx(lR, {}) },
				{
					path: "/three-college/:id",
					loader: ({ params: t }) =>
						fetch(
							`http://localhost:6060/three-college/${t == null ? void 0 : t.id}`
						),
					element: h.jsx(gR, {}),
				},
			],
		},
	]),
	wR = new pb();
tu.createRoot(document.getElementById("root")).render(
	h.jsx(un.StrictMode, {
		children: h.jsx(J_, {
			children: h.jsxs(Ob, {
				client: wR,
				children: [h.jsx(Y1, { router: vR }), h.jsx(oR, {})],
			}),
		}),
	})
);
