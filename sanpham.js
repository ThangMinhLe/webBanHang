// Danh sách sản phẩm
var products = [
    {
        MaSP:"NRK",
        TenSP:"Mặt nạ Naruko",
        LoaiSP:"Chăm sóc da",
        GiaBan:"30000",
        SoLuong:"5",
        DonViTinh:"25 ml",
        HinhAnh:"./img/MatNa_NRK.png"
    },
    {
        MaSP:"EL",
        TenSP:"Xịt khoáng Evoderm",
        LoaiSP:"Chăm sóc da",
        GiaBan:"259000",
        SoLuong:"7",
        DonViTinh:"400 ml",
        HinhAnh:"./img/XitKhoang_EL.png"
    },
    {
        MaSP:"SP",
        TenSP:"Sữa dưỡng da Simple",
        LoaiSP:"Chăm sóc da",
        GiaBan:"168000",
        SoLuong:"15",
        DonViTinh:"125 ml",
        HinhAnh:"./img/SuaDuongDa_SP.png"},
    {
        MaSP:"PCL",
        TenSP:"Kem dưỡng da Peacholic",
        LoaiSP:"Chăm sóc da",
        GiaBan:"450000",
        SoLuong:"34",
        DonViTinh:"100 ml",
        HinhAnh:"./img/KemDuongDa_PCL.png"},
    {
        MaSP:"KR",
        TenSP:"Kem dưỡng ẩm Klairs",
        LoaiSP:"Chăm sóc da",
        GiaBan:"360000",
        SoLuong:"22",
        DonViTinh:"60 ml",
        HinhAnh:"./img/KemDuongAm_KR.png"},
    {
        MaSP:"MGD",
        TenSP:"Gel trị mụn Megadou",
        LoaiSP:"Mỹ phẩm chức năng",
        GiaBan:"106000",
        SoLuong:"26",
        DonViTinh:"19 gam",
        HinhAnh:"./img/GelTriMun_MGD.png"},
    {
        MaSP:"OB",
        TenSP:"Nước cân bằng da Obagi",
        LoaiSP:"Mỹ phẩm chức năng",
        GiaBan:"880000",
        SoLuong:"20",
        DonViTinh:"148 ml",
        HinhAnh:"./img/NuocCanBangDa_OB.png"},
    {
        MaSP:"DE",
        TenSP:"Gel ngừa mụn Decumar",
        LoaiSP:"Mỹ phẩm chức năng",
        GiaBan:"77000",
        SoLuong:"21",
        DonViTinh:"20 ml",
        HinhAnh:"./img/GelNguaMun_De.png"},
    {
        MaSP:"COS",
        TenSP:"Miếng dán mụn Cosrx",
        LoaiSP:"Mỹ phẩm chức năng",GiaBan:"7000",
        SoLuong:"17",
        DonViTinh:"1 cái",
        HinhAnh:"./img/MiengDanMun_Cos.png"},
    {
        MaSP:"RP",
        TenSP:"Gel rửa mặt Roche-Posay",
        LoaiSP:"Mỹ phẩm chức năng",GiaBan:"175000",
        SoLuong:"19",
        DonViTinh:"50 ml",
        HinhAnh:"./img/GelRuaMat_RP.png"},
    {
        MaSP:"TPL",
        TenSP:"Kem chống nắng Peacholic",
        LoaiSP:"Chống nắng",GiaBan:"760000",
        SoLuong:"20",
        DonViTinh:"60 ml",
        HinhAnh:"./img/KemChongNang_TPL.png"},
    {
        MaSP:"SL",
        TenSP:"Sữa chống nắng Sunplay",
        LoaiSP:"Chống nắng",GiaBan:"182000",
        SoLuong:"13",
        DonViTinh:"55 gam",
        HinhAnh:"./img/SuaChongNang_SL.png"},
    {
        MaSP:"FD",
        TenSP:"Gel chống nắng Fixderma",
        LoaiSP:"Chống nắng",GiaBan:"243000",
        SoLuong:"23",
        DonViTinh:"70 ml",
        HinhAnh:"./img/GelChongNang_FD.png"},
    {
        MaSP:"TO",
        TenSP:"Tẩy tế bào chết",
        LoaiSP:"Làm sạch da",GiaBan:"285000",
        SoLuong:"27",
        DonViTinh:"30 ml",
        HinhAnh:"./img/TayTeBaoChet_TO.png"},
    {
        MaSP:"CE",
        TenSP:"Sữa rửa mặt Cetaphil",
        LoaiSP:"Làm sạch da",GiaBan:"271000",
        SoLuong:"22",
        DonViTinh:"500 ml",
        HinhAnh:"./img/SuaRuaMat_CE.png"},
    {
        MaSP:"DP",
        TenSP:"Dầu tẩy trang Peacholic",
        LoaiSP:"Làm sạch da",GiaBan:"160000",
        SoLuong:"20",
        DonViTinh:"50 ml",
        HinhAnh:"./img/DauTayTrang_DP.png"},
    {
        MaSP:"TM",
        TenSP:"Gel kẻ mắt Tony Moly",
        LoaiSP:"Trang điểm",GiaBan:"130000",
        SoLuong:"19",
        DonViTinh:"4 gam",
        HinhAnh:"./img/GelKeMat_TM.png"},
    {
        MaSP:"MTF",
        TenSP:"Chì kẻ mắt Merzy",
        LoaiSP:"Trang điểm",GiaBan:"134000",
        SoLuong:"18",
        DonViTinh:"0.5 gam",
        HinhAnh:"./img/ChiKeMat_MTF.png"},
    {
        MaSP:"3C",
        TenSP:"Son lì 3CE",
        LoaiSP:"Trang điểm",GiaBan:"347000",
        SoLuong:"15",
        DonViTinh:"3.5 gam",
        HinhAnh:"./img/SonLi_3C.png"},
    {
        MaSP:"EH",
        TenSP:"Phấn mắt Etude Hause",
        LoaiSP:"Trang điểm",
        GiaBan:"300000",
        SoLuong:"20",
        DonViTinh:"1 cái",
        HinhAnh:"./img/PhanMat_EH.png"
    }
]

