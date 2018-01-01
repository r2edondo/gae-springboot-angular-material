// Load the custom app ES6 modules

import UsersDataService from 'app/users/services/UsersDataService';

import UsersList from 'app/users/components/list/UsersList';
import UserDetails from 'app/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .component(UsersList.name, UsersList.config)
  .component(UserDetails.name, UserDetails.config)

  .service("UsersDataService", UsersDataService);
