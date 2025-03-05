const {describe, expect, it} = require('@jest/globals');
const { getJsonProperty, getAllJsonObjects } = require('./neo.js');

describe("Neo.js tests", () => {
    it('eg text', () => {
        expect(getAllJsonObjects()).toBe({})
    });
});
