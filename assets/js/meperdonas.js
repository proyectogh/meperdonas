const divSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const mensaje = document.getElementById('mensaje');
const click = document.getElementById('click');
let divSiTamaño = 20; // Tamaño inicial del div
let divNoTamaño = 20;

divSi.addEventListener('click', () => {
    mensaje.textContent = "¡Gano el amor! ";
    click.textContent = "haz click aqui para reclamar tu premio";
});

botonNo.addEventListener('click', () => {
    divSiTamaño += 15; // Incrementa el tamaño del div cada vez que se presiona "No"
    divSi.style.padding = divSiTamaño + 'px';
    divNoTamaño -=5;
    botonNo.style.padding = botonNoTamaño - 'px';
});