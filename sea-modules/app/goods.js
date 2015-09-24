/**
 * 商品模块
 * @author Shann
 */
define(function(require, exports, module) {
	/*
	 *jump to cata的显示隐藏功能
	 *@author yi
	 */
	$('.jump').click(function(){
		$('.jump-main').slideDown();
	});
	$('.jump-close').click(function(){
		$('.jump-main').slideUp();
	});
	/*
	 *sort-bg的选项功能
	 *@author yi
	 */
	$('.nav-two').find('li').hover(function(){
		var num = $(this).index();
		$('.nav-sort-bg').find('li').removeClass();
		$('.nav-sort-bg').find('li').eq(num).addClass('nav-sort-on');
	});
	/*
	 *menu的选项功能
	 *@author yi
	 */
	$('.nav-menu-2').find('li').hover(function(){
		var num = $(this).index();
		$('.nav-menu-bg').find('li').removeClass();
		$('.nav-menu-bg').find('li').eq(num).addClass('nav-menu-on');
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