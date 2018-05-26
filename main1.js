
var input = document.getElementById("textInput");
var lista = document.getElementById("idLabel");
var button = document.getElementById("idBoton");
var tareas = ["Enero","Febrero","Marzo"];

function addTarea(dato){

	tareas.push(dato)
    renderList();
}

function renderList(){

	lista.innerHTML = "";
	tareas.forEach(function(item, item2){
	  /*console.log(item);*/
	  var li = document.createElement('li');
	  li.innerHTML = item;
	  lista.appendChild(li);
	});
}

button.addEventListener('click', function(){
	addTarea(input.value);
});

/*renderList();

/*var dato = "global";

function local(){
	
	var dato = "local";
	return dato;
}

console.log(dato);
console.log(local());
console.log(dato);

var miArray = [1,2,3,4];
console.log("miArray= " + miArray[0]);
console.log("miArrayLength= " + miArray.length);

console.log("valor anterior= " + miArray);
miArray.push(5);
console.log("valor actual= " + miArray);


function add(num){
	miArray.push(num);
}

console.log(miArray);
add(18);
console.log(miArray);*/