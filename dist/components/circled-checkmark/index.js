"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircledCheckMark = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CircledCheckMark = function (props) {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 130.2 130.2", className: "svg ", style: { height: props.height, width: props.width }, children: [(0, jsx_runtime_1.jsx)("circle", { className: "circled-checkmark-path circled-checkmark-circle", fill: "none", stroke: props.circleColor, "stroke-width": "6", "stroke-miterlimit": "10", cx: "65.1", cy: "65.1", r: "62.1" }), (0, jsx_runtime_1.jsx)("polyline", { className: "circled-checkmark-path circled-checkmark-check", fill: "none", stroke: props.checkMarkColor, "stroke-width": "6", "stroke-linecap": "round", "stroke-miterlimit": "10", points: "100.2,40.2 51.5,88.8 29.8,67.5 " })] }) }));
};
exports.CircledCheckMark = CircledCheckMark;
//# sourceMappingURL=index.js.map