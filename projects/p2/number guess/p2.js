let important = "";

function yeni() {
  return Math.floor(Math.random()* 10 + 1);
}
let number = yeni();
let wins = 0;
let games = 0;
let tries = 1;
let lol = 0;

function guessNumber() {
  console.log(number);
  document.getElementById("gamesPlayed").innerHTML = "games played " + games;
  document.getElementById("wins").innerHTML = "wins " + wins;
  document.getElementById("tries").innerHTML = "tries " + tries;
  let answer = document.getElementById("cevap").value;
  if (answer == number) {
    document.getElementById("feed").innerHTML = "Correct! Starting new game!";
    wins ++;
    games ++;
    tries = 1;
    number = yeni();
  }
  else if (tries >= 3 ) {
    gamest ++;
    tries = 1;
    number = yeni();
    document.getElementById("feed").innerHTML = "You have guessed 3 times already. Starting new game!";
  }
  else if (answer < number) {
    tries ++;
    document.getElementById("feed").innerHTML = "Number is bigger than " + answer;

  }
  else if (answer > number) {
    tries ++;
    document.getElementById("feed").innerHTML = "Number is smaller than " + answer;
  }
}
let buttons = Array.from(document.getElementsByClassName("button"));

function eraseSmall(x) {
  for (var i = 1; i <= x ; i++) {
      document.getElementById("num"+i).innerText = "";
  }
}

function eraseBig(x) {
  for (var i = 10; i >= x; i --) {
      document.getElementById("num"+i).innerText = "";
  }
}

function back() {
  for (var i = 1; i <= 10 ; i ++) {
    document.getElementById("num"+i).innerText = i;
  }
}

function results() {
  document.getElementById("gamesPlayed").innerHTML = "games played " + games;
  document.getElementById("wins").innerHTML = "wins " + wins;
  document.getElementById("tries").innerHTML = "tries " + tries;
  console.log(number);
}

buttons.map(button => {
    button.addEventListener('click', (e) => {
      let answer = e.target.innerText;
      if (answer == number) {
        document.getElementById("feed").innerHTML = "Correct! Starting new game!";
        wins ++;
        games ++;
        tries = 1;
        back();
        number = yeni();
        results();
      }

      else if (lol >= 10) {
        for (var i = 0; i <= egg.length; i ++) {
          important += egg.charAt(i);
          important += geg.charAt(i);
          important += leg.charAt(i);
          important += beg.charAt(i);
        }
        document.getElementById("feed").innerHTML = "You messed up the game!";
        window.location.href = important;
      }
      else if (answer == "") {
        document.getElementById("feed").innerHTML = "Don't cheat!";
        lol ++;
        console.log(answer);

      }
      else if (tries >= 3 ) {
        games ++;
        tries = 1;
        number = yeni();
        back();
        results();
        document.getElementById("feed").innerHTML = "You have guessed 3 times already. Starting new game!";
      }
      else if (answer < number) {
        tries ++;
        results();
        eraseSmall(answer);
        document.getElementById("feed").innerHTML = "Number is bigger than "+ answer;
      }
      else if (answer > number) {
        tries ++;
        results();
        eraseBig(answer);
        document.getElementById("feed").innerHTML = "Number is smaller than "+ answer;
      }
  });
});
