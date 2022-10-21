
const apiKey = '889df5759ff5215bfcd5907b99b70168';

const baseURL = 'https://api.openweathermap.org/';

function weatherSearch(city){
    
    const url = `${baseURL}data/2.5/weather?q=${city}&APPID=${apiKey}`;

    
    $.ajax(url).then((data) => {
        console.log(data);
        
        const $main = $('main');
        $main.empty();

        $main.html(`
        <div class="city">Weather For: ${city}</div>
        <div class="temp">Temperature: ${Math.floor((1.8*(data.main.temp-273) + 32))}</div>
        <div class= "feels">Feels Like: ${Math.floor((1.8*(data.main.feels_like -273) + 32))}</div>
        <div class="weather">Weather: ${data.weather[0].description}</div>
        `);
    })
    
}

$("input[type=submit]").on("click", (event) => {

    event.preventDefault();

    const inputText = $("input[type=text]").val();
    
    weatherSearch(inputText);
    $('input[type=text]').val('')
})

$("input[type=text]").on("keydown", (event) => {

    if (event.keyCode == 13){
        console.log(event)
        const inputText = $("input[type=text]").val();
    
        weatherSearch(inputText);
        event.currentTarget.value = "";
    }
})

weatherSearch('Denver');




























// // grab the submit button, put a click event on it
// $("input[type=submit]").on("submit", (event) => {

//     // prevent the refresh
//     event.preventDefault()

//     // grab text from input box
//     const inputText = $("input[type=text]").val()
    
//     // update the screen
//     weatherSearch(inputText)
// })


