import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addPersonToBook(model) {
      model.set('person_name', '');
      model.set('isAvailable', true);
    }
  }
});
