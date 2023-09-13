var student = {
    key: 'Roll No',
    value: 1
};
console.log(student);
var ListCLS = /** @class */ (function () {
    function ListCLS() {
        // Blank Arr initialized with [].
        this.Arr = [];
    }
    ListCLS.prototype.add = function (E) {
        this.Arr.push(E);
    };
    ListCLS.prototype.remove = function (E) {
        var index = this.Arr.indexOf(E);
        if (index > -1) {
            this.Arr.splice(index, 1);
        }
    };
    return ListCLS;
}());
var obj = new ListCLS();
obj.add(10);
obj.add(20);
obj.add(30);
obj.remove(10);
obj.remove(20);
console.log(obj.Arr);
var inBoolOptions = {
    'disabled': false,
    'visible': true
};
console.log(inBoolOptions);
