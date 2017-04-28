import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  book_id: DS.attr('number'),
  book: DS.belongsTo('book'),

  isValid: Ember.computed.notEmpty('name'),
});
