import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  //location: config.locationType,
  location: EmberCliFactoryGuyExampleENV.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cars', {path:'/'});
});

export default Router;
