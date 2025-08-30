import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; 
//REF: https://stephane-monnot.github.io/react-vertical-timeline/#/
import 'react-vertical-timeline-component/style.min.css';
import styles from "./Schedule.module.css";
import paellaIcon from "../images/paella.png";
import churchIcon from "../images/location.png";
import champaignIcon from "../images/champaign.png";
import danceIcon from "../images/dance.png";
import ScheduleItem from './ScheduleItem';
import moonIcon from "../images/moon.png";
import restaurantIcon from "../images/restaurant.png";
import informationIcon from "../images/information.png";
import { useState,useEffect } from 'react';
import { useTranslation } from 'next-i18next';

function Schedule(){
    const [width, setWindowWidth] = useState(0);
    const {t} = useTranslation("aboutDay");

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

    return(
        <div className={width>950?styles.scheduleDivFull:styles.scheduleDivMobile}>
        <VerticalTimeline lineColor={"#2C8A6F"} layout={width>950?'2-columns':'1-column-left'}>
            <ScheduleItem image={informationIcon} time="" title={t("essentialInfo")} text={t("essentialInfoText")} />
            <ScheduleItem image={paellaIcon} time={t("morningAfternoon")} title={t("morningAfternoonTitle")} text={t("morningAfternoonText")} />
            <ScheduleItem image={churchIcon} location={t("ceremonyLocation")} locationLink="https://goo.gl/maps/G8khvPBWAwzRcCYc8"
             time="6pm" title={t("ceremonyTitle")} text={t("ceremonyText")} />
            <ScheduleItem image={champaignIcon} location={t("onlyYou")} locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="7:30pm" title={t("cocktailTitle")} text={t("cocktailText")} />
             <ScheduleItem image={restaurantIcon} location={t("onlyYou")} locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="9pm" title={t("dinnerTitle")} text={t("dinnerText")} />
             <ScheduleItem image={danceIcon} location={t("onlyYou")} locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="12am" title={t("danceTitle")} text={t("danceText")} />
             <ScheduleItem image={moonIcon} location={t("endLocation")} locationLink=""
             time="4am" title={t("endTitle")} text={t("endText")} />
        </VerticalTimeline>
        </div>
    )
}

export default Schedule
