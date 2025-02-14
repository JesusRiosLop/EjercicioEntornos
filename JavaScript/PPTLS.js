const boton = document.getElementById("jugar");

function Ajugar() {
    let select = document.getElementById("arma");
    let opciones = select.options;
    let Ejugador = parseInt(select.value);
    let indiceAleatorio = Math.floor(Math.random() * opciones.length);
    let Epc = parseInt(opciones[indiceAleatorio].value);

    let nombreArma = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
    let ArmaJ = nombreArma[Ejugador - 1];
    let ArmaPc = nombreArma[Epc - 1];

    let imgPC = document.getElementById("Rpc");
    let imgJugador = document.getElementById("Rjugador");
    let result = document.getElementById("result");
    document.getElementById("Vs").innerText = "VS";

    let rutaImagenes = {
        1: "Images/piedra.png",
        2: "Images/papel.png",
        3: "Images/tijera.png",
        4: "Images/lagarto.png",
        5: "Images/spock.png",
    };

    imgPC.src = rutaImagenes[Epc];
    imgJugador.src = rutaImagenes[Ejugador];

    let mensajes = {
        "1-3": "Piedra aplasta Tijera.",
        "1-4": "Piedra aplasta Lagarto.",
        "2-1": "Papel envuelve Piedra.",
        "2-5": "Papel desautoriza a Spock.",
        "3-2": "Tijera corta Papel.",
        "3-4": "Tijera decapita Lagarto.",
        "4-2": "Lagarto devora Papel.",
        "4-5": "Lagarto envenena a Spock.",
        "5-1": "Spock vaporiza Piedra.",
        "5-3": "Spock destroza Tijera."
    };

    let resultadoFinal;
    
    if (Ejugador === Epc) {
        resultadoFinal = `Ambos eligieron ${ArmaJ}. ¡Es un empate!`;
        result.className = "Empate";
    } else if (mensajes[`${Ejugador}-${Epc}`]) {
        resultadoFinal = `${mensajes[`${Ejugador}-${Epc}`]} ¡Has ganado!`;
        result.className = "Ganajugador";
    } else {
        resultadoFinal = `${mensajes[`${Epc}-${Ejugador}`]} ¡Has perdido!`;
        result.className = "Pierdejugador";
    }

    result.innerText = resultadoFinal;
}

boton.addEventListener("click", Ajugar);

