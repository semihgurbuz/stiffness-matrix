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

  document.querySelector(".l11").innerHTML = parseFloat(
    (e * a) / length
  ).toFixed(2);

  document.querySelector(".l14").innerHTML = parseFloat(
    -(e * a) / length
  ).toFixed(2);

  document.querySelector(".l22").innerHTML = parseFloat(
    (12 * (e * i)) / length ** 3
  ).toFixed(2);

  document.querySelector(".l23").innerHTML = parseFloat(
    (6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l25").innerHTML = parseFloat(
    (-12 * (e * i)) / length ** 3
  ).toFixed(2);

  document.querySelector(".l26").innerHTML = parseFloat(
    (6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l32").innerHTML = parseFloat(
    (6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l33").innerHTML = parseFloat(
    (4 * (e * i)) / length
  ).toFixed(2);

  document.querySelector(".l35").innerHTML = parseFloat(
    (-6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l36").innerHTML = parseFloat(
    (2 * (e * i)) / length
  ).toFixed(2);

  document.querySelector(".l41").innerHTML = parseFloat(
    -(e * a) / length
  ).toFixed(2);

  document.querySelector(".l44").innerHTML = parseFloat(
    (e * a) / length
  ).toFixed(2);

  document.querySelector(".l52").innerHTML = parseFloat(
    (-12 * (e * i)) / length ** 3
  ).toFixed(2);

  document.querySelector(".l53").innerHTML = parseFloat(
    (-6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l55").innerHTML = parseFloat(
    (12 * (e * i)) / length ** 3
  ).toFixed(2);

  document.querySelector(".l56").innerHTML = parseFloat(
    (-6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l62").innerHTML = parseFloat(
    (6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l63").innerHTML = parseFloat(
    (2 * (e * i)) / length
  ).toFixed(2);

  document.querySelector(".l65").innerHTML = parseFloat(
    (-6 * (e * i)) / length ** 2
  ).toFixed(2);

  document.querySelector(".l66").innerHTML = parseFloat(
    (4 * (e * i)) / length
  ).toFixed(2);
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

  document.querySelector(".r11").innerHTML = parseFloat(cos).toFixed(2);

  document.querySelector(".r12").innerHTML = parseFloat(sin).toFixed(2);

  document.querySelector(".r21").innerHTML = parseFloat(-sin).toFixed(2);

  document.querySelector(".r22").innerHTML = parseFloat(cos).toFixed(2);

  document.querySelector(".r44").innerHTML = parseFloat(cos).toFixed(2);

  document.querySelector(".r45").innerHTML = parseFloat(sin).toFixed(2);

  document.querySelector(".r54").innerHTML = parseFloat(-sin).toFixed(2);

  document.querySelector(".r55").innerHTML = parseFloat(cos).toFixed(2);
};

const getGlobal = () => {
  length = Math.sqrt((endx - startx) ** 2 + (endy - starty) ** 2);
  cos = (endx - startx) / length;
  sin = (endy - starty) / length;

  if (document.getElementById("truss").checked) {
    i = 0;
  }

  document.querySelector(".g11").innerHTML = parseFloat(
    (cos ** 2 * e * a) / length + (sin ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g12").innerHTML = parseFloat(
    (cos * sin * e * a) / length - (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g13").innerHTML = parseFloat(
    (-1 * sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g14").innerHTML = parseFloat(
    (-1 * cos ** 2 * e * a) / length - (sin ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g15").innerHTML = parseFloat(
    (-1 * cos * sin * e * a) / length + (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g16").innerHTML = parseFloat(
    (-1 * sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g21").innerHTML = parseFloat(
    (cos * sin * e * a) / length - (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g22").innerHTML = parseFloat(
    (sin ** 2 * e * a) / length + (cos ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g23").innerHTML = parseFloat(
    (cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g24").innerHTML = parseFloat(
    (-1 * cos * sin * e * a) / length + (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g25").innerHTML = parseFloat(
    (-1 * sin ** 2 * e * a) / length - (cos ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g26").innerHTML = parseFloat(
    (cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g31").innerHTML = parseFloat(
    (-1 * sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g32").innerHTML = parseFloat(
    (cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g33").innerHTML = parseFloat(
    (4 * e * i) / length
  ).toFixed(2);

  document.querySelector(".g34").innerHTML = parseFloat(
    (sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g35").innerHTML = parseFloat(
    (-1 * cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g36").innerHTML = parseFloat(
    (2 * e * i) / length
  ).toFixed(2);

  document.querySelector(".g41").innerHTML = parseFloat(
    (-1 * cos ** 2 * e * a) / length - (sin ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g42").innerHTML = parseFloat(
    (-1 * cos * sin * e * a) / length + (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g43").innerHTML = parseFloat(
    (sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g44").innerHTML = parseFloat(
    (cos ** 2 * e * a) / length + (sin ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g45").innerHTML = parseFloat(
    (cos * sin * e * a) / length - (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g46").innerHTML = parseFloat(
    (sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g51").innerHTML = parseFloat(
    (-1 * cos * sin * e * a) / length + (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g52").innerHTML = parseFloat(
    (-1 * sin ** 2 * e * a) / length - (cos ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g53").innerHTML = parseFloat(
    (-1 * cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g54").innerHTML = parseFloat(
    (cos * sin * e * a) / length - (cos * sin * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g55").innerHTML = parseFloat(
    (sin ** 2 * e * a) / length + (cos ** 2 * 12 * e * i) / length ** 3
  ).toFixed(2);

  document.querySelector(".g56").innerHTML = parseFloat(
    (-1 * cos * 6 * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g61").innerHTML = parseFloat(
    (-1 * sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g62").innerHTML = parseFloat(
    (cos * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g63").innerHTML = parseFloat(
    (2 * e * i) / length
  ).toFixed(2);

  document.querySelector(".g64").innerHTML = parseFloat(
    (sin * 6 * e * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g65").innerHTML = parseFloat(
    (-1 * cos * 6 * i) / length ** 2
  ).toFixed(2);

  document.querySelector(".g66").innerHTML = parseFloat(
    (4 * e * i) / length
  ).toFixed(2);
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
  i = i / 1000000000000;
  a = a / 1000000;
  e = e * 1000000;
  getLocal();
  getRotation();
  getGlobal();
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
