const CategoryModel = require('./../Models/category_model');

const CategoryController = {

    createCategory: async function(req, res) {
        try {
            const categoryData = req.body;
            const newCategory = new CategoryModel(categoryData);
            await newCategory.save();

            return res.json({ success: true, data: newCategory, message: "Category created!" });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },

    fetchAllCategories: async function(req, res) {
        try {
            const categories = await CategoryModel.find();
            return res.json({ success: true, data: categories });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },



    fetchCategoryById: async function(req, res) {
        try {
            const id = req.params.id;
            const categoryFound = await CategoryModel.findById(id);

            if(!categoryFound){
                return res.json({success:false,message:"Category not found"});
            }
            return res.json({ success: true, data: categoryFound });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },
}
module.exports= CategoryController