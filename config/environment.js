/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ama',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

firebase: {
   apiKey: "AIzaSyBkkeFfJ4Y7Lqd02s0dw7h0GyKd21QisBM",
   authDomain: "ask-me-anything-4e770.firebaseapp.com",
   databaseURL: "https://ask-me-anything-4e770.firebaseio.com",
   projectId: "ask-me-anything-4e770",
   storageBucket: "ask-me-anything-4e770.appspot.com",
   messagingSenderId: "479307157704"
 },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
