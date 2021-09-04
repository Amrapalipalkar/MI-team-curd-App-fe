import { makeStyles} from '@material-ui/core';
import IPL from "../assets/images/IPL.jpg";

const useStyle = makeStyles({
    image: {
        width: '73%'
    },
    div: {
        background: '#3792cd'
    }
})


const Home = () => {

    const classes = useStyle();
    
  return (
      <div className={classes.div}>
      <h1 align='center'>Let's Make Your Team</h1>
      <p align='center'>
      <img className={classes.image} src={IPL}/>
      </p>
      </div>
  ); 
};

export default Home;
