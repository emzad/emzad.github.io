//Document extracted from provided files and edited by Justin Jetton on the 30th of June 2019 for WEB 115

function calculateChange () {


    
    var cents = document.getElementById("cents").value;

    //Check to validate input through 'if' statement. Send alert if invalid.
    if(cents > -1 && cents < 100) {
        var numQuarters = Math.floor(cents / 25);
        document.getElementById("quarters").value = numQuarters;
        var remainder = cents % 25;
        var numDimes = Math.floor(remainder / 10);
        document.getElementById("dimes").value = numDimes;
        remainder = remainder % 10;
        var numNickels = Math.floor(remainder / 5);
        document.getElementById("nickels").value = numNickels;
        remainder = remainder % 5;
        var numPennies = Math.floor(remainder / 1);
        document.getElementById("pennies").value = numPennies;
    } else {
        alert("Error: Not an acceptable value!")
    }
    
}

//Ran out of time to program a Regular Expression to validate input... more interesting than 'if' statement
//function validNumber (checkThis) {
//    var numberParameters = /\d\d/; 
//       return numberParameters.test(checkThis);
//}


