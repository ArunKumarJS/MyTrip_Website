const weather = [{
			"city": "Canberra",
			"temp_Celsius": 32,
			"temp_Fahr": 89.6
		},
		{
			"city": "Tokyo",
			"temp_Celsius": 27,
			"temp_Fahr": 80.6
		},
		{
			"city": "London",
			"temp_Celsius": 22,
			"temp_Fahr": 71.6
		},
		{
			"city": "Dubai",
			"temp_Celsius": 38,
			"temp_Fahr": 100.4
		}
	];


    
    document.getElementById("weather-container").innerHTML = `
    ${weather.map(function(cites){
        return `
        <div class="weather-box">
            <p class="city_name">${cites.city}</p>
            <img class="weather-style" src="./assets/icon-party-sunny.svg">
            <p class="city_temp">${cites.temp_Celsius}&#176;</p>
        </div>
        `
    }).join("")}
    `

