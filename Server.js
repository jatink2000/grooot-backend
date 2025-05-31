
express=require("express")

app=express()

// cors--------------
cors=require("cors")
app.use(cors()) 


// bodyparser ---------------
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


// our Schema --------------------
let Userschema=require("./model/Users")



// mongodb --------------------
const {mongoose } = require("mongoose")
mongoose.connect("mongodb://localhost:27017/project").then((res)=>{
    console.log("mongodb connect")
}).catch((err)=>{
    console.log(err)
})



// signup api ------------------
app.post("/signup",async(req,res)=>{
   let userdata=await Userschema.insertOne({
        Username:req.body.signdata.Username,
        email:req.body.signdata.email,
        password:req.body.signdata.password,
    })

    let result=await userdata.save()


    if(result){
        res.json({
            status:true,
            msg:"signup success",
        })
    }
    else{
        res.json({
            status:false,
            msg:"failed to signup"
        })
    }
})


// allusers-------------------
app.get("/allusers",async(req,res)=>{
    let userdata=await Userschema.find({})
    if(userdata){
        res.json({
            status:true,
            ourusers:userdata,
        })
    }
    else{
        res.json({
            status:false
        })
    }
})

















app.listen(5000,()=>{
    console.log("server start at 5000")
})
