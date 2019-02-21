function showTime()
{
    var d = new Date();
    var hour = d.getHours(); // 0 - 23
    var minutes = d.getMinutes(); // 0 - 59
    var second = d.getSeconds(); // 0 - 59
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day= d.getDay();
    var day_name=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month_name=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var watch= date + ":" + month_name[month] + ":" + year + ": "+ day_name[day];
    console.log(watch);
    var time = hour + ":" + minutes + ":" + second + " ";
    console.log(time);
    setTimeout(showTime, 1000);
}
showTime();
