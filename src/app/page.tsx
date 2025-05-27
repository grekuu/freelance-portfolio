import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
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
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
