import * as ci from "react-icons/ci";
import * as fa6 from "react-icons/fa6";
import * as io5 from "react-icons/io5";
import * as md from "react-icons/md";
import * as ti from "react-icons/ti";
import * as go from "react-icons/go";
import * as fi from "react-icons/fi";
import * as gi from "react-icons/gi";
import * as wi from "react-icons/wi";
import * as di from "react-icons/di";
import * as ai from "react-icons/ai";
import * as bs from "react-icons/bs";
import * as ri from "react-icons/ri";
import * as fc from "react-icons/fc";
import * as gr from "react-icons/gr";
import * as hi2 from "react-icons/hi2";
import * as si from "react-icons/si";
import * as sl from "react-icons/sl";
import * as im from "react-icons/im";
import * as bi from "react-icons/bi";
import * as cg from "react-icons/cg";
import * as vsc from "react-icons/vsc";
import * as tb from "react-icons/tb";
import * as tfi from "react-icons/tfi";
import * as rx from "react-icons/rx";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
const ReactIcons = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null
}, [ci, fa6, io5, md, ti, go, fi, gi, wi, di, ai, bs, ri, fc, gr, hi2, si, sl, im, bi, cg, vsc, tb, tfi, rx]);
export {
  ReactIcons as R
};
