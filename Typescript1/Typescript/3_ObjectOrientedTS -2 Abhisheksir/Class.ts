// Class definition.
class Person { 
    //fields 
    firstName:string; 
    lastName:string; 
    designation:string;
    salary:number;

    //constructor 
    constructor(firstName:string,lastName:string,designation:string,salary:number) { 
       this.firstName = firstName; // this.firstName is a local variable of class which is declare and define inside the class & firstName is a parameter of constructor which is passed at the time of object creation - Here line no. is 26.
       this.lastName = lastName; 
       this.designation=designation;
       this.salary=salary;
    }  
    
    //function 
    showPersonDetails():void { 
       console.log("Person Details: "+this.firstName+" "+this.lastName);
       console.log("Person Designation: "+this.designation);
       console.log("Person Salary: "+this.salary);
    } 
 } 
 
 //create an object 
 var obj = new Person("Abhishek","Pujara","Executive Chairman",2000000); // Constructor called by default when object is created.
 
 //access the function.
 obj.showPersonDetails();