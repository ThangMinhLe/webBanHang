// let Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
function showRegister(){
    if(Accounts.length===0){
        let admin = new user('admin','admin','admin','admin','admin@gmail.com','admin','0974975656','admin');
        Accounts.push(admin);
        localStorage.setItem('Accounts',JSON.stringify(Accounts));
    }
    document.getElementById('formLoginRegister').innerHTML= `
    <div class="background-color-login" id="background-color-login">
          <div class="background-login" id="background-login" style="height: 95%">
              <div class="heading" style="margin-bottom: 1rem">
                  <a href="TrangChu.html">
                      <img src="img/LOGO.png" alt="Trang chủ ICY"
                           style="border-radius: 100px; ; max-block-size: 7rem; margin: 30px auto 20px 40px;" title="Trang chủ ICY">
                  </a>
                  <div class="heading-space"></div>
                  <h1 style="font-size: 3rem">Đăng ký</h1>
                  <hr>
              </div>
                  <form id="signup_form" class="form" method="POST">
                      <div class="txt_field">
                          <input onblur="nameCheck()" id="name" type="text" required>
                          <span></span>
                          <label for="name">Họ và tên</label>
                      </div>
                      <span id="name-err"></span>
                      <div class="txt_field">
                          <input onblur="usernameCheck()" id="username" type="text" required>
                          <span></span>
                          <label for="username">Tên đăng nhập</label>
                      </div>
                      <span id="username-err"></span>
                      <span id="sameUsername-err"></span>
                      <div class="txt_field">
                          <input onblur="telephoneCheck()" id="telephone" type="text" required>
                          <span></span>
                          <label for="telephone">Số điện thoại</label>
                      </div>
                      <span id="telephone-err"></span>
                      <div class="txt_field">
                          <input onblur="emailCheck()" id="email" type="text" required>
                          <span></span>
                          <label for="email">Địa chỉ Email</label>
                      </div>
                      <span id="email-err"></span>
                      <div class="txt_field">
                          <input onblur="passCheck()" id="password" type="password" name="password" required>
                          <span></span>
                          <label for="password">Mật khẩu</label>
                      </div>
                      <span id="password-err"></span>

                  <input onclick="save()" type="submit" style="height: 5rem;" value="Đăng ký">
                  </form>
                    <div class="signup_link">
                      <label style="font-size: 1.5rem">Đã có tài khoản?</label>  <button onclick="showLogin()" class="icon__login" id="loginInRegister">Đăng nhập</button>
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




