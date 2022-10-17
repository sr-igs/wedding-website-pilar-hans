import styles from "./TravelText.module.css";

export default function TravelText(props){
    return(
        <div className={styles.mainDiv}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}