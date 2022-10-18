import Header from "../../components/Header";
import TravelText from "../../components/ui/TravelText";
import { InputLabel,MenuItem,Select,FormControl,Box } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/GettingHere.module.css";
import SpainArrival from "../../components/getting_here/SpainArrival";
import ValenciaArrival from "../../components/getting_here/ValenciaArrival";
import Script from "next/script";
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
                <FormControl sx={{ m: 1, minWidth: 280}}>
                    <InputLabel id="location-select-label">Where are you joining us from?</InputLabel>
                    <Select onChange={onLocationChange} labelId="location-select-label" id="location-select" label="Where are you joining us from?">
                        <MenuItem value={"spain"}>Spain</MenuItem>
                        <MenuItem value={"australia"}>Australia</MenuItem>
                        <MenuItem value={"uk"}>United Kingdom</MenuItem>
                        <MenuItem value={"europe"}>Elsewhere in Europe</MenuItem>
                        <MenuItem value={"america"}>America</MenuItem>
                        <MenuItem value={"world"}>Elsewhere in the world</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.gridDiv}>
            <Grid container>
                {location!==""&&<Grid lg={6} xs={12}><TravelText title={"Arriving to Valencia"}><SpainArrival location={location} /></TravelText></Grid>}
                {location!==""&&<Grid lg={6} xs={12}><TravelText title={"Getting to Valencia city centre"}><ValenciaArrival /></TravelText> </Grid>}
                {location!==""&&<Grid sm={12}><div className={styles.skyScanner}>
                <h3>Find flights with Sky Scanner:</h3>
                <div data-skyscanner-widget="FlightSearchWidget" data-destination-iata-code="VLC" data-locale="en-GB" data-flight-outbound-date="2023-06-01"></div>
                <Script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></Script>  
                </div></Grid>}
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