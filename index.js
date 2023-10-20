const express = require('express');
const studentModel = require('./model/student');
const cors = require('cors')
const app = new express();


app.use (express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//api
app.post('/add',(req,res)=>{
    var result = new studentModel(req.body)
    result.save();
    res.send('data added')
})
app.get('/gg',async(req,res)=>{ 
    var data= await studentModel.find()
    res.send(data)
})
app.delete("/rem/:id",async(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    await studentModel.findByIdAndDelete(id)
    res.send("data deleted")
})

app.listen(3005,()=>{ 
    console.log('port 3005 is up!!')
})