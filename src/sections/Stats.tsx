import { useEffect, useState, useRef } from 'react';
import { Clock, FileCheck, Mail, XCircle } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function StatItem({ icon, value, label, color, delay, isVisible }: StatItemProps) {
  return (
    <div
      className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${color}`}
      >
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-admiral-navy mb-2">
        {value}
      </div>
      <div className="text-sm sm:text-base text-admiral-gray font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      value: '14+',
      label: 'Months Of Delays',
      color: 'bg-admiral-magenta',
    },
    {
      icon: <FileCheck className="w-7 h-7 text-white" />,
      value: '4',
      label: 'Complaints Upheld',
      color: 'bg-admiral-blue',
    },
    {
      icon: <Mail className="w-7 h-7 text-white" />,
      value: '100s',
      label: 'of emails & calls',
      color: 'bg-warning',
    },
    {
      icon: <XCircle className="w-7 h-7 text-white" />,
      value: 'STILL',
      label: 'no resolution.',
      color: 'bg-admiral-navy',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-admiral-light">
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-base sm:text-lg text-admiral-gray max-w-2xl mx-auto">
              Four formal complaints upheld. Still no resolution. This is what
              "looking out for you" looks like.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                delay={index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
