import Header from "../../components/Header";
import StayCard from "../../components/ui/StayCard";
import VenueStay from "../../components/accomodation/Venue";
import CityStay from "../../components/accomodation/CityStay";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styles from "../../styles/Stay.module.css";
import { Box } from "@mui/material";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import clientPromise from "../../utils/mongodb";

export default function WhereToStayPage(props){
    const closeHotelOptions = [
        {name:"Catalonia Excelsor",stars:"****",link:"https://www.cataloniahotels.com/en/hotel/catalonia-excelsior?gclid=EAIaIQobChMI1Nj8nfWO-wIVJO_tCh1HGQ_lEAAYASAAEgLpm_D_BwE",location:"Barcelonina, 5, Ciutat Vella",description:"Less than 100 metres away from the venue. A great option if you want to stay as close to the venue as possible. It is also pet friendly."},
        {name:"Casual Vintage",stars:"**",link:"https://www.casualhoteles.com/en/casual-vintage-valencia.html",location:"Barcelonina 1, Ciutat Vella",description:"If you're after something a bit more economical but still extremely close to the venue, this could be a good option to consider. It is also pet friendly."},
        {name:"Melia Plaza",stars:"****",link:"https://www.melia.com/en/hotels/spain/valencia/melia-plaza ",location:"Plaza del Ayuntamiento, 4, Ciutat Vella",description:"A classic among classics in Valencia, stay right in the city hall square and be less than 5 minutes walk from the venue."},
        {name:"One Shot Palacio Reina Victoria 04",link:"https://www.hoteloneshotpalacioreinavictoria04.com/en/?gclid=EAIaIQobChMIjcnoxvWO-wIVSJ7tCh3Drg9aEAAYASAAEgJwjPD_BwE",stars:"****",location:"Barcas, 4, Ciutat Vella",description:"Another good option within a 5 minute walk of the venue."},
        {name:"SH Ingles Boutique Hotel",link:"https://www.inglesboutique.com/en/",stars:"****",location:"Marques de Dos Aguas, 6, Ciutat Vella",description:"This hotel is less than 100 metres from the church (and therefore also very close to the venue). A classic hotel of Valencia that was recently refurbished."},
        {name:"Marques House Hotel Sup",link:"https://myrhotels.com/en/hotels/hotel-marques-house/",stars:"****",location:"Carrer de l'Abadia de San Marti, 10, Ciutat Vella",description:"Just a street away from the reception venue and the church."}
    ]

    const otherHotelOptions = [
        {name:"Hotel Las Arenas",link:"https://www.hotelvalencialasarenas.com/en",stars:"*****",location:"Carrer d'Eugènia Viñes, 22",description:"If you want to stay by the beach and treat yourself, this might be your best option. This five star hotel and spa has the sea in front. Please note that the Valencia beach is  a bit far from the city centre, so you will most likely need a taxi to get back."},
        {name:"Hotel Balandret",link:"http://balandret.com",stars:"****",location:"Passeig de Neptu, 22",description:"A cheaper yet still great option to stay by the beach, just in front of the sea. Please note that the beach is a bit far from the city centre and venue, you will most likely need a taxi on the day of the wedding."},
        {name:"Palacio Santa Clara Marriott",link:"https://www.marriott.co.uk/hotels/travel/vlcak-palacio-santa-clara-autograph-collection/",stars:"****",location:"Calle Pascual y Genis, 22",description:"A great hotel that was recently refurbished in the city centre. Although not as close as the other, it should take you under a 10 minute walk to get to the venue and church. One of the only hotels in the city centre with a (small) swimming pool."},
        {name:"Casual del Cine",link:"https://www.casualhoteles.com/en/casual-del-cine-valencia.html",stars:"**",location:"Convento San Francisco, 7",description:"Another economical option in the city centre, under a 10 minute walk from the venue and church. It is also pet friendly."},
        {name:"Casual del Cine",link:"https://www.guestreservations.com/Hotel-vincci-lys-valencia/",stars:"****",location:"Martinez Cubells, 5",description:"A classic hotel in Valencia that is under a 10 minute walk from the venue and church."},
        {name:"AC Hotel Colon",link:"https://www.marriott.co.uk/hotels/travel/vlcap-ac-hotel-colon-valencia/",stars:"****",location:"Calle Colon, 6",description:"This hotel is right in the main shopping street of Valencia, yet still a 10 minute walk of the venue and church. If you're really into your shopping this might be a good option!"}
    ]

    const {t} = useTranslation("accommodation");

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.paragraph}>
                <p><em>{t("intro")}</em></p>
            </div>
            <Box display="flex" justifyContent="center" marginTop="0.5rem">
                <Grid container columns={{sm:12,md:6}} spacing={3} justifyContent="center">
                    <Grid md={12}>
                        <StayCard title="Stay at the reception venue">
                            <VenueStay />
                        </StayCard>
                    </Grid>
                    <Grid>
                        <StayCard title="<5 minute walk from the venue">
                            <CityStay description="There are lot of good options within a 5 minute walk of the venue and the church" hotelOptions={closeHotelOptions} />
                        </StayCard>
                    </Grid> 
                    <Grid>
                        <StayCard title="Recommended places elsewhere in the city">
                            <CityStay description="If you don't mind staying slightly further from the venue, these are some good options both in the city centre and close to the beach" hotelOptions={otherHotelOptions} />
                        </StayCard>
                    </Grid>   
                </Grid>
            </Box>
        </div>
    )
}

export async function getServerSideProps(context){

    const locale = context.locale;
    const code = context.params.code;
  
    const client = await clientPromise;
    const db = client.db("weddingRsvpDB");
    let data = await db.collection("guests").findOne({uniqueCode:code},{projection:{_id:0}});
  
    if(!data){
        return {
            redirect: {
            destination: '/',
            permanent: false,
            },
     }};

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','accommodation'])),
      },
    };
  }