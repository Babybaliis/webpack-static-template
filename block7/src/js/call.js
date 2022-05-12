var callIcons = document.querySelectorAll(".call__icon");
var chatIcons = document.querySelectorAll(".chat__icon");
var wrapper = document.querySelector(".wrapper");
var sidebar = document.querySelector(".sidebar");
var closeButtons = document.querySelectorAll('.closebtn');

function show(event, activeSideBar, disableSidebar) {
    event.preventDefault();
    wrapper.classList.add('wrapper-show');

    let active = document.querySelector(activeSideBar);
    active.classList.add('sidebar__show');
    let disable = document.querySelector(disableSidebar);
    disable.classList.add('sidebar__hide')
}

function disable(event) {
    let arr = document.querySelectorAll('.sidebar')
    arr.forEach(value => {
        value.classList.remove('sidebar__show')
        value.classList.remove('sidebar__hide')
    })
    wrapper.classList.remove('wrapper-show');
}

callIcons.forEach(callIcon => callIcon.addEventListener("click", (event) => show(event, '.sidebar__call', '.sidebar__chat')))
chatIcons.forEach(chatIcon => chatIcon.addEventListener("click", (event) => show(event, '.sidebar__chat', '.sidebar__call')))


closeButtons.forEach(closeButton => closeButton.addEventListener('click', disable))


document.querySelector("body").classList.toggle("active");
