import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


const Add = () => {
  
    var[data,setData] = useState({sname:'',grade:''});
    // var [out,setOut] = useState([])
    const inputHandler =(e)=>{
        const {name,value}=e.target;
        setData((data)=>({...data,[name]:value}))
    }
    const addhandler = () =>{
        axios.post('http://localhost:3005/add',data)
        .then((res)=>{
          console.log(res);
          alert(res.data)
        })
        // setOut((out)=>[...out,data]);
        // console.log(out)
    }

  return (
    <div>
      <h4> Add Student Details </h4>
      {/* <TextField 
      onChange={inputHandler}
      name='id'
      value={data.sname} 
      type='number' label='id' variant='outlined'/><br /><br />
       */}
       <TextField 
      onChange={inputHandler}
      name='sname'
      value={data.sname}
      type='text' label='Name' variant='outlined'/><br /><br />
      <TextField 
      onChange={inputHandler}
      name='grade'
      value={data.grade}
      type='text' label='Grade' variant='outlined'/><br /><br />
      <Button 
      onClick={addhandler}
      variant='contained' color='success' >Submit</Button>
      
    </div>
  )
}

export default Add
