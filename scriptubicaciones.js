$(document).ready(function() {
    $('#modulos').DataTable({
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ módulos por página",
        "info": "Mostrando página _PAGE_ de _PAGES_",
        "infoEmpty": "No hay módulos disponibles",
        "infoFiltered": "(filtrado de _MAX_ módulos en total)",
        "paginate": {
          "previous": "Anterior",
          "next": "Siguiente"
        }
      }
    });
  });
  