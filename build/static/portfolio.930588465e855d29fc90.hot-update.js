webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/frontImage.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/frontImage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./packages/mars-theme/src/components/loading.js\");\nfunction _templateObject10(){var data=_taggedTemplateLiteral([\"\\n      transition: transform 1s;\\n      transform-style: preserve-3d;\\n      transform-origin: right center;\\n      width: 100%;\\n      height: 100%;\\n      background-color:grey;\\n      :hover {\\n          transform:rotateY(-90deg);\\n      }\\n\"]);_templateObject10=function _templateObject10(){return data;};return data;}function _templateObject9(){var data=_taggedTemplateLiteral([\"\\n      transition: transform 1s;\\n      transform-style: preserve-3d;\\n      transform-origin: right center;\\n      width: 100%;\\n      height: 100%;\\n      background-color:black;\\n      :hover {\\n          transform:rotateY(-90deg);\\n      }\\n\"]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=_taggedTemplateLiteral([\"\\n      transition: transform 1s;\\n      transform-style: preserve-3d;\\n      transform-origin: right center;\\n      width: 100%;\\n      height: 100%;\\n      background-color:red;\\n      :hover {\\n          transform:rotateY(-90deg);\\n      }\\n\"]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=_taggedTemplateLiteral([\"\\nperspective:@size;\\nposition:absolute;\\nwidth:33.3333%;\\nheight:400px;\\nbackground-color: #fff;\\n\\n\"]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=_taggedTemplateLiteral([\"\\nperspective:@size;\\nposition:absolute;\\nwidth:33.3333%;\\nheight:400px;\\nbackground-color: #fff;\\n\\n\"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=_taggedTemplateLiteral([\"\\nperspective:@size;\\nposition:absolute;\\nwidth:33.3333%;\\nheight:400px;\\nbackground-color: #fff;\\n\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-direction:row;\\n    color: white;\\n    height:400px;\\n    width:33.33333%;\\n\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-direction:row;\\n    width:33.33333%;\\n    color: white;\\n    height:400px;\\n\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-direction:row;\\n    width:33.33333%;\\n    color: black;\\n    height:400px;\\n\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-direction:row;\\n    background:white;\\n    color: black;\\n    height:400px;\\n    width:100%;\\n    \\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}// import React, { useEffect } from \"react\";\nvar frontImage=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);// Get the the post.\nvar post=state.source[data.type][data.id];{console.log(post.acf);}//   useEffect(() => {\n//     actions.source.fetch(\"/\");\n//     List.preload();\n//   }, []);\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container1,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Frame1,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Door1,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\",{src:post.acf.img1.url})))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container2,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Frame2,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Door2,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\",{src:post.acf.img2.url})))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container3,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Frame3,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Door3,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\",{src:post.acf.img3.url})))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(frontImage));var Container=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());var Container1=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var Container2=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());var Container3=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject4());var Frame1=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject5());var Frame2=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject6());var Frame3=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject7());var Door1=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject8());var Door2=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject9());var Door3=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject10());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2Zyb250SW1hZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2Zyb250SW1hZ2UuanM/MTJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZyc7XHJcblxyXG5jb25zdCBmcm9udEltYWdlID0gKHtzdGF0ZX0pID0+IHtcclxuXHJcbmNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuICAvLyBHZXQgdGhlIHRoZSBwb3N0LlxyXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcclxuICB7Y29uc29sZS5sb2cocG9zdC5hY2YpfVxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XHJcbi8vICAgICBMaXN0LnByZWxvYWQoKTtcclxuLy8gICB9LCBbXSk7XHJcbiAgXHJcbiAgcmV0dXJuICAoXHJcbiAgICA8Q29udGFpbmVyPiBcclxuICAgICAgICA8Q29udGFpbmVyMT5cclxuICAgICAgICAgICAgPEZyYW1lMT5cclxuICAgICAgICAgICAgICAgIDxEb29yMT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmFjZi5pbWcxLnVybH0+PC9pbWc+XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L0Rvb3IxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRnJhbWUxPlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcjE+XHJcbiAgICAgICAgPENvbnRhaW5lcjI+XHJcbiAgICAgICAgICAgIDxGcmFtZTI+XHJcbiAgICAgICAgICAgICAgICA8RG9vcjI+XHJcbjxpbWcgc3JjPXtwb3N0LmFjZi5pbWcyLnVybH0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Rvb3IyPlxyXG4gICAgICAgICAgICA8L0ZyYW1lMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db250YWluZXIyPlxyXG4gICAgICAgIDxDb250YWluZXIzPlxyXG4gICAgICAgICAgICA8RnJhbWUzPlxyXG4gICAgICAgICAgICAgICAgPERvb3IzPlxyXG48aW1nIHNyYz17cG9zdC5hY2YuaW1nMy51cmx9PjwvaW1nPiBcclxuICAgICAgICAgICAgICAgIDwvRG9vcjM+XHJcbiAgICAgICAgICAgIDwvRnJhbWUzPlxyXG4gICAgICAgIDwvQ29udGFpbmVyMz5cclxuXHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcbiApIFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0IChmcm9udEltYWdlKTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFpbmVyMSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICB3aWR0aDozMy4zMzMzMyU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcblxyXG5gO1xyXG5jb25zdCBDb250YWluZXIyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIHdpZHRoOjMzLjMzMzMzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDo0MDBweDtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIzID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgIHdpZHRoOjMzLjMzMzMzJTtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBGcmFtZTEgPSBzdHlsZWQuZGl2YFxyXG5wZXJzcGVjdGl2ZTpAc2l6ZTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjMzLjMzMzMlO1xyXG5oZWlnaHQ6NDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgRnJhbWUyID0gc3R5bGVkLmRpdmBcclxucGVyc3BlY3RpdmU6QHNpemU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG53aWR0aDozMy4zMzMzJTtcclxuaGVpZ2h0OjQwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IEZyYW1lMyA9IHN0eWxlZC5kaXZgXHJcbnBlcnNwZWN0aXZlOkBzaXplO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxud2lkdGg6MzMuMzMzMyU7XHJcbmhlaWdodDo0MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBEb29yMSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZyk7XHJcbiAgICAgIH1cclxuYDtcclxuY29uc3QgRG9vcjIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZyk7XHJcbiAgICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERvb3IzID0gc3R5bGVkLmRpdmBcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZyk7XHJcbiAgICAgIH1cclxuYDtcclxuICAgIFxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/frontImage.js\n");

/***/ })

})