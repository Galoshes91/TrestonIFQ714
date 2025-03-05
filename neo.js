const fs = require('fs');
const data = fs.readFileSync('./NEOWISE_Dataset.json', 'utf8');
const jsonData = JSON.parse(data);

//printNeo(getJsonProperty("orbit_class", "Aten"));
//const x = getNeoByDates('2015-01-01', '2015-12-31');
//printArrayToJson(x, 'dates');

printNeoByOrbitClass();

/**
 * Gets ALL json data.
 * NOTE: may remove function at a future date if it proves to be
 * not necessary
 */
function getAllJsonObjects() {
    return jsonData;
}

/**
 * Gets json object at the given index value.
 * NOTE: may remove function at a future date if it proves to be
 * not necessary
 */
function getJsonIndex(indexValue) {
    return jsonData[indexValue];
}

/**
 * Retrieves ALL json objects where the given property name (eg 'designation')
 * matches the given value. Primarily used for other search functions
 */
function getJsonProperty(propertyName, value) {
    return jsonData.filter((element) => {
        return element[propertyName] === value;
    });
}

/**
 * Retrieves ALL NEOs with the designation of the given value
 */
function getNeoByDesignation(value) {
    return getJsonProperty("designation", value);
}

/**
 * Retrieves ALL NEOs with the orbit class of the given value
 */
function getNeoByOrbitClass(value) {
    return getJsonProperty("orbit_class", value);
}

function printNeoByOrbitClass() {
    let arrObj = {};
    const uniqueValues = [];
    jsonData.forEach((element) => {
        if(!uniqueValues.includes(element['orbit_class'])) {
            uniqueValues.push(element['orbit_class']);
        }
    });

    uniqueValues.forEach((uv) => {
        arrObj[uv] = jsonData.filter((e) => {
            return e['orbit_class'] === uv;
        });
    });

    console.info("Printing to json file...");
    const fileName = printArrayToJson(arrObj, 'orbit_class');
    console.info(`...Done! Printed to ${fileName}`);
}

/**
 * Retrieves ALL NEOs with the PHA of the given value (true or false)
 */
function getNeoByPha(value) {
    return getJsonProperty("pha", value);
}

/**
 * Gets all NEOs with discovery dates in between the given min and max dates, inclusive
 */
function getNeoByDates(minDate, maxDate) {
    return jsonData.filter((element) => {
        const elementDate = Date.parse(element['discovery_date']);
        return elementDate >= Date.parse(minDate) && elementDate <= Date.parse(maxDate);
    });
}

/**
 * Helper function that prints the given object array to the screen
 * in a readable table format
 */
function printNeo(objectArr) {
    console.table(objectArr);
}

function printArrayToJson(arr, fileName) {
    const fileStr = `./NEO_${fileName}_output.json`;
    fs.writeFileSync(fileStr, JSON.stringify(arr));
    return fileStr;
}
