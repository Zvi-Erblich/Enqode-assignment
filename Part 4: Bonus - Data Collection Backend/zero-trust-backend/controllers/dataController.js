const { readData, writeData } = require('../models/dataModel');
const { v4: uuidv4 } = require('uuid');

exports.submitData = (req, res) => {
    const newData = { id: uuidv4(), ...req.body };
    const data = readData();
    data.push(newData);
    writeData(data);
    res.status(201).json({ message: 'Data saved successfully', id: newData.id });
};

exports.getData = (req, res) => {
    const data = readData();
    res.json(data);
};
