"use client";

interface Props {
  title: string;
  link: string;
  color: string;
}

export default function SocialCard({ title, link, color }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className={`${color} block w-full text-center py-3 rounded-xl font-semibold shadow-lg`}
    >
      {title}
    </a>
  );
}
