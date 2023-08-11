const express = require("express")
const app = express();
require('dotenv').config();

const port = process.env.PORT;
console.log(process.env.PORT);
require("./configs/mongoose.config")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./routes/joke.routes")(app)

app.listen(port, ()=>console.log('Listening on port: 8000'))