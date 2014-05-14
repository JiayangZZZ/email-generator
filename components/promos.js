
module.exports = function(locale) {
  var requirejs = require('requirejs')
    , gt = requirejs('./translations/output/' + locale + '.js');

  return [{
    title : gt('INVITATION_PROMO_TITLE_1'),
    description : gt('INVITATION_PROMO_DESCRIPTION_1'),
    icon : 'http://static.p1.com/email/images/icon-location.png'
  }, {
    title : gt('INVITATION_PROMO_TITLE_2'),
    description : gt('INVITATION_PROMO_DESCRIPTION_2'),
    icon : 'http://static.p1.com/email/images/icon-flip.png'
  }, {
    title : gt('INVITATION_PROMO_TITLE_3'),
    description : gt('INVITATION_PROMO_DESCRIPTION_3'),
    icon : 'http://static.p1.com/email/images/icon-chat.png'
  }];
}
