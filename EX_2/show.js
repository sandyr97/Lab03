let count=0;
function myNext(n)
{
  if (count=0)
  {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "";
    count++;
  }

  //var theImgTag = document.getElementById("myImgId")

}
function myPrevious()
{
  document.getElementById("1").style.display = "";
  document.getElementById("2").style.display = "none";
}
