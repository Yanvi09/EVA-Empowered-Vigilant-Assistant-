import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CoreFeatures from '../components/CoreFeatures'; // to be created next
import Plans from '../components/Plans';
import Courses from '../components/Courses'; // to be created next
import KeyFeatures from '../components/KeyFeatures'; // later
import Testimonials from '../components/Testimonials'; // later
import Blogs from '../components/Blogs'; // later
import Contact from '../components/Contact'; // later

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="core-features">
        <CoreFeatures />
      </section>

      <section id="plans">
        <Plans />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
