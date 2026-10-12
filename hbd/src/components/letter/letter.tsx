import { useState } from "react";
import { motion } from "framer-motion";

export const LetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center px-6 py-6 overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")' }} 
      />

      {/* TOP HEADER WRAPPER*/}
      <div className="flex-1 flex flex-col justify-end items-center w-full z-10 pb-8">
        <div className="text-center w-full max-w-[340px]">
          <h1 className="font-script text-[#8d2a1b] text-5xl -rotate-2 drop-shadow-md mb-3">
            A Note For You
          </h1>
          <p className="font-serif italic text-[#7a5c48] text-[13px] tracking-[0.15em] opacity-80">
            {isOpen ? "Tap letter to fold back" : "Tap the envelope to open"}
          </p>
        </div>
      </div>

      {/* CENTER INTERACTIVE ENVELOPE / LETTER CONTAINER */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full max-w-[340px] h-[420px] flex items-center justify-center z-10 cursor-pointer"
      >
        
        {/* Closed Envelope View */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-[280px] h-[180px] bg-[#d3c4a5] rounded-md shadow-2xl border-2 border-[#a89878] relative flex items-center justify-center transition-transform hover:scale-105"
            style={{
              boxShadow: "0 15px 30px rgba(78, 54, 41, 0.25), inset 0 0 15px rgba(211, 196, 165, 0.5)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none rounded-md" />
            <div className="absolute top-0 w-0 h-0 border-l-[140px] border-l-transparent border-r-[140px] border-r-transparent border-t-[95px] border-t-[#c2b291] filter drop-shadow-sm" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[90px] border-b-[#bfae8d] border-r-[140px] border-r-transparent opacity-60" />
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[90px] border-b-[#bfae8d] border-l-[140px] border-l-transparent opacity-60" />

            {/* Realistic Wax Seal */}
            <div className="absolute z-20 w-12 h-12 rounded-full bg-[#8d2a1b] shadow-xl flex items-center justify-center border-2 border-[#5c160e] ring-2 ring-[#8d2a1b]/40">
              <span className="font-script text-white text-2xl drop-shadow">M</span>
              <div className="absolute inset-1 rounded-full border border-white/20" />
            </div>
          </motion.div>
        )}

        {/* Expanded Letter View */}
        {isOpen && (
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", damping: 22 }}
            className="absolute w-full h-full bg-[#fffdf9] shadow-2xl border border-[#d3cabc] rounded-sm p-3 overflow-hidden flex flex-col"
          >
            {/* Inner Paper Texture */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} 
            />
            
            {/* Structured Inner Border & Content Wrapper */}
            <div className="relative z-10 border border-[#e2d8cc] rounded-sm flex flex-col justify-between h-full p-5 overflow-y-auto scrollbar-hide">
              <div>
                <div className="flex justify-between items-center border-b border-[#e2d8cc] pb-3 mb-5">
                  <span className="font-serif text-[11px] text-[#8d2a1b] uppercase tracking-widest font-bold">
                    Special Delivery
                  </span>
                </div>
                <p className="font-serif text-[#4e3629] text-[13px] leading-loose text-justify">
                  Happy Birthday sheyaaa 
                  Tu 18 ki hogyiiii, budhiii hoti ja rhii hhh🤧😭
                  So here are some 18 lines for you 

                  1 Happy Birthday sheya,may kanha ji bless you and complete all your wishes 🧿<br />
                2  Happy Birthday sheya, always remain this innocent and cute😋<br />
                3  Happy Birthday sheyaa,may u always remain this pretty and charming ✌️<br />
                 4 Happy Birthday sheya,mard jaat se bach kr rhioo🤧<br />
                5  Happy Birthday sheyaa,aise hi voice notes or songs bhejti rhioooo😁<br />
                6  Happy Birthday sheyaa,stay happy and dancing and kbhi kbhi video bhi bhej dia krio🙃<br />
                7  Happy Birthday sheyaa,aise hi apna music taste mjhse share krti rhiooo✨<br />
                8  Happy Birthday sheyaaa,phle ki trh hmesha meri dost rhioo😭<br />
                9  Happy Birthday sheyaa,life me kuch bhi ho mjhse share jrur krioo😚<br />
                10  Happy Birthday michiii,hehe😋<br />
                 11 Happy Birthday sheyaa, kbhi bhi koi bhi problem ho I am always there for you🫠<br />
                12  Happy Birthday sheyaa,call kr lia kr merkooo🙏<br />
                13  Happy Birthday sheyaa,wo jo snaps tjhe waste lage na wo bhi mjhe bhej skti h tu bhondhuu😶‍🌫️<br />
                 14 Happy Birthday sheyaa,thank you jb mjhe need thi tb sbse jyada care dene ke liyee🥹<br />
                 15 Happy Birthday sheyaa,u the bestt💖<br />
                 16 Happy Birthday sheyaa, always caring for you even if we aren't talking 🙃<br />
                17  Happy Birthday sheyaa,you always in my top priority list🫣<br />
                18  Happy Birthday sheyaa,i am so proud of u and always will🫠<br />
                </p>
              </div>

              <div className="pt-4 border-t border-[#e2d8cc] flex justify-between items-end mt-6">
                <div>
                  <p className="font-serif text-[11px] text-[#7a5c48] italic mb-1">
                    With all my love,
                  </p>
                  <p className="font-script text-[#8d2a1b] text-3xl -rotate-2 origin-left">
                    Moksh
                  </p>
                </div>
                <span className="font-serif text-[9px] text-[#a89886] tracking-widest italic pb-1">
                  (tap to close)
                </span>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* BOTTOM SPACING HELPER*/}
      <div className="flex-1 w-full" />

    </div>
  );
};