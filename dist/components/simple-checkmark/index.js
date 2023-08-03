"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCheckMark = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SimpleCheckMark = function (props) {
    var strokeWidth = props.size > 4 || props.size <= 0 ? 4 : props.size;
    var strokeLinecap = props.endgeRounded ? "round" : "square";
    var strokeLinejoin = props.endgeRounded ? "round" : "miter";
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("svg", { className: "simple-checkmark-animated-check", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { style: {
                    stroke: props.checkMarkColor,
                    strokeWidth: strokeWidth,
                    animation: "simple-checkmark-draw ".concat(props.animationSpeed, "s linear forwards"),
                    strokeLinecap: strokeLinecap,
                    strokeLinejoin: strokeLinejoin,
                }, d: "M4.1 12.7L9 17.6 20.3 6.3", fill: "none", className: "simple-checkmark-path" }) }) }));
};
exports.SimpleCheckMark = SimpleCheckMark;
//# sourceMappingURL=index.js.map