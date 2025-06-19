import {
  Contact,
  FAQ,
  Footer,
  Header,
  Hero,
  Process,
  Services,
  Testimonials,
  Works,
} from '@/sections';

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
