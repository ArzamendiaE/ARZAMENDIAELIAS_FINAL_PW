function performOperation(operation) {
    // Variables necesarias
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    let resultado;

    // Validación de datos
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un precio válido.");
        return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Operaciones según la selección
    switch (operation) {
        case "totalProducto":
            resultado = precio * cantidad;
            document.getElementById("result").textContent = 
                `El total por ${cantidad} productos es: $${resultado.toFixed(2)}`;
            break;

        case "porcentaje":
            resultado = precio * 0.30;
            document.getElementById("result").textContent = 
                `El 30% del precio del producto es: $${resultado.toFixed(2)}`;
            break;

        case "descuento":
            resultado = (precio * cantidad) * 0.75; // Aplica el 25% de descuento
            document.getElementById("result").textContent = 
                `El precio final con un 25% de descuento es: $${resultado.toFixed(2)}`;
            break;

        default:
            alert("Operación no reconocida.");
    }
}
