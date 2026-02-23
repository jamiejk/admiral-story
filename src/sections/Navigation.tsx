import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  visible: boolean;
}

const navLinks = [
  { label: 'Timeline', href: '/#timeline', type: 'hash' },
  { label: 'Photos', href: '/#gallery', type: 'hash' },
  { label: 'The Story', href: '/#story', type: 'hash' },
  { label: 'Lessons', href: '/lessons', type: 'route' },
  { label: 'Status', href: '/#status', type: 'hash' },
  { label: 'About', href: '/#about', type: 'hash' },
];

export default function Navigation({ visible }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const scrollToSection = (href: string) => {
    // If it's a hash link on the same page
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.substring(2);
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible
        ? 'translate-y-0 opacity-100'
        : '-translate-y-full opacity-0'
        }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-admiral-light shadow-sm">
        <div className="section-container">
          <div className="section-inner flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3"
            >
              {/* Mini Mascot */}
              <img
                src="/admiral-mascot-detourned.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
              <div className="hidden sm:flex items-center gap-1">
                <span className="text-lg font-bold text-admiral-navy">
                  Admiral:
                </span>
                <span className="text-lg font-bold text-admiral-magenta">
                  Looking After No.1
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-admiral-dark hover:text-admiral-magenta transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-sm font-medium text-admiral-dark hover:text-admiral-magenta transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-admiral-navy"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-admiral-light">
            <div className="section-container py-4">
              {navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left py-3 text-base font-medium text-admiral-dark hover:text-admiral-magenta transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection(link.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    className="block w-full text-left py-3 text-base font-medium text-admiral-dark hover:text-admiral-magenta transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
