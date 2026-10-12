import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <div className="relative w-full h-full flex flex-col px-6 overflow-hidden">
      
      {/* Scrap/Flower bulging from the bottom-left corner */}
     <img 
        src={new URL('../../assets/images/scrap-bottom-right.png', import.meta.url).href} 
        alt="" 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-40 translate-x-6 translate-y-6 -rotate-28 opacity-95 pointer-events-none z-0" 
        />
        <img 
          src={new URL('../../assets/images/flora-top-left.png', import.meta.url).href} 
          alt="" 
          aria-hidden="true" 
          className="absolute top-5 left-5 w-24 -translate-x-4 -translate-y-4 rotate-45 opacity-90 pointer-events-none z-0" 
        />
      {/* SECTION 1: Top Typography */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full pt-8">
        <div className="text-center">
          <h2 className="font-serif text-[#4e3629] text-3xl font-bold tracking-widest uppercase mb-1">
            Happy
          </h2>
          <h1 className="font-script text-[#8d2a1b] text-[5rem] leading-none -rotate-3 transform -mt-2">
            Birthday
          </h1>
          <p className="font-serif text-[#4e3629] text-sm tracking-[0.2em] font-bold mt-4 uppercase">
            Name Here
          </p>
        </div>
      </div>
{/* SECTION 2: Photo Collage */}
      <div className="flex-1 flex items-end justify-center z-10 w-full pb-2">
        <div className="relative w-full max-w-[280px] h-[360px] flex items-center justify-center">
          
          {/* Left Polaroid */}
          <motion.div 
            initial={{ opacity: 0, x: -40, rotate: -25 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="absolute left-[-10px] bottom-12 w-24 aspect-square bg-white p-1.5 shadow-lg border border-gray-200 z-20"
          >
            <img 
              src={new URL('../../assets/images/pic-left.jpg', import.meta.url).href} 
              className="w-full h-full object-cover" 
              alt="Memory 1" 
            />
          </motion.div>

          {/* Main Polaroid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="relative w-48 aspect-[3/4] bg-white p-2.5 shadow-xl border border-gray-200 z-10"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#d9cdb0]/80 -rotate-2 shadow-sm border-b border-t border-dashed border-[#b6aa8c] z-30" />
            <img 
              src={new URL('../../assets/images/pic-main.jpg', import.meta.url).href} 
              className="w-full h-full object-cover" 
              alt="Main Memory" 
            />
          </motion.div>

          {/* Right Polaroid */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 25 }}
            animate={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            className="absolute right-[-10px] top-10 w-24 aspect-square bg-white p-1.5 shadow-lg border border-gray-200 z-20"
          >
            <img 
              src={new URL('../../assets/images/pic-right.jpg', import.meta.url).href} 
              className="w-full h-full object-cover" 
              alt="Memory 2" 
            />
          </motion.div>
        </div>
      </div>
 {/* SECTION 3: Footer Message*/}
      <div className="flex-1 flex flex-col items-center justify-start z-10 w-full pt-4 pb-6">
        <p className="font-serif italic text-[#4e3629] text-sm leading-relaxed mb-4 max-w-[260px] text-center">
          "Wishing you a birthday filled with love, laughter, and cherished memories to last a lifetime."
        </p>

        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center opacity-60"
        >
          <span className="font-serif text-xs tracking-widest text-[#4e3629] mb-1">
            scroll to continue
          </span>
          <svg className="w-4 h-4 text-[#4e3629]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7-7-7M12 3v18" />
          </svg>
        </motion.div>
      </div>

    </div>
  );
};