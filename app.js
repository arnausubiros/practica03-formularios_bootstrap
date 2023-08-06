
console.log('funcionando!')

const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btnEnviar');
const btnLoading = document.querySelector('#btnLoading');


const toast = document.querySelector('.toast')



formulario.addEventListener('submit', e => {
    
    btnEnviar.classList.add('d-none');
    btnLoading.classList.remove('d-none');
    
    e.preventDefault();

    const datos = new FormData(formulario);

    console.log('email:', datos.get('emailCampo'));
    console.log('password: ', datos.get('passCampo'));
    console.log('aceptar: ', datos.get('checkCampo'));

    // Enviar datos según sistema de backend
    // PHP: https://www.youtube.com/watch?v=nLrL9Ip3tWI

    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnLoading.classList.add('d-none')


         const eventoToast = new bootstrap.Toast(toast)
         eventoToast.show()
        
    

    }, 1000)

})