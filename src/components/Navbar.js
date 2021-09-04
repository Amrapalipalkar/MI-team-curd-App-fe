import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const usestyle = makeStyles({
    header:{
        background: '#000000'
},
    tabs:{
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})

const navbar = () => {
    const classes = usestyle();
    return (
        <div>
              <AppBar className = {classes.header} position="static">
                <Toolbar>
                    <NavLink className={classes.tabs} to="./" exact><h4>Home</h4></NavLink>
                    <NavLink className={classes.tabs} to="all" exact><h4>All Players</h4></NavLink>
                    <NavLink className={classes.tabs} to="add"><h4>Add Player</h4></NavLink>   
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default navbar
