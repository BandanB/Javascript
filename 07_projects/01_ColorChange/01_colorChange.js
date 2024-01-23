let buttons =document.querySelectorAll('.button')
let body = document.querySelector('body')

console.log(buttons);
buttons.forEach(function(btns){
    console.log(btns)
    btns.addEventListener('click', function(e){
      console.log(e); 
      console.log(e.target);
      if(e.target.id ==='button1'){
      body.style.backgroundColor ="red"
      }
      if(e.target.id ==='button2'){
      body.style.backgroundColor ="gray"
      }
      if(e.target.id ==='button3'){
      body.style.backgroundColor ="green"
      }
      if(e.target.id ==='button4'){
      body.style.backgroundColor ="blue"
      }
        })
})

