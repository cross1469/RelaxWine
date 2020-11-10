(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afdf8"],{"0fd0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"row justify-content-center pt-5"},[s("div",{staticClass:"col-md-7 d-flex justify-content-center"},[s("img",{staticClass:"img-fluid bg-img-height-m",attrs:{src:t.product.imageUrl[0],alt:"..."}})]),s("div",{staticClass:"col-md-5 d-flex flex-column justify-content-center"},[s("p",{staticClass:"h2 mt-3 mt-md-0 text-primary"},[t._v(t._s(t.product.title))]),s("hr",{staticClass:"border-primary mt-0 w-100 hr-border-width"}),s("p",{staticClass:"text-white"},[t._v(t._s(t.product.content))]),s("div",{staticClass:"d-flex"},[s("p",{staticClass:"h4 text-primary mb-0 mr-3"},[t._v(" 售價："),s("strong",[t._v(t._s(t._f("money")(t.product.price)))])]),s("del",{staticClass:"text-light"},[s("small",[t._v("原價："+t._s(t._f("money")(t.product.origin_price)))])])]),s("div",{staticClass:"d-flex mt-3"},[s("div",{staticClass:"w-50 mr-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mr-3 border border-dark select-text-align",attrs:{name:"unit"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.product,"num",e.target.multiple?s:s[0])}}},t._l(10,(function(e){return s("option",{key:e,staticClass:"text-center",domProps:{value:e}},[t._v(" "+t._s(e)+" "+t._s(t.product.unit)+" ")])})),0)]),s("button",{staticClass:"btn btn-secondary w-50\n          d-flex justify-content-center\n          align-items-center",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.product.id,t.product.num)}}},[t.status.loadingItem===t.product.id?s("i",{staticClass:"mr-2 spinner-grow spinner-grow-sm spinner-size-s"}):t._e(),t._v(" 加到購物車 ")])])])]),s("div",{staticClass:"row mt-5"},[t._m(0),s("div",{staticClass:"text-white col-md-9"},[s("p",{domProps:{innerHTML:t._s(t.product.description)}})])]),s("ProductNotice"),s("hr",{staticClass:"border-white mt-5 hr-border-width"}),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col"},[s("h4",{staticClass:"text-white mb-4"},[t._v("相關商品")]),s("RelatedPorducts",{attrs:{product:t.product},on:{update:t.getProduct}})],1)])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-3"},[s("h4",{staticClass:"text-primary"},[t._v("商品資訊")])])}],r=(s("99af"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mt-5 pb-5"},[s("div",{staticClass:"col-md-3"},[s("h4",{staticClass:"text-primary"},[t._v("購物須知")])]),s("div",{staticClass:"text-white col-md-9"},[s("p",[t._v("每次購物滿 3,000 元以上免運費，未達 3,000 元，需加付 230 元運費，訂單完成後，將在 1 ~ 3 個工作天內出貨。")])]),s("div",{staticClass:"col-md-3 mt-5"},[s("h4",{staticClass:"text-primary"},[t._v("退貨需知")])]),s("div",{staticClass:"text-white col-md-9 mt-5"},[s("p",[t._v("在 RelaxWine 官網購物，享有商品到貨日起 14 天猶豫期，猶豫期內，可無條件退費。猶豫期並非試用期，所以，您所退回的商品必須是包裝完整、保存良好的狀態。")])])])}],n={data:function(){return{}}},o=n,d=s("2877"),l=Object(d["a"])(o,r,c,!1,null,null,null),u=l.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-5"},[s("Swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.identical,(function(e){return s("swiper-slide",{key:e.id,staticClass:"item"},[s("div",{staticClass:"card border h-100 pointer",on:{click:function(s){return s.preventDefault(),t.getDetail(e.id)}}},[s("div",{staticClass:"bg-cover card-img-top card-img-height-sm",style:{backgroundImage:"url("+e.imageUrl[0]+")"}}),s("div",{staticClass:"card-body border-top bg-dark text-center px-2 py-3"},[s("h5",{staticClass:"mb-0"},[s("router-link",{attrs:{to:"/product/"+e.id}},[t._v(t._s(e.title))])],1),s("div",{staticClass:"mt-2 d-lg-flex justify-content-center align-items-center"},[s("del",{staticClass:"text-secondary mr-lg-2"},[s("span",{staticClass:"font-size-xs"},[t._v("原價："+t._s(t._f("money")(e.origin_price)))])]),s("p",{staticClass:"text-primary mb-0 font-size-s"},[t._v(" 售價："),s("strong",[t._v(t._s(t._f("money")(e.price)))])])])])])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},m=[],h=(s("4de4"),s("7212")),g={data:function(){return{products:[],swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:30},768:{slidesPerView:3,spaceBetween:20},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}},components:{Swiper:h["Swiper"],SwiperSlide:h["SwiperSlide"]},props:{product:{type:Object}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/").concat("9cbd42bc-33b9-4cd2-bed8-7413186f826b","/ec/products");this.$http.get(e).then((function(e){t.products=e.data.data}))},getDetail:function(t){this.$router.push("/product/".concat(t)),this.$emit("update")}},computed:{identical:function(){var t=this;return this.products.filter((function(e){return e.id!==t.product.id&&e.category===t.product.category}))},swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.swiper.slideTo(3,1e3,!1)}},f=g,v=Object(d["a"])(f,p,m,!1,null,null,null),b=v.exports,_={data:function(){return{product:{num:1,imageUrl:[],options:{}},status:{loadingItem:""},isLoading:!1}},components:{ProductNotice:u,RelatedPorducts:b},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("9cbd42bc-33b9-4cd2-bed8-7413186f826b","/ec/product/").concat(e);this.$http.get(s).then((function(e){t.product=e.data.data,t.isLoading=!1,t.$set(t.product,"num",1)})).catch((function(e){t.status.loadingItem="",t.$bus.$emit("message:push","取得資料失敗!".concat(e.response.data.errors),"danger"),t.isLoading=!1}))},addToCart:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat("9cbd42bc-33b9-4cd2-bed8-7413186f826b","/ec/shopping");this.isLoading=!0;var a={product:t,quantity:s};this.$http.post(i,a).then((function(){e.status.loadingItem="",e.$bus.$emit("get-cart"),e.$bus.$emit("message:push","商品已成功加入購物車!","success"),e.isLoading=!1})).catch((function(t){e.status.loadingItem="",e.$bus.$emit("message:push","加入失敗!".concat(t.response.data.errors),"danger"),e.isLoading=!1}))}}},w=_,C=Object(d["a"])(w,i,a,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0afdf8.157d458a.js.map