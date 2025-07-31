const express = require("express");
const characterRoutes = require("./routes/characterRoutes");

const app = express();
const port = 8080;

app.use(express.json());
app.use("/", characterRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
