/**
 * 商品模块
 * @author Shann
 */
define(['jquery'], function (require, exports, module) {
    module.exports = {
        init: function () {
            this.doubleChange();
            this.upanddown();
        },
 
        //双列功能
        doubleChange: function () {
            $('.double').click(function(){
                $('.main-left').css({width:'460px'});
                $('.double-c').css({display:"block"});
                $(".right-menu").css({display:"none"});
            })
        },
        //上拉和下拉功能
        upanddown: function () {
            $(".up-down").click(function(){
                var a = $(this).parent().next(".item-list").css("display");
                if(a=="block"){
                    $(this).parent().next(".item-list").css("display","none");
                    $(this).find("img").attr("src","static/images/direction_2.png");
                }else{
                    $(this).parent().next(".item-list").css("display","block");
                    $(this).find("img").attr("src","static/images/direction_1.png");
                };
                console.log(a);
            });
        }
    };
});