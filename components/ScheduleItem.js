import { VerticalTimelineElement }  from 'react-vertical-timeline-component'; 
import Image from 'next/image';
import styles from "./ScheduleItem.module.css"

function ScheduleItem(props){
    return(
        <VerticalTimelineElement date={props.time}
        contentStyle={{background:"#f8d3c9",fontFamily:"'Josefin Sans', sans-serif"}}
        contentArrowStyle={{ borderRight: '7px solid  #f8d3c9' }}
        iconStyle={{background:"#97dec9"}}
        icon={<Image src={props.image} sizes="10vw" alt={`${props.title} Icon`} />} >
             <h3 className={styles.heading} style={{fontFamily:"'Martel','serif'"}}>{props.title}</h3>
             {props.location!==""&&props.location!==undefined&&<p><em><a className={styles.link} href={props.locationLink} target="_blank" rel="noreferrer">{`📍 ${props.location}`}</a></em></p>}
             <p>{props.text}</p>
        </VerticalTimelineElement>
    )
}

export default ScheduleItem