const simpleLink = document.querySelectorAll('.simple-link')
const pageTitle = document.querySelector('.page-title')
const dropdownLinks = document.querySelectorAll('.main-nav')
const dropdownContainer1 = document.getElementById('dropdown-1')
const dropdownContainer2 = document.getElementById('dropdown-2')
const dropdownContainer3 = document.getElementById('dropdown-3')
const dropdownContainers = document.querySelectorAll('.navbar__container')
const burgerButton = document.querySelector('.navbar__header__button--burger')


simpleLink.forEach( link => link.addEventListener('click', function (){
    pageTitle.innerText = link.innerText
}))

dropdownLinks.forEach( link => link.addEventListener('mouseover', function(){
    const dataType = link.getAttribute('data-link')

    switch(dataType){
        case 'dropdown-1':
            dropdownContainer1.style.display = 'grid'
            dropdownContainer2.style.display = 'none'
            dropdownContainer3.style.display = 'none'
            break;
        case 'dropdown-2':
            dropdownContainer1.style.display = 'none'
            dropdownContainer2.style.display = 'grid'
            dropdownContainer3.style.display = 'none'

            break;  
        case 'dropdown-3':
            dropdownContainer1.style.display = 'none'
            dropdownContainer2.style.display = 'none'
            dropdownContainer3.style.display = 'grid'
            break;
        case 'simple-link':
            dropdownContainer1.style.display = 'none'
            dropdownContainer2.style.display = 'none'
            dropdownContainer3.style.display = 'none'
            break
    }
}))

dropdownContainers.forEach( container => container.addEventListener('mouseleave', function(){
    container.style.display = 'none';
}))

let burgerIsOpen = false

burgerButton.addEventListener('click', function(){
            
    if(burgerIsOpen === false){
        burgerButton.innerHTML = '<img src="./assets/bars-solid.svg"/>'
        burgerIsOpen = true
    } else {
        burgerButton.innerHTML = '<img src="./assets/times-solid.svg"/>'
        burgerIsOpen = false
    }
})