(function($){

    
    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on')){
            $('.nav').css({
                display:'block'
            }).animate({
                right:'0px'
            },500)
        } else {
                $('.nav').animate({
                    right:'-320px'
                },500, function(){
                    $(this).css({
                        display:'none'
                    })
                })
            }
        }
        // $('.outlayer').toggleClass('on')
    
    $('.open-gnb').on('click',openNav)
    // $('.outlayer').on('click',openNav)

    // $(window).resize(function(){
    //    var winWidth = $(this).innerWidth()
    //    if ( winWidth > 800 ) {
    //        $('#header').removeClass('on')
    //        $('.nav').css({
    //         display:'block',
    //         right:'0px'
    //     })
    //        $('.outlayer').removeClass('on')
    //    } else if (winWidth<=800){ 
    //     $('#header').addClass('on')
    //     $('.nav').css({
    //         display:'none',
    //         right:'-320px'
    //     })
    //    }
    // })


    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:3000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:false,
        cssEase:'linear',
        draggable:true,
        fade:true,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-chevron-left"></i>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-chevron-right"></i>'

    })

    // 슬라이드 재생, 멈춤
    $('.plpa').toggle(
        function(){
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $('.slide-inner').slick('slickPause')
        },
        function(){
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $('.slide-inner').slick('slickPlay')
        }
    ) 

    // 포트폴리오 갤러리 클릭 이벤트시 팝업창
    
    var href, src, alt;
    var lieq;
    $('.gallery > li > a').on('click',function(e){
        e.preventDefault(); // a 태그에 연결된 링크로 넘어가는 것 방지
        $('.gallery-popup').addClass('on')
        lieq = $(this).parent().index()
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        
        $('.popup-list > div > a').attr('href', href)
        $('.popup-list > div > a > img').attr('src',src)
        $('.popup-list > div > a > img').attr('alt', alt)

    })

    $('.gallery-popup .close, .gallery-popup').on('click',function(){
        $('.gallery-popup').removeClass('on')
    })

    $('.popup-list').on('click',function(e){
        e.stopPropagation();//부모한테 이벤트 전파를 막음,
        // 링크로 이동했다가 돌아와도 창이 열려있음
    })

    // 갤러리 팝업 화살표 이동

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popup-list > div > a').attr('href',href)
        $('.popup-list > div > a > img').attr({
            'src':src,
            'alt':alt
        }).css({
            opacity:'0.5'
        }).stop().animate({
            opacity:'1'
        },500)
    }

    $('.popup-list .next').on('click', function(){
        ++lieq;
        if ( lieq === $('.gallery > li').length ) {
            lieq=0;
        }
        changeList(lieq)
    })

    $('.popup-list .prev').on('click', function(){
        --lieq;
        if ( lieq === 0 ) {
            lieq=5;
        }
        changeList(lieq)
    })

    // 마우스 휠 이벤트
    
    var sct = 0;
    $('.skillContainer').hide()
    $(window).scroll(function(){
        sct=$(this).scrollTop();
        winHeight = $(this).height()
        if( sct >= winHeight ){
            $('.header-outer').css({
                background:'rgba(255,255,255,0.6)'
            })
            $('.nav li a').css({
                color:'#000'
            })
            $('.header-outer h1').css({
                color:'#000'
            })
        } else {
            $('.header-outer').css({
                background:'rgba(0,0,0,0.5)'
            })
            $('.nav li a').css({
                color:'#fff'
            })
            $('.header-outer h1').css({
                color:'#fff'
            })
        }
        if ( sct >= $('.section').eq(2).offset().top ){
            $('.skillContainer').stop().fadeIn(300)
        }

        if (sct>=winHeight*4) {index=4}
        else if (sct>=winHeight*3) {index=3}
        else if (sct>=winHeight*2) {index=2}
        else if (sct>=winHeight*1) {index=1}
        else {index=0}
        $('.nav .depth1 > li').eq(index).find('a').addClass('on')
        $('.nav .depth1 > li').eq(index).siblings().find('a').removeClass('on')

        // 각 섹션 애니메이션
        // my info 애니메이션
        var infoNear = $('.myinfo-outer').offset().top
        if( sct >= infoNear ){
            $('article').addClass('on')
        } else if ( sct ===0 ){
            $('article').removeClass('on')
        }
    
    })

    $('.section').on('mousewheel',function(e,wh){
        var index = $(this).index()
        if( wh > 0 ){
            var prev = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop:prev
            },800,'linear')
        } else if ( wh < 0 ){
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop:next
            },800,'linear')
        }
    })

   







})(jQuery)