import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Regform = () => {
    var[data,setData] = useState({sname:'',age:'',place:'',dep:''});
    var [out,setOut] = useState([])
    const inputHandler =(e)=>{
        const {name,value}=e.target;
        setData((data)=>({...data,[name]:value}))
        // console.log(data);
    }
    const addhandler = () =>{
        setOut((out)=>[...out,data]);
        console.log(out)
    }
  return (
    <div>
      <Typography>Welcome to Reg Form</Typography><br /><br />
      <TextField 
      onChange={inputHandler}
      name='sname'
      value={data.sname}
      variant='outlined' label="Name"/><br /><br />
      <TextField
      onChange={inputHandler}
      name='age'
      value={data.age}
      variant='outlined' label="Age"/><br /><br />
      <TextField 
      onChange={inputHandler}
      name='place'
      value={data.place}
      variant='outlined' label="place"/><br /><br />
      <TextField 
      onChange={inputHandler}
      name='dep'
      value={data.dep}
      variant='outlined' label="Department"/><br /><br />
      <Button variant='outlined' onClick={addhandler}>Sbmit</Button><br /><br />
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {out.map((val,i)=>{
                        return(
                            <TableRow key={i}><TableCell>{val.sname}</TableCell>
                            <TableCell>{val.age}</TableCell>
                            <TableCell>{val.place}</TableCell>
                            <TableCell>{val.dep}</TableCell>
                            </TableRow>
                            
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>

  )
}

export default Regform
