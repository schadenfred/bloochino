var showcase = require('../models/showcase');

var NewShowcaseRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_showcase', {controller: 'new_showcase'});
  },

  model: function() {
    return showcase.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewShowcaseRoute;

