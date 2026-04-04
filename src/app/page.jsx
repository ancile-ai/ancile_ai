import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import Industries from '../sections/Industries';
import CallToAction from '../sections/CallToAction';

export default function Home() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Process />
      <Industries />
      <CallToAction />
      <Footer />
    </div>
  );
}
