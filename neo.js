import fs from 'fs';
import {NeowiseAnalyser} from "./neowiseAnalyser.js";
const data = fs.readFileSync('./NEOWISE_Dataset.json', 'utf8');
const jsonData = JSON.parse(data);

const neowise = new NeowiseAnalyser(jsonData);
neowise.printNeoByOrbitClass();

