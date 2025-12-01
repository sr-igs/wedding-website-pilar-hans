import Header from "../../components/Header";
import RsvpForm from "../../components/rsvp/RsvpForm";
import styles from "../../styles/Rsvp.module.css";
import DetailsForm from "../../components/rsvp/DetailsForm";
import FormComplete from "../../components/rsvp/FormComplete";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from "@mui/material";
import clientPromise from "../../utils/mongodb";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function RsvpPage(props){
    
    const router = useRouter();
    const {code} = router.query;
    const [peopleInfo,setPeopleInfo] = useState(props.data.people);
    const [activeScreen,setActiveScreen] = useState("rsvp");
    const [existingResponse,setExistingResponse] = useState(false)
    const {t} = useTranslation("rsvp");

    useEffect(()=>{
        let responseCount = 0;
        props.data.people.forEach(p=>{
            if(p.rsvp!==""){
                responseCount+=1
            }
        });
        if(responseCount===props.data.people.length){
            setActiveScreen("summary");
            setExistingResponse(true)
        }
    },[props.data.people])

    function handleChange(id,value,field){
        setPeopleInfo(prevInfo=>{
            let returnArray = [];
            prevInfo.forEach(p=>{
                if(p.fullName===id){
                    returnArray.push({...p,[field]:value})
                }else{
                    returnArray.push({...p})
                }
            });
            return returnArray
        })
    }

    function onCancelChanges(){
        setPeopleInfo(props.data.people);
        setActiveScreen("summary");
    }

    async function onSubmit(){
        let changes = false;
        let success = false;

        peopleInfo.forEach(p=>{
            props.data.people.forEach(d=>{
                if(d.fullName===p.fullName){
                    if(d.rsvp!==p.rsvp||d.dietary!==p.dietary||d.song!==p.song||d.other!==p.other){
                        changes = true
                    }
                }
            })
        });

        const body = JSON.stringify(peopleInfo);
        if(changes){
            const response = await fetch(`/api/guests/${code}`,{method:"PUT",body});
            if(response.status===200){
                console.log("Success");
                success=true;
            }else{
                console.log("Failure")
            }
        }else{
            success=true;
        }

        if(success){
            if(activeScreen==="rsvp"){
                //Check if all rsvp are no
                let noCount = 0;
                peopleInfo.forEach(p=>{
                    if(p.rsvp==="no"){noCount+=1};
                })

                if(noCount===peopleInfo.length){
                    setActiveScreen("summary")
                    setExistingResponse(true)
                }else{
                    setActiveScreen("details")
                } 
            }else if(activeScreen==="details"){
                setActiveScreen("summary");
                setExistingResponse(true)
            }
        }

    }

    function handleChangeClick(){
        setActiveScreen("rsvp")
    }

    return(
        <div>
            <Header />
            <div className={styles.mainDiv}>
                <Grid container spacing={3} justifyContent="center">
                    {peopleInfo.map(g=>{
                        return(<Grid key={`grid-${g.fullName}`}>
                            {activeScreen==="rsvp"&&<RsvpForm translation={t} id={g.fullName} key={`rsvp-${g.fullName}`} handleChange={handleChange} name={g.name} rsvp={g.rsvp} />}
                            {activeScreen==="details"&&g.rsvp==="yes"&&<DetailsForm translation={t} id={g.fullName} key={`details-${g.fullName}`} handleChange={handleChange} name={g.name} dietary={g.dietary} song={g.song} other={g.other} bus={g.bus} />}
                            </Grid>)
                    })}
                    {activeScreen==="summary"&&<FormComplete translation={t} id={`summary`} changeDate={"11/03/2026"} people={peopleInfo} onChangeClick={handleChangeClick}  />}
                </Grid>
                <div className={styles.plusOne}>
                    {activeScreen==="rsvp"&&props.data.plusOne&&<p>{t("plusOneText")}<Link href={`/contact/${code}`}><a>{t("plusOneLink")}</a></Link></p>}
                </div>
                <div className={styles.buttonDiv}>
                    {activeScreen==="rsvp"&&props.data.plusOne&&existingResponse&&<Button sx={{margin:"0.5rem"}} onClick={onCancelChanges} variant="outlined">{t("cancelChanges")}</Button>}
                    {activeScreen!=="summary"&&<Button onClick={onSubmit} variant="outlined">{t("submit")}</Button>}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const locale = context.locale;
    const code = context.params.code;

    const client = await clientPromise;
    const db = client.db("weddingRsvpDB");
    let data = await db.collection("guests_pilar_hans").findOne({uniqueCode:code},{projection:{_id:0}});

    if(!data){
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
    }}

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','rsvp'])),
        data
      },
    };
  }