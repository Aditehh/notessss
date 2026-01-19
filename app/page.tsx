"use client";

import AuthButton from "@/components/ui/auth-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 sticky top-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-50 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">BeatNotes</h1>
        <div className=" flex gap-5">
          <AuthButton />
          <Button>
            <Link href={"https://github.com/Aditehh"}>
              <Github className="rounded-2xl " />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-16 md:mt-24 gap-10 relative">
        {/* Soft background character shape */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 -z-10"></div>

        {/* Text */}
        <motion.div
          className="max-w-xl z-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">
            Organize your <span className="text-purple-600 dark:text-purple-400">Notes</span> effortlessly
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            BeatNotes is a minimal, modern note-taking app with AI features, markdown support, and smart organization tools.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href={"/notes"}>Goto NOTES</Link>
            </Button>

          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full max-w-lg z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/notes-illustration.png" // Replace with a subtle minimal illustration
            alt="Notes Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mt-24 px-6 md:px-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Markdown Notes",
            desc: "Write clean, formatted notes using markdown.",
          },
          {
            title: "AI Suggestions",
            desc: "Get smart tag and content suggestions powered by AI.",
          },
          {
            title: "Organize & Search",
            desc: "Pin, tag, and search notes quickly and efficiently.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-32 py-6 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
        <p>&copy; {new Date().getFullYear()} BeatNotes. Made with ❤️ by Ace</p>
      </footer>
    </main>
  );
}
