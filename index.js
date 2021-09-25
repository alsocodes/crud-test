const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
const cors = require("cors")
const { router } = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./models/index")
db.sequelize.sync()

app.use(router)
// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Selamat datang CRUD USER" });
// });


app.listen(port, () => {
    console.log('listening port : ' + port)
})