import {Link} from "react-router-dom";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (<nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Aidan Zhong</h1>

            {/* Mobile menu button (hamburger) */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>
            {/* Mobile dropdown */}
            {open && (<motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: "auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="md:hidden flex flex-col space-y-2">
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/work_experiences" onClick={() => setOpen(false)}>Work Experiences</Link>
                <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
                <Link to="/research_and_projects" onClick={() => setOpen(false)}>Research & Projects</Link>
                <Link to="/sports" onClick={() => setOpen(false)}>Sports</Link>
                <Link to="/Enturepreneurship" onClick={() => setOpen(false)}>Entrepreneurship</Link>
                <Link to="/leetcode" onClick={() => setOpen(false)}>LeetCode</Link>
            </motion.div>)}

            {/* Desktop links */}
            <div className="hidden md:flex space-x-4">
                <Link to="/" className="hover:text-blue-400">Home</Link>
                <Link to="/about" className="hover:text-blue-400">About</Link>
                <Link to="/work_experiences" className="hover:text-blue-400">Work Experiences</Link>
                <Link to="/education" className="hover:text-blue-400">Education</Link>
                <Link to="/research_and_projects" className="hover:text-blue-400">Research & Projects</Link>
                <Link to="/sports" className="hover:text-blue-400">Sports</Link>
                <Link to="/Enturepreneurship" className="hover:text-blue-400">Entrepreneurship</Link>
                <Link to="/leetcode" className="hover:text-blue-400">LeetCode</Link>
            </div>
        </div>
    </nav>)
}