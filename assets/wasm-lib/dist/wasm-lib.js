var f = Object.defineProperty;
var w = (t, s, c) => s in t ? f(t, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[s] = c;
var g = (t, s, c) => (w(t, typeof s != "symbol" ? s + "" : s, c), c);
var h = (t, s, c) => new Promise((m, v) => {
  var d = (e) => {
    try {
      n(c.next(e));
    } catch (a) {
      v(a);
    }
  }, l = (e) => {
    try {
      n(c.throw(e));
    } catch (a) {
      v(a);
    }
  }, n = (e) => e.done ? m(e.value) : Promise.resolve(e.value).then(d, l);
  n((c = c.apply(t, s)).next());
});
import r from "./wasm/em_xgd_chem.js";
const i = class {
  static smi2svg(s) {
    return h(this, null, function* () {
      if (i.chem === void 0) {
        const m = yield r();
        i.chem = new m.XgdChem();
      }
      return i.chem.smi2svg(s);
    });
  }
  static clean() {
    var s;
    (s = i.chem) == null || s.delete();
  }
};
let o = i;
g(o, "chem");
export {
  o as XgdChemWrapper
};
