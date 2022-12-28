function list_write(){
    Swal.fire({
        icon: 'error',        
        backdrop:false,
        title: '너.. 킹명주 아니잖아?',    
        text: '내 일기장이야!! 나만 쓸거야', 
        confirmButtonColor: '#00BFA6',
    });
    //var modal=document.getElementById("modal");
    //modal.style.display='block';
}
function login(){
    (async () => {
        const { value: getName } = await Swal.fire({
            title: '킹명주의 군번을 입력해주세요',
            backdrop:false,
            text: '질문은 랜덤입니다.',
            input: 'text',
            inputPlaceholder: '맞춰보셈',
            confirmButtonColor: '#00BFA6',
        })
    
        // API 호출해야함
    // if (getName)
    Swal.fire({
        icon: 'error',                  
        backdrop:false, 
        title: '땡',    
        confirmButtonColor: '#00BFA6',
    });
    })()
}
function intro(){ 
    Swal.fire({
        imageUrl: 'https://blog.kakaocdn.net/dn/bFRSfm/btrUs1QWAOA/SSl0ywWX60v2IXGRZRsqF1/img.png',
        backdrop:false,
        imageAlt: 'Custom image',
        confirmButtonColor: '#00BFA6',
    });

}
function like(type){
    if(type==1){
        var icon="success";
        var text= "추천 감사합니다~";
    }
    else{
        var icon="warning"
        var text= "응~ 비추는 반영 안돼~";
    }
    const Toast = Swal.mixin({
        toast: true,
        position: 'center-center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: icon,
        title: text,
      })
}
