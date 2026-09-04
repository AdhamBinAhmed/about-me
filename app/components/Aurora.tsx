"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Aurora() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  // opposite-direction parallax offsets for depth
  const x1 = useTransform(sx, [0, 1], [30, -30]);
  const y1 = useTransform(sy, [0, 1], [30, -30]);
  const x2 = useTransform(sx, [0, 1], [-40, 40]);
  const y2 = useTransform(sy, [0, 1], [-40, 40]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <>
      <div className="aurora">
        <motion.div className="aurora-blob blob-a" style={{ x: x1, y: y1 }} />
        <motion.div className="aurora-blob blob-b" style={{ x: x2, y: y2 }} />
        <motion.div className="aurora-blob blob-c" style={{ x: x1, y: y2 }} />
        <motion.div className="aurora-blob blob-d" style={{ x: x2, y: y1 }} />
      </div>
      <div className="spacegrain" />
    </>
  );
}
