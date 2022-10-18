import styles from "./Header.module.css";
import Link from "next/link";
import { useState,useEffect } from 'react';
import { Accordion,AccordionDetails,AccordionSummary,Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

function Header(){

    const [width, setWindowWidth] = useState(0);
    const {t} = useTranslation("common");
    const router = useRouter();
    const {code} = router.query;


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
            <Link href={`/schedule/${code}`}><a>{t("aboutDay")}</a></Link> ·
            <Link href={`/getting_here/${code}`}><a>{t("gettingHere")}</a></Link> ·
            <Link href={`/where_to_stay/${code}`}><a>{t("whereToStay")}</a></Link> ·
            <a>{t("whatToDo")}</a> ·
            <a>{t("aboutUs")}</a> ·
             <Link href={`/rsvp/${code}`}><strong><a>{t("rsvp")}</a></strong></Link>
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
                <Link href="/home"><h1>{t("jointNames")}</h1></Link>
                <h4>{`${t("middleDate")} . ${t("longLocation")}`}</h4>
            </div>
            {width>500?fullMenu:mobileMenu}
            
        </div>
    )
}

export default Header