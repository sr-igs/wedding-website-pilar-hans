import Header from "../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import DoCard from "../../../components/ui/DoCard";
import { Masonry } from "@mui/lab";
import information from "../../../public/text/what_to_do_close_en";
import styles from "../../../styles/WhatToDo.module.css";

export default function WhatToDo(props){

    const {t} = useTranslation("common");

    return(
        <div className={styles.mainDiv}>
            <Header />
            <div style={{marginTop:"2rem"}}>
                <div className={styles.disclaimer}>{"In this section we have included some sights within the Valencian community, the region of which Valencia is capital. These are all places we've personally been to and recommend, so it's far from an exhaustive list. To make it a bit easier, we've used the following legend:"}<br />
                {"🌲 - Nature 🏰 - Historic Town 🏖️ - Beach and coast"}</div>
                <Masonry columns={{xs:1,sm:2,md:3,lg:4,xl:5}} spacing={2}>
                    {information.map(i=>{
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