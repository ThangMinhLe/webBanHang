let Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
function user(MaKH,name,username,password,email,telephone){
    this.MaKH= MaKH;
    this.name= name;
    this.username = username;
    this.password= password;
    this.email= email;
    this.telephone=telephone;
}
function render() {
    table = `<tr>
                <th>STT</th>
                <th>Mã Khách hàng</th>
                <th>Tên Khách hàng</th>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
                <th>E-mail</th>
                <th>Ngày đăng kí</th>
                <th>Số đơn hàng</th>
                <th>Tác vụ</th>
            </tr>
    `
    var i;
    for (i = 0; i < Accounts.length; i++)
        table += `<tr>
            <td>${i + 1}</td>
            <td>${Accounts}</td>
            <td></td>
            <td></td>
            <td>/td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <i class="fa-solid fa-pen-to-square" onclick="showSP(listDSSP[${i}].MaSP)" style="cursor: pointer;"></i>
                <i class="fa-solid fa-xmark" onclick="removeSP(listDSSP[${i}].MaSP)" style="cursor: pointer;"></i>
            </td>
        </tr>
    `
    document.getElementById('myTable').innerHTML = table;

}