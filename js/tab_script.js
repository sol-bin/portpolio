$(function(){
  $('.tabSet').each(function(){
      var anchor = $(this).find('.tabs a');
      var anchor_on = $(this).find('.tabs a.on');
      var phref= anchor_on.attr('phref');
      var panel = $(this).find('.panel');
      var lastimg = $(this).find('.tabs .on img');
      var lastimg_src = lastimg.attr('src');

      $(phref).show();
     // $('.tabSet .tabs a').click()
      anchor.click(function(){
        var currentimg = $(this).find('img');
        var currentimg_src = currentimg.attr('src');
        //현재이미지(방금클릭한거) : off-->on
        var currentimg_src_on = currentimg_src.replace('off','on');
        //과거이미지(좀전에 클릭한거 on) : on -->off
        currentimg.attr('src',currentimg_src_on);
        var lastimg_src_off = lastimg_src.replace('on','off');
        lastimg.attr('src',lastimg_src_off);

        phref = $(this).attr('phref');
        panel.hide();
        anchor.removeClass('on');
        $(this).addClass('on');
        $(phref).show();

        lastimg =  currentimg;
        lastimg_src = currentimg_src; 
      })
  })
})//end