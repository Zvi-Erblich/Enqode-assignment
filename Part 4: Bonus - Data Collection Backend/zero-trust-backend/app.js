const express = require("express");
const app = express();
const dataRoutes = require("./routes/dataRoutes");
const cors = require("cors");
app.options("*", cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use("/api/data", dataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
