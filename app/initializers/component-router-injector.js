export default {
  initialize: function(application) {
    // Injects all Ember components with a router object:
    application.inject('component', 'router', 'router:main');
  }
};
