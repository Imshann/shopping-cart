// seajs 的简单配置
seajs.config({
    base: "./sea-modules/",
    debug: true,
    alias: {
        "jquery": "jquery/jquery-1.11.1.min",
        "artDialog": "art-dialog/dialog-plus-min",
        "public": "app/public"
    },
    preload:[
        'jquery',
        'public'
    ],
    charset: 'utf-8'
})