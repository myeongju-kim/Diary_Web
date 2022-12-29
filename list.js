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
    var backg=document.getElementById("diary_block");
    backg.style.display="block";
    document.body.style.background="rgba(0, 0, 0, 0.2)"
    var diary=document.getElementById("modal");
    diary.style.display="block";

    var modal_date=document.getElementById("date2");
    modal_date.innerText="2022-12-21";

    var modal_title=document.getElementById("title2");
    modal_title.innerText="어디로 가야하오..?";

    var modal_content=document.getElementById("content");
    modal_content.innerText="11월 부터는 확실히 채용을 거의 안한다.. ㅜㅜ 내년에는 기업들이 신입을 많이 뽑을까..?? 불안한 느낌도 있다.. 그리고 가장 고민되는 부분은 정말 내가 원하는 테마의 기업에만 도전하는 것과 현실을 고려해서 일단 다 원서를 때려박는 것 이 두가지가 고민된다..";
   
}
function exit(){
    var backg=document.getElementById("diary_block");
    backg.style.display="none";
    document.body.style.background="#FAFAFA"
    var diary=document.getElementById("modal");
    diary.style.display="none";
}
