function play(arg) {
    
}

function stop() {
    
}

function next() {
    
}

var json;
var skycons;
function update(arg) {
skycons = new Skycons({"monochrome": false});

skycons.play();

    json = JSON.parse(arg);
    weather.zipcode = json.zipcode;
    weather.fetch(json.zipcode)
}

weather = {
    zipcode : undefined,
    fetch : function(arg_location) {
/*        $.simpleWeather(
            {
                location: arg_location,
                unit: 'f',
                success: function(weather) {
                    //run if we successfully fetch the weather
                    console.dir(weather) */
                    
                    //for (var i = 0; i<weather.forecast.length; i++) {
                    for (var i = 0; i<7; i++) {
                        //$("#day" + (i+1) + " .day-title").html(weather.forecast[i].day) //set the name of the day
                        
                        //var code = Number(weather.forecast[i].code); //use the Yahoo weather code to pick an image
                        var code = Number(Math.floor(Math.random() * 47)); //use the Yahoo weather code to pick an image
                        
                        skycons.set($("#day" + (i+1) + " canvas").get(0), skyconMap[code]);
                        
                        //fetch temps
                        //$("#day" + (i+1) + " .temp-high").html(Number(weather.forecast[i].high));
                        //$("#day" + (i+1) + " .temp-low").html(Number(weather.forecast[i].low));
                        $("#day" + (i+1) + " .temp-high").html(Number(Math.floor(Math.random() * 35)));
                        $("#day" + (i+1) + " .temp-low").html(Number(Math.floor(Math.random() * 15)));
                    }
                    
                    //wait for the images to load, then begin the animating in
                    setTimeout(
                        function(){
                            $("#day1").fadeTo("slow", 1);
                            $("#day2").delay(400).fadeTo("slow", 1);
                            $("#day3").delay(800).fadeTo("slow", 1);
                            $("#day4").delay(1200).fadeTo("slow", 1);
                            $("#day5").delay(1600).fadeTo("slow", 1);
                            $("#day6").delay(2000).fadeTo("slow", 1);
                            $("#day7").delay(2400).fadeTo("slow", 1);
                    }, 100)
/*                }
            }
        ) */
    },
}

skyconMap = [ //matches codes from Yahoo weather to Skycons
        Skycons.WIND, //0 tornado
        Skycons.WIND, //1 tropical storm
        Skycons.WIND, //2 hurricane
        Skycons.THUNDER, //3 severe thunderstorms
        Skycons.THUNDER, //4 thunderstorms
        Skycons.RAIN_SNOW, //5 mixed rain and snow
        Skycons.SLEET, //6 mixed rain and sleet
        Skycons.SLEET, //7 mixed snow and sleet
        Skycons.SLEET, //8 freezing drizzle
        Skycons.RAIN, //9 drizzle
        Skycons.SLEET, //10 freezing rain
        Skycons.SHOWERS_DAY, //11 showers
        Skycons.SHOWERS_DAY, //12 showers
        Skycons.SNOW, //13 snow flurries
        Skycons.SNOW, //14 light snow showers
        Skycons.SNOW, //15 blowing snow
        Skycons.SNOW, //16 snow
        Skycons.HAIL, //17 hail
        Skycons.SLEET, //18 sleet
        Skycons.CLOUDY, //19 dust
        Skycons.FOG, //20 foggy
        Skycons.FOG, //21 haze
        Skycons.CLOUDY, //22 smokey
        Skycons.PARTLY_CLOUDY_NIGHT, //23 blustery
        Skycons.WIND, //24 windy
        Skycons.CLOUDY, //25 cold
        Skycons.CLOUDY, //26 cloudy
        Skycons.PARTLY_CLOUDY_NIGHT, //27 mostly cloudy night
        Skycons.CLOUDY, //28 mostly cloudy day
        Skycons.PARTLY_CLOUDY_NIGHT, //29 partly cloudy night
        Skycons.PARTLY_CLOUDY_DAY, //30 partly cloudy day
        Skycons.CLEAR_NIGHT, //31 clear night
        Skycons.CLEAR_DAY, //32 sunny
        Skycons.PARTLY_CLOUDY_DAY, //33 fair night
        Skycons.PARTLY_CLOUDY_DAY, //34 fair day
        Skycons.SLEET, //35 mixed rain and hail
        Skycons.CLEAR_DAY, //36 hot
        Skycons.CLOUDY, //37-39 various forms of Tstorms
        Skycons.CLOUDY,
        Skycons.CLOUDY, //39
        Skycons.SHOWERS_DAY, //40 scattered showers
        Skycons.SNOW, //41 heavy snow
        Skycons.SNOW_SHOWERS_DAY, //42 scattered snow showers
        Skycons.SNOW, //43 heavy snow
        Skycons.PARTLY_CLOUDY_DAY, //44 partly cloudy
        Skycons.THUNDER_RAIN, //45 thundershowers
        Skycons.SNOW_SHOWERS_DAY, //46 snow showers
        Skycons.THUNDER_SHOWERS_DAY //47 isolated thundershowers
    ]

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var weekdayShort = new Array(7);
weekdayShort[0] =  "Sun";
weekdayShort[1] = "Mon";
weekdayShort[2] = "Tue";
weekdayShort[3] = "Wed";
weekdayShort[4] = "Thur";
weekdayShort[5] = "Fri";
weekdayShort[6] = "Sat";
