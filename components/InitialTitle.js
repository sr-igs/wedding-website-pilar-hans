import damnImage from "../images/decoration.png";
import Image from "next/image";
import styles from "./InitialTitle.module.css";
import { TextField,Button } from "@mui/material";
import {InputLabel,FormControl} from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";


function InitialTitle(props){
    const [accessCode,setAccessCode] = useState("");
    const {t} = useTranslation("common");
    const router = useRouter();

    function onAccessCodeChange(e){
        let value = e.target.value;
        setAccessCode(value);
    }

    async function onSubmitClick(){
        let response = await fetch(`/api/guests/${accessCode}`,{method:"GET"});
        if(response.status===200){
            router.push(`/home/${accessCode}`);
        }
    }

    return(
        <div className={styles.mainDiv}>
            <div className={styles.imageDiv}>
                <Image src={damnImage} layout="responsive" />
            </div>
            <div className={styles.titleDiv}>
                <h1>{t("firstName")}</h1>
                <h3>{t("nameJoining")}</h3>
                <h1>{t("secondName")}</h1>
                <h3>{t("longDate")}</h3>
                <div className={styles.textField}>
                    <FormControl>
                        {/* <InputLabel htmlFor="access-code-field">Access Code</InputLabel> */}
                        <TextField id="access-code-field" color="secondary" variant="outlined" label={t("accessCode")}
                        focused value={accessCode} onChange={onAccessCodeChange} />
                    </FormControl>
                </div>
                <div className={styles.button}>
                    <Button onClick={onSubmitClick} color="secondary" variant="outlined" disabled={accessCode===""} >{t("submit")}</Button>
                </div>
            </div>
        </div>
        
    )
}

export default InitialTitle