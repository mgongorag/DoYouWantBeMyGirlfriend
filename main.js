const btn_no = document.getElementById('btn-no');
const btn_yes = document.getElementById('btn-yes');
const spinner = document.getElementById('spinner');
const alerta = document.getElementById('alerta');

console.log(spinner);
btn_yes.addEventListener('click', (e) => {
    setTimeout(() => {
        spinner.classList.add('d-none');
        alerta.classList.remove('d-none')
    }, 2000);

    btn_no.classList.add('d-none');
    btn_yes.classList.add('d-none');
    spinner.classList.remove('d-none');

})

btn_no.addEventListener('mouseenter', (e)=>{
    let randomX = random()
    let randomY = random();
    
    btn_no.style.right = (randomX) + '%';
    btn_no.style.top = (randomY) + '%';
    console.log(random);

});

function random() {
    return Math.round(Math.random() * (100 - 0) + 0);
}