//Danh sách các dòng mỹ phẩm
var productType = [
    {
        LoaiSP:"Chăm sóc da",
        ThanhPhan:"Ceramides, Dimethicone, Retinoids, Kojic Acid, Hyaluronic Acid, Salicylic Acid, Vitamin C, Benzoyl Peroxide, Arbutin",
        CongDung:"Ngăn ngừa khô da, làm chậm tiến trình lão hóa, ngăn ngừa và hỗ trợ điều trị mụn, bảo vệ da khỏi các tác nhân bên ngoài, ngăn ngừa kích ứng da, kiểm soát dầu thừa hiệu quả"
    },
    {
        LoaiSP:"Mỹ phẩm chức năng",
        ThanhPhan:"Hyaluronic Acid (HA), Vitamin A(Retinol), Vitamin B (Niacinamide), Vitamin C, Salicylic Acid(BHA), Glycolic Acid, Lactic Acid(AHA), Coenzyme Q10, Matrixyl 3000.",
        CongDung:"Ngoài có chức năng nuôi dưỡng, chăm sóc da như mỹ phẩm bình thường thì mỹ phẩm chức năng còn giúp điều trị , hỗ trợ diều trị các bệnh lý về da: vẩy nén, chàm, mụn, nám. Xử lý các vấn đề như mụn, viêm da cơ địa, nám, lão hóa, chàm, dị ứng,... vô cùng hiệu quả"
    },
    {
        LoaiSP:"Chống nắng",
        ThanhPhan:"Zin Oxide (ZnO), Titanium Oxide, Avobenzone, Oxybenzone, Octinoxate, Octisalate",
        CongDung:"Ngăn ngừa bức xạ UV, tránh lão hóa sớm, làm giảm nguy cơ cháy nắng, ngừa các vết sạm da, tăng cường sức khỏe da, sử dụng thay thế kem nền, hỗ trợ quần áo chống nắng."
    },
    {
        LoaiSP:"Làm sạch da",
        ThanhPhan:"ALOE VERA, ARGAN OIL, BETA-HYDROXY ACID (BHA), CAFFEINE, COENZYME Q10 (COQ10), EMOLLIENT.",
        CongDung:"Giúp giảm lão hóa da, hạn chế tình trạng lỗ chân lông to, giúp các thành phần chống lão hóa hoạt động tốt, ngăn ngừa mất nước trên da, giảm sản sinh dầu thừa, loại bỏ bụi bẩn ngăn ngừa mụn."
    },
    {
        LoaiSP:"Trang điểm",
        ThanhPhan:"Chất nền, chất nhũ hóa, chất làm đặc, hoạt chất, chất làm mềm, chất tạo màu, chất làm mờ và làm sáng, mùi hương, chất bảo quản",
        CongDung:"Che đi những khuyết điểm, thay đổi hình ảnh, điều chỉnh khuôn mặt, thu hút người khác giới, yêu thương bản thân, củng cố sự tự tin."
    }
]

//Set sản phẩm vào local storage 
localStorage.setItem('DSSP', JSON.stringify(products))

localStorage.setItem('DSLoaiSP', JSON.stringify(productType))