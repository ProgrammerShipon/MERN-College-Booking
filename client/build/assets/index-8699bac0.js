function x0(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const s = Object.getOwnPropertyDescriptor(r, i);
					s &&
						Object.defineProperty(
							e,
							i,
							s.get ? s : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === "childList")
				for (const o of s.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const s = {};
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (s.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = n(i);
		fetch(i.href, s);
	}
})();
function b0(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var im = { exports: {} },
	il = {},
	sm = { exports: {} },
	ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ro = Symbol.for("react.element"),
	E0 = Symbol.for("react.portal"),
	S0 = Symbol.for("react.fragment"),
	_0 = Symbol.for("react.strict_mode"),
	C0 = Symbol.for("react.profiler"),
	k0 = Symbol.for("react.provider"),
	R0 = Symbol.for("react.context"),
	N0 = Symbol.for("react.forward_ref"),
	O0 = Symbol.for("react.suspense"),
	P0 = Symbol.for("react.memo"),
	T0 = Symbol.for("react.lazy"),
	Cf = Symbol.iterator;
function I0(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Cf && e[Cf]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var om = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	am = Object.assign,
	lm = {};
function Hi(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = lm),
		(this.updater = n || om);
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Hi.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function um() {}
um.prototype = Hi.prototype;
function Xc(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = lm),
		(this.updater = n || om);
}
var Zc = (Xc.prototype = new um());
Zc.constructor = Xc;
am(Zc, Hi.prototype);
Zc.isPureReactComponent = !0;
var kf = Array.isArray,
	cm = Object.prototype.hasOwnProperty,
	ed = { current: null },
	dm = { key: !0, ref: !0, __self: !0, __source: !0 };
function fm(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (s = "" + t.key),
		t))
			cm.call(t, r) && !dm.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		i.children = l;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: ro,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: ed.current,
	};
}
function j0(e, t) {
	return {
		$$typeof: ro,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function td(e) {
	return typeof e == "object" && e !== null && e.$$typeof === ro;
}
function A0(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Rf = /\/+/g;
function $l(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? A0("" + e.key)
		: t.toString(36);
}
function Wo(e, t, n, r, i) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (s) {
			case "string":
			case "number":
				o = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case ro:
					case E0:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === "" ? "." + $l(o, 0) : r),
			kf(i)
				? ((n = ""),
				  e != null && (n = e.replace(Rf, "$&/") + "/"),
				  Wo(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (td(i) &&
						(i = j0(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ""
									: ("" + i.key).replace(Rf, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((o = 0), (r = r === "" ? "." : r + ":"), kf(e)))
		for (var a = 0; a < e.length; a++) {
			s = e[a];
			var l = r + $l(s, a);
			o += Wo(s, t, n, l, i);
		}
	else if (((l = I0(e)), typeof l == "function"))
		for (e = l.call(e), a = 0; !(s = e.next()).done; )
			(s = s.value), (l = r + $l(s, a++)), (o += Wo(s, t, n, l, i));
	else if (s === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return o;
}
function Co(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Wo(e, r, "", "", function (s) {
			return t.call(n, s, i++);
		}),
		r
	);
}
function L0(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var xt = { current: null },
	qo = { transition: null },
	D0 = {
		ReactCurrentDispatcher: xt,
		ReactCurrentBatchConfig: qo,
		ReactCurrentOwner: ed,
	};
ve.Children = {
	map: Co,
	forEach: function (e, t, n) {
		Co(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Co(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Co(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!td(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
ve.Component = Hi;
ve.Fragment = S0;
ve.Profiler = C0;
ve.PureComponent = Xc;
ve.StrictMode = _0;
ve.Suspense = O0;
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D0;
ve.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = am({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((s = t.ref), (o = ed.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (l in t)
			cm.call(t, l) &&
				!dm.hasOwnProperty(l) &&
				(r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: ro, type: e.type, key: i, ref: s, props: r, _owner: o };
};
ve.createContext = function (e) {
	return (
		(e = {
			$$typeof: R0,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: k0, _context: e }),
		(e.Consumer = e)
	);
};
ve.createElement = fm;
ve.createFactory = function (e) {
	var t = fm.bind(null, e);
	return (t.type = e), t;
};
ve.createRef = function () {
	return { current: null };
};
ve.forwardRef = function (e) {
	return { $$typeof: N0, render: e };
};
ve.isValidElement = td;
ve.lazy = function (e) {
	return { $$typeof: T0, _payload: { _status: -1, _result: e }, _init: L0 };
};
ve.memo = function (e, t) {
	return { $$typeof: P0, type: e, compare: t === void 0 ? null : t };
};
ve.startTransition = function (e) {
	var t = qo.transition;
	qo.transition = {};
	try {
		e();
	} finally {
		qo.transition = t;
	}
};
ve.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
ve.useCallback = function (e, t) {
	return xt.current.useCallback(e, t);
};
ve.useContext = function (e) {
	return xt.current.useContext(e);
};
ve.useDebugValue = function () {};
ve.useDeferredValue = function (e) {
	return xt.current.useDeferredValue(e);
};
ve.useEffect = function (e, t) {
	return xt.current.useEffect(e, t);
};
ve.useId = function () {
	return xt.current.useId();
};
ve.useImperativeHandle = function (e, t, n) {
	return xt.current.useImperativeHandle(e, t, n);
};
ve.useInsertionEffect = function (e, t) {
	return xt.current.useInsertionEffect(e, t);
};
ve.useLayoutEffect = function (e, t) {
	return xt.current.useLayoutEffect(e, t);
};
ve.useMemo = function (e, t) {
	return xt.current.useMemo(e, t);
};
ve.useReducer = function (e, t, n) {
	return xt.current.useReducer(e, t, n);
};
ve.useRef = function (e) {
	return xt.current.useRef(e);
};
ve.useState = function (e) {
	return xt.current.useState(e);
};
ve.useSyncExternalStore = function (e, t, n) {
	return xt.current.useSyncExternalStore(e, t, n);
};
ve.useTransition = function () {
	return xt.current.useTransition();
};
ve.version = "18.2.0";
sm.exports = ve;
var I = sm.exports;
const at = b0(I),
	M0 = x0({ __proto__: null, default: at }, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0 = I,
	U0 = Symbol.for("react.element"),
	B0 = Symbol.for("react.fragment"),
	z0 = Object.prototype.hasOwnProperty,
	$0 = F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	V0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function hm(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = "" + n),
		t.key !== void 0 && (s = "" + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) z0.call(t, r) && !V0.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: U0,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: $0.current,
	};
}
il.Fragment = B0;
il.jsx = hm;
il.jsxs = hm;
im.exports = il;
var c = im.exports,
	Au = {},
	pm = { exports: {} },
	At = {},
	mm = { exports: {} },
	ym = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(B, X) {
		var J = B.length;
		B.push(X);
		e: for (; 0 < J; ) {
			var he = (J - 1) >>> 1,
				pe = B[he];
			if (0 < i(pe, X)) (B[he] = X), (B[J] = pe), (J = he);
			else break e;
		}
	}
	function n(B) {
		return B.length === 0 ? null : B[0];
	}
	function r(B) {
		if (B.length === 0) return null;
		var X = B[0],
			J = B.pop();
		if (J !== X) {
			B[0] = J;
			e: for (var he = 0, pe = B.length, Oe = pe >>> 1; he < Oe; ) {
				var se = 2 * (he + 1) - 1,
					Ce = B[se],
					qe = se + 1,
					mt = B[qe];
				if (0 > i(Ce, J))
					qe < pe && 0 > i(mt, Ce)
						? ((B[he] = mt), (B[qe] = J), (he = qe))
						: ((B[he] = Ce), (B[se] = J), (he = se));
				else if (qe < pe && 0 > i(mt, J)) (B[he] = mt), (B[qe] = J), (he = qe);
				else break e;
			}
		}
		return X;
	}
	function i(B, X) {
		var J = B.sortIndex - X.sortIndex;
		return J !== 0 ? J : B.id - X.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var s = performance;
		e.unstable_now = function () {
			return s.now();
		};
	} else {
		var o = Date,
			a = o.now();
		e.unstable_now = function () {
			return o.now() - a;
		};
	}
	var l = [],
		u = [],
		d = 1,
		f = null,
		p = 3,
		b = !1,
		w = !1,
		E = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		g = typeof clearTimeout == "function" ? clearTimeout : null,
		h = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(B) {
		for (var X = n(u); X !== null; ) {
			if (X.callback === null) r(u);
			else if (X.startTime <= B)
				r(u), (X.sortIndex = X.expirationTime), t(l, X);
			else break;
			X = n(u);
		}
	}
	function m(B) {
		if (((E = !1), v(B), !w))
			if (n(l) !== null) (w = !0), fe(_);
			else {
				var X = n(u);
				X !== null && we(m, X.startTime - B);
			}
	}
	function _(B, X) {
		(w = !1), E && ((E = !1), g(N), (N = -1)), (b = !0);
		var J = p;
		try {
			for (
				v(X), f = n(l);
				f !== null && (!(f.expirationTime > X) || (B && !ie()));

			) {
				var he = f.callback;
				if (typeof he == "function") {
					(f.callback = null), (p = f.priorityLevel);
					var pe = he(f.expirationTime <= X);
					(X = e.unstable_now()),
						typeof pe == "function" ? (f.callback = pe) : f === n(l) && r(l),
						v(X);
				} else r(l);
				f = n(l);
			}
			if (f !== null) var Oe = !0;
			else {
				var se = n(u);
				se !== null && we(m, se.startTime - X), (Oe = !1);
			}
			return Oe;
		} finally {
			(f = null), (p = J), (b = !1);
		}
	}
	var O = !1,
		P = null,
		N = -1,
		V = 5,
		K = -1;
	function ie() {
		return !(e.unstable_now() - K < V);
	}
	function Q() {
		if (P !== null) {
			var B = e.unstable_now();
			K = B;
			var X = !0;
			try {
				X = P(!0, B);
			} finally {
				X ? te() : ((O = !1), (P = null));
			}
		} else O = !1;
	}
	var te;
	if (typeof h == "function")
		te = function () {
			h(Q);
		};
	else if (typeof MessageChannel < "u") {
		var oe = new MessageChannel(),
			me = oe.port2;
		(oe.port1.onmessage = Q),
			(te = function () {
				me.postMessage(null);
			});
	} else
		te = function () {
			C(Q, 0);
		};
	function fe(B) {
		(P = B), O || ((O = !0), te());
	}
	function we(B, X) {
		N = C(function () {
			B(e.unstable_now());
		}, X);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (B) {
			B.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || b || ((w = !0), fe(_));
		}),
		(e.unstable_forceFrameRate = function (B) {
			0 > B || 125 < B
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (V = 0 < B ? Math.floor(1e3 / B) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(l);
		}),
		(e.unstable_next = function (B) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var X = 3;
					break;
				default:
					X = p;
			}
			var J = p;
			p = X;
			try {
				return B();
			} finally {
				p = J;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (B, X) {
			switch (B) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					B = 3;
			}
			var J = p;
			p = B;
			try {
				return X();
			} finally {
				p = J;
			}
		}),
		(e.unstable_scheduleCallback = function (B, X, J) {
			var he = e.unstable_now();
			switch (
				(typeof J == "object" && J !== null
					? ((J = J.delay), (J = typeof J == "number" && 0 < J ? he + J : he))
					: (J = he),
				B)
			) {
				case 1:
					var pe = -1;
					break;
				case 2:
					pe = 250;
					break;
				case 5:
					pe = 1073741823;
					break;
				case 4:
					pe = 1e4;
					break;
				default:
					pe = 5e3;
			}
			return (
				(pe = J + pe),
				(B = {
					id: d++,
					callback: X,
					priorityLevel: B,
					startTime: J,
					expirationTime: pe,
					sortIndex: -1,
				}),
				J > he
					? ((B.sortIndex = J),
					  t(u, B),
					  n(l) === null &&
							B === n(u) &&
							(E ? (g(N), (N = -1)) : (E = !0), we(m, J - he)))
					: ((B.sortIndex = pe), t(l, B), w || b || ((w = !0), fe(_))),
				B
			);
		}),
		(e.unstable_shouldYield = ie),
		(e.unstable_wrapCallback = function (B) {
			var X = p;
			return function () {
				var J = p;
				p = X;
				try {
					return B.apply(this, arguments);
				} finally {
					p = J;
				}
			};
		});
})(ym);
mm.exports = ym;
var H0 = mm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm = I,
	jt = H0;
function z(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var vm = new Set(),
	js = {};
function Gr(e, t) {
	Pi(e, t), Pi(e + "Capture", t);
}
function Pi(e, t) {
	for (js[e] = t, e = 0; e < t.length; e++) vm.add(t[e]);
}
var Ln = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Lu = Object.prototype.hasOwnProperty,
	W0 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Nf = {},
	Of = {};
function q0(e) {
	return Lu.call(Of, e)
		? !0
		: Lu.call(Nf, e)
		? !1
		: W0.test(e)
		? (Of[e] = !0)
		: ((Nf[e] = !0), !1);
}
function K0(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Q0(e, t, n, r) {
	if (t === null || typeof t > "u" || K0(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function bt(e, t, n, r, i, s, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = s),
		(this.removeEmptyString = o);
}
var ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ut[e] = new bt(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ut[t] = new bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ut[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ut[e] = new bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ut[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ut[e] = new bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ut[e] = new bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ut[e] = new bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ut[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nd = /[\-:]([a-z])/g;
function rd(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(nd, rd);
		ut[t] = new bt(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(nd, rd);
		ut[t] = new bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(nd, rd);
	ut[t] = new bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ut[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ut.xlinkHref = new bt(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ut[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function id(e, t, n, r) {
	var i = ut.hasOwnProperty(t) ? ut[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(Q0(t, n, i, r) && (n = null),
		r || i === null
			? q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zn = gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ko = Symbol.for("react.element"),
	ii = Symbol.for("react.portal"),
	si = Symbol.for("react.fragment"),
	sd = Symbol.for("react.strict_mode"),
	Du = Symbol.for("react.profiler"),
	wm = Symbol.for("react.provider"),
	xm = Symbol.for("react.context"),
	od = Symbol.for("react.forward_ref"),
	Mu = Symbol.for("react.suspense"),
	Fu = Symbol.for("react.suspense_list"),
	ad = Symbol.for("react.memo"),
	Yn = Symbol.for("react.lazy"),
	bm = Symbol.for("react.offscreen"),
	Pf = Symbol.iterator;
function ts(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Pf && e[Pf]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var ze = Object.assign,
	Vl;
function ms(e) {
	if (Vl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Vl = (t && t[1]) || "";
		}
	return (
		`
` +
		Vl +
		e
	);
}
var Hl = !1;
function Wl(e, t) {
	if (!e || Hl) return "";
	Hl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					s = r.stack.split(`
`),
					o = i.length - 1,
					a = s.length - 1;
				1 <= o && 0 <= a && i[o] !== s[a];

			)
				a--;
			for (; 1 <= o && 0 <= a; o--, a--)
				if (i[o] !== s[a]) {
					if (o !== 1 || a !== 1)
						do
							if ((o--, a--, 0 > a || i[o] !== s[a])) {
								var l =
									`
` + i[o].replace(" at new ", " at ");
								return (
									e.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace("<anonymous>", e.displayName)),
									l
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(Hl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? ms(e) : "";
}
function G0(e) {
	switch (e.tag) {
		case 5:
			return ms(e.type);
		case 16:
			return ms("Lazy");
		case 13:
			return ms("Suspense");
		case 19:
			return ms("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Wl(e.type, !1)), e;
		case 11:
			return (e = Wl(e.type.render, !1)), e;
		case 1:
			return (e = Wl(e.type, !0)), e;
		default:
			return "";
	}
}
function Uu(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case si:
			return "Fragment";
		case ii:
			return "Portal";
		case Du:
			return "Profiler";
		case sd:
			return "StrictMode";
		case Mu:
			return "Suspense";
		case Fu:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case xm:
				return (e.displayName || "Context") + ".Consumer";
			case wm:
				return (e._context.displayName || "Context") + ".Provider";
			case od:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case ad:
				return (
					(t = e.displayName || null), t !== null ? t : Uu(e.type) || "Memo"
				);
			case Yn:
				(t = e._payload), (e = e._init);
				try {
					return Uu(e(t));
				} catch {}
		}
	return null;
}
function J0(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Uu(t);
		case 8:
			return t === sd ? "StrictMode" : "Mode";
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
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function wr(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Em(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Y0(e) {
	var t = Em(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			s = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (o) {
					(r = "" + o), s.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = "" + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Ro(e) {
	e._valueTracker || (e._valueTracker = Y0(e));
}
function Sm(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Em(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ya(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Bu(e, t) {
	var n = t.checked;
	return ze({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Tf(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = wr(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function _m(e, t) {
	(t = t.checked), t != null && id(e, "checked", t, !1);
}
function zu(e, t) {
	_m(e, t);
	var n = wr(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? $u(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && $u(e, t.type, wr(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function If(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function $u(e, t, n) {
	(t !== "number" || ya(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ys = Array.isArray;
function wi(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + wr(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Vu(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
	return ze({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function jf(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(z(92));
			if (ys(n)) {
				if (1 < n.length) throw Error(z(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: wr(n) };
}
function Cm(e, t) {
	var n = wr(t.value),
		r = wr(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Af(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function km(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Hu(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? km(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var No,
	Rm = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				No = No || document.createElement("div"),
					No.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = No.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function As(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Es = {
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
	X0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Es).forEach(function (e) {
	X0.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Es[t] = Es[e]);
	});
});
function Nm(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (Es.hasOwnProperty(e) && Es[e])
		? ("" + t).trim()
		: t + "px";
}
function Om(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Nm(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Z0 = ze(
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
function Wu(e, t) {
	if (t) {
		if (Z0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(z(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(z(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(z(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(z(62));
	}
}
function qu(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
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
var Ku = null;
function ld(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Qu = null,
	xi = null,
	bi = null;
function Lf(e) {
	if ((e = oo(e))) {
		if (typeof Qu != "function") throw Error(z(280));
		var t = e.stateNode;
		t && ((t = ul(t)), Qu(e.stateNode, e.type, t));
	}
}
function Pm(e) {
	xi ? (bi ? bi.push(e) : (bi = [e])) : (xi = e);
}
function Tm() {
	if (xi) {
		var e = xi,
			t = bi;
		if (((bi = xi = null), Lf(e), t)) for (e = 0; e < t.length; e++) Lf(t[e]);
	}
}
function Im(e, t) {
	return e(t);
}
function jm() {}
var ql = !1;
function Am(e, t, n) {
	if (ql) return e(t, n);
	ql = !0;
	try {
		return Im(e, t, n);
	} finally {
		(ql = !1), (xi !== null || bi !== null) && (jm(), Tm());
	}
}
function Ls(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = ul(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
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
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(z(231, t, typeof n));
	return n;
}
var Gu = !1;
if (Ln)
	try {
		var ns = {};
		Object.defineProperty(ns, "passive", {
			get: function () {
				Gu = !0;
			},
		}),
			window.addEventListener("test", ns, ns),
			window.removeEventListener("test", ns, ns);
	} catch {
		Gu = !1;
	}
function ew(e, t, n, r, i, s, o, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var Ss = !1,
	ga = null,
	va = !1,
	Ju = null,
	tw = {
		onError: function (e) {
			(Ss = !0), (ga = e);
		},
	};
function nw(e, t, n, r, i, s, o, a, l) {
	(Ss = !1), (ga = null), ew.apply(tw, arguments);
}
function rw(e, t, n, r, i, s, o, a, l) {
	if ((nw.apply(this, arguments), Ss)) {
		if (Ss) {
			var u = ga;
			(Ss = !1), (ga = null);
		} else throw Error(z(198));
		va || ((va = !0), (Ju = u));
	}
}
function Jr(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Lm(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Df(e) {
	if (Jr(e) !== e) throw Error(z(188));
}
function iw(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Jr(e)), t === null)) throw Error(z(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var s = i.alternate;
		if (s === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === s.child) {
			for (s = i.child; s; ) {
				if (s === n) return Df(i), e;
				if (s === r) return Df(i), t;
				s = s.sibling;
			}
			throw Error(z(188));
		}
		if (n.return !== r.return) (n = i), (r = s);
		else {
			for (var o = !1, a = i.child; a; ) {
				if (a === n) {
					(o = !0), (n = i), (r = s);
					break;
				}
				if (a === r) {
					(o = !0), (r = i), (n = s);
					break;
				}
				a = a.sibling;
			}
			if (!o) {
				for (a = s.child; a; ) {
					if (a === n) {
						(o = !0), (n = s), (r = i);
						break;
					}
					if (a === r) {
						(o = !0), (r = s), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!o) throw Error(z(189));
			}
		}
		if (n.alternate !== r) throw Error(z(190));
	}
	if (n.tag !== 3) throw Error(z(188));
	return n.stateNode.current === n ? e : t;
}
function Dm(e) {
	return (e = iw(e)), e !== null ? Mm(e) : null;
}
function Mm(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Mm(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Fm = jt.unstable_scheduleCallback,
	Mf = jt.unstable_cancelCallback,
	sw = jt.unstable_shouldYield,
	ow = jt.unstable_requestPaint,
	We = jt.unstable_now,
	aw = jt.unstable_getCurrentPriorityLevel,
	ud = jt.unstable_ImmediatePriority,
	Um = jt.unstable_UserBlockingPriority,
	wa = jt.unstable_NormalPriority,
	lw = jt.unstable_LowPriority,
	Bm = jt.unstable_IdlePriority,
	sl = null,
	hn = null;
function uw(e) {
	if (hn && typeof hn.onCommitFiberRoot == "function")
		try {
			hn.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var nn = Math.clz32 ? Math.clz32 : fw,
	cw = Math.log,
	dw = Math.LN2;
function fw(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((cw(e) / dw) | 0)) | 0;
}
var Oo = 64,
	Po = 4194304;
function gs(e) {
	switch (e & -e) {
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
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function xa(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		s = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~i;
		a !== 0 ? (r = gs(a)) : ((s &= o), s !== 0 && (r = gs(s)));
	} else (o = n & ~i), o !== 0 ? (r = gs(o)) : s !== 0 && (r = gs(s));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - nn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function hw(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
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
			return t + 5e3;
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
function pw(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			s = e.pendingLanes;
		0 < s;

	) {
		var o = 31 - nn(s),
			a = 1 << o,
			l = i[o];
		l === -1
			? (!(a & n) || a & r) && (i[o] = hw(a, t))
			: l <= t && (e.expiredLanes |= a),
			(s &= ~a);
	}
}
function Yu(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function zm() {
	var e = Oo;
	return (Oo <<= 1), !(Oo & 4194240) && (Oo = 64), e;
}
function Kl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function io(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - nn(t)),
		(e[t] = n);
}
function mw(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - nn(n),
			s = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
	}
}
function cd(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - nn(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var _e = 0;
function $m(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vm,
	dd,
	Hm,
	Wm,
	qm,
	Xu = !1,
	To = [],
	lr = null,
	ur = null,
	cr = null,
	Ds = new Map(),
	Ms = new Map(),
	er = [],
	yw =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Ff(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			lr = null;
			break;
		case "dragenter":
		case "dragleave":
			ur = null;
			break;
		case "mouseover":
		case "mouseout":
			cr = null;
			break;
		case "pointerover":
		case "pointerout":
			Ds.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Ms.delete(t.pointerId);
	}
}
function rs(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i],
		  }),
		  t !== null && ((t = oo(t)), t !== null && dd(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function gw(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (lr = rs(lr, e, t, n, r, i)), !0;
		case "dragenter":
			return (ur = rs(ur, e, t, n, r, i)), !0;
		case "mouseover":
			return (cr = rs(cr, e, t, n, r, i)), !0;
		case "pointerover":
			var s = i.pointerId;
			return Ds.set(s, rs(Ds.get(s) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(s = i.pointerId), Ms.set(s, rs(Ms.get(s) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Km(e) {
	var t = Pr(e.target);
	if (t !== null) {
		var n = Jr(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Lm(n)), t !== null)) {
					(e.blockedOn = t),
						qm(e.priority, function () {
							Hm(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ko(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Ku = r), n.target.dispatchEvent(r), (Ku = null);
		} else return (t = oo(n)), t !== null && dd(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Uf(e, t, n) {
	Ko(e) && n.delete(t);
}
function vw() {
	(Xu = !1),
		lr !== null && Ko(lr) && (lr = null),
		ur !== null && Ko(ur) && (ur = null),
		cr !== null && Ko(cr) && (cr = null),
		Ds.forEach(Uf),
		Ms.forEach(Uf);
}
function is(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Xu ||
			((Xu = !0),
			jt.unstable_scheduleCallback(jt.unstable_NormalPriority, vw)));
}
function Fs(e) {
	function t(i) {
		return is(i, e);
	}
	if (0 < To.length) {
		is(To[0], e);
		for (var n = 1; n < To.length; n++) {
			var r = To[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		lr !== null && is(lr, e),
			ur !== null && is(ur, e),
			cr !== null && is(cr, e),
			Ds.forEach(t),
			Ms.forEach(t),
			n = 0;
		n < er.length;
		n++
	)
		(r = er[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < er.length && ((n = er[0]), n.blockedOn === null); )
		Km(n), n.blockedOn === null && er.shift();
}
var Ei = zn.ReactCurrentBatchConfig,
	ba = !0;
function ww(e, t, n, r) {
	var i = _e,
		s = Ei.transition;
	Ei.transition = null;
	try {
		(_e = 1), fd(e, t, n, r);
	} finally {
		(_e = i), (Ei.transition = s);
	}
}
function xw(e, t, n, r) {
	var i = _e,
		s = Ei.transition;
	Ei.transition = null;
	try {
		(_e = 4), fd(e, t, n, r);
	} finally {
		(_e = i), (Ei.transition = s);
	}
}
function fd(e, t, n, r) {
	if (ba) {
		var i = Zu(e, t, n, r);
		if (i === null) ru(e, t, r, Ea, n), Ff(e, r);
		else if (gw(i, e, t, n, r)) r.stopPropagation();
		else if ((Ff(e, r), t & 4 && -1 < yw.indexOf(e))) {
			for (; i !== null; ) {
				var s = oo(i);
				if (
					(s !== null && Vm(s),
					(s = Zu(e, t, n, r)),
					s === null && ru(e, t, r, Ea, n),
					s === i)
				)
					break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else ru(e, t, r, null, n);
	}
}
var Ea = null;
function Zu(e, t, n, r) {
	if (((Ea = null), (e = ld(r)), (e = Pr(e)), e !== null))
		if (((t = Jr(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Lm(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ea = e), null;
}
function Qm(e) {
	switch (e) {
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
			switch (aw()) {
				case ud:
					return 1;
				case Um:
					return 4;
				case wa:
				case lw:
					return 16;
				case Bm:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var sr = null,
	hd = null,
	Qo = null;
function Gm() {
	if (Qo) return Qo;
	var e,
		t = hd,
		n = t.length,
		r,
		i = "value" in sr ? sr.value : sr.textContent,
		s = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
	return (Qo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Go(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Io() {
	return !0;
}
function Bf() {
	return !1;
}
function Lt(e) {
	function t(n, r, i, s, o) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = o),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
			)
				? Io
				: Bf),
			(this.isPropagationStopped = Bf),
			this
		);
	}
	return (
		ze(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = Io));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = Io));
			},
			persist: function () {},
			isPersistent: Io,
		}),
		t
	);
}
var Wi = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	pd = Lt(Wi),
	so = ze({}, Wi, { view: 0, detail: 0 }),
	bw = Lt(so),
	Ql,
	Gl,
	ss,
	ol = ze({}, so, {
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
		getModifierState: md,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== ss &&
						(ss && e.type === "mousemove"
							? ((Ql = e.screenX - ss.screenX), (Gl = e.screenY - ss.screenY))
							: (Gl = Ql = 0),
						(ss = e)),
				  Ql);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Gl;
		},
	}),
	zf = Lt(ol),
	Ew = ze({}, ol, { dataTransfer: 0 }),
	Sw = Lt(Ew),
	_w = ze({}, so, { relatedTarget: 0 }),
	Jl = Lt(_w),
	Cw = ze({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	kw = Lt(Cw),
	Rw = ze({}, Wi, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Nw = Lt(Rw),
	Ow = ze({}, Wi, { data: 0 }),
	$f = Lt(Ow),
	Pw = {
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
	Tw = {
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
	Iw = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function jw(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Iw[e]) ? !!t[e] : !1;
}
function md() {
	return jw;
}
var Aw = ze({}, so, {
		key: function (e) {
			if (e.key) {
				var t = Pw[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Go(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Tw[e.keyCode] || "Unidentified"
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
		getModifierState: md,
		charCode: function (e) {
			return e.type === "keypress" ? Go(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Go(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	Lw = Lt(Aw),
	Dw = ze({}, ol, {
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
	Vf = Lt(Dw),
	Mw = ze({}, so, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: md,
	}),
	Fw = Lt(Mw),
	Uw = ze({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Bw = Lt(Uw),
	zw = ze({}, ol, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	$w = Lt(zw),
	Vw = [9, 13, 27, 32],
	yd = Ln && "CompositionEvent" in window,
	_s = null;
Ln && "documentMode" in document && (_s = document.documentMode);
var Hw = Ln && "TextEvent" in window && !_s,
	Jm = Ln && (!yd || (_s && 8 < _s && 11 >= _s)),
	Hf = String.fromCharCode(32),
	Wf = !1;
function Ym(e, t) {
	switch (e) {
		case "keyup":
			return Vw.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Xm(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var oi = !1;
function Ww(e, t) {
	switch (e) {
		case "compositionend":
			return Xm(t);
		case "keypress":
			return t.which !== 32 ? null : ((Wf = !0), Hf);
		case "textInput":
			return (e = t.data), e === Hf && Wf ? null : e;
		default:
			return null;
	}
}
function qw(e, t) {
	if (oi)
		return e === "compositionend" || (!yd && Ym(e, t))
			? ((e = Gm()), (Qo = hd = sr = null), (oi = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Jm && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Kw = {
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
function qf(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Kw[e.type] : t === "textarea";
}
function Zm(e, t, n, r) {
	Pm(r),
		(t = Sa(t, "onChange")),
		0 < t.length &&
			((n = new pd("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Cs = null,
	Us = null;
function Qw(e) {
	cy(e, 0);
}
function al(e) {
	var t = ui(e);
	if (Sm(t)) return e;
}
function Gw(e, t) {
	if (e === "change") return t;
}
var ey = !1;
if (Ln) {
	var Yl;
	if (Ln) {
		var Xl = "oninput" in document;
		if (!Xl) {
			var Kf = document.createElement("div");
			Kf.setAttribute("oninput", "return;"),
				(Xl = typeof Kf.oninput == "function");
		}
		Yl = Xl;
	} else Yl = !1;
	ey = Yl && (!document.documentMode || 9 < document.documentMode);
}
function Qf() {
	Cs && (Cs.detachEvent("onpropertychange", ty), (Us = Cs = null));
}
function ty(e) {
	if (e.propertyName === "value" && al(Us)) {
		var t = [];
		Zm(t, Us, e, ld(e)), Am(Qw, t);
	}
}
function Jw(e, t, n) {
	e === "focusin"
		? (Qf(), (Cs = t), (Us = n), Cs.attachEvent("onpropertychange", ty))
		: e === "focusout" && Qf();
}
function Yw(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return al(Us);
}
function Xw(e, t) {
	if (e === "click") return al(t);
}
function Zw(e, t) {
	if (e === "input" || e === "change") return al(t);
}
function ex(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == "function" ? Object.is : ex;
function Bs(e, t) {
	if (sn(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Lu.call(t, i) || !sn(e[i], t[i])) return !1;
	}
	return !0;
}
function Gf(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Jf(e, t) {
	var n = Gf(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
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
		n = Gf(n);
	}
}
function ny(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? ny(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function ry() {
	for (var e = window, t = ya(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ya(e.document);
	}
	return t;
}
function gd(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function tx(e) {
	var t = ry(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		ny(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && gd(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!e.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = Jf(n, s));
				var o = Jf(n, r);
				i &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					s > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var nx = Ln && "documentMode" in document && 11 >= document.documentMode,
	ai = null,
	ec = null,
	ks = null,
	tc = !1;
function Yf(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	tc ||
		ai == null ||
		ai !== ya(r) ||
		((r = ai),
		"selectionStart" in r && gd(r)
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
		(ks && Bs(ks, r)) ||
			((ks = r),
			(r = Sa(ec, "onSelect")),
			0 < r.length &&
				((t = new pd("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = ai))));
}
function jo(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var li = {
		animationend: jo("Animation", "AnimationEnd"),
		animationiteration: jo("Animation", "AnimationIteration"),
		animationstart: jo("Animation", "AnimationStart"),
		transitionend: jo("Transition", "TransitionEnd"),
	},
	Zl = {},
	iy = {};
Ln &&
	((iy = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete li.animationend.animation,
		delete li.animationiteration.animation,
		delete li.animationstart.animation),
	"TransitionEvent" in window || delete li.transitionend.transition);
function ll(e) {
	if (Zl[e]) return Zl[e];
	if (!li[e]) return e;
	var t = li[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in iy) return (Zl[e] = t[n]);
	return e;
}
var sy = ll("animationend"),
	oy = ll("animationiteration"),
	ay = ll("animationstart"),
	ly = ll("transitionend"),
	uy = new Map(),
	Xf =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Er(e, t) {
	uy.set(e, t), Gr(t, [e]);
}
for (var eu = 0; eu < Xf.length; eu++) {
	var tu = Xf[eu],
		rx = tu.toLowerCase(),
		ix = tu[0].toUpperCase() + tu.slice(1);
	Er(rx, "on" + ix);
}
Er(sy, "onAnimationEnd");
Er(oy, "onAnimationIteration");
Er(ay, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(ly, "onTransitionEnd");
Pi("onMouseEnter", ["mouseout", "mouseover"]);
Pi("onMouseLeave", ["mouseout", "mouseover"]);
Pi("onPointerEnter", ["pointerout", "pointerover"]);
Pi("onPointerLeave", ["pointerout", "pointerover"]);
Gr(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gr(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
Gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gr(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gr(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gr(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vs =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	sx = new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));
function Zf(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), rw(r, t, void 0, e), (e.currentTarget = null);
}
function cy(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						l = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
					Zf(i, a, u), (s = l);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(l = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						l !== s && i.isPropagationStopped())
					)
						break e;
					Zf(i, a, u), (s = l);
				}
		}
	}
	if (va) throw ((e = Ju), (va = !1), (Ju = null), e);
}
function je(e, t) {
	var n = t[oc];
	n === void 0 && (n = t[oc] = new Set());
	var r = e + "__bubble";
	n.has(r) || (dy(t, e, 2, !1), n.add(r));
}
function nu(e, t, n) {
	var r = 0;
	t && (r |= 4), dy(n, e, r, t);
}
var Ao = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
	if (!e[Ao]) {
		(e[Ao] = !0),
			vm.forEach(function (n) {
				n !== "selectionchange" && (sx.has(n) || nu(n, !1, e), nu(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ao] || ((t[Ao] = !0), nu("selectionchange", !1, t));
	}
}
function dy(e, t, n, r) {
	switch (Qm(t)) {
		case 1:
			var i = ww;
			break;
		case 4:
			i = xw;
			break;
		default:
			i = fd;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Gu ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function ru(e, t, n, r, i) {
	var s = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var l = o.tag;
						if (
							(l === 3 || l === 4) &&
							((l = o.stateNode.containerInfo),
							l === i || (l.nodeType === 8 && l.parentNode === i))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = Pr(a)), o === null)) return;
					if (((l = o.tag), l === 5 || l === 6)) {
						r = s = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Am(function () {
		var u = s,
			d = ld(n),
			f = [];
		e: {
			var p = uy.get(e);
			if (p !== void 0) {
				var b = pd,
					w = e;
				switch (e) {
					case "keypress":
						if (Go(n) === 0) break e;
					case "keydown":
					case "keyup":
						b = Lw;
						break;
					case "focusin":
						(w = "focus"), (b = Jl);
						break;
					case "focusout":
						(w = "blur"), (b = Jl);
						break;
					case "beforeblur":
					case "afterblur":
						b = Jl;
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
						b = zf;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						b = Sw;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						b = Fw;
						break;
					case sy:
					case oy:
					case ay:
						b = kw;
						break;
					case ly:
						b = Bw;
						break;
					case "scroll":
						b = bw;
						break;
					case "wheel":
						b = $w;
						break;
					case "copy":
					case "cut":
					case "paste":
						b = Nw;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						b = Vf;
				}
				var E = (t & 4) !== 0,
					C = !E && e === "scroll",
					g = E ? (p !== null ? p + "Capture" : null) : p;
				E = [];
				for (var h = u, v; h !== null; ) {
					v = h;
					var m = v.stateNode;
					if (
						(v.tag === 5 &&
							m !== null &&
							((v = m),
							g !== null && ((m = Ls(h, g)), m != null && E.push($s(h, m, v)))),
						C)
					)
						break;
					h = h.return;
				}
				0 < E.length &&
					((p = new b(p, w, null, n, d)), f.push({ event: p, listeners: E }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === "mouseover" || e === "pointerover"),
					(b = e === "mouseout" || e === "pointerout"),
					p &&
						n !== Ku &&
						(w = n.relatedTarget || n.fromElement) &&
						(Pr(w) || w[Dn]))
				)
					break e;
				if (
					(b || p) &&
					((p =
						d.window === d
							? d
							: (p = d.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					b
						? ((w = n.relatedTarget || n.toElement),
						  (b = u),
						  (w = w ? Pr(w) : null),
						  w !== null &&
								((C = Jr(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((b = null), (w = u)),
					b !== w)
				) {
					if (
						((E = zf),
						(m = "onMouseLeave"),
						(g = "onMouseEnter"),
						(h = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((E = Vf),
							(m = "onPointerLeave"),
							(g = "onPointerEnter"),
							(h = "pointer")),
						(C = b == null ? p : ui(b)),
						(v = w == null ? p : ui(w)),
						(p = new E(m, h + "leave", b, n, d)),
						(p.target = C),
						(p.relatedTarget = v),
						(m = null),
						Pr(d) === u &&
							((E = new E(g, h + "enter", w, n, d)),
							(E.target = v),
							(E.relatedTarget = C),
							(m = E)),
						(C = m),
						b && w)
					)
						t: {
							for (E = b, g = w, h = 0, v = E; v; v = ti(v)) h++;
							for (v = 0, m = g; m; m = ti(m)) v++;
							for (; 0 < h - v; ) (E = ti(E)), h--;
							for (; 0 < v - h; ) (g = ti(g)), v--;
							for (; h--; ) {
								if (E === g || (g !== null && E === g.alternate)) break t;
								(E = ti(E)), (g = ti(g));
							}
							E = null;
						}
					else E = null;
					b !== null && eh(f, p, b, E, !1),
						w !== null && C !== null && eh(f, C, w, E, !0);
				}
			}
			e: {
				if (
					((p = u ? ui(u) : window),
					(b = p.nodeName && p.nodeName.toLowerCase()),
					b === "select" || (b === "input" && p.type === "file"))
				)
					var _ = Gw;
				else if (qf(p))
					if (ey) _ = Zw;
					else {
						_ = Yw;
						var O = Jw;
					}
				else
					(b = p.nodeName) &&
						b.toLowerCase() === "input" &&
						(p.type === "checkbox" || p.type === "radio") &&
						(_ = Xw);
				if (_ && (_ = _(e, u))) {
					Zm(f, _, n, d);
					break e;
				}
				O && O(e, p, u),
					e === "focusout" &&
						(O = p._wrapperState) &&
						O.controlled &&
						p.type === "number" &&
						$u(p, "number", p.value);
			}
			switch (((O = u ? ui(u) : window), e)) {
				case "focusin":
					(qf(O) || O.contentEditable === "true") &&
						((ai = O), (ec = u), (ks = null));
					break;
				case "focusout":
					ks = ec = ai = null;
					break;
				case "mousedown":
					tc = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(tc = !1), Yf(f, n, d);
					break;
				case "selectionchange":
					if (nx) break;
				case "keydown":
				case "keyup":
					Yf(f, n, d);
			}
			var P;
			if (yd)
				e: {
					switch (e) {
						case "compositionstart":
							var N = "onCompositionStart";
							break e;
						case "compositionend":
							N = "onCompositionEnd";
							break e;
						case "compositionupdate":
							N = "onCompositionUpdate";
							break e;
					}
					N = void 0;
				}
			else
				oi
					? Ym(e, n) && (N = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
			N &&
				(Jm &&
					n.locale !== "ko" &&
					(oi || N !== "onCompositionStart"
						? N === "onCompositionEnd" && oi && (P = Gm())
						: ((sr = d),
						  (hd = "value" in sr ? sr.value : sr.textContent),
						  (oi = !0))),
				(O = Sa(u, N)),
				0 < O.length &&
					((N = new $f(N, e, null, n, d)),
					f.push({ event: N, listeners: O }),
					P ? (N.data = P) : ((P = Xm(n)), P !== null && (N.data = P)))),
				(P = Hw ? Ww(e, n) : qw(e, n)) &&
					((u = Sa(u, "onBeforeInput")),
					0 < u.length &&
						((d = new $f("onBeforeInput", "beforeinput", null, n, d)),
						f.push({ event: d, listeners: u }),
						(d.data = P)));
		}
		cy(f, t);
	});
}
function $s(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Sa(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = Ls(e, n)),
			s != null && r.unshift($s(e, s, i)),
			(s = Ls(e, t)),
			s != null && r.push($s(e, s, i))),
			(e = e.return);
	}
	return r;
}
function ti(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function eh(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((l = Ls(n, s)), l != null && o.unshift($s(n, l, a)))
				: i || ((l = Ls(n, s)), l != null && o.push($s(n, l, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var ox = /\r\n?/g,
	ax = /\u0000|\uFFFD/g;
function th(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			ox,
			`
`
		)
		.replace(ax, "");
}
function Lo(e, t, n) {
	if (((t = th(t)), th(e) !== t && n)) throw Error(z(425));
}
function _a() {}
var nc = null,
	rc = null;
function ic(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var sc = typeof setTimeout == "function" ? setTimeout : void 0,
	lx = typeof clearTimeout == "function" ? clearTimeout : void 0,
	nh = typeof Promise == "function" ? Promise : void 0,
	ux =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof nh < "u"
			? function (e) {
					return nh.resolve(null).then(e).catch(cx);
			  }
			: sc;
function cx(e) {
	setTimeout(function () {
		throw e;
	});
}
function iu(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Fs(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Fs(t);
}
function dr(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function rh(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var qi = Math.random().toString(36).slice(2),
	cn = "__reactFiber$" + qi,
	Vs = "__reactProps$" + qi,
	Dn = "__reactContainer$" + qi,
	oc = "__reactEvents$" + qi,
	dx = "__reactListeners$" + qi,
	fx = "__reactHandles$" + qi;
function Pr(e) {
	var t = e[cn];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Dn] || n[cn])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = rh(e); e !== null; ) {
					if ((n = e[cn])) return n;
					e = rh(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function oo(e) {
	return (
		(e = e[cn] || e[Dn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function ui(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(z(33));
}
function ul(e) {
	return e[Vs] || null;
}
var ac = [],
	ci = -1;
function Sr(e) {
	return { current: e };
}
function Le(e) {
	0 > ci || ((e.current = ac[ci]), (ac[ci] = null), ci--);
}
function Ie(e, t) {
	ci++, (ac[ci] = e.current), (e.current = t);
}
var xr = {},
	ht = Sr(xr),
	Ct = Sr(!1),
	Br = xr;
function Ti(e, t) {
	var n = e.type.contextTypes;
	if (!n) return xr;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		s;
	for (s in n) i[s] = t[s];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function kt(e) {
	return (e = e.childContextTypes), e != null;
}
function Ca() {
	Le(Ct), Le(ht);
}
function ih(e, t, n) {
	if (ht.current !== xr) throw Error(z(168));
	Ie(ht, t), Ie(Ct, n);
}
function fy(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(z(108, J0(e) || "Unknown", i));
	return ze({}, n, r);
}
function ka(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xr),
		(Br = ht.current),
		Ie(ht, e),
		Ie(Ct, Ct.current),
		!0
	);
}
function sh(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(z(169));
	n
		? ((e = fy(e, t, Br)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  Le(Ct),
		  Le(ht),
		  Ie(ht, e))
		: Le(Ct),
		Ie(Ct, n);
}
var Cn = null,
	cl = !1,
	su = !1;
function hy(e) {
	Cn === null ? (Cn = [e]) : Cn.push(e);
}
function hx(e) {
	(cl = !0), hy(e);
}
function _r() {
	if (!su && Cn !== null) {
		su = !0;
		var e = 0,
			t = _e;
		try {
			var n = Cn;
			for (_e = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Cn = null), (cl = !1);
		} catch (i) {
			throw (Cn !== null && (Cn = Cn.slice(e + 1)), Fm(ud, _r), i);
		} finally {
			(_e = t), (su = !1);
		}
	}
	return null;
}
var di = [],
	fi = 0,
	Ra = null,
	Na = 0,
	Bt = [],
	zt = 0,
	zr = null,
	Nn = 1,
	On = "";
function Rr(e, t) {
	(di[fi++] = Na), (di[fi++] = Ra), (Ra = e), (Na = t);
}
function py(e, t, n) {
	(Bt[zt++] = Nn), (Bt[zt++] = On), (Bt[zt++] = zr), (zr = e);
	var r = Nn;
	e = On;
	var i = 32 - nn(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var s = 32 - nn(t) + i;
	if (30 < s) {
		var o = i - (i % 5);
		(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(Nn = (1 << (32 - nn(t) + i)) | (n << i) | r),
			(On = s + e);
	} else (Nn = (1 << s) | (n << i) | r), (On = e);
}
function vd(e) {
	e.return !== null && (Rr(e, 1), py(e, 1, 0));
}
function wd(e) {
	for (; e === Ra; )
		(Ra = di[--fi]), (di[fi] = null), (Na = di[--fi]), (di[fi] = null);
	for (; e === zr; )
		(zr = Bt[--zt]),
			(Bt[zt] = null),
			(On = Bt[--zt]),
			(Bt[zt] = null),
			(Nn = Bt[--zt]),
			(Bt[zt] = null);
}
var It = null,
	Tt = null,
	Me = !1,
	en = null;
function my(e, t) {
	var n = $t(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function oh(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (It = e), (Tt = dr(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (It = e), (Tt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = zr !== null ? { id: Nn, overflow: On } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = $t(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (It = e),
					  (Tt = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function lc(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uc(e) {
	if (Me) {
		var t = Tt;
		if (t) {
			var n = t;
			if (!oh(e, t)) {
				if (lc(e)) throw Error(z(418));
				t = dr(n.nextSibling);
				var r = It;
				t && oh(e, t)
					? my(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (Me = !1), (It = e));
			}
		} else {
			if (lc(e)) throw Error(z(418));
			(e.flags = (e.flags & -4097) | 2), (Me = !1), (It = e);
		}
	}
}
function ah(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	It = e;
}
function Do(e) {
	if (e !== It) return !1;
	if (!Me) return ah(e), (Me = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !ic(e.type, e.memoizedProps))),
		t && (t = Tt))
	) {
		if (lc(e)) throw (yy(), Error(z(418)));
		for (; t; ) my(e, t), (t = dr(t.nextSibling));
	}
	if ((ah(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(z(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Tt = dr(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Tt = null;
		}
	} else Tt = It ? dr(e.stateNode.nextSibling) : null;
	return !0;
}
function yy() {
	for (var e = Tt; e; ) e = dr(e.nextSibling);
}
function Ii() {
	(Tt = It = null), (Me = !1);
}
function xd(e) {
	en === null ? (en = [e]) : en.push(e);
}
var px = zn.ReactCurrentBatchConfig;
function Yt(e, t) {
	if (e && e.defaultProps) {
		(t = ze({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Oa = Sr(null),
	Pa = null,
	hi = null,
	bd = null;
function Ed() {
	bd = hi = Pa = null;
}
function Sd(e) {
	var t = Oa.current;
	Le(Oa), (e._currentValue = t);
}
function cc(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Si(e, t) {
	(Pa = e),
		(bd = hi = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (_t = !0), (e.firstContext = null));
}
function Wt(e) {
	var t = e._currentValue;
	if (bd !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
			if (Pa === null) throw Error(z(308));
			(hi = e), (Pa.dependencies = { lanes: 0, firstContext: e });
		} else hi = hi.next = e;
	return t;
}
var Tr = null;
function _d(e) {
	Tr === null ? (Tr = [e]) : Tr.push(e);
}
function gy(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), _d(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		Mn(e, r)
	);
}
function Mn(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function Cd(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function vy(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function In(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function fr(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), be & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			Mn(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), _d(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Mn(e, n)
	);
}
function Jo(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
	}
}
function lh(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			s = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
			} while (n !== null);
			s === null ? (i = s = t) : (s = s.next = t);
		} else i = s = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function Ta(e, t, n, r) {
	var i = e.updateQueue;
	Xn = !1;
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var l = a,
			u = l.next;
		(l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== o &&
				(a === null ? (d.firstBaseUpdate = u) : (a.next = u),
				(d.lastBaseUpdate = l)));
	}
	if (s !== null) {
		var f = i.baseState;
		(o = 0), (d = u = l = null), (a = s);
		do {
			var p = a.lane,
				b = a.eventTime;
			if ((r & p) === p) {
				d !== null &&
					(d = d.next =
						{
							eventTime: b,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var w = e,
						E = a;
					switch (((p = t), (b = n), E.tag)) {
						case 1:
							if (((w = E.payload), typeof w == "function")) {
								f = w.call(b, f, p);
								break e;
							}
							f = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = E.payload),
								(p = typeof w == "function" ? w.call(b, f, p) : w),
								p == null)
							)
								break e;
							f = ze({}, f, p);
							break e;
						case 2:
							Xn = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(p = i.effects),
					p === null ? (i.effects = [a]) : p.push(a));
			} else
				(b = {
					eventTime: b,
					lane: p,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					d === null ? ((u = d = b), (l = f)) : (d = d.next = b),
					(o |= p);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(p = a),
					(a = p.next),
					(p.next = null),
					(i.lastBaseUpdate = p),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (l = f),
			(i.baseState = l),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = d),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (o |= i.lane), (i = i.next);
			while (i !== t);
		} else s === null && (i.shared.lanes = 0);
		(Vr |= o), (e.lanes = o), (e.memoizedState = f);
	}
}
function uh(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(z(191, i));
				i.call(r);
			}
		}
}
var wy = new gm.Component().refs;
function dc(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ze({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Jr(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = wt(),
			i = pr(e),
			s = In(r, i);
		(s.payload = t),
			n != null && (s.callback = n),
			(t = fr(e, s, i)),
			t !== null && (rn(t, e, i, r), Jo(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = wt(),
			i = pr(e),
			s = In(r, i);
		(s.tag = 1),
			(s.payload = t),
			n != null && (s.callback = n),
			(t = fr(e, s, i)),
			t !== null && (rn(t, e, i, r), Jo(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = wt(),
			r = pr(e),
			i = In(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = fr(e, i, r)),
			t !== null && (rn(t, e, r, n), Jo(t, e, r));
	},
};
function ch(e, t, n, r, i, s, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, s, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !Bs(n, r) || !Bs(i, s)
			: !0
	);
}
function xy(e, t, n) {
	var r = !1,
		i = xr,
		s = t.contextType;
	return (
		typeof s == "object" && s !== null
			? (s = Wt(s))
			: ((i = kt(t) ? Br : ht.current),
			  (r = t.contextTypes),
			  (s = (r = r != null) ? Ti(e, i) : xr)),
		(t = new t(n, s)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = dl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = s)),
		t
	);
}
function dh(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = wy), Cd(e);
	var s = t.contextType;
	typeof s == "object" && s !== null
		? (i.context = Wt(s))
		: ((s = kt(t) ? Br : ht.current), (i.context = Ti(e, s))),
		(i.state = e.memoizedState),
		(s = t.getDerivedStateFromProps),
		typeof s == "function" && (dc(e, t, s, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && dl.enqueueReplaceState(i, i.state, null),
			Ta(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function os(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(z(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(z(147, e));
			var i = r,
				s = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === s
				? t.ref
				: ((t = function (o) {
						var a = i.refs;
						a === wy && (a = i.refs = {}),
							o === null ? delete a[s] : (a[s] = o);
				  }),
				  (t._stringRef = s),
				  t);
		}
		if (typeof e != "string") throw Error(z(284));
		if (!n._owner) throw Error(z(290, e));
	}
	return e;
}
function Mo(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			z(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function fh(e) {
	var t = e._init;
	return t(e._payload);
}
function by(e) {
	function t(g, h) {
		if (e) {
			var v = g.deletions;
			v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
		}
	}
	function n(g, h) {
		if (!e) return null;
		for (; h !== null; ) t(g, h), (h = h.sibling);
		return null;
	}
	function r(g, h) {
		for (g = new Map(); h !== null; )
			h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
		return g;
	}
	function i(g, h) {
		return (g = mr(g, h)), (g.index = 0), (g.sibling = null), g;
	}
	function s(g, h, v) {
		return (
			(g.index = v),
			e
				? ((v = g.alternate),
				  v !== null
						? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
						: ((g.flags |= 2), h))
				: ((g.flags |= 1048576), h)
		);
	}
	function o(g) {
		return e && g.alternate === null && (g.flags |= 2), g;
	}
	function a(g, h, v, m) {
		return h === null || h.tag !== 6
			? ((h = fu(v, g.mode, m)), (h.return = g), h)
			: ((h = i(h, v)), (h.return = g), h);
	}
	function l(g, h, v, m) {
		var _ = v.type;
		return _ === si
			? d(g, h, v.props.children, m, v.key)
			: h !== null &&
			  (h.elementType === _ ||
					(typeof _ == "object" &&
						_ !== null &&
						_.$$typeof === Yn &&
						fh(_) === h.type))
			? ((m = i(h, v.props)), (m.ref = os(g, h, v)), (m.return = g), m)
			: ((m = na(v.type, v.key, v.props, null, g.mode, m)),
			  (m.ref = os(g, h, v)),
			  (m.return = g),
			  m);
	}
	function u(g, h, v, m) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== v.containerInfo ||
			h.stateNode.implementation !== v.implementation
			? ((h = hu(v, g.mode, m)), (h.return = g), h)
			: ((h = i(h, v.children || [])), (h.return = g), h);
	}
	function d(g, h, v, m, _) {
		return h === null || h.tag !== 7
			? ((h = Fr(v, g.mode, m, _)), (h.return = g), h)
			: ((h = i(h, v)), (h.return = g), h);
	}
	function f(g, h, v) {
		if ((typeof h == "string" && h !== "") || typeof h == "number")
			return (h = fu("" + h, g.mode, v)), (h.return = g), h;
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case ko:
					return (
						(v = na(h.type, h.key, h.props, null, g.mode, v)),
						(v.ref = os(g, null, h)),
						(v.return = g),
						v
					);
				case ii:
					return (h = hu(h, g.mode, v)), (h.return = g), h;
				case Yn:
					var m = h._init;
					return f(g, m(h._payload), v);
			}
			if (ys(h) || ts(h))
				return (h = Fr(h, g.mode, v, null)), (h.return = g), h;
			Mo(g, h);
		}
		return null;
	}
	function p(g, h, v, m) {
		var _ = h !== null ? h.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return _ !== null ? null : a(g, h, "" + v, m);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case ko:
					return v.key === _ ? l(g, h, v, m) : null;
				case ii:
					return v.key === _ ? u(g, h, v, m) : null;
				case Yn:
					return (_ = v._init), p(g, h, _(v._payload), m);
			}
			if (ys(v) || ts(v)) return _ !== null ? null : d(g, h, v, m, null);
			Mo(g, v);
		}
		return null;
	}
	function b(g, h, v, m, _) {
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return (g = g.get(v) || null), a(h, g, "" + m, _);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case ko:
					return (g = g.get(m.key === null ? v : m.key) || null), l(h, g, m, _);
				case ii:
					return (g = g.get(m.key === null ? v : m.key) || null), u(h, g, m, _);
				case Yn:
					var O = m._init;
					return b(g, h, v, O(m._payload), _);
			}
			if (ys(m) || ts(m)) return (g = g.get(v) || null), d(h, g, m, _, null);
			Mo(h, m);
		}
		return null;
	}
	function w(g, h, v, m) {
		for (
			var _ = null, O = null, P = h, N = (h = 0), V = null;
			P !== null && N < v.length;
			N++
		) {
			P.index > N ? ((V = P), (P = null)) : (V = P.sibling);
			var K = p(g, P, v[N], m);
			if (K === null) {
				P === null && (P = V);
				break;
			}
			e && P && K.alternate === null && t(g, P),
				(h = s(K, h, N)),
				O === null ? (_ = K) : (O.sibling = K),
				(O = K),
				(P = V);
		}
		if (N === v.length) return n(g, P), Me && Rr(g, N), _;
		if (P === null) {
			for (; N < v.length; N++)
				(P = f(g, v[N], m)),
					P !== null &&
						((h = s(P, h, N)), O === null ? (_ = P) : (O.sibling = P), (O = P));
			return Me && Rr(g, N), _;
		}
		for (P = r(g, P); N < v.length; N++)
			(V = b(P, g, N, v[N], m)),
				V !== null &&
					(e && V.alternate !== null && P.delete(V.key === null ? N : V.key),
					(h = s(V, h, N)),
					O === null ? (_ = V) : (O.sibling = V),
					(O = V));
		return (
			e &&
				P.forEach(function (ie) {
					return t(g, ie);
				}),
			Me && Rr(g, N),
			_
		);
	}
	function E(g, h, v, m) {
		var _ = ts(v);
		if (typeof _ != "function") throw Error(z(150));
		if (((v = _.call(v)), v == null)) throw Error(z(151));
		for (
			var O = (_ = null), P = h, N = (h = 0), V = null, K = v.next();
			P !== null && !K.done;
			N++, K = v.next()
		) {
			P.index > N ? ((V = P), (P = null)) : (V = P.sibling);
			var ie = p(g, P, K.value, m);
			if (ie === null) {
				P === null && (P = V);
				break;
			}
			e && P && ie.alternate === null && t(g, P),
				(h = s(ie, h, N)),
				O === null ? (_ = ie) : (O.sibling = ie),
				(O = ie),
				(P = V);
		}
		if (K.done) return n(g, P), Me && Rr(g, N), _;
		if (P === null) {
			for (; !K.done; N++, K = v.next())
				(K = f(g, K.value, m)),
					K !== null &&
						((h = s(K, h, N)), O === null ? (_ = K) : (O.sibling = K), (O = K));
			return Me && Rr(g, N), _;
		}
		for (P = r(g, P); !K.done; N++, K = v.next())
			(K = b(P, g, N, K.value, m)),
				K !== null &&
					(e && K.alternate !== null && P.delete(K.key === null ? N : K.key),
					(h = s(K, h, N)),
					O === null ? (_ = K) : (O.sibling = K),
					(O = K));
		return (
			e &&
				P.forEach(function (Q) {
					return t(g, Q);
				}),
			Me && Rr(g, N),
			_
		);
	}
	function C(g, h, v, m) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === si &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case ko:
					e: {
						for (var _ = v.key, O = h; O !== null; ) {
							if (O.key === _) {
								if (((_ = v.type), _ === si)) {
									if (O.tag === 7) {
										n(g, O.sibling),
											(h = i(O, v.props.children)),
											(h.return = g),
											(g = h);
										break e;
									}
								} else if (
									O.elementType === _ ||
									(typeof _ == "object" &&
										_ !== null &&
										_.$$typeof === Yn &&
										fh(_) === O.type)
								) {
									n(g, O.sibling),
										(h = i(O, v.props)),
										(h.ref = os(g, O, v)),
										(h.return = g),
										(g = h);
									break e;
								}
								n(g, O);
								break;
							} else t(g, O);
							O = O.sibling;
						}
						v.type === si
							? ((h = Fr(v.props.children, g.mode, m, v.key)),
							  (h.return = g),
							  (g = h))
							: ((m = na(v.type, v.key, v.props, null, g.mode, m)),
							  (m.ref = os(g, h, v)),
							  (m.return = g),
							  (g = m));
					}
					return o(g);
				case ii:
					e: {
						for (O = v.key; h !== null; ) {
							if (h.key === O)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === v.containerInfo &&
									h.stateNode.implementation === v.implementation
								) {
									n(g, h.sibling),
										(h = i(h, v.children || [])),
										(h.return = g),
										(g = h);
									break e;
								} else {
									n(g, h);
									break;
								}
							else t(g, h);
							h = h.sibling;
						}
						(h = hu(v, g.mode, m)), (h.return = g), (g = h);
					}
					return o(g);
				case Yn:
					return (O = v._init), C(g, h, O(v._payload), m);
			}
			if (ys(v)) return w(g, h, v, m);
			if (ts(v)) return E(g, h, v, m);
			Mo(g, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  h !== null && h.tag === 6
					? (n(g, h.sibling), (h = i(h, v)), (h.return = g), (g = h))
					: (n(g, h), (h = fu(v, g.mode, m)), (h.return = g), (g = h)),
			  o(g))
			: n(g, h);
	}
	return C;
}
var ji = by(!0),
	Ey = by(!1),
	ao = {},
	pn = Sr(ao),
	Hs = Sr(ao),
	Ws = Sr(ao);
function Ir(e) {
	if (e === ao) throw Error(z(174));
	return e;
}
function kd(e, t) {
	switch ((Ie(Ws, t), Ie(Hs, e), Ie(pn, ao), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Hu(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Hu(t, e));
	}
	Le(pn), Ie(pn, t);
}
function Ai() {
	Le(pn), Le(Hs), Le(Ws);
}
function Sy(e) {
	Ir(Ws.current);
	var t = Ir(pn.current),
		n = Hu(t, e.type);
	t !== n && (Ie(Hs, e), Ie(pn, n));
}
function Rd(e) {
	Hs.current === e && (Le(pn), Le(Hs));
}
var Ue = Sr(0);
function Ia(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var ou = [];
function Nd() {
	for (var e = 0; e < ou.length; e++)
		ou[e]._workInProgressVersionPrimary = null;
	ou.length = 0;
}
var Yo = zn.ReactCurrentDispatcher,
	au = zn.ReactCurrentBatchConfig,
	$r = 0,
	Be = null,
	Ze = null,
	rt = null,
	ja = !1,
	Rs = !1,
	qs = 0,
	mx = 0;
function ct() {
	throw Error(z(321));
}
function Od(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!sn(e[n], t[n])) return !1;
	return !0;
}
function Pd(e, t, n, r, i, s) {
	if (
		(($r = s),
		(Be = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Yo.current = e === null || e.memoizedState === null ? wx : xx),
		(e = n(r, i)),
		Rs)
	) {
		s = 0;
		do {
			if (((Rs = !1), (qs = 0), 25 <= s)) throw Error(z(301));
			(s += 1),
				(rt = Ze = null),
				(t.updateQueue = null),
				(Yo.current = bx),
				(e = n(r, i));
		} while (Rs);
	}
	if (
		((Yo.current = Aa),
		(t = Ze !== null && Ze.next !== null),
		($r = 0),
		(rt = Ze = Be = null),
		(ja = !1),
		t)
	)
		throw Error(z(300));
	return e;
}
function Td() {
	var e = qs !== 0;
	return (qs = 0), e;
}
function un() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return rt === null ? (Be.memoizedState = rt = e) : (rt = rt.next = e), rt;
}
function qt() {
	if (Ze === null) {
		var e = Be.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Ze.next;
	var t = rt === null ? Be.memoizedState : rt.next;
	if (t !== null) (rt = t), (Ze = e);
	else {
		if (e === null) throw Error(z(310));
		(Ze = e),
			(e = {
				memoizedState: Ze.memoizedState,
				baseState: Ze.baseState,
				baseQueue: Ze.baseQueue,
				queue: Ze.queue,
				next: null,
			}),
			rt === null ? (Be.memoizedState = rt = e) : (rt = rt.next = e);
	}
	return rt;
}
function Ks(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function lu(e) {
	var t = qt(),
		n = t.queue;
	if (n === null) throw Error(z(311));
	n.lastRenderedReducer = e;
	var r = Ze,
		i = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (i !== null) {
			var o = i.next;
			(i.next = s.next), (s.next = o);
		}
		(r.baseQueue = i = s), (n.pending = null);
	}
	if (i !== null) {
		(s = i.next), (r = r.baseState);
		var a = (o = null),
			l = null,
			u = s;
		do {
			var d = u.lane;
			if (($r & d) === d)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
					(Be.lanes |= d),
					(Vr |= d);
			}
			u = u.next;
		} while (u !== null && u !== s);
		l === null ? (o = r) : (l.next = a),
			sn(r, t.memoizedState) || (_t = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = l),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (s = i.lane), (Be.lanes |= s), (Vr |= s), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function uu(e) {
	var t = qt(),
		n = t.queue;
	if (n === null) throw Error(z(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		s = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = (i = i.next);
		do (s = e(s, o.action)), (o = o.next);
		while (o !== i);
		sn(s, t.memoizedState) || (_t = !0),
			(t.memoizedState = s),
			t.baseQueue === null && (t.baseState = s),
			(n.lastRenderedState = s);
	}
	return [s, r];
}
function _y() {}
function Cy(e, t) {
	var n = Be,
		r = qt(),
		i = t(),
		s = !sn(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (_t = !0)),
		(r = r.queue),
		Id(Ny.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || s || (rt !== null && rt.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Qs(9, Ry.bind(null, n, r, i, t), void 0, null),
			it === null)
		)
			throw Error(z(349));
		$r & 30 || ky(n, t, i);
	}
	return i;
}
function ky(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Be.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Be.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ry(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Oy(t) && Py(e);
}
function Ny(e, t, n) {
	return n(function () {
		Oy(t) && Py(e);
	});
}
function Oy(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !sn(e, n);
	} catch {
		return !0;
	}
}
function Py(e) {
	var t = Mn(e, 1);
	t !== null && rn(t, e, 1, -1);
}
function hh(e) {
	var t = un();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ks,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = vx.bind(null, Be, e)),
		[t.memoizedState, e]
	);
}
function Qs(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Be.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Be.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Ty() {
	return qt().memoizedState;
}
function Xo(e, t, n, r) {
	var i = un();
	(Be.flags |= e),
		(i.memoizedState = Qs(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
	var i = qt();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (Ze !== null) {
		var o = Ze.memoizedState;
		if (((s = o.destroy), r !== null && Od(r, o.deps))) {
			i.memoizedState = Qs(t, n, s, r);
			return;
		}
	}
	(Be.flags |= e), (i.memoizedState = Qs(1 | t, n, s, r));
}
function ph(e, t) {
	return Xo(8390656, 8, e, t);
}
function Id(e, t) {
	return fl(2048, 8, e, t);
}
function Iy(e, t) {
	return fl(4, 2, e, t);
}
function jy(e, t) {
	return fl(4, 4, e, t);
}
function Ay(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Ly(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), fl(4, 4, Ay.bind(null, t, e), n)
	);
}
function jd() {}
function Dy(e, t) {
	var n = qt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Od(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function My(e, t) {
	var n = qt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Od(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fy(e, t, n) {
	return $r & 21
		? (sn(n, t) || ((n = zm()), (Be.lanes |= n), (Vr |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (_t = !0)), (e.memoizedState = n));
}
function yx(e, t) {
	var n = _e;
	(_e = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = au.transition;
	au.transition = {};
	try {
		e(!1), t();
	} finally {
		(_e = n), (au.transition = r);
	}
}
function Uy() {
	return qt().memoizedState;
}
function gx(e, t, n) {
	var r = pr(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		By(e))
	)
		zy(t, n);
	else if (((n = gy(e, t, n, r)), n !== null)) {
		var i = wt();
		rn(n, e, r, i), $y(n, t, r);
	}
}
function vx(e, t, n) {
	var r = pr(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (By(e)) zy(t, i);
	else {
		var s = e.alternate;
		if (
			e.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = t.lastRenderedReducer), s !== null)
		)
			try {
				var o = t.lastRenderedState,
					a = s(o, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), sn(a, o))) {
					var l = t.interleaved;
					l === null
						? ((i.next = i), _d(t))
						: ((i.next = l.next), (l.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = gy(e, t, i, r)),
			n !== null && ((i = wt()), rn(n, e, r, i), $y(n, t, r));
	}
}
function By(e) {
	var t = e.alternate;
	return e === Be || (t !== null && t === Be);
}
function zy(e, t) {
	Rs = ja = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function $y(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
	}
}
var Aa = {
		readContext: Wt,
		useCallback: ct,
		useContext: ct,
		useEffect: ct,
		useImperativeHandle: ct,
		useInsertionEffect: ct,
		useLayoutEffect: ct,
		useMemo: ct,
		useReducer: ct,
		useRef: ct,
		useState: ct,
		useDebugValue: ct,
		useDeferredValue: ct,
		useTransition: ct,
		useMutableSource: ct,
		useSyncExternalStore: ct,
		useId: ct,
		unstable_isNewReconciler: !1,
	},
	wx = {
		readContext: Wt,
		useCallback: function (e, t) {
			return (un().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Wt,
		useEffect: ph,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Xo(4194308, 4, Ay.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Xo(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Xo(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = un();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = un();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = gx.bind(null, Be, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = un();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: hh,
		useDebugValue: jd,
		useDeferredValue: function (e) {
			return (un().memoizedState = e);
		},
		useTransition: function () {
			var e = hh(!1),
				t = e[0];
			return (e = yx.bind(null, e[1])), (un().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Be,
				i = un();
			if (Me) {
				if (n === void 0) throw Error(z(407));
				n = n();
			} else {
				if (((n = t()), it === null)) throw Error(z(349));
				$r & 30 || ky(r, t, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: t };
			return (
				(i.queue = s),
				ph(Ny.bind(null, r, s, e), [e]),
				(r.flags |= 2048),
				Qs(9, Ry.bind(null, r, s, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = un(),
				t = it.identifierPrefix;
			if (Me) {
				var n = On,
					r = Nn;
				(n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = qs++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = mx++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	xx = {
		readContext: Wt,
		useCallback: Dy,
		useContext: Wt,
		useEffect: Id,
		useImperativeHandle: Ly,
		useInsertionEffect: Iy,
		useLayoutEffect: jy,
		useMemo: My,
		useReducer: lu,
		useRef: Ty,
		useState: function () {
			return lu(Ks);
		},
		useDebugValue: jd,
		useDeferredValue: function (e) {
			var t = qt();
			return Fy(t, Ze.memoizedState, e);
		},
		useTransition: function () {
			var e = lu(Ks)[0],
				t = qt().memoizedState;
			return [e, t];
		},
		useMutableSource: _y,
		useSyncExternalStore: Cy,
		useId: Uy,
		unstable_isNewReconciler: !1,
	},
	bx = {
		readContext: Wt,
		useCallback: Dy,
		useContext: Wt,
		useEffect: Id,
		useImperativeHandle: Ly,
		useInsertionEffect: Iy,
		useLayoutEffect: jy,
		useMemo: My,
		useReducer: uu,
		useRef: Ty,
		useState: function () {
			return uu(Ks);
		},
		useDebugValue: jd,
		useDeferredValue: function (e) {
			var t = qt();
			return Ze === null ? (t.memoizedState = e) : Fy(t, Ze.memoizedState, e);
		},
		useTransition: function () {
			var e = uu(Ks)[0],
				t = qt().memoizedState;
			return [e, t];
		},
		useMutableSource: _y,
		useSyncExternalStore: Cy,
		useId: Uy,
		unstable_isNewReconciler: !1,
	};
function Li(e, t) {
	try {
		var n = "",
			r = t;
		do (n += G0(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (s) {
		i =
			`
Error generating stack: ` +
			s.message +
			`
` +
			s.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function cu(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hc(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Ex = typeof WeakMap == "function" ? WeakMap : Map;
function Vy(e, t, n) {
	(n = In(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Da || ((Da = !0), (Sc = r)), hc(e, t);
		}),
		n
	);
}
function Hy(e, t, n) {
	(n = In(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				hc(e, t);
			});
	}
	var s = e.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == "function" &&
			(n.callback = function () {
				hc(e, t),
					typeof r != "function" &&
						(hr === null ? (hr = new Set([this])) : hr.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : "",
				});
			}),
		n
	);
}
function mh(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Ex();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = Dx.bind(null, e, t, n)), t.then(e, e));
}
function yh(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function gh(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = In(-1, 1)), (t.tag = 2), fr(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Sx = zn.ReactCurrentOwner,
	_t = !1;
function yt(e, t, n, r) {
	t.child = e === null ? Ey(t, null, n, r) : ji(t, e.child, n, r);
}
function vh(e, t, n, r, i) {
	n = n.render;
	var s = t.ref;
	return (
		Si(t, i),
		(r = Pd(e, t, n, r, s, i)),
		(n = Td()),
		e !== null && !_t
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Fn(e, t, i))
			: (Me && n && vd(t), (t.flags |= 1), yt(e, t, r, i), t.child)
	);
}
function wh(e, t, n, r, i) {
	if (e === null) {
		var s = n.type;
		return typeof s == "function" &&
			!zd(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = s), Wy(e, t, s, r, i))
			: ((e = na(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((s = e.child), !(e.lanes & i))) {
		var o = s.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Bs), n(o, r) && e.ref === t.ref)
		)
			return Fn(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = mr(s, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Wy(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (Bs(s, r) && e.ref === t.ref)
			if (((_t = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
				e.flags & 131072 && (_t = !0);
			else return (t.lanes = e.lanes), Fn(e, t, i);
	}
	return pc(e, t, n, r, i);
}
function qy(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Ie(mi, Pt),
				(Pt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = s !== null ? s.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					Ie(mi, Pt),
					(Pt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				Ie(mi, Pt),
				(Pt |= r);
		}
	else
		s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
			Ie(mi, Pt),
			(Pt |= r);
	return yt(e, t, i, n), t.child;
}
function Ky(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, n, r, i) {
	var s = kt(n) ? Br : ht.current;
	return (
		(s = Ti(t, s)),
		Si(t, i),
		(n = Pd(e, t, n, r, s, i)),
		(r = Td()),
		e !== null && !_t
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Fn(e, t, i))
			: (Me && r && vd(t), (t.flags |= 1), yt(e, t, n, i), t.child)
	);
}
function xh(e, t, n, r, i) {
	if (kt(n)) {
		var s = !0;
		ka(t);
	} else s = !1;
	if ((Si(t, i), t.stateNode === null))
		Zo(e, t), xy(t, n, r), fc(t, n, r, i), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var l = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = Wt(u))
			: ((u = kt(n) ? Br : ht.current), (u = Ti(t, u)));
		var d = n.getDerivedStateFromProps,
			f =
				typeof d == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((a !== r || l !== u) && dh(t, o, r, u)),
			(Xn = !1);
		var p = t.memoizedState;
		(o.state = p),
			Ta(t, r, o, i),
			(l = t.memoizedState),
			a !== r || p !== l || Ct.current || Xn
				? (typeof d == "function" && (dc(t, n, d, r), (l = t.memoizedState)),
				  (a = Xn || ch(t, n, a, r, p, l, u))
						? (f ||
								(typeof o.UNSAFE_componentWillMount != "function" &&
									typeof o.componentWillMount != "function") ||
								(typeof o.componentWillMount == "function" &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == "function" &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = l)),
				  (o.props = r),
				  (o.state = l),
				  (o.context = u),
				  (r = a))
				: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			vy(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Yt(t.type, a)),
			(o.props = u),
			(f = t.pendingProps),
			(p = o.context),
			(l = n.contextType),
			typeof l == "object" && l !== null
				? (l = Wt(l))
				: ((l = kt(n) ? Br : ht.current), (l = Ti(t, l)));
		var b = n.getDerivedStateFromProps;
		(d =
			typeof b == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function") ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((a !== f || p !== l) && dh(t, o, r, l)),
			(Xn = !1),
			(p = t.memoizedState),
			(o.state = p),
			Ta(t, r, o, i);
		var w = t.memoizedState;
		a !== f || p !== w || Ct.current || Xn
			? (typeof b == "function" && (dc(t, n, b, r), (w = t.memoizedState)),
			  (u = Xn || ch(t, n, u, r, p, w, l) || !1)
					? (d ||
							(typeof o.UNSAFE_componentWillUpdate != "function" &&
								typeof o.componentWillUpdate != "function") ||
							(typeof o.componentWillUpdate == "function" &&
								o.componentWillUpdate(r, w, l),
							typeof o.UNSAFE_componentWillUpdate == "function" &&
								o.UNSAFE_componentWillUpdate(r, w, l)),
					  typeof o.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != "function" ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = w)),
			  (o.props = r),
			  (o.state = w),
			  (o.context = l),
			  (r = u))
			: (typeof o.componentDidUpdate != "function" ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return mc(e, t, n, r, s, i);
}
function mc(e, t, n, r, i, s) {
	Ky(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && sh(t, n, !1), Fn(e, t, s);
	(r = t.stateNode), (Sx.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = ji(t, e.child, null, s)), (t.child = ji(t, null, a, s)))
			: yt(e, t, a, s),
		(t.memoizedState = r.state),
		i && sh(t, n, !0),
		t.child
	);
}
function Qy(e) {
	var t = e.stateNode;
	t.pendingContext
		? ih(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && ih(e, t.context, !1),
		kd(e, t.containerInfo);
}
function bh(e, t, n, r, i) {
	return Ii(), xd(i), (t.flags |= 256), yt(e, t, n, r), t.child;
}
var yc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Gy(e, t, n) {
	var r = t.pendingProps,
		i = Ue.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		a;
	if (
		((a = o) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((s = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		Ie(Ue, i & 1),
		e === null)
	)
		return (
			uc(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  s
						? ((r = t.mode),
						  (s = t.child),
						  (o = { mode: "hidden", children: o }),
						  !(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = o))
								: (s = ml(o, r, 0, null)),
						  (e = Fr(e, r, n, null)),
						  (s.return = t),
						  (e.return = t),
						  (s.sibling = e),
						  (t.child = s),
						  (t.child.memoizedState = gc(n)),
						  (t.memoizedState = yc),
						  e)
						: Ad(t, o))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return _x(e, t, o, r, a, i, n);
	if (s) {
		(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
		var l = { mode: "hidden", children: r.children };
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = l),
				  (t.deletions = null))
				: ((r = mr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (s = mr(a, s)) : ((s = Fr(s, o, n, null)), (s.flags |= 2)),
			(s.return = t),
			(r.return = t),
			(r.sibling = s),
			(t.child = r),
			(r = s),
			(s = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? gc(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(s.memoizedState = o),
			(s.childLanes = e.childLanes & ~n),
			(t.memoizedState = yc),
			r
		);
	}
	return (
		(s = e.child),
		(e = s.sibling),
		(r = mr(s, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ad(e, t) {
	return (
		(t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Fo(e, t, n, r) {
	return (
		r !== null && xd(r),
		ji(t, e.child, null, n),
		(e = Ad(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function _x(e, t, n, r, i, s, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = cu(Error(z(422)))), Fo(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((s = r.fallback),
			  (i = t.mode),
			  (r = ml({ mode: "visible", children: r.children }, i, 0, null)),
			  (s = Fr(s, i, o, null)),
			  (s.flags |= 2),
			  (r.return = t),
			  (s.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  t.mode & 1 && ji(t, e.child, null, o),
			  (t.child.memoizedState = gc(o)),
			  (t.memoizedState = yc),
			  s);
	if (!(t.mode & 1)) return Fo(e, t, o, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (s = Error(z(419))), (r = cu(s, r, void 0)), Fo(e, t, o, r);
	}
	if (((a = (o & e.childLanes) !== 0), _t || a)) {
		if (((r = it), r !== null)) {
			switch (o & -o) {
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
			(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== s.retryLane &&
					((s.retryLane = i), Mn(e, i), rn(r, e, i, -1));
		}
		return Bd(), (r = cu(Error(z(421)))), Fo(e, t, o, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Mx.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = s.treeContext),
		  (Tt = dr(i.nextSibling)),
		  (It = t),
		  (Me = !0),
		  (en = null),
		  e !== null &&
				((Bt[zt++] = Nn),
				(Bt[zt++] = On),
				(Bt[zt++] = zr),
				(Nn = e.id),
				(On = e.overflow),
				(zr = t)),
		  (t = Ad(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Eh(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), cc(e.return, t, n);
}
function du(e, t, n, r, i) {
	var s = e.memoizedState;
	s === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((s.isBackwards = t),
		  (s.rendering = null),
		  (s.renderingStartTime = 0),
		  (s.last = r),
		  (s.tail = n),
		  (s.tailMode = i));
}
function Jy(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((yt(e, t, r.children, n), (r = Ue.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Eh(e, n, t);
				else if (e.tag === 19) Eh(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((Ie(Ue, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Ia(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					du(t, !1, i, n, s);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Ia(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				du(t, !0, n, null, s);
				break;
			case "together":
				du(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Zo(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Fn(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Vr |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(z(153));
	if (t.child !== null) {
		for (
			e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = mr(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Cx(e, t, n) {
	switch (t.tag) {
		case 3:
			Qy(t), Ii();
			break;
		case 5:
			Sy(t);
			break;
		case 1:
			kt(t.type) && ka(t);
			break;
		case 4:
			kd(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			Ie(Oa, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Ie(Ue, Ue.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Gy(e, t, n)
					: (Ie(Ue, Ue.current & 1),
					  (e = Fn(e, t, n)),
					  e !== null ? e.sibling : null);
			Ie(Ue, Ue.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Jy(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Ie(Ue, Ue.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), qy(e, t, n);
	}
	return Fn(e, t, n);
}
var Yy, vc, Xy, Zy;
Yy = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
vc = function () {};
Xy = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Ir(pn.current);
		var s = null;
		switch (n) {
			case "input":
				(i = Bu(e, i)), (r = Bu(e, r)), (s = []);
				break;
			case "select":
				(i = ze({}, i, { value: void 0 })),
					(r = ze({}, r, { value: void 0 })),
					(s = []);
				break;
			case "textarea":
				(i = Vu(e, i)), (r = Vu(e, r)), (s = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = _a);
		}
		Wu(n, r);
		var o;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(js.hasOwnProperty(u)
							? s || (s = [])
							: (s = s || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && l !== a && (l != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(l && l.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ""));
						for (o in l)
							l.hasOwnProperty(o) &&
								a[o] !== l[o] &&
								(n || (n = {}), (n[o] = l[o]));
					} else n || (s || (s = []), s.push(u, n)), (n = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (a = a ? a.__html : void 0),
						  l != null && a !== l && (s = s || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (s = s || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (js.hasOwnProperty(u)
								? (l != null && u === "onScroll" && je("scroll", e),
								  s || a === l || (s = []))
								: (s = s || []).push(u, l));
		}
		n && (s = s || []).push("style", n);
		var u = s;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Zy = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function as(e, t) {
	if (!Me)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function dt(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kx(e, t, n) {
	var r = t.pendingProps;
	switch ((wd(t), t.tag)) {
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
			return dt(t), null;
		case 1:
			return kt(t.type) && Ca(), dt(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Ai(),
				Le(Ct),
				Le(ht),
				Nd(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Do(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), en !== null && (kc(en), (en = null)))),
				vc(e, t),
				dt(t),
				null
			);
		case 5:
			Rd(t);
			var i = Ir(Ws.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Xy(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(z(166));
					return dt(t), null;
				}
				if (((e = Ir(pn.current)), Do(t))) {
					(r = t.stateNode), (n = t.type);
					var s = t.memoizedProps;
					switch (((r[cn] = t), (r[Vs] = s), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							je("cancel", r), je("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							je("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < vs.length; i++) je(vs[i], r);
							break;
						case "source":
							je("error", r);
							break;
						case "img":
						case "image":
						case "link":
							je("error", r), je("load", r);
							break;
						case "details":
							je("toggle", r);
							break;
						case "input":
							Tf(r, s), je("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								je("invalid", r);
							break;
						case "textarea":
							jf(r, s), je("invalid", r);
					}
					Wu(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var a = s[o];
							o === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (s.suppressHydrationWarning !== !0 &&
											Lo(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (s.suppressHydrationWarning !== !0 &&
											Lo(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: js.hasOwnProperty(o) &&
								  a != null &&
								  o === "onScroll" &&
								  je("scroll", r);
						}
					switch (n) {
						case "input":
							Ro(r), If(r, s, !0);
							break;
						case "textarea":
							Ro(r), Af(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof s.onClick == "function" && (r.onclick = _a);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = km(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = o.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === "select" &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[cn] = t),
						(e[Vs] = r),
						Yy(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = qu(n, r)), n)) {
							case "dialog":
								je("cancel", e), je("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								je("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < vs.length; i++) je(vs[i], e);
								i = r;
								break;
							case "source":
								je("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								je("error", e), je("load", e), (i = r);
								break;
							case "details":
								je("toggle", e), (i = r);
								break;
							case "input":
								Tf(e, r), (i = Bu(e, r)), je("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = ze({}, r, { value: void 0 })),
									je("invalid", e);
								break;
							case "textarea":
								jf(e, r), (i = Vu(e, r)), je("invalid", e);
								break;
							default:
								i = r;
						}
						Wu(n, i), (a = i);
						for (s in a)
							if (a.hasOwnProperty(s)) {
								var l = a[s];
								s === "style"
									? Om(e, l)
									: s === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0), l != null && Rm(e, l))
									: s === "children"
									? typeof l == "string"
										? (n !== "textarea" || l !== "") && As(e, l)
										: typeof l == "number" && As(e, "" + l)
									: s !== "suppressContentEditableWarning" &&
									  s !== "suppressHydrationWarning" &&
									  s !== "autoFocus" &&
									  (js.hasOwnProperty(s)
											? l != null && s === "onScroll" && je("scroll", e)
											: l != null && id(e, s, l, o));
							}
						switch (n) {
							case "input":
								Ro(e), If(e, r, !1);
								break;
							case "textarea":
								Ro(e), Af(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + wr(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? wi(e, !!r.multiple, s, !1)
										: r.defaultValue != null &&
										  wi(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = _a);
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
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return dt(t), null;
		case 6:
			if (e && t.stateNode != null) Zy(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
				if (((n = Ir(Ws.current)), Ir(pn.current), Do(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[cn] = t),
						(s = r.nodeValue !== n) && ((e = It), e !== null))
					)
						switch (e.tag) {
							case 3:
								Lo(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Lo(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					s && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[cn] = t),
						(t.stateNode = r);
			}
			return dt(t), null;
		case 13:
			if (
				(Le(Ue),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (Me && Tt !== null && t.mode & 1 && !(t.flags & 128))
					yy(), Ii(), (t.flags |= 98560), (s = !1);
				else if (((s = Do(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!s) throw Error(z(318));
						if (
							((s = t.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(z(317));
						s[cn] = t;
					} else
						Ii(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					dt(t), (s = !1);
				} else en !== null && (kc(en), (en = null)), (s = !0);
				if (!s) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Ue.current & 1 ? et === 0 && (et = 3) : Bd())),
				  t.updateQueue !== null && (t.flags |= 4),
				  dt(t),
				  null);
		case 4:
			return (
				Ai(), vc(e, t), e === null && zs(t.stateNode.containerInfo), dt(t), null
			);
		case 10:
			return Sd(t.type._context), dt(t), null;
		case 17:
			return kt(t.type) && Ca(), dt(t), null;
		case 19:
			if ((Le(Ue), (s = t.memoizedState), s === null)) return dt(t), null;
			if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) as(s, !1);
				else {
					if (et !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = Ia(e)), o !== null)) {
								for (
									t.flags |= 128,
										as(s, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(s = n),
										(e = r),
										(s.flags &= 14680066),
										(o = s.alternate),
										o === null
											? ((s.childLanes = 0),
											  (s.lanes = e),
											  (s.child = null),
											  (s.subtreeFlags = 0),
											  (s.memoizedProps = null),
											  (s.memoizedState = null),
											  (s.updateQueue = null),
											  (s.dependencies = null),
											  (s.stateNode = null))
											: ((s.childLanes = o.childLanes),
											  (s.lanes = o.lanes),
											  (s.child = o.child),
											  (s.subtreeFlags = 0),
											  (s.deletions = null),
											  (s.memoizedProps = o.memoizedProps),
											  (s.memoizedState = o.memoizedState),
											  (s.updateQueue = o.updateQueue),
											  (s.type = o.type),
											  (e = o.dependencies),
											  (s.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return Ie(Ue, (Ue.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					s.tail !== null &&
						We() > Di &&
						((t.flags |= 128), (r = !0), as(s, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Ia(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							as(s, !0),
							s.tail === null && s.tailMode === "hidden" && !o.alternate && !Me)
						)
							return dt(t), null;
					} else
						2 * We() - s.renderingStartTime > Di &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), as(s, !1), (t.lanes = 4194304));
				s.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = s.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (s.last = o));
			}
			return s.tail !== null
				? ((t = s.tail),
				  (s.rendering = t),
				  (s.tail = t.sibling),
				  (s.renderingStartTime = We()),
				  (t.sibling = null),
				  (n = Ue.current),
				  Ie(Ue, r ? (n & 1) | 2 : n & 1),
				  t)
				: (dt(t), null);
		case 22:
		case 23:
			return (
				Ud(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Pt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: dt(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(z(156, t.tag));
}
function Rx(e, t) {
	switch ((wd(t), t.tag)) {
		case 1:
			return (
				kt(t.type) && Ca(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Ai(),
				Le(Ct),
				Le(ht),
				Nd(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Rd(t), null;
		case 13:
			if (
				(Le(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(z(340));
				Ii();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return Le(Ue), null;
		case 4:
			return Ai(), null;
		case 10:
			return Sd(t.type._context), null;
		case 22:
		case 23:
			return Ud(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Uo = !1,
	ft = !1,
	Nx = typeof WeakSet == "function" ? WeakSet : Set,
	Z = null;
function pi(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Ve(e, t, r);
			}
		else n.current = null;
}
function wc(e, t, n) {
	try {
		n();
	} catch (r) {
		Ve(e, t, r);
	}
}
var Sh = !1;
function Ox(e, t) {
	if (((nc = ba), (e = ry()), gd(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						s = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, s.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						a = -1,
						l = -1,
						u = 0,
						d = 0,
						f = e,
						p = null;
					t: for (;;) {
						for (
							var b;
							f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
								f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
								f.nodeType === 3 && (o += f.nodeValue.length),
								(b = f.firstChild) !== null;

						)
							(p = f), (f = b);
						for (;;) {
							if (f === e) break t;
							if (
								(p === n && ++u === i && (a = o),
								p === s && ++d === r && (l = o),
								(b = f.nextSibling) !== null)
							)
								break;
							(f = p), (p = f.parentNode);
						}
						f = b;
					}
					n = a === -1 || l === -1 ? null : { start: a, end: l };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (rc = { focusedElem: e, selectionRange: n }, ba = !1, Z = t; Z !== null; )
		if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (Z = e);
		else
			for (; Z !== null; ) {
				t = Z;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var E = w.memoizedProps,
										C = w.memoizedState,
										g = t.stateNode,
										h = g.getSnapshotBeforeUpdate(
											t.elementType === t.type ? E : Yt(t.type, E),
											C
										);
									g.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(z(163));
						}
				} catch (m) {
					Ve(t, t.return, m);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (Z = e);
					break;
				}
				Z = t.return;
			}
	return (w = Sh), (Sh = !1), w;
}
function Ns(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && wc(t, n, s);
			}
			i = i.next;
		} while (i !== r);
	}
}
function hl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function xc(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function eg(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), eg(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[cn], delete t[Vs], delete t[oc], delete t[dx], delete t[fx])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function tg(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _h(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || tg(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function bc(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = _a));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
}
function Ec(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ec(e, t, n), e = e.sibling; e !== null; ) Ec(e, t, n), (e = e.sibling);
}
var ot = null,
	Xt = !1;
function Kn(e, t, n) {
	for (n = n.child; n !== null; ) ng(e, t, n), (n = n.sibling);
}
function ng(e, t, n) {
	if (hn && typeof hn.onCommitFiberUnmount == "function")
		try {
			hn.onCommitFiberUnmount(sl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ft || pi(n, t);
		case 6:
			var r = ot,
				i = Xt;
			(ot = null),
				Kn(e, t, n),
				(ot = r),
				(Xt = i),
				ot !== null &&
					(Xt
						? ((e = ot),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ot.removeChild(n.stateNode));
			break;
		case 18:
			ot !== null &&
				(Xt
					? ((e = ot),
					  (n = n.stateNode),
					  e.nodeType === 8
							? iu(e.parentNode, n)
							: e.nodeType === 1 && iu(e, n),
					  Fs(e))
					: iu(ot, n.stateNode));
			break;
		case 4:
			(r = ot),
				(i = Xt),
				(ot = n.stateNode.containerInfo),
				(Xt = !0),
				Kn(e, t, n),
				(ot = r),
				(Xt = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ft &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && wc(n, t, o),
						(i = i.next);
				} while (i !== r);
			}
			Kn(e, t, n);
			break;
		case 1:
			if (
				!ft &&
				(pi(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Ve(n, t, a);
				}
			Kn(e, t, n);
			break;
		case 21:
			Kn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ft = (r = ft) || n.memoizedState !== null), Kn(e, t, n), (ft = r))
				: Kn(e, t, n);
			break;
		default:
			Kn(e, t, n);
	}
}
function Ch(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Nx()),
			t.forEach(function (r) {
				var i = Fx.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Jt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var s = e,
					o = t,
					a = o;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(ot = a.stateNode), (Xt = !1);
							break e;
						case 3:
							(ot = a.stateNode.containerInfo), (Xt = !0);
							break e;
						case 4:
							(ot = a.stateNode.containerInfo), (Xt = !0);
							break e;
					}
					a = a.return;
				}
				if (ot === null) throw Error(z(160));
				ng(s, o, i), (ot = null), (Xt = !1);
				var l = i.alternate;
				l !== null && (l.return = null), (i.return = null);
			} catch (u) {
				Ve(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) rg(t, e), (t = t.sibling);
}
function rg(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Jt(t, e), ln(e), r & 4)) {
				try {
					Ns(3, e, e.return), hl(3, e);
				} catch (E) {
					Ve(e, e.return, E);
				}
				try {
					Ns(5, e, e.return);
				} catch (E) {
					Ve(e, e.return, E);
				}
			}
			break;
		case 1:
			Jt(t, e), ln(e), r & 512 && n !== null && pi(n, n.return);
			break;
		case 5:
			if (
				(Jt(t, e),
				ln(e),
				r & 512 && n !== null && pi(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					As(i, "");
				} catch (E) {
					Ve(e, e.return, E);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var s = e.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					a = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						a === "input" && s.type === "radio" && s.name != null && _m(i, s),
							qu(a, o);
						var u = qu(a, s);
						for (o = 0; o < l.length; o += 2) {
							var d = l[o],
								f = l[o + 1];
							d === "style"
								? Om(i, f)
								: d === "dangerouslySetInnerHTML"
								? Rm(i, f)
								: d === "children"
								? As(i, f)
								: id(i, d, f, u);
						}
						switch (a) {
							case "input":
								zu(i, s);
								break;
							case "textarea":
								Cm(i, s);
								break;
							case "select":
								var p = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!s.multiple;
								var b = s.value;
								b != null
									? wi(i, !!s.multiple, b, !1)
									: p !== !!s.multiple &&
									  (s.defaultValue != null
											? wi(i, !!s.multiple, s.defaultValue, !0)
											: wi(i, !!s.multiple, s.multiple ? [] : "", !1));
						}
						i[Vs] = s;
					} catch (E) {
						Ve(e, e.return, E);
					}
			}
			break;
		case 6:
			if ((Jt(t, e), ln(e), r & 4)) {
				if (e.stateNode === null) throw Error(z(162));
				(i = e.stateNode), (s = e.memoizedProps);
				try {
					i.nodeValue = s;
				} catch (E) {
					Ve(e, e.return, E);
				}
			}
			break;
		case 3:
			if (
				(Jt(t, e), ln(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Fs(t.containerInfo);
				} catch (E) {
					Ve(e, e.return, E);
				}
			break;
		case 4:
			Jt(t, e), ln(e);
			break;
		case 13:
			Jt(t, e),
				ln(e),
				(i = e.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Md = We())),
				r & 4 && Ch(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ft = (u = ft) || d), Jt(t, e), (ft = u)) : Jt(t, e),
				ln(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (Z = e, d = e.child; d !== null; ) {
						for (f = Z = d; Z !== null; ) {
							switch (((p = Z), (b = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Ns(4, p, p.return);
									break;
								case 1:
									pi(p, p.return);
									var w = p.stateNode;
									if (typeof w.componentWillUnmount == "function") {
										(r = p), (n = p.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (E) {
											Ve(r, n, E);
										}
									}
									break;
								case 5:
									pi(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Rh(f);
										continue;
									}
							}
							b !== null ? ((b.return = p), (Z = b)) : Rh(f);
						}
						d = d.sibling;
					}
				e: for (d = null, f = e; ; ) {
					if (f.tag === 5) {
						if (d === null) {
							d = f;
							try {
								(i = f.stateNode),
									u
										? ((s = i.style),
										  typeof s.setProperty == "function"
												? s.setProperty("display", "none", "important")
												: (s.display = "none"))
										: ((a = f.stateNode),
										  (l = f.memoizedProps.style),
										  (o =
												l != null && l.hasOwnProperty("display")
													? l.display
													: null),
										  (a.style.display = Nm("display", o)));
							} catch (E) {
								Ve(e, e.return, E);
							}
						}
					} else if (f.tag === 6) {
						if (d === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (E) {
								Ve(e, e.return, E);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						d === f && (d = null), (f = f.return);
					}
					d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			Jt(t, e), ln(e), r & 4 && Ch(e);
			break;
		case 21:
			break;
		default:
			Jt(t, e), ln(e);
	}
}
function ln(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (tg(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(z(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (As(i, ""), (r.flags &= -33));
					var s = _h(e);
					Ec(e, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = _h(e);
					bc(e, a, o);
					break;
				default:
					throw Error(z(161));
			}
		} catch (l) {
			Ve(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Px(e, t, n) {
	(Z = e), ig(e);
}
function ig(e, t, n) {
	for (var r = (e.mode & 1) !== 0; Z !== null; ) {
		var i = Z,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Uo;
			if (!o) {
				var a = i.alternate,
					l = (a !== null && a.memoizedState !== null) || ft;
				a = Uo;
				var u = ft;
				if (((Uo = o), (ft = l) && !u))
					for (Z = i; Z !== null; )
						(o = Z),
							(l = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Nh(i)
								: l !== null
								? ((l.return = o), (Z = l))
								: Nh(i);
				for (; s !== null; ) (Z = s), ig(s), (s = s.sibling);
				(Z = i), (Uo = a), (ft = u);
			}
			kh(e);
		} else
			i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (Z = s)) : kh(e);
	}
}
function kh(e) {
	for (; Z !== null; ) {
		var t = Z;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ft || hl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ft)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Yt(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var s = t.updateQueue;
							s !== null && uh(t, s, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								uh(t, o, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var l = t.memoizedProps;
								switch (t.type) {
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
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && Fs(f);
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
							throw Error(z(163));
					}
				ft || (t.flags & 512 && xc(t));
			} catch (p) {
				Ve(t, t.return, p);
			}
		}
		if (t === e) {
			Z = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (Z = n);
			break;
		}
		Z = t.return;
	}
}
function Rh(e) {
	for (; Z !== null; ) {
		var t = Z;
		if (t === e) {
			Z = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (Z = n);
			break;
		}
		Z = t.return;
	}
}
function Nh(e) {
	for (; Z !== null; ) {
		var t = Z;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						hl(4, t);
					} catch (l) {
						Ve(t, n, l);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (l) {
							Ve(t, i, l);
						}
					}
					var s = t.return;
					try {
						xc(t);
					} catch (l) {
						Ve(t, s, l);
					}
					break;
				case 5:
					var o = t.return;
					try {
						xc(t);
					} catch (l) {
						Ve(t, o, l);
					}
			}
		} catch (l) {
			Ve(t, t.return, l);
		}
		if (t === e) {
			Z = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (Z = a);
			break;
		}
		Z = t.return;
	}
}
var Tx = Math.ceil,
	La = zn.ReactCurrentDispatcher,
	Ld = zn.ReactCurrentOwner,
	Vt = zn.ReactCurrentBatchConfig,
	be = 0,
	it = null,
	Ge = null,
	lt = 0,
	Pt = 0,
	mi = Sr(0),
	et = 0,
	Gs = null,
	Vr = 0,
	pl = 0,
	Dd = 0,
	Os = null,
	St = null,
	Md = 0,
	Di = 1 / 0,
	_n = null,
	Da = !1,
	Sc = null,
	hr = null,
	Bo = !1,
	or = null,
	Ma = 0,
	Ps = 0,
	_c = null,
	ea = -1,
	ta = 0;
function wt() {
	return be & 6 ? We() : ea !== -1 ? ea : (ea = We());
}
function pr(e) {
	return e.mode & 1
		? be & 2 && lt !== 0
			? lt & -lt
			: px.transition !== null
			? (ta === 0 && (ta = zm()), ta)
			: ((e = _e),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qm(e.type))),
			  e)
		: 1;
}
function rn(e, t, n, r) {
	if (50 < Ps) throw ((Ps = 0), (_c = null), Error(z(185)));
	io(e, n, r),
		(!(be & 2) || e !== it) &&
			(e === it && (!(be & 2) && (pl |= n), et === 4 && tr(e, lt)),
			Rt(e, r),
			n === 1 && be === 0 && !(t.mode & 1) && ((Di = We() + 500), cl && _r()));
}
function Rt(e, t) {
	var n = e.callbackNode;
	pw(e, t);
	var r = xa(e, e === it ? lt : 0);
	if (r === 0)
		n !== null && Mf(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Mf(n), t === 1))
			e.tag === 0 ? hx(Oh.bind(null, e)) : hy(Oh.bind(null, e)),
				ux(function () {
					!(be & 6) && _r();
				}),
				(n = null);
		else {
			switch ($m(r)) {
				case 1:
					n = ud;
					break;
				case 4:
					n = Um;
					break;
				case 16:
					n = wa;
					break;
				case 536870912:
					n = Bm;
					break;
				default:
					n = wa;
			}
			n = fg(n, sg.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function sg(e, t) {
	if (((ea = -1), (ta = 0), be & 6)) throw Error(z(327));
	var n = e.callbackNode;
	if (_i() && e.callbackNode !== n) return null;
	var r = xa(e, e === it ? lt : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Fa(e, r);
	else {
		t = r;
		var i = be;
		be |= 2;
		var s = ag();
		(it !== e || lt !== t) && ((_n = null), (Di = We() + 500), Mr(e, t));
		do
			try {
				Ax();
				break;
			} catch (a) {
				og(e, a);
			}
		while (1);
		Ed(),
			(La.current = s),
			(be = i),
			Ge !== null ? (t = 0) : ((it = null), (lt = 0), (t = et));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Yu(e)), i !== 0 && ((r = i), (t = Cc(e, i)))), t === 1)
		)
			throw ((n = Gs), Mr(e, 0), tr(e, r), Rt(e, We()), n);
		if (t === 6) tr(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Ix(i) &&
					((t = Fa(e, r)),
					t === 2 && ((s = Yu(e)), s !== 0 && ((r = s), (t = Cc(e, s)))),
					t === 1))
			)
				throw ((n = Gs), Mr(e, 0), tr(e, r), Rt(e, We()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(z(345));
				case 2:
					Nr(e, St, _n);
					break;
				case 3:
					if (
						(tr(e, r), (r & 130023424) === r && ((t = Md + 500 - We()), 10 < t))
					) {
						if (xa(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							wt(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = sc(Nr.bind(null, e, St, _n), t);
						break;
					}
					Nr(e, St, _n);
					break;
				case 4:
					if ((tr(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - nn(r);
						(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
					}
					if (
						((r = i),
						(r = We() - r),
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
								: 1960 * Tx(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = sc(Nr.bind(null, e, St, _n), r);
						break;
					}
					Nr(e, St, _n);
					break;
				case 5:
					Nr(e, St, _n);
					break;
				default:
					throw Error(z(329));
			}
		}
	}
	return Rt(e, We()), e.callbackNode === n ? sg.bind(null, e) : null;
}
function Cc(e, t) {
	var n = Os;
	return (
		e.current.memoizedState.isDehydrated && (Mr(e, t).flags |= 256),
		(e = Fa(e, t)),
		e !== 2 && ((t = St), (St = n), t !== null && kc(t)),
		e
	);
}
function kc(e) {
	St === null ? (St = e) : St.push.apply(St, e);
}
function Ix(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!sn(s(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function tr(e, t) {
	for (
		t &= ~Dd,
			t &= ~pl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - nn(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Oh(e) {
	if (be & 6) throw Error(z(327));
	_i();
	var t = xa(e, 0);
	if (!(t & 1)) return Rt(e, We()), null;
	var n = Fa(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Yu(e);
		r !== 0 && ((t = r), (n = Cc(e, r)));
	}
	if (n === 1) throw ((n = Gs), Mr(e, 0), tr(e, t), Rt(e, We()), n);
	if (n === 6) throw Error(z(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Nr(e, St, _n),
		Rt(e, We()),
		null
	);
}
function Fd(e, t) {
	var n = be;
	be |= 1;
	try {
		return e(t);
	} finally {
		(be = n), be === 0 && ((Di = We() + 500), cl && _r());
	}
}
function Hr(e) {
	or !== null && or.tag === 0 && !(be & 6) && _i();
	var t = be;
	be |= 1;
	var n = Vt.transition,
		r = _e;
	try {
		if (((Vt.transition = null), (_e = 1), e)) return e();
	} finally {
		(_e = r), (Vt.transition = n), (be = t), !(be & 6) && _r();
	}
}
function Ud() {
	(Pt = mi.current), Le(mi);
}
function Mr(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), lx(n)), Ge !== null))
		for (n = Ge.return; n !== null; ) {
			var r = n;
			switch ((wd(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ca();
					break;
				case 3:
					Ai(), Le(Ct), Le(ht), Nd();
					break;
				case 5:
					Rd(r);
					break;
				case 4:
					Ai();
					break;
				case 13:
					Le(Ue);
					break;
				case 19:
					Le(Ue);
					break;
				case 10:
					Sd(r.type._context);
					break;
				case 22:
				case 23:
					Ud();
			}
			n = n.return;
		}
	if (
		((it = e),
		(Ge = e = mr(e.current, null)),
		(lt = Pt = t),
		(et = 0),
		(Gs = null),
		(Dd = pl = Vr = 0),
		(St = Os = null),
		Tr !== null)
	) {
		for (t = 0; t < Tr.length; t++)
			if (((n = Tr[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					(s.next = i), (r.next = o);
				}
				n.pending = r;
			}
		Tr = null;
	}
	return e;
}
function og(e, t) {
	do {
		var n = Ge;
		try {
			if ((Ed(), (Yo.current = Aa), ja)) {
				for (var r = Be.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				ja = !1;
			}
			if (
				(($r = 0),
				(rt = Ze = Be = null),
				(Rs = !1),
				(qs = 0),
				(Ld.current = null),
				n === null || n.return === null)
			) {
				(et = 1), (Gs = t), (Ge = null);
				break;
			}
			e: {
				var s = e,
					o = n.return,
					a = n,
					l = t;
				if (
					((t = lt),
					(a.flags |= 32768),
					l !== null && typeof l == "object" && typeof l.then == "function")
				) {
					var u = l,
						d = a,
						f = d.tag;
					if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var p = d.alternate;
						p
							? ((d.updateQueue = p.updateQueue),
							  (d.memoizedState = p.memoizedState),
							  (d.lanes = p.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var b = yh(o);
					if (b !== null) {
						(b.flags &= -257),
							gh(b, o, a, s, t),
							b.mode & 1 && mh(s, u, t),
							(t = b),
							(l = u);
						var w = t.updateQueue;
						if (w === null) {
							var E = new Set();
							E.add(l), (t.updateQueue = E);
						} else w.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							mh(s, u, t), Bd();
							break e;
						}
						l = Error(z(426));
					}
				} else if (Me && a.mode & 1) {
					var C = yh(o);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256),
							gh(C, o, a, s, t),
							xd(Li(l, a));
						break e;
					}
				}
				(s = l = Li(l, a)),
					et !== 4 && (et = 2),
					Os === null ? (Os = [s]) : Os.push(s),
					(s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (t &= -t), (s.lanes |= t);
							var g = Vy(s, l, t);
							lh(s, g);
							break e;
						case 1:
							a = l;
							var h = s.type,
								v = s.stateNode;
							if (
								!(s.flags & 128) &&
								(typeof h.getDerivedStateFromError == "function" ||
									(v !== null &&
										typeof v.componentDidCatch == "function" &&
										(hr === null || !hr.has(v))))
							) {
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var m = Hy(s, a, t);
								lh(s, m);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			ug(n);
		} catch (_) {
			(t = _), Ge === n && n !== null && (Ge = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function ag() {
	var e = La.current;
	return (La.current = Aa), e === null ? Aa : e;
}
function Bd() {
	(et === 0 || et === 3 || et === 2) && (et = 4),
		it === null || (!(Vr & 268435455) && !(pl & 268435455)) || tr(it, lt);
}
function Fa(e, t) {
	var n = be;
	be |= 2;
	var r = ag();
	(it !== e || lt !== t) && ((_n = null), Mr(e, t));
	do
		try {
			jx();
			break;
		} catch (i) {
			og(e, i);
		}
	while (1);
	if ((Ed(), (be = n), (La.current = r), Ge !== null)) throw Error(z(261));
	return (it = null), (lt = 0), et;
}
function jx() {
	for (; Ge !== null; ) lg(Ge);
}
function Ax() {
	for (; Ge !== null && !sw(); ) lg(Ge);
}
function lg(e) {
	var t = dg(e.alternate, e, Pt);
	(e.memoizedProps = e.pendingProps),
		t === null ? ug(e) : (Ge = t),
		(Ld.current = null);
}
function ug(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Rx(n, t)), n !== null)) {
				(n.flags &= 32767), (Ge = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(et = 6), (Ge = null);
				return;
			}
		} else if (((n = kx(n, t, Pt)), n !== null)) {
			Ge = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Ge = t;
			return;
		}
		Ge = t = e;
	} while (t !== null);
	et === 0 && (et = 5);
}
function Nr(e, t, n) {
	var r = _e,
		i = Vt.transition;
	try {
		(Vt.transition = null), (_e = 1), Lx(e, t, n, r);
	} finally {
		(Vt.transition = i), (_e = r);
	}
	return null;
}
function Lx(e, t, n, r) {
	do _i();
	while (or !== null);
	if (be & 6) throw Error(z(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(z(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(mw(e, s),
		e === it && ((Ge = it = null), (lt = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Bo ||
			((Bo = !0),
			fg(wa, function () {
				return _i(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = Vt.transition), (Vt.transition = null);
		var o = _e;
		_e = 1;
		var a = be;
		(be |= 4),
			(Ld.current = null),
			Ox(e, n),
			rg(n, e),
			tx(rc),
			(ba = !!nc),
			(rc = nc = null),
			(e.current = n),
			Px(n),
			ow(),
			(be = a),
			(_e = o),
			(Vt.transition = s);
	} else e.current = n;
	if (
		(Bo && ((Bo = !1), (or = e), (Ma = i)),
		(s = e.pendingLanes),
		s === 0 && (hr = null),
		uw(n.stateNode),
		Rt(e, We()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Da) throw ((Da = !1), (e = Sc), (Sc = null), e);
	return (
		Ma & 1 && e.tag !== 0 && _i(),
		(s = e.pendingLanes),
		s & 1 ? (e === _c ? Ps++ : ((Ps = 0), (_c = e))) : (Ps = 0),
		_r(),
		null
	);
}
function _i() {
	if (or !== null) {
		var e = $m(Ma),
			t = Vt.transition,
			n = _e;
		try {
			if (((Vt.transition = null), (_e = 16 > e ? 16 : e), or === null))
				var r = !1;
			else {
				if (((e = or), (or = null), (Ma = 0), be & 6)) throw Error(z(331));
				var i = be;
				for (be |= 4, Z = e.current; Z !== null; ) {
					var s = Z,
						o = s.child;
					if (Z.flags & 16) {
						var a = s.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (Z = u; Z !== null; ) {
									var d = Z;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Ns(8, d, s);
									}
									var f = d.child;
									if (f !== null) (f.return = d), (Z = f);
									else
										for (; Z !== null; ) {
											d = Z;
											var p = d.sibling,
												b = d.return;
											if ((eg(d), d === u)) {
												Z = null;
												break;
											}
											if (p !== null) {
												(p.return = b), (Z = p);
												break;
											}
											Z = b;
										}
								}
							}
							var w = s.alternate;
							if (w !== null) {
								var E = w.child;
								if (E !== null) {
									w.child = null;
									do {
										var C = E.sibling;
										(E.sibling = null), (E = C);
									} while (E !== null);
								}
							}
							Z = s;
						}
					}
					if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (Z = o);
					else
						e: for (; Z !== null; ) {
							if (((s = Z), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										Ns(9, s, s.return);
								}
							var g = s.sibling;
							if (g !== null) {
								(g.return = s.return), (Z = g);
								break e;
							}
							Z = s.return;
						}
				}
				var h = e.current;
				for (Z = h; Z !== null; ) {
					o = Z;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (Z = v);
					else
						e: for (o = h; Z !== null; ) {
							if (((a = Z), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											hl(9, a);
									}
								} catch (_) {
									Ve(a, a.return, _);
								}
							if (a === o) {
								Z = null;
								break e;
							}
							var m = a.sibling;
							if (m !== null) {
								(m.return = a.return), (Z = m);
								break e;
							}
							Z = a.return;
						}
				}
				if (
					((be = i), _r(), hn && typeof hn.onPostCommitFiberRoot == "function")
				)
					try {
						hn.onPostCommitFiberRoot(sl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(_e = n), (Vt.transition = t);
		}
	}
	return !1;
}
function Ph(e, t, n) {
	(t = Li(n, t)),
		(t = Vy(e, t, 1)),
		(e = fr(e, t, 1)),
		(t = wt()),
		e !== null && (io(e, 1, t), Rt(e, t));
}
function Ve(e, t, n) {
	if (e.tag === 3) Ph(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Ph(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(hr === null || !hr.has(r)))
				) {
					(e = Li(n, e)),
						(e = Hy(t, e, 1)),
						(t = fr(t, e, 1)),
						(e = wt()),
						t !== null && (io(t, 1, e), Rt(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Dx(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = wt()),
		(e.pingedLanes |= e.suspendedLanes & n),
		it === e &&
			(lt & n) === n &&
			(et === 4 || (et === 3 && (lt & 130023424) === lt && 500 > We() - Md)
				? Mr(e, 0)
				: (Dd |= n)),
		Rt(e, t);
}
function cg(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Po), (Po <<= 1), !(Po & 130023424) && (Po = 4194304))
			: (t = 1));
	var n = wt();
	(e = Mn(e, t)), e !== null && (io(e, t, n), Rt(e, n));
}
function Mx(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), cg(e, n);
}
function Fx(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(z(314));
	}
	r !== null && r.delete(t), cg(e, n);
}
var dg;
dg = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ct.current) _t = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (_t = !1), Cx(e, t, n);
			_t = !!(e.flags & 131072);
		}
	else (_t = !1), Me && t.flags & 1048576 && py(t, Na, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Zo(e, t), (e = t.pendingProps);
			var i = Ti(t, ht.current);
			Si(t, n), (i = Pd(null, t, r, e, i, n));
			var s = Td();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  kt(r) ? ((s = !0), ka(t)) : (s = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  Cd(t),
					  (i.updater = dl),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  fc(t, r, e, n),
					  (t = mc(null, t, r, !0, s, n)))
					: ((t.tag = 0), Me && s && vd(t), yt(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Zo(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Bx(r)),
					(e = Yt(r, e)),
					i)
				) {
					case 0:
						t = pc(null, t, r, e, n);
						break e;
					case 1:
						t = xh(null, t, r, e, n);
						break e;
					case 11:
						t = vh(null, t, r, e, n);
						break e;
					case 14:
						t = wh(null, t, r, Yt(r.type, e), n);
						break e;
				}
				throw Error(z(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Yt(r, i)),
				pc(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Yt(r, i)),
				xh(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Qy(t), e === null)) throw Error(z(387));
				(r = t.pendingProps),
					(s = t.memoizedState),
					(i = s.element),
					vy(e, t),
					Ta(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = s),
						(t.memoizedState = s),
						t.flags & 256)
					) {
						(i = Li(Error(z(423)), t)), (t = bh(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Li(Error(z(424)), t)), (t = bh(e, t, r, n, i));
						break e;
					} else
						for (
							Tt = dr(t.stateNode.containerInfo.firstChild),
								It = t,
								Me = !0,
								en = null,
								n = Ey(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Ii(), r === i)) {
						t = Fn(e, t, n);
						break e;
					}
					yt(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Sy(t),
				e === null && uc(t),
				(r = t.type),
				(i = t.pendingProps),
				(s = e !== null ? e.memoizedProps : null),
				(o = i.children),
				ic(r, i) ? (o = null) : s !== null && ic(r, s) && (t.flags |= 32),
				Ky(e, t),
				yt(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && uc(t), null;
		case 13:
			return Gy(e, t, n);
		case 4:
			return (
				kd(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = ji(t, null, r, n)) : yt(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Yt(r, i)),
				vh(e, t, r, i, n)
			);
		case 7:
			return yt(e, t, t.pendingProps, n), t.child;
		case 8:
			return yt(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return yt(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(s = t.memoizedProps),
					(o = i.value),
					Ie(Oa, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (sn(s.value, o)) {
						if (s.children === i.children && !Ct.current) {
							t = Fn(e, t, n);
							break e;
						}
					} else
						for (s = t.child, s !== null && (s.return = t); s !== null; ) {
							var a = s.dependencies;
							if (a !== null) {
								o = s.child;
								for (var l = a.firstContext; l !== null; ) {
									if (l.context === r) {
										if (s.tag === 1) {
											(l = In(-1, n & -n)), (l.tag = 2);
											var u = s.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (l.next = l)
													: ((l.next = d.next), (d.next = l)),
													(u.pending = l);
											}
										}
										(s.lanes |= n),
											(l = s.alternate),
											l !== null && (l.lanes |= n),
											cc(s.return, n, t),
											(a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(z(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									cc(o, n, t),
									(o = s.sibling);
							} else o = s.child;
							if (o !== null) o.return = s;
							else
								for (o = s; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((s = o.sibling), s !== null)) {
										(s.return = o.return), (o = s);
										break;
									}
									o = o.return;
								}
							s = o;
						}
				yt(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Si(t, n),
				(i = Wt(i)),
				(r = r(i)),
				(t.flags |= 1),
				yt(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Yt(r, t.pendingProps)),
				(i = Yt(r.type, i)),
				wh(e, t, r, i, n)
			);
		case 15:
			return Wy(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Yt(r, i)),
				Zo(e, t),
				(t.tag = 1),
				kt(r) ? ((e = !0), ka(t)) : (e = !1),
				Si(t, n),
				xy(t, r, i),
				fc(t, r, i, n),
				mc(null, t, r, !0, e, n)
			);
		case 19:
			return Jy(e, t, n);
		case 22:
			return qy(e, t, n);
	}
	throw Error(z(156, t.tag));
};
function fg(e, t) {
	return Fm(e, t);
}
function Ux(e, t, n, r) {
	(this.tag = e),
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
		(this.pendingProps = t),
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
function $t(e, t, n, r) {
	return new Ux(e, t, n, r);
}
function zd(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bx(e) {
	if (typeof e == "function") return zd(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === od)) return 11;
		if (e === ad) return 14;
	}
	return 2;
}
function mr(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = $t(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function na(e, t, n, r, i, s) {
	var o = 2;
	if (((r = e), typeof e == "function")) zd(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else
		e: switch (e) {
			case si:
				return Fr(n.children, i, s, t);
			case sd:
				(o = 8), (i |= 8);
				break;
			case Du:
				return (
					(e = $t(12, n, t, i | 2)), (e.elementType = Du), (e.lanes = s), e
				);
			case Mu:
				return (e = $t(13, n, t, i)), (e.elementType = Mu), (e.lanes = s), e;
			case Fu:
				return (e = $t(19, n, t, i)), (e.elementType = Fu), (e.lanes = s), e;
			case bm:
				return ml(n, i, s, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case wm:
							o = 10;
							break e;
						case xm:
							o = 9;
							break e;
						case od:
							o = 11;
							break e;
						case ad:
							o = 14;
							break e;
						case Yn:
							(o = 16), (r = null);
							break e;
					}
				throw Error(z(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = $t(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
	);
}
function Fr(e, t, n, r) {
	return (e = $t(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
	return (
		(e = $t(22, e, r, t)),
		(e.elementType = bm),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function fu(e, t, n) {
	return (e = $t(6, e, null, t)), (e.lanes = n), e;
}
function hu(e, t, n) {
	return (
		(t = $t(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function zx(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Kl(0)),
		(this.expirationTimes = Kl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Kl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function $d(e, t, n, r, i, s, o, a, l) {
	return (
		(e = new zx(e, t, n, a, l)),
		t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
		(s = $t(3, null, null, t)),
		(e.current = s),
		(s.stateNode = e),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Cd(s),
		e
	);
}
function $x(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: ii,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function hg(e) {
	if (!e) return xr;
	e = e._reactInternals;
	e: {
		if (Jr(e) !== e || e.tag !== 1) throw Error(z(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (kt(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(z(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (kt(n)) return fy(e, n, t);
	}
	return t;
}
function pg(e, t, n, r, i, s, o, a, l) {
	return (
		(e = $d(n, r, !0, e, i, s, o, a, l)),
		(e.context = hg(null)),
		(n = e.current),
		(r = wt()),
		(i = pr(n)),
		(s = In(r, i)),
		(s.callback = t ?? null),
		fr(n, s, i),
		(e.current.lanes = i),
		io(e, i, r),
		Rt(e, r),
		e
	);
}
function yl(e, t, n, r) {
	var i = t.current,
		s = wt(),
		o = pr(i);
	return (
		(n = hg(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = In(s, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = fr(i, t, o)),
		e !== null && (rn(e, i, o, s), Jo(e, i, o)),
		o
	);
}
function Ua(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Th(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Vd(e, t) {
	Th(e, t), (e = e.alternate) && Th(e, t);
}
function Vx() {
	return null;
}
var mg =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Hd(e) {
	this._internalRoot = e;
}
gl.prototype.render = Hd.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(z(409));
	yl(e, t, null, null);
};
gl.prototype.unmount = Hd.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Hr(function () {
			yl(null, e, null, null);
		}),
			(t[Dn] = null);
	}
};
function gl(e) {
	this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Wm();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++);
		er.splice(n, 0, e), n === 0 && Km(e);
	}
};
function Wd(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Ih() {}
function Hx(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var s = r;
			r = function () {
				var u = Ua(o);
				s.call(u);
			};
		}
		var o = pg(t, r, e, 0, null, !1, !1, "", Ih);
		return (
			(e._reactRootContainer = o),
			(e[Dn] = o.current),
			zs(e.nodeType === 8 ? e.parentNode : e),
			Hr(),
			o
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = Ua(l);
			a.call(u);
		};
	}
	var l = $d(e, 0, !1, null, null, !1, !1, "", Ih);
	return (
		(e._reactRootContainer = l),
		(e[Dn] = l.current),
		zs(e.nodeType === 8 ? e.parentNode : e),
		Hr(function () {
			yl(t, l, n, r);
		}),
		l
	);
}
function wl(e, t, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var l = Ua(o);
				a.call(l);
			};
		}
		yl(t, o, e, i);
	} else o = Hx(n, t, e, i, r);
	return Ua(o);
}
Vm = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = gs(t.pendingLanes);
				n !== 0 &&
					(cd(t, n | 1), Rt(t, We()), !(be & 6) && ((Di = We() + 500), _r()));
			}
			break;
		case 13:
			Hr(function () {
				var r = Mn(e, 1);
				if (r !== null) {
					var i = wt();
					rn(r, e, 1, i);
				}
			}),
				Vd(e, 1);
	}
};
dd = function (e) {
	if (e.tag === 13) {
		var t = Mn(e, 134217728);
		if (t !== null) {
			var n = wt();
			rn(t, e, 134217728, n);
		}
		Vd(e, 134217728);
	}
};
Hm = function (e) {
	if (e.tag === 13) {
		var t = pr(e),
			n = Mn(e, t);
		if (n !== null) {
			var r = wt();
			rn(n, e, t, r);
		}
		Vd(e, t);
	}
};
Wm = function () {
	return _e;
};
qm = function (e, t) {
	var n = _e;
	try {
		return (_e = e), t();
	} finally {
		_e = n;
	}
};
Qu = function (e, t, n) {
	switch (t) {
		case "input":
			if ((zu(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = ul(r);
						if (!i) throw Error(z(90));
						Sm(r), zu(r, i);
					}
				}
			}
			break;
		case "textarea":
			Cm(e, n);
			break;
		case "select":
			(t = n.value), t != null && wi(e, !!n.multiple, t, !1);
	}
};
Im = Fd;
jm = Hr;
var Wx = { usingClientEntryPoint: !1, Events: [oo, ui, ul, Pm, Tm, Fd] },
	ls = {
		findFiberByHostInstance: Pr,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	qx = {
		bundleType: ls.bundleType,
		version: ls.version,
		rendererPackageName: ls.rendererPackageName,
		rendererConfig: ls.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: zn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Dm(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: ls.findFiberByHostInstance || Vx,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!zo.isDisabled && zo.supportsFiber)
		try {
			(sl = zo.inject(qx)), (hn = zo);
		} catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wx;
At.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Wd(t)) throw Error(z(200));
	return $x(e, t, null, n);
};
At.createRoot = function (e, t) {
	if (!Wd(e)) throw Error(z(299));
	var n = !1,
		r = "",
		i = mg;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = $d(e, 1, !1, null, null, n, !1, r, i)),
		(e[Dn] = t.current),
		zs(e.nodeType === 8 ? e.parentNode : e),
		new Hd(t)
	);
};
At.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(z(188))
			: ((e = Object.keys(e).join(",")), Error(z(268, e)));
	return (e = Dm(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
	return Hr(e);
};
At.hydrate = function (e, t, n) {
	if (!vl(t)) throw Error(z(200));
	return wl(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
	if (!Wd(e)) throw Error(z(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = "",
		o = mg;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = pg(t, null, e, 1, n ?? null, i, !1, s, o)),
		(e[Dn] = t.current),
		zs(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new gl(t);
};
At.render = function (e, t, n) {
	if (!vl(t)) throw Error(z(200));
	return wl(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
	if (!vl(e)) throw Error(z(40));
	return e._reactRootContainer
		? (Hr(function () {
				wl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Dn] = null);
				});
		  }),
		  !0)
		: !1;
};
At.unstable_batchedUpdates = Fd;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!vl(n)) throw Error(z(200));
	if (e == null || e._reactInternals === void 0) throw Error(z(38));
	return wl(e, t, n, !1, r);
};
At.version = "18.2.0-next-9e3b772b8-20220608";
function yg() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yg);
		} catch (e) {
			console.error(e);
		}
}
yg(), (pm.exports = At);
var gg = pm.exports,
	jh = gg;
(Au.createRoot = jh.createRoot), (Au.hydrateRoot = jh.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function De() {
	return (
		(De = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		De.apply(this, arguments)
	);
}
var Ke;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ke || (Ke = {}));
const Ah = "popstate";
function Kx(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: s, search: o, hash: a } = r.location;
		return Js(
			"",
			{ pathname: s, search: o, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : Wr(i);
	}
	return Gx(t, n, null, e);
}
function ge(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Mi(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Qx() {
	return Math.random().toString(36).substr(2, 8);
}
function Lh(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Js(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		De(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? $n(t) : t,
			{ state: n, key: (t && t.key) || r || Qx() }
		)
	);
}
function Wr(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function $n(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Gx(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: s = !1 } = r,
		o = i.history,
		a = Ke.Pop,
		l = null,
		u = d();
	u == null && ((u = 0), o.replaceState(De({}, o.state, { idx: u }), ""));
	function d() {
		return (o.state || { idx: null }).idx;
	}
	function f() {
		a = Ke.Pop;
		let C = d(),
			g = C == null ? null : C - u;
		(u = C), l && l({ action: a, location: E.location, delta: g });
	}
	function p(C, g) {
		a = Ke.Push;
		let h = Js(E.location, C, g);
		n && n(h, C), (u = d() + 1);
		let v = Lh(h, u),
			m = E.createHref(h);
		try {
			o.pushState(v, "", m);
		} catch (_) {
			if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
			i.location.assign(m);
		}
		s && l && l({ action: a, location: E.location, delta: 1 });
	}
	function b(C, g) {
		a = Ke.Replace;
		let h = Js(E.location, C, g);
		n && n(h, C), (u = d());
		let v = Lh(h, u),
			m = E.createHref(h);
		o.replaceState(v, "", m),
			s && l && l({ action: a, location: E.location, delta: 0 });
	}
	function w(C) {
		let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
			h = typeof C == "string" ? C : Wr(C);
		return (
			ge(
				g,
				"No window.location.(origin|href) available to create URL for href: " +
					h
			),
			new URL(h, g)
		);
	}
	let E = {
		get action() {
			return a;
		},
		get location() {
			return e(i, o);
		},
		listen(C) {
			if (l) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Ah, f),
				(l = C),
				() => {
					i.removeEventListener(Ah, f), (l = null);
				}
			);
		},
		createHref(C) {
			return t(i, C);
		},
		createURL: w,
		encodeLocation(C) {
			let g = w(C);
			return { pathname: g.pathname, search: g.search, hash: g.hash };
		},
		push: p,
		replace: b,
		go(C) {
			return o.go(C);
		},
	};
	return E;
}
var Xe;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Xe || (Xe = {}));
const Jx = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function Yx(e) {
	return e.index === !0;
}
function Rc(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((i, s) => {
			let o = [...n, s],
				a = typeof i.id == "string" ? i.id : o.join("-");
			if (
				(ge(
					i.index !== !0 || !i.children,
					"Cannot specify children on an index route"
				),
				ge(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				Yx(i))
			) {
				let l = De({}, i, t(i), { id: a });
				return (r[a] = l), l;
			} else {
				let l = De({}, i, t(i), { id: a, children: void 0 });
				return (
					(r[a] = l), i.children && (l.children = Rc(i.children, t, o, r)), l
				);
			}
		})
	);
}
function yi(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? $n(t) : t,
		i = Ki(r.pathname || "/", n);
	if (i == null) return null;
	let s = vg(e);
	Xx(s);
	let o = null;
	for (let a = 0; o == null && a < s.length; ++a) o = a1(s[a], c1(i));
	return o;
}
function vg(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (s, o, a) => {
		let l = {
			relativePath: a === void 0 ? s.path || "" : a,
			caseSensitive: s.caseSensitive === !0,
			childrenIndex: o,
			route: s,
		};
		l.relativePath.startsWith("/") &&
			(ge(
				l.relativePath.startsWith(r),
				'Absolute route path "' +
					l.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(l.relativePath = l.relativePath.slice(r.length)));
		let u = jn([r, l.relativePath]),
			d = n.concat(l);
		s.children &&
			s.children.length > 0 &&
			(ge(
				s.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			vg(s.children, t, d, u)),
			!(s.path == null && !s.index) &&
				t.push({ path: u, score: s1(u, s.index), routesMeta: d });
	};
	return (
		e.forEach((s, o) => {
			var a;
			if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
			else for (let l of wg(s.path)) i(s, o, l);
		}),
		t
	);
}
function wg(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		s = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [s, ""] : [s];
	let o = wg(r.join("/")),
		a = [];
	return (
		a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
		i && a.push(...o),
		a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
	);
}
function Xx(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: o1(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Zx = /^:\w+$/,
	e1 = 3,
	t1 = 2,
	n1 = 1,
	r1 = 10,
	i1 = -2,
	Dh = (e) => e === "*";
function s1(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Dh) && (r += i1),
		t && (r += t1),
		n
			.filter((i) => !Dh(i))
			.reduce((i, s) => i + (Zx.test(s) ? e1 : s === "" ? n1 : r1), r)
	);
}
function o1(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function a1(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		s = [];
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			l = o === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			d = l1(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
				u
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let f = a.route;
		s.push({
			params: r,
			pathname: jn([i, d.pathname]),
			pathnameBase: p1(jn([i, d.pathnameBase])),
			route: f,
		}),
			d.pathnameBase !== "/" && (i = jn([i, d.pathnameBase]));
	}
	return s;
}
function l1(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = u1(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let s = i[0],
		o = s.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((u, d, f) => {
			if (d === "*") {
				let p = a[f] || "";
				o = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1");
			}
			return (u[d] = d1(a[f] || "", d)), u;
		}, {}),
		pathname: s,
		pathnameBase: o,
		pattern: e,
	};
}
function u1(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Mi(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
	return (
		e.endsWith("*")
			? (r.push("*"),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function c1(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			Mi(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function d1(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			Mi(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function Ki(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function f1(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? $n(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : h1(n, t)) : t,
		search: m1(r),
		hash: y1(i),
	};
}
function h1(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function pu(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function xl(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function qd(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = $n(e))
		: ((i = De({}, e)),
		  ge(
				!i.pathname || !i.pathname.includes("?"),
				pu("?", "pathname", "search", i)
		  ),
		  ge(
				!i.pathname || !i.pathname.includes("#"),
				pu("#", "pathname", "hash", i)
		  ),
		  ge(!i.search || !i.search.includes("#"), pu("#", "search", "hash", i)));
	let s = e === "" || i.pathname === "",
		o = s ? "/" : i.pathname,
		a;
	if (r || o == null) a = n;
	else {
		let f = t.length - 1;
		if (o.startsWith("..")) {
			let p = o.split("/");
			for (; p[0] === ".."; ) p.shift(), (f -= 1);
			i.pathname = p.join("/");
		}
		a = f >= 0 ? t[f] : "/";
	}
	let l = f1(i, a),
		u = o && o !== "/" && o.endsWith("/"),
		d = (s || o === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const jn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	p1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	m1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	y1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Kd {
	constructor(t, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = i),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function xg(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const bg = ["post", "put", "patch", "delete"],
	g1 = new Set(bg),
	v1 = ["get", ...bg],
	w1 = new Set(v1),
	x1 = new Set([301, 302, 303, 307, 308]),
	b1 = new Set([307, 308]),
	mu = {
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
	us = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	Eg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	S1 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function _1(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u",
		r = !n;
	ge(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter"
	);
	let i;
	if (e.mapRouteProperties) i = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let y = e.detectErrorBoundary;
		i = (x) => ({ hasErrorBoundary: y(x) });
	} else i = S1;
	let s = {},
		o = Rc(e.routes, i, void 0, s),
		a,
		l = e.basename || "/",
		u = De({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
		d = null,
		f = new Set(),
		p = null,
		b = null,
		w = null,
		E = e.hydrationData != null,
		C = yi(o, e.history.location, l),
		g = null;
	if (C == null) {
		let y = Mt(404, { pathname: e.history.location.pathname }),
			{ matches: x, route: k } = Hh(o);
		(C = x), (g = { [k.id]: y });
	}
	let h =
			!C.some((y) => y.route.lazy) &&
			(!C.some((y) => y.route.loader) || e.hydrationData != null),
		v,
		m = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: C,
			initialized: h,
			navigation: mu,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || g,
			fetchers: new Map(),
			blockers: new Map(),
		},
		_ = Ke.Pop,
		O = !1,
		P,
		N = !1,
		V = !1,
		K = [],
		ie = [],
		Q = new Map(),
		te = 0,
		oe = -1,
		me = new Map(),
		fe = new Set(),
		we = new Map(),
		B = new Map(),
		X = new Map(),
		J = !1;
	function he() {
		return (
			(d = e.history.listen((y) => {
				let { action: x, location: k, delta: j } = y;
				if (J) {
					J = !1;
					return;
				}
				Mi(
					X.size === 0 || j != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
				);
				let D = M({
					currentLocation: m.location,
					nextLocation: k,
					historyAction: x,
				});
				if (D && j != null) {
					(J = !0),
						e.history.go(j * -1),
						Hn(D, {
							state: "blocked",
							location: k,
							proceed() {
								Hn(D, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: k,
								}),
									e.history.go(j);
							},
							reset() {
								let W = new Map(m.blockers);
								W.set(D, us), se({ blockers: W });
							},
						});
					return;
				}
				return Fe(x, k);
			})),
			m.initialized || Fe(Ke.Pop, m.location),
			v
		);
	}
	function pe() {
		d && d(),
			f.clear(),
			P && P.abort(),
			m.fetchers.forEach((y, x) => ee(x)),
			m.blockers.forEach((y, x) => Ot(x));
	}
	function Oe(y) {
		return f.add(y), () => f.delete(y);
	}
	function se(y) {
		(m = De({}, m, y)), f.forEach((x) => x(m));
	}
	function Ce(y, x) {
		var k, j;
		let D =
				m.actionData != null &&
				m.navigation.formMethod != null &&
				Zt(m.navigation.formMethod) &&
				m.navigation.state === "loading" &&
				((k = y.state) == null ? void 0 : k._isRedirect) !== !0,
			W;
		x.actionData
			? Object.keys(x.actionData).length > 0
				? (W = x.actionData)
				: (W = null)
			: D
			? (W = m.actionData)
			: (W = null);
		let Y = x.loaderData
				? Vh(m.loaderData, x.loaderData, x.matches || [], x.errors)
				: m.loaderData,
			G = m.blockers;
		G.size > 0 && ((G = new Map(G)), G.forEach((ue, ye) => G.set(ye, us)));
		let q =
			O === !0 ||
			(m.navigation.formMethod != null &&
				Zt(m.navigation.formMethod) &&
				((j = y.state) == null ? void 0 : j._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			N ||
				_ === Ke.Pop ||
				(_ === Ke.Push
					? e.history.push(y, y.state)
					: _ === Ke.Replace && e.history.replace(y, y.state)),
			se(
				De({}, x, {
					actionData: W,
					loaderData: Y,
					historyAction: _,
					location: y,
					initialized: !0,
					navigation: mu,
					revalidation: "idle",
					restoreScrollPosition: de(y, x.matches || m.matches),
					preventScrollReset: q,
					blockers: G,
				})
			),
			(_ = Ke.Pop),
			(O = !1),
			(N = !1),
			(V = !1),
			(K = []),
			(ie = []);
	}
	async function qe(y, x) {
		if (typeof y == "number") {
			e.history.go(y);
			return;
		}
		let k = Nc(
				m.location,
				m.matches,
				l,
				u.v7_prependBasename,
				y,
				x == null ? void 0 : x.fromRouteId,
				x == null ? void 0 : x.relative
			),
			{
				path: j,
				submission: D,
				error: W,
			} = Mh(u.v7_normalizeFormMethod, !1, k, x),
			Y = m.location,
			G = Js(m.location, j, x && x.state);
		G = De({}, G, e.history.encodeLocation(G));
		let q = x && x.replace != null ? x.replace : void 0,
			ue = Ke.Push;
		q === !0
			? (ue = Ke.Replace)
			: q === !1 ||
			  (D != null &&
					Zt(D.formMethod) &&
					D.formAction === m.location.pathname + m.location.search &&
					(ue = Ke.Replace));
		let ye =
				x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
			le = M({ currentLocation: Y, nextLocation: G, historyAction: ue });
		if (le) {
			Hn(le, {
				state: "blocked",
				location: G,
				proceed() {
					Hn(le, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: G,
					}),
						qe(y, x);
				},
				reset() {
					let Re = new Map(m.blockers);
					Re.set(le, us), se({ blockers: Re });
				},
			});
			return;
		}
		return await Fe(ue, G, {
			submission: D,
			pendingError: W,
			preventScrollReset: ye,
			replace: x && x.replace,
		});
	}
	function mt() {
		if (
			(T(),
			se({ revalidation: "loading" }),
			m.navigation.state !== "submitting")
		) {
			if (m.navigation.state === "idle") {
				Fe(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Fe(_ || m.historyAction, m.navigation.location, {
				overrideNavigation: m.navigation,
			});
		}
	}
	async function Fe(y, x, k) {
		P && P.abort(),
			(P = null),
			(_ = y),
			(N = (k && k.startUninterruptedRevalidation) === !0),
			ce(m.location, m.matches),
			(O = (k && k.preventScrollReset) === !0);
		let j = a || o,
			D = k && k.overrideNavigation,
			W = yi(j, x, l);
		if (!W) {
			let Re = Mt(404, { pathname: x.pathname }),
				{ matches: Te, route: Dt } = Hh(j);
			R(), Ce(x, { matches: Te, loaderData: {}, errors: { [Dt.id]: Re } });
			return;
		}
		if (
			m.initialized &&
			!V &&
			O1(m.location, x) &&
			!(k && k.submission && Zt(k.submission.formMethod))
		) {
			Ce(x, { matches: W });
			return;
		}
		P = new AbortController();
		let Y = ds(e.history, x, P.signal, k && k.submission),
			G,
			q;
		if (k && k.pendingError) q = { [gi(W).route.id]: k.pendingError };
		else if (k && k.submission && Zt(k.submission.formMethod)) {
			let Re = await wn(Y, x, k.submission, W, { replace: k.replace });
			if (Re.shortCircuited) return;
			(G = Re.pendingActionData),
				(q = Re.pendingActionError),
				(D = $o(x, k.submission)),
				(Y = new Request(Y.url, { signal: Y.signal }));
		}
		let {
			shortCircuited: ue,
			loaderData: ye,
			errors: le,
		} = await Qt(
			Y,
			x,
			W,
			D,
			k && k.submission,
			k && k.fetcherSubmission,
			k && k.replace,
			G,
			q
		);
		ue ||
			((P = null),
			Ce(
				x,
				De({ matches: W }, G ? { actionData: G } : {}, {
					loaderData: ye,
					errors: le,
				})
			));
	}
	async function wn(y, x, k, j, D) {
		D === void 0 && (D = {}), T();
		let W = A1(x, k);
		se({ navigation: W });
		let Y,
			G = Pc(j, x);
		if (!G.route.action && !G.route.lazy)
			Y = {
				type: Xe.error,
				error: Mt(405, {
					method: y.method,
					pathname: x.pathname,
					routeId: G.route.id,
				}),
			};
		else if (((Y = await cs("action", y, G, j, s, i, l)), y.signal.aborted))
			return { shortCircuited: !0 };
		if (Ci(Y)) {
			let q;
			return (
				D && D.replace != null
					? (q = D.replace)
					: (q = Y.location === m.location.pathname + m.location.search),
				await Nt(m, Y, { submission: k, replace: q }),
				{ shortCircuited: !0 }
			);
		}
		if (Ts(Y)) {
			let q = gi(j, G.route.id);
			return (
				(D && D.replace) !== !0 && (_ = Ke.Push),
				{ pendingActionData: {}, pendingActionError: { [q.route.id]: Y.error } }
			);
		}
		if (jr(Y)) throw Mt(400, { type: "defer-action" });
		return { pendingActionData: { [G.route.id]: Y.data } };
	}
	async function Qt(y, x, k, j, D, W, Y, G, q) {
		let ue = j || $o(x, D),
			ye = D || W || Kh(ue),
			le = a || o,
			[Re, Te] = Fh(e.history, m, k, ye, x, V, K, ie, we, fe, le, l, G, q);
		if (
			(R(
				(Ne) =>
					!(k && k.some((Gt) => Gt.route.id === Ne)) ||
					(Re && Re.some((Gt) => Gt.route.id === Ne))
			),
			(oe = ++te),
			Re.length === 0 && Te.length === 0)
		) {
			let Ne = re();
			return (
				Ce(
					x,
					De(
						{ matches: k, loaderData: {}, errors: q || null },
						G ? { actionData: G } : {},
						Ne ? { fetchers: new Map(m.fetchers) } : {}
					)
				),
				{ shortCircuited: !0 }
			);
		}
		if (!N) {
			Te.forEach((Gt) => {
				let qn = m.fetchers.get(Gt.key),
					zl = fs(void 0, qn ? qn.data : void 0);
				m.fetchers.set(Gt.key, zl);
			});
			let Ne = G || m.actionData;
			se(
				De(
					{ navigation: ue },
					Ne
						? Object.keys(Ne).length === 0
							? { actionData: null }
							: { actionData: Ne }
						: {},
					Te.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
				)
			);
		}
		Te.forEach((Ne) => {
			Q.has(Ne.key) && H(Ne.key), Ne.controller && Q.set(Ne.key, Ne.controller);
		});
		let Dt = () => Te.forEach((Ne) => H(Ne.key));
		P && P.signal.addEventListener("abort", Dt);
		let {
			results: an,
			loaderResults: Wn,
			fetcherResults: Ml,
		} = await S(m.matches, k, Re, Te, y);
		if (y.signal.aborted) return { shortCircuited: !0 };
		P && P.signal.removeEventListener("abort", Dt),
			Te.forEach((Ne) => Q.delete(Ne.key));
		let xn = Wh(an);
		if (xn) {
			if (xn.idx >= Re.length) {
				let Ne = Te[xn.idx - Re.length].key;
				fe.add(Ne);
			}
			return await Nt(m, xn.result, { replace: Y }), { shortCircuited: !0 };
		}
		let { loaderData: bn, errors: _o } = $h(m, k, Re, Wn, q, Te, Ml, B);
		B.forEach((Ne, Gt) => {
			Ne.subscribe((qn) => {
				(qn || Ne.done) && B.delete(Gt);
			});
		});
		let Fl = re(),
			Ul = Se(oe),
			Bl = Fl || Ul || Te.length > 0;
		return De(
			{ loaderData: bn, errors: _o },
			Bl ? { fetchers: new Map(m.fetchers) } : {}
		);
	}
	function $e(y) {
		return m.fetchers.get(y) || E1;
	}
	function Je(y, x, k, j) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		Q.has(y) && H(y);
		let D = a || o,
			W = Nc(
				m.location,
				m.matches,
				l,
				u.v7_prependBasename,
				k,
				x,
				j == null ? void 0 : j.relative
			),
			Y = yi(D, W, l);
		if (!Y) {
			A(y, x, Mt(404, { pathname: W }));
			return;
		}
		let {
			path: G,
			submission: q,
			error: ue,
		} = Mh(u.v7_normalizeFormMethod, !0, W, j);
		if (ue) {
			A(y, x, ue);
			return;
		}
		let ye = Pc(Y, G);
		if (((O = (j && j.preventScrollReset) === !0), q && Zt(q.formMethod))) {
			Et(y, x, G, ye, Y, q);
			return;
		}
		we.set(y, { routeId: x, path: G }), Zi(y, x, G, ye, Y, q);
	}
	async function Et(y, x, k, j, D, W) {
		if ((T(), we.delete(y), !j.route.action && !j.route.lazy)) {
			let Ye = Mt(405, { method: W.formMethod, pathname: k, routeId: x });
			A(y, x, Ye);
			return;
		}
		let Y = m.fetchers.get(y),
			G = L1(W, Y);
		m.fetchers.set(y, G), se({ fetchers: new Map(m.fetchers) });
		let q = new AbortController(),
			ue = ds(e.history, k, q.signal, W);
		Q.set(y, q);
		let ye = te,
			le = await cs("action", ue, j, D, s, i, l);
		if (ue.signal.aborted) {
			Q.get(y) === q && Q.delete(y);
			return;
		}
		if (Ci(le))
			if ((Q.delete(y), oe > ye)) {
				let Ye = ri(void 0);
				m.fetchers.set(y, Ye), se({ fetchers: new Map(m.fetchers) });
				return;
			} else {
				fe.add(y);
				let Ye = fs(W);
				return (
					m.fetchers.set(y, Ye),
					se({ fetchers: new Map(m.fetchers) }),
					Nt(m, le, { submission: W, isFetchActionRedirect: !0 })
				);
			}
		if (Ts(le)) {
			A(y, x, le.error);
			return;
		}
		if (jr(le)) throw Mt(400, { type: "defer-action" });
		let Re = m.navigation.location || m.location,
			Te = ds(e.history, Re, q.signal),
			Dt = a || o,
			an =
				m.navigation.state !== "idle"
					? yi(Dt, m.navigation.location, l)
					: m.matches;
		ge(an, "Didn't find any matches after fetcher action");
		let Wn = ++te;
		me.set(y, Wn);
		let Ml = fs(W, le.data);
		m.fetchers.set(y, Ml);
		let [xn, bn] = Fh(
			e.history,
			m,
			an,
			W,
			Re,
			V,
			K,
			ie,
			we,
			fe,
			Dt,
			l,
			{ [j.route.id]: le.data },
			void 0
		);
		bn
			.filter((Ye) => Ye.key !== y)
			.forEach((Ye) => {
				let es = Ye.key,
					_f = m.fetchers.get(es),
					w0 = fs(void 0, _f ? _f.data : void 0);
				m.fetchers.set(es, w0),
					Q.has(es) && H(es),
					Ye.controller && Q.set(es, Ye.controller);
			}),
			se({ fetchers: new Map(m.fetchers) });
		let _o = () => bn.forEach((Ye) => H(Ye.key));
		q.signal.addEventListener("abort", _o);
		let {
			results: Fl,
			loaderResults: Ul,
			fetcherResults: Bl,
		} = await S(m.matches, an, xn, bn, Te);
		if (q.signal.aborted) return;
		q.signal.removeEventListener("abort", _o),
			me.delete(y),
			Q.delete(y),
			bn.forEach((Ye) => Q.delete(Ye.key));
		let Ne = Wh(Fl);
		if (Ne) {
			if (Ne.idx >= xn.length) {
				let Ye = bn[Ne.idx - xn.length].key;
				fe.add(Ye);
			}
			return Nt(m, Ne.result);
		}
		let { loaderData: Gt, errors: qn } = $h(
			m,
			m.matches,
			xn,
			Ul,
			void 0,
			bn,
			Bl,
			B
		);
		if (m.fetchers.has(y)) {
			let Ye = ri(le.data);
			m.fetchers.set(y, Ye);
		}
		let zl = Se(Wn);
		m.navigation.state === "loading" && Wn > oe
			? (ge(_, "Expected pending action"),
			  P && P.abort(),
			  Ce(m.navigation.location, {
					matches: an,
					loaderData: Gt,
					errors: qn,
					fetchers: new Map(m.fetchers),
			  }))
			: (se(
					De(
						{ errors: qn, loaderData: Vh(m.loaderData, Gt, an, qn) },
						zl || bn.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
					)
			  ),
			  (V = !1));
	}
	async function Zi(y, x, k, j, D, W) {
		let Y = m.fetchers.get(y),
			G = fs(W, Y ? Y.data : void 0);
		m.fetchers.set(y, G), se({ fetchers: new Map(m.fetchers) });
		let q = new AbortController(),
			ue = ds(e.history, k, q.signal);
		Q.set(y, q);
		let ye = te,
			le = await cs("loader", ue, j, D, s, i, l);
		if (
			(jr(le) && (le = (await Cg(le, ue.signal, !0)) || le),
			Q.get(y) === q && Q.delete(y),
			ue.signal.aborted)
		)
			return;
		if (Ci(le))
			if (oe > ye) {
				let Te = ri(void 0);
				m.fetchers.set(y, Te), se({ fetchers: new Map(m.fetchers) });
				return;
			} else {
				fe.add(y), await Nt(m, le);
				return;
			}
		if (Ts(le)) {
			let Te = gi(m.matches, x);
			m.fetchers.delete(y),
				se({
					fetchers: new Map(m.fetchers),
					errors: { [Te.route.id]: le.error },
				});
			return;
		}
		ge(!jr(le), "Unhandled fetcher deferred data");
		let Re = ri(le.data);
		m.fetchers.set(y, Re), se({ fetchers: new Map(m.fetchers) });
	}
	async function Nt(y, x, k) {
		let {
			submission: j,
			replace: D,
			isFetchActionRedirect: W,
		} = k === void 0 ? {} : k;
		x.revalidate && (V = !0);
		let Y = Js(
			y.location,
			x.location,
			De({ _isRedirect: !0 }, W ? { _isFetchActionRedirect: !0 } : {})
		);
		if (
			(ge(Y, "Expected a location on the redirect navigation"),
			Eg.test(x.location) && n)
		) {
			let ue = e.history.createURL(x.location),
				ye = Ki(ue.pathname, l) == null;
			if (t.location.origin !== ue.origin || ye) {
				D ? t.location.replace(x.location) : t.location.assign(x.location);
				return;
			}
		}
		P = null;
		let G = D === !0 ? Ke.Replace : Ke.Push,
			q = j || Kh(y.navigation);
		if (b1.has(x.status) && q && Zt(q.formMethod))
			await Fe(G, Y, {
				submission: De({}, q, { formAction: x.location }),
				preventScrollReset: O,
			});
		else if (W)
			await Fe(G, Y, {
				overrideNavigation: $o(Y),
				fetcherSubmission: q,
				preventScrollReset: O,
			});
		else {
			let ue = $o(Y, q);
			await Fe(G, Y, { overrideNavigation: ue, preventScrollReset: O });
		}
	}
	async function S(y, x, k, j, D) {
		let W = await Promise.all([
				...k.map((q) => cs("loader", D, q, x, s, i, l)),
				...j.map((q) =>
					q.matches && q.match && q.controller
						? cs(
								"loader",
								ds(e.history, q.path, q.controller.signal),
								q.match,
								q.matches,
								s,
								i,
								l
						  )
						: { type: Xe.error, error: Mt(404, { pathname: q.path }) }
				),
			]),
			Y = W.slice(0, k.length),
			G = W.slice(k.length);
		return (
			await Promise.all([
				qh(
					y,
					k,
					Y,
					Y.map(() => D.signal),
					!1,
					m.loaderData
				),
				qh(
					y,
					j.map((q) => q.match),
					G,
					j.map((q) => (q.controller ? q.controller.signal : null)),
					!0
				),
			]),
			{ results: W, loaderResults: Y, fetcherResults: G }
		);
	}
	function T() {
		(V = !0),
			K.push(...R()),
			we.forEach((y, x) => {
				Q.has(x) && (ie.push(x), H(x));
			});
	}
	function A(y, x, k) {
		let j = gi(m.matches, x);
		ee(y), se({ errors: { [j.route.id]: k }, fetchers: new Map(m.fetchers) });
	}
	function ee(y) {
		let x = m.fetchers.get(y);
		Q.has(y) && !(x && x.state === "loading" && me.has(y)) && H(y),
			we.delete(y),
			me.delete(y),
			fe.delete(y),
			m.fetchers.delete(y);
	}
	function H(y) {
		let x = Q.get(y);
		ge(x, "Expected fetch controller: " + y), x.abort(), Q.delete(y);
	}
	function $(y) {
		for (let x of y) {
			let k = $e(x),
				j = ri(k.data);
			m.fetchers.set(x, j);
		}
	}
	function re() {
		let y = [],
			x = !1;
		for (let k of fe) {
			let j = m.fetchers.get(k);
			ge(j, "Expected fetcher: " + k),
				j.state === "loading" && (fe.delete(k), y.push(k), (x = !0));
		}
		return $(y), x;
	}
	function Se(y) {
		let x = [];
		for (let [k, j] of me)
			if (j < y) {
				let D = m.fetchers.get(k);
				ge(D, "Expected fetcher: " + k),
					D.state === "loading" && (H(k), me.delete(k), x.push(k));
			}
		return $(x), x.length > 0;
	}
	function ke(y, x) {
		let k = m.blockers.get(y) || us;
		return X.get(y) !== x && X.set(y, x), k;
	}
	function Ot(y) {
		m.blockers.delete(y), X.delete(y);
	}
	function Hn(y, x) {
		let k = m.blockers.get(y) || us;
		ge(
			(k.state === "unblocked" && x.state === "blocked") ||
				(k.state === "blocked" && x.state === "blocked") ||
				(k.state === "blocked" && x.state === "proceeding") ||
				(k.state === "blocked" && x.state === "unblocked") ||
				(k.state === "proceeding" && x.state === "unblocked"),
			"Invalid blocker state transition: " + k.state + " -> " + x.state
		);
		let j = new Map(m.blockers);
		j.set(y, x), se({ blockers: j });
	}
	function M(y) {
		let { currentLocation: x, nextLocation: k, historyAction: j } = y;
		if (X.size === 0) return;
		X.size > 1 && Mi(!1, "A router only supports one blocker at a time");
		let D = Array.from(X.entries()),
			[W, Y] = D[D.length - 1],
			G = m.blockers.get(W);
		if (
			!(G && G.state === "proceeding") &&
			Y({ currentLocation: x, nextLocation: k, historyAction: j })
		)
			return W;
	}
	function R(y) {
		let x = [];
		return (
			B.forEach((k, j) => {
				(!y || y(j)) && (k.cancel(), x.push(j), B.delete(j));
			}),
			x
		);
	}
	function F(y, x, k) {
		if (((p = y), (w = x), (b = k || null), !E && m.navigation === mu)) {
			E = !0;
			let j = de(m.location, m.matches);
			j != null && se({ restoreScrollPosition: j });
		}
		return () => {
			(p = null), (w = null), (b = null);
		};
	}
	function U(y, x) {
		return (
			(b &&
				b(
					y,
					x.map((j) => j1(j, m.loaderData))
				)) ||
			y.key
		);
	}
	function ce(y, x) {
		if (p && w) {
			let k = U(y, x);
			p[k] = w();
		}
	}
	function de(y, x) {
		if (p) {
			let k = U(y, x),
				j = p[k];
			if (typeof j == "number") return j;
		}
		return null;
	}
	function Ee(y) {
		(s = {}), (a = Rc(y, i, void 0, s));
	}
	return (
		(v = {
			get basename() {
				return l;
			},
			get state() {
				return m;
			},
			get routes() {
				return o;
			},
			initialize: he,
			subscribe: Oe,
			enableScrollRestoration: F,
			navigate: qe,
			fetch: Je,
			revalidate: mt,
			createHref: (y) => e.history.createHref(y),
			encodeLocation: (y) => e.history.encodeLocation(y),
			getFetcher: $e,
			deleteFetcher: ee,
			dispose: pe,
			getBlocker: ke,
			deleteBlocker: Ot,
			_internalFetchControllers: Q,
			_internalActiveDeferreds: B,
			_internalSetRoutes: Ee,
		}),
		v
	);
}
function C1(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function Nc(e, t, n, r, i, s, o) {
	let a, l;
	if (s != null && o !== "path") {
		a = [];
		for (let d of t)
			if ((a.push(d), d.route.id === s)) {
				l = d;
				break;
			}
	} else (a = t), (l = t[t.length - 1]);
	let u = qd(
		i || ".",
		xl(a).map((d) => d.pathnameBase),
		Ki(e.pathname, n) || e.pathname,
		o === "path"
	);
	return (
		i == null && ((u.search = e.search), (u.hash = e.hash)),
		(i == null || i === "" || i === ".") &&
			l &&
			l.route.index &&
			!Qd(u.search) &&
			(u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
		r &&
			n !== "/" &&
			(u.pathname = u.pathname === "/" ? n : jn([n, u.pathname])),
		Wr(u)
	);
}
function Mh(e, t, n, r) {
	if (!r || !C1(r)) return { path: n };
	if (r.formMethod && !I1(r.formMethod))
		return { path: n, error: Mt(405, { method: r.formMethod }) };
	let i = () => ({ path: n, error: Mt(400, { type: "invalid-body" }) }),
		s = r.formMethod || "get",
		o = e ? s.toUpperCase() : s.toLowerCase(),
		a = _g(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!Zt(o)) return i();
			let p =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((b, w) => {
							let [E, C] = w;
							return (
								"" +
								b +
								E +
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
					formMethod: o,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: p,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!Zt(o)) return i();
			try {
				let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: p,
						text: void 0,
					},
				};
			} catch {
				return i();
			}
		}
	}
	ge(
		typeof FormData == "function",
		"FormData is not available in this environment"
	);
	let l, u;
	if (r.formData) (l = Oc(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (l = Oc(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (l = r.body), (u = zh(l));
	else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
	else
		try {
			(l = new URLSearchParams(r.body)), (u = zh(l));
		} catch {
			return i();
		}
	let d = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (Zt(d.formMethod)) return { path: n, submission: d };
	let f = $n(n);
	return (
		t && f.search && Qd(f.search) && l.append("index", ""),
		(f.search = "?" + l),
		{ path: Wr(f), submission: d }
	);
}
function k1(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((i) => i.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Fh(e, t, n, r, i, s, o, a, l, u, d, f, p, b) {
	let w = b ? Object.values(b)[0] : p ? Object.values(p)[0] : void 0,
		E = e.createURL(t.location),
		C = e.createURL(i),
		g = b ? Object.keys(b)[0] : void 0,
		v = k1(n, g).filter((_, O) => {
			if (_.route.lazy) return !0;
			if (_.route.loader == null) return !1;
			if (R1(t.loaderData, t.matches[O], _) || o.some((V) => V === _.route.id))
				return !0;
			let P = t.matches[O],
				N = _;
			return Uh(
				_,
				De(
					{
						currentUrl: E,
						currentParams: P.params,
						nextUrl: C,
						nextParams: N.params,
					},
					r,
					{
						actionResult: w,
						defaultShouldRevalidate:
							s ||
							E.pathname + E.search === C.pathname + C.search ||
							E.search !== C.search ||
							Sg(P, N),
					}
				)
			);
		}),
		m = [];
	return (
		l.forEach((_, O) => {
			if (!n.some((ie) => ie.route.id === _.routeId)) return;
			let P = yi(d, _.path, f);
			if (!P) {
				m.push({
					key: O,
					routeId: _.routeId,
					path: _.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let N = t.fetchers.get(O),
				V = Pc(P, _.path),
				K = !1;
			u.has(O)
				? (K = !1)
				: a.includes(O)
				? (K = !0)
				: N && N.state !== "idle" && N.data === void 0
				? (K = s)
				: (K = Uh(
						V,
						De(
							{
								currentUrl: E,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: C,
								nextParams: n[n.length - 1].params,
							},
							r,
							{ actionResult: w, defaultShouldRevalidate: s }
						)
				  )),
				K &&
					m.push({
						key: O,
						routeId: _.routeId,
						path: _.path,
						matches: P,
						match: V,
						controller: new AbortController(),
					});
		}),
		[v, m]
	);
}
function R1(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		i = e[n.route.id] === void 0;
	return r || i;
}
function Sg(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function Uh(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function Bh(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let i = n[e.id];
	ge(i, "No route found in manifest");
	let s = {};
	for (let o in r) {
		let l = i[o] !== void 0 && o !== "hasErrorBoundary";
		Mi(
			!l,
			'Route "' +
				i.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!l && !Jx.has(o) && (s[o] = r[o]);
	}
	Object.assign(i, s), Object.assign(i, De({}, t(i), { lazy: void 0 }));
}
async function cs(e, t, n, r, i, s, o, a) {
	a === void 0 && (a = {});
	let l,
		u,
		d,
		f = (w) => {
			let E,
				C = new Promise((g, h) => (E = h));
			return (
				(d = () => E()),
				t.signal.addEventListener("abort", d),
				Promise.race([
					w({ request: t, params: n.params, context: a.requestContext }),
					C,
				])
			);
		};
	try {
		let w = n.route[e];
		if (n.route.lazy)
			if (w) u = (await Promise.all([f(w), Bh(n.route, s, i)]))[0];
			else if ((await Bh(n.route, s, i), (w = n.route[e]), w)) u = await f(w);
			else if (e === "action") {
				let E = new URL(t.url),
					C = E.pathname + E.search;
				throw Mt(405, { method: t.method, pathname: C, routeId: n.route.id });
			} else return { type: Xe.data, data: void 0 };
		else if (w) u = await f(w);
		else {
			let E = new URL(t.url),
				C = E.pathname + E.search;
			throw Mt(404, { pathname: C });
		}
		ge(
			u !== void 0,
			"You defined " +
				(e === "action" ? "an action" : "a loader") +
				" for route " +
				('"' +
					n.route.id +
					"\" but didn't return anything from your `" +
					e +
					"` ") +
				"function. Please return a value or `null`."
		);
	} catch (w) {
		(l = Xe.error), (u = w);
	} finally {
		d && t.signal.removeEventListener("abort", d);
	}
	if (T1(u)) {
		let w = u.status;
		if (x1.has(w)) {
			let g = u.headers.get("Location");
			if (
				(ge(
					g,
					"Redirects returned/thrown from loaders/actions must have a Location header"
				),
				!Eg.test(g))
			)
				g = Nc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, g);
			else if (!a.isStaticRequest) {
				let h = new URL(t.url),
					v = g.startsWith("//") ? new URL(h.protocol + g) : new URL(g),
					m = Ki(v.pathname, o) != null;
				v.origin === h.origin && m && (g = v.pathname + v.search + v.hash);
			}
			if (a.isStaticRequest) throw (u.headers.set("Location", g), u);
			return {
				type: Xe.redirect,
				status: w,
				location: g,
				revalidate: u.headers.get("X-Remix-Revalidate") !== null,
			};
		}
		if (a.isRouteRequest) throw { type: l || Xe.data, response: u };
		let E,
			C = u.headers.get("Content-Type");
		return (
			C && /\bapplication\/json\b/.test(C)
				? (E = await u.json())
				: (E = await u.text()),
			l === Xe.error
				? { type: l, error: new Kd(w, u.statusText, E), headers: u.headers }
				: { type: Xe.data, data: E, statusCode: u.status, headers: u.headers }
		);
	}
	if (l === Xe.error) return { type: l, error: u };
	if (P1(u)) {
		var p, b;
		return {
			type: Xe.deferred,
			deferredData: u,
			statusCode: (p = u.init) == null ? void 0 : p.status,
			headers:
				((b = u.init) == null ? void 0 : b.headers) &&
				new Headers(u.init.headers),
		};
	}
	return { type: Xe.data, data: u };
}
function ds(e, t, n, r) {
	let i = e.createURL(_g(t)).toString(),
		s = { signal: n };
	if (r && Zt(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r;
		(s.method = o.toUpperCase()),
			a === "application/json"
				? ((s.headers = new Headers({ "Content-Type": a })),
				  (s.body = JSON.stringify(r.json)))
				: a === "text/plain"
				? (s.body = r.text)
				: a === "application/x-www-form-urlencoded" && r.formData
				? (s.body = Oc(r.formData))
				: (s.body = r.formData);
	}
	return new Request(i, s);
}
function Oc(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function zh(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function N1(e, t, n, r, i) {
	let s = {},
		o = null,
		a,
		l = !1,
		u = {};
	return (
		n.forEach((d, f) => {
			let p = t[f].route.id;
			if (
				(ge(!Ci(d), "Cannot handle redirect results in processLoaderData"),
				Ts(d))
			) {
				let b = gi(e, p),
					w = d.error;
				r && ((w = Object.values(r)[0]), (r = void 0)),
					(o = o || {}),
					o[b.route.id] == null && (o[b.route.id] = w),
					(s[p] = void 0),
					l || ((l = !0), (a = xg(d.error) ? d.error.status : 500)),
					d.headers && (u[p] = d.headers);
			} else
				jr(d)
					? (i.set(p, d.deferredData), (s[p] = d.deferredData.data))
					: (s[p] = d.data),
					d.statusCode != null &&
						d.statusCode !== 200 &&
						!l &&
						(a = d.statusCode),
					d.headers && (u[p] = d.headers);
		}),
		r && ((o = r), (s[Object.keys(r)[0]] = void 0)),
		{ loaderData: s, errors: o, statusCode: a || 200, loaderHeaders: u }
	);
}
function $h(e, t, n, r, i, s, o, a) {
	let { loaderData: l, errors: u } = N1(t, n, r, i, a);
	for (let d = 0; d < s.length; d++) {
		let { key: f, match: p, controller: b } = s[d];
		ge(
			o !== void 0 && o[d] !== void 0,
			"Did not find corresponding fetcher result"
		);
		let w = o[d];
		if (!(b && b.signal.aborted))
			if (Ts(w)) {
				let E = gi(e.matches, p == null ? void 0 : p.route.id);
				(u && u[E.route.id]) || (u = De({}, u, { [E.route.id]: w.error })),
					e.fetchers.delete(f);
			} else if (Ci(w)) ge(!1, "Unhandled fetcher revalidation redirect");
			else if (jr(w)) ge(!1, "Unhandled fetcher deferred data");
			else {
				let E = ri(w.data);
				e.fetchers.set(f, E);
			}
	}
	return { loaderData: l, errors: u };
}
function Vh(e, t, n, r) {
	let i = De({}, t);
	for (let s of n) {
		let o = s.route.id;
		if (
			(t.hasOwnProperty(o)
				? t[o] !== void 0 && (i[o] = t[o])
				: e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
			r && r.hasOwnProperty(o))
		)
			break;
	}
	return i;
}
function gi(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function Hh(e) {
	let t = e.find((n) => n.index || !n.path || n.path === "/") || {
		id: "__shim-error-route__",
	};
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
		route: t,
	};
}
function Mt(e, t) {
	let { pathname: n, routeId: r, method: i, type: s } = t === void 0 ? {} : t,
		o = "Unknown Server Error",
		a = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((o = "Bad Request"),
			  i && n && r
					? (a =
							"You made a " +
							i +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: s === "defer-action"
					? (a = "defer() is not supported in actions")
					: s === "invalid-body" && (a = "Unable to encode submission body"))
			: e === 403
			? ((o = "Forbidden"),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((o = "Method Not Allowed"),
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
		new Kd(e || 500, o, new Error(a), !0)
	);
}
function Wh(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Ci(n)) return { result: n, idx: t };
	}
}
function _g(e) {
	let t = typeof e == "string" ? $n(e) : e;
	return Wr(De({}, t, { hash: "" }));
}
function O1(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		? t.hash !== ""
		: e.hash === t.hash
		? !0
		: t.hash !== "";
}
function jr(e) {
	return e.type === Xe.deferred;
}
function Ts(e) {
	return e.type === Xe.error;
}
function Ci(e) {
	return (e && e.type) === Xe.redirect;
}
function P1(e) {
	let t = e;
	return (
		t &&
		typeof t == "object" &&
		typeof t.data == "object" &&
		typeof t.subscribe == "function" &&
		typeof t.cancel == "function" &&
		typeof t.resolveData == "function"
	);
}
function T1(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function I1(e) {
	return w1.has(e.toLowerCase());
}
function Zt(e) {
	return g1.has(e.toLowerCase());
}
async function qh(e, t, n, r, i, s) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			l = t[o];
		if (!l) continue;
		let u = e.find((f) => f.route.id === l.route.id),
			d = u != null && !Sg(u, l) && (s && s[l.route.id]) !== void 0;
		if (jr(a) && (i || d)) {
			let f = r[o];
			ge(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
				await Cg(a, f, i).then((p) => {
					p && (n[o] = p || n[o]);
				});
		}
	}
}
async function Cg(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: Xe.data, data: e.deferredData.unwrappedData };
			} catch (i) {
				return { type: Xe.error, error: i };
			}
		return { type: Xe.data, data: e.deferredData.data };
	}
}
function Qd(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function j1(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Pc(e, t) {
	let n = typeof t == "string" ? $n(t).search : t.search;
	if (e[e.length - 1].route.index && Qd(n || "")) return e[e.length - 1];
	let r = xl(e);
	return r[r.length - 1];
}
function Kh(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: i,
		formData: s,
		json: o,
	} = e;
	if (!(!t || !n || !r)) {
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: i,
			};
		if (s != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: s,
				json: void 0,
				text: void 0,
			};
		if (o !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: o,
				text: void 0,
			};
	}
}
function $o(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function A1(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function fs(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
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
				data: t,
				" _hasFetcherDoneAnything ": !0,
		  };
}
function L1(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
		" _hasFetcherDoneAnything ": !0,
	};
}
function ri(e) {
	return {
		state: "idle",
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
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ba() {
	return (
		(Ba = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Ba.apply(this, arguments)
	);
}
const bl = I.createContext(null),
	Gd = I.createContext(null),
	Yr = I.createContext(null),
	El = I.createContext(null),
	Vn = I.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	kg = I.createContext(null);
function D1(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	lo() || ge(!1);
	let { basename: r, navigator: i } = I.useContext(Yr),
		{ hash: s, pathname: o, search: a } = Jd(e, { relative: n }),
		l = o;
	return (
		r !== "/" && (l = o === "/" ? r : jn([r, o])),
		i.createHref({ pathname: l, search: a, hash: s })
	);
}
function lo() {
	return I.useContext(El) != null;
}
function Xr() {
	return lo() || ge(!1), I.useContext(El).location;
}
function Rg(e) {
	I.useContext(Yr).static || I.useLayoutEffect(e);
}
function Sl() {
	let { isDataRoute: e } = I.useContext(Vn);
	return e ? G1() : M1();
}
function M1() {
	lo() || ge(!1);
	let e = I.useContext(bl),
		{ basename: t, navigator: n } = I.useContext(Yr),
		{ matches: r } = I.useContext(Vn),
		{ pathname: i } = Xr(),
		s = JSON.stringify(xl(r).map((l) => l.pathnameBase)),
		o = I.useRef(!1);
	return (
		Rg(() => {
			o.current = !0;
		}),
		I.useCallback(
			function (l, u) {
				if ((u === void 0 && (u = {}), !o.current)) return;
				if (typeof l == "number") {
					n.go(l);
					return;
				}
				let d = qd(l, JSON.parse(s), i, u.relative === "path");
				e == null &&
					t !== "/" &&
					(d.pathname = d.pathname === "/" ? t : jn([t, d.pathname])),
					(u.replace ? n.replace : n.push)(d, u.state, u);
			},
			[t, n, s, i, e]
		)
	);
}
const F1 = I.createContext(null);
function U1(e) {
	let t = I.useContext(Vn).outlet;
	return t && I.createElement(F1.Provider, { value: e }, t);
}
function Ng() {
	let { matches: e } = I.useContext(Vn),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Jd(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = I.useContext(Vn),
		{ pathname: i } = Xr(),
		s = JSON.stringify(xl(r).map((o) => o.pathnameBase));
	return I.useMemo(() => qd(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function B1(e, t, n) {
	lo() || ge(!1);
	let { navigator: r } = I.useContext(Yr),
		{ matches: i } = I.useContext(Vn),
		s = i[i.length - 1],
		o = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : "/";
	s && s.route;
	let l = Xr(),
		u;
	if (t) {
		var d;
		let E = typeof t == "string" ? $n(t) : t;
		a === "/" || ((d = E.pathname) != null && d.startsWith(a)) || ge(!1),
			(u = E);
	} else u = l;
	let f = u.pathname || "/",
		p = a === "/" ? f : f.slice(a.length) || "/",
		b = yi(e, { pathname: p }),
		w = W1(
			b &&
				b.map((E) =>
					Object.assign({}, E, {
						params: Object.assign({}, o, E.params),
						pathname: jn([
							a,
							r.encodeLocation
								? r.encodeLocation(E.pathname).pathname
								: E.pathname,
						]),
						pathnameBase:
							E.pathnameBase === "/"
								? a
								: jn([
										a,
										r.encodeLocation
											? r.encodeLocation(E.pathnameBase).pathname
											: E.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && w
		? I.createElement(
				El.Provider,
				{
					value: {
						location: Ba(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							u
						),
						navigationType: Ke.Pop,
					},
				},
				w
		  )
		: w;
}
function z1() {
	let e = Q1(),
		t = xg(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		s = null;
	return I.createElement(
		I.Fragment,
		null,
		I.createElement("h2", null, "Unexpected Application Error!"),
		I.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? I.createElement("pre", { style: i }, n) : null,
		s
	);
}
const $1 = I.createElement(z1, null);
class V1 extends I.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n
		);
	}
	render() {
		return this.state.error
			? I.createElement(
					Vn.Provider,
					{ value: this.props.routeContext },
					I.createElement(kg.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function H1(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = I.useContext(bl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		I.createElement(Vn.Provider, { value: t }, r)
	);
}
function W1(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let s = e,
		o = (r = n) == null ? void 0 : r.errors;
	if (o != null) {
		let a = s.findIndex(
			(l) => l.route.id && (o == null ? void 0 : o[l.route.id])
		);
		a >= 0 || ge(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
	}
	return s.reduceRight((a, l, u) => {
		let d = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
			f = null;
		n && (f = l.route.errorElement || $1);
		let p = t.concat(s.slice(0, u + 1)),
			b = () => {
				let w;
				return (
					d
						? (w = f)
						: l.route.Component
						? (w = I.createElement(l.route.Component, null))
						: l.route.element
						? (w = l.route.element)
						: (w = a),
					I.createElement(H1, {
						match: l,
						routeContext: { outlet: a, matches: p, isDataRoute: n != null },
						children: w,
					})
				);
			};
		return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
			? I.createElement(V1, {
					location: n.location,
					revalidation: n.revalidation,
					component: f,
					error: d,
					children: b(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: b();
	}, null);
}
var Tc;
(function (e) {
	(e.UseBlocker = "useBlocker"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate");
})(Tc || (Tc = {}));
var qr;
(function (e) {
	(e.UseBlocker = "useBlocker"),
		(e.UseLoaderData = "useLoaderData"),
		(e.UseActionData = "useActionData"),
		(e.UseRouteError = "useRouteError"),
		(e.UseNavigation = "useNavigation"),
		(e.UseRouteLoaderData = "useRouteLoaderData"),
		(e.UseMatches = "useMatches"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate"),
		(e.UseRouteId = "useRouteId");
})(qr || (qr = {}));
function q1(e) {
	let t = I.useContext(bl);
	return t || ge(!1), t;
}
function Og(e) {
	let t = I.useContext(Gd);
	return t || ge(!1), t;
}
function K1(e) {
	let t = I.useContext(Vn);
	return t || ge(!1), t;
}
function Yd(e) {
	let t = K1(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ge(!1), n.route.id;
}
function Pg() {
	let e = Og(qr.UseLoaderData),
		t = Yd(qr.UseLoaderData);
	if (e.errors && e.errors[t] != null) {
		console.error(
			"You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
		);
		return;
	}
	return e.loaderData[t];
}
function Q1() {
	var e;
	let t = I.useContext(kg),
		n = Og(qr.UseRouteError),
		r = Yd(qr.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function G1() {
	let { router: e } = q1(Tc.UseNavigateStable),
		t = Yd(qr.UseNavigateStable),
		n = I.useRef(!1);
	return (
		Rg(() => {
			n.current = !0;
		}),
		I.useCallback(
			function (i, s) {
				s === void 0 && (s = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, Ba({ fromRouteId: t }, s)));
			},
			[e, t]
		)
	);
}
const J1 = "startTransition",
	Qh = M0[J1];
function Y1(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[i, s] = I.useState(n.state),
		{ v7_startTransition: o } = r || {},
		a = I.useCallback(
			(f) => {
				o && Qh ? Qh(() => s(f)) : s(f);
			},
			[s, o]
		);
	I.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let l = I.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (f) => n.navigate(f),
				push: (f, p, b) =>
					n.navigate(f, {
						state: p,
						preventScrollReset: b == null ? void 0 : b.preventScrollReset,
					}),
				replace: (f, p, b) =>
					n.navigate(f, {
						replace: !0,
						state: p,
						preventScrollReset: b == null ? void 0 : b.preventScrollReset,
					}),
			}),
			[n]
		),
		u = n.basename || "/",
		d = I.useMemo(
			() => ({ router: n, navigator: l, static: !1, basename: u }),
			[n, l, u]
		);
	return I.createElement(
		I.Fragment,
		null,
		I.createElement(
			bl.Provider,
			{ value: d },
			I.createElement(
				Gd.Provider,
				{ value: i },
				I.createElement(
					eb,
					{
						basename: u,
						location: i.location,
						navigationType: i.historyAction,
						navigator: l,
					},
					i.initialized
						? I.createElement(X1, { routes: n.routes, state: i })
						: t
				)
			)
		),
		null
	);
}
function X1(e) {
	let { routes: t, state: n } = e;
	return B1(t, void 0, n);
}
function Z1(e) {
	return U1(e.context);
}
function eb(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Ke.Pop,
		navigator: s,
		static: o = !1,
	} = e;
	lo() && ge(!1);
	let a = t.replace(/^\/*/, "/"),
		l = I.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
	typeof r == "string" && (r = $n(r));
	let {
			pathname: u = "/",
			search: d = "",
			hash: f = "",
			state: p = null,
			key: b = "default",
		} = r,
		w = I.useMemo(() => {
			let E = Ki(u, a);
			return E == null
				? null
				: {
						location: { pathname: E, search: d, hash: f, state: p, key: b },
						navigationType: i,
				  };
		}, [a, u, d, f, p, b, i]);
	return w == null
		? null
		: I.createElement(
				Yr.Provider,
				{ value: l },
				I.createElement(El.Provider, { children: n, value: w })
		  );
}
var Gh;
(function (e) {
	(e[(e.pending = 0)] = "pending"),
		(e[(e.success = 1)] = "success"),
		(e[(e.error = 2)] = "error");
})(Gh || (Gh = {}));
new Promise(() => {});
function tb(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: I.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: I.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
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
 */ function Fi() {
	return (
		(Fi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Fi.apply(this, arguments)
	);
}
function Tg(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		s;
	for (s = 0; s < r.length; s++)
		(i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function nb(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rb(e, t) {
	return e.button === 0 && (!t || t === "_self") && !nb(e);
}
const ib = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
	],
	sb = [
		"aria-current",
		"caseSensitive",
		"className",
		"end",
		"style",
		"to",
		"children",
	];
function ob(e, t) {
	return _1({
		basename: t == null ? void 0 : t.basename,
		future: Fi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Kx({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || ab(),
		routes: e,
		mapRouteProperties: tb,
	}).initialize();
}
function ab() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = Fi({}, t, { errors: lb(t.errors) })), t;
}
function lb(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, i] of t)
		if (i && i.__type === "RouteErrorResponse")
			n[r] = new Kd(i.status, i.statusText, i.data, i.internal === !0);
		else if (i && i.__type === "Error") {
			if (i.__subType) {
				let s = window[i.__subType];
				if (typeof s == "function")
					try {
						let o = new s(i.message);
						(o.stack = ""), (n[r] = o);
					} catch {}
			}
			if (n[r] == null) {
				let s = new Error(i.message);
				(s.stack = ""), (n[r] = s);
			}
		} else n[r] = i;
	return n;
}
const ub =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	cb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	br = I.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: s,
				replace: o,
				state: a,
				target: l,
				to: u,
				preventScrollReset: d,
			} = t,
			f = Tg(t, ib),
			{ basename: p } = I.useContext(Yr),
			b,
			w = !1;
		if (typeof u == "string" && cb.test(u) && ((b = u), ub))
			try {
				let h = new URL(window.location.href),
					v = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
					m = Ki(v.pathname, p);
				v.origin === h.origin && m != null
					? (u = m + v.search + v.hash)
					: (w = !0);
			} catch {}
		let E = D1(u, { relative: i }),
			C = fb(u, {
				replace: o,
				state: a,
				target: l,
				preventScrollReset: d,
				relative: i,
			});
		function g(h) {
			r && r(h), h.defaultPrevented || C(h);
		}
		return I.createElement(
			"a",
			Fi({}, f, { href: b || E, onClick: w || s ? r : g, ref: n, target: l })
		);
	}),
	db = I.forwardRef(function (t, n) {
		let {
				"aria-current": r = "page",
				caseSensitive: i = !1,
				className: s = "",
				end: o = !1,
				style: a,
				to: l,
				children: u,
			} = t,
			d = Tg(t, sb),
			f = Jd(l, { relative: d.relative }),
			p = Xr(),
			b = I.useContext(Gd),
			{ navigator: w } = I.useContext(Yr),
			E = w.encodeLocation ? w.encodeLocation(f).pathname : f.pathname,
			C = p.pathname,
			g =
				b && b.navigation && b.navigation.location
					? b.navigation.location.pathname
					: null;
		i ||
			((C = C.toLowerCase()),
			(g = g ? g.toLowerCase() : null),
			(E = E.toLowerCase()));
		let h = C === E || (!o && C.startsWith(E) && C.charAt(E.length) === "/"),
			v =
				g != null &&
				(g === E || (!o && g.startsWith(E) && g.charAt(E.length) === "/")),
			m = h ? r : void 0,
			_;
		typeof s == "function"
			? (_ = s({ isActive: h, isPending: v }))
			: (_ = [s, h ? "active" : null, v ? "pending" : null]
					.filter(Boolean)
					.join(" "));
		let O = typeof a == "function" ? a({ isActive: h, isPending: v }) : a;
		return I.createElement(
			br,
			Fi({}, d, { "aria-current": m, className: _, ref: n, style: O, to: l }),
			typeof u == "function" ? u({ isActive: h, isPending: v }) : u
		);
	});
var Jh;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher");
})(Jh || (Jh = {}));
var Yh;
(function (e) {
	(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(Yh || (Yh = {}));
function fb(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: s,
			relative: o,
		} = t === void 0 ? {} : t,
		a = Sl(),
		l = Xr(),
		u = Jd(e, { relative: o });
	return I.useCallback(
		(d) => {
			if (rb(d, n)) {
				d.preventDefault();
				let f = r !== void 0 ? r : Wr(l) === Wr(u);
				a(e, { replace: f, state: i, preventScrollReset: s, relative: o });
			}
		},
		[l, a, u, r, i, n, e, s, o]
	);
}
const Ic = "/assets/logo-18162d37.png";
var Ig = { exports: {} };
(() => {
	var e = {
			296: (i, s, o) => {
				var a = /^\s+|\s+$/g,
					l = /^[-+]0x[0-9a-f]+$/i,
					u = /^0b[01]+$/i,
					d = /^0o[0-7]+$/i,
					f = parseInt,
					p = typeof o.g == "object" && o.g && o.g.Object === Object && o.g,
					b = typeof self == "object" && self && self.Object === Object && self,
					w = p || b || Function("return this")(),
					E = Object.prototype.toString,
					C = Math.max,
					g = Math.min,
					h = function () {
						return w.Date.now();
					};
				function v(_) {
					var O = typeof _;
					return !!_ && (O == "object" || O == "function");
				}
				function m(_) {
					if (typeof _ == "number") return _;
					if (
						(function (N) {
							return (
								typeof N == "symbol" ||
								((function (V) {
									return !!V && typeof V == "object";
								})(N) &&
									E.call(N) == "[object Symbol]")
							);
						})(_)
					)
						return NaN;
					if (v(_)) {
						var O = typeof _.valueOf == "function" ? _.valueOf() : _;
						_ = v(O) ? O + "" : O;
					}
					if (typeof _ != "string") return _ === 0 ? _ : +_;
					_ = _.replace(a, "");
					var P = u.test(_);
					return P || d.test(_)
						? f(_.slice(2), P ? 2 : 8)
						: l.test(_)
						? NaN
						: +_;
				}
				i.exports = function (_, O, P) {
					var N,
						V,
						K,
						ie,
						Q,
						te,
						oe = 0,
						me = !1,
						fe = !1,
						we = !0;
					if (typeof _ != "function")
						throw new TypeError("Expected a function");
					function B(Oe) {
						var se = N,
							Ce = V;
						return (N = V = void 0), (oe = Oe), (ie = _.apply(Ce, se));
					}
					function X(Oe) {
						var se = Oe - te;
						return te === void 0 || se >= O || se < 0 || (fe && Oe - oe >= K);
					}
					function J() {
						var Oe = h();
						if (X(Oe)) return he(Oe);
						Q = setTimeout(
							J,
							(function (se) {
								var Ce = O - (se - te);
								return fe ? g(Ce, K - (se - oe)) : Ce;
							})(Oe)
						);
					}
					function he(Oe) {
						return (Q = void 0), we && N ? B(Oe) : ((N = V = void 0), ie);
					}
					function pe() {
						var Oe = h(),
							se = X(Oe);
						if (((N = arguments), (V = this), (te = Oe), se)) {
							if (Q === void 0)
								return (function (Ce) {
									return (oe = Ce), (Q = setTimeout(J, O)), me ? B(Ce) : ie;
								})(te);
							if (fe) return (Q = setTimeout(J, O)), B(te);
						}
						return Q === void 0 && (Q = setTimeout(J, O)), ie;
					}
					return (
						(O = m(O) || 0),
						v(P) &&
							((me = !!P.leading),
							(K = (fe = "maxWait" in P) ? C(m(P.maxWait) || 0, O) : K),
							(we = "trailing" in P ? !!P.trailing : we)),
						(pe.cancel = function () {
							Q !== void 0 && clearTimeout(Q),
								(oe = 0),
								(N = te = V = Q = void 0);
						}),
						(pe.flush = function () {
							return Q === void 0 ? ie : he(h());
						}),
						pe
					);
				};
			},
			96: (i, s, o) => {
				var a = "Expected a function",
					l = NaN,
					u = "[object Symbol]",
					d = /^\s+|\s+$/g,
					f = /^[-+]0x[0-9a-f]+$/i,
					p = /^0b[01]+$/i,
					b = /^0o[0-7]+$/i,
					w = parseInt,
					E = typeof o.g == "object" && o.g && o.g.Object === Object && o.g,
					C = typeof self == "object" && self && self.Object === Object && self,
					g = E || C || Function("return this")(),
					h = Object.prototype.toString,
					v = Math.max,
					m = Math.min,
					_ = function () {
						return g.Date.now();
					};
				function O(N) {
					var V = typeof N;
					return !!N && (V == "object" || V == "function");
				}
				function P(N) {
					if (typeof N == "number") return N;
					if (
						(function (ie) {
							return (
								typeof ie == "symbol" ||
								((function (Q) {
									return !!Q && typeof Q == "object";
								})(ie) &&
									h.call(ie) == u)
							);
						})(N)
					)
						return l;
					if (O(N)) {
						var V = typeof N.valueOf == "function" ? N.valueOf() : N;
						N = O(V) ? V + "" : V;
					}
					if (typeof N != "string") return N === 0 ? N : +N;
					N = N.replace(d, "");
					var K = p.test(N);
					return K || b.test(N) ? w(N.slice(2), K ? 2 : 8) : f.test(N) ? l : +N;
				}
				i.exports = function (N, V, K) {
					var ie = !0,
						Q = !0;
					if (typeof N != "function") throw new TypeError(a);
					return (
						O(K) &&
							((ie = "leading" in K ? !!K.leading : ie),
							(Q = "trailing" in K ? !!K.trailing : Q)),
						(function (te, oe, me) {
							var fe,
								we,
								B,
								X,
								J,
								he,
								pe = 0,
								Oe = !1,
								se = !1,
								Ce = !0;
							if (typeof te != "function") throw new TypeError(a);
							function qe($e) {
								var Je = fe,
									Et = we;
								return (fe = we = void 0), (pe = $e), (X = te.apply(Et, Je));
							}
							function mt($e) {
								var Je = $e - he;
								return (
									he === void 0 || Je >= oe || Je < 0 || (se && $e - pe >= B)
								);
							}
							function Fe() {
								var $e = _();
								if (mt($e)) return wn($e);
								J = setTimeout(
									Fe,
									(function (Je) {
										var Et = oe - (Je - he);
										return se ? m(Et, B - (Je - pe)) : Et;
									})($e)
								);
							}
							function wn($e) {
								return (
									(J = void 0), Ce && fe ? qe($e) : ((fe = we = void 0), X)
								);
							}
							function Qt() {
								var $e = _(),
									Je = mt($e);
								if (((fe = arguments), (we = this), (he = $e), Je)) {
									if (J === void 0)
										return (function (Et) {
											return (
												(pe = Et), (J = setTimeout(Fe, oe)), Oe ? qe(Et) : X
											);
										})(he);
									if (se) return (J = setTimeout(Fe, oe)), qe(he);
								}
								return J === void 0 && (J = setTimeout(Fe, oe)), X;
							}
							return (
								(oe = P(oe) || 0),
								O(me) &&
									((Oe = !!me.leading),
									(B = (se = "maxWait" in me) ? v(P(me.maxWait) || 0, oe) : B),
									(Ce = "trailing" in me ? !!me.trailing : Ce)),
								(Qt.cancel = function () {
									J !== void 0 && clearTimeout(J),
										(pe = 0),
										(fe = he = we = J = void 0);
								}),
								(Qt.flush = function () {
									return J === void 0 ? X : wn(_());
								}),
								Qt
							);
						})(N, V, { leading: ie, maxWait: V, trailing: Q })
					);
				};
			},
			703: (i, s, o) => {
				var a = o(414);
				function l() {}
				function u() {}
				(u.resetWarningCache = l),
					(i.exports = function () {
						function d(b, w, E, C, g, h) {
							if (h !== a) {
								var v = new Error(
									"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
								);
								throw ((v.name = "Invariant Violation"), v);
							}
						}
						function f() {
							return d;
						}
						d.isRequired = d;
						var p = {
							array: d,
							bigint: d,
							bool: d,
							func: d,
							number: d,
							object: d,
							string: d,
							symbol: d,
							any: d,
							arrayOf: f,
							element: d,
							elementType: d,
							instanceOf: f,
							node: d,
							objectOf: f,
							oneOf: f,
							oneOfType: f,
							shape: f,
							exact: f,
							checkPropTypes: u,
							resetWarningCache: l,
						};
						return (p.PropTypes = p), p;
					});
			},
			697: (i, s, o) => {
				i.exports = o(703)();
			},
			414: (i) => {
				i.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
			},
		},
		t = {};
	function n(i) {
		var s = t[i];
		if (s !== void 0) return s.exports;
		var o = (t[i] = { exports: {} });
		return e[i](o, o.exports, n), o.exports;
	}
	(n.n = (i) => {
		var s = i && i.__esModule ? () => i.default : () => i;
		return n.d(s, { a: s }), s;
	}),
		(n.d = (i, s) => {
			for (var o in s)
				n.o(s, o) &&
					!n.o(i, o) &&
					Object.defineProperty(i, o, { enumerable: !0, get: s[o] });
		}),
		(n.g = (function () {
			if (typeof globalThis == "object") return globalThis;
			try {
				return this || new Function("return this")();
			} catch {
				if (typeof window == "object") return window;
			}
		})()),
		(n.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s)),
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
				LazyLoadComponent: () => Zi,
				LazyLoadImage: () => Hn,
				trackWindowScroll: () => he,
			});
		const i = I;
		var s = n.n(i),
			o = n(697);
		const a = gg;
		var l = n.n(a);
		function u() {
			return (
				typeof window < "u" &&
				"IntersectionObserver" in window &&
				"isIntersecting" in window.IntersectionObserverEntry.prototype
			);
		}
		function d(M) {
			return (
				(d =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (R) {
								return typeof R;
						  }
						: function (R) {
								return R &&
									typeof Symbol == "function" &&
									R.constructor === Symbol &&
									R !== Symbol.prototype
									? "symbol"
									: typeof R;
						  }),
				d(M)
			);
		}
		function f(M, R) {
			var F = Object.keys(M);
			if (Object.getOwnPropertySymbols) {
				var U = Object.getOwnPropertySymbols(M);
				R &&
					(U = U.filter(function (ce) {
						return Object.getOwnPropertyDescriptor(M, ce).enumerable;
					})),
					F.push.apply(F, U);
			}
			return F;
		}
		function p(M, R, F) {
			return (
				(R = w(R)) in M
					? Object.defineProperty(M, R, {
							value: F,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (M[R] = F),
				M
			);
		}
		function b(M, R) {
			for (var F = 0; F < R.length; F++) {
				var U = R[F];
				(U.enumerable = U.enumerable || !1),
					(U.configurable = !0),
					"value" in U && (U.writable = !0),
					Object.defineProperty(M, w(U.key), U);
			}
		}
		function w(M) {
			var R = (function (F, U) {
				if (d(F) !== "object" || F === null) return F;
				var ce = F[Symbol.toPrimitive];
				if (ce !== void 0) {
					var de = ce.call(F, "string");
					if (d(de) !== "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}
				return String(F);
			})(M);
			return d(R) === "symbol" ? R : String(R);
		}
		function E(M, R) {
			return (
				(E = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (F, U) {
							return (F.__proto__ = U), F;
					  }),
				E(M, R)
			);
		}
		function C(M) {
			return (
				(C = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (R) {
							return R.__proto__ || Object.getPrototypeOf(R);
					  }),
				C(M)
			);
		}
		var g = function (M) {
				M.forEach(function (R) {
					R.isIntersecting && R.target.onVisible();
				});
			},
			h = {},
			v = (function (M) {
				(function (y, x) {
					if (typeof x != "function" && x !== null)
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					(y.prototype = Object.create(x && x.prototype, {
						constructor: { value: y, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(y, "prototype", { writable: !1 }),
						x && E(y, x);
				})(Ee, M);
				var R,
					F,
					U,
					ce,
					de =
						((U = Ee),
						(ce = (function () {
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
							var y,
								x = C(U);
							if (ce) {
								var k = C(this).constructor;
								y = Reflect.construct(x, arguments, k);
							} else y = x.apply(this, arguments);
							return (function (j, D) {
								if (D && (d(D) === "object" || typeof D == "function"))
									return D;
								if (D !== void 0)
									throw new TypeError(
										"Derived constructors may only return object or undefined"
									);
								return (function (W) {
									if (W === void 0)
										throw new ReferenceError(
											"this hasn't been initialised - super() hasn't been called"
										);
									return W;
								})(j);
							})(this, y);
						});
				function Ee(y) {
					var x;
					if (
						((function (j, D) {
							if (!(j instanceof D))
								throw new TypeError("Cannot call a class as a function");
						})(this, Ee),
						((x = de.call(this, y)).supportsObserver =
							!y.scrollPosition && y.useIntersectionObserver && u()),
						x.supportsObserver)
					) {
						var k = y.threshold;
						x.observer = (function (j) {
							return (
								(h[j] =
									h[j] ||
									new IntersectionObserver(g, { rootMargin: j + "px" })),
								h[j]
							);
						})(k);
					}
					return x;
				}
				return (
					(R = Ee),
					(F = [
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
								var y =
										arguments.length > 0 && arguments[0] !== void 0
											? arguments[0]
											: this.props.scrollPosition,
									x = this.placeholder.getBoundingClientRect(),
									k = l().findDOMNode(this.placeholder).style,
									j = parseInt(k.getPropertyValue("margin-left"), 10) || 0,
									D = parseInt(k.getPropertyValue("margin-top"), 10) || 0;
								return {
									bottom: y.y + x.bottom + D,
									left: y.x + x.left + j,
									right: y.x + x.right + j,
									top: y.y + x.top + D,
								};
							},
						},
						{
							key: "isPlaceholderInViewport",
							value: function () {
								if (typeof window > "u" || !this.placeholder) return !1;
								var y = this.props,
									x = y.scrollPosition,
									k = y.threshold,
									j = this.getPlaceholderBoundingBox(x),
									D = x.y + window.innerHeight,
									W = x.x,
									Y = x.x + window.innerWidth,
									G = x.y;
								return (
									G - k <= j.bottom &&
									D + k >= j.top &&
									W - k <= j.right &&
									Y + k >= j.left
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
								var y = this,
									x = this.props,
									k = x.className,
									j = x.height,
									D = x.placeholder,
									W = x.style,
									Y = x.width;
								if (D && typeof D.type != "function")
									return s().cloneElement(D, {
										ref: function (q) {
											return (y.placeholder = q);
										},
									});
								var G = (function (q) {
									for (var ue = 1; ue < arguments.length; ue++) {
										var ye = arguments[ue] != null ? arguments[ue] : {};
										ue % 2
											? f(Object(ye), !0).forEach(function (le) {
													p(q, le, ye[le]);
											  })
											: Object.getOwnPropertyDescriptors
											? Object.defineProperties(
													q,
													Object.getOwnPropertyDescriptors(ye)
											  )
											: f(Object(ye)).forEach(function (le) {
													Object.defineProperty(
														q,
														le,
														Object.getOwnPropertyDescriptor(ye, le)
													);
											  });
									}
									return q;
								})({ display: "inline-block" }, W);
								return (
									Y !== void 0 && (G.width = Y),
									j !== void 0 && (G.height = j),
									s().createElement(
										"span",
										{
											className: k,
											ref: function (q) {
												return (y.placeholder = q);
											},
											style: G,
										},
										D
									)
								);
							},
						},
					]),
					F && b(R.prototype, F),
					Object.defineProperty(R, "prototype", { writable: !1 }),
					Ee
				);
			})(s().Component);
		(v.propTypes = {
			onVisible: o.PropTypes.func.isRequired,
			className: o.PropTypes.string,
			height: o.PropTypes.oneOfType([o.PropTypes.number, o.PropTypes.string]),
			placeholder: o.PropTypes.element,
			threshold: o.PropTypes.number,
			useIntersectionObserver: o.PropTypes.bool,
			scrollPosition: o.PropTypes.shape({
				x: o.PropTypes.number.isRequired,
				y: o.PropTypes.number.isRequired,
			}),
			width: o.PropTypes.oneOfType([o.PropTypes.number, o.PropTypes.string]),
		}),
			(v.defaultProps = {
				className: "",
				placeholder: null,
				threshold: 100,
				useIntersectionObserver: !0,
			});
		const m = v;
		var _ = n(296),
			O = n.n(_),
			P = n(96),
			N = n.n(P),
			V = function (M) {
				var R = getComputedStyle(M, null);
				return (
					R.getPropertyValue("overflow") +
					R.getPropertyValue("overflow-y") +
					R.getPropertyValue("overflow-x")
				);
			};
		const K = function (M) {
			if (!(M instanceof HTMLElement)) return window;
			for (var R = M; R && R instanceof HTMLElement; ) {
				if (/(scroll|auto)/.test(V(R))) return R;
				R = R.parentNode;
			}
			return window;
		};
		function ie(M) {
			return (
				(ie =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (R) {
								return typeof R;
						  }
						: function (R) {
								return R &&
									typeof Symbol == "function" &&
									R.constructor === Symbol &&
									R !== Symbol.prototype
									? "symbol"
									: typeof R;
						  }),
				ie(M)
			);
		}
		var Q = ["delayMethod", "delayTime"];
		function te() {
			return (
				(te = Object.assign
					? Object.assign.bind()
					: function (M) {
							for (var R = 1; R < arguments.length; R++) {
								var F = arguments[R];
								for (var U in F)
									Object.prototype.hasOwnProperty.call(F, U) && (M[U] = F[U]);
							}
							return M;
					  }),
				te.apply(this, arguments)
			);
		}
		function oe(M, R) {
			for (var F = 0; F < R.length; F++) {
				var U = R[F];
				(U.enumerable = U.enumerable || !1),
					(U.configurable = !0),
					"value" in U && (U.writable = !0),
					Object.defineProperty(
						M,
						((ce = (function (de, Ee) {
							if (ie(de) !== "object" || de === null) return de;
							var y = de[Symbol.toPrimitive];
							if (y !== void 0) {
								var x = y.call(de, "string");
								if (ie(x) !== "object") return x;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(de);
						})(U.key)),
						ie(ce) === "symbol" ? ce : String(ce)),
						U
					);
			}
			var ce;
		}
		function me(M, R) {
			return (
				(me = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (F, U) {
							return (F.__proto__ = U), F;
					  }),
				me(M, R)
			);
		}
		function fe(M, R) {
			if (R && (ie(R) === "object" || typeof R == "function")) return R;
			if (R !== void 0)
				throw new TypeError(
					"Derived constructors may only return object or undefined"
				);
			return we(M);
		}
		function we(M) {
			if (M === void 0)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return M;
		}
		function B(M) {
			return (
				(B = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (R) {
							return R.__proto__ || Object.getPrototypeOf(R);
					  }),
				B(M)
			);
		}
		var X = function () {
				return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset;
			},
			J = function () {
				return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset;
			};
		const he = function (M) {
			var R = (function (F) {
				(function (k, j) {
					if (typeof j != "function" && j !== null)
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					(k.prototype = Object.create(j && j.prototype, {
						constructor: { value: k, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(k, "prototype", { writable: !1 }),
						j && me(k, j);
				})(x, F);
				var U,
					ce,
					de,
					Ee,
					y =
						((de = x),
						(Ee = (function () {
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
							var k,
								j = B(de);
							if (Ee) {
								var D = B(this).constructor;
								k = Reflect.construct(j, arguments, D);
							} else k = j.apply(this, arguments);
							return fe(this, k);
						});
				function x(k) {
					var j;
					if (
						((function (W, Y) {
							if (!(W instanceof Y))
								throw new TypeError("Cannot call a class as a function");
						})(this, x),
						((j = y.call(this, k)).useIntersectionObserver =
							k.useIntersectionObserver && u()),
						j.useIntersectionObserver)
					)
						return fe(j);
					var D = j.onChangeScroll.bind(we(j));
					return (
						k.delayMethod === "debounce"
							? (j.delayedScroll = O()(D, k.delayTime))
							: k.delayMethod === "throttle" &&
							  (j.delayedScroll = N()(D, k.delayTime)),
						(j.state = { scrollPosition: { x: X(), y: J() } }),
						(j.baseComponentRef = s().createRef()),
						j
					);
				}
				return (
					(U = x),
					(ce = [
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
									(K(l().findDOMNode(this.baseComponentRef.current)) !==
										this.scrollElement &&
										(this.removeListeners(), this.addListeners()));
							},
						},
						{
							key: "addListeners",
							value: function () {
								typeof window > "u" ||
									this.useIntersectionObserver ||
									((this.scrollElement = K(
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
									this.setState({ scrollPosition: { x: X(), y: J() } });
							},
						},
						{
							key: "render",
							value: function () {
								var k = this.props,
									j =
										(k.delayMethod,
										k.delayTime,
										(function (W, Y) {
											if (W == null) return {};
											var G,
												q,
												ue = (function (le, Re) {
													if (le == null) return {};
													var Te,
														Dt,
														an = {},
														Wn = Object.keys(le);
													for (Dt = 0; Dt < Wn.length; Dt++)
														(Te = Wn[Dt]),
															Re.indexOf(Te) >= 0 || (an[Te] = le[Te]);
													return an;
												})(W, Y);
											if (Object.getOwnPropertySymbols) {
												var ye = Object.getOwnPropertySymbols(W);
												for (q = 0; q < ye.length; q++)
													(G = ye[q]),
														Y.indexOf(G) >= 0 ||
															(Object.prototype.propertyIsEnumerable.call(
																W,
																G
															) &&
																(ue[G] = W[G]));
											}
											return ue;
										})(k, Q)),
									D = this.useIntersectionObserver
										? null
										: this.state.scrollPosition;
								return s().createElement(
									M,
									te(
										{ forwardRef: this.baseComponentRef, scrollPosition: D },
										j
									)
								);
							},
						},
					]) && oe(U.prototype, ce),
					Object.defineProperty(U, "prototype", { writable: !1 }),
					x
				);
			})(s().Component);
			return (
				(R.propTypes = {
					delayMethod: o.PropTypes.oneOf(["debounce", "throttle"]),
					delayTime: o.PropTypes.number,
					useIntersectionObserver: o.PropTypes.bool,
				}),
				(R.defaultProps = {
					delayMethod: "throttle",
					delayTime: 300,
					useIntersectionObserver: !0,
				}),
				R
			);
		};
		function pe(M) {
			return (
				(pe =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (R) {
								return typeof R;
						  }
						: function (R) {
								return R &&
									typeof Symbol == "function" &&
									R.constructor === Symbol &&
									R !== Symbol.prototype
									? "symbol"
									: typeof R;
						  }),
				pe(M)
			);
		}
		function Oe(M, R) {
			for (var F = 0; F < R.length; F++) {
				var U = R[F];
				(U.enumerable = U.enumerable || !1),
					(U.configurable = !0),
					"value" in U && (U.writable = !0),
					Object.defineProperty(
						M,
						((ce = (function (de, Ee) {
							if (pe(de) !== "object" || de === null) return de;
							var y = de[Symbol.toPrimitive];
							if (y !== void 0) {
								var x = y.call(de, "string");
								if (pe(x) !== "object") return x;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(de);
						})(U.key)),
						pe(ce) === "symbol" ? ce : String(ce)),
						U
					);
			}
			var ce;
		}
		function se(M, R) {
			return (
				(se = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (F, U) {
							return (F.__proto__ = U), F;
					  }),
				se(M, R)
			);
		}
		function Ce(M) {
			return (
				(Ce = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (R) {
							return R.__proto__ || Object.getPrototypeOf(R);
					  }),
				Ce(M)
			);
		}
		var qe = (function (M) {
			(function (y, x) {
				if (typeof x != "function" && x !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(y.prototype = Object.create(x && x.prototype, {
					constructor: { value: y, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(y, "prototype", { writable: !1 }),
					x && se(y, x);
			})(Ee, M);
			var R,
				F,
				U,
				ce,
				de =
					((U = Ee),
					(ce = (function () {
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
						var y,
							x = Ce(U);
						if (ce) {
							var k = Ce(this).constructor;
							y = Reflect.construct(x, arguments, k);
						} else y = x.apply(this, arguments);
						return (function (j, D) {
							if (D && (pe(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return (function (W) {
								if (W === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return W;
							})(j);
						})(this, y);
					});
			function Ee(y) {
				return (
					(function (x, k) {
						if (!(x instanceof k))
							throw new TypeError("Cannot call a class as a function");
					})(this, Ee),
					de.call(this, y)
				);
			}
			return (
				(R = Ee),
				(F = [
					{
						key: "render",
						value: function () {
							return s().createElement(m, this.props);
						},
					},
				]) && Oe(R.prototype, F),
				Object.defineProperty(R, "prototype", { writable: !1 }),
				Ee
			);
		})(s().Component);
		const mt = he(qe);
		function Fe(M) {
			return (
				(Fe =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (R) {
								return typeof R;
						  }
						: function (R) {
								return R &&
									typeof Symbol == "function" &&
									R.constructor === Symbol &&
									R !== Symbol.prototype
									? "symbol"
									: typeof R;
						  }),
				Fe(M)
			);
		}
		function wn(M, R) {
			for (var F = 0; F < R.length; F++) {
				var U = R[F];
				(U.enumerable = U.enumerable || !1),
					(U.configurable = !0),
					"value" in U && (U.writable = !0),
					Object.defineProperty(
						M,
						((ce = (function (de, Ee) {
							if (Fe(de) !== "object" || de === null) return de;
							var y = de[Symbol.toPrimitive];
							if (y !== void 0) {
								var x = y.call(de, "string");
								if (Fe(x) !== "object") return x;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return String(de);
						})(U.key)),
						Fe(ce) === "symbol" ? ce : String(ce)),
						U
					);
			}
			var ce;
		}
		function Qt(M, R) {
			return (
				(Qt = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (F, U) {
							return (F.__proto__ = U), F;
					  }),
				Qt(M, R)
			);
		}
		function $e(M) {
			if (M === void 0)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return M;
		}
		function Je(M) {
			return (
				(Je = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (R) {
							return R.__proto__ || Object.getPrototypeOf(R);
					  }),
				Je(M)
			);
		}
		var Et = (function (M) {
			(function (y, x) {
				if (typeof x != "function" && x !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(y.prototype = Object.create(x && x.prototype, {
					constructor: { value: y, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(y, "prototype", { writable: !1 }),
					x && Qt(y, x);
			})(Ee, M);
			var R,
				F,
				U,
				ce,
				de =
					((U = Ee),
					(ce = (function () {
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
						var y,
							x = Je(U);
						if (ce) {
							var k = Je(this).constructor;
							y = Reflect.construct(x, arguments, k);
						} else y = x.apply(this, arguments);
						return (function (j, D) {
							if (D && (Fe(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return $e(j);
						})(this, y);
					});
			function Ee(y) {
				var x;
				(function (Y, G) {
					if (!(Y instanceof G))
						throw new TypeError("Cannot call a class as a function");
				})(this, Ee),
					(x = de.call(this, y));
				var k = y.afterLoad,
					j = y.beforeLoad,
					D = y.scrollPosition,
					W = y.visibleByDefault;
				return (
					(x.state = { visible: W }),
					W && (j(), k()),
					(x.onVisible = x.onVisible.bind($e(x))),
					(x.isScrollTracked = !!(
						D &&
						Number.isFinite(D.x) &&
						D.x >= 0 &&
						Number.isFinite(D.y) &&
						D.y >= 0
					)),
					x
				);
			}
			return (
				(R = Ee),
				(F = [
					{
						key: "componentDidUpdate",
						value: function (y, x) {
							x.visible !== this.state.visible && this.props.afterLoad();
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
							var y = this.props,
								x = y.className,
								k = y.delayMethod,
								j = y.delayTime,
								D = y.height,
								W = y.placeholder,
								Y = y.scrollPosition,
								G = y.style,
								q = y.threshold,
								ue = y.useIntersectionObserver,
								ye = y.width;
							return this.isScrollTracked || (ue && u())
								? s().createElement(m, {
										className: x,
										height: D,
										onVisible: this.onVisible,
										placeholder: W,
										scrollPosition: Y,
										style: G,
										threshold: q,
										useIntersectionObserver: ue,
										width: ye,
								  })
								: s().createElement(mt, {
										className: x,
										delayMethod: k,
										delayTime: j,
										height: D,
										onVisible: this.onVisible,
										placeholder: W,
										style: G,
										threshold: q,
										width: ye,
								  });
						},
					},
				]) && wn(R.prototype, F),
				Object.defineProperty(R, "prototype", { writable: !1 }),
				Ee
			);
		})(s().Component);
		(Et.propTypes = {
			afterLoad: o.PropTypes.func,
			beforeLoad: o.PropTypes.func,
			useIntersectionObserver: o.PropTypes.bool,
			visibleByDefault: o.PropTypes.bool,
		}),
			(Et.defaultProps = {
				afterLoad: function () {
					return {};
				},
				beforeLoad: function () {
					return {};
				},
				useIntersectionObserver: !0,
				visibleByDefault: !1,
			});
		const Zi = Et;
		function Nt(M) {
			return (
				(Nt =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (R) {
								return typeof R;
						  }
						: function (R) {
								return R &&
									typeof Symbol == "function" &&
									R.constructor === Symbol &&
									R !== Symbol.prototype
									? "symbol"
									: typeof R;
						  }),
				Nt(M)
			);
		}
		var S = [
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
		function T(M, R) {
			var F = Object.keys(M);
			if (Object.getOwnPropertySymbols) {
				var U = Object.getOwnPropertySymbols(M);
				R &&
					(U = U.filter(function (ce) {
						return Object.getOwnPropertyDescriptor(M, ce).enumerable;
					})),
					F.push.apply(F, U);
			}
			return F;
		}
		function A(M) {
			for (var R = 1; R < arguments.length; R++) {
				var F = arguments[R] != null ? arguments[R] : {};
				R % 2
					? T(Object(F), !0).forEach(function (U) {
							ee(M, U, F[U]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(M, Object.getOwnPropertyDescriptors(F))
					: T(Object(F)).forEach(function (U) {
							Object.defineProperty(
								M,
								U,
								Object.getOwnPropertyDescriptor(F, U)
							);
					  });
			}
			return M;
		}
		function ee(M, R, F) {
			return (
				(R = re(R)) in M
					? Object.defineProperty(M, R, {
							value: F,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (M[R] = F),
				M
			);
		}
		function H() {
			return (
				(H = Object.assign
					? Object.assign.bind()
					: function (M) {
							for (var R = 1; R < arguments.length; R++) {
								var F = arguments[R];
								for (var U in F)
									Object.prototype.hasOwnProperty.call(F, U) && (M[U] = F[U]);
							}
							return M;
					  }),
				H.apply(this, arguments)
			);
		}
		function $(M, R) {
			for (var F = 0; F < R.length; F++) {
				var U = R[F];
				(U.enumerable = U.enumerable || !1),
					(U.configurable = !0),
					"value" in U && (U.writable = !0),
					Object.defineProperty(M, re(U.key), U);
			}
		}
		function re(M) {
			var R = (function (F, U) {
				if (Nt(F) !== "object" || F === null) return F;
				var ce = F[Symbol.toPrimitive];
				if (ce !== void 0) {
					var de = ce.call(F, "string");
					if (Nt(de) !== "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}
				return String(F);
			})(M);
			return Nt(R) === "symbol" ? R : String(R);
		}
		function Se(M, R) {
			return (
				(Se = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (F, U) {
							return (F.__proto__ = U), F;
					  }),
				Se(M, R)
			);
		}
		function ke(M) {
			return (
				(ke = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (R) {
							return R.__proto__ || Object.getPrototypeOf(R);
					  }),
				ke(M)
			);
		}
		var Ot = (function (M) {
			(function (y, x) {
				if (typeof x != "function" && x !== null)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(y.prototype = Object.create(x && x.prototype, {
					constructor: { value: y, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(y, "prototype", { writable: !1 }),
					x && Se(y, x);
			})(Ee, M);
			var R,
				F,
				U,
				ce,
				de =
					((U = Ee),
					(ce = (function () {
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
						var y,
							x = ke(U);
						if (ce) {
							var k = ke(this).constructor;
							y = Reflect.construct(x, arguments, k);
						} else y = x.apply(this, arguments);
						return (function (j, D) {
							if (D && (Nt(D) === "object" || typeof D == "function")) return D;
							if (D !== void 0)
								throw new TypeError(
									"Derived constructors may only return object or undefined"
								);
							return (function (W) {
								if (W === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return W;
							})(j);
						})(this, y);
					});
			function Ee(y) {
				var x;
				return (
					(function (k, j) {
						if (!(k instanceof j))
							throw new TypeError("Cannot call a class as a function");
					})(this, Ee),
					((x = de.call(this, y)).state = { loaded: !1 }),
					x
				);
			}
			return (
				(R = Ee),
				(F = [
					{
						key: "onImageLoad",
						value: function () {
							var y = this;
							return this.state.loaded
								? null
								: function (x) {
										y.props.onLoad(x),
											y.props.afterLoad(),
											y.setState({ loaded: !0 });
								  };
						},
					},
					{
						key: "getImg",
						value: function () {
							var y = this.props,
								x =
									(y.afterLoad,
									y.beforeLoad,
									y.delayMethod,
									y.delayTime,
									y.effect,
									y.placeholder,
									y.placeholderSrc,
									y.scrollPosition,
									y.threshold,
									y.useIntersectionObserver,
									y.visibleByDefault,
									y.wrapperClassName,
									y.wrapperProps,
									(function (k, j) {
										if (k == null) return {};
										var D,
											W,
											Y = (function (q, ue) {
												if (q == null) return {};
												var ye,
													le,
													Re = {},
													Te = Object.keys(q);
												for (le = 0; le < Te.length; le++)
													(ye = Te[le]),
														ue.indexOf(ye) >= 0 || (Re[ye] = q[ye]);
												return Re;
											})(k, j);
										if (Object.getOwnPropertySymbols) {
											var G = Object.getOwnPropertySymbols(k);
											for (W = 0; W < G.length; W++)
												(D = G[W]),
													j.indexOf(D) >= 0 ||
														(Object.prototype.propertyIsEnumerable.call(k, D) &&
															(Y[D] = k[D]));
										}
										return Y;
									})(y, S));
							return s().createElement(
								"img",
								H({}, x, { onLoad: this.onImageLoad() })
							);
						},
					},
					{
						key: "getLazyLoadImage",
						value: function () {
							var y = this.props,
								x = y.beforeLoad,
								k = y.className,
								j = y.delayMethod,
								D = y.delayTime,
								W = y.height,
								Y = y.placeholder,
								G = y.scrollPosition,
								q = y.style,
								ue = y.threshold,
								ye = y.useIntersectionObserver,
								le = y.visibleByDefault,
								Re = y.width;
							return s().createElement(
								Zi,
								{
									beforeLoad: x,
									className: k,
									delayMethod: j,
									delayTime: D,
									height: W,
									placeholder: Y,
									scrollPosition: G,
									style: q,
									threshold: ue,
									useIntersectionObserver: ye,
									visibleByDefault: le,
									width: Re,
								},
								this.getImg()
							);
						},
					},
					{
						key: "getWrappedLazyLoadImage",
						value: function (y) {
							var x = this.props,
								k = x.effect,
								j = x.height,
								D = x.placeholderSrc,
								W = x.width,
								Y = x.wrapperClassName,
								G = x.wrapperProps,
								q = this.state.loaded,
								ue = q ? " lazy-load-image-loaded" : "",
								ye =
									q || !D
										? {}
										: {
												backgroundImage: "url(".concat(D, ")"),
												backgroundSize: "100% 100%",
										  };
							return s().createElement(
								"span",
								H(
									{
										className: Y + " lazy-load-image-background " + k + ue,
										style: A(
											A({}, ye),
											{},
											{
												color: "transparent",
												display: "inline-block",
												height: j,
												width: W,
											}
										),
									},
									G
								),
								y
							);
						},
					},
					{
						key: "render",
						value: function () {
							var y = this.props,
								x = y.effect,
								k = y.placeholderSrc,
								j = y.visibleByDefault,
								D = y.wrapperClassName,
								W = y.wrapperProps,
								Y = this.getLazyLoadImage();
							return ((x || k) && !j) || D || W
								? this.getWrappedLazyLoadImage(Y)
								: Y;
						},
					},
				]) && $(R.prototype, F),
				Object.defineProperty(R, "prototype", { writable: !1 }),
				Ee
			);
		})(s().Component);
		(Ot.propTypes = {
			onLoad: o.PropTypes.func,
			afterLoad: o.PropTypes.func,
			beforeLoad: o.PropTypes.func,
			delayMethod: o.PropTypes.string,
			delayTime: o.PropTypes.number,
			effect: o.PropTypes.string,
			placeholderSrc: o.PropTypes.string,
			threshold: o.PropTypes.number,
			useIntersectionObserver: o.PropTypes.bool,
			visibleByDefault: o.PropTypes.bool,
			wrapperClassName: o.PropTypes.string,
			wrapperProps: o.PropTypes.object,
		}),
			(Ot.defaultProps = {
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
		const Hn = Ot;
	})(),
		(Ig.exports = r);
})();
var za = Ig.exports;
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
 */ const jg = function (e) {
		const t = [];
		let n = 0;
		for (let r = 0; r < e.length; r++) {
			let i = e.charCodeAt(r);
			i < 128
				? (t[n++] = i)
				: i < 2048
				? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
				: (i & 64512) === 55296 &&
				  r + 1 < e.length &&
				  (e.charCodeAt(r + 1) & 64512) === 56320
				? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
				  (t[n++] = (i >> 18) | 240),
				  (t[n++] = ((i >> 12) & 63) | 128),
				  (t[n++] = ((i >> 6) & 63) | 128),
				  (t[n++] = (i & 63) | 128))
				: ((t[n++] = (i >> 12) | 224),
				  (t[n++] = ((i >> 6) & 63) | 128),
				  (t[n++] = (i & 63) | 128));
		}
		return t;
	},
	hb = function (e) {
		const t = [];
		let n = 0,
			r = 0;
		for (; n < e.length; ) {
			const i = e[n++];
			if (i < 128) t[r++] = String.fromCharCode(i);
			else if (i > 191 && i < 224) {
				const s = e[n++];
				t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
			} else if (i > 239 && i < 365) {
				const s = e[n++],
					o = e[n++],
					a = e[n++],
					l =
						(((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
						65536;
				(t[r++] = String.fromCharCode(55296 + (l >> 10))),
					(t[r++] = String.fromCharCode(56320 + (l & 1023)));
			} else {
				const s = e[n++],
					o = e[n++];
				t[r++] = String.fromCharCode(
					((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
				);
			}
		}
		return t.join("");
	},
	Ag = {
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
		encodeByteArray(e, t) {
			if (!Array.isArray(e))
				throw Error("encodeByteArray takes an array as a parameter");
			this.init_();
			const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				r = [];
			for (let i = 0; i < e.length; i += 3) {
				const s = e[i],
					o = i + 1 < e.length,
					a = o ? e[i + 1] : 0,
					l = i + 2 < e.length,
					u = l ? e[i + 2] : 0,
					d = s >> 2,
					f = ((s & 3) << 4) | (a >> 4);
				let p = ((a & 15) << 2) | (u >> 6),
					b = u & 63;
				l || ((b = 64), o || (p = 64)), r.push(n[d], n[f], n[p], n[b]);
			}
			return r.join("");
		},
		encodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t
				? btoa(e)
				: this.encodeByteArray(jg(e), t);
		},
		decodeString(e, t) {
			return this.HAS_NATIVE_SUPPORT && !t
				? atob(e)
				: hb(this.decodeStringToByteArray(e, t));
		},
		decodeStringToByteArray(e, t) {
			this.init_();
			const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				r = [];
			for (let i = 0; i < e.length; ) {
				const s = n[e.charAt(i++)],
					a = i < e.length ? n[e.charAt(i)] : 0;
				++i;
				const u = i < e.length ? n[e.charAt(i)] : 64;
				++i;
				const f = i < e.length ? n[e.charAt(i)] : 64;
				if ((++i, s == null || a == null || u == null || f == null))
					throw new pb();
				const p = (s << 2) | (a >> 4);
				if ((r.push(p), u !== 64)) {
					const b = ((a << 4) & 240) | (u >> 2);
					if ((r.push(b), f !== 64)) {
						const w = ((u << 6) & 192) | f;
						r.push(w);
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
				for (let e = 0; e < this.ENCODED_VALS.length; e++)
					(this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
						(this.charToByteMap_[this.byteToCharMap_[e]] = e),
						(this.byteToCharMapWebSafe_[e] =
							this.ENCODED_VALS_WEBSAFE.charAt(e)),
						(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
						e >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
							(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
			}
		},
	};
class pb extends Error {
	constructor() {
		super(...arguments), (this.name = "DecodeBase64StringError");
	}
}
const mb = function (e) {
		const t = jg(e);
		return Ag.encodeByteArray(t, !0);
	},
	Lg = function (e) {
		return mb(e).replace(/\./g, "");
	},
	Dg = function (e) {
		try {
			return Ag.decodeString(e, !0);
		} catch (t) {
			console.error("base64Decode failed: ", t);
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
 */ function yb() {
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
 */ const gb = () => yb().__FIREBASE_DEFAULTS__,
	vb = () => {
		if (typeof process > "u" || typeof process.env > "u") return;
		const e = {}.__FIREBASE_DEFAULTS__;
		if (e) return JSON.parse(e);
	},
	wb = () => {
		if (typeof document > "u") return;
		let e;
		try {
			e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		const t = e && Dg(e[1]);
		return t && JSON.parse(t);
	},
	Xd = () => {
		try {
			return gb() || vb() || wb();
		} catch (e) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
			return;
		}
	},
	xb = (e) => {
		var t, n;
		return (n =
			(t = Xd()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
			null || n === void 0
			? void 0
			: n[e];
	},
	Mg = () => {
		var e;
		return (e = Xd()) === null || e === void 0 ? void 0 : e.config;
	},
	Fg = (e) => {
		var t;
		return (t = Xd()) === null || t === void 0 ? void 0 : t[`_${e}`];
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
 */ class bb {
	constructor() {
		(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((t, n) => {
				(this.resolve = t), (this.reject = n);
			}));
	}
	wrapCallback(t) {
		return (n, r) => {
			n ? this.reject(n) : this.resolve(r),
				typeof t == "function" &&
					(this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
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
 */ function pt() {
	return typeof navigator < "u" && typeof navigator.userAgent == "string"
		? navigator.userAgent
		: "";
}
function Eb() {
	return (
		typeof window < "u" &&
		!!(window.cordova || window.phonegap || window.PhoneGap) &&
		/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())
	);
}
function Sb() {
	const e =
		typeof chrome == "object"
			? chrome.runtime
			: typeof browser == "object"
			? browser.runtime
			: void 0;
	return typeof e == "object" && e.id !== void 0;
}
function _b() {
	return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Cb() {
	const e = pt();
	return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function kb() {
	try {
		return typeof indexedDB == "object";
	} catch {
		return !1;
	}
}
function Rb() {
	return new Promise((e, t) => {
		try {
			let n = !0;
			const r = "validate-browser-context-for-indexeddb-analytics-module",
				i = self.indexedDB.open(r);
			(i.onsuccess = () => {
				i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
			}),
				(i.onupgradeneeded = () => {
					n = !1;
				}),
				(i.onerror = () => {
					var s;
					t(
						((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
					);
				});
		} catch (n) {
			t(n);
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
 */ const Nb = "FirebaseError";
class Cr extends Error {
	constructor(t, n, r) {
		super(n),
			(this.code = t),
			(this.customData = r),
			(this.name = Nb),
			Object.setPrototypeOf(this, Cr.prototype),
			Error.captureStackTrace &&
				Error.captureStackTrace(this, uo.prototype.create);
	}
}
class uo {
	constructor(t, n, r) {
		(this.service = t), (this.serviceName = n), (this.errors = r);
	}
	create(t, ...n) {
		const r = n[0] || {},
			i = `${this.service}/${t}`,
			s = this.errors[t],
			o = s ? Ob(s, r) : "Error",
			a = `${this.serviceName}: ${o} (${i}).`;
		return new Cr(i, a, r);
	}
}
function Ob(e, t) {
	return e.replace(Pb, (n, r) => {
		const i = t[r];
		return i != null ? String(i) : `<${r}?>`;
	});
}
const Pb = /\{\$([^}]+)}/g;
function Tb(e) {
	for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function $a(e, t) {
	if (e === t) return !0;
	const n = Object.keys(e),
		r = Object.keys(t);
	for (const i of n) {
		if (!r.includes(i)) return !1;
		const s = e[i],
			o = t[i];
		if (Xh(s) && Xh(o)) {
			if (!$a(s, o)) return !1;
		} else if (s !== o) return !1;
	}
	for (const i of r) if (!n.includes(i)) return !1;
	return !0;
}
function Xh(e) {
	return e !== null && typeof e == "object";
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
 */ function co(e) {
	const t = [];
	for (const [n, r] of Object.entries(e))
		Array.isArray(r)
			? r.forEach((i) => {
					t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
			  })
			: t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
	return t.length ? "&" + t.join("&") : "";
}
function ws(e) {
	const t = {};
	return (
		e
			.replace(/^\?/, "")
			.split("&")
			.forEach((r) => {
				if (r) {
					const [i, s] = r.split("=");
					t[decodeURIComponent(i)] = decodeURIComponent(s);
				}
			}),
		t
	);
}
function xs(e) {
	const t = e.indexOf("?");
	if (!t) return "";
	const n = e.indexOf("#", t);
	return e.substring(t, n > 0 ? n : void 0);
}
function Ib(e, t) {
	const n = new jb(e, t);
	return n.subscribe.bind(n);
}
class jb {
	constructor(t, n) {
		(this.observers = []),
			(this.unsubscribes = []),
			(this.observerCount = 0),
			(this.task = Promise.resolve()),
			(this.finalized = !1),
			(this.onNoObservers = n),
			this.task
				.then(() => {
					t(this);
				})
				.catch((r) => {
					this.error(r);
				});
	}
	next(t) {
		this.forEachObserver((n) => {
			n.next(t);
		});
	}
	error(t) {
		this.forEachObserver((n) => {
			n.error(t);
		}),
			this.close(t);
	}
	complete() {
		this.forEachObserver((t) => {
			t.complete();
		}),
			this.close();
	}
	subscribe(t, n, r) {
		let i;
		if (t === void 0 && n === void 0 && r === void 0)
			throw new Error("Missing Observer.");
		Ab(t, ["next", "error", "complete"])
			? (i = t)
			: (i = { next: t, error: n, complete: r }),
			i.next === void 0 && (i.next = yu),
			i.error === void 0 && (i.error = yu),
			i.complete === void 0 && (i.complete = yu);
		const s = this.unsubscribeOne.bind(this, this.observers.length);
		return (
			this.finalized &&
				this.task.then(() => {
					try {
						this.finalError ? i.error(this.finalError) : i.complete();
					} catch {}
				}),
			this.observers.push(i),
			s
		);
	}
	unsubscribeOne(t) {
		this.observers === void 0 ||
			this.observers[t] === void 0 ||
			(delete this.observers[t],
			(this.observerCount -= 1),
			this.observerCount === 0 &&
				this.onNoObservers !== void 0 &&
				this.onNoObservers(this));
	}
	forEachObserver(t) {
		if (!this.finalized)
			for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
	}
	sendOne(t, n) {
		this.task.then(() => {
			if (this.observers !== void 0 && this.observers[t] !== void 0)
				try {
					n(this.observers[t]);
				} catch (r) {
					typeof console < "u" && console.error && console.error(r);
				}
		});
	}
	close(t) {
		this.finalized ||
			((this.finalized = !0),
			t !== void 0 && (this.finalError = t),
			this.task.then(() => {
				(this.observers = void 0), (this.onNoObservers = void 0);
			}));
	}
}
function Ab(e, t) {
	if (typeof e != "object" || e === null) return !1;
	for (const n of t) if (n in e && typeof e[n] == "function") return !0;
	return !1;
}
function yu() {}
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
 */ function gn(e) {
	return e && e._delegate ? e._delegate : e;
}
class Ui {
	constructor(t, n, r) {
		(this.name = t),
			(this.instanceFactory = n),
			(this.type = r),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = "LAZY"),
			(this.onInstanceCreated = null);
	}
	setInstantiationMode(t) {
		return (this.instantiationMode = t), this;
	}
	setMultipleInstances(t) {
		return (this.multipleInstances = t), this;
	}
	setServiceProps(t) {
		return (this.serviceProps = t), this;
	}
	setInstanceCreatedCallback(t) {
		return (this.onInstanceCreated = t), this;
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
 */ const Or = "[DEFAULT]";
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
 */ class Lb {
	constructor(t, n) {
		(this.name = t),
			(this.container = n),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map());
	}
	get(t) {
		const n = this.normalizeInstanceIdentifier(t);
		if (!this.instancesDeferred.has(n)) {
			const r = new bb();
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
	getImmediate(t) {
		var n;
		const r = this.normalizeInstanceIdentifier(
				t == null ? void 0 : t.identifier
			),
			i =
				(n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
		if (this.isInitialized(r) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: r });
			} catch (s) {
				if (i) return null;
				throw s;
			}
		else {
			if (i) return null;
			throw Error(`Service ${this.name} is not available`);
		}
	}
	getComponent() {
		return this.component;
	}
	setComponent(t) {
		if (t.name !== this.name)
			throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
		if (this.component)
			throw Error(`Component for ${this.name} has already been provided`);
		if (((this.component = t), !!this.shouldAutoInitialize())) {
			if (Mb(t))
				try {
					this.getOrInitializeService({ instanceIdentifier: Or });
				} catch {}
			for (const [n, r] of this.instancesDeferred.entries()) {
				const i = this.normalizeInstanceIdentifier(n);
				try {
					const s = this.getOrInitializeService({ instanceIdentifier: i });
					r.resolve(s);
				} catch {}
			}
		}
	}
	clearInstance(t = Or) {
		this.instancesDeferred.delete(t),
			this.instancesOptions.delete(t),
			this.instances.delete(t);
	}
	async delete() {
		const t = Array.from(this.instances.values());
		await Promise.all([
			...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
			...t.filter((n) => "_delete" in n).map((n) => n._delete()),
		]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(t = Or) {
		return this.instances.has(t);
	}
	getOptions(t = Or) {
		return this.instancesOptions.get(t) || {};
	}
	initialize(t = {}) {
		const { options: n = {} } = t,
			r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
		if (this.isInitialized(r))
			throw Error(`${this.name}(${r}) has already been initialized`);
		if (!this.isComponentSet())
			throw Error(`Component ${this.name} has not been registered yet`);
		const i = this.getOrInitializeService({
			instanceIdentifier: r,
			options: n,
		});
		for (const [s, o] of this.instancesDeferred.entries()) {
			const a = this.normalizeInstanceIdentifier(s);
			r === a && o.resolve(i);
		}
		return i;
	}
	onInit(t, n) {
		var r;
		const i = this.normalizeInstanceIdentifier(n),
			s =
				(r = this.onInitCallbacks.get(i)) !== null && r !== void 0
					? r
					: new Set();
		s.add(t), this.onInitCallbacks.set(i, s);
		const o = this.instances.get(i);
		return (
			o && t(o, i),
			() => {
				s.delete(t);
			}
		);
	}
	invokeOnInitCallbacks(t, n) {
		const r = this.onInitCallbacks.get(n);
		if (r)
			for (const i of r)
				try {
					i(t, n);
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
		let r = this.instances.get(t);
		if (
			!r &&
			this.component &&
			((r = this.component.instanceFactory(this.container, {
				instanceIdentifier: Db(t),
				options: n,
			})),
			this.instances.set(t, r),
			this.instancesOptions.set(t, n),
			this.invokeOnInitCallbacks(r, t),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, t, r);
			} catch {}
		return r || null;
	}
	normalizeInstanceIdentifier(t = Or) {
		return this.component ? (this.component.multipleInstances ? t : Or) : t;
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== "EXPLICIT";
	}
}
function Db(e) {
	return e === Or ? void 0 : e;
}
function Mb(e) {
	return e.instantiationMode === "EAGER";
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
 */ class Fb {
	constructor(t) {
		(this.name = t), (this.providers = new Map());
	}
	addComponent(t) {
		const n = this.getProvider(t.name);
		if (n.isComponentSet())
			throw new Error(
				`Component ${t.name} has already been registered with ${this.name}`
			);
		n.setComponent(t);
	}
	addOrOverwriteComponent(t) {
		this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
			this.addComponent(t);
	}
	getProvider(t) {
		if (this.providers.has(t)) return this.providers.get(t);
		const n = new Lb(t, this);
		return this.providers.set(t, n), n;
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
 */ var Pe;
(function (e) {
	(e[(e.DEBUG = 0)] = "DEBUG"),
		(e[(e.VERBOSE = 1)] = "VERBOSE"),
		(e[(e.INFO = 2)] = "INFO"),
		(e[(e.WARN = 3)] = "WARN"),
		(e[(e.ERROR = 4)] = "ERROR"),
		(e[(e.SILENT = 5)] = "SILENT");
})(Pe || (Pe = {}));
const Ub = {
		debug: Pe.DEBUG,
		verbose: Pe.VERBOSE,
		info: Pe.INFO,
		warn: Pe.WARN,
		error: Pe.ERROR,
		silent: Pe.SILENT,
	},
	Bb = Pe.INFO,
	zb = {
		[Pe.DEBUG]: "log",
		[Pe.VERBOSE]: "log",
		[Pe.INFO]: "info",
		[Pe.WARN]: "warn",
		[Pe.ERROR]: "error",
	},
	$b = (e, t, ...n) => {
		if (t < e.logLevel) return;
		const r = new Date().toISOString(),
			i = zb[t];
		if (i) console[i](`[${r}]  ${e.name}:`, ...n);
		else
			throw new Error(
				`Attempted to log a message with an invalid logType (value: ${t})`
			);
	};
class Ug {
	constructor(t) {
		(this.name = t),
			(this._logLevel = Bb),
			(this._logHandler = $b),
			(this._userLogHandler = null);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(t) {
		if (!(t in Pe))
			throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
		this._logLevel = t;
	}
	setLogLevel(t) {
		this._logLevel = typeof t == "string" ? Ub[t] : t;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(t) {
		if (typeof t != "function")
			throw new TypeError("Value assigned to `logHandler` must be a function");
		this._logHandler = t;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(t) {
		this._userLogHandler = t;
	}
	debug(...t) {
		this._userLogHandler && this._userLogHandler(this, Pe.DEBUG, ...t),
			this._logHandler(this, Pe.DEBUG, ...t);
	}
	log(...t) {
		this._userLogHandler && this._userLogHandler(this, Pe.VERBOSE, ...t),
			this._logHandler(this, Pe.VERBOSE, ...t);
	}
	info(...t) {
		this._userLogHandler && this._userLogHandler(this, Pe.INFO, ...t),
			this._logHandler(this, Pe.INFO, ...t);
	}
	warn(...t) {
		this._userLogHandler && this._userLogHandler(this, Pe.WARN, ...t),
			this._logHandler(this, Pe.WARN, ...t);
	}
	error(...t) {
		this._userLogHandler && this._userLogHandler(this, Pe.ERROR, ...t),
			this._logHandler(this, Pe.ERROR, ...t);
	}
}
const Vb = (e, t) => t.some((n) => e instanceof n);
let Zh, ep;
function Hb() {
	return (
		Zh ||
		(Zh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
	);
}
function Wb() {
	return (
		ep ||
		(ep = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey,
		])
	);
}
const Bg = new WeakMap(),
	jc = new WeakMap(),
	zg = new WeakMap(),
	gu = new WeakMap(),
	Zd = new WeakMap();
function qb(e) {
	const t = new Promise((n, r) => {
		const i = () => {
				e.removeEventListener("success", s), e.removeEventListener("error", o);
			},
			s = () => {
				n(yr(e.result)), i();
			},
			o = () => {
				r(e.error), i();
			};
		e.addEventListener("success", s), e.addEventListener("error", o);
	});
	return (
		t
			.then((n) => {
				n instanceof IDBCursor && Bg.set(n, e);
			})
			.catch(() => {}),
		Zd.set(t, e),
		t
	);
}
function Kb(e) {
	if (jc.has(e)) return;
	const t = new Promise((n, r) => {
		const i = () => {
				e.removeEventListener("complete", s),
					e.removeEventListener("error", o),
					e.removeEventListener("abort", o);
			},
			s = () => {
				n(), i();
			},
			o = () => {
				r(e.error || new DOMException("AbortError", "AbortError")), i();
			};
		e.addEventListener("complete", s),
			e.addEventListener("error", o),
			e.addEventListener("abort", o);
	});
	jc.set(e, t);
}
let Ac = {
	get(e, t, n) {
		if (e instanceof IDBTransaction) {
			if (t === "done") return jc.get(e);
			if (t === "objectStoreNames") return e.objectStoreNames || zg.get(e);
			if (t === "store")
				return n.objectStoreNames[1]
					? void 0
					: n.objectStore(n.objectStoreNames[0]);
		}
		return yr(e[t]);
	},
	set(e, t, n) {
		return (e[t] = n), !0;
	},
	has(e, t) {
		return e instanceof IDBTransaction && (t === "done" || t === "store")
			? !0
			: t in e;
	},
};
function Qb(e) {
	Ac = e(Ac);
}
function Gb(e) {
	return e === IDBDatabase.prototype.transaction &&
		!("objectStoreNames" in IDBTransaction.prototype)
		? function (t, ...n) {
				const r = e.call(vu(this), t, ...n);
				return zg.set(r, t.sort ? t.sort() : [t]), yr(r);
		  }
		: Wb().includes(e)
		? function (...t) {
				return e.apply(vu(this), t), yr(Bg.get(this));
		  }
		: function (...t) {
				return yr(e.apply(vu(this), t));
		  };
}
function Jb(e) {
	return typeof e == "function"
		? Gb(e)
		: (e instanceof IDBTransaction && Kb(e),
		  Vb(e, Hb()) ? new Proxy(e, Ac) : e);
}
function yr(e) {
	if (e instanceof IDBRequest) return qb(e);
	if (gu.has(e)) return gu.get(e);
	const t = Jb(e);
	return t !== e && (gu.set(e, t), Zd.set(t, e)), t;
}
const vu = (e) => Zd.get(e);
function Yb(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
	const o = indexedDB.open(e, t),
		a = yr(o);
	return (
		r &&
			o.addEventListener("upgradeneeded", (l) => {
				r(yr(o.result), l.oldVersion, l.newVersion, yr(o.transaction), l);
			}),
		n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
		a
			.then((l) => {
				s && l.addEventListener("close", () => s()),
					i &&
						l.addEventListener("versionchange", (u) =>
							i(u.oldVersion, u.newVersion, u)
						);
			})
			.catch(() => {}),
		a
	);
}
const Xb = ["get", "getKey", "getAll", "getAllKeys", "count"],
	Zb = ["put", "add", "delete", "clear"],
	wu = new Map();
function tp(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (wu.get(t)) return wu.get(t);
	const n = t.replace(/FromIndex$/, ""),
		r = t !== n,
		i = Zb.includes(n);
	if (
		!(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
		!(i || Xb.includes(n))
	)
		return;
	const s = async function (o, ...a) {
		const l = this.transaction(o, i ? "readwrite" : "readonly");
		let u = l.store;
		return (
			r && (u = u.index(a.shift())),
			(await Promise.all([u[n](...a), i && l.done]))[0]
		);
	};
	return wu.set(t, s), s;
}
Qb((e) => ({
	...e,
	get: (t, n, r) => tp(t, n) || e.get(t, n, r),
	has: (t, n) => !!tp(t, n) || e.has(t, n),
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
 */ class eE {
	constructor(t) {
		this.container = t;
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((n) => {
				if (tE(n)) {
					const r = n.getImmediate();
					return `${r.library}/${r.version}`;
				} else return null;
			})
			.filter((n) => n)
			.join(" ");
	}
}
function tE(e) {
	const t = e.getComponent();
	return (t == null ? void 0 : t.type) === "VERSION";
}
const Lc = "@firebase/app",
	np = "0.9.15";
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
 */ const Kr = new Ug("@firebase/app"),
	nE = "@firebase/app-compat",
	rE = "@firebase/analytics-compat",
	iE = "@firebase/analytics",
	sE = "@firebase/app-check-compat",
	oE = "@firebase/app-check",
	aE = "@firebase/auth",
	lE = "@firebase/auth-compat",
	uE = "@firebase/database",
	cE = "@firebase/database-compat",
	dE = "@firebase/functions",
	fE = "@firebase/functions-compat",
	hE = "@firebase/installations",
	pE = "@firebase/installations-compat",
	mE = "@firebase/messaging",
	yE = "@firebase/messaging-compat",
	gE = "@firebase/performance",
	vE = "@firebase/performance-compat",
	wE = "@firebase/remote-config",
	xE = "@firebase/remote-config-compat",
	bE = "@firebase/storage",
	EE = "@firebase/storage-compat",
	SE = "@firebase/firestore",
	_E = "@firebase/firestore-compat",
	CE = "firebase",
	kE = "10.1.0";
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
 */ const Dc = "[DEFAULT]",
	RE = {
		[Lc]: "fire-core",
		[nE]: "fire-core-compat",
		[iE]: "fire-analytics",
		[rE]: "fire-analytics-compat",
		[oE]: "fire-app-check",
		[sE]: "fire-app-check-compat",
		[aE]: "fire-auth",
		[lE]: "fire-auth-compat",
		[uE]: "fire-rtdb",
		[cE]: "fire-rtdb-compat",
		[dE]: "fire-fn",
		[fE]: "fire-fn-compat",
		[hE]: "fire-iid",
		[pE]: "fire-iid-compat",
		[mE]: "fire-fcm",
		[yE]: "fire-fcm-compat",
		[gE]: "fire-perf",
		[vE]: "fire-perf-compat",
		[wE]: "fire-rc",
		[xE]: "fire-rc-compat",
		[bE]: "fire-gcs",
		[EE]: "fire-gcs-compat",
		[SE]: "fire-fst",
		[_E]: "fire-fst-compat",
		"fire-js": "fire-js",
		[CE]: "fire-js-all",
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
 */ const Va = new Map(),
	Mc = new Map();
function NE(e, t) {
	try {
		e.container.addComponent(t);
	} catch (n) {
		Kr.debug(
			`Component ${t.name} failed to register with FirebaseApp ${e.name}`,
			n
		);
	}
}
function Ys(e) {
	const t = e.name;
	if (Mc.has(t))
		return (
			Kr.debug(`There were multiple attempts to register component ${t}.`), !1
		);
	Mc.set(t, e);
	for (const n of Va.values()) NE(n, e);
	return !0;
}
function $g(e, t) {
	const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
	return n && n.triggerHeartbeat(), e.container.getProvider(t);
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
 */ const OE = {
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
	gr = new uo("app", "Firebase", OE);
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
 */ class PE {
	constructor(t, n, r) {
		(this._isDeleted = !1),
			(this._options = Object.assign({}, t)),
			(this._config = Object.assign({}, n)),
			(this._name = n.name),
			(this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
			(this._container = r),
			this.container.addComponent(new Ui("app", () => this, "PUBLIC"));
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(t) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
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
	set isDeleted(t) {
		this._isDeleted = t;
	}
	checkDestroyed() {
		if (this.isDeleted) throw gr.create("app-deleted", { appName: this._name });
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
 */ const fo = kE;
function Vg(e, t = {}) {
	let n = e;
	typeof t != "object" && (t = { name: t });
	const r = Object.assign({ name: Dc, automaticDataCollectionEnabled: !1 }, t),
		i = r.name;
	if (typeof i != "string" || !i)
		throw gr.create("bad-app-name", { appName: String(i) });
	if ((n || (n = Mg()), !n)) throw gr.create("no-options");
	const s = Va.get(i);
	if (s) {
		if ($a(n, s.options) && $a(r, s.config)) return s;
		throw gr.create("duplicate-app", { appName: i });
	}
	const o = new Fb(i);
	for (const l of Mc.values()) o.addComponent(l);
	const a = new PE(n, r, o);
	return Va.set(i, a), a;
}
function TE(e = Dc) {
	const t = Va.get(e);
	if (!t && e === Dc && Mg()) return Vg();
	if (!t) throw gr.create("no-app", { appName: e });
	return t;
}
function ki(e, t, n) {
	var r;
	let i = (r = RE[e]) !== null && r !== void 0 ? r : e;
	n && (i += `-${n}`);
	const s = i.match(/\s|\//),
		o = t.match(/\s|\//);
	if (s || o) {
		const a = [`Unable to register library "${i}" with version "${t}":`];
		s &&
			a.push(
				`library name "${i}" contains illegal characters (whitespace or "/")`
			),
			s && o && a.push("and"),
			o &&
				a.push(
					`version name "${t}" contains illegal characters (whitespace or "/")`
				),
			Kr.warn(a.join(" "));
		return;
	}
	Ys(new Ui(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
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
 */ const IE = "firebase-heartbeat-database",
	jE = 1,
	Xs = "firebase-heartbeat-store";
let xu = null;
function Hg() {
	return (
		xu ||
			(xu = Yb(IE, jE, {
				upgrade: (e, t) => {
					switch (t) {
						case 0:
							e.createObjectStore(Xs);
					}
				},
			}).catch((e) => {
				throw gr.create("idb-open", { originalErrorMessage: e.message });
			})),
		xu
	);
}
async function AE(e) {
	try {
		return await (await Hg()).transaction(Xs).objectStore(Xs).get(Wg(e));
	} catch (t) {
		if (t instanceof Cr) Kr.warn(t.message);
		else {
			const n = gr.create("idb-get", {
				originalErrorMessage: t == null ? void 0 : t.message,
			});
			Kr.warn(n.message);
		}
	}
}
async function rp(e, t) {
	try {
		const r = (await Hg()).transaction(Xs, "readwrite");
		await r.objectStore(Xs).put(t, Wg(e)), await r.done;
	} catch (n) {
		if (n instanceof Cr) Kr.warn(n.message);
		else {
			const r = gr.create("idb-set", {
				originalErrorMessage: n == null ? void 0 : n.message,
			});
			Kr.warn(r.message);
		}
	}
}
function Wg(e) {
	return `${e.name}!${e.options.appId}`;
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
 */ const LE = 1024,
	DE = 30 * 24 * 60 * 60 * 1e3;
class ME {
	constructor(t) {
		(this.container = t), (this._heartbeatsCache = null);
		const n = this.container.getProvider("app").getImmediate();
		(this._storage = new UE(n)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((r) => ((this._heartbeatsCache = r), r)));
	}
	async triggerHeartbeat() {
		const n = this.container
				.getProvider("platform-logger")
				.getImmediate()
				.getPlatformInfoString(),
			r = ip();
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
						const s = new Date(i.date).valueOf();
						return Date.now() - s <= DE;
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
		const t = ip(),
			{ heartbeatsToSend: n, unsentEntries: r } = FE(
				this._heartbeatsCache.heartbeats
			),
			i = Lg(JSON.stringify({ version: 2, heartbeats: n }));
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = t),
			r.length > 0
				? ((this._heartbeatsCache.heartbeats = r),
				  await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []),
				  this._storage.overwrite(this._heartbeatsCache)),
			i
		);
	}
}
function ip() {
	return new Date().toISOString().substring(0, 10);
}
function FE(e, t = LE) {
	const n = [];
	let r = e.slice();
	for (const i of e) {
		const s = n.find((o) => o.agent === i.agent);
		if (s) {
			if ((s.dates.push(i.date), sp(n) > t)) {
				s.dates.pop();
				break;
			}
		} else if ((n.push({ agent: i.agent, dates: [i.date] }), sp(n) > t)) {
			n.pop();
			break;
		}
		r = r.slice(1);
	}
	return { heartbeatsToSend: n, unsentEntries: r };
}
class UE {
	constructor(t) {
		(this.app = t),
			(this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
	}
	async runIndexedDBEnvironmentCheck() {
		return kb()
			? Rb()
					.then(() => !0)
					.catch(() => !1)
			: !1;
	}
	async read() {
		return (await this._canUseIndexedDBPromise)
			? (await AE(this.app)) || { heartbeats: [] }
			: { heartbeats: [] };
	}
	async overwrite(t) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return rp(this.app, {
				lastSentHeartbeatDate:
					(n = t.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: t.heartbeats,
			});
		} else return;
	}
	async add(t) {
		var n;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return rp(this.app, {
				lastSentHeartbeatDate:
					(n = t.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: [...i.heartbeats, ...t.heartbeats],
			});
		} else return;
	}
}
function sp(e) {
	return Lg(JSON.stringify({ version: 2, heartbeats: e })).length;
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
 */ function BE(e) {
	Ys(new Ui("platform-logger", (t) => new eE(t), "PRIVATE")),
		Ys(new Ui("heartbeat", (t) => new ME(t), "PRIVATE")),
		ki(Lc, np, e),
		ki(Lc, np, "esm2017"),
		ki("fire-js", "");
}
BE("");
function ef(e, t) {
	var n = {};
	for (var r in e)
		Object.prototype.hasOwnProperty.call(e, r) &&
			t.indexOf(r) < 0 &&
			(n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
			t.indexOf(r[i]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
				(n[r[i]] = e[r[i]]);
	return n;
}
function qg() {
	return {
		"dependent-sdk-initialized-before-auth":
			"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
	};
}
const zE = qg,
	Kg = new uo("auth", "Firebase", qg());
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
 */ const Ha = new Ug("@firebase/auth");
function $E(e, ...t) {
	Ha.logLevel <= Pe.WARN && Ha.warn(`Auth (${fo}): ${e}`, ...t);
}
function ra(e, ...t) {
	Ha.logLevel <= Pe.ERROR && Ha.error(`Auth (${fo}): ${e}`, ...t);
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
 */ function Kt(e, ...t) {
	throw tf(e, ...t);
}
function mn(e, ...t) {
	return tf(e, ...t);
}
function Qg(e, t, n) {
	const r = Object.assign(Object.assign({}, zE()), { [t]: n });
	return new uo("auth", "Firebase", r).create(t, { appName: e.name });
}
function VE(e, t, n) {
	const r = n;
	if (!(t instanceof r))
		throw (
			(r.name !== t.constructor.name && Kt(e, "argument-error"),
			Qg(
				e,
				"argument-error",
				`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
			))
		);
}
function tf(e, ...t) {
	if (typeof e != "string") {
		const n = t[0],
			r = [...t.slice(1)];
		return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
	}
	return Kg.create(e, ...t);
}
function ae(e, t, ...n) {
	if (!e) throw tf(t, ...n);
}
function Pn(e) {
	const t = "INTERNAL ASSERTION FAILED: " + e;
	throw (ra(t), new Error(t));
}
function Un(e, t) {
	e || Pn(t);
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
 */ function Fc() {
	var e;
	return (
		(typeof self < "u" &&
			((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
		""
	);
}
function HE() {
	return op() === "http:" || op() === "https:";
}
function op() {
	var e;
	return (
		(typeof self < "u" &&
			((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
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
 */ function WE() {
	return typeof navigator < "u" &&
		navigator &&
		"onLine" in navigator &&
		typeof navigator.onLine == "boolean" &&
		(HE() || Sb() || "connection" in navigator)
		? navigator.onLine
		: !0;
}
function qE() {
	if (typeof navigator > "u") return null;
	const e = navigator;
	return (e.languages && e.languages[0]) || e.language || null;
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
 */ class ho {
	constructor(t, n) {
		(this.shortDelay = t),
			(this.longDelay = n),
			Un(n > t, "Short delay should be less than long delay!"),
			(this.isMobile = Eb() || _b());
	}
	get() {
		return WE()
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
 */ function nf(e, t) {
	Un(e.emulator, "Emulator should always be set here");
	const { url: n } = e.emulator;
	return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
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
 */ class Gg {
	static initialize(t, n, r) {
		(this.fetchImpl = t),
			n && (this.headersImpl = n),
			r && (this.responseImpl = r);
	}
	static fetch() {
		if (this.fetchImpl) return this.fetchImpl;
		if (typeof self < "u" && "fetch" in self) return self.fetch;
		Pn(
			"Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
		);
	}
	static headers() {
		if (this.headersImpl) return this.headersImpl;
		if (typeof self < "u" && "Headers" in self) return self.Headers;
		Pn(
			"Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
		);
	}
	static response() {
		if (this.responseImpl) return this.responseImpl;
		if (typeof self < "u" && "Response" in self) return self.Response;
		Pn(
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
 */ const KE = {
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
 */ const QE = new ho(3e4, 6e4);
function po(e, t) {
	return e.tenantId && !t.tenantId
		? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
		: t;
}
async function Zr(e, t, n, r, i = {}) {
	return Jg(e, i, async () => {
		let s = {},
			o = {};
		r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
		const a = co(Object.assign({ key: e.config.apiKey }, o)).slice(1),
			l = await e._getAdditionalHeaders();
		return (
			(l["Content-Type"] = "application/json"),
			e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
			Gg.fetch()(
				Yg(e, e.config.apiHost, n, a),
				Object.assign(
					{ method: t, headers: l, referrerPolicy: "no-referrer" },
					s
				)
			)
		);
	});
}
async function Jg(e, t, n) {
	e._canInitEmulator = !1;
	const r = Object.assign(Object.assign({}, KE), t);
	try {
		const i = new GE(e),
			s = await Promise.race([n(), i.promise]);
		i.clearNetworkTimeout();
		const o = await s.json();
		if ("needConfirmation" in o)
			throw Vo(e, "account-exists-with-different-credential", o);
		if (s.ok && !("errorMessage" in o)) return o;
		{
			const a = s.ok ? o.errorMessage : o.error.message,
				[l, u] = a.split(" : ");
			if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
				throw Vo(e, "credential-already-in-use", o);
			if (l === "EMAIL_EXISTS") throw Vo(e, "email-already-in-use", o);
			if (l === "USER_DISABLED") throw Vo(e, "user-disabled", o);
			const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
			if (u) throw Qg(e, d, u);
			Kt(e, d);
		}
	} catch (i) {
		if (i instanceof Cr) throw i;
		Kt(e, "network-request-failed", { message: String(i) });
	}
}
async function _l(e, t, n, r, i = {}) {
	const s = await Zr(e, t, n, r, i);
	return (
		"mfaPendingCredential" in s &&
			Kt(e, "multi-factor-auth-required", { _serverResponse: s }),
		s
	);
}
function Yg(e, t, n, r) {
	const i = `${t}${n}?${r}`;
	return e.config.emulator ? nf(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class GE {
	constructor(t) {
		(this.auth = t),
			(this.timer = null),
			(this.promise = new Promise((n, r) => {
				this.timer = setTimeout(
					() => r(mn(this.auth, "network-request-failed")),
					QE.get()
				);
			}));
	}
	clearNetworkTimeout() {
		clearTimeout(this.timer);
	}
}
function Vo(e, t, n) {
	const r = { appName: e.name };
	n.email && (r.email = n.email),
		n.phoneNumber && (r.phoneNumber = n.phoneNumber);
	const i = mn(e, t, r);
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
 */ async function JE(e, t) {
	return Zr(e, "POST", "/v1/accounts:delete", t);
}
async function YE(e, t) {
	return Zr(e, "POST", "/v1/accounts:lookup", t);
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
 */ function Is(e) {
	if (e)
		try {
			const t = new Date(Number(e));
			if (!isNaN(t.getTime())) return t.toUTCString();
		} catch {}
}
async function XE(e, t = !1) {
	const n = gn(e),
		r = await n.getIdToken(t),
		i = rf(r);
	ae(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
	const s = typeof i.firebase == "object" ? i.firebase : void 0,
		o = s == null ? void 0 : s.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: Is(bu(i.auth_time)),
		issuedAtTime: Is(bu(i.iat)),
		expirationTime: Is(bu(i.exp)),
		signInProvider: o || null,
		signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
	};
}
function bu(e) {
	return Number(e) * 1e3;
}
function rf(e) {
	const [t, n, r] = e.split(".");
	if (t === void 0 || n === void 0 || r === void 0)
		return ra("JWT malformed, contained fewer than 3 sections"), null;
	try {
		const i = Dg(n);
		return i
			? JSON.parse(i)
			: (ra("Failed to decode base64 JWT payload"), null);
	} catch (i) {
		return (
			ra(
				"Caught error parsing JWT payload as JSON",
				i == null ? void 0 : i.toString()
			),
			null
		);
	}
}
function ZE(e) {
	const t = rf(e);
	return (
		ae(t, "internal-error"),
		ae(typeof t.exp < "u", "internal-error"),
		ae(typeof t.iat < "u", "internal-error"),
		Number(t.exp) - Number(t.iat)
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
 */ async function Bi(e, t, n = !1) {
	if (n) return t;
	try {
		return await t;
	} catch (r) {
		throw (
			(r instanceof Cr &&
				eS(r) &&
				e.auth.currentUser === e &&
				(await e.auth.signOut()),
			r)
		);
	}
}
function eS({ code: e }) {
	return e === "auth/user-disabled" || e === "auth/user-token-expired";
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
 */ class tS {
	constructor(t) {
		(this.user = t),
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
	getInterval(t) {
		var n;
		if (t) {
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
	schedule(t = !1) {
		if (!this.isRunning) return;
		const n = this.getInterval(t);
		this.timerId = setTimeout(async () => {
			await this.iteration();
		}, n);
	}
	async iteration() {
		try {
			await this.user.getIdToken(!0);
		} catch (t) {
			(t == null ? void 0 : t.code) === "auth/network-request-failed" &&
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
 */ class Xg {
	constructor(t, n) {
		(this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
	}
	_initializeTime() {
		(this.lastSignInTime = Is(this.lastLoginAt)),
			(this.creationTime = Is(this.createdAt));
	}
	_copy(t) {
		(this.createdAt = t.createdAt),
			(this.lastLoginAt = t.lastLoginAt),
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
 */ async function Wa(e) {
	var t;
	const n = e.auth,
		r = await e.getIdToken(),
		i = await Bi(e, YE(n, { idToken: r }));
	ae(i == null ? void 0 : i.users.length, n, "internal-error");
	const s = i.users[0];
	e._notifyReloadListener(s);
	const o =
			!((t = s.providerUserInfo) === null || t === void 0) && t.length
				? iS(s.providerUserInfo)
				: [],
		a = rS(e.providerData, o),
		l = e.isAnonymous,
		u = !(e.email && s.passwordHash) && !(a != null && a.length),
		d = l ? u : !1,
		f = {
			uid: s.localId,
			displayName: s.displayName || null,
			photoURL: s.photoUrl || null,
			email: s.email || null,
			emailVerified: s.emailVerified || !1,
			phoneNumber: s.phoneNumber || null,
			tenantId: s.tenantId || null,
			providerData: a,
			metadata: new Xg(s.createdAt, s.lastLoginAt),
			isAnonymous: d,
		};
	Object.assign(e, f);
}
async function nS(e) {
	const t = gn(e);
	await Wa(t),
		await t.auth._persistUserIfCurrent(t),
		t.auth._notifyListenersIfCurrent(t);
}
function rS(e, t) {
	return [
		...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
		...t,
	];
}
function iS(e) {
	return e.map((t) => {
		var { providerId: n } = t,
			r = ef(t, ["providerId"]);
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
 */ async function sS(e, t) {
	const n = await Jg(e, {}, async () => {
		const r = co({ grant_type: "refresh_token", refresh_token: t }).slice(1),
			{ tokenApiHost: i, apiKey: s } = e.config,
			o = Yg(e, i, "/v1/token", `key=${s}`),
			a = await e._getAdditionalHeaders();
		return (
			(a["Content-Type"] = "application/x-www-form-urlencoded"),
			Gg.fetch()(o, { method: "POST", headers: a, body: r })
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
 */ class Zs {
	constructor() {
		(this.refreshToken = null),
			(this.accessToken = null),
			(this.expirationTime = null);
	}
	get isExpired() {
		return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
	}
	updateFromServerResponse(t) {
		ae(t.idToken, "internal-error"),
			ae(typeof t.idToken < "u", "internal-error"),
			ae(typeof t.refreshToken < "u", "internal-error");
		const n =
			"expiresIn" in t && typeof t.expiresIn < "u"
				? Number(t.expiresIn)
				: ZE(t.idToken);
		this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
	}
	async getToken(t, n = !1) {
		return (
			ae(!this.accessToken || this.refreshToken, t, "user-token-expired"),
			!n && this.accessToken && !this.isExpired
				? this.accessToken
				: this.refreshToken
				? (await this.refresh(t, this.refreshToken), this.accessToken)
				: null
		);
	}
	clearRefreshToken() {
		this.refreshToken = null;
	}
	async refresh(t, n) {
		const { accessToken: r, refreshToken: i, expiresIn: s } = await sS(t, n);
		this.updateTokensAndExpiration(r, i, Number(s));
	}
	updateTokensAndExpiration(t, n, r) {
		(this.refreshToken = n || null),
			(this.accessToken = t || null),
			(this.expirationTime = Date.now() + r * 1e3);
	}
	static fromJSON(t, n) {
		const { refreshToken: r, accessToken: i, expirationTime: s } = n,
			o = new Zs();
		return (
			r &&
				(ae(typeof r == "string", "internal-error", { appName: t }),
				(o.refreshToken = r)),
			i &&
				(ae(typeof i == "string", "internal-error", { appName: t }),
				(o.accessToken = i)),
			s &&
				(ae(typeof s == "number", "internal-error", { appName: t }),
				(o.expirationTime = s)),
			o
		);
	}
	toJSON() {
		return {
			refreshToken: this.refreshToken,
			accessToken: this.accessToken,
			expirationTime: this.expirationTime,
		};
	}
	_assign(t) {
		(this.accessToken = t.accessToken),
			(this.refreshToken = t.refreshToken),
			(this.expirationTime = t.expirationTime);
	}
	_clone() {
		return Object.assign(new Zs(), this.toJSON());
	}
	_performRefresh() {
		return Pn("not implemented");
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
 */ function Qn(e, t) {
	ae(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Ur {
	constructor(t) {
		var { uid: n, auth: r, stsTokenManager: i } = t,
			s = ef(t, ["uid", "auth", "stsTokenManager"]);
		(this.providerId = "firebase"),
			(this.proactiveRefresh = new tS(this)),
			(this.reloadUserInfo = null),
			(this.reloadListener = null),
			(this.uid = n),
			(this.auth = r),
			(this.stsTokenManager = i),
			(this.accessToken = i.accessToken),
			(this.displayName = s.displayName || null),
			(this.email = s.email || null),
			(this.emailVerified = s.emailVerified || !1),
			(this.phoneNumber = s.phoneNumber || null),
			(this.photoURL = s.photoURL || null),
			(this.isAnonymous = s.isAnonymous || !1),
			(this.tenantId = s.tenantId || null),
			(this.providerData = s.providerData ? [...s.providerData] : []),
			(this.metadata = new Xg(s.createdAt || void 0, s.lastLoginAt || void 0));
	}
	async getIdToken(t) {
		const n = await Bi(this, this.stsTokenManager.getToken(this.auth, t));
		return (
			ae(n, this.auth, "internal-error"),
			this.accessToken !== n &&
				((this.accessToken = n),
				await this.auth._persistUserIfCurrent(this),
				this.auth._notifyListenersIfCurrent(this)),
			n
		);
	}
	getIdTokenResult(t) {
		return XE(this, t);
	}
	reload() {
		return nS(this);
	}
	_assign(t) {
		this !== t &&
			(ae(this.uid === t.uid, this.auth, "internal-error"),
			(this.displayName = t.displayName),
			(this.photoURL = t.photoURL),
			(this.email = t.email),
			(this.emailVerified = t.emailVerified),
			(this.phoneNumber = t.phoneNumber),
			(this.isAnonymous = t.isAnonymous),
			(this.tenantId = t.tenantId),
			(this.providerData = t.providerData.map((n) => Object.assign({}, n))),
			this.metadata._copy(t.metadata),
			this.stsTokenManager._assign(t.stsTokenManager));
	}
	_clone(t) {
		const n = new Ur(
			Object.assign(Object.assign({}, this), {
				auth: t,
				stsTokenManager: this.stsTokenManager._clone(),
			})
		);
		return n.metadata._copy(this.metadata), n;
	}
	_onReload(t) {
		ae(!this.reloadListener, this.auth, "internal-error"),
			(this.reloadListener = t),
			this.reloadUserInfo &&
				(this._notifyReloadListener(this.reloadUserInfo),
				(this.reloadUserInfo = null));
	}
	_notifyReloadListener(t) {
		this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
	}
	_startProactiveRefresh() {
		this.proactiveRefresh._start();
	}
	_stopProactiveRefresh() {
		this.proactiveRefresh._stop();
	}
	async _updateTokensIfNecessary(t, n = !1) {
		let r = !1;
		t.idToken &&
			t.idToken !== this.stsTokenManager.accessToken &&
			(this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
			n && (await Wa(this)),
			await this.auth._persistUserIfCurrent(this),
			r && this.auth._notifyListenersIfCurrent(this);
	}
	async delete() {
		const t = await this.getIdToken();
		return (
			await Bi(this, JE(this.auth, { idToken: t })),
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
					providerData: this.providerData.map((t) => Object.assign({}, t)),
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
	static _fromJSON(t, n) {
		var r, i, s, o, a, l, u, d;
		const f = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
			p = (i = n.email) !== null && i !== void 0 ? i : void 0,
			b = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
			w = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
			E = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
			C = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
			g = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
			h = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
			{
				uid: v,
				emailVerified: m,
				isAnonymous: _,
				providerData: O,
				stsTokenManager: P,
			} = n;
		ae(v && P, t, "internal-error");
		const N = Zs.fromJSON(this.name, P);
		ae(typeof v == "string", t, "internal-error"),
			Qn(f, t.name),
			Qn(p, t.name),
			ae(typeof m == "boolean", t, "internal-error"),
			ae(typeof _ == "boolean", t, "internal-error"),
			Qn(b, t.name),
			Qn(w, t.name),
			Qn(E, t.name),
			Qn(C, t.name),
			Qn(g, t.name),
			Qn(h, t.name);
		const V = new Ur({
			uid: v,
			auth: t,
			email: p,
			emailVerified: m,
			displayName: f,
			isAnonymous: _,
			photoURL: w,
			phoneNumber: b,
			tenantId: E,
			stsTokenManager: N,
			createdAt: g,
			lastLoginAt: h,
		});
		return (
			O &&
				Array.isArray(O) &&
				(V.providerData = O.map((K) => Object.assign({}, K))),
			C && (V._redirectEventId = C),
			V
		);
	}
	static async _fromIdTokenResponse(t, n, r = !1) {
		const i = new Zs();
		i.updateFromServerResponse(n);
		const s = new Ur({
			uid: n.localId,
			auth: t,
			stsTokenManager: i,
			isAnonymous: r,
		});
		return await Wa(s), s;
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
 */ const ap = new Map();
function Tn(e) {
	Un(e instanceof Function, "Expected a class definition");
	let t = ap.get(e);
	return t
		? (Un(t instanceof e, "Instance stored in cache mismatched with class"), t)
		: ((t = new e()), ap.set(e, t), t);
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
 */ class Zg {
	constructor() {
		(this.type = "NONE"), (this.storage = {});
	}
	async _isAvailable() {
		return !0;
	}
	async _set(t, n) {
		this.storage[t] = n;
	}
	async _get(t) {
		const n = this.storage[t];
		return n === void 0 ? null : n;
	}
	async _remove(t) {
		delete this.storage[t];
	}
	_addListener(t, n) {}
	_removeListener(t, n) {}
}
Zg.type = "NONE";
const lp = Zg;
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
 */ function ia(e, t, n) {
	return `firebase:${e}:${t}:${n}`;
}
class Ri {
	constructor(t, n, r) {
		(this.persistence = t), (this.auth = n), (this.userKey = r);
		const { config: i, name: s } = this.auth;
		(this.fullUserKey = ia(this.userKey, i.apiKey, s)),
			(this.fullPersistenceKey = ia("persistence", i.apiKey, s)),
			(this.boundEventHandler = n._onStorageEvent.bind(n)),
			this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
	}
	setCurrentUser(t) {
		return this.persistence._set(this.fullUserKey, t.toJSON());
	}
	async getCurrentUser() {
		const t = await this.persistence._get(this.fullUserKey);
		return t ? Ur._fromJSON(this.auth, t) : null;
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
	async setPersistence(t) {
		if (this.persistence === t) return;
		const n = await this.getCurrentUser();
		if ((await this.removeCurrentUser(), (this.persistence = t), n))
			return this.setCurrentUser(n);
	}
	delete() {
		this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
	}
	static async create(t, n, r = "authUser") {
		if (!n.length) return new Ri(Tn(lp), t, r);
		const i = (
			await Promise.all(
				n.map(async (u) => {
					if (await u._isAvailable()) return u;
				})
			)
		).filter((u) => u);
		let s = i[0] || Tn(lp);
		const o = ia(r, t.config.apiKey, t.name);
		let a = null;
		for (const u of n)
			try {
				const d = await u._get(o);
				if (d) {
					const f = Ur._fromJSON(t, d);
					u !== s && (a = f), (s = u);
					break;
				}
			} catch {}
		const l = i.filter((u) => u._shouldAllowMigration);
		return !s._shouldAllowMigration || !l.length
			? new Ri(s, t, r)
			: ((s = l[0]),
			  a && (await s._set(o, a.toJSON())),
			  await Promise.all(
					n.map(async (u) => {
						if (u !== s)
							try {
								await u._remove(o);
							} catch {}
					})
			  ),
			  new Ri(s, t, r));
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
 */ function up(e) {
	const t = e.toLowerCase();
	if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
		return "Opera";
	if (nv(t)) return "IEMobile";
	if (t.includes("msie") || t.includes("trident/")) return "IE";
	if (t.includes("edge/")) return "Edge";
	if (ev(t)) return "Firefox";
	if (t.includes("silk/")) return "Silk";
	if (iv(t)) return "Blackberry";
	if (sv(t)) return "Webos";
	if (sf(t)) return "Safari";
	if ((t.includes("chrome/") || tv(t)) && !t.includes("edge/")) return "Chrome";
	if (rv(t)) return "Android";
	{
		const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
			r = e.match(n);
		if ((r == null ? void 0 : r.length) === 2) return r[1];
	}
	return "Other";
}
function ev(e = pt()) {
	return /firefox\//i.test(e);
}
function sf(e = pt()) {
	const t = e.toLowerCase();
	return (
		t.includes("safari/") &&
		!t.includes("chrome/") &&
		!t.includes("crios/") &&
		!t.includes("android")
	);
}
function tv(e = pt()) {
	return /crios\//i.test(e);
}
function nv(e = pt()) {
	return /iemobile/i.test(e);
}
function rv(e = pt()) {
	return /android/i.test(e);
}
function iv(e = pt()) {
	return /blackberry/i.test(e);
}
function sv(e = pt()) {
	return /webos/i.test(e);
}
function Cl(e = pt()) {
	return (
		/iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
	);
}
function oS(e = pt()) {
	var t;
	return (
		Cl(e) &&
		!!(!((t = window.navigator) === null || t === void 0) && t.standalone)
	);
}
function aS() {
	return Cb() && document.documentMode === 10;
}
function ov(e = pt()) {
	return Cl(e) || rv(e) || sv(e) || iv(e) || /windows phone/i.test(e) || nv(e);
}
function lS() {
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
 */ function av(e, t = []) {
	let n;
	switch (e) {
		case "Browser":
			n = up(pt());
			break;
		case "Worker":
			n = `${up(pt())}-${e}`;
			break;
		default:
			n = e;
	}
	const r = t.length ? t.join(",") : "FirebaseCore-web";
	return `${n}/JsCore/${fo}/${r}`;
}
async function lv(e, t) {
	return Zr(e, "GET", "/v2/recaptchaConfig", po(e, t));
}
function cp(e) {
	return e !== void 0 && e.enterprise !== void 0;
}
class uv {
	constructor(t) {
		if (
			((this.siteKey = ""),
			(this.emailPasswordEnabled = !1),
			t.recaptchaKey === void 0)
		)
			throw new Error("recaptchaKey undefined");
		(this.siteKey = t.recaptchaKey.split("/")[3]),
			(this.emailPasswordEnabled = t.recaptchaEnforcementState.some(
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
 */ function uS() {
	var e, t;
	return (t =
		(e = document.getElementsByTagName("head")) === null || e === void 0
			? void 0
			: e[0]) !== null && t !== void 0
		? t
		: document;
}
function cv(e) {
	return new Promise((t, n) => {
		const r = document.createElement("script");
		r.setAttribute("src", e),
			(r.onload = t),
			(r.onerror = (i) => {
				const s = mn("internal-error");
				(s.customData = i), n(s);
			}),
			(r.type = "text/javascript"),
			(r.charset = "UTF-8"),
			uS().appendChild(r);
	});
}
function cS(e) {
	return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const dS = "https://www.google.com/recaptcha/enterprise.js?render=",
	fS = "recaptcha-enterprise",
	hS = "NO_RECAPTCHA";
class dv {
	constructor(t) {
		(this.type = fS), (this.auth = Qi(t));
	}
	async verify(t = "verify", n = !1) {
		async function r(s) {
			if (!n) {
				if (s.tenantId == null && s._agentRecaptchaConfig != null)
					return s._agentRecaptchaConfig.siteKey;
				if (
					s.tenantId != null &&
					s._tenantRecaptchaConfigs[s.tenantId] !== void 0
				)
					return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
			}
			return new Promise(async (o, a) => {
				lv(s, {
					clientType: "CLIENT_TYPE_WEB",
					version: "RECAPTCHA_ENTERPRISE",
				})
					.then((l) => {
						if (l.recaptchaKey === void 0)
							a(new Error("recaptcha Enterprise site key undefined"));
						else {
							const u = new uv(l);
							return (
								s.tenantId == null
									? (s._agentRecaptchaConfig = u)
									: (s._tenantRecaptchaConfigs[s.tenantId] = u),
								o(u.siteKey)
							);
						}
					})
					.catch((l) => {
						a(l);
					});
			});
		}
		function i(s, o, a) {
			const l = window.grecaptcha;
			cp(l)
				? l.enterprise.ready(() => {
						l.enterprise
							.execute(s, { action: t })
							.then((u) => {
								o(u);
							})
							.catch(() => {
								o(hS);
							});
				  })
				: a(Error("No reCAPTCHA enterprise script loaded."));
		}
		return new Promise((s, o) => {
			r(this.auth)
				.then((a) => {
					if (!n && cp(window.grecaptcha)) i(a, s, o);
					else {
						if (typeof window > "u") {
							o(new Error("RecaptchaVerifier is only supported in browser"));
							return;
						}
						cv(dS + a)
							.then(() => {
								i(a, s, o);
							})
							.catch((l) => {
								o(l);
							});
					}
				})
				.catch((a) => {
					o(a);
				});
		});
	}
}
async function dp(e, t, n, r = !1) {
	const i = new dv(e);
	let s;
	try {
		s = await i.verify(n);
	} catch {
		s = await i.verify(n, !0);
	}
	const o = Object.assign({}, t);
	return (
		r
			? Object.assign(o, { captchaResp: s })
			: Object.assign(o, { captchaResponse: s }),
		Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
		Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
		o
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
 */ class pS {
	constructor(t) {
		(this.auth = t), (this.queue = []);
	}
	pushCallback(t, n) {
		const r = (s) =>
			new Promise((o, a) => {
				try {
					const l = t(s);
					o(l);
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
	async runMiddleware(t) {
		if (this.auth.currentUser === t) return;
		const n = [];
		try {
			for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
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
 */ class mS {
	constructor(t, n, r, i) {
		(this.app = t),
			(this.heartbeatServiceProvider = n),
			(this.appCheckServiceProvider = r),
			(this.config = i),
			(this.currentUser = null),
			(this.emulatorConfig = null),
			(this.operations = Promise.resolve()),
			(this.authStateSubscription = new fp(this)),
			(this.idTokenSubscription = new fp(this)),
			(this.beforeStateQueue = new pS(this)),
			(this.redirectUser = null),
			(this.isProactiveRefreshEnabled = !1),
			(this._canInitEmulator = !0),
			(this._isInitialized = !1),
			(this._deleted = !1),
			(this._initializationPromise = null),
			(this._popupRedirectResolver = null),
			(this._errorFactory = Kg),
			(this._agentRecaptchaConfig = null),
			(this._tenantRecaptchaConfigs = {}),
			(this.lastNotifiedUid = void 0),
			(this.languageCode = null),
			(this.tenantId = null),
			(this.settings = { appVerificationDisabledForTesting: !1 }),
			(this.frameworks = []),
			(this.name = t.name),
			(this.clientVersion = i.sdkClientVersion);
	}
	_initializeWithPersistence(t, n) {
		return (
			n && (this._popupRedirectResolver = Tn(n)),
			(this._initializationPromise = this.queue(async () => {
				var r, i;
				if (
					!this._deleted &&
					((this.persistenceManager = await Ri.create(this, t)), !this._deleted)
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
		const t = await this.assertedPersistence.getCurrentUser();
		if (!(!this.currentUser && !t)) {
			if (this.currentUser && t && this.currentUser.uid === t.uid) {
				this._currentUser._assign(t), await this.currentUser.getIdToken();
				return;
			}
			await this._updateCurrentUser(t, !0);
		}
	}
	async initializeCurrentUser(t) {
		var n;
		const r = await this.assertedPersistence.getCurrentUser();
		let i = r,
			s = !1;
		if (t && this.config.authDomain) {
			await this.getOrInitRedirectPersistenceManager();
			const o =
					(n = this.redirectUser) === null || n === void 0
						? void 0
						: n._redirectEventId,
				a = i == null ? void 0 : i._redirectEventId,
				l = await this.tryRedirectSignIn(t);
			(!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
		}
		if (!i) return this.directlySetCurrentUser(null);
		if (!i._redirectEventId) {
			if (s)
				try {
					await this.beforeStateQueue.runMiddleware(i);
				} catch (o) {
					(i = r),
						this._popupRedirectResolver._overrideRedirectResult(this, () =>
							Promise.reject(o)
						);
				}
			return i
				? this.reloadAndSetCurrentUserOrClear(i)
				: this.directlySetCurrentUser(null);
		}
		return (
			ae(this._popupRedirectResolver, this, "argument-error"),
			await this.getOrInitRedirectPersistenceManager(),
			this.redirectUser &&
			this.redirectUser._redirectEventId === i._redirectEventId
				? this.directlySetCurrentUser(i)
				: this.reloadAndSetCurrentUserOrClear(i)
		);
	}
	async tryRedirectSignIn(t) {
		let n = null;
		try {
			n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
		} catch {
			await this._setRedirectUser(null);
		}
		return n;
	}
	async reloadAndSetCurrentUserOrClear(t) {
		try {
			await Wa(t);
		} catch (n) {
			if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
				return this.directlySetCurrentUser(null);
		}
		return this.directlySetCurrentUser(t);
	}
	useDeviceLanguage() {
		this.languageCode = qE();
	}
	async _delete() {
		this._deleted = !0;
	}
	async updateCurrentUser(t) {
		const n = t ? gn(t) : null;
		return (
			n &&
				ae(
					n.auth.config.apiKey === this.config.apiKey,
					this,
					"invalid-user-token"
				),
			this._updateCurrentUser(n && n._clone(this))
		);
	}
	async _updateCurrentUser(t, n = !1) {
		if (!this._deleted)
			return (
				t && ae(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
				n || (await this.beforeStateQueue.runMiddleware(t)),
				this.queue(async () => {
					await this.directlySetCurrentUser(t), this.notifyAuthListeners();
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
	setPersistence(t) {
		return this.queue(async () => {
			await this.assertedPersistence.setPersistence(Tn(t));
		});
	}
	async initializeRecaptchaConfig() {
		const t = await lv(this, {
				clientType: "CLIENT_TYPE_WEB",
				version: "RECAPTCHA_ENTERPRISE",
			}),
			n = new uv(t);
		this.tenantId == null
			? (this._agentRecaptchaConfig = n)
			: (this._tenantRecaptchaConfigs[this.tenantId] = n),
			n.emailPasswordEnabled && new dv(this).verify();
	}
	_getRecaptchaConfig() {
		return this.tenantId == null
			? this._agentRecaptchaConfig
			: this._tenantRecaptchaConfigs[this.tenantId];
	}
	_getPersistence() {
		return this.assertedPersistence.persistence.type;
	}
	_updateErrorMap(t) {
		this._errorFactory = new uo("auth", "Firebase", t());
	}
	onAuthStateChanged(t, n, r) {
		return this.registerStateListener(this.authStateSubscription, t, n, r);
	}
	beforeAuthStateChanged(t, n) {
		return this.beforeStateQueue.pushCallback(t, n);
	}
	onIdTokenChanged(t, n, r) {
		return this.registerStateListener(this.idTokenSubscription, t, n, r);
	}
	authStateReady() {
		return new Promise((t, n) => {
			if (this.currentUser) t();
			else {
				const r = this.onAuthStateChanged(() => {
					r(), t();
				}, n);
			}
		});
	}
	toJSON() {
		var t;
		return {
			apiKey: this.config.apiKey,
			authDomain: this.config.authDomain,
			appName: this.name,
			currentUser:
				(t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
		};
	}
	async _setRedirectUser(t, n) {
		const r = await this.getOrInitRedirectPersistenceManager(n);
		return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
	}
	async getOrInitRedirectPersistenceManager(t) {
		if (!this.redirectPersistenceManager) {
			const n = (t && Tn(t)) || this._popupRedirectResolver;
			ae(n, this, "argument-error"),
				(this.redirectPersistenceManager = await Ri.create(
					this,
					[Tn(n._redirectPersistence)],
					"redirectUser"
				)),
				(this.redirectUser =
					await this.redirectPersistenceManager.getCurrentUser());
		}
		return this.redirectPersistenceManager;
	}
	async _redirectUserForId(t) {
		var n, r;
		return (
			this._isInitialized && (await this.queue(async () => {})),
			((n = this._currentUser) === null || n === void 0
				? void 0
				: n._redirectEventId) === t
				? this._currentUser
				: ((r = this.redirectUser) === null || r === void 0
						? void 0
						: r._redirectEventId) === t
				? this.redirectUser
				: null
		);
	}
	async _persistUserIfCurrent(t) {
		if (t === this.currentUser)
			return this.queue(async () => this.directlySetCurrentUser(t));
	}
	_notifyListenersIfCurrent(t) {
		t === this.currentUser && this.notifyAuthListeners();
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
		var t, n;
		if (!this._isInitialized) return;
		this.idTokenSubscription.next(this.currentUser);
		const r =
			(n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
				null && n !== void 0
				? n
				: null;
		this.lastNotifiedUid !== r &&
			((this.lastNotifiedUid = r),
			this.authStateSubscription.next(this.currentUser));
	}
	registerStateListener(t, n, r, i) {
		if (this._deleted) return () => {};
		const s = typeof n == "function" ? n : n.next.bind(n),
			o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
		return (
			ae(o, this, "internal-error"),
			o.then(() => s(this.currentUser)),
			typeof n == "function" ? t.addObserver(n, r, i) : t.addObserver(n)
		);
	}
	async directlySetCurrentUser(t) {
		this.currentUser &&
			this.currentUser !== t &&
			this._currentUser._stopProactiveRefresh(),
			t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
			(this.currentUser = t),
			t
				? await this.assertedPersistence.setCurrentUser(t)
				: await this.assertedPersistence.removeCurrentUser();
	}
	queue(t) {
		return (this.operations = this.operations.then(t, t)), this.operations;
	}
	get assertedPersistence() {
		return (
			ae(this.persistenceManager, this, "internal-error"),
			this.persistenceManager
		);
	}
	_logFramework(t) {
		!t ||
			this.frameworks.includes(t) ||
			(this.frameworks.push(t),
			this.frameworks.sort(),
			(this.clientVersion = av(
				this.config.clientPlatform,
				this._getFrameworks()
			)));
	}
	_getFrameworks() {
		return this.frameworks;
	}
	async _getAdditionalHeaders() {
		var t;
		const n = { "X-Client-Version": this.clientVersion };
		this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
		const r = await ((t = this.heartbeatServiceProvider.getImmediate({
			optional: !0,
		})) === null || t === void 0
			? void 0
			: t.getHeartbeatsHeader());
		r && (n["X-Firebase-Client"] = r);
		const i = await this._getAppCheckToken();
		return i && (n["X-Firebase-AppCheck"] = i), n;
	}
	async _getAppCheckToken() {
		var t;
		const n = await ((t = this.appCheckServiceProvider.getImmediate({
			optional: !0,
		})) === null || t === void 0
			? void 0
			: t.getToken());
		return (
			n != null &&
				n.error &&
				$E(`Error while retrieving App Check token: ${n.error}`),
			n == null ? void 0 : n.token
		);
	}
}
function Qi(e) {
	return gn(e);
}
class fp {
	constructor(t) {
		(this.auth = t),
			(this.observer = null),
			(this.addObserver = Ib((n) => (this.observer = n)));
	}
	get next() {
		return (
			ae(this.observer, this.auth, "internal-error"),
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
 */ function yS(e, t) {
	const n = $g(e, "auth");
	if (n.isInitialized()) {
		const i = n.getImmediate(),
			s = n.getOptions();
		if ($a(s, t ?? {})) return i;
		Kt(i, "already-initialized");
	}
	return n.initialize({ options: t });
}
function gS(e, t) {
	const n = (t == null ? void 0 : t.persistence) || [],
		r = (Array.isArray(n) ? n : [n]).map(Tn);
	t != null && t.errorMap && e._updateErrorMap(t.errorMap),
		e._initializeWithPersistence(
			r,
			t == null ? void 0 : t.popupRedirectResolver
		);
}
function vS(e, t, n) {
	const r = Qi(e);
	ae(r._canInitEmulator, r, "emulator-config-failed"),
		ae(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
	const i = !!(n != null && n.disableWarnings),
		s = fv(t),
		{ host: o, port: a } = wS(t),
		l = a === null ? "" : `:${a}`;
	(r.config.emulator = { url: `${s}//${o}${l}/` }),
		(r.settings.appVerificationDisabledForTesting = !0),
		(r.emulatorConfig = Object.freeze({
			host: o,
			port: a,
			protocol: s.replace(":", ""),
			options: Object.freeze({ disableWarnings: i }),
		})),
		i || xS();
}
function fv(e) {
	const t = e.indexOf(":");
	return t < 0 ? "" : e.substr(0, t + 1);
}
function wS(e) {
	const t = fv(e),
		n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
	if (!n) return { host: "", port: null };
	const r = n[2].split("@").pop() || "",
		i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		const s = i[1];
		return { host: s, port: hp(r.substr(s.length + 1)) };
	} else {
		const [s, o] = r.split(":");
		return { host: s, port: hp(o) };
	}
}
function hp(e) {
	if (!e) return null;
	const t = Number(e);
	return isNaN(t) ? null : t;
}
function xS() {
	function e() {
		const t = document.createElement("p"),
			n = t.style;
		(t.innerText =
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
			t.classList.add("firebase-emulator-warning"),
			document.body.appendChild(t);
	}
	typeof console < "u" &&
		typeof console.info == "function" &&
		console.info(
			"WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
		),
		typeof window < "u" &&
			typeof document < "u" &&
			(document.readyState === "loading"
				? window.addEventListener("DOMContentLoaded", e)
				: e());
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
 */ class of {
	constructor(t, n) {
		(this.providerId = t), (this.signInMethod = n);
	}
	toJSON() {
		return Pn("not implemented");
	}
	_getIdTokenResponse(t) {
		return Pn("not implemented");
	}
	_linkToIdToken(t, n) {
		return Pn("not implemented");
	}
	_getReauthenticationResolver(t) {
		return Pn("not implemented");
	}
}
async function bS(e, t) {
	return Zr(e, "POST", "/v1/accounts:update", t);
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
 */ async function Eu(e, t) {
	return _l(e, "POST", "/v1/accounts:signInWithPassword", po(e, t));
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
 */ async function ES(e, t) {
	return _l(e, "POST", "/v1/accounts:signInWithEmailLink", po(e, t));
}
async function SS(e, t) {
	return _l(e, "POST", "/v1/accounts:signInWithEmailLink", po(e, t));
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
 */ class eo extends of {
	constructor(t, n, r, i = null) {
		super("password", r),
			(this._email = t),
			(this._password = n),
			(this._tenantId = i);
	}
	static _fromEmailAndPassword(t, n) {
		return new eo(t, n, "password");
	}
	static _fromEmailAndCode(t, n, r = null) {
		return new eo(t, n, "emailLink", r);
	}
	toJSON() {
		return {
			email: this._email,
			password: this._password,
			signInMethod: this.signInMethod,
			tenantId: this._tenantId,
		};
	}
	static fromJSON(t) {
		const n = typeof t == "string" ? JSON.parse(t) : t;
		if (n != null && n.email && n != null && n.password) {
			if (n.signInMethod === "password")
				return this._fromEmailAndPassword(n.email, n.password);
			if (n.signInMethod === "emailLink")
				return this._fromEmailAndCode(n.email, n.password, n.tenantId);
		}
		return null;
	}
	async _getIdTokenResponse(t) {
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
					!((n = t._getRecaptchaConfig()) === null || n === void 0) &&
					n.emailPasswordEnabled
				) {
					const i = await dp(t, r, "signInWithPassword");
					return Eu(t, i);
				} else
					return Eu(t, r).catch(async (i) => {
						if (i.code === "auth/missing-recaptcha-token") {
							console.log(
								"Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."
							);
							const s = await dp(t, r, "signInWithPassword");
							return Eu(t, s);
						} else return Promise.reject(i);
					});
			case "emailLink":
				return ES(t, { email: this._email, oobCode: this._password });
			default:
				Kt(t, "internal-error");
		}
	}
	async _linkToIdToken(t, n) {
		switch (this.signInMethod) {
			case "password":
				return bS(t, {
					idToken: n,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
				});
			case "emailLink":
				return SS(t, {
					idToken: n,
					email: this._email,
					oobCode: this._password,
				});
			default:
				Kt(t, "internal-error");
		}
	}
	_getReauthenticationResolver(t) {
		return this._getIdTokenResponse(t);
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
 */ async function Ni(e, t) {
	return _l(e, "POST", "/v1/accounts:signInWithIdp", po(e, t));
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
 */ const _S = "http://localhost";
class Qr extends of {
	constructor() {
		super(...arguments), (this.pendingToken = null);
	}
	static _fromParams(t) {
		const n = new Qr(t.providerId, t.signInMethod);
		return (
			t.idToken || t.accessToken
				? (t.idToken && (n.idToken = t.idToken),
				  t.accessToken && (n.accessToken = t.accessToken),
				  t.nonce && !t.pendingToken && (n.nonce = t.nonce),
				  t.pendingToken && (n.pendingToken = t.pendingToken))
				: t.oauthToken && t.oauthTokenSecret
				? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
				: Kt("argument-error"),
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
	static fromJSON(t) {
		const n = typeof t == "string" ? JSON.parse(t) : t,
			{ providerId: r, signInMethod: i } = n,
			s = ef(n, ["providerId", "signInMethod"]);
		if (!r || !i) return null;
		const o = new Qr(r, i);
		return (
			(o.idToken = s.idToken || void 0),
			(o.accessToken = s.accessToken || void 0),
			(o.secret = s.secret),
			(o.nonce = s.nonce),
			(o.pendingToken = s.pendingToken || null),
			o
		);
	}
	_getIdTokenResponse(t) {
		const n = this.buildRequest();
		return Ni(t, n);
	}
	_linkToIdToken(t, n) {
		const r = this.buildRequest();
		return (r.idToken = n), Ni(t, r);
	}
	_getReauthenticationResolver(t) {
		const n = this.buildRequest();
		return (n.autoCreate = !1), Ni(t, n);
	}
	buildRequest() {
		const t = { requestUri: _S, returnSecureToken: !0 };
		if (this.pendingToken) t.pendingToken = this.pendingToken;
		else {
			const n = {};
			this.idToken && (n.id_token = this.idToken),
				this.accessToken && (n.access_token = this.accessToken),
				this.secret && (n.oauth_token_secret = this.secret),
				(n.providerId = this.providerId),
				this.nonce && !this.pendingToken && (n.nonce = this.nonce),
				(t.postBody = co(n));
		}
		return t;
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
 */ function CS(e) {
	switch (e) {
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
function kS(e) {
	const t = ws(xs(e)).link,
		n = t ? ws(xs(t)).deep_link_id : null,
		r = ws(xs(e)).deep_link_id;
	return (r ? ws(xs(r)).link : null) || r || n || t || e;
}
class af {
	constructor(t) {
		var n, r, i, s, o, a;
		const l = ws(xs(t)),
			u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
			d = (r = l.oobCode) !== null && r !== void 0 ? r : null,
			f = CS((i = l.mode) !== null && i !== void 0 ? i : null);
		ae(u && d && f, "argument-error"),
			(this.apiKey = u),
			(this.operation = f),
			(this.code = d),
			(this.continueUrl =
				(s = l.continueUrl) !== null && s !== void 0 ? s : null),
			(this.languageCode =
				(o = l.languageCode) !== null && o !== void 0 ? o : null),
			(this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
	}
	static parseLink(t) {
		const n = kS(t);
		try {
			return new af(n);
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
 */ class Gi {
	constructor() {
		this.providerId = Gi.PROVIDER_ID;
	}
	static credential(t, n) {
		return eo._fromEmailAndPassword(t, n);
	}
	static credentialWithLink(t, n) {
		const r = af.parseLink(n);
		return ae(r, "argument-error"), eo._fromEmailAndCode(t, r.code, r.tenantId);
	}
}
Gi.PROVIDER_ID = "password";
Gi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Gi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
 */ class lf {
	constructor(t) {
		(this.providerId = t),
			(this.defaultLanguageCode = null),
			(this.customParameters = {});
	}
	setDefaultLanguage(t) {
		this.defaultLanguageCode = t;
	}
	setCustomParameters(t) {
		return (this.customParameters = t), this;
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
 */ class mo extends lf {
	constructor() {
		super(...arguments), (this.scopes = []);
	}
	addScope(t) {
		return this.scopes.includes(t) || this.scopes.push(t), this;
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
 */ class nr extends mo {
	constructor() {
		super("facebook.com");
	}
	static credential(t) {
		return Qr._fromParams({
			providerId: nr.PROVIDER_ID,
			signInMethod: nr.FACEBOOK_SIGN_IN_METHOD,
			accessToken: t,
		});
	}
	static credentialFromResult(t) {
		return nr.credentialFromTaggedObject(t);
	}
	static credentialFromError(t) {
		return nr.credentialFromTaggedObject(t.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: t }) {
		if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
		try {
			return nr.credential(t.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
nr.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
nr.PROVIDER_ID = "facebook.com";
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
 */ class kn extends mo {
	constructor() {
		super("google.com"), this.addScope("profile");
	}
	static credential(t, n) {
		return Qr._fromParams({
			providerId: kn.PROVIDER_ID,
			signInMethod: kn.GOOGLE_SIGN_IN_METHOD,
			idToken: t,
			accessToken: n,
		});
	}
	static credentialFromResult(t) {
		return kn.credentialFromTaggedObject(t);
	}
	static credentialFromError(t) {
		return kn.credentialFromTaggedObject(t.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: t }) {
		if (!t) return null;
		const { oauthIdToken: n, oauthAccessToken: r } = t;
		if (!n && !r) return null;
		try {
			return kn.credential(n, r);
		} catch {
			return null;
		}
	}
}
kn.GOOGLE_SIGN_IN_METHOD = "google.com";
kn.PROVIDER_ID = "google.com";
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
 */ class Rn extends mo {
	constructor() {
		super("github.com");
	}
	static credential(t) {
		return Qr._fromParams({
			providerId: Rn.PROVIDER_ID,
			signInMethod: Rn.GITHUB_SIGN_IN_METHOD,
			accessToken: t,
		});
	}
	static credentialFromResult(t) {
		return Rn.credentialFromTaggedObject(t);
	}
	static credentialFromError(t) {
		return Rn.credentialFromTaggedObject(t.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: t }) {
		if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
		try {
			return Rn.credential(t.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
Rn.GITHUB_SIGN_IN_METHOD = "github.com";
Rn.PROVIDER_ID = "github.com";
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
 */ class rr extends mo {
	constructor() {
		super("twitter.com");
	}
	static credential(t, n) {
		return Qr._fromParams({
			providerId: rr.PROVIDER_ID,
			signInMethod: rr.TWITTER_SIGN_IN_METHOD,
			oauthToken: t,
			oauthTokenSecret: n,
		});
	}
	static credentialFromResult(t) {
		return rr.credentialFromTaggedObject(t);
	}
	static credentialFromError(t) {
		return rr.credentialFromTaggedObject(t.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: t }) {
		if (!t) return null;
		const { oauthAccessToken: n, oauthTokenSecret: r } = t;
		if (!n || !r) return null;
		try {
			return rr.credential(n, r);
		} catch {
			return null;
		}
	}
}
rr.TWITTER_SIGN_IN_METHOD = "twitter.com";
rr.PROVIDER_ID = "twitter.com";
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
 */ class zi {
	constructor(t) {
		(this.user = t.user),
			(this.providerId = t.providerId),
			(this._tokenResponse = t._tokenResponse),
			(this.operationType = t.operationType);
	}
	static async _fromIdTokenResponse(t, n, r, i = !1) {
		const s = await Ur._fromIdTokenResponse(t, r, i),
			o = pp(r);
		return new zi({
			user: s,
			providerId: o,
			_tokenResponse: r,
			operationType: n,
		});
	}
	static async _forOperation(t, n, r) {
		await t._updateTokensIfNecessary(r, !0);
		const i = pp(r);
		return new zi({
			user: t,
			providerId: i,
			_tokenResponse: r,
			operationType: n,
		});
	}
}
function pp(e) {
	return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
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
 */ class qa extends Cr {
	constructor(t, n, r, i) {
		var s;
		super(n.code, n.message),
			(this.operationType = r),
			(this.user = i),
			Object.setPrototypeOf(this, qa.prototype),
			(this.customData = {
				appName: t.name,
				tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
				_serverResponse: n.customData._serverResponse,
				operationType: r,
			});
	}
	static _fromErrorAndOperation(t, n, r, i) {
		return new qa(t, n, r, i);
	}
}
function hv(e, t, n, r) {
	return (
		t === "reauthenticate"
			? n._getReauthenticationResolver(e)
			: n._getIdTokenResponse(e)
	).catch((s) => {
		throw s.code === "auth/multi-factor-auth-required"
			? qa._fromErrorAndOperation(e, s, t, r)
			: s;
	});
}
async function RS(e, t, n = !1) {
	const r = await Bi(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
	return zi._forOperation(e, "link", r);
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
 */ async function NS(e, t, n = !1) {
	const { auth: r } = e,
		i = "reauthenticate";
	try {
		const s = await Bi(e, hv(r, i, t, e), n);
		ae(s.idToken, r, "internal-error");
		const o = rf(s.idToken);
		ae(o, r, "internal-error");
		const { sub: a } = o;
		return ae(e.uid === a, r, "user-mismatch"), zi._forOperation(e, i, s);
	} catch (s) {
		throw (
			((s == null ? void 0 : s.code) === "auth/user-not-found" &&
				Kt(r, "user-mismatch"),
			s)
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
 */ async function pv(e, t, n = !1) {
	const r = "signIn",
		i = await hv(e, r, t),
		s = await zi._fromIdTokenResponse(e, r, i);
	return n || (await e._updateCurrentUser(s.user)), s;
}
async function OS(e, t) {
	return pv(Qi(e), t);
}
function PS(e, t, n) {
	return OS(gn(e), Gi.credential(t, n));
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
 */ async function TS(e, t) {
	return Zr(e, "POST", "/v1/accounts:update", t);
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
 */ async function IS(e, { displayName: t, photoURL: n }) {
	if (t === void 0 && n === void 0) return;
	const r = gn(e),
		s = {
			idToken: await r.getIdToken(),
			displayName: t,
			photoUrl: n,
			returnSecureToken: !0,
		},
		o = await Bi(r, TS(r.auth, s));
	(r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
	const a = r.providerData.find(({ providerId: l }) => l === "password");
	a && ((a.displayName = r.displayName), (a.photoURL = r.photoURL)),
		await r._updateTokensIfNecessary(o);
}
function jS(e, t, n, r) {
	return gn(e).onIdTokenChanged(t, n, r);
}
function AS(e, t, n) {
	return gn(e).beforeAuthStateChanged(t, n);
}
function LS(e, t, n, r) {
	return gn(e).onAuthStateChanged(t, n, r);
}
function DS(e) {
	return gn(e).signOut();
}
const Ka = "__sak";
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
 */ class mv {
	constructor(t, n) {
		(this.storageRetriever = t), (this.type = n);
	}
	_isAvailable() {
		try {
			return this.storage
				? (this.storage.setItem(Ka, "1"),
				  this.storage.removeItem(Ka),
				  Promise.resolve(!0))
				: Promise.resolve(!1);
		} catch {
			return Promise.resolve(!1);
		}
	}
	_set(t, n) {
		return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
	}
	_get(t) {
		const n = this.storage.getItem(t);
		return Promise.resolve(n ? JSON.parse(n) : null);
	}
	_remove(t) {
		return this.storage.removeItem(t), Promise.resolve();
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
 */ function MS() {
	const e = pt();
	return sf(e) || Cl(e);
}
const FS = 1e3,
	US = 10;
class yv extends mv {
	constructor() {
		super(() => window.localStorage, "LOCAL"),
			(this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
			(this.listeners = {}),
			(this.localCache = {}),
			(this.pollTimer = null),
			(this.safariLocalStorageNotSynced = MS() && lS()),
			(this.fallbackToPolling = ov()),
			(this._shouldAllowMigration = !0);
	}
	forAllChangedKeys(t) {
		for (const n of Object.keys(this.listeners)) {
			const r = this.storage.getItem(n),
				i = this.localCache[n];
			r !== i && t(n, i, r);
		}
	}
	onStorageEvent(t, n = !1) {
		if (!t.key) {
			this.forAllChangedKeys((o, a, l) => {
				this.notifyListeners(o, l);
			});
			return;
		}
		const r = t.key;
		if (
			(n ? this.detachListener() : this.stopPolling(),
			this.safariLocalStorageNotSynced)
		) {
			const o = this.storage.getItem(r);
			if (t.newValue !== o)
				t.newValue !== null
					? this.storage.setItem(r, t.newValue)
					: this.storage.removeItem(r);
			else if (this.localCache[r] === t.newValue && !n) return;
		}
		const i = () => {
				const o = this.storage.getItem(r);
				(!n && this.localCache[r] === o) || this.notifyListeners(r, o);
			},
			s = this.storage.getItem(r);
		aS() && s !== t.newValue && t.newValue !== t.oldValue
			? setTimeout(i, US)
			: i();
	}
	notifyListeners(t, n) {
		this.localCache[t] = n;
		const r = this.listeners[t];
		if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
	}
	startPolling() {
		this.stopPolling(),
			(this.pollTimer = setInterval(() => {
				this.forAllChangedKeys((t, n, r) => {
					this.onStorageEvent(
						new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
						!0
					);
				});
			}, FS));
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
	_addListener(t, n) {
		Object.keys(this.listeners).length === 0 &&
			(this.fallbackToPolling ? this.startPolling() : this.attachListener()),
			this.listeners[t] ||
				((this.listeners[t] = new Set()),
				(this.localCache[t] = this.storage.getItem(t))),
			this.listeners[t].add(n);
	}
	_removeListener(t, n) {
		this.listeners[t] &&
			(this.listeners[t].delete(n),
			this.listeners[t].size === 0 && delete this.listeners[t]),
			Object.keys(this.listeners).length === 0 &&
				(this.detachListener(), this.stopPolling());
	}
	async _set(t, n) {
		await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
	}
	async _get(t) {
		const n = await super._get(t);
		return (this.localCache[t] = JSON.stringify(n)), n;
	}
	async _remove(t) {
		await super._remove(t), delete this.localCache[t];
	}
}
yv.type = "LOCAL";
const BS = yv;
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
 */ class gv extends mv {
	constructor() {
		super(() => window.sessionStorage, "SESSION");
	}
	_addListener(t, n) {}
	_removeListener(t, n) {}
}
gv.type = "SESSION";
const vv = gv;
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
 */ function zS(e) {
	return Promise.all(
		e.map(async (t) => {
			try {
				return { fulfilled: !0, value: await t };
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
 */ class kl {
	constructor(t) {
		(this.eventTarget = t),
			(this.handlersMap = {}),
			(this.boundEventHandler = this.handleEvent.bind(this));
	}
	static _getInstance(t) {
		const n = this.receivers.find((i) => i.isListeningto(t));
		if (n) return n;
		const r = new kl(t);
		return this.receivers.push(r), r;
	}
	isListeningto(t) {
		return this.eventTarget === t;
	}
	async handleEvent(t) {
		const n = t,
			{ eventId: r, eventType: i, data: s } = n.data,
			o = this.handlersMap[i];
		if (!(o != null && o.size)) return;
		n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
		const a = Array.from(o).map(async (u) => u(n.origin, s)),
			l = await zS(a);
		n.ports[0].postMessage({
			status: "done",
			eventId: r,
			eventType: i,
			response: l,
		});
	}
	_subscribe(t, n) {
		Object.keys(this.handlersMap).length === 0 &&
			this.eventTarget.addEventListener("message", this.boundEventHandler),
			this.handlersMap[t] || (this.handlersMap[t] = new Set()),
			this.handlersMap[t].add(n);
	}
	_unsubscribe(t, n) {
		this.handlersMap[t] && n && this.handlersMap[t].delete(n),
			(!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
			Object.keys(this.handlersMap).length === 0 &&
				this.eventTarget.removeEventListener("message", this.boundEventHandler);
	}
}
kl.receivers = [];
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
 */ function uf(e = "", t = 10) {
	let n = "";
	for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
	return e + n;
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
 */ class $S {
	constructor(t) {
		(this.target = t), (this.handlers = new Set());
	}
	removeMessageHandler(t) {
		t.messageChannel &&
			(t.messageChannel.port1.removeEventListener("message", t.onMessage),
			t.messageChannel.port1.close()),
			this.handlers.delete(t);
	}
	async _send(t, n, r = 50) {
		const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
		if (!i) throw new Error("connection_unavailable");
		let s, o;
		return new Promise((a, l) => {
			const u = uf("", 20);
			i.port1.start();
			const d = setTimeout(() => {
				l(new Error("unsupported_event"));
			}, r);
			(o = {
				messageChannel: i,
				onMessage(f) {
					const p = f;
					if (p.data.eventId === u)
						switch (p.data.status) {
							case "ack":
								clearTimeout(d),
									(s = setTimeout(() => {
										l(new Error("timeout"));
									}, 3e3));
								break;
							case "done":
								clearTimeout(s), a(p.data.response);
								break;
							default:
								clearTimeout(d),
									clearTimeout(s),
									l(new Error("invalid_response"));
								break;
						}
				},
			}),
				this.handlers.add(o),
				i.port1.addEventListener("message", o.onMessage),
				this.target.postMessage({ eventType: t, eventId: u, data: n }, [
					i.port2,
				]);
		}).finally(() => {
			o && this.removeMessageHandler(o);
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
 */ function yn() {
	return window;
}
function VS(e) {
	yn().location.href = e;
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
 */ function wv() {
	return (
		typeof yn().WorkerGlobalScope < "u" &&
		typeof yn().importScripts == "function"
	);
}
async function HS() {
	if (!(navigator != null && navigator.serviceWorker)) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function WS() {
	var e;
	return (
		((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
		e === void 0
			? void 0
			: e.controller) || null
	);
}
function qS() {
	return wv() ? self : null;
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
 */ const xv = "firebaseLocalStorageDb",
	KS = 1,
	Qa = "firebaseLocalStorage",
	bv = "fbase_key";
class yo {
	constructor(t) {
		this.request = t;
	}
	toPromise() {
		return new Promise((t, n) => {
			this.request.addEventListener("success", () => {
				t(this.request.result);
			}),
				this.request.addEventListener("error", () => {
					n(this.request.error);
				});
		});
	}
}
function Rl(e, t) {
	return e.transaction([Qa], t ? "readwrite" : "readonly").objectStore(Qa);
}
function QS() {
	const e = indexedDB.deleteDatabase(xv);
	return new yo(e).toPromise();
}
function Uc() {
	const e = indexedDB.open(xv, KS);
	return new Promise((t, n) => {
		e.addEventListener("error", () => {
			n(e.error);
		}),
			e.addEventListener("upgradeneeded", () => {
				const r = e.result;
				try {
					r.createObjectStore(Qa, { keyPath: bv });
				} catch (i) {
					n(i);
				}
			}),
			e.addEventListener("success", async () => {
				const r = e.result;
				r.objectStoreNames.contains(Qa)
					? t(r)
					: (r.close(), await QS(), t(await Uc()));
			});
	});
}
async function mp(e, t, n) {
	const r = Rl(e, !0).put({ [bv]: t, value: n });
	return new yo(r).toPromise();
}
async function GS(e, t) {
	const n = Rl(e, !1).get(t),
		r = await new yo(n).toPromise();
	return r === void 0 ? null : r.value;
}
function yp(e, t) {
	const n = Rl(e, !0).delete(t);
	return new yo(n).toPromise();
}
const JS = 800,
	YS = 3;
class Ev {
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
		return this.db ? this.db : ((this.db = await Uc()), this.db);
	}
	async _withRetries(t) {
		let n = 0;
		for (;;)
			try {
				const r = await this._openDb();
				return await t(r);
			} catch (r) {
				if (n++ > YS) throw r;
				this.db && (this.db.close(), (this.db = void 0));
			}
	}
	async initializeServiceWorkerMessaging() {
		return wv() ? this.initializeReceiver() : this.initializeSender();
	}
	async initializeReceiver() {
		(this.receiver = kl._getInstance(qS())),
			this.receiver._subscribe("keyChanged", async (t, n) => ({
				keyProcessed: (await this._poll()).includes(n.key),
			})),
			this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
	}
	async initializeSender() {
		var t, n;
		if (((this.activeServiceWorker = await HS()), !this.activeServiceWorker))
			return;
		this.sender = new $S(this.activeServiceWorker);
		const r = await this.sender._send("ping", {}, 800);
		r &&
			!((t = r[0]) === null || t === void 0) &&
			t.fulfilled &&
			!((n = r[0]) === null || n === void 0) &&
			n.value.includes("keyChanged") &&
			(this.serviceWorkerReceiverAvailable = !0);
	}
	async notifyServiceWorker(t) {
		if (
			!(
				!this.sender ||
				!this.activeServiceWorker ||
				WS() !== this.activeServiceWorker
			)
		)
			try {
				await this.sender._send(
					"keyChanged",
					{ key: t },
					this.serviceWorkerReceiverAvailable ? 800 : 50
				);
			} catch {}
	}
	async _isAvailable() {
		try {
			if (!indexedDB) return !1;
			const t = await Uc();
			return await mp(t, Ka, "1"), await yp(t, Ka), !0;
		} catch {}
		return !1;
	}
	async _withPendingWrite(t) {
		this.pendingWrites++;
		try {
			await t();
		} finally {
			this.pendingWrites--;
		}
	}
	async _set(t, n) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((r) => mp(r, t, n)),
				(this.localCache[t] = n),
				this.notifyServiceWorker(t)
			)
		);
	}
	async _get(t) {
		const n = await this._withRetries((r) => GS(r, t));
		return (this.localCache[t] = n), n;
	}
	async _remove(t) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((n) => yp(n, t)),
				delete this.localCache[t],
				this.notifyServiceWorker(t)
			)
		);
	}
	async _poll() {
		const t = await this._withRetries((i) => {
			const s = Rl(i, !1).getAll();
			return new yo(s).toPromise();
		});
		if (!t) return [];
		if (this.pendingWrites !== 0) return [];
		const n = [],
			r = new Set();
		for (const { fbase_key: i, value: s } of t)
			r.add(i),
				JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
					(this.notifyListeners(i, s), n.push(i));
		for (const i of Object.keys(this.localCache))
			this.localCache[i] &&
				!r.has(i) &&
				(this.notifyListeners(i, null), n.push(i));
		return n;
	}
	notifyListeners(t, n) {
		this.localCache[t] = n;
		const r = this.listeners[t];
		if (r) for (const i of Array.from(r)) i(n);
	}
	startPolling() {
		this.stopPolling(),
			(this.pollTimer = setInterval(async () => this._poll(), JS));
	}
	stopPolling() {
		this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
	}
	_addListener(t, n) {
		Object.keys(this.listeners).length === 0 && this.startPolling(),
			this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
			this.listeners[t].add(n);
	}
	_removeListener(t, n) {
		this.listeners[t] &&
			(this.listeners[t].delete(n),
			this.listeners[t].size === 0 && delete this.listeners[t]),
			Object.keys(this.listeners).length === 0 && this.stopPolling();
	}
}
Ev.type = "LOCAL";
const XS = Ev;
new ho(3e4, 6e4);
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
 */ function Sv(e, t) {
	return t
		? Tn(t)
		: (ae(e._popupRedirectResolver, e, "argument-error"),
		  e._popupRedirectResolver);
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
 */ class cf extends of {
	constructor(t) {
		super("custom", "custom"), (this.params = t);
	}
	_getIdTokenResponse(t) {
		return Ni(t, this._buildIdpRequest());
	}
	_linkToIdToken(t, n) {
		return Ni(t, this._buildIdpRequest(n));
	}
	_getReauthenticationResolver(t) {
		return Ni(t, this._buildIdpRequest());
	}
	_buildIdpRequest(t) {
		const n = {
			requestUri: this.params.requestUri,
			sessionId: this.params.sessionId,
			postBody: this.params.postBody,
			tenantId: this.params.tenantId,
			pendingToken: this.params.pendingToken,
			returnSecureToken: !0,
			returnIdpCredential: !0,
		};
		return t && (n.idToken = t), n;
	}
}
function ZS(e) {
	return pv(e.auth, new cf(e), e.bypassAuthState);
}
function e_(e) {
	const { auth: t, user: n } = e;
	return ae(n, t, "internal-error"), NS(n, new cf(e), e.bypassAuthState);
}
async function t_(e) {
	const { auth: t, user: n } = e;
	return ae(n, t, "internal-error"), RS(n, new cf(e), e.bypassAuthState);
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
 */ class _v {
	constructor(t, n, r, i, s = !1) {
		(this.auth = t),
			(this.resolver = r),
			(this.user = i),
			(this.bypassAuthState = s),
			(this.pendingPromise = null),
			(this.eventManager = null),
			(this.filter = Array.isArray(n) ? n : [n]);
	}
	execute() {
		return new Promise(async (t, n) => {
			this.pendingPromise = { resolve: t, reject: n };
			try {
				(this.eventManager = await this.resolver._initialize(this.auth)),
					await this.onExecution(),
					this.eventManager.registerConsumer(this);
			} catch (r) {
				this.reject(r);
			}
		});
	}
	async onAuthEvent(t) {
		const {
			urlResponse: n,
			sessionId: r,
			postBody: i,
			tenantId: s,
			error: o,
			type: a,
		} = t;
		if (o) {
			this.reject(o);
			return;
		}
		const l = {
			auth: this.auth,
			requestUri: n,
			sessionId: r,
			tenantId: s || void 0,
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
	onError(t) {
		this.reject(t);
	}
	getIdpTask(t) {
		switch (t) {
			case "signInViaPopup":
			case "signInViaRedirect":
				return ZS;
			case "linkViaPopup":
			case "linkViaRedirect":
				return t_;
			case "reauthViaPopup":
			case "reauthViaRedirect":
				return e_;
			default:
				Kt(this.auth, "internal-error");
		}
	}
	resolve(t) {
		Un(this.pendingPromise, "Pending promise was never set"),
			this.pendingPromise.resolve(t),
			this.unregisterAndCleanUp();
	}
	reject(t) {
		Un(this.pendingPromise, "Pending promise was never set"),
			this.pendingPromise.reject(t),
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
 */ const n_ = new ho(2e3, 1e4);
async function gp(e, t, n) {
	const r = Qi(e);
	VE(e, t, lf);
	const i = Sv(r, n);
	return new Ar(r, "signInViaPopup", t, i).executeNotNull();
}
class Ar extends _v {
	constructor(t, n, r, i, s) {
		super(t, n, i, s),
			(this.provider = r),
			(this.authWindow = null),
			(this.pollId = null),
			Ar.currentPopupAction && Ar.currentPopupAction.cancel(),
			(Ar.currentPopupAction = this);
	}
	async executeNotNull() {
		const t = await this.execute();
		return ae(t, this.auth, "internal-error"), t;
	}
	async onExecution() {
		Un(this.filter.length === 1, "Popup operations only handle one event");
		const t = uf();
		(this.authWindow = await this.resolver._openPopup(
			this.auth,
			this.provider,
			this.filter[0],
			t
		)),
			(this.authWindow.associatedEvent = t),
			this.resolver._originValidation(this.auth).catch((n) => {
				this.reject(n);
			}),
			this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
				n || this.reject(mn(this.auth, "web-storage-unsupported"));
			}),
			this.pollUserCancellation();
	}
	get eventId() {
		var t;
		return (
			((t = this.authWindow) === null || t === void 0
				? void 0
				: t.associatedEvent) || null
		);
	}
	cancel() {
		this.reject(mn(this.auth, "cancelled-popup-request"));
	}
	cleanUp() {
		this.authWindow && this.authWindow.close(),
			this.pollId && window.clearTimeout(this.pollId),
			(this.authWindow = null),
			(this.pollId = null),
			(Ar.currentPopupAction = null);
	}
	pollUserCancellation() {
		const t = () => {
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
						this.reject(mn(this.auth, "popup-closed-by-user"));
				}, 8e3);
				return;
			}
			this.pollId = window.setTimeout(t, n_.get());
		};
		t();
	}
}
Ar.currentPopupAction = null;
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
 */ const r_ = "pendingRedirect",
	sa = new Map();
class i_ extends _v {
	constructor(t, n, r = !1) {
		super(
			t,
			["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
			n,
			void 0,
			r
		),
			(this.eventId = null);
	}
	async execute() {
		let t = sa.get(this.auth._key());
		if (!t) {
			try {
				const r = (await s_(this.resolver, this.auth))
					? await super.execute()
					: null;
				t = () => Promise.resolve(r);
			} catch (n) {
				t = () => Promise.reject(n);
			}
			sa.set(this.auth._key(), t);
		}
		return (
			this.bypassAuthState ||
				sa.set(this.auth._key(), () => Promise.resolve(null)),
			t()
		);
	}
	async onAuthEvent(t) {
		if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
		if (t.type === "unknown") {
			this.resolve(null);
			return;
		}
		if (t.eventId) {
			const n = await this.auth._redirectUserForId(t.eventId);
			if (n) return (this.user = n), super.onAuthEvent(t);
			this.resolve(null);
		}
	}
	async onExecution() {}
	cleanUp() {}
}
async function s_(e, t) {
	const n = l_(t),
		r = a_(e);
	if (!(await r._isAvailable())) return !1;
	const i = (await r._get(n)) === "true";
	return await r._remove(n), i;
}
function o_(e, t) {
	sa.set(e._key(), t);
}
function a_(e) {
	return Tn(e._redirectPersistence);
}
function l_(e) {
	return ia(r_, e.config.apiKey, e.name);
}
async function u_(e, t, n = !1) {
	const r = Qi(e),
		i = Sv(r, t),
		o = await new i_(r, i, n).execute();
	return (
		o &&
			!n &&
			(delete o.user._redirectEventId,
			await r._persistUserIfCurrent(o.user),
			await r._setRedirectUser(null, t)),
		o
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
 */ const c_ = 10 * 60 * 1e3;
class d_ {
	constructor(t) {
		(this.auth = t),
			(this.cachedEventUids = new Set()),
			(this.consumers = new Set()),
			(this.queuedRedirectEvent = null),
			(this.hasHandledPotentialRedirect = !1),
			(this.lastProcessedEventTime = Date.now());
	}
	registerConsumer(t) {
		this.consumers.add(t),
			this.queuedRedirectEvent &&
				this.isEventForConsumer(this.queuedRedirectEvent, t) &&
				(this.sendToConsumer(this.queuedRedirectEvent, t),
				this.saveEventToCache(this.queuedRedirectEvent),
				(this.queuedRedirectEvent = null));
	}
	unregisterConsumer(t) {
		this.consumers.delete(t);
	}
	onEvent(t) {
		if (this.hasEventBeenHandled(t)) return !1;
		let n = !1;
		return (
			this.consumers.forEach((r) => {
				this.isEventForConsumer(t, r) &&
					((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
			}),
			this.hasHandledPotentialRedirect ||
				!f_(t) ||
				((this.hasHandledPotentialRedirect = !0),
				n || ((this.queuedRedirectEvent = t), (n = !0))),
			n
		);
	}
	sendToConsumer(t, n) {
		var r;
		if (t.error && !Cv(t)) {
			const i =
				((r = t.error.code) === null || r === void 0
					? void 0
					: r.split("auth/")[1]) || "internal-error";
			n.onError(mn(this.auth, i));
		} else n.onAuthEvent(t);
	}
	isEventForConsumer(t, n) {
		const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
		return n.filter.includes(t.type) && r;
	}
	hasEventBeenHandled(t) {
		return (
			Date.now() - this.lastProcessedEventTime >= c_ &&
				this.cachedEventUids.clear(),
			this.cachedEventUids.has(vp(t))
		);
	}
	saveEventToCache(t) {
		this.cachedEventUids.add(vp(t)), (this.lastProcessedEventTime = Date.now());
	}
}
function vp(e) {
	return [e.type, e.eventId, e.sessionId, e.tenantId]
		.filter((t) => t)
		.join("-");
}
function Cv({ type: e, error: t }) {
	return (
		e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
	);
}
function f_(e) {
	switch (e.type) {
		case "signInViaRedirect":
		case "linkViaRedirect":
		case "reauthViaRedirect":
			return !0;
		case "unknown":
			return Cv(e);
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
 */ async function h_(e, t = {}) {
	return Zr(e, "GET", "/v1/projects", t);
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
 */ const p_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
	m_ = /^https?/;
async function y_(e) {
	if (e.config.emulator) return;
	const { authorizedDomains: t } = await h_(e);
	for (const n of t)
		try {
			if (g_(n)) return;
		} catch {}
	Kt(e, "unauthorized-domain");
}
function g_(e) {
	const t = Fc(),
		{ protocol: n, hostname: r } = new URL(t);
	if (e.startsWith("chrome-extension://")) {
		const o = new URL(e);
		return o.hostname === "" && r === ""
			? n === "chrome-extension:" &&
					e.replace("chrome-extension://", "") ===
						t.replace("chrome-extension://", "")
			: n === "chrome-extension:" && o.hostname === r;
	}
	if (!m_.test(n)) return !1;
	if (p_.test(e)) return r === e;
	const i = e.replace(/\./g, "\\.");
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
 */ const v_ = new ho(3e4, 6e4);
function wp() {
	const e = yn().___jsl;
	if (e != null && e.H) {
		for (const t of Object.keys(e.H))
			if (
				((e.H[t].r = e.H[t].r || []),
				(e.H[t].L = e.H[t].L || []),
				(e.H[t].r = [...e.H[t].L]),
				e.CP)
			)
				for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
	}
}
function w_(e) {
	return new Promise((t, n) => {
		var r, i, s;
		function o() {
			wp(),
				gapi.load("gapi.iframes", {
					callback: () => {
						t(gapi.iframes.getContext());
					},
					ontimeout: () => {
						wp(), n(mn(e, "network-request-failed"));
					},
					timeout: v_.get(),
				});
		}
		if (
			!(
				(i = (r = yn().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
					null || i === void 0
			) &&
			i.Iframe
		)
			t(gapi.iframes.getContext());
		else if (!((s = yn().gapi) === null || s === void 0) && s.load) o();
		else {
			const a = cS("iframefcb");
			return (
				(yn()[a] = () => {
					gapi.load ? o() : n(mn(e, "network-request-failed"));
				}),
				cv(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
			);
		}
	}).catch((t) => {
		throw ((oa = null), t);
	});
}
let oa = null;
function x_(e) {
	return (oa = oa || w_(e)), oa;
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
 */ const b_ = new ho(5e3, 15e3),
	E_ = "__/auth/iframe",
	S_ = "emulator/auth/iframe",
	__ = {
		style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
		"aria-hidden": "true",
		tabindex: "-1",
	},
	C_ = new Map([
		["identitytoolkit.googleapis.com", "p"],
		["staging-identitytoolkit.sandbox.googleapis.com", "s"],
		["test-identitytoolkit.sandbox.googleapis.com", "t"],
	]);
function k_(e) {
	const t = e.config;
	ae(t.authDomain, e, "auth-domain-config-required");
	const n = t.emulator ? nf(t, S_) : `https://${e.config.authDomain}/${E_}`,
		r = { apiKey: t.apiKey, appName: e.name, v: fo },
		i = C_.get(e.config.apiHost);
	i && (r.eid = i);
	const s = e._getFrameworks();
	return s.length && (r.fw = s.join(",")), `${n}?${co(r).slice(1)}`;
}
async function R_(e) {
	const t = await x_(e),
		n = yn().gapi;
	return (
		ae(n, e, "internal-error"),
		t.open(
			{
				where: document.body,
				url: k_(e),
				messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
				attributes: __,
				dontclear: !0,
			},
			(r) =>
				new Promise(async (i, s) => {
					await r.restyle({ setHideOnLeave: !1 });
					const o = mn(e, "network-request-failed"),
						a = yn().setTimeout(() => {
							s(o);
						}, b_.get());
					function l() {
						yn().clearTimeout(a), i(r);
					}
					r.ping(l).then(l, () => {
						s(o);
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
 */ const N_ = {
		location: "yes",
		resizable: "yes",
		statusbar: "yes",
		toolbar: "no",
	},
	O_ = 500,
	P_ = 600,
	T_ = "_blank",
	I_ = "http://localhost";
class xp {
	constructor(t) {
		(this.window = t), (this.associatedEvent = null);
	}
	close() {
		if (this.window)
			try {
				this.window.close();
			} catch {}
	}
}
function j_(e, t, n, r = O_, i = P_) {
	const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
		o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
	let a = "";
	const l = Object.assign(Object.assign({}, N_), {
			width: r.toString(),
			height: i.toString(),
			top: s,
			left: o,
		}),
		u = pt().toLowerCase();
	n && (a = tv(u) ? T_ : n), ev(u) && ((t = t || I_), (l.scrollbars = "yes"));
	const d = Object.entries(l).reduce((p, [b, w]) => `${p}${b}=${w},`, "");
	if (oS(u) && a !== "_self") return A_(t || "", a), new xp(null);
	const f = window.open(t || "", a, d);
	ae(f, e, "popup-blocked");
	try {
		f.focus();
	} catch {}
	return new xp(f);
}
function A_(e, t) {
	const n = document.createElement("a");
	(n.href = e), (n.target = t);
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
 */ const L_ = "__/auth/handler",
	D_ = "emulator/auth/handler",
	M_ = encodeURIComponent("fac");
async function bp(e, t, n, r, i, s) {
	ae(e.config.authDomain, e, "auth-domain-config-required"),
		ae(e.config.apiKey, e, "invalid-api-key");
	const o = {
		apiKey: e.config.apiKey,
		appName: e.name,
		authType: n,
		redirectUrl: r,
		v: fo,
		eventId: i,
	};
	if (t instanceof lf) {
		t.setDefaultLanguage(e.languageCode),
			(o.providerId = t.providerId || ""),
			Tb(t.getCustomParameters()) ||
				(o.customParameters = JSON.stringify(t.getCustomParameters()));
		for (const [d, f] of Object.entries(s || {})) o[d] = f;
	}
	if (t instanceof mo) {
		const d = t.getScopes().filter((f) => f !== "");
		d.length > 0 && (o.scopes = d.join(","));
	}
	e.tenantId && (o.tid = e.tenantId);
	const a = o;
	for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
	const l = await e._getAppCheckToken(),
		u = l ? `#${M_}=${encodeURIComponent(l)}` : "";
	return `${F_(e)}?${co(a).slice(1)}${u}`;
}
function F_({ config: e }) {
	return e.emulator ? nf(e, D_) : `https://${e.authDomain}/${L_}`;
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
 */ const Su = "webStorageSupport";
class U_ {
	constructor() {
		(this.eventManagers = {}),
			(this.iframes = {}),
			(this.originValidationPromises = {}),
			(this._redirectPersistence = vv),
			(this._completeRedirectFn = u_),
			(this._overrideRedirectResult = o_);
	}
	async _openPopup(t, n, r, i) {
		var s;
		Un(
			(s = this.eventManagers[t._key()]) === null || s === void 0
				? void 0
				: s.manager,
			"_initialize() not called before _openPopup()"
		);
		const o = await bp(t, n, r, Fc(), i);
		return j_(t, o, uf());
	}
	async _openRedirect(t, n, r, i) {
		await this._originValidation(t);
		const s = await bp(t, n, r, Fc(), i);
		return VS(s), new Promise(() => {});
	}
	_initialize(t) {
		const n = t._key();
		if (this.eventManagers[n]) {
			const { manager: i, promise: s } = this.eventManagers[n];
			return i
				? Promise.resolve(i)
				: (Un(s, "If manager is not set, promise should be"), s);
		}
		const r = this.initAndGetManager(t);
		return (
			(this.eventManagers[n] = { promise: r }),
			r.catch(() => {
				delete this.eventManagers[n];
			}),
			r
		);
	}
	async initAndGetManager(t) {
		const n = await R_(t),
			r = new d_(t);
		return (
			n.register(
				"authEvent",
				(i) => (
					ae(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
					{ status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
				),
				gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
			),
			(this.eventManagers[t._key()] = { manager: r }),
			(this.iframes[t._key()] = n),
			r
		);
	}
	_isIframeWebStorageSupported(t, n) {
		this.iframes[t._key()].send(
			Su,
			{ type: Su },
			(i) => {
				var s;
				const o =
					(s = i == null ? void 0 : i[0]) === null || s === void 0
						? void 0
						: s[Su];
				o !== void 0 && n(!!o), Kt(t, "internal-error");
			},
			gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
		);
	}
	_originValidation(t) {
		const n = t._key();
		return (
			this.originValidationPromises[n] ||
				(this.originValidationPromises[n] = y_(t)),
			this.originValidationPromises[n]
		);
	}
	get _shouldInitProactively() {
		return ov() || sf() || Cl();
	}
}
const B_ = U_;
var Ep = "@firebase/auth",
	Sp = "1.1.0";
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
 */ class z_ {
	constructor(t) {
		(this.auth = t), (this.internalListeners = new Map());
	}
	getUid() {
		var t;
		return (
			this.assertAuthConfigured(),
			((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
				null
		);
	}
	async getToken(t) {
		return (
			this.assertAuthConfigured(),
			await this.auth._initializationPromise,
			this.auth.currentUser
				? { accessToken: await this.auth.currentUser.getIdToken(t) }
				: null
		);
	}
	addAuthTokenListener(t) {
		if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
		const n = this.auth.onIdTokenChanged((r) => {
			t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
		});
		this.internalListeners.set(t, n), this.updateProactiveRefresh();
	}
	removeAuthTokenListener(t) {
		this.assertAuthConfigured();
		const n = this.internalListeners.get(t);
		n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
	}
	assertAuthConfigured() {
		ae(
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
 */ function $_(e) {
	switch (e) {
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
function V_(e) {
	Ys(
		new Ui(
			"auth",
			(t, { options: n }) => {
				const r = t.getProvider("app").getImmediate(),
					i = t.getProvider("heartbeat"),
					s = t.getProvider("app-check-internal"),
					{ apiKey: o, authDomain: a } = r.options;
				ae(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
				const l = {
						apiKey: o,
						authDomain: a,
						clientPlatform: e,
						apiHost: "identitytoolkit.googleapis.com",
						tokenApiHost: "securetoken.googleapis.com",
						apiScheme: "https",
						sdkClientVersion: av(e),
					},
					u = new mS(r, i, s, l);
				return gS(u, n), u;
			},
			"PUBLIC"
		)
			.setInstantiationMode("EXPLICIT")
			.setInstanceCreatedCallback((t, n, r) => {
				t.getProvider("auth-internal").initialize();
			})
	),
		Ys(
			new Ui(
				"auth-internal",
				(t) => {
					const n = Qi(t.getProvider("auth").getImmediate());
					return ((r) => new z_(r))(n);
				},
				"PRIVATE"
			).setInstantiationMode("EXPLICIT")
		),
		ki(Ep, Sp, $_(e)),
		ki(Ep, Sp, "esm2017");
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
 */ const H_ = 5 * 60,
	W_ = Fg("authIdTokenMaxAge") || H_;
let _p = null;
const q_ = (e) => async (t) => {
	const n = t && (await t.getIdTokenResult()),
		r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
	if (r && r > W_) return;
	const i = n == null ? void 0 : n.token;
	_p !== i &&
		((_p = i),
		await fetch(e, {
			method: i ? "POST" : "DELETE",
			headers: i ? { Authorization: `Bearer ${i}` } : {},
		}));
};
function K_(e = TE()) {
	const t = $g(e, "auth");
	if (t.isInitialized()) return t.getImmediate();
	const n = yS(e, { popupRedirectResolver: B_, persistence: [XS, BS, vv] }),
		r = Fg("authTokenSyncURL");
	if (r) {
		const s = q_(r);
		AS(n, s, () => s(n.currentUser)), jS(n, (o) => s(o));
	}
	const i = xb("auth");
	return i && vS(n, `http://${i}`), n;
}
V_("Browser");
var Q_ = "firebase",
	G_ = "10.1.0";
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
 */ ki(Q_, G_, "app");
const J_ = {
		apiKey: "AIzaSyC_I1rN0ZK4w-XOnHh2FNv67kVDsjeHWio",
		authDomain: "mern-college-booking.firebaseapp.com",
		projectId: "mern-college-booking",
		storageBucket: "mern-college-booking.appspot.com",
		messagingSenderId: "801217605087",
		appId: "1:801217605087:web:e04e23b27e1dfa364d686a",
	},
	Y_ = Vg(J_),
	kv = I.createContext(null),
	X_ = ({ children: e }) => {
		const [t, n] = I.useState(!0),
			[r, i] = I.useState(null),
			s = K_(Y_),
			o = new kn(),
			a = () => gp(s, o),
			l = new Rn(),
			u = () => (console.log("Github login click"), gp(s, l)),
			d = (E, C) => (n(!0), PS(s, E, C)),
			f = (E) => IS(s.currentUser, E),
			p = (E, C) => (setLoading(!0), createUserWithEmailAndPassword(s, E, C)),
			b = () => DS(s);
		I.useEffect(() => {
			const E = LS(s, (C) => {
				console.log("currentUser -> ", C), i(C), n(!1);
			});
			return () => (console.log("unSubscribe"), E());
		}, []),
			console.log("user -> ", r);
		const w = {
			user: r,
			authLoading: t,
			googleLogin: a,
			githubLogin: u,
			signUp: p,
			updateUserProfile: f,
			logOut: b,
			signIn: d,
		};
		return c.jsx(kv.Provider, { value: w, children: e });
	},
	on = () => ({ ...I.useContext(kv) }),
	Z_ = () => {
		const [e, t] = I.useState(!1),
			n = I.useRef(null),
			{ authLoading: r, user: i, logOut: s } = on(),
			o = [
				{ path: "/", name: "Home" },
				{ path: "/colleges", name: "Colleges" },
				{ path: "/my-college", name: "My College" },
			],
			a = c.jsx(c.Fragment, {
				children: o.map((p, b) =>
					c.jsx(
						db,
						{
							to: p == null ? void 0 : p.path,
							className: "hover:text-gray-900",
							children: p == null ? void 0 : p.name,
						},
						b
					)
				),
			}),
			l = () => {
				s().then((p) => console.log("logout Success", p));
			},
			u =
				"text-lg p-1 transition duration-300 hover:bg-slate-50 w-full text-left",
			d = c.jsxs(c.Fragment, {
				children: [
					c.jsxs(br, {
						className: u,
						to: "/profile",
						children: [" ", "Profile", " "],
					}),
					c.jsx("button", {
						className: u,
						onClick: () => l(),
						children: "Logout",
					}),
				],
			}),
			f = () => {
				t(!e);
			};
		return (
			I.useEffect(() => {
				const p = (b) => {
					n.current && !n.current.contains(b.target) && t(!1);
				};
				return (
					window.addEventListener("click", p),
					() => {
						window.removeEventListener("click", p);
					}
				);
			}, []),
			c.jsx(c.Fragment, {
				children: c.jsx("header", {
					className: "text-gray-600 bg-slate-50 shadow body-font",
					children: c.jsxs("div", {
						className:
							"mc relative flex flex-wrap py-4 flex-col md:flex-row items-center",
						children: [
							c.jsxs("div", {
								className: "flex gap-1 items-center",
								children: [
									c.jsx("figure", {
										className: "w-10 h-10",
										children: c.jsx(za.LazyLoadImage, {
											className: "w-full h-full object-center",
											src: Ic,
										}),
									}),
									c.jsx("a", {
										className:
											"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
										children: c.jsx("span", {
											className: "ml-3 text-xl",
											children: "PS-Admission",
										}),
									}),
								],
							}),
							c.jsx("nav", {
								className:
									"md:ml-auto flex flex-wrap gap-3 items-center text-lg justify-center",
								children: a,
							}),
							c.jsx("div", {
								children: i
									? c.jsxs("div", {
											children: [
												c.jsx("button", {
													onClick: () => f(),
													className:
														"md:ml-3 w-12 h-12 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-full overflow-hidden hover:shadow-xl flex justify-center items-center",
													children: c.jsx(za.LazyLoadImage, {
														src: i == null ? void 0 : i.photoURL,
														className: "w-full h-full",
													}),
												}),
												c.jsx("div", {
													className: `z-10 absolute right-0 top-[calc(100%)] bg-slate-200 p-1 rounded shadow-lg transition duration-300 transform origin-top ${
														e ? "opacity-1 scale-y-100 " : "opacity-0 scale-y-0"
													}`,
													children: c.jsx("nav", {
														className:
															"flex flex-col items-start text-base justify-start min-w-[150px]",
														children: d,
													}),
												}),
											],
									  })
									: c.jsx(br, {
											to: "/login",
											children: c.jsx("button", {
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
	eC = () =>
		c.jsx(c.Fragment, {
			children: c.jsxs("footer", {
				className: "text-gray-600 body-font",
				children: [
					c.jsx("div", {
						className: "mc py-16 mx-auto",
						children: c.jsxs("div", {
							className: "flex flex-wrap md:text-left text-center order-first",
							children: [
								c.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full mx-auto px-4",
									children: [
										c.jsx("figure", {
											className: "w-24 h-24",
											children: c.jsx(za.LazyLoadImage, {
												className: "w-full h-full object-center",
												src: Ic,
											}),
										}),
										c.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase mt-3",
											children: "PS-Admission",
										}),
									],
								}),
								c.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										c.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "CATEGORIES",
										}),
										c.jsxs("nav", {
											className: "list-none mb-10",
											children: [
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "First Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Second Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Third Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Fourth Link",
													}),
												}),
											],
										}),
									],
								}),
								c.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										c.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "CATEGORIES",
										}),
										c.jsxs("nav", {
											className: "list-none mb-10",
											children: [
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "First Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Second Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Third Link",
													}),
												}),
												c.jsx("li", {
													children: c.jsx("a", {
														className: "text-gray-600 hover:text-gray-800",
														children: "Fourth Link",
													}),
												}),
											],
										}),
									],
								}),
								c.jsxs("div", {
									className: "lg:w-1/4 md:w-1/2 w-full px-4",
									children: [
										c.jsx("h2", {
											className:
												"title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
											children: "SUBSCRIBE",
										}),
										c.jsxs("div", {
											className:
												"flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start",
											children: [
												c.jsxs("div", {
													className:
														"relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2",
													children: [
														c.jsx("label", {
															htmlFor: "footer-field",
															className: "leading-7 text-sm text-gray-600",
															children: "Placeholder",
														}),
														c.jsx("input", {
															type: "text",
															id: "footer-field",
															name: "footer-field",
															className:
																"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
														}),
													],
												}),
												c.jsx("button", {
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
					c.jsx("div", {
						className: "bg-gray-100",
						children: c.jsxs("div", {
							className:
								"mc py-6 mx-auto flex items-center sm:flex-row flex-col",
							children: [
								c.jsxs("a", {
									className:
										"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
									children: [
										c.jsx("figure", {
											className: "w-16 h-16",
											children: c.jsx(za.LazyLoadImage, {
												className: "w-full h-full object-center",
												src: Ic,
											}),
										}),
										c.jsx("span", {
											className: "ml-3 text-xl",
											children: "Ps-Admission",
										}),
									],
								}),
								c.jsxs("p", {
									className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
									children: [
										"© 2023 Ps-Admission —",
										c.jsx("a", {
											href: "https://twitter.com/knyttneve",
											rel: "noopener noreferrer",
											className: "text-gray-600 ml-1",
											target: "_blank",
											children: "@ps-admission",
										}),
									],
								}),
								c.jsxs("span", {
									className:
										"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
									children: [
										c.jsx("a", {
											className: "text-gray-500",
											children: c.jsx("svg", {
												fill: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: c.jsx("path", {
													d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
												}),
											}),
										}),
										c.jsx("a", {
											className: "ml-3 text-gray-500",
											children: c.jsx("svg", {
												fill: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: c.jsx("path", {
													d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
												}),
											}),
										}),
										c.jsx("a", {
											className: "ml-3 text-gray-500",
											children: c.jsxs("svg", {
												fill: "none",
												stroke: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: [
													c.jsx("rect", {
														width: 20,
														height: 20,
														x: 2,
														y: 2,
														rx: 5,
														ry: 5,
													}),
													c.jsx("path", {
														d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
													}),
												],
											}),
										}),
										c.jsx("a", {
											className: "ml-3 text-gray-500",
											children: c.jsxs("svg", {
												fill: "currentColor",
												stroke: "currentColor",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 0,
												className: "w-5 h-5",
												viewBox: "0 0 24 24",
												children: [
													c.jsx("path", {
														stroke: "none",
														d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
													}),
													c.jsx("circle", {
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
	tC = () =>
		c.jsxs(c.Fragment, {
			children: [
				c.jsx(Z_, {}),
				c.jsxs("main", { children: [" ", c.jsx(Z1, {}), " "] }),
				c.jsx(eC, {}),
			],
		});
class go {
	constructor() {
		(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
	}
	subscribe(t) {
		const n = { listener: t };
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
const to = typeof window > "u" || "Deno" in window;
function Ft() {}
function nC(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Bc(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Rv(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function bs(e, t, n) {
	return Nl(e)
		? typeof t == "function"
			? { ...n, queryKey: e, queryFn: t }
			: { ...t, queryKey: e }
		: e;
}
function Zn(e, t, n) {
	return Nl(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Cp(e, t) {
	const {
		type: n = "all",
		exact: r,
		fetchStatus: i,
		predicate: s,
		queryKey: o,
		stale: a,
	} = e;
	if (Nl(o)) {
		if (r) {
			if (t.queryHash !== df(o, t.options)) return !1;
		} else if (!Ga(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		const l = t.isActive();
		if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
	}
	return !(
		(typeof a == "boolean" && t.isStale() !== a) ||
		(typeof i < "u" && i !== t.state.fetchStatus) ||
		(s && !s(t))
	);
}
function kp(e, t) {
	const { exact: n, fetching: r, predicate: i, mutationKey: s } = e;
	if (Nl(s)) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Lr(t.options.mutationKey) !== Lr(s)) return !1;
		} else if (!Ga(t.options.mutationKey, s)) return !1;
	}
	return !(
		(typeof r == "boolean" && (t.state.status === "loading") !== r) ||
		(i && !i(t))
	);
}
function df(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || Lr)(e);
}
function Lr(e) {
	return JSON.stringify(e, (t, n) =>
		zc(n)
			? Object.keys(n)
					.sort()
					.reduce((r, i) => ((r[i] = n[i]), r), {})
			: n
	);
}
function Ga(e, t) {
	return Nv(e, t);
}
function Nv(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
		? !1
		: e && t && typeof e == "object" && typeof t == "object"
		? !Object.keys(t).some((n) => !Nv(e[n], t[n]))
		: !1;
}
function Ov(e, t) {
	if (e === t) return e;
	const n = Np(e) && Np(t);
	if (n || (zc(e) && zc(t))) {
		const r = n ? e.length : Object.keys(e).length,
			i = n ? t : Object.keys(t),
			s = i.length,
			o = n ? [] : {};
		let a = 0;
		for (let l = 0; l < s; l++) {
			const u = n ? l : i[l];
			(o[u] = Ov(e[u], t[u])), o[u] === e[u] && a++;
		}
		return r === s && a === r ? e : o;
	}
	return t;
}
function Rp(e, t) {
	if ((e && !t) || (t && !e)) return !1;
	for (const n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function Np(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function zc(e) {
	if (!Op(e)) return !1;
	const t = e.constructor;
	if (typeof t > "u") return !0;
	const n = t.prototype;
	return !(!Op(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Op(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Nl(e) {
	return Array.isArray(e);
}
function Pv(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
function Pp(e) {
	Pv(0).then(e);
}
function rC() {
	if (typeof AbortController == "function") return new AbortController();
}
function $c(e, t, n) {
	return n.isDataEqual != null && n.isDataEqual(e, t)
		? e
		: typeof n.structuralSharing == "function"
		? n.structuralSharing(e, t)
		: n.structuralSharing !== !1
		? Ov(e, t)
		: t;
}
class iC extends go {
	constructor() {
		super(),
			(this.setup = (t) => {
				if (!to && window.addEventListener) {
					const n = () => t();
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
			var t;
			(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
		}
	}
	setEventListener(t) {
		var n;
		(this.setup = t),
			(n = this.cleanup) == null || n.call(this),
			(this.cleanup = t((r) => {
				typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
			}));
	}
	setFocused(t) {
		this.focused !== t && ((this.focused = t), this.onFocus());
	}
	onFocus() {
		this.listeners.forEach(({ listener: t }) => {
			t();
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
const Ja = new iC(),
	Tp = ["online", "offline"];
class sC extends go {
	constructor() {
		super(),
			(this.setup = (t) => {
				if (!to && window.addEventListener) {
					const n = () => t();
					return (
						Tp.forEach((r) => {
							window.addEventListener(r, n, !1);
						}),
						() => {
							Tp.forEach((r) => {
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
			var t;
			(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
		}
	}
	setEventListener(t) {
		var n;
		(this.setup = t),
			(n = this.cleanup) == null || n.call(this),
			(this.cleanup = t((r) => {
				typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
			}));
	}
	setOnline(t) {
		this.online !== t && ((this.online = t), this.onOnline());
	}
	onOnline() {
		this.listeners.forEach(({ listener: t }) => {
			t();
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
const Ya = new sC();
function oC(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Ol(e) {
	return (e ?? "online") === "online" ? Ya.isOnline() : !0;
}
class Tv {
	constructor(t) {
		(this.revert = t == null ? void 0 : t.revert),
			(this.silent = t == null ? void 0 : t.silent);
	}
}
function aa(e) {
	return e instanceof Tv;
}
function Iv(e) {
	let t = !1,
		n = 0,
		r = !1,
		i,
		s,
		o;
	const a = new Promise((C, g) => {
			(s = C), (o = g);
		}),
		l = (C) => {
			r || (b(new Tv(C)), e.abort == null || e.abort());
		},
		u = () => {
			t = !0;
		},
		d = () => {
			t = !1;
		},
		f = () => !Ja.isFocused() || (e.networkMode !== "always" && !Ya.isOnline()),
		p = (C) => {
			r ||
				((r = !0),
				e.onSuccess == null || e.onSuccess(C),
				i == null || i(),
				s(C));
		},
		b = (C) => {
			r ||
				((r = !0), e.onError == null || e.onError(C), i == null || i(), o(C));
		},
		w = () =>
			new Promise((C) => {
				(i = (g) => {
					const h = r || !f();
					return h && C(g), h;
				}),
					e.onPause == null || e.onPause();
			}).then(() => {
				(i = void 0), r || e.onContinue == null || e.onContinue();
			}),
		E = () => {
			if (r) return;
			let C;
			try {
				C = e.fn();
			} catch (g) {
				C = Promise.reject(g);
			}
			Promise.resolve(C)
				.then(p)
				.catch((g) => {
					var h, v;
					if (r) return;
					const m = (h = e.retry) != null ? h : 3,
						_ = (v = e.retryDelay) != null ? v : oC,
						O = typeof _ == "function" ? _(n, g) : _,
						P =
							m === !0 ||
							(typeof m == "number" && n < m) ||
							(typeof m == "function" && m(n, g));
					if (t || !P) {
						b(g);
						return;
					}
					n++,
						e.onFail == null || e.onFail(n, g),
						Pv(O)
							.then(() => {
								if (f()) return w();
							})
							.then(() => {
								t ? b(g) : E();
							});
				});
		};
	return (
		Ol(e.networkMode) ? E() : w().then(E),
		{
			promise: a,
			cancel: l,
			continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
			cancelRetry: u,
			continueRetry: d,
		}
	);
}
const ff = console;
function aC() {
	let e = [],
		t = 0,
		n = (d) => {
			d();
		},
		r = (d) => {
			d();
		};
	const i = (d) => {
			let f;
			t++;
			try {
				f = d();
			} finally {
				t--, t || a();
			}
			return f;
		},
		s = (d) => {
			t
				? e.push(d)
				: Pp(() => {
						n(d);
				  });
		},
		o =
			(d) =>
			(...f) => {
				s(() => {
					d(...f);
				});
			},
		a = () => {
			const d = e;
			(e = []),
				d.length &&
					Pp(() => {
						r(() => {
							d.forEach((f) => {
								n(f);
							});
						});
					});
		};
	return {
		batch: i,
		batchCalls: o,
		schedule: s,
		setNotifyFunction: (d) => {
			n = d;
		},
		setBatchNotifyFunction: (d) => {
			r = d;
		},
	};
}
const Qe = aC();
class jv {
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(),
			Bc(this.cacheTime) &&
				(this.gcTimeout = setTimeout(() => {
					this.optionalRemove();
				}, this.cacheTime));
	}
	updateCacheTime(t) {
		this.cacheTime = Math.max(
			this.cacheTime || 0,
			t ?? (to ? 1 / 0 : 5 * 60 * 1e3)
		);
	}
	clearGcTimeout() {
		this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
	}
}
class lC extends jv {
	constructor(t) {
		super(),
			(this.abortSignalConsumed = !1),
			(this.defaultOptions = t.defaultOptions),
			this.setOptions(t.options),
			(this.observers = []),
			(this.cache = t.cache),
			(this.logger = t.logger || ff),
			(this.queryKey = t.queryKey),
			(this.queryHash = t.queryHash),
			(this.initialState = t.state || uC(this.options)),
			(this.state = this.initialState),
			this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	setOptions(t) {
		(this.options = { ...this.defaultOptions, ...t }),
			this.updateCacheTime(this.options.cacheTime);
	}
	optionalRemove() {
		!this.observers.length &&
			this.state.fetchStatus === "idle" &&
			this.cache.remove(this);
	}
	setData(t, n) {
		const r = $c(this.state.data, t, this.options);
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
	setState(t, n) {
		this.dispatch({ type: "setState", state: t, setStateOptions: n });
	}
	cancel(t) {
		var n;
		const r = this.promise;
		return (
			(n = this.retryer) == null || n.cancel(t),
			r ? r.then(Ft).catch(Ft) : Promise.resolve()
		);
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	reset() {
		this.destroy(), this.setState(this.initialState);
	}
	isActive() {
		return this.observers.some((t) => t.options.enabled !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 && !this.isActive();
	}
	isStale() {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			this.observers.some((t) => t.getCurrentResult().isStale)
		);
	}
	isStaleByTime(t = 0) {
		return (
			this.state.isInvalidated ||
			!this.state.dataUpdatedAt ||
			!Rv(this.state.dataUpdatedAt, t)
		);
	}
	onFocus() {
		var t;
		const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
		n && n.refetch({ cancelRefetch: !1 }),
			(t = this.retryer) == null || t.continue();
	}
	onOnline() {
		var t;
		const n = this.observers.find((r) => r.shouldFetchOnReconnect());
		n && n.refetch({ cancelRefetch: !1 }),
			(t = this.retryer) == null || t.continue();
	}
	addObserver(t) {
		this.observers.includes(t) ||
			(this.observers.push(t),
			this.clearGcTimeout(),
			this.cache.notify({ type: "observerAdded", query: this, observer: t }));
	}
	removeObserver(t) {
		this.observers.includes(t) &&
			((this.observers = this.observers.filter((n) => n !== t)),
			this.observers.length ||
				(this.retryer &&
					(this.abortSignalConsumed
						? this.retryer.cancel({ revert: !0 })
						: this.retryer.cancelRetry()),
				this.scheduleGc()),
			this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		this.state.isInvalidated || this.dispatch({ type: "invalidate" });
	}
	fetch(t, n) {
		var r, i;
		if (this.state.fetchStatus !== "idle") {
			if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
				this.cancel({ silent: !0 });
			else if (this.promise) {
				var s;
				return (s = this.retryer) == null || s.continueRetry(), this.promise;
			}
		}
		if ((t && this.setOptions(t), !this.options.queryFn)) {
			const b = this.observers.find((w) => w.options.queryFn);
			b && this.setOptions(b.options);
		}
		Array.isArray(this.options.queryKey);
		const o = rC(),
			a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
			l = (b) => {
				Object.defineProperty(b, "signal", {
					enumerable: !0,
					get: () => {
						if (o) return (this.abortSignalConsumed = !0), o.signal;
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
			d = {
				fetchOptions: n,
				options: this.options,
				queryKey: this.queryKey,
				state: this.state,
				fetchFn: u,
			};
		if (
			(l(d),
			(r = this.options.behavior) == null || r.onFetch(d),
			(this.revertState = this.state),
			this.state.fetchStatus === "idle" ||
				this.state.fetchMeta !==
					((i = d.fetchOptions) == null ? void 0 : i.meta))
		) {
			var f;
			this.dispatch({
				type: "fetch",
				meta: (f = d.fetchOptions) == null ? void 0 : f.meta,
			});
		}
		const p = (b) => {
			if (
				((aa(b) && b.silent) || this.dispatch({ type: "error", error: b }),
				!aa(b))
			) {
				var w, E, C, g;
				(w = (E = this.cache.config).onError) == null || w.call(E, b, this),
					(C = (g = this.cache.config).onSettled) == null ||
						C.call(g, this.state.data, b, this);
			}
			this.isFetchingOptimistic || this.scheduleGc(),
				(this.isFetchingOptimistic = !1);
		};
		return (
			(this.retryer = Iv({
				fn: d.fetchFn,
				abort: o == null ? void 0 : o.abort.bind(o),
				onSuccess: (b) => {
					var w, E, C, g;
					if (typeof b > "u") {
						p(new Error(this.queryHash + " data is undefined"));
						return;
					}
					this.setData(b),
						(w = (E = this.cache.config).onSuccess) == null ||
							w.call(E, b, this),
						(C = (g = this.cache.config).onSettled) == null ||
							C.call(g, b, this.state.error, this),
						this.isFetchingOptimistic || this.scheduleGc(),
						(this.isFetchingOptimistic = !1);
				},
				onError: p,
				onFail: (b, w) => {
					this.dispatch({ type: "failed", failureCount: b, error: w });
				},
				onPause: () => {
					this.dispatch({ type: "pause" });
				},
				onContinue: () => {
					this.dispatch({ type: "continue" });
				},
				retry: d.options.retry,
				retryDelay: d.options.retryDelay,
				networkMode: d.options.networkMode,
			})),
			(this.promise = this.retryer.promise),
			this.promise
		);
	}
	dispatch(t) {
		const n = (r) => {
			var i, s;
			switch (t.type) {
				case "failed":
					return {
						...r,
						fetchFailureCount: t.failureCount,
						fetchFailureReason: t.error,
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
						fetchMeta: (i = t.meta) != null ? i : null,
						fetchStatus: Ol(this.options.networkMode) ? "fetching" : "paused",
						...(!r.dataUpdatedAt && { error: null, status: "loading" }),
					};
				case "success":
					return {
						...r,
						data: t.data,
						dataUpdateCount: r.dataUpdateCount + 1,
						dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
						error: null,
						isInvalidated: !1,
						status: "success",
						...(!t.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null,
						}),
					};
				case "error":
					const o = t.error;
					return aa(o) && o.revert && this.revertState
						? { ...this.revertState }
						: {
								...r,
								error: o,
								errorUpdateCount: r.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: r.fetchFailureCount + 1,
								fetchFailureReason: o,
								fetchStatus: "idle",
								status: "error",
						  };
				case "invalidate":
					return { ...r, isInvalidated: !0 };
				case "setState":
					return { ...r, ...t.state };
			}
		};
		(this.state = n(this.state)),
			Qe.batch(() => {
				this.observers.forEach((r) => {
					r.onQueryUpdate(t);
				}),
					this.cache.notify({ query: this, type: "updated", action: t });
			});
	}
}
function uC(e) {
	const t =
			typeof e.initialData == "function" ? e.initialData() : e.initialData,
		n = typeof t < "u",
		r = n
			? typeof e.initialDataUpdatedAt == "function"
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0;
	return {
		data: t,
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
class cC extends go {
	constructor(t) {
		super(),
			(this.config = t || {}),
			(this.queries = []),
			(this.queriesMap = {});
	}
	build(t, n, r) {
		var i;
		const s = n.queryKey,
			o = (i = n.queryHash) != null ? i : df(s, n);
		let a = this.get(o);
		return (
			a ||
				((a = new lC({
					cache: this,
					logger: t.getLogger(),
					queryKey: s,
					queryHash: o,
					options: t.defaultQueryOptions(n),
					state: r,
					defaultOptions: t.getQueryDefaults(s),
				})),
				this.add(a)),
			a
		);
	}
	add(t) {
		this.queriesMap[t.queryHash] ||
			((this.queriesMap[t.queryHash] = t),
			this.queries.push(t),
			this.notify({ type: "added", query: t }));
	}
	remove(t) {
		const n = this.queriesMap[t.queryHash];
		n &&
			(t.destroy(),
			(this.queries = this.queries.filter((r) => r !== t)),
			n === t && delete this.queriesMap[t.queryHash],
			this.notify({ type: "removed", query: t }));
	}
	clear() {
		Qe.batch(() => {
			this.queries.forEach((t) => {
				this.remove(t);
			});
		});
	}
	get(t) {
		return this.queriesMap[t];
	}
	getAll() {
		return this.queries;
	}
	find(t, n) {
		const [r] = Zn(t, n);
		return (
			typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Cp(r, i))
		);
	}
	findAll(t, n) {
		const [r] = Zn(t, n);
		return Object.keys(r).length > 0
			? this.queries.filter((i) => Cp(r, i))
			: this.queries;
	}
	notify(t) {
		Qe.batch(() => {
			this.listeners.forEach(({ listener: n }) => {
				n(t);
			});
		});
	}
	onFocus() {
		Qe.batch(() => {
			this.queries.forEach((t) => {
				t.onFocus();
			});
		});
	}
	onOnline() {
		Qe.batch(() => {
			this.queries.forEach((t) => {
				t.onOnline();
			});
		});
	}
}
class dC extends jv {
	constructor(t) {
		super(),
			(this.defaultOptions = t.defaultOptions),
			(this.mutationId = t.mutationId),
			(this.mutationCache = t.mutationCache),
			(this.logger = t.logger || ff),
			(this.observers = []),
			(this.state = t.state || fC()),
			this.setOptions(t.options),
			this.scheduleGc();
	}
	setOptions(t) {
		(this.options = { ...this.defaultOptions, ...t }),
			this.updateCacheTime(this.options.cacheTime);
	}
	get meta() {
		return this.options.meta;
	}
	setState(t) {
		this.dispatch({ type: "setState", state: t });
	}
	addObserver(t) {
		this.observers.includes(t) ||
			(this.observers.push(t),
			this.clearGcTimeout(),
			this.mutationCache.notify({
				type: "observerAdded",
				mutation: this,
				observer: t,
			}));
	}
	removeObserver(t) {
		(this.observers = this.observers.filter((n) => n !== t)),
			this.scheduleGc(),
			this.mutationCache.notify({
				type: "observerRemoved",
				mutation: this,
				observer: t,
			});
	}
	optionalRemove() {
		this.observers.length ||
			(this.state.status === "loading"
				? this.scheduleGc()
				: this.mutationCache.remove(this));
	}
	continue() {
		var t, n;
		return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
			? t
			: this.execute();
	}
	async execute() {
		const t = () => {
				var P;
				return (
					(this.retryer = Iv({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(this.state.variables)
								: Promise.reject("No mutationFn found"),
						onFail: (N, V) => {
							this.dispatch({ type: "failed", failureCount: N, error: V });
						},
						onPause: () => {
							this.dispatch({ type: "pause" });
						},
						onContinue: () => {
							this.dispatch({ type: "continue" });
						},
						retry: (P = this.options.retry) != null ? P : 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
					})),
					this.retryer.promise
				);
			},
			n = this.state.status === "loading";
		try {
			var r, i, s, o, a, l, u, d;
			if (!n) {
				var f, p, b, w;
				this.dispatch({ type: "loading", variables: this.options.variables }),
					await ((f = (p = this.mutationCache.config).onMutate) == null
						? void 0
						: f.call(p, this.state.variables, this));
				const N = await ((b = (w = this.options).onMutate) == null
					? void 0
					: b.call(w, this.state.variables));
				N !== this.state.context &&
					this.dispatch({
						type: "loading",
						context: N,
						variables: this.state.variables,
					});
			}
			const P = await t();
			return (
				await ((r = (i = this.mutationCache.config).onSuccess) == null
					? void 0
					: r.call(i, P, this.state.variables, this.state.context, this)),
				await ((s = (o = this.options).onSuccess) == null
					? void 0
					: s.call(o, P, this.state.variables, this.state.context)),
				await ((a = (l = this.mutationCache.config).onSettled) == null
					? void 0
					: a.call(l, P, null, this.state.variables, this.state.context, this)),
				await ((u = (d = this.options).onSettled) == null
					? void 0
					: u.call(d, P, null, this.state.variables, this.state.context)),
				this.dispatch({ type: "success", data: P }),
				P
			);
		} catch (P) {
			try {
				var E, C, g, h, v, m, _, O;
				throw (
					(await ((E = (C = this.mutationCache.config).onError) == null
						? void 0
						: E.call(C, P, this.state.variables, this.state.context, this)),
					await ((g = (h = this.options).onError) == null
						? void 0
						: g.call(h, P, this.state.variables, this.state.context)),
					await ((v = (m = this.mutationCache.config).onSettled) == null
						? void 0
						: v.call(
								m,
								void 0,
								P,
								this.state.variables,
								this.state.context,
								this
						  )),
					await ((_ = (O = this.options).onSettled) == null
						? void 0
						: _.call(O, void 0, P, this.state.variables, this.state.context)),
					P)
				);
			} finally {
				this.dispatch({ type: "error", error: P });
			}
		}
	}
	dispatch(t) {
		const n = (r) => {
			switch (t.type) {
				case "failed":
					return { ...r, failureCount: t.failureCount, failureReason: t.error };
				case "pause":
					return { ...r, isPaused: !0 };
				case "continue":
					return { ...r, isPaused: !1 };
				case "loading":
					return {
						...r,
						context: t.context,
						data: void 0,
						failureCount: 0,
						failureReason: null,
						error: null,
						isPaused: !Ol(this.options.networkMode),
						status: "loading",
						variables: t.variables,
					};
				case "success":
					return {
						...r,
						data: t.data,
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
						error: t.error,
						failureCount: r.failureCount + 1,
						failureReason: t.error,
						isPaused: !1,
						status: "error",
					};
				case "setState":
					return { ...r, ...t.state };
			}
		};
		(this.state = n(this.state)),
			Qe.batch(() => {
				this.observers.forEach((r) => {
					r.onMutationUpdate(t);
				}),
					this.mutationCache.notify({
						mutation: this,
						type: "updated",
						action: t,
					});
			});
	}
}
function fC() {
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
class hC extends go {
	constructor(t) {
		super(),
			(this.config = t || {}),
			(this.mutations = []),
			(this.mutationId = 0);
	}
	build(t, n, r) {
		const i = new dC({
			mutationCache: this,
			logger: t.getLogger(),
			mutationId: ++this.mutationId,
			options: t.defaultMutationOptions(n),
			state: r,
			defaultOptions: n.mutationKey
				? t.getMutationDefaults(n.mutationKey)
				: void 0,
		});
		return this.add(i), i;
	}
	add(t) {
		this.mutations.push(t), this.notify({ type: "added", mutation: t });
	}
	remove(t) {
		(this.mutations = this.mutations.filter((n) => n !== t)),
			this.notify({ type: "removed", mutation: t });
	}
	clear() {
		Qe.batch(() => {
			this.mutations.forEach((t) => {
				this.remove(t);
			});
		});
	}
	getAll() {
		return this.mutations;
	}
	find(t) {
		return (
			typeof t.exact > "u" && (t.exact = !0),
			this.mutations.find((n) => kp(t, n))
		);
	}
	findAll(t) {
		return this.mutations.filter((n) => kp(t, n));
	}
	notify(t) {
		Qe.batch(() => {
			this.listeners.forEach(({ listener: n }) => {
				n(t);
			});
		});
	}
	resumePausedMutations() {
		var t;
		return (
			(this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
				.then(() => {
					const n = this.mutations.filter((r) => r.state.isPaused);
					return Qe.batch(() =>
						n.reduce(
							(r, i) => r.then(() => i.continue().catch(Ft)),
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
function pC() {
	return {
		onFetch: (e) => {
			e.fetchFn = () => {
				var t, n, r, i, s, o;
				const a =
						(t = e.fetchOptions) == null || (n = t.meta) == null
							? void 0
							: n.refetchPage,
					l =
						(r = e.fetchOptions) == null || (i = r.meta) == null
							? void 0
							: i.fetchMore,
					u = l == null ? void 0 : l.pageParam,
					d = (l == null ? void 0 : l.direction) === "forward",
					f = (l == null ? void 0 : l.direction) === "backward",
					p = ((s = e.state.data) == null ? void 0 : s.pages) || [],
					b = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
				let w = b,
					E = !1;
				const C = (O) => {
						Object.defineProperty(O, "signal", {
							enumerable: !0,
							get: () => {
								var P;
								if ((P = e.signal) != null && P.aborted) E = !0;
								else {
									var N;
									(N = e.signal) == null ||
										N.addEventListener("abort", () => {
											E = !0;
										});
								}
								return e.signal;
							},
						});
					},
					g =
						e.options.queryFn ||
						(() =>
							Promise.reject(
								"Missing queryFn for queryKey '" + e.options.queryHash + "'"
							)),
					h = (O, P, N, V) => (
						(w = V ? [P, ...w] : [...w, P]), V ? [N, ...O] : [...O, N]
					),
					v = (O, P, N, V) => {
						if (E) return Promise.reject("Cancelled");
						if (typeof N > "u" && !P && O.length) return Promise.resolve(O);
						const K = {
							queryKey: e.queryKey,
							pageParam: N,
							meta: e.options.meta,
						};
						C(K);
						const ie = g(K);
						return Promise.resolve(ie).then((te) => h(O, N, te, V));
					};
				let m;
				if (!p.length) m = v([]);
				else if (d) {
					const O = typeof u < "u",
						P = O ? u : Ip(e.options, p);
					m = v(p, O, P);
				} else if (f) {
					const O = typeof u < "u",
						P = O ? u : mC(e.options, p);
					m = v(p, O, P, !0);
				} else {
					w = [];
					const O = typeof e.options.getNextPageParam > "u";
					m = (a && p[0] ? a(p[0], 0, p) : !0)
						? v([], O, b[0])
						: Promise.resolve(h([], b[0], p[0]));
					for (let N = 1; N < p.length; N++)
						m = m.then((V) => {
							if (a && p[N] ? a(p[N], N, p) : !0) {
								const ie = O ? b[N] : Ip(e.options, V);
								return v(V, O, ie);
							}
							return Promise.resolve(h(V, b[N], p[N]));
						});
				}
				return m.then((O) => ({ pages: O, pageParams: w }));
			};
		},
	};
}
function Ip(e, t) {
	return e.getNextPageParam == null
		? void 0
		: e.getNextPageParam(t[t.length - 1], t);
}
function mC(e, t) {
	return e.getPreviousPageParam == null
		? void 0
		: e.getPreviousPageParam(t[0], t);
}
class yC {
	constructor(t = {}) {
		(this.queryCache = t.queryCache || new cC()),
			(this.mutationCache = t.mutationCache || new hC()),
			(this.logger = t.logger || ff),
			(this.defaultOptions = t.defaultOptions || {}),
			(this.queryDefaults = []),
			(this.mutationDefaults = []),
			(this.mountCount = 0);
	}
	mount() {
		this.mountCount++,
			this.mountCount === 1 &&
				((this.unsubscribeFocus = Ja.subscribe(() => {
					Ja.isFocused() &&
						(this.resumePausedMutations(), this.queryCache.onFocus());
				})),
				(this.unsubscribeOnline = Ya.subscribe(() => {
					Ya.isOnline() &&
						(this.resumePausedMutations(), this.queryCache.onOnline());
				})));
	}
	unmount() {
		var t, n;
		this.mountCount--,
			this.mountCount === 0 &&
				((t = this.unsubscribeFocus) == null || t.call(this),
				(this.unsubscribeFocus = void 0),
				(n = this.unsubscribeOnline) == null || n.call(this),
				(this.unsubscribeOnline = void 0));
	}
	isFetching(t, n) {
		const [r] = Zn(t, n);
		return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
	}
	isMutating(t) {
		return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
	}
	getQueryData(t, n) {
		var r;
		return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
	}
	ensureQueryData(t, n, r) {
		const i = bs(t, n, r),
			s = this.getQueryData(i.queryKey);
		return s ? Promise.resolve(s) : this.fetchQuery(i);
	}
	getQueriesData(t) {
		return this.getQueryCache()
			.findAll(t)
			.map(({ queryKey: n, state: r }) => {
				const i = r.data;
				return [n, i];
			});
	}
	setQueryData(t, n, r) {
		const i = this.queryCache.find(t),
			s = i == null ? void 0 : i.state.data,
			o = nC(n, s);
		if (typeof o > "u") return;
		const a = bs(t),
			l = this.defaultQueryOptions(a);
		return this.queryCache.build(this, l).setData(o, { ...r, manual: !0 });
	}
	setQueriesData(t, n, r) {
		return Qe.batch(() =>
			this.getQueryCache()
				.findAll(t)
				.map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
		);
	}
	getQueryState(t, n) {
		var r;
		return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
	}
	removeQueries(t, n) {
		const [r] = Zn(t, n),
			i = this.queryCache;
		Qe.batch(() => {
			i.findAll(r).forEach((s) => {
				i.remove(s);
			});
		});
	}
	resetQueries(t, n, r) {
		const [i, s] = Zn(t, n, r),
			o = this.queryCache,
			a = { type: "active", ...i };
		return Qe.batch(
			() => (
				o.findAll(i).forEach((l) => {
					l.reset();
				}),
				this.refetchQueries(a, s)
			)
		);
	}
	cancelQueries(t, n, r) {
		const [i, s = {}] = Zn(t, n, r);
		typeof s.revert > "u" && (s.revert = !0);
		const o = Qe.batch(() =>
			this.queryCache.findAll(i).map((a) => a.cancel(s))
		);
		return Promise.all(o).then(Ft).catch(Ft);
	}
	invalidateQueries(t, n, r) {
		const [i, s] = Zn(t, n, r);
		return Qe.batch(() => {
			var o, a;
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
					(o = (a = i.refetchType) != null ? a : i.type) != null ? o : "active",
			};
			return this.refetchQueries(l, s);
		});
	}
	refetchQueries(t, n, r) {
		const [i, s] = Zn(t, n, r),
			o = Qe.batch(() =>
				this.queryCache
					.findAll(i)
					.filter((l) => !l.isDisabled())
					.map((l) => {
						var u;
						return l.fetch(void 0, {
							...s,
							cancelRefetch:
								(u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
							meta: { refetchPage: i.refetchPage },
						});
					})
			);
		let a = Promise.all(o).then(Ft);
		return (s != null && s.throwOnError) || (a = a.catch(Ft)), a;
	}
	fetchQuery(t, n, r) {
		const i = bs(t, n, r),
			s = this.defaultQueryOptions(i);
		typeof s.retry > "u" && (s.retry = !1);
		const o = this.queryCache.build(this, s);
		return o.isStaleByTime(s.staleTime)
			? o.fetch(s)
			: Promise.resolve(o.state.data);
	}
	prefetchQuery(t, n, r) {
		return this.fetchQuery(t, n, r).then(Ft).catch(Ft);
	}
	fetchInfiniteQuery(t, n, r) {
		const i = bs(t, n, r);
		return (i.behavior = pC()), this.fetchQuery(i);
	}
	prefetchInfiniteQuery(t, n, r) {
		return this.fetchInfiniteQuery(t, n, r).then(Ft).catch(Ft);
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
	setDefaultOptions(t) {
		this.defaultOptions = t;
	}
	setQueryDefaults(t, n) {
		const r = this.queryDefaults.find((i) => Lr(t) === Lr(i.queryKey));
		r
			? (r.defaultOptions = n)
			: this.queryDefaults.push({ queryKey: t, defaultOptions: n });
	}
	getQueryDefaults(t) {
		if (!t) return;
		const n = this.queryDefaults.find((r) => Ga(t, r.queryKey));
		return n == null ? void 0 : n.defaultOptions;
	}
	setMutationDefaults(t, n) {
		const r = this.mutationDefaults.find((i) => Lr(t) === Lr(i.mutationKey));
		r
			? (r.defaultOptions = n)
			: this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
	}
	getMutationDefaults(t) {
		if (!t) return;
		const n = this.mutationDefaults.find((r) => Ga(t, r.mutationKey));
		return n == null ? void 0 : n.defaultOptions;
	}
	defaultQueryOptions(t) {
		if (t != null && t._defaulted) return t;
		const n = {
			...this.defaultOptions.queries,
			...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
			...t,
			_defaulted: !0,
		};
		return (
			!n.queryHash && n.queryKey && (n.queryHash = df(n.queryKey, n)),
			typeof n.refetchOnReconnect > "u" &&
				(n.refetchOnReconnect = n.networkMode !== "always"),
			typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
			n
		);
	}
	defaultMutationOptions(t) {
		return t != null && t._defaulted
			? t
			: {
					...this.defaultOptions.mutations,
					...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
					...t,
					_defaulted: !0,
			  };
	}
	clear() {
		this.queryCache.clear(), this.mutationCache.clear();
	}
}
class gC extends go {
	constructor(t, n) {
		super(),
			(this.client = t),
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
			jp(this.currentQuery, this.options) && this.executeFetch(),
			this.updateTimers());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return Vc(this.currentQuery, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return Vc(
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
	setOptions(t, n) {
		const r = this.options,
			i = this.currentQuery;
		if (
			((this.options = this.client.defaultQueryOptions(t)),
			Rp(r, this.options) ||
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
		const s = this.hasListeners();
		s && Ap(this.currentQuery, i, this.options, r) && this.executeFetch(),
			this.updateResult(n),
			s &&
				(this.currentQuery !== i ||
					this.options.enabled !== r.enabled ||
					this.options.staleTime !== r.staleTime) &&
				this.updateStaleTimeout();
		const o = this.computeRefetchInterval();
		s &&
			(this.currentQuery !== i ||
				this.options.enabled !== r.enabled ||
				o !== this.currentRefetchInterval) &&
			this.updateRefetchInterval(o);
	}
	getOptimisticResult(t) {
		const n = this.client.getQueryCache().build(this.client, t),
			r = this.createResult(n, t);
		return (
			wC(this, r, t) &&
				((this.currentResult = r),
				(this.currentResultOptions = this.options),
				(this.currentResultState = this.currentQuery.state)),
			r
		);
	}
	getCurrentResult() {
		return this.currentResult;
	}
	trackResult(t) {
		const n = {};
		return (
			Object.keys(t).forEach((r) => {
				Object.defineProperty(n, r, {
					configurable: !1,
					enumerable: !0,
					get: () => (this.trackedProps.add(r), t[r]),
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
	refetch({ refetchPage: t, ...n } = {}) {
		return this.fetch({ ...n, meta: { refetchPage: t } });
	}
	fetchOptimistic(t) {
		const n = this.client.defaultQueryOptions(t),
			r = this.client.getQueryCache().build(this.client, n);
		return (
			(r.isFetchingOptimistic = !0),
			r.fetch().then(() => this.createResult(r, n))
		);
	}
	fetch(t) {
		var n;
		return this.executeFetch({
			...t,
			cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
		}).then(() => (this.updateResult(), this.currentResult));
	}
	executeFetch(t) {
		this.updateQuery();
		let n = this.currentQuery.fetch(this.options, t);
		return (t != null && t.throwOnError) || (n = n.catch(Ft)), n;
	}
	updateStaleTimeout() {
		if (
			(this.clearStaleTimeout(),
			to || this.currentResult.isStale || !Bc(this.options.staleTime))
		)
			return;
		const n = Rv(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
		this.staleTimeoutId = setTimeout(() => {
			this.currentResult.isStale || this.updateResult();
		}, n);
	}
	computeRefetchInterval() {
		var t;
		return typeof this.options.refetchInterval == "function"
			? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
			: (t = this.options.refetchInterval) != null
			? t
			: !1;
	}
	updateRefetchInterval(t) {
		this.clearRefetchInterval(),
			(this.currentRefetchInterval = t),
			!(
				to ||
				this.options.enabled === !1 ||
				!Bc(this.currentRefetchInterval) ||
				this.currentRefetchInterval === 0
			) &&
				(this.refetchIntervalId = setInterval(() => {
					(this.options.refetchIntervalInBackground || Ja.isFocused()) &&
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
	createResult(t, n) {
		const r = this.currentQuery,
			i = this.options,
			s = this.currentResult,
			o = this.currentResultState,
			a = this.currentResultOptions,
			l = t !== r,
			u = l ? t.state : this.currentQueryInitialState,
			d = l ? this.currentResult : this.previousQueryResult,
			{ state: f } = t;
		let {
				dataUpdatedAt: p,
				error: b,
				errorUpdatedAt: w,
				fetchStatus: E,
				status: C,
			} = f,
			g = !1,
			h = !1,
			v;
		if (n._optimisticResults) {
			const N = this.hasListeners(),
				V = !N && jp(t, n),
				K = N && Ap(t, r, n, i);
			(V || K) &&
				((E = Ol(t.options.networkMode) ? "fetching" : "paused"),
				p || (C = "loading")),
				n._optimisticResults === "isRestoring" && (E = "idle");
		}
		if (
			n.keepPreviousData &&
			!f.dataUpdatedAt &&
			d != null &&
			d.isSuccess &&
			C !== "error"
		)
			(v = d.data), (p = d.dataUpdatedAt), (C = d.status), (g = !0);
		else if (n.select && typeof f.data < "u")
			if (
				s &&
				f.data === (o == null ? void 0 : o.data) &&
				n.select === this.selectFn
			)
				v = this.selectResult;
			else
				try {
					(this.selectFn = n.select),
						(v = n.select(f.data)),
						(v = $c(s == null ? void 0 : s.data, v, n)),
						(this.selectResult = v),
						(this.selectError = null);
				} catch (N) {
					this.selectError = N;
				}
		else v = f.data;
		if (typeof n.placeholderData < "u" && typeof v > "u" && C === "loading") {
			let N;
			if (
				s != null &&
				s.isPlaceholderData &&
				n.placeholderData === (a == null ? void 0 : a.placeholderData)
			)
				N = s.data;
			else if (
				((N =
					typeof n.placeholderData == "function"
						? n.placeholderData()
						: n.placeholderData),
				n.select && typeof N < "u")
			)
				try {
					(N = n.select(N)), (this.selectError = null);
				} catch (V) {
					this.selectError = V;
				}
			typeof N < "u" &&
				((C = "success"),
				(v = $c(s == null ? void 0 : s.data, N, n)),
				(h = !0));
		}
		this.selectError &&
			((b = this.selectError),
			(v = this.selectResult),
			(w = Date.now()),
			(C = "error"));
		const m = E === "fetching",
			_ = C === "loading",
			O = C === "error";
		return {
			status: C,
			fetchStatus: E,
			isLoading: _,
			isSuccess: C === "success",
			isError: O,
			isInitialLoading: _ && m,
			data: v,
			dataUpdatedAt: p,
			error: b,
			errorUpdatedAt: w,
			failureCount: f.fetchFailureCount,
			failureReason: f.fetchFailureReason,
			errorUpdateCount: f.errorUpdateCount,
			isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
			isFetchedAfterMount:
				f.dataUpdateCount > u.dataUpdateCount ||
				f.errorUpdateCount > u.errorUpdateCount,
			isFetching: m,
			isRefetching: m && !_,
			isLoadingError: O && f.dataUpdatedAt === 0,
			isPaused: E === "paused",
			isPlaceholderData: h,
			isPreviousData: g,
			isRefetchError: O && f.dataUpdatedAt !== 0,
			isStale: hf(t, n),
			refetch: this.refetch,
			remove: this.remove,
		};
	}
	updateResult(t) {
		const n = this.currentResult,
			r = this.createResult(this.currentQuery, this.options);
		if (
			((this.currentResultState = this.currentQuery.state),
			(this.currentResultOptions = this.options),
			Rp(r, n))
		)
			return;
		this.currentResult = r;
		const i = { cache: !0 },
			s = () => {
				if (!n) return !0;
				const { notifyOnChangeProps: o } = this.options,
					a = typeof o == "function" ? o() : o;
				if (a === "all" || (!a && !this.trackedProps.size)) return !0;
				const l = new Set(a ?? this.trackedProps);
				return (
					this.options.useErrorBoundary && l.add("error"),
					Object.keys(this.currentResult).some((u) => {
						const d = u;
						return this.currentResult[d] !== n[d] && l.has(d);
					})
				);
			};
		(t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
			this.notify({ ...i, ...t });
	}
	updateQuery() {
		const t = this.client.getQueryCache().build(this.client, this.options);
		if (t === this.currentQuery) return;
		const n = this.currentQuery;
		(this.currentQuery = t),
			(this.currentQueryInitialState = t.state),
			(this.previousQueryResult = this.currentResult),
			this.hasListeners() &&
				(n == null || n.removeObserver(this), t.addObserver(this));
	}
	onQueryUpdate(t) {
		const n = {};
		t.type === "success"
			? (n.onSuccess = !t.manual)
			: t.type === "error" && !aa(t.error) && (n.onError = !0),
			this.updateResult(n),
			this.hasListeners() && this.updateTimers();
	}
	notify(t) {
		Qe.batch(() => {
			if (t.onSuccess) {
				var n, r, i, s;
				(n = (r = this.options).onSuccess) == null ||
					n.call(r, this.currentResult.data),
					(i = (s = this.options).onSettled) == null ||
						i.call(s, this.currentResult.data, null);
			} else if (t.onError) {
				var o, a, l, u;
				(o = (a = this.options).onError) == null ||
					o.call(a, this.currentResult.error),
					(l = (u = this.options).onSettled) == null ||
						l.call(u, void 0, this.currentResult.error);
			}
			t.listeners &&
				this.listeners.forEach(({ listener: d }) => {
					d(this.currentResult);
				}),
				t.cache &&
					this.client.getQueryCache().notify({
						query: this.currentQuery,
						type: "observerResultsUpdated",
					});
		});
	}
}
function vC(e, t) {
	return (
		t.enabled !== !1 &&
		!e.state.dataUpdatedAt &&
		!(e.state.status === "error" && t.retryOnMount === !1)
	);
}
function jp(e, t) {
	return vC(e, t) || (e.state.dataUpdatedAt > 0 && Vc(e, t, t.refetchOnMount));
}
function Vc(e, t, n) {
	if (t.enabled !== !1) {
		const r = typeof n == "function" ? n(e) : n;
		return r === "always" || (r !== !1 && hf(e, t));
	}
	return !1;
}
function Ap(e, t, n, r) {
	return (
		n.enabled !== !1 &&
		(e !== t || r.enabled === !1) &&
		(!n.suspense || e.state.status !== "error") &&
		hf(e, n)
	);
}
function hf(e, t) {
	return e.isStaleByTime(t.staleTime);
}
function wC(e, t, n) {
	return n.keepPreviousData
		? !1
		: n.placeholderData !== void 0
		? t.isPlaceholderData
		: e.getCurrentResult() !== t;
}
var Av = { exports: {} },
	Lv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = I;
function xC(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bC = typeof Object.is == "function" ? Object.is : xC,
	EC = $i.useState,
	SC = $i.useEffect,
	_C = $i.useLayoutEffect,
	CC = $i.useDebugValue;
function kC(e, t) {
	var n = t(),
		r = EC({ inst: { value: n, getSnapshot: t } }),
		i = r[0].inst,
		s = r[1];
	return (
		_C(
			function () {
				(i.value = n), (i.getSnapshot = t), _u(i) && s({ inst: i });
			},
			[e, n, t]
		),
		SC(
			function () {
				return (
					_u(i) && s({ inst: i }),
					e(function () {
						_u(i) && s({ inst: i });
					})
				);
			},
			[e]
		),
		CC(n),
		n
	);
}
function _u(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !bC(e, n);
	} catch {
		return !0;
	}
}
function RC(e, t) {
	return t();
}
var NC =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? RC
		: kC;
Lv.useSyncExternalStore =
	$i.useSyncExternalStore !== void 0 ? $i.useSyncExternalStore : NC;
Av.exports = Lv;
var OC = Av.exports;
const PC = OC.useSyncExternalStore,
	Lp = I.createContext(void 0),
	Dv = I.createContext(!1);
function Mv(e, t) {
	return (
		e ||
		(t && typeof window < "u"
			? (window.ReactQueryClientContext ||
					(window.ReactQueryClientContext = Lp),
			  window.ReactQueryClientContext)
			: Lp)
	);
}
const TC = ({ context: e } = {}) => {
		const t = I.useContext(Mv(e, I.useContext(Dv)));
		if (!t)
			throw new Error("No QueryClient set, use QueryClientProvider to set one");
		return t;
	},
	IC = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
		I.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e]
		);
		const i = Mv(n, r);
		return I.createElement(
			Dv.Provider,
			{ value: !n && r },
			I.createElement(i.Provider, { value: e }, t)
		);
	},
	Fv = I.createContext(!1),
	jC = () => I.useContext(Fv);
Fv.Provider;
function AC() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e,
	};
}
const LC = I.createContext(AC()),
	DC = () => I.useContext(LC);
function MC(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
const FC = (e, t) => {
		(e.suspense || e.useErrorBoundary) &&
			(t.isReset() || (e.retryOnMount = !1));
	},
	UC = (e) => {
		I.useEffect(() => {
			e.clearReset();
		}, [e]);
	},
	BC = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
		e.isError && !t.isReset() && !e.isFetching && MC(n, [e.error, r]),
	zC = (e) => {
		e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
	},
	$C = (e, t) => e.isLoading && e.isFetching && !t,
	VC = (e, t, n) => (e == null ? void 0 : e.suspense) && $C(t, n),
	HC = (e, t, n) =>
		t
			.fetchOptimistic(e)
			.then(({ data: r }) => {
				e.onSuccess == null || e.onSuccess(r),
					e.onSettled == null || e.onSettled(r, null);
			})
			.catch((r) => {
				n.clearReset(),
					e.onError == null || e.onError(r),
					e.onSettled == null || e.onSettled(void 0, r);
			});
function WC(e, t) {
	const n = TC({ context: e.context }),
		r = jC(),
		i = DC(),
		s = n.defaultQueryOptions(e);
	(s._optimisticResults = r ? "isRestoring" : "optimistic"),
		s.onError && (s.onError = Qe.batchCalls(s.onError)),
		s.onSuccess && (s.onSuccess = Qe.batchCalls(s.onSuccess)),
		s.onSettled && (s.onSettled = Qe.batchCalls(s.onSettled)),
		zC(s),
		FC(s, i),
		UC(i);
	const [o] = I.useState(() => new t(n, s)),
		a = o.getOptimisticResult(s);
	if (
		(PC(
			I.useCallback(
				(l) => {
					const u = r ? () => {} : o.subscribe(Qe.batchCalls(l));
					return o.updateResult(), u;
				},
				[o, r]
			),
			() => o.getCurrentResult(),
			() => o.getCurrentResult()
		),
		I.useEffect(() => {
			o.setOptions(s, { listeners: !1 });
		}, [s, o]),
		VC(s, a, r))
	)
		throw HC(s, o, i);
	if (
		BC({
			result: a,
			errorResetBoundary: i,
			useErrorBoundary: s.useErrorBoundary,
			query: o.getCurrentQuery(),
		})
	)
		throw a.error;
	return s.notifyOnChangeProps ? a : o.trackResult(a);
}
function Ji(e, t, n) {
	const r = bs(e, t, n);
	return WC(r, gC);
}
function Uv(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: qC } = Object.prototype,
	{ getPrototypeOf: pf } = Object,
	Pl = ((e) => (t) => {
		const n = qC.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	vn = (e) => ((e = e.toLowerCase()), (t) => Pl(t) === e),
	Tl = (e) => (t) => typeof t === e,
	{ isArray: Yi } = Array,
	no = Tl("undefined");
function KC(e) {
	return (
		e !== null &&
		!no(e) &&
		e.constructor !== null &&
		!no(e.constructor) &&
		Ht(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const Bv = vn("ArrayBuffer");
function QC(e) {
	let t;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Bv(e.buffer)),
		t
	);
}
const GC = Tl("string"),
	Ht = Tl("function"),
	zv = Tl("number"),
	Il = (e) => e !== null && typeof e == "object",
	JC = (e) => e === !0 || e === !1,
	la = (e) => {
		if (Pl(e) !== "object") return !1;
		const t = pf(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	YC = vn("Date"),
	XC = vn("File"),
	ZC = vn("Blob"),
	ek = vn("FileList"),
	tk = (e) => Il(e) && Ht(e.pipe),
	nk = (e) => {
		let t;
		return (
			e &&
			((typeof FormData == "function" && e instanceof FormData) ||
				(Ht(e.append) &&
					((t = Pl(e)) === "formdata" ||
						(t === "object" &&
							Ht(e.toString) &&
							e.toString() === "[object FormData]"))))
		);
	},
	rk = vn("URLSearchParams"),
	ik = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vo(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, i;
	if ((typeof e != "object" && (e = [e]), Yi(e)))
		for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			o = s.length;
		let a;
		for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
	}
}
function $v(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		i;
	for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
	return null;
}
const Vv = (() =>
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: global)(),
	Hv = (e) => !no(e) && e !== Vv;
function Hc() {
	const { caseless: e } = (Hv(this) && this) || {},
		t = {},
		n = (r, i) => {
			const s = (e && $v(t, i)) || i;
			la(t[s]) && la(r)
				? (t[s] = Hc(t[s], r))
				: la(r)
				? (t[s] = Hc({}, r))
				: Yi(r)
				? (t[s] = r.slice())
				: (t[s] = r);
		};
	for (let r = 0, i = arguments.length; r < i; r++)
		arguments[r] && vo(arguments[r], n);
	return t;
}
const sk = (e, t, n, { allOwnKeys: r } = {}) => (
		vo(
			t,
			(i, s) => {
				n && Ht(i) ? (e[s] = Uv(i, n)) : (e[s] = i);
			},
			{ allOwnKeys: r }
		),
		e
	),
	ok = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	ak = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, "super", { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	lk = (e, t, n, r) => {
		let i, s, o;
		const a = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
				(o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
			e = n !== !1 && pf(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	uk = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	ck = (e) => {
		if (!e) return null;
		if (Yi(e)) return e;
		let t = e.length;
		if (!zv(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	dk = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < "u" && pf(Uint8Array)),
	fk = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let i;
		for (; (i = r.next()) && !i.done; ) {
			const s = i.value;
			t.call(e, s[0], s[1]);
		}
	},
	hk = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	pk = vn("HTMLFormElement"),
	mk = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
			return r.toUpperCase() + i;
		}),
	Dp = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	yk = vn("RegExp"),
	Wv = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		vo(n, (i, s) => {
			t(i, s, e) !== !1 && (r[s] = i);
		}),
			Object.defineProperties(e, r);
	},
	gk = (e) => {
		Wv(e, (t, n) => {
			if (Ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
				return !1;
			const r = e[n];
			if (Ht(r)) {
				if (((t.enumerable = !1), "writable" in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	vk = (e, t) => {
		const n = {},
			r = (i) => {
				i.forEach((s) => {
					n[s] = !0;
				});
			};
		return Yi(e) ? r(e) : r(String(e).split(t)), n;
	},
	wk = () => {},
	xk = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	Cu = "abcdefghijklmnopqrstuvwxyz",
	Mp = "0123456789",
	qv = { DIGIT: Mp, ALPHA: Cu, ALPHA_DIGIT: Cu + Cu.toUpperCase() + Mp },
	bk = (e = 16, t = qv.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function Ek(e) {
	return !!(
		e &&
		Ht(e.append) &&
		e[Symbol.toStringTag] === "FormData" &&
		e[Symbol.iterator]
	);
}
const Sk = (e) => {
		const t = new Array(10),
			n = (r, i) => {
				if (Il(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[i] = r;
						const s = Yi(r) ? [] : {};
						return (
							vo(r, (o, a) => {
								const l = n(o, i + 1);
								!no(l) && (s[a] = l);
							}),
							(t[i] = void 0),
							s
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	_k = vn("AsyncFunction"),
	Ck = (e) => e && (Il(e) || Ht(e)) && Ht(e.then) && Ht(e.catch),
	L = {
		isArray: Yi,
		isArrayBuffer: Bv,
		isBuffer: KC,
		isFormData: nk,
		isArrayBufferView: QC,
		isString: GC,
		isNumber: zv,
		isBoolean: JC,
		isObject: Il,
		isPlainObject: la,
		isUndefined: no,
		isDate: YC,
		isFile: XC,
		isBlob: ZC,
		isRegExp: yk,
		isFunction: Ht,
		isStream: tk,
		isURLSearchParams: rk,
		isTypedArray: dk,
		isFileList: ek,
		forEach: vo,
		merge: Hc,
		extend: sk,
		trim: ik,
		stripBOM: ok,
		inherits: ak,
		toFlatObject: lk,
		kindOf: Pl,
		kindOfTest: vn,
		endsWith: uk,
		toArray: ck,
		forEachEntry: fk,
		matchAll: hk,
		isHTMLForm: pk,
		hasOwnProperty: Dp,
		hasOwnProp: Dp,
		reduceDescriptors: Wv,
		freezeMethods: gk,
		toObjectSet: vk,
		toCamelCase: mk,
		noop: wk,
		toFiniteNumber: xk,
		findKey: $v,
		global: Vv,
		isContextDefined: Hv,
		ALPHABET: qv,
		generateString: bk,
		isSpecCompliantForm: Ek,
		toJSONObject: Sk,
		isAsyncFn: _k,
		isThenable: Ck,
	};
function xe(e, t, n, r, i) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = "AxiosError"),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		i && (this.response = i);
}
L.inherits(xe, Error, {
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
			config: L.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status ? this.response.status : null,
		};
	},
});
const Kv = xe.prototype,
	Qv = {};
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
].forEach((e) => {
	Qv[e] = { value: e };
});
Object.defineProperties(xe, Qv);
Object.defineProperty(Kv, "isAxiosError", { value: !0 });
xe.from = (e, t, n, r, i, s) => {
	const o = Object.create(Kv);
	return (
		L.toFlatObject(
			e,
			o,
			function (l) {
				return l !== Error.prototype;
			},
			(a) => a !== "isAxiosError"
		),
		xe.call(o, e.message, t, n, r, i),
		(o.cause = e),
		(o.name = e.name),
		s && Object.assign(o, s),
		o
	);
};
const kk = null;
function Wc(e) {
	return L.isPlainObject(e) || L.isArray(e);
}
function Gv(e) {
	return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fp(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (i, s) {
					return (i = Gv(i)), !n && s ? "[" + i + "]" : i;
				})
				.join(n ? "." : "")
		: t;
}
function Rk(e) {
	return L.isArray(e) && !e.some(Wc);
}
const Nk = L.toFlatObject(L, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function jl(e, t, n) {
	if (!L.isObject(e)) throw new TypeError("target must be an object");
	(t = t || new FormData()),
		(n = L.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (E, C) {
				return !L.isUndefined(C[E]);
			}
		));
	const r = n.metaTokens,
		i = n.visitor || d,
		s = n.dots,
		o = n.indexes,
		l = (n.Blob || (typeof Blob < "u" && Blob)) && L.isSpecCompliantForm(t);
	if (!L.isFunction(i)) throw new TypeError("visitor must be a function");
	function u(w) {
		if (w === null) return "";
		if (L.isDate(w)) return w.toISOString();
		if (!l && L.isBlob(w))
			throw new xe("Blob is not supported. Use a Buffer instead.");
		return L.isArrayBuffer(w) || L.isTypedArray(w)
			? l && typeof Blob == "function"
				? new Blob([w])
				: Buffer.from(w)
			: w;
	}
	function d(w, E, C) {
		let g = w;
		if (w && !C && typeof w == "object") {
			if (L.endsWith(E, "{}"))
				(E = r ? E : E.slice(0, -2)), (w = JSON.stringify(w));
			else if (
				(L.isArray(w) && Rk(w)) ||
				((L.isFileList(w) || L.endsWith(E, "[]")) && (g = L.toArray(w)))
			)
				return (
					(E = Gv(E)),
					g.forEach(function (v, m) {
						!(L.isUndefined(v) || v === null) &&
							t.append(
								o === !0 ? Fp([E], m, s) : o === null ? E : E + "[]",
								u(v)
							);
					}),
					!1
				);
		}
		return Wc(w) ? !0 : (t.append(Fp(C, E, s), u(w)), !1);
	}
	const f = [],
		p = Object.assign(Nk, {
			defaultVisitor: d,
			convertValue: u,
			isVisitable: Wc,
		});
	function b(w, E) {
		if (!L.isUndefined(w)) {
			if (f.indexOf(w) !== -1)
				throw Error("Circular reference detected in " + E.join("."));
			f.push(w),
				L.forEach(w, function (g, h) {
					(!(L.isUndefined(g) || g === null) &&
						i.call(t, g, L.isString(h) ? h.trim() : h, E, p)) === !0 &&
						b(g, E ? E.concat(h) : [h]);
				}),
				f.pop();
		}
	}
	if (!L.isObject(e)) throw new TypeError("data must be an object");
	return b(e), t;
}
function Up(e) {
	const t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0",
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function mf(e, t) {
	(this._pairs = []), e && jl(e, this, t);
}
const Jv = mf.prototype;
Jv.append = function (t, n) {
	this._pairs.push([t, n]);
};
Jv.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, Up);
		  }
		: Up;
	return this._pairs
		.map(function (i) {
			return n(i[0]) + "=" + n(i[1]);
		}, "")
		.join("&");
};
function Ok(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function Yv(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || Ok,
		i = n && n.serialize;
	let s;
	if (
		(i
			? (s = i(t, n))
			: (s = L.isURLSearchParams(t) ? t.toString() : new mf(t, n).toString(r)),
		s)
	) {
		const o = e.indexOf("#");
		o !== -1 && (e = e.slice(0, o)),
			(e += (e.indexOf("?") === -1 ? "?" : "&") + s);
	}
	return e;
}
class Pk {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		L.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const Bp = Pk,
	Xv = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	Tk = typeof URLSearchParams < "u" ? URLSearchParams : mf,
	Ik = typeof FormData < "u" ? FormData : null,
	jk = typeof Blob < "u" ? Blob : null,
	Ak = (() => {
		let e;
		return typeof navigator < "u" &&
			((e = navigator.product) === "ReactNative" ||
				e === "NativeScript" ||
				e === "NS")
			? !1
			: typeof window < "u" && typeof document < "u";
	})(),
	Lk = (() =>
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function")(),
	dn = {
		isBrowser: !0,
		classes: { URLSearchParams: Tk, FormData: Ik, Blob: jk },
		isStandardBrowserEnv: Ak,
		isStandardBrowserWebWorkerEnv: Lk,
		protocols: ["http", "https", "file", "blob", "url", "data"],
	};
function Dk(e, t) {
	return jl(
		e,
		new dn.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, i, s) {
					return dn.isNode && L.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: s.defaultVisitor.apply(this, arguments);
				},
			},
			t
		)
	);
}
function Mk(e) {
	return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
		t[0] === "[]" ? "" : t[1] || t[0]
	);
}
function Fk(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const i = n.length;
	let s;
	for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
	return t;
}
function Zv(e) {
	function t(n, r, i, s) {
		let o = n[s++];
		const a = Number.isFinite(+o),
			l = s >= n.length;
		return (
			(o = !o && L.isArray(i) ? i.length : o),
			l
				? (L.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
				: ((!i[o] || !L.isObject(i[o])) && (i[o] = []),
				  t(n, r, i[o], s) && L.isArray(i[o]) && (i[o] = Fk(i[o])),
				  !a)
		);
	}
	if (L.isFormData(e) && L.isFunction(e.entries)) {
		const n = {};
		return (
			L.forEachEntry(e, (r, i) => {
				t(Mk(r), i, n, 0);
			}),
			n
		);
	}
	return null;
}
const Uk = { "Content-Type": void 0 };
function Bk(e, t, n) {
	if (L.isString(e))
		try {
			return (t || JSON.parse)(e), L.trim(e);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (n || JSON.stringify)(e);
}
const Al = {
	transitional: Xv,
	adapter: ["xhr", "http"],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || "",
				i = r.indexOf("application/json") > -1,
				s = L.isObject(t);
			if ((s && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t)))
				return i && i ? JSON.stringify(Zv(t)) : t;
			if (
				L.isArrayBuffer(t) ||
				L.isBuffer(t) ||
				L.isStream(t) ||
				L.isFile(t) ||
				L.isBlob(t)
			)
				return t;
			if (L.isArrayBufferView(t)) return t.buffer;
			if (L.isURLSearchParams(t))
				return (
					n.setContentType(
						"application/x-www-form-urlencoded;charset=utf-8",
						!1
					),
					t.toString()
				);
			let a;
			if (s) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1)
					return Dk(t, this.formSerializer).toString();
				if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
					const l = this.env && this.env.FormData;
					return jl(
						a ? { "files[]": t } : t,
						l && new l(),
						this.formSerializer
					);
				}
			}
			return s || i ? (n.setContentType("application/json", !1), Bk(t)) : t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || Al.transitional,
				r = n && n.forcedJSONParsing,
				i = this.responseType === "json";
			if (t && L.isString(t) && ((r && !this.responseType) || i)) {
				const o = !(n && n.silentJSONParsing) && i;
				try {
					return JSON.parse(t);
				} catch (a) {
					if (o)
						throw a.name === "SyntaxError"
							? xe.from(a, xe.ERR_BAD_RESPONSE, this, null, this.response)
							: a;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: dn.classes.FormData, Blob: dn.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: { common: { Accept: "application/json, text/plain, */*" } },
};
L.forEach(["delete", "get", "head"], function (t) {
	Al.headers[t] = {};
});
L.forEach(["post", "put", "patch"], function (t) {
	Al.headers[t] = L.merge(Uk);
});
const yf = Al,
	zk = L.toObjectSet([
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
	$k = (e) => {
		const t = {};
		let n, r, i;
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (o) {
						(i = o.indexOf(":")),
							(n = o.substring(0, i).trim().toLowerCase()),
							(r = o.substring(i + 1).trim()),
							!(!n || (t[n] && zk[n])) &&
								(n === "set-cookie"
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ", " + r : r));
					}),
			t
		);
	},
	zp = Symbol("internals");
function hs(e) {
	return e && String(e).trim().toLowerCase();
}
function ua(e) {
	return e === !1 || e == null ? e : L.isArray(e) ? e.map(ua) : String(e);
}
function Vk(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const Hk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ku(e, t, n, r, i) {
	if (L.isFunction(r)) return r.call(this, t, n);
	if ((i && (t = n), !!L.isString(t))) {
		if (L.isString(r)) return t.indexOf(r) !== -1;
		if (L.isRegExp(r)) return r.test(t);
	}
}
function Wk(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qk(e, t) {
	const n = L.toCamelCase(" " + t);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (i, s, o) {
				return this[r].call(this, t, i, s, o);
			},
			configurable: !0,
		});
	});
}
class Ll {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const i = this;
		function s(a, l, u) {
			const d = hs(l);
			if (!d) throw new Error("header name must be a non-empty string");
			const f = L.findKey(i, d);
			(!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
				(i[f || l] = ua(a));
		}
		const o = (a, l) => L.forEach(a, (u, d) => s(u, d, l));
		return (
			L.isPlainObject(t) || t instanceof this.constructor
				? o(t, n)
				: L.isString(t) && (t = t.trim()) && !Hk(t)
				? o($k(t), n)
				: t != null && s(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = hs(t)), t)) {
			const r = L.findKey(this, t);
			if (r) {
				const i = this[r];
				if (!n) return i;
				if (n === !0) return Vk(i);
				if (L.isFunction(n)) return n.call(this, i, r);
				if (L.isRegExp(n)) return n.exec(i);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(t, n) {
		if (((t = hs(t)), t)) {
			const r = L.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || ku(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let i = !1;
		function s(o) {
			if (((o = hs(o)), o)) {
				const a = L.findKey(r, o);
				a && (!n || ku(r, r[a], a, n)) && (delete r[a], (i = !0));
			}
		}
		return L.isArray(t) ? t.forEach(s) : s(t), i;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			i = !1;
		for (; r--; ) {
			const s = n[r];
			(!t || ku(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
		}
		return i;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			L.forEach(this, (i, s) => {
				const o = L.findKey(r, s);
				if (o) {
					(n[o] = ua(i)), delete n[s];
					return;
				}
				const a = t ? Wk(s) : String(s).trim();
				a !== s && delete n[s], (n[a] = ua(i)), (r[a] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			L.forEach(this, (r, i) => {
				r != null && r !== !1 && (n[i] = t && L.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((i) => r.set(i)), r;
	}
	static accessor(t) {
		const r = (this[zp] = this[zp] = { accessors: {} }).accessors,
			i = this.prototype;
		function s(o) {
			const a = hs(o);
			r[a] || (qk(i, o), (r[a] = !0));
		}
		return L.isArray(t) ? t.forEach(s) : s(t), this;
	}
}
Ll.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
L.freezeMethods(Ll.prototype);
L.freezeMethods(Ll);
const An = Ll;
function Ru(e, t) {
	const n = this || yf,
		r = t || n,
		i = An.from(r.headers);
	let s = r.data;
	return (
		L.forEach(e, function (a) {
			s = a.call(n, s, i.normalize(), t ? t.status : void 0);
		}),
		i.normalize(),
		s
	);
}
function e0(e) {
	return !!(e && e.__CANCEL__);
}
function wo(e, t, n) {
	xe.call(this, e ?? "canceled", xe.ERR_CANCELED, t, n),
		(this.name = "CanceledError");
}
L.inherits(wo, xe, { __CANCEL__: !0 });
function Kk(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new xe(
					"Request failed with status code " + n.status,
					[xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n
				)
		  );
}
const Qk = dn.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, r, i, s, o, a) {
					const l = [];
					l.push(n + "=" + encodeURIComponent(r)),
						L.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()),
						L.isString(s) && l.push("path=" + s),
						L.isString(o) && l.push("domain=" + o),
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
function Gk(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jk(e, t) {
	return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function t0(e, t) {
	return e && !Gk(t) ? Jk(e, t) : t;
}
const Yk = dn.isStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			let r;
			function i(s) {
				let o = s;
				return (
					t && (n.setAttribute("href", o), (o = n.href)),
					n.setAttribute("href", o),
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
				function (o) {
					const a = L.isString(o) ? i(o) : o;
					return a.protocol === r.protocol && a.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function Xk(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || "";
}
function Zk(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let i = 0,
		s = 0,
		o;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (l) {
			const u = Date.now(),
				d = r[s];
			o || (o = u), (n[i] = l), (r[i] = u);
			let f = s,
				p = 0;
			for (; f !== i; ) (p += n[f++]), (f = f % e);
			if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
			const b = d && u - d;
			return b ? Math.round((p * 1e3) / b) : void 0;
		}
	);
}
function $p(e, t) {
	let n = 0;
	const r = Zk(50, 250);
	return (i) => {
		const s = i.loaded,
			o = i.lengthComputable ? i.total : void 0,
			a = s - n,
			l = r(a),
			u = s <= o;
		n = s;
		const d = {
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: a,
			rate: l || void 0,
			estimated: l && o && u ? (o - s) / l : void 0,
			event: i,
		};
		(d[t ? "download" : "upload"] = !0), e(d);
	};
}
const eR = typeof XMLHttpRequest < "u",
	tR =
		eR &&
		function (e) {
			return new Promise(function (n, r) {
				let i = e.data;
				const s = An.from(e.headers).normalize(),
					o = e.responseType;
				let a;
				function l() {
					e.cancelToken && e.cancelToken.unsubscribe(a),
						e.signal && e.signal.removeEventListener("abort", a);
				}
				L.isFormData(i) &&
					(dn.isStandardBrowserEnv || dn.isStandardBrowserWebWorkerEnv
						? s.setContentType(!1)
						: s.setContentType("multipart/form-data;", !1));
				let u = new XMLHttpRequest();
				if (e.auth) {
					const b = e.auth.username || "",
						w = e.auth.password
							? unescape(encodeURIComponent(e.auth.password))
							: "";
					s.set("Authorization", "Basic " + btoa(b + ":" + w));
				}
				const d = t0(e.baseURL, e.url);
				u.open(e.method.toUpperCase(), Yv(d, e.params, e.paramsSerializer), !0),
					(u.timeout = e.timeout);
				function f() {
					if (!u) return;
					const b = An.from(
							"getAllResponseHeaders" in u && u.getAllResponseHeaders()
						),
						E = {
							data:
								!o || o === "text" || o === "json"
									? u.responseText
									: u.response,
							status: u.status,
							statusText: u.statusText,
							headers: b,
							config: e,
							request: u,
						};
					Kk(
						function (g) {
							n(g), l();
						},
						function (g) {
							r(g), l();
						},
						E
					),
						(u = null);
				}
				if (
					("onloadend" in u
						? (u.onloadend = f)
						: (u.onreadystatechange = function () {
								!u ||
									u.readyState !== 4 ||
									(u.status === 0 &&
										!(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
									setTimeout(f);
						  }),
					(u.onabort = function () {
						u &&
							(r(new xe("Request aborted", xe.ECONNABORTED, e, u)), (u = null));
					}),
					(u.onerror = function () {
						r(new xe("Network Error", xe.ERR_NETWORK, e, u)), (u = null);
					}),
					(u.ontimeout = function () {
						let w = e.timeout
							? "timeout of " + e.timeout + "ms exceeded"
							: "timeout exceeded";
						const E = e.transitional || Xv;
						e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
							r(
								new xe(
									w,
									E.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
									e,
									u
								)
							),
							(u = null);
					}),
					dn.isStandardBrowserEnv)
				) {
					const b =
						(e.withCredentials || Yk(d)) &&
						e.xsrfCookieName &&
						Qk.read(e.xsrfCookieName);
					b && s.set(e.xsrfHeaderName, b);
				}
				i === void 0 && s.setContentType(null),
					"setRequestHeader" in u &&
						L.forEach(s.toJSON(), function (w, E) {
							u.setRequestHeader(E, w);
						}),
					L.isUndefined(e.withCredentials) ||
						(u.withCredentials = !!e.withCredentials),
					o && o !== "json" && (u.responseType = e.responseType),
					typeof e.onDownloadProgress == "function" &&
						u.addEventListener("progress", $p(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == "function" &&
						u.upload &&
						u.upload.addEventListener("progress", $p(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((a = (b) => {
							u &&
								(r(!b || b.type ? new wo(null, e, u) : b),
								u.abort(),
								(u = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(a),
						e.signal &&
							(e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
				const p = Xk(d);
				if (p && dn.protocols.indexOf(p) === -1) {
					r(new xe("Unsupported protocol " + p + ":", xe.ERR_BAD_REQUEST, e));
					return;
				}
				u.send(i || null);
			});
		},
	ca = { http: kk, xhr: tR };
L.forEach(ca, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
const nR = {
	getAdapter: (e) => {
		e = L.isArray(e) ? e : [e];
		const { length: t } = e;
		let n, r;
		for (
			let i = 0;
			i < t && ((n = e[i]), !(r = L.isString(n) ? ca[n.toLowerCase()] : n));
			i++
		);
		if (!r)
			throw r === !1
				? new xe(
						`Adapter ${n} is not supported by the environment`,
						"ERR_NOT_SUPPORT"
				  )
				: new Error(
						L.hasOwnProp(ca, n)
							? `Adapter '${n}' is not available in the build`
							: `Unknown adapter '${n}'`
				  );
		if (!L.isFunction(r)) throw new TypeError("adapter is not a function");
		return r;
	},
	adapters: ca,
};
function Nu(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new wo(null, e);
}
function Vp(e) {
	return (
		Nu(e),
		(e.headers = An.from(e.headers)),
		(e.data = Ru.call(e, e.transformRequest)),
		["post", "put", "patch"].indexOf(e.method) !== -1 &&
			e.headers.setContentType("application/x-www-form-urlencoded", !1),
		nR
			.getAdapter(e.adapter || yf.adapter)(e)
			.then(
				function (r) {
					return (
						Nu(e),
						(r.data = Ru.call(e, e.transformResponse, r)),
						(r.headers = An.from(r.headers)),
						r
					);
				},
				function (r) {
					return (
						e0(r) ||
							(Nu(e),
							r &&
								r.response &&
								((r.response.data = Ru.call(
									e,
									e.transformResponse,
									r.response
								)),
								(r.response.headers = An.from(r.response.headers)))),
						Promise.reject(r)
					);
				}
			)
	);
}
const Hp = (e) => (e instanceof An ? e.toJSON() : e);
function Vi(e, t) {
	t = t || {};
	const n = {};
	function r(u, d, f) {
		return L.isPlainObject(u) && L.isPlainObject(d)
			? L.merge.call({ caseless: f }, u, d)
			: L.isPlainObject(d)
			? L.merge({}, d)
			: L.isArray(d)
			? d.slice()
			: d;
	}
	function i(u, d, f) {
		if (L.isUndefined(d)) {
			if (!L.isUndefined(u)) return r(void 0, u, f);
		} else return r(u, d, f);
	}
	function s(u, d) {
		if (!L.isUndefined(d)) return r(void 0, d);
	}
	function o(u, d) {
		if (L.isUndefined(d)) {
			if (!L.isUndefined(u)) return r(void 0, u);
		} else return r(void 0, d);
	}
	function a(u, d, f) {
		if (f in t) return r(u, d);
		if (f in e) return r(void 0, u);
	}
	const l = {
		url: s,
		method: s,
		data: s,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		responseEncoding: o,
		validateStatus: a,
		headers: (u, d) => i(Hp(u), Hp(d), !0),
	};
	return (
		L.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
			const f = l[d] || i,
				p = f(e[d], t[d], d);
			(L.isUndefined(p) && f !== a) || (n[d] = p);
		}),
		n
	);
}
const n0 = "1.4.0",
	gf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
	(e, t) => {
		gf[e] = function (r) {
			return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
		};
	}
);
const Wp = {};
gf.transitional = function (t, n, r) {
	function i(s, o) {
		return (
			"[Axios v" +
			n0 +
			"] Transitional option '" +
			s +
			"'" +
			o +
			(r ? ". " + r : "")
		);
	}
	return (s, o, a) => {
		if (t === !1)
			throw new xe(
				i(o, " has been removed" + (n ? " in " + n : "")),
				xe.ERR_DEPRECATED
			);
		return (
			n &&
				!Wp[o] &&
				((Wp[o] = !0),
				console.warn(
					i(
						o,
						" has been deprecated since v" +
							n +
							" and will be removed in the near future"
					)
				)),
			t ? t(s, o, a) : !0
		);
	};
};
function rR(e, t, n) {
	if (typeof e != "object")
		throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let i = r.length;
	for (; i-- > 0; ) {
		const s = r[i],
			o = t[s];
		if (o) {
			const a = e[s],
				l = a === void 0 || o(a, s, e);
			if (l !== !0)
				throw new xe("option " + s + " must be " + l, xe.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new xe("Unknown option " + s, xe.ERR_BAD_OPTION);
	}
}
const qc = { assertOptions: rR, validators: gf },
	Gn = qc.validators;
class Xa {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = { request: new Bp(), response: new Bp() });
	}
	request(t, n) {
		typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = Vi(this.defaults, n));
		const { transitional: r, paramsSerializer: i, headers: s } = n;
		r !== void 0 &&
			qc.assertOptions(
				r,
				{
					silentJSONParsing: Gn.transitional(Gn.boolean),
					forcedJSONParsing: Gn.transitional(Gn.boolean),
					clarifyTimeoutError: Gn.transitional(Gn.boolean),
				},
				!1
			),
			i != null &&
				(L.isFunction(i)
					? (n.paramsSerializer = { serialize: i })
					: qc.assertOptions(
							i,
							{ encode: Gn.function, serialize: Gn.function },
							!0
					  )),
			(n.method = (n.method || this.defaults.method || "get").toLowerCase());
		let o;
		(o = s && L.merge(s.common, s[n.method])),
			o &&
				L.forEach(
					["delete", "get", "head", "post", "put", "patch", "common"],
					(w) => {
						delete s[w];
					}
				),
			(n.headers = An.concat(o, s));
		const a = [];
		let l = !0;
		this.interceptors.request.forEach(function (E) {
			(typeof E.runWhen == "function" && E.runWhen(n) === !1) ||
				((l = l && E.synchronous), a.unshift(E.fulfilled, E.rejected));
		});
		const u = [];
		this.interceptors.response.forEach(function (E) {
			u.push(E.fulfilled, E.rejected);
		});
		let d,
			f = 0,
			p;
		if (!l) {
			const w = [Vp.bind(this), void 0];
			for (
				w.unshift.apply(w, a),
					w.push.apply(w, u),
					p = w.length,
					d = Promise.resolve(n);
				f < p;

			)
				d = d.then(w[f++], w[f++]);
			return d;
		}
		p = a.length;
		let b = n;
		for (f = 0; f < p; ) {
			const w = a[f++],
				E = a[f++];
			try {
				b = w(b);
			} catch (C) {
				E.call(this, C);
				break;
			}
		}
		try {
			d = Vp.call(this, b);
		} catch (w) {
			return Promise.reject(w);
		}
		for (f = 0, p = u.length; f < p; ) d = d.then(u[f++], u[f++]);
		return d;
	}
	getUri(t) {
		t = Vi(this.defaults, t);
		const n = t0(t.baseURL, t.url);
		return Yv(n, t.params, t.paramsSerializer);
	}
}
L.forEach(["delete", "get", "head", "options"], function (t) {
	Xa.prototype[t] = function (n, r) {
		return this.request(
			Vi(r || {}, { method: t, url: n, data: (r || {}).data })
		);
	};
});
L.forEach(["post", "put", "patch"], function (t) {
	function n(r) {
		return function (s, o, a) {
			return this.request(
				Vi(a || {}, {
					method: t,
					headers: r ? { "Content-Type": "multipart/form-data" } : {},
					url: s,
					data: o,
				})
			);
		};
	}
	(Xa.prototype[t] = n()), (Xa.prototype[t + "Form"] = n(!0));
});
const da = Xa;
class vf {
	constructor(t) {
		if (typeof t != "function")
			throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (s) {
			n = s;
		});
		const r = this;
		this.promise.then((i) => {
			if (!r._listeners) return;
			let s = r._listeners.length;
			for (; s-- > 0; ) r._listeners[s](i);
			r._listeners = null;
		}),
			(this.promise.then = (i) => {
				let s;
				const o = new Promise((a) => {
					r.subscribe(a), (s = a);
				}).then(i);
				return (
					(o.cancel = function () {
						r.unsubscribe(s);
					}),
					o
				);
			}),
			t(function (s, o, a) {
				r.reason || ((r.reason = new wo(s, o, a)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let t;
		return {
			token: new vf(function (i) {
				t = i;
			}),
			cancel: t,
		};
	}
}
const iR = vf;
function sR(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function oR(e) {
	return L.isObject(e) && e.isAxiosError === !0;
}
const Kc = {
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
Object.entries(Kc).forEach(([e, t]) => {
	Kc[t] = e;
});
const aR = Kc;
function r0(e) {
	const t = new da(e),
		n = Uv(da.prototype.request, t);
	return (
		L.extend(n, da.prototype, t, { allOwnKeys: !0 }),
		L.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (i) {
			return r0(Vi(e, i));
		}),
		n
	);
}
const tt = r0(yf);
tt.Axios = da;
tt.CanceledError = wo;
tt.CancelToken = iR;
tt.isCancel = e0;
tt.VERSION = n0;
tt.toFormData = jl;
tt.AxiosError = xe;
tt.Cancel = tt.CanceledError;
tt.all = function (t) {
	return Promise.all(t);
};
tt.spread = sR;
tt.isAxiosError = oR;
tt.mergeConfig = Vi;
tt.AxiosHeaders = An;
tt.formToJSON = (e) => Zv(L.isHTMLForm(e) ? new FormData(e) : e);
tt.HttpStatusCode = aR;
tt.default = tt;
const lR = tt,
	uR = lR.create({
		baseURL: "https://college-booking-programmershipon.vercel.app/",
	}),
	Xi = () => ({ axiosCall: uR }),
	cR = () => {
		const { axiosCall: e } = Xi(),
			{ authLoading: t } = on(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Ji({
				queryKey: ["threeClg"],
				enabled: !t,
				queryFn: async () => (await e("/three-college")).data,
			});
		return { threeCLg: n, threeClgLoading: r, threeClgRefetch: i };
	},
	dR = () => {
		const { threeCLg: e, threeClgLoading: t, threeClgRefetch: n } = cR();
		return (
			console.log("threeCLg -> ", e),
			c.jsx(c.Fragment, {
				children: c.jsx("section", {
					className: "text-gray-600 body-font",
					children: c.jsxs("div", {
						className: "container px-5 py-16 mx-auto",
						children: [
							c.jsxs("div", {
								className: "flex flex-col text-center w-full mb-20",
								children: [
									c.jsx("h1", {
										className:
											"text-2xl font-medium title-font mb-4 text-gray-900",
										children: "Top Colleges",
									}),
									c.jsx("p", {
										className: "lg:w-2/3 mx-auto leading-relaxed text-base",
										children:
											"Explore our list of top colleges known for their exceptional educational standards",
									}),
								],
							}),
							c.jsx("div", {
								className:
									"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5",
								children:
									e &&
									(e == null
										? void 0
										: e.map((r, i) =>
												c.jsxs(
													"div",
													{
														className: "border flex flex-col justify-between",
														children: [
															c.jsxs("div", {
																className:
																	"h-full flex flex-col items-center bg-slate-100",
																children: [
																	c.jsx("img", {
																		alt: "team",
																		className:
																			"flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4",
																		src: r == null ? void 0 : r.image,
																	}),
																	c.jsxs("div", {
																		className: "w-full px-4",
																		children: [
																			c.jsx("h2", {
																				className:
																					"title-font font-medium text-lg text-gray-900",
																				children: r == null ? void 0 : r.name,
																			}),
																			c.jsxs("h3", {
																				className: "text-gray-500 mb-3",
																				children: [
																					c.jsx("span", {
																						children: " Admission Date : ",
																					}),
																					" ",
																					r == null ? void 0 : r.admissionDates,
																				],
																			}),
																			c.jsxs("div", {
																				className: "",
																				children: [
																					c.jsx("h2", {
																						className: "font-bold mb-2 mt-3",
																						children: " Events: ",
																					}),
																					(r == null ? void 0 : r.events) &&
																						(r == null
																							? void 0
																							: r.events.map((s, o) =>
																									c.jsx(
																										"span",
																										{
																											className:
																												"py-1 text-sm inline-block",
																											children: c.jsxs("h3", {
																												className:
																													"font-medium bg-slate-200  p-1 mr-2",
																												children: [
																													" ",
																													s == null
																														? void 0
																														: s.name,
																													",",
																												],
																											}),
																										},
																										o
																									)
																							  )),
																				],
																			}),
																			c.jsxs("div", {
																				className: "",
																				children: [
																					c.jsxs("h2", {
																						className: "font-bold mb-2 mt-3",
																						children: [
																							" ",
																							"Research History:",
																							" ",
																						],
																					}),
																					c.jsx("div", {
																						className: "flex gap-1 flex-wrap",
																						children:
																							(r == null
																								? void 0
																								: r.researchHistory) &&
																							(r == null
																								? void 0
																								: r.researchHistory.map(
																										(s, o) =>
																											c.jsx(
																												"span",
																												{
																													className:
																														"font-medium bg-slate-200  p-1 mr-2",
																													children:
																														s == null
																															? void 0
																															: s.title,
																												},
																												o
																											)
																								  )),
																					}),
																				],
																			}),
																			c.jsxs("div", {
																				className: "",
																				children: [
																					c.jsx("h2", {
																						className: "font-bold mb-2 mt-3",
																						children: " Sports: ",
																					}),
																					(r == null ? void 0 : r.sports) &&
																						(r == null
																							? void 0
																							: r.sports.map((s) =>
																									c.jsx(c.Fragment, {
																										children: c.jsx("span", {
																											className:
																												"font-medium bg-slate-200  p-1 mr-2",
																											children:
																												s == null
																													? void 0
																													: s.name,
																										}),
																									})
																							  )),
																				],
																			}),
																		],
																	}),
																],
															}),
															c.jsxs(br, {
																to: `/three-college/${
																	r == null ? void 0 : r._id
																}`,
																className:
																	"w-full bg-blue-400 transition duration-300 py-2 text-center text-gray-800 hover:bg-blue-600 hover:text-gray-200 mt-6",
																children: [" ", "Details", " "],
															}),
														],
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
	fR = "/assets/slider-2-a0430bc2.jpg",
	hR = () =>
		c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				className: "relative",
				children: [
					c.jsx("img", {
						src: fR,
						className: "absolute inset-0 object-cover w-full h-full",
						alt: "",
					}),
					c.jsx("div", {
						className: "relative bg-gray-900 bg-opacity-50",
						children: c.jsx("div", {
							className:
								"px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
							children: c.jsx("div", {
								className:
									"flex flex-col items-center justify-between xl:flex-row py-24",
								children: c.jsxs("div", {
									className: "text-center mx-auto space-y-6",
									children: [
										c.jsxs("h1", {
											className:
												"md:text-4xl lg:text-5xl font-bold text-slate-100 ",
											children: [
												" ",
												"PS-Admission is A College Booking Platform",
												" ",
											],
										}),
										c.jsxs("p", {
											className: "text-gray-200",
											children: [
												" ",
												"Campus Connect is a cutting-edge college booking platform designed to simplify the process of finding the best college for students.",
												" ",
											],
										}),
										c.jsxs("a", {
											href: "#_",
											class:
												"relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group",
											children: [
												c.jsx("span", {
													class:
														"w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]",
												}),
												c.jsx("span", {
													class:
														"absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8",
												}),
												c.jsx("span", {
													class:
														"relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900",
													children: "Find College",
												}),
												c.jsx("span", {
													class:
														"absolute inset-0 border-2 border-white rounded-full",
												}),
											],
										}),
									],
								}),
							}),
						}),
					}),
				],
			}),
		}),
	pR = () => {
		const { axiosCall: e } = Xi(),
			{ authLoading: t } = on(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Ji({
				queryKey: ["galleryImg"],
				enabled: !t,
				queryFn: async () => (await e("/gallery-image")).data,
			});
		return { galleryImgData: n, galleryImgLoading: r, galleryImgRefetch: i };
	},
	mR = () => {
		var r, i, s, o, a, l;
		const {
			galleryImgData: e,
			galleryImgLoading: t,
			galleryImgRefetch: n,
		} = pR();
		return c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				className: "mc px-5 py-4 md:py-16 lg:px-32 lg:pt-16 ",
				children: [
					c.jsxs("div", {
						className: "flex flex-col text-center w-full mb-20",
						children: [
							c.jsxs("h1", {
								className: "text-2xl font-medium title-font mb-4 text-gray-900",
								children: [" ", "Colleges Gallery", " "],
							}),
							c.jsxs("p", {
								className: "lg:w-2/3 mx-auto leading-relaxed text-base",
								children: [
									" ",
									"Welcome to our Colleges Gallery, a curated collection of diverse educational institutions from around the world",
								],
							}),
						],
					}),
					c.jsxs("div", {
						className: "-m-1 flex flex-wrap md:-m-2",
						children: [
							c.jsxs("div", {
								className: "flex w-1/2 flex-wrap",
								children: [
									c.jsx("div", {
										className: "w-1/2 p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (r = e[0]) == null ? void 0 : r.image,
										}),
									}),
									c.jsx("div", {
										className: "w-1/2 p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (i = e[1]) == null ? void 0 : i.image,
										}),
									}),
									c.jsx("div", {
										className: "w-full p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (s = e[3]) == null ? void 0 : s.image,
										}),
									}),
								],
							}),
							c.jsxs("div", {
								className: "flex w-1/2 flex-wrap",
								children: [
									c.jsx("div", {
										className: "w-full p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (o = e[4]) == null ? void 0 : o.image,
										}),
									}),
									c.jsx("div", {
										className: "w-1/2 p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (a = e[5]) == null ? void 0 : a.image,
										}),
									}),
									c.jsx("div", {
										className: "w-1/2 p-1 md:p-2",
										children: c.jsx("img", {
											alt: "gallery",
											className:
												"block h-full w-full rounded-lg object-cover object-center",
											src: (l = e[2]) == null ? void 0 : l.image,
										}),
									}),
								],
							}),
						],
					}),
				],
			}),
		});
	},
	yR = () => {
		const { axiosCall: e } = Xi(),
			{ authLoading: t } = on(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Ji({
				queryKey: ["researchPaper"],
				enabled: !t,
				queryFn: async () => (await e("research-papers")).data,
			});
		return {
			researchPaperData: n,
			researchPaperLoading: r,
			researchPaperRefetch: i,
		};
	},
	gR = () => {
		const {
			researchPaperData: e,
			researchPaperLoading: t,
			researchPaperRefetch: n,
		} = yR();
		return (
			console.log("RP -> ", e),
			c.jsx(c.Fragment, {
				children: c.jsxs("div", {
					className:
						"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
					children: [
						c.jsxs("div", {
							className: "mx-auto mb-10 lg:max-w-xl sm:text-center",
							children: [
								c.jsx("p", {
									className:
										"inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400",
									children: "Research College",
								}),
								c.jsx("p", {
									className: "text-base text-gray-700 md:text-lg",
									children:
										"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
								}),
							],
						}),
						c.jsx("div", {
							className:
								"grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4",
						}),
						c.jsx("div", {
							className: "flex flex-wrap -m-4",
							children:
								e &&
								e.map((r) => {
									var i, s;
									return c.jsx("div", {
										className: "p-4 md:w-1/3",
										children: c.jsxs("div", {
											className:
												"h-full flex flex-col justify-between border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",
											children: [
												c.jsx("img", {
													className:
														"lg:h-60 md:h-36 w-full object-cover object-center",
													src:
														(i = r == null ? void 0 : r.authors[0]) == null
															? void 0
															: i.image,
													alt: "blog",
												}),
												c.jsxs("div", {
													className: "p-6",
													children: [
														c.jsx("h2", {
															className:
																"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",
															children: r == null ? void 0 : r.date,
														}),
														c.jsx("h1", {
															className:
																"title-font text-lg font-medium text-gray-900 mb-3",
															children: r == null ? void 0 : r.title,
														}),
														c.jsxs("p", {
															className: "mb-4",
															children: [
																c.jsx("span", { children: " Abstract: " }),
																r == null ? void 0 : r.abstract,
																" ",
															],
														}),
														c.jsxs("div", {
															children: [
																c.jsx("h3", { children: "Author - " }),
																c.jsxs("h4", {
																	children: [
																		" Name: ",
																		(s = r == null ? void 0 : r.authors[0]) ==
																		null
																			? void 0
																			: s.name,
																		" ",
																	],
																}),
															],
														}),
													],
												}),
												c.jsx("div", {
													className: "",
													children: c.jsxs(br, {
														to: r == null ? void 0 : r.link,
														className:
															"bg-blue-500 block text-center py-3 text-white",
														children: [" ", "Recommended", " "],
													}),
												}),
											],
										}),
									});
								}),
						}),
					],
				}),
			})
		);
	},
	vR = () => {
		const { axiosCall: e } = Xi(),
			{ authLoading: t } = on(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Ji({
				queryKey: ["feedbackClg"],
				enabled: !t,
				queryFn: async () => (await e("college-feedback")).data,
			});
		return { feedbackClgData: n, feedbackClgLoading: r, feedbackClgRefetch: i };
	},
	wR = () => {
		const {
			feedbackClgData: e,
			feedbackClgLoading: t,
			feedbackClgRefetch: n,
		} = vR();
		return (
			console.log("feedbackClgData -> ", e),
			c.jsx("div", {
				children: c.jsxs("h1", {
					children: [" This is A Feed Back - ", e.length, " "],
				}),
			})
		);
	},
	xR = () =>
		c.jsxs(c.Fragment, {
			children: [
				c.jsx(hR, {}),
				c.jsx("hr", {}),
				c.jsx(dR, {}),
				c.jsx("hr", {}),
				c.jsx(mR, {}),
				c.jsx("hr", {}),
				c.jsx(gR, {}),
				c.jsx("hr", {}),
				c.jsx(wR, {}),
			],
		});
var i0 = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	qp = at.createContext && at.createContext(i0),
	vr =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(vr =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) {
							t = arguments[n];
							for (var i in t)
								Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						}
						return e;
					}),
				vr.apply(this, arguments)
			);
		},
	bR =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == "function")
				for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
					t.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
						(n[r[i]] = e[r[i]]);
			return n;
		};
function s0(e) {
	return (
		e &&
		e.map(function (t, n) {
			return at.createElement(t.tag, vr({ key: n }, t.attr), s0(t.child));
		})
	);
}
function xo(e) {
	return function (t) {
		return at.createElement(ER, vr({ attr: vr({}, e.attr) }, t), s0(e.child));
	};
}
function ER(e) {
	var t = function (n) {
		var r = e.attr,
			i = e.size,
			s = e.title,
			o = bR(e, ["attr", "size", "title"]),
			a = i || n.size || "1em",
			l;
		return (
			n.className && (l = n.className),
			e.className && (l = (l ? l + " " : "") + e.className),
			at.createElement(
				"svg",
				vr(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					n.attr,
					r,
					o,
					{
						className: l,
						style: vr(vr({ color: e.color || n.color }, n.style), e.style),
						height: a,
						width: a,
						xmlns: "http://www.w3.org/2000/svg",
					}
				),
				s && at.createElement("title", null, s),
				e.children
			)
		);
	};
	return qp !== void 0
		? at.createElement(qp.Consumer, null, function (n) {
				return t(n);
		  })
		: t(i0);
}
function SR(e) {
	return xo({
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
	})(e);
}
function o0(e) {
	return xo({
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
	})(e);
}
function _R(e) {
	return xo({
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
	})(e);
}
let CR = { data: "" },
	kR = (e) =>
		typeof window == "object"
			? (
					(e ? e.querySelector("#_goober") : window._goober) ||
					Object.assign(
						(e || document.head).appendChild(document.createElement("style")),
						{ innerHTML: " ", id: "_goober" }
					)
			  ).firstChild
			: e || CR,
	RR = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
	NR = /\/\*[^]*?\*\/|  +/g,
	Kp = /\n+/g,
	ir = (e, t) => {
		let n = "",
			r = "",
			i = "";
		for (let s in e) {
			let o = e[s];
			s[0] == "@"
				? s[1] == "i"
					? (n = s + " " + o + ";")
					: (r +=
							s[1] == "f"
								? ir(o, s)
								: s + "{" + ir(o, s[1] == "k" ? "" : t) + "}")
				: typeof o == "object"
				? (r += ir(
						o,
						t
							? t.replace(/([^,])+/g, (a) =>
									s.replace(/(^:.*)|([^,])+/g, (l) =>
										/&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
									)
							  )
							: s
				  ))
				: o != null &&
				  ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
				  (i += ir.p ? ir.p(s, o) : s + ":" + o + ";"));
		}
		return n + (t && i ? t + "{" + i + "}" : i) + r;
	},
	En = {},
	a0 = (e) => {
		if (typeof e == "object") {
			let t = "";
			for (let n in e) t += n + a0(e[n]);
			return t;
		}
		return e;
	},
	OR = (e, t, n, r, i) => {
		let s = a0(e),
			o =
				En[s] ||
				(En[s] = ((l) => {
					let u = 0,
						d = 11;
					for (; u < l.length; ) d = (101 * d + l.charCodeAt(u++)) >>> 0;
					return "go" + d;
				})(s));
		if (!En[o]) {
			let l =
				s !== e
					? e
					: ((u) => {
							let d,
								f,
								p = [{}];
							for (; (d = RR.exec(u.replace(NR, ""))); )
								d[4]
									? p.shift()
									: d[3]
									? ((f = d[3].replace(Kp, " ").trim()),
									  p.unshift((p[0][f] = p[0][f] || {})))
									: (p[0][d[1]] = d[2].replace(Kp, " ").trim());
							return p[0];
					  })(e);
			En[o] = ir(i ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
		}
		let a = n && En.g ? En.g : null;
		return (
			n && (En.g = En[o]),
			((l, u, d, f) => {
				f
					? (u.data = u.data.replace(f, l))
					: u.data.indexOf(l) === -1 && (u.data = d ? l + u.data : u.data + l);
			})(En[o], t, r, a),
			o
		);
	},
	PR = (e, t, n) =>
		e.reduce((r, i, s) => {
			let o = t[s];
			if (o && o.call) {
				let a = o(n),
					l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
				o = l
					? "." + l
					: a && typeof a == "object"
					? a.props
						? ""
						: ir(a, "")
					: a === !1
					? ""
					: a;
			}
			return r + i + (o ?? "");
		}, "");
function Dl(e) {
	let t = this || {},
		n = e.call ? e(t.p) : e;
	return OR(
		n.unshift
			? n.raw
				? PR(n, [].slice.call(arguments, 1), t.p)
				: n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
			: n,
		kR(t.target),
		t.g,
		t.o,
		t.k
	);
}
let l0, Qc, Gc;
Dl.bind({ g: 1 });
let Bn = Dl.bind({ k: 1 });
function TR(e, t, n, r) {
	(ir.p = t), (l0 = e), (Qc = n), (Gc = r);
}
function kr(e, t) {
	let n = this || {};
	return function () {
		let r = arguments;
		function i(s, o) {
			let a = Object.assign({}, s),
				l = a.className || i.className;
			(n.p = Object.assign({ theme: Qc && Qc() }, a)),
				(n.o = / *go\d+/.test(l)),
				(a.className = Dl.apply(n, r) + (l ? " " + l : "")),
				t && (a.ref = o);
			let u = e;
			return (
				e[0] && ((u = a.as || e), delete a.as), Gc && u[0] && Gc(a), l0(u, a)
			);
		}
		return t ? t(i) : i;
	};
}
var IR = (e) => typeof e == "function",
	Za = (e, t) => (IR(e) ? e(t) : e),
	jR = (() => {
		let e = 0;
		return () => (++e).toString();
	})(),
	u0 = (() => {
		let e;
		return () => {
			if (e === void 0 && typeof window < "u") {
				let t = matchMedia("(prefers-reduced-motion: reduce)");
				e = !t || t.matches;
			}
			return e;
		};
	})(),
	AR = 20,
	fa = new Map(),
	LR = 1e3,
	Qp = (e) => {
		if (fa.has(e)) return;
		let t = setTimeout(() => {
			fa.delete(e), ei({ type: 4, toastId: e });
		}, LR);
		fa.set(e, t);
	},
	DR = (e) => {
		let t = fa.get(e);
		t && clearTimeout(t);
	},
	Jc = (e, t) => {
		switch (t.type) {
			case 0:
				return { ...e, toasts: [t.toast, ...e.toasts].slice(0, AR) };
			case 1:
				return (
					t.toast.id && DR(t.toast.id),
					{
						...e,
						toasts: e.toasts.map((s) =>
							s.id === t.toast.id ? { ...s, ...t.toast } : s
						),
					}
				);
			case 2:
				let { toast: n } = t;
				return e.toasts.find((s) => s.id === n.id)
					? Jc(e, { type: 1, toast: n })
					: Jc(e, { type: 0, toast: n });
			case 3:
				let { toastId: r } = t;
				return (
					r
						? Qp(r)
						: e.toasts.forEach((s) => {
								Qp(s.id);
						  }),
					{
						...e,
						toasts: e.toasts.map((s) =>
							s.id === r || r === void 0 ? { ...s, visible: !1 } : s
						),
					}
				);
			case 4:
				return t.toastId === void 0
					? { ...e, toasts: [] }
					: { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
			case 5:
				return { ...e, pausedAt: t.time };
			case 6:
				let i = t.time - (e.pausedAt || 0);
				return {
					...e,
					pausedAt: void 0,
					toasts: e.toasts.map((s) => ({
						...s,
						pauseDuration: s.pauseDuration + i,
					})),
				};
		}
	},
	ha = [],
	pa = { toasts: [], pausedAt: void 0 },
	ei = (e) => {
		(pa = Jc(pa, e)),
			ha.forEach((t) => {
				t(pa);
			});
	},
	MR = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
	FR = (e = {}) => {
		let [t, n] = I.useState(pa);
		I.useEffect(
			() => (
				ha.push(n),
				() => {
					let i = ha.indexOf(n);
					i > -1 && ha.splice(i, 1);
				}
			),
			[t]
		);
		let r = t.toasts.map((i) => {
			var s, o;
			return {
				...e,
				...e[i.type],
				...i,
				duration:
					i.duration ||
					((s = e[i.type]) == null ? void 0 : s.duration) ||
					(e == null ? void 0 : e.duration) ||
					MR[i.type],
				style: {
					...e.style,
					...((o = e[i.type]) == null ? void 0 : o.style),
					...i.style,
				},
			};
		});
		return { ...t, toasts: r };
	},
	UR = (e, t = "blank", n) => ({
		createdAt: Date.now(),
		visible: !0,
		type: t,
		ariaProps: { role: "status", "aria-live": "polite" },
		message: e,
		pauseDuration: 0,
		...n,
		id: (n == null ? void 0 : n.id) || jR(),
	}),
	bo = (e) => (t, n) => {
		let r = UR(t, e, n);
		return ei({ type: 2, toast: r }), r.id;
	},
	vt = (e, t) => bo("blank")(e, t);
vt.error = bo("error");
vt.success = bo("success");
vt.loading = bo("loading");
vt.custom = bo("custom");
vt.dismiss = (e) => {
	ei({ type: 3, toastId: e });
};
vt.remove = (e) => ei({ type: 4, toastId: e });
vt.promise = (e, t, n) => {
	let r = vt.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
	return (
		e
			.then(
				(i) => (
					vt.success(Za(t.success, i), {
						id: r,
						...n,
						...(n == null ? void 0 : n.success),
					}),
					i
				)
			)
			.catch((i) => {
				vt.error(Za(t.error, i), {
					id: r,
					...n,
					...(n == null ? void 0 : n.error),
				});
			}),
		e
	);
};
var BR = (e, t) => {
		ei({ type: 1, toast: { id: e, height: t } });
	},
	zR = () => {
		ei({ type: 5, time: Date.now() });
	},
	$R = (e) => {
		let { toasts: t, pausedAt: n } = FR(e);
		I.useEffect(() => {
			if (n) return;
			let s = Date.now(),
				o = t.map((a) => {
					if (a.duration === 1 / 0) return;
					let l = (a.duration || 0) + a.pauseDuration - (s - a.createdAt);
					if (l < 0) {
						a.visible && vt.dismiss(a.id);
						return;
					}
					return setTimeout(() => vt.dismiss(a.id), l);
				});
			return () => {
				o.forEach((a) => a && clearTimeout(a));
			};
		}, [t, n]);
		let r = I.useCallback(() => {
				n && ei({ type: 6, time: Date.now() });
			}, [n]),
			i = I.useCallback(
				(s, o) => {
					let {
							reverseOrder: a = !1,
							gutter: l = 8,
							defaultPosition: u,
						} = o || {},
						d = t.filter(
							(b) => (b.position || u) === (s.position || u) && b.height
						),
						f = d.findIndex((b) => b.id === s.id),
						p = d.filter((b, w) => w < f && b.visible).length;
					return d
						.filter((b) => b.visible)
						.slice(...(a ? [p + 1] : [0, p]))
						.reduce((b, w) => b + (w.height || 0) + l, 0);
				},
				[t]
			);
		return {
			toasts: t,
			handlers: {
				updateHeight: BR,
				startPause: zR,
				endPause: r,
				calculateOffset: i,
			},
		};
	},
	VR = Bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
	HR = Bn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	WR = Bn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
	qR = kr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${VR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${HR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${WR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
	KR = Bn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
	QR = kr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${KR} 1s linear infinite;
`,
	GR = Bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
	JR = Bn`
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
	YR = kr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${GR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${JR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
	XR = kr("div")`
  position: absolute;
`,
	ZR = kr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
	eN = Bn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	tN = kr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
	nN = ({ toast: e }) => {
		let { icon: t, type: n, iconTheme: r } = e;
		return t !== void 0
			? typeof t == "string"
				? I.createElement(tN, null, t)
				: t
			: n === "blank"
			? null
			: I.createElement(
					ZR,
					null,
					I.createElement(QR, { ...r }),
					n !== "loading" &&
						I.createElement(
							XR,
							null,
							n === "error"
								? I.createElement(qR, { ...r })
								: I.createElement(YR, { ...r })
						)
			  );
	},
	rN = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
	iN = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
	sN = "0%{opacity:0;} 100%{opacity:1;}",
	oN = "0%{opacity:1;} 100%{opacity:0;}",
	aN = kr("div")`
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
	lN = kr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
	uN = (e, t) => {
		let n = e.includes("top") ? 1 : -1,
			[r, i] = u0() ? [sN, oN] : [rN(n), iN(n)];
		return {
			animation: t
				? `${Bn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
				: `${Bn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
		};
	},
	cN = I.memo(({ toast: e, position: t, style: n, children: r }) => {
		let i = e.height
				? uN(e.position || t || "top-center", e.visible)
				: { opacity: 0 },
			s = I.createElement(nN, { toast: e }),
			o = I.createElement(lN, { ...e.ariaProps }, Za(e.message, e));
		return I.createElement(
			aN,
			{ className: e.className, style: { ...i, ...n, ...e.style } },
			typeof r == "function"
				? r({ icon: s, message: o })
				: I.createElement(I.Fragment, null, s, o)
		);
	});
TR(I.createElement);
var dN = ({
		id: e,
		className: t,
		style: n,
		onHeightUpdate: r,
		children: i,
	}) => {
		let s = I.useCallback(
			(o) => {
				if (o) {
					let a = () => {
						let l = o.getBoundingClientRect().height;
						r(e, l);
					};
					a(),
						new MutationObserver(a).observe(o, {
							subtree: !0,
							childList: !0,
							characterData: !0,
						});
				}
			},
			[e, r]
		);
		return I.createElement("div", { ref: s, className: t, style: n }, i);
	},
	fN = (e, t) => {
		let n = e.includes("top"),
			r = n ? { top: 0 } : { bottom: 0 },
			i = e.includes("center")
				? { justifyContent: "center" }
				: e.includes("right")
				? { justifyContent: "flex-end" }
				: {};
		return {
			left: 0,
			right: 0,
			display: "flex",
			position: "absolute",
			transition: u0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
			transform: `translateY(${t * (n ? 1 : -1)}px)`,
			...r,
			...i,
		};
	},
	hN = Dl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
	Ho = 16,
	pN = ({
		reverseOrder: e,
		position: t = "top-center",
		toastOptions: n,
		gutter: r,
		children: i,
		containerStyle: s,
		containerClassName: o,
	}) => {
		let { toasts: a, handlers: l } = $R(n);
		return I.createElement(
			"div",
			{
				style: {
					position: "fixed",
					zIndex: 9999,
					top: Ho,
					left: Ho,
					right: Ho,
					bottom: Ho,
					pointerEvents: "none",
					...s,
				},
				className: o,
				onMouseEnter: l.startPause,
				onMouseLeave: l.endPause,
			},
			a.map((u) => {
				let d = u.position || t,
					f = l.calculateOffset(u, {
						reverseOrder: e,
						gutter: r,
						defaultPosition: t,
					}),
					p = fN(d, f);
				return I.createElement(
					dN,
					{
						id: u.id,
						key: u.id,
						onHeightUpdate: l.updateHeight,
						className: u.visible ? hN : "",
						style: p,
					},
					u.type === "custom"
						? Za(u.message, u)
						: i
						? i(u)
						: I.createElement(cN, { toast: u, position: d })
				);
			})
		);
	};
const mN = () => {
	var C, g;
	const [e, t] = I.useState(""),
		{
			user: n,
			authLoading: r,
			googleLogin: i,
			githubLogin: s,
			signUp: o,
			updateUserProfile: a,
			logOut: l,
			signIn: u,
		} = on(),
		d = Sl(),
		p =
			((g = (C = Xr().state) == null ? void 0 : C.from) == null
				? void 0
				: g.pathname) || "/profile",
		b = (h) => {
			console.log("saveDatabase -> ", h);
			const { displayName: v, email: m, photoURL: _, phoneNumber: O } = h,
				P = {
					displayName: v,
					email: m,
					photoURL: _,
					phoneNumber: O,
					education: [],
					address: null,
					gender: null,
					about: null,
				};
			console.log("saveDatabase saveDate -> ", P),
				fetch("https://college-booking-programmershipon.vercel.app/users", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(P),
				})
					.then((N) => N.json())
					.then((N) => {
						console.log(N),
							N != null && N.insertedId
								? vt.success("Sign Up Success")
								: vt.success("Login Success"),
							t(null),
							d(p, { replace: !0 });
					})
					.catch((N) => console.log(N));
		},
		w = () => {
			i()
				.then((h) => {
					console.log("Google login -> ", h), b(h == null ? void 0 : h.user);
				})
				.catch((h) => {
					t(h.message);
				});
		},
		E = () => {
			console.log("Github Handle"),
				s()
					.then((h) => {
						console.log("Github login -> ", h), b(h == null ? void 0 : h.user);
					})
					.catch((h) => {
						t(h.message);
					});
		};
	return c.jsx(c.Fragment, {
		children: c.jsx("div", {
			className:
				"bg-white mt-5 py-3 px-4 shadow sm:rounded-lg sm:px-10 max-w-md mx-auto",
			children: c.jsxs("div", {
				className: "",
				children: [
					c.jsx("div", {
						className: "my-5",
						children: c.jsxs("button", {
							onClick: w,
							className:
								"flex justify-center items-center gap-4 w-full border border-green-500 p-5 py-3 text-green-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer",
							children: [
								c.jsx(SR, { className: "w-5 h-5" }),
								c.jsx("span", { children: " Continue With Google " }),
							],
						}),
					}),
					c.jsx("div", {
						className: "my-5",
						children: c.jsxs("button", {
							onClick: E,
							className:
								"w-full  flex justify-center items-center gap-4 border border-gray-500 p-5 py-3 text-gray-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105  transition duration-300 cursor-pointer",
							children: [
								c.jsx(_R, { className: "w-5 h-5" }),
								c.jsx("span", { children: " Continue With Github " }),
							],
						}),
					}),
				],
			}),
		}),
	});
};
function yN() {
	var b, w;
	const e = Sl(),
		t = Xr(),
		[n, r] = I.useState(""),
		[i, s] = I.useState(!0),
		[o, a] = I.useState(!0),
		{ authLoading: l, user: u, signIn: d } = on();
	let f =
		((w = (b = t.state) == null ? void 0 : b.from) == null
			? void 0
			: w.pathname) || "/";
	!l && u && e(f, { replace: !0 });
	const p = (E) => {
		E.preventDefault();
		const C = E.target,
			g = C.userEmail.value,
			h = C.M_password.value;
		if (h.length < 5) {
			r(`The Password is less than 6 characters ${h.length} `);
			return;
		}
		d(g, h)
			.then((v) => {
				setUser(v.user),
					vt.success("Account Login Success"),
					e(f, { replace: !0 }),
					C.reset();
			})
			.catch();
	};
	return c.jsxs("div", {
		className:
			"bg-gray-300 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
		children: [
			c.jsxs("div", {
				className: "sm:mx-auto sm:w-full sm:max-w-md",
				children: [
					c.jsx("h2", {
						className:
							"text-center text-3xl font-extrabold text-gray-900 uppercase",
						children: "Login your account",
					}),
					c.jsxs("p", {
						className: "mt-2 text-center text-sm text-gray-600",
						children: [
							"Or ",
							c.jsx(br, {
								to: "/registration",
								className:
									"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
								children: "create a new account",
							}),
						],
					}),
				],
			}),
			c.jsx("div", {
				className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
				children: c.jsx("div", {
					className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
					children: c.jsxs("form", {
						onSubmit: p,
						className: "space-y-6",
						children: [
							c.jsxs("div", {
								children: [
									c.jsx("label", {
										htmlFor: "email",
										className: "block text-sm font-medium text-gray-700",
										children: "Email address",
									}),
									c.jsx("div", {
										className: "mt-1 relative",
										children: c.jsx("input", {
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
							c.jsxs("div", {
								children: [
									c.jsx("label", {
										htmlFor: "password",
										className: "block text-sm font-medium text-gray-700",
										children: "Password",
									}),
									c.jsxs("div", {
										className: "mt-1 relative",
										children: [
											c.jsx("input", {
												id: "password",
												name: "M_password",
												type: i ? "password" : "text",
												autoComplete: "current-password",
												required: !0,
												className:
													"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
											}),
											c.jsx(o0, {
												onClick: () => s(!i),
												className:
													"absolute right-3 cursor-pointer top-1/2 -translate-y-1/2",
											}),
										],
									}),
								],
							}),
							c.jsxs("div", {
								className: "flex items-center justify-between",
								children: [
									c.jsxs("div", {
										className: "flex items-center",
										children: [
											c.jsx("input", {
												id: "remember_me",
												name: "remember_me",
												type: "checkbox",
												onClick: () => a(!o),
												className:
													"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
											}),
											c.jsx("label", {
												htmlFor: "remember_me",
												className: "ml-2 block text-sm text-gray-900",
												children: "Remember me",
											}),
										],
									}),
									c.jsx("div", {
										className: "text-sm",
										children: c.jsx("a", {
											href: "#",
											className:
												"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
											children: "Forgot your password?",
										}),
									}),
								],
							}),
							c.jsx("div", {
								children: c.jsx("button", {
									disabled: !!o,
									type: "submit",
									className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
										o
											? "bg-indigo-400 hover:bg-indigo-400"
											: "bg-indigo-600 hover:bg-indigo-700"
									} `,
									children: "Sign in",
								}),
							}),
							c.jsxs("h3", {
								className: "text-red-500",
								children: [" ", n, " "],
							}),
						],
					}),
				}),
			}),
			c.jsx(mN, {}),
		],
	});
}
const gN = () => {
	const { axiosCall: e } = Xi(),
		{ user: t, authLoading: n } = on(),
		{
			data: r = [],
			isLoading: i,
			refetch: s,
		} = Ji({
			queryKey: ["profileUser"],
			enabled: (t == null ? void 0 : t.email) && !n,
			queryFn: async () =>
				(await e(`/profile-users/${t == null ? void 0 : t.email}`)).data,
		});
	return { profileUserData: r, profileUserLoading: i, profileUserRefetch: s };
};
function vN(e) {
	return xo({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{
				tag: "path",
				attr: {
					d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
				},
			},
			{
				tag: "path",
				attr: { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" },
			},
		],
	})(e);
}
function wN(e) {
	return xo({
		tag: "svg",
		attr: { viewBox: "0 0 15 15", fill: "none" },
		child: [
			{
				tag: "path",
				attr: {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
					fill: "currentColor",
				},
			},
		],
	})(e);
}
var Eo = (e) => e.type === "checkbox",
	vi = (e) => e instanceof Date,
	gt = (e) => e == null;
const c0 = (e) => typeof e == "object";
var nt = (e) => !gt(e) && !Array.isArray(e) && c0(e) && !vi(e),
	xN = (e) =>
		nt(e) && e.target ? (Eo(e.target) ? e.target.checked : e.target.value) : e,
	bN = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
	EN = (e, t) => e.has(bN(t)),
	SN = (e) => {
		const t = e.constructor && e.constructor.prototype;
		return nt(t) && t.hasOwnProperty("isPrototypeOf");
	},
	wf =
		typeof window < "u" &&
		typeof window.HTMLElement < "u" &&
		typeof document < "u";
function Jn(e) {
	let t;
	const n = Array.isArray(e);
	if (e instanceof Date) t = new Date(e);
	else if (e instanceof Set) t = new Set(e);
	else if (
		!(wf && (e instanceof Blob || e instanceof FileList)) &&
		(n || nt(e))
	)
		if (((t = n ? [] : {}), !n && !SN(e))) t = e;
		else for (const r in e) e.hasOwnProperty(r) && (t[r] = Jn(e[r]));
	else return e;
	return t;
}
var So = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
	He = (e) => e === void 0,
	ne = (e, t, n) => {
		if (!t || !nt(e)) return n;
		const r = So(t.split(/[,[\].]+?/)).reduce((i, s) => (gt(i) ? i : i[s]), e);
		return He(r) || r === e ? (He(e[t]) ? n : e[t]) : r;
	};
const Gp = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
	tn = {
		onBlur: "onBlur",
		onChange: "onChange",
		onSubmit: "onSubmit",
		onTouched: "onTouched",
		all: "all",
	},
	Sn = {
		max: "max",
		min: "min",
		maxLength: "maxLength",
		minLength: "minLength",
		pattern: "pattern",
		required: "required",
		validate: "validate",
	};
at.createContext(null);
var _N = (e, t, n, r = !0) => {
		const i = { defaultValues: t._defaultValues };
		for (const s in e)
			Object.defineProperty(i, s, {
				get: () => {
					const o = s;
					return (
						t._proxyFormState[o] !== tn.all &&
							(t._proxyFormState[o] = !r || tn.all),
						n && (n[o] = !0),
						e[o]
					);
				},
			});
		return i;
	},
	Ut = (e) => nt(e) && !Object.keys(e).length,
	CN = (e, t, n, r) => {
		n(e);
		const { name: i, ...s } = e;
		return (
			Ut(s) ||
			Object.keys(s).length >= Object.keys(t).length ||
			Object.keys(s).find((o) => t[o] === (!r || tn.all))
		);
	},
	Ou = (e) => (Array.isArray(e) ? e : [e]);
function kN(e) {
	const t = at.useRef(e);
	(t.current = e),
		at.useEffect(() => {
			const n =
				!e.disabled &&
				t.current.subject &&
				t.current.subject.subscribe({ next: t.current.next });
			return () => {
				n && n.unsubscribe();
			};
		}, [e.disabled]);
}
var fn = (e) => typeof e == "string",
	RN = (e, t, n, r, i) =>
		fn(e)
			? (r && t.watch.add(e), ne(n, e, i))
			: Array.isArray(e)
			? e.map((s) => (r && t.watch.add(s), ne(n, s)))
			: (r && (t.watchAll = !0), n),
	xf = (e) => /^\w*$/.test(e),
	d0 = (e) => So(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ae(e, t, n) {
	let r = -1;
	const i = xf(t) ? [t] : d0(t),
		s = i.length,
		o = s - 1;
	for (; ++r < s; ) {
		const a = i[r];
		let l = n;
		if (r !== o) {
			const u = e[a];
			l = nt(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
		}
		(e[a] = l), (e = e[a]);
	}
	return e;
}
var NN = (e, t, n, r, i) =>
	t
		? {
				...n[e],
				types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
		  }
		: {};
const Yc = (e, t, n) => {
	for (const r of n || Object.keys(e)) {
		const i = ne(e, r);
		if (i) {
			const { _f: s, ...o } = i;
			if (s && t(s.name)) {
				if (s.ref.focus) {
					s.ref.focus();
					break;
				} else if (s.refs && s.refs[0].focus) {
					s.refs[0].focus();
					break;
				}
			} else nt(o) && Yc(o, t);
		}
	}
};
var Jp = (e) => ({
		isOnSubmit: !e || e === tn.onSubmit,
		isOnBlur: e === tn.onBlur,
		isOnChange: e === tn.onChange,
		isOnAll: e === tn.all,
		isOnTouch: e === tn.onTouched,
	}),
	Yp = (e, t, n) =>
		!n &&
		(t.watchAll ||
			t.watch.has(e) ||
			[...t.watch].some(
				(r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
			)),
	ON = (e, t, n) => {
		const r = So(ne(e, n));
		return Ae(r, "root", t[n]), Ae(e, n, r), e;
	},
	Oi = (e) => typeof e == "boolean",
	bf = (e) => e.type === "file",
	ar = (e) => typeof e == "function",
	el = (e) => {
		if (!wf) return !1;
		const t = e ? e.ownerDocument : 0;
		return (
			e instanceof
			(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
		);
	},
	ma = (e) => fn(e),
	Ef = (e) => e.type === "radio",
	tl = (e) => e instanceof RegExp;
const Xp = { value: !1, isValid: !1 },
	Zp = { value: !0, isValid: !0 };
var f0 = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			const t = e
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value);
			return { value: t, isValid: !!t.length };
		}
		return e[0].checked && !e[0].disabled
			? e[0].attributes && !He(e[0].attributes.value)
				? He(e[0].value) || e[0].value === ""
					? Zp
					: { value: e[0].value, isValid: !0 }
				: Zp
			: Xp;
	}
	return Xp;
};
const em = { isValid: !1, value: null };
var h0 = (e) =>
	Array.isArray(e)
		? e.reduce(
				(t, n) =>
					n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
				em
		  )
		: em;
function tm(e, t, n = "validate") {
	if (ma(e) || (Array.isArray(e) && e.every(ma)) || (Oi(e) && !e))
		return { type: n, message: ma(e) ? e : "", ref: t };
}
var ni = (e) => (nt(e) && !tl(e) ? e : { value: e, message: "" }),
	nm = async (e, t, n, r, i) => {
		const {
				ref: s,
				refs: o,
				required: a,
				maxLength: l,
				minLength: u,
				min: d,
				max: f,
				pattern: p,
				validate: b,
				name: w,
				valueAsNumber: E,
				mount: C,
				disabled: g,
			} = e._f,
			h = ne(t, w);
		if (!C || g) return {};
		const v = o ? o[0] : s,
			m = (Q) => {
				r &&
					v.reportValidity &&
					(v.setCustomValidity(Oi(Q) ? "" : Q || ""), v.reportValidity());
			},
			_ = {},
			O = Ef(s),
			P = Eo(s),
			N = O || P,
			V =
				((E || bf(s)) && He(s.value) && He(h)) ||
				(el(s) && s.value === "") ||
				h === "" ||
				(Array.isArray(h) && !h.length),
			K = NN.bind(null, w, n, _),
			ie = (Q, te, oe, me = Sn.maxLength, fe = Sn.minLength) => {
				const we = Q ? te : oe;
				_[w] = {
					type: Q ? me : fe,
					message: we,
					ref: s,
					...K(Q ? me : fe, we),
				};
			};
		if (
			i
				? !Array.isArray(h) || !h.length
				: a &&
				  ((!N && (V || gt(h))) ||
						(Oi(h) && !h) ||
						(P && !f0(o).isValid) ||
						(O && !h0(o).isValid))
		) {
			const { value: Q, message: te } = ma(a)
				? { value: !!a, message: a }
				: ni(a);
			if (
				Q &&
				((_[w] = {
					type: Sn.required,
					message: te,
					ref: v,
					...K(Sn.required, te),
				}),
				!n)
			)
				return m(te), _;
		}
		if (!V && (!gt(d) || !gt(f))) {
			let Q, te;
			const oe = ni(f),
				me = ni(d);
			if (!gt(h) && !isNaN(h)) {
				const fe = s.valueAsNumber || (h && +h);
				gt(oe.value) || (Q = fe > oe.value),
					gt(me.value) || (te = fe < me.value);
			} else {
				const fe = s.valueAsDate || new Date(h),
					we = (J) => new Date(new Date().toDateString() + " " + J),
					B = s.type == "time",
					X = s.type == "week";
				fn(oe.value) &&
					h &&
					(Q = B
						? we(h) > we(oe.value)
						: X
						? h > oe.value
						: fe > new Date(oe.value)),
					fn(me.value) &&
						h &&
						(te = B
							? we(h) < we(me.value)
							: X
							? h < me.value
							: fe < new Date(me.value));
			}
			if ((Q || te) && (ie(!!Q, oe.message, me.message, Sn.max, Sn.min), !n))
				return m(_[w].message), _;
		}
		if ((l || u) && !V && (fn(h) || (i && Array.isArray(h)))) {
			const Q = ni(l),
				te = ni(u),
				oe = !gt(Q.value) && h.length > +Q.value,
				me = !gt(te.value) && h.length < +te.value;
			if ((oe || me) && (ie(oe, Q.message, te.message), !n))
				return m(_[w].message), _;
		}
		if (p && !V && fn(h)) {
			const { value: Q, message: te } = ni(p);
			if (
				tl(Q) &&
				!h.match(Q) &&
				((_[w] = {
					type: Sn.pattern,
					message: te,
					ref: s,
					...K(Sn.pattern, te),
				}),
				!n)
			)
				return m(te), _;
		}
		if (b) {
			if (ar(b)) {
				const Q = await b(h, t),
					te = tm(Q, v);
				if (te && ((_[w] = { ...te, ...K(Sn.validate, te.message) }), !n))
					return m(te.message), _;
			} else if (nt(b)) {
				let Q = {};
				for (const te in b) {
					if (!Ut(Q) && !n) break;
					const oe = tm(await b[te](h, t), v, te);
					oe &&
						((Q = { ...oe, ...K(te, oe.message) }),
						m(oe.message),
						n && (_[w] = Q));
				}
				if (!Ut(Q) && ((_[w] = { ref: v, ...Q }), !n)) return _;
			}
		}
		return m(!0), _;
	};
function PN(e, t) {
	const n = t.slice(0, -1).length;
	let r = 0;
	for (; r < n; ) e = He(e) ? r++ : e[t[r++]];
	return e;
}
function TN(e) {
	for (const t in e) if (e.hasOwnProperty(t) && !He(e[t])) return !1;
	return !0;
}
function st(e, t) {
	const n = Array.isArray(t) ? t : xf(t) ? [t] : d0(t),
		r = n.length === 1 ? e : PN(e, n),
		i = n.length - 1,
		s = n[i];
	return (
		r && delete r[s],
		i !== 0 &&
			((nt(r) && Ut(r)) || (Array.isArray(r) && TN(r))) &&
			st(e, n.slice(0, -1)),
		e
	);
}
function Pu() {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (i) => {
			for (const s of e) s.next && s.next(i);
		},
		subscribe: (i) => (
			e.push(i),
			{
				unsubscribe: () => {
					e = e.filter((s) => s !== i);
				},
			}
		),
		unsubscribe: () => {
			e = [];
		},
	};
}
var nl = (e) => gt(e) || !c0(e);
function Dr(e, t) {
	if (nl(e) || nl(t)) return e === t;
	if (vi(e) && vi(t)) return e.getTime() === t.getTime();
	const n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (const i of n) {
		const s = e[i];
		if (!r.includes(i)) return !1;
		if (i !== "ref") {
			const o = t[i];
			if (
				(vi(s) && vi(o)) ||
				(nt(s) && nt(o)) ||
				(Array.isArray(s) && Array.isArray(o))
					? !Dr(s, o)
					: s !== o
			)
				return !1;
		}
	}
	return !0;
}
var p0 = (e) => e.type === "select-multiple",
	IN = (e) => Ef(e) || Eo(e),
	Tu = (e) => el(e) && e.isConnected,
	m0 = (e) => {
		for (const t in e) if (ar(e[t])) return !0;
		return !1;
	};
function rl(e, t = {}) {
	const n = Array.isArray(e);
	if (nt(e) || n)
		for (const r in e)
			Array.isArray(e[r]) || (nt(e[r]) && !m0(e[r]))
				? ((t[r] = Array.isArray(e[r]) ? [] : {}), rl(e[r], t[r]))
				: gt(e[r]) || (t[r] = !0);
	return t;
}
function y0(e, t, n) {
	const r = Array.isArray(e);
	if (nt(e) || r)
		for (const i in e)
			Array.isArray(e[i]) || (nt(e[i]) && !m0(e[i]))
				? He(t) || nl(n[i])
					? (n[i] = Array.isArray(e[i]) ? rl(e[i], []) : { ...rl(e[i]) })
					: y0(e[i], gt(t) ? {} : t[i], n[i])
				: (n[i] = !Dr(e[i], t[i]));
	return n;
}
var Iu = (e, t) => y0(e, t, rl(t)),
	g0 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
		He(e)
			? e
			: t
			? e === ""
				? NaN
				: e && +e
			: n && fn(e)
			? new Date(e)
			: r
			? r(e)
			: e;
function ju(e) {
	const t = e.ref;
	if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
		return bf(t)
			? t.files
			: Ef(t)
			? h0(e.refs).value
			: p0(t)
			? [...t.selectedOptions].map(({ value: n }) => n)
			: Eo(t)
			? f0(e.refs).value
			: g0(He(t.value) ? e.ref.value : t.value, e);
}
var jN = (e, t, n, r) => {
		const i = {};
		for (const s of e) {
			const o = ne(t, s);
			o && Ae(i, s, o._f);
		}
		return {
			criteriaMode: n,
			names: [...e],
			fields: i,
			shouldUseNativeValidation: r,
		};
	},
	ps = (e) =>
		He(e)
			? e
			: tl(e)
			? e.source
			: nt(e)
			? tl(e.value)
				? e.value.source
				: e.value
			: e,
	AN = (e) =>
		e.mount &&
		(e.required ||
			e.min ||
			e.max ||
			e.maxLength ||
			e.minLength ||
			e.pattern ||
			e.validate);
function rm(e, t, n) {
	const r = ne(e, n);
	if (r || xf(n)) return { error: r, name: n };
	const i = n.split(".");
	for (; i.length; ) {
		const s = i.join("."),
			o = ne(t, s),
			a = ne(e, s);
		if (o && !Array.isArray(o) && n !== s) return { name: n };
		if (a && a.type) return { name: s, error: a };
		i.pop();
	}
	return { name: n };
}
var LN = (e, t, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
			? !(t || e)
			: (n ? r.isOnBlur : i.isOnBlur)
			? !e
			: (n ? r.isOnChange : i.isOnChange)
			? e
			: !0,
	DN = (e, t) => !So(ne(e, t)).length && st(e, t);
const MN = {
	mode: tn.onSubmit,
	reValidateMode: tn.onChange,
	shouldFocusError: !0,
};
function FN(e = {}, t) {
	let n = { ...MN, ...e },
		r = {
			submitCount: 0,
			isDirty: !1,
			isLoading: ar(n.defaultValues),
			isValidating: !1,
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			touchedFields: {},
			dirtyFields: {},
			errors: {},
		},
		i = {},
		s =
			nt(n.defaultValues) || nt(n.values)
				? Jn(n.defaultValues || n.values) || {}
				: {},
		o = n.shouldUnregister ? {} : Jn(s),
		a = { action: !1, mount: !1, watch: !1 },
		l = {
			mount: new Set(),
			unMount: new Set(),
			array: new Set(),
			watch: new Set(),
		},
		u,
		d = 0;
	const f = {
			isDirty: !1,
			dirtyFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1,
		},
		p = { values: Pu(), array: Pu(), state: Pu() },
		b = e.resetOptions && e.resetOptions.keepDirtyValues,
		w = Jp(n.mode),
		E = Jp(n.reValidateMode),
		C = n.criteriaMode === tn.all,
		g = (S) => (T) => {
			clearTimeout(d), (d = setTimeout(S, T));
		},
		h = async (S) => {
			if (f.isValid || S) {
				const T = n.resolver ? Ut((await V()).errors) : await ie(i, !0);
				T !== r.isValid && p.state.next({ isValid: T });
			}
		},
		v = (S) => f.isValidating && p.state.next({ isValidating: S }),
		m = (S, T = [], A, ee, H = !0, $ = !0) => {
			if (ee && A) {
				if (((a.action = !0), $ && Array.isArray(ne(i, S)))) {
					const re = A(ne(i, S), ee.argA, ee.argB);
					H && Ae(i, S, re);
				}
				if ($ && Array.isArray(ne(r.errors, S))) {
					const re = A(ne(r.errors, S), ee.argA, ee.argB);
					H && Ae(r.errors, S, re), DN(r.errors, S);
				}
				if (f.touchedFields && $ && Array.isArray(ne(r.touchedFields, S))) {
					const re = A(ne(r.touchedFields, S), ee.argA, ee.argB);
					H && Ae(r.touchedFields, S, re);
				}
				f.dirtyFields && (r.dirtyFields = Iu(s, o)),
					p.state.next({
						name: S,
						isDirty: te(S, T),
						dirtyFields: r.dirtyFields,
						errors: r.errors,
						isValid: r.isValid,
					});
			} else Ae(o, S, T);
		},
		_ = (S, T) => {
			Ae(r.errors, S, T), p.state.next({ errors: r.errors });
		},
		O = (S, T, A, ee) => {
			const H = ne(i, S);
			if (H) {
				const $ = ne(o, S, He(A) ? ne(s, S) : A);
				He($) || (ee && ee.defaultChecked) || T
					? Ae(o, S, T ? $ : ju(H._f))
					: fe(S, $),
					a.mount && h();
			}
		},
		P = (S, T, A, ee, H) => {
			let $ = !1,
				re = !1;
			const Se = { name: S };
			if (!A || ee) {
				f.isDirty &&
					((re = r.isDirty),
					(r.isDirty = Se.isDirty = te()),
					($ = re !== Se.isDirty));
				const ke = Dr(ne(s, S), T);
				(re = ne(r.dirtyFields, S)),
					ke ? st(r.dirtyFields, S) : Ae(r.dirtyFields, S, !0),
					(Se.dirtyFields = r.dirtyFields),
					($ = $ || (f.dirtyFields && re !== !ke));
			}
			if (A) {
				const ke = ne(r.touchedFields, S);
				ke ||
					(Ae(r.touchedFields, S, A),
					(Se.touchedFields = r.touchedFields),
					($ = $ || (f.touchedFields && ke !== A)));
			}
			return $ && H && p.state.next(Se), $ ? Se : {};
		},
		N = (S, T, A, ee) => {
			const H = ne(r.errors, S),
				$ = f.isValid && Oi(T) && r.isValid !== T;
			if (
				(e.delayError && A
					? ((u = g(() => _(S, A))), u(e.delayError))
					: (clearTimeout(d),
					  (u = null),
					  A ? Ae(r.errors, S, A) : st(r.errors, S)),
				(A ? !Dr(H, A) : H) || !Ut(ee) || $)
			) {
				const re = {
					...ee,
					...($ && Oi(T) ? { isValid: T } : {}),
					errors: r.errors,
					name: S,
				};
				(r = { ...r, ...re }), p.state.next(re);
			}
			v(!1);
		},
		V = async (S) =>
			n.resolver(
				o,
				n.context,
				jN(S || l.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
			),
		K = async (S) => {
			const { errors: T } = await V();
			if (S)
				for (const A of S) {
					const ee = ne(T, A);
					ee ? Ae(r.errors, A, ee) : st(r.errors, A);
				}
			else r.errors = T;
			return T;
		},
		ie = async (S, T, A = { valid: !0 }) => {
			for (const ee in S) {
				const H = S[ee];
				if (H) {
					const { _f: $, ...re } = H;
					if ($) {
						const Se = l.array.has($.name),
							ke = await nm(H, o, C, n.shouldUseNativeValidation && !T, Se);
						if (ke[$.name] && ((A.valid = !1), T)) break;
						!T &&
							(ne(ke, $.name)
								? Se
									? ON(r.errors, ke, $.name)
									: Ae(r.errors, $.name, ke[$.name])
								: st(r.errors, $.name));
					}
					re && (await ie(re, T, A));
				}
			}
			return A.valid;
		},
		Q = () => {
			for (const S of l.unMount) {
				const T = ne(i, S);
				T &&
					(T._f.refs ? T._f.refs.every((A) => !Tu(A)) : !Tu(T._f.ref)) &&
					qe(S);
			}
			l.unMount = new Set();
		},
		te = (S, T) => (S && T && Ae(o, S, T), !Dr(he(), s)),
		oe = (S, T, A) =>
			RN(S, l, { ...(a.mount ? o : He(T) ? s : fn(S) ? { [S]: T } : T) }, A, T),
		me = (S) =>
			So(ne(a.mount ? o : s, S, e.shouldUnregister ? ne(s, S, []) : [])),
		fe = (S, T, A = {}) => {
			const ee = ne(i, S);
			let H = T;
			if (ee) {
				const $ = ee._f;
				$ &&
					(!$.disabled && Ae(o, S, g0(T, $)),
					(H = el($.ref) && gt(T) ? "" : T),
					p0($.ref)
						? [...$.ref.options].forEach(
								(re) => (re.selected = H.includes(re.value))
						  )
						: $.refs
						? Eo($.ref)
							? $.refs.length > 1
								? $.refs.forEach(
										(re) =>
											(!re.defaultChecked || !re.disabled) &&
											(re.checked = Array.isArray(H)
												? !!H.find((Se) => Se === re.value)
												: H === re.value)
								  )
								: $.refs[0] && ($.refs[0].checked = !!H)
							: $.refs.forEach((re) => (re.checked = re.value === H))
						: bf($.ref)
						? ($.ref.value = "")
						: (($.ref.value = H),
						  $.ref.type || p.values.next({ name: S, values: { ...o } })));
			}
			(A.shouldDirty || A.shouldTouch) &&
				P(S, H, A.shouldTouch, A.shouldDirty, !0),
				A.shouldValidate && J(S);
		},
		we = (S, T, A) => {
			for (const ee in T) {
				const H = T[ee],
					$ = `${S}.${ee}`,
					re = ne(i, $);
				(l.array.has(S) || !nl(H) || (re && !re._f)) && !vi(H)
					? we($, H, A)
					: fe($, H, A);
			}
		},
		B = (S, T, A = {}) => {
			const ee = ne(i, S),
				H = l.array.has(S),
				$ = Jn(T);
			Ae(o, S, $),
				H
					? (p.array.next({ name: S, values: { ...o } }),
					  (f.isDirty || f.dirtyFields) &&
							A.shouldDirty &&
							p.state.next({
								name: S,
								dirtyFields: Iu(s, o),
								isDirty: te(S, $),
							}))
					: ee && !ee._f && !gt($)
					? we(S, $, A)
					: fe(S, $, A),
				Yp(S, l) && p.state.next({ ...r }),
				p.values.next({ name: S, values: { ...o } }),
				!a.mount && t();
		},
		X = async (S) => {
			const T = S.target;
			let A = T.name,
				ee = !0;
			const H = ne(i, A),
				$ = () => (T.type ? ju(H._f) : xN(S));
			if (H) {
				let re, Se;
				const ke = $(),
					Ot = S.type === Gp.BLUR || S.type === Gp.FOCUS_OUT,
					Hn =
						(!AN(H._f) && !n.resolver && !ne(r.errors, A) && !H._f.deps) ||
						LN(Ot, ne(r.touchedFields, A), r.isSubmitted, E, w),
					M = Yp(A, l, Ot);
				Ae(o, A, ke),
					Ot
						? (H._f.onBlur && H._f.onBlur(S), u && u(0))
						: H._f.onChange && H._f.onChange(S);
				const R = P(A, ke, Ot, !1),
					F = !Ut(R) || M;
				if (
					(!Ot && p.values.next({ name: A, type: S.type, values: { ...o } }),
					Hn)
				)
					return (
						f.isValid && h(), F && p.state.next({ name: A, ...(M ? {} : R) })
					);
				if ((!Ot && M && p.state.next({ ...r }), v(!0), n.resolver)) {
					const { errors: U } = await V([A]),
						ce = rm(r.errors, i, A),
						de = rm(U, i, ce.name || A);
					(re = de.error), (A = de.name), (Se = Ut(U));
				} else
					(re = (await nm(H, o, C, n.shouldUseNativeValidation))[A]),
						(ee = isNaN(ke) || ke === ne(o, A, ke)),
						ee && (re ? (Se = !1) : f.isValid && (Se = await ie(i, !0)));
				ee && (H._f.deps && J(H._f.deps), N(A, Se, re, R));
			}
		},
		J = async (S, T = {}) => {
			let A, ee;
			const H = Ou(S);
			if ((v(!0), n.resolver)) {
				const $ = await K(He(S) ? S : H);
				(A = Ut($)), (ee = S ? !H.some((re) => ne($, re)) : A);
			} else
				S
					? ((ee = (
							await Promise.all(
								H.map(async ($) => {
									const re = ne(i, $);
									return await ie(re && re._f ? { [$]: re } : re);
								})
							)
					  ).every(Boolean)),
					  !(!ee && !r.isValid) && h())
					: (ee = A = await ie(i));
			return (
				p.state.next({
					...(!fn(S) || (f.isValid && A !== r.isValid) ? {} : { name: S }),
					...(n.resolver || !S ? { isValid: A } : {}),
					errors: r.errors,
					isValidating: !1,
				}),
				T.shouldFocus &&
					!ee &&
					Yc(i, ($) => $ && ne(r.errors, $), S ? H : l.mount),
				ee
			);
		},
		he = (S) => {
			const T = { ...s, ...(a.mount ? o : {}) };
			return He(S) ? T : fn(S) ? ne(T, S) : S.map((A) => ne(T, A));
		},
		pe = (S, T) => ({
			invalid: !!ne((T || r).errors, S),
			isDirty: !!ne((T || r).dirtyFields, S),
			isTouched: !!ne((T || r).touchedFields, S),
			error: ne((T || r).errors, S),
		}),
		Oe = (S) => {
			S && Ou(S).forEach((T) => st(r.errors, T)),
				p.state.next({ errors: S ? r.errors : {} });
		},
		se = (S, T, A) => {
			const ee = (ne(i, S, { _f: {} })._f || {}).ref;
			Ae(r.errors, S, { ...T, ref: ee }),
				p.state.next({ name: S, errors: r.errors, isValid: !1 }),
				A && A.shouldFocus && ee && ee.focus && ee.focus();
		},
		Ce = (S, T) =>
			ar(S)
				? p.values.subscribe({ next: (A) => S(oe(void 0, T), A) })
				: oe(S, T, !0),
		qe = (S, T = {}) => {
			for (const A of S ? Ou(S) : l.mount)
				l.mount.delete(A),
					l.array.delete(A),
					T.keepValue || (st(i, A), st(o, A)),
					!T.keepError && st(r.errors, A),
					!T.keepDirty && st(r.dirtyFields, A),
					!T.keepTouched && st(r.touchedFields, A),
					!n.shouldUnregister && !T.keepDefaultValue && st(s, A);
			p.values.next({ values: { ...o } }),
				p.state.next({ ...r, ...(T.keepDirty ? { isDirty: te() } : {}) }),
				!T.keepIsValid && h();
		},
		mt = (S, T = {}) => {
			let A = ne(i, S);
			const ee = Oi(T.disabled);
			return (
				Ae(i, S, {
					...(A || {}),
					_f: {
						...(A && A._f ? A._f : { ref: { name: S } }),
						name: S,
						mount: !0,
						...T,
					},
				}),
				l.mount.add(S),
				He(T.value) || Ae(o, S, T.value),
				A
					? ee && Ae(o, S, T.disabled ? void 0 : ne(o, S, ju(A._f)))
					: O(S, !0, T.value),
				{
					...(ee ? { disabled: T.disabled } : {}),
					...(n.progressive
						? {
								required: !!T.required,
								min: ps(T.min),
								max: ps(T.max),
								minLength: ps(T.minLength),
								maxLength: ps(T.maxLength),
								pattern: ps(T.pattern),
						  }
						: {}),
					name: S,
					onChange: X,
					onBlur: X,
					ref: (H) => {
						if (H) {
							mt(S, T), (A = ne(i, S));
							const $ =
									(He(H.value) &&
										H.querySelectorAll &&
										H.querySelectorAll("input,select,textarea")[0]) ||
									H,
								re = IN($),
								Se = A._f.refs || [];
							if (re ? Se.find((ke) => ke === $) : $ === A._f.ref) return;
							Ae(i, S, {
								_f: {
									...A._f,
									...(re
										? {
												refs: [
													...Se.filter(Tu),
													$,
													...(Array.isArray(ne(s, S)) ? [{}] : []),
												],
												ref: { type: $.type, name: S },
										  }
										: { ref: $ }),
								},
							}),
								O(S, !1, void 0, $);
						} else
							(A = ne(i, S, {})),
								A._f && (A._f.mount = !1),
								(n.shouldUnregister || T.shouldUnregister) &&
									!(EN(l.array, S) && a.action) &&
									l.unMount.add(S);
					},
				}
			);
		},
		Fe = () =>
			n.shouldFocusError && Yc(i, (S) => S && ne(r.errors, S), l.mount),
		wn = (S, T) => async (A) => {
			A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
			let ee = Jn(o);
			if ((p.state.next({ isSubmitting: !0 }), n.resolver)) {
				const { errors: H, values: $ } = await V();
				(r.errors = H), (ee = $);
			} else await ie(i);
			st(r.errors, "root"),
				Ut(r.errors)
					? (p.state.next({ errors: {} }), await S(ee, A))
					: (T && (await T({ ...r.errors }, A)), Fe(), setTimeout(Fe)),
				p.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: Ut(r.errors),
					submitCount: r.submitCount + 1,
					errors: r.errors,
				});
		},
		Qt = (S, T = {}) => {
			ne(i, S) &&
				(He(T.defaultValue)
					? B(S, ne(s, S))
					: (B(S, T.defaultValue), Ae(s, S, T.defaultValue)),
				T.keepTouched || st(r.touchedFields, S),
				T.keepDirty ||
					(st(r.dirtyFields, S),
					(r.isDirty = T.defaultValue ? te(S, ne(s, S)) : te())),
				T.keepError || (st(r.errors, S), f.isValid && h()),
				p.state.next({ ...r }));
		},
		$e = (S, T = {}) => {
			const A = S || s,
				ee = Jn(A),
				H = S && !Ut(S) ? ee : s;
			if ((T.keepDefaultValues || (s = A), !T.keepValues)) {
				if (T.keepDirtyValues || b)
					for (const $ of l.mount)
						ne(r.dirtyFields, $) ? Ae(H, $, ne(o, $)) : B($, ne(H, $));
				else {
					if (wf && He(S))
						for (const $ of l.mount) {
							const re = ne(i, $);
							if (re && re._f) {
								const Se = Array.isArray(re._f.refs)
									? re._f.refs[0]
									: re._f.ref;
								if (el(Se)) {
									const ke = Se.closest("form");
									if (ke) {
										ke.reset();
										break;
									}
								}
							}
						}
					i = {};
				}
				(o = e.shouldUnregister ? (T.keepDefaultValues ? Jn(s) : {}) : Jn(H)),
					p.array.next({ values: { ...H } }),
					p.values.next({ values: { ...H } });
			}
			(l = {
				mount: new Set(),
				unMount: new Set(),
				array: new Set(),
				watch: new Set(),
				watchAll: !1,
				focus: "",
			}),
				!a.mount && t(),
				(a.mount = !f.isValid || !!T.keepIsValid),
				(a.watch = !!e.shouldUnregister),
				p.state.next({
					submitCount: T.keepSubmitCount ? r.submitCount : 0,
					isDirty: T.keepDirty
						? r.isDirty
						: !!(T.keepDefaultValues && !Dr(S, s)),
					isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
					dirtyFields: T.keepDirtyValues
						? r.dirtyFields
						: T.keepDefaultValues && S
						? Iu(s, S)
						: {},
					touchedFields: T.keepTouched ? r.touchedFields : {},
					errors: T.keepErrors ? r.errors : {},
					isSubmitting: !1,
					isSubmitSuccessful: !1,
				});
		},
		Je = (S, T) => $e(ar(S) ? S(o) : S, T);
	return {
		control: {
			register: mt,
			unregister: qe,
			getFieldState: pe,
			handleSubmit: wn,
			setError: se,
			_executeSchema: V,
			_getWatch: oe,
			_getDirty: te,
			_updateValid: h,
			_removeUnmounted: Q,
			_updateFieldArray: m,
			_getFieldArray: me,
			_reset: $e,
			_resetDefaultValues: () =>
				ar(n.defaultValues) &&
				n.defaultValues().then((S) => {
					Je(S, n.resetOptions), p.state.next({ isLoading: !1 });
				}),
			_updateFormState: (S) => {
				r = { ...r, ...S };
			},
			_subjects: p,
			_proxyFormState: f,
			get _fields() {
				return i;
			},
			get _formValues() {
				return o;
			},
			get _state() {
				return a;
			},
			set _state(S) {
				a = S;
			},
			get _defaultValues() {
				return s;
			},
			get _names() {
				return l;
			},
			set _names(S) {
				l = S;
			},
			get _formState() {
				return r;
			},
			set _formState(S) {
				r = S;
			},
			get _options() {
				return n;
			},
			set _options(S) {
				n = { ...n, ...S };
			},
		},
		trigger: J,
		register: mt,
		handleSubmit: wn,
		watch: Ce,
		setValue: B,
		getValues: he,
		reset: Je,
		resetField: Qt,
		clearErrors: Oe,
		unregister: qe,
		setError: se,
		setFocus: (S, T = {}) => {
			const A = ne(i, S),
				ee = A && A._f;
			if (ee) {
				const H = ee.refs ? ee.refs[0] : ee.ref;
				H.focus && (H.focus(), T.shouldSelect && H.select());
			}
		},
		getFieldState: pe,
	};
}
function Sf(e = {}) {
	const t = at.useRef(),
		n = at.useRef(),
		[r, i] = at.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: ar(e.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			errors: {},
			defaultValues: ar(e.defaultValues) ? void 0 : e.defaultValues,
		});
	t.current ||
		(t.current = { ...FN(e, () => i((o) => ({ ...o }))), formState: r });
	const s = t.current.control;
	return (
		(s._options = e),
		kN({
			subject: s._subjects.state,
			next: (o) => {
				CN(o, s._proxyFormState, s._updateFormState, !0) &&
					i({ ...s._formState });
			},
		}),
		at.useEffect(() => {
			e.values && !Dr(e.values, n.current)
				? (s._reset(e.values, s._options.resetOptions), (n.current = e.values))
				: s._resetDefaultValues();
		}, [e.values, s]),
		at.useEffect(() => {
			s._state.mount || (s._updateValid(), (s._state.mount = !0)),
				s._state.watch &&
					((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
				s._removeUnmounted();
		}),
		(t.current.formState = _N(r, s)),
		t.current
	);
}
const UN = () => {
		const [e, t] = I.useState(!1),
			{
				profileUserData: n,
				profileUserLoading: r,
				profileUserRefetch: i,
			} = gN(),
			{
				register: s,
				handleSubmit: o,
				watch: a,
				formState: { errors: l },
			} = Sf(),
			u = (f) => {
				console.log("clicked"), console.log("editData-> ", f), console.log(l);
			};
		console.log("running", n);
		const d =
			"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-2";
		return c.jsx(c.Fragment, {
			children: c.jsx("section", {
				className: "pt-16 bg-blueGray-50",
				children: c.jsx("div", {
					className: "w-full lg:w-4/12 px-4 mx-auto",
					children: c.jsxs("div", {
						className:
							"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16",
						children: [
							c.jsx("button", {
								onClick: () => t(!e),
								className:
									"absolute right-4 top-4 transition duration-300 bg-slate-100 hover:bg-slate-300 p-2 rounded hover:shadow-md",
								children: e
									? c.jsx(wN, { className: "w-6 h-6" })
									: c.jsx(vN, { className: "w-6 h-6" }),
							}),
							c.jsxs("div", {
								className: "px-6 py-7",
								children: [
									c.jsx("div", {
										className: "flex flex-wrap justify-center mt-6",
										children: c.jsx("div", {
											className: "w-full px-4 flex justify-center",
											children: c.jsx("figure", {
												className: "",
												children: c.jsx("img", {
													alt: "...",
													src: n == null ? void 0 : n.photoURL,
													className:
														"align-middle border-none h-auto max-w-150-px rounded-full shadow-xl",
												}),
											}),
										}),
									}),
									c.jsx("div", {
										className: "text-center mt-5",
										children: e
											? c.jsxs("form", {
													onSubmit: o(u),
													children: [
														c.jsxs("div", {
															className: "text-center mt-5",
															children: [
																c.jsx("input", {
																	...s("photoURL", { required: !0 }),
																	defaultValue: n == null ? void 0 : n.photoURL,
																	placeholder: "Your Profile Image change...",
																	className: d,
																}),
																c.jsx("input", {
																	defaultValue:
																		n == null ? void 0 : n.displayName,
																	...s("displayName"),
																	placeholder: "Your name...",
																	className: d,
																}),
																c.jsx("input", {
																	...s("email", { required: !0 }),
																	defaultValue: n == null ? void 0 : n.email,
																	disabled: !0,
																	placeholder: "Your Email...",
																	className: d + "select-none",
																}),
																c.jsx("input", {
																	...s("phoneNumber", { required: !0 }),
																	defaultValue:
																		n == null ? void 0 : n.phoneNumber,
																	placeholder: "Your Phone Number...",
																	className: d,
																}),
																c.jsx("input", {
																	...s("about", { required: !0 }),
																	defaultValue: n == null ? void 0 : n.about,
																	placeholder: "About Your Self...",
																	className: d,
																}),
																c.jsx("input", {
																	...s("address", { required: !0 }),
																	defaultValue: n == null ? void 0 : n.address,
																	placeholder: "Your Address ...",
																	className: d,
																}),
																c.jsx("input", {
																	...s("education", { required: !0 }),
																	defaultValue:
																		n == null ? void 0 : n.education,
																	placeholder: "Your Education Name...",
																	className: d,
																}),
																c.jsx("input", {
																	...s("gender", { required: !0 }),
																	defaultValue: n == null ? void 0 : n.gender,
																	placeholder: "Gender - Male or Female",
																	className: d,
																}),
															],
														}),
														l.exampleRequired &&
															c.jsx("span", {
																children: "This field is required",
															}),
														c.jsx("input", {
															type: "submit",
															value: "Save",
															className:
																"absolute left-4 top-4 cursor-pointer transition duration-300 bg-green-100 hover:bg-green-300 p-2 rounded hover:shadow-md",
														}),
													],
											  })
											: c.jsxs("div", {
													className: "pb-7",
													children: [
														c.jsxs("div", {
															children: [
																c.jsxs("p", {
																	children: [
																		"His/Her,",
																		c.jsx("span", {
																			className: "font-semibold",
																			children:
																				n == null
																					? void 0
																					: n.displayName
																							.split(" ")
																							.slice(0, 2)
																							.join(" "),
																		}),
																	],
																}),
																c.jsxs("h3", {
																	className: "text-2xl font-semibold",
																	children: [
																		" ",
																		n == null ? void 0 : n.displayName,
																		" ",
																	],
																}),
																c.jsxs("p", {
																	children: [
																		" ",
																		(n == null ? void 0 : n.about) ||
																			"Write a About Your Self",
																		" ",
																	],
																}),
															],
														}),
														c.jsxs("div", {
															className: "border-t",
															children: [
																c.jsxs("p", {
																	children: [
																		" ",
																		(n == null ? void 0 : n.email) ||
																			"Your Email ",
																	],
																}),
																c.jsxs("p", {
																	children: [
																		" ",
																		(n == null ? void 0 : n.phoneNumber) ||
																			"Your Contact Number",
																	],
																}),
															],
														}),
														c.jsxs("div", {
															className: "border-t",
															children: [
																c.jsxs("p", {
																	children: [
																		" ",
																		(n == null ? void 0 : n.address) ||
																			"set Your Location ",
																	],
																}),
																c.jsxs("p", {
																	children: [
																		" ",
																		(n == null ? void 0 : n.gender) ||
																			"Set Your Gender",
																		" ",
																	],
																}),
																c.jsx("p", {
																	children:
																		(n == null ? void 0 : n.education) ||
																		"Set Your College",
																}),
															],
														}),
													],
											  }),
									}),
								],
							}),
						],
					}),
				}),
			}),
		});
	},
	BN = ({ college: e, showCollegeDetails: t }) => {
		var n;
		return c.jsxs("div", {
			className:
				"max-w-xs flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white m-4",
			children: [
				c.jsx("img", {
					src: e.image,
					alt: e.name,
					className: "w-full h-48 object-cover",
				}),
				c.jsxs("div", {
					className: "px-6 py-4",
					children: [
						c.jsx("div", {
							className: "font-bold text-xl mb-2",
							children: e.name,
						}),
						c.jsxs("p", {
							className: "text-gray-700 text-base",
							children: ["Rating: ", e.rating],
						}),
						c.jsxs("p", {
							className: "text-gray-700 text-base",
							children: ["Admission Date: ", e.admissionDate],
						}),
						c.jsxs("p", {
							className: "text-gray-700 text-base",
							children: [
								"Research Count: ",
								(n = e == null ? void 0 : e.research) == null
									? void 0
									: n.length,
							],
						}),
					],
				}),
				c.jsxs("div", {
					className: "flex gap-2",
					children: [
						c.jsx("button", {
							onClick: () => t(e),
							className:
								"mt-4 transition duration-300 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
							children: "Details",
						}),
						c.jsx(br, {
							to: `/admission/${e._id}`,
							className:
								"mt-4 transition duration-300 block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
							children: "Admission",
						}),
					],
				}),
			],
		});
	},
	zN = ({ college: e, closeModal: t }) => {
		var n;
		return c.jsx("div", {
			className:
				"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-gray-900",
			onClick: t,
			children: c.jsxs("div", {
				className:
					"max-w-md p-8 bg-white rounded-lg shadow-lg h-[95vh] overflow-y-scroll",
				children: [
					c.jsx("img", {
						src: e == null ? void 0 : e.image,
						alt: e == null ? void 0 : e.name,
						className: "w-full h-48 object-cover mb-4",
					}),
					c.jsx("div", {
						className: "font-bold text-xl mb-2",
						children: e == null ? void 0 : e.name,
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Rating: ", e == null ? void 0 : e.rating],
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: [
							"Admission Date: ",
							e == null ? void 0 : e.admissionDate,
						],
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: [
							"Research Count: ",
							(n = e == null ? void 0 : e.research) == null ? void 0 : n.length,
						],
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Location: ", e == null ? void 0 : e.location],
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Description: ", e == null ? void 0 : e.description],
					}),
					c.jsxs("p", {
						className: "text-gray-700 text-base",
						children: ["Type: ", e == null ? void 0 : e.type],
					}),
					c.jsx("h3", { className: "font-bold mt-4", children: "Events" }),
					c.jsx("ul", {
						className: "list-disc ml-6",
						children:
							e == null
								? void 0
								: e.events.map((r, i) => c.jsx("li", { children: r }, i)),
					}),
					c.jsx("h3", {
						className: "font-bold mt-4",
						children: "Sports Facilities",
					}),
					c.jsx("ul", {
						className: "list-disc ml-6",
						children:
							e == null
								? void 0
								: e.sportsFacilities.map((r, i) =>
										c.jsx("li", { children: r }, i)
								  ),
					}),
				],
			}),
		});
	},
	v0 = () => {
		const { axiosCall: e } = Xi(),
			{ authLoading: t } = on(),
			{
				data: n = [],
				isLoading: r,
				refetch: i,
			} = Ji({
				queryKey: ["colleges"],
				enabled: !t,
				queryFn: async () => (await e("/colleges")).data,
			});
		return { collegesData: n, collegeLoading: r, collegeRefetch: i };
	},
	$N = () => {
		const { collegesData: e, collegeLoading: t, collegeRefetch: n } = v0(),
			[r, i] = I.useState(null),
			s = (a) => {
				i(a);
			},
			o = () => {
				i(null);
			};
		return c.jsxs("div", {
			className: "flex flex-wrap justify-center",
			children: [
				e.map((a, l) => c.jsx(BN, { college: a, showCollegeDetails: s }, l)),
				r && c.jsx(zN, { college: r, closeModal: o }),
			],
		});
	},
	VN = () => {
		const { collegesData: e, collegeLoading: t, collegeRefetch: n } = v0();
		return (
			console.log("collegesData -> ", e),
			c.jsx("div", {
				children: c.jsxs("h1", {
					children: [" This is a Admission page ", e.length, " "],
				}),
			})
		);
	},
	HN = () => c.jsx("div", { children: "this is my college" }),
	WN = "/assets/404-laptop-fc3afcbe.png",
	qN = () =>
		c.jsxs("div", {
			className: "flex flex-col items-center justify-center min-h-screen",
			children: [
				c.jsx("img", { src: WN, alt: "404 Error", className: "w-64 mb-4" }),
				c.jsx("div", {
					className: "text-6xl font-bold text-red-600",
					children: "404",
				}),
				c.jsx("div", {
					className: "text-2xl text-gray-800",
					children: "Page not found",
				}),
				c.jsx(br, {
					to: "/",
					className:
						"mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700",
					children: "Back to Home",
				}),
			],
		}),
	KN = () => {
		const e = Ng(),
			t = Pg();
		return (
			console.log("params -> ", e),
			console.log("Loader Date -> ", t),
			c.jsx(c.Fragment, {
				children: c.jsx("section", {
					className: "text-gray-600 body-font",
					children: c.jsxs("div", {
						className: "container px-5 py-24 mx-auto flex flex-wrap",
						children: [
							c.jsx("div", {
								className:
									"lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden",
								children: c.jsx("img", {
									alt: "feature",
									className: "object-cover object-center h-full w-full",
									src: "https://dummyimage.com/460x500",
								}),
							}),
							c.jsxs("div", {
								className:
									"flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center",
								children: [
									c.jsx("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: c.jsxs("div", {
											children: [
												c.jsxs("h1", {
													className: "text-2xl font-bold",
													children: [
														" ",
														c.jsx("span", {
															className: "font-semibold",
															children: " College Name: ",
														}),
														t == null ? void 0 : t.name,
														" ",
													],
												}),
												c.jsxs("p", {
													children: [
														" ",
														c.jsxs("span", {
															className: "font-semibold",
															children: [" ", "Admission Dates :", " "],
														}),
														" ",
														t == null ? void 0 : t.admissionDates,
														" ",
													],
												}),
											],
										}),
									}),
									c.jsx("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: c.jsxs("div", {
											children: [
												c.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														c.jsx("h2", {
															className: "font-bold mb-2",
															children: " Events: ",
														}),
														(t == null ? void 0 : t.events) &&
															(t == null
																? void 0
																: t.events.map((n) =>
																		c.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					c.jsxs("h3", {
																						children: [
																							" ",
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Event Name:",
																							}),
																							" ",
																							n == null ? void 0 : n.name,
																							" ",
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							" ",
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Location:",
																							}),
																							" ",
																							n == null ? void 0 : n.location,
																							" ",
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							" ",
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Date:",
																							}),
																							" ",
																							n == null ? void 0 : n.date,
																							" ",
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							" ",
																							c.jsx("span", {
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
												c.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														c.jsx("h2", {
															className: "font-bold mb-2",
															children: " Research History : ",
														}),
														(t == null ? void 0 : t.researchHistory) &&
															(t == null
																? void 0
																: t.researchHistory.map((n) =>
																		c.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					c.jsxs("h3", {
																						children: [
																							" ",
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Title:",
																							}),
																							" ",
																							n == null ? void 0 : n.title,
																							" ",
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Publication Data:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.publicationData,
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Description:",
																							}),
																							" ",
																							n == null
																								? void 0
																								: n.description,
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Authors :",
																							}),
																							n == null
																								? void 0
																								: n.authors.map((r) =>
																										c.jsxs(
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
												c.jsxs("div", {
													className: "border bg-slate-50 px-3 py-1 mb-4",
													children: [
														c.jsx("h2", {
															className: "font-bold mb-2",
															children: " Sports: ",
														}),
														(t == null ? void 0 : t.sports) &&
															(t == null
																? void 0
																: t.sports.map((n) =>
																		c.jsxs(
																			"div",
																			{
																				className:
																					"text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2",
																				children: [
																					c.jsxs("h3", {
																						children: [
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Name: ",
																							}),
																							n == null ? void 0 : n.name,
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							c.jsx("span", {
																								className: "font-medium",
																								children: "Coach:",
																							}),
																							" ",
																							n == null ? void 0 : n.coach,
																						],
																					}),
																					c.jsxs("p", {
																						children: [
																							c.jsx("span", {
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
									c.jsxs("div", {
										className:
											"flex flex-col mb-10 lg:items-start items-center",
										children: [
											c.jsx("div", {
												className:
													"w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5",
												children: c.jsxs("svg", {
													fill: "none",
													stroke: "currentColor",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 2,
													className: "w-6 h-6",
													viewBox: "0 0 24 24",
													children: [
														c.jsx("path", {
															d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
														}),
														c.jsx("circle", { cx: 12, cy: 7, r: 4 }),
													],
												}),
											}),
											c.jsxs("div", {
												className: "flex-grow",
												children: [
													c.jsx("h2", {
														className:
															"text-gray-900 text-lg title-font font-medium mb-3",
														children: "Neptune",
													}),
													c.jsx("p", {
														className: "leading-relaxed text-base",
														children:
															"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
													}),
													c.jsxs("a", {
														className:
															"mt-3 text-indigo-500 inline-flex items-center",
														children: [
															"Learn More",
															c.jsx("svg", {
																fill: "none",
																stroke: "currentColor",
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																className: "w-4 h-4 ml-2",
																viewBox: "0 0 24 24",
																children: c.jsx("path", {
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
	QN = ({ clg: e }) => {
		const { user: t } = on(),
			{
				register: n,
				handleSubmit: r,
				watch: i,
				formState: { errors: s },
			} = Sf(),
			o = (a) => {
				console.log(e);
				const l = { ...a };
				console.log("candidate -> ", l), console.log("user -> ", t);
			};
		return c.jsx(c.Fragment, {
			children: c.jsxs("form", {
				className: "max-w-md mx-auto bg-white p-5 rounded-lg shadow-md",
				onSubmit: r(o),
				children: [
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "candidateName",
								children: "Candidate Name",
							}),
							c.jsx("input", {
								...n("CandidateName", { required: !0 }),
								defaultValue: t == null ? void 0 : t.displayName,
								disabled: !0,
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "candidateName",
								type: "text",
								placeholder: "John Doe",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "candidateEmail",
								children: "Candidate Email",
							}),
							c.jsx("input", {
								...n("CandidateEmail", { required: !0 }),
								defaultValue: t == null ? void 0 : t.email,
								disabled: !0,
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "candidateEmail",
								type: "email",
								placeholder: "john.doe@example.com",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "subject",
								children: "Subject",
							}),
							c.jsx("input", {
								...n("CandidateSubject", { required: !0 }),
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "subject",
								type: "text",
								placeholder: "Computer Science",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "candidatePhone",
								children: "Candidate Phone Number",
							}),
							c.jsx("input", {
								...n("CandidateNumber", { required: !0 }),
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "candidatePhone",
								type: "tel",
								placeholder: "123-456-7890",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "address",
								children: "Address",
							}),
							c.jsx("input", {
								...n("CandidateAddress", { required: !0 }),
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "address",
								type: "text",
								placeholder: "123 Main St",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "dateOfBirth",
								children: "Date of Birth",
							}),
							c.jsx("input", {
								...n("CandidateDateOfBirth", { required: !0 }),
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "dateOfBirth",
								type: "date",
								required: !0,
							}),
						],
					}),
					c.jsxs("div", {
						className: "mb-4",
						children: [
							c.jsx("label", {
								className: "block text-gray-700 font-bold mb-2",
								htmlFor: "image",
								children: "Image",
							}),
							c.jsx("input", {
								...n("CandidateImage", { required: !0 }),
								className:
									"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
								id: "image",
								type: "url",
								required: !0,
							}),
						],
					}),
					c.jsx("button", {
						type: "submit",
						className:
							"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
						children: "Submit",
					}),
				],
			}),
		});
	},
	GN = () => {
		Ng();
		const e = Pg();
		return (
			console.log("ClgLoad -> ", e),
			c.jsx("div", {
				children: c.jsxs("div", {
					className: "relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col",
					children: [
						c.jsx("div", {
							className:
								"w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl",
							children: c.jsx("div", {
								className: "mb-0 lg:max-w-lg lg:pr-8 xl:pr-6",
								children: c.jsx(QN, { clg: e }),
							}),
						}),
						c.jsx("div", {
							className:
								"inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0",
							children: c.jsx("img", {
								className:
									"object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full",
								src: e == null ? void 0 : e.image,
								alt: "",
							}),
						}),
					],
				}),
			})
		);
	},
	JN = ({ fm: e }) => {
		Sl();
		const {
				register: t,
				handleSubmit: n,
				watch: r,
				formState: { errors: i },
			} = Sf(),
			[s, o] = I.useState(!0),
			[a, l] = I.useState(!0);
		on();
		const u = (d) => {
			console.log("events -> ", d), console.log("errors -> ", i);
		};
		return c.jsxs("div", {
			className:
				"bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
			children: [
				c.jsxs("div", {
					className: "sm:mx-auto sm:w-full sm:max-w-md",
					children: [
						c.jsx("h2", {
							className:
								"text-center text-3xl font-extrabold text-gray-900 uppercase",
							children: "create a new account",
						}),
						c.jsxs("p", {
							className: "mt-2 text-center text-sm text-gray-600",
							children: [
								"Or  ",
								c.jsx("a", {
									href: "/login",
									className:
										"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
									children: "Login to your account",
								}),
							],
						}),
					],
				}),
				c.jsx("div", {
					className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
					children: c.jsx("div", {
						className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
						children: c.jsxs("form", {
							onSubmit: n(u),
							className: "space-y-6",
							children: [
								c.jsxs("div", {
									children: [
										c.jsx("label", {
											htmlFor: "fullName",
											className: "block text-sm font-medium text-gray-700",
											children: "Full Name",
										}),
										c.jsx("div", {
											className: "mt-1",
											children: c.jsx("input", {
												...t("fullName", { required: !0 }),
												id: "fullName",
												name: "fullName",
												type: "text",
												autoComplete: "FullName",
												className:
													"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
												required: !0,
											}),
										}),
									],
								}),
								c.jsxs("div", {
									children: [
										c.jsx("label", {
											htmlFor: "email",
											className: "block text-sm font-medium text-gray-700",
											children: "Email address",
										}),
										c.jsx("div", {
											className: "mt-1",
											children: c.jsx("input", {
												...t("email", { required: !0 }),
												id: "email",
												name: "email",
												type: "email",
												autoComplete: "email",
												required: !0,
												className:
													"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
											}),
										}),
									],
								}),
								c.jsxs("div", {
									children: [
										c.jsxs("label", {
											htmlFor: "photoUrl",
											className: "block text-sm font-medium text-gray-700",
											children: [
												"Photo URL ",
												c.jsx("small", { children: "( Optional )" }),
											],
										}),
										c.jsx("div", {
											className: "mt-1",
											children: c.jsx("input", {
												...t("photoUrl", { required: !0 }),
												id: "photoUrl",
												name: "photoUrl",
												type: "text",
												autoComplete: "current-photoUrl",
												className:
													"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
											}),
										}),
									],
								}),
								c.jsxs("div", {
									children: [
										c.jsx("label", {
											htmlFor: "password",
											className: "block text-sm font-medium text-gray-700",
											children: "Password",
										}),
										c.jsxs("div", {
											className: "mt-1 relative",
											children: [
												c.jsx("input", {
													...t("password", { required: !0 }),
													id: "password",
													type: s ? "password" : "text",
													required: !0,
													className:
														"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
												}),
												c.jsx(o0, {
													onClick: () => o(!s),
													className:
														"absolute right-3 cursor-pointer top-1/2 -translate-y-1/2",
												}),
											],
										}),
									],
								}),
								c.jsxs("div", {
									className: "flex items-center justify-between",
									children: [
										c.jsxs("div", {
											className: "flex items-center",
											children: [
												c.jsx("input", {
													onClick: () => l(!a),
													id: "remember_me",
													name: "remember_me",
													type: "checkbox",
													className:
														"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
												}),
												c.jsx("label", {
													htmlFor: "remember_me",
													className: "ml-2 block text-sm text-gray-900",
													children: "Remember me",
												}),
											],
										}),
										c.jsx("div", {
											className: "text-sm",
											children: c.jsx("a", {
												href: "#",
												className:
													"font-medium text-indigo-600 hover:underline hover:text-indigo-400",
												children: "Forgot your password?",
											}),
										}),
									],
								}),
								c.jsx("div", {
									children: c.jsx("button", {
										type: "submit",
										disabled: !!a,
										className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
											a
												? "bg-indigo-400 hover:bg-indigo-400"
												: "bg-indigo-600 hover:bg-indigo-700"
										} `,
										children: "Registration",
									}),
								}),
							],
						}),
					}),
				}),
			],
		});
	},
	YN = ob([
		{
			path: "/",
			element: c.jsx(tC, {}),
			errorElement: c.jsx(qN, {}),
			children: [
				{ path: "/", element: c.jsx(xR, {}) },
				{ path: "/colleges", element: c.jsx($N, {}) },
				{ path: "/admission", element: c.jsx(VN, {}) },
				{ path: "/my-college", element: c.jsx(HN, {}) },
				{ path: "/login", element: c.jsx(yN, {}) },
				{ path: "/registration", element: c.jsx(JN, {}) },
				{ path: "/profile", element: c.jsx(UN, {}) },
				{
					path: "/three-college/:id",
					loader: ({ params: e }) =>
						fetch(
							`https://college-booking-programmershipon.vercel.app/three-college/${
								e == null ? void 0 : e.id
							}`
						),
					element: c.jsx(KN, {}),
				},
				{
					path: "/admission/:id",
					loader: ({ params: e }) =>
						fetch(
							`https://college-booking-programmershipon.vercel.app/admission-form/${
								e == null ? void 0 : e.id
							}`
						),
					element: c.jsx(GN, {}),
				},
			],
		},
	]),
	XN = new yC();
Au.createRoot(document.getElementById("root")).render(
	c.jsx(at.StrictMode, {
		children: c.jsx(X_, {
			children: c.jsxs(IC, {
				client: XN,
				children: [c.jsx(Y1, { router: YN }), c.jsx(pN, {})],
			}),
		}),
	})
);
