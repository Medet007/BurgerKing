
//import bibliteka
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const DB = require ("./mongoDB");
mongoose.connect(DB.dev,{useNewUrlParser:true});
const cors = require("cors")// dobavlenia bibliteki DLIA CORS ;
const app = express();
const UserModel = require ("./model/user");
const Product = require ("./model/produkts")
//bazovie nastroiki servera
const PORT = 8000;

//sozdania servera

app.use(cors());
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=>{
})



const LogMiddlewer = (req, res, next) => {
  console.log('request'+ new Date()+',path'+ req.url+",method:"+req.method);
  next();
}
const LogMiddlbeer = (req, res, next) => {
  let  errs= [];
  if (req.body.email==="" || !req.body.email){
    errs.push("empty email")//dobavit oshibku v kode
  }
  if (req.body.username===""|| !req.body.username){
    errs.push("empty username") //
  }
  if(req.body.id === "" || !req.body.id){
    errs.push("empty id")
    }
  if(errs.length==0){ //esli net oshibki
    next();
  }
  else { //esli est oshibki
    res.status(433).send(errs);
  }
}




app.post("/api/register",LogMiddlewer,(req, res)=>{
  UserModel.register(req.body,(err)=>{
    if(err) return res.status(500).send(err);
    else return res.status(200).send({status:"success"});

  })
})

app.post("/api/login", LogMiddlewer,(req,res)=>{
  UserModel.login(req.body,(err, user)=>{
    if (err) return res.status(500).send(err);
    if (!user) return res.status(401).send({status: "false" })
     return res.status(200).send(user);
  })
})

app.post("/api/create_product", LogMiddlewer,  (req, res)=>{
  Product.add(req.body,(err)=>{
    if(err) return res.status(500).send(err);
    else return res.status(200).send({status:"success"});
  })
});

app.post("/api/update_product", LogMiddlewer,  (req, res)=>{
  Product.updateOne(req.body,(err)=>{
    if(err) return res.status(500).send(err);
    else return res.status(200).send({status:"success"});
  })
});

app.get("/api/all_products", LogMiddlewer, (req, res)=>{
  Product.getAll((err, products)=>{
    if(err) return res.status(500).send(err);
    else return res.status(200).send(products);
  })
})

app.post("/api/delete_product", LogMiddlewer, (req, res)=>{
  Product.deleteOneProduct(req.body,(err)=>{
    if(err) return res.status(500).send(err);
    else return res.status(200).send({status:"success"});
  })
})

app.listen(PORT, (err)=>{
  if(err) console.log(err);
  else console.log("server zapushen na porte:" , PORT)
});
