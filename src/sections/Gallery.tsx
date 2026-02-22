import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, Camera, TreePine, Home, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type GalleryCategory = 'all' | 'damage' | 'aftermath' | 'current' | 'documents';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'all'>;
}

// Placeholder images - replace with actual photos
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/photos/PXL_20241209_100659085_RAW-01_COVER.webp',
    alt: 'Studio roof collapsed under the tree',
    caption: 'A 44 tonne tree smashed straight through the middle of my studio.',
    category: 'damage',
  },
  {
    id: 2,
    src: '/photos/PXL_20241209_143115819_RAW-01_COVER.webp',
    alt: 'Tree branches piercing the structure',
    caption: 'Admiral would later claim these roots had been \'below ground\' and weren\'t covered.',
    category: 'damage',
  },
  {
    id: 3,
    src: '/photos/PXL_20241209_143140468_RAW-01_COVER.webp',
    alt: 'Internal view of the destroyed studio',
    caption: 'Half of the studio collapsed into the neighbour\'s yard, leaving debris and contents scattered everywhere. Admiral absolutely unbothered.',
    category: 'damage',
  },
  {
    id: 4,
    src: '/photos/PXL_20241209_143146887_RAW-01_COVER.webp',
    alt: 'Debris inside the studio',
    caption: 'The roof was mostly smashed off, so the contents inside were soon wrecked. It stayed like this for 10 months.',
    category: 'damage',
  },
  {
    id: 5,
    src: '/photos/PXL_20241210_154232477_RAW-01_COVER__1_.webp',
    alt: 'External view of tree on roof',
    caption: 'Note exposed electrical wiring -- Admiral implied I should have taken the risk of going in here to retrieve my stuff.',
    category: 'damage',
  },
  {
    id: 6,
    src: '/photos/PXL_20250128_114559006.webp',
    alt: 'Cleared site showing remaining damage',
    caption: 'Tree surgeons took to the tree to cut it up. They did a great job! But Admiral left the sawdust and detritus in my yard for a further 8 months.',
    category: 'aftermath',
  },
  {
    id: 7,
    src: '/photos/PXL_20250128_151803343.webp',
    alt: 'Damage to the main house',
    caption: 'Cutting up the tree Pt. 2. -- No complaints about these guys. Perhaps you can imagine what the combo of sawdust and rain did to the electronics in my studio!',
    category: 'aftermath',
  },
  {
    id: 8,
    src: '/photos/PXL_20250205_100927931.webp',
    alt: 'Close up of structural failure',
    caption: "Sharp bits of metal poked into the neighbours' garden for about 8 or 9 months. Do you think Admiral cared? Not a bit!",
    category: 'aftermath',
  },
  {
    id: 9,
    src: '/photos/PXL_20250327_154232755_RAW-01_COVER.webp',
    alt: 'The ongoing state of the property',
    caption: 'The ongoing state of the property months after the peril. Still waiting.',
    category: 'current',
  },
  {
    id: 10,
    src: '/photos/IMG20250917114752 (1).jpg',
    alt: 'Exposed foundations part 1',
    caption: 'The state of the foundations, revealed once an examination was finally carried out by the independent surveyor.',
    category: 'aftermath',
  },
  {
    id: 11,
    src: '/photos/IMG_20250904_162259.jpg',
    alt: 'Exposed foundations part 2',
    caption: 'The state of the foundations following excavation, pt.2 -- note that Bison beams must NEVER be re-used after an impact like this.',
    category: 'aftermath',
  },
  {
    id: 12,
    src: '/photos/PXL_20241213_103524706.RAW-01.COVER.jpg',
    alt: 'Trapped art printer',
    caption: 'My very expensive art printer, trapped under a section of collapsed roof. Admiral says I could & should have \'safely\' extracted this and stored it for 14 moths at my own expense.',
    category: 'damage',
  },
];

const categoryConfig = {
  damage: {
    label: 'The Fall',
    color: 'bg-admiral-magenta',
    icon: TreePine,
  },
  aftermath: {
    label: 'The Aftermath',
    color: 'bg-admiral-blue',
    icon: Camera,
  },
  current: {
    label: 'The Waiting',
    color: 'bg-warning',
    icon: Home,
  },
  documents: {
    label: 'The Paper Trail',
    color: 'bg-admiral-navy',
    icon: FileText,
  },
};

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const filters: { value: GalleryCategory; label: string }[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'damage', label: 'The Fall' },
    { value: 'aftermath', label: 'The Aftermath' },
    { value: 'current', label: 'The Waiting' },
    { value: 'documents', label: 'The Paper Trail' },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-admiral-light"
    >
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div
            className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy mb-4">
              The Evidence
            </h2>
            <p className="text-base sm:text-lg text-admiral-gray max-w-2xl mx-auto">
              A picture is worth a thousand words. Here are several thousand
              words' worth.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-10 lg:mb-14 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
                  : 'bg-white border-admiral-light text-admiral-dark hover:bg-white/80'
                  }`}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredImages.map((image, index) => {
              const config = categoryConfig[image.category];
              const Icon = config.icon;

              return (
                <div
                  key={image.id}
                  className={`group relative aspect-[4/3] bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  {image.src && !image.src.includes('placeholder') ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-admiral-light to-admiral-gray/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Icon className="w-12 h-12 text-admiral-gray/40 mx-auto mb-3" />
                        <p className="text-sm text-admiral-gray/60 font-medium">
                          {image.alt}
                        </p>
                        <p className="text-xs text-admiral-gray/40 mt-1">
                          (Photo placeholder)
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-admiral-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <ZoomIn className="w-8 h-8 text-white mx-auto mb-3" />
                      <p className="text-white font-medium">{image.caption}</p>
                      <Badge
                        variant="secondary"
                        className={`mt-3 ${config.color} text-white border-0 text-xs`}
                      >
                        {config.label}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Photo Upload Notice Removed */}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Photo in lightbox */}
            {selectedImage.src && !selectedImage.src.includes('placeholder') ? (
              <div className="relative mb-4 flex justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[65vh] w-auto object-contain rounded-xl"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gradient-to-br from-admiral-navy/40 to-admiral-navy/20 rounded-xl flex items-center justify-center mb-4">
                {(() => {
                  const Icon = categoryConfig[selectedImage.category].icon;
                  return <Icon className="w-24 h-24 text-white/20" />;
                })()}
              </div>
            )}

            <div className="text-center">
              <p className="text-white text-lg font-medium">
                {selectedImage.caption}
              </p>
              <Badge
                variant="secondary"
                className={`mt-2 ${categoryConfig[selectedImage.category].color
                  } text-white border-0`}
              >
                {categoryConfig[selectedImage.category].label}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
