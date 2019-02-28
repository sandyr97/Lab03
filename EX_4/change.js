function myChange()
{
  let backRed=document.getElementById("r_back").value;
  let backGreen=document.getElementById("g_back").value;
  let backBlue=document.getElementById("b_back").value;
  let bordRed=document.getElementById("r_bord").value;
  let bordGreen=document.getElementById("g_bord").value;
  let bordBlue=document.getElementById("b_bord").value;
  let bordWidth=document.getElementById("w_bord").value;
  let changed=document.getElementById("m_text");
  if (backRed<0 || backGreen<0 || backBlue<0 || backRed>255 || backGreen>255 || backBlue>255)
  {
    alert("Please enter values between 0-255")
  }
  else
  {
    changed.style.backgroundColor = 'rgb(' + backRed + ',' + backGreen + ',' + backBlue + ')';

  }
  if (bordRed<0 || bordGreen<0 || bordBlue<0 || bordRed>255 || bordGreen>255 || bordBlue>255)
  {
    alert("Please enter values between 0-255")
  }
  else
  {
    changed.style.borderColor = 'rgb(' + bordRed + ',' + bordGreen + ',' + bordBlue + ')';

  }

  changed.style.borderWidth = bordWidth + "px";

}
