(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{24:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(9),i=n.n(a),o=(n(24),n(18)),u=n(2),l=n(17),s=(n(25),n(16)),f=n(12),h=n(13);var j="X",b=function(t){var e=t.NO_PLAYER,n=t.TIE_PLAYER,r=t.PLAYER_1,c=t.PLAYER_2,a=t.X_CELLS,i=t.Y_CELLS,o=function(){function t(n,r){Object(f.a)(this,t),this.value=e,this.x=n,this.y=r}return Object(h.a)(t,[{key:"taken",get:function(){return this.value!==e}}]),t}();return function(){function t(e){Object(f.a)(this,t),this.cells=e||new Array(i).fill().map((function(t,e){return new Array(a).fill().map((function(t,n){return new o(n,e)}))}))}return Object(h.a)(t,[{key:"getCell",value:function(t,e){return this.cells[e][t]}},{key:"getVal",value:function(t,e){return this.getCell(t,e).value}},{key:"setCell",value:function(t,e,n){this.getCell(t,e).value=n}},{key:"areFourConnected",value:function(t){}},{key:"winner",get:function(){for(var t=0;t<i-3;t++)for(var r=0;r<a;r++){var c=this.getVal(r,t);if(c!==e&&this.getVal(r,t+1)===c&&this.getVal(r,t+2)===c&&this.getVal(r,t+3)===c)return c}for(var o=0;o<a-3;o++)for(var u=0;u<i;u++){var l=this.getVal(o,u);if(l!==e&&this.getVal(o+1,u)===l&&this.getVal(o+2,u)===l&&this.getVal(o+3,u)===l)return l}for(var s=3;s<a;s++)for(var f=0;f<i-3;f++){var h=this.getVal(s,f);if(h!==e&&this.getVal(s-1,f+1)===h&&this.getVal(s-2,f+2)===h&&this.getVal(s-3,f+3)===h)return h}for(var j=3;j<a;j++)for(var b=3;b<i;b++){var v=this.getVal(j,b);if(v!==e&&this.getVal(j-1,b-1)===v&&this.getVal(j-2,b-2)===v&&this.getVal(j-3,b-3)===v)return v}return this.cells.reduce((function(t,e){return e.reduce((function(t,e){return e.taken?t+1:t}),0)===a?t+1:t}),0)===i?n:e}},{key:"gameOver",get:function(){return this.winner===r||this.winner===c}}]),t}()}({NO_PLAYER:"-",TIE_PLAYER:"Nobody",PLAYER_1:j,PLAYER_2:"O",X_CELLS:7,Y_CELLS:6});function v(t){var e=t.notify,n=Object(r.useState)(new b),c=Object(s.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(j),u=Object(s.a)(o,2),l=u[0],f=u[1];return Object(r.useEffect)((function(){"-"!==a.winner&&e("".concat(a.winner," has won!"))}),[a.winner]),{board:a,takeTurn:function(t,e){"-"===a.winner&&function(t,e,n){return!a.getCell(t,e).taken&&(a.setCell(t,e,n),!0)}(t,function(t){for(var e=5;e>=0;e--)if(!a.getCell(t,e).taken)return e;return-1}(t),l)&&f(l===j?"O":j)},resetGameState:function(){i(new b),f(j),e("Game reset")}}}var g=n(1);function O(t){var e=t.cell,n=t.onClick;return Object(g.jsx)("span",{className:"cell ".concat(!e.taken&&"hidden"),onClick:n,x:e.x,y:e.y,children:e.value})}n(27);function d(){var t=v({notify:l.b}),e=t.board,n=t.takeTurn,r=t.resetGameState;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"board",children:e.cells.map((function(t,e){return Object(g.jsx)("div",{className:"row",children:t.map((function(t,r){return Object(g.jsx)(O,{cell:t,onClick:function(t){return n(t.target.getAttribute("x"),t.target.getAttribute("y"))}},"cell-".concat(e,"-").concat(r))}))},"row-".concat(e))}))}),e.gameOver&&Object(g.jsx)("button",{className:"reset",onClick:r,children:"Reset"}),Object(g.jsx)(l.a,{position:"bottom-center"})]})}n(28);var m=window.location.host,x=m.split(".")[1]?m.split(".")[0]:"";function k(t){var e=t.location;return Object(g.jsx)("div",{className:"seeme",children:Object(g.jsx)("a",{href:"https://github.com/".concat(x).concat(e.pathname),children:"Come check me out on GitHub!"})})}function w(t){var e=t.location;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{location:e}),Object(g.jsx)(d,{})]})}n(29);var p=function(){return Object(g.jsx)(o.a,{children:Object(g.jsx)(u.c,{children:Object(g.jsx)(u.a,{path:"/connect-four",exact:!0,component:w})})})};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d85f3a99.chunk.js.map