function checkMile()
{
    var seconds = document.getElementById("secondsForMile").value;

    document.getElementById("mile").innerHTML = seconds/186282 + " seconds";
}



function checkFeet()
{
    var seconds = document.getElementById("secondsForFeet").value;

    document.getElementById("feet").innerHTML = seconds/983571056 + " seconds";
}



function checkMeter()
{
    var seconds = document.getElementById("secondsForMeter").value;

    document.getElementById("meter").innerHTML = seconds/299792458 + " seconds";
}

