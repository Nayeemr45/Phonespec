require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./src/db/connection");

const indexRoutes = require("./src/routes/index");
const errorRoutes = require("./src/routes/error");

app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://azharimm.tk");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//     next();
// });

app.use("/", indexRoutes);
app.use('*', errorRoutes);

// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
