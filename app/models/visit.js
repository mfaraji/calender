// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.Visit = (function(_super) {

    __extends(Visit, _super);

    function Visit() {
      return Visit.__super__.constructor.apply(this, arguments);
    }

    Visit.prototype.url = function() {
      return "/scheduled_calls/" + (this.get('id')) + ".json";
    };

    Visit.prototype.initialize = function() {
      return this.setExtendedAttributes();
    };

    Visit.prototype.setExtendedAttributes = function() {
      this.set({
        date: moment(this.get('date'))
      });
      this.set({
        humanDate: moment(this.get('date')).format("MMM D YYYY")
      });
      this.set({
        relativeDate: this.get('date').calendar()
      });
      this.set({
        mStartTime: moment(this.get('start_time'))
      });
      this.set({
        mEndTime: moment(this.get('end_time'))
      });
      this.set({
        startTime: moment(this.get('start_time')).format('h:mm a')
      });
      this.set({
        endTime: moment(this.get('end_time')).format('h:mm a')
      });
      return this.set({
        duration: moment.duration(this.get('duration'), 'minutes').humanize()
      });
    };

    Visit.prototype.updateAttributes = function(new_attrs) {
      var _this = this;
      return _.each(new_attrs, function(value, key) {
        return _this.set(key, value);
      });
    };

    Visit.prototype.isHomeVisit = function() {
      return this.isHomeVisit = this.get("is_home_visit") === true;
    };

    Visit.prototype.isCompleted = function() {
      return this.get("completed") === true;
    };

    Visit.prototype.toCalendar = function() {
      return {
        id: this.cid,
        title: this.get('location').name,
        start: this.get('mStartTime').unix().toString(),
        end: this.get('mEndTime').unix().toString(),
        allDay: false
      };
    };

    Visit.prototype.startTimeAsHours = function() {
      return moment(this.get("start_time")).hours();
    };

    return Visit;

  })(Backbone.Model);

}).call(this);
