var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

function checkThanhToan(){
    if (UserLogin.length===0){
        alert('Đăng nhập trước khi thanh toan');
        location.replace('../TrangChu.html');
    }
    else {
        location.replace('ThanhToan.html');
    }

}