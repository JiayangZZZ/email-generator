
module.exports = function(locale) {
  var requirejs = require('requirejs')
    , gt = requirejs('./translations/output/' + locale + '.js');

  return [{
    title : gt('HERO_TITLE'),
    slogen : gt('HERO_SLOGEN'),
    background : 'http://static.p1.com/email/images/tantan-email-header.png',
    backgroundColor : '#f5f6f6'
  }];
};

