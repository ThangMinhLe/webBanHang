document.getElementById("themSP").onclick=function (){
    document.getElementById("NewScrAdd").innerHTML= `
<div id="background-color-themsanpham">
        <div style="border-radius: 20px;" id="background-themsanpham">
            <div class="ThemSanPhamBox" id="ThemSanPhamnBox">
                <div class="Title" style="justify-content: center;">Thêm sản phẩm</div>
                <div>
                    <span>Mã sản phẩm</span>
                    <input placeholder="Mã sản phẩm" style="padding-left: 9px;" id="masp" class="Input" type="text">
                </div>
                <div>
                    <span For="TenSanPham">Tên sản phẩm</span>
                    <input class="Input" type="text" style="padding-left: 9px;" id="ten" name="tensanpham"
                           placeholder="Tên sản phẩm">
                </div>

                <div style="justify-content: flex-start;">
                    <span>Hình ảnh </span>
                    <input class="InputIMG" style="padding-left: 9px; margin-left: 17%;" type="file" id="hinhanh"
                           name="hinhanh">
                </div>

                <div style="justify-content: flex-start;">
                    <span>Phân loại</span>
                    <select class="SelectBox" name="phanLoai" id="phanloai" class="Input"
                            style="padding: 9px; margin-left: 18%; font-size: 18px;">
                        <option value="Chăm sóc da">Chăm sóc da</option>
                        <option value="Chống nắng">Chống nắng</option>
                        <option value="Làm sạch da">Làm sạch da</option>
                        <option value="Trang điểm">Trang điểm</option>
                        <option value="Mỹ phẩm chức năng">Mỹ phẩm chức năng</option>
                    </select>
                </div>

                <div>
                    <span>Số lượng </span>
                    <input class="Input" type="number" id="soluong" name="soluong">
                </div>

                <div>
                    <span>Mô tả</span>
                    <input class="Input" type="text" id="xemchitiet" name="xemchitiet">
                </div>

                <div>
                    <span>Giá tiền</span>
                    <input type="text" id="giatien" name="giatien" placeholder="Giá tiền" class="Input">
                </div>

                <div style="justify-content: center;">
                    <button onClick='themsanppham()' class="ThemSPButton">Thêm sản phẩm</button>
                </div>
            </div>
        </div>
    </div>
`
    let thoatra = document.getElementById('background-color-themsanpham');
    thoatra.onclick = function (e) {
        if (e.target.matches('#background-color-themsanpham'))
                thoatra.remove()
    }

}