
/* My notice ---------------------------------------------------------------------------------------------------------*/
class note extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      
      <section class="note">
      <div class="note-content">
          <div class="box-text">
          <h2 class="title">
             . Do thiếu hút kinh phí nên quảng cáo có thể gây khó chịu, rất mong các bạn thông cảm!
            <br>. Phim cần ít nhất 30s tải để chạy mượt, phim tải bị kẹt ở 98-99% thì chỉ cần load lại trang là được ngay!  
           <br> . Yêu cầu phim <a href="https://www.facebook.com/Kien4Kadmin">TẠI ĐÂY</a> | Liên hệ với chúng tôi <a href="lien-he.html">TẠI ĐÂY</a> |
          </h2>
          </div>
      </div>

      <div class="ads">

      </div>

      
</section>
      `;
    }
  }
customElements.define('note-component', note);

  /* ads1 ---------------------------------------------------------------------------------------------------------*/
class ads1 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <section class="ads1">

    </section>
      `;
    }
  }
  customElements.define('ads1-component', ads1);

   /* ads2 ---------------------------------------------------------------------------------------------------------*/
class ads2 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <section class="ads2">

    </section>
      `;
    }
  }
  customElements.define('ads2-component', ads2);

/* My Header ---------------------------------------------------------------------------------------------------------*/
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
      
        <!--Logo------------------------->
        <a href="index.html" class="logo">
        <img src="img/taiphim4k.png" class="oppp">
            Phim<span>4K</span>
        </a>
        <!--Menu------------------------->
        <nav>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="menu">
            <li><a href="index.html">Trang Chủ</a></li>
            <li><a href="phim-le.html">Phim Lẻ</a></li>
            <li><a href="phim-bo.html">Phim Bộ</a></li>
            <li><a href="kho-phim.html">Kho Phim</a></li>
            <li><a href="top-phim.html">Top Phim</a></li>
        </ul>
        </nav>
        
       

    </header>
    `;
  }
}
customElements.define('header-component', Header);

let menuicon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menuicon.classList.remove('bx-x');
    menu.classList.remove('active');
}

/* LL Popular --------------------------------------------------------------------------------------------------------------*/
class popular1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popular" id="">
               
                
        <!--Conent Silde----------------------->
        <div class="popular-content swiper">
            <div class="swiper-wrapper">
                
                <!--Phimbox 1------------------>
                <div class="swiper-slide">
                    <div class="head-box">
                        <a href="a83.html">
                        <img src="img/little-witch-acadimia.jpg" 
                        alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Học Viện Phù Thủy Nhỏ</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 2------------------>
                <div class="swiper-slide">
                    <div class="head-box">
                        <a href="a68.html">
                        <img src="img/ninja-rua-mutant-mayhem.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Ninja Rùa: Hỗn loạn tuổi dậy thì</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 3------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                        <a href="a38.html">
                        <img src="img/MV5BMTYyOTk3OTQzM15BMl5BanBnXkFtZTcwMjU4NDYyNA@@._V1_.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Cuộc Chiến Mùa Hè</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 4------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                        <a href="a2.html">
                        <img src="img/309732R1.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Spider Man: Across The Spider Verse</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 5------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a11.html">
                        <img src="img/gravity-fall.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Thị Trấn Gravity Fall</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 6------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a37.html">
                        <img src="img/a37.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 7-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a71.html">
                        <img src="img/a71.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Burn the Witch</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 8-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a19.html">
                        <img src="img/a19.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Vampire Hunter D: Bloodlust</h2></div></a>
                    </div>
                </div>
  
  
                <!--Phimbox 9-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a76.html">
                        <img src="img/rikka.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 9-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a39.html">
                        <img src="img/a39.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Ernest và Celestine</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 10-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a63.html">
                        <img src="img/Bayonetta_Bloody_Fate_poster.png" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Bayonetta: Số Phận Đẫm Máu</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 11-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a79.html">
                        <img src="img/Promare_Key_Visual.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Giao Thức Promare</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 12-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a81.html">
                        <img src="img/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Josee: Khi Nàng Thơ Yêu</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 13-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a69.html">
                        <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div></a>
                    </div>
                </div>
  
                <!--Phimbox 14-------------------->
                <div class="swiper-slide">
                    <div class="head-box">
                    <a href="a47.html">
                        <img src="img/season-1.jpg" alt="" class="img">
                        <div class="box-text">
                            <h2 class="title">Castlevania: Lâu Đài Ma Cà Rồng</h2></div></a>
                    </div>
                </div>
  
            </div>
              
        </div>
    </section>
      `;
    }
  } 
customElements.define('popular-component', popular1);

/* LL Popular Phone --------------------------------------------------------------------------------------------------------------*/
class popular3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popularphone" id="">
               
                
      <!--Conent Silde----------------------->
      <div class="popularphone-content swiper">
          <div class="swiper-wrapper">
              
          <!--Phimbox 1------------------>
          <div class="swiper-slide">
              <div class="head-box">
                  <a href="a83.html">
                  <img src="img/little-witch-acadimia.jpg" 
                  alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Học Viện Phù Thủy Nhỏ</h2></div></a>
              </div>
          </div>

          <!--Phimbox 2------------------>
          <div class="swiper-slide">
              <div class="head-box">
                  <a href="a68.html">
                  <img src="img/ninja-rua-mutant-mayhem.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Ninja Rùa: Hỗn loạn tuổi dậy thì</h2></div></a>
              </div>
          </div>

          <!--Phimbox 3------------------->
          <div class="swiper-slide">
              <div class="head-box">
                  <a href="a38.html">
                  <img src="img/MV5BMTYyOTk3OTQzM15BMl5BanBnXkFtZTcwMjU4NDYyNA@@._V1_.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Cuộc Chiến Mùa Hè</h2></div></a>
              </div>
          </div>

          <!--Phimbox 4------------------->
          <div class="swiper-slide">
              <div class="head-box">
                  <a href="a2.html">
                  <img src="img/309732R1.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Spider Man: Across The Spider Verse</h2></div></a>
              </div>
          </div>

          <!--Phimbox 5------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a11.html">
                  <img src="img/gravity-fall.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Thị Trấn Gravity Fall</h2></div></a>
              </div>
          </div>

          <!--Phimbox 6------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a37.html">
                  <img src="img/a37.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
              </div>
          </div>

          <!--Phimbox 7-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a71.html">
                  <img src="img/a71.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Burn the Witch</h2></div></a>
              </div>
          </div>

          <!--Phimbox 8-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a19.html">
                  <img src="img/a19.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Vampire Hunter D: Bloodlust</h2></div></a>
              </div>
          </div>


          <!--Phimbox 9-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a76.html">
                  <img src="img/rikka.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2></div></a>
              </div>
          </div>

          <!--Phimbox 9-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a39.html">
                  <img src="img/a39.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Ernest và Celestine</h2></div></a>
              </div>
          </div>

          <!--Phimbox 10-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a63.html">
                  <img src="img/Bayonetta_Bloody_Fate_poster.png" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Bayonetta: Số Phận Đẫm Máu</h2></div></a>
              </div>
          </div>

          <!--Phimbox 11-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a79.html">
                  <img src="img/Promare_Key_Visual.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Giao Thức Promare</h2></div></a>
              </div>
          </div>

          <!--Phimbox 12-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a81.html">
                  <img src="img/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Josee: Khi Nàng Thơ Yêu</h2></div></a>
              </div>
          </div>

          <!--Phimbox 13-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a69.html">
                  <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div></a>
              </div>
          </div>

          <!--Phimbox 14-------------------->
          <div class="swiper-slide">
              <div class="head-box">
              <a href="a47.html">
                  <img src="img/season-1.jpg" alt="" class="img">
                  <div class="box-text">
                      <h2 class="title">Castlevania: Lâu Đài Ma Cà Rồng</h2></div></a>
              </div>
          </div>

          </div>
            
      </div>
  </section>
      `;
    }
  } 
customElements.define('popularphone-component', popular3);

/* LL Popular2 --------------------------------------------------------------------------------------------------------------*/
class popular2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popular2" id="">
               
      <div class="pp2">
      
      <!--Conent Silde----------------------->
      <div class="popular-content2 swiper">
          <div class="swiper-wrapper">

              <!--Phimbox 3------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="a100.html">
                      <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/30/jujutsu-kaisen-season-2-shibuya-arc.jpeg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Chú Thuật Hồi Chiến Mùa 2</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 7-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="a84.html">
                      <img src="https://jambareeqi.files.wordpress.com/2018/01/lwa-enchant.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Học Viện Phù Thủy: Cuộc Diễu Hành Đầy Mê Hoặc</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 4------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="a62.html">
                      <img src="https://images1.resources.foxtel.com.au/store1/mount1/FBO/2019/I@100676_L.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Những Chú Chim Giận Dữ Phần 2</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 2------------------>
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="a75.html">
                      <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/05/game4v-belle-2.jpeg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Belle: Rồng và Công Chúa Tàn Nhang</h2></div></a>
                  </div>
              </div>


              <!--Phimbox 5------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="a14.html">
                      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F780A71F1F76A6E2D73EDB1E39B286215E1034613B9DDCC0E99C8D9ECCBE33AD/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Gia Đình Nhà Cáo | Ngài Cáo Tuyệt Vời</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 6------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="a37.html">
                      <img src="https://images7.alphacoders.com/817/817794.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
                  </div>
              </div>

              

              <!--Phimbox 7-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="a20.html">
                      <img src="https://images.thedirect.com/media/article_full/dungeons-and-dragons-honor-among-thieves-cast-characters.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Ngục Tối và Rồng: Danh Dự Của Kẻ Trộm</h2></div></a>
                  </div>
              </div>
              
          </div>
          
      </div>
      
      <today-component></today-component>

  </section>
      `;
    }
  } 
customElements.define('popular2-component', popular2);

/* Today --------------------------------------------------------------------------------------------------------------*/
class today extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!---Today-->
                <div class="today">
                    <div class="heading">
                        <a href="#"><i class='bx bx-question-mark'></i><span>Hôm nay xem gì</span><i class='bx bx-question-mark'></i></a>
                        </div>


                <div class="today-content">
               
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="a11.html">
                        <div class="box-img">
                        <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Gravity Fall</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Thị Trấn Bí Ẩn</h2></div>
                    </div>


                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a67.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/4c4f5700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Good Will Hunting</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chàng Will Tốt Bụng</h2></div>
                </div> 

                       
              <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a73.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Howl Moving Castle</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div>
                </div>
               
                <!--box2------------------------------------------>
                <div class="movie-box">
                    <a href="a15.html">
                        <div class="box-img">
                        <img src="img/a15.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Pacific Rim</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Siêu Đại Chiến</h2></div>
                    </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a78.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Paprika</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Giấc Mơ</h2></div>
                </div>

                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="a107.html">
                        <div class="box-img">
                        <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img">
                    
                        <div class="top-text">
                            <h2 class="title3">Mùa 3</h2></div>
                    </div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Castlevania</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                    </div>
                   
                
                

            </div>
      `;
    }
  } 
customElements.define('today-component', today);

/* Moi Cap Nhap --------------------------------------------------------------------------------------------------------------*/
class newm extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimmoi" id="">
      <!--Heading-->
      <div class="phimmoi1">
      
          
      <!--Phim Moi Sub Content---------------------------------->
      <div class="moiphim">
      
          <div class="heading">
          <a href="#"><i class='bx bx-timer'></i><span>Phim mới cập nhập</span></a>
          </div>
      <div class="phimmoi-content">
          
      <!--box7--------------------------------------------->
      <div class="movie-box">
          <a href="a79.html">
              <div class="box-img">
              <img src="img/Promare_Key_Visual.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Promare</h2></div>
              <div class="low-text">
                  <h2 class="title2">Giao Thức Promare</h2></div>
          </div>

          <!--box7--------------------------------------------->
          <div class="movie-box">
              <a href="a68.html">
                  <div class="box-img">
                  <img src="img/ninja-rua-mutant-mayhem.jpg" alt="" class="img"></div>
              </a>
                  <div class="box-text">
                      <h2 class="title">Ninja Rùa</h2></div>
                  <div class="low-text">
                      <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
              </div> 

              <!--box7--------------------------------------------->
              <div class="movie-box">
                  <a href="a63.html">
                      <div class="box-img">
                      <img src="img/Bayonetta_Bloody_Fate_poster.png" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Bayonetta</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Blood Fate</h2></div>
                  </div> 

                  <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a48.html">
                    <div class="box-img">
                    <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Dragon Age</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Absolution</h2></div>
                </div>

                      <!--box7--------------------------------------------->
                      <div class="movie-box">
                          <a href="a36.html">
                              <div class="box-img">
                              <img src="img/a36.jpg" alt="" class="img"></div>
                          </a>
                              <div class="box-text">
                                  <h2 class="title">The Boy, The Mole</h2></div>
                              <div class="low-text">
                                  <h2 class="title2">The Fox and The Horse</h2></div>
                          </div>

                          <!--box5-------------------------------------------->
                          <div class="movie-box">
                              <a href="a26.html">
                                  <div class="box-img">
                                  <img src="img/a26.jpg" alt="" class="img"></div>
                              </a>
                                  <div class="box-text">
                                      <h2 class="title">Heart of Stone</h2></div>
                                  <div class="low-text">
                                      <h2 class="title2">Trái Tim Sắt Đá</h2></div>
                              </div>
              
                          <!--box6-------------------------------------------->
                          <div class="movie-box">
                              <a href="a27.html">
                                  <div class="box-img">
                                  <img src="img/mảiio.jpg" alt="" class="img"></div>
                              </a>
                                  <div class="box-text">
                                      <h2 class="title">Super Mario Bros</h2></div>
                                  <div class="low-text">
                                      <h2 class="title2">Anh em Mario</h2></div>
                              </div>

                              <!--box6-------------------------------------------->
                              <div class="movie-box">
                              <a href="a8.html">
                                  <div class="box-img">
                                  <img src="img/adventure-time.jpg" alt="" class="img"></div>
                              </a>
                                  <div class="box-text">
                                      <h2 class="title">Adventure Time</h2></div>
                                  <div class="low-text">
                                      <h2 class="title2">Giờ Phiêu Lưu</h2></div>
                              </div>

                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="a71.html">
                        <div class="box-img">
                        <img src="img/a71.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Burn The Witch</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                    </div>

                    <!--box7--------------------------------------------->
                    <div class="movie-box">
                        <a href="a45.html">
                            <div class="box-img">
                            <img src="img/Warcraft_Teaser_Poster.jpg" alt="" class="img"></div>
                        </a>
                            <div class="box-text">
                                <h2 class="title">Warcraft</h2></div>
                            <div class="low-text">
                                <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                        </div>

      
      
      
      
  </div>
  </div>


  <!--Top Phim-------------------------------------------------->
  <topphim-component></topphim-component>

  </div>

  
  </section>
      `;
    }
  } 
customElements.define('newm-component', newm);

/* Void1 --------------------------------------------------------------------------------------------------------------*/
class voidbox extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="void" id="">
               
            <!--Conent Silde----------------------->
            <div class="void-content swiper">
                <div class="swiper-wrapper">
                    
      
                    <!--Phimbox 2------------------>
                    <div class="swiper-slide">
                        <div class="head-box">
                            <a href="#">
                            <img src="img/scale (2).jpg"
                             alt="" class="img">
                            <div class="box-text">
                                <h2 class="title">Nhà Cú Mèo</h2></div>
                                <div class="low-text">
                                    <h2 class="title2">Đang cập nhật</h2></div>
                            </a>
                        </div>
                    </div>
      


            </div>      
            </div>
        </section>  
      `;
    }
  } 
customElements.define('voidbox-component', voidbox);

/* Random-1 --------------------------------------------------------------------------------------------------------------*/
class random1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="resultS" id="">
        <!--heading-->    
        <div class="heading">
            <a href="#"><i class='bx bx-dice-6'></i><span>Đề xuất cho bạn</span></a>
            </div>
        
        <!--Random Content----------------------> 
            <div class="result"> 
        
                <div class="random1"></div>
                <div class="random2"></div>
                <div class="random3"></div> 
                <div class="random4"></div>
                <div class="random5"></div>
                <div class="random6"></div>
       
                
            </div>
    </section>
      `;
    }
  } 
customElements.define('random1-component', random1);

/* Random-2 --------------------------------------------------------------------------------------------------------------*/
class random2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="row3" id="">
        <!--heading-->    
        <div class="heading">
            <a href="#"><i class='bx bx-dice-6'></i><span>Đề xuất cho bạn</span></a>
            </div>
        <!--Random Content----------------------> 
            <div class="result"> 
        
                <div class="random1"></div>
                <div class="random2"></div>
                <div class="random3"></div> 
                <div class="random4"></div>
                <div class="random5"></div>
                <div class="random6"></div>              
                
            </div>
    </section>
      `;
    }
  } 
customElements.define('random2-component', random2);

/* Random-4 --------------------------------------------------------------------------------------------------------------*/
class random4 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="row4" id="">
        <!--heading-->    
        <div class="heading">
            <a href="#"><i class='bx bx-dice-6'></i><span>Bạn đang tìm...</span></a>
            </div>
        <!--Random Content----------------------> 
            <div class="result"> 
        
                <div class="random1"></div>
                <div class="random2"></div>
                <div class="random3"></div> 
                <div class="random4"></div>
                <div class="random5"></div>
                <div class="random6"></div>              
                
            </div>
    </section>
      `;
    }
  } 
customElements.define('random4-component', random4);

/* Phim le --------------------------------------------------------------------------------------------------------------*/
class phimle extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimle" id="">
      <!--Heading-->
      <div class="heading">
          <a href="#"><i class='bx bx-movie-play'></i><span>Phim Lẻ</span></a>
          <a href="phim-le.html"class="more">Xem thêm</a>
          </div>
          
      
          <!--Phim le le Content---------------------------------->
          <div class="phimle-content swiper">
              <div class="swiper-wrapper">
      
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a2.html">
              <div class="box-img">
              <img src="img/309732R1.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Spider Man</h2></div>
              <div class="low-text">
                  <h2 class="title2">Across the spider verse</h2></div>
          </div>
      </div>

          <!--box2------------------------------------------>
          <div class="swiper-slide">
          <div class="movie-box">
                <a href="a46.html">
                    <div class="box-img">
                    <img src="img/a46.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ponyo</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                </div>
      </div>

          <!--box3-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
                <a href="a80.html">
                    <div class="box-img">
                    <img src="img/91XY1nLj1XL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Cô Gái Ngoại Tộc</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Girl From the Other Side</h2></div>
                </div>
      </div>

          <!--box4-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
                <a href="a78.html">
                    <div class="box-img">
                    <img src="img/paprika.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Paprika</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Giấc Mơ</h2></div>
                </div>
      </div>

          <!--box5-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a25.html">
              <div class="box-img">
              <img src="img/Akira.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Akira</h2></div>
              <div class="low-text">
                  <h2 class="title2">-Siêu Phẩm-</h2></div>
          </div>
      </div>

          <!--box6--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
                <a href="a84.html">
                    <div class="box-img">
                    <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cuộc Diễu Hành Mê Hoặc</h2></div>
                </div>
      </div>

       <!--box7--------------------------------------------->
       <div class="swiper-slide">
       <div class="movie-box">
       <a href="a60.html">
           <div class="box-img">
           <img src="img/a60.jpg" alt="" class="img"></div>
       </a>
           <div class="box-text">
               <h2 class="title">Kung Fu Panda 2</h2></div>
           <div class="low-text">
               <h2 class="title2">Gấu Trúc KungFu 2</h2></div>
       </div> 
      </div>

          <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a62.html">
              <div class="box-img">
              <img src="img/a62.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Angry Birds 2</h2></div>
              <div class="low-text">
                  <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
          </div>
      </div>

      <!--box8--------------------------------------------->
      <div class="swiper-slide">
      <div class="movie-box">
      <a href="a20.html">
          <div class="box-img">
          <img src="img/Honor Among Thieves.jpg" alt="" class="img"></div>
      </a>
          <div class="box-text">
              <h2 class="title">Dungeon & Dragon</h2></div>
          <div class="low-text">
              <h2 class="title2">Danh Dự Của Kẻ Trộm</h2></div>
      </div>
          </div>

          <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a67.html">
              <div class="box-img">
              <img src="img/a67.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Good Will Hunting</h2></div>
              <div class="low-text">
                  <h2 class="title2">Chàng Will Tốt Bụng</h2></div>
          </div> 
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a65.html">
              <div class="box-img">
              <img src="img/The_Hitman_Bodyguard_VN_poster.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Vệ Sĩ Sát Thủ</h2></div>
              <div class="low-text">
                  <h2 class="title2">The Hitman's Bodyguard</h2></div>
          </div> 
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a66.html">
              <div class="box-img">
              <img src="img/super-bad.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">SuperBad</h2></div>
              <div class="low-text">
                  <h2 class="title2">Siêu Tệ Hại</h2></div>
          </div> 
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a73.html">
              <div class="box-img">
              <img src="img/howl-moving.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Howl Moving Castle</h2></div>
              <div class="low-text">
                  <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div>
          </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a74.html">
              <div class="box-img">
              <img src="img/one-more-time-2023.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">One More Time</h2></div>
              <div class="low-text">
                  <h2 class="title2">Sống Lại Tuổi 18</h2></div>
          </div>
              </div>

                  <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a75.html">
              <div class="box-img">
              <img src="img/belle.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Belle</h2></div>
              <div class="low-text">
                  <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
          </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="a24.html">
              <div class="box-img">
              <img src="img/Princess_Mononoke.webp" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Prince Mononoke</h2></div>
              <div class="low-text">
                  <h2 class="title2">Công Chúa Mononoke</h2></div>
          </div>
              </div>

              <!--box8--------------------------------------------->
              <div class="swiper-slide">
              <div class="movie-box">
                    <a href="a15.html">
                        <div class="box-img">
                        <img src="img/a15.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Pacific Rim</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Siêu Đại Chiến</h2></div>
                    </div>
                  </div>


      </div>    
      
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
      
  </section>
      `;
    }
  } 
customElements.define('phimle-component', phimle);

/* Phim le --------------------------------------------------------------------------------------------------------------*/
class phimlephone extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimle2" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-movie-play'></i><span>Phim Lẻ</span></a>
            <a href="/OPT/phimle.html"class="more">Xem thêm</a>
            </div>
            
        
            <!--Phim le le Content---------------------------------->
            <div class="phimle2-content swiper">
                <div class="swiper-wrapper">
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a2.html">
                <div class="box-img">
                <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_nguoi-nhen-2023.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Spider Man</h2></div>
                <div class="low-text">
                    <h2 class="title2">Across the spider verse</h2></div>
            </div>
        </div>

            <!--box2------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a6.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Monsters vs Aliens</h2></div>
                <div class="low-text">
                    <h2 class="title2">(2009)</h2></div>
            </div>
        </div>

            <!--box3-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a25.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Akira</h2></div>
                <div class="low-text">
                    <h2 class="title2">Siêu phẩm Anime</h2></div>
            </div>
        </div>

            <!--box4-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a9.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Knives out</h2></div>
                <div class="low-text">
                    <h2 class="title2">Kẻ đâm lén</h2></div>
            </div>
        </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a12.html">
                <div class="box-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Angry birds</h2></div>
                <div class="low-text">
                    <h2 class="title2">Những chú chim giận dữ</h2></div>
            </div>
        </div>

            <!--box6--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a24.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Mononoke</h2></div>
                <div class="low-text">
                    <h2 class="title2">Công chúa Mononoke</h2></div>
            </div>
        </div>

         <!--box7--------------------------------------------->
         <div class="swiper-slide">
         <div class="movie-box">
            <a href="a88.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Chicken Run</h2></div>
                <div class="low-text">
                    <h2 class="title2">Phi Đội Gà Bay</h2></div>
            </div>
        </div>

            <!--box8--------------------------------------------->
            <div class="swiper-slide">
        <div class="movie-box">
            <a href="a89.html">
                <div class="box-img">
                <img src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Porco_Rosso_poster.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Porco Rosso</h2></div>
                <div class="low-text">
                    <h2 class="title2">Chú Heo Màu Đỏ</h2></div>
            </div>
        </div>

        <!--box8--------------------------------------------->
        <div class="swiper-slide">
            <div class="movie-box">
                <a href="a32.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Big Hero 6</h2></div>
                    <div class="low-text">
                        <h2 class="title2">6 Đại Anh Hùng</h2></div>
                </div>
            </div>

            <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a27.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Super Mario Bros</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Anh em Mario</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a40.html">
                        <div class="box-img">
                        <img src="/img/justice league/doom/1.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Justice League</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Doom</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a19.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Vampire Hunter D</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Bloodlust</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a45.html">
                        <div class="box-img">
                        <img src="https://i.pinimg.com/originals/d0/82/84/d08284cf9e6232b9641ac5ee2539e1c7.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Warcraft</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a46.html">
                        <div class="box-img">
                        <img src="https://www.themoviedb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Ponyo</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                    </div>
                </div>

                    <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="a75.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/f2/Ryu_to_Sobakasu_no_Hime_poster.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Belle</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
                    </div>
                </div>


        </div>    
        
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimlephone-component', phimlephone);

