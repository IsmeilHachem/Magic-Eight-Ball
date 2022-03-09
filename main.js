let userName = "Charles";

//using ternary expression, if user enters a name, use their name, if not then don't
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

//create a question for the magic eight ball
let userQuestion = "Will I get the chance of doing RemoteYear?";
//print out question
console.log(`${userName} asked: ${userQuestion}`);

// Generate random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// create switch statement to assign 8 different eight ball responses
switch(randomNumber){
    case 1:
        eightBall = 'It is certain';
        console.log(eightBall);
        break;
    case 2:
        eightBall = 'It is decidely so';
        console.log(eightBall);
        break;
    case 3:
        eightBall = 'Reply hazy, try again';
        console.log(eightBall);
        break;
    case 4:
        eightBall = 'Cannot predict now';
        console.log(eightBall);
        break;
    case 5:
        eightBall = 'Do not count on it';
        console.log(eightBall);
        break;
    case 6:
        eightBall = 'My sources say no';
        console.log(eightBall);
        break;
    case 7:
        eightBall = 'Outlook not good';
        console.log(eightBall);
        break;
    case 8:
        eightBall = 'Signs point to yes';
        console.log(eightBall);
        break;
    default:
        eightBall = 'NA';
        console.log(eightBall);
        break;
}