// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement("ul");


for (const country of countries) {

    const li$$ = document.createElement("li");

    li$$.append(country);

    ul$$.append(li$$);
}

document.body.append(ul$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementsRemove$$ = document.querySelectorAll(".fn-remove-me");

for (const element$$ of elementsRemove$$) {
    element$$.remove();
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars$$ = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul2$$ = document.createElement("ul");

const div$$ = document.querySelector("[data-function='printHere']");

for (const car$$ of cars$$) {
    const li2$$ = document.createElement("li");

    li2$$.append(car$$);

    ul2$$.append(li2$$);
}

div$$.append(ul2$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

//--> ejercicio 1.6
function eliminarEste (evento) {

    evento.target.parentElement.remove();

}

//---------------------------

for (const country of countries2) {

    const listaDiv$$ = document.createElement("div");

    const h4$$ = document.createElement("h4");

    const img$$ = document.createElement("img");

    const button$$ = document.createElement("button");

    h4$$.textContent=country.title;
    img$$.src=country.imgUrl;

    //-->Ejercicio 1.6

    button$$.textContent = "Mátame por favor";
    button$$.addEventListener("click", eliminarEste);

    //------------------

    listaDiv$$.className = "country";

    listaDiv$$.append(h4$$);
    listaDiv$$.append(img$$);
    //-->Ejercicio 1.6
    listaDiv$$.append(button$$);
    //------------------
    document.body.append(listaDiv$$);

}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

function eliminarUltimo () {

    const countries$$ = document.querySelectorAll(".country");
    
    countries$$[countries$$.length -1].remove();
}

const eliminarUltimo$$ = document.createElement("button");

eliminarUltimo$$.addEventListener("click", () => eliminarUltimo());


eliminarUltimo$$.textContent="Eliminar último";

document.body.append(eliminarUltimo$$);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

