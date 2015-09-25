/**
 * 商品模块
 * @author Shann
 */
define(function(require, exports, module) {
    /*
     *显示购物车功能
     *@author yi
     */
    var a = 0;
    $(".extract").find('li').click(function(){
        a++;

    });
    $(".check-btn").click(function(){
        if(a != 0){
            var even = document.getElementById('chi');
            var d = dialog({
                title: 'Chirashi',
                content:even,
            });
            d.showModal();
        }else{
            alert('Please select a delivery method to proceed checkout');
        }
    });
    /*
     *购物车展开信息和收缩信息功能
     *@author yi
     */
    $('.reviews').click(function(){
        var rev = $('.rating-info').css('display');
        if(rev == 'block'){
            $('.rating-info').slideUp();
            $(this).find('img').attr('src','static/images/down.png');
        }else{
            $('.rating-info').slideDown();
            $(this).find('img').attr('src','static/images/direction.png');
        }
    });
    /*
     *购物车鼠标移动选择信息功能
     *@author yi
     */
    $('.choose-list').css('display','none').first().css('display','block');
    $('.choose').find('li').hover(function(){
        var num = $(this).index();
        $('.choose').find('li').removeClass();
        $(this).addClass('choose-on');
        $('.choose-list').css('display','none');
        $('.choose-list').eq(num).css('display','block');
    });
    /*
     *购物车增加购物数量功能
     *@author yi
     */
    
    $('.cut-num').click(function(){
        var num = $('.num-input').val();
        if(num >1){
            num--;
            $('.num-input').val(num);
        }else{
            alert('多少买点嘛');
        }
    });
    $('.add-num').click(function(){
        var num = $('.num-input').val();
        if(num <100){
            num++;
            $('.num-input').val(num);
        }else{
            alert('都给你了');
        }
    });

    module.exports = {
        /*
         *双列功能
         *@author yi
         */
        doubleChange: function() {
            $('.double').click(function() {
                //$('.main-left').css({
                //    width: '460px',
                //    "margin-top": '46px'
                //});
                $('.main-left').animate({
                    width: '460px',
                    "margin-top": '46px'
                }, 200);
                //$('.double-c').css({
                //    display: "block"
                //});
                $('.double-c').slideDown(600);
                //$(".right-menu").css({
                //    display: "none"
                //});
                $(".right-menu").slideUp(200);
                $('.double').css({
                    background: '#0066cb',
                    color: '#fff'
                }).find('img').attr('src', 'static/images/menu_icon_1.png');
                $('.single').css({
                    background: '#fff',
                    color: '#666'
                }).find('img').attr('src', 'static/images/menu_icon_2.png');
            })
        },
        /*
         *单列功能
         *@author yi
         */
        singleChange: function() {
            $('.single').click(function() {
                $('.main-left').animate({
                    width: '565px',
                    "margin-top": '0'
                }, 800);
                //$('.double-c').css({
                //    display: "none"
                //});
                $('.double-c').slideUp(200);
                //$(".right-menu").css({
                //    display: "block"
                //});
                $(".right-menu").slideDown(600);
                $('.single').css({
                    background: '#0066cb',
                    color: '#fff'
                }).find('img').attr('src', 'static/images/menu_icon_1.png');
                $('.double').css({
                    background: '#fff',
                    color: '#666'
                }).find('img').attr('src', 'static/images/menu_icon_2.png');
            })
        },
        /*
         *上拉和下拉功能
         *@author yi
         */
        upAndDown: function() {
            $(".up-down").click(function() {
                var a = $(this).parent().next(".item-list").css("display");
                if (a == "block") {
                    //$(this).parent().next(".item-list").css("display","none");
                    $(this).parent().next(".item-list").slideUp();
                    $(this).find("img").attr("src", "static/images/direction_2.png");
                } else {
                    //$(this).parent().next(".item-list").css("display","block");
                    $(this).parent().next(".item-list").slideDown();
                    $(this).find("img").attr("src", "static/images/direction_1.png");
                };
            });
        },
    };
    // 启动
    module.startup();
});