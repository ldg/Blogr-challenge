/* variables */
const logoContainer = document.querySelector('.hero__logo--container');
const hamburgerIcon = document.querySelector('.hero__logo--container .hero--hamburger');
const closeIcon = document.querySelector('.hero__logo--container .hero--close');
const mobileIconsContainer = document.querySelector('.hero__mobileicons--container');
const heroNav = document.querySelector('.hero__nav');
const desktopMenuLinks = document.querySelectorAll('ul.menu--desktop.menu-left li.menu__item--desktop');
const mProduct = document.getElementById('mobile-product');
const mCompany = document.getElementById('mobile-company');
const mConnect = document.getElementById('mobile-connect');
let width = window.matchMedia("(min-width: 600px)");

/* event listeners */
hamburgerIcon.addEventListener('click', toggleMenuIcon);
closeIcon.addEventListener('click', toggleMenuIcon);
mobileIconsContainer.addEventListener('click', openMobileNav);
mProduct.addEventListener('click', openMobileSubmenu );
mCompany.addEventListener('click', openMobileSubmenu );
mConnect.addEventListener('click', openMobileSubmenu );
// - https://fjolt.com/article/javascript-multiple-elements-addeventlistener
// Array.prototype.forEach.call(desktopMenuLinks, function(item) {
//     item.addEventListener('click', openDesktopMenu );
// });



/* functions */
function openMobileSubmenu(e) {
    // console.log(e.target);
    let submenuLinkTarget = this.querySelector('.submenu');
    if(submenuLinkTarget.classList.contains('submenu-open')) {
        submenuLinkTarget.classList.remove('submenu-open');
    } else {
        submenuLinkTarget.classList.add('submenu-open');
    }

}

function openDesktopMenu(e) {
    let linkTarget = this.querySelector('.submenu--desktop');
    if(linkTarget.classList.contains('open') ){
        linkTarget.classList.remove('open');
    } else {
        linkTarget.classList.add('open');
    }
}

function toggleMenuIcon(){
   if(hamburgerIcon.classList.contains('hide') ){
        hamburgerIcon.classList.toggle('hide');
        closeIcon.classList.toggle('hide');

   } else if(closeIcon.classList.contains('hide') ) {
        closeIcon.classList.toggle('hide');
        hamburgerIcon.classList.toggle('hide');
   }
}

function openMobileNav() {
    if(hamburgerIcon || closeIcon) {
        // console.log('icon clicked');
        if(heroNav.classList.contains('hero__nav-close') ) {
            heroNav.classList.remove('hero__nav-close');
        } else {
            heroNav.classList.add('hero__nav-close');
        }
    } else {
        console.log('something went wrong');
    }
}

// window.addEventListener('resize', function() {
//   if (window.innerWidth > 600) {
//         heroNav.classList.remove("hero__nav-close");
//     } else{
//         heroNav.classList.add('hero__nav-close');
//     }
// });