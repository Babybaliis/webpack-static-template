var burgerIcon = document.querySelector(".burger");
var closeButton = document.querySelector('.sm-closebtn');
var icons = document.querySelector('.contacts__icon-show')
var iconSearch = document.querySelector(".icon-search")
var mainSidebarMenu = document.querySelector(".main__sidebar__menu")




function show(event) {
    event.preventDefault();

    let sidebar = document.querySelector('.sidebar__menu');
    let sm = document.querySelector('.side__menu');

    sm.classList.add('sm-show')
    sm.classList.remove('sm')

    closeButton.style.display = closeButton.style.display == 'none' || closeButton.style.display == '' ? 'block' : "none";
    iconSearch.style.display = iconSearch.style.display == 'none' || iconSearch.style.display == '' ? 'block' : "none";


    sidebar.classList.add('sidebar-wrapper-show')

    let tools = document.querySelector('.tools')
    tools.style.display = 'none';

    let mainMenu = document.querySelector('.main__menu');
    mainMenu.classList.remove('main__menu')
    mainMenu.classList.add('mm-show')

    let icon = document.querySelector('.icon');
    icon.classList.remove('icon')
    icon.classList.add('icon-show')

    let logo = document.querySelector('.logo');
    logo.classList.remove('logo')
    logo.classList.add('logo-show')

    let menuNav = document.querySelector('.menu__nav');
    menuNav.classList.remove('menu__nav')
    menuNav.classList.add('mn-show')

    let contacts = document.querySelector('.contacts');
    contacts.classList.remove('contacts')
    contacts.classList.add('contacts-show')

    let mail = document.querySelector('.mail');
    mail.classList.remove('mail')
    mail.classList.add('mail-show')

    let tel = document.querySelector('.tel');
    tel.classList.remove('tel')
    tel.classList.add('tel-show')

    let lang = document.querySelector('.lang');
    lang.classList.remove('lang')
    lang.classList.add('lang-show')

    if (window.screen.width <= 768) {
        icons.style.display = "flex";
    }

}

function closeSideBarMenu(event) {
    if (!!event)
        event.preventDefault();
    let sidebar = document.querySelector('.sidebar__menu');
    let sm = document.querySelector('.sm-show');
    closeButton.style.display = "none"
    iconSearch.style.display = window.screen.width <= 1440 ? 'none' : "block";

    sm.classList.remove('sm-show')
    sidebar.classList.remove('sidebar-wrapper-show')


    let tools = document.querySelector('.tools')
    tools.style.display = 'flex';

    if (!!document.querySelector('.mm-show')) {
        let mmShow = document.querySelector('.mm-show');
        mmShow.classList.remove('mm-show')
        mmShow.classList.add('main__menu')
    }

    let iconShow = document.querySelector('.icon-show');
    iconShow.classList.remove('icon-show')
    iconShow.classList.add('icon')

    let logoShow = document.querySelector('.logo-show');
    logoShow.classList.remove('logo-show')
    logoShow.classList.add('logo')

    let mmShow = document.querySelector('.mn-show');
    mmShow.classList.remove('mn-show')
    mmShow.classList.add('menu__nav')

    let contactsShow = document.querySelector('.contacts-show');
    contactsShow.classList.remove('contacts-show')
    contactsShow.classList.add('contacts')

    let mailShow = document.querySelector('.mail-show');
    mailShow.classList.remove('mail-show')
    mailShow.classList.add('mail')

    let telShow = document.querySelector('.tel-show');
    telShow.classList.remove('tel-show')
    telShow.classList.add('tel')

    let langShow = document.querySelector('.lang-show');
    langShow.classList.remove('lang-show')
    langShow.classList.add('lang')


    if (window.screen.width <= 768) {
        icons.style.display = "none";
    }
}

window.closeSideBarMenu = closeSideBarMenu

function disable(event) {
    closeSideBarMenu(event)
}

burgerIcon.addEventListener("click", (event) => show(event))


closeButton.addEventListener('click', disable)
