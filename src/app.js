const simpleLink = document.querySelectorAll('.simple-link')
const pageTitle = document.querySelector('.page-title')
const dropdownLink1 = document.getElementById('')
const dropdownLink2 = document.
const dropdownLink3 = document.
const dropdownContainer1 = document.getElementById('dropdown-1')
const dropdownContainers = document.querySelectorAll('.navbar__container')

simpleLink.forEach( link => link.addEventListener('click', function (){
    pageTitle.innerText = link.innerText
}))

// dropdownLink.forEach( link => link.addEventListener('mouseover', function(){
//     dropdownContainer1.style.display = 'grid';
// }))

dropdownContainers.forEach( container => container.addEventListener('mouseleave', function(){
    container.style.display = 'none';
}))