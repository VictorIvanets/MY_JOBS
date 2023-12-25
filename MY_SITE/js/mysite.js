"use strict";



const account1 = {
logIn: "Victor",
pin: 1111,};

const account2 = {
logIn: "Iryna",
pin: 2222,};


const account3 = {
logIn: "Polina",
pin: 3333,};


const account4 = {
logIn: "Vova",
pin: 4444,};

const account5 = {
    logIn: "5555",
    pin: 5555,};

const accounts = [account1, account2, account3, account4, account5];

const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const pinError = document.querySelector(".pinError");
const userError = document.querySelector(".userError");
const containerHidden = document.querySelector(".textArea1");
const containerLoginArea = document.querySelector(".login-area");



let currentAccount;
btnLogin.addEventListener('click', (e)=>{e.preventDefault(); 
currentAccount = accounts.find(acc => acc.logIn === inputLoginUsername.value)
console.log(currentAccount);

if (currentAccount && currentAccount.pin === Number(inputLoginPin.value))
{
    containerHidden.classList.toggle("hidden")
    containerHidden.style.opacity = 100
    userError.style.opacity = 0
    pinError.style.opacity = 0
    const html = `<div class="textArea1">
    <p class="contactH1">Victor Ivanets</p>
    <p class="contact"> Zhitomir, Ukraine</p>
    <p class="contact"> tel.: +38 097 757 94 40</p>
    <p class="contact white"><a class="contact candara white" href="mailto:imperia.zt@gmail.com">e-mail:imperia.zt@gmail.com</a></p>
    <p class="contact_nick">Вы вошли под ником: ${inputLoginUsername.value}</p>
    </div>
    <p class="contact_nick"><a class="contact_nick" href="contact.html">Выйти</a></p>
    `;
    containerHidden.insertAdjacentHTML("afterbegin", html);
    containerLoginArea.style.opacity = 0;
    inputLoginPin.value = inputLoginUsername.value = "";
    btnLogin.classList.toggle("hidden")
}
else if (currentAccount && currentAccount.pin !== Number(inputLoginPin.value))
{
    containerHidden.innerHTML = ""
    pinError.style.opacity = 100
    userError.style.opacity = 0
    containerHidden.style.opacity = 0
    inputLoginPin.value = ""
}

else if (currentAccount === undefined)
{
    containerHidden.innerHTML = ""
    userError.style.opacity = 100
    pinError.style.opacity = 0
    containerHidden.style.opacity = 0
    inputLoginPin.value = inputLoginUsername.value = ""
}


})