import { useState } from 'react';
import Dropdown from '../components/Dropdown';


function DropDownPage() {
    const [selected, setSelected] = useState(null);

    const handleSelection = (option) => {
        setSelected(option)
    }; 

    const options = [
        { label: 'Red', value: 'R'},
        { label: 'Green', value: 'G'},
        { label: 'Blue', value: 'B'}
    ];
 
  return (
    <div className='flex'>
       <Dropdown options={options} value={selected} onChange={handleSelection}/>
    </div>
  );
}

export default DropDownPage;