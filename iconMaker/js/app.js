// -----------------------------------------------------------
//create de la grille 32*32 en ajoutant une div a chaque pixel
function createGrid() {
  let appScreen = $(".app-screen");
  all = 32 * 32;
  for (let i = 0; i < all; i++) {
    appScreen.append("<div class='pixel'></div>");
  }
}

function makeColors() {
  // recuperer les couleurs
  let bg_color = "";
  //---------------------------

  $("#paint_red").click(function () {
    $("#paint_red").addClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_brown").removeClass("is-active");
    $("#paint_darkyellow").removeClass("is-active");

    bg_color = "bg_red";
  });
  $(".pixel").click(function () {
    $(this).addClass(bg_color);
  });

  //-------------------------
  //---------------------------

  $("#paint_darkgreen").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").addClass("is-active");
    $("#paint_brown").removeClass("is-active");
    $("#paint_darkyellow").removeClass("is-active");

    bg_color = "bg_darkgreen";
  });
  $(".pixel").click(function () {
    $(this).addClass(bg_color);
  });

  //---------------------------

  $("#paint_brown").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_brown").addClass("is-active");
    $("#paint_darkyellow").removeClass("is-active");

    bg_color = "bg_brown";
  });
  $(".pixel").click(function () {
    $(this).addClass(bg_color);
  });

  //---------------------------

  $("#paint_darkyellow").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_brown").removeClass("is-active");
    $("#paint_darkyellow").addClass("is-active");

    bg_color = "bg_darkyellow";
  });
  $(".pixel").click(function () {
    $(this).addClass(bg_color);
  });
}

// function doReset (){
//     $("button #reset").click(function() {
//         $("#content .pixel").reset();

//     })
// }

$(document).ready(function () {
  createGrid();
  makeColors();
  // doReset();
});

// -----------------------------------------------------------