/* Phim bo --------------------------------------------------------------------------------------------------------------*/
class phimbo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimbo" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-film'></i><span>Phim Bộ</span></a>
            <a href="phim-bo.html"class="more">Xem thêm</a>
            </div>
        <!--Phim Moi Sub Content---------------------------------->
        
        <div class="phimbo-content swiper">
            
            <div class="swiper-wrapper">
            
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a3.html">
                    <div class="box-img">
                    <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>    
        </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <div class="movie-box">
        <a href="a8.html">
            <div class="box-img">
            <img src="img/adventure-time.jpg" alt="" class="img"></div>
        </a>
            <div class="box-text">
                <h2 class="title">Adventure Time</h2></div>
            <div class="low-text">
                <h2 class="title2">Giờ Phiêu Lưu</h2></div>
        </div>
        </div>


             <!--box7--------------------------------------------->
             <div class="swiper-slide">
             <div class="movie-box">
                <a href="a11.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thị Trấn Bí Ẩn</h2></div>
                </div>
            </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a37.html">
                <div class="box-img">
                <img src="img/a37.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Miss Kobayashi's</h2></div>
                <div class="low-text">
                    <h2 class="title2">Dragon Maid</h2></div>
            </div> 
               </div>

            <!--box3------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a102.html">
                    <div class="box-img">
                    <img src="img/a111111.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>  
        </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a47.html">
                    <div class="box-img">
                    <img src="img/season-1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>
            </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a44.html">
                <div class="box-img">
                <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Overlord</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
            </div>
        </div>
            
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a106.html">
                    <div class="box-img">
                    <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>
            </div>
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a48.html">
                <div class="box-img">
                <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Dragon Age</h2></div>
                <div class="low-text">
                    <h2 class="title2">Absolution</h2></div>
            </div>
                </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a57.html">
                <div class="box-img">
                <img src="img/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Devil May Cry</h2></div>
                <div class="low-text">
                    <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
            </div> 
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a104.html">
                <div class="box-img">
                <img src="img/Overlord_II_Season_2.webp" alt="" class="img">
            
                <div class="top-text">
                    <h2 class="title3">Mùa 2</h2></div>
            </div>
            </a>
                <div class="box-text">
                    <h2 class="title">Overlord</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lạc vào thế giới game</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a69.html">
                <div class="box-img">
                <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                <div class="low-text">
                    <h2 class="title2">Gotōbun no Hanayome</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a70.html">
                <div class="box-img">
                <img src="img/a70.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Witch Craft Works</h2></div>
                <div class="low-text">
                    <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a71.html">
                    <div class="box-img">
                    <img src="img/a71.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a76.html">
                <div class="box-img">
                <img src="img/rikka.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">TV Series</h2></div>
                <div class="low-text">
                    <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a83.html">
                    <div class="box-img">
                    <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a108.html">
                <div class="box-img">
                <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img">
            
            
                <div class="top-text">
                    <h2 class="title3">Mùa 4</h2></div>
            
            </div>
            </a>
            <div class="box-text">
                <h2 class="title">Castlevania</h2></div>
            <div class="low-text">
                <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a87.html">
                <div class="box-img">
                <img src="img/Hensuki_characters.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Hensuki</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lọ Lem Quần Lót</h2></div>
            </div>
                </div>
    
       
       
       
        </div>
    
        </div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimbo-component', phimbo);

/* Phim bo phone--------------------------------------------------------------------------------------------------------------*/
class phimbophone extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimbo2" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-film'></i><span>Phim Bộ</span></a>
            <a href="/OPT/phimbo/phimbo.html"class="more">Xem thêm</a>
            </div>
        <!--Phim Moi Sub Content---------------------------------->
        
        <div class="phimbo2-content swiper">
            
            <div class="swiper-wrapper">
            
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a3.html">
                    <div class="box-img">
                    <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>    
        </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <div class="movie-box">
        <a href="a8.html">
            <div class="box-img">
            <img src="img/adventure-time.jpg" alt="" class="img"></div>
        </a>
            <div class="box-text">
                <h2 class="title">Adventure Time</h2></div>
            <div class="low-text">
                <h2 class="title2">Giờ Phiêu Lưu</h2></div>
        </div>
        </div>


             <!--box7--------------------------------------------->
             <div class="swiper-slide">
             <div class="movie-box">
                <a href="a11.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thị Trấn Bí Ẩn</h2></div>
                </div>
            </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a37.html">
                <div class="box-img">
                <img src="img/a37.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Miss Kobayashi's</h2></div>
                <div class="low-text">
                    <h2 class="title2">Dragon Maid</h2></div>
            </div> 
               </div>

            <!--box3------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a102.html">
                    <div class="box-img">
                    <img src="img/a111111.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>  
        </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a47.html">
                    <div class="box-img">
                    <img src="img/season-1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>
            </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a44.html">
                <div class="box-img">
                <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Overlord</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
            </div>
        </div>
            
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a106.html">
                    <div class="box-img">
                    <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>
            </div>
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a48.html">
                <div class="box-img">
                <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Dragon Age</h2></div>
                <div class="low-text">
                    <h2 class="title2">Absolution</h2></div>
            </div>
                </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a57.html">
                <div class="box-img">
                <img src="img/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Devil May Cry</h2></div>
                <div class="low-text">
                    <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
            </div> 
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a104.html">
                <div class="box-img">
                <img src="img/Overlord_II_Season_2.webp" alt="" class="img">
            
                <div class="top-text">
                    <h2 class="title3">Mùa 2</h2></div>
            </div>
            </a>
                <div class="box-text">
                    <h2 class="title">Overlord</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lạc vào thế giới game</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a69.html">
                <div class="box-img">
                <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                <div class="low-text">
                    <h2 class="title2">Gotōbun no Hanayome</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a70.html">
                <div class="box-img">
                <img src="img/a70.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Witch Craft Works</h2></div>
                <div class="low-text">
                    <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a71.html">
                    <div class="box-img">
                    <img src="img/a71.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a76.html">
                <div class="box-img">
                <img src="img/rikka.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">TV Series</h2></div>
                <div class="low-text">
                    <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="a83.html">
                    <div class="box-img">
                    <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a108.html">
                <div class="box-img">
                <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img">
            
            
                <div class="top-text">
                    <h2 class="title3">Mùa 4</h2></div>
            
            </div>
            </a>
            <div class="box-text">
                <h2 class="title">Castlevania</h2></div>
            <div class="low-text">
                <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
            </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="a87.html">
                <div class="box-img">
                <img src="img/Hensuki_characters.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Hensuki</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lọ Lem Quần Lót</h2></div>
            </div>
                </div>
    
       
       
       
        </div>
    
        </div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimbophone-component', phimbophone);

/* Void2 --------------------------------------------------------------------------------------------------------------*/
class voidbox2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="void2" id="">
               
            <!--Conent Silde----------------------->
            <div class="void2-content swiper">
                <div class="swiper-wrapper">
                    
      
                    <!--Phimbox 2------------------>
                    <div class="swiper-slide">
                        <div class="head-box">
                            <a href="#">
                            <img src="https://theotakubox.com/cdn/shop/articles/62a9a34b6abff87c70e77467_shield-hero-season-2-new-visual-scaled-e1644450107151_copy_1_1200x1200.jpg?v=1665934300"
                             alt="" class="img">
                            <div class="box-text">
                                <h2 class="title">Sự Trỗi Dậy Của Anh Hùng Khiên</h2></div>
                                <div class="low-text">
                                    <h2 class="title2">Sắp Có Mùa Mới</h2></div>
                            </a>
                        </div>
                    </div>
      


            </div>      
            </div>
        </section>  
      `;
    }
  } 
customElements.define('voidbox2-component', voidbox2);

/* My Footer --------------------------------------------------------------------------------------------------------------*/
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class=footer>
    <a href="index.html" class="logo">
    <img src="img/taiphim4k.png" class="oppp">
        Phim<span>4K</span>
    </a>
    <nav>
        
        <ul class="foot">

            <li><a href="https://www.facebook.com/Kien4Kadmin"><i class='bx bxl-facebook-circle'></i></a></li>
            <li><a href="https://www.tiktok.com/@4kmoviesense"><i class='bx bxl-tiktok' ></i></a></li>

        </ul>
    </nav>

        <div class="box-text">
            <h2 class="title">
               | Yêu cầu phim <a href="https://www.facebook.com/Kien4Kadmin">TẠI ĐÂY</a> | Liên hệ với chúng tôi <a href="lien-he.html">TẠI ĐÂY</a> |
            </h2>
            </div>

        

</section>
    `;
  }
}
customElements.define('footer-component', Footer);

/* Top Phim  ---------------------------------------------------------------------------------------------------------*/
class topphim extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="top">
      <div class="heading">
      <a href="#"><i class='bx bx-meteor'></i><span>Top Trending</span></a>
      </div>


  <div class="top-content">
  <!--box3------------------------------------------>
  
  <div class="list-box">
      <a href="a2.html">
          <div class="box-img">
          <img src="img/spiderverse2.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Spider Man</h2>
          
              <h2 class="title2">Across The Spider Verse</h2></div>
          </a>
      </div> 

      <!--box7--------------------------------------------->
            <div class="list-box">
                <a href="a100.html"> 
                    <div class="box-img">
                    <img src="img/138022.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen: Chú Thuật Hồi Chiến</h2>
                    
                        <h2 class="title2">Mùa 2</h2></div></a>
                </div>

      <!--box3------------------------------------------>
      <div class="list-box">
      <a href="a73.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Howl Moving Castle</h2>
          
              <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div></a>
      </div>

      <!--box7--------------------------------------------->
            <div class="list-box">
                <a href="a83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2>
                    
                        <h2 class="title2">Little Witch Academia</h2></div>
                        </a>
                </div>

                <!--box7--------------------------------------------->
                <div class="list-box">
                    <a href="a68.html">
                        <div class="box-img">
                        <img src="https://s198.imacdn.com/ff/2023/09/01/346eda80c0c1c96c_b7a995db50578395_54254169358078523.jpg" alt="" class="img"></div>
                    
                        <div class="box-text">
                            <h2 class="title">Ninja Rùa</h2>
                        
                            <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                            </a>
                    </div> 

      
      
  <div class="gif">

  </div>
      



      
      

    </div>
    </div>
      `;
    }
  }
customElements.define('topphim-component', topphim);

/* Top Phim 2  ---------------------------------------------------------------------------------------------------------*/
class topphim2 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="relate">
      <div class="heading">
          <span>Trending</span>
      </div>

  <div class="relate-content">
  <!--Season--------------------------------------------------->
  <div class="relate-list">

  <!--box3------------------------------------------>
  
  <div class="list-box">
      <a href="a2.html">
          <div class="box-img">
          <img src="img/spiderverse2.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Spider Man</h2>
          
              <h2 class="title2">Across The Spider Verse</h2></div>
          </a>
      </div> 

      <!--box7--------------------------------------------->
            <div class="list-box">
                <a href="a100.html"> 
                    <div class="box-img">
                    <img src="img/138022.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen: Chú Thuật Hồi Chiến</h2>
                    
                        <h2 class="title2">Mùa 2</h2></div></a>
                </div>

      <!--box3------------------------------------------>
      <div class="list-box">
      <a href="a73.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Howl Moving Castle</h2>
          
              <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div></a>
      </div>

      <!--box7--------------------------------------------->
            <div class="list-box">
                <a href="a83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2>
                    
                        <h2 class="title2">Little Witch Academia</h2></div>
                        </a>
                </div>

                <!--box7--------------------------------------------->
                <div class="list-box">
                    <a href="a68.html">
                        <div class="box-img">
                        <img src="https://s198.imacdn.com/ff/2023/09/01/346eda80c0c1c96c_b7a995db50578395_54254169358078523.jpg" alt="" class="img"></div>
                    
                        <div class="box-text">
                            <h2 class="title">Ninja Rùa</h2>
                        
                            <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                            </a>
                    </div> 



  </div>

  <div class="gif2">
      <iframe src="" autoplay="1" loop="true" allow="autoplay" frameborder="1" allowfullscreen></iframe>
    </div>

</div>

  </div>
      `;
    }
  }
customElements.define('topphim2-component', topphim2);

/* Phim le Number --------------------------------------------------------------------------------------------*/
class pnumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
        <!---->
        <div class="pagenumber-content swiper">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                <li><a href="phim-le.html">Trang 1</a></li>
                </div>

                <div class="swiper-slide">
                    <li><a href="phim-le-2.html">Trang 2</a></li>
                    </div>

                <div class="swiper-slide">
                    <li><a href="phim-le-3.html">Trang 3</a></li>
                    </div>

                
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        </nav>
    `;
  }
}
customElements.define('phimlenumber-component', pnumber);

/* Kho Phim kho Number ------------------------------------------------------------------------------------------------*/
class anumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
                <!---->
                <div class="pagenumber-content swiper">
                    <div class="swiper-wrapper">
        
                        <div class="swiper-slide">
                        <li><a href="kho-phim.html">Trang 1</a></li>
                        </div>
        
                        <div class="swiper-slide">
                            <li><a href="kho-phim-2.html">Trang 2</a></li>
                            </div>

                            <div class="swiper-slide">
                                <li><a href="kho-phim-3.html">Trang 3</a></li>
                                </div>
        
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </nav>
    `;
  }
}
customElements.define('khophimnumber-component', anumber);

/* Phim Bo Number -------------------------------------------------------------------------------------------------------*/
class xnumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
                <!---->
                <div class="pagenumber-content swiper">
                    <div class="swiper-wrapper">
        
                        <div class="swiper-slide">
                        <li><a href="phim-bo.html">Trang 1</a></li>
                        </div>
        
                        <div class="swiper-slide">
                            <li><a href="phim-bo-2.html">Trang 2</a></li>
                            </div>

                            <div class="swiper-slide">
                                <li><a href="phim-bo-3.html">Trang 3</a></li>
                                </div>
        
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </nav>
    `;
  }
}
customElements.define('phimbonumber-component', xnumber);

/* active next page */
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nextpage li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

/* Gif jhon Facebook ---------------------------------------------*/
class xgif extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="trailer">
      <iframe src="" autoplay="1" loop="true" allow="autoplay" frameborder="1" allowfullscreen></iframe>
    </div>
      `;
    }
  }
  customElements.define('gif-component', xgif);












/* Jujusu Kaisen Season ----------------*/
class JKSeason extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="a59.html">
            <div class="box-img">
            <img src="img/a59.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
            
                <h2 class="title2">Movie 0</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
    <li class="movie-box">
        <a href="a1.html">
            <div class="box-img">
            <img src="img/Jujutsu_Kaisen_s1.webp" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a100.html">
                <div class="box-img">
                <img src="img/138022.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 2</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
    `;
  }
}
customElements.define('jkseason-component', JKSeason);


/* Jujusu Kaisen Season Movie ----------------*/
class JK0Season extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">
  
      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="#">
              <div class="box-img">
              <img src="img/a59.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
              
                  <h2 class="title2">Movie 0</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
      <li class="movie-box">
          <a href="a1.html">
              <div class="box-img">
              <img src="img/Jujutsu_Kaisen_s1.webp" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Chú Thuật Hồi Chiến</h2>
              
                  <h2 class="title2">Mùa 1</h2></div>
              </a>
          </li> 
      </div>
  
  
          <!--box2------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
              <a href="a100.html">
                  <div class="box-img">
                  <img src="img/138022.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Chú Thuật Hồi Chiến</h2>
                  
                      <h2 class="title2">Mùa 2</h2></div>
                  </a>
              </li> 
          </div>
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  }
  customElements.define('jk0season-component', JK0Season);

/* Jujusukaisen s1 video --*/
class JKvideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a59.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMWJkN2UzODItMGFjNC00MTZiLThlNWYtODQ5Y2QzNjcyZjg4XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
                
                    <h2 class="title2">Movie 0</h2></div>
                </a>
            </li> 
        </div>
    
            <!--box1------------------------------------------>
            <div class="swiper-slide">
        <li class="movie-box">
            <a href="#season1">
                <div class="box-img">
                <img src="img/Jujutsu_Kaisen_s1.webp" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 1</h2></div>
                </a>
            </li> 
        </div>
    
    
            <!--box2------------------------------------------>
            <div class="swiper-slide">
            <li class="movie-box">
                <a href="a100.html">
                    <div class="box-img">
                    <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/02/14/6-2314.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Chú Thuật Hồi Chiến</h2>
                    
                        <h2 class="title2">Mùa 2</h2></div>
                    </a>
                </li> 
            </div>
    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>        
        <!--Video List--------------------------------------------------------------------------------------->
      
      <div class="video-list" id="season1">
          <div class="heading">
              <span>Danh sách tập</span>
          </div>
        <!--list tap Content---------------------------------->
        <div class="list-content">
            
            <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid active">
                <iframe src="https://short.ink/tNA54mFul"></iframe>
                <h3 class="vid-title">Tập 1: Ryomen Sukuna</h3>
    
                <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNWEwNWNhODYtOWZhYS00NGMzLWJhZTQtZTVhOGUyMzU3NWFhXkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/tjrxFOQLb"></iframe>
                <h3 class="vid-title">Tập 2: Vì bản thân tôi</h3>
    
                <div class="box-img">
                    <img src="img/0_kzlh7D6-IsD3SMCy-1024x576.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/sXVLxGHL56"></iframe>
                <h3 class="vid-title">Tập 3: Cô gái thép</h3>
    
                <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjg5MDRhYmMtMGUyMi00ZjBiLThkZjEtYjg3NjQ0YWJmMTMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/Q_abl8qdm"></iframe>
                <h3 class="vid-title">Tập 4: Chú thai đáng sợ</h3>
    
                <div class="box-img">
                    <img src="img/images.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/RYPeSUotg"></iframe>
                <h3 class="vid-title">Tập 5: Chú thai đáng sợ 2</h3>
    
                <div class="box-img">
                    <img src="img/Jujutsu-Kaisen-05.mkv0055-1024x576.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/VO8ne0RAG"></iframe>
                <h3 class="vid-title">Tập 6: Sau cơn mưa</h3>
    
                <div class="box-img">
                    <img src="img/images (1).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/hacN6sNmf"></iframe>
                <h3 class="vid-title">Tập 7: Đột kích</h3>
    
                <div class="box-img">
                    <img src="img/images (2).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/71mm983ZA"></iframe>
                <h3 class="vid-title">Tập 8: Nhàm chán</h3>
    
                <div class="box-img">
                    <img src="img/MV5BMDY3MzExZmUtOWJiMy00MTY2LWExYWUtNDhhNzdkNmQ1NjNmXkEyXkFqcGdeQXVyMTA2MDk1OTE4._V1_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/psjdtZRxy"></iframe>
                <h3 class="vid-title">Tập 9: Cá con và Hình phạt ngược</h3>
    
                <div class="box-img">
                    <img src="img/p19249972_e_h8_aa.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/fmPD9Y3sY"></iframe>
                <h3 class="vid-title">Tập 10: Vô vị Chuyển biến</h3>
    
                <div class="box-img">
                    <img src="img/MV5BMjMwYWViZTgtNThhMi00NDBhLWJkZjAtMDFiYmU0MzRmYTMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/mHZJp8m0O"></iframe>
                <h3 class="vid-title">Tập 11: Nhỏ nhen và Ngu ngốc</h3>
    
                <div class="box-img">
                    <img src="img/MV5BNDRiNzFlNTAtNTlhMi00ZWRkLTkwMGItM2ZlZjlmYTRkZDY3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/OrkPtMG1H"></iframe>
                <h3 class="vid-title">Tập 12: Gửi đến cậu ngày nào đó</h3>
    
                <div class="box-img">
                    <img src="img/FireShot-Webpage-Screenshot-1017-Netflix-www.netflix.com_.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/e7w6T_UB1"></iframe>
                <h3 class="vid-title">Tập 13: Hẹn gặp ngày mai</h3>
    
                <div class="box-img">
                    <img src="img/sssssa.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 13</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/OJyG8DG7y"></iframe>
                <h3 class="vid-title">Tập 14: Sự kiện giao lưu giữa các trường chị em Kyoto - Trận đấu nhóm 0 -</h3>
    
                <div class="box-img">
                    <img src="img/Kyoto_Jujutsu_Students_Anime.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 14</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/3VRT1wP7p"></iframe>
                <h3 class="vid-title">Tập 15: Sự kiện giao lưu giữa các trường chị em Kyoto - Trận đấu nhóm 1 -</h3>
    
                <div class="box-img">
                    <img src="img/72d50608-c82e-4570-80a2-d9672d1515bf.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 15</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/ta2znhCDP"></iframe>
                <h3 class="vid-title">Tập 16: Sự kiện giao lưu giữa các trường chị em Kyoto - Trận đấu nhóm 2 -</h3>
    
                <div class="box-img">
                    <img src="img/sa23.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 16</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/36u8aLxDsg"></iframe>
                <h3 class="vid-title">Tập 17: Sự kiện giao lưu giữa các trường chị em Kyoto - Trận đấu nhóm 3 -</h3>
    
                <div class="box-img">
                    <img src="img/main-qimg-91408aacfd944691df9e91c8b68bad2f-lq.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 17</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/XusmtU7bn"></iframe>
                <h3 class="vid-title">Tập 18: Hiền nhân</h3>
    
                <div class="box-img">
                    <img src="img/images (3).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 18</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/Es0Lb1DpXW"></iframe>
                <h3 class="vid-title">Tập 19: Hắc thiểm</h3>
    
                <div class="box-img">
                    <img src="img/9795054f-1d3e-4f86-83ac-c16cd38a535f.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 19</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/2Mbq03QQy"></iframe>
                <h3 class="vid-title">Tập 20: Ngoài tiêu chuẩn</h3>
    
                <div class="box-img">
                    <img src="img/Use-this-to-resize-images-87.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 20</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/bXURsxK_m"></iframe>
                <h3 class="vid-title">Tập 21: Sân vận động Chú thuật Koshien</h3>
    
                <div class="box-img">
                    <img src="img/Use-this-to-resize-images-77.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 21</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/bPDvlLlQf"></iframe>
                <h3 class="vid-title">Tập 22: Nguồn gốc của sự vâng lời mù quáng</h3>
    
                <div class="box-img">
                    <img src="img/jujutsu-kaisen-episode-22-1101.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 22</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/AHOf8DWPL"></iframe>
                <h3 class="vid-title">Tập 23: Nguồn gốc của sự vâng lời mù quáng 2</h3>
    
                <div class="box-img">
                    <img src="img/619f1ec190020fa537a38fcb82e10c33.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 23</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#main-play">
            <div class="vid">
                <iframe src="https://short.ink/qCVQ5L894"></iframe>
                <h3 class="vid-title">Tập 24: Tòng phạm</h3>
    
                <div class="box-img">
                    <img src="img/eee24.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 24</h2></div>
            </div>
        </a>
            
   
                </div>
                </div>
        
</section>  
    `;
  }
}
customElements.define('jkvideo-component', JKvideo);

