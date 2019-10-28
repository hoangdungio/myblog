// khi click vao bieu tuong search thi hop tim kiem hien ra
var button_search = document.querySelector('.right-right');
var box_search = document.querySelector(".search");
var x = document.querySelector(".search .fa-times");
button_search.onclick = function(){
    box_search.classList.toggle("hidden");
}
x.onclick = function(){
    box_search.classList.toggle('hidden');
}
// end khi click vao bieu tuong search thi hop tim kiem hien ra

// hieu ung slide di chuyen cua menu
var button_left = document.querySelectorAll(".list-hover .button-left");
var button_right = document.querySelectorAll(".list-hover .button-right");
var menu_slide = document.querySelectorAll(".slide");
var so_kiem_tra_slide = 0;
for(var i = 0; i < menu_slide.length ; i ++){
    button_right[i].onclick = function(){
        so_kiem_tra_slide = 0;
        for(var i = 0 ; i < menu_slide.length ; i++){
            if(this == button_right[i])
            break;
            so_kiem_tra_slide = so_kiem_tra_slide + 1;
            
        }
        menu_slide[so_kiem_tra_slide].classList.add('view-slide');
    }
    button_left[i].onclick = function(){
       so_kiem_tra_slide = 0;
       for(var i = 0 ; i < menu_slide.length ; i ++){
           if(this == button_left[i])
           break;
           so_kiem_tra_slide = so_kiem_tra_slide + 1;
       }
        menu_slide[so_kiem_tra_slide].classList.remove("view-slide");
       
    }
}
var between_auto_slide = document.querySelector(".between-auto-slide");
var auto_slide =  setInterval(slide_goto_left,13),
    vi_tri_slide = 0;
function slide_goto_left(){
    vi_tri_slide  = vi_tri_slide - 1;
    between_auto_slide.style.left = vi_tri_slide + "px";
    if(vi_tri_slide<-2400)
    vi_tri_slide = 1030;
}
    

between_auto_slide.onmouseleave = function(){
   auto_slide =  setInterval(slide_goto_left,13);
};
between_auto_slide.onmouseenter = function(){
    auto_slide = clearInterval(auto_slide);
   
};

// end hieu ung slide di chuyen

// phan hieu ung cho slide in big news top
var slide_in_left_of_bignewstop = document.querySelectorAll(".main-blog .main-blog-between .big-news-top .left .slide-main-blog");
var button_left_slide_in_left_of_bignewstop = document.querySelector("#mmblbl");
var button_right_slide_in_left_of_bignewstop = document.querySelector("#mmblbr");
var demslide = 0;


button_right_slide_in_left_of_bignewstop.onclick = function(){
    clearInterval(auto_sl);
    demslide = demslide + 1;
    if(demslide==slide_in_left_of_bignewstop.length)
    demslide=0;
    for(var i = 0; i< slide_in_left_of_bignewstop.length ; i++){
        if(demslide == i){
            slide_in_left_of_bignewstop[i].style.zIndex = 8;
        }
        else slide_in_left_of_bignewstop[i].style.zIndex = 1;
    }
    if(demslide == slide_in_left_of_bignewstop.length - 1){
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[demslide-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[0].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[0].classList.add('sang-phai');
    }
    else if(demslide==0){
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
    }
    else{
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[demslide-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
    }
    
    
}
button_left_slide_in_left_of_bignewstop.onclick = function(){
    clearInterval(auto_sl);
    demslide = demslide - 1;
    if(demslide<0) demslide = slide_in_left_of_bignewstop.length-1;
    for(var i = 0; i< slide_in_left_of_bignewstop.length ; i++){
        if(demslide == i){
            slide_in_left_of_bignewstop[i].style.zIndex = 8;
        }
        else slide_in_left_of_bignewstop[i].style.zIndex = 1;
    }
    if(demslide == slide_in_left_of_bignewstop.length-1){
        slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-1].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[0].classList.add('sang-phai');
        slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-2].classList.remove('sang-phai');
        slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-2].classList.add('sang-trai');
    }
    else if(demslide == 0){
       slide_in_left_of_bignewstop[0].classList.remove('sang-trai');
       slide_in_left_of_bignewstop[0].classList.remove('sang-phai');
       slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-1].classList.remove('sang-phai');
       slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-1].classList.add('sang-trai');
       slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
       slide_in_left_of_bignewstop[demslide+1].classList.remove('sang-trai');
    }
    else{
       slide_in_left_of_bignewstop[demslide].classList.remove('sang-trai');
       slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
       slide_in_left_of_bignewstop[demslide-1].classList.add('sang-trai');
       slide_in_left_of_bignewstop[demslide-1].classList.remove('sang-phai');
        
    }
}
// end phan hieu ung cho slide in big news top



