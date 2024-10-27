const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

app.use(express.json());
app.use('/api/data', dataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
