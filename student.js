const mongoose = require ("mongoose");
mongoose.connect('mongodb+srv://akhilpariyarath82:akhil@cluster0.xuqhwht.mongodb.net/studentdb?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;
let studentSchema = new Schema({ 
    sname:String,
    grade:String
})

let studentModel = mongoose.model("student",studentSchema)

module.exports= studentModel