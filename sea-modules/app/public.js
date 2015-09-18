/**
 * 公共模块
 * @author Shann
 */
define(['artDialog'], function(require, exports, module) {
    module.constructor.prototype.startup=function(){
        $.each(this.exports, function(k,v){
           /*  if( k.substr(0, 1) != '_' ){
                var func = v;
                func();
            } */
			
        })
		$(".check-btn").click(function(){
			art.dialog.data("text");
			art.dialog.open("loading.html");
		});
    }
});