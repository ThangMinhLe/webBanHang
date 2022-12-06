let UserLogin2 = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : [];
let DuyetDonHang = localStorage.getItem('DuyetDonHang') ? JSON.parse(localStorage.getItem('DuyetDonHang')) : [];
function renderTable2() {
    let tongTienDaDuyet = 0;
    let donDaDuyet = 0;
    let donChuaDuyet = 0;
    let tongDonHang = 0;
    let tongTienChuaDuyet = 0;
    let tongTienDH = 0;
    let index = 0;
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
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet) => {
        if(duyet.maKH === UserLogin2.MaKH) {
            tongDonHang++;
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
                donChuaDuyet++;
                tongTienChuaDuyet += Number(duyet.tongTien);
                tableContent += `
                <td style="color: red"><b>${duyet.trangThai}</b></td>`;
            } else {
                donDaDuyet++;
                tongTienDaDuyet += Number(duyet.tongTien);
                tableContent += `
                <td style="color: blue"><b>${duyet.trangThai}</b></td>`;
            }
        }
    })
    tableContent += `
        <tr id="tongTienDaDuyet"> 
            <td style="color: blue" colspan="5"><b>TỔNG TIỀN ĐÃ DUYỆT</b></td>
            <td style="color: blue"><b>${tienVN(tongTienDaDuyet)}</b></td> 
            <td style="color: blue"><b>Đơn đã duyệt: ${donDaDuyet}</b></td> 
        </tr>`;
    tableContent += `
        <tr id="tongTienChuaDuyet"> 
            <td style="color: red" colspan="5"><b>TỔNG TIỀN CHƯA DUYỆT</b></td>
            <td style="color: red" ><b>${tienVN(tongTienChuaDuyet)}</b></td> 
            <td style="color: red" ><b>Đơn chưa duyệt: ${donChuaDuyet}</b></td> 
        </tr>`;
    tableContent += `
        <tr> 
            <td style="color: green" colspan="5"><b>TỔNG TIỀN</b></td>
            <td style="color: green" ></b>${tienVN(tongTienDH)}</b></td> 
            <td style="color: green" ></b>Tổng đơn hàng: ${tongDonHang}</b></td>
        </tr>`;
    tableContent += `</tr></tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
    let DHTT = {
        tongTienDaDuyet: tongTienDaDuyet,
        donDaDuyet: donDaDuyet,
        donChuaDuyet: donChuaDuyet,
        tongTienChuaDuyet: tongTienChuaDuyet,
        tongTienDH: tongTienDH,
        tongDonHang: tongDonHang,
    }
    localStorage.setItem('DHTT', JSON.stringify(DHTT));
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
    return '.' + fileChuk[fileChuk.length - 1];
}

function tienVN(giaTri){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giaTri);
}

function checkDH(e, t) {
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
    let tongTienDaDuyet = 0;
    let donDaDuyet = 0;
    let donChuaDuyet = 0;
    let tongTienChuaDuyet = 0;
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
                    tongTienChuaDuyet += Number(duyet.tongTien);
                    tableContent += `
                    <td style="color: red"><b>${duyet.trangThai}</b></td>
                    <td>
                        <label class="switch">
                            <input onclick="checkDH(this, 0)" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>`;
                } else {
                    tongTienDaDuyet += Number(duyet.tongTien);
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
        tableContent += `
            <tr id="tongTienDaDuyet"> 
                <td style="color: blue" colspan="5"><b>TỔNG TIỀN ĐÃ DUYỆT</b></td>
                <td style="color: blue"><b>${tienVN(tongTienDaDuyet)}</b></td> 
            </tr>`;
        tableContent += `
            <tr id="tongTienChuaDuyet"> 
                <td style="color: red" colspan="5"><b>TỔNG TIỀN CHƯA DUYỆT</b></td>
                <td style="color: red" ><b>${tienVN(tongTienChuaDuyet)}</b></td> 
            </tr>`;
        tableContent += `
            <tr> 
                <td style="color: green" colspan="5"><b>TỔNG TIỀN</b></td>
                <td style="color: green" ></b>${tienVN(tongTienHienTai)}</b></td> 
                <td class="loadDuLieu" onclick="renderTable2()" ></b>LƯU DỮ LIỆU</b></td> 
            </tr>`;
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