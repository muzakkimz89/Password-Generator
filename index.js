let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

console.log('Password');

function generatePassword(len){
    const lowerAphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    const data = lowerAphabet + upperAphabet + numbers;
    let generator = '';
    for (let i = 0; i < len; i++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    //alert('password has been generated');
}

const savePassword = () => {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`));
    saveButton.setAttribute('download', 'Password Generator.txt');
}