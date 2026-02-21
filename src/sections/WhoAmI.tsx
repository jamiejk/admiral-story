import { useRef, useEffect, useState } from 'react';
import { User } from 'lucide-react';

export default function WhoAmI() {
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

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="section-container">
                <div className="section-inner">
                    <div
                        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <div className="w-12 h-12 bg-admiral-navy rounded-xl flex items-center justify-center text-white">
                                <User className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy">
                                Who Am I?
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-admiral-dark leading-relaxed text-center">
                            <p className="mb-6">
                                I am a reasonably ordinary person living with my family and pets in South Wales, U.K. I am a first-time homeowner unlucky enough to have had part of my property destroyed during Storm Darragh—and to have discovered deep, systemic flaws with the insurance company that was supposed to protect me.
                            </p>
                            <p className="mb-6">
                                I have not named anyone involved in this horrific, ongoing saga—and I would prefer to stay anonymous.
                            </p>
                            <p>
                                If you are from Admiral visiting this site—I warned your staff several times I was going to do this, and no one seemed to care. You can{' '}
                                <a
                                    href="mailto:contact@admiraloverboard.com"
                                    className="text-admiral-magenta hover:text-admiral-navy font-semibold underline underline-offset-4 transition-colors"
                                >
                                    send me a message
                                </a>{' '}
                                if you would now like to help me right the various outstanding wrongs detailed here. In the meantime, this resource will exist as a testimony to the sadistic endurance test this claim has become.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
