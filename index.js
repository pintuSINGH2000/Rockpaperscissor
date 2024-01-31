
var items = document.querySelectorAll('.item');
const page = document.getElementById('page1');
const result = document.getElementById('result');
const userPick = document.querySelector(".user-picked");
const pcPick = document.querySelector(".computer-picked");
const resultagainst = document.querySelector(".result-against");
const msg = document.querySelector('.message');
const circle = document.getElementById('circle');
const resultPage = document.querySelector('.result');
const game = document.getElementById('game-container');
const celebration = document.getElementById('celebration-container');
const next = document.getElementById('next');
const pcWinner = document.getElementById('pc-winner');
const userWinner = document.getElementById('user-winner');
const rock1 = document.getElementById('rock1');
const rock2 = document.getElementById('rock2');
const paper1 = document.getElementById('paper1');
const paper2 = document.getElementById('paper2');
const scissor1 = document.getElementById('scissor1');
const scissor2 = document.getElementById('scissor2');
const winner1 = document.querySelectorAll('.user-winner');
const winner2 = document.querySelectorAll('.pc-winner');
const rules = document.querySelector('.rules');
const prevResultObject = localStorage.getItem("rockpaperscissor");
const TotalcomputerScore=document.getElementById('computer-score');
const TotaluserScore=document.getElementById('user-score');
var userScore = 0;
var computerScore = 0;
const setScore = (user,computer) =>{
    if(TotalcomputerScore!=null){
        TotalcomputerScore.value=computer;
    }

    if(TotaluserScore!=null){
        TotaluserScore.value=user;
    }
}
if(prevResultObject){
    const prevResult = JSON.parse(prevResultObject);
    userScore = prevResult.userScore;
    computerScore = prevResult.computerScore;
    setScore(userScore,computerScore);
}



items.forEach(item => {
    item.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomitem = items[randomIndex];
        page.style.display = "none";
        rules.style.visibility = 'hidden';
        var ans=0;
        if(item.id==='rock'){
            rock1.style.display = 'grid';
            if(randomitem.id=='paper'){
                paper2.style.display = 'flex';
                ans=-1;
            }else if(randomitem.id=='scissor'){
                scissor2.style.display = 'flex';
                ans=1;
            }else{
                rock2.style.display = 'flex';
            }
        }else if(item.id==='paper'){
            paper1.style.display = 'grid';
            if(randomitem.id=='scissor'){
                scissor2.style.display = 'flex';
                ans=-1;
            }else if(randomitem.id=='rock'){
                rock2.style.display = 'flex';
                ans=1;
            }else{
                paper2.style.display = 'flex'
            }
        }else{
            scissor1.style.display = 'grid';
            if(randomitem.id=='rock'){
                rock2.style.display = 'flex';
                ans=-1;
            }else if(randomitem.id=='paper'){
                paper2.style.display = 'flex';
                ans=1;
            }else{
                scissor2.style.display = 'flex';
            }
        }

        if(ans===1){
            userScore = userScore + 1;
            msg.textContent  += "You Win";
            resultagainst.style.display = "block";
            next.style.display= 'inline';
            winner1.forEach(winner => {
                winner.style.display = 'block';
            });
          
        }else if(ans===-1){
            computerScore = computerScore + 1;
            msg.textContent  += "You Lost";
            resultagainst.style.display = "block";
            winner2.forEach(winner => {
                winner.style.display = 'block';
            });
        }else{
            msg.textContent  += "Tie Up";
            resultagainst.style.display = "none";
        }
        setScore(userScore,computerScore);
        
        userPick.style.display = "block";
        pcPick.style.display = "block";
        result.style.display = "block";
        resultPage.style.display = "flex";
        localStorage.setItem("rockpaperscissor",JSON.stringify({"userScore":userScore,"computerScore":computerScore}));
    });
});

const playAgain = () =>{
    paper1.style.display = 'none';
    paper2.style.display = 'none';
    scissor1.style.display = 'none';
    scissor2.style.display = 'none';
    rock1.style.display = 'none';
    rock2.style.display = 'none';
    game.style.display = 'block';
    celebration.style.display = 'none';
    resultagainst.style.display = 'none';
    userPick.style.display = 'none';
    pcPick.style.display = 'none';
    result.style.display = 'none';
    msg.textContent = '';
    page.style.display = 'block';
    next.style.display= 'none';
    winner1.forEach(winner => {
        winner.style.display = 'none';
    });
    winner2.forEach(winner => {
        winner.style.display = 'none';
    });
}


const ruleClose = () => {
   rules.style.visibility = 'hidden';
}

const ruleOpen = () => {
    rules.style.visibility = 'visible';
}

const openCelebration = (element) => {
    element.style.display = "none";
    game.style.display = 'none';
    celebration.style.display = 'flex';
}

