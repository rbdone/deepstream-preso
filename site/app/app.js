//require('jquery');
var deepstream = require('deepstream.io-client-js');

function init() {
    // Initial setup
    var ds = deepstream('localhost:6020').login();
    var record = ds.record.getRecord('someUser');

    // Keep input in sync
    var input = document.querySelector( 'input' );

    input.onkeyup = function(){
        record.set( 'firstname', input.value );
    };

    record.subscribe( 'firstname', function( value ){
        input.value = value;
    });
}

init();


