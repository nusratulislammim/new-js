const apiKey = "a7334ddd60418281f1c645aaeffd0ad8";
const searchBtn = document.getElementById("searchBtn")
const cityInput = document.getElementById("cityInput")
const weatherInfo = document.getElementById("weatherInfo")

searchBtn.addEventListener('click', async function(){
    const city = cityInput.value.trim();
    if (city === "") {
    weatherInfo.innerHTML = `<p style="color:red;">Please enter a city name</p>`;
    return;
  }
try{
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if(!response.ok){
        throw new Error("City not found");
    }
    const data = await response.json();
    const temp = data.main.temp.toFixed(1);
    const weather = data.weather[0].main;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    weatherInfo.innerHTML = `
    <h3 style="color: rgb(34, 68, 41);">${data.name}</h3>
    <img src="${icon}" alt="${weather}">
    <p>${temp}°C</p>
    <p>${weather}</p>`;
}
catch(error){
    weatherInfo.innerHTML = `<p style="color:red;">${error.message}</p>`
}

});
