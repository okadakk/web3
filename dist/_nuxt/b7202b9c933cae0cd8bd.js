(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(t,e,n){var content=n(651);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("36873827",content,!0,{sourceMap:!1})},368:function(t,e){},370:function(t,e){},458:function(t,e){},531:function(t,e){},650:function(t,e,n){"use strict";var r=n(268);n.n(r).a},651:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},653:function(t,e,n){"use strict";n.r(e);n(32);var r=n(5),o=(n(357),{mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==window.web3){t.next=3;break}return alert("You need to install MetaMask for this app to work!"),t.abrupt("return");case 3:window.ethereum.enable(),alert(window.web3),e=new Web3(window.web3.currentProvider),alert(e),e.eth.getAccounts(function(t,n){if(!t){alert(n);var r=n[0];void 0!==r?(alert(r),e.eth.getBalance(r,function(t,n){var b=e.fromWei(n,"ether")+" ETH";alert(b)})):alert("ログインして下さい")}});case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}),c=(n(650),n(24)),component=Object(c.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("web3")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("My stupendous Nuxt.js project")])])])}],!1,null,null,null);e.default=component.exports}}]);