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

    // alert("Name: "+ name + " Date of Birth: "+DD+"/"+MM+"/"+CC+YY+" Day of Birth: "+day);

    // radio button controls validation

    var male = document.getElementById("maleGender").checked;

    var female = document.getElementById("femaleGender").checked;
    
    if(male==true){
        alert("You are a male")
    }

    else if(female==true){
        alert("You are a female")
    }

    else{
        alert("Please select your gender")
    }

}