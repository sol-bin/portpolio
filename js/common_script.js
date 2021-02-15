$(function(){
    $('.nav_btn').click(function(){
      $('.nav_pop').animate({right:0})
    }) //nav_btn.click
    $('.close_btn').click(function(){
        $('.nav_pop').animate({right:'-100%'})
    })//nav_btn.click
    $('#nav .nav_tit').click(function(){
      $('#nav .nav_tit .sub').slideUp();
      $(this).find('.sub').slideDown();
    })//.nav_tit
   $(window).scroll(function(){
    if($(document).scrollTop() >= 300) {
      $('#header').css({'background-color':'#fff'});
      $('#header .logo a').css({'background-image':'url(image/logo_color.png)'});
      $('#header .nav_btn span').css({'background-color':'#ddd'});
      $('#header.sub_header').addClass('active');
      //#header.sub_header.active 
      //  --> <ele id="header" class="sub_header active">
      $('#header.sub_header').css({'background-color':'#fff'})
     } else{
      $('#header').css({'background-color':'transparent'});
      $('#header .logo a').css({'background-image':'url(image/logo.png)'});
      $('#header .nav_btn span').css({'background-color':'#dedede'})
      $('#header.sub_header').removeClass('active');
      $('#header.sub_header').css({'background-color':'#fff'})
     }
   })//$(window).scroll
  $('#quick .center a').click(function(event){
    event.preventDefault();
    $(this).find('span').toggleClass('active');
  })
}) //jq end