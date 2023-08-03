console.log("funcionando");

const formulario = document.querySelector('#formulario')
const btnEnviar  = document.querySelector('#btnEnviar')
const btnLoading = document.querySelector('#btnLoading')



formulario.addEventListener('submit', (e) => {
  //  console.log('me diste click')
    e.preventDefault(() => {

    },3000)

    const datos = new FormData(formulario)

    console.log('campo Email', datos.get('emailCampo'))
    console.log('campo Password', datos.get('passCampo'))
    console.log('campo Checkbox', datos.get('checkCampo'))

    btnEnviar.classList.add('d-none')
    btnLoading.classList.remove('d-none')



    window.setTimeout(() => {   
        btnEnviar.classList.remove('d-none')
        btnLoading.classList.add('d-none')
    },3000)





    formulario.reset()
    




})