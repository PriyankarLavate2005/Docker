const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.json({message: 'OK'});
})
app.get('/home',(req,res)=>{
    res.send("Hello ")
})
app.listen(3001,()=>{
    console.log("server Started Sucessfully")
})