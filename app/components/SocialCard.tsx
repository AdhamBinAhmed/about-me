"use client";

import { motion } from "framer-motion";

export default function SocialCard({ title, link, color }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} block w-full text-center py-3 rounded-xl font-semibold shadow-lg`}
    >
      {title}
    </motion.a>
  );
}