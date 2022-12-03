document.getElementById('login-btn').onclick = function() {
    document.getElementById("lohgin").innerHTML = `
   <div id="background-color-captaikhoan">
   <div style="border-radius: 20px;" id="background-captaikhoan">
      <div class="CapTaiKhoanBox" id="CapTaiKhoanBox">
         <!-- 1 -->
         <div class="Title">cấp tài khoản</div> 
         <div>
            tên nhân viên
            <input onblur="kiemtraten()" placeholder="Name" style="padding-left: 9px;" id="ten" class="Input" type="text">
            <div style="color: red; font-size: 15px; text-align: center; margin-left: -40px; margin-top: -5px;" id="name_err"></div>
         </div>
         <!-- 2 -->
         <div>
            số điện thoại
            <input onblur="kiemtransodienthoai()" placeholder="123-45-678" style="padding-left: 9px;" id="sodienthoai" class="Input" type="text">
            <div style="color: red; font-size: 15px; text-align: center; margin-left: 50px; margin-top: -5px;" id="dienthoai_err"></div>
            <div style="color: red; font-size: 15px; text-align: center; margin-left: -10px; margin-top: -10px;" id="dienthoai2_err"></div>
         </div>
         <!-- 3 -->
         <div>
            ngày sinh
            <input onblur="kiemtrangaysinh()" class="DateBox" type="date" id="ngaysinh" name="birthday">
            <div style="color: red; font-size: 15px; text-align: center; margin-left: 11px; margin-top: -5px;" id="ngaysinh_err"></div>
         </div>
         <!-- 4 -->
         <div>
            <labe for="">chức vụ</label>
            <select class="SelectBox" name="" id="chucvu">
               <option value="nhân viên">nhân viên</option>
               <option value="quản lý">quản lý</option>
            </select>
            <div style="color: red; font-size: 15px; text-align: center;" id="chucvu_err"></div>
         </div>
         <!-- 5 -->
            <div>
               <button Onclick='captaikhoan()' class="CapTKButton" style="margin-left: 223px;">cấp tài khoản</button>
            </div>
         </div>
   </div>
</div>
`
    let UnDo = document.getElementById("background-color-captaikhoan")
    UnDo.onclick = function(e) {
        if (e.target.matches("#background-color-captaikhoan")) {
            UnDo.remove()
        }
    }
}