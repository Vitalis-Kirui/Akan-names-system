// On submit function

var fetchData = function(){

    var name = document.getElementById("userName").value;

    var DD = document.getElementById("dateOnly").value;

    var MM = document.getElementById("monthOnly").value;

    var fullYear = document.getElementById("yearOnly").value;


    // spliting full-year into century and year

    var digits = Array.from(String(fullYear), Number);

    var century = (digits.slice(0,2));

    var year = (digits.slice(2,4));

    var CC = parseInt(century.join(""));

    var YY = parseInt(year.join(""));

    var day = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD )%7

    // alert("Your born day is: "+day.toFixed());

    // alert("Name: "+ name + " Date of Birth: "+DD+"/"+MM+"/"+CC+YY+" Day of Birth: "+day);

    // radio button controls validation

    var male = document.getElementById("maleGender").checked;

    var female = document.getElementById("femaleGender").checked;

    // form validation

    // radio buttons
    if(male == false && female == false){
        alert("Please select a gender!")
    }

    // date of birth
    if(DD < 1 || DD >31){
        alert("Enter valid date. It should range from 1 to 31.")
    }

    // month
    if(MM < 1 || MM > 12){
        alert("Enter a valid month. It should range from 1 to 12.")
    }

}