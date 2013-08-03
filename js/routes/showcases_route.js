var Showcase = require('../models/showcase');

var ShowcaseRoute = Ember.Route.extend({

  model: function() {
    return Showcase.find();
  }

});

module.exports = ShowcaseRoute;

