import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Star,
   ChevronRight,
   Search,
   Menu,
   X,
   Maximize2,
   ZoomIn,
   ZoomOut,
   Play,
   Quote,
   Maximize,
   Info
} from 'lucide-react';
import LegacyBook from '../components/portal/LegacyBook';
import CompactInfoCard from '../components/portal/CompactInfoCard';

import MuseumWall from '../components/portal/MuseumWall';

// @ts-ignore
import codangcovn from "@root/codangcovn.mp4";
// @ts-ignore
import cobay from "@root/cobay.mp4";
// @ts-ignore
import covn from "@root/covn.mp4";
// @ts-ignore
import OfficialMap from "@root/bandovn.png";
// @ts-ignore
import hcmValueImage from "@root/gia tri tu tuong ho chi minh trong tinh hinh moi.jpg";
// @ts-ignore
import BacNPT from "@root/BacNPT.jpg";
// @ts-ignore
import FinalPoster from "@root/poster_dai_hoi_xiii_final_1.png";
// @ts-ignore
import img2021 from "@root/2021.png";
// @ts-ignore
import img2022 from "@root/2022.png";
// @ts-ignore
import img2023 from "@root/2023.png";
// @ts-ignore
import img2024 from "@root/2024.jpg";
// @ts-ignore
import img2025 from "@root/2025.jpg";
// @ts-ignore
import img2026 from "@root/2026.jpg";
// @ts-ignore
import sectionBg from "@root/1-51d37.jpg";
// @ts-ignore
import logoBualiem from "@root/logo-bualiem.jpg";
// @ts-ignore
import trongdong from "@root/trongdong.mp4";
// @ts-ignore
import starFlagBg from "@root/COTUNGBAY.mp4";
// @ts-ignore
import caytreBg from "@root/caytre.jpg";
// @ts-ignore
import thanhlapDang from "@root/THÀNH LẬP ĐẢNG.jpg";
// @ts-ignore
import codang from "@root/codang.mp4";
// @ts-ignore
import td7Bg from "@root/TD7.jpg";
// @ts-ignore
import BacTrongDaiHoi14 from "@root/ảnh bác Trọng.png";
// @ts-ignore
import ngoaiGiaoBanner from "@root/ngoaigiao.png";
// @ts-ignore
// @ts-ignore
import thirtyFourCities from "@root/34tinhthanh.jpg";
import iconBtn from "@root/icon.jpg";
// @ts-ignore
import vnFlagIcon from "@root/co-viet-nam-nho.png";

interface SectionProps {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
   id?: string;
}

const Section = ({ children, className = "", style = {}, id = "" }: SectionProps) => (
   <section
      id={id}
      style={style}
      className={`relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden ${className}`}
   >
      {children}
   </section>
);

