document.getElementById('trigger').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('warpFilter');
})


document.getElementById('trigger').addEventListener('click', function(){
    document.querySelector('#overlay').classList.toggle('toggle');
    document.querySelector('#bonusHeader').classList.toggle('toggle');
    document.querySelector('#spinningCircleTwo').classList.toggle('toggle')
    document.querySelector('#trigger').classList.toggle('toggle');
})

document.getElementById('gridSwitch').addEventListener('click', function(){
    document.querySelector('.container').classList.toggle('toggle');
})
