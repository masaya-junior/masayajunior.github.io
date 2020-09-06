
if (screen && screen.width < 992) {
    console.log('doodooa')
}

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
