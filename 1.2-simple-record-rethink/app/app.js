//require('jquery');
var deepstream = require('deepstream.io-client-js');

function init() {
    // Initial setup
    //var ds = deepstream('cb-deepstream.cloudapp.net:6020').login();
    var ds = deepstream('localhost:6020').login();
    var record = ds.record.getRecord('someUser');

    // Keep input in sync
    var firstNameInput = document.querySelector('#firstName');

    firstNameInput.onkeyup = function () {
        record.set('firstName', firstNameInput.value);
    };

    record.subscribe('firstName', function (value) {
        firstNameInput.value = value;
    });

    // Keep input in sync
    var lastNameInput = document.querySelector('#lastName');

    lastNameInput.onkeyup = function () {
        record.set('lastName', lastNameInput.value);
    };

    record.subscribe('lastName', function (value) {
        lastNameInput.value = value;
    });

    // Keep input in sync
    var ageInput = document.querySelector('#age');

    ageInput.onkeyup = function () {
        record.set('age', ageInput.value);
    };

    record.subscribe('age', function (value) {
        ageInput.value = value;
    });
}

init();


