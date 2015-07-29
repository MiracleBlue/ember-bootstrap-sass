/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-bootstrap-sass',
  included: function(app) {
    this._super.included(app);

    app.import("bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss");
  }
};
