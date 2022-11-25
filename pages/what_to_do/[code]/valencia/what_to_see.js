import Header from "../../../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../../../utils/mongodb";
import { useTranslation } from "next-i18next";
import DoCard from "../../../../components/ui/DoCard";
import { Breadcrumbs,Button,Divider } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../../styles/WhatToDo.module.css";
import information from "../../../../public/text/what_to_do_en";
import { Masonry } from "@mui/lab";

export default function WhatToDo(props){

    const {t} = useTranslation("common");
    const router = useRouter();
    const {code} = router.query

    return(
        <div className={styles.mainDiv}>
            <Header />
            <Divider />
            <div className={styles.breadcrumbs}>
                <Breadcrumbs>
                    <Button href={`/what_to_do/${code}`} LinkComponent={Link} component="a">What to do</Button>
                    <Button href={`/what_to_do/${code}/valencia`} LinkComponent={Link} component="a">Valencia</Button>
                    <p>What to see</p>
                </Breadcrumbs>
            </div>
            <Masonry columns={{xs:1,sm:2,md:3,lg:4,xl:5}} spacing={2}>
                {information.map(i=>{
                    return(<DoCard key={i.title} image={i.image} title={i.title} description={i.description} link={i.link} />)
                })}
            </Masonry>
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