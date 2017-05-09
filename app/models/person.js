import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  book: DS.belongsTo('book',{ async: true }),

  isValid: Ember.computed.notEmpty('name'),
});
