import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ExperienceEducation from './ExperienceEducation';
import SkillsProjectsContact from './SkillsProjectsContact';
import ContactForm from './ContactForm';
import Footer from './Footer';


const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation/>
      {/* Hero Section */}
      <HeroSection />

      {/* Experience and Education Sections */}
      <ExperienceEducation />

      <SkillsProjectsContact />
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Portfolio;