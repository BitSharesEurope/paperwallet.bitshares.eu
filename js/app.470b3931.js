(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1:function(e,t){},"18d2":function(e,t,n){"use strict";var r=n("d711"),a=n.n(r);a.a},"1d6b":function(e,t,n){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("PaperWallet")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"15px"}},[n("h2",[n("img",{staticStyle:{padding:"5px","margin-bottom":"10px"},attrs:{src:"/logo.png",width:"42px"}}),e._v("\n        PaperWallet/ColdStorage  \n        "),e.accountname?n("span",{staticClass:"small"},[e._v("("),n("tt",[e._v(e._s(e.accountname))]),e._v(")")],1):e._e()]),e.print_password?n("div",{staticClass:"d-none d-print-block"},[n("div",{staticClass:"panel panel-danger"},[e._m(0),e.valid?n("div",{staticClass:"panel-body"},[n("div",{staticClass:"key"},[e._v(e._s(e.password))])]):e._e()])]):e._e(),n("div",{staticClass:"d-print-none"},[n("form",[n("div",{staticClass:"form-group"},[n("label",[n("fa",{attrs:{icon:"user"}}),e._v("\n                    Account Name\n                    "),n("span",{class:{badge:!0,"badge-success":!e.premium_account,"badge-danger":e.premium_account}},[e._v(e._s(e.premium_account_text))])],1),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.accountname,expression:"accountname",modifiers:{lazy:!0}},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"1",autofocus:"",type:"text",name:"name"},domProps:{value:e.accountname},on:{change:function(t){e.accountname=t.target.value}}})]),n("div",{staticClass:"form-group"},[n("label",[n("fa",{attrs:{icon:"key"}}),e._v("\n                    Password\n                ")],1),n("div",{staticClass:"input-group"},["checkbox"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"2",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{input:function(t){return t.preventDefault(),e.form_updated(t)},change:function(t){var n=e.password,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);r.checked?s<0&&(e.password=n.concat([o])):s>-1&&(e.password=n.slice(0,s).concat(n.slice(s+1)))}else e.password=a}}}):"radio"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"2",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{input:function(t){return t.preventDefault(),e.form_updated(t)},change:function(t){e.password=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"2",type:e.passwordFieldType},domProps:{value:e.password},on:{input:[function(t){t.target.composing||(e.password=t.target.value)},function(t){return t.preventDefault(),e.form_updated(t)}]}}),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.useRandomPassword()}}},[n("fa",{attrs:{icon:"dice"}})],1),n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.toggleVisibility()}}},[n("fa",{attrs:{icon:e.passwordIcon}})],1)])])]),n("div",{staticClass:"form-group"},[n("label",[n("fa",{attrs:{icon:"key"}}),e._v("\n                    Confirm Password\n                ")],1),n("div",{staticClass:"input-group"},["checkbox"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password_verify,expression:"password_verify"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"3",type:"checkbox"},domProps:{checked:Array.isArray(e.password_verify)?e._i(e.password_verify,null)>-1:e.password_verify},on:{input:function(t){return t.preventDefault(),e.form_updated(t)},change:function(t){var n=e.password_verify,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);r.checked?s<0&&(e.password_verify=n.concat([o])):s>-1&&(e.password_verify=n.slice(0,s).concat(n.slice(s+1)))}else e.password_verify=a}}}):"radio"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password_verify,expression:"password_verify"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"3",type:"radio"},domProps:{checked:e._q(e.password_verify,null)},on:{input:function(t){return t.preventDefault(),e.form_updated(t)},change:function(t){e.password_verify=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.password_verify,expression:"password_verify"},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"3",type:e.passwordFieldType},domProps:{value:e.password_verify},on:{input:[function(t){t.target.composing||(e.password_verify=t.target.value)},function(t){return t.preventDefault(),e.form_updated(t)}]}}),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.toggleVisibility()}}},[n("fa",{attrs:{icon:e.passwordIcon}})],1)])])]),e.enable_coupon?n("div",{staticClass:"form-group"},[n("label",[n("fa",{class:{"fa-spin":"barcode"!=e.gift_code_icon},attrs:{icon:e.gift_code_icon}}),e._v("\n                    Claim Coupon Code\n                    "),e.coupon.allow_register_premium_account?n("span",{staticClass:"badge badge-success"},[e._v("\n                        Premium Accounts allowed\n                    ")]):e._e(),e.coupon.amount?n("span",{staticClass:"badge badge-primary"},[n("strong",[e._v(e._s(e.coupon.amount)+" "+e._s(e.coupon.symbol))])]):e._e()],1),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.coupon_code,expression:"coupon_code",modifiers:{lazy:!0}},{name:"debounce",rawName:"v-debounce",value:500,expression:"500"}],staticClass:"form-control",attrs:{tabindex:"5",type:"text",placeholder:"Coupon Code"},domProps:{value:e.coupon_code},on:{input:function(t){return t.preventDefault(),e.coupon_reload(t)},change:function(t){e.coupon_code=t.target.value}}})])]):e._e(),e.enable_coupon?n("div",{staticClass:"form-group"},[n("label",[n("fa",{attrs:{icon:"at"}}),e._v("\n                    Email Address\n                ")],1),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{tabindex:"5",type:"text",placeholder:"email@example.com"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},function(t){return t.preventDefault(),e.form_updated(t)}]}})])]):e._e(),e.errors.length?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[n("h5",{staticClass:"alert-heading"},[e._v("Woops, something is wrong!")]),n("small",[n("b",[e._v("Please correct the following error(s):")]),n("hr"),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}))])]):e._e(),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enable_coupon,expression:"enable_coupon"}],staticClass:"form-check-input",attrs:{tabindex:"4",type:"checkbox"},domProps:{checked:Array.isArray(e.enable_coupon)?e._i(e.enable_coupon,null)>-1:e.enable_coupon},on:{change:function(t){var n=e.enable_coupon,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);r.checked?s<0&&(e.enable_coupon=n.concat([o])):s>-1&&(e.enable_coupon=n.slice(0,s).concat(n.slice(s+1)))}else e.enable_coupon=a}}}),n("div",{staticClass:"form-check-label"},[e._v("\n                    Use a Coupon Code\n                    "),n("fa",{attrs:{icon:"gift"}})],1)])])]),e.loginKey?n("div",[n("div",{staticClass:"form-group d-print-none"},[n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.printPassword(t)}}},[n("fa",{attrs:{icon:"print"}}),e._v(" Print "),n("strong",[n("fa",{attrs:{icon:"qrcode"}}),e._v(" and "),n("fa",{attrs:{icon:"key"}})],1)],1),n("button",{staticClass:"btn btn-primary",attrs:{disabled:e.loading_register,type:"button"},on:{click:function(t){return t.preventDefault(),e.registerAccount(t)}}},[n("fa",{class:{"fa-spin":e.loading_register},attrs:{icon:e.registerIcon}}),e._v(" Automatic Account!"),n("sup",[e._v("*")])],1),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.showRegistrationQuery(t)}}},[n("fa",{attrs:{icon:"code"}}),e._v("Manual Registration")],1),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.print(t)}}},[n("fa",{attrs:{icon:"print"}}),e._v(" Print "),n("strong",[e._v("only "),n("fa",{attrs:{icon:"qrcode"}})],1)],1)]),e._m(1),n("hr"),n("b-modal",{ref:"modal_account_created",attrs:{"ok-only":"","ok-variant":"outline-danger",title:"Account Created Successfully"}},[n("p",[e._v("Your account has been succesfully created!")]),n("p",[e._v("You can find all the details about your account in the \n                "),n("a",{staticClass:"ui basic primary button",attrs:{href:"https://wallet.bitshares.eu/account/"+e.accountname+"/overview",target:"_blank"}},[e._v("Explorer")])]),n("hr"),e.response.coupon?n("div",[e.response.coupon.message?n("div",{staticClass:"alert alert-success"},[e._v("\n                        "+e._s(e.response.coupon.message)+"\n                    ")]):e._e()]):e._e()]),n("b-modal",{ref:"modal_account_failed",attrs:{"ok-only":"","ok-variant":"outline-danger",title:"Account Creation Failed"}},[n("p",[e._v("An error occured while creating your account!")]),n("ul",e._l(e.registerResponseError,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]),n("b-modal",{ref:"modal_show_query",attrs:{"ok-only":"","ok-variant":"outline-danger",title:"Registration Query",size:"lg"}},[n("p",[e._v("\n                The purpose of this popup is to present the information\n                sent over to the account registration service (a.k.a.\n                faucet). It is particularly useful if you are running this\n                site on a computer that is not internet connected to\n                establish a "),n("strong",[e._v("cold")]),e._v(" paperwallet.")]),n("p",[e._v("\n                Below, you can find the request string that has to be sent\n                to our faucet endpoint")]),n("blockquote",[n("tt",[e._v(e._s(e.faucet_url))])],1),n("div",{staticClass:"form-group"},[n("label",[n("strong",[e._v("Raw POST query")])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.query_string,expression:"query_string"}],staticClass:"form-control myquery",attrs:{rows:"8"},domProps:{value:e.query_string},on:{input:function(t){t.target.composing||(e.query_string=t.target.value)}}})]),n("p",[e._v("\n                Alternatively, copy&paste the CURL command:\n                ")]),n("div",{staticClass:"form-group"},[n("label",[n("strong",[e._v("CURL command")])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.query_curl,expression:"query_curl"}],staticClass:"form-control myquery",attrs:{rows:"5"},domProps:{value:e.query_curl},on:{input:function(t){t.target.composing||(e.query_curl=t.target.value)}}})])])],1),n("div",[n("PaperWalletKey",{attrs:{type:"owner",loginKey:e.loginKey}}),n("PaperWalletKey",{attrs:{type:"active",loginKey:e.loginKey}}),n("PaperWalletKey",{attrs:{type:"memo",loginKey:e.loginKey}})],1)]):e._e()])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[e._v("Plaintext Password")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",{staticClass:"form-text text-muted",attrs:{id:"fileHelp"}},[n("sup",[e._v("*)")]),e._v("By pressing "),n("i",[e._v("Register Account!")]),e._v(", you agree to the \n                "),n("a",{attrs:{href:"https://bitshares.eu/terms",target:"_blank"}},[e._v("\n                    terms&conditions of the BitShares Europe Faucet")])])}],c=(n("7f7f"),n("96cf"),n("1da1")),u=(n("3b2b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table"},[n("tbody",[n("tr",{staticClass:"headline"},[n("th",{staticClass:"text-center"},[e._v("Public")]),n("th",{staticClass:"text-center"},[e._v(e._s(e._f("capitalize")(e.type))+" Key")]),n("th",{staticClass:"text-center"},[e._v("Private")])]),n("tr",[n("td",[this.qr_pub?n("img",{attrs:{src:this.qr_pub}}):e._e()]),n("td",[n("label",{staticClass:"pkey-label"},[e._v("Public key")]),n("p",[n("span",{staticClass:"key"},[e._v(e._s(e.pub))])]),n("label",[e._v("Private key")]),n("p",[n("span",{staticClass:"pkey"},[e._v(e._s(e.wif))])])]),n("td",[this.qr_wif?n("img",{attrs:{src:this.qr_wif}}):e._e()])])])])])}),l=[],p=(n("6b54"),n("d055")),d=n.n(p),f={name:"PaperWalletKey",props:{type:String,loginKey:Object},data:function(){return{qr_pub:"",qr_wif:""}},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.toDataURL(this.pub,{errorCorrectionLevel:"H"});case 3:return this.qr_pub=e.sent,e.next=6,d.a.toDataURL(this.wif,{errorCorrectionLevel:"H"});case 6:this.qr_wif=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),computed:{pub:function(){return this.loginKey["pubKeys"][this.type]},wif:function(){return this.loginKey["privKeys"][this.type].toWif()}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}}},m=f,_=(n("5fd8"),n("2877")),v=Object(_["a"])(m,u,l,!1,null,null,null);v.options.__file="PaperWalletKey.vue";var h=v.exports,g=n("13d4"),y=n("00a5"),b=n.n(y),w=(n("951f"),n("492a")),x=n.n(w),C={name:"PaperWallet",components:{PaperWalletKey:h},directives:{debounce:x.a},data:function(){return{faucet_url:"https://faucet.bitshares.eu/paperwallet/api/v1/accounts",coupon_url:"https://bitshares.eu/coupon/api/info/",accountname:null,password:null,password_verify:null,loginKey:null,errors:[],print_password:!1,passwordFieldType:"password",passwordIcon:"eye",loading_register:!1,account_registered:!1,registerResponseError:[],premium_account_text:"",premium_account:null,enable_coupon:!1,coupon_code:"",gift_code_icon:"barcode",coupon:{},coupon_error:null,email:"",response:{}}},computed:{registerIcon:function(){return this.loading_register?"spinner":"arrow-circle-right"},valid:function(){return 0===this.errors.length},is_premium_name:function(){return!0},query_string:function(){return JSON.stringify(this.query,null,4)},query_curl:function(){var e=JSON.stringify(this.query);return"curl -d '".concat(e,"' -H 'Content-Type: application/json' -X POST ").concat(this.faucet_url)},query:function(){if(this.loginKey){var e={account:{name:this.accountname,active_key:this.loginKey.pubKeys.active,owner_key:this.loginKey.pubKeys.owner,memo_key:this.loginKey.pubKeys.memo}};return this.coupon.code&&this.email&&(e.coupon={code:this.coupon.code,email:this.email}),e}return{}}},watch:{coupon_code:function(){this.load_coupon()},accountname:function(){this.form_updated()},enable_coupon:function(){this.form_updated()}},methods:{_is_premium_name:function(){return!RegExp("[0-9/.-]").test(this.accountname)&&!!RegExp("[aeiouy]").test(this.accountname)},is_premium_account:function(){return this._is_premium_name()?(this.premium_account_text="Premium Account",this.premium_account=!0,!0):(this.premium_account_text="Regular Account",this.premium_account=!1,!1)},coupon_reload:function(){this.gift_code_icon="spinner"},load_coupon:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.coupon_code){e.next=25;break}return e.prev=1,t=this.coupon_url+this.coupon_code+"/",e.next=5,fetch(t);case 5:if(n=e.sent,200==n.status){e.next=8;break}throw new Error(n.status);case 8:return this.coupon_error=null,e.next=11,n.json();case 11:if(r=e.sent,"FUNDED"==r.state){e.next=14;break}throw new Error(r.state);case 14:this.coupon=r,e.next=23;break;case 17:e.prev=17,e.t0=e["catch"](1),a="",a=404==e.t0.message?"Code not found":302==e.t0.message?"Code not found":429==e.t0.message?"You've been trying too many codes! Please try again later!":"Error: "+e.t0.message,this.coupon_error=a,this.coupon={};case 23:e.next=27;break;case 25:this.coupon_error=null,this.coupon={};case 27:this.form_updated(),this.gift_code_icon="barcode";case 29:case"end":return e.stop()}},e,this,[[1,17]])}));return function(){return e.apply(this,arguments)}}(),toggleVisibility:function(e){this.passwordFieldType=e||"password"===this.passwordFieldType?"text":"password",this.passwordIcon=e||"password"===this.passwordFieldType?"eye-slash":"eye"},printPassword:function(){this.print_password=!0,this.printDialog()},print:function(){this.print_password=!1,this.printDialog()},printDialog:function(){window.print()},useRandomPassword:function(){this.password=this.generatePassword(16),this.password_verify=this.password,this.toggleVisibility(!0),this.form_updated()},generatePassword:function(e){return b.a.generateMnemonic()},validate_form:function(){return this.errors=[],(!this.password||this.password.length<16)&&this.errors.push("Password is too short! Need at least 16 characters"),this.password!=this.password_verify&&this.errors.push("Passwords don't match"),(!this.accountname||this.accountname.length<3)&&this.errors.push("Account name required! Minimum length: 3"),this.is_premium_account()&&(this.coupon.allow_register_premium_account||this.errors.push("Only regular accounts are supported here!")),this.enable_coupon&&(this.email||this.errors.push("Email address required for claiming coupon!"),this.coupon_code||this.errors.push("Coupon code missing!")),this.coupon_error&&this.errors.push(this.coupon_error),0==this.errors.length},form_updated:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.validate_form()?this.generateLoginKey():this.clearLoginKey();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),clearLoginKey:function(){this.loginKey=null},generateLoginKey:function(){this.loginKey=g["Login"].generateKeys(this.accountname,this.password,["owner","active","memo"],"BTS")},faucetRequest:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.faucet_url,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(this.query)});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),registerAccount:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loading_register=!0,this.faucetRequest().catch(function(e){return t.errors.push(e)}).then(function(e){var n=t.query;e&&!e.error&&e.account&&e.account.name==n.account.name&&e.account.active_key==n.account.active_key&&e.account.owner_key==n.account.owner_key&&e.account.memo_key==n.account.memo_key?(t.account_registered=!0,t.loading_register=!1,t.response=e,t.$refs.modal_account_created.show()):(e.error&&(t.registerResponseError=e.error.base),t.account_registered=!1,t.loading_register=!1,t.$refs.modal_account_failed.show())});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showRegistrationQuery:function(){this.$refs.modal_show_query.show()}}},k=C,P=(n("18d2"),Object(_["a"])(k,s,i,!1,null,"4a321ca0",null));P.options.__file="PaperWallet.vue";var q=P.exports,K=(n("f9e3"),n("2dd8"),{name:"app",components:{PaperWallet:q}}),R=K,A=(n("034f"),Object(_["a"])(R,a,o,!1,null,null,null));A.options.__file="App.vue";var N=A.exports,O=n("9f7b"),j=n("ecee"),D=n("c074"),T=n("ad3d");j["c"].add([D["m"],D["j"],D["i"],D["f"],D["g"],D["a"],D["l"],D["k"],D["e"],D["h"],D["d"],D["c"],D["b"]]),r["a"].component("fa",T["a"]),r["a"].config.productionTip=!1,r["a"].use(O["a"]),new r["a"]({render:function(e){return e(N)}}).$mount("#app")},"5fd8":function(e,t,n){"use strict";var r=n("1d6b"),a=n.n(r);a.a},"64a9":function(e,t,n){},d711:function(e,t,n){}});
//# sourceMappingURL=app.470b3931.js.map