var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

function DangXuatAdmin(){
    UserLogin = [];
    localStorage.setItem('UserLogin',JSON.stringify(UserLogin));
    location.replace('TrangChu.html');
}