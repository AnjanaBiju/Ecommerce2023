const express = require('express')
const app = express()
const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")
const userRoute = require("./userRoutes")
const orderRoute = require("./orderRoutes")

app.use("/products",productRoutes);
app.use("/category",categoryRoutes);
app.use("/user",userRoute);
app.use("/order",orderRoute);
module.exports = app