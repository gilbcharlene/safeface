import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('quiz');
  this.resource('home', {path: '/'});
  this.resource('about');
  this.route('logout');
  this.route('login');
  this.route('protected');
});

