function myVal()
{
  var pass1=document.getElementById("password1").value;
  var pass2=document.getElementById("password2").value;
  if (pass1!==pass2)
  {
    if (pass1.length< 8 || pass2.length<8){
    window.alert("Please enter a password with at least eight characters!");
  }
    else {
      window.alert("The password does not matches!");
    }

  }
  else {
    if (pass1.length< 8 || pass2.length<8)
    window.alert("Please enter a password with at least eight characters!");
    else {
      window.alert("The password is a match");
    }
  }
}
