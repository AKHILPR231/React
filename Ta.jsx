import { Button, Table,TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Ta = () => {
  var[details,setDetails] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3005/gg")
    .then((response)=>{
      console.log(response.data);
      setDetails(response.data)
    })
  },[])
  const deleteBtn=(id)=>{
    console.log("id",id)
    axios.delete('http://localhost:3005/rem/'+id)
    .then((res)=>{ 
      alert(res.data)
    })
  }
  return (
    <div>
      <TableContainer>
            <Table style={{backgroundColor:''}}>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Id</b></TableCell>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Grade</b></TableCell>
                        
                        {/* <TableCell><b>Update</b></TableCell>
                        <TableCell><b>Delete</b></TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    {details.map((val,i)=>{
                        return(
                            <TableRow key={i}>
                              <TableCell>{val._id}</TableCell>
                              <TableCell>{val.sname}</TableCell>
                            <TableCell>{val.grade}</TableCell>
                            <TableCell><Button onClick={()=>{deleteBtn(val._id)}}>DELETE</Button></TableCell>
                            {/* <TableCell>{val.place}</TableCell>
                            <TableCell>{val.dep}</TableCell> */}
                            </TableRow>
                            
                        )
                    })}
                    </TableBody>
                
               
            </Table>
        </TableContainer>
    </div>
  )
}

export default Ta
