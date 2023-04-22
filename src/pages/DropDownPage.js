import Dropdown from '../components/Dropdown';
import useDropDown from '../hooks/use-dropdown';


function DropDownPage() {
  
  const options = [
    { label: 'Red', value: 'R'},
    { label: 'Green', value: 'G'},
    { label: 'Blue', value: 'B'}
  ];
  
  const {selected, handleSelection} = useDropDown(options);
  return (
    <div className='flex'>
       <Dropdown options={options} value={selected} onChange={handleSelection}/>
    </div>
  );
}

export default DropDownPage;