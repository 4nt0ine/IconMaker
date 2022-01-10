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
    $("#paint_pink").removeClass("is-active");
    $("#paint_yellow").removeClass("is-active");
    $("#paint_black").removeClass("is-active");

    bg_color = "bg_red";
  });
  $(".pixel").click(function () {
    $(this).removeClass("bg_black");
    $(this).addClass(bg_color);
  });

  //-------------------------
  //---------------------------

  $("#paint_darkgreen").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").addClass("is-active");
    $("#paint_pink").removeClass("is-active");
    $("#paint_yellow").removeClass("is-active");
    $("#paint_black").removeClass("is-active");

    bg_color = "bg_darkgreen";
  });
  $(".pixel").click(function () {
    $(this).removeClass("bg_black");
    $(this).addClass(bg_color);
  });

  //---------------------------

  $("#paint_pink").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_pink").addClass("is-active");
    $("#paint_yellow").removeClass("is-active");
    $("#paint_black").removeClass("is-active");

    bg_color = "bg_pink";
  });
  $(".pixel").click(function () {
    $(this).removeClass("bg_black");
    $(this).addClass(bg_color);
  });

  //---------------------------

  $("#paint_yellow").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_pink").removeClass("is-active");
    $("#paint_yellow").addClass("is-active");
    $("#paint_black").removeClass("is-active");

    bg_color = "bg_yellow";
  });
  $(".pixel").click(function () {
    $(this).removeClass("bg_black");
    $(this).addClass(bg_color);
  });

  // $("#paint_black").click(function () {
  //   $("#paint_red").removeClass("is-active");
  //   $("#paint_darkgreen").removeClass("is-active");
  //   $("#paint_pink").removeClass("is-active");
  //   $("#paint_yellow").removeClass("is-active");
  //   $("#paint_black").addClass("is-active");

  //   bg_color = "bg_black";
  // });
  // $(".pixel").click(function () {
  //   $(this).addClass(bg_color);
  // });

  //si on clique sur le bouton de background black, tous les pixels deviennent noir
  $("#paint_black").click(function () {
    $("#paint_red").removeClass("is-active");
    $("#paint_darkgreen").removeClass("is-active");
    $("#paint_pink").removeClass("is-active");
    $("#paint_yellow").removeClass("is-active");
    $("#paint_black").addClass("is-active");

    bg_black = "bg_black";
    $(".pixel").addClass(bg_black);
  });
  // $(".pixel").click(function () {

  // });
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
  paintAll();
});

// -----------------------------------------------------------
