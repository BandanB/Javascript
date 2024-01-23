
// let result = document.querySelector('#text3')

const form =document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(e);
let height =parseInt(document.querySelector('#text1').value)
let weight =parseInt(document.querySelector('#text2').value)
let res =document.querySelector('.res')
let res1 =document.querySelector('.res1')

if(height==='' || height<0 || isNaN(height)){
    res.innerHTML="enter valid hight in number"
}
else if(weight==='' || weight<0 || isNaN(weight)){
    res.innerHTML="enter valid weight in number"
}
    else{
        let finalResult =weight/((height*height)/10000)
        res.innerHTML=`${finalResult}`
        if(finalResult<=18.6){
            res1.innerHTML="You're under weight"
        }
        if(finalResult>=18.6 && finalResult<=24.9){
            res1.innerHTML="You've normal weight"
        }
        if(finalResult>=24.9){
            res1.innerHTML="You're over weight"
        }
    }

})
