var Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
var iDUsers = localStorage.getItem('iDUsers') ? JSON.parse(localStorage.getItem('iDUsers')) : [];
function user(MaKH,name,username,password,email,dayRegi,telephone,DHang){
    this.MaKH= MaKH;
    this.name= name;
    this.username = username;
    this.password= password;
    this.email= email;
    this.dayRegi = dayRegi;
    this.telephone=telephone;
    this.DHang= DHang;
}

function getiD(){
    return Math.floor(Math.random() * 1000000) + 1;
}
function testID(){
    let idtest = getiD();
    for (let i=0;i<iDUsers.length;i++) {
        if (iDUsers.length === 0) {
            iDUsers.push(idtest)
            localStorage.setItem('iDUsers',JSON.stringify(iDUsers));
            return idtest;
        }
        else if (idtest === iDUsers[i]) {
            idtest = getiD();
            i = -1;
        }
    }
    return idtest;
}
function save() {
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let telephone = document.getElementById('telephone').value;
    let usChecked = usernameCheck();
    let emChecked = emailCheck();
    let psChecked = passCheck();
    let oldUsChecked = checkSameUser();
    let phoneCheck = telephoneCheck();
    let nCheck = nameCheck();
    let today = new Date();
    let iduser = 'KHICY' + testID();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    if ( nCheck && usChecked && emChecked && psChecked && oldUsChecked && phoneCheck) {
        let Account = new user(iduser,name,username ,password,email,date,telephone)
        Accounts.push(Account);
        localStorage.setItem('Accounts',JSON.stringify(Accounts));
        console.log(Accounts);
        resetForm();
        if(alert('Đăng ký tài khoản thành công'));
            window.location.reload();
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
        if(username === Accounts[i].username) {
            console.log(Accounts[i].username);
            document.getElementById('sameUsername-err').innerHTML =
            'Tên người dùng đã tồn tại';
            return false;
        }
        else{
            document.getElementById('sameUsername-err').innerHTML = '';
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
    if(username === '') {
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
function nameCheck(){
    let name = document.getElementById('name').value;
    if(name === '') {
        document.getElementById('name-err').innerHTML =
            'Vui lòng nhập thông tin vào';
        return false;
    }
    else {
        document.getElementById('name-err').innerHTML ='';
    }
    return true;
}
function telephoneCheck(){
    let telephone = document.getElementById('telephone').value;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(telephone !== '') {
        if (vnf_regex.test(telephone)== false) {
            document.getElementById('telephone-err').innerHTML =
                'Số điện thoại không hợp lệ';
            return false;
        }
        else {
            document.getElementById('telephone-err').innerHTML =
                '';
            return true;
        }
    }
    if(telephone==''){
        document.getElementById('telephone-err').innerHTML =
            'Vui lòng nhập thông tin vào';
        return false;
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
    if(password === '') {
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