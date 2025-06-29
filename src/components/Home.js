import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col  justify-center items-center text-center px-4 "
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-2xl sm:text-4xl font-bold"
      >
        Hi, I'm Manisha Pandey
      </motion.h1>

      <p className="mt-4  text-lg">
        A Frontend Developer passionate about clean UI and responsive design.
      </p>

      {/* ✅ Download CV Button */}
      <a
        href="/Mahi.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
      >
        Download My CV
      </a>

      <a
        href="/Mahi.pdf"
        target="_black"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
      >
        View my CV
      </a>
    </section>
  );
}
