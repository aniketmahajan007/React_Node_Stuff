
const calc = {
    value:0,
    add: function (val) {
        this.value +=val
        return this;
    },
    multiply: function (val) {
        this.value *=val
        return this;
    },
    divide: function (val){
        this.value /=val
        return this;
    },
    minus: function (val) {
        this.value -=val
        return this;
    }
}

const result = calc.add(10).multiply(2).divide(2).minus(5);
console.log(result.value);