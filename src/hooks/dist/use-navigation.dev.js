"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _navigation = _interopRequireDefault(require("../context/navigation"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useNavigation() {
  return (0, _react.useContext)(_navigation["default"]);
}

var _default = useNavigation;
exports["default"] = _default;
//# sourceMappingURL=use-navigation.dev.js.map
