const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropDown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

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

// add entry funcion. when you click 'ADD Entry button',
// this funciont get entrydropdown.value
// insert input tag(id, class) in filedset where id == entrydropdown.value
// and store inputs
function addEntry(){
    // get container posint 
    // console.log(entryDropDown.value)
    const targetInputContainer = document.querySelector(`#${entryDropDown.value} .input-container`);  
    
    // get target entry count 
    const targetEntry = targetInputContainer.querySelectorAll('input[type="text"]')
    console.log(targetEntry);
    
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

function clearInputs(){        
};

// get calorie value from input
function sumInputValue(array){
    let sum = 0;
}

// calculate calorie function
function calculateCarorie(e){
    // set prevent default first 
    e.preventDefault(budgetNumberInput);
    //console.log(budgetNumberInput.value);
    //console.log(document.querySelectorAll('#breakfast input[type="number"]')[0].value)
}



// there are three buttons total
// so you should add eventlistener first
//call prevent functhion for submit event
calorieCounter.addEventListener('submit', calculateCarorie)
addEntryButton.addEventListener('click', addEntry);
clearButton.addEventListener('click', clearInputs)

