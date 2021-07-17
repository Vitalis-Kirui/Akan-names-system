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
    else if(DD < 1 || DD >31){
        alert("Enter valid date. It should range from 1 to 31.")
    }

    // month
    else if(MM < 1 || MM > 12){
        alert("Enter a valid month. It should range from 1 to 12.")
    }

    // months with 30 days
    else if(MM == 4 || MM == 6 || MM == 9 || MM == 11 && DD > 30){
        alert("Please Enter a validate. "+ MM + "th month has NO MORE THAN 30 days!")
    }

    // Month of February
    else if(MM == 2 && DD > 29){
        alert("Enter a valid date! February has no more than 29 days.")
    }

    // year validation

    else if(YY.length != 4){
        alert("Please enter a valid Year! A year has 4 figures.")
    }


}