(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),l=a.n(s),i=(a(15),a(1)),u=a(2),c=a(4),o=a(3),h=a(5),m=a(8);function d(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(m.a)(t[a],3),n=r[0],s=r[1],l=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[l])return e[n]}return null}var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0,x:0,o:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();v(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext,x:this.state.x+1*this.state.xIsNext,o:this.state.o+1*!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"restart",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0,x:0,o:0})}},{key:"render",value:function(){var e,t=this,a=v(this.state.squares);return e=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),n.a.createElement("div",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0425: ",this.state.x),n.a.createElement("div",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 0: ",this.state.o),n.a.createElement("button",{onClick:function(){return t.restart()}},"\u0421\u0431\u0440\u043e\u0441"))}}]),t}(n.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435. \u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(x,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null))),n.a.createElement("footer",null,"\u0413\u0443\u043a\u0435\u0442\u043b\u0435\u0432\u0430 \u0414\u0430\u0440\u044c\u044f"))}}]),t}(n.a.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.15184165.chunk.js.map