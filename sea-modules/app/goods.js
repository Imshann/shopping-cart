/**
 * 商品模块
 * @author Shann
 */
define(['jquery'], function (require, exports, module) {
    module.exports = {
        init: function () {
            this.columnChange();
        },

        columnChange: function () {
            $('.single, .double').click(function () {
                alert(1);
            })
        }
    };
});