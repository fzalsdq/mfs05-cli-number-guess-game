#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber=Math.floor(Math.random()*10+1)
const answer=await inquirer.prompt([
    {
    message: "Enter a number between 1-10", type:"number", name:"GuessNumber",
    },
]);
}
if (answer.GuessNumber===randomNumber){
    console.log("You guessed right");
}
else {
    console.log("You guessed wrong");
}
