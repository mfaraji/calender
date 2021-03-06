// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.VisitListView = (function(_super) {

    __extends(VisitListView, _super);

    function VisitListView() {
      return VisitListView.__super__.constructor.apply(this, arguments);
    }

    VisitListView.prototype.el = '#visit_list';

    VisitListView.prototype.render = function() {
      var _this = this;
      _.each(this.collection.models, function(visit) {
        var visit_view;
        visit_view = new App.Views.VisitDetailView({
          model: visit
        });
        visit_view.render();
        return _this.$el.append(visit_view.el);
      });
      return this;
    };

    return VisitListView;

  })(Backbone.View);

}).call(this);
