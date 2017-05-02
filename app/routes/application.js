import Ember from 'ember';

// app/routes/application.js

export default Ember.Route.extend({

  actions: {
    error: function(reason, transition) {
      this.transitionTo('/login');
      return false;
    }
  }

});