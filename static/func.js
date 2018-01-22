/**
 * Created by Callum on 21/01/2018.
*/
$(document).ready(function () {

    /* Nav Scrolling */
    $('.nav-btn')
        .click(function () {
            loc = $(this).find('p').attr('href');
            poss = $(loc).offset().top;

            $('html, body').animate({ scrollTop: poss + "px"}, 2000);
        });

    /* Prj Toggle */
    $('.prj')
        .mouseenter(function () {
            $(this)
                .find('.prj-thumb')
                .css('transition', 'opacity 1s ease-out')
                .css('opacity', '0')
                .delay(1000)
                .queue(function (next) {
                    $(this)
                        .css('display', 'none');
                    next();
                })
                .queue(function (next) {
                    $(this)
                        .parent().find('.prj-details')
                        .css('display', 'block')
                        .css('transition', 'opacity 1s ease-out')
                        .css('opacity', '1');
                    next();
                })
        })
        .mouseleave(function () {
            $(this)
                .find('.prj-details')
                .css('transition', 'opacity 1s ease-in')
                .css('opacity', '0')
                .delay(1000)
                .queue(function (next) {
                    $(this)
                        .css('display', 'none');
                    next();
                })
                .queue(function (next) {
                    $(this)
                        .parent()
                        .find('.prj-thumb')
                        .css('display', 'block')
                        .css('transition', 'opacity 1s ease-in')
                        .css('opacity', '1');
                    next();
                })
        })
});