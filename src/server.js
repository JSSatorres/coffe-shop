const express = require("express") ;
const morgan  =require("morgan");
const routerUser =require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(routerUser);

module.exports =app;
