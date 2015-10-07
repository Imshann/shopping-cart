// seajs 的简单配置
seajs.config({
    base: "./sea-modules/",
    debug: true,
    alias: {
        "jquery": "jquery/jquery-1.11.1.min",
        "art-dialog": "art-dialog/dialog-min",
        "public": "app/public",
        "validate":"validate/jquery.validate.min.js"
    },
    preload:[
        'jquery'
    ],
    charset: 'utf-8'
})