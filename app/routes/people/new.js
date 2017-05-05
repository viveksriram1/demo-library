import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('person');
  },

  actions: {
    savePerson(newPerson) {
      newPerson.save().then(() => this.transitionTo('people'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
