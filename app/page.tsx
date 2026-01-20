// "use client";

import MainHeroPage from "@/components/ui/main-page-hero";
import Navbar from "@/components/ui/navbar";
import { getAppUser } from "@/lib/auth";


export default function Home() {

  const user = getAppUser();
  return (
    <main className="min-h-screen flex flex-col justify-between bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Navbar */}
      <Navbar
        userImage={user?.image}
        userName={user?.name}
      />

      {/* Hero Section */}
      <MainHeroPage />

      {/* Footer */}
      <footer className="mt-32 py-6 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
        <p>&copy; {new Date().getFullYear()} BeatNotes. Made with ❤️ by Ace</p>
      </footer>
    </main>
  );
}
