let Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
function save() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let usChecked = usernameCheck();
    let emChecked = emailCheck();
    let psChecked = passCheck();
    let oldUsChecked = checkSameUser();
    if(usChecked && emChecked && psChecked && oldUsChecked) {
        let Account = {
            username: username,
            password: password,
            email: email,
        }
        Accounts.push(Account);
        localStorage.setItem('Accounts',JSON.stringify(Accounts));
        console.log(Accounts);
        resetForm();
        alert('Đăng ký tài khoản thành công');
    }
}
function signinCheck() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(usernameCheck()) {
        return false;
    }
    else if(passCheck()) {
        return false;
    }
    else if(signinDone(username, password)){
        return true;
    }
    return true;
}

function signinDone(username, password) {
    console.log(checkCorrectPass(username, password));
    if(checked) {
        alert('Đăng nhập thành công');
        return true;
    }
}


function checkSameUser() {
    let username = document.getElementById('username').value;
    for(var i = 0; i < Accounts.length; i++) {
        console.log(Accounts[i].username);
        if(username === Accounts[i].username) {
            console.log(Accounts[i].username);
            document.getElementById('username-err').innerHTML =
            'Tên người dùng đã tồn tại';
            return false;
        }
        else{
            document.getElementById('username-err').innerHTML = '';
        }
    }
    return true;
}

function checkCorrectPass(username, password) {
    for(var i = 0; i < Accounts.length; i++) {
        console.log(Accounts[i].username);
        if(username === Accounts[i].username && password === Accounts[i].password) {
            console.log(Accounts[i].username);
            document.getElementById('incorectPass').innerHTML = '';
            return true;
        }
        else{
            document.getElementById('incorectPass').innerHTML =
            'Tên người dùng hoặc mật khẩu không đúng!';
            return false;
        }
    }
    return true;
}

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
// function validateCheck() {
//     return usernameCheck() && emailCheck() && passCheck();
// }

function usernameCheck() {
    let username = document.getElementById('username').value;
    if(username == '') {
        document.getElementById('username-err').innerHTML =
        'Vui lòng nhập tên người dùng';
        return false;
    } 
    else if(username.trim().length <= 3) {
        document.getElementById('username-err').innerHTML =
        'Tên người dùng quá ngắn';
        return false;
    }
    else {
        document.getElementById('username-err').innerHTML ='';
    }
    return true;
}
function emailCheck(){
    let email = document.getElementById('email').value;
    if(emailIsvalid(email)) {
        document.getElementById('email-err').innerHTML =
        '';
        return true;
    }
    else{
        document.getElementById('email-err').innerHTML =
        'Vui lòng nhập đúng định dạng email';
        return false;
    }
    return true;
}

function passCheck() {
    let password = document.getElementById('password').value;
    if(password == '') {
        document.getElementById('password-err').innerHTML =
        'Vui lòng nhập mật khẩu';
        return false;
    } 
    else if(password.trim() <= 4) {
        document.getElementById('password-err').innerHTML =
        'Password quá ngắn';
        return false;
    }
    else {
        document.getElementById('password-err').innerHTML ='';
        return true;
    }
    return true;
}
function emailIsvalid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}