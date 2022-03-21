/* eslint-disable prettier/prettier */
//import 'normalize.css/normalize.css';
import '../css/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import Analytics from '../components/analytics'
import LayoutWrapper from '../components/LayoutWrapper'
import { ClientReload } from '../components/ClientReload'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session = {session}>
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
    </SessionProvider>
  )
}
