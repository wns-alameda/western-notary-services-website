(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{343:function(t,e,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("9cf40c6e",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n(343)},491:function(t,e,n){var o=n(46)(!1);o.push([t.i,'.featured-img[data-v-48ab3c4f]{position:relative}.featured-img[data-v-48ab3c4f]:after{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(2,57,74,.65);content:"";z-index:0}.featured-img__caption[data-v-48ab3c4f]{position:absolute;top:50%;width:100%;transform:translateY(-50%);z-index:1}.featured-img__content[data-v-48ab3c4f]{color:#fff}',""]),t.exports=o},511:function(t,e,n){"use strict";n.r(e);n(10),n(22),n(23);var o=n(138),r={name:"ImgFeatured",props:{data:Object},components:{LazyHydrate:o.a,ResponsiveImg:function(){return n.e(2).then(n.bind(null,512))}},computed:{title:function(){return this.data.title?this.data.title:this.$store.state.page.title}}},d=(n(490),n(25)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"featured-img"},[n("lazy-hydrate",{attrs:{"when-idle":""}},[n("responsive-img",{attrs:{image:t.data.image,alt:t.title}})],1),t._v(" "),n("div",{staticClass:"featured-img__caption"},[n("b-container",[n("b-row",[n("b-col",{staticClass:"featured-img__content",attrs:{lg:"6"}},[n("h1",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.data.description&&"extended"===t.data.type?n("p",{domProps:{innerHTML:t._s(t.data.description)}}):t._e()])],1)],1)],1)],1)}),[],!1,null,"48ab3c4f",null);e.default=component.exports}}]);