
      $(function(){
        $('.partner_info').click(function(){
         var img = $(this).find('img');//여러개의 partner_info중에서 하나만 하기 위해서 this를 씀
         var img_src = img.attr('data_img');//attr은 태그들을 찾아주는 것이다 ''속에 잇는 값을 기억을 해 주는 것이다.
         var img_alt = img.attr('alt') //이미지의 설명을 찾는것
         var img_title = img.attr('title')//그림설명을 할 자리를 만듬 var에
            $('#modal').show();//열기
            $('#modal img').attr('src',img_src);//attr('src','')이렇게해서 값을 두개 넣어주면 앞에껀 기억을해서 뒤에꺼로 바꾸어줌
            $('#modal .txt').text(img_alt);//글씨가 들어가는 메소드(태그를 계속 추가 하고싶으면 어팬드)위에 기억하는 img_alt를 넣음
            $('#modal .txt_title').text(img_title);//4번 
        })

        $('#modal').click(function(){
            $('#modal').hide();//닫기
            //갤러리나 이미지에 사용하면 좋음 
        })

        var menu = $(".nav_txt > li");
        var content = $("section");
        
        menu.click(function(){
            /*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
    별도의 브라우저 행동을 막기 위해 사용됩니다.*/
            event.preventDefault();
            
            //사용자가 클릭한 li
            var tg = $(this);
            //순서값을 찾는 함수 index()
            var idx = tg.index();
            //선택한 li와 순서가 같은 content 를 찾음 eq()
            var section = content.eq(idx);
            //선택된 영역의 top 의 좌표값을 저장
            //.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
            var tt = section.offset().top;
    
            //스크롤이 tt의 값에 맞게 움직이게
            $("html,body").stop().animate({scrollTop:tt});
            });//menu.click() 끝
            
            // 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
            $(window).scroll(function(){
            //.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
            var location = $(window).scrollTop();
            
            content.each(function() {
                //반복문(each)
          var tg = $(this);
                var idx = tg.index();
                
                if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
                    menu.removeClass("active");
                    menu.eq(idx).addClass("active");
                    }
    
        });//each() 끝
            
                
                });//scroll() 끝
    })

       

      
