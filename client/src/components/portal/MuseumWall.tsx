import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// @ts-ignore
import ex1 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/1.png";
// @ts-ignore
import ex2 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/2.png";
// @ts-ignore
import ex3 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/3.png";
// @ts-ignore
import ex4 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/4.png";
// @ts-ignore
import ex5 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/5.png";
// @ts-ignore
import ex6 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/6.png";
// @ts-ignore
import ex7 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/7.png";
// @ts-ignore
import ex8 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/8.png";
// @ts-ignore
import ex9 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/9.png";
// @ts-ignore
import ex10 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/10.png";
// @ts-ignore
import ex11 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/11.png";
// @ts-ignore
import ex12 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/12.png";
// @ts-ignore
import ex13 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/13.png";
// @ts-ignore
import ex14 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/14.png";
// @ts-ignore
import ex15 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/15.png";
// @ts-ignore
import ex16 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/16.png";
// @ts-ignore
import ex17 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/17.png";
// @ts-ignore
import ex18 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/18.png";
// @ts-ignore
import ex19 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/19.png";
// @ts-ignore
import ex20 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/20.png";
// @ts-ignore
import ex21 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/21.png";
// @ts-ignore
import ex22 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/22.png";
// @ts-ignore
import ex23 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/23.png";
// @ts-ignore
import ex24 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/24.png";
// @ts-ignore
import ex25 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/25.png";
// @ts-ignore
import ex26 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/26.png";
// @ts-ignore
import ex27 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/27.png";
// @ts-ignore
import ex28 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/28.png";
// @ts-ignore
import ex29 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/29.png";
// @ts-ignore
import ex30 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/30.png";
// @ts-ignore
import ex31 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/31.png";
// @ts-ignore
import ex32 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/32.png";

// @ts-ignore
import bgRef from "@root/SACDO.jpg";
// @ts-ignore
import bgVideo from "@root/VIDEOWALL.mp4";

interface MuseumWallProps {
   onSelectImg: (img: any) => void;
}

