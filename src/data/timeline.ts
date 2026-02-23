// Timeline Events - Edit this file or use the /#/edit-timeline page

export type EventCategory = 'complaint' | 'visit' | 'correspondence' | 'milestone' | 'ceo' | 'payment';

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: EventCategory;
  fullDetails?: string;
  isKey: boolean; // Whether this appears in the Key Events sidebar
}

export const defaultTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '01/09/2024',
    title: 'Move-in and Studio Conversion',
    description: 'Purchase house and Admiral Home/Car insurance. Convert parking garage into art studio for £13,000-15,000.',
    category: 'milestone',
    fullDetails: 'I purchase and move into my house and purchase an Admiral Home and Car insurance policy. I convert an existing substantial parking garage on the property into a home studio for my art production hobby and as a man cave/storage space. Cost of conversion approximately £13,000-15,000.',
    isKey: false,
  },
  {
    id: 2,
    date: '01/12/2024',
    title: 'Initial Peril - Storm Darragh',
    description: '28m tree (44 tonnes) destroys converted studio/garage and garden. Hire Loss Assessor.',
    category: 'milestone',
    fullDetails: 'Storm Darragh causes a catastrophic treefall. The tree involved is 28m tall and weighs approximately 44 tonnes. It completely destroys my recently converted art studio/garage (as well as next door\'s!) and much of the garden. Because I\'ve never made an insurance claim before, it\'s obviously large, and I am concerned about liability for extensive damage to neighbours\' property, I opt to hire a Loss Assessor. For reasons you will see as you read on, I 100% recommend this.',
    isKey: true,
  },
  {
    id: 3,
    date: '18/12/2024',
    title: 'Site Meeting',
    description: 'Davies Loss Adjuster visits, advises against retaining loss assessor, names a settlement figure.',
    category: 'visit',
    fullDetails: 'During the site visit on, a representative from Davies Group (acting on behalf of Admiral) requested a private conversation without my Loss Assessor present. During this exchange, the Davies representative advised me that retaining independent representation was not in my interest and suggested the claim could be settled directly for a specific sum. The representative further stated the claim was \'clear cut\' and that he \'did not anticipate any issues.',
    isKey: true,
  },
  {
    id: 4,
    date: '19/12/2024',
    title: 'Email from Davies',
    description: 'Davies confirms report sent to Admiral, will appoint Building Surveyor once approved.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 5,
    date: '01/01/2025',
    title: 'Email to Davies',
    description: 'Follow up on surveyor progress, raise concerns about cracks and shifting windows in main house.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 6,
    date: '03/01/2025',
    title: 'Surveyor Fee Request',
    description: 'Submit formal request for independent RICS-qualified surveyor. No response for over a month.',
    category: 'correspondence',
    fullDetails: 'Following the verbal indications from the Davies representative suggesting a pre-determined settlement figure, and to ensure a balanced assessment of the damage, I submitted a formal request for independent surveyor fees. Despite Admiral\'s policy explicitly covering professional fees for such assessments, and the clear necessity for independent technical oversight to ensure a fair outcome, this request received no response for over 30 days. This lack of communication effectively stalled all technical progress on the claim and appears to contradict the FCA’s \'Consumer Duty\' regarding timely and transparent claims handling.',
    isKey: true,
  },
  {
    id: 7,
    date: '17/02/2025',
    title: 'Email to Davies',
    description: 'I complain that Davies, by way of continued failure to reply, is refusing to allow independent surveyor to participate.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 8,
    date: '20/02/2025',
    title: '1st Formal Complaint to Admiral',
    description: 'Three months after treefall. Cite lack of communication, delays, and no structural engineer sent.',
    category: 'complaint',
    fullDetails: 'Having received no response to my request whatsoever from Davies, and almost three months after the treefall, I file my first formal complaint with Admiral. It covers: (1) Lack of communication inc. the ongoing failure to respond to emails and written questions. (2) Delays to the claim caused by slow-walking the appointment of surveyors. (3) Safety assessment failure: calling to their attention the fact that no structural engineer has been sent to assess the property\'s safety despite the catastrophic nature of the tree fall.',
    isKey: true,
  },
  {
    id: 9,
    date: '25/02/2025',
    title: 'Email to Admiral',
    description: 'Challenge refusal to cover independent surveyor fees, citing FCA regulations (ICOBS).',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 10,
    date: '03/03/2025',
    title: 'Email to Admiral',
    description: 'Chase Admiral, question legal limit on leaving property in destruction. Send debris photos.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 11,
    date: '24/03/2025',
    title: '1st Formal Complaint Upheld',
    description: 'Admiral admits service failure, acknowledges liability for surveyor fees. £300 compensation issued.',
    category: 'milestone',
    fullDetails: 'Admiral upholds my initial complaint in full, formally categorizing the lack of communication and subsequent delays as a \'service failure.\' They acknowledge that the company is liable for surveyor fees under the terms of my policy. Admiral attribute their previous refusal to provide these fees to an error created by a misstatement of their own policy documentation.\n\nFollowing this acknowledgment, Admiral request that I submit fees for an independent surveyor to facilitate a \'Scope of Works\' visit. They issue a compensation payment of £300; for context, this amount does not reflect the significant administrative burden or the extensive hours required to secure their compliance with the policy terms.',
    isKey: true,
  },
  {
    id: 12,
    date: '02/04/2025',
    title: 'Email to Davies',
    description: 'Demand joint Scope of Works visit be scheduled. My property has now lain in a state of abject destitution for four months.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 13,
    date: '03/04/2025',
    title: 'Email from Davies',
    description: 'Davies argues Admiral limited independent surveyor to one site visit only. Arguments for over a week.',
    category: 'correspondence',
    fullDetails: 'When they finally acknowledge Admiral\'s decision, Davies argue that Admiral has actually limited funding for an independent surveyor to one site visit only, and no follow up time to produce the actual scope. This is ridiculously inadequate for a claim of this complexity and size. It is not what the FCA regulations provide for. Slow-motion arguments about this go on for over a week via email. My contents continue to rot in the dangerous debris as Spring arrives.',
    isKey: false,
  },
  {
    id: 14,
    date: '04/04/2025',
    title: 'Email to Davies',
    description: 'Submit Survey Fee proposal. Explicitly warn we have NOT agreed to cash settlement.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 15,
    date: '11/04/2025',
    title: 'Email from Davies',
    description: 'Davies states Admiral not responsible for future surveyor fees after initial visit.',
    category: 'correspondence',
    fullDetails: 'Davies Group stated that Admiral would not be responsible for surveyor fees beyond an initial visit, asserting that a single visit should suffice to produce a comprehensive Scope of Works.\n\nFor a claim involving significant structural damage, a single visit (with no follow-up work budgeted) is completely insufficient to properly assess reinstatement. Restricting independent professional oversight in this manner would create a "technical deficit" in the scoping process, potentially resulting in a settlement that does not reflect the full extent of the required repairs.',
    isKey: false,
  },
  {
    id: 16,
    date: '14/04/2025',
    title: 'Email to Davies',
    description: 'Press for answers on declining independent surveyor. Agree to restricted terms to get claim moving.',
    category: 'correspondence',
    fullDetails: 'We continue to press for answers as to why and on whose authority Admiral is declining the full use of the independent surveyor. We note our frustration that these questions remain unanswered despite months of asking. Now deep into a four-month+ delay, however, we eventually agree to these restricted terms just to get the claim moving. This "concession" is not a free choice; it is due to administrative attrition.',
    isKey: false,
  },
  {
    id: 17,
    date: '17/04/2025',
    title: "First 'Scoping' Site Visit",
    description: 'Davies sends structural engineer instead of surveyor. Independent surveyor conducts thorough inspection.',
    category: 'visit',
    fullDetails: 'The first scoping visit finally takes place. But instead of a surveyor, Davies Group sends a structural engineer to my property who arrives (late) stating that he does not actually perform "scope of work" assessments. During this same visit, the independent surveyor we have organized arrives on time and conducts a thorough inspection, including drone surveys and foundation photography. He explicitly warns that a full structural assessment is impossible while the site is covered in wreckage and the subbase is unobservable.',
    isKey: true,
  },
  {
    id: 18,
    date: '24/04/2025',
    title: 'Email to Davies',
    description: 'Independent surveyor warns scope still required. Davies attempts to cobble scope from records.',
    category: 'correspondence',
    fullDetails: 'Because the Davies engineer has not actually been briefed to create a scope, and does not survey the property with a scope of works in mind, the visit results in no progress toward a reinstatement budget. The independent surveyor writes to warn GSP/Davies that because the structural inspection has been insufficient to form a basis for reinstatement, a proper scope is still required. Davies attempt to cobble together information for a scope from my own records and those of the independent surveyor. Despite repeated requests, Admiral fails to send anyone to my house to check for subsidence or heave following the massive treefall. The structural engineer Davies (incorrectly) sent kindly informs me that it is VERY IMPORTANT I get both looked into, which is what I have been telling Admiral for months.',
    isKey: false,
  },
  {
    id: 19,
    date: '30/04/2025',
    title: '2nd Formal Complaint to Admiral',
    description: 'Complain about continued lack of communication and Davies sending wrong professional.',
    category: 'complaint',
    isKey: false,
  },
  {
    id: 20,
    date: '04/05/2025',
    title: 'Email to Davies',
    description: 'Independent surveyor: site must be cleared to verify foundation integrity before rebuild budget.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 21,
    date: '07/05/2025',
    title: '2nd Formal Complaint Upheld',
    description: 'Admiral admits sending structural engineer instead of scoping professional is a mistake.',
    category: 'milestone',
    fullDetails: 'Admiral upholds my second formal complaint quickly. They admit that sending the structural engineer instead of a scoping professional is a mistake. They accept the continued lack of communication from Davies Group and the further delays this error causes. Additional compensation is offered for the "stress and inconvenience" caused by this specific failure.',
    isKey: true,
  },
  {
    id: 22,
    date: '09/05/2025',
    title: 'Fee Blockade Attempt',
    description: 'Davies falsely claims Admiral will not consider secondary fees. Davies has never passed request to Admiral.',
    category: 'complaint',
    fullDetails: 'Immediately after this complaint is upheld, Davies Group inform me that Admiral will not in fact consider any secondary surveyor fees. When I challenge this with Admiral, I discover that Davies Group has never even passed the initial surveyor\'s fee request to Admiral. Admiral\'s own complaints team subsequently confirm that they have no record of the request and that Davies has been acting without their instructions on this point.',
    isKey: true,
  },
  {
    id: 23,
    date: '14/05/2025',
    title: 'First CEO Escalation',
    description: 'Send letter to Admiral CEO detailing 6 months of zero progress and Davies obstruction.',
    category: 'ceo',
    fullDetails: 'Exasperated by the fact that Admiral is upholding complaints while Davies Group continues to act in direct opposition to those findings, I realise that the "standard" complaints process is going to be insufficient. I send a Letter to the Admiral CEO, detailing the by-now 6 months of zero progress, and Davies Group obstruction. I point out that my garage/studio is still lying in a hazardous wreck in the garden.',
    isKey: true,
  },
  {
    id: 24,
    date: '14/05/2025',
    title: 'CEO Response',
    description: 'The Admiral CEO personally apologizes and promises "executive oversight" and "necessary assistance."',
    category: 'ceo',
    isKey: true,
  },
  {
    id: 25,
    date: '15/05/2025',
    title: 'Retaliatory Allegation',
    description: 'Davies alleges studio is "commercial workshop" - which would invalidate entire claim. Stalls for weeks.',
    category: 'complaint',
    fullDetails: 'Following my outreach to the CEO regarding ongoing delays, Davies Group introduced an allegation that the studio was a "commercial workshop." If accurate, this characterization could have invalidated the entire claim.\n\nThe Outcome: This allegation effectively stalled the claim for weeks. Admiral later upheld a formal complaint regarding this matter, acknowledging that the "commercial workshop" claim was unsubstantiated. Despite this admission, the specific origin and evidentiary basis for this allegation remain undisclosed to this day.\n\nThis incident marked a clear shift in the handling of the claim, moving from a standard service interaction to what appeared to be an adversarial process',
    isKey: true,
  },
  {
    id: 26,
    date: '15/05/2025',
    title: '3rd Formal Complaint',
    description: 'Object to retaliatory workshop allegation. Complain about continued failure to provide competent SOW.',
    category: 'complaint',
    fullDetails: 'I formally flagged that these adversarial tactics from Davies, combined with the repeated administrative failures, were having a documented negative impact on my health and well-being. The Key Discrepancies: 1. The \'commercial workshop\' allegation was launched immediately following executive-level escalation. 2. There was a documented disconnect between the CEO’s office and the instructions being relayed by Davies Group. This occurred while Davies Group continued to fail in providing a competent Scope of Works (SOW), despite Admiral admitting the previous site visit was a "failure" just eight days prior (May 7th).',
    isKey: false,
  },
  {
    id: 27,
    date: '20/05/2025',
    title: 'Email to Admiral',
    description: 'Provide evidence studio is hobby space. Davies and Admiral each blame the other for allegation.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 28,
    date: '06/06/2025',
    title: 'Email from Admiral',
    description: 'Senior complaints handler acknowledges distress. Director of Home Insurance takes claim in-house.',
    category: 'correspondence',
    fullDetails: 'A senior complaints handler at Admiral sends an email acknowledging that the workshop allegation has caused significant distress. She informs me that the "Director of Home Insurance" has decided to take the claim back in-house to ensure closer oversight.',
    isKey: false,
  },
  {
    id: 29,
    date: '10/06/2025',
    title: 'First Unilateral Payment',
    description: 'Admiral deposits £33,790 without comment - less than original build cost. Based on flawed "desktop" scope.',
    category: 'payment',
    fullDetails: 'Without further comment, Admiral elect to bypass any further negotiation on the scope and simply "dump" the amount of £33,790 into my bank account. This payment, which is for reference less than it cost to build the original structure a decade earlier, is explicitly based on the Scope of Works created by GSP (Gately-Smithers-Purslow) which is produced via a "desktop" exercise. No competent GSP representative has actually visited my property to verify structural damage before its creation. It ignores many of the findings of the independent surveyor. Admiral has attempted to bypass further negotiation and force me into a cash settlement based on an unsafe reinstatement plan.',
    isKey: true,
  },
  {
    id: 30,
    date: '10/06/2025',
    title: 'Email to Admiral',
    description: 'Formally notify Admiral I have NOT agreed to cash settlement. Admiral refuses to provide bank details for return.',
    category: 'correspondence',
    fullDetails: 'I formally notify Admiral that I have NOT agreed to a cash settlement and request details to return the funds. Admiral refuses to provide bank details to allow the return, further forcing the cash route. By refusing to allow the return of the funds, Admiral violates the principle that a cash settlement should be an agreed-upon alternative to reinstatement.',
    isKey: false,
  },
  {
    id: 31,
    date: '11/06/2025',
    title: 'Email to Admiral',
    description: 'Desktop SOW ignores foundation examination needs. Warns outbuilding remains "dangerous structure" 7 months post-peril.',
    category: 'correspondence',
    fullDetails: 'Reviewing the "desktop" SOW provided with the payment, we confirm it ignores critical need to examine the foundations identified during the April 17th site visit. We spend over a month chasing Admiral for a response to this, warn Admiral that -- given there is no reasonable budget in the scope for clearance -- the outbuilding remains a "dangerous structure" seven months after the initial peril, posing a risk to both my family and my neighbors.',
    isKey: false,
  },
  {
    id: 32,
    date: '26/06/2025',
    title: '3rd Formal Complaint Upheld',
    description: 'Admiral admits communication has "fallen below the required standard".',
    category: 'milestone',
    isKey: true,
  },
  {
    id: 33,
    date: '30/06/2025',
    title: '4th Formal Complaint',
    description: 'Complain Admiral is "trapping" into cash settlement. Challenges GSP desktop scope. No safety-verified plan 6 months in.',
    category: 'complaint',
    fullDetails: 'I complain that Admiral is effectively "trapping" me into a cash settlement; formally challenge the GSP (Gately-Smithers-Purslow) desktop scope; argue that Admiral\'s internal team is simply "rubber-stamping" the same flawed data that Davies Group has produced, meaning the move to "in-house" management is a change in name only, not in quality. I flag that Admiral is now six months into the claim and has yet to produce a safety-verified plan for a "dangerous structure" that is physically shifting.',
    isKey: false,
  },
  {
    id: 34,
    date: '18/07/2025',
    title: '2nd CEO Escalation',
    description: 'Write to CEO again warning workshop allegation is retaliatory. Property remains "dangerous structure" 7 months post-peril.',
    category: 'ceo',
    fullDetails: 'Having reached a total impasse with the internal claims team, I write again to Admiral\'s CEO (and the head of household claims). I warn him that the "workshop" allegation is retaliatory and that the property remains a "dangerous structure" seven months post-peril. No reply this time.',
    isKey: false,
  },
  {
    id: 35,
    date: '21/07/2025',
    title: 'Appointment of Head of Operations',
    description: 'Head of Operations assigned. Questions why site leveling necessary.',
    category: 'milestone',
    fullDetails: 'Admiral\'s Head of Operations is assigned to the case. He begins by questioning why the site leveling and further debris removal requested by the independent surveyor are even necessary. He explicitly asks, "With the subbase and foundations remaining, why do you consider it necessary to level the site?" I respond that site leveling is an "essential enabling step" to check if the foundations have survived the 44-tonne impact (noting that the neighbor\'s foundations have failed). Also, my garden has looked like a bomb has been detonated in it for almost eight months and no one seems to care.',
    isKey: false,
  },
  {
    id: 36,
    date: '31/07/2025',
    title: 'Visit from Head of Operations and Head of Complaints',
    description: 'They admit I "fell through the cracks" and promise fair, restorative approach with "benefit of the doubt."',
    category: 'visit',
    fullDetails: 'Admiral\'s head of complaints and head of operations visit our home. They finally seem to grasp the scale of the catastrophe, admit I "fell through the cracks" and promise a fair, restorative approach with the "benefit of the doubt." At this meeting, I inform the head of operations that, having pursued Admiral for eight months about my contents, I have disposed of several sundry broken items I am retaining ready for inspection. He tells me this is acceptable given the delays.',
    isKey: true,
  },
  {
    id: 37,
    date: '07/08/2025',
    title: 'Long Silence Followed by Micro-Litigation',
    description: '10 days of silence after promises, then begins contesting cost of tree root removal already paid for.',
    category: 'complaint',
    fullDetails: 'Having promised action, immediately after the meeting there in fact ensues 10 days of silence in which no emails whatsoever are responded to. Following this silence, Admiral\'s Head of Operations begins contesting the cost of tree root removal already paid for. This begins a pattern of \'micro-litigation\' of the claim totally at odds with what was promised at the meeting.',
    isKey: false,
  },
  {
    id: 38,
    date: '28/08/2025',
    title: '4th Formal Complaint Upheld',
    description: 'Admiral admits previous "desktop" scope is insufficient.',
    category: 'milestone',
    isKey: true,
  },
  {
    id: 39,
    date: '05/09/2025',
    title: 'Engineer Report',
    description: 'Confirms shattered Bison beams and total failure of load-bearing steels and foundation pads. Structure irrecoverable.',
    category: 'milestone',
    fullDetails: 'The engineer instructed by the independent surveyor issues their report. It confirms shattered Bison beams and total failure of load-bearing steels and foundation pads. The verdict: the structure is irrecoverable and requires a full replacement.',
    isKey: true,
  },
  {
    id: 40,
    date: '09/10/2025',
    title: 'Site-Verified Scope Approved',
    description: 'Admiral finally signs off on site-verified SOW acknowledging structural damage ignored in June.',
    category: 'milestone',
    isKey: true,
  },
  {
    id: 41,
    date: '23/10/2025',
    title: 'External Specialists Threat',
    description: 'Despite July promises, Head of Ops says Admiral might need "external specialists" to review findings.',
    category: 'correspondence',
    fullDetails: 'Despite the July promises of "direct oversight," Admiral\'s head of ops now says Admiral might need "external specialists" to review Peritus\'s technical findings. I immediately push back, citing FCA ICOBS 8.1.1R and the unfairness of another bureaucratic layer.',
    isKey: false,
  },
  {
    id: 42,
    date: '31/10/2025',
    title: 'Head of Operations Review Complete',
    description: 'The Head of Operations completes review, agrees to bulk of SOW.',
    category: 'milestone',
    isKey: false,
  },
  {
    id: 43,
    date: '01/11/2025',
    title: 'Tenders Return',
    description: 'Tenders return based on agreed scope.',
    category: 'milestone',
    isKey: false,
  },
  {
    id: 44,
    date: '20/11/2025',
    title: 'Lowest Tender Rejected',
    description: 'The Head of Operations rejects lowest tender for being "considerably higher" than initial GSP budget - the already-discredited budget.',
    category: 'complaint',
    fullDetails: 'After 3 weeks (!) the Head of Operations rejects the lowest tender. His reason: it is "considerably higher" than the initial GSP budget—the very budget already found to be inaccurate in a previous upheld complaint.',
    isKey: false,
  },
  {
    id: 45,
    date: '01/12/2025',
    title: 'Contingency Sum Bargaining',
    description: 'The Head of Operations offers contingency sum only if I agree to lower base settlement. Offer rejected as "used car salesman" bargaining.',
    category: 'complaint',
    isKey: false,
  },
  {
    id: 46,
    date: '13/01/2026',
    title: '5th Formal Complaint',
    description: 'Cite "Lethal" SOW, bad-faith negotiation, retaliatory workshop slur, documented medical harm from chronic stress.',
    category: 'complaint',
    fullDetails: 'I file a fifth complaint citing (1) The "Lethal" SOW, (2) Bad-faith negotiation, (3) The Retaliatory workshop slur, and (4) Documented medical harm from chronic stress.',
    isKey: true,
  },
  {
    id: 47,
    date: '06/02/2026',
    title: 'Contents List Submitted',
    description: 'Formally submit comprehensive Contents Schedule to the Head of Operations.',
    category: 'correspondence',
    isKey: false,
  },
  {
    id: 48,
    date: '10/02/2026',
    title: 'Contents Dispute Begins',
    description: 'The Head of Operations "surprised" at value, invokes £2,500 limit on "Office Equipment" for art studio tools.',
    category: 'complaint',
    fullDetails: 'The Head of Operations responds to the contents schedule by expressing "surprise" at the value and instructs Red Dragon (restoration suppliers) to attend the site for validation. He also invokes a £2,500 limit on "Office Equipment," attempting to reclassify my art studio tools (MacBook, high-end cameras) under a restrictive policy sub-limit.',
    isKey: false,
  },
  {
    id: 49,
    date: '12/02/2026',
    title: 'Rejected Red Dragon Inspection',
    description: 'Reject inspection as "logistical absurdity" - Admiral funded clearance, now wants to inspect cleared site.',
    category: 'correspondence',
    fullDetails: 'I reject the Red Dragon inspection as a "logistical absurdity," noting that Admiral already funded the clearance of the site and that requiring an inspection of a cleared site is an "unreasonable barrier" under the FCA Consumer Duty.',
    isKey: false,
  },
  {
    id: 50,
    date: '12/02/2026',
    title: 'Counter-Allegation from Head of Operations',
    description: 'The Head of Operations claims Admiral only agreed to clear building debris, not contents. Inability to inspect = "serious breach of policy terms."',
    category: 'complaint',
    fullDetails: 'The Head of Operations issues a counter-allegation, claiming Admiral only agreed to clear building debris, not contents. He states that the inability to inspect would constitute a "serious breach of policy terms"',
    isKey: false,
  },
  {
    id: 51,
    date: '13/02/2026',
    title: 'Direct Rebuttal to Head of Operations',
    description: 'Cite Page 9 Policy Guide "Harm Exception" and Estoppel. The Head of Operations himself agreed disposal was "no problem" in July.',
    category: 'correspondence',
    fullDetails: 'I send a direct rebuttal to the Head of Operations, citing Page 9 of the Policy Guide (the "Harm Exception") which overrides retention rules if an item "could cause harm". I also cite Estoppel, noting that during the July 31, 2025 site visit, the Head of Operations himself agreed that disposing of damaged items after 8 months of inaction is "no problem".',
    isKey: false,
  },
  {
    id: 52,
    date: '16/02/2026',
    title: 'Third CEO Letter',
    description: 'No reply from Admiral. Send third letter to CEO. Withheld £9,300 contingency used as "bargaining chip." Documented medical harm.',
    category: 'ceo',
    fullDetails: 'Following no reply from Admiral, I send my third letter to the CEO. Withheld Funds: Admiral\'s refusal to release £9,300 in essential contingency sums, which I describe as being used as a "bargaining chip". Contents Dispute: The demand for a physical inspection of items destroyed 14 months ago, despite Admiral having previously funded the site clearance. Regulatory Breaches: A formal notification that the 430-day delay and ongoing "micro-litigation" have caused documented medical harm, placing Admiral in breach of the FCA Consumer Duty.',
    isKey: false,
  },
  {
    id: 53,
    date: '20/02/2026',
    title: 'TrustPilot & Website Launch',
    description: 'Receiving no reply after a week, post to TrustPilot and launch this website.',
    category: 'milestone',
    fullDetails: 'Receiving no reply after a week, I post to TrustPilot and launch this website.',
    isKey: true,
  },
];

