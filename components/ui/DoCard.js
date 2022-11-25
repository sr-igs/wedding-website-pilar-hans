import styles from "./DoCard.module.css";
import { Card } from "@mui/material";
import Link from "next/link";

function DoCard(props){
    return(
        <Card variant="outlined" sx={{width:"20rem"}}>
            <div className={styles.mainDiv}>
                <h3>{props.title}</h3>
                <img src={props.image} style={{width:"18rem"}} alt={`${props.title} image`} />
                <p className={styles.description}>{props.description}</p>
                <a target="_blank" rel="noreferrer" href={props.link} className={styles.link}>Website</a>
            </div>
        </Card>
    )
}

export default DoCard