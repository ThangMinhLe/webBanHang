function updata()
{  var z=0;
    var x=0;
    var key=false;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
<<<<<<< Updated upstream
    var DuyetDonHangtam =  localStorage.getItem('DuyetDonHang') ? JSON.parse(localStorage.getItem('DuyetDonHang')) : [];
=======
    var DuyetDonHangtam = localStorage.getItem('DuyetDonHang') ? JSON.parse(localStorage.getItem('DuyetDonHang')) : [];
>>>>>>> Stashed changes
    var user =JSON.parse(localStorage.getItem('UserLogin'));
    giohangduyet =new Array();
    var exits= document.getElementsByName('solg');
    for (var i = 0; i < exits.length; i++)  
    if (exits[i].checked)
        key=true;
    if (key){
    for (var i = 0; i < exits.length; i++)  
    if (exits[i].checked)
       {  x=x+parseInt(GioHang[i].GiaBan)*GioHang[i].SoLuongMua;
          giohangduyet[z]=GioHang[i];
          z++;
          Tru_SL(GioHang[i].MaSP,GioHang[i].SoLuongMua);
         
          
       }
       for (var i = exits.length-1; i>=0; i--)  
       if (exits[i].checked)
             XoaSP(i);
       alert("da duyet don hang");
       
       location.reload();
       console.log(user.name);
   tam={maDonHang: randomkeyDH(),maKH: user.MaKH,tenKH: user.name,thoiGianDat: today(),trangThai: 'Chưa duyệt',chiTiet: giohangduyet,tongTien:x,}
 DuyetDonHangtam.push(tam);
 localStorage.setItem("DuyetDonHang", JSON.stringify(DuyetDonHangtam));}
 else 
 alert("BẠN CHƯA CHỌN MÓN HÀNG NÀO !!")

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

    let time = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    return `${time}:${minute}:${second}, ${day}/${month}/${year}`;


}
function kiemtrakho()
{
    var KhoHang = JSON.parse(localStorage.getItem('DSSP'));
    var exits= document.getElementsByName('solg');
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    var i=0; var key=true; var z=0;
    for (var j = 0; j < exits.length; j++)  
    if (exits[j].checked)
    for (i=0;i<KhoHang.length;i++)
    if(KhoHang[i].MaSP==GioHang[j].MaSP) 
      if(KhoHang[i].SoLuong>1 && KhoHang[i].SoLuong>GioHang[j].SoLuongMua ){}
        else
        {
        key=false;
        z=i;
        }
       if (key)
       {
        updata();
       }
       else
       alert('KHÔNG CÒN ĐỦ SỐ LƯỢNG CỦA MẶT HÀNG'+KhoHang[z].TenSP); 
 }


function Tru_SL(ma,solg){
    var ma;
    var KhoHang = JSON.parse(localStorage.getItem('DSSP'));
    
    for(var i=0;i<KhoHang.length;i++){
        if(KhoHang[i].MaSP==ma && KhoHang[i].SoLuong>1){
            sl=Number(KhoHang[i].SoLuong)-Number(solg);
            tam={MaSP:KhoHang[i].MaSP,TenSP:KhoHang[i].TenSP,SoLuong:sl,LoaiSP:KhoHang[i].LoaiSP,HinhAnh:KhoHang[i].HinhAnh,GiaBan:KhoHang[i].GiaBan,DonViTinh:KhoHang[i].DonViTinh}
            KhoHang.splice(i,1);
        }
    }
    KhoHang.push(tam);
    localStorage.setItem("DSSP", JSON.stringify(KhoHang));
}