/* Jujusukaisen s2 video --*/
class JKvideo2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a59.html">
                <div class="box-img">
                <img src="img/a59.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
                
                    <h2 class="title2">Movie 0</h2></div>
                </a>
            </li> 
        </div>
    
            <!--box1------------------------------------------>
            <div class="swiper-slide">
        <li class="movie-box">
            <a href="a1.html">
                <div class="box-img">
                <img src="img/Jujutsu_Kaisen_s1.webp" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 1</h2></div>
                </a>
            </li> 
        </div>
    
    
            <!--box2------------------------------------------>
            <div class="swiper-slide">
            <li class="movie-box">
                <a href="#season2">
                    <div class="box-img">
                    <img src="img/138022.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Chú Thuật Hồi Chiến</h2>
                    
                        <h2 class="title2">Mùa 2</h2></div>
                    </a>
                </li> 
            </div>
    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>        
        <!--Video List--------------------------------------------------------------------------------------->
      
      <div class="video-list" id="season2">
          <div class="heading">
              <span>Danh sách tập</span>
          </div>
        <!--list tap Content---------------------------------->
        <div class="list-content">
            
            <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/LPAeh1RiE"></iframe>
                <h3 class="vid-title">Tập 1: Hoài Ngọc</h3>
    
                <div class="box-img">
                    <img src="img/xjujutsu-kaisen.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/0xB01vBTC"></iframe>
                <h3 class="vid-title">Tập 2: Hoài Ngọc -2-</h3>
    
                <div class="box-img">
                    <img src="img/xjjk-s2-ep-2.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/p2FQZFbLC"></iframe>
                <h3 class="vid-title">Tập 3: Hoài Ngọc -3-</h3>
    
                <div class="box-img">
                    <img src="img/zmaxresdefault (2).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/0zyMB3vGI"></iframe>
                <h3 class="vid-title">Tập 4: Hoài Ngọc -4-</h3>
    
                <div class="box-img">
                    <img src="img/x92972-16906572044350-1920.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/Vwni4Jdzk"></iframe>
                <h3 class="vid-title">Tập 5: Ngọc Chiết</h3>
    
                <div class="box-img">
                    <img src="img/zzmaxresdefault (2).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/gv0Esm4AW"></iframe>
                <h3 class="vid-title">Tập 6: Là kiểu đó</h3>
    
                <div class="box-img">
                    <img src="img/images (8).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>
         
    
                </div>
                </div>
        </section>

      
    `;
  }
}
customElements.define('jkvideo2-component', JKvideo2);







/* Spiderman relate --------------------------------------------------------------------------------------------------------------*/
class spiderrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="a17.html">
              <div class="box-img">
              <img src="img/a17.webp" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="a2.html">
          <div class="box-img">
          <img src="img/spider2.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidermanrelate-component', spiderrelate);

/* Spiderman video2 ------*/
class spidervideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="a17.html">
              <div class="box-img">
              <img src="img/a17.webp" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="#">
          <div class="box-img">
          <img src="img/spiderverse2.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidervideo2-component', spidervideo2);

/* Spiderman video1 ------*/
class spidervideo1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="#">
              <div class="box-img">
              <img src="img/a17.webp" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="a2.html">
          <div class="box-img">
          <img src="img/spiderverse2.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidervideo1-component', spidervideo1);














/* Mob Psycho 100 Season --------------------------------------------------------------------------------------------------------------*/
class mobrelate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="a3.html">
            <div class="box-img">
            <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="a101.html">
            <div class="box-img">
            <img src="img/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a102.html">
                <div class="box-img">
                <img src="img/a111111.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
    `;
  }
} 
customElements.define('mobseason-component', mobrelate);


/* Mob 1000 s1 video --*/
class mobvideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
        
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="#season1">
            <div class="box-img">
            <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="a101.html">
            <div class="box-img">
            <img src="img/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a102.html">
                <div class="box-img">
                <img src="img/a111111.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>
        
        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season1">
      <div class="heading">
          <span>Danh sách tập Mùa 1</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/r1FCjWxGy"></iframe>
                <h3 class="vid-title">Tập 1: Nhà ngoại cảm tự xưng-Reigen Arataka~và Mob~.</h3>
    
                <div class="box-img">
                    <img src="https://img1.ak.crunchyroll.com/i/spire2-tmb/ecd47b8e3e21518feb62501131ec334d1468260589_full.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/VCC4EWSeg"></iframe>
                <h3 class="vid-title">Tập 2: Những hoài nghi của tuổi trẻ - Nhóm Thần Giao Cách Cảm Xuất Hiện!</h3>
    
                <div class="box-img">
                    <img src="img/e2.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/NLX1eU6Kp"></iframe>
                <h3 class="vid-title">Tập 3: Lời mời đến buổi họp mặt ~Đơn giản là tôi muốn được nổi tiếng~</h3>
    
                <div class="box-img">
                    <img src="img/e3.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/vsnxsmSY-"></iframe>
                <h3 class="vid-title">Tập 4: Sự Kiện Chỉ Dành Cho Lũ Ngốc ~ Đồng Phạm ~</h3>
    
                <div class="box-img">
                    <img src="img/t32.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/zMQ_-3iWX"></iframe>
                <h3 class="vid-title">Tập 5: OCHIMUSHA ~Linh lực và tôi~</h3>
    
                <div class="box-img">
                    <img src="img/w2.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/NriiqBIA5"></iframe>
                <h3 class="vid-title">Tập 6: Bất đồng ~Hãy hòa vào nhau~</h3>
    
                <div class="box-img">
                    <img src="img/w11.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/2VEzHLmo_"></iframe>
                <h3 class="vid-title">Tập 7: Hơn nữa ~Tôi đã có mất mát~</h3>
    
                <div class="box-img">
                    <img src="img/episode-image-400x225.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/h9CfQYvEn"></iframe>
                <h3 class="vid-title">Tập 8: Người anh trai cúi đầu ~sát ý~</h3>
    
                <div class="box-img">
                    <img src="img/fce58d94992c2efe760e72c2df760b88.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/Su8qL6zai"></iframe>
                <h3 class="vid-title">Tập 9: -Claw- 7 thân phận.</h3>
    
                <div class="box-img">
                    <img src="img/a1cde9bae8898b6075ab0bbb975064c31546473316_full.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/RbIe8Ek8U"></iframe>
                <h3 class="vid-title">Tập 10: ~Tà ác~ Kẻ chủ mưu</h3>
    
                <div class="box-img">
                    <img src="img/MobPsycho3.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/oppLochQp"></iframe>
                <h3 class="vid-title">Tập 11: Sư phụ ~Người lãnh đạo~</h3>
    
                <div class="box-img">
                    <img src="img/images (4).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/XDObX3P0b3"></iframe>
                <h3 class="vid-title">Tập 12: Mob và Reigen</h3>
    
                <div class="box-img">
                    <img src="img/maxresdefault.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>

 
            </div>
            </div>
           

    </section>
  
    `;
  }
}
customElements.define('mobvideo-component', mobvideo);


/* Mob 1000 s2 video --*/
class mobvideo2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="a3.html">
            <div class="box-img">
            <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="#season2">
            <div class="box-img">
            <img src="img/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="a102.html">
                <div class="box-img">
                <img src="img/a111111.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>
        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season2">
      <div class="heading">
          <span>Danh sách tập Mùa 2</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/ahvyzAtCxO"></iframe>
                <h3 class="vid-title">Tập 1: Bị xé toạc ~Kẻ rình mò~</h3>
    
                <div class="box-img">
                    <img src="img/zzzzz.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/2RpVUYctFC"></iframe>
                <h3 class="vid-title">Tập 2: Truyền thuyết đô thị ~Gặp phải tin đồn~</h3>
    
                <div class="box-img">
                    <img src="img/zzzx.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/EKnGRumPf"></iframe>
                <h3 class="vid-title">Tập 3: Mối nguy hiểm nối tiếp mối nguy hiểm ~Sự thoái hóa~</h3>
    
                <div class="box-img">
                    <img src="img/zzzxmob-psycho-100-episode-3-2-e1548332700792.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/uGtIhU37H"></iframe>
                <h3 class="vid-title">Tập 4: Bên trong ~Ác linh~</h3>
    
                <div class="box-img">
                    <img src="img/zzxx.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/hDjLt99gq"></iframe>
                <h3 class="vid-title">Tập 5: Bất hòa ~Lựa chọn~</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzzzzzzzzzzz.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/ZsJIA2TQ9"></iframe>
                <h3 class="vid-title">Tập 6: Nghèo, Cô đơn.</h3>
    
                <div class="box-img">
                    <img src="img/za.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/PG-yuBXaK"></iframe>
                <h3 class="vid-title">Tập 7: Bị dồn vào đường cùng ~Danh tính thực sự~</h3>
    
                <div class="box-img">
                    <img src="img/zc.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/iKU1mCndx"></iframe>
                <h3 class="vid-title">Tập 8: Ngay cả sau đó ~Tiếp tục tiến về phía trước~</h3>
    
                <div class="box-img">
                    <img src="img/zz1.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/5hlRVNw6gr"></iframe>
                <h3 class="vid-title">Tập 9: Hãy cho tôi thấy những gì bạn có ~Band Together~</h3>
    
                <div class="box-img">
                    <img src="img/zq.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/gEuNXN52g"></iframe>
                <h3 class="vid-title">Tập 10: Va chạm ~Loại nguồn~</h3>
    
                <div class="box-img">
                    <img src="img/zxc.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/b3VYFA_rE"></iframe>
                <h3 class="vid-title">Tập 11: Hướng dẫn ~Cảm biến tâm linh~</h3>
    
                <div class="box-img">
                    <img src="img/zssss.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/FTRHG70DJ"></iframe>
                <h3 class="vid-title">Tập 12: Cuộc chiến phục hồi xã hội ~Tình bạn~</h3>
    
                <div class="box-img">
                    <img src="img/zzzz213213.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/_r_qNooKV"></iframe>
                <h3 class="vid-title">Tập 13: Đấu trùm ~Ánh sáng cuối cùng~</h3>
    
                <div class="box-img">
                    <img src="img/zzzx23211.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 13</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/hn81z-R9K"></iframe>
                <h3 class="vid-title">Tập 14: Specials</h3>
    
                <div class="box-img">
                    <img src="img/zjjkka.png" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Specials</h2></div>
            </div>
        </a>
        
            </div>
            </div>
           

    </section>
  
      
    `;
  }
}
customElements.define('mobvideo2-component', mobvideo2);

/* Mob 1000 s3 video --*/
class mobvideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="a3.html">
            <div class="box-img">
            <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="a101.html">
            <div class="box-img">
            <img src="img/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="#season3">
                <div class="box-img">
                <img src="img/a111111.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>

      
      
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season3">
      <div class="heading">
          <span>Danh sách tập Mùa 3</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/_gE9vCbdx"></iframe>
                <h3 class="vid-title">Tập 1: Tương lai ~Con đường sự nghiệp~</h3>
    
                <div class="box-img">
                    <img src="img/mob-psycho-100-iii-feature.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/kDJ-h2yAS"></iframe>
                <h3 class="vid-title">Tập 2: Thợ săn Yokai Amakusa Haruaki xuất hiện!</h3>
    
                <div class="box-img">
                    <img src="img/2xzbassag.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/dhjhK5RJC"></iframe>
                <h3 class="vid-title">Tập 3: Bị cuốn đi ~100%~</h3>
    
                <div class="box-img">
                    <img src="img/mob-psycho-100-iii-feature.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/iZTLyS-GH"></iframe>
                <h3 class="vid-title">Tập 4: Cây thần 1 ~Người sáng lập xuất hiện~</h3>
    
                <div class="box-img">
                    <img src="img/70c3a-16668107194234-1920.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>


        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/594Ciyehh"></iframe>
                <h3 class="vid-title">Tập 5: Cây thần 2 ~Hòa bình~</h3>
    
                <div class="box-img">
                    <img src="img/mob-psycho-100.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/CxRlguKg1"></iframe>
                <h3 class="vid-title">Tập 6: Cây thần 3 ~Lúm đồng tiền~</h3>
    
                <div class="box-img">
                    <img src="img/Screenshot-7129.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/-lljjYnHi"></iframe>
                <h3 class="vid-title">Tập 7: Truyền tải 1 ~Kỳ nghỉ đông~</h3>
    
                <div class="box-img">
                    <img src="img/Mobgoesonroadtrip-e1668623647573.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/kCF4wVRQF"></iframe>
                <h3 class="vid-title">Tập 8: Truyền tải 2 ~Gặp gỡ điều chưa biết~</h3>
    
                <div class="box-img">
                    <img src="img/mob-3-ep8-2.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/YYncHzm6b"></iframe>
                <h3 class="vid-title">Tập 9: Mob 1 ~Di chuyển~</h3>
    
                <div class="box-img">
                    <img src="img/images (42).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

         <!--box1------------------------------------------>
         <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/PHnUv0O8F"></iframe>
                <h3 class="vid-title">Tập 10: Mob 2 ~Đối thủ~</h3>
    
                <div class="box-img">
                    <img src="img/Mob-Psycho-100-III-10-C-1024x576-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/IyPgcoHHf"></iframe>
                <h3 class="vid-title">Tập 11: Mob 3 ~Chấn thương~</h3>
    
                <div class="box-img">
                    <img src="img/Mob-Psycho-100-season-3-episode-11.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/tnQcTShdX"></iframe>
                <h3 class="vid-title">Tập 12: Lời tỏ tình ~Tương lai~</h3>
    
                <div class="box-img">
                    <img src="img/43340-16716512333604.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>
        
            </div>
            </div>
           

    </section>
        
      `;
    }
  }
customElements.define('mobvideo3-component', mobvideo3);


/* One Punch Man Season --------------------------------------------------------------------------------------------------------------*/
class onepunchSeason extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
                <h2 class="title">
                    <i class='bx bx-list-ul'></i><span>Mùa</span>
                <!--CCCC-->
                    <div class="season-list">
                        <div class="swiper-wrapper">
                            
                            <div class="swiper-slide">
                            <li><a href="/Xemphim/onepunchman/s1/1.html">Season 1</a></li></div>

                            <div class="swiper-slide">
                                <li><a href="/Xemphim/onepunchman/s2/1.html">Season 2</a></li></div>     
                    
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    </div>
                </h2>

            </section>
    `;
  }
} 
customElements.define('onepunchseason-component', onepunchSeason);





/* Puss IN Boot Relate --------------------------------------------------------------------------------------------------------------*/
class pussrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="a5.html">
            <div class="box-img">
            <img src="https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-products-digital.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Mèo Đi Hia</h2>
            
                <h2 class="title2">Điều ước cuối cùng</h2></div>
            </a>
        </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
 
      `;
    }
  } 
customElements.define('pussseason-component', pussrelate);


/* Puss IN Boot Relate --------------------------------------------------------------------------------------------------------------*/
class pussvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="1-puss2.html">
            <div class="box-img">
            <img src="https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-products-digital.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Mèo Đi Hia</h2>
            
                <h2 class="title2">Điều ước cuối cùng</h2></div>
            </a>
        </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
 
      `;
    }
  } 
customElements.define('pussvideo-component', pussvideo);



  /* KungFU Panda Relate --------------------------------------------------------------------------------------------------------------*/
class kungfurelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="a7.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Kung_fu_panda_poster.jpg/220px-Kung_fu_panda_poster.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda</h2>
          
              <h2 class="title2">Phần 1</h2></div>
              </a>
      </li>
    </div>


    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="a60.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda 2</h2>
          
              <h2 class="title2">Phần 2</h2></div>
              </a>
      </li>
    </div>

    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
                <a href="a61.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Kung Fu Panda 3</h2>
                    
                        <h2 class="title2">Phần 3</h2></div>
                        </a>
                </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
      `;
    }
  } 
  customElements.define('kungfu-component', kungfurelate);


 /* KungFU Panda video 1----------------------------------*/
 class kungfuvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="#">
            <div class="box-img">
            <img src="img/Kung_fu_panda_poster.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda</h2>
            
                <h2 class="title2">Phần 1</h2></div>
                </a>
        </li>
      </div>
  
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="a60.html">
            <div class="box-img">
            <img src="img/a60.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda 2</h2>
            
                <h2 class="title2">Phần 2</h2></div>
                </a>
        </li>
      </div>
  
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                  <a href="a61.html">
                      <div class="box-img">
                      <img src="img/Kung_Fu_Panda_3_vietnam.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Kung Fu Panda 3</h2>
                      
                          <h2 class="title2">Phần 3</h2></div>
                          </a>
                  </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kungfuvideo-component', kungfuvideo);

   /* KungFU Panda video 1----------------------------------*/
 class kungfuvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="a7.html">
            <div class="box-img">
            <img src="img/Kung_fu_panda_poster.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda</h2>
            
                <h2 class="title2">Phần 1</h2></div>
                </a>
        </li>
      </div>
  
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="#">
            <div class="box-img">
            <img src="img/a60.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda 2</h2>
            
                <h2 class="title2">Phần 2</h2></div>
                </a>
        </li>
      </div>
  
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                  <a href="a61.html">
                      <div class="box-img">
                      <img src="img/Kung_Fu_Panda_3_vietnam.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Kung Fu Panda 3</h2>
                      
                          <h2 class="title2">Phần 3</h2></div>
                          </a>
                  </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kungfuvideo2-component', kungfuvideo2);

  /* KungFU Panda video 1----------------------------------*/
 class kungfuvideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="a7.html">
            <div class="box-img">
            <img src="img/Kung_fu_panda_poster.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda</h2>
            
                <h2 class="title2">Phần 1</h2></div>
                </a>
        </li>
      </div>
  
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="a60.html">
            <div class="box-img">
            <img src="img/a60.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Kung Fu Panda 2</h2>
            
                <h2 class="title2">Phần 2</h2></div>
                </a>
        </li>
      </div>
  
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                  <a href="#">
                      <div class="box-img">
                      <img src="img/Kung_Fu_Panda_3_vietnam.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Kung Fu Panda 3</h2>
                      
                          <h2 class="title2">Phần 3</h2></div>
                          </a>
                  </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kungfuvideo3-component', kungfuvideo3);









 /* Angry Relate --------------------------------------------------------------------------------------------------------------*/
 class angryrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="a12.html">
<div class="box-img">
<img src="img/Angry_Birds_2016_film_poster.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds</h2>

  <h2 class="title2">Phần 1</h2></div>
</a>
</li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="a62.html">
<div class="box-img">
<img src="img/a62.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds 2</h2>

  <h2 class="title2">Phần 2</h2></div>
</a>
</li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('angry-component', angryrelate);

  /* angryvideo play --------------------------------------------------------------------------------------------------------------*/
class angryvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="1-angry-bird.html">
<div class="box-img">
<img src="img/Angry_Birds_2016_film_poster.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds</h2>

  <h2 class="title2">Phần 1</h2></div>
</a>
</li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="a62.html">
<div class="box-img">
<img src="img/a62.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds 2</h2>

  <h2 class="title2">Phần 2</h2></div>
</a>
</li>
     
      </div>

      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('angryvideo-component', angryvideo);

  /* angryvideo play --------------------------------------------------------------------------------------------------------------*/
class angryvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="a12.html">
<div class="box-img">
<img src="img/Angry_Birds_2016_film_poster.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds</h2>

  <h2 class="title2">Phần 1</h2></div>
</a>
</li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="#">
<div class="box-img">
<img src="img/a62.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds 2</h2>

  <h2 class="title2">Phần 2</h2></div>
</a>
</li>
     
      </div>

      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('angryvideo2-component', angryvideo2);



 /* ADvernture Relate --------------------------------------------------------------------------------------------------------------*/
 class adventurerelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a8.html">
          <div class="box-img">
          <img src="img/adventure-time.jpg" alt="" class="img"></div>
      
          <div class="box-text">
          <h2 class="title">Adventure Time</h2>
          
              <h2 class="title2">Mùa 1</h2></div>
              </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('adventure-component', adventurerelate);

  /* Adventure SS1 video --*/
class advideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="#">
          <div class="box-img">
          <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
      
          <div class="box-text">
          <h2 class="title">Adventure Time Season1</h2>
          
              <h2 class="title2">Mùa 1</h2></div>
              </a>
      </li>
      </div>
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
     
      <!--Video List--------------------------------------------------------------------------------------->
      <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 1</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid active">
                  <iframe src="https://short.ink/UZx3_XYQdm"></iframe>
                  <h3 class="vid-title">Tập 1: Bữa tiệc xác sống</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống.jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 1</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/jlRrRiODX"></iframe>
                  <h3 class="vid-title">Tập 2: Rắc rối tại Slumpy Space</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (1).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 2</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/chlKbuoAA"></iframe>
                  <h3 class="vid-title">Tập 3: Tù nhân tình yêu</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (2).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 3</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/pLctmNcgy"></iframe>
                  <h3 class="vid-title">Tập 4: Tree Trunk</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (3).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 4</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/hA8JsiNa1"></iframe>
                  <h3 class="vid-title">Tập 5: Enchiridion!</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (4).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 5</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/efVb09_bU"></iframe>
                  <h3 class="vid-title">Tập 6: Jiggler</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (5).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 6</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/ceEoxXW_b"></iframe>
                  <h3 class="vid-title">Tập 7: Anh chàng trái tim Ricardio</h3>
      
                  <div class="box-img">
                      <img src="img/images (5).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 7</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/ieJbFZNOp"></iframe>
                  <h3 class="vid-title">Tập 8: Người của công việc</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (6).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 8</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/NUoWvSE0c"></iframe>
                  <h3 class="vid-title">Tập 9: Hai người tôi yêu</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (20).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 9</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/11okYGc68"></iframe>
                  <h3 class="vid-title">Tập 10: Ký ức ở núi Boom Boom</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (7).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 10</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/u6N_hKLA0"></iframe>
                  <h3 class="vid-title">Tập 11: Phù thủy</h3>
      
                  <div class="box-img">
                      <img src="img/images (6).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 11</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/nfuu3SD6c"></iframe>
                  <h3 class="vid-title">Tập 12: Trục xuất</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (8).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 12</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/Syvy1LpF8"></iframe>
                  <h3 class="vid-title">Tập 13: Thành phố trộm cắp</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (9).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 13</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/XQspDf6gP"></iframe>
                  <h3 class="vid-title">Tập 14: Khu vườn phù thủy</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (10).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 14</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/Glt9-oMWD"></iframe>
                  <h3 class="vid-title">Tập 15: Ý nghĩa sống</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (11).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 15</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/JqqPAl18D"></iframe>
                  <h3 class="vid-title">Tập 16: Nỗi sợ đại dương</h3>
      
                  <div class="box-img">
                      <img src="img/Titlecard_S1E16_oceanoffear.webp" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 16</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/57vztuJ-F"></iframe>
                  <h3 class="vid-title">Tập 17: Khi chuông đám cưới tan chảy</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (12).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 17</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/oMReWETlOU"></iframe>
                  <h3 class="vid-title">Tập 18: Ngục tối</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (13).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 18</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/BhesfRQdW"></iframe>
                  <h3 class="vid-title">Tập 19: Công tước hạt dẻ</h3>
      
                  <div class="box-img">
                      <img src="img/images (7).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 19</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/IEJx37OmlY"></iframe>
                  <h3 class="vid-title">Tập 20: Thành phố quái dị</h3>
      
                  <div class="box-img">
                      <img src="img/Titlecard_S1E20_freakcity.webp" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 20</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/Dld5x6lrY"></iframe>
                  <h3 class="vid-title">Tập 21: Donny</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (14).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 21</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/sl9WEmyUZ"></iframe>
                  <h3 class="vid-title">Tập 22: Tay sai</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (15).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 22</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/yDlR6kdYH"></iframe>
                  <h3 class="vid-title">Tập 23: Giấc mơ ngày mưa</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (16).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 23</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/pCLzZjPJc"></iframe>
                  <h3 class="vid-title">Tập 24: Ngươi đã làm gì?</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (17).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 24</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/VwiN5La4I"></iframe>
                  <h3 class="vid-title">Tập 25: Người hùng của tôi</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (18).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 25</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/mbvhvj1SM"></iframe>
                  <h3 class="vid-title">Tập 26: Quỷ nghiền</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (19).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 26</h2></div>
              </div>
          </a>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('advideo-component', advideo);




 /* Kinout Relate --------------------------------------------------------------------------------------------------------------*/
 class kinoutrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a9.html">
             <div class="box-img">
         <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
        
        <div class="box-text">
          <h2 class="title">Knives out</h2>
                    
         <h2 class="title2">Kẻ Đâm Lén</h2></div>
        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kinoutrelate-component', kinoutrelate);

 /* Kinout Video --------------------------------------------------------------------------------------------------------------*/
 class kinoutvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="#">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Knives out</h2>
                    
                        <h2 class="title2">Kẻ Đâm Lén</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kinoutvideo-component', kinoutvideo);




/* HitmaBodyGuard --------------------------------------------------------------------------------------------------------------*/
class hitmanbodyseaon extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a65.html">
             <div class="box-img">
         <img src="img/The_Hitman_Bodyguard_VN_poster.jpg" alt="" class="img"></div>
        
        <div class="box-text">
          <h2 class="title">Vệ Sĩ Sát Thủ</h2>
                    
         <h2 class="title2">Phần 1</h2></div>
        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('hitmanbodyseaon-component', hitmanbodyseaon);

  /* HitmaBodyGuard --------------------------------------------------------------------------------------------------------------*/
class hitmanbodyvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="#">
             <div class="box-img">
         <img src="img/The_Hitman_Bodyguard_VN_poster.jpg" alt="" class="img"></div>
        
        <div class="box-text">
          <h2 class="title">Vệ Sĩ Sát Thủ</h2>
                    
         <h2 class="title2">Phần 1</h2></div>
        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('hitmanbodyvideo-component', hitmanbodyvideo);





  /* Ma Trận Relate --------------------------------------------------------------------------------------------------------------*/
 class matixrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a10.html">
                    <div class="box-img">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2>
                        <h2 class="title2">Ma Trận</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('matixrelate-component', matixrelate);

/* Ma Trận Relate --------------------------------------------------------------------------------------------------------------*/
class matixvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="1-the-matrix.html">
                    <div class="box-img">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2>
                        <h2 class="title2">Ma Trận</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('matixvideo-component', matixvideo);




  /* Gravityfall Relate --------------------------------------------------------------------------------------------------------------*/
 class gravityfrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a11.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="1-gravity-fall-s2.html">
            <div class="box-img">
            <img src="img/gravity-fall.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('gravityfrelate-component', gravityfrelate);

 /* Gravity Fall 1 video --*/
 class gravityfvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-gravity-fall.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="1-gravity-fall-s2.html">
            <div class="box-img">
            <img src="img/gravity-fall.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 1</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid active">
                  <iframe src="https://short.ink/uKg31mgzm"></iframe>
                  <h3 class="vid-title">Tập 1: Bẫy du lịch</h3>
      
                  <div class="box-img">
                      <img src="img/tw1.jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 1</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/4RBBsPEYC"></iframe>
                  <h3 class="vid-title">Tập 2: Truyền thuyết về Gobblewonker</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (21).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 2</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/LAeE0Y66_"></iframe>
                  <h3 class="vid-title">Tập 3: Thợ săn đầu người</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (22).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 3</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/jAAE8iRVQ"></iframe>
                  <h3 class="vid-title">Tập 4: Bàn tay rung chuyển Mabel</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (23).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 4</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/g6jKcZM24"></iframe>
                  <h3 class="vid-title">Tập 5: Sự bất tiện</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (24).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 5</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/knm6hfTlU"></iframe>
                  <h3 class="vid-title">Tập 6: Dipper vs. Nam tính</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (25).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 6</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/czJlRx7p-"></iframe>
                  <h3 class="vid-title">Tập 7: Nhân bản</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (26).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 7</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/zzE9QHCUe"></iframe>
                  <h3 class="vid-title">Tập 8: Kho báu phi lý</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (27).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 8</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/X2HOf4gh6"></iframe>
                  <h3 class="vid-title">Tập 9: Con lợn du hành thời gian</h3>
      
                  <div class="box-img">
                      <img src="img/WMV5BNjIxZDYzMDgtMDRhYS00MmM0LThiNzYtODY1NWUxMmM2YTJhXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 9</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/v0VvXHKo9"></iframe>
                  <h3 class="vid-title">Tập 10: Chiến binh</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (28).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 10</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/o7r9KJCSL"></iframe>
                  <h3 class="vid-title">Tập 11: Tiểu hùng</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (29).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 11</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/Z3VEvYznB"></iframe>
                  <h3 class="vid-title">Tập 12: Summerween</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (30).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 12</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/G9ZWavls2"></iframe>
                  <h3 class="vid-title">Tập 13: Boss Mabel</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (31).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 13</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/rX2FpUHha"></iframe>
                  <h3 class="vid-title">Tập 14: Hố không đáy</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (32).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 14</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/rqW8_595V"></iframe>
                  <h3 class="vid-title">Tập 15: Tận cùng đại dương</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (33).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 15</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/3BOy7KGp_"></iframe>
                  <h3 class="vid-title">Tập 16: Thảm Điểm</h3>
      
                  <div class="box-img">
                      <img src="img/S1e16_body_swapped.webp" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 16</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/-dEeg3zvN"></iframe>
                  <h3 class="vid-title">Tập 17: Boyz</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (34).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 17</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/E-sEQWVf3r"></iframe>
                  <h3 class="vid-title">Tập 18: Vùng tiền sử</h3>
      
                  <div class="box-img">
                      <img src="img/x1080.jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 18</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/AHo8b4Qla"></iframe>
                  <h3 class="vid-title">Tập 19: Dreamscaperers</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (35).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 19</h2></div>
              </div>
          </a>
  
          <!--box1------------------------------------------>
          <a href="#videoplay">
              <div class="vid">
                  <iframe src="https://short.ink/0l2adMVvg"></iframe>
                  <h3 class="vid-title">Tập 20: Gideon trỗi dậy</h3>
      
                  <div class="box-img">
                      <img src="img/tải xuống (36).jpg" alt="" class="img"></div>
      
                  <div class="box-text">
                      <h2 class="box-title">Tập 20</h2></div>
              </div>
          </a>
  
          
              </div>
              </div>
             
  
      </section>
        
      `;
    }
  }
