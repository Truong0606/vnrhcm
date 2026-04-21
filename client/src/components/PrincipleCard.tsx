/**
 * Principle Card Component
 * Card displaying diplomatic principles with icon and description
 * Design: Minimalist with left border accent
 */

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor?: 'crimson' | 'golden' | 'deep-green';
  className?: string;
}

export default function PrincipleCard({
  icon,
  title,
  description,
  borderColor = 'crimson',
  className = '',
}: PrincipleCardProps) {
  const borderMap = {
    crimson: 'border-l-4 border-crimson',
    golden: 'border-l-4 border-golden',
    'deep-green': 'border-l-4 border-deep-green',
  };

  return (
    <div
      className={`p-8 bg-white rounded-lg ${borderMap[borderColor]} hover-lift transition-all ${className}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-deep-green mb-3">{title}</h3>
      <p className="text-muted-gray leading-relaxed">{description}</p>
    </div>
  );
}
