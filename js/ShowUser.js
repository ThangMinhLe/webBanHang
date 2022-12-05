var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];
if ( UserLogin.length !== '0'){
    console.log(typeof UserLogin.name)
    let chunk = UserLogin.name.split(" ");
    console.log(chunk);
    document.getElementById('NameUser').innerText= 'Welcome  ' + chunk[chunk.length-1];
    document.getElementById('icon__show-login').style.visibility= 'hidden';
    document.getElementById('icon__show-logout').style.visibility= 'visible';
    document.getElementById('icon__show-logout').style.zIndex=1;
}