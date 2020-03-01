window.onload = init;

function init() {
  console.log("window has loaded");
  state.g = 0;
  state.h = 1;
  state.i = 1;
  state.j = 1;
  state.k = 1;
  state.l = 1;
  state.m = 1;
  state.n = 1;
  state.o = 1;
  state.p = 1;
}

var state = {
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0
};

/*Evento para limpiar contenido*/
const cleanContent = document.getElementById("nextbox");
cleanContent.addEventListener('click', ()=> {
  var filling = document.getElementById("filling");
  var littleflowers = document.getElementById("littleflowers");
  var content = document.getElementById("content");
  var rose = document.getElementById("rose");
  var balloon = document.getElementById("balloon");
  var chongo = document.getElementById("chongo");
  var sunflowers = document.getElementById("sunflowers");
  var switch2 = document.getElementById("heliumswitch");
  
  chongo.removeAttribute("src");
  filling.removeAttribute("src");
  content.removeAttribute("src");
  littleflowers.removeAttribute("src");
  sunflowers.removeAttribute("src");
  balloon.removeAttribute("src");
  rose.removeAttribute("src");
  switch2.innerHTML = "";

});

/*Evento para cambiar caja*/
const nextBox = document.getElementById("nextbox");
nextBox.addEventListener('click', ()=> {
  var nextlittleflower = document.getElementById("nextlittleflower");
  var sunflowers = document.getElementById("addsunflowers");
  var previouschongo = document.getElementById("previouschongo");
  var nextchongo = document.getElementById("nextchongo");
  var previousballoon = document.getElementById("previousballoon");
  var nextballoon = document.getElementById("nextballoon");
  var spanbutton1 = document.getElementById("spanbutton1");
  var spanbutton2 = document.getElementById("spanbutton2");
  var colorBox = document.getElementById("color");
  var nextRose = document.getElementById("nextrose");
  
  if (state.g === 0) {
    colorBox.src = "/img/game/caja rectangular/color1.png";
    nextRose.setAttribute("style", "display:none");
    nextlittleflower.setAttribute("style", "display");
    sunflowers.setAttribute("style", "display:none");
    //previouschongo.setAttribute("style", "display");
    previousballoon.setAttribute("style", "display:none");
    nextballoon.setAttribute("style", "display:none");
    spanbutton1.setAttribute("style", "display");
    spanbutton2.setAttribute("style", "display:none");
    state.g++;
  } else if (state.g === 1) {
    colorBox.src = "/img/game/caja cuadrada/color1.png";
    sunflowers.setAttribute("style", "display:none");
    nextRose.setAttribute("style", "display");
    previousballoon.setAttribute("style", "display");
    nextballoon.setAttribute("style", "display");
    nextlittleflower.setAttribute("style", "display:none");
    spanbutton2.setAttribute("style", "display");
    state.g++;
  } else if (state.g === 2){
    colorBox.src = "/img/game/caja redonda/color1.png";
    sunflowers.setAttribute("style", "display");
    nextRose.setAttribute("style", "display");
    previousballoon.setAttribute("style", "display");
    nextballoon.setAttribute("style", "display");
    nextlittleflower.setAttribute("style", "display:none");
    spanbutton2.setAttribute("style", "display");
    state.g++;
  } else if (state.g === 3){
    colorBox.src = "/img/game/caja corazon pequenia/color1.png";
    sunflowers.setAttribute("style", "display:none");
    nextRose.setAttribute("style", "display:none");
    previousballoon.setAttribute("style", "display");
    nextballoon.setAttribute("style", "display");
    nextlittleflower.setAttribute("style", "display:none");
    spanbutton2.setAttribute("style", "display");
    state.g++;
  } else if(state.g === 4){
    colorBox.src = "/img/game/caja corazon grande/color1.png";
    sunflowers.setAttribute("style", "display:none");
    nextRose.setAttribute("style", "display");
    previousballoon.setAttribute("style", "display");
    nextballoon.setAttribute("style", "display");
    nextlittleflower.setAttribute("style", "display:none");
    spanbutton2.setAttribute("style", "display");
    state.g = 0;
  }

  //console.log(state.g)

  //state.g = 0;
  state.h = 0;
  state.i = 1;
  state.j = 0;
  state.k = 0;
  state.l = 0;
  state.m = 0;
  state.n = 0;
  state.o = 0;
  state.p = 0;
});

/*Evento para cambiar color de caja*/
const nextColor = document.getElementById("nextcolor");
nextColor.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  //console.log(color.getAttribute("src").slice(0,27))
  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
    if (state.i === 0) {
      color.src = "/img/game/caja redonda/color1.png";
      state.i++;
    } else if (state.i === 1) {
      color.src = "/img/game/caja redonda/color2.png";
      state.i++;
    } else if (state.i === 2) {
      color.src = "/img/game/caja redonda/color3.png";
      state.i++;
    } else if (state.i === 3) {
      color.src = "/img/game/caja redonda/color4.png";
      state.i++;
    } else if (state.i === 4) {
      color.src = "/img/game/caja redonda/color5.png";
      state.i++;
    } else if (state.i === 5) {
      color.src = "/img/game/caja redonda/color6.png";
      state.i++;
    } else if (state.i === 6) {
      color.src = "/img/game/caja redonda/color7.png";
      state.i++;
    } else if (state.i === 7) {
      color.src = "/img/game/caja redonda/color8.png";
      state.i++;
    } else if (state.i === 8) {
      color.src = "/img/game/caja redonda/color9.png";
      state.i = 0;
    }
  } else if (
    color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/"
  ) {
    if (state.i === 0) {
      color.src = "/img/game/caja rectangular/color1.png";
      state.i++;
    } else if (state.i === 1) {
      color.src = "/img/game/caja rectangular/color2.png";
      state.i++;
    } else if (state.i === 2) {
      color.src = "/img/game/caja rectangular/color3.png";
      state.i++;
    } else if (state.i === 3) {
      color.src = "/img/game/caja rectangular/color4.png";
      state.i++;
    } else if (state.i === 4) {
      color.src = "/img/game/caja rectangular/color5.png";
      state.i++;
    } else if (state.i === 5) {
      color.src = "/img/game/caja rectangular/color6.png";
      state.i++;
    } else if (state.i === 6) {
      color.src = "/img/game/caja rectangular/color7.png";
      state.i++;
    } else if (state.i === 7) {
      color.src = "/img/game/caja rectangular/color8.png";
      state.i++;
    } else if (state.i === 8) {
      color.src = "/img/game/caja rectangular/color9.png";
      state.i = 0;
    }
  } else if (
    color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/"
  ) {
    if (state.i === 0) {
      color.src = "/img/game/caja corazon pequenia/color1.png";
      state.i++;
    } else if (state.i === 1) {
      color.src = "/img/game/caja corazon pequenia/color2.png";
      state.i++;
    } else if (state.i === 2) {
      color.src = "/img/game/caja corazon pequenia/color3.png";
      state.i++;
    } else if (state.i === 3) {
      color.src = "/img/game/caja corazon pequenia/color4.png";
      state.i++;
    } else if (state.i === 4) {
      color.src = "/img/game/caja corazon pequenia/color5.png";
      state.i++;
    } else if (state.i === 5) {
      color.src = "/img/game/caja corazon pequenia/color6.png";
      state.i++;
    } else if (state.i === 6) {
      color.src = "/img/game/caja corazon pequenia/color7.png";
      state.i++;
    } else if (state.i === 7) {
      color.src = "/img/game/caja corazon pequenia/color8.png";
      state.i++;
    } else if (state.i === 8) {
      color.src = "/img/game/caja corazon pequenia/color9.png";
      state.i = 0;
    }
  } else if (
    color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/"
  ) {
    if (state.i === 0) {
      color.src = "/img/game/caja corazon grande/color1.png";
      state.i++;
    } else if (state.i === 1) {
      color.src = "/img/game/caja corazon grande/color2.png";
      state.i++;
    } else if (state.i === 2) {
      color.src = "/img/game/caja corazon grande/color3.png";
      state.i++;
    } else if (state.i === 3) {
      color.src = "/img/game/caja corazon grande/color4.png";
      state.i++;
    } else if (state.i === 4) {
      color.src = "/img/game/caja corazon grande/color5.png";
      state.i++;
    } else if (state.i === 5) {
      color.src = "/img/game/caja corazon grande/color6.png";
      state.i++;
    } else if (state.i === 6) {
      color.src = "/img/game/caja corazon grande/color7.png";
      state.i++;
    } else if (state.i === 7) {
      color.src = "/img/game/caja corazon grande/color8.png";
      state.i++;
    } else if (state.i === 8) {
      color.src = "/img/game/caja corazon grande/color9.png";
      state.i = 0;
    }
  } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
    if (state.i === 0) {
      color.src = "/img/game/caja cuadrada/color1.png";
      state.i++;
    } else if (state.i === 1) {
      color.src = "/img/game/caja cuadrada/color2.png";
      state.i++;
    } else if (state.i === 2) {
      color.src = "/img/game/caja cuadrada/color3.png";
      state.i++;
    } else if (state.i === 3) {
      color.src = "/img/game/caja cuadrada/color4.png";
      state.i++;
    } else if (state.i === 4) {
      color.src = "/img/game/caja cuadrada/color5.png";
      state.i++;
    } else if (state.i === 5) {
      color.src = "/img/game/caja cuadrada/color6.png";
      state.i++;
    } else if (state.i === 6) {
      color.src = "/img/game/caja cuadrada/color7.png";
      state.i++;
    } else if (state.i === 7) {
      color.src = "/img/game/caja cuadrada/color8.png";
      state.i++;
    } else if (state.i === 8) {
      color.src = "/img/game/caja cuadrada/color9.png";
      state.i = 0;
    }
  }
});

/*Evento para cambiar a un chongo anterior*/
const previousChongo = document.getElementById("previouschongo");
previousChongo.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  var chongo = document.getElementById("chongo").getAttribute("src");

  if (color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/"){
    let numero = parseInt(chongo.slice(33));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ rectangular/chongo" + numeroAnterior + ".png";
      if (state.j !== 0) {
        state.j--;
        document.getElementById("chongo").setAttribute("src", src);

        if (src === "/img/game/caja\ rectangular/chongo0.png") {
          document.getElementById("chongo").setAttribute("src","/img/game/caja\ rectangular/chongo11.png")
          state.j = 10;
        }
      }
  } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/"){
    let numero = parseInt(chongo.slice(30));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ cuadrada/chongo" + numeroAnterior + ".png";
      if (state.j !== 0) {
        state.j--;
        document.getElementById("chongo").setAttribute("src", src);

        if (src === "/img/game/caja\ cuadrada/chongo0.png") {
          document.getElementById("chongo").setAttribute("src","/img/game/caja\ cuadrada/chongo11.png")
          state.j = 10;
        }
      }
  } else if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/"){
    let numero = parseInt(chongo.slice(29));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ redonda/chongo" + numeroAnterior + ".png";
      if (state.j !== 0) {
        state.j--;
        document.getElementById("chongo").setAttribute("src", src);

        if (src === "/img/game/caja\ redonda/chongo0.png") {
          document.getElementById("chongo").setAttribute("src","/img/game/caja\ redonda/chongo66.png")
          state.j = 65;
        }
      }
  } else if(color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/"){
    let numero = parseInt(chongo.slice(38));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ corazon\ pequenia/chongo" + numeroAnterior + ".png";
      if (state.j !== 0) {
        state.j--;
        document.getElementById("chongo").setAttribute("src", src);

        if (src === "/img/game/caja\ corazon\ pequenia/chongo0.png") {
          document.getElementById("chongo").setAttribute("src","/img/game/caja\ corazon\ pequenia/chongo66.png")
          state.j = 65;
        }
      }
  } else if(color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/"){
    let numero = parseInt(chongo.slice(36));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ corazon\ grande/chongo" + numeroAnterior + ".png";
      if (state.j !== 0) {
        state.j--;
        document.getElementById("chongo").setAttribute("src", src);

        if (src === "/img/game/caja\ corazon\ grande/chongo0.png") {
          document.getElementById("chongo").setAttribute("src","/img/game/caja\ corazon\ grande/chongo66.png")
          state.j = 65;
        }
      }
  }
});

