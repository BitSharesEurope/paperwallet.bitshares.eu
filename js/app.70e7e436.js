(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},1:function(t,e){},"1d6b":function(t,e,r){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t._m(0),r("div",{staticClass:"col-md-12",staticStyle:{"margin-top":"15px"}},[r("PaperWallet")],1)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-12 text-center"},[r("img",{attrs:{src:"/logo.png",width:"128px"}})])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"print"},[r("h2",[t._v("PaperWallet/ColdStorage  \n        "),t.accountname?r("span",{staticClass:"small"},[t._v("("),r("tt",[t._v(t._s(t.accountname))]),t._v(")")],1):t._e()]),t.print_password?r("div",{staticClass:"d-none d-print-block"},[r("div",{staticClass:"panel panel-danger"},[t._m(0),t.valid?r("div",{staticClass:"panel-body"},[r("div",{staticClass:"key"},[t._v(t._s(t.password))])]):t._e()])]):t._e(),r("div",{staticClass:"d-print-none"},[r("form",[r("div",{staticClass:"form-group"},[r("label",[r("fa",{attrs:{icon:"user"}}),t._v("\n                    Account Name\n                    "),r("span",{class:{badge:!0,"badge-success":!t.premium_account,"badge-danger":t.premium_account}},[t._v(t._s(t.premium_account_text))])],1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.accountname,expression:"accountname"}],staticClass:"form-control",attrs:{tabindex:"1",autofocus:"",type:"text",name:"name"},domProps:{value:t.accountname},on:{input:[function(e){e.target.composing||(t.accountname=e.target.value)},function(e){return e.preventDefault(),t.form_updated(e)}]}})]),r("div",{staticClass:"form-group"},[r("label",[r("fa",{attrs:{icon:"key"}}),t._v("\n                    Password\n                ")],1),r("div",{staticClass:"input-group"},["checkbox"===t.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{tabindex:"2",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{input:function(e){return e.preventDefault(),t.form_updated(e)},change:function(e){var r=t.password,n=e.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=t._i(r,s);n.checked?o<0&&(t.password=r.concat([s])):o>-1&&(t.password=r.slice(0,o).concat(r.slice(o+1)))}else t.password=a}}}):"radio"===t.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{tabindex:"2",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{input:function(e){return e.preventDefault(),t.form_updated(e)},change:function(e){t.password=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{tabindex:"2",type:t.passwordFieldType},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},function(e){return e.preventDefault(),t.form_updated(e)}]}}),r("span",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.useRandomPassword()}}},[r("fa",{attrs:{icon:"dice"}})],1),r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.toggleVisibility()}}},[r("fa",{attrs:{icon:t.passwordIcon}})],1)])])]),r("div",{staticClass:"form-group"},[r("label",[r("fa",{attrs:{icon:"key"}}),t._v("\n                    Confirm Password\n                ")],1),r("div",{staticClass:"input-group"},["checkbox"===t.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_verify,expression:"password_verify"}],staticClass:"form-control",attrs:{tabindex:"3",type:"checkbox"},domProps:{checked:Array.isArray(t.password_verify)?t._i(t.password_verify,null)>-1:t.password_verify},on:{input:function(e){return e.preventDefault(),t.form_updated(e)},change:function(e){var r=t.password_verify,n=e.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=t._i(r,s);n.checked?o<0&&(t.password_verify=r.concat([s])):o>-1&&(t.password_verify=r.slice(0,o).concat(r.slice(o+1)))}else t.password_verify=a}}}):"radio"===t.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_verify,expression:"password_verify"}],staticClass:"form-control",attrs:{tabindex:"3",type:"radio"},domProps:{checked:t._q(t.password_verify,null)},on:{input:function(e){return e.preventDefault(),t.form_updated(e)},change:function(e){t.password_verify=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_verify,expression:"password_verify"}],staticClass:"form-control",attrs:{tabindex:"3",type:t.passwordFieldType},domProps:{value:t.password_verify},on:{input:[function(e){e.target.composing||(t.password_verify=e.target.value)},function(e){return e.preventDefault(),t.form_updated(e)}]}}),r("span",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.toggleVisibility()}}},[r("fa",{attrs:{icon:t.passwordIcon}})],1)])])]),r("div",[t.errors.length?r("p",[r("b",[t._v("Please correct the following error(s):")]),r("ul",t._l(t.errors,function(e){return r("li",{key:e},[t._v(t._s(e))])}))]):t._e()])])]),t.loginKey?r("div",[r("div",{staticClass:"form-group d-print-none"},[r("div",{staticClass:"btn-group"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.print(e)}}},[r("fa",{attrs:{icon:"print"}}),t._v(" Print "),r("strong",[t._v("only "),r("fa",{attrs:{icon:"qrcode"}})],1)],1),r("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.printPassword(e)}}},[r("fa",{attrs:{icon:"print"}}),t._v(" Print "),r("strong",[r("fa",{attrs:{icon:"qrcode"}}),t._v(" and "),r("fa",{attrs:{icon:"key"}})],1)],1),r("button",{staticClass:"btn btn-alert",attrs:{disabled:t.loading_register,type:"button"},on:{click:function(e){return e.preventDefault(),t.registerAccount(e)}}},[r("fa",{class:{"fa-spin":t.loading_register},attrs:{icon:t.registerIcon}}),t._v(" Register Account!"),r("sup",[t._v("*")])],1)]),t._m(1),r("hr"),r("b-modal",{ref:"modal_account_created",attrs:{"ok-only":"","ok-variant":"outline-danger",title:"Account Created Successfully"}},[r("p",[t._v("Your account has been succesfully created!")]),r("p",[t._v("You can find all the details about your account in the \n                "),r("a",{attrs:{href:"https://wallet.bitshares.eu/account/"+t.accountname+"/overview",target:"_blank"}},[t._v("Explorer")])])]),r("b-modal",{ref:"modal_account_failed",attrs:{"ok-only":"","ok-variant":"outline-danger",title:"Account Creation Failed"}},[r("p",[t._v("An error occured while creating your account!")]),r("ul",t._l(t.registerResponseError,function(e){return r("li",{key:e},[t._v(t._s(e))])}))])],1),r("div",[r("PaperWalletKey",{attrs:{type:"owner",loginKey:t.loginKey}}),r("PaperWalletKey",{attrs:{type:"active",loginKey:t.loginKey}}),r("PaperWalletKey",{attrs:{type:"memo",loginKey:t.loginKey}})],1)]):t._e()])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-heading"},[r("h3",{staticClass:"panel-title"},[t._v("Plaintext Password")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("small",{staticClass:"form-text text-muted",attrs:{id:"fileHelp"}},[r("sup",[t._v("*)")]),t._v("By pressing "),r("i",[t._v("Register Account!")]),t._v(", you agree to the \n                "),r("a",{attrs:{href:"https://bitshares.eu/terms",target:"_blank"}},[t._v("\n                    terms&conditions of the BitShares Europe Faucet")])])}],c=(r("7f7f"),r("96cf"),r("1da1")),u=(r("3b2b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"table"},[r("tbody",[r("tr",{staticClass:"headline"},[r("th",{staticClass:"text-center"},[t._v("Public")]),r("th",{staticClass:"text-center"},[t._v(t._s(t._f("capitalize")(t.type))+" Key")]),r("th",{staticClass:"text-center"},[t._v("Private")])]),r("tr",[r("td",[this.qr_pub?r("img",{attrs:{src:this.qr_pub}}):t._e()]),r("td",[r("label",{staticClass:"pkey-label"},[t._v("Public key")]),r("p",[r("span",{staticClass:"key"},[t._v(t._s(t.pub))])]),r("label",[t._v("Private key")]),r("p",[r("span",{staticClass:"pkey"},[t._v(t._s(t.wif))])])]),r("td",[this.qr_wif?r("img",{attrs:{src:this.qr_wif}}):t._e()])])])])])}),l=[],p=(r("6b54"),r("d055")),d=r.n(p),f={name:"PaperWalletKey",props:{type:String,loginKey:Object},data:function(){return{qr_pub:"",qr_wif:""}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.toDataURL(this.pub,{errorCorrectionLevel:"H"});case 3:return this.qr_pub=t.sent,t.next=6,d.a.toDataURL(this.wif,{errorCorrectionLevel:"H"});case 6:this.qr_wif=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),computed:{pub:function(){return this.loginKey["pubKeys"][this.type]},wif:function(){return this.loginKey["privKeys"][this.type].toWif()}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}},m=f,v=(r("5fd8"),r("2877")),_=Object(v["a"])(m,u,l,!1,null,null,null);_.options.__file="PaperWalletKey.vue";var h=_.exports,y=r("13d4"),g=r("00a5"),w=r.n(g),b=(r("951f"),r("e511"),{name:"PaperWallet",components:{PaperWalletKey:h},data:function(){return{accountname:null,password:null,password_verify:null,loginKey:null,errors:[],print_password:!1,passwordFieldType:"password",passwordIcon:"eye",loading_register:!1,account_registered:!1,registerResponseError:[],premium_account_text:"",premium_account:null}},computed:{registerIcon:function(){return this.loading_register?"spinner":"arrow-circle-right"},valid:function(){return 0===this.errors.length},is_premium_name:function(){return!0}},methods:{_is_premium_name:function(){return!RegExp("[0-9/.-]").test(this.accountname)&&!!RegExp("[aeiouy]").test(this.accountname)},is_premium_account:function(){return this._is_premium_name()?(this.premium_account_text="Premium Account",this.premium_account=!0,!0):(this.premium_account_text="Regular Account",this.premium_account=!1,!1)},toggleVisibility:function(t){this.passwordFieldType=t||"password"===this.passwordFieldType?"text":"password",this.passwordIcon=t||"password"===this.passwordFieldType?"eye-slash":"eye"},printPassword:function(){this.print_password=!0,this.printDialog()},print:function(){this.print_password=!1,this.printDialog()},printDialog:function(){window.print()},useRandomPassword:function(){this.password=this.generatePassword(16),this.password_verify=this.password,this.toggleVisibility(!0),this.form_updated()},generatePassword:function(t){return w.a.generateMnemonic()},validate_form:function(){return this.errors=[],(!this.password||this.password.length<16)&&this.errors.push("Password is too short! Need at least 16 characters"),this.password!=this.password_verify&&this.errors.push("Passwords don't match"),(!this.accountname||this.accountname.length<3)&&this.errors.push("Account name required! Minimum length: 3"),this.is_premium_account()&&this.errors.push("Only regular accounts are supported here!"),0==this.errors.length},form_updated:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.validate_form()?this.generateLoginKey():this.clearLoginKey();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),clearLoginKey:function(){this.loginKey=null},generateLoginKey:function(){this.loginKey=y["Login"].generateKeys(this.accountname,this.password,["owner","active","memo"],"BTS")},faucetRequest:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r="https://faucet.bitshares.eu/paperwallet/api/v1/accounts",t.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),registerAccount:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loading_register=!0,e={account:{name:this.accountname,active_key:this.loginKey.pubKeys.active,owner_key:this.loginKey.pubKeys.owner,memo_key:this.loginKey.pubKeys.memo}},this.faucetRequest(e).catch(function(t){return r.errors.push(t)}).then(function(t){t&&!t.error&&t.account&&t.account.name==e.account.name&&t.account.active_key==e.account.active_key&&t.account.owner_key==e.account.owner_key&&t.account.memo_key==e.account.memo_key?(r.account_registered=!0,r.loading_register=!1,r.$refs.modal_account_created.show()):(t.error&&(r.registerResponseError=t.error.base),r.account_registered=!1,r.loading_register=!1,r.$refs.modal_account_failed.show())});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),k=b,x=(r("fe7d"),Object(v["a"])(k,o,i,!1,null,null,null));x.options.__file="PaperWallet.vue";var C=x.exports,P=(r("f9e3"),r("2dd8"),{name:"app",components:{PaperWallet:C}}),K=P,R=(r("034f"),Object(v["a"])(K,a,s,!1,null,null,null));R.options.__file="App.vue";var A=R.exports,O=r("9f7b"),j=r("ecee"),D=r("c074"),T=r("ad3d");j["c"].add([D["i"],D["f"],D["e"],D["c"],D["d"],D["a"],D["h"],D["g"],D["b"]]),n["a"].component("fa",T["a"]),n["a"].config.productionTip=!1,n["a"].use(O["a"]),new n["a"]({render:function(t){return t(A)}}).$mount("#app")},"5fd8":function(t,e,r){"use strict";var n=r("1d6b"),a=r.n(n);a.a},"64a9":function(t,e,r){},"6d26":function(t,e,r){},fe7d:function(t,e,r){"use strict";var n=r("6d26"),a=r.n(n);a.a}});
//# sourceMappingURL=app.70e7e436.js.map