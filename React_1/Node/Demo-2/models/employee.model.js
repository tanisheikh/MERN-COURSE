const mongoose = require('mongoose');
const constant = require("../constants/regEx");


// Creating Structure of the collection
var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    }
    // Age and Salary = Number
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    // Create one folder costants and inside that folder create one file named regEx.js and store all the regEx as static fields in specific class. after that call the regEx from that file only.
    
    return constant.Constants.emailRegex.test(val);;
}, 'Invalid Email Id.');

// Custom validation for email
employeeSchema.path('mobile').validate((val) => {
    // Create one folder costants and inside that folder create one file named regEx.js and store all the regEx as static fields in specific class. after that call the regEx from that file only.
    return constant.Constants.numberRegex.test(val);
}, 'Invalid Mobile No.');

// Create a vaidate funcion for all the fields which are shown in schema including age and salary.


// Creating collection

mongoose.model('Employee', employeeSchema);