import { VerticalTimelineElement }  from 'react-vertical-timeline-component'; 
import Image from 'next/image';

function ScheduleItem(props){
    return(
        <VerticalTimelineElement date={props.time}
        contentStyle={{background:"#e0d5ff",fontFamily:"'Josefin Sans', sans-serif;"}}
        contentArrowStyle={{ borderRight: '7px solid  #e0d5ff' }}
        iconStyle={{background:"#d5e9db"}}
        icon={<Image src={props.image} />} >
             <h3 style={{fontFamily:"'Martel','serif'"}}>{props.title}</h3>
             {props.location!==""&&<p><em><a href={props.locationLink}>{props.location}</a></em></p>}
             <p>{props.text}</p>
        </VerticalTimelineElement>
    )
}

export default ScheduleItem