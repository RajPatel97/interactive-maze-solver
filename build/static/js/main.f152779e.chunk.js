(this["webpackJsonpinteractive-maze-solver"]=this["webpackJsonpinteractive-maze-solver"]||[]).push([[0],{10:function(e,n,r){"use strict";r.r(n);var t=r(1),c=r.n(t),a=r(3),i=r.n(a),s=(r(8),r(0)),o=function(){return Object(s.jsxs)("div",{className:"heading-wrapper",children:[Object(s.jsx)("h1",{className:"title",children:"Interactive Maze Solver"}),Object(s.jsx)("p",{className:"add",children:"Create a path going from 0 to 99"}),Object(s.jsx)("p",{className:"add",children:"Click on a box to make it a wall"})]})},l=function(){var e=[];!function(n){for(var r=0;r<n;r++)e.push(r)}(100);var n=function(n){n.target.style.backgroundColor="rgb(173, 106, 173)",e.includes(parseInt(n.target.innerHTML))&&e.splice(e.indexOf(parseInt(n.target.innerHTML)),1)},r=function(e){return{row:Math.floor(e/10),col:e%10}},t=function(e,n){var r="";return r+=e,r+=n,parseInt(r)},c=function(){for(var n=[],c=e.reverse(),a=c.pop();99!==a;){var i=document.getElementById(a);i.style.backgroundColor="#F08080";var s=r(a).row,o=r(a).col;-1!==c.indexOf(t(s+1,o))?(a=t(s+1,o),c.splice(c.indexOf(t(s+1,o)),1)):-1!==c.indexOf(t(s-1,o))?(a=t(s-1,o),c.splice(c.indexOf(t(s-1,o)),1)):-1!==c.indexOf(t(s,o+1))?(a=t(s,o+1),c.splice(c.indexOf(t(s,o+1)),1)):-1!==c.indexOf(t(s,o-1))?(a=t(s,o-1),c.splice(c.indexOf(t(s,o-1)),1)):(n.pop(),i.style.backgroundColor="white",a=n.pop()),n.push(a)}console.log(n)};return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"maze-wrapper",children:e.map((function(e){return Object(s.jsx)("div",{id:e,className:"box-wrapper",onMouseOver:n,onClick:n,children:e},e)}))}),Object(s.jsx)("button",{onClick:c,className:"btn",children:"SOLVE"})]})};var d=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(l,{})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))},8:function(e,n,r){}},[[10,1,2]]]);
//# sourceMappingURL=main.f152779e.chunk.js.map