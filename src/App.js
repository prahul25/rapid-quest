import React from "react";
import Logo from "./Assets/image.png";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const displayWidth = window.addEventListener("resize", function(event) {
    let width = document.body.clientWidth;

    return width
  })
  console.log(displayWidth)
  return (
    <div className="App">
      <nav className="navWrapper">
      <div className="contentWrapper">
        <div className="firstSetIcon">
          <img src={Logo} alt="" style={{height:"45px" , width:"50px"}} className="hideIcon"/>
           <SearchIcon className="iconWrapper"/>
        </div>
        <div className="firstSetIcon">
        <HomeOutlinedIcon className="iconWrapper"/>
        <NewspaperOutlinedIcon className="iconWrapper"/>
        <ListAltRoundedIcon className="iconWrapper"/>
        <PersonOutlineOutlinedIcon className="iconWrapper"/>
        </div>
      </div>
      <div className="SecondSetIcon">
        <NotificationsOutlinedIcon className="iconWrapper"/>
        <LogoutIcon className="hideIcon"/>
      </div>
    </nav>
      <section>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} className="wrapper1">
          
          <AccountCircleIcon style={{height:"50px" , width:"50px"}}/>
        </Grid>
        <Grid item xs={12} sm={4} className="wrapper2">
          {/* <div className="wrapper2"></div> */}
          rgve
        </Grid>
        <Grid item xs={12} sm={4} className="wrapper3">
          {/* <div ></div> */}
          tgrfcerfve
        </Grid>
      </Grid>
      </section>
    </div>
  );
}

export default App;
