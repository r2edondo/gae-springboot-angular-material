// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'app/AppController';
import Users from 'app/users/Users';

export default angular.module( 'starter-app', [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./content/img/avatars.svg", 128)
      .icon("menu", "./content/img/menu.svg", 24)
      .icon("share", "./content/img/share.svg", 24)
      .icon("google_plus", "./content/img/google_plus.svg", 24)
      .icon("hangouts", "./content/img/hangouts.svg", 24)
      .icon("twitter", "./content/img/twitter.svg", 24)
      .icon("phone", "./content/img/phone.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .controller('AppController', AppController);
