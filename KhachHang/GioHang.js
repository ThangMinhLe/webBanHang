function LuuThongTinSP_GioHang(i) {
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    if (GioHang == null) {
        GioHang = new Array();
        var tien=1*Number(DSSP[i].GiaBan);
        sp = { MaSP: DSSP[i].MaSP, TenSP: DSSP[i].TenSP, GiaBan: DSSP[i].GiaBan, HinhAnh: DSSP[i].HinhAnh, SoLuongMua: '1' ,ThanhTien: tien};
    } else {
        tam = DSSP[i].MaSP;
        var SoLuong = 0;
        for (var j = 0; j < GioHang.length; j++) {
            if (GioHang[j].MaSP == tam) {
                SoLuong = Number(GioHang[j].SoLuongMua) + 1;
                GioHang.splice(j,1);
            } else {
                SoLuong = 1;
            }
        }
        var tien=Number(SoLuong)*Number(DSSP[i].GiaBan);
        sp = { MaSP: DSSP[i].MaSP, TenSP: DSSP[i].TenSP, GiaBan: DSSP[i].GiaBan, HinhAnh: DSSP[i].HinhAnh, SoLuongMua: SoLuong ,ThanhTien: tien};
    }
    GioHang.push(sp);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}
function LuuThongTinSP_GioHang_o_chiTiet(sp) {
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    var SL = document.getElementById("soluong").value;
    if (GioHang == null) {
        GioHang = new Array();
        var tien=Number(SL)*Number(sp.GiaBan);
        var x = { MaSP: sp[0].MaSP, TenSP: sp[0].TenSP, GiaBan: sp[0].GiaBan, HinhAnh: sp[0].HinhAnh, SoLuongMua: SL ,ThanhTien: tien};
    } else {
        var SL_tam = 0;
        for (var j = 0; j < GioHang.length; j++) {
            if (GioHang[j].MaSP == sp[0].MaSP) {
                //Nếu sp mua đã có trong giỏ hàng thì cộng lại số lượng và xóa khỏi giỏ hàng để cập nhập lại
                SL_tam = Number(GioHang[j].SoLuongMua) + SL;
                GioHang.splice(j,1);
            } else {
                SL_tam = SL;
            }
        }
        var tien=Number(SL_tam)*Number(sp.GiaBan);
        var x = { MaSP: sp[0].MaSP, TenSP: sp[0].TenSP, GiaBan: sp[0].GiaBan, HinhAnh: sp[0].HinhAnh, SoLuongMua: SL_tam ,ThanhTien: tien};
    }
    GioHang.push(x);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}