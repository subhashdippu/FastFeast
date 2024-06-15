const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 6001
const mongoose = require('mongoose')
require('dotenv').config()
const jwt = require("jsonwebtoken");
// middleware
app.use(cors())
app.use(express.json())

// mongodb Configuration
// username: subhashprasad52468
// password: zqLFG7BfIcZjpylo
// console.log(process.env.ACCESS_TOKEN_SECRET)
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ysxrh2h.mongodb.net/FoodAppDb?retryWrites=true&w=majority&appName=Cluster0`)
    .then(console.log("mongodb connected successfully"))
    .catch((error) => console.log("Error connecting to mongodb", error))


// jwt authentication
app.post("/jwt", async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr",
    });
    res.send({ token });
});

// Middleware 
const varifytoken = (req, res, next) => {
    if (!req.header.authorization) {
        return res.status(401).send({ message: "unothesgi" })
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
}

// import routes
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
const userRoutes = require('./api/routes/userRoutes')

app.use("/menu", menuRoutes)
app.use("/carts", cartRoutes)
app.use("/users", userRoutes)


app.get('/', varifytoken, (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})