customElements.define('gravityfvideo-component', gravityfvideo);

/* Gravity Fall 2 video --*/
class gravityfvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-gravity-fall.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="1-gravity-fall-s2.html">
            <div class="box-img">
            <img src="img/gravity-fall.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 2</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
      <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/1.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNWYzNGQ5YmItMTYzZi00N2Q4LThkM2EtNzdmMjRlYTZiNTZkXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
            </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/2.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzZkMWQzZWEtMDA0MC00ZGFiLTk4MDItYjBkMjhlMjg3MzllXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/3.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZGNmNWVlOTUtOWE1Ny00ZTQ2LWEyMjMtNzY4NjQ5ZjgyMWNlXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/4.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTUzZmU0NzgtMzY4ZS00ZGMxLWIzNzAtNzJlY2Y2ZjgzOGRhXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/5.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZTFiNDAyMzgtNjAzZi00MWY5LThmYWMtMWYxMTQ3YzA1M2Q5XkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/6.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BY2U1Y2VlOWMtMTA4ZS00MDliLWE4YTctNmQzMTQwMmRhZWNjXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/7.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZjdmOWMyMmItNzJhMC00NTIxLWJiMTMtZDQyYzJhZGY1YzBkXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/8.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzgxNWVhNzktZjdiMC00MTk1LTliNWYtMzVmY2VkNTNiOWQyXkEyXkFqcGdeQXVyNzkyODM4NDI@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/9.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BOWMyOWEyNmMtNWY4MC00MjhmLThlZGUtZjkxZGMzNjIxMDk4XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/10.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDkyN2RhNTItMzhhOS00YWZmLWJlOTgtN2NkZWYzZDc0MmIwXkEyXkFqcGdeQXVyNTk3MjY3NDQ@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/11.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BODUzMGY3OGQtOTBiOS00YjQzLWI3MzUtNWRlYmRhOTY3OWI4XkEyXkFqcGdeQXVyMTU0MTM5NTI0._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/12.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDUxZjcwNDUtNjA3ZS00YzU0LTkyOTItN2Y4ZDVhYjBkNDUyXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/13.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMzQ4NDI5YWEtYzY4Mi00OGQwLWJhMGQtNGI5OTJhYmI4MGU5XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 13</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/14.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDFkN2RlNGEtYTE0Yi00MWQwLTg2N2YtN2MyZTliZGZmNDRkXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 14</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/15.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWNlMDdkNmItYWIzYy00MWVkLWJmZDAtMmEyYzE2N2JmMDE2XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
           
            <div class="box-text">
                <h2 class="title">Tập 15</h2></div>
            </a> 
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/16.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMGE3ZWZmZjUtMDQwZi00MDNkLWI3YjktMmJmNWIwODY5MzFjXkEyXkFqcGdeQXVyNzc2ODA0MzE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 16</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/17.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNjFlZDIzMDEtMTVlMy00YThmLWIxMzYtNzIyMDUwODA5MzE3XkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 17</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/18.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNmFhY2QyOTItZjBhZS00ZjlmLWFkZTAtMTc4MjgxNTQ4YjE1XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 18</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/19.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BODczMjZmYjQtODZmNS00MzJlLWJjOGQtMTMyZmYyY2MyMjYyXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 19</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/20.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNTBlZDU3ODItOGJhYy00MjlhLWFjNzgtYWVhY2FiOWQ1MmUwXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 20</h2></div>
            </a>
            </li>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('gravityfvideo2-component', gravityfvideo2);





/* Vampire Hunter D --------------------------------------------------------------------------------------------------------------*/
class hunterdrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a43.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGVmNzNmMjEtZTBjYi00ODExLTkwMWEtMzJjYzk0MTE2YmY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      
            <li class="movie-box">
                <a href="a19.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Bloodlust</h2></div>
                        </a>
                </li>
     
      </div>
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('hunterdrelate-component', hunterdrelate);

    /* Vampire Hunter D Video ------------------------------------------*/
class hunterdvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-vampire-hunter.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGVmNzNmMjEtZTBjYi00ODExLTkwMWEtMzJjYzk0MTE2YmY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      
            <li class="movie-box">
                <a href="1-vampire-hunter-bloodlust.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Bloodlust</h2></div>
                        </a>
                </li>
     
      </div>
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('hunterdvideo-component', hunterdvideo);







/* How to Train Your Dragon --------------------------------------------------------------------------------------------------------------*/
class dragonrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a31.html">
                    <div class="box-img">
                    <img src="img/a31.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2>
                
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('dragonrelate-component', dragonrelate);


/* How to Train Your Dragon --------------------------------------------------------------------------------------------------------------*/
class dragonvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-how-to-train-your-dragon.html">
                    <div class="box-img">
                    <img src="img/a31.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2>
                
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('dragonvideo-component', dragonvideo);






/* Harypoter --------------------------------------------------------------------------------------------------------------*/
class harypoterrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
    <a href="a34.html">
        <div class="box-img">
        <img src="https://malaysubtitle.com/wp-content/uploads/2022/03/Harry-Potter-and-the-Sorcerers-Stone-2001-Malay-Subtitle.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Harry Potter</h2>
            <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
            </a>
    </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('harypoterrelate-component', harypoterrelate);

/* Harypoter --------------------------------------------------------------------------------------------------------------*/
class harypotervideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
    <a href="1-harry-potter-1.html">
        <div class="box-img">
        <img src="https://malaysubtitle.com/wp-content/uploads/2022/03/Harry-Potter-and-the-Sorcerers-Stone-2001-Malay-Subtitle.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Harry Potter</h2>
            <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
            </a>
    </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('harypotervideo-component', harypotervideo);




/* Madgascar season --------------------------------------------------------------------------------------------------------------*/
class madagascar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a35.html">
                    <div class="box-img">
                    <img src="img/a35.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2>
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a51.html">
                    <div class="box-img">
                    <img src="img/a51.jpg" alt="" class="img"></div>
              
                    <div class="box-text">
                        <h2 class="title">Madagascar 2</h2>
                        <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('madagascar-component', madagascar);


/* Madagascar video --------------------------------------------------------------------------------------------------------------*/
class madagascarvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-madagascar.html">
                    <div class="box-img">
                    <img src="img/a35.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2>
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-madagascar-2.html">
                    <div class="box-img">
                    <img src="img/a51.jpg" alt="" class="img"></div>
              
                    <div class="box-text">
                        <h2 class="title">Madagascar 2</h2>
                        <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('madagascarvideo-component', madagascarvideo);











/* Dragon Maid Season relate --------------------------------------------------------------------------------------------------------------*/
class Dmrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="a37.html">
                            <div class="box-img">
                            <img src="img/a37.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="a99.html">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="a98.html">
                                <div class="box-img">
                                <img src="img/Season_2_Teaser_Visual_1.webp" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>


      `;
    }
  } 
  customElements.define('dmrelate-component', Dmrelate);


  
/* DRagon maid s1 video --*/
class dmvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="#season1">
                            <div class="box-img">
                            <img src="img/a37.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="a99.html">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="a98.html">
                                <div class="box-img">
                                <img src="img/Season_2_Teaser_Visual_1.webp" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
    
          <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/Mnhb88wD5"></iframe>
              <h3 class="vid-title">Tập 1: Cô hầu gái mạnh nhất trong lịch sử, Tohru! (Chà, Cô ấy là một con rồng)</h3>
  
              <div class="box-img">
                  <img src="img/zaa.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/oMneZTnxP"></iframe>
              <h3 class="vid-title">Tập 2: Con rồng thứ hai, Kanna! (Chúng tôi hoàn toàn làm hỏng ở đây)</h3>
  
              <div class="box-img">
                  <img src="img/zaa2.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/7RdIVwkgv"></iframe>
              <h3 class="vid-title">Tập 3: Bắt đầu một cuộc sống mới! (Tất nhiên là điều đó không diễn ra tốt đẹp)</h3>
  
              <div class="box-img">
                  <img src="img/zaa3.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/5DFhI6b2C"></iframe>
              <h3 class="vid-title">Tập 4: Kanna đến trường! (Không phải điều cô ấy cần)</h3>
  
              <div class="box-img">
                  <img src="img/zaa4.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/1eaPNtUhq"></iframe>
              <h3 class="vid-title">Tập 5: Bài học thế giới thực của Tohru! (Cô ấy nghĩ rằng cô ấy đã hiểu nó rồi)</h3>
  
              <div class="box-img">
                  <img src="img/za5.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/qNnGHZLyf"></iframe>
              <h3 class="vid-title">Tập 6: Thăm nhà! (Và những ngôi nhà chưa được ghé thăm)</h3>
  
              <div class="box-img">
                  <img src="img/zaa6.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/ghWe7GwBi"></iframe>
              <h3 class="vid-title">Tập 7: Đồ dùng mùa hè! (Thành thật mà nói thì tập Fanservice)</h3>
  
              <div class="box-img">
                  <img src="img/zaa7.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/VP-c7dF36"></iframe>
              <h3 class="vid-title">Tập 8: Rồng mới, Elma! (Cuối cùng cô ấy cũng xuất hiện, phải không?)</h3>
  
              <div class="box-img">
                  <img src="img/zaa8.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/wrAUqd7x8"></iframe>
              <h3 class="vid-title">Tập 9: Lễ hội thể thao! (Không có sự xoắn hay bất cứ điều gì)</h3>
  
              <div class="box-img">
                  <img src="img/zaa9.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/1EcUgROKI"></iframe>
              <h3 class="vid-title">Tập 10: Đội Rồng, lên sân khấu! (Họ có tên nhóm nhạc, Huh)</h3>
  
              <div class="box-img">
                  <img src="img/zaa10.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/onVtrg9be"></iframe>
              <h3 class="vid-title">Tập 11: Cuối Năm, Năm Mới! (Không có Comiket Bit lần này)</h3>
  
              <div class="box-img">
                  <img src="img/zaa11.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/_TtrS6HZf"></iframe>
              <h3 class="vid-title">Tập 12: Cuộc gặp gỡ đầy ấn tượng của Tohru và Kobayashi!</h3>
  
              <div class="box-img">
                  <img src="img/zaa12.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/a4HK35J8w"></iframe>
              <h3 class="vid-title">Tập 13: Hoàng đế của cái chết đã đến!</h3>
  
              <div class="box-img">
                  <img src="img/tải xuống (50).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 13</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/NRdR4VWpD"></iframe>
              <h3 class="vid-title">Special: Lễ tình nhân và sau đó là Suối nước nóng!</h3>
  
              <div class="box-img">
                  <img src="img/dragonmaid_14-1.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 14</h2></div>
          </div>
      </a>
    
    
    </div>
    

</div>    
</section>
        
      `;
    }
}
customElements.define('dmvideo1-component', dmvideo);
  
/* DRagon maid s2 video --*/
class dmvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

        <div class="heading">
            <span>Phim liên quan</span>
        </div>
    
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                          <a href="a37.html">
                              <div class="box-img">
                              <img src="img/a37.jpg" alt="" class="img"></div>
                          
                              <div class="box-text">
                                  <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                              
                                  <h2 class="title2">Mùa 1</h2></div>
                              </a>
                          </li> 
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                          <a href="a99.html">
                              <div class="box-img">
                              <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                          
                              <div class="box-text">
                                  <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                              
                                  <h2 class="title2">Specials</h2></div>
                              </a>
                          </li> 
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                              <a href="#season2">
                                  <div class="box-img">
                                  <img src="img/Season_2_Teaser_Visual_1.webp" alt="" class="img"></div>
                              
                                  <div class="box-text">
                                      <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                  
                                      <h2 class="title2">Mùa 2</h2></div>
                                  </a>
                              </li> 
       
        </div>
  
       
    
        
           
    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
  
          
          
        <!--Video List--------------------------------------------------------------------------------------->
      
      <div class="video-list" id="season2">
          <div class="heading">
              <span>Danh sách tập</span>
          </div>
        
          <!--list tap Content---------------------------------->
        <div class="list-content">

            <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/SG0l6zJPW"></iframe>
                <h3 class="vid-title">Tập 1: Cô rồng mới, Ilulu! (Xin hãy đối xử tốt với cô ấy lần nữa)</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzx.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/c4Vv80IdE"></iframe>
                <h3 class="vid-title">Tập 2: Anh chàng nóng bỏng Kobayashi! (Theo nhiều cách)</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzz1.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/ALh5mrKXp"></iframe>
                <h3 class="vid-title">Tập 3: Hoạt động ngoại khóa (Tất nhiên là không bình thường)</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzz2.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/nIH3LjJ8x"></iframe>
                <h3 class="vid-title">Tập 4: Khi ở Rome, hãy làm như người La Mã làm</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzzzz100006543_KDM0017_bfd19ab6-bb9a-4105-8680-96318515a86c.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/c9aOWA0wv"></iframe>
                <h3 class="vid-title">Tập 5: Cùng Bên Em (Chà, Nếu Chúng Ta Hợp Nhau)</h3>
    
                <div class="box-img">
                    <img src="img/Screenshot-33-1024x576-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/peredRmn_"></iframe>
                <h3 class="vid-title">Tập 6: Những mối quan hệ kỳ lạ (Một Bên Là Rồng)</h3>
    
                <div class="box-img">
                    <img src="img/Screenshot-116-1024x576-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/w0GqvZrat"></iframe>
                <h3 class="vid-title">Tập 7: Common Sense (Mọi người đều không đồng bộ)</h3>
    
                <div class="box-img">
                    <img src="img/images (9).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/KP1g3lzsH"></iframe>
                <h3 class="vid-title">Tập 8: The World's Only (Thêm cụm từ bạn thích vào đây)</h3>
    
                <div class="box-img">
                    <img src="img/Screenshot-327-1024x576-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/bf7Pc8MzJ"></iframe>
                <h3 class="vid-title">Tập 9: Có nhiều lý do đằng sau nó (Nó đầy Elma)</h3>
    
                <div class="box-img">
                    <img src="img/Miss-Kobayashis-Dragon-Maid-Season-2-Episode-9.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/MUWi4bxXI"></iframe>
                <h3 class="vid-title">Tập 10: Kỳ nghỉ hè của Kanna (Phát sóng bằng hai ngôn ngữ!?)</h3>
    
                <div class="box-img">
                    <img src="img/zzzzzzzzzzzzz1111111sa.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/ULPoWKyCu"></iframe>
                <h3 class="vid-title">Tập 11: Ghế cao cấp (Không tính thêm phí)</h3>
    
                <div class="box-img">
                    <img src="img/Screenshot-867-1024x576-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/j2HOVM9VP"></iframe>
                <h3 class="vid-title">Tập 12: Cuộc sống là sự thay đổi không ngừng</h3>
    
                <div class="box-img">
                    <img src="img/1632355995.21826.47928.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/kQvO1QVfx"></iframe>
                <h3 class="vid-title">Tập 13(Special): Sự hiếu khách của người Nhật</h3>
    
                <div class="box-img">
                    <img src="img/images (10).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Special</h2></div>
            </div>
        </a>
      
      
      </div>
      
  
  </div>    
  </section>
    
        
      `;
    }
}
customElements.define('dmvideo2-component', dmvideo2);

  /* DRagon maid special video --*/
  class dmspecial extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="a37.html">
                            <div class="box-img">
                            <img src="img/a37.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="#special">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="a98.html">
                                <div class="box-img">
                                <img src="img/Season_2_Teaser_Visual_1.webp" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>
  
     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="special">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
  
    <!--list tap Content---------------------------------->
    <div class="list-content">
  
  
       <!--box1------------------------------------------>
       <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/pSghPqBGV"></iframe>
              <h3 class="vid-title">Tập 1</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/oUYwmUrMY"></iframe>
              <h3 class="vid-title">Tập 2</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/twzmmNecX"></iframe>
              <h3 class="vid-title">Tập 3</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>
  
       <!--box1------------------------------------------>
       <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/fL0dWaaTc"></iframe>
              <h3 class="vid-title">Tập 4</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/GRr9AfIzC"></iframe>
              <h3 class="vid-title">Tập 5</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/OtEtYejK8"></iframe>
              <h3 class="vid-title">Tập 6</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/YwHS_xxoo"></iframe>
              <h3 class="vid-title">Tập 7</h3>
  
              <div class="box-img">
                  <img src="img/hqdefault.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>
  
  
  </div>
  
  
  
    
  
  </div>
  </section>
        
      `;
    }
  }
  customElements.define('dmspecial-component', dmspecial);
  


















/* CatsleVania Season --------------------------------------------------------------------------------------------------------------*/
class vaniaSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a47.html">
                    <div class="box-img">
                    <img src="img/season-1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a106.html">
                    <div class="box-img">
                    <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a107.html">
                    <div class="box-img">
                    <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a108.html">
                    <div class="box-img">
                    <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('vaniaseason-component', vaniaSeason);





/* Castlevania s1 video --*/
class vaniavideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season1">
                  <div class="box-img">
                  <img src="img/season-1.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a106.html">
                  <div class="box-img">
                  <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a107.html">
                  <div class="box-img">
                  <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 3</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a108.html">
                  <div class="box-img">
                  <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 4</h2></div>
                      </a>
              </li>
   
    </div>

   

    
       


    </div>
    <div class="swiper-scrollbar"></div>
</div>



<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="season1">
<div class="heading">
              <span>Danh sách tập</span>
          </div>

    <!--Phim le le Content---------------------------------->
<div class="list-content">

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid active">
            <iframe src="https://short.ink/MOWl9USZ09"></iframe>
            <h3 class="vid-title">Tập 1: "Phù thủy"</h3>

            <div class="box-img">
                <img src="img/CastlevaniaS0101b.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 1</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/4DX5EodzO"></iframe>
            <h3 class="vid-title">Tập 2: Nghĩa địa</h3>

            <div class="box-img">
                <img src="img/zxcccccccccccc.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 2</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/T0GE5kimJ"></iframe>
            <h3 class="vid-title">Tập 3: Mê cung</h3>

            <div class="box-img">
                <img src="img/zaaaaaaa.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 3</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/3diFAwJZO"></iframe>
            <h3 class="vid-title">Tập 4: Tượng đài</h3>

            <div class="box-img">
                <img src="img/zzzzzzzzzzzzzzzx.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 4</h2></div>
        </div>
    </a>

    <a href="" style="visibility:hidden;"></a>
    <a href="" style="visibility:hidden;"></a>

</div>
</div>
</section>
        
      `;
    }
  }
customElements.define('vaniavideo-component', vaniavideo);

/* Castlevania s2 video --*/
class vaniavideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

        <div class="heading">
            <span>Phim liên quan</span>
        </div>
    
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a47.html">
                      <div class="box-img">
                      <img src="img/season-1.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                          <h2 class="title2">Mùa 1</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="#season2">
                      <div class="box-img">
                      <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                          <h2 class="title2">Mùa 2</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a107.html">
                      <div class="box-img">
                      <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                          <h2 class="title2">Mùa 3</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a108.html">
                      <div class="box-img">
                      <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                          <h2 class="title2">Mùa 4</h2></div>
                          </a>
                  </li>
       
        </div>  
    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
  
    
  
    <!--Video List--------------------------------------------------------------------------------------->
  
    <div class="video-list" id="season2">
    <div class="heading">
              <span>Danh sách tập</span>
          </div>
    
        <!--Phim le le Content---------------------------------->
    <div class="list-content">
    
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/wXX16eKUi"></iframe>
                <h3 class="vid-title">Tập 1: Hội đồng chiến tranh</h3>
    
                <div class="box-img">
                    <img src="img/xz123.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/JK9rxgqIe"></iframe>
                <h3 class="vid-title">Tập 2: Nhà cổ</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-s2-e2-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/rnZoQIRP2"></iframe>
                <h3 class="vid-title">Tập 3: Trận chiến bóng tối</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-2.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/ddC4Bi9FN-"></iframe>
                <h3 class="vid-title">Tập 4: Cột buồm bị hỏng</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-2.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/oxg2sfs87"></iframe>
                <h3 class="vid-title">Tập 5: Phép thuật cuối cùng</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-s2-e5-1.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/OcBYBfub0"></iframe>
                <h3 class="vid-title">Tập 6: Dòng sông</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-s2-e6-2.png" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/Bkuq-h4eE"></iframe>
                <h3 class="vid-title">Tập 7: Vì tình yêu</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-s2-e7-5.png" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/HUqvIDKZJ"></iframe>
                <h3 class="vid-title">Tập 8: Thời gian kết thúc</h3>
    
                <div class="box-img">
                    <img src="img/castlevania-s2-e8-3.png" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>
  
    </div>
    </div>
    </section>
        
      `;
    }
  }
