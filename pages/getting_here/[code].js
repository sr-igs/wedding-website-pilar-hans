import Header from "../../components/Header";
import TravelText from "../../components/ui/TravelText";
import { InputLabel,MenuItem,Select,FormControl,Box } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/GettingHere.module.css";
import SpainArrival from "../../components/getting_here/SpainArrival";
import ValenciaArrival from "../../components/getting_here/ValenciaArrival";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function GettingHere(props){

    const [location,setLocation] = useState("");

    function onLocationChange(e){
        setLocation(e.target.value)
    }

    return(
        <div>
            <Header />
            <div className={styles.selectDiv}>
                <FormControl sx={{ m: 1, minWidth: 200}}>
                    <InputLabel id="location-select-label">Where are you joining us from?</InputLabel>
                    <Select onChange={onLocationChange} labelId="location-select-label" id="location-select" label="Where are you joining us from?">
                        <MenuItem value={"australia"}>Australia</MenuItem>
                        <MenuItem value={"uk"}>United Kingdom</MenuItem>
                        <MenuItem value={"rest"}>Somewhere else</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.gridDiv}>
            <Grid container>
                {location!==""&&<Grid lg={6} xs={12}><TravelText title={"Arriving in Valencia"}><SpainArrival location={location} /></TravelText></Grid>}
                {location!==""&&<Grid lg={6} xs={12}><TravelText title={"Getting to Valencia city centre"}><ValenciaArrival /></TravelText> </Grid>}
            </Grid>
            </div>
            
            
        </div>
    )
}

export async function getServerSideProps({locale}){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','accommodation'])),
      },
    };
  }