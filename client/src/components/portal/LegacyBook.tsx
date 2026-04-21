import { motion } from 'framer-motion';
import React from 'react';
import { getSheets } from './bookData';

interface LegacyBookProps {
   currentPage: number;
   setCurrentPage: (page: number | ((p: number) => number)) => void;
   finalPoster: string;
}

const LegacyBook: React.FC<LegacyBookProps> = ({ 
   currentPage, 
   setCurrentPage, 
   finalPoster 
}) => {
   const sheets = getSheets();
   const totalSheets = sheets.length;

   return (
      <div className="relative w-full h-full flex items-center justify-center p-20 text-black">
         <motion.div 
            key="unified-book" 
            animate={{ 
               opacity: 1, 
               scale: 1, 
               y: 0, 
               x: currentPage === 0 ? "-25%" : "0%" 
            }} 
            transition={{ duration: 1.2 }} 
            className="relative w-full max-w-[1700px] aspect-[16/9.5]" 
            style={{ transformStyle: 'preserve-3d' }}
         >
            <div className="w-full h-full relative book-3d">
               {/* BINDER EFFECTS */}
               <div 
                  className={`absolute left-0 top-1 bottom-1 bg-white/90 rounded-l-2xl border-l-[8px] border-black/5 stack-edge-right transition-all duration-700 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`} 
                  style={{ 
                     width: `${(currentPage / (totalSheets + 1)) * 40}px`, 
                     left: `-${(currentPage / (totalSheets + 1)) * 40}px` 
                  }} 
               />
               <div 
                  className="absolute right-0 top-1 bottom-1 bg-white/90 rounded-r-2xl border-r-[8px] border-black/5 stack-edge-right transition-all duration-700" 
                  style={{ 
                     width: `${((totalSheets + 1 - currentPage) / (totalSheets + 1)) * 40}px`, 
                     right: `-${((totalSheets + 1 - currentPage) / (totalSheets + 1)) * 40}px` 
                  }} 
               />
               <div className="absolute inset-0 grid grid-cols-2 shadow-2xl">
                  <div className={`page-soft-gradient rounded-l-[15px] border-r border-black/5 shadow-inner transition-opacity duration-700 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`} />
                  <div className="page-soft-gradient rounded-r-[15px] border-l border-black/5 shadow-inner" />
               </div>

               <div className="absolute inset-y-0 left-0 w-1/2 z-[200] cursor-pointer" onClick={() => setCurrentPage(p => Math.max(0, p - 1))} />
               <div className="absolute inset-y-0 right-0 w-1/2 z-[200] cursor-pointer" onClick={() => setCurrentPage(p => Math.min(totalSheets, p + 1))} />

               {/* SHEET 0 - COVER */}
               <div className="sheet" style={{ zIndex: currentPage === 0 ? 100 : 5, transform: `rotateY(${currentPage > 0 ? -180 : 0}deg)` }}>
                  <div className="page page-front rounded-r-[15px] overflow-hidden shadow-2xl p-0">
                     <div className="w-full h-full bg-[#1e0808] border-l-[20px] border-[#3a0a0a] relative overflow-hidden">
                        <img src={finalPoster} className="w-full h-full object-cover" alt="Cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[430px] p-12 text-center text-white">
                           <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-4 text-[#FFD700] drop-shadow-[0_0_25px_rgba(212,175,55,1)]">Tư tưởng Hồ Chí Minh về đối ngoại <br /><span className="text-[#FFD700] text-xl lg:text-2xl opacity-100 italic">và sự vận dụng trong Văn kiện Đại hội XIII của Đảng</span></h4>
                           <p className="text-[10px] text-white/40 uppercase tracking-widest mt-4">Chủ tịch Hồ Chí Minh tại sân bay New Delhi trong chuyến thăm hữu nghị Ấn Độ, ngày 4-2-1958 - Ảnh tư liệu: TTXVN</p>
                        </div>
                     </div>
                  </div>
                  <div className="page page-back page-soft-gradient rounded-l-[15px] p-8 lg:p-12 overflow-y-auto no-scrollbar forced-black-ink hover:z-50">
                     <div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" />
                     <div className="relative z-30 font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] leading-[1.6] text-justify space-y-6 pt-8 text-justify">
                        <h4 className="text-xl font-bold text-red-900/40 uppercase tracking-[0.3em] mb-4 text-center">Lời mở đầu</h4>
                        <p className="text-[12px] text-red-900/40 text-center mb-8 font-mono">03/08/2022 09:26</p>
                        <p className="indent-10 italic border-l-4 border-red-900/20 pl-8">(LLCT) - Tư tưởng Hồ Chí Minh về đối ngoại cho đến nay vẫn còn nguyên giá trị lý luận và thực tiễn sâu sắc. Tại Đại hội XIII của Đảng, đối ngoại của Đảng có những điều chỉnh, bổ sung, phát triển, vừa phù hợp với xu thế quốc tế, vừa phù hợp với chuyển biến của thực tiễn đất nước sau 35 năm đổi mới. Bài viết làm rõ tư tưởng Hồ Chí Minh về đối ngoại và sự vận dụng của Đảng trong Văn kiện Đại hội XIII.</p>
                     </div>
                  </div>
               </div>

               {/* MASTER CONTENT SHEETS */}
               {sheets.map((sheet, index) => (
                  <div key={index} className="sheet" style={{ zIndex: currentPage > index + 1 ? index + 10 : totalSheets - index + 10, transform: `rotateY(${currentPage > index + 1 ? -180 : 0}deg)` }}>
                     <div className="page page-front page-soft-gradient rounded-r-[15px] p-8 lg:p-12 overflow-y-auto no-scrollbar forced-black-ink hover:z-50"><div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" />{sheet.front}</div>
                     <div className="page page-back page-soft-gradient rounded-l-[15px] p-8 lg:p-12 overflow-y-auto no-scrollbar forced-black-ink hover:z-50"><div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" />{sheet.back}</div>
                  </div>
               ))}

               <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-black/20 z-[250] blur-[1.5px]" />
            </div>
         </motion.div>
      </div>
   );
};

export default LegacyBook;
