import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('software');
  this.route('business');
  this.route('service-management');
  this.route('werkveld', function() {
    this.route('moneybird');
    this.route('thales');
  });
});

export default Router;
