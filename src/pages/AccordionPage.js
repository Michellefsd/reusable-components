
import Accordion from '../components/Accordion';

function AccordionPage() {
    // Accordion Array of Info
    const items = [
        {
            label: 'Can I use React on any Project?',
            content: 'Yes, You can use React in any project you want'
        },
        {
            label: 'What Kind of skills are needed?',
            content: 'Listening, make opinions only if somebody ask'
        },
        {
            label: 'Is April 30 a good day to Finish studing React?',
            content: 'Yes, It\'s Perfect to your Process ', 
        }
    ];

  return (
    <div>
        <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;