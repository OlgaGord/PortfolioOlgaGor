webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/testButton.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/testButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\nclass TestButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props);this.testWrite=this.testWrite.bind(this);this.myRef=react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();this.state={value:'',inervalId:null};}testWrite(){//alert(\"Great Write!\");\nvar i=0;var txt='Lorem ipsum dummy text blabla.';var speed=50;function write(){if(i<txt.length){this.myRef.current.value+=txt.charAt(i);i++;}else{this.myRef.current.value='';i=0;}//setTimeout(write, speed);\n}write=write.bind(this);this.setsetInterval(write,speed);}testStop(){}render(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\",{type:\"text\",ref:this.myRef,onMouseOver:this.testWrite,onMouseLeave:this.testStop}));}}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(TestButton));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanM/NWNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuXHJcblxyXG5jbGFzcyBUZXN0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGVzdFdyaXRlID0gdGhpcy50ZXN0V3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBpbmVydmFsSWQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdyaXRlKCkge1xyXG4gICAgICAvL2FsZXJ0KFwiR3JlYXQgV3JpdGUhXCIpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICB2YXIgdHh0ID0gJ0xvcmVtIGlwc3VtIGR1bW15IHRleHQgYmxhYmxhLic7XHJcbiAgICAgICAgICB2YXIgc3BlZWQgPSA1MDtcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGUoKXtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgdHh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZWYuY3VycmVudC52YWx1ZSArPSB0eHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZWYuY3VycmVudC52YWx1ZSA9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaT0wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vc2V0VGltZW91dCh3cml0ZSwgc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgd3JpdGUgPSB3cml0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0c2V0SW50ZXJ2YWwod3JpdGUsIHNwZWVkKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RTdG9wKCl7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3RoaXMubXlSZWZ9IG9uTW91c2VPdmVyPXt0aGlzLnRlc3RXcml0ZX0gb25Nb3VzZUxlYXZlPXt0aGlzLnRlc3RTdG9wfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy50ZXN0V3JpdGV9PlN1Ym1pdDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRlc3RCdXR0b24pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/testButton.js\n");

/***/ })

})