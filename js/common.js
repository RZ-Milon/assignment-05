function getInputFieldValueById(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputValuetString = inputFieldElement.value;
    const inputValue = parseFloat(inputValuetString);
    inputFieldElement.value = '';
    return inputValue;
}

function getTextValueById(elementId) {
    const textFieldElement = document.getElementById(elementId);
    const textFieldValueString = textFieldElement.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    textFieldElement.innerText = '';
    return textFieldValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
