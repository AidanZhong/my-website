import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Entrepreneurship from "./pages/Entrepreneurship.jsx";
import LeetCode from "./pages/Leetcode";
import ResearchAndProjects from "./pages/ResearchAndProjects";
import Sports from "./pages/Sports";
import WorkExperiences from "./pages/WorkExperience.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work_experiences" element={<WorkExperiences />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/research_and_projects" element={<ResearchAndProjects />} />
                        <Route path="/sports" element={<Sports />} />
                        <Route path="/Enturepreneurship" element={<Entrepreneurship />} />
                        <Route path="/leetcode" element={<LeetCode />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
