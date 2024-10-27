const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/zeroTrustData.json');

function readData() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function writeData(newData) {
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
}

module.exports = {
    readData,
    writeData
};
