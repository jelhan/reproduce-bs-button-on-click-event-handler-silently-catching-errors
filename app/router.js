import EmberRouter from '@ember/routing/router';
import config from 'reproduce-bs-button-on-click-event-handler-silently-catching-errors/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
