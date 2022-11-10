function LuuThongTinSP_GioHang(i) {
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    if (GioHang == null) {
        GioHang = new Array();
        sp = { MaSP: DSSP[i].MaSP, TenSP: DSSP[i].TenSP, GiaBan: DSSP[i].GiaBan, HinhAnh: DSSP[i].HinhAnh, SoLuongMua: '1' };
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
        sp = { MaSP: DSSP[i].MaSP, TenSP: DSSP[i].TenSP, GiaBan: DSSP[i].GiaBan, HinhAnh: DSSP[i].HinhAnh, SoLuongMua: SoLuong };
    }
    GioHang.push(sp);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}