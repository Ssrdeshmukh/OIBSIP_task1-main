function show() {
    prompt("Enter your Address : ", "Recent");
    alert("Your order got placed successfully. The order will arrive before 20mins.")
}

function deal1() {
    a = document.getElementById("ha").style.display = "block";
}

function deal2() {
    a = document.getElementById("ha").style.display = "none";
}

function cart1() {
    a = document.getElementById("hb").style.display = "block";
}

function cart2() {
    a = document.getElementById("hb").style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}