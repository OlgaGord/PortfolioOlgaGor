webpackHotUpdate("portfolio",{

/***/ "./packages/mars-theme/src/components/testButton.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/testButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject(){var data=_taggedTemplateLiteral([\"\\nmargin: 1%;\\n  & > input {\\n      width: 18rem;\\n  }\\n  \\n \\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}class TestButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props);this.testWrite=this.testWrite.bind(this);this.testStop=this.testStop.bind(this);this.myRef=react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();this.state={value:'',intervalId:null,i:0};}testWrite(){//alert(\"Great Write!\");\nvar i=this.state['i'];var txt=' Search the photos of you favorite food';var speed=50;function write(){if(i<txt.length){this.myRef.current.value+=txt.charAt(i);i++;this.setState({i:i});}else{this.myRef.current.value='';i=0;this.setState({i:i});}//setTimeout(write, speed);\n}write=write.bind(this);this.setState({intervalId:setInterval(write,speed)});}testStop(){clearInterval(this.state['intervalId']);console.log(this.state['intervalId']);}render(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\",{type:\"text\",ref:this.myRef,onMouseOver:this.testWrite,onMouseLeave:this.testStop,id:\"somethingSearch\"}));}}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(TestButton));var Container=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Rlc3RCdXR0b24uanM/NWNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuXHJcblxyXG5jbGFzcyBUZXN0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGVzdFdyaXRlID0gdGhpcy50ZXN0V3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlc3RTdG9wID0gdGhpcy50ZXN0U3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIGludGVydmFsSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGk6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdyaXRlKCkge1xyXG4gICAgICAvL2FsZXJ0KFwiR3JlYXQgV3JpdGUhXCIpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIgaT10aGlzLnN0YXRlWydpJ107XHJcbiAgICAgICAgICB2YXIgdHh0ID0gJyBTZWFyY2ggdGhlIHBob3RvcyBvZiB5b3UgZmF2b3JpdGUgZm9vZCc7XHJcbiAgICAgICAgICB2YXIgc3BlZWQgPSA1MDtcclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGUoKXtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgdHh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZWYuY3VycmVudC52YWx1ZSArPSB0eHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2k6aX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmVmLmN1cnJlbnQudmFsdWUgPScnO1xyXG4gICAgICAgICAgICAgICAgICAgIGk9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpOml9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL3NldFRpbWVvdXQod3JpdGUsIHNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHdyaXRlID0gd3JpdGUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQ6IHNldEludGVydmFsKHdyaXRlLCBzcGVlZClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U3RvcCgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZVsnaW50ZXJ2YWxJZCddKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlWydpbnRlcnZhbElkJ10pO1xyXG4gICAgfSBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXt0aGlzLm15UmVmfSBvbk1vdXNlT3Zlcj17dGhpcy50ZXN0V3JpdGV9IG9uTW91c2VMZWF2ZT17dGhpcy50ZXN0U3RvcH0gaWQ9XCJzb21ldGhpbmdTZWFyY2hcIi8+XHJcbiBcclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy50ZXN0V3JpdGV9PlN1Ym1pdDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRlc3RCdXR0b24pO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxubWFyZ2luOiAxJTtcclxuICAmID4gaW5wdXQge1xyXG4gICAgICB3aWR0aDogMThyZW07XHJcbiAgfVxyXG4gIFxyXG4gXHJcbmA7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQWNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/testButton.js\n");

/***/ })

})