/*Evento para cambiar color de chongo*/
const nextChongo = document.getElementById("nextchongo");
nextChongo.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  var chongo = document.getElementById("chongo");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
    if (state.j === 0) {
      chongo.src = "/img/game/caja redonda/chongo1.png";
      state.j++;
    } else if (state.j === 1) {
      chongo.src = "/img/game/caja redonda/chongo2.png";
      state.j++;
    } else if (state.j === 2) {
      chongo.src = "/img/game/caja redonda/chongo3.png";      
      state.j++;
    } else if (state.j === 3) {
      chongo.src = "/img/game/caja redonda/chongo4.png";      
      state.j++;
    } else if (state.j === 4) {
      chongo.src = "/img/game/caja redonda/chongo5.png";      
      state.j++;
    } else if (state.j === 5) {
      chongo.src = "/img/game/caja redonda/chongo6.png";      
      state.j++;
    } else if (state.j === 6) {
      chongo.src = "/img/game/caja redonda/chongo7.png";      
      state.j++;
    } else if (state.j === 7) {
      chongo.src = "/img/game/caja redonda/chongo8.png";      
      state.j++;      
    } else if (state.j === 8) {
      chongo.src = "/img/game/caja redonda/chongo9.png";      
      state.j++;
    } else if (state.j === 9) {
      chongo.src = "/img/game/caja redonda/chongo10.png";
      state.j++;
    } else if (state.j === 10) {
      chongo.src = "/img/game/caja redonda/chongo11.png";
      state.j++;
    } else if (state.j === 11) {
      chongo.src = "/img/game/caja redonda/chongo12.png";
      state.j++;
    } else if (state.j === 12) {
      chongo.src = "/img/game/caja redonda/chongo13.png";
      state.j++;
    } else if (state.j === 13) {
      chongo.src = "/img/game/caja redonda/chongo14.png";
      state.j++;
    } else if (state.j === 14) {
      chongo.src = "/img/game/caja redonda/chongo15.png";
      state.j++;
    } else if (state.j === 15) {
      chongo.src = "/img/game/caja redonda/chongo16.png";
      state.j++;
    } else if (state.j === 16) {
      chongo.src = "/img/game/caja redonda/chongo17.png";
      state.j++;
    } else if (state.j === 17) {
      chongo.src = "/img/game/caja redonda/chongo18.png";
      state.j++;
    } else if (state.j === 18) {
      chongo.src = "/img/game/caja redonda/chongo19.png";
      state.j++;
    } else if (state.j === 19) {
      chongo.src = "/img/game/caja redonda/chongo20.png";
      state.j++;
    } else if (state.j === 20) {
      chongo.src = "/img/game/caja redonda/chongo21.png";
      state.j++;
    } else if (state.j === 21) {
      chongo.src = "/img/game/caja redonda/chongo22.png";
      state.j++;
    } else if (state.j === 22) {
      chongo.src = "/img/game/caja redonda/chongo23.png";
      state.j++;
    } else if (state.j === 23) {
      chongo.src = "/img/game/caja redonda/chongo24.png";
      state.j++;
    } else if (state.j === 24) {
      chongo.src = "/img/game/caja redonda/chongo25.png";
      state.j++;
    } else if (state.j === 25) {
      chongo.src = "/img/game/caja redonda/chongo26.png";
      state.j++;
    } else if (state.j === 26) {
      chongo.src = "/img/game/caja redonda/chongo27.png";
      state.j++;
    } else if (state.j === 27) {
      chongo.src = "/img/game/caja redonda/chongo28.png";
      state.j++;
    } else if (state.j === 28) {
      chongo.src = "/img/game/caja redonda/chongo29.png";
      state.j++;
    } else if (state.j === 29) {
      chongo.src = "/img/game/caja redonda/chongo30.png";
      state.j++;
    } else if (state.j === 30) {
      chongo.src = "/img/game/caja redonda/chongo31.png";
      state.j++;
    } else if (state.j === 31) {
      chongo.src = "/img/game/caja redonda/chongo32.png";
      state.j++;
    } else if (state.j === 32) {
      chongo.src = "/img/game/caja redonda/chongo33.png";
      state.j++;
    } else if (state.j === 33) {
      chongo.src = "/img/game/caja redonda/chongo34.png";
      state.j++;
    } else if (state.j === 34) {
      chongo.src = "/img/game/caja redonda/chongo35.png";
      state.j++;
    } else if (state.j === 35) {
      chongo.src = "/img/game/caja redonda/chongo36.png";
      state.j++;
    } else if (state.j === 36) {
      chongo.src = "/img/game/caja redonda/chongo37.png";
      state.j++;
    } else if (state.j === 37) {
      chongo.src = "/img/game/caja redonda/chongo38.png";
      state.j++;
    } else if (state.j === 38) {
      chongo.src = "/img/game/caja redonda/chongo39.png";
      state.j++;
    } else if (state.j === 39) {
      chongo.src = "/img/game/caja redonda/chongo40.png";
      state.j++;
    } else if (state.j === 40) {
      chongo.src = "/img/game/caja redonda/chongo41.png";
      state.j++;
    } else if (state.j === 41) {
      chongo.src = "/img/game/caja redonda/chongo42.png";
      state.j++;
    } else if (state.j === 42) {
      chongo.src = "/img/game/caja redonda/chongo43.png";
      state.j++;
    } else if (state.j === 43) {
      chongo.src = "/img/game/caja redonda/chongo44.png";
      state.j++;
    } else if (state.j === 44) {
      chongo.src = "/img/game/caja redonda/chongo45.png";
      state.j++;
    } else if (state.j === 45) {
      chongo.src = "/img/game/caja redonda/chongo46.png";
      state.j++;
    } else if (state.j === 46) {
      chongo.src = "/img/game/caja redonda/chongo47.png";
      state.j++;
    } else if (state.j === 47) {
      chongo.src = "/img/game/caja redonda/chongo48.png";
      state.j++;
    } else if (state.j === 48) {
      chongo.src = "/img/game/caja redonda/chongo49.png";
      state.j++;
    } else if (state.j === 49) {
      chongo.src = "/img/game/caja redonda/chongo50.png";
      state.j++;
    } else if (state.j === 50) {
      chongo.src = "/img/game/caja redonda/chongo51.png";
      state.j++;
    } else if (state.j === 51) {
      chongo.src = "/img/game/caja redonda/chongo52.png";
      state.j++;
    } else if (state.j === 52) {
      chongo.src = "/img/game/caja redonda/chongo53.png";
      state.j++;
    } else if (state.j === 53) {
      chongo.src = "/img/game/caja redonda/chongo54.png";
      state.j++;
    } else if (state.j === 54) {
      chongo.src = "/img/game/caja redonda/chongo55.png";
      state.j++;
    } else if (state.j === 55) {
      chongo.src = "/img/game/caja redonda/chongo56.png";
      state.j++;
    } else if (state.j === 56) {
      chongo.src = "/img/game/caja redonda/chongo57.png";
      state.j++;
    } else if (state.j === 57) {
      chongo.src = "/img/game/caja redonda/chongo58.png";
      state.j++;
    } else if (state.j === 58) {
      chongo.src = "/img/game/caja redonda/chongo59.png";
      state.j++;
    } else if (state.j === 59) {
      chongo.src = "/img/game/caja redonda/chongo60.png";
      state.j++;
    } else if (state.j === 60) {
      chongo.src = "/img/game/caja redonda/chongo61.png";
      state.j++;
    } else if (state.j === 61) {
      chongo.src = "/img/game/caja redonda/chongo62.png";
      state.j++;
    } else if (state.j === 62) {
      chongo.src = "/img/game/caja redonda/chongo63.png";
      state.j++;
    } else if (state.j === 63) {
      chongo.src = "/img/game/caja redonda/chongo64.png";
      state.j++;
    } else if (state.j === 64) {
      chongo.src = "/img/game/caja redonda/chongo65.png";
      state.j++;
    } else if (state.j === 65) {
      chongo.src = "/img/game/caja redonda/chongo66.png";
      state.j = 0;
    }
  } else if (color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/") {
    if (state.j === 0) {
      chongo.src = "/img/game/caja rectangular/chongo1.png";
      state.j++;
    } else if (state.j === 1) {
      chongo.src = "/img/game/caja rectangular/chongo2.png";
      state.j++;
    } else if (state.j === 2) {
      chongo.src = "/img/game/caja rectangular/chongo3.png";
      state.j++;
    } else if (state.j === 3) {
      chongo.src = "/img/game/caja rectangular/chongo4.png";
      state.j++;
    } else if (state.j === 4) {
      chongo.src = "/img/game/caja rectangular/chongo5.png";
      state.j++;
    } else if (state.j === 5) {
      chongo.src = "/img/game/caja rectangular/chongo6.png";
      state.j++;
    } else if (state.j === 6) {
      chongo.src = "/img/game/caja rectangular/chongo7.png";
      state.j++;
    } else if (state.j === 7) {
      chongo.src = "/img/game/caja rectangular/chongo8.png";
      state.j++;
    } else if (state.j === 8) {
      chongo.src = "/img/game/caja rectangular/chongo9.png";
      state.j++;
    } else if (state.j === 9) {
      chongo.src = "/img/game/caja rectangular/chongo10.png";
      state.j++;
    } else if (state.j === 10) {
      chongo.src = "/img/game/caja rectangular/chongo11.png";
      state.j = 0;
    }
  } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
    if (state.j === 0) {
      chongo.src = "/img/game/caja cuadrada/chongo1.png";
      state.j++;
    } else if (state.j === 1) {
      chongo.src = "/img/game/caja cuadrada/chongo2.png";
      state.j++;
    } else if (state.j === 2) {
      chongo.src = "/img/game/caja cuadrada/chongo3.png";
      state.j++;
    } else if (state.j === 3) {
      chongo.src = "/img/game/caja cuadrada/chongo4.png";
      state.j++;
    } else if (state.j === 4) {
      chongo.src = "/img/game/caja cuadrada/chongo5.png";
      state.j++;
    } else if (state.j === 5) {
      chongo.src = "/img/game/caja cuadrada/chongo6.png";
      state.j++;
    } else if (state.j === 6) {
      chongo.src = "/img/game/caja cuadrada/chongo7.png";
      state.j++;
    } else if (state.j === 7) {
      chongo.src = "/img/game/caja cuadrada/chongo8.png";
      state.j++;
    } else if (state.j === 8) {
      chongo.src = "/img/game/caja cuadrada/chongo9.png";
      state.j++;
    } else if (state.j === 9) {
      chongo.src = "/img/game/caja cuadrada/chongo10.png";
      state.j++;
    } else if (state.j === 10) {
      chongo.src = "/img/game/caja cuadrada/chongo11.png";
      state.j = 0;
    }
  } else if (color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/") {
    if (state.j === 0) {
      chongo.src = "/img/game/caja corazon pequenia/chongo1.png";
      state.j++;
    } else if (state.j === 1) {
      chongo.src = "/img/game/caja corazon pequenia/chongo2.png";
      state.j++;
    } else if (state.j === 2) {
      chongo.src = "/img/game/caja corazon pequenia/chongo3.png";
      state.j++;
    } else if (state.j === 3) {
      chongo.src = "/img/game/caja corazon pequenia/chongo4.png";
      state.j++;
    } else if (state.j === 4) {
      chongo.src = "/img/game/caja corazon pequenia/chongo5.png";
      state.j++;
    } else if (state.j === 5) {
      chongo.src = "/img/game/caja corazon pequenia/chongo6.png";
      state.j++;
    } else if (state.j === 6) {
      chongo.src = "/img/game/caja corazon pequenia/chongo7.png";
      state.j++;
    } else if (state.j === 7) {
      chongo.src = "/img/game/caja corazon pequenia/chongo8.png";
      state.j++;
    } else if (state.j === 8) {
      chongo.src = "/img/game/caja corazon pequenia/chongo9.png";
      state.j++;
    } else if (state.j === 9) {
      chongo.src = "/img/game/caja corazon pequenia/chongo10.png";
      state.j++;
    } else if (state.j === 10) {
      chongo.src = "/img/game/caja corazon pequenia/chongo11.png";
      state.j++;
    } else if (state.j === 11) {
      chongo.src = "/img/game/caja corazon pequenia/chongo12.png";
      state.j++;
    } else if (state.j === 12) {
      chongo.src = "/img/game/caja corazon pequenia/chongo13.png";
      state.j++;
    } else if (state.j === 13) {
      chongo.src = "/img/game/caja corazon pequenia/chongo14.png";
      state.j++;
    } else if (state.j === 14) {
      chongo.src = "/img/game/caja corazon pequenia/chongo15.png";
      state.j++;
    } else if (state.j === 15) {
      chongo.src = "/img/game/caja corazon pequenia/chongo16.png";
      state.j++;
    } else if (state.j === 16) {
      chongo.src = "/img/game/caja corazon pequenia/chongo17.png";
      state.j++;
    } else if (state.j === 17) {
      chongo.src = "/img/game/caja corazon pequenia/chongo18.png";
      state.j++;
    } else if (state.j === 18) {
      chongo.src = "/img/game/caja corazon pequenia/chongo19.png";
      state.j++;
    } else if (state.j === 19) {
      chongo.src = "/img/game/caja corazon pequenia/chongo20.png";
      state.j++;
    } else if (state.j === 20) {
      chongo.src = "/img/game/caja corazon pequenia/chongo21.png";
      state.j++;
    } else if (state.j === 21) {
      chongo.src = "/img/game/caja corazon pequenia/chongo22.png";
      state.j++;
    } else if (state.j === 22) {
      chongo.src = "/img/game/caja corazon pequenia/chongo23.png";
      state.j++;
    } else if (state.j === 23) {
      chongo.src = "/img/game/caja corazon pequenia/chongo24.png";
      state.j++;
    } else if (state.j === 24) {
      chongo.src = "/img/game/caja corazon pequenia/chongo25.png";
      state.j++;
    } else if (state.j === 25) {
      chongo.src = "/img/game/caja corazon pequenia/chongo26.png";
      state.j++;
    } else if (state.j === 26) {
      chongo.src = "/img/game/caja corazon pequenia/chongo27.png";
      state.j++;
    } else if (state.j === 27) {
      chongo.src = "/img/game/caja corazon pequenia/chongo28.png";
      state.j++;
    } else if (state.j === 28) {
      chongo.src = "/img/game/caja corazon pequenia/chongo29.png";
      state.j++;
    } else if (state.j === 29) {
      chongo.src = "/img/game/caja corazon pequenia/chongo30.png";
      state.j++;
    } else if (state.j === 30) {
      chongo.src = "/img/game/caja corazon pequenia/chongo31.png";
      state.j++;
    } else if (state.j === 31) {
      chongo.src = "/img/game/caja corazon pequenia/chongo32.png";
      state.j++;
    } else if (state.j === 32) {
      chongo.src = "/img/game/caja corazon pequenia/chongo33.png";
      state.j++;
    } else if (state.j === 33) {
      chongo.src = "/img/game/caja corazon pequenia/chongo34.png";
      state.j++;
    } else if (state.j === 34) {
      chongo.src = "/img/game/caja corazon pequenia/chongo35.png";
      state.j++;
    } else if (state.j === 35) {
      chongo.src = "/img/game/caja corazon pequenia/chongo36.png";
      state.j++;
    } else if (state.j === 36) {
      chongo.src = "/img/game/caja corazon pequenia/chongo37.png";
      state.j++;
    } else if (state.j === 37) {
      chongo.src = "/img/game/caja corazon pequenia/chongo38.png";
      state.j++;
    } else if (state.j === 38) {
      chongo.src = "/img/game/caja corazon pequenia/chongo39.png";
      state.j++;
    } else if (state.j === 39) {
      chongo.src = "/img/game/caja corazon pequenia/chongo40.png";
      state.j++;
    } else if (state.j === 40) {
      chongo.src = "/img/game/caja corazon pequenia/chongo41.png";
      state.j++;
    } else if (state.j === 41) {
      chongo.src = "/img/game/caja corazon pequenia/chongo42.png";
      state.j++;
    } else if (state.j === 42) {
      chongo.src = "/img/game/caja corazon pequenia/chongo43.png";
      state.j++;
    } else if (state.j === 43) {
      chongo.src = "/img/game/caja corazon pequenia/chongo44.png";
      state.j++;
    } else if (state.j === 44) {
      chongo.src = "/img/game/caja corazon pequenia/chongo45.png";
      state.j++;
    } else if (state.j === 45) {
      chongo.src = "/img/game/caja corazon pequenia/chongo46.png";
      state.j++;
    } else if (state.j === 46) {
      chongo.src = "/img/game/caja corazon pequenia/chongo47.png";
      state.j++;
    } else if (state.j === 47) {
      chongo.src = "/img/game/caja corazon pequenia/chongo48.png";
      state.j++;
    } else if (state.j === 48) {
      chongo.src = "/img/game/caja corazon pequenia/chongo49.png";
      state.j++;
    } else if (state.j === 49) {
      chongo.src = "/img/game/caja corazon pequenia/chongo50.png";
      state.j++;
    } else if (state.j === 50) {
      chongo.src = "/img/game/caja corazon pequenia/chongo51.png";
      state.j++;
    } else if (state.j === 51) {
      chongo.src = "/img/game/caja corazon pequenia/chongo52.png";
      state.j++;
    } else if (state.j === 52) {
      chongo.src = "/img/game/caja corazon pequenia/chongo53.png";
      state.j++;
    } else if (state.j === 53) {
      chongo.src = "/img/game/caja corazon pequenia/chongo54.png";
      state.j++;
    } else if (state.j === 54) {
      chongo.src = "/img/game/caja corazon pequenia/chongo55.png";
      state.j++;
    } else if (state.j === 55) {
      chongo.src = "/img/game/caja corazon pequenia/chongo56.png";
      state.j++;
    } else if (state.j === 56) {
      chongo.src = "/img/game/caja corazon pequenia/chongo57.png";
      state.j++;
    } else if (state.j === 57) {
      chongo.src = "/img/game/caja corazon pequenia/chongo58.png";
      state.j++;
    } else if (state.j === 58) {
      chongo.src = "/img/game/caja corazon pequenia/chongo59.png";
      state.j++;
    } else if (state.j === 59) {
      chongo.src = "/img/game/caja corazon pequenia/chongo60.png";
      state.j++;
    } else if (state.j === 60) {
      chongo.src = "/img/game/caja corazon pequenia/chongo61.png";
      state.j++;
    } else if (state.j === 61) {
      chongo.src = "/img/game/caja corazon pequenia/chongo62.png";
      state.j++;
    } else if (state.j === 62) {
      chongo.src = "/img/game/caja corazon pequenia/chongo63.png";
      state.j++;
    } else if (state.j === 63) {
      chongo.src = "/img/game/caja corazon pequenia/chongo64.png";
      state.j++;
    } else if (state.j === 64) {
      chongo.src = "/img/game/caja corazon pequenia/chongo65.png";
      state.j++;
    } else if (state.j === 65) {
      chongo.src = "/img/game/caja corazon pequenia/chongo66.png";
      state.j = 0;
    }
  } else if (color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/") {
    if (state.j === 0) {
      chongo.src = "/img/game/caja corazon grande/chongo1.png";
      state.j++;
    } else if (state.j === 1) {
      chongo.src = "/img/game/caja corazon grande/chongo2.png";
      state.j++;
    } else if (state.j === 2) {
      chongo.src = "/img/game/caja corazon grande/chongo3.png";
      state.j++;
    } else if (state.j === 3) {
      chongo.src = "/img/game/caja corazon grande/chongo4.png";
      state.j++;
    } else if (state.j === 4) {
      chongo.src = "/img/game/caja corazon grande/chongo5.png";
      state.j++;
    } else if (state.j === 5) {
      chongo.src = "/img/game/caja corazon grande/chongo6.png";
      state.j++;
    } else if (state.j === 6) {
      chongo.src = "/img/game/caja corazon grande/chongo7.png";
      state.j++;
    } else if (state.j === 7) {
      chongo.src = "/img/game/caja corazon grande/chongo8.png";
      state.j++;
    } else if (state.j === 8) {
      chongo.src = "/img/game/caja corazon grande/chongo9.png";
      state.j++;
    } else if (state.j === 9) {
      chongo.src = "/img/game/caja corazon grande/chongo10.png";
      state.j++;
    } else if (state.j === 10) {
      chongo.src = "/img/game/caja corazon grande/chongo11.png";
      state.j++;
    } else if (state.j === 11) {
      chongo.src = "/img/game/caja corazon grande/chongo12.png";
      state.j++;
    } else if (state.j === 12) {
      chongo.src = "/img/game/caja corazon grande/chongo13.png";
      state.j++;
    } else if (state.j === 13) {
      chongo.src = "/img/game/caja corazon grande/chongo14.png";
      state.j++;
    } else if (state.j === 14) {
      chongo.src = "/img/game/caja corazon grande/chongo15.png";
      state.j++;
    } else if (state.j === 15) {
      chongo.src = "/img/game/caja corazon grande/chongo16.png";
      state.j++;
    } else if (state.j === 16) {
      chongo.src = "/img/game/caja corazon grande/chongo17.png";
      state.j++;
    } else if (state.j === 17) {
      chongo.src = "/img/game/caja corazon grande/chongo18.png";
      state.j++;
    } else if (state.j === 18) {
      chongo.src = "/img/game/caja corazon grande/chongo19.png";
      state.j++;
    } else if (state.j === 19) {
      chongo.src = "/img/game/caja corazon grande/chongo20.png";
      state.j++;
    } else if (state.j === 20) {
      chongo.src = "/img/game/caja corazon grande/chongo21.png";
      state.j++;
    } else if (state.j === 21) {
      chongo.src = "/img/game/caja corazon grande/chongo22.png";
      state.j++;
    } else if (state.j === 22) {
      chongo.src = "/img/game/caja corazon grande/chongo23.png";
      state.j++;
    } else if (state.j === 23) {
      chongo.src = "/img/game/caja corazon grande/chongo24.png";
      state.j++;
    } else if (state.j === 24) {
      chongo.src = "/img/game/caja corazon grande/chongo25.png";
      state.j++;
    } else if (state.j === 25) {
      chongo.src = "/img/game/caja corazon grande/chongo26.png";
      state.j++;
    } else if (state.j === 26) {
      chongo.src = "/img/game/caja corazon grande/chongo27.png";
      state.j++;
    } else if (state.j === 27) {
      chongo.src = "/img/game/caja corazon grande/chongo28.png";
      state.j++;
    } else if (state.j === 28) {
      chongo.src = "/img/game/caja corazon grande/chongo29.png";
      state.j++;
    } else if (state.j === 29) {
      chongo.src = "/img/game/caja corazon grande/chongo30.png";
      state.j++;
    } else if (state.j === 30) {
      chongo.src = "/img/game/caja corazon grande/chongo31.png";
      state.j++;
    } else if (state.j === 31) {
      chongo.src = "/img/game/caja corazon grande/chongo32.png";
      state.j++;
    } else if (state.j === 32) {
      chongo.src = "/img/game/caja corazon grande/chongo33.png";
      state.j++;
    } else if (state.j === 33) {
      chongo.src = "/img/game/caja corazon grande/chongo34.png";
      state.j++;
    } else if (state.j === 34) {
      chongo.src = "/img/game/caja corazon grande/chongo35.png";
      state.j++;
    } else if (state.j === 35) {
      chongo.src = "/img/game/caja corazon grande/chongo36.png";
      state.j++;
    } else if (state.j === 36) {
      chongo.src = "/img/game/caja corazon grande/chongo37.png";
      state.j++;
    } else if (state.j === 37) {
      chongo.src = "/img/game/caja corazon grande/chongo38.png";
      state.j++;
    } else if (state.j === 38) {
      chongo.src = "/img/game/caja corazon grande/chongo39.png";
      state.j++;
    } else if (state.j === 39) {
      chongo.src = "/img/game/caja corazon grande/chongo40.png";
      state.j++;
    } else if (state.j === 40) {
      chongo.src = "/img/game/caja corazon grande/chongo41.png";
      state.j++;
    } else if (state.j === 41) {
      chongo.src = "/img/game/caja corazon grande/chongo42.png";
      state.j++;
    } else if (state.j === 42) {
      chongo.src = "/img/game/caja corazon grande/chongo43.png";
      state.j++;
    } else if (state.j === 43) {
      chongo.src = "/img/game/caja corazon grande/chongo44.png";
      state.j++;
    } else if (state.j === 44) {
      chongo.src = "/img/game/caja corazon grande/chongo45.png";
      state.j++;
    } else if (state.j === 45) {
      chongo.src = "/img/game/caja corazon grande/chongo46.png";
      state.j++;
    } else if (state.j === 46) {
      chongo.src = "/img/game/caja corazon grande/chongo47.png";
      state.j++;
    } else if (state.j === 47) {
      chongo.src = "/img/game/caja corazon grande/chongo48.png";
      state.j++;
    } else if (state.j === 48) {
      chongo.src = "/img/game/caja corazon grande/chongo49.png";
      state.j++;
    } else if (state.j === 49) {
      chongo.src = "/img/game/caja corazon grande/chongo50.png";
      state.j++;
    } else if (state.j === 50) {
      chongo.src = "/img/game/caja corazon grande/chongo51.png";
      state.j++;
    } else if (state.j === 51) {
      chongo.src = "/img/game/caja corazon grande/chongo52.png";
      state.j++;
    } else if (state.j === 52) {
      chongo.src = "/img/game/caja corazon grande/chongo53.png";
      state.j++;
    } else if (state.j === 53) {
      chongo.src = "/img/game/caja corazon grande/chongo54.png";
      state.j++;
    } else if (state.j === 54) {
      chongo.src = "/img/game/caja corazon grande/chongo55.png";
      state.j++;
    } else if (state.j === 55) {
      chongo.src = "/img/game/caja corazon grande/chongo56.png";
      state.j++;
    } else if (state.j === 56) {
      chongo.src = "/img/game/caja corazon grande/chongo57.png";
      state.j++;
    } else if (state.j === 57) {
      chongo.src = "/img/game/caja corazon grande/chongo58.png";
      state.j++;
    } else if (state.j === 58) {
      chongo.src = "/img/game/caja corazon grande/chongo59.png";
      state.j++;
    } else if (state.j === 59) {
      chongo.src = "/img/game/caja corazon grande/chongo60.png";
      state.j++;
    } else if (state.j === 60) {
      chongo.src = "/img/game/caja corazon grande/chongo61.png";
      state.j++;
    } else if (state.j === 61) {
      chongo.src = "/img/game/caja corazon grande/chongo62.png";
      state.j++;
    } else if (state.j === 62) {
      chongo.src = "/img/game/caja corazon grande/chongo63.png";
      state.j++;
    } else if (state.j === 63) {
      chongo.src = "/img/game/caja corazon grande/chongo64.png";
      state.j++;
    } else if (state.j === 64) {
      chongo.src = "/img/game/caja corazon grande/chongo65.png";
      state.j++;
    } else if (state.j === 65) {
      chongo.src = "/img/game/caja corazon grande/chongo66.png";
      state.j = 0;
    }
  }
});

