import { ValidatorCLS } from './validators/validators';
console.log("Valid Email Id OR Not: "+new ValidatorCLS().isValidEmailStr('abhishekpoojara@gmail.com'));
console.log("Valid Zip Code OR Not: "+new ValidatorCLS().isValidZipCode('360005'));