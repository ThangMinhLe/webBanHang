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
    window.year = today.getFullYear();
    return today;
}
let dsGioHang = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
let DuyetDonHang = [
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 200000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 1500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 350000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 300000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 450000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
];
function renderTable2() {
    // let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    // if(Carts.length === 0) {
    //     document.getElementById('myTable').style.display = 'none';
    //     return false; 
    // }
    // document.getElementById('myTable').style.display = 'block';
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
    DuyetDonHang.forEach((duyet, index) => {
        index++;
        tableContent += `<tr>
        <td>${index}</td>
        <td>${duyet.maDonHang}</td>
        <td>${duyet.tenKH}</td>
        <td>${duyet.thoiGianDat}</td>
        <td>${duyet.trangThai}</td>
        <td>
            <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
        </td>
<<<<<<< Updated upstream
        <td>${`${duyet.tongTien}`+" VNĐ"}</td>
        <td><label class="switch">
        <input  type="checkbox">
        <span class="slider round"></span>
      </label></td>
    </tr>`;
    })
    tableContent +=`</tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
=======
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
        tableContent += `</tr></tbody>`;
        
    document.getElementById('myTable').innerHTML = tableContent;
    })

    console.log(tableContent);
>>>>>>> Stashed changes
}
function xemChiTiet(maDonHang){
    let tongTien;
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
            <th>Loại SP</th>
            <th>Số lượng</th>
            <th>Đơn vị</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {

        if(duyet.maDonHang === maDonHang) {
            (DuyetDonHang[index].chiTiet).forEach((ct, dem) => {
<<<<<<< Updated upstream
                tongTien+=(ct.GiaBan*ct.SoLuong);
=======
                tongTien += Number(ct.GiaBan)*Number(ct.SoLuongMua);
>>>>>>> Stashed changes
                tableContent += `<tr>
                <td>${dem + 1}</td>
                <td>${ct.MaSP}</td>
                <td>${ct.TenSP}</td>
                <td><img src="${ct.HinhAnh}" alt="Ảnh sản phẩm" width="40" height="40"></td>
                <td>${ct.LoaiSP}</td>
                <td>${ct.SoLuongMua}</td>
                <td>${ct.DonViTinh}</td>
                <td>${`${ct.GiaBan}`+" VNĐ"}</td>
                <td>${ct.GiaBan*ct.SoLuongMua}</td>
            </label></td>
            </tr>`;
            })
        }
        index++;
    })
    tableContent +=`
    <tr>
        <td colspan="8">TỔNG TIỀN</td>
        <td>${tongTien}</td>
    </tr>
        </tbody>`;
    document.getElementById('chiTietDonHang').innerHTML = tableContent;
<<<<<<< Updated upstream
}
=======
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
}

function toggleSwitch(e) {
    let row = e.parentElement.parentElement.parentElement;

}
>>>>>>> Stashed changes
