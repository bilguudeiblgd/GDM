import Layout from '../components/Layout';
import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const handleRouteChange = (url) => {
    window.gtag('config', 'G-SDS6YY9HD1', {
      page_path: url,
    });
  };

  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

}

export default MyApp
