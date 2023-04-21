// import Table from "../components/Table"; 
import SortableTable from "../components/SortableTable";                      

function TablePage() {
const data = [
    {name: "Orange", color: "bg-orange-500", score: "7"},
    {name: "Apple", color: "bg-red-300", score: "5"},
    {name: "Grape", color: "bg-purple-500", score: "8"},
    {name: "Banana", color: "bg-yellow-500", score: "9"},
    {name: "Strawberry", color: "bg-red-500", score: "5"}
];

const config = [
    {
        label: "Fruits",
        render: (item) => item.name,
        sortValue: (item) => item.name
    },
    {
        label: "Colors",
        render: (item) => <div className={`m-2 p-3 ${item.color}`}></div>
    },
    {
        label: "Score",
        render: (item) => item.score,
        // header: () => <th key="adf" className="bg-red-200 p-3">score header</th>
        sortValue: (item) => item.score
    }
];

const keyFn = (fruit) => {
    return fruit.name;
}

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;