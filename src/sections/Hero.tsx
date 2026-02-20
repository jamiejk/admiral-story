import { useEffect, useState, useRef, useCallback } from 'react';
import { AlertTriangle, Calendar, Lightbulb, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTopLessons, type Lesson } from '@/data/lessons';

// Calculate days since the treefall (December 1, 2024)
const START_DATE = new Date('2024-12-01');

function getDaysElapsed() {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

const priorityIcons = {
  high: AlertCircle,
  medium: Info,
  low: CheckCircle,
};

const COMPLAINTS = [
  "IGNORED for 8 months with a dangerous wreckage in my garden",
  "BULLIED by agents trying to minimise my claim",
  "PUT AT RISK by an incompetent, dangerous assessments",
  "LIED TO about the provisions in the policy booklet",
  "STONEWALLED by senior staff invalidating my contents claim."
];

export default function Hero() {
  const [days, setDays] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [topLessons, setTopLessons] = useState<Lesson[]>([]);
  const [complaintIndex, setComplaintIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Function to reload lessons from localStorage
  const reloadLessons = useCallback(() => {
    setTopLessons(getTopLessons(3));
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setDays(getDaysElapsed());
    reloadLessons();

    // Update day counter every minute
    const interval = setInterval(() => {
      setDays(getDaysElapsed());
    }, 60000);

    // Update complaint ticker every 4 seconds
    const tickerInterval = setInterval(() => {
      setComplaintIndex((prev) => (prev + 1) % COMPLAINTS.length);
    }, 4000);

    // Reload lessons when window gains focus (user returns from edit page)
    const handleFocus = () => {
      reloadLessons();
    };
    window.addEventListener('focus', handleFocus);

    // Also reload on visibility change (tab becomes visible)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        reloadLessons();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      clearInterval(tickerInterval);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [reloadLessons]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center bg-white relative overflow-hidden"
    >
      {/* Complaint Ticker Banner */}
      <div className="absolute top-0 left-0 right-0 bg-admiral-magenta text-white overflow-hidden z-20 flex justify-center items-center h-12 shadow-sm">
        <div className="relative w-full max-w-5xl px-4 flex items-center justify-center h-full">
          {COMPLAINTS.map((complaint, index) => {
            const words = complaint.split(' ');
            const firstWord = words[0];
            const rest = words.slice(1).join(' ');

            return (
              <div
                key={index}
                className={`absolute w-full px-4 transition-all duration-700 ease-in-out flex items-center justify-center text-center ${index === complaintIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-2 max-w-full">
                  <AlertTriangle className="w-4 h-4 shrink-0 opacity-80" />
                  <span className="text-sm font-medium tracking-wide truncate sm:whitespace-normal">
                    <span className="font-bold underline decoration-white/40 underline-offset-4 mr-1">{firstWord}</span>
                    <span className="opacity-90">{rest}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Pattern - Subverted Wave Motif */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            fill="none"
            stroke="#D00070"
            strokeWidth="2"
          />
          <path
            d="M0,450 Q300,250 600,450 T1200,450"
            fill="none"
            stroke="#262f61"
            strokeWidth="2"
          />
          <path
            d="M0,500 Q300,300 600,500 T1200,500"
            fill="none"
            stroke="#00a3e0"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-admiral-magenta/10 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-admiral-magenta" />
                <span className="text-sm font-medium text-admiral-magenta">
                  A Cautionary Tale
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="text-admiral-navy">Admiral:</span>
                <br />
                <span className="text-admiral-magenta">
                  Looking After
                  <br />
                  No.1
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-admiral-gray max-w-xl mb-8 leading-relaxed">
                A{' '}
                <span className="font-semibold text-admiral-dark">
                  14 month (and counting)
                </span>{' '}
                saga of one family's fight for fair treatment from one of the UK's largest insurers.
                <button
                  onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-admiral-magenta hover:underline font-medium inline-block cursor-pointer focus:outline-none"
                >
                  Read my sorry tale.
                </button>
              </p>

              {/* Day Counter */}
              <div
                className={`inline-flex items-center gap-4 px-6 py-4 bg-admiral-navy rounded-xl transition-all duration-700 delay-300 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
              >
                <Calendar className="w-6 h-6 text-admiral-magenta" />
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    Day {days.toLocaleString()}
                  </div>
                  <div className="text-sm text-white/70">
                    Since the tree fell • Still waiting
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Detourned Mascot */}
            <div
              className={`relative transition-all duration-700 delay-200 ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
                }`}
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="bg-admiral-light rounded-2xl p-6 lg:p-8">
                  {/* Detourned Admiral Mascot */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src="/admiral-mascot-detourned.png"
                        alt="The Admiral - Looking After No.1 (detourned mascot with eyepatch)"
                        className="w-56 h-56 lg:w-64 lg:h-64 object-contain drop-shadow-xl"
                      />
                      {/* Caption */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-medium text-admiral-gray bg-white/80 px-3 py-1 rounded-full">
                          "We're always looking out for you"
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Preview */}
                  <div className="grid grid-cols-3 gap-4 text-center pt-4">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-admiral-magenta">
                        28m
                      </div>
                      <div className="text-xs text-admiral-gray">Tree</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-admiral-navy">
                        44t
                      </div>
                      <div className="text-xs text-admiral-gray">of pure destruction</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-warning">
                        0
                      </div>
                      <div className="text-xs text-admiral-gray">sympathy from Admiral</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-admiral-magenta/10 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-admiral-blue/10 rounded-full blur-xl" />

                {/* Pirate Flag Decoration */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-admiral-navy rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">☠️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 Lessons - Centered Below Hero */}
          <div
            className={`mt-12 lg:mt-16 transition-all duration-700 delay-400 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-admiral-magenta" />
                <span className="text-base font-semibold text-admiral-navy">
                  Top Lessons Learned
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {topLessons.map((lesson) => {
                  const Icon = priorityIcons[lesson.priority];
                  return (
                    <Link
                      key={lesson.id}
                      to="/lessons"
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-admiral-light/50 hover:bg-admiral-light transition-colors group border border-admiral-light hover:border-admiral-blue/30"
                    >
                      <Icon className="w-5 h-5 text-admiral-magenta mb-2" />
                      <span className="text-sm font-semibold text-admiral-navy group-hover:text-admiral-blue transition-colors mb-1">
                        {lesson.title}
                      </span>
                      <p className="text-xs text-admiral-gray line-clamp-2">
                        {lesson.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <div className="text-center mt-3">
                <Link
                  to="/lessons"
                  className="text-xs text-admiral-blue hover:text-admiral-magenta transition-colors"
                >
                  See all lessons →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
