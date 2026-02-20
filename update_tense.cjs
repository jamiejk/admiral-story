const fs = require('fs');

const timelinePath = 'src/data/timeline.ts';
let content = fs.readFileSync(timelinePath, 'utf8');

const replacements = [
    ['Purchased house and Admiral Home/Car insurance. Converted parking garage into art studio', 'Purchases house and Admiral Home/Car insurance. Converts parking garage into art studio'],
    ['Hired Loss Assessor.', 'Hires Loss Assessor.'],
    ['Follow up on surveyor progress, raise concerns', 'Follows up on surveyor progress, raises concerns'],
    ['Submitted formal request for independent', 'Submits formal request for independent'],
    ['Complained that Davies is refusing', 'Complains that Davies is refusing'],
    ['Three months after treefall. Cited lack of communication', 'Three months after treefall. Cites lack of communication'],
    ['Challenged refusal to cover', 'Challenges refusal to cover'],
    ['Chased Admiral, questioned legal limit on leaving property in destruction. Sent debris photos.', 'Chases Admiral, questions legal limit on leaving property in destruction. Sends debris photos.'],
    ['Admiral admitted service failure, acknowledged liability for surveyor fees.', 'Admiral admits service failure, acknowledges liability for surveyor fees.'],
    ['Demanded joint Scope of Works', 'Demands joint Scope of Works'],
    ['Submitted Survey Fee proposal. Explicitly warned', 'Submits Survey Fee proposal. Explicitly warns'],
    ['Pressed for answers on declining independent surveyor. Agreed to restricted terms', 'Presses for answers on declining independent surveyor. Agrees to restricted terms'],
    ['Davies sent structural engineer instead of surveyor. Independent surveyor conducted thorough inspection.', 'Davies sends structural engineer instead of surveyor. Independent surveyor conducts thorough inspection.'],
    ['Independent surveyor warned scope still required. Davies attempted to cobble', 'Independent surveyor warns scope still required. Davies attempts to cobble'],
    ['Complained about continued lack of communication', 'Complains about continued lack of communication'],
    ['Admiral admitted sending structural engineer instead of scoping professional was a mistake.', 'Admiral admits sending structural engineer instead of scoping professional is a mistake.'],
    ['Davies falsely claimed Admiral would not consider secondary fees. Davies had never passed request', 'Davies falsely claims Admiral will not consider secondary fees. Davies has never passed request'],
    ['Letter to CEO Alistair Hargreaves detailing 6 months of zero progress', 'Sends letter to CEO Alistair Hargreaves detailing 6 months of zero progress'],
    ['Davies alleges studio is "commercial workshop" - would invalidate entire claim. Stalled for weeks.', 'Davies alleges studio is "commercial workshop" - which would invalidate entire claim. Stalls for weeks.'],
    ['Objected to retaliatory workshop allegation. Complained about continued failure', 'Objects to retaliatory workshop allegation. Complains about continued failure'],
    ['Provided evidence studio was hobby space. Davies and Admiral each blamed the other', 'Provides evidence studio is hobby space. Davies and Admiral each blame the other'],
    ['Senior complaints handler acknowledged distress. Director of Home Insurance taking claim in-house.', 'Senior complaints handler acknowledges distress. Director of Home Insurance takes claim in-house.'],
    ['Admiral deposited £33,790 without comment - less than original build cost. Based on flawed', 'Admiral deposits £33,790 without comment - less than original build cost. Based on flawed'],
    ['Formally notified Admiral I had NOT agreed to cash settlement. Admiral refused to provide', 'Formally notifies Admiral I have NOT agreed to cash settlement. Admiral refuses to provide'],
    ['Desktop SOW ignored foundation examination needs. Warned outbuilding remained "dangerous structure"', 'Desktop SOW ignores foundation examination needs. Warns outbuilding remains "dangerous structure"'],
    ['Admiral admitted communication had "fallen below the required standard".', 'Admiral admits communication has "fallen below the required standard".'],
    ['Complained Admiral "trapping" into cash settlement. Challenged GSP desktop scope.', 'Complains Admiral is "trapping" into cash settlement. Challenges GSP desktop scope.'],
    ['Wrote to CEO again warning workshop allegation was retaliatory. Property "dangerous structure"', 'Writes to CEO again warning workshop allegation is retaliatory. Property remains "dangerous structure"'],
    ['Head of Operations assigned. Questioned why site leveling necessary.', 'Head of Operations assigned. Questions why site leveling necessary.'],
    ['10 days of silence after promises, then began contesting', '10 days of silence after promises, then begins contesting'],
    ['Admiral admitted previous "desktop" scope was insufficient.', 'Admiral admits previous "desktop" scope is insufficient.'],
    ['Confirmed shattered Bison beams and total failure of load-bearing steels', 'Confirms shattered Bison beams and total failure of load-bearing steels'],
    ['John Duffy completed review, agreed to bulk of SOW.', 'John Duffy completes review, agrees to bulk of SOW.'],
    ['Duffy offers contingency sum only if I agree to lower base settlement. Rejected as "used car salesman"', 'Duffy offers contingency sum only if I agree to lower base settlement. Offer rejected as "used car salesman"'],
    ['Cited "Lethal" SOW, bad-faith negotiation, retaliatory workshop slur, documented', 'Cites "Lethal" SOW, bad-faith negotiation, retaliatory workshop slur, documented'],
    ['Formally submitted comprehensive Contents Schedule', 'Formally submits comprehensive Contents Schedule'],
    ['Duffy "surprised" at value, invoked £2,500 limit', 'Duffy "surprised" at value, invokes £2,500 limit'],
    ['Rejected inspection as "logistical absurdity" - Admiral funded clearance, now wants to inspect cleared site.', 'Rejects inspection as "logistical absurdity" - Admiral funded clearance, now wants to inspect cleared site.'],
    ['Cited Page 9 Policy Guide "Harm Exception" and Estoppel.', 'Cites Page 9 Policy Guide "Harm Exception" and Estoppel.'],
    ['No reply from Admiral. Third letter to CEO.', 'No reply from Admiral. Sends third letter to CEO.'],
    ['Receiving no reply after a week, posted to TrustPilot and launched this website.', 'Receiving no reply after a week, posts to TrustPilot and launches this website.']
];

for (const [oldStr, newStr] of replacements) {
    content = content.replace(oldStr, newStr);
}

fs.writeFileSync(timelinePath, content, 'utf8');
console.log('Replacements complete.');
