let API_KEY = 'a6603fc58df449de2b14441763a9ad80'
const input = document.getElementById('cityName')
const form = document.getElementById('weatherForm')
const result = document.getElementById('result')

form.addEventListener('submit', async (e) =>{
    e.preventDefault() // no refresh
    const city = input.value
    console.log(city) // console
    form.reset() // input nil

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    result.innerHTML =`<p style="color:blue"> Loading... </p>`
    try{
    const res = await fetch(url)
     if(!res.ok){
            alert("city not found")
            throw new Error("No city")
        } 

        const data = await res.json() 

            const temp = data.main.temp
            const humid = data.main.humidity

            result.innerHTML =
            `<h2> ${city.toUpperCase()} </h2>
            <p> 🌡️ Temperature : ${temp} °C
            <p> ☁️ Humidity : ${humid} %`

            console.log(data)
            // alt + 0176
    } catch (err){
        console.error("Data error ", err.message)
        result.innerHTML = `<p style="color:red"> ${err.message} </p> `
    }

})
        
        
   
