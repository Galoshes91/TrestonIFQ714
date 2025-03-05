import fs from 'fs';
import {NeowiseAnalyser} from "./neowiseAnalyser.js";
const data = fs.readFileSync('./NEOWISE_Dataset.json', 'utf8');
const jsonData = JSON.parse(data);

//printNeo(getJsonProperty("orbit_class", "Aten"));
//const x = getNeoByDates('2015-01-01', '2015-12-31');
//printArrayToJson(x, 'dates');

const neowise = new NeowiseAnalyser(jsonData);
neowise.printNeoByOrbitClass();

