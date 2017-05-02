import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'

// app/adapter/application.js

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:application',

  authManager: Ember.inject.service(),

//  headers: Ember.computed('authManager.accessToken', function() {
//    return {
//      "Authorization": `Bearer ${this.get("authManager.accessToken")}`
//    };
//  })

});
