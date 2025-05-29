
import AboutMe from "@/components/about/About";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar.tsx/page";

const Home = () => {
  return ( 
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-20">
        <AboutMe />
      </div>
    </>
   );
}
 
export default Home;