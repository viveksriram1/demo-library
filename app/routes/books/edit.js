import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findRecord('book', params.book_id);
  },

  actions: {
    saveBook(newBook) {
      newBook.set('isAvailable',  $('select').val());
      newBook.save().then(() => this.transitionTo('books'));
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
