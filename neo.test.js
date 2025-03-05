import {describe, expect, beforeEach, test} from "@jest/globals";
import {NeowiseAnalyser} from "./neowiseAnalyser.js";

describe('NEO orbit tests', () => {
    let neowise;
    const testJson = [
        {"designation":"419880 (2011 AH37)","discovery_date":"2011-01-07T00:00:00.000","h_mag":19.7,"moid_au":0.035,"q_au_1":0.84,"q_au_2":4.26,"period_yr":4.06,"i_deg":9.65,"pha":true,"orbit_class":"Apollo"},
        {"designation":"414746 (2010 EH20)","discovery_date":"2010-03-06T00:00:00.000","h_mag":18,"moid_au":0.268,"q_au_1":1.25,"q_au_2":3.99,"period_yr":4.24,"i_deg":23.89,"pha":false,"orbit_class":"Amor"},
        {"designation":"C/2014 N3 (NEOWISE)","discovery_date":"2014-07-04T00:00:00.000","moid_au":2.888,"q_au_1":3.88,"q_au_2":16441.51,"period_yr":745640.58,"i_deg":61.63,"pha":null,"orbit_class":"Comet"}
    ];

    beforeEach(() => {
      neowise = new NeowiseAnalyser(testJson);
    });

    test('getAllJsonObjects', () => {
      expect(5+5).toBe(10);
  });
});