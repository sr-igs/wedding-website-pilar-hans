import styles from "./HotelCard.module.css";

export default function HotelCard(props){
 return(
    <div className={styles.card}>
        <h3>{`${props.name} (${props.stars})`}</h3>
        <a><em>{`📍 ${props.location}`}</em></a>
        <p>{props.description}</p>
    </div>
 )
}