customElements.define('vaniavideo2-component', vaniavideo2);





/* Castlevania s3 video --*/
class vaniavideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a47.html">
                    <div class="box-img">
                    <img src="img/season-1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a106.html">
                    <div class="box-img">
                    <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season3">
                    <div class="box-img">
                    <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a108.html">
                    <div class="box-img">
                    <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>  
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
  <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season3">
  <div class="heading">
              <span>Danh sách tập</span>
          </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/u2g1HpeEK"></iframe>
              <h3 class="vid-title">Tập 1: Hãy chúc phúc cho những trái tim bé nhỏ đã chết của bạn</h3>
  
              <div class="box-img">
                  <img src="img/castlevania-season-3-1583498354.png" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/XHlqU8OQc"></iframe>
              <h3 class="vid-title">Tập 2: Sự đền bù của trái tim tôi</h3>
  
              <div class="box-img">
                  <img src="img/zzzpic7064938.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/QXVr05wkF"></iframe>
              <h3 class="vid-title">Tập 3: Điều tra viên</h3>
  
              <div class="box-img">
                  <img src="img/zzzx123.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/s6I3UQV9t"></iframe>
              <h3 class="vid-title">Tập 4: Tôi có một sơ đồ</h3>
  
              <div class="box-img">
                  <img src="img/images (16).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/7Q7JI-OMS"></iframe>
              <h3 class="vid-title">Tập 5: Nơi của nền văn minh và sự tinh tế</h3>
  
              <div class="box-img">
                  <img src="img/images (17).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/bW49lYX0Z9"></iframe>
              <h3 class="vid-title">Tập 6: Giấc Mơ Đẹp</h3>
  
              <div class="box-img">
                  <img src="img/castlevania-s3-e6-2.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/vDV0Jawk8Y"></iframe>
              <h3 class="vid-title">Tập 7: Những điều tồi tệ hơn cả sự phản bội</h3>
  
              <div class="box-img">
                  <img src="img/castlevania-s3-e7-3.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>
  
       <!--box1------------------------------------------>
       <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/c083rMXAW"></iframe>
              <h3 class="vid-title">Tập 8: Đêm mang đến điều gì</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzzVideoScreenshot-CastlevaniaE8WhattheNightBrings-1126.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/zAfusLHbo"></iframe>
              <h3 class="vid-title">Tập 9: Thu hoạch</h3>
  
              <div class="box-img">
                  <img src="img/images (18).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/GZIivkKdA"></iframe>
              <h3 class="vid-title">Tập 10: Từ Bỏ Mọi Hy Vọng</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzzzfinal-battle.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>
  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('vaniavideo3-component', vaniavideo3);

/* Castlevania s4 video --*/
class vaniavideo4 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a47.html">
                  <div class="box-img">
                  <img src="img/season-1.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a106.html">
                  <div class="box-img">
                  <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a107.html">
                  <div class="box-img">
                  <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 3</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season4">
                  <div class="box-img">
                  <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                      <h2 class="title2">Mùa 4</h2></div>
                      </a>
              </li>
   
    </div>  

   

    
       


    </div>
    <div class="swiper-scrollbar"></div>
</div>



<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="season4">
<div class="heading">
              <span>Danh sách tập</span>
          </div>

    <!--Phim le le Content---------------------------------->
<div class="list-content">

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid active">
            <iframe src="https://short.ink/c6FxSUgvu-"></iframe>
            <h3 class="vid-title">Tập 1: Giết người đánh thức nó</h3>

            <div class="box-img">
                <img src="img/images (19).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 1</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/ee3SSxuGe"></iframe>
            <h3 class="vid-title">Tập 2: Có được thế giới</h3>

            <div class="box-img">
                <img src="img/castlevania-s4-e2-4.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 2</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/HRB3-rTLD"></iframe>
            <h3 class="vid-title">Tập 3: Bước đi</h3>

            <div class="box-img">
                <img src="img/castlevania-s4-e3-3.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 3</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/bCn4uHyof"></iframe>
            <h3 class="vid-title">Tập 4: Phải Hy ​​Sinh</h3>

            <div class="box-img">
                <img src="img/castlevania-s4-e4-2.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 4</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/YvFtQig4g"></iframe>
            <h3 class="vid-title">Tập 5: Trở lại thế giới</h3>

            <div class="box-img">
                <img src="img/images (20).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 5</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/iNuzrFJh5"></iframe>
            <h3 class="vid-title">Tập 6: Ngươi Không Đáng Để Ta Đổ Máu</h3>

            <div class="box-img">
                <img src="img/castlevania-s4-e6-4.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 6</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/AwiC3YZKg"></iframe>
            <h3 class="vid-title">Tập 7: Công trình vĩ đại</h3>

            <div class="box-img">
                <img src="img/images (21).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 7</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/rPnHDx_VK"></iframe>
            <h3 class="vid-title">Tập 8: Ma thuật tử thần</h3>

            <div class="box-img">
                <img src="img/zzzzzzz5ea0248c3640ad14f845b02ed7e1d4b2.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 8</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/HJrFf3GOH"></iframe>
            <h3 class="vid-title">Tập 9: Cái kết</h3>

            <div class="box-img">
                <img src="img/castlevania-s4-e9-3.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 9</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/wY7RbMEjw"></iframe>
            <h3 class="vid-title">Tập 10: Đó là một chuyến đi kỳ lạ</h3>

            <div class="box-img">
                <img src="img/zxxxxxxVideoScreenshot-CastlevaniaE10ItsBeenaStrangeRide-2045.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 10</h2></div>
        </div>
    </a>

</div>
</div>
</section>
        
      `;
    }
  }
customElements.define('vaniavideo4-component', vaniavideo4);




/* Toystory Season --------------------------------------------------------------------------------------------------------------*/
class toySeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a55.html">
                    <div class="box-img">
                    <img src="img/toy-story.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Câu Chuyện Đồ Chơi</h2>
                        <h2 class="title2">Phần 1</h2></div>
                        </a>
                </li>
     
      </div>

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  </section>
      `;
    }
  } 
customElements.define('toyseason-component', toySeason);


/* Toy story --------------------------------------------------------------------------------------------------------------*/
class toyvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-toy-story.html">
                    <div class="box-img">
                    <img src="img/toy-story.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Câu Chuyện Đồ Chơi</h2>
                        <h2 class="title2">Phần 1</h2></div>
                        </a>
                </li>
     
      </div>

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  </section>
      `;
    }
  } 
customElements.define('toyvideo-component', toyvideo);







/* DevilMayCry video --*/
class devilcryvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <section class="season">
    <!--Video List--------------------------------------------------------------------------------------->
  
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
    
        <!--Phim le le Content---------------------------------->
    <div class="list-content">
    
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/4HICrumvr"></iframe>
                <h3 class="vid-title">Tập 1: Devil May Cry</h3>
    
                <div class="box-img">
                    <img src="img/a2bd8eae7a1a3c614910ed968f533397.jpe" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/Fzvxvwb1_"></iframe>
                <h3 class="vid-title">Tập 2: Ngôi sao đường cao tốc</h3>
    
                <div class="box-img">
                    <img src="img/f41e4d94d3f3e9494c23421614c37786.jpe" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/XF8WIlev2"></iframe>
                <h3 class="vid-title">Tập 3: Không phải tình yêu</h3>
    
                <div class="box-img">
                    <img src="img/z2250dbe1fab3ab3227205791a35c292f.jpe" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/kLoTLR72M"></iframe>
                <h3 class="vid-title">Tập 4: Sấm rền</h3>
    
                <div class="box-img">
                    <img src="img/z2250dbe1fab3ab3227205791a35c292f.jpe" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/V7Qc6EEJiA"></iframe>
                <h3 class="vid-title">Tập 5: Riêng tư</h3>
    
                <div class="box-img">
                    <img src="img/e956c590-3f69-41a2-a8a1-e6411ae822ea.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/Pf3pVrbght"></iframe>
                <h3 class="vid-title">Tập 6: Nữ hoàng nhạc rock</h3>
    
                <div class="box-img">
                    <img src="img/dd.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/tkyQ3oVDd"></iframe>
                <h3 class="vid-title">Tập 7: Điều ước thành hiện thực</h3>
    
                <div class="box-img">
                    <img src="img/zxcvbnm.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/LawvwR5XK"></iframe>
                <h3 class="vid-title">Tập 8: Ngày xửa ngày xưa</h3>
    
                <div class="box-img">
                    <img src="img/zxassssss.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/7trGn3UvS"></iframe>
                <h3 class="vid-title">Tập 9: Poker Tử Thần</h3>
    
                <div class="box-img">
                    <img src="img/zxassssss.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/2O7Mv1JVnU"></iframe>
                <h3 class="vid-title">Tập 10: Lời hứa cuối cùng</h3>
    
                <div class="box-img">
                    <img src="img/21c1506db5a0af99633d2cc9f2c1eaaf.jpe" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/BQGDxrUil"></iframe>
                <h3 class="vid-title">Tập 11: Giờ chiếu!</h3>
    
                <div class="box-img">
                    <img src="img/tải xuống (52).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/F6h18Oocb"></iframe>
                <h3 class="vid-title">Tập 12: Stylish!</h3>
    
                <div class="box-img">
                    <img src="img/tải xuống (53).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>



  
    </div>
    </div>
          </section>
      `;
    }
  }
customElements.define('devilcryvideo-component', devilcryvideo);







/* DragonAge Season --------------------------------------------------------------------------------------------------------------*/
class dragonageSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a48.html">
                    <div class="box-img">
                    <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Dragon Age</h2>
                        <h2 class="title2">Absolution</h2></div>
                        </a>
                </li>
     
      </div>

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  </section>
      `;
    }
  } 
customElements.define('dragonageseason-component', dragonageSeason);

/* dragonage video --*/
class dragonagevideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season1">
                  <div class="box-img">
                  <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Dragon Age</h2>
                      <h2 class="title2">Absolution</h2></div>
                      </a>
              </li>
   
    </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>
    
<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="season1">
<div class="heading">
              <span>Danh sách tập</span>
          </div>

    <!--Phim le le Content---------------------------------->
<div class="list-content">

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid active">
            <iframe src="https://short.ink/UV1v_b05e"></iframe>
            <h3 class="vid-title">Tập 1: Người Phụ Nữ Vô Hình</h3>

            <div class="box-img">
                <img src="img/z-dragon-age-anime-cast.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 1</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/UuDvPVaGo"></iframe>
            <h3 class="vid-title">Tập 2: Ý chí của Đấng Tạo Hóa</h3>

            <div class="box-img">
                <img src="img/zxxWill-there-be-a-Dragon-Age-Absolution-Season-2.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 2</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/QMgPJMe8F"></iframe>
            <h3 class="vid-title">Tập 3: Cuộn dây của con rắn</h3>

            <div class="box-img">
                <img src="img/zxczxczxc.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 3</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/FtX0VxomG"></iframe>
            <h3 class="vid-title">Tập 4: Những người mơ sai lầm</h3>

            <div class="box-img">
                <img src="img/images (22).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 4</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/3l1UZjM0A"></iframe>
            <h3 class="vid-title">Tập 5: Bàn thờ lửa</h3>

            <div class="box-img">
                <img src="img/zxczxczxc.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 5</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/M-uSmm8RE"></iframe>
            <h3 class="vid-title">Tập 6: Cái giá của sự cứu rỗi</h3>

            <div class="box-img">
                <img src="img/zxczxczxc.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 6</h2></div>
        </div>
    </a>

    <a href="" style="visibility:hidden;"></a>

</div>
</div>
</section>
   
        
      `;
    }
  }
customElements.define('dragonagevideo-component', dragonagevideo);











/* Overlord Season --------------------------------------------------------------------------------------------------------------*/
class OverlordSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a44.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a104.html">
                    <div class="box-img">
                    <img src="https://images.justwatch.com/poster/289721576/s718/season-2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a105.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('overlordseason-component', OverlordSeason);

/* Overlord s1 video --*/
class overlordvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season1">
                  <div class="box-img">
                  <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a104.html">
                  <div class="box-img">
                  <img src="img/Overlord_II_Season_2.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a105.html">
                  <div class="box-img">
                  <img src="img/Overlord_III.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 3</h2></div>
                      </a>
              </li>
   
    </div>

 

    </div>
    <div class="swiper-scrollbar"></div>
</div>
    
    
<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="season1">
<div class="heading">
              <span>Danh sách tập</span>
          </div>

    <!--Phim le le Content---------------------------------->
<div class="list-content">

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid active">
            <iframe src="https://short.ink/5dD1tlp3v"></iframe>
            <h3 class="vid-title">Tập 1: Kết thúc và bắt đầu</h3>

            <div class="box-img">
                <img src="img/zzb0b4730ef0a27db3125ce574d83a0ee81494830437_full.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 1</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/TKhGyVnt3"></iframe>
            <h3 class="vid-title">Tập 2: Thủ Vệ Tầng</h3>

            <div class="box-img">
                <img src="img/zoverlord.avif" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 2</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/_NpjSC4uh"></iframe>
            <h3 class="vid-title">Tập 3: Trận chiến làng Carne</h3>

            <div class="box-img">
                <img src="img/zepisode-image-400x225 (1).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 3</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/c2dcVsh8Tt"></iframe>
            <h3 class="vid-title">Tập 4:  Kẻ thống trị tử thần</h3>

            <div class="box-img">
                <img src="img/images (11).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 4</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/jlSDh_Nqs"></iframe>
            <h3 class="vid-title">Tập 5: Hai nhà thám hiểm</h3>

            <div class="box-img">
                <img src="img/zss12.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 5</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/4-XwcXmm-"></iframe>
            <h3 class="vid-title">Tập 6: Hành trình</h3>

            <div class="box-img">
                <img src="img/zzz915b8b80-2049-11ec-ad33-c132ed91df8f_webp_original.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 6</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/D3oS6atDC"></iframe>
            <h3 class="vid-title">Tập 7: Vua rừng thông thái</h3>

            <div class="box-img">
                <img src="img/zzoverlord-s4-ep6.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 7</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/6rlL0CO4N"></iframe>
            <h3 class="vid-title">Tập 8: Song kiếm chém tử thần</h3>

            <div class="box-img">
                <img src="img/images (12).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 8</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/nT2zn3l2B"></iframe>
            <h3 class="vid-title">Tập 9: Chiến binh bóng tối</h3>

            <div class="box-img">
                <img src="img/zzz25a32c5a-c777-4f01-94f9-b473b7e35d40_640_360.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 9</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/-T-UYdwTe"></iframe>
            <h3 class="vid-title">Tập 10: Ma cà rồng đích thực</h3>

            <div class="box-img">
                <img src="img/images (13).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 10</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/H29Hk5DaR"></iframe>
            <h3 class="vid-title">Tập 11: Nhầm lẫn và hiểu biết</h3>

            <div class="box-img">
                <img src="img/zzzzzzzzzzzzzzzzzzz1e310acd-f8be-4181-8ef7-6c150f8f752b.webp" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 11</h2></div>
        </div>
    </a>

     <!--box1------------------------------------------>
     <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/YfNI2eGcC"></iframe>
            <h3 class="vid-title">Tập 12: Valkyrie đẫm máu</h3>

            <div class="box-img">
                <img src="img/32b848a484f47c49a6704fb67b6b33fb.jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 12</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/YfNI2eGcC"></iframe>
            <h3 class="vid-title">Tập 13: Player và NPC</h3>

            <div class="box-img">
                <img src="img/images (14).jpg" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 13</h2></div>
        </div>
    </a>


</div>
</div>
</section>
        
      `;
    }
  }
customElements.define('overlordvideo1-component', overlordvideo);



/* Overlord s2 video --*/
class overlordvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
    <li class="movie-box">
              <a href="a44.html">
                  <div class="box-img">
                  <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>
  
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season2">
                  <div class="box-img">
                  <img src="img/Overlord_II_Season_2.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>
  
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a105.html">
                  <div class="box-img">
                  <img src="img/Overlord_III.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 3</h2></div>
                      </a>
              </li>
   
    </div>
  
      
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season2">
  <div class="heading">
              <span>Danh sách tập</span>
          </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/5xlumriaM"></iframe>
              <h3 class="vid-title">Tập 1: Bình minh của sự tuyệt vọng</h3>
  
              <div class="box-img">
                  <img src="img/zxxmaxresdefault (2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/3UJKTzZHv"></iframe>
              <h3 class="vid-title">Tập 2: Khởi hành</h3>
  
              <div class="box-img">
                  <img src="img/zxaxmaxresdefault (2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/_mK0gOPu1"></iframe>
              <h3 class="vid-title">Tập 3: Người thằn lằn, Tập hợp</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/dKyZalL2V"></iframe>
              <h3 class="vid-title">Tập 4: Đội quân tử thần</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/cuevPlIzx"></iframe>
              <h3 class="vid-title">Tập 5: Thần băng giá</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/w7k-mvrWc"></iframe>
              <h3 class="vid-title">Tập 6: Những người nhặt được, Những người được nhặt lên</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/HMdM_CyIu"></iframe>
              <h3 class="vid-title">Tập 7: Hoa hồng xanh</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/vgTpBu1us"></iframe>
              <h3 class="vid-title">Tập 8: Cảm xúc của một chàng trai</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/hZehELL-r"></iframe>
              <h3 class="vid-title">Tập 9: Tia lửa bùng lên</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/yQ5IXMw5h"></iframe>
              <h3 class="vid-title">Tập 10: Sự hỗn loạn bắt đầu ở Thủ đô Hoàng gia</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/pV-Oa4Cdr"></iframe>
              <h3 class="vid-title">Tập 11: Jaldabaoth</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/4VNe409Yu"></iframe>
              <h3 class="vid-title">Tập 12: Trận chiến cuối cùng của sự hỗn loạn</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/F2bQOSu4O"></iframe>
              <h3 class="vid-title">Tập 13: Lá bài Trump tối thượng</h3>
  
              <div class="box-img">
                  <img src="img/zxxxxf392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 13</h2></div>
          </div>
      </a>
  
  
  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('overlordvideo2-component', overlordvideo2);



/* Overlord s3 video --*/
class overlordvideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
    <li class="movie-box">
              <a href="a44.html">
                  <div class="box-img">
                  <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>
  
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a104.html">
                  <div class="box-img">
                  <img src="img/Overlord_II_Season_2.webp" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>
  
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#season3">
                  <div class="box-img">
                  <img src="img/Overlord_III.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                      <h2 class="title2">Mùa 3</h2></div>
                      </a>
              </li>
   
    </div>
  
      
  
     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season3">
  <div class="heading">
              <span>Danh sách tập</span>
          </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/ZLTFqCXNy"></iframe>
              <h3 class="vid-title">Tập 1: Nỗi buồn của kẻ thống trị</h3>
  
              <div class="box-img">
                  <img src="img/zzzOverlord-IV-Episode-1-Fith-and-the-other-maids.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/0iAvHZR_J"></iframe>
              <h3 class="vid-title">Tập 2: Làng Carne Một Lần Nữa</h3>
  
              <div class="box-img">
                  <img src="img/zxx21129625aef-ccd5-46f4-a9b9-eec7a1bd2b57.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/F_Y3iY7ia"></iframe>
              <h3 class="vid-title">Tập 3: Những ngày biến động và bận rộn của Enri</h3>
  
              <div class="box-img">
                  <img src="img/images (15).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/Cw9mPKXt7"></iframe>
              <h3 class="vid-title">Tập 4: Khổng lồ phương đông, rắn quỷ phương tây</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzx1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/OfnIFJyRe"></iframe>
              <h3 class="vid-title">Tập 5: Hai người dẫn đầu</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzzzxdd2ff3a5-d96d-488c-871b-a77b212daddf.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/bmT9vKpCI"></iframe>
              <h3 class="vid-title">Tập 6: Lời mời đến cái chết</h3>
  
              <div class="box-img">
                  <img src="img/tải xuống (51).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/-OGO4v73T"></iframe>
              <h3 class="vid-title">Tập 7: Bướm vướng vào mạng nhện</h3>
  
              <div class="box-img">
                  <img src="img/zzzzz23b38e043fe16507365a23f1007be4fd77.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/8klbGwOuG"></iframe>
              <h3 class="vid-title">Tập 8: Một Chút Hy Vọng</h3>
  
              <div class="box-img">
                  <img src="img/zzxcOverlord_III_Episode_08.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/_1Mv-_1LW"></iframe>
              <h3 class="vid-title">Tập 9: Cuộc chiến ngôn từ</h3>
  
              <div class="box-img">
                  <img src="img/zzzz12maxresdefault (2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/XV7xsWLw_"></iframe>
              <h3 class="vid-title">Tập 10: Chuẩn bị chiến tranh</h3>
  
              <div class="box-img">
                  <img src="img/0191d35d8d1755642926bf7ab4af304516773962e97fae5e7ff732c5b8201af86b._RI_TTW_.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/f7ArPx8YN"></iframe>
              <h3 class="vid-title">Tập 11: Một trận chiến khác</h3>
  
              <div class="box-img">
                  <img src="img/0191d35d8d1755642926bf7ab4af304516773962e97fae5e7ff732c5b8201af86b._RI_TTW_.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/D0wh-t6Cj"></iframe>
              <h3 class="vid-title">Tập 12: Thảm sát</h3>
  
              <div class="box-img">
                  <img src="img/0191d35d8d1755642926bf7ab4af304516773962e97fae5e7ff732c5b8201af86b._RI_TTW_.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/y5jZuQfIO"></iframe>
              <h3 class="vid-title">Tập 13: Người chơi vs Người chơi</h3>
  
              <div class="box-img">
                  <img src="img/0191d35d8d1755642926bf7ab4af304516773962e97fae5e7ff732c5b8201af86b._RI_TTW_.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 13</h2></div>
          </div>
      </a>
  
  </div>
  </div>
  </section>
  
        
      `;
    }
  }
customElements.define('overlordvideo3-component', overlordvideo3);















/* 5Brigde Season --------------------------------------------------------------------------------------------------------------*/
class fivebSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a69.html">
                    <div class="box-img">
                    <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a109.html">
                    <div class="box-img">
                    <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a110.html">
                    <div class="box-img">
                    <img src="img/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a94.html">
                    <div class="box-img">
                    <img src="img/6033158_1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('fivebseason-component', fivebSeason);





/* 5Brigde Season movie --------------------------------------------------------------------------------------------------------------*/
class fivebSeason2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a69.html">
                    <div class="box-img">
                    <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a109.html">
                    <div class="box-img">
                    <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a110.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="1-5-nang-dau-movie.html">
                    <div class="box-img">
                    <img src="img/6033158_1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('fivebseason2-component', fivebSeason2);



/* 5Brigde s1 video --*/
class fivebvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a109.html">
                    <div class="box-img">
                    <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a110.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a94.html">
                    <div class="box-img">
                    <img src="img/6033158_1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  <div class="heading">
              <span>Danh sách tập</span>
          </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/SRSJKNeoA3"></iframe>
              <h3 class="vid-title">Tập 1: Bộ ngũ tinh hoa</h3>
  
              <div class="box-img">
                  <img src="img/images (23).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/oknOtmfza"></iframe>
              <h3 class="vid-title">Tập 2: Lời tỏ tình trên sân thượng</h3>
  
              <div class="box-img">
                  <img src="img/1zx.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/71aoiKwIp"></iframe>
              <h3 class="vid-title">Tập 3: Một núi vấn đề</h3>
  
              <div class="box-img">
                  <img src="img/images (24).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/ho91Lgd0J"></iframe>
              <h3 class="vid-title">Tập 4: Một ngày nghỉ</h3>
  
              <div class="box-img">
                  <img src="img/476d3a642c54e55f7d8e5dfdb6f5c505.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/G9lnCBqYo"></iframe>
              <h3 class="vid-title">Tập 5: Năm phần năm</h3>
  
              <div class="box-img">
                  <img src="img/images (25).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/PChJplDeV"></iframe>
              <h3 class="vid-title">Tập 6: Những gì đã được xây dựng</h3>
  
              <div class="box-img">
                  <img src="img/images (26).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/hZrFL-z-9"></iframe>
              <h3 class="vid-title">Tập 7: Kẻ nói dối McLieface</h3>
  
              <div class="box-img">
                  <img src="img/z10-fb8df2f1e1aaec66fbf1c6ec857a2e4e.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/Mx6MzH_LP"></iframe>
              <h3 class="vid-title">Tập 8: Bức ảnh bắt đầu tất cả</h3>
  
              <div class="box-img">
                  <img src="img/z100-ed0b60981795686ea6ec034fd2b339a2.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/iDw3aqoNI"></iframe>
              <h3 class="vid-title">Tập 9: Truyền Thuyết Định Mệnh, Ngày 1</h3>
  
              <div class="box-img">
                  <img src="img/z1000-maxresdefault (2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/nHcUSxGnE"></iframe>
              <h3 class="vid-title">Tập 10: Truyền Thuyết Định Mệnh, Ngày 2</h3>
  
              <div class="box-img">
                  <img src="img/z1000-8eda4faf-1440-4580-8a97-c507ec36ea1e_keyartofficialvideoimage.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/x4CRZ0JA9"></iframe>
              <h3 class="vid-title">Tập 11: Truyền Thuyết Định Mệnh, Ngày 3</h3>
  
              <div class="box-img">
                  <img src="img/z-x-quinep11.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/dxGp5grpB"></iframe>
              <h3 class="vid-title">Tập 12: Truyền Thuyết Định Mệnh, Ngày 2000</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzz12212.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>

  
  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('fivebvideo-component', fivebvideo);




