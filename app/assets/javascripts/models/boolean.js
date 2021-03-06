(function ($, _, Backbone, models) {
  "use strict";

  models.Boolean = Backbone.Model.extend({
    initialize: function(options) {
      this.source         = options.source;
      this.http_proxy_url = options.http_proxy_url;
    },

    url: function() {
      var params = ['source=' + this.source];
      if (this.http_proxy_url) {
        params.push("http_proxy_url=" + this.http_proxy_url);
      }
      return "/api/boolean?" + params.join('&');
    }
  });

})($, _, Backbone, app.models);
