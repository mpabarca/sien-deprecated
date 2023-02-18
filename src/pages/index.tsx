import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Quote from '@/components/Quote';
import Services from '@/components/Services';

export default function Home() {
  return (
    <section className='home'>
      <Header />
      <Quote />
      <Services />
      <Description />
      <Footer />
    </section>
  )
}
