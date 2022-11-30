
function TimKiem() {
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    var s = document.getElementById("tkiem").value;
    localStorage.removeItem('DSTKiem');
    DSTKiem = new Array();
    if (s != null || s!="") {
        if (!isNaN(s) && s > 0) {
            for (var i = 0; i < DSSP.length; i++) {
                if (DSSP[i].GiaBan <= Number(s)) {
                    DSTKiem.push(DSSP[i]);
                    localStorage.setItem("DSTKiem", JSON.stringify(DSTKiem));
                }
            }
        } else {
            for (var i = 0; i < DSSP.length; i++) {
                if (DSSP[i].MaSP.toLowerCase().search(s.toLowerCase())!=-1|| DSSP[i].TenSP.toLowerCase().search(s.toLowerCase())!=-1 || DSSP[i].LoaiSP.toLowerCase().search(s.toLowerCase())!=-1) {
                    DSTKiem.push(DSSP[i]);
                    localStorage.setItem("DSTKiem", JSON.stringify(DSTKiem));
                }
            }
        }
    } else {
        document.write(
            alert("Bạn chưa nhập nội dung tìm kiếm!")
        );
    }
    document.getElementById('tkiem').value = "";
}
// -------------------------Xử lý liên quan đến sản phẩm sau khi tìm kiếm-------------------
function LuuThongTin_ChiTiet_SP(i) {
    localStorage.removeItem('sp_tam');
    var DSSP = JSON.parse(localStorage.getItem('DSTKiem'));
    localStorage.setItem("sp_tam", JSON.stringify([DSTKiem[i]]));
}
function LuuThongTinSP_GioHang(i) {
    var DSTKiem = JSON.parse(localStorage.getItem('DSTKiem'));
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    if (GioHang == null) {
        GioHang = new Array();
        var tien=1*Number(DSTKiem[i].GiaBan);
        sp = { MaSP: DSTKiem[i].MaSP, TenSP: DSTKiem[i].TenSP, GiaBan: DSTKiem[i].GiaBan, HinhAnh: DSTKiem[i].HinhAnh, SoLuongMua: '1' ,ThanhTien: tien};
    } else {
        tam = DSTKiem[i].MaSP;
        var SoLuong = 0;
        for (var j = 0; j < GioHang.length; j++) {
            if (GioHang[j].MaSP == tam) {
                SoLuong = Number(GioHang[j].SoLuongMua) + 1;
                GioHang.splice(j,1);
            } else {
                SoLuong = 1;
            }
        }
        var tien=Number(SoLuong)*Number(DSTKiem[i].GiaBan);
        sp = { MaSP: DSTKiem[i].MaSP, TenSP: DSTKiem[i].TenSP, GiaBan: DSTKiem[i].GiaBan, HinhAnh: DSTKiem[i].HinhAnh, SoLuongMua: SoLuong ,ThanhTien: tien};
    }
    GioHang.push(sp);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}