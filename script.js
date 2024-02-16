// DICE SIM
var menu = document.getElementById("dice");
let sidemenu = document.getElementById("diceside");
let rollbtn = document.getElementById("rollbtn");
let resetbtn = document.getElementById("resetbtn");
let anibtn = document.getElementById("anibtn");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var animate = 0;

var angle1 = 0;
var angle2 = 0;

rollbtn.addEventListener("click", roll);
resetbtn.addEventListener("click", reset);
anibtn.addEventListener("click", stopani);

function roll() {
  animate++;
  switch (menu.value) {
    case "once":
      // roll 1
      console.log("once");
      var dice1 = Math.round(Math.random() * sidemenu.value + 1);
      var dice2 = Math.round(Math.random() * sidemenu.value + 1);

      img1.src = "images/" + dice1 + ".png";
      img2.src = "images/" + dice2 + ".png";

      document.getElementById("diceCounter").innerHTML +=
        "<span>" + dice1 + ", " + dice2 + "</span>";
      break;
    case "five":
      console.log("five");
      var dice1;
      var dice2;
      for (let i = 0; i < 5; i++) {
        dice1 = Math.round(Math.random() * sidemenu.value + 1);
        dice2 = Math.round(Math.random() * sidemenu.value + 1);
        console.log(dice1);
        document.getElementById("diceCounter").innerHTML +=
          "<span>" + dice1 + ", " + dice2 + "</span>";
      }

      img1.src = "images/" + dice1 + ".png";
      img2.src = "images/" + dice2 + ".png";
      break;
    case "xtimes":
      console.log("x");
      let times = prompt("How many times?");
      var dice1;
      var dice2;
      for (let i = 0; i < times; i++) {
        dice1 = Math.round(Math.random() * sidemenu.value + 1);
        dice2 = Math.round(Math.random() * sidemenu.value + 1);
        console.log(dice1);
        document.getElementById("diceCounter").innerHTML +=
          "<span>" + dice1 + ", " + dice2 + "</span>";
      }

      img1.src = "images/" + dice1 + ".png";
      img2.src = "images/" + dice2 + ".png";
      break;
    case "snake":
      var dice1;
      var dice2;
      do {
        dice1 = Math.round(Math.random() * sidemenu.value + 1);
        dice2 = Math.round(Math.random() * sidemenu.value + 1);
        console.log(dice1);
        document.getElementById("diceCounter").innerHTML +=
          "<span>" + dice1 + ", " + dice2 + "</span>";
      } while (dice1 != 1 || dice2 != 1);

      img1.src = "images/" + dice1 + ".png";
      img2.src = "images/" + dice2 + ".png";
  }
}

function reset() {
  console.log("reset");
  document.getElementById("diceCounter").innerHTML = "";
  animate = 0;

  // clear old interval before setting new one
  clearInterval(animation1);
  animation1 = setInterval(ani1, 100);

  clearInterval(animation2);
  animation2 = setInterval(ani2, 100);
}

animation1 = setInterval(ani1, 100);
animation2 = setInterval(ani2, 100);

function ani1() {
  let delta1 = Math.round(Math.random() * sidemenu.value + 1);
  if (animate == 0) {
    img1.src = `images/${delta1}.png`;
  }
  img1.style.transform = `rotate(${angle1}deg)`;
  angle1 += 17;
}

function ani2() {
  let delta2 = Math.round(Math.random() * sidemenu.value + 1);
  if (animate == 0) {
    img2.src = `images/${delta2}.png`;
  }
  img2.style.transform = `rotate(${angle2}deg)`;
  angle2 -= 15;
}

function stopani() {
  clearInterval(animation1);
  clearInterval(animation2);
  img1.style.transform = `rotate(${0}deg)`;
  img2.style.transform = `rotate(${0}deg)`;
}
