alert("Bienvenido a mi página de ángeles");
    function mostrarMensaje1() {
      let angel;

      angel = prompt('Por favor introduce nombre del angel:')

      if (angel == "") { aler('No has escrito el nombre de tu angel'); }

      switch(angel) {

          case "miguel": alert("Tienes el angel de la protección"); break;

          case "uriel": alert("Tienes el angel de la prosperidad"); break;

          case "rafael": alert("Tienes el angel de la sanación"); break;

          default: alert(angel + " No es un angel"); break;
      }

    } 
