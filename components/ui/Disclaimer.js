import styles from "./Disclaimer.module.css"

export default function Disclaimer(props){
    return <div className={styles.mainDiv}>
        {props.text}
    </div>
}