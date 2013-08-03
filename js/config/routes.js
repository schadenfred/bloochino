var App = require('./app');

App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('showcases');
  this.resource('showcase', {path: '/showcases/:showcase_id'});
  this.route('edit_showcase', {path: '/showcases/:showcase_id/edit'});
  this.route('new_showcase', {path: '/showcases/new'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('people');
  this.resource('person', {path: '/people/:person_id'});
  this.route('edit_person', {path: '/people/:person_id/edit'});
  this.route('new_person', {path: '/people/new'});
  // end generated routes


});

