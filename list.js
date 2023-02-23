window.onload=function load(){
    $.ajax({
        url: 'http://localhost:8080/api/v1/note?page=2',
        type: 'GET',
        success: function(data){
            const dataJson = JSON.stringify(data)
            const lists=JSON.parse(dataJson).result
            for(var i=0; i<lists.length; i++){
                var diary=document.getElementById("d"+String(i))
                diary.style.display="block"
                var date=document.createElement("div")
                var temp=lists[i].date.split(" ")
                date.setAttribute("id","date")
                date.innerText=temp[0]+"\n"+temp[1]
                diary.appendChild(date)

                var state=document.createElement("div")
                state.setAttribute("id","state")
                var weather=document.createElement("img");
                var mode=document.createElement("img");
                weather.setAttribute("id","weather")
                weather.src="images/w"+lists[i].weather+".png"
                mode.setAttribute("id","mode")
                mode.setAttribute("src","images/m"+lists[i].mode+".png")
                state.appendChild(weather);
                state.appendChild(mode);
                diary.appendChild(state)

                var title=document.createElement("div")
                title.setAttribute("id","title")
                title.innerText=lists[i].title
                diary.appendChild(title)
            }
            
        },
        error:function(request,status,error){
          document.write(error);
        }
    })
}
function detail(id){
    document.body.style.background="rgba(0, 0, 0, 0.2)"

    var detail=document.getElementById("modal")
    detail.style.display="block"

    var exit=document.getElementById("exit")
    exit.onclick=function(){
        document.body.style.background="#FAFAFA"
        detail.style.display="none"
    }

    var date2=document.getElementById("date2")
    date2.innerText=temp[0]

    var title2=document.getElementById("title2")
    title2.innerText=temp_title

    var content=document.getElementById("content")
    content.innerText="내용쿠"+String(i)
}
