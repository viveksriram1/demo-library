import Ember from 'ember';

export default Ember.Route.extend({

  model(book) {
    return this.store.findRecord('book', params.book_id);
  }
});
