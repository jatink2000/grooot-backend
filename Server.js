
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
let productschema=require("./model/Products")




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


// Forgot ---------------
app.post("/Forgot",async(req,res)=>{
   let updatedata=await Userschema.findOneAndUpdate({_id:req.body.currentuser._id},{ $set: { password:req.body.Forgot.password } })


   if(updatedata){
        res.json({
            status:true,
            msg:"password Update",
        })
    }
    else{
        res.json({
            status:false,
            msg:"failed password Update"
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
