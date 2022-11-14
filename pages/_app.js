import '../styles/globals.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { customTheme } from '../themes/customTheme';
import { appWithTranslation } from 'next-i18next';
import Footer from '../components/ui/Footer';
import Head from 'next/head';

const theme = createTheme(customTheme)

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
      <Head>
        <title>Ignacio and Catherine 2023</title>
        <meta name="description" content="Ignacio and Catherine 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
    </ThemeProvider>
}

export default appWithTranslation(MyApp)