/*Evento para agregar girasoles*/
const addSunflowers = document.getElementById("addsunflowers");
addSunflowers.addEventListener('click', ()=> {
  var sunflowers = document.getElementById("sunflowers");

  if (state.p === 0) {
     sunflowers.src = "/img/game/caja redonda/girasoles.png";
    state.p++;
  } else if (state.p === 1) {
    sunflowers.removeAttribute("src");
    state.p = 0;
  } 
});

/*Evento para cambiar relleno*/
const nextFilling = document.getElementById("nextfilling");
nextFilling.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  var filling = document.getElementById("filling");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
    if (state.l === 0) {
      filling.src = "/img/game/caja redonda/relleno1.png";
      state.l++;
    } else if (state.l === 1) {
     filling.src = "/img/game/caja redonda/relleno2.png";
      state.l++;
    } else if (state.l === 2) {
     filling.src = "/img/game/caja redonda/relleno3.png";
      state.l++;
    } else if (state.l === 3) {
     filling.src = "/img/game/caja redonda/relleno4.png";
      state.l++;
    } else if (state.l === 4) {
     filling.src = "/img/game/caja redonda/relleno5.png";
      state.l++;
    } else if (state.l === 5) {
     filling.src = "/img/game/caja redonda/relleno6.png";
      state.l++;
    } else if (state.l === 6) {
     filling.src = "/img/game/caja redonda/relleno7.png";
      state.l++;
    } else if (state.l === 7) {
     filling.src = "/img/game/caja redonda/relleno8.png";
      state.l++;
    } else if (state.l === 8) {
     filling.src = "/img/game/caja redonda/relleno9.png";
      state.l = 0;
    }
  } else if (color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/") {
    if (state.l === 0) {
     filling.src = "/img/game/caja rectangular/relleno1.png";
      state.l++;
    } else if (state.l === 1) {
     filling.src = "/img/game/caja rectangular/relleno2.png";
      state.l++;
    } else if (state.l === 2) {
     filling.src = "/img/game/caja rectangular/relleno3.png";
      state.l++;
    } else if (state.l === 3) {
     filling.src = "/img/game/caja rectangular/relleno4.png";
      state.l++;
    } else if (state.l === 4) {
     filling.src = "/img/game/caja rectangular/relleno5.png";
      state.l++;
    } else if (state.l === 5) {
     filling.src = "/img/game/caja rectangular/relleno6.png";
      state.l++;
    } else if (state.l === 6) {
     filling.src = "/img/game/caja rectangular/relleno7.png";
      state.l++;
    } else if (state.l === 7) {
     filling.src = "/img/game/caja rectangular/relleno8.png";
      state.l++;
    } else if (state.l === 8) {
     filling.src = "/img/game/caja rectangular/relleno9.png";
      state.l = 0;
    }
  }else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
    if (state.l === 0) {
     filling.src = "/img/game/caja cuadrada/relleno1.png";
      state.l++;
    } else if (state.l === 1) {
     filling.src = "/img/game/caja cuadrada/relleno2.png";
      state.l++;
    } else if (state.l === 2) {
     filling.src = "/img/game/caja cuadrada/relleno3.png";
      state.l++;
    } else if (state.l === 3) {
     filling.src = "/img/game/caja cuadrada/relleno4.png";
      state.l++;
    } else if (state.l === 4) {
     filling.src = "/img/game/caja cuadrada/relleno5.png";
      state.l++;
    } else if (state.l === 5) {
     filling.src = "/img/game/caja cuadrada/relleno6.png";
      state.l++;
    } else if (state.l === 6) {
     filling.src = "/img/game/caja cuadrada/relleno7.png";
      state.l++;
    } else if (state.l === 7) {
     filling.src = "/img/game/caja cuadrada/relleno8.png";
      state.l++;
    } else if (state.l === 8) {
     filling.src = "/img/game/caja cuadrada/relleno9.png";
      state.l = 0;
    }
  } else if (color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/") {
    if (state.l === 0) {
      filling.src = "/img/game/caja corazon pequenia/relleno1.png";
       state.l++;
     } else if (state.l === 1) {
      filling.src = "/img/game/caja corazon pequenia/relleno2.png";
       state.l++;
     } else if (state.l === 2) {
      filling.src = "/img/game/caja corazon pequenia/relleno3.png";
       state.l++;
     } else if (state.l === 3) {
      filling.src = "/img/game/caja corazon pequenia/relleno4.png";
       state.l++;
     } else if (state.l === 4) {
      filling.src = "/img/game/caja corazon pequenia/relleno5.png";
       state.l++;
     } else if (state.l === 5) {
      filling.src = "/img/game/caja corazon pequenia/relleno6.png";
       state.l++;
     } else if (state.l === 6) {
      filling.src = "/img/game/caja corazon pequenia/relleno7.png";
       state.l++;
     } else if (state.l === 7) {
      filling.src = "/img/game/caja corazon pequenia/relleno8.png";
       state.l++;
     } else if (state.l === 8) {
      filling.src = "/img/game/caja corazon pequenia/relleno9.png";
       state.l = 0;
     }
  } else if (color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/") {
    if (state.l === 0) {
      filling.src = "/img/game/caja corazon grande/relleno1.png";
       state.l++;
     } else if (state.l === 1) {
      filling.src = "/img/game/caja corazon grande/relleno2.png";
       state.l++;
     } else if (state.l === 2) {
      filling.src = "/img/game/caja corazon grande/relleno3.png";
       state.l++;
     } else if (state.l === 3) {
      filling.src = "/img/game/caja corazon grande/relleno4.png";
       state.l++;
     } else if (state.l === 4) {
      filling.src = "/img/game/caja corazon grande/relleno5.png";
       state.l++;
     } else if (state.l === 5) {
      filling.src = "/img/game/caja corazon grande/relleno6.png";
       state.l++;
     } else if (state.l === 6) {
      filling.src = "/img/game/caja corazon grande/relleno7.png";
       state.l++;
     } else if (state.l === 7) {
      filling.src = "/img/game/caja corazon grande/relleno8.png";
       state.l++;
     } else if (state.l === 8) {
      filling.src = "/img/game/caja corazon grande/relleno9.png";
       state.l = 0;
     }
  }
});

/*Evento para cambiar contenido*/
const nextContent = document.getElementById("nextcontent");
nextContent.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  var content = document.getElementById("content");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
    if (state.h === 0) {
     content.src = "/img/game/caja redonda/contenido1.png";
      state.h++;
    } else if (state.h === 1) {
     content.src = "/img/game/caja redonda/contenido2.png";
      state.h++;
    } else if (state.h === 2) {
     content.src = "/img/game/caja redonda/contenido3.png";
      state.h++;
    } else if (state.h === 3) {
     content.src = "/img/game/caja redonda/contenido4.png";
      state.h++;
    } else if (state.h === 4) {
     content.src = "/img/game/caja redonda/contenido5.png";
      state.h++;
    } else if (state.h === 5) {
     content.src = "/img/game/caja redonda/contenido6.png";
      state.h++;
    } else if (state.h === 6) {
     content.src = "/img/game/caja redonda/contenido7.png";
      state.h++;
    } else if (state.h === 7) {
     content.src = "/img/game/caja redonda/contenido8.png";
      state.h++;
    } else if (state.h === 8) {
     content.src = "/img/game/caja redonda/contenido9.png";
      state.h++;
    } else if (state.h === 9) {
     content.src = "/img/game/caja redonda/contenido10.png";
      state.h++;
    } else if (state.h === 10) {
     content.src = "/img/game/caja redonda/contenido11.png";
      state.h++;
    } else if (state.h === 11) {
     content.src = "/img/game/caja redonda/contenido12.png";
      state.h = 0;
    }
  } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
    if (state.h === 0) {
     content.src = "/img/game/caja cuadrada/contenido1.png";
      state.h++;
    } else if (state.h === 1) {
     content.src = "/img/game/caja cuadrada/contenido2.png";
      state.h++;
    } else if (state.h === 2) {
     content.src = "/img/game/caja cuadrada/contenido3.png";
      state.h++;
    } else if (state.h === 3) {
     content.src = "/img/game/caja cuadrada/contenido4.png";
      state.h++;
    } else if (state.h === 4) {
     content.src = "/img/game/caja cuadrada/contenido5.png";
      state.h++;
    } else if (state.h === 5) {
     content.src = "/img/game/caja cuadrada/contenido6.png";
      state.h++;
    } else if (state.h === 6) {
     content.src = "/img/game/caja cuadrada/contenido7.png";
      state.h++;
    } else if (state.h === 7) {
     content.src = "/img/game/caja cuadrada/contenido8.png";
      state.h++;
    } else if (state.h === 8) {
     content.src = "/img/game/caja cuadrada/contenido9.png";
      state.h++;
    } else if (state.h === 9) {
     content.src = "/img/game/caja cuadrada/contenido10.png";
      state.h++;
    } else if (state.h === 10) {
     content.src = "/img/game/caja cuadrada/contenido11.png";
      state.h++;
    } else if (state.h === 11) {
     content.src = "/img/game/caja cuadrada/contenido12.png";
      state.h = 0;
    }
  } else if (color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/") {
    if (state.h === 0) {
     content.src = "/img/game/caja rectangular/contenido1.png";
      state.h++;
    } else if (state.h === 1) {
     content.src = "/img/game/caja rectangular/contenido2.png";
      state.h++;
    } else if (state.h === 2) {
      content.src = "/img/game/caja rectangular/contenido3.png";
      state.h++;
    } else if (state.h === 3) {
      content.src = "/img/game/caja rectangular/contenido4.png";
      state.h++;
    } else if (state.h === 4) {
      content.src = "/img/game/caja rectangular/contenido5.png";
      state.h++;
    } else if (state.h === 5) {
      content.src = "/img/game/caja rectangular/contenido6.png";
      state.h++;
    } else if (state.h === 6) {
      content.src = "/img/game/caja rectangular/contenido7.png";
      state.h++;
    } else if (state.h === 7) {
     content.src = "/img/game/caja rectangular/contenido8.png";
      state.h++;
    } else if (state.h === 8) {
     content.src = "/img/game/caja rectangular/contenido9.png";
      state.h++;
    } else if (state.h === 9) {
      content.src = "/img/game/caja rectangular/contenido10.png";
      state.h++;
    } else if (state.h === 10) {
      content.src = "/img/game/caja rectangular/contenido11.png";
      state.h++;
    } else if (state.h === 11) {
      content.src = "/img/game/caja rectangular/contenido12.png";
      state.h++;
    } else if (state.h === 12) {
      content.src = "/img/game/caja rectangular/contenido13.png";
      state.h++;
    } else if (state.h === 13) {
      content.src = "/img/game/caja rectangular/contenido14.png";
      state.h++;
    } else if (state.h === 14) {
      content.src = "/img/game/caja rectangular/contenido15.png";
      state.h++;
    } else if (state.h === 15) {
      content.src = "/img/game/caja rectangular/contenido16.png";
      state.h++;
    } else if (state.h === 16) {
      content.src = "/img/game/caja rectangular/contenido17.png";
      state.h++;
    } else if (state.h === 17) {
      content.src = "/img/game/caja rectangular/contenido18.png";
      state.h = 0;
    }
  } else if (
    color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/"
  ) {
    if (state.h === 0) {
      content.src = "/img/game/caja corazon pequenia/contenido1.png";
      state.h++;
    } else if (state.h === 1) {
      content.src = "/img/game/caja corazon pequenia/contenido2.png";
      state.h++;
    } else if (state.h === 2) {
      content.src = "/img/game/caja corazon pequenia/contenido3.png";
      state.h++;
    } else if (state.h === 3) {
      content.src = "/img/game/caja corazon pequenia/contenido4.png";
      state.h++;
    } else if (state.h === 4) {
      content.src = "/img/game/caja corazon pequenia/contenido5.png";
      state.h++;
    } else if (state.h === 5) {
      content.src = "/img/game/caja corazon pequenia/contenido6.png";
      state.h++;
    } else if (state.h === 6) {
      content.src = "/img/game/caja corazon pequenia/contenido7.png";
      state.h++;
    } else if (state.h === 7) {
      content.src = "/img/game/caja corazon pequenia/contenido8.png";
      state.h++;
    } else if (state.h === 8) {
      content.src = "/img/game/caja corazon pequenia/contenido9.png";
      state.h++;
    } else if (state.h === 9) {
      content.src = "/img/game/caja corazon pequenia/contenido10.png";
      state.h++;
    } else if (state.h === 10) {
      content.src = "/img/game/caja corazon pequenia/contenido11.png";
      state.h++;
    } else if (state.h === 11) {
      content.src = "/img/game/caja corazon pequenia/contenido12.png";
      state.h = 0;
    }
  } else if (
    color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/"
  ) {
    if (state.h === 0) {
      content.src = "/img/game/caja corazon grande/contenido1.png";
      state.h++;
    } else if (state.h === 1) {
      content.src = "/img/game/caja corazon grande/contenido2.png";
      state.h++;
    } else if (state.h === 2) {
      content.src = "/img/game/caja corazon grande/contenido3.png";
      state.h++;
    } else if (state.h === 3) {
      content.src = "/img/game/caja corazon grande/contenido4.png";
      state.h++;
    } else if (state.h === 4) {
      content.src = "/img/game/caja corazon grande/contenido5.png";
      state.h++;
    } else if (state.h === 5) {
      content.src = "/img/game/caja corazon grande/contenido6.png";
      state.h++;
    } else if (state.h === 6) {
      content.src = "/img/game/caja corazon grande/contenido7.png";
      state.h++;
    } else if (state.h === 7) {
      content.src = "/img/game/caja corazon grande/contenido8.png";
      state.h++;
    } else if (state.h === 8) {
      content.src = "/img/game/caja corazon grande/contenido9.png";
      state.h++;
    } else if (state.h === 9) {
      content.src = "/img/game/caja corazon grande/contenido10.png";
      state.h++;
    } else if (state.h === 10) {
      content.src = "/img/game/caja corazon grande/contenido11.png";
      state.h++;
    } else if (state.h === 11) {
      content.src = "/img/game/caja corazon grande/contenido12.png";
      state.h = 0;
    }
  }

});

/*Evento para cambiar florecita*/
const nextLittleflower = document.getElementById("nextlittleflower");
nextLittleflower.addEventListener('click', ()=> {
  var littleflowers = document.getElementById("littleflowers");

  if (state.o === 0) {
     littleflowers.src = "/img/game/caja rectangular/florecita1.png";
    state.o++;
  } else if (state.o === 1) {
     littleflowers.src = "/img/game/caja rectangular/florecita2.png";
    state.o++;
  } else if (state.o === 2) {
     littleflowers.src = "/img/game/caja rectangular/florecita3.png";
    state.o++;
  } else if (state.o === 3) {
     littleflowers.src = "/img/game/caja rectangular/florecita4.png";
    state.o++;
  } else if (state.o === 4) {
     littleflowers.src = "/img/game/caja rectangular/florecita5.png";
    state.o++;
  } else if (state.o === 5) {
     littleflowers.src = "/img/game/caja rectangular/florecita6.png";
    state.o++;
  } else if (state.o === 6) {
     littleflowers.src = "/img/game/caja rectangular/florecita7.png";
    state.o++;
  } else if (state.o === 7) {
    littleflowers.removeAttribute("src");
    state.o = 0;
  }
});

