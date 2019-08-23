webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/index.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./packages/mars-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/components/post.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404.js */ \"./packages/mars-theme/src/components/page404.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ \"./packages/mars-theme/src/components/loading.js\");\n/* harmony import */ var _frontImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frontImage */ \"./packages/mars-theme/src/components/frontImage.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/style.css */ \"./packages/mars-theme/css/style.css\");\nfunction _templateObject3(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction:row;\\n  justify-content: center;\\n   \\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: left;\\n  flex-direction: column;\\n  \\n  \\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto,\\n      \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n      background-image: linear-gradient(to bottom right, \",\", \",\");\\n      background-repeat: no-repeat;\\n      \\n  }\\n  a,\\n  a:visited {\\n    color: white;\\n    text-decoration: none;\\n  }\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}//import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';\nvar backColor=\"#3a151c\";var backColor2=\"#805f58\";var globalStyles=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject(),backColor,backColor2);var Theme=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\",{name:\"viewport\",content:\"width=device-width, initial-scale=1, shrink-to-fit=no\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(globalStyles,_css_style_css__WEBPACK_IMPORTED_MODULE_9__[\"default\"])}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null),data.isHome&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_frontImage__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,data.isFetching&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),data.is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));var HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz84MWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZTQwNCBmcm9tIFwiLi9wYWdlNDA0LmpzXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgRnJvbnRJbWFnZSBmcm9tIFwiLi9mcm9udEltYWdlXCI7XG5pbXBvcnQgY3VzdG9tU3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9zdHlsZS5jc3MnO1xuLy9pbXBvcnQgYm9vdHN0cmFwU3R5bGVzIGZyb20gJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmNvbnN0IGJhY2tDb2xvciA9IFwiIzNhMTUxY1wiO1xuY29uc3QgYmFja0NvbG9yMiA9IFwiIzgwNWY1OFwiO1xuXG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR7YmFja0NvbG9yfSwgJHtiYWNrQ29sb3IyfSk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgXG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3N0YXRlLmZyb250aXR5LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3N0YXRlLmZyb250aXR5LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIj48L21ldGE+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cblxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIDxHbG9iYWwgc3R5bGVzPXtjc3MoZ2xvYmFsU3R5bGVzLCBjdXN0b21TdHlsZXMsIGJvb3RzdHJhcFN0eWxlcyl9IC8+ICovfVxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2NzcyhnbG9iYWxTdHlsZXMsIGN1c3RvbVN0eWxlcyl9IC8+XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAge2RhdGEuaXNIb21lICYmIChcbiAgICAgICAgICA8RnJvbnRJbWFnZSAvPiBcbiAgICAgICApfSAgXG4gICAgICAgIFxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuICAgICAgPEJvZHk+XG4gICAgICAgICAgXG4gICAgICAgIHtkYXRhLmlzRmV0Y2hpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiA8TGlzdCAvPn1cbiAgICAgICAge2RhdGEuaXNQb3N0VHlwZSAmJiA8UG9zdCAvPn1cbiAgICAgICAge2RhdGEuaXM0MDQgJiYgPFBhZ2U0MDQgLz59XG4gICAgICA8L0JvZHk+XG4gICAgXG4gICAgICBcbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIFxuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbmA7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/index.js\n");

/***/ })

})