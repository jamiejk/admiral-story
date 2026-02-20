const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
    ['Purchases house', 'Purchase house'],
    ['Converts parking garage', 'Convert parking garage'],
    ['Hires Loss Assessor', 'Hire Loss Assessor'],
    ['Follows up', 'Follow up'],
    ['raises concerns', 'raise concerns'],
    ['Submits formal request', 'Submit formal request'],
    ['Complains that', 'Complain that'],
    ['Cites lack of', 'Cite lack of'],
    ['Challenges refusal', 'Challenge refusal'],
    ['Chases Admiral', 'Chase Admiral'],
    ['questions legal limit', 'question legal limit'],
    ['Sends debris', 'Send debris'],
    ['Demands joint', 'Demand joint'],
    ['Submits Survey Fee', 'Submit Survey Fee'],
    ['Explicitly warns', 'Explicitly warn'],
    ['Presses for', 'Press for'],
    ['Agrees to', 'Agree to'],
    ['Complains about', 'Complain about'],
    ['Sends letter', 'Send letter'],
    ['Objects to', 'Object to'],
    ['Provides evidence', 'Provide evidence'],
    ['Formally notifies', 'Formally notify'],
    ['Complains Admiral is', 'Complain Admiral is'],
    ['Writes to CEO', 'Write to CEO'],
    ['Cites "Lethal"', 'Cite "Lethal"'],
    ['Formally submits', 'Formally submit'],
    ['Rejects inspection', 'Reject inspection'],
    ['Cites Page 9', 'Cite Page 9'],
    ['Sends third letter', 'Send third letter'],
    ['posts to TrustPilot', 'post to TrustPilot'],
    ['launches this website', 'launch this website']
];

replacements.forEach(([from, to]) => {
    content = content.replace(new RegExp(from, 'g'), to);
});

fs.writeFileSync(filePath, content);
console.log('Done!');
