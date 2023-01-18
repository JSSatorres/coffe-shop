require ("dotenv").config()

const app = require("./server");
const {dbConnection} = require ("./database/config")

dbConnection()

app.listen(process.env.PORT, () => {
  console.log("the server is up");
});
