$(document).ready(function () {

    // initLoading();

    initLottie();

    initTopBtn();

    initSearchBtn();

    initSlider();

    initLinkdemo();

    initLineBtnSet();

    initMenu();

    initGallery();


})
var logo_ani;
var menu_ani;

function initLottie() {
    logo_ani = lottie.loadAnimation({
        container: $('#logo .lottie')[0], // 裝動畫的容器
        renderer: 'svg',
        autoplay: true,
        path: './lottie/logo.json' // 動畫json 檔
    });

    menu_ani = lottie.loadAnimation({
        container: $('#menuToggleBtn .lottie')[0], // 裝動畫的容器
        renderer: 'svg',
        autoplay: true,
        loop: true,
        path: './lottie/menu.json' // 動畫json 檔
    });
}

function initGallery() {
    var lazyImg = '.lazy';

    var lazyContent = new LazyLoad({
        elements_selector: lazyImg,
        thresholds: '400px',
        callback_loaded: function (el) {
            $(el).closest('.card').addClass('loaded');
        },
    });


    inView(lazyImg)
        .on('enter', function (el) {
            setTimeout(function () {
                $(el).closest('.card').addClass('enter moblie_enter');
            }, Math.random() * 300)
        })
        .on('exit', function (el) {
            $(el).closest('.card').removeClass('moblie_enter');
        });




    $('.gallery .card').on('mouseenter', function (e) {
        var t = $(this);
        var delay = 0.15;
        var count = 0;
        t.find('.ani-text').each(function () {
            var tt = $(this).find('>*');
            TweenMax.killTweensOf(tt);

            TweenMax.set(tt, {
                y: tt.height() * -1
            })

            TweenMax.to(tt, 1, {
                y: 0,
                delay: delay * count
            })
            count += 1;
        })
    });

    $('.gallery .card').on('mouseleave', function (e) {
        var t = $(this);

        var delay = 0.1;
        var count = 0;
        t.find('.ani-text').each(function () {
            var tt = $(this).find('>*');

            TweenMax.killTweensOf(tt);

            TweenMax.to(tt, 1, {
                y: tt.height(),
                delay: delay * count,
                ease: Power1.easeIn
            })
            count += 1;
        })
    });
}

function initMenu() {
    // $('.nav').mouseover(function(){
    //     $('#header .menuUl').addClass('show');
    // });

    // $('#header .menuToggleBtn').mouseleave(function(){
    //     $('#header .menuUl').removeClass('show');
    // });
    // setInterval(function () {
    //     console.log(window.pageYOffset);
    //     if (window.pageYOffset > 5) {
    //         $('#header').addClass('hidden');
    //     } else {
    //         $('#header').removeClass('hidden');
    //     }
    // }, 100);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('#header').removeClass('hidden');
        } else {
            $('#header').addClass('hidden');
            $('#searchBar').removeClass('show');

        }
        prevScrollpos = currentScrollPos;
    }

    $(".menuToggleBtn").click(function () {
        $("#header .menuUl").addClass('moblie-open')
    })

}

function initLineBtnSet() {
    $(".lineBtnSet .lineBtn").mouseover(function () {
        var t = $(this);
        var mom = t.closest('.lineBtnSet');
        var line = mom.find('.line');
        // console.log(t.offset().left - mom.offet().left);
        console.log(t.width(), t.offset().left - mom.offset().left);
        line.addClass('show');
        line.css({
            "width": t.width(),
            "left": t.offset().left - mom.offset().left,
        })
    })

    $(".lineBtnSet").mouseleave(function () {
        console.log(123);
        var t = $(this);
        t.find('.line').removeClass('show')
    })
}

function initLinkdemo() {
    $('.tagBox .tag').click(function () {
        window.location = "./result.html";
    });

    $('#header .menuUl li').eq(0).click(function () {
        window.location = "./index.html";
    });

    $('#header .menuUl li').eq(1).click(function () {
        window.location = "./info.html";
    });

    $('#header .menuUl li').eq(2).click(function () {
        window.location = "./result.html";
    });

    $('.gallery .card').click(function () {
        window.location = "./porfolio.html";
    });

    // $('#searchBar').click(function () {
    //     window.location = "/info.html";
    // });
}
// function initLoading() {
//     $('.loadingFirst').waitForImages({
//         finished: function() {
//             // $('#loading').find('.loadingTxt').html('100');
//             // simpleHide($('.loadingPage'), 0);
//             // _gaPV('index');
//             // $('.mainContainer').removeClass('hide');
//             // $('.ci').removeClass('hide');
//             // playAni(getChannelString());
//         },
//         each: function(loaded, count, success) {
//             var r = Math.floor(loaded / count * 100);
//             // console.log(loaded,count)
//             // $('.loadingPage').find('.txt').html(r + '%');

//         },
//         waitForAll: true
//     });
// }



function initTopBtn() {
    $("#topBtn").click(function () {
        ChungTool.pageScrollAni(0)
    });
}

function initSearchBtn() {
    $('.searchBtn').click(function () {
        var sb = $("#searchBar");
        if (sb.hasClass('show')) {
            sb.removeClass('show');
        } else {
            sb.addClass('show');
            $('#searchTxt').val('');
            $( "#searchTxt" ).focus();
        }
    });

    $(document).click(function (event) {
        if (!$(event.target).closest("#searchBar,.searchBtn").length) {
            clozSearchBar();
        }

        if ($(event.target).closest(".searchBar-cloz").length) {
            clozSearchBar();
        }
    });

    function clozSearchBar() {
        $("#searchBar").removeClass('show');
        $('.mainContent').removeClass('goDown');
    }
}

function initSlider() {
    if ($('.slider').length) {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
        });
    }
}