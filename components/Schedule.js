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
import { useState,useEffect } from 'react';

function Schedule(){
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

    return(
        <div className={width>950?styles.scheduleDivFull:styles.scheduleDivMobile}>
        <VerticalTimeline lineColor={"#7d75a0"} layout={width>950?'2-columns':'1-column-left'}>
            <ScheduleItem image={paellaIcon} time="Morning and Afternoon" title="Fill up for the evening!" text="If you're not used to the Spanish timetable, you might want to get yourself a big breakfast and lunch!!!" />
            <ScheduleItem image={churchIcon} location="San Juan de la Cruz Church" locationLink="https://goo.gl/maps/G8khvPBWAwzRcCYc8"
             time="6pm" title="Ceremony" text="We will have a traditional Roman Catholic Wedding ceremony" />
            <ScheduleItem image={champaignIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="7:30pm" title="Aperitif at the Reception Venue" text="Some nibbles and drinks will be waiting for you at our reception place, just a couple of minutes walk from the church" />
             <ScheduleItem image={restaurantIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="9pm" title="Dinner" text="Have some nibbles and drinks" />
             <ScheduleItem image={danceIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="11pm" title="Dance and Open Bar" text="Dance and drink all you'd like with live music and 3 hours of open bar" />
             <ScheduleItem image={moonIcon} location="Your Accomodation" locationLink=""
             time="4am" title="Sleep time" text="The party finishes at 4am - we hope you will have had an amazing time!" />
        </VerticalTimeline>
        </div>
    )
}

export default Schedule

{/* <VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
date="2011 - present"
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
<h3 className="vertical-timeline-element-title">Creative Director</h3>
<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
<p>
  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
</p>
</VerticalTimelineElement> */}