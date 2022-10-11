import damnImage from "../images/decoration.png";
import Image from "next/image";
import styles from "./InitialTitle.module.css";
import { TextField,Button } from "@mui/material";
import {InputLabel,FormControl} from "@mui/material";
import { useState } from "react";


function InitialTitle(props){
    const [accessCode,setAccessCode] = useState("");

    function onAccessCodeChange(e){
        let value = e.target.value;
        setAccessCode(value);
    }

    return(
        <div className={styles.mainDiv}>
            <div className={styles.imageDiv}>
                <Image src={damnImage} layout="responsive" />
            </div>
            <div className={styles.titleDiv}>
                <h1>CATHERINE</h1>
                <h3>and</h3>
                <h1>IGNACIO</h1>
                <h3>Saturday 3rd of June, 2023</h3>
                <div className={styles.textField}>
                    <FormControl>
                        {/* <InputLabel htmlFor="access-code-field">Access Code</InputLabel> */}
                        <TextField id="access-code-field" color="secondary" variant="outlined" label="Access Code" 
                        focused value={accessCode} onChange={onAccessCodeChange} />
                    </FormControl>
                </div>
                <div className={styles.button}>
                    <Button color="secondary" variant="outlined" disabled={accessCode===""} >Submit</Button>
                </div>
            </div>
        </div>
        
    )
}

export default InitialTitle