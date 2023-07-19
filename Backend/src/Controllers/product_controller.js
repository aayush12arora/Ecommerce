const ProductModel = require('./../Models/product_model');

const ProductController = {

    createProduct: async function(req, res) {
        try {
            const productData = req.body;
            const newProduct = new ProductModel(productData);
            await newProduct.save();

            return res.json({ success: true, data: newProduct, message: "Product created!" });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },

    fetchAllProducts: async function(req, res) {
        try {
            const products = await ProductModel.find();
            return res.json({ success: true, data: products });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },



    fetchProductsByCategory: async function(req, res) {
        try {
            const categoryId = req.params.id;
            const productsFound = await ProductModel.find({category:categoryId});

            if(!productsFound){
                return res.json({success:false,message:"No Products found"});
            }
            return res.json({ success: true, data: productsFound });
        }
        catch(ex) {
            return res.json({ success: false, message: ex });
        }
    },
}
module.exports= ProductController