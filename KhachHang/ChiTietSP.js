function LuuThongTinSP(SP) {
    sp_tam = new Array();
    sp_tam.push([{ "MaSP": SP.MaSP, "TenSP": SP.TenSP, "LoaiSP": SP.LoaiSP, "GiaBan": SP.GiaBan, "DonViTinh": SP.DonViTinh, "HinhAnh": SP.HinhAnh }]);
    localStorage.setItem("sp_tam", JSON.stringify(sp_tam));
}