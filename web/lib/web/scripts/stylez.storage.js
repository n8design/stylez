function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _CONSTANTS = require('./stylez.constants');

var STORAGE = 'stylez';

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {
    _classCallCheck(this, SessionStorage);
  }

  _createClass(SessionStorage, null, [{
    key: "_returnDefault",
    value: function _returnDefault() {
      return {
        category: 'atoms',
        deviceSize: 'full',
        index: null,
        maxIndex: null,
        title: null
      };
    }
  }, {
    key: "_getSelectedCategory",
    value: function _getSelectedCategory() {
      var curSelected = document.querySelector(_CONSTANTS.dmAtomicFilter + '.selected');

      if (curSelected !== null && curSelected.dataset !== null && curSelected.dataset.filter !== null) {
        return curSelected.dataset.filter !== null ? curSelected.dataset.filter : 'atoms';
      } else {
        return 'atoms';
      }
    }
  }, {
    key: "_getSelectedDeviceSize",
    value: function _getSelectedDeviceSize() {
      var curSelected = document.querySelector(_CONSTANTS.dmDeviceTypes + '.selected');

      if (curSelected !== null && curSelected.dataset !== null && curSelected.dataset.size !== null) {
        return curSelected.dataset.size !== null ? curSelected.dataset.size : 'full';
        ;
      } else {
        return 'full';
      }
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(updates) {
      if (updates === undefined) {
        var defaultSession = this._returnDefault();

        var stylezSession = sessionStorage.getItem(STORAGE);

        if (stylezSession === undefined || stylezSession === null) {
          this._getSelectedCategory();

          this._getSelectedDeviceSize();

          sessionStorage.setItem(STORAGE, JSON.stringify(defaultSession));
        } else {
          var newStatus = JSON.parse(stylezSession);
          newStatus.category = this._getSelectedCategory();
          newStatus.deviceSize = this._getSelectedDeviceSize(); // newStatus.index = null;

          this._getSelectedCategory();

          this._getSelectedDeviceSize();

          sessionStorage.setItem(STORAGE, JSON.stringify(newStatus));
        }
      } else {
        sessionStorage.setItem(STORAGE, JSON.stringify(updates));
      }
    }
  }, {
    key: "setCurrentFilter",
    value: function setCurrentFilter() {
      var curStatus = sessionStorage.getItem(STORAGE) !== null ? JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();
      var categoryFilter = document.querySelector("button[data-filter=\"".concat(curStatus.category, "\"]"));

      if (categoryFilter !== null && categoryFilter !== undefined) {
        categoryFilter.classList.add('selected');
        categoryFilter.click();
      }

      var deviceFilter = document.querySelector("button[data-size=\"".concat(curStatus.deviceSize, "\"]"));

      if (deviceFilter !== null && deviceFilter !== undefined) {
        deviceFilter.classList.add('selected');
        deviceFilter.click();
      }

      var currentPatternTitle = document.querySelector('.a-filtername');

      if (curStatus.title !== null) {
        currentPatternTitle.textContent = curStatus.title;
      } else {
        currentPatternTitle.textContent = ' ';
        var itemSlider = document.querySelector('.m-itemslider');

        if (itemSlider !== null) {
          if (curStatus.maxIndex !== null) {
            itemSlider.classList.add('show');
          }
        }
      }
    }
  }, {
    key: "getCurrentFilter",
    value: function getCurrentFilter() {
      var curStatus = sessionStorage.getItem(STORAGE) !== null ? JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();
      return curStatus;
    }
  }]);

  return SessionStorage;
}();

module.exports = SessionStorage;
//# sourceMappingURL=stylez.storage.js.map
