const mongoose =require("mongoose");
const bcrypt = require("bcrypt");
const salt = 9;
const UserShema = new mongoose.Schema({
  email:String,
  username:String,
  firs_name:String,
  last_name:String,
  password:String,
  address:String,
  role:{
    type:Number, //1- administrator
    default:2  //2- polzpvatel saita
  }
})

const  User =  mongoose.model("User", UserShema);

module.exports = User;
module.exports.register = ( data, callback)=>{
  bcrypt.hash(data.password, salt, (err, hash)=>{
    if (err) return callback(err);
    else{
      let userData = data;
      userData.password=hash;
      let newUser = new User(userData);
      newUser.save(callback);
    }
  })
  //let newUser = new User (data);
}

module.exports.login = (data, callback) =>{
  User.findOne({email:data.email},(err, user) =>{
    if(err) return callback(err, null);
    if(!user) return callback(null, null);
    if(user){
      bcrypt.compare(data.password, user.password, (err, result)=>{
        if(err) return callback(err, null);
        if(result==true) return callback(null, user);
        if(result==false) return callback(null, null);
      })
    }

  });
}
