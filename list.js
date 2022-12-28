window.onload=function load(){
    var diary=document.getElementById("diary");
    
    var date=document.getElementById("date");
    date.innerText="2022-12-21\n14:54";
    date.style.display="block";

    var state=document.getElementById("state");
    var weather=document.createElement("img");
    var mood=document.createElement("img");
    weather.id="weather";
    weather.src="images/rain.png";
    mood.id="mood";
    mood.src="images/angry.png"
    state.append(weather);
    state.append(mood);
    state.style.display="block";

    var title=document.getElementById("title");
    title.innerText="어디로 가야하오..?";
    title.style.display="block";

    var rec=document.getElementById("rec");
    rec.style.display="block";
    state.append(weather);
    state.append(mood);
}
function detail(id){
    
}