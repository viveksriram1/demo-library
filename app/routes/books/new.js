import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('book');
  },

  actions: {

    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
