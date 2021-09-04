import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import react, {useState} from 'react';
import {addPlayer} from '../service/api';
import {useHistory} from 'react-router-dom';


  const useStyles = makeStyles({
      container: {
         width: "50%",
         margin: "5% 0 0 25%",
         '& > *': {
             marginTop: 20
         }
      }
  })

  const initialValues = {
      name: "",
      role: "",
      email: "",
      phone: "",
  }

 const AddPlayer = () => {
     const [user, setUser] = useState(initialValues);
     const { name, role, email, phone } = user;
     const classes = useStyles();
     let history = useHistory();

     const onValueChange = (e) => {
         console.log(e.target.value);
       setUser({...user, [e.target.name]: e.target.value })
     }


     const adduserDetails = async () => {
         await addPlayer(user);
         history.push('/all');
     }

    return (
       <FormGroup className={classes.container}>
           <Typography variant="h6"><strong>ADD PLAYER</strong></Typography>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name='name' value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>Role</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name='role' value={role}/>
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name='email' value={email}/>
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name='phone' value={phone}/>
           </FormControl>
           <FormControl>
           <Button variant="contained" onClick={() => adduserDetails()} color="primary" ><strong>ADD PLAYER</strong>
           </Button>
           </FormControl>
       </FormGroup>

    )
}

export default AddPlayer;
