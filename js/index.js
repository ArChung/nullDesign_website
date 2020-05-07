$(document).ready(function () {

    // initLoading();

    // initLottie();

    initTopBtn();

    initSearchBtn();

    initSlider();

    initLinkdemo();

    initLineBtnSet();

    initMenu();

    initGallery();

    FastClick.attach(document.body);
    
})


function initGallery() {
    var lazyImg = '.lazy';

    var lazyContent = new LazyLoad({
        elements_selector: lazyImg,
        thresholds: '400px',
        callback_loaded: function (el) {
            $(el).closest('.card').addClass('loaded');
        },
    });

    inView.offset({
        top: 500,
        bottom: 50,
    });
    inView(lazyImg)
        .on('enter', function (el) {
            var card = $(el).closest('.card');
            var d = (card.index() == 0) ? 0 : Math.random() * 300;
            setTimeout(function () {
                card.addClass('enter');
            }, d)

            if (ChungTool.isPhone()) {
                showInfo(card);
            }
        })
        .on('exit', function (el) {
            var card = $(el).closest('.card');
            if (ChungTool.isPhone()) {
                hideInfo(card);
            }
        });





    $('.gallery .card').on('mouseenter', function (e) {
        var t = $(this)
        showInfo(t);
    });

    $('.gallery .card').on('mouseleave', function (e) {
        hideInfo($(this));
    });

    // show info
    function showInfo(card) {
        var tl = new TimelineMax();
        TweenMax.killChildTweensOf(card);

        tl.set(card.find('.ani-text > *'), {
                y: '-100%'
            })
            .staggerTo(card.find('.ani-text > *'), 1, {
                y: '0%'
            }, 0.15)
            .to(card.find('.picBox'), 5, {
                scale: 1,
                ease: Power1.easeInOut
            }, 0)
    }

    // hide info
    function hideInfo(card) {
        var tl = new TimelineMax();
        TweenMax.killChildTweensOf(card);

        tl.staggerTo(card.find('.ani-text > *'), 1, {
                y: '100%',
                ease: Power1.easeIn
            }, -0.15, 'ani-start')
            .to(card.find('.picBox'), 5, {
                scale: 1.1,
                ease: Power1.easeInOut
            }, 'ani-start')
    }
}

function initMenu() {

    var logo_ani;
    var menu_ani;


    logo_ani = lottie.loadAnimation({
        container: $('#logo .lottie')[0], // 裝動畫的容器
        renderer: 'svg',
        autoplay: true,
        path: './lottie/logo.json' // 動畫json 檔
    });

    menu_ani = lottie.loadAnimation({
        container: $('#menuToggleBtn .lottie')[0], // 裝動畫的容器
        renderer: 'svg',
        autoplay: false,
        // loop: true,
        path: './lottie/menu.json' // 動畫json 檔
    });

    $('#logo').mouseenter(function () {
        logo_ani.setDirection(-1);
        logo_ani.setSpeed(2);
        logo_ani.play();
    });

    $('#logo').mouseleave(function () {
        logo_ani.setDirection(1);
        logo_ani.setSpeed(1);

        logo_ani.play();
    });

    // nav
    $('.nav').mouseenter(function () {
        if (!ChungTool.isPhone()) openNav();
    });

    $('.nav').mouseleave(function () {
        if (!ChungTool.isPhone()) clozNav();
    });

    $('.nav').click(function () {
        var sb = $(".nav");
        if (sb.hasClass('active')) {
            clozNav();
        } else {
            openNav();
        }
    });


    // searchBtn
    $('.searchBtn').click(function () {
        var sb = $("#searchBar");
        if (sb.hasClass('show')) {
            clozSearchBar();
        } else {
            openSearchBar();
        }
    });


    // click and cloz
    $(document).click(function (event) {
        if (!$(event.target).closest("#searchBar,.searchBtn").length) {
            clozSearchBar();
        }

        if (!$(event.target).closest(".nav").length) {
            clozNav();
        }
    });


    //scroll events
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos);
        if (prevScrollpos > currentScrollPos || currentScrollPos < 10) {
            $('#header').removeClass('hidden');
        } else {
            $('#header').addClass('hidden');
            clozSearchBar();
            clozNav();
        }
        prevScrollpos = currentScrollPos;
    }

    // toggle search bar
    function openSearchBar() {
        var sb = $("#searchBar");
        sb.addClass('show');
        $('#searchTxt').val('');
        $("#searchTxt").focus();
    }

    function clozSearchBar() {
        $("#searchBar").removeClass('show');
        $('.mainContent').removeClass('goDown');
    }

    // toggle nav bar
    function openNav() {
        menu_ani.setDirection(1);
        menu_ani.play();
        $('.nav').addClass('active');
    }

    function clozNav() {
        menu_ani.setDirection(-1);
        menu_ani.play();
        $('.nav').removeClass('active');
    }
}

function initLineBtnSet() {
    $(".lineBtnSet .lineBtn").mouseover(function () {
        var t = $(this);
        var mom = t.closest('.lineBtnSet');
        var line = mom.find('.line');
        line.addClass('show');
        line.css({
            "width": t.width(),
            "left": t.offset().left - mom.offset().left,
        })
    })

    $(".lineBtnSet").mouseleave(function () {
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


}




function initTopBtn() {
    $("#topBtn").click(function () {
        ChungTool.pageScrollAni(0)
    });
}

function initSearchBtn() {

}

function resetHeader() {
    $("#searchBar").removeClass('show');
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