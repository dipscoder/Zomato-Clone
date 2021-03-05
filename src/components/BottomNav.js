import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Style
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
//   console.log("Location->",location,"History",history);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
      style={{
        position: "fixed",
        left: "50%",
        bottom: "20px",
        transform: "translate(-50%, -50%)",
        margin: "0 auto",
      }}
    >
      <BottomNavigationAction label="Order" value="/order" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="/favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" value="/profile" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
