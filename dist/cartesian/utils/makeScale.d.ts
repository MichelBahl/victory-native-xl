import { type ScaleLinear, scaleLinear, scaleLog, type ScaleLogarithmic } from "d3-scale";
declare const scaleFunctions: {
    linear: typeof scaleLinear;
    log: typeof scaleLog;
};
export type AxisScale = keyof typeof scaleFunctions;
export declare const makeScale: ({ inputBounds, outputBounds, padStart, padEnd, viewport, isNice, axisScale, }: {
    inputBounds: [number, number];
    outputBounds: [number, number];
    viewport?: [number, number];
    padStart?: number;
    padEnd?: number;
    isNice?: boolean;
    axisScale?: keyof typeof scaleFunctions;
}) => ScaleLinear<number, number> | ScaleLogarithmic<number, number>;
export {};
