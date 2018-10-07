class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue;
    this.toString = () => eval(this.initialValue);
  }

  add(number) {
    // your implementation
    this.initialValue = this.initialValue + '+' + number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.initialValue = this.initialValue + '-' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue = this.initialValue + '*' + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue = this.initialValue + '/' + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.initialValue = this.initialValue + '**' + number;
    return this;
  }
}

module.exports = SmartCalculator;
