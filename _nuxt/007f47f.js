(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{820:function(t,e,l){t.exports=l.p+"img/rekam-medis.b4fd924.png"},821:function(t,e,l){t.exports=l.p+"img/poli-gigi.34b184e.png"},836:function(t,e,l){"use strict";l.r(e);l(33),l(18),l(21),l(44),l(45);var n=l(5),o=(l(108),l(797)),c=l(22);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={created:function(){},data:function(){return{reRender:!0,modal:!1,bulan:null,tahun:null,options4:[{value:2019,label:"2019"},{value:2020,label:"2020"},{value:2021,label:"2021"}],options3:[{value:1,label:"Januari"},{value:2,label:"Februari"},{value:3,label:"Maret"},{value:4,label:"April"},{value:5,label:"Mei"},{value:6,label:"Juni"},{value:7,label:"Juli"},{value:8,label:"Agustus"},{value:9,label:"September"},{value:10,label:"Oktober"},{value:11,label:"November"},{value:12,label:"Desember"}]}},components:{Dashboard:o.a},computed:d({},Object(c.d)(["loading"])),methods:d(d(d({},Object(c.c)(["SET_LOADING_PERCENT","SET_LOADING"])),Object(c.b)(["getLaporan"])),{},{renderComponent:function(){var t=this;this.reRender=!1,this.$nextTick((function(){t.reRender=!0}))},proses:function(){this.getLaporan({tahun:this.tahun,bulan:this.bulan})}}),mounted:function(){this.SET_LOADING(!1)}},m=l(4),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-md-center",staticStyle:{"margin-top":"50px !important"}},[n("div",{staticClass:"col-3"}),t._v(" "),n("div",{staticClass:"col-3"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:l(820),alt:"..."}}),t._v(" "),n("div",{staticClass:"card-body text-center"},[n("h1",{staticClass:"card-title text-bold"},[t._v("Poli Umum")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-success",attrs:{to:"poli-umum"}},[t._v("Rekam Medis")])],1)])]),t._v(" "),n("div",{staticClass:"col-3"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:l(821),alt:"..."}}),t._v(" "),n("div",{staticClass:"card-body text-center"},[n("h1",{staticClass:"card-title text-bold"},[t._v("Poli Gigi")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-success",attrs:{to:"poli-gigi"}},[t._v("Rekam Medis")])],1)])]),t._v(" "),n("div",{staticClass:"col-3"}),t._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body text-center"},[n("button",{staticClass:"btn btn-success",attrs:{to:"poli-gigi"},on:{click:function(e){t.modal=!0}}},[t._v("Laporan")])])])])])]),t._v(" "),n("modal",{attrs:{show:t.modal,size:"small"},on:{"update:show":function(e){t.modal=e}}},[n("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Laporan")]),t._v(" "),n("div",[n("div",{staticClass:"row mt-2 justify-content-center "},[n("div",{staticClass:"col-12"},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Bulan"},model:{value:t.bulan,callback:function(e){t.bulan=e},expression:"bulan"}},t._l(t.options3,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),n("div",{staticClass:"col-12 mt-3"},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Tahun"},model:{value:t.tahun,callback:function(e){t.tahun=e},expression:"tahun"}},t._l(t.options4,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])]),t._v(" "),n("template",{slot:"footer"},[n("base-button",{staticClass:"btn-primary text-white",attrs:{type:"link"},on:{click:t.proses}},[t._v("Proses")]),t._v(" "),n("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){t.modal=!1}}},[t._v("Tutup")])],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);