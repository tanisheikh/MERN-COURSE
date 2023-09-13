// tsc -t es5 Getter_Setter.ts
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        // Protected - Access Modifier - Used Inside The Same Class As Well Inside The Child Class.
        // Public - Access Modifier - Used Inside The AnyWhere In Same Program.
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getAge = function () {
        return this._age;
    };
    return Person;
}());
var personObj = new Person();
personObj.age = 90;
console.log(personObj.getAge());
