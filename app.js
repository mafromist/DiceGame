const title = document.querySelector("#title");
let score = document.querySelector("#score");
const diceBck = document.querySelector("#diceBackground");
const button = document.querySelector("#button");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");

let sum = 0;

const multiple = (num) => {
    sum += num;
}

const afterClick = (num) => {
    if(score.textContent < 20) {
        if(num == 1) {
            one.style.display = "block";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            score.textContent = sum;
            console.log(`${sum}`);
            score.textContent = "You Lost!";
            button.textContent = "Start AGAIN?";
        } else if (num == 2) {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            multiple(num);
            score.textContent = sum;
            console.log(`${sum}`);

        } else if (num == 3) {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            multiple(num);
            score.textContent = sum;
            console.log(`${sum}`);

        } else if (num == 4) {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "block";
            five.style.display = "none";
            six.style.display = "none";
            multiple(num);
            score.textContent = sum;
            console.log(`${sum}`);

        } else if (num == 5) {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "block";
            five.style.display = "block";
            six.style.display = "none";
            multiple(num);
            score.textContent = sum;
            console.log(`${sum}`);

        } else if (num == 6) {
            one.style.display = "block";
            two.style.display = "block";
            three.style.display = "block";
            four.style.display = "block";
            five.style.display = "block";
            six.style.display = "block";
            multiple(num);
            score.textContent = sum;
            console.log(`${sum}`);
        }
        if (score.textContent >= 20) {
            score.textContent = "You Win!";
            button.textContent = "Start AGAIN?";
        }}};

    button.addEventListener("click", () => {
        if(button.textContent === "Roll") {
        diceBck.style.display = "flex";
        let randomNum = parseInt(Math.random() * 6) + 1;
        afterClick(randomNum);
        } else {
            resetGame();
        }
    });
    

    const resetGame = () => {
        if (button.textContent === "Start AGAIN?") {
            button.textContent = "Roll";
            score.textContent = 0;
            sum = 0;
            diceBck.style.display = "none";
        }};




/* Dice Game

Get a random number between 1 to 6 for dice and add the numbers each other create a sum

    Click on #button 
        a.Show the Dice and get a random number between 1-6 --> done
        b.change .subContainer2 to display = "flex" and keep it;
        c.Change Dice Styling Classes depends on the randomNum
        d.Show the number as change textContent #score
        e.Keep the roll button for roll another number
        f.Add the number to the sum;

        if randomNum == 1;
        Styling
        change .one display = "block";

        if randomNum == 2 
        Styling
        change .two display = "block";
        
        if randomNum == 3 
        Styling
        change .three display = "block";
        
        if randomNum == 4;
        Styling
        change .four display = "block";

        if randomNum == 5; 
        Styling
        change .five display = "block";
        
        if randomNum == 6;
        Styling
        change .six display = "block";

*/