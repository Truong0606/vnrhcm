import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, HelpCircle, Cpu, X, ChevronRight, Code, Terminal, Globe, Zap, Scissors, Palette, Layout, Play, Music } from 'lucide-react';

interface CompactInfoCardProps {
    isOpen: boolean;
    onClose: () => void;
}

const CompactInfoCard = ({ isOpen, onClose }: CompactInfoCardProps) => {
    const [activeTab, setActiveTab] = useState<'contributors' | 'guide' | 'tech'>('guide');

    const tabs = [
        { id: 'guide', label: 'Chỉ dẫn' },
        { id: 'contributors', label: 'Công sự' },
        { id: 'tech', label: 'Công cụ' },
    ];

    const content = {
        guide: (
            <div className="space-y-4">
                {[
                    { title: "Dòng thời gian", desc: "Cuộn chuột để khám phá hành trình lịch sử." },
                    { title: "Bản đồ Di sản", desc: "Chạm biểu tượng Trống đồng để mở nhanh chương." },
                    { title: "Hiện vật tương tác", desc: "Click Sách hoặc Tranh để xem chi tiết." },
                    { title: "Khám phá 360°", desc: "Vào không gian ảo tại chương cuối của dự án." },
                ].map((item, i) => (
                    <div key={i} className="group cursor-default">
                        <p className="text-[11px] font-bold text-white/95 mb-0.5 group-hover:text-[#D4AF37] transition-colors">{item.title}</p>
                        <p className="text-[9px] text-white/40 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        ),
        contributors: (
            <div className="space-y-4 max-h-[180px] overflow-y-auto pr-1 no-scrollbar">
                <div className="border-b border-white/10 pb-3 mb-2">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">Development Team</p>
                    <p className="text-xl font-playfair font-black text-white leading-none">NHÓM PHÁT TRIỂN</p>
                </div>
                <div className="space-y-3">
                    {[
                        "Nguyễn Duy Khang",
                        "Ngô Huy Quang Trường",
                        "Nguyễn Quốc Anh"
                    ].map((name, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-colors" />
                            <span className="text-[11px] font-semibold text-white/80 group-hover:text-white transition-colors tracking-tight">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
        tech: (
            <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1 no-scrollbar">
                {[
                    { name: "Manus AI", desc: "Intelligence" },
                    { name: "Antigravity", desc: "Core Engine" },
                    { name: "Vercel", desc: "Deployment" },
                    { name: "Capcut", desc: "Video Edit" },
                    { name: "Photoshop", desc: "Visuals" },
                    { name: "Canva", desc: "UI Design" },
                    { name: "Youtube", desc: "Media" },
                    { name: "Tiktok", desc: "Social" },
                ].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-[#D4AF37]/30 transition-all group">
                        <p className="text-[10px] font-bold text-white/90 mb-0.5 group-hover:text-[#D4AF37] transition-all">{item.name}</p>
                        <p className="text-[8px] text-white/30 font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="fixed top-28 right-10 z-[100] w-[260px] glass-compact rounded-2xl overflow-hidden p-5"
                >
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-playfair font-black text-[#D4AF37] text-sm tracking-tight uppercase">Thông tin Dự án</h3>
                        <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                            <X size={16} className="text-white/60" />
                        </button>
                    </div>

                    <div className="flex gap-1.5 mb-5 p-1 bg-white/5 rounded-lg">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex-1 py-1.5 rounded-md transition-all ${activeTab === tab.id ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20' : 'text-white/30 hover:text-white/60'
                                    }`}
                            >
                                <span className="text-[9px] uppercase tracking-tighter">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="min-h-[160px]"
                    >
                        {content[activeTab as keyof typeof content]}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CompactInfoCard;
