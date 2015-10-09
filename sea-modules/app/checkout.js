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
        },
        /*
         *订单数量的改变功能
         * @author yi
         */
        numChange:function(){
            var num = $('.num').find('span').text();
            $('.num > img').eq(0).click(function(){
                --num;
                if(num > 0){
                    $('.num').find('span').text(num);
                }else{
                    alert('please buy some more!');
                }
            });
            $('.num > img').eq(1).click(function(){
                ++num;
                if(num < 99){
                    $('.num').find('span').text(num);
                }else{
                    alert('no more!');
                }
            });
        },
        /*
         *表单验证功能
         * @author yi
         */
        formCheck:function(){
            $('#check-form').validate({
                debug:true,
                rules:{
                    apt:{
                        required:true
                    },
                    street:{
                        required:true
                    },
                    shorti:{
                        required:true
                    },
                    phone:{
                        required:true
                    },
                    email:{
                        required:true,
                        email:true
                    },
                    cardname:{
                        required:true
                    },
                    card:{
                        required:true,
                        creditcard:true
                    },
                    code:{
                        required:true,
                        digits:true
                    },
                    zip:{
                        required:true,
                        digits:true
                    }
                },
                submitHandler:function(form){
                    alert('submitted');
                    form.submit();
                },
                errorElement:"h4"
            });
        }
     }
     module.startup();
});