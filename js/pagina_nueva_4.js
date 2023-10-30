var posActual = "";
document.getElementById("btnPrimero").addEventListener("click",function(){navegarInicio()});
document.getElementById("btnAtras").addEventListener("click",function(){navegarAtras()});
document.getElementById("btnAdelante").addEventListener("click",function(){navegarAdelante()});
document.getElementById("btnUltimo").addEventListener("click",function(){navegarFin()});


function navegarInicio(){
	mostrarplantilla("plantilla1", "sub");
	limpiarPantalla("inf");
	limpiarPantalla("der");
	
}

function navegarAtras(){
	var char = posActual.substring(9,10);
	var num = parseInt(char)-1;
	if (num > 0){
		var nombre = "plantilla"+ num;
		var dest = "";
		switch(num){
			case 1:
			case 4:
				dest = "sub";
				break;
			case 2:
				dest ="inf";
				break;
			case 3:
				dest = "der";
				break;
		}
		mostrarplantilla(nombre,dest);
		
	}
}

function navegarAdelante(){
	var char = posActual.substring(9,10);
	var num = parseInt(char)+1;
	if (num <= 4){
		var nombre = "plantilla"+ num;
		var dest = "";
		switch(num){
			case 1:
			case 4:
				dest = "sub";
				break;
			case 2:
				dest ="inf";
				break;
			case 3:
				dest = "der";
				break;
		}
		mostrarplantilla(nombre,dest);
		
	}
}

function navegarFin(){
	mostrarplantilla("plantilla4","sub")
	limpiarPantalla("inf");
	limpiarPantalla("der");
	
}
<!-- eventos publicos ---->
function limpiarPantalla(dest){
	document.getElementById(dest).innerHTML="";
}

function mostrarplantilla(plan, dest){
	var template = document.getElementById(plan);
	if (template) {
		var clon = template.content.cloneNode(true);
		limpiarPantalla(dest);
		document.getElementById(dest).appendChild(clon);
		posActual = plan;
		cambiarTitulo();
	}
}

function cambiarTitulo(){
	var char = posActual.substring(9,10);
	var num = parseInt(char);
	if (num <= 4){
		switch(num){
			case 1:
				document.getElementById("titulo").innerHTML="CLIENTE";
				break;
			case 2:
				document.getElementById("titulo").innerHTML="PROVEEDORES";
				break;
			case 3:
				document.getElementById("titulo").innerHTML="FORMATO";
				break;
			case 4:
				document.getElementById("titulo").innerHTML="PRINCIPAL";
				break;
		}
	}
}