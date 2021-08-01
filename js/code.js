const btnDark = document.getElementById('btnDark');
const txtDark = document.getElementById('txtDark');


btnDark.addEventListener('click', ()=>{
    btnDark.classList.toggle('active');
    document.body.classList.toggle('dark');

    if(btnDark.classList.contains('active')){
        localStorage.setItem('dark-mode', 'true');
        txtDark.textContent = 'Dark Mode';
    }
    else{
        localStorage.setItem('dark-mode','false')
        txtDark.textContent = 'Light Mode'
    }    
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnDark.classList.add('active');
    txtDark.textContent = 'Dark Mode';
}else{
    document.body.classList.remove('dark');
    btnDark.classList.remove('active');
    txtDark.textContent = 'Light Mode';

}
