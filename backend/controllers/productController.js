const Category = require("../models/categoryModel")
const Product = require("../models/productModel")

const getProduct = async (req,res) =>{
    Product.create({name:"Panasonic"})
    res.send("Product page")
}
module.exports = getProduct;