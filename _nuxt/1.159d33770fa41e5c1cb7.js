(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{346:function(t,n,e){var content=e(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("199d7a09",content,!0,{sourceMap:!1})},458:function(t,n,e){"use strict";e(346)},459:function(t,n,e){var o=e(36)(!1);o.push([t.i,".contact-details--dark[data-v-cc6b4d7e]{color:#fff}.contact-details__line--no-margin[data-v-cc6b4d7e]{margin-bottom:.2rem}",""]),t.exports=o},530:function(t,n,e){"use strict";e.r(n);var o={name:"ContactDetails",props:{inFooter:{type:Boolean,default:!1}},computed:{contactOptions:function(){return this.$store.state.options.contact},address:function(){return this.contactOptions.address},email:function(){return this.contactOptions.email},phone:function(){return this.contactOptions.phone},fax:function(){return this.contactOptions.fax}}},c=(e(458),e(26)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact-details",class:[{"contact-details--dark":t.inFooter},{"text-center":!t.inFooter}]},[t.address?e("p",{staticClass:"contact-details__line contact-details__address",domProps:{innerHTML:t._s(t.address)}}):t._e(),t._v(" "),t.email?e("p",{staticClass:"contact-details__line contact-details__line--no-margin contact-details__email"},[t._v("\n    Email: "),e("a",{staticClass:"contact-details__link",class:{"link-on-dark":t.inFooter},attrs:{href:"mailto:"+t.email,target:"_blank"},domProps:{innerHTML:t._s(t.email)}})]):t._e(),t._v(" "),t.phone?e("p",{staticClass:"contact-details__line contact-details__line--no-margin contact-details__phone"},[t._v("\n    Phone: "),e("a",{staticClass:" contact-details__link",class:{"link-on-dark":t.inFooter},attrs:{href:"tel:"+t.phone.link},domProps:{innerHTML:t._s(t.phone.human)}})]):t._e(),t._v(" "),t.fax?e("p",{staticClass:"contact-details__line contact-details__line--no-margin contact-details__fax",domProps:{innerHTML:t._s("FAX: "+t.fax)}}):t._e()])}),[],!1,null,"cc6b4d7e",null);n.default=component.exports}}]);