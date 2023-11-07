const root = document.getElementById("root")

const alfaNumeric = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890!#$%&/()=?¡¿";

function generadorPass (lenght = 10){
    let result = "";
    for (let i = 1; i<=lenght; i++){
        result += alfaNumeric.charAt(Math.floor(Math.random() * alfaNumeric.length))
    }

    return result
}

const titulo = document.createElement("h1");
titulo.innerText = "Generador de contraseñas"
const texto = document.createElement("p");
texto.innerHTML = `Ingrese la cantidad de caracteres que de quiere. <b>Si no coloca nada, su contraseña será de 10 caracteres`;
texto.classList.add("instruccion")
const contraseña = document.createElement("p");
contraseña.classList.add("passGenerada");

const form = document.createElement("form")
form.classList.add("form")
const input = document.createElement("input");
input.type="number";
input.placeholder = "Tamaño de contraseña";
input.classList.add("input")
const botonGenerar = document.createElement("button");
botonGenerar.classList.add("boton");
botonGenerar.innerText="Generar!";
form.appendChild(input);
form.appendChild(botonGenerar);

botonGenerar.addEventListener("click", function (e) {
    e.preventDefault()
    if (input.value == 0) { 
        const key = generadorPass();
        contraseña.innerHTML= `Su contraseña generada es: <b>${key}</b>`;
    }else {
        const key2 = generadorPass(input.value);
        contraseña.innerHTML = `Su contraseña generada de ${input.value} es <b>${key2}</b>`
    }
});

root.appendChild(titulo);
root.appendChild(texto)
root.appendChild(form)
root.appendChild(contraseña)