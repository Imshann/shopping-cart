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
        doubleChange: function() {
            $('.double').click(function() {
                $('.main-left').css({
                    width: '460px',
                    "margin-top": '64px'
                });
                $('.double-c').css({
                    display: "block"
                });
                $(".right-menu").css({
                    display: "none"
                });
            })
        },
        /*
         *单列功能
         *@author yi
         */
        singleChange: function() {
            $('.single').click(function() {
                $('.main-left').css({
                    width: '565px',
                    "margin-top": '0'
                });
                $('.double-c').css({
                    display: "none"
                });
                $(".right-menu").css({
                    display: "block"
                });
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
        } 
    };

    // 启动s
    module.startup();
});