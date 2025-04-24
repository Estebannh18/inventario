const url = "http://localhost:5000/api/categorias" 
fetch(url)
.then(resultado=>{
    /*console.log(resultado);*/
    return resultado.json();
})
.then(data=>{
    /*console.log(data);*/ 
    showdata(data)
})

function showdata(categories){
const container = document.querySelector('tbody')
categories.forEach((category)=>{
    const{CategoriaID, CategoriaNombre, Descripcion, Imagen} = category
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    ${CategoriaID}
    </td>
    <td>
    ${CategoriaNombre}
    </td>
    <td>
    ${Descripcion}
    </td>
    <td>
    <img src="${Imagen}" width="100px">
    </td>
    `;
    container.appendChild(row)
})
}

