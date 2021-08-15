//Riley Howley 2021 CodeAcademy Project JavaScript

let array = ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
"Don't judge each day by the harvest you reap but by the seeds that you plant.",
"If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
"If opportunity doesn't knock, build a door.",
"Light tomorrow with today!",
"Every story I create, creates me. I write to create myself."];

const getMessage = array =>{
    let random = Math.floor(Math.random() * 6);
    console.log(array[random]);
}

getMessage(array);