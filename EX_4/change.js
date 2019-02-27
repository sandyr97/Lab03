function myChange()
{
  let myRed=document.getElementById("r_back").value;
  let myGreen=document.getElementById("g_back").value;
  let myBlue=document.getElementById("b_back").value;
//  var my_width=document.getElementById("w");
  let changed=document.getElementById("m_text");
  if (myRed<0 || myGreen<0 || myBlue<0 || myRed>255 || myGreen>255 || myBlue>255)
  {
    alert("Please enter values between 0-255")
  }
  else
  {
    changed.style.backgroundColor = 'rgb(' + myRed + ',' + myGreen + ',' + myBlue + ')';

  }

}
