import { SessionProvider } from "next-auth/react";
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/progressBar.css';

function MyApp({ Component, pageProps }) {
  return( 
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  ) 
}

export default MyApp