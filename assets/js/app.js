
window.onload = () => {

    let contenedor = document.getElementById('container_loader');

    contenedor.style.visibility = 'hiden';
    contenedor.style.opacity = '0';
    
    
}

function closeLoader(){

    setTimeout( () => {
        let contenedor = document.getElementById('container_loader');
        contenedor.classList.add('container_loader--close')
    }, 1700)
}

closeLoader();


let inputCheck = document.getElementById('menuPush__input');


inputCheck.addEventListener('change', (e) => {

    let sideBar = document.getElementById('nav');
    let divMenu = document.getElementById('divMenuPush');

    if(e.target.checked){
        
        divMenu.classList.add('showInput');
        divMenu.classList.remove('hideInput');
        sideBar.classList.add('showMenu');
        sideBar.classList.remove('hideMenu');

    }else{
        divMenu.classList.add('hideInput');
        divMenu.classList.remove('showInput');
        sideBar.classList.add('hideMenu');
        sideBar.classList.remove('showMenu');
    }

});