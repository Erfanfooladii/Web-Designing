let scmo=document.getElementById('scmo');

document.body.onscroll=function(){
    let mt=document.documentElement.scrollTop;
    if(mt > 300){
        scmo.style.opacity= 1;
    }else{
        scmo.style.opacity= 0;
    }
}
scmo.onclick=function(){
    let mtt=document.documentElement.scrollTop;
    let anim=setInterval(function(){
        document.documentElement.scrollTop= mtt -= 20;
        if(mtt < 1){
            clearInterval(anim)
        }
    },2)
}