const MuseumWall: React.FC<MuseumWallProps> = ({ onSelectImg }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 15, y: (e.clientY / window.innerHeight - 0.5) * 15 });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   const museumRows = [
      {
         id: 1,
         direction: 'left',
         speed: '70s',
         posters: [ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10, ex11, ex12],
         width: '280px',
         height: '400px'
      },
      {
         id: 2,
         direction: 'right',
         speed: '90s',
         posters: [ex13, ex14, ex15, ex16, ex17, ex18, ex19, ex20, ex21, ex22],
         width: '280px',
         height: '400px'
      },
      {
         id: 3,
         direction: 'left',
         speed: '110s',
         posters: [ex23, ex24, ex25, ex26, ex27, ex28, ex29, ex30, ex31, ex32],
         width: '280px',
         height: '400px'
      }
   ];

   return (
      <div className="relative z-10 w-full bg-[#050505] min-h-screen flex flex-col font-sans overflow-hidden">
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=Inter:wght@200;400;800&display=swap');
        
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left var(--duration) linear infinite; }
        .animate-scroll-right { animation: scroll-right var(--duration) linear infinite; }
        .row-container:hover .animate-scroll-left, .row-container:hover .animate-scroll-right { animation-play-state: paused; }
        .museum-poster { position: relative; transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1); cursor: pointer; border: 1px solid rgba(255,255,255,0.1); }
        .museum-poster:hover { transform: scale(1.1) translateY(-15px); z-index: 50; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.3); border-color: #D4AF37; }
        .museum-poster img { filter: brightness(1) grayscale(0); transition: all 1s ease; }
        .museum-poster:hover img { filter: brightness(1.1); }
        
        .title-gradient { background: linear-gradient(to right, #fff, #D4AF37, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        /* THE PERFECT 3D ROUND BUTTON */
        .btn-3d-container {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-3d-base {
          position: absolute;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle at 50% 10%, #444, #111 80%);
          border-radius: 50%;
          box-shadow: 
            0 25px 60px rgba(0,0,0,0.9),
            inset 0 4px 10px rgba(255,255,255,0.1),
            inset 0 -10px 20px rgba(0,0,0,0.5);
          border: 1px solid #333;
        }
        .btn-3d-cap {
          position: relative;
          width: 175px;
          height: 175px;
          background: radial-gradient(circle at 35% 30%, #ff4d4d 0%, #cc0000 50%, #770000 100%);
          border-radius: 50%;
          box-shadow: 
            0 15px 30px rgba(0,0,0,0.8),
            inset 0 -15px 25px rgba(0,0,0,0.5),
            inset 0 10px 25px rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.1s cubic-bezier(0.19, 1, 0.22, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #990000;
        }
        .btn-3d-cap::after {
          content: "";
          position: absolute;
          top: 8%;
          left: 15%;
          width: 70%;
          height: 35%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          border-radius: 50% 50% 30% 30%;
          filter: blur(1px);
        }
        .btn-3d-cap:active { 
          transform: scale(0.92) translateY(12px);
        }
        .btn-shadow-aura {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(255,0,0,0.15) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .btn-3d-container:hover .btn-shadow-aura { opacity: 1; }
      `}</style>

         <AnimatePresence mode="wait">
            {!isOpen ? (
               <motion.div
                  key="entrance"
                  className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
               >
                  {/* Background Image (Entrance) */}
                  <motion.div className="absolute inset-0 z-0 scale-105" style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}>
                     <img src={bgRef} className="w-full h-full object-cover brightness-[0.5] saturate-[0.8]" alt="Ref" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
                  </motion.div>

                  {/* Centerpiece Content */}
                  <div className="relative z-20 flex flex-col items-center gap-20">

                     {/* Title */}
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-center space-y-4"
                     >
                        <h1 style={{ fontFamily: "'Inter', sans-serif" }} className="text-white text-7xl lg:text-[9.5rem] font-black uppercase leading-none tracking-tighter">
                           BỨC TƯỜNG <br />
                           <span className="title-gradient drop-shadow-[0_10px_40px_rgba(0,0,0,1)] px-4">LƯU TRỮ</span>
                        </h1>
                     </motion.div>

                     {/* PERFECTLY ROUND 3D RED BUTTON */}
                     <div className="group relative flex flex-col items-center">
                        <div className="btn-3d-container">
                           <div className="btn-shadow-aura" />
                           <div className="btn-3d-base" />
                           <div className="btn-3d-cap" onClick={() => setIsOpen(true)}>
                              <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-2xl font-black tracking-[0.1em] drop-shadow-xl select-none">BẮT ĐẦU</span>
                           </div>
                        </div>
                     </div>

                     {/* Decorative Elements */}
                     <motion.div
                        className="absolute inset-0 z-10 pointer-events-none flex justify-center items-center gap-72 opacity-50 scale-110"
                        style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
                     >
                        <img src={ex1} className="h-[75vh] w-auto rotate-[-5deg] shadow-3xl" alt="L" />
                        <img src={ex2} className="h-[75vh] w-auto rotate-[5deg] shadow-3xl" alt="R" />
                     </motion.div>
                  </div>
               </motion.div>
            ) : (
            <motion.div 
               key="exhibition"
               className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col overflow-y-auto overflow-x-hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
            >
               {/* Global CSS to hide navbar/header and body scroll */}
               <style>{`
                  body { overflow: hidden !important; }
                  header, nav, .navbar, [role="navigation"] { display: none !important; }
               `}</style>
                   {/* Exhibition Background Video - Clean and Clear */}
                   <div className="absolute inset-0 z-0 pointer-events-none">
                      <video 
                         src={bgVideo} 
                         autoPlay loop muted playsInline 
                         className="w-full h-full object-cover fixed top-0 left-0 brightness-110 saturate-[1.1]" 
                      />
                   </div>

                  {/* IMMERSIVE CONTROLS */}
                  <button 
                     onClick={() => setIsOpen(false)}
                     className="fixed top-12 left-12 z-[1001] flex items-center gap-4 bg-black/60 hover:bg-red-900 border border-[#D4AF37]/50 text-white px-8 py-3 rounded-full transition-all group shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                     <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                     <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm font-bold tracking-[0.2em] uppercase">QUAY LẠI</span>
                  </button>

                  <div className="max-w-7xl mx-auto px-12 lg:px-24 py-32 mb-10 relative z-20">
                     <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                        <h3 style={{ fontFamily: "'Inter', sans-serif" }} className="text-white text-7xl lg:text-[7rem] font-black uppercase leading-none tracking-tighter">
                           DI SẢN <span className="title-gradient border-l border-red-900 ml-4 pl-8">LƯU TRỮ</span>
                        </h3>
                     </motion.div>
                  </div>

                  <div className="space-y-32 w-full flex flex-col items-center pb-60">
                     {museumRows.map((row) => (
                        <div key={row.id} className="row-container relative w-full overflow-hidden">
                           <div
                              className={`flex gap-16 w-fit ${row.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                              style={{ '--duration': row.speed } as any}
                           >
                              {[...row.posters, ...row.posters, ...row.posters].map((img, idx) => (
                                 <div
                                    key={`${row.id}-${idx}`}
                                    className="museum-poster flex-shrink-0 bg-transparent overflow-hidden"
                                    style={{ width: row.width, height: row.height }}
                                    onClick={() => onSelectImg({ img, year: '2021', title: 'Diplomatic Archive' })}
                                 >
                                    <img src={img} className="w-full h-full object-cover" alt="Art" />
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default MuseumWall;
