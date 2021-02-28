const url = "https://api.nasa.gov/planetary/apod?api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY"

// fetch(url)
//     .then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         console.log(json);
//
//         var results = "";
//
//         results += "<h2>NASA Astronomy Picture of the Day</h2>";
//         results += '<img src="' + json.url + '">';
//
//
//         document.getElementById("apodResult").innerHTML = results;
//     });




var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var todayStr = yyyy + "-" + mm + "-" + dd;
console.log(todayStr);

const url2 = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY";

const url3 = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + todayStr + '&end_date=' + todayStr + '&api_key=9H2KoU1Ad1GyiLjQKLMzH8GYUf1SmgzpBUYd0AwY'

fetch(url3)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        var asteroidsResult = "";
        for(const property in json.near_earth_objects) {
            console.log(`${property}: ${json.near_earth_objects[property]}`);
            asteroidsResult += "<h3>There are " + json.near_earth_objects[property].length + " asteroids near the earth today.</h3>";
            console.log("There are " + json.near_earth_objects[property].length + " asteroids near the earth today.");
            var count = 0;
            for(let i = 0; i < json.near_earth_objects[property].length; i++) {
                if(json.near_earth_objects[property][i].is_potentially_hazardous_asteroid) {
                    count++;
                }
            }
            if(count === 1) {
                asteroidsResult += "<p>" + count + " of them is potentially dangerous</p>";
                console.log(count + " of them is potentially dangerous.");
            }
            else {
                json.near_earth_objects[property].length
                console.log(count + " of them are potentially dangerous.");
            }

            document.getElementById("asteroidsResult").innerHTML = asteroidsResult;
        }
    });
