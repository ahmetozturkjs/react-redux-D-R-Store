import React from "react";
import Logo from "../logo.svg";

function Header() {
  return (
    <div className="divHeader">
      <div style={{ borderBottom: "solid 1px silver" }} className="row">
        <div className="col d-flex align-items-center justify-content-center my-3">
          <div style={{ display: "block" }} className="d-flex  uldivleft">
            <li>
              <a href="">Hediye Kartı</a>
            </li>
            <li>
              <a href="">Keşfet</a>
            </li>
            <li>
              <a href="">Markalar</a>
            </li>
            <li>
              <a href="">Yayınevleri</a>
            </li>
            <li>
              <a href="">Yazarlar</a>
            </li>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div style={{ display: "block" }} className="d-flex  uldivright">
            <li>
              <a href="">
                <i
                  style={{ color: "red" }}
                  className="fa-solid fa-pencil fs-4 mx-2"
                ></i>
                <span className="uldivrightspan">Mağaza Etkinlikleri</span>
              </a>
            </li>
            <span className="spanayrac"></span>
            <li>
              <a href="">
                <i
                  style={{ color: "blue" }}
                  className="fa-solid fa-location-dot fs-4 mx-2"
                ></i>
                <span className="uldivrightspan">Mağazalar</span>{" "}
              </a>
            </li>
            <span className="spanayrac"></span>
            <li>
              <a href="">
                <i
                  style={{ color: "yellow" }}
                  className="fa-solid fa-store fs-4 mx-2"
                ></i>
                <span className="uldivrightspan">Sipariş Takip</span>
              </a>
            </li>
            <span className="spanayrac"></span>
            <li>
              <a href="">
                <i
                  style={{ color: "pink" }}
                  className="fa-brands fa-jedi-order fs-4 mx-2"
                ></i>
                <span className="uldivrightspan">+90 (850) 266 3737</span>{" "}
              </a>
            </li>
            <span className="spanayrac"></span>
            <li className="d-flex align-items-center justify-content-center">
              <a href="">
                <i
                  style={{ color: "green" }}
                  className="fa-brands fa-whatsapp fs-4 mx-2"
                ></i>
                <span className="uldivrightspan">Whatsapp</span>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="row d-flex ">
        <div className="col-3 d-flex justify-content-center align-items-center  py-2">
          <img src={Logo} style={{width:"5rem"}} alt="" srcSet="" />
        </div>
        <div className="divInput  col-4 d-flex align-items-center">
          <div className="border row d-flex justify-content-between py-2" style={{width:"100%"}}>
            <div className="col-11">
            <i className="fa-solid fa-magnifying-glass fs-5 text-black-50 me-2"></i>
            <input
              className="input"
              style={{width:"93%"}}
              placeholder="Kitap,Elektronik,Oyuncak,Kırtasiyede ürün,kategori ara..."
              type="text"
            />
            </div>
            
          </div>
          <div  className="col-1">
            <button style={{height:"2.5rem"}} className="bg-primary text-white py- px-3">ARA</button>
            </div>
        </div>
        <div className="col-5 uldivright2 d-flex align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <li className="mx-2">
              <a  href="">Favori Listem</a>
            </li>
            <li className="mx-2">
              <a href="">Kampanyalar</a>
            </li>
            <li className="mx-2">
            <a href="">Giriş Yap<i className="fa-solid fa-caret-down ms-2"></i></a>
            </li>

            <li className="mx-2">
              <a href="">Sepetim<i className="fa-solid fa-basket-shopping ms-2 fs-6 text-primary"></i></a>
            </li>
          </div>
        </div>
      </div>
      <div className="row bigmenu">
        <div className="col-9 d-flex justify-content-center ">
            <div className="d-flex align-items-center">
                <span className="spanayrac2"></span>
                <li><a href="#">KİTAP</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">YURT DIŞINDAN KİTAP</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">SINAV HAZIRLIK</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">ELEKTRONİK</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">HOBİ-OYUNCAK</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">KIRTASİYE</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">ELEKTRİKLİ EV ALETLERİ</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">MÜZİK</a></li>
                <span className="spanayrac2"></span>
                <li><a href="#">ÇOCUK KİTAPLARI</a></li>
            </div>
        </div>
        <div className="col-3 d-flex">
            <div className="d-flex">
                <li ><a style={{color:"rgb(255, 212, 0)",fontSize:"12px"}} href="#">ÇOK SATANLAR</a></li>
                <li  className="ms-5"><a style={{color:"rgb(255, 212, 0)"}} href="#">YENİ ÇIKANLAR</a></li>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
