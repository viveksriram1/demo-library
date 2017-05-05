import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('person', params.person_id);
  },

  actions: {
    savePerson(newPerson) {
      newPerson.save().then(() => this.transitionTo('people'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes havn't saved yet. Would you like to leave this form?");

        if(confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
