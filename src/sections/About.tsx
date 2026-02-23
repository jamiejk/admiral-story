import { useRef, useEffect, useState } from 'react';
import { Info, ShieldAlert } from 'lucide-react';

export default function About() {
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

    return (
        <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-admiral-light/30 border-t border-admiral-light relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="section-inner max-w-4xl mx-auto">

                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Info className="w-8 h-8 text-admiral-navy" />
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-admiral-navy">
                                About Admiral Overboard
                            </h2>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 mb-12 border border-admiral-light">
                            <p className="text-lg text-admiral-dark leading-relaxed mb-6 font-medium">
                                This website was established in February 2026 following a dispute regarding the settlement practices of Admiral Insurance.
                            </p>

                            <h3 className="text-xl font-bold text-admiral-navy mb-4">The Objective</h3>
                            <p className="text-admiral-gray leading-relaxed mb-8">
                                Our mission is to provide transparency for policyholders regarding Admiral's "cash settlement" route. Specifically, we highlight the practice of unilateral cash settlements where the policyholder is not presented with a choice of repair or replacement, despite what a reasonable consumer might expect from their policy terms.
                            </p>

                            <h3 className="text-xl font-bold text-admiral-navy mb-4">The Public Interest</h3>
                            <p className="text-admiral-gray leading-relaxed mb-8">
                                We believe that the handling of insurance claims is a matter of significant public concern. Every year, millions of UK residents trust insurers to restore their lives after an accident. By sharing documented experiences and outlining the specific timelines and correspondence of our own case, we aim to educate other consumers on their rights under the Financial Ombudsman Service (FOS) guidelines and the Consumer Rights Act.
                            </p>

                            <div className="bg-admiral-light/50 p-6 rounded-xl border border-admiral-light text-admiral-dark text-sm sm:text-base italic text-center">
                                This site is a non-commercial, consumer-led initiative. We do not accept advertising, and we do not represent any competitor of Admiral Insurance.
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <ShieldAlert className="w-8 h-8 text-warning" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-admiral-navy">
                                Legal Disclaimer
                            </h2>
                        </div>

                        <div className="bg-admiral-navy text-white rounded-2xl shadow-md p-8 sm:p-10">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-warning mb-3">Non-Affiliation</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            <a href="https://admiraloverboard.com" className="text-admiral-magenta hover:underline" target="_blank" rel="noopener noreferrer">admiraloverboard.com</a> is an independent protest and information site. It is <strong className="text-white">NOT</strong> affiliated with, sponsored by, endorsed by, or in any way connected to Admiral Insurance, Admiral Group plc, or any of its subsidiary brands.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-warning mb-3">Truth & Fact-Checking</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Every effort has been made to ensure that the factual accounts provided on this site are accurate. All statements regarding specific interactions with Admiral Insurance are supported by documentary evidence, including emails, letters, and settlement notices.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-warning mb-3">Opinions</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Any commentary, reviews, or critiques provided on this site represent the honestly held opinions of the author based on the facts presented.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-warning mb-3">Not Legal advice</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            The content on this site is for informational purposes only and does not constitute legal or financial advice. If you are in a dispute with your insurer, we recommend contacting the Financial Ombudsman Service or seeking independent legal counsel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
