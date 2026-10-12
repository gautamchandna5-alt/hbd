import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Landing } from "./components/landing/landing";
import { LetterSection } from "./components/letter/letter";
import { SongsSection } from "./components/songs/songs.tsx";
import "./App.css";

// 1. Array now holds BOTH the color and the specific texture for each page
const PAGE_STYLES = [
  {
    id: "landing",
    color: "#f4ebd9",
    texture: 'url("https://www.transparenttextures.com/patterns/cartographer.png")'
  },
  {
    id: "letter",
    color: "#A1BC98",
    texture: 'url("https://www.transparenttextures.com/patterns/navy.png")'
  },
  {
    id: "songs",
    color: "#ccd5ae", // Warm vintage cream tone
    texture: 'url("https://www.transparenttextures.com/patterns/dark-mosaic.png")'
  }
];

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStyle = PAGE_STYLES[activeIndex] || PAGE_STYLES[0];

  return (
    <main className="relative w-full h-screen overflow-hidden">
      
      {/* 1. The Color Layer */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        animate={{ backgroundColor: currentStyle.color }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* 2. The Texture Layer (Crossfades on scroll) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStyle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none"
          style={{ 
            backgroundImage: currentStyle.texture,
            backgroundRepeat: 'repeat'
          }}
        />
      </AnimatePresence>

      {/* 3. Your Content */}
      <div className="relative z-10 w-full h-full scroll-container">
        
        <Section index={0} setActiveIndex={setActiveIndex}>
          <Landing />
        </Section>

        <Section index={1} setActiveIndex={setActiveIndex}>
          <div className="flex h-full items-center justify-center text-[#4e3629] font-serif text-2xl">
            <LetterSection />
          </div>
        </Section>
        
        <Section index={2} setActiveIndex={setActiveIndex}>
          <div className="flex h-full items-center justify-center text-[#4e3629] font-serif text-2xl">
            <SongsSection />
          </div>
        </Section>
      </div>
    </main>
  );
};

interface SectionProps {
  index: number;
  setActiveIndex: (index: number) => void;
  children: ReactNode;
}

const Section = ({ index, setActiveIndex, children }: SectionProps) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveIndex(index);
    },
  });

  return (
    <section ref={ref} className="w-full h-screen snap-start snap-always relative">
      {children}
    </section>
  );
};