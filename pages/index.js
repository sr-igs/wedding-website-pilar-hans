import Head from 'next/head';
import styles from '../styles/Home.module.css';
import InitialTitle from '../components/InitialTitle';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ignacio and Catherine 2023</title>
        <meta name="description" content="Ignacio and Catherine 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
