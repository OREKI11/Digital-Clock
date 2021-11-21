function displaytime () {
    var datetime = new Date ();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var session = document.getElementById("sessions"); 

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML =sec;


}
setInterval(displaytime, 10);