var showUserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

if ( JSON.stringify(showUserLogin) != '[]'){
    if (UserLogin.name.includes(" ",0)){
        let chunk = showUserLogin.name.split(" ");
        document.getElementById('NameUser').innerText = 'Welcome  ' + chunk[chunk.length - 1];
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
    else if (UserLogin.name.includes("admin",0)){
        document.getElementById('NameUser').innerText = `Welcome admin`;
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
    else{
        document.getElementById('NameUser').innerText = `Welcome ${showUserLogin.name}`;
        document.getElementById('icon__show-login').style.visibility = 'hidden';
        document.getElementById('icon__show-logout').style.visibility = 'visible';
        document.getElementById('icon__show-logout').style.zIndex = 1;
    }
}