'use strict';

var $ = jQuery;

var _init = {
  init: function(){
    _init.anyFunction();
  },
  anyFunction: function(){
    console.log('is ready!');
  }
};

$(document).ready(_init.init);