import Header from "../../components/Header";
import StayCard from "../../components/ui/StayCard";
import CityStay from "../../components/accomodation/CityStay";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styles from "../../styles/Stay.module.css";
import { Box } from "@mui/material";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import clientPromise from "../../utils/mongodb";

export default function WhereToStayPage(props){
    const {t} = useTranslation("whereToStay");

    return(
        <div className={styles.mainDiv}>
            <Header />
            <Box display="flex" justifyContent="center" marginTop="0.5rem">
                <Grid container columns={{sm:12,md:6}} spacing={3} justifyContent="center">
                    <Grid>
                        <StayCard title={t("whereToStay:close_title")}>
                            <CityStay description={t("whereToStay:close_intro")} hotelOptions={t('whereToStay:close_options', { returnObjects: true })} />
                        </StayCard>
                    </Grid>
                    <Grid>
                        <StayCard title={t("whereToStay:other_title")}>
                            <CityStay description={t("whereToStay:other_intro")} hotelOptions={t('whereToStay:other_options', { returnObjects: true })} />
                        </StayCard>
                    </Grid>
                    <Grid>
                        <StayCard title={t("whereToStay:far_title")}>
                            <CityStay hotelOptions={t('whereToStay:far_options', { returnObjects: true })} />
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
    let data = await db.collection("guests_pilar_hans").findOne({uniqueCode:code},{projection:{_id:0}});
  
    if(!data){
        return {
            redirect: {
            destination: '/',
            permanent: false,
            },
     }};

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'whereToStay'])),
      },
    };
  }