 import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button} from "@material-ui/core";
 import { getPlayers, deleteUser } from "../service/api";
 import react, { useEffect, useState } from "react";
 import {Link} from "react-router-dom";

const useStyles = makeStyles({
    table: {
       width: "90%",
       margin: "40px 0 0 50px"
    },
    thead: {
        '& > *': {
            background: "#3792cd",
            color: "#000000",
            fontSize: 20
        
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
     }
 
})



const AllPlayers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {

        getAllusers();
    },[])

    const getAllusers = async() => {
        const response = await getPlayers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllusers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                <TableCell><strong>ID</strong></TableCell>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Role</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Phone</strong></TableCell>
                    <TableCell></TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                       <TableRow className={classes.row}>
                         <TableCell>{user._id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.role}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.phone}</TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                               <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user._id)}>Delete</Button>
                           </TableCell>

                       </TableRow>
                    )
                 )}
            </TableBody>
        </Table>
    );
}

export default AllPlayers;
