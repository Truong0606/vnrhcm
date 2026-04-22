/**
 * Bamboo Pattern Component
 * Decorative background pattern with bamboo motif
 * Design: Subtle, organic, and elegant
 */

interface BambooPatternProps {
  opacity?: number;
  className?: string;
}

export default function BambooPattern({ opacity = 0.1, className = '' }: BambooPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663049074981/KxCTWbpnd8M5b2vQ9Uf2XT/pattern-bamboo-subtle-Tq5eEGFyfMwTQBdkP3gTSA.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: opacity,
      }}
    />
  );
}
