"use client";

interface Props {
  title: string;
  link: string;
  color: string;
}

export default function SocialCard({ title, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="block w-full text-center py-4 rounded-2xl font-semibold 
      bg-white/10 backdrop-blur-md border border-white/20 
      shadow-lg hover:bg-white/20 transition"
    >
      {title}
    </a>
  );
}
