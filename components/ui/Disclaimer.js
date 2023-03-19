import styles from "./Disclaimer.module.css"

export default function Disclaimer(props){

    let backgroundColor = "#e0d5ff"

    if(props.backgroundColor!==undefined){
        backgroundColor = props.backgroundColor
    }

    return <div className={styles.mainDiv} style={{backgroundColor}}>
        {props.text}
        {props.children}
    </div>
}