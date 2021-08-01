const btnDark = document.getElementById('btnDark');
const txtDark = document.getElementById('txtDark');


btnDark.addEventListener('click', ()=>{
    btnDark.classList.toggle('active');
    document.body.classList.toggle('dark');

    if(btnDark.classList.contains('active')){
        localStorage.setItem('dark-mode', 'true');
    }
    else{
        localStorage.setItem('dark-mode','false')
    }    
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnDark.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnDark.classList.remove('active');

}
