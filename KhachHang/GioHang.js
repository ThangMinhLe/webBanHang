

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
function LuuThongTinSP_GioHang_o_chiTiet() {
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    var sp = JSON.parse(localStorage.getItem('sp_tam'));
    var SL = document.getElementById("soluong").value;
    if (GioHang == null) {
        GioHang = new Array();
        var tien=Number(SL)*Number(sp[0].GiaBan);
        tam = { MaSP: sp[0].MaSP, TenSP: sp[0].TenSP, GiaBan: sp[0].GiaBan, HinhAnh: sp[0].HinhAnh, SoLuongMua: SL ,ThanhTien: tien};
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
        var tien=Number(SL_tam)*Number(sp[0].GiaBan);
        tam = { MaSP: sp[0].MaSP, TenSP: sp[0].TenSP, GiaBan: sp[0].GiaBan, HinhAnh: sp[0].HinhAnh, SoLuongMua: SL_tam ,ThanhTien: tien};
    }
    GioHang.push(tam);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
    localStorage.removeItem('sp_tam');
}
function XoaSP(k){
    var ma;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    for(var j=0;j<GioHang.length;j++){
        if(j==k){
            ma=GioHang[j].MaSP;
        }
    }
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    for(var i=0;i<GioHang.length;i++){
        if(GioHang[i].MaSP==ma){
            GioHang.splice(i,1);
        }
    }
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}
function Tru_SL(k){
    var ma;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    for(var j=0;j<GioHang.length;j++){
        if(j==k){
            ma=GioHang[j].MaSP;
        }
    }
    for(var i=0;i<GioHang.length;i++){
        if(GioHang[i].MaSP==ma && GioHang[i].SoLuongMua>1){
            sl=Number(GioHang[i].SoLuongMua)-Number(1);
            tien=Number(sl)*Number(GioHang[i].GiaBan);
            sp={ MaSP: GioHang[i].MaSP, TenSP: GioHang[i].TenSP, GiaBan: GioHang[i].GiaBan, HinhAnh: GioHang[i].HinhAnh, SoLuongMua: sl ,ThanhTien: tien};
            GioHang.splice(i,1);
        }
    }
    GioHang.push(sp);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}
function Cong_SL(k){
    var ma;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    for(var j=0;j<GioHang.length;j++){
        if(j==k){
            ma=GioHang[j].MaSP;
        }
    }
    for(var i=0;i<GioHang.length;i++){
        if(GioHang[i].MaSP==ma){
            sl=Number(GioHang[i].SoLuongMua)+Number(1);
            tien=Number(sl)*Number(GioHang[i].GiaBan);
            sp={ MaSP: GioHang[i].MaSP, TenSP: GioHang[i].TenSP, GiaBan: GioHang[i].GiaBan, HinhAnh: GioHang[i].HinhAnh, SoLuongMua: sl ,ThanhTien: tien};
            GioHang.splice(i,1);
        }
    }
    GioHang.push(sp);
    localStorage.setItem("GioHang", JSON.stringify(GioHang));
}
