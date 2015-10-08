/**
 * 账号管理模块
 * @author Shann
 */
define(function(require, exports, module) { 
    module.exports = {
        /*
         *登录验证功能
         *@author yi
         */
        loginCheck:function(){
            $("#login-form").validate({
                debug:true,
                rules:{
                    lemail: {
                        required: true,
                        email: true
                    },
                    lpassword: {
                        required: true,
                        minlength: 5
                    }
                },
                submitHandler: function(form) { 
                    alert("submitted!");
                    form.submit(); 
                },
                errorElement:"p"
            });
        },
        /*
         *登录验证功能
         *@author yi
         */
        createCheck:function(){
            $("#create-form").validate({
                debug:true,
                rules:{
                    cemail: {
                        required: true,
                        email: true
                    },
                    cpassword: {
                        required: true,
                        minlength: 5
                    },
                    crepassword: {
                        required: true,
                        minlength: 5,
                        equalTo:"#cpassword"
                    }
                },
                submitHandler: function(form) { 
                    alert("submitted!");
                    form.submit(); 
                },
                errorPlacement: function(error, element) {  
                    error.appendTo(element.parent());  
                },
                errorElement:"p"
            });

        },
        /*
         *点击阴影功能
         *@author yi
         */
        chooseAction:function(){
            //console.log($('form').find('ul').eq(0));
            $('form').find('ul').eq(0).click(function(){
               $('form').find('ul').css({
                    background:'none',
                    'border':'none'
               });
               $('.btn-color').css('background','#999');
               $('.guest').css('background','none');
               $(this).css({
                   background:"url('static/images/blue-hr.png') repeat-x 0 0",
                   'border-right':'1px solid #999',
                   'border-bottom':'1px solid #999',
                   'padding-bottom':'45px',
                   'padding-top':'30px'
               });
               $('.log-btn').css('background-color','#007ef9');
            });
            $('form').find('ul').eq(1).click(function(){
               $('form').find('ul').css({
                    background:'none',
                    'border':'none'
               });
               $('.btn-color').css('background','#999');
               $('.guest').css('background','none');
               $(this).css({
                   background:"url('static/images/blue-hr.png') repeat-x 0 0",
                   'border-left':'1px solid #999',
                   'border-bottom':'1px solid #999',
                   'padding-bottom':'35px',
                   'padding-top':'30px'
               });
               $('.sign-btn').css('background-color','#007ef9');
            });
            $('.guest').click(function(){
                $('form').find('ul').css({
                    background:'none',
                    'border':'none'
                });
                $('.btn-color').css('background','#999');
                $(this).css('background',"url('static/images/blue-hr.png') repeat-x 0 0");
                $('.continue-btn').css('background-color','#007ef9');
            });
        }
    };
    //启动
    module.startup();
});