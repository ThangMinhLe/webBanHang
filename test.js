var DSDH = localStorage.getItem('DSDH') ? JSON.parse(localStorage.getItem('DSDH')) : [];
function DSSPOfBill(MaSP, TenSP, SoLuong, GiaTien) {
    this.MaSP = MaSP,
        this.TenSP = TenSP,
        this.SoLuong = SoLuong,
        this.GiaTien = GiaTien
}
function Product(MaDH, MaKH, TenKH, DiaChi, Phone, DayOrder, DSSPOfBill, TongTien, HinhThucTT) {
        this.MaDH = MaDH,
        this.MaKH = MaKH,
        this.TenKH = TenKH,
        this.DiaChi = DiaChi,
        this.Phone = Phone,
        this.DayOrder = DayOrder,
        this.DSSPOfBill = DSSPOfBill,
        this.TongTien = TongTien,
        this.HinhThucTT = HinhThucTT
}