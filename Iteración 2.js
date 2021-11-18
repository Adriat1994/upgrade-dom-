//2.1 Inserta dinamicamente en un html un div vacio con javascript.

window.onload = function() {
	addElement();
}

function addElement() {
    let div1 = document.createElement('div');
    div1.className = "div1";
    document.body.appendChild(div1);
}

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

window.onload = function() {
	addElement2();
}

function addElement2() {
    let div2 = document.createElement('div');
    div2.className = "div2";
    let p1 = document.createElement('p');
    p1.className = "p1";
    document.body.appendChild(div2);
    document.querySelector(".div2").appendChild(p1);
}

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
window.onload = function() {
	addElement3();
}

function addElement3() {
    let div3 = document.createElement('div');
    div3.className = "div3";
    
    document.body.appendChild(div3);

      for (let i = 0; i < 7; i++) {
        let p2 = document.createElement('p');
        p2.className = "p2";
        document.querySelector(".div3").appendChild(p2);
    }    
  }

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
window.onload = function() {
	addElement4();
}

function addElement4 () {
	let p3 = document.createElement('p');
	p3.className = "p3";
	p3.textContent = "Soy dinámico!"

	document.body.appendChild(p3)
}

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
window.onload = function() {
	modificarTexto1();
}

function modificarTexto1 () {
	document.querySelector(".fn-insert-here").textContent = 'Wubba Lubba dub dub';
}

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

window.onload = function() {
	crearLista1();
}

function crearLista1 () {
    let ul = document.createElement("ul");
    ul.className = "lista1";

    document.body.appendChild(ul);

    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

    for (let i = 0; i <apps.length; i++ ) {
      let p4 = document.createElement('p');
      p4.className = "p4";
      document.querySelector(".lista1").appendChild(p4).textContent = apps[i];
    }
}



//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

window.onload = function() {
	eliminarElemento();
}

function eliminarElemento () {
	for (let i = 0; i<10; i++) {
    let eliminar = document.querySelector(".fn-remove-me");
    document.body.removeChild(eliminar);
      }
}


/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

window.onload = function() {
	addElement5();
}

function addElement5 () {
	let p5 = document.createElement('p');
	p5.textContent = "Voy en medio!";

  var divAnterior = document.querySelectorAll("div")[0];

	document.body.insertBefore(p5, divAnterior);
}

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

function insertarP () {
  var selecionarDivs = document.querySelectorAll("div.fn-insert-here");
  let p6 = document.createElement("p");
  p6.textContent = "Voy dentro!";

  document.selecionarDivs.appendChild(p6);
}

insertarP();
