const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropDown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// even if 'input tags type is 'number', it still accpet '+, -, e, \s'
// you should handle these things first
function editInput(str){
    const reg = /[+-\s]/g;
    return str.replace(reg,'');
}
function isValidInput(str){
    const reg = /\d+e\d+/i;
    return str.match(reg);
}

/* add entry funcion. when you click 'ADD Entry button',
this funciont get entrydropdown.value 
insert input tag(id, class) in filedset where id == entrydropdown.value and store inputs */ 

function addEntry(){
    // get container position    
    const targetInputContainer = document.querySelector(`#${entryDropDown.value} .input-container`);  
    
    // get target entry count 
    const targetEntry = targetInputContainer.querySelectorAll('input[type="text"]')    
    
    // check targetInputContainer value
    // console.log(targetInputContainer)
        
    // make html string to insert
    const HTMLstring = `
        <lable for="${entryDropDown.value}-${targetEntry.length + 1}-name">name</lable>
        <input type="text" id="${entryDropDown.value}-${targetEntry.length + 1}-name"required>
        <lable for="${entryDropDown.value}-${targetEntry.length + 1}-calorie">calorie</lable>
        <input type="number" min="0" id="${entryDropDown.value}-${targetEntry.length + 1}-calorie" required>
        `
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLstring);    
}

// get calorie value from input
function sumInputValue(array){
    let sum = 0;
    for ( const item of array){
        const curVal = editInput(item.value);
        const invalidInput = isValidInput(curVal);
        console.log(invalidInput)
        if (invalidInput){
            alert(`Invalid Input: ${invalidInput[0]}`);
            isError = true;
            return null;
        }
        sum += Number(curVal);
    }
    return sum;
}

// calculate calorie function
function calculateCalorie(e){    
    // disable submit default action to keep inputs
    e.preventDefault(budgetNumberInput);
    
    // set isError to false for running calculation again
    isError = false
    
    // make array from inputs
    const breakfastInputs = document.querySelectorAll('#breakfast input[type="number"]');    
    const lunchInputs = document.querySelectorAll('#lunch input[type="number"]');
    const dinnerInputs = document.querySelectorAll('#dinner input[type="number"]');
    const snackInputs = document.querySelectorAll('#snacks input[type="number"]');
    const exerciseInputs = document.querySelectorAll('#exercise input[type="number"]');

    // sum array item values. and sumInputValue make isError to true if there is any invalid input
    const sumBreakfast = sumInputValue(breakfastInputs);
    const sumLunch = sumInputValue(lunchInputs);
    const sumDinner = sumInputValue(dinnerInputs);
    const sumSnacks = sumInputValue(snackInputs);    
    const sumExer = sumInputValue(exerciseInputs);

    // return nothing when input is not valid
    if (isError){
        return;
    }

    //calculate final result
    const sumConsume = sumBreakfast + sumLunch + sumDinner + sumSnacks;    
    const sumAll = budgetNumberInput.value - sumConsume + sumExer
    const judge = sumAll > 0 ? "Surplus" : "Deficit"    
        
    //make html to insert
    output.innerHTML = `
    <span class="${judge.toLocaleLowerCase()}">${sumAll} calories ${judge}</span>
    `

    //make output visable
    output.classList.remove('hide');
}

function clearInputs(){        
};

// there are three buttons total
// so you should add eventlistener first
//call prevent functhion for submit event
calorieCounter.addEventListener('submit', calculateCalorie)
addEntryButton.addEventListener('click', addEntry);
clearButton.addEventListener('click', clearInputs)

