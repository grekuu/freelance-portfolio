import { Footer, Header } from '@/blocks';
import {
  Contact,
  FAQ,
  Hero,
  Process,
  Services,
  Testimonials,
  Works,
} from '@/sections/Landing';

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Works />
      <Testimonials />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
