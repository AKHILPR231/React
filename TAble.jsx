import { Table,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useState } from 'react'



const TAble = () => {
//    var[value,setData] =useState(props.data)
// console.log(props.nammes)
return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Id</b></TableCell>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Grade</b></TableCell>
                        <TableCell><b>Update</b></TableCell>
                        <TableCell><b>Delete</b></TableCell>
                    </TableRow>
                </TableHead>
               
            </Table>
        </TableContainer>
    </div>
  )
}

export default TAble
