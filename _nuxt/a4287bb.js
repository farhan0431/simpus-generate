(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{788:function(t,e,l){"use strict";l(33),l(18),l(21),l(44),l(45);var n=l(5),o=l(8);l(46),l(512);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"dropzone-file-upload",props:{options:{type:Object,default:function(){return{}}},value:[String,Object,Array],url:{type:String,default:"http://"},multiple:Boolean,previewClasses:[String,Object,Array]},model:{prop:"value",event:"change"},data:function(){return{currentFile:null,files:[],showList:!1}},methods:{initDropzone:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.e(22).then(l.t.bind(null,822,7));case 2:(n=(n=e.sent).default||n).autoDiscover=!1,o=t.multiple?t.$refs.previewMultiple:t.$refs.previewSingle,r=t,c=d(d({},t.options),{},{url:t.url,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:o,previewTemplate:o.innerHTML,maxFiles:t.multiple?null:1,acceptedFiles:t.multiple?null:"image/*",init:function(){this.on("addedfile",(function(t){!r.multiple&&r.currentFile,r.currentFile=t}))}}),t.dropzone=new n(t.$el,c),o.innerHTML="",["drop","dragstart","dragend","dragenter","dragover","addedfile","removedfile","thumbnail","error","processing","uploadprogress","sending","success","complete","canceled","maxfilesreached","maxfilesexceeded","processingmultiple","sendingmultiple","successmultiple","completemultiple","canceledmultiple","totaluploadprogress","reset","queuecomplete"].forEach((function(e){t.dropzone.on(e,(function(data){if(t.$emit(e,data),"addedfile"===e)t.files.push(data),t.$emit("change",t.files);else if("removedfile"===e){var l=t.files.findIndex((function(t){return t.upload.uuid===data.upload.uuid}));-1!==l&&t.files.splice(l,1),t.$emit("change",t.files)}}))}));case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.initDropzone();case 1:case"end":return e.stop()}}),e)})))()}},m=l(4),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dropzone mb-3 dz-clickable",class:[t.multiple?"dropzone-multiple":"dropzone-single"]},[l("div",{staticClass:"fallback"},[l("div",{staticClass:"custom-file"},[l("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"projectCoverUploads",multiple:t.multiple}}),t._v(" "),l("label",{staticClass:"custom-file-label",attrs:{for:"projectCoverUploads"}},[t._v("Choose file")])])]),t._v(" "),t.multiple?l("ul",{ref:"previewMultiple",staticClass:"dz-preview dz-preview-multiple list-group list-group-lg list-group-flush",class:t.previewClasses},[t._m(1)]):l("div",{ref:"previewSingle",staticClass:"dz-preview dz-preview-single",class:t.previewClasses},[t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dz-preview-cover"},[e("img",{staticClass:"dz-preview-img",attrs:{"data-dz-thumbnail":""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"list-group-item px-0"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-auto"},[l("div",{staticClass:"avatar"},[l("img",{staticClass:"avatar-img rounded",attrs:{"data-dz-thumbnail":""}})])]),t._v(" "),l("div",{staticClass:"col ml--3"},[l("h4",{staticClass:"mb-1",attrs:{"data-dz-name":""}},[t._v("...")]),t._v(" "),l("p",{staticClass:"small text-muted mb-0",attrs:{"data-dz-size":""}},[t._v("...")])]),t._v(" "),l("div",{staticClass:"col-auto"},[l("button",{staticClass:"btn btn-danger btn-sm",attrs:{"data-dz-remove":"true"}},[l("i",{staticClass:"fas fa-trash"})])])])])}],!1,null,null,null);e.a=component.exports},803:function(t,e,l){var content=l(817);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(15).default)("2329023b",content,!0,{sourceMap:!1})},816:function(t,e,l){"use strict";l(803)},817:function(t,e,l){var n=l(14)(!1);n.push([t.i,".el-select .el-input .el-input__inner[data-v-1c3c9d71]{height:32px!important}",""]),t.exports=n},834:function(t,e,l){"use strict";l.r(e);l(33),l(18),l(21),l(44),l(45);var n=l(5),o=(l(190),l(795)),r=l.n(o),d=(l(796),l(108)),c=l(22),m=l(788);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Modal:d.a,flatPicker:r.a,DropzoneFileUpload:m.a},computed:_({},Object(c.d)("rekamMedis",{errors:function(t){return t.errors},identitas:function(t){return t.search}})),created:function(){if(null==this.identitas)return this.$router.push("/cari-data")},mounted:function(){console.log("-----------------------------------"),console.log("-----------------------------------"),this.riwayat_pemeriksaan=this.riwayat_pemeriksaan,this.data={dokumen_link:this.identitas.dokumen_link,umur:this.identitas.umur,nama:this.identitas.nama,ktp:this.identitas.nik,alamat:this.identitas.alamat,tanggal_pertama:this.identitas.created_at,jenis_kelamin:this.identitas.jenis_kelamin,status:this.identitas.status_pembayaran,riwayat_alergi:this.identitas.riwayat_alergi,no_rm:this.identitas.no_rm,berat_badan:this.identitas.rekam_medis.berat_badan,tinggi_badan:this.identitas.rekam_medis.tinggi_badan,tekanan_darah:this.identitas.rekam_medis.tekanan_darah,nadi:this.identitas.rekam_medis.nadi,rujukan_poli:this.identitas.rekam_medis.rujukan_poli,lingkar_perut:this.identitas.rekam_medis.lingkar_perut,suhu_badan:this.identitas.rekam_medis.suhu,nafas:this.identitas.rekam_medis.nafas}},data:function(){return{dropOptions:{url:this.$axios.defaults.baseURL+"rekam-medis/dokumen",addRemoveLinks:!0,acceptedFiles:".pdf",maxFiles:1,autoProcessQueue:!1,headers:{Authorization:this.$auth.strategy.$auth.$storage._state["_token.local"]},params:{no_rm:""}},modal:!1,riwayatModal:!1,riwayat_pemeriksaan:[],options:[{value:1,label:"BPJS"},{value:2,label:"Umum"}],options2:[{value:1,label:"Poli Umum"},{value:2,label:"Poli Gigi"}],options3:[{value:1,label:"Laki-laki"},{value:2,label:"Wanita"}],options4:[{value:1,label:"Normal"},{value:2,label:"Sisa Akar"},{value:3,label:"Gangren Pulpa"},{value:4,label:"Mobile 1"},{value:5,label:"Pulpa Polip"},{value:6,label:"Mobile 2"},{value:7,label:"Persistensi"},{value:8,label:"Mobile 3"},{value:9,label:"Edentolous (Gigi Hilang)"},{value:10,label:"Fraktur"},{value:11,label:"Impaksi"},{value:12,label:"Karies Media/Dentin"},{value:13,label:"Un-erupsi (tidak/belum tumbuh)"},{value:14,label:"Karies Profunda"},{value:15,label:"Tidak ada benih gigi"},{value:16,label:"Karies Akar"},{value:17,label:"Tambalan Komposit"},{value:18,label:"Tambalan Amalgam"},{value:19,label:"Mahkota (Crown)"},{value:20,label:"Gigi Tiruan Jembatan"},{value:21,label:"Gigi Tiruan Lepasan (Akrilik/bahan lainnya)"},{value:22,label:"Lainnya"}],odontogram:{},data:{dokumen_link:null,umur:null,nama:null,ktp:null,tanggal_lahir:new Date,alamat:null,telp:null,berat_badan:null,tinggi_badan:null,tekanan_darah:null,nadi:null,rujukan_poli:null,lingkar_perut:null,suhu_badan:null,nafas:null,riwayat_alergi:null,no_rm:null,status:"",tanggal_pertama:new Date,jenis_kelamin:null,odontogram:[]},new_data:{subjek:"",objek:"",anamnesa:"",perawatan:"",diagnosa:"",dokter:""},pemeriksaan:[]}},methods:_(_({},Object(c.b)("rekamMedis",["newData","searchData"])),{},{addPerawatan:function(){this.pemeriksaan.push(this.new_data),this.modal=!1,this.new_data={subjek:null,objek:null,anamnesa:null,perawatan:null,diagnosa:null}},deleteArray:function(i){this.pemeriksaan.splice(i,1),console.log(i)},insertData:function(){var t=this;console.log(this.odontogram),this.data.pemeriksaan=this.pemeriksaan,this.data.odontogram=this.odontogram,this.dropOptions.params.no_rm=this.identitas.no_rm,this.$refs.dropzone.processQueue(),this.newData(this.data).then((function(e){t.$notify({title:"Berhasil",message:"Data Berhasil Disimpan",type:"success"}),t.pemeriksaan=[],t.searchData(t.identitas.no_rm)})).catch((function(e){t.$notify({title:"Error",message:"Data Gagal Disimpan",type:"error"})}))}})},h=(l(816),l(4)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("base-header",{staticClass:"pb-6"},[l("nuxt-link",{staticClass:"btn btn-danger float-right mt-4",attrs:{to:"/cari-data"}},[l("i",{staticClass:"ni ni-bold-left "}),t._v(" Kembali")]),t._v(" "),l("div",{staticClass:"row align-items-center py-4"},[l("div",{staticClass:"col-lg-6 col-7"},[l("h6",{staticClass:"h2 d-inline-block mb-0"},[t._v("Data Rekam Medis Pasien | Poli Gigi")]),t._v(" "),l("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}})])])],1),t._v(" "),l("div",{staticClass:"container-fluid mt--6"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body ml-2"},[l("div",{staticClass:"row"},[l("el-form",{ref:"form",staticClass:"col-6",attrs:{disabled:"",size:"small","label-position":"left",model:t.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"Nama"}},[l("el-input",{model:{value:t.data.nama,callback:function(e){t.$set(t.data,"nama",e)},expression:"data.nama"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"No KTP"}},[l("el-input",{model:{value:t.data.ktp,callback:function(e){t.$set(t.data,"ktp",e)},expression:"data.ktp"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"Alamat"}},[l("el-input",{model:{value:t.data.alamat,callback:function(e){t.$set(t.data,"alamat",e)},expression:"data.alamat"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"Usia"}},[l("el-input",{model:{value:t.data.umur,callback:function(e){t.$set(t.data,"umur",e)},expression:"data.umur"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"Jenis Kelamin"}},[l("el-form-item",[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Jenis Kelamin"},model:{value:t.data.jenis_kelamin,callback:function(e){t.$set(t.data,"jenis_kelamin",e)},expression:"data.jenis_kelamin"}},t._l(t.options3,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),l("el-form",{ref:"form",staticClass:"col-6",attrs:{disabled:"",size:"small","label-position":"left",model:t.form,"label-width":"200px"}},[l("el-form-item",{attrs:{label:"Status Pasien"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Jenis Pembayaran"},model:{value:t.data.status,callback:function(e){t.$set(t.data,"status",e)},expression:"data.status"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),l("el-form-item",{attrs:{label:"Tanggal Kunjungan Pertama"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.focus,o=e.blur;return l("flat-picker",{staticClass:"form-control datepicker form-control-sm",attrs:{disabled:"",config:{allowInput:!0}},on:{"on-open":n,"on-close":o},model:{value:t.data.tanggal_pertama,callback:function(e){t.$set(t.data,"tanggal_pertama",e)},expression:"data.tanggal_pertama"}})}}])}),t._v(" "),l("el-form-item",{attrs:{label:"Riwayat Alergi"}},[l("el-input",{model:{value:t.data.riwayat_alergi,callback:function(e){t.$set(t.data,"riwayat_alergi",e)},expression:"data.riwayat_alergi"}})],1)],1),t._v(" "),l("div",{staticClass:"col-12"}),t._v(" "),t._m(0)],1),t._v(" "),l("div",{staticClass:"row mt-2 justify-content-center "},[l("div",{staticClass:"col-11 row border rounded border-success p-3"},[t._m(1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Berat Badan"},model:{value:t.data.berat_badan,callback:function(e){t.$set(t.data,"berat_badan",e)},expression:"data.berat_badan"}}),t._v(" "),t.errors&&t.errors.berat_badan?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.berat_badan[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Tinggi Badan"},model:{value:t.data.tinggi_badan,callback:function(e){t.$set(t.data,"tinggi_badan",e)},expression:"data.tinggi_badan"}}),t._v(" "),t.errors&&t.errors.tinggi_badan?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.tinggi_badan[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Suhu Badan"},model:{value:t.data.suhu_badan,callback:function(e){t.$set(t.data,"suhu_badan",e)},expression:"data.suhu_badan"}}),t._v(" "),t.errors&&t.errors.suhu_badan?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.suhu_badan[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Lingkar Perut"},model:{value:t.data.lingkar_perut,callback:function(e){t.$set(t.data,"lingkar_perut",e)},expression:"data.lingkar_perut"}}),t._v(" "),t.errors&&t.errors.lingkar_perut?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.lingkar_perut[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Tekanan Darah"},model:{value:t.data.tekanan_darah,callback:function(e){t.$set(t.data,"tekanan_darah",e)},expression:"data.tekanan_darah"}}),t._v(" "),t.errors&&t.errors.tekanan_darah?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.tekanan_darah[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Nafas (x/menit)"},model:{value:t.data.nafas,callback:function(e){t.$set(t.data,"nafas",e)},expression:"data.nafas"}}),t._v(" "),t.errors&&t.errors.nafas?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.nafas[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Nadi (x/menit)"},model:{value:t.data.nadi,callback:function(e){t.$set(t.data,"nadi",e)},expression:"data.nadi"}}),t._v(" "),t.errors&&t.errors.nadi?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.nadi[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Rujukan Poli"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Rujukan Poli"},model:{value:t.data.rujukan_poli,callback:function(e){t.$set(t.data,"rujukan_poli",e)},expression:"data.rujukan_poli"}},t._l(t.options2,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),t.errors&&t.errors.nadi?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.nadi[0]))]):t._e()],1)])]),t._v(" "),l("hr"),t._v(" "),l("div",{staticClass:"row mt-2 justify-content-center"},[l("div",{staticClass:"col-11 row"},[t._m(2),t._v(" "),l("div",{staticClass:"col-9"},[l("button",{staticClass:"btn btn-primary float-right",on:{click:function(e){t.modal=!0}}},[t._v("\n                                         Tambah\n                                     ")]),t._v(" "),l("button",{staticClass:"btn btn-primary float-right mr-2",on:{click:function(e){t.riwayatModal=!0}}},[t._v("\n                                         Riwayat Pemeriksaan\n                                     ")])]),t._v(" "),l("div",{staticClass:"col-12 mt-4"},[l("table",{staticClass:"table table-sm"},[l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"18"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.a,callback:function(e){t.$set(t.odontogram,"a",e)},expression:"odontogram.a"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"28"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.b,callback:function(e){t.$set(t.odontogram,"b",e)},expression:"odontogram.b"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"38"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.c,callback:function(e){t.$set(t.odontogram,"c",e)},expression:"odontogram.c"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"48"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.d,callback:function(e){t.$set(t.odontogram,"d",e)},expression:"odontogram.d"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"17"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.e,callback:function(e){t.$set(t.odontogram,"e",e)},expression:"odontogram.e"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"27"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.f,callback:function(e){t.$set(t.odontogram,"f",e)},expression:"odontogram.f"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"37"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.g,callback:function(e){t.$set(t.odontogram,"g",e)},expression:"odontogram.g"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"47"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.h,callback:function(e){t.$set(t.odontogram,"h",e)},expression:"odontogram.h"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"16"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.i,callback:function(e){t.$set(t.odontogram,"i",e)},expression:"odontogram.i"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"26"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.j,callback:function(e){t.$set(t.odontogram,"j",e)},expression:"odontogram.j"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"36"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.k,callback:function(e){t.$set(t.odontogram,"k",e)},expression:"odontogram.k"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"46"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.l,callback:function(e){t.$set(t.odontogram,"l",e)},expression:"odontogram.l"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"15/55"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.m,callback:function(e){t.$set(t.odontogram,"m",e)},expression:"odontogram.m"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"25/65"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.n,callback:function(e){t.$set(t.odontogram,"n",e)},expression:"odontogram.n"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"35/75"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.o,callback:function(e){t.$set(t.odontogram,"o",e)},expression:"odontogram.o"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"45/85"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.p,callback:function(e){t.$set(t.odontogram,"p",e)},expression:"odontogram.p"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"14/54"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.q,callback:function(e){t.$set(t.odontogram,"q",e)},expression:"odontogram.q"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"24/64"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.r,callback:function(e){t.$set(t.odontogram,"r",e)},expression:"odontogram.r"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"34/74"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.s,callback:function(e){t.$set(t.odontogram,"s",e)},expression:"odontogram.s"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"44/84"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.t,callback:function(e){t.$set(t.odontogram,"t",e)},expression:"odontogram.t"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"13/53"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.u,callback:function(e){t.$set(t.odontogram,"u",e)},expression:"odontogram.u"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"23/63"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.v,callback:function(e){t.$set(t.odontogram,"v",e)},expression:"odontogram.v"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"33/73"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.w,callback:function(e){t.$set(t.odontogram,"w",e)},expression:"odontogram.w"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"43/83"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.x,callback:function(e){t.$set(t.odontogram,"x",e)},expression:"odontogram.x"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"12/52"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.y,callback:function(e){t.$set(t.odontogram,"y",e)},expression:"odontogram.y"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"22/62"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.z,callback:function(e){t.$set(t.odontogram,"z",e)},expression:"odontogram.z"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"32/72"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.aa,callback:function(e){t.$set(t.odontogram,"aa",e)},expression:"odontogram.aa"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"42/82"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.ab,callback:function(e){t.$set(t.odontogram,"ab",e)},expression:"odontogram.ab"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),t._v(" "),l("tr",[l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"11/51"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.ac,callback:function(e){t.$set(t.odontogram,"ac",e)},expression:"odontogram.ac"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"21/61"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.ad,callback:function(e){t.$set(t.odontogram,"ad",e)},expression:"odontogram.ad"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"31/71"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.ae,callback:function(e){t.$set(t.odontogram,"ae",e)},expression:"odontogram.ae"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),l("td",[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"41/81"}},[l("el-select",{staticStyle:{width:"100%"},model:{value:t.odontogram.af,callback:function(e){t.$set(t.odontogram,"af",e)},expression:"odontogram.af"}},t._l(t.options4,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)])])]),t._v(" "),t._m(3),t._v(" "),l("div",{staticClass:"col-12"},[l("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.pemeriksaan}},[l("el-table-column",{attrs:{label:"Subjek (S)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.subjek))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"OBJEK (O)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.objek))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"ANAMNESA (A)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.anamnesa))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"Perawatan (P)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.perawatan))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"Diagnosa (ICD-X)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.diagnosa))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"HAPUS","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(l){return t.deleteArray(e.$index)}}},[t._v("Hapus")])])])]}}])})],1)],1),t._v(" "),l("div",{staticClass:"col-12 mt-4 row"},[t._m(4),t._v(" "),l("div",{staticClass:"col-6"},[null!=t.data.dokumen_link?l("a",{staticClass:"btn btn-primary float-right",attrs:{href:t.data.dokumen_link,target:"_blank"}},[t._v("Lihat Dokumen")]):t._e()]),t._v(" "),l("base-input",{staticClass:"col-12 mt-2",staticStyle:{width:"50%"}},[l("vue2Dropzone",{ref:"dropzone",attrs:{id:"dropzone",options:t.dropOptions,useCustomSlot:!0},on:{"vdropzone-removed-file":t.imageRemoved}},[l("div",{staticClass:"dropzone-custom-content"},[l("h3",{staticClass:"dropzone-custom-title"},[t._v("Drag/Tarik dokumen kesini")])])])],1)],1),t._v(" "),l("div",{staticClass:"col-12"},[l("button",{staticClass:"btn btn-success float-right",on:{click:function(e){return t.insertData()}}},[t._v("Simpan Data")])])])])])])])])]),t._v(" "),l("modal",{attrs:{show:t.modal,size:"xl"},on:{"update:show":function(e){t.modal=e}}},[l("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Pemeriksaan")]),t._v(" "),l("div",[l("div",{staticClass:"row mt-2 justify-content-center "},[l("div",{staticClass:"col-11 row p-3"},[l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Subjek"},model:{value:t.new_data.subjek,callback:function(e){t.$set(t.new_data,"subjek",e)},expression:"new_data.subjek"}}),t._v(" "),t.errors&&t.errors.subjek?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.subjek[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Objek"},model:{value:t.new_data.objek,callback:function(e){t.$set(t.new_data,"objek",e)},expression:"new_data.objek"}}),t._v(" "),t.errors&&t.errors.objek?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.objek[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Anamnesa"},model:{value:t.new_data.anamnesa,callback:function(e){t.$set(t.new_data,"anamnesa",e)},expression:"new_data.anamnesa"}}),t._v(" "),t.errors&&t.errors.anamnesa?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.anamnesa[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Perawatan"},model:{value:t.new_data.perawatan,callback:function(e){t.$set(t.new_data,"perawatan",e)},expression:"new_data.perawatan"}}),t._v(" "),t.errors&&t.errors.perawatan?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.perawatan[0]))]):t._e()],1),t._v(" "),l("div",{staticClass:"col-6"},[l("base-input",{staticStyle:{width:"100%"},attrs:{label:"Diagnosa"},model:{value:t.new_data.diagnosa,callback:function(e){t.$set(t.new_data,"diagnosa",e)},expression:"new_data.diagnosa"}}),t._v(" "),t.errors&&t.errors.diagnosa?l("h5",{staticClass:"text-danger"},[t._v(t._s(t.errors.diagnosa[0]))]):t._e()],1)])])]),t._v(" "),l("template",{slot:"footer"},[l("base-button",{attrs:{type:"primary"},on:{click:function(e){return t.addPerawatan()}}},[t._v("Simpan")]),t._v(" "),l("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){t.modal=!1}}},[t._v("Tutup")])],1)],2),t._v(" "),l("modal",{attrs:{show:t.riwayatModal,size:"xl"},on:{"update:show":function(e){t.riwayatModal=e}}},[l("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Riwayat Pemeriksaan")]),t._v(" "),l("div",[l("div",{staticClass:"row mt-2 justify-content-center "},[l("div",{staticClass:"col-12 row p-3"},[l("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.riwayat_pemeriksaan}},[l("el-table-column",{attrs:{label:"Subjek (S)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.subjek))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"OBJEK (O)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.objek))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"ANAMNESA (A)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.anamnesa))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"Perawatan (P)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.perawatan))])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"Diagnosa (ICD-X)","min-width":"61px",prop:"subjek"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("div",{staticClass:"media align-items-center"},[l("div",{staticClass:"media-body"},[l("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.diagnosa))])])])]}}])})],1)],1)])]),t._v(" "),l("template",{slot:"footer"},[l("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){t.riwayatModal=!1}}},[t._v("Tutup")])],1)],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("hr")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-12"},[l("h1",{staticClass:"font-weight-bold mb-2"},[t._v("Tanda Vital")]),t._v(" "),l("hr")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-3"},[l("h1",{staticClass:"font-weight-bold mb-2"},[t._v("Pemeriksaan")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("hr")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-6"},[l("h1",{staticClass:"font-weight-bold mb-2"},[t._v("Dokumen Tambahan")])])}],!1,null,"1c3c9d71",null);e.default=component.exports}}]);