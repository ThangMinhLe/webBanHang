var Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
var DuyetDonHang = localStorage.getItem('DuyetDonHang') ? JSON.parse(localStorage.getItem('DuyetDonHang')) : [];
for (let i=0;i<Accounts.length;i++){
    let temp=0;
    for (let j=0;j<DuyetDonHang.length;j++)
        if (Accounts[i].MaKH === DuyetDonHang[j].maKH) {
            console.log('duyet');
            temp++;
        }
    Accounts[i].DHang=temp;
}
localStorage.setItem('Accounts',JSON.stringify(Accounts));
function user(MaKH,name,username,password,email,dayRegi,telephone){
    this.MaKH= MaKH;
    this.name= name;
    this.username = username;
    this.password= password;
    this.email= email;
    this.dayRegi = dayRegi;
    this.telephone=telephone;
    this.DHang= DHang;
}
renderTK();
function renderTK() {
    var table = `<tr>
                <th>STT</th>
                <th>Mã Khách hàng</th>
                <th>Tên Khách hàng</th>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
                <th>E-mail</th>
                <th>Số điện thoại</th>
                <th>Ngày đăng kí</th>
                <th>Số đơn hàng đã thanh toán</th>
                <th>Tác vụ</th>
            </tr>
    `
    var i;
    for (i = 0; i < Accounts.length; i++)
        table += `<tr>
            <td>${i + 1}</td>
            <td>${Accounts[i].MaKH}</td>
            <td>${Accounts[i].name}</td>
            <td>${Accounts[i].username}</td>
            <td>${Accounts[i].password}</td>
            <td>${Accounts[i].email}</td>
            <td>${Accounts[i].telephone}</td>
            <td>${Accounts[i].dayRegi}</td>
            <td>${Accounts[i].DHang}</td>
            <td>
                <i class="fa-solid fa-xmark" onclick="removeTK(Accounts[${i}].MaKH)" style="cursor: pointer;"></i>
            </td>
        </tr>
    `
    document.getElementById('myTable').innerHTML = table;
}

function removeTK(iD) {
    if (confirm('Bạn có muốn xoá không?')) {
        for (let i = 0; i < Accounts.length; i++)
            if (Accounts[i].MaKH === iD) {
                Accounts.splice(i, 1);
                localStorage.setItem('Accounts',JSON.stringify(Accounts));
                renderTK();
            }
    }
}
// document.getElementById('myTable').innerHTML=render();