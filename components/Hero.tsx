import Image from "next/image";
import { motion } from "motion/react";
import ReusableCarousel from "./ReusableCarousel";

const benefits = [
  {
    id: 1,
    title: "Time-Saving Solutions",
    benefit:
      "Instantly access professionally designed templates, eliminating the need to build from scratch.",
  },
  {
    id: 2,
    title: "Cost-Effective",
    benefit:
      " Affordable alternatives to hiring designers or developers, making high-quality websites accessible.",
  },
  {
    id: 3,
    title: "Customizable Designs",
    benefit:
      "Easily tweak templates to match your unique brand identity and style.",
  },
  {
    id: 4,
    title: "Diverse Collection",
    benefit:
      "Wide range of templates catering to various industries, platforms, and aesthetics.",
  },
  {
    id: 5,
    title: "Beginner-Friendly",
    benefit:
      "User-friendly templates designed to simplify the website-building process, even for non-technical users.",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col  md:flex-row p-[1rem] justify-around items-center pt-[15rem] md:pt-0 min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <span className="text-right hover:drop-shadow-2xl text-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] max-w-[25rem]">
          Ready-Made Templates, Ready to Elevate Your Web Presence.
        </span>

        <ReusableCarousel carouselItems={benefits} />
      </div>

      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Image
          className="flex-1 h-auto"
          alt="wireframe"
          src="/wireframe.svg"
          height={500}
          width={500}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
