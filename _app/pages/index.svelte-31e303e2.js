import{S as t,i as s,s as e,e as a,t as r,c as n,a as l,g as o,d as c,b as f,f as h,F as u,L as i,K as d,M as g}from"../chunks/vendor-dd2a7c84.js";function p(t,s,e){const a=t.slice();return a[1]=s[e],a}function m(t,s){let e,i,d,g,p=s[1]+"";return{key:t,first:null,c(){e=a("li"),i=a("a"),d=r(p),this.h()},l(t){e=n(t,"LI",{});var s=l(e);i=n(s,"A",{href:!0});var a=l(i);d=o(a,p),a.forEach(c),s.forEach(c),this.h()},h(){f(i,"href",g=s[1]),this.first=e},m(t,s){h(t,e,s),u(e,i),u(i,d)},p(t,e){s=t},d(t){t&&c(e)}}}function v(t){let s,e=[],r=new Map,o=t[0];const f=t=>t[1];for(let a=0;a<o.length;a+=1){let s=p(t,o,a),n=f(s);r.set(n,e[a]=m(n,s))}return{c(){s=a("ul");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){s=n(t,"UL",{});var a=l(s);for(let s=0;s<e.length;s+=1)e[s].l(a);a.forEach(c)},m(t,a){h(t,s,a);for(let r=0;r<e.length;r+=1)e[r].m(s,null)},p(t,[a]){1&a&&(o=t[0],e=i(e,a,f,1,t,o,r,s,g,m,null,p))},i:d,o:d,d(t){t&&c(s);for(let s=0;s<e.length;s+=1)e[s].d()}}}function k(t){return[["./index2","./any","./?key=value"]]}class x extends t{constructor(t){super(),s(this,t,k,v,e,{})}}export{x as default};
