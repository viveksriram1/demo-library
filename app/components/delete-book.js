import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteBook(book) {
      let confirmation = confirm('Are you sure want to delete this book ?');

      if (confirmation) {
        book.destroyRecord().then(() => this.get('router').transitionTo('books.index'));
      }
    },
  }
});
