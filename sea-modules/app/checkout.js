/**
 * 订单管理模块
 * @author Shann
 */
define(function(require, exports, module) { 
     
     module.exports = {
        /*
         *产品提取方式
         * @author yi
         */
        extractWay:function(){
            $('.extract').find('.pick-up').click(function(){
                
                $('.extract').css('display','none');
                $('.extract-p').fadeIn();
            });
            $('.extract-p').find('.pick-up').click(function(){
               
                $('.extract-p').css('display','none');
                $('.extract').fadeIn();
            });
        },
        /*
         *支付方式
         * @author yi
         */
        payWay:function(){
            $('.pay-list > li').hover(function(){
                $('.pay-list > li').css('background','none');
                var a = $(this).index();
                $(this).css('background',"url('static/images/blue_border.png') no-repeat 0 0");
                $('.pay-table').css('display','none');
                $('.pay-table').eq(a).css('display','block');
            });
        }

     }
     module.startup();
});