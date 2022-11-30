#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from "figlet";
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\nCalculator  !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();
const startCalculator = async () => {
    chalkAnimation.rainbow("** =========== Welcome To Calculator Utility =========== **");
    printCalculator("0");
    const firstQuestion = await inquirer.prompt({
        name: "answer",
        type: "number",
        message: "Enter your First Number"
    });
    console.clear();
    printCalculator(firstQuestion.answer);
    const secondQuestion = await inquirer.prompt({
        name: 'answer',
        type: "list",
        message: "Select Your Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    });
    console.clear();
    printCalculator(firstQuestion.answer + " " + getOperationSign(secondQuestion.answer));
    const thridQuestion = await inquirer.prompt({
        name: 'answer',
        type: "number",
        message: "Enter your Second Number"
    });
    console.clear();
    printCalculator(firstQuestion.answer + " " + getOperationSign(secondQuestion.answer) + " " + thridQuestion.answer);
    const fourthQuestion = await inquirer.prompt({
        name: 'answer',
        type: "list",
        message: "Check Answer",
        choices: ["Yes"]
    });
    if (fourthQuestion.answer === "Yes") {
        const equation = "" + firstQuestion.answer + getOperationSign(secondQuestion.answer) + thridQuestion.answer;
        console.clear();
        printCalculator(chalk.green(eval(equation)));
    }
};
const printCalculator = (text) => {
    console.log(`
    ________________________________
   | _____________________________  |
   | |                            | |
   | | ${text}                      
   | |____________________________| |
   | |____________________________  |
   | |     |     |     |   |     |  |
   | |  7  |  8  |  9  |   |  +  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  4  |  5  |  6  |   |  -  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  1  |  2  |  3  |   |  x  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  .  |  0  |  =  |   |  /  |  |
   | |_____|_____|_____|   |_____|  |
   |_______________________________ |`);
};
const getOperationSign = (operator) => {
    switch (operator) {
        case "Addition":
            return "+";
        case "Subtraction":
            return "-";
        case 'Multiplication':
            return '*';
        case 'Division':
            return '/';
        default:
            return "+";
    }
};
setTimeout(() => {
    console.clear();
    startCalculator();
}, 5000);
