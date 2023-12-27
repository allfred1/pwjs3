// task one
const countsBananas = +prompt("Количество бананов:")

for (let i = 1; i <= countsBananas; i++) {
    switch (i) {
        case 1:
            console.log(`${i} banana`)
            break;
        default:
            console.log(`${i} bananas`)
    }
}

// end task one

// tas two 

const countsWorks = +prompt("Введите сколько раз сработает цикл"); // static
let countsWorksTwo = 0; // меняется по ходу дела. 


for (let i = 1; i != countsWorks; i++) {
    if (i % 2 == 0) {
        countsWorksTwo += i
    }    
}

console.log(`Сумма четных числе: ${countsWorksTwo}`)

// end tas two

// task three

const NumberOfTasks = +prompt("Введите число:"); 
const degreeNumberOfTasks = +prompt("Введите степень:");

let result = 1;

for (let i = 0; i < degreeNumberOfTasks; i++) {
  result *= NumberOfTasks;
}

console.log(result);


// end tash three