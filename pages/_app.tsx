import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return <Provider><Layout><Component {...pageProps} /></Layout></Provider>
}

export default MyApp
