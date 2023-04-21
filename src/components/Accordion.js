import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [ expandedIndex, setExpandedIndex] = useState(-1);

    const renderedItems = items.map((item, i) => {
        const isExpanded = i === expandedIndex;

        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

    return (
        <div>
            <div onClick={() => expandedIndex === i ? setExpandedIndex(-1) : setExpandedIndex(i)} className='flex justify-between px-5 py-3 bg-gray-50 border-b items-center cursor-pointer' key={i}>
                <label className='text-slate-900'>{item.label}</label>
                {icon}
            </div>
                {isExpanded && <p className='border-b p-5'>{item.content}</p> }
        </div>
    )
    })
  return (
    <div className='border-x border-t rounded' >{renderedItems}</div>
  );
}

export default Accordion;



//////////////////////////////

// function App() {
//     // Accordion Array of Info
//     const items = [
//         {
//             label: 'Can I use React on any Project?',
//             content: 'Yes, You can use React in any project you want'
//         },
//         {
//             label: 'What Kind of skills are needed?',
//             content: 'Listening, make opinions only if somebody ask'
//         },
//         {
//             label: 'Is April 30 a good day to Finish studing React?',
//             content: 'Yes, It\'s Perfect to your Process ', 
//         }
//     ];
// return (
//     <div>
//         <Accordion items={items} />
//     </div>
//   );
// }