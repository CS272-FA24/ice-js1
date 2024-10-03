console.log("Hello world!")

function calculate() {
    let n1 = getNum1();
    if (n1 === null) {
        alert("Please enter Number 1!")
    } else {
        let n2 = getNum2();
        if (n2 === null) {
            alert("Please enter Number 2!")
        } else {
            let sum = n1 + n2;
            alert("The sum is " + sum)
        }
    }
}
