let producto1:string = prompt("Ingrese el primer producto");
let precioProducto1:number = Number(prompt("Ingrese el precio del primer producto"));
let stockProducto1:number = Number(prompt("Ingrese el stock del primer producto"));

let producto2:string = prompt("Ingrese el segundo producto");
let precioProducto2:number = Number(prompt("Ingrese el precio del segundo producto"));
let stockProducto2:number = Number(prompt("Ingrese el stock del segudo producto"));

let producto3:string = prompt("Ingrese el tercer producto");
let precioProducto3:number = Number(prompt("Ingrese el precio de tercer producto"));
let stockProducto3:number = Number(prompt("Ingrese el stock del tercer producto"));

console.log("Bienvenidos al supermercado Torre del Este. Tenemos los siguientes productos para ofrecerle:",stockProducto1,producto1,"a $",precioProducto1,",", stockProducto2,producto2,"a $",precioProducto2,",", stockProducto3,producto3,"a $",precioProducto3,".");

let productoElegido:number = Number(prompt("Digite 1 para elegir el primer producto, 2 para elegir el segundo producto y 3 para elegir el tercer producto"));
let cantidadElegida:number = Number(prompt("Ingrese la cantidad deseada"));

while(cantidadElegida<1){
  cantidadElegida = Number(prompt("No puede adquirir una cantidad inferior a 1, ingrese otra cantidad"));
  };

    while(productoElegido===1 && stockProducto1<1){
      productoElegido=Number(prompt("No hay stock del producto seleccionado, ingrese otro producto"));
      cantidadElegida=Number(prompt("Ingrese la cantidad deseada"));
    };

    while(productoElegido===2 && stockProducto2<1){
      productoElegido=Number(prompt("No hay stock del producto seleccionado, ingrese otro producto"));
      cantidadElegida=Number(prompt("Ingrese la cantidad deseada"));
    };
 
    while(productoElegido===3 && stockProducto3<1){
      productoElegido=Number(prompt("No hay stock del producto seleccionado, ingrese otro producto"));
      cantidadElegida=Number(prompt("Ingrese la cantidad deseada"));
    };

  if(productoElegido===1 && stockProducto1>0){
    console.log("Usted compro",cantidadElegida,producto1,"a $", cantidadelegida*precioProducto1,". Gracias por su compra, vuelva a visitarnos");
    console.log("Quedan",stockProducto1-cantidadElegida,producto1, "en stock.");

  } else if(productoElegido===2 && stockProducto2 >0){
    console.log("Usted compro", cantidadElegida,producto2, "a $", cantidadElegida*precioProducto2,". Gracias por su compra, vuelva a visistarnos");
    console.log("Quedan",stockProducto2-cantidaElegida,producto2, "en stock");

  } else if(productoElegido===3 && stockProducto3 >0){
    console.log("Usted compro", cantidadElegida,producto3,"a $", cantidadElegida*precioProducto3,". Gracias por su compra, vuelva a visitarnos.");
    console.log("Quedan",stockProducto3-cantidadElegida,producto3, "en stock");
  };
