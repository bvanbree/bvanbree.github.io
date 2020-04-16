// Google Analytics tracking script
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40166654-3']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
// end Google script

$(function () {
    var $anchorLinks = $('nav').find('.anchor-link');
    // IMPROVEMENT: smooth scroll with CSS only
    $anchorLinks.click(function (e) {
        e.preventDefault();

        var id = $.attr(this, 'href');
        var anchor = $(id);

        $('html, body').animate({
            scrollTop: anchor.offset().top
        }, 1000);
        return false;
    });
});

