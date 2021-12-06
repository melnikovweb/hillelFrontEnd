const block = document.querySelector('.block');

setInterval(
    ()=>block.style.background='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(),
500
)

setInterval(
    ()=>{
    block.style.left=Math.floor(Math.random() * (window.innerWidth-100)) + 'px';
    block.style.top=Math.floor(Math.random() * (window.innerHeight-100)) + 'px';
},
1000
)