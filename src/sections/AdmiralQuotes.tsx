import { useRef, useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuoteData {
  text: string;
  source: string;
  date: string;
  context: string;
}

const quotes: QuoteData[] = [
  {
    text: 'Service levels fell below our standard.',
    source: 'Admiral Complaints Team',
    date: 'March 24, 2025',
    context: '1st complaint upheld',
  },
  {
    text: 'We acknowledge that we are liable for surveyors\' fees under your policy.',
    source: 'Admiral Complaints Team',
    date: 'March 24, 2025',
    context: 'First complaint response',
  },
  {
    text: 'Sending the structural engineer instead of a scoping professional was a mistake.',
    source: 'Admiral Complaints Team',
    date: 'May 7, 2025',
    context: '2nd complaint upheld',
  },
  {
    text: 'We have no record of the request and Davies had been acting without our instructions.',
    source: 'Admiral Complaints Team',
    date: 'May 9, 2025',
    context: 'Regarding fee blockade attempt',
  },
  {
    text: 'Communication had fallen below the required standard.',
    source: 'Admiral Complaints Team',
    date: 'June 26, 2025',
    context: '3rd complaint upheld',
  },
  {
    text: 'The previous "desktop" scope was insufficient.',
    source: 'Admiral Complaints Team',
    date: 'August 28, 2025',
    context: '4th complaint upheld',
  },
  {
    text: 'You fell through the cracks.',
    source: 'Head of Operations & Head of Complaints',
    date: 'July 31, 2025',
    context: 'Site visit admission',
  },
];

export default function AdmiralQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-admiral-navy"
    >
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div
            className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Admiral's Own Words
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              When even their own complaints team admits fault—five times—you'd think
              that would be the end of it.
            </p>
          </div>

          {/* Quote Card */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-10 h-10 text-admiral-magenta/40" />

              {/* Quote Content */}
              <div className="text-center pt-6">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
                  "{currentQuote.text}"
                </blockquote>

                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm font-semibold text-admiral-magenta">
                    {currentQuote.source}
                  </div>
                  <div className="text-xs text-white/50">
                    {currentQuote.date} • {currentQuote.context}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevQuote}
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-6 bg-admiral-magenta'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextQuote}
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div
            className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-admiral-magenta">
                5
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Complaints Upheld
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                7+
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Admissions of Fault
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-warning">
                £0
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Properly Paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
