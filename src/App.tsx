import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BelowHero from "./components/BelowHero/BelowHero";
import Speakers from "./components/Speakers/Speakers";
import BelowSpeakers from "./components/BelowSpeakers/BelowSpeakers";
import DonationSection from "./components/DonationSection/DonationSection";
import AppSection from "./components/AppSection/AppSection";
import Supporters from "./components/Supporters/Supporters";
import Footer from "./components/Footer/Footer";
import FadeIn from "./components/FadeIn/FadeIn";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {[
          <BelowHero />,
          <Speakers />,
          <BelowSpeakers />,
          <DonationSection />,
          <AppSection />,
          <Supporters />,
        ].map((component, index) => (
          <FadeIn key={index}>{component}</FadeIn>
        ))}
      </main>
      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}

export default App;
