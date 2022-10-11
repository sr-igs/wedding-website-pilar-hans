import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; 
//REF: https://stephane-monnot.github.io/react-vertical-timeline/#/
import 'react-vertical-timeline-component/style.min.css';
import styles from "./Schedule.module.css";
import paellaIcon from "../images/paella.png";
import churchIcon from "../images/church.png";
import champaignIcon from "../images/champaign.png";
import danceIcon from "../images/dance.png";
import ScheduleItem from './ScheduleItem';
import moonIcon from "../images/moon.png";
import restaurantIcon from "../images/restaurant.png"

function Schedule(){
    return(
        <div className={styles.scheduleDiv}>
        <VerticalTimeline lineColor={"#7d75a0"}>
            <ScheduleItem image={paellaIcon} time="Morning and Afternoon" title="Fill up for the evening!" text="If you're not used to the Spanish timetable, you might want to get yourself a big breakfast and lunch!!!" />
            <ScheduleItem image={churchIcon} location="San Juan de la Cruz Church" locationLink="https://goo.gl/maps/G8khvPBWAwzRcCYc8"
             time="6pm" title="Ceremony" text="Join us to celebrate our marriage in San Juan de la Cruz church" />
            <ScheduleItem image={champaignIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="7:30pm" title="Aperitif at the Reception Venue" text="Have some nibbles and drinks" />
             <ScheduleItem image={restaurantIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="9pm" title="Dinner" text="Have some nibbles and drinks" />
             <ScheduleItem image={danceIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="11pm" title="Dance and Open Bar" text="Have some nibbles and drinks" />
             <ScheduleItem image={moonIcon} location="Only You Hotel" locationLink="https://goo.gl/maps/qL7UE5Goyt41duTu6"
             time="4am" title="Sleep time" text="Have some nibbles and drinks" />
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