import { useState, useRef, useEffect } from 'react';
import { Lightbulb, AlertTriangle, CheckCircle, Info, Edit3 } from 'lucide-react';
import { loadLessons, type Lesson } from '@/data/lessons';

interface LessonsLearnedProps {
  compact?: boolean;
  maxLessons?: number;
}

const priorityConfig = {
  high: {
    color: 'bg-admiral-magenta/10 border-admiral-magenta/30',
    iconColor: 'text-admiral-magenta',
    icon: AlertTriangle,
  },
  medium: {
    color: 'bg-admiral-blue/10 border-admiral-blue/30',
    iconColor: 'text-admiral-blue',
    icon: Info,
  },
  low: {
    color: 'bg-admiral-navy/10 border-admiral-navy/30',
    iconColor: 'text-admiral-navy',
    icon: CheckCircle,
  },
};

export default function LessonsLearned({ compact = false, maxLessons }: LessonsLearnedProps) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLessons(loadLessons());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayLessons = maxLessons ? lessons.slice(0, maxLessons) : lessons;

  if (compact) {
    return (
      <div className="space-y-3">
        {displayLessons.map((lesson, index) => {
          const config = priorityConfig[lesson.priority];
          const Icon = config.icon;
          return (
            <div
              key={lesson.id}
              className={`flex items-start gap-3 p-3 rounded-lg border ${config.color} transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
              <div>
                <h4 className="font-semibold text-admiral-navy text-sm">{lesson.title}</h4>
                <p className="text-xs text-admiral-gray mt-1 line-clamp-2">{lesson.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section
      id="lessons"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-admiral-light"
    >
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div
            className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-admiral-magenta/10 rounded-full mb-4">
              <Lightbulb className="w-4 h-4 text-admiral-magenta" />
              <span className="text-sm font-medium text-admiral-magenta">
                Hard-Won Wisdom
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy mb-4">
              Lessons Learned
            </h2>
            <p className="text-base sm:text-lg text-admiral-gray max-w-2xl mx-auto">
              What 17 months of fighting Admiral Insurance taught me. 
              Consider this a survival guide.
            </p>
          </div>

          {/* Lessons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {displayLessons.map((lesson, index) => {
              const config = priorityConfig[lesson.priority];
              const Icon = config.icon;
              return (
                <div
                  key={lesson.id}
                  className={`bg-white rounded-xl p-6 border border-admiral-light hover:shadow-lg hover:border-admiral-blue/30 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${Math.min(150 + index * 50, 600)}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${config.iconColor}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-medium uppercase tracking-wide ${config.iconColor}`}>
                        {lesson.priority} Priority
                      </span>
                      <h3 className="font-bold text-admiral-navy">{lesson.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-admiral-gray leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Edit Link */}
          <div
            className={`text-center mt-10 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#/edit"
              className="inline-flex items-center gap-2 text-sm text-admiral-blue hover:text-admiral-magenta transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              Edit these lessons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
