module.exports = {
  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('bootstrap-sass', '3.3.5');
  },

  normalizeEntityName: function() {}
};
