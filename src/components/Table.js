// no genera un elemento html sino q le permite agregar atributos
// al existente en este caso usamos el fragmento em el th
// usado xa asignar un key prop//
import { Fragment } from 'react';

function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th className="p-3" key={column.label}>{column.label}</th>
    })

    const renderedData = data.map((item) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(item)}</td>
        })
        return (
            <tr className="border-b" key={keyFn(item)}>
                {renderedCells}
                {/* <td className="p-3">{item.name}</td>
                <td className="p-3"><div className={`m-2 p-3 ${item.color}`}></div></td>
                <td className="p-3">{item.score}</td> */}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                   {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                { renderedData }
            </tbody>
        </table>
    );    
}
export default Table;