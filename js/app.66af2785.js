(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)r=c[d],s[r]&&f.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==s[o]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0076":function(t,e,i){"use strict";var n=i("3b0b"),s=i.n(n);s.a},"034f":function(t,e,i){"use strict";var n=i("64a9"),s=i.n(n);s.a},"0afc":function(t,e,i){},"0d22":function(t,e,i){"use strict";var n=i("78ec"),s=i.n(n);s.a},"14fe":function(t,e,i){"use strict";var n=i("21de"),s=i.n(n);s.a},"184c":function(t,e,i){"use strict";var n=i("789c"),s=i.n(n);s.a},"199c":function(t,e){},"1e22":function(t,e,i){},"21de":function(t,e,i){},"22a8":function(t,e,i){"use strict";var n=i("cace"),s=i.n(n);s.a},"23be":function(t,e,i){"use strict";var n=i("199c"),s=i.n(n);e["default"]=s.a},2748:function(t,e,i){},"2e55":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"341f":function(t,e,i){"use strict";var n=i("57f1"),s=i.n(n);s.a},"3b0b":function(t,e,i){},"3dfd":function(t,e,i){"use strict";var n=i("2e55"),s=i("23be"),a=(i("034f"),i("2877")),r=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"4bf9":function(t,e,i){"use strict";var n=i("8d91"),s=i.n(n);s.a},"544d":function(t,e,i){"use strict";var n=i("64b4"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=i("3dfd"),a=i("8c4f"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("Swiper",{attrs:{swiperList:t.swiperList}}),i("Icons",{attrs:{iconList:t.iconList}}),i("Recommend",{attrs:{recommendList:t.recommendList}}),i("Weekend",{attrs:{weekendList:t.weekendList}})],1)},c=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v(t._s(this.$store.state.city)),i("span",{staticClass:"fa fa-caret-down"})])])],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("span",{staticClass:"fa fa-angle-left"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-mid"},[i("span",{staticClass:"fa fa-search"})])}],u={name:"Header",props:{city:String}},d=u,f=(i("22a8"),i("2877")),h=Object(f["a"])(d,o,l,!1,null,"372fc686",null),p=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warpper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},v=[],g=(i("dfa4"),i("1f80")),y={name:"Swiper",components:{swiper:g["swiper"],swiperSlide:g["swiperSlide"]},props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3,autoplayDisableOnInteraction:!1}}}},w=y,b=(i("fc6c"),Object(f["a"])(w,m,v,!1,null,"6ab30ef9",null)),C=b.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,n){return i("swiper-slide",{key:n},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.iconUrl}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},k=[],S=(i("ac6a"),{name:"Icons",components:{swiper:g["swiper"],swiperSlide:g["swiperSlide"]},props:{iconList:Array},data:function(){return{swiperOption:{loop:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t}}}),L=S,O=(i("8874"),Object(f["a"])(L,_,k,!1,null,"3e99d663",null)),$=O.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.recUrl}}),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"item-star"},[i("strong",{staticClass:"fa star",style:{width:e.level}},[t._v("")]),i("span",{staticClass:"fa star-o"},[t._v("")]),i("p",{staticClass:"item-discuss"},[t._v(t._s(e.discuss)+" 评论")])]),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},j=[],I={name:"Recommend",props:{recommendList:Array},data:function(){return{}}},E=I,A=(i("628e"),Object(f["a"])(E,x,j,!1,null,"02161d79",null)),T=A.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.weekUrl}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},N=[],G={name:"Weekend",props:{weekendList:Array},data:function(){return{}}},D=G,M=(i("544d"),Object(f["a"])(D,H,N,!1,null,"541228ff",null)),P=M.exports,B=i("bc3a"),U=i.n(B),Y={name:"Home",components:{Header:p,Swiper:C,Icons:$,Recommend:T,Weekend:P},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},methods:{getHomeInfo:function(){U.a.get("../index.json?city="+this.$store.state.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){t=t.data,t.ret&&t&&(this.swiperList=t.swiperList,this.iconList=t.iconList,this.recommendList=t.recommendList,this.weekendList=t.weekendList)}},mounted:function(){this.lastCity=this.$store.state.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.$store.state.city&&(this.lastCity=this.$store.state.city,this.getHomeInfo())}},R=Y,W=Object(f["a"])(R,r,c,!1,null,null,null),F=W.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("Search",{attrs:{cities:t.cities}}),i("List",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),i("Alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},q=[],z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._v("\n  城市选择\n  "),i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"fa fa-angle-left"})])],1)},K=[],Q={name:"Header"},V=Q,X=(i("7bac"),Object(f["a"])(V,z,K,!1,null,"5172c534",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item",on:{click:function(i){return t.handleChangeCity(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},et=[],it=(i("386d"),i("7f7f"),i("1fba")),nt={name:"Search",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},methods:{handleChangeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new it["a"](this.$refs.search)}},st=nt,at=(i("0076"),Object(f["a"])(st,tt,et,!1,null,"2f3031a2",null)),rt=at.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-t"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-t"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleChangeCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._l(t.cities,function(e,n,s){return i("div",{key:s,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-t"},[t._v(t._s(n))]),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-t",on:{click:function(i){return t.handleChangeCity(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},ot=[],lt={name:"List",props:{hot:Array,cities:Object,letter:String},methods:{handleChangeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new it["a"](this.$refs.wrapper)}},ut=lt,dt=(i("341f"),Object(f["a"])(ut,ct,ot,!1,null,"31c10692",null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"slide-list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v(t._s(e))])}),0)},pt=[],mt=i("5118"),vt={name:"Alphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&Object(mt["clearTimeout"])(this.timer),this.timer=Object(mt["setTimeout"])(function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},gt=vt,yt=(i("ac65"),Object(f["a"])(gt,ht,pt,!1,null,"6d162fc2",null)),wt=yt.exports,bt={name:"City",components:{Header:Z,Search:rt,List:ft,Alphabet:wt},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){U.a.get("../city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Ct=bt,_t=Object(f["a"])(Ct,J,q,!1,null,null,null),kt=_t.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs}}),i("Header"),i("List",{attrs:{list:t.list}}),i("div",{staticClass:"content"})],1)},Lt=[],Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleShowGallary}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"fa fa-picture-o"}),t._v("\n        "+t._s(t.bannerImg.length)+"\n      ")])])]),i("animation",[t.showGallary?i("Gallary",{attrs:{imgs:t.gallaryImgs},on:{change:t.changeShow}}):t._e()],1)],1)},$t=[],xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallary",on:{click:t.changeGallary}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgs,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"gallary-img",attrs:{src:t}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},jt=[],It={name:"Gallary",components:{swiper:g["swiper"],swiperSlide:g["swiperSlide"]},props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{changeGallary:function(){this.$emit("change")}}},Et=It,At=(i("0d22"),Object(f["a"])(Et,xt,jt,!1,null,"9c44c27a",null)),Tt=At.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Nt=[],Gt={name:"Animation"},Dt=Gt,Mt=(i("beb9"),Object(f["a"])(Dt,Ht,Nt,!1,null,"ee9ce8ce",null)),Pt=Mt.exports,Bt={name:"Banner",components:{Gallary:Tt,Animation:Pt},props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handleShowGallary:function(){this.showGallary=!0},changeShow:function(){this.showGallary=!1}}},Ut=Bt,Yt=(i("184c"),Object(f["a"])(Ut,Ot,$t,!1,null,"3cf3be84",null)),Rt=Yt.exports,Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"fa fa-angle-left"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacity},[t._v("\n    景点详情\n    "),i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"fa fa-angle-left"})])],1)],1)},Ft=[],Jt={name:"Header",data:function(){return{showAbs:!0,opacity:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacity={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},qt=Jt,zt=(i("4bf9"),Object(f["a"])(qt,Wt,Ft,!1,null,"581aafd9",null)),Kt=zt.exports,Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),e.children?i("div",{staticClass:"item-title-children"},[i("List",{attrs:{list:e.children}})],1):t._e()])}),0)},Vt=[],Xt={name:"List",props:{list:Array}},Zt=Xt,te=(i("7e50"),Object(f["a"])(Zt,Qt,Vt,!1,null,"3f80a3b1",null)),ee=te.exports,ie={name:"Detail",components:{Banner:Rt,Header:Kt,List:ee},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){U.a.get("../detail.json",{params:{id:this.$route.params.id}}).then(this.handleDataSucc)},handleDataSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},ne=ie,se=(i("14fe"),Object(f["a"])(ne,St,Lt,!1,null,"14b554e9",null)),ae=se.exports;n["a"].use(a["a"]);var re=new a["a"]({routes:[{path:"/",name:"Home",component:F},{path:"/city",name:"City",component:kt},{path:"/detail/:id",name:"Detail",component:ae}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ce=i("2f62");n["a"].use(ce["a"]);var oe="上海";try{localStorage.city&&(oe=localStorage.city)}catch(fe){}var le=new ce["a"].Store({state:{city:oe},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(fe){}}},actions:{}}),ue=i("fe3c"),de=i.n(ue);i("db4d");de.a.attach(document.body),n["a"].config.productionTip=!1,new n["a"]({router:re,store:le,render:function(t){return t(s["default"])}}).$mount("#app")},"57f1":function(t,e,i){},"628e":function(t,e,i){"use strict";var n=i("ea25"),s=i.n(n);s.a},"64a9":function(t,e,i){},"64b4":function(t,e,i){},"789c":function(t,e,i){},"78ec":function(t,e,i){},"7bac":function(t,e,i){"use strict";var n=i("2748"),s=i.n(n);s.a},"7e50":function(t,e,i){"use strict";var n=i("d29c"),s=i.n(n);s.a},8218:function(t,e,i){},8874:function(t,e,i){"use strict";var n=i("0afc"),s=i.n(n);s.a},"8d91":function(t,e,i){},ac65:function(t,e,i){"use strict";var n=i("c1a5"),s=i.n(n);s.a},beb9:function(t,e,i){"use strict";var n=i("8218"),s=i.n(n);s.a},c1a5:function(t,e,i){},cace:function(t,e,i){},d29c:function(t,e,i){},ea25:function(t,e,i){},fc6c:function(t,e,i){"use strict";var n=i("1e22"),s=i.n(n);s.a}});
//# sourceMappingURL=app.66af2785.js.map