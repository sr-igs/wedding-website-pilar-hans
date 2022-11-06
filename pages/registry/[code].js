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
                            <p><strong>{"GBP"}</strong></p>
                            <p>{`${t("accountHolder")}: Ignacio Clavel Briz or Catherine Brims`}</p>
                            <p>{"Account number: 36249453"}</p>
                            <p>{"Sort code: 23-14-70"}</p>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p><strong>{"Euros"}</strong></p>
                            <p>{`${t("accountHolder")}: Ignacio Clavel Briz`}</p>
                            <p>{"BIC: TRWIBEB1XXX"}</p>
                            <p>{"IBAN: BE09 9671 5910 8557"}</p>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p><strong>{"AUD"}</strong></p>
                            <p>{`Bank: Commonwealth Bank`}</p>
                            <p>{`${t("accountHolder")}: Catherine Brims`}</p>
                            <p>{"BSB: 06 2593"}</p>
                            <p>{"Account number: 036 7943"}</p>
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
    let data = await db.collection("guests").findOne({uniqueCode:code},{projection:{_id:0}});

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