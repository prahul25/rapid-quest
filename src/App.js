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

import { Button, Slider, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function App() {
  const displayWidth = window.addEventListener("resize", function (event) {
    let width = document.body.clientWidth;

    return width;
  });
  const [age, setAge] = React.useState("");

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
                  <Typography
                    variant="p"
                    gutterBottom
                    style={{ fontWeight: "700", color: "#3e2edf" }}
                  >
                    Retirement Income
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    style={{ fontWeight: "500", fontSize: "20px" }}
                  >
                    Starting Year 2056
                  </Typography>
                  <div className="section2Title2">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="p" gutterBottom className="amount">
                        $30,000
                      </Typography>
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{ fontSize: "15px", opacity: "50" }}
                      >
                        My Goal
                      </Typography>
                      <div
                        style={{
                          width: "60px",
                          height: "2px",
                          backgroundColor: "blue",
                        }}
                      ></div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="title2Textcontent">
                        <Typography variant="p" gutterBottom className="amount">
                          59%
                        </Typography>
                        <Typography
                          variant="p"
                          gutterBottom
                          style={{ fontSize: "15px", opacity: "50" }}
                        >
                          Goal Achieved
                        </Typography>
                        <div
                          style={{
                            width: "100px",
                            height: "2px",
                            backgroundColor: "blue",
                          }}
                        ></div>
                      </div>
                      <div className="title2Textcontent">
                        <Typography variant="p" gutterBottom className="amount">
                          $300
                        </Typography>
                        <Typography
                          variant="p"
                          gutterBottom
                          style={{ fontSize: "15px", opacity: "50" }}
                        >
                          Est. Monthly Income
                        </Typography>
                        <div
                          style={{
                            width: "135px",
                            height: "2px",
                            backgroundColor: "blue",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Typography
                    variant="p"
                    gutterBottom
                    style={{
                      fontWeight: "500",
                      fontSize: "22px",
                      marginTop: "25px",
                    }}
                  >
                    Contribution Overtime
                  </Typography>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>$300</p>
                      <p>$200</p>
                      <p>$100</p>
                      <p style={{ marginTop: "16px" }}>0</p>
                    </div>
                    <div>
                      <div className="container1"></div>20
                    </div>
                    <div>
                      <div className="container2"></div>40
                    </div>
                    <div>
                      <div className="container3"></div>60
                    </div>
                    <div>
                      <div className="container4"></div>80
                    </div>
                    <div>
                      <div className="container5"></div>100
                    </div>
                  </div>
                  <div className="section2BottomWrapper">
                    <Typography
                      variant="p"
                      gutterBottom
                      className="section2MainText"
                    >
                      How do i compare to my peers?
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "14px",
                        opacity: "50%",
                        fontWeight: "500",
                      }}
                    >
                      These numbers represent current goal achievement
                    </Typography>
                    <div className="section2Bottom">
                      <div style={{ marginRight: "10px" }}>
                        <div className="sectionTitle">
                          {" "}
                          Gender :
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
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
                        <div className="sectionTitle">
                          {" "}
                          Salary :
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
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
                        <div className="sectionTitle">
                          {" "}
                          Age:
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="">
                                <em>Under 30</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          width: "100%",
                        }}
                      >
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={78}
                            className="section2Circle1"
                          />
                          Avg. 78%
                        </div>
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={95}
                            className="section2Circle1"
                          />
                          Top 98%
                        </div>
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={59}
                            className="section2Circle1"
                          />
                          Me 59%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              {/* ---------------------------------------------Responsive Section 3 ------------------------------------ */}
              <Grid item xs={12} sm={5}>
                <div className="section2Wrapper2">
                  <div className="section2BottomWrapper2">
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        marginLeft: "15px",
                      }}
                    >
                      How do i compare to my peers?
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "14px",
                        opacity: "50%",
                        fontWeight: "500",
                        marginLeft: "15px",
                      }}
                    >
                      These numbers represent current goal achievement
                    </Typography>
                    <div className="section2Bottom2">
                      <div style={{ marginLeft: "15px" }}>
                        <div className="section2Title1">
                          {" "}
                          Gender :
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
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
                        <div className="section2Title1">
                          {" "}
                          Salary :
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
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
                        <div className="section2Title1">
                          {" "}
                          Age:
                          <FormControl
                            sx={{
                              ".MuiOutlinedInput-notchedOutline": {
                                borderStyle: "none",
                              },
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="">
                                <em>Under 30</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          width: "100%",
                          marginTop: "25px",
                        }}
                      >
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={78}
                            className="section2Circle2"
                          />
                          Avg. 78%
                        </div>
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={95}
                            className="section2Circle2"
                          />
                          Top 98%
                        </div>
                        <div className="sectionCircle">
                          <CircularProgress
                            variant="determinate"
                            value={59}
                            className="section2Circle2"
                          />
                          Me 59%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section3BottomWrapper">
                    <Typography
                      variant="p"
                      gutterBottom
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        marginTop: "15px",
                        marginLeft: "15px",
                      }}
                    >
                      Retirement Strategy
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      className="section2SubText2"
                    >
                      Employee Certificate
                    </Typography>

                    <Slider
                      defaultValue={50}
                      valueLabelDisplay="auto"
                      style={{ width: "90%", marginLeft: "15px" }}
                    />
                    <Typography
                      variant="p"
                      gutterBottom
                      className="section2SubText2"
                    >
                      Retirement Age
                    </Typography>
                    <Slider
                      defaultValue={50}
                      valueLabelDisplay="auto"
                      style={{ width: "90%", marginLeft: "15px" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="p"
                        gutterBottom
                        className="section2SubText2"
                      >
                        Labour Turnover Rate{" "}
                      </Typography>
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          marginRight: "25px",
                          marginTop: "15px",
                        }}
                      >
                        8.95%{" "}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="p"
                        gutterBottom
                        className="section2SubText2"
                      >
                        Interest Rate
                      </Typography>
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          marginRight: "25px",
                          marginTop: "15px",
                        }}
                      >
                        5%{" "}
                      </Typography>
                    </div>
                    <div className="section3BtnWrapper">
                      <Button variant="contained" className="section3Btn">
                        Update
                      </Button>
                    </div>
                    <div className="section3BottomText">
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                          marginLeft: "15px",
                        }}
                      >
                        Are you considering a
                      </Typography>
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          marginLeft: "15px",
                        }}
                      >
                        Housing Advance ?
                      </Typography>
                      <Typography
                        variant="p"
                        gutterBottom
                        style={{
                          fontSize: "16px",
                          fontWeight: "200",
                          opacity: "50%",
                          marginLeft: "15px",
                        }}
                      >
                        Limited time reduced interest
                      </Typography>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="p"
                          gutterBottom
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "blue",
                            marginLeft: "15px",
                          }}
                        >
                          Learn More
                        </Typography>
                        <KeyboardArrowRightIcon style={{ color: "blue" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default App;
