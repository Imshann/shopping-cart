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
		 *jump to cata的显示隐藏功能
		 *@author yi
		 */
		$('.jump').click(function(){
			//$('.jump-main').slideDown();
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
    }
});