"use strict";
var DonDuyet = localStorage.getItem('DuyetDonHang') ? JSON.parse(localStorage.getItem('DuyetDonHang')) : [];
var listDSSP = localStorage.getItem('DSSP') ? JSON.parse(localStorage.getItem('DSSP')) : [];
var DHTT = localStorage.getItem('DHTT') ? JSON.parse(localStorage.getItem('DHTT')) : [];


let i;
let j;
let DoanhThu=0;
let TienBanHang=0;
let SLSPDaBan=0;
let TongSP=0;
for (i=0;i<DonDuyet.length;i++){
    // Tinh so luong sp da ban
    for (j=0;j < DonDuyet[i].chiTiet.length;j++){
            SLSPDaBan += Number(DonDuyet[i].chiTiet[j].SoLuongMua);

    }
    TienBanHang += Number(DonDuyet[i].tongTien);

}


for (i=0;i<listDSSP.length;i++){
    if ((typeof listDSSP[i].SoLuong)== 'string' ){
        TongSP+=Number(listDSSP[i].SoLuong);
        DoanhThu += Number(listDSSP[i].SoLuong)*Number(listDSSP[i].GiaBan);
    }
    else if ((typeof listDSSP[i].SoLuong) == 'number' ) {
        TongSP+=Number(listDSSP[i].SoLuong);
        DoanhThu += Number(listDSSP[i].SoLuong * listDSSP[i].GiaBan);
    }
}
let TileDT = DHTT.tongTienDaDuyet*100/DoanhThu;


let TileSPban= SLSPDaBan*100/TongSP;
const progressBar = document.querySelector(".circular__progress--bar");
const progressValue=document.querySelector(".circular__progress--value");

let initValue = 0;
let finalValue = Number(TileSPban.toFixed(0));
const updateValue = function (){
    if(initValue!== finalValue){
        initValue++;
        progressValue.textContent = `${initValue}%`;
        progressBar.style.backgroundImage= `conic-gradient(#74c0fc,#4dabf7,#339af0 ${3.6 * initValue}deg,#e9ecef 0)`;
    }
    else
        clearInterval();
};

setInterval(updateValue,50);



const progressBar2 = document.querySelector(".circular__progress--bar-2");
const progressValue2=document.querySelector(".circular__progress--value-2");
let initValue2 = 0;
let finalValue2 = Number(TileDT.toFixed(0)) ;
const updateValue2 = function (){
    if(initValue2!== finalValue2){
        initValue2++;
        progressValue2.textContent = `${initValue2}%`;
        progressBar2.style.backgroundImage= `conic-gradient(#74c0fc,#4dabf7,#339af0 ${3.6 * initValue2}deg,#e9ecef 0)`
    }
    else
        clearInterval();
};

setInterval(updateValue2,50);
