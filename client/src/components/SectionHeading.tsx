/**
 * Section Heading Component
 * Styled heading with tagline for section introductions
 * Design: Elegant typography hierarchy with color accents
 */

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  taglineColor?: 'crimson' | 'golden' | 'deep-green';
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  taglineColor = 'golden',
  centered = true,
  className = '',
}: SectionHeadingProps) {
  const colorMap = {
    crimson: 'text-crimson',
    golden: 'text-golden',
    'deep-green': 'text-deep-green',
  };

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {tagline && (
        <span className={`tagline text-sm tracking-widest block mb-4 ${colorMap[taglineColor]}`}>
          {tagline}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-gray max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
