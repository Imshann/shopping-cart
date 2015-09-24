/**
 * 公共模块
 * @author Shann
 */
define(['art-dialog'], function (require, exports, module) {

    /**
     * 启动
     * @author Shann
     */
    module.constructor.prototype.startup = function () {
        $.each(this.exports, function (k, v) {
            if (k.substr(0, 1) != '_') {
                var func = v;
                func();
            }
        })
        /*
         *购物车展开信息和收缩信息功能
         *@author yi
         */
        $('.reviews').click(function () {
            var rev = $('.rating-info').css('display');
            if (rev == 'block') {
                $('.rating-info').slideUp();
                $(this).find('img').attr('src', 'static/images/down.png');
            } else {
                $('.rating-info').slideDown();
                $(this).find('img').attr('src', 'static/images/direction.png');
            }
        });
        /*
         *购物车鼠标移动选择信息功能
         *@author yi
         */
        $('.choose-list').css('display', 'none').first().css('display', 'block');
        $('.choose').find('li').hover(function () {
            var num = $(this).index();
            $('.choose').find('li').removeClass();
            $(this).addClass('choose-on');
            $('.choose-list').css('display', 'none');
            $('.choose-list').eq(num).css('display', 'block');
        });
        /*
         *购物车增加购物数量功能
         *@author yi
         */
        $('.cut-num').click(function () {
            var num = $('.num-input').val();
            if (num > 1) {
                num--;
                $('.num-input').val(num);
            } else {
                alert('多少买点嘛');
            }
        });
        $('.add-num').click(function () {
            var num = $('.num-input').val();
            if (num < 100) {
                num++;
                $('.num-input').val(num);
            } else {
                alert('都给你了');
            }
        });

    }
});