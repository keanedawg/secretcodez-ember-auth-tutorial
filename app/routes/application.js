import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// app/routes/application.js

export default Ember.Route.extend(ApplicationRouteMixin);

//  actions: {
//    error: function(reason, transition) {
//      this.transitionTo('/login');
//      return false;
//    }
//  }

//}); 