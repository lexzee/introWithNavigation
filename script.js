const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menuM');
const feature = document.querySelector(".feature");
const company = document.querySelector(".company");
const subFeature = document.getElementById('n1')
const subCompany = document.getElementById('n2');


btn.addEventListener('click', ()=> {
  menu.classList.toggle('hidden');
})
feature.addEventListener('click', ()=> {
  subFeature.classList.toggle('hidden');
});

company.addEventListener('click', ()=> {
  subCompany.classList.toggle('hidden');
});


const feature1 = document.querySelector(".feature1");
const company1 = document.querySelector(".company1");
const subFeature1 = document.getElementById('m1')
const subCompany1 = document.getElementById('m2');

feature1.addEventListener('click', ()=> {
  subFeature1.classList.toggle('hidden');
});

company1.addEventListener('click', ()=> {
  subCompany1.classList.toggle('hidden');
});

console.log('Hello');