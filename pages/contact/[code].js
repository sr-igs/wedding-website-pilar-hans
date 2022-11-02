import Header from "../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from "next-i18next";
import clientPromise from "../../utils/mongodb";
import styles from "../../styles/JustText.module.css";

export default function ContactPage(props){

    const {t} = useTranslation("common")

    return(
        <div>
            <Header />
            <div className={styles.mainDiv}>
                <p>{t("contactTextOne")}</p>
                <p><a>{"contact@ignacio-catherine.com"}</a></p>
                <p>{t("contactTextTwo")}</p>
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
        ...(await serverSideTranslations(locale, ['common','accommodation'])),
      },
    };
  }