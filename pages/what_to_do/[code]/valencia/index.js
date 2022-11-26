import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Breadcrumbs,Button } from "@mui/material";
import styles from "../../../../styles/WhatToDo.module.css";

export default function WhatToDo(props){

    const {t} = useTranslation("common");
    const router = useRouter();
    const {code} = router.query

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.breadcrumbs}>
                <Breadcrumbs>
                    <Button href={`/what_to_do/${code}`} LinkComponent={Link} component="a">What to do</Button>
                    <p>Valencia</p>
                </Breadcrumbs>
            </div>
            <div>
                <Link href={`/what_to_do/${code}/valencia/what_to_see`}><p className={styles.whatLink}>What to see</p></Link>
                <Link href={`/what_to_do/${code}/valencia/what_to_eat`}><p className={styles.whatLink}>Where to eat</p></Link>
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
     }};

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }