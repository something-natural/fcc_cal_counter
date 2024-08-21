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
