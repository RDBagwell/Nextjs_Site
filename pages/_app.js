import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/progressBar.css';

function MyApp({ Component, pageProps }) {
  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp