const form = document.querySelector('#form')
const input = document.querySelector('#input')
const inputCont = document.querySelector('.input-cont')

form.onsubmit = () => {
    const email = input.value

    if(isEmail(email)){
        console.log('success!!!')
        const oldP = document.querySelector('.error')
        if(oldP){
            inputCont.removeChild(oldP)
        }
    }
    else{
        const oldP = document.querySelector('.error')
        if(oldP){
            inputCont.removeChild(oldP)
        }
        const p = document.createElement('p')
        p.className = 'error'
        p.innerText = 'Check your email please'
        p.style.cssText = `
            color: var(--Light-Red);
            font-size: 12px;
        `
        inputCont.appendChild(p)
        input.value = ''
        // alert('failure!!!')
    }
    return false
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}