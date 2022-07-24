import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { ApolloProvider } from '@apollo/client'
import apolloClient from "../../apolloClient";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer autoClose={1500} />
    </ApolloProvider>
  );
}

export default MyApp
