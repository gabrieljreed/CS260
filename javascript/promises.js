var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

var showOff = function(phone) {
    return new Promise(
        function(resolve, reject) {
            var message = "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone.";

            resolve(message);
        }
    );
};


// call our promise
var askMom = function () {
    console.log("Before");
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
    .catch(function (error) {
        // oops, mom don't buy it
        console.log(error.message);
     // output: 'mom is not happy'
    });
    console.log("After");
};

// let hasBattery = true;
//
// var powerUpPhone = new Promise((resolve, reject) => {
//     if(hasBattery) {
//         resolve('Turning on ${hasBattery}')
//     }
//     else {
//         reject("Your phone is dead :(");
//     }
// });
//
// var turnOn = function() {
//     powerUpPhone
//     .then()
// }
//
// async function displayWeather() {
//     const location = await getUserLocation;
//     const weather = await getWeatherAt(location);
//     console.log(weather);
// }

askMom();
