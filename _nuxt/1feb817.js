(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{826:function(t,e,n){"use strict";n.r(e);n(33),n(18),n(21),n(44),n(45);var r=n(5),c=n(8),l=(n(190),n(46),n(786)),o=n.n(l),d=(n(787),n(22));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("rekamMedis/getData");case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{search:null}},computed:v({},Object(d.d)("rekamMedis",["status","items"])),methods:v(v(v({},Object(d.b)("rekamMedis",["searchData","getData"])),Object(d.c)("rekamMedis",["SET_PAGE"])),{},{cariData:function(q){var t=this;console.log(this.status),this.searchData(q).then((function(e){t.status?t.$router.push("cari-data/".concat(q)):o.a.fire({title:"Data Tidak Ditemukan",buttonsStyling:!1,customClass:{confirmButton:"btn btn-danger"},showDenyButton:!1,showCancelButton:!1,icon:"error"})}))}}),watch:{"items.current_page":function(){this.SET_PAGE(this.items.current_page)},search:function(){this.getData(this.search)}}},h=n(4),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6"},[n("nuxt-link",{staticClass:"btn btn-danger float-right mt-4",attrs:{to:"/poli-umum"}},[n("i",{staticClass:"ni ni-bold-left "}),t._v(" Kembali")]),t._v(" "),n("div",{staticClass:"row align-items-center py-4"},[n("div",{staticClass:"col-lg-6 col-7"},[n("h6",{staticClass:"h2 d-inline-block mb-0"},[t._v("Cari Data Rekam Medis Pasien | Poli Umum")]),t._v(" "),n("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}})])])],1),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"}),t._v(" "),n("div",{staticClass:"col-12 row"},[n("div",{staticClass:"col-12"},[n("base-input",{staticClass:" float-right",staticStyle:{width:"100"},attrs:{label:"Cari Data...",placeholder:"Nama/Rekam Medis"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t._v(" "),n("div",{staticClass:"col-12"},[n("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.items.data}},[n("el-table-column",{attrs:{label:"Nomor Rekam Medis","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.no_rm))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Nama","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.nama))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Alamat","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(r.alamat))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"#","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-body"},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.cariData(r.no_rm)}}},[t._v("Lihat")])])])]}}])})],1),t._v(" "),n("div",{staticClass:"card-footer py-4 d-flex justify-content-end"},[n("base-pagination",{attrs:{total:t.items.total},model:{value:t.items.current_page,callback:function(e){t.$set(t.items,"current_page",e)},expression:"items.current_page"}})],1)],1)])])])])])])],1)}),[],!1,null,"17bcced8",null);e.default=component.exports}}]);