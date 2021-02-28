const url = "https://api.nasa.gov/planetary/apod?api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY"

fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);

        var results = "";

        results += "<h2>NASA Astronomy Picture of the Day</h2>";
        results += '<img src="' + json.url + '">';

        results += "<h3>" + json.title + "</h3>";
        results += "<p><em>" + json.explanation + "</em></p>";

        document.getElementById("apodResult").innerHTML = results;
    });




var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var todayStr = yyyy + "-" + mm + "-" + dd;
// console.log(todayStr);

const url2 = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY";

const url3 = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + todayStr + '&end_date=' + todayStr + '&api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY'

fetch(url3)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        // console.log(json);
        var asteroidsResult = "";
        for(const property in json.near_earth_objects) {
            // console.log(`${property}: ${json.near_earth_objects[property]}`);
            asteroidsResult += "<h2>There are " + json.near_earth_objects[property].length + " asteroids near the earth today.</h2>";
            // console.log("There are " + json.near_earth_objects[property].length + " asteroids near the earth today.");
            var count = 0;
            for(let i = 0; i < json.near_earth_objects[property].length; i++) {
                if(json.near_earth_objects[property][i].is_potentially_hazardous_asteroid) {
                    count++;
                }
            }
            if(count === 1) {
                asteroidsResult += "<p><em>" + count + " of them is potentially dangerous</em></p>";
                // console.log(count + " of them is potentially dangerous.");
            }
            else {
                asteroidsResult += "<p><em>" + count + " of them are potentially dangerous</em></p>";
                // console.log(count + " of them are potentially dangerous.");
            }

            document.getElementById("asteroidsResult").innerHTML = asteroidsResult;
        }
    });

const url4 = "https://api.nasa.gov/insight_weather/?api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY&feedtype=json&ver=1.0"

fetch(url4)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        // console.log(json);
        // console.log(json.sol_keys[0]);
        // console.log(json[Object.keys(json)[0]].Season);
        // console.log(json[Object.keys(json)[0]].Month_ordinal);

        var marsResult = "";

        marsResult += "<h2>On Mars, it's currently Sol* " + json.sol_keys[0] + ", in month " + json[Object.keys(json)[0]].Month_ordinal + " of the " + json[Object.keys(json)[0]].Season + ".</h2>";
        marsResult += "<p><em>*One Sol = One day on Mars</em></p>";

        document.getElementById("marsResult").innerHTML = marsResult;
    });
