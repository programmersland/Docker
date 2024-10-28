const express = require("express");
const user = require("./routers/user")
const app = express();

const port = process.env.EXPRESS_PORT;
const host = process.env.EXPRESS_HOST;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/user", user);

app.listen(port, host, () => {
  console.log(`Server is running on http://localhost:3001`);
  console.log(`Base de datos: ${process.env.MONGO_URI}`);
});