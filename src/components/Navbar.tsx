import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";


const Navbar = () => {
    return ( 
        <div className="flex justify-between px-5 py-2 dark:bg-slate-700 bg-opacity-80 backdrop-blur">
            <Link href="/" className="text-2xl font-bold">
               &lt;<span className="text-primary">Sophire👩🏽‍💻</span>/&gt;
            </Link>
            <div>
                <ThemeToggler />
            </div>
        </div>
     );
}
 
export default Navbar;