import Header from "../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import DoCard from "../../../components/ui/DoCard";
import { Masonry } from "@mui/lab";
import styles from "../../../styles/WhatToDo.module.css";

export default function WhatToDo(props){

    const {t} = useTranslation("whatToDo");

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div style={{marginTop:"2rem"}}>
                <div className={styles.disclaimer}>{t("close.description")}<br />
                {"🌲 - Nature 🏰 - Historic Town 🏖️ - Beach and coast"}</div>
                <Masonry columns={{xs:1,sm:2,md:3,lg:4,xl:5}} spacing={2}>
                    {t("close.cards", { returnObjects: true }).map(i=>{
                        return(<DoCard key={i.title} image={i.image} title={i.title} description={i.description} link={i.link} address={null} />)
                    })}
                </Masonry>
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