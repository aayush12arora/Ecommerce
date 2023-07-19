const {Schema,model} = require('mongoose');
 const uuid = require('uuid');
 const bcrypt = require('bcrypt');
 const userSchema = new Schema({
    id: {type :String, unique : true},
    fullName : {type: String,default:""},
    email :{ type:String,requied:true,unique:true},
    password :{ type:String,requied:true},
    phoneNumber:{type: String,default:""},
    address:{type: String,default:""},
    city:{type: String,default:""},
    state:{type: String,default:""},
    profileProgress:{type:Number,default:0}, //0=> just created account   1=> address entered
    updatedOn:{type:Date},
    createdOn:{type:Date},
});


userSchema.pre('save',async function(next){
    this.id= uuid.v1();
    this.createdOn= new Date( );
    this.updatedOn= new Date();
    // hash the password

    const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(this.password,salt);
     this.password= hash;

     next();

});

userSchema.pre(['update','findOneAndUpdate','updateOne'],function(next){
    const update = this.getUpdate();
    delete update.id;
    delete update._id;

    this.updatedOn= new Date();


    next();
});

const UserModel = model('User',userSchema);
module.exports= UserModel;