// Category configuration for display
export const categoryConfig = {
  complaint: {
    label: 'Complaint',
    color: 'bg-admiral-magenta',
    textColor: 'text-admiral-magenta',
  },
  visit: {
    label: 'Site Visit',
    color: 'bg-admiral-blue',
    textColor: 'text-admiral-blue',
  },
  correspondence: {
    label: 'Emails',
    color: 'bg-admiral-navy',
    textColor: 'text-admiral-navy',
  },
  milestone: {
    label: 'Milestone',
    color: 'bg-warning',
    textColor: 'text-warning',
  },
  ceo: {
    label: 'CEO Escalation',
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
  payment: {
    label: 'Payment',
    color: 'bg-green-600',
    textColor: 'text-green-600',
  },
};

// Load events from localStorage
export function loadTimelineEvents(): TimelineEvent[] {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('admiral-timeline');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved timeline:', e);
      }
    }
  }
  return defaultTimelineEvents;
}

// Save events to localStorage
export function saveTimelineEvents(events: TimelineEvent[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admiral-timeline', JSON.stringify(events));
    window.dispatchEvent(new CustomEvent('timeline-updated', { detail: events }));
  }
}

// Get key events only
export function getKeyEvents(): TimelineEvent[] {
  const events = loadTimelineEvents();
  return events.filter(e => e.isKey);
}

// Import events from JSON
export function importTimelineEvents(jsonString: string): TimelineEvent[] | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (Array.isArray(parsed) && parsed.every(e => e.id && e.date && e.title && e.category)) {
      saveTimelineEvents(parsed);
      return parsed;
    }
  } catch (e) {
    console.error('Failed to import timeline:', e);
  }
  return null;
}
