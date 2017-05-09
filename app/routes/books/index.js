import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book', {include: 'people'});
  },

  actions: {
    collectBook(model) {
      let confirmation = confirm('Are you sure want to delete this book ?');
      if(confirmation) {
        model.set('person_name', '');
        model.set('isAvailable', true);
        model.save;
      }
    }
  }
});