/*Evento para cambiar a un globo anterior*/
const previousBalloon = document.getElementById("previousballoon");
previousBalloon.addEventListener('click', ()=> {
  var balloon = document.getElementById("balloon").getAttribute("src");
  var color = document.getElementById("color");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/"){
    let numero = parseInt(balloon.slice(28));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ redonda/globo" + numeroAnterior + ".png";
      if (state.k !== 0) {
        state.k--;
        document.getElementById("balloon").setAttribute("src", src);

        if (src === "/img/game/caja\ redonda/globo0.png") {
          document.getElementById("balloon").setAttribute("src","/img/game/caja\ redonda/globo123.png")
          state.k = 122;
        }
      }
  } else if(color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/"){
    let numero = parseInt(balloon.slice(29));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ cuadrada/globo" + numeroAnterior + ".png";
      if (state.k !== 0) {
        state.k--;
        document.getElementById("balloon").setAttribute("src", src);

        if (src === "/img/game/caja\ cuadrada/globo0.png") {
          document.getElementById("balloon").setAttribute("src","/img/game/caja\ cuadrada/globo33.png")
          state.k = 32;
        }
      }
  } else if(color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/"){
    let numero = parseInt(balloon.slice(37));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ corazon\ pequenia/globo" + numeroAnterior + ".png";
      if (state.k !== 0) {
        state.k--;
        document.getElementById("balloon").setAttribute("src", src);

        if (src === "/img/game/caja\ corazon\ pequenia/globo0.png") {
          document.getElementById("balloon").setAttribute("src","/img/game/caja\ corazon\ pequenia/globo33.png")
          state.k = 32;
        }
      }
  } else if(color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/"){
    let numero = parseInt(balloon.slice(35));
    let numeroAnterior = numero - 1;
    let src;
    //console.log(numero + " hola")
    //console.log(numeroAnterior + " mundo")
    src = "/img/game/caja\ corazon\ grande/globo" + numeroAnterior + ".png";
      if (state.k !== 0) {
        state.k--;
        document.getElementById("balloon").setAttribute("src", src);

        if (src === "/img/game/caja\ corazon\ grande/globo0.png") {
          document.getElementById("balloon").setAttribute("src","/img/game/caja\ corazon\ grande/globo123.png")
          state.k = 122;
        }
      }
  }
});

/*Evento para cambiar de globo*/
const nextBalloon = document.getElementById("nextballoon");
nextBalloon.addEventListener('click', ()=> {
  var balloon = document.getElementById("balloon");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
    if (state.k === 0) {
      balloon.src = "/img/game/caja redonda/globo1.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 1) {
      balloon.src = "/img/game/caja redonda/globo2.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 2) {
      balloon.src = "/img/game/caja redonda/globo3.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 3) {
      balloon.src = "/img/game/caja redonda/globo4.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 4) {
      balloon.src = "/img/game/caja redonda/globo5.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 5) {
      balloon.src = "/img/game/caja redonda/globo6.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 6) {
      balloon.src = "/img/game/caja redonda/globo7.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 7) {
      balloon.src = "/img/game/caja redonda/globo8.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 8) {
      balloon.src = "/img/game/caja redonda/globo9.png";    
      state.k++;
      console.log(state.k);
    } else if (state.k === 9) {
      balloon.src = "/img/game/caja redonda/globo10.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 10) {
      balloon.src = "/img/game/caja redonda/globo11.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 11) {
      balloon.src = "/img/game/caja redonda/globo12.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 12) {
      balloon.src = "/img/game/caja redonda/globo13.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 13) {
      balloon.src = "/img/game/caja redonda/globo14.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 14) {
      balloon.src = "/img/game/caja redonda/globo15.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 15) {
      balloon.src = "/img/game/caja redonda/globo16.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 16) {
      balloon.src = "/img/game/caja redonda/globo17.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 17) {
      balloon.src = "/img/game/caja redonda/globo18.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 18) {
      balloon.src = "/img/game/caja redonda/globo19.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 19) {
      balloon.src = "/img/game/caja redonda/globo20.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 20) {
      balloon.src = "/img/game/caja redonda/globo21.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 21) {
      balloon.src = "/img/game/caja redonda/globo22.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 22) {
      balloon.src = "/img/game/caja redonda/globo23.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 23) {
      balloon.src = "/img/game/caja redonda/globo24.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 24) {
      balloon.src = "/img/game/caja redonda/globo25.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 25) {
      balloon.src = "/img/game/caja redonda/globo26.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 26) {
      balloon.src = "/img/game/caja redonda/globo27.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 27) {
      balloon.src = "/img/game/caja redonda/globo28.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 28) {
      balloon.src = "/img/game/caja redonda/globo29.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 29) {
      balloon.src = "/img/game/caja redonda/globo30.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 30) {
      balloon.src = "/img/game/caja redonda/globo31.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 31) {
      balloon.src = "/img/game/caja redonda/globo32.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 32) {
      balloon.src = "/img/game/caja redonda/globo33.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 33) {
      balloon.src = "/img/game/caja redonda/globo34.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 34) {
      balloon.src = "/img/game/caja redonda/globo35.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 35) {
      balloon.src = "/img/game/caja redonda/globo36.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 36) {
      balloon.src = "/img/game/caja redonda/globo37.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 37) {
      balloon.src = "/img/game/caja redonda/globo38.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 38) {
      balloon.src = "/img/game/caja redonda/globo39.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 39) {
      balloon.src = "/img/game/caja redonda/globo40.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 40) {
      balloon.src = "/img/game/caja redonda/globo41.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 41) {
      balloon.src = "/img/game/caja redonda/globo42.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 42) {
      balloon.src = "/img/game/caja redonda/globo43.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 43) {
      balloon.src = "/img/game/caja redonda/globo44.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 44) {
      balloon.src = "/img/game/caja redonda/globo45.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 45) {
      balloon.src = "/img/game/caja redonda/globo46.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 46) {
      balloon.src = "/img/game/caja redonda/globo47.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 47) {
      balloon.src = "/img/game/caja redonda/globo48.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 48) {
      balloon.src = "/img/game/caja redonda/globo49.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 49) {
      balloon.src = "/img/game/caja redonda/globo50.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 50) {
      balloon.src = "/img/game/caja redonda/globo51.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 51) {
      balloon.src = "/img/game/caja redonda/globo52.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 52) {
      balloon.src = "/img/game/caja redonda/globo53.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 53) {
      balloon.src = "/img/game/caja redonda/globo54.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 54) {
      balloon.src = "/img/game/caja redonda/globo55.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 55) {
      balloon.src = "/img/game/caja redonda/globo56.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 56) {
      balloon.src = "/img/game/caja redonda/globo57.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 57) {
      balloon.src = "/img/game/caja redonda/globo58.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 58) {
      balloon.src = "/img/game/caja redonda/globo59.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 59) {
      balloon.src = "/img/game/caja redonda/globo60.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 60) {
      balloon.src = "/img/game/caja redonda/globo61.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 61) {
      balloon.src = "/img/game/caja redonda/globo62.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 62) {
      balloon.src = "/img/game/caja redonda/globo63.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 63) {
      balloon.src = "/img/game/caja redonda/globo64.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 64) {
      balloon.src = "/img/game/caja redonda/globo65.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 65) {
      balloon.src = "/img/game/caja redonda/globo66.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 66) {
      balloon.src = "/img/game/caja redonda/globo67.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 67) {
      balloon.src = "/img/game/caja redonda/globo68.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 68) {
      balloon.src = "/img/game/caja redonda/globo69.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 69) {
      balloon.src = "/img/game/caja redonda/globo70.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 70) {
      balloon.src = "/img/game/caja redonda/globo71.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 71) {
      balloon.src = "/img/game/caja redonda/globo72.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 72) {
      balloon.src = "/img/game/caja redonda/globo73.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 73) {
      balloon.src = "/img/game/caja redonda/globo74.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 74) {
      balloon.src = "/img/game/caja redonda/globo75.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 75) {
      balloon.src = "/img/game/caja redonda/globo76.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 76) {
      balloon.src = "/img/game/caja redonda/globo77.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 77) {
      balloon.src = "/img/game/caja redonda/globo78.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 78) {
      balloon.src = "/img/game/caja redonda/globo79.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 79) {
      balloon.src = "/img/game/caja redonda/globo80.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 80) {
      balloon.src = "/img/game/caja redonda/globo81.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 81) {
      balloon.src = "/img/game/caja redonda/globo82.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 82) {
      balloon.src = "/img/game/caja redonda/globo83.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 83) {
      balloon.src = "/img/game/caja redonda/globo84.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 84) {
      balloon.src = "/img/game/caja redonda/globo85.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 85) {
      balloon.src = "/img/game/caja redonda/globo86.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 86) {
      balloon.src = "/img/game/caja redonda/globo87.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 87) {
      balloon.src = "/img/game/caja redonda/globo88.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 88) {
      balloon.src = "/img/game/caja redonda/globo89.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 89) {
      balloon.src = "/img/game/caja redonda/globo90.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 90) {
      balloon.src = "/img/game/caja redonda/globo91.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 91) {
      balloon.src = "/img/game/caja redonda/globo92.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 92) {
      balloon.src = "/img/game/caja redonda/globo93.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 93) {
      balloon.src = "/img/game/caja redonda/globo94.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 94) {
      balloon.src = "/img/game/caja redonda/globo95.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 95) {
      balloon.src = "/img/game/caja redonda/globo96.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 96) {
      balloon.src = "/img/game/caja redonda/globo97.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 97) {
      balloon.src = "/img/game/caja redonda/globo98.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 98) {
      balloon.src = "/img/game/caja redonda/globo99.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 99) {
      balloon.src = "/img/game/caja redonda/globo100.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 100) {
      balloon.src = "/img/game/caja redonda/globo101.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 101) {
      balloon.src = "/img/game/caja redonda/globo102.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 102) {
      balloon.src = "/img/game/caja redonda/globo103.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 103) {
      balloon.src = "/img/game/caja redonda/globo104.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 104) {
      balloon.src = "/img/game/caja redonda/globo105.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 105) {
      balloon.src = "/img/game/caja redonda/globo106.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 106) {
      balloon.src = "/img/game/caja redonda/globo107.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 107) {
      balloon.src = "/img/game/caja redonda/globo108.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 108) {
      balloon.src = "/img/game/caja redonda/globo109.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 109) {
      balloon.src = "/img/game/caja redonda/globo110.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 110) {
      balloon.src = "/img/game/caja redonda/globo111.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 111) {
      balloon.src = "/img/game/caja redonda/globo112.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 112) {
      balloon.src = "/img/game/caja redonda/globo113.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 113) {
      balloon.src = "/img/game/caja redonda/globo114.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 114) {
      balloon.src = "/img/game/caja redonda/globo115.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 115) {
      balloon.src = "/img/game/caja redonda/globo116.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 116) {
      balloon.src = "/img/game/caja redonda/globo117.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 117) {
      balloon.src = "/img/game/caja redonda/globo118.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 118) {
      balloon.src = "/img/game/caja redonda/globo119.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 119) {
      balloon.src = "/img/game/caja redonda/globo120.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 120) {
      balloon.src = "/img/game/caja redonda/globo121.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 121) {
      balloon.src = "/img/game/caja redonda/globo122.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 122) {
      balloon.src = "/img/game/caja redonda/globo123.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 123) {
      balloon.removeAttribute("src")
      state.k = 0;
    }
  } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
    if (state.k === 0) {
      balloon.src = "/img/game/caja cuadrada/globo1.png";
      state.k++;
    } else if (state.k === 1) {
      balloon.src = "/img/game/caja cuadrada/globo2.png";
      state.k++;
    } else if (state.k === 2) {
      balloon.src = "/img/game/caja cuadrada/globo3.png";
      state.k++;
    } else if (state.k === 3) {
      balloon.src = "/img/game/caja cuadrada/globo4.png";
      state.k++;
    } else if (state.k === 4) {
      balloon.src = "/img/game/caja cuadrada/globo5.png";
      state.k++;
    } else if (state.k === 5) {
      balloon.src = "/img/game/caja cuadrada/globo6.png";
      state.k++;
    } else if (state.k === 6) {
      balloon.src = "/img/game/caja cuadrada/globo7.png";
      state.k++;
    } else if (state.k === 7) {
      balloon.src = "/img/game/caja cuadrada/globo8.png";
      state.k++;
    } else if (state.k === 8) {
      balloon.src = "/img/game/caja cuadrada/globo9.png";
      state.k++;
    } else if (state.k === 9) {
      balloon.src = "/img/game/caja cuadrada/globo10.png";
      state.k++;
    } else if (state.k === 10) {
      balloon.src = "/img/game/caja cuadrada/globo11.png";
      state.k++;
    } else if (state.k === 11) {
      balloon.src = "/img/game/caja cuadrada/globo12.png";
      state.k++;
    } else if (state.k === 12) {
      balloon.src = "/img/game/caja cuadrada/globo13.png";
      state.k++;
    } else if (state.k === 13) {
      balloon.src = "/img/game/caja cuadrada/globo14.png";
      state.k++;
    } else if (state.k === 14) {
      balloon.src = "/img/game/caja cuadrada/globo15.png";
      state.k++;
    } else if (state.k === 15) {
      balloon.src = "/img/game/caja cuadrada/globo16.png";
      state.k++;
    } else if (state.k === 16) {
      balloon.src = "/img/game/caja cuadrada/globo17.png";
      state.k++;
    } else if (state.k === 17) {
      balloon.src = "/img/game/caja cuadrada/globo18.png";
      state.k++;
    } else if (state.k === 18) {
      balloon.src = "/img/game/caja cuadrada/globo19.png";
      state.k++;
    } else if (state.k === 19) {
      balloon.src = "/img/game/caja cuadrada/globo20.png";
      state.k++;
    } else if (state.k === 20) {
      balloon.src = "/img/game/caja cuadrada/globo21.png";
      state.k++;
    } else if (state.k === 21) {
      balloon.src = "/img/game/caja cuadrada/globo22.png";
      state.k++;
    } else if (state.k === 22) {
      balloon.src = "/img/game/caja cuadrada/globo23.png";
      state.k++;
    } else if (state.k === 23) {
      balloon.src = "/img/game/caja cuadrada/globo24.png";
      state.k++;
    } else if (state.k === 24) {
      balloon.src = "/img/game/caja cuadrada/globo25.png";
      state.k++;
    } else if (state.k === 25) {
      balloon.src = "/img/game/caja cuadrada/globo26.png";
      state.k++;
    } else if (state.k === 26) {
      balloon.src = "/img/game/caja cuadrada/globo27.png";
      state.k++;
    } else if (state.k === 27) {
      balloon.src = "/img/game/caja cuadrada/globo28.png";
      state.k++;
    } else if (state.k === 28) {
      balloon.src = "/img/game/caja cuadrada/globo29.png";
      state.k++;
    } else if (state.k === 29) {
      balloon.src = "/img/game/caja cuadrada/globo30.png";
      state.k++;
    } else if (state.k === 30) {
      balloon.src = "/img/game/caja cuadrada/globo31.png";
      state.k++;
    } else if (state.k === 31) {
      balloon.src = "/img/game/caja cuadrada/globo32.png";
      state.k++;
    } else if (state.k === 32) {
      balloon.src = "/img/game/caja cuadrada/globo33.png";
      state.k++;
    } else if (state.k === 33) {
      balloon.removeAttribute("src");
      state.k = 0;
    }
  } else if (color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/") {
    if (state.k === 0) {
      balloon.src = "/img/game/caja corazon pequenia/globo1.png";
      state.k++;
    } else if (state.k === 1) {
      balloon.src = "/img/game/caja corazon pequenia/globo2.png";
      state.k++;
    } else if (state.k === 2) {
      balloon.src = "/img/game/caja corazon pequenia/globo3.png";
      state.k++;
    } else if (state.k === 3) {
      balloon.src = "/img/game/caja corazon pequenia/globo4.png";
      state.k++;
    } else if (state.k === 4) {
      balloon.src = "/img/game/caja corazon pequenia/globo5.png";
      state.k++;
    } else if (state.k === 5) {
      balloon.src = "/img/game/caja corazon pequenia/globo6.png";
      state.k++;
    } else if (state.k === 6) {
      balloon.src = "/img/game/caja corazon pequenia/globo7.png";
      state.k++;
    } else if (state.k === 7) {
      balloon.src = "/img/game/caja corazon pequenia/globo8.png";
      state.k++;
    } else if (state.k === 8) {
      balloon.src = "/img/game/caja corazon pequenia/globo9.png";
      state.k++;
    } else if (state.k === 9) {
      balloon.src = "/img/game/caja corazon pequenia/globo10.png";
      state.k++;
    } else if (state.k === 10) {
      balloon.src = "/img/game/caja corazon pequenia/globo11.png";
      state.k++;
    } else if (state.k === 11) {
      balloon.src = "/img/game/caja corazon pequenia/globo12.png";
      state.k++;
    } else if (state.k === 12) {
      balloon.src = "/img/game/caja corazon pequenia/globo13.png";
      state.k++;
    } else if (state.k === 13) {
      balloon.src = "/img/game/caja corazon pequenia/globo14.png";
      state.k++;
    } else if (state.k === 14) {
      balloon.src = "/img/game/caja corazon pequenia/globo15.png";
      state.k++;
    } else if (state.k === 15) {
      balloon.src = "/img/game/caja corazon pequenia/globo16.png";
      state.k++;
    } else if (state.k === 16) {
      balloon.src = "/img/game/caja corazon pequenia/globo17.png";
      state.k++;
    } else if (state.k === 17) {
      balloon.src = "/img/game/caja corazon pequenia/globo18.png";
      state.k++;
    } else if (state.k === 18) {
      balloon.src = "/img/game/caja corazon pequenia/globo19.png";
      state.k++;
    } else if (state.k === 19) {
      balloon.src = "/img/game/caja corazon pequenia/globo20.png";
      state.k++;
    } else if (state.k === 20) {
      balloon.src = "/img/game/caja corazon pequenia/globo21.png";
      state.k++;
    } else if (state.k === 21) {
      balloon.src = "/img/game/caja corazon pequenia/globo22.png";
      state.k++;
    } else if (state.k === 22) {
      balloon.src = "/img/game/caja corazon pequenia/globo23.png";
      state.k++;
    } else if (state.k === 23) {
      balloon.src = "/img/game/caja corazon pequenia/globo24.png";
      state.k++;
    } else if (state.k === 24) {
      balloon.src = "/img/game/caja corazon pequenia/globo25.png";
      state.k++;
    } else if (state.k === 25) {
      balloon.src = "/img/game/caja corazon pequenia/globo26.png";
      state.k++;
    } else if (state.k === 26) {
      balloon.src = "/img/game/caja corazon pequenia/globo27.png";
      state.k++;
    } else if (state.k === 27) {
      balloon.src = "/img/game/caja corazon pequenia/globo28.png";
      state.k++;
    } else if (state.k === 28) {
      balloon.src = "/img/game/caja corazon pequenia/globo29.png";
      state.k++;
    } else if (state.k === 29) {
      balloon.src = "/img/game/caja corazon pequenia/globo30.png";
      state.k++;
    } else if (state.k === 30) {
      balloon.src = "/img/game/caja corazon pequenia/globo31.png";
      state.k++;
    } else if (state.k === 31) {
      balloon.src = "/img/game/caja corazon pequenia/globo32.png";
      state.k++;
    } else if (state.k === 32) {
      balloon.src = "/img/game/caja corazon pequenia/globo33.png";
      state.k++;
    } else if (state.k === 33) {
      balloon.removeAttribute("src");
      state.k = 0;
    }
  } else if (color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/") {
    if (state.k === 0) {
      balloon.src = "/img/game/caja corazon grande/globo1.png";
      state.k++;
    } else if (state.k === 1) {
      balloon.src = "/img/game/caja corazon grande/globo2.png";
      state.k++;
    } else if (state.k === 2) {
      balloon.src = "/img/game/caja corazon grande/globo3.png";
      state.k++;
    } else if (state.k === 3) {
      balloon.src = "/img/game/caja corazon grande/globo4.png";
      state.k++;
    } else if (state.k === 4) {
      balloon.src = "/img/game/caja corazon grande/globo5.png";
      state.k++;
    } else if (state.k === 5) {
      balloon.src = "/img/game/caja corazon grande/globo6.png";
      state.k++;
    } else if (state.k === 6) {
      balloon.src = "/img/game/caja corazon grande/globo7.png";
      state.k++;
    } else if (state.k === 7) {
      balloon.src = "/img/game/caja corazon grande/globo8.png";
      state.k++;
    } else if (state.k === 8) {
      balloon.src = "/img/game/caja corazon grande/globo9.png";
      state.k++;
    } else if (state.k === 9) {
      balloon.src = "/img/game/caja corazon grande/globo10.png";
      state.k++;
    } else if (state.k === 10) {
      balloon.src = "/img/game/caja corazon grande/globo11.png";
      state.k++;
    } else if (state.k === 11) {
      balloon.src = "/img/game/caja corazon grande/globo12.png";
      state.k++;
    } else if (state.k === 12) {
      balloon.src = "/img/game/caja corazon grande/globo13.png";
      state.k++;
    } else if (state.k === 13) {
      balloon.src = "/img/game/caja corazon grande/globo14.png";
      state.k++;
    } else if (state.k === 14) {
      balloon.src = "/img/game/caja corazon grande/globo15.png";
      state.k++;
    } else if (state.k === 15) {
      balloon.src = "/img/game/caja corazon grande/globo16.png";
      state.k++;
    } else if (state.k === 16) {
      balloon.src = "/img/game/caja corazon grande/globo17.png";
      state.k++;
    } else if (state.k === 17) {
      balloon.src = "/img/game/caja corazon grande/globo18.png";
      state.k++;
    } else if (state.k === 18) {
      balloon.src = "/img/game/caja corazon grande/globo19.png";
      state.k++;
    } else if (state.k === 19) {
      balloon.src = "/img/game/caja corazon grande/globo20.png";
      state.k++;
    } else if (state.k === 20) {
      balloon.src = "/img/game/caja corazon grande/globo21.png";
      state.k++;
    } else if (state.k === 21) {
      balloon.src = "/img/game/caja corazon grande/globo22.png";
      state.k++;
    } else if (state.k === 22) {
      balloon.src = "/img/game/caja corazon grande/globo23.png";
      state.k++;
    } else if (state.k === 23) {
      balloon.src = "/img/game/caja corazon grande/globo24.png";
      state.k++;
    } else if (state.k === 24) {
      balloon.src = "/img/game/caja corazon grande/globo25.png";
      state.k++;
    } else if (state.k === 25) {
      balloon.src = "/img/game/caja corazon grande/globo26.png";
      state.k++;
    } else if (state.k === 26) {
      balloon.src = "/img/game/caja corazon grande/globo27.png";
      state.k++;
    } else if (state.k === 27) {
      balloon.src = "/img/game/caja corazon grande/globo28.png";
      state.k++;
    } else if (state.k === 28) {
      balloon.src = "/img/game/caja corazon grande/globo29.png";
      state.k++;
    } else if (state.k === 29) {
      balloon.src = "/img/game/caja corazon grande/globo30.png";
      state.k++;
    } else if (state.k === 30) {
      balloon.src = "/img/game/caja corazon grande/globo31.png";
      state.k++;
    } else if (state.k === 31) {
      balloon.src = "/img/game/caja corazon grande/globo32.png";
      state.k++;
    } else if (state.k === 32) {
      balloon.src = "/img/game/caja corazon grande/globo33.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 33) {
      balloon.src = "/img/game/caja corazon grande/globo34.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 34) {
      balloon.src = "/img/game/caja corazon grande/globo35.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 35) {
      balloon.src = "/img/game/caja corazon grande/globo36.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 36) {
      balloon.src = "/img/game/caja corazon grande/globo37.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 37) {
      balloon.src = "/img/game/caja corazon grande/globo38.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 38) {
      balloon.src = "/img/game/caja corazon grande/globo39.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 39) {
      balloon.src = "/img/game/caja corazon grande/globo40.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 40) {
      balloon.src = "/img/game/caja corazon grande/globo41.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 41) {
      balloon.src = "/img/game/caja corazon grande/globo42.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 42) {
      balloon.src = "/img/game/caja corazon grande/globo43.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 43) {
      balloon.src = "/img/game/caja corazon grande/globo44.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 44) {
      balloon.src = "/img/game/caja corazon grande/globo45.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 45) {
      balloon.src = "/img/game/caja corazon grande/globo46.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 46) {
      balloon.src = "/img/game/caja corazon grande/globo47.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 47) {
      balloon.src = "/img/game/caja corazon grande/globo48.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 48) {
      balloon.src = "/img/game/caja corazon grande/globo49.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 49) {
      balloon.src = "/img/game/caja corazon grande/globo50.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 50) {
      balloon.src = "/img/game/caja corazon grande/globo51.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 51) {
      balloon.src = "/img/game/caja corazon grande/globo52.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 52) {
      balloon.src = "/img/game/caja corazon grande/globo53.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 53) {
      balloon.src = "/img/game/caja corazon grande/globo54.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 54) {
      balloon.src = "/img/game/caja corazon grande/globo55.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 55) {
      balloon.src = "/img/game/caja corazon grande/globo56.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 56) {
      balloon.src = "/img/game/caja corazon grande/globo57.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 57) {
      balloon.src = "/img/game/caja corazon grande/globo58.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 58) {
      balloon.src = "/img/game/caja corazon grande/globo59.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 59) {
      balloon.src = "/img/game/caja corazon grande/globo60.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 60) {
      balloon.src = "/img/game/caja corazon grande/globo61.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 61) {
      balloon.src = "/img/game/caja corazon grande/globo62.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 62) {
      balloon.src = "/img/game/caja corazon grande/globo63.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 63) {
      balloon.src = "/img/game/caja corazon grande/globo64.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 64) {
      balloon.src = "/img/game/caja corazon grande/globo65.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 65) {
      balloon.src = "/img/game/caja corazon grande/globo66.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 66) {
      balloon.src = "/img/game/caja corazon grande/globo67.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 67) {
      balloon.src = "/img/game/caja corazon grande/globo68.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 68) {
      balloon.src = "/img/game/caja corazon grande/globo69.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 69) {
      balloon.src = "/img/game/caja corazon grande/globo70.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 70) {
      balloon.src = "/img/game/caja corazon grande/globo71.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 71) {
      balloon.src = "/img/game/caja corazon grande/globo72.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 72) {
      balloon.src = "/img/game/caja corazon grande/globo73.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 73) {
      balloon.src = "/img/game/caja corazon grande/globo74.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 74) {
      balloon.src = "/img/game/caja corazon grande/globo75.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 75) {
      balloon.src = "/img/game/caja corazon grande/globo76.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 76) {
      balloon.src = "/img/game/caja corazon grande/globo77.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 77) {
      balloon.src = "/img/game/caja corazon grande/globo78.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 78) {
      balloon.src = "/img/game/caja corazon grande/globo79.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 79) {
      balloon.src = "/img/game/caja corazon grande/globo80.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 80) {
      balloon.src = "/img/game/caja corazon grande/globo81.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 81) {
      balloon.src = "/img/game/caja corazon grande/globo82.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 82) {
      balloon.src = "/img/game/caja corazon grande/globo83.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 83) {
      balloon.src = "/img/game/caja corazon grande/globo84.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 84) {
      balloon.src = "/img/game/caja corazon grande/globo85.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 85) {
      balloon.src = "/img/game/caja corazon grande/globo86.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 86) {
      balloon.src = "/img/game/caja corazon grande/globo87.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 87) {
      balloon.src = "/img/game/caja corazon grande/globo88.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 88) {
      balloon.src = "/img/game/caja corazon grande/globo89.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 89) {
      balloon.src = "/img/game/caja corazon grande/globo90.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 90) {
      balloon.src = "/img/game/caja corazon grande/globo91.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 91) {
      balloon.src = "/img/game/caja corazon grande/globo92.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 92) {
      balloon.src = "/img/game/caja corazon grande/globo93.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 93) {
      balloon.src = "/img/game/caja corazon grande/globo94.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 94) {
      balloon.src = "/img/game/caja corazon grande/globo95.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 95) {
      balloon.src = "/img/game/caja corazon grande/globo96.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 96) {
      balloon.src = "/img/game/caja corazon grande/globo97.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 97) {
      balloon.src = "/img/game/caja corazon grande/globo98.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 98) {
      balloon.src = "/img/game/caja corazon grande/globo99.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 99) {
      balloon.src = "/img/game/caja corazon grande/globo100.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 100) {
      balloon.src = "/img/game/caja corazon grande/globo101.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 101) {
      balloon.src = "/img/game/caja corazon grande/globo102.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 102) {
      balloon.src = "/img/game/caja corazon grande/globo103.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 103) {
      balloon.src = "/img/game/caja corazon grande/globo104.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 104) {
      balloon.src = "/img/game/caja corazon grande/globo105.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 105) {
      balloon.src = "/img/game/caja corazon grande/globo106.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 106) {
      balloon.src = "/img/game/caja corazon grande/globo107.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 107) {
      balloon.src = "/img/game/caja corazon grande/globo108.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 108) {
      balloon.src = "/img/game/caja corazon grande/globo109.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 109) {
      balloon.src = "/img/game/caja corazon grande/globo110.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 110) {
      balloon.src = "/img/game/caja corazon grande/globo111.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 111) {
      balloon.src = "/img/game/caja corazon grande/globo112.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 112) {
      balloon.src = "/img/game/caja corazon grande/globo113.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 113) {
      balloon.src = "/img/game/caja corazon grande/globo114.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 114) {
      balloon.src = "/img/game/caja corazon grande/globo115.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 115) {
      balloon.src = "/img/game/caja corazon grande/globo116.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 116) {
      balloon.src = "/img/game/caja corazon grande/globo117.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 117) {
      balloon.src = "/img/game/caja corazon grande/globo118.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 118) {
      balloon.src = "/img/game/caja corazon grande/globo119.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 119) {
      balloon.src = "/img/game/caja corazon grande/globo120.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 120) {
      balloon.src = "/img/game/caja corazon grande/globo121.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 121) {
      balloon.src = "/img/game/caja corazon grande/globo122.png";
      state.k++;
      console.log(state.k);
    } else if (state.k === 122) {
      balloon.src = "/img/game/caja corazon grande/globo123.png";
      state.k++;
    } else if (state.k === 123) {
      balloon.removeAttribute("src");
      state.k = 0;
    }
  }
});

