import { About, Explore, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <Explore />
      <About />
    </div>
  </div>
);

export default Home;
