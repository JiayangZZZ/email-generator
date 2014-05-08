define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['footer']=function anonymous(it) {
var out='<tr><td style="font-size: 10px; font-weight: 100; color: #878787;"><table><tr><td style="padding-right: 40px;"><p style="color: #a6a6a6; display: inline; font-size: 10px; font-family: \'Helvetica Neue\', arial, \'Hiragino Sans GB\', \'Microsoft Yahei\', sans-serif; padding-bottom: 20px;">'+(footerInfo.copyright)+'</p></td></tr></table><table><tr><td style="padding-right: 40px; margin-bottom: 30px;"><a href="mailto:'+(footerInfo.emailAddress)+'" style="font-size: 10px; font-weight: 100; color:#6699cc; text-decoration: none; font-family: \'Helvetica Neue\', arial, \'Hiragino Sans GB\', \'Microsoft Yahei\', sans-serif;">'+(footerInfo.emailName)+'</a></td></tr></table></td></tr>';return out;
};
  tmpl['hero']=function anonymous(it) {
var out='header.dot';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body style="position: relative; font-family:\'Helvetica Neue\', arial, \'Hiragino Sans GB\', \'Microsoft Yahei\', sans-serif;" dir="ltr"><table width="600" align="center"><tr><td style="text-align: center; padding: 5px 0px 5px;"><span style="color: #999999; font-size: 10px; font-family: \'Helvetica Neue\', arial, \'Hiragino Sans GB\', \'Microsoft Yahei\', sans-serif;"></span></td></tr><tr>'+(it.hero)+(it.promos)+(it.footer)+'</tr></table></body></html>';return out;
};
  tmpl['promos']=function anonymous(it) {
var out='promos.dot';return out;
};
return tmpl;});
