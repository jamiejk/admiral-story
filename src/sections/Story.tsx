import { useState, useRef, useEffect } from 'react';
import { CloudLightning, Phone, RotateCcw, AlertTriangle, Clock, ChevronRight, User } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const chapters: Chapter[] = [
  {
    id: 'storm',
    title: 'The Storm',
    subtitle: 'September 2024 - December 2024',
    icon: <CloudLightning className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          In 2024 I move back to my home town from abroad with my wife and son, to care for my elderly mother following a major stroke (my mum, not me). After being appalled by the rental prices in the UK vs. value received, we purchase the first house either of us has owned. I also invest about £15,000 in converting a substantial parking garage on the property into an art studio—a space to start making art again, something to soften the blow of leaving the life we have built overseas and remind myself of the beauty of where we've moved to.
        </p>
        <p>
          On December 1st, Storm Darragh arrives. One of the huge trees in our garden takes the opportunity to fall over. It is a 28-meter behemoth, 2-3 metres in diameter and weighing 44 tonnes. It smashes right through the middle of my newly converted studio, flattening it and most of its contents, tearing up the garden, and even taking out the neighbour's garage for good measure. I get to use that space for less than five weeks.
        </p>
      </>
    ),
  },
  {
    id: 'promise',
    title: 'An Improper Suggestion',
    subtitle: 'December 2024 - May 2025',
    icon: <Phone className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          I contacted Admiral immediately, trusting their reputation to manage a disaster of this scale. However, given the complexity, I also appointed an independent Loss Assessor—a step I recommend to any policyholder to ensure balanced representation during a major claim.
        </p>
        <p className="mb-4">
          It took Admiral’s adjuster, Davies Group, nearly three weeks to attend the property. The visit took a concerning turn when the Davies representative requested a private conversation to advise against my use of an independent assessor, while proposing a preliminary cash settlement figure. This attempt to discourage independent representation raises significant questions regarding professional impartiality and compliance with the CILA Code of Conduct.
        </p>
        <p>
          The holiday period resulted in further documented inaction—leaving us to face Christmas and New Year overlooking a "catastrophic disaster zone" rather than our garden. Despite our communicated concerns regarding the risk of subsidence, this period was marked by a lack of substantive progress or technical oversight from Admiral or Davies.
        </p>
      </>
    ),
  },
  {
    id: 'attrition1',
    title: 'Administrative Attrition: Pt. 1',
    subtitle: 'January 2025 - February 2025',
    icon: <Clock className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          Given that Davies proposed a settlement figure without a formal survey, I requested the professional fees for a neutral, RICS-qualified surveyor to ensure a balanced assessment. This request was met with extensive administrative delays and conflicting information regarding my policy coverage—specifically, a refusal to acknowledge that professional fees were included in my terms. For a catastrophic claim, independent technical oversight is a standard requirement to ensure the reinstatement plan is both safe and accurate.
        </p>
        <p>
          Over months of subsequent delays, the lack of communication became a significant barrier to progress. By February, with no site clearance or remediation plan in place, I filed a first formal complaint. The grounds included systemic communication failures, excessive delays, and the failure to appoint a structural engineer despite the severity of the damage. This period of inactivity appears to conflict with the FCA’s Consumer Duty, which requires firms to act in good faith and avoid causing foreseeable harm to policyholders.
        </p>
      </>
    ),
  },
  {
    id: 'attrition2',
    title: 'Administrative Attrition: Pt. 2',
    subtitle: 'March 2025 - April 2025',
    icon: <Phone className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          Just over a month later, Admiral upheld my first formal complaint in full. The company admitted they were liable for the third-party surveyor’s fees as per my policy terms—an entitlement Davies had previously denied. However, this admission did not result in immediate technical progress.
        </p>
        <p className="mb-4">
          Instead, Davies Group spent nearly another month attempting to limit the independent surveyor's involvement to a single visit. For a claim of this complexity, a single inspection is technically inadequate to provide meaningful input on long-term reinstatement plans.
        </p>
        <p>
          Out of a necessity to advance the claim, we eventually agreed to a compromised scope: a single visit where the independent surveyor’s role would be limited to reviewing the plans drafted by Davies.
        </p>
      </>
    ),
  },
  {
    id: 'wrongman',
    title: 'The Wrong Man',
    subtitle: 'April 2025',
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          This is where things start to turn weird. Instead of a surveyor, Davies Group (for reasons only known to themselves) sends a structural engineer to the surveying visit. The first words out of his mouth are literally "I don't get involved in scope-of-works assessments."
        </p>
        <p className="mb-4">
          The months of wrangling have been wasted, because this employee is unqualified and unwilling to carry out the necessary task of working out the scope of the remediation—in other words, what needs to be put right and how it will be done.
        </p>
        <p>
          While the engineer wanders off by himself (purpose unknown), our third party, RICS-certified surveyor does the job he is there to do. A very strange situation!
        </p>
      </>
    ),
  },
  {
    id: 'intransigence',
    title: 'Intransigence... or Incompetence?',
    subtitle: 'May 2025',
    icon: <RotateCcw className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          Following the site visit, the independent surveyor formally warned that a comprehensive scoping survey was still required, as no such assessment had yet taken place. Despite this professional recommendation, Davies Group proceeded to compile a Scope of Works (SOW) based on existing personal records and partial engineering comments. This reliance on incomplete data over a physical survey raises significant concerns regarding the technical competence and adequacy of the scoping process.
        </p>
        <p className="mb-4">
          Furthermore, the adjuster appeared to overlook direct instructions from Admiral to cover the costs of a proper independent survey. At this stage, the claim was characterized by a combination of procedural delays, administrative inertia, and a failure to adhere to both policy terms and professional oversight.
        </p>
        <p>
          Six months after the initial incident, with the structure remaining in a hazardous state and no clear remediation plan, I formally escalated the matter to Admiral’s CEO. This escalation was a direct response to the foreseeable harm caused by these ongoing delays and the lack of transparent communication.
        </p>
      </>
    ),
  },
  {
    id: 'snitches',
    title: 'Allegation after CEO escalation',
    subtitle: 'May 2025',
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          The same day I escalated my concerns to the CEO, he responded with an apology and a promise of senior-level oversight to resolve the claim. However, within 24 hours of this executive promise, Davies Group introduced a new allegation: that "all indications" suggested the garden studio had been used as a "commercial workshop"—a claim that, if true, could have invalidated my entire policy.
        </p>
        <p className="font-bold text-admiral-navy mb-2">Key Findings:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2 text-admiral-gray">
          <li><strong>Lack of Evidence:</strong> Neither Admiral nor Davies Group provided a documented basis for this assertion at the time it was made.</li>
          <li><strong>Internal Disconnect:</strong> While Davies Group launched this investigation, Admiral’s complaints team concurrently denied any knowledge of such instructions following the CEO's promise of support.</li>
          <li><strong>Stalled Progress:</strong> This unsubstantiated allegation stalled the claim for several stressful weeks before it was determined that the cover had not, in fact, been invalidated.</li>
        </ul>
        <p>
          I filed a formal complaint regarding the timing and basis of this allegation. This sequence of events marked a significant shift in the claim's handling, moving from a standard service interaction to an adversarial process that had a documented impact on my health and well-being.
        </p>
      </>
    ),
  },
  {
    id: 'unwanted_settlement',
    title: 'The Unwanted Settlement',
    subtitle: 'June 2025',
    icon: <RotateCcw className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          By mid-June, eight months after the initial incident, Admiral upheld my formal complaint regarding the handling of the claim by Davies Group. However, following this admission, Admiral proceeded to issue a settlement payment directly into my bank account without prior notification or discussion.
        </p>
        <p className="mb-4">
          The amount issued is less than the original construction cost of the studio in 2018, failing to account for significant inflation or current market rates for reinstatement.
        </p>
        <p className="mb-4">
          The settlement was based on a Scope of Works (SOW) produced internally by Admiral that omitted essential costs, including the clearance of the site and the existing wreckage. I formally advised Admiral of my reluctance to accept these funds, as the amount was insufficient to restore the property to its pre-loss condition and accepting it could prejudice future claims for necessary additional funding.
        </p>
        <p>
          Following the unsolicited payment, I requested the bank details required to return the funds immediately. Admiral declined to facilitate this return by leaving my requests unanswered. This administrative silence effectively enforced a cash settlement route against my express wishes and without a mutually agreed-upon scope.
        </p>
      </>
    ),
  },
  {
    id: 'scope_from_hell',
    title: 'The Scope From Hell',
    subtitle: 'June - July 2025',
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          Between June and July 2025, I formally challenged Admiral regarding the technical basis of their settlement offer. Despite Admiral’s repeated assurances that their internal teams were capable of producing a comprehensive reinstatement plan without a physical site visit by an Admiral surveyor, the resulting Scope of Works (SOW) was substandard. Several critical components of the original structure were entirely absent from the SOW.
        </p>
        <p className="font-bold text-admiral-navy mb-2">Inadequate Remediation Funds:</p>
        <p className="mb-4">
          The plan provided minimal funding for site clearance and zero provision for clearing and leveling the garden—essential steps for any safe reinstatement.
        </p>
        <p className="font-bold text-admiral-navy mb-2">Omission of Professional Fees:</p>
        <p className="mb-4">
          The document appeared to omit necessary professional fees for building contractors, making the plan functionally impossible to execute at the proposed budget.
        </p>
        <p className="font-bold text-admiral-navy mt-6 mb-2">The Fourth Formal Complaint</p>
        <p>
          With the claim now exceeding six months, I was forced to submit a fourth formal complaint. I flagged that Admiral was still relying on the same technical scope that they had previously acknowledged was inadequate months earlier. This continued reliance on a flawed document represents a significant failure to provide a "fair and reasonable" settlement as required under FCA and Financial Ombudsman Service (FOS) guidelines.
        </p>
      </>
    ),
  },
  {
    id: 'executive_visit',
    title: 'The Executive Visit',
    subtitle: 'July 2025',
    icon: <User className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          Following a second escalation to the CEO, Admiral’s Head of Operations was assigned to oversee the claim. Before a site visit could be organized, the company elected to conduct an enquiry into my ownership of the property. Once this was resolved, a formal meeting was held at my home.
        </p>
        <p className="mb-4">
          During this three-hour meeting, the Head of Operations and the Head of Complaints personally toured the scene of the disaster. This marked the first time in eight months that any direct Admiral employees had physically inspected the property to assess the scale of the damage.
        </p>
        <p>
          The meeting concluded with formal assurances that the handling of the claim would change and that the process would now move forward toward a restorative resolution. While the tone of the visit was conciliatory, it established a high expectation for a shift in Admiral’s operational performance—promises that would be measured against their subsequent actions.
        </p>
      </>
    ),
  },
  {
    id: 'attrition3',
    title: 'Administrative Attrition: Pt. 3',
    subtitle: 'August - November 2025',
    icon: <RotateCcw className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          For a moment things seem to be on track. My 4th formal complaint is upheld in full. My independent surveyor takes over the claim and appoints an engineer who confirms that the foundations are, indeed, completely shot. And by October 2025, Admiral finally approve funding for a new, site-verified Scope of Works.
        </p>
        <p className="mb-4">
          But the fact is getting to this point is like wading through mud: I have been forced to micro-litigate for many elements (such as clearing and levelling my bombsite of a garden) that I would have thought would be readily agreed to.
        </p>
        <p className="mb-4">
          Even once the new, competent scope is completed and the tender process is complete, the Head of Operations takes nearly a month to decline even the lowest amount offered. Bafflingly, he is still citing the original scope of works—officially found to be incompetent and inadequate—as his baseline price.
        </p>
        <p>
          It is now somehow four months since the "reset" meeting and it seems less and less like we are negotiating in good faith.
        </p>
      </>
    ),
  },
  {
    id: 'deadly_scope',
    title: 'Why The Scope From Hell Was Actually Deadly',
    subtitle: 'November 2025',
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          I need to backtrack here and talk about what happened when structural engineers were finally able to visit my property, expose the foundations of the studio, and examine the damage.
        </p>
        <p className="mb-4">
          It was immediately obvious that the foundations (Bison beams over a steel frame) were, respectively, smashed and bent. It was shocking that Admiral had not ordered any excavation of the foundations -- especially since the engineers and several contractors told me that it would have been absolutely obvious to any competent professional that a tree of this size would have decimated a steel foundation like this.
        </p>
        <p className="mb-4">
          I shifted from shock to enragement when I realised that the dodgy Scope of Works Admiral had foisted on me made no provision for replacing the foundations, and provided me with just enough funds to reinstate the structure on top of the broken ones. Because the garage was built over a hill, attempting this could have been catastrophic. The weight of the new structure risked collapsing the entire building into the void beneath it, posing a severe threat to me, my family, or any future owner.
        </p>
        <p>
          This is why none of this is, at least not most importantly, about money. Admiral have a duty of care to their customers which they absolutely abrogated by producing a shoddy scope, thrusting an inadequate settlement into my bank account, and attempting to walk away. Had I simply accepted what they gave me, I would have been living in a fundamentally unsafe environment.
        </p>
      </>
    ),
  },
  {
    id: 'dodgy_salesman',
    title: 'Dodgy Salesman Tactics',
    subtitle: 'December 2025 - January 2026',
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          During the exhausting negotiations that follow, the Head of Operations starts to act more like a shady used-car salesman than a veteran insurance professional. For example, trying to get me to accept lowball offers by "throwing in" contingency and provisional sums whilst threatening that they might no longer be offered if I decline the offer. (I have literally seen the same tactic used in a California car dealership, which was one of the worst experiences I have ever had in my life.)
        </p>
        <p className="mb-4">
          Obviously I point out this underhanded behaviour and continue to argue for exactly what I am due—the lowest tender received to reinstate the property.
        </p>
        <p className="mb-4">
          After almost three months of this nonsense, Admiral simply stop communicating and elect once again to simply pay money into my bank account. Minus the contingency and provisional amounts.
        </p>
        <p>
          Again I refuse it and ask to send it back. Again they completely ignore me. In fact, they are now ignoring me rather a lot. I start to realise that I am also annoying myself at this point. Who am I? Is this what I do now? Perhaps I am actually working FOR Admiral without even realising it?
        </p>
      </>
    ),
  },
  {
    id: 'no_good_word',
    title: 'When Your Word Is No Good',
    subtitle: 'February 2026',
    icon: <User className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          It is now February 2026, more than 14 months after the treefall. I finally submit my contents claim, given no one wants to talk to me about the inadequate reinstatement settlement. I still don't have anywhere to put all my stuff, but might as well file it before they stop talking to me entirely.
        </p>
        <p className="mb-4">
          The Head of Operations takes one look at the contents figure and claims I have breached the terms of my contract by disposing of items. He is completely ignoring Admiral's own policy, which states that I should retain items "unless it could cause harm"—it would 100% have caused harm if I had crawled into the debris to try to retrieve rotten, waterlogged items—and his own verbal agreement in July that disposal was "no problem".
        </p>
        <p className="mb-4">
          It's that last part that really gets to me. This guy stood in my decimated yard, pretended to commiserate with me, and told me it was not reasonable for anyone to expect me to keep decaying, dirty contents for over eight months. This guy knew that I had repeatedly asked Admiral to send someone to my house to make the property safe and catalogue the contents -- and that they never came. He told me it was okay to dispose of items. But not in writing.
        </p>
        <p className="mb-4">
          And now he is using that against me.
        </p>
        <p>
          Mind-meltingly, Admiral demand a futile physical inspection of items destroyed months ago—despite they themselves having funded the site clearance and never once making efforts to retain a single item under the debris.
        </p>
      </>
    ),
  },
  {
    id: 'present',
    title: 'The Present',
    subtitle: 'February 2026',
    icon: <Clock className="w-6 h-6" />,
    content: (
      <>
        <p className="mb-4">
          And this is where I am today. I send a third letter to the Admiral CEO, telling him that I simply want my property restored to the state it was in before the accident, and that it is not right to punish me for mistakes Admiral has admitted to making. Four formal complaints upheld. Multiple admissions of service failure. A fifth complaint now in progress.
        </p>
        <p>
          He does not reply. The Head of Operations ignores my emails, and sends a firm to examine my non-existent contents. I launch this website. I will escalate to the Financial Ombudsman. Against the background of some very serious failures of process, I have every confidence the Ombudsman will find in my favour.
        </p>
      </>
    ),
  },
];

