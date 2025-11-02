import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Breadcrumbs,Button } from "@mui/material";
import styles from "../../../../styles/WhatToDo.module.css";

export default function WhatToDo(props){

    const {t} = useTranslation("whatToDo");
    const router = useRouter();
    const {code} = router.query

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.breadcrumbs}>
                <Breadcrumbs>
                    <Button href={`/what_to_do/${code}`} LinkComponent={Link} component="a">{t("common:whatToDo")}</Button>
                    <p>Valencia</p>
                </Breadcrumbs>
            </div>
            <div>
                <Link href={`/what_to_do/${code}/valencia/what_to_see`}><p className={styles.whatLink}>{t("see.title")}</p></Link>
                <Link href={`/what_to_do/${code}/valencia/where_to_eat`}><p className={styles.whatLink}>{t("eat.title")}</p></Link>
                {/* <p className={styles.whatLink}>{"Where to eat (Coming soon)"}</p> */}
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