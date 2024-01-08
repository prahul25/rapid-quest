import React from "react";
import Logo from "./Assets/image.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Grid from "@mui/material/Grid";
import "./App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const displayWidth = window.addEventListener("resize", function (event) {
    let width = document.body.clientWidth;

    return width;
  });
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(displayWidth);
  return (
    // -------------------------------------------Responsive Navbar----------------------------------------------------------
    <div className="App">
      <nav className="navWrapper">
        <div className="contentWrapper">
          <div className="firstSetIcon">
            <img
              src={Logo}
              alt=""
              style={{ height: "45px", width: "50px" }}
              className="hideIcon"
            />
            <SearchIcon className="iconWrapper" />
          </div>
          <div className="firstSetIcon">
            <HomeOutlinedIcon className="iconWrapper" />
            <NewspaperOutlinedIcon className="iconWrapper" />
            <ListAltRoundedIcon className="iconWrapper" />
            <PersonOutlineOutlinedIcon className="iconWrapper" />
          </div>
        </div>
        <div className="SecondSetIcon">
          <NotificationsOutlinedIcon className="iconWrapper" />
          <LogoutIcon className="hideIcon" />
        </div>
      </nav>
      {/* ---------------------------------------------Responsive Sections --------------------------------------- */}
      <section>
        <Grid container spacing={0}>
          {/* ---------------------------------------------Responsive Section 1 ------------------------------------ */}
          <Grid item xs={12} sm={4} className="wrapper1">
            <div className="sectionWrapper1">
              <header style={{ display: "flex" }}>
                <AccountCircleIcon
                  style={{ height: "100px", width: "100px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "15px",
                    marginLeft: "10px",
                  }}
                >
                  <Typography
                    variant="p"
                    gutterBottom
                    style={{ fontSize: "25px", fontWeight: "700" }}
                  >
                    Hi Mike,
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    welcome back!
                  </Typography>
                </div>
              </header>
              <article className="articleWrapper">
                <Typography variant="h6" gutterBottom>
                  Today
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{ fontSize: "25px", fontWeight: "700" }}
                >
                  $19,892
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ opacity: "50%", fontSize: "15px" }}
                >
                  Account Balance
                </Typography>
                <div className="section1Text">
                  <div className="section1Text1">
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginTop: "15px",
                      }}
                    >
                      $4,000
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ opacity: "50%", fontSize: "15px" }}
                    >
                      Year to Date Contribution
                    </Typography>
                  </div>
                  <div className="section1Text2">
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginTop: "15px",
                      }}
                    >
                      $1,892
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ opacity: "50%", fontSize: "15px" }}
                    >
                      Total Interest
                    </Typography>
                  </div>
                </div>
                <Button variant="contained" className="section1Btn">
                  I want to
                </Button>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "40px",
                  }}
                >
                  Recent Transaction
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    opacity: "50%",
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  2020-08-07
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  Withdrawal Transfer to Bank-XXX11
                </Typography>
              </article>
            </div>
          </Grid>
          {/* ---------------------------------------------Responsive Section 2 ------------------------------------ */}
          <Grid item xs={12} sm={8} className="wrapper2">
            <Grid container>
              <Grid item xs={12} sm={7}>
                <div className="section2Wrapper1">
                  <Typography variant="p" gutterBottom style={{fontWeight:"700", color:"#3e2edf"}}>Retirement Income</Typography>
                  <Typography variant="p" gutterBottom style={{fontWeight:"500" , fontSize:"20px"}}>Starting Year 2056</Typography>
                  <div className="section2Title2">
                    <div style={{display:"flex" , flexDirection:"column"}}>
                    <Typography variant="p" gutterBottom style={{fontWeight:"700", fontSize:"22px"}}>$30,000</Typography>
                    <Typography variant="p" gutterBottom style={{ fontSize:"15px" , opacity:"50"}}>My Goal</Typography>
                    </div>
                    <div style={{display:"flex"}}>
                      <div className="title2Textcontent">
                    <Typography variant="p" gutterBottom style={{fontWeight:"700", fontSize:"22px"}}>59%</Typography>
                    <Typography variant="p" gutterBottom style={{ fontSize:"15px" , opacity:"50"}}>Goal Achieved</Typography>

                      </div >
                      <div className="title2Textcontent">
                    <Typography variant="p" gutterBottom style={{fontWeight:"700", fontSize:"22px"}}>$300</Typography>
                    <Typography variant="p" gutterBottom style={{ fontSize:"15px" , opacity:"50"}}>Est. Monthly Income</Typography>

                      </div>
                    </div>
                  </div>
                  <Typography variant="p" gutterBottom style={{fontWeight:"500" , fontSize:"22px" , marginTop:"25px"}}>Contribution Overtime</Typography>
                  <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div style={{display:"flex" , flexDirection:"column"}}><p>$300</p><p>$200</p><p>$100</p><p style={{marginTop:"16px"}}>0</p></div>
                    <div ><div className="container1"></div>20</div>
                    <div ><div className="container2"></div>40</div>
                    <div ><div className="container3"></div>60</div>
                    <div ><div className="container4"></div>80</div>
                    <div ><div className="container5"></div>100</div>
                    </div>
                    <div className="section2BottomWrapper">
                <Typography variant="p" gutterBottom className="section2MainText">How do i compare to my peers?</Typography>
                <Typography variant="p" gutterBottom style={{fontSize:"14px" , opacity:"50%" , fontWeight:"500"}}>These numbers represent current goal achievement</Typography>
                <div className="section2Bottom">
                <div style={{marginRight:"10px"}}>
                  <div style={{display:"flex" , alignItems:"center", height:"40px"}}> Gender :
                <FormControl sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>male</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl>
      </div>
      <div style={{display:"flex" , alignItems:"center" , height:"40px"}}> Salary :
                <FormControl sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>20k</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl>
      </div>
      <div style={{display:"flex" , alignItems:"center", height:"40px"}}> Age:
                <FormControl sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' }}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" >
            <em>Under 30</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl>
      </div>
                </div>
                
                <div style={{display:"flex", alignItems:"center" , justifyContent:"space-around" , width:"100%"}}>
                  <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <CircularProgress variant="determinate" value={78} style={{height:"100%" , width:"100%"}}/>Avg. 78%</div>
                <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <CircularProgress variant="determinate" value={95} style={{height:"100%" , width:"100%"}}/>Top 98%</div>
                <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <CircularProgress variant="determinate" value={59} style={{height:"100%" , width:"100%"}}/>Me 59%</div>
                </div>
                </div>
                </div>
                </div>
                
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className="section2Wrapper2"></div>
              </Grid>
            </Grid>
          </Grid>
          {/* ---------------------------------------------Responsive Section 3 ------------------------------------ */}
          
        </Grid>
      </section>
    </div>
  );
}

export default App;
