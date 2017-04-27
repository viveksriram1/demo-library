import Ember from 'ember';

export default Ember.Component.extend({
  isThumb: true,

  actions: {
    changeView() {
      if (this.get('isThumb')) {
        this.set('isThumb', false);
        this.get('router').transitionTo('books.listview');
      } else {
        this.set('isThumb', true);
        this.get('router').transitionTo('books.index');
      }
    }
  }
});
