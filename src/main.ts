import inquirer from 'inquirer';
import { Student } from './student.js';
import chalk from 'chalk';

async function main() {
    // Prompt user to enter their name and personality type
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'list',
            name: 'question',
            message: 'How would you describe yourself?',
            choices: ['Extrovert', 'Introvert', 'Mystery'],
        },
    ]);

    const student = new Student();
    student.Name = answers.name;

    // Log the student's name
    console.log("-".repeat(45));
    console.log(`\t ${chalk.bold.blue("Student Details")}`);
    console.log("-".repeat(45));
    console.log(chalk.whiteBright(` Name: "${chalk.bold.green(student.Name)}"\n`));

    // Determine personality based on user input
    let answerValue;
    if (answers.question === 'Extrovert') {
        answerValue = 1;
    } else if (answers.question === 'Introvert') {
        answerValue = 2;
    } else {
        answerValue = 3;
    }

    student.ask_question(answerValue);

    // Log the student's personality
    console.log(chalk.whiteBright(` Student Personality: "${chalk.bold.green(student.personality)}"`));
    console.log("-".repeat(45));
}

main();
