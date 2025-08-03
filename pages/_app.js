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
        <title>Pilar and Hans 2026</title>
        <meta name="description" content="Pilar and Hans 2026" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <Footer />
    </ThemeProvider>
}

export default appWithTranslation(MyApp)
