import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  // 'contact' is the route, while 'getting-in-touch' is the relative path specified in the url
  this.route('contact', {path: '/getting-in-touch'});
  // ":rential_id" is a "dynamic segment"
  this.route('rental', { path: '/rentals/:rental_id' });
});
