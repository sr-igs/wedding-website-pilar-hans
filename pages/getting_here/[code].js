import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../../components/Header";
import TravelText from "../../components/ui/TravelText";
import { InputLabel,MenuItem,Select,FormControl,Box } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/GettingHere.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import clientPromise from "../../utils/mongodb";
import { useRouter } from "next/router";
import usaText from "../../components/text/arrivingUSA.json";
import germanyText from "../../components/text/arrivingGermany.json";

export default function GettingHere(props){

    const [location,setLocation] = useState(props.location!=="usa"&&props.location!=="de"?"rest":props.location);
    const router = useRouter();
    const locale = router.locale;

    function onLocationChange(e){
        setLocation(e.target.value)
    }

    return(
        <div>
            <Header />
            {locale==="es"&&<div className={styles.languageDisclaimer}><p>{"🇪🇸 Como probablemente eres de Valencia u otra parte de España, suponemos que sabrás llegar y por lo tanto no hemos traducido esta página. Si tienes cualquier duda, contáctanos."}</p></div>}
            <div className={styles.selectDiv}>
                <FormControl sx={{ m: 1, minWidth: 300}}>
                    <InputLabel id="location-select-label">Where are you joining us from?</InputLabel>
                    <Select value={location} onChange={onLocationChange} labelId="location-select-label" id="location-select" label="Where are you joining us from?">
                        <MenuItem value={"usa"}>USA</MenuItem>
                        <MenuItem value={"de"}>Deutschland</MenuItem>
                        <MenuItem value={"rest"}>Somewhere else</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.gridDiv}>
            <Grid container spacing={2}>
                {location === "usa" && (
                    <>
                        <Grid lg={6} xs={12}>
                            <TravelText title={usaText.flying_direct.title}>
                                <p>{usaText.flying_direct.p1}</p>
                                <p>{usaText.flying_direct.p2}</p>
                                <p>{usaText.flying_direct.p3}</p>
                            </TravelText>
                        </Grid>
                        <Grid lg={6} xs={12}>
                            <TravelText title={usaText.major_airport.title}>
                                <p>{usaText.major_airport.p1}</p>
                                <h3>{usaText.major_airport.madrid.title}</h3>
                                <p>{usaText.major_airport.madrid.train}</p>
                                <p>{usaText.major_airport.madrid.flight}</p>
                                <p>{usaText.major_airport.madrid.bus}</p>
                                <p>{usaText.major_airport.madrid.driving}</p>
                                <h3>{usaText.major_airport.barcelona.title}</h3>
                                <p>{usaText.major_airport.barcelona.train}</p>
                                <p>{usaText.major_airport.barcelona.flight}</p>
                                <p>{usaText.major_airport.barcelona.bus}</p>
                                <p>{usaText.major_airport.barcelona.driving}</p>
                            </TravelText>
                        </Grid>
                    </>
                )}
                {location === "de" && (
                     <>
                     <Grid lg={6} xs={12}>
                         <TravelText title={germanyText.direct_flights.title}>
                             <p>{germanyText.direct_flights.p1}</p>
                             <p>{germanyText.direct_flights.p2}</p>
                             <p>{germanyText.direct_flights.p3}</p>
                         </TravelText>
                         <TravelText title={germanyText.castellon_warning.title}>
                             <p>{germanyText.castellon_warning.p1}</p>
                         </TravelText>
                         <TravelText title={germanyText.from_spain.title}>
                             <p>{germanyText.from_spain.p1}</p>
                         </TravelText>
                     </Grid>
                     <Grid lg={6} xs={12}>
                         <TravelText title={germanyText.city_center.title}>
                             <h3>{germanyText.city_center.from_airport.title}</h3>
                             <p>{germanyText.city_center.from_airport.p1}</p>
                             <p>{germanyText.city_center.from_airport.metro}</p>
                             <p>{germanyText.city_center.from_airport.taxi}</p>
                             <p>{germanyText.city_center.from_airport.car}</p>
                             <h3>{germanyText.city_center.from_station.title}</h3>
                             <p>{germanyText.city_center.from_station.norte}</p>
                             <p>{germanyText.city_center.from_station.sorolla}</p>
                         </TravelText>
                     </Grid>
                 </>
                )}
            </Grid>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

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
        }
    }

    return {
      props: {
        ...(await serverSideTranslations(context.locale, ['common'])),
        location:data.location
      },
    };
  }