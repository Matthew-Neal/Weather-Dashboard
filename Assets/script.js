$(document).ready(function () {

    setInterval(function () {
        $("#dateDisplay").text(moment().fomat("MMMM Do YYYY, h:mm:ss a"))
    }, 1000);
});