
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const section = document.getElementById('section');
const xmark = document.getElementById('xmark');
const button = document.querySelector('.fa-solid');



btn.addEventListener('click', function (){
   section.classList.add('add');
});

xmark.addEventListener('click', function (){
    section.classList.remove('add');
});

button.addEventListener('click', function (){
  document.body.classList.toggle('show-nav');
});

window.addEventListener('click', function (e){
  if(e.target === section){
    return section.classList.remove('add')
  } else{
     false;
  }
});