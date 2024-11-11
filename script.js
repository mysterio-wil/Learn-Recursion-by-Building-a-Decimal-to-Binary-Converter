// Selecciona el campo de entrada donde los usuarios ingresarán un número decimal
const numberInput = document.getElementById("number-input");

// Selecciona el botón que activará la conversión a binario
const convertBtn = document.getElementById("convert-btn");

// Selecciona el elemento donde se mostrará el resultado de la conversión a binario
const result = document.getElementById("result");

// Función para verificar la entrada del usuario e imprimir su valor en la consola
const checkUserInput = () => {
    console.log(numberInput.value);
  };