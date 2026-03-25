"use client";


import SocialCard from "./SocialCard";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 overflow-hidden">

      {/* 🔥 الخلفية */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover opacity-20"
        />
        {/* طبقة غامقة */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* الصورة + الاسم */}
      <div className="text-center"
      >
        <img
          src="/bg1.jpg"
          className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-lg"
        />

        <h1 className="text-3xl font-bold mt-4 tracking-wide">
          أَدْهَمُ بْنُ أَحْمَدَ
        </h1>

        <p className="text-gray-400 mt-1">Contact Me</p>
      </div>

      {/* السوشيال */}
      <div className="mt-8 w-full max-w-sm space-y-4">

        <SocialCard
          title="Instagram"
          link="https://www.instagram.com/adham20_07"
          color="bg-gradient-to-r from-pink-500 to-purple-500"
        />

        <SocialCard
          title="Telegram"
          link="https://t.me/llxcd_EGy"
          color="bg-blue-500"
        />

        <SocialCard
          title="GitHub"
          link="https://github.com/AdhamBinAhmed"
          color="bg-gray-800"
        />

        <SocialCard
          title="WhatsApp"
          link="https://wa.me/201023382444"
          color="bg-green-500"
        />

           <SocialCard
          title="My Future Company"
          link="megadevs.vercel.net"
          color="bg-blue-700"
        />

<br />
<br />
<br />
<div className="mt-4 w-full max-w-sm">
  <a
    href="tel:01023382444"
    className="block text-center py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:scale-105 transition"
  >
    call me: 01023382444
  </a>
</div>

      </div>
    </main>
  );
}
