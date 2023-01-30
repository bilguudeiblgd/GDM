import Layout from '../components/Layout';
import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleRouteChange = (url) => {
    window.gtag('config', 'G-SDS6YY9HD1', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

}

export default MyApp
