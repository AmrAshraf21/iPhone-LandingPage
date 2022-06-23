let image = document.querySelector('.img');

let images = document.querySelectorAll('.icons img');
let header = document.querySelector('.header');
console.log();
images.forEach((img)=>{
   img.addEventListener('click',function(){
    image.src = this.src;
   let bgColor=img.getAttribute('data-color');
   header.style.backgroundColor = bgColor
  
    })
})