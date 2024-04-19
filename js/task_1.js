function Calculator() {
    this.result = 0;
}


Calculator.prototype.add = function(num) {
    this.result += num;
};


Calculator.prototype.subtract = function(num) {
    this.result -= num;
};


Calculator.prototype.multiply = function(num) {
    this.result *= num;
};


Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Error: Division by zero!");
    }
};


const calculator = new Calculator();


calculator.add(5);
console.log("Result after adding 5:", calculator.result);

calculator.subtract(2);
console.log("Result after subtracting 2:", calculator.result);

calculator.multiply(3);
console.log("Result after multiplying by 3:", calculator.result);

calculator.divide(3);
console.log("Result after dividing by 3:", calculator.result); 
