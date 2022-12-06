var Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
var UserLogin = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];

function showLogin(){
    if(Accounts.length===0){
        let admin = new user('admin','admin','admin','admin','admin@gmail.com','admin','0974975656','admin');
        Accounts.push(admin);
        localStorage.setItem('Accounts',JSON.stringify(Accounts));
    }
    document.getElementById('formLoginRegister').innerHTML= `
    <div class="background-color-login" id="background-color-login">
        <div class="background-login" id="background-login">
      <form id="signup_form" class="form" method="POST">
          <div class="heading">
          <a href="TrangChu.html">
              <img src="img/LOGO.png" alt="Trang chủ ICY"
                   style="border-radius: 100px; ; max-block-size: 7rem; margin: 30px auto 20px 40px;" title="Trang chủ ICY">
          </a>
              <div class="heading-space"></div>
          <h1 style="font-size: 3rem" >Đăng nhập</h1>
          <hr>
          </div>
        <div  class="txt_field">
          <input onblur="usernameCheck()" id="username" type="text" required>
          <span></span>
          <label for="username">Tên đăng nhập</label>
        </div>
        <span id="username-err"></span>
         <div class="txt_field">
          <input onblur="passCheck()" id="password" type="password" name="password" required>
          <span></span>
          <label for="password">Mật khẩu</label>
        </div>
        <span id="password-err"></span>
        <span id="incorectPass"></span>
      </form>
      <a class="forget-pass"  style="font-size: 1.5rem">Quên mật khẩu</a>
      <input onclick="DangNhap()" type="submit" value="Đăng nhập">
        <div class="signup_link">
          <label style="font-size: 1.5rem">Chưa có tài khoản?</label>  
          <button onclick="showRegister()" class="icon__register" id="registerInLogin">Đăng ký</button>
        </div>
     </div>
    </div>
`
    let UnDo = document.getElementById("background-color-login");
    UnDo.onclick = function(e) {
        if (e.target.matches("#background-color-login")) {
            UnDo.remove();
        }
    }
}

function DangNhap(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let temp=0;
    if (usernameCheck() && passCheck()) {
        for (let i = 0; i < Accounts.length; i++) {
            if (username === Accounts[i].username && password === Accounts[i].password) {
                localStorage.setItem('UserLogin',JSON.stringify(Accounts[i]));
                if (username==='admin'){
                    alert('Chào mừng bạn đến với trang ADMIN!!!!')
                    location.replace('admin.html');
                    return true;
                }
                else {
                    location.reload();
                    return true;
                }

            } else if (username === Accounts[i].username && password !== Accounts[i].password) {
                document.getElementById('incorectPass').innerHTML =
                    'Mật khẩu không đúng yêu cầu nhập lại!';
                return false;
            }
            else if (username !== Accounts[i].username)
                temp++;
        }
        if (temp===Accounts.length)
            document.getElementById('username-err').innerHTML=`Tên đăng nhập không tồn tại!`;
    }
    else
        return false;
}
function DangXuat(){
    UserLogin = [];
    localStorage.setItem('UserLogin',JSON.stringify(UserLogin));
    location.reload();
}
function DangXuatUser() {
    UserLogin = [];
    localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
    location.replace('TrangChu.html');
}



