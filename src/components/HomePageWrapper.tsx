'use client'

import StoreProvider from '@/store/StoreProvider'
import NavigationStatic from '@/components/Navigation/NavigationStatic'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HomePageComponents/HeroSection'
import UTPSection from '@/components/HomePageComponents/UTPSection'
import AdvantagesSection from '@/components/HomePageComponents/AdvantagesSection'
import ProcessSection from '@/components/HomePageComponents/ProcessSection'
import RatesSection from '@/components/HomePageComponents/RatesSection'
import ReviewsSection from '@/components/HomePageComponents/ReviewsSection'
import AboutSection from '@/components/HomePageComponents/AboutSection'
import ContactSection from '@/components/HomePageComponents/ContactSection'

const HomePageWrapper = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <div className='w-full flex justify-center items-center lg:pt-8 pt-4 lg:px-8 px-4 z-10'>
          <NavigationStatic />
        </div>
        <div className="flex-1">
          {/* Основной контент */}
          <HeroSection />
          <UTPSection />
          <AdvantagesSection />
          <ProcessSection />
          <RatesSection />
          <ReviewsSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </StoreProvider>
  )
}

export default HomePageWrapper
