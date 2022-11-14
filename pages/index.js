import styles from '../styles/Home.module.css';
import InitialTitle from '../components/InitialTitle';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div>
          <InitialTitle />
        </div>
      </main> 
    </div>
  )
}

export async function getStaticProps({locale}){
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
