// Lessons Learned - Edit this file to update lessons
// Or use the /#/edit page to edit inline

export interface Lesson {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export const defaultLessons: Lesson[] = [
  {
    id: 1,
    title: 'The Appointment of Independent Representation',
    description: 'Engaging a qualified Loss Assessor is a critical step in managing complex claims. Insurers may attempt to discourage independent representation, but it remains essential for counterbalancing administrative inertia and ensuring that reinstatement scopes adhere to required safety and technical standards.',
    priority: 'high',
  },
  {
    id: 2,
    title: 'The Necessity of Independent Technical Oversight',
    description: 'Establishing independent, RICS-qualified surveying is fundamental to the accurate scoping of structural damage. Relying exclusively on an insurer\'s appointed agents can lead to inadequate remediation plans that overlook critical structural failures, posing significant long-term safety risks.',
    priority: 'high',
  },
  {
    id: 3,
    title: 'Formal Complaints as a Mechanism for Documentation',
    description: 'Standard communication channels may fail to produce written commitments or technical explanations from the insurer. Filing formal complaints forces the logging of procedural discrepancies and provides a necessary documented trail for regulatory bodies such as the Financial Ombudsman Service.',
    priority: 'high',
  },
  {
    id: 4,
    title: 'The Structural Risks of Unilateral Cash Settlements',
    description: 'Insurers may issue unilateral cash settlements based on preliminary or \'desktop\' scopes of work. These settlements often exclude necessary contingency funds, professional fees, and site clearance costs, transferring the financial and structural risk of an incomplete reinstatement entirely onto the policyholder.',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'The Insufficiency of Verbal Assurances',
    description: 'Verbal agreements or assurances made during site visits or phone calls are frequently not honored or documented in the permanent claim file. Policyholders must ensure that all critical decisions, especially regarding the disposal of contents or the scope of repairs, are recorded in writing to prevent later allegations of policy breach.',
    priority: 'medium',
  },
  {
    id: 6,
    title: 'Mandatory Record-Keeping and Data Access',
    description: 'Maintaining a comprehensive, independent log of all interactions is vital. When faced with administrative silence, utilizing a Subject Access Request (SAR) becomes a necessary tool to legally compel the disclosure of internal communications and technical reports related to the claim.',
    priority: 'high',
  },
  {
    id: 7,
    title: 'The Impact of Administrative Inertia',
    description: 'Claims may be subjected to extended periods of inaction and delayed communication. This administrative attrition can contravene the FCA’s Consumer Duty guidelines, which require firms to avoid causing foreseeable harm and to provide helpful, timely support to policyholders.',
    priority: 'medium',
  },
  {
    id: 8,
    title: 'Delegated Authority and Accountability Failures',
    description: 'The use of third-party loss adjusters creates a diffused chain of responsibility. Insurers may cite agent error to distance themselves from service failures, while adjusters may claim restricted mandates. This systemic disconnect routinely obstructs claim progression and undermines the delivery of a fair and reasonable settlement.',
    priority: 'high',
  },
];

// Load lessons from localStorage if available (for inline editing)
export function loadLessons(): Lesson[] {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('admiral-lessons');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate that it's an array
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved lessons:', e);
      }
    }
  }
  return defaultLessons;
}

// Save lessons to localStorage
export function saveLessons(lessons: Lesson[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admiral-lessons', JSON.stringify(lessons));
    // Also dispatch a custom event so other components can react
    window.dispatchEvent(new CustomEvent('lessons-updated', { detail: lessons }));
  }
}

// Get top priority lessons
export function getTopLessons(count: number = 3): Lesson[] {
  const lessons = loadLessons();
  return lessons
    .filter(l => l.priority === 'high')
    .slice(0, count);
}

// Import lessons from JSON file
export function importLessons(jsonString: string): Lesson[] | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (Array.isArray(parsed) && parsed.every(l => l.id && l.title && l.description && l.priority)) {
      saveLessons(parsed);
      return parsed;
    }
  } catch (e) {
    console.error('Failed to import lessons:', e);
  }
  return null;
}
