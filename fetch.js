let productos = "https://gist.githubusercontent.com/spacecowb0y/f2be54763087f741f6d458ca7cd40855/raw/0be99b657c9d0c99f2ee4016d985f01ec0381db0/productos.json";

fetch(productos)
.then(response =>response.json())
.then(data=>{
    console.log(data) 

    // acceder a un elemento con un array de objetos
     let rows= data.rows;
      console.log(rows)  
   // acceder al valor de nombre y marca que estan dentro de otro array
  let valor=rows.map(elemento=>elemento.value) 
  console.log(valor); 

// filtrar este array de objetos en este caso Rexona
   let filtrado=valor.filter(el=>el.marca === 'REXONA')
     console.log(filtrado) 
  
     let colsCards=document.querySelector('#colsCards');//variable donde seleccionamos el id creado.
     // queremos iterar en cada uno de los elementos ya creados para eso usamos el forEach
     filtrado.forEach(element => {
         // creamos el div que seran las columnas
         let div=document.createElement('div');
         //anadir las clases que tiene las cols
         div.classList.add('col-12','col-md-3','mb-5','d-flex','justify-content-center');
         // pintamos la card llamando al div en este caso con el innerHTML
         div.innerHTML=`
         <div class="bg_card card" style="width: 18rem;">
       <div class="card-body">
             <h5 class="card-title text-center text-primary fw-bold titulos">${element.nombre}</h5>
             <h6 class="card-subtitle mb-2 text-white">${element.marca}</h6>
         
       </div>
     </div>
         
         `
         // queremos visualizarlo en la web, lo hacemos con el appenChild llamando a la colsCards
         colsCards.appendChild(div);
     });





 });
 

 