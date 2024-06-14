const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 6001
const mongoose = require('mongoose')
require('dotenv').config()
// middleware
app.use(cors())
app.use(express.json())

// mongodb Configuration
// username: subhashprasad52468
// password: zqLFG7BfIcZjpylo

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ysxrh2h.mongodb.net/FoodAppDb?retryWrites=true&w=majority&appName=Cluster0`)
    .then(console.log("mongodb connected successfully"))
    .catch((error) => console.log("Error connecting to mongodb", error))

// import routes
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
app.use("/menu", menuRoutes)
app.use("/carts", cartRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})