let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');

for(let i=0 ; i < selectPlanButtons.length ; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
       
        modal.classList.add('open');
       
        backdrop.style.display = 'block';

        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
    });
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
  
    if(modal){
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');

    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 10);
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    
    mobileNav.classList.add('open');
    
    backdrop.style.display = 'block';

    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
   
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started',event);
})

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation endded',event);
})

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration',event);
})