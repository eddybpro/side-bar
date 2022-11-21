const menu = document.getElementById('menu')
const list = document.querySelector('.list')
const li_el = list.querySelectorAll('li');

menu.addEventListener('click', ()=>{
    list.classList.toggle('active')
    menu.classList.toggle('fa-times')
})

li_el.forEach(li=>{
    li.addEventListener('click', ()=>{
        list.classList.remove('active')
        menu.classList.remove('fa-times')
    })
})