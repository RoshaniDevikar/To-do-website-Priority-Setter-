const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const registerLink =document.querySelector(".register-link");
const LoginBtn =document.querySelector(".btnLogin-popup");
const iconClose =document.querySelector(".icon-close");
// const RegisterBtn =document.querySelector(".icon-close");
const LoginBtnAccepet =document.querySelector(".btn");


registerLink.addEventListener('click',()=> {
	wrapper.classList.add('active');
});


login.addEventListener('click',()=> {
	wrapper.classList.remove('active');
});

LoginBtn.addEventListener('click',()=> {
	wrapper.classList.add('active-btn');
});

iconClose.addEventListener('click',()=> {
	wrapper.classList.remove('active-btn');
});

LoginBtnAccepet.addEventListener('click',()=> {
	wrapper.classList.remove('active-btn');
});
