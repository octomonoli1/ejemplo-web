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
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    const curso = document.getElementById("curso").value;
    validar_datos(nombre, apellidos, edad, curso);

    setTimeout(()=> {
        document.getElementById("mensajeError").textContent = "";
        document.getElementById("mensajeOk").textContent = "";
    }, 2000);
    
});

function validar_datos(nombre, apellido, edad, curso){

    if(nombre === "" || apellido === "" || edad === "" || curso === ""){
        document.getElementById("mensajeError").textContent = "Todos los campos son obligatorios";
    } else if(isNaN(edad) || edad < 0 || edad > 120){
        document.getElementById("mensajeError").textContent = "La edad debe ser un número entre 0 y 120";
    } else {
        document.getElementById("mensajeOk").textContent = "Alumno registrado correctamente";
    }

}