// phan hieu ung cho part-about-my-information
var my_information = document.querySelector(".part-about-my-information"),
menu_click_information = document.querySelectorAll('.blog-header .menu .inner-menu ul  li .no'),
background_black = document.querySelector(".part-about-my-information .background-black");


var auto_sl = setInterval(atsl,4000);   
function atsl(){
    demslide = demslide + 1;
    if(demslide==slide_in_left_of_bignewstop.length)
    demslide=0;
    for(var i = 0; i< slide_in_left_of_bignewstop.length ; i++){
        if(demslide == i){
            slide_in_left_of_bignewstop[i].style.zIndex = 8;
        }
        else slide_in_left_of_bignewstop[i].style.zIndex = 1;
    }
    if(demslide == slide_in_left_of_bignewstop.length - 1){
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[demslide-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[0].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[0].classList.add('sang-phai');
    }
    else if(demslide==0){
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[slide_in_left_of_bignewstop.length-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
    }
    else{
        slide_in_left_of_bignewstop[demslide].classList.remove("sang-phai");
        slide_in_left_of_bignewstop[demslide-1].classList.add('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.remove('sang-trai');
        slide_in_left_of_bignewstop[demslide+1].classList.add('sang-phai');
    }
} 

clearInterval(auto_sl);

// slide tự chuyên động
background_black.onclick = function(){
    // ấn vào nền đen sẽ ẩn phần information đi và slide tự chuyển động
    my_information.classList.add('my-information-hidden');
    auto_sl = setInterval(atsl,4000); 
    
}
// end phần slide tự chuyển động
// khi an vao thi se hien thi phan information 
menu_click_information[1].onclick = function(){
    my_information.classList.remove('my-information-hidden');
   clearInterval(auto_sl);
}
// end phan hieu ung cho part-about-my-information\

// PHẦN HIỆU ỨNG CHO BLOG BODY

// ấn vào nút nào nút đấy sẽ chuyển màu xanh
    var nut_of_slide_top_blog_body = document.querySelectorAll('.blog-body .slide-top .menu-slide-top ul li >div'),
    tham_so_xet_xem_dang_o_slide_nao = 0,
    slides = document.querySelectorAll('.blog-body .slide-top .slide-inner'),
    bo_cua_cac_slide = document.querySelector('.blog-body .slide-top');

    
    for(var i = 0; i<nut_of_slide_top_blog_body.length ; i++){
        nut_of_slide_top_blog_body[i].onclick = function(){
            tham_so_xet_xem_dang_o_slide_nao = 0;

            for(var i =0 ;i<nut_of_slide_top_blog_body.length ; i++){
                nut_of_slide_top_blog_body[i].classList.remove('active');
            }
            this.classList.add('active');
            for(var i = 0 ; i<nut_of_slide_top_blog_body.length ; i++){
                if(this==nut_of_slide_top_blog_body[i])
                break;
                tham_so_xet_xem_dang_o_slide_nao = tham_so_xet_xem_dang_o_slide_nao + 1;
            }
            // khi chọn nút nào thì phần slide của nút ấy sẽ hiển thị ra
            for(var i = 0 ; i<slides.length ; i++){
                slides[i].classList.remove('choose');
                slides[i].classList.add('not-choose');
            }
            slides[tham_so_xet_xem_dang_o_slide_nao].classList.remove('not-choose');
            slides[tham_so_xet_xem_dang_o_slide_nao].classList.add('choose');
            bo_cua_cac_slide.setAttribute("data",tham_so_xet_xem_dang_o_slide_nao);
            // end khi chọn nút nào thì phần slide của nút ấy sẽ hiển thị ra
        }
    }
// end ấn vào nút nào nút ấy chuyển màu xanh
   
// khi an vao nut slide se di chuyen
var blog_body_slide_top_slide_inner = document.querySelectorAll('.blog-body .slide-top .slide-inner'),
    BUTTON_LEFT_blog_body_slide_top_slide_inner = document.querySelector('.blog-body .slide-top .menu-slide-top .fa-chevron-left'),
    BUTTON_RIGHT_blog_body_slide_top_slide_inner = document.querySelector('.blog-body .slide-top .menu-slide-top .fa-chevron-right'),
    so_cac_slide = document.querySelectorAll('.blog-body .slide-top .choose .one-slide'),
    lay_thuoc_tinh_data;
    
var tong_so_cac_slide = [];
var tham_so_trung_gian = [];
for(var i = 0 ; i<blog_body_slide_top_slide_inner.length; i++){
    tong_so_cac_slide[i] = so_cac_slide.length /4;
    tham_so_trung_gian[i] = 0;
}
var bien_trung_gian_do_cac_slide = tong_so_cac_slide[0];
    BUTTON_LEFT_blog_body_slide_top_slide_inner.onclick = function(){
        lay_thuoc_tinh_data = document.querySelector('.blog-body .slide-top').getAttribute('data');
        Number(lay_thuoc_tinh_data);
        if(lay_thuoc_tinh_data == null)
        lay_thuoc_tinh_data = 0;

        if(tong_so_cac_slide[lay_thuoc_tinh_data]<bien_trung_gian_do_cac_slide)
        tong_so_cac_slide[lay_thuoc_tinh_data] = tong_so_cac_slide[lay_thuoc_tinh_data] + 1;
        if(tong_so_cac_slide[lay_thuoc_tinh_data] >= bien_trung_gian_do_cac_slide)
        return false;
        tham_so_trung_gian[lay_thuoc_tinh_data] = tham_so_trung_gian[lay_thuoc_tinh_data] + 1174;
        blog_body_slide_top_slide_inner[lay_thuoc_tinh_data].style.transform = 'translateX('+tham_so_trung_gian[lay_thuoc_tinh_data]+'px)';
    }
    BUTTON_RIGHT_blog_body_slide_top_slide_inner.onclick = function(){
        lay_thuoc_tinh_data = document.querySelector('.blog-body .slide-top').getAttribute('data');
        Number(lay_thuoc_tinh_data);
        if(lay_thuoc_tinh_data == null)
        lay_thuoc_tinh_data = 0;
        
        if(tong_so_cac_slide[lay_thuoc_tinh_data]>=2.25%2)
        tong_so_cac_slide[lay_thuoc_tinh_data] = tong_so_cac_slide[lay_thuoc_tinh_data] -1;
        if(tong_so_cac_slide[lay_thuoc_tinh_data]<(2.25%2))
        return false;
        tham_so_trung_gian[lay_thuoc_tinh_data] = tham_so_trung_gian[lay_thuoc_tinh_data] - 1174;
        blog_body_slide_top_slide_inner[lay_thuoc_tinh_data].style.transform = 'translateX('+tham_so_trung_gian[lay_thuoc_tinh_data]+'px)';
        
        
    }
 // end khi an vao nut slide di chuyen
var menu = document.querySelector('.blog-header .menu');
// END PHẦN HIỆU ỨNG CHO BLOG BODY
window.addEventListener('scroll',function(){
    if(window.scrollY<2000)
    back_top.style.visibility = 'hidden';
    if(window.scrollY>2000)
    back_top.style.visibility = 'visible';
    if(window.scrollY>9000)
    back_bottom.style.visibility = 'hidden';
    if(window.scrollY<9000)
    back_bottom.style.visibility = 'visible';
    if(window.scrollY>187)
        menu.style.position = 'fixed';
    if(window.scrollY<187)
        menu.style.position = 'unset';
    
})
// khi click vao nut back-top se di chuyen len dau trang
var back_top = document.querySelector(".back-top");
var back_bottom = document.querySelector('.back-bottom');
back_top.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
back_bottom.onclick = function(){
    window.scrollTo({top : 10000000, behavior: 'smooth'});
}
// end khi click vao nut back-top se di chuyen len dau trang