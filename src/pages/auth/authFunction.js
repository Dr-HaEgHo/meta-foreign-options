
const eyeButton1 = document.getElementById('eye-btn-1');
const loginPass1 = document.getElementById('login-pass-1');

const eyeButton = document.getElementById('eye-btn');
const loginPass = document.getElementById('login-pass');
const eyeButton2 = document.getElementById('eye-btn-2');
const loginPass2 = document.getElementById('login-pass-2');

const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');


const handleTogglePasswordType1 = () => {
    if ( loginPass1.type === "password" ) {
        loginPass1.type = "text";
        eyeButton1.innerHTML = "<iconify-icon class='su-icon-2' icon='ant-design:eye-invisible-filled'></iconify-icon>"
    } else {
        loginPass1.type = "password";
        eyeButton1.innerHTML = "<iconify-icon class='su-icon-2' icon='ic:baseline-remove-red-eye'></iconify-icon>"
    }
}

const handleTogglePasswordType = () => {
    if (loginPass.type === "password" && loginPass2.type === "password" ) {
        loginPass.type = "text";
        loginPass2.type = "text";
        eyeButton.innerHTML = "<iconify-icon class='su-icon-2' icon='ant-design:eye-invisible-filled'></iconify-icon>"
        eyeButton2.innerHTML = "<iconify-icon class='su-icon-2' icon='ant-design:eye-invisible-filled'></iconify-icon>"
    } else {
        loginPass.type = "password";
        loginPass2.type = "password";
        eyeButton.innerHTML = "<iconify-icon class='su-icon-2' icon='ic:baseline-remove-red-eye'></iconify-icon>"
        eyeButton2.innerHTML = "<iconify-icon class='su-icon-2' icon='ic:baseline-remove-red-eye'></iconify-icon>"
    }
}

const handleOpenNav = () => {
    overlay.style.left = "0%";
    nav.style.left = "0%";
}

const handleCloseNav = () => {
    overlay.style.left = "-100%";
    nav.style.left = "-68%";
}

window.addEventListener('load', fetchStates)

function fetchStates() {
    const states = []
    fetch('https://nigerian-states-info.herokuapp.com/api/v1/states')
        .then(res => res.json())
        .then(data => states.push(data))
    
    console.log(states.data)
}

