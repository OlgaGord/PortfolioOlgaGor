webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/testButton.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/testButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\nclass TestButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props);this.testWrite=this.testWrite.bind(this);this.testStop=this.testStop.bind(this);this.myRef=react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();this.state={value:'',intervalId:null};}testWrite(){//alert(\"Great Write!\");\nvar i=0;var txt='Lorem ipsum dummy text blabla.';var speed=200;function write(){if(i<txt.length){this.myRef.current.value+=txt.charAt(i);i++;}else{this.myRef.current.value='';i=0;}//setTimeout(write, speed);\n}write=write.bind(this);this.setState({intervalId:setInterval(write,speed)});}testStop(){clearInterval(this.state['intervalId']);console.log(this.state['intervalId']);}render(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\",{type:\"text\",ref:this.myRef,onMouseOver:this.testWrite,onMouseLeave:this.testStop}));}}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(TestButton));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanM/NWNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuXHJcblxyXG5jbGFzcyBUZXN0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGVzdFdyaXRlID0gdGhpcy50ZXN0V3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlc3RTdG9wID0gdGhpcy50ZXN0U3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIGludGVydmFsSWQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdyaXRlKCkge1xyXG4gICAgICAvL2FsZXJ0KFwiR3JlYXQgV3JpdGUhXCIpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICB2YXIgdHh0ID0gJ0xvcmVtIGlwc3VtIGR1bW15IHRleHQgYmxhYmxhLic7XHJcbiAgICAgICAgICB2YXIgc3BlZWQgPSAyMDA7XHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdyaXRlKCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHR4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmVmLmN1cnJlbnQudmFsdWUgKz0gdHh0LmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmVmLmN1cnJlbnQudmFsdWUgPScnO1xyXG4gICAgICAgICAgICAgICAgICAgIGk9MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL3NldFRpbWVvdXQod3JpdGUsIHNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHdyaXRlID0gd3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQ6IHNldEludGVydmFsKHdyaXRlLCBzcGVlZClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RTdG9wKCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlWydpbnRlcnZhbElkJ10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVbJ2ludGVydmFsSWQnXSk7XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17dGhpcy5teVJlZn0gb25Nb3VzZU92ZXI9e3RoaXMudGVzdFdyaXRlfSBvbk1vdXNlTGVhdmU9e3RoaXMudGVzdFN0b3B9Lz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy50ZXN0V3JpdGV9PlN1Ym1pdDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRlc3RCdXR0b24pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/testButton.js\n");

/***/ })

})