  'use strict';

  // 3rd Party Resources
  const express = require('express');

  const notFoundHandler = require('./errorHandlers/404.js');
  const errorHandler = require('./errorHandlers/500.js');

  const signInRoute = require('./routes/signInRout.js');
  const signUpRoute = require('./routes/signUpRoute.js');

  // Prepare the express app
  const app = express();
  // Process JSON input and put the data on req.body
  app.use(express.json());

  // Process FORM intput and put the data on req.body
  app.use(express.urlencoded({ extended: true }));


  app.use(signInRoute);
  app.use(signUpRoute);








  app.use(errorHandler);
  app.use("*", notFoundHandler);

  function start(port) {
      app.listen(port, () => console.log('Listening on' + port));
  }



  module.exports = {
      start,
      app: app
  }