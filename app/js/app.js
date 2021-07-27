var $destination_time = new Date("July 17, 2022 24:00:00").getTime();

var interval = setInterval(function(){
    var $now_time = new Date().getTime();
    var $time_left = Math.floor($destination_time - $now_time);
    var $days = Math.floor($time_left / (1000 * 60 * 60 * 24));
    var $hours = Math.floor(($time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var $minutes = Math.floor(($time_left % (1000 * 60 * 60)) / (1000 * 60));
    var $seconds = Math.floor(($time_left % (1000 * 60)) / 1000);

    $('.days__timer').html($days);
    $('.hours__timer').html($hours);
    $('.minutes__timer').html($minutes);
    $('.seconds__timer').html($seconds);

    if($time_left <= 0) {
        clearInterval(interval);
        alert("EXPIRED");
    }
},1000);


