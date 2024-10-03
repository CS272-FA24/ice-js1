/**
 * Gets the number in the Number 1 input box.
 * @returns The number if it exists, else null
 */
function getNum1() {
    const inp = document.getElementById('num1').value.trim();
    if (inp === '') {
        return null;
    } else {
        return parseInt(inp);
    }
}

/**
 * Gets the number in the Number 2 input box.
 * @returns The number if it exists, else null
 */
function getNum2() {
    const inp = document.getElementById('num2').value.trim();
    if (inp === '') {
        return null;
    } else {
        return parseInt(inp);
    }
}
