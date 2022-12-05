var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

function DangXuatAdmin(){
    UserLogin = [];
    localStorage.setItem('UserLogin',JSON.stringify(UserLogin));
    location.replace('TrangChu.html');
}
// document.getElementById('example-element').style.background=` conic-gradient(#FF0400,#A3D8FF)`;