import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id),
      people: this.store.findAll('Person', 'name')
    });
  },

  actions: {
    addBookPerson() {

    },
    addPersonToBook(book,person) {
      this.transitionTo('books');
    }
  }
});
