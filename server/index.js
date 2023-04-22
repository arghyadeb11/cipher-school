const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errormiddleware");

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