export default function Story() {
  const [activeChapter, setActiveChapter] = useState('storm');
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

  const activeChapterData = chapters.find((c) => c.id === activeChapter);

  return (
    <section
      id="story"
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
              The Story
            </h2>
            <p className="text-base sm:text-lg text-admiral-gray max-w-2xl mx-auto">
              It happened to me - it could happen to you.
            </p>
          </div>

          {/* Chapter Navigation - Desktop */}
          <div
            className={`hidden lg:block relative mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {/* Left Scroll Button */}
            <button
              onClick={() => {
                const container = document.getElementById('chapter-nav-container');
                if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white rounded-full shadow-md text-admiral-navy hover:text-admiral-magenta transition-colors"
              aria-label="Scroll left"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>

            {/* Scrollable Container */}
            <div
              id="chapter-nav-container"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                #chapter-nav-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className="flex items-center flex-shrink-0 snap-start">
                  <button
                    onClick={() => setActiveChapter(chapter.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${activeChapter === chapter.id
                      ? 'bg-admiral-navy text-white shadow-md'
                      : 'bg-admiral-light text-admiral-dark hover:bg-admiral-light/80'
                      }`}
                  >
                    <span
                      className={`transition-colors flex-shrink-0 ${activeChapter === chapter.id
                        ? 'text-white'
                        : 'text-admiral-gray'
                        }`}
                    >
                      {chapter.icon}
                    </span>
                    <span className="font-medium">{chapter.title}</span>
                  </button>
                  {index < chapters.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0 text-admiral-gray/40" />
                  )}
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => {
                const container = document.getElementById('chapter-nav-container');
                if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-white rounded-full shadow-md text-admiral-navy hover:text-admiral-magenta transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Chapter Navigation - Mobile */}
          <div
            className={`lg:hidden mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <select
              value={activeChapter}
              onChange={(e) => setActiveChapter(e.target.value)}
              className="w-full px-4 py-3 bg-admiral-light rounded-lg text-admiral-dark font-medium border-0 focus:ring-2 focus:ring-admiral-blue"
            >
              {chapters.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  {chapter.title} — {chapter.subtitle}
                </option>
              ))}
            </select>
          </div>

          {/* Chapter Content */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {activeChapterData && (
              <div className="bg-admiral-light rounded-2xl p-6 sm:p-8 lg:p-10">
                {/* Chapter Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-admiral-magenta rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {activeChapterData.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-admiral-navy">
                      {activeChapterData.title}
                    </h3>
                    <p className="text-sm text-admiral-gray">
                      {activeChapterData.subtitle}
                    </p>
                  </div>
                </div>

                {/* Chapter Body */}
                <div className="prose prose-lg max-w-none text-admiral-dark leading-relaxed">
                  {activeChapterData.content}
                </div>
              </div>
            )}
          </div>

          {/* Chapter Indicators */}
          <div
            className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`w-2 h-2 rounded-full transition-all ${activeChapter === chapter.id
                  ? 'w-8 bg-admiral-magenta'
                  : 'bg-admiral-gray/30 hover:bg-admiral-gray/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
