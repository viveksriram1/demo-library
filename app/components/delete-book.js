import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteBook(model) {
      let confirmation = confirm('Are you sure did you collect this book ?');

      if (confirmation) {
        model.destroyRecord().then(() => this.get('router').transitionTo('books.index'));
      }
    },
  }
});
