import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import AdminNav from '../components/AdminNav';
import {useRouter} from 'next/router';

export const siteTitle = 'My App';
export default function Layout({ children }) {
  const router = useRouter();
  const url_path = router.pathname;
  const regex = /^\/admin/;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
        name="description"
        content="Website for Robert Bagwell"
        />
        <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
        siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!url_path.match(regex) ? <Nav pages={children.props.pages} /> : <AdminNav /> }
        { children }
      <Footer />
    </>
  );
}