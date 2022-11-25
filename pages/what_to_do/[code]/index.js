import Header from "../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import DoCard from "../../../components/ui/DoCard";

export default function WhatToDo(props){

    const {t} = useTranslation("common");

    const styles = {
        margin:"0 auto",
        padding:"2rem",
        fontFamily:"'Martel','serif'",
        textAlign:"center"
    }

    return(
        <div style={styles}>
            <Header />
            <h4>{t("workingOn")}</h4>
            <DoCard />
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