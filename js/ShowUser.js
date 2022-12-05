var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

console.log(JSON.stringify(UserLogin) !== '[]')

if ( JSON.stringify(UserLogin) != '[]'){
    if (UserLogin.name==='admin'){
        document.getElementById('NameUser').innerText= 'Welcome admin' ;
        document.getElementById('icon__show-login').style.visibility= 'hidden';
        document.getElementById('icon__show-logout').style.visibility= 'visible';
        document.getElementById('icon__show-logout').style.zIndex=1;
    }
    else {
        let chunk = UserLogin.name.split(" ");
        document.getElementById('NameUser').innerText = 'Welcome  ' + chunk[chunk.length - 1];
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
}