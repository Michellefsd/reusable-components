import { useState } from 'react';
function useDropDown(option) {
    const [selected, setSelected] = useState(null);

    const handleSelection = (option) => {
        setSelected(option)
    }; 

    return {
        selected, 
        handleSelection
    }
};

export default useDropDown;