import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('listview');
    this.route('new');
    this.route('edit', {path: '/:book_id/edit'});
    this.route('show', {path: '/:book_id/show'});
  });

  this.route('people', function() {
    this.route('new');
    this.route('edit', {path: '/:person_id/edit'});
  });
  this.route('issue', function() {
    this.route('add',{path: '/:book_id/add'});
    this.route('remove',{path: '/:book_id/remove'});
  });
});

export default Router;
