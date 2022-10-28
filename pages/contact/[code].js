import Header from "../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from "next-i18next";

export default function ContactPage(props){
    const divStyle = {
        textAlign:"center",
        marginTop:"3rem",
        fontFamily:"'Martel','serif'"
    }

    const anchorStyle = {
        fontWeight:"bold",
        cursor:"pointer",
        color:"#AEA4D0"
    }

    const {t} = useTranslation("common")

    return(
        <div>
            <Header />
            <div style={divStyle}>
                <p>{t("contactTextOne")}</p>
                <p><a style={anchorStyle}>{"contact@ignacio-catherine.com"}</a></p>
                <p>{t("contactTextTwo")}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps({locale}){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','accommodation'])),
      },
    };
  }