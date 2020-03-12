$(document).ready(function () {

    // initLoading();

    initInView();
    initTopBtn();
    initSearchBtn();

    initSlider();

    initLinkdemo();
})

function initLinkdemo() {
    $('.tagBox .tag').click(function () {
        window.location = "/result.html";
    });

    $('#header .menuUl .btn').eq(0).click(function () {
        window.location = "/index.html";
    });

    $('#header .menuUl .btn').eq(1).click(function () {
        window.location = "/info.html";
    });

    $('#header .menuUl .btn').eq(2).click(function () {
        window.location = "/result.html";
    });

    $('.gallery .card').click(function () {
        window.location = "/porfolio.html";
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