  import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('book');
  //   return [{
  //     title: "ruby on rails"
  //   },
  //   {
  //     title: "Ember"
  //   },
  //   {
  //     title: "Ruby"
  //   }
  // ]
  }
});
