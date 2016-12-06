(function(window) {

  'use strict';

  // Extend Object helper function
  function extend(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key))
        a[key] = b[key];
    }
    return a;
  }

  // Each helper function
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  // Mobile menu constructor
  function Mobile_menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  // Mobile menu options
  // Mobile_menu.prototype.options = {
  //   wrapper: '#container',          // The content wrapper
  //   type: '#mobile-menu',             // The menu type
  //   menuOpenerClass: '.mobile-menu-open-button',   // The menu opener class names (i.e. the buttons)
  //   maskId: '#mobile-menu-background'               // The ID of the mask
  // };

  // Initialization of the mobile menu
  Mobile_menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector(this.options.type);
    this.closeBtn = this.menu.querySelector('.mobile-menu-close-button');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  // Initialization of the events
  Mobile_menu.prototype._initEvents = function() {
    // Click on the close button inside the menu.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Click on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  // Open the mobile menu
  Mobile_menu.prototype.open = function() {
    this.body.classList.add('mobile-menu-toggled');
    this.wrapper.classList.add(this.options.type + 'toggled');
    this.menu.classList.add('toggled');
    this.mask.classList.add('toggled');
    this.disableMenuOpeners();
  };

  // Close the mobile menu
  Mobile_menu.prototype.close = function() {
    this.body.classList.remove('mobile-menu-toggled');
    this.wrapper.classList.remove(this.options.type + 'toggled');
    this.menu.classList.remove('toggled');
    this.mask.classList.remove('toggled');
    this.enableMenuOpeners();
  };

  // Enable mobile menu openers
  Mobile_menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  // Disable mobile menu openers
  Mobile_menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

   // Global namespace.
  window.Mobile_menu = Mobile_menu;

})(window);
