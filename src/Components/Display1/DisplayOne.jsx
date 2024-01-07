import React from "react";
import styles from "./DisplayOne.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DisplayOne = () => {
    return <div className={styles.wrapper}>
    <div> <AccountCircleIcon style={{fontSize:"50px" , color:"#3e2edf"}}/></div>
</div>
}

export default DisplayOne;