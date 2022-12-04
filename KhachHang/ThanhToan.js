<<<<<<< Updated upstream
function laysoluongsp ()
{ 
    var DSSP = JSON.parse(localStorage.getItem('DSSP'));
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
   alert("check");
}
=======
function updata()
{  var z=0;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    var DuyetDonHangtam = JSON.parse(localStorage.getItem('DuyetDonHang'));
    giohangduyet =new Array();
    var exits= document.getElementsByName('solg');
    for (var i = 0; i < exits.length; i++)  
    if (exits[i].checked)
       {    z++;
          giohangduyet[z]=GioHang[i];
         // XoaSP(i)
       }
   tam={MaDonHangmaDonHang: randomkeyDH(),tenKH: 'Nguyễn Phú Thịnh',thoiGianDat: today(),trangThai: 'Chưa duyệt',chiTiet: giohangduyet,maKH: 'KHICY1000',tongTien: 150000,}
 DuyetDonHangtam.push(tam);
 localStorage.setItem("DuyetDonHang", JSON.stringify(DuyetDonHangtam));
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
function randomkeyDH() {
    const random = Math.random() * (9999 - 1000);
    let key = 'DHICY' + Math.round(random);
    return key;
}
function today() {
    var today = new Date();
    window.year = today.getFullYear();
    return today;
}
>>>>>>> Stashed changes
