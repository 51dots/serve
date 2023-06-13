import { About, Explore, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
  </div>
);

export default Home;
