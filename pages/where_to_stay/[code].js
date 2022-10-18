import Header from "../../components/Header";
import StayCard from "../../components/ui/StayCard";
import VenueStay from "../../components/accomodation/Venue";
import CityStay from "../../components/accomodation/CityStay";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styles from "../../styles/Stay.module.css";
import { Box } from "@mui/material";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function WhereToStayPage(props){
    const closeHotelOptions = [
        {name:"Catalonia Excelsor",stars:"****",location:"Barcelonina, 5, Ciutat Vella",description:"Less than 100 metres away from the venue. A great option if you want to stay as close to the venue as possible."},
        {name:"Casual Vintage",stars:"**",location:"Barcelonina 1, Ciutat Vella",description:"If you're after something a bit more economical but still extremely close to the venue, this could be a good option to consider"},
        {name:"Melia Plaza",stars:"****",location:"Plaza del Ayuntamiento, 4, Ciutat Vella",description:"A classic among classics in Valencia, stay right in the city hall square and be less than 5 minutes walk from the venue."},
        {name:"One Shot Palacio Reina Victoria 04",stars:"****",location:"Barcas, 4, Ciutat Vella",description:"Another good option within a 5 minute walk of the venue."}
    ]

    const otherHotelOptions = [
        {name:"Trial",stars:"***",location:"Here",description:"There"}
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

export async function getServerSideProps({locale}){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','accommodation'])),
      },
    };
  }