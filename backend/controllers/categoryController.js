const Category = require('../models/categoryModel')

const getCategories = async (req, res) => {
    console.log("In category ");
    try{
        console.log("In try ");
        const category = await Category.find({}).sort({name:'asc'}).orFail() // if the curly braces is empty it will fetch all the categories from the db
        res.json(category,'Categories')
        console.log("End of try ");
    }catch(error){
        next(error)
    }
}
module.exports = getCategories