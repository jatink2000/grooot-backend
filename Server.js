express=require("express")

app=express()


app.listen(5000,()=>{
    console.log("server start at 5000")
})


app.post("/signup",(req,res)=>{
    console.log(req.body)
})



