import {describe, expect, it} from "@jest/globals";
import {NeowiseAnalyser} from "./neowiseAnalyser.js";

describe('test', () => {
    it('test2', () => {
        const x = new NeowiseAnalyser([]);
        expect(x.getAllJsonObjects()).toEqual([]);
    });
});