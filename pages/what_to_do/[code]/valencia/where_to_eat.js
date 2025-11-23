import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import { Breadcrumbs,Button,Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../../styles/WhatToDo.module.css";
import EatingTabs from "../../../../components/eating/EatingTabs";


export default function WhatToDo(props){

    const {t} = useTranslation("whatToDo");
    const router = useRouter();
    const { query: { code }, locale } = router;

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.breadcrumbs}>
                <Breadcrumbs>
                    <Link href={`/what_to_do/${code}`} locale={locale} passHref>
                        <Button component="a">{t("common:whatToDo")}</Button>
                    </Link>
                    <Link href={`/what_to_do/${code}/valencia`} locale={locale} passHref>
                        <Button component="a">Valencia</Button>
                    </Link>
                    <Typography>{t("eat.title")}</Typography>
                </Breadcrumbs>
            </div>
            <div className={styles.content}>
                <EatingTabs />
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
        ...(await serverSideTranslations(locale, ['common', 'whatToDo', 'eating'])),
      },
    };
  }