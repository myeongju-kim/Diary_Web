window.onload=function load(){
    $.ajax({
        url: 'http://localhost:8080/api/v1/note?page=0',
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
                diary.setAttribute("id",lists[i].id)
                diary.appendChild(title)
            }
            
        },
        error:function(request,status,error){
          document.write(error);
        }
    })
}
function detail(diary){
    $.ajax({
        url: 'http://localhost:8080/api/v1/note/'+$(diary).attr('id'),
        type: 'GET',
        success: function(data){
            const dataJson = JSON.stringify(data)
            const info=JSON.parse(dataJson).result
            document.body.style.background="rgba(0, 0, 0, 0.2)"

            var detail=document.getElementById("modal")
            detail.style.display="block"
        
        
            var exit=document.getElementById("exit")
            exit.onclick=function(){
                document.body.style.background="#FAFAFA"
                detail.style.display="none"
            }
        
            var date=document.getElementById("date2")
            date.innerText=info.date
        
            var title=document.getElementById("title2")
            title.innerText=info.title
        
            var content=document.getElementById("content")
            content.innerText=info.content
            
        },
        error:function(request,status,error){
            Swal.fire({
                icon: 'error',                  
                backdrop:false, 
                title: '불러올 수 없는 일기장입니다.',    
                confirmButtonColor: '#00BFA6',
            });
        }
    })
    
}
