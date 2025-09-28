import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "../../../../styles/JustText.module.css"
import Link from "next/link";

export default function WhatToDo(props){

    const {t} = useTranslation("common");
    const router = useRouter();
    const {code} = router.query

    return(
        <div>
            <Header />
            <div className={styles.mainDiv}>
                <p>{t("spainText")}</p>
                <a href="https://www.spain.info/en/" target="_blank" rel="noopener noreferrer">{t("tourismWebsiteTitle")}</a>
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
     }};

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }