import 'styles/globals.css';
import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import mixpanel from 'mixpanel-browser';

mixpanel.init('d0b0c9e9b42004e55728a61b378e6cdf', { debug: true });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  useEffect(() => {
    // Import Tidio script on the client side
    const tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/tzldwrkbiu9zptds5zcpkat1s54c3sqx.js';
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
