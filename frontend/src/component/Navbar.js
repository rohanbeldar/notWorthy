import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

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
  bkg:{
    // backgroundColor: "skyblue"
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar className={classes.bkg} position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          MinimumWageJobs.ca
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button> */}
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Post Jobs
              </Button>
               <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button> 
            
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>

              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
