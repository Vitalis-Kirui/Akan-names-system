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

    var birthDay = parseInt(day);

    // alert("Your born day is: "+day.toFixed());

    // alert("Name: "+ name + " Date of Birth: "+DD+"/"+MM+"/"+CC+YY+" Day of Birth: "+day);

    // radio button controls validation

    var male = document.getElementById("maleGender").checked;

    var female = document.getElementById("femaleGender").checked;

    // form validation

    // radio buttons
    if(male == false && female == false){
        alert("Please select a gender!")
    };

    // date of birth
    if(DD < 1 || DD >31){
        alert("Enter valid date. \nIt should range from 1 to 31.")
    };

    // month
    if(MM < 1 || MM > 12){
        alert("Enter a valid month. \nIt should range from 1 to 12.")
    };

    // months with 30 days
    if(( MM == 4 || MM == 6 || MM == 9 || MM == 11) && DD > 30){
        alert("Please Enter a valid date. \n"+MM+ "th month has NO MORE THAN 30 days!")
    };

    // Month of February
    if((MM == 2 && DD > 28) && (fullYear % 4 != 0)){
        alert("Enter a valid date! \nFebruary has no more than 28 days.")
    };

    if((MM == 2 && fullYear % 4 == 0) && (DD > 29)){
        alert("Enter a valid date! \n"+fullYear+" is a leap year! It has 29 days.")
    }

    // year validation
    if(fullYear.length < 4 || fullYear.length > 4 ){
        alert("Please enter a valid Year! \nA year has 4 figures.")
    };

    if(CC >= 21){
        alert("Jesus Christ!!! Enter a valid year! \nWe are still in 20s.")
    };


    // Arrays

    var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var malesArray = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    var femaleArray = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];

    // Assigning names using if statement

    // Males

    if( birthDay == 0 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[0]+", your Akan name is: "+malesArray[0]);
    };

    if( birthDay == 1 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[1]+", your Akan name is: "+malesArray[1]);
    };

    if( birthDay == 2 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[2]+", your Akan name is: "+malesArray[2]);
    };

    if( birthDay == 3 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[3]+", your Akan name is: "+malesArray[3]);
    };

    if( birthDay == 4 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[4]+", your Akan name is: "+malesArray[4]);
    };

    if( birthDay == 5 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[5]+", your Akan name is: "+malesArray[5]);
    };

    if( birthDay == 6 && male == true){
        alert ("Hello "+name+", You were born on: "+daysArray[6]+", your Akan name is: "+malesArray[6]);
    };

    // Females

    if( birthDay == 0 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[0]+", your Akan name is: "+femaleArray[0]);
    };

    if( birthDay == 1 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[1]+", your Akan name is: "+femaleArray[1]);
    };

    if( birthDay == 2 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[2]+", your Akan name is: "+femaleArray[2]);
    };

    if( birthDay == 3 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[3]+", your Akan name is: "+femaleArray[3]);
    };

    if( birthDay == 4 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[4]+", your Akan name is: "+femaleArray[4]);
    };

    if( birthDay == 5 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[5]+", your Akan name is: "+femaleArray[5]);
    };

    if( birthDay == 6 && female == true){
        alert ("Hello "+name+", You were born on: "+daysArray[6]+", your Akan name is: "+femaleArray[6]);
    };

};