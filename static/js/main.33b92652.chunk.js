(window.webpackJsonprandom_quote_generator=window.webpackJsonprandom_quote_generator||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(13),n(3)),s=n(4),u=n(6),l=n(5),h=n(7),m="https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",w=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).newQuote=function(t){fetch(m).then((function(t){return t.json()})).then((function(t){n.setState({quote:t.quoteText,author:t.quoteAuthor})}))},n.tweet=function(t){window.open('https://twitter.com/intent/tweet?text="'.concat(n.state.quote,"--").concat(n.state.author,'"'))},n.state={quote:"Strike whilst the iron is still hot",author:"Lil Nop"},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{id:"container"},a.a.createElement("div",{className:"content"},a.a.createElement("p",null,this.state.quote),a.a.createElement("p",null,this.state.author)),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"tweet ",onClick:this.tweet},"Tweet"),a.a.createElement("button",{className:"new ",onClick:this.newQuote},"New Quote")))}}]),e}(a.a.Component);var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.33b92652.chunk.js.map