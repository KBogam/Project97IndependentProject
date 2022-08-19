function generateFact()
{
   var randomNum = Math.floor(Math.random() * 11);
   alert("Random Fact Generated")
   if(randomNum == 1)
   {
    document.getElementById("autoFact").innerHTML = "Light travels slower through different mediums such as glass, water and air.";
   }

   if(randomNum == 2)
   {
    document.getElementById("autoFact").innerHTML = "Light is a beam of energy that travels in a wave.";
   }


   if(randomNum == 3)
   {
    document.getElementById("autoFact").innerHTML = "Plants turn light energy from the Sun into food. This is called photosynthesis.";
   }


   if(randomNum == 4)
   {
    document.getElementById("autoFact").innerHTML = "Light travels at 300,000 km/second";
   }


   if(randomNum == 5)
   {
    document.getElementById("autoFact").innerHTML = "People need light so we can see.";
   }


   if(randomNum == 6)
   {
    document.getElementById("autoFact").innerHTML = "Light travels in a straight line. Objects in its path cause light to bend or refract.";
   }


   if(randomNum == 7)
   {
    document.getElementById("autoFact").innerHTML = "This is the speed when light is travelling in a vacuum and not obstructed by the atmosphere.";
   }


   if(randomNum == 8)
   {
    document.getElementById("autoFact").innerHTML = "Travelling at the speed of light, you could go around Earth 7.5 times in a second.";
   }


   if(randomNum == 9)
   {
    document.getElementById("autoFact").innerHTML = "Visible light makes up less than one ten-billionth of the electromagnetic spectrum, which stretches from radio waves to gamma rays.";
   }


   if(randomNum == 10)
   {
    document.getElementById("autoFact").innerHTML = "Goldfish can see infrared radiation that is invisible to us. Bees, birds and lizards have eyes that pick up ultraviolet.";
   }

}