/*Evento para cambiar de rosa*/
const nextRose = document.getElementById("nextrose");
nextRose.addEventListener('click', ()=> {
  var color = document.getElementById("color");
  var rose = document.getElementById("rose");

  if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/"){
    if (state.m === 0) {
      rose.src = "/img/game/caja redonda/rosa1.png";
      state.m++;
    } else if (state.m === 1) {
      rose.src = "/img/game/caja redonda/rosa2.png";
      state.m++;
    } else if (state.m === 2) {
      rose.src = "/img/game/caja redonda/rosa3.png";
      state.m++;
    } else if (state.m === 3) {
      rose.src = "/img/game/caja redonda/rosa4.png";
      state.m++;
    } else if (state.m === 4) {
      rose.src = "/img/game/caja redonda/rosa5.png";
      state.m++;
    } else if (state.m === 5) {
      rose.src = "/img/game/caja redonda/rosa6.png";
      state.m++;
    } else if (state.m === 6) {
      rose.src = "/img/game/caja redonda/rosa7.png";
      state.m++;
    } else if (state.m === 7) {
      rose.src = "/img/game/caja redonda/cerveza.png";
      state.m++;
    } else if (state.m === 8) {
      rose.removeAttribute("src");
      state.m = 0;
    }
  } if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/"){
    if (state.m === 0) {
      rose.src = "/img/game/caja cuadrada/rosa1.png";
      state.m++;
    } else if (state.m === 1) {
      rose.src = "/img/game/caja cuadrada/rosa2.png";
      state.m++;
    } else if (state.m === 2) {
      rose.src = "/img/game/caja cuadrada/rosa3.png";
      state.m++;
    } else if (state.m === 3) {
      rose.src = "/img/game/caja cuadrada/rosa4.png";
      state.m++;
    } else if (state.m === 4) {
      rose.src = "/img/game/caja cuadrada/rosa5.png";
      state.m++;
    } else if (state.m === 5) {
      rose.src = "/img/game/caja cuadrada/rosa6.png";
      state.m++;
    } else if (state.m === 6) {
      rose.src = "/img/game/caja cuadrada/rosa7.png";
      state.m++;
    } else if (state.m === 7) {
      rose.src = "/img/game/caja cuadrada/cerveza.png";
      state.m++;
    } else if (state.m === 8) {
      rose.removeAttribute("src");
      state.m = 0;
    }
  } else if (color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/") {
    if (state.m === 0) {
      rose.src = "/img/game/caja corazon grande/rosa1.png";
      state.m++;
    } else if (state.m === 1) {
      rose.src = "/img/game/caja corazon grande/rosa2.png";
      state.m++;
    } else if (state.m === 2) {
      rose.src = "/img/game/caja corazon grande/rosa3.png";
      state.m++;
    } else if (state.m === 3) {
      rose.src = "/img/game/caja corazon grande/rosa4.png";
      state.m++;
    } else if (state.m === 4) {
      rose.src = "/img/game/caja corazon grande/rosa5.png";
      state.m++;
    } else if (state.m === 5) {
      rose.src = "/img/game/caja corazon grande/rosa6.png";
      state.m++;
    } else if (state.m === 6) {
      rose.src = "/img/game/caja corazon grande/rosa7.png";
      state.m++;
    } else if (state.m === 7) {
      rose.src = "/img/game/caja corazon grande/cerveza.png";
      state.m++;
    } else if (state.m === 8) {
      rose.removeAttribute("src");
      state.m = 0;
    }
  }
});

