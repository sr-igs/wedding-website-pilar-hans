import styles from "./CityStay.module.css";
import HotelCard from "../ui/HotelCard";

export default function CityStay(props){
    
    return(
        <div className={styles.mainDiv}>
            <h4>{props.description}</h4>
            {props.hotelOptions.map(opt=>{
                return(
                    <HotelCard key={`hotel-${opt.name}`} link={opt.link} name={opt.name} location={opt.location} description={opt.description} stars={opt.stars} />
                )
            })}
        </div>
    )
}