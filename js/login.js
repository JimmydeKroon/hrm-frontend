const passInputField = document.getElementById('passwordinput');
const eyeicon = document.getElementById('eyeicon');

eyeicon.onclick = () => {
    if (passInputField.type === 'password') {
        passInputField.type = 'text';
        eyeicon.classList.remove('fa-eye-slash');
        eyeicon.classList.add('fa-eye');
    }

    else {
        passInputField.type = 'password';
        eyeicon.classList.remove('fa-eye');
        eyeicon.classList.add('fa-eye-slash');
    }
}