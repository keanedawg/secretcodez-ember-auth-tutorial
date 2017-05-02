import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// app/routes/secret.js

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('code');
  }
});
