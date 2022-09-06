// Set the date we're counting down to
var countDownDate = new Date("Sep 10, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span> <p id="clock"> ' + '<span id="hours">' + hours + ' : </span>' +
        '<span id="minutes">' + minutes + ' : </span>' + '<span id="seconds">' + seconds + '</span></p>';
    var z = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML = '<span id="day">' + days + '</span> <p id="clock"> ' + '<span id="hours">' + hours + ' : </span>' +
            '<span id="minutes">' + minutes + ' : </span>' + '<span id="seconds">' + seconds + '</span></p>';
    }
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        var demos = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            z[i].innerHTML = '<span id="day">' + 0 + '</span> <p id="clock"> ' + '<span id="hours">' + 00 + ' : </span>' +
                '<span id="minutes">' + 00 + ' : </span>' + '<span id="seconds">' + 00 + '</span></p>';
        }

        var expire = document.getElementsByClassName("after-expire");
        for (var i = 0; i < z.length; i++) {
            expire[i].setAttribute("id", "offer-expire-text");
        }

        var inner_expire = document.getElementsByClassName("after-expire");
        for (var i = 0; i < z.length; i++) {
            inner_expire[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسید!";
        }

        var offer_card = document.getElementsByClassName("offer-card");
        for (var i = 0; i < z.length; i++) {
            offer_card[i].style.filter = 'blur(2px)';
        }
    }
}, 1000);

$('.tt').toolip('show');

$('.po').popover('show');

$('.tot').toast('show');