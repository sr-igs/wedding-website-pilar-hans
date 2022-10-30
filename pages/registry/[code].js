import Header from "../../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Registry(){

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
                <p style={{maxWidth:"40rem",margin:"1rem auto",padding:"0 2rem"}}>{"The best gift you could give is to share our special day with us. However, for those who would like to, a contribution towards our honeymoon and new flat together would mean a lot to us.  "}</p>
                <Grid container spacing={3} sx={{textAlign:"center"}} justifyContent="center">
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p><strong>{"GBP"}</strong></p>
                            <p>{"Account holder: Ignacio Clavel Briz or Catherine Brims"}</p>
                            <p>{"Account number: 36249453"}</p>
                            <p>{"Sort code: 23-14-70"}</p>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p><strong>{"Euros"}</strong></p>
                            <p>{"Account holder: Ignacio Clavel Briz"}</p>
                            <p>{"BIC: TRWIBEB1XXX"}</p>
                            <p>{"IBAN: BE09 9671 5910 8557"}</p>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined" sx={cardStyle}>
                            <p><strong>{"AUD"}</strong></p>
                            <p>{"Account holder: Catherine Brims"}</p>
                            <p>{"BIC: TRWIBEB1XXX"}</p>
                            <p>{"IBAN: BE09 9671 5910 8557"}</p>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export async function getServerSideProps({locale}){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','aboutDay'])),
      },
    };
  }