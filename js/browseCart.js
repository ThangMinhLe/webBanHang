function renderTable() {
    let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    if(Carts.length === 0) {
        document.getElementById('myTable').style.display = 'none';
        return false; 
    }
    document.getElementById('myTable').style.display = 'block';
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    Carts.forEach((Cart, index) => {
        index++;
        let tongTien = Cart.GiaBan*Cart.SoLuongMua;
        let SoLuong = Cart.SoLuongMua;
        tableContent += `
        <tr>
            <td>${index}</td>
            <td>${Cart.LoaiSP}</td>
            <td>${Cart.MaSP}</td>
            <td>${SoLuong}</td>
            <td>${Cart.TenSP}</td>
            <td>${Cart.GiaBan}</td>
            <td>${`${tongTien}`+" VNĐ"}</td>
            <td>
                <label class="switch">
                <input onclick="acceptCart()" type="checkbox">
                <span class="slider round"></span>
                </label>
            </td>
        </tr>`;
    })
    tableContent +=`</tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
}
function randomkeyDH() {
    const random = Math.random() * (9999 - 1000);
    let key = 'DHICY' + Math.round(random);
    return key;
}
function today() {
    var today = new Date();
    let time = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    return `${time}:${minute}:${second}, ${day}/${month}/${year}`;
}
let dsGioHang = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
let DuyetDonHang = [
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 200000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 1500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 350000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 300000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 450000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
];
// localStorage.setItem('DuyetDonHang', JSON.stringify(DuyetDonHang));
// let DuyetDonHang = JSON.parse(localStorage.getItem('DuyetDonHang'));
function renderTable2() {
    let tongTienDH = 0;
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {
        index++;
        tongTienDH += Number(duyet.tongTien);
        tableContent += `<tr>
        <td>${index}</td>
        <td>${duyet.maDonHang}</td>
        <td>${duyet.tenKH}</td>
        <td>${duyet.thoiGianDat}</td>
        <td>
            <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
        </td>
        <td>${tienVN(duyet.tongTien)}</td>`;
        if(duyet.trangThai == 'Chưa duyệt') {
            tableContent += `
            <td style="color: red"><b>${duyet.trangThai}</b></td>
            <td>
                <label class="switch">
                    <input onclick="checkDH(this)" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </td>`;
        } else {
            tableContent += `
            <td style="color: blue"><b>${duyet.trangThai}</b></td>
            <td>
                <label class="switch">
                    <input onclick="checkDH(this)" type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </td>`;
        }
    })
    tableContent += `<tr> <td colspan="5">TỔNG TIỀN</td>`;
    tableContent += `<td >${tienVN(tongTienDH)}</td> </tr>`;
    tableContent += `</tr></tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
    localStorage.setItem('DHTT', JSON.stringify(tongTienDH));
}
function xemChiTiet(maDonHang){
    let tongTien = 0;
    document.getElementById('newScreen').innerHTML = `
    <div id="background-color-chiTiet">
    <div style="border-radius: 10px;" id="background-chiTiet">
    <div class="chiTietBox" id="chiTietBox">
        <div class="Title">Xem chi tiết đơn hàng</div>
        <table style="width: 100%;" id="chiTietDonHang">
        </table>
    </div>
    </div>`;
    document.getElementById("background-color-chiTiet").onclick = function(e) {
        if (e.target.matches("#background-color-chiTiet")) {
            document.getElementById("background-color-chiTiet").remove();
        }
    }
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {
        if(duyet.maDonHang === maDonHang) {
            (DuyetDonHang[index].chiTiet).forEach((ct, dem) => {
                tongTien += Number(ct.GiaBan)*Number(ct.SoLuongMua);
                tableContent += `<tr>
                <td>${dem + 1}</td>
                <td>${ct.MaSP}</td>
                <td>${ct.TenSP}</td>
                <td><img src="${fileInpToTextInp(ct.HinhAnh)}" alt="Ảnh sản phẩm" width="40" height="40"></td>
                <td>${ct.SoLuongMua}</td>
                <td>${tienVN(ct.GiaBan)}</td>
                <td>${tienVN(ct.GiaBan*ct.SoLuongMua)}</td>
            </label></td>
            </tr>`;
            })
        }
    })
    tableContent +=`
    <tr>
        <td colspan="6">TỔNG TIỀN</td>
        <td>${tienVN(tongTien)}</td>
    </tr>
        </tbody>`;
    document.getElementById('chiTietDonHang').innerHTML = tableContent;
}
function fileInpToTextInp(event) {
    let fileChuk = event.split("\\");
    return '../img/' + fileChuk[fileChuk.length - 1];
}

function tienVN(giaTri){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giaTri);
}

function checkDH(e) {
   let row = e.parentElement.parentElement.parentElement;
   let id =  row.cells[1].innerText;
   DuyetDonHang.forEach((dh) => {
        if(dh.maDonHang === id) {
            if(dh.trangThai === "Đã duyệt")
            {
                dh.trangThai = "Chưa duyệt";
                row.cells[6].innerHTML = `<p style="color: red;"><b>Chưa duyệt</b></p>`;
            } else if( dh.trangThai === "Chưa duyệt"){
                dh.trangThai = "Đã duyệt";
                row.cells[6].innerHTML = `<p style="color: blue;"><b>Đã duyệt</b></p>`;
            }
        }
   })
   localStorage.setItem('DuyetDonHang', JSON.stringify(DuyetDonHang));
}

function TimKiemDH() {
    var DuyetDonHang = JSON.parse(localStorage.getItem('DuyetDonHang'));
    let input = document.getElementById('tkiem').value;
    console.log(input);
    let index = 1;
    let tongTienHienTai = 0;
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    if (input != "") {
        DuyetDonHang.forEach((duyet) => {
            if ( 
                Number(duyet.tongTien) <= Number(input) ||
                duyet.maDonHang.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.maKH.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.tenKH.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.thoiGianDat.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.trangThai.toLowerCase().search(input.toLowerCase()) != -1 ) {
                tongTienHienTai += Number(duyet.tongTien);
                tableContent += `<tr>
                <td>${index}</td>
                <td>${duyet.maDonHang}</td>
                <td>${duyet.tenKH}</td>
                <td>${duyet.thoiGianDat}</td>
                <td>
                    <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
                </td>
                <td>${tienVN(duyet.tongTien)}</td>`;
                if(duyet.trangThai == 'Chưa duyệt') {
                    tableContent += `
                    <td style="color: red"><b>${duyet.trangThai}</b></td>
                    <td>
                        <label class="switch">
                            <input onclick="checkDH(this)" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>`;
                } else {
                    tableContent += `
                    <td style="color: blue"><b>${duyet.trangThai}</b></td>
                    <td>
                        <label class="switch">
                            <input onclick="checkDH(this)" type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>`;
                }
                
                index++;
                
            }
        })   
        tableContent += `<tr> <td colspan="5">TỔNG TIỀN</td>`;
        tableContent += `<td >${tienVN(tongTienHienTai)}</td> </tr>`;
        tableContent += `</tr></tbody>`;
        document.getElementById('myTable').innerHTML = tableContent;
    }
    else if (input == ""){
        alert("Bạn chưa nhập nội dung tìm kiếm!");
    }
    else{
        alert("Mục bạn muốn tìm không tồn tại!");
    }
    document.getElementById('tkiem').value = "";
} 