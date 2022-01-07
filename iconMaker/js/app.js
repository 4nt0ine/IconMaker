// -----------------------------------------------------------
$(function () {
  function createGrid() {
    let appScreen = $(".app-wrapper .app-screen");
    console.log(appScreen);

    all = 32 * 32;
    for (let i = 0; i < all; i++) {
      appScreen.append("<div class='pixel'></div>");
    }
  }
  createGrid();

  //recuperer les couleurs et les sauvegarder

  function makeColors() {
    $("#paint_darkestgreen").click(function () {
      color = "bg_darkestgreen";
    });
    $("#paint_darkgreen").click(function () {
      color = "bg_darkgreen";
    });
    $("#paint_green").click(function () {
      color = "bg_green";
    });
    $("#paint_lightgreen").click(function () {
      color = "bg_lightgreen";
    });

    let pixel = $(".pixel");
    let darkestgreen = $("#paint_darkestgreen").css("background-color");
    console.log(darkestgreen);
    pixel.css("color", darkestgreen);

    let darkgreen = $("#paint_darkgreen").css("background-color");
    console.log(darkgreen);
    pixel.css("color", darkgreen);

    let green = $("#paint_green").css("background-color");
    console.log(green);
    pixel.css("color", green);

    let lightgreen = $("#paint_lightgreen").css("background-color");
    console.log(lightgreen);
    pixel.css("color", lightgreen);
  }
  makeColors();

  //cliquer sur un bouton de couleur pour avoir la couleur
});

$(document).ready(function () {
  console.log("ready !");
});
// -----------------------------------------------------------