export default function Home() {
   const [isMuted] = useState(true);
   const [isTourLoaded, setIsTourLoaded] = useState(false);
   const tourFrameRef = useRef<HTMLDivElement>(null);
   const [showVideo, setShowVideo] = useState<string | null>(null);
   const [selectedImg, setSelectedImg] = useState<any>(null);
   const [currentPage, setCurrentPage] = useState(0);
   const [activeSection, setActiveSection] = useState('Khởi đầu');
   const [isMapOpen, setIsMapOpen] = useState(false);
   const [isInfoOpen, setIsInfoOpen] = useState(false);

   const handleTourFullscreen = () => {
      if (!tourFrameRef.current) return;
      if (!isTourLoaded) setIsTourLoaded(true);
      if (tourFrameRef.current.requestFullscreen) {
         tourFrameRef.current.requestFullscreen();
      } else if ((tourFrameRef.current as any).webkitRequestFullscreen) {
         (tourFrameRef.current as any).webkitRequestFullscreen();
      }
   };

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
         });
      }, { threshold: 0.5 });
      document.querySelectorAll('section').forEach(section => observer.observe(section));
      return () => observer.disconnect();
   }, []);

   return (
      <main className="bg-[#080404] text-white w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative no-scrollbar">

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700;900&family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&display=swap');

            .forced-black-ink * { color: #1c0a0a !important; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            .page-soft-gradient { background: linear-gradient(to right, #fcf5e8 0%, #f2e6cf 2%, #fcf5e8 8%, #fcf5e8 92%, #f2e6cf 98%, #fcf5e8 100%); }
            .book-3d { transform-style: preserve-3d; transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1); }
            .sheet { position: absolute; top: 0; right: 0; width: 50%; height: 100%; transform-style: preserve-3d; transform-origin: left center; transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1); cursor: pointer; }
            .page { position: absolute; inset: 0; backface-visibility: hidden; box-shadow: inset 0 0 50px rgba(0,0,0,0.05); }
            .page-front { z-index: 2; }
            .page-back { transform: rotateY(180deg); z-index: 1; }
            .gutter-shadow { background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 100%); }
            .stack-edge-right { background: linear-gradient(to right, #ddd, #fff 10%, #eee 20%, #fff 30%, #eee 40%, #fff 50%, #eee 60%, #fff 70%, #eee 80%, #fff 90%, #ddd); }

            .font-playfair { font-family: 'Playfair Display', serif; }
            .font-outfit { font-family: 'Outfit', sans-serif; }
         `}</style>

         <div className="fixed inset-0 z-0 pointer-events-none">
            <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover filter brightness-[1.3] contrast-[1.4] saturate-[1.6]">
               <source src={codangcovn} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080404]/60" />
         </div>

         <nav className="fixed top-0 left-0 w-full z-50 px-12 py-10 flex justify-center items-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
               {['Khởi đầu', 'Hành trình', 'Giá trị', 'Phòng chiếu', 'Nghiên cứu', 'Di sản', 'Sự kiện', 'Triển lãm', 'Đại hội XIV', 'Tầm nhìn', 'Tour'].map(item => (activeSection === item ? <span key={item} className="text-[#D4AF37] font-black">{item}</span> : <a key={item} href={`#${item}`} className="hover:text-[#D4AF37] transition-all">{item}</a>))}
            </div>

            {/* Original Stable Toggle */}
            <div className="absolute right-12">
               <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsInfoOpen(!isInfoOpen)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 overflow-hidden border ${isInfoOpen
                     ? 'border-[#D4AF37] bg-[#D4AF37]/20 shadow-lg'
                     : 'border-[#D4AF37]/30 bg-black/60 backdrop-blur-xl'
                     }`}
               >
                  <img
                     src={vnFlagIcon}
                     className={`w-full h-full object-cover transition-all duration-500 ${isInfoOpen ? 'scale-110 brightness-110' : 'opacity-80 hover:opacity-100'}`}
                     alt="Info"
                  />
               </motion.button>
            </div>
         </nav>

         <Section id="Khởi đầu">
            <div className="relative z-20 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>

                  <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-5xl md:text-[7rem] font-bold tracking-[0.1em] text-white uppercase mb-2 leading-none text-center">BẢN SẮC</h2>
                  <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-6xl md:text-[9rem] font-black tracking-normal text-[#D4AF37] uppercase mb-8 leading-none text-center drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">NGOẠI GIAO</h2>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-xl md:text-4xl italic text-white/90 mb-20 text-center tracking-[0.2em] font-light">HÀNH TRÌNH TỪ CỘI NGUỒN TỚI KỶ NGUYÊN VƯƠN TẦM</h3>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.5 }}
                     className="flex justify-center"
                  >
                     <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex flex-col items-center gap-6"
                     >
                        {/* THE LIGHT OF THE PARTY - Radiant Auras */}
                        <div className="absolute inset-0 bg-red-600/30 blur-[100px] rounded-full scale-[2.5] animate-pulse pointer-events-none" />
                        <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[60px] rounded-full scale-[2] animate-pulse delay-700 pointer-events-none" />

                        {/* Rotating Sacred Halos */}
                        <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 border border-red-500/20 border-dashed rounded-full scale-[1.8] pointer-events-none"
                        />
                        <motion.div
                           animate={{ rotate: -360 }}
                           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 border border-[#D4AF37]/10 border-dashed rounded-full scale-[2.2] pointer-events-none"
                        />

                        <motion.button
                           onClick={() => setIsMapOpen(true)}
                           whileHover={{ scale: 1.1, rotateY: 10 }}
                           whileTap={{ scale: 0.95 }}
                           className="group relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-red-600 via-[#D4AF37] to-red-600 shadow-[0_0_80px_rgba(220,38,38,0.6)] perspective-1000"
                        >
                           <div className="relative rounded-[calc(1rem-2px)] overflow-hidden bg-black">
                              <img
                                 src={iconBtn}
                                 className="h-16 lg:h-28 w-auto object-cover group-hover:scale-110 brightness-125 saturate-150 transition-all duration-700"
                                 alt="Chọn Chương"
                              />
                              {/* Divine Glow Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-[#D4AF37]/20 z-10" />

                              {/* Radiant Sweep */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20" />
                           </div>
                        </motion.button>

                     </motion.div>
                  </motion.div>

               </motion.div>
            </div>
         </Section>

         <Section id="Hành trình" className="overflow-hidden bg-[#050202] group/section">
            {/* 1. Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
               <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60"
               >
                  <source src={starFlagBg} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#050202] via-transparent to-[#050202] opacity-60" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.1)_0%,transparent_80%)]" />

               {/* Heritage Particles Effect */}
               <div className="absolute inset-0 opacity-20 group-hover/section:opacity-30 transition-opacity duration-[3s]">
                  {[...Array(20)].map((_, i) => (
                     <motion.div
                        key={i}
                        animate={{
                           y: [-20, -120],
                           x: [0, Math.random() * 40 - 20],
                           opacity: [0, 0.5, 0]
                        }}
                        transition={{
                           duration: 5 + Math.random() * 5,
                           repeat: Infinity,
                           delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-red-500/40 rounded-full blur-[1px]"
                        style={{
                           left: `${Math.random() * 100}%`,
                           top: `${Math.random() * 100}%`
                        }}
                     />
                  ))}
               </div>
            </div>

            <div className="relative z-10 w-full h-full flex items-center justify-center pt-20">
               <div className="relative w-full max-w-7xl mx-auto px-12 lg:px-24 h-[70vh] flex items-center">
                  {/* 3. Main Content Layer (Layer 1) */}
                  <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full gap-20">

                     <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div
                           initial={{ opacity: 0, x: -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.2 }}
                           className="relative z-30"
                        >
                           <h3 className="relative group/title font-playfair flex flex-col items-start gap-4">
                              <span className="block text-white/90 text-2xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none drop-shadow-md">
                                 Hành trình cách mạng <br />
                                 <span className="text-xl lg:text-3xl text-white/60 font-bold">của Nguyễn Ái Quốc</span>
                              </span>
                              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF5D1] to-[#B8860B] text-3xl lg:text-6xl font-black uppercase italic leading-[1.1] tracking-tighter drop-shadow-[0_10px_20px_rgba(184,134,11,0.3)]">
                                 Dẫn tới sự ra đời của <br />
                                 <span className="not-italic text-white/90 text-2xl lg:text-5xl">Đảng Cộng sản Việt Nam</span>
                              </span>
                           </h3>
                        </motion.div>
                     </div>

                     {/* 4. Cinematic Portal (Layer 2) */}
                     <div className="w-full lg:w-1/2 relative perspective-3000">
                        <motion.div
                           initial={{ opacity: 0, rotateY: 30, x: 100 }}
                           whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="relative z-40 group/portal"
                        >
                           {/* Floating Light Ring */}
                           <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />

                           <div className="relative aspect-[16/10] bg-black rounded-sm overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] border border-white/5 border-t-white/20">
                              <img
                                 src={thanhlapDang}
                                 className="w-full h-full object-cover filter brightness-110 saturate-[0.7] group-hover/portal:saturate-100 group-hover/portal:scale-105 transition-all duration-[8s]"
                                 alt="Thành lập Đảng"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-red-900/20" />

                              {/* Glowing Red Line Decoration */}
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-red-600 via-transparent to-transparent opacity-50" />

                              {/* Direct Access Play Portal */}
                              <div
                                 onClick={() => setShowVideo("X_ch15IK6pM")}
                                 className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play"
                              >
                                 <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md group-hover/play:scale-110 group-hover/play:border-red-500/50 transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/play:opacity-20 transition-opacity" />
                                    <Play size={28} className="text-white fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                 </div>
                                 <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="text-[10px] font-black uppercase tracking-[0.6em] text-white mt-8 opacity-0 group-hover/play:opacity-100 transition-opacity"
                                 >
                                    Phim Tư Liệu
                                 </motion.p>
                              </div>
                           </div>

                           {/* 3D Shadows & Reflections */}
                           <div className="absolute -bottom-10 inset-x-10 h-2 bg-red-600/10 blur-xl rounded-full" />
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </Section>

         <Section id="Giá trị">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080404]/95 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-12 lg:px-24 grid grid-cols-12 gap-16 lg:gap-24 items-center w-full relative z-10 text-left">
               <div className="col-span-12 lg:col-span-5 space-y-12">
                  <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                     <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] drop-shadow-2xl font-playfair">
                        GIÁ TRỊ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B]">TƯ TƯỞNG</span>
                     </h3>

                  </motion.div>
                  <div className="space-y-12">
                     <div className="relative w-full max-w-[460px] aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                        <img src={hcmValueImage} alt="Heritage Legacy" className="w-full h-full object-cover brightness-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                     </div>

                     <div className="flex justify-start">
                        <motion.div
                           layout
                           onClick={() => window.open('https://online.anyflip.com/tvcfs/zuho/mobile/index.html#google_vignette', '_blank')}
                           className="group relative flex items-center cursor-pointer"
                        >
                           {/* Central Icon Hub */}
                           <motion.div
                              layout
                              className="relative z-20 w-16 h-16 bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500"
                           >
                              <Maximize2 size={22} className="text-black group-hover:scale-110 transition-transform" />

                              <motion.div
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                 className="absolute inset-[-6px] border border-[#D4AF37]/40 rounded-full border-dashed"
                              />
                           </motion.div>

                           {/* Morphing Label */}
                           <motion.div
                              layout
                              className="absolute left-8 h-12 pr-12 pl-8 bg-black/90 backdrop-blur-3xl border border-[#D4AF37]/20 rounded-r-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:left-full group-hover:translate-x-[-10px] transition-all duration-500 pointer-events-none"
                           >
                              <div className="flex flex-col items-start whitespace-nowrap overflow-hidden">
                                 <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.4em] font-outfit">HỆ GIÁ TRỊ TƯ TƯỞNG</span>
                                 <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] font-bold mt-[2px] font-outfit">TÀI LIỆU NGHIÊN CỨU CHI TIẾT</span>
                              </div>
                           </motion.div>

                           <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                     </div>
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-7 flex justify-center items-center relative h-[700px] lg:h-[800px]">
                  <div className="relative w-full h-full flex justify-center items-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.25),transparent_70%)] pointer-events-none opacity-80" />
                     <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 0.95 }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative w-full h-full flex justify-center items-center" style={{ WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)', maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)' }}>
                        <img src={OfficialMap} alt="Viet Nam Sovereign Map" className="w-full h-full object-contain filter contrast-[1.4] brightness-80 mix-blend-screen opacity-85 drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]" />
                     </motion.div>
                  </div>
               </div>
            </div>
         </Section>

         <Section id="Phòng chiếu" className="bg-[#050303] overflow-hidden flex flex-col items-center justify-center py-20 relative">
            {/* Historical Image Background */}
            <div className="absolute inset-0 z-0">
               <img src={hcmValueImage} className="w-full h-full object-cover opacity-80 filter brightness-[0.5] contrast-125" alt="Bakground" />
               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            </div>

            {/* Ambient Background Light from Screen */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto px-12 relative z-10 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                  <h3 className="text-white text-4xl lg:text-6xl font-black uppercase mb-4 tracking-tighter opacity-90 font-playfair">PHÒNG CHIẾU PHIM TƯ LIỆU</h3>
                  <p className="text-[#D4AF37] font-serif italic text-lg opacity-60 mb-16 tracking-widest uppercase">Lịch sử hào hùng qua từng thước phim vàng</p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.95, filter: 'brightness(0)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
                  transition={{ duration: 1.5 }}
                  className="relative group/screen"
               >
                  {/* The Screen Frame */}
                  <div className="relative aspect-video rounded-sm overflow-hidden shadow-[0_0_100px_rgba(185,28,28,0.2)] border-4 border-white/5 border-b-white/10 ring-1 ring-white/10">
                     <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/QA5Ipxpl3lY?modestbranding=1&rel=0&iv_load_policy=3&color=white"
                        title="Communist Party History"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>

                     {/* Cinematic Vignette Overlay (over screen when not playing if possible, or just edge) */}
                     <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] opacity-60" />
                  </div>

                  {/* Decorative Stage Elements */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent blur-[2px]" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/5 h-[1px] bg-gradient-to-r from-transparent via-red-900/20 to-transparent blur-[4px]" />
               </motion.div>

            </div>
         </Section>

         <Section id="Nghiên cứu" className="!p-0 bg-[#080404] overflow-hidden group">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} src={BacNPT} alt="Bac Trong Background" className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.2] relative z-10" />
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-20 mix-blend-screen blur-[1.5px]">
                  <source src={covn} type="video/mp4" />
               </video>
               <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#080404] via-[#080404]/60 to-transparent z-30" />
            </div>
            <div className="relative w-full h-full max-w-[1920px] mx-auto z-40 flex flex-col justify-center text-left">
               <div className="px-12 lg:px-44 w-full lg:w-3/5">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                     <h2 className="text-white text-3xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-playfair text-left">
                        TỔNG BÍ THƯ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B] italic">NGUYỄN PHÚ TRỌNG</span>
                     </h2>

                     {/* Creative High-Fidelity Button - Left Aligned Expansion */}
                     <div className="flex justify-start mt-6">
                        <motion.div
                           layout
                           onClick={() => setShowVideo("4necLS4YHk4")}
                           className="group relative flex items-center cursor-pointer"
                        >
                           {/* Central Play Hub - Left Pinned */}
                           <motion.div
                              layout
                              className="relative z-20 w-16 h-16 bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500"
                           >
                              <Play size={22} className="text-black fill-black ml-1 group-hover:scale-110 transition-transform" />

                              {/* Interactive Rings */}
                              <motion.div
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                 className="absolute inset-[-6px] border border-[#D4AF37]/40 rounded-full border-dashed"
                              />
                              <motion.div
                                 animate={{ rotate: -360 }}
                                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                 className="absolute inset-[-12px] border border-[#D4AF37]/20 rounded-full"
                              />
                           </motion.div>

                           {/* Morphing Label - Slide Reveal to the RIGHT */}
                           <motion.div
                              layout
                              className="absolute left-8 h-12 pr-12 pl-8 bg-black/90 backdrop-blur-3xl border border-[#D4AF37]/20 rounded-r-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:left-full group-hover:translate-x-[-10px] transition-all duration-500 pointer-events-none"
                           >
                              <div className="flex flex-col items-start whitespace-nowrap overflow-hidden">
                                 <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.4em] font-outfit">XEM PHIM TƯ LIỆU</span>
                                 <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] font-bold mt-[2px] font-outfit">DI SẢN TỔNG BÍ THƯ</span>
                              </div>
                           </motion.div>

                           {/* Aura Glow */}
                           <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </Section>

         <Section id="Di sản" className="overflow-hidden relative" style={{ background: '#0a0505' }}>
            <div className="absolute inset-0 z-0">
               <img src={td7Bg} className="w-full h-full object-cover opacity-50 brightness-[0.4] contrast-125" alt="Background" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.1),transparent_70%)]" />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <LegacyBook
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  finalPoster={FinalPoster}
                  backCover={thirtyFourCities}
               />
            </div>
         </Section>

         <Section id="Sự kiện" className="overflow-hidden relative bg-[#0a0505]">
            <div className="absolute inset-0 z-0">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 brightness-110 saturate-[1.1]">
                  <source src={codang} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.2)_0%,transparent_70%)]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-12 lg:px-24 relative z-10 py-24">
               <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mb-24 text-center">
                  <h3 className="text-white text-5xl lg:text-7xl font-black uppercase mb-6 tracking-tight font-playfair">SỰ KIỆN ĐỐI NGOẠI NỔI BẬT</h3>
                  <div className="w-48 h-[2px] bg-red-700 mx-auto"></div>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {[
                     { year: '2021', title: 'Nâng tầm Đối ngoại đa phương', img: img2021 },
                     { year: '2022', title: 'Hợp tác quốc tế trong chuyển đổi số', img: img2022 },
                     { year: '2023', title: 'Ngoại giao Cây tre tỏa sáng', img: img2023 },
                     { year: '2024', title: 'Định hình trật tự thế giới mới', img: img2024 },
                     { year: '2025', title: 'Chủ động thích ứng toàn cầu', img: img2025 },
                     { year: '2026', title: 'Khát vọng Việt Nam hùng cường', img: img2026 }
                  ].map((item, idx) => (
                     <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                        onClick={() => setSelectedImg(item)}
                        className="group relative aspect-[1/1.5] bg-[#1a0808]/60 backdrop-blur-xl border-4 border-red-800 rounded-[2.5rem] overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer"
                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                     >
                        <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/40">
                           <img src={item.img} className="w-full h-full object-contain filter blur-[20px] opacity-20 group-hover:blur-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000" alt={item.title} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:opacity-0 transition-opacity duration-700">
                           <div className="relative w-36 h-36 border-4 border-red-700 rounded-full p-4 rotate-[-15deg] mix-blend-screen opacity-90 shadow-[0_0_30px_rgba(185,28,28,0.5)]">
                              <img src={logoBualiem} className="w-full h-full object-contain filter contrast-150 brightness-110" style={{ mixBlendMode: 'screen' }} alt="Logo" />
                           </div>
                        </div>
                        <div className="absolute top-10 right-10 bg-[#D4AF37] text-black px-8 py-2 rounded-full font-black text-2xl">{item.year}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </Section>

         <Section id="Triển lãm" className="relative !p-0 overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 z-[1] pointer-events-none">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.25] scale-110">
                  <source src={trongdong} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
            </div>
            <MuseumWall onSelectImg={setSelectedImg} />
         </Section>

         <Section id="Đại hội XIV" className="!p-0 bg-[#080404] overflow-hidden group">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5 }}
                  src={BacTrongDaiHoi14}
                  className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.1] relative z-10"
                  alt="Tổng Bí thư"
               />
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-20 mix-blend-screen blur-[1.5px]">
                  <source src={covn} type="video/mp4" />
               </video>
               {/* Gradient mask on the right */}
               <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#080404] via-[#080404]/60 to-transparent z-30" />
            </div>
            <div className="relative w-full h-full max-w-[1920px] mx-auto z-40 flex flex-col justify-center items-end text-right">
               <div className="px-12 lg:px-44 w-full lg:w-3/5 flex flex-col items-end">
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                     <h2 className="relative group/title cursor-default text-right font-playfair">
                        <span className="block text-white text-3xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                           ĐẠI HỘI ĐẢNG <br />
                        </span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF5D1] to-[#B8860B] text-2xl lg:text-4xl font-black uppercase italic leading-tight tracking-tight drop-shadow-[0_5px_15px_rgba(184,134,11,0.4)]">
                           LẦN THỨ XIV
                        </span>
                        {/* Decorative underline removed per request */}
                     </h2>

                     <div className="max-w-xl flex flex-col items-end mt-4">
                        <div className="relative group/quote mb-4">
                           <div className="absolute -left-6 -top-6 opacity-20">
                              <Quote size={40} className="text-[#D4AF37]" />
                           </div>
                           <p className="text-white text-lg lg:text-2xl font-outfit font-black leading-[1.5] text-right relative z-10 drop-shadow-xl" style={{ textRendering: 'optimizeLegibility' }}>
                              "Đại hội XIV là <span className="text-[#D4AF37]">dấu mốc quan trọng</span> trên con đường phát triển của <br />
                              Đất nước và Dân tộc ta, có ý nghĩa định hướng tương lai, <br />
                              tiếp tục đẩy mạnh toàn diện, đồng bộ <span className="text-[#D4AF37] text-xl lg:text-[2rem] underline decoration-1 underline-offset-8">công cuộc đổi mới.</span>"
                           </p>
                        </div>

                        {/* Author block removed per request */}

                        {/* Creative High-Fidelity Button - Balanced Spacing */}
                        <div className="flex justify-end mt-2">
                           <motion.div
                              layout
                              onClick={() => setShowVideo("rW3WZ0EQSSk")}
                              className="group relative flex items-center cursor-pointer"
                           >
                              {/* Central Play Hub - Focused Size */}
                              <motion.div
                                 layout
                                 className="relative z-20 w-16 h-16 bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500"
                              >
                                 <Play size={22} className="text-black fill-black ml-1 group-hover:scale-110 transition-transform" />

                                 {/* Interactive Rings */}
                                 <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-6px] border border-[#D4AF37]/40 rounded-full border-dashed"
                                 />
                                 <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-12px] border border-[#D4AF37]/20 rounded-full"
                                 />
                              </motion.div>

                              {/* Morphing Label - Slide Reveal */}
                              <motion.div
                                 layout
                                 className="absolute right-8 h-12 pl-12 pr-8 bg-black/90 backdrop-blur-3xl border border-[#D4AF37]/20 rounded-l-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:right-full group-hover:translate-x-10 transition-all duration-500 pointer-events-none"
                              >
                                 <div className="flex flex-col items-start whitespace-nowrap overflow-hidden">
                                    <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.4em] font-outfit">XEM PHIM TƯ LIỆU</span>
                                    <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] font-bold mt-[2px] font-outfit">TẦM NHÌN ĐẠI HỘI XIV</span>
                                 </div>
                              </motion.div>

                              {/* Aura Glow */}
                              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </Section>

         <Section id="Tầm nhìn" className="!p-0 bg-[#080404] overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  src={ngoaiGiaoBanner}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] relative z-10"
                  alt="Banner"
               />
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-20 mix-blend-screen blur-[1.5px]">
                  <source src={covn} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#080404] via-transparent to-black/40 z-20" />
            </div>
            <div className="relative z-20 w-full max-w-7xl mx-auto px-12 lg:px-24 h-full flex items-center justify-start">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="max-w-2xl -mt-[30vh]"
               >
                  <h2 className="relative group/title cursor-default font-playfair">
                     <span className="block text-white text-4xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                        Ngoại giao Việt Nam <br />
                        <span className="text-2xl lg:text-4xl opacity-80">trong dòng chảy 80 năm</span>
                     </span>
                     <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF5D1] to-[#B8860B] text-3xl lg:text-5xl font-black uppercase italic leading-tight tracking-tight drop-shadow-[0_5px_15px_rgba(184,134,11,0.4)]">
                        “ứng vạn biến” <br />
                        <span className="text-xl lg:text-3xl not-italic ml-4 text-white/90">và kỳ vọng từ Đại hội XIV</span>
                     </span>
                     <div className="w-24 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-6 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                  </h2>

                  <div className="flex items-center gap-8 mt-12">
                     <motion.div
                        layout
                        onClick={() => setShowVideo("PWNGqF6ahcA")}
                        className="group relative flex items-center cursor-pointer"
                     >
                        <motion.div
                           layout
                           className="relative z-20 w-16 h-16 bg-gradient-to-br from-[#D4AF37] via-[#f7e09a] to-[#B8860B] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500"
                        >
                           <Play size={22} className="text-black fill-black ml-1 group-hover:scale-110 transition-transform" />
                           <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-[-6px] border border-[#D4AF37]/40 rounded-full border-dashed"
                           />
                        </motion.div>

                        <div className="flex flex-col items-start whitespace-nowrap overflow-hidden ml-4">
                           <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.4em] font-outfit">XEM PHIM TƯ LIỆU</span>
                           <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] font-bold mt-[2px] font-outfit">TẦM NHÌN ĐẠI HỘI XIV</span>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </Section>

         <Section id="Tour" className="relative group overflow-hidden bg-black py-32">
            <div className="absolute inset-0 z-0">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 brightness-110 blur-[1px]">
                  <source src={trongdong} type="video/mp4" />
               </video>
               {/* Particles Background */}
               <div className="absolute inset-0 pointer-events-none z-0">
                  {Array.from({ length: 30 }).map((_, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: "100vh" }}
                        animate={{ opacity: 0.6, y: "-10vh" }}
                        transition={{
                           duration: 4 + Math.random() * 6,
                           delay: Math.random() * 8,
                           repeat: Infinity,
                           ease: "linear"
                        }}
                        className="absolute w-[3px] h-[3px] bg-red-500 rounded-full blur-[1px]"
                        style={{ left: Math.random() * 100 + '%' }}
                     />
                  ))}
               </div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                  <span className="inline-block px-6 py-2 bg-red-600/30 border border-[#D4AF37]/50 rounded-full text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] mb-8 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                     Trải Nghiệm Đỉnh Cao
                  </span>
                  <h3 className="text-white text-5xl lg:text-7xl font-black uppercase mb-6 tracking-tighter font-playfair drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                     TRUNG TÂM <span className="text-[#D4AF37]">HỘI NGHỊ QUỐC GIA</span>
                  </h3>
                  <p className="text-white/60 max-w-2xl mx-auto mb-16 text-sm lg:text-base font-medium drop-shadow-md">
                     Khám phá không gian kiến trúc hùng vĩ và hiện đại của nơi diễn ra các sự kiện trọng đại của đất nước qua góc nhìn 360 độ.
                  </p>
               </motion.div>

               <div className="relative group perspective-3000">
                  <motion.div
                     ref={tourFrameRef}
                     initial={{ rotateX: 5, y: 30, opacity: 0 }}
                     whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
                     transition={{ duration: 1 }}
                     className="relative aspect-video w-full rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-[2px] shadow-[0_50px_150px_rgba(0,0,0,0.5)] border border-white/20"
                  >
                     {/* Cinematic Vignette Overlay */}
                     <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/10" />

                     <AnimatePresence>
                        {!isTourLoaded && (
                           <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-transparent cursor-pointer group/mirror transition-all duration-500"
                              onClick={() => setIsTourLoaded(true)}
                           >
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/mirror:translate-x-full transition-transform duration-[2s] ease-in-out" />
                              <div className="absolute inset-0 border border-white/10 rounded-2xl" />

                              <motion.div
                                 whileHover={{ scale: 1.15, rotate: 5 }}
                                 whileTap={{ scale: 0.9 }}
                                 className="relative z-30 w-28 h-28 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(212,175,55,0.5)]"
                              >
                                 <Play size={44} className="text-black fill-black ml-2" />
                              </motion.div>
                              <h4 className="relative z-30 text-white text-3xl font-black uppercase tracking-[0.2em] mb-3 font-playfair drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">Bắt Đầu Hành Trình</h4>
                              <p className="relative z-30 text-[#D4AF37] text-sm font-black uppercase tracking-[0.4em] drop-shadow-md">Nhấn để khám phá không gian ảo 360°</p>
                           </motion.div>
                        )}
                     </AnimatePresence>

                     {isTourLoaded && (
                        <iframe
                           src="https://ncc.gov.vn/vr/"
                           className="w-full h-full border-0 relative z-0"
                           title="NCC VR Tour"
                           allowFullScreen
                        />
                     )}
                  </motion.div>

                  <div className="mt-12 flex justify-center gap-6">
                     <button
                        onClick={handleTourFullscreen}
                        className="flex items-center gap-4 px-10 py-4 bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all"
                     >
                        <Maximize className="w-4 h-4" />
                        Mở Toàn Màn Hình
                     </button>
                  </div>
               </div>
            </div>
         </Section>

         {showVideo && (
            <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-8 lg:p-24 overflow-hidden" onClick={() => setShowVideo(null)}>
               {/* 1. Modal Background Video Layer - Maximized Visibility */}
               <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
                  <video
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-cover"
                  >
                     <source src={starFlagBg} type="video/mp4" />
                  </video>
               </div>

               {/* 2. Main Content Layer */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="relative z-10 w-full max-w-6xl aspect-video rounded-sm overflow-hidden bg-black shadow-[0_0_100px_rgba(185,28,28,0.4)] border border-white/10"
                  onClick={(e) => e.stopPropagation()}
               >
                  {showVideo.includes('.') || showVideo.startsWith('/') ? (
                     <video
                        src={showVideo}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                     >
                        Trình duyệt của bạn không hỗ trợ phát video này.
                     </video>
                  ) : (
                     <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${showVideo}?autoplay=1`} allowFullScreen />
                  )}

                  {/* Close Control for Modal */}
                  <button
                     onClick={() => setShowVideo(null)}
                     className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all border border-white/10 backdrop-blur-md"
                  >
                     <X size={24} />
                  </button>

               </motion.div>
            </div>
         )}

         {selectedImg && (
            <div className="fixed inset-0 z-[200000] flex items-center justify-center p-6 lg:p-24 overflow-hidden" onClick={() => setSelectedImg(null)}>
               <div className="absolute inset-0 z-0">
                  <img src={caytreBg} className="w-full h-full object-cover opacity-90" alt="Bamboo Background" />
                  <div className="absolute inset-0 bg-black/30" />
               </div>
               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative h-full w-full flex items-center justify-center z-10" onClick={(e) => e.stopPropagation()}>
                  <div className="relative h-full bg-transparent overflow-visible">
                     <img src={selectedImg.img} className="h-full w-auto object-contain shadow-[0_40px_100px_rgba(0,0,0,0.6)]" alt="Enlarged" />
                     <button onClick={() => setSelectedImg(null)} className="absolute -top-12 -right-12 w-14 h-14 bg-white/10 hover:bg-black hover:scale-110 rounded-full flex items-center justify-center text-white transition-all border border-white/20 backdrop-blur-xl"><X size={28} /></button>
                  </div>
               </motion.div>
            </div>
         )}

         {isMapOpen && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="fixed inset-0 z-[100000] overflow-y-auto bg-[#080404]"
            >
               {/* Map Modal Background: Fixed for continuous coverage */}
               <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden bg-[#080404]">
                  <video
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-cover filter brightness-[1.3] contrast-[1.3] saturate-[1.5]"
                  >
                     <source src={cobay} type="video/mp4" />
                  </video>
                  {/* Layer 1: Film Grain Overlay */}
                  <div className="absolute inset-0 z-10 opacity-[0.12] mix-blend-overlay pointer-events-none"
                     style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`, backgroundSize: '200px' }} />

                  {/* Layer 2: Anamorphic Horizontal Flare */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/20 blur-[2px] z-20" />

                  {/* Layer 3: Professional Grading */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/5 mix-blend-soft-light z-30" />

                  {/* Layer 4: Deep Exposure & Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-40" />
                </div>

               <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col pt-12 overflow-visible">
                  <div className="flex justify-between items-center mb-[360px] border-b border-white/5 pb-12">
                     <div>
                        <h2 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[1em] mb-4 text-center lg:text-left">CHỌN CHƯƠNG</h2>
                        <h3 className="text-white text-5xl lg:text-7xl font-playfair font-black text-center lg:text-left uppercase">BẢN ĐỒ DI SẢN</h3>
                     </div>
                     <button
                        onClick={() => setIsMapOpen(false)}
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all group"
                     >
                        <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
                     </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-24">
                     {[
                        { id: 'Hành trình', num: '02', title: 'HÀNH TRÌNH', desc: 'Mốc son chói lọi năm 1930', img: thanhlapDang },
                        { id: 'Giá trị', num: '03', title: 'GIÁ TRỊ', desc: 'Tư tưởng Hồ Chí Minh trong đối ngoại', img: hcmValueImage },
                        { id: 'Phòng chiếu', num: '04', title: 'PHÒNG CHIẾU', desc: 'Phòng chiếu phim tư liệu lịch sử', img: codangcovn },
                        { id: 'Nghiên cứu', num: '05', title: 'NGHIÊN CỨU', desc: 'Di sản ngoại giao Tổng Bí thư', img: BacNPT },
                        { id: 'Di sản', num: '06', title: 'DI SẢN', desc: 'Sổ tay Đảng viên và Đại hội XIII', img: FinalPoster },
                        { id: 'Sự kiện', num: '07', title: 'SỰ KIỆN', desc: 'Sự kiện đối ngoại tiêu biểu 2021-2026', img: img2023 },
                        { id: 'Triển lãm', num: '08', title: 'TRIỂN LÃM', desc: 'Tường triển lãm archival posters', img: img2021 },
                        { id: 'Đại hội XIV', num: '09', title: 'ĐẠI HỘI XIV', desc: 'Chuẩn bị cho đại hội dân tộc mới', img: BacTrongDaiHoi14 },
                        { id: 'Tầm nhìn', num: '10', title: 'TẦM NHÌN', desc: 'Ngoại giao Việt Nam tương lai', img: ngoaiGiaoBanner },
                        { id: 'Tour', num: '11', title: 'TRẢI NGHIỆM', desc: 'Virtual Tour không gian ảo 360 độ', img: OfficialMap },
                     ].map((level, idx) => (
                        <motion.a
                           key={level.id}
                           href={`#${level.id}`}
                           onClick={() => setIsMapOpen(false)}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: idx * 0.05 }}
                           whileHover={{ scale: 1.05 }}
                           className="group relative block aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-[#1a1111] hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-500"
                        >
                           <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700">
                              {typeof level.img === 'string' && level.img.endsWith('.mp4') ? (
                                 <video src={level.img} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                              ) : (
                                 <img src={level.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" alt={level.title} />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                           </div>

                           <div className="relative z-20 w-full h-full p-6 flex flex-col items-center justify-center text-center">
                              <span className="text-[#D4AF37] text-[10px] font-black tracking-widest mb-4">{level.num}</span>
                              <h4 className="text-white text-base lg:text-xl font-bold uppercase tracking-widest mb-2 group-hover:text-[#D4AF37] transition-colors">{level.title}</h4>
                              <div className="h-[2px] w-6 bg-[#D4AF37]/30 mb-4 group-hover:w-12 group-hover:bg-[#D4AF37] transition-all duration-500" />
                              <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest leading-relaxed line-clamp-2 px-2 opacity-0 group-hover:opacity-100 transition-all duration-500">{level.desc}</p>
                           </div>

                           <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                              <Play size={12} className="text-[#D4AF37]" fill="currentColor" />
                           </div>
                        </motion.a>
                     ))}
                  </div>
               </div>
            </motion.div>
         )}

         <CompactInfoCard
            isOpen={isInfoOpen}
            onClose={() => setIsInfoOpen(false)}
         />


      </main>
   );
}