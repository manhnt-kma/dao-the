(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/01.aca2dabe.png"},function(e,t,n){e.exports=n.p+"static/media/02.d8afa23e.png"},function(e,t,n){e.exports=n.p+"static/media/zalo-icon.248baf33.png"},function(e,t,n){e.exports=n.p+"static/media/messenger-icon.433ba0a0.png"},function(e,t,n){e.exports=n.p+"static/media/phone.6e873cd8.png"},,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/contactus-icon.cb437106.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),r=n.n(c),s=(n(23),n(25),n(5)),l=n(6),o=n(13),m=n(7),d=n(14),u=n(1),p=n(2),h=n.n(p),E=(n(27),function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={slideIndex:0};var a=n.props.ratio.split(":");return n.ratioWH=a[0]/a[1],n.backward=n.backward.bind(Object(u.a)(Object(u.a)(n))),n.forward=n.forward.bind(Object(u.a)(Object(u.a)(n))),n.setSlideIndex=n.setSlideIndex.bind(Object(u.a)(Object(u.a)(n))),n.getNewSlideIndex=n.getNewSlideIndex.bind(Object(u.a)(Object(u.a)(n))),n.updateDimensions=n.updateDimensions.bind(Object(u.a)(Object(u.a)(n))),n.runAutomatic=n.runAutomatic.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getNewSlideIndex",value:function(e){var t=this.state.slideIndex,n=this.props.input.length,a=t+e;return a>=n?a=0:a<0&&(a=n-1),a}},{key:"backward",value:function(){this.setState({slideIndex:this.getNewSlideIndex(-1)})}},{key:"forward",value:function(){this.setState({slideIndex:this.getNewSlideIndex(1)})}},{key:"setSlideIndex",value:function(e){this.setState({slideIndex:e})}},{key:"updateDimensions",value:function(){this.containerElm.style.height="".concat(this.containerElm.offsetWidth/this.ratioWH,"px")}},{key:"runAutomatic",value:function(){this.setState({slideIndex:this.getNewSlideIndex(1)})}},{key:"componentDidMount",value:function(){var e=this;if(this.rootElm=h.a.findDOMNode(this),this.containerElm=this.rootElm.querySelector(".slide-container"),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions),"automatic"===this.props.mode){var t=this.props.timeout||5e3;this.automaticInterval=setInterval(function(){return e.runAutomatic()},Number.parseInt(t))}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions),this.automaticInterval&&clearInterval(this.automaticInterval)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"lp-slideshow-gallery"},i.a.createElement("div",{className:"slide-container"},this.props.input.map(function(t,n){return i.a.createElement("div",{key:n,className:"slide ".concat(e.state.slideIndex===n?"active":"")},i.a.createElement("img",{className:"image",src:t.src,alt:t.caption}))}),i.a.createElement("span",{className:"prev",onClick:this.backward},"\u276e"),i.a.createElement("span",{className:"next",onClick:this.forward},"\u276f")),i.a.createElement("div",{className:"dot-map"},this.props.input.map(function(t,n){return i.a.createElement("span",{key:n,className:"dot",onClick:function(){return e.setSlideIndex(n)}})})))}}]),t}(i.a.Component)),f=n(8),v=n.n(f),b=n(9),g=n.n(b),x=n(10),I=n.n(x),w=n(11),N=n.n(w),k=n(12),y=n.n(k),O=(n(29),[{src:v.a},{src:g.a}]);var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"site-header"},i.a.createElement(E,{input:O,timeout:"10000",ratio:"16:5",mode:"automatic"})),i.a.createElement("div",{className:"content container"},i.a.createElement("div",null,i.a.createElement("span",null,"Xin ch\xe0o!"),i.a.createElement("p",null,"B\xean M\xecnh Chuy\xean Cung C\u1ea5p C\xe1c D\u1ecbch V\u1ee5"),i.a.createElement("p",null,"R\xfat Ti\u1ec1n/\u0110\xe1o H\u1ea1n Th\u1ebb T\xedn D\u1ee5ng"),i.a.createElement("a",{class:"hero-button",href:"tel:0888666665"},"G\u1ecdi ngay"),i.a.createElement("h2",{class:"text-center"},"R\xfat Ti\u1ec1n Th\u1ebb T\xedn D\u1ee5ng T\u1ea1i Nh\xe0"),i.a.createElement("p",{class:"text-center"},"T\u01b0 V\u1ea5n V\xe0 Ph\u1ee5c V\u1ee5 24/7"),i.a.createElement("h2",{class:"text-center"},"\u0110\xe1o H\u1ea1n Th\u1ebb T\xedn D\u1ee5ng"),i.a.createElement("p",{class:"text-center"},"\u0110\xe1o H\u1ea1n T\u1ea1i Nh\xe0"),i.a.createElement("p",{class:"text-center"},"Ch\u1ec9 t\u1eeb 1,9%/Th\xe1ng")),i.a.createElement("div",{id:"direct",class:"direct"},i.a.createElement("div",null,i.a.createElement("div",{className:""},i.a.createElement("h2",null,"Li\xean h\u1ec7")),i.a.createElement("h1",null,"Mr. T\xf9ng(H\u1ed7 tr\u1ee3 24/7)"),i.a.createElement("a",{href:"tel:0982670613"},i.a.createElement("span",{style:{color:"#222"}},"0982670613"))),i.a.createElement("div",{className:"quick-contact"},i.a.createElement("a",{href:"https://zalo.me/0888666665",id:"zalo"},i.a.createElement("img",{src:I.a,alt:"Zalo Icon"})),i.a.createElement("a",{href:"https://m.me/100023251818361"},i.a.createElement("img",{src:N.a,alt:"Messenger Icon"})),i.a.createElement("a",{href:"tel:0982670613"},i.a.createElement("img",{src:y.a,alt:"Phone Icon"}))))),i.a.createElement("footer",null,i.a.createElement("h3",{class:"text-center"},"C\xe1m \u01a0n M\u1ecdi Ng\u01b0\u1eddi \u0110\xe3 Quan T\xe2m!"),i.a.createElement("span",null,"Hotline: ",i.a.createElement("a",{href:"tel:0982670613",style:{color:"white"}},"0582073186"))))},S=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,31)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null))),S()}],[[15,3,2]]]);
//# sourceMappingURL=main.798d8a67.chunk.js.map