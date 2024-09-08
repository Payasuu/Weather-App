const button = document.getElementById('js-button');
const input = document.getElementById('js-input');
const result = document.getElementById('result-icon');
const weatherCondition = document.getElementById('weater-condition');
const forecastResult = document.getElementById('forecast-result');
const forecastResult2 = document.getElementById('forecast-result2');
const tomorrow = document.getElementById('tomorrow');
const dayAfterTom = document.getElementById('dayAfterTom');
const tomTemp = document.getElementById('tom-temp');
const dayAfterTemp = document.getElementById('day-after-temp');
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        weatherSearch()
    }
   
})
button.addEventListener('click', () => {
     weatherSearch()
     });

     const weatherSearch = async () => {
        try {
            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a099a151de154f529ab103234241007&q=${input.value.toLowerCase()}&days=10&aqi=no&alerts=no`)
            const data = await res.json();
            console.log(data);
            resultWeather(data);

        
    
        }

        catch (err) {
            alert('Not Found');
            
        }
     }

     function resultWeather (data) {
        // Getting Days
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const previousDays = [data.forecast.forecastday[1].date, data.forecast.forecastday[2].date];
        const tom = new Date(previousDays[0]);
        const dayAfter = new Date (previousDays[1]);
        const day1 = tom.getDay();
        const day2 = dayAfter.getDay();

        // Results
        result.src= data.current.condition.icon;
        temperature.innerText = `${Math.floor(data.current.temp_c)} °C`;
        weatherCondition.innerText = data.current.condition.text;
        forecastResult.src= data.forecast.forecastday[1].day.condition.icon;
        forecastResult2.src= data.forecast.forecastday[2].day.condition.icon;
        tomorrow.innerText = week[day1];
        dayAfterTom.innerText = week[day2];
        tomTemp.innerText = `${Math.floor(data.forecast.forecastday[1].day.avgtemp_c)} °`;
        dayAfterTemp.innerText = `${Math.floor(data.forecast.forecastday[2].day.avgtemp_c)} °`;
     }
   