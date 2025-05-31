
import AboutMe from "@/components/about/About";
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
    </>
   );
}
 
export default Home;