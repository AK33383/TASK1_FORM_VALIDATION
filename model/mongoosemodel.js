const mongoose = require('mongoose')



    const dbURI = 'mongodb+srv://HarryPotter:Harry123@cluster0.i7emufb.mongodb.net/user?retryWrites=true&w=majority'

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>console.log('dbconnected')).catch(err=>console.log(err))

const Schema = {
    name:String,
    email:String,
   
}

const Schema_2 = {
    
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    }

}
    


const mongoosemodel = mongoose.model("Userdata",Schema)
const mongoosemodel_2 = mongoose.model("Formdata",Schema_2)

module.exports = { mongoosemodel, mongoosemodel_2}
