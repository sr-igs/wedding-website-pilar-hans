import styles from "./Header.module.css";
import Link from "next/link";

function Header(props){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.names}>
                <h1>IGNACIO and CATHERINE</h1>
                <h4>3rd of June 2023 . Valencia, Spain</h4>
            </div>
            
            <div className={styles.menu}>
                <Link href="/schedule"><a>ABOUT THE DAY</a></Link> ·
                <a>GETTING HERE</a> ·
                <a>WHERE TO STAY</a> ·
                <a>WHAT TO DO</a> ·
                <a>ABOUT US</a> ·
                <strong><a>RSVP</a></strong>
            </div>
        </div>
    )
}

export default Header