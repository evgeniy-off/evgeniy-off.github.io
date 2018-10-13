$(document).ready(function(){
    

    $('#header').each(function(){
        var $menu = $('#header .mobile-menu');
        var $mobileLink = $('#header .mobile-link');
        var $heroMobile = $('#header .hero-mobile');
        var $knitting = $('.knitting-mobile')

        $menu.on('click', function(){
        $menu.toggleClass('active');
        $mobileLink.toggleClass('active'); 
        $heroMobile.toggleClass('active');  
        $knitting.toggleClass('active');

        });
    });
    
    $('#comments').each(function(){

        var $commentBlock = $('.comments-content');
        var $prev = $('.btn-prev');
        var $next = $('.btn-next');

        $commentBlock.eq(0).addClass('active');
        $prev.on('click', function(){

            var index = $commentBlock.filter('.active').index();
            $commentBlock.eq(index-1).addClass('active').siblings().removeClass('active');
            return false;

        });
 
        $next.click(function(){

            var index = $commentBlock.filter('.active').index();
            if(index ==  $commentBlock.length-1){
                index = -1
                }
            $commentBlock.eq(index +1).addClass('active').siblings().removeClass('active');
            return false;
        });






    });
    $('#knitted-baskets').each(function(){
        var $btnClick = $('#knitted-baskets .btn');
        var $cartBox = $('#knitted-baskets .modal-cart__box');
        var $fillOrder = $('#knitted-baskets .modal-cart__box-fill');
        // var $btnOrder = $('#knitted-baskets .btn-order');

        $btnClick.on('click',function(){
            $cartBox.toggleClass('active');
            $fillOrder.toggleClass('active');
        });
        // $cartBox.on('click',function(){
        //     $cartBox.removeClass('active');
        //     $fillOrder.removeClass('active');
        // });
        $fillOrder.on('click', function(){
            $cartBox.removeClass('active');
            $fillOrder.removeClass('active');
        });
    });

});