import Hero from '@/components/sections/Hero'
import AboutUs from '@/components/sections/AboutUs'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Expertise from '@/components/sections/Expertise'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import News from '@/components/sections/News'
import Partners from '@/components/sections/Partners'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Expertise />
      <Services />
      <Products />
      <News />
      <Partners />
    </main>
  )
}