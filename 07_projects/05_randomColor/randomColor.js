const randomColor =function(){
    let hex='0123456789ABCDEF'
    color ='#'
    for(i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
console.log(randomColor());
let myInterval;
document.getElementById('start').addEventListener('click',function(){
    function bgcolor(){
        document.body.style.backgroundColor=randomColor();
        console.log(randomColor());
    }
    if(!myInterval){
        myInterval =setInterval(bgcolor,1000)
     }
})
document.getElementById('stop').addEventListener('click',function(){
    clearInterval(myInterval);
    myInterval=null;
})

