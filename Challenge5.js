//Creating variable visa of string type
var visa="Paris";

// Applying condition on visa with help of switch statement
switch (visa)
{
    case "Newyork" :
        document.getElementById("response").innerHTML= "You have Newyork Tourist Visa"+"<br>"+"Enjoy your Newyork Trip";;
        break;//Mandatory to exit the switch case once condition is met.
    case "Paris":
        document.getElementById("response").innerHTML= "You have Paris Tourist Visa"+"<br>"+"Enjoy your Paris Trip";;
        break;
    case "Switzerland":
        document.getElementById("response").innerHTML= "You have Switzerland Tourist Visa"+"<br>"+"Enjoy your Switzerland Trip";;
        break;
    default:
        document.getElementById("response").innerHTML="You have going to the Trip"+"<br>"+"Enjoy your Newyork Trip";;
}