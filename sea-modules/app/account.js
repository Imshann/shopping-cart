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

        }
    };
    //启动
    module.startup();
});