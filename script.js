// let startx = document.querySelector(".startx");
// let starty = document.querySelector(".starty");
// let endx = document.querySelector(".endx");
// let endy = document.querySelector(".endy");
// let a = document.querySelector(".a");
// let e = document.querySelector(".e");
// let i = document.querySelector(".i");
// let g = document.querySelector(".g");

let startx;
let starty;
let endx;
let endy;
let a;
let e;
let i;
let g;
let length;
let cos;
let sin;

const getLocal = () => {
  length = Math.sqrt((endx - startx) ** 2 + (endy - starty) ** 2);

  if (document.getElementById("truss").checked) {
    i = 0;
  }

  document.querySelector(".l11").innerHTML =
    Math.round(((e * a) / length) * 100) / 100;

  document.querySelector(".l14").innerHTML =
    Math.round((-(e * a) / length) * 100) / 100;

  document.querySelector(".l22").innerHTML =
    Math.round(((12 * (e * i)) / length ** 3) * 100) / 100;

  document.querySelector(".l23").innerHTML =
    Math.round(((6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l25").innerHTML =
    Math.round(((-12 * (e * i)) / length ** 3) * 100) / 100;

  document.querySelector(".l26").innerHTML =
    Math.round(((6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l32").innerHTML =
    Math.round(((6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l33").innerHTML =
    Math.round(((4 * (e * i)) / length) * 100) / 100;

  document.querySelector(".l35").innerHTML =
    Math.round(((-6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l36").innerHTML =
    Math.round(((2 * (e * i)) / length) * 100) / 100;

  document.querySelector(".l41").innerHTML =
    Math.round((-(e * a) / length) * 100) / 100;

  document.querySelector(".l44").innerHTML =
    Math.round(((e * a) / length) * 100) / 100;

  document.querySelector(".l52").innerHTML =
    Math.round(((-12 * (e * i)) / length ** 3) * 100) / 100;

  document.querySelector(".l53").innerHTML =
    Math.round(((-6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l55").innerHTML =
    Math.round(((12 * (e * i)) / length ** 3) * 100) / 100;

  document.querySelector(".l56").innerHTML =
    Math.round(((-6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l62").innerHTML =
    Math.round(((6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l63").innerHTML =
    Math.round(((2 * (e * i)) / length) * 100) / 100;

  document.querySelector(".l65").innerHTML =
    Math.round(((-6 * (e * i)) / length ** 2) * 100) / 100;

  document.querySelector(".l66").innerHTML =
    Math.round(((4 * (e * i)) / length) * 100) / 100;
};

const getRotation = () => {
  length = Math.sqrt((endx - startx) ** 2 + (endy - starty) ** 2);
  cos = (endx - startx) / length;
  sin = (endy - starty) / length;

  if (document.getElementById("truss").checked) {
    document.querySelector(".r33").innerHTML = 0;
    document.querySelector(".r66").innerHTML = 0;
  } else {
    document.querySelector(".r33").innerHTML = 1;
    document.querySelector(".r66").innerHTML = 1;
  }

  document.querySelector(".r11").innerHTML = parseFloat(cos);

  document.querySelector(".r12").innerHTML = parseFloat(sin);

  document.querySelector(".r21").innerHTML = parseFloat(-sin);

  document.querySelector(".r22").innerHTML = parseFloat(cos);

  document.querySelector(".r44").innerHTML = parseFloat(cos);

  document.querySelector(".r45").innerHTML = parseFloat(sin);

  document.querySelector(".r54").innerHTML = parseFloat(-sin);

  document.querySelector(".r55").innerHTML = parseFloat(cos);
};

let compute = document.querySelector(".compute");
compute.addEventListener("click", () => {
  startx = Number(document.getElementById("startx").value);
  starty = Number(document.getElementById("starty").value);
  endx = Number(document.getElementById("endx").value);
  endy = Number(document.getElementById("endy").value);
  a = Number(document.getElementById("a").value);
  e = Number(document.getElementById("e").value);
  i = Number(document.getElementById("i").value);
  g = Number(document.getElementById("g").value);

  getLocal();
  getRotation();
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  document.getElementById("startx").value = "";
  document.getElementById("starty").value = "";
  document.getElementById("endx").value = "";
  document.getElementById("endy").value = "";
  document.getElementById("a").value = "";
  document.getElementById("e").value = "";
  document.getElementById("i").value = "";
  document.getElementById("g").value = "";
  document.getElementById("truss").checked = false;
});
