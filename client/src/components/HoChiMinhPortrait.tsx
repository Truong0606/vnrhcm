/**
 * Ho Chi Minh Portrait Component
 * Displays an artistic silhouette of Ho Chi Minh
 * Design: Minimalist with color palette integration
 */

interface HoChiMinhPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function HoChiMinhPortrait({ className = '', size = 'md' }: HoChiMinhPortraitProps) {
  const sizeMap = {
    sm: 'w-32 h-48',
    md: 'w-48 h-64',
    lg: 'w-64 h-96',
  };

  return (
    <div className={`${sizeMap[size]} ${className}`}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663049074981/KxCTWbpnd8M5b2vQ9Uf2XT/hochi-minh-silhouette-artistic-78AiwdzSuUeENxZU7JwcaP.webp"
        alt="Chủ tịch Hồ Chí Minh"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
