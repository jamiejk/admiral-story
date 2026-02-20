import { useEffect, useState, useRef } from 'react';
import { AlertTriangle, Twitter, Facebook, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Calculate days since the treefall (December 1, 2024)
const START_DATE = new Date('2024-12-01');

function getDaysElapsed() {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function CurrentStatus() {
  const [days, setDays] = useState(0);
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

  useEffect(() => {
    setDays(getDaysElapsed());
    const interval = setInterval(() => {
      setDays(getDaysElapsed());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const shareText = `Day ${days}: Admiral Insurance has owed this homeowner money for ${days} days. Four complaints upheld. £40,000+ outstanding. #AdmiralLookingTheOtherWay`;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      typeof window !== 'undefined' ? window.location.href : ''
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      typeof window !== 'undefined' ? window.location.href : ''
    )}`,
  };

  return (
    <section
      id="status"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="section-container">
        <div className="section-inner">
          {/* Main Status Card */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="bg-gradient-to-br from-admiral-navy to-admiral-navy/90 rounded-3xl p-8 sm:p-10 lg:p-14 text-center relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-admiral-magenta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-admiral-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Content */}
              <div className="relative z-10">
                {/* Mascot Peeking */}
                <div className="absolute -top-4 right-4 sm:right-8">
                  <img
                    src="/admiral-mascot-detourned.png"
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-80"
                  />
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/20 rounded-full mb-8">
                  <AlertTriangle className="w-4 h-4 text-warning animate-pulse-warning" />
                  <span className="text-sm font-semibold text-warning">
                    Still Unresolved
                  </span>
                </div>

                {/* Day Counter */}
                <div className="mb-6">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-2">
                    Day {days.toLocaleString()}
                  </div>
                  <div className="text-lg text-white/60">
                    of waiting for Admiral to pay what they owe
                  </div>
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-admiral-magenta mx-auto mb-8" />

                {/* Status Details */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-admiral-magenta">
                      4
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Complaints
                      <br />
                      Upheld
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-warning">
                      £40,000+
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Outstanding
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      ∞
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Patience
                      <br />
                      Required
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4">
                  <p className="text-white/80 text-sm sm:text-base">
                    Help hold Admiral accountable. Share this story.
                  </p>

                  {/* Share Buttons */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      onClick={() => window.open(shareUrls.twitter, '_blank')}
                      className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="hidden sm:inline">Share on</span> X
                    </Button>
                    <Button
                      onClick={() => window.open(shareUrls.facebook, '_blank')}
                      className="bg-[#4267B2] hover:bg-[#365899] text-white gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      <span className="hidden sm:inline">Share on</span>{' '}
                      Facebook
                    </Button>
                    <Button
                      onClick={() => window.open(shareUrls.linkedin, '_blank')}
                      className="bg-[#0077b5] hover:bg-[#006396] text-white gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="hidden sm:inline">Share on</span>{' '}
                      LinkedIn
                    </Button>
                  </div>

                  {/* Contact Admiral */}
                  <div className="pt-4">
                    <a
                      href="https://www.admiral.com/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Contact Admiral directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Update Subscription */}
          <div
            className={`max-w-xl mx-auto mt-10 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="flex items-center justify-center gap-2 text-admiral-gray mb-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Want updates on this case?</span>
            </div>
            <p className="text-xs text-admiral-gray/70">
              This site will be updated as the situation develops. Bookmark this
              page or check back for the latest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
