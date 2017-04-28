import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  condition: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  issueDate: DS.attr('date'),
  person: DS.belongsTo('person'),
});
