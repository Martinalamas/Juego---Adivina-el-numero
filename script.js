let numeroAzar = Math.floor(Math.random() * 100) +1
console.log(numeroAzar)

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")


function chequearResultado() {
     let numeroIngresado = parseInt(numeroEntrada.value)

    if ( numeroIngresado < 1 || numeroIngresado > 100 ||  isNaN(numeroIngresado)) {
        mensaje.textContent = ("Por favor, ingresa un  numero valido")
        mensaje.style.color = "red"
        return
    }

    if ( numeroIngresado == numeroAzar) {
        mensaje.textContent = ("¡Felicitaciones! Adivinaste el numero");
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    } else if ( numeroIngresado > numeroAzar) {
        mensaje.textContent = ("¡Incorrecto! Ingresa un numero más chico");
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = ("¡Incorrecto! Ingresa un numero más grande");
        mensaje.style.color = "red";
    }


}