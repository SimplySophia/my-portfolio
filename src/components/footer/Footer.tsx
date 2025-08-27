"use client";

const Footer = () => {
    return ( 
        <footer className="bg-[#262627] text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">
                    Thank you for visiting my portfolio! If you have any questions or would like to connect, feel free to reach out.
                </p>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} | Developed By Sophia Vincent.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;