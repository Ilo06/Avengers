const express = require("express");
const cors = require("cors");        
const characterRoutes = require("./routes/characterRoutes");

const app = express();
const port = 8080;


app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use("/", characterRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
