(window.webpackJsonpassn3=window.webpackJsonpassn3||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(13),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),p=(n(14),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).state={url:"",title:"",data:"",copyright:"",date:""},t}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then((function(t){return t.json()})).then((function(e){return t.setState({url:e.url,title:e.title,data:e.explanation,copyright:e.copyright,date:e.date})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,this.state.title),o.a.createElement("p",null,o.a.createElement("strong",null,"By:")," ",this.state.copyright),o.a.createElement("p",null,o.a.createElement("strong",null,"Date:")," ",this.state.date),o.a.createElement("img",{className:"resize",src:this.state.url}),o.a.createElement("p",null,this.state.data))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.82c39276.chunk.js.map