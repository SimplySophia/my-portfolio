import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
import Link  from 'next/link';
import { 
    Home, 
    User, 
    Mail,
    Brain,
    Briefcase,
    Phone,
} from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; 
import ColorSwitcher from "../ColorSwitcher";

const Sidebar = () => {
    return ( 
        <Command className="relative bg-secondary border-3 border-primary shadow-[0_0_10px_hsl(var(--color-primary))] w-300 md:w-40 lg:w-80 h-500 md:h-30 lg:h-110 p-4 top-20 left-16 z-50 rounded-4xl">
            <CommandInput placeholder="Type a command or search..." />
                <CommandList>  
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                    <CommandItem className="relative group">
                            <Link href="/">
                                <Home className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Home
                                </span>
                            </Link>
                            <CommandShortcut>⌘A</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="relative group">
                            <Link href="/about">
                                <User className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    About
                                </span>
                            </Link>
                            <CommandShortcut>⌘A</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="relative group">
                            <Link href="/resume">
                                <Mail className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Resume
                                </span>
                            </Link>
                            <CommandShortcut>⌘R</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="relative group">
                            <Link href="/skills">
                                <Brain className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Skills
                                </span>
                            </Link>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="relative group">
                            <Link href="/services">
                                <Briefcase className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Services
                                </span>
                            </Link>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="relative group">
                            <Link href="/contact">
                                <Phone className="mr-2 w-20 h-20 text-primary hover:bg-primary hover:text-white pe-0 rounded transition" size={16} />
                                <span className="absolute left-10 top-4 -translate-y-1/2 ml-2 whitespace-nowrap text-sm font-semibold shadow-accent-foreground text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Contact
                                </span>
                            </Link>
                            <CommandShortcut>⌘A</CommandShortcut>
                        </CommandItem>
                        <ColorSwitcher />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Socials" className="flex flex-col items-center">
                        <div className="flex flex-row gap-4">
                            <CommandItem>
                                <Link href="/linkedin"><FaLinkedin className="mr-2 w-16 h-16" size={36} /></Link>
                            </CommandItem>
                            <CommandItem>
                                <Link href="/github"><FaGithub className="mr-2 w-4 h-4" size={16} /></Link>
                            </CommandItem>
                            <CommandItem>
                                <Link href="/twitter"><SiX className="mr-2 w-4 h-4" size={16} /></Link>
                            </CommandItem>
                        </div>
                    </CommandGroup>
                </CommandList>
        </Command>


     );
}
 
export default Sidebar;