var Showcase = DS.Model.extend({

  wine_id: DS.attr('integer'),

  name: DS.attr('string'),

  published: DS.attr('boolean'),

  version: DS.attr('datetime')

});

module.exports = Showcase;

