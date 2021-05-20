AOS.init({
    duration: 1000,
    offset: 400
});

//Form validation
const form = document.getElementsByTagName('form')[0]
const sendBtn = document.getElementById('send-btn');
const inputEmail = document.querySelector('.form-control')

sendBtn.addEventListener(click, validateForm)

function validateForm(e) {
    e.preventDefault();

}
validateForm()