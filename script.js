let numAlumnos = 0;

function mostrar_formulario(){
    document.getElementById("registro").style.display = "block";
    document.getElementById("alumnos").style.display = "none";
}

function mostrar_tabla(){
    document.getElementById("registro").style.display = "none";
    document.getElementById("alumnos").style.display = "block";
}

document.getElementById("enviar").addEventListener("click", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    let curso = document.getElementById("curso").value;

    if(validar_datos(nombre, apellidos, edad, email,curso)){
        this.guardar_alumno(nombre, apellidos, edad, email, curso);
        this.numAlumnos = document.getElementsByClassName("alumno").length;
        document.getElementById("recuento").textContent = "Hay un total de " + numAlumnos + " elementos";
    }

    //Esto desactiva a los dos segundos cualquier mensaje mostrado
    setTimeout(()=> {
        document.getElementById("mensajeError").textContent = "";
        document.getElementById("mensajeOk").textContent = "";
    }, 2000);

    //Una vez 
    
});

function validar_datos(nombre, apellidos, edad, email, curso){

    let ok = false;

    if(nombre === "" || apellidos === "" || edad === "" || curso === ""){
        document.getElementById("mensajeError").textContent = "Todos los campos son obligatorios";
    } else if(isNaN(edad) || edad < 16){
        document.getElementById("mensajeError").textContent = "La edad debe ser un número mayor a 16";
    } else if(!email.includes('@')){
        document.getElementById("mensajeError").textContent = "El email debe contener @";
    } else {
        document.getElementById("mensajeOk").textContent = "Alumno registrado correctamente";
        ok = true;
    }

    return ok;

}

function guardar_alumno(nombre, apellidos, edad, curso){
    let tr = document.createElement("tr");
    tr.classList.add("alumno");
    
    let nombreTd = document.createElement("td");
    nombreTd.textContent = nombre
    let apellidosTd = document.createElement("td")
    apellidosTd.textContent = apellidos;

    let edadTd = document.createElement("td");
    edadTd.textContent = edad;

    let cursoTd = document.createElement("td");
    cursoTd.textContent = curso;

    tr.appendChild(nombreTd);
    tr.appendChild(apellidosTd);
    tr.appendChild(edadTd);
    tr.appendChild(cursoTd);

    document.getElementById("tabla_alumnos").appendChild(tr);
}