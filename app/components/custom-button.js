import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBook(newBook) {
      newBook.set('isAvailable',  $('select').val());
      newBook.save().then(() => this.transitionTo('books'));
    }
  }
});
