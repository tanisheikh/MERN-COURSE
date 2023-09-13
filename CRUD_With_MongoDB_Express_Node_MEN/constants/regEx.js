var Constants =(function () {
    function Constants() {
    }
    Constants.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Constants.numberRegex = /^[0-9]+$/;
    return Constants;
}());

exports.Constants=Constants;