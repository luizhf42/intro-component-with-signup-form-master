var inputs = document.querySelectorAll('.input-container');
var emailInput = document.querySelector('.email-input');
var signInBtn = document.querySelector('.sign-in-btn');
var canSubmit = false;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signInBtn.addEventListener('click', function(event) {
    inputs.forEach(function(inputContainer) {
        if (inputContainer.children[0].value.length <= 0) {
            inputContainer.children[0].classList.add('input-error');
            inputContainer.children[1].style.display = 'block';
        } else {
            inputContainer.children[0].classList.remove('input-error');
            inputContainer.children[1].style.display = 'none';
            canSubmit = true;
        }
    })
    
    if (emailInput.value.match(validRegex)) {
        canSubmit = true;
        emailInput.classList.remove('input-error');
        emailInput.nextElementSibling.style.display = 'none';
    } else {
        canSubmit = false;
        emailInput.classList.add('input-error');
        emailInput.nextElementSibling.style.display = 'block';
        
    }

    if (!canSubmit) {
        event.preventDefault(signInBtn);
    }
})