webpackJsonp([1],{0:function(e,t,n){e.exports=n("msSN")},"1HF7":function(e,t){},"45Ns":function(e,t){},"5e9e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(e,t){e.type=t},setEffect:function(e,t){e.effect=t}}},CJsk:function(e,t){},"Gs+w":function(e,t){},LOWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return u}),n.d(t,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),i=n.n(o),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(e,t){var n=t.pageId,r=t.scrollPosition;e.scrollPostionMap=i()({},e.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(e,t){var n=e.commit,r=t.pageId,a=t.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},SWsa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{book:"莎士比亚全集",price:"$30"}},a={changeBookName:function(e,t){e.book=t},changePrice:function(e,t){e.price=t}}},Uz7q:function(e,t){e.exports={buildVersion:1546049664890,build:{ssr:!1,publicPath:"/lavas-demo-1",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"/Users/zhengtianyu/Desktop/temp/lavas-demo-1/lavas-demo-1/dist/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(e,t,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA","./test.js":"SWsa"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="VfP6"},ZFl9:function(e,t){},cxcL:function(e,t){},gHRC:function(e,t){},msSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("Gu7T"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),f=n("/5sW"),p=n("1nuA"),h=function(){var e=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function d(e,t){var n={isClient:!0,app:t,store:e.store,route:e.to,from:e.from},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e){var t=e.status,a=void 0===t?302:t,o=e.path,i=void 0===o?"":o,s=e.query,c=void 0===s?{}:s,u=e.external,l=void 0!==u&&u;n._redirected=!0,r({path:i,query:c,status:a,external:l})},n}var v=function(){var e=l()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}if(!n._redirected){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,m(t[r],n);case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();function m(e,t){var n=void 0;return 2===e.length?n=new a.a(function(n,r){e(t,function(e,a){e?(t.error(e),r(e)):n(a)})}):(n=e(t))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),y=n.n(w),_=n("Dd8w"),b=n.n(_),g=n("p3jY"),x=n.n(g),T=n("/ocq"),k={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},P=n("XyMi"),E=Object(P.a)(k,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,S=n("NYxO"),A={name:"detail",computed:b()({},Object(S.d)("pageTransition",{pageTransitionEffect:function(e){return e.effect},type:function(e){return e.type}}),Object(S.d)("test",{book:function(e){return e.book},price:function(e){return e.price}})),created:function(){},methods:b()({},Object(S.c)("pageTransition",["setType","setEffect"]),Object(S.c)("test",["changeBookName","changePrice"]),{change:function(){this.changeBookName("西游记"),this.changePrice("$1000")}})};var O=function(e){n("cxcL")},j=Object(P.a)(A,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{on:{click:e.change}},[e._v("点击换书")]),e._v(" "),n("p",[e._v("type : "+e._s(e.type))]),e._v(" "),n("p",[e._v("effect : "+e._s(e.pageTransitionEffect))]),e._v("\n  "+e._s(e.book)+"---"+e._s(e.price)+"\n")])},[],!1,O,null,null).exports,C=n("fZjL"),$=n.n(C),M={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var e=this.$route.query;0!==$()(e).length&&this.$router.replace({name:"error",params:e})}};var I=function(e){n("45Ns")},L=Object(P.a)(M,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-error"},[t("p",[this._v(this._s(this.message))])])},[],!1,I,"data-v-b5544618",null).exports;var D={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var e=l()(c.a.mark(function e(t){t.store,t.route;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),methods:{navToDetail:function(){this.$router.push({path:"/detail"})}}};var B=function(e){n("Gs+w")},W=[{path:"/appshell",component:E,meta:{},name:"appshell"},{path:"/detail",component:j,meta:{},name:"detail"},{path:"/",component:Object(P.a)(D,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-index"},[t("h2",[this._v("LAVAS")]),this._v(" "),t("h4",[this._v("[ˈlɑ:vəz]")]),this._v(" "),t("h5",{on:{click:this.navToDetail}},[this._v("跳转 LAVAS DEMO")])])},[],!1,B,"data-v-63d49380",null).exports,meta:{},name:"index"},{path:"/error",component:L,meta:{},name:"error",alias:"*"}];f.a.use(T.a);var q=function(e,t,n){if(n)return n;var r={};return e.hash&&(r.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(r.x=0,r.y=0),r},N=W.filter(function(e){return e.keepAlive||e.meta.keepAlive}).map(function(e){return e.name});var R=n("woOf"),V=n.n(R),U=n("BO1k"),F=n.n(U);f.a.use(S.a);var G=n("VfP6"),H=G.keys(),z={},X=!0,Y=!1,J=void 0;try{for(var Z,K=F()(H);!(X=(Z=K.next()).done);X=!0){var Q=Z.value;if("./index.js"===Q){z=le(Q);break}}}catch(e){Y=!0,J=e}finally{try{!X&&K.return&&K.return()}finally{if(Y)throw J}}if("function"!=typeof z){z.modules=z.modules||{};var ee=!0,te=!1,ne=void 0;try{for(var re,ae=F()(H);!(ee=(re=ae.next()).done);ee=!0){var oe=re.value;if("./index.js"!==oe){var ie=oe.replace(/^\.\//,"").replace(/\.js$/,""),se=ie.split("/"),ce=fe(z,se);ce[ie=se.pop()]=le(oe),ce[ie].namespaced=!0}}}catch(e){te=!0,ne=e}finally{try{!ee&&ae.return&&ae.return()}finally{if(te)throw ne}}}var ue=z instanceof Function?z:function(){return new S.a.Store(V()({},z,{state:z.state instanceof Function?z.state():{}}))};function le(e){var t=G(e),n=t.default||t;if(n.commit)throw new Error("[lavas] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+e.replace("./",""));return n}function fe(e,t){if(1===t.length)return e.modules;var n=t.shift(),r=e.modules[n]=e.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},fe(r,t)}var pe={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(e){this.show=!0},handleRefresh:function(){window.location.reload()}}};var he=function(e){n("1HF7")},de={name:"app",components:{UpdateToast:Object(P.a)(pe,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"popup"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[t("span",[this._v(this._s(this.text))]),this._v(" "),t("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[t("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,he,"data-v-4364d9fc",null).exports},computed:b()({},Object(S.d)("pageTransition",{pageTransitionType:function(e){return e.type},pageTransitionEffect:function(e){return e.effect}}),Object(S.d)("scrollBehavior",{scrollPostionMap:function(e){return e.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var e=this.$route,t=e.name,n=e.params,r=$()(n);return r.length?t+r.reduce(function(e,t){return e+n[t]},""):null}}),data:function(){return{keepAlivePages:N}},methods:b()({},Object(S.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(e,t){e.classList.add("app-view-scroll-enabled"),e.scrollTop=t},restoreBodyScrollPosition:function(e,t){e.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=t},handleBeforeEnter:function(e){var t=this,n=e.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;f.a.nextTick(function(){t.restoreContainerScrollPosition(e,a)})},handleAfterEnter:function(e){var t=e.dataset.pageId,n=(this.scrollPostionMap[t]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(e,r)},handleBeforeLeave:function(e){var t=e.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(e,n),this.savePageScrollPosition({pageId:t,scrollPosition:{y:n}})}})};var ve=function(e){n("gHRC")},me=Object(P.a)(de,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.pageTransitionEffect},on:{"before-enter":e.handleBeforeEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(e.keepAlivePages)}},[n("router-view",{key:e.routerViewKey,class:["app-view",e.pageTransitionClass],attrs:{"data-page-id":e.$route.fullPath}})],1)],1),e._v(" "),n("update-toast")],1)},[],!1,ve,null,null).exports;f.a.use(x.a),f.a.config.productionTip=!1;var we={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ye=function(e){n("ZFl9")},_e=Object(P.a)(we,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ye,"data-v-2e9576fc",null).exports,be=n("p5k0"),ge=n.n(be),xe=n("XGXE"),Te=n.n(xe);n("MU8w"),n("CJsk");ge.a.shim(),Te.a.shim();var ke=f.a.prototype.$loading=new f.a(_e).$mount(),Pe=function(){var e=function(){var e=new T.a({mode:"history",base:"/",scrollBehavior:q,routes:W});return e.beforeEach(function(t,n,r){e.app.$store&&e.app.$store.state.pageTransition.enable&&(e.app.$store.commit("pageTransition/setType","fade"),e.app.$store.commit("pageTransition/setEffect","fade")),r()}),e}(),t=ue();return{App:f.a.extend(b()({router:e,store:t},me)),router:e,store:t}}(),Ee=Pe.App,Se=Pe.router,Ae=Pe.store,Oe=y.a.build,je=Oe.ssr,Ce=Oe.cssExtract,$e=y.a.middleware,Me=void 0===$e?{}:$e,Ie=y.a.skeleton,Le=Ie.enable,De=Ie.asyncCSS,Be=void 0;window.__INITIAL_STATE__&&Ae.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(ke.$el),f.a.mixin({beforeRouteUpdate:function(){var e=l()(c.a.mark(function e(t,n,r){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.$options.asyncData)?(ke.start(),a.call(this,{store:this.$store,route:t}).then(function(){ke.finish(),r()}).catch(r)):r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()});var We=!0;if(function(){var e=this;Se.beforeEach(function(){var t=l()(c.a.mark(function t(n,r,a){var o,s,u,l,f,m,w;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(We||n.path!==r.path){e.next=2;break}return e.abrupt("return",a());case 2:return We=!1,o=Se.getMatchedComponents(n),s=[].concat(i()(Me.all||[]),i()(Me.client||[]),i()(o.filter(function(e){var t=e.middleware;return!!t}).reduce(function(e,t){var n=t.middleware;return e.concat(n)},[]))),e.next=7,h(s);case 7:if(u=e.sent,!(l=s.find(function(e){return"function"!=typeof u[e]}))){e.next=11;break}throw new Error("Unknown middleware "+l);case 11:return f=!1,m=d({to:n,from:r,store:Ae,next:function(e){if(ke.finish&&ke.finish(),!f){if(f=!0,e.external)return e.query=Object(p.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:""),window.location.replace(e.path),a();a(e)}}},Be),w=s.map(function(e){return u[e]}),e.next=17,v(w,m);case 17:f||a();case 18:case"end":return e.stop()}},t,e)}));return function(e,n,r){return t.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&je)Be=new Ee,Se.onReady(function(){Ne(),Be.$mount("#app")});else{var qe=Le&&De&&Ce;window.mountLavas=function(){setTimeout(function(){var e=document.querySelector("#app");e&&(e.innerHTML=""),Be.$mount("#app")},0)},Ne(),Be=new Ee,(je||!qe||qe&&window.STYLE_READY)&&window.mountLavas()}function Ne(){var e=this;Se.beforeResolve(function(t,n,r){var o=Se.getMatchedComponents(t),i=Se.getMatchedComponents(n),s=!1,u=o.filter(function(e,t){return s||(s=i[t]!==e)});if(!u.length)return r();ke.start(),a.a.all(u.filter(function(e){return e.asyncData&&(!e.asyncDataFetched||!t.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.asyncData({store:Ae,route:t});case 2:r.asyncDataFetched=!0;case 3:case"end":return e.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())).then(function(){ke.finish(),r()}).catch(r)})}}},[0]);
//# sourceMappingURL=index.31e9942c.js.map