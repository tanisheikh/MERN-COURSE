class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(1990, 12, 25));/*Note: JavaScript counts months from 0 to 11:  January = 0. December = 11.*/

console.log("Person Date: "+person.birthDate);
//person.birthDate = new Date(1991, 12, 25); // Compile error

//output:Person Date: Fri Jan 25 1991 00:00:00 GMT+0530 (India Standard Time)//