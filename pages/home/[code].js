import Header from "../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function HomePage(props){
    return(
        <div>
            <Header />
        </div>
    )
}

export async function getServerSideProps({locale}){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }