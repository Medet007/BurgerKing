const mongoose =require("mongoose");
const ProduktsShema = new mongoose.Schema({
    name:String,
    price:Number,
    amount:Number,
    description:String
})

const Product = new mongoose.model("Product", ProduktsShema);

module.exports=Product;
module.exports.add =(data, callback)=>{
  let product = new Product (data);
  product.save(callback);
}

module.exports.getAll = (callback) =>{
  Product.find({},(err, products)=>{
    if (err) return callback(err, null);
    else return callback (null, products);
  })
}

module.exports.updateOne = (data, callback) => {
  Product.findByIdAndUpdate(data._id, data, callback);
}

module.exports.deleteOneProduct = (data, callback) => {
  Product.deleteOne({_id:data._id}, callback);
}
