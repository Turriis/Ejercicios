/*Escribe una función llamada "calcularDescuento" que reciba dos parámetros: el precio de un producto y un descuento 
en porcentaje. La función debe calcular el precio 
con el descuento aplicado y retornar este valor. 
Sin embargo, si el descuento es mayor al 50%, la función debe retornar un mensaje que indique 
que el descuento no es válido. 
Luego, utiliza esta función para calcular el precio con un descuento del 20% y del 60% en un producto
 que cuesta $100 y despliega el resultado en un alert()*/

/*El precio con un descuento del 20% es: 80
El precio con un descuento del 60% es: Descuento no válido*/

const precio = 100;

var porc20 = 20;

var porc80 = 80;

function calcularDescuento(precio_producto, descuento_porcentaje) {
  precio_producto = window.prompt(`Precio del producto`);

  descuento_porcentaje = window.prompt(`Descuento que se quiere aplicar`);

  if (descuento_porcentaje >= 50) {
    return window.alert(
      `El precio con un descuento del ${descuento_porcentaje}% es: Descuento no válido.`
    );
  } else {
    var total = (descuento_porcentaje / 100) * precio_producto;
    var total = precio_producto - total;
    return window.alert(
      `El total de su producto con el descuento aplicado es de: ${total}`
    );
  }

}
