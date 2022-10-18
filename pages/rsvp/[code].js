import Header from "../../components/Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import RsvpForm from "../../components/rsvp/RsvpForm";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "../../styles/Rsvp.module.css";
import { Button } from "@mui/material";
import clientPromise from "../../utils/mongodb";

export default function RsvpPage(props){
    return(
        <div>
            <Header />
            <div className={styles.mainDiv}>
                <Grid container spacing={3} justifyContent="center">
                    {props.data.people.map(g=>{
                        return(<Grid key={`grid-${g.fullName}`}><RsvpForm key={g.fullName} name={g.name} /></Grid>)
                    })}
                </Grid>
                <div className={styles.buttonDiv}>
                    <Button variant="outlined">Submit</Button>
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
        ...(await serverSideTranslations(locale, ['common'])),
        data
      },
    };
  }