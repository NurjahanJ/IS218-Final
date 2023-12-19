'use client'
import Header from '@/component/Header'
import { Helmet } from 'react-helmet';
import Review from '@/component/Review'
import MainBanner from '@/component/MainBanner'
import Subscription from '@/component/Subscription'
import Footer from '@/component/Footer'
import CookieConsent from '@/component/cookie'

export default function Page() {
  return (
    <div>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8F7WJ3R8GN"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8F7WJ3R8GN');
          `}
        </script>
        {/* End Google Analytics */}
      </Helmet>
      <Header />
      <MainBanner />
      <Subscription />
      <Review />
      <Footer />
      <CookieConsent />
    </div>
  )
}


