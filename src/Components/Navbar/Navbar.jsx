import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/image.png";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import Icon from "../../Assets/icon.png"

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <img src={Logo} alt="" style={{height:"40px" , width:"40px"}} />
           <SearchIcon className={styles.iconWrapper}/>
        </div>
        <div>
        <HomeOutlinedIcon className={styles.iconWrapper}/>
        <NewspaperOutlinedIcon className={styles.iconWrapper}/>
        <ListAltRoundedIcon className={styles.iconWrapper}/>
        <PersonOutlineOutlinedIcon className={styles.iconWrapper}/>
        </div>
      </div>
      <div className={styles.bottomIcon}>
        <NotificationsOutlinedIcon className={styles.iconWrapper}/>
        <LogoutIcon className={styles.iconWrapper}/>
      </div>
    </nav>
  );
};

export default Navbar;
