$(document).ready(function () {

    // initLoading();

    initInView();

    initTopBtn();

    initSearchBtn();

    initSlider();

    initLinkdemo();

    initLineBtnSet();

    initMenu();

    initGallery();


})

function initGallery() {

    $('.gallery .card').on('mouseenter', function (e) {
        var t = $(this);
        var tl = new TimelineMax();

        var delay = 0.15;
        var count = 0;

        TweenMax.killTweensOf(t);


        t.find('.ani-text').each(function () {
            var tt = $(this);

            TweenMax.set(tt.find('>*'), {
                top: tt.height() * -1
            })

            TweenMax.to(tt.find('>*'), 1, {
                top: 0,
                delay: delay * count
            })
            count += 1;
        })
    });

    $('.gallery .card').on('mouseleave', function (e) {
        var t = $(this);
        var tl = new TimelineMax();

        var delay = 0.1;
        var count = 0;

        TweenMax.killTweensOf(t);

        t.find('.ani-text').each(function () {
            var tt = $(this);

            TweenMax.to(tt.find('>*'), 1, {
                top: tt.height(),
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
        }
        prevScrollpos = currentScrollPos;
    }

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

function initInView() {
    var myLazyLoad = new LazyLoad({
        elements_selector: ".gallery .lazy-trigger",
        callback_enter: function (el) {
            console.log('enter:' + $(el).closest('.card').index());
        },
        callback_loaded: function (el) {
            console.log('loaded: ' + $(el).closest('.card').index());
            var src = $(el).attr('data-src');
            $(el).closest('.pic').css('background-image', 'url(' + src + ')');
            $(el).closest('.card').addClass('show');
        },
    });
    myLazyLoad.update();
}

function initTopBtn() {
    $("#topBtn").click(function () {
        ChungTool.pageScrollAni(0)
    });
}

function initSearchBtn() {
    $('.searchBtn').click(function () {
        $("#searchBar").addClass('show');
        $('.mainContent').addClass('mt-5');

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
        $('.mainContent').removeClass('mt-5');
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