/* 5Brigde s2 video --*/
class fivebvideo22 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a69.html">
                    <div class="box-img">
                    <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season2">
                    <div class="box-img">
                    <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a110.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="a94.html">
                    <div class="box-img">
                    <img src="img/6033158_1.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
  <div class="heading">
              <span>Danh sách tập</span>
          </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/YYhC0bKOv"></iframe>
              <h3 class="vid-title">Tập 1: Hôm nay và sự may mắn khó khăn và sự đoàn kết của Kyoto</h3>
  
              <div class="box-img">
                  <img src="img/zzzzdb59f214dd6d586f87056b3308b61a30.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/SVJ4Vb1Iy"></iframe>
              <h3 class="vid-title">Tập 2: Bảy lời tạm biệt Phần 1</h3>
  
              <div class="box-img">
                  <img src="img/s2e2-feature-e1610833794900.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/HTt8gtlJb"></iframe>
              <h3 class="vid-title">Tập 3: Bảy Lời Tạm Biệt Phần 2</h3>
  
              <div class="box-img">
                  <img src="img/file.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/k0dGIu4e6"></iframe>
              <h3 class="vid-title">Tập 4: Bảy Lời Tạm Biệt Phần 3</h3>
  
              <div class="box-img">
                  <img src="img/images (27).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/Cksxd4AH8"></iframe>
              <h3 class="vid-title">Tập 5: Hôm nay làm việc tốt lắm</h3>
  
              <div class="box-img">
                  <img src="img/images (27).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/tC7LnOae_"></iframe>
              <h3 class="vid-title">Tập 6: Thi cuối kỳ</h3>
  
              <div class="box-img">
                  <img src="img/images (27).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/oLoTLpumG"></iframe>
              <h3 class="vid-title">Tập 7: Mang Đến Cuộc Tấn Công</h3>
  
              <div class="box-img">
                  <img src="img/images (27).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/kh8jWFD-Q"></iframe>
              <h3 class="vid-title">Tập 8: Sukuranburu Eggu</h3>
  
              <div class="box-img">
                  <img src="img/z(2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/IuDybUOo0"></iframe>
              <h3 class="vid-title">Tập 9: Chào mừng đến với Lớp 3-1</h3>
  
              <div class="box-img">
                  <img src="img/nino-kiss-feature.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/At1Jq5K_V"></iframe>
              <h3 class="vid-title">Tập 10: Đổi lại năm con hạc</h3>
  
              <div class="box-img">
                  <img src="img/yotsuba-episode-10-feature.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/VoPiRRmaG"></iframe>
              <h3 class="vid-title">Tập 11: Cuộc chiến chị em: Phần 1</h3>
  
              <div class="box-img">
                  <img src="img/miku-crying.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/DWzMBPmck"></iframe>
              <h3 class="vid-title">Tập 12: Cuộc chiến chị em: Phần 2</h3>
  
              <div class="box-img">
                  <img src="img/Go-Toubun no Hanayome S2 - 12 - Large 31.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>
        

  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('fivebvideo22-component', fivebvideo22);

/* 5Brigde Special --*/
class fivebvideos extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

        <div class="heading">
            <span>Phim liên quan</span>
        </div>
    
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a69.html">
                      <div class="box-img">
                      <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                          <h2 class="title2">Mùa 1</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a109.html">
                      <div class="box-img">
                      <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                          <h2 class="title2">Mùa 2</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
              <li class="movie-box">
                  <a href="#sp">
                      <div class="box-img">
                      <img src="img/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.webp" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                          <h2 class="title2">Special</h2></div>
                          </a>
                  </li>
                  </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
              <li class="movie-box">
                  <a href="a94.html">
                      <div class="box-img">
                      <img src="img/6033158_1.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                          <h2 class="title2">Movie</h2></div>
                          </a>
                  </li>
  
                  
       
        </div>
  
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
        
        
    <!--Video List--------------------------------------------------------------------------------------->
  
    <div class="video-list" id="sp">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
    
        <!--Phim le le Content---------------------------------->
    <div class="list-content">
    
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/HCRI092-p"></iframe>
                <h3 class="vid-title">Special 1: Kỳ Nghỉ Hè Tình Cờ Phần 1</h3>
    
                <div class="box-img">
                    <img src="img/zd4ff9-16914918178257-1920.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/VNJiWHfX4"></iframe>
                <h3 class="vid-title">Special 2: Kỳ Nghỉ Hè Tình Cờ Phần 2</h3>
    
                <div class="box-img">
                    <img src="img/zd4ff9-16914918178257-1920.avif" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>
        
    <a href="" style="visibility:hidden;"></a>
    <a href="" style="visibility:hidden;"></a>
    <a href="" style="visibility:hidden;"></a>
    <a href="" style="visibility:hidden;"></a>
  
    </div>
    </div>
    </section>
        
      `;
    }
  }
customElements.define('fivebvideos-component', fivebvideos);


/* Witch Craft Work Season --------------------------------------------------------------------------------------------------------------*/
class witchcraftSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a70.html">
                    <div class="box-img">
                    <img src="img/a70.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Witch Craft Works</h2>
                        <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('witchcseason-component', witchcraftSeason);



/* Witch Craft s1 video --*/
class witchcvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="img/a70.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Witch Craft Works</h2>
                        <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                        </a>
                </li>
     
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
  <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season1">
  
  <div class="heading">
            <span>Danh sách tập</span>
        </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/3eQQbUCAi"></iframe>
              <h3 class="vid-title">Tập 1: Takamiya-kun và Phù thủy lửa</h3>
  
              <div class="box-img">
                  <img src="img/a438d8481eb8c4188704665b7acce087.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/Vor6jLwWm"></iframe>
              <h3 class="vid-title">Tập 2: Takamiya-kun và chương trình nghị sự của phù thủy</h3>
  
              <div class="box-img">
                  <img src="img/witch2-1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/WKMUvwMUt"></iframe>
              <h3 class="vid-title">Tập 3: Takamiya-kun và cái bẫy của Chronoire</h3>
  
              <div class="box-img">
                  <img src="img/images (28).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/nOk53ZqOU"></iframe>
              <h3 class="vid-title">Tập 4: Takamiya-kun và cô em gái xấu tính</h3>
  
              <div class="box-img">
                  <img src="img/images (29).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/tFnux38zE"></iframe>
              <h3 class="vid-title">Tập 5: Takamiya-kun và mụ phù thủy mắt đá và bàn tay đá</h3>
  
              <div class="box-img">
                  <img src="img/Witch-Craft-Works-Dont-Look.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/FAUh6Y7Q1"></iframe>
              <h3 class="vid-title">Tập 6: Takamiya-kun và thử thách tình yêu</h3>
  
              <div class="box-img">
                  <img src="img/zzzzzzzzz52965b8e32583b78bd4186d29dffac0050f9d4d0.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/orBEhFRPS"></iframe>
              <h3 class="vid-title">Tập 7: Takamiya-kun và nghĩa vụ quý tộc</h3>
  
              <div class="box-img">
                  <img src="img/wcw71.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/zXax4Q9_R"></iframe>
              <h3 class="vid-title">Tập 8: Vết thương của Takamiya-kun và Kagari-san</h3>
  
              <div class="box-img">
                  <img src="img/witch81.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/G_CEIlS3J"></iframe>
              <h3 class="vid-title">Tập 9: Takamiya-kun và mụ phù thủy nơi tận cùng</h3>
  
              <div class="box-img">
                  <img src="img/witchcraftworks_09.png" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/AA486KQ_m"></iframe>
              <h3 class="vid-title">Tập 10: Takamiya-kun và ngày cuối tuần: Phần 1</h3>
  
              <div class="box-img">
                  <img src="img/838786109eac7fb7b_w.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/CCsnt6nUu"></iframe>
              <h3 class="vid-title">Tập 11: Takamiya-kun và ngày cuối tuần: Phần 2</h3>
  
              <div class="box-img">
                  <img src="img/83878593468a6682b_w.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/1zZc1JHGX"></iframe>
              <h3 class="vid-title">Tập 12: Takamiya-kun và ngày cuối tuần: Phần 3</h3>
  
              <div class="box-img">
                  <img src="img/maxresdefault (2).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/5DsTLeOQe"></iframe>
              <h3 class="vid-title">Ova: Takamiya-kun và âm mưu của em gái</h3>
  
              <div class="box-img">
                  <img src="img/images (30).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Ova</h2></div>
          </div>
      </a>
  
  
  
  </div>
  </div>
  </section>
  
        
      `;
    }
  }
customElements.define('witchcvideo-component', witchcvideo);



/* Burn The Witch Season --------------------------------------------------------------------------------------------------------------*/
class bwSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a71.html">
                    <div class="box-img">
                    <img src="img/a71.jpg" alt="" class="img"></div>
               
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2>
                        <h2 class="title2">Oneshot</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('bwseason-component', bwSeason);

/* Burn The Witch s1 video --*/
class bwvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

        <div class="heading">
            <span>Phim liên quan</span>
        </div>
    
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="#season1">
                      <div class="box-img">
                      <img src="img/a71.jpg" alt="" class="img"></div>
                 
                      <div class="box-text">
                          <h2 class="title">Burn The Witch</h2>
                          <h2 class="title2">Oneshot</h2></div>
                          </a>
                  </li>
       
        </div>
  
        
  
    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
        
        
    <!--Video List--------------------------------------------------------------------------------------->
  
    <div class="video-list" id="season1">
    <div class="heading">
              <span>Danh sách tập</span>
          </div>
    
        <!--Phim le le Content---------------------------------->
    <div class="list-content">
    
        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/7Dxxuf9Vc"></iframe>
                <h3 class="vid-title">Tập 1: Phù Thủy Thời Hiện Đại và Rồng!?</h3>
    
                <div class="box-img">
                    <img src="img/MV5BMGEyMDBlMTItMTVlYS00Zjg0LTg3YWQtYTA4OGY1ZTJiYjY0XkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/sE2Hm58aK"></iframe>
                <h3 class="vid-title">Tập 2: Nhiệm vụ "lớn"</h3>
    
                <div class="box-img">
                    <img src="img/images (31).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/jrjItfXL-"></iframe>
                <h3 class="vid-title">Tập 3: Tiếp bước</h3>
    
                <div class="box-img">
                    <img src="img/Burn-The-Witch-Anime-Film-Siliconera.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>
  
        <a href="" style="visibility: hidden"></a>
        <a href="" style="visibility: hidden"></a>
        <a href="" style="visibility: hidden"></a>
  
    </div>
    </div>
    </section>
        
      `;
    }
  }
customElements.define('bwvideo-component', bwvideo);








/* Tuổi Mới Lớn Mộng Mơ Season --------------------------------------------------------------------------------------------------------------*/
class rikkaSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('rikkaseason-component', rikkaSeason);

/* Tuổi Mới Lớn Mộng Mơ s1 video --*/
class rikkavideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

        <div class="heading">
            <span>Phim liên quan</span>
        </div>
    
    
    <div class="season-content swiper">
        <div class="swiper-wrapper">
        
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="#">
                      <div class="box-img">
                      <img src="img/rikka.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">Mùa 1</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a111.html">
                      <div class="box-img">
                      <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">Lite</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a112.html">
                      <div class="box-img">
                      <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">ONA</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a77.html">
                      <div class="box-img">
                      <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">Movie 1</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a113.html">
                      <div class="box-img">
                      <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">Mùa 2</h2></div>
                          </a>
                  </li>
       
        </div>
  
        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
                  <a href="a95.html">
                      <div class="box-img">
                      <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                          <h2 class="title2">Movie 2</h2></div>
                          </a>
                  </li>
       
        </div>
        

    
    
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
        
        
    <!--Video List--------------------------------------------------------------------------------------->
  
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
    
        <!--Phim le le Content---------------------------------->
    <div class="list-content">
    

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid active">
                <iframe src="https://short.ink/XCr7Ed8oh"></iframe>
                <h3 class="vid-title">Tập 1: Tình cờ gặp... với Ác vương Shingan</h3>
    
                <div class="box-img">
                    <img src="img/maxresdefault (3).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 1</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/YPM7hsgyW"></iframe>
                <h3 class="vid-title">Tập 2: Nữ tư tế... của Giai điệu</h3>
    
                <div class="box-img">
                    <img src="img/CDK_01_002_256x144.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 2</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/BiL78VZML"></iframe>
                <h3 class="vid-title">Tập 3: Cô gái dị giáo... bím tóc</h3>
    
                <div class="box-img">
                    <img src="img/e82d88fa16153354a99f5475d9d78c5600c3b7501a3310797656a6ae13d093a0._RI_TTW_SX720_FMjpg_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 3</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/15rRdE5ZJn"></iframe>
                <h3 class="vid-title">Tập 4: Hối tiếc... Rằng buộc</h3>
    
                <div class="box-img">
                    <img src="img/images (32).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 4</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/1CZEgKSPp"></iframe>
                <h3 class="vid-title">Tập 5: Một sự ràng buộc... Học tập chăm chỉ</h3>
    
                <div class="box-img">
                    <img src="img/images (33).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 5</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/f3s4CluKg"></iframe>
                <h3 class="vid-title">Tập 6: Người Được Chuộc Tội... Vô Tội</h3>
    
                <div class="box-img">
                    <img src="img/images (34).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 6</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/7h_sNYhzs"></iframe>
                <h3 class="vid-title">Tập 7: Hồi tưởng... về thiên đường đã mất</h3>
    
                <div class="box-img">
                    <img src="img/images (35).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 7</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/6GHCTmXnq"></iframe>
                <h3 class="vid-title">Tập 8: Bị lưu đày... Chỉ có hai người họ</h3>
    
                <div class="box-img">
                    <img src="img/chuunibyou_08_02.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 8</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/GlOkVkdeB"></iframe>
                <h3 class="vid-title">Tập 9: Một trái tim bối rối... hỗn loạn</h3>
    
                <div class="box-img">
                    <img src="img/e6ff56eaca04338c68c33775d71ed74ae8dd1916_00.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 9</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/f8YKmMtQ5"></iframe>
                <h3 class="vid-title">Tập 10: Thánh Mẫu... Chiếc Hộp Pandora</h3>
    
                <div class="box-img">
                    <img src="img/vlcsnap-2013-11-11-19h44m41s132.png" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 10</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/HPfBrda3W"></iframe>
                <h3 class="vid-title">Tập 11: Thiên thần sa ngã một cánh</h3>
    
                <div class="box-img">
                    <img src="img/images (36).jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 11</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/LWS-TFR5F"></iframe>
                <h3 class="vid-title">Tập 12: Sự gắn kết vĩnh cửu</h3>
    
                <div class="box-img">
                    <img src="img/chuunibyou_12_09.webp" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Tập 12</h2></div>
            </div>
        </a>

        <!--box1------------------------------------------>
        <a href="#videoplay">
            <div class="vid">
                <iframe src="https://short.ink/nWvu5mXqN"></iframe>
                <h3 class="vid-title">Special: Lấp lánh... Lễ hội bùng nổ (Slapstick Noel)</h3>
    
                <div class="box-img">
                    <img src="img/MV5BNTNjYjA3NzYtY2Q2MS00ZTQxLTkwOTgtYmQwMGEzNjQ1MmIwXkEyXkFqcGdeQXVyOTk0NTA5NjY@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
    
                <div class="box-text">
                    <h2 class="box-title">Special</h2></div>
            </div>
        </a>
  
  
    </div>
    </div>
    </section>
        
      `;
    }
  }
customElements.define('rikkavideo-component', rikkavideo);

/* Tuổi Mới Lớn Mộng Mơ Lite video --*/
class rikkalitevideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a76.html">
                  <div class="box-img">
                  <img src="img/rikka.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">Mùa 1</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="#">
                  <div class="box-img">
                  <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">Lite</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a112.html">
                  <div class="box-img">
                  <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">ONA</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a77.html">
                  <div class="box-img">
                  <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">Movie 1</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a113.html">
                  <div class="box-img">
                  <img src="img/56643.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">Mùa 2</h2></div>
                      </a>
              </li>
   
    </div>

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
              <a href="a95.html">
                  <div class="box-img">
                  <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                      <h2 class="title2">Movie 2</h2></div>
                      </a>
              </li>
   
    </div>
    
    

       


    </div>
    <div class="swiper-scrollbar"></div>
</div>
    
<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="lite">
    <div class="heading">
        <span>Danh sách tập</span>
    </div>

    <!--Phim le le Content---------------------------------->
<div class="list-content">


    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid active">
            <iframe src="https://short.ink/PSvtOIWwV"></iframe>
            <h3 class="vid-title">Lite 1</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 1</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/nH9aChUTC"></iframe>
            <h3 class="vid-title">Lite 2</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 2</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/z9rAHKZss3"></iframe>
            <h3 class="vid-title">Lite 3</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 3</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/jktu5NZb6"></iframe>
            <h3 class="vid-title">Lite 4</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 4</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/33wkotbm5"></iframe>
            <h3 class="vid-title">Lite 5</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 5</h2></div>
        </div>
    </a>

    <!--box1------------------------------------------>
    <a href="#videoplay">
        <div class="vid">
            <iframe src="https://short.ink/SxWXXLdy6"></iframe>
            <h3 class="vid-title">Lite 6</h3>

            <div class="box-img">
                <img src="img/popo.png" alt="" class="img"></div>

            <div class="box-text">
                <h2 class="box-title">Tập 6</h2></div>
        </div>
    </a>


</div>
</div>
</section>
        
      `;
    }
  }
customElements.define('rikkalitevideo-component', rikkalitevideo);

/* Tuổi Mới Lớn Mộng Mơ OntherWWorld video --*/
class rikkavideoon extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a77.html">
                    <div class="box-img">
                    <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a113.html">
                    <div class="box-img">
                    <img src="img/56643.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="ona">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/FmFi4plgX"></iframe>
              <h3 class="vid-title">ONA 1</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/w4P1ktw2B"></iframe>
              <h3 class="vid-title">ONA 2</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/hdYOH4DoI"></iframe>
              <h3 class="vid-title">ONA 3</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/zzxYPTnIg"></iframe>
              <h3 class="vid-title">ONA 4</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/q6yqtyGoZ"></iframe>
              <h3 class="vid-title">ONA 5</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/MjgBkHsVa"></iframe>
              <h3 class="vid-title">ONA 6</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/9-5bf9aZj"></iframe>
              <h3 class="vid-title">ONA 7</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkavideoon-component', rikkavideoon);



/* Tuổi Mới Lớn Mộng Mơ s2 video --*/
class rikkavideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a77.html">
                    <div class="box-img">
                    <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="img/56643.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid active">
              <iframe src="https://short.ink/u58QiY8mw"></iframe>
              <h3 class="vid-title">Tập 1: Sự hồi sinh của... Con mắt độc ác</h3>
  
              <div class="box-img">
                  <img src="img/0072.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 1</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/eebXeNNam"></iframe>
              <h3 class="vid-title">Tập 2: Dolphin Ring Striker (Hợp đồng tình nhân của Dolphin)</h3>
  
              <div class="box-img">
                  <img src="img/images (37).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 2</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/-RhTh38O3"></iframe>
              <h3 class="vid-title">Tập 3: Cô gái ma quỷ huyền diệu... Đang truy đuổi</h3>
  
              <div class="box-img">
                  <img src="img/maxresdefault (4).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 3</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/2fh0JVZV_"></iframe>
              <h3 class="vid-title">Tập 4: Queen Maker (Vô tội... Bầu cử Chủ tịch Hội học sinh)</h3>
  
              <div class="box-img">
                  <img src="img/maxresdefault (6).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 4</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/uDyfN69h4"></iframe>
              <h3 class="vid-title">Tập 5: Mê cung ảo tưởng... Giấc ngủ trưa</h3>
  
              <div class="box-img">
                  <img src="img/maxresdefault (5).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 5</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/smFmAFf1S"></iframe>
              <h3 class="vid-title">Tập 6: Do dự... Du lịch đảo Tsukushino</h3>
  
              <div class="box-img">
                  <img src="img/1665.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 6</h2></div>
          </div>
      </a>
  
      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/A-nQ4smGH"></iframe>
              <h3 class="vid-title">Tập 7: Tam giác núi lửa (Đi qua... Hình trái tim)</h3>
  
              <div class="box-img">
                  <img src="img/images (38).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 7</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/iqw2eZ2TZ"></iframe>
              <h3 class="vid-title">Tập 8: Trinh nữ tâm linh giả (Mori Summer)</h3>
  
              <div class="box-img">
                  <img src="img/fc6f7b92ca4cf95a42265eedaed049a9332941d1_hq.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 8</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/UDGgykew_"></iframe>
              <h3 class="vid-title">Tập 9: Bí ẩn cuối cùng... trên bờ biển (Khu nghỉ dưỡng cuối cùng)</h3>
  
              <div class="box-img">
                  <img src="img/images (39).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 9</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/bHtY4LaKn"></iframe>
              <h3 class="vid-title">Tập 10: Găng tay mưa (Đêm hè... Mưa và roi)</h3>
  
              <div class="box-img">
                  <img src="img/images (40).jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 10</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/Eqv3FQLyB"></iframe>
              <h3 class="vid-title">Tập 11: Blue Moon Ragnarok (Trận chiến cuối cùng của... The Blue Moon)</h3>
  
              <div class="box-img">
                  <img src="img/4af1009d912cb70a27c973f544e6822eec0623f6.png" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 11</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/fhHU0Ls9s"></iframe>
              <h3 class="vid-title">Tập 12: Chạng vạng của ... Hợp đồng nâng cao</h3>
  
              <div class="box-img">
                  <img src="img/chu2koi-ren-12-02.webp" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Tập 12</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/ZGMTyqC5j"></iframe>
              <h3 class="vid-title">Lite Special</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Lite Special</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/lEjnX2FHvi"></iframe>
              <h3 class="vid-title">Special: Phát lại... Ngày tận thế của Con mắt độc ác</h3>
  
              <div class="box-img">
                  <img src="img/Chuunibyou demo Koi ga Shitai! Ren Specials.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Special</h2></div>
          </div>
      </a>

      <!--box1------------------------------------------>
      <a href="#videoplay">
          <div class="vid">
              <iframe src="https://short.ink/hgDId-2Vq"></iframe>
              <h3 class="vid-title">Special 2</h3>
  
              <div class="box-img">
                  <img src="img/chuunibyou1.jpg" alt="" class="img"></div>
  
              <div class="box-text">
                  <h2 class="box-title">Special 2</h2></div>
          </div>
      </a>



  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkavideo2-component', rikkavideo2);

/* Tuổi Mới Lớn Mộng Mơ Movie1 video --*/
class rikkavideomovie1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-rikka-movie-1.html">
                    <div class="box-img">
                    <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a113.html">
                    <div class="box-img">
                    <img src="img/56643.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
        
      `;
    }
  }
customElements.define('rikkavideomovie1-component', rikkavideomovie1);