//Evento para deshabilitar botones
var objectsPrice;
const calculatePrice = document.querySelectorAll('#nextbox, #nextcolor, #nextchongo, #addsunflowers, #nextfilling, #nextcontent, #nextlittleflower, #previousballoon, #nextballoon, #nextrose');
for (let i = 0; i < calculatePrice.length; i++) {
  calculatePrice[i].addEventListener('click', ()=>{
    var color = document.getElementById("color");  

    var a = document.getElementById("color").getAttribute("src");
    var b = document.getElementById("chongo").getAttribute("src");
    var c = document.getElementById("filling").getAttribute("src");
    var d = document.getElementById("content").getAttribute("src");
    var e = document.getElementById("littleflowers").getAttribute("src");
    var f = document.getElementById("balloon").getAttribute("src");
    var g = document.getElementById("rose").getAttribute("src");
    var h = document.getElementById("sunflowers").getAttribute("src");

    if (color.getAttribute("src").slice(0, 23) === "/img/game/caja redonda/") {
      if (
      a === "/img/game/caja redonda/color1.png" ||
      a === "/img/game/caja redonda/color2.png" ||
      a === "/img/game/caja redonda/color3.png" ||
      a === "/img/game/caja redonda/color4.png" ||
      a === "/img/game/caja redonda/color5.png" ||
      a === "/img/game/caja redonda/color6.png" ||
      a === "/img/game/caja redonda/color7.png" ||
      a === "/img/game/caja redonda/color8.png" ||
      a === "/img/game/caja redonda/color9.png") {
        a = 130;
      }

      if (
        b === "/img/game/caja redonda/chongo1.png" ||
        b === "/img/game/caja redonda/chongo2.png" ||
        b === "/img/game/caja redonda/chongo3.png" ||
        b === "/img/game/caja redonda/chongo4.png" ||
        b === "/img/game/caja redonda/chongo5.png" ||
        b === "/img/game/caja redonda/chongo6.png" ||
        b === "/img/game/caja redonda/chongo7.png" ||
        b === "/img/game/caja redonda/chongo8.png" ||
        b === "/img/game/caja redonda/chongo9.png" ||
        b === "/img/game/caja redonda/chongo10.png" ||
        b === "/img/game/caja redonda/chongo11.png" ||
        b === "/img/game/caja redonda/chongo12.png" ||
        b === "/img/game/caja redonda/chongo13.png" ||
        b === "/img/game/caja redonda/chongo14.png" ||
        b === "/img/game/caja redonda/chongo15.png" ||
        b === "/img/game/caja redonda/chongo16.png" ||
        b === "/img/game/caja redonda/chongo17.png" ||
        b === "/img/game/caja redonda/chongo18.png" ||
        b === "/img/game/caja redonda/chongo19.png" ||
        b === "/img/game/caja redonda/chongo20.png" ||
        b === "/img/game/caja redonda/chongo21.png" ||
        b === "/img/game/caja redonda/chongo22.png" ||
        b === "/img/game/caja redonda/chongo23.png" ||
        b === "/img/game/caja redonda/chongo24.png" ||
        b === "/img/game/caja redonda/chongo25.png" ||
        b === "/img/game/caja redonda/chongo26.png" ||
        b === "/img/game/caja redonda/chongo27.png" ||
        b === "/img/game/caja redonda/chongo28.png" ||
        b === "/img/game/caja redonda/chongo29.png" ||
        b === "/img/game/caja redonda/chongo30.png" ||
        b === "/img/game/caja redonda/chongo31.png" ||
        b === "/img/game/caja redonda/chongo32.png" ||
        b === "/img/game/caja redonda/chongo33.png" ||
        b === "/img/game/caja redonda/chongo34.png" ||
        b === "/img/game/caja redonda/chongo35.png" ||
        b === "/img/game/caja redonda/chongo36.png" ||
        b === "/img/game/caja redonda/chongo37.png" ||
        b === "/img/game/caja redonda/chongo38.png" ||
        b === "/img/game/caja redonda/chongo39.png" ||
        b === "/img/game/caja redonda/chongo40.png" ||
        b === "/img/game/caja redonda/chongo41.png" ||
        b === "/img/game/caja redonda/chongo42.png" ||
        b === "/img/game/caja redonda/chongo43.png" ||
        b === "/img/game/caja redonda/chongo44.png" ||
        b === "/img/game/caja redonda/chongo45.png" ||
        b === "/img/game/caja redonda/chongo46.png" ||
        b === "/img/game/caja redonda/chongo47.png" ||
        b === "/img/game/caja redonda/chongo48.png" ||
        b === "/img/game/caja redonda/chongo49.png" ||
        b === "/img/game/caja redonda/chongo50.png" ||
        b === "/img/game/caja redonda/chongo51.png" ||
        b === "/img/game/caja redonda/chongo52.png" ||
        b === "/img/game/caja redonda/chongo53.png" ||
        b === "/img/game/caja redonda/chongo54.png" ||
        b === "/img/game/caja redonda/chongo55.png" ||
        b === "/img/game/caja redonda/chongo56.png" ||
        b === "/img/game/caja redonda/chongo57.png" ||
        b === "/img/game/caja redonda/chongo58.png" ||
        b === "/img/game/caja redonda/chongo59.png" ||
        b === "/img/game/caja redonda/chongo60.png" ||
        b === "/img/game/caja redonda/chongo61.png" ||
        b === "/img/game/caja redonda/chongo62.png" ||
        b === "/img/game/caja redonda/chongo63.png" ||
        b === "/img/game/caja redonda/chongo64.png" ||
        b === "/img/game/caja redonda/chongo65.png" ||
        b === "/img/game/caja redonda/chongo66.png"
      ) {
        b = 20;
      }

      if (
        c === "/img/game/caja redonda/relleno1.png" ||
        c === "/img/game/caja redonda/relleno2.png" ||
        c === "/img/game/caja redonda/relleno3.png" ||
        c === "/img/game/caja redonda/relleno4.png" ||
        c === "/img/game/caja redonda/relleno5.png" ||
        c === "/img/game/caja redonda/relleno6.png" ||
        c === "/img/game/caja redonda/relleno7.png" ||
        c === "/img/game/caja redonda/relleno8.png" ||
        c === "/img/game/caja redonda/relleno9.png"
      ) {
        c = 10;
      }

      if (
        d === "/img/game/caja redonda/contenido1.png" ||
        d === "/img/game/caja redonda/contenido2.png" ||
        d === "/img/game/caja redonda/contenido3.png" ||
        d === "/img/game/caja redonda/contenido4.png" ||
        d === "/img/game/caja redonda/contenido5.png" ||
        d === "/img/game/caja redonda/contenido6.png" ||
        d === "/img/game/caja redonda/contenido7.png" ||
        d === "/img/game/caja redonda/contenido8.png" ||
        d === "/img/game/caja redonda/contenido9.png" ||
        d === "/img/game/caja redonda/contenido10.png" ||
        d === "/img/game/caja redonda/contenido11.png" ||
        d === "/img/game/caja redonda/contenido12.png"
      ) {
        d = 120;
      }

      if (
        f === "/img/game/caja redonda/globo1.png" ||
        f === "/img/game/caja redonda/globo2.png" ||
        f === "/img/game/caja redonda/globo3.png" ||
        f === "/img/game/caja redonda/globo4.png" ||
        f === "/img/game/caja redonda/globo5.png" ||
        f === "/img/game/caja redonda/globo6.png" ||
        f === "/img/game/caja redonda/globo7.png" ||
        f === "/img/game/caja redonda/globo8.png" ||
        f === "/img/game/caja redonda/globo9.png" ||
        f === "/img/game/caja redonda/globo10.png" ||
        f === "/img/game/caja redonda/globo11.png" ||
        f === "/img/game/caja redonda/globo12.png"
      ) {
        f = 50;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (
        f === "/img/game/caja redonda/globo13.png" ||
        f === "/img/game/caja redonda/globo14.png" ||
        f === "/img/game/caja redonda/globo15.png" ||
        f === "/img/game/caja redonda/globo16.png" ||
        f === "/img/game/caja redonda/globo17.png" ||
        f === "/img/game/caja redonda/globo18.png" ||
        f === "/img/game/caja redonda/globo19.png" ||
        f === "/img/game/caja redonda/globo20.png" ||
        f === "/img/game/caja redonda/globo21.png" ||
        f === "/img/game/caja redonda/globo22.png" ||
        f === "/img/game/caja redonda/globo23.png" ||
        f === "/img/game/caja redonda/globo24.png" ||
        f === "/img/game/caja redonda/globo25.png" ||
        f === "/img/game/caja redonda/globo26.png" ||
        f === "/img/game/caja redonda/globo27.png" ||
        f === "/img/game/caja redonda/globo28.png" ||
        f === "/img/game/caja redonda/globo29.png" ||
        f === "/img/game/caja redonda/globo30.png" ||
        f === "/img/game/caja redonda/globo31.png" ||
        f === "/img/game/caja redonda/globo32.png" ||
        f === "/img/game/caja redonda/globo33.png" ||
        f === "/img/game/caja redonda/globo34.png" ||
        f === "/img/game/caja redonda/globo35.png" ||
        f === "/img/game/caja redonda/globo36.png" ||
        f === "/img/game/caja redonda/globo37.png" ||
        f === "/img/game/caja redonda/globo38.png" ||
        f === "/img/game/caja redonda/globo39.png" ||
        f === "/img/game/caja redonda/globo40.png" ||
        f === "/img/game/caja redonda/globo41.png" ||
        f === "/img/game/caja redonda/globo42.png" ||
        f === "/img/game/caja redonda/globo43.png" ||
        f === "/img/game/caja redonda/globo44.png" ||
        f === "/img/game/caja redonda/globo45.png" ||
        f === "/img/game/caja redonda/globo46.png" ||
        f === "/img/game/caja redonda/globo47.png" ||
        f === "/img/game/caja redonda/globo48.png" ||
        f === "/img/game/caja redonda/globo49.png" ||
        f === "/img/game/caja redonda/globo50.png" ||
        f === "/img/game/caja redonda/globo51.png" ||
        f === "/img/game/caja redonda/globo52.png" ||
        f === "/img/game/caja redonda/globo53.png" ||
        f === "/img/game/caja redonda/globo54.png" ||
        f === "/img/game/caja redonda/globo55.png" ||
        f === "/img/game/caja redonda/globo56.png" ||
        f === "/img/game/caja redonda/globo57.png" ||
        f === "/img/game/caja redonda/globo58.png" ||
        f === "/img/game/caja redonda/globo59.png" ||
        f === "/img/game/caja redonda/globo60.png" ||
        f === "/img/game/caja redonda/globo61.png" ||
        f === "/img/game/caja redonda/globo62.png" ||
        f === "/img/game/caja redonda/globo63.png" ||
        f === "/img/game/caja redonda/globo64.png" ||
        f === "/img/game/caja redonda/globo65.png" ||
        f === "/img/game/caja redonda/globo66.png" ||
        f === "/img/game/caja redonda/globo67.png" ||
        f === "/img/game/caja redonda/globo68.png" ||
        f === "/img/game/caja redonda/globo69.png" ||
        f === "/img/game/caja redonda/globo70.png" ||
        f === "/img/game/caja redonda/globo71.png" ||
        f === "/img/game/caja redonda/globo72.png" ||
        f === "/img/game/caja redonda/globo73.png" ||
        f === "/img/game/caja redonda/globo74.png" ||
        f === "/img/game/caja redonda/globo75.png" ||
        f === "/img/game/caja redonda/globo76.png" ||
        f === "/img/game/caja redonda/globo77.png" ||
        f === "/img/game/caja redonda/globo78.png" ||
        f === "/img/game/caja redonda/globo79.png" ||
        f === "/img/game/caja redonda/globo80.png" ||
        f === "/img/game/caja redonda/globo81.png" ||
        f === "/img/game/caja redonda/globo82.png" ||
        f === "/img/game/caja redonda/globo83.png" ||
        f === "/img/game/caja redonda/globo84.png" ||
        f === "/img/game/caja redonda/globo85.png" ||
        f === "/img/game/caja redonda/globo86.png"
      ) {
        f = 100;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (f === "/img/game/caja redonda/globo87.png") {
        f = 150;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (
        f === "/img/game/caja redonda/globo88.png" ||
        f === "/img/game/caja redonda/globo89.png" ||
        f === "/img/game/caja redonda/globo90.png" ||
        f === "/img/game/caja redonda/globo91.png" ||
        f === "/img/game/caja redonda/globo92.png" ||
        f === "/img/game/caja redonda/globo93.png" ||
        f === "/img/game/caja redonda/globo94.png" ||
        f === "/img/game/caja redonda/globo95.png" ||
        f === "/img/game/caja redonda/globo96.png" ||
        f === "/img/game/caja redonda/globo97.png" ||
        f === "/img/game/caja redonda/globo98.png" ||
        f === "/img/game/caja redonda/globo99.png" ||
        f === "/img/game/caja redonda/globo100.png" ||
        f === "/img/game/caja redonda/globo101.png" ||
        f === "/img/game/caja redonda/globo102.png" ||
        f === "/img/game/caja redonda/globo103.png" ||
        f === "/img/game/caja redonda/globo104.png" ||
        f === "/img/game/caja redonda/globo105.png" ||
        f === "/img/game/caja redonda/globo106.png" ||
        f === "/img/game/caja redonda/globo107.png" ||
        f === "/img/game/caja redonda/globo108.png" ||
        f === "/img/game/caja redonda/globo109.png" ||
        f === "/img/game/caja redonda/globo111.png" ||
        f === "/img/game/caja redonda/globo112.png" ||
        f === "/img/game/caja redonda/globo113.png" ||
        f === "/img/game/caja redonda/globo114.png" ||
        f === "/img/game/caja redonda/globo115.png" ||
        f === "/img/game/caja redonda/globo116.png" ||
        f === "/img/game/caja redonda/globo117.png" ||
        f === "/img/game/caja redonda/globo118.png" ||
        f === "/img/game/caja redonda/globo119.png" ||
        f === "/img/game/caja redonda/globo120.png" ||
        f === "/img/game/caja redonda/globo121.png"
      ) {
        f = 150;
        document.getElementById("heliumswitch").setAttribute("display", "");
        document.getElementById("heliumswitch").innerHTML = `
                <div class="primary-switch m-1" data-tooltip="El globo inflado con aire se colocará junto a la tapa. No flotará.">
                      <input type="checkbox" id="switch2" onchange="airballoons()">
                      <label for="switch2"></label>
                </div>
                <h4 class="text-white ml-5">Prefiero este globo inflado con aire</h4>
                `;
      } else if (
        f === "/img/game/caja redonda/globo110.png" ||
        f === "/img/game/caja redonda/globo122.png" ||
        f === "/img/game/caja redonda/globo123.png"
      ) {
        f = 300;
        document.getElementById("heliumswitch").innerHTML = "";
      }

      if (
        g === "/img/game/caja redonda/rosa1.png" ||
        g === "/img/game/caja redonda/rosa2.png" ||
        g === "/img/game/caja redonda/rosa3.png" ||
        g === "/img/game/caja redonda/rosa4.png" ||
        g === "/img/game/caja redonda/rosa5.png" ||
        g === "/img/game/caja redonda/rosa6.png" ||
        g === "/img/game/caja redonda/rosa7.png" ||
        g === "/img/game/caja redonda/cerveza.png"
      ) {
        g = 80;
      }
      
      if (
      h === "/img/game/caja redonda/girasoles.png" || 
      h === "/img/game/caja redonda/rositas.png"
      ) {
        h = 80;
      }
  
      objectsPrice = a + b + c + d + f + g + h;

    } else if (color.getAttribute("src").slice(0, 27) === "/img/game/caja rectangular/") {
      if (
        a === "/img/game/caja rectangular/color1.png" ||
        a === "/img/game/caja rectangular/color2.png" ||
        a === "/img/game/caja rectangular/color3.png" ||
        a === "/img/game/caja rectangular/color4.png" ||
        a === "/img/game/caja rectangular/color5.png" ||
        a === "/img/game/caja rectangular/color6.png" ||
        a === "/img/game/caja rectangular/color7.png" ||
        a === "/img/game/caja rectangular/color8.png" ||
        a === "/img/game/caja rectangular/color9.png") {
        a = 50;
      }

      if (
        b === "/img/game/caja rectangular/chongo1.png" ||
        b === "/img/game/caja rectangular/chongo2.png" ||
        b === "/img/game/caja rectangular/chongo3.png" ||
        b === "/img/game/caja rectangular/chongo4.png" ||
        b === "/img/game/caja rectangular/chongo5.png" ||
        b === "/img/game/caja rectangular/chongo6.png" ||
        b === "/img/game/caja rectangular/chongo7.png" ||
        b === "/img/game/caja rectangular/chongo8.png" ||
        b === "/img/game/caja rectangular/chongo9.png" ||
        b === "/img/game/caja rectangular/chongo10.png" ||
        b === "/img/game/caja rectangular/chongo11.png"
      ) {
        b = 20;
      }

      if (
        c === "/img/game/caja rectangular/relleno1.png" ||
        c === "/img/game/caja rectangular/relleno2.png" ||
        c === "/img/game/caja rectangular/relleno3.png" ||
        c === "/img/game/caja rectangular/relleno4.png" ||
        c === "/img/game/caja rectangular/relleno5.png" ||
        c === "/img/game/caja rectangular/relleno6.png" ||
        c === "/img/game/caja rectangular/relleno7.png" ||
        c === "/img/game/caja rectangular/relleno8.png" ||
        c === "/img/game/caja rectangular/relleno9.png"
      ) {
        c = 10;
      }

      if (
        d === "/img/game/caja rectangular/contenido1.png" ||
        d === "/img/game/caja rectangular/contenido2.png" ||
        d === "/img/game/caja rectangular/contenido3.png" ||
        d === "/img/game/caja rectangular/contenido4.png" ||
        d === "/img/game/caja rectangular/contenido5.png" ||
        d === "/img/game/caja rectangular/contenido6.png" ||
        d === "/img/game/caja rectangular/contenido7.png" ||
        d === "/img/game/caja rectangular/contenido8.png" ||
        d === "/img/game/caja rectangular/contenido9.png" ||
        d === "/img/game/caja rectangular/contenido10.png" ||
        d === "/img/game/caja rectangular/contenido11.png" ||
        d === "/img/game/caja rectangular/contenido12.png"
      ) {
        d = 80;
      } else if (
        d === "/img/game/caja rectangular/contenido13.png" ||
        d === "/img/game/caja rectangular/contenido14.png" ||
        d === "/img/game/caja rectangular/contenido15.png" ||
        d === "/img/game/caja rectangular/contenido16.png" ||
        d === "/img/game/caja rectangular/contenido17.png" ||
        d === "/img/game/caja rectangular/contenido18.png"
      ) {
        d = 70;
      }

      if (
        e === "/img/game/caja rectangular/florecita1.png" ||
        e === "/img/game/caja rectangular/florecita2.png" ||
        e === "/img/game/caja rectangular/florecita3.png" ||
        e === "/img/game/caja rectangular/florecita4.png" ||
        e === "/img/game/caja rectangular/florecita5.png" ||
        e === "/img/game/caja rectangular/florecita6.png" ||
        e === "/img/game/caja rectangular/florecita7.png" 
      ) {
        e = 10;
      }

      objectsPrice = a + b + c + d + e;
    } else if (color.getAttribute("src").slice(0, 24) === "/img/game/caja cuadrada/") {
      if (
        a === "/img/game/caja cuadrada/color1.png" ||
        a === "/img/game/caja cuadrada/color2.png" ||
        a === "/img/game/caja cuadrada/color3.png" ||
        a === "/img/game/caja cuadrada/color4.png" ||
        a === "/img/game/caja cuadrada/color5.png" ||
        a === "/img/game/caja cuadrada/color6.png" ||
        a === "/img/game/caja cuadrada/color7.png" ||
        a === "/img/game/caja cuadrada/color8.png" ||
        a === "/img/game/caja cuadrada/color9.png") {
        a = 90;
      }

      if (
        b === "/img/game/caja cuadrada/chongo1.png" ||
        b === "/img/game/caja cuadrada/chongo2.png" ||
        b === "/img/game/caja cuadrada/chongo3.png" ||
        b === "/img/game/caja cuadrada/chongo4.png" ||
        b === "/img/game/caja cuadrada/chongo5.png" ||
        b === "/img/game/caja cuadrada/chongo6.png" ||
        b === "/img/game/caja cuadrada/chongo7.png" ||
        b === "/img/game/caja cuadrada/chongo8.png" ||
        b === "/img/game/caja cuadrada/chongo9.png" ||
        b === "/img/game/caja cuadrada/chongo10.png" ||
        b === "/img/game/caja cuadrada/chongo11.png"
      ) {
        b = 20;
      }

      if (
        c === "/img/game/caja cuadrada/relleno1.png" ||
        c === "/img/game/caja cuadrada/relleno2.png" ||
        c === "/img/game/caja cuadrada/relleno3.png" ||
        c === "/img/game/caja cuadrada/relleno4.png" ||
        c === "/img/game/caja cuadrada/relleno5.png" ||
        c === "/img/game/caja cuadrada/relleno6.png" ||
        c === "/img/game/caja cuadrada/relleno7.png" ||
        c === "/img/game/caja cuadrada/relleno8.png" ||
        c === "/img/game/caja cuadrada/relleno9.png"
      ) {
        c = 10;
      }

      if (
        d === "/img/game/caja cuadrada/contenido1.png" ||
        d === "/img/game/caja cuadrada/contenido2.png" ||
        d === "/img/game/caja cuadrada/contenido3.png" ||
        d === "/img/game/caja cuadrada/contenido4.png" ||
        d === "/img/game/caja cuadrada/contenido5.png" ||
        d === "/img/game/caja cuadrada/contenido6.png" ||
        d === "/img/game/caja cuadrada/contenido7.png" ||
        d === "/img/game/caja cuadrada/contenido8.png" ||
        d === "/img/game/caja cuadrada/contenido9.png" ||
        d === "/img/game/caja cuadrada/contenido10.png" ||
        d === "/img/game/caja cuadrada/contenido11.png" ||
        d === "/img/game/caja cuadrada/contenido12.png"
      ) {
        d = 80;
      }

      if (
        f === "/img/game/caja cuadrada/globo1.png" ||
        f === "/img/game/caja cuadrada/globo2.png" ||
        f === "/img/game/caja cuadrada/globo3.png" ||
        f === "/img/game/caja cuadrada/globo4.png" ||
        f === "/img/game/caja cuadrada/globo5.png" ||
        f === "/img/game/caja cuadrada/globo6.png" ||
        f === "/img/game/caja cuadrada/globo7.png" ||
        f === "/img/game/caja cuadrada/globo8.png" ||
        f === "/img/game/caja cuadrada/globo9.png" ||
        f === "/img/game/caja cuadrada/globo10.png" ||
        f === "/img/game/caja cuadrada/globo11.png" ||
        f === "/img/game/caja cuadrada/globo12.png" ||
        f === "/img/game/caja cuadrada/globo13.png" ||
        f === "/img/game/caja cuadrada/globo14.png" ||
        f === "/img/game/caja cuadrada/globo15.png" ||
        f === "/img/game/caja cuadrada/globo16.png" ||
        f === "/img/game/caja cuadrada/globo17.png" ||
        f === "/img/game/caja cuadrada/globo18.png" ||
        f === "/img/game/caja cuadrada/globo19.png" ||
        f === "/img/game/caja cuadrada/globo20.png" ||
        f === "/img/game/caja cuadrada/globo21.png" ||
        f === "/img/game/caja cuadrada/globo22.png" ||
        f === "/img/game/caja cuadrada/globo23.png" ||
        f === "/img/game/caja cuadrada/globo24.png" ||
        f === "/img/game/caja cuadrada/globo25.png" ||
        f === "/img/game/caja cuadrada/globo26.png" ||
        f === "/img/game/caja cuadrada/globo27.png" ||
        f === "/img/game/caja cuadrada/globo28.png" ||
        f === "/img/game/caja cuadrada/globo29.png" ||
        f === "/img/game/caja cuadrada/globo30.png" ||
        f === "/img/game/caja cuadrada/globo31.png" ||
        f === "/img/game/caja cuadrada/globo32.png" ||
        f === "/img/game/caja cuadrada/globo33.png" 
      ) {
        f = 40;
      }

      if (
        g === "/img/game/caja cuadrada/rosa1.png" ||
        g === "/img/game/caja cuadrada/rosa2.png" ||
        g === "/img/game/caja cuadrada/rosa3.png" ||
        g === "/img/game/caja cuadrada/rosa4.png" ||
        g === "/img/game/caja cuadrada/rosa5.png" ||
        g === "/img/game/caja cuadrada/rosa6.png" ||
        g === "/img/game/caja cuadrada/rosa7.png" ||
        g === "/img/game/caja cuadrada/cerveza.png"
      ) {
        g = 80;
      }

      objectsPrice = a + b + c + d + f + g;
    } else if (color.getAttribute("src").slice(0, 32) === "/img/game/caja corazon pequenia/") {
      if (
        a === "/img/game/caja corazon pequenia/color1.png" ||
        a === "/img/game/caja corazon pequenia/color2.png" ||
        a === "/img/game/caja corazon pequenia/color3.png" ||
        a === "/img/game/caja corazon pequenia/color4.png" ||
        a === "/img/game/caja corazon pequenia/color5.png" ||
        a === "/img/game/caja corazon pequenia/color6.png" ||
        a === "/img/game/caja corazon pequenia/color7.png" ||
        a === "/img/game/caja corazon pequenia/color8.png" ||
        a === "/img/game/caja corazon pequenia/color9.png") {
        a = 90;
      }

      if (
        b === "/img/game/caja corazon pequenia/chongo1.png" ||
        b === "/img/game/caja corazon pequenia/chongo2.png" ||
        b === "/img/game/caja corazon pequenia/chongo3.png" ||
        b === "/img/game/caja corazon pequenia/chongo4.png" ||
        b === "/img/game/caja corazon pequenia/chongo5.png" ||
        b === "/img/game/caja corazon pequenia/chongo6.png" ||
        b === "/img/game/caja corazon pequenia/chongo7.png" ||
        b === "/img/game/caja corazon pequenia/chongo8.png" ||
        b === "/img/game/caja corazon pequenia/chongo9.png" ||
        b === "/img/game/caja corazon pequenia/chongo11.png" ||
        b === "/img/game/caja corazon pequenia/chongo12.png" ||
        b === "/img/game/caja corazon pequenia/chongo13.png" ||
        b === "/img/game/caja corazon pequenia/chongo14.png" ||
        b === "/img/game/caja corazon pequenia/chongo15.png" ||
        b === "/img/game/caja corazon pequenia/chongo16.png" ||
        b === "/img/game/caja corazon pequenia/chongo17.png" ||
        b === "/img/game/caja corazon pequenia/chongo18.png" ||
        b === "/img/game/caja corazon pequenia/chongo19.png" ||
        b === "/img/game/caja corazon pequenia/chongo20.png" ||
        b === "/img/game/caja corazon pequenia/chongo21.png" ||
        b === "/img/game/caja corazon pequenia/chongo22.png" ||
        b === "/img/game/caja corazon pequenia/chongo23.png" ||
        b === "/img/game/caja corazon pequenia/chongo24.png" ||
        b === "/img/game/caja corazon pequenia/chongo25.png" ||
        b === "/img/game/caja corazon pequenia/chongo26.png" ||
        b === "/img/game/caja corazon pequenia/chongo27.png" ||
        b === "/img/game/caja corazon pequenia/chongo28.png" ||
        b === "/img/game/caja corazon pequenia/chongo29.png" ||
        b === "/img/game/caja corazon pequenia/chongo30.png" ||
        b === "/img/game/caja corazon pequenia/chongo31.png" ||
        b === "/img/game/caja corazon pequenia/chongo32.png" ||
        b === "/img/game/caja corazon pequenia/chongo33.png" ||
        b === "/img/game/caja corazon pequenia/chongo34.png" ||
        b === "/img/game/caja corazon pequenia/chongo35.png" ||
        b === "/img/game/caja corazon pequenia/chongo36.png" ||
        b === "/img/game/caja corazon pequenia/chongo37.png" ||
        b === "/img/game/caja corazon pequenia/chongo38.png" ||
        b === "/img/game/caja corazon pequenia/chongo39.png" ||
        b === "/img/game/caja corazon pequenia/chongo40.png" ||
        b === "/img/game/caja corazon pequenia/chongo41.png" ||
        b === "/img/game/caja corazon pequenia/chongo42.png" ||
        b === "/img/game/caja corazon pequenia/chongo43.png" ||
        b === "/img/game/caja corazon pequenia/chongo44.png" ||
        b === "/img/game/caja corazon pequenia/chongo45.png" ||
        b === "/img/game/caja corazon pequenia/chongo46.png" ||
        b === "/img/game/caja corazon pequenia/chongo47.png" ||
        b === "/img/game/caja corazon pequenia/chongo48.png" ||
        b === "/img/game/caja corazon pequenia/chongo49.png" ||
        b === "/img/game/caja corazon pequenia/chongo50.png" ||
        b === "/img/game/caja corazon pequenia/chongo51.png" ||
        b === "/img/game/caja corazon pequenia/chongo52.png" ||
        b === "/img/game/caja corazon pequenia/chongo53.png" ||
        b === "/img/game/caja corazon pequenia/chongo54.png" ||
        b === "/img/game/caja corazon pequenia/chongo55.png" ||
        b === "/img/game/caja corazon pequenia/chongo56.png" ||
        b === "/img/game/caja corazon pequenia/chongo57.png" ||
        b === "/img/game/caja corazon pequenia/chongo58.png" ||
        b === "/img/game/caja corazon pequenia/chongo59.png" ||
        b === "/img/game/caja corazon pequenia/chongo60.png" ||
        b === "/img/game/caja corazon pequenia/chongo61.png" ||
        b === "/img/game/caja corazon pequenia/chongo62.png" ||
        b === "/img/game/caja corazon pequenia/chongo63.png" ||
        b === "/img/game/caja corazon pequenia/chongo64.png" ||
        b === "/img/game/caja corazon pequenia/chongo65.png" ||
        b === "/img/game/caja corazon pequenia/chongo66.png"
      ) {
        b = 20;
      }

      if (
        c === "/img/game/caja corazon pequenia/relleno1.png" ||
        c === "/img/game/caja corazon pequenia/relleno2.png" ||
        c === "/img/game/caja corazon pequenia/relleno3.png" ||
        c === "/img/game/caja corazon pequenia/relleno4.png" ||
        c === "/img/game/caja corazon pequenia/relleno5.png" ||
        c === "/img/game/caja corazon pequenia/relleno6.png" ||
        c === "/img/game/caja corazon pequenia/relleno7.png" ||
        c === "/img/game/caja corazon pequenia/relleno8.png" ||
        c === "/img/game/caja corazon pequenia/relleno9.png"
      ) {
        c = 10;
      }

      if (
        d === "/img/game/caja corazon pequenia/contenido1.png" ||
        d === "/img/game/caja corazon pequenia/contenido2.png" ||
        d === "/img/game/caja corazon pequenia/contenido3.png" ||
        d === "/img/game/caja corazon pequenia/contenido4.png" ||
        d === "/img/game/caja corazon pequenia/contenido5.png" ||
        d === "/img/game/caja corazon pequenia/contenido6.png" ||
        d === "/img/game/caja corazon pequenia/contenido7.png" ||
        d === "/img/game/caja corazon pequenia/contenido8.png" ||
        d === "/img/game/caja corazon pequenia/contenido9.png" ||
        d === "/img/game/caja corazon pequenia/contenido10.png" ||
        d === "/img/game/caja corazon pequenia/contenido11.png" ||
        d === "/img/game/caja corazon pequenia/contenido12.png"
      ) {
        d = 120;
      }

      if (
        f === "/img/game/caja corazon pequenia/globo1.png" ||
        f === "/img/game/caja corazon pequenia/globo2.png" ||
        f === "/img/game/caja corazon pequenia/globo3.png" ||
        f === "/img/game/caja corazon pequenia/globo4.png" ||
        f === "/img/game/caja corazon pequenia/globo5.png" ||
        f === "/img/game/caja corazon pequenia/globo6.png" ||
        f === "/img/game/caja corazon pequenia/globo7.png" ||
        f === "/img/game/caja corazon pequenia/globo8.png" ||
        f === "/img/game/caja corazon pequenia/globo9.png" ||
        f === "/img/game/caja corazon pequenia/globo10.png" ||
        f === "/img/game/caja corazon pequenia/globo11.png" ||
        f === "/img/game/caja corazon pequenia/globo12.png" ||
        f === "/img/game/caja corazon pequenia/globo13.png" ||
        f === "/img/game/caja corazon pequenia/globo14.png" ||
        f === "/img/game/caja corazon pequenia/globo15.png" ||
        f === "/img/game/caja corazon pequenia/globo16.png" ||
        f === "/img/game/caja corazon pequenia/globo17.png" ||
        f === "/img/game/caja corazon pequenia/globo18.png" ||
        f === "/img/game/caja corazon pequenia/globo19.png" ||
        f === "/img/game/caja corazon pequenia/globo20.png" ||
        f === "/img/game/caja corazon pequenia/globo21.png" ||
        f === "/img/game/caja corazon pequenia/globo22.png" ||
        f === "/img/game/caja corazon pequenia/globo23.png" ||
        f === "/img/game/caja corazon pequenia/globo24.png" ||
        f === "/img/game/caja corazon pequenia/globo25.png" ||
        f === "/img/game/caja corazon pequenia/globo26.png" ||
        f === "/img/game/caja corazon pequenia/globo27.png" ||
        f === "/img/game/caja corazon pequenia/globo28.png" ||
        f === "/img/game/caja corazon pequenia/globo29.png" ||
        f === "/img/game/caja corazon pequenia/globo30.png" ||
        f === "/img/game/caja corazon pequenia/globo31.png" ||
        f === "/img/game/caja corazon pequenia/globo32.png" ||
        f === "/img/game/caja corazon pequenia/globo33.png" 
      ) {
        f = 40;
      }

      objectsPrice = a + b + c + d + f;
    } else if (color.getAttribute("src").slice(0, 30) === "/img/game/caja corazon grande/") {
      if (
        a === "/img/game/caja corazon grande/color1.png" ||
        a === "/img/game/caja corazon grande/color2.png" ||
        a === "/img/game/caja corazon grande/color3.png" ||
        a === "/img/game/caja corazon grande/color4.png" ||
        a === "/img/game/caja corazon grande/color5.png" ||
        a === "/img/game/caja corazon grande/color6.png" ||
        a === "/img/game/caja corazon grande/color7.png" ||
        a === "/img/game/caja corazon grande/color8.png" ||
        a === "/img/game/caja corazon grande/color9.png") {
        a = 170;
      }

      if (
        b === "/img/game/caja corazon grande/chongo1.png" ||
        b === "/img/game/caja corazon grande/chongo2.png" ||
        b === "/img/game/caja corazon grande/chongo3.png" ||
        b === "/img/game/caja corazon grande/chongo4.png" ||
        b === "/img/game/caja corazon grande/chongo5.png" ||
        b === "/img/game/caja corazon grande/chongo6.png" ||
        b === "/img/game/caja corazon grande/chongo7.png" ||
        b === "/img/game/caja corazon grande/chongo8.png" ||
        b === "/img/game/caja corazon grande/chongo9.png" ||
        b === "/img/game/caja corazon grande/chongo10.png" ||
        b === "/img/game/caja corazon grande/chongo11.png" ||
        b === "/img/game/caja corazon grande/chongo12.png" ||
        b === "/img/game/caja corazon grande/chongo13.png" ||
        b === "/img/game/caja corazon grande/chongo14.png" ||
        b === "/img/game/caja corazon grande/chongo15.png" ||
        b === "/img/game/caja corazon grande/chongo16.png" ||
        b === "/img/game/caja corazon grande/chongo17.png" ||
        b === "/img/game/caja corazon grande/chongo18.png" ||
        b === "/img/game/caja corazon grande/chongo19.png" ||
        b === "/img/game/caja corazon grande/chongo20.png" ||
        b === "/img/game/caja corazon grande/chongo21.png" ||
        b === "/img/game/caja corazon grande/chongo22.png" ||
        b === "/img/game/caja corazon grande/chongo23.png" ||
        b === "/img/game/caja corazon grande/chongo24.png" ||
        b === "/img/game/caja corazon grande/chongo25.png" ||
        b === "/img/game/caja corazon grande/chongo26.png" ||
        b === "/img/game/caja corazon grande/chongo27.png" ||
        b === "/img/game/caja corazon grande/chongo28.png" ||
        b === "/img/game/caja corazon grande/chongo29.png" ||
        b === "/img/game/caja corazon grande/chongo30.png" ||
        b === "/img/game/caja corazon grande/chongo31.png" ||
        b === "/img/game/caja corazon grande/chongo32.png" ||
        b === "/img/game/caja corazon grande/chongo33.png" ||
        b === "/img/game/caja corazon grande/chongo34.png" ||
        b === "/img/game/caja corazon grande/chongo35.png" ||
        b === "/img/game/caja corazon grande/chongo36.png" ||
        b === "/img/game/caja corazon grande/chongo37.png" ||
        b === "/img/game/caja corazon grande/chongo38.png" ||
        b === "/img/game/caja corazon grande/chongo39.png" ||
        b === "/img/game/caja corazon grande/chongo40.png" ||
        b === "/img/game/caja corazon grande/chongo41.png" ||
        b === "/img/game/caja corazon grande/chongo42.png" ||
        b === "/img/game/caja corazon grande/chongo43.png" ||
        b === "/img/game/caja corazon grande/chongo44.png" ||
        b === "/img/game/caja corazon grande/chongo45.png" ||
        b === "/img/game/caja corazon grande/chongo46.png" ||
        b === "/img/game/caja corazon grande/chongo47.png" ||
        b === "/img/game/caja corazon grande/chongo48.png" ||
        b === "/img/game/caja corazon grande/chongo49.png" ||
        b === "/img/game/caja corazon grande/chongo50.png" ||
        b === "/img/game/caja corazon grande/chongo51.png" ||
        b === "/img/game/caja corazon grande/chongo52.png" ||
        b === "/img/game/caja corazon grande/chongo53.png" ||
        b === "/img/game/caja corazon grande/chongo54.png" ||
        b === "/img/game/caja corazon grande/chongo55.png" ||
        b === "/img/game/caja corazon grande/chongo56.png" ||
        b === "/img/game/caja corazon grande/chongo57.png" ||
        b === "/img/game/caja corazon grande/chongo58.png" ||
        b === "/img/game/caja corazon grande/chongo59.png" ||
        b === "/img/game/caja corazon grande/chongo60.png" ||
        b === "/img/game/caja corazon grande/chongo61.png" ||
        b === "/img/game/caja corazon grande/chongo62.png" ||
        b === "/img/game/caja corazon grande/chongo63.png" ||
        b === "/img/game/caja corazon grande/chongo64.png" ||
        b === "/img/game/caja corazon grande/chongo65.png" ||
        b === "/img/game/caja corazon grande/chongo66.png"
      ) {
        b = 20;
      }

      if (
        c === "/img/game/caja corazon grande/relleno1.png" ||
        c === "/img/game/caja corazon grande/relleno2.png" ||
        c === "/img/game/caja corazon grande/relleno3.png" ||
        c === "/img/game/caja corazon grande/relleno4.png" ||
        c === "/img/game/caja corazon grande/relleno5.png" ||
        c === "/img/game/caja corazon grande/relleno6.png" ||
        c === "/img/game/caja corazon grande/relleno7.png" ||
        c === "/img/game/caja corazon grande/relleno8.png" ||
        c === "/img/game/caja corazon grande/relleno9.png"
      ) {
        c = 10;
      }

      if (
        d === "/img/game/caja corazon grande/contenido1.png" ||
        d === "/img/game/caja corazon grande/contenido2.png" ||
        d === "/img/game/caja corazon grande/contenido3.png" ||
        d === "/img/game/caja corazon grande/contenido4.png" ||
        d === "/img/game/caja corazon grande/contenido5.png" ||
        d === "/img/game/caja corazon grande/contenido6.png" ||
        d === "/img/game/caja corazon grande/contenido7.png" ||
        d === "/img/game/caja corazon grande/contenido8.png" ||
        d === "/img/game/caja corazon grande/contenido9.png" ||
        d === "/img/game/caja corazon grande/contenido10.png" ||
        d === "/img/game/caja corazon grande/contenido11.png" ||
        d === "/img/game/caja corazon grande/contenido12.png"
      ) {
        d = 240;
      }

      if (
        f === "/img/game/caja corazon grande/globo1.png" ||
        f === "/img/game/caja corazon grande/globo2.png" ||
        f === "/img/game/caja corazon grande/globo3.png" ||
        f === "/img/game/caja corazon grande/globo4.png" ||
        f === "/img/game/caja corazon grande/globo5.png" ||
        f === "/img/game/caja corazon grande/globo6.png" ||
        f === "/img/game/caja corazon grande/globo7.png" ||
        f === "/img/game/caja corazon grande/globo8.png" ||
        f === "/img/game/caja corazon grande/globo9.png" ||
        f === "/img/game/caja corazon grande/globo10.png" ||
        f === "/img/game/caja corazon grande/globo11.png" ||
        f === "/img/game/caja corazon grande/globo12.png"
      ) {
        f = 50;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (
        f === "/img/game/caja corazon grande/globo13.png" ||
        f === "/img/game/caja corazon grande/globo14.png" ||
        f === "/img/game/caja corazon grande/globo15.png" ||
        f === "/img/game/caja corazon grande/globo16.png" ||
        f === "/img/game/caja corazon grande/globo17.png" ||
        f === "/img/game/caja corazon grande/globo18.png" ||
        f === "/img/game/caja corazon grande/globo19.png" ||
        f === "/img/game/caja corazon grande/globo20.png" ||
        f === "/img/game/caja corazon grande/globo21.png" ||
        f === "/img/game/caja corazon grande/globo22.png" ||
        f === "/img/game/caja corazon grande/globo23.png" ||
        f === "/img/game/caja corazon grande/globo24.png" ||
        f === "/img/game/caja corazon grande/globo25.png" ||
        f === "/img/game/caja corazon grande/globo26.png" ||
        f === "/img/game/caja corazon grande/globo27.png" ||
        f === "/img/game/caja corazon grande/globo28.png" ||
        f === "/img/game/caja corazon grande/globo29.png" ||
        f === "/img/game/caja corazon grande/globo30.png" ||
        f === "/img/game/caja corazon grande/globo31.png" ||
        f === "/img/game/caja corazon grande/globo32.png" ||
        f === "/img/game/caja corazon grande/globo33.png" ||
        f === "/img/game/caja corazon grande/globo34.png" ||
        f === "/img/game/caja corazon grande/globo35.png" ||
        f === "/img/game/caja corazon grande/globo36.png" ||
        f === "/img/game/caja corazon grande/globo37.png" ||
        f === "/img/game/caja corazon grande/globo38.png" ||
        f === "/img/game/caja corazon grande/globo39.png" ||
        f === "/img/game/caja corazon grande/globo40.png" ||
        f === "/img/game/caja corazon grande/globo41.png" ||
        f === "/img/game/caja corazon grande/globo42.png" ||
        f === "/img/game/caja corazon grande/globo43.png" ||
        f === "/img/game/caja corazon grande/globo44.png" ||
        f === "/img/game/caja corazon grande/globo45.png" ||
        f === "/img/game/caja corazon grande/globo46.png" ||
        f === "/img/game/caja corazon grande/globo47.png" ||
        f === "/img/game/caja corazon grande/globo48.png" ||
        f === "/img/game/caja corazon grande/globo49.png" ||
        f === "/img/game/caja corazon grande/globo50.png" ||
        f === "/img/game/caja corazon grande/globo51.png" ||
        f === "/img/game/caja corazon grande/globo52.png" ||
        f === "/img/game/caja corazon grande/globo53.png" ||
        f === "/img/game/caja corazon grande/globo54.png" ||
        f === "/img/game/caja corazon grande/globo55.png" ||
        f === "/img/game/caja corazon grande/globo56.png" ||
        f === "/img/game/caja corazon grande/globo57.png" ||
        f === "/img/game/caja corazon grande/globo58.png" ||
        f === "/img/game/caja corazon grande/globo59.png" ||
        f === "/img/game/caja corazon grande/globo60.png" ||
        f === "/img/game/caja corazon grande/globo61.png" ||
        f === "/img/game/caja corazon grande/globo62.png" ||
        f === "/img/game/caja corazon grande/globo63.png" ||
        f === "/img/game/caja corazon grande/globo64.png" ||
        f === "/img/game/caja corazon grande/globo65.png" ||
        f === "/img/game/caja corazon grande/globo66.png" ||
        f === "/img/game/caja corazon grande/globo67.png" ||
        f === "/img/game/caja corazon grande/globo68.png" ||
        f === "/img/game/caja corazon grande/globo69.png" ||
        f === "/img/game/caja corazon grande/globo70.png" ||
        f === "/img/game/caja corazon grande/globo71.png" ||
        f === "/img/game/caja corazon grande/globo72.png" ||
        f === "/img/game/caja corazon grande/globo73.png" ||
        f === "/img/game/caja corazon grande/globo74.png" ||
        f === "/img/game/caja corazon grande/globo75.png" ||
        f === "/img/game/caja corazon grande/globo76.png" ||
        f === "/img/game/caja corazon grande/globo77.png" ||
        f === "/img/game/caja corazon grande/globo78.png" ||
        f === "/img/game/caja corazon grande/globo79.png" ||
        f === "/img/game/caja corazon grande/globo80.png" ||
        f === "/img/game/caja corazon grande/globo81.png" ||
        f === "/img/game/caja corazon grande/globo82.png" ||
        f === "/img/game/caja corazon grande/globo83.png" ||
        f === "/img/game/caja corazon grande/globo84.png" ||
        f === "/img/game/caja corazon grande/globo85.png" ||
        f === "/img/game/caja corazon grande/globo86.png"
      ) {
        f = 100;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (f === "/img/game/caja corazon grande/globo87.png") {
        f = 150;
        document.getElementById("heliumswitch").innerHTML = "";
      } else if (
        f === "/img/game/caja corazon grande/globo88.png" ||
        f === "/img/game/caja corazon grande/globo89.png" ||
        f === "/img/game/caja corazon grande/globo90.png" ||
        f === "/img/game/caja corazon grande/globo91.png" ||
        f === "/img/game/caja corazon grande/globo92.png" ||
        f === "/img/game/caja corazon grande/globo93.png" ||
        f === "/img/game/caja corazon grande/globo94.png" ||
        f === "/img/game/caja corazon grande/globo95.png" ||
        f === "/img/game/caja corazon grande/globo96.png" ||
        f === "/img/game/caja corazon grande/globo97.png" ||
        f === "/img/game/caja corazon grande/globo98.png" ||
        f === "/img/game/caja corazon grande/globo99.png" ||
        f === "/img/game/caja corazon grande/globo100.png" ||
        f === "/img/game/caja corazon grande/globo101.png" ||
        f === "/img/game/caja corazon grande/globo102.png" ||
        f === "/img/game/caja corazon grande/globo103.png" ||
        f === "/img/game/caja corazon grande/globo104.png" ||
        f === "/img/game/caja corazon grande/globo105.png" ||
        f === "/img/game/caja corazon grande/globo106.png" ||
        f === "/img/game/caja corazon grande/globo107.png" ||
        f === "/img/game/caja corazon grande/globo108.png" ||
        f === "/img/game/caja corazon grande/globo109.png" ||
        f === "/img/game/caja corazon grande/globo111.png" ||
        f === "/img/game/caja corazon grande/globo112.png" ||
        f === "/img/game/caja corazon grande/globo113.png" ||
        f === "/img/game/caja corazon grande/globo114.png" ||
        f === "/img/game/caja corazon grande/globo115.png" ||
        f === "/img/game/caja corazon grande/globo116.png" ||
        f === "/img/game/caja corazon grande/globo117.png" ||
        f === "/img/game/caja corazon grande/globo118.png" ||
        f === "/img/game/caja corazon grande/globo119.png" ||
        f === "/img/game/caja corazon grande/globo120.png" ||
        f === "/img/game/caja corazon grande/globo121.png"
      ) {
        f = 150;
        document.getElementById("heliumswitch").setAttribute("display", "");
        document.getElementById("heliumswitch").innerHTML = `
                <div class="primary-switch m-1" data-tooltip="El globo inflado con aire se colocará junto a la tapa. No flotará.">
                      <input type="checkbox" id="switch2" onchange="airballoons()">
                      <label for="switch2"></label>
                </div>
                <h4 class="text-white ml-5">Prefiero este globo inflado con aire</h4>
                `;
      } else if (
        f === "/img/game/caja corazon grande/globo110.png" ||
        f === "/img/game/caja corazon grande/globo122.png" ||
        f === "/img/game/caja corazon grande/globo123.png"
      ) {
        f = 300;
        document.getElementById("heliumswitch").innerHTML = "";
      }

      if (
        g === "/img/game/caja corazon grande/rosa1.png" ||
        g === "/img/game/caja corazon grande/rosa2.png" ||
        g === "/img/game/caja corazon grande/rosa3.png" ||
        g === "/img/game/caja corazon grande/rosa4.png" ||
        g === "/img/game/caja corazon grande/rosa5.png" ||
        g === "/img/game/caja corazon grande/rosa6.png" ||
        g === "/img/game/caja corazon grande/rosa7.png" ||
        g === "/img/game/caja corazon grande/cerveza.png"
      ) {
        g = 80;
      }

      objectsPrice = a + b + c + d + f + g;
    }

    document.getElementById("price").innerHTML = objectsPrice;

    });
}

function airballoons() {
  var switch2 = document.getElementById("switch2");

  if (switch2) {
    if (switch2.checked) {
      objectsPrice = objectsPrice - 110;
    } else{
      objectsPrice = objectsPrice + 110;
    }
  }
  document.getElementById("price").innerHTML = objectsPrice;
}

//Evento para deshabilitar botones
const disableButton = document.querySelectorAll('#nextbox, #nextcolor, #previouschongo, #nextchongo, #addsunflowers, #nextfilling, #nextcontent, #nextlittleflower, #previousballoon, #nextballoon, #nextrose');
for (let i = 0; i < disableButton.length; i++) {
  disableButton[i].addEventListener('click', ()=>{
    var color = document.getElementById("color").getAttribute("src");
    var colorButton = document.getElementById("nextcolor");
    var chongo = document.getElementById("chongo").getAttribute("src");
    var chongoButton1 = document.getElementById("previouschongo");
    var chongoButton2 = document.getElementById("nextchongo");
    var sunflowersButton = document.getElementById("addsunflowers");
    var filling = document.getElementById("filling").getAttribute("src");
    var fillingButton = document.getElementById("nextfilling");
    var content = document.getElementById("content").getAttribute("src");
    var contentButton = document.getElementById("nextcontent");
    var littleflowersButton = document.getElementById("nextlittleflower");
    var balloonButton1 = document.getElementById("previousballoon");
    var balloonButton2 = document.getElementById("nextballoon");
    var spanbutton1 = document.getElementById("spanbutton1");
    var spanbutton2 = document.getElementById("spanbutton2");
    var roseButton = document.getElementById("nextrose");

    //console.log(colorButton.getAttribute("src"))
    if (color === "") {
      colorButton.setAttribute("class", "bg-button disabled");
      chongoButton1.setAttribute("class", "disabled");
      chongoButton2.setAttribute("class", "disabled");
      sunflowersButton.setAttribute("class", "bg-button disabled");
      fillingButton.setAttribute("class", "bg-button disabled");
      contentButton.setAttribute("class", "bg-button disabled");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }else if(color !== ""){
      colorButton.removeAttribute("class");
      colorButton.setAttribute("class","bg-button");
      chongoButton1.removeAttribute("class");
      chongoButton1.setAttribute("class","btn btn-link text-white");
      chongoButton2.removeAttribute("class");
      chongoButton2.setAttribute("class","btn btn-link text-white");
      //chongoButton2.removeAttribute("class");
      //chongoButton2.setAttribute("class","bg-button");
      sunflowersButton.setAttribute("class", "bg-button disabled");
      fillingButton.setAttribute("class", "bg-button disabled");
      contentButton.setAttribute("class", "bg-button disabled");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      spanbutton1.setAttribute("class","bg-button");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }

    if (chongo === "" || chongo === null) {
      sunflowersButton.setAttribute("class", "bg-button disabled");
      fillingButton.setAttribute("class", "bg-button disabled");
      contentButton.setAttribute("class", "bg-button disabled");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      //spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }else if(chongo !== "" || chongo !== null){
      sunflowersButton.removeAttribute("class");
      sunflowersButton.setAttribute("class","bg-button");
      fillingButton.removeAttribute("class");
      fillingButton.setAttribute("class","bg-button");
      contentButton.setAttribute("class", "bg-button disabled");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      //spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }

    if (filling === "" || filling === null) {
      contentButton.setAttribute("class", "bg-button disabled");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      //spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }else if(filling !== "" || filling !== null){
      contentButton.removeAttribute("class");
      contentButton.setAttribute("class","bg-button");
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      //spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }

    if (content === "" || content === null) {
      littleflowersButton.setAttribute("class", "bg-button disabled");
      balloonButton1.setAttribute("class", "disabled");
      balloonButton2.setAttribute("class", "disabled");
      //spanbutton1.setAttribute("class","bg-button disabled");
      spanbutton2.setAttribute("class","bg-button disabled");
      roseButton.setAttribute("class", "bg-button disabled");
    }else if(content !== "" || content !== null){
      littleflowersButton.removeAttribute("class");
      littleflowersButton.setAttribute("class","bg-button");
      balloonButton1.removeAttribute("class");
      balloonButton1.setAttribute("class","btn btn-link text-white");
      balloonButton2.removeAttribute("class");
      balloonButton2.setAttribute("class","btn btn-link text-white");
      spanbutton1.removeAttribute("class");
      spanbutton1.setAttribute("class","bg-button no-pointer")
      spanbutton2.removeAttribute("class");
      spanbutton2.setAttribute("class","bg-button no-pointer")
      roseButton.removeAttribute("class");
      roseButton.setAttribute("class","bg-button");
    }
  });
}

/*Evento para deshabilitar screenshot*/
const makeOrder = document.getElementById("makeorder");
makeOrder.addEventListener('mouseover', ()=> {
  var color = document.getElementById("color").getAttribute("src");
  var chongo = document.getElementById("chongo").getAttribute("src");
  var filling = document.getElementById("filling").getAttribute("src");
  var content = document.getElementById("content").getAttribute("src");

  //console.log(color.getAttribute("src"))
  if (color === "" || color === null || chongo === "" || chongo === null || filling === "" || filling === null || content === "" || content === null) {
    makeOrder.setAttribute("onclick", "return false");
    makeOrder.setAttribute("style", "cursor: not-allowed;");
    makeOrder.setAttribute(
      "data-tooltip",
      "Debe incluir los requisitos mínimos (caja, chongo, relleno y contenido) de un regalo para poder descargar su captura."
    );
  } else {
    makeOrder.removeAttribute("style");
    makeOrder.removeAttribute("data-tooltip");
    makeOrder.setAttribute("onclick", "takeScreenShot()");
    $('#makeorder').click(function() {
      takeScreenShot('imagen', 'imagen.png');
    });
  }
});

/*Evento para check del envío*/
const shipping = document.getElementById("switch1");
shipping.addEventListener('change', ()=> {
  if (shipping.checked) {
    document.getElementById("shipping").innerHTML = "&nbsp;+ Envío";
  } else {
    document.getElementById("shipping").innerHTML = "";
  }
});

window.takeScreenShot = function(canvasId, filename) {

  var domElement = document.getElementById(canvasId);

  // Utilizando la función html2canvas para hacer la conversión
  html2canvas(domElement, {
      onrendered: function(domElementCanvas) {
          // Obteniendo el contexto del canvas ya generado
          var context = domElementCanvas.getContext('2d');

          // Creando enlace para descargar la imagen generada
          var link = document.createElement('a');
          link.href = domElementCanvas.toDataURL("image/jpeg");
          link.download = filename;

          // Chequeando para browsers más viejos
          if (document.createEvent) {
              var event = document.createEvent('MouseEvents');
              // Simulando clic para descargar
              event.initMouseEvent("click", true, true, window, 0,
                  0, 0, 0, 0,
                  false, false, false, false,
                  0, null);
              link.dispatchEvent(event);
          } else {
              // Simulando clic para descargar
              link.click();
          }
      }
  });
  
};



/*Titulo de la pestaña */
var tituloOriginal = document.title; // Lo guardamos para restablecerlo
window.onblur = function(){ // Si el usuario se va a otro lado
  document.title = "Hey, vuelve!";
}

window.onfocus = function(){
  document.title = tituloOriginal;
}

/* Tooltip image */
$(function() {
  $('input').hover(function() {
    var url = $('input').attr('value');
    $('img').attr('src', url);
    $('img').css('display', 'block');
  }, function() {
    $('img').css('display', 'none');
  });
});


// function downloadCanvas(canvasId, filename) {
//   // Obteniendo la etiqueta la cual se desea convertir en imagen
//   var domElement = document.getElementById(canvasId);

//   // Utilizando la función html2canvas para hacer la conversión
//   html2canvas(domElement, {
//       onrendered: function(domElementCanvas) {
//           // Obteniendo el contexto del canvas ya generado
//           var context = domElementCanvas.getContext('2d');

//           // Creando enlace para descargar la imagen generada
//           var link = document.createElement('a');
//           link.href = domElementCanvas.toDataURL("image/jpeg");
//           link.download = filename;

//           // Chequeando para browsers más viejos
//           if (document.createEvent) {
//               var event = document.createEvent('MouseEvents');
//               // Simulando clic para descargar
//               event.initMouseEvent("click", true, true, window, 0,
//                   0, 0, 0, 0,
//                   false, false, false, false,
//                   0, null);
//               link.dispatchEvent(event);
//           } else {
//               // Simulando clic para descargar
//               link.click();
//           }
//       }
//   });
// }

// // Haciendo la conversión y descarga de la imagen al presionar el botón
// $('#makeorder').click(function() {
//   downloadCanvas('imagen', 'imagen.png');
// });