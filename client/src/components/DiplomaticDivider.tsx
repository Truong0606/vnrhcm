/**
 * Diplomatic Divider Component
 * SVG divider with flowing lines representing diplomatic connections
 * Design: Asymmetric, flowing, with color palette integration
 */

interface DiplomaticDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
}

export default function DiplomaticDivider({ variant = 'bottom', className = '' }: DiplomaticDividerProps) {
  const isTop = variant === 'top';

  return (
    <svg
      className={`w-full ${className}`}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ display: 'block', marginTop: isTop ? '-1px' : '0' }}
    >
      {/* Flowing wave pattern */}
      <path
        d={isTop ? 'M0,70 Q300,120 600,70 T1200,70 L1200,0 L0,0 Z' : 'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z'}
        fill="currentColor"
        className="text-background"
      />
      
      {/* Accent lines */}
      <path
        d={isTop ? 'M0,75 Q300,115 600,75 T1200,75' : 'M0,55 Q300,5 600,55 T1200,55'}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
        className="text-crimson"
      />
    </svg>
  );
}
