var listDSSP = localStorage.getItem('DSSP') ? JSON.parse(localStorage.getItem('DSSP')) : [];
var listDSLoaiSP=localStorage.getItem('DSLoaiSP') ? JSON.parse(localStorage.getItem('DSLoaiSP')) : [];
// localStorage.setItem('DSSP',JSON.stringify(listDSSP)) ;
// localStorage.setItem('DSLoaiSP',JSON.stringify(listDSLoaiSP));
render();
function SanPham(MaSP,TenSP,HinhAnh,LoaiSP,SoLuong,DungTich,GiaBan,ThanhPhan,CongDung){ //DungTich==DonViTinh
    this.MaSP=MaSP;
    this.TenSP=TenSP;
    this.HinhAnh=HinhAnh;
    this.LoaiSP=LoaiSP;
    this.SoLuong=SoLuong;
    this.DonViTinh=DungTich;
    this.GiaBan=GiaBan;
    this.CongDung=CongDung;
    this.ThanhPhan=ThanhPhan;
}
function ChiTietSP(LoaiSP,CongDung,ThanhPhan){
    this.LoaiSP=LoaiSP;
    this.CongDung=CongDung;
    this.ThanhPhan=ThanhPhan;
}
function render(){
    let table=`<tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Phân loại</th>
            <th>Số lượng</th>
            <th>Dung tích</th>
            <th>Giá tiền</th>
            <th>Tác vụ</th>
        </tr>
    `
    var i;
    for (i=10; i<listDSSP.length && i<20;i++)
        table += `<tr>
            <td>${i+1}</td>
            <td>${listDSSP[i].MaSP}</td>
            <td>${listDSSP[i].TenSP}</td>
            <td><img src="${fileInpToTextInp(listDSSP[i].HinhAnh)}" width="50px" height="50px"> </td>
            <td>${listDSSP[i].LoaiSP}</td>
            <td>${listDSSP[i].SoLuong}</td>
            <td>${listDSSP[i].DonViTinh}</td>
            <td>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(listDSSP[i].GiaBan)
        }</td>
            <td>
                <a href="#form-id"><i class="fa-solid fa-pen-to-square" onclick="showSP(listDSSP[${i}].MaSP)" style="cursor: pointer;"></i></a>
                <i class="fa-solid fa-xmark" onclick="removeSP(listDSSP[${i}].MaSP)" style="cursor: pointer;"></i>
            </td>
        </tr>
    `
    document.getElementById('myTable').innerHTML = table;

}
function fileInpToTextInp(event) {
    let fileChuk = event.split("\\");
    return '.' + fileChuk[fileChuk.length - 1];
}
function clear(){
    let MaSP = document.getElementById('masp').value='';
    let TenSP = document.getElementById('tensanpham').value='';
    let LoaiSP = document.getElementById('phanloai').value='';
    let GiaBan = document.getElementById('giatien').value='';
    let SoLuong = document.getElementById('soluong').value='';
    let DungTich = document.getElementById('dungtich').value='';
    let HinhAnh = document.getElementById('hinhanh').value='';
    let CongDung = document.getElementById('congdung').value='';
    let ThanhPhan = document.getElementById('thanhphan').value='';
}