/* Tuổi Mới Lớn Mộng Mơ Movie2 video --*/
class rikkavideomovie2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="1-rikka-movie-1.html">
                    <div class="box-img">
                    <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a113.html">
                    <div class="box-img">
                    <img src="img/56643.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
        
      `;
    }
  }
customElements.define('rikkavideomovie2-component', rikkavideomovie2);





/* Little Witch Academia Season --------------------------------------------------------------------------------------------------------------*/
class littlewSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a83.html">
          <div class="box-img">
          <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a85.html">
          <div class="box-img">
          <img src="img/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a84.html">
          <div class="box-img">
          <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewseason-component', littlewSeason);

/* Little Witch Academia s1 video --*/
class littlewvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
    <div class="swiper-slide">
      <li class="movie-box">
      <a href="#season1">
          <div class="box-img">
          <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a85.html">
          <div class="box-img">
          <img src="img/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a84.html">
          <div class="box-img">
          <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    



     
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  

      <!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid active">
      <iframe src="https://short.ink/6QOxfBwTm"></iframe>
      <h3 class="vid-title">Tập 1:Một khởi đầu mới</h3>

      <div class="box-img">
          <img src="img/MV5BM2Y3MzcyMTgtMzZiNS00MDg2LWIyNGItMWZkMzUwOGMwODYxXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 1</h2></div>
  </div>
</a>

 <!--box1------------------------------------------>
 <a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/b8whWod5y"></iframe>
      <h3 class="vid-title">Tập 2: Papiliodya</h3>

      <div class="box-img">
          <img src="img/WitchTV_02_1.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 1</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/tvMZAbTvf"></iframe>
      <h3 class="vid-title">Tập 3: Đừng ngăn tôi lại</h3>

      <div class="box-img">
          <img src="img/MV5BMGU3ZjBiZDctZjY2OC00OThkLTg3YzUtY2RhNWE4NWU5NGFlXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 3</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/kNhwOYZYi"></iframe>
      <h3 class="vid-title">Tập 4: Màn đêm buông xuống</h3>

      <div class="box-img">
          <img src="img/MV5BZDI4NzYyYjAtMDdkMy00NmRlLThkNTEtOTkwNTYzMGIyODY2XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 4</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/iyKv4BgY3"></iframe>
      <h3 class="vid-title">Tập 5: Luna Nova và Bạch Long</h3>

      <div class="box-img">
          <img src="img/MV5BZGMxOGU3MzEtNzZlYi00ZjI3LTk5YjMtZDU0ZThiNTc4M2ZlXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 5</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/l-7BK8Yt4"></iframe>
      <h3 class="vid-title">Tập 6: Đài phun nước Polaris</h3>

      <div class="box-img">
          <img src="img/MV5BMTI2OGVjMzMtMzg1Ni00ZTIwLThkZjktZmU5OTBkNjU0NmM2XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 6</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/Fr-_72Xid"></iframe>
      <h3 class="vid-title">Tập 7: Tàu ngầm màu cam</h3>

      <div class="box-img">
          <img src="img/MV5BZDRjNDQ1ZmUtMDVmNi00N2FiLWIzN2ItOThjMmQzYjE1ZjQ3XkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 7</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/7hpxNuN5u"></iframe>
      <h3 class="vid-title">Tập 8: Sucy đang ngủ</h3>

      <div class="box-img">
          <img src="img/MV5BZTcwNjM2MGItOTkwYS00NmVjLTk5ZTktZWEwNTIxMTVkYWZmXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 8</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/eiCdCrtq1"></iframe>
      <h3 class="vid-title">Tập 9: Nhật ký du hành Undead của Brightonberry</h3>

      <div class="box-img">
          <img src="img/MV5BYTQzNWFlZDItNGUwOS00MWQ5LWEzYjktNTVjYTJiNjEwOTczXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 9</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/Ar14ZRYqW"></iframe>
      <h3 class="vid-title">Tập 10: Sự náo động của ong</h3>

      <div class="box-img">
          <img src="img/lwa-ep-10-_00028.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 10</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/d4yUSvfoq"></iframe>
      <h3 class="vid-title">Tập 11: Trăng xanh</h3>

      <div class="box-img">
          <img src="img/MV5BZjJkYTI0NmItY2U3MC00OTJmLWE3MWEtMTlhODhlMzhkNTNjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 11</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/kbGLsgKtO"></iframe>
      <h3 class="vid-title">Tập 12: Bạn sẽ làm gì</h3>

      <div class="box-img">
          <img src="img/images (41).jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 12</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/PejzdHO6_"></iframe>
      <h3 class="vid-title">Tập 13: Phép thuật Samhain</h3>

      <div class="box-img">
          <img src="img/lwa13c.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 13</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/Z3uNVf76Q"></iframe>
      <h3 class="vid-title">Tập 14: Ma thuật thời đại mới</h3>

      <div class="box-img">
          <img src="img/MV5BYzIzZmFjZjQtZTkwZi00ODFmLWEyZTYtYTA5NGI0YWVhN2ZlXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 14</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/Cz8iW77cw"></iframe>
      <h3 class="vid-title">Tập 15: Xe lửa</h3>

      <div class="box-img">
          <img src="img/MV5BZTQxY2FkNzYtNGZlOC00ZWZiLThkMmItNjBlYmY2NDVhZmYyXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 15</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/1m0KtKQim"></iframe>
      <h3 class="vid-title">Tập 16: Thử nghiệm của Pohjola</h3>

      <div class="box-img">
          <img src="img/maxresdefault (7).jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 16</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/5L25lEubh"></iframe>
      <h3 class="vid-title">Tập 17: Amanda O'Neill và Chén Thánh</h3>

      <div class="box-img">
          <img src="img/MV5BM2RlMjVlZGQtNmU2Yy00NWFkLWEwMTktZmJjNDQ2YjJlMmJhXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 17</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/uFhNehd6k"></iframe>
      <h3 class="vid-title">Tập 18: Sky War Stanship</h3>

      <div class="box-img">
          <img src="img/[Leopard-Raws] Little Witch Academia TV - 18 RAW (BS11 1280x720 x264 AAC)_001_27486.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 18</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/zcPqj__uK"></iframe>
      <h3 class="vid-title">Tập 19: Cavendish</h3>

      <div class="box-img">
          <img src="img/Little Witch Academia - 19 - Large 31.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 19</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/pPmTlnvgD"></iframe>
      <h3 class="vid-title">Tập 20: Ý thức và sự nhạy cảm</h3>

      <div class="box-img">
          <img src="img/MV5BODE0MWQ1YmEtZWJlOS00NTczLTljYjAtNWIzYzVhYzg0M2QxXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 20</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/6yMuvoh0x"></iframe>
      <h3 class="vid-title">Tập 21: Wagandea</h3>

      <div class="box-img">
          <img src="img/WitchTV_21_1-700x385.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 21</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/kYDYqU38R"></iframe>
      <h3 class="vid-title">Tập 22: Xe ngựa và cây thập tự</h3>

      <div class="box-img">
          <img src="img/Little Witch Academia - 22 - Large 08.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 22</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/7G04SQvjk"></iframe>
      <h3 class="vid-title">Tập 23: Hôm qua</h3>

      <div class="box-img">
          <img src="img/5639002de9d58b21a_w.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 23</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/ElBBtIQrY"></iframe>
      <h3 class="vid-title">Tập 24: Đường đến Arcturus</h3>

      <div class="box-img">
          <img src="img/MV5BYzg5OTZjZGMtMmQ3Ni00NDAxLTllY2UtZmM1NDMyN2ZiZTcyXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 24</h2></div>
  </div>
</a>

<!--box1------------------------------------------>
<a href="#videoplay">
  <div class="vid">
      <iframe src="https://short.ink/i1EfxXwCr"></iframe>
      <h3 class="vid-title">Tập 25: Cây ước mơ</h3>

      <div class="box-img">
          <img src="img/Akko_with_Fuel_Spirit-charged_Shiny_Rod-Grand_Triskellion_and_Diana_standing_side_by_side_LWA_25.webp" alt="" class="img"></div>

      <div class="box-text">
          <h2 class="box-title">Tập 25</h2></div>
  </div>
</a>



  </div>
  </div>
  </section>

        
      `;
    }
  }
customElements.define('littlewvideo-component', littlewvideo);

/* Little Witch Academia movie --------------------------------------------------------------------------------------------------------------*/
class littlewmSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a83.html">
          <div class="box-img">
          <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a85.html">
          <div class="box-img">
          <img src="img/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="1-little-witch-acadeima-movie-2.html">
          <div class="box-img">
          <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewmseason-component', littlewmSeason);


/* Little Witch Academia movie --------------------------------------------------------------------------------------------------------------*/
class littlewm1Season extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a83.html">
          <div class="box-img">
          <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="1-little-witch-academia-movie-1.html">
          <div class="box-img">
          <img src="img/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="a84.html">
          <div class="box-img">
          <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewm1season-component', littlewm1Season);



/* hensuki ---------------------------------------------------------------------*/
class henseason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <!--box7--------------------------------------------->
      <li class="movie-box">
          <a href="#season1">
              <div class="box-img">
              <img src="https://ih1.redbubble.net/image.3824876992.2673/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Hensuki</h2>
                  <h2 class="title2">"Lọ Lem Quần Lót"</h2></div>
              </a>
          </li>
     
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season1">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
  
      <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid active">
          <iframe src="https://short.ink/rK0z8U0gK"></iframe>
          <h3 class="vid-title">Tập 1</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 1</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/ymBD73Mtf"></iframe>
          <h3 class="vid-title">Tập 2</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 2</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/A_whLVlez"></iframe>
          <h3 class="vid-title">Tập 3</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 3</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/DHLvVcPGy"></iframe>
          <h3 class="vid-title">Tập 4</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 4</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/kmULx5sd1"></iframe>
          <h3 class="vid-title">Tập 5</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 5</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/tTTLfJKd_G"></iframe>
          <h3 class="vid-title">Tập 6</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 6</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/huB5X5ung"></iframe>
          <h3 class="vid-title">Tập 7</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 7</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/xGMuG7LdE"></iframe>
          <h3 class="vid-title">Tập 8</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 8</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/M6S3WoK3e"></iframe>
          <h3 class="vid-title">Tập 9</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 9</h2></div>
      </div>
    </a>
  
     <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/jWWoN5CJ5"></iframe>
          <h3 class="vid-title">Tập 10</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 10</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/o9b9JFa7r-"></iframe>
          <h3 class="vid-title">Tập 11</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 11</h2></div>
      </div>
    </a>
  
    <!--box1------------------------------------------>
  <a href="#videoplay">
      <div class="vid">
          <iframe src="https://short.ink/Wp29VOwJC"></iframe>
          <h3 class="vid-title">Tập 12</h3>
    
          <div class="box-img">
              <img src="img/screenshot-400.jpg" alt="" class="img"></div>
    
          <div class="box-text">
              <h2 class="box-title">Tập 12</h2></div>
      </div>
    </a>
  
  
          
  
  
  </div>
  </div>
  </section>
  

      `;
    }
  } 
customElements.define('henseason-component', henseason);































/* Avatar The last Season --------------------------------------------------------------------------------------------------------------*/
class avatarSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">
      <h2 class="title">
          <i class='bx bx-list-ul'></i><span>Mùa</span>
      <!--CCCC-->
          <div class="season-list">
              <div class="swiper-wrapper">
                  
                <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s1/1.html">Season 1</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s2/1.html">Season 2</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s3/1.html">Season 3</a></li></div>

                            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </h2>
      <section>
      `;
    }
  } 
customElements.define('avatarseason-component', avatarSeason);

/* Avatar The Last s1 video --*/
class avatarthelastvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">
      <h2 class="title">
          <i class='bx bx-list-ul'></i><span>Mùa</span>
      <!--CCCC-->
          <div class="season-list">
              <div class="swiper-wrapper">
                  
                <div class="swiper-slide">
                      <li><a href="#season1">Season 1</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s2/1.html">Season 2</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s3/1.html">Season 3</a></li></div>

                            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </h2>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYWM2NjM1N2UtYTNmZC00ZDA5LWE3OTktNmZmYmMxNzJiZjdlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/2.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTI2ZDcyZmMtZTAyNS00MWM2LTk3ZDctODUzZDk2ZTdjYmRkXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYmYxNTViMTUtZjVlMi00OTE2LWJjYzQtN2I0NThjNjUxNjQzXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/4.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNmU5OGFhZGMtOGM3Ni00MjEzLWJjOGEtMThiOTU0MDBlNWRkXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/5.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZjJiZDI0ZDUtMDQyZi00Njc4LWJiMjktYTViNjhjMWRkMjhiXkEyXkFqcGdeQXVyMTEzNDQ1MTIy._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/6.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYTcyMWZmZGYtZmJiYy00NTBhLWFlMWQtOTYzOTg2NzkxMjJjXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiJ9V1ZTsnycT1-bgfxEZa6xB3trbBxo3InaKGrZE5fa5tZ-8Q0fQJ0ImDmNe73o1fuU&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/8.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BOWM4YzNlNjEtODYzYi00MWEyLTliMmUtYmQxMjUyMDc5ZjcyXkEyXkFqcGdeQXVyNjg5MDA1NjY@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/9.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTk4OTc0NDYyMV5BMl5BanBnXkFtZTgwMjYyMzg3MjE@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/10.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BOTFmYmI3ZDctZGNjZS00NzkxLWFhOTQtMzMzMzk0MjQzODQ5XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/11.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZjE1YWQ4OGYtYTRjNC00OGY4LTk0NzgtMzFkMDM4MTQ1NWYxXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/12.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTUxYWU1YjQtODE5My00YWUzLTg5ZTUtZmQyOGIxODU0ZTk0XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/13.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNjhlZjIzZDctNDljOS00Yzk1LWI4NjEtOGVmYjMyMmY0MWJjXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/14.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyIe4sxfLSF06WfXc4U3ijyESlRrINEPI5Wslfu9_p9MWze71GccmIXpRMSYJWv5aGz4&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 14</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/15.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZGZmY2YwNWUtNjYyNy00YjU0LWEwM2UtMjk0YjA1MTMyZmEzXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 15</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/16.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BNDczZDU2OGYtNWVmMy00ZjQzLTg2MTUtZDQwYjFjN2IzOWE4XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 16</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/17.html">
                  <div class="box-img">
                  <img src="https://cfm.yidio.com/images/tv/946/19785/episode-image-400x225.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 17</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/18.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BM2ZjYTI5YmEtZmQxMy00YTcwLWJkMDMtZGVlMjg5ZDE5ZjE4XkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 18</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/19.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BZWEyODY5NDctZGU0ZS00MTFiLTgyNjYtYTExOGYxZDEyYTI1XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 19</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/20.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BOTUxMzc0ZmUtYmFjNC00ZDFkLWE5Y2QtN2Y5M2VmOWQ4NThmXkEyXkFqcGdeQXVyOTIzNDcxNDA@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 20</h2></div>
                  </a>
              </li>



  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('avatarthelastvideo1-component', avatarthelastvideo);
















































































/* Kho phim cho Random --------------------------------------------------------------------------------------------------------------*/
class khophim extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="storage" style="display:none">

    <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a1.html"> 
                    <div class="box-img">
                    <img src="img/Jujutsu_Kaisen_s1.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thuật Hồi Chiến</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="a2.html">
                    <div class="box-img">
                    <img src="img/spiderverse2.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Spider Man</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Across The Spider Verse</h2></div>
                </div>    

            <!--box2------------------------------------------>
            <div class="movie-box">
                <a href="a3.html">
                    <div class="box-img">
                    <img src="img/mob-100-s1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>    

            


            <!--box5-------------------------------------------->
            <div class="movie-box">
                <a href="a5.html">
                    <div class="box-img">
                    <img src="img/Puss_in_Boots_The_Last_Wish_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Puss in Boots</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Last Wish</h2></div>
                </div>    

            <!--box1------------------------------------------>
            <div class="movie-box">
            <a href="a6.html">
                <div class="box-img">
                <img src="img/Monsters-vs-Aliens-2009-poster.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Monsters vs Aliens</h2></div>
                <div class="low-text">
                    <h2 class="title2">-2009-</h2></div>
            </div>

        <!--box7--------------------------------------------->
        <div class="movie-box">
            <a href="a7.html">
                <div class="box-img">
                <img src="img/Kung_fu_panda_poster.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Kung Fu Panda</h2></div>
                <div class="low-text">
                    <h2 class="title2">Gấu Trúc KungFu</h2></div>
            </div>
            
        <!--box6-------------------------------------------->
            <div class="movie-box">
            <a href="a8.html">
                <div class="box-img">
                <img src="img/adventure-time.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Adventure Time</h2></div>
                <div class="low-text">
                    <h2 class="title2">Giờ Phiêu Lưu</h2></div>
            </div>

        <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a9.html">
                    <div class="box-img">
                    <img src="img/knieves-out.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Knives out</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Đâm Lén</h2></div>
                </div>

        <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a10.html">
                    <div class="box-img">
                    <img src="img/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Ma Trận</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a11.html">
                    <div class="box-img">
                    <img src="img/gravity-fall.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thị Trấn Bí Ẩn</h2></div>
                </div>

                <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="a12.html">
                    <div class="box-img">
                    <img src="img/Angry_Birds_2016_film_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Angry Birds</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a13.html">
                    <div class="box-img">
                    <img src="img/a13.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Tangled</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Người Đẹp Tóc Mây</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a100.html"> 
                    <div class="box-img">
                    <img src="img/138022.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                
                    
                </a>
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thuật Hồi Chiến</h2></div>
                        
                </div>

                <!--box2------------------------------------------>
            <div class="movie-box">
                <a href="a101.html">
                    <div class="box-img">
                    <img src="img/616-6TNyRmL.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>  

                <!--box1------------------------------------------>
                <div class="movie-box">
                    <a href="a14.html">
                        <div class="box-img">
                        <img src="img/a14.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Fantastic Mr Fox</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Gia Đình Nhà Cáo</h2></div>
                    </div>

                <!--box2------------------------------------------>
                <div class="movie-box">
                    <a href="a15.html">
                        <div class="box-img">
                        <img src="img/a15.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Pacific Rim</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Siêu Đại Chiến</h2></div>
                    </div>
                   

                <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="a17.html">
                    <div class="box-img">
                    <img src="img/a17.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Spider Man</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Into The Spider Verse</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="a18.html">
                    <div class="box-img">
                    <img src="img/a18.avif" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ready player one</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đấu Trường Ảo</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="a19.html">
                    <div class="box-img">
                    <img src="img/a19.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Bloodlust</h2></div>
                </div>

                

                <!--box5-------------------------------------------->
                <div class="movie-box">
                    <a href="a21.html">
                        <div class="box-img">
                        <img src="img/a21.webp" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">The Big Bad Fox</h2></div>
                        <div class="low-text">
                            <h2 class="title2">and Other Tales</h2></div>
                    </div>

                <!--box6-------------------------------------------->
                <div class="movie-box">
                    <a href="a22.html">
                        <div class="box-img">
                        <img src="img/a22.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Resident evil </h2></div>
                        <div class="low-text">
                            <h2 class="title2">Death Island</h2></div>
                    </div>

                


            <!--box5-------------------------------------------->
            <div class="movie-box">
                <a href="a26.html">
                    <div class="box-img">
                    <img src="img/a26.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Heart of Stone</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Trái Tim Sắt Đá</h2></div>
                </div>

            <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="a27.html">
                    <div class="box-img">
                    <img src="img/mảiio.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Super Mario Bros</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Anh em Mario</h2></div>
                </div>


            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a29.html">
                    <div class="box-img">
                    <img src="img/a29.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Corpse Bride</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cô Dâu Ma</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a30.html">
                    <div class="box-img">
                    <img src="img/rise_of_the_guardians.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vệ Thần Trỗi Dậy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Rise Of The Guardians</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a31.html">
                    <div class="box-img">
                    <img src="img/a31.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2></div>
                    <div class="low-text">
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                </div>

            <!--box1------------------------------------------>
            <div class="movie-box">
                <a href="a32.html">
                    <div class="box-img">
                    <img src="img/a32.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Big Hero 6</h2></div>
                    <div class="low-text">
                        <h2 class="title2">6 Đại Anh Hùng</h2></div>
                </div>


            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a35.html">
                    <div class="box-img">
                    <img src="img/a35.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a36.html">
                    <div class="box-img">
                    <img src="img/a36.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Boy, The Mole</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Fox and The Horse</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a37.html">
                    <div class="box-img">
                    <img src="img/a37.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Miss Kobayashi's</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Dragon Maid</h2></div>
                </div> 

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a38.html">
                    <div class="box-img">
                    <img src="img/summer-war.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Summer Wars</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cuộc Chiến Mùa Hè</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a39.html">
                    <div class="box-img">
                    <img src="img/a39.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ernest & Celestine</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tình Bạn Gấu và Chuột</h2></div>
                </div>

            
            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a40.html">
                    <div class="box-img">
                    <img src="img/jsdom.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Justice League</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Doom</h2></div>
                </div>
            

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a42.html">
                    <div class="box-img">
                    <img src="img/a42.png" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Despicable Me</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Mặt Trăng</h2></div>
                </div>

            
                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a45.html">
                    <div class="box-img">
                    <img src="img/Warcraft_Teaser_Poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Warcraft</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                </div>


                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a46.html">
                    <div class="box-img">
                    <img src="img/a46.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ponyo</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a43.html">
                    <div class="box-img">
                    <img src="img/a43.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                </div>
               

               

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a51.html">
                    <div class="box-img">
                    <img src="img/a51.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Madagascar 2</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                </div>

                 <!--box2------------------------------------------>
            <div class="movie-box">
                <a href="a102.html">
                    <div class="box-img">
                    <img src="img/a111111.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>  

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a59.html">
                    <div class="box-img">
                    <img src="img/a59.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen 0</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thuật Hồi Chiến 0</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a60.html">
                    <div class="box-img">
                    <img src="img/a60.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Kung Fu Panda 2</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gấu Trúc KungFu 2</h2></div>
                </div> 

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a61.html">
                    <div class="box-img">
                    <img src="img/Kung_Fu_Panda_3_vietnam.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Kung Fu Panda 3</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gấu Trúc KungFu 3</h2></div>
                </div> 

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a62.html">
                    <div class="box-img">
                    <img src="img/a62.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Angry Birds 2</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
                </div>

                <!--box1------------------------------------------>
            <div class="movie-box">
                <a href="a34.html">
                    <div class="box-img">
                    <img src="img/a34.jpg" alt="" class="img"></div>
                </a>
                <div class="box-text">
                    <h2 class="title">Harry Potter</h2></div>
                <div class="low-text">
                    <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
            </div>

                <!--box4-------------------------------------------->
        <div class="movie-box">
            <a href="a20.html">
                <div class="box-img">
                <img src="img/Honor Among Thieves.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Dungeon & Dragon</h2></div>
                <div class="low-text">
                    <h2 class="title2">Danh Dự Của Kẻ Trộm</h2></div>
            </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a47.html">
                    <div class="box-img">
                    <img src="img/season-1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>

                

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a44.html">
                    <div class="box-img">
                    <img src="img/A16729-1922599907.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Overlord</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
                </div>

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a106.html">
                    <div class="box-img">
                    <img src="img/fda103f8a5f027c919c00baab9b4f675.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a48.html">
                    <div class="box-img">
                    <img src="img/Dragon_Age_Absolution_poster_art.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Dragon Age</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Absolution</h2></div>
                </div>

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a57.html">
                    <div class="box-img">
                    <img src="img/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Devil May Cry</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
                </div> 

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a63.html">
                    <div class="box-img">
                    <img src="img/Bayonetta_Bloody_Fate_poster.png" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Bayonetta</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Blood Fate</h2></div>
                </div> 

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a64.html">
                    <div class="box-img">
                    <img src="img/overlord-2018.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Overlord</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chiến Dịch Overlord</h2></div>
                </div> 

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a67.html">
                    <div class="box-img">
                    <img src="img/a67.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Good Will Hunting</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chàng Will Tốt Bụng</h2></div>
                </div> 

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a65.html">
                    <div class="box-img">
                    <img src="img/The_Hitman_Bodyguard_VN_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vệ Sĩ Sát Thủ</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Hitman's Bodyguard</h2></div>
                </div> 

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a66.html">
                    <div class="box-img">
                    <img src="img/super-bad.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">SuperBad</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Siêu Tệ Hại</h2></div>
                </div> 

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a68.html">
                    <div class="box-img">
                    <img src="img/ninja-rua-mutant-mayhem.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ninja Rùa</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                </div> 

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a104.html">
                    <div class="box-img">
                    <img src="img/Overlord_II_Season_2.webp" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Overlord</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lạc vào thế giới game</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a55.html">
                    <div class="box-img">
                    <img src="img/toy-story.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Toy Story</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Câu Chuyện Đồ Chơi</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a69.html">
                    <div class="box-img">
                    <img src="img/Bìa_nhân_vật_anime_Go-Tōbun_no_Hanayome.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gotōbun no Hanayome</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a94.html">
                    <div class="box-img">
                    <img src="img/6033158_1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Movie</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a109.html">
                    <div class="box-img">
                    <img src="img/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img">
                
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gotōbun no Hanayome</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a70.html">
                    <div class="box-img">
                    <img src="img/a70.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Witch Craft Works</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a71.html">
                    <div class="box-img">
                    <img src="img/a71.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a72.html">
                    <div class="box-img">
                    <img src="img/Justice_League-Crisis_On_Two_Earths.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Justice League</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Crisis On Two Earths</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a73.html">
                    <div class="box-img">
                    <img src="img/howl-moving.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Howl Moving Castle</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div>
                </div>
               
                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a74.html">
                    <div class="box-img">
                    <img src="img/one-more-time-2023.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">One More Time</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Sống Lại Tuổi 18</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a75.html">
                    <div class="box-img">
                    <img src="img/belle.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Belle</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a76.html">
                    <div class="box-img">
                    <img src="img/rikka.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">TV Series</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>


                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a113.html">
                    <div class="box-img">
                    <img src="img/56643.jpg" alt="" class="img">
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">TV Series</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>


                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a77.html">
                    <div class="box-img">
                    <img src="img/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Rikka Version</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a95.html">
                    <div class="box-img">
                    <img src="img/Love,_Chunibyo_&_Other_Delusions!_Take_on_Me_promotional_art.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Take One Me</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>

                 
            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a24.html">
                    <div class="box-img">
                    <img src="img/Princess_Mononoke.webp" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Prince Mononoke</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Công Chúa Mononoke</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a78.html">
                    <div class="box-img">
                    <img src="img/paprika.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Paprika</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Giấc Mơ</h2></div>
                </div>

               <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a80.html">
                    <div class="box-img">
                    <img src="img/91XY1nLj1XL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Cô Gái Ngoại Tộc</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Girl From the Other Side</h2></div>
                </div>
               
                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a107.html">
                    <div class="box-img">
                    <img src="img/nhzhxo7a7ye41.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a50.html">
                    <div class="box-img">
                    <img src="img/shaun-sheep.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Shaun the Sheep</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cừu Quê Ra Phố</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a81.html">
                    <div class="box-img">
                    <img src="img/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Josee</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Khi Nàng Thơ Yêu</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a105.html">
                    <div class="box-img">
                    <img src="img/Overlord_III.jpg" alt="" class="img">
                
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Overlord</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lạc vào thế giới game</h2></div>
                </div>

                <!--box4-------------------------------------------->
            <div class="movie-box">
                <a href="a25.html">
                    <div class="box-img">
                    <img src="img/Akira.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Akira</h2></div>
                    <div class="low-text">
                        <h2 class="title2">-Siêu Phẩm-</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a82.html">
                    <div class="box-img">
                    <img src="img/peter-rabit.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Peter Rabbit</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thỏ Peter</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a83.html">
                    <div class="box-img">
                    <img src="img/little-witch-acadimia.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>

                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a85.html">
                    <div class="box-img">
                    <img src="img/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Original</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a84.html">
                    <div class="box-img">
                    <img src="img/91ZJMLi35GL.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cuộc Diễu Hành Mê Hoặc</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a108.html">
                    <div class="box-img">
                    <img src="img/p19842843_b_v13_aa.jpg" alt="" class="img">
                
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 4</h2></div>
                
                </div>
                </a>
                <div class="box-text">
                    <h2 class="title">Castlevania</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a86.html">
                    <div class="box-img">
                    <img src="img/ffi_robots_ka_584x800_us_d2d5ecd4.jpeg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Robots</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thành Phố Robot</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a87.html">
                    <div class="box-img">
                    <img src="img/Hensuki_characters.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Hensuki</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lọ Lem Quần Lót</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a88.html">
                    <div class="box-img">
                    <img src="img/chickec-run.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Chicken Run</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Phi Đội Gà Bay</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a89.html">
                    <div class="box-img">
                    <img src="img/Porco_Rosso_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Porco Rosso</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Heo Màu Đỏ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a90.html">
                    <div class="box-img">
                    <img src="img/p23609_p_v8_aj.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Iron Giant</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Người Khổng Lồ Sắt</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a91.html">
                    <div class="box-img">
                    <img src="img/power-ranger.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mighty Morphin</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Power Ranger</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a79.html">
                    <div class="box-img">
                    <img src="img/Promare_Key_Visual.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Promare</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Giao Thức Promare</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a98.html">
                    <div class="box-img">
                    <img src="img/Season_2_Teaser_Visual_1.webp" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                <div class="box-text">
                    <h2 class="title">Miss Kobayashi's</h2></div>
                <div class="low-text">
                    <h2 class="title2">Dragon Maid</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a92.html">
                    <div class="box-img">
                    <img src="img/MV5BMTQwOTg2MjU0OV5BMl5BanBnXkFtZTcwMzIzNTQzMQ@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Open Season</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Mùa Săn Bắn</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a99.html">
                    <div class="box-img">
                    <img src="img/pHLgiQRg.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Special</h2></div>
                </div>
                </a>
                <div class="box-text">
                    <h2 class="title">Miss Kobayashi's</h2></div>
                <div class="low-text">
                    <h2 class="title2">Dragon Maid</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a99.html">
                    <div class="box-img">
                    <img src="img/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.webp" alt="" class="img">
                
                    
                </div>
                </a>
                <div class="box-text">
                    <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                <div class="low-text">
                    <h2 class="title2">Special</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a111.html">
                    <div class="box-img">
                    <img src="img/d3b21e4903fc40408914303eed1f1c6c.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Lite</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="a112.html">
                    <div class="box-img">
                    <img src="img/71MSGMD4c8L._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ona</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                </div>
    
                
