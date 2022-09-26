import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initInternationalization } from '../i18n'

function MyApp({ Component, pageProps }: AppProps) {
  initInternationalization('fr')
  return <Component {...pageProps} />
}

export default MyApp
