import '../styles/globals.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { customTheme } from '../themes/customTheme';
import { appWithTranslation } from 'next-i18next';
import Footer from '../components/ui/Footer';

const theme = createTheme(customTheme)

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
}

export default appWithTranslation(MyApp)
