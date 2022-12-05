var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

console.log(UserLogin.name)

if ( JSON.stringify(UserLogin) != '[]'){
    if (UserLogin.name.includes(" ",0)){
        let chunk = UserLogin.name.split(" ");
        document.getElementById('NameUser').innerText = 'Welcome  ' + chunk[chunk.length - 1];
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
    else{
        document.getElementById('NameUser').innerText = `Welcome ${UserLogin.name}`;
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
}