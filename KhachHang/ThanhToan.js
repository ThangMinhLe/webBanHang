function updata()
{  var z=0;
    var x=0;
    var key=false;
    var GioHang = JSON.parse(localStorage.getItem('GioHang'));
    var DuyetDonHangtam = JSON.parse(localStorage.getItem('DuyetDonHang'));
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
        
         
          
       }
       for (var i = exits.length-1; i>=0; i--)  
       if (exits[i].checked)
       XoaSP(i);
       alert("da duyet don hang");
       
       location.reload();
   tam={maDonHang: randomkeyDH(),tenKH: user[0].name,thoiGianDat: today(),trangThai: 'Chưa duyệt',chiTiet: giohangduyet,maKH:user[0].MaKH,tongTien:x,}
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
    return "${time}:${minute}:${second}, ${day}/${month}/${year}";


}

