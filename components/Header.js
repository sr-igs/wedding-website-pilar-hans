import styles from "./Header.module.css";
import Link from "next/link";
import { useState,useEffect } from 'react';
import { Accordion,AccordionDetails,AccordionSummary,Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header(props){

    const [width, setWindowWidth] = useState(0);


    //Listener to change the app to phone or desktop depending on screen size
    useEffect(() => { 
 
      updateDimensions();
      window.addEventListener('resize', updateDimensions);

      return () => 
        window.removeEventListener('resize',updateDimensions);
     }, [])
     
     const updateDimensions = () => {
       const width = window.innerWidth
       setWindowWidth(width)
     };

     const fullMenu = (
        <div className={styles.menu}>
            <Link href="/schedule"><a>ABOUT THE DAY</a></Link> ·
            <Link href="/getting_here"><a>GETTING HERE</a></Link> ·
            <Link href="/where_to_stay"><a>WHERE TO STAY</a></Link> ·
            <a>WHAT TO DO</a> ·
            <a>ABOUT US</a> ·
             <strong><a>RSVP</a></strong>
        </div>
    )

    const mobileMenu = (
        <Accordion sx={{textAlign:"center"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{justifyContent:"center"}}>
                <div className={styles.mobileMenu}><Typography sx={{fontFamily:"'Josefin Sans', sans-serif",fontWeight:"bold"}} align="center">MENU</Typography></div>
            </AccordionSummary>
            <AccordionDetails>
                {fullMenu}
            </AccordionDetails>
        </Accordion>
    )


    return(
        <div className={styles.mainDiv}>
            <div className={styles.names}>
                <Link href="/home"><h1>IGNACIO and CATHERINE</h1></Link>
                <h4>3rd of June 2023 . Valencia, Spain</h4>
            </div>
            {width>500?fullMenu:mobileMenu}
            
        </div>
    )
}

export default Header