function addSP(){
        let MaSP = document.getElementById('masp').value;
        let TenSP = document.getElementById('tensanpham').value;
        let LoaiSP = document.getElementById('phanloai').value;
        let GiaBan = document.getElementById('giatien').value;
        let SoLuong = document.getElementById('soluong').value;
        let DungTich = document.getElementById('dungtich').value;
        let event = document.getElementById('hinhanh').value;
        let HinhAnh = fileInpToTextInp(event);
        let CongDung = document.getElementById('congdung').value;
        let ThanhPhan = document.getElementById('thanhphan').value;
        Validator({
            form: '#form-id',
            formGroupSelector: '.form-group',
            errorSelector: '.form-massage',
            rules: [
                Validator.isRequired('#masp','Vui lòng nhập mã sản phẩm' ),
                Validator.isIDProduct('#masp',function () {
                    return document.querySelector('#form-id #masp').value;
                },'Mã sản phẩm đã tồn tại'),
                Validator.isIMG('#hinhanh','Vui lòng upload hình ảnh'),
                Validator.isRequired('#tensanpham','Vui lòng nhập tên sản phẩm'),
                Validator.isRequired('#giatien', 'Vui lòng nhập giá tiền'),
                Validator.isRequired('#soluong',' Vui lòng nhập số lượng'),
                Validator.isRequired('#dungtich',' Vui lòng nhập dung tích'),
                Validator.isRequired('#congdung','Vui lòng nhập công dụng'),
                Validator.isRequired('#thanhphan','Vui lòng nhập những thành phần'),
            ],
            onSubmit: function () {
                let sanpham = new SanPham(MaSP,TenSP,HinhAnh,LoaiSP,SoLuong,DungTich,GiaBan,ThanhPhan,CongDung);
                let chitietSP= new ChiTietSP(LoaiSP,CongDung,ThanhPhan);
                listDSSP.push(sanpham);
                listDSLoaiSP.push(chitietSP);
                render();
                clear();
                localStorage.setItem('DSSP',JSON.stringify(listDSSP));
                localStorage.setItem('DSLoaiSP',JSON.stringify(listDSLoaiSP));

            }
        })
}
function removeSP(iD) {
    if (confirm('Bạn có muốn xoá không?')) {
        for (i=10; i<listDSSP.length && i<20;i++)
            if (listDSSP[i].MaSP === iD) {
                listDSSP.splice(i, 1);
                localStorage.setItem('DSSP',JSON.stringify(listDSSP));
                localStorage.setItem('DSLoaiSP',JSON.stringify(listDSLoaiSP));
                render();
            }
    }
}
function showSP(iD){
    var i;
    for (i=10; i<listDSSP.length && i<20;i++){
        if (listDSSP[i].MaSP === iD) {

            document.getElementById('masp').value=listDSSP[i].MaSP;
            document.getElementById('index').value= i;
            document.getElementById('tensanpham').value =listDSSP[i].TenSP;
            document.getElementById('phanloai').value=listDSSP[i].LoaiSP;
            document.getElementById('giatien').value=listDSSP[i].GiaBan;
            document.getElementById('soluong').value=listDSSP[i].SoLuong;
            document.getElementById('dungtich').value=listDSSP[i].DonViTinh;
            document.getElementById('congdung').value=listDSSP[i].CongDung;
            document.getElementById('thanhphan').value = listDSSP[i].ThanhPhan;
            document.getElementById('hinhanh').value = listDSSP[i].HinhAnh;
            let event = document.getElementById('hinhanh').value;
            let HinhAnh = fileInpToTextInp(event);
            document.getElementById('buttonThemSP').style.display="none";
            document.getElementById('buttonCapNhap').style.display="inline-block";
            console.log(listDSSP[i]);
            Validator({
                form: '#form-id',
                formGroupSelector: '.form-group',
                errorSelector: '.form-massage',
                rules: [
                    Validator.isRequired('#masp','Vui lòng nhập mã sản phẩm' ),
                    // Validator.isEditIDProduct('#masp',function () {
                    //     return document.querySelector('#index').value;
                    // },'Mã sản phẩm trùng lặp với mã khác'),
                    Validator.isRequired('#tensanpham','Vui lòng nhập tên sản phẩm'),
                    Validator.isRequired('#giatien', 'Vui lòng nhập giá tiền'),
                    Validator.isRequired('#soluong',' Vui lòng nhập số lượng'),
                    Validator.isRequired('#dungtich',' Vui lòng nhập dung tích'),
                    Validator.isRequired('#congdung','Vui lòng nhập công dụng'),
                    Validator.isRequired('#thanhphan','Vui lòng nhập những thành phần'),
                ],
                onSubmit: function () {

                    let sanpham = new SanPham(MaSP,TenSP,HinhAnh,LoaiSP,SoLuong,DungTich,GiaBan,ThanhPhan,CongDung);
                    let chitietSP= new ChiTietSP(LoaiSP,CongDung,ThanhPhan);
                    localStorage.setItem('DSSP',JSON.stringify(listDSSP));
                    localStorage.setItem('DSLoaiSP',JSON.stringify(listDSLoaiSP));
                    render();
                    clear();


                }
            });

        }

    }

}

function changeSP(){
    if (confirm('Bạn có muốn cập nhập sản phẩm này không?')) {
        let index = document.getElementById('index').value;
        let event = document.getElementById('hinhanh').value;
        let HinhAnh = fileInpToTextInp(event);
        listDSSP[index] = {
            MaSP: document.getElementById('masp').value,
            TenSP: document.getElementById('tensanpham').value,
            HinhAnh: HinhAnh,
            LoaiSP: document.getElementById('phanloai').value,
            SoLuong: document.getElementById('soluong').value,
            DonViTinh: document.getElementById('dungtich').value,
            GiaBan: document.getElementById('giatien').value,
            CongDung: document.getElementById('congdung').value,
            ThanhPhan: document.getElementById('thanhphan').value
        }
        localStorage.setItem('DSSP',JSON.stringify(listDSSP));
        localStorage.setItem('DSLoaiSP',JSON.stringify(listDSLoaiSP));
        render();
        clear();
    }
}
function search() {
    let key = document.getElementById('selectSearch').value
    let nameSearch;
    let valueSearchInput = document.getElementById('search').value;
    if (key == 'TenSP') {
        nameSearch = listDSSP.filter(value => {
            return value.TenSP.toUpperCase().includes(valueSearchInput.toUpperCase());
        });
    } else if (key == 'MaSP') {
        nameSearch = listDSSP.filter(value => {
            return value.MaSP.toUpperCase().includes(valueSearchInput.toUpperCase());
        });
    } else if (key == 'LoaiSP') {
        nameSearch = listDSSP.filter(value=>{
            return value.LoaiSP.toUpperCase().includes(valueSearchInput.toUpperCase());
        });
    }
    let table=`<tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Phân loại</th>
            <th>Số lượng</th>
            <th>Dung tích</th>
            <th>Giá tiền</th>
            <th>Tác vụ</th>
        </tr>
    `
    var i;
    for ( i=0; i < nameSearch.length ;i++) {
        console.log(nameSearch[i]);
        table += `<tr>
            <td>${i+1}</td>
            <td>${nameSearch [i].MaSP}</td>
            <td>${nameSearch [i].TenSP}</td>
            <td><img src="${fileInpToTextInp(nameSearch[i].HinhAnh)}" width="50px" height="50px"> </td>
            <td>${nameSearch [i].LoaiSP}</td>
            <td>${nameSearch [i].SoLuong}</td>
            <td>${nameSearch [i].DonViTinh}</td>
            <td>${new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(nameSearch[i].GiaBan)
        }</td>
            <td>
                <a href="#form-id"><i class="fa-solid fa-pen-to-square" onclick="showSP('${nameSearch[i].MaSP}')" style="cursor: pointer;"></i></a>
                <i class="fa-solid fa-xmark" onclick="removeSP('${nameSearch[i].MaSP}')" style="cursor: pointer;"></i>
            </td>
        </tr>
    `
    }
    document.getElementById('myTable').innerHTML = table;

}







