const loginBtn = document.getElementById('login-btn');
const inputName = document.getElementById('input-name');

loginBtn.addEventListener('click', function () {
    const val = inputName.value;
    sessionStorage.setItem('key', val);
    inputName.value = '';
    location.href = "index.html";
})