import '../styles/globals.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { customTheme } from '../themes/CustomTheme';

const theme = createTheme(customTheme)

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
