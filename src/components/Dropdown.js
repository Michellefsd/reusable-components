import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!divEl.current) {
                return;
            }
            // console.log(divEl.current);
            if(!divEl.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        }
    },  [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (option) => {
        setIsOpen(!isOpen);
        onChange(option)
    }; 

    const renderedOptions = options.map((option)=> {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer' onClick={()=> { handleSelect(option.label) }} key={option.value}>
                <label value={option.value}>{option.label}</label>
            </div>
        )
    })

  return (
    <div ref={divEl} className='w-48 relative'>
        <Panel className='flex justify-between items-center cursor-pointer bg-gray-100' onClick={ handleClick }>
            {value || 'Select...'}
            <span className='mx-5 mt-1.5'><GoChevronDown /></span>
        </Panel>
        { isOpen && (
            <Panel>
                { renderedOptions }
            </Panel>
            )
        }
    </div>
  );
}

export default Dropdown;