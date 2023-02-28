import styles from "./DoCard.module.css";
import { Card } from "@mui/material";

function DoCard(props){
    return(
        <Card variant="outlined" sx={{width:"20rem"}}>
            <div className={styles.mainDiv}>
                <h3>{props.title}</h3>
                {props.address!==null&&<p><em>{`📍 ${props.address}`}</em></p>}
                <picture>
                    <source srcSet={props.image} type="image/webp" />
                    {props.image!==null&&<img src={props.image} style={{width:"18rem"}} alt={`${props.title} image`} />}
                </picture>
                <p className={styles.description}>{props.description}</p>
                <a target="_blank" rel="noreferrer" href={props.link} className={styles.link}>Website</a>
            </div>
        </Card>
    )
}

export default DoCard