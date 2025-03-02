const fs = require('fs');
const data = fs.readFileSync('./NEOWISE_Dataset.json', 'utf8');
const jsonData = JSON.parse(data);

printNeo(getJsonProperty("orbit_class", "Aten"));

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

/**
 * Retrieves ALL NEOs with the PHA of the given value (true or false)
 */
function getNeoByPha(value) {
    return getJsonProperty("pha", value);
}

/**
 * Helper function that prints the given object array to the screen
 * in a readable table format
 */
function printNeo(objectArr) {
    console.table(objectArr);
}