/* ---variables--- */
const logoContainer = document.querySelector('.hero__logo--container');
const hamburgerIcon = document.querySelector('.hero__logo--container .hero--hamburger');
const closeIcon = document.querySelector('.hero__logo--container .hero--close');
const mobileIconsContainer = document.querySelector('.hero__mobileicons--container');
const heroNav = document.querySelector('.hero__nav');
const desktopMenuLinks = document.querySelectorAll('ul.menu--desktop.menu-left li.menu__item--desktop');
const mProduct = document.getElementById('mobile-product');
const mCompany = document.getElementById('mobile-company');
const mConnect = document.getElementById('mobile-connect');
const mSubmenus = document.querySelectorAll('li.menu__item ul.submenu');
const mLinks = document.querySelectorAll('nav.hero__nav ul.menu-left li.menu__item > a');


/* ---event listeners--- */
hamburgerIcon.addEventListener('click', toggleMenuIcon);
closeIcon.addEventListener('click', toggleMenuIcon);
mobileIconsContainer.addEventListener('click', openMobileNav);
mProduct.addEventListener('click', openMobileSubmenu );
mCompany.addEventListener('click', openMobileSubmenu );
mConnect.addEventListener('click', openMobileSubmenu );

/* ---functions--- */

// toggles the hamburger menu icon when clicked
function toggleMenuIcon(){
   if(hamburgerIcon.classList.contains('hide') ){
        hamburgerIcon.classList.toggle('hide');
        closeIcon.classList.toggle('hide');

   } else if(closeIcon.classList.contains('hide') ) {
        closeIcon.classList.toggle('hide');
        hamburgerIcon.classList.toggle('hide');
   }
   // reset all submenus when closing the mobile nav
   closeAllSubMenus();
   //resets active class when closing the mobile nav
   removeActiveClassOnClose();
}

// toggles the mobile nav menu
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

// toggles submenus on mobile nav
function openMobileSubmenu(e) {
    let submenuLinkTarget = this.querySelector('.submenu');
    if(submenuLinkTarget.classList.contains('submenu-open')) {
        submenuLinkTarget.classList.remove('submenu-open');
        e.target.classList.remove('active');
    } else {
        submenuLinkTarget.classList.add('submenu-open');
        e.target.classList.add('active');
    }

}

// closes any open submenus when closing the mobile nav - called from toggleMenuIcon()
function closeAllSubMenus() {
    //convert nodelist to an array
    mSubmenusArr = Array.from(mSubmenus);
    //remove "submenu-open" class from all elements in the array, when closing the menu
    mSubmenusArr.forEach(element => {
       element.classList.remove('submenu-open'); 
    });
}

//remove active class when mobile nav is closed
function removeActiveClassOnClose(){
    //convert nodelist to an array
    mLinksArr = Array.from(mLinks);
    // removes active class when mobile menu is closed
    mLinksArr.forEach(element => {
        element.classList.remove('active');
    });
}


