(function() {

  'use strict';

  var express = require('express');
  var path = require('path');
  var fs = require('fs');
  var morgan = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var multer = require('multer');
  var session = require('express-session');
  var RedisStore = require('connect-redis')(session);
  var mongoose = require('mongoose');
  var passport = require('passport');
  var config = require('config');

  var fbAuth = require('./app/middleware/authentication');

  var authRouter = require('./app/routers/authRouter');
  var userRouter = require('./app/routers/userRouter');
  var algRouter = require('./app/routers/algRouter');

  var app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(multer());
  app.use(cookieParser());
  app.use(session({
    store: new RedisStore({
      host: config.get('redisStore.host'),
      port: config.get('redisStore.port'),
      pass: config.get('redisStore.pass')
    }),
    secret: config.get('express.session.secret'),
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/dist', express.static(__dirname + '/dist'));

  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/algs', algRouter);

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  mongoose.connect(config.get('mongo.connectionString'));

  app.get('/', function(req, res) {
    res.sendfile('./dist/cubAlgs.html');
  });

  app.listen(config.get('node.port'), config.get('node.ip'));

})();
