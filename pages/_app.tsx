import '@/styles/globals.css'
import '@/styles/Form.css'
import '@/styles/button.css'
import '@/styles/App.css'
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig" 

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={darkTheme}> <Component {...pageProps} /></ThemeProvider>
}
