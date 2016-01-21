'use strict';
import domReady from 'vendor/domReady';
import $ from 'modules/jquery';

import global from 'global';

global.setAttr('load-state', 'loading');

domReady(function() {
  global.setAttr('load-state', 'loaded');

  $(document).on('loading', function(){
    global.setAttr('load-state', 'loading');
  });
  $(document).on('loaded', function(){
    global.setAttr('load-state', 'loaded');
  });
});
