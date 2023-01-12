
const loginValue = document.getElementById('login-span')
const inputName = document.getElementById('name-input')
const inputPass = document.getElementById('pass-input')
const submitButton = document.getElementById('submit-button')





submitButton.addEventListener('click', (e) =>{
    e.preventDefault()
    if(inputName.value !== '' && inputPass.value === '12345'){
        loginValue.style = 'color: green'
        loginValue.innerText = 'Logado com Sucesso'
        setTimeout(() => {
            loginValue.innerText = ''
        }, 2000);
     
    }else{
        loginValue.style = 'color: red'
        loginValue.innerText = 'Dados Inválidos'
        setTimeout(() => {
           loginValue.innerText = ''
        }, 2000);
    }
})