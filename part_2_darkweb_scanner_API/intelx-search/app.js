require('dotenv').config();
const express = require('express');
const searchRoutes = require('./routes/searchRoutes');


const app = express();
app.use(express.json());

app.use('/', searchRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
