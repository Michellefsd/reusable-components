"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useNavigation2 = _interopRequireDefault(require("../hooks/use-navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Route(_ref) {
  var path = _ref.path,
      children = _ref.children;

  var _useNavigation = (0, _useNavigation2["default"])(),
      currentPath = _useNavigation.currentPath;

  if (path === currentPath) {
    return children;
  }

  return null;
}

var _default = Route;
exports["default"] = _default;
//# sourceMappingURL=Route.dev.js.map
