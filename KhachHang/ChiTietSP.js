function LuuThongTin_ChiTiet_SP(i) {
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    localStorage.setItem("sp_tam", JSON.stringify([DSSP[i]]));
}