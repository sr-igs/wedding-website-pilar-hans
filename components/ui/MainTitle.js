import styles from "./MainTitle.module.css";
import { TextField,Button } from "@mui/material";
import Image from "next/image";
import headerImage from "../../public/decoration.png"

function MainTitle(props){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.firstImageDiv}>
                <Image src={headerImage} alt={"Header"} layout="responsive"  />
            </div>
            <h1>Ignacio and Catherine</h1>
            <h3>3rd of June 2023</h3>
            <div>
                <TextField variant="standard" label="Please input your unique code" />
            </div>
            <div>
                <Button variant="outlined">Enter</Button>
            </div>
        </div>
    )
}

export default MainTitle

//width={3135} height={1806}