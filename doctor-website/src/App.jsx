import HeroSection from "./components/HeroSection";
import AppointmentForm from "./components/AppointmentForm";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <AppointmentForm />
      <BlogSection />
      <ContactSection />
    </>
  );
}
export default App;