</section>
    `;
  }
} 
customElements.define('khophim-component', khophim);







/* active next page */
const navLinkc = document.querySelectorAll('.relate-content .relate-list li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })

/* active next page */
const navLinko = document.querySelectorAll('.season .season-content li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })

/* active next page */
const navLinkp = document.querySelectorAll('.season-content2 .season2-list li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })



const navLinkq = document.querySelectorAll('.season .season-list li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

const navLinkz = document.querySelectorAll('.video-list .list-content li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})



var swiper = new Swiper(".season-content", {
    slidesPerView: 4,

    scrollbar: {
      el: ".swiper-scrollbar",
    },

  });


/* Popular Swiper */
var swiper = new Swiper(".popular-content", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 10.5,
  autoplay: {
    delay: 2200,
    
    disableOnInteraction: false,
  },
  
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* Popular Swiper */
var swiper = new Swiper(".popularphone-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,
    autoplay: {
      delay: 2200,
      
      disableOnInteraction: false,
    },
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/* Phimle Swiper */
var swiper = new Swiper(".phimle-content", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10.5,
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Phimle Swiper */
var swiper = new Swiper(".phimle2-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* phim bo Swiper */
var swiper = new Swiper(".phimbo-content", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10.5,

    autoplay: {
        delay: 2100,
        
        disableOnInteraction: false,
      },

  });

  /* phim bo Swiper */
var swiper = new Swiper(".phimbo2-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,

    autoplay: {
        delay: 2100,
        
        disableOnInteraction: false,
      },

  });

  

/* Popular2 Swiper */
var swiper = new Swiper(".popular-content2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
  });

 /* Void Swiper */
var swiper = new Swiper(".void-content", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    autoplay: {
      delay: 122000,
      
      disableOnInteraction: false,
    },
    
  });



/* Number Page */
var swiper = new Swiper(".pagenumber-content", {
  slidesPerView: 3,
  spaceBetween: 1,
  
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








/* video */
let listVideo = document.querySelectorAll('.video-list .vid');

let mainVideo = document.querySelector('.main-video video');

let mainiframe = document.querySelector('.main-video iframe');

let title = document.querySelector('.main-video .tap');

listVideo.forEach(iframe =>{
    iframe.onclick = () =>{
      listVideo.forEach(vid => vid.classList.remove('active'));
      iframe.classList.add('active');
      if(iframe.classList.contains('active')){
        let src = iframe.children[0].getAttribute('src');
        mainiframe.src = src;
  
  
      let text = iframe.children[1].innerHTML;
      title.innerHTML = text;
      
    };
    };
  });








/* Random */
movies = document.querySelectorAll('.movie-box');

random1 = document.querySelector('.random1');
random2 = document.querySelector('.random2');
random3 = document.querySelector('.random3');
random4 = document.querySelector('.random4');
random5 = document.querySelector('.random5');
random6 = document.querySelector('.random6');


for (let i=0; i< 550 ; i++) {  
    var random = Math.floor(Math.random()*movies.length);
    random1.innerHTML = movies[random] .innerHTML;
}

for (let i=0; i< 550 ; i++) {  
    var number = Math.floor(Math.random()*movies.length);
    random2.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 550 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random3.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 550 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random4.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 500 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random5.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 560 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random6.innerHTML = movies[number].innerHTML;
}




/* show hidden */
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}


/* SEARCH */
let search = document.getElementById('search');
let search_result = document.getElementsByClassName('search_result')[0];

window.addEventListener('load', () => {
    movie.forEach(element => {
        const { img, title, year, url } = element;
        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content">
            <h2>${title}</h2>
            <p>${year}</p>
        </div>`;
        search_result.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toLowerCase();
    let a = search_result.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content')[0];
        let c = b.getElementsByTagName('h2')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_result.style.visibility ="visible";
            search_result.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_result.style.visibility ="hidden";
            search_result.style.opacity = 0;
        }
    }
})



//movie box set

const movie = [
  
  {
    id: 43,
    img: "https://www.themoviedb.org/t/p/w780/1zs8iKZMKrtIh2MulIwwU6Gs9EK.jpg",
    title: "Vampire Hunter D<br>Thợ săn ma cà rồng",
    letter: "v",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1985,
    rate: 7.3,
    url: "a43.html",
    msot: "movie"
  },

  {
    id: 42,
    img: "https://image.tmdb.org/t/p/w1280//euCnMxNRlHNxA4f9BMnWbmxPOse.jpg",
    title: "Despicable me<br>Tôi ti tiện",
    letter: "d",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2003,
    rate: 7.3,
    url: "a42.html",
    msot: "movie"
  },

  {
    id: 41,
    img: "https://www.awn.com/sites/default/files/styles/original/public/image/featured/lastairbender-1280.jpg?itok=YwJieyrG",
    title: "Avatar: The Last Airbender",
    letter: "a",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "a41.html",
    msot: "movie"
  },

  {
    id: 40,
    img: "https://images.hdqwalls.com/wallpapers/justice-league-doom-sl.jpg",
    title: "Justice League-Doom<br>Liên minh công lý",
    letter: "j",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "a40.html",
    msot: "movie"
  },

  {
    id: 39,
    img: "https://gkids.com/wp-content/uploads/2018/06/ernest_hires_1.jpg",
    title: "ernest & celestine<br> Tình bạn Gấu và Chuột",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "a39.html",
    msot: "movie"
  },

  {
    id: 38,
    img: "https://hanayukichan.files.wordpress.com/2016/01/summer-wars-promotional-poster.jpg?w=1200",
    title: "Summer Wars<br>Cuộc chiến mùa hè",
    letter: "c",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2009,
    rate: 7.3,
    url: "a38.html",
    msot: "movie"
  },

  {
    id: 37,
    img: "https://static.lag.vn/upload/news/20/08/10/Kobayashi-san_Chi_no_Maid_Dragon-1_PXET.jpg?w=800&encoder=wic&subsampling=444",
    title: "Miss Kobayashi's Dragon Maid<br>Hầu gái rồng nhà Kobayashi",
    letter: "d",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2017,
    rate: 7.3,
    url: "a37.html",
    msot: "movie"
  },

  {
    id: 36,
    img: "https://img.phimmoichillg.net/images/film/cau-be-chuot-chui-cao-va-ngua.jpg",
    title: "Cậu Bé, Chuột Chũi,<br>Cáo Và Ngựa",
    letter: "C",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2022,
    rate: 7.3,
    url: "a36.html",
    msot: "movie"
  },

  {
    id: 35,
    img: "https://visada.me/wp-content/uploads/2023/06/55353-35717.webp",
    title: "Madagascar",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "a35.html",
    msot: "movie"
  },

  {
    id: 34,
    img: "https://danhkhoireal.vn/wp-content/uploads/2023/06/harry-potter-va-hon-da-phu-thuy-1.jpg",
    title: "Harry Potter<br>và Hòn đá Phù thủy",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2001,
    rate: 7.3,
    url: "a34.html",
    msot: "movie"
  },

  {
    id: 33,
    img: "https://m.media-amazon.com/images/M/MV5BMjMxOTU2MDI5OV5BMl5BanBnXkFtZTgwODUwNjgzMDI@._V1_.jpg",
    title: "Trolls<br>Quỷ lùn tinh nghịch",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2016,
    rate: 7.3,
    url: "a33.html",
    msot: "movie"
  },

  {
    id: 32,
    img: "https://cdn.vox-cdn.com/thumbor/76VmDKMiwJ6V3XMBLxnkwz9pxGs=/62x0:1862x1350/1400x788/filters:focal(62x0:1862x1350):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44274110/big-hero-6.0.0.jpg",
    title: "Big Hero 6<br>6 đại anh hùng",
    letter: "b",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "a32.html",
    msot: "movie"
  },

  {
    id: 31,
    img: "https://static01.nyt.com/images/2010/03/26/movies/26dragonspan-1/26dragonspan-1-articleLarge.jpg",
    title: "How to train your dragon<br>Bí kíp luyện rồng",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2003,
    rate: 7.3,
    url: "a31.html",
    msot: "movie"
  },

  {
    id: 30,
    img: "https://ichef.bbci.co.uk/images/ic/1200x675/p07xpf6l.jpg",
    title: "Rise of the guardians<br>Sự trỗi dậy của các Vệ thần",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "a30.html",
    msot: "movie"
  },

  {
    id: 29,
    img: "https://m.media-amazon.com/images/M/MV5BOTI0MjI5NzQ1MF5BMl5BanBnXkFtZTcwNTgwNzgyMw@@._V1_.jpg",
    title: "Corpse Bride<br>Cô dâu ma",
    letter: "c",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "a29.html",
    msot: "movie"
  },


  {
    id: 28,
    img: "https://media.vov.vn/sites/default/files/styles/large/public/2021-01/tom_-_jerry.jpg",
    title: "Tom và Jerry<br>Collection",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1940,
    rate: 7.3,
    url: "a28.html",
    msot: "movie"
  },

  {
    id: 27,
    img: "https://m.media-amazon.com/images/M/MV5BYjMxOWJjNzUtYzVjYS00NGNlLWI1YWQtMDk3MWZlZDU4OWFkXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg",
    title: "Super Mario Bros<br>Anh em Mario",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "a27.html",
    msot: "movie"
  },

  {
    id: 26,
    img: "https://ntvb.tmsimg.comstatics/p23905086_v_h8_aa.jpg?ihspl",
    title: "Heart of Stone<br>Trái tim sắt đá",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "a26.html",
    msot: "movie"
  },

  {
    id: 25,
    img: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a2b3029e9cce3ba587f3f499baa3d611.jpe",
    title: "Akira",
    letter: "a",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1988,
    rate: 7.3,
    url: "a25.html",
    msot: "movie"
  },

  {
    id: 24,
    img: "https://static2.yan.vn/YanNews/2167221/201810/previewmedium-845620e0.jpg",
    title: "Princess Mononoke<br>Công chúa Mononoke",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1997,
    rate: 7.3,
    url: "a24.html",
    msot: "movie"
  },

  {
    id: 23,
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/A99C/production/_119702434_hotfuzz_swam_alamy.jpg",
    title: "Hot Fuzz<br>Siêu Cớm",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2007,
    rate: 7.3,
    url: "a23.html",
    msot: "movie"
  },

  {
    id: 22,
    img: "https:/statics-prd.ignimgs.com/2023/07/26/re-death-island-1690379861492.jpg",
    title: "Resident Evil<br>Death Island",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "a22.html",
    msot: "movie"
  },

  {
    id: 21,
    img: "https://m.media-amazon.com/images/M/MV5BZGNlMDk1N2QtZjE4Ni00Yjg5LWEwY2EtMTBmZDkzODNhNTNhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    title: "Sói già gian ác<br>và những câu chuyện khác",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2017,
    rate: 7.3,
    url: "a21.html",
    msot: "movie"
  },

  {
    id: 20,
    img: "https://images.thedirect.com/media/article_full/dungeons-and-dragons-honor-among-thieves-cast-characters.jpg",
    title: "Ngục tối và rồng<br>Danh dự của kẻ trộm",
    letter: "n",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "a20.html",
    msot: "movie"
  },


  {
    id: 19,
    img: "https://onderhond.com/img/movies/vampire-hunter-d-bloodlust.png",
    title: "Vampire Hunter D: Bloodlust<br>Thợ săn ma cà rồng: Khát máu",
    letter: "V",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2000,
    rate: 7.3,
    url: "a19.html",
    msot: "movie"
  },

  {
    id: 18,
    img: "https://genk.mediacdn.vn/2018/3/31/photo-1-15224620607731943989009.jpeg",
    title: "Ready Player One<br>Đấu trường ảo",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2018,
    rate: 7.3,
    url: "a18.html",
    msot: "movie"
  },

  {
    id: 17,
    img: "https://s3.cloud.cmctelecom.vn/tinhte1/2018/12/4516214_Tinhte_Spider7.jpg",
    title: "Spider man into the spider verse<br>Người nhện: Vũ trụ mới",
    letter: "s",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2018,
    rate: 7.3,
    url: "a17.html",
    msot: "movie"
  },

  {
    id: 16,
    img: "https://cosmicbook.news/wp-content/uploads/2022/07/new-look-predator-prey.jpg",
    title: "Prey<br>Quái Thú Vô Hình: Con Mồi",
    letter: "p",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2022,
    rate: 7.3,
    url: "a17.html",
    msot: "movie"
  },

  {
    id: 15,
    img: "https://im.ziffdavisinternational.com/ign_ap/screenshot/a/awesome-new-pacific-rim-promotional-poster-unveile/awesome-new-pacific-rim-promotional-poster-unveile_xrwd.jpg",
    title: "Pacific Rim<br>Siêu đại chiến",
    letter: "p",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "a15.html",
    msot: "movie"
  }, 

  {
    id: 14,
    img: "https://material.asset.catchplay.com/NEW-ID-001-A1024/artworks/posters/NEW-ID-001-A1024-P1200.jpg?hash=1684316446",
    title: "Fantastic Mr Fox<br>Gia đình nhà cáo",
    letter: "f",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2009,
    rate: 7.3,
    url: "a14.html",
    msot: "movie"
  },  



  {
    id: 13,
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/12B94BA855A62BAD0B33230569EF97050344972D1C0F34713A29A35643E54081/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Tangled<br>Người đẹp tóc mây",
    letter: "T",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2010,
    rate: 7.3,
    url: "a13.html",
    msot: "movie"
  },  
  
  
  {
    id: 12,
    img: "https://playandgo.com.au/wp-content/uploads/2016/04/AB_Launch_PP_Quad_Date-630x474.jpg",
    title: "Angry birds movie<br>Những chú chim giận dữ",
    letter: "A",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2016,
    rate: 7.3,
    url: "a12.html",
    msot: "movie"
  },

  {
  id: 11,
    img: "https://static1.dienanh.net/upload/202108/56c3343a-67e0-4f79-a741-6a0f1a3b7883.jpg",
    title: "Gravity Fall<br>Thị Trấn Bí Ẩn",
    letter: "g",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "a11.html",
    msot: "movie"
  },

  {
    id: 10,
      img: "https://toplist.vn/images/800px/ma-tran-470978.jpg",
      title: "The Matrix<br>Ma Trận",
      letter: "M",
      genre1: "none",
      genre2: "none",
      genre3: "none",
      genre4: "none",
      genre5: "none",
      genre6: "none",
      genre7: "none",
      year: 1999,
      rate: 7.3,
      url: "a10.html",
      msot: "movie"
    },

    {
      id: 9,
        img: "https://i0.wp.com/thequeerreview.com/wp-content/uploads/2019/11/image-asset.jpeg?fit=1000%2C563&ssl=1",
        title: "Knives out<br>Kẻ đâm lén",
        letter: "k",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        year: 2019,
        rate: 7.3,
        url: "a9.html",
        msot: "movie"
      },

      {
        id: 8,
          img: "https://upload.wikimedia.org/wikipedia/vi/3/37/Adventure_Time_-_Title_card.png",
          title: "Adventure Time<br>Giờ Phiêu Lưu",
          letter: "A",
          genre1: "none",
          genre2: "none",
          genre3: "none",
          genre4: "none",
          genre5: "none",
          genre6: "none",
          genre7: "none",
          year: 2010,
          rate: 8.7,
          url: "a8.html",
          msot: "movie"
        },

        {
          id: 7,
            img: "https://www.toomva.com/tai-lieu/uploadtvcu/kungfu-panda-1-phu-de.jpg",
            title: "Kung Fu Panda<br>Gấu Trung Kung Fu",
            letter: "k",
            genre1: "none",
            genre2: "none",
            genre3: "none",
            genre4: "none",
            genre5: "none",
            genre6: "none",
            genre7: "none",
            year: 2008,
            rate: 7.3,
            url: "a7.html",
            msot: "movie"
          },

          {
            id: 6,
              img: "https://a.ltrbxd.com/resized/sm/upload/a9/kn/hb/qs/monsters-vs-aliens-70-1200-1200-675-675-crop-000000.jpg?v=051409c691",
              title: "Monsters vs Aliens<br>Quái Vật vs Người ngoài hành tinh",
              letter: "M",
              genre1: "none",
              genre2: "none",
              genre3: "none",
              genre4: "none",
              genre5: "none",
              genre6: "none",
              genre7: "none",
              year: 2009,
              rate: 6.5,
              url: "a6.html",
              msot: "movie"
            },

            {
              id: 5,
                img: "https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Puss-in-Boots-The-Last-Wish-Everett-H-2022.jpg?w=1296",
                title: "Puss in Boots 2<br>Mèo đi hia: Điều ước cuối cùng",
                letter: "P",
                genre1: "none",
                genre2: "none",
                genre3: "none",
                genre4: "none",
                genre5: "none",
                genre6: "none",
                genre7: "none",
                year: 2023,
                rate: 9.0,
                url: "a5.html",
                msot: "movie"
              },

              {
                id: 4,
                  img: "https://occ-0-2433-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg?r=0e5",
                  title: "One Punch Man<br>Anh hùng phồng tôm",
                  letter: "o",
                  genre1: "none",
                  genre2: "none",
                  genre3: "none",
                  genre4: "none",
                  genre5: "none",
                  genre6: "none",
                  genre7: "none",
                  year: 2015,
                  rate: 8.7,
                  url: "a4.html",
                  msot: "movie"
                },

                {
                  id: 3,
                    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/103eaca85fe8e0db784e1f1f52dfdf088c8291c3eaa7a4dbef0217a34306aea1._RI_TTW_.jpg",
                    title: "Mob Psycho 100<br>Cậu bé siêu năng lực",
                    letter: "m",
                    genre1: "none",
                    genre2: "none",
                    genre3: "none",
                    genre4: "none",
                    genre5: "none",
                    genre6: "none",
                    genre7: "none",
                    year: 2016,
                    rate: 7.3,
                    url: "a3.html",
                    msot: "movie"
                  },

                  {
                    id: 2,
                      img: "https://images.thedirect.com/media/article_full/spider-verse-posters_VMqW9U1.jpg",
                      title: "Spider Man: Across spider verse<br>Người Nhện: Du hành đa vũ trụ",
                      letter: "s",
                      genre1: "none",
                      genre2: "none",
                      genre3: "none",
                      genre4: "none",
                      genre5: "none",
                      genre6: "none",
                      genre7: "none",
                      year: 2023,
                      rate: 8.8,
                      url: "a2.html",
                      msot: "movie"
                    },

                    {
                      id: 1,
                        img: "https://img-zlr1.tv360.vn/image1/2022/09/23/11/4d903cf2/4d903cf2-cb6c-4d5e-839b-208bbe7d8623_640_360.jpg",
                        title: "Jujutsu Kaisen<br>Chú Thuật Hồi Chiến ",
                        letter: "J",
                        genre1: "none",
                        genre2: "none",
                        genre3: "none",
                        genre4: "none",
                        genre5: "none",
                        genre6: "none",
                        genre7: "none",
                        year: 2020,
                        rate: 8.5,
                        url: "a1.html",
                        msot: "movie"
                      },


]

let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
});


























