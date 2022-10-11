import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainTitle from '../components/ui/mainTitle'
import { TextField,Button } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ignacio and Catherine 2023</title>
        <meta name="description" content="Ignacio and Catherine 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainTitle />
      </main> 
    </div>
  )
}
