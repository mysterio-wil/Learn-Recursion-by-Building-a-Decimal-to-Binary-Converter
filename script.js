// Selecciona el campo de entrada donde los usuarios ingresarán un número decimal
const numberInput = document.getElementById("number-input");

// Selecciona el botón que activará la conversión a binario
const convertBtn = document.getElementById("convert-btn");

// Selecciona el elemento donde se mostrará el resultado de la conversión a binario
const result = document.getElementById("result");

const checkUserInput = () => {
    // Verifica si el campo de entrada está vacío, si no es un número o si es negativo
    if (
        !numberInput.value || // Verifica si el campo está vacío
        isNaN(parseInt(numberInput.value)) || // Verifica si el valor ingresado no es un número
        parseInt(numberInput.value) < 0 // Verifica si el número es negativo
    ) {
        // Muestra una alerta indicando que se necesita un número decimal positivo
        alert("Please provide a decimal number greater than or equal to 0");
        return; // Sale de la función si la entrada no es válida
    }
};

// Agrega un listener de evento al botón para ejecutar la función checkUserInput al hacer clic
convertBtn.addEventListener("click", checkUserInput);

// Agrega un listener de evento al campo de entrada para ejecutar checkUserInput al presionar Enter
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
