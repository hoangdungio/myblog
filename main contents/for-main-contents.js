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






// phan hieu ung cho part-about-my-information
var my_information = document.querySelector(".part-about-my-information"),
menu_click_information = document.querySelectorAll('.blog-header .menu .inner-menu ul  li .no'),
background_black = document.querySelector(".part-about-my-information .background-black");
// slide tự chuyên động
background_black.onclick = function(){
    // ấn vào nền đen sẽ ẩn phần information đi và slide tự chuyển động
    my_information.classList.add('my-information-hidden');
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