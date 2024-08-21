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
    const targetInputContainer = document.querySelector(`#${entryDropDown.value} .input-container`);    
    
    // check targetInputContainer value
    // console.log(targetInputContainer)
    
    // make html string to insert
    const HTMLstring = `
        <lable for="name">name</lable>
        <input type="text" required>
        <lable for="calorie">calorie</lable>
        <input type="number" min="0" required>
        `
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLstring);
}

function clearInputs(){
    
};

// calculate carorie function
function calculateCarorie(e){
    // set prevent default first 
    e.preventDefault();
}



// there are three buttons total
// so you should add eventlistener first
//call prevent functhion for submit event
calorieCounter.addEventListener('submit', calculateCarorie)
addEntryButton.addEventListener('click', addEntry);
clearButton.addEventListener('click', clearInputs)
