let count=0;
photo_bank =
{
  0: "orca",
  1: "beluga",
  2: "humpback",
  3: "blue",
  4: "narwhal"
};
function slide(i)
{
  if (i<0)
  {
    count=4;
  }
  else if (i>4)
  {
    count=0;
  }
  image.src = photo_bank[count] + ".jpg"

}
function myNext()
{

  slide(++count);

}
function myPrevious()
{
  slide(--count);
}
