(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{332:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("1b0de0ec",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";n(332)},440:function(t,e,n){var o=n(46)(!1);o.push([t.i,".no-content[data-v-514c474e]{margin-top:3rem;margin-bottom:3rem;text-align:center}.brand-btn[data-v-514c474e]{margin-top:1rem}",""]),t.exports=o},502:function(t,e,n){"use strict";n.r(e);n(10),n(22),n(23),n(33);var o=n(8),r=(n(26),n(203),n(48),{mixins:[{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$axios,o=t.store,r=t.params;try{path=r.page}catch(t){path=""}return path=void 0===path?"":path,e.abrupt("return",n.get("/api/v1/pages/find/?html_path=/".concat(path)).then((function(t){return o.commit("setPage",t.data),{page:t.data}})).catch((function(t){return console.error("Server side get page failed: ".concat(t)),{page:!1}})));case 4:case"end":return e.stop()}}),e)})))()},computed:{siteName:function(){try{return this.$store.state.options.site_name}catch(t){return""}},siteUrl:function(){try{return this.$store.state.options.full_url}catch(t){return console.log(t),""}},seoTitle:function(){var title;return title=this.page.meta.seo_title?this.page.meta.seo_title:this.page.title,title+=" | ".concat(this.siteName)},disableSEOIndex:function(){var t;try{t=this.$store.state.options.discourage_seo}catch(e){t=!0}return t},pageType:function(){try{return this.page.meta.type.split(".")[0]}catch(t){return""}}},head:function(){if(!this.page)return{title:"Page not found"+(this.siteName?" | ".concat(this.siteName):""),bodyAttrs:{class:"page page--standard-scroll"}};var t=this.page.meta.search_description||"Notary Services Alameda CA",head={title:this.seoTitle,bodyAttrs:{class:"page page--".concat(this.page.meta.slug)},meta:[{hid:"description",description:t},{hid:"twitter:card",name:"twitter:card",value:t},{hid:"og:title",property:"og:title",content:this.seoTitle},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.page.meta.html_url},{hid:"og:description",property:"og:description",content:t}],link:[{hid:"canonical",rel:"canonical",href:this.page.meta.html_url}]};return this.page.social_images&&head.meta.push({hid:"og:image:linkedin",property:"og:image",content:this.siteUrl+this.page.social_images.linkedin.url},{hid:"og:image:linkedin:width",property:"og:image:width",content:this.page.social_images.linkedin.width},{hid:"og:image:linkedin:height",property:"og:image:height",content:this.page.social_images.linkedin.height},{hid:"og:image",property:"og:image",content:this.siteUrl+this.page.social_images.all.url},{hid:"og:image:width",property:"og:image:width",content:this.page.social_images.all.width},{hid:"og:image:height",property:"og:image:height",content:this.page.social_images.all.height},{hid:"twitter:image",name:"twitter:image",content:this.siteUrl+this.page.social_images.all.url}),this.disableSEOIndex&&head.meta.push({hid:"robots",name:"robots",content:"noindex"}),head}}],components:{img_featuredComponent:function(){return n.e(1).then(n.bind(null,514))},menuComponent:function(){return n.e(3).then(n.bind(null,511))},testimonialsComponent:function(){return n.e(2).then(n.bind(null,510))},contact_formComponent:function(){return n.e(0).then(n.bind(null,509))}},methods:{dynamicComponent:function(t){return n(351)(this.$options.components,(function(e){return e.name==="".concat(t,"Component")}))}}}),c=(n(439),n(25)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.page.body.length?n("div",t._l(t.page.body,(function(section){return n(t.dynamicComponent(section.type),{key:section.id,tag:"component",attrs:{data:section.value}})})),1):n("b-container",{staticClass:"no-content"},[n("h2",[t._v("It looks that page has no content.")]),t._v(" "),n("nuxt-link",{staticClass:"brand-btn brand-btn--primary",attrs:{to:"/"}},[t._v("\n      Go back to the home page\n    ")])],1)],1)}),[],!1,null,"514c474e",null);e.default=component.exports}}]);