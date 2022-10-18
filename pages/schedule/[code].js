import Header from "../../components/Header";
import Schedule from "../../components/Schedule";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function SchedulePage(props){
    return(
        <div>
            <Header />
            <Schedule />
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