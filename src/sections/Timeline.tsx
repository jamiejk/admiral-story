import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, Star, Calendar, Mail, MapPin, AlertCircle, User, PoundSterling } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { loadTimelineEvents, getKeyEvents, categoryConfig, type TimelineEvent, type EventCategory } from '@/data/timeline';

type FilterCategory = 'all' | EventCategory | 'key';

const categoryIcons: Record<string, React.ElementType> = {
  complaint: AlertCircle,
  visit: MapPin,
  correspondence: Mail,
  milestone: Calendar,
  ceo: User,
  payment: PoundSterling,
};

export default function Timeline() {
  const [filter, setFilter] = useState<FilterCategory>('key'); // Default to showing key events
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [allEvents, setAllEvents] = useState<TimelineEvent[]>([]);
  const [keyEvents, setKeyEvents] = useState<TimelineEvent[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Load events and listen for updates
  const reloadEvents = useCallback(() => {
    setAllEvents(loadTimelineEvents());
    setKeyEvents(getKeyEvents());
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

  useEffect(() => {
    reloadEvents();

    // Listen for timeline updates
    const handleTimelineUpdate = () => {
      reloadEvents();
    };
    window.addEventListener('timeline-updated', handleTimelineUpdate);
    window.addEventListener('focus', reloadEvents);

    return () => {
      window.removeEventListener('timeline-updated', handleTimelineUpdate);
      window.removeEventListener('focus', reloadEvents);
    };
  }, [reloadEvents]);

  const filteredEvents =
    filter === 'all'
      ? allEvents
      : filter === 'key'
        ? keyEvents
        : allEvents.filter((event) => event.category === filter);

  const filters: { value: FilterCategory; label: string }[] = [
    { value: 'key', label: '⭐ Key Events' },
    { value: 'all', label: 'All Events' },
    { value: 'milestone', label: 'Milestones' },
    { value: 'complaint', label: 'Complaints' },
    { value: 'ceo', label: 'CEO Escalations' },
    { value: 'visit', label: 'Site Visits' },
    { value: 'payment', label: 'Payments' },
    { value: 'correspondence', label: 'Emails' },
  ];

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div
            className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy mb-4">
              The Timeline
            </h2>
            <p className="text-base sm:text-lg text-admiral-gray max-w-2xl mx-auto">
              Every email, every complaint, every delay.{' '}
              <span className="font-semibold text-admiral-magenta">
                {allEvents.length} events
              </span>{' '}
              and counting.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="w-full">
              {/* Filter Buttons */}
              <div
                className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                {filters.map((f) => (
                  <Button
                    key={f.value}
                    variant={filter === f.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(f.value)}
                    className={`text-xs sm:text-sm ${filter === f.value
                      ? 'bg-admiral-navy text-white'
                      : 'border-admiral-light text-admiral-dark hover:bg-admiral-light'
                      }`}
                  >
                    {f.label}
                  </Button>
                ))}
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Central Line */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-admiral-light sm:-translate-x-1/2" />

                {/* Events */}
                <div className="space-y-6 lg:space-y-8">
                  {filteredEvents.map((event, index) => {
                    const config = categoryConfig[event.category];
                    const Icon = categoryIcons[event.category];
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={event.id}
                        className={`relative transition-all duration-700 ${isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                          }`}
                        style={{ transitionDelay: `${Math.min(150 + index * 30, 800)}ms` }}
                      >
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-4 sm:left-1/2 w-8 h-8 rounded-full ${config.color} flex items-center justify-center z-10 sm:-translate-x-1/2 border-4 border-white shadow-md`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>

                        {/* Key Event Star */}
                        {event.isKey && (
                          <div className="absolute left-4 sm:left-1/2 -top-2 z-20 sm:-translate-x-1/2">
                            <Star className="w-4 h-4 text-admiral-magenta fill-admiral-magenta" />
                          </div>
                        )}

                        {/* Content Card */}
                        <div
                          className={`ml-16 sm:ml-0 sm:w-5/12 ${isEven ? 'sm:mr-auto sm:pr-12' : 'sm:ml-auto sm:pl-12'
                            }`}
                        >
                          <button
                            onClick={() => setSelectedEvent(event)}
                            className={`w-full text-left bg-white border rounded-xl p-4 hover:shadow-lg hover:border-admiral-blue/30 transition-all duration-300 group ${event.isKey ? 'border-admiral-magenta/30' : 'border-admiral-light'
                              }`}
                          >
                            {/* Date & Category */}
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="text-sm font-bold text-admiral-magenta">
                                {event.date}
                              </span>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${config.color} text-white border-0`}
                              >
                                {config.label}
                              </Badge>
                              {event.isKey && (
                                <Star className="w-3 h-3 text-admiral-magenta fill-admiral-magenta" />
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-admiral-navy mb-1 group-hover:text-admiral-blue transition-colors">
                              {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-admiral-gray line-clamp-2">
                              {event.description}
                            </p>

                            {/* Expand Hint */}
                            {event.fullDetails && (
                              <div className="flex items-center gap-1 mt-2 text-xs text-admiral-blue opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Click for full details</span>
                                <ChevronDown className="w-3 h-3" />
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Event Count */}
              <div
                className={`text-center mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <p className="text-sm text-admiral-gray">
                  Showing {filteredEvents.length} of {allEvents.length} events
                  {filter !== 'all' && filter !== 'key' && ` (${filters.find(f => f.value === filter)?.label})`}
                  {filter === 'key' && ' (Key Events)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-sm font-bold text-admiral-magenta">
                {selectedEvent?.date}
              </span>
              {selectedEvent && (
                <>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${categoryConfig[selectedEvent.category].color} text-white border-0`}
                  >
                    {categoryConfig[selectedEvent.category].label}
                  </Badge>
                  {selectedEvent.isKey && (
                    <Star className="w-4 h-4 text-admiral-magenta fill-admiral-magenta" />
                  )}
                </>
              )}
            </div>
            <DialogTitle className="text-xl text-admiral-navy">
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-base text-admiral-dark leading-relaxed pt-4">
            {selectedEvent?.fullDetails || selectedEvent?.description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
