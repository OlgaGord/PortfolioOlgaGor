webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/testButton.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/testButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\nclass TestButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props);this.testWrite=this.testWrite.bind(this);this.testStop=this.testStop.bind(this);this.myRef=react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();this.state={value:'',intervalId:null};}testWrite(){//alert(\"Great Write!\");\nvar i=0;var txt=' Lorem ipsum dummy text blabla.';var speed=100;function write(){if(i<txt.length){this.myRef.current.value+=txt.charAt(i);i++;}else{this.myRef.current.value='';i=0;}//setTimeout(write, speed);\n}write=write.bind(this);this.setState({intervalId:setInterval(write,speed)});}testStop(){clearInterval(this.state['intervalId']);console.log(this.state['intervalId']);}render(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\",{type:\"text\",ref:this.myRef,onMouseOver:this.testWrite,onMouseLeave:this.testStop}));}}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(TestButton));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanM/NWNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuXHJcblxyXG5jbGFzcyBUZXN0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGVzdFdyaXRlID0gdGhpcy50ZXN0V3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlc3RTdG9wID0gdGhpcy50ZXN0U3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIGludGVydmFsSWQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdyaXRlKCkge1xyXG4gICAgICAvL2FsZXJ0KFwiR3JlYXQgV3JpdGUhXCIpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICB2YXIgdHh0ID0gJyBMb3JlbSBpcHN1bSBkdW1teSB0ZXh0IGJsYWJsYS4nO1xyXG4gICAgICAgICAgdmFyIHNwZWVkID0gMTAwO1xyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiB3cml0ZSgpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0eHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJlZi5jdXJyZW50LnZhbHVlICs9IHR4dC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJlZi5jdXJyZW50LnZhbHVlID0nJztcclxuICAgICAgICAgICAgICAgICAgICBpPTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy9zZXRUaW1lb3V0KHdyaXRlLCBzcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB3cml0ZSA9IHdyaXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkOiBzZXRJbnRlcnZhbCh3cml0ZSwgc3BlZWQpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U3RvcCgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZVsnaW50ZXJ2YWxJZCddKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlWydpbnRlcnZhbElkJ10pO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3RoaXMubXlSZWZ9IG9uTW91c2VPdmVyPXt0aGlzLnRlc3RXcml0ZX0gb25Nb3VzZUxlYXZlPXt0aGlzLnRlc3RTdG9wfS8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudGVzdFdyaXRlfT5TdWJtaXQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUZXN0QnV0dG9uKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/testButton.js\n");

/***/ })

})