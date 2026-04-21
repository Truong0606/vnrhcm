/**
 * Timeline Item Component
 * Individual timeline entry with year, title, and description
 * Design: Alternating layout with centered timeline dot
 */

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isVisible?: boolean;
  className?: string;
}

export default function TimelineItem({
  year,
  title,
  description,
  index,
  isVisible = true,
  className = '',
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
        {/* Content */}
        <div className="flex-1 text-right">
          <div className="text-sm font-bold text-crimson">{year}</div>
          <h3 className="text-lg font-bold text-charcoal">{title}</h3>
          <p className="text-muted-gray">{description}</p>
        </div>

        {/* Timeline Dot */}
        <div className="w-4 h-4 bg-crimson rounded-full border-4 border-white relative z-10 flex-shrink-0" />

        {/* Spacer */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
