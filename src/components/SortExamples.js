function SortExamples() {
    const array = [6, 3, 4, 5, 2];
    // lo toma como strings o sea  un 10 va en ekl lugar del 1 
    array.sort();
    // sort tiene como argumentos
    // sort((2° el. del Array, 1° el. del Array) => {})
    const numerico = array.sort((a, b) => {
        return a - b;
    });
    console.log(numerico);

    const stringArray = ['t', 'a', 'B', 'A', 'b'];
    const alfabeto = stringArray.sort((a, b) => {
        return a.localeCompare(b)
    });
    console.log(alfabeto);

    const  data = [
        { name: 'Onion', cost: 80, weight: 200 },
        { name: 'Tomato', cost: 95, weight: 160 },
        { name: 'Carrot', cost: 140, weight: 160}
    ];

    function getSortValue(vegetable) {
       return vegetable.cost;
    } 

//  para generar los valores invertidos multiplicas el 
//  resultado * -1
// cambiar el nombre de sort order //
  
    const abyect = data.sort((a, b) => {
        const valueA = getSortValue(a);
        const valueB = getSortValue(b);
        const sortOrder = 'asc';
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB) * reverseOrder;
        } else {
            return valueA - valueB
        }
    })
    return (
        <div>
            <div>{abyect}</div>
            <div>{numerico}</div>
            <div>{alfabeto}</div>
        </div>
    )
};

export default SortExamples;