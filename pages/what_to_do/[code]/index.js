import Header from '../../../components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/WhatToDo.module.css";


export default function WhatToDo(props){

    const {t} = useTranslation("whatToDo");
    const router = useRouter();
    const {code} = router.query

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.linkDiv}>
                <Link href={`/what_to_do/${code}/valencia`}><p className={styles.whatLink}>{t("links.valencia")}</p></Link>
                <Link href={`/what_to_do/${code}/close-valencia`}><p className={styles.whatLink}>{t("links.closeToValencia")}</p></Link>
                <Link href={`/what_to_do/${code}/spain`}><p className={styles.whatLink}>{t("links.elsewhereInSpain")}</p></Link>
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
        ...(await serverSideTranslations(locale, ['common', 'whatToDo'])),
      },
    };
  }