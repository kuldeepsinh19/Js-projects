let seterror = (id, error) => {
  //  sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
};

let clearErrors = () => {
  errors = document.getElementsByClassName("formerror");
  // console.log(errors)
  for (let items of errors) {
    items.innerHTML = " ";
  }
};

let validateform = () => {
  let returnval = true;
  clearErrors();
  // persform validation adn if validation false then the value of returnal to false
  var name = document.forms["myform"]["fname"].value;
  if (name.length < 4) {
    seterror("name", " *length is to short*");
    returnval = false;
  }

  var email = document.forms["myform"]["femail"].value;
  if (email.length > 40) {
    seterror("email", " *length is too much long baby*");
    returnval = false;
  }
  var phone = document.forms["myform"]["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", " *phone no. cannot be more than 10 numbers*");
    returnval = false;
  }

  // setting password with conditions
  var password = document.forms["myform"]["fpass"].value;
  if (password.length < 6) {
    seterror("pass", " *pass must be  min 6 character long*");
    returnval = false;
  }
  else if (!password.includes("@")) {
    seterror("pass", "*@is miissing");
    returnval = false;
  }
   else if (password.search([a - z]) < 0) {
    seterror("pass", "*smalll alphabet is missing");
    returnval = false;
  }
  else  if (password.search([A - Z]) < 0) {
    seterror("pass", "*capital alphabet is missing");
    returnval = false;
  }
  else if (password.search([0 - 9]) < 0) {
    seterror("pass", "*numeric value  is missing");
    returnval = false;
  }
  else{
    seterror("pass" , "success")
  }

  var cpass = document.forms["myform"]["fcpass"].value;

  if (password != cpass) {
    seterror("cpass", "p and cp must be same");
    returnval = false;
  }
  return returnval;
};
