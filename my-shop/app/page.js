'use client'
import Header from '@/component/Header'
import Review from '@/component/Review'
import MainBanner from '@/component/MainBanner'
import Subscription from '@/component/Subscription'
import Footer from '@/component/Footer'

export default function Page() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Subscription />
      <Review />
      <Footer />
    </div>
  )
}


