import Header from "../../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import clientPromise from "../../utils/mongodb";
import { useTranslation } from "next-i18next";

export default function Registry(){

    const {t} = useTranslation("registry")

    const divStyle = {
        textAlign:"center",
        margin:"3rem auto",
        fontFamily:"'Martel','serif'",
    }

    const cardStyle={
        padding:"1rem",
        width:"20rem"
    }

    return(
        <div>
            <Header />
            <div style={divStyle}>
                <p style={{maxWidth:"40rem",margin:"1rem auto",padding:"0 2rem"}}>{t("initialText")}</p>
                <Grid container spacing={3} sx={{textAlign:"center"}} justifyContent="center">
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p>{`${t("accountHolder")}: H Wilke & P Clavel Nieto`}</p>
                            <p>{"IBAN: LT97 3250 0826 9045 2787 "}</p>
                            <p>{"BIC/SWIFT: REVOLT21"}</p>
                            <p>{`Bank Name and Address: Revolut Bank UAB, Konstitucijos ave. 21B, 08130, Vilnius, Lithuania`}</p>
                            <p>{"Correspondent BIC: CHASDEFX"}</p>
                        </Card>
                    </Grid>
                </Grid>
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
        ...(await serverSideTranslations(locale, ['common','registry'])),
      },
    };
  }