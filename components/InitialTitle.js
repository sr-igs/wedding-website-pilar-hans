import damnImage from "../images/decoration.png";
import Image from "next/image";
import styles from "./InitialTitle.module.css";
import { TextField,Button } from "@mui/material";
import {FormControl} from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import {Modal} from "@mui/material";
import LoadingModal from "./ui/LoadingModal";


function InitialTitle(props){
    const [accessCode,setAccessCode] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [showEmail,setShowEmail] = useState(false);
    const {t} = useTranslation("common");
    const router = useRouter();

    function onAccessCodeChange(e){
        let value = e.target.value;
        if(error){
            setError(false);
        }
        setAccessCode(value);
    }

    async function onSubmitClick(){
        setLoading(true);
        let response = await fetch(`/api/guests/${accessCode}`,{method:"GET"});
        setLoading(false);
        if(response.status===200){
            router.push(`/home/${accessCode}`);
        }else{
            //Error
            setError(true);
        }
    }

    return(
        <div className={styles.mainDiv}>
            <Modal open={loading}><LoadingModal /></Modal>
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
                        <TextField id="access-code-field" color={error?"error":"secondary"} variant="outlined" label={t("accessCode")}
                        focused value={accessCode} onChange={onAccessCodeChange} />
                    </FormControl>
                </div>
                <div className={styles.button}>
                    <Button onClick={onSubmitClick} color="secondary" variant="outlined" disabled={accessCode===""} >{t("submit")}</Button>
                </div>
                <div className={styles.contactLink}>
                    <p>{t("accessCodeText")} <a onClick={()=>{setShowEmail(true)}}>{t("accessCodeLink")}</a></p>
                    {showEmail&&<p>{"contactText"} <a href="mailto:contact@ignacio-catherine.com">{"contact@ignacio-catherine.com"}</a></p>}
                </div>
            </div>
        </div>
        
    )
}

export default InitialTitle