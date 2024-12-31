"use client";
import CategoriesGrid from "@/components/CategoriesGrid";
import Hero from "@/components/Hero";
import { motion, useDragControls } from "motion/react";
import { useRef } from "react";
export default function Home() {
  const categories = [
    { id: 1, category: "Portfolio & Agency" },
    { id: 2, category: "Technology" },
    { id: 3, category: "Blog & Tutorial" },
    { id: 4, category: "Professional Services" },
    { id: 5, category: "Real Estate" },
    { id: 7, category: "Retail" },
  ];

  const controls = useDragControls();
  const constraintRef = useRef(null);
  return (
    <div className="min-h-screen">
      <motion.div ref={constraintRef}>
        <Hero />

        <motion.div
          transition={{ duration: 1, delay: 1 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="w-full p-[2rem]"
        >
          <CategoriesGrid title="Popular" items={categories} />
        </motion.div>

        <motion.div
          className="absolute hover:bg-foreground hover:scale-125 top-[255px] left-[20px]  bg-foreground rounded-full h-32 w-32 absolute z-50 hover:cursor-pointer"
          drag
          dragConstraints={constraintRef}
          onPointerDown={(event) => controls.start(event)}
          dragControls={controls}
          style={{ touchAction: "none" }}
        >
          <motion.div className="bg-transparent mx-auto h-full flex items-center text-background justify-center">
            MoBan
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
