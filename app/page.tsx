"use client";

import SocialCard from "./SocialCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">

      {/* الصورة + الاسم */}
      <div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <img
          src="/me.jpg"
          className="w-32 h-32 rounded-full border-4 border-white mx-auto"
        />

        <h1 className="text-3xl font-bold mt-4">Ahmed</h1>
        <p className="text-gray-400">Frontend Developer 🚀</p>
      </div>

      {/* السوشيال */}
      <div className="mt-8 w-full max-w-sm space-y-4">

        <SocialCard
          title="Instagram"
          link="https://instagram.com"
          color="bg-pink-500"
        />

        <SocialCard
          title="LinkedIn"
          link="https://linkedin.com"
          color="bg-blue-600"
        />

        <SocialCard
          title="GitHub"
          link="https://github.com"
          color="bg-gray-800"
        />

        <SocialCard
          title="WhatsApp"
          link="https://wa.me/2010XXXXXXX"
          color="bg-green-500"
        />

      </div>
    </main>
  );
}
