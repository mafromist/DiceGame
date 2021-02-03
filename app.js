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

const title = document.querySelector("#title");
const score = document.querySelector("#score").value;
const diceBck = document.querySelector("#diceBackground");
const button = document.querySelector("#button");
const one = document.querySelector("#one").value;
const two = document.querySelector("#two").value;
const three = document.querySelector("#three").value;
const four = document.querySelector("#four").value;
const five = document.querySelector("#five").value;
const six = document.querySelector("#six").value;

let sum = 0;

let randomNum = parseInt(Math.random() * 6) + 1;
console.log(randomNum);

console.log(one)
console.log(two)

const multiple = (num) => {
    sum = sum + randomNum;
    console.log(sum);
}

multiple(sum);

button.addEventListener("click", () => {
    diceBck.style.display = "flex";
    do {
            if(randomNum == one) {
                one.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);

            } else if (randomNum == two) {
                one.style.display = "block";
                two.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);

            } else if (randomNum == three) {
                one.style.display = "block";
                two.style.display = "block";
                three.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);

            } else if (randomNum == four) {
                one.style.display = "block";
                two.style.display = "block";
                three.style.display = "block";
                four.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);

            } else if (randomNum == five) {
                one.style.display = "block";
                two.style.display = "block";
                three.style.display = "block";
                four.style.display = "block";
                five.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);

            } else if (randomNum == six) {
                one.style.display = "block";
                two.style.display = "block";
                three.style.display = "block";
                four.style.display = "block";
                five.style.display = "block";
                six.style.display = "block";
                multiple(randomNum);
                score.textContent = `${sum}`;
                console.log(`${sum}`);
        } 
        
} while (sum <= 20);
});