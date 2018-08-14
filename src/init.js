// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
//<script type="text/javascript">

//$(document).ready(function() {
  //  $(".trigger").click(function() {
    //    $(".overlay").toggle();
    //});
//});



var firstName = "Waseem";
var lastName = "Qazi";
var jobTitle = "Traveler Care";
var homeOffice = "Penn. field";
var tellMeMore = "Excited to re-start my coding adventure again. Been a while  since I had coded. Looking forward to all the learning and growth this  amazing opportunity will present."

function change(id){
var buttonValue;
if (id=="1") buttonValue = firstName;
else if (id=="2") buttonValue = lastName;
else if (id=="3") buttonValue = jobTitle;
else if (id=="4") buttonValue = homeOffice;
else if (id=="5") buttonValue = tellMeMore;

document.getElementById("id_"+id).innerHTML = buttonValue;
}


/*var demo = {
  firstName: "Waseem",
  lastName: "Qazi",
  jobTitle: "Traveler Care",
  homeOffice: "Penn. field",
  tellMeMore: "Excited to re-start my coding adventure again. Been a while  since I had coded. Looking forward to all the learning and growth this  amazing opportunity will present.",


};

function replaceMe(element, contents) {
  element.parentElement.innerHTML = contents;
}
//</script>
// using jQuery and the object above, display the information as the appropriate button is clicked*/
