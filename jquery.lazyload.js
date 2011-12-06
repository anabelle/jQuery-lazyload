(function($){
    $.fn.lazyload = function(options){
        var opts = $.extend($.fn.lazyload.defaults, options);
        var elements = this;

        $(window).bind('scroll', function(e){
            displayAboveTheFoldContent(elements, opts);
        });

        displayAboveTheFoldContent(elements, opts);

        return this;
    };
    
    $.fn.lazyload.defaults = {threshold: 0};

    function aboveTheFold(element, options){
        var fold = $(window).height() + $(window).scrollTop();
        return fold >= $(element).offset().top - (options['threshold']);
    };

    function displayContent(element){
        $(element).animate({
            opacity: 1
        }, 2000, function() {
            // Animation complete.
        });
    };

    function displayAboveTheFoldContent(elements, options){
        elements.each(function(){
            if (aboveTheFold(this, options)){
                displayContent(this);
            }
        });
    };
})(jQuery);