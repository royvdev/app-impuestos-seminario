import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@mui/icons-material/Person';
// import BackButton from './backbutton';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Toolbar style={{position: 'relative', justifyContent: 'space-between', height: '100px'}}>
            {/* <BackButton edge="start" color="inherit" aria-label="menu" BackTo={props.BackTo}/> */}
            <div style={{justify: 'space-between', }}>
                <PersonIcon fontSize='large'></PersonIcon>
                <Typography variant="h6">{props.nombre + " " + props.apellido}</Typography>
            </div>
            <div style={{justify: 'space-between', width: '50px'}}>
                <LogoutIcon fontSize='large'/>
                <Typography variant="h6">Salir</Typography>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;