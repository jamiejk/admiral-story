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
    title: 'Get a Loss Assessor',
    description: 'Even if Admiral tell you not to... especially if they tell you not to! You are *not prepared* for the bureaucratic duress this company will exert on you.',
    priority: 'high',
  },
  {
    id: 2,
    title: 'You Have A Right To Your Own Surveyor',
    description: 'Control of the surveyor is control of the claim. The surveyor Admiral appoints is literally working for Admiral. Do the math on where that leaves you.',
    priority: 'high',
  },
  {
    id: 3,
    title: 'Complaints Are Important... But Not For The Reason You Think',
    description: 'The only way Admiral will put something in writing is as part of a formal complaint response. You will *not* get them to respond to you in writing any other way.',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Cash Settlements Come With A Sting',
    description: 'If you want to spend the money on a holiday, great. Take the cash. But if you are actually repairing or rebuilding, electing for cash means no contingency or provisional sums. You might be left with less than you need to reinstate.',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Phone Calls Are Theater',
    description: 'Staff are well-trained to handle you during calls, but whatever they say, the calls have little-to-no impact on the actual claim process. Don\'t waste your time, or get worked up for no reason.',
    priority: 'medium',
  },
  {
    id: 6,
    title: 'Document Everything',
    description: 'Admiral won\'t write anything down unless you force them. But that doesn\'t mean you can\'t. And remember, if you ask for a Subject Access Request, they are bound by law to provide you with everything they have on file about your claim.',
    priority: 'high',
  },
  {
    id: 7,
    title: 'Expect Attrition Tactics',
    description: 'Admiral will wear you down by not responding. They hope that given long enough, you\'ll be desperate to settle. Be aware that you are in this for the long haul, especially if it is a larger claim.',
    priority: 'medium',
  },
  {
    id: 8,
    title: 'Buck-passing and Blame-shifting',
    description: 'Beware that Admiral\'s use of third party agents (like Davies Group as Loss Adjuster in my case) creates a cunning administrative opportunity which they will both absolutely make use of. Either one can blame a delay on the other; either one can point to an unfair decision and say it was the other\'s; and in general, any form of incompetence or malfeasance is easily blamed on the other party. There is not much you can do about this, but forewarned is forearmed. My strong suspicion is that it is completely non-coincidental that Admiral has evolved a system of pushing critical decision making off to third parties that they deliberately keep on a long leash.',
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
