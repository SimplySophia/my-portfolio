import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return ( 
        <div className="flex justify-between items-center px-8 py-2 bg-white/70 dark:bg-slate-800/80 backdrop-blur fixed top-0 left-0 shadow-md w-full z-50">
            <Link href="/" className="text-2xl font-bold">
               &lt;<span className="text-primary">Sophire <span role="img" aria-label="female developer">👩🏽‍💻</span></span>/&gt;
            </Link>
            <MobileNav />
        </div>
     );
}
 
export default Navbar;
