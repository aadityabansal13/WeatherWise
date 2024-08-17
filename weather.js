async function  weather(){
    let city=document.getElementById("search").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba439bd69e805343404955a719d8098f&units=metric`
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        document.getElementById("location_val").innerHTML=result.name;
        document.getElementById("temp_val").innerHTML=Math.floor(result.main.temp);
        document.getElementById("pre_val").innerHTML=result.main.pressure+" mbar";
        document.getElementById("feels_like").innerHTML="Feels Like "+Math.floor(result.main.feels_like)+"&degc";        ;
        document.getElementById("hum_val").innerHTML=result.main.humidity+" %";
        document.getElementById("wind_val").innerHTML=result.wind.speed+" km/h";
    } catch (error) {
        // console.error(error);
        alert("city not found");
    }
}
