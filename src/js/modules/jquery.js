'use strict';
import jquery from 'vendor/jquery'; //eslint-disable-line no-unused-vars

(function(old) {
  $.fn.attr = function() { //eslint-disable-line
    if(arguments.length === 0) {
      if(this.length === 0) {
        return null;
      }

      var obj = {};
      $.each(this[0].attributes, function() { //eslint-disable-line
        if(this.specified) {
          obj[this.name] = this.value;
        }
      });
      return obj;
    }

    return old.apply(this, arguments);
  };
})($.fn.attr); //eslint-disable-line

export default $; //eslint-disable-line
