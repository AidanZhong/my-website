export default function Home() {
    return (<section className="text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Aidan Zhong, and welcome to my personal webpage</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Entrepreneur · AI Researcher · Fullstack Engineer · Triathlete
            </p>
            <div className="mt-8 space-x-4">
                <a href="https://github.com/AidanZhong" target="_blank"
                   className="text-blue-500 hover:underline">GitHub</a>
                <a href="https://leetcode.cn/u/xian-dan-wu-pin/" target="_blank"
                   className="text-blue-500 hover:underline">LeetCode</a>
                <a href="https://scholar.google.com.hk/citations?user=72Djl90AAAAJ" target="_blank"
                   className="text-blue-500 hover:underline">Google Scholar</a>
            </div>
        </section>)
}