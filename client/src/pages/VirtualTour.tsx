import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, Maximize, Play } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Virtual Tour Page - Ngoại Giao Cây Tre
 * Featuring: NCC VR Tour 360°
 */

export default function VirtualTour() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);

  // Particles Background
  useEffect(() => {
    const count = 30;
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 8 + 's',
      duration: (6 + Math.random() * 6) + 's',
      size: (1 + Math.random() * 3) + 'px',
    }));
    setParticles(newParticles);
  }, []);

  const handleStartTour = () => {
    setIsLoaded(true);
  };

  const handleFullscreen = () => {
    if (!frameRef.current) return;
    
    if (!isLoaded) setIsLoaded(true);

    if (frameRef.current.requestFullscreen) {
      frameRef.current.requestFullscreen();
    } else if ((frameRef.current as any).webkitRequestFullscreen) {
      (frameRef.current as any).webkitRequestFullscreen();
    } else if ((frameRef.current as any).msRequestFullscreen) {
      (frameRef.current as any).msRequestFullscreen();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 0.6, y: "-10vh" }}
            transition={{ 
              duration: parseFloat(p.duration), 
              delay: parseFloat(p.delay), 
              repeat: Infinity,
              ease: "linear"
            }}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>


      {/* Header */}
      <header className="relative z-10 container py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-communist-gold hover:text-white transition group">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition" />
          <span className="font-bold uppercase tracking-widest">Quay Lại</span>
        </Link>
        <div className="text-center hidden md:block">
          <h1 className="text-xl font-black text-communist-gold uppercase tracking-tighter">VR Tour 360°</h1>
        </div>
        <div className="w-24"></div> {/* Spacer */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="container max-w-6xl w-full">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-communist-red/20 border border-communist-gold/30 rounded-full text-xs font-bold text-communist-gold uppercase tracking-widest mb-4">
              Trải Nghiệm Đỉnh Cao
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              TRUNG TÂM <span className="text-communist-gold">HỘI NGHỊ QUỐC GIA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Khám phá không gian kiến trúc hùng vĩ và hiện đại của nơi diễn ra các sự kiện trọng đại của đất nước qua góc nhìn 360 độ.
            </p>
          </div>

          <div className="relative group perspective-1000">
            {/* VR Frame Wrapper */}
            <motion.div 
              ref={frameRef}
              initial={{ rotateX: 10, y: 20, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video w-full rounded-3xl overflow-hidden bg-gray-900 shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-communist-gold/20 preserve-3d"
            >
              {/* Glow Effect */}
              <div className="vr-glow" />

              {/* Overlay */}
              <AnimatePresence>
                {!isLoaded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer transition-all duration-500 hover:bg-black/70"
                    onClick={handleStartTour}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-communist-gold to-yellow-600 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(212,175,55,0.4)] animate-[play-pulse_2.5s_infinite]"
                    >
                      <Play className="w-10 h-10 text-black fill-current ml-1" />
                    </motion.div>
                    <motion.h3 
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      className="text-2xl font-bold mb-2 uppercase tracking-wide text-white"
                    >
                      Bắt Đầu Hành Trình
                    </motion.h3>
                    <p className="text-communist-gold font-medium">Nhấn để tải và khám phá không gian ảo</p>
                  </motion.div>
                )}
              </AnimatePresence>


              {/* Iframe */}
              {isLoaded && (
                <iframe
                  src="https://ncc.gov.vn/vr/"
                  className="w-full h-full border-0"
                  title="NCC VR Tour"
                  allowFullScreen
                />
              )}
            </motion.div>

            {/* Controls Overlay (Bottom) */}
            <div className="mt-6 flex justify-center gap-4">
              <button 
                onClick={handleFullscreen}
                className="btn-communist flex items-center gap-2 py-3 px-8"
              >
                <Maximize className="w-5 h-5" />
                Mở Toàn Màn Hình
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer info */}
      <footer className="relative z-10 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Trung Tâm Hội Nghị Quốc Gia. VR Tour Experience.</p>
      </footer>
    </motion.div>
  );
}
