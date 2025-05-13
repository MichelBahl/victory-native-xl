"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeScale = void 0;
const d3_scale_1 = require("d3-scale");
const scaleFunctions = {
    linear: d3_scale_1.scaleLinear,
    log: d3_scale_1.scaleLog,
};
const makeScale = ({ inputBounds, outputBounds, padStart, padEnd, viewport, isNice = false, axisScale = "linear", }) => {
    const scaleFunc = scaleFunctions[axisScale];
    // Linear
    //@ts-ignore
    const viewScale = scaleFunc()
        .domain(viewport !== null && viewport !== void 0 ? viewport : inputBounds)
        .range(outputBounds);
    //@ts-ignore
    const scale = scaleFunc()
        .domain(inputBounds)
        .range([viewScale(inputBounds[0]), viewScale(inputBounds[1])]);
    if (padStart || padEnd) {
        scale
            .domain([
            scale.invert(outputBounds[0] - (padStart !== null && padStart !== void 0 ? padStart : 0)),
            scale.invert(outputBounds[1] + (padEnd !== null && padEnd !== void 0 ? padEnd : 0)),
        ])
            .range(outputBounds);
    }
    if (isNice)
        scale.nice();
    return scale;
};
exports.makeScale = makeScale;
