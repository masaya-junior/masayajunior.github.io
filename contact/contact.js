
console.log('[MJR:GB:DJD:WA]')

//MENU//

document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open');
})
document.getElementById('big-menu-close').addEventListener('click', function(){
  document.getElementById('big-menu').classList.remove('toggle-open');
})

//CONTACT-MENU//
document.getElementById('ContactMobile').addEventListener('click', function(){
    document.getElementById('contactMenuMobile').classList.toggle('toggle-open')
    document.getElementById('socialsRowOne').classList.toggle('socialsToggle')
    document.getElementById('socialsRowTwo').classList.toggle('socialsToggle');
})

//FORM//

const form = document.getElementById('contactForm')

const subject = document.getElementById('subject')
const contactFirstName = document.getElementById('contactFirstName')
const contactLastName = document.getElementById('contactLastName')
const mail = document.getElementById('mail')
const message = document.getElementById('message')

const error = document.querySelector('#error')

const submit = document.querySelector('#submit')
const validation = document.querySelector('#validation')

submit.addEventListener('click', () => {
  console.log('submit button working')
})


submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (mail.value.length <= 2 ){
        error.innerText = '* Email address is required'
        error.style.color = 'red'
    }
    else {
      validation.innerText = "sent!"
      validation.style.color = 'green'
      validation.style.margin = '2em'
      location.reload()
    }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzq-_tKT3-dOoSL6vxPWjO_tEtJStNogWeHY9sAnmT4K0npupM6/exec'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code




            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})