var $ = require('jquery');
var {Login} = require("bitsharesjs");
var $result = $('.result').hide();
var $pwdlengthwarning = $("#pwdlengthwarning").hide();
var $pwdmismatchWarning = $("#pwdmismatchhwarning").hide();
var prefix = "BTS";

import QRCode from 'qrcode';
let qrcodedraw = new QRCode.QRCodeDraw();

function verifyPasswordLength(w) {
 if (w.length >= 16) {
  $pwdlengthwarning.hide();
  return true;
 } else if (w.length > 0){
  $pwdlengthwarning.show();
  $result.hide();
  return false;
 }
}

window.$ = $;
function verifyPasswordMatch(password, passwordConfirm) {
 if (password != passwordConfirm) {
  $pwdmismatchWarning.show();
  $result.hide();
  return false;
 } else {
  $pwdmismatchWarning.hide();
  return true;
 }
}

function processKey(p, type) {
 $('#' + type + '_key').text(p["pubKeys"][type]);
 $('#' + type + '_pkey').text(p["privKeys"][type].toWif());
 qrcodedraw.draw(document.getElementById(type + "_pub"), p["pubKeys"][type], function(error,canvas){
   if(error){ return console.log('Error =( ', error); }
 });
 qrcodedraw.draw(document.getElementById(type + "_wif"), p["privKeys"][type].toWif(), function(error,canvas){
   if(error){ return console.log('Error =( ', error); }
 });
}

function processKeyPress() {
 var name = $('input[name=name]').val();
 var password = $('input[name=password]').val();
 var passwordConfirm = $('input[name=passwordConfirm]').val();
 $('#printplainpassword').text(password);
 $('#printplainusername').text("account: " + name);

 if (!verifyPasswordLength(password) || !name) {
  return;
 }
 if (!verifyPasswordMatch(password, passwordConfirm)) {
  return;
 }
 $result.hide();
 var p = Login.generateKeys(name, password, ["owner", "active", "memo"], prefix);
 processKey(p, "owner");
 processKey(p, "active");
 processKey(p, "memo");
 $result.show();
}

$('input[name=name]').keyup(processKeyPress);
$('input[name=password]').keyup(processKeyPress);
$('input[name=passwordConfirm]').keyup(processKeyPress);

$(".showpwdicon").click(function(){
 if ($(this).prev().attr('type') == "text") {
  $(this).prev().attr('type','password');
  $(this).addClass('glyphicon-eye-open')
  $(this).removeClass('glyphicon-eye-close')
 } else {
  $(this).prev().attr('type','text');
  $(this).addClass('glyphicon-eye-close')
  $(this).removeClass('glyphicon-eye-open')
 }
});

$("#printBtn").click(function() {
 $("#printpassword").hide();
 $("#printpassword").removeClass("visible-print-block");
 javascript:window.print();
 return false;
});

$("#printWithPWdBtn").click(function() {
 $("#printpassword").show();
 $("#printpassword").addClass("visible-print-block");
 window.print();
 return false;
});

/* Prevent IE/Edge
 ***********************/
function incompatibleBrowser() {
 alert("The browser you are using is not compatible with this webpage. Please get your self a real browser!");
}

if (/MSIE 7/i.test(navigator.userAgent) ||
    /MSIE 8/i.test(navigator.userAgent) ||
    /MSIE 9/i.test(navigator.userAgent) ||
    /MSIE 10/i.test(navigator.userAgent)
   ) {
   incompatibleBrowser();
}

if (/Edge\/\d./i.test(navigator.userAgent)){
   incompatibleBrowser();
}
