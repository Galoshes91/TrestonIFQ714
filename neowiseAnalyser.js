import fs from 'fs';

export class NeowiseAnalyser {
    jsonData;
    
    constructor(jsonData) {
        this.jsonData = jsonData;
    }
    /**
     *
     * Gets ALL json data.
     * NOTE: may remove at a future date if it proves to be
     * not necessary
     */
    getAllJsonObjects() {
        return this.jsonData;
    }

    /**
     * Gets json object at the given index value.
     * NOTE: may remove at a future date if it proves to be
     * not necessary
     */
    getJsonIndex(indexValue) {
        return this.jsonData[indexValue];
    }

    /**
     * Retrieves ALL json objects where the given property name (eg 'designation')
     * matches the given value. Primarily used for other search functions
     */
    getJsonProperty(propertyName, value) {
        return this.jsonData.filter((element) => {
            return element[propertyName] === value;
        });
    }

    /**
     * Retrieves ALL NEOs with the designation of the given value
     */
    getNeoByDesignation(value) {
        return this.getJsonProperty("designation", value);
    }

    /**
     * Retrieves ALL NEOs with the orbit class of the given value
     */
    getNeoByOrbitClass(value) {
        return this.getJsonProperty("orbit_class", value);
    }

    printNeoByOrbitClass() {
        let arrObj = {};
        const uniqueValues = [];
        this.jsonData.forEach((element) => {
            if(!uniqueValues.includes(element['orbit_class'])) {
                uniqueValues.push(element['orbit_class']);
            }
        });

        uniqueValues.forEach((uv) => {
            arrObj[uv] = this.jsonData.filter((e) => {
                return e['orbit_class'] === uv;
            });
        });

        console.info("Printing to json file...");
        const fileName = this.printArrayToJson(arrObj, 'orbit_class');
        console.info(`...Done! Printed to ${fileName}`);
    }

    /**
     * Retrieves ALL NEOs with the PHA of the given value (true or false)
     */
    getNeoByPha(value) {
        return this.getJsonProperty("pha", value);
    }

    /**
     * Gets all NEOs with discovery dates in between the given min and max dates, inclusive
     */
    getNeoByDates(minDate, maxDate) {
        return this.jsonData.filter((element) => {
            const elementDate = Date.parse(element['discovery_date']);
            return elementDate >= Date.parse(minDate) && elementDate <= Date.parse(maxDate);
        });
    }

    /**
     * Helper that prints the given object array to the screen
     * in a readable table format
     */
    printNeo(objectArr) {
        console.table(objectArr);
    }

    printArrayToJson(arr, fileName) {
        const fileStr = `./NEO_${fileName}_output.json`;
        fs.writeFileSync(fileStr, JSON.stringify(arr));
        return fileStr;
    }
}