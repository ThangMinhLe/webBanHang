function LuuThongTin_ChiTiet_SP(i) {
    localStorage.removeItem('sp_tam');
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    localStorage.setItem("sp_tam", JSON.stringify([DSSP[i]]));
}