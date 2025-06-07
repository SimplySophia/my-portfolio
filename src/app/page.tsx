
import AboutMe from "@/components/about/About";
import ContactPage from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Sidebar from "@/components/Sidebar.tsx/page";
import Skills from "@/components/skills/skills";

const Home = () => {
  return ( 
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-20">
        <AboutMe />
      </div>
      <Skills />
      <FeaturedProjects />
      <ContactPage/>
      <Footer />
    </>
   );
}
 
export default Home;