import{g as c,p as i,e as _,q as m,i as p}from"./2orS2r3S.js";function u(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function x(e){c===null&&u(),i&&c.l!==null?d(c).m.push(e):_(()=>{const t=p(e);if(typeof t=="function")return t})}function v(e,t,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:o,cancelable:s})}function y(){const e=c;return e===null&&u(),(t,o,s)=>{var r;const n=(r=e.s.$$events)==null?void 0:r[t];if(n){const l=m(n)?n.slice():[n],a=v(t,o,s);for(const f of l)f.call(e.x,a);return!a.defaultPrevented}return!0}}function d(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}export{y as c,x as o};
