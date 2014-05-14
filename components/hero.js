
module.exports = function(locale) {
  var requirejs = require('requirejs')
    , gt = requirejs('./translations/output/' + locale + '.js');

  return [{
    title : gt('HERO_TITLE'),
    slogen : gt('HERO_SLOGEN'),
    background : '',
    backgroundColor : '#f5f6f6'
  }];
};

