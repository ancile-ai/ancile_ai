import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import CapabilityLanes from '../sections/CapabilityLanes';
import Flagship from '../sections/Flagship';
import OperatingModel from '../sections/OperatingModel';
import Differentiators from '../sections/Differentiators';
import CallToAction from '../sections/CallToAction';

export default function Home() {
  return (
    <div className="page-shell min-h-screen bg-transparent">
      <Header />
      <Hero />
      <CapabilityLanes />
      <Flagship />
      <OperatingModel />
      <Differentiators />
      <CallToAction />
      <Footer />
    </div>
  );
}
