function renderTable() {
    let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    if(Carts.length === 0) {
        document.getElementById('myTable').style.display = 'none';
        return false; 
    }
    document.getElementById('myTable').style.display = 'block';
    let tableContent = `
    <tr>
        <th>STT</th>
        <th>Mã đơn hàng</th>
        <th>Tên khách hàng</th>
        <th>Thời gian đặt đơn</th>
        <th>Trạng thái</th>
        <th>Xem chi tiết</th>
        <th>Tổng tiền</th>
        <th>Tác vụ</th>
    </tr>`;
    Carts.forEach((Cart, index) => {
        index++;
        let tongTien = Cart.GiaBan*Cart.SoLuongMua;
        let SoLuong = Cart.SoLuongMua;
        console.log(tongTien, SoLuong);
        tableContent += `<tr>
        <th>${index}</th>
        <th>${Cart.LoaiSP}</th>
        <th>${Cart.MaSP}</th>
        <th>${SoLuong}</th>
        <th>${Cart.TenSP}</th>
        <th>${Cart.GiaBan}</th>
        <th>${`${tongTien}`+" VNĐ"}</th>
        <th><label class="switch">
        <input onclick="acceptCart()" type="checkbox">
        <span class="slider round"></span>
      </label></th>
    </tr>`;

    })
    document.getElementById('myTable').innerHTML = tableContent;
}

function acceptCart() {
    return true;
}