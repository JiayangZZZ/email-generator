
var express = require('express')
  , http = require('http')
  , requirejs = require('requirejs');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
});

requirejs.config({
  baseUrl : __dirname,
  nodeRequire : require
});

var tmpl = requirejs('./build/tmpl');

var hero = require('./components/hero')
  , promos = require('./components/promos')
  , footerInfo = require('./components/footerInfo');

app.get('/', function(req, res) {
  res.send(tmpl.html({
    hero : tmpl.hero({ hero : hero}),
    promos : tmpl.promos({ promos : promos}),
    footer : tmpl.footer({ footerInfo : footerInfo})
  }))
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
})
