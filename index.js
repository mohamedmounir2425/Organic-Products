const express = require("express");
const Stripe=require("stripe")('sk_test_51MfhZDKLHH1zB4uIsl6tJdflFoCiJtda4aJWksZlmXT9UJn01wLLo5ApyYiKsux3uofPj52dnSAaMMinZrnVuc9000rA14KXdJ');

const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
require ("dotenv").config();

const signupRouter=require('./route/signup');  
const loginRouter=require("./route/login") ;
const fruitsRouter=require("./route/fruits");
const vegetableRouter=require("./route/vegetable");
const herbalRouter=require("./route/herbals");
const meatRouter=require("./route/meat");
const milkRouter=require("./route/milk");
const mealsRouter=require("./route/meals");
const diseasesRouter=require("./route/diseases");
const allProducts=require("./route/allProducts");
// const payment=require("./route/payment");
const smallBox=require("./route/smallBox");
const mediumBox=require("./route/mediumBox");
const largeBox=require("./route/largeBox");

//routes
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/fruits",fruitsRouter);
app.use("/vegetable",vegetableRouter);
app.use("/herbals",herbalRouter);
app.use("/meat",meatRouter);
app.use("/milk",milkRouter);
app.use("/meals",mealsRouter);
app.use("/diseases",diseasesRouter);
app.use("/all",allProducts);
// app.use("/payment",payment);
app.use("/smallBox",smallBox);
app.use("/mediumBox",mediumBox);
app.use("/largeBox",largeBox);
app.post("/payment",async (req,res)=>{
    const {amount}=req.body;
    console.log(amount)
try {
    const paymentIntent=await Stripe.paymentIntent.create({
        amount,
        currency:"usd"
    })
    console.log(paymentIntent.client_secret);
    res.status(200).send(paymentIntent.client_secret);

} catch (error) {
    res.status(500).json({message:error.message})
}})
//database 
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

//server
app.listen(8000,(error)=>{
    if(!error) return console .log("server is starting....");
    console.log(error);
})