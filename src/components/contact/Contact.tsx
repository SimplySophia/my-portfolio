"use client";
import SectionHeading from "../helper/SectionHeading";

const ContactPage = () => {
    return ( 
        <section 
        aria-labelledby="about-heading"
          className="w-full px-4 md:px-8 py-8 max-w-5xl mx-auto mt-8"
        >
            <div className="flex flex-col gap-8 items-start">

            <SectionHeading heading="Contact Me" scrollToId="next-section"/>
            <div id="next-section" className="pt-10 animate-fade-in duration-700 flex flex-col gap-4 max-w-2xl">
                <div className="w-full max-w-2xl mx-auto flex flex-col items-start">
                    <form action="">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary" id="about-heading">
                            Get in Touch
                        </h1>
                        <p className="py-2 px-2 text-gray-400 leading-relaxed text-base md:text-lg">
                            I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
                        </p>
                        <div className="flex flex-col gap-6 mt-4">
                            <input type="text" placeholder="Your Name" className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-full py-2 rounded-2xl px-4 max-w-xs" />
                            <input type="email" placeholder="Your Email" className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-full py-2 rounded-2xl px-4 max-w-xs" />
                            <textarea placeholder="Your Message" className="border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-full py-2 rounded-2xl px-4 max-w-xs"></textarea>
                            <button type="submit" className="bg-primary-foreground shadow-[0_0_10px_hsl(var(--color-primary))] rounded-2xl w-full max-w-xs py-2 text-gray-400">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default ContactPage;