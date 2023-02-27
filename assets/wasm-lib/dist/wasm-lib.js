var l = Object.defineProperty;
var p = (n, t, e) => t in n ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var h = (n, t, e) => (p(n, typeof t != "symbol" ? t + "" : t, e), e);
var g = (n, t, e) => new Promise((a, o) => {
  var m = (c) => {
    try {
      i(e.next(c));
    } catch (u) {
      o(u);
    }
  }, r = (c) => {
    try {
      i(e.throw(c));
    } catch (u) {
      o(u);
    }
  }, i = (c) => c.done ? a(c.value) : Promise.resolve(c.value).then(m, r);
  i((e = e.apply(n, t)).next());
});
import D from "./wasm/wasm_xgd_chem.js";
const s = class {
  static smi2svg(t) {
    return g(this, null, function* () {
      return this.convert({
        input: t,
        inputFormat: "smi",
        outputFormat: "svg",
        gen2D: !0,
        gen3D: !1
      });
    });
  }
  static convert(t) {
    return g(this, null, function* () {
      if (s.chem === void 0) {
        const i = yield D();
        s.chem = new i.XgdChem();
      }
      const { input: e, inputFormat: a, outputFormat: o, gen2D: m, gen3D: r } = t;
      return s.chem.convert(e, a, o, m, r);
    });
  }
  static clean() {
    var t;
    (t = s.chem) == null || t.delete();
  }
};
let v = s;
h(v, "chem");
export {
  v as XgdChemWrapper
};
