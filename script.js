// Función para mostrar la ventana modal
function mostrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
  }
  
  // Función para cerrar la ventana modal
  function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
  }
  
  // Función para realizar la compra (aquí puedes agregar la lógica para procesar la información ingresada)
  function realizarCompra() {
    var nombre = document.querySelector('#miModal input:nth-of-type(1)').value;
    var direccion = document.querySelector('#miModal input:nth-of-type(2)').value;
    var cuenta = document.querySelector('#miModal input:nth-of-type(3)').value;
    
    // Aquí puedes hacer lo que necesites con la información ingresada, como enviarla a través de un formulario o procesarla para realizar el pago.
    
    // Cerrar la ventana modal después de la compra
    cerrarModal();
  }
  
