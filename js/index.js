$(function(){
    $(".select a").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    $('.by-id').click(function (){
        $('.id-content').show();
        $('.scan-content').hide();
    });
    $('.by-scan').click(function (){
        $('.scan-content').show();
        $('.id-content').hide();
    });
});