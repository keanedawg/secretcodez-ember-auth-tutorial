import Ember from 'ember';
// app/routes/secret.js

export default Ember.Route.extend({
  model() {
    return this.store.findAll('code');
  }
});
