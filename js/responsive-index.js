var caret_down = document.querySelector('.top-nav .inner .inner-left .fa-caret-square-o-down');
var test = 'andi';
caret_down.onclick = function(){
    if(test == 'andi'){
        document.querySelector('.top-nav .inner .inner-left ul').style.transform = "scaleY(1)";
        
        test = 'hienra';
    }
    else if(test == 'hienra'){
        document.querySelector('.top-nav .inner .inner-left ul').style.transform = "scaleY(0)";
        test = 'andi';
        document.querySelector('.top-nav .inner .inner-left ul').style.zindex = 10;
    }
    
}