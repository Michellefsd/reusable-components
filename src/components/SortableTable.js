import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

// this is the same as table component but with sort functionality
function SortableTable(props) {
    const { config, data } = props;
    const { sortBy, sortOrder, handleClick, sortedData } = useSort(data, config); 
    
    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    return <Table {...props} data={sortedData} config={updatedConfig} />;
    
}

function getIcons(label, sortBy, sortOrder) {
    const arrowSize = 22;
    if(label !== sortBy) {
        return <div>
            <GoArrowSmallUp size={arrowSize}/>
            <GoArrowSmallDown size={arrowSize}/>
        </div>;
    }
    if(sortOrder === null) {
        return <div>
            <GoArrowSmallUp size={arrowSize}/><GoArrowSmallDown size={arrowSize}/> 
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp size={arrowSize}/>
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown size={arrowSize}/>
        </div>
    }
}

export default SortableTable;