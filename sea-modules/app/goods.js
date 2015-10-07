/**
 * 商品模块
 * @author Shann
 */
define(function(require, exports, module) {
    module.exports = {
        /*
         *双列功能
         *@author yi
         */
        doubleChange: function () {
            $('.double').click(function () {
                //$('.main-left').css({
                //    width: '460px',
                //    "margin-top": '46px'
                //});
                $('.main-left').animate({
                    width: '460px',
                }, 200);
                //$('.double-c').css({
                //    display: "block"
                //});
                $('.double-c').css('margin-top','26px').slideDown(600);
                $('.menu-list').css('display','none');
                //$(".right-menu").css({
                //    display: "none"
                //});
                $(".right-menu").css('display','none');
                $('.back-to').css('display','block');
                $('.minimum').css('display','block');
                $('.estimate').css('display','block');
            })
        },
        /*
         *单列功能
         *@author yi
         */
        singleChange: function () {
            $('.back-to').click(function () {
                $('.main-left').animate({
                    width: '565px',
                }, 800);
                $('.menu-list').slideDown();
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
                $('.back-to').css('display','none');
                $('.minimum').css('display','none');
                $('.estimate').css('display','none');
            })
        },

        /*
         *上拉和下拉功能
         *@author yi
         */
        upAndDown: function () {
            $(".up-down").click(function () {
                var a = $(this).parent().next(".item-list").css("display");
                if (a == "block") {
                    //$(this).parent().next(".item-list").css("display","none");
                    $(this).parent().next(".item-list").slideUp();
                    $(this).find("img").attr("src", "static/images/direction_2.png");
                } else {
                    //$(this).parent().next(".item-list").css("display","block");
                    $(this).parent().next(".item-list").slideDown();
                    $(this).find("img").attr("src", "static/images/direction_1.png");
                }
                ;
            });
        },
        /*
         *购物车增加购物数量功能
         *@author yi
         */
        changeNum: function(){
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
        },
        /*
         *购物车鼠标移动选择信息功能
         *@author yi
         */
        choosePieces: function(){
            $('.choose-list').css('display','none').first().css('display','block');
            $('.choose').find('li').hover(function(){
                var num = $(this).index();
                $('.choose').find('li').removeClass();
                $(this).addClass('choose-on');
                $('.choose-list').css('display','none');
                $('.choose-list').eq(num).css('display','block');
            });
        },
        /*
         *购物车展开信息和收缩信息功能
         *@author yi
         */
        cartShownews: function(){
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
        },
        /*
         *显示产品信息功能
         *@author yi
         */
        showProductInfo: function(){
            $('.item-list li').find('p').click(function(){
                var even = document.getElementById('chi');
                var d = dialog({
                    title: 'Chirashi',
                    content:even,
                });
                d.showModal();
            });
        },
        /*
         *结账选择配送方式功能
         *@author yi
         */
        showCart: function(){
            var a = 0;
            $(".extract li").eq(0).click(function(){
                ++a;
                $('.extract').css('display','none');
                $('.extract-1').fadeIn();
            });
            $(".extract li").eq(1).click(function(){
                ++a;
                $('.extract').css('display','none');
                $('.extract-1').fadeIn();
            });
            $(".check-btn").click(function(){
                if(a > 0){
                    //console.log(a);
					$('.warn').slideUp();
                    alert('ok');
                }else{
                    $('.warn').slideDown();
                }
            });
        },
        /*
         *结账时订单的数量添加和减少功能
         *@author yi
         */
        itemNum:function(){
            var num = $('.item-num').find('span').text();
            $('.item-num').find('.item-num-cut').click(function(){
                --num;
                if(num > 0){
                    $(this).siblings('span').text(num);
                }else{
                    alert('多少买点嘛！');
                }
            });
            $('.item-num').find('.item-num-add').click(function(){
                ++num;
                if(num < 99){
                    $(this).siblings('span').text(num);
                }else{
                    alert('都让你买光了！');
                }
            });
        },

    };
    // 启动
    module.startup();
});