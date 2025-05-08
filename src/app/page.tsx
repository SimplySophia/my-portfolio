import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar.tsx/page";

const Home = () => {
  return ( 
    <>
      <Navbar />
      <Sidebar />
      <Hero />
    </>
   );
}
 
export default Home;