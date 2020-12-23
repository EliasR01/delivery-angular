function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  query getUserById($data: UserWhereUniqueData!) {\n    getUserById(data: $data) {\n      _id\n      username\n      name\n      email\n      address\n      type\n      country\n      fileUrl\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  query getTypeOfService {\n    getTypeOfService {\n      name\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  query getServiceByType($type: String!) {\n    getServiceByType(type: $type) {\n      _id\n      name\n      description\n      user\n      type\n      products\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  query getServiceByUser($userID: String!) {\n    getServiceByUser(userID: $userID) {\n      _id\n      name\n      description\n      user\n      type\n      products\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  query getProducts($products: ProductWhereUniqueData!) {\n    getProductsById(data: $products) {\n      _id\n      name\n      description\n      stock\n      price\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  query getOrdersByUser($userID: String!) {\n    getOrdersByUser(userID: $userID) {\n      _id\n      address\n      emited\n      service\n      price\n      status\n      products\n      user\n      business\n      # fileUrl\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  mutation updateUser(\n    $where: UserWhereUniqueData!\n    $userData: UserData!\n    $currentPassword: String!\n  ) {\n    updateUser(\n      where: $where\n      userData: $userData\n      currentPassword: $currentPassword\n    ) {\n      _id\n      name\n      username\n      email\n      password\n      type\n      address\n      country\n      fileUrl\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  mutation updateProduct($productData: ProductData!) {\n    updateProduct(productData: $productData)\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  mutation updateOrder($where: OrderWhereUniqueData!, $orderData: OrderData!) {\n    updateOrder(where: $where, orderData: $orderData) {\n      _id\n      emited\n      status\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  mutation resetPassword($token: String!) {\n    resetPassword(token: $token)\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation requestReset($email: String!) {\n    requestReset(email: $email) {\n      user {\n        _id\n        name\n        username\n        password\n        address\n        email\n        type\n        country\n        fileUrl\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation logout {\n    logout\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      accessToken\n      user {\n        _id\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation deleteProduct(\n    $data: ProductWhereUniqueData!\n    $service: ProductWhereServiceData!\n  ) {\n    deleteProduct(where: $data, service: $service)\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation createUser($userData: UserData!) {\n    createUser(userData: $userData) {\n      _id\n      name\n      username\n      email\n      password\n      type\n      address\n      country\n      fileUrl\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation createService($serviceData: ServiceData!) {\n    createService(serviceData: $serviceData) {\n      _id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation createProduct($productData: ProductData!) {\n    createProduct(productData: $productData) {\n      _id\n      name\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createOrder($orderData: OrderData!) {\n    createOrder(orderData: $orderData) {\n      _id\n      emited\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/add-service/add-service.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-service/add-service.component.ts ***!
    \******************************************************/

  /*! exports provided: AddServiceComponent */

  /***/
  function srcAppAddServiceAddServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function () {
      return AddServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_createService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mutations/createService */
    "./src/app/mutations/createService.ts");
    /* harmony import */


    var _queries_getProductsById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../queries/getProductsById */
    "./src/app/queries/getProductsById.ts");
    /* harmony import */


    var _mutations_deleteProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mutations/deleteProduct */
    "./src/app/mutations/deleteProduct.ts");
    /* harmony import */


    var _mutations_createProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../mutations/createProduct */
    "./src/app/mutations/createProduct.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _queries_getTypeServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../queries/getTypeServices */
    "./src/app/queries/getTypeServices.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var _c0 = ["autosize"];

    function AddServiceComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 18);
      }
    }

    function AddServiceComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", service_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r4.name, " ");
      }
    }

    function AddServiceComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddServiceComponent_div_51_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var product_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.removeProduct(product_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Stock:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r5 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.stock, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.description, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.description, " ");
      }
    }

    var AddServiceComponent = /*#__PURE__*/function () {
      function AddServiceComponent(service, apollo, dialog, location, detector, router) {
        _classCallCheck(this, AddServiceComponent);

        this.service = service;
        this.apollo = apollo;
        this.dialog = dialog;
        this.location = location;
        this.detector = detector;
        this.router = router;
        this.isEditingService = false;
        this.isProductDeleted = false;
        this.isProductAdded = false;
        this.products = [];
        this.deletedProducts = [];
        this.addedProducts = [];
        this.loading = false;
        this.serviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.isButtonEnabled = false;
        this.isProductEnabled = this.serviceForm.valid;
        this.description = 'Description';
      }

      _createClass(AddServiceComponent, [{
        key: "toggleDescription",
        value: function toggleDescription() {
          if (this.serviceForm.value.type === 'Food') {
            this.description = 'Ingredients';
          } else {
            this.description = 'Description';
          }
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          var _this = this;

          if (this.products.find(function (element) {
            return element.name === _this.productForm.value.name;
          }) === undefined) {
            if (this.productForm.value.stock > 0 && this.productForm.value.price > 0 && this.productForm.value.name != '' && this.productForm.value.description != '') {
              if (!this.isProductDeleted) {
                if (this.isEditingService) {
                  this.isProductAdded = true;
                  var createProductData = Object.assign(Object.assign({}, this.productForm.value), {
                    service: this.service.editableService._id
                  });
                  this.addedProducts.push(createProductData);
                }

                this.products.push(this.productForm.value);
                this.resetForm('ProductForm');
                this.isButtonEnabled = true;
              } else {
                this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
                  data: 'Can only perform 1 operation when editing service, either Add or Delete a product!'
                });
              }
            } else {
              this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
                data: 'Must complete the form before adding a product!'
              });
            }
          } else {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'That name of product has been already added!'
            });
          }
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(value) {
          if (!this.isProductAdded) {
            var index = this.products.indexOf(value);

            if (this.isEditingService) {
              this.isButtonEnabled = true;
              this.isProductDeleted = true;
              this.deletedProducts.push(this.products[index]);
            }

            this.products.splice(index, 1);

            if (this.products.length == 0) {
              this.isButtonEnabled = false;
            }
          } else {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Can only perform 1 operation when editing service, either Add or Delete a product!'
            });
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.isEditingService) {
            if (this.isProductAdded) {
              this.createProduct();
            } else if (this.isProductDeleted) {
              this.deleteProduct();
            }
          } else {
            this.createService();
          }
        }
      }, {
        key: "createService",
        value: function createService() {
          var _this2 = this;

          var serviceData = Object.assign(Object.assign({}, this.serviceForm.value), {
            user: this.service.userData._id
          });
          var createServiceData = Object.assign(Object.assign({}, serviceData), {
            products: this.products
          });
          this.apollo.mutate({
            mutation: _mutations_createService__WEBPACK_IMPORTED_MODULE_2__["CREATE_SERVICE"],
            variables: {
              serviceData: createServiceData
            }
          }).subscribe(function () {
            _this2.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Service successfully created!'
            });

            _this2.resetForm('ProductForm');

            _this2.resetForm('ServiceForm');

            _this2.products = [];
          });
        }
      }, {
        key: "createProduct",
        value: function createProduct() {
          var _this3 = this;

          //Adds new product when the service is edited
          console.log(this.addedProducts);
          this.loading = true;
          this.apollo.mutate({
            mutation: _mutations_createProduct__WEBPACK_IMPORTED_MODULE_5__["CREATE_PRODUCT"],
            variables: {
              productData: {
                products: this.addedProducts
              }
            }
          }).toPromise().then(function () {
            _this3.loading = false;

            _this3.router.navigate(['dashboard/summary']);

            _this3.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Product added successfully'
            });
          })["catch"](function () {
            _this3.loading = false;

            _this3.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Something went wrong, please contact the support team'
            });
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this4 = this;

          //Remove the product when the service is edited
          this.loading = true;
          var products = this.deletedProducts.map(function (value) {
            return value._id;
          });
          this.apollo.mutate({
            mutation: _mutations_deleteProduct__WEBPACK_IMPORTED_MODULE_4__["DELETE_PRODUCT"],
            variables: {
              data: {
                _id: products
              },
              service: {
                service: this.service.editableService._id
              }
            }
          }).toPromise().then(function () {
            _this4.loading = false;

            _this4.router.navigate(['dashboard/summary']);

            _this4.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Product deleted successfully'
            });
          })["catch"](function () {
            _this4.loading = false;

            _this4.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'Something went wrong, please contact the support team'
            });
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form === 'ProductForm') {
            this.productForm.controls['name'].setValue('');
            this.productForm.controls['stock'].setValue(0);
            this.productForm.controls['price'].setValue(0.0);
            this.productForm.controls['description'].setValue('');
          } else if (form === 'ServiceForm') {
            this.serviceForm.reset();
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loading = true;
          this.apollo.query({
            query: _queries_getTypeServices__WEBPACK_IMPORTED_MODULE_7__["GET_TYPE_SERVICE"]
          }).toPromise().then(function (res) {
            _this5.typeServices = res.data.getTypeOfService;
            _this5.loading = false;
          })["catch"](function () {
            _this5.loading = false;

            _this5.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: ''
            });
          });

          if (this.service.editableService) {
            this.loading = true;
            this.isEditingService = true;
            this.serviceForm.controls['type'].setValue(this.service.editableService.type);

            if (this.serviceForm.value.type === 'Food') {
              this.description = 'Ingredients';
            }

            this.serviceForm.controls['name'].setValue(this.service.editableService.name);
            this.serviceForm.controls['description'].setValue(this.service.editableService.description);
            this.apollo.query({
              query: _queries_getProductsById__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCTS_BY_IDS"],
              variables: {
                products: {
                  _id: this.service.editableService.products
                }
              }
            }).subscribe(function (response) {
              _this5.products = response.data.getProductsById;
              _this5.loading = false;

              _this5.detector.markForCheck();
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.service.editableService = null;
          this.isEditingService = false;
          this.isProductAdded = false;
          this.isProductEnabled = false;
          this.isProductDeleted = false;
          this.products = [];
          this.deletedProducts = [];
          this.addedProducts = [];
          this.loading = false;
          this.resetForm('ProductForm');
          this.resetForm('ServiceForm');
        }
      }]);

      return AddServiceComponent;
    }();

    AddServiceComponent.ɵfac = function AddServiceComponent_Factory(t) {
      return new (t || AddServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]));
    };

    AddServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddServiceComponent,
      selectors: [["app-add-service"]],
      viewQuery: function AddServiceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
        }
      },
      decls: 57,
      vars: 8,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "card-container"], [1, "service-card", 3, "formGroup"], ["formControlName", "type", 1, "form-select", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "name"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "4", "formControlName", "description"], ["autosize", "cdkTextareaAutosize"], [1, "product-card", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "number", "min", "0", "formControlName", "stock"], ["matInput", "", "type", "number", "min", "0", "step", "0.1", "formControlName", "price"], ["matInput", "", "formControlName", "description"], ["mat-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["itemSize", "50", 1, "products"], ["class", "virtual-scrollbar", 4, "ngFor", "ngForOf"], [1, "card-buttons-container"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mode", "indeterminate"], [3, "value"], [1, "virtual-scrollbar"], [3, "click"], [1, "product-label"]],
      template: function AddServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddServiceComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Type of Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Type of service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AddServiceComponent_Template_mat_select_selectionChange_12_listener() {
            return ctx.toggleDescription();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddServiceComponent_mat_option_13_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Service name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add Product for Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddServiceComponent_Template_form_ngSubmit_31_listener() {
            return ctx.addProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "cdk-virtual-scroll-viewport", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddServiceComponent_div_51_Template, 20, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddServiceComponent_Template_button_click_53_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddServiceComponent_Template_button_click_55_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.serviceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeServices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.serviceForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isButtonEnabled);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkFixedSizeVirtualScroll"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDivider"]],
      styles: [".card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100vw;\n}\n.card-container   [_nghost-%COMP%] {\n  height: 100%;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.card-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 5%;\n  width: 100vw;\n}\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 50px;\n}\n.product-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 80%;\n  margin: auto;\n}\n.products[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 90%;\n  height: 60%;\n}\n.virtual-scrollbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n}\n.product-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.product-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-header.mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-header.mat-card-header[_ngcontent-%COMP%]   mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  color: #039ccf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvYWRkLXNlcnZpY2UvYWRkLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0VGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FER0U7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURJQTtFQUNFLGtCQUFBO0FDREY7QURLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7QURHSTtFQUNFLGNBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLnNlcnZpY2UtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uY2FyZC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNTBweDtcblxuICBidXR0b24ge1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucHJvZHVjdHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnZpcnR1YWwtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnByb2R1Y3QtbGFiZWwge1xuICBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxubWF0LWNhcmQubWF0LWNhcmQge1xuICBtYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6IHJnYigzLCAxNTYsIDIwNyk7XG4gICAgfVxuICB9XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuLmNhcmQtY29udGFpbmVyIDpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VydmljZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5jYXJkLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuLnByb2R1Y3QtY2FyZCBidXR0b24ge1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZHVjdHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnZpcnR1YWwtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnByb2R1Y3QtbGFiZWwgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucHJvZHVjdC1sYWJlbCBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbm1hdC1jYXJkLm1hdC1jYXJkIG1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm1hdC1jYXJkLm1hdC1jYXJkIG1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzAzOWNjZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-service',
          templateUrl: './add-service.component.html',
          styleUrls: ['./add-service.component.scss']
        }]
      }], function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }];
      }, {
        autosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['autosize']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/summary/summary.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-service/add-service.component */
    "./src/app/add-service/add-service.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'forgot',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
      children: [{
        path: 'profile',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
      }, {
        path: 'summary',
        component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"]
      }, {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"]
      }, {
        path: 'service',
        component: _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__["AddServiceComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'delivery-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/summary/summary.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-service/add-service.component */
    "./src/app/add-service/add-service.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _take_order_take_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./take-order/take-order.component */
    "./src/app/take-order/take-order.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./bill/bill.component */
    "./src/app/bill/bill.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./order-dialog/order-dialog.component */
    "./src/app/order-dialog/order-dialog.component.ts");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/line-chart/line-chart.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts"); //Components
    //Others
    //Angular Material Components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["BUCKET"],
        useValue: 'delivery-app-73352.appspot.com'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["TextFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__["MatProgressBarModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_18__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebaseConfig, 'cloud')]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"], _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_10__["AddServiceComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _take_order_take_order_component__WEBPACK_IMPORTED_MODULE_12__["TakeOrderComponent"], _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_38__["OrderDialogComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_39__["LineChartComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_14__["BillComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_41__["ForgotPasswordComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["TextFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__["MatProgressBarModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_18__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"], _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_10__["AddServiceComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _take_order_take_order_component__WEBPACK_IMPORTED_MODULE_12__["TakeOrderComponent"], _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_38__["OrderDialogComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_39__["LineChartComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_14__["BillComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_41__["ForgotPasswordComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["TextFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__["MatProgressBarModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_18__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebaseConfig, 'cloud')],
          providers: [{
            provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["BUCKET"],
            useValue: 'delivery-app-73352.appspot.com'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bill/bill.component.ts":
  /*!****************************************!*\
    !*** ./src/app/bill/bill.component.ts ***!
    \****************************************/

  /*! exports provided: BillComponent */

  /***/
  function srcAppBillBillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillComponent", function () {
      return BillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var _c0 = ["template"];

    function BillComponent_mat_progress_bar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 17);
      }
    }

    function BillComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BillComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.description);
      }
    }

    function BillComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BillComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13.amount);
      }
    }

    function BillComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unit Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BillComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.unitPrice);
      }
    }

    function BillComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BillComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.total);
      }
    }

    function BillComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function BillComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    var BillComponent = /*#__PURE__*/function () {
      function BillComponent() {
        _classCallCheck(this, BillComponent);

        this.submitBill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleBill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['Description', 'Amount', 'Unit Price', 'Total'];
        this.dataSource = [];
        this.date = new Date().toLocaleDateString();
      }

      _createClass(BillComponent, [{
        key: "submit",
        value: function submit() {
          this.submitBill.emit();
        }
      }, {
        key: "back",
        value: function back() {
          this.toggleBill.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.products.forEach(function (element) {
            _this6.dataSource.push({
              description: element.description,
              amount: element.amount,
              unitPrice: element.price,
              total: Number((element.amount * element.price).toFixed(2))
            });
          });
          this.dataSource.push({
            description: 'Total',
            total: this.total
          });
        }
      }]);

      return BillComponent;
    }();

    BillComponent.ɵfac = function BillComponent_Factory(t) {
      return new (t || BillComponent)();
    };

    BillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BillComponent,
      selectors: [["app-bill"]],
      viewQuery: function BillComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        products: "products",
        client: "client",
        sender: "sender",
        total: "total",
        loading: "loading"
      },
      outputs: {
        submitBill: "submitBill",
        toggleBill: "toggleBill"
      },
      decls: 45,
      vars: 7,
      consts: [["id", "bill"], ["template", ""], ["mode", "indeterminate", 4, "ngIf"], [1, "bill-title"], [1, "bill-user-information"], ["mat-table", "", 1, "bill-summary", 3, "dataSource"], ["matColumnDef", "Description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Amount"], ["matColumnDef", "Unit Price"], ["matColumnDef", "Total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "bill-footer"], [1, "bill-button"], ["mat-button", "", "color", "primary", 3, "click"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function BillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillComponent_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bill Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Emitted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BillComponent_th_24_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BillComponent_td_25_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BillComponent_th_27_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BillComponent_td_28_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BillComponent_th_30_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BillComponent_td_31_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BillComponent_th_33_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BillComponent_td_34_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BillComponent_tr_35_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BillComponent_tr_36_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Thanks for your bought!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillComponent_Template_button_click_41_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillComponent_Template_button_click_43_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: ["#bill[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.bill-title[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bill-user-information[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 20px;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.bill-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: center;\n}\n\n.bill-summary[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bill-button[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvYmlsbC9iaWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaWxsL2JpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYmlsbC9iaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JpbGwge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iaWxsLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsbC11c2VyLWluZm9ybWF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsbC1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iaWxsLXN1bW1hcnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJpbGwtYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIiNiaWxsIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmlsbC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGwtdXNlci1pbmZvcm1hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpbGwtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmlsbC1zdW1tYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaWxsLWJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bill',
          templateUrl: './bill.component.html',
          styleUrls: ['./bill.component.scss']
        }]
      }], function () {
        return [];
      }, {
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        client: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitBill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        toggleBill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['template']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard.service.ts":
  /*!**************************************!*\
    !*** ./src/app/dashboard.service.ts ***!
    \**************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! emailjs-com */
    "./node_modules/emailjs-com/source/index.js");
    /* harmony import */


    var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(storage) {
        _classCallCheck(this, DashboardService);

        this.storage = storage;
      }

      _createClass(DashboardService, [{
        key: "uploadFile",
        value: function uploadFile(file, username) {
          var filePath;
          filePath = "/ProfileImages/".concat(username, "-").concat(new Date().toISOString());
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload(filePath, file);
          var url = task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return fileRef.getDownloadURL().subscribe(function (fileUrl) {
              return fileUrl;
            });
          }));
          return url;
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(templateParams) {
          emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.send('delivery-app-service', 'template_smXCjRxC', templateParams, 'user_eJv2ZcvYpPAAY03vAk0sV');
        }
      }, {
        key: "removeFile",
        value: function removeFile(fileUrl) {
          this.storage.storage.refFromURL(fileUrl)["delete"]();
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mutations_logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mutations/logout */
    "./src/app/mutations/logout.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");
    /* harmony import */


    var _queries_getUserById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../queries/getUserById */
    "./src/app/queries/getUserById.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    function DashboardComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
      }
    }

    function DashboardComponent_div_1_mat_progress_bar_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
      }
    }

    function DashboardComponent_div_1_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_1_a_10_Template_a_click_0_listener() {
          var item_r5 = ctx.$implicit;
          return item_r5.action();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r5.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.displayName);
      }
    }

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_mat_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return _r3.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_1_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_1_a_10_Template, 2, 2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navItems);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(apollo, router, service, dialog, detector) {
        _classCallCheck(this, DashboardComponent);

        this.apollo = apollo;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.detector = detector;
        this.clicked = false;
        this.loading = false;
      }

      _createClass(DashboardComponent, [{
        key: "queryUserData",
        value: function queryUserData(userId) {
          var _this7 = this;

          this.loading = true;
          this.apollo.query({
            query: _queries_getUserById__WEBPACK_IMPORTED_MODULE_3__["GET_USER_BY_ID"],
            variables: {
              data: {
                _id: userId
              }
            }
          }).toPromise().then(function (response) {
            _this7.service.userData = response.data.getUserById;

            _this7.setRoutes();

            _this7.detector.markForCheck();

            _this7.loading = false;
          })["catch"](function () {
            _this7.message = 'Something went wrong, please contact the support team';

            _this7.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
              data: _this7.message
            });
          });
        }
      }, {
        key: "setRoutes",
        value: function setRoutes() {
          this.route = this.service.userData.type === 'customer' ? {
            name: 'New Order',
            route: 'order'
          } : {
            name: 'New Service',
            route: 'service'
          };
          this.navItems = [{
            displayName: 'Profile',
            iconName: 'recent_actors',
            route: 'profile',
            action: this.nothing.bind(this)
          }, {
            displayName: 'Summary',
            iconName: 'some',
            route: 'summary',
            action: this.nothing.bind(this)
          }, {
            displayName: this.route.name,
            iconName: 'some-icon',
            route: this.route.route,
            action: this.nothing.bind(this)
          }, {
            displayName: 'Logout',
            iconName: 'logout',
            route: null,
            action: this.logout.bind(this)
          }];
        }
      }, {
        key: "nothing",
        value: function nothing() {
          null;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this8 = this;

          this.apollo.mutate({
            mutation: _mutations_logout__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]
          }).toPromise().then(function (res) {
            if (res) {
              _this8.router.navigate(['login']);
            } else {
              _this8.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                data: 'Error loging out'
              });
            }
          })["catch"](function () {
            _this8.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
              data: 'Error loging out'
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          try {
            var token = document.cookie.split('=')[1];
            var payload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
            var userId = payload.userId._id;
            this.service.userId = userId;

            if (userId) {
              if (this.service.userData === undefined) {
                this.queryUserData(userId);
              } else {
                this.setRoutes();
              }
            } else {
              this.router.navigate(['login']);
            }
          } catch (err) {
            this.router.navigate(['login']);
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 2,
      consts: [["mode", "indeterminate", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["mode", "indeterminate"], [1, "wrapper"], ["mat-icon-button", ""], [3, "click"], [1, "sidenav"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "container"], ["width", "100%"], ["mat-list-item", "", 3, "routerLink", "click"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 14, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 15%;\n  background: linear-gradient(to bottom, #3fd5fe 0%, #7886ff 100%);\n}\n\n@media (max-width: 600px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 900px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #dddcdc 31%, #e6e6e6 72%);\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1cb5e0 0%, #7886ff 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0VBQUE7QUNDRjs7QURBRTtFQUhGO0lBSUksV0FBQTtFQ0dGO0FBQ0Y7O0FERkU7RUFORjtJQU9JLFVBQUE7RUNLRjtBQUNGOztBREZBO0VBQ0UsNkRBQUE7QUNLRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDREQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNmZDVmZSAwJSwgIzc4ODZmZiAxMDAlKTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSxcbiAgICByZ2JhKDIyMSwgMjIwLCAyMjAsIDEpIDMxJSxcbiAgICByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpIDcyJVxuICApO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWNiNWUwIDAlLCAjNzg4NmZmIDEwMCUpO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNmZDVmZSAwJSwgIzc4ODZmZiAxMDAlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2RkZGNkYyAzMSUsICNlNmU2ZTYgNzIlKTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFjYjVlMCAwJSwgIzc4ODZmZiAxMDAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(data) {
        _classCallCheck(this, DialogComponent);

        this.data = data;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 5,
      vars: 1,
      consts: [["align", "center"], ["mat-button", "", "color", "primary", "mat-dialog-close", ""]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "\n");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["@media (min-width: 1000px) {\n  .map[_ngcontent-%COMP%] {\n    width: 800px;\n    height: 800px;\n  }\n}\n@media (min-width: 600px) {\n  .map[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 500px;\n  }\n}\n@media (min-width: 500px) {\n  .map[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n@media (max-width: 400px) {\n  .map[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7RUNDRjtBQUNGO0FEQUU7RUFMRjtJQU1JLFlBQUE7SUFDQSxhQUFBO0VDR0Y7QUFDRjtBREZFO0VBVEY7SUFVSSxZQUFBO0lBQ0EsYUFBQTtFQ0tGO0FBQ0Y7QURKRTtFQWJGO0lBY0ksWUFBQTtJQUNBLGFBQUE7RUNPRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1hcCB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWFwIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5tYXAge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1hcCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mutations_resetPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mutations/resetPassword */
    "./src/app/mutations/resetPassword.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_requestReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mutations/requestReset */
    "./src/app/mutations/requestReset.ts");
    /* harmony import */


    var _mutations_updateUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mutations/updateUser */
    "./src/app/mutations/updateUser.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash.pick */
    "./node_modules/lodash.pick/index.js");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ForgotPasswordComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
      }
    }

    function ForgotPasswordComponent_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter email to reset password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_6_div_2_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check the code in your inbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_6_div_3_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.verifyCode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_6_div_2_Template, 9, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_div_6_div_3_Template, 9, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isRecovering);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isRecovering);
      }
    }

    function ForgotPasswordComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_7_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.changePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change your password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.passwordForm);
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(apollo, dialog, location, detector) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.apollo = apollo;
        this.dialog = dialog;
        this.location = location;
        this.detector = detector;
        this.isRecovering = false;
        this.isCodeValid = false;
        this.loading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(ForgotPasswordComponent, [{
        key: "reset",
        value: function reset() {
          var _this9 = this;

          this.loading = true;
          this.apollo.mutate({
            mutation: _mutations_requestReset__WEBPACK_IMPORTED_MODULE_3__["REQUEST_RESET"],
            variables: {
              email: this.form.value.email
            }
          }).toPromise().then(function (res) {
            console.log(res);
            _this9.isRecovering = true;
            _this9.user = res.data.requestReset.user;
            _this9.loading = false;

            _this9.detector.markForCheck();
          })["catch"](function (err) {
            _this9.loading = false;

            _this9.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
              data: 'There was an error requesting the reset code, please try again later or contact our support team!'
            });
          });
        }
      }, {
        key: "verifyCode",
        value: function verifyCode() {
          var _this10 = this;

          this.loading = false;
          this.apollo.mutate({
            mutation: _mutations_resetPassword__WEBPACK_IMPORTED_MODULE_1__["RESET_PASSWORD"],
            variables: {
              token: this.form.value.code
            }
          }).toPromise().then(function (res) {
            _this10.isCodeValid = true;
            _this10.isRecovering = false;

            _this10.detector.markForCheck();

            _this10.loading = false;
          })["catch"](function (err) {
            _this10.loading = false;

            _this10.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
              data: 'There was an error verifying the reset code, please try again later or contact our support team!'
            });
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this11 = this;

          console.log(this.user);
          var password = this.passwordForm.value.password;
          var confirm = this.passwordForm.value.confirmPassword;

          if (password === confirm) {
            this.loading = true;
            var data = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(this.user, ['name', 'username', 'email', 'address', 'country', 'type', 'fileUrl']);
            var userData = Object.assign(Object.assign({}, data), {
              password: password
            });
            this.apollo.mutate({
              mutation: _mutations_updateUser__WEBPACK_IMPORTED_MODULE_4__["UPDATE_USER"],
              variables: {
                where: {
                  _id: this.user._id
                },
                userData: userData
              }
            }).toPromise().then(function () {
              _this11.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
                data: 'Password changed successfully'
              });

              _this11.location.go('/login');

              _this11.loading = false;
            })["catch"](function () {
              _this11.loading = false;

              _this11.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
                data: 'There was an error updating the password, please try again later or contact our support team!'
              });
            });
          } else {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
              data: 'Confirm password must match!'
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 8,
      vars: 3,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "container"], [1, "wrapper"], [1, "image-wrapper"], ["routerLink", "/login"], ["mat-card-image", "", "src", "../../assets/logo.jpg", "alt", "some logo"], [4, "ngIf"], ["mode", "indeterminate"], [3, "formGroup"], ["class", "input-wrapper", 4, "ngIf"], [1, "input-wrapper"], ["matInput", "", "type", "text", "formControlName", "email"], ["mat-button", "", 3, "click"], ["matInput", "", "type", "text", "formControlName", "code"], [3, "formGroup", "submit"], ["matInput", "", "type", "password", "formControlName", "password"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], ["type", "submit", "mat-button", ""]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 4, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_div_7_Template, 15, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCodeValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCodeValid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n}\n\n@media (max-width: 400px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (min-width: 401px) and (max-width: 500px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (min-width: 501px) and (max-width: 800px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  margin: 5px 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 130px;\n  max-height: 130px;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDRTtFQVhGO0lBWUksVUFBQTtFQ0VGO0FBQ0Y7O0FEQUU7RUFmRjtJQWdCSSxVQUFBO0VDR0Y7QUFDRjs7QURGRTtFQWxCRjtJQW1CSSxVQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURKRTtFQUNFLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHdpZHRoOiAyOCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbjogNXB4IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dvLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIG1heC1oZWlnaHQ6IDEzMHB4O1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHdpZHRoOiAyOCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ28td3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgbWF4LWhlaWdodDogMTMwcHg7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pbWFnZS13cmFwcGVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-link */
    "./node_modules/apollo-link/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-link-error */
    "./node_modules/apollo-link-error/lib/bundle.esm.js");
    /* harmony import */


    var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! emailjs-com */
    "./node_modules/emailjs-com/source/index.js");
    /* harmony import */


    var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./utils */
    "./src/app/utils.ts"); //import { TokenRefreshLink } from 'apollo-link-token-refresh';
    //import jwtDecode from 'jwt-decode';


    function createApollo(httpLink) {
      var uri = 'http://localhost:4000'; // <-- add the URL of the GraphQL server here

      var errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__["onError"])(function (_ref) {
        var graphQLErrors = _ref.graphQLErrors,
            networkError = _ref.networkError;

        if (graphQLErrors) {
          var _iterator = _createForOfIteratorHelper(graphQLErrors),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var err = _step.value;

              if (err.message.split(':')[1].split(' ')[1] !== 'Invalid') {
                var templateParams = {
                  from_name: 'eliasalejo01@gmail.com',
                  to_name: 'eliasalejo01@gmail.com',
                  subject: 'Error in delivery app',
                  message_html: "There is a GraphQL error in delivery application: ".concat(err.message, ", location: ").concat(err.locations, " - ").concat(err.path)
                };
                emailjs_com__WEBPACK_IMPORTED_MODULE_5___default.a.send('delivery-app-service', 'template_smXCjRxC', templateParams, 'user_eJv2ZcvYpPAAY03vAk0sV').then(function (result) {
                  console.log(result.text);
                }), function (error) {
                  console.log(error.text);
                };
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (networkError) {
          var _templateParams = {
            from_name: 'eliasalejo01@gmail.com',
            to_name: 'eliasalejo01@gmail.com',
            subject: 'Error in delivery app',
            message_html: "There is a network error: ".concat(networkError.message)
          };
          emailjs_com__WEBPACK_IMPORTED_MODULE_5___default.a.send('delivery-app-service', 'template_smXCjRxC', _templateParams, 'user_eJv2ZcvYpPAAY03vAk0sV').then(function (result) {
            console.log(result.text);
          }), function (error) {
            console.log(error.text);
          };
        }
      });
      var authMiddleware = new apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"](function (operation, forward) {
        var accessToken = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getAccessToken"])();

        if (accessToken) {
          operation.setContext({
            headers: {
              authentication: "bearer ".concat(accessToken)
            }
          });
        }

        return forward(operation);
      });
      var endpoint = httpLink.create({
        uri: uri,
        withCredentials: true
      });
      return {
        link: Object(apollo_link__WEBPACK_IMPORTED_MODULE_3__["from"])([authMiddleware, errorLink, endpoint]),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
      }],
      imports: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, {
        exports: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
          }]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          try {
            var token = document.cookie.split('=')[1];
            var payload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
            var userId = payload.userId._id;

            if (userId) {
              this.router.navigate(['dashboard/summary']);
            }
          } catch (err) {
            null;
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 41,
      vars: 0,
      consts: [[1, "container"], ["color", "accent", 1, "toolbar"], [1, "toolbar-logo"], ["alt", "some logo", "src", "../../assets/logo.jpg"], [1, "toolbar-title"], [1, "toolbar-buttons"], ["routerLink", "/login"], ["mat-button", "", "color", "primary"], ["routerLink", "/register"], [1, "page"], [1, "wrapper"], [1, "text"], [1, "buttons"], ["mat-button", "", "color", "accent"], [1, "footer"], [1, "info"], [1, "footer-logo"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't go out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Why going out to do the shopping?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " When you can stay in your home and wait to someone to delivery it to you ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order online now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "email@email.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1-541-000-0000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: radial-gradient(circle, #dddcdc 31%, #e6e6e6 72%);\n}\n\n.toolbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  height: 90%;\n  width: 10%;\n}\n\n.toolbar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 80px;\n  height: 100%;\n}\n\n.toolbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.page[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background: linear-gradient(to bottom, #3fd5fe 0%, #7886ff 100%);\n  margin: 5% 0 5% 0;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: auto;\n  width: 100%;\n  height: 300px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: space-around;\n}\n\n.wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 2em;\n}\n\n.wrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.info[_ngcontent-%COMP%] {\n  color: white;\n  margin: auto;\n  margin-left: 30px;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 100px;\n  margin: auto;\n  margin-right: 30px;\n}\n\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0FDQ0Y7O0FETUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIRjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdFQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0hGOztBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRk47O0FETUU7RUFDRSxZQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFNQSxvQ0FBQTtBQ1ZGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEV0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSxcbiAgICByZ2JhKDIyMSwgMjIwLCAyMjAsIDEpIDMxJSxcbiAgICByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpIDcyJVxuICApO1xufVxuXG4udG9vbGJhci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMCU7XG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHNlY3Rpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNmZDVmZSAwJSwgIzc4ODZmZiAxMDAlKTtcbiAgICBtYXJnaW46IDUlIDAgNSUgMDtcbiAgfVxufVxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcblxuICAuYnV0dG9ucyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICB9XG5cbiAgLnRleHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gIC8vICAgdG8gcmlnaHQsXG4gIC8vICAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcbiAgLy8gICByZ2JhKDk4LCA5OCwgOTgsIDEpIDEwMCVcbiAgLy8gKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLmluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMzBweDtcblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuIiwiLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNkZGRjZGMgMzElLCAjZTZlNmU2IDcyJSk7XG59XG5cbi50b29sYmFyLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwJTtcbn1cbi50b29sYmFyLWxvZ28gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhZ2Ugc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzZmQ1ZmUgMCUsICM3ODg2ZmYgMTAwJSk7XG4gIG1hcmdpbjogNSUgMCA1JSAwO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLndyYXBwZXIgLmJ1dHRvbnMge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLndyYXBwZXIgLmJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ud3JhcHBlciAudGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4uaW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmZvb3Rlci1sb2dvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/line-chart/line-chart.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/line-chart/line-chart.component.ts ***!
    \****************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var LineChartComponent = /*#__PURE__*/function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);

        this.chartLabels = [];
        this.lineChartData = [{
          data: [],
          label: 'All Orders'
        }, {
          data: [],
          label: 'Pending Orders'
        }, {
          data: [],
          label: 'Completed Orders'
        }];
        this.lineChartOptions = {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }, {
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }, {
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
      }

      _createClass(LineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.lineChartLabels = this.chartLabels;
          this.chartLabels.forEach(function (month) {
            _this12.lineChartData[0].data.push(_this12.allOrders[month]);

            _this12.lineChartData[1].data.push(_this12.pendingOrders[month]);

            _this12.lineChartData[2].data.push(_this12.completedOrders[month]);
          });
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)();
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      viewQuery: function LineChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      inputs: {
        allOrders: "allOrders",
        pendingOrders: "pendingOrders",
        completedOrders: "completedOrders",
        chartLabels: "chartLabels"
      },
      decls: 2,
      vars: 7,
      consts: [[1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]],
      template: function LineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.scss']
        }]
      }], function () {
        return [];
      }, {
        allOrders: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pendingOrders: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completedOrders: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartLabels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _queries_getUserById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../queries/getUserById */
    "./src/app/queries/getUserById.ts");
    /* harmony import */


    var _mutations_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mutations/login */
    "./src/app/mutations/login.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function LoginComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 14);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, apollo, service, dialog) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.apollo = apollo;
        this.service = service;
        this.dialog = dialog;
        this.openDialog = false;
        this.loading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])
        });
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this13 = this;

          this.loading = true;
          this.apollo.mutate({
            mutation: _mutations_login__WEBPACK_IMPORTED_MODULE_2__["LOGIN"],
            variables: {
              username: this.loginForm.value.username,
              password: this.loginForm.value.password
            }
          }).toPromise().then(function (response) {
            if (response.data.login.accessToken) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setAccessToken"])(response.data.login.accessToken);

              _this13.apollo.query({
                query: _queries_getUserById__WEBPACK_IMPORTED_MODULE_1__["GET_USER_BY_ID"],
                variables: {
                  data: {
                    _id: response.data.login.user._id
                  }
                }
              }).toPromise().then(function (res) {
                if (res.data.getUserById) {
                  _this13.service.userData = res.data.getUserById;

                  _this13.router.navigate(['dashboard/summary']);
                } else {
                  _this13.message = 'Something went wrong, please contact the support team';

                  _this13.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                    data: _this13.message
                  });
                }

                _this13.loading = false;
              });
            }
          })["catch"](function (err) {
            _this13.loading = false;
            var error = err.message.split(':')[1];

            _this13.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
              data: error
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 3,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "container"], [1, "wrapper"], [1, "image-wrapper"], ["routerLink", "/"], ["mat-card-image", "", "src", "../../assets/logo.jpg", "alt", "some logo"], [1, "input-wrapper", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "text", "formControlName", "username"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "button-wrapper"], ["type", "submit", "mat-button", "", "color", "primary", 3, "disabled"], ["routerLink", "/forgot"], ["mat-button", "", "color", "primary"], ["routerLink", "/register"], ["mode", "indeterminate"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Not registered yet?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n}\n\n@media (max-width: 400px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (min-width: 401px) and (max-width: 500px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (min-width: 501px) and (max-width: 800px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  margin: 5px 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 130px;\n  max-height: 130px;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFFO0VBWEY7SUFZSSxVQUFBO0VDR0Y7QUFDRjs7QURERTtFQWZGO0lBZ0JJLFVBQUE7RUNJRjtBQUNGOztBREhFO0VBbEJGO0lBbUJJLFVBQUE7RUNNRjtBQUNGOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREhBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURIQTtFQUNFLGdCQUFBO0FDTUY7O0FETEU7RUFDRSxtQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHdpZHRoOiAyOCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuXG4ubG9nby13cmFwcGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbjogNXB4IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICB3aWR0aDogMjglO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuXG4ubG9nby13cmFwcGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbjogNXB4IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmltYWdlLXdyYXBwZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mutations/createOrder.ts":
  /*!******************************************!*\
    !*** ./src/app/mutations/createOrder.ts ***!
    \******************************************/

  /*! exports provided: CREATE_ORDER */

  /***/
  function srcAppMutationsCreateOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_ORDER", function () {
      return CREATE_ORDER;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var CREATE_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject());
    /***/
  },

  /***/
  "./src/app/mutations/createProduct.ts":
  /*!********************************************!*\
    !*** ./src/app/mutations/createProduct.ts ***!
    \********************************************/

  /*! exports provided: CREATE_PRODUCT */

  /***/
  function srcAppMutationsCreateProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_PRODUCT", function () {
      return CREATE_PRODUCT;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var CREATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject2());
    /***/
  },

  /***/
  "./src/app/mutations/createService.ts":
  /*!********************************************!*\
    !*** ./src/app/mutations/createService.ts ***!
    \********************************************/

  /*! exports provided: CREATE_SERVICE */

  /***/
  function srcAppMutationsCreateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_SERVICE", function () {
      return CREATE_SERVICE;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var CREATE_SERVICE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject3());
    /***/
  },

  /***/
  "./src/app/mutations/createUser.ts":
  /*!*****************************************!*\
    !*** ./src/app/mutations/createUser.ts ***!
    \*****************************************/

  /*! exports provided: CREATE_USER */

  /***/
  function srcAppMutationsCreateUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_USER", function () {
      return CREATE_USER;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var CREATE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject4());
    /***/
  },

  /***/
  "./src/app/mutations/deleteProduct.ts":
  /*!********************************************!*\
    !*** ./src/app/mutations/deleteProduct.ts ***!
    \********************************************/

  /*! exports provided: DELETE_PRODUCT */

  /***/
  function srcAppMutationsDeleteProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT", function () {
      return DELETE_PRODUCT;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var DELETE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject5());
    /***/
  },

  /***/
  "./src/app/mutations/login.ts":
  /*!************************************!*\
    !*** ./src/app/mutations/login.ts ***!
    \************************************/

  /*! exports provided: LOGIN */

  /***/
  function srcAppMutationsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOGIN", function () {
      return LOGIN;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var LOGIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject6());
    /***/
  },

  /***/
  "./src/app/mutations/logout.ts":
  /*!*************************************!*\
    !*** ./src/app/mutations/logout.ts ***!
    \*************************************/

  /*! exports provided: LOGOUT */

  /***/
  function srcAppMutationsLogoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOGOUT", function () {
      return LOGOUT;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var LOGOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject7());
    /***/
  },

  /***/
  "./src/app/mutations/requestReset.ts":
  /*!*******************************************!*\
    !*** ./src/app/mutations/requestReset.ts ***!
    \*******************************************/

  /*! exports provided: REQUEST_RESET */

  /***/
  function srcAppMutationsRequestResetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REQUEST_RESET", function () {
      return REQUEST_RESET;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var REQUEST_RESET = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject8());
    /***/
  },

  /***/
  "./src/app/mutations/resetPassword.ts":
  /*!********************************************!*\
    !*** ./src/app/mutations/resetPassword.ts ***!
    \********************************************/

  /*! exports provided: RESET_PASSWORD */

  /***/
  function srcAppMutationsResetPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function () {
      return RESET_PASSWORD;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var RESET_PASSWORD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject9());
    /***/
  },

  /***/
  "./src/app/mutations/updateOrder.ts":
  /*!******************************************!*\
    !*** ./src/app/mutations/updateOrder.ts ***!
    \******************************************/

  /*! exports provided: UPDATE_ORDER */

  /***/
  function srcAppMutationsUpdateOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_ORDER", function () {
      return UPDATE_ORDER;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var UPDATE_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject10());
    /***/
  },

  /***/
  "./src/app/mutations/updateProduct.ts":
  /*!********************************************!*\
    !*** ./src/app/mutations/updateProduct.ts ***!
    \********************************************/

  /*! exports provided: UPDATE_PRODUCT */

  /***/
  function srcAppMutationsUpdateProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_PRODUCT", function () {
      return UPDATE_PRODUCT;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var UPDATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject11());
    /***/
  },

  /***/
  "./src/app/mutations/updateUser.ts":
  /*!*****************************************!*\
    !*** ./src/app/mutations/updateUser.ts ***!
    \*****************************************/

  /*! exports provided: UPDATE_USER */

  /***/
  function srcAppMutationsUpdateUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function () {
      return UPDATE_USER;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var UPDATE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject12());
    /***/
  },

  /***/
  "./src/app/order-dialog/order-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/order-dialog/order-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: OrderDialogComponent */

  /***/
  function srcAppOrderDialogOrderDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDialogComponent", function () {
      return OrderDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_updateOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mutations/updateOrder */
    "./src/app/mutations/updateOrder.ts");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash.pick */
    "./node_modules/lodash.pick/index.js");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function OrderDialogComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r3.viewValue, " ");
      }
    }

    function OrderDialogComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r4.name, " ");
      }
    }

    function OrderDialogComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
      }
    }

    var OrderDialogComponent = /*#__PURE__*/function () {
      function OrderDialogComponent(data, apollo, dialogRef) {
        _classCallCheck(this, OrderDialogComponent);

        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.isError = false;
        this.statuses = [{
          value: 'In process',
          viewValue: 'In process'
        }, {
          value: 'Completed',
          viewValue: 'Completed'
        }, {
          value: 'Canceled',
          viewValue: 'Canceled'
        }];
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.data = data.order;
        this.products = data.products;
        this.orderForm.controls['address'].setValue(this.data.address);
        this.orderForm.controls['status'].setValue(this.data.status);
      }

      _createClass(OrderDialogComponent, [{
        key: "update",
        value: function update() {
          var _this14 = this;

          var data = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(this.data, ['business', 'emited', 'price', 'products', 'service', 'user']);
          var withAddress = Object.assign(Object.assign({}, data), {
            address: this.orderForm.value.address
          });
          var orderData = Object.assign(Object.assign({}, withAddress), {
            status: this.orderForm.value.status
          });
          this.apollo.mutate({
            mutation: _mutations_updateOrder__WEBPACK_IMPORTED_MODULE_3__["UPDATE_ORDER"],
            variables: {
              where: {
                _id: this.data._id
              },
              orderData: orderData
            }
          }).toPromise().then(function () {
            _this14.isError = false;

            _this14.dialogRef.close();
          })["catch"](function () {
            _this14.errorMessage = 'There was an error updating the order';
            _this14.isError = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderDialogComponent;
    }();

    OrderDialogComponent.ɵfac = function OrderDialogComponent_Factory(t) {
      return new (t || OrderDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    OrderDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDialogComponent,
      selectors: [["app-order-dialog"]],
      decls: 21,
      vars: 4,
      consts: [[1, "order-dialog-form", 3, "formGroup"], ["matInput", "", "type", "text", "value", "data.address", "formControlName", "address"], ["formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], ["itemSize", "50", 1, "order-products-scroll"], [4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], ["align", "center"], ["mat-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "error"]],
      template: function OrderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderDialogComponent_mat_option_10_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "cdk-virtual-scroll-viewport", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderDialogComponent_div_14_Template, 4, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrderDialogComponent_div_15_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-dialog-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDialogComponent_Template_button_click_19_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
      styles: [".order-dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.order-dialog-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.order-products-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n.error[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvb3JkZXItZGlhbG9nL29yZGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXItZGlhbG9nL29yZGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRpYWxvZy9vcmRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItZGlhbG9nLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5vcmRlci1wcm9kdWN0cy1zY3JvbGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIub3JkZXItZGlhbG9nLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JkZXItZGlhbG9nLWZvcm0gc3BhbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm9yZGVyLXByb2R1Y3RzLXNjcm9sbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-dialog',
          templateUrl: './order-dialog.component.html',
          styleUrls: ['./order-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order.component.ts":
  /*!******************************************!*\
    !*** ./src/app/order/order.component.ts ***!
    \******************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _queries_getServicesByType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../queries/getServicesByType */
    "./src/app/queries/getServicesByType.ts");
    /* harmony import */


    var _queries_getProductsById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../queries/getProductsById */
    "./src/app/queries/getProductsById.ts");
    /* harmony import */


    var _queries_getUserById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../queries/getUserById */
    "./src/app/queries/getUserById.ts");
    /* harmony import */


    var _queries_getTypeServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../queries/getTypeServices */
    "./src/app/queries/getTypeServices.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _take_order_take_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../take-order/take-order.component */
    "./src/app/take-order/take-order.component.ts");

    function OrderComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
      }
    }

    function OrderComponent_div_2_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", service_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r5.name, " ");
      }
    }

    function OrderComponent_div_2_div_9_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_2_div_9_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var service_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.onSelectService(service_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r7.description);
      }
    }

    function OrderComponent_div_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select service");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderComponent_div_2_div_9_div_4_Template, 12, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.servicesData);
      }
    }

    function OrderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Type of service");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function OrderComponent_div_2_Template_mat_select_selectionChange_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectType();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_div_2_mat_option_8_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderComponent_div_2_div_9_Template, 5, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.orderForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.typeServices);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedType);
      }
    }

    function OrderComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-take-order", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function OrderComponent_div_3_Template_app_take_order_return_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.toggleTakeOrder($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderData", ctx_r2.orderData);
      }
    }

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent(service, apollo, detector, dialog) {
        _classCallCheck(this, OrderComponent);

        this.service = service;
        this.apollo = apollo;
        this.detector = detector;
        this.dialog = dialog;
        this.selectedType = false;
        this.selectedService = false;
        this.takeOrder = false;
        this.loading = false;
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          typeService: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.loading = true; // this.typeServices = this.service.typeService;

          this.apollo.query({
            query: _queries_getTypeServices__WEBPACK_IMPORTED_MODULE_4__["GET_TYPE_SERVICE"]
          }).toPromise().then(function (res) {
            _this15.typeServices = res.data.getTypeOfService;
            _this15.loading = false;

            _this15.detector.markForCheck();
          })["catch"](function () {
            _this15.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
              data: 'There was an error, please contact support team'
            });
          });
        }
      }, {
        key: "selectType",
        value: function selectType() {
          var _this16 = this;

          this.selectedType = true;
          this.apollo.query({
            query: _queries_getServicesByType__WEBPACK_IMPORTED_MODULE_1__["GET_SERVICES_BY_TYPE"],
            variables: {
              type: this.orderForm.value.typeService
            }
          }).subscribe(function (response) {
            _this16.servicesData = response.data.getServiceByType;

            _this16.detector.markForCheck();
          });
        }
      }, {
        key: "onSelectService",
        value: function onSelectService(data) {
          var _this17 = this;

          this.loading = true;
          this.selectedService = true;
          this.apollo.query({
            query: _queries_getUserById__WEBPACK_IMPORTED_MODULE_3__["GET_USER_BY_ID"],
            variables: {
              data: {
                _id: data.user
              }
            }
          }).subscribe(function (res) {
            var productData = {
              _id: data.products
            };

            _this17.apollo.query({
              query: _queries_getProductsById__WEBPACK_IMPORTED_MODULE_2__["GET_PRODUCTS_BY_IDS"],
              variables: {
                products: productData
              }
            }).subscribe(function (response) {
              _this17.orderData = {
                service: data,
                user: res.data.getUserById,
                products: response.data.getProductsById
              };
              _this17.loading = false;
              _this17.takeOrder = true;

              _this17.detector.markForCheck();
            });
          });
        }
      }, {
        key: "toggleTakeOrder",
        value: function toggleTakeOrder(status) {
          this.takeOrder = status;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.selectedType = false;
          this.selectedService = false;
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]));
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["app-order"]],
      decls: 4,
      vars: 3,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "container"], [4, "ngIf"], ["class", "take-order", 4, "ngIf"], ["mode", "indeterminate"], [1, "select-container"], [1, "take-order-form", 3, "formGroup"], ["formControlName", "typeService", 1, "form-select", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "services-container", 4, "ngIf"], [3, "value"], [1, "services-container"], ["fxLayoutGap", "10px", 1, "services-card-container"], ["class", "services", 3, "click", 4, "ngFor", "ngForOf"], [1, "services", 3, "click"], [1, "services-card"], [1, "take-order"], [3, "orderData", "return"]],
      template: function OrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_div_2_Template, 10, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.takeOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.takeOrder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _take_order_take_order_component__WEBPACK_IMPORTED_MODULE_16__["TakeOrderComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container   [_nghost-%COMP%] {\n  width: 100%;\n}\n.select-container[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: auto;\n}\n@media (max-width: 1050px) {\n  .select-container[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media (max-width: 900px) {\n  .select-container[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media (max-width: 500px) {\n  .select-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.services-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n.services-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  align-self: center;\n}\n.services-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 1%;\n  padding: 10px 10px;\n}\n.services[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 4%;\n}\n.services-card[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  max-width: 300px;\n  max-height: 400px;\n  flex-flow: column;\n  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.08);\n}\n.services-card[_ngcontent-%COMP%]:hover {\n  transition: all 0.3s;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-header.mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-header.mat-card-header[_ngcontent-%COMP%]   mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #039ccf;\n}\n.take-order[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FERUE7RUFDRSxVQUFBO0VBVUEsWUFBQTtBQ1JGO0FEREU7RUFGRjtJQUdJLFVBQUE7RUNJRjtBQUNGO0FESEU7RUFMRjtJQU1JLFVBQUE7RUNNRjtBQUNGO0FETEU7RUFSRjtJQVNJLFVBQUE7RUNRRjtBQUNGO0FESkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ09GO0FETkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNRSjtBREpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPRjtBREpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPRjtBREpBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBQ09GO0FETkU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1FKO0FESEU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ01KO0FETEk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNPTjtBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICB3aWR0aDogMjAlO1xuICBAbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2VydmljZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5cbi5zZXJ2aWNlcy1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLnNlcnZpY2VzIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuLnNlcnZpY2VzLWNhcmQge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDk1JTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxubWF0LWNhcmQubWF0LWNhcmQge1xuICBtYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGNvbG9yOiByZ2IoMywgMTU2LCAyMDcpO1xuICAgIH1cbiAgfVxufVxuXG4udGFrZS1vcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIDpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAuc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnNlbGVjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgaDMge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uc2VydmljZXMtY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDElO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5zZXJ2aWNlcyB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG5cbi5zZXJ2aWNlcy1jYXJkIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA5NSU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnNlcnZpY2VzLWNhcmQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtY2FyZC5tYXQtY2FyZCBtYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtY2FyZC5tYXQtY2FyZCBtYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMwMzljY2Y7XG59XG5cbi50YWtlLW9yZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.scss']
        }]
      }], function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/queries/getOrdersByUser.ts":
  /*!********************************************!*\
    !*** ./src/app/queries/getOrdersByUser.ts ***!
    \********************************************/

  /*! exports provided: GET_ORDERS_BY_USER */

  /***/
  function srcAppQueriesGetOrdersByUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_ORDERS_BY_USER", function () {
      return GET_ORDERS_BY_USER;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_ORDERS_BY_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject13());
    /***/
  },

  /***/
  "./src/app/queries/getProductsById.ts":
  /*!********************************************!*\
    !*** ./src/app/queries/getProductsById.ts ***!
    \********************************************/

  /*! exports provided: GET_PRODUCTS_BY_IDS */

  /***/
  function srcAppQueriesGetProductsByIdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_BY_IDS", function () {
      return GET_PRODUCTS_BY_IDS;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_PRODUCTS_BY_IDS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject14());
    /***/
  },

  /***/
  "./src/app/queries/getServices.ts":
  /*!****************************************!*\
    !*** ./src/app/queries/getServices.ts ***!
    \****************************************/

  /*! exports provided: GET_SERVICES */

  /***/
  function srcAppQueriesGetServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_SERVICES", function () {
      return GET_SERVICES;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_SERVICES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject15());
    /***/
  },

  /***/
  "./src/app/queries/getServicesByType.ts":
  /*!**********************************************!*\
    !*** ./src/app/queries/getServicesByType.ts ***!
    \**********************************************/

  /*! exports provided: GET_SERVICES_BY_TYPE */

  /***/
  function srcAppQueriesGetServicesByTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_SERVICES_BY_TYPE", function () {
      return GET_SERVICES_BY_TYPE;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_SERVICES_BY_TYPE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject16());
    /***/
  },

  /***/
  "./src/app/queries/getTypeServices.ts":
  /*!********************************************!*\
    !*** ./src/app/queries/getTypeServices.ts ***!
    \********************************************/

  /*! exports provided: GET_TYPE_SERVICE */

  /***/
  function srcAppQueriesGetTypeServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_TYPE_SERVICE", function () {
      return GET_TYPE_SERVICE;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_TYPE_SERVICE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject17());
    /***/
  },

  /***/
  "./src/app/queries/getUserById.ts":
  /*!****************************************!*\
    !*** ./src/app/queries/getUserById.ts ***!
    \****************************************/

  /*! exports provided: GET_USER_BY_ID */

  /***/
  function srcAppQueriesGetUserByIdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_USER_BY_ID", function () {
      return GET_USER_BY_ID;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var GET_USER_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject18());
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_createUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mutations/createUser */
    "./src/app/mutations/createUser.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash.pick */
    "./node_modules/lodash.pick/index.js");
    /* harmony import */


    var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function RegisterComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 22);
      }
    }

    function RegisterComponent_mat_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r3.viewValue, " ");
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(apollo, router, service, dialog) {
        _classCallCheck(this, RegisterComponent);

        this.apollo = apollo;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.types = [{
          value: 'customer',
          viewValue: 'Customer'
        }, {
          value: 'business',
          viewValue: 'Business'
        }];
        this.imageUrl = '../../assets/logo.jpg';
        this.loading = false;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(RegisterComponent, [{
        key: "onChangeFile",
        value: function onChangeFile(event) {
          var _this18 = this;

          var reader = new FileReader();
          this.userForm.controls['file'].setValue(event.target.files);
          reader.readAsDataURL(this.userForm.value.file[0]);

          reader.onload = function () {
            _this18.imageUrl = reader.result;
          };
        }
      }, {
        key: "register",
        value: function register() {
          var _this19 = this;

          if (this.imageUrl != '../../assets/logo.jpg') {
            this.loading = true;
            this.service.uploadFile(this.userForm.value.file[0], this.userForm.value.username).toPromise().then(function (e) {
              _this19.loading = true;
              e.ref.getDownloadURL().then(function (value) {
                var data = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(_this19.userForm.value, ['name', 'username', 'email', 'password', 'country', 'type', 'address']);
                var userData = Object.assign(Object.assign({}, data), {
                  fileUrl: value
                });

                _this19.apollo.mutate({
                  mutation: _mutations_createUser__WEBPACK_IMPORTED_MODULE_2__["CREATE_USER"],
                  variables: {
                    userData: userData
                  }
                }).toPromise().then(function (response) {
                  if (response.data) {
                    _this19.loading = false;

                    _this19.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                      data: 'Úser registered successfully'
                    });

                    _this19.service.userData = response.data.createUser;

                    _this19.router.navigate(['dashboard']);
                  }
                })["catch"](function () {
                  _this19.loading = false;

                  _this19.service.removeFile(value);

                  _this19.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                    data: 'Something went wrong creating the user, please contact the support team'
                  });
                });
              });
            })["catch"](function () {
              _this19.loading = false;

              _this19.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                data: 'Something went wrong loading the image, please contact the support team'
              });
            });
          } else {
            this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
              data: 'Must load a profile photo!'
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 48,
      vars: 5,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "container"], [1, "wrapper"], [1, "image-wrapper"], ["mat-card-image", "", 3, "src", "click"], ["type", "file", "accept", "image/*", 1, "file-input", 3, "change"], ["fileInput", ""], [1, "photo-text", 3, "click"], [1, "input-wrapper", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "username"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "country"], ["matInput", "", "formControlName", "address"], [1, "button-wrapper"], ["type", "submit", "mat-button", "", "color", "primary", 3, "disabled"], ["routerLink", "/login"], ["mat-button", "", "color", "primary"], ["routerLink", "/"], ["mode", "indeterminate"], [3, "value"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_img_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_5_listener($event) {
            return ctx.onChangeFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_h4_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add profile photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Type of User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_mat_option_30_Template, 2, 2, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Already have account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  width: 28%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n}\n\n@media (max-width: 400px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (min-width: 401px) and (max-width: 500px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (min-width: 501px) and (max-width: 800px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  margin: 5px 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 130px;\n  max-height: 130px;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.photo-text[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBRTtFQVpGO0lBYUksVUFBQTtFQ0dGO0FBQ0Y7O0FEREU7RUFoQkY7SUFpQkksVUFBQTtFQ0lGO0FBQ0Y7O0FESEU7RUFuQkY7SUFvQkksVUFBQTtFQ01GO0FBQ0Y7O0FESEE7RUFDRSxZQUFBO0FDTUY7O0FESEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ01GOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREhBO0VBQ0UsZ0JBQUE7QUNNRjs7QURMRTtFQUNFLG1CQUFBO0FDT0o7O0FETEk7RUFDRSxlQUFBO0FDT047O0FEREU7RUFDRSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgd2lkdGg6IDI4JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cblxuLmxvZ28td3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuICBtYXJnaW46IDVweCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnBob3RvLXRleHQge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICB3aWR0aDogMjglO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG5cbi5sb2dvLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgbWF4LWhlaWdodDogMTMwcHg7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pbWFnZS13cmFwcGVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaW1hZ2Utd3JhcHBlciBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waG90by10ZXh0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/summary/summary.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/summary/summary.component.ts ***!
    \**********************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
      return SummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../order-dialog/order-dialog.component */
    "./src/app/order-dialog/order-dialog.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _queries_getProductsById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../queries/getProductsById */
    "./src/app/queries/getProductsById.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _queries_getServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../queries/getServices */
    "./src/app/queries/getServices.ts");
    /* harmony import */


    var _queries_getOrdersByUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../queries/getOrdersByUser */
    "./src/app/queries/getOrdersByUser.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../line-chart/line-chart.component */
    "./src/app/line-chart/line-chart.component.ts");

    function SummaryComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
      }
    }

    function SummaryComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_div_39_Template_ul_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var order_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.openOrder(order_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Emitted: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Destination: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Price: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r6.emited, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r6.status, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r6.address, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r6.price, "");
      }
    }

    function SummaryComponent_button_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_button_41_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.newOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Order ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SummaryComponent_app_line_chart_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-line-chart", 14);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allOrders", ctx_r3.allOrdersMap)("pendingOrders", ctx_r3.pendingOrdersMap)("completedOrders", ctx_r3.completedOrdersMap)("chartLabels", ctx_r3.chartLabels);
      }
    }

    function SummaryComponent_mat_card_48_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Emitted: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Destination: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Price: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r12.emited, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r12.status, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r12.address, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r12.price, "");
      }
    }

    function SummaryComponent_mat_card_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "cdk-virtual-scroll-viewport", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SummaryComponent_mat_card_48_div_5_Template, 19, 4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.orders);
      }
    }

    function SummaryComponent_mat_card_49_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_mat_card_49_div_5_Template_ul_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var service_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.editService(service_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "type: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r14.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r14.type, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r14.description, "");
      }
    }

    function SummaryComponent_mat_card_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Services");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "cdk-virtual-scroll-viewport", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SummaryComponent_mat_card_49_div_5_Template, 15, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_mat_card_49_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.newService();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.services);
      }
    }

    var SummaryComponent = /*#__PURE__*/function () {
      function SummaryComponent(service, router, apollo, dialog, detector) {
        _classCallCheck(this, SummaryComponent);

        this.service = service;
        this.router = router;
        this.apollo = apollo;
        this.dialog = dialog;
        this.detector = detector;
        this.loading = false;
        this.pendingOrders = [];
        this.allOrdersMap = {};
        this.pendingOrdersMap = {};
        this.completedOrdersMap = {};
        this.completed = false;
      }

      _createClass(SummaryComponent, [{
        key: "editUserInfo",
        value: function editUserInfo() {
          this.router.navigate(['dashboard/profile']);
        }
      }, {
        key: "newOrder",
        value: function newOrder() {
          this.router.navigate(['dashboard/order']);
        }
      }, {
        key: "editService",
        value: function editService(serviceData) {
          this.service.editableService = serviceData;
          this.router.navigate(['dashboard/service']);
        }
      }, {
        key: "newService",
        value: function newService() {
          this.router.navigate(['dashboard/service']);
        }
      }, {
        key: "openOrder",
        value: function openOrder(order) {
          var _this20 = this;

          this.loading = true;
          this.apollo.query({
            query: _queries_getProductsById__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCTS_BY_IDS"],
            variables: {
              products: {
                _id: order.products
              }
            }
          }).toPromise().then(function (response) {
            _this20.loading = false;

            _this20.dialog.open(_order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__["OrderDialogComponent"], {
              data: {
                order: order,
                products: response.data.getProductsById
              }
            });
          })["catch"](function () {
            _this20.loading = false;

            _this20.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
              data: 'There was an error querying the products, please contact the support team!'
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

          if (this.service.userData.type === 'business') {
            this.isBusiness = true;
            this.apollo.query({
              query: _queries_getServices__WEBPACK_IMPORTED_MODULE_5__["GET_SERVICES"],
              variables: {
                userID: this.service.userId
              }
            }).subscribe(function (response) {
              _this21.service.services = response.data.getServiceByUser;
              _this21.services = _this21.service.services;

              _this21.detector.markForCheck();
            });
          } else {
            this.isBusiness = false;
          }

          this.apollo.query({
            query: _queries_getOrdersByUser__WEBPACK_IMPORTED_MODULE_6__["GET_ORDERS_BY_USER"],
            variables: {
              userID: this.service.userId
            }
          }).subscribe(function (res) {
            _this21.service.orders = res.data.getOrdersByUser;
            _this21.orders = _this21.service.orders;
            _this21.pendingOrders = _this21.orders.filter(function (e) {
              return e.status === 'In process';
            });

            var completedOrders = _this21.orders.filter(function (e) {
              return e.status === 'Completed';
            });

            months.forEach(function (value) {
              _this21.allOrdersMap[value] = 0;
              _this21.pendingOrdersMap[value] = 0;
              _this21.completedOrdersMap[value] = 0;
            });

            _this21.orders.forEach(function (value) {
              var month = Number(value.emited.toString().split('-')[1]);
              _this21.allOrdersMap[months[month - 1]] += 1;
            });

            _this21.pendingOrders.forEach(function (value) {
              var month = Number(value.emited.toString().split('-')[1]);
              _this21.pendingOrdersMap[months[month - 1]] += 1;
            });

            completedOrders.forEach(function (value) {
              var month = Number(value.emited.toString().split('-')[1]);
              _this21.completedOrdersMap[months[month - 1]] += 1;
            });
            _this21.completed = true;

            _this21.detector.markForCheck();
          });
          this.userData = this.service.userData;
          this.isButtonVisible = this.userData.type === 'customer';
          this.chartLabels = months;
        }
      }]);

      return SummaryComponent;
    }();

    SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
      return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SummaryComponent,
      selectors: [["app-summary"]],
      viewQuery: function SummaryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 50,
      vars: 12,
      consts: [["mode", "indeterminate", 4, "ngIf"], [1, "wrapper"], [1, "card-wrapper"], [1, "user-information"], ["mat-button", "", "color", "primary", 3, "click"], ["itemSize", "50", 1, "order-scroll"], ["class", "orders", 4, "ngFor", "ngForOf"], [1, "order-button"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "allOrders", "pendingOrders", "completedOrders", "chartLabels", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate"], [1, "orders"], [1, "order-list", 3, "click"], [3, "allOrders", "pendingOrders", "completedOrders", "chartLabels"], ["itemSize", "50", 1, "service-scroll"], ["class", "services", 4, "ngFor", "ngForOf"], [1, "service-button"], [1, "services"], [3, "click"]],
      template: function SummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SummaryComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_32_listener() {
            return ctx.editUserInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Pending Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "cdk-virtual-scroll-viewport", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SummaryComponent_div_39_Template, 19, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SummaryComponent_button_41_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Transaction History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SummaryComponent_app_line_chart_47_Template, 1, 4, "app-line-chart", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SummaryComponent_mat_card_48_Template, 6, 1, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SummaryComponent_mat_card_49_Template, 9, 1, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pendingOrders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBusiness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBusiness);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_16__["LineChartComponent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 500px) {\n  .wrapper[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.user-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n.user-information[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n}\nmat-card.mat-card[_ngcontent-%COMP%] {\n  width: 30%;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-header.mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #039ccf;\n}\n.order-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n.orders[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  flex-flow: column;\n  width: 100%;\n}\n.orders[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.order-list[_ngcontent-%COMP%]:hover {\n  border-radius: 5px;\n  transition: all 0.3s;\n  background-color: #9cff57;\n  cursor: pointer;\n}\n.order-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.service-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n.services[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  flex-flow: column;\n  width: 100%;\n}\n.services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover {\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #9cff57;\n}\n.service-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUtBLHVCQUFBO0VBQ0EsbUJBQUE7QUNIRjtBRERFO0VBTkY7SUFPSSxtQkFBQTtFQ0lGO0FBQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSjtBREVBO0VBQ0UsVUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFSjtBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0VKO0FER0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDTjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5tYXQtY2FyZC5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDMsIDE1NiwgMjA3KTtcbiAgfVxufVxuXG4ub3JkZXItc2Nyb2xsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5vcmRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cbn1cblxuLm9yZGVyLWxpc3Qge1xuICAmOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljZmY1NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm9yZGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VydmljZS1zY3JvbGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNlcnZpY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzljZmY1NztcbiAgICB9XG4gIH1cbn1cblxuLnNlcnZpY2UtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbi5jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXItaW5mb3JtYXRpb24gYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5tYXQtY2FyZC5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5tYXQtY2FyZC5tYXQtY2FyZCBtYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDM5Y2NmO1xufVxuXG4ub3JkZXItc2Nyb2xsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5vcmRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vcmRlcnMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLm9yZGVyLWxpc3Q6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNmZjU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcnZpY2Utc2Nyb2xsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zZXJ2aWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlcnZpY2VzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uc2VydmljZXMgdWw6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljZmY1Nztcbn1cblxuLnNlcnZpY2UtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-summary',
          templateUrl: './summary.component.html',
          styleUrls: ['./summary.component.scss']
        }]
      }], function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/take-order/take-order.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/take-order/take-order.component.ts ***!
    \****************************************************/

  /*! exports provided: TakeOrderComponent */

  /***/
  function srcAppTakeOrderTakeOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeOrderComponent", function () {
      return TakeOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_createOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mutations/createOrder */
    "./src/app/mutations/createOrder.ts");
    /* harmony import */


    var _mutations_updateProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mutations/updateProduct */
    "./src/app/mutations/updateProduct.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _queries_getOrdersByUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../queries/getOrdersByUser */
    "./src/app/queries/getOrdersByUser.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../bill/bill.component */
    "./src/app/bill/bill.component.ts");

    var _c0 = ["pdfTable"];

    function TakeOrderComponent_div_0_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Price: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Available: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-checkbox", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TakeOrderComponent_div_0_div_34_Template_mat_checkbox_change_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var product_r5 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r8.addProduct($event, product_r5, _r6, _r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Add ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r5 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.description, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r5.stock);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", product_r5.stock);
      }
    }

    function TakeOrderComponent_div_0_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Price:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Amount:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r10.price, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r10.amount, " ");
      }
    }

    function TakeOrderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Bussiness information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Location:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Available Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "cdk-virtual-scroll-viewport", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, TakeOrderComponent_div_0_div_34_Template, 27, 6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-card-content", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Customer: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Business: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Address: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TakeOrderComponent_div_0_Template_button_click_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.enableInput();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Toggle ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Emitted Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Selected Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-card-content", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "cdk-virtual-scroll-viewport", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, TakeOrderComponent_div_0_div_68_Template, 13, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TakeOrderComponent_div_0_Template_button_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.back();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TakeOrderComponent_div_0_Template_button_click_72_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.toggleBill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.orderData.user.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.orderData.user.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.orderData.user.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.orderData.user.address, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.orderData.user.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.orderData.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userInformation.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orderData.user.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 13, ctx_r0.today, "fullDate"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectedProducts);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.disableSubmit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Order ", ctx_r0.price.toFixed(2), "$ ");
      }
    }

    function TakeOrderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-bill", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submitBill", function TakeOrderComponent_div_1_Template_app_bill_submitBill_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.submit();
        })("toggleBill", function TakeOrderComponent_div_1_Template_app_bill_toggleBill_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.toggleBill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("products", ctx_r1.selectedProducts)("client", ctx_r1.userInformation.name)("sender", ctx_r1.orderData.user.name)("total", ctx_r1.price)("loading", ctx_r1.loading);
      }
    }

    var TakeOrderComponent = /*#__PURE__*/function () {
      function TakeOrderComponent(service, apollo, dialog) {
        _classCallCheck(this, TakeOrderComponent);

        this.service = service;
        this.apollo = apollo;
        this.dialog = dialog;
        this["return"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedProducts = [];
        this.today = Date.now();
        this.changeAddress = true;
        this.price = 0;
        this.disableSubmit = true;
        this.bill = false;
        this.loading = false;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: '',
            disabled: this.changeAddress
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.userInformation = this.service.userData;
      }

      _createClass(TakeOrderComponent, [{
        key: "back",
        value: function back() {
          this["return"].emit(false);
        }
      }, {
        key: "enableInput",
        value: function enableInput() {
          this.changeAddress = !this.changeAddress;
          this.productForm.controls['address'].reset({
            value: this.userInformation.address,
            disabled: this.changeAddress
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productForm.controls['address'].setValue(this.userInformation.address);

          if (this.orderData.service.type === 'Food') {
            this.description = 'Ingredients';
          } else {
            this.description = 'Description';
          }
        }
      }, {
        key: "addProduct",
        value: function addProduct(event, product, amount, checkbox) {
          var __typename = product.__typename,
              data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(product, ["__typename"]);
          var products = Object.assign(Object.assign({}, data), {
            amount: Number(amount.value)
          });
          var productData = Object.assign(Object.assign({}, products), {
            service: this.orderData.service._id
          });

          if (!checkbox.checked) {
            var index = this.containsProduct(productData.name);
            this.selectedProducts.splice(index, 1);
            checkbox.checked = false;
            amount.disabled = false;
          } else {
            if (this.containsProduct(product.name) >= 0) {
              checkbox.checked = true;
              amount.disabled = true;
            } else {
              if (amount.value === '0') {
                checkbox.checked = false;
              } else {
                if (event.checked) {
                  amount.disabled = true;
                  this.price = Number((this.price + productData.price * productData.amount).toFixed(2));
                  this.selectedProducts.push(productData);
                } else {
                  amount.disabled = false;
                  this.price -= Number((productData.price * productData.amount).toFixed(2));
                  this.selectedProducts = this.selectedProducts.filter(function (value) {
                    return value._id !== productData._id;
                  });
                }
              }

              if (this.selectedProducts.length > 0) {
                this.disableSubmit = false;
              } else {
                this.disableSubmit = true;
              }
            }
          }
        }
      }, {
        key: "containsProduct",
        value: function containsProduct(product) {
          for (var i = 0; i < this.selectedProducts.length; i++) {
            if (this.selectedProducts[i].name === product) {
              return i;
            }
          }

          return -1;
        }
      }, {
        key: "toggleBill",
        value: function toggleBill() {
          this.bill = !this.bill;
        }
      }, {
        key: "exportPdf",
        value: function exportPdf() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this22 = this;

            var template;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    template = document.getElementById('bill');
                    _context2.next = 3;
                    return html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(template).then(function (canvas) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var imgWidth, imgHeight, xAxis, yAxis, doc, image, xhr, formData;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                try {
                                  imgWidth = 200;
                                  imgHeight = canvas.height * imgWidth / canvas.width;
                                  xAxis = 2;
                                  yAxis = 50;
                                  doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["jsPDF"]();
                                  image = canvas.toDataURL('image/png');
                                  doc.addImage(image, 'PNG', xAxis, yAxis, imgWidth, imgHeight);
                                  this.file = doc.output('blob');
                                  xhr = new XMLHttpRequest();
                                  formData = new FormData();
                                  formData.append('order', this.file);
                                  xhr.open('POST', 'http://localhost:4000/uploadFile');
                                  xhr.setRequestHeader('businessEmail', this.orderData.user.email);
                                  xhr.setRequestHeader('userEmail', this.userInformation.email);
                                  xhr.send(formData);
                                } catch (err) {
                                  this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
                                    data: 'Something went wrong, please contact the support team'
                                  });
                                }

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this23 = this;

          this.loading = true;
          this.exportPdf().then(function (value) {
            var orderData = {
              address: _this23.productForm.value.address,
              emited: new Date().toDateString(),
              service: _this23.orderData.service._id,
              price: Number(_this23.price.toFixed(2)),
              status: 'In process',
              products: _this23.selectedProducts.map(function (data) {
                return data._id;
              }),
              user: _this23.userInformation._id,
              business: _this23.orderData.user._id,
              fileUrl: value
            };

            _this23.apollo.mutate({
              mutation: _mutations_createOrder__WEBPACK_IMPORTED_MODULE_3__["CREATE_ORDER"],
              variables: {
                orderData: orderData
              },
              refetchQueries: [{
                query: _queries_getOrdersByUser__WEBPACK_IMPORTED_MODULE_8__["GET_ORDERS_BY_USER"],
                variables: {
                  userID: _this23.service.userData._id
                }
              }]
            }).subscribe(function () {
              try {
                _this23.apollo.mutate({
                  mutation: _mutations_updateProduct__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PRODUCT"],
                  variables: {
                    productData: {
                      products: _this23.selectedProducts
                    }
                  }
                }).toPromise().then(function () {
                  _this23.back();

                  _this23.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
                    data: 'Order successfully loaded!'
                  });
                })["catch"](function () {
                  _this23.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
                    data: 'There was an error updating the product stock'
                  });
                });
              } catch (err) {
                _this23.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
                  data: 'Something went wrong. Please contact the support team'
                });
              }
            });
          });
        }
      }]);

      return TakeOrderComponent;
    }();

    TakeOrderComponent.ɵfac = function TakeOrderComponent_Factory(t) {
      return new (t || TakeOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_9__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_10__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]));
    };

    TakeOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TakeOrderComponent,
      selectors: [["app-take-order"]],
      viewQuery: function TakeOrderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfTable = _t.first);
        }
      },
      inputs: {
        orderData: "orderData"
      },
      outputs: {
        "return": "return"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "bill-wrapper", 4, "ngIf"], [1, "container", 3, "formGroup"], [1, "card-container"], [1, "business-card"], [1, "business-information"], [1, "business-image"], ["mat-card-image", "", 3, "src"], ["itemSize", "50", 1, "products"], ["class", "products-card", 4, "ngFor", "ngForOf"], ["id", "order"], ["pdfTable", ""], [1, "information"], ["matInput", "", "formControlName", "address"], ["mat-button", "", "color", "primary", 3, "click"], [1, "selected-products"], ["itemSize", "10", 1, "selected-products-scroll"], [4, "ngFor", "ngForOf"], [1, "card-buttons-container"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "products-card"], [1, "product-information"], [1, "product-selector"], [1, "amount-input"], ["matInput", "", "type", "number", "value", "0", "min", "0", 3, "max"], ["amount", ""], ["color", "primary", 3, "change"], ["checkbox", ""], [1, "bill-wrapper"], [3, "products", "client", "sender", "total", "loading", "submitBill", "toggleBill"]],
      template: function TakeOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TakeOrderComponent_div_0_Template, 74, 16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TakeOrderComponent_div_1_Template, 2, 5, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.bill);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_19__["BillComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.container   [_nghost-%COMP%] {\n  height: 100%;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  width: 100%;\n}\nmat-card.mat-card[_ngcontent-%COMP%] {\n  width: 80%;\n}\nmat-card.mat-card[_ngcontent-%COMP%]   mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  color: #039ccf;\n}\n.business-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.business-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: left;\n}\n.business-information[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\n.business-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  align-items: right;\n  margin: auto;\n  margin-top: 10%;\n  margin-left: 10%;\n}\n.business-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  max-width: 80px;\n  max-height: 80px;\n}\n.products-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row;\n  margin-bottom: 15px;\n}\n.product-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: left;\n  align-items: left;\n  margin: auto;\n}\n.product-information[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 4px 0 2px 0;\n}\n.product-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: right;\n  align-items: right;\n  margin: auto;\n}\n.product-selector[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.amount-input[_ngcontent-%COMP%] {\n  max-width: 25px;\n  margin: 0;\n}\n.amount-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.products[_ngcontent-%COMP%] {\n  margin: 0 1em;\n  margin-top: 15px;\n  width: 90%;\n  height: 170px;\n}\n.information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.selected-products[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-flow: column;\n  justify-content: left;\n  align-items: left;\n}\n.selected-products-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: space-around;\n}\n.card-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 5%;\n  width: 100vw;\n}\n.bill-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvdGFrZS1vcmRlci90YWtlLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWtlLW9yZGVyL3Rha2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtBQ0VKO0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLFVBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNFLG1CQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURJQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDREY7QURFRTtFQUNFLFVBQUE7QUNBSjtBREdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90YWtlLW9yZGVyL3Rha2Utb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMywgMTU2LCAyMDcpO1xuICB9XG59XG5cbi5idXNpbmVzcy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnVzaW5lc3MtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBzcGFuIHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICB9XG59XG5cbi5idXNpbmVzcy1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICB9XG59XG5cbi5wcm9kdWN0cy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWZsb3c6IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2R1Y3QtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgbWFyZ2luOiBhdXRvO1xuICBzcGFuIHtcbiAgICBtYXJnaW46IDRweCAwIDJweCAwO1xuICB9XG59XG5cbi5wcm9kdWN0LXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuLmFtb3VudC1pbnB1dCB7XG4gIG1heC13aWR0aDogMjVweDtcbiAgbWFyZ2luOiAwO1xuICBkaXYge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5wcm9kdWN0cyB7XG4gIG1hcmdpbjogMCAxZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uc2VsZWN0ZWQtcHJvZHVjdHMge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuLnNlbGVjdGVkLXByb2R1Y3RzLXNjcm9sbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNhcmQtYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmJpbGwtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY29udGFpbmVyIDpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQubWF0LWNhcmQge1xuICB3aWR0aDogODAlO1xufVxubWF0LWNhcmQubWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzAzOWNjZjtcbn1cblxuLmJ1c2luZXNzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idXNpbmVzcy1pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uYnVzaW5lc3MtaW5mb3JtYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbi5idXNpbmVzcy1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uYnVzaW5lc3MtaW1hZ2UgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xufVxuXG4ucHJvZHVjdHMtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1mbG93OiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wcm9kdWN0LWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9kdWN0LWluZm9ybWF0aW9uIHNwYW4ge1xuICBtYXJnaW46IDRweCAwIDJweCAwO1xufVxuXG4ucHJvZHVjdC1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9kdWN0LXNlbGVjdG9yIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYW1vdW50LWlucHV0IHtcbiAgbWF4LXdpZHRoOiAyNXB4O1xuICBtYXJnaW46IDA7XG59XG4uYW1vdW50LWlucHV0IGRpdiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0cyB7XG4gIG1hcmdpbjogMCAxZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uc2VsZWN0ZWQtcHJvZHVjdHMge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuLnNlbGVjdGVkLXByb2R1Y3RzLXNjcm9sbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNhcmQtYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmJpbGwtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TakeOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-take-order',
          templateUrl: './take-order.component.html',
          styleUrls: ['./take-order.component.scss']
        }]
      }], function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_9__["DashboardService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_10__["Apollo"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }];
      }, {
        pdfTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['pdfTable', {
            "static": false
          }]
        }],
        orderData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        "return": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _mutations_updateUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mutations/updateUser */
    "./src/app/mutations/updateUser.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function UserProfileComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 17);
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(service, apollo, router, dialog, location) {
        _classCallCheck(this, UserProfileComponent);

        this.service = service;
        this.apollo = apollo;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
          currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm.controls['name'].setValue(this.service.userData.name);
          this.userForm.controls['username'].setValue(this.service.userData.username);
          this.userForm.controls['email'].setValue(this.service.userData.email);
          this.userForm.controls['country'].setValue(this.service.userData.country);
          this.userForm.controls['type'].setValue(this.service.userData.type);
          this.userForm.controls['file'].setValue(this.service.userData.fileUrl);
          this.userForm.controls['address'].setValue(this.service.userData.address);
          this.imageUrl = this.userForm.value.file;
        }
      }, {
        key: "onChangeFile",
        value: function onChangeFile(event) {
          var _this24 = this;

          var reader = new FileReader();
          this.userForm.controls['file'].setValue(event.target.files);
          reader.readAsDataURL(this.userForm.value.file[0]);

          reader.onload = function () {
            _this24.imageUrl = reader.result;
            console.log(_this24.imageUrl);
          };
        }
      }, {
        key: "update",
        value: function update() {
          var _this25 = this;

          if (this.userForm.value.file != this.service.userData.fileUrl) {
            this.service.removeFile(this.service.userData.fileUrl);
            this.service.uploadFile(this.userForm.value.file[0], this.service.userData.username).subscribe(function (e) {
              e.ref.getDownloadURL().then(function (value) {
                _this25.updateUser(value);
              });
            });
          } else {
            this.updateUser(this.service.userData.fileUrl);
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser(fileUrl) {
          var _this26 = this;

          var _a = this.userForm.value,
              currentPassword = _a.currentPassword,
              filteredData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["currentPassword"]);
          var file = filteredData.file,
              data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(filteredData, ["file"]);
          var userData = Object.assign(Object.assign({}, data), {
            password: this.userForm.value.password,
            fileUrl: fileUrl
          });
          this.apollo.mutate({
            mutation: _mutations_updateUser__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER"],
            variables: {
              where: {
                _id: this.service.userData._id
              },
              userData: userData,
              currentPassword: this.userForm.value.currentPassword
            }
          }).toPromise().then(function (response) {
            if (response.data) {
              _this26.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                data: 'User updated successfully'
              });

              _this26.router.navigate(['dashboard/summary']);

              _this26.service.userData = response.data.updateUser;
            }
          })["catch"](function (err) {
            var error = err.message.split(':')[1];

            _this26.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
              data: error
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 43,
      vars: 4,
      consts: [["mode", "determinate", "value", "uploadPercent", 4, "ngIf"], [1, "card"], [1, "user-data", 3, "formGroup", "ngSubmit"], [1, "image-wrapper"], ["alt", "Profile Photo", 3, "src", "click"], ["type", "file", "accept", "image/*", 1, "custom-file-input", 3, "change"], ["fileInput", ""], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "text", "formControlName", "username"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "currentPassword"], ["matInput", "", "type", "password", "formControlName", "password"], ["matInput", "", "type", "text", "formControlName", "country"], ["matInput", "", "type", "text", "formControlName", "address"], ["matInput", "", "type", "text", "formControlName", "type", "readonly", ""], ["type", "submit", "mat-button", "", "color", "primary", 3, "disabled"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], ["mode", "determinate", "value", "uploadPercent"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserProfileComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_2_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileComponent_Template_img_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_5_listener($event) {
            return ctx.onChangeFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Current Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_41_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadPercent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"]],
      styles: [".card[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 100px;\n  width: 60vw;\n  height: 100%;\n}\n\n.user-data[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 4vh;\n  margin-top: 2vh;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 70px;\n  min-height: 80px;\n  max-width: 100px;\n  max-height: 100px;\n  background-color: #dadada;\n  border-radius: 100%;\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.custom-file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsaWFzL0RvY3VtZW50cy9wcm9qZWN0cy9kZWxpdmVyeS1hcHAvY2xpZW50L3NyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxlQUFBO0FDRU47O0FER0E7RUFDRSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udXNlci1kYXRhIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcblxuICBpbWcge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIuY2FyZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51c2VyLWRhdGEge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuLmltYWdlLXdyYXBwZXIgaW1nIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5pbWFnZS13cmFwcGVyIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils.ts":
  /*!**************************!*\
    !*** ./src/app/utils.ts ***!
    \**************************/

  /*! exports provided: setAccessToken, getAccessToken */

  /***/
  function srcAppUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setAccessToken", function () {
      return setAccessToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccessToken", function () {
      return getAccessToken;
    });

    var accessToken = '';

    var setAccessToken = function setAccessToken(token) {
      accessToken = token;
    };

    var getAccessToken = function getAccessToken() {
      return accessToken;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyDYoeSx7TdFjS7LY3lT5uEO5LIi0m_85Dc',
        authDomain: 'delivery-app-73352.firebaseapp.com',
        databaseURL: 'https://delivery-app-73352.firebaseio.com',
        projectId: 'delivery-app-73352',
        storageBucket: 'delivery-app-73352.appspot.com',
        messagingSenderId: '972811880933',
        appId: '1:972811880933:web:404bfcc550b8613904870c',
        measurementId: 'G-Z6H7C3QEYQ'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/elias/Documents/projects/delivery-app/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map