import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id),
      people: this.store.findAll('Person', 'name')
    });
  },

  /*showDialog() {
    this.get("dialog").alert("error-message");
  },*/

  actions: {
    addBookPerson() {
      model.set('person_name', selected);
    },
    addPersonToBook(model) {
      var person_name = $('md-autocomplete input').val();
      this.store.query('person', { orderBy: 'name', equalTo: person_name }).then(function(user){
        model.book.set('person', user);
        model.book.set('person_name', person_name);
        model.book.set('isAvailable', false);
        model.book.save();
      });
      this.transitionTo('books');
    }
  }
});
