import DS from 'ember-data';

// app/adapter/application.js

export default DS.RESTAdapter.extend({
  namespace: 'api',

  authManager: Ember.inject.service(),

  headers: Ember.computed('authManager.accessToken', function() {
    return {
      "Authorization": `Bearer ${this.get("authManager.accessToken")}`
    };
  })

});
