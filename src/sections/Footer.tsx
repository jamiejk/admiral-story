import { AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-admiral-navy py-12 lg:py-16">
      <div className="section-container">
        <div className="section-inner">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-10">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/admiral-mascot-detourned.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-white">
                  Admiral: Looking After No.1
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                A documented account of a 14+ month insurance claim battle with
                Admiral Insurance. Four formal complaints upheld. Still no conclusion!
              </p>
            </div>

            {/* Right Column */}
            <div className="md:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 rounded-lg mb-4">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-sm text-warning font-medium">
                  Claim Still Unresolved
                </span>
              </div>
              <p className="text-white/40 text-sm">
                Last updated: {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {currentYear} This is a personal documentation site. Not
              affiliated with Admiral Insurance.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
              <a
                href="/#timeline"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Timeline
              </a>
              <a
                href="/#gallery"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Photos
              </a>
              <a
                href="/#story"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Story
              </a>
              <Link
                to="/lessons"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Lessons
              </Link>
              <a
                href="/#status"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#status')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Status
              </a>
              <a
                href="/#about"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-white/30 text-xs text-center leading-relaxed">
              All information on this site is based on documented correspondence
              and events. Quotes from Admiral are taken directly from their
              complaint response letters. This site constitutes fair comment on
              a matter of public interest.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
