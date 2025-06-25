const Usuario = "pepito";
const Password = 123456;
let Intentos = 3;
let AccesoConcedido = false;

const comercio = ["papa", "lechuga", "tomate", "manzana"];
let PrecioPorIngrediente = 5;
const miInventario = []
let Billetera = 15;

function comprar() {
    let producto = prompt ("¿que desea comprar? , papa, lechuga, tomate o manzana").toLowerCase();
    if (comercio.includes(producto)) {
        if (Billetera >= PrecioPorIngrediente ) {
            miInventario.push (producto);
            Billetera-=PrecioPorIngrediente;
            console.log ("compraste: " + producto) 
        }
        else ( alert ("no tienes suficiente dinero")
        )
    }
    else (alert ("no tenemos ese producto"))
}

function vender () {
    let producto = prompt ("¿que producto desea vender?").toLowerCase();
    if (miInventario.includes (producto)) {
        let indice = miInventario.indexOf(producto);
        miInventario.splice(indice,1);
        Billetera += PrecioPorIngrediente;
        console.log ("vendiste: " + producto)

    }

    else (alert ("no tienes ese producto"))

}

function verBilletera() {
    alert("Tienes $" + Billetera + " en tu billetera.");
}




for (let i = 0; i < Intentos; i++) {
    const Entrada1 = prompt("Bienvenidos a ALMACEN ONLINE!, ingresa tu usuario");
    const Entrada2 = parseInt(prompt("Ingresa tu contraseña"));

    if (Entrada1 === Usuario && Entrada2 === Password) {
        alert("INGRESO CORRECTO, BIENVENIDO!");
        AccesoConcedido = true;
        break;
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

if (!AccesoConcedido) {
    alert("Acceso denegado, has agotado tus intentos");
} else {
    let continuar = true
    while (continuar) {
    const operacion = parseInt(prompt("¿Qué operación desea realizar?/1. (Comprar)/2. (Vender)/3. (Ver billetera)/4. (Ver mis productos)/5. salir"));

    switch (operacion) {
        case 1:
            comprar()
            break;
        case 2:
            vender()
            break;
        case 3:
            verBilletera()
            break;
        case 4:
            if (miInventario.length === 0) {
                console.log ("no tienes ningun producto")
            }
            else {console.log(miInventario)}
            break; 
        
            
        case 5:continuar = false;
            alert("Gracias por visitar ALMACEN ONLINE!");
            break;    
        default:
            alert("Opción inválida");
            break;
        }
    }
}



