
var requirejs = require('requirejs')
  , gt = requirejs('./translations/output/zh.js');

var hero = [{
  title : gt('HERO_TITLE'),
  slogen : gt('HERO_SLOGEN'),
  background : '',
  backgroundColor : '#f5f6f6'
}];

module.exports = hero;

