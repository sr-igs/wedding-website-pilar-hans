import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Breadcrumbs,Button } from "@mui/material";

export default function WhatToDo(props){

    const {t} = useTranslation("common");
    const router = useRouter();
    const {code} = router.query

    const styles = {
        margin:"0 auto",
        padding:"2rem",
        fontFamily:"'Martel','serif'",
        textAlign:"center"
    }

    return(
        <div style={styles}>
            <Header />
            <div>
                <Breadcrumbs>
                    <Button href={`/what_to_do/${code}`} LinkComponent={Link} component="a">What to do</Button>
                    <p>Valencia</p>
                </Breadcrumbs>
            </div>
            <Link href={`/what_to_do/${code}/valencia/what_to_see`}>What to see</Link>
            <Link href={`/what_to_do/${code}/valencia/what_to_eat`}>Where to eat</Link>
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
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }