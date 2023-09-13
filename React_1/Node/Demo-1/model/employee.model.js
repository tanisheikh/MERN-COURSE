const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    emailId: {
        type: String,
        required: 'This field is required.'
    },
    contactNo: {
        type: String,
        required: 'This field is required.'
    },
    password: {
        type: String,
        required: 'This field is required.'
    }
});

// Custom validation for email
employeeSchema.path('emailId').validate((val) => {
    // Create one folder costants and inside that folder create one file named regEx.js and store all the regEx as static fields in specific class. after that call the regEx from that file only.
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email id.');

// Create a vaidate funcion for all the fields which are shown in schema including age and salary.

mongoose.model('Employee', employeeSchema);