import {motion} from "framer-motion";
import profilePic from "../assets/tri_pic.jpg";

export default function About() {
    return (<div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
        <motion.div
            className="absolute inset-0"
            initial={{opacity: 0, scale: 1.05}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1.5, ease: "easeOut"}}
        >
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${profilePic})`,
                    backgroundColor: "#1f2937", // Tailwind gray-800
                    backgroundBlendMode: "overlay",
                }}
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-950/80"/>
        </motion.div>

        {/* Main Content */}
        <div className="relative max-w-5xl mx-auto px-6 py-24">
            <motion.h1
                className="text-5xl font-extrabold mb-8 text-white"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                About Me
            </motion.h1>

            <motion.div
                className="space-y-6 text-lg leading-relaxed text-gray-300"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
            >
                <p>
                    Hello! I'm <span className="font-semibold text-blue-400">Qinkun Zhong (Aidan)</span>,
                    a passionate <strong>AI researcher, full-stack engineer, and triathlete</strong>.
                    I’m currently pursuing my entrepreneurship <strong>GoalBet</strong> which is a platform
                    where goals meet accountability. We solve procrastination by making your goals public, fun, and
                    fueled by community bets.
                </p>
                <p>
                    Previously, I worked as a <strong>Backend Development Engineer at Huawei</strong>
                    where I built large-scale microservice systems using Spring Boot, Docker, and Kubernetes.
                    I also contributed to algorithmic modules and internal framework development.
                </p>
                <p>
                    I have published <strong>3 IEEE papers</strong> in fields like mobile positioning and
                    sensor fusion, and I recently developed a <strong>real-time gesture recognition system</strong>
                    that controls a PC via camera-based hand tracking.
                </p>
                <p>
                    Outside of tech, I’m a <strong>triathlete and long-distance runner</strong>, driven by
                    discipline, endurance, and continuous improvement.
                </p>

                <p>
                    My motto: <span className="italic text-blue-300">
                      “Every man dies. Not every man really lives”
                    </span>
                </p>
            </motion.div>
        </div>
    </div>)
}
