var items = document.querySelectorAll(".item");
const page = document.getElementById("page1");
const result = document.getElementById("result");
const resultagainst = document.querySelectorAll(".result-against");
const msg = document.querySelectorAll(".message");
const game = document.getElementById("game-container");
const celebration = document.getElementById("celebration-container");
const next = document.getElementById("next");
const pcWinner = document.getElementById("pc-winner");
const userWinner = document.getElementById("user-winner");
const winner1 = document.querySelectorAll(".user-winner");
const winner2 = document.querySelectorAll(".pc-winner");
const userChoice = document.querySelector(".user-choice");
const pcChoice = document.querySelector(".pc-choice");
const footer = document.querySelector(".footer");
const rules = document.querySelector(".rules");
const prevResultObject = localStorage.getItem("rockpaperscissor");
const TotalcomputerScore = document.querySelector(".pc-current-score");
const TotaluserScore = document.querySelector(".user-current-score");
var userScore = 0;
var computerScore = 0;
const setScore = (user, computer) => {
  TotalcomputerScore.textContent = computer;
  TotaluserScore.textContent = user;
};
if (prevResultObject) {
  const prevResult = JSON.parse(prevResultObject);
  userScore = prevResult.userScore;
  computerScore = prevResult.computerScore;
  setScore(userScore, computerScore);
}

items.forEach((item) => {
  item.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomitem = items[randomIndex];
    page.style.display = "none";
    rules.style.visibility = "hidden";
    var ans = 0;
    if (item.id === "rock") {
      if (randomitem.id == "paper") {
        ans = -1;
      } else if (randomitem.id == "scissor") {
        ans = 1;
      }
    } else if (item.id === "paper") {
      if (randomitem.id == "scissor") {
        ans = -1;
      } else if (randomitem.id == "rock") {
        ans = 1;
      }
    } else {
      if (randomitem.id == "rock") {
        ans = -1;
      } else if (randomitem.id == "paper") {
        ans = 1;
      }
    }

    if (ans === 1) {
      userScore = userScore + 1;
      msg.forEach((msg) => {
        msg.textContent += "You Win";
      });
      resultagainst.forEach((resultagainst) => {
        resultagainst.style.display = "block";
      });
      next.style.display = "inline";
      winner1.forEach((winner) => {
        winner.style.display = "block";
      });
    } else if (ans === -1) {
      computerScore = computerScore + 1;
      msg.forEach((msg) => {
        msg.textContent += "You Lost";
      });
      resultagainst.forEach((resultagainst) => {
        resultagainst.style.display = "block";
      });
      winner2.forEach((winner) => {
        winner.style.display = "block";
      });
    } else {
      msg.forEach((msg) => {
        msg.textContent += "Tie Up";
      });
      resultagainst.forEach((resultagainst) => {
        resultagainst.style.display = "none";
      });
    }
    setScore(userScore, computerScore);

    const duplicateRandomitem = randomitem.cloneNode(true);
    const duplicateitem = item.cloneNode(true);
    duplicateRandomitem.classList.add("item1");
    duplicateitem.classList.add("item1");
    duplicateRandomitem.querySelector(".circle").classList.add("circle2");
    duplicateitem.querySelector(".circle").classList.add("circle2");
    userChoice.appendChild(duplicateitem);
    pcChoice.appendChild(duplicateRandomitem);
    result.style.display = "flex";

    localStorage.setItem(
      "rockpaperscissor",
      JSON.stringify({ userScore: userScore, computerScore: computerScore })
    );
  });
});

const playAgain = () => {
  userChoice.removeChild(userChoice.lastChild);
  pcChoice.removeChild(pcChoice.lastChild);
  page.style.display = "block";
  result.style.display = "none";
  game.style.display = "flex";
  celebration.style.display = "none";
  winner1.forEach((winner) => {
    winner.style.display = "none";
  });
  winner2.forEach((winner) => {
    winner.style.display = "none";
  });
  msg.forEach((msg) => {
    msg.textContent = "";
  });

  next.style.display = "none";
};

const ruleClose = () => {
  rules.style.zIndex = "0";
  page.style.zIndex = "1";
  result.style.zIndex = "1";
  rules.style.visibility = "hidden";
};

const ruleOpen = () => {
  page.style.zIndex = "0";
  result.style.zIndex = "0";
  rules.style.zIndex = "1";
  rules.style.visibility = "visible";
};

const openCelebration = (element) => {
  element.style.display = "none";
  game.style.display = "none";
  celebration.style.display = "flex";
};
