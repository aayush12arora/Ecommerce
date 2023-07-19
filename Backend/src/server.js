const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());


mongoose.connect("mongodb+srv://aayush12arora:ecommerce@cluster0.z5ndohx.mongodb.net/ecommerce?retryWrites=true&w=majority")



const UserRoutes = require('./Routes/user_routes')
app.use("/api/user",UserRoutes);

const CategoryRoutes = require('./Routes/category_routes')
app.use("/api/category",CategoryRoutes);


const ProductRoutes = require('./Routes/product_routes')
app.use("/api/products",ProductRoutes);


const CartRoutes = require('./Routes/cart_routes')
app.use("/api/cart",CartRoutes);
app.get("/", function(req,res){
     res.send("Hello");
})



const PORT = 3000;
app.listen(PORT,()=>  console.log("Server started at port "+PORT));
